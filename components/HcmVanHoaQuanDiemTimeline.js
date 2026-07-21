"use client";
import React, { useState } from "react";
import { Landmark, Sparkles, BookMarked, ShieldCheck } from "lucide-react";

export default function HcmVanHoaQuanDiemTimeline() {
  const [activeMilestone, setActiveMilestone] = useState("tw5-viii");

  const milestones = [
    {
      id: "tw5-viii",
      year: "07/1998",
      title: "NGHỊ QUYẾT TW5 KHÓA VIII",
      subtitle: "Văn bản gốc nền tảng",
      color: "from-red-500 to-rose-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-300",
      textColor: "text-red-900",
      items: [
        "Xây dựng và phát triển văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc.",
        "Văn hóa là NỀN TẢNG TINH THẦN của xã hội, vừa là MỤC TIÊU vừa là ĐỘNG LỰC.",
        "Thống nhất mà đa dạng trong cộng đồng các dân tộc Việt Nam.",
        "Văn hóa là một MẶT TRẬN. Sự nghiệp của toàn dân do Đảng lãnh đạo."
      ]
    },
    {
      id: "cuong-linh-2011",
      year: "2011",
      title: "CƯƠNG LĨNH NĂM 2011",
      subtitle: "Sức mạnh nội sinh phát triển",
      color: "from-amber-500 to-orange-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-300",
      textColor: "text-amber-900",
      items: [
        "Thấm nhuần tinh thần nhân văn, dân chủ, tiến bộ.",
        "Làm cho văn hóa gắn kết chặt chẽ và thấm sâu vào toàn bộ đời sống xã hội.",
        "Trở thành NỀN TẢNG TINH THẦN VỮNG CHẮC, SỨC MẠNH NỘI SINH quan trọng của phát triển.",
        "Tiếp thu tinh hoa văn hóa nhân loại & khẳng định các giá trị Chân - Thiện - Mỹ."
      ]
    }
  ];

  const activeObj = milestones.find((m) => m.id === activeMilestone);

  return (
    <div className="my-8 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-red-50/40 via-white to-amber-50/40 border border-stone-200/80 text-stone-800 shadow-xl shadow-stone-200/50 overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-stone-200 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 border border-red-200 text-red-800 text-xs font-bold uppercase tracking-widest mb-2 shadow-xs">
            <Landmark className="w-3.5 h-3.5" /> Văn Kiện Đảng
          </div>
          <h3 className="text-xl md:text-2xl font-black text-stone-900 tracking-tight">
            Quan Điểm Chỉ Đạo Về Xây Dựng & Phát Triển Văn Hóa
          </h3>
          <p className="text-stone-600 text-xs md:text-sm mt-1">
            "Văn hóa còn thì chế độ còn, văn hóa mất thì chế độ mất"
          </p>
        </div>
      </div>

      {/* Milestone Buttons */}
      <div className="flex gap-3 my-6 relative z-10">
        {milestones.map((m) => (
          <button
            key={m.id}
            onClick={() => setActiveMilestone(m.id)}
            className={`px-4 py-2.5 rounded-2xl border text-xs md:text-sm font-black transition-all cursor-pointer flex items-center gap-2 ${
              activeMilestone === m.id
                ? `bg-white ${m.borderColor} shadow-md ring-2 ring-red-400/20 scale-102 ${m.textColor}`
                : "bg-white/80 border-stone-200 text-stone-600 hover:bg-stone-50"
            }`}
          >
            <span className="px-2 py-0.5 rounded-full bg-stone-100 text-[10px] uppercase font-bold">
              {m.year}
            </span>
            {m.title}
          </button>
        ))}
      </div>

      {/* Active Milestone Card */}
      {activeObj && (
        <div className={`p-5 md:p-6 rounded-2xl bg-white border ${activeObj.borderColor} shadow-md relative z-10 animate-fadeIn mb-4`}>
          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase ${activeObj.bgColor} ${activeObj.textColor} border ${activeObj.borderColor} mb-2 inline-block`}>
            {activeObj.subtitle}
          </span>
          <h4 className={`text-base font-black ${activeObj.textColor} mb-3`}>
            {activeObj.title} ({activeObj.year})
          </h4>
          <ul className="space-y-2 text-xs md:text-sm text-stone-700 font-medium">
            {activeObj.items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Quote Banner */}
      <div className="p-4 rounded-2xl bg-white border border-red-200 shadow-sm relative z-10">
        <h5 className="font-bold text-red-900 text-xs mb-1 flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-amber-600" /> Trích dẫn kinh điển quán triệt:
        </h5>
        <p className="text-stone-800 text-xs md:text-sm italic font-serif">
          "Văn hóa còn thì chế độ còn, văn hóa mất thì chế độ mất" — Không gì đáng sợ bằng văn hóa lâm nguy.
        </p>
      </div>
    </div>
  );
}
