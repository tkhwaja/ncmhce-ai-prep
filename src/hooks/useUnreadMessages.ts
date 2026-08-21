import { useCallback, useEffect, useId, useRef, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

export interface UnreadNotification {
  conversationId: string;
  senderName: string;
  preview: string;
  createdAt: string;
  isGroup: boolean;
  groupTitle: string | null;
}

/**
 * Lightweight unread-message feed for the header bell / nav badge.
 * Kept separate from useCommunityMessaging so it can mount app-wide.
 */
export function useUnreadMessages() {
  const { user } = useAuth();
  const [total, setTotal] = useState(0);
  const [notifications, setNotifications] = useState<UnreadNotification[]>([]);
  const instanceId = useId();

  const load = useCallback(async () => {
    if (!user) {
      setTotal(0);
      setNotifications([]);
      return;
    }

    // The RPC is only executable by the `authenticated` role. If the access token
    // has expired (or is mid-refresh) the client falls back to `anon` and Postgres
    // returns "permission denied", so confirm a live session first.
    const { data: sessionData } = await supabase.auth.getSession();
    if (!sessionData.session) return;

    const { data: counts, error } = await supabase.rpc("community_unread_counts");
    if (error) return;
    const rows = (counts as { conversation_id: string; unread_count: number }[] | null) ?? [];
    const unreadRows = rows.filter((r) => Number(r.unread_count) > 0);
    setTotal(unreadRows.reduce((sum, r) => sum + Number(r.unread_count), 0));

    if (unreadRows.length === 0) {
      setNotifications([]);
      return;
    }

    const convoIds = unreadRows.map((r) => r.conversation_id);
    const [{ data: memberships }, { data: convos }] = await Promise.all([
      supabase
        .from("conversation_members")
        .select("conversation_id, last_read_at")
        .eq("user_id", user.id)
        .in("conversation_id", convoIds),
      supabase.from("conversations").select("id, type, title").in("id", convoIds),
    ]);

    const readMap: Record<string, string> = {};
    memberships?.forEach((m) => { readMap[m.conversation_id] = m.last_read_at; });
    const convoMap: Record<string, { type: string; title: string | null }> = {};
    convos?.forEach((c) => { convoMap[c.id] = { type: c.type, title: c.title }; });

    const { data: messages } = await supabase
      .from("community_messages")
      .select("*")
      .in("conversation_id", convoIds)
      .neq("sender_id", user.id)
      .order("created_at", { ascending: false })
      .limit(60);

    const latestPerConvo: Record<string, { body: string; created_at: string; sender_id: string }> = {};
    messages?.forEach((m) => {
      const readAt = readMap[m.conversation_id];
      if (readAt && m.created_at <= readAt) return;
      if (!latestPerConvo[m.conversation_id]) latestPerConvo[m.conversation_id] = m;
    });

    const senderIds = [...new Set(Object.values(latestPerConvo).map((m) => m.sender_id))];
    const names: Record<string, string> = {};
    if (senderIds.length) {
      const [{ data: partners }, { data: profiles }] = await Promise.all([
        supabase.from("study_partner_profiles").select("user_id, display_name").in("user_id", senderIds),
        supabase.from("profiles").select("id, full_name").in("id", senderIds),
      ]);
      profiles?.forEach((p) => { if (p.full_name) names[p.id] = p.full_name; });
      partners?.forEach((p) => { if (p.display_name) names[p.user_id] = p.display_name; });
    }

    setNotifications(
      Object.entries(latestPerConvo)
        .map(([conversationId, m]) => ({
          conversationId,
          senderName: names[m.sender_id] || "Member",
          preview: m.body.length > 90 ? `${m.body.slice(0, 90)}…` : m.body,
          createdAt: m.created_at,
          isGroup: convoMap[conversationId]?.type === "group",
          groupTitle: convoMap[conversationId]?.title ?? null,
        }))
        .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    );
  }, [user]);

  useEffect(() => { load(); }, [load]);

  const loadRef = useRef(load);
  useEffect(() => { loadRef.current = load; }, [load]);

  useEffect(() => {
    if (!user) return;
    const channel = supabase
      .channel(`community-unread-bell:${user.id}:${instanceId}:${Math.random().toString(36).slice(2)}`)
      .on("postgres_changes", { event: "*", schema: "public", table: "community_messages" }, () => loadRef.current())
      .on("postgres_changes", { event: "*", schema: "public", table: "conversation_members" }, () => loadRef.current())
      .subscribe();
    return () => { supabase.removeChannel(channel); };
  }, [user, instanceId]);

  return { total, notifications, refresh: load };
}
