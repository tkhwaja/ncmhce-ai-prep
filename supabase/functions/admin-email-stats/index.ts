import { createClient } from 'npm:@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const ADMIN_EMAILS = ['tahahareb18@gmail.com', 'tahahareb7@gmail.com']

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response(null, { headers: corsHeaders })

  const supabaseUrl = Deno.env.get('SUPABASE_URL')!
  const anonKey = Deno.env.get('SUPABASE_ANON_KEY')!
  const serviceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!

  const authHeader = req.headers.get('Authorization') || ''
  if (!authHeader.startsWith('Bearer ')) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } })
  }

  const userClient = createClient(supabaseUrl, anonKey, { global: { headers: { Authorization: authHeader } } })
  const { data: userData } = await userClient.auth.getUser()
  const email = userData?.user?.email?.toLowerCase()

  if (!email || !ADMIN_EMAILS.includes(email)) {
    return new Response(JSON.stringify({ error: 'Forbidden' }), { status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' } })
  }

  let filter = 'all'
  try {
    const body = await req.json()
    if (body?.filter) filter = body.filter
  } catch { /* ignore */ }

  const admin = createClient(supabaseUrl, serviceKey)

  let query = admin
    .from('email_send_log')
    .select('id, message_id, template_name, recipient_email, status, error_message, created_at')
    .order('created_at', { ascending: false })
    .limit(200)

  if (filter === 'failed') {
    query = query.in('status', ['failed', 'dlq', 'bounced', 'complained'])
  } else if (filter === 'sent') {
    query = query.eq('status', 'sent')
  }

  const { data, error } = await query
  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } })
  }

  return new Response(JSON.stringify({ rows: data ?? [] }), { headers: { ...corsHeaders, 'Content-Type': 'application/json' } })
})
