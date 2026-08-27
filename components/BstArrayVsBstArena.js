"use client";

import React, { useState } from "react";
import { Swords, CheckCircle2, TrendingUp, Info } from "lucide-react";

export default function BstArrayVsBstArena() {
  const [selectedRow, setSelectedRow] = useState(null);

  const comparisonData = [
    {
      id: 1,
      op: "Search(age)",
      unsorted: "O(n)",
      sorted: "O(log n)",
      bst: "O(h)",
      winner: "BST / Sorted Array",
      isHighlight: false,
      detail: "Sorted Array dùng Binary Search O(log n). BST đi 1 nhánh từ root xuống O(h) (tương đương O(log n) nếu cân bằng). Unsorted Array phải quét tuyến tính O(n).",
    },
    {
      id: 2,
      op: "Insert(age)",
      unsorted: "O(1)",
      sorted: "O(n)",
      bst: "O(h)",
      winner: "BST (Giải quyết nhược điểm mảng)",
      isHighlight: true,
      highlightBadge: "BƯỚC ĐỘT PHÁ CỦA BST 🚀",
      detail: "Điểm yếu chí mạng của Sorted Array là phải shift toàn bộ phần tử O(n). BST giải quyết triệt để vấn đề này: chỉ cần chèn 1 liên kết vào lá tốn O(h) mà không cần dời mảng!",
    },
    {
      id: 3,
      op: "FindOldest() / Youngest",
      unsorted: "O(n)",
      sorted: "O(1)",
      bst: "O(h)",
      winner: "Sorted Array O(1) / BST O(h)",
      isHighlight: false,
      detail: "Sorted Array lấy trực tiếp A[0] hoặc A[n-1] tốn O(1). BST đi nhánh trái/phải liên tục tốn O(h).",
    },
    {
      id: 4,
      op: "ListSortedAges()",
      unsorted: "O(n log n)",
      sorted: "O(n)",
      bst: "O(n)",
      winner: "BST / Sorted Array",
      isHighlight: false,
      detail: "BST dùng Inorder Traversal xuất thẳng dãy tăng dần trong O(n). Unsorted Array phải chạy thuật toán Sort tốn O(n log n).",
    },
    {
      id: 5,
      op: "NextOlder(age)",
      unsorted: "O(n)",
      sorted: "O(log n)",
      bst: "O(h)",
      winner: "BST / Sorted Array",
      isHighlight: false,
      detail: "BST tìm Successor trong O(h). Sorted Array tìm vị trí rồi lấy index+1 tốn O(log n).",
    },
    {
      id: 6,
      op: "PrevYounger(age)",
      unsorted: "O(n)",
      sorted: "O(log n)",
      bst: "O(h)",
      winner: "BST / Sorted Array",
      isHighlight: false,
      detail: "BST tìm Predecessor trong O(h). Sorted Array tìm vị trí rồi lấy index-1 tốn O(log n).",
    },
    {
      id: 7,
      op: "MedianAge()",
      unsorted: "O(n log n)",
      sorted: "O(1)",
      bst: "O(h)",
      winner: "Sorted Array O(1) / BST O(h)",
      isHighlight: false,
      detail: "Sorted Array lấy trực tiếp phần tử ở giữa A[n/2] tốn O(1). BST có thể truy vấn qua Select(n/2) trong O(h).",
    },
    {
      id: 8,
      op: "Rank(age)",
      unsorted: "O(n log n)",
      sorted: "O(log n)",
      bst: "?",
      winner: "Bài kế tiếp sẽ làm rõ",
      isHighlight: true,
      highlightBadge: "DẤU ? TRONG SLIDE ❓",
      detail: "Trong slide giáo trình, ô này được đánh dấu '?' vì cần lưu thêm thông tin kích thước cây con (subtree size) tại mỗi đỉnh để tính Rank/Select trong O(h) — nội dung này sẽ học ở bài kế tiếp (Balanced BST).",
    },
  ];

  return (
    <div className="my-8 rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-100 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-900 text-xs font-semibold mb-2">
            <Swords className="w-3.5 h-3.5 text-emerald-700" />
            <span>Đối Đầu 3 Cấu Trúc Dữ Liệu (Master Benchmark)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-900 via-teal-800 to-emerald-900 bg-clip-text text-transparent">
            Bảng So Sánh Toàn Diện: Unsorted Array vs Sorted Array vs BST
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Tổng kết 8 thao tác cốt lõi của ADT Table qua 3 giải pháp cài đặt.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3.5 py-1.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 font-mono font-bold text-xs shadow-sm">
            BST: Lời giải cân bằng hoàn hảo
          </span>
        </div>
      </div>

      {/* Main Comparison Table */}
      <div className="overflow-x-auto rounded-2xl border border-emerald-100 bg-white shadow-sm mb-6">
        <table className="w-full text-left text-xs">
          <thead className="bg-emerald-50/80 text-emerald-950 font-bold uppercase text-[11px] border-b border-emerald-100 font-mono">
            <tr>
              <th className="p-3.5 w-12 text-center">#</th>
              <th className="p-3.5">Thao Tác (Operation)</th>
              <th className="p-3.5 text-center">Unsorted Array</th>
              <th className="p-3.5 text-center">Sorted Array</th>
              <th className="p-3.5 text-center bg-emerald-100/50 border-x border-emerald-200 text-emerald-950 font-bold">
                BST (Binary Search Tree)
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 font-mono">
            {comparisonData.map((row) => {
              const isSelected = selectedRow && selectedRow.id === row.id;

              return (
                <tr
                  key={row.id}
                  onClick={() => setSelectedRow(row)}
                  className={`cursor-pointer transition-colors ${
                    isSelected
                      ? "bg-emerald-50/80 ring-2 ring-emerald-400"
                      : row.isHighlight
                      ? "bg-emerald-50/30 hover:bg-emerald-50/60"
                      : "hover:bg-slate-50"
                  }`}
                >
                  <td className="p-3.5 text-center text-slate-400 font-bold">{row.id}</td>
                  <td className="p-3.5 font-bold text-slate-900">
                    <div className="flex items-center gap-2">
                      <span>{row.op}</span>
                      {row.isHighlight && (
                        <span className="px-2 py-0.5 rounded-lg text-[9px] font-bold uppercase bg-emerald-100 text-emerald-900 border border-emerald-300">
                          {row.highlightBadge}
                        </span>
                      )}
                    </div>
                  </td>
                  {/* Unsorted Array */}
                  <td className="p-3.5 text-center">
                    <span
                      className={`px-2.5 py-1 rounded-lg font-bold ${
                        row.unsorted === "O(1)"
                          ? "bg-emerald-100 text-emerald-900 border border-emerald-300"
                          : "bg-rose-100 text-rose-900 border border-rose-200"
                      }`}
                    >
                      {row.unsorted}
                    </span>
                  </td>
                  {/* Sorted Array */}
                  <td className="p-3.5 text-center">
                    <span
                      className={`px-2.5 py-1 rounded-lg font-bold ${
                        row.sorted === "O(1)" || row.sorted === "O(log n)"
                          ? "bg-emerald-100 text-emerald-900 border border-emerald-300"
                          : row.sorted === "O(n)" && row.id === 4
                          ? "bg-emerald-100 text-emerald-900 border border-emerald-300"
                          : "bg-rose-100 text-rose-900 border border-rose-200"
                      }`}
                    >
                      {row.sorted}
                    </span>
                  </td>
                  {/* BST */}
                  <td className="p-3.5 text-center bg-emerald-50/30 border-x border-emerald-100">
                    <span
                      className={`px-3 py-1 rounded-lg font-bold shadow-sm ${
                        row.bst === "?"
                          ? "bg-amber-100 border border-amber-300 text-amber-900 animate-pulse font-extrabold"
                          : row.isHighlight
                          ? "bg-emerald-600 text-white font-extrabold shadow-sm"
                          : "bg-emerald-100 border border-emerald-300 text-emerald-900"
                      }`}
                    >
                      {row.bst}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Row Detail Drawer (If clicked) */}
      {selectedRow ? (
        <div className="p-4 rounded-2xl bg-white border border-emerald-300 shadow-sm animate-fadeIn space-y-2 mb-4">
          <div className="flex items-center justify-between">
            <span className="font-mono text-sm font-bold text-emerald-900 flex items-center gap-2">
              <Info className="w-4 h-4 text-emerald-600" />
              Chi Tiết Thao Tác #{selectedRow.id}: {selectedRow.op}
            </span>
            <span className="text-xs text-emerald-800 font-bold">
              Người chiến thắng: {selectedRow.winner}
            </span>
          </div>
          <p className="text-xs text-slate-700 leading-relaxed font-sans">
            {selectedRow.detail}
          </p>
        </div>
      ) : (
        <div className="text-center text-xs text-slate-500 italic mb-4">
          * Nhấp vào một hàng bất kỳ để xem phân tích cơ chế vì sao BST vượt trội
        </div>
      )}

      {/* Bottom Key Takeaways */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 rounded-2xl bg-white border border-emerald-100 space-y-1.5 text-xs text-slate-700 shadow-sm">
          <div className="font-bold text-emerald-900 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            Ưu Thế Vượt Bậc Của BST:
          </div>
          <p className="leading-relaxed">
            So với Sorted Array, BST đã <strong>giải quyết được điểm yếu lớn nhất</strong>: hạ chi phí <span className="font-mono text-emerald-800 font-bold">Insert &amp; Remove từ O(n) xuống O(h)</span> nhờ cấu trúc liên kết động.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-amber-200 space-y-1.5 text-xs text-slate-700 shadow-sm">
          <div className="font-bold text-amber-900 flex items-center gap-1.5">
            <TrendingUp className="w-4 h-4 text-amber-600" />
            Kết Luận Của Bài Học:
          </div>
          <p className="leading-relaxed">
            <strong>Mọi thứ bây giờ phụ thuộc vào chiều cao h!</strong> Độ phức tạp thật sự của BST sẽ phụ thuộc vào hình dạng cây (cân bằng hay suy biến) — sẽ phân tích kỹ ở bài kế tiếp.
          </p>
        </div>
      </div>
    </div>
  );
}
