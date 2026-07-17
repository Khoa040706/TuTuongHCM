"use server";

import { db } from "../../lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { subjects } from "../../data/index";

// Server Action to get questions for exam mode (stripping correct answer & explanation)
export async function getExamQuestions(subjectId, chapterId, examSetId, isTrickMode) {
  try {
    const currentSubject = subjects[subjectId];
    if (!currentSubject) return null;
    const questionsMap = currentSubject.questionsMap;
    const questionData = questionsMap[chapterId];
    if (!questionData) return null;

    let pool = [];
    if (isTrickMode) {
      pool = questionData.tricks || [];
    } else {
      pool = [...(questionData.inside || []), ...(questionData.outside || [])];
    }

    // Strip answers and explanations to prevent client-side inspection
    const secureQuestions = pool.map(q => {
      return {
        id: q.id,
        q: q.q,
        options: q.options,
        difficulty: q.difficulty,
        sectionId: q.sectionId,
        subsectionId: q.subsectionId
      };
    });

    return secureQuestions;
  } catch (error) {
    console.error("Error in getExamQuestions:", error);
    return null;
  }
}

// Server Action to grade the exam securely and write score directly to Firestore
export async function submitExamScore({ name, subjectId, chapterId, examSetId, isTrickMode, questionsState, clientAnswers, elapsedTime }) {
  try {
    const currentSubject = subjects[subjectId];
    if (!currentSubject) throw new Error("Môn học không tồn tại");
    const questionsMap = currentSubject.questionsMap;
    const questionData = questionsMap[chapterId];
    if (!questionData) throw new Error("Ngân hàng câu hỏi không tồn tại");

    let originalPool = [];
    if (isTrickMode) {
      originalPool = questionData.tricks || [];
    } else {
      originalPool = [...(questionData.inside || []), ...(questionData.outside || [])];
    }

    // Create a lookup map for validation (questionId -> correct option text & explanation)
    const answersLookup = {};
    originalPool.forEach(q => {
      answersLookup[q.id] = {
        correctText: q.options[q.answer],
        explanation: q.explanation
      };
    });

    let correctCount = 0;
    const gradedResults = questionsState.map((q, idx) => {
      const original = answersLookup[q.id];
      const clientSelectionIdx = clientAnswers[idx];
      const isAnswered = clientSelectionIdx !== -1 && clientSelectionIdx !== undefined;
      const clientSelectionText = isAnswered ? q.options[clientSelectionIdx] : null;

      const isCorrect = original && clientSelectionText === original.correctText;
      if (isCorrect) {
        correctCount++;
      }

      return {
        id: q.id,
        isCorrect,
        correctOptionIndex: original ? q.options.indexOf(original.correctText) : -1,
        explanation: original ? original.explanation : ""
      };
    });

    const record = {
      name,
      subjectId,
      score: correctCount,
      total: questionsState.length,
      time: elapsedTime,
      date: new Date().toISOString(),
      chapterId,
      examSetId: isTrickMode ? "trick" : examSetId
    };

    // Save directly to Firestore from the server
    const docRef = await addDoc(collection(db, "rankings"), record);
    console.log("Saved score on server to Firestore. ID:", docRef.id);

    return {
      score: correctCount,
      total: questionsState.length,
      gradedResults
    };
  } catch (error) {
    console.error("Error in submitExamScore:", error);
    throw new Error("Lỗi khi nộp điểm thi: " + error.message);
  }
}
