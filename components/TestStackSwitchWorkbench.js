"use client";

import React, { useState } from "react";
import { Terminal, Play, RotateCcw, Check, Sparkles } from "lucide-react";

export default function TestStackSwitchWorkbench() {
  const [selectedImpl, setSelectedImpl] = useState("StackLL");
  const [isRunning, setIsRunning] = useState(false);
  const [terminalLogs, setTerminalLogs] = useState([]);

  const implementations = [
    {
      id: "StackArr",
      name: "StackArr<String>",
      type: "Array",
      codeLine: "StackArr<String> stack = new StackArr<String>(); // Array",
      color: "text-emerald-400",
      badgeBg: "bg-emerald-500/20 border border-emerald-500/40 text-emerald-300"
    },
    {
      id: "StackLL",
      name: "StackLL<String>",
      type: "LinkedList Composition",
      codeLine: "StackLL<String> stack = new StackLL<String>(); // LinkedList composition",
      color: "text-purple-400",
      badgeBg: "bg-purple-500/20 border border-purple-500/40 text-purple-300"
    },
    {
      id: "StackLLE",
      name: "StackLLE<String>",
      type: "LinkedList Inheritance",
      codeLine: "StackLLE<String> stack = new StackLLE<String>(); // LinkedList inheritance",
      color: "text-blue-400",
      badgeBg: "bg-blue-500/20 border border-blue-500/40 text-blue-300"
    },
    {
      id: "StackJavaAPI",
      name: "Stack<String>",
      type: "Java API",
      codeLine: "Stack<String> stack = new Stack<String>(); // Java API",
      color: "text-amber-400",
      badgeBg: "bg-amber-500/20 border border-amber-500/40 text-amber-300"
    }
  ];

  const currentConfig = implementations.find((i) => i.id === selectedImpl);

  const handleRun = () => {
    setIsRunning(true);
    setTerminalLogs([]);

    const steps = [
      { text: `$ javac TestStack.java && java TestStack`, delay: 100 },
      { text: `[System.out] stack is empty? true`, delay: 300 },
      { text: `[Action] push("9")`, delay: 500 },
      { text: `[Action] push("8")`, delay: 700 },
      { text: `[System.out] top of stack is 8`, delay: 900 },
      { text: `[Action] push("5")`, delay: 1100 },
      { text: `[System.out] top of stack is 5`, delay: 1300 },
      { text: `[Action] push("4")`, delay: 1500 },
      { text: `[Action] pop() -> 4`, delay: 1700 },
      { text: `[Action] pop() -> 5`, delay: 1900 },
      { text: `[System.out] top of stack is 8`, delay: 2100 },
      { text: `✔ Process finished with exit code 0 (${currentConfig.name})`, delay: 2300 }
    ];

    steps.forEach((step) => {
      setTimeout(() => {
        setTerminalLogs((prev) => [...prev, step.text]);
        if (step.delay === 2300) setIsRunning(false);
      }, step.delay);
    });
  };

  return (
    <div className="w-full bg-white text-slate-800 border border-slate-200/80 rounded-2xl shadow-lg p-5 md:p-6 my-8 font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200 mb-5">
        <div>
          <div className="flex items-center gap-2 text-indigo-600 font-semibold text-xs uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4 text-indigo-600" /> 3.6 Ví dụ sử dụng Stack (Chọn 1 trong 4 cách cài đặt)
          </div>
          <h3 className="text-xl font-bold text-slate-900">TestStack.java Playground</h3>
        </div>

        {/* Dropdown switch */}
        <div className="flex items-center gap-2">
          <label className="text-xs text-slate-600 font-medium">Chọn cách cài đặt:</label>
          <select
            value={selectedImpl}
            onChange={(e) => setSelectedImpl(e.target.value)}
            className="bg-slate-50 border border-slate-300 text-slate-800 font-mono text-xs rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none cursor-pointer font-semibold shadow-sm"
          >
            {implementations.map((impl) => (
              <option key={impl.id} value={impl.id}>
                {impl.name} ({impl.type})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* IDE Editor Window */}
      <div className="bg-slate-950 text-slate-200 font-mono text-xs rounded-xl border border-slate-800 shadow-md overflow-hidden mb-5">
        {/* IDE Bar */}
        <div className="bg-slate-900 px-4 py-2.5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
            <span className="ml-2 font-mono text-xs text-slate-300 font-semibold">TestStack.java</span>
          </div>
          <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-mono font-medium ${currentConfig.badgeBg}`}>
            Đang chọn: {currentConfig.name}
          </span>
        </div>

        {/* Code Content */}
        <div className="p-4 font-mono text-xs overflow-x-auto text-slate-200 leading-relaxed">
          <div className="text-slate-500">// TestStack.java</div>
          <div><span className="text-purple-400">import</span> java.util.*;</div>
          <br />
          <div><span className="text-purple-400">public class</span> <span className="text-amber-300">TestStack</span> &#123;</div>
          <div className="pl-4">
            <span className="text-purple-400">public static void</span> <span className="text-emerald-300">main</span>(String[] args) &#123;
          </div>
          <br />

          <div className="pl-8 text-slate-500">// Có thể dùng 1 trong 4 cách cài đặt Stack sau</div>

          {/* Render 4 lines with active highlight */}
          {implementations.map((impl) => {
            const isSelected = impl.id === selectedImpl;
            return (
              <div
                key={impl.id}
                onClick={() => setSelectedImpl(impl.id)}
                className={`pl-8 cursor-pointer py-1.5 -mx-4 px-8 transition-all flex items-center justify-between ${
                  isSelected
                    ? "bg-indigo-950/80 border-l-4 border-indigo-500 text-white font-bold"
                    : "opacity-40 hover:opacity-80 text-slate-400"
                }`}
              >
                <span>{impl.codeLine}</span>
                {isSelected && <Check className="w-4 h-4 text-indigo-400" />}
              </div>
            );
          })}

          <br />
          <div className="pl-8">System.out.println(<span className="text-emerald-300">"stack is empty? "</span> + stack.empty());</div>
          <div className="pl-8">stack.push(<span className="text-emerald-300">"9"</span>);</div>
          <div className="pl-8">stack.push(<span className="text-emerald-300">"8"</span>);</div>
          <div className="pl-8">System.out.println(<span className="text-emerald-300">"top of stack is "</span> + stack.peek());</div>
          <div className="pl-8">stack.push(<span className="text-emerald-300">"5"</span>);</div>
          <div className="pl-8">System.out.println(<span className="text-emerald-300">"top of stack is "</span> + stack.pop());</div>
          <div className="pl-8">stack.push(<span className="text-emerald-300">"4"</span>);</div>
          <div className="pl-8">stack.pop();</div>
          <div className="pl-8">stack.pop();</div>
          <div className="pl-8">System.out.println(<span className="text-emerald-300">"top of stack is "</span> + stack.peek());</div>
          <div className="pl-4">&#125;</div>
          <div>&#125;</div>
        </div>
      </div>

      {/* Terminal Controls */}
      <div className="flex items-center justify-between mb-3">
        <button
          onClick={handleRun}
          disabled={isRunning}
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2 rounded-lg text-xs shadow-md transition-all flex items-center gap-2 disabled:opacity-50 cursor-pointer"
        >
          <Play className="w-3.5 h-3.5 fill-current" /> {isRunning ? "Đang chạy..." : "Run TestStack.java"}
        </button>

        <button
          onClick={() => setTerminalLogs([])}
          className="text-slate-600 hover:text-slate-900 text-xs font-medium flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5 text-slate-500" /> Xóa console
        </button>
      </div>

      {/* Console Terminal Output Window */}
      <div className="bg-slate-950 text-emerald-400 font-mono text-xs p-4 rounded-xl border border-slate-800 min-h-[160px] shadow-md">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2.5 mb-3 text-slate-400">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-emerald-400" />
            <span className="font-semibold">Terminal Output</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
          </div>
        </div>
        {terminalLogs.length === 0 ? (
          <div className="text-slate-500 italic">Nhấn "Run TestStack.java" để thực thi mã nguồn...</div>
        ) : (
          <div className="space-y-1">
            {terminalLogs.map((log, idx) => (
              <div
                key={idx}
                className={
                  log.startsWith("✔")
                    ? "text-emerald-400 font-bold"
                    : log.startsWith("[System.out]")
                    ? "text-cyan-300 font-semibold"
                    : log.startsWith("[Action]")
                    ? "text-amber-300"
                    : log.startsWith("$")
                    ? "text-slate-400"
                    : "text-slate-200"
                }
              >
                {log}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

