/**
 * Mock Server Engine phía Client
 * Tuân thủ 100% schema và API Contract định nghĩa trong plan.md:
 * - AUTH-01..04 (Auth & Session)
 * - LEARN-01..06 (Learning State, Completion, Bookmark, Review)
 * - FLASH-01..02 (Flashcards & SM-2 Scheduler)
 * - QUIZ-01..02 (Secure Exam Questions & Scoring)
 * - ADMIN-01..02 (Admin Learning Report & Export)
 * 
 * Lưu trữ trạng thái cục bộ giả lập qua localStorage.
 */

const STORAGE_KEYS = {
  SESSION: "studymaster_mock_session",
  USERS: "studymaster_mock_users",
  LEARNING_STATE: "studymaster_mock_learning_state",
  FLASHCARD_PROGRESS: "studymaster_mock_flashcard_progress",
  QUIZ_SUMMARY: "studymaster_mock_quiz_summary",
  RANKINGS: "studymaster_mock_rankings"
};

const delay = (ms = 120) => new Promise((resolve) => setTimeout(resolve, ms));

function getStorageItem(key, fallback = null) {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (err) {
    console.warn(`[MockServer] Error reading ${key}:`, err);
    return fallback;
  }
}

function setStorageItem(key, value) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.warn(`[MockServer] Error saving ${key}:`, err);
  }
}

// Initial Admin User
const DEFAULT_ADMIN = {
  uid: "admin_master_uid",
  email: "admin@studymaster.edu.vn",
  displayName: "Quản trị viên Hệ thống",
  photoURL: null,
  role: "admin",
  disabled: false,
  createdAt: "2026-09-01T00:00:00.000Z"
};

export class MockServer {
  // =================================================================
  // AUTH-01: Custom token cho admin/admin
  // =================================================================
  static async postAdminToken({ username, password }) {
    await delay();
    if (!username || !password) {
      return {
        ok: false,
        error: { code: "VALIDATION_ERROR", message: "Vui lòng nhập tên người dùng và mật khẩu" }
      };
    }
    if (username === "admin" && password === "admin") {
      return {
        ok: true,
        data: { customToken: "mock_custom_token_admin_supersecret" }
      };
    }
    return {
      ok: false,
      error: { code: "INVALID_CREDENTIALS", message: "Tài khoản hoặc mật khẩu quản trị viên không chính xác" }
    };
  }

  // =================================================================
  // AUTH-02: Tạo server session
  // =================================================================
  static async postSession({ idToken, rememberMe = false, userOverride = null }) {
    await delay();
    if (!idToken && !userOverride) {
      return {
        ok: false,
        error: { code: "VALIDATION_ERROR", message: "Thiếu idToken xác thực" }
      };
    }

    let user = null;
    if (idToken === "mock_custom_token_admin_supersecret") {
      user = { ...DEFAULT_ADMIN };
    } else if (userOverride) {
      user = {
        uid: userOverride.uid || `user_${Date.now()}`,
        email: userOverride.email || null,
        displayName: userOverride.displayName || "Học viên",
        photoURL: userOverride.photoURL || null,
        role: userOverride.role || "student"
      };
    } else {
      user = {
        uid: `user_${idToken.slice(0, 8)}`,
        email: "hocvien@studymaster.edu.vn",
        displayName: "Học viên StudyMaster",
        photoURL: null,
        role: "student"
      };
    }

    const sessionData = {
      user,
      token: idToken || `token_${Date.now()}`,
      rememberMe: Boolean(rememberMe),
      createdAt: new Date().toISOString()
    };

    setStorageItem(STORAGE_KEYS.SESSION, sessionData);

    // Save into mock users catalog
    const users = getStorageItem(STORAGE_KEYS.USERS, []);
    const existingIndex = users.findIndex((u) => u.uid === user.uid);
    if (existingIndex >= 0) {
      users[existingIndex] = { ...users[existingIndex], ...user, updatedAt: new Date().toISOString() };
    } else {
      users.push({ ...user, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() });
    }
    setStorageItem(STORAGE_KEYS.USERS, users);

    return {
      ok: true,
      data: { user }
    };
  }

