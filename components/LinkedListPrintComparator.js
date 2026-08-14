"use client";

import React, { useState } from "react";
import { ArrowRight, RotateCcw, Play, CheckCircle2, ArrowDown, ArrowUp, Code2 } from "lucide-react";
import { highlightJavaVsCode } from "../utils/javaSyntaxHighlighter";

export default function LinkedListPrintComparator() {
  const [mode, setMode] = useState("forward"); // "forward" or "reverse"
  const [currentStep, setCurrentStep] = useState(0);

  const listNodes = [
    { id: 1, val: "10" },
    { id: 2, val: "20" },
    { id: 3, val: "30" },
    { id: 4, val: "40" }
  ];

  // Steps for Forward print (print then recursive call)
  const forwardSteps = [
    { nodeIdx: 0, phase: "print", output: ["10"], log: "In '10' trước -> gọi printLL(n.next [20])", desc: "print(n.value) chạy TRƯỚC lời gọi đệ quy" },
    { nodeIdx: 1, phase: "print", output: ["10", "20"], log: "In '20' -> gọi printLL(n.next [30])", desc: "print(n.value) chạy TRƯỚC lời gọi đệ quy" },
    { nodeIdx: 2, phase: "print", output: ["10", "20", "30"], log: "In '30' -> gọi printLL(n.next [40])", desc: "print(n.value) chạy TRƯỚC lời gọi đệ quy" },
    { nodeIdx: 3, phase: "print", output: ["10", "20", "30", "40"], log: "In '40' -> gọi printLL(n.next [null])", desc: "print(n.value) chạy TRƯỚC lời gọi đệ quy" },
    { nodeIdx: 4, phase: "base", output: ["10", "20", "30", "40"], log: "n == null -> Chạm Base Case -> Kết thúc!", desc: "Base case: n == null, thoát đệ quy." }
  ];

  // Steps for Reverse print (recursive call then print)
  const reverseSteps = [
    { nodeIdx: 0, phase: "wind", output: [], log: "Chưa in! Gọi printRev(n.next [20]) đưa vào Stack", desc: "Lời gọi đệ quy chạy TRƯỚC lệnh print" },
    { nodeIdx: 1, phase: "wind", output: [], log: "Chưa in! Gọi printRev(n.next [30]) đưa vào Stack", desc: "Lời gọi đệ quy chạy TRƯỚC lệnh print" },
    { nodeIdx: 2, phase: "wind", output: [], log: "Chưa in! Gọi printRev(n.next [40]) đưa vào Stack", desc: "Lời gọi đệ quy chạy TRƯỚC lệnh print" },
    { nodeIdx: 3, phase: "wind", output: [], log: "Chưa in! Gọi printRev(n.next [null]) đưa vào Stack", desc: "Lời gọi đệ quy chạy TRƯỚC lệnh print" },
    { nodeIdx: 4, phase: "base", output: [], log: "n == null -> Chạm Base Case! Bắt đầu Unwind và in ngược...", desc: "Chạm đáy Base Case, bắt đầu quay lui" },
    { nodeIdx: 3, phase: "print", output: ["40"], log: "Pop node 40 -> In '40'", desc: "Lệnh print được thực thi khi Pop Stack Frame" },
    { nodeIdx: 2, phase: "print", output: ["40", "30"], log: "Pop node 30 -> In '30'", desc: "Lệnh print được thực thi khi Pop Stack Frame" },
    { nodeIdx: 1, phase: "print", output: ["40", "30", "20"], log: "Pop node 20 -> In '20'", desc: "Lệnh print được thực thi khi Pop Stack Frame" },
    { nodeIdx: 0, phase: "print", output: ["40", "30", "20", "10"], log: "Pop node 10 -> In '10' -> Hoàn tất in ngược!", desc: "In ra node đầu tiên cuối cùng!" }
  ];

  const steps = mode === "forward" ? forwardSteps : reverseSteps;
  const current = steps[Math.min(currentStep, steps.length - 1)];

  const forwardCode = `// Example 3: In xuôi
public static void printLL(ListNode n) {
    if (n != null) {
        System.out.print(n.value + " "); // In TRƯỚC
        printLL(n.next);                 // Gọi đệ quy SAU
    }
}`;

  const reverseCode = `// Example 4: In ngược
public static void printRev(ListNode n) {
    if (n != null) {
        printRev(n.next);                // Gọi đệ quy TRƯỚC
        System.out.print(n.value + " "); // In SAU (khi pop)
    }
}`;

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl p-5 md:p-7 shadow-sm my-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-5">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-200">
            Example 3 vs 4 — Đối chiếu Thứ tự Lệnh
          </span>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-1">
            In Danh Sách Liên Kết: Thứ Tự Xuôi vs Thứ Tự Ngược
          </h3>
          <p className="text-xs text-slate-500">
            Chỉ cần đổi vị trí giữa lệnh <code>print</code> và lời gọi đệ quy sẽ đảo ngược hoàn toàn thứ tự xuất ra
          </p>
        </div>

        {/* Mode Selector */}
        <div className="flex items-center gap-1.5 bg-slate-100 p-1.5 rounded-2xl self-start sm:self-auto">
          <button
            onClick={() => {
              setMode("forward");
              setCurrentStep(0);
            }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              mode === "forward"
                ? "bg-white text-indigo-700 shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            In Xuôi (printLL)
          </button>
          <button
            onClick={() => {
              setMode("reverse");
              setCurrentStep(0);
            }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              mode === "reverse"
                ? "bg-white text-violet-700 shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            In Ngược (printRev)
          </button>
        </div>
      </div>

      {/* Visual Linked List Node Chain */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 mb-5">
        <div className="text-xs font-mono text-slate-500 mb-3 flex items-center justify-between">
          <span>DANH SÁCH LIÊN KẾT (LINKED LIST NODES)</span>
          <span className="text-indigo-600 font-bold">Chế độ: {mode === "forward" ? "Xuôi (Forward)" : "Ngược (Reverse)"}</span>
        </div>

        <div className="flex items-center justify-center gap-2 md:gap-3 flex-wrap py-2">
          <span className="text-xs font-mono font-bold text-slate-400">head →</span>
          {listNodes.map((node, idx) => {
            const isActive = current.nodeIdx === idx;
            return (
              <React.Fragment key={node.id}>
                <div
                  className={`px-4 py-3 rounded-xl border font-mono text-sm font-bold transition-all duration-300 flex items-center gap-2 shadow-xs ${
                    isActive
                      ? mode === "forward"
                        ? "bg-indigo-600 text-white border-indigo-700 scale-105 shadow-md ring-2 ring-indigo-300"
                        : "bg-violet-600 text-white border-violet-700 scale-105 shadow-md ring-2 ring-violet-300"
                      : "bg-white text-slate-800 border-slate-300"
                  }`}
                >
                  <span>{node.val}</span>
                  <span className="text-[10px] opacity-60 font-normal">| •</span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </React.Fragment>
            );
          })}
          <div className="px-3 py-2 rounded-xl bg-slate-200 text-slate-500 font-mono text-xs font-bold">
            null
          </div>
        </div>
      </div>

      {/* Stepper Controls & Output Box */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mb-5">
        {/* Output Stream */}
        <div className="md:col-span-6 bg-slate-50/90 text-slate-800 font-mono text-xs p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-2.5 border-b border-slate-200 text-[11px] text-slate-500 mb-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-400 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
                <span className="ml-1 font-bold text-slate-700">Console Output Stream</span>
              </div>
              <span className="bg-white px-2 py-0.5 rounded-md border border-slate-200 text-slate-600 font-semibold">
                Bước {currentStep + 1} / {steps.length}
              </span>
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200/90 min-h-[48px] flex items-center gap-2 shadow-xs">
              <span className="text-emerald-700 font-bold">$ Output:</span>
              {current.output.length === 0 ? (
                <span className="text-slate-400 italic">(chưa có output, đang gọi sâu vào Stack)</span>
              ) : (
                <div className="flex items-center gap-2 flex-wrap">
                  {current.output.map((val, i) => (
                    <span key={i} className="px-2.5 py-0.5 rounded-lg bg-emerald-100 text-emerald-900 font-mono font-bold border border-emerald-300 shadow-xs">
                      {val}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="text-slate-600 text-xs mt-3 pt-2.5 border-t border-slate-200">
            <strong className="text-slate-800">Trạng thái: </strong> {current.log}
          </div>
        </div>

        {/* Stepper Buttons */}
        <div className="md:col-span-6 bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono font-bold text-slate-600 block mb-1">
              HÀNH ĐỘNG HIỆN TẠI
            </span>
            <p className="text-xs text-slate-700 leading-relaxed">
              {current.desc}
            </p>
          </div>

          <div className="flex items-center gap-2 mt-4 pt-3 border-t border-slate-200">
            <button
              onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
              disabled={currentStep === 0}
              className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 disabled:opacity-40 text-slate-700 text-xs font-bold transition cursor-pointer"
            >
              Lùi lại
            </button>
            <button
              onClick={() => setCurrentStep((prev) => Math.min(steps.length - 1, prev + 1))}
              disabled={currentStep === steps.length - 1}
              className="flex-1 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white text-xs font-bold transition shadow-xs cursor-pointer flex items-center justify-center gap-1"
            >
              Bước tiếp theo <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setCurrentStep(0)}
              className="p-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 text-slate-600 transition cursor-pointer"
              title="Đặt lại"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Code Comparison Side by Side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-slate-950 rounded-2xl border border-slate-800 p-4">
          <div className="text-xs font-mono font-bold text-indigo-400 mb-2">
            Example 3: printLL (In Xuôi)
          </div>
          <pre className="text-xs font-mono overflow-x-auto">
            <code dangerouslySetInnerHTML={{ __html: highlightJavaVsCode(forwardCode) }} />
          </pre>
        </div>
        <div className="bg-slate-950 rounded-2xl border border-slate-800 p-4">
          <div className="text-xs font-mono font-bold text-violet-400 mb-2">
            Example 4: printRev (In Ngược)
          </div>
          <pre className="text-xs font-mono overflow-x-auto">
            <code dangerouslySetInnerHTML={{ __html: highlightJavaVsCode(reverseCode) }} />
          </pre>
        </div>
      </div>
    </div>
  );
}
