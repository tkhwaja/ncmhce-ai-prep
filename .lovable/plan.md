I found the overlap: Practice Exam 1 currently includes 15 narrative IDs, and 5 of those are already regular individual narratives:

- 01-priya-gad
- 02-marcus-mdd
- 03-david-ptsd
- 04-elena-bipolar
- 05-james-aud

The remaining 10 practice-exam-only narratives are already full narratives with questions, but they are not shown in the individual Narratives grid because they are kept in a separate `practiceExamNarratives` array. Since the product/marketing copy says Practice Exam 1 is an 11-case exam, the clean fix is:

1. Keep Practice Exam 1 at 11 narratives total
   - Use the 5 existing individual narratives already in the exam.
   - Keep 6 practice-exam-only narratives inside the full-length exam.
   - This preserves the advertised 11-case full-length exam.

2. Move the extra 4 full narratives into the individual narratives section
   - Remove these 4 from the Practice Exam 1 `narrativeIds` list:
     - practice-exam-01-case-08-kiara-bpd
     - practice-exam-01-case-09-emily-bulimia
     - practice-exam-01-case-10-erica-prolonged-grief
     - practice-exam-01-case-11-jonah-schizophreniform
   - Add those same 4 to the exported `narratives` array so they appear as standalone individual narratives.
   - Keep them available through `getNarrativeById`, so existing direct links and prior attempts still work.

3. Update the display copy/counts
   - Keep Practice Exam 1 labeled as `11 clinical narratives • ~4 hours`.
   - Make sure the visible individual narratives grid includes those 4 additional cases.

4. Verify after implementation
   - Confirm Practice Exam 1 has exactly 11 narrative IDs.
   - Confirm individual narratives increases by 4.
   - Run TypeScript validation to catch any import/export issues.

Technical details:
- Files to update:
  - `src/data/practice-exams.ts`
  - `src/data/narratives/index.ts`
- No database change is needed. This is static narrative data organization only.