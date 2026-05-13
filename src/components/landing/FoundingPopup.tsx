import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { isFoundingOfferActive } from "@/lib/foundingOffer";

const STORAGE_KEY = "founding_popup_seen_v1";

const FoundingPopup = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!isFoundingOfferActive()) return;
    if (typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY)) return;
    const t = setTimeout(() => {
      localStorage.setItem(STORAGE_KEY, "1");
      setOpen(true);
    }, 4000);
    return () => clearTimeout(t);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">
            Founding Member Offer
          </p>
          <DialogTitle className="text-2xl">
            1 year of full access for $67
          </DialogTitle>
          <DialogDescription className="text-base pt-2">
            We're opening early access to a small group of founding members at a special one-time
            rate before public pricing launches. Standard pricing is $79/month — yours is{" "}
            <span className="font-semibold text-foreground">$67 once for a full year</span>.
          </DialogDescription>
        </DialogHeader>
        <ul className="text-sm space-y-1.5 text-muted-foreground border-l-2 border-primary/40 pl-3 my-2">
          <li>• Full access to every clinical case and practice exam</li>
          <li>• DSM-5-TR library, flashcards, analytics</li>
          <li>• Lock in pricing before the public launch</li>
        </ul>
        <p className="text-xs text-muted-foreground">Available through May 31. Limited spots.</p>
        <DialogFooter className="sm:justify-between gap-2">
          <Button variant="ghost" onClick={() => setOpen(false)}>
            Maybe later
          </Button>
          <Button onClick={() => { setOpen(false); navigate("/founding"); }}>
            Claim founding access →
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default FoundingPopup;
