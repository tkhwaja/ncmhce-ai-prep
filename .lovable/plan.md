## 1. Coupon field — no code change needed

`supabase/functions/create-checkout/index.ts` already sets `allow_promotion_codes: true`. Stripe's Embedded Checkout automatically renders an "Add promotion code" link. As soon as you create the `WELCOME20` coupon + promo code in Stripe, customers can type it and the discount applies. I'll verify by opening the live checkout in the preview after you confirm the coupon exists.

## 2. New edge function: `create-recovery-campaign`

A one-shot admin function that creates a **draft** email campaign in Brevo containing the 7 stuck-checkout users. You open Brevo → Campaigns → review → click Send.

**Auth:** Restricted to admins. Requires logged-in user with `admin` role (checked via `has_role`). Returns 403 otherwise. `verify_jwt = true`.

**What it does:**
1. Validates caller is an admin.
2. Queries the 7 affected users (same query I used earlier to identify stuck-checkout users — failed `create-checkout` invocations / opened checkout but no completed payment in the affected window) and pulls their email + first name.
3. Calls Brevo `POST /emailCampaigns` via the connector gateway (`https://connector-gateway.lovable.dev/brevo/emailCampaigns`) with:
   - `name`: `Checkout recovery — June 2026`
   - `subject`: `A small thank-you while we fixed checkout`
   - `sender`: `{ name: "ExamPath", email: "<your verified domain sender>" }`
   - `htmlContent`: the recovery email body (apology + `WELCOME20` code + CTA back to pricing page)
   - `recipients.listIds`: a new Brevo contact list created in the same call (so we don't email your whole audience by mistake), OR uses an existing list ID if you pass one.
   - No `scheduledAt` → Brevo saves it as a **draft**.
4. Before creating the campaign, upserts the 7 contacts into a dedicated Brevo list named `Checkout Recovery — June 2026` via `POST /contacts` and `POST /contacts/lists`.
5. Returns `{ campaignId, listId, recipientCount, brevoUrl }` so the response links you straight to the draft in Brevo.

**Email copy (HTML, plain version):**

> Subject: A small thank-you while we fixed checkout
>
> Hi {{FIRSTNAME|there}},
>
> You tried to start your ExamPath subscription recently and ran into a checkout issue on our end. That's fixed now, and I'm sorry for the friction — especially while you're preparing for the NCMHCE.
>
> As a thank-you for your patience, here's **20% off your first 3 months**: use code **`WELCOME20`** at checkout.
>
> [Resume checkout →](https://www.theexampath.com/pricing)
>
> If anything still doesn't work, just reply to this email and I'll sort it out personally.
>
> — The ExamPath team

## 3. How you'll use it

After implementation:
1. Open the preview, sign in as admin.
2. I'll run the function once via `supabase--curl_edge_functions` and paste the returned Brevo campaign URL.
3. You open it in Brevo, double-check the 7 recipients + body, and click Send.

## Technical notes

- Brevo connector is already linked (`BREVO_API_KEY` secret present), so no new credential setup.
- Sender email must be on a verified Brevo domain — I'll read `email_domain--check_email_domain_status` to pick the right `from` address before writing the function.
- The function is idempotent-ish: if a list with that name already exists, it reuses it; if a draft campaign with the same `name` exists, it creates a new one (Brevo allows duplicate names) — safer than mutating an existing draft.
- No DB schema changes.

Files touched:
- `supabase/functions/create-recovery-campaign/index.ts` (new)
- `supabase/config.toml` (add `[functions.create-recovery-campaign]` block; `verify_jwt = true`)
