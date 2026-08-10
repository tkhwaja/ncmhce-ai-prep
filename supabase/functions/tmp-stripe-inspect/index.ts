import { createStripeClient } from "../_shared/stripe.ts";

// TEMPORARY diagnostic function. Read-only. Delete after use.
Deno.serve(async (req) => {
  try {
    const url = new URL(req.url);
    const subId = url.searchParams.get("sub");
    if (!subId) return new Response(JSON.stringify({ error: "sub required" }), { status: 400 });
    const stripe = createStripeClient("live");
    const sub: any = await stripe.subscriptions.retrieve(subId);
    const item = sub.items?.data?.[0];
    return new Response(
      JSON.stringify({
        id: sub.id,
        status: sub.status,
        cancel_at_period_end: sub.cancel_at_period_end,
        cancel_at: sub.cancel_at,
        canceled_at: sub.canceled_at,
        current_period_end_root: sub.current_period_end ?? null,
        current_period_end_item: item?.current_period_end ?? null,
        price: item?.price?.id,
        lookup_key: item?.price?.lookup_key,
      }),
      { headers: { "Content-Type": "application/json" } },
    );
  } catch (e) {
    return new Response(JSON.stringify({ error: (e as Error).message }), { status: 500 });
  }
});
