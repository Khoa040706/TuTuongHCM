"use client";
import React, { useState } from "react";

export default function StringMethodsSandbox() {
  const [inputVal, setInputVal] = useState("  Lập Trình OOP  ");
  const [activeMethod, setActiveMethod] = useState("trim"); // trim, length, charAt, substring, replace, toUpperCase, toLowerCase
  
  // Custom inputs for arguments
  const [charAtIdx, setCharAtIdx] = useState(2);
  const [subBegin, setSubBegin] = useState(2);
  const [subEnd, setSubEnd] = useState(11);
  const [replaceTarget, setReplaceTarget] = useState("OOP");
  const [replaceRepl, setReplaceRepl] = useState("Java");

  // Helper to compute return value and call syntax
  const evaluateMethod = () => {
    switch (activeMethod) {
      case "length":
        return {
          syntax: `s.length()`,
          retVal: inputVal.length.toString(),
          type: "int"
        };
      case "charAt":
        const idx = Math.min(Math.max(0, parseInt(charAtIdx) || 0), inputVal.length - 1);
        return {
          syntax: `s.charAt(${idx})`,
          retVal: `'${inputVal.charAt(idx)}'`,
          type: "char"
        };
      case "trim":
        return {
          syntax: `s.trim()`,
          retVal: `"${inputVal.trim()}"`,
          type: "String"
        };
      case "toUpperCase":
        return {
          syntax: `s.toUpperCase()`,
          retVal: `"${inputVal.toUpperCase()}"`,
          type: "String"
        };
      case "toLowerCase":
        return {
          syntax: `s.toLowerCase()`,
          retVal: `"${inputVal.toLowerCase()}"`,
          type: "String"
        };
      case "substring":
        const beg = Math.min(Math.max(0, parseInt(subBegin) || 0), inputVal.length);
        const end = Math.min(Math.max(beg, parseInt(subEnd) || 0), inputVal.length);
        return {
          syntax: `s.substring(${beg}, ${end})`,
          retVal: `"${inputVal.substring(beg, end)}"`,
          type: "String"
        };
      case "replace":
        return {
          syntax: `s.replace("${replaceTarget}", "${replaceRepl}")`,
          retVal: `"${inputVal.replace(replaceTarget, replaceRepl)}"`,
          type: "String"
        };
      default:
        return { syntax: "", retVal: "", type: "" };
    }
  };

  const { syntax, retVal, type } = evaluateMethod();

  const methodsList = [
    { id: "trim", name: "trim()", desc: "Xóa khoảng trắng thừa ở đầu và cuối chuỗi" },
    { id: "length", name: "length()", desc: "Độ dài chuỗi (số lượng ký tự)" },
    { id: "charAt", name: "charAt(index)", desc: "Lấy ký tự tại một vị trí chỉ số" },
    { id: "substring", name: "substring(begin, end)", desc: "Trích chuỗi con từ begin đến trước end" },
    { id: "replace", name: "replace(old, new)", desc: "Thay thế chuỗi con bằng chuỗi mới" },
    { id: "toUpperCase", name: "toUpperCase()", desc: "Chuyển thành chữ in hoa" },
    { id: "toLowerCase", name: "toLowerCase()", desc: "Chuyển thành chữ thường" }
  ];

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4 md:p-6 my-6 shadow-sm font-sans">
      <div className="border-b border-stone-200 pb-3 mb-5">
        <h4 className="text-base font-extrabold text-stone-900">
          Công Cụ Thực Nghiệm Phương Thức String (String Methods Sandbox)
        </h4>
        <p className="text-xs text-stone-500 mt-1">
          Nhập chuỗi thử nghiệm và click các phương thức để so sánh chuỗi mới trả về với chuỗi gốc bất biến.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* Left Column: Controls & Input (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-4">
          
          {/* Input field */}
          <div className="bg-white border border-stone-200 p-4 rounded-xl shadow-sm">
            <label className="text-[10px] text-stone-400 uppercase font-black tracking-wider block mb-2">Chuỗi s thử nghiệm (Hãy sửa chữ/khoảng trắng):</label>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              className="w-full px-3 py-2 border border-stone-250 rounded-lg text-sm font-mono focus:border-accent focus:outline-none bg-stone-50 text-stone-800"
            />
            <div className="text-[10px] text-stone-450 mt-1.5 font-mono">
              Độ dài chuỗi gốc: <span className="font-bold text-stone-700">{inputVal.length} ký tự</span>
            </div>
          </div>

          {/* Methods select buttons grid */}
          <div className="bg-white border border-stone-200 p-4 rounded-xl shadow-sm flex-1 flex flex-col gap-2.5">
            <span className="text-[10px] text-stone-400 uppercase font-black tracking-wider block mb-1">Chọn Phương Thức String:</span>
            <div className="flex flex-col gap-2 overflow-y-auto max-h-[220px] pr-1">
              {methodsList.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setActiveMethod(m.id)}
                  className={`w-full text-left p-2.5 rounded-lg border text-xs transition-all cursor-pointer flex justify-between items-center ${
                    activeMethod === m.id
                      ? "border-accent bg-accent/5 text-accent font-bold"
                      : "border-stone-150 hover:bg-stone-100 hover:border-stone-250 text-stone-700"
                  }`}
                >
                  <span className="font-mono">{m.name}</span>
                  <span className={`text-[9px] font-normal truncate max-w-[170px] ${activeMethod === m.id ? "text-accent/80" : "text-stone-400"}`}>
                    {m.desc}
                  </span>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Execution & Results (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-4 bg-white border border-stone-200 rounded-xl p-4 shadow-sm">
          
          {/* Method Parameter Inputs */}
          <div>
            <div className="text-[10px] text-stone-400 uppercase font-black tracking-wider mb-2.5">Cấu hình tham số phương thức</div>
            <div className="bg-stone-50 border border-stone-200 rounded-xl p-3.5 min-h-[75px] flex items-center">
              
              {activeMethod === "charAt" && (
                <div className="flex items-center gap-3 text-xs w-full">
                  <span className="font-medium text-stone-700">Chỉ số index cần lấy:</span>
                  <input
                    type="number"
                    min="0"
                    max={inputVal.length - 1}
                    value={charAtIdx}
                    onChange={(e) => setCharAtIdx(e.target.value)}
                    className="w-16 px-2 py-1 border border-stone-200 rounded font-mono text-center text-xs focus:outline-none"
                  />
                  <span className="text-[10px] text-stone-450 italic">Hợp lệ: 0 đến {inputVal.length - 1}</span>
                </div>
              )}

              {activeMethod === "substring" && (
                <div className="flex flex-wrap items-center gap-3 text-xs w-full">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-stone-700">beginIndex:</span>
                    <input
                      type="number"
                      min="0"
                      max={inputVal.length}
                      value={subBegin}
                      onChange={(e) => setSubBegin(e.target.value)}
                      className="w-16 px-2 py-1 border border-stone-200 rounded font-mono text-center text-xs focus:outline-none"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-stone-700">endIndex:</span>
                    <input
                      type="number"
                      min="0"
                      max={inputVal.length}
                      value={subEnd}
                      onChange={(e) => setSubEnd(e.target.value)}
                      className="w-16 px-2 py-1 border border-stone-200 rounded font-mono text-center text-xs focus:outline-none"
                    />
                  </div>
                  <span className="text-[9px] text-stone-400 italic block w-full mt-1">Độ dài chuỗi hiện tại là {inputVal.length}</span>
                </div>
              )}

              {activeMethod === "replace" && (
                <div className="flex flex-wrap md:flex-nowrap items-center gap-3 text-xs w-full">
                  <div className="flex items-center gap-2 flex-1">
                    <span className="font-medium text-stone-700 whitespace-nowrap">Từ cần thay:</span>
                    <input
                      type="text"
                      value={replaceTarget}
                      onChange={(e) => setReplaceTarget(e.target.value)}
                      className="w-full px-2 py-1 border border-stone-200 rounded font-mono text-xs focus:outline-none"
                    />
                  </div>
                  <div className="flex items-center gap-2 flex-1">
                    <span className="font-medium text-stone-700 whitespace-nowrap">Thay thế bằng:</span>
                    <input
                      type="text"
                      value={replaceRepl}
                      onChange={(e) => setReplaceRepl(e.target.value)}
                      className="w-full px-2 py-1 border border-stone-200 rounded font-mono text-xs focus:outline-none"
                    />
                  </div>
                </div>
              )}

              {["trim", "length", "toUpperCase", "toLowerCase"].includes(activeMethod) && (
                <span className="text-xs text-stone-450 italic">Phương thức này không yêu cầu tham số đầu vào.</span>
              )}

            </div>
          </div>

          {/* Sandbox Results Diagram */}
          <div className="space-y-4">
            
            {/* Syntax block */}
            <div className="bg-[#1e1d1a] border border-[#2a2926] p-3 rounded-xl text-white font-mono text-xs shadow-inner">
              <div className="text-[9px] text-stone-400 uppercase font-black tracking-wider mb-2 font-sans">Lệnh thực thi trong Java</div>
              <div className="text-amber-400 font-black">{syntax}</div>
            </div>

            {/* Results Output Block */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* Return value */}
              <div className="bg-stone-900 border border-stone-850 p-3.5 rounded-xl text-white font-mono text-xs">
                <div className="text-[9px] text-stone-450 uppercase font-black tracking-wider mb-2 font-sans flex justify-between">
                  <span>Kết quả trả về</span>
                  <span className="text-amber-400 font-bold bg-amber-450/10 px-1 rounded lowercase text-[8px]">{type}</span>
                </div>
                <div className="text-emerald-400 font-black bg-stone-950 p-2.5 rounded border border-stone-800 break-words shadow-inner min-h-[42px] flex items-center">
                  {retVal}
                </div>
              </div>

              {/* Immutable Check Original Val */}
              <div className="bg-stone-50 border border-stone-200 p-3.5 rounded-xl font-mono text-xs">
                <div className="text-[9px] text-stone-400 uppercase font-black tracking-wider mb-2 font-sans flex justify-between">
                  <span>Chuỗi gốc (s) sau khi chạy</span>
                  <span className="text-rose-500 font-bold bg-rose-500/10 px-1 rounded uppercase text-[8px]">Immutable</span>
                </div>
                <div className="text-stone-750 font-black bg-white p-2.5 rounded border border-stone-200 break-words shadow-sm min-h-[42px] flex items-center">
                  "{inputVal}"
                </div>
              </div>
            </div>

          </div>

          {/* Immutable Explanation Tip */}
          <div className="bg-amber-50/30 border border-amber-200 rounded-xl p-3 text-xs leading-relaxed text-stone-750">
            <strong>💡 Quan sát tính Bất Biến (Immutable):</strong><br/>
            Bạn hãy chú ý, mặc dù lệnh <code>{syntax}</code> trả về kết quả mới là <code className="text-emerald-600 font-bold">{retVal}</code>, nhưng chuỗi gốc <code>s</code> ở hộp bên phải vẫn hoàn toàn được giữ nguyên giá trị ban đầu là <code className="text-stone-800 font-bold">"{inputVal}"</code>. Phương thức String trong Java **không bao giờ** làm biến đổi dữ liệu của chuỗi gốc!
          </div>

        </div>

      </div>
    </div>
  );
}
