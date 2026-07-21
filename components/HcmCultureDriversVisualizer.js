"use client";
import React, { useState } from "react";
import { Shield, Sparkles, BookOpen, Heart, Scale, Globe, CheckCircle2 } from "lucide-react";

export default function HcmCultureDriversVisualizer() {
  const [activeDriver, setActiveDriver] = useState("chinh-tri");
  const [activeTab, setActiveTab] = useState("dong-luc");

  const drivers = [
    {
      id: "chinh-tri",
      title: "Văn Hóa Chính Trị",
      icon: Shield,
      tag: "Soi đường cho quốc dân đi",
      color: "from-red-500 to-rose-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-300",
      textColor: "text-red-800",
      desc: "Lãnh đạo quốc dân thực hiện độc lập, tự cường. Tư duy biện chứng, độc lập, tự chủ, sáng tạo của cán bộ, đảng viên là động lực lớn dẫn dắt tư tưởng và hành động cách mạng."
    },
    {
      id: "van-nghe",
      title: "Văn Hóa Văn Nghệ",
      icon: Sparkles,
      tag: "Nâng cao yêu nước & niềm tin",
      color: "from-amber-500 to-orange-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-300",
      textColor: "text-amber-800",
      desc: "Góp phần nâng cao lòng yêu nước, lý tưởng cách mạng, sự lạc quan, ý chí, quyết tâm và niềm tin vào thắng lợi cuối cùng của cách mạng."
    },
    {
      id: "giao-duc",
      title: "Văn Hóa Giáo Dục",
      icon: BookOpen,
      tag: "Sứ mệnh 'Trồng người'",
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-300",
      textColor: "text-blue-800",
      desc: "Diệt giặc dốt, xóa mù chữ, giúp con người hiểu biết quy luật phát triển xã hội. Đào tạo con người mới, cán bộ mới, nguồn nhân lực chất lượng cao cho cách mạng."
    },
    {
      id: "dao-duc",
      title: "Văn Hóa Đạo Đức",
      icon: Heart,
      tag: "Đạo đức là gốc người cách mạng",
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-300",
      textColor: "text-emerald-800",
      desc: "Nâng cao phẩm giá, phong cách lành mạnh, hướng con người tới các giá trị Chân - Thiện - Mỹ. Đạo đức là gốc của người cách mạng; văn hóa đạo đức là động lực lớn."
    },
    {
      id: "phap-luat",
      title: "Văn Hóa Pháp Luật",
      icon: Scale,
      tag: "Dân chủ - Kỷ cương - Pháp quyền",
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-300",
      textColor: "text-purple-800",
      desc: "Bảo đảm dân chủ, trật tự, kỷ cương, pháp quyền, giữ vững công bằng và kỷ luật trong đời sống xã hội."
    }
  ];

  const activeDriverObj = drivers.find((d) => d.id === activeDriver);

  return (
    <div className="my-8 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-amber-50/40 via-white to-red-50/40 border border-stone-200/80 text-stone-800 shadow-xl shadow-stone-200/50 overflow-hidden relative font-sans">
      {/* Soft Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-red-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-stone-200 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 border border-red-200 text-red-800 text-xs font-bold uppercase tracking-widest mb-2 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" /> Mô Phỏng Tương Tác
          </div>
          <h3 className="text-xl md:text-2xl font-black text-stone-900 tracking-tight">
            5 Phương Diện Động Lực Văn Hóa & 3 Trụ Cột Bền Vững
          </h3>
          <p className="text-stone-600 text-xs md:text-sm mt-1">
            "Văn hóa vừa là mục tiêu, vừa là động lực của sự nghiệp cách mạng"
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b border-stone-200 my-6 relative z-10 gap-2">
        <button
          onClick={() => setActiveTab("dong-luc")}
          className={`px-4 py-2.5 rounded-t-xl text-xs md:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === "dong-luc"
              ? "bg-red-600 text-white shadow-md"
              : "text-stone-600 hover:text-stone-900 bg-stone-100/70 hover:bg-stone-200/60"
          }`}
        >
          <Sparkles className="w-4 h-4" /> 1. 5 Phương Diện Động Lực Văn Hóa
        </button>

        <button
          onClick={() => setActiveTab("ben-vung")}
          className={`px-4 py-2.5 rounded-t-xl text-xs md:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === "ben-vung"
              ? "bg-emerald-600 text-white shadow-md"
              : "text-stone-600 hover:text-stone-900 bg-stone-100/70 hover:bg-stone-200/60"
          }`}
        >
          <Globe className="w-4 h-4" /> 2. 3 Trụ Cột Phát Triển Bền Vững
        </button>
      </div>

      {/* Tab 1: 5 Động lực */}
      {activeTab === "dong-luc" && (
        <div className="space-y-6 relative z-10 animate-fadeIn">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-3">
            {drivers.map((d) => {
              const Icon = d.icon;
              const isSelected = activeDriver === d.id;
              return (
                <button
                  key={d.id}
                  onClick={() => setActiveDriver(d.id)}
                  className={`p-3 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center group ${
                    isSelected
                      ? `bg-white ${d.borderColor} shadow-md ring-2 ring-red-400/20 scale-102`
                      : "bg-white/80 border-stone-200 hover:border-stone-300 text-stone-700 hover:bg-stone-50 shadow-xs"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${d.color} flex items-center justify-center text-white mb-2 shadow-xs group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-xs font-bold ${d.textColor} line-clamp-1`}>
                    {d.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Driver Detail Card */}
          {activeDriverObj && (
            <div className={`p-5 md:p-6 rounded-2xl bg-white border ${activeDriverObj.borderColor} shadow-md relative z-10 animate-fadeIn`}>
              <div className="flex items-center gap-2 mb-2">
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${activeDriverObj.bgColor} ${activeDriverObj.textColor} border ${activeDriverObj.borderColor}`}>
                  {activeDriverObj.tag}
                </span>
              </div>
              <h4 className={`text-lg font-black ${activeDriverObj.textColor} mb-2`}>
                {activeDriverObj.title}
              </h4>
              <p className="text-stone-700 text-xs md:text-sm leading-relaxed font-medium">
                {activeDriverObj.desc}
              </p>
            </div>
          )}
        </div>
      )}

      {/* Tab 2: 3 Trụ cột Bền vững */}
      {activeTab === "ben-vung" && (
        <div className="space-y-6 relative z-10 animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-amber-200 shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-sm mb-3">
                1
              </div>
              <h5 className="font-extrabold text-stone-900 text-sm md:text-base mb-1">
                Phát Triển Kinh Tế
              </h5>
              <p className="text-stone-600 text-xs leading-relaxed">
                Tạo nguồn lực vật chất, bảo đảm ai cũng có cơm ăn, áo mặc, được chăm sóc đời sống.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-red-200 shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-red-100 text-red-800 flex items-center justify-center font-bold text-sm mb-3">
                2
              </div>
              <h5 className="font-extrabold text-stone-900 text-sm md:text-base mb-1">
                Phát Triển Xã Hội
              </h5>
              <p className="text-stone-600 text-xs leading-relaxed">
                Bảo đảm dân chủ, công bằng xã hội, ai cũng được học hành, phát triển toàn diện.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-emerald-200 shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm mb-3">
                3
              </div>
              <h5 className="font-extrabold text-stone-900 text-sm md:text-base mb-1">
                Bảo Vệ Môi Trường
              </h5>
              <p className="text-stone-600 text-xs leading-relaxed">
                Giữ gìn không gian sinh thái sống lành mạnh, hài hòa giữa con người và tự nhiên.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-50 via-white to-emerald-50 border border-amber-200 shadow-xs">
            <h5 className="font-extrabold text-amber-900 text-xs md:text-sm mb-1 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Liên hệ Chương trình Nghị sự XXI (9/2002):
            </h5>
            <p className="text-stone-700 text-xs leading-relaxed">
              181 nguyên thủ quốc gia thông qua 8 mục tiêu toàn cầu: Xóa nghèo cùng cực; phổ cập giáo dục tiểu học; bình đẳng nam nữ; giảm tỷ vong trẻ em; tăng cường sức khỏe bà mẹ; phòng chống HIV/AIDS, sốt rét; bền vững môi trường; đối tác toàn cầu.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
