"use client";
import React, { useState } from "react";
import { BookOpen, Layers, GitPullRequest, Award, ChevronDown, ChevronUp, Code, Check } from "lucide-react";

export default function AbstractSummaryDashboard() {
  const [activeCard, setActiveCard] = useState(null);

  const summaryPoints = [
    {
      title: "1. Abstraction (Trừu tượng hóa)",
      short: "Ẩn đi chi tiết cài đặt phức tạp, chỉ lộ ra các chức năng cốt lõi cho người sử dụng.",
      icon: BookOpen,
      iconColor: "text-blue-500 bg-blue-50 border-blue-100",
      color: "border-blue-200 hover:border-blue-400 bg-white",
      activeBg: "bg-blue-50/30 border-blue-400 shadow-md",
      details: [
        "Giúp người dùng tập trung vào: <strong>Object làm được gì (Interface)</strong> thay vì <strong>làm như thế nào (Implementation)</strong>.",
        "Đạt được thông qua hai cách: <strong>Abstract Class</strong> (0% - 100%) hoặc <strong>Interface</strong> (100% trừu tượng)."
      ],
      code: `// Giao diện (Interface)
interface Sender {
  void sendSMS(String msg);
}

// Người dùng chỉ gọi phương thức sendSMS()
// mà không cần biết cơ chế GSM/GSM mạng ngầm.`
    },
    {
      title: "2. Quy tắc Abstract Class",
      short: "Khai báo với từ khóa abstract, không thể khởi tạo đối tượng trực tiếp bằng toán tử new.",
      icon: Layers,
      iconColor: "text-orange-500 bg-orange-50 border-orange-100",
      color: "border-orange-200 hover:border-orange-400 bg-white",
      activeBg: "bg-orange-50/30 border-orange-400 shadow-md",
      details: [
        "Có thể chứa cả phương thức trừu tượng (không thân) và phương thức thông thường (có thân).",
        "Có thể chứa thuộc tính (fields), constructor (chạy khi lớp con gọi super()) và phương thức tĩnh (static), hằng số (final)."
      ],
      code: `abstract class Bike {
  int gear; // data member
  Bike() { gear = 5; } // constructor
  abstract void run(); // abstract method
  void stop() { System.out.println("Stopped"); } // concrete method
}`
    },
    {
      title: "3. Trách nhiệm Lớp con",
      short: "Lớp con cụ thể kế thừa abstract class bắt buộc phải ghi đè (override) toàn bộ abstract method.",
      icon: GitPullRequest,
      iconColor: "text-rose-500 bg-rose-50 border-rose-100",
      color: "border-rose-200 hover:border-rose-400 bg-white",
      activeBg: "bg-rose-50/30 border-rose-400 shadow-md",
      details: [
        "Nếu lớp con không override hết các phương thức trừu tượng của lớp cha, lớp con đó <strong>bắt buộc phải khai báo là abstract class</strong>.",
        "Phương thức trừu tượng ghi đè ở lớp con không được phép thu hẹp phạm vi truy cập (access modifier) so với lớp cha."
      ],
      code: `class Honda extends Bike {
  // Bắt buộc override run() nếu Honda là concrete class:
  void run() {
    System.out.println("Honda is running safely..");
  }
}`
    },
    {
      title: "4. Cài đặt Interface một phần",
      short: "Abstract class đóng vai trò cầu nối, có thể cài đặt sẵn một số phương thức của Interface.",
      icon: Award,
      iconColor: "text-purple-500 bg-purple-50 border-purple-100",
      color: "border-purple-200 hover:border-purple-400 bg-white",
      activeBg: "bg-purple-50/30 border-purple-400 shadow-md",
      details: [
        "Cho phép gom chung các đoạn code cài đặt trùng lặp của các lớp con lại một nơi (tại Abstract class).",
        "Lớp con cụ thể kế thừa tiếp theo sẽ chỉ phải cài đặt các phương thức còn thiếu, giảm thiểu trùng lặp mã nguồn."
      ],
      code: `interface A { void a(); void b(); }

// Abstract class cài đặt trước phương thức a():
abstract class B implements A {
  public void a() { System.out.println("I am a"); }
}

// Lớp con cụ thể M chỉ cần cài đặt b():
class M extends B {
  public void b() { System.out.println("I am b"); }
}`
    }
  ];

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-3xl p-4 md:p-6 my-6 shadow-sm font-sans text-stone-850">
      
      {/* Title */}
      <div className="border-b border-stone-200 pb-3 mb-5">
        <h4 className="text-base font-extrabold text-stone-900 flex items-center gap-2">
          📊 Bảng Tóm Tắt Lý Thuyết (Summary Dashboard)
        </h4>
        <p className="text-xs text-stone-500 mt-1">
          Bấm vào từng thẻ chuyên đề để mở rộng chi tiết giải thích và xem nhanh mã nguồn ví dụ minh họa tương ứng.
        </p>
      </div>

      {/* Grid Cards layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {summaryPoints.map((point, idx) => {
          const isActive = activeCard === idx;
          const IconComponent = point.icon;

          return (
            <div
              key={idx}
              onClick={() => setActiveCard(isActive ? null : idx)}
              className={`border rounded-2xl p-4 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                isActive ? point.activeBg : point.color
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2 rounded-xl border ${point.iconColor}`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] text-stone-400 font-bold uppercase font-mono">
                    {isActive ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </div>

                <h5 className="text-xs font-extrabold text-stone-900 mb-1.5">{point.title}</h5>
                <p className="text-[11px] text-stone-600 leading-relaxed">{point.short}</p>
              </div>

              {/* Expandable Section */}
              {isActive && (
                <div className="mt-4 pt-4 border-t border-stone-200/60 space-y-3 animate-[fadeIn_0.3s_ease-out]">
                  
                  {/* Bullet details */}
                  <div className="space-y-2">
                    {point.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-[11px] text-stone-700 leading-relaxed">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span dangerouslySetInnerHTML={{ __html: detail }} />
                      </div>
                    ))}
                  </div>

                  {/* Code box */}
                  <div className="bg-[#1e1d1a] border border-stone-800 rounded-xl p-3 font-mono text-[9px] text-stone-300 shadow-inner">
                    <div className="text-stone-500 font-bold border-b border-stone-850 pb-1 mb-1.5 flex items-center gap-1.5">
                      <Code className="w-3.5 h-3.5 text-stone-500" /> Java Code Snippet
                    </div>
                    <pre className="whitespace-pre overflow-x-auto leading-relaxed">{point.code}</pre>
                  </div>

                </div>
              )}

              {!isActive && (
                <div className="text-[10px] text-stone-400 text-right mt-3 font-medium">
                  Nhấp để xem chi tiết & code ví dụ ➔
                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
}
