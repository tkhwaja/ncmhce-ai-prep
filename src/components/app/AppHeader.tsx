import { useState, useRef, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useAuth } from "@/contexts/AuthContext";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MessageSquare, Search, LayoutDashboard, User, LogOut, Sun, Moon, MessageCircle, Sparkles, Lock, Check } from "lucide-react";
import { useSubscription } from "@/hooks/useSubscription";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";
import FeedbackDialog from "@/components/FeedbackDialog";

interface AppHeaderProps {
  onToggleChat: () => void;
  chatOpen: boolean;
}

const searchDestinations = [
  { label: "Dashboard", path: "/dashboard", keywords: ["home", "overview", "stats"] },
  { label: "Narratives", path: "/narratives", keywords: ["cases", "clinical", "practice", "simulation"] },
  { label: "Study Plan", path: "/study-plan", keywords: ["plan", "schedule", "goals"] },
  { label: "Learning Library", path: "/library", keywords: ["learn", "modules", "dsm", "theories", "ethics"] },
  { label: "Flashcards", path: "/flashcards", keywords: ["cards", "review", "memorize"] },
  { label: "Analytics", path: "/analytics", keywords: ["progress", "scores", "performance"] },
  { label: "Study Tools", path: "/tools", keywords: ["pomodoro", "timer", "feynman", "notes"] },
  { label: "Community", path: "/community", keywords: ["forum", "discuss", "posts"] },
  { label: "Exam Info", path: "/exam-info", keywords: ["ncmhce", "exam", "registration", "format"] },
  { label: "Profile", path: "/profile", keywords: ["account", "settings", "profile"] },
];

const AppHeader = ({ onToggleChat, chatOpen }: AppHeaderProps) => {
  const { profile, signOut } = useAuth();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const sub = useSubscription();
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Show "Upgrade" CTA only to users without a real paid plan
  // (no Stripe sub, no founder access, not legacy paid).
  const isFreeUser =
    !sub.loading &&
    !sub.status &&
    profile?.payment_status !== "paid" &&
    !profile?.access_expires_at;

  const filteredResults = searchQuery.trim()
    ? searchDestinations.filter(
        (d) =>
          d.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
          d.keywords.some((k) => k.includes(searchQuery.toLowerCase()))
      )
    : [];

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) setShowResults(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const initials = profile?.full_name
    ? profile.full_name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)
    : "U";

  const handleSignOut = async () => {
    await signOut();
    navigate("/login");
  };

  return (
    <header className="h-14 border-b border-border flex items-center justify-between px-4 bg-background/80 backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <SidebarTrigger />
      </div>

      <div className="hidden md:flex flex-1 max-w-md mx-4 relative" ref={searchRef}>
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search pages..."
            className="pl-9 bg-muted/50 border-border"
            value={searchQuery}
            onChange={(e) => { setSearchQuery(e.target.value); setShowResults(true); }}
            onFocus={() => setShowResults(true)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && filteredResults.length > 0) {
                navigate(filteredResults[0].path);
                setSearchQuery("");
                setShowResults(false);
              }
            }}
          />
        </div>
        {showResults && filteredResults.length > 0 && (
          <div className="absolute top-full mt-1 left-0 right-0 bg-popover border border-border rounded-lg shadow-lg z-50 py-1">
            {filteredResults.map((r) => (
              <button
                key={r.path}
                className="w-full text-left px-3 py-2 text-sm hover:bg-accent transition-colors text-foreground"
                onClick={() => { navigate(r.path); setSearchQuery(""); setShowResults(false); }}
              >
                {r.label}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center gap-2">
        {isFreeUser && (
          <Button
            size="sm"
            onClick={() => navigate("/checkout")}
            className="gap-1.5 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-sm"
            title="Upgrade your membership"
          >
            <Sparkles className="h-4 w-4" />
            <span className="hidden sm:inline text-xs font-semibold">Upgrade</span>
          </Button>
        )}

        <Button
          variant="outline"
          size="sm"
          onClick={toggleTheme}
          className="gap-2"
          title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          aria-label="Toggle color theme"
        >
          {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          <span className="hidden sm:inline text-xs font-medium">
            {theme === "dark" ? "Light" : "Dark"} mode
          </span>
        </Button>

        <Button
          variant={chatOpen ? "default" : "outline"}
          onClick={onToggleChat}
          className="relative gap-2"
          title="Toggle AI Chat"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="hidden md:inline text-sm font-medium">AI Tutor</span>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-primary/20 text-primary text-xs">{initials}</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <div className="px-2 py-1.5">
              <p className="text-sm font-medium">{profile?.full_name || "User"}</p>
              <p className="text-xs text-muted-foreground">{profile?.email}</p>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => navigate("/dashboard")}>
              <LayoutDashboard className="mr-2 h-4 w-4" /> Dashboard
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate("/profile")}>
              <User className="mr-2 h-4 w-4" /> Profile
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild onSelect={(e) => e.preventDefault()}>
              <FeedbackDialog />
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleSignOut}>
              <LogOut className="mr-2 h-4 w-4" /> Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default AppHeader;
