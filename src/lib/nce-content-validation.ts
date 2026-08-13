import {
  NCE_DOMAINS,
  type NCEQuestion,
  type NCEPracticeExam,
  type NCELibraryModule,
  type NCEFlashcardDeck,
} from "@/data/nce/types";

export interface NCEValidationError {
  type: "question" | "practice-exam" | "library-module" | "flashcard-deck";
  id?: string;
  message: string;
}

const domainSet = new Set<string>(NCE_DOMAINS);

export function validateNCEQuestions(questions: NCEQuestion[]): NCEValidationError[] {
  const errors: NCEValidationError[] = [];
  const seenIds = new Set<string>();

  for (const q of questions) {
    if (!q.id) {
      errors.push({ type: "question", message: "Question is missing an id." });
      continue;
    }
    if (seenIds.has(q.id)) {
      errors.push({ type: "question", id: q.id, message: `Duplicate question id: ${q.id}` });
    }
    seenIds.add(q.id);

    if (!q.stem || q.stem.trim().length === 0) {
      errors.push({ type: "question", id: q.id, message: "Missing or empty stem." });
    }
    if (!Array.isArray(q.options) || q.options.length < 2) {
      errors.push({ type: "question", id: q.id, message: "Must have at least two options." });
    } else {
      if (
        typeof q.correctAnswerIndex !== "number" ||
        q.correctAnswerIndex < 0 ||
        q.correctAnswerIndex >= q.options.length
      ) {
        errors.push({
          type: "question",
          id: q.id,
          message: `correctAnswerIndex (${q.correctAnswerIndex}) is out of range for ${q.options.length} options.`,
        });
      }
      q.options.forEach((opt, idx) => {
        if (!opt || opt.trim().length === 0) {
          errors.push({ type: "question", id: q.id, message: `Option ${idx} is empty.` });
        }
      });
    }
    if (!q.explanation || q.explanation.trim().length === 0) {
      errors.push({ type: "question", id: q.id, message: "Missing explanation." });
    }
    if (q.optionRationales && Array.isArray(q.optionRationales)) {
      if (q.optionRationales.length !== (q.options?.length ?? 0)) {
        errors.push({
          type: "question",
          id: q.id,
          message: `optionRationales length (${q.optionRationales.length}) does not match options length (${q.options?.length ?? 0}).`,
        });
      } else {
        q.optionRationales.forEach((r, idx) => {
          if (!r || r.trim().length === 0) {
            errors.push({
              type: "question",
              id: q.id,
              message: `optionRationale ${idx} is empty.`,
            });
          }
        });
      }
    }
    if (!q.domain || !domainSet.has(q.domain)) {
      errors.push({
        type: "question",
        id: q.id,
        message: `Invalid or missing domain: ${q.domain ?? "(none)"}.`,
      });
    }
  }

  return errors;
}

export function validateNCEPracticeExams(
  exams: NCEPracticeExam[],
  questionBank: NCEQuestion[],
): NCEValidationError[] {
  const errors: NCEValidationError[] = [];
  const bankIds = new Set(questionBank.map((q) => q.id));
  const seenIds = new Set<string>();

  for (const exam of exams) {
    if (!exam.id) {
      errors.push({ type: "practice-exam", message: "Practice exam is missing an id." });
      continue;
    }
    if (seenIds.has(exam.id)) {
      errors.push({ type: "practice-exam", id: exam.id, message: `Duplicate exam id: ${exam.id}` });
    }
    seenIds.add(exam.id);

    if (!exam.title || exam.title.trim().length === 0) {
      errors.push({ type: "practice-exam", id: exam.id, message: "Missing title." });
    }
    if (typeof exam.timeLimitMinutes !== "number" || exam.timeLimitMinutes <= 0) {
      errors.push({
        type: "practice-exam",
        id: exam.id,
        message: "timeLimitMinutes must be a positive number.",
      });
    }
    if (!exam.comingSoon) {
      if (!Array.isArray(exam.questionIds) || exam.questionIds.length === 0) {
        errors.push({
          type: "practice-exam",
          id: exam.id,
          message: "A released exam must have at least one question.",
        });
      } else {
        const seenQuestionIds = new Set<string>();
        exam.questionIds.forEach((qid) => {
          if (seenQuestionIds.has(qid)) {
            errors.push({
              type: "practice-exam",
              id: exam.id,
              message: `Duplicate question id in exam: ${qid}`,
            });
          }
          seenQuestionIds.add(qid);
          if (!bankIds.has(qid)) {
            errors.push({
              type: "practice-exam",
              id: exam.id,
              message: `Exam references unknown question id: ${qid}`,
            });
          }
        });
      }
    }
    if (exam.passingScore !== undefined && (exam.passingScore < 0 || exam.passingScore > 100)) {
      errors.push({
        type: "practice-exam",
        id: exam.id,
        message: `passingScore (${exam.passingScore}) must be between 0 and 100.`,
      });
    }
    if (exam.domainWeights) {
      Object.entries(exam.domainWeights).forEach(([domain, weight]) => {
        if (!domainSet.has(domain)) {
          errors.push({
            type: "practice-exam",
            id: exam.id,
            message: `domainWeights contains invalid domain: ${domain}`,
          });
        }
        if (typeof weight !== "number" || weight < 0) {
          errors.push({
            type: "practice-exam",
            id: exam.id,
            message: `domainWeights.${domain} must be a non-negative number.`,
          });
        }
      });
    }
  }

  return errors;
}

