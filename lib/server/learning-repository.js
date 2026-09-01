import { FieldValue, Timestamp } from "firebase-admin/firestore";
import { ApiError } from "./api-response.js";
import {
  chapterRequiresQuiz,
  getChapter,
  getSubject,
  getSubsection,
  listChapterSubsections,
  listSubjectChapters
} from "./content-catalog.js";
import { getAdminDb } from "./firebase-admin.js";
import { getFlashcard, listFlashcards } from "./flashcard-catalog.js";
import { scheduleFlashcard } from "./flashcard-scheduler.js";
import { isChapterCompleted } from "./learning-rules.js";

const REVIEW_REASONS = {
  again: "FLASHCARD_AGAIN",
  hard: "FLASHCARD_HARD"
};

function docId(subjectId, itemId) {
  return `${subjectId}__${itemId}`;
}

function toIso(value) {
  if (!value) return null;
  if (value instanceof Timestamp) return value.toDate().toISOString();
  if (value instanceof Date) return value.toISOString();
  if (typeof value.toDate === "function") return value.toDate().toISOString();
  return new Date(value).toISOString();
}

function userCollection(uid, name) {
  return getAdminDb().collection("users").doc(uid).collection(name);
}

function requireSubject(subjectId) {
  const subject = getSubject(subjectId);
  if (!subject) throw new ApiError(404, "SUBJECT_NOT_FOUND", "Môn học không tồn tại.");
  return subject;
}

function requireChapter(subjectId, chapterId) {
  requireSubject(subjectId);
  const chapter = getChapter(subjectId, chapterId);
  if (!chapter) throw new ApiError(404, "CHAPTER_NOT_FOUND", "Chương học không tồn tại.");
  return chapter;
}

function requireSubsection(subjectId, chapterId, sectionId, subsectionId) {
  requireChapter(subjectId, chapterId);
  const item = getSubsection(subjectId, chapterId, subsectionId);
  if (!item || item.sectionId !== sectionId) {
    throw new ApiError(404, "SUBSECTION_NOT_FOUND", "Tiểu mục không tồn tại.");
  }
  return item;
}

function snapshotMap(snapshot) {
  return new Map(snapshot.docs.map((doc) => [doc.id, doc.data()]));
}

function reviewResponse(subsectionId, data) {
  return {
    subsectionId,
    manual: data.manual === true,
    systemReasons: Array.isArray(data.systemReasons) ? data.systemReasons : [],
    needsReview: data.needsReview === true,
    updatedAt: toIso(data.updatedAt) || new Date().toISOString()
  };
}

export async function getLearningState(uid, subjectId) {
  requireSubject(subjectId);
  const [subsectionsSnap, chaptersSnap, bookmarksSnap, reviewsSnap, flashcardsSnap] =
    await Promise.all([
      userCollection(uid, "subsectionProgress").where("subjectId", "==", subjectId).get(),
      userCollection(uid, "chapterProgress").where("subjectId", "==", subjectId).get(),
      userCollection(uid, "bookmarks").where("subjectId", "==", subjectId).get(),
      userCollection(uid, "reviewItems").where("subjectId", "==", subjectId).get(),
      userCollection(uid, "flashcardProgress").where("subjectId", "==", subjectId).get()
    ]);

  const subsectionData = snapshotMap(subsectionsSnap);
  const chapterData = snapshotMap(chaptersSnap);
  const now = Date.now();
  const catalogCards = listFlashcards(subjectId);
  const progressByCard = snapshotMap(flashcardsSnap);
  const dueCount = catalogCards.filter((card) => {
    const progress = progressByCard.get(docId(subjectId, card.cardId));
    return !progress?.nextReviewAt || progress.nextReviewAt.toMillis() <= now;
  }).length;

  const chapters = listSubjectChapters(subjectId).map((chapter) => {
    const required = listChapterSubsections(subjectId, chapter.id);
    const completedSubsections = required.filter(
      (item) => subsectionData.get(docId(subjectId, item.subsectionId))?.completed === true
    ).length;
    const stored = chapterData.get(docId(subjectId, chapter.id)) || {};
    const allSubsectionsCompleted = required.length > 0 && completedSubsections === required.length;
    const quizRequired = chapterRequiresQuiz(subjectId, chapter.id);
    const bestQuizScore10 = Number.isFinite(stored.bestQuizScore10)
      ? stored.bestQuizScore10
      : null;
    const completed = isChapterCompleted({
      totalRequiredSubsections: required.length,
      completedSubsections,
      quizRequired,
      bestQuizScore10
    });
    return {
      chapterId: chapter.id,
      totalRequiredSubsections: required.length,
      completedSubsections,
      allSubsectionsCompleted,
      quizRequired,
      bestQuizScore10,
      completed,
      completedAt: completed ? toIso(stored.completedAt) : null
    };
  });

  return {
    subjectId,
    chapters,
    subsections: subsectionsSnap.docs.map((doc) => {
      const data = doc.data();
      return {
        chapterId: data.chapterId,
        sectionId: data.sectionId,
        subsectionId: data.subsectionId,
        completed: data.completed === true,
        completedAt: toIso(data.completedAt)
      };
    }),
    bookmarks: bookmarksSnap.docs.map((doc) => {
      const data = doc.data();
      return {
        chapterId: data.chapterId,
        sectionId: data.sectionId,
        subsectionId: data.subsectionId,
        createdAt: toIso(data.createdAt)
      };
    }),
    reviewItems: reviewsSnap.docs.map((doc) => {
      const data = doc.data();
      return {
        chapterId: data.chapterId,
        sectionId: data.sectionId,
        ...reviewResponse(data.subsectionId, data)
      };
    }),
    flashcards: {
      totalTracked: flashcardsSnap.size,
      dueCount
    }
  };
}

