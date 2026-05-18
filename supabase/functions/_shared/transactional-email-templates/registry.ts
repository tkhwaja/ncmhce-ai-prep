/// <reference types="npm:@types/react@18.3.1" />
import * as React from 'npm:react@18.3.1'

export interface TemplateEntry {
  component: React.ComponentType<any>
  subject: string | ((data: Record<string, any>) => string)
  to?: string
  displayName?: string
  previewData?: Record<string, any>
}

import { template as freeDiagnosticBreakdown } from './free-diagnostic-breakdown.tsx'
import { template as signupRecoveryApology } from './signup-recovery-apology.tsx'
import { template as signupConfirmationReminder } from './signup-confirmation-reminder.tsx'
import { template as subscriptionCancellationFeedback } from './subscription-cancellation-feedback.tsx'
import { template as dailyDiagnosticReport } from './daily-diagnostic-report.tsx'
import { template as foundersOfferConfirmation } from './founders-offer-confirmation.tsx'

export const TEMPLATES: Record<string, TemplateEntry> = {
  'free-diagnostic-breakdown': freeDiagnosticBreakdown,
  'signup-recovery-apology': signupRecoveryApology,
  'signup-confirmation-reminder': signupConfirmationReminder,
  'subscription-cancellation-feedback': subscriptionCancellationFeedback,
  'daily-diagnostic-report': dailyDiagnosticReport,
  'founders-offer-confirmation': foundersOfferConfirmation,
}
