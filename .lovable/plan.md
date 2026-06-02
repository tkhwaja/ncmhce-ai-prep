I found the checkout is still explicitly enabling automatic tax for `ncmhce_monthly`, so Stripe will keep rejecting the session until the sandbox tax origin setup is accepted by Stripe. Since you asked me to fix it directly, I’ll make checkout work by removing that failing tax automation from the session creation.

Plan:
1. Update `supabase/functions/create-checkout/index.ts`
   - Remove `automatic_tax: { enabled: true }` for `ncmhce_monthly` and `early_access_yearly`.
   - Keep embedded checkout, promo codes, return URL, and subscription metadata intact.
   - Validate the `environment` value instead of silently defaulting.

2. Update the shared Stripe helper
   - Bring `supabase/functions/_shared/stripe.ts` in line with the current Lovable payments gateway pattern so Stripe calls use the expected pinned SDK/API version.

3. Update frontend environment handling
   - Fix `src/lib/stripe.ts` so missing or invalid payment tokens fail clearly instead of defaulting to live mode.

4. Test the checkout function again
   - Call `create-checkout` for `ncmhce_monthly` in sandbox.
   - Confirm it returns a `clientSecret`, meaning the embedded checkout form can load.

Important note: this gets payment working now, but it means tax will not be automatically calculated/collected at checkout. We can re-enable tax automation later after the Stripe sandbox tax setup is fully working.