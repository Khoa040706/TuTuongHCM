"use client";
import React, { useState } from "react";
import { Eye, EyeOff, HelpCircle, Check, X, ShieldAlert, Award } from "lucide-react";

export default function InheritanceQuizCompileRun() {
  const initialAnswers = [
    {
      code: "A a = new A(); a.m();",
      error: "Không",
      result: "A.m",
      explain: "Đối tượng kiểu A gọi phương thức m() định nghĩa ở lớp A. Hoạt động bình thường."
    },
    {
      code: "A a = new A(); a.k();",
      error: "Có",
      result: "—",
      explain: "Lỗi biên dịch: Lớp A không định nghĩa phương thức k(). Kiểu khai báo quyết định phép gọi."
    },
    {
      code: "A a = new C(); a.m();",
      error: "Không",
      result: "C.m",
      explain: "Lớp A có m() nên biên dịch thành công. Lớp thực tế là C, đã ghi đè m(), nên C.m chạy ở runtime."
    },
    {
      code: "B b = new A(); b.n();",
      error: "Có",
      result: "—",
      explain: "Lỗi biên dịch: Không thể gán đối tượng lớp cha A cho tham chiếu lớp con B (Type mismatch)."
    },
    {
      code: "A a = new B(); a.m();",
      error: "Không",
      result: "A.m",
      explain: "Lớp A có m() nên biên dịch OK. Lớp thực tế B kế thừa m() từ A mà không ghi đè, nên A.m chạy."
    },
    {
      code: "A a; C c = new D(); a = c; a.n();",
      error: "Có",
      result: "—",
      explain: "Lỗi biên dịch ở dòng 'C c = new D()'. D không có quan hệ kế thừa với C (D extends B, C extends A)."
    },
    {
      code: "B b = new D(); b.p();",
      error: "Không",
      result: "D.p",
      explain: "Lớp B có định nghĩa p() nên biên dịch OK. Lớp thực tế là D đã ghi đè p() nên D.p chạy ở runtime."
    },
    {
      code: "C c = new C(); c.n();",
      error: "Không",
      result: "A.n",
      explain: "C kế thừa n() từ lớp cha A mà không ghi đè, nên phương thức gốc A.n chạy bình thường."
    },
    {
      code: "A a = new D(); a.p();",
      error: "Có",
      result: "—",
      explain: "Lỗi biên dịch: Lớp A không định nghĩa phương thức p(). Muốn gọi được phải cast kiểu về B hoặc D."
    }
  ];

  const [revealed, setRevealed] = useState(Array(initialAnswers.length).fill(false));

  const toggleReveal = (idx) => {
    setRevealed(prev => {
      const copy = [...prev];
      copy[idx] = !copy[idx];
      return copy;
    });
  };

  const revealAll = () => {
    setRevealed(Array(initialAnswers.length).fill(true));
  };

  const hideAll = () => {
    setRevealed(Array(initialAnswers.length).fill(false));
  };

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-3xl p-5 md:p-6 text-stone-850 select-none shadow-sm relative z-10 my-4">
      <span className="text-[9px] font-black text-stone-400 uppercase tracking-widest block mb-4 border-b pb-2 font-mono">
        // IX. QUIZ 2: ĐOẠN CODE & LỖI BIÊN DỊCH / KẾT QUẢ CHẠY
      </span>

      <div className="space-y-5">
        {/* Class hierarchy reference box */}
        <div className="bg-white border border-stone-200 rounded-2xl p-4 space-y-3">
          <span className="text-[9px] font-black text-stone-500 uppercase tracking-wider block font-mono">
            // CẤU TRÚC PHƯƠNG THỨC CÁC LỚP ĐƯỢC MÔ TẢ
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-[10px] font-mono">
            <div className="bg-stone-55 border p-2.5 rounded-xl">
              <div className="font-bold text-stone-800 border-b pb-1 mb-1">Lớp A</div>
              <div className="text-stone-500">m(), n()</div>
            </div>
            <div className="bg-indigo-50/20 border border-indigo-100 p-2.5 rounded-xl">
              <div className="font-bold text-indigo-700 border-b pb-1 mb-1">Lớp B (extends A)</div>
              <div className="text-stone-500">override n()<br/>thêm p()</div>
            </div>
            <div className="bg-stone-55 border p-2.5 rounded-xl">
              <div className="font-bold text-stone-800 border-b pb-1 mb-1">Lớp C (extends A)</div>
              <div className="text-stone-500">override m()</div>
            </div>
            <div className="bg-indigo-50/20 border border-indigo-100 p-2.5 rounded-xl">
              <div className="font-bold text-indigo-700 border-b pb-1 mb-1">Lớp D (extends B)</div>
              <div className="text-stone-500">override m(), n()<br/>thêm p()</div>
            </div>
          </div>
        </div>

        {/* Global rule helper card */}
        <div className="bg-indigo-500/5 border border-indigo-500/10 p-4 rounded-2xl flex gap-3 items-start">
          <div className="p-2 bg-indigo-500/10 rounded-xl text-indigo-650 shrink-0">
            <Award className="w-5 h-5" />
          </div>
          <div className="text-xs space-y-1">
            <h4 className="font-bold text-indigo-950">Quy tắc vàng khi làm bài tập "Kiểu Khai báo vs Kiểu Thực tế"</h4>
            <ul className="list-disc pl-4 space-y-1 text-stone-600 font-semibold leading-relaxed">
              <li><strong>Kiểu khai báo (bên trái):</strong> Quyết định phép gọi phương thức có hợp lệ hay không (lỗi biên dịch hay không).</li>
              <li><strong>Kiểu đối tượng thực sự (bên phải, sau new):</strong> Quyết định phiên bản phương thức nào sẽ thực sự chạy ở runtime (Tính Đa hình).</li>
            </ul>
          </div>
        </div>

        {/* Quiz Table Interactive Panel */}
        <div className="border border-stone-200 rounded-2xl p-4 bg-white space-y-4">
          <div className="flex justify-between items-center flex-wrap gap-2">
            <span className="text-[10px] font-black text-stone-500 uppercase tracking-wider block font-mono">
              // BẢNG BÀI TẬP TỰ ĐÁNH GIÁ (BẤM ĐỂ XEM ĐÁP ÁN)
            </span>
            <div className="flex gap-2">
              <button
                onClick={revealAll}
                className="px-3 py-1 bg-stone-900 hover:bg-stone-800 text-white font-bold text-[10px] rounded-lg border-none cursor-pointer flex items-center gap-1 shadow"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Hiện tất cả</span>
              </button>
              <button
                onClick={hideAll}
                className="px-3 py-1 bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-[10px] rounded-lg border-none cursor-pointer flex items-center gap-1"
              >
                <EyeOff className="w-3.5 h-3.5" />
                <span>Ẩn tất cả</span>
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-stone-200 text-stone-500">
                  <th className="py-2 pr-4 font-black w-[40%]">Đoạn code</th>
                  <th className="py-2 px-4 font-black w-[20%]">Lỗi biên dịch?</th>
                  <th className="py-2 px-4 font-black w-[20%]">Kết quả chạy</th>
                  <th className="py-2 pl-4 font-black w-[20%]">Đáp án & Giải thích</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-150 text-stone-700">
                {initialAnswers.map((item, idx) => (
                  <tr key={idx} className="hover:bg-stone-50/50">
                    <td className="py-3 pr-4 font-mono font-bold text-[10px] text-stone-800">{item.code}</td>
                    
                    <td className="py-3 px-4">
                      {revealed[idx] ? (
                        <span className={`font-bold px-2 py-0.5 rounded text-[10px] ${
                          item.error === "Có" 
                            ? "bg-rose-50 text-rose-700 border border-rose-100" 
                            : "bg-emerald-50 text-emerald-700 border border-emerald-100"
                        }`}>
                          {item.error}
                        </span>
                      ) : (
                        <span className="text-stone-400">❓ Hidden</span>
                      )}
                    </td>

                    <td className="py-3 px-4 font-mono font-bold text-[10px]">
                      {revealed[idx] ? (
                        <span className="text-stone-900">{item.result}</span>
                      ) : (
                        <span className="text-stone-400">❓ Hidden</span>
                      )}
                    </td>

                    <td className="py-3 pl-4">
                      <button
                        onClick={() => toggleReveal(idx)}
                        className={`px-2 py-1 text-[9px] font-bold rounded border cursor-pointer transition-all ${
                          revealed[idx] 
                            ? "bg-stone-150 hover:bg-stone-200 text-stone-700 border-stone-300" 
                            : "bg-indigo-50 hover:bg-indigo-100 text-indigo-750 border-indigo-200"
                        }`}
                      >
                        {revealed[idx] ? "Ẩn giải thích" : "Xem giải thích"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Selected explain display box under table */}
        <div className="space-y-2">
          {initialAnswers.map((item, idx) => (
            revealed[idx] && (
              <div key={idx} className="bg-indigo-50/30 border border-indigo-100 p-3 rounded-xl text-[10px] flex items-start gap-2.5 animate-in slide-in-from-top-1 duration-150">
                <HelpCircle className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-mono font-bold text-stone-855 block mb-0.5">{item.code}</span>
                  <p className="text-stone-600 font-semibold leading-relaxed">{item.explain}</p>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
}
