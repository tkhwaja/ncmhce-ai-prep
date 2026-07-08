
# Facebook ads attribution — one-off report

No code changes. Read-only queries across three sources, then a summary posted in chat.

## What I'll pull

### 1. PostHog — who came from Facebook
Query `$pageview` events where `$initial_utm_source` matches `facebook|fb|ig|instagram` or `$initial_referring_domain` contains `facebook.com` / `l.facebook.com` / `instagram.com`. From those persons:
- unique visitors from FB
- `email_signup` events from FB-attributed persons
- distinct emails captured (so we can join to Stripe)

Time window: **last 90 days** (adjustable — tell me if you want lifetime or a specific range).

### 2. Meta Ads — spend + platform-side conversions
You don't have a Meta Ads connector linked yet. Two options:
- **(a)** Connect the Meta Ads connector so I can pull spend, impressions, clicks, and Pixel-reported conversions directly. ~2 min setup.
- **(b)** Skip Meta side — you paste the total ad spend for the window and I compute CAC / ROAS against Stripe revenue.

### 3. Stripe — actual revenue from FB-attributed users
For each FB-attributed email/userId from step 1:
- match against Stripe customers (metadata `userId` search, then email fallback)
- sum `amount_paid` on paid invoices
- count new paying customers + active subscriptions
- compare against total Stripe revenue in the same window to get **% of revenue from FB**

Uses the existing pattern from `get-stripe-data` (Subscriptions/Customers search by metadata, email fallback). Live env only unless you want sandbox too.

## Output in chat
A single summary like:

```text
Window: last 90 days
FB-attributed visitors:      1,240
FB-attributed signups:          82   (18% of all signups)
FB-attributed paying customers:  6   ($354 revenue, 22% of total)
Meta Ads spend:              $420
CAC (FB):                     $70
ROAS:                         0.84x
```

## Caveats I'll call out
- PostHog attribution is **first-touch** via `$initial_utm_source` / `$initial_referring_domain`. Users who visited from FB in an incognito session, then converted later on desktop, won't be attributed.
- Meta Pixel conversions in Ads Manager will usually be **higher** than Stripe-matched conversions (Meta uses view-through + cross-device modeling).
- Email-only Stripe matches can false-positive if a user signed up organically but shares an email with an FB visitor.

## Questions before I run it
1. **Window**: last 30 / 90 days, or lifetime?
2. **Meta Ads**: connect the connector, or paste spend manually?
3. **Env**: Stripe live only, or include sandbox?

