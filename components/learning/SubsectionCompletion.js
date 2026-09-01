"use client";
import React from "react";
import { CheckCircle2, ArrowDownCircle, Sparkles, Loader2 } from "lucide-react";
import { useSubsectionCompletion } from "../../hooks/useSubsectionCompletion";

export default function SubsectionCompletion({
  subsectionId,
  isCompleted,
  completedAt,
  onComplete
}) {
  const { reachedEnd, isSubmitting, sentinelRef, handleCompleteClick } = useSubsectionCompletion(
    subsectionId,
    onComplete
  );

  return (
    <div className="mt-12 pt-8 border-t border-stone-200/80 font-sans">
      {/* Invisible Sentinel to detect scroll-to-end */}
      <div ref={sentinelRef} className="h-4 w-full pointer-events-none opacity-0" aria-hidden="true" />

      <div className={`p-6 rounded-2xl border transition-all duration-300 ${
        isCompleted
          ? "bg-emerald-50/70 border-emerald-200"
          : reachedEnd
          ? "bg-amber-50/70 border-amber-300 shadow-sm"
          : "bg-stone-50 border-stone-200"
      }`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              {isCompleted ? (
                <>
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span className="font-bold text-sm text-emerald-800 uppercase tracking-wider">Đã hoàn thành tiểu mục</span>
                </>
              ) : reachedEnd ? (
                <>
                  <Sparkles className="w-5 h-5 text-amber-600 animate-bounce" />
                  <span className="font-bold text-sm text-amber-800 uppercase tracking-wider">Sẵn sàng hoàn thành</span>
                </>
              ) : (
                <>
                  <ArrowDownCircle className="w-5 h-5 text-stone-400" />
                  <span className="font-bold text-sm text-stone-600 uppercase tracking-wider">Tiến trình đọc bài</span>
                </>
              )}
            </div>
            <p className="text-xs text-stone-600">
              {isCompleted
                ? `Bài học đã được ghi nhận hoàn thành${completedAt ? ` lúc ${new Date(completedAt).toLocaleTimeString("vi-VN")}` : ""}.`
                : reachedEnd
                ? "Bạn đã đọc hết nội dung bài học! Bấm xác nhận để cập nhật tiến độ."
                : "Vui lòng cuộn xem hết toàn bộ nội dung bài học để mở khóa nút hoàn thành."}
            </p>
          </div>

          <button
            type="button"
            disabled={!reachedEnd || isCompleted || isSubmitting}
            onClick={handleCompleteClick}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs md:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer select-none ${
              isCompleted
                ? "bg-emerald-600 text-white shadow-none cursor-default opacity-90"
                : reachedEnd
                ? "bg-amber-600 hover:bg-amber-700 active:scale-95 text-white shadow-md shadow-amber-600/20"
                : "bg-stone-200 text-stone-400 cursor-not-allowed"
            }`}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Đang ghi nhận...</span>
              </>
            ) : isCompleted ? (
              <>
                <CheckCircle2 className="w-4 h-4" />
                <span>Đã Hoàn Thành</span>
              </>
            ) : (
              <>
                <CheckCircle2 className="w-4 h-4" />
                <span>Hoàn Thành Bài Học</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
