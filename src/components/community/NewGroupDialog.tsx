import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Users } from "lucide-react";
import { formatExamMonth, type StudyPartnerProfile } from "@/types/community";

const MAX_MEMBERS = 12;

interface Props {
  onCreate: (title: string, memberIds: string[]) => Promise<{ id: string | null; error: unknown }>;
}

const NewGroupDialog = ({ onCreate }: Props) => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const [candidates, setCandidates] = useState<StudyPartnerProfile[]>([]);
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    if (!open || !user) return;
    (async () => {
      const { data } = await supabase
        .from("study_partner_profiles")
        .select("*")
        .eq("is_listed", true);
      setCandidates(((data ?? []) as StudyPartnerProfile[]).filter((p) => p.user_id !== user.id));
    })();
  }, [open, user]);

  const toggle = (id: string) => {
    setSelected((prev) => {
      if (prev.includes(id)) return prev.filter((v) => v !== id);
      if (prev.length + 1 >= MAX_MEMBERS) {
        toast({ title: `Groups hold up to ${MAX_MEMBERS} people`, description: "Remove someone to add another." });
        if (prev.length + 1 > MAX_MEMBERS - 1) return prev;
      }
      return [...prev, id];
    });
  };

  const handleCreate = async () => {
    if (!title.trim() || selected.length === 0) return;
    setCreating(true);
    const { error } = await onCreate(title, selected);
    setCreating(false);
    if (error) {
      toast({
        title: "Could not create the group",
        description: error instanceof Error ? error.message : "Please try again.",
        variant: "destructive",
      });
      return;
    }
    setOpen(false);
    setTitle("");
    setSelected([]);
    toast({ title: "Study group created" });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Users className="mr-2 h-4 w-4" /> New group
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a study group</DialogTitle>
          <DialogDescription>
            Pick members from the Study Partners directory. Up to {MAX_MEMBERS} people per group.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="groupTitle">Group name</Label>
            <Input
              id="groupTitle"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. October NCMHCE Crew"
              maxLength={60}
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label>Members</Label>
              <Badge variant="secondary">{selected.length + 1}/{MAX_MEMBERS}</Badge>
            </div>
            <ScrollArea className="h-56 rounded-md border">
              <div className="divide-y">
                {candidates.length === 0 && (
                  <p className="p-4 text-sm text-muted-foreground">
                    No listed members yet — once others list themselves you can build a group.
                  </p>
                )}
                {candidates.map((c) => (
                  <label
                    key={c.user_id}
                    className="flex cursor-pointer items-center gap-3 p-3 hover:bg-muted/50"
                  >
                    <Checkbox
                      checked={selected.includes(c.user_id)}
                      onCheckedChange={() => toggle(c.user_id)}
                    />
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-medium text-foreground">
                        {c.display_name || "Member"}
                      </span>
                      <span className="block truncate text-xs text-muted-foreground">
                        {[c.exam_track === "nce" ? "NCE" : "NCMHCE", formatExamMonth(c.target_exam_month)]
                          .filter(Boolean)
                          .join(" · ")}
                      </span>
                    </span>
                  </label>
                ))}
              </div>
            </ScrollArea>
          </div>

          <Button
            className="w-full"
            onClick={handleCreate}
            disabled={!title.trim() || selected.length === 0 || creating}
          >
            {creating ? "Creating..." : "Create group"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewGroupDialog;
