"use client";

import React, { useState } from "react";
import { Trash2, CheckCircle2, Table } from "lucide-react";

export default function BstDeletionComplexityAnalyzer() {
  const [selectedCase, setSelectedCase] = useState("case3"); // "case1" | "case2" | "case3" | "matrix"

  const casesData = {
    case1: {
      title: "Case 1: Xóa Đỉnh Lá (0 Con) — Ví dụ Remove(5)",
      stepFind: "Tìm đỉnh v trong cây: Tốn O(h)",
      stepAction: "Gỡ bỏ liên kết từ v.parent (đặt con trỏ cha về NULL): Tốn O(1)",
      formula: "O(h) [tìm] + O(1) [gỡ lá] = O(h)",
      desc: "Trường hợp đơn giản nhất. Không cần dịch chuyển hay tái cấu trúc bất kỳ nút con nào.",
      badgeColor: "sky",
    },
    case2: {
      title: "Case 2: Xóa Đỉnh Có Đúng 1 Con — Ví dụ Remove(23)",
      stepFind: "Tìm đỉnh v trong cây: Tốn O(h)",
      stepAction: "Nối con duy nhất (71) trực tiếp với v.parent (15), cập nhật parent cho con: Tốn O(1)",
      formula: "O(h) [tìm] + O(1) [nối con duy nhất] = O(h)",
      desc: "Chỉ cần 2 phép gán con trỏ O(1) để bắc cầu qua đỉnh bị xóa mà không làm mất tính chất thứ tự của cây.",
      badgeColor: "amber",
    },
    case3: {
      title: "Case 3: Xóa Đỉnh Có 2 Con — Ví dụ Remove(6)",
      stepFind: "1. Tìm đỉnh v trong cây: Tốn O(h)",
      stepAction: "2. Tìm Successor x = min(v.right): Tốn O(h)\n3. Ghi đè v.key = x.key: Tốn O(1)\n4. Xóa x cũ ở cây con phải: Tốn O(1) (do x có ≤ 1 con theo chứng minh 6.6)",
      formula: "O(h) [tìm v] + O(h) [tìm succ] + O(1) [swap key] + O(1) [xóa succ] = O(h)",
      desc: "Lý do phải xóa đỉnh x cũ thay vì chỉ đổi key: Nếu không xóa x cũ thì cây sẽ có 2 đỉnh mang cùng giá trị (duplicate), vi phạm giả định khóa duy nhất.",
      badgeColor: "rose",
    },
  };

  const matrixRows = [
    { op: "Search(v)", time: "O(h)", note: "Đi theo 1 đường duy nhất từ root xuống lá" },
    { op: "FindMin() / FindMax()", time: "O(h)", note: "Đi thẳng theo 1 nhánh trái / phải liên tục" },
    { op: "Successor(x) / Predecessor(x)", time: "O(h)", note: "Đi xuống hoặc đi lên tổ tiên tối đa h bước" },
    { op: "Inorder Traversal", time: "O(n)", note: "Bắt buộc chạm toàn bộ n đỉnh (mỗi đỉnh chạm 3 lần)", isSpecial: true },
    { op: "Insert(v)", time: "O(h)", note: "Đi 1 đường từ root xuống rồi chèn làm lá" },
    { op: "Delete(v)", time: "O(h)", note: "Tìm v: O(h) + Xử lý Case: O(1) (Case 3 tốn O(h) tìm succ)" },
  ];

  const currentCase = casesData[selectedCase];

  return (
    <div className="my-8 rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-100 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-900 text-xs font-semibold mb-2">
            <Trash2 className="w-3.5 h-3.5 text-emerald-700" />
            <span>Phân Tích Chi Tiết Chi Phí &amp; Ma Trận Độ Phức Tạp</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-900 via-teal-800 to-emerald-900 bg-clip-text text-transparent">
            Chi Phí Xóa 3 Trường Hợp &amp; Bảng Tổng Hợp 6 Thao Tác BST
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Tổng thời gian chạy (running time) của Deletion trong mọi trường hợp luôn là <span className="font-mono text-emerald-700 font-bold">O(h)</span>.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex rounded-2xl bg-slate-100 p-1 border border-slate-200 self-start md:self-auto">
          <button
            onClick={() => setSelectedCase("case1")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              selectedCase === "case1" ? "bg-sky-600 text-white shadow-sm" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Case 1 (0 con)
          </button>
          <button
            onClick={() => setSelectedCase("case2")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              selectedCase === "case2" ? "bg-amber-600 text-white shadow-sm" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Case 2 (1 con)
          </button>
          <button
            onClick={() => setSelectedCase("case3")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              selectedCase === "case3" ? "bg-emerald-600 text-white shadow-sm" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Case 3 (2 con)
          </button>
          <button
            onClick={() => setSelectedCase("matrix")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              selectedCase === "matrix" ? "bg-teal-600 text-white shadow-sm" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Table className="w-3.5 h-3.5" />
            Ma Trận Tổng Hợp
          </button>
        </div>
      </div>

      {/* Case 1, 2, 3 View */}
      {selectedCase !== "matrix" && currentCase && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Step-by-Step Mathematical Cost Breakdown (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-white border border-emerald-100 p-5 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h4 className="text-base font-bold text-slate-900">{currentCase.title}</h4>
              <span className="px-2.5 py-0.5 rounded-lg bg-emerald-50 border border-emerald-300 text-emerald-900 font-mono font-bold text-xs">
                Tổng: O(h)
              </span>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-slate-600 font-bold mb-1">Giai đoạn 1 — Định vị đỉnh:</div>
                <div className="font-mono text-emerald-800 font-bold">{currentCase.stepFind}</div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-slate-600 font-bold mb-1">Giai đoạn 2 — Thao tác liên kết / Thế chỗ:</div>
                <div className="font-mono text-amber-900 whitespace-pre-line leading-relaxed font-bold">
                  {currentCase.stepAction}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-300">
                <div className="text-emerald-900 font-bold mb-1">Công thức tổng chi phí thời gian:</div>
                <div className="font-mono text-emerald-800 font-extrabold text-sm">{currentCase.formula}</div>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed italic">
              💡 {currentCase.desc}
            </p>
          </div>

          {/* Quick Info Box (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl bg-white border border-emerald-100 p-5 shadow-sm space-y-4">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              Tại Sao Case 3 Vẫn Giữ Được O(h)?
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed">
              Dù Case 3 phải trải qua 4 bước nhỏ: tìm v, tìm successor(v), đổi key, và xóa successor cũ, nhưng:
            </p>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Tìm v và tìm successor đều chỉ đi theo 1 nhánh có độ dài &le; h &rArr; 2 &times; O(h) = O(h).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Đổi key và xóa successor cũ (có &le; 1 con) chỉ tốn đúng O(1).</span>
              </li>
            </ul>
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-[11px] text-emerald-900 font-mono font-bold">
              Running Time: O(h) + O(h) + O(1) + O(1) = O(h) ⚡
            </div>
          </div>
        </div>
      )}

      {/* MATRIX VIEW */}
      {selectedCase === "matrix" && (
        <div className="space-y-4">
          <div className="overflow-x-auto rounded-2xl border border-emerald-100 bg-white shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-emerald-50/80 text-emerald-950 font-bold uppercase text-[11px] border-b border-emerald-100">
                <tr>
                  <th className="p-3.5">Thao Tác (Operation)</th>
                  <th className="p-3.5">Độ Phức Tạp</th>
                  <th className="p-3.5">Bản Chất / Lý Do Chi Tiết</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono">
                {matrixRows.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`hover:bg-slate-50 transition-colors ${
                      row.isSpecial ? "bg-amber-50/50" : "bg-white"
                    }`}
                  >
                    <td className="p-3.5 font-bold text-slate-900">{row.op}</td>
                    <td className="p-3.5">
                      <span
                        className={`px-2.5 py-1 rounded-lg font-bold text-xs ${
                          row.isSpecial
                            ? "bg-amber-100 border border-amber-300 text-amber-900"
                            : "bg-emerald-100 border border-emerald-300 text-emerald-900"
                        }`}
                      >
                        {row.time}
                      </span>
                    </td>
                    <td className="p-3.5 font-sans text-slate-700 text-xs">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-3.5 rounded-2xl bg-white border border-emerald-100 text-xs text-slate-700 flex flex-col sm:flex-row items-center justify-between gap-2 shadow-sm">
            <span>
              ⭐ Hầu hết mọi thao tác trên BST đều là <strong>O(h)</strong>. Ngoại lệ duy nhất là <strong>Inorder Traversal = O(n)</strong>.
            </span>
            <span className="font-mono text-emerald-800 font-bold">h = log n (nếu cân bằng)</span>
          </div>
        </div>
      )}
    </div>
  );
}
