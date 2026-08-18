ALTER TABLE public.free_diagnostic_leads
  ADD COLUMN IF NOT EXISTS exam_track text NOT NULL DEFAULT 'ncmhce';