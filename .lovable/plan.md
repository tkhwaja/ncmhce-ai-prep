## Batch 4: Apply hardened questions to Samuel & Monica

Apply uploaded `practice_exam_01_hardened_questions_batch_04_samuel_monica.json` to:
- `src/data/narratives/practice-exam-01-case-06-samuel-ocd.ts`
- `src/data/narratives/practice-exam-01-case-07-monica-bipolar-ii.ts`

Replace only the `questions` arrays inside each matching `sessionLabel` section. Preserve all narrative text, `clientInfo`, `sectionNarrative`, `sessionLabel`, and `questionNumber` ordering. `difficultyLevel` / `skillTested` will be dropped (schema doesn't support them). Verify with the typecheck.

This completes Practice Exam 1 hardening.

---

## Individual narratives available to harden in future batches

These are the standalone narratives (outside Practice Exam 1) in `src/data/narratives/`. You can send hardened-question batches for any of these next:

1. `06-aisha-ptsd-ipv` — Aisha (PTSD with IPV)
2. `07-jordan-anorexia` — Jordan (Anorexia Nervosa)
3. `08-robert-prolonged-grief` — Robert (Prolonged Grief)
4. `09-mei-ocd` — Mei (OCD)
5. `10-tyrone-bpd` — Tyrone (BPD)
6. `11-keisha-adjustment` — Keisha (Adjustment Disorder)
7. `12-miguel-social-anxiety` — Miguel (Social Anxiety)
8. `13-marisol-ptsd` — Marisol (PTSD)
9. `14-claudette-hoarding` — Claudette (Hoarding)
10. `15-rowena-adhd` — Rowena (ADHD)
11. `16-leila-autism` — Leila (Autism)
12. `17-sonia-somatic-symptom` — Sonia (Somatic Symptom Disorder)
13. `18-carmen-oud` — Carmen (Opioid Use Disorder)
14. `19-darnell-panic` — Darnell (Panic Disorder)
15. `20-nadia-bulimia` — Nadia (Bulimia)
16. `21-safiya-schizophreniform` — Safiya (Schizophreniform)
17. `24-rafael-hoarding` — Rafael (Hoarding)
18. `25-nora-specific-phobia` — Nora (Specific Phobia)

Plus 4 cases that live in `src/data/narratives/` as practice-exam-style files but are surfaced in the individual narrative list (not in Practice Exam 1):

19. `practice-exam-01-case-08-kiara-bpd` — Kiara (BPD)
20. `practice-exam-01-case-09-emily-bulimia` — Emily (Bulimia)
21. `practice-exam-01-case-10-erica-prolonged-grief` — Erica (Prolonged Grief)
22. `practice-exam-01-case-11-jonah-schizophreniform` — Jonah (Schizophreniform)

Also note the free diagnostic case (`src/data/free-diagnostic-bundle.json`) — Tessa GAD — exists separately if you want it hardened too.
