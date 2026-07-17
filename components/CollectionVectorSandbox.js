"use client";
import React, { useState } from "react";
import { Cpu, Plus, RefreshCw } from "lucide-react";

export default function CollectionVectorSandbox() {
  const [vectorData, setVectorData] = useState(["503005", "502043"]);
  const [inputValue, setInputValue] = useState("501042");
  const [inputIndex, setInputIndex] = useState("0");
  const [actionLog, setActionLog] = useState("Vector đã sẵn sàng. Nhập giá trị và thử các hàm add/remove!");
  const [javaCode, setJavaCode] = useState("// Khởi tạo Vector\nVector<String> courses = new Vector<>();\ncourses.add(\"503005\");\ncourses.add(\"502043\");");

  const [animatingIndex, setAnimatingIndex] = useState(null); // index being shifted or inserted
  const [animationType, setAnimationType] = useState(""); // "SHIFT_RIGHT" | "SHIFT_LEFT" | "INSERT" | "DELETE"

  const handleAddEnd = () => {
    if (!inputValue.trim()) return;
    const newVal = inputValue.trim();
    const updated = [...vectorData, newVal];
    setVectorData(updated);
    setJavaCode(`courses.add("${newVal}");`);
    setActionLog(`Đã chạy: add("${newVal}") ➔ Thêm phần tử vào cuối danh sách.`);
    setAnimatingIndex(updated.length - 1);
    setAnimationType("INSERT");
    setTimeout(() => { setAnimatingIndex(null); setAnimationType(""); }, 800);
  };

  const handleAddIndex = () => {
    if (!inputValue.trim()) return;
    const newVal = inputValue.trim();
    const idx = parseInt(inputIndex);
    if (isNaN(idx) || idx < 0 || idx > vectorData.length) {
      setActionLog("Lỗi: Index chèn không hợp lệ (phải từ 0 đến " + vectorData.length + ")");
      return;
    }

    setAnimationType("SHIFT_RIGHT");
    setAnimatingIndex(idx);
    setActionLog(`Đang dịch chuyển các phần tử từ index ${idx} sang phải để lấy chỗ chèn...`);

    setTimeout(() => {
      const updated = [...vectorData];
      updated.splice(idx, 0, newVal);
      setVectorData(updated);
      setJavaCode(`courses.add(${idx}, "${newVal}");`);
      setActionLog(`Đã chạy: add(${idx}, "${newVal}") ➔ Chèn phần tử vào vị trí ${idx} thành công.`);
      setAnimationType("INSERT");
      setTimeout(() => { setAnimatingIndex(null); setAnimationType(""); }, 800);
    }, 1000);
  };

  const handleRemoveIndex = () => {
    const idx = parseInt(inputIndex);
    if (isNaN(idx) || idx < 0 || idx >= vectorData.length) {
      setActionLog("Lỗi: Index xóa không hợp lệ (phải từ 0 đến " + (vectorData.length - 1) + ")");
      return;
    }

    setAnimationType("DELETE");
    setAnimatingIndex(idx);
    setActionLog(`Đang xóa phần tử tại index ${idx}...`);

    setTimeout(() => {
      setAnimationType("SHIFT_LEFT");
      setActionLog(`Đang kéo các phần tử phía sau sang trái để lấp đầy khoảng trống...`);
      
      setTimeout(() => {
        const updated = [...vectorData];
        const removed = updated.splice(idx, 1);
        setVectorData(updated);
        setJavaCode(`courses.remove(${idx}); // Đã xóa "${removed[0]}"`);
        setActionLog(`Đã chạy: remove(${idx}) ➔ Xóa phần tử tại vị trí ${idx} thành công.`);
        setAnimatingIndex(null);
        setAnimationType("");
      }, 1000);
    }, 800);
  };

  const handleReset = () => {
    setVectorData(["503005", "502043"]);
    setJavaCode("// Khởi tạo Vector\nVector<String> courses = new Vector<>();\ncourses.add(\"503005\");\ncourses.add(\"502043\");");
    setActionLog("Đã đặt lại Vector về trạng thái ban đầu.");
    setAnimatingIndex(null);
    setAnimationType("");
  };

  return (
    <div className="w-full bg-white border border-stone-200/80 rounded-3xl p-6 text-stone-850 shadow-lg my-6 overflow-hidden relative">
      <div className="bg-gradient-to-r from-teal-500 to-emerald-500 h-1.5 absolute top-0 left-0 right-0" />
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h4 className="text-base md:text-lg font-black text-stone-900 flex items-center gap-2">
            <Plus className="w-5 h-5 text-teal-600" />
            <span>Trình Giả Lập Mảng Động (Vector Sandbox Simulator)</span>
          </h4>
          <p className="text-xs text-stone-500 mt-1">
            Trải nghiệm các phương thức add, remove để quan sát cơ chế tự co giãn và dịch chuyển RAM của Vector
          </p>
        </div>
      </div>

      {/* Control Input area */}
      <div className="bg-stone-50/60 p-4 rounded-2xl border border-stone-200/65 mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
        <div>
          <label className="text-[10px] text-stone-500 font-mono font-bold block mb-1">Giá trị cần truyền:</label>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full bg-white border border-stone-200 rounded-lg px-2.5 py-1.5 text-xs text-stone-850 focus:outline-none focus:border-teal-500 transition-colors shadow-sm font-mono"
          />
        </div>

        <div>
          <label className="text-[10px] text-stone-500 font-mono font-bold block mb-1">Vị trí (Index):</label>
          <input
            type="text"
            value={inputIndex}
            onChange={(e) => setInputIndex(e.target.value)}
            className="w-full bg-white border border-stone-200 rounded-lg px-2.5 py-1.5 text-xs text-stone-850 focus:outline-none focus:border-teal-500 transition-colors shadow-sm font-mono"
          />
        </div>

        <button
          onClick={handleAddEnd}
          className="px-3 py-2 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl shadow-md shadow-teal-500/10 hover:shadow-teal-500/20 transition-all cursor-pointer select-none hover:scale-[1.02]"
        >
          add(element)
        </button>

        <button
          onClick={handleAddIndex}
          className="px-3 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md shadow-indigo-500/10 hover:shadow-indigo-500/20 transition-all cursor-pointer select-none hover:scale-[1.02]"
        >
          add(index, element)
        </button>

        <button
          onClick={handleRemoveIndex}
          className="px-3 py-2 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-xl shadow-md shadow-rose-500/10 hover:shadow-rose-500/20 transition-all cursor-pointer select-none hover:scale-[1.02]"
        >
          remove(index)
        </button>
      </div>

      {/* State indicators */}
      <div className="flex gap-4 mb-6 text-xs font-mono">
        <div className="bg-stone-50/60 px-3 py-1.5 rounded-xl border border-stone-200/60 shadow-sm">
          <span className="text-stone-550 mr-2">size():</span>
          <span className="text-teal-600 font-black">{vectorData.length}</span>
        </div>
        <div className="bg-stone-50/60 px-3 py-1.5 rounded-xl border border-stone-200/60 shadow-sm">
          <span className="text-stone-550 mr-2">isEmpty():</span>
          <span className="text-teal-600 font-black">{vectorData.length === 0 ? "true" : "false"}</span>
        </div>
        <button
          onClick={handleReset}
          className="ml-auto px-3.5 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-600 rounded-xl border border-stone-200/60 transition-all select-none flex items-center gap-1.5 cursor-pointer shadow-sm hover:scale-[1.02]"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Đặt lại</span>
        </button>
      </div>

      {/* Grid of RAM blocks showing shift right/left */}
      <div className="bg-stone-50/60 p-5 rounded-2xl border border-stone-200/80 mb-6 shadow-inner">
        <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block mb-4 font-mono">
          Bố cục các ô nhớ Vector trong Heap
        </span>

        <div className="flex flex-wrap gap-3 font-mono text-xs items-center justify-center">
          {vectorData.length === 0 ? (
            <div className="text-center py-6 text-stone-400 italic">Mảng động trống rỗng (size = 0)</div>
          ) : (
            vectorData.map((val, idx) => {
              const isAnim = animatingIndex !== null && animatingIndex === idx;
              let animClass = "";

              if (isAnim) {
                if (animationType === "SHIFT_RIGHT") animClass = "translate-x-12 opacity-60 border-yellow-400 bg-yellow-50/50 scale-95 duration-500";
                if (animationType === "SHIFT_LEFT") animClass = "-translate-x-12 opacity-60 border-blue-400 bg-blue-50/50 scale-95 duration-500";
                if (animationType === "INSERT") animClass = "border-emerald-500 bg-emerald-50 text-emerald-800 scale-105 duration-300 font-black shadow-md shadow-emerald-500/10";
                if (animationType === "DELETE") animClass = "border-rose-400 bg-rose-50 text-rose-700 scale-90 opacity-20 duration-300";
              }

              return (
                <div
                  key={idx}
                  className={`p-3.5 rounded-xl border text-center min-w-[76px] transition-all bg-white border-stone-200 text-stone-700 shadow-sm ${animClass}`}
                >
                  <span className="text-[8px] block text-stone-400 font-bold font-mono">index [{idx}]</span>
                  <span className="font-bold block mt-1 font-mono text-stone-850">{val}</span>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Code generator and action log */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch">
        <pre className="p-3.5 bg-stone-900 border border-stone-850 rounded-2xl font-mono text-xs text-indigo-300 leading-relaxed overflow-x-auto shadow-md">
          {javaCode}
        </pre>
        <div className="p-3.5 bg-stone-50 border border-stone-200/80 rounded-2xl text-xs leading-relaxed text-stone-600 font-mono flex items-center shadow-inner">
          <Cpu className="w-4 h-4 text-stone-400 mr-2 shrink-0" />
          <span>{actionLog}</span>
        </div>
      </div>
    </div>
  );
}
