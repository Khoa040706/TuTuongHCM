"use client";
import React, { useState } from "react";
import { ArrowRight, HelpCircle, Code2, Layers } from "lucide-react";

export default function ThisReferenceVisualizer() {
  const [activeCall, setActiveCall] = useState(null); // 'b1' or 'b2'
  const [shadowingMode, setShadowingMode] = useState(false);

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-3xl p-4 md:p-6 my-6 shadow-sm font-sans text-stone-850 select-none animate-fade-in">
      {/* Header */}
      <div className="border-b border-stone-200 pb-3 mb-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
        <div>
          <h4 className="text-base font-extrabold text-stone-900">
            🔍 Trình Giả Lập Tham Chiếu "this" & Shadowing
          </h4>
          <p className="text-xs text-stone-500 mt-1">
            Bấm vào các dòng lệnh gọi hàm để quan sát cách tham chiếu <code>this</code> tự động liên kết tới địa chỉ đối tượng tương ứng trong RAM.
          </p>
        </div>

        {/* Shadowing Mode Toggle */}
        <button
          onClick={() => { setShadowingMode(!shadowingMode); setActiveCall(null); }}
          className={`px-3 py-1.5 border rounded-xl text-xs font-bold transition-all cursor-pointer ${
            shadowingMode
              ? "bg-rose-50 border-rose-250 text-rose-800 shadow-sm"
              : "bg-white border-stone-250 hover:bg-stone-100 text-stone-700"
          }`}
        >
          {shadowingMode ? "🛡️ Tắt Shadowing (Xem Code Đúng)" : "⚠️ Bật Shadowing (Lỗi Trùng Tên)"}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* Left Side: Code Calling (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-4">
          {/* Code block */}
          <div className="bg-[#1e1d1a] border border-[#2a2926] rounded-2xl p-4 text-stone-300 font-mono text-[11px] leading-relaxed shadow-inner">
            <div className="text-[9px] text-stone-400 font-black uppercase mb-3 border-b border-stone-850 pb-1.5 flex items-center gap-1">
              <Code2 size={12} className="text-amber-500" />
              <span>MyBall.java (Method setColour)</span>
            </div>

            <pre className="text-stone-400">
              <span className="text-amber-500 font-bold">public void</span> setColour(String colour) &#123;{"\n"}
              {shadowingMode ? (
                // Shadowing Wrong Code
                <div className={`pl-4 py-0.5 rounded transition-all ${activeCall ? "bg-rose-950/30 text-rose-300" : ""}`}>
                  &nbsp;&nbsp;&nbsp;&nbsp;colour = colour; <span className="text-stone-600 font-sans text-[10px] italic">{"// Không hoạt động đúng!"}</span>
                </div>
              ) : (
                // Correct Code with this
                <div className={`pl-4 py-0.5 rounded transition-all ${activeCall ? "bg-emerald-950/20 text-emerald-300" : ""}`}>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-500 font-bold">this</span>.colour = colour; <span className="text-stone-600 font-sans text-[10px] italic">{"// Gán tham số vào thuộc tính"}</span>
                </div>
              )}
              &#125;
            </pre>
            
            <div className="border-t border-stone-850 mt-4 pt-3 text-[10px] text-stone-500 font-sans">
              <strong>Mô phỏng lệnh gọi từ Client Program:</strong>
              <div className="flex gap-2.5 mt-2">
                <button
                  onClick={() => setActiveCall("b1")}
                  className={`flex-1 py-2 px-3 border rounded-xl font-mono text-[10px] font-bold transition-all cursor-pointer text-center ${
                    activeCall === "b1"
                      ? "border-blue-500 bg-blue-500/10 text-blue-400 shadow-sm"
                      : "border-stone-800 bg-[#151413] hover:bg-stone-900 text-stone-400"
                  }`}
                >
                  b1.setColour("purple");
                </button>
                <button
                  onClick={() => setActiveCall("b2")}
                  className={`flex-1 py-2 px-3 border rounded-xl font-mono text-[10px] font-bold transition-all cursor-pointer text-center ${
                    activeCall === "b2"
                      ? "border-amber-500 bg-amber-500/10 text-amber-400 shadow-sm"
                      : "border-stone-800 bg-[#151413] hover:bg-stone-900 text-stone-400"
                  }`}
                >
                  b2.setColour("brown");
                </button>
              </div>
            </div>
          </div>

          {/* Stepper feedback message */}
          <div className="bg-white border border-stone-200 rounded-xl p-3 text-xs leading-relaxed text-stone-600">
            {activeCall === null ? (
              "💡 Bấm nút gọi hàm b1 hoặc b2 để bắt đầu mô phỏng."
            ) : shadowingMode ? (
              <div className="text-rose-800 flex gap-2">
                <span>❌</span>
                <div>
                  <strong>Lỗi Shadowing:</strong> Cả hai vế của lệnh <code>colour = colour</code> đều trỏ tới biến cục bộ / tham số truyền vào (<code>colour</code>). Thuộc tính dữ liệu thực tế của đối tượng quả bóng trên Heap sẽ không bao giờ được cập nhật!
                </div>
              </div>
            ) : activeCall === "b1" ? (
              <div className="text-blue-900 flex gap-2">
                <ArrowRight size={14} className="shrink-0 mt-0.5" />
                <div>
                  Hàm được gọi trên đối tượng <code>b1</code> ➔ Từ khóa <code>this</code> tự động đại diện cho địa chỉ <strong><code>0x301</code></strong>. Lệnh <code>this.colour = colour</code> tương đương với việc thực thi: <strong><code>b1.colour = "purple"</code></strong>.
                </div>
              </div>
            ) : (
              <div className="text-amber-900 flex gap-2">
                <ArrowRight size={14} className="shrink-0 mt-0.5" />
                <div>
                  Hàm được gọi trên đối tượng <code>b2</code> ➔ Từ khóa <code>this</code> tự động đại diện cho địa chỉ <strong><code>0x302</code></strong>. Lệnh <code>this.colour = colour</code> tương đương với việc thực thi: <strong><code>b2.colour = "brown"</code></strong>.
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Virtual Heap Memory (5 cols) */}
        <div className="lg:col-span-5 bg-[#151413] border border-stone-850 rounded-2xl p-4 flex flex-col justify-between shadow-md text-stone-300 font-mono text-xs">
          <div>
            <div className="flex items-center gap-1.5 text-stone-500 text-[9px] uppercase font-black tracking-wider border-b border-stone-850 pb-2 mb-4">
              <Layers size={12} />
              <span>Vùng nhớ Heap (RAM)</span>
            </div>

            <div className="space-y-4">
              {/* Ball b1 object */}
              <div className={`border p-3.5 rounded-xl relative transition-all duration-300 ${
                activeCall === "b1" 
                  ? "border-blue-500 bg-blue-950/20 shadow-[0_0_12px_rgba(59,130,246,0.15)] scale-[1.02]" 
                  : "border-stone-800 bg-stone-900/30 opacity-60"
              }`}>
                {activeCall === "b1" && !shadowingMode && (
                  <span className="absolute -left-3 top-4 bg-blue-600 text-white text-[8px] font-black px-2 py-0.5 rounded-full select-none shadow-sm animate-pulse">
                    this ➔
                  </span>
                )}
                <span className="absolute top-2 right-2 text-[9px] text-stone-600">0x301</span>
                <div className="text-xs font-bold text-stone-200">myBall1 (b1)</div>
                <div className="text-[10px] text-stone-500 mt-1 leading-relaxed">
                  colour: <code className={`font-mono font-bold ${activeCall === "b1" && !shadowingMode ? "text-blue-400" : "text-stone-400"}`}>
                    {activeCall === "b1" && !shadowingMode ? '"purple"' : '"yellow"'}
                  </code>{"\n"}
                  radius: <code className="font-mono text-stone-400">10.0</code>
                </div>
              </div>

              {/* Ball b2 object */}
              <div className={`border p-3.5 rounded-xl relative transition-all duration-300 ${
                activeCall === "b2" 
                  ? "border-amber-500 bg-amber-950/20 shadow-[0_0_12px_rgba(245,158,11,0.15)] scale-[1.02]" 
                  : "border-stone-800 bg-stone-900/30 opacity-60"
              }`}>
                {activeCall === "b2" && !shadowingMode && (
                  <span className="absolute -left-3 top-4 bg-amber-600 text-white text-[8px] font-black px-2 py-0.5 rounded-full select-none shadow-sm animate-pulse">
                    this ➔
                  </span>
                )}
                <span className="absolute top-2 right-2 text-[9px] text-stone-600">0x302</span>
                <div className="text-xs font-bold text-stone-200">myBall2 (b2)</div>
                <div className="text-[10px] text-stone-500 mt-1 leading-relaxed">
                  colour: <code className={`font-mono font-bold ${activeCall === "b2" && !shadowingMode ? "text-amber-400" : "text-stone-400"}`}>
                    {activeCall === "b2" && !shadowingMode ? '"brown"' : '"yellow"'}
                  </code>{"\n"}
                  radius: <code className="font-mono text-stone-400">10.0</code>
                </div>
              </div>
            </div>
          </div>

          {/* Static warning footer */}
          <div className="mt-4 pt-3 border-t border-stone-850 text-[10px] text-stone-500 font-sans leading-relaxed">
            💡 <strong>this</strong> đại diện cho thực thể hiện hành. Vì thế, <strong>this hoàn toàn không tồn tại</strong> trong các phương thức tĩnh (<code>static method</code>).
          </div>
        </div>
      </div>
    </div>
  );
}
