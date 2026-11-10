/*
# Sofa2 access management storage

1. New Tables
- `sofa2_access_modules`
  - `module` (text, primary key): access module slug: users, roles, permissions, audit-log.
  - `rows` (jsonb, not null, default []): the admin-managed records for that module.
  - `updated_at` (timestamptz): last time the module was saved.

2. Security
- Enable RLS with no policies, so anon and authenticated roles cannot read or write it directly.
- Grant SELECT, INSERT, UPDATE only to `service_role`, used by the server, which enforces admin checks before reading or writing.
- Access data never appears in the public CMS feed.

3. Notes
- Idempotent: safe to re-run.
*/

CREATE TABLE IF NOT EXISTS sofa2_access_modules (
  module text PRIMARY KEY,
  rows jsonb NOT NULL DEFAULT '[]'::jsonb,
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE sofa2_access_modules ENABLE ROW LEVEL SECURITY;

GRANT SELECT, INSERT, UPDATE ON sofa2_access_modules TO service_role;