export async function completeSubsection(uid, input) {
  const { subjectId, chapterId, sectionId, subsectionId, reachedEnd } = input;
  if (reachedEnd !== true) {
    throw new ApiError(400, "SCROLL_END_REQUIRED", "Bạn cần đọc đến cuối tiểu mục trước.");
  }
  requireSubsection(subjectId, chapterId, sectionId, subsectionId);
  const required = listChapterSubsections(subjectId, chapterId);
  const requiredIds = new Set(required.map((item) => item.subsectionId));
  const progressRef = userCollection(uid, "subsectionProgress").doc(
    docId(subjectId, subsectionId)
  );
  const chapterRef = userCollection(uid, "chapterProgress").doc(
    docId(subjectId, chapterId)
  );
  const completedQuery = userCollection(uid, "subsectionProgress")
    .where("subjectId", "==", subjectId)
    .where("chapterId", "==", chapterId)
    .where("completed", "==", true);

  const result = await getAdminDb().runTransaction(async (transaction) => {
    const [existingProgress, completedSnapshot, chapterSnapshot] = await Promise.all([
      transaction.get(progressRef),
      transaction.get(completedQuery),
      transaction.get(chapterRef)
    ]);
    const now = Timestamp.now();
    const alreadyCompleted = existingProgress.exists && existingProgress.data().completed === true;
    const completedIds = new Set(
      completedSnapshot.docs
        .map((doc) => doc.data().subsectionId)
        .filter((id) => requiredIds.has(id))
    );
    if (!alreadyCompleted) completedIds.add(subsectionId);
    const completedSubsections = completedIds.size;
    const allSubsectionsCompleted = required.length > 0 && completedSubsections === required.length;
    const chapterStored = chapterSnapshot.exists ? chapterSnapshot.data() : {};
    const quizRequired = chapterRequiresQuiz(subjectId, chapterId);
    const bestQuizScore10 = Number.isFinite(chapterStored.bestQuizScore10)
      ? chapterStored.bestQuizScore10
      : null;
    const completed = isChapterCompleted({
      totalRequiredSubsections: required.length,
      completedSubsections,
      quizRequired,
      bestQuizScore10
    });
    const completedAt = completed ? chapterStored.completedAt || now : null;

    if (!alreadyCompleted) {
      transaction.set(progressRef, {
        subjectId,
        chapterId,
        sectionId,
        subsectionId,
        reachedEnd: true,
        completed: true,
        completedAt: now,
        updatedAt: now
      });
    }
    transaction.set(
      chapterRef,
      {
        subjectId,
        chapterId,
        totalRequiredSubsections: required.length,
        completedSubsections,
        allSubsectionsCompleted,
        quizRequired,
        bestQuizScore10,
        completed,
        completedAt,
        updatedAt: now
      },
      { merge: true }
    );

    return {
      subsection: {
        subsectionId,
        completed: true,
        completedAt: toIso(existingProgress.data()?.completedAt || now)
      },
      chapter: {
        chapterId,
        completedSubsections,
        totalRequiredSubsections: required.length,
        allSubsectionsCompleted,
        quizRequired,
        bestQuizScore10,
        completed,
        completedAt: toIso(completedAt)
      }
    };
  });
  return result;
}

