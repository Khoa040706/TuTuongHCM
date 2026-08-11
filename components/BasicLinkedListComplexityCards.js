"use client";
import React from "react";
import { Zap, AlertTriangle, ShieldCheck, CheckCircle2, Clock, Cpu } from "lucide-react";

export default function BasicLinkedListComplexityCards() {
  const complexityData = [
    {
      op: "addFirst(item)",
      complexity: "O(1)",
      type: "fast",
      desc: "Chèn đầu cực nhanh. Không cần dịch chuyển (shift) phần tử như Array."
    },
    {
      op: "removeFirst()",
      complexity: "O(1)",
      type: "fast",
      desc: "Xóa đầu cực nhanh. Chỉ cần cập nhật con trỏ head sang head.getNext()."
    },
    {
      op: "getFirst()",
      complexity: "O(1)",
      type: "fast",
      desc: "Đọc phần tử đầu ngay lập tức từ head.getElement()."
    },
    {
      op: "contains(item)",
      complexity: "O(n)",
      type: "slow",
      desc: "Phải dùng vòng lặp duyệt lần lượt qua n phần tử từ head đến null."
    }
  ];

  return (
    <div className="w-full bg-white rounded-2xl border border-purple-200/80 shadow-xl p-5 md:p-6 my-6 font-sans">
      {/* Header */}
      <div className="pb-4 mb-5 border-b border-purple-100">
        <div className="flex items-center gap-2">
          <span className="bg-purple-100 text-purple-700 text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full uppercase">
            Đánh giá & Nguyên tắc VII.7
          </span>
          <span className="text-xs text-slate-500 font-mono">Time Complexity & Pointer Golden Rules</span>
        </div>
        <h3 className="text-base md:text-lg font-bold text-slate-900 mt-1">
          Độ phức tạp thời gian & 3 Quy tắc vàng khi thao tác Con trỏ
        </h3>
      </div>

      {/* 1. Time Complexity Table */}
      <div className="mb-6">
        <h4 className="text-xs font-bold font-mono text-purple-950 uppercase tracking-wider mb-3 flex items-center gap-2">
          <Zap className="w-4 h-4 text-purple-600" />
          <span>1. Bảng Đánh giá Độ phức tạp Thời gian (BasicLinkedList)</span>
        </h4>

        <div className="overflow-x-auto rounded-xl border border-purple-200/80">
          <table className="w-full text-xs text-left border-collapse">
            <thead className="bg-purple-50 text-purple-950 font-bold border-b border-purple-200">
              <tr>
                <th className="px-4 py-3 font-mono">Thao tác (Method)</th>
                <th className="px-4 py-3 font-mono text-center">Độ phức tạp</th>
                <th className="px-4 py-3">Lý do & Giải thích chi tiết</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-100 bg-white">
              {complexityData.map((row, idx) => (
                <tr key={idx} className="hover:bg-purple-50/40 transition-colors">
                  <td className="px-4 py-3 font-mono font-bold text-slate-800">
                    <code>{row.op}</code>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span
                      className={`inline-block px-2.5 py-1 rounded-md font-mono font-bold text-xs ${
                        row.type === "fast"
                          ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                          : "bg-rose-100 text-rose-800 border border-rose-300"
                      }`}
                    >
                      {row.complexity}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-slate-700 leading-relaxed">
                    <div className="flex items-center gap-1.5">
                      {row.type === "fast" ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      ) : (
                        <Clock className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                      )}
                      <span>{row.desc}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 2. Three Golden Rules Cards */}
      <h4 className="text-xs font-bold font-mono text-purple-950 uppercase tracking-wider mb-3 flex items-center gap-2">
        <ShieldCheck className="w-4 h-4 text-purple-600" />
        <span>2. 3 Quy tắc vàng bắt buộc ghi nhớ (Golden Rules)</span>
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Rule 1 */}
        <div className="bg-purple-50/60 border border-purple-200 rounded-xl p-4 space-y-2">
          <span className="text-[10px] font-mono font-bold bg-purple-200 text-purple-900 px-2 py-0.5 rounded inline-block">
            QUY TẮC 1
          </span>
          <h5 className="font-bold text-xs text-purple-950">Ưu điểm O(1) Tuyệt đối</h5>
          <p className="text-xs text-slate-700 leading-relaxed">
            Ưu điểm lớn nhất của Linked List so với Array là <code>addFirst()</code> / <code>removeFirst()</code> đạt độ phức tạp <strong>O(1)</strong>, không bao giờ cần dịch chuyển phần tử.
          </p>
        </div>

        {/* Rule 2 */}
        <div className="bg-indigo-50/60 border border-indigo-200 rounded-xl p-4 space-y-2">
          <span className="text-[10px] font-mono font-bold bg-indigo-200 text-indigo-900 px-2 py-0.5 rounded inline-block">
            QUY TẮC 2
          </span>
          <h5 className="font-bold text-xs text-indigo-950">Luôn xét đủ Boundary Cases</h5>
          <p className="text-xs text-slate-700 leading-relaxed">
            Khi cài đặt bất kỳ thao tác cập nhật nào, phải xét đủ 3 trường hợp: <strong>0 phần tử (rỗng)</strong>, <strong>1 phần tử</strong>, và <strong>&ge;2 phần tử</strong> để tránh NullPointerException.
          </p>
        </div>

        {/* Rule 3 */}
        <div className="bg-amber-50/60 border border-amber-200 rounded-xl p-4 space-y-2">
          <span className="text-[10px] font-mono font-bold bg-amber-200 text-amber-900 px-2 py-0.5 rounded inline-block">
            QUY TẮC 3
          </span>
          <h5 className="font-bold text-xs text-amber-950">Thứ tự câu lệnh Con trỏ</h5>
          <p className="text-xs text-slate-700 leading-relaxed">
            Thứ tự các câu lệnh gán con trỏ <strong>RẤT QUAN TRỌNG</strong>. Sai thứ tự sẽ làm mất địa chỉ node cũ (ví dụ: phải lưu <code>head</code> cũ trước khi gán <code>head</code> mới).
          </p>
        </div>
      </div>
    </div>
  );
}
