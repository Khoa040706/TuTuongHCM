"use client";

import React, { useState } from "react";
import { Database, ShieldCheck, CheckCircle2, ArrowRight, Sparkles, Layers, Award, Scale, Zap } from "lucide-react";

export default function NormalizationMasterSummaryDashboard() {
  const [selectedTopic, setSelectedTopic] = useState("tradeoff");

  return (
    <div className="my-8 rounded-2xl border border-indigo-200/80 bg-gradient-to-br from-indigo-50/40 via-white to-purple-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-indigo-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-600/20">
            <Award className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">NormalizationMasterSummaryDashboard</h3>
              <span className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-semibold text-indigo-800 border border-indigo-200">
                Tổng Kết Chương VI (Mục 9)
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Toàn cảnh lý thuyết chuẩn hóa, bản chất triệt tiêu dị thường &amp; Định lý đánh đổi cốt lõi 3NF vs BCNF
            </p>
          </div>
        </div>

        {/* Topic Switcher */}
        <div className="flex rounded-xl bg-indigo-100/80 p-1 border border-indigo-200">
          <button
            onClick={() => setSelectedTopic("tradeoff")}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
              selectedTopic === "tradeoff" ? "bg-indigo-600 text-white shadow-sm" : "text-indigo-900 hover:text-indigo-700"
            }`}
          >
            1. Định Lý Đánh Đổi
          </button>
          <button
            onClick={() => setSelectedTopic("evolution")}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
              selectedTopic === "evolution" ? "bg-indigo-600 text-white shadow-sm" : "text-indigo-900 hover:text-indigo-700"
            }`}
          >
            2. Thang Tiến Hóa Chuẩn Hóa
          </button>
        </div>
      </div>

      {/* Content Topic 1: Trade-off */}
      {selectedTopic === "tradeoff" && (
        <div className="mt-5 space-y-4 font-mono text-xs">
          <div className="rounded-xl bg-gradient-to-r from-indigo-900 via-purple-900 to-slate-900 p-5 text-white shadow-lg space-y-2">
            <div className="flex items-center gap-2 text-amber-300 font-bold font-sans text-xs uppercase">
              <Scale className="h-4 w-4" />
              <span>ĐỊNH LÝ ĐÁNH ĐỔI CỐT LÕI (FUNDAMENTAL TRADE-OFF THEOREM):</span>
            </div>
            <p className="font-sans text-xs text-indigo-100 leading-relaxed">
              Trong thiết kế cơ sở dữ liệu quan hệ, việc lựa chọn giữa <strong>3NF</strong> và <strong>BCNF</strong> là sự đánh đổi kinh điển giữa <u>bảo toàn toàn vẹn ràng buộc</u> và <u>triệt tiêu tuyệt đối dư thừa dữ liệu</u>:
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 font-sans text-xs">
            <div className="rounded-xl border border-emerald-300 bg-emerald-50/70 p-4 shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-emerald-950 font-bold text-sm">
                <ShieldCheck className="h-5 w-5 text-emerald-600" />
                <span>DẠNG CHUẨN 3 (3NF): HOÀN HẢO TOÀN DIỆN</span>
              </div>
              <p className="text-gray-700 leading-relaxed text-xs">
                Mọi lược đồ quan hệ <strong>LUÔN LUÔN</strong> có thể được phân rã thành các lược đồ con đạt <strong>3NF</strong> mà:
                <br />• <strong>Vừa bảo toàn nội dung</strong> (Lossless Join 100%).
                <br />• <strong>Vừa bảo toàn 100% phụ thuộc hàm</strong> (Dependency Preservation).
              </p>
            </div>

            <div className="rounded-xl border border-purple-300 bg-purple-50/70 p-4 shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-purple-950 font-bold text-sm">
                <Zap className="h-5 w-5 text-purple-600" />
                <span>DẠNG CHUẨN BOYCE-CODD (BCNF): NGHIÊM NGẶT</span>
              </div>
              <p className="text-gray-700 leading-relaxed text-xs">
                Mọi lược đồ quan hệ <strong>LUÔN LUÔN</strong> có thể được phân rã thành các lược đồ con đạt <strong>BCNF</strong> mà:
                <br />• <strong>Luôn bảo toàn nội dung</strong> (Lossless Join 100%).
                <br />• <strong>NHƯNG CÓ THỂ KHÔNG</strong> bảo toàn được toàn bộ tập phụ thuộc hàm ban đầu!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Content Topic 2: Evolution */}
      {selectedTopic === "evolution" && (
        <div className="mt-5 grid gap-2 sm:grid-cols-4 font-mono text-xs">
          <div className="rounded-xl border border-blue-200 bg-blue-50/60 p-4 space-y-1">
            <strong className="text-blue-950 font-bold block font-sans text-xs">1NF (Atomic)</strong>
            <p className="text-gray-600 font-sans text-[11px] leading-relaxed">
              Mọi thuộc tính đều là thuộc tính đơn nguyên tử. Khử đa trị và nhóm lặp.
            </p>
          </div>

          <div className="rounded-xl border border-teal-200 bg-teal-50/60 p-4 space-y-1">
            <strong className="text-teal-950 font-bold block font-sans text-xs">2NF (Full FD)</strong>
            <p className="text-gray-600 font-sans text-[11px] leading-relaxed">
              Đạt 1NF + Khử phụ thuộc bộ phận của thuộc tính không khóa vào khóa.
            </p>
          </div>

          <div className="rounded-xl border border-amber-200 bg-amber-50/60 p-4 space-y-1">
            <strong className="text-amber-950 font-bold block font-sans text-xs">3NF (No Transitive)</strong>
            <p className="text-gray-600 font-sans text-[11px] leading-relaxed">
              Đạt 2NF + Khử phụ thuộc bắc cầu của thuộc tính không khóa vào khóa.
            </p>
          </div>

          <div className="rounded-xl border border-purple-200 bg-purple-50/60 p-4 space-y-1">
            <strong className="text-purple-950 font-bold block font-sans text-xs">BCNF (Superkey LHS)</strong>
            <p className="text-gray-600 font-sans text-[11px] leading-relaxed">
              Vế trái của MỌI phụ thuộc hàm bắt buộc là Siêu khóa. Khử triệt để mọi dư thừa do FD.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