export async function addBookmark(uid, input) {
  const { subjectId, chapterId, sectionId, subsectionId } = input;
  requireSubsection(subjectId, chapterId, sectionId, subsectionId);
  const ref = userCollection(uid, "bookmarks").doc(docId(subjectId, subsectionId));
  const snapshot = await ref.get();
  const createdAt = snapshot.exists ? snapshot.data().createdAt : Timestamp.now();
  await ref.set({ subjectId, chapterId, sectionId, subsectionId, createdAt });
  return { subjectId, chapterId, sectionId, subsectionId, createdAt: toIso(createdAt) };
}

export async function removeBookmark(uid, subjectId, subsectionId) {
  requireSubject(subjectId);
  await userCollection(uid, "bookmarks").doc(docId(subjectId, subsectionId)).delete();
  return { subsectionId, bookmarked: false };
}

export async function setManualReview(uid, input) {
  const { subjectId, chapterId, sectionId, subsectionId } = input;
  requireSubsection(subjectId, chapterId, sectionId, subsectionId);
  const ref = userCollection(uid, "reviewItems").doc(docId(subjectId, subsectionId));
  const snapshot = await ref.get();
  const previous = snapshot.exists ? snapshot.data() : {};
  const systemReasons = Array.isArray(previous.systemReasons) ? previous.systemReasons : [];
  const now = Timestamp.now();
  const data = {
    subjectId,
    chapterId,
    sectionId,
    subsectionId,
    manual: true,
    systemReasons,
    needsReview: true,
    createdAt: previous.createdAt || now,
    updatedAt: now
  };
  await ref.set(data);
  return reviewResponse(subsectionId, data);
}

export async function clearManualReview(uid, subjectId, subsectionId) {
  requireSubject(subjectId);
  const ref = userCollection(uid, "reviewItems").doc(docId(subjectId, subsectionId));
  const snapshot = await ref.get();
  if (!snapshot.exists) {
    throw new ApiError(404, "REVIEW_ITEM_NOT_FOUND", "Nội dung cần ôn không tồn tại.");
  }
  const previous = snapshot.data();
  const systemReasons = Array.isArray(previous.systemReasons) ? previous.systemReasons : [];
  const updatedAt = Timestamp.now();
  const needsReview = systemReasons.length > 0;
  await ref.set({ manual: false, systemReasons, needsReview, updatedAt }, { merge: true });
  return reviewResponse(subsectionId, {
    ...previous,
    manual: false,
    systemReasons,
    needsReview,
    updatedAt
  });
}

export async function getDueFlashcards(uid, subjectId, limit) {
  requireSubject(subjectId);
  const cards = listFlashcards(subjectId);
  const snapshot = await userCollection(uid, "flashcardProgress")
    .where("subjectId", "==", subjectId)
    .get();
  const progress = snapshotMap(snapshot);
  const now = Date.now();
  const allDue = cards.filter((card) => {
      const item = progress.get(docId(subjectId, card.cardId));
      return !item?.nextReviewAt || item.nextReviewAt.toMillis() <= now;
    });
  const due = allDue
    .slice(0, limit)
    .map((card) => {
      const item = progress.get(docId(subjectId, card.cardId)) || {};
      return {
        ...card,
        repetitions: item.repetitions || 0,
        intervalDays: item.intervalDays || 0,
        easeFactor: item.easeFactor || 2.5,
        nextReviewAt: toIso(item.nextReviewAt)
      };
    });
  return { subjectId, dueCount: allDue.length, cards: due };
}

