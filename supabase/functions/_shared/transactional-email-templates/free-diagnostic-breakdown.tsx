import * as React from 'npm:react@18.3.1'
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = 'The Exam Path'
const PRICING_URL = 'https://theexampath.com/founding'

interface AnswerBreakdownItem {
  questionId: string
  questionNumber: number
  domain: string
  prompt: string
  selectedAnswer: string
  correctAnswer: string
  explanation: string
  isCorrect: boolean
}

interface FreeDiagnosticBreakdownProps {
  fullName?: string
  totalScore?: number
  correctAnswers?: number
  totalQuestions?: number
  strongestDomain?: string
  weakestDomain?: string
  domainScores?: Record<string, number>
  answerBreakdown?: AnswerBreakdownItem[]
}

const cheatSheetSections = [
  {
    heading: 'The Golden Rule',
    items: ['Safety → Rapport → Least Assumptive → Within Scope'],
  },
  {
    heading: '4-Step Decision Framework',
    items: [
      '1. Check safety first: suicidal ideation, homicidal ideation, psychosis, abuse, severe impairment, or medical risk move to the front.',
      '2. Early in the case, prioritize reflection, clarification, and assessment over advice or interpretation.',
      '3. If the client asks what to do, explore meaning and context before jumping to direction.',
      '4. When two answers seem right, choose the one that is more exploratory, less assumptive, and more client-centered.',
    ],
  },
  {
    heading: 'Most Common Test Traps',
    items: [
      'Giving advice too early.',
      'Missing safety because the client sounds calm or vague.',
      'Jumping to diagnosis before enough information is gathered.',
      'Choosing an answer that acts outside counselor scope.',
      'Picking the answer that sounds most active instead of most clinically appropriate.',
    ],
  },
  {
    heading: 'Rapid Pattern Recognition',
    items: [
      'GAD = chronic, diffuse worry across domains.',
      'Panic Disorder = sudden surges of fear plus catastrophic interpretation of body sensations.',
      'MDD = depressed mood and/or loss of interest with functional impairment.',
      'Bipolar spectrum = episodic mood shifts, especially decreased need for sleep and increased energy.',
      'PTSD = trauma exposure plus intrusion, avoidance, and threat-related symptoms.',
      'OCD = obsessions plus compulsions aimed at reducing distress or preventing feared outcomes.',
    ],
  },
  {
    heading: 'When Two Answers Both Look Good',
    items: [
      'Pick the answer that builds alliance, gathers more information, and stays inside the counselor’s role.',
      'Avoid answers that overpromise, overinterpret, or skip steps.',
    ],
  },
  {
    heading: 'Final Reminder',
    items: ['You are not trying to sound smart. You are trying to think like a careful, ethical, entry-level clinician.'],
  },
]

