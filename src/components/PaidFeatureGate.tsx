import { Navigate, useLocation } from "react-router-dom";
import { useSubscription } from "@/hooks/useSubscription";

const PaidFeatureGate = ({ children, feature }: { children: React.ReactNode; feature: string }) => {
  void feature;
  const { hasAccess, loading } = useSubscription();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-[40vh] flex items-center justify-center">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      </div>
    );
  }

  if (!hasAccess) {
    return <Navigate to="/checkout" replace state={{ from: location.pathname }} />;
  }

  return <>{children}</>;
};

export default PaidFeatureGate;
