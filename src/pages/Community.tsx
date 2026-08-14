import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, MessagesSquare, Users } from "lucide-react";
import DiscussionsTab from "@/components/community/DiscussionsTab";
import StudyPartnersTab from "@/components/community/StudyPartnersTab";
import MessagesTab from "@/components/community/MessagesTab";
import { useCommunityMessaging } from "@/hooks/useCommunityMessaging";

type TabKey = "partners" | "messages" | "discussions";

const Community = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const paramTab = searchParams.get("tab") as TabKey | null;
  const paramConversation = searchParams.get("conversation");
  const [tab, setTab] = useState<TabKey>(paramTab ?? "partners");
  const [activeConversation, setActiveConversation] = useState<string | null>(paramConversation);

  const {
    conversations,
    loading,
    totalUnread,
    markRead,
    sendMessage,
    startDirectConversation,
    createGroupConversation,
    leaveConversation,
  } = useCommunityMessaging();

  useEffect(() => {
    if (paramTab && paramTab !== tab) setTab(paramTab);
    if (paramConversation && paramConversation !== activeConversation) {
      setActiveConversation(paramConversation);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paramTab, paramConversation]);

  const changeTab = (next: string) => {
    const key = next as TabKey;
    setTab(key);
    const params = new URLSearchParams(searchParams);
    params.set("tab", key);
    if (key !== "messages") params.delete("conversation");
    setSearchParams(params, { replace: true });
  };

  const openConversation = (id: string | null) => {
    setActiveConversation(id);
    const params = new URLSearchParams(searchParams);
    params.set("tab", "messages");
    if (id) params.set("conversation", id);
    else params.delete("conversation");
    setSearchParams(params, { replace: true });
  };

  const handleStartConversation = async (userId: string) => {
    const { id, error } = await startDirectConversation(userId);
    if (error) throw error instanceof Error ? error : new Error(String(error));
    if (id) {
      setTab("messages");
      openConversation(id);
    }
  };

  return (
    <div className="mx-auto max-w-6xl space-y-6 p-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Community</h1>
        <p className="text-muted-foreground">
          Find a study partner, message privately, and talk through cases together.
        </p>
      </div>

      <Tabs value={tab} onValueChange={changeTab} className="space-y-6">
        <TabsList>
          <TabsTrigger value="partners" className="gap-1.5">
            <Users className="h-4 w-4" /> Study Partners
          </TabsTrigger>
          <TabsTrigger value="messages" className="gap-1.5">
            <MessageCircle className="h-4 w-4" /> Messages
            {totalUnread > 0 && (
              <Badge className="ml-1 h-5 min-w-5 justify-center px-1.5">{totalUnread}</Badge>
            )}
          </TabsTrigger>
          <TabsTrigger value="discussions" className="gap-1.5">
            <MessagesSquare className="h-4 w-4" /> Discussions
          </TabsTrigger>
        </TabsList>

        <TabsContent value="partners">
          <StudyPartnersTab onStartConversation={handleStartConversation} />
        </TabsContent>

        <TabsContent value="messages">
          <MessagesTab
            conversations={conversations}
            loading={loading}
            activeId={activeConversation}
            onOpen={openConversation}
            onSend={sendMessage}
            onLeave={leaveConversation}
            onRead={markRead}
            onCreateGroup={createGroupConversation}
          />
        </TabsContent>

        <TabsContent value="discussions">
          <DiscussionsTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Community;
