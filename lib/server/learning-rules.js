export function scoreToTen(score, total) {
  if (!Number.isFinite(score) || !Number.isFinite(total) || total <= 0) {
    throw new TypeError("Score and total must be finite; total must be positive.");
  }
  return Math.round((score / total) * 1000) / 100;
}

export function keepHighestScore(previous, current) {
  if (!Number.isFinite(current)) throw new TypeError("Current score must be finite.");
  return Number.isFinite(previous) ? Math.max(previous, current) : current;
}

export function isChapterCompleted({
  totalRequiredSubsections,
  completedSubsections,
  quizRequired,
  bestQuizScore10
}) {
  const allSubsectionsCompleted =
    totalRequiredSubsections > 0 && completedSubsections === totalRequiredSubsections;
  return allSubsectionsCompleted && (!quizRequired || bestQuizScore10 >= 7);
}

