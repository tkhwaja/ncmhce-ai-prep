/// <reference types="npm:@types/react@18.3.1" />

import * as React from 'npm:react@18.3.1'
import {
  Body, Button, Container, Head, Heading, Html, Img, Preview, Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = 'The Exam Path'

interface SignupRecoveryApologyProps {
  signupUrl?: string
  name?: string
}

const SignupRecoveryApologyEmail = ({
  signupUrl = 'https://www.theexampath.com/signup',
  name,
}: SignupRecoveryApologyProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>A quick apology — signup is fixed and your spot at {SITE_NAME} is ready.</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img src="https://www.theexampath.com/email-header.png" alt="The Exam Path" width="560" style={headerImg} />
        <Heading style={h1}>We're sorry — signup is fixed now</Heading>
        <Text style={text}>{name ? `Hi ${name},` : 'Hi there,'}</Text>
        <Text style={text}>
          You recently tried out our free diagnostic case at <strong>{SITE_NAME}</strong> — thank you. If you also
          tried to create an account in the days that followed and couldn't get through, I'm reaching out personally
          to apologize. A bug in our signup flow blocked some new users over the past few days.
        </Text>
        <Text style={text}>
          <strong>The issue is fully fixed.</strong> If you weren't able to create an account before, just click the
          button below and you'll be able to sign up and start exploring the platform right away.
        </Text>
        <Button style={button} href={signupUrl}>Create my account</Button>
        <Text style={text}>
          If you run into any trouble at all, simply reply to this email and we'll personally make sure you get in.
        </Text>
        <Text style={text}>
          Thank you for your patience — and for trusting us with your NCMHCE prep.
        </Text>
        <Text style={signoff}>Warmly,<br />The {SITE_NAME} Team</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: SignupRecoveryApologyEmail,
  subject: "We're sorry — signup is fixed, your spot is ready",
  displayName: 'Signup recovery apology',
  previewData: { signupUrl: 'https://www.theexampath.com/signup', name: 'Jane' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: "'Inter', Arial, sans-serif" }
const container = { padding: '40px 28px', maxWidth: '560px', margin: '0 auto' }
const headerImg = { width: '100%', maxWidth: '560px', height: 'auto', display: 'block', borderRadius: '8px', margin: '0 0 24px' }
const h1 = { fontSize: '24px', fontWeight: 700 as const, color: '#111827', margin: '0 0 20px', lineHeight: '1.3' }
const text = { fontSize: '15px', color: '#374151', lineHeight: '1.7', margin: '0 0 18px' }
const button = { backgroundColor: 'hsl(217, 91%, 60%)', color: '#ffffff', fontSize: '15px', fontWeight: 600 as const, borderRadius: '12px', padding: '12px 24px', textDecoration: 'none', display: 'inline-block', margin: '8px 0 22px' }
const signoff = { fontSize: '15px', color: '#374151', lineHeight: '1.7', margin: '24px 0 0' }
