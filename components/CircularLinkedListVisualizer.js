"use client";
import React, { useState } from "react";
import { ArrowRight, Plus, Trash2, RotateCcw, Repeat, Sparkles, AlertCircle } from "lucide-react";

export default function CircularLinkedListVisualizer() {
  const [nodes, setNodes] = useState(["Node A", "Node B", "Node C", "Node D"]);
  const [newItem, setNewItem] = useState("Node E");
  const [logText, setLogText] = useState(
    "Circular Linked List: Nối con trỏ tail.next quay ngược về head, tạo thành vòng lặp vô tận."
  );

  const handleAddLast = () => {
    if (!newItem.trim()) return;
    const val = newItem.trim();
    if (nodes.length === 0) {
      setNodes([val]);
      setLogText(`Thêm phần tử duy nhất "${val}". head và tail cùng trỏ vào đây, tail.next trỏ lại chính nó!`);
    } else {
      setNodes([...nodes, val]);
      setLogText(
        `addLast("${val}"): Node mới được chèn sau tail cũ, tail chuyển sang "${val}" và tail.next quay về head ("${nodes[0]}").`
      );
    }
    setNewItem(`Node ${String.fromCharCode(65 + nodes.length + 1)}`);
  };

  const handleAddFirst = () => {
    if (!newItem.trim()) return;
    const val = newItem.trim();
    if (nodes.length === 0) {
      setNodes([val]);
      setLogText(`Thêm phần tử duy nhất "${val}". head và tail cùng trỏ vào đây, tail.next trỏ lại chính nó!`);
    } else {
      setNodes([val, ...nodes]);
      setLogText(
        `addFirst("${val}"): Node mới thành head mới. Con trỏ tail.next ("${nodes[nodes.length - 1]}") được cập nhật trỏ về head mới "${val}".`
      );
    }
    setNewItem(`Node ${String.fromCharCode(65 + nodes.length + 1)}`);
  };

  const handleRemoveHead = () => {
    if (nodes.length === 0) return;
    const removed = nodes[0];
    if (nodes.length === 1) {
      setNodes([]);
      setLogText(`Đã xóa phần tử cuối cùng "${removed}". List trở nên rỗng.`);
    } else {
      const nextHead = nodes[1];
      setNodes(nodes.slice(1));
      setLogText(
        `Xóa head "${removed}": head mới là "${nextHead}". Cập nhật con trỏ tail.next trỏ tới "${nextHead}".`
      );
    }
  };

  const handleReset = () => {
    setNodes(["Node A", "Node B", "Node C", "Node D"]);
    setNewItem("Node E");
    setLogText("Đã khôi phục Circular Linked List ban đầu.");
  };

  return (
    <div className="w-full bg-white rounded-2xl border border-teal-200/80 shadow-xl p-5 md:p-6 my-6 font-sans">
      {/* Header */}
      <div className="pb-4 mb-4 border-b border-teal-100">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-teal-100 text-teal-700 text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full uppercase">
                Mô phỏng Trực quan IX.1
              </span>
              <span className="text-xs text-slate-500 font-mono">Circular LinkedList</span>
            </div>
            <h3 className="text-base md:text-lg font-bold text-slate-900 mt-1 flex items-center gap-2">
              <Repeat className="w-5 h-5 text-teal-600 animate-spin-slow" />
              Circular Linked List (Danh sách Liên kết Vòng)
            </h3>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="px-2.5 py-1 rounded-lg bg-teal-50 border border-teal-200 text-teal-700">
              head: <strong className="text-teal-900">{nodes.length > 0 ? nodes[0] : "null"}</strong>
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-amber-50 border border-amber-200 text-amber-700">
              tail: <strong className="text-amber-900">{nodes.length > 0 ? nodes[nodes.length - 1] : "null"}</strong>
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Controls Bar */}
      <div className="bg-slate-900 p-4 rounded-xl text-white mb-6 border border-slate-800">
        <div className="flex flex-wrap items-center gap-3">
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Tên node..."
            className="bg-slate-800 border border-slate-700 text-slate-100 text-sm rounded-lg px-3 py-2 focus:outline-none focus:border-teal-500 w-32 md:w-40"
          />
          <button
            onClick={handleAddFirst}
            className="flex items-center gap-1.5 px-3 py-2 bg-teal-600 hover:bg-teal-500 text-white text-xs font-medium rounded-lg transition-colors"
          >
            <Plus className="w-4 h-4" /> addFirst
          </button>
          <button
            onClick={handleAddLast}
            className="flex items-center gap-1.5 px-3 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium rounded-lg transition-colors"
          >
            <Plus className="w-4 h-4" /> addLast
          </button>
          <button
            onClick={handleRemoveHead}
            disabled={nodes.length === 0}
            className="flex items-center gap-1.5 px-3 py-2 bg-rose-600 hover:bg-rose-500 disabled:opacity-50 text-white text-xs font-medium rounded-lg transition-colors"
          >
            <Trash2 className="w-4 h-4" /> removeHead
          </button>
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 px-3 py-2 bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs font-medium rounded-lg transition-colors ml-auto"
          >
            <RotateCcw className="w-4 h-4" /> Reset
          </button>
        </div>
      </div>

      {/* Visual Ring Representation */}
      <div className="relative min-h-[220px] bg-slate-50 rounded-xl p-6 border border-slate-200 flex flex-col items-center justify-center overflow-x-auto">
        {nodes.length === 0 ? (
          <div className="text-center text-slate-400 py-8">
            <AlertCircle className="w-8 h-8 mx-auto mb-2 opacity-50" />
            <p className="text-sm font-medium">Danh sách rỗng (head = null, tail = null)</p>
          </div>
        ) : (
          <div className="w-full flex flex-col items-center">
            {/* Linear nodes visual with returning tail arrow banner */}
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 my-4">
              {nodes.map((item, idx) => {
                const isHead = idx === 0;
                const isTail = idx === nodes.length - 1;
                return (
                  <React.Fragment key={idx}>
                    <div className="relative group">
                      {/* Pointer Indicator Badges */}
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex items-center gap-1">
                        {isHead && (
                          <span className="bg-teal-600 text-white text-[10px] font-mono font-bold px-1.5 py-0.5 rounded shadow">
                            head
                          </span>
                        )}
                        {isTail && (
                          <span className="bg-amber-600 text-white text-[10px] font-mono font-bold px-1.5 py-0.5 rounded shadow">
                            tail
                          </span>
                        )}
                      </div>

                      {/* Node Body */}
                      <div
                        className={`flex border-2 rounded-xl overflow-hidden shadow-md transition-all ${
                          isHead && isTail
                            ? "border-teal-500 ring-2 ring-teal-300"
                            : isHead
                            ? "border-teal-500 bg-teal-50/50"
                            : isTail
                            ? "border-amber-500 bg-amber-50/50"
                            : "border-slate-300 bg-white"
                        }`}
                      >
                        <div className="px-3 py-2 font-mono font-bold text-slate-800 text-sm border-r border-slate-200">
                          {item}
                        </div>
                        <div className="px-2 py-2 bg-slate-100 text-xs font-mono text-slate-500 flex items-center justify-center min-w-[36px]">
                          {isTail ? "next" : "next"}
                        </div>
                      </div>
                    </div>

                    {/* Arrow to next node */}
                    {!isTail && (
                      <ArrowRight className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            {/* Returning tail.next -> head indicator banner */}
            <div className="mt-4 w-full max-w-xl bg-teal-900 text-teal-100 rounded-xl p-3 border border-teal-700 flex items-center justify-between text-xs font-mono shadow-md">
              <div className="flex items-center gap-2">
                <Repeat className="w-4 h-4 text-teal-300 shrink-0" />
                <span>
                  <strong>tail.next</strong> ({nodes[nodes.length - 1]}) &rarr; <strong>head</strong> ({nodes[0]})
                </span>
              </div>
              <span className="bg-teal-700 text-teal-100 px-2 py-0.5 rounded text-[10px] uppercase tracking-wider font-bold">
                Vòng khép kín
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Log Box */}
      <div className="mt-4 bg-teal-50/80 border border-teal-200 rounded-xl p-3.5 flex items-start gap-2.5 text-xs text-teal-900 font-sans">
        <Sparkles className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
        <div>
          <strong className="font-semibold block text-teal-950 mb-0.5">Nhật ký mô phỏng:</strong>
          <span>{logText}</span>
        </div>
      </div>
    </div>
  );
}
