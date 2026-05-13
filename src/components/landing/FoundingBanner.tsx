import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { isFoundingOfferActive } from "@/lib/foundingOffer";

const STORAGE_KEY = "founding_banner_dismissed_v1";

const FoundingBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!isFoundingOfferActive()) return;
    if (typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY)) return;
    setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <div className="relative w-full bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-2.5 pr-10 text-center text-sm font-medium">
        🎉 <span className="font-semibold">Founding Member offer:</span> 1 year of full access for{" "}
        <span className="font-bold">$67</span> (reg. $79/mo). Ends May 31 —{" "}
        <Link to="/founding" className="underline underline-offset-2 font-semibold">
          claim your spot →
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
