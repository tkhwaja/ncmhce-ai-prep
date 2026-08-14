REVOKE EXECUTE ON FUNCTION public.is_conversation_member(uuid, uuid) FROM anon, public;
REVOKE EXECUTE ON FUNCTION public.community_unread_counts() FROM anon, public;
GRANT EXECUTE ON FUNCTION public.is_conversation_member(uuid, uuid) TO authenticated, service_role;
GRANT EXECUTE ON FUNCTION public.community_unread_counts() TO authenticated, service_role;