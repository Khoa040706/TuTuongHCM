"use client";
import React, { useState } from "react";
import { ArrowRight, ArrowLeft, Plus, Trash2, RotateCcw, AlertTriangle, Play, Sparkles } from "lucide-react";

export default function ArrayShiftVisualizer() {
  const MAXSIZE = 7;
  const [array, setArray] = useState(["Cat", "Dog", "Bird", "Fish"]);
  const [newItem, setNewItem] = useState("Lion");
  const [animatingIndex, setAnimatingIndex] = useState(null);
  const [actionLog, setActionLog] = useState("Sẵn sàng thực thi addFirst() hoặc removeFirst().");
  const [isBusy, setIsBusy] = useState(false);
  const [lastAction, setLastAction] = useState(null);

  const num_nodes = array.length;

  // Add First (Shift Right)
  const handleAddFirst = async () => {
    if (num_nodes >= MAXSIZE) {
      setActionLog("❌ LỖI: Array đầy! (num_nodes == MAXSIZE = 7). Không thể addFirst.");
      return;
    }
    if (!newItem.trim()) return;

    setIsBusy(true);
    setLastAction("add");
    setActionLog(`1. Đang shift right: Chuyển các phần tử từ cuối về sau 1 vị trí...`);

    // Animate shifting right step by step
    for (let i = num_nodes - 1; i >= 0; i--) {
      setAnimatingIndex(i);
      await new Promise((r) => setTimeout(r, 250));
    }

    setAnimatingIndex(null);
    const updated = [newItem.trim(), ...array];
    setArray(updated);
    setActionLog(`2. Ghi giá trị mới "${newItem.trim()}" vào arr[0]. 3. Cập nhật num_nodes++ (${updated.length}/${MAXSIZE}).`);
    setNewItem(`Item${updated.length + 1}`);
    setIsBusy(false);
  };

  // Remove First (Shift Left)
  const handleRemoveFirst = async () => {
    if (num_nodes === 0) {
      setActionLog("❌ LỖI: Array rỗng! (num_nodes == 0). Thao tác removeFirst() thất bại.");
      return;
    }

    setIsBusy(true);
    setLastAction("remove");
    const removedItem = array[0];
    setActionLog(`1. Lưu tạm arr[0] = "${removedItem}". Đang shift left: Dịch các phần tử từ vị trí 1 sang trái...`);

    // Animate shifting left
    for (let i = 1; i < num_nodes; i++) {
      setAnimatingIndex(i);
      await new Promise((r) => setTimeout(r, 250));
    }

    setAnimatingIndex(null);
    const updated = array.slice(1);
    setArray(updated);
    setActionLog(`2. Đã dồn khoảng trống! Đã xóa "${removedItem}". 3. Cập nhật num_nodes-- (${updated.length}/${MAXSIZE}).`);
    setIsBusy(false);
  };

  // Reset
  const handleReset = () => {
    setArray(["Cat", "Dog", "Bird", "Fish"]);
    setNewItem("Lion");
    setActionLog("Đã khôi phục mảng ban đầu (num_nodes = 4).");
    setAnimatingIndex(null);
    setLastAction(null);
  };

  return (
    <div className="w-full bg-white rounded-2xl border border-purple-200/80 shadow-xl p-5 md:p-6 my-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-5 border-b border-purple-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-purple-100 text-purple-700 text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full uppercase">
              Mô phỏng Trực quan III.3
            </span>
            <span className="text-xs text-slate-500 font-mono">ListUsingArray Shift Mechanics</span>
          </div>
          <h3 className="text-base md:text-lg font-bold text-slate-900 mt-1">
            Cách hoạt động của <code className="text-purple-700 font-mono">addFirst()</code> & <code className="text-purple-700 font-mono">removeFirst()</code>
          </h3>
        </div>

        {/* State Badges */}
        <div className="flex items-center gap-2 text-xs font-mono">
          <div className="bg-purple-50 border border-purple-200 px-3 py-1.5 rounded-xl text-purple-950 flex items-center gap-1.5 font-semibold">
            <span>num_nodes:</span>
            <span className="text-purple-700 font-bold text-sm">{num_nodes}</span>
          </div>
          <div className="bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-xl text-slate-600 font-semibold">
            MAXSIZE: <span className="font-bold">{MAXSIZE}</span>
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
            disabled={isBusy || num_nodes >= MAXSIZE}
            placeholder="Tên phần tử mới..."
            className="px-3 py-1.5 rounded-lg border border-purple-200 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white w-full"
          />
          <button
            onClick={handleAddFirst}
            disabled={isBusy || num_nodes >= MAXSIZE}
            className="px-3.5 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>addFirst(item)</span>
            <ArrowRight className="w-3.5 h-3.5 text-purple-200" />
          </button>
        </div>

        <button
          onClick={handleRemoveFirst}
          disabled={isBusy || num_nodes === 0}
          className="px-3.5 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-rose-200" />
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

      {/* Array Visual Box */}
      <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-inner mb-5 overflow-x-auto">
        <div className="flex items-center gap-2.5 min-w-max justify-center sm:justify-start">
          {Array.from({ length: MAXSIZE }).map((_, index) => {
            const hasData = index < num_nodes;
            const val = hasData ? array[index] : "unused";
            const isAnimating = animatingIndex === index;

            return (
              <div key={index} className="flex flex-col items-center gap-2">
                {/* Array Cell */}
                <div
                  className={`w-16 h-16 rounded-xl border-2 flex flex-col items-center justify-center transition-all duration-200 relative ${
                    isAnimating
                      ? "border-amber-400 bg-amber-500/20 scale-105 shadow-[0_0_15px_rgba(245,158,11,0.5)]"
                      : hasData
                      ? "border-purple-400/80 bg-purple-950/60 text-purple-200 shadow-lg"
                      : "border-slate-800 bg-slate-950/40 text-slate-600 border-dashed"
                  }`}
                >
                  {/* Head Indicator Badge */}
                  {index === 0 && hasData && (
                    <span className="absolute -top-3 bg-purple-500 text-white text-[9px] font-bold font-mono px-1.5 py-0.5 rounded shadow">
                      HEAD (arr[0])
                    </span>
                  )}

                  <span
                    className={`font-mono text-xs font-bold truncate max-w-[56px] px-1 ${
                      hasData ? "text-white" : "text-slate-600 italic text-[10px]"
                    }`}
                  >
                    {val}
                  </span>
                </div>

                {/* Index Indicator */}
                <span
                  className={`text-[10px] font-mono font-bold ${
                    hasData ? "text-purple-400" : "text-slate-600"
                  }`}
                >
                  arr[{index}]
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Action Log / Commentary Box */}
      <div className="bg-purple-50/70 border border-purple-200/80 rounded-xl p-3.5 flex items-start gap-3">
        <div className="p-1.5 bg-purple-100 text-purple-700 rounded-lg shrink-0 mt-0.5">
          <Sparkles className="w-4 h-4" />
        </div>
        <div className="space-y-1 text-xs leading-relaxed">
          <span className="font-bold text-purple-950 block font-mono">
            NHẬN XÉT THUẬT TOÁN (Complexity: O(n)):
          </span>
          <p className="text-slate-700">{actionLog}</p>
        </div>
      </div>
    </div>
  );
}
