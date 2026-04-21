import { createContext, useContext, useState, useRef, useEffect, useCallback, ReactNode } from "react";

interface PomodoroState {
  workMin: number;
  breakMin: number;
  secondsLeft: number;
  isRunning: boolean;
  isBreak: boolean;
  completedToday: number;
  setWorkMin: (v: number) => void;
  setBreakMin: (v: number) => void;
  toggle: () => void;
  reset: () => void;
}

const PomodoroContext = createContext<PomodoroState | null>(null);

export const usPomodoro = () => {
  const ctx = useContext(PomodoroContext);
  if (!ctx) throw new Error("usPomodoro must be inside PomodoroProvider");
  return ctx;
};

export const PomodoroProvider = ({ children }: { children: ReactNode }) => {
  const [workMin, setWorkMin] = useState(25);
  const [breakMin, setBreakMin] = useState(5);
  const [secondsLeft, setSecondsLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [completedToday, setCompletedToday] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isRunning && secondsLeft > 0) {
      intervalRef.current = setInterval(() => setSecondsLeft((s) => s - 1), 1000);
    } else if (secondsLeft === 0) {
      if (!isBreak) {
        setCompletedToday((c) => c + 1);
        setIsBreak(true);
        setSecondsLeft(breakMin * 60);
      } else {
        setIsBreak(false);
        setSecondsLeft(workMin * 60);
      }
      setIsRunning(false);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning, secondsLeft, isBreak, workMin, breakMin]);

  const toggle = useCallback(() => setIsRunning((r) => !r), []);
  const reset = useCallback(() => {
    setIsRunning(false);
    setIsBreak(false);
    setSecondsLeft(workMin * 60);
  }, [workMin]);

  const handleSetWorkMin = useCallback(
    (v: number) => {
      setWorkMin(v);
      if (!isRunning && !isBreak) setSecondsLeft(v * 60);
    },
    [isRunning, isBreak]
  );

  const handleSetBreakMin = useCallback(
    (v: number) => {
      setBreakMin(v);
      if (!isRunning && isBreak) setSecondsLeft(v * 60);
    },
    [isRunning, isBreak]
  );

  return (
    <PomodoroContext.Provider
      value={{
        workMin,
        breakMin,
        secondsLeft,
        isRunning,
        isBreak,
        completedToday,
        setWorkMin: handleSetWorkMin,
        setBreakMin: handleSetBreakMin,
        toggle,
        reset,
      }}
    >
      {children}
    </PomodoroContext.Provider>
  );
};
