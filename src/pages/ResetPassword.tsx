import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { KeyRound, AlertCircle, Loader2 } from "lucide-react";

type Status = "checking" | "ready" | "invalid";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<Status>("checking");
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Listen for the PASSWORD_RECOVERY event Supabase fires when it parses
    // the recovery token from the URL hash. This is the reliable signal that
    // the user arrived via a real reset email.
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "PASSWORD_RECOVERY" || (event === "SIGNED_IN" && session)) {
        setStatus("ready");
      }
    });

    // Fallback: if there's already a session (token already parsed before
    // listener attached), allow the form. Otherwise mark invalid after a
    // short delay so the listener has time to fire.
    const timer = setTimeout(async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setStatus((prev) => (prev === "ready" ? prev : session ? "ready" : "invalid"));
    }, 1500);

    return () => {
      subscription.unsubscribe();
      clearTimeout(timer);
    };
  }, []);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password.length < 6) {
      toast({ title: "Password too short", description: "Must be at least 6 characters.", variant: "destructive" });
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.updateUser({ password });
    setLoading(false);
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Password updated", description: "You can now sign in with your new password." });
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <Helmet>
        <title>Reset Password | The Exam Path</title>
        <meta name="description" content="Set a new password to continue your NCMHCE prep on The Exam Path." />
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-foreground">Set New Password</h1>
          <p className="text-muted-foreground mt-2">Enter your new password below</p>
        </div>
        <div className="card-elevated p-8">
          {status === "checking" && (
            <div className="flex items-center justify-center py-8 text-muted-foreground">
              <Loader2 className="h-5 w-5 animate-spin mr-2" />
              Verifying reset link...
            </div>
          )}

          {status === "invalid" && (
            <div className="text-center space-y-4 py-4">
              <AlertCircle className="h-10 w-10 text-destructive mx-auto" />
              <div>
                <h2 className="font-semibold text-foreground">Invalid or expired link</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  This password reset link is no longer valid. Please request a new one.
                </p>
              </div>
              <Button asChild className="w-full">
                <Link to="/login">Request a new reset link</Link>
              </Button>
            </div>
          )}

          {status === "ready" && (
            <form onSubmit={handleUpdate} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password">New Password</Label>
                <Input id="password" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                <KeyRound className="mr-2 h-4 w-4" />
                {loading ? "Updating..." : "Update Password"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
