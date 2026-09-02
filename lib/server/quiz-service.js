import { randomInt } from "node:crypto";
import { Timestamp } from "firebase-admin/firestore";
import { ApiError } from "./api-response.js";
import {
  chapterRequiresQuiz,
  getChapter,
  getSubject,
  listChapterSubsections
} from "./content-catalog.js";
import { getAdminDb } from "./firebase-admin.js";
import {
  isChapterCompleted,
  keepHighestScore,
  scoreToTen
} from "./learning-rules.js";
import { issueExamTicket, verifyExamTicket } from "./exam-ticket.js";

function getQuestionData(subjectId, chapterId) {
  const subject = getSubject(subjectId);
  if (!subject) throw new ApiError(404, "SUBJECT_NOT_FOUND", "Môn học không tồn tại.");
  if (!getChapter(subjectId, chapterId)) {
    throw new ApiError(404, "CHAPTER_NOT_FOUND", "Chương học không tồn tại.");
  }
  const data = subject.questionsMap?.[chapterId];
  if (!data || !chapterRequiresQuiz(subjectId, chapterId)) {
    throw new ApiError(404, "QUIZ_NOT_AVAILABLE", "Chương này chưa có bài kiểm tra.");
  }
  return data;
}

function parseSetNumber(examSetId, prefix) {
  if (typeof examSetId === "number" && Number.isInteger(examSetId)) return examSetId;
  const text = String(examSetId);
  if (prefix && text.startsWith(prefix)) {
    const parsed = Number.parseInt(text.slice(prefix.length), 10);
    return Number.isInteger(parsed) ? parsed : null;
  }
  const parsed = Number.parseInt(text, 10);
  return Number.isInteger(parsed) ? parsed : null;
}

function normalizeExamSetId(examSetId, isTrickMode) {
  if (typeof examSetId === "number" && Number.isInteger(examSetId) && examSetId > 0) {
    return `${isTrickMode ? "trick" : "de"}-${examSetId}`;
  }
  const value = String(examSetId || "").trim();
  if (isTrickMode) {
    if (value === "trick" || /^trick-[1-9]\d*$/.test(value)) return value;
  } else if (value === "auto" || /^de-[1-9]\d*$/.test(value)) {
    return value;
  }
  throw new ApiError(404, "EXAM_SET_NOT_FOUND", "Bộ đề không tồn tại.");
}

function fixedSlice(data, chapterId, setNumber) {
  const inside = data.inside || [];
  const outside = data.outside || [];
  const fortyQuestionChapters = [
    "lich-su-dang-mo-dau",
    "chuong-2",
    "chuong-3",
    "chuong-4",
    "chuong-5",
    "chuong-6"
  ];
  const insideCount = inside.length <= 50
    ? inside.length
    : fortyQuestionChapters.includes(chapterId) ? 36 : 37;
  const outsideCount = fortyQuestionChapters.includes(chapterId) ? 4 : 3;
  const setCount = Math.max(1, Math.ceil(inside.length / Math.max(1, insideCount)));
  if (setNumber < 1 || setNumber > setCount) return [];
  const index = setNumber - 1;
  const insideOffset = setCount > 1
    ? Math.round((index * Math.max(0, inside.length - insideCount)) / (setCount - 1))
    : 0;
  const outsideOffset = setCount > 1
    ? Math.round((index * Math.max(0, outside.length - outsideCount)) / (setCount - 1))
    : 0;
  return [
    ...outside.slice(outsideOffset, outsideOffset + outsideCount),
    ...inside.slice(insideOffset, insideOffset + insideCount)
  ];
}

export function selectQuestionPool(input) {
  const { subjectId, chapterId, isTrickMode } = input;
  const examSetId = normalizeExamSetId(input.examSetId, isTrickMode);
  const data = getQuestionData(subjectId, chapterId);
  let pool = [];

  if (isTrickMode) {
    const tricks = data.tricks || [];
    if (examSetId === "trick") {
      pool = tricks;
    } else {
      const setNumber = parseSetNumber(examSetId, "trick-");
      pool = tricks.filter((question) => question.trickSet === setNumber);
    }
  } else if (examSetId === "auto") {
    pool = [...(data.inside || []), ...(data.outside || [])];
  } else {
    const setNumber = parseSetNumber(examSetId, "de-");
    if (data.sets?.[setNumber]) {
      pool = data.sets[setNumber];
    } else {
      const all = [...(data.inside || []), ...(data.outside || [])];
      const tagged = setNumber
        ? all.filter((question) => question.examSet === setNumber)
        : [];
      pool = tagged.length > 0
        ? tagged
        : setNumber ? fixedSlice(data, chapterId, setNumber) : [];
    }
  }

  if (pool.length === 0) {
    throw new ApiError(404, "EXAM_SET_NOT_FOUND", "Bộ đề không tồn tại.");
  }
  return pool;
}

