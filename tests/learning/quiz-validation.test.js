import assert from "node:assert/strict";
import test from "node:test";
import {
  inspectQuestionSetIds,
  QUESTION_SET_STATUS
} from "../../lib/server/quiz-validation.js";

const expected = [{ id: "q1" }, { id: "q2" }, { id: "q3" }];

test("accepts the complete issued question set in any order", () => {
  assert.equal(
    inspectQuestionSetIds(expected, [{ id: "q3" }, { id: "q1" }, { id: "q2" }]),
    QUESTION_SET_STATUS.MATCH
  );
});

test("rejects a submitted subset", () => {
  assert.equal(
    inspectQuestionSetIds(expected, [{ id: "q1" }]),
    QUESTION_SET_STATUS.MISMATCH
  );
});

test("rejects a same-length set containing an unissued question", () => {
  assert.equal(
    inspectQuestionSetIds(expected, [{ id: "q1" }, { id: "q2" }, { id: "other" }]),
    QUESTION_SET_STATUS.MISMATCH
  );
});

test("reports duplicate submitted question IDs", () => {
  assert.equal(
    inspectQuestionSetIds(expected, [{ id: "q1" }, { id: "q1" }, { id: "q2" }]),
    QUESTION_SET_STATUS.DUPLICATE_SUBMITTED_ID
  );
});

test("rejects an empty question set", () => {
  assert.equal(
    inspectQuestionSetIds([], []),
    QUESTION_SET_STATUS.MISMATCH
  );
});
