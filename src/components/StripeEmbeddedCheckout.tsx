import { useMemo } from "react";
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from "@stripe/react-stripe-js";
import { getStripe, getStripeEnvironment } from "@/lib/stripe";
import { supabase } from "@/integrations/supabase/client";

interface StripeEmbeddedCheckoutProps {
  priceId: string;
  quantity?: number;
  customerEmail?: string;
  userId?: string;
  returnUrl?: string;
}

export function StripeEmbeddedCheckout({
  priceId,
  quantity,
  customerEmail,
  userId,
  returnUrl,
}: StripeEmbeddedCheckoutProps) {
  // Memoize so EmbeddedCheckoutProvider doesn't see a new fetchClientSecret on every render
  // (otherwise Stripe throws "You cannot change fetchClientSecret after setting it").
  const options = useMemo(
    () => ({
      fetchClientSecret: async (): Promise<string> => {
        const { data, error } = await supabase.functions.invoke("create-checkout", {
          body: { priceId, quantity, customerEmail, userId, returnUrl, environment: getStripeEnvironment() },
        });
        if (error || !data?.clientSecret) {
          throw new Error(error?.message || "Failed to create checkout session");
        }
        return data.clientSecret;
      },
    }),
    [priceId, quantity, customerEmail, userId, returnUrl]
  );

  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider stripe={getStripe()} options={options}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
}
