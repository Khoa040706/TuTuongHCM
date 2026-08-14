"use client";
import React, { useState, useEffect } from "react";
import {
  Play,
  Pause,
  RotateCcw,
  ChevronRight,
  ChevronLeft,
  Terminal,
  Code2,
  ArrowRight,
  Sparkles,
  Layers,
  Info
} from "lucide-react";

const JAVA_CODE_LINES = [
  { line: 1, text: "public class TestQueue {" },
  { line: 2, text: "    public static void main (String[] args) {" },
  { line: 3, text: "        QueueLL <String> queue = new QueueLL <String> ();" },
  { line: 4, text: "        System.out.println(\"queue is empty? \" + queue.isEmpty());" },
  { line: 5, text: "        queue.offer(\"1\");" },
  { line: 6, text: "        System.out.println(\"front now is: \" + queue.peek());" },
  { line: 7, text: "        queue.offer(\"2\");" },
  { line: 8, text: "        System.out.println(\"front now is: \" + queue.peek());" },
  { line: 9, text: "        queue.offer(\"3\");" },
  { line: 10, text: "        System.out.println(\"front now is: \" + queue.peek());" },
  { line: 11, text: "        queue.poll();" },
  { line: 12, text: "        System.out.println(\"front now is: \" + queue.peek());" },
  { line: 13, text: "        System.out.println(\"checking whether queue.peek().equals(\\\"1\\\"): \" + queue.peek().equals(\"1\"));" },
  { line: 14, text: "        queue.poll();" },
  { line: 15, text: "        System.out.println(\"front now is: \" + queue.peek());" },
  { line: 16, text: "        queue.poll();" },
  { line: 17, text: "        System.out.println(\"front now is: \" + queue.peek());" },
  { line: 18, text: "    }" },
  { line: 19, text: "}" }
];

