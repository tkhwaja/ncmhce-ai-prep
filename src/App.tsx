import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/contexts/AuthContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { PomodoroProvider } from "@/contexts/PomodoroContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Unsubscribe from "./pages/Unsubscribe";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import AppLayout from "./components/app/AppLayout";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Narratives from "./pages/Narratives";
import NarrativePage from "./pages/NarrativePage";
import FreeDiagnosticCase from "./pages/FreeDiagnosticCase";
import { useParams } from "react-router-dom";
import Analytics from "./pages/Analytics";
import StudyPlan from "./pages/StudyPlan";
import Flashcards from "./pages/Flashcards";
import Library from "./pages/Library";
import ExamInfo from "./pages/ExamInfo";
import Community from "./pages/Community";
import Tools from "./pages/Tools";
import PracticeExams from "./pages/PracticeExams";
import PracticeExamRunner from "./pages/PracticeExamRunner";
import PracticeExamResults from "./pages/PracticeExamResults";
import PaidFeatureGate from "./components/PaidFeatureGate";
import CheckoutPage from "./pages/CheckoutPage";
import CheckoutReturn from "./pages/CheckoutReturn";
import IconsPreview from "./pages/IconsPreview";
import Founding from "./pages/Founding";

const queryClient = new QueryClient();

const RedirectSimulation = () => {
  const { id } = useParams<{ id: string }>();
  return <Navigate to={`/narrative/${id}`} replace />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AuthProvider>
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
              <Route path="/founding" element={<Founding />} />

              <Route element={<ProtectedRoute><PomodoroProvider><AppLayout /></PomodoroProvider></ProtectedRoute>}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/exam-info" element={<ExamInfo />} />
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
                <Route path="/library" element={<Library />} />
                <Route path="/tools" element={<PaidFeatureGate feature="Study Tools"><Tools /></PaidFeatureGate>} />
              </Route>

              <Route path="*" element={<NotFound />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
