import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Flag, MoreVertical, ShieldOff } from "lucide-react";

interface Props {
  targetUserId?: string;
  targetName?: string;
  conversationId?: string;
  onBlocked?: () => void;
}

const BlockReportMenu = ({ targetUserId, targetName, conversationId, onBlocked }: Props) => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [reportOpen, setReportOpen] = useState(false);
  const [reason, setReason] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleBlock = async () => {
    if (!user || !targetUserId) return;
    const { error } = await supabase
      .from("user_blocks")
      .insert({ blocker_id: user.id, blocked_id: targetUserId });
    if (error && !error.message.includes("duplicate")) {
      toast({ title: "Could not block", description: error.message, variant: "destructive" });
      return;
    }
    toast({
      title: "Blocked",
      description: `${targetName || "This member"} can no longer start a conversation with you.`,
    });
    onBlocked?.();
  };

  const handleReport = async () => {
    if (!user || !reason.trim()) return;
    setSubmitting(true);
    const { error } = await supabase.from("community_reports").insert({
      reporter_id: user.id,
      reported_user_id: targetUserId ?? null,
      conversation_id: conversationId ?? null,
      reason: reason.trim(),
    });
    setSubmitting(false);
    if (error) {
      toast({ title: "Could not send report", description: error.message, variant: "destructive" });
      return;
    }
    setReportOpen(false);
    setReason("");
    toast({ title: "Report sent", description: "Our team will review this." });
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="More options">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {targetUserId && (
            <DropdownMenuItem onClick={handleBlock}>
              <ShieldOff className="mr-2 h-4 w-4" /> Block {targetName || "member"}
            </DropdownMenuItem>
          )}
          <DropdownMenuItem onClick={() => setReportOpen(true)}>
            <Flag className="mr-2 h-4 w-4" /> Report
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={reportOpen} onOpenChange={setReportOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Report to our team</DialogTitle>
            <DialogDescription>
              Tell us what happened. Reports are private and reviewed by the platform team.
            </DialogDescription>
          </DialogHeader>
          <Textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            rows={4}
            placeholder="What's going on?"
          />
          <Button onClick={handleReport} disabled={!reason.trim() || submitting}>
            {submitting ? "Sending..." : "Send report"}
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BlockReportMenu;
