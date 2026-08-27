"use client";

import React, { useState } from "react";
import { ShieldCheck, Wrench, FileCheck, Layers, Sparkles, Scale } from "lucide-react";

export default function AvlBalancingStrategyRoadmap() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: "Định Nghĩa Tính Chất Tốt (Good Property / Invariant)",
      short: "1. Định Nghĩa Invariant",
      icon: FileCheck,
      color: "emerald",
      desc: "Thay vì đòi hỏi cây phải cân bằng tuyệt đối (quá cứng nhắc và tốn kém khi cập nhật), ta định nghĩa một tính chất cân bằng 'mềm dẻo' hơn.",
      avlAction: "Cây AVL định nghĩa: Tại MỌI đỉnh x, chênh lệch chiều cao hai cây con |x.left.height - x.right.height| ≤ 1 (Hệ số cân bằng BF ∈ {-1, 0, +1}).",
    },
    {
      step: 2,
      title: "Chứng Minh Toán Học (Proof of Balance)",
      short: "2. Chứng Minh h = O(log n)",
      icon: ShieldCheck,
      color: "teal",
      desc: "Phải chứng minh chặt chẽ bằng toán học rằng: nếu một cây thỏa mãn tính chất tốt ở Bước 1, thì chiều cao của nó chắc chắn bị chặn trên bởi O(log n).",
      avlAction: "Hai nhà toán học Adelson-Velskii & Landis đã dùng dãy Fibonacci chứng minh: Cây thỏa mãn Invariant luôn có h < 2·log₂(n) ≈ 1.44·log₂(n) = O(log n)!",
    },
    {
      step: 3,
      title: "Kiểm Tra Sau Mỗi Lần Insert / Delete",
      short: "3. Kiểm Tra Sau Biến Động",
      icon: Layers,
      color: "sky",
      desc: "Mỗi khi có thao tác chèn (insert) hoặc xóa (delete) làm thay đổi cấu trúc, ta phải kiểm tra xem tính chất tốt có còn được duy trì trên toàn bộ cây hay không.",
      avlAction: "Trong AVL, ta chỉ cần lần ngược từ vị trí vừa chèn/xóa lên Root (dọc theo đường đi O(h)) để kiểm tra Balance Factor của các tổ tiên.",
    },
    {
      step: 4,
      title: "Sửa Lại Nếu Bị Vi Phạm (Fix It via Rotations)",
      short: "4. Sửa Chữa Bằng Phép Quay",
      icon: Wrench,
      color: "indigo",
      desc: "Nếu phát hiện bất kỳ đỉnh nào bị vi phạm tính chất tốt sau khi chèn/xóa, ta phải có thuật toán khôi phục trật tự mà không làm hỏng BST Property và chỉ tốn O(1).",
      avlAction: "Cây AVL sử dụng 4 Phép Quay Thần Thánh (Single & Double Rotations: LL, RR, LR, RL) để điều chỉnh lại con trỏ chỉ trong thời gian O(1)!",
    },
  ];

  const current = steps.find((s) => s.step === activeStep) || steps[0];

  return (
    <div className="my-8 rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-100 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-900 text-xs font-semibold mb-2">
            <Scale className="w-3.5 h-3.5 text-emerald-700" />
            <span>Triết Lý &amp; Chiến Lược Cân Bằng Cây (Mục 2.6)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-900 via-teal-800 to-emerald-900 bg-clip-text text-transparent">
            4 Bước Chiến Lược Để Xây Dựng Cây Tự Cân Bằng
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Quy trình 4 bước tổng quát để thiết kế bất kỳ cấu trúc cây tự cân bằng nào trong Khoa học máy tính.
          </p>
        </div>

        {/* Step Indicator */}
        <div className="px-3.5 py-1.5 rounded-xl bg-emerald-50 border border-emerald-300 font-mono text-xs text-emerald-900 font-bold self-start md:self-auto shadow-sm">
          Bước {current.step} / 4
        </div>
      </div>

      {/* 4 Steps Roadmap Selector Tabs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 mb-6">
        {steps.map((s) => {
          const Icon = s.icon;
          const isSel = activeStep === s.step;

          return (
            <button
              key={s.step}
              onClick={() => setActiveStep(s.step)}
              className={`p-3.5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${
                isSel
                  ? "bg-emerald-600 border-emerald-500 text-white shadow-sm scale-[1.02]"
                  : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <div className="flex items-center justify-between w-full mb-2">
                <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${isSel ? "text-emerald-100" : "text-emerald-700"}`}>
                  Bước 0{s.step}
                </span>
                <Icon className={`w-4 h-4 ${isSel ? "text-white" : "text-slate-400"}`} />
              </div>
              <div className="text-xs font-bold font-sans line-clamp-1">{s.short}</div>
            </button>
          );
        })}
      </div>

      {/* Active Step Detailed Showcase Card */}
      <div className="p-6 rounded-2xl bg-white border border-emerald-100 shadow-sm space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 border border-emerald-300 flex items-center justify-center flex-shrink-0">
            <current.icon className="w-5 h-5 text-emerald-700" />
          </div>
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-800">
              Chiến lược tổng quát • Bước {current.step}
            </span>
            <h4 className="text-base font-bold text-slate-900">{current.title}</h4>
          </div>
        </div>

        <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-sans">{current.desc}</p>

        {/* How AVL Tree Realizes This Step */}
        <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-1.5">
          <div className="text-xs font-bold text-emerald-950 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-700" />
            Cách Cây AVL Hiện Thực Hóa Bước Này:
          </div>
          <p className="text-xs text-slate-800 font-mono leading-relaxed bg-white p-3 rounded-xl border border-emerald-100 font-semibold">
            {current.avlAction}
          </p>
        </div>
      </div>
    </div>
  );
}
