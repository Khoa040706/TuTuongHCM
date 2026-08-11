"use client";
import React, { useState } from "react";
import { ArrowRight, Plus, Trash2, RotateCcw, Sparkles, CheckCircle2, Zap } from "lucide-react";

export default function LinkedListVisualizer() {
  const [nodes, setNodes] = useState(["a0", "a1", "a2", "a3"]);
  const [newItem, setNewItem] = useState("aNew");
  const [animatingAction, setAnimatingAction] = useState(null);
  const [logText, setLogText] = useState("Danh sách khởi tạo: head -> a0 -> a1 -> a2 -> a3 -> null");
  const [isBusy, setIsBusy] = useState(false);

  // addFirst(item)
  const handleAddFirst = async () => {
    if (!newItem.trim()) return;
    setIsBusy(true);
    setAnimatingAction("add");
    setLogText(`1. Tạo Node mới ("${newItem.trim()}"). 2. Gán newNode.next = head. 3. Cập nhật head = newNode (O(1) - Không cần shift!).`);

    await new Promise((r) => setTimeout(r, 300));

    setNodes([newItem.trim(), ...nodes]);
    setNewItem(`a${nodes.length}`);
    setAnimatingAction(null);
    setIsBusy(false);
  };

  // removeFirst()
  const handleRemoveFirst = async () => {
    if (nodes.length === 0) {
      setLogText("❌ LỖI: Linked List rỗng! (head == null). Không thể removeFirst().");
      return;
    }

    setIsBusy(true);
    setAnimatingAction("remove");
    const removedItem = nodes[0];
    setLogText(`1. Ngắt con trỏ node đầu ("${removedItem}"). 2. Cập nhật head = head.next. 3. Node cũ ngắt kết nối sẽ thành Garbage Collection (O(1)!).`);

    await new Promise((r) => setTimeout(r, 400));

    setNodes(nodes.slice(1));
    setAnimatingAction(null);
    setIsBusy(false);
  };

  // Reset
  const handleReset = () => {
    setNodes(["a0", "a1", "a2", "a3"]);
    setNewItem("aNew");
    setLogText("Đã reset Linked List về trạng thái ban đầu (a0 -> a1 -> a2 -> a3 -> null).");
    setAnimatingAction(null);
  };

  return (
    <div className="w-full bg-white rounded-2xl border border-purple-200/80 shadow-xl p-5 md:p-6 my-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-5 border-b border-purple-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-purple-100 text-purple-700 text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full uppercase">
              Mô phỏng Trực quan IV.2 & VI
            </span>
            <span className="text-xs text-slate-500 font-mono">Dynamic Linked Nodes & Pointers</span>
          </div>
          <h3 className="text-base md:text-lg font-bold text-slate-900 mt-1">
            Cơ chế hoạt động của <code className="text-purple-700 font-mono">Linked List</code> (Node & Next Reference)
          </h3>
        </div>

        {/* State Badges */}
        <div className="flex items-center gap-2 text-xs font-mono">
          <div className="bg-purple-50 border border-purple-200 px-3 py-1.5 rounded-xl text-purple-950 flex items-center gap-1.5 font-semibold">
            <span>size:</span>
            <span className="text-purple-700 font-bold text-sm">{nodes.length}</span>
          </div>
          <div className="bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-xl text-emerald-800 font-semibold flex items-center gap-1">
            <Zap className="w-3.5 h-3.5 text-emerald-600" />
            <span>Time: O(1)</span>
          </div>
        </div>
      </div>

      {/* Control Buttons Bar */}
      <div className="flex flex-wrap items-center gap-3 mb-6 bg-purple-50/50 p-3.5 rounded-xl border border-purple-100">
        <div className="flex items-center gap-2 flex-1 min-w-[200px]">
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            disabled={isBusy}
            placeholder="Tên element mới..."
            className="px-3 py-1.5 rounded-lg border border-purple-200 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white w-full"
          />
          <button
            onClick={handleAddFirst}
            disabled={isBusy}
            className="px-3.5 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all disabled:opacity-50 whitespace-nowrap"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>addFirst(item)</span>
          </button>
        </div>

        <button
          onClick={handleRemoveFirst}
          disabled={isBusy || nodes.length === 0}
          className="px-3.5 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all disabled:opacity-50"
        >
          <Trash2 className="w-3.5 h-3.5" />
          <span>removeFirst()</span>
        </button>

        <button
          onClick={handleReset}
          disabled={isBusy}
          className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 text-xs font-semibold flex items-center gap-1 transition-all"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset</span>
        </button>
      </div>

      {/* Visualizer Canvas Area */}
      <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-inner mb-5 overflow-x-auto">
        <div className="flex items-center gap-3 min-w-max">
          {/* HEAD Pointer Label */}
          <div className="flex flex-col items-center mr-1">
            <span className="bg-purple-500 text-white text-[10px] font-bold font-mono px-2 py-0.5 rounded shadow mb-1">
              head
            </span>
            <ArrowRight className="w-5 h-5 text-purple-400 animate-pulse" />
          </div>

          {/* Nodes Chain */}
          {nodes.length === 0 ? (
            <div className="px-6 py-4 bg-slate-950 text-slate-500 rounded-xl border border-slate-800 border-dashed text-xs font-mono">
              null (Danh sách rỗng)
            </div>
          ) : (
            nodes.map((elementVal, index) => {
              const isFirst = index === 0;
              const isRemoving = isFirst && animatingAction === "remove";

              return (
                <React.Fragment key={`${elementVal}-${index}`}>
                  {/* Node Box */}
                  <div
                    className={`flex items-stretch rounded-xl border-2 overflow-hidden transition-all duration-300 shadow-lg ${
                      isRemoving
                        ? "opacity-30 border-rose-500 bg-rose-950/40 scale-95"
                        : isFirst
                        ? "border-purple-400 bg-purple-950/80 text-white"
                        : "border-slate-700 bg-slate-800/90 text-slate-200"
                    }`}
                  >
                    {/* Element Section */}
                    <div className="px-3.5 py-2.5 font-mono text-xs font-bold border-r border-slate-700 flex flex-col justify-center bg-slate-950/40 min-w-[60px] text-center">
                      <span className="text-[9px] text-purple-400 block font-normal">element</span>
                      <span>{elementVal}</span>
                    </div>

                    {/* Next Section */}
                    <div className="px-3 py-2.5 font-mono text-[10px] flex items-center justify-center bg-purple-950/30 text-purple-300 gap-1 font-semibold">
                      <span>next</span>
                      <ArrowRight className="w-3.5 h-3.5 text-purple-400" />
                    </div>
                  </div>

                  {/* Arrow Connector to Next Node or NULL */}
                  {index < nodes.length - 1 ? (
                    <div className="flex items-center text-purple-400">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 text-slate-500 font-mono text-xs font-bold bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
                      <span className="text-slate-400">null</span>
                    </div>
                  )}
                </React.Fragment>
              );
            })
          )}
        </div>
      </div>

      {/* Commentary Box */}
      <div className="bg-purple-50/70 border border-purple-200/80 rounded-xl p-3.5 flex items-start gap-3">
        <div className="p-1.5 bg-purple-100 text-purple-700 rounded-lg shrink-0 mt-0.5">
          <Sparkles className="w-4 h-4" />
        </div>
        <div className="space-y-1 text-xs leading-relaxed">
          <span className="font-bold text-purple-950 block font-mono">
            NHẬN XÉT THUẬT TOÁN (Con trỏ & Bộ nhớ):
          </span>
          <p className="text-slate-700">{logText}</p>
        </div>
      </div>
    </div>
  );
}
