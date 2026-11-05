CREATE TABLE public.sofa2_seo_modules (
  module TEXT PRIMARY KEY,
  rows JSONB NOT NULL DEFAULT '[]'::jsonb,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE public.sofa2_admin_emails (
  email TEXT PRIMARY KEY,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE public.sofa2_dealer_profiles (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT,
  portal_access BOOLEAN NOT NULL DEFAULT FALSE,
  level TEXT,
  region TEXT,
  status TEXT,
  profile JSONB NOT NULL DEFAULT '{}'::jsonb,
  clerk_user_id TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE public.sofa2_dealer_records (
  id BIGSERIAL PRIMARY KEY,
  module TEXT NOT NULL,
  dealer_id TEXT REFERENCES public.sofa2_dealer_profiles(id) ON DELETE SET NULL,
  data JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX sofa2_dealer_records_module_idx ON public.sofa2_dealer_records (module, created_at DESC);
CREATE INDEX sofa2_dealer_records_dealer_idx ON public.sofa2_dealer_records (module, dealer_id);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.sofa2_seo_modules TO sandbox_exec, service_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.sofa2_admin_emails TO sandbox_exec, service_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.sofa2_dealer_profiles TO sandbox_exec, service_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.sofa2_dealer_records TO sandbox_exec, service_role;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO sandbox_exec, service_role;

ALTER TABLE public.sofa2_seo_modules ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sofa2_admin_emails ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sofa2_dealer_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sofa2_dealer_records ENABLE ROW LEVEL SECURITY;

CREATE POLICY server_admin_writes ON public.sofa2_seo_modules FOR ALL TO sandbox_exec, service_role USING (true) WITH CHECK (true);
CREATE POLICY server_admin_writes ON public.sofa2_admin_emails FOR ALL TO sandbox_exec, service_role USING (true) WITH CHECK (true);
CREATE POLICY server_admin_writes ON public.sofa2_dealer_profiles FOR ALL TO sandbox_exec, service_role USING (true) WITH CHECK (true);
CREATE POLICY server_admin_writes ON public.sofa2_dealer_records FOR ALL TO sandbox_exec, service_role USING (true) WITH CHECK (true);