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

CREATE TABLE IF NOT EXISTS sofa2_seo_modules (
  module TEXT PRIMARY KEY CHECK (
    module IN (
      'category',
      'product',
      'collection',
      'project',
      'showroom',
      'blog',
      'brand',
      'sitemap',
      'robots',
      'schema'
    )
  ),
  rows JSONB NOT NULL DEFAULT '[]'::jsonb CHECK (jsonb_typeof(rows) = 'array'),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS sofa2_cms_modules (
  module TEXT PRIMARY KEY,
  rows JSONB NOT NULL DEFAULT '[]'::jsonb CHECK (jsonb_typeof(rows) = 'array'),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS sofa2_access_modules (
  module TEXT PRIMARY KEY CHECK (module IN ('users', 'roles', 'permissions')),
  rows JSONB NOT NULL DEFAULT '[]'::jsonb CHECK (jsonb_typeof(rows) = 'array'),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS sofa2_admin_audit_log (
  id BIGSERIAL PRIMARY KEY,
  actor_user_id TEXT NOT NULL,
  actor_email TEXT NOT NULL,
  actor_name TEXT NOT NULL DEFAULT '',
  event_type TEXT NOT NULL,
  module TEXT NOT NULL,
  action TEXT NOT NULL,
  target TEXT NOT NULL DEFAULT '',
  details JSONB NOT NULL DEFAULT '{}'::jsonb,
  ip TEXT NOT NULL DEFAULT '',
  user_agent TEXT NOT NULL DEFAULT '',
  outcome TEXT NOT NULL DEFAULT 'Thành công',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS sofa2_admin_audit_log_created_idx
  ON sofa2_admin_audit_log (created_at DESC);

CREATE INDEX IF NOT EXISTS sofa2_admin_audit_log_actor_idx
  ON sofa2_admin_audit_log (actor_email, created_at DESC);

CREATE TABLE IF NOT EXISTS sofa2_customer_profiles (
  clerk_user_id TEXT PRIMARY KEY,
  email TEXT NOT NULL,
  account_status TEXT NOT NULL DEFAULT 'Hoạt động',
  tier TEXT NOT NULL DEFAULT 'Thường',
  profile JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS sofa2_customer_profiles_email_idx
  ON sofa2_customer_profiles (LOWER(email));

CREATE TABLE IF NOT EXISTS sofa2_customer_records (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_user_id TEXT NOT NULL REFERENCES sofa2_customer_profiles(clerk_user_id) ON DELETE CASCADE,
  module TEXT NOT NULL CHECK (module IN ('addresses', 'wishlist', 'transactions', 'warranties')),
  data JSONB NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS sofa2_customer_records_owner_module_idx
  ON sofa2_customer_records (customer_user_id, module, created_at DESC);

CREATE TABLE IF NOT EXISTS sofa2_shop_orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code TEXT NOT NULL UNIQUE,
  customer_user_id TEXT REFERENCES sofa2_customer_profiles(clerk_user_id) ON DELETE SET NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  data JSONB NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS sofa2_shop_orders_customer_idx
  ON sofa2_shop_orders (customer_user_id, created_at DESC);

CREATE INDEX IF NOT EXISTS sofa2_shop_orders_tracking_idx
  ON sofa2_shop_orders (UPPER(code), phone);

CREATE TABLE IF NOT EXISTS sofa2_shop_carts (
  visitor_id TEXT PRIMARY KEY,
  customer_user_id TEXT REFERENCES sofa2_customer_profiles(clerk_user_id) ON DELETE SET NULL,
  items JSONB NOT NULL DEFAULT '[]'::jsonb CHECK (jsonb_typeof(items) = 'array'),
  subtotal BIGINT NOT NULL DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'Đang mở',
  data JSONB NOT NULL DEFAULT '{}'::jsonb,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS sofa2_shop_carts_status_updated_idx
  ON sofa2_shop_carts (status, updated_at DESC);

CREATE TABLE IF NOT EXISTS sofa2_shop_modules (
  module TEXT PRIMARY KEY CHECK (module IN ('checkout', 'checkout-success')),
  rows JSONB NOT NULL DEFAULT '[]'::jsonb CHECK (jsonb_typeof(rows) = 'array'),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
