"use client";
import React from "react";
import { Flame, Award, AlertTriangle, CheckCircle2, Zap, Radio } from "lucide-react";

export default function LsdTetOffensive1968() {
  return (
    <div className="my-8 rounded-2xl border border-red-400 dark:border-red-800 bg-gradient-to-br from-amber-50/60 via-white to-red-100/50 p-6 md:p-8 text-slate-900 dark:text-white shadow-xl">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-700 text-white text-xs font-bold uppercase tracking-wider mb-2 shadow-md">
          <Flame size={14} className="animate-bounce text-amber-300" /> Đêm mùng 30 Tết Mậu Thân (31-1-1968)
        </span>
        <h3 className="text-2xl md:text-3xl font-black font-serif text-slate-900 dark:text-white">
          Tổng Tiến Công Và Nổi Dậy Tết Mậu Thân 1968
        </h3>
        <p className="text-sm font-serif text-red-700 dark:text-red-400 font-bold mt-2 italic">
          Đòn tiến công chiến lược bất ngờ giáng thẳng vào các cơ quan đầu não Mỹ - Sài Gòn
        </p>
      </div>

      {/* Main Campaign Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-red-500 shadow-md">
          <div className="flex items-center gap-3 border-b border-red-200 dark:border-red-900/50 pb-3 mb-3">
            <Zap size={22} className="text-red-600" />
            <h4 className="font-bold text-base font-serif text-red-700 dark:text-red-400">
              Quy Mô Đột Kích Bất Ngờ Toàn Miền Nam
            </h4>
          </div>
          <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            Đồng loạt tiến công tại **37/44 thị xã, tỉnh lỵ** và **4 đô thị lớn**: Sài Gòn - Gia Định, Huế, Đà Nẵng, Cần Thơ. Đánh trực diện vào **Đại sứ quán Mỹ, Dinh Độc Lập, Bộ Tổng tham mưu Sài Gòn, Đài phát thanh**.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-amber-500 shadow-md">
          <div className="flex items-center gap-3 border-b border-amber-200 dark:border-amber-900/50 pb-3 mb-3">
            <Radio size={22} className="text-amber-600" />
            <h4 className="font-bold text-base font-serif text-amber-900 dark:text-amber-300">
              Tác Động Chuyển Bước Chiến Lược Của Mỹ
            </h4>
          </div>
          <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            Buộc Tổng thống Mỹ Lyndon B. Johnson phải tuyên bố: **Ngừng ném bom miền Bắc**, chấp nhận ngồi vào bàn đàm phán tại **Hội nghị Paris**, không ra ứng cử Tổng thống nhiệm kỳ II.
          </p>
        </div>
      </div>

      {/* Limitations & Self-Criticism */}
      <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-rose-300 dark:border-rose-900/60 shadow-md">
        <div className="flex items-center gap-3 border-b border-rose-200 dark:border-rose-900/40 pb-3 mb-3">
          <AlertTriangle size={20} className="text-rose-600" />
          <h4 className="font-bold text-sm md:text-base text-rose-700 dark:text-rose-400 font-serif">
            Hạn Chế Về Chỉ Đạo Chiến Lược Trong Đợt 2 & 3 (1968)
          </h4>
        </div>
        <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
          Do đánh giá chưa thật sát tương quan lực lượng, sau đợt 1 ta tiếp tục mở đợt 2 và đợt 3 tiến công vào đô thị khi kẻ thù đã phản kích dữ dội, dẫn đến **tổn thất nặng nề cho lực lượng cách mạng** ở một số địa bàn. Bộ Chính trị đã nghiêm túc kiểm điểm rút kinh nghiệm.
        </p>
      </div>
    </div>
  );
}
