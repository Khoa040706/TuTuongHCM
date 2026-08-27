"use client";

import React, { useState } from "react";
import { ShieldCheck, Zap, Scale, Layers, BookOpen } from "lucide-react";

export default function AvlSummaryDashboard() {
  const [activePillar, setActivePillar] = useState(1);

  const pillars = [
    {
      id: 1,
      title: "1. Being Balanced",
      badge: "Động Lực Cốt Lõi",
      icon: Scale,
      color: "sky",
      summary: "Chiều cao quyết định tốc độ O(h).",
      desc: "Nếu không cân bằng, BST có thể bị thoái hóa thành danh sách liên kết với h = n - 1 (tốn O(n)). Việc duy trì cân bằng đảm bảo log₂(n) < h < n, đưa mọi thao tác về O(log n).",
    },
    {
      id: 2,
      title: "2. Height-Balanced Trees",
      badge: "Định Nghĩa & Chứng Minh",
      icon: ShieldCheck,
      color: "teal",
      summary: "Bất biến |h_L - h_R| ≤ 1 tại mọi đỉnh.",
      desc: "Chứng minh toán học qua Fibonacci Tree (n_h = 1 + n_{h-1} + n_{h-2}) khẳng định chiều cao cây luôn bị chặn trên bởi h < 2·log₂(n) ⟹ h = O(log n) trong trường hợp xấu nhất.",
    },
    {
      id: 3,
      title: "3. Tree Rotations",
      badge: "Cơ Chế O(1)",
      icon: Zap,
      color: "emerald",
      summary: "Đổi vai trò cha-con giữa P & Q trong O(1).",
      desc: "Phép xoay cây bảo toàn 100% thứ tự khóa BST (A ≤ P ≤ B ≤ Q ≤ C). Chỉ thay đổi vài con trỏ và cập nhật height trong thời gian O(1) tuyệt đối.",
    },
    {
      id: 4,
      title: "4. AVL Rebalancing Rules",
      badge: "Quy Tắc Rebalance",
      icon: Layers,
      color: "indigo",
      summary: "4 Case: LL/RR (1 xoay) vs LR/RL (2 xoay).",
      desc: "Hệ số bf(x) = h_L - h_R. Khi insert chỉ trigger tối đa 1 lần xoay. Khi delete có thể trigger chuỗi xoay liên hoàn (cascade) lên tới O(log n) lần.",
    },
  ];

  const current = pillars.find((p) => p.id === activePillar) || pillars[0];

  return (
    <div className="my-8 rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-100 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-900 text-xs font-semibold mb-2">
            <BookOpen className="w-3.5 h-3.5 text-emerald-700" />
            <span>Tổng Kết Toàn Bộ Chương 9 (Summary - Mục 9)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-900 via-teal-800 to-emerald-900 bg-clip-text text-transparent">
            4 Trụ Cột Tri Thức Cốt Lõi Của Cây AVL
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Bức tranh toàn cảnh kết nối từ lý thuyết chiều cao đến kỹ thuật xoay cây thực chiến.
          </p>
        </div>

        <div className="px-3.5 py-1.5 rounded-xl border border-emerald-300 bg-emerald-50 text-emerald-900 font-mono font-bold text-xs flex items-center gap-2 self-start md:self-auto shadow-sm">
          <span>Mastering AVL Trees</span>
        </div>
      </div>

      {/* 4 Pillar Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {pillars.map((pil) => {
          const isSel = activePillar === pil.id;
          const Icon = pil.icon;

          return (
            <button
              key={pil.id}
              onClick={() => setActivePillar(pil.id)}
              className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                isSel
                  ? "bg-emerald-600 border-emerald-500 text-white shadow-sm scale-[1.02]"
                  : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-[10px] font-mono font-bold uppercase ${isSel ? "text-emerald-100" : "text-emerald-700"}`}>
                    {pil.badge}
                  </span>
                  <Icon className={`w-4 h-4 ${isSel ? "text-white" : "text-slate-400"}`} />
                </div>
                <h4 className={`text-xs font-bold font-sans line-clamp-1 ${isSel ? "text-white" : "text-slate-900"}`}>{pil.title}</h4>
              </div>
              <p className={`text-[11px] mt-2 font-mono line-clamp-1 ${isSel ? "text-emerald-100" : "text-slate-500"}`}>{pil.summary}</p>
            </button>
          );
        })}
      </div>

      {/* Active Pillar Detailed Card */}
      <div className="p-6 rounded-2xl bg-white border border-emerald-100 shadow-sm space-y-3">
        <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
          <div className="flex items-center gap-2">
            <current.icon className="w-5 h-5 text-emerald-700" />
            <h4 className="text-sm md:text-base font-bold text-slate-900">{current.title}</h4>
          </div>
          <span className="px-2.5 py-0.5 rounded-lg text-[10px] font-bold font-mono bg-emerald-50 text-emerald-900 border border-emerald-200">
            {current.badge}
          </span>
        </div>

        <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-sans">{current.desc}</p>
      </div>
    </div>
  );
}
