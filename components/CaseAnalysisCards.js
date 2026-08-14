"use client";

import React, { useState } from "react";
import { AlertCircle, CheckCircle, HelpCircle, Layers, ShieldCheck, Zap } from "lucide-react";

export default function CaseAnalysisCards() {
  const [selectedCase, setSelectedCase] = useState("worst");

  const cases = [
    {
      id: "worst",
      title: "Worst-Case Analysis",
      vietnamese: "Trường Hợp Xấu Nhất",
      badge: "THƯỜNG DÙNG NHẤT (CHUẨN MỰC)",
      badgeColor: "bg-rose-100 text-rose-800 border-rose-300",
      cardClass: "from-rose-50 via-white to-rose-50/30 border-rose-300",
      icon: AlertCircle,
      iconColor: "text-rose-600",
      goal: "Xác định thời gian TỐI ĐA (maximum time) mà algorithm cần để giải bài toán kích thước n.",
      whyUseful: "Cung cấp cam kết chắc chắn: hiệu năng thuật toán sẽ không bao giờ tệ hơn cận này.",
      seqComplexity: "O(n)",
      binComplexity: "O(log n)",
      note: "Phần tử tìm kiếm nằm ở cuối mảng hoặc không tồn tại trong mảng."
    },
    {
      id: "best",
      title: "Best-Case Analysis",
      vietnamese: "Trường Hợp Tốt Nhất",
      badge: "ÍT HỮU ÍCH (NOT USEFUL)",
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
      cardClass: "from-emerald-50 via-white to-emerald-50/30 border-emerald-300",
      icon: CheckCircle,
      iconColor: "text-emerald-600",
      goal: "Quan tâm đến hành vi TỐT NHẤT — thời gian tối thiểu khi dữ liệu thuận lợi nhất.",
      whyUseful: "Thường không thú vị và không hữu ích vì rất hiếm khi xảy ra trong thực tế, không phản ánh năng lực tổng thể.",
      seqComplexity: "O(1)",
      binComplexity: "O(1)",
      note: "Tìm thấy ngay ở vị trí đầu tiên (Sequential) hoặc ngay vị trí chính giữa mid (Binary)."
    },
    {
      id: "average",
      title: "Average-Case Analysis",
      vietnamese: "Trường Hợp Trung Bình",
      badge: "KHÓ NHẤT (THE HARDEST)",
      badgeColor: "bg-amber-100 text-amber-800 border-amber-300",
      cardClass: "from-amber-50 via-white to-amber-50/30 border-amber-300",
      icon: HelpCircle,
      iconColor: "text-amber-600",
      goal: "Xác định thời gian TRUNG BÌNH (expected time) trên tập dữ liệu ngẫu nhiên.",
      whyUseful: "Rất thực tế nhưng cực kỳ khó phân tích vì đòi hỏi phải biết trước phân phối xác suất (probability distribution) của dữ liệu đầu vào.",
      seqComplexity: "O(n)",
      binComplexity: "O(log n)",
      note: "Trung bình duyệt n/2 phần tử (Sequential) ➔ vẫn là O(n)."
    }
  ];

  const active = cases.find((c) => c.id === selectedCase) || cases[0];

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl p-5 md:p-7 shadow-sm my-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-5">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-2.5 py-1 rounded-md border border-rose-200">
            Mục 5.6 (tiếp) &amp; 5.7 — 3 Loại Phân Tích
          </span>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-1">
            Analysis of Different Cases: Worst-Case vs Best-Case vs Average-Case
          </h3>
          <p className="text-xs text-slate-500">
            Hiểu rõ tại sao khoa học máy tính luôn ưu tiên <strong>Worst-Case Analysis</strong> trong hầu hết các bài toán
          </p>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 font-mono text-xs font-bold self-start sm:self-auto">
          <Layers className="w-3.5 h-3.5 text-rose-600" />
          3 Trường hợp
        </div>
      </div>

      {/* 3 Interactive Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {cases.map((c) => {
          const IconComp = c.icon;
          const isSelected = selectedCase === c.id;

          return (
            <div
              key={c.id}
              onClick={() => setSelectedCase(c.id)}
              className={`p-4 rounded-2xl border-2 transition-all cursor-pointer bg-gradient-to-br ${c.cardClass} flex flex-col justify-between hover:shadow-md ${
                isSelected ? "ring-2 ring-slate-900 shadow-md scale-101" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <IconComp className={`w-5 h-5 ${c.iconColor}`} />
                  <span className={`px-2 py-0.5 rounded-full font-mono text-[10px] font-black border ${c.badgeColor}`}>
                    {c.badge}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-slate-900">{c.title}</h4>
                <span className="text-[11px] font-mono text-slate-600 block mb-2">{c.vietnamese}</span>
                <p className="text-xs text-slate-700 leading-relaxed">{c.goal}</p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-200 text-[11px] font-mono text-slate-500">
                {c.whyUseful}
              </div>
            </div>
          );
        })}
      </div>

      {/* Summary Matrix Table */}
      <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
        <div className="bg-slate-100 p-3 text-xs font-mono font-bold text-slate-700 border-b border-slate-200 flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            MA TRẬN HIỆU QUẢ CỦA CÁC THUẬT TOÁN TÌM KIẾM (SEARCHING ALGORITHMS)
          </span>
          <span className="text-slate-500 font-normal hidden sm:inline">Dữ liệu mảng kích thước n</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-600">
                <th className="py-2.5 px-3.5">Thuật toán</th>
                <th className="py-2.5 px-3 text-rose-700 font-bold">Worst-Case (Xấu nhất)</th>
                <th className="py-2.5 px-3 text-amber-700 font-bold">Average-Case (Trung bình)</th>
                <th className="py-2.5 px-3 text-emerald-700 font-bold">Best-Case (Tốt nhất)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-800">
              <tr className="hover:bg-slate-50/80">
                <td className="py-2.5 px-3.5 font-bold">
                  <div>Sequential Search</div>
                  <span className="text-[10px] text-slate-500 font-sans font-normal">Dữ liệu chưa sắp xếp</span>
                </td>
                <td className="py-2.5 px-3 text-rose-700 font-black">O(n)</td>
                <td className="py-2.5 px-3 text-amber-700 font-black">O(n)</td>
                <td className="py-2.5 px-3 text-emerald-700 font-black">O(1)</td>
              </tr>
              <tr className="hover:bg-slate-50/80 bg-teal-50/30">
                <td className="py-2.5 px-3.5 font-bold text-teal-950">
                  <div>Binary Search</div>
                  <span className="text-[10px] text-teal-700 font-sans font-normal">Dữ liệu đã sắp xếp</span>
                </td>
                <td className="py-2.5 px-3 text-rose-700 font-black">O(log n)</td>
                <td className="py-2.5 px-3 text-amber-700 font-black">O(log n)</td>
                <td className="py-2.5 px-3 text-emerald-700 font-black">O(1)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