const FreeDiagnosticBreakdownEmail = ({
  fullName,
  totalScore,
  correctAnswers,
  totalQuestions,
  strongestDomain,
  weakestDomain,
  domainScores,
  answerBreakdown,
}: FreeDiagnosticBreakdownProps) => {
  const domainEntries = domainScores ? Object.entries(domainScores) : []
  const breakdown = answerBreakdown ?? []
  return (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>Your Free Diagnostic Case breakdown + answer strategy sheet</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img src="https://www.theexampath.com/email-header.png" alt="The Exam Path" width="560" style={headerImg} />
        <Heading style={h1}>
          {fullName ? `${fullName}, here’s your diagnostic breakdown.` : 'Here’s your diagnostic breakdown.'}
        </Heading>
        <Text style={text}>
          You finished the Free Diagnostic Case, so here’s the full read on where you stand before exam day.
        </Text>

        <Section style={summaryCard}>
          <Text style={summaryEyebrow}>Free Diagnostic Case</Text>
          <Text style={scoreLine}>
            {typeof totalScore === 'number' ? `${totalScore}%` : 'Your score is ready'}
          </Text>
          <Text style={summaryText}>
            {typeof correctAnswers === 'number' && typeof totalQuestions === 'number'
              ? `${correctAnswers} of ${totalQuestions} questions correct`
              : 'Open your results page to review every decision.'}
          </Text>
          {(strongestDomain || weakestDomain) && (
            <Text style={summaryText}>
              {strongestDomain ? `Strongest area: ${strongestDomain}. ` : ''}
              {weakestDomain ? `Most review needed: ${weakestDomain}.` : ''}
            </Text>
          )}
        </Section>

        {domainEntries.length > 0 && (
          <>
            <Hr style={divider} />
            <Heading as="h2" style={h2}>Domain performance</Heading>
            <Section style={cheatSheetSection}>
              {domainEntries.map(([domain, score]) => (
                <Text key={domain} style={domainRow}>
                  <strong style={domainName}>{domain}</strong>
                  <span style={domainScore}>{score}%</span>
                </Text>
              ))}
            </Section>
          </>
        )}

        {breakdown.length > 0 && (
          <>
            <Hr style={divider} />
            <Heading as="h2" style={h2}>Question-by-question review</Heading>
            {breakdown.map((q) => (
              <Section
                key={q.questionId}
                style={{
                  ...questionCard,
                  borderColor: q.isCorrect ? '#bbf7d0' : '#fecaca',
                  backgroundColor: q.isCorrect ? '#f0fdf4' : '#fef2f2',
                }}
              >
                <Text style={questionMeta}>
                  Question {q.questionNumber} · {q.domain} · {q.isCorrect ? 'Correct' : 'Incorrect'}
                </Text>
                <Text style={questionStem}>{q.prompt}</Text>
                <Text style={answerLine}>
                  <strong>Your answer:</strong> {q.selectedAnswer}
                </Text>
                {!q.isCorrect && (
                  <Text style={answerLine}>
                    <strong>Correct answer:</strong> {q.correctAnswer}
                  </Text>
                )}
                <Text style={explanationLine}>
                  <strong>Why:</strong> {q.explanation}
                </Text>
              </Section>
            ))}
          </>
        )}

        <Hr style={divider} />

        <Heading as="h2" style={h2}>Your 1-page answer strategy sheet</Heading>
        {cheatSheetSections.map((section) => (
          <Section key={section.heading} style={cheatSheetSection}>
            <Text style={sectionHeading}>{section.heading}</Text>
            {section.items.map((item) => (
              <Text key={item} style={bulletText}>• {item}</Text>
            ))}
          </Section>
        ))}

        <Hr style={divider} />

        <Heading as="h2" style={h2}>Ready for the full platform?</Heading>
        <Text style={text}>
          Get full-length practice exams, 20+ narratives, domain analytics, and new narratives added weekly.
        </Text>
        <Button href={PRICING_URL} style={button}>Claim founding member offer — $67</Button>

        <Text style={text}>
          Questions or need a hand? Reply to this email or reach us at{' '}
          <a href="mailto:support@theexampath.com" style={link}>support@theexampath.com</a>.
        </Text>

        <Text style={footer}>
          You received this because you unlocked your Free Diagnostic Case breakdown on {SITE_NAME}.
        </Text>
      </Container>
    </Body>
  </Html>
  )
}

