import ExcelJS from "exceljs";
import { jsPDF } from "jspdf";
import { ApiError } from "./api-response.js";
import {
  chapterRequiresQuiz,
  getChapter,
  getSubject,
  listChapterSubsections,
  listSubjects
} from "./content-catalog.js";
import { getAdminDb } from "./firebase-admin.js";
import { listFlashcards } from "./flashcard-catalog.js";
import { isChapterCompleted } from "./learning-rules.js";

function compositeId(subjectId, itemId) {
  return `${subjectId}__${itemId}`;
}

function matchesCompletion(value, completed) {
  return value === "all" || (value === "completed" ? completed : !completed);
}

function matchesReview(value, count) {
  return value === "all" || (value === "yes" ? count > 0 : count === 0);
}

function timestampMillis(value) {
  if (!value) return 0;
  if (typeof value.toMillis === "function") return value.toMillis();
  return new Date(value).getTime();
}

function mapDocuments(snapshot) {
  return new Map(snapshot.docs.map((doc) => [doc.id, doc.data()]));
}

function reportSubjects(filters) {
  if (filters.subjectId) {
    const subject = getSubject(filters.subjectId);
    if (!subject) throw new ApiError(404, "SUBJECT_NOT_FOUND", "Môn học không tồn tại.");
    if (filters.chapterId && !getChapter(filters.subjectId, filters.chapterId)) {
      throw new ApiError(404, "CHAPTER_NOT_FOUND", "Chương học không tồn tại.");
    }
    return [subject];
  }

  const subjects = listSubjects();
  if (filters.chapterId && !subjects.some((subject) => getChapter(subject.id, filters.chapterId))) {
    throw new ApiError(404, "CHAPTER_NOT_FOUND", "Chương học không tồn tại.");
  }
  return subjects;
}

async function loadUserReport(profileDoc, subjects, filters) {
  const uid = profileDoc.id;
  const profile = profileDoc.data();
  const userRef = getAdminDb().collection("users").doc(uid);
  const [subsectionsSnap, chaptersSnap, quizzesSnap, reviewsSnap, cardsSnap] =
    await Promise.all([
      userRef.collection("subsectionProgress").get(),
      userRef.collection("chapterProgress").get(),
      userRef.collection("quizSummary").get(),
      userRef.collection("reviewItems").get(),
      userRef.collection("flashcardProgress").get()
    ]);
  const subsectionMap = mapDocuments(subsectionsSnap);
  const chapterMap = mapDocuments(chaptersSnap);
  const quizMap = mapDocuments(quizzesSnap);
  const cardMap = mapDocuments(cardsSnap);
  const reviews = reviewsSnap.docs.map((doc) => doc.data());
  const now = Date.now();

  const subjectRows = subjects.map((subject) => {
    const chapters = (subject.chapters || [])
      .filter((chapter) => !filters.chapterId || chapter.id === filters.chapterId)
      .map((chapter) => {
        const required = listChapterSubsections(subject.id, chapter.id);
        const completedSubsections = required.filter(
          (item) => subsectionMap.get(compositeId(subject.id, item.subsectionId))?.completed === true
        ).length;
        const storedChapter = chapterMap.get(compositeId(subject.id, chapter.id)) || {};
        const quiz = quizMap.get(compositeId(subject.id, chapter.id)) || {};
        const quizRequired = chapterRequiresQuiz(subject.id, chapter.id);
        const bestQuizScore10 = Number.isFinite(quiz.bestScore10)
          ? quiz.bestScore10
          : Number.isFinite(storedChapter.bestQuizScore10) ? storedChapter.bestQuizScore10 : null;
        const completed = isChapterCompleted({
          totalRequiredSubsections: required.length,
          completedSubsections,
          quizRequired,
          bestQuizScore10
        });
        const reviewItemsCount = reviews.filter(
          (item) => item.subjectId === subject.id &&
            item.chapterId === chapter.id &&
            item.needsReview === true
        ).length;
        const dueFlashcardsCount = listFlashcards(subject.id).filter((card) => {
          if (card.chapterId !== chapter.id) return false;
          const progress = cardMap.get(compositeId(subject.id, card.cardId));
          return !progress?.nextReviewAt || timestampMillis(progress.nextReviewAt) <= now;
        }).length;
        return {
          chapterId: chapter.id,
          completedSubsections,
          totalRequiredSubsections: required.length,
          completed,
          bestQuizScore10,
          attemptsCount: quiz.attemptsCount || 0,
          reviewItemsCount,
          dueFlashcardsCount
        };
      })
      .filter((chapter) => matchesCompletion(filters.completion, chapter.completed))
      .filter((chapter) => matchesReview(filters.needsReview, chapter.reviewItemsCount));
    return { subjectId: subject.id, chapters };
  }).filter((subject) => subject.chapters.length > 0);

  return {
    uid,
    displayName: profile.displayName || profile.email || uid,
    email: profile.email || null,
    subjects: subjectRows
  };
}

