import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { Save, Target, TrendingUp, Layers, Calendar, BarChart3, CalendarCheck, KeyRound, Trash2, CreditCard, XCircle } from "lucide-react";
import { useSubscription } from "@/hooks/useSubscription";
import { useExamTrack } from "@/contexts/ExamTrackContext";
import { formatPrice, currentPriceId } from "@/config/exam-tracks";
import { getStripeEnvironment } from "@/lib/stripe";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Profile = () => {
  const { user, profile, refreshProfile, signOut } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const { track, config } = useExamTrack();
  const [fullName, setFullName] = useState("");
  const [bio, setBio] = useState("");
  const [studyHours, setStudyHours] = useState(0);
  const [targetExamDate, setTargetExamDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [cancelOpen, setCancelOpen] = useState(false);
  const [cancelReason, setCancelReason] = useState("");
  const [cancelDetails, setCancelDetails] = useState("");
  const [cancelSubmitting, setCancelSubmitting] = useState(false);
  const [portalLoading, setPortalLoading] = useState(false);
  const sub = useSubscription();

  // Stats
  const [simCount, setSimCount] = useState(0);
  const [avgScore, setAvgScore] = useState(0);
  const [flashcardsMastered, setFlashcardsMastered] = useState(0);
  const [daysSinceSignup, setDaysSinceSignup] = useState(0);

  useEffect(() => {
    if (profile) {
      setFullName(profile.full_name || "");
      setBio(profile.bio || "");
      setStudyHours(profile.study_hours_per_week || 0);
      setTargetExamDate(profile.target_exam_date || "");
    }
  }, [profile]);

  useEffect(() => {
    if (!user) return;
    const fetchStats = async () => {
      const { data: attempts } = await supabase
        .from("narrative_attempts")
        .select("total_score, completed_at")
        .eq("user_id", user.id)
        .eq("exam_track", track)
        .not("completed_at", "is", null);

      if (attempts) {
        setSimCount(attempts.length);
        const scores = attempts.filter(a => a.total_score !== null).map(a => a.total_score as number);
        setAvgScore(scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0);
      }

      const { count } = await supabase
        .from("flashcard_progress")
        .select("*", { count: "exact", head: true })
        .eq("user_id", user.id)
        .eq("exam_track", track)
        .eq("status", "mastered");
      setFlashcardsMastered(count || 0);

      if (user.created_at) {
        const days = Math.floor((Date.now() - new Date(user.created_at).getTime()) / 86400000);
        setDaysSinceSignup(Math.max(1, days));
      }
    };
    fetchStats();
  }, [user, track]);

  const handleSave = async () => {
    if (!profile) return;
    setLoading(true);
    const { error } = await supabase
      .from("profiles")
      .update({
        full_name: fullName,
        bio: bio.slice(0, 200),
        study_hours_per_week: studyHours,
        target_exam_date: targetExamDate || null,
      })
      .eq("id", profile.id);
    setLoading(false);
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      await refreshProfile();
      toast({ title: "Profile updated" });
    }
  };

  const handleResetPassword = async () => {
    if (!user?.email) return;
    const { error } = await supabase.auth.resetPasswordForEmail(user.email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Password reset email sent", description: "Check your inbox." });
    }
  };

  const handleDeleteAccount = async () => {
    setDeleteConfirmOpen(false);
    try {
      const { error } = await supabase.functions.invoke("delete-account");
      if (error) throw error;
      toast({ title: "Account deleted", description: "Your account and all related data have been removed." });
      await signOut();
      navigate("/");
    } catch (e: any) {
      toast({
        title: "Could not delete account",
        description: e?.message || "Please try again or contact support.",
        variant: "destructive",
      });
    }
  };

  const handleManageSubscription = async () => {
    setPortalLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("create-portal-session", {
        body: { returnUrl: `${window.location.origin}/profile`, environment: getStripeEnvironment() },
      });
      if (error || !data?.url) throw new Error(error?.message || "Could not open billing portal");
      window.open(data.url, "_blank");
    } catch (e: any) {
      toast({ title: "Error", description: e.message || "Failed to open billing portal", variant: "destructive" });
    } finally {
      setPortalLoading(false);
    }
  };

  const handleSubmitCancellation = async () => {
    if (!cancelReason) {
      toast({ title: "Please choose a reason", variant: "destructive" });
      return;
    }
    setCancelSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke("submit-cancellation-feedback", {
        body: { reason: cancelReason, details: cancelDetails, environment: getStripeEnvironment() },
      });
      if (error) throw new Error(error.message);

      const accessUntil: string | null = data?.accessUntil || null;
      const hadStripeSub: boolean = !!data?.hadStripeSub;
      const stripeCanceled: boolean = !!data?.stripeCanceled;
      const stripeCancelError: string | null = data?.stripeCancelError || null;

      if (hadStripeSub && stripeCanceled) {
        toast({
          title: "Subscription canceled",
          description: accessUntil
            ? `You'll keep access until ${new Date(accessUntil).toLocaleDateString()}.`
            : "You'll keep access until the end of your current billing period.",
        });
      } else if (hadStripeSub && stripeCancelError) {
        toast({
          title: "Feedback received, but cancellation failed",
          description: "Please use Manage Billing to cancel directly, or contact support.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Feedback submitted",
          description: "Thank you. Our team will follow up shortly.",
        });
      }

      setCancelOpen(false);
      setCancelReason("");
      setCancelDetails("");
      await sub.refresh();
    } catch (e: any) {
      toast({ title: "Error", description: e.message || "Failed to submit feedback", variant: "destructive" });
    } finally {
      setCancelSubmitting(false);
    }
  };

  // Determine subscription display info for the active exam track
  const trackSub = sub.trackStatus(track);
  const hasAccess = sub.hasAccessTo(track);
  const hasStripeSub = !!trackSub.status && trackSub.status !== "none";
  const isFounding = !hasStripeSub && hasAccess && track === "ncmhce" && (profile?.payment_status === "paid" || !!profile?.access_expires_at);
  const accessUntil = trackSub.currentPeriodEnd || profile?.access_expires_at || null;

  const initials = (fullName || "?").split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2);

  const stats = [
    { label: "Simulations", value: simCount, icon: Target },
    { label: "Avg Score", value: avgScore ? `${avgScore}%` : "—", icon: TrendingUp },
    { label: "Cards Mastered", value: flashcardsMastered, icon: Layers },
    { label: "Days Active", value: daysSinceSignup, icon: Calendar },
  ];

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-foreground">Profile</h1>

      {/* Avatar & Name */}
      <div className="flex items-center gap-4">
        <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xl font-bold">
          {initials}
        </div>
        <div>
          <p className="text-lg font-semibold text-foreground">{fullName || "Your Name"}</p>
          <p className="text-sm text-muted-foreground">{user?.email}</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {stats.map((s) => (
          <Card key={s.label} className="card-elevated">
            <CardContent className="p-3 text-center">
              <s.icon className="h-5 w-5 text-primary mx-auto mb-1" />
              <p className="text-lg font-bold text-foreground">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Links */}
      <div className="flex gap-3">
        <Button variant="outline" size="sm" onClick={() => navigate("/study-plan")}>
          <CalendarCheck className="mr-2 h-4 w-4" /> View Study Plan
        </Button>
        <Button variant="outline" size="sm" onClick={() => navigate("/analytics")}>
          <BarChart3 className="mr-2 h-4 w-4" /> View Analytics
        </Button>
      </div>

      {/* Edit Form */}
      <Card className="card-elevated">
        <CardHeader>
          <CardTitle className="text-base">Edit Profile</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Full Name</Label>
            <Input value={fullName} onChange={(e) => setFullName(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label>Bio (200 chars max)</Label>
            <Textarea
              value={bio}
              onChange={(e) => setBio(e.target.value.slice(0, 200))}
              placeholder="Tell us about yourself..."
              rows={3}
            />
            <p className="text-xs text-muted-foreground text-right">{bio.length}/200</p>
          </div>
          <div className="space-y-2">
            <Label>Target Exam Date</Label>
            <Input type="date" value={targetExamDate} onChange={(e) => setTargetExamDate(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label>Study Hours Per Week</Label>
            <Input type="number" min={0} max={168} value={studyHours} onChange={(e) => setStudyHours(Number(e.target.value))} />
          </div>
          <Button onClick={handleSave} disabled={loading}>
            <Save className="mr-2 h-4 w-4" />
            {loading ? "Saving..." : "Save Changes"}
          </Button>
        </CardContent>
      </Card>

      {/* Subscription */}
      <Card className="card-elevated">
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <CreditCard className="h-4 w-4 text-primary" /> Subscription
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {sub.loading ? (
            <p className="text-sm text-muted-foreground">Loading subscription...</p>
          ) : hasStripeSub ? (
            <>
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div>
                  <p className="text-sm font-medium text-foreground capitalize">
                    {config.label} status: {trackSub.status}{trackSub.cancelAtPeriodEnd ? " (cancels at period end)" : ""}
                  </p>
                  {accessUntil && (
                    <p className="text-xs text-muted-foreground">
                      {trackSub.cancelAtPeriodEnd || trackSub.status === "canceled" ? "Access until " : "Renews "}
                      {new Date(accessUntil).toLocaleDateString()}
                    </p>
                  )}
                </div>
                <Button variant="outline" size="sm" onClick={handleManageSubscription} disabled={portalLoading}>
                  {portalLoading ? "Opening..." : "Manage Billing"}
                </Button>
              </div>
              {!trackSub.cancelAtPeriodEnd && trackSub.status !== "canceled" && (
                <div className="border-t border-border pt-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-foreground">Cancel {config.label} Subscription</p>
                    <p className="text-xs text-muted-foreground">We'd love your feedback before you go</p>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => setCancelOpen(true)}>
                    <XCircle className="mr-2 h-4 w-4" /> Cancel
                  </Button>
                </div>
              )}
            </>
          ) : isFounding ? (
            <>
              <div>
                <p className="text-sm font-medium text-foreground">Founding Member — Early Access</p>
                <p className="text-xs text-muted-foreground">
                  One-time purchase.{accessUntil ? ` Access through ${new Date(accessUntil).toLocaleDateString()}.` : ""}
                </p>
              </div>
              <div className="border-t border-border pt-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground">Cancel & Request Refund</p>
                  <p className="text-xs text-muted-foreground">Tell us why — our team will follow up</p>
                </div>
                <Button variant="outline" size="sm" onClick={() => setCancelOpen(true)}>
                  <XCircle className="mr-2 h-4 w-4" /> Cancel
                </Button>
              </div>
            </>
          ) : (
            (() => {
              const currentPriceCents = currentPriceId(track) === config.founderPriceId && config.founderMonthlyPriceCents
                ? config.founderMonthlyPriceCents
                : config.monthlyPriceCents;
              return (
                <div className="rounded-lg border border-primary/30 bg-primary/5 p-4 space-y-3">
                  <div>
                    <p className="text-sm font-semibold text-foreground">You're on the Free plan</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Unlock all {track === "nce" ? "questions" : "narratives"}, full-length practice exams, flashcards, AI coaching, and your
                      personalized study plan for {formatPrice(currentPriceCents)}/month. Cancel anytime.
                    </p>
                  </div>
                  {config.subscriptionsOpen ? (
                    <Button onClick={() => navigate(`/checkout?track=${track}`)} className="w-full sm:w-auto">
                      <CreditCard className="mr-2 h-4 w-4" /> Subscribe — {formatPrice(currentPriceCents)}/month
                    </Button>
                  ) : (
                    <Button className="w-full sm:w-auto" disabled>
                      {config.label} subscriptions coming soon
                    </Button>
                  )}
                </div>
              );
            })()
          )}
        </CardContent>
      </Card>

      {/* Cancellation Feedback Dialog */}
      <Dialog open={cancelOpen} onOpenChange={setCancelOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Before you cancel</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-muted-foreground">
            We're sorry to see you go. Could you share why you're canceling? Your feedback helps us improve.
          </p>
          <div className="space-y-3 mt-2">
            <div className="space-y-2">
              <Label>Reason</Label>
              <Select value={cancelReason} onValueChange={setCancelReason}>
                <SelectTrigger><SelectValue placeholder="Select a reason" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="Too expensive">Too expensive</SelectItem>
                  <SelectItem value="Not using it enough">Not using it enough</SelectItem>
                  <SelectItem value="Missing features I need">Missing features I need</SelectItem>
                  <SelectItem value="Already passed the exam">Already passed the exam</SelectItem>
                  <SelectItem value="Found a better alternative">Found a better alternative</SelectItem>
                  <SelectItem value="Technical issues">Technical issues</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Additional details (optional)</Label>
              <Textarea
                value={cancelDetails}
                onChange={(e) => setCancelDetails(e.target.value.slice(0, 2000))}
                placeholder="Anything else we should know?"
                rows={4}
              />
            </div>
          </div>
          <div className="flex gap-3 justify-end mt-4">
            <Button variant="outline" onClick={() => setCancelOpen(false)} disabled={cancelSubmitting}>
              Keep Subscription
            </Button>
            <Button variant="destructive" onClick={handleSubmitCancellation} disabled={cancelSubmitting || !cancelReason}>
              {cancelSubmitting ? "Submitting..." : "Submit & Cancel"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Account Settings */}
      <Card className="card-elevated">
        <CardHeader>
          <CardTitle className="text-base">Account Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-foreground">Change Password</p>
              <p className="text-xs text-muted-foreground">Send a password reset email</p>
            </div>
            <Button variant="outline" size="sm" onClick={handleResetPassword}>
              <KeyRound className="mr-2 h-4 w-4" /> Reset Password
            </Button>
          </div>

          <div className="border-t border-border pt-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-destructive">Delete Account</p>
              <p className="text-xs text-muted-foreground">Permanently delete your account and data</p>
            </div>
            <Dialog open={deleteConfirmOpen} onOpenChange={setDeleteConfirmOpen}>
              <DialogTrigger asChild>
                <Button variant="destructive" size="sm">
                  <Trash2 className="mr-2 h-4 w-4" /> Delete
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Delete Account?</DialogTitle>
                </DialogHeader>
                <p className="text-sm text-muted-foreground">
                  This action cannot be undone. All your data will be permanently deleted.
                </p>
                <div className="flex gap-3 justify-end mt-4">
                  <Button variant="outline" onClick={() => setDeleteConfirmOpen(false)}>Cancel</Button>
                  <Button variant="destructive" onClick={handleDeleteAccount}>Delete My Account</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
