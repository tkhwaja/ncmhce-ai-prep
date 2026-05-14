// Public, unauthenticated endpoint that returns coarse signup status for an email.
// Used by /signup to detect duplicate / unconfirmed accounts BEFORE creating a new
// signup row (which would invalidate prior confirmation links).
//
// Returns one of: { status: 'new' | 'unconfirmed' | 'confirmed' }
// Never leaks user details. Per-IP rate limited to deter enumeration.
import { createClient } from 'npm:@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

// Simple in-memory rate limit (per warm instance). Resets on cold start; good enough
// to deter casual scraping without adding a DB dependency.
const RATE_LIMIT = 15 // requests per window
const WINDOW_MS = 60 * 1000
const hits = new Map<string, { count: number; reset: number }>()

function rateLimit(ip: string): boolean {
  const now = Date.now()
  const entry = hits.get(ip)
  if (!entry || entry.reset < now) {
    hits.set(ip, { count: 1, reset: now + WINDOW_MS })
    return true
  }
  if (entry.count >= RATE_LIMIT) return false
  entry.count++
  return true
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response(null, { headers: corsHeaders })
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'method_not_allowed' }), {
      status: 405, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim()
    || req.headers.get('cf-connecting-ip')
    || 'unknown'
  if (!rateLimit(ip)) {
    return new Response(JSON.stringify({ error: 'rate_limited' }), {
      status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }

  let body: { email?: string }
  try {
    body = await req.json()
  } catch {
    return new Response(JSON.stringify({ error: 'invalid_json' }), {
      status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }

  const email = (body.email || '').trim().toLowerCase()
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return new Response(JSON.stringify({ error: 'invalid_email' }), {
      status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }

  const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
  )

  // Page through users to find a match (Supabase admin API has no direct email lookup).
  let page = 1
  while (true) {
    const { data, error } = await supabase.auth.admin.listUsers({ page, perPage: 1000 })
    if (error) {
      return new Response(JSON.stringify({ error: 'lookup_failed' }), {
        status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }
    const found = data.users.find((u) => u.email?.toLowerCase() === email)
    if (found) {
      const status = found.email_confirmed_at ? 'confirmed' : 'unconfirmed'
      return new Response(JSON.stringify({ status }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }
    if (data.users.length < 1000) break
    page++
  }

  return new Response(JSON.stringify({ status: 'new' }), {
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })
})
