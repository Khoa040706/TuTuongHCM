"use client";
import React, { useState } from "react";
import { CheckCircle2, AlertTriangle, HelpCircle, ShieldCheck } from "lucide-react";

export default function QueueFullEmptyCompare() {
  const [activeTab, setActiveTab] = useState("sol2");

  return (
    <div className="w-full bg-white text-slate-800 border border-slate-200/80 rounded-2xl shadow-lg p-5 md:p-6 my-6 font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-slate-200">
        <div>
          <span className="text-xs font-bold font-mono bg-amber-100 text-amber-800 border border-amber-200 px-2.5 py-1 rounded-full uppercase inline-block">
            Mục 7.3 - Bẫy thi quan trọng
          </span>
          <h3 className="text-xl font-extrabold text-slate-900 mt-1.5">
            Giải quyết Vấn đề Mơ hồ Full/Empty (Ambiguous State)
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab("sol1")}
            className={`px-3 py-1.5 text-xs font-bold font-mono rounded-lg transition cursor-pointer ${
              activeTab === "sol1"
                ? "bg-slate-800 text-white shadow-sm border border-slate-700"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
            }`}
          >
            Solution 1 (Biến count/size)
          </button>
          <button
            onClick={() => setActiveTab("sol2")}
            className={`px-3 py-1.5 text-xs font-bold font-mono rounded-lg transition cursor-pointer ${
              activeTab === "sol2"
                ? "bg-amber-500 text-slate-950 font-black shadow-md border border-amber-600"
                : "bg-slate-100 text-amber-800 hover:bg-amber-100"
            }`}
          >
            ★ Solution 2 (Chừa 1 ô trống)
          </button>
        </div>
      </div>

      {/* Problem Alert Box */}
      <div className="my-4 p-4 bg-rose-50 border border-rose-200 text-rose-900 rounded-xl flex items-start gap-3 shadow-xs">
        <HelpCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
        <div className="text-xs font-sans text-rose-900 leading-relaxed">
          <strong className="text-rose-950 font-mono text-sm block mb-1">
            Câu hỏi bẫy thi: <code className="bg-rose-100 text-rose-950 px-1.5 py-0.5 rounded font-mono border border-rose-200">(front == back)</code> có nghĩa là gì?
          </strong>
          👉 <strong>Đáp án: Có thể là cả Full lẫn Empty (Both A and B).</strong> Khi Queue rỗng, <code className="font-mono bg-rose-100/80 px-1 py-0.5 rounded text-rose-950">front == back</code>. Nhưng nếu offer nạp đầy mảng tuần hoàn mà không xử lý khéo, <code className="font-mono bg-rose-100/80 px-1 py-0.5 rounded text-rose-950">back</code> quay lại đúng vị trí <code className="font-mono bg-rose-100/80 px-1 py-0.5 rounded text-rose-950">front</code>, khiến <code className="font-mono bg-rose-100/80 px-1 py-0.5 rounded text-rose-950">front == back</code> lại trùng khớp! Đó chính là sự mơ hồ.
        </div>
      </div>

      {/* Side by Side Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        {/* Solution 1 */}
        <div
          className={`p-5 rounded-xl border transition-all ${
            activeTab === "sol1"
              ? "bg-slate-50 border-2 border-cyan-500 shadow-md text-slate-800"
              : "bg-slate-50 border-slate-200 text-slate-800"
          }`}
        >
          <div className="flex items-center justify-between mb-3 border-b border-slate-200 pb-2">
            <h4 className="font-bold text-cyan-700 font-mono text-sm">Solution 1: Dùng biến đếm `count` / `size`</h4>
            <span className="text-[10px] font-mono bg-slate-200 text-slate-600 border border-slate-300 px-2 py-0.5 rounded">Tốn bộ nhớ phụ</span>
          </div>

          <p className="text-xs text-slate-600 mb-4 leading-relaxed">
            Duy trì thêm 1 biến đếm <code className="text-cyan-700 font-mono font-semibold bg-cyan-50 px-1 rounded border border-cyan-200">int count = 0;</code> hoặc cờ trạng thái <code className="text-cyan-700 font-mono font-semibold bg-cyan-50 px-1 rounded border border-cyan-200">boolean isFull;</code>. Khi offer tăng count, poll giảm count.
          </p>

          <div className="bg-slate-950 text-slate-200 font-mono text-xs p-3 rounded-xl border border-slate-800 shadow-sm space-y-1.5">
            <div className="flex items-center gap-1.5 pb-1.5 border-b border-slate-800 mb-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
            </div>
            <div><span className="text-slate-500">{"// Kiểm tra Empty:"}</span></div>
            <div className="text-emerald-400 font-bold">isEmpty = (count == 0);</div>
            <div className="pt-1"><span className="text-slate-500">{"// Kiểm tra Full:"}</span></div>
            <div className="text-rose-400 font-bold">isFull = (count == maxSize);</div>
          </div>

          <div className="mt-4 text-[11px] text-slate-600 italic">
            • <strong className="text-slate-800 font-bold">Ưu điểm:</strong> Dùng đủ 100% dung lượng mảng.<br />
            • <strong className="text-slate-800 font-bold">Nhược điểm:</strong> Tốn thêm 1 biến lưu trạng thái, phải cập nhật liên tục ở mọi thao tác offer/poll.
          </div>
        </div>

        {/* Solution 2 */}
        <div
          className={`p-5 rounded-xl border transition-all ${
            activeTab === "sol2"
              ? "bg-amber-50/60 border-2 border-amber-400 text-slate-900 shadow-md"
              : "bg-amber-50/30 border border-amber-200 text-slate-800"
          }`}
        >
          <div className="flex items-center justify-between mb-3 border-b border-amber-200/80 pb-2">
            <h4 className="font-bold text-amber-800 font-mono text-sm flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-600" /> Solution 2: Chừa 1 ô trống (Leave a gap)
            </h4>
            <span className="text-[10px] font-mono bg-amber-100 text-amber-900 border border-amber-300 px-2 py-0.5 rounded font-extrabold">
              ƯU TIÊN TRONG MÔN HỌC
            </span>
          </div>

          <p className="text-xs text-slate-700 mb-4 leading-relaxed">
            Không dùng biến count. Luôn luôn hi sinh chừa lại 1 vị trí trống trong mảng. Khi chỉ còn đúng 1 ô trống, coi như Queue đã <strong>FULL</strong>.
          </p>

          <div className="bg-slate-950 text-slate-200 font-mono text-xs p-3 rounded-xl border border-slate-800 shadow-sm space-y-1.5">
            <div className="flex items-center gap-1.5 pb-1.5 border-b border-slate-800 mb-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
            </div>
            <div><span className="text-slate-500">{"// Trạng thái Empty:"}</span></div>
            <div className="text-emerald-400 font-bold">front == back</div>
            <div className="pt-1"><span className="text-slate-500">{"// Trạng thái Full (ô tiếp theo đụng front):"}</span></div>
            <div className="text-amber-300 font-bold">(back + 1) % maxSize == front</div>
          </div>

          <div className="mt-4 text-[11px] text-amber-950 font-medium">
            • <strong className="text-amber-900 font-bold">Ưu điểm:</strong> Code cực kỳ gọn gàng, không cần biến phụ.<br />
            • <strong className="text-amber-900 font-bold">Nhược điểm:</strong> Mảng kích thước N chỉ lưu tối đa (N - 1) phần tử.
          </div>
        </div>
      </div>

      {/* Summary Footer */}
      <div className="p-3 bg-teal-50 text-teal-900 border border-teal-200 rounded-xl font-mono text-xs font-bold flex items-center justify-between shadow-xs">
        <span className="flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
          Code trong bài thi & slide giảng dạy của môn học 100% sử dụng <strong>Solution 2</strong>.
        </span>
      </div>
    </div>
  );
}

