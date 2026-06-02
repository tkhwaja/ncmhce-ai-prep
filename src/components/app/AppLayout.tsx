import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import AppSidebar from "./AppSidebar";
import AppHeader from "./AppHeader";
import AIChatSidebar from "./AIChatSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useSubscription } from "@/hooks/useSubscription";


export interface AppLayoutOutletContext {
  openChatWithPrompt: (prompt: string) => void;
}

const pageContextMap: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/narratives": "Narratives",
  "/simulations": "Narratives",
  "/study-plan": "Study Plan",
  "/analytics": "Analytics",
  "/flashcards": "Flashcards",
  "/library": "Learning Library",
  "/exam-info": "Exam Info",
  "/community": "Community",
  "/profile": "Profile",
  "/tools": "Study Tools",
};

const AppLayout = () => {
  const { hasAccess } = useSubscription();
  const [chatOpen, setChatOpen] = useState(true);
  const [chatWidth, setChatWidth] = useState(380);

  const [queuedPrompt, setQueuedPrompt] = useState<{ id: number; text: string } | null>(null);
  const location = useLocation();
  const currentContext =
    pageContextMap[location.pathname] ||
    (location.pathname.startsWith("/narrative/") || location.pathname.startsWith("/simulation/") ? "Narrative" : "App");

  const openChatWithPrompt = (prompt: string) => {
    setChatOpen(true);
    setQueuedPrompt({ id: Date.now(), text: prompt });
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background app-text-scale">
        <AppSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <AppHeader onToggleChat={() => setChatOpen(!chatOpen)} chatOpen={chatOpen} />
          <main className="flex-1 overflow-auto">
            <Outlet context={{ openChatWithPrompt } satisfies AppLayoutOutletContext} />
          </main>
          <footer className="border-t border-border px-4 py-2">
            <p className="text-xs text-muted-foreground text-center">
              This platform is for educational purposes only and is not a diagnostic tool.
            </p>
          </footer>
        </div>
        <AIChatSidebar
          open={chatOpen}
          onClose={() => setChatOpen(false)}
          context={currentContext}
          queuedPrompt={queuedPrompt}
          width={chatWidth}
          onWidthChange={setChatWidth}
        />
      </div>
    </SidebarProvider>
  );
};

export default AppLayout;
