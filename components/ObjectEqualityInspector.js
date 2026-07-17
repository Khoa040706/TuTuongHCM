"use client";
import React, { useState } from "react";
import { Check, X, ShieldAlert, Sparkles, HelpCircle } from "lucide-react";

export default function ObjectEqualityInspector() {
  const [selectedComp, setSelectedComp] = useState(null); // '==b2', '==b3', 'eqb2', 'eqb3'

  const getCompResult = () => {
    switch (selectedComp) {
      case "==b2":
        return {
          expr: "b1 == b2",
          result: true,
          desc: "Toán tử == so sánh địa chỉ tham chiếu. Vì cả b1 và b2 đều chứa cùng địa chỉ ô nhớ 0x401, kết quả trả về là TRUE (Cùng một đối tượng)."
        };
      case "==b3":
        return {
          expr: "b1 == b3",
          result: false,
          desc: "Toán tử == so sánh địa chỉ tham chiếu. Dù dữ liệu của b1 và b3 giống hệt nhau, nhưng chúng là 2 thực thể độc lập nằm ở 2 ô nhớ khác nhau (0x401 vs 0x402), kết quả trả về là FALSE."
        };
      case "eqb2":
        return {
          expr: "b1.equals(b2)",
          result: true,
          desc: "Phương thức equals() đã được ghi đè (overridden) để so sánh nội dung. Vì b1 và b2 trỏ cùng đối tượng, nội dung đương nhiên trùng khớp hoàn toàn, kết quả là TRUE."
        };
      case "eqb3":
        return {
          expr: "b1.equals(b3)",
          result: true,
          desc: "Phương thức equals() đã được ghi đè để đi sâu so sánh màu sắc và bán kính: 'red'.equals('red') && 6.2 == 6.2. Kết quả trả về là TRUE vì nội dung dữ liệu giống hệt nhau!"
        };
      default:
        return null;
    }
  };

  const comp = getCompResult();

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-3xl p-4 md:p-6 my-6 shadow-sm font-sans text-stone-850 select-none">
      
      {/* Header */}
      <div className="border-b border-stone-200 pb-3 mb-5">
        <h4 className="text-base font-extrabold text-stone-900">
          ⚖️ Trình Đối Chiếu Đối Tượng: Toán tử == vs Hàm equals()
        </h4>
        <p className="text-xs text-stone-500 mt-1">
          Quan sát sự phân bổ địa chỉ ô nhớ đối tượng và lựa chọn phép so sánh để làm rõ bản chất lý thuyết hướng đối tượng.
        </p>
      </div>

      {/* Visual Memory Representation */}
      <div className="bg-[#151413] border border-stone-850 rounded-2xl p-4 mb-5 text-stone-300 font-mono text-[11px] leading-relaxed shadow-inner">
        <div className="text-[8px] text-stone-500 uppercase font-black tracking-wider mb-3 select-none">Bản đồ ô nhớ tham chiếu & đối tượng (RAM Heap)</div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
          {/* Object 1 & References b1, b2 */}
          <div className={`border p-3.5 rounded-xl relative transition-all duration-300 ${
            selectedComp?.includes("b2") ? "border-blue-500 bg-blue-950/15" : "border-stone-800 bg-stone-900/10"
          }`}>
            <span className="absolute top-2 right-2 text-[9px] text-stone-500 font-bold">0x401</span>
            
            <div className="mb-2">
              <span className="text-[9px] text-stone-500 block uppercase">Biến tham chiếu (Stack)</span>
              <div className="flex gap-2.5 mt-1">
                <span className="text-blue-400 font-bold bg-stone-900 px-2 py-0.5 rounded border border-stone-800">b1</span>
                <span className="text-blue-400 font-bold bg-stone-900 px-2 py-0.5 rounded border border-stone-800">b2 (b2 = b1)</span>
              </div>
            </div>

            <div className="border-t border-stone-800/80 pt-2 mt-2">
              <span className="text-[9px] text-stone-500 block uppercase">Thực thể bóng 1 (Heap)</span>
              <div className="flex items-center gap-2.5 mt-1">
                <div className="w-4 h-4 rounded-full bg-red-600 border border-stone-800" />
                <span className="text-stone-350">MyBall: colour = <code className="text-emerald-450">"red"</code>, radius = <code className="text-sky-400">6.2</code></span>
              </div>
            </div>
          </div>

          {/* Object 2 & Reference b3 */}
          <div className={`border p-3.5 rounded-xl relative transition-all duration-300 ${
            selectedComp?.includes("b3") ? "border-amber-500 bg-amber-950/15" : "border-stone-800 bg-stone-900/10"
          }`}>
            <span className="absolute top-2 right-2 text-[9px] text-stone-500 font-bold">0x402</span>

            <div className="mb-2">
              <span className="text-[9px] text-stone-500 block uppercase">Biến tham chiếu (Stack)</span>
              <div className="flex gap-2.5 mt-1">
                <span className="text-amber-400 font-bold bg-stone-900 px-2 py-0.5 rounded border border-stone-800">b3</span>
              </div>
            </div>

            <div className="border-t border-stone-800/80 pt-2 mt-2">
              <span className="text-[9px] text-stone-500 block uppercase">Thực thể bóng 2 (Heap)</span>
              <div className="flex items-center gap-2.5 mt-1">
                <div className="w-4 h-4 rounded-full bg-red-600 border border-stone-800" />
                <span className="text-stone-350">MyBall: colour = <code className="text-emerald-450">"red"</code>, radius = <code className="text-sky-400">6.2</code></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* Left Side: Selectors (6 cols) */}
        <div className="lg:col-span-6 flex flex-col justify-between gap-3">
          <div className="space-y-2">
            <div className="text-[10px] text-stone-400 font-black uppercase tracking-wider mb-2">So sánh bằng toán tử == (So sánh địa chỉ ô nhớ)</div>
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedComp("==b2")}
                className={`flex-1 py-2.5 px-3 border rounded-xl font-mono text-xs font-bold transition-all cursor-pointer text-center ${
                  selectedComp === "==b2" ? "bg-stone-900 border-stone-900 text-amber-500" : "bg-white border-stone-250 hover:bg-stone-100 text-stone-700"
                }`}
              >
                b1 == b2
              </button>
              <button
                onClick={() => setSelectedComp("==b3")}
                className={`flex-1 py-2.5 px-3 border rounded-xl font-mono text-xs font-bold transition-all cursor-pointer text-center ${
                  selectedComp === "==b3" ? "bg-stone-900 border-stone-900 text-amber-500" : "bg-white border-stone-250 hover:bg-stone-100 text-stone-700"
                }`}
              >
                b1 == b3
              </button>
            </div>
          </div>

          <div className="space-y-2 mt-2">
            <div className="text-[10px] text-stone-400 font-black uppercase tracking-wider mb-2">So sánh bằng equals() (So sánh nội dung dữ liệu)</div>
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedComp("eqb2")}
                className={`flex-1 py-2.5 px-3 border rounded-xl font-mono text-xs font-bold transition-all cursor-pointer text-center ${
                  selectedComp === "eqb2" ? "bg-stone-900 border-stone-900 text-amber-500" : "bg-white border-stone-250 hover:bg-stone-100 text-stone-700"
                }`}
              >
                b1.equals(b2)
              </button>
              <button
                onClick={() => setSelectedComp("eqb3")}
                className={`flex-1 py-2.5 px-3 border rounded-xl font-mono text-xs font-bold transition-all cursor-pointer text-center ${
                  selectedComp === "eqb3" ? "bg-stone-900 border-stone-900 text-amber-500" : "bg-white border-stone-250 hover:bg-stone-100 text-stone-700"
                }`}
              >
                b1.equals(b3)
              </button>
            </div>
          </div>

          <div className="bg-stone-100 border border-stone-200 rounded-xl p-3 text-[10px] text-stone-500 leading-relaxed mt-2">
            💡 <strong>Mách nhỏ:</strong> Lớp con ngầm định kế thừa từ <code>Object</code>. Nếu bạn KHÔNG tự viết đè hàm <code>equals()</code> cho lớp <code>MyBall</code>, phương thức mặc định của JDK vẫn sẽ so sánh địa chỉ giống toán tử <code>==</code>!
          </div>
        </div>

        {/* Right Side: Results Explanation (6 cols) */}
        <div className="lg:col-span-6 bg-white border border-stone-200 rounded-2xl p-5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="text-[10px] text-stone-400 font-black uppercase tracking-wider mb-3">Kết quả đối chiếu</div>
            
            {comp ? (
              <div className="space-y-3.5 animate-in fade-in duration-200">
                {/* Result header box */}
                <div className={`p-3 rounded-xl flex items-center justify-between border ${
                  comp.result 
                    ? "bg-emerald-50 border-emerald-250 text-emerald-800" 
                    : "bg-rose-50 border-rose-250 text-rose-800"
                }`}>
                  <span className="font-mono text-xs font-black">{comp.expr}</span>
                  <div className="flex items-center gap-1 text-xs font-extrabold">
                    {comp.result ? (
                      <>
                        <Check size={14} />
                        <span>TRUE</span>
                      </>
                    ) : (
                      <>
                        <X size={14} />
                        <span>FALSE</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Explanation text */}
                <p className="text-xs text-stone-700 leading-relaxed font-medium">
                  {comp.desc}
                </p>

                {comp.result ? (
                  <div className="bg-emerald-100/30 text-emerald-850 p-2.5 rounded-lg text-[10px] flex items-center gap-1.5 font-sans font-medium">
                    <Sparkles size={12} className="text-emerald-600 shrink-0" />
                    <span>So sánh thành công!</span>
                  </div>
                ) : (
                  <div className="bg-rose-100/30 text-rose-850 p-2.5 rounded-lg text-[10px] flex items-center gap-1.5 font-sans font-medium">
                    <ShieldAlert size={12} className="text-rose-600 shrink-0" />
                    <span>Lưu ý: Hai đối tượng ở hai ô nhớ khác nhau.</span>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-10 text-center text-stone-400">
                <HelpCircle size={32} className="text-stone-300 mb-2" />
                <p className="text-xs font-bold">Hãy chọn phép so sánh để phân tích.</p>
              </div>
            )}
          </div>

          <div className="mt-4 pt-3 border-t border-stone-150 text-[10px] text-stone-500 font-sans">
            📌 <strong>Quy tắc thi cử:</strong> Luôn dùng <strong><code>equals()</code></strong> để so sánh giá trị dữ liệu đối tượng, tránh dùng <strong><code>==</code></strong> ngoại trừ khi muốn kiểm tra xem 2 biến có trỏ cùng ô nhớ hay không.
          </div>
        </div>

      </div>
    </div>
  );
}
