"use client";
import React, { useState } from "react";
import { CheckCircle2, AlertTriangle, ArrowRight, Play, RotateCcw, Layers, Sparkles, Plus, Trash2 } from "lucide-react";

export default function StackParenthesesVisualizer() {
  const [expr, setExpr] = useState("{ [ (a + b) * c ] }");
  const [stack, setStack] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(-1);
  const [logs, setLogs] = useState([]);
  const [status, setStatus] = useState("idle"); // idle, running, success, error

  const isOpening = (ch) => ch === "(" || ch === "[" || ch === "{";
  const isClosing = (ch) => ch === ")" || ch === "]" || ch === "}";
  const isMatching = (open, close) =>
    (open === "(" && close === ")") ||
    (open === "[" && close === "]") ||
    (open === "{" && close === "}");

  const handleReset = () => {
    setStack([]);
    setCurrentIdx(-1);
    setLogs([]);
    setStatus("idle");
  };

  const handleStep = () => {
    const nextIdx = currentIdx + 1;
    if (nextIdx >= expr.length) {
      if (stack.length === 0) {
        setStatus("success");
        setLogs((prev) => [...prev, "🎉 Đã duyệt hết chuỗi. Stack rỗng -> Biểu thức HỢP LỆ (Balanced)!"]);
      } else {
        setStatus("error");
        setLogs((prev) => [...prev, `❌ Đã duyệt hết chuỗi nhưng Stack vẫn còn ${stack.length} ngoặc mở chưa đóng -> KHÔNG HỢP LỆ!`]);
      }
      return;
    }

    setCurrentIdx(nextIdx);
    const char = expr[nextIdx];

    if (isOpening(char)) {
      setStack((prev) => [char, ...prev]);
      setLogs((prev) => [...prev, `Ký tự [${nextIdx}] là '${char}' (ngoặc mở) -> push('${char}') vào đỉnh Stack.`]);
    } else if (isClosing(char)) {
      if (stack.length === 0) {
        setStatus("error");
        setLogs((prev) => [...prev, `Ký tự [${nextIdx}] là '${char}' (ngoặc đóng) nhưng Stack đang RỖNG -> Thừa ngoặc đóng! KHÔNG HỢP LỆ!`]);
      } else {
        const topChar = stack[0];
        if (isMatching(topChar, char)) {
          setStack((prev) => prev.slice(1));
          setLogs((prev) => [...prev, `Ký tự [${nextIdx}] là '${char}' khớp với đỉnh Stack '${topChar}' -> pop('${topChar}') ra khỏi Stack.`]);
        } else {
          setStatus("error");
          setLogs((prev) => [...prev, `Ký tự [${nextIdx}] là '${char}' KHÔNG KHỚP với đỉnh Stack '${topChar}' -> KHÔNG HỢP LỆ!`]);
        }
      }
    } else {
      setLogs((prev) => [...prev, `Ký tự [${nextIdx}] là '${char}' (không phải ngoặc) -> Bỏ qua.`]);
    }
  };

  const handleRunAll = () => {
    handleReset();
    let tempStack = [];
    let newLogs = [];
    let failed = false;

    for (let i = 0; i < expr.length; i++) {
      const char = expr[i];
      if (isOpening(char)) {
        tempStack.unshift(char);
        newLogs.push(`[${i}] Ký tự '${char}' (mở) -> push('${char}'). Stack hiện tại: [${tempStack.join(", ")}]`);
      } else if (isClosing(char)) {
        if (tempStack.length === 0) {
          failed = true;
          newLogs.push(`[${i}] Ký tự '${char}' (đóng) nhưng Stack RỖNG -> LỖI!`);
          break;
        }
        const top = tempStack[0];
        if (isMatching(top, char)) {
          tempStack.shift();
          newLogs.push(`[${i}] Ký tự '${char}' khớp với '${top}' -> pop('${top}'). Stack hiện tại: [${tempStack.join(", ")}]`);
        } else {
          failed = true;
          newLogs.push(`[${i}] Ký tự '${char}' KHÔNG KHỚP với '${top}' -> LỖI!`);
          break;
        }
      }
    }

    if (!failed) {
      if (tempStack.length === 0) {
        newLogs.push("🎉 HOÀN TẤT: Chuỗi ngoặc hợp lệ tuyệt đối (Balanced)!");
        setStatus("success");
      } else {
        newLogs.push(`❌ LỖI: Vẫn còn ngoặc mở [${tempStack.join(", ")}] chưa được đóng!`);
        setStatus("error");
      }
    } else {
      setStatus("error");
    }

    setStack(tempStack);
    setCurrentIdx(expr.length - 1);
    setLogs(newLogs);
  };

  return (
    <div className="w-full bg-white rounded-2xl border border-cyan-200/80 shadow-xl p-5 md:p-6 my-6 font-sans">
      {/* Header */}
      <div className="pb-4 mb-4 border-b border-cyan-100">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-cyan-100 text-cyan-700 text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full uppercase">
                Mô phỏng Ứng dụng §1.3
              </span>
              <span className="text-xs text-slate-500 font-mono">Matching Parentheses</span>
            </div>
            <h3 className="text-base md:text-lg font-bold text-slate-900 mt-1 flex items-center gap-2">
              <Layers className="w-5 h-5 text-cyan-600" />
              Kiểm Tra Khớp Dấu Ngoặc Bằng Stack (Parentheses Matcher)
            </h3>
          </div>
          {status !== "idle" && (
            <div className="flex items-center gap-2">
              {status === "success" && (
                <span className="flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full border border-emerald-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> BALANCED (Hợp lệ)
                </span>
              )}
              {status === "error" && (
                <span className="flex items-center gap-1.5 bg-rose-100 text-rose-800 text-xs font-bold px-3 py-1 rounded-full border border-rose-300">
                  <AlertTriangle className="w-4 h-4 text-rose-600" /> UNBALANCED (Lỗi ngoặc)
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Controls Bar */}
      <div className="bg-slate-900 p-4 rounded-xl text-white mb-6 border border-slate-800">
        <div className="flex flex-wrap items-center gap-3">
          <label className="text-xs font-mono text-slate-400">Biểu thức:</label>
          <input
            type="text"
            value={expr}
            onChange={(e) => {
              setExpr(e.target.value);
              handleReset();
            }}
            placeholder="Nhập chuỗi ngoặc..."
            className="bg-slate-800 border border-slate-700 text-slate-100 text-sm font-mono rounded-lg px-3 py-1.5 focus:outline-none focus:border-cyan-500 min-w-[220px] grow"
          />
          <button
            onClick={handleStep}
            disabled={status === "success" || status === "error"}
            className="flex items-center gap-1.5 px-3 py-2 bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50 text-white text-xs font-medium rounded-lg transition-colors"
          >
            <ArrowRight className="w-4 h-4" /> Từng bước (Step)
          </button>
          <button
            onClick={handleRunAll}
            className="flex items-center gap-1.5 px-3 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium rounded-lg transition-colors"
          >
            <Play className="w-4 h-4" /> Chạy hết (Run All)
          </button>
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 px-3 py-2 bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs font-medium rounded-lg transition-colors ml-auto"
          >
            <RotateCcw className="w-4 h-4" /> Reset
          </button>
        </div>
      </div>

      {/* Main Grid: Expression Inspection & Stack State */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Left 2 Cols: String Character Inspection View */}
        <div className="md:col-span-2 bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-col justify-between">
          <div>
            <h4 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-3">
              Duyệt qua từng ký tự của chuỗi:
            </h4>
            <div className="flex flex-wrap items-center gap-2 p-3 bg-white rounded-lg border border-slate-200 font-mono text-base">
              {expr.split("").map((ch, idx) => {
                const isCurrent = idx === currentIdx;
                const isOp = isOpening(ch);
                const isCl = isClosing(ch);
                return (
                  <span
                    key={idx}
                    className={`px-2 py-1 rounded transition-all ${
                      isCurrent
                        ? "bg-cyan-500 text-white font-bold ring-4 ring-cyan-200 scale-110 shadow"
                        : isOp
                        ? "bg-indigo-50 text-indigo-700 font-bold border border-indigo-200"
                        : isCl
                        ? "bg-amber-50 text-amber-700 font-bold border border-amber-200"
                        : "text-slate-600"
                    }`}
                  >
                    {ch === " " ? "␣" : ch}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Quick Preset Buttons */}
          <div className="mt-4 pt-3 border-t border-slate-200 flex flex-wrap items-center gap-2 text-xs">
            <span className="text-slate-500 font-mono">Ví dụ mẫu:</span>
            <button
              onClick={() => {
                setExpr("{ [ (a + b) * c ] }");
                handleReset();
              }}
              className="px-2 py-1 bg-white border border-slate-300 hover:bg-slate-100 rounded text-slate-700 font-mono"
            >
              Ngoặc đúng: <code>{"{ [ (a + b) * c ] }"}</code>
            </button>
            <button
              onClick={() => {
                setExpr("( ( a + b ) ]");
                handleReset();
              }}
              className="px-2 py-1 bg-white border border-slate-300 hover:bg-slate-100 rounded text-slate-700 font-mono text-rose-600"
            >
              Ngoặc sai: <code>{"( ( a + b ) ]"}</code>
            </button>
          </div>
        </div>

        {/* Right Col: LIFO Stack Visualizer Container */}
        <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800 flex flex-col items-center justify-between">
          <div className="w-full text-center pb-2 border-b border-slate-800">
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">
              LIFO Stack Container
            </span>
            <span className="text-[10px] text-slate-400 font-mono">TOP ở trên cùng</span>
          </div>

          {/* Stack Bucket */}
          <div className="w-full max-w-[180px] my-3 border-x-2 border-b-2 border-slate-700 rounded-b-xl bg-slate-950 p-2 min-h-[140px] flex flex-col justify-end gap-1.5">
            {stack.length === 0 ? (
              <span className="text-xs font-mono text-slate-600 text-center my-auto">Stack Rỗng</span>
            ) : (
              stack.map((item, idx) => (
                <div
                  key={idx}
                  className={`py-1.5 px-3 rounded text-center font-mono font-bold text-xs shadow transition-all ${
                    idx === 0
                      ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white ring-2 ring-cyan-300"
                      : "bg-slate-800 text-slate-300 border border-slate-700"
                  }`}
                >
                  {item} {idx === 0 && "(TOP)"}
                </div>
              ))
            )}
          </div>

          <div className="text-[11px] font-mono text-slate-400 text-center">
            Số lượng: <strong>{stack.length}</strong> ngoặc
          </div>
        </div>
      </div>

      {/* Step Execution Logs */}
      {logs.length > 0 && (
        <div className="bg-slate-900 text-slate-200 p-4 rounded-xl border border-slate-800 font-mono text-xs max-h-40 overflow-y-auto">
          <div className="text-cyan-400 font-bold mb-2 pb-1 border-b border-slate-800 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Nhật ký từng bước thực thi:
          </div>
          <div className="space-y-1">
            {logs.map((log, i) => (
              <div key={i} className="leading-relaxed">
                <span className="text-slate-500">#{i + 1}:</span> {log}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
