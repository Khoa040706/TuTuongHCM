"use client";
import React, { useState } from "react";
import { Info, HelpCircle, Code, CornerDownRight, RotateCw, AlertTriangle } from "lucide-react";

export default function AbstractNotationsFlashcards() {
  const [flipped, setFlipped] = useState({ 0: false, 1: false, 2: false });

  const handleCardClick = (idx) => {
    setFlipped((prev) => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const cardsData = [
    {
      title: "Quy tắc 1: Khai báo lớp khi có abstract method",
      frontText: "Nếu một lớp chứa ít nhất một phương thức abstract (chưa cài đặt), thì lớp đó bắt buộc phải khai báo là gì?",
      backCode: `// ❌ LỖI BIÊN DỊCH: Class chưa khai báo abstract
class Bike {
  abstract void run(); // Lỗi!
}

// ✔️ ĐÚNG:
abstract class Bike {
  abstract void run();
}`,
      concept: "Lớp chứa phương thức trừu tượng tự bản thân nó cũng là trừu tượng, vì thế không thể tạo đối tượng trực tiếp. Java bắt buộc phải khai báo từ khóa abstract ở cấp độ lớp."
    },
    {
      title: "Quy tắc 2: Ràng buộc của lớp con kế thừa",
      frontText: "Khi một lớp con kế thừa từ một lớp trừu tượng (Abstract Class), lớp con bắt buộc phải thực hiện hành động gì với các abstract method?",
      backCode: `// Lớp cha trừu tượng
abstract class Bike { abstract void run(); }

// ❌ LỖI: Honda không override run()
class Honda extends Bike { }

// ✔️ ĐÚNG:
class Honda extends Bike {
  void run() { System.out.println("chạy..."); }
}`,
      concept: "Lớp con cụ thể bắt buộc phải cung cấp phần thân (cài đặt thực tế) cho TẤT CẢ các phương thức trừu tượng của lớp cha, trừ khi bản thân lớp con đó cũng được khai báo là abstract class."
    },
    {
      title: "Quy tắc 3: Cài đặt Interface một phần",
      frontText: "Nếu một lớp kế thừa Interface nhưng chỉ muốn cài đặt một vài phương thức (chứ không phải tất cả), lớp đó phải khai báo thế nào?",
      backCode: `interface A { void a(); void b(); }

// ✔️ ĐÚNG: Abstract class cài đặt một phần
abstract class B implements A {
  public void a() { System.out.println("Chỉ cài đặt a()"); }
  // Không cần cài đặt b() ở đây!
}

class M extends B {
  public void b() { System.out.println("Cài đặt b() còn lại"); }
}`,
      concept: "Abstract class là công cụ tuyệt vời để trung chuyển. Nó có thể hiện thực trước các phương thức chung của Interface, để lại các phương thức đặc thù cho các lớp con cụ thể cài đặt sau."
    }
  ];

  return (
    <div className="bg-stone-55 border border-stone-200 rounded-3xl p-4 md:p-6 my-6 shadow-sm font-sans text-stone-850">
      
      {/* Header */}
      <div className="border-b border-stone-200 pb-3 mb-6">
        <span className="bg-amber-100 text-amber-800 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md">
          Lưu ý quan trọng (Notations)
        </span>
        <h4 className="text-base font-extrabold text-stone-900 mt-1.5 flex items-center gap-2">
          🛡️ Thẻ Ghi Nhớ Quy Tắc Abstract Class (3D Flashcards)
        </h4>
        <p className="text-xs text-stone-500 mt-1">
          Nhấp vào mỗi thẻ để lật ngược 180° xem ví dụ code cạm bẫy <code>❌ SAI</code> vs <code>✔️ ĐÚNG</code> giúp ghi nhớ phòng thi.
        </p>
      </div>

      {/* 3D Grid cards container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cardsData.map((card, idx) => {
          const isFlipped = flipped[idx];

          return (
            <div
              key={idx}
              onClick={() => handleCardClick(idx)}
              className="perspective-1000 w-full h-[320px] cursor-pointer group"
            >
              <div
                className={`relative w-full h-full duration-500 transform-style-3d ${
                  isFlipped ? "rotate-y-180" : ""
                }`}
              >
                
                {/* FRONT FACE */}
                <div className="absolute w-full h-full backface-hidden bg-white border border-stone-200 rounded-2xl p-5 flex flex-col justify-between shadow-sm hover:border-amber-350 hover:shadow-md transition-all">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="bg-stone-100 text-stone-600 text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded">
                        Quy tắc #{idx + 1}
                      </span>
                      <RotateCw className="w-3.5 h-3.5 text-stone-400 animate-pulse" />
                    </div>
                    <h5 className="text-xs font-bold text-stone-900 border-b border-stone-150 pb-2 leading-relaxed">
                      {card.title}
                    </h5>
                    <p className="text-xs text-stone-650 leading-relaxed font-semibold italic">
                      "{card.frontText}"
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-[10px] text-amber-600 font-bold bg-amber-50 p-2 rounded-xl border border-amber-100">
                    <HelpCircle className="w-4 h-4 shrink-0" />
                    <span>Click để xem đáp án & code ví dụ</span>
                  </div>
                </div>

                {/* BACK FACE */}
                <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-[#171614] border border-stone-850 rounded-2xl p-4 flex flex-col justify-between shadow-inner text-stone-300">
                  <div className="space-y-2 flex-1 overflow-y-auto max-h-[220px]">
                    <div className="flex items-center justify-between border-b border-stone-850 pb-1 mb-2">
                      <span className="text-amber-500 font-mono text-[9px] uppercase tracking-wider">
                        Ví dụ minh họa
                      </span>
                      <span className="text-stone-500 text-[9px]">Lật lại ↩️</span>
                    </div>
                    
                    {/* Code block with simple syntax style */}
                    <pre className="text-[9px] font-mono leading-relaxed bg-[#23221f] p-2 rounded border border-stone-800 overflow-x-auto whitespace-pre">
                      {card.backCode}
                    </pre>

                    <div className="text-[10px] text-stone-400 font-sans leading-relaxed pt-1.5 border-t border-stone-850 flex items-start gap-1">
                      <CornerDownRight className="w-3 h-3 text-amber-500 shrink-0 mt-0.5" />
                      <span>{card.concept}</span>
                    </div>
                  </div>
                  
                  <div className="mt-2 text-stone-550 text-[9px] text-center font-mono uppercase tracking-wide">
                    Thẻ quy tắc {idx + 1}
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* global custom styles for 3D card flips */}
      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>

    </div>
  );
}