export const template = {
  component: FreeDiagnosticBreakdownEmail,
  subject: 'Your Free Diagnostic Case breakdown is ready',
  displayName: 'Free diagnostic breakdown',
  previewData: {
    fullName: 'Jordan Lee',
    totalScore: 71,
    correctAnswers: 10,
    totalQuestions: 14,
    strongestDomain: 'Treatment planning',
    weakestDomain: 'Professional practice and ethics',
    domainScores: {
      'Intake/assessment/diagnosis': 80,
      'Treatment planning': 90,
      'Counseling skills and interventions': 70,
      'Core counseling attributes': 60,
      'Professional practice and ethics': 50,
    },
    answerBreakdown: [
      {
        questionId: 'q1',
        questionNumber: 1,
        domain: 'Intake/assessment/diagnosis',
        prompt: 'What is the most appropriate first step given the client safety concerns?',
        selectedAnswer: 'Conduct a suicide risk assessment',
        correctAnswer: 'Conduct a suicide risk assessment',
        explanation: 'Safety always comes first when the client mentions hopelessness.',
        isCorrect: true,
      },
      {
        questionId: 'q2',
        questionNumber: 2,
        domain: 'Professional practice and ethics',
        prompt: 'How should the counselor respond to the client request for advice?',
        selectedAnswer: 'Immediately provide advice',
        correctAnswer: 'Explore the meaning behind the request',
        explanation: 'Exploration before advice keeps the work client-centered and within scope.',
        isCorrect: false,
      },
    ],
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: "'Inter', Arial, sans-serif" }
const container = { padding: '36px 28px', maxWidth: '580px', margin: '0 auto' }
const headerImg = { width: '100%', maxWidth: '560px', height: 'auto', display: 'block', borderRadius: '8px', margin: '0 0 24px' }
const h1 = { fontSize: '26px', lineHeight: '34px', fontWeight: '700' as const, color: '#0f172a', margin: '0 0 14px' }
const h2 = { fontSize: '18px', lineHeight: '26px', fontWeight: '700' as const, color: '#0f172a', margin: '0 0 14px' }
const text = { fontSize: '15px', lineHeight: '24px', color: '#475569', margin: '0 0 14px' }
const summaryCard = { backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '18px 20px', margin: '20px 0' }
const summaryEyebrow = { fontSize: '12px', lineHeight: '18px', fontWeight: '700' as const, color: '#2563eb', letterSpacing: '0.04em', textTransform: 'uppercase' as const, margin: '0 0 6px' }
const scoreLine = { fontSize: '32px', lineHeight: '36px', fontWeight: '800' as const, color: '#0f172a', margin: '0 0 6px' }
const summaryText = { fontSize: '14px', lineHeight: '22px', color: '#334155', margin: '0 0 6px' }
const cheatSheetSection = { backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '14px 16px', margin: '0 0 12px' }
const sectionHeading = { fontSize: '14px', lineHeight: '20px', fontWeight: '700' as const, color: '#0f172a', margin: '0 0 8px' }
const bulletText = { fontSize: '13px', lineHeight: '20px', color: '#475569', margin: '0 0 6px' }
const divider = { borderColor: '#e2e8f0', margin: '22px 0' }
const button = { backgroundColor: '#2563eb', color: '#ffffff', fontSize: '14px', fontWeight: '700' as const, textDecoration: 'none', padding: '12px 20px', borderRadius: '10px', display: 'inline-block', margin: '8px 0 18px' }
const footer = { fontSize: '12px', lineHeight: '18px', color: '#94a3b8', margin: '0' }
const link = { color: '#2563eb', textDecoration: 'underline' }
const domainRow = { fontSize: '13px', lineHeight: '20px', color: '#0f172a', margin: '0 0 8px', display: 'flex' as const, justifyContent: 'space-between' as const }
const domainName = { color: '#0f172a', fontWeight: '600' as const, marginRight: '12px' }
const domainScore = { color: '#2563eb', fontWeight: '700' as const, float: 'right' as const }
const questionCard = { border: '1px solid #e2e8f0', borderRadius: '12px', padding: '14px 16px', margin: '0 0 12px' }
const questionMeta = { fontSize: '11px', lineHeight: '16px', fontWeight: '700' as const, color: '#475569', letterSpacing: '0.04em', textTransform: 'uppercase' as const, margin: '0 0 8px' }
const questionStem = { fontSize: '14px', lineHeight: '20px', fontWeight: '600' as const, color: '#0f172a', margin: '0 0 10px' }
const answerLine = { fontSize: '13px', lineHeight: '20px', color: '#334155', margin: '0 0 6px' }
const explanationLine = { fontSize: '13px', lineHeight: '20px', color: '#475569', margin: '8px 0 0' }
