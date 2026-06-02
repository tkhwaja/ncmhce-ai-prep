import { useEffect, useMemo, useState } from "react";
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from "@stripe/react-stripe-js";
import { getStripe, getStripeEnvironment } from "@/lib/stripe";
import { supabase } from "@/integrations/supabase/client";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

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
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [retryKey, setRetryKey] = useState(0);

  useEffect(() => {
    let active = true;
    setClientSecret(null);
    setErrorMessage(null);

    const createSession = async () => {
      try {
        const { data, error } = await supabase.functions.invoke("create-checkout", {
          body: { priceId, quantity, customerEmail, userId, returnUrl, environment: getStripeEnvironment() },
        });

        if (!active) return;

        if (error || data?.error || !data?.clientSecret) {
          setErrorMessage(data?.error || error?.message || "Checkout could not be started.");
          return;
        }

        setClientSecret(data.clientSecret);
      } catch (error) {
        if (active) setErrorMessage(error instanceof Error ? error.message : "Checkout could not be started.");
      }
    };

    createSession();

    return () => {
      active = false;
    };
  }, [priceId, quantity, customerEmail, userId, returnUrl, retryKey]);

  const stripe = useMemo(() => {
    if (!clientSecret) return null;
    try {
      return getStripe();
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Stripe checkout is not configured.");
      return null;
    }
  }, [clientSecret]);

  const options = useMemo(() => ({ clientSecret }), [clientSecret]);

  if (errorMessage) {
    return (
      <Alert variant="destructive">
        <AlertTitle>Checkout is not available</AlertTitle>
        <AlertDescription className="space-y-3">
          <p>{errorMessage}</p>
          <Button type="button" variant="outline" onClick={() => setRetryKey((value) => value + 1)}>
            Try again
          </Button>
        </AlertDescription>
      </Alert>
    );
  }

  if (!clientSecret || !stripe) {
    return (
      <div className="flex min-h-64 items-center justify-center rounded-lg border border-border bg-card">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      </div>
    );
  }

  return (
    <div id="checkout" className="min-h-96">
      <EmbeddedCheckoutProvider stripe={stripe} options={options}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
}
