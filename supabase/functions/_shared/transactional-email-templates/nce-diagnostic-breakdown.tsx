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
const SIGNUP_URL = 'https://theexampath.com/signup?track=nce'

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

interface NceDiagnosticBreakdownProps {
  fullName?: string
  totalScore?: number
  correctAnswers?: number
  totalQuestions?: number
  strongestDomain?: string
  weakestDomain?: string
  domainScores?: Record<string, number>
  answerBreakdown?: AnswerBreakdownItem[]
}

const strategySections = [
  {
    heading: 'How the NCE is scored',
    items: [
      '200 items, 160 scored, 3 hours 45 minutes — about 70 seconds per question.',
      'Pass/fail against a criterion-referenced standard, not a curve.',
      'Your score report breaks performance out by content area, so weak areas matter more than raw volume.',
    ],
  },
  {
    heading: 'Answer-selection habits that pay off',
    items: [
      'Read the stem for what is actually being asked before looking at options.',
      'When two options are defensible, choose the one that is ethical, least assumptive, and within counselor scope.',
      'Definition items reward precision — know the term, the theorist, and the distinction from its nearest neighbor.',
      'Eliminate absolutes ("always," "never") unless the ethics code truly is absolute.',
    ],
  },
  {
    heading: 'Where candidates lose points',
    items: [
      'Confusing similar theories or similar statistical terms.',
      'Guessing on assessment and research items instead of learning the small, high-yield rule sets.',
      'Pacing — leaving items blank because the first 50 questions took too long.',
    ],
  },
]

const NceDiagnosticBreakdownEmail = ({
  fullName,
  totalScore,
  correctAnswers,
  totalQuestions,
  strongestDomain,
  weakestDomain,
  domainScores,
  answerBreakdown,
}: NceDiagnosticBreakdownProps) => {
  const domainEntries = domainScores ? Object.entries(domainScores) : []
  const breakdown = answerBreakdown ?? []
  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>Your free NCE diagnostic breakdown by content area</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img src="https://www.theexampath.com/email-header.png" alt="The Exam Path" width="560" style={headerImg} />
          <Heading style={h1}>
            {fullName ? `${fullName}, here’s your NCE diagnostic breakdown.` : 'Here’s your NCE diagnostic breakdown.'}
          </Heading>
          <Text style={text}>
            You finished the free NCE diagnostic, so here’s where you stand across the eight CACREP
            content areas — plus the reasoning behind every question.
          </Text>

          <Section style={summaryCard}>
            <Text style={summaryEyebrow}>Free NCE diagnostic</Text>
            <Text style={scoreLine}>
              {typeof totalScore === 'number' ? `${totalScore}%` : 'Your score is ready'}
            </Text>
            <Text style={summaryText}>
              {typeof correctAnswers === 'number' && typeof totalQuestions === 'number'
                ? `${correctAnswers} of ${totalQuestions} questions correct`
                : 'Open your results page to review every item.'}
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
              <Heading as="h2" style={h2}>Content-area performance</Heading>
              <Section style={panelSection}>
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

          <Heading as="h2" style={h2}>NCE strategy quick reference</Heading>
          {strategySections.map((section) => (
            <Section key={section.heading} style={panelSection}>
              <Text style={sectionHeading}>{section.heading}</Text>
              {section.items.map((item) => (
                <Text key={item} style={bulletText}>• {item}</Text>
              ))}
            </Section>
          ))}

          <Hr style={divider} />

          <Heading as="h2" style={h2}>Turn this into a study plan</Heading>
          <Text style={text}>
            The NCE track gives you a full question bank with rationales for every answer option,
            full-length timed practice exams, a structured learning library across all eight content
            areas, and analytics that keep pointing you at your weakest areas. Cancel anytime.
          </Text>
          <Button href={SIGNUP_URL} style={button}>Start studying for the NCE</Button>

          <Text style={text}>
            Questions or need a hand? Reply to this email or reach us at{' '}
            <a href="mailto:support@theexampath.com" style={link}>support@theexampath.com</a>.
          </Text>

          <Text style={footer}>
            You received this because you unlocked your free NCE diagnostic breakdown on {SITE_NAME}.
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

export const template = {
  component: NceDiagnosticBreakdownEmail,
  subject: 'Your free NCE diagnostic breakdown is ready',
  displayName: 'NCE diagnostic breakdown',
  previewData: {
    fullName: 'Jordan Lee',
    totalScore: 67,
    correctAnswers: 16,
    totalQuestions: 24,
    strongestDomain: 'Counseling and Helping Relationships',
    weakestDomain: 'Research and Program Evaluation',
    domainScores: {
      'Professional Counseling Orientation and Ethical Practice': 67,
      'Social and Cultural Diversity': 67,
      'Human Growth and Development': 100,
      'Career Development': 33,
      'Counseling and Helping Relationships': 100,
      'Group Counseling and Group Work': 67,
      'Assessment and Testing': 67,
      'Research and Program Evaluation': 33,
    },
    answerBreakdown: [
      {
        questionId: 'nce-q-001',
        questionNumber: 1,
        domain: 'Professional Counseling Orientation and Ethical Practice',
        prompt: 'A client sends a friend request on a personal social-media account. What is the best first response?',
        selectedAnswer: 'Decline and discuss dual relationships with the client.',
        correctAnswer: 'Decline and discuss dual relationships with the client.',
        explanation: 'The ACA Code of Ethics directs counselors to avoid nonprofessional interactions that could impair objectivity.',
        isCorrect: true,
      },
      {
        questionId: 'nce-q-008',
        questionNumber: 2,
        domain: 'Research and Program Evaluation',
        prompt: 'A p-value of .03 means that:',
        selectedAnswer: 'The effect size is large.',
        correctAnswer: 'The result is statistically significant at the conventional .05 alpha level.',
        explanation: 'A p-value speaks to statistical significance, not effect size or practical importance.',
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
const panelSection = { backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '14px 16px', margin: '0 0 12px' }
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
