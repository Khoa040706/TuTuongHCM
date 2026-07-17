"use client";
import React, { useState, useEffect } from "react";
import { Shield, ShieldAlert, AlertTriangle, ArrowRight, CheckCircle2, RotateCcw } from "lucide-react";

export default function InterfaceInformationHiding() {
  const [wallActive, setWallActive] = useState(true);
  const [internalState, setInternalState] = useState("Array"); // "Array" vs "ArrayList"
  const [executionResult, setExecutionResult] = useState({ status: "idle", message: "Nhấn 'Chạy thử hệ thống' để kiểm tra kết nối giữa Q và T." });
  const [isSending, setIsSending] = useState(false);

  const runSimulation = () => {
    setIsSending(true);
    setExecutionResult({ status: "running", message: "Đang truyền tải thông điệp từ Q sang T..." });

    setTimeout(() => {
      setIsSending(false);
      if (wallActive) {
        setExecutionResult({
          status: "success",
          message: `KẾT QUẢ: Thành công! Class Q gọi T thông qua phương thức public đặc tả. Dù T đang dùng cấu trúc dữ liệu nội bộ là ${internalState === "Array" ? "Mảng (int[])" : "ArrayList"}, Q vẫn hoạt động bình thường.`
        });
      } else {
        if (internalState === "Array") {
          setExecutionResult({
            status: "success",
            message: "KẾT QUẢ: Chạy được. Q truy cập trực tiếp vào biến 'public int[] data' của T. Tuy nhiên, liên kết này đang cực kỳ nguy hiểm!"
          });
        } else {
          setExecutionResult({
            status: "error",
            message: "KẾT QUẢ: CRASH! Lớp Q cố gắng chạy lệnh 'T.data[0] = 10' nhưng biến 'data' trong T nay đã đổi sang kiểu 'ArrayList'. Lỗi biên dịch xảy ra ngay lập tức!"
          });
        }
      }
    }, 1200);
  };

  const toggleInternalState = () => {
    const newState = internalState === "Array" ? "ArrayList" : "Array";
    setInternalState(newState);
    setExecutionResult({
      status: "idle",
      message: `Đã đổi cấu trúc dữ liệu nội bộ của T sang ${newState === "Array" ? "Mảng int[]" : "ArrayList"}. Hãy chạy thử hệ thống để xem Class Q có bị ảnh hưởng không!`
    });
  };

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-100 shadow-xl my-6 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
            Mô Phỏng Information Hiding: Bức Tường Ngăn Cách
          </h4>
          <p className="text-xs text-slate-400 mt-1">
            Bật/Tắt bức tường che giấu thông tin để thấy cách bảo vệ sự độc lập giữa lớp Q và lớp T
          </p>
        </div>

        {/* Toggle wall button */}
        <button
          onClick={() => {
            setWallActive(!wallActive);
            setExecutionResult({ status: "idle", message: "Đã thay đổi trạng thái bức tường. Hãy chạy thử!" });
          }}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-xs transition-all duration-300 ${
            wallActive
              ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-500/20"
              : "bg-rose-600 hover:bg-rose-700 text-white shadow-lg shadow-rose-500/20"
          }`}
        >
          {wallActive ? <Shield className="w-4 h-4" /> : <ShieldAlert className="w-4 h-4" />}
          <span>{wallActive ? "XÂY BỨC TƯỜNG (Ẩn chi tiết)" : "PHÁ BỨC TƯỜNG (Lộ chi tiết)"}</span>
        </button>
      </div>

      {/* Main Diagram Area */}
      <div className="relative flex flex-col lg:flex-row justify-between items-center gap-8 bg-slate-950/80 p-8 rounded-xl border border-slate-800/80 mb-6 min-h-[300px]">
        {/* Class Q */}
        <div className="w-full lg:w-5/12 bg-slate-900 border border-slate-800 rounded-xl p-4 relative z-10">
          <div className="flex justify-between items-center mb-3">
            <span className="font-mono text-xs font-bold text-indigo-400">Class Q (Client)</span>
            <span className="text-[10px] bg-indigo-500/10 text-indigo-300 px-2 py-0.5 rounded border border-indigo-500/20">Người gọi</span>
          </div>
          
          <div className="bg-slate-950 p-3 rounded-lg border border-slate-850 font-mono text-xs leading-relaxed text-slate-300">
            {wallActive ? (
              <>
                <span className="text-slate-500">// Sử dụng T đúng đặc tả</span>
                <br />
                T t = new T();
                <br />
                <span className="text-indigo-400">t.addValue(5);</span>
                <br />
                <span className="text-indigo-400">int v = t.getValue(0);</span>
              </>
            ) : (
              <>
                <span className="text-slate-500">// Can thiệp trực tiếp ruột T</span>
                <br />
                T t = new T();
                <br />
                {internalState === "Array" ? (
                  <span className="text-amber-400">t.data[0] = 5;</span>
                ) : (
                  <span className="text-rose-400 font-semibold">t.data[0] = 5; // Error!</span>
                )}
                <br />
                int v = t.data[0];
              </>
            )}
          </div>
        </div>

        {/* The Wall (Middle Area) */}
        <div className="flex flex-col items-center justify-center relative min-h-[120px] lg:min-h-0 w-full lg:w-2/12 h-full py-4 lg:py-0">
          {/* Visual Wall Graphic */}
          <div className={`w-4 lg:w-6 h-24 lg:h-44 rounded-full transition-all duration-500 flex items-center justify-center ${
            wallActive 
              ? "bg-gradient-to-b from-emerald-500/80 to-teal-600/80 border border-emerald-400 shadow-lg shadow-emerald-500/30" 
              : "bg-slate-800 border border-slate-700"
          }`}>
            <span className="text-[9px] font-bold tracking-widest text-white rotate-0 lg:-rotate-90 uppercase whitespace-nowrap">
              {wallActive ? "Bức tường ẩn" : "Không có tường"}
            </span>
          </div>

          {/* Packet animation */}
          {isSending && (
            <div className="absolute top-1/2 left-0 w-4 h-4 bg-amber-400 rounded-full animate-ping z-20"
                 style={{ animationDuration: "0.8s" }} />
          )}
        </div>

        {/* Class T */}
        <div className="w-full lg:w-5/12 bg-slate-900 border border-slate-800 rounded-xl p-4 relative z-10">
          <div className="flex justify-between items-center mb-3">
            <span className="font-mono text-xs font-bold text-emerald-400">Class T (Service)</span>
            <button
              onClick={toggleInternalState}
              className="text-[10px] bg-slate-800 hover:bg-slate-750 text-slate-300 px-2.5 py-1 rounded border border-slate-700 flex items-center gap-1.5 transition-all"
            >
              <RotateCcw className="w-3 h-3 text-slate-400" />
              <span>Đổi Data Structure nội bộ</span>
            </button>
          </div>

          <div className="bg-slate-950 p-3 rounded-lg border border-slate-850 font-mono text-xs leading-relaxed text-slate-300 mb-3">
            <div>
              <span className="text-slate-500">// Cài đặt nội bộ bên trong</span>
              <br />
              {wallActive ? (
                <>
                  <span className="text-rose-400 font-semibold">private</span>{" "}
                  {internalState === "Array" ? "int[] data = new int[10];" : "ArrayList&lt;Integer&gt; data;"}
                </>
              ) : (
                <>
                  <span className="text-emerald-400 font-semibold">public</span>{" "}
                  {internalState === "Array" ? "int[] data = new int[10];" : "ArrayList&lt;Integer&gt; data;"}
                </>
              )}
            </div>
            <div className="mt-2 text-slate-500">// Đặc tả giao diện ra bên ngoài</div>
            <div className="text-indigo-300">
              public void addValue(int v) &#123; ... &#125;
              <br />
              public int getValue(int idx) &#123; ... &#125;
            </div>
          </div>

          <div className="flex justify-between items-center text-[10px] bg-slate-950/40 p-2 rounded border border-slate-850">
            <span className="text-slate-400">Đang lưu trữ bằng:</span>
            <span className="font-bold text-amber-400 uppercase tracking-wider">{internalState}</span>
          </div>
        </div>
      </div>

      {/* Simulator Control & Console Output */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        <div className="md:col-span-4 flex flex-col justify-center">
          <button
            onClick={runSimulation}
            disabled={isSending}
            className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-bold rounded-xl transition-all shadow-lg shadow-orange-500/10 flex justify-center items-center gap-2 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
          >
            <span>CHẠY THỬ HỆ THỐNG</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>
        </div>

        <div className="md:col-span-8">
          <div className={`h-full min-h-[70px] flex items-center p-4 rounded-xl border transition-colors ${
            executionResult.status === "idle"
              ? "bg-slate-950 border-slate-850 text-slate-300"
              : executionResult.status === "running"
              ? "bg-slate-900 border-amber-500/20 text-amber-300 animate-pulse"
              : executionResult.status === "success"
              ? "bg-emerald-950/40 border-emerald-500/30 text-emerald-300"
              : "bg-rose-950/40 border-rose-500/30 text-rose-300"
          }`}>
            <div className="flex gap-3 items-start">
              {executionResult.status === "success" && <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-emerald-400" />}
              {executionResult.status === "error" && <AlertTriangle className="w-5 h-5 flex-shrink-0 text-rose-400" />}
              <p className="text-xs leading-relaxed font-mono">{executionResult.message}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
