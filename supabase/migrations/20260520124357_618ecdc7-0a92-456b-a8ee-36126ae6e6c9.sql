ALTER TABLE public.narrative_attempts
  ADD COLUMN IF NOT EXISTS narrative_version text,
  ADD COLUMN IF NOT EXISTS narrative_snapshot jsonb;