export async function reviewFlashcard(uid, subjectId, cardId, rating) {
  requireSubject(subjectId);
  const card = getFlashcard(subjectId, cardId);
  if (!card) throw new ApiError(404, "FLASHCARD_NOT_FOUND", "Flashcard không tồn tại.");
  const subsection = getSubsection(subjectId, card.chapterId, card.subsectionId);
  if (!subsection) {
    throw new ApiError(404, "FLASHCARD_NOT_FOUND", "Flashcard không liên kết tiểu mục hợp lệ.");
  }

  const progressRef = userCollection(uid, "flashcardProgress").doc(docId(subjectId, cardId));
  const reviewRef = userCollection(uid, "reviewItems").doc(
    docId(subjectId, card.subsectionId)
  );

  return getAdminDb().runTransaction(async (transaction) => {
    const [progressSnapshot, reviewSnapshot] = await Promise.all([
      transaction.get(progressRef),
      transaction.get(reviewRef)
    ]);
    const previous = progressSnapshot.exists ? progressSnapshot.data() : {};
    const now = new Date();
    if (previous.lastReviewedAt && now.getTime() < previous.lastReviewedAt.toMillis()) {
      throw new ApiError(409, "REVIEW_SEQUENCE_CONFLICT", "Thứ tự lần ôn không hợp lệ.");
    }
    const schedule = scheduleFlashcard(previous, rating, now);
    const progressData = {
      subjectId,
      chapterId: card.chapterId,
      subsectionId: card.subsectionId,
      cardId,
      repetitions: schedule.repetitions,
      intervalDays: schedule.intervalDays,
      easeFactor: schedule.easeFactor,
      lastRating: schedule.lastRating,
      lastReviewedAt: Timestamp.fromDate(schedule.lastReviewedAt),
      nextReviewAt: Timestamp.fromDate(schedule.nextReviewAt),
      updatedAt: Timestamp.fromDate(now)
    };
    transaction.set(progressRef, progressData);

    const reviewPrevious = reviewSnapshot.exists ? reviewSnapshot.data() : {};
    const reasons = new Set(
      Array.isArray(reviewPrevious.systemReasons) ? reviewPrevious.systemReasons : []
    );
    reasons.delete("FLASHCARD_AGAIN");
    reasons.delete("FLASHCARD_HARD");
    if (REVIEW_REASONS[rating]) reasons.add(REVIEW_REASONS[rating]);
    const systemReasons = [...reasons];
    const manual = reviewPrevious.manual === true;
    const needsReview = manual || systemReasons.length > 0;
    const reviewData = {
      subjectId,
      chapterId: card.chapterId,
      sectionId: subsection.sectionId,
      subsectionId: card.subsectionId,
      manual,
      systemReasons,
      needsReview,
      createdAt: reviewPrevious.createdAt || Timestamp.fromDate(now),
      updatedAt: Timestamp.fromDate(now)
    };
    transaction.set(reviewRef, reviewData, { merge: true });

    return {
      cardId,
      rating,
      repetitions: schedule.repetitions,
      intervalDays: schedule.intervalDays,
      easeFactor: schedule.easeFactor,
      lastReviewedAt: schedule.lastReviewedAt.toISOString(),
      nextReviewAt: schedule.nextReviewAt.toISOString(),
      reviewItem: {
        subsectionId: card.subsectionId,
        needsReview,
        systemReasons
      }
    };
  });
}

export async function applySystemReviewReason(uid, input) {
  const { subjectId, chapterId, sectionId, subsectionId, reason, active } = input;
  const ref = userCollection(uid, "reviewItems").doc(docId(subjectId, subsectionId));
  await getAdminDb().runTransaction(async (transaction) => {
    const snapshot = await transaction.get(ref);
    const previous = snapshot.exists ? snapshot.data() : {};
    const reasons = new Set(Array.isArray(previous.systemReasons) ? previous.systemReasons : []);
    if (active) reasons.add(reason);
    else reasons.delete(reason);
    const systemReasons = [...reasons];
    const manual = previous.manual === true;
    const now = Timestamp.now();
    transaction.set(
      ref,
      {
        subjectId,
        chapterId,
        sectionId,
        subsectionId,
        manual,
        systemReasons,
        needsReview: manual || systemReasons.length > 0,
        createdAt: previous.createdAt || now,
        updatedAt: now
      },
      { merge: true }
    );
  });
}

export { toIso };
