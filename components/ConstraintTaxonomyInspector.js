"use client";

import React, { useState } from "react";
import { GitBranch, Table, Layers, ArrowRight, ShieldCheck, CheckCircle2, Info } from "lucide-react";

export default function ConstraintTaxonomyInspector() {
  const [selectedBranch, setSelectedBranch] = useState("single"); // 'single' | 'multi'

  return (
    <div className="my-8 rounded-2xl border border-teal-200/80 bg-gradient-to-br from-teal-50/40 via-white to-emerald-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-teal-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-600 text-white shadow-md shadow-teal-600/20">
            <GitBranch className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">ConstraintTaxonomyInspector</h3>
              <span className="rounded-full bg-teal-100 px-2.5 py-0.5 text-xs font-semibold text-teal-800 border border-teal-200">
                Phân Loại Theo Bối Cảnh
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Bản đồ phân loại 2 nhánh lớn của Ràng buộc toàn vẹn: Bối cảnh 1 quan hệ và Bối cảnh nhiều quan hệ
            </p>
          </div>
        </div>

        {/* Branch Selector */}
        <div className="flex rounded-xl bg-teal-100/80 p-1 border border-teal-200">
          <button
            onClick={() => setSelectedBranch("single")}
            className={`flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-bold transition-all ${
              selectedBranch === "single" ? "bg-teal-600 text-white shadow-sm" : "text-teal-900 hover:text-teal-700"
            }`}
          >
            <Table className="h-4 w-4" />
            1. Bối Cảnh Một Quan Hệ
          </button>
          <button
            onClick={() => setSelectedBranch("multi")}
            className={`flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-bold transition-all ${
              selectedBranch === "multi" ? "bg-teal-600 text-white shadow-sm" : "text-teal-900 hover:text-teal-700"
            }`}
          >
            <Layers className="h-4 w-4" />
            2. Bối Cảnh Nhiều Quan Hệ
          </button>
        </div>
      </div>

      {/* Branch Content */}
      {selectedBranch === "single" ? (
        <div className="mt-5 space-y-4">
          <div className="rounded-xl bg-teal-50 border border-teal-200 p-4 text-xs text-teal-950 leading-relaxed font-medium">
            <strong>Đặc điểm nhận diện:</strong> Điều kiện ràng buộc chỉ có hiệu lực và chỉ tham chiếu đến các thuộc tính bên trong <strong>duy nhất một bảng/quan hệ</strong> ($R$). Bảng tầm ảnh hưởng chỉ chứa đúng 1 dòng dữ liệu.
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <h4 className="text-xs font-bold text-indigo-700 uppercase tracking-wider">A. Ràng Buộc Miền Giá Trị</h4>
              <p className="text-xs text-gray-600 mt-2">
                Kiểm tra từng thuộc tính đơn lẻ trong dòng (ví dụ: 0 &le; diem &le; 10, lanThi &isin; {"{1, 2}"}, nam &isin; {"{true, false}"}).
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <h4 className="text-xs font-bold text-emerald-700 uppercase tracking-wider">B. Ràng Buộc Khóa Chính (PK)</h4>
              <p className="text-xs text-gray-600 mt-2">
                Đảm bảo mỗi bộ phân biệt duy nhất, cấm trùng lặp và cấm NULL (ví dụ: mỗi sinh viên có đúng 1 `maSV` duy nhất trong bảng `SINH_VIEN`).
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <h4 className="text-xs font-bold text-amber-700 uppercase tracking-wider">C. Ràng Buộc Liên Bộ Cùng Bảng</h4>
              <p className="text-xs text-gray-600 mt-2">
                So sánh giữa các dòng khác nhau trong cùng 1 bảng (ví dụ: ngày sinh của con phải sau ngày sinh của cha trong bảng nhân sự).
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-5 space-y-4">
          <div className="rounded-xl bg-purple-50 border border-purple-200 p-4 text-xs text-purple-950 leading-relaxed font-medium">
            <strong>Đặc điểm nhận diện:</strong> Điều kiện ràng buộc có hiệu lực trên <strong>từ 2 quan hệ trở lên</strong> ($R_1, R_2, \dots, R_n$). Bảng tầm ảnh hưởng chứa nhiều dòng và cần kiểm tra tương tác giữa các bảng.
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <h4 className="text-xs font-bold text-purple-700 uppercase tracking-wider">A. Ràng Buộc Khóa Ngoại (Tham Chiếu)</h4>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                Đảm bảo giá trị khóa ngoại ở bảng con phải tồn tại ở bảng cha (ví dụ: `SINH_VIEN(maKhoa)` phải tham chiếu tới `KHOA(makhoa)`). Thao tác Xóa ở bảng cha có nguy cơ sinh ra bản ghi mồ côi.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <h4 className="text-xs font-bold text-rose-700 uppercase tracking-wider">B. Quy Tắc Nghiệp Vụ Đa Bảng (Business Rules)</h4>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                Các quy định liên bảng phức tạp (ví dụ: trong CSDL `QLHANGHOA`, số lượng bán thực tế trong `CTIET_HD` không bao giờ được vượt quá số lượng đặt trong `DAT_HANG`).
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
