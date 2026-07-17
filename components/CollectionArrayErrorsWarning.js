"use client";
import React, { useState } from "react";
import { AlertCircle, HelpCircle, Layers, Play, RefreshCw, ShieldAlert, Sparkles } from "lucide-react";

export default function CollectionArrayErrorsWarning() {
  const [activeTab, setActiveTab] = useState("out-of-bounds"); // "out-of-bounds" | "returning"
  const [simStep, setSimStep] = useState(0); // 0: idle, 1: i=1 (OK), 2: i=9 (OK), 3: i=10 (CRASH)
  const [log, setLog] = useState("Nhấn 'Chạy code lỗi' để giả lập chạy vòng lặp.");

  const runSim = () => {
    setSimStep(1);
    setLog("i = 1: Đọc numbers[1] ➔ Hợp lệ (nằm trong khoảng 0..9).");

    setTimeout(() => {
      setSimStep(2);
      setLog("i = 9: Đọc numbers[9] ➔ Hợp lệ (phần tử cuối cùng).");
    }, 1200);

    setTimeout(() => {
      setSimStep(3);
      setLog("CRASH! i = 10: numbers[10] vượt quá chỉ số tối đa (9) ➔ JVM lập tức ném ra ngoại lệ ArrayIndexOutOfBoundsException!");
    }, 2400);
  };

  const resetSim = () => {
    setSimStep(0);
    setLog("Nhấn 'Chạy code lỗi' để giả lập chạy vòng lặp.");
  };

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-100 shadow-xl my-6 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-amber-400 flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-rose-400" />
            <span>Lỗi Tràn Chỉ Số Mảng (ArrayIndexOutOfBoundsException)</span>
          </h4>
          <p className="text-xs text-slate-400 mt-1">
            Minh họa lỗi tràn bộ nhớ khi duyệt vượt quá kích thước hợp lệ của mảng
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex bg-slate-950 p-1 rounded-lg border border-slate-800 select-none">
          <button
            onClick={() => { setActiveTab("out-of-bounds"); resetSim(); }}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
              activeTab === "out-of-bounds" ? "bg-rose-600 text-white shadow" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Lỗi Tràn Chỉ Số
          </button>
          <button
            onClick={() => setActiveTab("returning")}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
              activeTab === "returning" ? "bg-rose-600 text-white shadow" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Hàm Trả Về Mảng
          </button>
        </div>
      </div>

      {activeTab === "out-of-bounds" ? (
        /* Tab 1: Array Index Out of Bounds */
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch mb-6">
            {/* Code panels */}
            <div className="bg-slate-950 p-5 rounded-xl border border-slate-850 flex flex-col justify-between">
              <div>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-3 font-mono">
                  Mã nguồn lỗi kinh điển
                </span>

                <pre className="p-3 bg-slate-900 border border-slate-850 rounded-lg font-mono text-[11px] leading-relaxed text-slate-350 overflow-x-auto">
                  <div className="text-slate-500">{`int[] numbers = new int[10];`}</div>
                  <div className={simStep > 0 ? "text-rose-400 font-bold bg-rose-950/20 px-1 rounded" : ""}>
                    {`for (int i = 1; i <= numbers.length; i++) {`}
                  </div>
                  <div className={simStep === 3 ? "text-rose-500 font-bold bg-rose-900/40 px-1 rounded animate-pulse" : ""}>
                    {`    System.out.println(numbers[i]); // Sẽ CRASH khi i = 10`}
                  </div>
                  <div>{`}`}</div>
                </pre>
              </div>

              <div className="mt-4 flex gap-2">
                <button
                  onClick={runSim}
                  disabled={simStep > 0 && simStep < 3}
                  className="flex-1 px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-lg transition-all disabled:opacity-50 select-none"
                >
                  Chạy code lỗi
                </button>
                <button
                  onClick={resetSim}
                  className="px-3 py-2 bg-slate-800 hover:bg-slate-750 text-xs font-semibold rounded-lg border border-slate-700 transition-all select-none"
                >
                  Đặt lại
                </button>
              </div>
            </div>

            {/* RAM visualization */}
            <div className={`p-5 rounded-xl border flex flex-col justify-between transition-colors duration-500 ${
              simStep === 3 ? "bg-rose-950/20 border-rose-500/30" : "bg-slate-950 border-slate-850"
            }`}>
              <div>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-3 font-mono">
                  Bản đồ ô nhớ và trạng thái ngoại lệ
                </span>

                {/* Elements strip */}
                <div className="flex gap-1.5 p-3 bg-slate-900 rounded-lg border border-slate-850 overflow-x-auto font-mono text-[10px]">
                  {Array.from({ length: 10 }).map((_, idx) => {
                    const isPassed = simStep >= 2 && idx === 9;
                    const isCurrent = simStep === 1 && idx === 1;
                    return (
                      <div
                        key={idx}
                        className={`p-2 rounded border text-center min-w-[36px] ${
                          isCurrent 
                            ? "bg-indigo-950/40 border-indigo-500 text-indigo-300"
                            : isPassed
                            ? "bg-slate-950 border-slate-850 text-slate-350"
                            : "bg-slate-950 border-slate-850 text-slate-600"
                        }`}
                      >
                        <span className="block opacity-65">[{idx}]</span>
                        <span className="font-bold">0</span>
                      </div>
                    );
                  })}

                  {/* Crash Slot [10] */}
                  <div className={`p-2 rounded border text-center min-w-[36px] transition-all duration-300 ${
                    simStep === 3 
                      ? "bg-rose-900 border-rose-500 text-white scale-110 shadow-lg shadow-rose-500/20 animate-bounce" 
                      : "bg-slate-950 border-dashed border-slate-850 text-slate-700"
                  }`}>
                    <span className="block opacity-65">[10]</span>
                    <span className="font-bold">❌</span>
                  </div>
                </div>
              </div>

              {simStep === 3 && (
                <div className="mt-4 p-3 bg-rose-950/40 border border-rose-900/60 text-rose-300 rounded-lg font-mono text-[10px] leading-relaxed">
                  <strong>Exception: java.lang.ArrayIndexOutOfBoundsException:</strong>
                  <br />
                  Index 10 out of bounds for length 10
                </div>
              )}

              <div className="mt-4 p-3 bg-slate-900 border border-slate-850 rounded-lg text-xs leading-relaxed text-slate-300 font-mono">
                {log}
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Tab 2: Returning an Array */
        <div className="bg-slate-950 p-5 rounded-xl border border-slate-850">
          <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-3 font-mono">
            Trả về mảng từ phương thức (Return Array)
          </span>

          <pre className="p-4 bg-slate-900 border border-slate-850 rounded-lg font-mono text-xs text-indigo-300 leading-relaxed overflow-x-auto mb-4">
{`public static double[] makeArray(int size, double limit) {
    double[] arr = new double[size]; // Khởi tạo mảng trong hàm
    for (int i=0; i < arr.length; i++) {
        arr[i] = limit/(i+1);
    }
    return arr; // Trả về địa chỉ tham chiếu của mảng
}`}
          </pre>

          <p className="text-xs text-slate-400 leading-relaxed">
            * **Giải thích:** Kiểu dữ liệu trả về của phương thức được định nghĩa là <code>datatype[]</code> (ví dụ: <code>double[]</code>). Khi chạy lệnh <code>return arr;</code>, thực chất JVM chuyển giao địa chỉ tham chiếu của mảng được tạo ở Heap cho biến nhận kết quả ở bên ngoài hàm.
          </p>
        </div>
      )}
    </div>
  );
}
