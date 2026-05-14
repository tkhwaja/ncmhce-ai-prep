# Outreach plan for the 33 affected users

## The two lists (saved as files you can download)

<presentation-artifact path="list-A-signup-blocked.txt" mime_type="text/plain"></presentation-artifact>
<presentation-artifact path="list-B-diagnostic-results-missed.txt" mime_type="text/plain"></presentation-artifact>

### List A — Signup-blocked (23) — never got their confirmation email, so they could not finish creating an account
afancitee@gmail.com, garcia.ilsa@tusd.org, ilsagg1992@gmail.com, joanahammond87@gmail.com, kimberlylorenzini@hotmail.com, knyannapeters@gmail.com, kpeters.babokmed@gmail.com, lesmich122@gmail.com, odalis.norales@gmail.com, qqureshi@phoenixcpt.com, qrafia77@gmail.com, randallthompson43@gmail.com, rbetancourt023@gmail.com, robin26chad@gmail.com, robinlbutler21@gmail.com, rthompson@voail.org, scottsierra73@gmail.com, sheri.smith.e@gmail.com, simonekingsbhs@hotmail.com, siscott@primecaremedical.com, talishahuff@gmail.com, tardel93@hotmail.com, tesslorraine@aol.com

### List B — Diagnostic-results missed (19) — finished the free diagnostic but never received their score breakdown
anna.bordayo@gmail.com, carole.felder29@gmail.com, gayres89@yahoo.com, ilsagg1992@gmail.com, info@counselingyourheart.com, j.m.noah99@gmail.com, joanahammond87@gmail.com, knyannapeters@gmail.com, lesmich122@gmail.com, lety24@hotmail.com, meirepalmer@gmail.com, mmorton396@yahoo.com, odalis.norales@gmail.com, qrafia77@gmail.com, scottsierra73@gmail.com, sheri.smith.e@gmail.con (typo at signup — likely sheri.smith.e@gmail.com), simonekingsbhs@hotmail.com, staceylseal@gmail.com, tardel93@hotmail.com

7 people appear on both lists.

---

## How we actually fix each case

### List A — Signup-blocked
Their auth account was created but the confirmation email never landed, so they cannot log in. Two options:

1. **Manually confirm their email + send a password-set link** (recommended). I run a one-time admin script that:
   - Marks their `auth.users.email_confirmed_at` as confirmed (so the account is usable).
   - Generates a Supabase password-recovery link for each address.
   - The apology email includes that personal "Set your password" link — one click and they're in.

2. **Tell them to "sign up again"** — works, but feels like extra friction and some will drop off.

Going with option 1.

### List B — Diagnostic-results missed
Their results are already saved in `free_diagnostic_leads` (score, domain breakdown, narrative). The fix is:

1. Pull each person's stored results from the database.
2. Re-render the existing `free-diagnostic-breakdown` template with their actual data.
3. Send it now via the working email pipeline.

For `sheri.smith.e@gmail.con` we correct the typo to `.com` before sending.

---

## Email drafts

### Draft for List A (signup-blocked)

> **Subject:** Your TheExamPath account is ready — quick fix from us
>
> Hi {{first_name}},
>
> Thank you for signing up for TheExamPath. A few of our recent signups, including yours, hit a temporary delivery issue on our end and the confirmation email never reached you — that's why you couldn't get into your account. We're really sorry for the friction; that's not the experience we want anyone studying for the NCMHCE to have.
>
> The good news: your account is already set up and waiting. Just click below to set your password and start studying.
>
> **[Set my password and log in]**
>
> If you have any trouble, just reply to this email and I'll personally make sure you're taken care of.
>
> Thanks for your patience,
> Taha — TheExamPath

### Draft for List B (diagnostic-results missed)

> **Subject:** Sorry for the delay — here's your free NCMHCE diagnostic breakdown
>
> Hi {{first_name}},
>
> You took our free NCMHCE diagnostic recently, and your detailed results email got caught in a delivery issue on our side. Sincere apologies — you should have had this in your inbox the same day.
>
> Your full score breakdown is below, including how you did across each NCMHCE content domain and where to focus next.
>
> **[View my diagnostic breakdown]**
>
> If anything looks off or you have questions about your results, just reply to this email.
>
> Thanks for your patience,
> Taha — TheExamPath

---

## Should you send through Google Workspace instead?

**Short answer:** It would simplify the *one-time* apology blast, but it would not fix the underlying app emails — and it has real downsides for List A.

**Where Workspace helps:**
- You can paste both lists into Gmail (BCC) or a mail-merge tool (GMass, YAMM) and send branded plain-text apologies in 10 minutes — no infrastructure work.
- Personal-feeling, replies go straight to your inbox.
- Gmail's sender reputation is rock-solid, so deliverability for this one batch will be excellent.

**Where Workspace does not help:**
- **List A still can't log in.** Workspace can deliver an apology, but the link inside still has to be a Supabase recovery / set-password link generated from our backend. So we'd still run the admin script — Workspace just becomes the delivery channel for the link.
- **List B's results email is dynamic per recipient** (each person's score, domain breakdown, narrative). Doing that from Gmail means either (a) mail merge with a CSV I export for you, or (b) a generic "log in to view your results" link — which sends them back into the broken-signup flow.
- **Workspace has a 2,000 recipients/day limit and no built-in suppression/unsubscribe handling.** Fine for 33 people once, not fine as a pattern.
- **Sender domain mismatch.** Your transactional emails go from `notify.theexampath.com`; sending the apology from `you@theexampath.com` is fine and even feels more personal, but mixing channels long-term hurts brand consistency and deliverability tracking.

**My recommendation:**
- **Use the in-app pipeline for both** so the personalized links and per-user diagnostic data are generated automatically and logged. Once `notify.theexampath.com` is verified, this is one click.
- **If verification keeps stalling**, fall back to: I export List A as a CSV with each person's set-password link, and List B as a CSV with each person's results URL. You paste those into a Gmail mail-merge (GMass) and send from your Workspace address. Best of both worlds.

---

## Proposed execution order (once you approve)

1. Wait for `notify.theexampath.com` to flip to Active (or you tell me to go the Workspace/CSV route).
2. Run the admin script for List A → generate set-password links + mark emails confirmed.
3. Send List A apology via the app's email function (or export CSV for Gmail merge).
4. Pull List B results from `free_diagnostic_leads`, fix the `.con` typo, send the personalized breakdown email.
5. Log everything to `email_send_log` so we can confirm delivery.

Want me to proceed this way, or pivot to the Google Workspace + CSV route now so we're not blocked on DNS?
