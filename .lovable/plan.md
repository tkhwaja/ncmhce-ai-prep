# Connect Brevo + Build Marketing/Announcement Tools

## Step 1 — Connect Brevo

Use the Brevo standard connector. You'll be prompted to either pick an existing Brevo connection or create a new one (you'll paste your Brevo API key from Brevo → SMTP & API → API Keys).

Once linked, two env vars become available to backend functions automatically:
- `LOVABLE_API_KEY`
- `BREVO_API_KEY`

All Brevo calls go through the Lovable connector gateway (`https://connector-gateway.lovable.dev/brevo/...`) — no SDK, no direct API calls.

**Sender domain note:** Your `theexampath.com` domain is already verified inside Lovable Emails (via `notify.theexampath.com`). For Brevo blasts to look professional and land in inboxes, you'll want to verify a sender in Brevo too — either:
- The root `theexampath.com` (separate from Lovable's `notify` subdomain — no conflict), or
- A different subdomain like `news.theexampath.com` or `hello.theexampath.com`

I can guide you through the Brevo DNS records once we're connected.

## Step 2 — What we can build with Brevo

Lovable Emails (current setup) is for **transactional, 1-to-1, triggered emails** (signup confirmations, password resets, free-diagnostic delivery, recovery apologies). Brevo is for **1-to-many marketing blasts** with list management, segments, templates, and analytics.

Concrete things I can build into your admin area once Brevo is connected:

### A. Contact sync
- Auto-push every new signup into a Brevo list (e.g. "All Users")
- Tag contacts by status: `confirmed`, `unconfirmed`, `paid`, `free-diagnostic-lead`, `cancelled`
- Background sync of your existing 80 users + 26 unconfirmed + free-diagnostic leads into matching Brevo lists/segments

### B. Admin "Send Announcement" page (new tab in your admin area)
- Pick a Brevo list or segment (e.g. "Confirmed users", "Unconfirmed", "Free diagnostic leads who haven't signed up")
- Compose subject + HTML (or pick a Brevo template by ID)
- Preview, then send — calls Brevo's `POST /smtp/email` (for one-offs) or `POST /emailCampaigns` (for proper campaigns with tracking)
- Show send status, opens, clicks back in the admin UI

### C. Suggested campaign types for your platform
- **Launch / feature announcements** ("New practice exam added", "Library update")
- **Re-engagement** to the 26 unconfirmed users (different from the transactional reminder — a softer marketing nudge)
- **Free diagnostic → paid conversion** drip to the leads who downloaded the free case but didn't subscribe
- **Study tips / NCMHCE prep newsletter** (weekly or biweekly)
- **Founding-member / pricing offers**
- **Win-back** campaigns for cancelled subscribers

### D. Optional automations (later)
- Brevo workflows triggered by events we send from the app (e.g. "completed first practice exam", "abandoned checkout")
- A/B subject line testing
- Unsubscribe sync between Brevo and your existing `suppressed_emails` table so a user who unsubscribes in Brevo also stops getting transactional marketing-type emails

## Clear separation we'll keep

| Email type | Sent via | Examples |
|---|---|---|
| Transactional (triggered by user action) | Lovable Emails (current) | Signup confirm, password reset, free-diagnostic delivery |
| Marketing / blasts (1-to-many) | Brevo (new) | Announcements, newsletters, re-engagement, drips |

This avoids deliverability issues (mixing marketing with transactional hurts both) and keeps your existing email pipeline untouched.

## What I'd build first (recommended scope for the next step)

1. Connect Brevo (you click through the connector picker)
2. Add an admin page `/admin/announcements` (gated to your two admin emails, same pattern as `/admin/emails`)
3. Backend function `send-brevo-campaign` that calls the Brevo gateway
4. A simple "Sync contacts to Brevo" button that pushes your current users into a Brevo list with tags
5. Send your first announcement from the UI

We can add segments, templates, scheduling, and analytics views in a follow-up pass.

---

**To proceed:** approve this plan and I'll trigger the Brevo connection prompt, then build the admin announcement page + sync.