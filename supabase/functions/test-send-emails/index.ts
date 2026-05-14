// Temporary helper for sending the two test emails. Safe to delete after use.
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response(null, { headers: corsHeaders })

  const supabaseUrl = Deno.env.get('SUPABASE_URL')!
  const serviceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!

  const body = await req.json().catch(() => ({})) as { email?: string }
  const email = body.email || 'tahahareb7@gmail.com'
  const stamp = Date.now()

  const send = (templateName: string, templateData: Record<string, unknown>) =>
    fetch(`${supabaseUrl}/functions/v1/send-transactional-email`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${serviceKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        templateName,
        recipientEmail: email,
        idempotencyKey: `manual-${templateName}-${email}-${stamp}`,
        templateData,
      }),
    }).then(async (r) => ({ status: r.status, body: await r.text() }))

  const a = await send('signup-recovery-apology', {
    signupUrl: 'https://www.theexampath.com/signup',
  })
  const b = await send('free-diagnostic-breakdown', {
    fullName: 'Taha',
    totalScore: 72,
    correctAnswers: 13,
    totalQuestions: 18,
    strongestDomain: 'Assessment & Diagnosis',
    weakestDomain: 'Treatment Planning',
  })

  return new Response(JSON.stringify({ emailA: a, emailB: b }), {
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })
})
