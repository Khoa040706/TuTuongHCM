"use client";

import React, { useState } from "react";
import { Plus, Zap, RotateCcw, Layers, Scale, Clock } from "lucide-react";

export default function PqBasicOpsTieBreakingStudio() {
  const [pqType, setPqType] = useState("max"); // "max" | "min"
  const [items, setItems] = useState([
    { id: 1, name: "Task Alpha", priority: 80, insertOrder: 1 },
    { id: 2, name: "Task Beta", priority: 95, insertOrder: 2 },
    { id: 3, name: "Task Gamma", priority: 80, insertOrder: 3 },
  ]);
  const [nameInput, setNameInput] = useState("Task Delta");
  const [priorityInput, setPriorityInput] = useState(80);
  const [dequeuedItem, setDequeuedItem] = useState(null);
  const [counter, setCounter] = useState(4);

  // Sorting function
  const sortedItems = [...items].sort((a, b) => {
    if (pqType === "max") {
      if (b.priority !== a.priority) return b.priority - a.priority;
      return a.insertOrder - b.insertOrder; // FIFO tie-breaking
    } else {
      if (a.priority !== b.priority) return a.priority - b.priority;
      return a.insertOrder - b.insertOrder; // FIFO tie-breaking
    }
  });

  const handleEnqueue = () => {
    if (!nameInput.trim()) return;
    const newItem = {
      id: counter,
      name: nameInput.trim(),
      priority: Number(priorityInput) || 50,
      insertOrder: counter,
    };
    setItems([...items, newItem]);
    setCounter((prev) => prev + 1);
    setNameInput(`Task #${counter + 1}`);
    setDequeuedItem(null);
  };

  const handleDequeue = () => {
    if (sortedItems.length === 0) return;
    const topItem = sortedItems[0];
    setDequeuedItem(topItem);
    setItems(items.filter((it) => it.id !== topItem.id));
  };

  const handleReset = () => {
    setItems([
      { id: 1, name: "Task Alpha", priority: 80, insertOrder: 1 },
      { id: 2, name: "Task Beta", priority: 95, insertOrder: 2 },
      { id: 3, name: "Task Gamma", priority: 80, insertOrder: 3 },
    ]);
    setCounter(4);
    setDequeuedItem(null);
  };

  return (
    <div className="my-8 rounded-3xl border border-indigo-200/80 bg-gradient-to-br from-indigo-50/80 via-white to-amber-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-indigo-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 border border-indigo-300 text-indigo-950 text-xs font-bold mb-2">
            <Layers className="w-3.5 h-3.5 text-indigo-700" />
            <span>Phép Toán Cơ Bản &amp; Xử Lý Trùng Ưu Tiên (Mục 1.2 &amp; 1.3)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-950 via-purple-950 to-slate-900 bg-clip-text text-transparent">
            Studio: Enqueue, Dequeue &amp; Tie-Breaking (FIFO)
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Khám phá 2 phép toán nền tảng của ADT PriorityQueue và cơ chế phân định khi các phần tử có <strong>cùng độ ưu tiên</strong>.
          </p>
        </div>

        {/* PQ Type Switcher */}
        <div className="flex rounded-2xl bg-slate-100 p-1 border border-slate-200 self-start md:self-auto text-xs">
          <button
            onClick={() => setPqType("max")}
            className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
              pqType === "max"
                ? "bg-amber-500 text-slate-950 shadow-sm font-mono"
                : "text-slate-600 hover:text-slate-900 font-mono"
            }`}
          >
            Max-PQ (Số lớn hơn)
          </button>
          <button
            onClick={() => setPqType("min")}
            className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
              pqType === "min"
                ? "bg-emerald-600 text-white shadow-sm font-mono"
                : "text-slate-600 hover:text-slate-900 font-mono"
            }`}
          >
            Min-PQ (Số nhỏ hơn)
          </button>
        </div>
      </div>

      {/* Input Controls */}
      <div className="p-4 rounded-2xl bg-white border border-indigo-100 shadow-sm flex flex-wrap items-center justify-between gap-3 mb-6">
        <div className="flex flex-wrap items-center gap-3 text-xs">
          <div className="flex items-center gap-1.5 bg-slate-50 px-2.5 py-1.5 rounded-xl border border-slate-200">
            <span className="text-slate-500 font-mono font-semibold">Tên:</span>
            <input
              type="text"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              className="bg-white border border-slate-300 text-slate-900 font-bold rounded-lg px-2 py-0.5 text-xs focus:outline-none focus:border-indigo-500 w-28"
            />
          </div>

          <div className="flex items-center gap-1.5 bg-slate-50 px-2.5 py-1.5 rounded-xl border border-slate-200">
            <span className="text-slate-500 font-mono font-semibold">Priority:</span>
            <input
              type="number"
              value={priorityInput}
              onChange={(e) => setPriorityInput(e.target.value)}
              className="bg-white border border-slate-300 text-amber-900 font-bold font-mono text-center rounded-lg px-1.5 py-0.5 text-xs focus:outline-none focus:border-indigo-500 w-14"
            />
          </div>

          <button
            onClick={handleEnqueue}
            className="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all flex items-center gap-1.5 shadow-sm"
          >
            <Plus className="w-3.5 h-3.5" />
            Enqueue(x)
          </button>

          <button
            onClick={handleDequeue}
            disabled={items.length === 0}
            className="px-3.5 py-1.5 bg-rose-600 hover:bg-rose-700 disabled:opacity-50 text-white font-bold rounded-xl transition-all flex items-center gap-1.5 shadow-sm"
          >
            <Zap className="w-3.5 h-3.5" />
            y &larr; Dequeue()
          </button>
        </div>

        <button
          onClick={handleReset}
          className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all flex items-center gap-1 shadow-sm"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Đặt lại
        </button>
      </div>

      {/* Main Grid: Priority Queue List vs Invariant Note */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Queue Display (7 cols) */}
        <div className="lg:col-span-7 rounded-2xl bg-white border border-indigo-100 p-5 space-y-3 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
            <span className="text-xs font-mono font-bold text-slate-800 flex items-center gap-2">
              Danh sách phần tử trong PriorityQueue ({sortedItems.length})
            </span>
            <span className="px-2.5 py-0.5 rounded-lg text-[10px] font-bold bg-indigo-50 text-indigo-900 font-mono border border-indigo-200">
              Quy ước: {pqType === "max" ? "Số lớn ưu tiên cao hơn" : "Số nhỏ ưu tiên cao hơn"}
            </span>
          </div>

          <div className="space-y-2">
            {sortedItems.map((item, idx) => {
              const isTop = idx === 0;

              return (
                <div
                  key={item.id}
                  className={`p-3.5 rounded-xl border transition-all flex items-center justify-between shadow-sm ${
                    isTop
                      ? "bg-indigo-50 border-indigo-300 text-slate-900"
                      : "bg-slate-50 border-slate-200 text-slate-700"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-6 h-6 rounded-lg flex items-center justify-center font-bold font-mono text-[11px] shadow-sm ${
                        isTop ? "bg-indigo-600 text-white" : "bg-slate-200 text-slate-700"
                      }`}
                    >
                      #{idx + 1}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 flex items-center gap-2">
                        <span>{item.name}</span>
                        {isTop && (
                          <span className="px-2 py-0.5 rounded text-[9px] font-bold uppercase bg-indigo-100 border border-indigo-300 text-indigo-950 font-mono">
                            Đỉnh Queue (Next Dequeue)
                          </span>
                        )}
                      </div>
                      <div className="text-[10px] text-slate-500 font-mono mt-0.5">
                        Thời điểm chèn (Insert Order): #{item.insertOrder}
                      </div>
                    </div>
                  </div>

                  <div className="text-right font-mono">
                    <span className="text-[10px] text-slate-500 block">Priority Key:</span>
                    <strong className="text-sm font-extrabold text-amber-900">{item.priority}</strong>
                  </div>
                </div>
              );
            })}

            {sortedItems.length === 0 && (
              <div className="p-6 text-center text-xs text-slate-500 font-mono bg-slate-50 rounded-xl border border-dashed border-slate-200">
                PriorityQueue rỗng. Hãy bấm Enqueue để thêm phần tử.
              </div>
            )}
          </div>

          {/* Dequeue Result Notification */}
          {dequeuedItem && (
            <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-950 flex items-center gap-2 shadow-sm">
              <Zap className="w-4 h-4 text-rose-600 flex-shrink-0" />
              <span>
                Đã Dequeue: <strong>{dequeuedItem.name}</strong> (Priority = {dequeuedItem.priority}, Insert #{dequeuedItem.insertOrder}).
              </span>
            </div>
          )}
        </div>

        {/* Tie-Breaking & DS Invariant Card (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl bg-white border border-indigo-100 p-5 space-y-4 shadow-sm self-stretch flex flex-col justify-between">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-900 font-mono">
              Quy Tắc Vàng (Slide 1.2 &amp; 1.3):
            </span>

            <div className="p-3.5 rounded-xl bg-teal-50/80 border border-teal-200 space-y-1.5">
              <div className="text-[11px] font-bold text-teal-950 uppercase font-mono flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-teal-700" />
                Cơ Chế Tie-Breaking (FIFO):
              </div>
              <p className="text-[11px] text-slate-700 leading-relaxed font-sans">
                Nếu có <strong>nhiều item cùng priority cao nhất</strong> &rarr; trả về item được chèn <strong>đầu tiên</strong> (theo thứ tự First-In-First-Out).
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 space-y-1.5">
              <div className="text-[11px] font-bold text-amber-950 uppercase font-mono flex items-center gap-1.5">
                <Scale className="w-3.5 h-3.5 text-amber-700" />
                Duy Trì Tính Chất Cấu Trúc (Maintain Invariant):
              </div>
              <p className="text-[11px] text-slate-700 leading-relaxed font-sans">
                Hầu hết cấu trúc dữ liệu đều có tính chất riêng. Mọi phép toán (như Enqueue, Dequeue) bắt buộc phải <strong>duy trì tính chất đó</strong> sau khi hoàn thành.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-indigo-50 border border-indigo-200 text-[11px] text-indigo-950">
            📌 <strong>Tóm tắt:</strong> <code>Enqueue(x)</code> đưa phần tử vào, <code>Dequeue()</code> luôn rút phần tử ưu tiên cao nhất!
          </div>
        </div>
      </div>
    </div>
  );
}
