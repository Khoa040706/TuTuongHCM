import assert from "node:assert/strict";
import test from "node:test";
import {
  isChapterCompleted,
  keepHighestScore,
  scoreToTen
} from "../../lib/server/learning-rules.js";

test("scoreToTen rounds to two decimal places", () => {
  assert.equal(scoreToTen(7, 9), 7.78);
});

test("keepHighestScore never lowers the saved score", () => {
  assert.equal(keepHighestScore(8.5, 6), 8.5);
  assert.equal(keepHighestScore(6, 8.5), 8.5);
  assert.equal(keepHighestScore(undefined, 7), 7);
});

test("chapter without quiz completes after all subsections", () => {
  assert.equal(isChapterCompleted({
    totalRequiredSubsections: 3,
    completedSubsections: 3,
    quizRequired: false,
    bestQuizScore10: null
  }), true);
});

test("chapter with quiz requires at least 7.0 and all subsections", () => {
  assert.equal(isChapterCompleted({
    totalRequiredSubsections: 3,
    completedSubsections: 3,
    quizRequired: true,
    bestQuizScore10: 7
  }), true);
  assert.equal(isChapterCompleted({
    totalRequiredSubsections: 3,
    completedSubsections: 3,
    quizRequired: true,
    bestQuizScore10: 6.99
  }), false);
  assert.equal(isChapterCompleted({
    totalRequiredSubsections: 3,
    completedSubsections: 2,
    quizRequired: true,
    bestQuizScore10: 10
  }), false);
});

