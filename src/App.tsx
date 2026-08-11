import { Component, lazy, Suspense, type ReactNode } from "react";
import MetaPixelPageview from "@/components/MetaPixelPageview";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate, useParams } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/contexts/AuthContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { PomodoroProvider } from "@/contexts/PomodoroContext";
import { ExamTrackProvider } from "@/contexts/ExamTrackContext";

import ProtectedRoute from "@/components/ProtectedRoute";
import PostHogPageview from "@/components/PostHogPageview";
import PaidFeatureGate from "./components/PaidFeatureGate";
import SupportFab from "./components/SupportFab";
import Index from "./pages/Index";

// Lazy-loaded routes — keeps the marketing landing bundle small.
// Auth pages
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const ResetPassword = lazy(() => import("./pages/ResetPassword"));
const Unsubscribe = lazy(() => import("./pages/Unsubscribe"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Marketing / standalone
const FreeDiagnosticCase = lazy(() => import("./pages/FreeDiagnosticCase"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage"));
const CheckoutReturn = lazy(() => import("./pages/CheckoutReturn"));
const IconsPreview = lazy(() => import("./pages/IconsPreview"));

const AdminEmails = lazy(() => import("./pages/AdminEmails"));

// App shell + pages
const AppLayout = lazy(() => import("./components/app/AppLayout"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Profile = lazy(() => import("./pages/Profile"));
const Narratives = lazy(() => import("./pages/Narratives"));
const NarrativePage = lazy(() => import("./pages/NarrativePage"));
const Analytics = lazy(() => import("./pages/Analytics"));
const StudyPlan = lazy(() => import("./pages/StudyPlan"));
const Flashcards = lazy(() => import("./pages/Flashcards"));
const Library = lazy(() => import("./pages/Library"));
const ExamInfo = lazy(() => import("./pages/ExamInfo"));
const Tools = lazy(() => import("./pages/Tools"));
const PracticeExams = lazy(() => import("./pages/PracticeExams"));
const PracticeExamRunner = lazy(() => import("./pages/PracticeExamRunner"));
const PracticeExamResults = lazy(() => import("./pages/PracticeExamResults"));

const queryClient = new QueryClient();

const RedirectSimulation = () => {
  const { id } = useParams<{ id: string }>();
  return <Navigate to={`/narrative/${id}`} replace />;
};

const RouteFallback = () => (
  <div className="min-h-screen w-full flex items-center justify-center bg-background">
    <div
      className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent"
      role="status"
      aria-label="Loading"
    />
  </div>
);

// Recover from stale lazy-chunk hashes after a deploy/rebuild by reloading once.
class ChunkErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean; message?: string }
> {
  state = { hasError: false, message: undefined as string | undefined };
  static getDerivedStateFromError(error: unknown) {
    const msg = error instanceof Error ? `${error.name} ${error.message}` : String(error);
    const isChunkError =
      /ChunkLoadError|Loading chunk|Failed to fetch dynamically imported module|Importing a module script failed/i.test(
        msg,
      );
    if (isChunkError && typeof window !== "undefined") {
      const KEY = "lovable:chunk-reload";
      if (!sessionStorage.getItem(KEY)) {
        sessionStorage.setItem(KEY, "1");
        window.location.reload();
        return { hasError: true, message: msg };
      }
    }
    return { hasError: true, message: msg };
  }
  componentDidMount() {
    if (typeof window !== "undefined") sessionStorage.removeItem("lovable:chunk-reload");
  }
  componentDidCatch(error: unknown, info: { componentStack?: string }) {
    // eslint-disable-next-line no-console
    console.error("[ChunkErrorBoundary] Render failure:", error, info?.componentStack);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen w-full flex items-center justify-center bg-background p-6">
          <div className="text-center max-w-md">
            <p className="text-foreground mb-3">Something went wrong loading this page.</p>
            {this.state.message && (
              <p className="text-xs text-muted-foreground mb-4 font-mono break-all">
                {this.state.message}
              </p>
            )}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => window.location.reload()}
                className="text-sm text-primary underline"
              >
                Reload
              </button>
              <button
                onClick={() => {
                  window.location.href = "/dashboard";
                }}
                className="text-sm text-primary underline"
              >
                Back to dashboard
              </button>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AuthProvider>
            <ExamTrackProvider>

            <PostHogPageview />
            <MetaPixelPageview />

            <ChunkErrorBoundary>
            <Suspense fallback={<RouteFallback />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/free-diagnostic-case" element={<FreeDiagnosticCase />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route path="/unsubscribe" element={<Unsubscribe />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/checkout/return" element={<CheckoutReturn />} />
                <Route path="/icons-preview" element={<IconsPreview />} />
                <Route path="/founding" element={<Navigate to="/signup" replace />} />
                <Route path="/admin/emails" element={<AdminEmails />} />

                <Route element={<ProtectedRoute><PomodoroProvider><AppLayout /></PomodoroProvider></ProtectedRoute>}>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/exam-info" element={<PaidFeatureGate feature="Exam Info"><ExamInfo /></PaidFeatureGate>} />

                  <Route path="/narratives" element={<PaidFeatureGate feature="Narratives"><Narratives /></PaidFeatureGate>} />
                  <Route path="/narrative/:id" element={<PaidFeatureGate feature="Narratives"><NarrativePage /></PaidFeatureGate>} />
                  <Route path="/practice-exams" element={<PaidFeatureGate feature="Practice Exams"><PracticeExams /></PaidFeatureGate>} />
                  <Route path="/practice-exam/:examId/attempt/:attemptId" element={<PaidFeatureGate feature="Practice Exams"><PracticeExamRunner /></PaidFeatureGate>} />
                  <Route path="/practice-exam/:examId/results/:attemptId" element={<PaidFeatureGate feature="Practice Exams"><PracticeExamResults /></PaidFeatureGate>} />
                  <Route path="/simulations" element={<Navigate to="/narratives" replace />} />
                  <Route path="/simulation/:id" element={<RedirectSimulation />} />
                  <Route path="/study-plan" element={<PaidFeatureGate feature="Study Plan"><StudyPlan /></PaidFeatureGate>} />
                  <Route path="/analytics" element={<PaidFeatureGate feature="Analytics"><Analytics /></PaidFeatureGate>} />
                  <Route path="/flashcards" element={<PaidFeatureGate feature="Flashcards"><Flashcards /></PaidFeatureGate>} />
                  <Route path="/library" element={<PaidFeatureGate feature="Library"><Library /></PaidFeatureGate>} />

                  <Route path="/tools" element={<PaidFeatureGate feature="Study Tools"><Tools /></PaidFeatureGate>} />
                </Route>

                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
            </ChunkErrorBoundary>
            <SupportFab />
          </AuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
