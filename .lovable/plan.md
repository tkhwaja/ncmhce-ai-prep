## Plan: Rebuild Brevo email draft

### Steps
1. Delete the existing Brevo draft campaign (ID 6) via the Brevo connector gateway.
2. Create a new draft campaign in Brevo with the same recipient list (186 contacts: paid users + free-diagnostic leads, excluding prior unsubscribes).
3. Apply all changes discussed in this thread:
   - **Subject line**: "Practice Exam 2 is live — plus 3 new clinical cases inside"
   - **Header**: Practice Exam 2 highlighted first, then the 3 new narratives
   - **Practice Exam 2 section**: Mention we incorporated feedback from Practice Exam 1 and increased the difficulty to better match the real NCMHCE
   - **3 new individual narratives** with shortened, case-study-style paragraphs (~1 short paragraph each):
     - Rafael — PTSD
     - Renee — DID
     - Alina — Postpartum OCD
   - **Design**: More color and graphic accents, neat sectioning, clear visual hierarchy to invite reading
   - **Soft upsell line** above the CTA: "Full access to all 3 cases and Practice Exam 2 is included with your membership." (Option 1 — works for both paid and unpaid recipients)
   - **Primary CTA button**: "Open the new narratives" → `/narratives`
   - **Secondary text link**: Practice Exam 2
4. Leave the campaign in **draft** status so you can review and send manually from Brevo.

### Notes
- No code or database changes — Brevo-only operation through the connector gateway.
- Recipient list stays identical to the previous draft (same 186-contact segment, unsubscribes excluded).
