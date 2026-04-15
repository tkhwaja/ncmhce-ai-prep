import { createClient } from 'npm:@supabase/supabase-js@2'
import { z } from 'npm:zod@3.23.8'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const BodySchema = z.object({
  email: z.string().trim().email(),
})

const jsonResponse = (data: Record<string, unknown>, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  if (req.method !== 'POST') {
    return jsonResponse({ error: 'Method not allowed' }, 405)
  }

  const supabaseUrl = Deno.env.get('SUPABASE_URL')
  const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')

  if (!supabaseUrl) {
    return jsonResponse({ error: 'SUPABASE_URL is not configured' }, 500)
  }

  if (!supabaseServiceKey) {
    return jsonResponse({ error: 'SUPABASE_SERVICE_ROLE_KEY is not configured' }, 500)
  }

  const body = BodySchema.safeParse(await req.json().catch(() => null))

  if (!body.success) {
    return jsonResponse(
      { error: body.error.flatten().fieldErrors },
      400,
    )
  }

  const email = body.data.email.toLowerCase()
  const supabase = createClient(supabaseUrl, supabaseServiceKey)

  const { error: signupError } = await supabase
    .from('waitlist_signups')
    .insert({ email })

  if (signupError && signupError.code !== '23505') {
    console.error('Waitlist signup insert failed', { email, error: signupError })
    return jsonResponse({ error: 'Failed to join waitlist' }, 500)
  }

  const signupId = crypto.randomUUID()
  const sendResponse = await fetch(`${supabaseUrl}/functions/v1/send-transactional-email`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${supabaseServiceKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      templateName: 'waitlist-confirmation',
      recipientEmail: email,
      idempotencyKey: `waitlist-confirm-${signupId}`,
      templateData: { email },
    }),
  })

  if (!sendResponse.ok) {
    const errorText = await sendResponse.text()
    console.error('Waitlist confirmation email failed', {
      email,
      status: sendResponse.status,
      error: errorText,
    })
    return jsonResponse({ error: 'Joined waitlist but failed to queue confirmation email' }, 500)
  }

  await sendResponse.text()

  return jsonResponse({ success: true, alreadyJoined: signupError?.code === '23505' })
})
