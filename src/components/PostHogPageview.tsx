import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { posthog } from "@/lib/posthog";

const PostHogPageview = () => {
  const location = useLocation();
  useEffect(() => {
    posthog.capture("$pageview", {
      $current_url: window.location.href,
      path: location.pathname,
    });
  }, [location.pathname, location.search]);
  return null;
};

export default PostHogPageview;
