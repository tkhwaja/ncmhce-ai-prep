import { createClient } from "npm:@supabase/supabase-js@2";
import { type StripeEnv, createStripeClient } from "../_shared/stripe.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Content-Type": "application/json",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, serviceKey);

    const token = req.headers.get("authorization")?.replace("Bearer ", "");
    if (!token) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401, headers: corsHeaders });
    }
    const { data: { user }, error: authError } = await supabase.auth.getUser(token);
    if (authError || !user) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401, headers: corsHeaders });
    }

    const body = await req.json().catch(() => ({}));
    const reason = String(body.reason || "").slice(0, 200);
    const details = String(body.details || "").slice(0, 2000);
    const rawEnv = body.environment;

    if (!reason) {
      return new Response(JSON.stringify({ error: "reason is required" }), { status: 400, headers: corsHeaders });
    }
    if (rawEnv !== "sandbox" && rawEnv !== "live") {
      return new Response(JSON.stringify({ error: "environment must be 'sandbox' or 'live'" }), { status: 400, headers: corsHeaders });
    }
    const env: StripeEnv = rawEnv;

    // Profile + latest sub in this env
    const { data: profile } = await supabase
      .from("profiles")
      .select("full_name, email, access_expires_at, payment_status")
      .eq("id", user.id)
      .maybeSingle();

    const { data: sub } = await supabase
      .from("subscriptions")
      .select("status, current_period_end, cancel_at_period_end, stripe_subscription_id")
      .eq("user_id", user.id)
      .eq("environment", env)
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle();

    const subscriptionStatus = sub?.status
      ? `${sub.status}${sub.cancel_at_period_end ? " (cancel at period end)" : ""}`
      : profile?.payment_status === "paid"
      ? "founding (one-time)"
      : "none";

    // Send support email
    const sendRes = await fetch(`${supabaseUrl}/functions/v1/send-transactional-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${serviceKey}`,
      },
      body: JSON.stringify({
        templateName: "subscription-cancellation-feedback",
        recipientEmail: "support@theexampath.com",
        templateData: {
          userEmail: user.email || profile?.email || "unknown",
          userName: profile?.full_name || "",
          userId: user.id,
          reason,
          details,
          subscriptionStatus,
          accessExpiresAt: profile?.access_expires_at || sub?.current_period_end || "",
        },
      }),
    });

    if (!sendRes.ok) {
      const errText = await sendRes.text();
      console.error("send-transactional-email failed", errText);
      return new Response(JSON.stringify({ error: "Failed to submit feedback" }), { status: 500, headers: corsHeaders });
    }

    // Attempt to cancel the Stripe sub at period end
    let stripeCanceled = false;
    let stripeCancelError: string | null = null;
    let accessUntil: string | null = sub?.current_period_end ?? null;

    const canCancel =
      !!sub?.stripe_subscription_id &&
      sub.status !== "canceled" &&
      !sub.cancel_at_period_end;

    if (canCancel) {
      try {
        const stripe = createStripeClient(env);
        const updated = await stripe.subscriptions.update(sub.stripe_subscription_id!, {
          cancel_at_period_end: true,
        });
        stripeCanceled = true;
        const item: any = (updated as any).items?.data?.[0];
        const periodEnd = item?.current_period_end ?? (updated as any).current_period_end;
        if (periodEnd) accessUntil = new Date(periodEnd * 1000).toISOString();
      } catch (e) {
        console.error("Stripe cancel failed", e);
        stripeCancelError = e instanceof Error ? e.message : String(e);
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        stripeCanceled,
        stripeCancelError,
        accessUntil,
        hadStripeSub: !!sub?.stripe_subscription_id,
      }),
      { headers: corsHeaders },
    );
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : String(e) }), { status: 500, headers: corsHeaders });
  }
});
