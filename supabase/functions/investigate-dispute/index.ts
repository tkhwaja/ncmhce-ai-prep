import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createStripeClient } from "../_shared/stripe.ts";

serve(async (req) => {
  try {
    const url = new URL(req.url);
    const disputeId = url.searchParams.get("dispute") || "du_1TuOlg70VlXdNqxgXKHgOwt5";
    const stripe = createStripeClient("live");
    const dispute: any = await stripe.disputes.retrieve(disputeId, { expand: ["charge", "charge.customer", "payment_intent"] });
    const charge = dispute.charge;
    const customer = charge?.customer;
    let sessions: any = null;
    if (charge?.payment_intent) {
      try {
        const list = await stripe.checkout.sessions.list({ payment_intent: typeof charge.payment_intent === "string" ? charge.payment_intent : charge.payment_intent.id, limit: 5 });
        sessions = list.data.map((s: any) => ({ id: s.id, customer_email: s.customer_email, metadata: s.metadata, mode: s.mode, created: s.created }));
      } catch (e) { sessions = String(e); }
    }
    const summary = {
      dispute: {
        id: dispute.id, amount: dispute.amount, currency: dispute.currency, reason: dispute.reason,
        status: dispute.status, created: new Date(dispute.created * 1000).toISOString(),
        evidence_deadline: dispute.evidence_details?.due_by ? new Date(dispute.evidence_details.due_by * 1000).toISOString() : null,
        is_charge_refundable: dispute.is_charge_refundable, network_reason_code: dispute.network_reason_code,
      },
      charge: charge ? {
        id: charge.id, amount: charge.amount, currency: charge.currency, created: new Date(charge.created * 1000).toISOString(),
        paid: charge.paid, refunded: charge.refunded, status: charge.status,
        billing_email: charge.billing_details?.email, billing_name: charge.billing_details?.name,
        billing_address: charge.billing_details?.address,
        card: charge.payment_method_details?.card ? {
          brand: charge.payment_method_details.card.brand, last4: charge.payment_method_details.card.last4,
          country: charge.payment_method_details.card.country, funding: charge.payment_method_details.card.funding,
        } : null,
        outcome: charge.outcome, risk_level: charge.outcome?.risk_level, risk_score: charge.outcome?.risk_score,
        receipt_email: charge.receipt_email, statement_descriptor: charge.calculated_statement_descriptor,
        refunds: charge.refunds?.data?.map((r: any) => ({ id: r.id, amount: r.amount, reason: r.reason, status: r.status, created: new Date(r.created * 1000).toISOString() })),
      } : null,
      customer: customer ? {
        id: customer.id, email: customer.email, name: customer.name, created: new Date(customer.created * 1000).toISOString(),
        metadata: customer.metadata,
      } : null,
      checkout_sessions: sessions,
    };
    return new Response(JSON.stringify(summary, null, 2), { headers: { "Content-Type": "application/json" } });
  } catch (e) {
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : String(e), stack: e instanceof Error ? e.stack : null }), { status: 500, headers: { "Content-Type": "application/json" } });
  }
});
