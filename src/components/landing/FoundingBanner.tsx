import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { isFreePromoActive } from "@/lib/freePromo";

const STORAGE_KEY = "free_promo_banner_dismissed_v1";

const FoundingBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!isFreePromoActive()) return;
    if (typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY)) return;
    setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <div className="relative w-full bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-2.5 pr-10 text-center text-sm font-medium">
        🎉 <span className="font-semibold">Free for everyone until May 31</span> — full access to every case, exam, and study tool, no payment required.{" "}
        <Link to="/signup" className="underline underline-offset-2 font-semibold">
          create your free account →
        </Link>
      </div>
      <button
        type="button"
        aria-label="Dismiss"
        onClick={() => {
          localStorage.setItem(STORAGE_KEY, "1");
          setVisible(false);
        }}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded hover:bg-primary-foreground/10"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};

export default FoundingBanner;
