"use client";
import React from "react";
import { Bookmark } from "lucide-react";

export default function BookmarkButton({ isBookmarked, onToggle, className = "" }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      title={isBookmarked ? "Bỏ đánh dấu bài học" : "Đánh dấu lưu bài học"}
      className={`p-2 rounded-xl transition-all flex items-center justify-center cursor-pointer select-none ${
        isBookmarked
          ? "bg-amber-100 text-amber-700 border border-amber-300"
          : "bg-stone-100 hover:bg-stone-200 text-stone-500 border border-stone-200"
      } ${className}`}
    >
      <Bookmark className={`w-4 h-4 ${isBookmarked ? "fill-amber-600 text-amber-600" : ""}`} />
    </button>
  );
}
