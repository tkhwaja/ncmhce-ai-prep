CREATE TABLE public.free_diagnostic_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  narrative_id TEXT NOT NULL,
  total_score INTEGER NOT NULL,
  correct_answers INTEGER NOT NULL,
  total_questions INTEGER NOT NULL,
  domain_scores JSONB NOT NULL DEFAULT '{}'::jsonb,
  answer_breakdown JSONB NOT NULL DEFAULT '[]'::jsonb,
  submitted_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  email_sent_at TIMESTAMPTZ NULL
);

ALTER TABLE public.free_diagnostic_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role can read free diagnostic leads"
ON public.free_diagnostic_leads
FOR SELECT
USING (auth.role() = 'service_role');

CREATE POLICY "Service role can insert free diagnostic leads"
ON public.free_diagnostic_leads
FOR INSERT
WITH CHECK (auth.role() = 'service_role');

CREATE POLICY "Service role can update free diagnostic leads"
ON public.free_diagnostic_leads
FOR UPDATE
USING (auth.role() = 'service_role')
WITH CHECK (auth.role() = 'service_role');

CREATE INDEX idx_free_diagnostic_leads_email ON public.free_diagnostic_leads (email);
CREATE INDEX idx_free_diagnostic_leads_submitted_at ON public.free_diagnostic_leads (submitted_at DESC);