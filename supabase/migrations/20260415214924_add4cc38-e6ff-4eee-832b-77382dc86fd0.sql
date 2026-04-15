
CREATE TABLE public.simulation_attempts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  simulation_id TEXT NOT NULL,
  ig_selections JSONB NOT NULL DEFAULT '[]'::jsonb,
  dm_answers JSONB NOT NULL DEFAULT '{}'::jsonb,
  domain_scores JSONB NOT NULL DEFAULT '{}'::jsonb,
  total_score INTEGER,
  time_spent INTEGER,
  feedback TEXT,
  completed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.simulation_attempts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own attempts"
ON public.simulation_attempts FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own attempts"
ON public.simulation_attempts FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own attempts"
ON public.simulation_attempts FOR UPDATE
USING (auth.uid() = user_id);

CREATE INDEX idx_simulation_attempts_user ON public.simulation_attempts(user_id);
CREATE INDEX idx_simulation_attempts_sim ON public.simulation_attempts(simulation_id);