function shuffled(items) {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index--) {
    const target = randomInt(index + 1);
    [result[index], result[target]] = [result[target], result[index]];
  }
  return result;
}

function randomSample(items, count) {
  return shuffled(items).slice(0, Math.min(count, items.length));
}

function autoQuestionPool(subjectId, chapterId) {
  const data = getQuestionData(subjectId, chapterId);
  const inside = data.inside || [];
  const outside = data.outside || [];
  const fortyQuestionChapters = new Set([
    "lich-su-dang-mo-dau",
    "chuong-2",
    "chuong-3",
    "chuong-4",
    "chuong-5",
    "chuong-6"
  ]);
  const insideCount = inside.length <= 50
    ? inside.length
    : fortyQuestionChapters.has(chapterId) ? 36 : 37;
  const outsideCount = fortyQuestionChapters.has(chapterId) ? 4 : 3;
  return shuffled([
    ...randomSample(inside, insideCount),
    ...randomSample(outside, outsideCount)
  ]);
}

function publicQuestion(question) {
  return {
    id: question.id,
    question: question.question || question.q || "",
    options: question.options,
    difficulty: question.difficulty || null,
    sectionId: question.sectionId || null,
    subsectionId: question.subsectionId || null
  };
}

export function issueQuiz(user, input) {
  const examSetId = normalizeExamSetId(input.examSetId, input.isTrickMode);
  const normalizedInput = { ...input, examSetId };
  const issuedPool = examSetId === "auto" && !input.isTrickMode
    ? autoQuestionPool(input.subjectId, input.chapterId)
    : shuffled(selectQuestionPool(normalizedInput));
  if (issuedPool.length === 0) {
    throw new ApiError(404, "EXAM_SET_NOT_FOUND", "Bộ đề không tồn tại.");
  }
  const issued = issueExamTicket({
    uid: user.uid,
    subjectId: input.subjectId,
    chapterId: input.chapterId,
    examSetId,
    isTrickMode: input.isTrickMode,
    questionIds: issuedPool.map((question) => question.id)
  });
  return {
    questions: issuedPool.map(publicQuestion),
    examTicket: issued.ticket,
    expiresAt: issued.expiresAt
  };
}

function correctOptionText(question) {
  if (typeof question.answer === "number") return question.options?.[question.answer];
  if (typeof question.answer === "string") {
    const letterIndex = { A: 0, B: 1, C: 2, D: 3 }[question.answer.trim().toUpperCase()];
    return letterIndex === undefined ? question.answer.trim() : question.options?.[letterIndex];
  }
  return undefined;
}

function compositeId(subjectId, itemId) {
  return `${subjectId}__${itemId}`;
}

