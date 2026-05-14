/// <reference types="npm:@types/react@18.3.1" />

import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Text, Hr,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface CancellationFeedbackProps {
  userEmail?: string
  userName?: string
  userId?: string
  reason?: string
  details?: string
  subscriptionStatus?: string
  accessExpiresAt?: string
}

const CancellationFeedbackEmail = ({
  userEmail = 'unknown@example.com',
  userName = '',
  userId = '',
  reason = '(none provided)',
  details = '',
  subscriptionStatus = 'unknown',
  accessExpiresAt = '',
}: CancellationFeedbackProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>Cancellation feedback from {userEmail}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Subscription cancellation feedback</Heading>
        <Text style={text}><strong>User:</strong> {userName || '(no name)'} &lt;{userEmail}&gt;</Text>
        <Text style={text}><strong>User ID:</strong> {userId}</Text>
        <Text style={text}><strong>Subscription status:</strong> {subscriptionStatus}</Text>
        {accessExpiresAt ? (
          <Text style={text}><strong>Access expires at:</strong> {accessExpiresAt}</Text>
        ) : null}
        <Hr />
        <Text style={text}><strong>Reason:</strong> {reason}</Text>
        {details ? (
          <>
            <Text style={text}><strong>Additional details:</strong></Text>
            <Text style={textBlock}>{details}</Text>
          </>
        ) : null}
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: CancellationFeedbackEmail,
  subject: (data: Record<string, any>) =>
    `Cancellation feedback — ${data.userEmail || 'user'}`,
  to: 'support@theexampath.com',
  displayName: 'Subscription cancellation feedback (internal)',
  previewData: {
    userEmail: 'jane@example.com',
    userName: 'Jane Doe',
    userId: 'abc-123',
    reason: 'Too expensive',
    details: 'Loved the content but budget is tight right now.',
    subscriptionStatus: 'active',
    accessExpiresAt: '2027-05-31',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: "'Inter', Arial, sans-serif" }
const container = { padding: '32px 24px', maxWidth: '560px', margin: '0 auto' }
const h1 = { fontSize: '20px', fontWeight: 700 as const, color: '#111827', margin: '0 0 16px' }
const text = { fontSize: '14px', color: '#374151', lineHeight: '1.6', margin: '0 0 8px' }
const textBlock = { fontSize: '14px', color: '#374151', lineHeight: '1.6', margin: '0 0 8px', whiteSpace: 'pre-wrap' as const, padding: '12px', background: '#f9fafb', borderRadius: '6px' }
