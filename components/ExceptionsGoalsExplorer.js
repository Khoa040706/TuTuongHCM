"use client";
import React, { useState } from "react";
import { Play, RotateCcw, ShieldCheck, AlertOctagon, Info } from "lucide-react";

export default function ExceptionsGoalsExplorer() {
  const [activeMode, setActiveMode] = useState("NO_HANDLING"); // "NO_HANDLING" | "WITH_HANDLING"
  const [currentStep, setCurrentStep] = useState(0); // step inside selected mode
  const [logs, setLogs] = useState([]);
  const [status, setStatus] = useState("idle"); // "idle" | "running" | "crashed" | "success"

  const handleNextStep = () => {
    if (activeMode === "NO_HANDLING") {
      if (currentStep >= 2) return;
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);

      if (nextStep === 1) {
        setStatus("running");
        setLogs(["Console: Bắt đầu chạy chương trình..."]);
      } else if (nextStep === 2) {
        setStatus("crashed");
        setLogs((prev) => [
          ...prev,
          "Console: Đang thực hiện phép chia 10 / 0...",
          "❌ THROW: java.lang.ArithmeticException: / by zero",
          "💥 CRASH: JVM dừng đột ngột! Các lệnh tiếp theo bị hủy bỏ."
        ]);
      }
    } else {
      if (currentStep >= 3) return;
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);

      if (nextStep === 1) {
        setStatus("running");
        setLogs(["Console: Bắt đầu chạy chương trình...", "Console: Đi vào khối try block..."]);
      } else if (nextStep === 2) {
        setLogs((prev) => [
          ...prev,
          "Console: Đang thực hiện phép chia 10 / 0...",
          "⚠️ THROW: java.lang.ArithmeticException: / by zero",
          "🛡️ CATCH: Bắt được ngoại lệ! Chuyển hướng xử lý trong khối catch."
        ]);
      } else if (nextStep === 3) {
        setStatus("success");
        setLogs((prev) => [
          ...prev,
          "Console: In thông báo lỗi: 'Lỗi chia cho 0'",
          "✅ SUCCESS: Chương trình chạy tiếp các dòng lệnh phía sau bình thường!"
        ]);
      }
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setLogs([]);
    setStatus("idle");
  };

  const handleModeChange = (mode) => {
    setActiveMode(mode);
    setCurrentStep(0);
    setLogs([]);
    setStatus("idle");
  };

  return (
    <div className="w-full bg-white border border-stone-200/80 rounded-3xl p-6 text-stone-850 shadow-lg my-6 overflow-hidden relative">
      <div className="bg-gradient-to-r from-indigo-500 to-rose-500 h-1.5 absolute top-0 left-0 right-0" />

      <h4 className="text-base md:text-lg font-black text-stone-900 flex items-center gap-2 mb-2">
        <ShieldCheck className="w-5 h-5 text-indigo-600" />
        <span>Mục Tiêu Bài Học: Khám Phá Cơ Chế Exception</span>
      </h4>
      <p className="text-xs text-stone-500 mb-6">
        Hiểu cách sử dụng Exception (Ngoại lệ) để bảo vệ chương trình không bị sập (crash) đột ngột bằng cách so sánh 2 luồng xử lý dưới đây.
      </p>

      {/* Mode selectors */}
      <div className="flex bg-stone-100/80 p-1 rounded-xl border border-stone-200/60 select-none mb-6 max-w-md">
        <button
          onClick={() => handleModeChange("NO_HANDLING")}
          className={`flex-1 px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
            activeMode === "NO_HANDLING" ? "bg-white text-rose-700 shadow-sm border border-stone-250/20" : "text-stone-500 hover:text-stone-800"
          }`}
        >
          Không xử lý lỗi (Crash app)
        </button>
        <button
          onClick={() => handleModeChange("WITH_HANDLING")}
          className={`flex-1 px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
            activeMode === "WITH_HANDLING" ? "bg-white text-emerald-700 shadow-sm border border-stone-250/20" : "text-stone-500 hover:text-stone-800"
          }`}
        >
          Có dùng Try-Catch (An toàn)
        </button>
      </div>

      {/* Simulator Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-6">
        {/* Source Code Card */}
        <div className="lg:col-span-6 bg-stone-50/60 p-5 rounded-2xl border border-stone-200/80 flex flex-col justify-between shadow-inner">
          <div>
            <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block mb-3 font-mono">
              Mã nguồn Java mô phỏng
            </span>

            {activeMode === "NO_HANDLING" ? (
              <pre className="p-3 bg-stone-900 border border-stone-850 rounded-xl font-mono text-[11px] leading-relaxed text-rose-100 shadow-md">
                <div className={currentStep === 1 ? "text-yellow-300 font-bold bg-yellow-950/40 px-1.5 py-0.5 rounded border border-yellow-800/30" : "px-1.5 py-0.5"}>
                  {`System.out.println("Bắt đầu chạy...");`}
                </div>
                <div className={currentStep === 2 ? "text-red-400 font-bold bg-red-950/40 px-1.5 py-0.5 rounded border border-red-800/30 animate-pulse" : "px-1.5 py-0.5"}>
                  {`int data = 10 / 0; // ❌ Gây lỗi chia cho 0!`}
                </div>
                <div className="px-1.5 py-0.5 text-stone-500 line-through">
                  {`System.out.println("Lệnh này không được chạy");`}
                </div>
              </pre>
            ) : (
              <pre className="p-3 bg-stone-900 border border-stone-850 rounded-xl font-mono text-[11px] leading-relaxed text-emerald-100 shadow-md">
                <div className="px-1.5 py-0.5 text-stone-400">{`try {`}</div>
                <div className={currentStep === 1 ? "text-yellow-300 font-bold bg-yellow-950/40 px-1.5 py-0.5 rounded border border-yellow-800/30" : "px-1.5 py-0.5 pl-6"}>
                  {`System.out.println("Bắt đầu chạy...");`}
                </div>
                <div className={currentStep === 2 ? "text-yellow-300 font-bold bg-yellow-950/40 px-1.5 py-0.5 rounded border border-yellow-800/30 pl-6" : "px-1.5 py-0.5 pl-6"}>
                  {`int data = 10 / 0; // ⚠️ Ngoại lệ xảy ra!`}
                </div>
                <div className="px-1.5 py-0.5 text-stone-400">{`} catch (ArithmeticException e) {`}</div>
                <div className={currentStep === 3 ? "text-yellow-300 font-bold bg-yellow-950/40 px-1.5 py-0.5 rounded border border-yellow-800/30 pl-6" : "px-1.5 py-0.5 pl-6"}>
                  {`System.out.println("Lỗi chia cho 0");`}
                </div>
                <div className="px-1.5 py-0.5 text-stone-400">{`}`}</div>
                <div className={currentStep === 3 ? "text-emerald-400 font-bold bg-emerald-950/40 px-1.5 py-0.5 rounded border border-emerald-800/30" : "px-1.5 py-0.5"}>
                  {`System.out.println("Chương trình chạy tiếp...");`}
                </div>
              </pre>
            )}
          </div>

          <div className="mt-4 flex gap-2">
            <button
              onClick={handleNextStep}
              disabled={(activeMode === "NO_HANDLING" && currentStep >= 2) || (activeMode === "WITH_HANDLING" && currentStep >= 3)}
              className="flex-1 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md shadow-indigo-500/10 hover:shadow-indigo-500/20 transition-all disabled:opacity-50 select-none hover:scale-[1.02] cursor-pointer flex items-center justify-center gap-1.5"
            >
              <Play className="w-3.5 h-3.5" />
              <span>Chạy bước tiếp theo</span>
            </button>
            <button
              onClick={handleReset}
              className="p-2 bg-stone-100 hover:bg-stone-200 text-stone-600 rounded-xl border border-stone-200/60 transition-all select-none cursor-pointer shadow-sm hover:scale-[1.02]"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Output Console Log Card */}
        <div className="lg:col-span-6 bg-stone-50/60 p-5 rounded-2xl border border-stone-200/80 flex flex-col justify-between shadow-inner">
          <div className="space-y-4">
            <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block font-mono">
              Trạng thái máy ảo JVM & Console Output
            </span>

            <div className="p-3.5 bg-stone-900 border border-stone-850 rounded-xl font-mono text-xs min-h-[140px] space-y-1.5 shadow-md overflow-y-auto">
              {logs.length > 0 ? (
                logs.map((line, idx) => {
                  let color = "text-stone-400";
                  if (line.startsWith("❌") || line.startsWith("💥")) color = "text-red-400 font-bold";
                  if (line.startsWith("⚠️")) color = "text-amber-400";
                  if (line.startsWith("🛡️")) color = "text-indigo-400 font-bold";
                  if (line.startsWith("✅")) color = "text-emerald-400 font-bold";
                  if (line.startsWith("Console:")) color = "text-emerald-300";
                  return (
                    <div key={idx} className={color}>
                      {line}
                    </div>
                  );
                })
              ) : (
                <div className="text-stone-600 italic text-[11px]">Bấm 'Chạy bước tiếp theo' để xem tiến trình chạy của JVM...</div>
              )}
            </div>

            {/* Status indicator */}
            <div className="flex items-center gap-2 text-xs font-bold">
              <span className="text-stone-450 font-mono text-[10px] uppercase">Trạng thái App:</span>
              {status === "idle" && (
                <span className="px-2 py-0.5 bg-stone-100 border border-stone-250/30 text-stone-600 rounded-md">Chưa bắt đầu</span>
              )}
              {status === "running" && (
                <span className="px-2 py-0.5 bg-indigo-50 border border-indigo-200 text-indigo-700 rounded-md animate-pulse">Đang hoạt động</span>
              )}
              {status === "crashed" && (
                <span className="px-2 py-0.5 bg-rose-50 border border-rose-200 text-rose-700 rounded-md flex items-center gap-1">
                  <AlertOctagon className="w-3.5 h-3.5 text-rose-600" />
                  Bị Sập (Crashed)
                </span>
              )}
              {status === "success" && (
                <span className="px-2 py-0.5 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-md">An toàn (Recovered)</span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Memo Alert */}
      <div className="bg-indigo-50/60 border border-indigo-200/80 rounded-2xl p-4 flex gap-3 items-start shadow-sm">
        <Info className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
        <div>
          <span className="text-xs font-bold text-indigo-900 font-mono uppercase tracking-wider block">
            📌 Điểm Ghi Nhớ Cốt Lõi
          </span>
          <p className="text-xs text-indigo-700 mt-1 leading-relaxed">
            Exception là cơ chế <strong>xử lý lỗi lúc runtime (khi chương trình đang chạy)</strong>, không phải lỗi cú pháp (compile error) mà trình biên dịch bắt được. Xử lý Exception tốt giúp phần mềm bền bỉ và không bị dừng hoạt động bất ngờ trước người dùng.
          </p>
        </div>
      </div>
    </div>
  );
}
