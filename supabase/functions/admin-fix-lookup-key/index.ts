import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createStripeClient } from "../_shared/stripe.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Content-Type": "application/json",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const stripe = createStripeClient("live");
    const targetKey = "ncmhce_monthly";

    // 1. Find all active recurring monthly USD prices on active products
    const allPrices: any[] = [];
    let starting_after: string | undefined;
    do {
      const page: any = await stripe.prices.list({
        active: true,
        limit: 100,
        expand: ["data.product"],
        ...(starting_after && { starting_after }),
      });
      allPrices.push(...page.data);
      starting_after = page.has_more ? page.data[page.data.length - 1].id : undefined;
    } while (starting_after);

    const candidates = allPrices.filter((p) => {
      const prod = p.product as any;
      return (
        p.active &&
        p.type === "recurring" &&
        p.recurring?.interval === "month" &&
        p.currency === "usd" &&
        p.unit_amount === 7900 &&
        prod && typeof prod !== "string" && prod.active
      );
    });

    if (candidates.length === 0) {
      return new Response(
        JSON.stringify({
          error: "No active $79/month USD price on an active product found",
          all_active_prices: allPrices.map((p) => ({
            id: p.id,
            lookup_key: p.lookup_key,
            unit_amount: p.unit_amount,
            currency: p.currency,
            interval: p.recurring?.interval,
            product_id: typeof p.product === "string" ? p.product : p.product?.id,
            product_name: typeof p.product === "string" ? null : p.product?.name,
            product_active: typeof p.product === "string" ? null : p.product?.active,
          })),
        }),
        { status: 404, headers: corsHeaders }
      );
    }

    // Prefer the one already named "NCMHCE Full Access"; else first.
    const target =
      candidates.find((p) => (p.product as any).name?.toLowerCase().includes("full access")) ||
      candidates[0];

    // 2. Find any existing prices with the lookup_key and clear it
    const existing: any = await stripe.prices.list({ lookup_keys: [targetKey], limit: 10 });
    const cleared: string[] = [];
    for (const p of existing.data) {
      if (p.id === target.id) continue;
      await stripe.prices.update(p.id, { lookup_key: "" });
      cleared.push(p.id);
    }

    // 3. Assign lookup_key to the target price
    const updated = await stripe.prices.update(target.id, {
      lookup_key: targetKey,
      transfer_lookup_key: true,
    });

    return new Response(
      JSON.stringify({
        success: true,
        cleared_from: cleared,
        assigned_to: {
          price_id: updated.id,
          lookup_key: updated.lookup_key,
          product_id: typeof updated.product === "string" ? updated.product : updated.product?.id,
          product_name: (target.product as any).name,
          amount: updated.unit_amount,
        },
      }),
      { headers: corsHeaders }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : String(error) }),
      { status: 500, headers: corsHeaders }
    );
  }
});
