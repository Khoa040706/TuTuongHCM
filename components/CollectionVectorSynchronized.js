"use client";
import React, { useState } from "react";
import { AlertTriangle, Lock, Unlock, Play } from "lucide-react";

export default function CollectionVectorSynchronized() {
  const [activeTab, setActiveTab] = useState("VECTOR"); // "VECTOR" | "ARRAYLIST"
  const [isPlaying, setIsPlaying] = useState(false);
  const [threadStatus, setThreadStatus] = useState("idle"); // "idle", "running", "queued"

  const runSimulation = () => {
    setIsPlaying(true);
    setThreadStatus("running");
    
    if (activeTab === "VECTOR") {
      setTimeout(() => {
        setThreadStatus("queued"); // Show thread B waiting for lock
      }, 800);
      setTimeout(() => {
        setIsPlaying(false);
        setThreadStatus("idle");
      }, 2500);
    } else {
      // ArrayList (both threads enter together)
      setTimeout(() => {
        setIsPlaying(false);
        setThreadStatus("idle");
      }, 1200);
    }
  };

  return (
    <div className="w-full bg-white border border-stone-200/80 rounded-3xl p-6 text-stone-850 shadow-lg my-6 overflow-hidden relative">
      <div className="bg-gradient-to-r from-rose-500 to-amber-500 h-1.5 absolute top-0 left-0 right-0" />
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h4 className="text-base md:text-lg font-black text-stone-900 flex items-center gap-2">
            <Lock className="w-5 h-5 text-rose-550 animate-pulse animate-duration-1000" />
            <span>So Sánh Đồng Bộ Hóa (Thread-Safety): Vector vs ArrayList</span>
          </h4>
          <p className="text-xs text-stone-500 mt-1">
            Mô phỏng cách các luồng Thread truy cập bộ nhớ của mảng để hiểu tại sao Vector chạy chậm hơn
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex bg-stone-100/80 p-1 rounded-xl border border-stone-200/60 select-none">
          <button
            onClick={() => { setActiveTab("VECTOR"); setIsPlaying(false); setThreadStatus("idle"); }}
            className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
              activeTab === "VECTOR" ? "bg-white text-stone-850 shadow-sm border border-stone-250/20" : "text-stone-500 hover:text-stone-800"
            }`}
          >
            Vector (Synchronized)
          </button>
          <button
            onClick={() => { setActiveTab("ARRAYLIST"); setIsPlaying(false); setThreadStatus("idle"); }}
            className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
              activeTab === "ARRAYLIST" ? "bg-white text-stone-850 shadow-sm border border-stone-250/20" : "text-stone-500 hover:text-stone-800"
            }`}
          >
            ArrayList (Không đồng bộ)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-6">
        {/* Thread simulation diagram */}
        <div className="lg:col-span-7 bg-stone-50/60 p-5 rounded-2xl border border-stone-200/80 flex flex-col justify-between min-h-[240px] shadow-inner">
          <div>
            <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block mb-4 font-mono">
              Bản đồ tương tác đa luồng (Multi-threading RAM)
            </span>

            <div className="flex justify-around items-center bg-white p-6 rounded-xl border border-stone-150 relative shadow-sm gap-2">
              {/* Threads */}
              <div className="flex flex-col gap-4 font-mono text-[10px]">
                {/* Thread A */}
                <div className={`p-2.5 rounded-xl border transition-all shadow-sm ${
                  isPlaying ? "bg-emerald-50 border-emerald-300 text-emerald-800 animate-pulse font-bold" : "bg-stone-50 border-stone-200 text-stone-450"
                }`}>
                  <span className="block font-bold">Thread A</span>
                  <span>{isPlaying ? "Đang truy cập..." : "Chờ..."}</span>
                </div>

                {/* Thread B */}
                <div className={`p-2.5 rounded-xl border transition-all shadow-sm ${
                  threadStatus === "queued" 
                    ? "bg-amber-50 border-amber-300 text-amber-800 animate-bounce font-bold" 
                    : isPlaying && activeTab === "ARRAYLIST"
                    ? "bg-emerald-50 border-emerald-300 text-emerald-800 animate-pulse font-bold"
                    : "bg-stone-50 border-stone-200 text-stone-450"
                }`}>
                  <span className="block font-bold">Thread B</span>
                  <span className="block text-[8px] mt-0.5 font-bold font-sans">
                    {threadStatus === "queued"
                      ? "🔒 Bị KHÓA (Đợi Thread A)"
                      : isPlaying && activeTab === "ARRAYLIST"
                      ? "Đang truy cập..."
                      : "Chờ..."}
                  </span>
                </div>
              </div>

              {/* Lock Mechanism */}
              <div className="flex flex-col items-center justify-center font-mono">
                {activeTab === "VECTOR" ? (
                  <div className={`p-4 rounded-full border transition-all duration-300 shadow-sm ${
                    isPlaying ? "bg-rose-50 border-rose-200 text-rose-600 scale-105" : "bg-stone-50 border-stone-250 text-stone-400"
                  }`}>
                    <Lock className="w-8 h-8" />
                  </div>
                ) : (
                  <div className="p-4 rounded-full border bg-emerald-50 border-emerald-200 text-emerald-600 shadow-sm transition-all duration-300">
                    <Unlock className="w-8 h-8" />
                  </div>
                )}
                <span className="text-[8px] text-stone-400 mt-2 font-bold uppercase tracking-wider">
                  {activeTab === "VECTOR" ? "Object Lock" : "No Lock"}
                </span>
              </div>

              {/* Data object */}
              <div className="font-mono text-center w-28">
                <div className={`p-4 rounded-xl border font-bold text-xs shadow-sm transition-all duration-300 ${
                  isPlaying ? "bg-indigo-50 border-indigo-200 text-indigo-700 font-extrabold" : "bg-stone-50 border-stone-200 text-stone-450"
                }`}>
                  {activeTab === "VECTOR" ? "Vector Object" : "ArrayList Object"}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex gap-2">
            <button
              onClick={runSimulation}
              disabled={isPlaying}
              className="flex-1 px-4 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-xl shadow-md shadow-rose-500/10 hover:shadow-rose-500/20 transition-all cursor-pointer disabled:opacity-50 select-none hover:scale-[1.02]"
            >
              Bắt đầu mô phỏng
            </button>
          </div>
        </div>

        {/* Explain performance */}
        <div className="lg:col-span-5 bg-stone-50/60 p-5 rounded-2xl border border-stone-200/80 flex flex-col justify-between shadow-inner">
          <div>
            <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block mb-3 font-mono">
              Tại sao Vector lại chạy chậm hơn?
            </span>

            {activeTab === "VECTOR" ? (
              <div className="text-xs text-stone-600 leading-relaxed space-y-3 font-sans">
                <p>
                  * Lớp <code className="bg-stone-100 text-stone-850 px-1 py-0.5 rounded border border-stone-200/60 font-mono text-[10px]">Vector</code> sử dụng cơ chế <strong>Đồng bộ hóa (Synchronized)</strong> ở hầu hết mọi phương thức.
                </p>
                <p>
                  * Khi Thread A truy cập Vector, nó sẽ lấy được khóa (Lock). Thread B muốn truy cập bắt buộc phải xếp hàng đợi đến khi Thread A hoàn tất và nhả khóa.
                </p>
                <p className="border-t border-stone-200 pt-2.5 mt-2">
                  ➔ <strong>Ưu điểm:</strong> An toàn tuyệt đối trong môi trường đa luồng (Thread-safe).
                  <br />
                  ➔ <strong>Nhược điểm:</strong> Tốn tài nguyên quản lý khóa, làm giảm hiệu năng hệ thống đáng kể.
                </p>
              </div>
            ) : (
              <div className="text-xs text-stone-600 leading-relaxed space-y-3 font-sans">
                <p>
                  * Lớp <code className="bg-stone-100 text-stone-850 px-1 py-0.5 rounded border border-stone-200/60 font-mono text-[10px]">ArrayList</code> <strong>không</strong> đồng bộ hóa các phương thức của mình.
                </p>
                <p>
                  * Nhiều luồng Thread khác nhau hoàn toàn có thể truy xuất ArrayList cùng lúc mà không cần tranh chấp khóa.
                </p>
                <p className="border-t border-stone-200 pt-2.5 mt-2">
                  ➔ <strong>Ưu điểm:</strong> Tốc độ thực thi cực kỳ nhanh và nhẹ hơn Vector.
                  <br />
                  ➔ <strong>Nhược điểm:</strong> Không an toàn đa luồng. Nếu nhiều Thread cùng sửa ArrayList, dữ liệu có thể bị sai lệch hoặc lỗi.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Flashing exam warning alert */}
      <div className="bg-rose-50/60 border border-rose-200/80 rounded-2xl p-4 flex gap-3 items-start my-4 shadow-sm">
        <AlertTriangle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
        <div>
          <span className="text-xs font-bold text-rose-900 font-mono uppercase tracking-wider block">
            🚨 Câu Hỏi Thi Ôn Tập: Synchronized vs Performance
          </span>
          <p className="text-xs text-rose-700 mt-1 leading-relaxed">
            Trong các bài thi trắc nghiệm Java, câu hỏi so sánh giữa Vector và ArrayList là kinh điển. Hãy ghi nhớ: <strong>Vector chậm hơn ArrayList vì Vector đồng bộ hóa (synchronized)</strong> để an toàn đa luồng.
          </p>
        </div>
      </div>
    </div>
  );
}
