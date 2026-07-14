"use client";
import React, { useState } from "react";

export default function StringComparisonMini() {
  const [selectedOp, setSelectedOp] = useState("s1_s3_eq"); // s1_s3_eq (s1 == s3), s1_s2_eq (s1 == s2), s1_s2_equals (s1.equals(s2))

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-3xl p-4 md:p-6 my-6 shadow-sm font-sans text-stone-800">
      
      {/* Header */}
      <div className="border-b border-stone-200 pb-3 mb-5">
        <h4 className="text-base font-extrabold text-stone-900">
          📍 Bộ Trực Quan Hóa So Sánh Chuỗi (== vs .equals())
        </h4>
        <p className="text-xs text-stone-500 mt-1">
          Chọn phép toán so sánh để xem đường trỏ liên kết trong bộ nhớ Stack & Heap thay đổi trực quan.
        </p>
      </div>

      {/* Grid: memory diagram vs selectors */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* Left: Selector buttons + explanations (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-4">
          
          <div className="space-y-2.5">
            <label className="text-xs font-black text-stone-450 uppercase tracking-wider block mb-1">Chọn Phép So Sánh:</label>
            
            {/* s1 == s3 */}
            <button
              onClick={() => setSelectedOp("s1_s3_eq")}
              className={`w-full text-left p-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                selectedOp === "s1_s3_eq"
                  ? "border-emerald-500 bg-emerald-50/10 text-emerald-900 shadow-sm"
                  : "border-stone-200 bg-white hover:bg-stone-100 text-stone-700"
              }`}
            >
              <div className="flex justify-between items-center">
                <span className="font-mono">s1 == s3</span>
                <span className="bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded text-[9px] font-bold">Kết quả: true</span>
              </div>
              <p className="text-[10px] text-stone-500 font-normal mt-1">So sánh địa chỉ của hai hằng chuỗi Literal.</p>
            </button>

            {/* s1 == s2 */}
            <button
              onClick={() => setSelectedOp("s1_s2_eq")}
              className={`w-full text-left p-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                selectedOp === "s1_s2_eq"
                  ? "border-rose-450 bg-rose-50/10 text-rose-900 shadow-sm"
                  : "border-stone-200 bg-white hover:bg-stone-100 text-stone-700"
              }`}
            >
              <div className="flex justify-between items-center">
                <span className="font-mono">s1 == s2</span>
                <span className="bg-rose-100 text-rose-800 px-1.5 py-0.5 rounded text-[9px] font-bold">Kết quả: false</span>
              </div>
              <p className="text-[10px] text-stone-500 font-normal mt-1">So sánh địa chỉ của Literal vs new String().</p>
            </button>

            {/* s1.equals(s2) */}
            <button
              onClick={() => setSelectedOp("s1_s2_equals")}
              className={`w-full text-left p-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                selectedOp === "s1_s2_equals"
                  ? "border-emerald-500 bg-emerald-50/10 text-emerald-900 shadow-sm"
                  : "border-stone-200 bg-white hover:bg-stone-100 text-stone-700"
              }`}
            >
              <div className="flex justify-between items-center">
                <span className="font-mono">s1.equals(s2)</span>
                <span className="bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded text-[9px] font-bold">Kết quả: true</span>
              </div>
              <p className="text-[10px] text-stone-500 font-normal mt-1">So sánh nội dung ký tự thực tế bên trong.</p>
            </button>
          </div>

          {/* Explanation panel */}
          <div className="bg-stone-100/50 border border-stone-200 rounded-xl p-3 text-xs leading-relaxed text-stone-700 shadow-inner">
            <span className="font-extrabold text-stone-850 block mb-1">💡 Giải thích cơ chế:</span>
            {selectedOp === "s1_s3_eq" && (
              <span>
                Cả <strong>s1</strong> và <strong>s3</strong> cùng được tạo bằng chuỗi Literal <code>"hello"</code>. 
                JVM sẽ tối ưu bằng cách chỉ tạo duy nhất 1 đối tượng trong <strong>String Constant Pool</strong> và trỏ chung địa chỉ.<br/>
                ➔ Địa chỉ giống nhau nên toán tử <code>==</code> trả về <code>true</code>.
              </span>
            )}
            {selectedOp === "s1_s2_eq" && (
              <span>
                Biến <strong>s2</strong> được tạo bằng từ khóa <code>new</code> nên JVM bắt buộc cấp phát vùng nhớ độc lập trên <strong>Heap thông thường</strong>.
                Địa chỉ của <strong>s2</strong> lúc này khác hoàn toàn địa chỉ của <strong>s1</strong> (trong Pool).<br/>
                ➔ Địa chỉ khác nhau nên toán tử <code>==</code> trả về <code>false</code>.
              </span>
            )}
            {selectedOp === "s1_s2_equals" && (
              <span>
                Phương thức <strong><code>.equals()</code></strong> không quan tâm địa chỉ bộ nhớ ở đâu. 
                Nó chỉ lấy nội dung ký tự của <strong>s1</strong> (hello) đối sánh với nội dung của <strong>s2</strong> (hello).<br/>
                ➔ Nội dung hoàn toàn khớp nên trả về <code>true</code>.
              </span>
            )}
          </div>

        </div>

        {/* Right: Stack Heap Memory Map (7 cols) */}
        <div className="lg:col-span-7 bg-[#151413] border border-stone-800 rounded-2xl p-4 text-stone-300 flex flex-col justify-between relative shadow-md">
          
          <div>
            <div className="text-[9px] text-stone-500 uppercase font-black tracking-wider mb-4 font-sans">Sơ Đồ Phân Phối Vùng Nhớ RAM</div>
            
            {/* Stack vs Heap columns */}
            <div className="grid grid-cols-2 gap-5 relative min-h-[160px]">
              
              {/* Column 1: Stack */}
              <div className="flex flex-col gap-3 justify-center items-center">
                <div className="text-[10px] text-stone-500 font-bold uppercase tracking-wide">STACK (Tham chiếu)</div>
                
                {/* s1 */}
                <div className={`border p-2 rounded-xl w-full text-center font-mono text-xs font-bold transition-all ${
                  ["s1_s3_eq", "s1_s2_eq", "s1_s2_equals"].includes(selectedOp)
                    ? "border-amber-500 text-amber-300 bg-amber-950/20"
                    : "border-stone-700 text-stone-400 bg-stone-900/50"
                }`}>
                  s1
                  <div className="text-[8px] text-stone-500 font-sans font-normal mt-0.5">("hello")</div>
                </div>

                {/* s2 */}
                <div className={`border p-2 rounded-xl w-full text-center font-mono text-xs font-bold transition-all ${
                  ["s1_s2_eq", "s1_s2_equals"].includes(selectedOp)
                    ? "border-sky-500 text-sky-300 bg-sky-950/20"
                    : "border-stone-700 text-stone-400 bg-stone-900/50"
                }`}>
                  s2
                  <div className="text-[8px] text-stone-500 font-sans font-normal mt-0.5">(new String)</div>
                </div>

                {/* s3 */}
                <div className={`border p-2 rounded-xl w-full text-center font-mono text-xs font-bold transition-all ${
                  selectedOp === "s1_s3_eq"
                    ? "border-emerald-500 text-emerald-300 bg-emerald-950/20"
                    : "border-stone-700 text-stone-400 bg-stone-900/50"
                }`}>
                  s3
                  <div className="text-[8px] text-stone-500 font-sans font-normal mt-0.5">("hello")</div>
                </div>

              </div>

              {/* Column 2: Heap */}
              <div className="flex flex-col gap-4 justify-around items-center pl-8 border-l border-stone-850">
                <div className="text-[10px] text-stone-500 font-bold uppercase tracking-wide">HEAP (Đối tượng thực)</div>
                
                {/* Normal Heap Node */}
                <div className={`border p-3 rounded-2xl w-full text-center text-xs transition-all relative ${
                  ["s1_s2_eq", "s1_s2_equals"].includes(selectedOp)
                    ? "border-sky-400 bg-sky-950/10 text-sky-200"
                    : "border-stone-800 bg-[#1e1d1a]"
                }`}>
                  <div className="text-[8px] text-stone-500 font-black uppercase mb-1">Heap thông thường</div>
                  <span className="font-mono font-bold text-[10px]">Đối tượng String s2</span>
                  
                  {/* Left pointing arrow to indicate inner reference */}
                  <div className="text-[9px] text-stone-600 mt-1 italic font-sans">
                    trỏ tới Pool ➔
                  </div>
                </div>

                {/* String Pool Node */}
                <div className={`border p-3 rounded-2xl w-full text-center text-xs transition-all relative ${
                  ["s1_s3_eq", "s1_s2_equals"].includes(selectedOp)
                    ? "border-emerald-400 bg-emerald-950/10 text-emerald-250"
                    : "border-amber-600/40 bg-amber-950/5 text-amber-400"
                }`}>
                  <div className="text-[8px] text-stone-500 font-black uppercase mb-1">String Constant Pool</div>
                  <span className="font-mono font-black text-xs bg-stone-900 px-2 py-0.5 rounded border border-stone-800">"hello"</span>
                  <div className="text-[8px] text-stone-500 mt-1 font-sans">Vùng lưu hằng số</div>
                </div>

              </div>

            </div>

            {/* Custom line status indicator */}
            <div className="border-t border-stone-800 mt-4 pt-3 flex justify-between text-[10px] text-stone-500 font-sans">
              <span>Đường nối bộ nhớ biểu diễn liên kết địa chỉ.</span>
              <span className="font-bold text-stone-400">
                {selectedOp === "s1_s3_eq" && "s1 == s3 ➔ CÙNG ĐỊA CHỈ ✔️"}
                {selectedOp === "s1_s2_eq" && "s1 == s2 ➔ KHÁC ĐỊA CHỈ ❌"}
                {selectedOp === "s1_s2_equals" && "s1.equals(s2) ➔ TRÙNG NỘI DUNG ✔️"}
              </span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
