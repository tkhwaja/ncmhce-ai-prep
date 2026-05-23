// Second blast email: rebuilds the "Official Founders offer" Brevo list (excluding
// paid founders + suppressed) and creates/updates a draft Brevo campaign highlighting
// AI Tutor, Flashcards, Pomodoro, and Personal Study Plan. Offer ends May 31, 2026 11:59pm ET.
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Content-Type": "application/json",
};

const BREVO_GATEWAY = "https://connector-gateway.lovable.dev/brevo";
const SENDER_NAME = "The Exam Path";
const SENDER_EMAIL = "hello@theexampath.com";
const LIST_NAME = "Official Founders offer";
const CAMPAIGN_NAME = "Founders Offer — Final Week Feature Tour";
const CAMPAIGN_SUBJECT = "8 days left: see what your founding year unlocks";
const PREVIEW_TEXT = "AI tutor, auto-flashcards, focus timer, and a study plan built around your weak areas — all locked in for one year.";

const IMG = {
  aiTutor: "https://dhcjjwxrksojseskqofl.supabase.co/storage/v1/object/public/email-assets/blast2-ai-tutor-real.png",
  flashcards: "https://dhcjjwxrksojseskqofl.supabase.co/storage/v1/object/public/email-assets/blast2-flashcards-real.png",
  pomodoro: "https://dhcjjwxrksojseskqofl.supabase.co/storage/v1/object/public/email-assets/blast2-pomodoro-real.png",
  studyPlan: "https://dhcjjwxrksojseskqofl.supabase.co/storage/v1/object/public/email-assets/blast2-study-plan-real.png",
};

