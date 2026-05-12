CREATE TABLE public.practice_exam_attempts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  practice_exam_id TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'in_progress',
  ungraded_narrative_ids JSONB NOT NULL DEFAULT '[]'::jsonb,
  total_score INTEGER,
  graded_case_count INTEGER,
  domain_scores JSONB NOT NULL DEFAULT '{}'::jsonb,
  time_spent_seconds INTEGER,
  started_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  completed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_practice_exam_attempts_user ON public.practice_exam_attempts (user_id, practice_exam_id, started_at DESC);

ALTER TABLE public.practice_exam_attempts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own practice exam attempts"
ON public.practice_exam_attempts FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can create own practice exam attempts"
ON public.practice_exam_attempts FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own practice exam attempts"
ON public.practice_exam_attempts FOR UPDATE
USING (auth.uid() = user_id);

CREATE TRIGGER update_practice_exam_attempts_updated_at
BEFORE UPDATE ON public.practice_exam_attempts
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();