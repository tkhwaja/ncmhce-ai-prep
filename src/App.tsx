import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/contexts/AuthContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
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
import { useParams } from "react-router-dom";
import Analytics from "./pages/Analytics";
import StudyPlan from "./pages/StudyPlan";
import Flashcards from "./pages/Flashcards";
import Library from "./pages/Library";
import ExamInfo from "./pages/ExamInfo";
import Community from "./pages/Community";
import Tools from "./pages/Tools";
import PaidFeatureGate from "./components/PaidFeatureGate";
import CheckoutPage from "./pages/CheckoutPage";
import CheckoutReturn from "./pages/CheckoutReturn";
import IconsPreview from "./pages/IconsPreview";

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
            {/* Public routes */}
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/unsubscribe" element={<Unsubscribe />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/checkout/return" element={<CheckoutReturn />} />
            <Route path="/icons-preview" element={<IconsPreview />} />

            {/* Protected routes */}
            <Route element={<ProtectedRoute><AppLayout /></ProtectedRoute>}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/exam-info" element={<ExamInfo />} />
              {/* Premium features */}
              <Route path="/narratives" element={<PaidFeatureGate feature="Narratives"><Narratives /></PaidFeatureGate>} />
              <Route path="/narrative/:id" element={<PaidFeatureGate feature="Narratives"><NarrativePage /></PaidFeatureGate>} />
              {/* Legacy redirects (old "Simulations" URLs) */}
              <Route path="/simulations" element={<Navigate to="/narratives" replace />} />
              <Route path="/simulation/:id" element={<RedirectSimulation />} />
              <Route path="/study-plan" element={<PaidFeatureGate feature="Study Plan"><StudyPlan /></PaidFeatureGate>} />
              <Route path="/analytics" element={<PaidFeatureGate feature="Analytics"><Analytics /></PaidFeatureGate>} />
              <Route path="/flashcards" element={<PaidFeatureGate feature="Flashcards"><Flashcards /></PaidFeatureGate>} />
              <Route path="/library" element={<PaidFeatureGate feature="Learning Library"><Library /></PaidFeatureGate>} />
              <Route path="/community" element={<PaidFeatureGate feature="Community"><Community /></PaidFeatureGate>} />
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
