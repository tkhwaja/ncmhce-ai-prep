import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { posthog } from "@/lib/posthog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { UserPlus, CalendarIcon, Check, X } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { MailCheck } from "lucide-react";

const schema = z
  .object({
    fullName: z.string().min(1, "Required"),
    email: z.string().email("Invalid email"),
    password: z
      .string()
      .min(6, "At least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((d) => d.password === d.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type FormValues = z.infer<typeof schema>;

const Signup = () => {
  const [examDate, setExamDate] = useState<Date>();
  const [loading, setLoading] = useState(false);
  const [confirmSent, setConfirmSent] = useState<string | null>(null);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const next = searchParams.get("next");
  const safeNext = next && next.startsWith("/") ? next : null;
  const loginHref = safeNext ? `/login?confirm=pending&next=${encodeURIComponent(safeNext)}` : "/login?confirm=pending";
  const { toast } = useToast();
  const { user, loading: authLoading } = useAuth();

  useEffect(() => {
    if (!authLoading && user) {
      navigate(safeNext ?? "/dashboard?returning=true", { replace: true });
    }
  }, [authLoading, user, safeNext, navigate]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const password = watch("password") || "";
  const checks = [
    { label: "At least 6 characters", ok: password.length >= 6 },
  ];

  

  const onSubmit = async (values: FormValues) => {
    setLoading(true);

    // Pre-flight: detect existing accounts so we don't create duplicate signup rows
    // (which invalidate prior confirmation links).
    try {
      const { data: status } = await supabase.functions.invoke("check-signup-status", {
        body: { email: values.email },
      });
      if (status?.status === "confirmed") {
        setLoading(false);
        toast({
          title: "Account already exists",
          description: "Please log in instead — use Forgot password if needed.",
          variant: "destructive",
        });
        navigate(`/login?email=${encodeURIComponent(values.email)}`);
        return;
      }
      if (status?.status === "unconfirmed") {
        // Resend a fresh magic link instead of creating a duplicate signup row
        await fetch(
          `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/blast-confirm-reminders?mode=single&email=${encodeURIComponent(values.email)}`,
          { method: "POST", headers: { apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY } },
        ).catch(() => {});
        setLoading(false);
        setConfirmSent(values.email);
        return;
      }
    } catch {
      // If the check fails, fall through to normal signup — don't block the user
    }

    // Clear any existing session so a failed signup can never land on someone else's account
    await supabase.auth.signOut();
    const { data, error } = await supabase.auth.signUp({
      email: values.email,
      password: values.password,
      options: {
        data: { full_name: values.fullName, target_exam_date: examDate?.toISOString() },
        emailRedirectTo: `${window.location.origin}${safeNext ?? "/dashboard"}`,
      },
    });
    setLoading(false);
    if (error) {
      toast({ title: "Signup failed", description: error.message, variant: "destructive" });
      return;
    }
    // Email confirmation is required: signUp returns no session until the user clicks the link.
    // If a session is returned, treat it as immediate login (e.g., confirm disabled).
    if (data.session) {
      posthog.identify(data.session.user.id, { email: values.email, full_name: values.fullName });
      posthog.capture("email_signup", { email: values.email, source: "signup_page", confirmed: true });
      navigate(safeNext ?? "/dashboard?new=true");
      return;
    }
    if (data.user) {
      posthog.identify(data.user.id, { email: values.email, full_name: values.fullName });
      posthog.capture("email_signup", { email: values.email, source: "signup_page", confirmed: false });
      setConfirmSent(values.email);
      return;
    }
    // No session AND no user means email already exists (Supabase obfuscates).
    toast({
      title: "Account already exists",
      description: "An account with this email already exists. Please log in instead.",
      variant: "destructive",
    });
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-8">
      <Helmet>
        <title>Sign Up | The Exam Path</title>
        <meta name="description" content="Create your account to access NCMHCE clinical case narratives, full-length practice exams, flashcards, and a personalized study plan." />
        <link rel="canonical" href="https://theexampath.com/signup" />
        <meta property="og:title" content="Sign Up | The Exam Path" />
        <meta property="og:url" content="https://theexampath.com/signup" />
      </Helmet>
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="text-2xl font-bold text-foreground tracking-tight">
            The Exam<span className="text-primary"> Path</span>
          </Link>
          <p className="text-muted-foreground mt-2">Create your account</p>
        </div>

        <div className="card-elevated p-8">
          {confirmSent ? (
            <div className="text-center space-y-4 py-4">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <MailCheck className="h-7 w-7 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground">Check your email</h2>
              <p className="text-base text-muted-foreground">
                We sent a confirmation link to{" "}
                <strong className="text-foreground">{confirmSent}</strong>.
              </p>
              <p className="text-sm text-muted-foreground">
                Click the link in your inbox to activate your account — we'll log you in automatically and
                {safeNext === "/founding" ? " take you straight to checkout." : " bring you right back here."}
              </p>
              <p className="text-sm font-medium text-amber-600 bg-amber-50 dark:bg-amber-950/20 px-3 py-2 rounded-lg border border-amber-200 dark:border-amber-900">
                Not seeing it? Check your spam or junk folder — sometimes confirmation emails end up there by mistake.
              </p>
              <div className="pt-2 text-xs text-muted-foreground">
                Don't see it? Check your spam folder, or{" "}
                <button
                  type="button"
                  className="text-primary hover:underline"
                  onClick={async () => {
                    await fetch(
                      `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/blast-confirm-reminders?mode=single&email=${encodeURIComponent(confirmSent)}`,
                      { method: "POST", headers: { apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY } },
                    ).catch(() => {});
                    toast({ title: "Confirmation email resent", description: `Sent another link to ${confirmSent}.` });
                  }}
                >
                  resend the email
                </button>
                .
              </div>
            </div>
          ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input id="fullName" placeholder="Jane Smith" {...register("fullName")} />
              {errors.fullName && <p className="text-xs text-destructive">{errors.fullName.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" {...register("email")} />
              {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <PasswordInput id="password" placeholder="••••••••" {...register("password")} />
              {password && (
                <ul className="space-y-1">
                  {checks.map((c) => (
                    <li key={c.label} className="flex items-center gap-2 text-xs">
                      {c.ok ? (
                        <Check className="h-3 w-3 text-primary" />
                      ) : (
                        <X className="h-3 w-3 text-muted-foreground" />
                      )}
                      <span className={c.ok ? "text-foreground" : "text-muted-foreground"}>{c.label}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <PasswordInput id="confirmPassword" placeholder="••••••••" {...register("confirmPassword")} />
              {errors.confirmPassword && (
                <p className="text-xs text-destructive">{errors.confirmPassword.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label>Target Exam Date (optional)</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    type="button"
                    variant="outline"
                    className={cn("w-full justify-start text-left font-normal", !examDate && "text-muted-foreground")}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {examDate ? format(examDate, "PPP") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={examDate}
                    onSelect={setExamDate}
                    disabled={(date) => date < new Date()}
                    initialFocus
                    className="p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
            <Button type="submit" className="w-full" disabled={loading || !isValid}>
              <UserPlus className="mr-2 h-4 w-4" />
              {loading ? "Creating account..." : "Create Account"}
            </Button>
          </form>
          )}
          {!confirmSent && (
            <p className="text-center text-sm text-muted-foreground mt-6">
              Already have an account?{" "}
              <Link to="/login" className="text-primary hover:underline">
                Sign in
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
