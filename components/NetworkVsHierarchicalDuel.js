"use client";

import React, { useState } from "react";
import {
  Share2,
  GitFork,
  ArrowRight,
  Sparkles,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Layers,
  Network,
  FolderTree,
  RotateCcw
} from "lucide-react";

export default function NetworkVsHierarchicalDuel() {
  const [activeModel, setActiveModel] = useState("network"); // 'network' | 'hierarchical'

  return (
    <div className="my-8 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden text-slate-800 max-w-full">
      {/* Header */}
      <div className="px-4 sm:px-6 py-4 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 min-w-0">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 border border-orange-200 flex items-center justify-center font-bold flex-shrink-0">
            <Share2 className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600 block truncate">
              Duel Arena • Mục 3.3 & 3.6
            </span>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 truncate">
              Mô Hình Mạng (Graph) vs Mô Hình Phân Cấp (Tree)
            </h3>
          </div>
        </div>

        {/* Toggle Mode */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-100 border border-slate-200 text-xs self-start sm:self-auto flex-shrink-0 min-w-0">
          <button
            type="button"
            onClick={() => setActiveModel("network")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-all whitespace-nowrap ${
              activeModel === "network"
                ? "bg-orange-600 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Network className="w-3.5 h-3.5 flex-shrink-0" />
            <span>Mô Hình Mạng (3.3)</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveModel("hierarchical")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-all whitespace-nowrap ${
              activeModel === "hierarchical"
                ? "bg-amber-600 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <FolderTree className="w-3.5 h-3.5 flex-shrink-0" />
            <span>Mô Hình Phân Cấp (3.6)</span>
          </button>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-4 sm:p-6 min-w-0">
        {/* MODEL 1: NETWORK MODEL */}
        {activeModel === "network" && (
          <div className="space-y-5 animate-fadeIn min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3 min-w-0">
              <div className="min-w-0">
                <h4 className="text-base sm:text-lg font-extrabold text-slate-900 flex items-center gap-2 truncate">
                  <Network className="w-5 h-5 text-orange-600 flex-shrink-0" />
                  <span className="truncate">Mô Hình Mạng (Network Model)</span>
                </h4>
                <p className="text-xs text-slate-500 mt-0.5 font-sans">
                  Biểu diễn dữ liệu dưới dạng <strong>Đồ Thị Có Hướng (Directed Graph)</strong>
                </p>
              </div>
              <span className="px-2.5 py-0.5 text-xs font-semibold rounded bg-orange-100 text-orange-800 border border-orange-200 font-mono self-start sm:self-auto flex-shrink-0">
                CODASYL DBTG Standard
              </span>
            </div>

            {/* Core Notations */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs min-w-0">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1 shadow-sm min-w-0">
                <div className="text-orange-700 font-bold text-sm">1. Loại Mẫu Tin (Record Type)</div>
                <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed font-sans">
                  Đặc trưng cho một đối tượng riêng biệt. Ký hiệu bằng <strong>hình chữ nhật</strong> (Khoa, SinhVien, MonHoc).
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1 shadow-sm min-w-0">
                <div className="text-orange-700 font-bold text-sm">2. Mẫu Tin (Record)</div>
                <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed font-sans">
                  Mỗi thể hiện cụ thể của một loại mẫu tin (các bản ghi sinh viên cụ thể trong trường).
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1 shadow-sm min-w-0 sm:col-span-2 lg:col-span-1">
                <div className="text-orange-700 font-bold text-sm">3. Loại Liên Hệ (Set Type)</div>
                <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed font-sans">
                  Liên kết giữa mẫu tin chủ và mẫu tin thành viên. Ký hiệu bằng <strong>hình bầu dục</strong> với mũi tên đi từ <strong>Chủ ➔ Thành viên</strong>.
                </p>
              </div>
            </div>

            {/* Interactive Graph Vector SVG Diagram (Thay thế ASCII) */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 border border-slate-800 text-white space-y-3 shadow-md min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>Sơ Đồ Vector Mô Hình Mạng (Mẫu Tin Chữ Nhật & Liên Hệ Bầu Dục)</span>
                </div>
                <span className="text-[10px] text-slate-400 font-mono">Đồ Thị Có Hướng Co Giãn 100%</span>
              </div>

              <div className="w-full overflow-hidden rounded-xl bg-slate-950/80 border border-slate-800 p-2 sm:p-4">
                <svg
                  viewBox="0 0 700 170"
                  className="w-full h-auto max-w-full block select-none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <marker id="netArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#f59e0b" />
                    </marker>
                  </defs>

                  {/* Node 1: SVIEN */}
                  <rect x="50" y="15" width="160" height="45" rx="8" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
                  <text x="130" y="38" textAnchor="middle" fill="#fde68a" fontSize="12" fontWeight="bold" fontFamily="sans-serif">
                    SVIEN (MaSV, Ten)
                  </text>

                  {/* Node 2: KHOA */}
                  <rect x="470" y="15" width="170" height="45" rx="8" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
                  <text x="555" y="38" textAnchor="middle" fill="#fde68a" fontSize="12" fontWeight="bold" fontFamily="sans-serif">
                    KHOA (MaKhoa, Ten)
                  </text>

                  {/* Relationship Oval 1: SVIEN_DIEM */}
                  <ellipse cx="130" cy="85" rx="60" ry="16" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
                  <text x="130" y="89" textAnchor="middle" fill="#7dd3fc" fontSize="10" fontFamily="sans-serif">
                    (SVIEN_DIEM)
                  </text>
                  <line x1="130" y1="60" x2="130" y2="69" stroke="#f59e0b" strokeWidth="1.5" markerEnd="url(#netArrow)" />
                  <line x1="130" y1="101" x2="130" y2="115" stroke="#f59e0b" strokeWidth="1.5" markerEnd="url(#netArrow)" />

                  {/* Relationship Oval 2: KHOA_SVIEN */}
                  <ellipse cx="555" cy="85" rx="60" ry="16" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
                  <text x="555" y="89" textAnchor="middle" fill="#7dd3fc" fontSize="10" fontFamily="sans-serif">
                    (KHOA_SVIEN)
                  </text>
                  <line x1="555" y1="60" x2="555" y2="69" stroke="#f59e0b" strokeWidth="1.5" markerEnd="url(#netArrow)" />
                  <line x1="555" y1="101" x2="555" y2="115" stroke="#f59e0b" strokeWidth="1.5" markerEnd="url(#netArrow)" />

                  {/* Node 3: KQUA */}
                  <rect x="50" y="115" width="160" height="45" rx="8" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
                  <text x="130" y="138" textAnchor="middle" fill="#fde68a" fontSize="12" fontWeight="bold" fontFamily="sans-serif">
                    KQUA (DiemLT, TH)
                  </text>

                  {/* Node 4: HPHAN */}
                  <rect x="470" y="115" width="170" height="45" rx="8" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
                  <text x="555" y="138" textAnchor="middle" fill="#fde68a" fontSize="12" fontWeight="bold" fontFamily="sans-serif">
                    HPHAN (MaHP, SLuong)
                  </text>

                  {/* Horizontal Arrow: HPHAN -> KQUA */}
                  <line x1="470" y1="137" x2="220" y2="137" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#netArrow)" />
                  <text x="345" y="130" textAnchor="middle" fill="#7dd3fc" fontSize="9.5" fontFamily="sans-serif">
                    [KQUA_HPHAN]
                  </text>
                </svg>
              </div>
            </div>

            {/* Pros & Cons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs min-w-0">
              <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200 space-y-1 shadow-sm min-w-0">
                <div className="text-emerald-700 font-bold flex items-center gap-1.5 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Ưu Điểm:</span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed font-sans">
                  Tương đối đơn giản, dễ tiếp cận và dễ sử dụng cho các bài toán quy mô vừa phải.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-rose-50/60 border border-rose-200 space-y-1 shadow-sm min-w-0">
                <div className="text-rose-700 font-bold flex items-center gap-1.5 text-sm">
                  <XCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                  <span>Nhược Điểm Chí Mạng:</span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed font-sans">
                  Không thích hợp biểu diễn CSDL quy mô lớn, vì đồ thị có hướng hạn chế khả năng diễn đạt ngữ nghĩa và các mối liên hệ phức tạp.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* MODEL 2: HIERARCHICAL MODEL */}
        {activeModel === "hierarchical" && (
          <div className="space-y-5 animate-fadeIn min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3 min-w-0">
              <div className="min-w-0">
                <h4 className="text-base sm:text-lg font-extrabold text-slate-900 flex items-center gap-2 truncate">
                  <FolderTree className="w-5 h-5 text-amber-600 flex-shrink-0" />
                  <span className="truncate">Mô Hình Phân Cấp (Hierarchical Model)</span>
                </h4>
                <p className="text-xs text-slate-500 mt-0.5 font-sans">
                  Biểu diễn dữ liệu dưới dạng <strong>Cấu Trúc Cây (Tree Hierarchy)</strong>
                </p>
              </div>
              <span className="px-2.5 py-0.5 text-xs font-semibold rounded bg-amber-100 text-amber-800 border border-amber-200 font-mono self-start sm:self-auto flex-shrink-0">
                IBM IMS Architecture
              </span>
            </div>

            {/* Tree Core Rules */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs min-w-0">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1 shadow-sm min-w-0">
                <div className="text-amber-800 font-bold text-sm">1. Các Nút (Nodes)</div>
                <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed font-sans">
                  Biểu diễn tập các thực thể trong hệ thống. Mỗi nút tương ứng với một bản ghi dữ liệu.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1 shadow-sm min-w-0">
                <div className="text-amber-800 font-bold text-sm">2. Quan Hệ Cha - Con (Parent - Child)</div>
                <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed font-sans">
                  Liên hệ theo mối quan hệ xác định <strong>1 - Nhiều (1 - N)</strong>. Một nút con chỉ có duy nhất 1 nút cha trực tiếp.
                </p>
              </div>
            </div>

            {/* Tree Structure Vector SVG Box (Thay thế ASCII) */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 border border-slate-800 text-white space-y-3 shadow-md min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>Sơ Đồ Vector Cây Phân Cấp (Mức 1 ➔ Mức 2 ➔ Mức 3)</span>
                </div>
                <span className="text-[10px] text-slate-400 font-mono">Quan Hệ Cha - Con 1-N</span>
              </div>

              <div className="w-full overflow-hidden rounded-xl bg-slate-950/80 border border-slate-800 p-2 sm:p-4">
                <svg
                  viewBox="0 0 700 160"
                  className="w-full h-auto max-w-full block select-none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <marker id="treeArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#f59e0b" />
                    </marker>
                  </defs>

                  {/* LEVEL 1: ROOT NODE */}
                  <rect x="250" y="10" width="200" height="38" rx="8" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
                  <text x="350" y="34" textAnchor="middle" fill="#fde68a" fontSize="12" fontWeight="bold" fontFamily="sans-serif">
                    Mức 1: SVien (Gốc / Root)
                  </text>

                  {/* Lines from Level 1 to Level 2 */}
                  <path d="M 350 48 L 350 65 L 180 65 L 180 75" fill="none" stroke="#f59e0b" strokeWidth="1.5" markerEnd="url(#treeArrow)" />
                  <path d="M 350 48 L 350 65 L 520 65 L 520 75" fill="none" stroke="#f59e0b" strokeWidth="1.5" markerEnd="url(#treeArrow)" />

                  {/* LEVEL 2: CHILD NODES */}
                  <rect x="80" y="75" width="200" height="34" rx="8" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
                  <text x="180" y="97" textAnchor="middle" fill="#7dd3fc" fontSize="11" fontFamily="sans-serif">
                    Mức 2: HPhan (TenHP, SLuong)
                  </text>

                  <rect x="420" y="75" width="200" height="34" rx="8" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
                  <text x="520" y="97" textAnchor="middle" fill="#7dd3fc" fontSize="11" fontFamily="sans-serif">
                    Mức 2: MHoc (TenMH, TinChi)
                  </text>

                  {/* Lines from Level 2 to Level 3 */}
                  <line x1="180" y1="109" x2="180" y2="123" stroke="#f59e0b" strokeWidth="1.5" markerEnd="url(#treeArrow)" />
                  <line x1="520" y1="109" x2="520" y2="123" stroke="#f59e0b" strokeWidth="1.5" markerEnd="url(#treeArrow)" />

                  {/* LEVEL 3: LEAF NODES (DUPLICATION) */}
                  <rect x="80" y="123" width="200" height="30" rx="6" fill="#0f172a" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 2" />
                  <text x="180" y="142" textAnchor="middle" fill="#f87171" fontSize="10.5" fontFamily="sans-serif">
                    Mức 3: KQua (DiemLT, TH)
                  </text>

                  <rect x="420" y="123" width="200" height="30" rx="6" fill="#0f172a" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 2" />
                  <text x="520" y="142" textAnchor="middle" fill="#f87171" fontSize="10.5" fontFamily="sans-serif">
                    Mức 3: KQua (Trùng lặp dữ liệu!)
                  </text>
                </svg>
              </div>
            </div>

            {/* Limitation Box */}
            <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-950 flex items-start gap-2.5 shadow-sm min-w-0">
              <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
              <span className="font-sans leading-relaxed">
                <strong>Nhược điểm cấu trúc cây:</strong> Rất khó biểu diễn mối quan hệ Nhiều - Nhiều (N-N). Khi 1 sinh viên học nhiều môn và 1 môn có nhiều sinh viên, dữ liệu bắt buộc phải bị nhân bản lặp lại ở nhiều nhánh cây khác nhau, gây dư thừa dữ liệu trầm trọng.
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