export function validateNCELibraryModules(modules: NCELibraryModule[]): NCEValidationError[] {
  const errors: NCEValidationError[] = [];
  const seenIds = new Set<string>();

  for (const m of modules) {
    if (!m.id) {
      errors.push({ type: "library-module", message: "Library module is missing an id." });
      continue;
    }
    if (seenIds.has(m.id)) {
      errors.push({ type: "library-module", id: m.id, message: `Duplicate module id: ${m.id}` });
    }
    seenIds.add(m.id);

    if (!m.title || m.title.trim().length === 0) {
      errors.push({ type: "library-module", id: m.id, message: "Missing title." });
    }
    if (!m.category || m.category.trim().length === 0) {
      errors.push({ type: "library-module", id: m.id, message: "Missing category." });
    }
    if (!m.description || m.description.trim().length === 0) {
      errors.push({ type: "library-module", id: m.id, message: "Missing description." });
    }
    if (!Array.isArray(m.keyConcepts) || m.keyConcepts.length === 0) {
      errors.push({ type: "library-module", id: m.id, message: "keyConcepts must be a non-empty array." });
    }
    if (!Array.isArray(m.tags)) {
      errors.push({ type: "library-module", id: m.id, message: "tags must be an array." });
    }
    if (!m.content && !m.data) {
      errors.push({
        type: "library-module",
        id: m.id,
        message: "Module must have either content or data.",
      });
    }
  }

  return errors;
}

export function validateNCEFlashcardDecks(decks: NCEFlashcardDeck[]): NCEValidationError[] {
  const errors: NCEValidationError[] = [];
  const seenDeckIds = new Set<string>();

  for (const deck of decks) {
    if (!deck.id) {
      errors.push({ type: "flashcard-deck", message: "Flashcard deck is missing an id." });
      continue;
    }
    if (seenDeckIds.has(deck.id)) {
      errors.push({ type: "flashcard-deck", id: deck.id, message: `Duplicate deck id: ${deck.id}` });
    }
    seenDeckIds.add(deck.id);

    if (!deck.name || deck.name.trim().length === 0) {
      errors.push({ type: "flashcard-deck", id: deck.id, message: "Missing deck name." });
    }
    if (!deck.domain || !domainSet.has(deck.domain)) {
      errors.push({
        type: "flashcard-deck",
        id: deck.id,
        message: `Invalid or missing domain: ${deck.domain ?? "(none)"}.`,
      });
    }
    if (!Array.isArray(deck.cards) || deck.cards.length === 0) {
      errors.push({ type: "flashcard-deck", id: deck.id, message: "Deck must have at least one card." });
      continue;
    }

    const seenCardIds = new Set<string>();
    deck.cards.forEach((card) => {
      if (!card.id) {
        errors.push({ type: "flashcard-deck", id: deck.id, message: "Card is missing an id." });
        return;
      }
      if (seenCardIds.has(card.id)) {
        errors.push({
          type: "flashcard-deck",
          id: deck.id,
          message: `Duplicate card id in deck: ${card.id}`,
        });
      }
      seenCardIds.add(card.id);
      if (!card.front || card.front.trim().length === 0) {
        errors.push({ type: "flashcard-deck", id: deck.id, message: `Card ${card.id} has an empty front.` });
      }
      if (!card.back || card.back.trim().length === 0) {
        errors.push({ type: "flashcard-deck", id: deck.id, message: `Card ${card.id} has an empty back.` });
      }
    });
  }

  return errors;
}

export function validateAllNCEContent(options: {
  questions: NCEQuestion[];
  practiceExams: NCEPracticeExam[];
  libraryModules: NCELibraryModule[];
  flashcardDecks: NCEFlashcardDeck[];
}): NCEValidationError[] {
  return [
    ...validateNCEQuestions(options.questions),
    ...validateNCEPracticeExams(options.practiceExams, options.questions),
    ...validateNCELibraryModules(options.libraryModules),
    ...validateNCEFlashcardDecks(options.flashcardDecks),
  ];
}
