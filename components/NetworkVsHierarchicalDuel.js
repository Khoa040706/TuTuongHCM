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
    <div className="my-8 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden text-slate-800">
      {/* Header */}
      <div className="px-5 py-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 border border-orange-200 flex items-center justify-center font-bold">
            <Share2 className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600">
              Duel Arena • Mục 3.3 & 3.6
            </span>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
              Đối Chiếu: Mô Hình Mạng (Network Graph) vs Mô Hình Phân Cấp (Tree)
            </h3>
          </div>
        </div>

        {/* Toggle Mode */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 border border-slate-200 text-xs">
          <button
            onClick={() => setActiveModel("network")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-all ${
              activeModel === "network"
                ? "bg-orange-600 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Network className="w-3.5 h-3.5" /> Mô Hình Mạng (3.3)
          </button>
          <button
            onClick={() => setActiveModel("hierarchical")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-all ${
              activeModel === "hierarchical"
                ? "bg-amber-600 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <FolderTree className="w-3.5 h-3.5" /> Mô Hình Phân Cấp (3.6)
          </button>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-6">
        {/* MODEL 1: NETWORK MODEL */}
        {activeModel === "network" && (
          <div className="space-y-5 animate-fadeIn">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div>
                <h4 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                  <Network className="w-5 h-5 text-orange-600" />
                  Mô Hình Mạng (Network Model)
                </h4>
                <p className="text-xs text-slate-500 mt-0.5 font-sans">
                  Biểu diễn dữ liệu dưới dạng <strong>Đồ Thị Có Hướng (Directed Graph)</strong>
                </p>
              </div>
              <span className="px-2.5 py-0.5 text-xs font-semibold rounded bg-orange-100 text-orange-800 border border-orange-200 font-mono">
                CODASYL DBTG Standard
              </span>
            </div>

            {/* Core Notations */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1 shadow-sm">
                <div className="text-orange-700 font-bold">1. Loại Mẫu Tin (Record Type)</div>
                <p className="text-[11px] text-slate-600 leading-relaxed font-sans">Đặc trưng cho một đối tượng riêng biệt. Ký hiệu bằng <strong>hình chữ nhật</strong> (VD: Khoa, SinhVien, MonHoc).</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1 shadow-sm">
                <div className="text-orange-700 font-bold">2. Mẫu Tin (Record)</div>
                <p className="text-[11px] text-slate-600 leading-relaxed font-sans">Mỗi thể hiện cụ thể của một loại mẫu tin (VD: các sinh viên cụ thể đang theo học tại trường).</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1 shadow-sm">
                <div className="text-orange-700 font-bold">3. Loại Liên Hệ (Set Type)</div>
                <p className="text-[11px] text-slate-600 leading-relaxed font-sans">Sự liên kết giữa mẫu tin chủ và mẫu tin thành viên. Ký hiệu bằng <strong>hình bầu dục</strong> với mũi tên đi từ <strong>Chủ ➔ Thành viên</strong>.</p>
              </div>
            </div>

            {/* Interactive Graph Notation Diagram */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 shadow-sm">
              <div className="text-xs font-bold uppercase tracking-wider text-orange-700 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-orange-600" />
                Sơ Đồ Minh Họa Mô Hình Mạng (Mẫu Tin Hình Chữ Nhật & Liên Hệ Bầu Dục):
              </div>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 overflow-x-auto text-xs font-mono shadow-inner">
                <pre className="text-amber-300 whitespace-pre leading-relaxed">
{`   ┌──────────────┐                  ┌──────────────┐
   │    SVIEN     │                  │    KHOA      │
   │ (MaSV, Ten)  │                  │ (MaKhoa, Ten)│
   └──────┬───────┘                  └──────┬───────┘
          │                                 │
          ▼ [ SVIEN_DIEM ]                  ▼ [ KHOA_SVIEN ]
   (  Hình Bầu Dục  )                (  Hình Bầu Dục  )
          │                                 │
          ▼                                 ▼
   ┌──────────────┐                  ┌──────────────┐
   │    KQUA      │◄─────────────────┤    HPHAN     │
   │ (DiemLT,TH)  │   [ KQUA_HPHAN ] │ (MaHP, SLuong│
   └──────────────┘                  └──────────────┘`}
                </pre>
              </div>
            </div>

            {/* Pros & Cons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200 space-y-1 shadow-sm">
                <div className="text-emerald-700 font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Ưu Điểm:
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed font-sans">Tương đối đơn giản, dễ tiếp cận và dễ sử dụng cho các bài toán quy mô vừa phải.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-rose-50/60 border border-rose-200 space-y-1 shadow-sm">
                <div className="text-rose-700 font-bold flex items-center gap-1.5">
                  <XCircle className="w-4 h-4 text-rose-600" /> Nhược Điểm Chí Mạng:
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed font-sans">Không thích hợp biểu diễn CSDL quy mô lớn, vì đồ thị có hướng hạn chế khả năng diễn đạt ngữ nghĩa của dữ liệu, nhất là các mối liên hệ phức tạp trong thực tế.</p>
              </div>
            </div>
          </div>
        )}

        {/* MODEL 2: HIERARCHICAL MODEL */}
        {activeModel === "hierarchical" && (
          <div className="space-y-5 animate-fadeIn">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div>
                <h4 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                  <FolderTree className="w-5 h-5 text-amber-600" />
                  Mô Hình Phân Cấp (Hierarchical Model)
                </h4>
                <p className="text-xs text-slate-500 mt-0.5 font-sans">
                  Biểu diễn dữ liệu dưới dạng <strong>Cấu Trúc Cây (Tree Hierarchy)</strong>
                </p>
              </div>
              <span className="px-2.5 py-0.5 text-xs font-semibold rounded bg-amber-100 text-amber-800 border border-amber-200 font-mono">
                IBM IMS Architecture
              </span>
            </div>

            {/* Tree Core Rules */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1 shadow-sm">
                <div className="text-amber-800 font-bold">1. Các Nút (Nodes)</div>
                <p className="text-[11px] text-slate-600 leading-relaxed font-sans">Biểu diễn tập các thực thể trong hệ thống. Mỗi nút tương ứng với một bản ghi dữ liệu.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1 shadow-sm">
                <div className="text-amber-800 font-bold">2. Quan Hệ Nút Cha - Nút Con (Parent - Child)</div>
                <p className="text-[11px] text-slate-600 leading-relaxed font-sans">Liên hệ theo mối quan hệ xác định <strong>1 - Nhiều (1 - N)</strong>. Một nút con chỉ có duy nhất 1 nút cha trực tiếp.</p>
              </div>
            </div>

            {/* Tree Structure Visual Box */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 shadow-sm">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-800 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                Ví Dụ Cấu Trúc Cây Phân Cấp (Mức 1 ➔ Mức 2 ➔ Mức 3):
              </div>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono shadow-inner">
                <pre className="text-amber-300 whitespace-pre leading-relaxed">
{`Mức 1 (Gốc): SVien (TenSV, Lop, Nganh)
                  │
        ┌─────────┴────────────────────────┐
        ▼                                  ▼
Mức 2: HPhan (TenHP, SLuong)        (liên kết đến) MHoc (TenMH, Khoa, TinChi)
        │                                  │
        ▼                                  ▼
Mức 3: KQua (DiemLT, DiemTH)        KQua (DiemLT, DiemTH)`}
                </pre>
              </div>
            </div>

            {/* Limitation Box */}
            <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-950 flex items-start gap-2.5 shadow-sm">
              <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
              <span className="font-sans">
                <strong>Nhược điểm cấu trúc cây:</strong> Rất khó biểu diễn mối quan hệ Nhiều - Nhiều (N-N). Khi 1 sinh viên học nhiều môn và 1 môn có nhiều sinh viên, dữ liệu bắt buộc phải bị nhân bản lặp lại ở nhiều nhánh cây khác nhau, gây dư thừa dữ liệu.
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
