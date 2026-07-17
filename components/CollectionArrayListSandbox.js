"use client";
import React, { useState } from "react";
import { Cpu, Plus, RefreshCw } from "lucide-react";

export default function CollectionArrayListSandbox() {
  const [listData, setListData] = useState(["503005", "502043"]);
  const [inputValue, setInputValue] = useState("501042");
  const [inputIndex, setInputIndex] = useState("0");
  const [actionLog, setActionLog] = useState("ArrayList đã sẵn sàng. Nhập giá trị và thử các hàm add/remove!");
  const [javaCode, setJavaCode] = useState("// Khởi tạo ArrayList\nArrayList<String> list = new ArrayList<>();\nlist.add(\"503005\");\nlist.add(\"502043\");");

  const [animatingIndex, setAnimatingIndex] = useState(null); // index being shifted or inserted
  const [animationType, setAnimationType] = useState(""); // "SHIFT_RIGHT" | "SHIFT_LEFT" | "INSERT" | "DELETE"

  const handleAddEnd = () => {
    if (!inputValue.trim()) return;
    const newVal = inputValue.trim();
    const updated = [...listData, newVal];
    setListData(updated);
    setJavaCode(`list.add("${newVal}");`);
    setActionLog(`Đã chạy: add("${newVal}") ➔ Thêm phần tử vào cuối danh sách.`);
    setAnimatingIndex(updated.length - 1);
    setAnimationType("INSERT");
    setTimeout(() => { setAnimatingIndex(null); setAnimationType(""); }, 800);
  };

  const handleAddIndex = () => {
    if (!inputValue.trim()) return;
    const newVal = inputValue.trim();
    const idx = parseInt(inputIndex);
    if (isNaN(idx) || idx < 0 || idx > listData.length) {
      setActionLog("Lỗi: Index chèn không hợp lệ (phải từ 0 đến " + listData.length + ")");
      return;
    }

    setAnimationType("SHIFT_RIGHT");
    setAnimatingIndex(idx);
    setActionLog(`Đang dịch chuyển các phần tử từ index ${idx} sang phải để lấy chỗ chèn...`);

    setTimeout(() => {
      const updated = [...listData];
      updated.splice(idx, 0, newVal);
      setListData(updated);
      setJavaCode(`list.add(${idx}, "${newVal}");`);
      setActionLog(`Đã chạy: add(${idx}, "${newVal}") ➔ Chèn phần tử vào vị trí ${idx} thành công.`);
      setAnimationType("INSERT");
      setTimeout(() => { setAnimatingIndex(null); setAnimationType(""); }, 800);
    }, 1000);
  };

  const handleRemoveIndex = () => {
    const idx = parseInt(inputIndex);
    if (isNaN(idx) || idx < 0 || idx >= listData.length) {
      setActionLog("Lỗi: Index xóa không hợp lệ (phải từ 0 đến " + (listData.length - 1) + ")");
      return;
    }

    setAnimationType("DELETE");
    setAnimatingIndex(idx);
    setActionLog(`Đang xóa phần tử tại index ${idx}...`);

    setTimeout(() => {
      setAnimationType("SHIFT_LEFT");
      setActionLog(`Đang kéo các phần tử phía sau sang trái để lấp đầy khoảng trống...`);
      
      setTimeout(() => {
        const updated = [...listData];
        const removed = updated.splice(idx, 1);
        setListData(updated);
        setJavaCode(`list.remove(${idx}); // Đã xóa "${removed[0]}"`);
        setActionLog(`Đã chạy: remove(${idx}) ➔ Xóa phần tử tại vị trí ${idx} thành công.`);
        setAnimatingIndex(null);
        setAnimationType("");
      }, 1000);
    }, 800);
  };

  const handleRemoveObject = () => {
    if (!inputValue.trim()) return;
    const valToRemove = inputValue.trim();
    const idx = listData.indexOf(valToRemove);
    if (idx === -1) {
      setActionLog(`Lỗi: Không tìm thấy giá trị "${valToRemove}" trong ArrayList.`);
      return;
    }

    setAnimationType("DELETE");
    setAnimatingIndex(idx);
    setActionLog(`Tìm thấy "${valToRemove}" tại index ${idx}. Tiến hành xóa...`);

    setTimeout(() => {
      setAnimationType("SHIFT_LEFT");
      setActionLog(`Đang dồn mảng sang trái...`);
      
      setTimeout(() => {
        const updated = [...listData];
        updated.splice(idx, 1);
        setListData(updated);
        setJavaCode(`list.remove("${valToRemove}"); // Trả về true`);
        setActionLog(`Đã chạy: remove("${valToRemove}") ➔ Xóa lần xuất hiện đầu tiên của phần tử.`);
        setAnimatingIndex(null);
        setAnimationType("");
      }, 1000);
    }, 800);
  };

  const handleReset = () => {
    setListData(["503005", "502043"]);
    setJavaCode("// Khởi tạo ArrayList\nArrayList<String> list = new ArrayList<>();\nlist.add(\"503005\");\nlist.add(\"502043\");");
    setActionLog("Đã đặt lại ArrayList về trạng thái ban đầu.");
    setAnimatingIndex(null);
    setAnimationType("");
  };

  // Search details for current input
  const foundIndex = listData.indexOf(inputValue.trim());
  const containsVal = foundIndex !== -1;

  return (
    <div className="w-full bg-white border border-stone-200/80 rounded-3xl p-6 text-stone-850 shadow-lg my-6 overflow-hidden relative">
      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-1.5 absolute top-0 left-0 right-0" />
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h4 className="text-base md:text-lg font-black text-stone-900 flex items-center gap-2">
            <Plus className="w-5 h-5 text-emerald-600" />
            <span>Trình Giả Lập ArrayList Sandbox</span>
          </h4>
          <p className="text-xs text-stone-500 mt-1">
            Chạy thử các hàm add, remove, indexOf, contains để tự tay thao tác với ArrayList
          </p>
        </div>
      </div>

      {/* Inputs and Buttons */}
      <div className="bg-stone-50/60 p-4 rounded-2xl border border-stone-200/65 mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 items-end">
        <div className="lg:col-span-2">
          <label className="text-[10px] text-stone-500 font-mono font-bold block mb-1">Giá trị (Element):</label>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full bg-white border border-stone-200 rounded-lg px-2.5 py-1.5 text-xs text-stone-850 focus:outline-none focus:border-emerald-500 transition-colors shadow-sm font-mono"
          />
        </div>

        <div>
          <label className="text-[10px] text-stone-500 font-mono font-bold block mb-1">Vị trí (Index):</label>
          <input
            type="text"
            value={inputIndex}
            onChange={(e) => setInputIndex(e.target.value)}
            className="w-full bg-white border border-stone-200 rounded-lg px-2.5 py-1.5 text-xs text-stone-850 focus:outline-none focus:border-emerald-500 transition-colors shadow-sm font-mono"
          />
        </div>

        <button
          onClick={handleAddEnd}
          className="px-2.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md shadow-emerald-500/10 hover:shadow-emerald-500/20 transition-all cursor-pointer select-none hover:scale-[1.02]"
        >
          add(element)
        </button>

        <button
          onClick={handleAddIndex}
          className="px-2.5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md shadow-indigo-500/10 hover:shadow-indigo-500/20 transition-all cursor-pointer select-none hover:scale-[1.02]"
        >
          add(idx, element)
        </button>

        <button
          onClick={handleRemoveIndex}
          className="px-2.5 py-2 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-xl shadow-md shadow-rose-500/10 hover:shadow-rose-500/20 transition-all cursor-pointer select-none hover:scale-[1.02]"
        >
          remove(idx)
        </button>
      </div>

      {/* Extra Action for remove(Object) */}
      <div className="bg-stone-50/60 p-3 rounded-2xl border border-stone-200/65 mb-6 flex flex-wrap gap-3 items-center justify-between">
        <span className="text-xs text-stone-500 font-medium">
          Xóa theo nội dung phần tử:
        </span>
        <button
          onClick={handleRemoveObject}
          className="px-4 py-1.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-xl shadow-sm hover:scale-[1.02] cursor-pointer transition-all"
        >
          remove(Object "{inputValue}")
        </button>
      </div>

      {/* Indicators */}
      <div className="flex flex-wrap gap-3 mb-6 text-xs font-mono">
        <div className="bg-stone-50/60 px-3 py-1.5 rounded-xl border border-stone-200/60 shadow-sm">
          <span className="text-stone-550 mr-2">size():</span>
          <span className="text-emerald-600 font-black">{listData.length}</span>
        </div>
        <div className="bg-stone-50/60 px-3 py-1.5 rounded-xl border border-stone-200/60 shadow-sm">
          <span className="text-stone-550 mr-2">isEmpty():</span>
          <span className="text-emerald-600 font-black">{listData.length === 0 ? "true" : "false"}</span>
        </div>
        <div className="bg-stone-50/60 px-3 py-1.5 rounded-xl border border-stone-200/60 shadow-sm">
          <span className="text-stone-550 mr-2">indexOf("{inputValue}"):</span>
          <span className="text-emerald-650 font-black">{foundIndex}</span>
        </div>
        <div className="bg-stone-50/60 px-3 py-1.5 rounded-xl border border-stone-200/60 shadow-sm">
          <span className="text-stone-550 mr-2">contains("{inputValue}"):</span>
          <span className="text-emerald-650 font-black">{containsVal ? "true" : "false"}</span>
        </div>
        
        <button
          onClick={handleReset}
          className="ml-auto px-3.5 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-600 rounded-xl border border-stone-200/60 transition-all select-none flex items-center gap-1.5 cursor-pointer shadow-sm hover:scale-[1.02]"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Đặt lại</span>
        </button>
      </div>

      {/* Heap Memory UI */}
      <div className="bg-stone-50/60 p-5 rounded-2xl border border-stone-200/80 mb-6 shadow-inner">
        <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block mb-4 font-mono">
          Bố cục ArrayList trong bộ nhớ Heap
        </span>

        <div className="flex flex-wrap gap-3 font-mono text-xs items-center justify-center">
          {listData.length === 0 ? (
            <div className="text-center py-6 text-stone-400 italic">ArrayList trống rỗng (size = 0)</div>
          ) : (
            listData.map((val, idx) => {
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