const STEPS = [
  {
    stepNum: 1,
    lineIndex: 3,
    activeLines: [3],
    codeLine: 'QueueLL <String> queue = new QueueLL <String> ();',
    queueState: [],
    consoleOutput: null,
    method: 'new QueueLL()',
    description: 'Khởi tạo đối tượng hàng đợi QueueLL rỗng dựa trên Danh sách liên kết (LinkedList).'
  },
  {
    stepNum: 2,
    lineIndex: 4,
    activeLines: [4],
    codeLine: 'System.out.println("queue is empty? " + queue.isEmpty());',
    queueState: [],
    consoleOutput: 'queue is empty? true',
    method: 'isEmpty()',
    description: 'Kiểm tra Queue có rỗng không: queue.isEmpty() trả về true. In ra màn hình.'
  },
  {
    stepNum: 3,
    lineIndex: 5,
    activeLines: [5],
    codeLine: 'queue.offer("1");',
    queueState: ["1"],
    consoleOutput: null,
    method: 'offer("1")',
    description: 'Thêm (enqueue) phần tử "1" vào cuối hàng đợi.'
  },
  {
    stepNum: 4,
    lineIndex: 6,
    activeLines: [6],
    codeLine: 'System.out.println("front now is: " + queue.peek());',
    queueState: ["1"],
    consoleOutput: 'front now is: 1',
    method: 'peek()',
    description: 'Xem phần tử ở đầu hàng đợi (queue.peek() -> "1"). In ra màn hình.'
  },
  {
    stepNum: 5,
    lineIndex: 7,
    activeLines: [7],
    codeLine: 'queue.offer("2");',
    queueState: ["1", "2"],
    consoleOutput: null,
    method: 'offer("2")',
    description: 'Thêm phần tử "2" vào cuối hàng đợi (sau phần tử "1").'
  },
  {
    stepNum: 6,
    lineIndex: 8,
    activeLines: [8],
    codeLine: 'System.out.println("front now is: " + queue.peek());',
    queueState: ["1", "2"],
    consoleOutput: 'front now is: 1',
    method: 'peek()',
    description: 'Xem phần tử ở đầu hàng đợi. Đầu hàng đợi vẫn là phần tử "1" (FIFO).'
  },
  {
    stepNum: 7,
    lineIndex: 9,
    activeLines: [9],
    codeLine: 'queue.offer("3");',
    queueState: ["1", "2", "3"],
    consoleOutput: null,
    method: 'offer("3")',
    description: 'Thêm phần tử "3" vào cuối hàng đợi (sau phần tử "2").'
  },
  {
    stepNum: 8,
    lineIndex: 10,
    activeLines: [10],
    codeLine: 'System.out.println("front now is: " + queue.peek());',
    queueState: ["1", "2", "3"],
    consoleOutput: 'front now is: 1',
    method: 'peek()',
    description: 'Xem phần tử ở đầu hàng đợi. Đầu hàng đợi vẫn giữ nguyên là "1".'
  },
  {
    stepNum: 9,
    lineIndex: 11,
    activeLines: [11],
    codeLine: 'queue.poll();',
    queueState: ["2", "3"],
    consoleOutput: null,
    method: 'poll()',
    description: 'Lấy và xóa phần tử ở đầu hàng đợi: queue.poll() loại bỏ phần tử "1".'
  },
  {
    stepNum: 10,
    lineIndex: 12,
    activeLines: [12],
    codeLine: 'System.out.println("front now is: " + queue.peek());',
    queueState: ["2", "3"],
    consoleOutput: 'front now is: 2',
    method: 'peek()',
    description: 'Đầu hàng đợi hiện tại chuyển sang phần tử "2". In kết quả ra màn hình.'
  },
  {
    stepNum: 11,
    lineIndex: 13,
    activeLines: [13],
    codeLine: 'System.out.println("checking whether queue.peek().equals(\\"1\\"): " + queue.peek().equals("1"));',
    queueState: ["2", "3"],
    consoleOutput: 'checking whether queue.peek().equals("1"): false',
    method: 'peek().equals("1")',
    description: 'Kiểm tra phần tử đầu ("2") có bằng "1" hay không: equals("1") trả về false.'
  },
  {
    stepNum: 12,
    lineIndex: 14,
    activeLines: [14],
    codeLine: 'queue.poll();',
    queueState: ["3"],
    consoleOutput: null,
    method: 'poll()',
    description: 'Lấy và xóa phần tử ở đầu hàng đợi: queue.poll() loại bỏ phần tử "2".'
  },
  {
    stepNum: 13,
    lineIndex: 15,
    activeLines: [15],
    codeLine: 'System.out.println("front now is: " + queue.peek());',
    queueState: ["3"],
    consoleOutput: 'front now is: 3',
    method: 'peek()',
    description: 'Đầu hàng đợi hiện tại là phần tử "3". In kết quả ra màn hình.'
  },
  {
    stepNum: 14,
    lineIndex: 16,
    activeLines: [16, 17],
    codeLine: 'queue.poll(); System.out.println("front now is: " + queue.peek());',
    queueState: [],
    consoleOutput: 'front now is: null',
    method: 'poll() & peek()',
    description: 'Gọi poll() xóa phần tử "3" cuối cùng. Hàng đợi rỗng nên queue.peek() trả về null.'
  }
];

