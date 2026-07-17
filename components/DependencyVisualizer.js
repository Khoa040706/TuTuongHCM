"use client";
import React, { useState } from "react";
import { Play, ShieldAlert, Sparkles, RefreshCw, HelpCircle } from "lucide-react";

export default function DependencyVisualizer() {
  const [status, setStatus] = useState("idle"); // 'idle', 'calling', 'broken'
  const [log, setLog] = useState("Bấm các nút điều khiển bên dưới để quan sát cơ chế phụ thuộc dịch vụ.");

  const callService = () => {
    setStatus("calling");
    setLog("⚡ Đang gửi yêu cầu dịch vụ... TestBallV2 gọi 'new MyBall()' và truy cập 'setColour()'.");
    setTimeout(() => {
      setStatus("idle");
      setLog("✅ Dịch vụ phản hồi thành công! Đối tượng quả bóng đã được tạo lập.");
    }, 2200);
  };

  const breakService = () => {
    setStatus("broken");
    setLog("❌ LỚP DỊCH VỤ THAY ĐỔI: Phương thức 'setColour' bị đổi tên thành 'changeColour'.");
  };

  const resetSim = () => {
    setStatus("idle");
    setLog("Bấm các nút điều khiển bên dưới để quan sát cơ chế phụ thuộc dịch vụ.");
  };

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-3xl p-4 md:p-6 my-6 shadow-sm font-sans text-stone-850 select-none animate-fade-in">
      
      {/* Header */}
      <div className="border-b border-stone-200 pb-3 mb-5">
        <h4 className="text-base font-extrabold text-stone-900">
          🔗 Trực Quan Hóa Mối Quan Hệ Phụ Thuộc (Dependency)
        </h4>
        <p className="text-xs text-stone-500 mt-1">
          Lớp Client (TestBallV2) phụ thuộc vào dịch vụ do Lớp Service (MyBall) cung cấp. Mũi tên nét đứt <code>---&gt;</code> thể hiện quan hệ này.
        </p>
      </div>

      {/* Visual Canvas Diagram */}
      <div className="bg-[#151413] border border-stone-850 rounded-2xl p-6 mb-5 flex flex-col md:flex-row items-center justify-around gap-6 min-h-[180px] relative shadow-inner">
        {/* Client Class Block */}
        <div className={`w-[140px] border p-4 rounded-xl text-center font-mono text-xs transition-all duration-300 ${
          status === "broken"
            ? "border-rose-500 bg-rose-950/20 text-rose-300 shadow-[0_0_12px_rgba(239,68,68,0.2)] animate-shake"
            : "border-stone-700 bg-stone-900/60 text-stone-300"
        }`}>
          <div className="font-bold border-b border-stone-800 pb-1 mb-2 text-stone-100">TestBallV2</div>
          <div className="text-[10px] text-stone-500 italic">Client Program</div>
          {status === "broken" && (
            <div className="mt-2 text-[8px] bg-rose-600 text-white font-bold px-1.5 py-0.5 rounded animate-pulse">
              LỖI BIÊN DỊCH
            </div>
          )}
        </div>

        {/* Dotted Arrow Connector */}
        <div className="flex-1 max-w-[120px] flex flex-col items-center justify-center relative py-4">
          <div className="text-[9px] font-mono text-stone-600 mb-1 select-none font-black tracking-widest">
            uses
          </div>
          {/* Dashed Line */}
          <div className="w-full border-t-2 border-dashed border-stone-700 relative flex items-center justify-end">
            {/* Arrow Tip */}
            <span className="absolute right-0 top-1/2 -translate-y-1/2 border-y-4 border-y-transparent border-l-6 border-l-stone-700" />
            
            {/* Flying dot when calling */}
            {status === "calling" && (
              <div className="absolute w-2.5 h-2.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)] animate-dash-travel" />
            )}
          </div>
        </div>

        {/* Service Class Block */}
        <div className="w-[140px] border border-stone-750 bg-stone-900/60 p-4 rounded-xl text-center font-mono text-xs text-stone-300 transition-all duration-300">
          <div className="font-bold border-b border-stone-800 pb-1 mb-2 text-stone-100">MyBall</div>
          <div className="text-[10px] text-stone-500 italic">Service Class</div>
          <div className="mt-2 text-[9px] font-bold text-emerald-500">
            {status === "broken" ? "changeColour()" : "setColour()"}
          </div>
        </div>
      </div>

      {/* Controls & Logs */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* Controls (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-2.5">
          <button
            onClick={callService}
            disabled={status === "calling" || status === "broken"}
            className={`w-full py-2.5 px-4 font-bold text-xs rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-sm ${
              status === "calling" || status === "broken"
                ? "bg-stone-250 text-stone-400 cursor-not-allowed border-stone-200"
                : "bg-amber-600 hover:bg-amber-550 text-white"
            }`}
          >
            <Play size={12} />
            <span>Gửi yêu cầu dịch vụ</span>
          </button>
          
          <button
            onClick={breakService}
            disabled={status === "calling" || status === "broken"}
            className={`w-full py-2.5 px-4 font-bold text-xs rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 border ${
              status === "calling" || status === "broken"
                ? "bg-stone-250 text-stone-400 cursor-not-allowed border-stone-200"
                : "bg-white border-rose-250 hover:bg-rose-50 text-rose-800 shadow-xs"
            }`}
          >
            <ShieldAlert size={12} />
            <span>Thay đổi Lớp Dịch vụ (Gây lỗi)</span>
          </button>

          {status !== "idle" && (
            <button
              onClick={resetSim}
              className="w-full py-2 px-4 bg-stone-200 hover:bg-stone-300 text-stone-700 font-bold text-xs rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5"
            >
              <RefreshCw size={12} />
              <span>Khôi phục ban đầu</span>
            </button>
          )}
        </div>

        {/* Explain Logs (7 cols) */}
        <div className="lg:col-span-7 bg-white border border-stone-200 rounded-2xl p-4 shadow-xs flex flex-col justify-between">
          <div>
            <div className="text-[10px] text-stone-400 font-black uppercase tracking-wider mb-2">Nhật ký hệ thống</div>
            <div className="bg-stone-50 border border-stone-200 rounded-xl p-3 min-h-[80px] flex items-center">
              <p className="text-xs text-stone-700 leading-relaxed font-semibold">
                {log}
              </p>
            </div>
          </div>

          {status === "broken" && (
            <div className="mt-3 bg-rose-50 border border-rose-200 p-2.5 rounded-lg text-[9px] text-rose-850 leading-relaxed font-sans">
              ⚠️ <strong>Giải thích lý do:</strong> TestBallV2 gọi hàm <code>setColour()</code>. Khi ta đổi tên hàm này ở lớp MyBall, trình biên dịch phát hiện TestBallV2 đang gọi một dịch vụ không còn tồn tại, gây ra lỗi biên dịch (compiler error). Đây là bản chất của <strong>quan hệ phụ thuộc (Dependency)</strong>!
            </div>
          )}
        </div>
      </div>

    </div>
  );
}
