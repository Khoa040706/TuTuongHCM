"use client";
import React, { useState } from "react";
import { Droplet, Snowflake, Shield, Info, RefreshCw } from "lucide-react";

export default function WaterDispenserAdt() {
  const [output, setOutput] = useState(null);
  const [waterLevel, setWaterLevel] = useState(100);
  const [internalMechanism, setInternalMechanism] = useState("compressor");

  const handleAction = (type) => {
    if (waterLevel <= 0) {
      setOutput({ type: "error", message: "Hết nước trong máy! (isEmpty() = true)" });
      return;
    }

    setWaterLevel((prev) => Math.max(0, prev - 10));

    switch (type) {
      case "chill":
        setOutput({
          type: "cold_water",
          title: "Nước Lạnh (Cold Water 5°C)",
          desc: "Đã kích hoạt phương thức chill(). Nước đã được làm lạnh thành công!",
          color: "from-purple-500 to-indigo-600",
          icon: "🧊"
        });
        break;
      case "crush":
        setOutput({
          type: "crushed_ice",
          title: "Đá Bào (Crushed Ice)",
          desc: "Đã kích hoạt phương thức crush(). Lưỡi dao đã xay nhuyễn đá!",
          color: "from-violet-500 to-purple-600",
          icon: "❄️"
        });
        break;
      case "cube":
        setOutput({
          type: "ice_cubes",
          title: "Đá Viên (Ice Cubes)",
          desc: "Đã kích hoạt phương thức cube(). Khay đá đã đúc thành các viên vuông!",
          color: "from-purple-600 to-indigo-700",
          icon: "🧊"
        });
        break;
      default:
        break;
    }
  };

  const handleRefill = () => {
    setWaterLevel(100);
    setOutput({ type: "info", title: "Đã nạp đầy nước", desc: "Dung tích bình chứa: 100%", icon: "💧" });
  };

  return (
    <div className="w-full bg-white border border-purple-200/80 rounded-2xl p-6 text-slate-800 shadow-xl my-6 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 pb-4 border-b border-purple-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-purple-100 text-purple-700 border border-purple-200">
              VÍ DỤ MÔ PHỎNG ADT
            </span>
            <h4 className="text-lg font-bold text-purple-950">
              Máy Lọc Nước (Water Dispenser) như một ADT
            </h4>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Bức tường thép (Steel Wall) che giấu toàn bộ chi tiết máy bên trong. Người dùng chỉ tương tác qua Giao diện (Interface) bên ngoài.
          </p>
        </div>

        {/* Refill button */}
        <button
          onClick={handleRefill}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-50 hover:bg-purple-100 border border-purple-200 text-xs font-semibold text-purple-700 transition-all shadow-sm"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Nạp lại Nước ({waterLevel}%)</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* LEFT: ADT Interface Controls (Outside Wall) */}
        <div className="lg:col-span-5 bg-purple-50/40 border border-purple-100 rounded-xl p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-purple-900 uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                ADT Interface (Bên ngoài tường)
              </span>
              <span className="text-[10px] font-mono text-slate-400">Input: Nước & Push Button</span>
            </div>

            {/* Status bar */}
            <div className="mb-5 bg-white p-3 rounded-lg border border-purple-100 shadow-sm">
              <div className="flex justify-between items-center text-xs mb-1">
                <span className="text-slate-600">Trạng thái bình chứa nước (isEmpty):</span>
                <span className={`font-mono font-bold ${waterLevel <= 0 ? "text-rose-600" : "text-emerald-600"}`}>
                  {waterLevel <= 0 ? "true (RỖNG)" : `false (${waterLevel}%)`}
                </span>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-indigo-600 transition-all duration-300"
                  style={{ width: `${waterLevel}%` }}
                ></div>
              </div>
            </div>

            {/* ADT Operations Buttons */}
            <span className="text-[10px] text-purple-900 font-bold block mb-2 uppercase tracking-wider">
              TẬP CÁC PHÉP TOÁN (ADT OPERATIONS)
            </span>
            <div className="grid grid-cols-3 gap-2 mb-4">
              <button
                onClick={() => handleAction("chill")}
                className="p-3 rounded-xl bg-white border border-purple-200 hover:border-purple-500 hover:bg-purple-50 text-purple-700 transition-all flex flex-col items-center gap-1 group shadow-sm"
              >
                <Droplet className="w-5 h-5 text-purple-600 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-mono font-bold">chill()</span>
                <span className="text-[9px] text-slate-500">Làm lạnh</span>
              </button>

              <button
                onClick={() => handleAction("crush")}
                className="p-3 rounded-xl bg-white border border-purple-200 hover:border-purple-500 hover:bg-purple-50 text-purple-700 transition-all flex flex-col items-center gap-1 group shadow-sm"
              >
                <Snowflake className="w-5 h-5 text-indigo-600 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-mono font-bold">crush()</span>
                <span className="text-[9px] text-slate-500">Đá bào</span>
              </button>

              <button
                onClick={() => handleAction("cube")}
                className="p-3 rounded-xl bg-white border border-purple-200 hover:border-purple-500 hover:bg-purple-50 text-purple-700 transition-all flex flex-col items-center gap-1 group shadow-sm"
              >
                <span className="text-lg group-hover:scale-110 transition-transform">🧊</span>
                <span className="text-xs font-mono font-bold">cube()</span>
                <span className="text-[9px] text-slate-500">Đá viên</span>
              </button>
            </div>
          </div>

          {/* Output Display */}
          <div className="mt-4 p-4 rounded-xl bg-white border border-purple-100 shadow-sm min-h-[90px] flex items-center">
            {output ? (
              output.type === "error" ? (
                <div className="text-xs text-rose-600 font-medium leading-relaxed">
                  ⚠️ {output.message}
                </div>
              ) : (
                <div className="flex items-start gap-3 w-full animate-in">
                  <span className="text-2xl">{output.icon}</span>
                  <div>
                    <h5 className="text-xs font-bold text-purple-950">{output.title}</h5>
                    <p className="text-[11px] text-slate-600 mt-0.5">{output.desc}</p>
                  </div>
                </div>
              )
            ) : (
              <span className="text-xs text-slate-400 italic">
                Bấm các nút phép toán <code>chill()</code>, <code>crush()</code>, <code>cube()</code> để nhận kết quả (Output).
              </span>
            )}
          </div>
        </div>

        {/* MIDDLE: THE STEEL WALL (Isolation Barrier) */}
        <div className="lg:col-span-2 flex flex-col items-center justify-center p-4 bg-gradient-to-b from-purple-50 to-indigo-50 border border-purple-200 rounded-xl relative overflow-hidden">
          <Shield className="w-8 h-8 text-purple-600 mb-2 relative z-10 animate-pulse" />
          <span className="text-xs font-extrabold text-purple-950 uppercase tracking-widest font-mono relative z-10 text-center">
            THE STEEL WALL
          </span>
          <span className="text-[9px] text-purple-700 font-semibold mt-1 relative z-10 text-center">
            Bức tường cách ly ADT
          </span>
          <p className="text-[10px] text-slate-600 mt-3 text-center leading-relaxed relative z-10">
            Ngăn chương trình truy cập trực tiếp bộ lọc. Chỉ cho phép đi qua khe hở Input / Output chuẩn.
          </p>
        </div>

        {/* RIGHT: Hidden Implementation (Inside Wall) */}
        <div className="lg:col-span-5 bg-purple-50/40 border border-purple-100 rounded-xl p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-purple-900 uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                Hidden Implementation (Bên trong tường)
              </span>
              <span className="text-[10px] font-mono text-slate-400">Che giấu / Information Hiding 🔒</span>
            </div>

            <p className="text-xs text-slate-600 mb-4 leading-relaxed">
              Bạn có thể thay đổi công nghệ làm lạnh bên trong mà không ảnh hưởng gì tới các nút bấm <code>chill()</code> hay <code>crush()</code> bên ngoài:
            </p>

            {/* Switch internal mechanism */}
            <div className="space-y-3 mb-4">
              <label
                onClick={() => setInternalMechanism("compressor")}
                className={`p-3 rounded-lg border flex items-center gap-3 cursor-pointer transition-all ${
                  internalMechanism === "compressor"
                    ? "bg-white border-purple-500 text-purple-900 shadow-sm"
                    : "bg-white/60 border-purple-100 text-slate-600 hover:bg-white"
                }`}
              >
                <input
                  type="radio"
                  name="mechanism"
                  checked={internalMechanism === "compressor"}
                  onChange={() => {}}
                  className="accent-purple-600"
                />
                <div>
                  <span className="text-xs font-bold block">Công nghệ 1: Máy nén Gas (Compressor)</span>
                  <span className="text-[10px] text-slate-500">Làm lạnh nhanh, dùng lốc máy cơ khí (Data Structure 1)</span>
                </div>
              </label>

              <label
                onClick={() => setInternalMechanism("thermoelectric")}
                className={`p-3 rounded-lg border flex items-center gap-3 cursor-pointer transition-all ${
                  internalMechanism === "thermoelectric"
                    ? "bg-white border-purple-500 text-purple-900 shadow-sm"
                    : "bg-white/60 border-purple-100 text-slate-600 hover:bg-white"
                }`}
              >
                <input
                  type="radio"
                  name="mechanism"
                  checked={internalMechanism === "thermoelectric"}
                  onChange={() => {}}
                  className="accent-purple-600"
                />
                <div>
                  <span className="text-xs font-bold block">Công nghệ 2: Chíp bán dẫn Bán Peltier</span>
                  <span className="text-[10px] text-slate-500">Làm lạnh điện tử êm ái không tiếng ồn (Data Structure 2)</span>
                </div>
              </label>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-white border border-purple-100 text-[11px] text-slate-700 leading-relaxed flex items-start gap-2 shadow-sm">
            <Info className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
            <span>
              <strong>Đúc kết:</strong> Người dùng hoàn toàn <i>không quan tâm</i> máy lọc dùng lốc nén gas hay chíp điện tử. Kết quả đầu ra (Output) vẫn luôn là nước lạnh và đá viên đúng theo đặc tả (specification)!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
