"use client";

import React, { useState } from "react";
import {
  Compass,
} from "lucide-react";

export default function RuralRoadNetworkMotivator() {
  const [selectedPlan, setSelectedPlan] = useState("mst"); // "cycle" | "costly" | "mst"

  return (
    <div className="my-8 rounded-3xl border border-teal-200/80 bg-gradient-to-br from-teal-50/80 via-white to-emerald-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-teal-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 border border-teal-300 text-teal-950 text-xs font-bold mb-2">
            <Compass className="w-3.5 h-3.5 text-teal-700" />
            <span>Phần 2.1 &amp; 2.3: Ví Dụ Khởi Động &amp; Bài Toán MST Chuẩn</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-teal-950 via-emerald-950 to-amber-950 bg-clip-text text-transparent">
            Dự Án Hạ Tầng Nối Làng Nông Thôn (Rural Road Network)
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Bài toán kinh điển của một dự án chính phủ: Kết nối liên thông các ngôi làng với chi phí mở đường tối thiểu trong ngân sách có hạn.
          </p>
        </div>

        {/* Badge */}
        <div className="px-3.5 py-1.5 rounded-xl bg-teal-100 border border-teal-300 text-teal-950 font-mono font-bold text-xs self-start md:self-auto shadow-sm">
          Bài Toán MST Chuẩn
        </div>
      </div>

      {/* 3 Strategy Plan Selector */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
        {[
          { id: "cycle", label: "Phương Án 1: Xây Dư Thừa (Có Chu Trình)", cost: "32 Tỷ VNĐ", state: "LÃNG PHÍ NGÂN SÁCH" },
          { id: "costly", label: "Phương Án 2: Cây Khung Chưa Tối Ưu", cost: "24 Tỷ VNĐ", state: "ĐỦ CẠNH NHƯNG ĐẮT" },
          { id: "mst", label: "Phương Án 3: Cây Khung Nhỏ Nhất (MST)", cost: "18 Tỷ VNĐ", state: "TỐI ƯU CỰC ĐẠI ⭐" },
        ].map((plan) => (
          <button
            key={plan.id}
            onClick={() => setSelectedPlan(plan.id)}
            className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between gap-1.5 shadow-sm ${
              selectedPlan === plan.id
                ? "bg-teal-100 border-teal-400 ring-2 ring-teal-400/30 text-teal-950 font-bold"
                : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
            }`}
          >
            <span className="text-xs font-mono font-bold">{plan.label}</span>
            <div className="flex items-center justify-between mt-1">
              <span className="text-sm font-extrabold font-mono text-amber-950">{plan.cost}</span>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded-lg border font-bold ${
                plan.id === "mst"
                  ? "bg-emerald-100 border-emerald-300 text-emerald-950"
                  : "bg-slate-100 border-slate-200 text-slate-600"
              }`}>
                {plan.state}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Plan Details & The Standard MST Problem Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Interactive Real-world Analysis (6 cols) */}
        <div className="lg:col-span-6 p-5 rounded-2xl bg-white border border-teal-100 space-y-3.5 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
            <span>Đánh Giá Phương Án Quy Hoạch Giao Thông</span>
            <span className="text-teal-950 font-bold">{selectedPlan.toUpperCase()}</span>
          </div>

          {selectedPlan === "cycle" && (
            <div className="space-y-2 text-xs text-slate-600 font-sans leading-relaxed">
              <p className="text-rose-900 font-mono font-bold">❌ Nhược điểm: Xây dựng quá nhiều đường vòng lặp dư thừa.</p>
              <p>Mặc dù tất cả các làng đều đến được với nhau, nhưng việc mở thêm các đường nối tạo chu trình đã làm tổng chi phí đội lên tới <strong>32 Tỷ</strong>. Trong bối cảnh ngân sách có giới hạn (budget limit), đây là phương án thất bại.</p>
            </div>
          )}

          {selectedPlan === "costly" && (
            <div className="space-y-2 text-xs text-slate-600 font-sans leading-relaxed">
              <p className="text-amber-900 font-mono font-bold">⚠️ Hạn chế: Đúng chuẩn cây khung ($E = V - 1 = 4$ cạnh) nhưng chưa tối ưu trọng số.</p>
              <p>Do kỹ sư chọn các cung đường đi qua địa hình núi dốc và sình lầy có chi phí thi công cao, tổng chi phí vẫn ở mức <strong>24 Tỷ</strong>. Ta cần một thuật toán thông minh hơn để tìm ra các con đường giá rẻ nhất.</p>
            </div>
          )}

          {selectedPlan === "mst" && (
            <div className="space-y-2 text-xs text-slate-700 font-sans leading-relaxed">
              <p className="text-emerald-900 font-mono font-bold">✅ Hoàn hảo: Cây Khung Nhỏ Nhất (MST) — Chi phí tối thiểu 18 Tỷ!</p>
              <p>Chọn đúng 4 con đường có tổng trọng số thấp nhất, vừa đảm bảo 100% ngôi làng được kết nối liên thông tới nhau, vừa không tạo chu trình lãng phí ngân sách chính phủ!</p>
            </div>
          )}
        </div>

        {/* Right: The Standard MST Problem Framework (6 cols) */}
        <div className="lg:col-span-6 p-5 rounded-2xl bg-white border border-teal-100 space-y-3.5 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
            <span>Chuẩn Hóa Bài Toán MST (The Standard MST Problem)</span>
            <span className="text-amber-950 font-bold">Mục 2.3</span>
          </div>

          <div className="space-y-2.5 text-xs font-mono">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 shadow-sm">
              <span className="text-teal-950 font-bold block mb-0.5">📥 INPUT:</span>
              <span className="text-slate-700 font-sans">Một đồ thị vô hướng liên thông có trọng số $G(V, E)$.</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 shadow-sm">
              <span className="text-amber-950 font-bold block mb-0.5">🎯 YÊU CẦU:</span>
              <span className="text-slate-700 font-sans">Chọn ra một số cạnh của $G$ sao cho đồ thị vẫn <strong>liên thông</strong>, nhưng có <strong>tổng trọng số nhỏ nhất (minimum total weight)</strong>.</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 shadow-sm">
              <span className="text-emerald-950 font-bold block mb-0.5">📤 OUTPUT:</span>
              <span className="text-slate-700 font-sans"><strong>Minimum Spanning Tree (MST)</strong> của đồ thị $G$.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
