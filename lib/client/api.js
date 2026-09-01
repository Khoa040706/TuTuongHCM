/**
 * API Client Interface
 * Tuân thủ 100% hợp đồng API trong plan.md:
 * - Base Envelope: { ok: true, data } hoặc { ok: false, error: { code, message, fields } }
 * - Kết nối trực tiếp qua MockServer khi chưa có backend thực tế.
 */

import { MockServer } from "./mock-server";

export const authApi = {
  // AUTH-01
  getAdminToken: async (username, password) => {
    return MockServer.postAdminToken({ username, password });
  },

  // AUTH-02
  createSession: async (idToken, rememberMe = false, userOverride = null) => {
    return MockServer.postSession({ idToken, rememberMe, userOverride });
  },

  // AUTH-03
  getSession: async () => {
    return MockServer.getSession();
  },

  // AUTH-04
  logout: async () => {
    return MockServer.deleteSession();
  }
};

export const learningApi = {
  // LEARN-01
  getState: async (subjectId) => {
    return MockServer.getLearningState(subjectId);
  },

  // LEARN-02
  completeSubsection: async (subsectionId, { subjectId, chapterId, sectionId, reachedEnd }) => {
    return MockServer.putSubsectionCompletion(subsectionId, {
      subjectId,
      chapterId,
      sectionId,
      reachedEnd
    });
  },

  // LEARN-03
  addBookmark: async (subsectionId, { subjectId, chapterId, sectionId }) => {
    return MockServer.putBookmark(subsectionId, { subjectId, chapterId, sectionId });
  },

  // LEARN-04
  removeBookmark: async (subsectionId, subjectId) => {
    return MockServer.deleteBookmark(subsectionId, subjectId);
  },

  // LEARN-05
  addReview: async (subsectionId, { subjectId, chapterId, sectionId }) => {
    return MockServer.putReviewItem(subsectionId, { subjectId, chapterId, sectionId });
  },

  // LEARN-06
  removeReview: async (subsectionId, subjectId) => {
    return MockServer.deleteReviewItem(subsectionId, subjectId);
  }
};

export const flashcardApi = {
  // FLASH-01
  getDueCards: async (subjectId, limit = 20) => {
    return MockServer.getDueFlashcards(subjectId, limit);
  },

  // FLASH-02
  submitReview: async (cardId, { subjectId, rating }) => {
    return MockServer.postFlashcardReview(cardId, { subjectId, rating });
  }
};

export const quizApi = {
  // QUIZ-01
  getQuestions: async ({ subjectId, chapterId, examSetId, isTrickMode }) => {
    return MockServer.getExamQuestions({ subjectId, chapterId, examSetId, isTrickMode });
  },

  // QUIZ-02
  submitScore: async ({
    subjectId,
    chapterId,
    examSetId,
    isTrickMode,
    questionsState,
    clientAnswers,
    elapsedTime
  }) => {
    return MockServer.submitExamScore({
      subjectId,
      chapterId,
      examSetId,
      isTrickMode,
      questionsState,
      clientAnswers,
      elapsedTime
    });
  }
};

export const adminApi = {
  // ADMIN-01
  getReport: async (filters = {}) => {
    return MockServer.getLearningReport(filters);
  },

  // ADMIN-02
  exportReport: async (format = "xlsx", filters = {}) => {
    return MockServer.exportLearningReport({ format, ...filters });
  }
};
