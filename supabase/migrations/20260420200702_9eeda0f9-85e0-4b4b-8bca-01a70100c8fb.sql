
-- Rename the table
ALTER TABLE public.simulation_attempts RENAME TO narrative_attempts;

-- Rename the column
ALTER TABLE public.narrative_attempts RENAME COLUMN simulation_id TO narrative_id;

-- Rename RLS policies to match new table name
ALTER POLICY "Users can view their own attempts" ON public.narrative_attempts RENAME TO "Users can view own narrative attempts";
ALTER POLICY "Users can create their own attempts" ON public.narrative_attempts RENAME TO "Users can create own narrative attempts";
ALTER POLICY "Users can update their own attempts" ON public.narrative_attempts RENAME TO "Users can update own narrative attempts";
