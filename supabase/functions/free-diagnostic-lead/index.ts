import { createClient } from 'npm:@supabase/supabase-js@2'
import { z } from 'npm:zod@3.23.8'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const domainScoresSchema = z.record(z.string(), z.number().int().min(0).max(100))

const answerBreakdownSchema = z.array(
  z.object({
    questionId: z.string().trim().min(1).max(120),
    questionNumber: z.number().int().min(1).max(100),
    domain: z.string().trim().min(1).max(120),
    prompt: z.string().trim().min(1).max(2000),
    selectedAnswer: z.string().trim().min(1).max(500),
    correctAnswer: z.string().trim().min(1).max(500),
    explanation: z.string().trim().min(1).max(4000),
    isCorrect: z.boolean(),
  }),
).min(1)

const bodySchema = z.object({
  fullName: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(255),
  narrativeId: z.string().trim().min(1).max(120),
  totalScore: z.number().int().min(0).max(100),
  correctAnswers: z.number().int().min(0).max(100),
  totalQuestions: z.number().int().min(1).max(100),
  domainScores: domainScoresSchema,
  answerBreakdown: answerBreakdownSchema,
})

const jsonResponse = (data: Record<string, unknown>, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })

const getDomainSummary = (domainScores: Record<string, number>) => {
  const entries = Object.entries(domainScores)

  if (!entries.length) {
    return { strongestDomain: undefined, weakestDomain: undefined }
  }

  const sorted = [...entries].sort((a, b) => b[1] - a[1])

  return {
    strongestDomain: sorted[0]?.[0],
    weakestDomain: sorted[sorted.length - 1]?.[0],
  }
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  if (req.method !== 'POST') {
    return jsonResponse({ error: 'Method not allowed' }, 405)
  }

  const supabaseUrl = Deno.env.get('SUPABASE_URL')
  const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')

  if (!supabaseUrl || !supabaseServiceKey) {
    return jsonResponse({ error: 'Server configuration error' }, 500)
  }

  const parsedBody = bodySchema.safeParse(await req.json().catch(() => null))

  if (!parsedBody.success) {
    return jsonResponse({ error: parsedBody.error.flatten().fieldErrors }, 400)
  }

  const payload = parsedBody.data
  const supabase = createClient(supabaseUrl, supabaseServiceKey)

  const { data: insertedLead, error: insertError } = await supabase
    .from('free_diagnostic_leads')
    .insert({
      full_name: payload.fullName,
      email: payload.email.toLowerCase(),
      narrative_id: payload.narrativeId,
      total_score: payload.totalScore,
      correct_answers: payload.correctAnswers,
      total_questions: payload.totalQuestions,
      domain_scores: payload.domainScores,
      answer_breakdown: payload.answerBreakdown,
    })
    .select('id')
    .single()

  if (insertError || !insertedLead) {
    console.error('Failed to save free diagnostic lead', { error: insertError })
    return jsonResponse({ error: 'Failed to save diagnostic result' }, 500)
  }

  const { strongestDomain, weakestDomain } = getDomainSummary(payload.domainScores)

  const sendResponse = await fetch(`${supabaseUrl}/functions/v1/send-transactional-email`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${supabaseServiceKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      templateName: 'free-diagnostic-breakdown',
      recipientEmail: payload.email.toLowerCase(),
      idempotencyKey: `free-diagnostic-${insertedLead.id}`,
      templateData: {
        fullName: payload.fullName,
        totalScore: payload.totalScore,
        correctAnswers: payload.correctAnswers,
        totalQuestions: payload.totalQuestions,
        strongestDomain,
        weakestDomain,
        domainScores: payload.domainScores,
        answerBreakdown: payload.answerBreakdown,
      },
    }),
  })

  if (!sendResponse.ok) {
    const errorText = await sendResponse.text()
    console.error('Failed to queue free diagnostic email', {
      leadId: insertedLead.id,
      status: sendResponse.status,
      error: errorText,
    })
    return jsonResponse({ error: 'Result saved but email delivery could not be queued yet' }, 500)
  }

  await supabase
    .from('free_diagnostic_leads')
    .update({ email_sent_at: new Date().toISOString() })
    .eq('id', insertedLead.id)

  return jsonResponse({ success: true, leadId: insertedLead.id })
})
