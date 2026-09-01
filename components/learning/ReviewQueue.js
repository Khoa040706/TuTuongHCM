"use client";
import React from "react";
import { X, BookOpen, AlertCircle, ArrowRight } from "lucide-react";

export default function ReviewQueue({
  isOpen,
  onClose,
  reviewItems = [],
  onSelectSubsection
}) {
  if (!isOpen) return null;

  const activeReviews = reviewItems.filter((r) => r.needsReview);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs font-sans animate-fade-in">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="p-6 border-b border-stone-100 flex items-center justify-between bg-stone-50/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base text-stone-850">Danh sách Cần Ôn Tập</h3>
              <p className="text-xs text-stone-500">
                {activeReviews.length} tiểu mục được hệ thống & bạn đánh dấu cần xem lại
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-stone-200/60 flex items-center justify-center text-stone-400 hover:text-stone-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List */}
        <div className="p-6 overflow-y-auto space-y-3 divide-y divide-stone-100 flex-1">
          {activeReviews.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center mb-3">
                <BookOpen className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-stone-800 text-sm">Tuyệt vời! Không có bài nào cần ôn</h4>
              <p className="text-xs text-stone-500 mt-1 max-w-xs mx-auto">
                Bạn đã nắm vững kiến thức các bài học đã qua. Tiếp tục phát huy nhé!
              </p>
            </div>
          ) : (
            activeReviews.map((item, idx) => (
              <div
                key={item.subsectionId || idx}
                className="pt-3 first:pt-0 flex items-center justify-between gap-4 group"
              >
                <div className="space-y-1">
                  <span className="text-xs font-bold text-stone-800 flex items-center gap-2">
                    <span>{item.subsectionId}</span>
                    {item.manual && (
                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-100 text-amber-800 font-semibold">
                        Thủ công
                      </span>
                    )}
                  </span>
                  {item.systemReasons && item.systemReasons.length > 0 && (
                    <div className="flex gap-1.5 flex-wrap">
                      {item.systemReasons.map((r, rIdx) => (
                        <span
                          key={rIdx}
                          className="text-[9px] px-1.5 py-0.2 rounded bg-rose-50 text-rose-600 font-semibold border border-rose-100"
                        >
                          {r === "FLASHCARD_AGAIN"
                            ? "Thẻ flashcard quên"
                            : r === "FLASHCARD_HARD"
                            ? "Thẻ flashcard khó"
                            : r}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => {
                    onSelectSubsection(item.subsectionId);
                    onClose();
                  }}
                  className="px-3 py-1.5 rounded-xl bg-stone-100 hover:bg-accent hover:text-white text-stone-700 text-xs font-bold transition-all flex items-center gap-1 cursor-pointer"
                >
                  <span>Học ngay</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
