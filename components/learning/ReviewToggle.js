"use client";
import React from "react";
import { AlertCircle } from "lucide-react";

export default function ReviewToggle({ reviewItem, onToggle, className = "" }) {
  const needsReview = Boolean(reviewItem?.needsReview);
  const isManual = Boolean(reviewItem?.manual);
  const systemReasons = reviewItem?.systemReasons || [];

  return (
    <div className="inline-flex items-center gap-1.5">
      <button
        type="button"
        onClick={onToggle}
        title={needsReview ? "Bỏ đánh dấu cần ôn lại" : "Đánh dấu bài này cần ôn lại"}
        className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer select-none ${
          needsReview
            ? "bg-rose-100 text-rose-800 border border-rose-300"
            : "bg-stone-100 hover:bg-stone-200 text-stone-600 border border-stone-200"
        } ${className}`}
      >
        <AlertCircle className={`w-3.5 h-3.5 ${needsReview ? "text-rose-600 fill-rose-100" : "text-stone-400"}`} />
        <span>{needsReview ? "Cần ôn lại" : "Đánh dấu ôn"}</span>
      </button>

      {systemReasons.length > 0 && (
        <span
          title={`Hệ thống ghi nhận cần ôn tập: ${systemReasons.join(", ")}`}
          className="px-1.5 py-0.5 text-[10px] font-bold rounded bg-rose-50 text-rose-600 border border-rose-200"
        >
          {systemReasons.length} lỗi
        </span>
      )}
    </div>
  );
}