  // =================================================================
  // AUTH-03: Đọc session
  // =================================================================
  static async getSession() {
    await delay(50);
    const session = getStorageItem(STORAGE_KEYS.SESSION);
    if (!session || !session.user) {
      return {
        ok: false,
        error: { code: "UNAUTHENTICATED", message: "Chưa đăng nhập hoặc phiên làm việc đã hết hạn" }
      };
    }
    return {
      ok: true,
      data: { user: session.user }
    };
  }

  // =================================================================
  // AUTH-04: Đăng xuất
  // =================================================================
  static async deleteSession() {
    await delay(50);
    if (typeof window !== "undefined") {
      localStorage.removeItem(STORAGE_KEYS.SESSION);
    }
    return {
      ok: true,
      data: { authenticated: false }
    };
  }

  // =================================================================
  // LEARN-01: Lấy learning state của môn
  // =================================================================
  static async getLearningState(subjectId) {
    await delay();
    if (!subjectId) {
      return {
        ok: false,
        error: { code: "VALIDATION_ERROR", message: "Thiếu mã môn học subjectId" }
      };
    }

    const session = getStorageItem(STORAGE_KEYS.SESSION);
    if (!session || !session.user) {
      return {
        ok: false,
        error: { code: "UNAUTHENTICATED", message: "Vui lòng đăng nhập để xem tiến độ học tập" }
      };
    }

    const stateMap = getStorageItem(STORAGE_KEYS.LEARNING_STATE, {});
    const userState = stateMap[session.user.uid] || {};
    const subjectState = userState[subjectId] || {
      chapters: [],
      subsections: [],
      bookmarks: [],
      reviewItems: []
    };

    // Calculate flashcards due count
    const flashProgress = getStorageItem(STORAGE_KEYS.FLASHCARD_PROGRESS, {});
    const userFlash = flashProgress[session.user.uid] || {};
    const now = new Date().toISOString();
    let totalTracked = 0;
    let dueCount = 0;

    Object.values(userFlash).forEach((card) => {
      if (card.subjectId === subjectId) {
        totalTracked += 1;
        if (!card.nextReviewAt || card.nextReviewAt <= now) {
          dueCount += 1;
        }
      }
    });

    return {
      ok: true,
      data: {
        subjectId,
        chapters: subjectState.chapters || [],
        subsections: subjectState.subsections || [],
        bookmarks: subjectState.bookmarks || [],
        reviewItems: subjectState.reviewItems || [],
        flashcards: {
          totalTracked,
          dueCount
        }
      }
    };
  }

