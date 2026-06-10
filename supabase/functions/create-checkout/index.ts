import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { type StripeEnv, createStripeClient } from "../_shared/stripe.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Content-Type': 'application/json',
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { priceId, quantity, customerEmail, userId, returnUrl, environment } = await req.json();
    if (!priceId || typeof priceId !== 'string' || !/^[a-zA-Z0-9_-]+$/.test(priceId)) {
      return new Response(JSON.stringify({ error: "Invalid priceId" }), { status: 400, headers: corsHeaders });
    }

    const env = (environment || 'sandbox') as StripeEnv;
    const stripe = createStripeClient(env);

    const prices = await stripe.prices.list({ lookup_keys: [priceId], active: true, expand: ["data.product"] });
    console.log("prices response shape:", JSON.stringify(prices)?.slice(0, 800));
    const stripePrice = prices.data.find((price: any) => {
      const product = price.product;
      return price.active && (typeof product === "string" || product.active !== false);
    });

    if (!prices.data.length) {
      return new Response(JSON.stringify({ error: "Price not found" }), { status: 404, headers: corsHeaders });
    }

    if (!stripePrice) {
      return new Response(
        JSON.stringify({
          error: environment === "live"
            ? "Live checkout is not ready yet because the live subscription product is inactive. Publish the latest Lovable changes to sync the repaired product, then try again."
            : "Checkout is not ready yet because the subscription product is inactive.",
        }),
        { status: 409, headers: corsHeaders }
      );
    }

    const product = stripePrice.product as any;

    const isRecurring = stripePrice.type === "recurring";

    const sessionParams: any = {
      line_items: [{ price: stripePrice.id, quantity: quantity || 1 }],
      mode: isRecurring ? "subscription" : "payment",
      ui_mode: "embedded",
      return_url: returnUrl || `${req.headers.get("origin")}/checkout/return?session_id={CHECKOUT_SESSION_ID}`,
      allow_promotion_codes: true,
      ...(customerEmail && { customer_email: customerEmail }),
      ...(userId && {
        metadata: { userId, priceId },
        ...(isRecurring && { subscription_data: { metadata: { userId, priceId } } }),
      }),
      automatic_tax: { enabled: false },
    };





    const session = await stripe.checkout.sessions.create(sessionParams);

    return new Response(JSON.stringify({ clientSecret: session.client_secret, v: "no-tax-v2" }), { headers: corsHeaders });
  } catch (error) {
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : String(error) }), { status: 500, headers: corsHeaders });
  }
});
