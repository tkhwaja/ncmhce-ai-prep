-- ============ study_partner_profiles ============
CREATE TABLE public.study_partner_profiles (
  user_id uuid PRIMARY KEY,
  is_listed boolean NOT NULL DEFAULT false,
  display_name text,
  blurb text,
  exam_track text NOT NULL DEFAULT 'ncmhce',
  target_exam_month text,
  gender text,
  age_range text,
  timezone text,
  study_styles text[] NOT NULL DEFAULT '{}',
  focus_areas text[] NOT NULL DEFAULT '{}',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.study_partner_profiles TO authenticated;
GRANT ALL ON public.study_partner_profiles TO service_role;
ALTER TABLE public.study_partner_profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Listed profiles are viewable by members"
  ON public.study_partner_profiles FOR SELECT TO authenticated
  USING (is_listed = true OR user_id = auth.uid());

CREATE POLICY "Users insert own partner profile"
  ON public.study_partner_profiles FOR INSERT TO authenticated
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users update own partner profile"
  ON public.study_partner_profiles FOR UPDATE TO authenticated
  USING (user_id = auth.uid()) WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users delete own partner profile"
  ON public.study_partner_profiles FOR DELETE TO authenticated
  USING (user_id = auth.uid());

CREATE TRIGGER update_study_partner_profiles_updated_at
  BEFORE UPDATE ON public.study_partner_profiles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- ============ user_blocks ============
CREATE TABLE public.user_blocks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  blocker_id uuid NOT NULL,
  blocked_id uuid NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (blocker_id, blocked_id)
);

GRANT SELECT, INSERT, DELETE ON public.user_blocks TO authenticated;
GRANT ALL ON public.user_blocks TO service_role;
ALTER TABLE public.user_blocks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users view own blocks"
  ON public.user_blocks FOR SELECT TO authenticated
  USING (blocker_id = auth.uid());

CREATE POLICY "Users create own blocks"
  ON public.user_blocks FOR INSERT TO authenticated
  WITH CHECK (blocker_id = auth.uid() AND blocked_id <> auth.uid());

CREATE POLICY "Users remove own blocks"
  ON public.user_blocks FOR DELETE TO authenticated
  USING (blocker_id = auth.uid());

-- ============ conversations ============
CREATE TABLE public.conversations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  type text NOT NULL DEFAULT 'direct',
  title text,
  created_by uuid NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT, UPDATE ON public.conversations TO authenticated;
GRANT ALL ON public.conversations TO service_role;
ALTER TABLE public.conversations ENABLE ROW LEVEL SECURITY;

CREATE TRIGGER update_conversations_updated_at
  BEFORE UPDATE ON public.conversations
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- ============ conversation_members ============
CREATE TABLE public.conversation_members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  conversation_id uuid NOT NULL REFERENCES public.conversations(id) ON DELETE CASCADE,
  user_id uuid NOT NULL,
  role text NOT NULL DEFAULT 'member',
  last_read_at timestamptz NOT NULL DEFAULT now(),
  joined_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (conversation_id, user_id)
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.conversation_members TO authenticated;
GRANT ALL ON public.conversation_members TO service_role;
ALTER TABLE public.conversation_members ENABLE ROW LEVEL SECURITY;

-- ============ messages ============
CREATE TABLE public.community_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  conversation_id uuid NOT NULL REFERENCES public.conversations(id) ON DELETE CASCADE,
  sender_id uuid NOT NULL,
  body text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX community_messages_conversation_created_idx
  ON public.community_messages (conversation_id, created_at DESC);

GRANT SELECT, INSERT ON public.community_messages TO authenticated;
GRANT ALL ON public.community_messages TO service_role;
ALTER TABLE public.community_messages ENABLE ROW LEVEL SECURITY;

