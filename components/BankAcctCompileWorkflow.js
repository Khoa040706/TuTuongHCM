"use client";
import React, { useState } from "react";

export default function BankAcctCompileWorkflow() {
  const [activeStep, setActiveStep] = useState(1); // 1: BankAcct.java, 2: TestBankAcct.java, 3: Compile, 4: Run

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-3xl p-4 md:p-6 my-6 shadow-sm font-sans text-stone-800">
      {/* Header */}
      <div className="border-b border-stone-200 pb-3 mb-5">
        <h4 className="text-sm md:text-base font-extrabold text-stone-900">
          🖥️ Giả Lập Biên Dịch & Rút/Gửi Tiền Từng Bước (BankAcct & TestBankAcct)
        </h4>
        <p className="text-xs text-stone-500 mt-1">
          Bấm vào từng bước để quan sát mã nguồn, lệnh biên dịch và kết quả thực thi giao dịch ngân hàng của JVM.
        </p>
      </div>

      {/* Stepper Tabs */}
      <div className="grid grid-cols-4 gap-2 mb-5 select-none">
        {/* Step 1 */}
        <button
          onClick={() => setActiveStep(1)}
          className={`py-2 px-2.5 rounded-xl border text-[10px] md:text-xs font-bold transition-all cursor-pointer text-center ${
            activeStep === 1
              ? "border-amber-500 bg-amber-50/15 text-amber-900 shadow-sm"
              : "border-stone-200 bg-white hover:bg-stone-100 text-stone-600"
          }`}
        >
          <div className="text-[8px] font-black uppercase text-stone-400 mb-0.5">Bước 1</div>
          <span className="font-mono">BankAcct.java</span>
        </button>

        {/* Step 2 */}
        <button
          onClick={() => setActiveStep(2)}
          className={`py-2 px-2.5 rounded-xl border text-[10px] md:text-xs font-bold transition-all cursor-pointer text-center ${
            activeStep === 2
              ? "border-amber-500 bg-amber-50/15 text-amber-900 shadow-sm"
              : "border-stone-200 bg-white hover:bg-stone-100 text-stone-600"
          }`}
        >
          <div className="text-[8px] font-black uppercase text-stone-400 mb-0.5">Bước 2</div>
          <span className="font-mono">TestBankAcct.java</span>
        </button>

        {/* Step 3 */}
        <button
          onClick={() => setActiveStep(3)}
          className={`py-2 px-2.5 rounded-xl border text-[10px] md:text-xs font-bold transition-all cursor-pointer text-center ${
            activeStep === 3
              ? "border-amber-500 bg-amber-50/15 text-amber-900 shadow-sm"
              : "border-stone-200 bg-white hover:bg-stone-100 text-stone-600"
          }`}
        >
          <div className="text-[8px] font-black uppercase text-stone-400 mb-0.5">Bước 3</div>
          <span className="font-mono">javac (Biên dịch)</span>
        </button>

        {/* Step 4 */}
        <button
          onClick={() => setActiveStep(4)}
          className={`py-2 px-2.5 rounded-xl border text-[10px] md:text-xs font-bold transition-all cursor-pointer text-center ${
            activeStep === 4
              ? "border-amber-500 bg-amber-50/15 text-amber-900 shadow-sm"
              : "border-stone-200 bg-white hover:bg-stone-100 text-stone-600"
          }`}
        >
          <div className="text-[8px] font-black uppercase text-stone-400 mb-0.5">Bước 4</div>
          <span className="font-mono">java (Chạy thử)</span>
        </button>
      </div>

      {/* Main Grid content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* Left: Terminal/Editor Mockup (7 cols) */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="bg-[#1e1d1a] border border-[#2a2926] rounded-2xl shadow-lg flex-1 overflow-hidden flex flex-col">
            
            {/* Terminal Title Bar */}
            <div className="bg-[#2d2c28] border-b border-[#1e1d1a] px-4 py-2.5 flex items-center gap-2 select-none">
              <span className="w-2 h-2 rounded-full bg-rose-500 inline-block"></span>
              <span className="w-2 h-2 rounded-full bg-amber-500 inline-block"></span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
              <span className="text-[9px] text-stone-400 font-mono ml-2">
                {activeStep <= 2 ? "Editor - Mã nguồn Java" : "Terminal - Windows Command Prompt"}
              </span>
            </div>

            {/* Content Area */}
            <div className="p-4 flex-1 font-mono text-xs text-stone-300 min-h-[340px] flex flex-col justify-between overflow-y-auto">
              <div>
                {/* Step 1: BankAcct.java Editor */}
                {activeStep === 1 && (
                  <div className="space-y-2">
                    <div className="text-amber-500/80 text-[10px] font-sans font-bold select-none border-b border-stone-800 pb-1 mb-2">
                      ✏️ TẬP TIN: BankAcct.java (Service Class - Lớp dịch vụ)
                    </div>
                    <div className="text-stone-400 leading-relaxed text-[11px] max-h-[300px] overflow-y-auto">
                      <span className="text-amber-500 font-bold">public class</span> BankAcct &#123;<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-sky-400">private int</span> acctNum;<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-sky-400">private double</span> balance;<br/><br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-stone-600">{"// Default Constructor"}</span><br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-500 font-bold">public</span> BankAcct() &#123;<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/><br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-stone-600">{"// Overloaded Constructor"}</span><br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-500 font-bold">public</span> BankAcct(<span className="text-sky-400">int</span> aNum, <span className="text-sky-400">double</span> bal) &#123;<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;acctNum = aNum;<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;balance = bal;<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/><br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-stone-600">{"// Accessor (getter)"}</span><br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-500 font-bold">public double</span> getBalance() &#123; <span className="text-amber-500 font-bold">return</span> balance; &#125;<br/><br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-stone-600">{"// Mutator (setter / deposit)"}</span><br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-500 font-bold">public void</span> deposit(<span className="text-sky-400">double</span> amount) &#123;<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-500 font-bold">if</span> (amount &gt; 0) balance += amount;<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
                      &#125;
                    </div>
                  </div>
                )}

                {/* Step 2: TestBankAcct.java Editor */}
                {activeStep === 2 && (
                  <div className="space-y-2">
                    <div className="text-amber-500/80 text-[10px] font-sans font-bold select-none border-b border-stone-800 pb-1 mb-2">
                      ✏️ TẬP TIN: TestBankAcct.java (Client Class - Lớp chạy thử)
                    </div>
                    <div className="text-stone-400 leading-relaxed text-[11px]">
                      <span className="text-amber-500 font-bold">public class</span> TestBankAcct &#123;<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-500 font-bold">public static void</span> main(String[] args) &#123;<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-stone-600">{"// Khởi tạo các đối tượng"}</span><br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BankAcct ba1 = <span className="text-amber-500 font-bold">new</span> BankAcct();<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BankAcct ba2 = <span className="text-amber-500 font-bold">new</span> BankAcct(1234, 321.70);<br/><br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="text-emerald-400">"Before transactions:"</span>);<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ba1.print(); ba2.print();<br/><br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-stone-600">{"// Giao dịch qua public method"}</span><br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ba1.deposit(1000);<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ba2.withdraw(200.50);<br/><br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="text-emerald-400">"After transactions:"</span>);<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ba1.print(); ba2.print();<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
                      &#125;
                    </div>
                  </div>
                )}

                {/* Step 3: Compilation (javac) */}
                {activeStep === 3 && (
                  <div className="space-y-3 select-none">
                    <div className="text-stone-500">$ dir</div>
                    <div className="text-stone-400 text-xs">
                      BankAcct.java &nbsp;&nbsp;&nbsp; TestBankAcct.java
                    </div>
                    <div className="text-[#34d399] font-bold mt-2">$ javac BankAcct.java TestBankAcct.java</div>
                    <div className="text-stone-450 italic text-[11px] pl-2 leading-relaxed">
                      (Trình biên dịch Java phân tích cú pháp...)<br/>
                      Biên dịch thành công! Tạo ra hai tập tin bytecode mới:<br/>
                      ➔ BankAcct.class<br/>
                      ➔ TestBankAcct.class
                    </div>
                  </div>
                )}

                {/* Step 4: Execution (java) */}
                {activeStep === 4 && (
                  <div className="space-y-3">
                    <div className="text-stone-550 select-none">$ javac BankAcct.java TestBankAcct.java</div>
                    <div className="text-[#34d399] font-bold select-none">$ java TestBankAcct</div>
                    
                    {/* Execution Output console */}
                    <div className="bg-[#151413] border border-stone-850 p-4 rounded-xl text-emerald-400 font-bold text-xs leading-relaxed shadow-inner">
                      Before transactions:<br/>
                      Account number: 0<br/>
                      Balance: $0.00<br/>
                      Account number: 1234<br/>
                      Balance: $321.70<br/>
                      <br/>
                      After transactions:<br/>
                      Account number: 0<br/>
                      Balance: $1000.00<br/>
                      Account number: 1234<br/>
                      Balance: $121.20
                    </div>
                  </div>
                )}
              </div>

              {/* Cursor indicator */}
              <div className="text-stone-500 text-xs mt-4 flex items-center gap-1.5 select-none">
                <span>$</span> <span className="w-1.5 h-3.5 bg-stone-500 animate-pulse inline-block"></span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Explanations (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-4 bg-white border border-stone-200 rounded-2xl p-4 shadow-sm select-none">
          
          <div className="flex-1 flex flex-col justify-center">
            {/* Step 1 Explanation */}
            {activeStep === 1 && (
              <div className="space-y-3">
                <div className="text-[10px] text-stone-400 uppercase font-black tracking-wider">Vai trò của Lớp Dịch vụ</div>
                <div className="border border-stone-150 rounded-xl p-3 bg-stone-50 text-center">
                  <div className="text-2xl mb-1">📦</div>
                  <div className="text-xs font-bold text-stone-850">Thiết kế khuôn mẫu (Template)</div>
                  <p className="text-[10px] text-stone-500 mt-1.5 leading-relaxed text-left">
                    Tập tin <code>BankAcct.java</code> đóng vai trò là một <strong>Service Class</strong>. Lớp này không có hàm <code>main()</code> và không chạy độc lập được. Nhiệm vụ duy nhất của nó là định nghĩa cấu trúc dữ liệu private và cung cấp các hàm dịch vụ public cho người khác gọi.
                  </p>
                </div>
              </div>
            )}

            {/* Step 2 Explanation */}
            {activeStep === 2 && (
              <div className="space-y-3">
                <div className="text-[10px] text-stone-400 uppercase font-black tracking-wider">Vai trò của Lớp Chạy thử</div>
                <div className="border border-stone-150 rounded-xl p-3 bg-stone-50 text-center">
                  <div className="text-2xl mb-1">🎮</div>
                  <div className="text-xs font-bold text-stone-850">Khởi chạy & Gọi dịch vụ</div>
                  <p className="text-[10px] text-stone-500 mt-1.5 leading-relaxed text-left">
                    Tập tin <code>TestBankAcct.java</code> là một <strong>Client Class</strong>. Lớp này chứa phương thức <code>main()</code> bắt buộc để làm điểm mốc chạy chương trình. Ở đây, ta khởi tạo các thực thể tài khoản <code>ba1</code>, <code>ba2</code> và thực hiện giao dịch thông qua các method public của chúng.
                  </p>
                </div>
              </div>
            )}

            {/* Step 3 Explanation */}
            {activeStep === 3 && (
              <div className="space-y-3 font-sans">
                <div className="text-[10px] text-stone-400 uppercase font-black tracking-wider">Cơ chế biên dịch độc lập</div>
                <div className="flex flex-col gap-2">
                  <div className="border border-amber-200 bg-amber-50/[0.02] rounded-xl p-3 flex flex-col items-center text-center shadow-xs">
                    <span className="font-mono text-[9px] font-bold text-stone-700 bg-white border border-stone-200 px-2 py-0.5 rounded">*.java (Mã nguồn)</span>
                    <span className="text-stone-400 my-1 text-[10px]">⬇️ Trình biên dịch (javac)</span>
                    <span className="font-mono text-[9px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">*.class (Bytecode)</span>
                  </div>
                  <p className="text-[10px] text-stone-500 leading-relaxed mt-1">
                    Cả hai lớp được biên dịch thành bytecode <code>.class</code> độc lập. Khi biên dịch, trình biên dịch sẽ kiểm tra xem lớp <code>TestBankAcct</code> có vi phạm bảo mật khi gọi phương thức của <code>BankAcct</code> hay không.
                  </p>
                </div>
              </div>
            )}

            {/* Step 4 Explanation */}
            {activeStep === 4 && (
              <div className="space-y-3 font-sans">
                <div className="text-[10px] text-stone-400 uppercase font-black tracking-wider">Cơ chế thực thi của JVM</div>
                <div className="flex flex-col gap-2">
                  <div className="border border-sky-200 bg-sky-50/[0.02] rounded-xl p-3 flex flex-col items-center text-center shadow-xs">
                    <span className="font-mono text-[9px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">TestBankAcct.class (Thực thi)</span>
                    <span className="text-stone-400 my-1 text-[10px]">⬇️ JVM nạp & chạy hàm main()</span>
                    <span className="font-bold text-[9px] text-emerald-700 bg-emerald-50 border border-emerald-250 px-2 py-0.5 rounded-full">In kết quả ra màn hình Console</span>
                  </div>
                  <p className="text-[10px] text-stone-500 leading-relaxed mt-1">
                    JVM nạp lớp chạy thử <code>TestBankAcct</code> và gọi hàm <code>main()</code>. Lúc này các ô nhớ đối tượng tài khoản sẽ được khởi tạo trong RAM Heap và các giao dịch Rút/Gửi tiền được mô phỏng chạy từng bước như kết quả trong Terminal.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Quick learning note */}
          <div className="bg-amber-50/40 border border-amber-250/50 rounded-2xl p-3 text-[10px] md:text-xs leading-relaxed text-stone-750">
            <strong>💡 Trọng tâm ôn thi:</strong><br/>
            • <code>ba1</code> không truyền tham số ➔ gọi <strong>default constructor</strong> ➔ thuộc tính nhận giá trị mặc định (acctNum = 0, balance = 0.0).<br/>
            • <code>ba2</code> truyền 1234 và 321.70 ➔ gọi <strong>overloaded constructor</strong> để khởi tạo giá trị tuỳ chỉnh.
          </div>

        </div>

      </div>
    </div>
  );
}
