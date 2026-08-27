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
    <div className="my-8 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden text-slate-800">
      {/* Header */}
      <div className="px-5 py-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 border border-orange-200 flex items-center justify-center font-bold">
            <Scale className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600">
              Dual-Balance Grid • Mục 2.2
            </span>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
              Ưu Điểm Vượt Trội Của CSDL & Các Vấn Đề Thách Thức Nảy Sinh
            </h3>
          </div>
        </div>

        {/* View Toggle Pill */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 border border-slate-200 text-xs">
          <button
            onClick={() => setActiveCategory("storage-pros")}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
              activeCategory === "storage-pros"
                ? "bg-emerald-600 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            1. Ưu điểm Dữ liệu
          </button>
          <button
            onClick={() => setActiveCategory("usage-pros")}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
              activeCategory === "usage-pros"
                ? "bg-blue-600 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            2. Hiệu quả Sử dụng
          </button>
          <button
            onClick={() => setActiveCategory("challenges")}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
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
      <div className="p-6">
        {/* VIEW 1: ƯU ĐIỂM VỀ BẢN THÂN THÔNG TIN LƯU TRỮ */}
        {activeCategory === "storage-pros" && (
          <div className="space-y-4 animate-fadeIn">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> A. Ưu Điểm Về Bản Thân Thông Tin Lưu Trữ:
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-2 shadow-sm">
                <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                  <Database className="w-4 h-4 text-emerald-600" /> Giảm Trùng Lặp Tối Đa
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Dữ liệu được chuẩn hóa giúp triệt tiêu sự dư thừa. Nhờ đó <strong>bảo đảm tính nhất quán (consistency)</strong> và <strong>tính toàn vẹn (integrity)</strong> tuyệt đối.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-2 shadow-sm">
                <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                  <Zap className="w-4 h-4 text-emerald-600" /> Đa Dạng Cách Truy Xuất
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Dữ liệu có thể được truy vấn linh hoạt theo nhiều tiêu chí lọc, sắp xếp, gộp nhóm khác nhau thông qua ngôn ngữ truy vấn cấp cao như SQL.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-2 shadow-sm">
                <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                  <Share2 className="w-4 h-4 text-emerald-600" /> Khả Năng Chia Sẻ Rộng Rãi
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Một nguồn dữ liệu trung tâm duy nhất có thể được chia sẻ cho hàng nghìn người dùng và nhiều chương trình ứng dụng cùng khai thác đồng thời.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 2: HIỆU QUẢ SỬ DỤNG THÔNG TIN */}
        {activeCategory === "usage-pros" && (
          <div className="space-y-4 animate-fadeIn">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700">
              <Sparkles className="w-4 h-4 text-blue-600" /> B. Ưu Điểm Về Hiệu Quả Sử Dụng Thông Tin:
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-2 shadow-sm">
                <div className="flex items-center gap-2 text-blue-900 font-bold text-sm">
                  <Users className="w-4 h-4 text-blue-600" /> Chia Sẻ Đa Người Dùng
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Các phòng ban khác nhau (Đào tạo, Kế toán, Khảo thí) đều khai thác chung trên một nền tảng dữ liệu đồng bộ, tránh đứt gãy thông tin.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-2 shadow-sm">
                <div className="flex items-center gap-2 text-blue-900 font-bold text-sm">
                  <ShieldCheck className="w-4 h-4 text-blue-600" /> Tiết Kiệm Tài Nguyên
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Giảm chi phí mua sắm thiết bị lưu trữ, cắt giảm công sức sao chép dữ liệu thủ công và tiết kiệm chi phí bảo trì hệ thống.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-2 shadow-sm">
                <div className="flex items-center gap-2 text-blue-900 font-bold text-sm">
                  <Zap className="w-4 h-4 text-blue-600" /> Tăng Hiệu Quả Khai Thác
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Tốc độ tìm kiếm và xử lý báo cáo tổng hợp nhanh gấp hàng trăm lần so với duyệt tệp tuần tự truyền thống nhờ các cấu trúc chỉ mục (Index).
                </p>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 3: NHỮNG VẤN ĐỀ NẢY SINH KHI DÙNG CSDL */}
        {activeCategory === "challenges" && (
          <div className="space-y-4 animate-fadeIn">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700">
              <AlertCircle className="w-4 h-4 text-amber-600" /> C. Những Vấn Đề Thách Thức Nảy Sinh Khi Dùng CSDL:
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-2 shadow-sm">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                  <FileCheck className="w-4 h-4 text-amber-600" /> Trách Nhiệm Dữ Liệu
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Cần quy định rõ ràng: <strong>Ai có trách nhiệm cập nhật, chỉnh sửa?</strong> Những thông tin nào được phép sửa và quy trình phê duyệt ra sao.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-2 shadow-sm">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                  <Lock className="w-4 h-4 text-amber-600" /> Cơ Chế Bảo Mật & Phân Quyền
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Phải thiết lập hệ thống bảo mật chặt chẽ, phân cấp quyền hạn chi tiết đến từng bảng, từng cột để ngăn chặn truy cập trái phép.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-2 shadow-sm">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                  <KeyRound className="w-4 h-4 text-amber-600" /> Giải Quyết Tranh Chấp
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Xử lý bài toán xung đột tài nguyên khi hàng nghìn người cùng ghi vào một nguồn dữ liệu tại cùng một thời điểm mà không gây nghẽn (Deadlock).
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
