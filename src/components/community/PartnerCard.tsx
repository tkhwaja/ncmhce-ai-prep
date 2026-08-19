import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { CalendarDays, Clock, MessageSquare } from "lucide-react";
import BlockReportMenu from "./BlockReportMenu";
import { formatExamMonth, type StudyPartnerProfile } from "@/types/community";

interface Props {
  partner: StudyPartnerProfile;
  onMessage: (userId: string) => void;
  onBlocked: () => void;
  busy?: boolean;
  sample?: boolean;
}

const trackLabel = (track: string) => (track === "nce" ? "NCE" : "NCMHCE");

const PartnerCard = ({ partner, onMessage, onBlocked, busy, sample }: Props) => {
  const name = partner.display_name || "Member";
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <Card className="card-elevated flex h-full flex-col transition-all hover:border-primary/30">
      <CardContent className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-start gap-3">
          <Avatar className="h-10 w-10">
            <AvatarFallback className="bg-primary/10 text-primary">{initials}</AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1">
            <p className="truncate font-semibold text-foreground">{name}</p>
            <div className="mt-1 flex flex-wrap items-center gap-1.5">
              <Badge variant="secondary">{trackLabel(partner.exam_track)}</Badge>
              {partner.target_exam_month && (
                <Badge variant="outline" className="gap-1">
                  <CalendarDays className="h-3 w-3" />
                  {formatExamMonth(partner.target_exam_month)}
                </Badge>
              )}
              {partner.timezone && (
                <Badge variant="outline" className="gap-1">
                  <Clock className="h-3 w-3" />
                  {partner.timezone}
                </Badge>
              )}
            </div>
          </div>
            {!sample && (
            <BlockReportMenu targetUserId={partner.user_id} targetName={name} onBlocked={onBlocked} />
          )}
        </div>

        {partner.blurb && (
          <p className="text-sm text-muted-foreground">{partner.blurb}</p>
        )}

        {(partner.gender || partner.age_range) && (
          <p className="text-xs text-muted-foreground">
            {[partner.gender, partner.age_range].filter(Boolean).join(" · ")}
          </p>
        )}

        {partner.study_styles.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {partner.study_styles.map((s) => (
              <span key={s} className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                {s}
              </span>
            ))}
          </div>
        )}

        {partner.focus_areas.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {partner.focus_areas.map((f) => (
              <span key={f} className="rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary">
                {f}
              </span>
            ))}
          </div>
        )}

        <Button
          className="mt-auto w-full"
          onClick={() => onMessage(partner.user_id)}
          disabled={busy}
        >
          <MessageSquare className="mr-2 h-4 w-4" />
          Message
        </Button>
      </CardContent>
    </Card>
  );
};

export default PartnerCard;
