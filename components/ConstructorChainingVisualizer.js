"use client";
import React, { useState } from "react";
import { Play, RotateCcw, Code2, ArrowDown, Sparkles } from "lucide-react";

export default function ConstructorChainingVisualizer() {
  const [step, setStep] = useState(0);

  const resetStepper = () => {
    setStep(0);
  };

  const nextStep = () => {
    if (step < 7) {
      setStep((prev) => prev + 1);
    }
  };

  const getStepDescription = () => {
    switch (step) {
      case 0:
        return "Bấm 'Bắt đầu khởi tạo' để xem chuỗi gọi hàm khởi tạo hoạt động trong RAM.";
      case 1:
        return "1️⃣ Client gọi 'new MyBall()' không đối số. Trình biên dịch dẫn hướng chạy vào Default Constructor của lớp MyBall.";
      case 2:
        return "2️⃣ Gặp lệnh 'this(\"yellow\", 10.0);'. Hệ thống tạm dừng thực thi tại đây để gọi chéo sang Constructor nạp chồng.";
      case 3:
        return "3️⃣ Gọi thành công Overloaded Constructor. Các tham số được ánh xạ: newColour = \"yellow\", newRadius = 10.0.";
      case 4:
        return "4️⃣ Thực thi 'setColour(newColour)' ➔ Gán màu sắc của đối tượng là \"yellow\".";
      case 5:
        return "5️⃣ Thực thi 'setRadius(newRadius)' ➔ Gán bán kính đối tượng là 10.0.";
      case 6:
        return "6️⃣ Thực thi 'quantity++' ➔ Tăng biến đếm tổng số lượng bóng được sinh ra lên +1.";
      case 7:
        return "7️⃣ Hoàn tất constructor 2 tham số. Luồng điều khiển quay trở lại default constructor ban đầu và kết thúc quy trình khởi tạo đối tượng MyBall!";
      default:
        return "";
    }
  };

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-3xl p-4 md:p-6 my-6 shadow-sm font-sans text-stone-850 select-none">
      {/* Header */}
      <div className="border-b border-stone-200 pb-3 mb-5">
        <h4 className="text-base font-extrabold text-stone-900 flex items-center gap-2">
          <span>⛓️ Trình Giả Lập Chuỗi Gọi Constructor (Constructor Chaining)</span>
        </h4>
        <p className="text-xs text-stone-500 mt-1">
          Quan sát luồng điều hướng chạy tuần tự giữa các overloaded constructor sử dụng lệnh gọi <code>this(...)</code>.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* Left: Code list with highlight (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-4">
          <div className="bg-[#1e1d1a] border border-[#2a2926] rounded-2xl p-4 text-stone-300 font-mono text-[11px] leading-relaxed shadow-inner max-h-[300px] overflow-y-auto">
            <div className="text-[9px] text-stone-400 font-black uppercase mb-3 border-b border-stone-850 pb-1.5 flex items-center gap-1">
              <Code2 size={12} className="text-amber-500" />
              <span>MyBall.java (Overloaded Constructors)</span>
            </div>

            {/* Default Constructor Block */}
            <div className={`p-2 rounded transition-all duration-300 ${
              step === 1 ? "bg-amber-500/10 border-l-2 border-amber-500" :
              step === 2 ? "bg-amber-500/20 border-l-2 border-amber-500 font-bold" :
              step === 7 ? "bg-emerald-500/10 border-l-2 border-emerald-500" : ""
            }`}>
              <span className="text-amber-500 font-bold">public</span> MyBall() &#123;{"\n"}
              <div className={`pl-4 ${step === 2 ? "text-amber-400 font-extrabold" : "text-stone-400"}`}>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-500">this</span>(<span className="text-emerald-400">"yellow"</span>, <span className="text-sky-400">10.0</span>);{"\n"}
              </div>
              &#125;
            </div>

            <div className="text-stone-600 pl-4 py-1 text-[10px] select-none italic flex items-center gap-1.5">
              <ArrowDown size={10} />
              <span>Chuyển tiếp điều khiển qua this(...)</span>
            </div>

            {/* Overloaded Constructor Block */}
            <div className={`p-2 rounded transition-all duration-300 ${
              (step >= 3 && step <= 6) ? "bg-amber-500/10 border-l-2 border-amber-500" : ""
            }`}>
              <span className="text-amber-500 font-bold">public</span> MyBall(String newColour, <span className="text-amber-500">double</span> newRadius) &#123;{"\n"}
              <div className={`pl-4 ${step === 4 ? "bg-amber-500/25 text-amber-300" : "text-stone-400"}`}>
                &nbsp;&nbsp;&nbsp;&nbsp;setColour(newColour);
              </div>
              <div className={`pl-4 ${step === 5 ? "bg-amber-500/25 text-amber-300" : "text-stone-400"}`}>
                &nbsp;&nbsp;&nbsp;&nbsp;setRadius(newRadius);
              </div>
              <div className={`pl-4 ${step === 6 ? "bg-amber-500/25 text-amber-300" : "text-stone-400"}`}>
                &nbsp;&nbsp;&nbsp;&nbsp;quantity++;
              </div>
              &#125;
            </div>
          </div>

          {/* Controls */}
          <div className="flex gap-3">
            <button
              onClick={resetStepper}
              className="flex-1 py-2.5 px-4 bg-stone-200 hover:bg-stone-300 text-stone-700 font-bold text-xs rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-xs"
            >
              <RotateCcw size={12} />
              <span>Reset</span>
            </button>
            <button
              onClick={nextStep}
              disabled={step === 7}
              className={`flex-[2] py-2.5 px-4 font-bold text-xs rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-sm ${
                step === 7
                  ? "bg-stone-250 text-stone-400 cursor-not-allowed"
                  : "bg-amber-600 hover:bg-amber-550 text-white"
              }`}
            >
              <Play size={12} />
              <span>{step === 0 ? "Bắt đầu khởi tạo" : "Bước tiếp theo"}</span>
            </button>
          </div>
        </div>

        {/* Right: Trace Explanations (5 cols) */}
        <div className="lg:col-span-5 bg-white border border-stone-200 rounded-2xl p-5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="text-[10px] text-stone-400 font-black uppercase tracking-wider mb-3">Trạng thái chạy thử</div>
            
            <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 min-h-[160px] flex flex-col justify-between">
              <p className="text-xs text-stone-750 leading-relaxed font-medium">
                {getStepDescription()}
              </p>
              
              {step >= 3 && step <= 6 && (
                <div className="mt-4 pt-3 border-t border-stone-200 text-[10px] font-mono text-stone-500">
                  <div className="text-amber-700 font-sans font-bold mb-1">Tham số trong RAM:</div>
                  • newColour: <span className="text-emerald-600">"yellow"</span>{"\n"}<br/>
                  • newRadius: <span className="text-blue-600">10.0</span>
                </div>
              )}

              {step === 7 && (
                <div className="mt-4 pt-3 border-t border-emerald-250 text-[10px] text-emerald-800 font-sans font-medium flex items-center gap-1.5 animate-bounce">
                  <Sparkles size={14} className="text-emerald-600" />
                  <span>Đối tượng quả bóng màu vàng đã sẵn sàng sử dụng!</span>
                </div>
              )}
            </div>
          </div>

          <div className="bg-amber-50/40 border border-amber-200 rounded-xl p-3 text-[10px] text-stone-500 mt-4 leading-relaxed">
            ⚠️ <strong>Quy tắc phòng thi:</strong> Lệnh gọi <code>this(...)</code> bắt buộc phải là <strong>lệnh đầu tiên</strong> trong constructor. Nếu viết dòng lệnh khác trước <code>this(...)</code>, Java sẽ báo lỗi biên dịch!
          </div>

        </div>

      </div>
    </div>
  );
}
