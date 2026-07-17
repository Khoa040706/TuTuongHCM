"use client";
import React, { useState } from "react";
import { GitFork, Link, ArrowRight, HelpCircle, AlertCircle } from "lucide-react";

export default function InheritanceIsaHasa() {
  const [selectedRelation, setSelectedRelation] = useState("isa"); // "isa" | "hasa"

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-3xl p-5 md:p-6 text-stone-850 select-none shadow-sm relative z-10 my-4">
      <span className="text-[9px] font-black text-stone-400 uppercase tracking-widest block mb-4 border-b pb-2 font-mono">
        // VI. "IS-A" VÀ "HAS-A" (RELATIONSHIPS IN OOP)
      </span>

      <div className="space-y-6">
        
        {/* Avoid inheritance abuse warning */}
        <div className="bg-rose-500/5 border border-rose-500/10 p-4 rounded-2xl flex gap-3 items-start">
          <div className="p-2 bg-rose-500/10 rounded-xl text-rose-650 shrink-0">
            <AlertCircle className="w-5 h-5" />
          </div>
          <div className="text-xs space-y-1">
            <h4 className="font-bold text-rose-850">⚠️ Lưu ý cực kỳ quan trọng khi thiết kế hệ thống</h4>
            <ul className="list-disc pl-4 space-y-1 text-stone-600 font-semibold leading-relaxed">
              <li><strong>Không lạm dụng kế thừa (inheritance):</strong> Chỉ kế thừa khi thuộc tính/phương thức đó thực sự vốn có và phù hợp logic tự nhiên của tất cả lớp con trong tương lai.</li>
              <li><strong>Không lạm dụng protected:</strong> Giới hạn phạm vi truy cập vừa đủ để bảo vệ tính đóng gói dữ liệu của lớp cha.</li>
            </ul>
          </div>
        </div>

        {/* Dynamic Selector Widget */}
        <div className="border border-stone-200 rounded-2xl p-4 bg-white space-y-4">
          <div className="flex justify-between items-center flex-wrap gap-2">
            <span className="text-[10px] font-black text-stone-500 uppercase tracking-wider block font-mono">// PHƯƠNG PHÁP XÁC ĐỊNH & THIẾT KẾ</span>
            
            <div className="flex bg-stone-150 p-0.5 rounded-lg border">
              <button
                onClick={() => setSelectedRelation("isa")}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg cursor-pointer border-none transition-all ${
                  selectedRelation === "isa" ? "bg-stone-900 text-white shadow-sm" : "text-stone-600 hover:text-stone-900"
                }`}
              >
                IS-A (Kế thừa)
              </button>
              <button
                onClick={() => setSelectedRelation("hasa")}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg cursor-pointer border-none transition-all ${
                  selectedRelation === "hasa" ? "bg-stone-900 text-white shadow-sm" : "text-stone-600 hover:text-stone-900"
                }`}
              >
                HAS-A (Thuộc tính)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Left: Interactive Diagram */}
            <div className="bg-stone-50 border border-stone-200 p-6 rounded-xl flex flex-col items-center justify-center min-h-[180px]">
              {selectedRelation === "isa" ? (
                <div className="space-y-4 w-full max-w-[240px] text-center animate-in fade-in duration-200">
                  <div className="border border-stone-400 p-2 rounded-lg font-mono text-xs font-bold bg-white">BankAcct</div>
                  <div className="flex flex-col items-center">
                    <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-stone-900" />
                    <div className="w-0.5 h-6 bg-stone-900" />
                    <span className="text-[8px] font-black text-indigo-650 bg-indigo-50 px-1 rounded my-1">Quan hệ Kế thừa</span>
                  </div>
                  <div className="border-2 border-indigo-650 p-2 rounded-lg font-mono text-xs font-black bg-white text-indigo-700">SavingAcct</div>
                  <div className="text-[9px] text-stone-500 font-bold font-sans">Ký hiệu UML: Mũi tên liền nét (solid arrow)</div>
                </div>
              ) : (
                <div className="space-y-4 w-full max-w-[240px] text-center animate-in fade-in duration-200">
                  <div className="border border-stone-400 p-2 rounded-lg font-mono text-xs font-bold bg-white">BankAcct</div>
                  <div className="flex flex-col items-center">
                    <div className="w-0.5 h-8 border-l border-dashed border-stone-850" />
                    <div className="w-2 h-2 rounded-full bg-stone-850 -mt-1" />
                    <span className="text-[8px] font-black text-amber-650 bg-amber-50 px-1 rounded my-1">Quan hệ Thuộc tính</span>
                  </div>
                  <div className="border-2 border-amber-650 p-2 rounded-lg font-mono text-xs font-black bg-white text-amber-700">Person</div>
                  <div className="text-[9px] text-stone-500 font-bold font-sans">Ký hiệu UML: Mũi tên nét đứt (dotted arrow)</div>
                </div>
              )}
            </div>

            {/* Right: Code & Explanations */}
            <div className="space-y-3">
              <h4 className="text-xs font-black text-stone-800 uppercase tracking-widest font-mono">// CÚ PHÁP HIỆN THỰC JAVA</h4>
              {selectedRelation === "isa" ? (
                <div className="space-y-2 animate-in fade-in duration-200">
                  <p className="text-xs text-stone-600 font-semibold leading-relaxed">
                    Sử dụng từ khóa <code>extends</code> để tạo mối quan hệ kế thừa trực tiếp.
                  </p>
                  <pre className="font-mono text-[9px] bg-stone-900 text-stone-300 p-3 rounded-lg border">
{`class BankAcct { ... }

class SavingAcct extends BankAcct { ... }`}
                  </pre>
                  <span className="text-[8px] font-bold text-stone-500 block">Ví dụ: Tài khoản tiết kiệm (SavingAcct) là một tài khoản ngân hàng (BankAcct).</span>
                </div>
              ) : (
                <div className="space-y-2 animate-in fade-in duration-200">
                  <p className="text-xs text-stone-600 font-semibold leading-relaxed">
                    Khai báo một đối tượng của lớp khác làm thuộc tính (attribute) bên trong lớp hiện tại.
                  </p>
                  <pre className="font-mono text-[9px] bg-stone-900 text-stone-300 p-3 rounded-lg border">
{`class BankAcct { ... }

class Person {
    private BankAcct myAcct; // Thuộc tính kiểu BankAcct
}`}
                  </pre>
                  <span className="text-[8px] font-bold text-stone-500 block">Ví dụ: Con người (Person) có một tài khoản ngân hàng (BankAcct), chứ Person không phải là BankAcct.</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Comparative Table */}
        <div className="border border-stone-200 rounded-2xl p-4 bg-white space-y-3">
          <span className="text-[10px] font-black text-stone-500 uppercase tracking-wider block font-mono">// BẢNG SO SÁNH TỔNG HỢP</span>
          
          <div className="overflow-x-auto">
            <table className="w-full text-[10px] text-left border-collapse">
              <thead>
                <tr className="border-b border-stone-300 text-stone-500">
                  <th className="py-2 pr-4 font-black">Tiêu chí</th>
                  <th className="py-2 px-4 font-black text-indigo-700 bg-indigo-50/30 rounded-t-lg">is-a (Kế thừa)</th>
                  <th className="py-2 pl-4 font-black text-amber-700 bg-amber-50/30 rounded-t-lg">has-a (Thuộc tính)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-150 font-medium text-stone-700">
                <tr>
                  <td className="py-2.5 pr-4 font-bold text-stone-500">Ý nghĩa</td>
                  <td className="py-2.5 px-4 bg-indigo-50/10">B là một phiên bản đặc biệt của A</td>
                  <td className="py-2.5 pl-4 bg-amber-50/10">B sở hữu hoặc chứa đựng A</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-4 font-bold text-stone-500">Cách hiện thực</td>
                  <td className="py-2.5 px-4 bg-indigo-50/10 font-mono text-[9px] text-indigo-650">extends</td>
                  <td className="py-2.5 pl-4 bg-amber-50/10 font-mono text-[9px] text-amber-650">Khai báo thuộc tính kiểu A</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-4 font-bold text-stone-500">Ký hiệu UML</td>
                  <td className="py-2.5 px-4 bg-indigo-50/10 font-mono text-[9px]">solid arrow (mũi tên liền nét)</td>
                  <td className="py-2.5 pl-4 bg-amber-50/10 font-mono text-[9px]">dotted arrow (mũi tên nét đứt)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Board exam reminder */}
        <div className="bg-amber-500/5 border border-amber-500/25 p-4 rounded-2xl text-stone-850 flex items-start gap-3">
          <div className="p-2 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-600 shrink-0 font-bold font-mono text-xs">
            🎯
          </div>
          <div className="text-xs space-y-1">
            <span className="text-[9px] font-black text-amber-600 uppercase tracking-widest block font-mono">// LƯU Ý KHI ĐI THI</span>
            <p className="font-bold text-stone-700 leading-relaxed">
              Các câu hỏi thi trắc nghiệm lý thuyết OOP hoặc câu hỏi vẽ sơ đồ lớp UML <strong>rất hay yêu cầu phân biệt</strong> 2 loại mối quan hệ và 2 kiểu ký hiệu mũi tên này. Hãy ôn luyện kỹ!
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
