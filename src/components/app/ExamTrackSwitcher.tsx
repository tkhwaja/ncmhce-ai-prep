import { Check, ChevronDown, GraduationCap } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useExamTrack } from "@/contexts/ExamTrackContext";

/**
 * Lets a user move between exam tracks. Renders nothing when only one track is
 * available, so the header is unchanged for everyone until NCE launches.
 */
const ExamTrackSwitcher = () => {
  const { track, config, tracks, multiTrack, setTrack } = useExamTrack();

  if (!multiTrack) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-1.5" aria-label="Switch exam">
          <GraduationCap className="h-4 w-4" />
          <span className="text-xs font-semibold">{config.label}</span>
          <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64">
        <DropdownMenuLabel>Studying for</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {tracks.map((t) => (
          <DropdownMenuItem
            key={t.id}
            onClick={() => setTrack(t.id)}
            className="flex items-start gap-2 py-2"
          >
            <Check
              className={`mt-0.5 h-4 w-4 flex-shrink-0 ${
                t.id === track ? "text-primary" : "opacity-0"
              }`}
            />
            <span className="flex flex-col">
              <span className="text-sm font-medium">
                {t.label}
                {!t.contentReady && (
                  <span className="ml-2 rounded-full bg-muted px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                    In progress
                  </span>
                )}
              </span>
              <span className="text-xs text-muted-foreground">{t.tagline}</span>
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ExamTrackSwitcher;
