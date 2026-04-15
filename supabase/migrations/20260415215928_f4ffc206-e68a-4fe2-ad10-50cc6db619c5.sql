
CREATE TABLE public.study_plans (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  intake_data JSONB NOT NULL DEFAULT '{}'::jsonb,
  plan_data JSONB NOT NULL DEFAULT '[]'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.study_plans ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own study plans" ON public.study_plans FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create own study plans" ON public.study_plans FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own study plans" ON public.study_plans FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own study plans" ON public.study_plans FOR DELETE USING (auth.uid() = user_id);

CREATE TRIGGER update_study_plans_updated_at
BEFORE UPDATE ON public.study_plans
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TABLE public.flashcard_progress (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  card_id TEXT NOT NULL,
  deck_id TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'unseen',
  last_reviewed TIMESTAMP WITH TIME ZONE,
  next_review TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.flashcard_progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own flashcard progress" ON public.flashcard_progress FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create own flashcard progress" ON public.flashcard_progress FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own flashcard progress" ON public.flashcard_progress FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own flashcard progress" ON public.flashcard_progress FOR DELETE USING (auth.uid() = user_id);

CREATE UNIQUE INDEX idx_flashcard_progress_unique ON public.flashcard_progress(user_id, card_id, deck_id);
CREATE INDEX idx_flashcard_progress_user ON public.flashcard_progress(user_id);
CREATE INDEX idx_study_plans_user ON public.study_plans(user_id);
