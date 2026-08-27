"use client";

import React from "react";
import { Sparkles, Layers, Cpu, Compass } from "lucide-react";

export default function AvlNextLessonHeapBridge() {
  return (
    <div className="my-8 rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-100 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-900 text-xs font-semibold mb-2">
            <Compass className="w-3.5 h-3.5 text-emerald-700" />
            <span>Cầu Nối Bài Học Kế Tiếp (Mục 9)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-900 via-teal-800 to-emerald-900 bg-clip-text text-transparent">
            Bài Học Kế Tiếp: ADT Priority Queues &amp; Binary Heaps
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Chuyển giao từ cây tìm kiếm tổng quát sang cấu trúc hàng đợi ưu tiên cực nhanh trên mảng.
          </p>
        </div>

        <div className="px-3.5 py-1.5 rounded-xl border border-emerald-300 bg-emerald-50 text-emerald-900 font-mono font-bold text-xs flex items-center gap-2 self-start md:self-auto shadow-sm">
          <span>Chương 10 Đang Chờ Đón!</span>
        </div>
      </div>

      {/* Grid: Motivation Bridge */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="p-5 rounded-2xl bg-white border border-emerald-100 shadow-sm space-y-2.5">
          <span className="text-xs font-bold text-emerald-950 uppercase font-mono flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-emerald-700" />
            1. Khi Nào BST/AVL Trở Nên Thừa Thãi?
          </span>
          <p className="text-xs text-slate-700 leading-relaxed font-sans">
            Cây AVL cung cấp khả năng tìm kiếm mọi phần tử bất kỳ. Tuy nhiên, trong nhiều bài toán thực tế (như Điều phối tác vụ CPU, Thuật toán Dijkstra, Mã hóa Huffman), ta <strong>chỉ cần liên tục lấy phần tử có độ ưu tiên lớn nhất / nhỏ nhất</strong> (<code>ExtractMax / ExtractMin</code>).
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-emerald-100 shadow-sm space-y-2.5">
          <span className="text-xs font-bold text-emerald-950 uppercase font-mono flex items-center gap-1.5">
            <Cpu className="w-4 h-4 text-emerald-700" />
            2. Sự Kì Diệu Của Binary Heap (Cây Trên Mảng):
          </span>
          <p className="text-xs text-slate-700 leading-relaxed font-sans">
            Binary Heap là một <strong>Complete Binary Tree</strong> nhưng được lưu trữ trực tiếp trên <strong>Mảng 1 chiều</strong> không cần bất kỳ con trỏ nào! Vị trí cha-con được tính bằng phép nhân/chia chỉ số <code>2*i + 1</code> và <code>(i-1)/2</code> siêu tốc!
          </p>
        </div>
      </div>

      {/* Footer Banner */}
      <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-emerald-950 font-mono font-bold">
          <Sparkles className="w-4 h-4 text-emerald-700 flex-shrink-0" />
          <span>Hẹn gặp lại ở Bài 10: ADT Priority Queues &amp; Binary Heaps!</span>
        </div>
      </div>
    </div>
  );
}
