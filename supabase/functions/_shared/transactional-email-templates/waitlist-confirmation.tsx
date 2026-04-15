import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Text, Hr, Section,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = "TheCounselorExam.com"

interface WaitlistConfirmationProps {
  email?: string
}

const WaitlistConfirmationEmail = ({ email }: WaitlistConfirmationProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>You're on the list — future NCMHCE conqueror! 🎉</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={headerSection}>
          <Text style={logo}>{SITE_NAME}</Text>
        </Section>

        <Heading style={h1}>
          You're in. The DSM can wait. 🧠
        </Heading>

        <Text style={text}>
          Welcome to the waitlist for <strong>{SITE_NAME}</strong> — the AI-powered NCMHCE prep platform 
          that's about to make studying feel a lot less like pulling teeth (and a lot more like actually learning).
        </Text>

        <Text style={text}>
          While we're putting the finishing touches on something special, here's what you need to know:
        </Text>

        <Section style={bulletSection}>
          <Text style={bulletItem}>🎯 <strong>You'll get early access</strong> before anyone else</Text>
          <Text style={bulletItem}>💡 <strong>AI-powered clinical simulations</strong> are coming your way</Text>
          <Text style={bulletItem}>🚀 <strong>Launch updates</strong> will land in your inbox (not your spam folder, we hope)</Text>
        </Section>

        <Hr style={divider} />

        <Text style={text}>
          In the meantime, take a deep breath. Maybe review a case study. Or don't — you've earned a break 
          just for signing up.
        </Text>

        <Text style={wittyFooter}>
          Remember: Even Freud had to start somewhere. You've already taken the first step. 💪
        </Text>

        <Hr style={divider} />

        <Text style={footer}>
          You're receiving this because you signed up for the {SITE_NAME} waitlist.
          We'll only email you about launch updates — no spam, we promise.
        </Text>

        <Text style={footerBrand}>
          © {new Date().getFullYear()} {SITE_NAME} · Built for future counselors, by people who get it.
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: WaitlistConfirmationEmail,
  subject: "You're on the list! 🎉 (The cool list, not a diagnostic one)",
  displayName: 'Waitlist confirmation',
  previewData: { email: 'jane@example.com' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: "'Inter', Arial, sans-serif" }
const container = { padding: '40px 28px', maxWidth: '560px', margin: '0 auto' }
const headerSection = { marginBottom: '24px' }
const logo = { fontSize: '18px', fontWeight: '700' as const, color: '#3B82F6', margin: '0', letterSpacing: '-0.3px' }
const h1 = { fontSize: '24px', fontWeight: '700' as const, color: '#111827', margin: '0 0 20px', lineHeight: '1.3' }
const text = { fontSize: '15px', color: '#374151', lineHeight: '1.7', margin: '0 0 16px' }
const bulletSection = { margin: '8px 0 20px', padding: '16px 20px', backgroundColor: '#F0F7FF', borderRadius: '10px' }
const bulletItem = { fontSize: '14px', color: '#374151', lineHeight: '1.6', margin: '0 0 8px' }
const divider = { borderColor: '#E5E7EB', margin: '24px 0' }
const wittyFooter = { fontSize: '15px', color: '#3B82F6', fontStyle: 'italic' as const, lineHeight: '1.6', margin: '0 0 16px' }
const footer = { fontSize: '12px', color: '#9CA3AF', lineHeight: '1.5', margin: '0 0 8px' }
const footerBrand = { fontSize: '12px', color: '#9CA3AF', lineHeight: '1.5', margin: '0' }
