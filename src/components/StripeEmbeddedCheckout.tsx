import { useEffect, useState } from "react";
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from "@stripe/react-stripe-js";
import { getStripe, getStripeEnvironment } from "@/lib/stripe";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

interface StripeEmbeddedCheckoutProps {
  priceId: string;
  quantity?: number;
  customerEmail?: string;
  userId?: string;
  returnUrl?: string;
}

type CheckoutState =
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "ready"; clientSecret: string };

// Surface the edge function's own error body (e.g. "Price not found") instead of
// the generic "Edge Function returned a non-2xx status code" that supabase-js throws.
async function extractInvokeError(error: unknown): Promise<string> {
  const fallback =
    error instanceof Error ? error.message : "Failed to create checkout session";
  const context = (error as { context?: Response })?.context;
  if (context && typeof context.clone === "function") {
    try {
      const body = await context.clone().json();
      if (body?.error && typeof body.error === "string") return body.error;
    } catch {
      /* response had no JSON body — fall back below */
    }
  }
  return fallback;
}

export function StripeEmbeddedCheckout({
  priceId,
  quantity,
  customerEmail,
  userId,
  returnUrl,
}: StripeEmbeddedCheckoutProps) {
  const [state, setState] = useState<CheckoutState>({ status: "loading" });
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let cancelled = false;
    setState({ status: "loading" });

    if (!import.meta.env.VITE_PAYMENTS_CLIENT_TOKEN) {
      setState({
        status: "error",
        message: "Payments are not configured (missing publishable key).",
      });
      return;
    }

    (async () => {
      try {
        const { data, error } = await supabase.functions.invoke("create-checkout", {
          body: {
            priceId,
            quantity,
            customerEmail,
            userId,
            returnUrl,
            environment: getStripeEnvironment(),
          },
        });
        if (cancelled) return;

        if (error) {
          setState({ status: "error", message: await extractInvokeError(error) });
          return;
        }
        if (!data?.clientSecret) {
          setState({
            status: "error",
            message: "No checkout session was returned. Please try again.",
          });
          return;
        }
        setState({ status: "ready", clientSecret: data.clientSecret });
      } catch (err) {
        if (cancelled) return;
        setState({
          status: "error",
          message:
            err instanceof Error
              ? err.message
              : "Unexpected error creating checkout session.",
        });
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [priceId, quantity, customerEmail, userId, returnUrl, attempt]);

  if (state.status === "loading") {
    return (
      <div
        className="flex flex-col items-center justify-center gap-3 py-12"
        role="status"
        aria-live="polite"
      >
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        <p className="text-sm text-muted-foreground">Loading secure checkout…</p>
      </div>
    );
  }

  if (state.status === "error") {
    return (
      <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-6 text-center">
        <AlertCircle className="mx-auto mb-3 h-8 w-8 text-destructive" />
        <h2 className="mb-1 text-lg font-semibold text-foreground">Checkout couldn't load</h2>
        <p className="mb-4 text-sm text-muted-foreground">{state.message}</p>
        <Button onClick={() => setAttempt((a) => a + 1)}>Try again</Button>
      </div>
    );
  }

  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider
        stripe={getStripe()}
        options={{ clientSecret: state.clientSecret }}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
}
