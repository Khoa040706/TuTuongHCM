"use client";

import React from "react";
import { Zap, AlertTriangle, BookmarkCheck, CheckCircle2 } from "lucide-react";

export default function StackApplicationsSummaryCards() {
  const bracketErrors = [
    {
      title: "1. Quá nhiều dấu đóng",
      example: "(..)..)",
      desc: "Gặp dấu đóng ) mà Stack đã rỗng (Underflow) ➔ Lỗi thừa dấu đóng."
    },
    {
      title: "2. Quá nhiều dấu mở",
      example: "(..(..)",
      desc: "Duyệt hết chuỗi mà Stack vẫn KHÔNG rỗng ➔ Lỗi thừa dấu mở."
    },
    {
      title: "3. Khớp sai loại ngoặc",
      example: "[..(..]..)",
      desc: "Gặp dấu đóng không khớp với dấu mở trên đỉnh Stack ➔ Mismatched brackets."
    }
  ];

  return (
    <div className="w-full bg-white text-slate-800 border border-slate-200/80 rounded-2xl shadow-lg p-5 md:p-6 my-8 font-sans">
      {/* Title */}
      <div className="flex items-center gap-2.5 pb-4 border-b border-slate-200 mb-6">
        <div className="p-2 bg-amber-50 rounded-xl border border-amber-200/60 shrink-0">
          <Zap className="w-5 h-5 text-amber-600" />
        </div>
        <h3 className="text-xl font-extrabold text-slate-900">
          Đánh giá Độ phức tạp & Các loại lỗi Dấu ngoặc
        </h3>
      </div>

      {/* Complexity Banner Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-800 flex items-center justify-between shadow-xs">
          <div>
            <div className="text-xs font-bold text-slate-900 mb-0.5">Khớp dấu ngoặc (Bracket Matching)</div>
            <div className="text-[11px] text-slate-500">
              Duyệt qua chuỗi <code className="font-mono text-indigo-600 bg-indigo-50 px-1 py-0.5 rounded border border-indigo-100 font-semibold">n</code> ký tự 1 lần
            </div>
          </div>
          <span className="text-xs font-extrabold text-emerald-800 font-mono bg-emerald-100 px-2.5 py-1 rounded border border-emerald-300 shrink-0 shadow-2xs">
            Time: O(n) | Space: O(n)
          </span>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-800 flex items-center justify-between shadow-xs">
          <div>
            <div className="text-xs font-bold text-slate-900 mb-0.5">Tính & Chuyển biểu thức Postfix</div>
            <div className="text-[11px] text-slate-500">
              Duyệt qua <code className="font-mono text-indigo-600 bg-indigo-50 px-1 py-0.5 rounded border border-indigo-100 font-semibold">n</code> token trong biểu thức
            </div>
          </div>
          <span className="text-xs font-extrabold text-emerald-800 font-mono bg-emerald-100 px-2.5 py-1 rounded border border-emerald-300 shrink-0 shadow-2xs">
            Time: O(n) | Space: O(n)
          </span>
        </div>
      </div>

      {/* 3 Bracket Error Types Grid */}
      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
        <AlertTriangle className="w-4 h-4 text-rose-500" />
        3 Loại lỗi dấu ngoặc thường gặp trong kiểm tra:
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {bracketErrors.map((err, idx) => (
          <div key={idx} className="bg-rose-50/70 border border-rose-200 text-rose-900 rounded-xl p-4 flex flex-col justify-between shadow-xs">
            <div>
              <div className="text-xs font-extrabold text-rose-950 mb-1.5">{err.title}</div>
              <div className="bg-white/90 px-2.5 py-1 rounded-md font-mono text-xs text-rose-700 font-semibold mb-2 border border-rose-200/80 inline-block shadow-2xs">
                Ví dụ: <code className="font-mono text-rose-800 font-bold">{err.example}</code>
              </div>
              <p className="text-[11px] text-rose-800 leading-relaxed">{err.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Box "📌 Cần nhớ" */}
      <div className="bg-gradient-to-r from-amber-50/90 via-slate-50 to-indigo-50/60 rounded-xl p-5 border border-amber-200/80 relative overflow-hidden shadow-xs">
        <div className="flex items-center gap-2 mb-3 text-amber-900 font-bold text-sm">
          <BookmarkCheck className="w-4.5 h-4.5 text-amber-600 shrink-0" />
          <span>📌 Cần nhớ (Key Takeaways cho Mục IV, V, VI)</span>
        </div>

        <ul className="space-y-2.5 text-xs text-slate-700">
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span className="leading-relaxed">
              <strong className="text-slate-900">Postfix & Prefix diễn giải duy nhất:</strong> Không cần bất kỳ dấu ngoặc nào, máy tính dễ dàng tính toán bằng Stack.
            </span>
          </li>

          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span className="leading-relaxed">
              <strong className="text-slate-900">Thuật toán tính Postfix:</strong> Operand ➔ push; Operator ➔ pop 2 đối số (arg2 trước, arg1 sau), thực hiện phép tính, rồi push kết quả trở lại Stack.
            </span>
          </li>

          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span className="leading-relaxed">
              <strong className="text-slate-900">Chuyển Infix ➔ Postfix:</strong> Khi gặp operator mới, phải pop hết các operator trong Stack có <strong className="text-slate-900">độ ưu tiên cao hơn hoặc bằng (<code className="text-amber-800 font-mono font-bold bg-amber-100/80 px-1 py-0.5 rounded border border-amber-300">&lt;=</code>)</strong> operator hiện tại ra postfixExp rồi mới push operator mới vào. Gặp <code className="text-amber-800 font-mono font-bold bg-amber-100/80 px-1 py-0.5 rounded border border-amber-300">')'</code> ➔ pop tới khi gặp <code className="text-amber-800 font-mono font-bold bg-amber-100/80 px-1 py-0.5 rounded border border-amber-300">'('</code> rồi loại bỏ <code className="text-amber-800 font-mono font-bold bg-amber-100/80 px-1 py-0.5 rounded border border-amber-300">'('</code>.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
