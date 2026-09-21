"use client";
import React, { useState } from "react";
import { CheckCircle2, XCircle, HelpCircle, RotateCcw, Sparkles, BookOpen } from "lucide-react";

export default function AdMicroQuizCard({
  quizId = "ad-quiz",
  badge = "Micro-Quiz 1-Click",
  question = "",
  options = [],
  correctIndex = 0,
  explanation = "",
  citation = ""
}) {
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (idx) => {
    if (showResult) return;
    setSelectedIdx(idx);
    setShowResult(true);
  };

  const handleReset = () => {
    setSelectedIdx(null);
    setShowResult(false);
  };

  const isCorrect = selectedIdx === correctIndex;

  return (
    <div className="my-8 rounded-2xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/40 via-white to-stone-50/40 p-5 md:p-6 shadow-sm shadow-emerald-950/5 transition-all">
      {/* Header */}
      <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-emerald-100">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-600/10 text-emerald-800 border border-emerald-300/40">
            <Sparkles size={13} className="text-emerald-600" />
            {badge}
          </span>
          <span className="text-xs text-stone-500 font-medium">Phản xạ nhanh</span>
        </div>

        {showResult && (
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-500 hover:text-emerald-700 bg-white hover:bg-stone-100 px-2.5 py-1 rounded-lg border border-stone-200 transition-all cursor-pointer"
          >
            <RotateCcw size={12} />
            <span>Làm lại</span>
          </button>
        )}
      </div>

      {/* Question */}
      <div className="text-stone-850 font-bold text-sm md:text-base leading-relaxed mb-4 flex items-start gap-2.5">
        <span className="w-5 h-5 rounded-full bg-emerald-700 text-white text-[11px] font-mono font-black flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
          ?
        </span>
        <span>{question}</span>
      </div>

      {/* Options List */}
      <div className="space-y-2.5 mb-4">
        {options.map((opt, idx) => {
          const letter = String.fromCharCode(65 + idx);
          const isChosen = selectedIdx === idx;
          const isRightAnswer = idx === correctIndex;

          let btnClass = "border-stone-200 bg-white hover:border-emerald-400 hover:bg-emerald-50/30 text-stone-750";
          let icon = (
            <span className="w-6 h-6 rounded-md bg-stone-100 border border-stone-300 text-xs font-mono font-bold text-stone-600 flex items-center justify-center shrink-0">
              {letter}
            </span>
          );

          if (showResult) {
            if (isRightAnswer) {
              btnClass = "border-emerald-500 bg-emerald-50/80 text-emerald-950 font-semibold shadow-xs ring-1 ring-emerald-400";
              icon = <CheckCircle2 size={20} className="text-emerald-600 shrink-0" />;
            } else if (isChosen && !isRightAnswer) {
              btnClass = "border-rose-400 bg-rose-50/80 text-rose-950 font-medium ring-1 ring-rose-300";
              icon = <XCircle size={20} className="text-rose-600 shrink-0" />;
            } else {
              btnClass = "border-stone-200 bg-stone-50/50 text-stone-400 opacity-60";
            }
          }

          return (
            <button
              key={idx}
              disabled={showResult}
              onClick={() => handleSelect(idx)}
              className={`w-full text-left p-3 md:p-3.5 rounded-xl border transition-all duration-200 flex items-center gap-3 text-xs md:text-sm cursor-pointer disabled:cursor-default ${btnClass}`}
            >
              {icon}
              <span className="flex-1 leading-snug">{opt}</span>
            </button>
          );
        })}
      </div>

      {/* Explanation Box */}
      {showResult && (
        <div className={`mt-4 p-4 rounded-xl border text-xs md:text-sm animate-in fade-in slide-in-from-top-2 duration-300 ${
          isCorrect
            ? "bg-emerald-50/90 border-emerald-300 text-emerald-950"
            : "bg-amber-50/90 border-amber-300 text-amber-950"
        }`}>
          <div className="flex items-center gap-2 font-bold mb-1.5">
            {isCorrect ? (
              <>
                <CheckCircle2 size={16} className="text-emerald-700" />
                <span className="text-emerald-900">Chính xác! Tư duy rất chuẩn.</span>
              </>
            ) : (
              <>
                <HelpCircle size={16} className="text-amber-700" />
                <span className="text-amber-900">Chưa chính xác! Hãy đọc kỹ giải thích dưới đây:</span>
              </>
            )}
          </div>
          <p className="text-stone-700 leading-relaxed font-normal">{explanation}</p>
          {citation && (
            <div className="mt-2.5 pt-2 border-t border-stone-200/60 flex items-center gap-1.5 text-[11px] text-stone-500 font-medium">
              <BookOpen size={12} className="text-emerald-600" />
              <span>{citation}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
