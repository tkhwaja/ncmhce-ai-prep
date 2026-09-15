import { createClient } from 'npm:@supabase/supabase-js@2'
import { EmailAPIError } from 'npm:@lovable.dev/email-js@0.1.0'
import { sendTemplateEmail } from './transactional-email-templates/send-email.ts'

// Thin wrapper around the managed send helper that preserves this project's
// email_send_log reporting rows (used by the daily report and blast dedupe).
export interface SendAppEmailResult {
  ok: boolean
  sent: boolean
  reason?: 'recipient_suppressed'
  error?: string
}

export interface SendAppEmailOptions {
  templateData?: Record<string, unknown>
  idempotencyKey?: string
  replyTo?: string
}

function logClient() {
  return createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
  )
}

async function log(
  templateName: string,
  recipientEmail: string,
  status: 'sent' | 'suppressed' | 'failed',
  errorMessage?: string,
) {
  const { error } = await logClient().from('email_send_log').insert({
    message_id: null,
    template_name: templateName,
    recipient_email: recipientEmail,
    status,
    error_message: errorMessage ?? null,
  })
  if (error) {
    console.error('Failed to write email_send_log row', {
      templateName,
      status,
      code: error.code,
      message: error.message,
    })
  }
}

export async function sendAppEmail(
  templateName: string,
  recipientEmail: string,
  options: SendAppEmailOptions = {},
): Promise<SendAppEmailResult> {
  try {
    const result = await sendTemplateEmail(templateName, recipientEmail, {
      templateData: options.templateData as Record<string, any> | undefined,
      idempotencyKey: options.idempotencyKey,
      replyTo: options.replyTo,
    })

    if (result.sent) {
      await log(templateName, recipientEmail, 'sent')
      return { ok: true, sent: true }
    }

    await log(templateName, recipientEmail, 'suppressed', 'Recipient is suppressed')
    return { ok: true, sent: false, reason: 'recipient_suppressed' }
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    console.error('App email send failed', { templateName, error: message })
    await log(templateName, recipientEmail, 'failed', message.slice(0, 1000))
    return { ok: false, sent: false, error: message }
  }
}
