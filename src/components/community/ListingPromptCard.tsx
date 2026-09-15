import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { UserPlus, X } from "lucide-react";

export const CREATE_LISTING_PATH = "/community?tab=partners&listing=new";

interface Props {
  /** Optional dismiss handler — the close button only renders when provided. */
  onDismiss?: () => void;
  className?: string;
}

/**
 * Invitation to join the Study Partners directory. Used on the dashboard and in
 * the empty Messages tab so members discover the directory where they already look.
 */
const ListingPromptCard = ({ onDismiss, className }: Props) => {
  const navigate = useNavigate();

  return (
    <Card className={`card-elevated border-primary/25 bg-primary/5 ${className ?? ""}`}>
      <CardContent className="flex flex-wrap items-center gap-4 p-5">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
          <UserPlus className="h-5 w-5 text-primary" />
        </div>
        <div className="min-w-[200px] flex-1">
          <p className="font-semibold text-foreground">Studying alone?</p>
          <p className="text-sm text-muted-foreground">
            Add yourself to the Study Partners directory and get matched with people sitting the
            same exam.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button onClick={() => navigate(CREATE_LISTING_PATH)}>Create my listing</Button>
          {onDismiss && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onDismiss}
              aria-label="Not now"
              className="text-muted-foreground"
            >
              Not now
              <X className="ml-1 h-3.5 w-3.5" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ListingPromptCard;
