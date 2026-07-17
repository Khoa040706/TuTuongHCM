"use client";
import React, { useState } from "react";
import { Play, CheckCircle2, XCircle, Info, RefreshCw, Car, ChevronRight } from "lucide-react";

export default function InheritanceSubstitutability() {
  const [testCase, setTestCase] = useState(null); // null | "valid1" | "valid2" | "invalid"

  const handleTest = (type) => {
    setTestCase(type);
  };

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-3xl p-5 md:p-6 text-stone-850 select-none shadow-sm relative z-10 my-4">
      <span className="text-[9px] font-black text-stone-400 uppercase tracking-widest block mb-4 border-b pb-2 font-mono">
        // IV. SUBCLASS SUBSTITUTABILITY (TÍNH THAY THẾ CỦA LỚP CON)
      </span>

      <div className="space-y-4">
        {/* Academic Analogy Intro */}
        <div className="bg-white border border-stone-200 rounded-2xl p-4 flex gap-3 items-start">
          <div className="p-2 bg-indigo-50 rounded-xl text-indigo-650 shrink-0">
            <Car className="w-5 h-5" />
          </div>
          <div className="text-xs space-y-1">
            <h4 className="font-bold text-stone-800">Ví dụ tương tự (Analogy)</h4>
            <p className="leading-relaxed text-stone-600 font-semibold">
              Ta có thể lái <strong>ô tô (Car)</strong>. <strong>Honda</strong> là một loại ô tô (subclass của Car). 
              Do đó, ở bất cứ nơi nào yêu cầu lái ô tô, ta đều có thể lái một chiếc Honda. 
              Nhưng chiều ngược lại không đúng: Không phải mọi chiếc ô tô đều là Honda!
            </p>
          </div>
        </div>

        {/* Code Definition */}
        <div className="bg-stone-900 border border-stone-950 p-4 rounded-2xl text-stone-300 font-mono text-[10px] md:text-xs">
          <span className="text-[8px] uppercase tracking-widest text-stone-500 font-black block mb-2 font-mono">// Định nghĩa phương thức transfer() nhận tham số lớp cha BankAcct</span>
          <pre className="leading-relaxed">
{`public static void transfer(BankAcct fromAcct, BankAcct toAcct, double amt) {
    fromAcct.withdraw(amt);
    toAcct.deposit(amt);
}`}
          </pre>
        </div>

        {/* Interaction Panel */}
        <div className="border border-stone-200 rounded-2xl p-4 bg-white space-y-4">
          <span className="text-[10px] font-black text-stone-500 uppercase tracking-wider block font-mono">// THỬ NGHIỆM TRUYỀN THAM SỐ (SUBSTITUTABILITY SIMULATION)</span>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            <button
              onClick={() => handleTest("valid1")}
              className={`py-2 px-3 text-left rounded-xl border font-bold text-[10px] cursor-pointer transition-all ${
                testCase === "valid1" 
                  ? "bg-indigo-650 text-white border-indigo-700 shadow-sm" 
                  : "bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100"
              }`}
            >
              <div className="font-mono text-[9px] text-stone-400 mb-0.5">CASE 1</div>
              Lớp cha & Lớp cha (BankAcct, BankAcct)
            </button>

            <button
              onClick={() => handleTest("valid2")}
              className={`py-2 px-3 text-left rounded-xl border font-bold text-[10px] cursor-pointer transition-all ${
                testCase === "valid2" 
                  ? "bg-indigo-650 text-white border-indigo-700 shadow-sm" 
                  : "bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100"
              }`}
            >
              <div className="font-mono text-[9px] text-stone-400 mb-0.5">CASE 2 (Subclass)</div>
              Lớp cha & Lớp con (BankAcct, SavingAcct)
            </button>

            <button
              onClick={() => handleTest("invalid")}
              className={`py-2 px-3 text-left rounded-xl border font-bold text-[10px] cursor-pointer transition-all ${
                testCase === "invalid" 
                  ? "bg-rose-650 text-white border-rose-700 shadow-sm" 
                  : "bg-rose-50/50 text-rose-750 border-rose-100 hover:bg-rose-100/50"
              }`}
            >
              <div className="font-mono text-[9px] text-rose-400 mb-0.5">CASE 3 (Sai chiều)</div>
              Lớp con cần nhận lớp cha (LỖI)
            </button>
          </div>

          {/* Test Case Visualization Result */}
          {testCase ? (
            <div className="border border-stone-200 rounded-xl p-4 bg-stone-50 space-y-4 animate-in fade-in duration-200">
              {testCase === "valid1" && (
                <>
                  <div className="flex items-center gap-2 text-emerald-700 text-xs font-bold bg-emerald-50 p-2.5 rounded-lg border border-emerald-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>HỢP LỆ: Khớp kiểu dữ liệu khai báo hoàn toàn.</span>
                  </div>
                  <pre className="font-mono text-[9px] bg-stone-900 text-stone-300 p-3 rounded-lg">
{`BankAcct ba1 = new BankAcct(1, 234.56);
BankAcct ba2 = new BankAcct(3, 500.0);
transfer(ba1, ba2, 100.0); // ✅ Hoạt động bình thường`}
                  </pre>
                </>
              )}

              {testCase === "valid2" && (
                <>
                  <div className="flex items-center gap-2 text-emerald-700 text-xs font-bold bg-emerald-50 p-2.5 rounded-lg border border-emerald-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>HỢP LỆ: Tự động chấp nhận đối tượng con SavingAcct! (Subclass Substitutability)</span>
                  </div>
                  <div className="p-3 bg-white border border-stone-200 rounded-xl text-xs space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] bg-stone-100 px-2 py-0.5 rounded border">fromAcct</span>
                      <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
                      <span className="font-mono text-[10px] font-bold text-stone-700">BankAcct ba</span>
                      <span className="text-[9px] text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">OK</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] bg-stone-100 px-2 py-0.5 rounded border">toAcct</span>
                      <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
                      <span className="font-mono text-[10px] font-bold text-indigo-700">SavingAcct sa</span>
                      <span className="text-[9px] text-indigo-650 font-bold bg-indigo-50 px-1.5 py-0.5 rounded border border-indigo-200">Kế thừa thay thế (Substitutable)</span>
                    </div>
                  </div>
                  <pre className="font-mono text-[9px] bg-stone-900 text-stone-300 p-3 rounded-lg">
{`BankAcct ba = new BankAcct(1, 234.56);
SavingAcct sa = new SavingAcct(2, 1000.0, 0.03);
transfer(ba, sa, 123.45); // ✅ Hoạt động hoàn hảo!`}
                  </pre>
                </>
              )}

              {testCase === "invalid" && (
                <>
                  <div className="flex items-center gap-2 text-rose-700 text-xs font-bold bg-rose-50 p-2.5 rounded-lg border border-rose-100">
                    <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>LỖI BIÊN DỊCH: Không được gán ngược lớp cha vào tham chiếu lớp con!</span>
                  </div>
                  <div className="bg-rose-500/5 border border-rose-500/10 p-3 rounded-lg text-[10px] text-rose-750 leading-relaxed font-semibold">
                    ⚠️ <strong>Lý do:</strong> Một tài khoản tiết kiệm chắc chắn là một tài khoản ngân hàng. Nhưng một tài khoản ngân hàng bất kỳ (BankAcct) chưa chắc đã là tài khoản tiết kiệm (SavingAcct), nó có thể là tài khoản thanh toán hoặc loại khác.
                  </div>
                  <pre className="font-mono text-[9px] bg-stone-900 text-rose-300 p-3 rounded-lg border border-rose-900/50">
{`// Giả sử có một phương thức yêu cầu tham số kiểu SavingAcct
public static void applyBonus(SavingAcct acct) { ... }

BankAcct ba = new BankAcct(1, 234.56);
applyBonus(ba); // ❌ LỖI BIÊN DỊCH: Type mismatch!
                // Không thể chuyển đổi kiểu dữ liệu từ BankAcct sang SavingAcct`}
                  </pre>
                </>
              )}
            </div>
          ) : (
            <div className="border border-dashed border-stone-200 rounded-xl p-8 text-center text-stone-400 text-xs font-medium">
              Chọn một Case kiểm thử ở trên để xem trực quan hóa luồng truyền dữ liệu.
            </div>
          )}
        </div>

        {/* Dynamic Polymorphism Reminder Banner */}
        <div className="bg-amber-500/5 border border-amber-500/25 p-4 rounded-2xl text-stone-850 flex items-start gap-3">
          <div className="p-2 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-600 shrink-0 font-bold font-mono text-xs">
            💡
          </div>
          <div className="text-xs space-y-1">
            <span className="text-[9px] font-black text-amber-600 uppercase tracking-widest block font-mono">// ĐỊNH HƯỚNG KIẾN THỨC</span>
            <p className="font-bold text-stone-700 leading-relaxed">
              Tính chất này chính là <strong>nền tảng quan trọng nhất</strong> để học về <strong>Tính Đa Hình (Polymorphism)</strong> ở bài học sau. 
              Hãy ghi nhớ thật kỹ quy tắc này để không bị đánh lừa trong các câu hỏi trắc nghiệm!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
