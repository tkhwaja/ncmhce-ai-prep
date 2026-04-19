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
import domainAssessment from "./svg/domain-assessment.svg?raw";
import domainEthics from "./svg/domain-ethics.svg?raw";
import domainCounseling from "./svg/domain-counseling.svg?raw";
import domainTreatment from "./svg/domain-treatment.svg?raw";
import domainIntervention from "./svg/domain-intervention.svg?raw";
import flashDsm from "./svg/flash-dsm.svg?raw";
import flashModalities from "./svg/flash-modalities.svg?raw";
import flashEthicalCodes from "./svg/flash-ethical-codes.svg?raw";
import flashTheories from "./svg/flash-theories.svg?raw";
import flashAssessment from "./svg/flash-assessment.svg?raw";
import flashCrisis from "./svg/flash-crisis.svg?raw";

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
  "domain-assessment": domainAssessment,
  "domain-ethics": domainEthics,
  "domain-counseling": domainCounseling,
  "domain-treatment": domainTreatment,
  "domain-intervention": domainIntervention,
  "flash-dsm": flashDsm,
  "flash-modalities": flashModalities,
  "flash-ethical-codes": flashEthicalCodes,
  "flash-theories": flashTheories,
  "flash-assessment": flashAssessment,
  "flash-crisis": flashCrisis,
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
