import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { LogIn } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const next = searchParams.get("next");
  const safeNext = next && next.startsWith("/") ? next : null;
  const { toast } = useToast();
  const { user, loading: authLoading } = useAuth();

  // If user is already signed in (e.g. just clicked email confirmation link), bounce them through.
  useEffect(() => {
    if (!authLoading && user) {
      navigate(safeNext ?? "/dashboard?returning=true", { replace: true });
    }
  }, [authLoading, user, safeNext, navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Clear any existing session first so we never end up on a stale account
    await supabase.auth.signOut();
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error || !data.session) {
      toast({
        title: "Login failed",
        description: error?.message ?? "Invalid email or password.",
        variant: "destructive",
      });
      return;
    }
    navigate(next && next.startsWith("/") ? next : "/dashboard?returning=true");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <Helmet>
        <title>Log In | The Exam Path</title>
        <meta name="description" content="Sign in to The Exam Path to access NCMHCE practice narratives, timed practice exams, flashcards, and your personalized study plan." />
        <link rel="canonical" href="https://theexampath.com/login" />
        <meta property="og:title" content="Log In | The Exam Path" />
        <meta property="og:url" content="https://theexampath.com/login" />
      </Helmet>
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="text-2xl font-bold text-foreground tracking-tight">
            The Exam<span className="text-primary"> Path</span>
          </Link>
          <p className="text-muted-foreground mt-2">Sign in to your account</p>
        </div>

        <div className="card-elevated p-8">
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="text-right">
              <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                Forgot password?
              </Link>
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              <LogIn className="mr-2 h-4 w-4" />
              {loading ? "Signing in..." : "Sign In"}
            </Button>
          </form>
          <p className="text-center text-sm text-muted-foreground mt-6">
            Don't have an account?{" "}
            <Link to="/signup" className="text-primary hover:underline">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
