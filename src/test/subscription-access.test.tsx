import { renderHook, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useSubscription } from "@/hooks/useSubscription";

const state = vi.hoisted(() => ({
  profile: { payment_status: "free", access_expires_at: null as string | null },
  rows: [] as Array<{ price_id: string; status: string; current_period_end: string | null }>,
}));

vi.mock("@/contexts/AuthContext", () => ({
  useAuth: () => ({ user: { id: "new-account", email: "tahahareb7@gmail.com" }, profile: state.profile }),
}));
vi.mock("@/lib/stripe", () => ({ getStripeEnvironment: () => "live" }));
vi.mock("@/integrations/supabase/client", () => ({
  supabase: {
    from: () => ({ select: () => ({ eq: () => ({ eq: () => ({
      order: async () => ({ data: state.rows }),
    }) }) }) }),
  },
}));

describe("subscription access without email bypasses", () => {
  beforeEach(() => {
    state.profile = { payment_status: "free", access_expires_at: null };
    state.rows = [];
  });

  it("does not grant either exam to a fresh free owner account", async () => {
    const { result } = renderHook(() => useSubscription());
    await waitFor(() => expect(result.current.loading).toBe(false));
    expect(result.current.hasAccessTo("nce")).toBe(false);
    expect(result.current.hasAccessTo("ncmhce")).toBe(false);
  });

  it("keeps NCE access for a paid NCE subscription only", async () => {
    state.rows = [{ price_id: "nce_monthly", status: "active", current_period_end: "2099-01-01T00:00:00Z" }];
    const { result } = renderHook(() => useSubscription());
    await waitFor(() => expect(result.current.loading).toBe(false));
    expect(result.current.hasAccessTo("nce")).toBe(true);
    expect(result.current.hasAccessTo("ncmhce")).toBe(false);
  });

  it("keeps both exams available for an explicit unexpired complimentary grant", async () => {
    state.profile = { payment_status: "comped", access_expires_at: "2099-01-01T00:00:00Z" };
    const { result } = renderHook(() => useSubscription());
    await waitFor(() => expect(result.current.loading).toBe(false));
    expect(result.current.hasAccessTo("nce")).toBe(true);
    expect(result.current.hasAccessTo("ncmhce")).toBe(true);
  });
});