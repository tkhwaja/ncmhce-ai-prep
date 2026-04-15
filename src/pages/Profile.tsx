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
import { Save, Target, TrendingUp, Layers, Calendar, BarChart3, CalendarCheck, KeyRound, Trash2 } from "lucide-react";

const Profile = () => {
  const { user, profile, refreshProfile, signOut } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [bio, setBio] = useState("");
  const [studyHours, setStudyHours] = useState(0);
  const [targetExamDate, setTargetExamDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);

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
        .from("simulation_attempts")
        .select("total_score, completed_at")
        .eq("user_id", user.id)
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
        .eq("status", "mastered");
      setFlashcardsMastered(count || 0);

      if (user.created_at) {
        const days = Math.floor((Date.now() - new Date(user.created_at).getTime()) / 86400000);
        setDaysSinceSignup(Math.max(1, days));
      }
    };
    fetchStats();
  }, [user]);

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
    // Sign out and inform user to contact support for deletion
    toast({ title: "Account deletion requested", description: "Please contact support to complete account deletion." });
    await signOut();
    navigate("/");
  };

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
