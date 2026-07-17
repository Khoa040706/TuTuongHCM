"use client";
import React, { useState, useEffect } from "react";
import { Droplet, Eye, EyeOff, Thermometer, Wind, Zap, RefreshCw } from "lucide-react";

export default function InterfaceWaterDispenserAdt() {
  const [selectedMode, setSelectedMode] = useState("WARM"); // "COLD" | "WARM" | "HOT"
  const [reservoirLevel, setReservoirLevel] = useState(80);
  const [waterTemp, setWaterTemp] = useState(25);
  const [filterLife, setFilterLife] = useState(96);
  const [isDispensing, setIsDispensing] = useState(false);
  const [showInternal, setShowInternal] = useState(false);
  const [fillState, setFillState] = useState(0); // 0 (empty glass) to 100 (filled)

  // Temperature logic when switching modes
  useEffect(() => {
    if (selectedMode === "COLD") {
      setWaterTemp(6);
    } else if (selectedMode === "HOT") {
      setWaterTemp(92);
    } else {
      setWaterTemp(25);
    }
  }, [selectedMode]);

  const dispenseWater = () => {
    if (reservoirLevel <= 0) return;
    setIsDispensing(true);
    setFillState(0);

    // Animate glass filling
    const interval = setInterval(() => {
      setFillState((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsDispensing(false);
          setReservoirLevel((res) => Math.max(0, res - 5));
          setFilterLife((filt) => Math.max(0, filt - 1));
          return 100;
        }
        return prev + 10;
      });
    }, 100);
  };

  const refillMachine = () => {
    setReservoirLevel(100);
    setFilterLife(100);
  };

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-100 shadow-xl my-6 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">
            Ẩn Dụ ADT: Máy Lọc Nước Tự Động
          </h4>
          <p className="text-xs text-slate-400 mt-1">
            Bật/Tắt chế độ xem cấu trúc bên trong để hiểu sự phân tách giữa Giao diện (Interface) và Cấu trúc lưu trữ (Data Structure)
          </p>
        </div>

        {/* Toggle Internal View */}
        <button
          onClick={() => setShowInternal(!showInternal)}
          className="flex items-center gap-2 px-3 py-1.5 bg-slate-800 hover:bg-slate-750 text-xs font-semibold rounded-lg border border-slate-700 transition-all select-none"
        >
          {showInternal ? <EyeOff className="w-4 h-4 text-rose-400" /> : <Eye className="w-4 h-4 text-cyan-400" />}
          <span>{showInternal ? "ẨN CƠ CHẾ BÊN TRONG" : "XEM CƠ CHẾ BÊN TRONG"}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-6">
        {/* Dispenser Visual Cabinet */}
        <div className="lg:col-span-7 bg-slate-950 rounded-2xl border border-slate-850 p-6 flex flex-col items-center justify-between min-h-[380px] relative overflow-hidden">
          {/* Glass cabinet outline */}
          <div className={`w-full max-w-[280px] flex-1 border-2 rounded-2xl p-4 flex flex-col justify-between transition-all duration-500 relative ${
            showInternal 
              ? "bg-slate-900/40 border-cyan-500/20 shadow-lg shadow-cyan-500/5" 
              : "bg-slate-900/90 border-slate-800"
          }`}>
            {/* Header Display Screen */}
            <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-850 text-center font-mono select-none">
              <div className="text-[10px] text-slate-500 uppercase tracking-widest">Dispenser Status</div>
              <div className="text-xs font-bold text-cyan-400 mt-1">
                {reservoirLevel <= 0 ? "HẾT NƯỚC - HÃY NẠP LẠI" : isDispensing ? "ĐANG RÓT NƯỚC..." : `SẴN SÀNG [NƯỚC ${selectedMode}]`}
              </div>
            </div>

            {/* Simulated Water flow stream */}
            {isDispensing && (
              <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-2 h-[130px] overflow-hidden rounded-full z-15">
                <div className={`w-full h-full animate-pulse ${
                  selectedMode === "COLD" 
                    ? "bg-cyan-500/80" 
                    : selectedMode === "HOT" 
                    ? "bg-rose-500/80" 
                    : "bg-sky-400/80"
                }`} style={{
                  backgroundImage: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.4), transparent)",
                  backgroundSize: "100% 20px"
                }}></div>
              </div>
            )}

            {/* Dispensing Area & Cup */}
            <div className="flex flex-col items-center mt-20 mb-4 relative z-20">
              {/* Nozzle */}
              <div className="w-6 h-6 bg-slate-800 border border-slate-700 rounded-b-md shadow-inner mb-6"></div>
              
              {/* Cup container */}
              <div className="w-16 h-20 border-2 border-slate-700/60 rounded-b-xl rounded-t-sm relative overflow-hidden bg-slate-950/20">
                {/* Water inside cup */}
                {fillState > 0 && (
                  <div
                    className={`absolute bottom-0 left-0 right-0 transition-all duration-100 ${
                      selectedMode === "COLD" 
                        ? "bg-cyan-500/30 border-t-2 border-cyan-400" 
                        : selectedMode === "HOT" 
                        ? "bg-rose-500/30 border-t-2 border-rose-400" 
                        : "bg-sky-400/30 border-t-2 border-sky-300"
                    }`}
                    style={{ height: `${fillState}%` }}
                  >
                    {/* Bubbles animation */}
                    {isDispensing && (
                      <div className="absolute inset-0 flex justify-around items-end overflow-hidden">
                        <span className="w-1.5 h-1.5 bg-white/20 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></span>
                        <span className="w-1 h-1 bg-white/20 rounded-full animate-bounce" style={{ animationDelay: "0.3s" }}></span>
                        <span className="w-1.5 h-1.5 bg-white/20 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* User Interface Control Panel (Front Buttons) */}
            <div className="flex justify-between gap-1 mt-auto relative z-20">
              {["COLD", "WARM", "HOT"].map((mode) => (
                <button
                  key={mode}
                  disabled={isDispensing}
                  onClick={() => setSelectedMode(mode)}
                  className={`flex-1 py-2 rounded-lg font-bold text-[10px] font-mono tracking-wider transition-all select-none border ${
                    selectedMode === mode
                      ? mode === "COLD"
                        ? "bg-cyan-950/80 border-cyan-500 text-cyan-400"
                        : mode === "HOT"
                        ? "bg-rose-950/80 border-rose-500 text-rose-400"
                        : "bg-sky-950/80 border-sky-500 text-sky-400"
                      : "bg-slate-950 border-slate-850 hover:bg-slate-900 text-slate-400 disabled:opacity-50"
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Concept Link & Internal Machinery panel */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-6">
          {/* Internal Representation Panel */}
          <div className="bg-slate-850 border border-slate-800 rounded-2xl p-5 flex-1 flex flex-col justify-between">
            <div>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-3 block">
                {showInternal ? "Cơ chế bên trong (Data Structure / Implementation)" : "Vỏ bọc kim loại (Interface)"}
              </span>

              {showInternal ? (
                /* SHOW INTERNAL VARIABLES */
                <div className="space-y-4 font-mono text-xs">
                  {/* Water level */}
                  <div>
                    <div className="flex justify-between text-[11px] mb-1">
                      <span className="text-slate-400">private double reservoirLevel</span>
                      <span className="font-bold text-sky-400">{reservoirLevel}%</span>
                    </div>
                    <div className="w-full bg-slate-900 h-2 rounded border border-slate-800 overflow-hidden">
                      <div className="bg-sky-500 h-full transition-all duration-350" style={{ width: `${reservoirLevel}%` }}></div>
                    </div>
                  </div>

                  {/* Temperature */}
                  <div className="flex justify-between items-center p-2.5 rounded bg-slate-900 border border-slate-850">
                    <div className="flex items-center gap-2">
                      <Thermometer className={`w-4 h-4 ${selectedMode === "HOT" ? "text-rose-500" : selectedMode === "COLD" ? "text-cyan-500" : "text-sky-400"}`} />
                      <span className="text-slate-400">private double waterTemp</span>
                    </div>
                    <span className="font-bold text-slate-200">{waterTemp}°C</span>
                  </div>

                  {/* Cooling Compressor status */}
                  <div className="flex justify-between items-center p-2.5 rounded bg-slate-900 border border-slate-850">
                    <div className="flex items-center gap-2">
                      <Wind className="w-4 h-4 text-cyan-400" />
                      <span className="text-slate-400">private boolean coolingCompressor</span>
                    </div>
                    <span className={`font-bold ${selectedMode === "COLD" ? "text-emerald-400" : "text-slate-500"}`}>
                      {selectedMode === "COLD" ? "BẬT (ON)" : "TẮT (OFF)"}
                    </span>
                  </div>

                  {/* Heating Element status */}
                  <div className="flex justify-between items-center p-2.5 rounded bg-slate-900 border border-slate-850">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-rose-400" />
                      <span className="text-slate-400">private boolean heatingElement</span>
                    </div>
                    <span className={`font-bold ${selectedMode === "HOT" ? "text-emerald-400" : "text-slate-500"}`}>
                      {selectedMode === "HOT" ? "BẬT (ON)" : "TẮT (OFF)"}
                    </span>
                  </div>

                  {/* Filter Life */}
                  <div>
                    <div className="flex justify-between text-[11px] mb-1">
                      <span className="text-slate-400">private double filterLife</span>
                      <span className="font-bold text-teal-400">{filterLife}%</span>
                    </div>
                    <div className="w-full bg-slate-900 h-2 rounded border border-slate-800 overflow-hidden">
                      <div className="bg-teal-500 h-full transition-all duration-350" style={{ width: `${filterLife}%` }}></div>
                    </div>
                  </div>
                </div>
              ) : (
                /* INTERFACE ONLY VIEW (STEEL WALL ACTIVE) */
                <div className="space-y-3">
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Bạn được ngăn cách khỏi ruột máy bằng một bức tường thép. Bạn chỉ cần nhấn các nút public trên bảng điều khiển.
                  </p>
                  
                  <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 font-mono text-xs text-cyan-300/80 leading-relaxed">
                    <div className="text-slate-500">// public interface WaterDispenser</div>
                    <div>void setMode(String m);</div>
                    <div>void dispense();</div>
                  </div>

                  <p className="text-[11px] text-slate-400 italic">
                    * Bạn không cần biết trong máy có đun nóng bằng điện trở hay làm lạnh bằng gas, bình nước còn bao nhiêu phần trăm. Đặc tả Interface che giấu hoàn toàn các biến private này.
                  </p>
                </div>
              )}
            </div>

            {/* Dispense Action Buttons */}
            <div className="flex gap-2 mt-4 pt-3 border-t border-slate-800/60">
              <button
                onClick={dispenseWater}
                disabled={isDispensing || reservoirLevel <= 0}
                className="flex-1 py-3 bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-600 hover:to-indigo-600 text-slate-950 font-bold rounded-xl text-xs transition-all flex justify-center items-center gap-1.5 select-none disabled:opacity-40"
              >
                <Droplet className="w-4 h-4 text-slate-950" />
                <span>RÓT NƯỚC (DISPENSE)</span>
              </button>

              <button
                onClick={refillMachine}
                disabled={isDispensing}
                className="px-4 py-3 bg-slate-900 hover:bg-slate-800 border border-slate-750 text-slate-300 font-bold rounded-xl text-xs transition-all flex items-center justify-center gap-1.5 select-none disabled:opacity-40"
              >
                <RefreshCw className="w-3.5 h-3.5 text-slate-400" />
                <span>NẠP ĐẦY</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
