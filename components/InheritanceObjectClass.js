"use client";
import React, { useState } from "react";
import { Info, Play, CheckCircle2, GitFork, RefreshCw, Eye } from "lucide-react";

export default function InheritanceObjectClass() {
  const [overrideState, setOverrideState] = useState("default"); // "default" | "overridden"
  const [selectedMethod, setSelectedMethod] = useState("toString"); // "toString" | "equals"

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-3xl p-5 md:p-6 text-stone-850 select-none shadow-sm relative z-10 my-4">
      <span className="text-[9px] font-black text-stone-400 uppercase tracking-widest block mb-4 border-b pb-2 font-mono">
        // V. LỚP OBJECT (THE ROOT OF JAVA CLASS HIERARCHY)
      </span>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Visual Class Hierarchy Tree */}
        <div className="lg:col-span-5 space-y-4">
          <span className="text-[10px] font-black text-stone-500 uppercase tracking-wider block font-mono">// CÂY PHẢ HỆ KHỞI NGUYÊN (CLASS HIERARCHY)</span>
          
          <div className="bg-white border border-stone-200 rounded-2xl p-4 flex flex-col items-center justify-center space-y-3 min-h-[220px]">
            {/* Object Root Class Node */}
            <div className="w-full max-w-[200px] border-2 border-indigo-700 rounded-xl bg-indigo-50/20 text-center p-2 shadow-sm">
              <span className="text-[8px] font-black text-indigo-650 block uppercase tracking-wider">Root Class</span>
              <span className="font-mono text-xs font-black text-stone-850">Object</span>
              <div className="text-[8px] font-mono text-stone-500 mt-1 border-t pt-1 space-y-0.5">
                <div>toString()</div>
                <div>equals(Object)</div>
              </div>
            </div>

            {/* Down arrow */}
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-6 bg-stone-300" />
              <span className="text-[8px] font-bold text-stone-400 uppercase tracking-widest font-mono">ngầm định extends</span>
            </div>

            {/* BankAcct Node */}
            <div className="w-full max-w-[200px] border border-stone-400 rounded-xl bg-white text-center p-2 shadow-sm">
              <span className="font-mono text-xs font-bold text-stone-800">BankAcct</span>
            </div>

            {/* Down arrow */}
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-6 bg-stone-300" />
            </div>

            {/* SavingAcct Node */}
            <div className="w-full max-w-[200px] border border-stone-350 rounded-xl bg-white text-center p-2 shadow-sm">
              <span className="font-mono text-xs font-bold text-stone-700">SavingAcct</span>
            </div>
          </div>

          <div className="text-[10px] text-stone-500 font-semibold bg-stone-100 p-3 rounded-xl border border-stone-200 leading-relaxed">
            ℹ️ Trong Java, mọi lớp khi tạo ra mà không có từ khóa <code>extends</code> thì mặc định đều ngầm định kế thừa từ lớp <strong>Object</strong>.
          </div>
        </div>

        {/* Right Column: Interaction area for toString() & equals() overrides */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex justify-between items-center flex-wrap gap-2">
            <span className="text-[10px] font-black text-stone-500 uppercase tracking-wider block font-mono">// WIDGET TÙY BIẾN TOSTRING & EQUALS</span>
            
            {/* Toggle state buttons */}
            <div className="flex bg-stone-150 p-0.5 rounded-lg border">
              <button
                onClick={() => setOverrideState("default")}
                className={`px-2.5 py-1 text-[9px] font-bold rounded cursor-pointer border-none transition-all ${
                  overrideState === "default" ? "bg-stone-900 text-white shadow-sm" : "text-stone-600 hover:text-stone-900"
                }`}
              >
                Mặc định
              </button>
              <button
                onClick={() => setOverrideState("overridden")}
                className={`px-2.5 py-1 text-[9px] font-bold rounded cursor-pointer border-none transition-all ${
                  overrideState === "overridden" ? "bg-stone-900 text-white shadow-sm" : "text-stone-600 hover:text-stone-900"
                }`}
              >
                Ghi đè (Override)
              </button>
            </div>
          </div>

          {/* Selector toString/equals */}
          <div className="flex border-b border-stone-200">
            <button
              onClick={() => setSelectedMethod("toString")}
              className={`pb-2 px-4 text-xs font-bold cursor-pointer border-none bg-transparent transition-all border-b-2 -mb-[2px] ${
                selectedMethod === "toString" ? "border-indigo-650 text-indigo-700" : "border-transparent text-stone-400 hover:text-stone-700"
              }`}
            >
              Phương thức toString()
            </button>
            <button
              onClick={() => setSelectedMethod("equals")}
              className={`pb-2 px-4 text-xs font-bold cursor-pointer border-none bg-transparent transition-all border-b-2 -mb-[2px] ${
                selectedMethod === "equals" ? "border-indigo-650 text-indigo-700" : "border-transparent text-stone-400 hover:text-stone-700"
              }`}
            >
              Phương thức equals()
            </button>
          </div>

          {/* Interactive display area */}
          <div className="border border-stone-200 rounded-2xl p-4 bg-white space-y-4">
            {selectedMethod === "toString" ? (
              <div className="space-y-3 animate-in fade-in duration-200">
                <p className="text-xs text-stone-600 font-semibold leading-relaxed">
                  {overrideState === "default" 
                    ? "Mặc định, toString() trả về tên lớp và mã băm Hexadecimal (địa chỉ vùng nhớ của đối tượng). Rất khó đọc và vô nghĩa với người dùng." 
                    : "Khi ghi đè, ta tùy chỉnh toString() để in ra toàn bộ giá trị thuộc tính hữu ích của đối tượng một cách trực quan đẹp mắt."
                  }
                </p>

                {overrideState === "default" ? (
                  <>
                    <pre className="font-mono text-[9px] bg-stone-900 text-stone-300 p-3 rounded-xl border border-stone-850">
{`SavingAcct sa = new SavingAcct(2, 1000.0, 0.03);
System.out.println(sa.toString());`}
                    </pre>
                    <div className="bg-black text-white p-3.5 rounded-xl font-mono text-[10px] flex items-center justify-between">
                      <span className="text-rose-400 font-bold">Output: SavingAcct@1b65d1d</span>
                      <span className="text-[8px] bg-rose-50 text-rose-700 border border-rose-200 font-sans px-1.5 py-0.5 rounded font-black uppercase">Vô nghĩa</span>
                    </div>
                  </>
                ) : (
                  <>
                    <pre className="font-mono text-[9px] bg-stone-900 text-stone-300 p-3 rounded-xl border border-stone-850">
{`@Override
public String toString() {
    return "Account #" + acctNum + " [Balance: $" + balance + ", Rate: " + rate + "]";
}`}
                    </pre>
                    <div className="bg-black text-white p-3.5 rounded-xl font-mono text-[10px] flex items-center justify-between">
                      <span className="text-emerald-400 font-bold">Output: Account #2 [Balance: $1000.0, Rate: 0.03]</span>
                      <span className="text-[8px] bg-emerald-50 text-emerald-700 border border-emerald-200 font-sans px-1.5 py-0.5 rounded font-black uppercase">Trực quan</span>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <div className="space-y-3 animate-in fade-in duration-200">
                <p className="text-xs text-stone-600 font-semibold leading-relaxed">
                  {overrideState === "default" 
                    ? "Mặc định, equals() so sánh bằng toán tử == (so sánh địa chỉ vùng nhớ). Cho dù hai đối tượng có cùng Account Number, nó vẫn trả về false vì chúng nằm ở 2 ô nhớ khác nhau." 
                    : "Khi ghi đè, ta lập trình equals() để nó so sánh các giá trị bên trong (ví dụ so sánh mã tài khoản acctNum). Hợp lệ về mặt logic nghiệp vụ."
                  }
                </p>

                {overrideState === "default" ? (
                  <>
                    <pre className="font-mono text-[9px] bg-stone-900 text-stone-300 p-3 rounded-xl border border-stone-850">
{`SavingAcct sa1 = new SavingAcct(2, 1000.0, 0.03);
SavingAcct sa2 = new SavingAcct(2, 1000.0, 0.03);
System.out.println(sa1.equals(sa2));`}
                    </pre>
                    <div className="bg-black text-white p-3.5 rounded-xl font-mono text-[10px] flex items-center justify-between">
                      <span className="text-rose-400 font-bold">Output: false</span>
                      <span className="text-[8px] bg-rose-50 text-rose-700 border border-rose-200 font-sans px-1.5 py-0.5 rounded font-black uppercase">So sánh tham chiếu</span>
                    </div>
                  </>
                ) : (
                  <>
                    <pre className="font-mono text-[9px] bg-stone-900 text-stone-300 p-3 rounded-xl border border-stone-850">
{`@Override
public boolean equals(Object obj) {
    if (this == obj) return true;
    if (obj instanceof SavingAcct) {
        SavingAcct other = (SavingAcct) obj;
        return this.acctNum == other.acctNum; // So sánh mã tài khoản
    }
    return false;
}`}
                    </pre>
                    <div className="bg-black text-white p-3.5 rounded-xl font-mono text-[10px] flex items-center justify-between">
                      <span className="text-emerald-400 font-bold">Output: true</span>
                      <span className="text-[8px] bg-emerald-50 text-emerald-700 border border-emerald-200 font-sans px-1.5 py-0.5 rounded font-black uppercase">So sánh giá trị</span>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
