/// <reference types="npm:@types/react@18.3.1" />

import * as React from 'npm:react@18.3.1'

import {
  Body, Button, Container, Head, Heading, Html, Preview, Text,
} from 'npm:@react-email/components@0.0.22'

interface SignupEmailProps {
  siteName: string
  siteUrl: string
  recipient: string
  confirmationUrl: string
}

export const SignupEmail = ({ siteName, confirmationUrl }: SignupEmailProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>Confirm your email for The Exam Path</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={logo}>The Exam<span style={logoAccent}> Path</span></Text>
        <Heading style={h1}>Confirm your email</Heading>
        <Text style={text}>
          Welcome to {siteName} — your AI-powered NCMHCE prep companion. Confirm your
          email below to activate your account and get started.
        </Text>
        <Button style={button} href={confirmationUrl}>Confirm email</Button>
        <Text style={footer}>
          If you didn't create an account, you can safely ignore this email.
        </Text>
      </Container>
    </Body>
  </Html>
)

export default SignupEmail

const main = { backgroundColor: '#ffffff', fontFamily: "'Inter', Arial, sans-serif" }
const container = { padding: '40px 28px', maxWidth: '560px', margin: '0 auto' }
const logo = { fontSize: '18px', fontWeight: 700 as const, color: '#111827', margin: '0 0 24px', letterSpacing: '-0.3px' }
const logoAccent = { color: 'hsl(217, 91%, 60%)' }
const h1 = { fontSize: '24px', fontWeight: 700 as const, color: '#111827', margin: '0 0 20px', lineHeight: '1.3' }
const text = { fontSize: '15px', color: '#374151', lineHeight: '1.7', margin: '0 0 24px' }
const button = { backgroundColor: 'hsl(217, 91%, 60%)', color: '#ffffff', fontSize: '15px', fontWeight: 600 as const, borderRadius: '12px', padding: '12px 24px', textDecoration: 'none', display: 'inline-block' }
const footer = { fontSize: '13px', color: '#9CA3AF', lineHeight: '1.5', margin: '32px 0 0' }
