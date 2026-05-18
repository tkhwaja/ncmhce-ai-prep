// Sync non-paid contacts into a Brevo list + create a draft announcement campaign
// for the Founders Offer. One-shot admin function — requires service-role auth.
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
const CAMPAIGN_NAME = "Founders Offer Announcement";
const CAMPAIGN_SUBJECT = "Your official founding member invite to The Exam Path";
const HERO_IMAGE_URL = "https://theexampath.com/founders-offer-hero.png";

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
  if (!res.ok) {
    throw new Error(`Brevo ${path} ${res.status}: ${text}`);
  }
  return json;
}

function buildCampaignHtml() {
  return `<!doctype html><html><body style="margin:0;padding:0;background:#ffffff;font-family:Inter,Arial,sans-serif;color:#0f172a">
  <div style="max-width:580px;margin:0 auto;padding:0 0 36px">
    <img src="${HERO_IMAGE_URL}" alt="The Exam Path — Your path to NCMHCE success" width="580" style="display:block;width:100%;max-width:580px;height:auto;border:0;outline:none;text-decoration:none;margin:0 0 24px" />
    <div style="padding:0 28px">
    <p style="font-size:12px;font-weight:700;color:#2563eb;letter-spacing:0.08em;margin:0 0 12px">FOUNDING MEMBER OFFER · ENDS MAY 31</p>
    <h1 style="font-size:28px;line-height:36px;font-weight:700;color:#0f172a;margin:0 0 16px">Your official founding member invite</h1>
    <p style="font-size:15px;line-height:24px;color:#475569;margin:0 0 14px">
      We're officially opening the founding member offer. Lock in a full year of The Exam Path
      <strong>before public subscription pricing launches at $79/month</strong>. One-time payment, no subscription, no auto-renewal.
    </p>
    <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:12px;padding:18px 20px;margin:20px 0">
      <p style="font-size:12px;font-weight:700;color:#2563eb;letter-spacing:0.04em;text-transform:uppercase;margin:0 0 6px">Your access window</p>
      <p style="font-size:22px;font-weight:800;color:#0f172a;margin:0 0 8px">May 31, 2026 → May 31, 2027</p>
      <p style="font-size:13px;line-height:20px;color:#334155;margin:0">
        The platform is free for everyone until May 31, 2026. Your paid year unlocks on that date.
      </p>
    </div>
    <h2 style="font-size:18px;line-height:26px;font-weight:700;color:#0f172a;margin:20px 0 12px">What's included</h2>
    <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:14px 16px;margin:0 0 12px">
      <p style="font-size:14px;line-height:22px;color:#334155;margin:0 0 8px">✓ Full access to every NCMHCE clinical case narrative</p>
      <p style="font-size:14px;line-height:22px;color:#334155;margin:0 0 8px">✓ Full-length, timed practice exams</p>
      <p style="font-size:14px;line-height:22px;color:#334155;margin:0 0 8px">✓ DSM-5-TR reference library + flashcards</p>
      <p style="font-size:14px;line-height:22px;color:#334155;margin:0 0 8px">✓ Domain analytics and progress tracking</p>
      <p style="font-size:14px;line-height:22px;color:#334155;margin:0">✓ Every new case added during your year</p>
    </div>
    <div style="margin:24px 0">
      <a href="https://theexampath.com/founding" style="background:#2563eb;color:#ffffff;font-size:14px;font-weight:700;text-decoration:none;padding:12px 22px;border-radius:10px;display:inline-block">Claim the $67 founding offer</a>
    </div>
    <p style="font-size:13px;line-height:20px;color:#64748b;margin:14px 0 0">
      After May 31, 2026, this offer is gone and standard $79/month pricing kicks in. If you've been on the fence — this is the window.
    </p>
    <p style="font-size:12px;line-height:18px;color:#94a3b8;margin:30px 0 0">
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
  let authorized = false;
  if (bearer && bearer === supabaseServiceKey) authorized = true;
  else if (bearer) {
    try {
      const payload = JSON.parse(atob(bearer.split(".")[1]));
      if (payload?.role === "service_role") authorized = true;
    } catch { /* */ }
  }
  if (!authorized) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401, headers: corsHeaders });
  }

  let body: any = {};
  try { body = await req.json(); } catch { /* allow empty */ }
  const dryRun = body?.dryRun === true;
  const createCampaign = body?.createCampaign !== false; // default true

  const supabase = createClient(supabaseUrl, supabaseServiceKey);

  try {
    // 1) Collect all emails we have
    const emails = new Map<string, { email: string; firstName?: string; lastName?: string }>();

    const PAID = ["early_access", "paid", "subscribed"];

    // profiles (exclude paid users)
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

    // free diagnostic leads
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

    // waitlist signups (RLS blocks select for normal users; we use service role)
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

    // Remove anyone in suppression list
    const { data: suppressed } = await supabase.from("suppressed_emails").select("email");
    for (const s of suppressed ?? []) {
      if (s.email) emails.delete(s.email.toLowerCase().trim());
    }

    // Also remove any email that belongs to a paid profile (in case lead/waitlist matches a paid account)
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

    // 2) Find or create the Brevo folder + list
    // Brevo requires a folder. Use folder ID 1 if it exists, else create one.
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

    // Find or create the list
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

    // 3) Import contacts in batches (Brevo import accepts up to 10k rows; we chunk at 500)
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

    // 4) Optionally create a draft email campaign targeted at the new list
    let campaignId: number | null = null;
    if (createCampaign) {
      const campaign = await brevo(`/emailCampaigns`, {
        method: "POST",
        body: JSON.stringify({
          name: CAMPAIGN_NAME,
          subject: CAMPAIGN_SUBJECT,
          sender: { name: SENDER_NAME, email: SENDER_EMAIL },
          replyTo: SENDER_EMAIL,
          htmlContent: buildCampaignHtml(),
          recipients: { listIds: [listId] },
          // No scheduledAt → stays as draft
        }),
      });
      campaignId = campaign?.id ?? null;
    }

    return new Response(JSON.stringify({
      success: true,
      listId,
      listName: LIST_NAME,
      folderId,
      contactsQueuedForImport: imported,
      campaignId,
      campaignName: createCampaign ? CAMPAIGN_NAME : null,
    }), { headers: corsHeaders });
  } catch (e) {
    console.error("sync-brevo-founders-list error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : String(e) }), {
      status: 500,
      headers: corsHeaders,
    });
  }
});
