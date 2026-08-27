"use client";

import React, { useState } from "react";
import { AlertTriangle, CheckCircle2, XCircle, ArrowRight, ShieldCheck, Database, Split, Sparkles, RefreshCw } from "lucide-react";

export default function NormalizationMotivationStudio() {
  const [activeTab, setActiveTab] = useState("example1"); // 'example1' | 'example2'
  const [activeAnomaly, setActiveAnomaly] = useState("insert"); // 'insert' | 'delete' | 'update'

  return (
    <div className="my-8 rounded-2xl border border-rose-200/80 bg-gradient-to-br from-rose-50/40 via-white to-amber-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-rose-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-600 text-white shadow-md shadow-rose-600/20">
            <AlertTriangle className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">NormalizationMotivationStudio</h3>
              <span className="rounded-full bg-rose-100 px-2.5 py-0.5 text-xs font-semibold text-rose-800 border border-rose-200">
                Động Lực &amp; 3 Dị Thường (Mục 1-2)
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Trực quan hóa 2 ví dụ thực tế CungCapSP và NhanVien_LopHoc mô phỏng 3 thảm họa dữ liệu
            </p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex rounded-xl bg-rose-100/80 p-1 border border-rose-200">
          <button
            onClick={() => setActiveTab("example1")}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
              activeTab === "example1" ? "bg-rose-600 text-white shadow-sm" : "text-rose-900 hover:text-rose-700"
            }`}
          >
            Ví Dụ 1: Cung Cấp SP
          </button>
          <button
            onClick={() => setActiveTab("example2")}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
              activeTab === "example2" ? "bg-rose-600 text-white shadow-sm" : "text-rose-900 hover:text-rose-700"
            }`}
          >
            Ví Dụ 2: Nhân Viên - Lớp Học
          </button>
        </div>
      </div>

      {/* Tab 1: CungCapSP */}
      {activeTab === "example1" && (
        <div className="mt-5 space-y-4">
          <div className="rounded-xl border border-rose-200 bg-white p-4 shadow-sm font-mono text-xs space-y-2">
            <div className="flex items-center justify-between border-b border-gray-100 pb-2">
              <span className="font-bold text-rose-950 text-sm font-sans">
                Lược đồ chưa chuẩn hóa: CungCapSP(maNCC, tenNCC, diaChi, sanPham, gia)
              </span>
              <span className="text-red-700 bg-red-50 px-2 py-0.5 rounded text-[10px] font-bold border border-red-200">
                PHI CHUẨN (TRÙNG LẶP DỮ LIỆU)
              </span>
            </div>
            <div className="text-gray-700 font-sans text-xs leading-relaxed">
              <strong>Vấn đề: </strong> Một nhà cung cấp (maNCC) có thể cung cấp nhiều mặt hàng khác nhau &rarr; thông tin <code>tenNCC</code> và <code>diaChi</code> bị lặp lại ở nhiều hàng &rarr; lãng phí bộ nhớ lưu trữ và tốn kém chi phí kiểm tra ràng buộc toàn vẹn.
            </div>
          </div>

          {/* Solution Decomposition */}
          <div className="rounded-xl border border-emerald-300 bg-emerald-50/70 p-4 shadow-sm font-mono text-xs space-y-2">
            <div className="flex items-center gap-2 text-emerald-950 font-bold font-sans text-xs">
              <Split className="h-4 w-4 text-emerald-700" />
              <span>GIẢI PHÁP CHUẨN HÓA: TÁCH THÀNH 2 LƯỢC ĐỒ CON CẤU TRÚC TỐT (WELL-STRUCTURED)</span>
            </div>
            <div className="grid gap-2 sm:grid-cols-2 mt-2">
              <div className="bg-white p-3 rounded-lg border border-emerald-200 text-emerald-950">
                <strong className="block text-emerald-800 mb-1">1. NhaCC(maNCC, tenNCC, diaChi)</strong>
                <span className="text-[11px] text-gray-600 font-sans">Lưu trữ hồ sơ nhà cung cấp duy nhất (Khóa chính: maNCC). Không bị lặp địa chỉ.</span>
              </div>
              <div className="bg-white p-3 rounded-lg border border-emerald-200 text-emerald-950">
                <strong className="block text-emerald-800 mb-1">2. CungCap(maNCC, sanPham, gia)</strong>
                <span className="text-[11px] text-gray-600 font-sans">Lưu danh mục mặt hàng và giá (Khóa chính: {"{maNCC, sanPham}"}).</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: NhanVien - LopHoc with 3 Anomalies */}
      {activeTab === "example2" && (
        <div className="mt-5 space-y-4">
          <div className="rounded-xl border border-rose-200 bg-white p-4 shadow-sm font-mono text-xs space-y-2">
            <div className="flex items-center justify-between border-b border-gray-100 pb-2">
              <span className="font-bold text-rose-950 text-sm font-sans">
                Lược đồ: NhanVien_LopHoc(maNV, tenNV, luong, tenKH, ngayBD) &bull; Khóa chính: {"{maNV, tenKH}"}
              </span>
              <span className="text-red-700 bg-red-50 px-2 py-0.5 rounded text-[10px] font-bold border border-red-200">
                3 DỊ THƯỜNG KINH ĐIỂN
              </span>
            </div>

            {/* Anomaly Selector Buttons */}
            <div className="grid grid-cols-3 gap-2 pt-2">
              <button
                onClick={() => setActiveAnomaly("insert")}
                className={`p-2 rounded-lg border text-center font-sans font-bold text-xs transition-all ${
                  activeAnomaly === "insert"
                    ? "border-rose-500 bg-rose-100 text-rose-950 shadow-sm"
                    : "border-gray-200 bg-gray-50 text-gray-600 hover:bg-gray-100"
                }`}
              >
                1. Dị thường Thêm (Insert)
              </button>
              <button
                onClick={() => setActiveAnomaly("delete")}
                className={`p-2 rounded-lg border text-center font-sans font-bold text-xs transition-all ${
                  activeAnomaly === "delete"
                    ? "border-rose-500 bg-rose-100 text-rose-950 shadow-sm"
                    : "border-gray-200 bg-gray-50 text-gray-600 hover:bg-gray-100"
                }`}
              >
                2. Dị thường Xóa (Delete)
              </button>
              <button
                onClick={() => setActiveAnomaly("update")}
                className={`p-2 rounded-lg border text-center font-sans font-bold text-xs transition-all ${
                  activeAnomaly === "update"
                    ? "border-rose-500 bg-rose-100 text-rose-950 shadow-sm"
                    : "border-gray-200 bg-gray-50 text-gray-600 hover:bg-gray-100"
                }`}
              >
                3. Dị thường Sửa (Update)
              </button>
            </div>

            {/* Anomaly Details Box */}
            <div className="mt-3 p-3.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-950 font-sans text-xs leading-relaxed">
              {activeAnomaly === "insert" && (
                <div>
                  <strong className="text-red-900 block font-bold mb-1">⚠️ Dị thường khi thêm (Insertion Anomaly):</strong>
                  Khi tuyển dụng một nhân viên mới (chưa đăng ký tham gia lớp học nào), ta không thể chèn dòng dữ liệu này vào CSDL vì <code>tenKH</code> là thành phần của khóa chính, không được phép mang giá trị <code>NULL</code>.
                </div>
              )}
              {activeAnomaly === "delete" && (
                <div>
                  <strong className="text-red-900 block font-bold mb-1">⚠️ Dị thường khi xóa (Deletion Anomaly):</strong>
                  Nếu chỉ có một nhân viên duy nhất (ví dụ NV 140) tham gia lớp &ldquo;Luật thuế&rdquo;, khi nhân viên 140 nghỉ việc và bị xóa khỏi bảng, ta sẽ vô tình làm mất sạch toàn bộ thông tin về sự tồn tại của lớp &ldquo;Luật thuế&rdquo; trong hệ thống.
                </div>
              )}
              {activeAnomaly === "update" && (
                <div>
                  <strong className="text-red-900 block font-bold mb-1">⚠️ Dị thường khi hiệu chỉnh (Modification / Update Anomaly):</strong>
                  Nếu nhân viên 100 tham gia 5 lớp học khác nhau, lương của nhân viên 100 sẽ xuất hiện ở cả 5 dòng. Khi tăng lương cho NV 100, nếu không cập nhật đủ cả 5 dòng thì CSDL sẽ rơi vào trạng thái mâu thuẫn không nhất quán.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
