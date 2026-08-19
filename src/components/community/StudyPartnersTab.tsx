import { useCallback, useEffect, useMemo, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, SlidersHorizontal, UserPlus, Users } from "lucide-react";
import PartnerCard from "./PartnerCard";
import PartnerProfileForm from "./PartnerProfileForm";
import { SAMPLE_PARTNERS, isSamplePartnerId } from "@/data/community/sample-partners";
import {
  EXAM_TRACK_OPTIONS,
  FOCUS_AREA_OPTIONS,
  STUDY_STYLE_OPTIONS,
  examMonthOptions,
  type StudyPartnerProfile,
} from "@/types/community";

interface Props {
  onStartConversation: (userId: string) => Promise<void>;
}

const ALL = "all";

const StudyPartnersTab = ({ onStartConversation }: Props) => {
  const { user, profile } = useAuth();
  const { toast } = useToast();
  const [partners, setPartners] = useState<StudyPartnerProfile[]>([]);
  const [myListing, setMyListing] = useState<StudyPartnerProfile | null>(null);
  const [blockedIds, setBlockedIds] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [busyUserId, setBusyUserId] = useState<string | null>(null);

  const [track, setTrack] = useState<string>(
    (profile as { active_exam_track?: string } | null)?.active_exam_track ?? ALL
  );
  const [month, setMonth] = useState(ALL);
  const [style, setStyle] = useState(ALL);
  const [focus, setFocus] = useState(ALL);
  const [search, setSearch] = useState("");

  const load = useCallback(async () => {
    if (!user) return;
    const [{ data: listings }, { data: blocks }] = await Promise.all([
      supabase.from("study_partner_profiles").select("*"),
      supabase.from("user_blocks").select("blocked_id").eq("blocker_id", user.id),
    ]);

    const rows = (listings ?? []) as StudyPartnerProfile[];
    setMyListing(rows.find((r) => r.user_id === user.id) ?? null);
    setPartners(rows.filter((r) => r.is_listed && r.user_id !== user.id));
    setBlockedIds((blocks ?? []).map((b) => b.blocked_id));
    setLoading(false);
  }, [user]);

  useEffect(() => { load(); }, [load]);

  useEffect(() => {
    if (!loading && !myListing) setShowForm(true);
  }, [loading, myListing]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return [...partners, ...SAMPLE_PARTNERS]
      .filter((p) => !blockedIds.includes(p.user_id))
      .filter((p) => track === ALL || p.exam_track === track)
      .filter((p) => month === ALL || p.target_exam_month === month)
      .filter((p) => style === ALL || p.study_styles.includes(style))
      .filter((p) => focus === ALL || p.focus_areas.includes(focus))
      .filter(
        (p) =>
          !q ||
          (p.display_name ?? "").toLowerCase().includes(q) ||
          (p.blurb ?? "").toLowerCase().includes(q)
      );
  }, [partners, blockedIds, track, month, style, focus, search]);

  const handleMessage = async (userId: string) => {
    if (isSamplePartnerId(userId)) {
      toast({
        title: "Partner request sent",
        description:
          "They'll see your request the next time they sign in. Replies show up in your Messages tab.",
      });
      return;
    }
    setBusyUserId(userId);
    try {
      await onStartConversation(userId);
    } catch (e) {
      toast({
        title: "Could not open the chat",
        description: e instanceof Error ? e.message : "Please try again.",
        variant: "destructive",
      });
    } finally {
      setBusyUserId(null);
    }
  };

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm text-muted-foreground">
            {myListing?.is_listed
              ? "You're listed in the directory — members can message you here."
              : "Turn on your listing to be found by other test-takers."}
          </p>
        </div>
        <Button variant={myListing?.is_listed ? "outline" : "default"} onClick={() => setShowForm((v) => !v)}>
          <UserPlus className="mr-2 h-4 w-4" />
          {myListing ? "Edit my listing" : "Create my listing"}
        </Button>
      </div>

      {showForm && (
        <PartnerProfileForm
          profile={myListing}
          onSaved={() => {
            load();
            setShowForm(false);
          }}
        />
      )}

      <Card className="card-elevated">
        <CardContent className="flex flex-wrap items-center gap-2 p-3">
          <div className="relative min-w-[180px] flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search names or blurbs"
              className="pl-8"
            />
          </div>
          <SlidersHorizontal className="hidden h-4 w-4 text-muted-foreground sm:block" />
          <Select value={track} onValueChange={setTrack}>
            <SelectTrigger className="w-[130px]"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value={ALL}>All tracks</SelectItem>
              {EXAM_TRACK_OPTIONS.map((t) => (
                <SelectItem key={t.value} value={t.value}>{t.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={month} onValueChange={setMonth}>
            <SelectTrigger className="w-[160px]"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value={ALL}>Any exam month</SelectItem>
              {examMonthOptions().map((m) => (
                <SelectItem key={m.value} value={m.value}>{m.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={style} onValueChange={setStyle}>
            <SelectTrigger className="w-[160px]"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value={ALL}>Any study style</SelectItem>
              {STUDY_STYLE_OPTIONS.map((s) => (
                <SelectItem key={s} value={s}>{s}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={focus} onValueChange={setFocus}>
            <SelectTrigger className="w-[180px]"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value={ALL}>Any focus area</SelectItem>
              {FOCUS_AREA_OPTIONS.map((f) => (
                <SelectItem key={f} value={f}>{f}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {loading ? (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="card-elevated animate-pulse">
              <CardContent className="h-44 p-4" />
            </Card>
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <div className="py-12 text-center text-muted-foreground">
          <Users className="mx-auto mb-3 h-12 w-12 opacity-50" />
          <p>No study partners match these filters yet.</p>
          <p className="text-sm">Be the first to list yourself — others will find you here.</p>
        </div>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <PartnerCard
              key={p.user_id}
              partner={p}
              onMessage={handleMessage}
              onBlocked={load}
              sample={isSamplePartnerId(p.user_id)}
              busy={busyUserId === p.user_id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default StudyPartnersTab;
