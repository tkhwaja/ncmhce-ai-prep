import { createClient } from "npm:@supabase/supabase-js@2";
import { createStripeClient } from "../_shared/stripe.ts";

// TEMPORARY backfill/diagnostic function. Delete after use.
const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
);

Deno.serve(async () => {
  const stripe = createStripeClient("live");
  const { data: rows } = await supabase
    .from("subscriptions")
    .select("stripe_subscription_id")
    .eq("environment", "live");

  const out: any[] = [];
  for (const row of rows ?? []) {
    try {
      const sub: any = await stripe.subscriptions.retrieve(row.stripe_subscription_id);
      const item = sub.items?.data?.[0];
      const periodEnd = sub.current_period_end ?? item?.current_period_end ?? sub.cancel_at ?? null;
      const periodStart = sub.current_period_start ?? item?.current_period_start ?? null;
      await supabase
        .from("subscriptions")
        .update({
          status: sub.status,
          cancel_at_period_end: sub.cancel_at_period_end || false,
          current_period_start: periodStart ? new Date(periodStart * 1000).toISOString() : null,
          current_period_end: periodEnd ? new Date(periodEnd * 1000).toISOString() : null,
          updated_at: new Date().toISOString(),
        })
        .eq("stripe_subscription_id", sub.id)
        .eq("environment", "live");
      out.push({ id: sub.id, status: sub.status, cancel_at_period_end: sub.cancel_at_period_end, period_end: periodEnd });
    } catch (e) {
      out.push({ id: row.stripe_subscription_id, error: (e as Error).message });
    }
  }
  return new Response(JSON.stringify(out, null, 2), { headers: { "Content-Type": "application/json" } });
});
