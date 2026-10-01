"use client";

import React, { useState } from "react";
import {
  Scale,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Database,
  ShieldCheck,
  Zap,
  Users,
  Share2,
  Lock,
  KeyRound,
  FileCheck,
  ArrowRight
} from "lucide-react";

export default function DatabaseProsAndChallengesVisualizer() {
  const [activeCategory, setActiveCategory] = useState("storage-pros"); // 'storage-pros' | 'usage-pros' | 'challenges'

  return (
    <div className="my-8 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden text-slate-800 max-w-full">
      {/* Header - Wrap responsive tránh tràn */}
      <div className="px-4 sm:px-6 py-4 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 min-w-0">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 border border-orange-200 flex items-center justify-center font-bold flex-shrink-0">
            <Scale className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600 block truncate">
              Dual-Balance Grid • Mục 2.2
            </span>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 truncate">
              Ưu Điểm Vượt Trội Của CSDL & Thách Thức Nảy Sinh
            </h3>
          </div>
        </div>

        {/* View Toggle Pill */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-100 border border-slate-200 text-xs self-start sm:self-auto flex-shrink-0 min-w-0">
          <button
            type="button"
            onClick={() => setActiveCategory("storage-pros")}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all duration-200 whitespace-nowrap ${
              activeCategory === "storage-pros"
                ? "bg-emerald-600 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            1. Ưu điểm Dữ liệu
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory("usage-pros")}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all duration-200 whitespace-nowrap ${
              activeCategory === "usage-pros"
                ? "bg-blue-600 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            2. Hiệu quả Sử dụng
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory("challenges")}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all duration-200 whitespace-nowrap ${
              activeCategory === "challenges"
                ? "bg-amber-600 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            3. Vấn đề Nảy sinh
          </button>
        </div>
      </div>

      {/* Main Interactive Grid */}
      <div className="p-4 sm:p-6 min-w-0">
        {/* VIEW 1: ƯU ĐIỂM VỀ BẢN THÂN THÔNG TIN LƯU TRỮ */}
        {activeCategory === "storage-pros" && (
          <div className="space-y-4 animate-fadeIn min-w-0">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>A. Ưu Điểm Về Bản Thân Thông Tin Lưu Trữ:</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 min-w-0">
              <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-2 shadow-sm min-w-0">
                <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                  <Database className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span className="truncate">Giảm Trùng Lặp Tối Đa</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  Dữ liệu được chuẩn hóa giúp triệt tiêu sự dư thừa. Nhờ đó <strong>bảo đảm tính nhất quán (consistency)</strong> và <strong>tính toàn vẹn (integrity)</strong> tuyệt đối.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-2 shadow-sm min-w-0">
                <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                  <Zap className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span className="truncate">Đa Dạng Cách Truy Xuất</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  Dữ liệu có thể được truy vấn linh hoạt theo nhiều tiêu chí lọc, sắp xếp, gộp nhóm khác nhau thông qua ngôn ngữ truy vấn cấp cao như SQL.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-2 shadow-sm min-w-0 sm:col-span-2 lg:col-span-1">
                <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                  <Share2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span className="truncate">Khả Năng Chia Sẻ Rộng Rãi</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  Một nguồn dữ liệu trung tâm duy nhất có thể được chia sẻ cho hàng nghìn người dùng và nhiều chương trình ứng dụng cùng khai thác đồng thời.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 2: HIỆU QUẢ SỬ DỤNG THÔNG TIN */}
        {activeCategory === "usage-pros" && (
          <div className="space-y-4 animate-fadeIn min-w-0">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700">
              <Sparkles className="w-4 h-4 text-blue-600 flex-shrink-0" />
              <span>B. Ưu Điểm Về Hiệu Quả Sử Dụng Thông Tin:</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 min-w-0">
              <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-2 shadow-sm min-w-0">
                <div className="flex items-center gap-2 text-blue-900 font-bold text-sm">
                  <Users className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span className="truncate">Chia Sẻ Đa Người Dùng</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  Các phòng ban khác nhau (Đào tạo, Kế toán, Khảo thí) đều khai thác chung trên một nền tảng dữ liệu đồng bộ, tránh đứt gãy thông tin.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-2 shadow-sm min-w-0">
                <div className="flex items-center gap-2 text-blue-900 font-bold text-sm">
                  <ShieldCheck className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span className="truncate">Tiết Kiệm Tài Nguyên</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  Giảm chi phí mua sắm thiết bị lưu trữ, cắt giảm công sức sao chép dữ liệu thủ công và tiết kiệm chi phí bảo trì hệ thống.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-2 shadow-sm min-w-0 sm:col-span-2 lg:col-span-1">
                <div className="flex items-center gap-2 text-blue-900 font-bold text-sm">
                  <Zap className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span className="truncate">Tăng Hiệu Quả Khai Thác</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  Tốc độ tìm kiếm và xử lý báo cáo tổng hợp nhanh gấp hàng trăm lần so với duyệt tệp tuần tự truyền thống nhờ các cấu trúc chỉ mục (Index).
                </p>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 3: NHỮNG VẤN ĐỀ NẢY SINH KHI DÙNG CSDL */}
        {activeCategory === "challenges" && (
          <div className="space-y-4 animate-fadeIn min-w-0">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700">
              <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
              <span>C. Những Vấn Đề Thách Thức Nảy Sinh Khi Dùng CSDL:</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 min-w-0">
              <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-2 shadow-sm min-w-0">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                  <FileCheck className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span className="truncate">Trách Nhiệm Dữ Liệu</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  Cần quy định rõ ràng: <strong>Ai có trách nhiệm cập nhật, chỉnh sửa?</strong> Những thông tin nào được phép sửa và quy trình phê duyệt ra sao.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-2 shadow-sm min-w-0">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                  <Lock className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span className="truncate">Bảo Mật & Phân Quyền</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  Phải thiết lập hệ thống bảo mật chặt chẽ, phân cấp quyền hạn chi tiết đến từng bảng, từng cột để ngăn chặn triệt để truy cập trái phép.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-2 shadow-sm min-w-0 sm:col-span-2 lg:col-span-1">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                  <KeyRound className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span className="truncate">Giải Quyết Tranh Chấp</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  Xử lý bài toán xung đột tài nguyên khi hàng nghìn người cùng ghi vào một nguồn dữ liệu tại cùng một thời điểm mà không gây bế tắc (Deadlock).
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