  // =================================================================
  // LEARN-02: Hoàn thành subsection
  // =================================================================
  static async putSubsectionCompletion(subsectionId, { subjectId, chapterId, sectionId, reachedEnd }) {
    await delay();
    if (!subjectId || !chapterId || !sectionId || !subsectionId) {
      return {
        ok: false,
        error: { code: "VALIDATION_ERROR", message: "Dữ liệu yêu cầu không đầy đủ định danh bài học" }
      };
    }

    if (reachedEnd !== true) {
      return {
        ok: false,
        error: {
          code: "SCROLL_END_REQUIRED",
          message: "Người học bắt buộc phải cuộn tới cuối nội dung bài học trước khi bấm hoàn thành"
        }
      };
    }

    const session = getStorageItem(STORAGE_KEYS.SESSION);
    if (!session || !session.user) {
      return {
        ok: false,
        error: { code: "UNAUTHENTICATED", message: "Yêu cầu phiên đăng nhập hợp lệ" }
      };
    }

    const stateMap = getStorageItem(STORAGE_KEYS.LEARNING_STATE, {});
    if (!stateMap[session.user.uid]) stateMap[session.user.uid] = {};
    if (!stateMap[session.user.uid][subjectId]) {
      stateMap[session.user.uid][subjectId] = {
        chapters: [],
        subsections: [],
        bookmarks: [],
        reviewItems: []
      };
    }

    const subjectState = stateMap[session.user.uid][subjectId];
    const now = new Date().toISOString();

    // 1. Update Subsections
    let subItem = subjectState.subsections.find((s) => s.subsectionId === subsectionId);
    if (!subItem) {
      subItem = {
        chapterId,
        sectionId,
        subsectionId,
        completed: true,
        completedAt: now
      };
      subjectState.subsections.push(subItem);
    } else {
      subItem.completed = true;
      if (!subItem.completedAt) subItem.completedAt = now;
    }

    // 2. Count completed subsections for this chapter
    const chapterCompletedSubs = subjectState.subsections.filter(
      (s) => s.chapterId === chapterId && s.completed
    );

    // Total required subsections heuristic (default 3 per section or catalog based)
    const totalRequiredSubsections = 4; // Normalized standard
    const completedSubsections = chapterCompletedSubs.length;
    const allSubsectionsCompleted = completedSubsections >= totalRequiredSubsections;
    const isCloudSubject = subjectId === "cloud-computing";
    const quizRequired = !isCloudSubject;

    // 3. Update Chapter Summary
    let chItem = subjectState.chapters.find((c) => c.chapterId === chapterId);
    if (!chItem) {
      chItem = {
        chapterId,
        completedSubsections,
        totalRequiredSubsections,
        allSubsectionsCompleted,
        quizRequired,
        bestQuizScore10: null,
        completed: isCloudSubject ? allSubsectionsCompleted : false,
        completedAt: isCloudSubject && allSubsectionsCompleted ? now : null
      };
      subjectState.chapters.push(chItem);
    } else {
      chItem.completedSubsections = completedSubsections;
      chItem.allSubsectionsCompleted = allSubsectionsCompleted;
      chItem.quizRequired = quizRequired;
      if (isCloudSubject) {
        chItem.completed = allSubsectionsCompleted;
        if (allSubsectionsCompleted && !chItem.completedAt) chItem.completedAt = now;
      } else {
        const passedQuiz = chItem.bestQuizScore10 !== null && chItem.bestQuizScore10 >= 7.0;
        chItem.completed = allSubsectionsCompleted && passedQuiz;
        if (chItem.completed && !chItem.completedAt) chItem.completedAt = now;
      }
    }

    setStorageItem(STORAGE_KEYS.LEARNING_STATE, stateMap);

    return {
      ok: true,
      data: {
        subsection: {
          subsectionId: subItem.subsectionId,
          completed: subItem.completed,
          completedAt: subItem.completedAt
        },
        chapter: {
          chapterId: chItem.chapterId,
          completedSubsections: chItem.completedSubsections,
          totalRequiredSubsections: chItem.totalRequiredSubsections,
          allSubsectionsCompleted: chItem.allSubsectionsCompleted,
          quizRequired: chItem.quizRequired,
          bestQuizScore10: chItem.bestQuizScore10,
          completed: chItem.completed,
          completedAt: chItem.completedAt
        }
      }
    };
  }

  // =================================================================
  // LEARN-03: Thêm bookmark
  // =================================================================
  static async putBookmark(subsectionId, { subjectId, chapterId, sectionId }) {
    await delay(50);
    const session = getStorageItem(STORAGE_KEYS.SESSION);
    if (!session || !session.user) {
      return { ok: false, error: { code: "UNAUTHENTICATED", message: "Cần đăng nhập" } };
    }

    const stateMap = getStorageItem(STORAGE_KEYS.LEARNING_STATE, {});
    if (!stateMap[session.user.uid]) stateMap[session.user.uid] = {};
    if (!stateMap[session.user.uid][subjectId]) {
      stateMap[session.user.uid][subjectId] = { chapters: [], subsections: [], bookmarks: [], reviewItems: [] };
    }

    const bookmarks = stateMap[session.user.uid][subjectId].bookmarks;
    const now = new Date().toISOString();
    let bm = bookmarks.find((b) => b.subsectionId === subsectionId);
    if (!bm) {
      bm = { subjectId, chapterId, sectionId, subsectionId, createdAt: now };
      bookmarks.push(bm);
      setStorageItem(STORAGE_KEYS.LEARNING_STATE, stateMap);
    }

    return {
      ok: true,
      data: bm
    };
  }

