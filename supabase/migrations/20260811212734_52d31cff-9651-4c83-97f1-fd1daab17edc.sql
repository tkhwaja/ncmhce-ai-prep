-- Exam track support (additive; all existing rows default to 'ncmhce')

ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS active_exam_track text NOT NULL DEFAULT 'ncmhce';

ALTER TABLE public.narrative_attempts
  ADD COLUMN IF NOT EXISTS exam_track text NOT NULL DEFAULT 'ncmhce';

ALTER TABLE public.practice_exam_attempts
  ADD COLUMN IF NOT EXISTS exam_track text NOT NULL DEFAULT 'ncmhce';

ALTER TABLE public.flashcard_progress
  ADD COLUMN IF NOT EXISTS exam_track text NOT NULL DEFAULT 'ncmhce';

ALTER TABLE public.study_plans
  ADD COLUMN IF NOT EXISTS exam_track text NOT NULL DEFAULT 'ncmhce';

-- Constrain to known tracks
ALTER TABLE public.profiles
  ADD CONSTRAINT profiles_active_exam_track_check
  CHECK (active_exam_track IN ('ncmhce', 'nce'));

ALTER TABLE public.narrative_attempts
  ADD CONSTRAINT narrative_attempts_exam_track_check
  CHECK (exam_track IN ('ncmhce', 'nce'));

ALTER TABLE public.practice_exam_attempts
  ADD CONSTRAINT practice_exam_attempts_exam_track_check
  CHECK (exam_track IN ('ncmhce', 'nce'));

ALTER TABLE public.flashcard_progress
  ADD CONSTRAINT flashcard_progress_exam_track_check
  CHECK (exam_track IN ('ncmhce', 'nce'));

ALTER TABLE public.study_plans
  ADD CONSTRAINT study_plans_exam_track_check
  CHECK (exam_track IN ('ncmhce', 'nce'));

-- Query indexes for per-track reads
CREATE INDEX IF NOT EXISTS idx_narrative_attempts_user_track
  ON public.narrative_attempts(user_id, exam_track);
CREATE INDEX IF NOT EXISTS idx_practice_exam_attempts_user_track
  ON public.practice_exam_attempts(user_id, exam_track);
CREATE INDEX IF NOT EXISTS idx_flashcard_progress_user_track
  ON public.flashcard_progress(user_id, exam_track);
CREATE INDEX IF NOT EXISTS idx_study_plans_user_track
  ON public.study_plans(user_id, exam_track);