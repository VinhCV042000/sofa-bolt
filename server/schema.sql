CREATE TABLE IF NOT EXISTS sofa2_dealer_profiles (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  email TEXT,
  portal_access BOOLEAN NOT NULL DEFAULT FALSE,
  level TEXT NOT NULL DEFAULT '',
  region TEXT NOT NULL DEFAULT '',
  status TEXT NOT NULL DEFAULT '',
  profile JSONB NOT NULL DEFAULT '{}'::jsonb,
  clerk_user_id TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE UNIQUE INDEX IF NOT EXISTS sofa2_dealer_profiles_email_unique
  ON sofa2_dealer_profiles (LOWER(email))
  WHERE email IS NOT NULL AND email <> '';

CREATE UNIQUE INDEX IF NOT EXISTS sofa2_dealer_profiles_clerk_user_unique
  ON sofa2_dealer_profiles (clerk_user_id)
  WHERE clerk_user_id IS NOT NULL;

CREATE TABLE IF NOT EXISTS sofa2_dealer_records (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  module TEXT NOT NULL CHECK (module IN ('price-policy', 'quotes', 'dealer-orders', 'debts', 'sales-docs')),
  dealer_id TEXT REFERENCES sofa2_dealer_profiles(id) ON DELETE SET NULL,
  data JSONB NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS sofa2_dealer_records_module_idx
  ON sofa2_dealer_records (module, created_at DESC);

CREATE INDEX IF NOT EXISTS sofa2_dealer_records_dealer_module_idx
  ON sofa2_dealer_records (dealer_id, module, created_at DESC);
