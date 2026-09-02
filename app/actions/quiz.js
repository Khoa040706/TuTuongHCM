"use server";

import { ApiError, actionError, successData } from "../../lib/server/api-response.js";
import { requireSession } from "../../lib/server/auth.js";
import { gradeAndRecordQuiz, issueQuiz } from "../../lib/server/quiz-service.js";
import {
  requireBoolean,
  requireFiniteNumber,
  requireObject,
  requireString
} from "../../lib/server/validation.js";

function validateBaseInput(value) {
  const input = requireObject(value);
  const examSetId = input.examSetId;
  if (
    !((typeof examSetId === "string" && examSetId.trim()) ||
      (typeof examSetId === "number" && Number.isFinite(examSetId)))
  ) {
    throw new ApiError(400, "VALIDATION_ERROR", "Dữ liệu gửi lên không hợp lệ.", {
      examSetId: "Phải là chuỗi hoặc số."
    });
  }
  return {
    subjectId: requireString(input.subjectId, "subjectId"),
    chapterId: requireString(input.chapterId, "chapterId"),
    examSetId: typeof examSetId === "string" ? examSetId.trim() : examSetId,
    isTrickMode: requireBoolean(input.isTrickMode, "isTrickMode")
  };
}

export async function getExamQuestions(payload) {
  try {
    const user = await requireSession();
    const input = validateBaseInput(payload);
    return successData(issueQuiz(user, input));
  } catch (error) {
    return actionError(error);
  }
}

export async function submitExamScore(payload) {
  try {
    const user = await requireSession();
    const input = requireObject(payload);
    const examTicket = requireString(input.examTicket, "examTicket", { max: 128_000 });
    if (!Array.isArray(input.clientAnswers)) {
      throw new ApiError(400, "VALIDATION_ERROR", "Dữ liệu gửi lên không hợp lệ.", {
        clientAnswers: "Phải là mảng."
      });
    }
    const clientAnswers = input.clientAnswers.map((answer, index) =>
      requireFiniteNumber(answer, `clientAnswers.${index}`, { min: -1, max: 100 })
    );
    const elapsedTime = requireFiniteNumber(input.elapsedTime, "elapsedTime", {
      min: 0,
      max: 24 * 60 * 60
    });
    const data = await gradeAndRecordQuiz(user, {
      examTicket,
      clientAnswers,
      elapsedTime
    });
    return successData(data);
  } catch (error) {
    return actionError(error);
  }
}
