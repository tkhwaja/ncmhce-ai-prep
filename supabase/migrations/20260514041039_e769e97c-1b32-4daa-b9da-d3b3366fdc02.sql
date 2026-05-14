ALTER TABLE public.narrative_attempts REPLICA IDENTITY FULL;
ALTER TABLE public.flashcard_progress REPLICA IDENTITY FULL;
ALTER PUBLICATION supabase_realtime ADD TABLE public.narrative_attempts;
ALTER PUBLICATION supabase_realtime ADD TABLE public.flashcard_progress;