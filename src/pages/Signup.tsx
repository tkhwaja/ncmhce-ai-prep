import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
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
      navigate(safeNext ?? "/dashboard?new=true");
      return;
    }
    if (data.user) {
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
              <Input id="password" type="password" placeholder="••••••••" {...register("password")} />
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
              <Input id="confirmPassword" type="password" placeholder="••••••••" {...register("confirmPassword")} />
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
          <p className="text-center text-sm text-muted-foreground mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-primary hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>

      <Dialog open={!!confirmSent} onOpenChange={(open) => { if (!open) { setConfirmSent(null); navigate(loginHref); } }}>
        <DialogContent className="sm:max-w-md text-center">
          <DialogHeader>
            <div className="mx-auto mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              <MailCheck className="h-7 w-7 text-primary" />
            </div>
            <DialogTitle className="text-2xl">Check your email</DialogTitle>
            <DialogDescription className="text-base pt-2">
              We sent a confirmation link to <strong className="text-foreground">{confirmSent}</strong>. Click it to activate your account.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-center">
            <Button onClick={() => { setConfirmSent(null); navigate(loginHref); }} className="w-full sm:w-auto">
              Got it
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Signup;
