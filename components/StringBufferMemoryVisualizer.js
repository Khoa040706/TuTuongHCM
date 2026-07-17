"use client";
import React, { useState } from "react";

export default function StringBufferMemoryVisualizer() {
  const [constructorType, setConstructorType] = useState("string"); // empty, string, custom
  const [inputString, setInputString] = useState("Hello");
  const [customCapacity, setCustomCapacity] = useState(20);

  // Compute length and capacity
  let length = 0;
  let capacity = 16;
  let calculationFormula = "";

  if (constructorType === "empty") {
    length = 0;
    capacity = 16;
    calculationFormula = "Mặc định: 16 ký tự đệm trống.";
  } else if (constructorType === "string") {
    length = inputString.length;
    capacity = inputString.length + 16;
    calculationFormula = `Độ dài chuỗi (${inputString.length}) + 16 ký tự đệm = ${capacity}`;
  } else if (constructorType === "custom") {
    length = 0;
    capacity = Math.max(0, parseInt(customCapacity, 10) || 0);
    calculationFormula = `Dung lượng tự định nghĩa đầu vào = ${capacity}`;
  }

  // Generate buffer array cells (up to 32 cells to fit screen sizes)
  const displayLimit = 32;
  const cells = [];
  for (let i = 0; i < capacity; i++) {
    if (i >= displayLimit) break;
    const char = constructorType === "string" && i < length ? inputString[i] : "";
    cells.push({ index: i, char, isFilled: constructorType === "string" && i < length });
  }

  return (
    <div className="bg-white border border-stone-200 rounded-3xl p-5 md:p-6 my-6 shadow-sm font-sans text-stone-850">
      <div className="border-b border-stone-200 pb-3 mb-4">
        <span className="bg-emerald-100 text-emerald-800 text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md">Trực quan hóa RAM</span>
        <h4 className="text-base font-extrabold text-stone-900 mt-1">
          Memory Buffer Visualizer (Length vs Capacity)
        </h4>
        <p className="text-xs text-stone-500 mt-1">
          Java sử dụng một mảng ký tự <code>char[]</code> động bên trong StringBuffer. Thay đổi Constructor dưới đây để quan sát sự khác biệt.
        </p>
      </div>

      {/* Constructor Selector */}
      <div className="grid grid-cols-3 gap-2.5 mb-5">
        <button
          onClick={() => setConstructorType("empty")}
          className={`px-3 py-2 text-xs font-bold rounded-xl border transition-all ${
            constructorType === "empty"
              ? "bg-emerald-50 border-emerald-500 text-emerald-900 shadow-sm animate-pulse"
              : "bg-stone-50 border-stone-200 hover:border-stone-300 text-stone-600"
          }`}
        >
          StringBuffer()
        </button>
        <button
          onClick={() => setConstructorType("string")}
          className={`px-3 py-2 text-xs font-bold rounded-xl border transition-all ${
            constructorType === "string"
              ? "bg-emerald-50 border-emerald-500 text-emerald-900 shadow-sm"
              : "bg-stone-50 border-stone-200 hover:border-stone-300 text-stone-600"
          }`}
        >
          StringBuffer(String str)
        </button>
        <button
          onClick={() => setConstructorType("custom")}
          className={`px-3 py-2 text-xs font-bold rounded-xl border transition-all ${
            constructorType === "custom"
              ? "bg-emerald-50 border-emerald-500 text-emerald-900 shadow-sm"
              : "bg-stone-50 border-stone-200 hover:border-stone-300 text-stone-600"
          }`}
        >
          StringBuffer(int capacity)
        </button>
      </div>

      {/* Dynamic input depending on selected constructor */}
      {constructorType === "string" && (
        <div className="mb-5 space-y-1.5 animate-in fade-in duration-200">
          <label className="block text-[10px] font-black text-stone-400 uppercase tracking-wider">Nhập nội dung chuỗi khởi tạo:</label>
          <input
            type="text"
            value={inputString}
            onChange={(e) => setInputString(e.target.value.slice(0, 32))}
            placeholder="Ví dụ: Hello"
            className="w-full px-3 py-2 text-sm border border-stone-200 rounded-xl focus:outline-none focus:border-emerald-500 bg-stone-50 text-stone-800 font-mono"
          />
        </div>
      )}

      {constructorType === "custom" && (
        <div className="mb-5 space-y-1.5 animate-in fade-in duration-200">
          <label className="block text-[10px] font-black text-stone-400 uppercase tracking-wider">Nhập dung lượng khởi tạo (capacity):</label>
          <input
            type="number"
            value={customCapacity}
            onChange={(e) => setCustomCapacity(Math.min(100, Math.max(0, parseInt(e.target.value, 10) || 0)))}
            placeholder="Ví dụ: 20"
            className="w-full px-3 py-2 text-sm border border-stone-200 rounded-xl focus:outline-none focus:border-emerald-500 bg-stone-50 text-stone-800 font-mono"
          />
        </div>
      )}

      {/* Metrics Badges */}
      <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-stone-50 border border-stone-150 mb-5 select-none text-xs">
        <div>
          <span className="text-[9px] font-black text-stone-400 uppercase tracking-wider block">1. Kích thước (Length)</span>
          <span className="text-base font-black text-rose-600 font-mono mt-0.5 inline-block">{length}</span>
          <span className="text-[10px] text-stone-500 block">Ký tự hiện tại (<code>sb.length()</code>)</span>
        </div>
        <div className="border-l border-stone-200 pl-4">
          <span className="text-[9px] font-black text-stone-400 uppercase tracking-wider block">2. Sức chứa (Capacity)</span>
          <span className="text-base font-black text-emerald-600 font-mono mt-0.5 inline-block">{capacity}</span>
          <span className="text-[10px] text-stone-500 block">Dung lượng đệm trong (<code>sb.capacity()</code>)</span>
        </div>
      </div>

      {/* RAM Memory Cell Map */}
      <div className="mb-5">
        <div className="text-[10px] font-black text-stone-400 uppercase tracking-wider mb-2 select-none">Bản đồ ô nhớ char[] nội bộ của StringBuffer:</div>
        
        <div className="flex flex-wrap gap-1.5 p-3 rounded-2xl bg-stone-950 border border-stone-850 min-h-[75px] items-center">
          {cells.map((cell) => (
            <div
              key={cell.index}
              className={`w-7 h-9 rounded-lg flex flex-col justify-between items-center py-1 transition-all select-none border ${
                cell.isFilled
                  ? "bg-emerald-950/45 border-emerald-500 text-emerald-400 font-bold"
                  : "bg-stone-900 border-stone-800 text-stone-600 border-dashed"
              }`}
            >
              <span className="text-[7px] text-stone-500 font-mono">{cell.index}</span>
              <span className="text-xs font-mono">{cell.char || "·"}</span>
            </div>
          ))}
          {capacity > displayLimit && (
            <div className="w-8 h-9 flex items-center justify-center text-stone-650 font-mono font-bold text-xs select-none">
              ...+{capacity - displayLimit}
            </div>
          )}
        </div>
        
        <div className="flex items-center gap-4 mt-2.5 text-[9px] text-stone-500 select-none">
          <div className="flex items-center gap-1.5">
            <span className="inline-block w-2.5 h-2.5 rounded bg-emerald-950/45 border border-emerald-500" />
            <span>Ký tự có sẵn (Length)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="inline-block w-2.5 h-2.5 rounded bg-stone-900 border border-stone-800 border-dashed" />
            <span>Ô đệm dự phòng (Capacity)</span>
          </div>
        </div>
      </div>

      {/* Formula Explanation box */}
      <div className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-3.5 text-xs text-stone-700 leading-relaxed font-sans">
        <strong className="text-emerald-900">🧮 Công thức tính toán dung lượng đệm:</strong>
        <p className="mt-1 font-mono text-[11px] bg-white/70 px-2 py-1 rounded border border-emerald-50 inline-block font-semibold">
          {calculationFormula}
        </p>
        <p className="text-[10px] text-stone-500 mt-1.5 italic">
          💡 Lưu ý: Khi chuỗi được nối thêm vượt quá sức chứa hiện tại (capacity), StringBuffer sẽ tự động cấp phát mảng mới có kích thước lớn hơn (thường bằng <code>(capacity cũ * 2) + 2</code>) và sao chép dữ liệu sang mảng mới.
        </p>
      </div>
    </div>
  );
}
