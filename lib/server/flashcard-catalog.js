import { cloudFlashcards, lessonsData } from "../curriculum.js";

const standaloneFlashcardsBySubject = {
  "cloud-computing": cloudFlashcards
};

function normalizeCard(card, context) {
  const cardId = card.cardId || card.id;
  const front = card.front || card.term || card.question;
  const back = card.back || card.definition || card.answer;
  if (!cardId || !front || !back) return null;

  return {
    cardId: String(cardId),
    chapterId: String(card.chapterId || context.chapterId || ""),
    subsectionId: String(card.subsectionId || context.subsectionId || ""),
    front: String(front),
    back: String(back),
    vi: String(card.vi || card.termVi || front),
    en: String(card.en || card.termEn || front),
    abbreviation: card.abbreviation ? String(card.abbreviation) : null
  };
}

function collectCards(value, context, output, seen) {
  if (!value || typeof value !== "object" || seen.has(value)) return;
  seen.add(value);

  const nextContext = {
    chapterId: value.chapterId || (value.id?.startsWith?.("chuong-") ? value.id : context.chapterId),
    subsectionId: value.subsectionId || context.subsectionId
  };

  if (
    value.id &&
    (Array.isArray(value.parts) || Array.isArray(value.content)) &&
    !value.chapters &&
    !value.sections &&
    !value.subsections
  ) {
    nextContext.subsectionId = value.id;
  }

  if (Array.isArray(value.flashcards)) {
    for (const card of value.flashcards) {
      const normalized = normalizeCard(card, nextContext);
      if (normalized) output.set(normalized.cardId, normalized);
    }
  }

  for (const child of Object.values(value)) {
    if (typeof child === "object") collectCards(child, nextContext, output, seen);
  }
}

export function listFlashcards(subjectId) {
  const subject = lessonsData[subjectId];
  const standaloneCards = standaloneFlashcardsBySubject[subjectId] || [];
  if (!subject && standaloneCards.length === 0) return [];

  const cards = new Map();
  if (subject) collectCards(subject, {}, cards, new WeakSet());
  for (const card of standaloneCards) {
    const normalized = normalizeCard(card, {});
    if (normalized) cards.set(normalized.cardId, normalized);
  }
  return [...cards.values()];
}

export function getFlashcard(subjectId, cardId) {
  return listFlashcards(subjectId).find((card) => card.cardId === cardId) || null;
}
