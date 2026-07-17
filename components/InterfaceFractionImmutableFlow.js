"use client";
import React, { useState } from "react";
import { ArrowRight, HelpCircle, Layers, Link2, RefreshCw, Sparkles } from "lucide-react";

export default function InterfaceFractionImmutableFlow() {
  const [activeTab, setActiveTab] = useState("chaining"); // "chaining" | "immutable"
  
  // Tab 1 state: Constructor Chaining
  const [chainStep, setChainStep] = useState(0); // 0: idle, 1: called no-arg, 2: delegating, 3: in 2-arg, 4: complete
  const [chainLog, setChainLog] = useState("Nhấn 'Chạy new Fraction()' để bắt đầu luồng Constructor Chaining.");

  // Tab 2 state: Immutable Flow
  const [opStep, setOpStep] = useState(0); // 0: idle, 1: checking inputs, 2: creating new object, 3: completed
  const [opLog, setOpLog] = useState("Nhấn 'Thực hiện cộng f1.add(f2)' để xem cách cấp phát bộ nhớ bất biến.");

  const runChain = () => {
    setChainStep(1);
    setChainLog("Bước 1: JVM nhận lệnh gọi 'new Fraction()'. Chạy constructor mặc định không tham số.");
    
    setTimeout(() => {
      setChainStep(2);
      setChainLog("Bước 2: Từ khóa 'this(1, 1)' chuyển hướng lời gọi constructor chaining.");
    }, 1200);

    setTimeout(() => {
      setChainStep(3);
      setChainLog("Bước 3: Nhảy vào constructor 2 tham số 'Fraction(1, 1)' để thực hiện thiết lập giá trị.");
    }, 2400);

    setTimeout(() => {
      setChainStep(4);
      setChainLog("Bước 4: Hoàn tất! Đối tượng phân số mới được tạo với giá trị mặc định là 1/1.");
    }, 3600);
  };

  const resetChain = () => {
    setChainStep(0);
    setChainLog("Nhấn 'Chạy new Fraction()' để bắt đầu luồng Constructor Chaining.");
  };

  const runOp = () => {
    setOpStep(1);
    setOpLog("Bước 1: Đọc tử số/mẫu số từ f1 (2/3) và f2 (1/4). Hai ô nhớ f1, f2 hoàn toàn được bảo toàn.");

    setTimeout(() => {
      setOpStep(2);
      setOpLog("Bước 2: Cấp phát một ô nhớ đối tượng Fraction mới (Fraction@HeapRef_3) trên Heap để chứa kết quả.");
    }, 1500);

    setTimeout(() => {
      setOpStep(3);
      setOpLog("Bước 3: Gán kết quả 11/12 vào ô nhớ mới và gán tham chiếu cho biến 'sum'.");
    }, 3000);
  };

  const resetOp = () => {
    setOpStep(0);
    setOpLog("Nhấn 'Thực hiện cộng f1.add(f2)' để xem cách cấp phát bộ nhớ bất biến.");
  };

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-100 shadow-xl my-6 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">
            Constructor Chaining & Đối Tượng Bất Biến (Immutable)
          </h4>
          <p className="text-xs text-slate-400 mt-1">
            Minh họa luồng chạy của hàm khởi tạo liên chuỗi và cơ chế cấp phát ô nhớ bất biến
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex bg-slate-950 p-1 rounded-lg border border-slate-800 select-none">
          <button
            onClick={() => setActiveTab("chaining")}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
              activeTab === "chaining" ? "bg-indigo-600 text-white shadow" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Constructor Chaining
          </button>
          <button
            onClick={() => setActiveTab("immutable")}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
              activeTab === "immutable" ? "bg-indigo-600 text-white shadow" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Cơ chế Bất Biến (Immutable)
          </button>
        </div>
      </div>

      {activeTab === "chaining" ? (
        /* Tab 1 content: Constructor Chaining */
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch mb-6">
            {/* Code snippets */}
            <div className="bg-slate-950 p-5 rounded-xl border border-slate-850 flex flex-col justify-between">
              <div>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-3 font-mono">
                  Mã nguồn Java Khởi tạo
                </span>
                
                <div className="space-y-2 font-mono text-xs">
                  <div className={`p-2.5 rounded border transition-colors ${
                    chainStep === 1 || chainStep === 2 ? "bg-indigo-950/40 border-indigo-500 text-indigo-300 font-semibold" : "bg-slate-900 border-slate-850 text-slate-450"
                  }`}>
                    <code>{`public Fraction() {\n    this(1, 1); // Constructor Chaining\n}`}</code>
                  </div>

                  <div className={`p-2.5 rounded border transition-colors ${
                    chainStep === 3 ? "bg-indigo-950/40 border-indigo-500 text-indigo-300 font-semibold" : "bg-slate-900 border-slate-850 text-slate-450"
                  }`}>
                    <code>{`public Fraction(int numer, int denom) {\n    setNumer(numer);\n    setDenom(denom);\n}`}</code>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex gap-3">
                <button
                  onClick={runChain}
                  disabled={chainStep > 0 && chainStep < 4}
                  className="flex-1 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-lg disabled:opacity-50 transition-all select-none"
                >
                  Chạy new Fraction()
                </button>
                <button
                  onClick={resetChain}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-xs font-semibold rounded-lg border border-slate-700 transition-all select-none"
                >
                  Đặt lại
                </button>
              </div>
            </div>

            {/* Visual simulation flow chart */}
            <div className="bg-slate-950 p-5 rounded-xl border border-slate-850 flex flex-col justify-between min-h-[220px]">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-3 font-mono">
                Sơ đồ chạy thực tế trong bộ nhớ
              </span>

              <div className="flex flex-col sm:flex-row justify-around items-center gap-4 py-4 font-mono text-[11px] relative">
                {/* Node 1 */}
                <div className={`p-3 rounded-lg border transition-all ${
                  chainStep >= 1 ? "bg-indigo-950/40 border-indigo-500 text-indigo-300 shadow-md shadow-indigo-500/10" : "bg-slate-900 border-slate-850 text-slate-500"
                }`}>
                  Fraction()
                </div>

                {/* Arrow 1 */}
                <ArrowRight className={`w-4 h-4 transition-colors ${chainStep >= 2 ? "text-indigo-400" : "text-slate-800"}`} />

                {/* Node 2 */}
                <div className={`p-3 rounded-lg border transition-all ${
                  chainStep >= 3 ? "bg-indigo-950/40 border-indigo-500 text-indigo-300 shadow-md shadow-indigo-500/10" : "bg-slate-900 border-slate-850 text-slate-500"
                }`}>
                  Fraction(1, 1)
                </div>

                {/* Arrow 2 */}
                <ArrowRight className={`w-4 h-4 transition-colors ${chainStep >= 4 ? "text-indigo-400" : "text-slate-800"}`} />

                {/* Node 3 */}
                <div className={`p-3 rounded-lg border transition-all flex items-center gap-1.5 ${
                  chainStep === 4 ? "bg-emerald-950/40 border-emerald-500 text-emerald-300 shadow-md shadow-emerald-500/10" : "bg-slate-900 border-slate-850 text-slate-500"
                }`}>
                  {chainStep === 4 && <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-bounce" />}
                  <span>Object 1/1</span>
                </div>
              </div>

              <div className="p-3 bg-slate-900 border border-slate-850 rounded-lg text-xs leading-relaxed text-slate-300 font-mono">
                {chainLog}
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Tab 2 content: Immutable Flow */
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch mb-6">
            {/* Allocator visual */}
            <div className="bg-slate-950 p-5 rounded-xl border border-slate-850 flex flex-col justify-between">
              <div>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-3 font-mono">
                  Phân bổ Heap Memory (Immutable)
                </span>

                <div className="space-y-3 font-mono text-xs">
                  {/* Object f1 */}
                  <div className={`p-3 rounded-lg border flex justify-between items-center transition-all ${
                    opStep >= 1 ? "bg-indigo-950/40 border-indigo-500 text-indigo-300" : "bg-slate-900 border-slate-850 text-slate-400"
                  }`}>
                    <span>Đối tượng f1 (Fraction@Heap_1)</span>
                    <span className="font-bold">2/3 (Bất biến)</span>
                  </div>

                  {/* Object f2 */}
                  <div className={`p-3 rounded-lg border flex justify-between items-center transition-all ${
                    opStep >= 1 ? "bg-indigo-950/40 border-indigo-500 text-indigo-300" : "bg-slate-900 border-slate-850 text-slate-400"
                  }`}>
                    <span>Đối tượng f2 (Fraction@Heap_2)</span>
                    <span className="font-bold">1/4 (Bất biến)</span>
                  </div>

                  {/* Allocated Object sum */}
                  <div className={`p-3 rounded-lg border flex justify-between items-center transition-all duration-700 ${
                    opStep === 3
                      ? "bg-emerald-950/40 border-emerald-500 text-emerald-300 shadow-lg shadow-emerald-500/10 scale-105"
                      : opStep === 2
                      ? "bg-amber-950/30 border-amber-500/50 text-amber-300 animate-pulse"
                      : "bg-slate-900/10 border-slate-900 text-slate-600"
                  }`}>
                    <span>{opStep >= 2 ? "Cấp phát sum (Fraction@Heap_3)" : "Chờ cấp phát..."}</span>
                    <span className="font-bold">{opStep >= 3 ? "11/12 (Mới)" : opStep === 2 ? "Đang tạo..." : "--/--"}</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex gap-3">
                <button
                  onClick={runOp}
                  disabled={opStep > 0 && opStep < 3}
                  className="flex-1 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-lg disabled:opacity-50 transition-all select-none"
                >
                  Thực hiện cộng f1.add(f2)
                </button>
                <button
                  onClick={resetOp}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-xs font-semibold rounded-lg border border-slate-700 transition-all select-none"
                >
                  Đặt lại
                </button>
              </div>
            </div>

            {/* Academic explanations */}
            <div className="bg-slate-950 p-5 rounded-xl border border-slate-850 flex flex-col justify-between">
              <div>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-3 font-mono">
                  Tại sao Fraction là Immutable ADT?
                </span>

                <div className="space-y-3 text-xs leading-relaxed text-slate-300">
                  <p>
                    * Khác với bài toán <strong>Complex</strong> ở Phần III (thay đổi trực tiếp thuộc tính <code>real</code> và <code>imag</code> của chính nó), phương thức của <code>Fraction</code> trả về đối tượng <strong>FractionI mới</strong>.
                  </p>
                  <p>
                    * Thiết kế bất biến này đảm bảo tính toàn vẹn dữ liệu cực tốt, tránh hiện tượng các luồng dữ liệu khác nhau vô tình thay đổi giá trị của đối tượng đang dùng chung.
                  </p>
                </div>
              </div>

              <div className="p-3 bg-slate-900 border border-slate-850 rounded-lg text-xs leading-relaxed text-slate-300 font-mono mt-4">
                {opLog}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
