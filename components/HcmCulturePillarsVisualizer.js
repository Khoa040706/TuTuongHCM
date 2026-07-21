"use client";
import React, { useState } from "react";
import { Shield, Coins, BookOpen, Users, ArrowRightLeft, Sparkles, CheckCircle2 } from "lucide-react";

export default function HcmCulturePillarsVisualizer() {
  const [activePillar, setActivePillar] = useState("chinh-tri");
  const [selectedRelation, setSelectedRelation] = useState(null);

  const pillars = [
    {
      id: "chinh-tri",
      name: "Chính Trị",
      icon: Shield,
      color: "from-red-600 to-rose-700",
      borderColor: "border-red-500",
      bgColor: "bg-red-50",
      textColor: "text-red-700",
      quote: "Sự giải phóng chính trị để mở đường cho văn hóa phát triển.",
      detail: "Trước hết phải làm cách mạng giải phóng dân tộc, đánh đuổi ách nô lệ, thiết lập nhà nước của dân, do dân, vì dân. Đồng thời văn hóa phải nằm trong chính trị và phục vụ nhiệm vụ chính trị."
    },
    {
      id: "kinh-te",
      name: "Kinh Tế",
      icon: Coins,
      color: "from-amber-500 to-amber-700",
      borderColor: "border-amber-500",
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
      quote: "Cơ sở hạ tầng của xã hội kiến thiết thế nào, văn hóa mới kiến thiết được và có điều kiện phát triển.",
      detail: "Kinh tế là nền tảng vật chất. Tuy nhiên, văn hóa không phụ thuộc thụ động mà có tính độc lập tương đối, có vai trò tác động tích cực trở lại phát triển kinh tế."
    },
    {
      id: "van-hoa",
      name: "Văn Hóa",
      icon: BookOpen,
      color: "from-emerald-500 to-teal-700",
      borderColor: "border-emerald-500",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-800",
      quote: "Văn hóa soi đường cho quốc dân đi.",
      detail: "Văn hóa thuộc kiến trúc thượng tầng, đời sống tinh thần. Bản thân văn hóa mang tính khai sáng, thúc đẩy chính trị, kinh tế, xã hội phát triển lành mạnh."
    },
    {
      id: "xa-hoi",
      name: "Xã Hội",
      icon: Users,
      color: "from-blue-500 to-indigo-700",
      borderColor: "border-blue-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-800",
      quote: "Xã hội thế nào văn hóa thế ấy.",
      detail: "Giải phóng chính trị đồng nghĩa giải phóng xã hội. Khi dân tộc thoát ách nô lệ thì văn hóa mới giải phóng khỏi xiềng xích và tự do cất cánh."
    }
  ];

  const relations = [
    {
      id: "vanhoa-chinhtri",
      title: "Văn hóa ⇄ Chính trị",
      summary: "Giải phóng chính trị mở đường cho văn hóa; văn hóa phục vụ chính trị.",
      desc: "Hồ Chí Minh khẳng định giải phóng chính trị là tiền đề giải phóng văn hóa. Mặt khác, văn hóa phải ở trong chính trị, phục vụ chính trị và các nhà chính trị phải có hàm lượng văn hóa."
    },
    {
      id: "vanhoa-kinhte",
      title: "Văn hóa ⇄ Kinh tế",
      summary: "Kinh tế là cơ sở hạ tầng; văn hóa tác động tích cực trở lại kinh tế.",
      desc: "Kinh tế kiến thiết đến đâu thì văn hóa có điều kiện phát triển đến đó. Nhưng văn hóa không đứng ngoài mà thẩm thấu vào kinh tế, thúc đẩy năng suất và sự phát triển bền vững."
    },
    {
      id: "vanhoa-xahoi",
      title: "Văn hóa ⇄ Xã hội",
      summary: "Xã hội thế nào văn hóa thế ấy; giải phóng xã hội giải phóng văn hóa.",
      desc: "Trong chế độ nô lệ đế quốc, văn nghệ cũng bị nô lệ. Khi giành lại chính quyền về tay nhân dân, xã hội được giải phóng thì văn hóa mới thực sự nở hoa."
    }
  ];

  const activePillarObj = pillars.find((p) => p.id === activePillar);

  return (
    <div className="my-8 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-amber-50/50 via-white to-red-50/30 border border-stone-200/80 text-stone-800 shadow-xl shadow-stone-200/50 overflow-hidden relative font-sans">
      {/* Dynamic Background Soft Accent */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-stone-200 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-widest mb-2 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" /> Mô Phỏng Tương Tác
          </div>
          <h3 className="text-xl md:text-2xl font-black text-stone-900 tracking-tight">
            Sơ Đồ 4 Trụ Cột Đời Sống & Vị Trí Của Văn Hóa
          </h3>
          <p className="text-stone-600 text-xs md:text-sm mt-1">
            Theo Hồ Chí Minh: Trong đời sống có 4 vấn đề quan trọng ngang nhau tác động qua lại lẫn nhau
          </p>
        </div>
      </div>

      {/* Grid of 4 Pillars */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 my-6 relative z-10">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          const isSelected = activePillar === pillar.id;
          return (
            <button
              key={pillar.id}
              onClick={() => {
                setActivePillar(pillar.id);
                setSelectedRelation(null);
              }}
              className={`relative flex flex-col items-center justify-center p-4 md:p-5 rounded-2xl border transition-all duration-300 cursor-pointer text-center group ${
                isSelected
                  ? `bg-white ${pillar.borderColor} shadow-md scale-105 ring-2 ring-red-400/20`
                  : "bg-white/80 border-stone-200 hover:border-stone-300 hover:bg-stone-50 shadow-xs"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 bg-gradient-to-br ${pillar.color} shadow-md group-hover:scale-110 transition-transform`}
              >
                <Icon className="w-6 h-6 text-white" />
              </div>
              <span className={`font-bold text-sm md:text-base ${pillar.textColor}`}>
                {pillar.name}
              </span>
              {isSelected && (
                <span className="mt-1 text-[10px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded-full bg-red-100 text-red-700">
                  Đang chọn
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Selected Pillar Detail Card */}
      {activePillarObj && !selectedRelation && (
        <div className="p-5 md:p-6 rounded-2xl bg-white border border-stone-200/90 shadow-md relative z-10 animate-fadeIn">
          <div className="flex items-center gap-3 mb-3">
            <span className={`w-3 h-3 rounded-full bg-gradient-to-r ${activePillarObj.color}`} />
            <h4 className={`text-base md:text-lg font-black ${activePillarObj.textColor}`}>
              Luận Điểm Về Lĩnh Vực {activePillarObj.name.toUpperCase()}
            </h4>
          </div>

          <div className="p-4 rounded-xl bg-amber-50/80 border-l-4 border-amber-500 italic text-amber-950 text-xs md:text-sm font-serif mb-3 shadow-xs">
            "{activePillarObj.quote}"
          </div>

          <p className="text-stone-700 text-xs md:text-sm leading-relaxed font-sans font-medium">
            {activePillarObj.detail}
          </p>
        </div>
      )}

      {/* Relations Explorer Section */}
      <div className="mt-8 pt-6 border-t border-stone-200 relative z-10">
        <h4 className="text-xs uppercase font-extrabold tracking-wider text-red-700 mb-4 flex items-center gap-2">
          <ArrowRightLeft className="w-4 h-4" /> Khám Phá Mối Quan Hệ Tương Hỗ Chi Tiết:
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {relations.map((rel) => {
            const isRelSelected = selectedRelation === rel.id;
            return (
              <button
                key={rel.id}
                onClick={() => setSelectedRelation(isRelSelected ? null : rel.id)}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                  isRelSelected
                    ? "bg-red-50 border-red-400 text-red-900 shadow-md ring-1 ring-red-400/30"
                    : "bg-white border-stone-200 hover:border-stone-300 text-stone-700 hover:bg-stone-50 shadow-xs"
                }`}
              >
                <div className="font-bold text-sm text-red-800 mb-1 flex items-center justify-between">
                  <span>{rel.title}</span>
                  {isRelSelected && <CheckCircle2 className="w-4 h-4 text-red-600" />}
                </div>
                <p className="text-stone-600 text-xs leading-snug line-clamp-2">
                  {rel.summary}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Relation Deep Dive */}
        {selectedRelation && (
          <div className="mt-4 p-5 rounded-2xl bg-white border border-red-200 shadow-md animate-fadeIn">
            <h5 className="text-sm font-bold text-red-800 mb-2 flex items-center gap-2">
              📌 Phân tích chiều sâu: {relations.find(r => r.id === selectedRelation)?.title}
            </h5>
            <p className="text-stone-700 text-xs md:text-sm leading-relaxed font-medium">
              {relations.find(r => r.id === selectedRelation)?.desc}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
