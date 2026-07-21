"use client";
import React, { useState } from "react";
import { ArrowRight, ShieldCheck, UserCheck, Sparkles } from "lucide-react";

export default function HcmTrungHieuShiftCard() {
  const [activeSide, setActiveSide] = useState("moi");

  return (
    <div className="my-8 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-red-50/40 via-white to-amber-50/40 border border-stone-200/80 text-stone-800 shadow-xl shadow-stone-200/50 overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-stone-200 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 border border-red-200 text-red-800 text-xs font-bold uppercase tracking-widest mb-2 shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5" /> Thẻ So Sánh Chuyển Đổi
          </div>
          <h3 className="text-xl md:text-2xl font-black text-stone-900 tracking-tight">
            Trung Với Nước, Hiếu Với Dân - Bước Ngoặt Đạo Đức Mới
          </h3>
          <p className="text-stone-600 text-xs md:text-sm mt-1">
            Kế thừa giá trị yêu nước truyền thống & Vượt qua hạn chế tư tưởng phong kiến
          </p>
        </div>
      </div>

      {/* Selector Switch */}
      <div className="flex justify-center gap-3 my-6 relative z-10">
        <button
          onClick={() => setActiveSide("cu")}
          className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-extrabold transition-all cursor-pointer ${
            activeSide === "cu"
              ? "bg-stone-800 text-white shadow-md"
              : "bg-white border border-stone-200 text-stone-600 hover:bg-stone-50"
          }`}
        >
          1. Đạo Đức Cũ (Phong Kiến)
        </button>

        <div className="flex items-center text-red-600">
          <ArrowRight className="w-5 h-5" />
        </div>

        <button
          onClick={() => setActiveSide("moi")}
          className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-extrabold transition-all cursor-pointer ${
            activeSide === "moi"
              ? "bg-red-600 text-white shadow-md"
              : "bg-white border border-stone-200 text-stone-600 hover:bg-stone-50"
          }`}
        >
          2. Đạo Đức Mới (Hồ Chí Minh)
        </button>
      </div>

      {/* Comparison Detail Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10 animate-fadeIn">
        {/* Đạo đức cũ */}
        <div className={`p-5 rounded-2xl border transition-all ${
          activeSide === "cu"
            ? "bg-stone-100 border-stone-400 shadow-md ring-2 ring-stone-400/20"
            : "bg-white border-stone-200 opacity-70"
        }`}>
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-stone-200 text-stone-700">
            Nội dung cũ
          </span>
          <h4 className="text-base font-black text-stone-900 mt-2 mb-2">
            "TRUNG VỚI VUA, HIẾU VỚI CHA MẸ"
          </h4>
          <ul className="space-y-1.5 text-xs text-stone-700 font-medium">
            <li>• Phạm vi hẹp: Trung thành tuyệt đối với cá nhân vua (bậc thiên tử).</li>
            <li>• Phục tùng vô điều kiện kể cả khi vua hư hỏng, bất minh.</li>
            <li>• Giới hạn lòng hiếu thảo chỉ trong phạm vi gia đình gia tộc.</li>
          </ul>
        </div>

        {/* Đạo đức mới */}
        <div className={`p-5 rounded-2xl border transition-all ${
          activeSide === "moi"
            ? "bg-red-50/90 border-red-400 shadow-md ring-2 ring-red-400/20"
            : "bg-white border-stone-200 opacity-70"
        }`}>
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-red-100 text-red-800 border border-red-200">
            Nội dung mới (Bác Hồ)
          </span>
          <h4 className="text-base font-black text-red-900 mt-2 mb-2">
            "TRUNG VỚI NƯỚC, HIẾU VỚI DÂN"
          </h4>
          <ul className="space-y-1.5 text-xs text-stone-800 font-medium">
            <li>• <strong>Trung với nước:</strong> Trung thành tuyệt đối với sự nghiệp dựng nước & giữ nước, làm cho "dân giàu, nước mạnh".</li>
            <li>• <strong>Hiếu với dân:</strong> Thương dân, học hỏi dân, kính trọng dân, lấy dân làm gốc; Đảng/Chính phủ là "đày tớ của nhân dân".</li>
            <li>• Phạm vi bao trùm toàn thể đồng bào, dân tộc Việt Nam.</li>
          </ul>
        </div>
      </div>

      {/* Quote Banner */}
      <div className="mt-6 p-4 rounded-2xl bg-white border border-amber-200 shadow-sm relative z-10">
        <h5 className="font-bold text-amber-900 text-xs mb-1 flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-amber-600" /> Luận điểm ví von đắt giá của Bác:
        </h5>
        <p className="text-stone-800 text-xs md:text-sm italic font-serif">
          "Đạo đức cũ như người đầu ngược xuống đất chân chỉng lên trời. Đạo đức mới như người hai chân đứng vững dưới đất, đầu ngẩng lên trời."
        </p>
      </div>
    </div>
  );
}
