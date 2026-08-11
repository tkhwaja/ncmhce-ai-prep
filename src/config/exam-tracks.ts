/**
 * Exam track configuration.
 *
 * The platform hosts two exam tracks. NCMHCE is live today; NCE is under
 * construction and stays completely hidden in production builds until launch.
 *
 * Everything track-specific (labels, domains, routes, billing) is declared here
 * so page code never hard-codes a single exam.
 */

export type ExamTrack = "ncmhce" | "nce";

export const DEFAULT_EXAM_TRACK: ExamTrack = "ncmhce";

/**
 * NCE is visible in development and the Lovable preview, and hidden in
 * production builds. Flip `NCE_ENABLED` to `true` at launch.
 *
 * Kept as a code constant rather than an env var so the published bundle can
 * never accidentally ship NCE because of an env-file mismatch.
 */
export const NCE_ENABLED: boolean = import.meta.env.DEV;

export interface ExamTrackConfig {
  id: ExamTrack;
  /** Short label used in nav, switchers and badges. */
  label: string;
  /** Full exam name for headings and marketing copy. */
  fullName: string;
  /** One-line positioning statement. */
  tagline: string;
  /** Exam format, used to pick the right practice UI. */
  format: "case-simulation" | "multiple-choice";
  /** Content domains — the spine for library, tagging and analytics. */
  domains: string[];
  /** Stripe price lookup key that grants this track. */
  priceId: string;
  /** Monthly price in cents, for paywall copy. */
  monthlyPriceCents: number;
  /** False while the track is still being built. */
  contentReady: boolean;
  /** Visible to users at all. */
  enabled: boolean;
}

export const EXAM_TRACKS: Record<ExamTrack, ExamTrackConfig> = {
  ncmhce: {
    id: "ncmhce",
    label: "NCMHCE",
    fullName: "National Clinical Mental Health Counseling Examination",
    tagline: "Clinical case simulations, diagnosis and treatment planning.",
    format: "case-simulation",
    domains: [
      "Assessment and Diagnosis",
      "Counseling and Psychotherapy",
      "Administration, Consultation, and Supervision",
    ],
    priceId: "ncmhce_monthly",
    monthlyPriceCents: 7900,
    contentReady: true,
    enabled: true,
  },
  nce: {
    id: "nce",
    label: "NCE",
    fullName: "National Counselor Examination",
    tagline: "Multiple-choice mastery across the eight core counseling areas.",
    format: "multiple-choice",
    domains: [
      "Professional Counseling Orientation and Ethical Practice",
      "Social and Cultural Diversity",
      "Human Growth and Development",
      "Career Development",
      "Counseling and Helping Relationships",
      "Group Counseling and Group Work",
      "Assessment and Testing",
      "Research and Program Evaluation",
    ],
    priceId: "nce_monthly",
    monthlyPriceCents: 7900,
    contentReady: false,
    enabled: NCE_ENABLED,
  },
};

/** Tracks a user can currently see and select. */
export const availableTracks = (): ExamTrackConfig[] =>
  (Object.values(EXAM_TRACKS) as ExamTrackConfig[]).filter((t) => t.enabled);

export const isExamTrack = (value: unknown): value is ExamTrack =>
  value === "ncmhce" || value === "nce";

/** Normalizes any stored value to a track the user can actually use. */
export const resolveTrack = (value: unknown): ExamTrack => {
  if (isExamTrack(value) && EXAM_TRACKS[value].enabled) return value;
  return DEFAULT_EXAM_TRACK;
};

export const trackConfig = (track: ExamTrack): ExamTrackConfig => EXAM_TRACKS[track];

export const formatPrice = (cents: number): string =>
  cents % 100 === 0 ? `$${cents / 100}` : `$${(cents / 100).toFixed(2)}`;
