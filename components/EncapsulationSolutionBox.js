"use client";
import React, { useState } from "react";
import { Lock, Unlock, AlertTriangle, CheckCircle2, Sparkles } from "lucide-react";

export default function EncapsulationSolutionBox() {
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-3xl p-4 md:p-6 my-6 shadow-sm font-sans text-stone-850">
      {/* Header */}
      <div className="border-b border-stone-200 pb-3 mb-5 flex justify-between items-center select-none">
        <div>
          <h4 className="text-sm md:text-base font-extrabold text-stone-900 flex items-center gap-2">
            <span>🛡️ Khắc Phục Lỗi Vi Phạn Encapsulation</span>
          </h4>
          <p className="text-xs text-stone-500 mt-1">
            Quan sát lỗi biên dịch khi truy cập thuộc tính private và xem cách sửa mã nguồn đúng chuẩn.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
        {/* Left Side: Wrong Code & Compilation Error */}
        <div className="bg-[#1e1d1a] border border-[#2a2926] rounded-2xl p-4 text-stone-300 flex flex-col justify-between shadow-md">
          <div>
            <div className="flex items-center gap-1.5 text-xs text-rose-400 font-bold uppercase tracking-wider mb-3 select-none">
              <AlertTriangle size={14} />
              <span>Mã nguồn sai & Lỗi biên dịch</span>
            </div>
            
            {/* Wrong Code Block */}
            <pre className="bg-[#151413] border border-stone-850 p-3 rounded-xl text-stone-400 font-mono text-xs overflow-x-auto leading-relaxed mb-3">
              <span className="text-stone-600">{"// Thử thay đổi số dư trực tiếp từ bên ngoài"}</span>{"\n"}
              ba1.<span className="text-rose-450 font-semibold">balance</span> += 1000;
            </pre>

            {/* Error Message */}
            <div className="bg-rose-950/20 border border-rose-900/40 p-3 rounded-xl text-[11px] font-mono text-rose-350 leading-relaxed">
              <span className="font-bold text-rose-400">💥 COMPILATION ERROR:</span>{"\n"}
              TestBankAcct.java:12: error: balance has private access in BankAcct{"\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ba1.balance += 1000;{"\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;^
            </div>
          </div>

          <div className="text-[10px] text-stone-500 mt-4 leading-relaxed select-none">
            ⚠️ Thuộc tính <code className="text-stone-400 font-mono">balance</code> được khai báo là <code className="text-stone-400 font-mono">private</code>, do đó lớp bên ngoài (<code className="text-stone-400 font-mono">TestBankAcct</code>) không được phép truy cập hoặc thay đổi trực tiếp.
          </div>
        </div>

        {/* Right Side: Solution Block */}
        <div className={`border rounded-2xl p-4 flex flex-col justify-between transition-all duration-500 ${
          showSolution 
            ? "border-emerald-500/40 bg-emerald-500/[0.02]" 
            : "border-stone-200 bg-white"
        }`}>
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider mb-3 select-none">
              {showSolution ? (
                <div className="flex items-center gap-1.5 text-emerald-600">
                  <CheckCircle2 size={14} />
                  <span>Mã nguồn đúng chuẩn OOP</span>
                </div>
              ) : (
                <div className="flex items-center gap-1.5 text-stone-500">
                  <Lock size={14} />
                  <span>Giải pháp an toàn</span>
                </div>
              )}
            </div>

            {showSolution ? (
              <div className="space-y-4 animate-in fade-in duration-300">
                {/* Correct Code Block */}
                <pre className="bg-[#151413] border border-stone-850 p-3 rounded-xl text-stone-300 font-mono text-xs overflow-x-auto leading-relaxed shadow-inner">
                  <span className="text-stone-600">{"// Gọi thông qua phương thức public của đối tượng"}</span>{"\n"}
                  ba1.<span className="text-emerald-400 font-bold">deposit</span>(1000);
                </pre>

                {/* Success Indicator */}
                <div className="bg-emerald-950/20 border border-emerald-900/40 p-3 rounded-xl text-[11px] text-emerald-850 leading-relaxed font-sans font-medium flex gap-2 items-start">
                  <Sparkles size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-extrabold text-emerald-700">Mã nguồn chạy hoàn hảo!</span>{" "}
                    Phương thức <code className="bg-emerald-100 px-1 py-0.5 rounded font-mono">deposit(double amount)</code> được thiết kế <code className="bg-emerald-100 px-1 py-0.5 rounded font-mono">public</code> để tiếp nhận số tiền gửi từ bên ngoài một cách hợp lệ, đồng thời kiểm soát giá trị hợp lệ trước khi cộng vào thuộc tính private.
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-10 text-center select-none">
                <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 mb-3">
                  <Lock size={22} />
                </div>
                <div className="text-xs font-bold text-stone-750">Mã nguồn đúng đang được khóa bảo mật</div>
                <p className="text-[10px] text-stone-500 max-w-[200px] mt-1 leading-relaxed">
                  Nhấn nút bên dưới để sử dụng phương thức public nhằm sửa đổi số dư an toàn.
                </p>
              </div>
            )}
          </div>

          <div className="mt-4 pt-3 border-t border-stone-150 flex justify-end">
            <button
              onClick={() => setShowSolution(!showSolution)}
              className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-sm ${
                showSolution
                  ? "bg-stone-200 hover:bg-stone-300 text-stone-700"
                  : "bg-amber-600 hover:bg-amber-550 text-white"
              }`}
            >
              {showSolution ? (
                <>
                  <Lock size={12} />
                  <span>Ẩn giải pháp</span>
                </>
              ) : (
                <>
                  <Unlock size={12} />
                  <span>Xem mã nguồn sửa đổi đúng đắn</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
