## Changes

### 1. Rename "Sign Up" → "Free Sign Up" on the landing page

Update the button label in 4 spots (all on the landing surface, all link to `/signup` — no behavior change):

- `src/components/landing/HeroSection.tsx` (line 38) — primary hero CTA
- `src/components/landing/Navbar.tsx` (lines 60, 103) — desktop nav + mobile menu
- `src/components/landing/PricingSection.tsx` (line 92) — pricing card CTA

The Founding banner link stays as "create your free account" (already says "free").

### 2. Email plan — no code changes, just confirmation of current state

**Active automatic sends** (running now):
- Signup confirmation email → every new `/signup` user
- Free Diagnostic breakdown → every visitor who finishes the free diagnostic

**Pending batch sends** (will NOT fire until you say so):
- **Email A** — Signup recovery apology to diagnostic leads with no profile
- **Email B** — Free Diagnostic breakdown resend to leads whose `email_sent_at` is null

When you're ready, just say "send Email A" and/or "send Email B" and I'll fire them as one-by-one queued sends through the existing `send-transactional-email` function.

## Out of scope

- No template copy changes
- No new email types
- No batch sends in this turn