export async function getLearningReport(filters) {
  const subjects = reportSubjects(filters);
  let profiles;
  if (filters.uid) {
    const profile = await getAdminDb().collection("users").doc(filters.uid).get();
    if (!profile.exists) throw new ApiError(404, "USER_NOT_FOUND", "Người dùng không tồn tại.");
    profiles = [profile];
  } else {
    const snapshot = await getAdminDb().collection("users").get();
    profiles = snapshot.docs.filter((doc) => doc.data().role !== "admin");
  }

  const loaded = await Promise.all(
    profiles.map((profile) => loadUserReport(profile, subjects, filters))
  );
  const users = loaded.filter((user) => user.subjects.length > 0);
  const allChapters = users.flatMap((user) =>
    user.subjects.flatMap((subject) => subject.chapters)
  );
  const userIdsNeedingReview = new Set(
    users
      .filter((user) => user.subjects.some((subject) =>
        subject.chapters.some((chapter) => chapter.reviewItemsCount > 0)
      ))
      .map((user) => user.uid)
  );

  return {
    summary: {
      totalUsers: users.length,
      completedChapters: allChapters.filter((chapter) => chapter.completed).length,
      incompleteChapters: allChapters.filter((chapter) => !chapter.completed).length,
      quizAttempts: allChapters.reduce((sum, chapter) => sum + chapter.attemptsCount, 0),
      usersNeedingReview: userIdsNeedingReview.size,
      dueFlashcards: allChapters.reduce((sum, chapter) => sum + chapter.dueFlashcardsCount, 0)
    },
    users
  };
}

function reportRows(report) {
  return report.users.flatMap((user) =>
    user.subjects.flatMap((subject) =>
      subject.chapters.map((chapter) => ({
        uid: user.uid,
        displayName: user.displayName,
        email: user.email || "",
        subjectId: subject.subjectId,
        chapterId: chapter.chapterId,
        progress: `${chapter.completedSubsections}/${chapter.totalRequiredSubsections}`,
        completed: chapter.completed ? "Hoàn thành" : "Chưa hoàn thành",
        bestQuizScore10: chapter.bestQuizScore10 ?? "",
        attemptsCount: chapter.attemptsCount,
        reviewItemsCount: chapter.reviewItemsCount,
        dueFlashcardsCount: chapter.dueFlashcardsCount
      }))
    )
  );
}

export async function createExcelReport(report) {
  const workbook = new ExcelJS.Workbook();
  workbook.creator = "StudyMaster";
  const summary = workbook.addWorksheet("Tổng quan");
  summary.columns = [
    { header: "Chỉ số", key: "label", width: 32 },
    { header: "Giá trị", key: "value", width: 18 }
  ];
  summary.addRows([
    { label: "Tổng người học", value: report.summary.totalUsers },
    { label: "Chương hoàn thành", value: report.summary.completedChapters },
    { label: "Chương chưa hoàn thành", value: report.summary.incompleteChapters },
    { label: "Lượt làm quiz", value: report.summary.quizAttempts },
    { label: "Người học cần ôn", value: report.summary.usersNeedingReview },
    { label: "Flashcard đến hạn", value: report.summary.dueFlashcards }
  ]);
  summary.getRow(1).font = { bold: true };

  const detail = workbook.addWorksheet("Chi tiết");
  detail.columns = [
    { header: "UID", key: "uid", width: 28 },
    { header: "Họ tên", key: "displayName", width: 24 },
    { header: "Email", key: "email", width: 30 },
    { header: "Môn", key: "subjectId", width: 22 },
    { header: "Chương", key: "chapterId", width: 22 },
    { header: "Tiến độ", key: "progress", width: 14 },
    { header: "Trạng thái", key: "completed", width: 20 },
    { header: "Điểm cao nhất", key: "bestQuizScore10", width: 16 },
    { header: "Lượt quiz", key: "attemptsCount", width: 12 },
    { header: "Cần ôn", key: "reviewItemsCount", width: 12 },
    { header: "Flashcard đến hạn", key: "dueFlashcardsCount", width: 18 }
  ];
  detail.addRows(reportRows(report));
  detail.getRow(1).font = { bold: true };
  detail.views = [{ state: "frozen", ySplit: 1 }];
  return Buffer.from(await workbook.xlsx.writeBuffer());
}

export function createPdfReport(report) {
  const doc = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });
  let y = 14;
  doc.setFontSize(16);
  doc.text("StudyMaster - Báo cáo học tập", 12, y);
  y += 9;
  doc.setFontSize(10);
  doc.text(
    `Người học: ${report.summary.totalUsers} | Hoàn thành: ${report.summary.completedChapters} | Chưa hoàn thành: ${report.summary.incompleteChapters} | Lượt quiz: ${report.summary.quizAttempts}`,
    12,
    y
  );
  y += 8;
  doc.text("Người học | Môn | Chương | Tiến độ | Trạng thái | Điểm | Lượt | Cần ôn | Thẻ đến hạn", 12, y);
  y += 6;
  for (const row of reportRows(report)) {
    if (y > 195) {
      doc.addPage();
      y = 14;
    }
    const line = [
      row.displayName.slice(0, 24),
      row.subjectId,
      row.chapterId,
      row.progress,
      row.completed,
      row.bestQuizScore10,
      row.attemptsCount,
      row.reviewItemsCount,
      row.dueFlashcardsCount
    ].join(" | ");
    doc.text(line.slice(0, 180), 12, y);
    y += 5;
  }
  return Buffer.from(doc.output("arraybuffer"));
}
