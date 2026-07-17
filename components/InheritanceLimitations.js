"use client";
import React, { useState } from "react";
import { GitBranch, GitMerge, AlertCircle, HelpCircle, CheckCircle2 } from "lucide-react";

export default function InheritanceLimitations() {
  const [selectedInheritance, setSelectedInheritance] = useState("single"); // "single" | "multiple"

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-3xl p-5 md:p-6 text-stone-850 select-none shadow-sm relative z-10 my-4">
      <span className="text-[9px] font-black text-stone-400 uppercase tracking-widest block mb-4 border-b pb-2 font-mono">
        // VIII. GIỚI HẠN CỦA KẾ THỪA TRONG JAVA
      </span>

      <div className="space-y-4">
        {/* Intro */}
        <div className="bg-white border border-stone-200 rounded-2xl p-4 space-y-2">
          <p className="text-xs text-stone-700 font-semibold leading-relaxed">
            Java được thiết kế để đảm bảo sự đơn giản và an toàn cho hệ thống. Vì thế, ngôn ngữ này đưa ra những giới hạn nghiêm ngặt về số lượng lớp cha mà một lớp con có thể kế thừa.
          </p>
        </div>

        {/* Toggle Selector */}
        <div className="flex bg-stone-150 p-1 rounded-xl mb-4 gap-1">
          <button
            onClick={() => setSelectedInheritance("single")}
            className={`flex-1 py-2 text-xs font-bold rounded-lg border-none cursor-pointer transition-all flex items-center justify-center gap-1.5 ${
              selectedInheritance === "single" ? "bg-stone-900 text-white shadow" : "text-stone-600 hover:text-stone-900"
            }`}
          >
            <GitBranch className="w-3.5 h-3.5" />
            Đơn kế thừa (Single Inheritance)
          </button>
          <button
            onClick={() => setSelectedInheritance("multiple")}
            className={`flex-1 py-2 text-xs font-bold rounded-lg border-none cursor-pointer transition-all flex items-center justify-center gap-1.5 ${
              selectedInheritance === "multiple" ? "bg-stone-900 text-white shadow" : "text-stone-600 hover:text-stone-900"
            }`}
          >
            <GitMerge className="w-3.5 h-3.5" />
            Đa kế thừa (Multiple Inheritance)
          </button>
        </div>

        {/* Interactive Visualization Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Sơ đồ cấu trúc cây */}
          <div className="lg:col-span-5 bg-white border border-stone-200 p-6 rounded-2xl flex flex-col items-center justify-center min-h-[220px]">
            {selectedInheritance === "single" ? (
              <div className="space-y-3 w-full max-w-[200px] text-center animate-in fade-in duration-200">
                <div className="border border-stone-400 p-2 rounded-lg font-mono text-xs font-bold bg-white">Lớp Cha (Superclass A)</div>
                <div className="flex flex-col items-center justify-center">
                  <div className="w-0.5 h-6 bg-stone-400" />
                  <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[8px] border-t-stone-400 -mt-0.5" />
                </div>
                <div className="border-2 border-emerald-650 p-2 rounded-lg font-mono text-xs font-black bg-white text-emerald-700">Lớp Con (Subclass B)</div>
                <span className="text-[8px] font-black text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200 inline-block font-mono">ĐƯỢC HỖ TRỢ TRONG JAVA</span>
              </div>
            ) : (
              <div className="space-y-3 w-full max-w-[220px] text-center animate-in fade-in duration-200">
                <div className="grid grid-cols-2 gap-3">
                  <div className="border border-stone-350 p-1.5 rounded-lg font-mono text-[9px] font-bold bg-white">Cha A<br/><span className="text-[8px] text-stone-400">void print()</span></div>
                  <div className="border border-stone-350 p-1.5 rounded-lg font-mono text-[9px] font-bold bg-white">Cha B<br/><span className="text-[8px] text-stone-400">void print()</span></div>
                </div>
                <div className="flex justify-around px-8">
                  <div className="w-0.5 h-6 bg-stone-400 rotate-12" />
                  <div className="w-0.5 h-6 bg-stone-400 -rotate-12" />
                </div>
                <div className="border-2 border-rose-650 p-2 rounded-lg font-mono text-xs font-black bg-white text-rose-700">Con C</div>
                <div className="text-[8px] font-black text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded border border-rose-200 inline-block font-mono">⚠️ DIAMOND PROBLEM (Xung đột)</div>
              </div>
            )}
          </div>

          {/* Explanation Text & Workaround */}
          <div className="lg:col-span-7 space-y-4">
            {selectedInheritance === "single" ? (
              <div className="space-y-3 animate-in fade-in duration-200">
                <h4 className="text-xs font-black text-stone-850 uppercase tracking-wider font-mono">// CƠ CHẾ ĐƠN KẾ THỪA (SINGLE INHERITANCE)</h4>
                <p className="text-xs text-stone-600 font-semibold leading-relaxed">
                  Một lớp con chỉ có thể kế thừa từ <strong>duy nhất một lớp cha</strong> trực tiếp. Trong Java, cú pháp <code>class B extends A</code> chỉ cho phép chỉ định một lớp sau từ khóa <code>extends</code>.
                </p>
                <div className="p-3 bg-emerald-50 border border-emerald-100 rounded-xl flex gap-2 items-start text-xs text-emerald-800 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Ưu điểm: Ngăn chặn hoàn toàn các lỗi xung đột đa hình và sự nhập nhèm khi các lớp cha trùng tên phương thức.</span>
                </div>
              </div>
            ) : (
              <div className="space-y-3 animate-in fade-in duration-200">
                <h4 className="text-xs font-black text-stone-850 uppercase tracking-wider font-mono">// VÌ SAO JAVA KHÔNG HỖ TRỢ ĐA KẾ THỪA?</h4>
                <p className="text-xs text-stone-600 font-semibold leading-relaxed">
                  Nếu lớp C kế thừa đồng thời từ A và B, và cả hai lớp này đều định nghĩa phương thức <code>print()</code>. Khi ta gọi <code>c.print()</code>, trình biên dịch sẽ không biết phải ưu tiên phiên bản của A hay B. Đây được gọi là <strong>Vấn đề kim cương (Diamond Problem)</strong>.
                </p>
                <div className="p-3 bg-amber-50 border border-amber-100 rounded-xl flex gap-2 items-start text-xs text-amber-800 font-semibold">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-amber-900 mb-0.5">Giải pháp thay thế (Interface Workaround):</strong>
                    Thay vì đa kế thừa lớp, Java hỗ trợ một lớp có thể <strong>implement nhiều Interface</strong> cùng một lúc. Lớp con sẽ tự hiện thực lại logic của các phương thức này mà không sợ xung đột.
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