-- ============ membership helper (avoids recursive RLS) ============
CREATE OR REPLACE FUNCTION public.is_conversation_member(_conversation_id uuid, _user_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.conversation_members
    WHERE conversation_id = _conversation_id AND user_id = _user_id
  );
$$;

-- conversations policies
CREATE POLICY "Members view their conversations"
  ON public.conversations FOR SELECT TO authenticated
  USING (public.is_conversation_member(id, auth.uid()));

CREATE POLICY "Users create conversations"
  ON public.conversations FOR INSERT TO authenticated
  WITH CHECK (created_by = auth.uid());

CREATE POLICY "Creator updates conversation"
  ON public.conversations FOR UPDATE TO authenticated
  USING (created_by = auth.uid()) WITH CHECK (created_by = auth.uid());

-- conversation_members policies
CREATE POLICY "Members view conversation roster"
  ON public.conversation_members FOR SELECT TO authenticated
  USING (user_id = auth.uid() OR public.is_conversation_member(conversation_id, auth.uid()));

CREATE POLICY "Add members to own or joined conversations"
  ON public.conversation_members FOR INSERT TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.conversations c
      WHERE c.id = conversation_id
        AND (c.created_by = auth.uid() OR public.is_conversation_member(c.id, auth.uid()))
    )
    AND NOT EXISTS (
      SELECT 1 FROM public.user_blocks b
      WHERE (b.blocker_id = conversation_members.user_id AND b.blocked_id = auth.uid())
         OR (b.blocker_id = auth.uid() AND b.blocked_id = conversation_members.user_id)
    )
  );

CREATE POLICY "Update own membership"
  ON public.conversation_members FOR UPDATE TO authenticated
  USING (user_id = auth.uid()) WITH CHECK (user_id = auth.uid());

CREATE POLICY "Leave or be removed by creator"
  ON public.conversation_members FOR DELETE TO authenticated
  USING (
    user_id = auth.uid()
    OR EXISTS (
      SELECT 1 FROM public.conversations c
      WHERE c.id = conversation_id AND c.created_by = auth.uid()
    )
  );

-- messages policies
CREATE POLICY "Members read conversation messages"
  ON public.community_messages FOR SELECT TO authenticated
  USING (public.is_conversation_member(conversation_id, auth.uid()));

CREATE POLICY "Members send messages"
  ON public.community_messages FOR INSERT TO authenticated
  WITH CHECK (sender_id = auth.uid() AND public.is_conversation_member(conversation_id, auth.uid()));

-- ============ community_reports ============
CREATE TABLE public.community_reports (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  reporter_id uuid NOT NULL,
  reported_user_id uuid,
  conversation_id uuid,
  reason text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT ON public.community_reports TO authenticated;
GRANT ALL ON public.community_reports TO service_role;
ALTER TABLE public.community_reports ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users view own reports"
  ON public.community_reports FOR SELECT TO authenticated
  USING (reporter_id = auth.uid());

CREATE POLICY "Users file reports"
  ON public.community_reports FOR INSERT TO authenticated
  WITH CHECK (reporter_id = auth.uid());

-- ============ realtime ============
ALTER TABLE public.community_messages REPLICA IDENTITY FULL;
ALTER TABLE public.conversation_members REPLICA IDENTITY FULL;
ALTER PUBLICATION supabase_realtime ADD TABLE public.community_messages;
ALTER PUBLICATION supabase_realtime ADD TABLE public.conversation_members;

-- ============ unread counts RPC ============
CREATE OR REPLACE FUNCTION public.community_unread_counts()
RETURNS TABLE(conversation_id uuid, unread_count bigint)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT cm.conversation_id, count(m.id) AS unread_count
  FROM public.conversation_members cm
  LEFT JOIN public.community_messages m
    ON m.conversation_id = cm.conversation_id
   AND m.created_at > cm.last_read_at
   AND m.sender_id <> cm.user_id
  WHERE cm.user_id = auth.uid()
  GROUP BY cm.conversation_id;
$$;