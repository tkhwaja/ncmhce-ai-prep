
## Goal

Determine whether the "Fraudulent" dispute from `ssupreme2@mercy.edu` (dispute `du_1TuOlg70VlXdNqxgXKHgOwt5`, evidence deadline **Aug 11, 2026**) is a legitimate chargeback, a customer misunderstanding, or a platform error — and tell you exactly what to do in Stripe.

## What I already confirmed (read-only)

- **No account in our system for that email.** `profiles`, `auth.users`, and `subscriptions` all return zero rows for `ssupreme2@mercy.edu` (searched exact + `%mercy.edu%` + `%supreme%`).
- Reason code from your email: **Fraudulent** — the cardholder told their bank they didn't authorize the charge.
- All recent live subscriptions (last 10) belong to other customers — this dispute is not tied to any of them.

## Investigation steps (Stripe side)

1. **Pull the dispute** via the connector gateway (live env):
   - `GET /v1/disputes/du_1TuOlg70VlXdNqxgXKHgOwt5` → amount, currency, charge id, created date, network reason code, evidence deadline (confirm Aug 11), current status.
2. **Pull the charge** it's tied to:
   - `GET /v1/charges/<charge_id>` → payment_method, card brand/last4/country, billing email, name, IP address, `risk_score` and `risk_level` from Stripe Radar, receipt url.
3. **Pull the customer** on that charge:
   - `GET /v1/customers/<customer_id>` → email on file at checkout (may differ from bank email), created date, metadata (should contain our `userId` if checkout was completed through our flow).
4. **Pull the checkout session** (search sessions by `customer` or `payment_intent`) to see whether it was our `create-checkout` session (has `metadata.userId`) or something else.
5. **Cross-check `metadata.userId`** against our `profiles` and `subscriptions` tables — this catches the case where they signed up with one email and paid with another.
6. **Look for prior refund attempts** on the charge (`refunds` array).

## Platform-side checks

- `subscriptions` and `profiles` lookup by any `userId` / `stripe_customer_id` returned above.
- Edge function logs around the charge timestamp: any `create-portal-session`, `submit-cancellation-feedback`, or failed cancellation attempt from that user? (A user who tried to cancel and couldn't is a red flag we caused it.)
- Auth logs: did the account ever log in after paying? Zero sessions after payment supports the "never used the product" angle.

## Verdict framework

| Finding | Likely verdict | Action |
|---|---|---|
| Stripe Radar flagged high risk, card country mismatches billing, no login after payment | Real card fraud | **Accept the dispute** in Stripe. Do not submit evidence. |
| Customer exists, used the app, then filed "fraudulent" instead of contacting us | "Friendly fraud" | Submit evidence: signup timestamp, login history, terms accepted, receipt, product usage. Odds of winning "Fraudulent" reason code are low (~15–25%) but non-zero. |
| Customer tried to cancel / refund and we failed them (webhook bug, portal error) | Our fault | Refund immediately (accepts the dispute) and reply to the customer. |
| No `metadata.userId`, unknown email, checkout via a link they didn't recognize | Descriptor confusion (statement said `LINK.COM* …`) | Usually still lose. Accept + tighten statement descriptor going forward. |

## Deliverable to you

A short writeup with:
- Charge amount, date, card country, Radar score
- Whether an account was created and whether it was used
- Whether we contributed to the dispute in any way
- One clear recommendation: **Accept** (one click in Stripe, refunds money + closes dispute, avoids further fees) or **Submit evidence** (I'll list the exact evidence to attach)
- If you want, a short apology / offer-to-refund email to send to the customer's email on file — sometimes they withdraw the dispute with their bank when contacted directly.

## Technical notes

- All Stripe calls go through `https://connector-gateway.lovable.dev/stripe` with `STRIPE_LIVE_API_KEY` + `LOVABLE_API_KEY` (per our shared `_shared/stripe.ts` pattern). I'll run these as ad-hoc reads from an edge function invocation — no new persistent code, no schema changes, no user-visible changes.
- Nothing in this plan touches any user's data, subscription, or billing. It's read-only until you approve an action (accept / refund / submit evidence).