  // =================================================================
  // LEARN-04: Xóa bookmark
  // =================================================================
  static async deleteBookmark(subsectionId, subjectId) {
    await delay(50);
    const session = getStorageItem(STORAGE_KEYS.SESSION);
    if (!session || !session.user) {
      return { ok: false, error: { code: "UNAUTHENTICATED", message: "Cần đăng nhập" } };
    }

    const stateMap = getStorageItem(STORAGE_KEYS.LEARNING_STATE, {});
    if (stateMap[session.user.uid] && stateMap[session.user.uid][subjectId]) {
      stateMap[session.user.uid][subjectId].bookmarks = stateMap[session.user.uid][subjectId].bookmarks.filter(
        (b) => b.subsectionId !== subsectionId
      );
      setStorageItem(STORAGE_KEYS.LEARNING_STATE, stateMap);
    }

    return {
      ok: true,
      data: { subsectionId, bookmarked: false }
    };
  }

  // =================================================================
  // LEARN-05: Bật manual review
  // =================================================================
  static async putReviewItem(subsectionId, { subjectId, chapterId, sectionId }) {
    await delay(50);
    const session = getStorageItem(STORAGE_KEYS.SESSION);
    if (!session || !session.user) {
      return { ok: false, error: { code: "UNAUTHENTICATED", message: "Cần đăng nhập" } };
    }

    const stateMap = getStorageItem(STORAGE_KEYS.LEARNING_STATE, {});
    if (!stateMap[session.user.uid]) stateMap[session.user.uid] = {};
    if (!stateMap[session.user.uid][subjectId]) {
      stateMap[session.user.uid][subjectId] = { chapters: [], subsections: [], bookmarks: [], reviewItems: [] };
    }

    const reviewItems = stateMap[session.user.uid][subjectId].reviewItems;
    const now = new Date().toISOString();
    let rev = reviewItems.find((r) => r.subsectionId === subsectionId);

    if (!rev) {
      rev = {
        chapterId,
        sectionId,
        subsectionId,
        manual: true,
        systemReasons: [],
        needsReview: true,
        updatedAt: now
      };
      reviewItems.push(rev);
    } else {
      rev.manual = true;
      rev.needsReview = true;
      rev.updatedAt = now;
    }

    setStorageItem(STORAGE_KEYS.LEARNING_STATE, stateMap);

    return {
      ok: true,
      data: {
        subsectionId: rev.subsectionId,
        manual: rev.manual,
        systemReasons: rev.systemReasons,
        needsReview: rev.needsReview,
        updatedAt: rev.updatedAt
      }
    };
  }

  // =================================================================
  // LEARN-06: Gỡ manual review
  // =================================================================
  static async deleteReviewItem(subsectionId, subjectId) {
    await delay(50);
    const session = getStorageItem(STORAGE_KEYS.SESSION);
    if (!session || !session.user) {
      return { ok: false, error: { code: "UNAUTHENTICATED", message: "Cần đăng nhập" } };
    }

    const stateMap = getStorageItem(STORAGE_KEYS.LEARNING_STATE, {});
    const now = new Date().toISOString();
    let rev = null;

    if (stateMap[session.user.uid] && stateMap[session.user.uid][subjectId]) {
      const reviewItems = stateMap[session.user.uid][subjectId].reviewItems;
      rev = reviewItems.find((r) => r.subsectionId === subsectionId);
      if (rev) {
        rev.manual = false;
        rev.needsReview = rev.systemReasons.length > 0;
        rev.updatedAt = now;
        setStorageItem(STORAGE_KEYS.LEARNING_STATE, stateMap);
      }
    }

    return {
      ok: true,
      data: {
        subsectionId,
        manual: false,
        systemReasons: rev ? rev.systemReasons : [],
        needsReview: rev ? rev.needsReview : false,
        updatedAt: now
      }
    };
  }

