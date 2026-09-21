"use client";
import React, { useState } from "react";
import {
  ThermometerSnowflake,
  Flame,
  Wind,
  Layers,
  Lightbulb,
  LightbulbOff,
  Zap,
  Sliders,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowUp,
  ArrowDown,
  Activity,
  Terminal
} from "lucide-react";

export default function ThermalContainmentSimulator() {
  const [activeTab, setActiveTab] = useState("containment"); // 'containment' | 'lightsOut'
  const [floorHeight, setFloorHeight] = useState(2.5); // 1 to 4 feet
  const [isFanActive, setIsFanActive] = useState(true);
  const [isLightsOff, setIsLightsOff] = useState(false); // Lights-Out DC

  return (
    <div className="my-8 rounded-3xl border border-stone-200 bg-linear-to-b from-stone-50/70 via-white to-stone-50/50 p-5 sm:p-7 shadow-xl font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-stone-200">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-rose-500 text-white mb-2 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            Mô Phỏng Nhiệt Động Học (Thermal & Power)
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
            Mục II: Điện Năng, Sàn Nâng & Lối Đi Nóng/Lạnh
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-2xl">
            Trực quan hóa nguyên lý sàn nâng (1–4 feet), cơ chế cô lập lối đi lạnh (Cold Aisle) vs lối đi nóng (Hot Aisle), ống thoát Chimney và mô hình Trung tâm dữ liệu không đèn (Lights-Out DC).
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-stone-100 border border-stone-200 self-start sm:self-auto">
          <button
            onClick={() => setActiveTab("containment")}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-extrabold transition-all ${
              activeTab === "containment"
                ? "bg-stone-900 text-amber-400 shadow-sm"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            <Wind className="w-3.5 h-3.5" />
            1. Sàn Nâng & Ngăn Nhiệt
          </button>
          <button
            onClick={() => setActiveTab("lightsOut")}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-extrabold transition-all ${
              activeTab === "lightsOut"
                ? "bg-stone-900 text-amber-400 shadow-sm"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            <LightbulbOff className="w-3.5 h-3.5" />
            2. Lights-Out DC (Không Đèn)
          </button>
        </div>
      </div>

      {/* ============================================================
          TAB 1: THERMAL / AISLE CONTAINMENT & RAISED FLOOR
          ============================================================ */}
      {activeTab === "containment" && (
        <div className="mt-6 space-y-6 animate-in fade-in duration-300">
          {/* Controls Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-stone-200 shadow-xs">
            <div className="flex items-center gap-3">
              <span className="text-xs font-extrabold text-stone-900">
                Chiều cao Sàn nâng (Raised Floor):
              </span>
              <input
                type="range"
                min="1"
                max="4"
                step="0.5"
                value={floorHeight}
                onChange={(e) => setFloorHeight(parseFloat(e.target.value))}
                className="w-32 accent-amber-500 cursor-pointer"
              />
              <span className="text-xs font-black font-mono px-2 py-0.5 rounded-md bg-amber-100 text-amber-900">
                {floorHeight} feet ({Math.round(floorHeight * 30.48)} cm)
              </span>
            </div>

            <button
              onClick={() => setIsFanActive(!isFanActive)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all ${
                isFanActive
                  ? "bg-sky-500 text-white shadow-xs"
                  : "bg-stone-200 text-stone-600"
              }`}
            >
              <Wind className={`w-3.5 h-3.5 ${isFanActive ? "animate-spin" : ""}`} />
              Quạt Điều Hòa & Hút Khí: {isFanActive ? "Đang Chạy" : "Đã Tắt"}
            </button>
          </div>

          {/* 2D Cutaway Cross-Section Stage */}
          <div className="relative rounded-3xl bg-stone-950 p-6 text-white border-2 border-stone-800 overflow-hidden shadow-2xl">
            {/* Top Ceiling & Chimneys */}
            <div className="flex justify-between items-end border-b-2 border-stone-800 pb-3 mb-6">
              <div className="text-[10px] font-mono text-stone-400">Trần Kỹ Thuật (Ceiling Plenum)</div>
              {/* Chimney Duct */}
              <div className="flex items-center gap-2 bg-stone-900 px-3 py-1 rounded-xl border border-rose-500/50">
                <Flame className="w-4 h-4 text-rose-400" />
                <span className="text-xs font-bold text-rose-300">
                  Ống Chimney (Hút Khí Nóng Thoát Lên Trên)
                </span>
                {isFanActive && <ArrowUp className="w-3.5 h-3.5 text-rose-400 animate-bounce" />}
              </div>
            </div>

            {/* Middle: The Aisle Architecture */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center my-6">
              {/* Rack Row A */}
              <div className="p-4 rounded-2xl bg-stone-900 border border-stone-700 text-center relative">
                <div className="text-[10px] font-bold text-amber-400 uppercase">Hàng Rack 1 (Row A)</div>
                <div className="mt-2 space-y-1">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="p-1.5 rounded-md bg-stone-800 text-[10px] font-mono text-stone-300 flex justify-between items-center">
                      <span>Server #{i + 1}</span>
                      <span className="text-[9px] text-sky-400">Hút Khí Lạnh</span>
                    </div>
                  ))}
                </div>
                <div className="mt-2 text-[9px] text-stone-400">Mặt trước quay vào Lối Lạnh</div>
              </div>

              {/* Center: Cold Aisle (Lối Đi Lạnh) */}
              <div className="p-5 rounded-2xl bg-sky-950/70 border-2 border-dashed border-sky-500/60 text-center relative">
                <div className="inline-flex items-center gap-1 text-xs font-black text-sky-300 uppercase tracking-wider mb-2">
                  <ThermometerSnowflake className="w-4 h-4" />
                  Lối Đi Lạnh (Cold Aisle)
                </div>
                <div className="text-2xl font-black text-sky-400 font-mono">18°C – 21°C</div>
                <p className="text-[11px] text-sky-200 mt-1">
                  Mặt trước các rack đối diện nhau. Khí lạnh thổi từ lỗ sàn nâng lên đây.
                </p>
                {isFanActive && (
                  <div className="flex justify-center gap-2 mt-3">
                    <ArrowUp className="w-4 h-4 text-sky-400 animate-bounce" />
                    <ArrowUp className="w-4 h-4 text-sky-400 animate-bounce delay-100" />
                    <ArrowUp className="w-4 h-4 text-sky-400 animate-bounce delay-200" />
                  </div>
                )}
              </div>

              {/* Rack Row B */}
              <div className="p-4 rounded-2xl bg-stone-900 border border-stone-700 text-center relative">
                <div className="text-[10px] font-bold text-amber-400 uppercase">Hàng Rack 2 (Row B)</div>
                <div className="mt-2 space-y-1">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="p-1.5 rounded-md bg-stone-800 text-[10px] font-mono text-stone-300 flex justify-between items-center">
                      <span className="text-[9px] text-rose-400">Thoát Khí Nóng</span>
                      <span>Server #{i + 1}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-2 text-[9px] text-stone-400">Mặt sau quay ra Lối Nóng</div>
              </div>
            </div>

            {/* Bottom: Raised Floor (Sàn Nâng 1-4 feet) */}
            <div
              className="mt-6 border-t-2 border-stone-700 bg-stone-900/90 rounded-2xl p-4 transition-all duration-300"
              style={{ minHeight: `${80 + floorHeight * 20}px` }}
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-xs font-extrabold text-amber-400 flex items-center gap-1.5">
                  <Layers className="w-4 h-4" />
                  Khoảng Trống Dưới Sàn Nâng ({floorHeight} feet / Chuẩn 1–4 feet)
                </span>
                <span className="text-[10px] font-mono text-stone-400">Nền Bê Tông Bên Dưới</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-2.5 rounded-xl bg-stone-800 border border-stone-700 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-stone-300">
                    <strong>1. Bó Cáp Điện Nguồn:</strong> Đặt an toàn dưới sàn tránh vấp ngã và đứt gãy.
                  </span>
                </div>
                <div className="p-2.5 rounded-xl bg-stone-800 border border-stone-700 flex items-center gap-2">
                  <Wind className="w-4 h-4 text-sky-400 shrink-0" />
                  <span className="text-stone-300">
                    <strong>2. Ống Điều Hòa Thổi Khí Lạnh:</strong> Áp suất đẩy khí lạnh lên lỗ đục sàn.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Exam Knowledge Card */}
          <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs space-y-2">
            <div className="font-extrabold text-amber-900">📌 Ghi nhớ thi cử về Sàn nâng & Ngăn nhiệt:</div>
            <ul className="list-disc list-inside space-y-1 text-stone-700 leading-relaxed">
              <li>Sàn nâng (Raised Floor) có độ cao chuẩn từ <strong>1 đến 4 feet</strong> so với sàn bê tông.</li>
              <li>Mặt trước các rack đối diện nhau tạo thành <strong>Lối đi lạnh (Cold Aisle)</strong>; mặt sau đối diện nhau tạo thành <strong>Lối đi nóng (Hot Aisle)</strong>.</li>
              <li>Mục đích chính của Ngăn nhiệt: <strong>Đưa khí nóng thoát khỏi rack, tránh bị hút ngược lại thiết bị khác</strong>.</li>
              <li><strong>Chimney</strong> là ống dẫn có quạt hút khí nóng đẩy thẳng lên trần nhà.</li>
            </ul>
          </div>
        </div>
      )}

      {/* ============================================================
          TAB 2: LIGHTS-OUT DATA CENTER (DC KHÔNG ĐÈN)
          ============================================================ */}
      {activeTab === "lightsOut" && (
        <div className="mt-6 space-y-6 animate-in fade-in duration-300">
          {/* Day / Night Switch */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
            <div>
              <h4 className="font-black text-sm text-stone-900">
                Chế Độ Vận Hành Phòng Máy:
              </h4>
              <p className="text-xs text-stone-600 mt-0.5">
                Gạt công tắc để chuyển giữa DC truyền thống (bật đèn) và Lights-Out DC (tắt đèn, quản lý từ xa).
              </p>
            </div>

            <button
              onClick={() => setIsLightsOff(!isLightsOff)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl font-black text-xs transition-all shadow-sm ${
                isLightsOff
                  ? "bg-stone-900 text-amber-400 ring-2 ring-amber-400"
                  : "bg-amber-500 text-stone-900"
              }`}
            >
              {isLightsOff ? (
                <>
                  <LightbulbOff className="w-4 h-4 text-amber-400" />
                  Đang Bật: Lights-Out DC ("Không Đèn")
                </>
              ) : (
                <>
                  <Lightbulb className="w-4 h-4 text-stone-900" />
                  Đang Bật: DC Truyền Thống (Có Đèn)
                </>
              )}
            </button>
          </div>

          {/* Simulated Console Screen */}
          <div
            className={`p-6 rounded-3xl border-2 transition-all duration-500 ${
              isLightsOff
                ? "bg-stone-950 text-white border-amber-500/50 shadow-2xl"
                : "bg-stone-100 text-stone-900 border-stone-300 shadow-inner"
            }`}
          >
            <div className="flex items-center justify-between pb-4 border-b border-stone-700/50 mb-5">
              <div className="flex items-center gap-2">
                <Terminal className={`w-5 h-5 ${isLightsOff ? "text-amber-400" : "text-stone-700"}`} />
                <span className="font-mono font-bold text-xs">
                  {isLightsOff ? "LIGHTS-OUT REMOTE MANAGEMENT CONSOLE (ĐÃ TẮT ĐÈN PHÒNG MÁY)" : "LOCAL ACCESS DC (ĐÈN ĐANG SÁNG - CÓ NGƯỜI TRONG PHÒNG)"}
                </span>
              </div>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md font-bold ${
                isLightsOff ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40" : "bg-stone-200 text-stone-700"
              }`}>
                {isLightsOff ? "REMOTE 100% ONLINE" : "MANUAL ONSITE"}
              </span>
            </div>

            {/* 3 Core Benefits of Lights-Out DC */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className={`p-4 rounded-2xl border ${isLightsOff ? "bg-stone-900/90 border-stone-800" : "bg-white border-stone-200"}`}>
                <div className="text-amber-500 font-mono font-black text-base mb-1">01</div>
                <h5 className="font-extrabold text-sm mb-1">Giảm Chi Phí Nhân Sự</h5>
                <p className="text-xs opacity-80 leading-relaxed">
                  Không cần đội ngũ trực 24/7 bên trong phòng máy lạnh buốt; toàn bộ thao tác cấu hình thực hiện qua giao diện web/SSH từ xa.
                </p>
              </div>

              <div className={`p-4 rounded-2xl border ${isLightsOff ? "bg-stone-900/90 border-stone-800" : "bg-white border-stone-200"}`}>
                <div className="text-sky-500 font-mono font-black text-base mb-1">02</div>
                <h5 className="font-extrabold text-sm mb-1">Ít Khả Năng Cấu Hình Sai</h5>
                <p className="text-xs opacity-80 leading-relaxed">
                  Ít người ra vào phòng máy vật lý giúp triệt tiêu nguy cơ cắm nhầm dây cáp mạng, va quẹt linh kiện hoặc can thiệp sai cổng kết nối.
                </p>
              </div>

              <div className={`p-4 rounded-2xl border ${isLightsOff ? "bg-stone-900/90 border-stone-800" : "bg-white border-stone-200"}`}>
                <div className="text-emerald-500 font-mono font-black text-base mb-1">03</div>
                <h5 className="font-extrabold text-sm mb-1">Giảm Nguy Cơ Tấn Công Vật Lý</h5>
                <p className="text-xs opacity-80 leading-relaxed">
                  Cửa phòng máy khóa kín tuyệt đối, hạn chế tiếp xúc trực tiếp ổ cứng và server, giảm thiểu tối đa hành vi phá hoại có chủ đích.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Summary */}
          <div className="p-4 rounded-2xl bg-stone-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>
                <strong>Khẩu quyết chuỗi làm mát & tối ưu điện:</strong> Sàn nâng ➔ Ngăn nhiệt (Cold/Hot Aisle) ➔ Chimney ➔ Lights-out DC.
              </span>
            </div>
            <span className="text-stone-400 font-mono shrink-0">Mục II.1 ➔ II.4</span>
          </div>
        </div>
      )}
    </div>
  );
}
