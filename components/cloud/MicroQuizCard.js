"use client";
import React, { useState } from "react";
import { CheckCircle2, XCircle, HelpCircle, RotateCcw, Sparkles } from "lucide-react";

export default function MicroQuizCard({ question, options, answerIndex, explanation, hint }) {
  const [selected, setSelected] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleSelect = (index) => {
    if (selected !== null) return; // Prevent changing after answer
    setSelected(index);
    setShowExplanation(true);
  };

  const handleReset = () => {
    setSelected(null);
    setShowExplanation(false);
  };

  const isCorrect = selected === answerIndex;

  return (
    <div className="my-6 p-5 sm:p-6 rounded-2xl border border-stone-200 bg-stone-50/70 shadow-xs font-sans transition-all">
      <div className="flex items-center justify-between gap-3 mb-3">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-accent/10 text-accent flex items-center justify-center font-bold text-xs">
            <HelpCircle className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-black uppercase tracking-wider text-accent">
            Phản Xạ Nhanh • Micro-Check
          </span>
        </div>

        {selected !== null && (
          <button
            type="button"
            onClick={handleReset}
            className="text-[11px] font-bold text-stone-500 hover:text-stone-800 flex items-center gap-1 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Thử lại</span>
          </button>
        )}
      </div>

      <h4 className="text-sm sm:text-base font-bold text-stone-850 mb-4 leading-snug">
        {question}
      </h4>

      <div className="space-y-2.5 mb-4">
        {options.map((opt, idx) => {
          const isThisSelected = selected === idx;
          const isThisAnswer = idx === answerIndex;
          
          let btnStyle = "bg-white border-stone-200 text-stone-700 hover:bg-stone-100/80 hover:border-stone-300";
          if (selected !== null) {
            if (isThisAnswer) {
              btnStyle = "bg-emerald-50 border-emerald-400 text-emerald-900 font-semibold shadow-xs";
            } else if (isThisSelected && !isCorrect) {
              btnStyle = "bg-rose-50 border-rose-300 text-rose-900";
            } else {
              btnStyle = "bg-white/60 border-stone-200 text-stone-400 opacity-60";
            }
          }

          return (
            <button
              key={idx}
              type="button"
              disabled={selected !== null}
              onClick={() => handleSelect(idx)}
              className={`w-full p-3 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-start gap-3 cursor-pointer ${btnStyle}`}
            >
              <div className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                {String.fromCharCode(65 + idx)}
              </div>
              <span className="flex-1 leading-relaxed">{opt}</span>
              {selected !== null && isThisAnswer && (
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              )}
              {selected !== null && isThisSelected && !isCorrect && (
                <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
              )}
            </button>
          );
        })}
      </div>

      {showExplanation && (
        <div className={`p-4 rounded-xl border text-xs sm:text-sm leading-relaxed animate-in fade-in duration-300 ${
          isCorrect ? "bg-emerald-50/70 border-emerald-200 text-emerald-950" : "bg-amber-50/70 border-amber-200 text-amber-950"
        }`}>
          <div className="flex items-center gap-1.5 font-bold mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isCorrect ? "Chính xác tuyệt đối!" : "Gợi ý giải thích:"}</span>
          </div>
          <p>{explanation}</p>
        </div>
      )}
    </div>
  );
}