export async function gradeAndRecordQuiz(user, input) {
  const ticket = verifyExamTicket(input.examTicket, user.uid);
  const pool = selectQuestionPool(ticket);
  const lookup = new Map(pool.map((question) => [question.id, question]));
  const issuedQuestions = ticket.questionIds.map((id) => lookup.get(id));
  if (issuedQuestions.some((question) => !question)) {
    throw new ApiError(400, "QUESTION_SET_MISMATCH", "Đề đã cấp không còn khớp ngân hàng.");
  }
  const gradedResults = [];
  const wrongSubsections = new Set();
  let correctCount = 0;

  if (issuedQuestions.length !== input.clientAnswers.length) {
    throw new ApiError(400, "QUESTION_SET_MISMATCH", "Câu hỏi và câu trả lời không khớp.");
  }

  for (let index = 0; index < issuedQuestions.length; index++) {
    const original = issuedQuestions[index];
    const selectedIndex = input.clientAnswers[index];
    if (!Number.isInteger(selectedIndex) || selectedIndex < -1 || selectedIndex >= original.options.length) {
      throw new ApiError(400, "INVALID_OPTION_INDEX", "Chỉ số phương án không hợp lệ.");
    }
    const correctText = correctOptionText(original);
    const selectedText = selectedIndex === -1 ? null : original.options[selectedIndex];
    const isCorrect = selectedText !== null && selectedText === correctText;
    if (isCorrect) correctCount++;
    else if (original.subsectionId) wrongSubsections.add(original.subsectionId);
    gradedResults.push({
      id: original.id,
      isCorrect,
      correctOptionIndex: original.options.indexOf(correctText),
      explanation: original.explanation || ""
    });
  }

  const total = issuedQuestions.length;
  if (total === 0) {
    throw new ApiError(400, "QUESTION_SET_MISMATCH", "Bài làm không có câu hỏi.");
  }
  const score10 = scoreToTen(correctCount, total);
  const passed = score10 >= 7;
  const db = getAdminDb();
  const userRef = db.collection("users").doc(user.uid);
  const summaryRef = userRef.collection("quizSummary").doc(
    compositeId(ticket.subjectId, ticket.chapterId)
  );
  const chapterRef = userRef.collection("chapterProgress").doc(
    compositeId(ticket.subjectId, ticket.chapterId)
  );
  const rankingRef = db.collection("rankings").doc();
  const completedQuery = userRef.collection("subsectionProgress")
    .where("subjectId", "==", ticket.subjectId)
    .where("chapterId", "==", ticket.chapterId)
    .where("completed", "==", true);
  const required = listChapterSubsections(ticket.subjectId, ticket.chapterId);
  const requiredIds = new Set(required.map((item) => item.subsectionId));
  const affectedSubsections = passed
    ? required
    : required.filter((item) => wrongSubsections.has(item.subsectionId));
  const reviewRefs = affectedSubsections.map((item) => ({
    item,
    ref: userRef.collection("reviewItems").doc(
      compositeId(ticket.subjectId, item.subsectionId)
    )
  }));

  const transactionResult = await db.runTransaction(async (transaction) => {
    const [summarySnapshot, chapterSnapshot, completedSnapshot, ...reviewSnapshots] =
      await Promise.all([
        transaction.get(summaryRef),
        transaction.get(chapterRef),
        transaction.get(completedQuery),
        ...reviewRefs.map(({ ref }) => transaction.get(ref))
      ]);
    const summary = summarySnapshot.exists ? summarySnapshot.data() : {};
    const chapter = chapterSnapshot.exists ? chapterSnapshot.data() : {};
    const attemptsCount = (summary.attemptsCount || 0) + 1;
    const bestScore10 = keepHighestScore(summary.bestScore10, score10);
    const isNewBest = !Number.isFinite(summary.bestScore10) || score10 >= summary.bestScore10;
    const completedSubsections = new Set(
      completedSnapshot.docs
        .map((doc) => doc.data().subsectionId)
        .filter((id) => requiredIds.has(id))
    ).size;
    const allSubsectionsCompleted = required.length > 0 && completedSubsections === required.length;
    const chapterCompleted = isChapterCompleted({
      totalRequiredSubsections: required.length,
      completedSubsections,
      quizRequired: true,
      bestQuizScore10: bestScore10
    });
    const now = Timestamp.now();

    transaction.set(rankingRef, {
      uid: user.uid,
      name: user.displayName,
      subjectId: ticket.subjectId,
      score: correctCount,
      total,
      time: input.elapsedTime,
      date: now.toDate().toISOString(),
      chapterId: ticket.chapterId,
      examSetId: ticket.examSetId
    });
    transaction.set(summaryRef, {
      subjectId: ticket.subjectId,
      chapterId: ticket.chapterId,
      attemptsCount,
      bestScore10,
      bestRawScore: isNewBest ? correctCount : summary.bestRawScore,
      bestTotal: isNewBest ? total : summary.bestTotal,
      lastAttemptAt: now,
      updatedAt: now
    });
    transaction.set(
      chapterRef,
      {
        subjectId: ticket.subjectId,
        chapterId: ticket.chapterId,
        totalRequiredSubsections: required.length,
        completedSubsections,
        allSubsectionsCompleted,
        quizRequired: true,
        bestQuizScore10: bestScore10,
        completed: chapterCompleted,
        completedAt: chapterCompleted ? chapter.completedAt || now : null,
        updatedAt: now
      },
      { merge: true }
    );

    reviewRefs.forEach(({ item, ref }, index) => {
      const snapshot = reviewSnapshots[index];
      const previous = snapshot.exists ? snapshot.data() : {};
      const reasons = new Set(Array.isArray(previous.systemReasons) ? previous.systemReasons : []);
      if (passed) reasons.delete("QUIZ_BELOW_THRESHOLD");
      else reasons.add("QUIZ_BELOW_THRESHOLD");
      const systemReasons = [...reasons];
      const manual = previous.manual === true;
      transaction.set(
        ref,
        {
          subjectId: ticket.subjectId,
          chapterId: ticket.chapterId,
          sectionId: item.sectionId,
          subsectionId: item.subsectionId,
          manual,
          systemReasons,
          needsReview: manual || systemReasons.length > 0,
          createdAt: previous.createdAt || now,
          updatedAt: now
        },
        { merge: true }
      );
    });

    return { attemptsCount, bestScore10, chapterCompleted };
  });

  return {
    score: correctCount,
    total,
    score10,
    bestScore10: transactionResult.bestScore10,
    passed,
    chapterCompleted: transactionResult.chapterCompleted,
    attemptsCount: transactionResult.attemptsCount,
    gradedResults
  };
}