  // =================================================================
  // FLASH-01: Lấy flashcard đến hạn
  // =================================================================
  static async getDueFlashcards(subjectId, limit = 20) {
    await delay();
    const session = getStorageItem(STORAGE_KEYS.SESSION);
    if (!session || !session.user) {
      return { ok: false, error: { code: "UNAUTHENTICATED", message: "Cần đăng nhập" } };
    }

    const staticCards = getStorageItem("studymaster_catalog_flashcards", [
      {
        cardId: "cloud_fc_01",
        chapterId: "cloud-ch1",
        subsectionId: "cloud-ch1-features",
        front: "On-demand Self-service là gì?",
        back: "Khả năng tự phục vụ: Người dùng tự cấp phát tài nguyên tính toán (server, storage...) tự động mà không cần can thiệp thủ công từ nhà cung cấp.",
        vi: "Tự phục vụ theo nhu cầu",
        en: "On-demand self-service",
        abbreviation: null
      },
      {
        cardId: "cloud_fc_02",
        chapterId: "cloud-ch1",
        subsectionId: "cloud-ch1-features",
        front: "Rapid Elasticity trong Cloud là gì?",
        back: "Khả năng co giãn nhanh: Tài nguyên được co giãn linh hoạt tăng hoặc giảm theo thời gian thực tương ứng với tải hệ thống.",
        vi: "Độ co giãn nhanh",
        en: "Rapid elasticity",
        abbreviation: null
      },
      {
        cardId: "cloud_fc_03",
        chapterId: "cloud-ch2",
        subsectionId: "cloud-ch2-virtualization",
        front: "Hypervisor Type 1 (Bare-Metal) khác Type 2 thế nào?",
        back: "Type 1 chạy trực tiếp trên phần cứng vật lý (ESXi, Xen, KVM). Type 2 chạy trên nền một Hệ điều hành chủ (VirtualBox, VMware Workstation).",
        vi: "Bộ ảo hóa Bare-Metal",
        en: "Type-1 Bare-Metal Hypervisor",
        abbreviation: "Type-1"
      },
      {
        cardId: "cloud_fc_04",
        chapterId: "cloud-ch3",
        subsectionId: "cloud-ch3-architecture",
        front: "Đặc trưng kiến trúc Multi-tenant trong SaaS là gì?",
        back: "Một bản cài đặt ứng dụng duy nhất phục vụ nhiều khách hàng (tenants) cùng lúc với cơ chế phân tách logic và bảo mật dữ liệu tuyệt đối.",
        vi: "Kiến trúc đa khách thuê",
        en: "Multi-tenant Architecture",
        abbreviation: null
      },
      {
        cardId: "cloud_fc_05",
        chapterId: "cloud-ch6",
        subsectionId: "cloud-ch6-idaas",
        front: "SSO (Single Sign-On) trong IDaaS mang lại giá trị gì?",
        back: "Cho phép người dùng chỉ cần đăng nhập 1 lần duy nhất là có thể truy cập an toàn vào nhiều dịch vụ ứng dụng đám mây độc lập qua giao thức SAML/OIDC.",
        vi: "Đăng nhập một lần",
        en: "Single Sign-On",
        abbreviation: "SSO"
      }
    ]);

    const flashProgress = getStorageItem(STORAGE_KEYS.FLASHCARD_PROGRESS, {});
    const userFlash = flashProgress[session.user.uid] || {};
    const now = new Date().toISOString();

    const resultCards = [];
    staticCards.forEach((sc) => {
      const prog = userFlash[sc.cardId] || {
        repetitions: 0,
        intervalDays: 0,
        easeFactor: 2.5,
        nextReviewAt: null
      };

      const isDue = !prog.nextReviewAt || prog.nextReviewAt <= now;
      if (isDue) {
        resultCards.push({
          ...sc,
          repetitions: prog.repetitions,
          intervalDays: prog.intervalDays,
          easeFactor: prog.easeFactor,
          nextReviewAt: prog.nextReviewAt
        });
      }
    });

    const sliced = resultCards.slice(0, Number(limit) || 20);

    return {
      ok: true,
      data: {
        subjectId,
        dueCount: resultCards.length,
        cards: sliced
      }
    };
  }

