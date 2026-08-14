"use client";

import React, { useState } from "react";
import { Crosshair, Square, Zap, Globe, Sparkles, CheckCircle2, Shield } from "lucide-react";

export default function AlgorithmPropertiesCards() {
  const [selectedProp, setSelectedProp] = useState(null);

  const properties = [
    {
      id: "exact",
      name: "Exact (Chính xác)",
      vietnamese: "Từng bước phải chính xác",
      icon: Crosshair,
      color: "emerald",
      bgClass: "from-emerald-50 via-white to-emerald-50/40 border-emerald-200 hover:border-emerald-400",
      badgeClass: "bg-emerald-100 text-emerald-800 border-emerald-300",
      iconBg: "bg-emerald-100 text-emerald-700",
      desc: "Mọi thao tác trong thuật toán phải được mô tả rõ ràng, chính xác, không mơ hồ (unambiguous), máy tính có thể thực thi chính xác từng lệnh.",
      example: "Ví dụ: 'Gán x = x + 1' là chính xác; 'Tăng x lên một chút' là mơ hồ."
    },
    {
      id: "terminate",
      name: "Terminate (Kết thúc)",
      vietnamese: "Bắt buộc phải dừng lại",
      icon: Square,
      color: "rose",
      bgClass: "from-rose-50 via-white to-rose-50/40 border-rose-200 hover:border-rose-400",
      badgeClass: "bg-rose-100 text-rose-800 border-rose-300",
      iconBg: "bg-rose-100 text-rose-700",
      desc: "Thuật toán phải kết thúc sau một số lượng hữu hạn các bước thực thi (finite number of steps). Không bao giờ được rơi vào vòng lặp vô hạn (infinite loop).",
      example: "Ví dụ: Điều kiện dừng 'while (i < n)' đảm bảo kết thúc; 'while (true)' không có break là vô hạn."
    },
    {
      id: "effective",
      name: "Effective (Khả thi)",
      vietnamese: "Mỗi bước phải hiệu quả & khả thi",
      icon: Zap,
      color: "amber",
      bgClass: "from-amber-50 via-white to-amber-50/40 border-amber-200 hover:border-amber-400",
      badgeClass: "bg-amber-100 text-amber-800 border-amber-300",
      iconBg: "bg-amber-100 text-amber-700",
      desc: "Mọi thao tác phải đủ cơ bản để con người hoặc máy tính có thể thực hiện được trong thời gian thực tế với lượng tài nguyên hữu hạn.",
      example: "Ví dụ: Phép cộng, so sánh là khả thi; 'Tìm nghiệm chính xác của bài toán bất khả quy' là phi thực tế."
    },
    {
      id: "general",
      name: "General (Tổng quát)",
      vietnamese: "Áp dụng cho mọi bộ dữ liệu đầu vào",
      icon: Globe,
      color: "indigo",
      bgClass: "from-indigo-50 via-white to-indigo-50/40 border-indigo-200 hover:border-indigo-400",
      badgeClass: "bg-indigo-100 text-indigo-800 border-indigo-300",
      iconBg: "bg-indigo-100 text-indigo-700",
      desc: "Thuật toán phải giải quyết được cho toàn bộ lớp bài toán (class of problems) với mọi giá trị đầu vào hợp lệ, không chỉ đúng cho một vài dữ liệu cụ thể.",
      example: "Ví dụ: Thuật toán sắp xếp phải đúng cho mảng 1 phần tử, 1000 phần tử, mảng đã sắp xếp hoặc mảng ngược."
    }
  ];

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl p-5 md:p-7 shadow-sm my-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-5">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
            Mục 1 — Định nghĩa &amp; 4 Tính chất
          </span>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-1">
            4 Tính Chất Bắt Buộc Của Thuật Toán (Algorithm Properties)
          </h3>
          <p className="text-xs text-slate-500">
            Một thủ tục từng bước (step-by-step procedure) chỉ được coi là Thuật toán khi thỏa mãn đủ cả 4 tính chất này
          </p>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 font-mono text-xs self-start sm:self-auto font-bold">
          <Shield className="w-3.5 h-3.5 text-amber-600" />
          4 Tiêu chuẩn vàng
        </div>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
        {properties.map((p, idx) => {
          const IconComponent = p.icon;
          const isSelected = selectedProp === p.id;

          return (
            <div
              key={p.id}
              onClick={() => setSelectedProp(isSelected ? null : p.id)}
              className={`bg-gradient-to-br ${p.bgClass} border-2 rounded-2xl p-4 shadow-xs transition-all duration-300 cursor-pointer flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5 ${
                isSelected ? "ring-2 ring-slate-900 shadow-md" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-9 h-9 rounded-xl ${p.iconBg} flex items-center justify-center font-bold shadow-xs`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-400">#{idx + 1}</span>
                </div>

                <h4 className="text-base font-bold text-slate-900 mb-0.5">{p.name}</h4>
                <span className="text-[11px] font-mono text-slate-600 block mb-2 font-medium">
                  {p.vietnamese}
                </span>

                <p className="text-xs text-slate-700 leading-relaxed line-clamp-3">
                  {p.desc}
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-200/80 text-[11px] font-mono text-slate-500 italic">
                {p.example}
              </div>
            </div>
          );
        })}
      </div>

      {/* Sticky Takeaway Note */}
      <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-4 flex items-center gap-3 text-xs text-amber-900 font-sans">
        <Sparkles className="w-5 h-5 text-amber-600 shrink-0" />
        <div>
          <strong>📌 Quy tắc cốt lõi cần nhớ:</strong> 4 tính chất bắt buộc của Algorithm là{" "}
          <code className="font-mono bg-white px-1.5 py-0.5 rounded border border-amber-300 font-bold text-amber-900">
            exact - terminate - effective - general
          </code>
          . Nếu thiếu bất kỳ tính chất nào thì không phải là một thuật toán hoàn chỉnh.
        </div>
      </div>
    </div>
  );
}
