-- Internal-only functions: no client access at all
REVOKE ALL ON FUNCTION public.enqueue_email(text, jsonb) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.delete_email(text, bigint) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.move_to_dlq(text, text, bigint, jsonb) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.read_email_batch(text, integer, integer) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.auto_promote_on_cancel() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.update_updated_at_column() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.has_event_access(uuid, uuid) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.has_any_organizer_access(uuid) FROM PUBLIC, anon, authenticated;

GRANT EXECUTE ON FUNCTION public.enqueue_email(text, jsonb) TO service_role;
GRANT EXECUTE ON FUNCTION public.delete_email(text, bigint) TO service_role;
GRANT EXECUTE ON FUNCTION public.move_to_dlq(text, text, bigint, jsonb) TO service_role;
GRANT EXECUTE ON FUNCTION public.read_email_batch(text, integer, integer) TO service_role;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO service_role;
GRANT EXECUTE ON FUNCTION public.has_event_access(uuid, uuid) TO service_role;
GRANT EXECUTE ON FUNCTION public.has_any_organizer_access(uuid) TO service_role;

-- Signed-in only functions: remove anonymous access
REVOKE ALL ON FUNCTION public.accept_cohost_invitation(text) FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.check_in_attendee(uuid) FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.get_my_tickets() FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.get_event_email_config(uuid) FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.update_event_email_config(uuid, jsonb) FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.promote_from_waitlist(uuid) FROM PUBLIC, anon;

GRANT EXECUTE ON FUNCTION public.accept_cohost_invitation(text) TO authenticated, service_role;
GRANT EXECUTE ON FUNCTION public.check_in_attendee(uuid) TO authenticated, service_role;
GRANT EXECUTE ON FUNCTION public.get_my_tickets() TO authenticated, service_role;
GRANT EXECUTE ON FUNCTION public.get_event_email_config(uuid) TO authenticated, service_role;
GRANT EXECUTE ON FUNCTION public.update_event_email_config(uuid, jsonb) TO authenticated, service_role;
GRANT EXECUTE ON FUNCTION public.promote_from_waitlist(uuid) TO authenticated, service_role;

-- Intentionally public event-facing functions: keep explicit, minimal grants
REVOKE ALL ON FUNCTION public.register_for_event(uuid, jsonb, jsonb) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.get_ticket(uuid) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.get_registration_count(uuid) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.increment_link_click(uuid) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.get_cohost_invitation(text) FROM PUBLIC;

GRANT EXECUTE ON FUNCTION public.register_for_event(uuid, jsonb, jsonb) TO anon, authenticated, service_role;
GRANT EXECUTE ON FUNCTION public.get_ticket(uuid) TO anon, authenticated, service_role;
GRANT EXECUTE ON FUNCTION public.get_registration_count(uuid) TO anon, authenticated, service_role;
GRANT EXECUTE ON FUNCTION public.increment_link_click(uuid) TO anon, authenticated, service_role;
GRANT EXECUTE ON FUNCTION public.get_cohost_invitation(text) TO anon, authenticated, service_role;