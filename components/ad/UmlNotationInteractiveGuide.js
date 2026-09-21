"use client";
import React, { useState } from "react";
import { 
  User, 
  Circle, 
  Square, 
  Minus, 
  ArrowRight, 
  AlertCircle, 
  CheckCircle2, 
  Info,
  Sparkles,
  BookOpen
} from "lucide-react";

const NOTATIONS = [
  {
    id: "actor",
    name: "Actor (Tác nhân)",
    symbolShape: "Stick Figure",
    meaning: "Đại diện cho một vai trò (Role) do con người hoặc một hệ thống bên ngoài (External System) đảm nhiệm khi tương tác với hệ thống.",
    rules: [
      "Luôn nằm NGOÀI ranh giới hệ thống (Outside System Boundary).",
      "Đại diện cho vai trò (Role), KHÔNG đại diện cho một cá nhân cụ thể (ví dụ: 'Student', không dùng 'Nguyễn Văn A').",
      "Có thể là người (User), phần cứng (Hardware sensor), đồng hồ định kỳ (Timer), hoặc hệ thống ngoài (Banking API)."
    ],
    examTrap: "Bẫy thi cử: Vẽ Actor nằm BÊN TRONG System Boundary là SAI NGHIÊM TRỌNG! Actor luôn luôn nằm bên ngoài.",
    svgRender: (
      <svg className="w-24 h-28 mx-auto" viewBox="0 0 100 120" fill="none" stroke="currentColor">
        {/* Head */}
        <circle cx="50" cy="24" r="16" strokeWidth="3" className="stroke-emerald-600 fill-emerald-50" />
        {/* Body */}
        <line x1="50" y1="40" x2="50" y2="80" strokeWidth="3" className="stroke-emerald-600" />
        {/* Arms */}
        <line x1="20" y1="56" x2="80" y2="56" strokeWidth="3" className="stroke-emerald-600" />
        {/* Legs */}
        <line x1="50" y1="80" x2="26" y2="114" strokeWidth="3" className="stroke-emerald-600" />
        <line x1="50" y1="80" x2="74" y2="114" strokeWidth="3" className="stroke-emerald-600" />
      </svg>
    )
  },
  {
    id: "usecase",
    name: "Use Case (Ca sử dụng)",
    symbolShape: "Hình Elip (Oval)",
    meaning: "Mô tả một đơn vị chức năng hoặc hành vi riêng biệt mà hệ thống thực hiện nhằm mang lại một kết quả quan sát được và có giá trị cho Actor.",
    rules: [
      "Luôn nằm BÊN TRONG ranh giới hệ thống (Inside System Boundary).",
      "Tên gọi BẮT BUỘC theo dạng: Động từ + Cụm danh từ (Verb + Noun phrase).",
      "Phải đại diện cho một mục tiêu hoàn chỉnh (Measurable Goal), không chia nhỏ thành các bước kỹ thuật đơn thuần (như 'Click Button')."
    ],
    examTrap: "Bẫy thi cử: Đặt tên Use Case bằng danh từ đơn thuần (như 'Student', 'Invoice') là SAI. Phải là 'Register Course', 'Pay Invoice'.",
    svgRender: (
      <svg className="w-40 h-24 mx-auto" viewBox="0 0 160 90" fill="none">
        <ellipse cx="80" cy="45" rx="70" ry="35" className="stroke-emerald-600 fill-emerald-50/80" strokeWidth="2.5" />
        <text x="80" y="49" textAnchor="middle" className="fill-emerald-950 font-bold text-[12px] font-sans">
          Register for Course
        </text>
      </svg>
    )
  },
  {
    id: "boundary",
    name: "System Boundary (Ranh giới hệ thống)",
    symbolShape: "Hình chữ nhật (Rectangle)",
    meaning: "Phân định rõ ràng phạm vi (Scope) của hệ thống phần mềm đang xây dựng. Tất cả Use Case phải nằm bên trong, tất cả Actor phải nằm bên ngoài.",
    rules: [
      "Tiêu đề của hộp chữ nhật là Tên của Hệ thống (ở góc trên cùng bên trong hộp).",
      "Xác định ranh giới giữa những gì thuộc trách nhiệm của hệ thống và những gì thuộc môi trường bên ngoài.",
      "Mọi đường kết nối Actor với Use Case đều phải cắt ngang qua đường biên này."
    ],
    examTrap: "Bẫy thi cử: Quên vẽ System Boundary khiến diagram mất đi ý nghĩa phân định Scope và không rõ use case thuộc về hệ thống nào.",
    svgRender: (
      <svg className="w-44 h-28 mx-auto" viewBox="0 0 170 110" fill="none">
        <rect x="10" y="10" width="150" height="90" rx="6" className="stroke-stone-400 stroke-dasharray-none fill-stone-50/50" strokeWidth="2" strokeDasharray="5 5" />
        <text x="20" y="28" className="fill-stone-600 font-bold text-[10px] uppercase font-mono tracking-wider">
          System Boundary
        </text>
        <ellipse cx="85" cy="65" rx="55" ry="24" className="stroke-emerald-600 fill-white" strokeWidth="1.5" />
        <text x="85" y="69" textAnchor="middle" className="fill-emerald-900 font-medium text-[10px]">
          Use Case inside
        </text>
      </svg>
    )
  },
  {
    id: "association",
    name: "Association (Đường liên kết)",
    symbolShape: "Đường nét liền (Solid Line)",
    meaning: "Biểu diễn sự tương tác hai chiều hoặc luồng thông tin giao tiếp giữa Actor và Use Case.",
    rules: [
      "Vẽ bằng đường thẳng NÉT LIỀN (Solid Line), KHÔNG có mũi tên ở 2 đầu (trừ trường hợp đặc biệt).",
      "Nối từ một Actor tới một Use Case.",
      "TUYỆT ĐỐI KHÔNG dùng đường nét liền này để nối trực tiếp giữa 2 Actor với nhau hoặc giữa 2 Use Case với nhau."
    ],
    examTrap: "Bẫy thi cử: Nối trực tiếp 2 Use Case với nhau bằng đường nét liền là SAI QUY TẮC UML! Giữa 2 Use Case chỉ dùng <<include>> hoặc <<extend>>.",
    svgRender: (
      <svg className="w-40 h-24 mx-auto" viewBox="0 0 160 80" fill="none">
        <circle cx="25" cy="40" r="14" className="stroke-emerald-600 fill-emerald-50" strokeWidth="2" />
        <line x1="45" y1="40" x2="105" y2="40" strokeWidth="3" className="stroke-stone-700" />
        <ellipse cx="135" cy="40" rx="22" ry="14" className="stroke-emerald-600 fill-emerald-50" strokeWidth="2" />
      </svg>
    )
  },
  {
    id: "dependency",
    name: "Dependency: <<include>> & <<extend>>",
    symbolShape: "Mũi tên nét đứt có nhãn Stereotype",
    meaning: "Biểu diễn mối quan hệ phụ thuộc giữa 2 Use Case: <<include>> là bắt buộc dùng chung; <<extend>> là mở rộng có điều kiện tại Extension Point.",
    rules: [
      "<<include>>: Mũi tên nét đứt hướng VỀ phía Use Case được tái sử dụng (Base UC ➔ Included UC).",
      "<<extend>>: Mũi tên nét đứt hướng TỪ Use Case mở rộng VỀ Use Case gốc (Extension UC ➔ Base UC).",
      "Bắt buộc phải có cặp ngoặc nhọn guillemets << ... >> quanh từ khóa stereoptype."
    ],
    examTrap: "Bẫy kinh điển: Ngược chiều mũi tên! Rất nhiều người nhầm mũi tên <<extend>> hướng ra ngoài thay vì hướng ngược về use case gốc.",
    svgRender: (
      <svg className="w-48 h-24 mx-auto" viewBox="0 0 200 90" fill="none">
        <ellipse cx="40" cy="45" rx="35" ry="20" className="stroke-emerald-600 fill-white" strokeWidth="1.5" />
        <text x="40" y="49" textAnchor="middle" className="fill-stone-800 text-[9px] font-bold">Base UC</text>

        {/* Dashed line with arrow */}
        <line x1="80" y1="45" x2="115" y2="45" strokeWidth="2" strokeDasharray="4 3" className="stroke-emerald-700" />
        <polygon points="122,45 114,40 114,50" className="fill-emerald-700" />
        <text x="98" y="36" textAnchor="middle" className="fill-emerald-800 font-mono font-bold text-[9px]">
          &lt;&lt;include&gt;&gt;
        </text>

        <ellipse cx="160" cy="45" rx="35" ry="20" className="stroke-emerald-600 fill-white" strokeWidth="1.5" />
        <text x="160" y="49" textAnchor="middle" className="fill-stone-800 text-[9px] font-bold">Included UC</text>
      </svg>
    )
  }
];

