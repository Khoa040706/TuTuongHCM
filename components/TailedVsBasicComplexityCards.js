"use client";
import React from "react";
import { Zap, CheckCircle2, ShieldCheck, Clock, Layers, ArrowRight } from "lucide-react";

export default function TailedVsBasicComplexityCards() {
  const comparisonRows = [
    {
      op: "addFirst()",
      bll: "O(1)",
      tll: "O(1)",
      winner: "equal",
      note: "Cả 2 cách đều chèn đầu cực nhanh."
    },
    {
      op: "addLast()",
      bll: "O(n) (duyệt hết list)",
      tll: "O(1) (dùng tail)",
      winner: "tll",
      note: "TailedLinkedList thắng tuyệt đối: từ O(n) xuống O(1) nhờ con trỏ tail!"
    },
    {
      op: "removeFirst()",
      bll: "O(1)",
      tll: "O(1)",
      winner: "equal",
      note: "Thực hiện removeFirst() = removeAfter(null) tái sử dụng code."
    }
  ];

  return (
    <div className="w-full bg-white rounded-2xl border border-purple-200/80 shadow-xl p-5 md:p-6 my-6 font-sans">
      {/* Header */}
      <div className="pb-4 mb-5 border-b border-purple-100">
        <div className="flex items-center gap-2">
          <span className="bg-purple-100 text-purple-700 text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full uppercase">
            Đánh giá Hiệu năng VIII.4
          </span>
          <span className="text-xs text-slate-500 font-mono">BasicLinkedList vs TailedLinkedList</span>
        </div>
        <h3 className="text-base md:text-lg font-bold text-slate-900 mt-1">
          So sánh Độ phức tạp Thời gian & 3 Điểm nóng ghi nhớ
        </h3>
      </div>

      {/* Comparison Table */}
      <div className="mb-6">
        <h4 className="text-xs font-bold font-mono text-purple-950 uppercase tracking-wider mb-3 flex items-center gap-2">
          <Zap className="w-4 h-4 text-purple-600" />
          <span>1. Bảng So sánh Hiệu năng BLL vs TLL</span>
        </h4>

        <div className="overflow-x-auto rounded-xl border border-purple-200/80">
          <table className="w-full text-xs text-left border-collapse">
            <thead className="bg-purple-50 text-purple-950 font-bold border-b border-purple-200">
              <tr>
                <th className="px-4 py-3 font-mono">Thao tác</th>
                <th className="px-4 py-3 font-mono text-center">BasicLinkedList</th>
                <th className="px-4 py-3 font-mono text-center">TailedLinkedList</th>
                <th className="px-4 py-3">Nhận xét & Đánh giá</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-100 bg-white">
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-purple-50/40 transition-colors">
                  <td className="px-4 py-3 font-mono font-bold text-slate-800">
                    <code>{row.op}</code>
                  </td>
                  <td className="px-4 py-3 text-center font-mono">
                    <span className="bg-slate-100 px-2 py-0.5 rounded border border-slate-200 text-slate-700">
                      {row.bll}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center font-mono">
                    <span
                      className={`inline-block px-2.5 py-1 rounded font-bold ${
                        row.winner === "tll"
                          ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                          : "bg-purple-100 text-purple-800 border border-purple-300"
                      }`}
                    >
                      {row.tll}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-slate-700 leading-relaxed">
                    <div className="flex items-center gap-1.5">
                      {row.winner === "tll" ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      ) : (
                        <Clock className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                      )}
                      <span>{row.note}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 3 Key Takeaways Cards */}
      <h4 className="text-xs font-bold font-mono text-purple-950 uppercase tracking-wider mb-3 flex items-center gap-2">
        <ShieldCheck className="w-4 h-4 text-purple-600" />
        <span>2. 3 Điểm nóng bắt buộc ghi nhớ (Key Takeaways)</span>
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-emerald-50/60 border border-emerald-200 rounded-xl p-4 space-y-2">
          <span className="text-[10px] font-mono font-bold bg-emerald-200 text-emerald-900 px-2 py-0.5 rounded inline-block">
            ĐIỂM NÓNG 1
          </span>
          <h5 className="font-bold text-xs text-emerald-950">Lý do thêm con trỏ tail</h5>
          <p className="text-xs text-slate-700 leading-relaxed">
            Giúp phương thức <code>addLast()</code> giảm từ <strong>O(n)</strong> (phải duyệt hết list) xuống <strong>O(1)</strong> nhờ truy cập thẳng tới node cuối.
          </p>
        </div>

        <div className="bg-amber-50/60 border border-amber-200 rounded-xl p-4 space-y-2">
          <span className="text-[10px] font-mono font-bold bg-amber-200 text-amber-900 px-2 py-0.5 rounded inline-block">
            ĐIỂM NÓNG 2
          </span>
          <h5 className="font-bold text-xs text-amber-950">Cái giá phải trả ("No free lunch")</h5>
          <p className="text-xs text-slate-700 leading-relaxed">
            Bắt buộc phải cẩn thận bảo trì con trỏ <code>tail</code> trong <strong>mọi</strong> hàm cập nhật (addAfter, removeAfter...). Rất dễ sai ở các boundary cases!
          </p>
        </div>

        <div className="bg-purple-50/60 border border-purple-200 rounded-xl p-4 space-y-2">
          <span className="text-[10px] font-mono font-bold bg-purple-200 text-purple-900 px-2 py-0.5 rounded inline-block">
            ĐIỂM NÓNG 3
          </span>
          <h5 className="font-bold text-xs text-purple-950">Nguyên tắc Tái sử dụng Code</h5>
          <p className="text-xs text-slate-700 leading-relaxed">
            <code>removeFirst() = removeAfter(null)</code> và <code>remove(item)</code> tận dụng <code>removeAfter(prev)</code> — minh chứng điển hình của re-use code.
          </p>
        </div>
      </div>
    </div>
  );
}
