"use client";

import React, { useState } from "react";
import { Play, Laptop, Cpu, Server, Clock, AlertTriangle, RotateCcw, CheckCircle } from "lucide-react";
import { highlightJavaVsCode } from "../utils/javaSyntaxHighlighter";

export default function RuntimeSimulatorDemo() {
  const [activeMachine, setActiveMachine] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [results, setResults] = useState({});

  const machines = [
    {
      id: "machineA",
      name: "Máy Tính Cũ (Core 2 Duo, 2.0 GHz)",
      icon: Laptop,
      baseMs: 45,
      variance: 10,
      color: "text-amber-700 bg-amber-50 border-amber-300"
    },
    {
      id: "machineB",
      name: "Máy Văn Phòng (Core i5, 3.2 GHz)",
      icon: Cpu,
      baseMs: 18,
      variance: 5,
      color: "text-blue-700 bg-blue-50 border-blue-300"
    },
    {
      id: "machineC",
      name: "Máy Trạm Đồ Họa (Apple M3 Max / Xeon)",
      icon: Server,
      baseMs: 4,
      variance: 2,
      color: "text-emerald-700 bg-emerald-50 border-emerald-300"
    }
  ];

  const handleRunMachine = (machine) => {
    setActiveMachine(machine.id);
    setIsRunning(true);

    setTimeout(() => {
      const randomOffset = Math.floor(Math.random() * machine.variance) - Math.floor(machine.variance / 2);
      const measuredMs = Math.max(1, machine.baseMs + randomOffset);
      setResults((prev) => ({
        ...prev,
        [machine.id]: measuredMs
      }));
      setIsRunning(false);
    }, 600);
  };

  const timeTestCode = `// TimeTest.java
public class TimeTest {
    public static void main(String[] args) {
        long startTime = System.currentTimeMillis();
        long total = 0;
        for (int i = 0; i < 10000000; i++) {
            total += i;
        }
        long stopTime = System.currentTimeMillis();
        long elapsedTime = stopTime - startTime;
        System.out.println(elapsedTime); // Đo thời gian chạy thực tế (ms)
    }
}`;

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl p-5 md:p-7 shadow-sm my-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-5">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-2.5 py-1 rounded-md border border-rose-200">
            Mục 2.3 — Thử nghiệm Đo Thời Gian Chạy Thực Tế
          </span>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-1">
            Đo Bằng Runtime Thực Tế (TimeTest.java) Có Đáng Tin Cậy?
          </h3>
          <p className="text-xs text-slate-500">
            Hãy thử bấm chạy cùng 1 đoạn code Java <code>for 10 triệu vòng</code> trên 3 cấu hình máy tính khác nhau
          </p>
        </div>

        <button
          onClick={() => setResults({})}
          className="flex items-center gap-1 text-xs font-mono text-slate-500 hover:text-slate-900 p-2 rounded-xl bg-slate-100 cursor-pointer self-start sm:self-auto"
        >
          <RotateCcw className="w-3.5 h-3.5" /> Reset
        </button>
      </div>

      {/* Code & Machine Simulator Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-5">
        {/* Java Code Block */}
        <div className="lg:col-span-6 bg-slate-950 rounded-2xl border border-slate-800 p-4 flex flex-col justify-between">
          <div className="text-xs font-mono text-slate-400 pb-2 border-b border-slate-800 flex items-center justify-between">
            <span>TimeTest.java</span>
            <span className="text-amber-400">10,000,000 iterations</span>
          </div>
          <pre className="text-xs font-mono overflow-x-auto py-2">
            <code dangerouslySetInnerHTML={{ __html: highlightJavaVsCode(timeTestCode) }} />
          </pre>
          <div className="text-[11px] font-mono text-slate-500 pt-2 border-t border-slate-800">
            Đo bằng <code>System.currentTimeMillis()</code>
          </div>
        </div>

        {/* 3 Machines Benchmark */}
        <div className="lg:col-span-6 space-y-3 flex flex-col justify-between">
          {machines.map((m) => {
            const IconComp = m.icon;
            const res = results[m.id];
            const isCurrentlyRunning = isRunning && activeMachine === m.id;

            return (
              <div
                key={m.id}
                className={`p-4 rounded-2xl border transition-all ${m.color} flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white shadow-xs">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs md:text-sm font-bold text-slate-900">{m.name}</h4>
                    <span className="text-[11px] font-mono text-slate-500">Benchmark Java JVM</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 self-end sm:self-auto">
                  {res ? (
                    <div className="font-mono text-sm font-black bg-white px-3 py-1.5 rounded-xl border border-current shadow-xs flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-slate-700" />
                      <span>{res} ms</span>
                    </div>
                  ) : null}

                  <button
                    onClick={() => handleRunMachine(m)}
                    disabled={isRunning}
                    className="px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-mono text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    {isCurrentlyRunning ? "Đang chạy..." : "Chạy thử"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Critical Conclusion Alert */}
      <div className="bg-rose-50 border-2 border-rose-200 rounded-2xl p-4 flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
        <div className="text-xs text-rose-950 space-y-1">
          <h4 className="font-bold text-rose-900 text-sm">
            ⚠️ Kết luận: Run time thực tế KHÔNG ĐÁNG TIN CẬY để so sánh thuật toán!
          </h4>
          <p className="leading-relaxed">
            Thời gian chạy thực tế phụ thuộc vào <strong>Compiler</strong> (bộ tối ưu hóa), <strong>Phần cứng máy tính</strong> (CPU, RAM), và <strong>Tải công việc hiện tại</strong> của hệ điều hành. Do đó, khoa học máy tính không đo bằng run time mà đo bằng <strong>số lượng phép toán cơ bản (Primitive Operations)</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
