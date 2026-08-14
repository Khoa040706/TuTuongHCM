"use client";

import React, { useState } from "react";
import { Layers, ArrowRight, Plus, Trash2, Eye, RotateCcw, ShieldAlert, Sparkles } from "lucide-react";

export default function LinkedListStackVisualizer() {
  const [nodes, setNodes] = useState([
    { id: 1, val: "A" },
    { id: 2, val: "B" },
    { id: 3, val: "C" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [highlightId, setHighlightId] = useState(null);
  const [log, setLog] = useState("Khởi tạo Linked List Stack với 3 phần tử (top = A)");
  const [nextId, setNextId] = useState(4);

  const handlePush = () => {
    const val = inputValue.trim() || `X${nextId}`;
    const newNode = { id: nextId, val };
    setNodes([newNode, ...nodes]);
    setHighlightId(nextId);
    setNextId(nextId + 1);
    setInputValue("");
    setLog(`push("${val}") ➔ Đã chèn nút mới ở ĐẦU danh sách (head / top) trong O(1).`);
  };

  const handlePop = () => {
    if (nodes.length === 0) {
      setLog("⚠️ EmptyStackException: Stack rỗng, không thể pop()!");
      return;
    }
    const popped = nodes[0];
    setNodes(nodes.slice(1));
    setLog(`pop() ➔ Đã xóa nút đầu tiên "${popped.val}" (head) trong O(1). Trả về "${popped.val}".`);
  };

  const handlePeek = () => {
    if (nodes.length === 0) {
      setLog("⚠️ EmptyStackException: Stack rỗng, không thể peek()!");
      return;
    }
    const topNode = nodes[0];
    setHighlightId(topNode.id);
    setLog(`peek() ➔ Phần tử ở ĐẦU (top) hiện tại là "${topNode.val}". không xóa khỏi Stack.`);
  };

  const handleReset = () => {
    setNodes([
      { id: 10, val: "10" },
      { id: 11, val: "20" }
    ]);
    setHighlightId(null);
    setLog("Đã khôi phục trạng thái ban đầu của Stack.");
  };

  return (
    <div className="w-full bg-white text-slate-800 border border-slate-200/80 rounded-2xl shadow-lg p-5 md:p-6 my-8 font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-800 border border-teal-200 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-2">
            <Layers className="w-3.5 h-3.5" /> Trực quan hoá Cài đặt Stack bằng Linked List
          </div>
          <h3 className="text-xl font-extrabold text-slate-900">Top of Stack = Head (Front) of Linked List</h3>
        </div>

        <span className="text-xs bg-teal-100 text-teal-800 border border-teal-200 px-3 py-1.5 rounded-full font-mono font-medium self-start md:self-auto">
          Thao tác đầu danh sách ➔ Complexity O(1)
        </span>
      </div>

      {/* Control Panel */}
      <div className="bg-slate-50 rounded-xl border border-slate-200 p-4 mb-6 flex flex-wrap items-center gap-3">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handlePush()}
          placeholder="Nhập giá trị..."
          className="bg-white border border-slate-300 text-slate-900 font-mono text-xs px-3 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 w-32 shadow-sm placeholder:text-slate-400"
        />

        <button
          onClick={handlePush}
          className="flex items-center gap-1.5 px-3.5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl text-xs shadow-sm transition-all cursor-pointer active:scale-95"
        >
          <Plus className="w-3.5 h-3.5" /> push()
        </button>

        <button
          onClick={handlePop}
          className="flex items-center gap-1.5 px-3.5 py-2 bg-rose-600 hover:bg-rose-700 text-white font-semibold rounded-xl text-xs shadow-sm transition-all cursor-pointer active:scale-95"
        >
          <Trash2 className="w-3.5 h-3.5" /> pop()
        </button>

        <button
          onClick={handlePeek}
          className="flex items-center gap-1.5 px-3.5 py-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-xl text-xs shadow-sm transition-all cursor-pointer active:scale-95"
        >
          <Eye className="w-3.5 h-3.5" /> peek()
        </button>

        <button
          onClick={handleReset}
          className="ml-auto text-slate-500 hover:text-slate-800 text-xs font-medium flex items-center gap-1 hover:bg-slate-200/60 px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" /> Reset
        </button>
      </div>

      {/* Linked List Visual Bar */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 min-h-[110px] my-4 overflow-x-auto">
        <div className="flex items-center gap-3 min-w-max py-6">
          {nodes.length === 0 ? (
            <div className="w-full text-center py-8 text-slate-500 italic flex items-center justify-center gap-2 font-medium">
              <ShieldAlert className="w-5 h-5 text-amber-500" /> Stack rỗng (head = null). Hãy bấm push() để thêm node!
            </div>
          ) : (
            nodes.map((node, index) => {
              const isTop = index === 0;
              const isHighlighted = node.id === highlightId;

              return (
                <div key={node.id} className="flex items-center gap-3 relative group">
                  {/* Head/Top Pointer label */}
                  {isTop && (
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                      <span className="bg-teal-600 text-white text-[10px] px-2 py-0.5 rounded-full font-bold shadow">
                        TOP (Head)
                      </span>
                      <div className="w-0 h-0 border-l-4 border-r-4 border-t-6 border-l-transparent border-r-transparent border-t-teal-600"></div>
                    </div>
                  )}

                  {/* ListNode Box */}
                  <div
                    className={`bg-white text-slate-900 border-2 rounded-xl p-3 shadow-sm font-mono transition-all duration-300 flex items-center gap-2 ${
                      isTop
                        ? "border-teal-500 ring-2 ring-teal-500/30 scale-105"
                        : "border-slate-300"
                    } ${isHighlighted ? "bg-teal-50 border-teal-600 ring-2 ring-teal-500/40" : ""}`}
                  >
                    {/* Element compartment */}
                    <div className="flex flex-col items-center">
                      <span className="text-[9px] text-slate-400 font-semibold uppercase tracking-wider">Element</span>
                      <span className="text-sm font-bold text-slate-900 px-2 py-0.5 bg-slate-100 rounded border border-slate-200">
                        {node.val}
                      </span>
                    </div>

                    <div className="w-px h-8 bg-slate-200"></div>

                    {/* Next compartment */}
                    <div className="flex flex-col items-center">
                      <span className="text-[9px] text-slate-400 font-semibold uppercase tracking-wider">Next</span>
                      <span className="text-[11px] text-teal-600 font-bold font-mono">
                        {index === nodes.length - 1 ? "null" : "•"}
                      </span>
                    </div>
                  </div>

                  {/* Arrow Link */}
                  {index < nodes.length - 1 && (
                    <div className="flex items-center text-teal-600">
                      <div className="w-6 h-0.5 bg-teal-500"></div>
                      <ArrowRight className="w-4 h-4 -ml-1 text-teal-600" />
                    </div>
                  )}
                </div>
              );
            })
          )}

          {/* Null end node */}
          {nodes.length > 0 && (
            <div className="flex items-center gap-1 text-slate-400 font-mono text-xs pl-2">
              <ArrowRight className="w-4 h-4 text-slate-400" />
              <span className="px-2.5 py-1 bg-white rounded-lg border border-slate-200 text-slate-500 font-bold shadow-sm">
                null
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Console Output log */}
      <div className="bg-slate-950 text-teal-300 font-mono text-xs p-3 rounded-xl border border-slate-800 flex items-center gap-2">
        <Sparkles className="w-4 h-4 text-teal-400 shrink-0" />
        <span>{log}</span>
      </div>
    </div>
  );
}