export default function QueueTestStepper() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const currentStep = STEPS[currentStepIndex];

  // Accumulated console lines up to currentStepIndex
  const consoleHistory = STEPS.slice(0, currentStepIndex + 1)
    .map((s) => s.consoleOutput)
    .filter(Boolean);

  // Auto playback timer
  useEffect(() => {
    let timer = null;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentStepIndex((prev) => {
          if (prev >= STEPS.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 1600);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isPlaying]);

  const handleNext = () => {
    if (currentStepIndex < STEPS.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const handleReplay = () => {
    setIsPlaying(false);
    setCurrentStepIndex(0);
  };

  const togglePlay = () => {
    if (currentStepIndex >= STEPS.length - 1) {
      setCurrentStepIndex(0);
      setIsPlaying(true);
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="bg-white text-slate-800 border border-slate-200/80 rounded-2xl shadow-lg p-5 md:p-6 my-6 font-sans">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="bg-teal-100 text-teal-800 border border-teal-200 rounded-full px-2.5 py-1 text-xs font-bold font-mono uppercase tracking-wider flex items-center gap-1.5 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-teal-600" />
              Mục 8.4
            </span>
            <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
              Java Queue Execution
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight">
            Ví dụ dùng Queue — TestQueue.java
          </h3>
        </div>

        {/* Stepper Controls */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={handleReplay}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg transition border border-slate-200 active:scale-95"
            title="Bắt đầu lại từ bước 1"
          >
            <RotateCcw className="w-3.5 h-3.5 text-slate-600" /> Replay
          </button>

          <button
            onClick={handlePrev}
            disabled={currentStepIndex === 0}
            className="flex items-center gap-1 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 disabled:opacity-40 disabled:cursor-not-allowed text-slate-700 text-xs font-semibold rounded-lg transition border border-slate-200 active:scale-95"
          >
            <ChevronLeft className="w-4 h-4" /> Quay lại
          </button>

          <button
            onClick={togglePlay}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold rounded-lg transition border active:scale-95 shadow-sm ${
              isPlaying
                ? "bg-amber-600 hover:bg-amber-700 text-white border-amber-500"
                : "bg-teal-50 hover:bg-teal-100 text-teal-800 border-teal-200"
            }`}
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 fill-current" /> Tạm dừng
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current text-teal-600" /> Tự động chạy
              </>
            )}
          </button>

          <button
            onClick={handleNext}
            disabled={currentStepIndex === STEPS.length - 1}
            className="flex items-center gap-1.5 bg-teal-600 hover:bg-teal-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold rounded-lg px-3 py-1.5 text-xs transition shadow-sm active:scale-95"
          >
            Bước tiếp <ChevronRight className="w-4 h-4" />
          </button>

          <div className="ml-1 text-xs font-mono font-bold bg-slate-100 text-teal-800 border border-slate-200 px-3 py-1.5 rounded-lg">
            {currentStepIndex + 1} / {STEPS.length}
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        {/* Left Side: Code Display (2/3 width on lg) */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <div className="bg-slate-950 text-slate-200 font-mono text-xs rounded-xl border border-slate-800 shadow-md overflow-hidden flex flex-col h-full">
            {/* Mac Window Header */}
            <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/90"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/90"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/90"></div>
                </div>
                <div className="flex items-center gap-2 border-l border-slate-800 pl-3">
                  <Code2 className="w-4 h-4 text-teal-400" />
                  <span className="text-xs font-bold font-mono text-slate-300">
                    TestQueue.java
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono text-amber-300 bg-amber-950/80 border border-amber-800/80 px-2 py-0.5 rounded">
                  Line {currentStep.activeLines.join(", ")}
                </span>
              </div>
            </div>

            {/* Code Lines Container */}
            <div className="p-4 overflow-x-auto font-mono text-xs md:text-sm leading-relaxed flex-1 bg-slate-950">
              {JAVA_CODE_LINES.map((item) => {
                const isActive = currentStep.activeLines.includes(item.line);
                return (
                  <div
                    key={item.line}
                    onClick={() => {
                      const stepIdx = STEPS.findIndex((s) =>
                        s.activeLines.includes(item.line)
                      );
                      if (stepIdx !== -1) setCurrentStepIndex(stepIdx);
                    }}
                    className={`flex items-center rounded-lg px-2 py-1 transition-colors cursor-pointer ${
                      isActive
                        ? "bg-amber-500/20 text-amber-300 font-semibold border-l-4 border-amber-400 shadow-sm"
                        : "text-slate-300 hover:bg-slate-900/70"
                    }`}
                  >
                    {/* Indicator & Line Number */}
                    <span className="w-10 select-none text-right pr-3 font-mono text-xs text-slate-600 flex items-center justify-end">
                      {isActive && (
                        <span className="text-amber-400 mr-1 text-[10px]">👉</span>
                      )}
                      {item.line}
                    </span>

                    {/* Code text */}
                    <span className="whitespace-pre">{item.text}</span>
                  </div>
                );
              })}
            </div>

            {/* Explanation Footer inside Code Window */}
            <div className="bg-slate-900/90 border-t border-slate-800 p-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-teal-950 border border-teal-800 text-teal-400 mt-0.5 shrink-0">
                  <Info className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="text-xs font-bold text-amber-300 bg-amber-950/80 border border-amber-800/80 px-2 py-0.5 rounded-full font-mono">
                      Bước {currentStep.stepNum}: {currentStep.method}
                    </span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-200 leading-normal">
                    {currentStep.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Queue Visualizer & Console Output (1/3 width on lg) */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          {/* Queue Visual Area */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col gap-3 shadow-xs">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-teal-600" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 font-mono">
                  Trạng thái Queue
                </h4>
              </div>
              <span className="text-[11px] font-mono text-teal-800 bg-teal-100 px-2 py-0.5 rounded border border-teal-200 font-bold">
                Size: {currentStep.queueState.length}
              </span>
            </div>

            {/* Horizontal Queue Bar Container */}
            <div className="min-h-[120px] bg-white rounded-xl border border-slate-200 p-4 flex flex-col justify-center items-center shadow-inner">
              {currentStep.queueState.length === 0 ? (
                <div className="flex flex-col items-center justify-center text-slate-400 py-3">
                  <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center mb-1.5 text-slate-400">
                    <Layers className="w-5 h-5 opacity-60" />
                  </div>
                  <span className="text-xs font-mono italic text-slate-500">(Queue rỗng / Empty)</span>
                </div>
              ) : (
                <div className="w-full flex flex-col items-center gap-2">
                  <div className="flex items-center justify-center gap-2 flex-wrap w-full pt-4">
                    {currentStep.queueState.map((val, idx) => {
                      const isFront = idx === 0;
                      const isBack = idx === currentStep.queueState.length - 1;

                      return (
                        <React.Fragment key={idx}>
                          <div className="relative group flex flex-col items-center">
                            {/* FRONT badge */}
                            {isFront && (
                              <span className="absolute -top-5 text-[9px] font-mono font-bold text-teal-800 uppercase tracking-wider bg-teal-100 border border-teal-300 px-1.5 py-0.2 rounded shadow-xs">
                                FRONT
                              </span>
                            )}

                            {/* BACK badge */}
                            {isBack && !isFront && (
                              <span className="absolute -top-5 text-[9px] font-mono font-bold text-slate-600 uppercase tracking-wider bg-slate-200 border border-slate-300 px-1.5 py-0.2 rounded shadow-xs">
                                BACK
                              </span>
                            )}

                            {/* Queue Item Box */}
                            <div
                              className={`bg-white text-slate-800 border border-teal-400 font-mono font-bold p-2.5 shadow-sm rounded-xl min-w-[3rem] text-center flex items-center justify-center transition-all duration-300 ${
                                isFront ? "border-2 border-teal-500 ring-2 ring-teal-100" : ""
                              }`}
                            >
                              "{val}"
                            </div>

                            {/* Position Index */}
                            <span className="text-[10px] font-mono text-slate-400 mt-1">
                              [{idx}]
                            </span>
                          </div>

                          {/* Arrow between items */}
                          {idx < currentStep.queueState.length - 1 && (
                            <ArrowRight className="w-4 h-4 text-teal-500 shrink-0 self-center mb-3" />
                          )}
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 px-1">
              <span>← Đầu (Front / Poll)</span>
              <span>Cuối (Back / Offer) →</span>
            </div>
          </div>

          {/* Console Output Window (Bottom Right) */}
          <div className="bg-slate-950 text-emerald-400 font-mono text-xs rounded-xl border border-slate-800 min-h-[140px] shadow-md flex flex-col flex-1 overflow-hidden">
            {/* Mac Terminal Header */}
            <div className="bg-slate-900/90 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                </div>
                <div className="flex items-center gap-2 border-l border-slate-800 pl-3">
                  <Terminal className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold font-mono text-slate-300">
                    Console Output
                  </span>
                </div>
              </div>
              <span className="text-[10px] font-mono text-slate-400">
                System.out
              </span>
            </div>

            {/* Terminal Body */}
            <div className="p-4 font-mono text-xs text-emerald-400 bg-slate-950 flex-1 overflow-y-auto space-y-1.5 min-h-[140px]">
              {consoleHistory.length === 0 ? (
                <div className="text-slate-600 italic text-[11px]">
                  &gt; Chưa có output (nhấn Bước tiếp để thực thi)...
                </div>
              ) : (
                consoleHistory.map((outText, idx) => (
                  <div key={idx} className="flex items-start gap-2 leading-relaxed">
                    <span className="text-slate-600 select-none font-semibold text-[10px]">
                      {idx + 1}.
                    </span>
                    <span className="text-emerald-400 break-all">{outText}</span>
                  </div>
                ))
              )}
              <div className="flex items-center gap-1 text-emerald-500 pt-1">
                <span className="animate-pulse font-bold">&gt;</span>
                <span className="w-1.5 h-3.5 bg-emerald-500/80 animate-pulse inline-block"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

