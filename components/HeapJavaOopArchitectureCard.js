"use client";

import React from "react";
import { FileCode, Terminal } from "lucide-react";

export default function HeapJavaOopArchitectureCard() {
  const methodGroups = [
    {
      group: "1. Navigation Helpers (Phép toán điều hướng)",
      methods: [
        { name: "parent(int i)", returnType: "int", desc: "Trả về ⌊i / 2⌋ (với i > 1)" },
        { name: "left(int i)", returnType: "int", desc: "Trả về 2 * i" },
        { name: "right(int i)", returnType: "int", desc: "Trả về 2 * i + 1" },
      ],
    },
    {
      group: "2. Core Mutators (Thuật toán cốt lõi)",
      methods: [
        { name: "shiftUp(int i)", returnType: "void", desc: "Đẩy nút i leo lên cha nếu vi phạm Max-Heap (O(log n))" },
        { name: "insert(int v)", returnType: "void", desc: "Chèn vào cuối mảng rồi gọi shiftUp(heapsize) (O(log n))" },
        { name: "shiftDown(int i)", returnType: "void", desc: "Đẩy nút i chìm xuống con lớn hơn (O(log n))" },
        { name: "extractMax()", returnType: "int", desc: "Rút root, đưa lá cuối lên rồi gọi shiftDown(1) (O(log n))" },
      ],
    },
    {
      group: "3. Constructors & Sorting (Xây dựng & Sắp xếp)",
      methods: [
        { name: "buildHeapSlow(int[] arr)", returnType: "void", desc: "Dựng Heap chèn từng phần tử (O(n log n))" },
        { name: "buildHeap(int[] arr)", returnType: "void", desc: "Dựng Heap nhanh Bottom-Up từ ⌊n/2⌋ về 1 (O(n))" },
        { name: "heapSort()", returnType: "int[]", desc: "Sắp xếp toàn bộ mảng theo thứ tự tăng dần (O(n log n))" },
      ],
    },
  ];

  return (
    <div className="my-8 rounded-3xl border border-sky-200/80 bg-gradient-to-br from-sky-50/80 via-white to-indigo-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-sky-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 border border-sky-300 text-sky-950 text-xs font-bold mb-2">
            <FileCode className="w-3.5 h-3.5 text-sky-700" />
            <span>Kiến Trúc Hướng Đối Tượng (Mục 10)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-sky-950 via-cyan-950 to-indigo-950 bg-clip-text text-transparent">
            Cài Đặt Java OOP &mdash; Thiết Kế Lớp Heap Cho PS1
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Tổng quan các trường dữ liệu nội bộ và danh sách phương thức cần hoàn thiện trong file <code>Heap.java</code> (Problem Set 1).
          </p>
        </div>

        {/* Java Badge */}
        <div className="px-3.5 py-1.5 rounded-xl border border-sky-300 bg-sky-100 text-sky-950 font-mono font-bold text-xs flex items-center gap-1.5 self-start md:self-auto shadow-sm">
          <Terminal className="w-3.5 h-3.5" />
          <span>Java OOP • CS2010 PS1</span>
        </div>
      </div>

      {/* Class Blueprint */}
      <div className="p-6 rounded-2xl bg-white border border-sky-100 space-y-4 shadow-sm mb-4">
        {/* Fields Section */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 font-mono text-xs text-slate-700 space-y-1">
          <span className="text-slate-500 text-[10px] uppercase font-bold block">Thuộc tính nội bộ (Private Fields):</span>
          <div className="text-sky-900 font-bold">• private int[] A; <span className="text-slate-500 font-normal">{"// Mảng 1D lưu các phần tử (1-based index)"}</span></div>
          <div className="text-emerald-900 font-bold">• private int heapsize; <span className="text-slate-500 font-normal">{"// Số lượng phần tử đang sử dụng thực tế"}</span></div>
        </div>

        {/* Method Groups */}
        <div className="space-y-3">
          {methodGroups.map((grp, gIdx) => (
            <div key={gIdx} className="space-y-1.5">
              <span className="text-xs font-mono font-bold text-amber-950">{grp.group}</span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {grp.methods.map((m, mIdx) => (
                  <div key={mIdx} className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-1 shadow-sm">
                    <div className="font-mono text-xs font-bold text-slate-900 flex items-center justify-between">
                      <span className="text-sky-900">{m.name}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-600 font-semibold">
                        {m.returnType}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-600 font-sans leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Note Callout */}
      <div className="p-4 rounded-xl bg-sky-50 border border-sky-200 text-xs font-sans text-slate-700 shadow-sm">
        📌 <strong>Ghi nhớ từ slide:</strong> Slide chỉ liệt kê danh sách các hàm cần cài đặt theo chuẩn OOP, không cung cấp code Java chi tiết trong slide bài giảng vì file Java khung được phát riêng cho sinh viên làm bài tập Problem Set 1 (PS1).
      </div>
    </div>
  );
}