  // =================================================================
  // FLASH-02: Ghi lần ôn flashcard (SM-2 Algorithm)
  // =================================================================
  static async postFlashcardReview(cardId, { subjectId, rating }) {
    await delay();
    const session = getStorageItem(STORAGE_KEYS.SESSION);
    if (!session || !session.user) {
      return { ok: false, error: { code: "UNAUTHENTICATED", message: "Cần đăng nhập" } };
    }

    if (!["again", "hard", "good", "easy"].includes(rating)) {
      return {
        ok: false,
        error: { code: "VALIDATION_ERROR", message: "Đánh giá rating không hợp lệ (again, hard, good, easy)" }
      };
    }

    const flashProgress = getStorageItem(STORAGE_KEYS.FLASHCARD_PROGRESS, {});
    if (!flashProgress[session.user.uid]) flashProgress[session.user.uid] = {};

    let current = flashProgress[session.user.uid][cardId] || {
      repetitions: 0,
      intervalDays: 0,
      easeFactor: 2.5,
      nextReviewAt: null
    };

    let reps = current.repetitions;
    let interval = current.intervalDays;
    let ease = current.easeFactor;
    const now = new Date();

    if (rating === "again") {
      reps = 0;
      interval = 1;
      ease = Math.max(1.3, Number((ease - 0.2).toFixed(2)));
    } else if (rating === "hard") {
      reps += 1;
      interval = Math.max(1, Math.round((interval || 1) * 1.2));
      ease = Math.max(1.3, Number((ease - 0.15).toFixed(2)));
    } else if (rating === "good") {
      reps += 1;
      if (reps === 1) interval = 1;
      else if (reps === 2) interval = 6;
      else interval = Math.round(interval * ease);
    } else if (rating === "easy") {
      reps += 1;
      if (reps === 1) interval = 4;
      else interval = Math.round(interval * ease * 1.3);
      ease = Number((ease + 0.15).toFixed(2));
    }

    const nextDate = new Date(now.getTime() + interval * 24 * 60 * 60 * 1000);
    const updatedRecord = {
      subjectId,
      cardId,
      repetitions: reps,
      intervalDays: interval,
      easeFactor: ease,
      lastRating: rating,
      lastReviewedAt: now.toISOString(),
      nextReviewAt: nextDate.toISOString(),
      updatedAt: now.toISOString()
    };

    flashProgress[session.user.uid][cardId] = updatedRecord;
    setStorageItem(STORAGE_KEYS.FLASHCARD_PROGRESS, flashProgress);

    let reviewItem = {
      subsectionId: "cloud-ch1-features",
      needsReview: false,
      systemReasons: []
    };

    const stateMap = getStorageItem(STORAGE_KEYS.LEARNING_STATE, {});
    if (stateMap[session.user.uid] && stateMap[session.user.uid][subjectId]) {
      const reviewItems = stateMap[session.user.uid][subjectId].reviewItems;
      const targetRev = reviewItems[0];
      if (targetRev) {
        if (rating === "again" && !targetRev.systemReasons.includes("FLASHCARD_AGAIN")) {
          targetRev.systemReasons.push("FLASHCARD_AGAIN");
          targetRev.needsReview = true;
        } else if (rating === "hard" && !targetRev.systemReasons.includes("FLASHCARD_HARD")) {
          targetRev.systemReasons.push("FLASHCARD_HARD");
          targetRev.needsReview = true;
        } else if (rating === "good" || rating === "easy") {
          targetRev.systemReasons = targetRev.systemReasons.filter((r) => r !== "FLASHCARD_AGAIN");
          targetRev.needsReview = targetRev.manual || targetRev.systemReasons.length > 0;
        }
        reviewItem = {
          subsectionId: targetRev.subsectionId,
          needsReview: targetRev.needsReview,
          systemReasons: targetRev.systemReasons
        };
        setStorageItem(STORAGE_KEYS.LEARNING_STATE, stateMap);
      }
    }

    return {
      ok: true,
      data: {
        cardId,
        rating,
        repetitions: reps,
        intervalDays: interval,
        easeFactor: ease,
        lastReviewedAt: updatedRecord.lastReviewedAt,
        nextReviewAt: updatedRecord.nextReviewAt,
        reviewItem
      }
    };
  }

