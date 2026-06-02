import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { StripeEmbeddedCheckout } from "./StripeEmbeddedCheckout";

// --- Mocks -----------------------------------------------------------------

const invokeMock = vi.fn();

vi.mock("@/integrations/supabase/client", () => ({
  supabase: {
    functions: { invoke: (...args: unknown[]) => invokeMock(...args) },
  },
}));

vi.mock("@/lib/stripe", () => ({
  getStripe: () => Promise.resolve(null),
  getStripeEnvironment: () => "sandbox",
}));

// Render a recognizable marker in place of the real Stripe embedded form.
vi.mock("@stripe/react-stripe-js", () => ({
  EmbeddedCheckoutProvider: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="stripe-provider">{children}</div>
  ),
  EmbeddedCheckout: () => <div data-testid="embedded-checkout" />,
}));

const props = {
  priceId: "ncmhce_monthly",
  customerEmail: "user@example.com",
  userId: "user-1",
  returnUrl: "https://example.com/checkout/return",
};

beforeEach(() => {
  invokeMock.mockReset();
  vi.stubEnv("VITE_PAYMENTS_CLIENT_TOKEN", "pk_test_123");
});

describe("StripeEmbeddedCheckout", () => {
  it("shows a loading state first, then renders the embedded checkout on success", async () => {
    invokeMock.mockResolvedValue({ data: { clientSecret: "cs_test_abc" }, error: null });

    render(<StripeEmbeddedCheckout {...props} />);

    expect(screen.getByText(/loading secure checkout/i)).toBeInTheDocument();

    await waitFor(() =>
      expect(screen.getByTestId("embedded-checkout")).toBeInTheDocument(),
    );
    expect(invokeMock).toHaveBeenCalledWith(
      "create-checkout",
      expect.objectContaining({
        body: expect.objectContaining({ priceId: "ncmhce_monthly", environment: "sandbox" }),
      }),
    );
  });

  it("surfaces the edge function's JSON error body with status (e.g. Price not found)", async () => {
    const context = {
      status: 404,
      clone: () => ({
        json: () => Promise.resolve({ error: "Price not found" }),
        text: () => Promise.resolve(""),
      }),
    };
    invokeMock.mockResolvedValue({
      data: null,
      error: Object.assign(new Error("Edge Function returned a non-2xx status code"), {
        context,
      }),
    });

    render(<StripeEmbeddedCheckout {...props} />);

    await waitFor(() =>
      expect(screen.getByText("HTTP 404: Price not found")).toBeInTheDocument(),
    );
    expect(screen.getByText(/checkout couldn't load/i)).toBeInTheDocument();
    // The blank-render bug would have shown nothing — assert the form is absent.
    expect(screen.queryByTestId("embedded-checkout")).not.toBeInTheDocument();
  });

  it("falls back to plain text body when the response isn't JSON", async () => {
    const context = {
      status: 500,
      clone: () => ({
        json: () => Promise.reject(new SyntaxError("not json")),
        text: () => Promise.resolve("Internal Server Error: boom"),
      }),
    };
    invokeMock.mockResolvedValue({
      data: null,
      error: Object.assign(new Error("Edge Function returned a non-2xx status code"), {
        context,
      }),
    });

    render(<StripeEmbeddedCheckout {...props} />);

    await waitFor(() =>
      expect(
        screen.getByText("HTTP 500: Internal Server Error: boom"),
      ).toBeInTheDocument(),
    );
  });

  it("falls back to the generic error message when there is no response context", async () => {
    invokeMock.mockResolvedValue({
      data: null,
      error: new Error("Failed to send a request to the Edge Function"),
    });

    render(<StripeEmbeddedCheckout {...props} />);

    await waitFor(() =>
      expect(
        screen.getByText("Failed to send a request to the Edge Function"),
      ).toBeInTheDocument(),
    );
  });

  it("retries the request when 'Try again' is clicked", async () => {
    invokeMock
      .mockResolvedValueOnce({ data: null, error: new Error("temporary failure") })
      .mockResolvedValueOnce({ data: { clientSecret: "cs_test_xyz" }, error: null });

    render(<StripeEmbeddedCheckout {...props} />);

    await waitFor(() => expect(screen.getByText("temporary failure")).toBeInTheDocument());

    fireEvent.click(screen.getByRole("button", { name: /try again/i }));

    await waitFor(() =>
      expect(screen.getByTestId("embedded-checkout")).toBeInTheDocument(),
    );
    expect(invokeMock).toHaveBeenCalledTimes(2);
  });

  it("shows a config error when the publishable key is missing", async () => {
    vi.stubEnv("VITE_PAYMENTS_CLIENT_TOKEN", "");

    render(<StripeEmbeddedCheckout {...props} />);

    await waitFor(() =>
      expect(screen.getByText(/payments are not configured/i)).toBeInTheDocument(),
    );
    expect(invokeMock).not.toHaveBeenCalled();
  });
});
