/// <reference types="npm:@types/react@18.3.1" />

import * as React from 'npm:react@18.3.1'
import {
  Body, Button, Container, Head, Heading, Html, Preview, Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = 'The Exam Path'

interface SignupRecoveryApologyProps {
  recoveryUrl?: string
}

const SignupRecoveryApologyEmail = ({
  recoveryUrl = 'https://www.theexampath.com/forgot-password',
}: SignupRecoveryApologyProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>A quick apology and a one-click link to finish setting up your {SITE_NAME} account.</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={logo}>The Exam<span style={logoAccent}> Path</span></Text>
        <Heading style={h1}>We're sorry — your account is ready now</Heading>
        <Text style={text}>Hi there,</Text>
        <Text style={text}>
          I'm reaching out personally to apologize. You recently tried to sign up for <strong>{SITE_NAME}</strong> and
          ran into trouble completing the process. Some new users were unable to finish signing up over the past
          few days, and I'm sorry you were one of them.
        </Text>
        <Text style={text}>
          The good news: <strong>the issue is fully fixed</strong>, and your spot is waiting for you.
        </Text>
        <Text style={text}>
          To finish setting up your account, just click the button below to set your password and jump straight in:
        </Text>
        <Button style={button} href={recoveryUrl}>Finish setting up my account</Button>
        <Text style={text}>
          If you have any trouble at all, simply reply to this email and I'll personally make sure you get in.
        </Text>
        <Text style={text}>
          Thank you for your patience — and for trusting us with your NCMHCE prep. We're working hard to make this
          the calmest, clearest, most effective study experience out there, and I don't take lightly that you almost
          didn't get the chance to try it.
        </Text>
        <Text style={signoff}>Warmly,<br />The {SITE_NAME} Team</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: SignupRecoveryApologyEmail,
  subject: "We're sorry — your account is ready now",
  displayName: 'Signup recovery apology',
  previewData: { recoveryUrl: 'https://www.theexampath.com/forgot-password' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: "'Inter', Arial, sans-serif" }
const container = { padding: '40px 28px', maxWidth: '560px', margin: '0 auto' }
const logo = { fontSize: '18px', fontWeight: 700 as const, color: '#111827', margin: '0 0 24px', letterSpacing: '-0.3px' }
const logoAccent = { color: 'hsl(217, 91%, 60%)' }
const h1 = { fontSize: '24px', fontWeight: 700 as const, color: '#111827', margin: '0 0 20px', lineHeight: '1.3' }
const text = { fontSize: '15px', color: '#374151', lineHeight: '1.7', margin: '0 0 18px' }
const button = { backgroundColor: 'hsl(217, 91%, 60%)', color: '#ffffff', fontSize: '15px', fontWeight: 600 as const, borderRadius: '12px', padding: '12px 24px', textDecoration: 'none', display: 'inline-block', margin: '8px 0 22px' }
const signoff = { fontSize: '15px', color: '#374151', lineHeight: '1.7', margin: '24px 0 0' }
