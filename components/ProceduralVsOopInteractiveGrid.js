"use client";
import React, { useState } from "react";

export default function ProceduralVsOopInteractiveGrid() {
  const [selectedCriteria, setSelectedCriteria] = useState("world_view"); // world_view, data_func, access, concepts

  const comparisonData = {
    world_view: {
      title: "Thế giới quan (Cách tiếp cận)",
      icon: "🌍",
      procedural: {
        text: "Chương trình là quá trình biến đổi dữ liệu thông qua chuỗi các hàm.",
        visual: "Dữ liệu ➔ Hàm A ➔ Hàm B ➔ Kết quả"
      },
      oop: {
        text: "Chương trình là một tập hợp các đối tượng (objects) độc lập tương tác.",
        visual: "Đối tượng A ⟷ Tương tác ⟷ Đối tượng B"
      }
    },
    data_func: {
      title: "Mối quan hệ giữa Dữ liệu & Hàm",
      icon: "⚙️",
      procedural: {
        text: "Dữ liệu và Hàm tách biệt hoàn toàn. Dữ liệu được chứa trong struct, hàm nằm độc lập bên ngoài.",
        visual: "struct BankAcct (Chỉ chứa biến)  ≠  void withdraw() (Hàm ngoài)"
      },
      oop: {
        text: "Dữ liệu và Hàm được gắn chặt và bao bọc chung với nhau bên trong đối tượng (Encapsulation).",
        visual: "class BankAccount { private balance + public withdraw() }"
      }
    },
    access: {
      title: "Quyền kiểm soát & Truy cập dữ liệu",
      icon: "🔒",
      procedural: {
        text: "Truy cập công khai. Bất kỳ hàm nào trong chương trình cũng có thể đọc và sửa đổi trực tiếp dữ liệu.",
        visual: "acct.balance = -999999; // ❌ Dễ bị can thiệp trái phép"
      },
      oop: {
        text: "Có kiểm soát chặt chẽ. Dữ liệu được bảo vệ (private), chỉ sửa đổi được qua các phương thức hợp lệ (public).",
        visual: "acct.setBalance(100); // ✔️ Kiểm duyệt hợp lệ trước khi gán"
      }
    },
    concepts: {
      title: "Các khái niệm lập trình chính",
      icon: "🎓",
      procedural: {
        text: "Tập trung vào cấu trúc dữ liệu (struct), con trỏ (pointers) và chia nhỏ chương trình thành các hàm/thủ tục.",
        visual: "Functions ➔ Pointers ➔ Global Structs"
      },
      oop: {
        text: "Xoay quanh 4 trụ cột cốt lõi: Đóng gói (Encapsulation), Kế thừa (Inheritance), Trừu tượng (Abstraction), Đa hình (Polymorphism).",
        visual: "Encapsulation ➔ Inheritance ➔ Abstraction ➔ Polymorphism"
      }
    }
  };

  const active = comparisonData[selectedCriteria];

  return (
    <div className="bg-stone-55 border border-stone-200 rounded-3xl p-4 md:p-6 my-6 shadow-sm font-sans text-stone-850">
      
      {/* Header */}
      <div className="border-b border-stone-200 pb-3 mb-5">
        <h4 className="text-base font-extrabold text-stone-900">
          ⚖️ So Sánh Trực Quan: Procedural vs Lập Trình OOP
        </h4>
        <p className="text-xs text-stone-500 mt-1">
          Bấm chọn các tiêu chí so sánh động bên dưới để đối chiếu cấu trúc tư duy của hai hệ tư tưởng lập trình lớn.
        </p>
      </div>

      {/* Selector Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {Object.keys(comparisonData).map((key) => {
          const item = comparisonData[key];
          const isActive = selectedCriteria === key;
          return (
            <div
              key={key}
              onClick={() => setSelectedCriteria(key)}
              className={`p-3 border rounded-2xl cursor-pointer text-center transition-all ${
                isActive
                  ? "border-amber-500 bg-amber-50/15 shadow-sm scale-[1.02]"
                  : "border-stone-200 bg-white hover:border-stone-300"
              }`}
            >
              <div className="text-lg mb-1">{item.icon}</div>
              <div className={`text-[10px] font-black uppercase tracking-wider ${isActive ? "text-amber-950" : "text-stone-550"}`}>
                {key.replace("_", " ")}
              </div>
              <div className="text-[10px] text-stone-400 mt-1 font-bold line-clamp-1">{item.title}</div>
            </div>
          );
        })}
      </div>

      {/* Comparison Detail Panel */}
      <div className="bg-[#1e1d1a] border border-[#2a2926] rounded-2xl p-4 md:p-5 text-stone-300 shadow-md">
        <div className="text-[10px] text-amber-400 uppercase font-black tracking-wider mb-4 border-b border-stone-800 pb-2">
          Chi tiết tiêu chí: {active.title}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Procedural Column */}
          <div className="space-y-3">
            <span className="bg-rose-950/40 text-rose-450 border border-rose-900/50 text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded">
              Procedural Paradigm (VD: C)
            </span>
            <p className="text-xs text-stone-350 leading-relaxed min-h-[50px]">
              {active.procedural.text}
            </p>
            <div className="bg-[#121110] border border-stone-850 p-2.5 rounded-xl font-mono text-[10px] text-rose-350">
              {active.procedural.visual}
            </div>
          </div>

          {/* OOP Column */}
          <div className="space-y-3">
            <span className="bg-emerald-950/40 text-emerald-450 border border-emerald-900/50 text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded">
              OOP Paradigm (VD: Java)
            </span>
            <p className="text-xs text-stone-350 leading-relaxed min-h-[50px]">
              {active.oop.text}
            </p>
            <div className="bg-[#121110] border border-stone-850 p-2.5 rounded-xl font-mono text-[10px] text-emerald-350">
              {active.oop.visual}
            </div>
          </div>

        </div>
      </div>

      {/* Pros & Cons Table */}
      <div className="mt-6 border-t border-stone-200 pt-5">
        <div className="text-xs font-extrabold text-stone-900 mb-3">🛡️ Đánh giá ưu nhược điểm ôn thi:</div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
          
          {/* Procedural Pros/Cons */}
          <div className="bg-stone-100/50 border border-stone-200 rounded-2xl p-4 space-y-2">
            <span className="font-extrabold text-stone-800 block">Procedural (C)</span>
            <ul className="space-y-1.5 text-stone-600 list-disc pl-4 leading-relaxed text-[11px]">
              <li><strong className="text-emerald-700">Ưu điểm:</strong> Ít chi phí thiết kế, tương thích tốt với luồng thực thi phần cứng CPU, hiệu suất chạy nhanh tối đa.</li>
              <li><strong className="text-rose-700">Nhược điểm:</strong> Cực kỳ khó bảo trì khi dự án lớn, khó tái sử dụng code, dữ liệu không được bảo mật (dễ bị thay đổi trái phép).</li>
            </ul>
          </div>

          {/* OOP Pros/Cons */}
          <div className="bg-stone-100/50 border border-stone-200 rounded-2xl p-4 space-y-2">
            <span className="font-extrabold text-stone-800 block">OOP (Java)</span>
            <ul className="space-y-1.5 text-stone-600 list-disc pl-4 leading-relaxed text-[11px]">
              <li><strong className="text-emerald-700">Ưu điểm:</strong> Dễ thiết kế vì ánh xạ sát thế giới thực, có tính module hóa cao (dễ bảo trì), dễ mở rộng và tái sử dụng code thông qua kế thừa.</li>
              <li><strong className="text-rose-700">Nhược điểm:</strong> Chương trình tốn tài nguyên bộ nhớ hơn, code viết dài hơn, chi phí thiết kế cấu trúc ban đầu cao hơn.</li>
            </ul>
          </div>

        </div>
      </div>

    </div>
  );
}
