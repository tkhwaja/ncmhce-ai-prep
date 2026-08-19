import type { StudyPartnerProfile } from "@/types/community";

/**
 * Seed listings for the Study Partners directory.
 *
 * These give the directory a populated feel while the member base grows.
 * They are read-only: messaging one queues a partner request instead of
 * opening a live conversation, and they cannot be blocked or reported.
 */
export interface SamplePartner extends StudyPartnerProfile {
  isSample: true;
}

const monthsAhead = (n: number) => {
  const d = new Date();
  d.setDate(1);
  d.setMonth(d.getMonth() + n);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
};

const make = (
  id: string,
  display_name: string,
  exam_track: string,
  monthOffset: number,
  timezone: string,
  gender: string,
  age_range: string,
  study_styles: string[],
  focus_areas: string[],
  blurb: string
): SamplePartner => ({
  isSample: true,
  user_id: `sample-${id}`,
  is_listed: true,
  display_name,
  blurb,
  exam_track,
  target_exam_month: monthsAhead(monthOffset),
  gender,
  age_range,
  timezone,
  study_styles,
  focus_areas,
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
});

export const SAMPLE_PARTNERS: SamplePartner[] = [
  make(
    "amina",
    "Amina R.",
    "ncmhce",
    1,
    "Eastern (ET)",
    "Female",
    "25-34",
    ["Evenings", "1-on-1", "Accountability check-ins"],
    ["Assessment & Diagnosis", "DSM-5-TR"],
    "Second attempt, and this time I'm doing one narrative a night and talking it out. Looking for someone to swap reasoning with after each case."
  ),
  make(
    "derek",
    "Derek M.",
    "ncmhce",
    2,
    "Central (CT)",
    "Male",
    "35-44",
    ["Mornings", "Small group"],
    ["Treatment Planning", "Case Conceptualization"],
    "LMHC-limited permit in an agency setting. Strong on treatment planning, weak on sequencing what to do first. Free most mornings before 9."
  ),
  make(
    "jasmine",
    "Jasmine T.",
    "ncmhce",
    1,
    "Pacific (PT)",
    "Female",
    "25-34",
    ["Weekends", "Accountability check-ins"],
    ["Crisis & Risk", "Ethics & Legal"],
    "Sitting for the exam in a few weeks. I want a weekend partner for timed practice exams and a quick debrief after."
  ),
  make(
    "priyanka",
    "Nadia K.",
    "ncmhce",
    3,
    "Eastern (ET)",
    "Female",
    "18-24",
    ["Evenings", "1-on-1"],
    ["DSM-5-TR", "Test-taking Strategy"],
    "Just finished my internship. Differentials are my weak spot — especially mood vs. trauma presentations. Happy to quiz back and forth."
  ),
  make(
    "curtis",
    "Curtis B.",
    "ncmhce",
    2,
    "Mountain (MT)",
    "Male",
    "45+",
    ["Evenings", "Small group"],
    ["Counseling Theories", "Case Conceptualization"],
    "Career changer, second year post-grad. I learn best explaining things out loud, so a small group would be ideal."
  ),
  make(
    "lena",
    "Lena O.",
    "ncmhce",
    4,
    "Outside the US",
    "Prefer not to say",
    "25-34",
    ["Mornings", "Accountability check-ins"],
    ["Ethics & Legal", "Assessment & Diagnosis"],
    "Studying from a different time zone, so early sessions work best for me. Consistency matters to me more than long marathons."
  ),
  make(
    "marissa",
    "Marissa L.",
    "nce",
    1,
    "Eastern (ET)",
    "Female",
    "25-34",
    ["Evenings", "1-on-1"],
    ["Counseling Theories", "Test-taking Strategy"],
    "NCE in about a month. Doing 50 questions a night and reviewing every rationale. Would love a partner to compare misses with."
  ),
  make(
    "andre",
    "André P.",
    "nce",
    2,
    "Central (CT)",
    "Male",
    "25-34",
    ["Weekends", "Small group"],
    ["Assessment & Diagnosis", "Ethics & Legal"],
    "Stats and assessment questions keep getting me. Looking for a weekend group that drills the harder content areas."
  ),
  make(
    "tanya",
    "Tanya W.",
    "nce",
    3,
    "Pacific (PT)",
    "Female",
    "35-44",
    ["Mornings", "Accountability check-ins"],
    ["Ethics & Legal", "Test-taking Strategy"],
    "Working full time with two kids, so I study 6–7am. I just need someone who checks in and keeps me honest."
  ),
  make(
    "gabriel",
    "Gabriel S.",
    "nce",
    2,
    "Eastern (ET)",
    "Non-binary",
    "18-24",
    ["Evenings", "1-on-1", "Small group"],
    ["Counseling Theories", "Case Conceptualization"],
    "Recent grad. Good with theory names and founders, still shaky on career development and group stages."
  ),
  make(
    "rosa",
    "Rosa V.",
    "nce",
    4,
    "Mountain (MT)",
    "Female",
    "45+",
    ["Weekends", "Small group"],
    ["Assessment & Diagnosis", "DSM-5-TR"],
    "Taking my time and building a real base before I test. Prefer a steady weekend rhythm over cramming."
  ),
  make(
    "kwame",
    "Kwame A.",
    "ncmhce",
    5,
    "Central (CT)",
    "Male",
    "25-34",
    ["Evenings", "Accountability check-ins"],
    ["Crisis & Risk", "Treatment Planning"],
    "Community mental health, lots of crisis work. Comfortable with risk assessment, want help with the diagnostic sections."
  ),
];

export const isSamplePartnerId = (userId: string) => userId.startsWith("sample-");
