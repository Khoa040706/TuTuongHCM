"use client";

import React, { useState } from "react";
import { ArrowDown, ArrowUp, Zap, ShieldCheck, Sparkles, Layers } from "lucide-react";

export default function AvlInsertionPipelineVisualizer() {
  const [activeStage, setActiveStage] = useState(1);

  const stages = [
    {
      num: 1,
      name: "1. BST Standard Insert (Chèn Xuống)",
      direction: "Đi xuống từ Root → Lá",
      icon: ArrowDown,
      color: "sky",
      badge: "Giai Đoạn 1",
      desc: "So sánh khóa cần chèn với từng đỉnh từ Root xuống lá y hệt BST bình thường để tìm vị trí con trỏ NULL thích hợp và gắn đỉnh mới vào.",
      detail: "Tốn tối đa O(h) phép so sánh. Đỉnh mới tạo là lá nên có height = 0.",
    },
    {
      num: 2,
      name: "2. Walk Up & Check Invariant (Đi Ngược Lên)",
      direction: "Đi ngược từ Lá → Root",
      icon: ArrowUp,
      color: "teal",
      badge: "Giai Đoạn 2",
      desc: "Từ đỉnh vừa chèn, lần ngược lên theo đường dẫn tổ tiên (Ancestor path). Tại mỗi đỉnh: cập nhật lại x.height và tính toán hệ số cân bằng bf(x) = h_L - h_R.",
      detail: "Dừng lại ngay khi phát hiện đỉnh đầu tiên có |bf(x)| = 2 (mất cân bằng).",
    },
    {
      num: 3,
      name: "3. Single Trigger Rebalance (Xoay 1 Lần & Dừng)",
      direction: "Thực hiện phép quay O(1)",
      icon: Zap,
      color: "emerald",
      badge: "Giai Đoạn 3",
      desc: "Xác định 1 trong 4 case (LL, RR, LR, RL) và thực hiện phép quay tương ứng để phục hồi cân bằng.",
      detail: "⭐ QUY TẮC VÀNG: Sau khi xoay xong tại đỉnh này, chiều cao cây con phục hồi về như trước khi chèn → KHÔNG BAO GIỜ làm mất cân bằng các tổ tiên phía trên nữa → DỪNG LẠI NGAY LẬP TỨC (Tối đa 1 lần rebalance)!",
    },
  ];

  const current = stages.find((s) => s.num === activeStage) || stages[0];

  return (
    <div className="my-8 rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-100 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-900 text-xs font-semibold mb-2">
            <Layers className="w-3.5 h-3.5 text-emerald-700" />
            <span>Quy Trình 3 Bước Chuẩn Của Thao Tác Chèn (Mục 5)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-900 via-teal-800 to-emerald-900 bg-clip-text text-transparent">
            Quy Trình Insertion: Tối Đa Đúng 1 Lần Rebalance
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Tổng hợp logic chèn vào cây AVL và lý giải vì sao <strong>Insertion chỉ kích hoạt tối đa 1 lần xoay</strong>.
          </p>
        </div>

        {/* Max 1 Rebalance Badge */}
        <div className="px-3.5 py-1.5 rounded-xl border border-emerald-300 bg-emerald-50 text-emerald-900 font-mono font-bold text-xs flex items-center gap-2 self-start md:self-auto shadow-sm">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Trigger tối đa 1 lần rebalance</span>
        </div>
      </div>

      {/* 3 Pipeline Stage Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
        {stages.map((st) => {
          const Icon = st.icon;
          const isSel = activeStage === st.num;

          return (
            <button
              key={st.num}
              onClick={() => setActiveStage(st.num)}
              className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                isSel
                  ? "bg-emerald-600 border-emerald-500 text-white shadow-sm scale-[1.02]"
                  : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-[10px] font-mono font-bold uppercase ${isSel ? "text-emerald-100" : "text-emerald-700"}`}>
                  {st.badge}
                </span>
                <Icon className={`w-4 h-4 ${isSel ? "text-white" : "text-slate-400"}`} />
              </div>
              <div className={`text-xs font-bold font-sans line-clamp-1 ${isSel ? "text-white" : "text-slate-900"}`}>{st.name}</div>
              <div className={`text-[11px] mt-1 font-mono ${isSel ? "text-emerald-100" : "text-slate-500"}`}>{st.direction}</div>
            </button>
          );
        })}
      </div>

      {/* Active Stage Detailed Card */}
      <div className="p-6 rounded-2xl bg-white border border-emerald-100 shadow-sm space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 border border-emerald-300 flex items-center justify-center flex-shrink-0">
            <current.icon className="w-5 h-5 text-emerald-700" />
          </div>
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-800">
              Chi tiết quy trình • {current.badge}
            </span>
            <h4 className="text-base font-bold text-slate-900">{current.name}</h4>
          </div>
        </div>

        <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-sans">{current.desc}</p>

        <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-800 font-mono leading-relaxed font-semibold">
          {current.detail}
        </div>

        {activeStage === 3 && (
          <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-300 text-xs text-emerald-950 space-y-1 shadow-sm">
            <div className="font-bold flex items-center gap-1.5 text-emerald-900">
              <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
              Điểm Chốt Trọng Tâm (Slide 5):
            </div>
            <p className="text-[11px] leading-relaxed text-slate-700">
              <strong>Insertion AVL</strong> = Insertion BST bình thường + Cập nhật height + Kiểm tra &amp; Fix balance factor trên đường đi lên root. <strong>Chỉ trigger tối đa 1 lần rebalance!</strong>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
