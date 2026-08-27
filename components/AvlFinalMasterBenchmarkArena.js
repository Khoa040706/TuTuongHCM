"use client";

import React, { useState } from "react";
import { Trophy, Sparkles } from "lucide-react";

export default function AvlFinalMasterBenchmarkArena() {
  const [selectedOpIndex, setSelectedOpIndex] = useState(1); // 1 is Insert(age)

  const rows = [
    {
      no: 1,
      op: "Search(age)",
      unsorted: "O(n)",
      sorted: "O(log n)",
      bbst: "O(log n)",
      winner: "bBST / Sorted",
      desc: "Tìm kiếm bằng Binary Search trên Sorted Array và theo đường đi h trên bBST đều tốn O(log n).",
    },
    {
      no: 2,
      op: "Insert(age)",
      unsorted: "O(1)",
      sorted: "O(n)",
      bbst: "O(log n)",
      winner: "bBST Đột Phá",
      isCrucial: true,
      desc: "⭐ BƯỚC ĐỘT PHÁ CỦA bBST: Hạ chi phí chèn từ O(n) (dời mảng) xuống O(log n) (xoay con trỏ), cân bằng hoàn hảo so với Unsorted O(1) nhưng không thể tìm kiếm.",
    },
    {
      no: 3,
      op: "FindOldest()",
      unsorted: "O(n)",
      sorted: "O(1)",
      bbst: "O(log n)",
      winner: "Sorted Array",
      desc: "Sorted Array lấy phần tử cuối A[n-1] tốn O(1). bBST đi từ Root rẽ phải liên tục tốn h = O(log n).",
    },
    {
      no: 4,
      op: "ListSortedAges()",
      unsorted: "O(n log n)",
      sorted: "O(n)",
      bbst: "O(n)",
      winner: "bBST / Sorted",
      desc: "bBST dùng Inorder Traversal ghé thăm n đỉnh tốn O(n) y hệt như in tuần tự một mảng đã sắp xếp.",
    },
    {
      no: 5,
      op: "NextOlder(age)",
      unsorted: "O(n)",
      sorted: "O(log n)",
      bbst: "O(log n)",
      winner: "bBST / Sorted",
      desc: "Tìm Successor: Trên Sorted Array dùng Binary Search rồi lấy index+1; Trên bBST tìm Min(right) hoặc tổ tiên rẽ phải trong O(log n).",
    },
    {
      no: 6,
      op: "Remove(age)",
      unsorted: "O(n)",
      sorted: "O(n)",
      bbst: "O(log n)",
      winner: "bBST Đột Phá",
      isCrucial: true,
      desc: "⭐ BƯỚC ĐỘT PHÁ CỦA bBST: Cả 2 loại mảng đều tốn O(n) do phải dời các phần tử phía sau để lấp lỗ trống. bBST chỉ cần gỡ liên kết và rebalance trong O(log n)!",
    },
    {
      no: 7,
      op: "GetMedian()",
      unsorted: "O(n log n)",
      sorted: "O(1)",
      bbst: "O(log n)",
      winner: "Sorted Array",
      desc: "Sorted Array truy xuất trực tiếp index A[n/2] trong O(1). bBST dùng Select(n/2) tốn O(log n).",
    },
    {
      no: 8,
      op: "NumYounger(age)",
      unsorted: "O(n log n)",
      sorted: "O(log n)",
      bbst: "? (Chưa học)",
      winner: "Cần Order-Statistics",
      isUnknown: true,
      desc: "❓ Ô DẤU HỎI TRONG SLIDE: Cây AVL cơ bản chỉ lưu height, chưa đủ để trả lời số phần tử nhỏ hơn trong O(log n). Cần Augment thêm thuộc tính size (Order-Statistics Tree)!",
    },
  ];

  const current = rows.find((r) => r.no === selectedOpIndex) || rows[1];

  return (
    <div className="my-8 rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-100 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-900 text-xs font-semibold mb-2">
            <Trophy className="w-3.5 h-3.5 text-emerald-700" />
            <span>Tổng Kết Đối Đầu Toàn Diện 8 Thao Tác (Mục 8)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-900 via-teal-800 to-emerald-900 bg-clip-text text-transparent">
            Final Master Arena: Unsorted vs Sorted vs bBST (AVL)
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Chiến thắng toàn diện của Cây AVL: Cân bằng xuất sắc giữa Search, Insert và Remove!
          </p>
        </div>

        {/* Highlight Win Badge */}
        <div className="px-3.5 py-1.5 rounded-xl border border-emerald-300 bg-emerald-50 text-emerald-900 font-mono font-bold text-xs flex items-center gap-2 self-start md:self-auto shadow-sm">
          <Sparkles className="w-4 h-4 text-emerald-600" />
          <span>bBST: 7/8 thao tác đạt O(log n) / O(n)</span>
        </div>
      </div>

      {/* Main Grid: Master Table + Detail Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Table View (8 cols) */}
        <div className="lg:col-span-8 rounded-2xl bg-white border border-emerald-100 overflow-hidden shadow-sm">
          <table className="w-full text-left text-xs border-collapse font-mono">
            <thead>
              <tr className="bg-emerald-50/80 text-emerald-950 border-b border-emerald-100 text-[11px] uppercase tracking-wider font-bold">
                <th className="py-3 px-2 text-center w-8">#</th>
                <th className="py-3 px-3">Thao tác (Operation)</th>
                <th className="py-3 px-2.5 text-center">Unsorted</th>
                <th className="py-3 px-2.5 text-center">Sorted</th>
                <th className="py-3 px-3 text-center bg-emerald-100/60 text-emerald-950 border-l border-r border-emerald-200">
                  bBST (AVL)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {rows.map((row) => {
                const isSelected = selectedOpIndex === row.no;

                return (
                  <tr
                    key={row.no}
                    onClick={() => setSelectedOpIndex(row.no)}
                    className={`cursor-pointer transition-all ${
                      isSelected
                        ? "bg-emerald-50/90 text-emerald-950 font-bold"
                        : "hover:bg-slate-50"
                    }`}
                  >
                    <td className="py-2.5 px-2 text-center text-slate-400 text-[11px]">{row.no}</td>
                    <td className="py-2.5 px-3 font-semibold text-slate-900">
                      <div className="flex items-center gap-1.5">
                        {row.isCrucial && <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />}
                        <span>{row.op}</span>
                      </div>
                    </td>
                    <td className="py-2.5 px-2.5 text-center">
                      <span className={row.unsorted === "O(1)" ? "text-emerald-700 font-bold" : "text-rose-700"}>
                        {row.unsorted}
                      </span>
                    </td>
                    <td className="py-2.5 px-2.5 text-center">
                      <span className={row.sorted === "O(1)" || row.sorted === "O(log n)" ? "text-emerald-700 font-bold" : "text-rose-700"}>
                        {row.sorted}
                      </span>
                    </td>
                    <td className="py-2.5 px-3 text-center bg-emerald-50/40 border-l border-r border-emerald-100 font-bold">
                      <span
                        className={`px-2 py-0.5 rounded-lg text-[11px] ${
                          row.isUnknown
                            ? "bg-amber-100 text-amber-900 border border-amber-300 font-extrabold animate-pulse"
                            : "bg-emerald-100 text-emerald-900 border border-emerald-300 font-bold"
                        }`}
                      >
                        {row.bbst}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Selected Row Detail (4 cols) */}
        <div className="lg:col-span-4 rounded-2xl bg-white border border-emerald-100 p-5 shadow-sm space-y-4 self-stretch flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 font-mono">
                {current.op}
              </span>
              <span className="px-2 py-0.5 rounded-lg text-[10px] font-bold bg-emerald-50 text-emerald-900 border border-emerald-200 font-mono">
                {current.winner}
              </span>
            </div>

            <p className="text-xs text-slate-700 leading-relaxed font-sans">{current.desc}</p>

            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700 space-y-1.5">
              <div className="text-[11px] text-slate-500 uppercase font-bold font-sans">So sánh tốc độ:</div>
              <div>• Unsorted: <span className="text-rose-700 font-semibold">{current.unsorted}</span></div>
              <div>• Sorted: <span className="text-sky-700 font-semibold">{current.sorted}</span></div>
              <div>• bBST (AVL): <span className="text-emerald-800 font-bold">{current.bbst}</span></div>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-300 text-[11px] text-emerald-950 font-semibold shadow-sm">
            ⭐ <strong>Kết luận cốt lõi:</strong> bBST (AVL) cân bằng xuất sắc nhất cho hệ thống vừa đọc vừa ghi dữ liệu!
          </div>
        </div>
      </div>
    </div>
  );
}
