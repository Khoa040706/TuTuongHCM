"use client";

import React, { useState } from "react";
import {
  BookOpen,
  Layers,
  KeyRound,
  Divide,
  GitBranch,
  Sparkles,
  CheckCircle2,
  Table,
  Zap,
  HelpCircle
} from "lucide-react";

export default function DatabaseChapter2SummaryDashboard() {
  const [activeTab, setActiveTab] = useState("concepts"); // 'concepts' | 'operators' | 'erd-cheat'

  return (
    <div className="my-8 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden text-slate-800">
      {/* Header */}
      <div className="px-5 py-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 border border-orange-200 flex items-center justify-center font-bold">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600">
              Comprehensive Chapter II Review • Tóm Tắt Ôn Thi
            </span>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
              Bảng Tổng Kết & Cẩm Nang Ôn Thi Toàn Diện Chương II
            </h3>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap gap-1 p-1 rounded-xl bg-slate-100 border border-slate-200 text-xs font-mono">
          <button
            onClick={() => setActiveTab("concepts")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === "concepts" ? "bg-orange-600 text-white font-bold shadow-sm" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            1. Khái Niệm & Khóa
          </button>
          <button
            onClick={() => setActiveTab("operators")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === "operators" ? "bg-blue-600 text-white font-bold shadow-sm" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            2. 10 Phép Toán ĐSQH
          </button>
          <button
            onClick={() => setActiveTab("erd-cheat")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === "erd-cheat" ? "bg-emerald-600 text-white font-bold shadow-sm" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            3. 7 Bước ERD & Mẹo Thi
          </button>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="p-6 space-y-5">
        {/* TAB 1: CONCEPTS & KEYS */}
        {activeTab === "concepts" && (
          <div className="space-y-4">
            <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-xs text-left border-collapse font-sans">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-200 text-slate-700 font-mono">
                    <th className="p-3 w-1/3">Khái Niệm</th>
                    <th className="p-3">Định Nghĩa Ngắn Gọn & Bản Chất Cốt Lõi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="p-3 font-bold font-mono text-slate-900">Thuộc tính (Attribute)</td>
                    <td className="p-3 text-slate-700">Đặc trưng của đối tượng, có tên phân biệt và kiểu dữ liệu riêng.</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="p-3 font-bold font-mono text-slate-900">Miền giá trị (Domain)</td>
                    <td className="p-3 text-slate-700">Tập hợp các giá trị hợp lệ mà thuộc tính đó có thể nhận: D(Ai).</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 font-bold font-mono text-slate-900">Bộ (Tuple)</td>
                    <td className="p-3 text-slate-700">Một dòng trong bảng quan hệ, biểu diễn một thể hiện của đối tượng.</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="p-3 font-bold font-mono text-slate-900">Quan hệ (Relation)</td>
                    <td className="p-3 text-slate-700">Tập con của tích Descartes các miền giá trị: r ⊆ D(A₁) × ... × D(Aₙ).</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 font-bold font-mono text-slate-900">Lược đồ quan hệ (Schema)</td>
                    <td className="p-3 text-slate-700">Tập thuộc tính cần quản lý của đối tượng và mối liên hệ giữa chúng: R(U).</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="p-3 font-bold font-mono text-slate-900">Lược đồ CSDL</td>
                    <td className="p-3 text-slate-700">Tập hợp tất cả các lược đồ quan hệ trong cùng một hệ thống quản lý.</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 font-bold font-mono text-orange-700">Siêu khóa (Super Key)</td>
                    <td className="p-3 text-slate-700">Tập thuộc tính xác định duy nhất một bộ: ti(SK) ≠ tj(SK) với mọi ti ≠ tj.</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="p-3 font-bold font-mono text-blue-700">Khóa (Key / Candidate Key)</td>
                    <td className="p-3 text-slate-700">Siêu khóa tối thiểu (mọi tập con thực sự của nó không là siêu khóa).</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 font-bold font-mono text-amber-700">Khóa chính (Primary Key)</td>
                    <td className="p-3 text-slate-700">Một khóa tối thiểu được người thiết kế lựa chọn để cài đặt định danh.</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="p-3 font-bold font-mono text-emerald-700">Khóa ngoại (Foreign Key)</td>
                    <td className="p-3 text-slate-700">Tập thuộc tính trong quan hệ này nhưng là khóa của một quan hệ khác.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 2: 10 RELATIONAL OPERATORS */}
        {activeTab === "operators" && (
          <div className="space-y-4">
            <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-xs text-left border-collapse font-sans">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-200 text-blue-900 font-mono">
                    <th className="p-3">Phép Toán</th>
                    <th className="p-3 text-center">Ký Hiệu</th>
                    <th className="p-3">Ý Nghĩa Cốt Lõi</th>
                    <th className="p-3 text-center">Số Ngôi & Điều Kiện</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-mono text-[11px]">
                  <tr className="bg-white">
                    <td className="p-3 font-bold text-slate-900">Chọn (Selection)</td>
                    <td className="p-3 text-center text-orange-600 font-bold text-sm">σ</td>
                    <td className="p-3 text-slate-700 font-sans">Lọc các dòng (bộ) thỏa mãn biểu thức điều kiện C.</td>
                    <td className="p-3 text-center text-slate-500">1 ngôi</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="p-3 font-bold text-slate-900">Chiếu (Projection)</td>
                    <td className="p-3 text-center text-blue-600 font-bold text-sm">π</td>
                    <td className="p-3 text-slate-700 font-sans">Cắt các cột (thuộc tính), tự động khử các dòng trùng lặp.</td>
                    <td className="p-3 text-center text-slate-500">1 ngôi</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 font-bold text-slate-900">Tích Descartes</td>
                    <td className="p-3 text-center text-purple-600 font-bold text-sm">×</td>
                    <td className="p-3 text-slate-700 font-sans">Ghép mọi cặp bộ giữa 2 quan hệ rời nhau (|r × s| = |r| × |s|).</td>
                    <td className="p-3 text-center text-purple-800 font-semibold">2 ngôi (rời nhau)</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="p-3 font-bold text-slate-900">Kết nối (θ-Join)</td>
                    <td className="p-3 text-center text-emerald-600 font-bold text-sm">⋈</td>
                    <td className="p-3 text-slate-700 font-sans">Ghép các bộ có liên quan theo điều kiện so sánh θ.</td>
                    <td className="p-3 text-center text-slate-500">2 ngôi</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 font-bold text-slate-900">Kết nối tự nhiên</td>
                    <td className="p-3 text-center text-emerald-600 font-bold text-sm">* hoặc ⋈</td>
                    <td className="p-3 text-slate-700 font-sans">Kết nối bằng tại thuộc tính trùng tên, tự động khử 1 cột trùng.</td>
                    <td className="p-3 text-center text-slate-500">2 ngôi</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="p-3 font-bold text-slate-900">Hợp (Union)</td>
                    <td className="p-3 text-center text-pink-600 font-bold text-sm">∪</td>
                    <td className="p-3 text-slate-700 font-sans">Bộ thuộc r₁ hoặc r₂ (đã khử trùng lặp).</td>
                    <td className="p-3 text-center text-pink-800 font-semibold">2 ngôi (tương thích)</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 font-bold text-slate-900">Giao (Intersection)</td>
                    <td className="p-3 text-center text-teal-600 font-bold text-sm">∩</td>
                    <td className="p-3 text-slate-700 font-sans">Bộ thuộc đồng thời cả r₁ và r₂.</td>
                    <td className="p-3 text-center text-teal-800 font-semibold">2 ngôi (tương thích)</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="p-3 font-bold text-slate-900">Hiệu (Difference)</td>
                    <td className="p-3 text-center text-rose-600 font-bold text-sm">−</td>
                    <td className="p-3 text-slate-700 font-sans">Bộ thuộc r nhưng không thuộc s.</td>
                    <td className="p-3 text-center text-rose-800 font-semibold">2 ngôi (tương thích)</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 font-bold text-slate-900">Chia (Division)</td>
                    <td className="p-3 text-center text-amber-600 font-bold text-sm">÷</td>
                    <td className="p-3 text-slate-700 font-sans">Tìm bộ liên quan với MỌI bộ của quan hệ kia (∀).</td>
                    <td className="p-3 text-center text-slate-500">2 ngôi</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="p-3 font-bold text-slate-900">Đặt lại tên (Rename)</td>
                    <td className="p-3 text-center text-indigo-600 font-bold text-sm">←</td>
                    <td className="p-3 text-slate-700 font-sans">Đặt tên quan hệ trung gian và thuộc tính giúp biểu thức rõ ràng.</td>
                    <td className="p-3 text-center text-slate-500">1 ngôi</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: ERD TRANSFORMATION & CHEAT-SHEET */}
        {activeTab === "erd-cheat" && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 space-y-2 text-xs shadow-sm">
              <div className="font-bold text-amber-900 font-mono flex items-center gap-1.5 text-sm">
                <Zap className="w-4 h-4 text-amber-600" /> CẨM NANG MẸO NHANH GIẢI BÀI THI ĐẠI SỐ QUAN HỆ:
              </div>
              <ul className="space-y-1.5 text-slate-700 font-sans list-disc pl-4 leading-relaxed">
                <li><strong>Hợp, giao, hiệu:</strong> Chỉ áp dụng cho 2 quan hệ <strong>tương thích</strong> (cùng tập thuộc tính U).</li>
                <li><strong>Tích Descartes:</strong> Chỉ áp dụng cho 2 quan hệ <strong>rời nhau</strong> (không có thuộc tính chung).</li>
                <li><strong>Từ khóa "TẤT CẢ", "MỌI", "ÍT NHẤT NHƯ":</strong> ➔ Gợi ý dùng ngay <strong>Phép chia (÷)</strong>.</li>
                <li><strong>Từ khóa "CHƯA TỪNG", "KHÔNG MUA", "NGOẠI TRỪ":</strong> ➔ Gợi ý dùng ngay <strong>Phép hiệu (−)</strong>.</li>
                <li><strong>Chiến lược chung:</strong> Luôn tổ hợp <strong>σ (lọc điều kiện)</strong> + <strong>π (chọn cột)</strong> + <strong>* (kết nối)</strong> để trả lời các câu hỏi phức tạp.</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200 space-y-2 text-xs font-mono shadow-sm">
              <div className="font-bold text-emerald-800 uppercase text-[11px] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 7 Bước Chuyển Đổi ERD Sang Relations (Ghi nhớ nhanh):
              </div>
              <div className="space-y-1 text-slate-700 font-sans text-xs">
                <div>1. <strong>Thực thể thường:</strong> 1 quan hệ (đa trị tách riêng kèm FK).</div>
                <div>2. <strong>Thực thể yếu:</strong> Khóa chính = Khóa riêng phần + Khóa ngoại thực thể mạnh (NOT NULL).</div>
                <div>3. <strong>Quan hệ 2 ngôi:</strong> 1:N ➔ FK bên N; M:N ➔ tạo quan hệ mới; 1:1 ➔ FK bên tùy chọn.</div>
                <div>4. <strong>Thực thể kết hợp:</strong> Có ID riêng ➔ PK riêng; không có ➔ tổ hợp 2 FK.</div>
                <div>5. <strong>Quan hệ 1 ngôi (đệ quy):</strong> 1:N ➔ FK đệ quy; M:N ➔ bảng kết hợp mới.</div>
                <div>6. <strong>Quan hệ 3 ngôi/n-ngôi:</strong> n + 1 quan hệ (n thực thể + 1 bảng kết hợp).</div>
                <div>7. <strong>Quan hệ cha/con:</strong> PK cha vừa là PK vừa là FK ở mỗi quan hệ con (1:1).</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
