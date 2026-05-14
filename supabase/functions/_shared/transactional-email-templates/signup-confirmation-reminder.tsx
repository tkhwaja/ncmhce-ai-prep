/// <reference types="npm:@types/react@18.3.1" />

import * as React from 'npm:react@18.3.1'
import {
  Body, Button, Container, Head, Heading, Html, Img, Preview, Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = 'The Exam Path'

interface SignupConfirmationReminderProps {
  confirmUrl?: string
  name?: string
}

const SignupConfirmationReminderEmail = ({
  confirmUrl = 'https://www.theexampath.com/login',
  name,
}: SignupConfirmationReminderProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>You're one click away from your {SITE_NAME} account.</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img src="https://www.theexampath.com/email-header.png" alt="The Exam Path" width="560" style={headerImg} />
        <Heading style={h1}>You're almost in — just one click left</Heading>
        <Text style={text}>{name ? `Hi ${name},` : 'Hi there,'}</Text>
        <Text style={text}>
          You started creating an account at <strong>{SITE_NAME}</strong> recently, but it looks like
          your email was never confirmed — so you can't log in yet.
        </Text>
        <Text style={text}>
          Click the button below to confirm your email and jump straight into your account. No need to
          enter your password — this link logs you in instantly.
        </Text>
        <Button style={button} href={confirmUrl}>Confirm my email & sign in</Button>
        <Text style={text}>
          If the button doesn't work, copy and paste this link into your browser:<br />
          <a href={confirmUrl} style={link}>{confirmUrl}</a>
        </Text>
        <Text style={text}>
          Having trouble? Just reply to this email or write to{' '}
          <a href="mailto:support@theexampath.com" style={link}>support@theexampath.com</a> and we'll help you get in personally.
        </Text>
        <Text style={signoff}>Talk soon,<br />The {SITE_NAME.replace(/^The /, '')} Team</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: SignupConfirmationReminderEmail,
  subject: 'Finish setting up your Exam Path account',
  displayName: 'Signup confirmation reminder',
  previewData: { confirmUrl: 'https://www.theexampath.com/login', name: 'Jane' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: "'Inter', Arial, sans-serif" }
const container = { padding: '40px 28px', maxWidth: '560px', margin: '0 auto' }
const headerImg = { width: '100%', maxWidth: '560px', height: 'auto', display: 'block', borderRadius: '8px', margin: '0 0 24px' }
const h1 = { fontSize: '24px', fontWeight: 700 as const, color: '#111827', margin: '0 0 20px', lineHeight: '1.3' }
const text = { fontSize: '15px', color: '#374151', lineHeight: '1.7', margin: '0 0 18px' }
const button = { backgroundColor: 'hsl(217, 91%, 60%)', color: '#ffffff', fontSize: '15px', fontWeight: 600 as const, borderRadius: '12px', padding: '12px 24px', textDecoration: 'none', display: 'inline-block', margin: '8px 0 22px' }
const signoff = { fontSize: '15px', color: '#374151', lineHeight: '1.7', margin: '24px 0 0' }
const link = { color: 'hsl(217, 91%, 60%)', textDecoration: 'underline', wordBreak: 'break-all' as const }
