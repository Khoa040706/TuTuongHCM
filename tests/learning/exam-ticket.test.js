import assert from "node:assert/strict";
import test from "node:test";
import {
  EXAM_TICKET_TTL_MS,
  issueExamTicket,
  verifyExamTicket
} from "../../lib/server/exam-ticket.js";

process.env.EXAM_TICKET_SECRET = "unit-test-exam-ticket-secret-with-at-least-32-characters";

const now = Date.parse("2026-09-02T00:00:00.000Z");
const input = {
  uid: "student-1",
  subjectId: "tu-tuong-hcm",
  chapterId: "chuong-2",
  examSetId: "auto",
  isTrickMode: false,
  questionIds: ["q3", "q1", "q2"]
};

test("signed exam ticket preserves the exact ordered issued set", () => {
  const issued = issueExamTicket(input, now);
  const claims = verifyExamTicket(issued.ticket, input.uid, now + 1);

  assert.deepEqual(claims.questionIds, input.questionIds);
  assert.equal(claims.examSetId, "auto");
  assert.equal(claims.expiresAt - claims.issuedAt, EXAM_TICKET_TTL_MS);
  assert.equal(issued.expiresAt, new Date(now + EXAM_TICKET_TTL_MS).toISOString());
});

test("tampered exam ticket is rejected", () => {
  const issued = issueExamTicket(input, now);
  const [payload, signature] = issued.ticket.split(".");
  const tampered = `${payload.slice(0, -1)}A.${signature}`;

  assert.throws(
    () => verifyExamTicket(tampered, input.uid, now + 1),
    (error) => error.code === "INVALID_EXAM_TICKET"
  );
});

test("exam ticket is bound to the authenticated user", () => {
  const issued = issueExamTicket(input, now);
  assert.throws(
    () => verifyExamTicket(issued.ticket, "student-2", now + 1),
    (error) => error.code === "INVALID_EXAM_TICKET"
  );
});

test("expired exam ticket is rejected with a dedicated error", () => {
  const issued = issueExamTicket(input, now);
  assert.throws(
    () => verifyExamTicket(issued.ticket, input.uid, now + EXAM_TICKET_TTL_MS),
    (error) => error.code === "EXAM_TICKET_EXPIRED"
  );
});
