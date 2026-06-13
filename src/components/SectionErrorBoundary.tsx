import { Component, type ReactNode } from "react";
import { AlertTriangle } from "lucide-react";

interface Props {
  label: string;
  children: ReactNode;
}

interface State {
  hasError: boolean;
  message?: string;
}

/**
 * Wraps a single section so one render failure doesn't blank the whole page.
 * Logs the error with the section label so it shows up in console + PostHog.
 */
export class SectionErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(error: unknown): State {
    return {
      hasError: true,
      message: error instanceof Error ? error.message : String(error),
    };
  }

  componentDidCatch(error: unknown, info: { componentStack?: string }) {
    // eslint-disable-next-line no-console
    console.error(
      `[SectionErrorBoundary] ${this.props.label} failed to render:`,
      error,
      info?.componentStack,
    );
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-4 my-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
            <div className="min-w-0">
              <p className="text-sm font-semibold text-foreground">
                This section couldn't be displayed
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                The rest of the module is still available below. We've logged the issue
                and will fix it shortly.
              </p>
              {this.state.message && (
                <p className="text-xs text-muted-foreground/70 mt-2 font-mono break-all">
                  {this.state.message}
                </p>
              )}
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default SectionErrorBoundary;
