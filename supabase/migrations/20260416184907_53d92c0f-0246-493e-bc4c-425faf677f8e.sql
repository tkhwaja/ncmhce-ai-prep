-- Subscriptions table
create table public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  stripe_subscription_id text not null unique,
  stripe_customer_id text not null,
  product_id text not null,
  price_id text not null,
  status text not null default 'active',
  current_period_start timestamptz,
  current_period_end timestamptz,
  cancel_at_period_end boolean default false,
  environment text not null default 'sandbox',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index idx_subscriptions_user_id on public.subscriptions(user_id);
create index idx_subscriptions_stripe_id on public.subscriptions(stripe_subscription_id);

alter table public.subscriptions enable row level security;

create policy "Users can view own subscription"
  on public.subscriptions for select
  using (auth.uid() = user_id);

create policy "Service role can manage subscriptions"
  on public.subscriptions for all
  using (auth.role() = 'service_role')
  with check (auth.role() = 'service_role');

create trigger update_subscriptions_updated_at
before update on public.subscriptions
for each row execute function public.update_updated_at_column();

-- Has active subscription function
create or replace function public.has_active_subscription(
  user_uuid uuid,
  check_env text default 'sandbox'
)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.subscriptions
    where user_id = user_uuid
    and environment = check_env
    and (
      (status in ('active', 'trialing') and (current_period_end is null or current_period_end > now()))
      or (status = 'canceled' and current_period_end is not null and current_period_end > now())
    )
  );
$$;

-- Active sessions table (single active session enforcement)
create table public.active_sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  session_id text not null,
  device_label text,
  last_seen timestamptz not null default now(),
  created_at timestamptz not null default now()
);

create unique index idx_active_sessions_user on public.active_sessions(user_id);
create index idx_active_sessions_session on public.active_sessions(session_id);

alter table public.active_sessions enable row level security;

create policy "Users can view own active session"
  on public.active_sessions for select
  using (auth.uid() = user_id);

create policy "Users can insert own active session"
  on public.active_sessions for insert
  with check (auth.uid() = user_id);

create policy "Users can update own active session"
  on public.active_sessions for update
  using (auth.uid() = user_id);

create policy "Users can delete own active session"
  on public.active_sessions for delete
  using (auth.uid() = user_id);