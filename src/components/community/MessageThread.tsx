import { useEffect, useRef, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, LogOut, Send, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import BlockReportMenu from "./BlockReportMenu";
import type { CommunityMessage } from "@/types/community";
import { conversationTitle, type ConversationSummary } from "@/hooks/useCommunityMessaging";

interface Props {
  conversation: ConversationSummary;
  onBack: () => void;
  onSend: (conversationId: string, body: string) => Promise<{ error: unknown }>;
  onLeave: (conversationId: string) => Promise<void>;
  onRead: (conversationId: string) => void;
}

const MessageThread = ({ conversation, onBack, onSend, onLeave, onRead }: Props) => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [messages, setMessages] = useState<CommunityMessage[]>([]);
  const [draft, setDraft] = useState("");
  const [sending, setSending] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const title = conversationTitle(conversation, user?.id);
  const otherId =
    conversation.type === "direct"
      ? conversation.memberIds.find((id) => id !== user?.id)
      : undefined;

  useEffect(() => {
    let active = true;
    const load = async () => {
      const { data } = await supabase
        .from("community_messages")
        .select("*")
        .eq("conversation_id", conversation.id)
        .order("created_at", { ascending: true });
      if (active) setMessages((data ?? []) as CommunityMessage[]);
    };
    load();
    onRead(conversation.id);

    const channel = supabase
      .channel(`community-thread-${conversation.id}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "community_messages",
          filter: `conversation_id=eq.${conversation.id}`,
        },
        (payload) => {
          setMessages((prev) => {
            const next = payload.new as CommunityMessage;
            if (prev.some((m) => m.id === next.id)) return prev;
            return [...prev, next];
          });
          onRead(conversation.id);
        }
      )
      .subscribe();

    return () => {
      active = false;
      supabase.removeChannel(channel);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [conversation.id]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages.length]);

  const handleSend = async () => {
    if (!draft.trim()) return;
    setSending(true);
    const { error } = await onSend(conversation.id, draft);
    setSending(false);
    if (error) {
      toast({
        title: "Message not sent",
        description: error instanceof Error ? error.message : "Please try again.",
        variant: "destructive",
      });
      return;
    }
    setDraft("");
  };

  const handleLeave = async () => {
    await onLeave(conversation.id);
    toast({ title: "You left the conversation" });
    onBack();
  };

  return (
    <div className="flex h-[70vh] flex-col rounded-lg border bg-card">
      <div className="flex items-center gap-2 border-b p-3">
        <Button variant="ghost" size="icon" onClick={onBack} aria-label="Back to conversations">
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div className="min-w-0 flex-1">
          <p className="truncate font-semibold text-foreground">{title}</p>
          <p className="text-xs text-muted-foreground">
            {conversation.type === "group"
              ? `${conversation.memberIds.length} members`
              : "Private conversation"}
          </p>
        </div>
        {conversation.type === "group" && (
          <Badge variant="secondary" className="gap-1">
            <Users className="h-3 w-3" /> Group
          </Badge>
        )}
        <Button variant="ghost" size="icon" onClick={handleLeave} aria-label="Leave conversation">
          <LogOut className="h-4 w-4" />
        </Button>
        <BlockReportMenu
          targetUserId={otherId}
          targetName={conversation.type === "direct" ? title : undefined}
          conversationId={conversation.id}
          onBlocked={onBack}
        />
      </div>

      <div className="flex-1 space-y-3 overflow-y-auto p-4">
        {messages.length === 0 && (
          <p className="py-8 text-center text-sm text-muted-foreground">
            No messages yet. Say hello and share how you're studying.
          </p>
        )}
        {messages.map((m) => {
          const mine = m.sender_id === user?.id;
          return (
            <div key={m.id} className={cn("flex", mine ? "justify-end" : "justify-start")}>
              <div className={cn("max-w-[80%] space-y-1", mine && "items-end text-right")}>
                {!mine && conversation.type === "group" && (
                  <p className="text-xs font-medium text-muted-foreground">
                    {conversation.memberNames[m.sender_id] || "Member"}
                  </p>
                )}
                <div
                  className={cn(
                    "rounded-2xl px-3 py-2 text-sm",
                    mine
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground"
                  )}
                >
                  <p className="whitespace-pre-wrap break-words">{m.body}</p>
                </div>
                <p className="text-[11px] text-muted-foreground">
                  {new Date(m.created_at).toLocaleString(undefined, {
                    month: "short",
                    day: "numeric",
                    hour: "numeric",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </div>
          );
        })}
        <div ref={bottomRef} />
      </div>

      <div className="flex gap-2 border-t p-3">
        <Textarea
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
          rows={2}
          placeholder="Write a message..."
          className="flex-1 resize-none"
        />
        <Button
          onClick={handleSend}
          disabled={!draft.trim() || sending}
          size="icon"
          className="self-end"
          aria-label="Send message"
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default MessageThread;
