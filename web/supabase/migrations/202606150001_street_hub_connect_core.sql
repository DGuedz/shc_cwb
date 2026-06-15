create extension if not exists pgcrypto;

create type public.agreement_status as enum (
  'pending_artist_approval',
  'match_accepted',
  'declined',
  'in_contract',
  'settlement_pending',
  'completed'
);

create table if not exists public.artists (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references auth.users(id) on delete cascade,
  stage_name text not null,
  genre text not null,
  city text not null,
  state text not null,
  min_fee numeric(10, 2) not null default 0,
  ideal_fee numeric(10, 2) not null default 0,
  bio text not null default '',
  tags text[] not null default '{}',
  is_verified boolean not null default false,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.companies (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references auth.users(id) on delete cascade,
  name text not null,
  segment text not null,
  city text not null,
  state text not null,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.opportunities (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies(id) on delete cascade,
  title text not null,
  segment text not null,
  city text not null,
  state text not null,
  budget_min numeric(10, 2) not null default 0,
  budget_max numeric(10, 2) not null default 0,
  event_date date not null,
  briefing text not null default '',
  is_active boolean not null default true,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now()),
  constraint opportunities_budget_check check (budget_max >= budget_min)
);

create table if not exists public.matches (
  id uuid primary key default gen_random_uuid(),
  artist_id uuid not null references public.artists(id) on delete cascade,
  opportunity_id uuid not null references public.opportunities(id) on delete cascade,
  affinity_score integer not null check (affinity_score between 0 and 100),
  agreed_budget numeric(10, 2) not null default 0,
  status public.agreement_status not null default 'pending_artist_approval',
  reasons jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now()),
  unique (artist_id, opportunity_id)
);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = timezone('utc', now());
  return new;
end;
$$;

drop trigger if exists artists_set_updated_at on public.artists;
create trigger artists_set_updated_at
before update on public.artists
for each row
execute function public.set_updated_at();

drop trigger if exists companies_set_updated_at on public.companies;
create trigger companies_set_updated_at
before update on public.companies
for each row
execute function public.set_updated_at();

drop trigger if exists opportunities_set_updated_at on public.opportunities;
create trigger opportunities_set_updated_at
before update on public.opportunities
for each row
execute function public.set_updated_at();

drop trigger if exists matches_set_updated_at on public.matches;
create trigger matches_set_updated_at
before update on public.matches
for each row
execute function public.set_updated_at();

create index if not exists idx_artists_user_id on public.artists(user_id);
create index if not exists idx_companies_user_id on public.companies(user_id);
create index if not exists idx_opportunities_company_id on public.opportunities(company_id);
create index if not exists idx_matches_artist_id on public.matches(artist_id);
create index if not exists idx_matches_opportunity_id on public.matches(opportunity_id);

alter table public.artists enable row level security;
alter table public.companies enable row level security;
alter table public.opportunities enable row level security;
alter table public.matches enable row level security;

create policy "artists_select_own_profile"
on public.artists
for select
to authenticated
using (auth.uid() = user_id);

create policy "artists_insert_own_profile"
on public.artists
for insert
to authenticated
with check (auth.uid() = user_id);

create policy "artists_update_own_profile"
on public.artists
for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

create policy "companies_select_own_profile"
on public.companies
for select
to authenticated
using (auth.uid() = user_id);

create policy "companies_insert_own_profile"
on public.companies
for insert
to authenticated
with check (auth.uid() = user_id);

create policy "companies_update_own_profile"
on public.companies
for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

create policy "companies_manage_own_opportunities"
on public.opportunities
for all
to authenticated
using (
  exists (
    select 1
    from public.companies c
    where c.id = company_id and c.user_id = auth.uid()
  )
)
with check (
  exists (
    select 1
    from public.companies c
    where c.id = company_id and c.user_id = auth.uid()
  )
);

create policy "artists_select_own_matches"
on public.matches
for select
to authenticated
using (
  exists (
    select 1
    from public.artists a
    where a.id = artist_id and a.user_id = auth.uid()
  )
);

create policy "artists_update_own_match_status"
on public.matches
for update
to authenticated
using (
  exists (
    select 1
    from public.artists a
    where a.id = artist_id and a.user_id = auth.uid()
  )
)
with check (
  exists (
    select 1
    from public.artists a
    where a.id = artist_id and a.user_id = auth.uid()
  )
);

create policy "contractors_select_matches_for_own_opportunities"
on public.matches
for select
to authenticated
using (
  exists (
    select 1
    from public.opportunities o
    join public.companies c on c.id = o.company_id
    where o.id = opportunity_id
      and o.is_active = true
      and c.user_id = auth.uid()
  )
);

create policy "contractors_insert_matches_for_own_opportunities"
on public.matches
for insert
to authenticated
with check (
  exists (
    select 1
    from public.opportunities o
    join public.companies c on c.id = o.company_id
    where o.id = opportunity_id
      and o.is_active = true
      and c.user_id = auth.uid()
  )
);

create policy "contractors_update_matches_for_own_opportunities"
on public.matches
for update
to authenticated
using (
  exists (
    select 1
    from public.opportunities o
    join public.companies c on c.id = o.company_id
    where o.id = opportunity_id
      and o.is_active = true
      and c.user_id = auth.uid()
  )
)
with check (
  exists (
    select 1
    from public.opportunities o
    join public.companies c on c.id = o.company_id
    where o.id = opportunity_id
      and o.is_active = true
      and c.user_id = auth.uid()
  )
);
