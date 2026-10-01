"use client";

import React, { useState } from "react";
import { CheckCircle2, XCircle, RotateCcw, Award, Sparkles, HelpCircle } from "lucide-react";
import { formatMathText } from "../lib/mathRenderer";

export default function InlineCheckpointQuiz({ block }) {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const title = block?.title || "Mini Checkpoint Quiz";
  const description = block?.description || "Kiểm tra kiến thức nhanh củng cố bài học.";
  const questions = block?.questions || [];

  if (!questions || questions.length === 0) return null;

  const handleSelect = (qIdx, optIdx) => {
    if (showResults) return;
    setSelectedAnswers((prev) => ({ ...prev, [qIdx]: optIdx }));
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setShowResults(false);
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q, idx) => {
      const correctIdx = q.answer !== undefined ? q.answer : q.correctAnswer !== undefined ? q.correctAnswer : 0;
      if (selectedAnswers[idx] === correctIdx) score++;
    });
    return score;
  };

  const score = calculateScore();
  const allAnswered = questions.length > 0 && Object.keys(selectedAnswers).length === questions.length;

  return (
    <div className="my-8 rounded-2xl border border-amber-200/80 dark:border-stone-800 bg-white dark:bg-stone-900 p-4 sm:p-6 shadow-md max-w-full overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-stone-200/80 dark:border-stone-800 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20 mb-1.5">
            <Sparkles size={13} className="text-amber-500" />
            <span>Checkpoint Quiz</span>
            <span>•</span>
            <span>{questions.length} câu hỏi</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-850 dark:text-stone-100 flex items-center gap-2">
            <span>🎯</span>
            <span dangerouslySetInnerHTML={{ __html: formatMathText(title) }} />
          </h3>
          {description && (
            <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 mt-1">
              {description}
            </p>
          )}
        </div>

        {showResults && (
          <div className="flex items-center gap-3 self-end sm:self-center">
            <div className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 font-mono text-sm font-bold text-amber-800 dark:text-amber-300">
              <Award size={16} />
              <span>{score} / {questions.length}</span>
            </div>
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-xs font-bold text-stone-700 dark:text-stone-300 transition-colors cursor-pointer"
            >
              <RotateCcw size={13} />
              <span>Làm lại</span>
            </button>
          </div>
        )}
      </div>

      {/* Questions list */}
      <div className="space-y-6">
        {questions.map((q, qIdx) => {
          const correctIdx = q.answer !== undefined ? q.answer : q.correctAnswer !== undefined ? q.correctAnswer : 0;
          const userSelected = selectedAnswers[qIdx];
          const isAnswered = userSelected !== undefined;

          return (
            <div
              key={q.id || qIdx}
              className="rounded-xl border border-stone-200/60 dark:border-stone-800/80 bg-stone-50/50 dark:bg-stone-850/40 p-4 transition-all"
            >
              <div className="font-bold text-sm sm:text-base text-stone-850 dark:text-stone-150 mb-3 flex items-start gap-2.5">
                <span className="w-6 h-6 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-black font-mono flex items-center justify-center shrink-0 mt-0.5">
                  {qIdx + 1}
                </span>
                <span className="leading-relaxed" dangerouslySetInnerHTML={{ __html: formatMathText(q.question) }} />
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 gap-2 pl-0 sm:pl-8">
                {q.options && q.options.map((opt, optIdx) => {
                  let optStyle = "border-stone-200 dark:border-stone-750 bg-white dark:bg-stone-900 text-stone-750 dark:text-stone-300 hover:border-accent/40";

                  if (showResults) {
                    if (optIdx === correctIdx) {
                      optStyle = "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 font-medium";
                    } else if (userSelected === optIdx) {
                      optStyle = "border-rose-400 bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200";
                    } else {
                      optStyle = "border-stone-200 dark:border-stone-800 bg-white/50 dark:bg-stone-900/50 text-stone-400 dark:text-stone-600 opacity-60";
                    }
                  } else if (userSelected === optIdx) {
                    optStyle = "border-accent bg-accent/10 text-accent font-semibold shadow-xs";
                  }

                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelect(qIdx, optIdx)}
                      disabled={showResults}
                      className={`text-left p-3 rounded-xl border text-xs sm:text-sm transition-all flex items-start gap-2.5 cursor-pointer ${optStyle}`}
                    >
                      <span className="font-mono text-xs font-bold opacity-60 shrink-0 mt-0.5">
                        {String.fromCharCode(65 + optIdx)}.
                      </span>
                      <span className="leading-relaxed flex-1" dangerouslySetInnerHTML={{ __html: formatMathText(opt) }} />
                      {showResults && optIdx === correctIdx && (
                        <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                      )}
                      {showResults && userSelected === optIdx && optIdx !== correctIdx && (
                        <XCircle size={16} className="text-rose-500 shrink-0 mt-0.5" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation */}
              {showResults && q.explanation && (
                <div className="mt-3.5 pl-0 sm:pl-8">
                  <div className="p-3 rounded-xl bg-amber-50/70 dark:bg-stone-800 border border-amber-200/80 dark:border-stone-700 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed flex items-start gap-2">
                    <HelpCircle size={15} className="text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                    <div dangerouslySetInnerHTML={{ __html: formatMathText(q.explanation) }} />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer Submit */}
      {!showResults && (
        <div className="mt-6 pt-4 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between">
          <span className="text-xs text-stone-500">
            {Object.keys(selectedAnswers).length}/{questions.length} câu đã chọn
          </span>
          <button
            onClick={() => setShowResults(true)}
            disabled={!allAnswered}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
              allAnswered
                ? "bg-accent hover:bg-accent/90 text-white shadow-md active:scale-95"
                : "bg-stone-200 dark:bg-stone-800 text-stone-400 dark:text-stone-600 cursor-not-allowed"
            }`}
          >
            Kiểm tra đáp án
          </button>
        </div>
      )}
    </div>
  );
}
