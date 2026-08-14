"use client";
import React, { useState } from "react";
import { Layers, Plus, Trash2, Eye, RotateCcw, AlertCircle, Sparkles, CheckCircle2 } from "lucide-react";

export default function StackArrayVisualizer() {
  const maxSize = 8;
  const [arr, setArr] = useState(["val1", "val2", "val3"]);
  const [top, setTop] = useState(2); // top index 2 -> arr[0], arr[1], arr[2]
  const [newItem, setNewItem] = useState("val4");
  const [logText, setLogText] = useState(
    "StackArr: Dùng mảng cố định + con trỏ top (chỉ số phần tử đỉnh). Ban đầu top = -1 (Stack rỗng)."
  );
  const [exceptionMsg, setExceptionMsg] = useState("");

  const handlePush = () => {
    setExceptionMsg("");
    if (!newItem.trim()) return;
    const val = newItem.trim();

    if (top >= maxSize - 1) {
      setLogText(`⚠️ top (${top}) >= maxSize-1 (${maxSize - 1}): Mảng bị ĐẦY! Bắt buộc phải gọi enlargeArr() để nhân đôi mảng.`);
      return;
    }

    const nextTop = top + 1;
    const newArr = [...arr];
    newArr[nextTop] = val;
    setArr(newArr);
    setTop(nextTop);
    setLogText(`push("${val}"): Tăng top từ ${top} lên ${nextTop}, gán arr[${nextTop}] = "${val}".`);
    setNewItem(`val${nextTop + 2}`);
  };

  const handlePop = () => {
    setExceptionMsg("");
    if (top < 0) {
      setExceptionMsg("EmptyStackException: Không thể pop() vì Stack đang RỖNG (top = -1)!");
      setLogText("❌ Ném EmptyStackException() vì top < 0.");
      return;
    }

    const poppedVal = arr[top];
    const newArr = [...arr];
    newArr[top] = undefined;
    const nextTop = top - 1;

    setArr(newArr);
    setTop(nextTop);
    setLogText(`pop(): Lấy arr[${top}] = "${poppedVal}", sau đó giảm top xuống ${nextTop}.`);
  };

  const handlePeek = () => {
    setExceptionMsg("");
    if (top < 0) {
      setExceptionMsg("EmptyStackException: Không thể peek() vì Stack đang RỖNG (top = -1)!");
      setLogText("❌ Ném EmptyStackException() khi peek() trên Stack rỗng.");
      return;
    }
    setLogText(`peek(): Xem phần tử đỉnh arr[${top}] = "${arr[top]}" (không giảm top).`);
  };

  const handleReset = () => {
    setArr(["val1", "val2", "val3"]);
    setTop(2);
    setNewItem("val4");
    setExceptionMsg("");
    setLogText("Đã khôi phục trạng thái StackArr ban đầu (top = 2).");
  };

  return (
    <div className="w-full bg-white rounded-2xl border border-emerald-200/80 shadow-xl p-5 md:p-6 my-6 font-sans">
      {/* Header */}
      <div className="pb-4 mb-4 border-b border-emerald-100">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-emerald-100 text-emerald-700 text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full uppercase">
                Mô phỏng Cài đặt §2.1–§2.3
              </span>
              <span className="text-xs text-slate-500 font-mono">StackArr.java</span>
            </div>
            <h3 className="text-base md:text-lg font-bold text-slate-900 mt-1 flex items-center gap-2">
              <Layers className="w-5 h-5 text-emerald-600" />
              Mô Phỏng Cài Đặt Stack Bằng Mảng (StackArr) & Con Trỏ Top
            </h3>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800">
              top: <strong className="text-emerald-950 font-bold">{top}</strong> {top === -1 && "(Stack rỗng)"}
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-300 text-slate-700">
              maxSize: <strong>{maxSize}</strong>
            </span>
          </div>
        </div>
      </div>

      {/* Exception Alert Banner if any */}
      {exceptionMsg && (
        <div className="mb-4 bg-rose-50 border border-rose-300 text-rose-800 rounded-xl p-3 text-xs font-mono flex items-center gap-2 shadow-sm animate-shake">
          <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
          <span>{exceptionMsg}</span>
        </div>
      )}

      {/* Controls Bar */}
      <div className="bg-slate-900 p-4 rounded-xl text-white mb-6 border border-slate-800">
        <div className="flex flex-wrap items-center gap-2.5">
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Giá trị push..."
            className="bg-slate-800 border border-slate-700 text-slate-100 text-sm font-mono rounded-lg px-3 py-1.5 focus:outline-none focus:border-emerald-500 w-28 md:w-36"
          />
          <button
            onClick={handlePush}
            className="flex items-center gap-1 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium rounded-lg transition-colors"
          >
            <Plus className="w-3.5 h-3.5" /> push(obj)
          </button>
          <button
            onClick={handlePop}
            className="flex items-center gap-1 px-3 py-1.5 bg-rose-600 hover:bg-rose-500 text-white text-xs font-medium rounded-lg transition-colors"
          >
            <Trash2 className="w-3.5 h-3.5" /> pop()
          </button>
          <button
            onClick={handlePeek}
            className="flex items-center gap-1 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium rounded-lg transition-colors"
          >
            <Eye className="w-3.5 h-3.5" /> peek()
          </button>
          <button
            onClick={handleReset}
            className="flex items-center gap-1 px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs font-medium rounded-lg transition-colors ml-auto"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Reset
          </button>
        </div>
      </div>

      {/* Graphical Array Visual Container */}
      <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 overflow-x-auto min-h-[160px] flex flex-col items-center justify-center">
        <div className="w-full flex items-center justify-center gap-2 md:gap-3 py-4">
          {Array.from({ length: maxSize }).map((_, idx) => {
            const isTop = idx === top;
            const hasVal = idx <= top && arr[idx] !== undefined;

            return (
              <div key={idx} className="relative group flex flex-col items-center">
                {/* Pointer Top Indicator */}
                {isTop && (
                  <div className="absolute -top-7 text-center">
                    <span className="bg-emerald-600 text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded shadow">
                      top = {top}
                    </span>
                  </div>
                )}

                {/* Array Box */}
                <div
                  className={`w-14 h-16 rounded-xl border-2 flex flex-col items-center justify-between p-1.5 transition-all ${
                    isTop
                      ? "border-emerald-600 bg-emerald-50 ring-4 ring-emerald-200 shadow-lg scale-105"
                      : hasVal
                      ? "border-slate-400 bg-white"
                      : "border-dashed border-slate-300 bg-slate-100/60"
                  }`}
                >
                  <span className="text-[10px] font-mono text-slate-400">[{idx}]</span>
                  <span className={`font-mono text-xs font-bold ${hasVal ? "text-slate-900" : "text-slate-300"}`}>
                    {hasVal ? arr[idx] : "null"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Log Box */}
      <div className="mt-4 bg-emerald-50/80 border border-emerald-200 rounded-xl p-3.5 flex items-start gap-2.5 text-xs text-emerald-950 font-sans">
        <Sparkles className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
        <div>
          <strong className="font-semibold block mb-0.5">Nhật ký thao tác StackArr:</strong>
          <span>{logText}</span>
        </div>
      </div>
    </div>
  );
}
