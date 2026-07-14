"use client";
import React, { useState } from "react";

export default function JavaCompileWorkflow() {
  const [activeStep, setActiveStep] = useState(1); // 1, 2, or 3

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-3xl p-4 md:p-6 my-6 shadow-sm font-sans text-stone-800">
      
      {/* Header */}
      <div className="border-b border-stone-200 pb-3 mb-5">
        <h4 className="text-base font-extrabold text-stone-900">
          🖥️ Trình Giả Lập Quy Trình Soạn Thảo, Biên Dịch & Chạy Java
        </h4>
        <p className="text-xs text-stone-500 mt-1">
          Bấm vào từng bước để quan sát sự thay đổi của tập tin mã nguồn và cách JVM thực thi chương trình Java.
        </p>
      </div>

      {/* Stepper Buttons */}
      <div className="grid grid-cols-3 gap-2.5 mb-5">
        
        {/* Step 1 */}
        <button
          onClick={() => setActiveStep(1)}
          className={`px-3 py-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer text-center ${
            activeStep === 1
              ? "border-amber-500 bg-amber-50/15 text-amber-900 shadow-sm"
              : "border-stone-200 bg-white hover:bg-stone-100 text-stone-600"
          }`}
        >
          <div className="text-[9px] font-black uppercase text-stone-400 mb-0.5">Bước 1</div>
          <span className="font-mono">vim HelloWorld.java</span>
        </button>

        {/* Step 2 */}
        <button
          onClick={() => setActiveStep(2)}
          className={`px-3 py-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer text-center ${
            activeStep === 2
              ? "border-amber-500 bg-amber-50/15 text-amber-900 shadow-sm"
              : "border-stone-200 bg-white hover:bg-stone-100 text-stone-600"
          }`}
        >
          <div className="text-[9px] font-black uppercase text-stone-400 mb-0.5">Bước 2</div>
          <span className="font-mono">javac HelloWorld.java</span>
        </button>

        {/* Step 3 */}
        <button
          onClick={() => setActiveStep(3)}
          className={`px-3 py-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer text-center ${
            activeStep === 3
              ? "border-amber-500 bg-amber-50/15 text-amber-900 shadow-sm"
              : "border-stone-200 bg-white hover:bg-stone-100 text-stone-600"
          }`}
        >
          <div className="text-[9px] font-black uppercase text-stone-400 mb-0.5">Bước 3</div>
          <span className="font-mono">java HelloWorld</span>
        </button>

      </div>

      {/* Grid: Terminal + Explanations */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* Left: Terminal Mockup (7 cols) */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="bg-[#1e1d1a] border border-[#2a2926] rounded-2xl shadow-lg flex-1 overflow-hidden flex flex-col">
            
            {/* Terminal Title Bar */}
            <div className="bg-[#2d2c28] border-b border-[#1e1d1a] px-4 py-2.5 flex items-center gap-2 select-none">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
              <span className="text-[10px] text-stone-400 font-mono ml-2">Terminal - java HelloWorld</span>
            </div>

            {/* Terminal Body */}
            <div className="p-4 flex-1 font-mono text-xs md:text-sm text-stone-300 min-h-[220px] flex flex-col justify-between">
              <div>
                
                {/* Step 1 Content inside terminal */}
                {activeStep === 1 && (
                  <div className="space-y-3">
                    <div className="text-[#34d399] font-bold">$ vim HelloWorld.java</div>
                    
                    {/* Mock Editor Screen */}
                    <div className="bg-[#151413] border border-stone-800 rounded-xl p-3.5 text-stone-350 text-xs">
                      <div className="flex gap-3">
                        <div className="text-stone-600 select-none text-right w-4">
                          1<br/>2<br/>3<br/>4<br/>5
                        </div>
                        <div className="text-amber-200">
                          <span className="text-amber-500 font-bold">public class</span> HelloWorld &#123;<br/>
                          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-500 font-bold">public static void</span> main(String[] args) &#123;<br/>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="text-emerald-450">"Hello, World!"</span>);<br/>
                          &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
                          &#125;
                        </div>
                      </div>
                      <div className="border-t border-stone-850 mt-3 pt-1.5 text-stone-500 text-[10px] flex justify-between">
                        <span>"HelloWorld.java" [New File]</span>
                        <span>5L, 117C written</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2 Content inside terminal */}
                {activeStep === 2 && (
                  <div className="space-y-3">
                    <div className="text-stone-500">$ vim HelloWorld.java</div>
                    <div className="text-[#34d399] font-bold">$ javac HelloWorld.java</div>
                    <div className="text-stone-400 text-xs italic pl-2">
                      (Đang biên dịch mã nguồn...)<br/>
                      Biên dịch thành công! Tạo tệp bytecode trong cùng thư mục.
                    </div>
                  </div>
                )}

                {/* Step 3 Content inside terminal */}
                {activeStep === 3 && (
                  <div className="space-y-2">
                    <div className="text-stone-550">$ vim HelloWorld.java</div>
                    <div className="text-stone-550">$ javac HelloWorld.java</div>
                    <div className="text-[#34d399] font-bold">$ java HelloWorld</div>
                    <div className="bg-[#151413] border border-stone-800 p-3 rounded-lg text-emerald-400 font-bold text-xs mt-2 shadow-inner">
                      Hello, World!
                    </div>
                  </div>
                )}

              </div>

              {/* Shell prompt bottom marker */}
              <div className="text-stone-500 text-xs mt-4 flex items-center gap-1.5">
                <span>$</span> <span className="w-1.5 h-3.5 bg-stone-500 animate-pulse inline-block"></span>
              </div>
            </div>

          </div>
        </div>

        {/* Right: Diagram & Explanations (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-4 bg-white border border-stone-200 rounded-2xl p-4 shadow-sm">
          
          {/* Diagrams depending on active step */}
          <div className="flex-1 flex flex-col justify-center">
            
            {/* Step 1 Visual explanation */}
            {activeStep === 1 && (
              <div className="space-y-3 font-sans">
                <div className="text-[10px] text-stone-400 uppercase font-black tracking-wider">Hoạt động ở bước 1</div>
                
                <div className="border border-stone-150 rounded-xl p-3 bg-stone-50 text-center">
                  <div className="text-xl mb-1">✍️</div>
                  <div className="text-xs font-bold text-stone-800">Soạn thảo tệp HelloWorld.java</div>
                  <p className="text-[10px] text-stone-500 mt-1 leading-relaxed">
                    Người lập trình viết mã nguồn chứa lớp <code>HelloWorld</code> và lưu lại dưới dạng tệp tin có phần mở rộng là <code>.java</code>.
                  </p>
                </div>
              </div>
            )}

            {/* Step 2 Visual explanation */}
            {activeStep === 2 && (
              <div className="space-y-3 font-sans">
                <div className="text-[10px] text-stone-400 uppercase font-black tracking-wider">Hoạt động ở bước 2</div>
                
                <div className="flex flex-col gap-2">
                  {/* Compilation Flow Diagram */}
                  <div className="border border-amber-200 bg-amber-50/5 rounded-xl p-3 flex flex-col items-center text-center shadow-sm">
                    <span className="font-mono text-[10px] font-bold text-stone-700 bg-white border border-stone-200 px-2 py-0.5 rounded shadow-sm">HelloWorld.java (Mã nguồn)</span>
                    <span className="text-stone-400 my-1 text-xs">⬇️ Trình biên dịch (javac)</span>
                    <span className="font-mono text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded shadow-sm">HelloWorld.class (Bytecode)</span>
                  </div>
                  
                  <p className="text-[10px] text-stone-500 leading-relaxed text-center mt-1">
                    Trình biên dịch <strong><code>javac</code></strong> quét lỗi cú pháp và chuyển đổi toàn bộ mã nguồn sang dạng mã nhị phân trung gian gọi là <strong>Bytecode</strong> (tệp <code>.class</code>).
                  </p>
                </div>
              </div>
            )}

            {/* Step 3 Visual explanation */}
            {activeStep === 3 && (
              <div className="space-y-3 font-sans">
                <div className="text-[10px] text-stone-400 uppercase font-black tracking-wider">Hoạt động ở bước 3</div>
                
                <div className="flex flex-col gap-2">
                  {/* Execution Flow Diagram */}
                  <div className="border border-sky-200 bg-sky-50/5 rounded-xl p-3 flex flex-col items-center text-center shadow-sm">
                    <span className="font-mono text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded shadow-sm">HelloWorld.class (Bytecode)</span>
                    <span className="text-stone-400 my-1 text-xs">⬇️ JVM (Java Virtual Machine) thực thi</span>
                    <span className="font-bold text-[10px] text-emerald-700 bg-emerald-50 border border-emerald-250 px-2.5 py-0.5 rounded-full shadow-sm">Kết quả: Hello, World!</span>
                  </div>

                  <p className="text-[10px] text-stone-500 leading-relaxed text-center mt-1">
                    Trình thông dịch <strong><code>java</code></strong> khởi chạy máy ảo Java (JVM). JVM nạp bytecode <code>.class</code>, chuyển dịch sang mã máy gốc của CPU và in kết quả ra Console.
                  </p>
                </div>
              </div>
            )}

          </div>

          {/* Special Gotcha note box */}
          <div className="bg-amber-50/30 border border-amber-200 rounded-xl p-3 text-xs leading-relaxed text-stone-750">
            <strong>📌 Trọng tâm ôn thi lý thuyết:</strong><br/>
            • <code>javac HelloWorld.java</code>: Tên tệp biên dịch bắt buộc phải có phần mở rộng <strong><code>.java</code></strong>.<br/>
            • <code>java HelloWorld</code>: Tên chạy lớp JVM <strong>không được viết</strong> đuôi <code>.class</code>.
          </div>

        </div>

      </div>

    </div>
  );
}
