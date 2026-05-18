import * as React from 'npm:react@18.3.1'
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = 'The Exam Path'
const DASHBOARD_URL = 'https://theexampath.com/dashboard'

interface FoundersOfferConfirmationProps {
  fullName?: string
}

const benefits = [
  'Full access to every NCMHCE clinical case narrative',
  'Full-length, timed practice exams',
  'DSM-5-TR reference library + flashcards',
  'Domain analytics and progress tracking',
  'Every new case added during your year',
]

const tips = [
  'Start with the Free Diagnostic Case to anchor your baseline — no pressure, just signal.',
  'Block 25 minutes a day for one narrative + its breakdown. Consistency beats marathons.',
  'When you miss a question, read the rationale twice — once for the right answer, once for why the trap was tempting.',
  'Use the DSM-5-TR flashcards in short bursts between cases to lock in diagnostic patterns.',
]

const FoundersOfferConfirmationEmail = ({ fullName }: FoundersOfferConfirmationProps) => {
  const firstName = fullName ? fullName.split(' ')[0] : null
  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>You're in. Welcome to the founding members of {SITE_NAME}.</Preview>
      <Body style={main}>
        <Container style={container}>
          <Text style={eyebrow}>FOUNDING MEMBER · CONFIRMED</Text>
          <Heading as="h1" style={h1}>
            {firstName ? `Thank you, ${firstName} — you're in.` : "Thank you — you're in."}
          </Heading>

          <Text style={text}>
            This means a lot. You backed {SITE_NAME} before public pricing launched, and we don't
            take that lightly. Your founding membership is officially confirmed.
          </Text>

          <Section style={accessCard}>
            <Text style={accessEyebrow}>Your access window</Text>
            <Text style={accessHeadline}>May 31, 2026 → May 31, 2027</Text>
            <Text style={accessSub}>
              One-time payment. No subscription. No auto-renewal. The platform stays free for
              everyone until May 31, 2026 — your paid year unlocks on that date with everything below.
            </Text>
          </Section>

          <Heading as="h2" style={h2}>What's included</Heading>
          <Section style={listCard}>
            {benefits.map((b) => (
              <Text key={b} style={bulletText}>✓ {b}</Text>
            ))}
          </Section>

          <Hr style={divider} />

          <Heading as="h2" style={h2}>A few tips to get the most out of it</Heading>
          <Section style={listCard}>
            {tips.map((t, i) => (
              <Text key={i} style={bulletText}>• {t}</Text>
            ))}
          </Section>

          <Hr style={divider} />

          <Heading as="h2" style={h2}>Good luck on your exam</Heading>
          <Text style={text}>
            The NCMHCE is hard, but it's beatable when you train your clinical reasoning instead of
            memorizing. That's the entire reason this platform exists. We're rooting for you, and
            we're going to keep shipping new cases, tools, and rationales throughout your year.
          </Text>

          <Button href={DASHBOARD_URL} style={button}>Go to your dashboard</Button>

          <Text style={text}>
            Questions, feedback, or want to tell us what to build next? Reply to this email or reach
            us at <a href="mailto:support@theexampath.com" style={link}>support@theexampath.com</a>{' '}
            — founding members get our direct attention.
          </Text>

          <Text style={signoff}>
            Truly grateful,<br />
            The {SITE_NAME} Team
          </Text>

          <Text style={footer}>
            You received this because you purchased the Founding Member offer on {SITE_NAME}.
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

export const template = {
  component: FoundersOfferConfirmationEmail,
  subject: "You're in — welcome to founding members of The Exam Path",
  displayName: 'Founders offer confirmation',
  previewData: { fullName: 'Jordan Lee' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: "'Inter', Arial, sans-serif" }
const container = { padding: '36px 28px', maxWidth: '580px', margin: '0 auto' }
const eyebrow = { fontSize: '12px', lineHeight: '18px', fontWeight: '700' as const, color: '#2563eb', letterSpacing: '0.08em', margin: '0 0 12px' }
const h1 = { fontSize: '28px', lineHeight: '36px', fontWeight: '700' as const, color: '#0f172a', margin: '0 0 16px' }
const h2 = { fontSize: '18px', lineHeight: '26px', fontWeight: '700' as const, color: '#0f172a', margin: '20px 0 12px' }
const text = { fontSize: '15px', lineHeight: '24px', color: '#475569', margin: '0 0 14px' }
const accessCard = { backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '18px 20px', margin: '20px 0' }
const accessEyebrow = { fontSize: '12px', lineHeight: '18px', fontWeight: '700' as const, color: '#2563eb', letterSpacing: '0.04em', textTransform: 'uppercase' as const, margin: '0 0 6px' }
const accessHeadline = { fontSize: '22px', lineHeight: '28px', fontWeight: '800' as const, color: '#0f172a', margin: '0 0 8px' }
const accessSub = { fontSize: '13px', lineHeight: '20px', color: '#334155', margin: '0' }
const listCard = { backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '14px 16px', margin: '0 0 12px' }
const bulletText = { fontSize: '14px', lineHeight: '22px', color: '#334155', margin: '0 0 8px' }
const divider = { borderColor: '#e2e8f0', margin: '22px 0' }
const button = { backgroundColor: '#2563eb', color: '#ffffff', fontSize: '14px', fontWeight: '700' as const, textDecoration: 'none', padding: '12px 22px', borderRadius: '10px', display: 'inline-block', margin: '6px 0 18px' }
const signoff = { fontSize: '15px', lineHeight: '24px', color: '#0f172a', margin: '20px 0 6px' }
const footer = { fontSize: '12px', lineHeight: '18px', color: '#94a3b8', margin: '20px 0 0' }
const link = { color: '#2563eb', textDecoration: 'underline' }
