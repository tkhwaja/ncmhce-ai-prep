CREATE TABLE public.nce_lesson_progress (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid NOT NULL REFERENCES auth.users ON DELETE CASCADE,
  lesson_id text NOT NULL,
  module_id text,
  opened boolean NOT NULL DEFAULT true,
  completed boolean NOT NULL DEFAULT false,
  check_accuracy numeric,
  completed_at timestamp with time zone,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now(),
  UNIQUE (user_id, lesson_id)
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.nce_lesson_progress TO authenticated;
GRANT ALL ON public.nce_lesson_progress TO service_role;
ALTER TABLE public.nce_lesson_progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own NCE lesson progress" ON public.nce_lesson_progress FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own NCE lesson progress" ON public.nce_lesson_progress FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own NCE lesson progress" ON public.nce_lesson_progress FOR UPDATE TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can delete their own NCE lesson progress" ON public.nce_lesson_progress FOR DELETE TO authenticated USING (auth.uid() = user_id);

CREATE INDEX nce_lesson_progress_user_idx ON public.nce_lesson_progress (user_id);

CREATE TRIGGER update_nce_lesson_progress_updated_at
BEFORE UPDATE ON public.nce_lesson_progress
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TABLE public.nce_knowledge_check_results (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid NOT NULL REFERENCES auth.users ON DELETE CASCADE,
  lesson_id text NOT NULL,
  module_id text,
  accuracy numeric NOT NULL,
  correct_count integer,
  question_count integer,
  answers jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT ON public.nce_knowledge_check_results TO authenticated;
GRANT ALL ON public.nce_knowledge_check_results TO service_role;
ALTER TABLE public.nce_knowledge_check_results ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own NCE knowledge check results" ON public.nce_knowledge_check_results FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own NCE knowledge check results" ON public.nce_knowledge_check_results FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);

CREATE INDEX nce_knowledge_check_results_user_lesson_idx ON public.nce_knowledge_check_results (user_id, lesson_id);