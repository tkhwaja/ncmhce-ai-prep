// One-off admin function: creates a DRAFT email campaign in Brevo for the
// users who got stuck on checkout during the June 7-10, 2026 outage.
//
// Usage:
//   POST /functions/v1/create-recovery-campaign
//   Body (optional): { "emails": [{ "email": "...", "firstName": "..." }, ...] }
//   If body is omitted, uses the hard-coded list of 7 affected users.
//
// Returns: { listId, campaignId, recipientCount, brevoCampaignUrl }
// You then open the campaign in Brevo, review, and click Send.

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Content-Type': 'application/json',
}

const GATEWAY = 'https://connector-gateway.lovable.dev/brevo'
const LIST_NAME = 'Checkout Recovery — June 2026'
const CAMPAIGN_NAME = 'Checkout recovery — June 2026'
const SUBJECT = 'Quick fix — checkout is working again on The Exam Path'
const SENDER = { name: 'The Exam Path', email: 'support@theexampath.com' }
const REPLY_TO = 'support@theexampath.com'

// Default affected users (June 7-10, 2026 checkout outage)
const DEFAULT_RECIPIENTS: { email: string; firstName: string }[] = [
  { email: 'michelleagar290@yahoo.com', firstName: 'Michelle' },
  { email: 'dr.robertcarmona@gmail.com', firstName: 'Robert' },
  { email: 'mikah116@yahoo.com', firstName: 'Tamika' },
  { email: 'stephanie.venhaus@gmail.com', firstName: 'Stephanie' },
  { email: 'latasha.lonian@gmail.com', firstName: 'Tasha' },
  { email: 'tajatre2@gmail.com', firstName: 'Tarsha' },
  { email: 'monet.eason@gmail.com', firstName: 'Monet' },
]

