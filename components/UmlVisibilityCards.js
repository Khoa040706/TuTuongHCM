"use client";
import React, { useState } from "react";
import { Eye, Shield, EyeOff, CheckCircle } from "lucide-react";

export default function UmlVisibilityCards() {
  const [activeKey, setActiveKey] = useState("public");

  const cards = [
    {
      key: "public",
      symbol: "+",
      name: "public",
      color: "bg-emerald-50 border-emerald-200 text-emerald-800",
      accent: "text-emerald-600",
      icon: <Eye className="text-emerald-600" size={16} />,
      desc: "Có thể truy cập công khai từ bất kỳ lớp nào trong hệ thống.",
      umlExample: "+ getRadius(): double",
      javaExample: "public double getRadius() { ... }"
    },
    {
      key: "private",
      symbol: "-",
      name: "private",
      color: "bg-rose-50 border-rose-200 text-rose-800",
      accent: "text-rose-600",
      icon: <EyeOff className="text-rose-600" size={16} />,
      desc: "Chỉ được phép truy cập nội bộ bên trong chính lớp đó.",
      umlExample: "- radius: double",
      javaExample: "private double radius;"
    },
    {
      key: "protected",
      symbol: "#",
      name: "protected",
      color: "bg-amber-50 border-amber-200 text-amber-800",
      accent: "text-amber-600",
      icon: <Shield className="text-amber-600" size={16} />,
      desc: "Có thể truy cập từ các lớp con (subclass) hoặc các lớp cùng package.",
      umlExample: "# colour: String",
      javaExample: "protected String colour;"
    }
  ];

  const activeCard = cards.find((c) => c.key === activeKey);

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-3xl p-4 md:p-6 my-6 shadow-sm font-sans text-stone-850 select-none animate-fade-in">
      <div className="text-xs font-black text-stone-400 uppercase tracking-wider mb-4">🔍 Bảng Tra Cứu Visibility Symbol (UML)</div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-5">
        {cards.map((card) => (
          <button
            key={card.key}
            onClick={() => setActiveKey(card.key)}
            className={`border p-4 rounded-2xl cursor-pointer text-left transition-all duration-200 flex items-center justify-between ${
              activeKey === card.key
                ? `${card.color} shadow-sm scale-[1.02] border-2`
                : "bg-white border-stone-200 hover:bg-stone-100 text-stone-700"
            }`}
          >
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xl font-black">{card.symbol}</span>
                <span className="text-xs font-black uppercase tracking-wider">{card.name}</span>
              </div>
              <p className="text-[10px] text-stone-500 mt-1 font-medium line-clamp-1">
                {card.desc}
              </p>
            </div>
            <div className="shrink-0 ml-2">
              {card.icon}
            </div>
          </button>
        ))}
      </div>

      {/* Active Detail Info Card */}
      {activeCard && (
        <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-xs animate-in fade-in duration-200">
          <div className="flex items-center gap-2 mb-3 border-b border-stone-100 pb-2">
            <span className="text-xs font-black text-stone-400 uppercase">Chi tiết Ký hiệu {activeCard.symbol} ({activeCard.name})</span>
          </div>

          <p className="text-xs text-stone-700 leading-relaxed font-medium mb-4">
            {activeCard.desc}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* UML Syntax */}
            <div className="bg-stone-50 border border-stone-200 rounded-xl p-3.5">
              <span className="text-[9px] text-stone-400 font-black uppercase block mb-1.5">Cú pháp chuẩn UML</span>
              <code className="font-mono text-xs font-bold text-amber-700">{activeCard.umlExample}</code>
            </div>

            {/* Java Equivalent */}
            <div className="bg-stone-50 border border-stone-200 rounded-xl p-3.5">
              <span className="text-[9px] text-stone-400 font-black uppercase block mb-1.5">Mã nguồn Java tương đương</span>
              <code className="font-mono text-xs font-bold text-blue-700">{activeCard.javaExample}</code>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
