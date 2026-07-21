"use client";
import React, { useState } from "react";
import { Compass, Sun, Droplets, Shield, HeartHandshake, Sparkles, Layers } from "lucide-react";

export default function HcmCanKiemLiemChinhVisualizer() {
  const [activeVirtue, setActiveVirtue] = useState("can");
  const [relationTab, setRelationTab] = useState("minh");

  const virtues = [
    {
      id: "can",
      name: "CẦN",
      subtitle: "Siêng Năng & Kế Hoạch",
      icon: Sun,
      color: "from-amber-500 to-orange-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-300",
      textColor: "text-amber-900",
      desc: "Siêng năng, chăm chỉ, cố gắng dẻo dai. Muốn Cần có kết quả phải có KẾ HOẠCH cho mọi công việc. Lao động là nguồn sống, nguồn hạnh phúc của chúng ta."
    },
    {
      id: "kiem",
      name: "KIỆM",
      subtitle: "Tiết Kiệm Không Bủn Xỉn",
      icon: Droplets,
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-300",
      textColor: "text-blue-900",
      desc: "Tiết kiệm sức lao động, thì giờ, tiền của nhân dân. Cần với Kiệm phải đi đôi với nhau như hai chân của con người. Tiết kiệm không phải là bủn xỉn; việc đáng tiêu vì Tổ quốc thì tốn bao nhiêu cũng vui lòng."
    },
    {
      id: "liem",
      name: "LIÊM",
      subtitle: "Trong Sạch Không Tham",
      icon: Shield,
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-300",
      textColor: "text-emerald-900",
      desc: "Trong sạch, không tham lam tiền tài, địa vị, sung sướng. Có Kiệm mới Liêm được. Quang minh chính đại, không bao giờ hủ hóa. Chỉ ham một thứ: 'Ham học, ham làm, ham tiến bộ'."
    },
    {
      id: "chinh",
      name: "CHÍNH",
      subtitle: "Thẳng Thắn Không Tà",
      icon: Compass,
      color: "from-red-500 to-rose-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-300",
      textColor: "text-red-900",
      desc: "Không tà, thẳng thắn, đứng đắn. Thể hiện trong 3 mối quan hệ: Đối với mình (không tự đại), Đối với người (khiêm tốn, bác ái), Đối với việc (để việc nước lên trước)."
    },
    {
      id: "chicong",
      name: "CHÍ CÔNG VÔ TƯ",
      subtitle: "Vì Lợi Ích Chung",
      icon: HeartHandshake,
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-300",
      textColor: "text-purple-900",
      desc: "Hoàn toàn vì lợi ích chung, không vì tư lợi; chống chủ nghĩa cá nhân. Đặt lợi ích của Đảng, nhân dân lên trên hết. 'Lo trước thiên hạ, vui sau thiên hạ'."
    }
  ];

  const activeVirtueObj = virtues.find((v) => v.id === activeVirtue);

  return (
    <div className="my-8 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-amber-50/40 via-white to-red-50/40 border border-stone-200/80 text-stone-800 shadow-xl shadow-stone-200/50 overflow-hidden relative font-sans">
      {/* Soft Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-stone-200 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-widest mb-2 shadow-xs">
            <Compass className="w-3.5 h-3.5" /> Chuẩn Mực Cốt Lõi
          </div>
          <h3 className="text-xl md:text-2xl font-black text-stone-900 tracking-tight">
            Cần - Kiệm - Liêm - Chính - Chí Công Vô Tư
          </h3>
          <p className="text-stone-600 text-xs md:text-sm mt-1">
            "Như bốn mùa của trời, bốn phương của đất - Thiếu một đức thì không thành người"
          </p>
        </div>
      </div>

      {/* 5 Virtues Interactive Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 md:gap-3 my-6 relative z-10">
        {virtues.map((v) => {
          const Icon = v.icon;
          const isSelected = activeVirtue === v.id;
          return (
            <button
              key={v.id}
              onClick={() => setActiveVirtue(v.id)}
              className={`p-3 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center group ${
                isSelected
                  ? `bg-white ${v.borderColor} shadow-md ring-2 ring-amber-400/20 scale-102`
                  : "bg-white/80 border-stone-200 hover:border-stone-300 text-stone-700 hover:bg-stone-50 shadow-xs"
              }`}
            >
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${v.color} flex items-center justify-center text-white mb-2 shadow-xs group-hover:scale-110 transition-transform`}>
                <Icon className="w-5 h-5" />
              </div>
              <span className={`text-xs font-black ${v.textColor}`}>
                {v.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Virtue Detail Box */}
      {activeVirtueObj && (
        <div className={`p-5 md:p-6 rounded-2xl bg-white border ${activeVirtueObj.borderColor} shadow-md relative z-10 animate-fadeIn mb-6`}>
          <div className="flex items-center gap-2 mb-2">
            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${activeVirtueObj.bgColor} ${activeVirtueObj.textColor} border ${activeVirtueObj.borderColor}`}>
              {activeVirtueObj.subtitle}
            </span>
          </div>
          <h4 className={`text-lg font-black ${activeVirtueObj.textColor} mb-2`}>
            Ý Nghĩa Của Đức Tính "{activeVirtueObj.name}"
          </h4>
          <p className="text-stone-700 text-xs md:text-sm leading-relaxed font-medium">
            {activeVirtueObj.desc}
          </p>
        </div>
      )}

      {/* 3 Relations of "CHÍNH" Special Feature */}
      <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-md relative z-10">
        <h5 className="text-xs uppercase font-extrabold tracking-wider text-red-800 mb-3 flex items-center gap-2">
          <Layers className="w-4 h-4" /> 3 Mối Quan Hệ Của Đức Tính "CHÍNH":
        </h5>

        <div className="flex gap-2 border-b border-stone-200 pb-3 mb-3">
          <button
            onClick={() => setRelationTab("minh")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              relationTab === "minh"
                ? "bg-red-600 text-white shadow-xs"
                : "bg-stone-100 text-stone-600 hover:bg-stone-200"
            }`}
          >
            1. Đối Với Mình
          </button>
          <button
            onClick={() => setRelationTab("nguoi")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              relationTab === "nguoi"
                ? "bg-red-600 text-white shadow-xs"
                : "bg-stone-100 text-stone-600 hover:bg-stone-200"
            }`}
          >
            2. Đối Với Người
          </button>
          <button
            onClick={() => setRelationTab("viec")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              relationTab === "viec"
                ? "bg-red-600 text-white shadow-xs"
                : "bg-stone-100 text-stone-600 hover:bg-stone-200"
            }`}
          >
            3. Đối Với Việc
          </button>
        </div>

        <div className="text-xs md:text-sm text-stone-700 font-medium">
          {relationTab === "minh" && (
            <p><strong>Đối với mình:</strong> Chớ tự kiêu, tự đại. Phải luôn khiêm tốn, nghiêm khắc tự kiểm điểm mình.</p>
          )}
          {relationTab === "nguoi" && (
            <p><strong>Đối với người:</strong> Chớ nịnh hót người trên, chớ xem khinh người dưới; chân thành, khiêm tốn, thực hành BÁC ÁI.</p>
          )}
          {relationTab === "viec" && (
            <p><strong>Đối với việc:</strong> Để việc nước lên trên việc tư, việc nhà; việc thiện dù nhỏ mấy cũng làm, việc ác dù nhỏ mấy cũng tránh.</p>
          )}
        </div>
      </div>
    </div>
  );
}
