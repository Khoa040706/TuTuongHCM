"use client";
import React, { useState } from "react";
import { Sliders, CheckCircle, XCircle, Info, Landmark } from "lucide-react";

export default function AbstractSpectrumVisualizer() {
  const [level, setLevel] = useState(1); // 0: Normal Class, 1: Abstract Class, 2: Interface

  const spectrumData = [
    {
      title: "Class thông thường (Normal Class)",
      rate: "0% Abstraction",
      color: "bg-emerald-500",
      textColor: "text-emerald-600",
      bgClass: "bg-emerald-50/50 border-emerald-200",
      desc: "Lớp cụ thể (Concrete Class) dùng để định nghĩa các đối tượng thực tế. Mọi phương thức bên trong bắt buộc phải có thân code hoàn chỉnh.",
      features: {
        new: { ok: true, text: "Cho phép khởi tạo trực tiếp qua 'new'" },
        abstract: { ok: false, text: "Không được phép chứa abstract method" },
        concrete: { ok: true, text: "Mọi method bắt buộc phải có phần thân {}" },
        constructor: { ok: true, text: "Có đầy đủ constructor (mặc định/tham số)" },
        inheritance: { ok: false, text: "Chỉ đơn kế thừa lớp khác (extends)" }
      }
    },
    {
      title: "Lớp trừu tượng (Abstract Class)",
      rate: "0% ➔ 100% Abstraction",
      color: "bg-orange-500",
      textColor: "text-orange-600",
      bgClass: "bg-orange-50/50 border-orange-200",
      desc: "Lớp trung gian đóng vai trò làm bộ khung. Nó cho phép trộn lẫn cả phương thức trừu tượng chưa cài đặt lẫn phương thức thông thường.",
      features: {
        new: { ok: false, text: "Không cho phép dùng 'new' khởi tạo" },
        abstract: { ok: true, text: "Được phép khai báo abstract method" },
        concrete: { ok: true, text: "Được phép chứa cả method có thân {}" },
        constructor: { ok: true, text: "Có constructor (lớp con gọi super())" },
        inheritance: { ok: false, text: "Chỉ đơn kế thừa một lớp cha (extends)" }
      }
    },
    {
      title: "Giao diện (Interface)",
      rate: "100% Abstraction",
      color: "bg-blue-500",
      textColor: "text-blue-600",
      bgClass: "bg-blue-50/50 border-blue-200",
      desc: "Giao ước lập trình thuần túy. Trước Java 8, toàn bộ phương thức khai báo trong interface đều là trừu tượng và không có phần thân code.",
      features: {
        new: { ok: false, text: "Không cho phép dùng 'new' khởi tạo" },
        abstract: { ok: true, text: "Toàn bộ phương thức đều là trừu tượng" },
        concrete: { ok: false, text: "Không chứa method thường (trừ default/static từ Java 8)" },
        constructor: { ok: false, text: "Hoàn toàn không có constructor" },
        inheritance: { ok: true, text: "Cho phép đa kế thừa nhiều Interface" }
      }
    }
  ];

  const activeData = spectrumData[level];

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-3xl p-4 md:p-6 my-6 shadow-sm font-sans text-stone-850">
      
      {/* Header */}
      <div className="border-b border-stone-200 pb-3 mb-5">
        <span className="bg-orange-100 text-orange-800 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md">
          Đặc tính thiết kế
        </span>
        <h4 className="text-base font-extrabold text-stone-900 mt-1.5 flex items-center gap-2">
          🌈 Trục Phổ Quang Trừu Tượng Hóa (Abstraction Spectrum)
        </h4>
        <p className="text-xs text-stone-500 mt-1 leading-relaxed">
          Kéo thanh trượt để so sánh sự thay đổi về khả năng khai báo cú pháp và giới hạn thiết kế giữa 3 cấp độ cấu trúc lớp trong Java.
        </p>
      </div>

      {/* Slider Control Panel */}
      <div className="bg-white border border-stone-250 rounded-2xl p-5 mb-5 shadow-sm space-y-4">
        <div className="flex justify-between items-center text-xs font-bold text-stone-500">
          <span className="flex items-center gap-1"><Sliders className="w-4 h-4" /> Kéo thanh trượt để chuyển đổi:</span>
          <span className={`text-[10px] uppercase font-black px-2 py-0.5 rounded text-white ${activeData.color}`}>
            {activeData.rate}
          </span>
        </div>

        {/* 3-Step Slider */}
        <div className="relative pt-2 pb-6">
          <input
            type="range"
            min="0"
            max="2"
            step="1"
            value={level}
            onChange={(e) => setLevel(parseInt(e.target.value))}
            className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
          />
          <div className="flex justify-between text-[10px] font-bold text-stone-500 mt-2 font-mono px-1">
            <span onClick={() => setLevel(0)} className={`cursor-pointer ${level === 0 ? "text-emerald-600 font-black scale-105" : ""}`}>0% (Normal Class)</span>
            <span onClick={() => setLevel(1)} className={`cursor-pointer ${level === 1 ? "text-orange-600 font-black scale-105" : ""}`}>0-100% (Abstract Class)</span>
            <span onClick={() => setLevel(2)} className={`cursor-pointer ${level === 2 ? "text-blue-600 font-black scale-105" : ""}`}>100% (Interface)</span>
          </div>
        </div>
      </div>

      {/* Active Level Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* Info panel */}
        <div className={`lg:col-span-5 border rounded-2xl p-4 flex flex-col justify-between transition-all duration-500 ${activeData.bgClass}`}>
          <div className="space-y-2">
            <span className={`text-[10px] font-black uppercase tracking-wider ${activeData.textColor}`}>
              Thông tin cấu trúc
            </span>
            <h5 className="text-sm font-extrabold text-stone-900 leading-snug">{activeData.title}</h5>
            <p className="text-xs text-stone-700 leading-relaxed font-semibold">
              {activeData.desc}
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-stone-200/60 text-[10px] text-stone-400 font-mono">
            Mức trừu tượng: {activeData.rate}
          </div>
        </div>

        {/* Feature Comparison Matrix */}
        <div className="lg:col-span-7 bg-white border border-stone-200 rounded-2xl p-4 shadow-inner space-y-3">
          <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block border-b border-stone-150 pb-2">
            Quyền hạn cú pháp (Feature Matrix)
          </span>

          <div className="space-y-2 text-xs">
            
            {/* feature 1: new */}
            <div className="flex items-center justify-between p-2 rounded-xl bg-stone-50 border border-stone-150/60">
              <span className="font-semibold text-stone-700">Khởi tạo trực tiếp (new)</span>
              <div className="flex items-center gap-1.5 font-bold font-mono">
                {activeData.features.new.ok ? (
                  <span className="text-emerald-600 flex items-center gap-1"><CheckCircle className="w-4 h-4" /> CÓ</span>
                ) : (
                  <span className="text-rose-500 flex items-center gap-1"><XCircle className="w-4 h-4" /> CẤM</span>
                )}
              </div>
            </div>

            {/* feature 2: abstract method */}
            <div className="flex items-center justify-between p-2 rounded-xl bg-stone-50 border border-stone-150/60">
              <span className="font-semibold text-stone-700">Phương thức trừu tượng</span>
              <div className="flex items-center gap-1.5 font-bold font-mono">
                {activeData.features.abstract.ok ? (
                  <span className="text-emerald-600 flex items-center gap-1"><CheckCircle className="w-4 h-4" /> ĐƯỢC PHÉP</span>
                ) : (
                  <span className="text-rose-500 flex items-center gap-1"><XCircle className="w-4 h-4" /> KHÔNG</span>
                )}
              </div>
            </div>

            {/* feature 3: concrete method */}
            <div className="flex items-center justify-between p-2 rounded-xl bg-stone-50 border border-stone-150/60">
              <span className="font-semibold text-stone-700">Phương thức có phần thân</span>
              <div className="flex items-center gap-1.5 font-bold font-mono">
                {activeData.features.concrete.ok ? (
                  <span className="text-emerald-600 flex items-center gap-1"><CheckCircle className="w-4 h-4" /> ĐƯỢC PHÉP</span>
                ) : (
                  <span className="text-rose-500 flex items-center gap-1"><XCircle className="w-4 h-4" /> CẤM</span>
                )}
              </div>
            </div>

            {/* feature 4: constructor */}
            <div className="flex items-center justify-between p-2 rounded-xl bg-stone-50 border border-stone-150/60">
              <span className="font-semibold text-stone-700">Phương thức khởi dựng (Constructor)</span>
              <div className="flex items-center gap-1.5 font-bold font-mono">
                {activeData.features.constructor.ok ? (
                  <span className="text-emerald-600 flex items-center gap-1"><CheckCircle className="w-4 h-4" /> CÓ</span>
                ) : (
                  <span className="text-rose-500 flex items-center gap-1"><XCircle className="w-4 h-4" /> KHÔNG</span>
                )}
              </div>
            </div>

            {/* feature 5: inheritance */}
            <div className="flex items-center justify-between p-2 rounded-xl bg-stone-50 border border-stone-150/60">
              <span className="font-semibold text-stone-700">Đa kế thừa nhiều cha</span>
              <div className="flex items-center gap-1.5 font-bold font-mono">
                {activeData.features.inheritance.ok ? (
                  <span className="text-emerald-600 flex items-center gap-1"><CheckCircle className="w-4 h-4" /> CÓ THỂ</span>
                ) : (
                  <span className="text-rose-500 flex items-center gap-1"><XCircle className="w-4 h-4" /> CHỈ ĐƠN</span>
                )}
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
