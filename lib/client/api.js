/**
 * API Client Interface - Real Backend HTTP Implementation
 * Tuân thủ 100% hợp đồng API trong plan.md:
 * - Base Envelope: { ok: true, data } hoặc { ok: false, error: { code, message, fields } }
 * - HTTP Cookies: Tự động gửi credentials ('same-origin') cho session cookie HttpOnly
 */

import { getExamQuestions, submitExamScore } from "../../app/actions/quiz.js";

async function request(url, options = {}) {
  try {
    const isBlob = options.responseType === "blob";
    const headers = { ...options.headers };
    if (!isBlob && options.body && typeof options.body === "string" && !headers["Content-Type"]) {
      headers["Content-Type"] = "application/json";
    }

    const res = await fetch(url, {
      ...options,
      headers,
      credentials: "same-origin"
    });

    if (isBlob) {
      if (!res.ok) {
        const errorJson = await res.json().catch(() => null);
        return errorJson || {
          ok: false,
          error: { code: `HTTP_${res.status}`, message: "Không thể tải file báo cáo" }
        };
      }
      const blob = await res.blob();
      const disposition = res.headers.get("Content-Disposition") || "";
      const match = disposition.match(/filename="?([^";]+)"?/);
      const filename = match ? match[1] : undefined;
      return { ok: true, data: blob, filename };
    }

    const data = await res.json().catch(() => null);
    if (!res.ok) {
      return data || {
        ok: false,
        error: {
          code: `HTTP_${res.status}`,
          message: res.statusText || "Lỗi giao tiếp máy chủ"
        }
      };
    }
    return data;
  } catch (err) {
    return {
      ok: false,
      error: {
        code: "NETWORK_ERROR",
        message: err.message || "Không thể kết nối đến máy chủ"
      }
    };
  }
}

function buildQuery(params = {}) {
  const searchParams = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== null && value !== "") {
      searchParams.append(key, String(value));
    }
  }
  const str = searchParams.toString();
  return str ? `?${str}` : "";
}

export const authApi = {
  // AUTH-01: Custom token cho admin
  getAdminToken: async (username, password) => {
    return request("/api/auth/admin-token", {
      method: "POST",
      body: JSON.stringify({ username, password })
    });
  },

  // AUTH-02: Tạo server session
  createSession: async (idToken, rememberMe = false) => {
    return request("/api/auth/session", {
      method: "POST",
      body: JSON.stringify({ idToken, rememberMe: Boolean(rememberMe) })
    });
  },

  // AUTH-03: Đọc session
  getSession: async () => {
    return request("/api/auth/session", {
      method: "GET"
    });
  },

  // AUTH-04: Đăng xuất
  logout: async () => {
    return request("/api/auth/session", {
      method: "DELETE"
    });
  }
};

export const learningApi = {
  // LEARN-01: Lấy tiến độ môn học
  getState: async (subjectId) => {
    return request(`/api/learning/state${buildQuery({ subjectId })}`, {
      method: "GET"
    });
  },

  // LEARN-02: Hoàn thành tiểu mục
  completeSubsection: async (subsectionId, { subjectId, chapterId, sectionId, reachedEnd }) => {
    return request(`/api/learning/subsections/${encodeURIComponent(subsectionId)}/completion`, {
      method: "PUT",
      body: JSON.stringify({
        subjectId,
        chapterId,
        sectionId,
        reachedEnd: Boolean(reachedEnd)
      })
    });
  },

  // LEARN-03: Thêm bookmark
  addBookmark: async (subsectionId, { subjectId, chapterId, sectionId }) => {
    return request(`/api/learning/bookmarks/${encodeURIComponent(subsectionId)}`, {
      method: "PUT",
      body: JSON.stringify({ subjectId, chapterId, sectionId })
    });
  },

  // LEARN-04: Xóa bookmark
  removeBookmark: async (subsectionId, subjectId) => {
    return request(`/api/learning/bookmarks/${encodeURIComponent(subsectionId)}${buildQuery({ subjectId })}`, {
      method: "DELETE"
    });
  },

  // LEARN-05: Đánh dấu cần ôn tập
  addReview: async (subsectionId, { subjectId, chapterId, sectionId }) => {
    return request(`/api/learning/review-items/${encodeURIComponent(subsectionId)}`, {
      method: "PUT",
      body: JSON.stringify({ subjectId, chapterId, sectionId })
    });
  },

  // LEARN-06: Gỡ đánh dấu thủ công
  removeReview: async (subsectionId, subjectId) => {
    return request(`/api/learning/review-items/${encodeURIComponent(subsectionId)}${buildQuery({ subjectId })}`, {
      method: "DELETE"
    });
  }
};

export const flashcardApi = {
  // FLASH-01: Lấy danh sách thẻ đến hạn
  getDueCards: async (subjectId, limit = 20) => {
    return request(`/api/learning/flashcards/due${buildQuery({ subjectId, limit })}`, {
      method: "GET"
    });
  },

  // FLASH-02: Ghi nhận đánh giá thẻ ôn tập
  submitReview: async (cardId, { subjectId, rating }) => {
    return request(`/api/learning/flashcards/${encodeURIComponent(cardId)}/reviews`, {
      method: "POST",
      body: JSON.stringify({ subjectId, rating })
    });
  }
};

export const quizApi = {
  // QUIZ-01: Server Action lấy đề thi sạch
  getQuestions: async ({ subjectId, chapterId, examSetId, isTrickMode }) => {
    return getExamQuestions({ subjectId, chapterId, examSetId, isTrickMode });
  },

  // QUIZ-02: Server Action nộp bài chấm điểm
  submitScore: async ({
    subjectId,
    chapterId,
    examSetId,
    isTrickMode,
    questionsState,
    clientAnswers,
    elapsedTime
  }) => {
    return submitExamScore({
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
  // ADMIN-01: Đọc báo cáo tổng hợp
  getReport: async (filters = {}) => {
    return request(`/api/admin/learning-report${buildQuery(filters)}`, {
      method: "GET"
    });
  },

  // ADMIN-02: Tải file báo cáo nhị phân (Excel/PDF)
  exportReport: async (format = "xlsx", filters = {}) => {
    return request(`/api/admin/learning-report/export${buildQuery({ format, ...filters })}`, {
      method: "GET",
      responseType: "blob"
    });
  }
};
