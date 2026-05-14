import { LifeBuoy } from "lucide-react";

const SUPPORT_EMAIL = "support@theexampath.com";

const SupportFab = () => (
  <a
    href={`mailto:${SUPPORT_EMAIL}?subject=The%20Exam%20Path%20-%20Support%20request`}
    className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-primary p-3 sm:px-4 sm:py-3 text-primary-foreground shadow-lg shadow-primary/30 ring-1 ring-primary/20 transition hover:scale-105 hover:shadow-xl"
    aria-label="Contact support"
  >
    <LifeBuoy className="h-5 w-5 sm:h-4 sm:w-4" />
    <span className="hidden sm:inline text-sm font-medium">Need help?</span>
  </a>
);

export default SupportFab;
