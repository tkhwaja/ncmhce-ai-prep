import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MessageSquare, Users } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import NewGroupDialog from "./NewGroupDialog";
import MessageThread from "./MessageThread";
import { conversationTitle, type ConversationSummary } from "@/hooks/useCommunityMessaging";

interface Props {
  conversations: ConversationSummary[];
  loading: boolean;
  activeId: string | null;
  onOpen: (id: string | null) => void;
  onSend: (conversationId: string, body: string) => Promise<{ error: unknown }>;
  onLeave: (conversationId: string) => Promise<void>;
  onRead: (conversationId: string) => void;
  onCreateGroup: (title: string, memberIds: string[]) => Promise<{ id: string | null; error: unknown }>;
}

const MessagesTab = ({
  conversations,
  loading,
  activeId,
  onOpen,
  onSend,
  onLeave,
  onRead,
  onCreateGroup,
}: Props) => {
  const { user } = useAuth();
  const active = conversations.find((c) => c.id === activeId) ?? null;

  if (active) {
    return (
      <MessageThread
        conversation={active}
        onBack={() => onOpen(null)}
        onSend={onSend}
        onLeave={onLeave}
        onRead={onRead}
      />
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-muted-foreground">
          Private conversations with your study partners. Emails stay hidden unless you choose to
          share one in a message.
        </p>
        <NewGroupDialog onCreate={onCreateGroup} />
      </div>

      {loading ? (
        <div className="space-y-2">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="card-elevated animate-pulse">
              <CardContent className="h-16 p-4" />
            </Card>
          ))}
        </div>
      ) : conversations.length === 0 ? (
        <div className="py-12 text-center text-muted-foreground">
          <MessageSquare className="mx-auto mb-3 h-12 w-12 opacity-50" />
          <p>No conversations yet.</p>
          <p className="text-sm">Head to Study Partners and message someone to get started.</p>
        </div>
      ) : (
        <div className="space-y-2">
          {conversations.map((c) => {
            const title = conversationTitle(c, user?.id);
            const initials = title
              .split(" ")
              .map((w) => w[0])
              .join("")
              .slice(0, 2)
              .toUpperCase();
            return (
              <Card
                key={c.id}
                className="card-elevated cursor-pointer transition-all hover:border-primary/30"
                onClick={() => onOpen(c.id)}
              >
                <CardContent className="flex items-center gap-3 p-4">
                  <Avatar className="h-9 w-9">
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {c.type === "group" ? <Users className="h-4 w-4" /> : initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <p className="truncate font-medium text-foreground">{title}</p>
                      {c.type === "group" && (
                        <Badge variant="outline" className="text-[10px]">
                          {c.memberIds.length}
                        </Badge>
                      )}
                    </div>
                    <p className="truncate text-sm text-muted-foreground">
                      {c.lastMessage?.body || "No messages yet"}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    {c.lastMessage && (
                      <span className="text-[11px] text-muted-foreground">
                        {new Date(c.lastMessage.created_at).toLocaleDateString(undefined, {
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    )}
                    {c.unread > 0 && (
                      <Badge className="h-5 min-w-5 justify-center px-1.5">{c.unread}</Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MessagesTab;
