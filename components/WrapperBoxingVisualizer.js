"use client";
import React, { useState } from "react";

export default function WrapperBoxingVisualizer() {
  const [selectedType, setSelectedType] = useState("int"); // int, double, char, boolean
  const [strInput, setStrInput] = useState("28");
  const [parseResult, setParseResult] = useState("");
  const [numInput, setNumInput] = useState(567);
  const [stringResult, setStringResult] = useState("");

  const mappings = {
    int: { wrapper: "Integer", samplePrim: "int x = 9;", sampleBox: "Integer y = Integer.valueOf(x);", sampleUnbox: "int z = y.intValue();" },
    double: { wrapper: "Double", samplePrim: "double x = 5.5;", sampleBox: "Double y = Double.valueOf(x);", sampleUnbox: "double z = y.doubleValue();" },
    char: { wrapper: "Character", samplePrim: "char x = 'A';", sampleBox: "Character y = Character.valueOf(x);", sampleUnbox: "char z = y.charValue();" },
    boolean: { wrapper: "Boolean", samplePrim: "boolean x = true;", sampleBox: "Boolean y = Boolean.valueOf(x);", sampleUnbox: "boolean z = y.booleanValue();" }
  };

  const activeMap = mappings[selectedType];

  const handleParse = () => {
    try {
      if (selectedType === "int") {
        const val = parseInt(strInput);
        if (isNaN(val)) throw new Error();
        setParseResult(`int num = Integer.parseInt("${strInput}"); // Trả về số nguyên primitive: ${val}`);
      } else if (selectedType === "double") {
        const val = parseFloat(strInput);
        if (isNaN(val)) throw new Error();
        setParseResult(`double num = Double.parseDouble("${strInput}"); // Trả về số thực primitive: ${val}`);
      } else if (selectedType === "boolean") {
        const val = strInput.toLowerCase() === "true";
        setParseResult(`boolean val = Boolean.parseBoolean("${strInput}"); // Trả về boolean primitive: ${val}`);
      } else {
        setParseResult("Kiểu ký tự char không hỗ trợ hàm parse.");
      }
    } catch (e) {
      setParseResult("❌ Lỗi chuyển đổi: Chuỗi nhập vào không hợp lệ!");
    }
  };

  const handleToString = () => {
    if (selectedType === "int") {
      setStringResult(`String s = Integer.toString(${numInput}); // Trả về chuỗi: "${numInput}"`);
    } else if (selectedType === "double") {
      setStringResult(`String s = Double.toString(${numInput}); // Trả về chuỗi: "${numInput}"`);
    } else {
      setStringResult("Chỉ hỗ trợ chuyển đổi số sang String.");
    }
  };

  return (
    <div className="bg-stone-55 border border-stone-200 rounded-3xl p-4 md:p-6 my-6 shadow-sm font-sans text-stone-850">
      
      {/* Header */}
      <div className="border-b border-stone-200 pb-3 mb-5">
        <h4 className="text-base font-extrabold text-stone-900">
          📦 Lớp Bao Bọc (Wrapper Classes) & Cơ Chế Đóng/Mở Bọc (Boxing/Unboxing)
        </h4>
        <p className="text-xs text-stone-500 mt-1">
          Chọn kiểu dữ liệu nguyên thủy để xem lớp bao bọc tương ứng và thực hành chuyển đổi chuỗi sang số.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* Left Panel: Selector Table (4 cols) */}
        <div className="lg:col-span-4 bg-white border border-stone-200 rounded-2xl p-4 shadow-sm flex flex-col justify-between">
          <div>
            <div className="text-[10px] text-stone-400 uppercase font-black tracking-wider block mb-3">Đối chiếu kiểu dữ liệu</div>
            
            <div className="space-y-2">
              {Object.keys(mappings).map((type) => (
                <button
                  key={type}
                  onClick={() => {
                    setSelectedType(type);
                    setParseResult("");
                    setStringResult("");
                  }}
                  className={`w-full text-left p-3 rounded-xl border text-xs font-bold transition-all cursor-pointer flex justify-between items-center ${
                    selectedType === type
                      ? "border-amber-500 bg-amber-50/15 text-amber-900 shadow-sm"
                      : "border-stone-200 bg-white hover:bg-stone-50 text-stone-700"
                  }`}
                >
                  <span className="font-mono">{type} (Primitive)</span>
                  <span className="bg-stone-100 text-stone-800 px-2 py-0.5 rounded font-mono text-[11px] border border-stone-200">
                    {mappings[type].wrapper}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-amber-50/25 border border-amber-200 rounded-xl p-3 text-xs leading-relaxed text-stone-850 mt-5">
            <strong>⚠️ Điểm thi hay bẫy:</strong><br/>
            Tên các lớp bọc không viết tắt như kiểu nguyên thủy: <code>int</code> ➔ <strong><code>Integer</code></strong>, <code>char</code> ➔ <strong><code>Character</code></strong>.
          </div>

        </div>

        {/* Middle Panel: Visual Boxing Flow (4 cols) */}
        <div className="lg:col-span-4 bg-white border border-stone-200 rounded-2xl p-4 shadow-sm flex flex-col justify-between">
          <div>
            <div className="text-[10px] text-stone-400 uppercase font-black tracking-wider block mb-3">Quy trình Boxing & Unboxing</div>
            
            <div className="space-y-4 py-2 flex flex-col items-center">
              
              {/* Primitive block */}
              <div className="bg-stone-50 border border-stone-250 p-2.5 rounded-xl w-full text-center">
                <div className="text-[9px] text-stone-400 uppercase font-black mb-1">Kiểu nguyên thủy (Primitive)</div>
                <div className="font-mono text-xs font-bold text-stone-800">{activeMap.samplePrim}</div>
              </div>

              {/* Boxing arrow */}
              <div className="flex flex-col items-center gap-0.5 text-center">
                <span className="text-[9px] text-stone-400 font-bold font-sans uppercase">Đóng bọc (Autoboxing) ⬇️</span>
                <span className="font-mono text-[9px] text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded shadow-sm">
                  {selectedType === "int" ? "new Integer(x)" : activeMap.wrapper + ".valueOf(x)"}
                </span>
              </div>

              {/* Wrapper object block */}
              <div className="bg-amber-950/5 border border-amber-250 p-2.5 rounded-xl w-full text-center">
                <div className="text-[9px] text-amber-800 uppercase font-black mb-1">Đối tượng (Wrapper Object)</div>
                <div className="font-mono text-xs font-bold text-amber-900">{activeMap.sampleBox}</div>
              </div>

              {/* Unboxing arrow */}
              <div className="flex flex-col items-center gap-0.5 text-center">
                <span className="text-[9px] text-stone-400 font-bold font-sans uppercase">Mở bọc (Auto-unboxing) ⬇️</span>
                <span className="font-mono text-[9px] text-sky-700 bg-sky-50 border border-sky-200 px-2 py-0.5 rounded shadow-sm">
                  {activeMap.sampleUnbox}
                </span>
              </div>

            </div>
          </div>

          <div className="text-[10px] text-stone-450 italic mt-3 font-sans leading-relaxed text-center border-t pt-2">
            Java tự động thực hiện nạp/mở bọc (Autoboxing/Unboxing) mà không cần viết hàm gọi thủ công.
          </div>

        </div>

        {/* Right Panel: Parsing sandbox (4 cols) */}
        <div className="lg:col-span-4 bg-[#1e1d1a] border border-[#2a2926] rounded-2xl p-4 text-stone-300 font-mono text-xs flex flex-col justify-between shadow-md">
          
          <div>
            <div className="text-[9px] text-stone-500 uppercase font-black tracking-wider mb-4 font-sans">Trình chuyển đổi kiểu dữ liệu</div>
            
            <div className="space-y-4">
              
              {/* Parse String to Number */}
              <div>
                <label className="text-[10px] text-stone-400 uppercase font-black tracking-wider block mb-1.5 font-sans">1. Đổi String sang {selectedType}:</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={strInput}
                    onChange={(e) => setStrInput(e.target.value)}
                    disabled={selectedType === "char"}
                    placeholder={selectedType === "char" ? "Không hỗ trợ" : "Nhập chuỗi..."}
                    className="flex-1 px-3 py-1.5 border border-stone-850 rounded-xl font-mono text-xs focus:border-amber-500 focus:outline-none bg-stone-900 text-stone-200"
                  />
                  <button
                    onClick={handleParse}
                    disabled={selectedType === "char"}
                    className="px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-stone-950 font-sans font-bold text-[10px] rounded-xl transition-all cursor-pointer disabled:bg-stone-800 disabled:text-stone-600 shrink-0"
                  >
                    Parse
                  </button>
                </div>
                
                {parseResult && (
                  <div className="bg-[#151413] border border-stone-800 p-2.5 rounded-xl text-emerald-400 text-[10px] mt-2 font-mono leading-relaxed overflow-x-auto shadow-inner">
                    {parseResult}
                  </div>
                )}
              </div>

              {/* Number to String */}
              {(selectedType === "int" || selectedType === "double") && (
                <div>
                  <label className="text-[10px] text-stone-400 uppercase font-black tracking-wider block mb-1.5 font-sans">2. Đổi Số sang String:</label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      value={numInput}
                      onChange={(e) => setNumInput(parseFloat(e.target.value) || 0)}
                      className="flex-1 px-3 py-1.5 border border-stone-850 rounded-xl font-mono text-xs focus:border-amber-500 focus:outline-none bg-stone-900 text-stone-200"
                    />
                    <button
                      onClick={handleToString}
                      className="px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-stone-950 font-sans font-bold text-[10px] rounded-xl transition-all cursor-pointer shrink-0"
                    >
                      Convert
                    </button>
                  </div>
                  
                  {stringResult && (
                    <div className="bg-[#151413] border border-stone-800 p-2.5 rounded-xl text-emerald-400 text-[10px] mt-2 font-mono leading-relaxed overflow-x-auto shadow-inner">
                      {stringResult}
                    </div>
                  )}
                </div>
              )}

            </div>
          </div>

          <div className="border-t border-stone-850 mt-4 pt-3 text-[10px] text-stone-500 font-sans leading-relaxed">
            Sử dụng các lớp bọc để thực hiện các thao tác chuyển đổi kiểu dữ liệu tĩnh.
          </div>

        </div>

      </div>

    </div>
  );
}
