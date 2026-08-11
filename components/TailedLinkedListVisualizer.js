"use client";
import React, { useState } from "react";
import { ArrowRight, Plus, RotateCcw, Sparkles, Zap, ShieldAlert, CheckCircle2 } from "lucide-react";

export default function TailedLinkedListVisualizer() {
  const [nodes, setNodes] = useState(["aaa", "bbb", "ccc"]);
  const [newItem, setNewItem] = useState("xxx");
  const [logText, setLogText] = useState("TailedLinkedList có 2 con trỏ: head (trỏ node đầu) và tail (trỏ node cuối).");

  const headVal = nodes.length > 0 ? nodes[0] : "null";
  const tailVal = nodes.length > 0 ? nodes[nodes.length - 1] : "null";

  // addLast(item) - O(1)
  const handleAddLast = () => {
    if (!newItem.trim()) return;
    const val = newItem.trim();

    if (nodes.length === 0) {
      setNodes([val]);
      setLogText(`addLast("${val}") trên list rỗng: Node mới vừa là head vừa là tail! (num_nodes: 1)`);
    } else {
      setNodes([...nodes, val]);
      setLogText(`addLast("${val}"): Nhờ có con trỏ tail, ta nối tail.next = newNode và chuyển tail = newNode trong O(1) mà KHÔNG cần duyệt từ đầu!`);
    }
    setNewItem(`item${nodes.length + 1}`);
  };

  // addFirst(item)
  const handleAddFirst = () => {
    if (!newItem.trim()) return;
    const val = newItem.trim();
    const updated = [val, ...nodes];
    setNodes(updated);
    if (updated.length === 1) {
      setLogText(`addFirst("${val}"): List vừa tạo có 1 phần tử, cả head và tail đều trỏ tới "${val}".`);
    } else {
      setLogText(`addFirst("${val}"): Chèn vào đầu. head trỏ tới "${val}", tail vẫn giữ nguyên trỏ tới "${tailVal}".`);
    }
    setNewItem(`item${updated.length + 1}`);
  };

  const handleReset = () => {
    setNodes(["aaa", "bbb", "ccc"]);
    setNewItem("xxx");
    setLogText("Đã khôi phục TailedLinkedList ban đầu (head='aaa', tail='ccc').");
  };

  return (
    <div className="w-full bg-white rounded-2xl border border-purple-200/80 shadow-xl p-5 md:p-6 my-6 font-sans">
      {/* Header */}
      <div className="pb-4 mb-4 border-b border-purple-100">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-purple-100 text-purple-700 text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full uppercase">
                Mô phỏng Trực quan VIII.3
              </span>
              <span className="text-xs text-slate-500 font-mono">TailedLinkedList (Dual Pointer)</span>
            </div>
            <h3 className="text-base md:text-lg font-bold text-slate-900 mt-1">
              Thao tác <code className="text-purple-700 font-mono">addLast()</code> đạt độ phức tạp <span className="text-emerald-600 font-mono">O(1)</span> nhờ con trỏ <code className="text-indigo-700 font-mono">tail</code>
            </h3>
          </div>

          {/* Dual Pointer Status Badges */}
          <div className="flex items-center gap-2 text-xs font-mono">
            <div className="bg-purple-100 text-purple-900 border border-purple-300 px-2.5 py-1 rounded-lg font-bold">
              head: <span className="text-purple-700">{headVal}</span>
            </div>
            <div className="bg-indigo-100 text-indigo-900 border border-indigo-300 px-2.5 py-1 rounded-lg font-bold">
              tail: <span className="text-indigo-700">{tailVal}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Controls Bar */}
      <div className="flex flex-wrap items-center gap-3 mb-5 bg-slate-900 p-3.5 rounded-xl border border-slate-800 text-white">
        <div className="flex items-center gap-2 flex-1 min-w-[200px]">
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Tên phần tử mới..."
            className="px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-950 text-xs font-mono text-white focus:outline-none focus:border-purple-400 w-full"
          />
          <button
            onClick={handleAddLast}
            className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold font-mono flex items-center gap-1.5 shadow whitespace-nowrap"
          >
            <Zap className="w-3.5 h-3.5 text-emerald-200 fill-current" />
            <span>addLast(item) O(1)</span>
          </button>
        </div>

        <button
          onClick={handleAddFirst}
          className="px-3.5 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold font-mono flex items-center gap-1.5 shadow"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>addFirst()</span>
        </button>

        <button
          onClick={handleReset}
          className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono flex items-center gap-1"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset</span>
        </button>
      </div>

      {/* Dual Pointer Visual Canvas */}
      <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 shadow-inner mb-4 overflow-x-auto">
        <div className="flex items-center gap-3 min-w-max">
          {/* Head Pointer Label */}
          <div className="flex flex-col items-center mr-1">
            <span className="bg-purple-500 text-white text-[10px] font-bold font-mono px-2 py-0.5 rounded shadow mb-1">
              head
            </span>
            <ArrowRight className="w-5 h-5 text-purple-400 animate-pulse" />
          </div>

          {/* Chain */}
          {nodes.length === 0 ? (
            <span className="text-slate-500 font-mono text-xs italic px-3 py-1.5 bg-slate-900 rounded border border-slate-800">
              head = null, tail = null (List rỗng)
            </span>
          ) : (
            nodes.map((val, idx) => {
              const isHead = idx === 0;
              const isTail = idx === nodes.length - 1;

              return (
                <React.Fragment key={idx}>
                  <div
                    className={`flex items-stretch rounded-xl border-2 overflow-hidden font-mono text-xs transition-all relative ${
                      isTail
                        ? "border-indigo-400 bg-indigo-950/80 text-white ring-2 ring-indigo-400/40 shadow-lg shadow-indigo-950"
                        : isHead
                        ? "border-purple-400 bg-purple-950/80 text-white"
                        : "border-slate-800 bg-slate-900 text-slate-300"
                    }`}
                  >
                    {/* Tail Pointer Badge */}
                    {isTail && (
                      <span className="absolute -top-3.5 right-2 bg-indigo-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow flex items-center gap-0.5">
                        tail →
                      </span>
                    )}

                    <div className="px-3.5 py-2.5 border-r border-slate-800 font-bold bg-slate-950/50">
                      {val}
                    </div>
                    <div className="px-2.5 py-2.5 text-[10px] text-purple-300 flex items-center gap-1">
                      <span>next</span>
                      <ArrowRight className="w-3 h-3 text-purple-400" />
                    </div>
                  </div>

                  {idx < nodes.length - 1 ? (
                    <ArrowRight className="w-4 h-4 text-purple-400 shrink-0" />
                  ) : (
                    <span className="text-slate-500 font-mono text-xs font-bold bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
                      null
                    </span>
                  )}
                </React.Fragment>
              );
            })
          )}
        </div>
      </div>

      {/* Commentary Box */}
      <div className="p-3.5 bg-purple-50/70 border border-purple-200 rounded-xl text-xs text-slate-700 space-y-1.5">
        <div className="flex items-center gap-2 font-bold text-purple-950 font-mono text-[11px]">
          <Sparkles className="w-4 h-4 text-purple-600 shrink-0" />
          <span>NHẬN XẾT VỀ CON TRỎ TAIL & NGUYÊN TẮC "NO FREE LUNCH":</span>
        </div>
        <p className="leading-relaxed">{logText}</p>
        <div className="text-[11px] text-amber-900 bg-amber-100/70 p-2 rounded-lg border border-amber-200 flex items-start gap-1.5 font-sans">
          <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <span>
            <strong>"No free lunch":</strong> Thêm <code>tail</code> giúp <code>addLast()</code> đạt $O(1)$, nhưng cái giá phải trả là ta phải cẩn thận bảo trì <code>tail</code> trong <strong>tất cả</strong> các phương thức cập nhật (addFirst, addAfter, removeAfter...).
          </span>
        </div>
      </div>
    </div>
  );
}
