"use client";
import React, { useState } from "react";
import { Info, HelpCircle, Check, Zap, Shield } from "lucide-react";

export default function CollectionArrayListComparison() {
  const [hoveredRow, setHoveredRow] = useState(null);

  const rows = [
    {
      feature: "Phiên bản JDK",
      vector: "JDK 1.0 (Legacy)",
      arraylist: "JDK 1.2 (Hiện đại)",
      icon: <Info className="w-4 h-4 text-stone-500" />
    },
    {
      feature: "Đồng bộ (Thread-Safety)",
      vector: "🔒 Có (Synchronized - An toàn đa luồng)",
      arraylist: "⚡ Không (Không synchronized - Không an toàn đa luồng)",
      icon: <Shield className="w-4 h-4 text-indigo-500" />
    },
    {
      feature: "Tốc độ hiệu năng",
      vector: "🐢 Chậm hơn (tốn chi phí quản lý khóa)",
      arraylist: "🚀 Nhanh hơn (tối ưu hơn 20% - 30%)",
      icon: <Zap className="w-4 h-4 text-amber-500" />
    },
    {
      feature: "Tự co giãn dung lượng",
      vector: "📈 Gấp đôi (+100%) kích thước khi đầy",
      arraylist: "📈 Tăng 50% kích thước khi đầy",
      icon: <HelpCircle className="w-4 h-4 text-emerald-500" />
    },
    {
      feature: "Khuyên dùng",
      vector: "Hạn chế (Chỉ dùng khi cần đa luồng thực sự)",
      arraylist: "Ưu tiên (Sử dụng rộng rãi trong các dự án)",
      icon: <Check className="w-4 h-4 text-teal-500" />
    }
  ];

  return (
    <div className="w-full bg-white border border-stone-200/80 rounded-3xl p-6 text-stone-850 shadow-lg my-6 overflow-hidden relative">
      <div className="bg-gradient-to-r from-teal-500 to-indigo-500 h-1.5 absolute top-0 left-0 right-0" />

      <h4 className="text-base md:text-lg font-black text-stone-900 flex items-center gap-2 mb-4">
        <Shield className="w-5 h-5 text-teal-600" />
        <span>So Sánh Chi Tiết: Vector vs ArrayList</span>
      </h4>

      {/* Similarities badges */}
      <div className="bg-stone-50/60 p-4 rounded-2xl border border-stone-200/60 mb-6">
        <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block mb-2.5 font-mono">
          🤝 Điểm tương đồng giữa Vector và ArrayList
        </span>
        <div className="flex flex-wrap gap-2 text-xs">
          <span className="bg-white border border-stone-200 text-stone-700 px-3 py-1 rounded-xl shadow-sm flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
            Đều dựa trên chỉ số (Index-based) và sử dụng mảng nội bộ (internal array)
          </span>
          <span className="bg-white border border-stone-200 text-stone-700 px-3 py-1 rounded-xl shadow-sm flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
            Đều giữ nguyên thứ tự chèn (Insertion Order) của các phần tử
          </span>
        </div>
      </div>

      {/* Comparison table */}
      <div className="overflow-x-auto border border-stone-200/80 rounded-2xl shadow-sm bg-stone-50/20">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-stone-50 border-b border-stone-200 font-mono text-[10px] text-stone-450 uppercase font-bold">
              <th className="p-3.5 pl-5">Đặc tính</th>
              <th className="p-3.5 text-rose-700">Vector</th>
              <th className="p-3.5 text-teal-700">ArrayList</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-150">
            {rows.map((row, idx) => (
              <tr
                key={idx}
                onMouseEnter={() => setHoveredRow(idx)}
                onMouseLeave={() => setHoveredRow(null)}
                className={`transition-colors duration-250 ${
                  hoveredRow === idx ? "bg-stone-100/60" : "bg-white"
                }`}
              >
                <td className="p-3.5 pl-5 font-bold text-stone-800 flex items-center gap-2">
                  {row.icon}
                  <span>{row.feature}</span>
                </td>
                <td className="p-3.5 text-stone-600 font-mono">{row.vector}</td>
                <td className="p-3.5 text-stone-800 font-bold font-mono">{row.arraylist}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bottom caution box */}
      <div className="bg-yellow-50/60 border border-yellow-250/60 rounded-2xl p-4 flex gap-3 items-start mt-6 shadow-sm">
        <Info className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
        <div>
          <span className="text-xs font-bold text-yellow-900 font-mono uppercase tracking-wider block">
            💡 Khuyên dùng từ Java Experts
          </span>
          <p className="text-xs text-yellow-700 mt-1 leading-relaxed">
            Luôn luôn ưu tiên sử dụng <strong>ArrayList</strong> trong các luồng đơn lẻ hoặc khi bạn tự quản lý cơ chế đồng bộ hóa ở mức cao hơn. Chỉ dùng <strong>Vector</strong> khi được yêu cầu rõ ràng bởi các API kế thừa (legacy APIs).
          </p>
        </div>
      </div>
    </div>
  );
}
