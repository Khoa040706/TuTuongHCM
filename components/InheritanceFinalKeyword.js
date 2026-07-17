"use client";
import React, { useState } from "react";
import { AlertTriangle, ShieldAlert, Check, X, ShieldCheck } from "lucide-react";

export default function InheritanceFinalKeyword() {
  const [selectedUsage, setSelectedUsage] = useState("class"); // "class" | "method"

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-3xl p-5 md:p-6 text-stone-850 select-none shadow-sm relative z-10 my-4">
      <span className="text-[9px] font-black text-stone-400 uppercase tracking-widest block mb-4 border-b pb-2 font-mono">
        // VII. NGĂN CHẶN KẾ THỪA BẰNG TỪ KHÓA FINAL
      </span>

      <div className="space-y-4">
        {/* Intro */}
        <div className="bg-white border border-stone-200 rounded-2xl p-4 space-y-2">
          <p className="text-xs text-stone-700 font-semibold leading-relaxed">
            Đôi khi, ta muốn <strong>ngăn không cho lớp khác kế thừa</strong> (tránh làm hỏng hành vi của lớp cha) hoặc <strong>ngăn một số phương thức bị ghi đè</strong>. Java cung cấp từ khóa <code>final</code> để giải quyết yêu cầu này.
          </p>
        </div>

        {/* Selector usage toggle */}
        <div className="flex bg-stone-150 p-1 rounded-xl mb-4 gap-1">
          <button
            onClick={() => setSelectedUsage("class")}
            className={`flex-1 py-2 text-xs font-bold rounded-lg border-none cursor-pointer transition-all ${
              selectedUsage === "class" ? "bg-stone-900 text-white shadow" : "text-stone-600 hover:text-stone-900"
            }`}
          >
            final đặt trước Class (Lớp)
          </button>
          <button
            onClick={() => setSelectedUsage("method")}
            className={`flex-1 py-2 text-xs font-bold rounded-lg border-none cursor-pointer transition-all ${
              selectedUsage === "method" ? "bg-stone-900 text-white shadow" : "text-stone-600 hover:text-stone-900"
            }`}
          >
            final đặt trước Method (Phương thức)
          </button>
        </div>

        {/* Content Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Explanation Card */}
          <div className="bg-white border border-stone-200 p-4 rounded-xl flex flex-col justify-between min-h-[220px]">
            {selectedUsage === "class" ? (
              <div className="space-y-3 animate-in fade-in duration-200">
                <div className="flex items-center gap-2 text-indigo-750 font-bold text-xs bg-indigo-50 px-2.5 py-1.5 rounded-lg border border-indigo-100">
                  <ShieldCheck className="w-4 h-4 text-indigo-650" />
                  <span>Ngăn chặn kế thừa lớp</span>
                </div>
                <p className="text-xs text-stone-600 font-semibold leading-relaxed">
                  Khi khai báo một lớp là <code>final class</code>, không một lớp nào khác có thể kế thừa (extends) từ nó. Lớp này là <strong>lá cây cuối cùng (leaf class)</strong> trong cây thừa kế.
                </p>
                <div className="text-[10px] text-stone-500 font-semibold bg-stone-100 p-2.5 rounded-lg">
                  💡 <strong>Thực tế:</strong> Lớp <code>String</code> trong Java là một <code>final class</code> để bảo mật dữ liệu chuỗi không bị lớp con sửa đổi hành vi.
                </div>
              </div>
            ) : (
              <div className="space-y-3 animate-in fade-in duration-200">
                <div className="flex items-center gap-2 text-indigo-750 font-bold text-xs bg-indigo-50 px-2.5 py-1.5 rounded-lg border border-indigo-100">
                  <ShieldCheck className="w-4 h-4 text-indigo-650" />
                  <span>Ngăn chặn ghi đè phương thức</span>
                </div>
                <p className="text-xs text-stone-600 font-semibold leading-relaxed">
                  Khi đặt <code>final</code> trước một phương thức, lớp con <strong>vẫn được phép kế thừa</strong> lớp cha bình thường, nhưng <strong>không thể ghi đè (override)</strong> phương thức final đó.
                </p>
                <div className="text-[10px] text-stone-500 font-semibold bg-stone-100 p-2.5 rounded-lg">
                  💡 <strong>Mục đích:</strong> Giúp lớp cha bảo toàn các thuật toán cốt lõi quan trọng không bị lớp con tự ý thay đổi logic thực thi.
                </div>
              </div>
            )}
            
            <div className="bg-rose-500/5 border border-rose-500/15 p-2.5 rounded-lg text-[9px] text-rose-750 font-bold flex gap-2 items-center font-mono">
              <AlertTriangle className="w-3.5 h-3.5 text-rose-650 shrink-0" />
              <span>Hai cách dùng này rất dễ gây nhầm lẫn trong bài thi trắc nghiệm!</span>
            </div>
          </div>

          {/* Code Sandbox View with Compiler error simulation */}
          <div className="bg-stone-900 border border-stone-950 p-4 rounded-xl font-mono text-[10px] md:text-xs text-stone-300 flex flex-col justify-between min-h-[220px]">
            <div>
              <span className="text-[8px] uppercase tracking-widest text-stone-500 font-black block mb-3 border-b border-stone-800 pb-1">// Code & Simulator</span>
              {selectedUsage === "class" ? (
                <pre className="leading-relaxed animate-in fade-in duration-200">
{`final class SavingAcct extends BankAcct { ... }

// Cố tình kế thừa lớp final
class SpecialSavingAcct extends SavingAcct {
    // ❌ LỖI BIÊN DỊCH!
}`}
                </pre>
              ) : (
                <pre className="leading-relaxed animate-in fade-in duration-200">
{`class SavingAcct extends BankAcct {
    public final void payInterest() { ... }
}

class SpecialSavingAcct extends SavingAcct {
    // Cố tình ghi đè phương thức final
    public void payInterest() { ... } // ❌ LỖI BIÊN DỊCH!
}`}
                </pre>
              )}
            </div>

            {/* Compiler simulated error alert */}
            <div className="bg-black text-rose-400 p-3 rounded-lg border border-rose-900/50 flex items-start gap-2 mt-2">
              <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
              <div className="text-[9px] space-y-0.5 font-mono">
                <span className="font-bold uppercase text-rose-500 block">Compiler Error:</span>
                {selectedUsage === "class" ? (
                  <span>Cannot inherit from final class 'SavingAcct'</span>
                ) : (
                  <span>Cannot override the final method from SavingAcct</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
