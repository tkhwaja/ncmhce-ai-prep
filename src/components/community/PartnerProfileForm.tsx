import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import {
  AGE_RANGE_OPTIONS,
  EXAM_TRACK_OPTIONS,
  FOCUS_AREA_OPTIONS,
  GENDER_OPTIONS,
  STUDY_STYLE_OPTIONS,
  TIMEZONE_OPTIONS,
  examMonthOptions,
  type StudyPartnerProfile,
} from "@/types/community";

interface Props {
  profile: StudyPartnerProfile | null;
  onSaved: () => void;
}

const NONE = "__none__";

const PartnerProfileForm = ({ profile, onSaved }: Props) => {
  const { user, profile: accountProfile } = useAuth();
  const { toast } = useToast();
  const [saving, setSaving] = useState(false);

  const [isListed, setIsListed] = useState(profile?.is_listed ?? false);
  const [displayName, setDisplayName] = useState(profile?.display_name ?? "");
  const [blurb, setBlurb] = useState(profile?.blurb ?? "");
  const [examTrack, setExamTrack] = useState(profile?.exam_track ?? "ncmhce");
  const [examMonth, setExamMonth] = useState(profile?.target_exam_month ?? NONE);
  const [gender, setGender] = useState(profile?.gender ?? NONE);
  const [ageRange, setAgeRange] = useState(profile?.age_range ?? NONE);
  const [timezone, setTimezone] = useState(profile?.timezone ?? NONE);
  const [studyStyles, setStudyStyles] = useState<string[]>(profile?.study_styles ?? []);
  const [focusAreas, setFocusAreas] = useState<string[]>(profile?.focus_areas ?? []);

  useEffect(() => {
    if (!profile && accountProfile?.full_name && !displayName) {
      setDisplayName(accountProfile.full_name);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accountProfile, profile]);

  const toggle = (value: string, list: string[], setList: (v: string[]) => void) => {
    setList(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
  };

  const handleSave = async () => {
    if (!user) return;
    if (isListed && !displayName.trim()) {
      toast({ title: "Add a display name", description: "Other members need something to call you.", variant: "destructive" });
      return;
    }
    setSaving(true);
    const { error } = await supabase.from("study_partner_profiles").upsert({
      user_id: user.id,
      is_listed: isListed,
      display_name: displayName.trim() || null,
      blurb: blurb.trim().slice(0, 240) || null,
      exam_track: examTrack,
      target_exam_month: examMonth === NONE ? null : examMonth,
      gender: gender === NONE ? null : gender,
      age_range: ageRange === NONE ? null : ageRange,
      timezone: timezone === NONE ? null : timezone,
      study_styles: studyStyles,
      focus_areas: focusAreas,
    });
    setSaving(false);
    if (error) {
      toast({ title: "Could not save", description: error.message, variant: "destructive" });
      return;
    }
    toast({
      title: isListed ? "You're listed" : "Listing saved",
      description: isListed
        ? "Members can now find you in Study Partners."
        : "You're hidden from the directory.",
    });
    onSaved();
  };

  const TagRow = ({
    label,
    options,
    selected,
    setSelected,
  }: {
    label: string;
    options: readonly string[];
    selected: string[];
    setSelected: (v: string[]) => void;
  }) => (
    <div className="space-y-2">
      <Label>{label}</Label>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o}
            type="button"
            onClick={() => toggle(o, selected, setSelected)}
            className={cn(
              "rounded-full border px-3 py-1 text-xs transition-colors",
              selected.includes(o)
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-muted text-muted-foreground hover:text-foreground"
            )}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <Card className="card-elevated">
      <CardHeader className="pb-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <CardTitle className="text-base">Your study partner listing</CardTitle>
          <div className="flex items-center gap-2">
            <Switch id="listed" checked={isListed} onCheckedChange={setIsListed} />
            <Label htmlFor="listed" className="text-sm">
              Looking for a study partner
            </Label>
            {profile?.is_listed && <Badge variant="secondary">Listed</Badge>}
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          Everything here is optional except a display name. Nothing is shared until you turn
          listing on, and your email is never shown.
        </p>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="displayName">Display name</Label>
            <Input
              id="displayName"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="First name or nickname"
              maxLength={60}
            />
          </div>
          <div className="space-y-2">
            <Label>Exam track</Label>
            <Select value={examTrack} onValueChange={setExamTrack}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                {EXAM_TRACK_OPTIONS.map((t) => (
                  <SelectItem key={t.value} value={t.value}>{t.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="blurb">What you're looking for</Label>
          <Textarea
            id="blurb"
            value={blurb}
            onChange={(e) => setBlurb(e.target.value.slice(0, 240))}
            rows={3}
            placeholder="e.g. Testing in October, want a weekly partner to run through case narratives and talk through diagnosis reasoning."
          />
          <p className="text-right text-xs text-muted-foreground">{blurb.length}/240</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-2">
            <Label>Target exam month</Label>
            <Select value={examMonth} onValueChange={setExamMonth}>
              <SelectTrigger><SelectValue placeholder="Not sure yet" /></SelectTrigger>
              <SelectContent>
                <SelectItem value={NONE}>Not sure yet</SelectItem>
                {examMonthOptions().map((m) => (
                  <SelectItem key={m.value} value={m.value}>{m.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Gender (optional)</Label>
            <Select value={gender} onValueChange={setGender}>
              <SelectTrigger><SelectValue placeholder="Prefer not to say" /></SelectTrigger>
              <SelectContent>
                <SelectItem value={NONE}>Not shown</SelectItem>
                {GENDER_OPTIONS.map((g) => (
                  <SelectItem key={g} value={g}>{g}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Age range (optional)</Label>
            <Select value={ageRange} onValueChange={setAgeRange}>
              <SelectTrigger><SelectValue placeholder="Not shown" /></SelectTrigger>
              <SelectContent>
                <SelectItem value={NONE}>Not shown</SelectItem>
                {AGE_RANGE_OPTIONS.map((a) => (
                  <SelectItem key={a} value={a}>{a}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Time zone</Label>
            <Select value={timezone} onValueChange={setTimezone}>
              <SelectTrigger><SelectValue placeholder="Not shown" /></SelectTrigger>
              <SelectContent>
                <SelectItem value={NONE}>Not shown</SelectItem>
                {TIMEZONE_OPTIONS.map((t) => (
                  <SelectItem key={t} value={t}>{t}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <TagRow label="Study style" options={STUDY_STYLE_OPTIONS} selected={studyStyles} setSelected={setStudyStyles} />
        <TagRow label="Focus areas" options={FOCUS_AREA_OPTIONS} selected={focusAreas} setSelected={setFocusAreas} />

        <Button onClick={handleSave} disabled={saving}>
          {saving ? "Saving..." : "Save listing"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default PartnerProfileForm;
