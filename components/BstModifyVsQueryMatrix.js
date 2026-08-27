"use client";

import React, { useState } from "react";
import { Clock, Sparkles, Edit3, Eye, AlertTriangle, ChevronRight } from "lucide-react";

export default function BstModifyVsQueryMatrix() {
  const [selectedOp, setSelectedOp] = useState("search");

  const operations = [
    {
      id: "search",
      type: "Query",
      name: "Search(v)",
      complexity: "O(h)",
      typeDesc: "Không làm thay đổi cấu trúc cây (Chỉ đọc)",
      desc: "Bắt đầu từ root, so sánh giá trị cần tìm với khóa hiện tại để rẽ nhánh trái hoặc phải cho đến khi tìm thấy hoặc gặp null. Chi phí tối đa bằng độ sâu của nhánh chứa v.",
      isSpecial: false,
    },
    {
      id: "insert",
      type: "Modify",
      name: "Insert(v)",
      complexity: "O(h)",
      typeDesc: "Làm thay đổi cấu trúc cây (Gắn thêm nút mới)",
      desc: "Tìm kiếm vị trí thích hợp từ root xuống các lá, sau đó tạo một nút mới và gắn vào vị trí con trỏ null tìm được.",
      isSpecial: false,
    },
    {
      id: "remove",
      type: "Modify",
      name: "Remove(v)",
      complexity: "O(h)",
      typeDesc: "Làm thay đổi cấu trúc cây (Gỡ bỏ hoặc thay thế nút)",
      desc: "Gồm 3 trường hợp: (1) Nút lá tốn O(1), (2) Nút có 1 con tốn O(1), (3) Nút có 2 con cần tìm Successor tốn O(h) rồi hoán đổi.",
      isSpecial: false,
    },
    {
      id: "findminmax",
      type: "Query",
      name: "FindMin() / FindMax()",
      complexity: "O(h)",
      typeDesc: "Không làm thay đổi cấu trúc cây (Chỉ đọc)",
      desc: "FindMin đi thẳng theo con trỏ left đến nút tận cùng bên trái. FindMax đi thẳng theo con trỏ right đến nút tận cùng bên phải.",
      isSpecial: false,
    },
    {
      id: "succpred",
      type: "Query",
      name: "Successor / Predecessor",
      complexity: "O(h)",
      typeDesc: "Không làm thay đổi cấu trúc cây (Chỉ đọc)",
      desc: "Tìm phần tử kế tiếp hoặc phần tử đứng trước trong thứ tự có thứ tự. Chỉ duyệt qua độ sâu tối đa h trên cây.",
      isSpecial: false,
    },
    {
      id: "inorder",
      type: "Query",
      name: "Inorder Traversal",
      complexity: "O(n)",
      typeDesc: "Không làm thay đổi cấu trúc cây (Duyệt toàn bộ)",
      desc: "Duyệt theo thứ tự: Trái -> Gốc -> Phải. Thuật toán ghé thăm toàn bộ n đỉnh của cây (mỗi đỉnh chạm 3 lần: từ cha xuống, hỏi con trái, hỏi con phải).",
      isSpecial: true,
    },
    {
      id: "rankselect",
      type: "Query",
      name: "Rank(v) / Select(k)",
      complexity: "?",
      typeDesc: "Thao tác thống kê thứ tự (Order-Statistics)",
      desc: "Trong slide được đánh dấu '?' vì cách cài đặt và độ phức tạp chính xác sẽ được học chi tiết ở bài sau.",
      isSpecial: false,
    },
  ];

  const current = operations.find((o) => o.id === selectedOp) || operations[0];

  return (
    <div className="my-8 rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-100 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-900 text-xs font-semibold mb-2">
            <Clock className="w-3.5 h-3.5 text-emerald-700" />
            <span>Phân Loại &amp; Độ Phức Tạp Thao Tác BST (Mục 1.3)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-900 via-teal-800 to-emerald-900 bg-clip-text text-transparent">
            Ma Trận Độ Phức Tạp: Modify vs Query Operations
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Phân loại rõ ràng 2 nhóm thao tác: <strong>Modify (Thay đổi cấu trúc)</strong> và <strong>Query (Chỉ đọc dữ liệu)</strong>.
          </p>
        </div>

        {/* Big-O Highlight Badge */}
        <div className="px-3.5 py-1.5 rounded-xl border border-emerald-300 bg-emerald-50 text-emerald-900 font-mono font-bold text-xs flex items-center gap-2 self-start md:self-auto shadow-sm">
          <Sparkles className="w-4 h-4 text-emerald-600" />
          <span>Hầu hết: O(h) • Duyệt: O(n)</span>
        </div>
      </div>

      {/* Main Grid: Interactive Table + Detail Callout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Table View (7 cols) */}
        <div className="lg:col-span-7 rounded-2xl bg-white border border-emerald-100 overflow-hidden shadow-sm">
          <table className="w-full text-left text-xs border-collapse font-mono">
            <thead>
              <tr className="bg-emerald-50/80 text-emerald-950 border-b border-emerald-100 text-[11px] uppercase tracking-wider font-bold">
                <th className="py-3 px-3.5">Loại</th>
                <th className="py-3 px-3.5">Thao tác</th>
                <th className="py-3 px-3.5 text-right">Độ phức tạp</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {operations.map((op) => {
                const isSelected = selectedOp === op.id;
                const isModify = op.type === "Modify";

                return (
                  <tr
                    key={op.id}
                    onClick={() => setSelectedOp(op.id)}
                    className={`cursor-pointer transition-all ${
                      isSelected
                        ? "bg-emerald-50/90 text-emerald-950 font-bold"
                        : "hover:bg-slate-50"
                    }`}
                  >
                    <td className="py-2.5 px-3.5">
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-[10px] font-bold ${
                          isModify
                            ? "bg-rose-100 text-rose-900 border border-rose-200"
                            : "bg-sky-100 text-sky-900 border border-sky-200"
                        }`}
                      >
                        {isModify ? <Edit3 className="w-2.5 h-2.5" /> : <Eye className="w-2.5 h-2.5 text-sky-600" />}
                        {op.type}
                      </span>
                    </td>
                    <td className="py-2.5 px-3.5 flex items-center justify-between">
                      <span className={isSelected ? "text-emerald-950 font-bold" : "text-slate-800"}>{op.name}</span>
                      {isSelected && <ChevronRight className="w-3.5 h-3.5 text-emerald-600" />}
                    </td>
                    <td className="py-2.5 px-3.5 text-right font-bold">
                      <span
                        className={`px-2 py-0.5 rounded-lg text-[11px] ${
                          op.isSpecial
                            ? "bg-amber-100 text-amber-900 border border-amber-300 font-extrabold"
                            : op.complexity === "?"
                            ? "bg-slate-100 text-slate-500 font-bold"
                            : "bg-emerald-100 text-emerald-900 border border-emerald-300 font-bold"
                        }`}
                      >
                        {op.complexity}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Detail Inspector (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl bg-white border border-emerald-100 p-5 shadow-sm space-y-4 self-stretch flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 font-mono">
                Chi Tiết: <code>{current.name}</code>
              </span>
              <span
                className={`px-2.5 py-0.5 rounded-lg text-xs font-bold font-mono ${
                  current.isSpecial
                    ? "bg-amber-100 text-amber-900 border border-amber-300"
                    : "bg-emerald-100 text-emerald-900 border border-emerald-200"
                }`}
              >
                {current.complexity}
              </span>
            </div>

            <div className="text-xs text-slate-600 font-semibold">{current.typeDesc}</div>

            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed font-sans">
              {current.desc}
            </div>

            {current.isSpecial && (
              <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-950 space-y-1">
                <div className="font-bold flex items-center gap-1.5 text-amber-900">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                  Điểm Hay Bị Gài Bẫy Thi:
                </div>
                <p className="text-[11px] leading-relaxed text-slate-700">
                  Đừng nhầm lẫn Inorder Traversal chạy O(h)! Vì phải xuất ra toàn bộ n phần tử, thuật toán buộc phải duyệt qua tất cả các đỉnh nên chi phí là <strong>O(n)</strong>.
                </p>
              </div>
            )}
          </div>

          {/* Note Footer */}
          <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-[11px] text-slate-600 space-y-1">
            <div>• Ghi chú slide: Cũng có <code>preorder</code>, <code>postorder</code> traversal (học ở tutorial).</div>
            <div>• <strong className="text-emerald-950">Hệ quả:</strong> Nếu h lớn (cây lệch) thì thao tác sẽ chậm &rarr; cần cây <strong>cân bằng (Being Balanced)</strong>!</div>
          </div>
        </div>
      </div>
    </div>
  );
}
