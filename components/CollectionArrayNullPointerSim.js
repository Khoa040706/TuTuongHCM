"use client";
import React, { useState } from "react";
import { AlertCircle, ArrowRight, CheckCircle2, Cpu, HelpCircle, Layers, Play } from "lucide-react";

export default function CollectionArrayNullPointerSim() {
  const [activeTab, setActiveTab] = useState("WRONG"); // "WRONG" | "RIGHT"
  const [simStep, setSimStep] = useState(0); // 0: idle, 1: declared array container, 2: accessing/allocating, 3: completed/error
  const [log, setLog] = useState("Chọn tab và nhấn 'Chạy thử nghiệm' để xem bộ nhớ Heap.");

  const runSim = () => {
    setSimStep(1);
    setLog("Bước 1: Khởi tạo mảng container: Point[] array = new Point[3]. Tạo mảng 3 chỗ chứa null ở Heap.");

    if (activeTab === "WRONG") {
      setTimeout(() => {
        setSimStep(2);
        setLog("Bước 2: Vòng lặp chạy i = 0. Gọi lệnh 'array[0].setLocation(1,2)'.");
      }, 1200);

      setTimeout(() => {
        setSimStep(3);
        setLog("CRASH! JVM ném NullPointerException vì phần tử array[0] đang trỏ tới null (chưa có đối tượng Point nào thực sự tồn tại).");
      }, 2400);
    } else {
      // Correct
      setTimeout(() => {
        setSimStep(2);
        setLog("Bước 2: Chạy 'array[0] = new Point();'. Khởi tạo đối tượng Point thực tế ở Heap và gán vào chỉ số 0.");
      }, 1200);

      setTimeout(() => {
        setSimStep(3);
        setLog("Bước 3: Gọi 'array[0].setLocation(1,2)'. Thiết lập tọa độ thành công vì đối tượng Point đã được khởi tạo.");
      }, 2400);
    }
  };

  const handleReset = () => {
    setSimStep(0);
    setLog("Chọn tab và nhấn 'Chạy thử nghiệm' để xem bộ nhớ Heap.");
  };

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-100 shadow-xl my-6 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-amber-400 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-rose-400" />
            <span>Giả Lập Lỗi NullPointerException Mảng Đối Tượng</span>
          </h4>
          <p className="text-xs text-slate-400 mt-1">
            Học tập cách khởi tạo mảng đối tượng chuẩn xác để tránh bẫy NullPointerException
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex bg-slate-950 p-1 rounded-lg border border-slate-800 select-none">
          <button
            onClick={() => { setActiveTab("WRONG"); handleReset(); }}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
              activeTab === "WRONG" ? "bg-rose-600 text-white shadow" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Cách Viết SAI (Lỗi Null)
          </button>
          <button
            onClick={() => { setActiveTab("RIGHT"); handleReset(); }}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
              activeTab === "RIGHT" ? "bg-emerald-600 text-white shadow" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Cách Viết ĐÚNG
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-6">
        {/* Code representation */}
        <div className="lg:col-span-5 bg-slate-950 p-5 rounded-xl border border-slate-850 flex flex-col justify-between">
          <div>
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-3 font-mono">
              Mã nguồn Java
            </span>

            {activeTab === "WRONG" ? (
              <pre className="p-3 bg-slate-900 border border-slate-850 rounded-lg font-mono text-[11px] leading-relaxed text-slate-350 overflow-x-auto">
                <div>{`Point[] array = new Point[3];`}</div>
                <div>{`for (int i=0; i<array.length; i++) {`}
                  <div className={simStep === 2 || simStep === 3 ? "text-rose-400 font-bold bg-rose-950/20 px-1 rounded animate-pulse" : ""}>
                    {`    array[i].setLocation(1,2); // Lỗi!`}
                  </div>
                </div>
                <div>{`}`}</div>
              </pre>
            ) : (
              <pre className="p-3 bg-slate-900 border border-slate-850 rounded-lg font-mono text-[11px] leading-relaxed text-slate-350 overflow-x-auto">
                <div>{`Point[] array = new Point[3];`}</div>
                <div>{`for (int i=0; i<array.length; i++) {`}
                  <div className={simStep === 2 ? "text-emerald-400 font-bold bg-emerald-950/20 px-1 rounded" : ""}>
                    {`    array[i] = new Point(); // Khởi tạo`}
                  </div>
                  <div className={simStep === 3 ? "text-emerald-400 font-bold bg-emerald-950/20 px-1 rounded" : ""}>
                    {`    array[i].setLocation(1,2);`}
                  </div>
                </div>
                <div>{`}`}</div>
              </pre>
            )}
          </div>

          <div className="mt-4 flex gap-2">
            <button
              onClick={runSim}
              disabled={simStep > 0 && simStep < 3}
              className="flex-1 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-lg transition-all disabled:opacity-50 select-none"
            >
              Chạy thử nghiệm
            </button>
            <button
              onClick={handleReset}
              className="px-3 py-2 bg-slate-800 hover:bg-slate-750 text-xs font-semibold rounded-lg border border-slate-700 transition-all select-none"
            >
              Đặt lại
            </button>
          </div>
        </div>

        {/* RAM memory visualization Heap */}
        <div className="lg:col-span-7 bg-slate-950 p-5 rounded-xl border border-slate-850 flex flex-col justify-between min-h-[220px]">
          <div>
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-3 font-mono">
              Vùng nhớ Heap (Point[] array)
            </span>

            {simStep >= 1 ? (
              <div className="space-y-4">
                {/* Main container array */}
                <div className="p-3 bg-slate-900 rounded-lg border border-slate-850 flex items-center gap-3">
                  <span className="text-[9px] text-slate-500 font-mono font-bold">Mảng Point[]</span>
                  <div className="flex gap-2 font-mono text-[10px]">
                    {[0, 1, 2].map((idx) => {
                      const hasObject = activeTab === "RIGHT" && simStep >= 2 && idx === 0;
                      return (
                        <div
                          key={idx}
                          className={`p-2 rounded border text-center min-w-[56px] transition-all duration-300 ${
                            activeTab === "WRONG" && simStep === 3 && idx === 0
                              ? "bg-rose-950/40 border-rose-500 text-rose-300 scale-105"
                              : hasObject
                              ? "bg-emerald-950/40 border-emerald-500 text-emerald-300"
                              : "bg-slate-950 border-slate-800 text-slate-600"
                          }`}
                        >
                          <div>[{idx}]</div>
                          <div className="font-bold mt-1">
                            {hasObject ? "@Point_0" : "null"}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Point Object allocated on Heap (Right tab only) */}
                {activeTab === "RIGHT" && simStep >= 2 && (
                  <div className="p-3 bg-emerald-950/20 border border-emerald-500/30 rounded-lg font-mono text-[10px] text-emerald-300 flex justify-between items-center animate-fade-in">
                    <span>Đối tượng Point @Point_0</span>
                    <span>x = {simStep === 3 ? 1 : 0}, y = {simStep === 3 ? 2 : 0}</span>
                  </div>
                )}

                {/* Exception banner (Wrong tab only) */}
                {activeTab === "WRONG" && simStep === 3 && (
                  <div className="p-3 bg-rose-950/40 border border-rose-900/60 text-rose-300 rounded-lg font-mono text-[10px] animate-pulse">
                    <strong>java.lang.NullPointerException</strong>
                    <br />
                    Cannot invoke "java.awt.Point.setLocation(int, int)" because "array[i]" is null
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-12 text-slate-700 font-mono text-xs">
                Chờ khởi chạy chương trình...
              </div>
            )}
          </div>

          <div className="mt-4 p-3 bg-slate-900 border border-slate-850 rounded-lg text-xs leading-relaxed text-slate-300 font-mono">
            {log}
          </div>
        </div>
      </div>
    </div>
  );
}
