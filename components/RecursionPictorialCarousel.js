"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Sparkles, Image as ImageIcon, Info, Layers } from "lucide-react";

export default function RecursionPictorialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: "sierpinski",
      title: "1. Tam giác Sierpinski (Sierpinski Triangle)",
      category: "Hình học Fractal Đệ quy",
      desc: "Từ một tam giác đều lớn, lặp lại vô tận việc nối trung điểm 3 cạnh để khoét đi tam giác ngược ở giữa. Mỗi tam giác con sinh ra lại là một bản sao thu nhỏ chính xác của tam giác ban đầu.",
      badge: "Hình học tự đồng dạng (Self-Similarity)",
      renderVisual: () => (
        <div className="w-full h-56 md:h-64 flex items-center justify-center bg-violet-50/90 border border-violet-200/90 rounded-2xl p-4 relative overflow-hidden shadow-inner">
          <svg viewBox="0 0 200 173" className="w-48 h-48 drop-shadow-sm">
            {/* Base Triangle */}
            <polygon points="100,0 0,173 200,173" fill="#6366f1" opacity="0.95" />
            {/* Level 1 Inverted Hole */}
            <polygon points="100,173 50,86.6 150,86.6" fill="#f8fafc" />
            {/* Level 2 Inverted Holes */}
            <polygon points="50,86.6 25,129.9 75,129.9" fill="#f8fafc" />
            <polygon points="150,86.6 125,129.9 175,129.9" fill="#f8fafc" />
            <polygon points="100,0 75,43.3 125,43.3" fill="#f8fafc" />
            {/* Level 3 Inverted Holes */}
            <polygon points="25,129.9 12.5,151.5 37.5,151.5" fill="#f8fafc" />
            <polygon points="75,129.9 62.5,151.5 87.5,151.5" fill="#f8fafc" />
            <polygon points="125,129.9 112.5,151.5 137.5,151.5" fill="#f8fafc" />
            <polygon points="175,129.9 162.5,151.5 187.5,151.5" fill="#f8fafc" />
          </svg>
          <div className="absolute bottom-2 right-3 text-[11px] font-mono font-bold text-violet-800 bg-white/95 px-2.5 py-1 rounded-lg border border-violet-200 shadow-xs">
            Cấp độ phân rã 3
          </div>
        </div>
      ),
    },
    {
      id: "tree",
      title: "2. Cây đệ quy (Recursive Tree)",
      category: "Cấu trúc Cây Fractal",
      desc: "Từ thân cây chính (kích thước L), đệ quy vẽ ra 2 nhánh con nghiêng góc với độ dài thu nhỏ (L * 0.75). Mỗi nhánh con tiếp tục đóng vai trò là một thân cây mới cho đến khi đạt độ dài tối thiểu.",
      badge: "Phân nhánh nhị phân (Branching)",
      renderVisual: () => (
        <div className="w-full h-56 md:h-64 flex items-center justify-center bg-emerald-50/90 border border-emerald-200/90 rounded-2xl p-4 relative overflow-hidden shadow-inner">
          <svg viewBox="0 0 200 160" className="w-52 h-48 drop-shadow-sm">
            {/* Trunk */}
            <line x1="100" y1="160" x2="100" y2="110" stroke="#059669" strokeWidth="6" strokeLinecap="round" />
            {/* Level 1 Branches */}
            <line x1="100" y1="110" x2="65" y2="75" stroke="#10b981" strokeWidth="4.5" strokeLinecap="round" />
            <line x1="100" y1="110" x2="135" y2="75" stroke="#10b981" strokeWidth="4.5" strokeLinecap="round" />
            {/* Level 2 Branches */}
            <line x1="65" y1="75" x2="40" y2="50" stroke="#059669" strokeWidth="3" strokeLinecap="round" />
            <line x1="65" y1="75" x2="75" y2="45" stroke="#059669" strokeWidth="3" strokeLinecap="round" />
            <line x1="135" y1="75" x2="125" y2="45" stroke="#059669" strokeWidth="3" strokeLinecap="round" />
            <line x1="135" y1="75" x2="160" y2="50" stroke="#059669" strokeWidth="3" strokeLinecap="round" />
            {/* Level 3 Tips */}
            <circle cx="40" cy="50" r="4.5" fill="#10b981" />
            <circle cx="75" cy="45" r="4.5" fill="#10b981" />
            <circle cx="125" cy="45" r="4.5" fill="#10b981" />
            <circle cx="160" cy="50" r="4.5" fill="#10b981" />
          </svg>
          <div className="absolute bottom-2 right-3 text-[11px] font-mono font-bold text-emerald-800 bg-white/95 px-2.5 py-1 rounded-lg border border-emerald-200 shadow-xs">
            L_con = L_mẹ * 0.75
          </div>
        </div>
      ),
    },
    {
      id: "droste",
      title: "3. Hiệu ứng Droste (Droste Effect)",
      category: "Nghệ thuật Trực quan Đệ quy",
      desc: "Một bức tranh chứa một người phụ nữ đang cầm khay có chính bức tranh đó, bên trong bức tranh nhỏ lại có người phụ nữ cầm bức tranh nhỏ hơn, tiếp tục đệ quy vô tận trong không gian.",
      badge: "Ảnh trong ảnh (Picture-in-picture)",
      renderVisual: () => (
        <div className="w-full h-56 md:h-64 flex items-center justify-center bg-amber-50/90 border border-amber-200/90 rounded-2xl p-4 relative overflow-hidden shadow-inner">
          <div className="w-44 h-44 bg-amber-200/90 border-3 border-amber-500 rounded-2xl p-3 flex items-center justify-center shadow-md relative">
            <span className="absolute top-1.5 left-2.5 text-[10px] font-mono font-bold text-amber-900 uppercase">Khung 1</span>
            <div className="w-28 h-28 bg-amber-300 border-2.5 border-amber-600 rounded-xl p-2 flex items-center justify-center shadow-sm relative">
              <span className="absolute top-1 left-2 text-[9px] font-mono font-bold text-amber-950">Khung 2</span>
              <div className="w-16 h-16 bg-amber-400 border-2 border-amber-700 rounded-lg p-1 flex items-center justify-center shadow-xs relative">
                <span className="text-[9px] font-mono text-amber-950 font-black">Droste ∞</span>
              </div>
            </div>
          </div>
          <div className="absolute bottom-2 right-3 text-[11px] font-mono font-bold text-amber-800 bg-white/95 px-2.5 py-1 rounded-lg border border-amber-200 shadow-xs">
            Recursive Frame Loop
          </div>
        </div>
      ),
    },
    {
      id: "garfield",
      title: "4. Mèo Garfield mơ về chính mình (Garfield Dreaming)",
      category: "Văn hóa Đại chúng & Hài hước",
      desc: "Chú mèo Garfield ngủ và mơ thấy mình đang ngủ, trong giấc mơ lại thấy mình mơ tiếp... Mỗi tầng giấc mơ là một Stack Frame mới xếp chồng lên tầng trước đó.",
      badge: "Call Stack lồng nhau (Inception)",
      renderVisual: () => (
        <div className="w-full h-56 md:h-64 flex items-center justify-center bg-sky-50/90 border border-sky-200/90 rounded-2xl p-4 relative overflow-hidden shadow-inner">
          <div className="relative flex flex-col items-center gap-2">
            <div className="flex items-center gap-2 bg-white border border-sky-300 px-4 py-2 rounded-xl text-sky-900 font-bold text-xs shadow-sm">
              🐱 Garfield (Thức) 
            </div>
            <div className="text-sky-600 font-mono font-bold text-xs">▼ Mơ thấy giấc mơ 1</div>
            <div className="flex items-center gap-2 bg-sky-100 border border-sky-300 px-3 py-1.5 rounded-lg text-sky-900 font-bold text-[11px] shadow-xs">
              💭 Giấc mơ 1: Garfield ngủ
            </div>
            <div className="text-sky-600 font-mono font-bold text-[10px]">▼ Mơ tiếp giấc mơ 2</div>
            <div className="flex items-center gap-2 bg-sky-200 border border-sky-400 px-2.5 py-1 rounded text-sky-950 font-bold text-[10px] shadow-xs">
              💤 Giấc mơ 2 (Đệ quy tầng 3)
            </div>
          </div>
          <div className="absolute bottom-2 right-3 text-[11px] font-mono font-bold text-sky-800 bg-white/95 px-2.5 py-1 rounded-lg border border-sky-200 shadow-xs">
            Dream within a dream...
          </div>
        </div>
      ),
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const current = slides[currentIndex];

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl p-5 md:p-7 shadow-sm my-6 font-sans">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-5">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-violet-100 text-violet-700 flex items-center justify-center font-bold">
            <ImageIcon className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base md:text-lg font-bold text-slate-900 flex items-center gap-2">
              Bộ sưu tập Ví dụ Minh họa Trực quan (Pictorial Examples)
              <span className="text-xs font-mono font-normal px-2.5 py-0.5 bg-violet-50 text-violet-700 rounded-full border border-violet-200">
                Slide {currentIndex + 1} / {slides.length}
              </span>
            </h3>
            <p className="text-xs text-slate-500">
              Các hình tượng kinh điển minh họa khái niệm tự lặp lại thu nhỏ (Self-Similar)
            </p>
          </div>
        </div>

        {/* Carousel Navigation Buttons */}
        <div className="flex items-center gap-2 self-end sm:self-auto">
          <button
            onClick={handlePrev}
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
            aria-label="Slide trước"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-xl bg-violet-600 hover:bg-violet-700 text-white transition-colors shadow-xs cursor-pointer"
            aria-label="Slide sau"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Slide Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-6">{current.renderVisual()}</div>

        <div className="md:col-span-6 flex flex-col justify-between h-full space-y-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-violet-600 bg-violet-50 px-2.5 py-1 rounded-md border border-violet-200">
                {current.category}
              </span>
            </div>
            <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-2">
              {current.title}
            </h4>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
              {current.desc}
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 flex items-start gap-2.5">
            <Info className="w-4 h-4 text-violet-600 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-700">
              <strong className="font-semibold text-slate-900">Bản chất đệ quy: </strong>
              {current.badge} — Quy tắc sinh ra hình mẫu không đổi, chỉ có quy mô (scale/size) là biến thiên nhỏ dần.
            </div>
          </div>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex items-center justify-center gap-2 mt-6 pt-4 border-t border-slate-100">
        {slides.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              idx === currentIndex
                ? "w-8 bg-violet-600"
                : "w-2.5 bg-slate-200 hover:bg-slate-300"
            }`}
            aria-label={`Đi tới slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
