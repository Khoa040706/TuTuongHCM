"use client";

import React, { useState } from "react";
import { Sliders, Sparkles, Play, RotateCcw, ArrowRight, CheckCircle2, Layers } from "lucide-react";

export default function CustomQueryTreeSandbox() {
  const [filterYear, setFilterYear] = useState("2009");
  const [targetPublisher, setTargetPublisher] = useState("NXB Trẻ");
  const [showOptimized, setShowOptimized] = useState(false);

  return (
    <div className="my-8 rounded-2xl border border-teal-200/80 bg-gradient-to-br from-teal-50/40 via-white to-emerald-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-teal-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-600 text-white shadow-md shadow-teal-600/20">
            <Sliders className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">CustomQueryTreeSandbox</h3>
              <span className="rounded-full bg-teal-100 px-2.5 py-0.5 text-xs font-semibold text-teal-800 border border-teal-200">
                Sandbox Tối Ưu Cây Truy Vấn Tự Do
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Tùy biến điều kiện truy vấn Thư viện và quan sát cây đại số quan hệ tối ưu hóa tự động
            </p>
          </div>
        </div>

        <button
          onClick={() => setShowOptimized(!showOptimized)}
          className="flex items-center gap-2 rounded-xl bg-teal-600 px-4 py-2 text-xs font-bold text-white shadow hover:bg-teal-700 transition-all"
        >
          <Sparkles className="h-4 w-4" />
          <span>{showOptimized ? "Xem Cây Ban Đầu" : "Tối Ưu Hóa Cây Truy Vấn"}</span>
        </button>
      </div>

      {/* Input Controls */}
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
        <div className="rounded-xl border border-teal-200 bg-white p-4 space-y-1.5 shadow-sm">
          <label className="font-bold text-gray-700 font-sans block">Điều kiện ngày mượn (năm):</label>
          <select
            value={filterYear}
            onChange={(e) => setFilterYear(e.target.value)}
            className="w-full rounded-lg border border-gray-300 p-2 text-xs bg-gray-50 focus:bg-white focus:border-teal-500 focus:outline-none"
          >
            <option value="2009">Mượn trước 12/01/2009</option>
            <option value="2015">Mượn trước 01/01/2015</option>
            <option value="2020">Mượn trước 01/01/2020</option>
          </select>
        </div>

        <div className="rounded-xl border border-teal-200 bg-white p-4 space-y-1.5 shadow-sm">
          <label className="font-bold text-gray-700 font-sans block">Nhà xuất bản:</label>
          <select
            value={targetPublisher}
            onChange={(e) => setTargetPublisher(e.target.value)}
            className="w-full rounded-lg border border-gray-300 p-2 text-xs bg-gray-50 focus:bg-white focus:border-teal-500 focus:outline-none"
          >
            <option value="NXB Trẻ">NXB Trẻ</option>
            <option value="NXB Kim Đồng">NXB Kim Đồng</option>
            <option value="NXB Giáo Dục">NXB Giáo Dục</option>
          </select>
        </div>
      </div>

      {/* Result Display */}
      <div className="mt-4 rounded-xl border border-teal-200 bg-white p-5 shadow-sm space-y-3 font-mono text-xs">
        <div className="flex items-center justify-between border-b border-gray-100 pb-2">
          <span className="text-gray-500 font-sans text-xs font-bold">
            {showOptimized ? "BIỂU THỨC ĐÃ TỐI ƯU HÓA HOÀN TOÀN:" : "BIỂU THỨC SƠ KHAI (CHƯA TỐI ƯU):"}
          </span>
          <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
            showOptimized ? "bg-emerald-100 text-emerald-900 border border-emerald-300" : "bg-red-100 text-red-900 border border-red-200"
          }`}>
            {showOptimized ? "Cây tối ưu sát lá ✓" : "Cây chưa tối ưu ✗"}
          </span>
        </div>

        <div className="rounded-xl bg-slate-950 p-4 text-emerald-300 font-mono text-xs sm:text-sm text-center shadow-inner leading-relaxed">
          {showOptimized ? (
            `π_{tensach}( π_{tensach, masach}( σ_{tennxb = '${targetPublisher}'}(Sach) ) ⋈_{Sach.masach = Muon.masach} ( π_{masach, madg}( σ_{ngay < '01/01/${filterYear}'}(Muon) ) ⋈ π_{madg}(DocGia) ) )`
          ) : (
            `π_{tensach}( σ_{(ngay < '01/01/${filterYear}') ∧ (tennxb = '${targetPublisher}')}( Sach * Muon * DocGia ) )`
          )}
        </div>

        <div className="rounded-lg bg-teal-50/70 p-3.5 border border-teal-200 text-teal-950 font-sans text-xs">
          <strong className="text-teal-900 block font-bold mb-0.5">
            {showOptimized ? "🔍 CÁC LUẬT TỐI ƯU ĐÃ ĐƯỢC TỰ ĐỘNG ÁP DỤNG:" : "⚠️ ĐẶC ĐIỂM CÂY SƠ KHAI:"}
          </strong>
          {showOptimized ? (
            <p className="leading-relaxed">
              • Đẩy <code>σ_{`tennxb = '${targetPublisher}'`}</code> xuống trực tiếp bảng <code>Sach</code> trước khi nối.
              <br />• Đẩy <code>σ_{`ngay < '01/01/${filterYear}'`}</code> xuống trực tiếp bảng <code>Muon</code> trước khi nối.
              <br />• Đẩy các phép chiếu <code>π</code> xuống để loại bỏ các cột không dùng như <code>tacgia, diachi</code>.
            </p>
          ) : (
            <p className="leading-relaxed">
              Toàn bộ các bảng <code>Sach, Muon, DocGia</code> được nhân kết nối trước khi áp dụng điều kiện lọc năm <code>{filterYear}</code> và NXB <code>{targetPublisher}</code> ➔ Gây tắc nghẽn bộ nhớ đệm.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
