"use client";
import React, { useState } from "react";
import { CheckCircle, Award, Sparkles, Flame, UserCheck } from "lucide-react";

export default function HcmNoiDiDoiVoiLamVisualizer() {
  const [activeTab, setActiveTab] = useState("noi-lam");

  return (
    <div className="my-8 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-amber-50/40 via-white to-red-50/40 border border-stone-200/80 text-stone-800 shadow-xl shadow-stone-200/50 overflow-hidden relative font-sans">
      {/* Soft Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-red-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-stone-200 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 border border-red-200 text-red-800 text-xs font-bold uppercase tracking-widest mb-2 shadow-xs">
            <CheckCircle className="w-3.5 h-3.5" /> Nguyên Tắc Hàng Đầu
          </div>
          <h3 className="text-xl md:text-2xl font-black text-stone-900 tracking-tight">
            Nói Đi Đôi Với Làm & Nêu Gương Về Đạo Đức
          </h3>
          <p className="text-stone-600 text-xs md:text-sm mt-1">
            "Một tấm gương sống còn có giá trị hơn một trăm bài diễn văn tuyên truyền"
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b border-stone-200 my-6 relative z-10 gap-2">
        <button
          onClick={() => setActiveTab("noi-lam")}
          className={`px-4 py-2.5 rounded-t-xl text-xs md:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === "noi-lam"
              ? "bg-red-600 text-white shadow-md"
              : "text-stone-600 hover:text-stone-900 bg-stone-100/70 hover:bg-stone-200/60"
          }`}
        >
          <CheckCircle className="w-4 h-4" /> 1. Nói Đi Đôi Với Làm
        </button>

        <button
          onClick={() => setActiveTab("neu-guong")}
          className={`px-4 py-2.5 rounded-t-xl text-xs md:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === "neu-guong"
              ? "bg-amber-600 text-white shadow-md"
              : "text-stone-600 hover:text-stone-900 bg-stone-100/70 hover:bg-stone-200/60"
          }`}
        >
          <UserCheck className="w-4 h-4" /> 2. 3 Mặt Nêu Gương & "Người Tốt Việc Tốt"
        </button>
      </div>

      {/* Tab 1: Nói đi đôi với làm */}
      {activeTab === "noi-lam" && (
        <div className="space-y-4 relative z-10 animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-red-200 shadow-md">
              <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase bg-red-100 text-red-800">
                Thực hành đạo đức
              </span>
              <h4 className="text-base font-black text-stone-900 mt-2 mb-2">
                SỰ THỐNG NHẤT GIỮA LÝ LUẬN & THỰC TIỄN
              </h4>
              <ul className="space-y-1.5 text-xs text-stone-700 font-medium">
                <li>• Nguyên tắc quan trọng bậc nhất trong xây dựng đạo đức mới.</li>
                <li>• <i>Đường cách mệnh:</i> "Nói thì phải làm."</li>
                <li>• <i>Nâng cao đạo đức cách mạng:</i> "Đảng viên đi trước, làng nước theo sau."</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-md">
              <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase bg-stone-200 text-stone-700">
                Chống đạo đức giả
              </span>
              <h4 className="text-base font-black text-stone-900 mt-2 mb-2">
                ĐỐI LẬP VỚI THÓI ĐẠO ĐỨC GIẢ
              </h4>
              <ul className="space-y-1.5 text-xs text-stone-700 font-medium">
                <li>• Phê phán thói nói một đằng làm một nẻo, nói nhiều làm ít.</li>
                <li>• Chống "vác mặt làm quan cách mạng", miệng nói dân chủ làm lối quan chủ.</li>
                <li>• Tránh làm tổn hại đến uy tín của Đảng và Chính phủ.</li>
              </ul>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-red-50/80 border border-red-200 shadow-xs">
            <h5 className="font-bold text-red-900 text-xs mb-1 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-600" /> Trích dẫn kinh điển:
            </h5>
            <p className="text-stone-800 text-xs md:text-sm italic font-serif">
              "Trước mặt quần chúng, không phải ta cứ viết lên trán chữ 'cộng sản' mà ta được họ yêu mến. Quần chúng chỉ quý mến những người có tư cách, đạo đức. Muốn hướng dẫn nhân dân, mình phải làm mực thước cho người ta bắt chước."
            </p>
          </div>
        </div>
      )}

      {/* Tab 2: Nêu gương & 3 mặt */}
      {activeTab === "neu-guong" && (
        <div className="space-y-4 relative z-10 animate-fadeIn">
          <div className="p-4 rounded-2xl bg-white border border-amber-200 shadow-md">
            <h4 className="font-extrabold text-stone-900 text-sm mb-3">
              CÁN BỘ ĐẢNG VIÊN PHẢI LÀM GƯƠNG TRÊN 3 MẶT:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
              <div className="p-3 rounded-xl bg-amber-50 border border-amber-200">
                <span className="font-black text-amber-900 text-xs block mb-1">1. TINH THẦN</span>
                <span className="text-stone-600 text-[11px]">Ý chí cách mạng kiên cường, tư tưởng trong sáng</span>
              </div>
              <div className="p-3 rounded-xl bg-red-50 border border-red-200">
                <span className="font-black text-red-900 text-xs block mb-1">2. VẬT CHẤT</span>
                <span className="text-stone-600 text-[11px]">Lối sống giản dị, cần kiệm, không tham nhũng</span>
              </div>
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
                <span className="font-black text-emerald-900 text-xs block mb-1">3. VĂN HÓA</span>
                <span className="text-stone-600 text-[11px]">Ứng xử văn minh, khiêm tốn, giàu lòng vị tha</span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-sm">
            <h5 className="font-extrabold text-stone-900 text-xs mb-1 flex items-center gap-1.5">
              <Flame className="w-4 h-4 text-orange-600" /> Phong trào "Người Tốt, Việc Tốt":
            </h5>
            <p className="text-stone-700 text-xs md:text-sm">
              <i>"Hàng ngày giọt nước nhỏ thấm vào lòng đất... hợp lại mới thành biển cả. Người tốt, việc tốt nhiều lên. Ở đâu cũng có. Ngành, giới nào, địa phương nào, lứa tuổi nào cũng có."</i>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
