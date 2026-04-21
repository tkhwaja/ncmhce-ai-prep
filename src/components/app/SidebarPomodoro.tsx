import { useState } from "react";
import { usPomodoro } from "@/contexts/PomodoroContext";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useSidebar } from "@/components/ui/sidebar";
import { Play, Pause, RotateCcw, Timer, Settings, ChevronUp } from "lucide-react";

const SidebarPomodoro = () => {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const pomo = usPomodoro();
  const [showSettings, setShowSettings] = useState(false);

  const minutes = Math.floor(pomo.secondsLeft / 60);
  const seconds = pomo.secondsLeft % 60;
  const timeStr = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  const totalSeconds = (pomo.isBreak ? pomo.breakMin : pomo.workMin) * 60;
  const progress = ((totalSeconds - pomo.secondsLeft) / totalSeconds) * 100;

  if (collapsed) {
    return (
      <div className="p-2 border-t border-border">
        <button
          onClick={pomo.toggle}
          className="w-full flex flex-col items-center gap-1 py-2 rounded-md hover:bg-muted transition-colors"
          title={pomo.isRunning ? "Pause" : "Start"}
        >
          <Timer className={`h-4 w-4 ${pomo.isRunning ? "text-primary animate-pulse" : "text-muted-foreground"}`} />
          <span className="text-[10px] font-mono text-foreground">{timeStr}</span>
        </button>
      </div>
    );
  }

  return (
    <div className="border-t border-border p-3 space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <Timer className={`h-3.5 w-3.5 ${pomo.isRunning ? "text-primary" : "text-muted-foreground"}`} />
          <span className="text-xs font-semibold text-foreground">Pomodoro</span>
        </div>
        <Badge variant={pomo.isBreak ? "secondary" : "default"} className="text-[10px] h-4 px-1.5">
          {pomo.isBreak ? "Break" : "Focus"}
        </Badge>
      </div>

      {/* Timer + progress bar */}
      <div className="space-y-1">
        <div className="h-1 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-1000"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-lg font-mono font-bold text-foreground">{timeStr}</span>
          <span className="text-[10px] text-muted-foreground">{pomo.completedToday} done</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex gap-1.5">
        <Button size="sm" variant={pomo.isRunning ? "secondary" : "default"} className="flex-1 h-7 text-xs" onClick={pomo.toggle}>
          {pomo.isRunning ? <Pause className="h-3 w-3 mr-1" /> : <Play className="h-3 w-3 mr-1" />}
          {pomo.isRunning ? "Pause" : "Start"}
        </Button>
        <Button size="sm" variant="outline" className="h-7 w-7 p-0" onClick={pomo.reset}>
          <RotateCcw className="h-3 w-3" />
        </Button>
        <Button size="sm" variant="ghost" className="h-7 w-7 p-0" onClick={() => setShowSettings(!showSettings)}>
          <Settings className="h-3 w-3" />
        </Button>
      </div>

      {showSettings && (
        <div className="space-y-2 pt-1">
          <div>
            <label className="text-[10px] text-muted-foreground">Work: {pomo.workMin}m</label>
            <Slider min={15} max={50} step={5} value={[pomo.workMin]} onValueChange={([v]) => pomo.setWorkMin(v)} className="mt-1" />
          </div>
          <div>
            <label className="text-[10px] text-muted-foreground">Break: {pomo.breakMin}m</label>
            <Slider min={3} max={15} step={1} value={[pomo.breakMin]} onValueChange={([v]) => pomo.setBreakMin(v)} className="mt-1" />
          </div>
        </div>
      )}
    </div>
  );
};

export default SidebarPomodoro;
