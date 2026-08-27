"use client";

import React, { useState } from "react";
import { Table, Split, CheckCircle2, XCircle, ArrowRight, ShieldCheck, Sparkles, Layers } from "lucide-react";

export default function FirstNormalFormStudio() {
  const [activeMethod, setActiveMethod] = useState("vertical"); // 'vertical' | 'horizontal' | 'cungcap'

  return (
    <div className="my-8 rounded-2xl border border-cyan-200/80 bg-gradient-to-br from-cyan-50/40 via-white to-blue-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-cyan-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-600 text-white shadow-md shadow-cyan-600/20">
            <Table className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">FirstNormalFormStudio</h3>
              <span className="rounded-full bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 border border-cyan-200">
                Dạng Chuẩn 1 (1NF)
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Phân biệt Thuộc tính Đơn (Nguyên tố) vs Thuộc tính Kép &amp; 2 Phương pháp chuẩn hóa 1NF: Tách dọc và Tách ngang
            </p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex rounded-xl bg-cyan-100/80 p-1 border border-cyan-200">
          <button
            onClick={() => setActiveMethod("vertical")}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
              activeMethod === "vertical" ? "bg-cyan-600 text-white shadow-sm" : "text-cyan-900 hover:text-cyan-700"
            }`}
          >
            1. Tách Dọc (Thêm Cột)
          </button>
          <button
            onClick={() => setActiveMethod("horizontal")}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
              activeMethod === "horizontal" ? "bg-cyan-600 text-white shadow-sm" : "text-cyan-900 hover:text-cyan-700"
            }`}
          >
            2. Tách Ngang (Thêm Dòng)
          </button>
          <button
            onClick={() => setActiveMethod("cungcap")}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
              activeMethod === "cungcap" ? "bg-cyan-600 text-white shadow-sm" : "text-cyan-900 hover:text-cyan-700"
            }`}
          >
            3. Ví Dụ Cung Cấp
          </button>
        </div>
      </div>

      {/* Core Definition Banner */}
      <div className="mt-5 rounded-xl bg-cyan-50 border border-cyan-200 p-4 font-mono text-xs text-cyan-950 space-y-1">
        <div><strong>ĐỊNH NGHĨA 1NF:</strong> Một quan hệ R đạt 1NF nếu <u>mọi thuộc tính của R đều là thuộc tính đơn (nguyên tố)</u>.</div>
        <div className="text-gray-600 font-sans text-xs">Thuộc tính đơn: Không phải sự tích hợp của nhiều thuộc tính khác, người dùng không thể truy xuất đến từng phần tử con bên trong.</div>
      </div>

      {/* Method Details */}
      <div className="mt-4 rounded-xl border border-cyan-200 bg-white p-5 shadow-sm space-y-3 font-mono text-xs">
        {activeMethod === "vertical" && (
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-gray-100 pb-2">
              <strong className="text-cyan-950 font-sans text-sm">PHƯƠNG PHÁP TÁCH DỌC (SPLIT COLUMNS)</strong>
              <span className="text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200 text-[11px]">
                ÁP DỤNG CHO THUỘC TÍNH PHỨC HỢP
              </span>
            </div>
            <div className="space-y-1.5 text-gray-700 font-sans text-xs leading-relaxed">
              <p>• <strong>Bảng phi chuẩn:</strong> <code>VatTu(maVT, tenVT, dvTinh)</code> — Trong đó <code>tenVT</code> chứa cả tên vật tư và quy cách đóng gói (VD: &ldquo;Xi măng bao 50kg&rdquo;).</p>
              <p>• <strong>Cách xử lý Tách Dọc:</strong> Tách <code>tenVT</code> thành 2 cột riêng biệt là <code>tenVT</code> và <code>quyCach</code>.</p>
              <p>• <strong>Kết quả đạt 1NF:</strong> <code>VatTu(maVT, tenVT, quyCach, dvTinh)</code> &rarr; Tất cả các cột đều đơn nguyên tử!</p>
            </div>
          </div>
        )}

        {activeMethod === "horizontal" && (
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-gray-100 pb-2">
              <strong className="text-cyan-950 font-sans text-sm">PHƯƠNG PHÁP TÁCH NGANG (SPLIT ROWS)</strong>
              <span className="text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200 text-[11px]">
                ÁP DỤNG CHO THUỘC TÍNH ĐA TRỊ
              </span>
            </div>
            <div className="space-y-1.5 text-gray-700 font-sans text-xs leading-relaxed">
              <p>• <strong>Bảng phi chuẩn:</strong> <code>Chuyen_Mon(MaGV, Mon)</code> — Trong đó 1 dòng có <code>Mon = &ldquo;Pascal, CTDL, TRR&rdquo;</code> (chứa danh sách môn học gộp chung).</p>
              <p>• <strong>Cách xử lý Tách Ngang:</strong> Tách 1 dòng thành nhiều dòng riêng biệt, mỗi dòng chứa đúng 1 môn học của giảng viên đó.</p>
              <p>• <strong>Kết quả đạt 1NF:</strong> <code>(GV01, Pascal), (GV01, CTDL), (GV01, TRR)</code> &rarr; Miền giá trị nguyên tố 100%!</p>
            </div>
          </div>
        )}

        {activeMethod === "cungcap" && (
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-gray-100 pb-2">
              <strong className="text-cyan-950 font-sans text-sm">VÍ DỤ CUNG CẤP &amp; ĐỘNG LỰC LÊN 2NF</strong>
              <span className="text-amber-700 font-bold bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200 text-[11px]">
                ĐẠT 1NF NHƯNG VẪN CÒN TRÙNG LẶP
              </span>
            </div>
            <div className="space-y-1.5 text-gray-700 font-sans text-xs leading-relaxed">
              <p>• <strong>Phi chuẩn:</strong> <code>CungCap(maNCC, tenNCC, diaChi, sanPham)</code> với <code>sanPham = &ldquo;Gạch - 50k, Xi măng - 80k&rdquo;</code>.</p>
              <p>• <strong>Chuẩn hóa 1NF:</strong> Tách thành <code>CungCap(maNCC, tenNCC, diaChi, tenSP, gia)</code> với mỗi dòng là 1 sản phẩm.</p>
              <p>• <strong>Nhận xét sâu sắc:</strong> Dù đã đạt 1NF nhưng <code>tenNCC, diaChi</code> vẫn bị lặp lại ở nhiều dòng &rarr; Đây chính là lý do cần phải tiến hành nâng cấp lên <strong>Dạng chuẩn 2 (2NF)</strong>!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
