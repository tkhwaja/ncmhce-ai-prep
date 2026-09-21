-- Ensure authenticated users can reach active_sessions through the Data API.
-- RLS policies still restrict every operation to auth.uid() = user_id.
GRANT SELECT, INSERT, UPDATE, DELETE ON public.active_sessions TO authenticated;
GRANT ALL ON public.active_sessions TO service_role;
