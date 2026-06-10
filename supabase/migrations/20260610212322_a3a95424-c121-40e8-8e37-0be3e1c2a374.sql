
CREATE TABLE public.health_check_runs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  run_at timestamptz NOT NULL DEFAULT now(),
  summary jsonb NOT NULL,
  pass_count int NOT NULL DEFAULT 0,
  warn_count int NOT NULL DEFAULT 0,
  fail_count int NOT NULL DEFAULT 0,
  duration_ms int NOT NULL DEFAULT 0
);
CREATE INDEX idx_health_check_runs_run_at ON public.health_check_runs (run_at DESC);
GRANT ALL ON public.health_check_runs TO service_role;
ALTER TABLE public.health_check_runs ENABLE ROW LEVEL SECURITY;
