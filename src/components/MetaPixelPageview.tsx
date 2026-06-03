import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackMetaPageView } from "@/lib/meta-pixel";

const MetaPixelPageview = () => {
  const location = useLocation();
  useEffect(() => {
    trackMetaPageView();
  }, [location.pathname, location.search]);
  return null;
};

export default MetaPixelPageview;
