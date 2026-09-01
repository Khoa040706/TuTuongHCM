import assert from "node:assert/strict";
import test from "node:test";
import { scheduleFlashcard } from "../../lib/server/flashcard-scheduler.js";

const now = new Date("2026-09-01T00:00:00.000Z");

test("again resets repetitions and schedules one day", () => {
  const result = scheduleFlashcard(
    { repetitions: 5, intervalDays: 20, easeFactor: 2.5 },
    "again",
    now
  );
  assert.equal(result.repetitions, 0);
  assert.equal(result.intervalDays, 1);
  assert.equal(result.easeFactor, 2.3);
  assert.equal(result.nextReviewAt.toISOString(), "2026-09-02T00:00:00.000Z");
});

test("good uses the SM-2 first and second intervals", () => {
  const first = scheduleFlashcard({}, "good", now);
  assert.equal(first.intervalDays, 1);
  const second = scheduleFlashcard(first, "good", now);
  assert.equal(second.intervalDays, 6);
});

test("hard never lowers ease below 1.3", () => {
  const result = scheduleFlashcard(
    { repetitions: 2, intervalDays: 6, easeFactor: 1.3 },
    "hard",
    now
  );
  assert.equal(result.easeFactor, 1.3);
  assert.equal(result.intervalDays, 7);
});

test("easy grows interval and ease", () => {
  const result = scheduleFlashcard(
    { repetitions: 2, intervalDays: 6, easeFactor: 2.5 },
    "easy",
    now
  );
  assert.equal(result.repetitions, 3);
  assert.equal(result.intervalDays, 20);
  assert.equal(result.easeFactor, 2.65);
});

