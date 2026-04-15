import { useLocation } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Construction } from "lucide-react";

const nameMap: Record<string, string> = {
  "/simulations": "Simulations",
  "/study-plan": "Study Plan",
  "/analytics": "Analytics",
  "/flashcards": "Flashcards",
  "/library": "Learning Library",
  "/exam-info": "Exam Info",
  "/community": "Community",
};

const PlaceholderPage = () => {
  const location = useLocation();
  const title = nameMap[location.pathname] || "Page";

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-foreground mb-6">{title}</h1>
      <Card className="card-elevated">
        <CardContent className="p-12 text-center">
          <Construction className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-lg font-semibold text-foreground mb-2">Coming Soon</h2>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            The {title} feature is currently under development. Check back soon for updates!
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PlaceholderPage;
