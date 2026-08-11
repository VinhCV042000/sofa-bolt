# Security Hardening Implementation Plan

Implement the 8 findings documented in the existing security scan.

## 1. Enable Leaked Password Protection
- Call `supabase--configure_auth` with `password_hibp_enabled: true`.
- This rejects passwords found in known breach databases during signup and password changes.

## 2. Password-Protected Shared Proposals
- **Migration**: Add `share_password_hash` (text, nullable) to `public.proposals`.
- **Edge function**: Use the existing `verify-share-password` function; ensure it accepts `share_id` + password and returns a signed short-lived token.
- **RLS**: Keep public SELECT for non-protected proposals; require the verification token for password-protected ones.
- **Frontend**: Add a password gate in `PublicProposal.tsx`; add share-password UI in `ProposalDetail.tsx`.

## 3. Share Link Expiration
- **Migration**: Add `share_expires_at` (timestamptz, nullable) to `public.proposals`.
- **RLS**: Update the public SELECT policy to `share_expires_at IS NULL OR share_expires_at > now()`.
- **Frontend**: Add an expiration date picker in the proposal sharing UI (`ProposalDetail.tsx` and `ProposalBuilder.tsx`).

## 4. Restrict Client Contact Info by Role
- Create a `clients_public` view that excludes `email` and `phone`.
- Update the app to use the view for non-admin/manager users.
- Keep full client access for admin/manager roles.

## 5. Anonymize IP in Proposal Events
- Truncate the last octet of IP addresses before storing proposal view events in `PublicProposal.tsx`.
- Add a short privacy notice on the public proposal page.

## 6. Align Proposal Version Access
- **Migration**: Update `proposal_versions` RLS so managers/admins can view versions of proposals in their org.
- Use `get_user_org_id(auth.uid())` and `has_role()` checks.

## 7. Role Change Audit Logging
- **Migration**: Create `audit_logs` table with RLS (admin SELECT only, insert via trigger).
- **Migration**: Add trigger on `user_roles` for INSERT/UPDATE/DELETE that writes to `audit_logs`.

## 8. Input Validation & Frontend Security
- Add client-side validation (length limits, required fields) on proposal and client forms.
- Add server-side length/type checks where possible.
- Ensure no sensitive data is stored in localStorage beyond the session token.

## Files to Change
- `supabase/migrations/` — 4 migrations for schema/RLS changes.
- `supabase/functions/verify-share-password/index.ts` — finalize/share token logic.
- `src/pages/PublicProposal.tsx` — password gate, IP anonymization, privacy notice.
- `src/pages/ProposalDetail.tsx` — share password + expiration UI.
- `src/pages/ProposalBuilder.tsx` — share expiration option.
- Auth config via `supabase--configure_auth`.

## Verification
- Run `supabase--linter` and `security--run_security_scan` after changes.
- Build the frontend and run any available tests.
