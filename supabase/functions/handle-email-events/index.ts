import { createEmailWebhookHandler } from 'npm:@lovable.dev/email-js@0.1.0'
import { createClient } from 'npm:@supabase/supabase-js@2'

const supabaseUrl = Deno.env.get('SUPABASE_URL')!
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!

function client() {
  return createClient(supabaseUrl, supabaseServiceKey)
}

// Notification-only bookkeeping: Lovable enforces suppression at send time.
// These rows keep the project's historical email reporting intact.
async function record(
  eventId: string,
  recipient: string,
  reason: 'bounce' | 'complaint' | 'unsubscribe',
  logStatus: 'bounced' | 'complained' | 'suppressed',
  logMessage: string,
  messageId: string | null,
) {
  const supabase = client()
  const email = recipient.toLowerCase()

  const { error: suppressError } = await supabase
    .from('suppressed_emails')
    .upsert({ email, reason, metadata: null }, { onConflict: 'email' })

  if (suppressError) {
    console.error('Failed to record suppression', {
      event_id: eventId,
      code: suppressError.code,
      message: suppressError.message,
    })
    throw new Error('Failed to record suppression')
  }

  const { error: logError } = await supabase.from('email_send_log').insert({
    message_id: messageId,
    template_name: 'system',
    recipient_email: email,
    status: logStatus,
    error_message: logMessage,
    metadata: null,
  })

  if (logError) {
    console.error('Failed to record email event log', {
      event_id: eventId,
      code: logError.code,
      message: logError.message,
    })
    throw new Error('Failed to record email event log')
  }
}

function messageIdOf(data: Record<string, unknown>): string | null {
  const id = data?.message_id
  return typeof id === 'string' && id ? id : null
}

const handler = createEmailWebhookHandler({
  apiKey: Deno.env.get('LOVABLE_API_KEY')!,
  on: {
    'email.bounced': async (event) => {
      await record(
        event.event_id,
        event.data.recipient,
        'bounce',
        'bounced',
        'Permanent bounce — email address is invalid or rejected',
        messageIdOf(event.data as Record<string, unknown>),
      )
    },
    'email.complaint': async (event) => {
      await record(
        event.event_id,
        event.data.recipient,
        'complaint',
        'complained',
        'Spam complaint — recipient marked email as spam',
        messageIdOf(event.data as Record<string, unknown>),
      )
    },
    'email.unsubscribed': async (event) => {
      await record(
        event.event_id,
        event.data.recipient,
        'unsubscribe',
        'suppressed',
        'Recipient unsubscribed',
        messageIdOf(event.data as Record<string, unknown>),
      )
    },
  },
})

Deno.serve((req) => handler(req))
