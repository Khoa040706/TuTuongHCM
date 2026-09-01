export const QUESTION_SET_STATUS = Object.freeze({
  MATCH: "MATCH",
  DUPLICATE_SUBMITTED_ID: "DUPLICATE_SUBMITTED_ID",
  MISMATCH: "MISMATCH"
});

export function inspectQuestionSetIds(expectedQuestions, submittedQuestions) {
  if (!Array.isArray(expectedQuestions) || !Array.isArray(submittedQuestions)) {
    return QUESTION_SET_STATUS.MISMATCH;
  }

  const expectedIds = expectedQuestions.map((question) => question?.id);
  const submittedIds = submittedQuestions.map((question) => question?.id);
  const submittedIdSet = new Set(submittedIds);

  if (submittedIdSet.size !== submittedIds.length) {
    return QUESTION_SET_STATUS.DUPLICATE_SUBMITTED_ID;
  }

  const expectedIdSet = new Set(expectedIds);
  if (
    expectedIds.length === 0 ||
    expectedIdSet.size !== expectedIds.length ||
    submittedIds.length !== expectedIds.length
  ) {
    return QUESTION_SET_STATUS.MISMATCH;
  }

  return submittedIds.every((id) => expectedIdSet.has(id))
    ? QUESTION_SET_STATUS.MATCH
    : QUESTION_SET_STATUS.MISMATCH;
}
