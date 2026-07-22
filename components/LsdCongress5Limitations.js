"use client";
import React from "react";
import { AlertTriangle, ShieldAlert } from "lucide-react";

export default function LsdCongress5Limitations() {
  return (
    <div className="my-8 rounded-2xl border border-rose-300 dark:border-rose-900/60 bg-gradient-to-br from-amber-50/40 via-white to-rose-50/40 p-5 md:p-8 shadow-xl">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-6">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-700 text-white text-xs font-bold uppercase tracking-wider mb-2">
          <AlertTriangle size={14} /> Hạn chế trong chỉ đạo
        </span>
        <h3 className="text-2xl md:text-3xl font-black font-serif text-slate-900 dark:text-white">
          Hạn Chế Của Đại Hội V (3-1982)
        </h3>
      </div>

      {/* Main Limitations */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-rose-400 shadow-md">
        <div className="space-y-4 text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
          <div className="p-3.5 rounded-xl bg-rose-50/70 dark:bg-rose-950/40 border border-rose-200">
            ⚠ **Chưa dứt khoát xóa bao cấp**: Chưa nhận thức đầy đủ sự cần thiết phải sửa đổi cơ chế quản lý kinh tế tập trung bao cấp vốn đã bộc lộ nhiều nhược điểm.
          </div>
          <div className="p-3.5 rounded-xl bg-rose-50/70 dark:bg-rose-950/40 border border-rose-200">
            ⚠ **Vẫn ưu tiên công nghiệp nặng**: Vẫn còn chủ trương tiếp tục xây dựng công nghiệp nặng vượt quá khả năng thực tế, chưa dồn toàn lực cho nông nghiệp và công nghiệp hàng tiêu dùng.
          </div>
          <div className="p-3.5 rounded-xl bg-rose-50/70 dark:bg-rose-950/40 border border-rose-200">
            ⚠ **Bế tắc lưu thông phân phối**: Chưa giải quyết được các khuyết điểm trầm trọng trên mặt trận phân phối, lưu thông và giá - lương - tiền.
          </div>
        </div>
      </div>
    </div>
  );
}
