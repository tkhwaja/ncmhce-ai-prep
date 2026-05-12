import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export const InlineBackToTop = () => (
  <Button
    variant="outline"
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  >
    <ArrowUp className="mr-2 h-4 w-4" /> Back to top
  </Button>
);

export const FloatingBackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setShow(window.scrollY > 600);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed bottom-6 right-6 z-40 h-11 w-11 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 transition-all duration-200 flex items-center justify-center hover:bg-primary/90",
        show ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-2 pointer-events-none",
      )}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
};
