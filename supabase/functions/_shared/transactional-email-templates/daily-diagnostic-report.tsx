import * as React from 'npm:react@18.3.1'
import {
  Body,
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

interface ListItem {
  label: string
  value: number | string
}

interface FunnelStep {
  label: string
  value: number
  conversionFromPrev?: number | null
}

interface HealthResult {
  name: string
  category: string
  status: 'pass' | 'warn' | 'fail'
  message: string
  durationMs: number
}

interface DailyDiagnosticReportProps {
  reportDateLabel?: string
  windowLabel?: string
  signups?: {
    confirmed: number
    unconfirmed: number
    waitlistOnly: number
    diagnosticLeads: number
    totalUniqueLeads: number
  }
  funnel?: FunnelStep[]
  traffic?: {
    visitors: number
    pageviews: number
    avgSessionSec: number
    bounceRatePct: number
    topPages: ListItem[]
    topSources: ListItem[]
    devices: ListItem[]
    topCountries: ListItem[]
  }
  revenue?: {
    newCustomers: number
    revenue: number
    activeSubscriptions: number
  } | null
  emailHealth?: {
    sent: number
    failed: number
    suppressed: number
  }
  systemHealth?: {
    results: HealthResult[]
    pass: number
    warn: number
    fail: number
    duration: number
  } | null
  errors?: string[]
}

const fmt = (n: number | string | undefined) =>
  typeof n === 'number' ? n.toLocaleString('en-US') : (n ?? '—')

const fmtSec = (s: number) => {
  if (!s) return '0s'
  const m = Math.floor(s / 60)
  const sec = Math.round(s % 60)
  return m > 0 ? `${m}m ${sec}s` : `${sec}s`
}

const DailyDiagnosticReportEmail = ({
  reportDateLabel,
  windowLabel,
  signups,
  funnel,
  traffic,
  revenue,
  emailHealth,
  errors,
}: DailyDiagnosticReportProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>Daily diagnostic report — {reportDateLabel ?? ''}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={eyebrow}>The Exam Path · Daily Diagnostic</Text>
        <Heading style={h1}>{reportDateLabel ?? 'Daily report'}</Heading>
        <Text style={subhead}>{windowLabel ?? 'Last 24 hours'}</Text>

        {/* Signups & Funnel totals */}
        <Section style={card}>
          <Heading as="h2" style={h2}>Signups & leads</Heading>
          <table style={statTable}>
            <tbody>
              <tr><td style={statLabel}>Confirmed signups</td><td style={statValue}>{fmt(signups?.confirmed ?? 0)}</td></tr>
              <tr><td style={statLabel}>Unconfirmed signups</td><td style={statValue}>{fmt(signups?.unconfirmed ?? 0)}</td></tr>
              <tr><td style={statLabel}>Free diagnostic completions</td><td style={statValue}>{fmt(signups?.diagnosticLeads ?? 0)}</td></tr>
              <tr><td style={statLabel}>Waitlist-only signups</td><td style={statValue}>{fmt(signups?.waitlistOnly ?? 0)}</td></tr>
              <tr style={totalRow}><td style={statLabel}><strong>Total unique leads</strong></td><td style={statValue}><strong>{fmt(signups?.totalUniqueLeads ?? 0)}</strong></td></tr>
            </tbody>
          </table>
        </Section>

        {/* Funnel */}
        {funnel && funnel.length > 0 && (
          <Section style={card}>
            <Heading as="h2" style={h2}>Funnel conversion</Heading>
            <table style={statTable}>
              <tbody>
                {funnel.map((step) => (
                  <tr key={step.label}>
                    <td style={statLabel}>
                      {step.label}
                      {typeof step.conversionFromPrev === 'number' && (
                        <span style={pctBadge}> · {step.conversionFromPrev.toFixed(1)}%</span>
                      )}
                    </td>
                    <td style={statValue}>{fmt(step.value)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Section>
        )}

        {/* Traffic */}
        <Section style={card}>
          <Heading as="h2" style={h2}>Traffic & engagement</Heading>
          <table style={statTable}>
            <tbody>
              <tr><td style={statLabel}>Unique visitors</td><td style={statValue}>{fmt(traffic?.visitors ?? 0)}</td></tr>
              <tr><td style={statLabel}>Pageviews</td><td style={statValue}>{fmt(traffic?.pageviews ?? 0)}</td></tr>
              <tr><td style={statLabel}>Avg session</td><td style={statValue}>{fmtSec(traffic?.avgSessionSec ?? 0)}</td></tr>
              <tr><td style={statLabel}>Bounce rate</td><td style={statValue}>{(traffic?.bounceRatePct ?? 0).toFixed(0)}%</td></tr>
            </tbody>
          </table>

          <Text style={subSection}>Top pages</Text>
          <table style={statTable}>
            <tbody>
              {(traffic?.topPages ?? []).slice(0, 5).map((p) => (
                <tr key={p.label}><td style={statLabel}>{p.label}</td><td style={statValue}>{fmt(p.value)}</td></tr>
              ))}
              {(!traffic?.topPages || traffic.topPages.length === 0) && (
                <tr><td style={emptyCell} colSpan={2}>No data</td></tr>
              )}
            </tbody>
          </table>

          <Text style={subSection}>Top sources</Text>
          <table style={statTable}>
            <tbody>
              {(traffic?.topSources ?? []).slice(0, 5).map((p) => (
                <tr key={p.label}><td style={statLabel}>{p.label}</td><td style={statValue}>{fmt(p.value)}</td></tr>
              ))}
              {(!traffic?.topSources || traffic.topSources.length === 0) && (
                <tr><td style={emptyCell} colSpan={2}>No data</td></tr>
              )}
            </tbody>
          </table>

          <Text style={subSection}>Devices</Text>
          <table style={statTable}>
            <tbody>
              {(traffic?.devices ?? []).map((p) => (
                <tr key={p.label}><td style={statLabel}>{p.label}</td><td style={statValue}>{fmt(p.value)}</td></tr>
              ))}
              {(!traffic?.devices || traffic.devices.length === 0) && (
                <tr><td style={emptyCell} colSpan={2}>No data</td></tr>
              )}
            </tbody>
          </table>

          <Text style={subSection}>Top countries</Text>
          <table style={statTable}>
            <tbody>
              {(traffic?.topCountries ?? []).slice(0, 5).map((p) => (
                <tr key={p.label}><td style={statLabel}>{p.label}</td><td style={statValue}>{fmt(p.value)}</td></tr>
              ))}
              {(!traffic?.topCountries || traffic.topCountries.length === 0) && (
                <tr><td style={emptyCell} colSpan={2}>No data</td></tr>
              )}
            </tbody>
          </table>
        </Section>

        {/* Revenue (only if Stripe activity) */}
        {revenue && (revenue.newCustomers > 0 || revenue.activeSubscriptions > 0) && (
          <Section style={card}>
            <Heading as="h2" style={h2}>Revenue</Heading>
            <table style={statTable}>
              <tbody>
                <tr><td style={statLabel}>New paying customers</td><td style={statValue}>{fmt(revenue.newCustomers)}</td></tr>
                <tr><td style={statLabel}>Revenue</td><td style={statValue}>${fmt(revenue.revenue.toFixed(2))}</td></tr>
                <tr><td style={statLabel}>Active subscriptions (total)</td><td style={statValue}>{fmt(revenue.activeSubscriptions)}</td></tr>
              </tbody>
            </table>
          </Section>
        )}

        {/* Email health */}
        <Section style={card}>
          <Heading as="h2" style={h2}>Email health</Heading>
          <table style={statTable}>
            <tbody>
              <tr><td style={statLabel}>Sent</td><td style={statValue}>{fmt(emailHealth?.sent ?? 0)}</td></tr>
              <tr><td style={statLabel}>Failed</td><td style={{ ...statValue, color: (emailHealth?.failed ?? 0) > 0 ? '#dc2626' : '#0f172a' }}>{fmt(emailHealth?.failed ?? 0)}</td></tr>
              <tr><td style={statLabel}>Suppressed</td><td style={statValue}>{fmt(emailHealth?.suppressed ?? 0)}</td></tr>
            </tbody>
          </table>
        </Section>

        {errors && errors.length > 0 && (
          <Section style={errorCard}>
            <Heading as="h2" style={h2}>Data collection notes</Heading>
            {errors.map((e, i) => (
              <Text key={i} style={errorText}>• {e}</Text>
            ))}
          </Section>
        )}

        <Hr style={divider} />
        <Text style={footer}>
          Auto-generated each day at 10:00 AM Eastern by The Exam Path.
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: DailyDiagnosticReportEmail,
  subject: (data: Record<string, any>) =>
    `Daily report · ${data?.reportDateLabel ?? new Date().toLocaleDateString('en-US')}`,
  to: 'support@theexampath.com',
  displayName: 'Daily diagnostic report',
  previewData: {
    reportDateLabel: 'Thursday, May 14, 2026',
    windowLabel: 'Last 24 hours (ending 7:00 PM ET)',
    signups: { confirmed: 4, unconfirmed: 2, waitlistOnly: 1, diagnosticLeads: 7, totalUniqueLeads: 11 },
    funnel: [
      { label: 'Landing page views', value: 432 },
      { label: 'Signup page views', value: 78, conversionFromPrev: 18.1 },
      { label: 'Signups (any state)', value: 6, conversionFromPrev: 7.7 },
      { label: 'Confirmed accounts', value: 4, conversionFromPrev: 66.7 },
      { label: 'Diagnostic completions', value: 7 },
    ],
    traffic: {
      visitors: 218,
      pageviews: 612,
      avgSessionSec: 184,
      bounceRatePct: 62,
      topPages: [
        { label: '/', value: 312 },
        { label: '/signup', value: 78 },
        { label: '/free-diagnostic-case', value: 64 },
      ],
      topSources: [
        { label: 'facebook.com', value: 142 },
        { label: 'Direct', value: 51 },
      ],
      devices: [{ label: 'mobile', value: 178 }, { label: 'desktop', value: 36 }],
      topCountries: [{ label: 'US', value: 195 }, { label: 'PT', value: 8 }],
    },
    revenue: { newCustomers: 0, revenue: 0, activeSubscriptions: 0 },
    emailHealth: { sent: 14, failed: 0, suppressed: 1 },
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: "'Inter', Arial, sans-serif" }
const container = { padding: '32px 24px', maxWidth: '620px', margin: '0 auto' }
const eyebrow = { fontSize: '11px', fontWeight: '700' as const, letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: '#2563eb', margin: '0 0 6px' }
const h1 = { fontSize: '24px', lineHeight: '30px', fontWeight: '700' as const, color: '#0f172a', margin: '0 0 4px' }
const subhead = { fontSize: '13px', color: '#64748b', margin: '0 0 22px' }
const h2 = { fontSize: '15px', fontWeight: '700' as const, color: '#0f172a', margin: '0 0 10px' }
const card = { backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '16px 18px', margin: '0 0 14px' }
const errorCard = { backgroundColor: '#fef2f2', border: '1px solid #fecaca', borderRadius: '10px', padding: '14px 16px', margin: '0 0 14px' }
const errorText = { fontSize: '12px', color: '#991b1b', margin: '0 0 4px' }
const statTable = { width: '100%', borderCollapse: 'collapse' as const }
const statLabel = { fontSize: '13px', color: '#475569', padding: '6px 0', borderBottom: '1px solid #e2e8f0' }
const statValue = { fontSize: '13px', fontWeight: '600' as const, color: '#0f172a', padding: '6px 0', textAlign: 'right' as const, borderBottom: '1px solid #e2e8f0' }
const totalRow = { backgroundColor: '#eff6ff' }
const subSection = { fontSize: '12px', fontWeight: '700' as const, color: '#475569', textTransform: 'uppercase' as const, letterSpacing: '0.05em', margin: '14px 0 6px' }
const emptyCell = { fontSize: '12px', color: '#94a3b8', padding: '6px 0', fontStyle: 'italic' as const }
const pctBadge = { fontSize: '11px', color: '#2563eb', fontWeight: '600' as const }
const divider = { borderColor: '#e2e8f0', margin: '20px 0 14px' }
const footer = { fontSize: '11px', color: '#94a3b8', margin: '0' }
