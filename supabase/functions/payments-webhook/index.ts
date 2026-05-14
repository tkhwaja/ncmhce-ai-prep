import { createClient } from "npm:@supabase/supabase-js@2";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { type StripeEnv, verifyWebhook } from "../_shared/stripe.ts";

const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
);

serve(async (req) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const url = new URL(req.url);
  const env = (url.searchParams.get('env') || 'sandbox') as StripeEnv;

  try {
    const event = await verifyWebhook(req, env);
    console.log("Received event:", event.type, "env:", env);

    switch (event.type) {
      case "checkout.session.completed":
        await handleCheckoutCompleted(event.data.object);
        break;
      case "customer.subscription.created":
        await handleSubscriptionCreated(event.data.object, env);
        break;
      case "customer.subscription.updated":
        await handleSubscriptionUpdated(event.data.object, env);
        break;
      case "customer.subscription.deleted":
        await handleSubscriptionDeleted(event.data.object, env);
        break;
      case "invoice.payment_failed":
        console.log("Payment failed:", event.data.object.id);
        break;
      default:
        console.log("Unhandled event:", event.type);
    }

    return new Response(JSON.stringify({ received: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("Webhook error:", e);
    return new Response("Webhook error", { status: 400 });
  }
});

async function handleCheckoutCompleted(session: any) {
  if (session.mode !== "payment") return;
  const userId = session.metadata?.userId;
  if (!userId) return;

  // Detect early-access offer via line items lookup_key
  let lookupKey: string | null = session.metadata?.priceId || null;
  if (!lookupKey) {
    try {
      const { createStripeClient } = await import("../_shared/stripe.ts");
      const env = (session.livemode ? "live" : "sandbox") as StripeEnv;
      const stripe = createStripeClient(env);
      const items = await stripe.checkout.sessions.listLineItems(session.id, { limit: 5, expand: ["data.price"] });
      lookupKey = items.data[0]?.price?.lookup_key ?? null;
    } catch (e) {
      console.error("Failed to inspect line items:", e);
    }
  }

  const isEarlyAccess = lookupKey === "early_access_yearly" || lookupKey === "founding_yearly";

  if (isEarlyAccess) {
    // Fixed access window: May 31, 2026 -> May 31, 2027 (UTC)
    const accessStart = new Date("2026-05-31T00:00:00Z");
    const accessEnd = new Date("2027-05-31T00:00:00Z");
    await supabase
      .from("profiles")
      .update({ access_expires_at: accessEnd.toISOString(), payment_status: "early_access" })
      .eq("id", userId);
    console.log(
      "Early-access granted to user:",
      userId,
      "from",
      accessStart.toISOString(),
      "until",
      accessEnd.toISOString(),
    );
  } else {
    // Legacy one-time payment fallback
    await supabase.from("profiles").update({ payment_status: "paid" }).eq("id", userId);
    console.log("Legacy one-time payment recorded for user:", userId);
  }
}

async function handleSubscriptionCreated(subscription: any, env: StripeEnv) {
  const userId = subscription.metadata?.userId;
  if (!userId) {
    console.error("No userId in subscription metadata");
    return;
  }

  const item = subscription.items?.data?.[0];
  const priceId = item?.price?.metadata?.lovable_external_id || item?.price?.id;
  const productId = item?.price?.product;

  const periodStart = subscription.current_period_start;
  const periodEnd = subscription.current_period_end;

  const { error } = await supabase.from("subscriptions").upsert(
    {
      user_id: userId,
      stripe_subscription_id: subscription.id,
      stripe_customer_id: subscription.customer,
      product_id: productId,
      price_id: priceId,
      status: subscription.status,
      current_period_start: periodStart ? new Date(periodStart * 1000).toISOString() : null,
      current_period_end: periodEnd ? new Date(periodEnd * 1000).toISOString() : null,
      cancel_at_period_end: subscription.cancel_at_period_end || false,
      environment: env,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "stripe_subscription_id" }
  );

  if (error) console.error("subscription upsert failed:", error);

  // Mirror onto profile so legacy access gates work
  const isActive = ["active", "trialing"].includes(subscription.status);
  await supabase
    .from("profiles")
    .update({
      payment_status: isActive ? "subscribed" : "free",
      access_expires_at: periodEnd ? new Date(periodEnd * 1000).toISOString() : null,
    })
    .eq("id", userId);
}

async function handleSubscriptionUpdated(subscription: any, env: StripeEnv) {
  const item = subscription.items?.data?.[0];
  const priceId = item?.price?.metadata?.lovable_external_id || item?.price?.id;
  const productId = item?.price?.product;

  const periodStart = subscription.current_period_start;
  const periodEnd = subscription.current_period_end;

  await supabase
    .from("subscriptions")
    .update({
      status: subscription.status,
      product_id: productId,
      price_id: priceId,
      current_period_start: periodStart ? new Date(periodStart * 1000).toISOString() : null,
      current_period_end: periodEnd ? new Date(periodEnd * 1000).toISOString() : null,
      cancel_at_period_end: subscription.cancel_at_period_end || false,
      updated_at: new Date().toISOString(),
    })
    .eq("stripe_subscription_id", subscription.id)
    .eq("environment", env);
}

async function handleSubscriptionDeleted(subscription: any, env: StripeEnv) {
  await supabase
    .from("subscriptions")
    .update({
      status: "canceled",
      updated_at: new Date().toISOString(),
    })
    .eq("stripe_subscription_id", subscription.id)
    .eq("environment", env);
}
