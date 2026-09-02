import {
  createHmac,
  randomBytes,
  timingSafeEqual
} from "node:crypto";
import { ApiError } from "./api-response.js";

export const EXAM_TICKET_TTL_MS = 4 * 60 * 60 * 1000;
const MAX_CLOCK_SKEW_MS = 5 * 60 * 1000;
const TICKET_VERSION = 1;

function signingSecret() {
  const secret = process.env.EXAM_TICKET_SECRET;
  if (typeof secret !== "string" || secret.length < 32) {
    throw new ApiError(
      500,
      "INTERNAL_ERROR",
      "Chưa cấu hình EXAM_TICKET_SECRET hợp lệ phía server."
    );
  }
  return secret;
}

function encode(value) {
  return Buffer.from(value, "utf8").toString("base64url");
}

function signature(encodedPayload) {
  return createHmac("sha256", signingSecret())
    .update(encodedPayload)
    .digest("base64url");
}

function invalidTicket() {
  return new ApiError(400, "INVALID_EXAM_TICKET", "Vé đề thi không hợp lệ.");
}

export function issueExamTicket(input, now = Date.now()) {
  const questionIds = Array.isArray(input.questionIds) ? input.questionIds : [];
  if (
    !input.uid ||
    !input.subjectId ||
    !input.chapterId ||
    !input.examSetId ||
    questionIds.length === 0 ||
    questionIds.some((id) => typeof id !== "string" || !id) ||
    new Set(questionIds).size !== questionIds.length
  ) {
    throw invalidTicket();
  }

  const claims = {
    v: TICKET_VERSION,
    uid: input.uid,
    subjectId: input.subjectId,
    chapterId: input.chapterId,
    examSetId: input.examSetId,
    isTrickMode: input.isTrickMode === true,
    questionIds,
    nonce: randomBytes(16).toString("base64url"),
    issuedAt: now,
    expiresAt: now + EXAM_TICKET_TTL_MS
  };
  const encodedPayload = encode(JSON.stringify(claims));
  return {
    ticket: `${encodedPayload}.${signature(encodedPayload)}`,
    expiresAt: new Date(claims.expiresAt).toISOString()
  };
}

export function verifyExamTicket(ticket, expectedUid, now = Date.now()) {
  if (typeof ticket !== "string" || ticket.length > 128_000) throw invalidTicket();
  const parts = ticket.split(".");
  if (parts.length !== 2 || !parts[0] || !parts[1]) throw invalidTicket();

  const expectedSignature = Buffer.from(signature(parts[0]), "base64url");
  const suppliedSignature = Buffer.from(parts[1], "base64url");
  if (
    expectedSignature.length !== suppliedSignature.length ||
    !timingSafeEqual(expectedSignature, suppliedSignature)
  ) {
    throw invalidTicket();
  }

  let claims;
  try {
    claims = JSON.parse(Buffer.from(parts[0], "base64url").toString("utf8"));
  } catch {
    throw invalidTicket();
  }

  const questionIds = claims?.questionIds;
  if (
    claims?.v !== TICKET_VERSION ||
    claims.uid !== expectedUid ||
    typeof claims.subjectId !== "string" ||
    typeof claims.chapterId !== "string" ||
    typeof claims.examSetId !== "string" ||
    typeof claims.isTrickMode !== "boolean" ||
    !Array.isArray(questionIds) ||
    questionIds.length === 0 ||
    questionIds.some((id) => typeof id !== "string" || !id) ||
    new Set(questionIds).size !== questionIds.length ||
    !Number.isFinite(claims.issuedAt) ||
    !Number.isFinite(claims.expiresAt) ||
    claims.issuedAt > now + MAX_CLOCK_SKEW_MS ||
    claims.expiresAt <= claims.issuedAt ||
    claims.expiresAt - claims.issuedAt !== EXAM_TICKET_TTL_MS
  ) {
    throw invalidTicket();
  }
  if (claims.expiresAt <= now) {
    throw new ApiError(400, "EXAM_TICKET_EXPIRED", "Vé đề thi đã hết hạn.");
  }
  return claims;
}
