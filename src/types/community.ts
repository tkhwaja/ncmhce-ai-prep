export const EXAM_TRACK_OPTIONS = [
  { value: "ncmhce", label: "NCMHCE" },
  { value: "nce", label: "NCE" },
] as const;

export const GENDER_OPTIONS = [
  "Female",
  "Male",
  "Non-binary",
  "Prefer not to say",
] as const;

export const AGE_RANGE_OPTIONS = ["18-24", "25-34", "35-44", "45+"] as const;

export const STUDY_STYLE_OPTIONS = [
  "Evenings",
  "Mornings",
  "Weekends",
  "1-on-1",
  "Small group",
  "Accountability check-ins",
] as const;

export const FOCUS_AREA_OPTIONS = [
  "Assessment & Diagnosis",
  "DSM-5-TR",
  "Counseling Theories",
  "Treatment Planning",
  "Ethics & Legal",
  "Crisis & Risk",
  "Case Conceptualization",
  "Test-taking Strategy",
] as const;

export const TIMEZONE_OPTIONS = [
  "Eastern (ET)",
  "Central (CT)",
  "Mountain (MT)",
  "Pacific (PT)",
  "Alaska / Hawaii",
  "Outside the US",
] as const;

export interface StudyPartnerProfile {
  user_id: string;
  is_listed: boolean;
  display_name: string | null;
  blurb: string | null;
  exam_track: string;
  target_exam_month: string | null;
  gender: string | null;
  age_range: string | null;
  timezone: string | null;
  study_styles: string[];
  focus_areas: string[];
  created_at: string;
  updated_at: string;
}

export interface Conversation {
  id: string;
  type: string;
  title: string | null;
  created_by: string;
  created_at: string;
  updated_at: string;
}

export interface ConversationMember {
  id: string;
  conversation_id: string;
  user_id: string;
  role: string;
  last_read_at: string;
  joined_at: string;
}

export interface CommunityMessage {
  id: string;
  conversation_id: string;
  sender_id: string;
  body: string;
  created_at: string;
}

/** Next 12 months as "YYYY-MM" values with friendly labels. */
export function examMonthOptions(count = 14): { value: string; label: string }[] {
  const out: { value: string; label: string }[] = [];
  const now = new Date();
  for (let i = 0; i < count; i++) {
    const d = new Date(now.getFullYear(), now.getMonth() + i, 1);
    const value = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
    out.push({
      value,
      label: d.toLocaleDateString(undefined, { month: "long", year: "numeric" }),
    });
  }
  return out;
}

export function formatExamMonth(value: string | null): string | null {
  if (!value) return null;
  const [y, m] = value.split("-").map(Number);
  if (!y || !m) return value;
  return new Date(y, m - 1, 1).toLocaleDateString(undefined, {
    month: "short",
    year: "numeric",
  });
}
