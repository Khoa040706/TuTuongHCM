"use client";
import React, { useState } from "react";
import { AlertCircle, CheckCircle2, Cpu, HelpCircle, Layers, ShieldCheck } from "lucide-react";

export default function InterfaceFloatPrecisionPlayground() {
  const [activeCalc, setActiveCalc] = useState("A"); // "A": 0.1+0.2, "B": 0.1*3, "C": 1.0-0.9
  const [epsilonPower, setEpsilonPower] = useState(9); // EPSILON = 10^-9

  const getCalculationDetails = () => {
    if (activeCalc === "A") {
      return {
        label: "0.1 + 0.2",
        expected: 0.3,
        actual: 0.1 + 0.2,
      };
    } else if (activeCalc === "B") {
      return {
        label: "0.1 * 3",
        expected: 0.3,
        actual: 0.1 * 3,
      };
    } else {
      return {
        label: "1.0 - 0.9",
        expected: 0.1,
        actual: 1.0 - 0.9,
      };
    }
  };

  const { label, expected, actual } = getCalculationDetails();
  const epsilon = Math.pow(10, -epsilonPower);
  const diff = Math.abs(actual - expected);
  
  // Evaluation checks
  const isDirectEqual = (actual === expected);
  const isEpsilonEqual = (diff < epsilon);

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-100 shadow-xl my-6 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-sky-400" />
            <span>Sân Chơi Sai Số Dấu Phẩy Động (Floating Point)</span>
          </h4>
          <p className="text-xs text-slate-400 mt-1">
            Chọn phép toán để thấy rõ sự sai lệch giữa kết quả lý thuyết và biểu diễn nhị phân thực tế
          </p>
        </div>

        {/* Preset Selector */}
        <div className="flex bg-slate-950 p-1 rounded-lg border border-slate-800 select-none">
          {["A", "B", "C"].map((key) => (
            <button
              key={key}
              onClick={() => setActiveCalc(key)}
              className={`px-3 py-1.5 text-xs font-mono font-bold rounded transition-all ${
                activeCalc === key ? "bg-sky-600 text-white shadow" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {key === "A" ? "0.1 + 0.2" : key === "B" ? "0.1 * 3" : "1.0 - 0.9"}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-6">
        {/* Results display panel */}
        <div className="lg:col-span-6 bg-slate-950 p-5 rounded-xl border border-slate-850 flex flex-col justify-between">
          <div>
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-3">
              KẾT QUẢ PHÉP TÍNH: {label}
            </span>
            
            <div className="space-y-3 font-mono text-xs">
              <div className="flex justify-between p-2.5 rounded bg-slate-900 border border-slate-850">
                <span className="text-slate-400">Giá trị toán học lý thuyết:</span>
                <span className="font-bold text-sky-400">{expected}</span>
              </div>
              
              <div className="flex justify-between p-2.5 rounded bg-slate-900 border border-slate-850">
                <span className="text-slate-400">Biểu diễn thực tế trong RAM (double):</span>
                <span className="font-bold text-rose-400">{actual}</span>
              </div>

              <div className="flex justify-between p-2.5 rounded bg-slate-900 border border-slate-850 text-slate-400">
                <span>Sai số tuyệt đối (diff):</span>
                <span>{diff.toExponential(4)}</span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-850">
            <span className="text-[10px] text-slate-500 font-bold block mb-1">Cài đặt sai số EPSILON (10^-{epsilonPower}):</span>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min="3"
                max="15"
                value={epsilonPower}
                onChange={(e) => setEpsilonPower(parseInt(e.target.value))}
                className="flex-1 h-1 bg-slate-900 rounded appearance-none cursor-pointer accent-sky-500"
              />
              <span className="font-mono text-xs text-sky-400 font-bold w-16 text-right">{epsilon.toExponential(0)}</span>
            </div>
          </div>
        </div>

        {/* Code comparison panel */}
        <div className="lg:col-span-6 bg-slate-950 p-5 rounded-xl border border-slate-850 flex flex-col justify-between">
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-3">
            Cách thức so sánh số thực trong Java
          </span>

          <div className="space-y-4">
            {/* Direct == comparison */}
            <div className={`p-3.5 rounded-xl border transition-all ${
              isDirectEqual 
                ? "bg-emerald-950/20 border-emerald-500 text-emerald-300" 
                : "bg-rose-950/20 border-rose-500 text-rose-300"
            }`}>
              <div className="flex justify-between items-center mb-1 font-mono text-xs font-bold">
                <span>Cách 1: Toán tử == trực tiếp</span>
                <span className="uppercase text-[9px] px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                  {isDirectEqual ? "TRUE" : "FALSE (SAI)"}
                </span>
              </div>
              <pre className="text-[10px] font-mono text-slate-300 bg-slate-900/60 p-2 rounded my-1.5 overflow-x-auto">
                <code>val == {expected}</code>
              </pre>
              <p className="text-[10px] leading-relaxed opacity-85">
                * **Báo động:** Tuyệt đối không dùng `==` với kiểu `double`. Máy tính biểu diễn nhị phân có sai số vô hạn tuần hoàn nên so sánh sẽ trả về `false`.
              </p>
            </div>

            {/* Epsilon comparison */}
            <div className={`p-3.5 rounded-xl border transition-all ${
              isEpsilonEqual 
                ? "bg-emerald-950/20 border-emerald-500 text-emerald-300" 
                : "bg-rose-950/20 border-rose-500 text-rose-300"
            }`}>
              <div className="flex justify-between items-center mb-1 font-mono text-xs font-bold">
                <span>Cách 2: So sánh qua khoảng sai số EPSILON</span>
                <span className="uppercase text-[9px] px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-emerald-400 font-bold">
                  {isEpsilonEqual ? "TRUE (ĐÚNG)" : "FALSE"}
                </span>
              </div>
              <pre className="text-[10px] font-mono text-slate-300 bg-slate-900/60 p-2 rounded my-1.5 overflow-x-auto">
                <code>Math.abs(val - {expected}) &lt; EPSILON</code>
              </pre>
              <p className="text-[10px] leading-relaxed opacity-85">
                * **Thành công:** Đây là phương pháp so sánh chuẩn mực số thực. Nếu khoảng chênh lệch nhỏ hơn hằng số `EPSILON` được chấp nhận, hai số được coi là bằng nhau.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Traps Alert Callout Box */}
      <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-l-4 border-amber-500 rounded-r-xl p-4 flex gap-3 items-start">
        <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
        <div>
          <span className="text-xs font-bold text-amber-400 font-mono uppercase tracking-wider block">
            Cảnh Báo Phòng Thi: So Sánh Số Thực (equals)
          </span>
          <p className="text-xs text-slate-330 mt-1 leading-relaxed">
            Trong các đề thi lý thuyết Java, câu hỏi so sánh số thực xuất hiện rất nhiều. Nhớ kỹ: **Cấm dùng toán tử `==`** trực tiếp cho kiểu `double` hay `float`. Khi ghi đè phương thức `equals(Object o)` để so sánh hai số phức hoặc hình học có toạ độ thực, bắt buộc phải dùng hàm trị tuyệt đối và khoảng sai số `EPSILON`!
          </p>
        </div>
      </div>
    </div>
  );
}
