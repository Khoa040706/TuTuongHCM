"use client";
import React from "react";
import { CheckCircle2, AlertTriangle, XCircle, Zap, ShieldAlert, Cpu, ArrowRight } from "lucide-react";

export default function ArrayVsLinkedListCards() {
  const complexityRows = [
    {
      op: "getFirst()",
      complexity: "O(1)",
      type: "fast",
      note: "Luôn nhanh (chỉ 1 thao tác đọc arr[0])"
    },
    {
      op: "addFirst(item)",
      complexity: "O(n)",
      type: "slow",
      note: "Xấu (bad) — Phải shift right toàn bộ n phần tử"
    },
    {
      op: "add(index, item)",
      complexity: "O(1) → O(n)",
      type: "warn",
      note: "Best: O(1) khi thêm ở cuối | Worst: O(n) khi thêm ở đầu"
    },
    {
      op: "removeFirst()",
      complexity: "O(n)",
      type: "slow",
      note: "Xấu (bad) — Phải shift left toàn bộ n phần tử để lấp khoảng trống"
    },
    {
      op: "remove(index)",
      complexity: "O(1) → O(n)",
      type: "warn",
      note: "Best: O(1) khi xóa ở cuối | Worst: O(n) khi xóa ở đầu"
    }
  ];

  return (
    <div className="w-full bg-white rounded-2xl border border-purple-200/80 shadow-xl p-5 md:p-6 my-6 font-sans">
      {/* Component Header */}
      <div className="pb-4 mb-5 border-b border-purple-100">
        <div className="flex items-center gap-2">
          <span className="bg-purple-100 text-purple-700 text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full uppercase">
            Đánh giá & So sánh III.5
          </span>
          <span className="text-xs text-slate-500 font-mono">Time & Space Efficiency Analysis</span>
        </div>
        <h3 className="text-base md:text-lg font-bold text-slate-900 mt-1">
          Bảng độ phức tạp & So sánh <code className="text-purple-700 font-mono">Array</code> vs <code className="text-purple-700 font-mono">Linked List</code>
        </h3>
      </div>

      {/* 1. Time Complexity Table */}
      <div className="mb-6">
        <h4 className="text-xs font-bold font-mono text-purple-950 uppercase tracking-wider mb-3 flex items-center gap-2">
          <Zap className="w-4 h-4 text-purple-600" />
          <span>1. Bảng Đánh giá Độ phức tạp Thời gian (Time Efficiency)</span>
        </h4>

        <div className="overflow-x-auto rounded-xl border border-purple-200/80">
          <table className="w-full text-xs text-left border-collapse">
            <thead className="bg-purple-50 text-purple-950 font-bold border-b border-purple-200">
              <tr>
                <th className="px-4 py-3 font-mono">Thao tác (Operation)</th>
                <th className="px-4 py-3 font-mono text-center">Độ phức tạp (Time)</th>
                <th className="px-4 py-3">Ghi chú chi tiết</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-100 bg-white">
              {complexityRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-purple-50/40 transition-colors">
                  <td className="px-4 py-3 font-mono font-bold text-slate-800">
                    <code>{row.op}</code>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span
                      className={`inline-block px-2.5 py-1 rounded-md font-mono font-bold text-xs ${
                        row.type === "fast"
                          ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                          : row.type === "slow"
                          ? "bg-rose-100 text-rose-800 border border-rose-300"
                          : "bg-amber-100 text-amber-800 border border-amber-300"
                      }`}
                    >
                      {row.complexity}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    <div className="flex items-center gap-1.5">
                      {row.type === "fast" && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />}
                      {row.type === "slow" && <XCircle className="w-3.5 h-3.5 text-rose-600 shrink-0" />}
                      {row.type === "warn" && <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0" />}
                      <span>{row.note}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 2. Dual Comparison Cards (Array vs Linked List) */}
      <h4 className="text-xs font-bold font-mono text-purple-950 uppercase tracking-wider mb-3 flex items-center gap-2">
        <Cpu className="w-4 h-4 text-purple-600" />
        <span>2. So sánh Đặc tính 2 Cách hiện thực (Implementation Comparison)</span>
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
        {/* Array Card */}
        <div className="bg-purple-50/60 border border-purple-200 rounded-xl p-4 space-y-3">
          <div className="flex items-center justify-between border-b border-purple-200 pb-2">
            <span className="font-bold text-purple-950 text-sm flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-600"></span>
              ARRAY IMPLEMENTATION
            </span>
            <span className="text-[10px] font-mono font-bold bg-purple-200 text-purple-900 px-2 py-0.5 rounded">
              Fixed-size
            </span>
          </div>

          <ul className="space-y-2 text-xs text-slate-700">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Truy cập ngẫu nhiên nhanh:</strong> Đọc phần tử tại chỉ số bất kỳ bằng index rất nhanh.</span>
            </li>
            <li className="flex items-start gap-2">
              <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <span><strong>Kích thước cố định (MAXSIZE):</strong> Quá lớn thì lãng phí bộ nhớ (unused), quá nhỏ thì hết chỗ.</span>
            </li>
            <li className="flex items-start gap-2">
              <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <span><strong>Chèn/Xóa ở đầu chậm $O(n)$:</strong> Phải thực hiện shift toàn bộ dãy phần tử.</span>
            </li>
          </ul>
        </div>

        {/* Linked List Card */}
        <div className="bg-indigo-50/60 border border-indigo-200 rounded-xl p-4 space-y-3">
          <div className="flex items-center justify-between border-b border-indigo-200 pb-2">
            <span className="font-bold text-indigo-950 text-sm flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-600"></span>
              LINKED LIST IMPLEMENTATION
            </span>
            <span className="text-[10px] font-mono font-bold bg-indigo-200 text-indigo-900 px-2 py-0.5 rounded">
              Dynamic-size
            </span>
          </div>

          <ul className="space-y-2 text-xs text-slate-700">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Kích thước linh hoạt:</strong> Co giãn động theo số phần tử thực tế, không có giới hạn `MAXSIZE`.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Chèn/Xóa ở đầu cực nhanh $O(1)$:</strong> Chỉ cần cập nhật con trỏ `head`, không cần shift.</span>
            </li>
            <li className="flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span><strong>Tốn bộ nhớ con trỏ:</strong> Mỗi Node phải lưu thêm địa chỉ liên kết (`next`).</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Decision Summary */}
      <div className="p-4 bg-slate-900 text-slate-200 rounded-xl border border-slate-800 text-xs space-y-2">
        <span className="font-bold text-purple-400 font-mono uppercase tracking-wider block">
          💡 KHI NÀO NÊN DÙNG LOẠI NÀO?
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-300">
          <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
            <strong className="text-purple-300 block mb-1">Dùng Array khi:</strong>
            List có kích thước cố định (fixed-size) biết trước, ít thao tác chèn/xóa đầu.
          </div>
          <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
            <strong className="text-indigo-300 block mb-1">Dùng Linked List khi:</strong>
            List có kích thước biến đổi liên tục (variable-size), thao tác insert/delete diễn ra thường xuyên.
          </div>
        </div>
      </div>
    </div>
  );
}