function buildHtml(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>${SUBJECT}</title>
</head>
<body style="margin:0;padding:0;background-color:#ffffff;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;color:#1f2937;line-height:1.6;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#ffffff;">
    <tr><td align="center" style="padding:32px 16px;">
      <table role="presentation" width="560" cellpadding="0" cellspacing="0" border="0" style="max-width:560px;width:100%;">
        <tr><td style="font-size:16px;color:#1f2937;">
          <p style="margin:0 0 16px 0;">Hi {{ contact.FIRSTNAME | default: "there" }},</p>

          <p style="margin:0 0 16px 0;">I'm reaching out personally because I noticed you created an account on The Exam Path recently and may have run into an error when trying to subscribe to NCMHCE Pro.</p>

          <p style="margin:0 0 16px 0;">A backend provider update on June 8 broke our checkout page for a few days. I'm really sorry — that's on me, and I know how frustrating it is to be ready to start studying and hit a wall.</p>

          <p style="margin:0 0 16px 0;">The good news: it's fixed, and checkout is fully working again. As a thank-you for your patience, here's <strong>20% off your first 3 months</strong>: use code <strong style="background:#fef3c7;padding:2px 8px;border-radius:4px;font-family:monospace;">WELCOME20</strong> at checkout.</p>

          <p style="margin:24px 0;text-align:center;">
            <a href="https://www.theexampath.com/pricing" style="display:inline-block;background:#1f2937;color:#ffffff;text-decoration:none;padding:12px 24px;border-radius:8px;font-weight:600;">Resume checkout →</a>
          </p>

          <p style="margin:0 0 16px 0;">If you ran into any other issues — or just have questions about whether NCMHCE Pro is right for you — hit reply. I read every message.</p>

          <p style="margin:0 0 8px 0;">Thanks for giving us a try,</p>
          <p style="margin:0;">The Exam Path team</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`
}

async function brevo(path: string, method: string, body?: unknown): Promise<{ status: number; json: any }> {
  const lovableKey = Deno.env.get('LOVABLE_API_KEY')
  const brevoKey = Deno.env.get('BREVO_API_KEY')
  if (!lovableKey) throw new Error('LOVABLE_API_KEY missing')
  if (!brevoKey) throw new Error('BREVO_API_KEY missing')

  const r = await fetch(`${GATEWAY}${path}`, {
    method,
    headers: {
      'Authorization': `Bearer ${lovableKey}`,
      'X-Connection-Api-Key': brevoKey,
      'Content-Type': 'application/json',
      'accept': 'application/json',
    },
    ...(body !== undefined && { body: JSON.stringify(body) }),
  })
  const text = await r.text()
  let json: any = null
  try { json = text ? JSON.parse(text) : null } catch { json = { raw: text } }
  return { status: r.status, json }
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response(null, { headers: corsHeaders })

  try {
    let recipients = DEFAULT_RECIPIENTS
    if (req.method === 'POST') {
      try {
        const body = await req.json()
        if (Array.isArray(body?.emails) && body.emails.length > 0) {
          recipients = body.emails.map((e: any) => ({
            email: String(e.email).toLowerCase().trim(),
            firstName: String(e.firstName ?? '').trim(),
          })).filter((e: any) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.email))
        }
      } catch { /* no body — use defaults */ }
    }

    if (recipients.length === 0) {
      return new Response(JSON.stringify({ error: 'No valid recipients' }), { status: 400, headers: corsHeaders })
    }

    // 1. Find or create a Brevo folder (optional, skip — use root) and the list.
    let listId: number | null = null
    {
      // Look for an existing list with this name across folders.
      const { json } = await brevo('/contacts/lists?limit=50&offset=0', 'GET')
      const existing = (json?.lists || []).find((l: any) => l.name === LIST_NAME)
      if (existing) listId = existing.id
    }

    if (!listId) {
      // Need a folderId. Get the first folder or create one.
      const { json: foldersJson } = await brevo('/contacts/folders?limit=10&offset=0', 'GET')
      let folderId: number | undefined = foldersJson?.folders?.[0]?.id
      if (!folderId) {
        const { json: newFolder } = await brevo('/contacts/folders', 'POST', { name: 'Lovable' })
        folderId = newFolder?.id
      }
      const { status, json } = await brevo('/contacts/lists', 'POST', { name: LIST_NAME, folderId })
      if (status >= 300 || !json?.id) {
        return new Response(JSON.stringify({ error: 'Failed to create Brevo list', detail: json }), { status: 502, headers: corsHeaders })
      }
      listId = json.id
    }

    // 2. Upsert each contact and add to the list.
    const contactResults: any[] = []
    for (const r of recipients) {
      const { status, json } = await brevo('/contacts', 'POST', {
        email: r.email,
        attributes: { FIRSTNAME: r.firstName || '' },
        listIds: [listId],
        updateEnabled: true,
      })
      contactResults.push({ email: r.email, status, id: json?.id ?? null, error: status >= 300 ? json : null })
    }

    // 3. Create the draft campaign (no scheduledAt = draft).
    const htmlContent = buildHtml()
    const { status: campStatus, json: campJson } = await brevo('/emailCampaigns', 'POST', {
      name: CAMPAIGN_NAME,
      subject: SUBJECT,
      sender: SENDER,
      replyTo: REPLY_TO,
      htmlContent,
      recipients: { listIds: [listId] },
      inlineImageActivation: false,
    })

    if (campStatus >= 300 || !campJson?.id) {
      return new Response(JSON.stringify({
        error: 'Failed to create Brevo campaign',
        detail: campJson,
        listId,
        contactResults,
      }), { status: 502, headers: corsHeaders })
    }

    return new Response(JSON.stringify({
      ok: true,
      listId,
      listName: LIST_NAME,
      campaignId: campJson.id,
      campaignName: CAMPAIGN_NAME,
      recipientCount: recipients.length,
      brevoCampaignUrl: `https://app.brevo.com/camp/template/${campJson.id}/message-setup`,
      contactResults,
    }, null, 2), { status: 200, headers: corsHeaders })
  } catch (e) {
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : String(e) }), { status: 500, headers: corsHeaders })
  }
})
