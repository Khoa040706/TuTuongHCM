"use client";

import React, { useState } from "react";
import { Plane, Clock, Fuel, CheckCircle2, Plus, RotateCcw, Radio } from "lucide-react";

export default function PqAirTrafficControllerSim() {
  const initialFlights = [
    { id: "X", name: "Chuyến bay X (VN-204)", landingIn: 3, fuelLeft: 15, dist: 2, priorityLevel: "Khẩn cấp (3 phút)", isEmergency: false },
    { id: "Y", name: "Chuyến bay Y (VJ-118)", landingIn: 6, fuelLeft: 20, dist: 2, priorityLevel: "Tiêu chuẩn (6 phút)", isEmergency: false },
  ];

  const [flights, setFlights] = useState([...initialFlights]);
  const [hasEmergency, setHasEmergency] = useState(false);
  const [clearedFlight, setClearedFlight] = useState(null);

  // Add Emergency Flight Z
  const handleAddEmergency = () => {
    if (hasEmergency) return;
    const emergencyFlight = {
      id: "Z",
      name: "Chuyến bay Z (SOS-911)",
      landingIn: 1,
      fuelLeft: 5,
      dist: 1,
      priorityLevel: "CỰC KỲ NGUY CẤP (1 phút)",
      isEmergency: true,
    };
    // PQ automatically puts Z at the top because landingIn is smallest
    const updated = [emergencyFlight, ...flights].sort((a, b) => a.landingIn - b.landingIn);
    setFlights(updated);
    setHasEmergency(true);
    setClearedFlight(null);
  };

  const handleClearRunway = () => {
    if (flights.length === 0) return;
    const highestPriority = flights[0];
    setClearedFlight(highestPriority);
    setFlights(flights.slice(1));
  };

  const handleReset = () => {
    setFlights([...initialFlights]);
    setHasEmergency(false);
    setClearedFlight(null);
  };

  return (
    <div className="my-8 rounded-3xl border border-sky-200/80 bg-gradient-to-br from-sky-50/80 via-white to-indigo-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-sky-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 border border-sky-300 text-sky-950 text-xs font-bold mb-2">
            <Radio className="w-3.5 h-3.5 text-sky-700" />
            <span>Ví Dụ Minh Họa Thực Tế (Mục 1.1)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-sky-950 via-indigo-900 to-slate-900 bg-clip-text text-transparent">
            Tình Huống Kiểm Soát Viên Không Lưu (Air Traffic Controller)
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Tại sao một hàng đợi thông thường (FIFO) là không đủ? Quan sát cách <strong>Priority Queue</strong> tự động lựa chọn máy bay hạ cánh an toàn nhất.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 self-start md:self-auto">
          <button
            onClick={handleReset}
            className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all flex items-center gap-1 shadow-sm"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Đặt lại
          </button>
          {!hasEmergency && (
            <button
              onClick={handleAddEmergency}
              className="px-3.5 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition-all shadow-sm flex items-center gap-1.5 animate-pulse"
            >
              <Plus className="w-3.5 h-3.5" />
              Thêm chuyến bay Z khẩn cấp!
            </button>
          )}
          <button
            onClick={handleClearRunway}
            disabled={flights.length === 0}
            className="px-3.5 py-1.5 rounded-xl bg-sky-600 hover:bg-sky-700 disabled:opacity-50 text-white text-xs font-bold transition-all shadow-sm flex items-center gap-1.5"
          >
            <Plane className="w-3.5 h-3.5" />
            Cấp phép hạ cánh (Dequeue)
          </button>
        </div>
      </div>

      {/* Main Simulation View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Radar & Queue Status (7 cols) */}
        <div className="lg:col-span-7 rounded-2xl bg-white border border-sky-100 p-5 space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
            <span className="text-xs font-mono font-bold text-slate-800 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
              Radar Sân Bay: Danh Sách Hàng Đợi Ưu Tiên (Priority Queue)
            </span>
            <span className="px-2.5 py-0.5 rounded-lg text-[10px] font-bold bg-sky-50 text-sky-900 font-mono border border-sky-200">
              {flights.length} máy bay đang chờ
            </span>
          </div>

          {/* Flights in Priority Queue */}
          <div className="space-y-2.5">
            {flights.map((f, idx) => {
              const isTop = idx === 0;

              return (
                <div
                  key={f.id}
                  className={`p-3.5 rounded-xl border transition-all flex items-center justify-between shadow-sm ${
                    f.isEmergency
                      ? "bg-rose-50 border-rose-300 text-rose-950 scale-[1.01]"
                      : isTop
                      ? "bg-amber-50/90 border-amber-300 text-slate-900"
                      : "bg-slate-50 border-slate-200 text-slate-700"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold font-mono text-xs shadow-sm ${
                        f.isEmergency
                          ? "bg-rose-600 text-white"
                          : isTop
                          ? "bg-amber-500 text-slate-950"
                          : "bg-slate-200 text-slate-700"
                      }`}
                    >
                      {f.id}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 flex items-center gap-2">
                        <span>{f.name}</span>
                        {isTop && (
                          <span className="px-2 py-0.5 rounded text-[9px] font-bold uppercase bg-amber-100 border border-amber-300 text-amber-950 font-mono">
                            Đang được ưu tiên #1
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-slate-600 flex items-center gap-3 mt-0.5 font-mono">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-sky-600" />
                          Hạ cánh sau: <strong className="text-slate-900">{f.landingIn} phút</strong>
                        </span>
                        <span className="flex items-center gap-1">
                          <Fuel className="w-3 h-3 text-amber-600" />
                          Nhiên liệu: {f.fuelLeft} phút
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="text-right font-mono">
                    <span className="text-[10px] text-slate-500 block">Thứ tự xử lý:</span>
                    <strong className={`text-xs ${isTop ? "text-amber-800 font-extrabold" : "text-slate-500"}`}>
                      Ưu tiên {idx + 1}
                    </strong>
                  </div>
                </div>
              );
            })}

            {flights.length === 0 && (
              <div className="p-6 text-center text-xs text-slate-500 font-mono bg-slate-50 rounded-xl border border-dashed border-slate-200">
                Đường băng trống. Tất cả máy bay đã được cấp phép hạ cánh an toàn!
              </div>
            )}
          </div>

          {/* Cleared Notice */}
          {clearedFlight && (
            <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 text-xs text-emerald-950 flex items-center gap-2 shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>
                Đã cấp phép hạ cánh cho <strong>{clearedFlight.name}</strong> (Thời gian chờ ngắn nhất: {clearedFlight.landingIn} phút).
              </span>
            </div>
          )}
        </div>

        {/* Concept Analysis (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl bg-white border border-sky-100 p-5 space-y-4 shadow-sm self-stretch flex flex-col justify-between">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-800 font-mono">
              Phân Tích Tình Huống Slide:
            </span>

            <p className="text-xs text-slate-700 leading-relaxed font-sans">
              Máy bay X hạ cánh sau 3 phút, máy bay Y hạ cánh sau 6 phút. Cả hai còn đủ nhiên liệu ít nhất 15 phút và đều cách sân bay 2 phút.
            </p>

            <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 space-y-2">
              <div className="text-[11px] font-bold text-amber-950 uppercase font-mono">
                Nhu Cầu Cấu Trúc Dữ Liệu:
              </div>
              <p className="text-[11px] text-slate-700 leading-relaxed font-sans">
                Ta cần một cấu trúc luôn biết <strong>item nào có priority (độ ưu tiên) cao nhất</strong> để xử lý trước. Khi máy bay Z khẩn cấp xuất hiện, nó lập tức được đưa lên đầu mà không cần chờ đợi!
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-sky-50 border border-sky-200 text-[11px] text-sky-950 font-sans">
            ⭐ <strong>Kết luận:</strong> Priority Queue giải quyết các bài toán lập lịch theo thứ tự quan trọng thay vì thứ tự thời gian xuất hiện thông thường.
          </div>
        </div>
      </div>
    </div>
  );
}
