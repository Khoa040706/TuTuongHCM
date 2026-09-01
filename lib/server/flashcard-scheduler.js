const DAY_MS = 24 * 60 * 60 * 1000;
const MIN_EASE = 1.3;
const INITIAL_EASE = 2.5;

function roundEase(value) {
  return Math.round(Math.max(MIN_EASE, value) * 100) / 100;
}

export function scheduleFlashcard(previous, rating, now = new Date()) {
  const repetitions = Number.isInteger(previous?.repetitions) ? previous.repetitions : 0;
  const intervalDays = Number.isFinite(previous?.intervalDays) ? previous.intervalDays : 0;
  const easeFactor = Number.isFinite(previous?.easeFactor)
    ? previous.easeFactor
    : INITIAL_EASE;

  let nextRepetitions = repetitions;
  let nextInterval = intervalDays;
  let nextEase = easeFactor;

  if (rating === "again") {
    nextRepetitions = 0;
    nextInterval = 1;
    nextEase = roundEase(easeFactor - 0.2);
  } else if (rating === "hard") {
    nextRepetitions = repetitions + 1;
    nextInterval = Math.max(1, Math.round(Math.max(1, intervalDays) * 1.2));
    nextEase = roundEase(easeFactor - 0.15);
  } else if (rating === "good") {
    nextRepetitions = repetitions + 1;
    if (repetitions === 0) nextInterval = 1;
    else if (repetitions === 1) nextInterval = 6;
    else nextInterval = Math.max(1, Math.round(intervalDays * easeFactor));
    nextEase = roundEase(easeFactor);
  } else if (rating === "easy") {
    nextRepetitions = repetitions + 1;
    nextInterval = repetitions === 0
      ? 4
      : Math.max(2, Math.round(Math.max(1, intervalDays) * easeFactor * 1.3));
    nextEase = roundEase(easeFactor + 0.15);
  } else {
    throw new TypeError("Unsupported flashcard rating.");
  }

  return {
    repetitions: nextRepetitions,
    intervalDays: nextInterval,
    easeFactor: nextEase,
    lastRating: rating,
    lastReviewedAt: now,
    nextReviewAt: new Date(now.getTime() + nextInterval * DAY_MS)
  };
}

