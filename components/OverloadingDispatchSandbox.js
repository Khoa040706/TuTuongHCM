"use client";
import React, { useState } from "react";

export default function OverloadingDispatchSandbox() {
  const [selectedCall, setSelectedCall] = useState("call_int"); // call_int, call_double, call_string, call_two

  const options = [
    {
      id: "call_int",
      label: "service.print(10);",
      desc: "Truyền vào 1 tham số kiểu int.",
      matchedLine: 2,
      output: "In số nguyên: 10",
      explanation: "Java quét danh sách hàm và tìm thấy hàm print(int a) có kiểu tham số khớp hoàn toàn 100% với giá trị int truyền vào."
    },
    {
      id: "call_double",
      label: "service.print(3.14);",
      desc: "Truyền vào 1 tham số kiểu double.",
      matchedLine: 5,
      output: "In số thực double: 3.14",
      explanation: "Java đối sánh kiểu của tham số truyền vào là 3.14 (double) và quyết định gọi hàm print(double a) tương ứng."
    },
    {
      id: "call_string",
      label: "service.print(\"Java\");",
      desc: "Truyền vào 1 tham số kiểu String.",
      matchedLine: 8,
      output: "In chuỗi chữ: Java",
      explanation: "Vì đối số là chuỗi \"Java\", Java khớp với kiểu dữ liệu đối tượng String và gọi hàm print(String s)."
    },
    {
      id: "call_two",
      label: "service.print(5, 9.8);",
      desc: "Truyền vào 2 tham số: int và double.",
      matchedLine: 11,
      output: "In hai số: a = 5, b = 9.8",
      explanation: "Java đối chiếu thấy có 2 tham số truyền vào với thứ tự kiểu dữ liệu là (int, double), do đó khớp hoàn hảo với signature của hàm print(int a, double b)."
    }
  ];

  const currentOpt = options.find((opt) => opt.id === selectedCall);

  const getCodeLineStyle = (lineIndex) => {
    if (currentOpt.matchedLine === lineIndex) {
      return "bg-emerald-500/25 border-l-4 border-emerald-500 pl-2 font-bold text-white transition-all py-0.5 my-0.5";
    }
    return "text-stone-400 pl-3 py-0.5 my-0.5";
  };

  return (
    <div className="bg-stone-55 border border-stone-200 rounded-3xl p-4 md:p-6 my-6 shadow-sm font-sans text-stone-850">
      
      {/* Header */}
      <div className="border-b border-stone-200 pb-3 mb-5">
        <h4 className="text-base font-extrabold text-stone-900">
          ⚡ Trình Giả Lập Liên Kết Nạp Chồng (Overloading Dispatch Simulator)
        </h4>
        <p className="text-xs text-stone-500 mt-1">
          Chọn câu lệnh gọi hàm ở bảng trái để quan sát cách Java tìm kiếm và tự động kích hoạt chữ ký hàm tương ứng ở bảng phải.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* Left Side: Selectors (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-4">
          
          <div className="space-y-2.5">
            <label className="text-xs font-black text-stone-450 uppercase tracking-wider block mb-1">Chọn Lệnh Gọi Hàm:</label>
            
            {options.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setSelectedCall(opt.id)}
                className={`w-full text-left p-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                  selectedCall === opt.id
                    ? "border-amber-500 bg-amber-550/10 text-amber-900 shadow-sm"
                    : "border-stone-200 bg-white hover:bg-stone-100 text-stone-700"
                }`}
              >
                <div className="font-mono text-stone-850">{opt.label}</div>
                <p className="text-[10px] text-stone-500 font-normal mt-0.5">{opt.desc}</p>
              </button>
            ))}
          </div>

          {/* Explanation text */}
          <div className="bg-stone-100/60 border border-stone-200 rounded-xl p-3 text-xs leading-relaxed text-stone-700 shadow-inner">
            <span className="font-extrabold text-stone-850 block mb-1">🔍 Cơ chế biên dịch Java:</span>
            {currentOpt.explanation}
          </div>

        </div>

        {/* Right Side: Overloaded Class definition & Console (7 cols) */}
        <div className="lg:col-span-7 bg-[#1e1d1a] border border-[#2a2926] rounded-2xl p-4 text-stone-300 font-mono text-xs flex flex-col justify-between shadow-md">
          
          <div>
            <div className="text-[9px] text-stone-500 uppercase font-black tracking-wider mb-3 font-sans">Lớp Định Nghĩa Hàm (PrintService.java)</div>
            
            <div className="space-y-0.5 leading-relaxed text-[11px]">
              <div className="text-stone-600">// Lớp chứa các hàm nạp chồng (overloaded)</div>
              <div><span className="text-amber-500 font-bold">public class</span> PrintService &#123;</div>
              
              {/* Method 1: int */}
              <div className={getCodeLineStyle(2)}>
                &nbsp;&nbsp;<span className="text-amber-550 font-bold">public void</span> print(<span className="text-amber-500">int</span> a) &#123;
              </div>
              <div className="text-stone-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("In số nguyên: " + a);</div>
              <div className={currentOpt.matchedLine === 2 ? "text-white font-bold pl-2" : "text-stone-400 pl-3"}>&nbsp;&nbsp;&#125;</div>

              {/* Method 2: double */}
              <div className={getCodeLineStyle(5)}>
                &nbsp;&nbsp;<span className="text-amber-550 font-bold">public void</span> print(<span className="text-amber-500">double</span> a) &#123;
              </div>
              <div className="text-stone-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("In số thực double: " + a);</div>
              <div className={currentOpt.matchedLine === 5 ? "text-white font-bold pl-2" : "text-stone-400 pl-3"}>&nbsp;&nbsp;&#125;</div>

              {/* Method 3: String */}
              <div className={getCodeLineStyle(8)}>
                &nbsp;&nbsp;<span className="text-amber-550 font-bold">public void</span> print(String s) &#123;
              </div>
              <div className="text-stone-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("In chuỗi chữ: " + s);</div>
              <div className={currentOpt.matchedLine === 8 ? "text-white font-bold pl-2" : "text-stone-400 pl-3"}>&nbsp;&nbsp;&#125;</div>

              {/* Method 4: int, double */}
              <div className={getCodeLineStyle(11)}>
                &nbsp;&nbsp;<span className="text-amber-550 font-bold">public void</span> print(<span className="text-amber-500">int</span> a, <span className="text-amber-500">double</span> b) &#123;
              </div>
              <div className="text-stone-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("In hai số: a = " + a + ", b = " + b);</div>
              <div className={currentOpt.matchedLine === 11 ? "text-white font-bold pl-2" : "text-stone-400 pl-3"}>&nbsp;&nbsp;&#125;</div>

              <div>&#125;</div>
            </div>
          </div>

          {/* Console Simulation output */}
          <div className="mt-4 pt-3 border-t border-stone-850">
            <div className="text-[9px] text-stone-500 uppercase font-black tracking-wider mb-2 font-sans">Kết quả màn hình Console</div>
            <div className="bg-[#151413] border border-stone-800 p-2.5 rounded-xl text-emerald-400 font-bold font-mono text-xs shadow-inner">
              {currentOpt.output}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
