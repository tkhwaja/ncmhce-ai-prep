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
 * The NCE track is publicly visible (marketing, nav, exam info, pricing card),
 * but NCE subscriptions are not open yet — see `subscriptionsOpen` below.
 *
 * Private content preview: visiting any page with `?nce=preview` stores a local
 * flag that unlocks in-progress NCE study content for that browser only.
 * `?nce=off` clears it. The owner account also gets it automatically.
 */
const PREVIEW_KEY = "nce_preview_unlocked";

const readPreviewOverride = (): boolean => {
  try {
    const params = new URLSearchParams(window.location.search);
    const param = params.get("nce");
    if (param === "preview") localStorage.setItem(PREVIEW_KEY, "1");
    if (param === "off") localStorage.removeItem(PREVIEW_KEY);
    return localStorage.getItem(PREVIEW_KEY) === "1";
  } catch {
    return false;
  }
};

/** NCE track is visible to everyone. */
export const NCE_ENABLED = true;

/** Unlocks unfinished NCE study content for the owner / preview browsers only. */
export const NCE_PREVIEW_UNLOCK: boolean = import.meta.env.DEV || readPreviewOverride();



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
  /** Sidebar navigation for this track. */
  nav: { title: string; url: string; icon: string }[];

  /** Stripe price lookup key that grants this track. */
  priceId: string;
  /** Optional founder/intro price lookup key. */
  founderPriceId?: string;
  /** ISO deadline after which the regular price is used. */
  founderDeadline?: string;
  /** Founder monthly price in cents, for paywall copy. */
  founderMonthlyPriceCents?: number;
  /** Monthly price in cents, for paywall copy. */
  monthlyPriceCents: number;
  /** False while the track is still being built. */
  contentReady: boolean;
  /** False while the track is visible but not yet purchasable. */
  subscriptionsOpen: boolean;
  /** Visible to users at all. */
  enabled: boolean;
}

/** Returns the price ID currently offered for a track. */
export const currentPriceId = (track: ExamTrack): string => {
  const cfg = EXAM_TRACKS[track];
  if (cfg.founderPriceId && cfg.founderDeadline) {
    if (new Date().toISOString() < cfg.founderDeadline) return cfg.founderPriceId;
  }
  return cfg.priceId;
};

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
    nav: [
      { title: "Dashboard", url: "/dashboard", icon: "dashboard" },
      { title: "Narratives", url: "/narratives", icon: "narrative" },
      { title: "Practice Exams", url: "/practice-exams", icon: "exam-info" },
      { title: "Study Plan", url: "/study-plan", icon: "study-plan" },
      { title: "Learning Library", url: "/library", icon: "library" },
      { title: "Flashcards", url: "/flashcards", icon: "flashcards" },
      { title: "Analytics", url: "/analytics", icon: "analytics" },
      { title: "Study Tools", url: "/tools", icon: "tools" },
      { title: "Community", url: "/community", icon: "community" },
      { title: "Exam Info", url: "/exam-info", icon: "exam-info" },
    ],

    priceId: "ncmhce_monthly",
    monthlyPriceCents: 7900,
    contentReady: true,
    subscriptionsOpen: true,
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
    nav: [
      { title: "Dashboard", url: "/dashboard", icon: "dashboard" },
      { title: "Question Bank", url: "/questions", icon: "narrative" },
      { title: "Practice Exams", url: "/practice-exams", icon: "exam-info" },
      { title: "Study Plan", url: "/study-plan", icon: "study-plan" },
      { title: "Learning Library", url: "/library", icon: "library" },
      { title: "Flashcards", url: "/flashcards", icon: "flashcards" },
      { title: "Analytics", url: "/analytics", icon: "analytics" },
      { title: "Study Tools", url: "/tools", icon: "tools" },
      { title: "Community", url: "/community", icon: "community" },
      { title: "Exam Info", url: "/exam-info", icon: "exam-info" },
    ],

    priceId: "nce_monthly",
    founderPriceId: "nce_founder_monthly",
    founderDeadline: "2026-08-25T23:59:59Z",
    founderMonthlyPriceCents: 5900,
    monthlyPriceCents: 6900,
    contentReady: false,
    subscriptionsOpen: false,
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
