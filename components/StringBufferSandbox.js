"use client";
import React, { useState } from "react";

export default function StringBufferSandbox() {
  const [history, setHistory] = useState([
    { code: 'StringBuffer sb = new StringBuffer("Hello");', result: "Hello", desc: "Khởi tạo đệm ban đầu" }
  ]);
  const [currentVal, setCurrentVal] = useState("Hello");
  const [operation, setOperation] = useState("append"); // append, insert, replace, delete, reverse
  
  // Form inputs
  const [appendStr, setAppendStr] = useState(" Java");
  const [insertOffset, setInsertOffset] = useState(1);
  const [insertStr, setInsertStr] = useState("X");
  const [replaceStart, setReplaceStart] = useState(1);
  const [replaceEnd, setReplaceEnd] = useState(3);
  const [replaceStr, setReplaceStr] = useState("Java");
  const [deleteStart, setDeleteStart] = useState(1);
  const [deleteEnd, setDeleteEnd] = useState(3);

  const resetSandbox = () => {
    setHistory([
      { code: 'StringBuffer sb = new StringBuffer("Hello");', result: "Hello", desc: "Khởi tạo đệm ban đầu" }
    ]);
    setCurrentVal("Hello");
    // Reset parameters
    setAppendStr(" Java");
    setInsertOffset(1);
    setInsertStr("X");
    setReplaceStart(1);
    setReplaceEnd(3);
    setReplaceStr("Java");
    setDeleteStart(1);
    setDeleteEnd(3);
  };

  const handleExecute = () => {
    let newVal = currentVal;
    let codeStr = "";
    let description = "";

    if (operation === "append") {
      newVal = currentVal + appendStr;
      codeStr = `sb.append("${appendStr}");`;
      description = `Nối thêm chuỗi "${appendStr}" vào cuối.`;
    } 
    else if (operation === "insert") {
      const offset = Math.min(currentVal.length, Math.max(0, insertOffset));
      newVal = currentVal.slice(0, offset) + insertStr + currentVal.slice(offset);
      codeStr = `sb.insert(${offset}, "${insertStr}");`;
      description = `Chèn chuỗi "${insertStr}" tại vị trí chỉ số (index) ${offset}.`;
    } 
    else if (operation === "replace") {
      const start = Math.min(currentVal.length, Math.max(0, replaceStart));
      const end = Math.min(currentVal.length, Math.max(start, replaceEnd));
      newVal = currentVal.slice(0, start) + replaceStr + currentVal.slice(end);
      codeStr = `sb.replace(${start}, ${end}, "${replaceStr}");`;
      description = `Thay thế đoạn từ index ${start} đến ${end} (không bao gồm index ${end}) bằng "${replaceStr}".`;
    } 
    else if (operation === "delete") {
      const start = Math.min(currentVal.length, Math.max(0, deleteStart));
      const end = Math.min(currentVal.length, Math.max(start, deleteEnd));
      newVal = currentVal.slice(0, start) + currentVal.slice(end);
      codeStr = `sb.delete(${start}, ${end});`;
      description = `Xóa đoạn ký tự từ index ${start} đến ${end} (không bao gồm index ${end}).`;
    } 
    else if (operation === "reverse") {
      newVal = currentVal.split("").reverse().join("");
      codeStr = `sb.reverse();`;
      description = "Đảo ngược toàn bộ chuỗi đệm.";
    }

    // Update state
    setCurrentVal(newVal);
    setHistory((prev) => [...prev, { code: codeStr, result: newVal, desc: description }]);
  };

  const len = currentVal.length;

  return (
    <div className="bg-white border border-stone-200 rounded-3xl p-5 md:p-6 my-6 shadow-sm font-sans text-stone-850">
      
      <div className="border-b border-stone-200 pb-3 mb-5">
        <span className="bg-amber-100 text-amber-800 text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md">Không gian thực hành</span>
        <h4 className="text-base font-extrabold text-stone-900 mt-1">
          StringBuffer Interactive Sandbox
        </h4>
        <p className="text-xs text-stone-500 mt-1">
          Thử nghiệm các phương thức thao tác chuỗi của StringBuffer. Thay đổi trực tiếp trên một vùng nhớ đệm gốc.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch mb-5">
        
        {/* Left Column: Control Panel (col 5) */}
        <div className="lg:col-span-5 border border-stone-200 rounded-2xl p-4 flex flex-col justify-between bg-stone-50/50">
          
          <div className="space-y-4">
            {/* Operation Selector */}
            <div className="space-y-1">
              <label className="block text-[10px] font-black text-stone-400 uppercase tracking-wider">Chọn phương thức gọi:</label>
              <select
                value={operation}
                onChange={(e) => setOperation(e.target.value)}
                className="w-full px-3 py-2 text-xs font-bold border border-stone-200 rounded-xl bg-white text-stone-855 focus:outline-none focus:border-amber-500 cursor-pointer"
              >
                <option value="append">append(String s) - Nối chuỗi vào cuối</option>
                <option value="insert">insert(int offset, String s) - Chèn chuỗi</option>
                <option value="replace">replace(int start, int end, String s) - Thay thế đoạn</option>
                <option value="delete">delete(int start, int end) - Xóa đoạn</option>
                <option value="reverse">reverse() - Đảo ngược chuỗi</option>
              </select>
            </div>

            {/* Dynamic Inputs depending on operation */}
            {operation === "append" && (
              <div className="space-y-2 animate-in fade-in duration-200">
                <label className="block text-[10px] font-bold text-stone-500">Chuỗi muốn nối (String s):</label>
                <input
                  type="text"
                  value={appendStr}
                  onChange={(e) => setAppendStr(e.target.value.slice(0, 15))}
                  className="w-full px-3 py-1.5 text-xs border border-stone-200 rounded-xl bg-white text-stone-800 font-mono"
                />
              </div>
            )}

            {operation === "insert" && (
              <div className="space-y-2.5 animate-in fade-in duration-200">
                <div>
                  <div className="flex justify-between text-[10px] font-bold text-stone-500 mb-1">
                    <span>Vị trí chèn (offset): {insertOffset}</span>
                    <span className="text-stone-400 font-mono">(0 - {len})</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max={len}
                    value={insertOffset}
                    onChange={(e) => setInsertOffset(parseInt(e.target.value, 10))}
                    className="w-full accent-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-stone-500">Chuỗi muốn chèn (String s):</label>
                  <input
                    type="text"
                    value={insertStr}
                    onChange={(e) => setInsertStr(e.target.value.slice(0, 10))}
                    className="w-full px-3 py-1.5 text-xs border border-stone-200 rounded-xl bg-white text-stone-800 font-mono"
                  />
                </div>
              </div>
            )}

            {operation === "replace" && (
              <div className="space-y-2.5 animate-in fade-in duration-200">
                <div className="bg-amber-50 border border-amber-100 rounded-lg p-2 text-[10px] text-amber-800 leading-normal select-none">
                  ⚠️ <strong>Quy tắc loại trừ:</strong> Thay thế từ chỉ số <code>start</code> đến trước chỉ số <code>end</code> (không bao gồm ký tự tại vị trí <code>end</code>).
                </div>
                <div>
                  <div className="flex justify-between text-[10px] font-bold text-stone-500 mb-1">
                    <span>Bắt đầu (start): {replaceStart}</span>
                    <span className="text-stone-400 font-mono">(0 - {len})</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max={len}
                    value={replaceStart}
                    onChange={(e) => {
                      const val = parseInt(e.target.value, 10);
                      setReplaceStart(val);
                      if (replaceEnd < val) setReplaceEnd(val);
                    }}
                    className="w-full accent-amber-500"
                  />
                </div>
                <div>
                  <div className="flex justify-between text-[10px] font-bold text-stone-500 mb-1">
                    <span>Kết thúc (end): {replaceEnd}</span>
                    <span className="text-stone-400 font-mono">({replaceStart} - {len})</span>
                  </div>
                  <input
                    type="range"
                    min={replaceStart}
                    max={len}
                    value={replaceEnd}
                    onChange={(e) => setReplaceEnd(parseInt(e.target.value, 10))}
                    className="w-full accent-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-stone-500">Chuỗi thay thế mới (String s):</label>
                  <input
                    type="text"
                    value={replaceStr}
                    onChange={(e) => setReplaceStr(e.target.value.slice(0, 15))}
                    className="w-full px-3 py-1.5 text-xs border border-stone-200 rounded-xl bg-white text-stone-800 font-mono"
                  />
                </div>
              </div>
            )}

            {operation === "delete" && (
              <div className="space-y-2.5 animate-in fade-in duration-200">
                <div className="bg-amber-50 border border-amber-100 rounded-lg p-2 text-[10px] text-amber-800 leading-normal select-none">
                  ⚠️ <strong>Quy tắc loại trừ:</strong> Xóa các ký tự từ index <code>start</code> đến trước index <code>end</code>.
                </div>
                <div>
                  <div className="flex justify-between text-[10px] font-bold text-stone-500 mb-1">
                    <span>Bắt đầu (start): {deleteStart}</span>
                    <span className="text-stone-400 font-mono">(0 - {len})</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max={len}
                    value={deleteStart}
                    onChange={(e) => {
                      const val = parseInt(e.target.value, 10);
                      setDeleteStart(val);
                      if (deleteEnd < val) setDeleteEnd(val);
                    }}
                    className="w-full accent-amber-500"
                  />
                </div>
                <div>
                  <div className="flex justify-between text-[10px] font-bold text-stone-500 mb-1">
                    <span>Kết thúc (end): {deleteEnd}</span>
                    <span className="text-stone-400 font-mono">({deleteStart} - {len})</span>
                  </div>
                  <input
                    type="range"
                    min={deleteStart}
                    max={len}
                    value={deleteEnd}
                    onChange={(e) => setDeleteEnd(parseInt(e.target.value, 10))}
                    className="w-full accent-amber-500"
                  />
                </div>
              </div>
            )}

            {operation === "reverse" && (
              <div className="p-3 bg-stone-100/50 rounded-xl border border-stone-200 text-[10px] text-stone-500 leading-relaxed animate-in fade-in duration-200 select-none">
                🔄 Phương thức này không cần tham số. Nó sẽ đảo ngược thứ tự toàn bộ các ký tự trong đối tượng <code>StringBuffer</code> hiện tại.
              </div>
            )}
          </div>

          <div className="flex gap-2.5 mt-6 select-none">
            <button
              onClick={handleExecute}
              className="flex-1 py-2 text-xs font-black rounded-xl bg-amber-500 hover:bg-amber-600 text-white shadow-sm border-none cursor-pointer hover:scale-[1.02] transition-all"
            >
              Thực thi lệnh ➔
            </button>
            <button
              onClick={resetSandbox}
              className="px-3 py-2 text-xs font-bold rounded-xl bg-stone-200 hover:bg-stone-300 text-stone-700 border-none cursor-pointer transition-all"
            >
              Làm mới
            </button>
          </div>

        </div>

        {/* Right Column: Execution Output & Memory State (col 7) */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-4">
          
          {/* Equivalent Java Code Snippet */}
          <div className="bg-[#1e1d1a] border border-[#2a2926] rounded-2xl p-4 text-stone-300 font-mono text-[11px] shadow-md flex-1">
            <div className="text-[9px] text-stone-500 uppercase font-black tracking-wider mb-2 select-none">Nhật ký code Java đã thực thi:</div>
            
            <pre className="whitespace-pre overflow-x-auto bg-[#121110] p-3 rounded-xl border border-stone-850 text-[10px] leading-normal text-stone-300 max-h-[140px] overflow-y-auto">
              {history.map((h, i) => (
                <div key={i} className="flex flex-col gap-0.5">
                  <span className="text-emerald-500">{"// "}{h.desc}</span>
                  <span className="text-stone-100">{h.code}</span>
                  {i === history.length - 1 && (
                    <span className="text-amber-500">{"System.out.println(sb); // In ra: \""}{h.result}{"\""}</span>
                  )}
                </div>
              ))}
            </pre>
          </div>

          {/* Visual Memory Array */}
          <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4 text-stone-800">
            <div className="text-[9px] text-stone-400 uppercase font-black tracking-wider mb-2.5 select-none">Trạng thái ô nhớ đệm trong RAM hiện tại:</div>
            
            <div className="flex flex-wrap gap-1 p-2 rounded-xl bg-stone-900 border border-stone-800 min-h-[50px] items-center">
              {currentVal.split("").map((char, index) => {
                // Determine highlight coloring based on operation and sliders
                let cellClass = "bg-stone-950 border-stone-800 text-stone-200";
                
                if (operation === "insert" && index === insertOffset) {
                  cellClass = "bg-emerald-950/40 border-emerald-500 text-emerald-400 font-bold scale-[1.05]";
                } else if (operation === "replace" && index >= replaceStart && index < replaceEnd) {
                  cellClass = "bg-amber-950/40 border-amber-500 text-amber-400 font-bold";
                } else if (operation === "delete" && index >= deleteStart && index < deleteEnd) {
                  cellClass = "bg-rose-950/40 border-rose-500 text-rose-450 line-through opacity-80";
                }

                return (
                  <div
                    key={index}
                    className={`w-6 h-8 rounded-lg flex flex-col justify-between items-center py-0.5 transition-all select-none border text-[10px] ${cellClass}`}
                  >
                    <span className="text-[6px] text-stone-500 font-mono">{index}</span>
                    <span className="font-mono">{char}</span>
                  </div>
                );
              })}
              {currentVal.length === 0 && (
                <div className="text-stone-500 text-[10px] font-mono p-2 italic w-full text-center select-none">
                  (Buffer đang rỗng - length = 0)
                </div>
              )}
            </div>

            <div className="flex justify-between items-center mt-3 text-[10px] text-stone-500 select-none">
              <div>Độ dài hiện tại: <span className="font-bold text-stone-800 font-mono">{len}</span> ký tự.</div>
              <div className="flex gap-2">
                <span className="inline-block w-2.5 h-2.5 rounded bg-stone-900 border border-stone-800" />
                <span>Bình thường</span>
                <span className="inline-block w-2.5 h-2.5 rounded bg-amber-950/40 border border-amber-500" />
                <span>Đang tác động</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
