"use client";
import React, { useState } from "react";
import { Info, Code, ShieldAlert, Sparkles } from "lucide-react";

export default function AbstractKeywordCloud() {
  const [selectedWord, setSelectedWord] = useState("abstract");

  const keywords = {
    abstract: {
      role: "Khai báo Lớp hoặc Phương thức trừu tượng.",
      trap: "Khi khai báo phương thức abstract, bắt buộc KHÔNG được có phần thân (không viết {}). Nếu class có phương thức abstract thì class đó bắt buộc phải khai báo abstract.",
      code: "abstract class Bike { abstract void run(); }",
      color: "border-amber-500 text-amber-400 bg-amber-950/20"
    },
    extends: {
      role: "Từ khóa dùng để thiết lập kế thừa giữa lớp con với lớp cha trừu tượng.",
      trap: "Trong Java, một lớp chỉ có thể extends duy nhất một lớp cha (đơn kế thừa).",
      code: "class Honda4 extends Bike { ... }",
      color: "border-blue-500 text-blue-400 bg-blue-950/20"
    },
    implements: {
      role: "Từ khóa dùng để triển khai (hiện thực hóa) một Interface.",
      trap: "Một lớp có thể triển khai (implements) cùng lúc nhiều Interface (đa kế thừa hành vi).",
      code: "class M implements A, B { ... }",
      color: "border-emerald-500 text-emerald-400 bg-emerald-950/20"
    },
    final: {
      role: "Bổ nghĩa cấm ghi đè (override) hoặc cấm kế thừa.",
      trap: "Không bao giờ kết hợp abstract và final với nhau cho cùng một lớp hoặc phương thức. Vì abstract bắt buộc phải kế thừa/ghi đè, còn final cấm kế thừa/ghi đè. Hai từ khóa này xung đột trực tiếp!",
      code: "// ❌ LỖI BIÊN DỊCH:\nabstract final void run();",
      color: "border-rose-500 text-rose-400 bg-rose-950/20"
    },
    static: {
      role: "Khai báo thành viên tĩnh (thuộc về lớp, không phụ thuộc thực thể).",
      trap: "Abstract method không được phép khai báo là static. Vì static method được gọi trực tiếp qua tên Lớp mà không cần tạo đối tượng, trong khi abstract method bắt buộc phải có đối tượng thực tế ở lớp con để liên kết động.",
      code: "// ❌ LỖI BIÊN DỊCH:\nabstract static void run();",
      color: "border-purple-500 text-purple-400 bg-purple-950/20"
    },
    super: {
      role: "Gọi constructor hoặc phương thức của lớp cha.",
      trap: "Lớp con cụ thể khởi tạo sẽ ngầm gọi constructor của lớp cha trừu tượng thông qua super() ở dòng đầu tiên của constructor con.",
      code: "Honda() {\n  super(); // Gọi constructor Bike()\n}",
      color: "border-cyan-500 text-cyan-400 bg-cyan-950/20"
    },
    new: {
      role: "Cấp phát vùng nhớ Heap để khởi tạo một đối tượng cụ thể.",
      trap: "Hoàn toàn cấm sử dụng 'new' trực tiếp với lớp trừu tượng (Abstract class) hoặc Giao diện (Interface).",
      code: "// ❌ LỖI BIÊN DỊCH:\nBike obj = new Bike();",
      color: "border-indigo-500 text-indigo-400 bg-indigo-950/20"
    }
  };

  const activeKeyword = keywords[selectedWord];

  return (
    <div className="bg-[#171614] border border-stone-850 rounded-3xl p-4 md:p-6 my-6 shadow-xl font-sans text-stone-300">
      
      {/* Title */}
      <div className="border-b border-stone-850 pb-3 mb-5 flex items-center justify-between">
        <div>
          <h4 className="text-base font-extrabold text-white flex items-center gap-2">
            ✨ Đám Mây Từ Khóa Tương Tác (Keyword Cloud)
          </h4>
          <p className="text-xs text-stone-500 mt-1">
            Bấm chọn các từ khóa Java cốt lõi bên dưới để phân tích vai trò thiết kế và cạm bẫy phòng thi.
          </p>
        </div>
        <Sparkles className="w-6 h-6 text-amber-500 animate-pulse hidden sm:block" />
      </div>

      {/* Cloud Tags area */}
      <div className="flex flex-wrap gap-2.5 justify-center py-3 bg-[#23221f] rounded-2xl p-4 mb-5 border border-stone-800 shadow-inner">
        {Object.keys(keywords).map((word) => {
          const isSelected = selectedWord === word;
          const wordData = keywords[word];
          return (
            <button
              key={word}
              onClick={() => setSelectedWord(word)}
              className={`px-3.5 py-1.5 rounded-xl border text-xs font-mono font-bold cursor-pointer transition-all hover:scale-105 ${
                isSelected
                  ? wordData.color + " shadow-md scale-105 font-black border-2"
                  : "border-stone-800 bg-[#1e1d1a] hover:border-stone-700 text-stone-400"
              }`}
            >
              {word}
            </button>
          );
        })}
      </div>

      {/* Inspector Panel */}
      <div className="bg-[#1e1d1a] border border-stone-850 rounded-2xl p-4 md:p-5 grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch shadow-lg">
        
        {/* Left Column: Description & Trap */}
        <div className="md:col-span-7 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <span className="text-[10px] text-amber-500 font-bold uppercase tracking-wider block font-sans">
              Vai trò từ khóa
            </span>
            <h5 className="text-sm font-black text-white font-mono">keyword "{selectedWord}"</h5>
            <p className="text-xs text-stone-300 leading-relaxed">
              {activeKeyword.role}
            </p>
          </div>

          <div className="bg-rose-950/20 border border-rose-900/50 rounded-xl p-3.5 space-y-1">
            <span className="text-rose-400 text-[10px] font-black uppercase tracking-wider flex items-center gap-1 font-sans">
              <ShieldAlert className="w-3.5 h-3.5 shrink-0" /> Cạm bẫy thi trắc nghiệm (Exam Trap)
            </span>
            <p className="text-[11px] text-rose-300/90 leading-relaxed italic">
              {activeKeyword.trap}
            </p>
          </div>
        </div>

        {/* Right Column: Code block */}
        <div className="md:col-span-5 flex flex-col justify-between bg-[#151412] border border-stone-850 p-4 rounded-xl shadow-inner min-h-[140px]">
          <div className="space-y-1">
            <span className="text-[10px] text-stone-500 font-bold uppercase tracking-wider flex items-center gap-1 font-sans border-b border-stone-850 pb-1 mb-2">
              <Code className="w-3.5 h-3.5 text-stone-500" /> Minh họa dòng code
            </span>
            <pre className="text-[10px] font-mono text-stone-200 whitespace-pre-wrap leading-relaxed">
              {activeKeyword.code}
            </pre>
          </div>

          <div className="text-[9px] text-stone-600 text-right font-mono mt-3">
            context: java_oop_keywords
          </div>
        </div>

      </div>

    </div>
  );
}