  // =================================================================
  // QUIZ-01: Lấy đề an toàn
  // =================================================================
  static async getExamQuestions({ subjectId, chapterId, examSetId, isTrickMode }) {
    await delay();
    const session = getStorageItem(STORAGE_KEYS.SESSION);
    if (!session || !session.user) {
      return { ok: false, error: { code: "UNAUTHENTICATED", message: "Yêu cầu đăng nhập trước khi vào thi" } };
    }

    if (subjectId === "cloud-computing") {
      return {
        ok: false,
        error: { code: "QUIZ_NOT_AVAILABLE", message: "Môn Điện toán đám mây chưa có bộ đề thi trắc nghiệm trong giai đoạn này" }
      };
    }

    const mockQuestions = [
      {
        id: `${subjectId}-${chapterId}-001`,
        question: "Đặc điểm bản chất cốt lõi của môn học được thể hiện rõ nhất qua luận điểm nào sau đây?",
        options: [
          "Xây dựng trên nền tảng triết học duy vật biện chứng thống nhất",
          "Phát triển độc lập không kế thừa các giá trị tư tưởng nhân loại",
          "Chỉ áp dụng trong điều kiện kinh tế nông nghiệp truyền thống",
          "Tập trung thuần túy vào lý thuyết mà không gắn liền thực tiễn"
        ],
        difficulty: "medium",
        sectionId: "sec-01",
        subsectionId: "sub-01"
      },
      {
        id: `${subjectId}-${chapterId}-002`,
        question: "Phương pháp luận cơ bản và bao trùm nhất được áp dụng xuyên suốt là phương pháp nào?",
        options: [
          "Phương pháp thống nhất giữa tính đảng và tính khoa học",
          "Phương pháp quy nạp số liệu đơn thuần từ tài liệu cổ",
          "Phương pháp suy diễn tiên nghiệm không kiểm chứng",
          "Phương pháp mô tả hiện tượng mà không phân tích bản chất"
        ],
        difficulty: "easy",
        sectionId: "sec-01",
        subsectionId: "sub-02"
      }
    ];

    return {
      ok: true,
      data: {
        questions: mockQuestions
      }
    };
  }

