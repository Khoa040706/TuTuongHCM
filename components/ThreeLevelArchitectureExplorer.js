"use client";

import React, { useState } from "react";
import {
  Layers,
  Eye,
  HardDrive,
  Table,
  ArrowRight,
  Sparkles,
  Database,
  Compass,
  CheckCircle2,
  ShieldCheck,
  Cpu,
  HelpCircle
} from "lucide-react";

export default function ThreeLevelArchitectureExplorer() {
  const [activeLevel, setActiveLevel] = useState("conceptual"); // 'view' | 'conceptual' | 'physical'

  const levels = [
    {
      id: "view",
      levelNum: "1",
      name: "Mức Khung Nhìn (Mức Ngoài)",
      shortName: "Mức Ngoài / View",
      en: "View / External Level",
      icon: Eye,
      accentColor: "blue",
      activeBg: "bg-blue-50/90 border-blue-400 text-blue-950",
      activeRing: "ring-2 ring-blue-500/40 shadow-blue-500/10",
      badge: "Gần gũi với Người Dùng Nhất",
      concept:
        "Là cách nhìn, quan điểm riêng biệt của từng đối tượng người sử dụng đối với CSDL mức khái niệm. Mỗi khung nhìn (View) chỉ hiển thị phần dữ liệu cần thiết và trừu tượng hóa các phần còn lại.",
      independence: "Độc Lập Dữ Liệu Logic (Logical Data Independence): Thay đổi lược đồ khái niệm không làm thay đổi các khung nhìn người dùng nếu dữ liệu cần dùng vẫn tồn tại.",
      details: [
        "Mỗi nhóm người dùng (Sinh viên, Giảng viên, Kế toán) có một Khung nhìn riêng biệt.",
        "Bảo mật tuyệt đối: Ẩn đi các chi tiết nhạy cảm (Sinh viên chỉ xem được Điểm của mình, không thấy Lương của GV).",
        "Có thể tồn tại vô số Khung nhìn khác nhau được xây dựng trên cùng một lược đồ quan niệm."
      ]
    },
    {
      id: "conceptual",
      levelNum: "2",
      name: "Mức Khái Niệm (Mức Quan Niệm)",
      shortName: "Mức Khái Niệm / Schema",
      en: "Conceptual / Logical Schema",
      icon: Table,
      accentColor: "amber",
      activeBg: "bg-amber-50/90 border-amber-400 text-amber-950",
      activeRing: "ring-2 ring-amber-500/40 shadow-amber-500/10",
      badge: "Trung Tâm Trừu Tượng Hóa",
      concept:
        "Mô tả toàn bộ cấu trúc logic của cơ sở dữ liệu cho toàn bộ tổ chức dưới góc nhìn độc lập thiết bị. Đây là sự trừu tượng hóa thế giới thực gần gũi với con người (sơ đồ ER, các quan hệ bảng).",
      independence: "Cầu nối trung gian: Tách biệt hoàn toàn góc nhìn của người dùng ở Mức Ngoài với cách lưu trữ nhị phân ở Mức Trong.",
      details: [
        "Mô tả toàn bộ thực thể, thuộc tính và các mối quan hệ (ER Model) của cả cơ quan/tổ chức.",
        "Thiết lập các quy tắc toàn vẹn dữ liệu (Khóa chính PK, Khóa ngoại FK, ràng buộc Check).",
        "Độc lập hoàn toàn với việc dữ liệu được lưu trên đĩa cứng nào, bằng định dạng tệp tin gì."
      ]
    },
    {
      id: "physical",
      levelNum: "3",
      name: "Mức Vật Lý (Mức Trong)",
      shortName: "Mức Vật Lý / Internal",
      en: "Physical / Internal Level",
      icon: HardDrive,
      accentColor: "emerald",
      activeBg: "bg-emerald-50/90 border-emerald-400 text-emerald-950",
      activeRing: "ring-2 ring-emerald-500/40 shadow-emerald-500/10",
      badge: "Cài Đặt Cụ Thể Trên Ổ Đĩa",
      concept:
        "Mô tả dữ liệu ở mức thấp nhất: cách thức các tệp tin dữ liệu, chỉ mục (Index) và khối bản ghi thực sự được tổ chức và lưu trữ vật lý trên thiết bị lưu trữ (SSD, HDD).",
      independence: "Độc Lập Dữ Liệu Vật Lý (Physical Data Independence): Thay đổi cách tổ chức tệp hoặc nâng cấp ổ đĩa cứng không ảnh hưởng đến cấu trúc lược đồ khái niệm hay các ứng dụng phía trên.",
      details: [
        "Mô tả chi tiết nhị phân: Kích thước khối (Block size), địa chỉ con trỏ bản ghi (Offset), nén và mã hóa.",
        "Quản lý các cấu trúc chỉ mục thông minh (B+ Tree, B-Tree, Hash Table) để tối ưu tốc độ đọc I/O.",
        "Là sự cài đặt thực tế của lược đồ khái niệm lên các hệ thống tệp và vùng nhớ đệm (Buffer)."
      ]
    }
  ];

  const current = levels.find((l) => l.id === activeLevel) || levels[1];

  return (
    <div className="my-8 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden text-slate-800 max-w-full">
      {/* Header - Wrap responsive tránh tràn */}
      <div className="px-4 sm:px-6 py-4 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 min-w-0">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 border border-orange-200 flex items-center justify-center font-bold flex-shrink-0">
            <Layers className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600 block truncate">
              Three-Level Architecture • Mục 2.4
            </span>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 truncate">
              Kiến Trúc 3 Mức ANSI-SPARC
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-2 self-start sm:self-auto flex-shrink-0">
          <span className="text-xs font-mono text-orange-700 px-3 py-1 rounded-lg bg-orange-100/80 border border-orange-200 font-bold whitespace-nowrap">
            ANSI-SPARC Framework
          </span>
        </div>
      </div>

      {/* Concept Definition Bar */}
      <div className="p-4 sm:p-5 bg-orange-50/40 border-b border-slate-200 text-xs text-slate-700 space-y-1">
        <div className="text-orange-700 font-bold flex items-center gap-1.5">
          <Compass className="w-4 h-4 text-orange-600 flex-shrink-0" />
          <span>Mô Hình Dữ Liệu (Data Model) Là Gì?</span>
        </div>
        <p className="text-slate-600 leading-relaxed font-sans">
          Là <strong>sự hình thức hóa toán học</strong>, gồm 2 phần: <strong>1) Ký hiệu mô tả dữ liệu</strong>; và <strong>2) Tập hợp các phép toán</strong> diễn tả ràng buộc trong dữ liệu và các phép xử lý trên dữ liệu.
        </p>
      </div>

      <div className="p-4 sm:p-6 space-y-6 min-w-0">
        {/* Adaptive Hybrid Level Selector: 1 cột trên mobile, 3 cột co giãn trên tablet/laptop (min-w-0 ngăn tràn) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 min-w-0">
          {levels.map((lvl) => {
            const LevelIcon = lvl.icon;
            const isSelected = activeLevel === lvl.id;

            return (
              <button
                key={lvl.id}
                type="button"
                onClick={() => setActiveLevel(lvl.id)}
                className={`text-left p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border transition-all duration-200 relative overflow-hidden min-w-0 flex flex-col justify-between ${
                  isSelected
                    ? `${lvl.activeBg} ${lvl.activeRing} shadow-md`
                    : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/70 text-slate-700"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="w-6 h-6 rounded-lg bg-slate-900/5 font-mono font-extrabold text-xs flex items-center justify-center flex-shrink-0">
                      {lvl.levelNum}
                    </span>
                    <LevelIcon className={`w-5 h-5 flex-shrink-0 ${isSelected ? "text-orange-600" : "text-slate-400"}`} />
                  </div>
                  <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 leading-snug break-words">
                    {lvl.shortName}
                  </h4>
                  <div className="text-[10px] sm:text-[11px] text-slate-500 font-mono mt-0.5 truncate">
                    {lvl.en}
                  </div>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px]">
                  <span className={`font-semibold ${isSelected ? "text-orange-700 font-bold" : "text-slate-500"}`}>
                    {isSelected ? "Đang chọn xem" : "Nhấn để xem"}
                  </span>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? "translate-x-0.5 text-orange-600" : "text-slate-400"}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Detail Card of Selected Level */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/80 border border-slate-200 space-y-4 shadow-sm min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3 min-w-0">
            <div className="flex items-center gap-2 min-w-0">
              <span className="px-2.5 py-0.5 text-xs font-bold rounded-md bg-orange-100 text-orange-800 border border-orange-200 font-mono flex-shrink-0">
                Mức {current.levelNum}
              </span>
              <h4 className="text-sm sm:text-base font-extrabold text-slate-900 truncate">
                {current.name}
              </h4>
            </div>
            <span className="text-xs text-amber-800 font-semibold bg-amber-100/60 px-2.5 py-0.5 rounded-full border border-amber-200/60 self-start sm:self-auto flex-shrink-0">
              {current.badge}
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed font-sans shadow-sm">
            <strong className="text-slate-900">Bản chất học thuật:</strong> {current.concept}
          </div>

          {/* Tính độc lập dữ liệu */}
          <div className="p-3.5 rounded-xl bg-orange-50/60 border border-orange-200/70 text-xs text-orange-950 flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
            <div className="leading-relaxed">
              <strong className="font-bold text-orange-900">Ý nghĩa độc lập dữ liệu:</strong> {current.independence}
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Đặc điểm trọng tâm cần ghi nhớ trong đề thi:
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              {current.details.map((d, i) => (
                <li key={i} className="flex items-start gap-2 bg-white/70 p-2.5 rounded-xl border border-slate-200/60">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modern Interactive SVG Vector Architecture Diagram (Thay thế ASCII <pre>) */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 border border-slate-800 text-white shadow-md min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div className="text-[11px] uppercase tracking-wider text-amber-400 font-bold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Sơ Đồ Tương Tác 3 Mức ANSI-SPARC & Ánh Xạ Dữ Liệu</span>
            </div>
            <span className="text-[10px] text-slate-400 font-mono">
              Vector SVG Responsive • Tự Co Giãn 100%
            </span>
          </div>

          {/* SVG Diagram Canvas */}
          <div className="w-full overflow-hidden rounded-xl bg-slate-950/70 border border-slate-800/80 p-2 sm:p-4">
            <svg
              viewBox="0 0 760 210"
              className="w-full h-auto max-w-full block select-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="viewGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#2563eb" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#0284c7" stopOpacity="0.15" />
                </linearGradient>
                <linearGradient id="conceptGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#d97706" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#b45309" stopOpacity="0.15" />
                </linearGradient>
                <linearGradient id="physGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#059669" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#047857" stopOpacity="0.15" />
                </linearGradient>
                <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#f59e0b" />
                </marker>
              </defs>

              {/* LEVEL 1: EXTERNAL / VIEW */}
              <g
                className="cursor-pointer transition-opacity hover:opacity-90"
                onClick={() => setActiveLevel("view")}
              >
                <rect
                  x="15"
                  y="15"
                  width="180"
                  height="180"
                  rx="14"
                  fill="url(#viewGrad)"
                  stroke={activeLevel === "view" ? "#38bdf8" : "#1e3a8a"}
                  strokeWidth={activeLevel === "view" ? "2.5" : "1.5"}
                />
                <text x="105" y="42" textAnchor="middle" fill="#7dd3fc" fontSize="12" fontWeight="bold" fontFamily="sans-serif">
                  MỨC NGOÀI (VIEW)
                </text>
                {/* 3 User Views */}
                <rect x="30" y="60" width="150" height="32" rx="8" fill="#1e293b" stroke="#334155" />
                <text x="105" y="80" textAnchor="middle" fill="#e2e8f0" fontSize="11" fontFamily="sans-serif">
                  Khung Nhìn 1 (Sinh Viên)
                </text>

                <rect x="30" y="102" width="150" height="32" rx="8" fill="#1e293b" stroke="#334155" />
                <text x="105" y="122" textAnchor="middle" fill="#e2e8f0" fontSize="11" fontFamily="sans-serif">
                  Khung Nhìn 2 (Giảng Viên)
                </text>

                <rect x="30" y="144" width="150" height="32" rx="8" fill="#1e293b" stroke="#334155" />
                <text x="105" y="164" textAnchor="middle" fill="#e2e8f0" fontSize="11" fontFamily="sans-serif">
                  Khung Nhìn n (Kế Toán...)
                </text>
              </g>

              {/* CONNECTING ARROW 1 -> 2 (Ánh xạ Ngoài - Khái niệm) */}
              <path
                d="M 195 105 L 285 105"
                stroke="#f59e0b"
                strokeWidth="2"
                strokeDasharray="4 3"
                markerEnd="url(#arrow)"
              />
              <text x="240" y="93" textAnchor="middle" fill="#fbbf24" fontSize="9" fontFamily="sans-serif">
                Ánh xạ Ngoài-Khái niệm
              </text>
              <text x="240" y="125" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="sans-serif">
                (Độc lập logic)
              </text>

              {/* LEVEL 2: CONCEPTUAL SCHEMA */}
              <g
                className="cursor-pointer transition-opacity hover:opacity-90"
                onClick={() => setActiveLevel("conceptual")}
              >
                <rect
                  x="290"
                  y="15"
                  width="180"
                  height="180"
                  rx="14"
                  fill="url(#conceptGrad)"
                  stroke={activeLevel === "conceptual" ? "#fbbf24" : "#92400e"}
                  strokeWidth={activeLevel === "conceptual" ? "2.5" : "1.5"}
                />
                <text x="380" y="42" textAnchor="middle" fill="#fde68a" fontSize="12" fontWeight="bold" fontFamily="sans-serif">
                  MỨC KHÁI NIỆM
                </text>
                <rect x="305" y="60" width="150" height="60" rx="8" fill="#1e293b" stroke="#334155" />
                <text x="380" y="85" textAnchor="middle" fill="#fed7aa" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                  Lược Đồ Quan Niệm
                </text>
                <text x="380" y="103" textAnchor="middle" fill="#cbd5e1" fontSize="9.5" fontFamily="sans-serif">
                  (ER Model / Relations)
                </text>

                <rect x="305" y="130" width="150" height="46" rx="8" fill="#1e293b" stroke="#334155" />
                <text x="380" y="150" textAnchor="middle" fill="#fed7aa" fontSize="10" fontFamily="sans-serif">
                  Ràng Buộc Toàn Vẹn
                </text>
                <text x="380" y="165" textAnchor="middle" fill="#94a3b8" fontSize="8.5" fontFamily="sans-serif">
                  (PK, FK, Unique, Check)
                </text>
              </g>

              {/* CONNECTING ARROW 2 -> 3 (Ánh xạ Khái niệm - Trong) */}
              <path
                d="M 470 105 L 560 105"
                stroke="#f59e0b"
                strokeWidth="2"
                strokeDasharray="4 3"
                markerEnd="url(#arrow)"
              />
              <text x="515" y="93" textAnchor="middle" fill="#fbbf24" fontSize="9" fontFamily="sans-serif">
                Ánh xạ Khái niệm-Trong
              </text>
              <text x="515" y="125" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="sans-serif">
                (Độc lập vật lý)
              </text>

              {/* LEVEL 3: INTERNAL / PHYSICAL */}
              <g
                className="cursor-pointer transition-opacity hover:opacity-90"
                onClick={() => setActiveLevel("physical")}
              >
                <rect
                  x="565"
                  y="15"
                  width="180"
                  height="180"
                  rx="14"
                  fill="url(#physGrad)"
                  stroke={activeLevel === "physical" ? "#34d399" : "#065f46"}
                  strokeWidth={activeLevel === "physical" ? "2.5" : "1.5"}
                />
                <text x="655" y="42" textAnchor="middle" fill="#a7f3d0" fontSize="12" fontWeight="bold" fontFamily="sans-serif">
                  MỨC VẬT LÝ (TRONG)
                </text>

                <rect x="580" y="60" width="150" height="34" rx="8" fill="#1e293b" stroke="#334155" />
                <text x="655" y="82" textAnchor="middle" fill="#d1fae5" fontSize="10.5" fontFamily="sans-serif">
                  Tổ Chức Tệp & Record
                </text>

                <rect x="580" y="102" width="150" height="34" rx="8" fill="#1e293b" stroke="#334155" />
                <text x="655" y="124" textAnchor="middle" fill="#d1fae5" fontSize="10.5" fontFamily="sans-serif">
                  Chỉ Mục (B+ Tree, Hash)
                </text>

                <rect x="580" y="144" width="150" height="34" rx="8" fill="#1e293b" stroke="#334155" />
                <text x="655" y="166" textAnchor="middle" fill="#a7f3d0" fontSize="10" fontFamily="sans-serif">
                  Ổ Đĩa Cứng (SSD/HDD)
                </text>
              </g>
            </svg>
          </div>

          <div className="mt-3 text-center text-[11px] text-slate-400">
            💡 Mẹo: Nhấn vào bất kỳ tầng nào trên sơ đồ vector ở trên để đồng bộ hiển thị chi tiết học thuật tương ứng.
          </div>
        </div>
      </div>
    </div>
  );
}
