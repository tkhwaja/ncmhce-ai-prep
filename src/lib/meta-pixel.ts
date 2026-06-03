declare global {
  interface Window {
    fbq?: (
      event: string,
      eventName: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

const PIXEL_ID = "3904330806541081";

/** Inject the Meta Pixel base code and fire the initial PageView. */
export function initMetaPixel() {
  if (!import.meta.env.PROD || typeof window === "undefined") return;
  if (window.fbq) return;

  const w = window as unknown as Record<string, unknown>;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fbq = function (this: unknown, ...args: any[]) {
    const queue = ((w.fbq as unknown as Record<string, unknown>)?.queue ?? []) as unknown[][];
    const callMethod = (w.fbq as unknown as Record<string, unknown>)?.callMethod as
      | ((...a: unknown[]) => unknown)
      | undefined;
    if (callMethod) {
      callMethod.apply(w.fbq, args);
    } else {
      queue.push(args);
    }
  };

  w.fbq = fbq as unknown as Window["fbq"];
  if (!w._fbq) w._fbq = w.fbq;

  const fbqObj = w.fbq as unknown as Record<string, unknown>;
  fbqObj.push = fbq;
  fbqObj.loaded = true;
  fbqObj.version = "2.0";
  fbqObj.queue = [];

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(script);

  window.fbq("init", PIXEL_ID);
  window.fbq("track", "PageView");
}

/** Fire a PageView event (used for SPA route changes). */
export function trackMetaPageView() {
  if (!import.meta.env.PROD || typeof window === "undefined") return;
  window.fbq?.("track", "PageView");
}
