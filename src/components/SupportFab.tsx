import { LifeBuoy } from "lucide-react";

const SUPPORT_EMAIL = "support@theexampath.com";

const SupportFab = () => (
  <a
    href={`mailto:${SUPPORT_EMAIL}?subject=The%20Exam%20Path%20-%20Support%20request`}
    className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-primary-foreground shadow-lg shadow-primary/30 ring-1 ring-primary/20 transition hover:scale-105 hover:shadow-xl"
    aria-label="Contact support"
  >
    <LifeBuoy className="h-4 w-4" />
    <span className="text-sm font-medium">Need help?</span>
  </a>
);

export default SupportFab;
