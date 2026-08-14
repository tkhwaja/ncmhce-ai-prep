import { useCallback, useEffect, useId, useRef, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import type { CommunityMessage, Conversation } from "@/types/community";

export interface ConversationSummary extends Conversation {
  memberIds: string[];
  memberNames: Record<string, string>;
  lastMessage?: CommunityMessage;
  unread: number;
  lastReadAt: string;
}

async function fetchDisplayNames(userIds: string[]): Promise<Record<string, string>> {
  const names: Record<string, string> = {};
  if (userIds.length === 0) return names;

  const [{ data: partners }, { data: profiles }] = await Promise.all([
    supabase
      .from("study_partner_profiles")
      .select("user_id, display_name")
      .in("user_id", userIds),
    supabase.from("profiles").select("id, full_name").in("id", userIds),
  ]);

  profiles?.forEach((p) => {
    if (p.full_name) names[p.id] = p.full_name;
  });
  partners?.forEach((p) => {
    if (p.display_name) names[p.user_id] = p.display_name;
  });
  userIds.forEach((id) => {
    if (!names[id]) names[id] = "Member";
  });
  return names;
}

/**
 * Loads the current user's conversations, unread counts, and keeps them in
 * sync in realtime. Also exposes helpers to start conversations and send messages.
 */
export function useCommunityMessaging() {
  const { user } = useAuth();
  const [conversations, setConversations] = useState<ConversationSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const instanceId = useId();

  const refresh = useCallback(async () => {
    if (!user) {
      setConversations([]);
      setLoading(false);
      return;
    }

    const { data: myMemberships } = await supabase
      .from("conversation_members")
      .select("conversation_id, last_read_at")
      .eq("user_id", user.id);

    const ids = (myMemberships ?? []).map((m) => m.conversation_id);
    if (ids.length === 0) {
      setConversations([]);
      setLoading(false);
      return;
    }

    const [{ data: convos }, { data: allMembers }, { data: unread }] = await Promise.all([
      supabase.from("conversations").select("*").in("id", ids),
      supabase.from("conversation_members").select("conversation_id, user_id").in("conversation_id", ids),
      supabase.rpc("community_unread_counts"),
    ]);

    const memberIdsByConvo: Record<string, string[]> = {};
    allMembers?.forEach((m) => {
      memberIdsByConvo[m.conversation_id] = [
        ...(memberIdsByConvo[m.conversation_id] ?? []),
        m.user_id,
      ];
    });

    const otherIds = [
      ...new Set(
        Object.values(memberIdsByConvo).flat().filter((id) => id !== user.id)
      ),
    ];
    const names = await fetchDisplayNames(otherIds);

    // latest message per conversation
    const { data: recent } = await supabase
      .from("community_messages")
      .select("*")
      .in("conversation_id", ids)
      .order("created_at", { ascending: false })
      .limit(200);

    const lastByConvo: Record<string, CommunityMessage> = {};
    recent?.forEach((m) => {
      if (!lastByConvo[m.conversation_id]) lastByConvo[m.conversation_id] = m as CommunityMessage;
    });

    const unreadMap: Record<string, number> = {};
    (unread as { conversation_id: string; unread_count: number }[] | null)?.forEach((row) => {
      unreadMap[row.conversation_id] = Number(row.unread_count) || 0;
    });

    const readMap: Record<string, string> = {};
    myMemberships?.forEach((m) => { readMap[m.conversation_id] = m.last_read_at; });

    const summaries: ConversationSummary[] = (convos ?? [])
      .map((c) => ({
        ...(c as Conversation),
        memberIds: memberIdsByConvo[c.id] ?? [],
        memberNames: names,
        lastMessage: lastByConvo[c.id],
        unread: unreadMap[c.id] ?? 0,
        lastReadAt: readMap[c.id] ?? c.created_at,
      }))
      .sort((a, b) => {
        const at = a.lastMessage?.created_at ?? a.created_at;
        const bt = b.lastMessage?.created_at ?? b.created_at;
        return bt.localeCompare(at);
      });

    setConversations(summaries);
    setLoading(false);
  }, [user]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const refreshRef = useRef(refresh);
  useEffect(() => { refreshRef.current = refresh; }, [refresh]);

  useEffect(() => {
    if (!user) return;
    const channel = supabase
      .channel(`community-messaging-sync:${user.id}:${instanceId}`)
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "community_messages" },
        () => refreshRef.current()
      )
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "conversation_members" },
        () => refreshRef.current()
      )
      .subscribe();
    return () => { supabase.removeChannel(channel); };
  }, [user, instanceId]);

  const totalUnread = conversations.reduce((sum, c) => sum + c.unread, 0);

  const markRead = useCallback(
    async (conversationId: string) => {
      if (!user) return;
      await supabase
        .from("conversation_members")
        .update({ last_read_at: new Date().toISOString() })
        .eq("conversation_id", conversationId)
        .eq("user_id", user.id);
      setConversations((prev) =>
        prev.map((c) => (c.id === conversationId ? { ...c, unread: 0 } : c))
      );
    },
    [user]
  );

  const sendMessage = useCallback(
    async (conversationId: string, body: string) => {
      if (!user || !body.trim()) return { error: null };
      const { error } = await supabase.from("community_messages").insert({
        conversation_id: conversationId,
        sender_id: user.id,
        body: body.trim(),
      });
      if (!error) {
        await supabase
          .from("conversations")
          .update({ updated_at: new Date().toISOString() })
          .eq("id", conversationId);
      }
      return { error };
    },
    [user]
  );

  /** Finds an existing 1-on-1 conversation with `otherUserId` or creates one. */
  const startDirectConversation = useCallback(
    async (otherUserId: string) => {
      if (!user) return { id: null, error: new Error("Not signed in") };

      const existing = conversations.find(
        (c) =>
          c.type === "direct" &&
          c.memberIds.length === 2 &&
          c.memberIds.includes(otherUserId)
      );
      if (existing) return { id: existing.id, error: null };

      const { data: convo, error } = await supabase
        .from("conversations")
        .insert({ type: "direct", created_by: user.id })
        .select()
        .single();
      if (error || !convo) return { id: null, error };

      const { error: memberError } = await supabase.from("conversation_members").insert([
        { conversation_id: convo.id, user_id: user.id, role: "owner" },
        { conversation_id: convo.id, user_id: otherUserId, role: "member" },
      ]);
      if (memberError) return { id: null, error: memberError };

      await refresh();
      return { id: convo.id, error: null };
    },
    [user, conversations, refresh]
  );

  const createGroupConversation = useCallback(
    async (title: string, memberIds: string[]) => {
      if (!user) return { id: null, error: new Error("Not signed in") };
      const { data: convo, error } = await supabase
        .from("conversations")
        .insert({ type: "group", title: title.trim(), created_by: user.id })
        .select()
        .single();
      if (error || !convo) return { id: null, error };

      const rows = [
        { conversation_id: convo.id, user_id: user.id, role: "owner" },
        ...memberIds
          .filter((id) => id !== user.id)
          .map((id) => ({ conversation_id: convo.id, user_id: id, role: "member" })),
      ];
      const { error: memberError } = await supabase.from("conversation_members").insert(rows);
      if (memberError) return { id: null, error: memberError };

      await refresh();
      return { id: convo.id, error: null };
    },
    [user, refresh]
  );

  const leaveConversation = useCallback(
    async (conversationId: string) => {
      if (!user) return;
      await supabase
        .from("conversation_members")
        .delete()
        .eq("conversation_id", conversationId)
        .eq("user_id", user.id);
      await refresh();
    },
    [user, refresh]
  );

  return {
    conversations,
    loading,
    totalUnread,
    refresh,
    markRead,
    sendMessage,
    startDirectConversation,
    createGroupConversation,
    leaveConversation,
  };
}

export function conversationTitle(
  convo: ConversationSummary,
  currentUserId: string | undefined
): string {
  if (convo.type === "group") return convo.title || "Study group";
  const other = convo.memberIds.find((id) => id !== currentUserId);
  return (other && convo.memberNames[other]) || "Member";
}
