import { useNavigate } from "react-router-dom";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useUnreadMessages } from "@/hooks/useUnreadMessages";

const NotificationBell = () => {
  const navigate = useNavigate();
  const { total, notifications } = useUnreadMessages();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="relative" aria-label="Notifications">
          <Bell className="h-4 w-4" />
          {total > 0 && (
            <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-destructive px-1 text-[10px] font-semibold text-destructive-foreground">
              {total > 9 ? "9+" : total}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-72">
        <DropdownMenuLabel>Notifications</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {notifications.length === 0 ? (
          <p className="px-2 py-4 text-center text-sm text-muted-foreground">
            You're all caught up.
          </p>
        ) : (
          notifications.map((n) => (
            <DropdownMenuItem
              key={n.conversationId}
              className="flex flex-col items-start gap-0.5 py-2"
              onClick={() =>
                navigate(`/community?tab=messages&conversation=${n.conversationId}`)
              }
            >
              <span className="text-sm font-medium text-foreground">
                {n.isGroup ? `${n.senderName} in ${n.groupTitle || "study group"}` : n.senderName}
              </span>
              <span className="line-clamp-2 text-xs text-muted-foreground">{n.preview}</span>
            </DropdownMenuItem>
          ))
        )}
        {notifications.length > 0 && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => navigate("/community?tab=messages")}>
              View all messages
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NotificationBell;
