"use client";

import React, { useState } from "react";
import { Split, ArrowRight, CheckCircle2, XCircle, Gauge, Layers, Sparkles, Database } from "lucide-react";

export default function QueryTreeDualViewerStudio() {
  const [viewMode, setViewMode] = useState("side_by_side");

  return (
    <div className="my-8 rounded-2xl border border-indigo-200/80 bg-gradient-to-br from-indigo-50/40 via-white to-blue-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-indigo-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-600/20">
            <Split className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">QueryTreeDualViewerStudio</h3>
              <span className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-semibold text-indigo-800 border border-indigo-200">
                Đối Chiếu Song Song Cây Truy Vấn (Mục 4.3 - 4.5)
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              So sánh trực tiếp Cây Sơ Khai (chưa tối ưu) vs Cây Tối Ưu Hóa Sâu (đẩy σ và π sát lá)
            </p>
          </div>
        </div>
      </div>

      {/* Side-by-Side Dual Tree Grid */}
      <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-4 font-mono text-xs">
        {/* Left: Unoptimized Tree */}
        <div className="rounded-2xl border border-red-200 bg-red-50/30 p-5 shadow-sm space-y-3">
          <div className="flex items-center justify-between border-b border-red-200 pb-2">
            <div className="flex items-center gap-2">
              <XCircle className="h-5 w-5 text-red-600" />
              <span className="font-bold text-sm text-red-950 font-sans">1. CÂY SƠ KHAI (CHƯA TỐI ƯU)</span>
            </div>
            <span className="text-[10px] font-bold text-red-800 bg-red-100 px-2 py-0.5 rounded border border-red-200">
              CHI PHÍ CỰC LỚN
            </span>
          </div>

          <div className="rounded-xl bg-slate-950 p-4 text-red-300 font-mono text-xs overflow-x-auto shadow-inner leading-relaxed">
            <pre className="leading-tight">
{`          [ π_{tensach} ]
                 │
    [ σ_{ngay < '12/01/2009'} ]
                 │
         [ * (Natural Join) ]
            /          \\
       [ Sach ]   [ * (Natural Join) ]
                     /          \\
                [ Muon ]    [ DocGia ]`}
            </pre>
          </div>

          <div className="space-y-1.5 font-sans text-xs text-gray-700">
            <p>• <strong>Toán tử:</strong> Tích kết nối toàn bộ 3 bảng Sach × Muon × DocGia.</p>
            <p>• <strong>Phép chọn:</strong> Lọc ngày mượn ở tận đỉnh sau khi đã kết nối xong.</p>
            <p>• <strong>Độ rộng cột:</strong> Giữ nguyên toàn bộ thuộc tính không cần thiết (diachi, thanhpho, tacgia...).</p>
            <p className="text-red-700 font-bold">• Kích thước trung gian: Hàng triệu bộ, tràn bộ nhớ đệm RAM!</p>
          </div>
        </div>

        {/* Right: Optimized Tree */}
        <div className="rounded-2xl border border-emerald-300 bg-emerald-50/30 p-5 shadow-sm space-y-3">
          <div className="flex items-center justify-between border-b border-emerald-200 pb-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-emerald-600" />
              <span className="font-bold text-sm text-emerald-950 font-sans">2. CÂY TỐI ƯU HÓA HOÀN HẢO</span>
            </div>
            <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-300">
              TỐC ĐỘ SIÊU NHANH
            </span>
          </div>

          <div className="rounded-xl bg-slate-950 p-4 text-emerald-300 font-mono text-xs overflow-x-auto shadow-inner leading-relaxed">
            <pre className="leading-tight">
{`                 [ π_{tensach} ]
                        │
          [ ⋈_{Sach.masach = Muon.masach} ]
               /                 \\
  [ π_{tensach, masach} ]   [ ⋈_{Muon.madg = DocGia.madg} ]
           │                    /               \\
        [ Sach ]       [ π_{masach, madg} ]   [ π_{madg} ]
                                │                  │
                   [ σ_{ngay < '12/01/2009'} ]  [ DocGia ]
                                │
                             [ Muon ]`}
            </pre>
          </div>

          <div className="space-y-1.5 font-sans text-xs text-gray-700">
            <p>• <strong>Toán tử:</strong> Thay toàn bộ tích Đề-các bằng Phép kết nối bằng (Equi-Join ⋈).</p>
            <p>• <strong>Phép chọn:</strong> Đẩy σ_{"ngay < '12/01/2009'"} xuống sát lá Muon lọc trước.</p>
            <p>• <strong>Độ rộng cột:</strong> Đẩy π xuống từng bảng chỉ giữ masach, tensach, madg.</p>
            <p className="text-emerald-800 font-bold">• Kích thước trung gian: Thu hẹp tối đa, xử lý trực tiếp trong CPU cache!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
