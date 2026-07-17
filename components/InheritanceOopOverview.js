"use client";
import React, { useState } from "react";
import { ShieldAlert, GitBranch, Layers, Cpu, Pin, Award, BookOpen } from "lucide-react";

export default function InheritanceOopOverview() {
  const [selectedPillar, setSelectedPillar] = useState("inheritance");
  const [activeConcept, setActiveConcept] = useState("subclassing");

  const pillars = [
    {
      id: "encapsulation",
      title: "Encapsulation",
      viTitle: "Đóng gói",
      icon: <ShieldAlert className="w-5 h-5 text-amber-500" />,
      bgClass: "hover:border-amber-400 border-stone-200 bg-white",
      activeClass: "border-amber-500 bg-amber-500/5 text-amber-950 shadow-sm",
      badgeColor: "bg-amber-100 text-amber-700",
      desc: "Giới hạn quyền truy cập trực tiếp vào dữ liệu bên trong của đối tượng. Trạng thái nội bộ được bảo vệ (private) và chỉ được tiếp cận qua các hàm getter/setter công khai.",
      tip: "Đã học ở Bài 5 (Access Modifiers & Encapsulation)."
    },
    {
      id: "abstraction",
      title: "Abstraction",
      viTitle: "Trừu tượng",
      icon: <Layers className="w-5 h-5 text-purple-500" />,
      bgClass: "hover:border-purple-400 border-stone-200 bg-white",
      activeClass: "border-purple-500 bg-purple-500/5 text-purple-950 shadow-sm",
      badgeColor: "bg-purple-100 text-purple-700",
      desc: "Ẩn đi những chi tiết xử lý nội bộ phức tạp, chỉ hiển thị những giao diện/tính năng thiết yếu cho lớp gọi. Triển khai bằng Abstract Class hoặc Interface.",
      tip: "Sẽ học chi tiết ở các chương tiếp theo (Bài 8)."
    },
    {
      id: "inheritance",
      title: "Inheritance",
      viTitle: "Kế thừa",
      icon: <GitBranch className="w-5 h-5 text-indigo-500" />,
      bgClass: "hover:border-indigo-400 border-stone-200 bg-white",
      activeClass: "border-indigo-500 bg-indigo-500/5 text-indigo-950 shadow-sm shadow-indigo-500/10",
      badgeColor: "bg-indigo-100 text-indigo-700",
      desc: "Cho phép một lớp mới (lớp con - subclass) thừa hưởng toàn bộ biến thành viên và phương thức của một lớp đã tồn tại (lớp cha - superclass) để tái sử dụng mã nguồn và phát triển mở rộng.",
      tip: "Trọng tâm cốt lõi của Bài giảng 6 & 7 hiện tại!",
      isHot: true
    },
    {
      id: "polymorphism",
      title: "Polymorphism",
      viTitle: "Đa hình",
      icon: <Cpu className="w-5 h-5 text-blue-500" />,
      bgClass: "hover:border-blue-400 border-stone-200 bg-white",
      activeClass: "border-blue-500 bg-blue-500/5 text-blue-950 shadow-sm",
      badgeColor: "bg-blue-100 text-blue-700",
      desc: "Cho phép các đối tượng thuộc các lớp con khác nhau phản hồi cùng một thông điệp (gọi trùng tên hàm) theo những cách khác nhau tại thời điểm chạy (Runtime Polymorphism).",
      tip: "Học đồng thời trong chương Kế thừa thông qua ghi đè phương thức."
    }
  ];

  const concepts = {
    subclassing: {
      title: "1. Subclassing (Tạo lớp con)",
      desc: "Quá trình mở rộng một lớp hiện có để tạo lớp chuyên biệt hơn bằng từ khóa <code>extends</code>.",
      snippet: `// Superclass (Lớp cha)
class NhanVien {
    String hoTen;
    double luongCoBan;
}

// Subclass (Lớp con)
class TruongPhong extends NhanVien {
    double luongTrachNhiem; // Thêm thuộc tính đặc thù
}`
    },
    overriding: {
      title: "2. Overriding (Ghi đè phương thức)",
      desc: "Định nghĩa lại tại lớp con một phương thức đã có ở lớp cha để tùy biến hành vi của lớp con.",
      snippet: `class NhanVien {
    double tinhLuong() {
        return luongCoBan;
    }
}

class TruongPhong extends NhanVien {
    @Override
    double tinhLuong() {
        // Ghi đè: Cộng thêm lương trách nhiệm
        return luongCoBan + luongTrachNhiem;
    }
}`
    }
  };

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-3xl p-5 md:p-6 text-stone-850 select-none shadow-sm relative z-10 my-4">
      <span className="text-[9px] font-black text-stone-400 uppercase tracking-widest block mb-4 border-b pb-2 font-mono">
        // 4 TRỤ CỘT CỦA LẬP TRÌNH HƯỚNG ĐỐI TƯỢNG (OOP)
      </span>

      {/* Grid of 4 pillars */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
        {pillars.map((p) => {
          const isActive = selectedPillar === p.id;
          return (
            <button
              key={p.id}
              onClick={() => setSelectedPillar(p.id)}
              className={`p-3.5 rounded-2xl border text-left cursor-pointer transition-all duration-200 flex flex-col justify-between relative ${
                isActive ? p.activeClass : p.bgClass
              }`}
            >
              {p.isHot && (
                <span className="absolute -top-2 -right-1 bg-rose-500 text-white text-[7px] font-extrabold px-1.5 py-0.5 rounded-full shadow animate-pulse">
                  TRỌNG TÂM
                </span>
              )}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <div className={`p-1 rounded-lg ${isActive ? "bg-white shadow-sm" : "bg-stone-100"}`}>
                    {p.icon}
                  </div>
                </div>
                <h4 className="text-xs font-black tracking-tight text-stone-850 block">
                  {p.title}
                </h4>
                <span className="text-[9px] font-bold text-stone-400 block -mt-1">
                  ({p.viTitle})
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Pillar detail panel */}
      <div className="bg-white border border-stone-200/80 rounded-2xl p-4 mb-5 transition-all duration-300">
        {pillars.map((p) => {
          if (p.id !== selectedPillar) return null;
          return (
            <div key={p.id} className="space-y-2 animate-in fade-in duration-300">
              <div className="flex items-center gap-2">
                <span className={`px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-wider ${p.badgeColor}`}>
                  {p.title}
                </span>
                <span className="text-[10px] text-stone-400 font-bold font-mono">// Trụ cột OOP</span>
              </div>
              <p className="text-xs leading-relaxed font-semibold text-stone-700">
                {p.desc}
              </p>
              <div className="text-[10px] text-indigo-650 font-bold bg-indigo-50/50 p-2 rounded-lg border border-indigo-100/50 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 shrink-0" />
                <span>{p.tip}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Two key concepts in Inheritance */}
      <div className="border border-stone-200/60 rounded-2xl p-4 bg-white">
        <span className="text-[9px] font-black text-stone-400 uppercase tracking-widest block mb-3 font-mono">
          // HAI KHÁI NIỆM CHÍNH TRONG KẾ THỪA
        </span>

        {/* Toggle tabs */}
        <div className="flex bg-stone-100 p-1 rounded-xl mb-3 gap-1">
          <button
            onClick={() => setActiveConcept("subclassing")}
            className={`flex-1 py-1.5 text-[10px] font-extrabold rounded-lg border-none cursor-pointer transition-all ${
              activeConcept === "subclassing" ? "bg-white text-stone-900 shadow-sm" : "text-stone-500 hover:text-stone-850"
            }`}
          >
            Subclassing (Tạo lớp con)
          </button>
          <button
            onClick={() => setActiveConcept("overriding")}
            className={`flex-1 py-1.5 text-[10px] font-extrabold rounded-lg border-none cursor-pointer transition-all ${
              activeConcept === "overriding" ? "bg-white text-stone-900 shadow-sm" : "text-stone-500 hover:text-stone-850"
            }`}
          >
            Overriding (Ghi đè)
          </button>
        </div>

        {/* Concept details */}
        <div className="space-y-3">
          <p className="text-[11px] leading-relaxed font-semibold text-stone-600">
            <strong>{concepts[activeConcept].title}</strong>: <span dangerouslySetInnerHTML={{ __html: concepts[activeConcept].desc }} />
          </p>
          <pre className="font-mono text-[9px] text-stone-700 bg-stone-50 p-3 rounded-xl border border-stone-150 leading-relaxed overflow-x-auto">
            {concepts[activeConcept].snippet}
          </pre>
        </div>
      </div>

      {/* Ghi nhớ cảnh báo thi cử */}
      <div className="mt-5 bg-amber-500/5 border border-amber-500/25 p-4 rounded-2xl text-stone-800 flex items-start gap-3 shadow-sm hover:scale-[1.01] transition-transform duration-200">
        <div className="p-2 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-600 shrink-0">
          <Award className="w-4 h-4 animate-pulse" />
        </div>
        <div className="text-xs space-y-1">
          <span className="text-[9px] font-black text-amber-600 uppercase tracking-widest block font-mono">// 📌 GHI NHỚ PHÒNG THI</span>
          <p className="font-bold text-stone-700 leading-relaxed">
            4 trụ cột OOP gồm: <strong className="text-amber-700">Encapsulation</strong>, <strong className="text-amber-700">Abstraction</strong>, <strong className="text-amber-700">Inheritance</strong>, và <strong className="text-amber-700">Polymorphism</strong>. Đây là bộ câu hỏi kinh điển luôn luôn xuất hiện trong các bài kiểm tra lý thuyết và phỏng vấn nghề nghiệp!
          </p>
        </div>
      </div>
    </div>
  );
}
