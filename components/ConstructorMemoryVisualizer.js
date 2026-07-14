"use client";
import React, { useState } from "react";

export default function ConstructorMemoryVisualizer() {
  const [initType, setInitType] = useState("literal"); // literal, constructor_new

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-3xl p-4 md:p-6 my-6 shadow-sm font-sans text-stone-850">
      
      {/* Header */}
      <div className="border-b border-stone-200 pb-3 mb-5">
        <h4 className="text-base font-extrabold text-stone-900">
          💾 Mô Phỏng Khởi Tạo String & Phân Bổ Ô Nhớ RAM
        </h4>
        <p className="text-xs text-stone-500 mt-1">
          Chọn phương thức khởi tạo String để quan sát sự khác biệt về số lượng đối tượng sinh ra trong bộ nhớ RAM.
        </p>
      </div>

      {/* Selector Toggle */}
      <div className="flex gap-3 mb-5">
        <button
          onClick={() => setInitType("literal")}
          className={`flex-1 py-3 px-4 border rounded-2xl text-xs font-bold transition-all cursor-pointer text-center ${
            initType === "literal"
              ? "border-amber-500 bg-amber-50/15 text-amber-900 shadow-sm"
              : "border-stone-200 bg-white hover:bg-stone-100 text-stone-600"
          }`}
        >
          <div className="text-[9px] font-black uppercase text-stone-400 mb-0.5">Cách 1 (String Literal)</div>
          <span className="font-mono">String s1 = "hello";</span>
        </button>

        <button
          onClick={() => setInitType("constructor_new")}
          className={`flex-1 py-3 px-4 border rounded-2xl text-xs font-bold transition-all cursor-pointer text-center ${
            initType === "constructor_new"
              ? "border-amber-500 bg-amber-50/15 text-amber-900 shadow-sm"
              : "border-stone-200 bg-white hover:bg-stone-100 text-stone-600"
          }`}
        >
          <div className="text-[9px] font-black uppercase text-stone-400 mb-0.5">Cách 2 (Constructor - new)</div>
          <span className="font-mono">String s2 = new String("hello");</span>
        </button>
      </div>

      {/* Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* Left Side: Memory Map (7 cols) */}
        <div className="lg:col-span-7 bg-[#151413] border border-stone-800 rounded-2xl p-4 text-stone-300 flex flex-col justify-between shadow-md min-h-[220px]">
          <div>
            <div className="text-[9px] text-stone-500 uppercase font-black tracking-wider mb-4 font-sans">Mô hình phân bổ RAM ảo</div>
            
            <div className="grid grid-cols-2 gap-5 relative min-h-[160px]">
              
              {/* Stack Column */}
              <div className="flex flex-col gap-3 justify-center items-center">
                <div className="text-[10px] text-stone-500 font-bold uppercase tracking-wide">STACK (Tham chiếu)</div>
                
                {initType === "literal" ? (
                  <div className="border border-emerald-500 text-emerald-300 bg-emerald-950/20 p-2.5 rounded-xl w-full text-center font-mono text-xs font-bold transition-all">
                    s1
                    <div className="text-[8px] text-stone-500 font-sans font-normal mt-0.5">Biến tham chiếu</div>
                  </div>
                ) : (
                  <div className="border border-sky-500 text-sky-300 bg-sky-950/20 p-2.5 rounded-xl w-full text-center font-mono text-xs font-bold transition-all">
                    s2
                    <div className="text-[8px] text-stone-500 font-sans font-normal mt-0.5">Biến tham chiếu</div>
                  </div>
                )}
              </div>

              {/* Heap Column */}
              <div className="flex flex-col gap-4 justify-around items-center pl-8 border-l border-stone-850">
                <div className="text-[10px] text-stone-500 font-bold uppercase tracking-wide">HEAP (Bộ nhớ đối tượng)</div>
                
                {/* Normal Heap Box (only for constructor_new) */}
                {initType === "constructor_new" && (
                  <div className="border border-sky-400 bg-sky-950/10 text-sky-200 p-3 rounded-2xl w-full text-center text-xs transition-all relative">
                    <div className="text-[8px] text-stone-500 font-black uppercase mb-1">Heap thông thường</div>
                    <span className="font-mono font-bold text-[10px]">Đối tượng String</span>
                    <div className="text-[8px] text-stone-500 mt-1">trỏ tới Pool ➔</div>
                  </div>
                )}

                {/* String Pool Box */}
                <div className={`border p-3 rounded-2xl w-full text-center text-xs transition-all relative ${
                  initType === "literal"
                    ? "border-emerald-400 bg-emerald-950/10 text-emerald-250"
                    : "border-stone-800 bg-[#1e1d1a] text-stone-400"
                }`}>
                  <div className="text-[8px] text-stone-500 font-black uppercase mb-1">String Constant Pool</div>
                  <span className="font-mono font-black text-xs bg-stone-900 px-2 py-0.5 rounded border border-stone-800 text-amber-400">"hello"</span>
                  <div className="text-[8px] text-stone-500 mt-1">Hằng số chuỗi</div>
                </div>

              </div>

            </div>
          </div>

          <div className="border-t border-stone-800 mt-4 pt-3 flex justify-between text-[10px] text-stone-500 font-sans">
            <span>Đường dẫn biểu thị liên kết tham chiếu bộ nhớ.</span>
            <span className="font-bold text-stone-400">
              {initType === "literal" ? "s1 ➔ Trỏ trực tiếp vào String Pool" : "s2 ➔ Trỏ vào Heap ➔ Trỏ vào String Pool"}
            </span>
          </div>
        </div>

        {/* Right Side: Analysis & Exam gotchas (5 cols) */}
        <div className="lg:col-span-5 bg-white border border-stone-200 rounded-2xl p-4 shadow-sm flex flex-col justify-between">
          <div>
            <div className="text-[10px] text-stone-400 uppercase font-black tracking-wider mb-3">Phân tích kỹ thuật</div>
            
            <div className="space-y-3.5 text-xs text-stone-750">
              
              {/* Objects Created count */}
              <div className="flex justify-between items-center bg-stone-50 border border-stone-150 p-2.5 rounded-xl">
                <span className="font-bold">Số đối tượng được tạo:</span>
                <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded-md font-mono font-black text-xs">
                  {initType === "literal" ? "0 hoặc 1" : "1 hoặc 2"}
                </span>
              </div>

              {/* Detailed Breakdown */}
              <div className="space-y-2">
                {initType === "literal" ? (
                  <>
                    <p className="leading-relaxed">
                      • <strong>Cơ chế:</strong> JVM tìm chuỗi <code>"hello"</code> trong Pool. Nếu thấy đã có sẵn, JVM trỏ thẳng <code>s1</code> vào đó mà không tạo thêm đối tượng nào.
                    </p>
                    <p className="leading-relaxed">
                      • <strong>Ưu điểm:</strong> Cực kỳ tối ưu hóa dung lượng bộ nhớ RAM, hạn chế tối đa sinh rác bộ nhớ (Garbage).
                    </p>
                  </>
                ) : (
                  <>
                    <p className="leading-relaxed">
                      • <strong>Cơ chế:</strong> Từ khóa <code>new</code> ép hệ thống phải khởi tạo một đối tượng String hoàn toàn mới trên vùng nhớ Heap thông thường. Đối tượng này sau đó mới trỏ liên kết đến hằng số trong Pool.
                    </p>
                    <p className="leading-relaxed">
                      • <strong>Nhược điểm:</strong> Tạo thêm đối tượng trung gian thừa thãi, gây lãng phí ô nhớ RAM.
                    </p>
                  </>
                )}
              </div>

            </div>
          </div>

          {/* Exam alert */}
          <div className="bg-amber-50/25 border border-amber-200 rounded-xl p-3 text-xs leading-relaxed text-stone-800 mt-4">
            <strong>⚠️ Lưu ý đi thi:</strong><br/>
            Hầu hết các lớp trong Java bắt buộc phải dùng từ khóa <code>new</code> để gọi Constructor tạo đối tượng. <strong>Lớp String là một ngoại lệ đặc biệt</strong> vì hỗ trợ cú pháp khởi tạo nhanh (Literal) không cần dùng <code>new</code>.
          </div>

        </div>

      </div>

    </div>
  );
}
