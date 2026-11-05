/*
# Sofa2 CMS module storage

1. New Tables
- `sofa2_cms_modules`
  - `module` (text, primary key): CMS module slug such as home, blog, faq, policy.
  - `rows` (jsonb, not null, default []): the admin-managed records for that module.
  - `updated_at` (timestamptz): last time the module was saved.

2. Security
- Enable RLS on `sofa2_cms_modules` with no policies, so anon and authenticated roles cannot read or write it directly.
- Grant SELECT, INSERT, UPDATE only to `service_role`, used by the server, which enforces admin checks before writing.
- Public visitors read published content through the server endpoint, never this table.

3. Notes
- Idempotent: safe to re-run.
*/

CREATE TABLE IF NOT EXISTS sofa2_cms_modules (
  module text PRIMARY KEY,
  rows jsonb NOT NULL DEFAULT '[]'::jsonb,
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE sofa2_cms_modules ENABLE ROW LEVEL SECURITY;

GRANT SELECT, INSERT, UPDATE ON sofa2_cms_modules TO service_role;
