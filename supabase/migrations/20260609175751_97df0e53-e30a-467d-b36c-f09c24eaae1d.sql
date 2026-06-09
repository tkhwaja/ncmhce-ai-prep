-- Restrict Realtime channel subscriptions
-- Users may only join shared "community-*" channels or channels whose topic ends with their own auth.uid().
-- Postgres-changes events are still additionally filtered by the underlying table RLS.

ALTER TABLE realtime.messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Authenticated users can read allowed realtime topics" ON realtime.messages;
CREATE POLICY "Authenticated users can read allowed realtime topics"
ON realtime.messages
FOR SELECT
TO authenticated
USING (
  (realtime.topic() LIKE 'community-%')
  OR (realtime.topic() LIKE '%' || auth.uid()::text)
);

DROP POLICY IF EXISTS "Authenticated users can send to allowed realtime topics" ON realtime.messages;
CREATE POLICY "Authenticated users can send to allowed realtime topics"
ON realtime.messages
FOR INSERT
TO authenticated
WITH CHECK (
  (realtime.topic() LIKE 'community-%')
  OR (realtime.topic() LIKE '%' || auth.uid()::text)
);