  // =================================================================
  // QUIZ-02: Nộp/chấm quiz Server Action Mock
  // =================================================================
  static async submitExamScore({
    subjectId,
    chapterId,
    examSetId,
    isTrickMode,
    questionsState = [],
    clientAnswers = [],
    elapsedTime = 0
  }) {
    await delay(200);
    const session = getStorageItem(STORAGE_KEYS.SESSION);
    if (!session || !session.user) {
      return { ok: false, error: { code: "UNAUTHENTICATED", message: "Cần đăng nhập" } };
    }

    const total = questionsState.length || 1;
    let score = 0;
    const gradedResults = questionsState.map((q, idx) => {
      const ans = clientAnswers[idx];
      const isCorrect = ans === 0;
      if (isCorrect) score += 1;
      return {
        id: q.id,
        isCorrect,
        correctOptionIndex: 0,
        explanation: "Phương án này phản ánh chính xác chuẩn kiến thức giáo trình học thuật chính thức."
      };
    });

    const score10 = Math.round((score / total) * 100) / 10;
    const passed = score10 >= 7.0;

    const stateMap = getStorageItem(STORAGE_KEYS.LEARNING_STATE, {});
    let bestScore10 = score10;
    let chapterCompleted = false;

    if (stateMap[session.user.uid] && stateMap[session.user.uid][subjectId]) {
      const chItem = stateMap[session.user.uid][subjectId].chapters.find((c) => c.chapterId === chapterId);
      if (chItem) {
        bestScore10 = Math.max(chItem.bestQuizScore10 || 0, score10);
        chItem.bestQuizScore10 = bestScore10;
        chapterCompleted = chItem.allSubsectionsCompleted && bestScore10 >= 7.0;
        chItem.completed = chapterCompleted;
        if (chapterCompleted && !chItem.completedAt) chItem.completedAt = new Date().toISOString();
        setStorageItem(STORAGE_KEYS.LEARNING_STATE, stateMap);
      }
    }

    return {
      ok: true,
      data: {
        score,
        total,
        score10,
        bestScore10,
        passed,
        chapterCompleted,
        attemptsCount: 1,
        gradedResults
      }
    };
  }

  // =================================================================
  // ADMIN-01: Báo cáo học tập
  // =================================================================
  static async getLearningReport(filters = {}) {
    await delay();
    const session = getStorageItem(STORAGE_KEYS.SESSION);
    if (!session || !session.user || (session.user.role !== "admin" && session.user.role !== "teacher")) {
      return {
        ok: false,
        error: { code: "FORBIDDEN", message: "Yêu cầu quyền truy cập Quản trị viên (admin) hoặc Giảng viên (teacher)" }
      };
    }

    const allUsers = getStorageItem(STORAGE_KEYS.USERS, [DEFAULT_ADMIN]);
    const stateMap = getStorageItem(STORAGE_KEYS.LEARNING_STATE, {});

    let completedChapters = 0;
    let incompleteChapters = 0;
    let quizAttempts = 0;
    let usersNeedingReview = 0;
    let dueFlashcards = 0;

    const reportUsers = allUsers.map((u) => {
      const userState = stateMap[u.uid] || {};
      let userNeedsRev = false;

      const subjects = Object.keys(userState).map((sId) => {
        const subData = userState[sId];
        const chapters = (subData.chapters || []).map((ch) => {
          if (ch.completed) completedChapters += 1;
          else incompleteChapters += 1;

          const revCount = (subData.reviewItems || []).filter((r) => r.chapterId === ch.chapterId && r.needsReview).length;
          if (revCount > 0) userNeedsRev = true;

          return {
            chapterId: ch.chapterId,
            completedSubsections: ch.completedSubsections || 0,
            totalRequiredSubsections: ch.totalRequiredSubsections || 4,
            completed: Boolean(ch.completed),
            bestQuizScore10: ch.bestQuizScore10,
            attemptsCount: ch.bestQuizScore10 ? 1 : 0,
            reviewItemsCount: revCount,
            dueFlashcardsCount: 0
          };
        });

        return {
          subjectId: sId,
          chapters
        };
      });

      if (userNeedsRev) usersNeedingReview += 1;

      return {
        uid: u.uid,
        displayName: u.displayName,
        email: u.email,
        subjects
      };
    });

    return {
      ok: true,
      data: {
        summary: {
          totalUsers: allUsers.length,
          completedChapters,
          incompleteChapters,
          quizAttempts,
          usersNeedingReview,
          dueFlashcards
        },
        users: reportUsers
      }
    };
  }

  // =================================================================
  // ADMIN-02: Xuất Excel/PDF
  // =================================================================
  static async exportLearningReport({ format = "xlsx", ...filters }) {
    await delay(150);
    const reportRes = await this.getLearningReport(filters);
    if (!reportRes.ok) return reportRes;

    return {
      ok: true,
      data: {
        format,
        filename: `studymaster-learning-report-${Date.now()}.${format}`,
        payload: reportRes.data
      }
    };
  }
}