function brevoHeaders() {
  const lovableKey = Deno.env.get("LOVABLE_API_KEY");
  const brevoKey = Deno.env.get("BREVO_API_KEY");
  if (!lovableKey) throw new Error("LOVABLE_API_KEY is not configured");
  if (!brevoKey) throw new Error("BREVO_API_KEY is not configured");
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${lovableKey}`,
    "X-Connection-Api-Key": brevoKey,
  };
}

async function brevo(path: string, init: RequestInit = {}) {
  const res = await fetch(`${BREVO_GATEWAY}${path}`, {
    ...init,
    headers: { ...brevoHeaders(), ...(init.headers || {}) },
  });
  const text = await res.text();
  let json: any = null;
  try { json = text ? JSON.parse(text) : null; } catch { /* keep raw */ }
  if (!res.ok) throw new Error(`Brevo ${path} ${res.status}: ${text}`);
  return json;
}

function featureBlock(img: string, eyebrow: string, title: string, body: string) {
  return `
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin:0 0 28px">
      <tr>
        <td style="padding:0">
          <img src="${img}" alt="${title}" width="524" style="display:block;width:100%;max-width:524px;height:auto;border:0;outline:none;text-decoration:none;border-radius:14px;border:1px solid #e2e8f0" />
        </td>
      </tr>
      <tr>
        <td style="padding:16px 4px 0">
          <p style="font-size:11px;font-weight:700;color:#2563eb;letter-spacing:0.1em;text-transform:uppercase;margin:0 0 6px">${eyebrow}</p>
          <h3 style="font-size:20px;line-height:28px;font-weight:700;color:#0f172a;margin:0 0 8px">${title}</h3>
          <p style="font-size:15px;line-height:24px;color:#475569;margin:0">${body}</p>
        </td>
      </tr>
    </table>`;
}

function buildCampaignHtml() {
  return `<!doctype html><html><body style="margin:0;padding:0;background:#f8fafc;font-family:Inter,Arial,sans-serif;color:#0f172a">
  <div style="max-width:580px;margin:0 auto;background:#ffffff;padding:0 0 36px">
    <div style="padding:32px 28px 0">
      <p style="font-size:12px;font-weight:700;color:#2563eb;letter-spacing:0.08em;margin:0 0 12px">FOUNDING MEMBER OFFER · ENDS MAY 31, 11:59 PM ET</p>
      <h1 style="font-size:30px;line-height:38px;font-weight:800;color:#0f172a;margin:0 0 14px">8 days left to lock in your founding year</h1>
      <p style="font-size:16px;line-height:26px;color:#334155;margin:0 0 18px">
        You're already on The Exam Path. Before the founding offer closes on <strong>May 31 at 11:59 PM ET</strong>,
        we want to make sure you know exactly what you're locking in. Here are four of the tools your founding year unlocks —
        built specifically for NCMHCE candidates.
      </p>

      <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:12px;padding:16px 18px;margin:0 0 28px">
        <p style="font-size:13px;line-height:20px;color:#1e3a8a;margin:0">
          <strong>$67 one-time</strong> for a full year of access. After May 31, public pricing becomes <strong>$79/month</strong>.
          No subscription, no auto-renewal — just your founding year, locked in.
        </p>
      </div>

      ${featureBlock(IMG.aiTutor, "FEATURE 01", "An AI tutor trained on the NCMHCE", "Stuck on a diagnosis, an ethics scenario, or a treatment-planning decision? Ask. Your AI tutor explains <em>why</em> the right answer is right — in the same clinical reasoning language the exam expects. No generic chatbot. No fluff.")}

      ${featureBlock(IMG.flashcards, "FEATURE 02", "Flashcards generated from what you're studying", "Auto-generate flashcard decks from any clinical narrative, DSM-5-TR module, theory, or weak-area domain in seconds. Spaced repetition built in — so the diagnoses, criteria, and interventions you keep missing actually stick.")}

      ${featureBlock(IMG.pomodoro, "FEATURE 03", "Built-in Pomodoro focus timer", "Study in focused 25-minute blocks without leaving the platform. The timer runs in the sidebar while you work through narratives or review the library — no app switching, no broken concentration, no excuses.")}

      ${featureBlock(IMG.studyPlan, "FEATURE 04", "A personal study plan built around your weak areas", "After your diagnostics, the platform analyzes the domains and concepts you're struggling with most and builds a week-by-week study plan around them. Less guessing what to study next. More time on what will actually move your score.")}

      <div style="background:#0f172a;border-radius:14px;padding:24px 22px;margin:8px 0 24px">
        <p style="font-size:12px;font-weight:700;color:#93c5fd;letter-spacing:0.08em;text-transform:uppercase;margin:0 0 8px">FOUNDING MEMBER PRICING</p>
        <p style="font-size:24px;font-weight:800;color:#ffffff;margin:0 0 6px">$67 one-time · Full year of access</p>
        <p style="font-size:13px;line-height:20px;color:#cbd5e1;margin:0 0 18px">
          Free for everyone until May 31, 2026. Your paid year unlocks then and runs through May 31, 2027.
        </p>
        <a href="https://theexampath.com/founding" style="background:#2563eb;color:#ffffff;font-size:15px;font-weight:700;text-decoration:none;padding:14px 26px;border-radius:10px;display:inline-block">Claim my founding spot →</a>
      </div>

      <p style="font-size:14px;line-height:22px;color:#475569;margin:0 0 6px">
        After <strong>May 31 at 11:59 PM ET</strong>, the founding offer is gone and pricing moves to <strong>$79/month</strong>.
        If you've been waiting for the right time — this is the window.
      </p>
      <p style="font-size:14px;line-height:22px;color:#475569;margin:18px 0 0">
        Questions before you decide? Just reply to this email — it goes straight to me.
      </p>
      <p style="font-size:14px;line-height:22px;color:#0f172a;margin:14px 0 0">
        — Taha<br /><span style="color:#64748b">Founder, The Exam Path</span>
      </p>

      <p style="font-size:12px;line-height:18px;color:#94a3b8;margin:32px 0 0;border-top:1px solid #e2e8f0;padding-top:18px">
        You received this because you signed up for The Exam Path or grabbed a free diagnostic.
        {{ unsubscribe }}
      </p>
    </div>
  </div>
</body></html>`;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  // service-role guard
  const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
  const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  const authHeader = req.headers.get("Authorization") || "";
  const bearer = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : "";
  const ADMIN_EMAILS = ["tahahareb18@gmail.com", "tahahareb7@gmail.com"];
  let authorized = false;
  if (bearer && bearer === supabaseServiceKey) authorized = true;
  else if (bearer) {
    try {
      const payload = JSON.parse(atob(bearer.split(".")[1]));
      if (payload?.role === "service_role") authorized = true;
      else if (payload?.email && ADMIN_EMAILS.includes(String(payload.email).toLowerCase())) authorized = true;
    } catch { /* */ }
  }
  if (!authorized) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401, headers: corsHeaders });
  }

  let body: any = {};
  try { body = await req.json(); } catch { /* allow empty */ }
  const dryRun = body?.dryRun === true;

  const supabase = createClient(supabaseUrl, supabaseServiceKey);

  try {
    // 1) Collect all emails (exclude paid + suppressed)
    const emails = new Map<string, { email: string; firstName?: string; lastName?: string }>();
    const PAID = ["early_access", "paid", "subscribed"];

    const { data: profiles, error: profErr } = await supabase
      .from("profiles")
      .select("email, full_name, payment_status")
      .not("email", "is", null);
    if (profErr) throw new Error(`profiles: ${profErr.message}`);
    for (const p of profiles ?? []) {
      if (!p.email) continue;
      if (PAID.includes(String(p.payment_status))) continue;
      const key = p.email.toLowerCase().trim();
      const [firstName, ...rest] = (p.full_name || "").trim().split(/\s+/);
      emails.set(key, { email: key, firstName: firstName || undefined, lastName: rest.join(" ") || undefined });
    }

    const { data: leads, error: leadErr } = await supabase
      .from("free_diagnostic_leads")
      .select("email, full_name");
    if (leadErr) throw new Error(`free_diagnostic_leads: ${leadErr.message}`);
    for (const l of leads ?? []) {
      if (!l.email) continue;
      const key = l.email.toLowerCase().trim();
      if (emails.has(key)) continue;
      const [firstName, ...rest] = (l.full_name || "").trim().split(/\s+/);
      emails.set(key, { email: key, firstName: firstName || undefined, lastName: rest.join(" ") || undefined });
    }

    const { data: waitlist, error: wErr } = await supabase
      .from("waitlist_signups")
      .select("email");
    if (wErr) throw new Error(`waitlist_signups: ${wErr.message}`);
    for (const w of waitlist ?? []) {
      if (!w.email) continue;
      const key = w.email.toLowerCase().trim();
      if (emails.has(key)) continue;
      emails.set(key, { email: key });
    }

    const { data: suppressed } = await supabase.from("suppressed_emails").select("email");
    for (const s of suppressed ?? []) {
      if (s.email) emails.delete(s.email.toLowerCase().trim());
    }

    // Belt-and-suspenders: remove any paid email that slipped in via leads/waitlist
    const paidProfiles = (profiles ?? []).filter((p) => PAID.includes(String(p.payment_status)) && p.email);
    for (const p of paidProfiles) emails.delete(p.email!.toLowerCase().trim());

    const allContacts = Array.from(emails.values());

    if (dryRun) {
      return new Response(JSON.stringify({
        dryRun: true,
        contactCount: allContacts.length,
        sample: allContacts.slice(0, 5),
      }), { headers: corsHeaders });
    }

    // 2) Find or create the Brevo folder + list (reuse the same list as blast #1)
    let folderId: number | null = null;
    try {
      const folders = await brevo(`/contacts/folders?limit=50&offset=0`);
      const existing = (folders?.folders || []).find((f: any) =>
        f.name === "Lovable" || f.name === "Default"
      );
      folderId = existing?.id ?? folders?.folders?.[0]?.id ?? null;
    } catch { /* ignore */ }
    if (!folderId) {
      const created = await brevo(`/contacts/folders`, {
        method: "POST",
        body: JSON.stringify({ name: "Lovable" }),
      });
      folderId = created?.id;
    }

    let listId: number | null = null;
    const lists = await brevo(`/contacts/lists?limit=50&offset=0`);
    const found = (lists?.lists || []).find((l: any) => l.name === LIST_NAME);
    if (found) {
      listId = found.id;
    } else {
      const createdList = await brevo(`/contacts/lists`, {
        method: "POST",
        body: JSON.stringify({ name: LIST_NAME, folderId }),
      });
      listId = createdList?.id;
    }
    if (!listId) throw new Error("Failed to resolve Brevo list id");

    // 3) Refresh contacts in the list (chunked)
    const importBatchSize = 500;
    let imported = 0;
    for (let i = 0; i < allContacts.length; i += importBatchSize) {
      const chunk = allContacts.slice(i, i + importBatchSize);
      const jsonBody = chunk.map((c) => ({
        email: c.email,
        attributes: {
          ...(c.firstName ? { FIRSTNAME: c.firstName } : {}),
          ...(c.lastName ? { LASTNAME: c.lastName } : {}),
        },
      }));
      await brevo(`/contacts/import`, {
        method: "POST",
        body: JSON.stringify({
          listIds: [listId],
          jsonBody,
          updateExistingContacts: true,
          emptyContactsAttributes: false,
        }),
      });
      imported += chunk.length;
    }

    // 4) Create or update the second-blast draft campaign
    const campaignPayload = {
      name: CAMPAIGN_NAME,
      subject: CAMPAIGN_SUBJECT,
      previewText: PREVIEW_TEXT,
      sender: { name: SENDER_NAME, email: SENDER_EMAIL },
      replyTo: SENDER_EMAIL,
      htmlContent: buildCampaignHtml(),
      recipients: { listIds: [listId] },
    };

    let campaignId: number | null = null;
    const existing = await brevo(`/emailCampaigns?type=classic&status=draft&limit=100&offset=0`);
    const match = (existing?.campaigns || []).find((c: any) => c?.name === CAMPAIGN_NAME);
    if (match?.id) {
      await brevo(`/emailCampaigns/${match.id}`, {
        method: "PUT",
        body: JSON.stringify(campaignPayload),
      });
      campaignId = match.id;
    } else {
      const campaign = await brevo(`/emailCampaigns`, {
        method: "POST",
        body: JSON.stringify(campaignPayload),
      });
      campaignId = campaign?.id ?? null;
    }

    return new Response(JSON.stringify({
      success: true,
      listId,
      listName: LIST_NAME,
      contactsRefreshed: imported,
      campaignId,
      campaignName: CAMPAIGN_NAME,
    }), { headers: corsHeaders });
  } catch (e) {
    console.error("sync-brevo-second-blast error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : String(e) }), {
      status: 500,
      headers: corsHeaders,
    });
  }
});
