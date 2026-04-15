import { useState } from "react";
import { Mail } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface WaitlistFormProps {
  variant?: "default" | "large";
}

const WaitlistForm = ({ variant = "default" }: WaitlistFormProps) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      const { error: dbError } = await supabase
        .from("waitlist_signups")
        .insert({ email: email.toLowerCase().trim() });

      if (dbError) {
        if (dbError.code === "23505") {
          // Already signed up
          setSubmitted(true);
        } else {
          setError("Something went wrong. Please try again.");
          console.error("Waitlist signup error:", dbError);
        }
      } else {
        setSubmitted(true);
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex items-center gap-3 rounded-xl border border-primary/20 bg-primary/5 px-5 py-4">
        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-lg">✓</div>
        <div>
          <p className="text-sm font-semibold text-foreground">You're on the list!</p>
          <p className="text-xs text-muted-foreground">We'll keep you posted on launch updates.</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
      <div className="relative flex-1">
        <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); setError(""); }}
          className={`w-full rounded-lg border bg-muted/30 pl-9 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all ${
            error ? "border-destructive" : "border-border"
          }`}
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors whitespace-nowrap glow-primary-sm disabled:opacity-50"
      >
        {loading ? "Joining..." : "Join the Waitlist"}
      </button>
      {error && <p className="text-xs text-destructive sm:col-span-2">{error}</p>}
    </form>
  );
};

export default WaitlistForm;