export default function UmlNotationInteractiveGuide() {
  const [selectedNotationId, setSelectedNotationId] = useState("actor");
  const activeNotation = NOTATIONS.find((n) => n.id === selectedNotationId) || NOTATIONS[0];

  return (
    <div className="my-8 rounded-3xl border border-stone-200 bg-white p-5 md:p-7 shadow-lg shadow-stone-200/50 transition-all">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-stone-100">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-800 font-mono">
              UML Standard Notations
            </span>
          </div>
          <h3 className="text-base md:text-lg font-black text-stone-900 flex items-center gap-2">
            Bảng Tra Cứu Ký Hiệu Chuẩn UML Use Case Diagram
          </h3>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-stone-500 bg-stone-50 px-3 py-1.5 rounded-full border border-stone-200">
          <Sparkles size={13} className="text-emerald-700" />
          <span>Click vào ký hiệu để xem quy chuẩn</span>
        </div>
      </div>

      {/* 5 Notation Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 my-6">
        {NOTATIONS.map((notation) => {
          const isSelected = notation.id === selectedNotationId;

          return (
            <button
              key={notation.id}
              onClick={() => setSelectedNotationId(notation.id)}
              className={`p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                isSelected
                  ? "border-emerald-600 bg-emerald-50/80 text-emerald-950 font-bold ring-2 ring-emerald-500/20 shadow-xs"
                  : "border-stone-200 bg-stone-50/60 hover:bg-stone-100/80 text-stone-600 font-medium"
              }`}
            >
              <div className="text-[11px] font-mono text-stone-400 mb-1">
                {notation.symbolShape}
              </div>
              <div className="text-xs md:text-sm leading-snug">
                {notation.name.split(" (")[0]}
              </div>
            </button>
          );
        })}
      </div>

      {/* Detail Showcase Card */}
      <div className="rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50/50 via-white to-stone-50/40 p-5 md:p-6 transition-all duration-300">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* SVG Preview Frame */}
          <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-sm flex flex-col items-center justify-center min-h-[160px]">
            <div className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-widest mb-3">
              Ký hiệu chuẩn ISO/IEC
            </div>
            {activeNotation.svgRender}
            <div className="text-xs font-mono font-bold text-emerald-800 mt-2">
              {activeNotation.name}
            </div>
          </div>

          {/* Meaning & Standard Rules */}
          <div className="md:col-span-2 space-y-4">
            <div>
              <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1 font-mono">
                Ý Nghĩa Ngữ Nghĩa (Semantics)
              </div>
              <p className="text-xs md:text-sm text-stone-800 leading-relaxed font-medium">
                {activeNotation.meaning}
              </p>
            </div>

            <div>
              <div className="text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 font-mono flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-emerald-700" />
                <span>Quy Tắc Vẽ & Chuẩn Mực Bắt Buộc</span>
              </div>
              <ul className="space-y-1.5 text-xs text-stone-700 leading-relaxed">
                {activeNotation.rules.map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Exam Trap Callout */}
        <div className="mt-5 p-3.5 rounded-xl bg-amber-50/90 border border-amber-200 flex items-start gap-2.5 text-xs text-amber-950 leading-relaxed">
          <AlertCircle size={16} className="text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold text-amber-900">Lưu Ý Sống Còn Trong Đề Thi: </strong>
            <span>{activeNotation.examTrap}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
