import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "npm:@supabase/supabase-js@2";
import { type StripeEnv, createStripeClient } from "../_shared/stripe.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Content-Type': 'application/json',
};

const supabase = createClient(
  Deno.env.get("SUPABASE_URL") ?? "",
  Deno.env.get("SUPABASE_ANON_KEY") ?? "",
);

async function resolveOrCreateCustomer(
  stripe: ReturnType<typeof createStripeClient>,
  options: { email?: string; userId: string },
): Promise<string> {
  if (!/^[a-zA-Z0-9_-]+$/.test(options.userId)) throw new Error("Invalid userId");
  const found = await stripe.customers.search({
    query: `metadata['userId']:'${options.userId}'`,
    limit: 1,
  });
  if (found.data.length) return found.data[0].id;

  if (options.email) {
    const existing = await stripe.customers.list({ email: options.email, limit: 1 });
    if (existing.data.length) {
      const customer = existing.data[0];
      if (customer.metadata?.userId !== options.userId) {
        await stripe.customers.update(customer.id, {
          metadata: { ...customer.metadata, userId: options.userId },
        });
      }
      return customer.id;
    }
  }

  const created = await stripe.customers.create({
    ...(options.email && { email: options.email }),
    metadata: { userId: options.userId },
  });
  return created.id;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const authHeader = req.headers.get("authorization");
    const token = authHeader?.replace(/^Bearer\s+/i, "");
    const { data: { user }, error: authError } = await supabase.auth.getUser(token);
    if (authError || !user) {
      return new Response(JSON.stringify({ error: "Please sign in before starting checkout." }), { status: 401, headers: corsHeaders });
    }

    const { priceId, quantity, returnUrl, environment } = await req.json();
    if (!priceId || typeof priceId !== 'string' || !/^[a-zA-Z0-9_-]+$/.test(priceId)) {
      return new Response(JSON.stringify({ error: "Invalid priceId" }), { status: 400, headers: corsHeaders });
    }

    if (environment !== "sandbox" && environment !== "live") {
      return new Response(JSON.stringify({ error: "Invalid payment environment" }), { status: 400, headers: corsHeaders });
    }
    const env: StripeEnv = environment;
    const stripe = createStripeClient(env);

    const prices = await stripe.prices.list({ lookup_keys: [priceId], active: true, expand: ["data.product"] });
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
    const customerId = await resolveOrCreateCustomer(stripe, {
      email: user.email,
      userId: user.id,
    });

    const sessionParams: any = {
      line_items: [{ price: stripePrice.id, quantity: quantity || 1 }],
      mode: isRecurring ? "subscription" : "payment",
      ui_mode: "embedded_page",
      return_url: returnUrl || `${req.headers.get("origin")}/checkout/return?session_id={CHECKOUT_SESSION_ID}`,
      allow_promotion_codes: true,
      customer: customerId,
      metadata: { userId: user.id, priceId, managed_payments: "true" },
      ...(isRecurring && { subscription_data: { metadata: { userId: user.id, priceId } } }),
      managed_payments: { enabled: true },
    };





    const session = await stripe.checkout.sessions.create(sessionParams);

    return new Response(JSON.stringify({ clientSecret: session.client_secret }), { headers: corsHeaders });
  } catch (error) {
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : String(error) }), { status: 500, headers: corsHeaders });
  }
});
