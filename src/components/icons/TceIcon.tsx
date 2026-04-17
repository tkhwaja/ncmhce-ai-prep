import { CSSProperties } from "react";

import dashboard from "./svg/dashboard.svg?raw";
import narrative from "./svg/narrative.svg?raw";
import studyPlan from "./svg/study-plan.svg?raw";
import analytics from "./svg/analytics.svg?raw";
import flashcards from "./svg/flashcards.svg?raw";
import library from "./svg/library.svg?raw";
import tools from "./svg/tools.svg?raw";
import examInfo from "./svg/exam-info.svg?raw";
import community from "./svg/community.svg?raw";
import logoMark from "./svg/logo-mark.svg?raw";
import aiSpark from "./svg/ai-spark.svg?raw";
import check from "./svg/check.svg?raw";
import xFail from "./svg/x-fail.svg?raw";

const ICONS = {
  dashboard,
  narrative,
  "study-plan": studyPlan,
  analytics,
  flashcards,
  library,
  tools,
  "exam-info": examInfo,
  community,
  "logo-mark": logoMark,
  "ai-spark": aiSpark,
  check,
  "x-fail": xFail,
} as const;

export type TceIconName = keyof typeof ICONS;

interface TceIconProps {
  name: TceIconName;
  size?: number;
  className?: string;
  style?: CSSProperties;
  "aria-label"?: string;
}

/**
 * Custom TCE icon set — 24×24, 1.75px stroke, rounded caps, currentColor.
 * Inherits color from parent text class (text-primary, text-muted-foreground, etc.).
 */
const TceIcon = ({ name, size = 20, className, style, ...rest }: TceIconProps) => {
  const raw = ICONS[name];
  // Inject width/height by replacing the opening svg tag attributes
  const svg = raw.replace(
    /<svg([^>]*)>/,
    `<svg$1 width="${size}" height="${size}" style="display:inline-block;flex-shrink:0">`
  );
  const ariaLabel = rest["aria-label"];
  return (
    <span
      className={className}
      style={{ display: "inline-flex", lineHeight: 0, color: "currentColor", ...style }}
      role={ariaLabel ? "img" : undefined}
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? undefined : true}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
};

export default TceIcon;
export const tceIconNames = Object.keys(ICONS) as TceIconName[];
