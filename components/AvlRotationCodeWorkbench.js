"use client";

import React, { useState } from "react";
import { Play, Sparkles, Cpu } from "lucide-react";

export default function AvlRotationCodeWorkbench() {
  const [activeLine, setActiveLine] = useState(0); // 0: overview, 1..8 lines

  const codeLines = [
    {
      num: 1,
      code: "BSTVertex rotateLeft(BSTVertex T) {",
      comment: "// Điều kiện tiên quyết: T.right != null",
      desc: "Bắt đầu hàm quay trái quanh đỉnh T.",
    },
    {
      num: 2,
      code: "  BSTVertex w = T.right;",
      comment: "// w là con phải của T (sẽ là gốc mới sau xoay)",
      desc: "Gán con trỏ tạm w trỏ tới đỉnh con phải của T.",
    },
    {
      num: 3,
      code: "  w.parent = T.parent;",
      comment: "// Nối w trực tiếp lên cha của T",
      desc: "Đưa w lên thế chỗ của T trong quan hệ với cha của T.",
    },
    {
      num: 4,
      code: "  T.parent = w;",
      comment: "// T giờ trở thành con của w",
      desc: "Cập nhật cha của T là w (đổi vai trò cha-con).",
    },
    {
      num: 5,
      code: "  T.right = w.left;",
      comment: "// Nhượng lại cây con trái của w cho T.right",
      desc: "Cây con trung gian B (w.left) được chuyển sang làm con phải mới của T.",
    },
    {
      num: 6,
      code: "  if (w.left != null) w.left.parent = T;",
      comment: "// Cập nhật ngược parent cho cây con B",
      desc: "Nếu cây con B tồn tại, cập nhật parent của nó trỏ về T.",
    },
    {
      num: 7,
      code: "  w.left = T;",
      comment: "// Gắn T làm con trái chính thức của w",
      desc: "Hoàn tất hoán vị cấu trúc: T nằm dưới w bên trái.",
    },
    {
      num: 8,
      code: "  // update height(T) then height(w); return w;",
      comment: "// Cập nhật lại height chỉ tốn O(1)",
      desc: "Tính lại height cho 2 đỉnh bị đổi vai trò và trả về gốc mới w.",
    },
  ];

  return (
    <div className="my-8 rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-100 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-900 text-xs font-semibold mb-2">
            <Cpu className="w-3.5 h-3.5 text-emerald-700" />
            <span>Mã Nguồn Cài Đặt Phép Xoay O(1) (Mục 4.3)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-900 via-teal-800 to-emerald-900 bg-clip-text text-transparent">
            Java Pseudocode: rotateLeft(BSTVertex T)
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Từng bước hoán đổi con trỏ chính xác trong bộ nhớ, chạy trong thời gian <strong className="text-emerald-800 font-mono">O(1)</strong>.
          </p>
        </div>

        {/* Step Controller */}
        <div className="flex items-center gap-2 self-start md:self-auto">
          <button
            onClick={() => setActiveLine(0)}
            className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all"
          >
            Toàn bộ code
          </button>
          <button
            onClick={() => setActiveLine((prev) => (prev < 8 ? prev + 1 : 1))}
            className="px-4 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm"
          >
            <Play className="w-3.5 h-3.5" />
            {activeLine === 0 ? "Chạy từng dòng" : `Dòng tiếp theo (${activeLine}/8)`}
          </button>
        </div>
      </div>

      {/* Code & Pointer Breakdown Workbench */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Code Lines Panel (7 cols) — TERMINAL CODE NỀN TỐI */}
        <div className="lg:col-span-7 rounded-2xl bg-slate-950 border border-slate-800 p-4 font-mono text-xs overflow-x-auto shadow-md">
          {/* macOS 3 Dots Header */}
          <div className="flex items-center gap-1.5 pb-3 mb-2 border-b border-slate-800">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
            <span className="text-[11px] text-slate-400 font-mono ml-2 font-semibold">rotateLeft.java</span>
          </div>

          <div className="space-y-1">
            {codeLines.map((line) => {
              const isCurrent = activeLine === line.num;

              return (
                <div
                  key={line.num}
                  onClick={() => setActiveLine(line.num)}
                  className={`p-1.5 rounded-xl cursor-pointer transition-all flex items-start gap-2.5 ${
                    isCurrent
                      ? "bg-emerald-950/90 border border-emerald-500 text-white shadow-md font-bold"
                      : "hover:bg-slate-900/60 text-slate-300"
                  }`}
                >
                  <span className="text-slate-600 select-none w-4 text-right text-[11px] font-bold">{line.num}</span>
                  <div className="flex-1">
                    <div className={isCurrent ? "text-emerald-300" : "text-slate-200"}>{line.code}</div>
                    <div className="text-[10px] text-slate-500 font-sans italic">{line.comment}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pointer Inspector Card (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl bg-white border border-emerald-100 p-5 shadow-sm space-y-4 self-stretch flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 font-mono">
                Giải Thích Thao Tác Con Trỏ
              </span>
              <span className="px-2 py-0.5 rounded-lg text-[10px] font-bold bg-emerald-50 text-emerald-900 border border-emerald-200 font-mono">
                {activeLine === 0 ? "Tổng Quan" : `Dòng 0${activeLine}`}
              </span>
            </div>

            <p className="text-xs text-slate-700 leading-relaxed font-sans">
              {activeLine === 0
                ? "Nhấp vào từng dòng mã hoặc bấm 'Chạy từng dòng' để xem chi tiết cách các con trỏ parent, left, right được hoán chuyển."
                : codeLines[activeLine - 1].desc}
            </p>

            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700 space-y-2">
              <div className="font-bold text-emerald-900 text-[11px] uppercase">Bản đối xứng (Mirrored):</div>
              <p className="text-[11px] text-slate-600 font-sans leading-relaxed">
                <code>rotateRight(T)</code> hoạt động đối xứng 100%: đổi <code>right &harr; left</code> và áp dụng cho con trái <code>w = T.left</code>.
              </p>
            </div>
          </div>

          {/* Time Complexity Guarantee */}
          <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-300 text-xs text-emerald-950 space-y-1 shadow-sm">
            <div className="font-bold flex items-center gap-1.5 text-emerald-900">
              <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
              Độ Phức Tạp: O(1) Tuyệt Đối
            </div>
            <p className="text-[11px] leading-relaxed text-slate-700">
              Không có vòng lặp, không đệ quy. Toàn bộ hàm chỉ thực hiện đúng <strong>6 phép gán con trỏ</strong> và 2 phép cộng tính lại chiều cao!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
