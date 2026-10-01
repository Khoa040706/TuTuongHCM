"use client";

import React, { useState } from "react";
import {
  Diamond,
  Square,
  Circle,
  KeyRound,
  Layers,
  Sparkles,
  CheckCircle2,
  HelpCircle,
  Shapes,
  ArrowRight,
  GitBranch,
  Split
} from "lucide-react";

export default function ErModelInteractiveStudio() {
  const [activeElement, setActiveElement] = useState("entity"); // 'entity' | 'weak-entity' | 'attribute' | 'key' | 'relationship' | 'cardinality'

  const elements = [
    {
      id: "entity",
      title: "Thực Thể Mạnh",
      en: "Strong Entity",
      shape: "Hình Chữ Nhật (Viền Đơn)",
      desc: "Là đối tượng/khái niệm trong thế giới thực có thể nhận biết một cách độc lập và duy nhất. Có một hoặc nhiều thực thể yếu phụ thuộc vào nó.",
      example: "SinhVien (MaSV), NhanVien (MaNV), Khoa (MaKhoa)..."
    },
    {
      id: "weak-entity",
      title: "Thực Thể Yếu",
      en: "Weak Entity",
      shape: "Hình Chữ Nhật (Viền Đôi)",
      desc: "Thực thể mà sự tồn tại của nó bắt buộc phải phụ thuộc vào một thực thể mạnh khác. Nếu thực thể mạnh bị xóa, thực thể yếu cũng mất đi.",
      example: "ThanNhan phụ thuộc vào NhanVien; NguoiPhuThuoc phụ thuộc KhachHang."
    },
    {
      id: "attribute",
      title: "Thuộc Tính",
      en: "Attribute",
      shape: "Hình Bầu Dục / Oval",
      desc: "Các đặc tính, tính chất riêng biệt dùng để mô tả thông tin chi tiết của loại thực thể hoặc mối kết hợp.",
      example: "HoTen, NgaySinh, QueQuan, SoDienThoai..."
    },
    {
      id: "key",
      title: "Khóa Thực Thể",
      en: "Key Attribute",
      shape: "Bầu Dục Chữ Gạch Chân",
      desc: "Thuộc tính hoặc tập thuộc tính dùng để định danh duy nhất từng thể hiện của loại thực thể trong toàn hệ thống.",
      example: "MaSV (Khóa chính), MaKhoa, SoCMND/CCCD..."
    },
    {
      id: "relationship",
      title: "Mối Kết Hợp",
      en: "Relationship",
      shape: "Hình Thoi (Diamond)",
      desc: "Sự liên kết có ngữ nghĩa giữa 2 hay nhiều loại thực thể. Giữa 2 thực thể có thể có nhiều mối kết hợp khác nhau và mối kết hợp cũng có thể có thuộc tính riêng.",
      example: "SinhVien -- <hoc> -- HocPhan (có thuộc tính DiemThi, LanThi)"
    },
    {
      id: "cardinality",
      title: "Bậc Số Lượng",
      en: "Cardinality (1,1)-(1,n)",
      shape: "Nhãn Tỷ Lệ Cặp Số",
      desc: "Số ngôi (Degree): Tổng số loại thực thể tham gia. Bậc số lượng (Cardinality): Giới hạn số lượng thể hiện thực thể này có thể liên kết với thực thể kia.",
      example: "(1,1) Bắt buộc 1; (0,n) Tùy chọn nhiều; (1,n) Bắt buộc ít nhất 1."
    }
  ];

  const current = elements.find((e) => e.id === activeElement) || elements[0];

  return (
    <div className="my-8 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden text-slate-800 max-w-full">
      {/* Header */}
      <div className="px-4 sm:px-6 py-4 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 min-w-0">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 border border-orange-200 flex items-center justify-center font-bold flex-shrink-0">
            <Shapes className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600 block truncate">
              ERD Interactive Studio • Mục 3.4
            </span>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 truncate">
              Mô Hình Thực Thể Kết Hợp (ER Model - Peter Chen)
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-2 self-start sm:self-auto flex-shrink-0">
          <span className="text-xs font-mono text-orange-700 px-3 py-1 rounded-lg bg-orange-100/80 border border-orange-200 font-bold whitespace-nowrap">
            Peter Chen Notation
          </span>
        </div>
      </div>

      {/* 6 ERD Symbols Navigation - Co giãn linh hoạt */}
      <div className="p-3 sm:p-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 bg-slate-50/60 border-b border-slate-200 min-w-0">
        {elements.map((el) => {
          const isActive = activeElement === el.id;
          return (
            <button
              key={el.id}
              type="button"
              onClick={() => setActiveElement(el.id)}
              className={`p-2.5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between min-w-0 ${
                isActive
                  ? "bg-orange-50 border-orange-500 text-orange-950 shadow-sm ring-1 ring-orange-400/30"
                  : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <div className="text-xs font-bold truncate">{el.title}</div>
              <div className="text-[10px] text-orange-600 font-mono mt-0.5 font-semibold truncate">
                {el.shape}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Element Showcase */}
      <div className="p-4 sm:p-6 space-y-5 min-w-0">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center min-w-0">
          {/* Symbol Vector Preview (4 cols on md) */}
          <div className="md:col-span-4 p-5 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col items-center justify-center text-center space-y-3 shadow-md min-w-0">
            <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold font-mono">
              Ký Hiệu Chuẩn Sơ Đồ ERD:
            </span>

            {/* Dynamic Vector Shape Render */}
            <div className="w-36 h-24 flex items-center justify-center">
              {current.id === "entity" && (
                <div className="w-28 h-14 rounded-md border-2 border-amber-400 bg-amber-400/10 flex items-center justify-center text-amber-300 font-mono font-bold text-xs shadow-sm">
                  SINH_VIEN
                </div>
              )}
              {current.id === "weak-entity" && (
                <div className="w-32 h-16 rounded-md border-2 border-amber-400 bg-amber-400/10 p-1 flex items-center justify-center">
                  <div className="w-full h-full rounded border-2 border-amber-400 flex items-center justify-center text-amber-300 font-mono font-bold text-xs">
                    THAN_NHAN
                  </div>
                </div>
              )}
              {current.id === "attribute" && (
                <div className="w-28 h-12 rounded-full border-2 border-cyan-400 bg-cyan-400/10 flex items-center justify-center text-cyan-300 font-mono font-semibold text-xs shadow-sm">
                  HoTen
                </div>
              )}
              {current.id === "key" && (
                <div className="w-28 h-12 rounded-full border-2 border-orange-400 bg-orange-400/10 flex items-center justify-center text-orange-300 font-mono font-bold text-xs underline shadow-sm">
                  MaSV (PK)
                </div>
              )}
              {current.id === "relationship" && (
                <div className="w-16 h-16 rotate-45 border-2 border-amber-400 bg-amber-400/10 flex items-center justify-center shadow-sm">
                  <span className="-rotate-45 text-amber-300 font-mono font-bold text-xs">&lt;hoc&gt;</span>
                </div>
              )}
              {current.id === "cardinality" && (
                <div className="px-3 py-1.5 rounded-lg border border-amber-400/40 bg-amber-400/10 text-amber-300 font-mono text-xs font-bold">
                  (1, 1) ─── &lt;hoc&gt; ─── (0, n)
                </div>
              )}
            </div>

            <span className="px-2.5 py-0.5 text-[11px] font-semibold rounded bg-orange-950/60 text-amber-300 border border-orange-500/30 truncate max-w-full">
              {current.shape}
            </span>
          </div>

          {/* Details & Academic Explanation (8 cols on md) */}
          <div className="md:col-span-8 space-y-3 min-w-0">
            <h4 className="text-base sm:text-lg font-extrabold text-slate-900 truncate">
              {current.title} <span className="text-xs font-normal text-slate-500">({current.en})</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              {current.desc}
            </p>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1 shadow-sm min-w-0">
              <div className="font-bold text-orange-700">Ví dụ thực tế trong giáo trình:</div>
              <p className="text-slate-700 font-mono text-[11px] break-words">{current.example}</p>
            </div>
          </div>
        </div>

        {/* Complete ER Diagram Vector SVG Map (Thay thế hoàn toàn ASCII) */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 border border-slate-800 text-white shadow-md min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
            <div className="text-amber-400 font-bold uppercase tracking-wider text-[11px] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
              <span>Sơ Đồ Minh Họa Mối Quan Hệ ER Hoàn Chỉnh (Vector SVG Co Giãn)</span>
            </div>
            <span className="text-[10px] text-slate-400 font-mono">
              SinhVien - HocPhan - MonHoc
            </span>
          </div>

          <div className="w-full overflow-hidden rounded-xl bg-slate-950/80 border border-slate-800 p-2 sm:p-4">
            <svg
              viewBox="0 0 740 180"
              className="w-full h-auto max-w-full block select-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Entity 1: SINH_VIEN */}
              <rect x="20" y="30" width="160" height="70" rx="8" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
              <text x="100" y="58" textAnchor="middle" fill="#fde68a" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
                SINH_VIEN
              </text>
              <text x="100" y="80" textAnchor="middle" fill="#94a3b8" fontSize="11" textDecoration="underline" fontFamily="sans-serif">
                MaSV, HoTen, QueQuan
              </text>

              {/* Line 1 -> Relationship 1 */}
              <line x1="180" y1="65" x2="260" y2="65" stroke="#f59e0b" strokeWidth="2" />
              <text x="210" y="55" fill="#fde68a" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                (1, n)
              </text>

              {/* Relationship 1: < HOC > */}
              <polygon points="310,25 360,65 310,105 260,65" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
              <text x="310" y="70" textAnchor="middle" fill="#7dd3fc" fontSize="12" fontWeight="bold" fontFamily="sans-serif">
                HỌC
              </text>

              {/* Line Relationship 1 -> Entity 2 */}
              <line x1="360" y1="65" x2="440" y2="65" stroke="#f59e0b" strokeWidth="2" />
              <text x="390" y="55" fill="#fde68a" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                (0, n)
              </text>

              {/* Entity 2: HOC_PHAN */}
              <rect x="440" y="30" width="160" height="70" rx="8" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
              <text x="520" y="58" textAnchor="middle" fill="#fde68a" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
                HOC_PHAN
              </text>
              <text x="520" y="80" textAnchor="middle" fill="#94a3b8" fontSize="11" textDecoration="underline" fontFamily="sans-serif">
                MaHP, HocKy, NamHoc
              </text>

              {/* Line Entity 2 -> Entity 3 */}
              <line x1="520" y1="100" x2="520" y2="135" stroke="#f59e0b" strokeWidth="2" />
              <text x="535" y="125" fill="#fde68a" fontSize="10" fontFamily="sans-serif">
                (1, 1)
              </text>

              {/* Bottom Note */}
              <rect x="440" y="135" width="160" height="35" rx="6" fill="#0f172a" stroke="#334155" />
              <text x="520" y="157" textAnchor="middle" fill="#cbd5e1" fontSize="11" fontFamily="sans-serif">
                MÔN_HỌC (MaMH)
              </text>

              {/* Legend Badges */}
              <rect x="20" y="140" width="12" height="12" rx="2" fill="#1e293b" stroke="#f59e0b" />
              <text x="38" y="150" fill="#94a3b8" fontSize="10" fontFamily="sans-serif">Thực thể</text>

              <polygon points="120,140 126,146 120,152 114,146" fill="#1e293b" stroke="#38bdf8" />
              <text x="132" y="150" fill="#94a3b8" fontSize="10" fontFamily="sans-serif">Mối liên kết</text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
