"use client";
import React, { useState } from "react";
import { Terminal, Code2, ArrowRight, Play, RotateCcw } from "lucide-react";

export default function TestBallWorkflow() {
  const [version, setVersion] = useState("v1"); // 'v1' or 'v2'
  const [step, setStep] = useState(0);

  const resetSim = () => {
    setStep(0);
  };

  const handleNextStep = () => {
    const maxStep = version === "v1" ? 5 : 4;
    if (step < maxStep) {
      setStep((prev) => prev + 1);
    }
  };

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-3xl p-4 md:p-6 my-6 shadow-sm font-sans text-stone-850">
      
      {/* Header and Toggle Controls */}
      <div className="border-b border-stone-200 pb-3 mb-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 select-none">
        <div>
          <h4 className="text-base font-extrabold text-stone-900">
            🖥️ Giả Lập Thực Thi Client Class: TestBallV1 vs TestBallV2
          </h4>
          <p className="text-xs text-stone-500 mt-1">
            Quan sát luồng chạy từng bước của hàm main và tác dụng của việc module hóa code đọc dữ liệu.
          </p>
        </div>

        {/* Version Switcher */}
        <div className="flex bg-stone-200 p-1 rounded-xl shrink-0 self-stretch md:self-auto">
          <button
            onClick={() => { setVersion("v1"); resetSim(); }}
            className={`flex-1 md:flex-none px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              version === "v1"
                ? "bg-white text-amber-900 shadow-xs"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            V1 (Chưa module hóa)
          </button>
          <button
            onClick={() => { setVersion("v2"); resetSim(); }}
            className={`flex-1 md:flex-none px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              version === "v2"
                ? "bg-white text-amber-900 shadow-xs"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            V2 (Đã module hóa)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* Left Side: Code Viewer & Stepper Controls (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-4">
          <div className="bg-[#1e1d1a] border border-[#2a2926] rounded-2xl p-4 text-stone-300 font-mono text-[11px] leading-relaxed max-h-[360px] overflow-y-auto shadow-inner">
            <div className="flex justify-between items-center select-none border-b border-stone-850 pb-2 mb-3">
              <span className="text-[9px] text-stone-400 font-black uppercase flex items-center gap-1">
                <Code2 size={12} className="text-amber-500" />
                <span>{version === "v1" ? "TestBallV1.java" : "TestBallV2.java"}</span>
              </span>
              <span className="text-[8px] font-sans text-stone-500 font-bold">Mã nguồn chạy thử</span>
            </div>

            {version === "v1" ? (
              <div>
                <span className="text-amber-500 font-bold">public class</span> TestBallV1 &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-500 font-bold">public static void</span> main(String[] args) &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Scanner sc = <span className="text-amber-500">new</span> Scanner(System.in);<br/>
                
                {/* Step 1 Highlight */}
                <div className={`pl-8 transition-colors ${step === 1 ? "bg-amber-500/20 text-white font-bold" : ""}`}>
                  System.out.print("Enter colour: "); String c1 = sc.next();
                </div>
                
                {/* Step 2 Highlight */}
                <div className={`pl-8 transition-colors ${step === 2 ? "bg-amber-500/20 text-white font-bold" : ""}`}>
                  System.out.print("Enter radius: "); double r1 = sc.nextDouble();{"\n"}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MyBall myBall1 = <span className="text-amber-500">new</span> MyBall(c1, r1);
                </div>

                {/* Step 3 Highlight */}
                <div className={`pl-8 transition-colors ${step === 3 ? "bg-amber-500/20 text-white font-bold" : ""}`}>
                  System.out.print("Enter colour: "); String c2 = sc.next();
                </div>

                {/* Step 4 Highlight */}
                <div className={`pl-8 transition-colors ${step === 4 ? "bg-amber-500/20 text-white font-bold" : ""}`}>
                  System.out.print("Enter radius: "); double r2 = sc.nextDouble();{"\n"}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MyBall myBall2 = <span className="text-amber-500">new</span> MyBall(c2, r2);
                </div>

                {/* Step 5 Highlight */}
                <div className={`pl-8 transition-colors ${step === 5 ? "bg-amber-500/20 text-white font-bold" : ""}`}>
                  System.out.println(MyBall.getQuantity() + " balls created.");{"\n"}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;myBall1.print(); myBall2.print();
                </div>
                
                &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
                &#125;
              </div>
            ) : (
              <div>
                <span className="text-amber-500 font-bold">public class</span> TestBallV2 &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-stone-500">{"// Định nghĩa helper method đọc dữ liệu quả bóng"}</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-500 font-bold">public static</span> MyBall readBall(Scanner sc) &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.print("Enter colour: "); String c = sc.next();<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.print("Enter radius: "); double r = sc.nextDouble();<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-500 font-bold">return new</span> MyBall(c, r);<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-500 font-bold">public static void</span> main(String[] args) &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Scanner sc = <span className="text-amber-500">new</span> Scanner(System.in);<br/>
                
                {/* Step 1 Highlight */}
                <div className={`pl-8 transition-colors ${step === 1 ? "bg-amber-500/20 text-white font-bold" : ""}`}>
                  MyBall myBall1 = readBall(sc);
                </div>

                {/* Step 2 Highlight */}
                <div className={`pl-8 transition-colors ${step === 2 ? "bg-amber-500/20 text-white font-bold" : ""}`}>
                  MyBall myBall2 = readBall(sc);
                </div>

                {/* Step 3 Highlight */}
                <div className={`pl-8 transition-colors ${step === 3 ? "bg-amber-500/20 text-white font-bold" : ""}`}>
                  System.out.println(MyBall.getQuantity() + " balls created.");
                </div>

                {/* Step 4 Highlight */}
                <div className={`pl-8 transition-colors ${step === 4 ? "bg-amber-500/20 text-white font-bold" : ""}`}>
                  myBall1.print(); myBall2.print();
                </div>
                
                &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
                &#125;
              </div>
            )}
          </div>

          {/* Controller buttons */}
          <div className="flex gap-3 select-none">
            <button
              onClick={resetSim}
              className="flex-1 py-2.5 px-4 bg-stone-200 hover:bg-stone-300 text-stone-700 font-bold text-xs rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-xs"
            >
              <RotateCcw size={12} />
              <span>Reset</span>
            </button>
            <button
              onClick={handleNextStep}
              disabled={(version === "v1" && step === 5) || (version === "v2" && step === 4)}
              className={`flex-[2] py-2.5 px-4 font-bold text-xs rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-sm ${
                ((version === "v1" && step === 5) || (version === "v2" && step === 4))
                  ? "bg-stone-250 text-stone-400 cursor-not-allowed"
                  : "bg-amber-600 hover:bg-amber-550 text-white"
              }`}
            >
              <Play size={12} />
              <span>{step === 0 ? "Bắt đầu chạy" : "Bước tiếp theo"}</span>
            </button>
          </div>
        </div>

        {/* Right Side: Virtual Console / Terminal (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-[#151413] border border-stone-850 rounded-2xl p-4 shadow-md text-stone-300 font-mono text-xs">
          <div>
            <div className="flex items-center gap-1.5 text-stone-500 text-[10px] uppercase font-black tracking-wider select-none border-b border-stone-850 pb-2 mb-3">
              <Terminal size={12} />
              <span>Màn hình Console Giả Lập</span>
            </div>

            <div className="space-y-3 min-h-[220px] text-[11px] leading-relaxed">
              {version === "v1" ? (
                // V1 Outputs depending on steps
                <div>
                  {step >= 1 && (
                    <div className="animate-in fade-in duration-200">
                      Enter colour: <span className="text-blue-400 font-bold">red</span>
                    </div>
                  )}
                  {step >= 2 && (
                    <div className="animate-in fade-in duration-200">
                      Enter radius: <span className="text-blue-400 font-bold">1.2</span>{"\n"}
                      <div className="text-stone-500 italic text-[10px] pl-2">(Khởi tạo myBall1 thành công)</div>
                    </div>
                  )}
                  {step >= 3 && (
                    <div className="animate-in fade-in duration-200 mt-2">
                      Enter colour: <span className="text-blue-400 font-bold">blue</span>
                    </div>
                  )}
                  {step >= 4 && (
                    <div className="animate-in fade-in duration-200">
                      Enter radius: <span className="text-blue-400 font-bold">3.5</span>{"\n"}
                      <div className="text-stone-500 italic text-[10px] pl-2">(Khởi tạo myBall2 thành công)</div>
                    </div>
                  )}
                  {step >= 5 && (
                    <div className="animate-in fade-in duration-250 mt-3 border-t border-stone-800 pt-2 text-emerald-450 font-bold">
                      2 balls are created.{"\n"}
                      1st ball's colour and radius: red, 1.2{"\n"}
                      2nd ball's colour and radius: blue, 3.5
                    </div>
                  )}
                </div>
              ) : (
                // V2 Outputs depending on steps
                <div>
                  {step >= 1 && (
                    <div className="animate-in fade-in duration-200">
                      <div className="text-stone-550 italic text-[9px] mb-1 font-sans">{"/* Gọi hàm readBall(sc) lần 1 */"}</div>
                      Enter colour: <span className="text-blue-400 font-bold">red</span>{"\n"}
                      Enter radius: <span className="text-blue-400 font-bold">1.2</span>{"\n"}
                      <div className="text-stone-500 italic text-[10px] pl-2 mb-2">(readBall trả về đối tượng Ball #1)</div>
                    </div>
                  )}
                  {step >= 2 && (
                    <div className="animate-in fade-in duration-200">
                      <div className="text-stone-550 italic text-[9px] mb-1 font-sans">{"/* Gọi hàm readBall(sc) lần 2 */"}</div>
                      Enter colour: <span className="text-blue-400 font-bold">blue</span>{"\n"}
                      Enter radius: <span className="text-blue-400 font-bold">3.5</span>{"\n"}
                      <div className="text-stone-500 italic text-[10px] pl-2 mb-2">(readBall trả về đối tượng Ball #2)</div>
                    </div>
                  )}
                  {step >= 3 && (
                    <div className="animate-in fade-in duration-200 mt-3 border-t border-stone-800 pt-2 text-amber-500 font-bold">
                      2 balls are created.
                    </div>
                  )}
                  {step >= 4 && (
                    <div className="animate-in fade-in duration-200 text-emerald-450 font-bold">
                      1st ball's colour and radius: red, 1.2{"\n"}
                      2nd ball's colour and radius: blue, 3.5
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Explanations bottom box */}
          <div className="bg-stone-900 border border-stone-800 rounded-xl p-3 text-[10px] text-stone-400 leading-relaxed font-sans select-none">
            {version === "v1" ? (
              // Explanations V1
              step === 0 ? "Bấm 'Bắt đầu chạy' để quan sát quy trình đọc dữ liệu từ bàn phím và khởi tạo quả bóng." :
              step === 1 ? "Scanner đang chờ đọc chuỗi màu sắc cho quả bóng thứ nhất." :
              step === 2 ? "Scanner đọc bán kính, sau đó gọi overloaded constructor MyBall(c1, r1) để khởi tạo đối tượng myBall1." :
              step === 3 ? "Tiếp tục quét dữ liệu nhập cho quả bóng thứ hai..." :
              step === 4 ? "Gọi constructor khởi tạo myBall2. Lúc này số lượng bóng được đếm tăng lên." :
              "In ra tổng số bóng (gọi phương thức static MyBall.getQuantity() = 2) và in ra thông số cụ thể của từng bóng."
            ) : (
              // Explanations V2
              step === 0 ? "Bấm 'Bắt đầu chạy' để xem hàm main gọi hàm dùng chung readBall(sc) giúp rút gọn code." :
              step === 1 ? "Thay vì viết lặp code Scanner, hàm main gọi trực tiếp helper method readBall(sc). readBall tự động quét dữ liệu và tạo quả bóng thứ nhất." :
              step === 2 ? "Gọi tiếp hàm readBall(sc) lần thứ hai để khởi tạo quả bóng thứ hai, tránh viết lại 4 dòng nhập dữ liệu." :
              step === 3 ? "Hàm main gọi static method MyBall.getQuantity() để in ra tổng số bóng đã đếm." :
              "Phương thức print() được gọi để kết xuất kết quả giao diện bóng. Client class TestBallV2 ngắn gọn, mạch lạc hơn nhiều nhờ kỹ thuật module hóa!"
            )}
          </div>

        </div>
      </div>

    </div>
  );
}
