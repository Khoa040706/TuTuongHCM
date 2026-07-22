"use client";
import React from "react";
import { Flag, Landmark, Users, CheckCircle2, Award, Star } from "lucide-react";

export default function LsdUnificationDashboard1976() {
  return (
    <div className="my-8 rounded-2xl border border-amber-300 dark:border-amber-700 bg-gradient-to-br from-amber-50/70 via-white to-red-50/50 p-6 md:p-8 text-slate-900 dark:text-white shadow-xl">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-600 text-white text-xs font-bold uppercase tracking-wider mb-2 shadow-md">
          <Flag size={14} className="fill-amber-300 text-amber-300" /> Ngày 25-4-1976 & Kỳ họp thứ nhất (24/6 - 3/7/1976)
        </span>
        <h3 className="text-2xl md:text-3xl font-black font-serif text-slate-900 dark:text-white">
          Hoàn Thành Thống Nhất Đất Nước Về Mặt Nhà Nước
        </h3>
        <p className="text-sm font-serif text-red-700 dark:text-red-400 font-bold mt-2 italic">
          "Nước Việt Nam là một, dân tộc Việt Nam là một" — Quyết định lịch sử hợp nhất hai miền
        </p>
      </div>

      {/* Process Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Card 1: Tổng tuyển cử 25-4-1976 */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-red-400 shadow-md">
          <div className="flex items-center gap-3 border-b border-red-200 dark:border-red-900/50 pb-3 mb-3">
            <Users size={24} className="text-red-600" />
            <div>
              <h4 className="font-bold text-base font-serif text-slate-900 dark:text-white">
                Tổng Tuyển Cử Ngày 25-4-1976
              </h4>
              <span className="text-xs text-red-700 dark:text-red-400 font-bold">Ngày hội lớn của toàn dân tộc</span>
            </div>
          </div>
          <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans mb-2">
            Hơn **23 triệu cử tri** (đạt tỉ lệ **98,77%**) đi bầu cử. Bầu ra **492 đại biểu** Quốc hội chung của nước Việt Nam thống nhất.
          </p>
        </div>

        {/* Card 2: Quốc hội khóa VI quyết định */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-amber-400 shadow-md">
          <div className="flex items-center gap-3 border-b border-amber-200 dark:border-amber-900/50 pb-3 mb-3">
            <Landmark size={24} className="text-amber-600" />
            <div>
              <h4 className="font-bold text-base font-serif text-slate-900 dark:text-white">
                Quyết Định Của Quốc Hội Khóa VI
              </h4>
              <span className="text-xs text-amber-700 dark:text-amber-400 font-bold">Tên nước, Thủ đô, Quốc kỳ, Quốc ca</span>
            </div>
          </div>
          <div className="space-y-1.5 text-xs md:text-sm text-slate-700 dark:text-slate-300 font-sans">
            <p>• **Tên nước**: Cộng hòa Xã hội Chủ nghĩa Việt Nam.</p>
            <p>• **Thủ đô**: Hà Nội | **Quốc kỳ**: Cờ đỏ sao vàng | **Quốc ca**: Tiến quân ca.</p>
            <p>• **Đổi tên thành phố**: Đổi tên Sài Gòn thành **Thành phố Hồ Chí Minh**.</p>
          </div>
        </div>
      </div>

      {/* Leadership Election Highlight */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-red-700 to-amber-700 text-white shadow-xl text-center">
        <Award size={32} className="mx-auto mb-2 text-amber-300" />
        <h4 className="text-lg font-bold font-serif mb-2">Bầu Các Chức Danh Lãnh Đạo Nhà Nước</h4>
        <p className="text-xs md:text-sm text-amber-100 max-w-2xl mx-auto leading-relaxed">
          • **Chủ tịch nước**: Đồng chí **Tôn Đức Thắng** | **Chủ tịch Quốc hội**: Đồng chí **Trường Chinh** <br />
          • **Thủ tướng Chính phủ**: Đồng chí **Phạm Văn Đồng**.
        </p>
      </div>
    </div>
  );
}
