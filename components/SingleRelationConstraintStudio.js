"use client";

import React, { useState } from "react";
import { Table, ShieldAlert, AlertTriangle, CheckCircle2, Sliders, ArrowRight, Zap, Info } from "lucide-react";

export default function SingleRelationConstraintStudio() {
  const [activeTab, setActiveTab] = useState("domain"); // 'domain' | 'inter_attr' | 'inter_tuple'

  return (
    <div className="my-8 rounded-2xl border border-sky-200/80 bg-gradient-to-br from-sky-50/40 via-white to-blue-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-sky-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-600 text-white shadow-md shadow-sky-600/20">
            <Table className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">SingleRelationConstraintStudio</h3>
              <span className="rounded-full bg-sky-100 px-2.5 py-0.5 text-xs font-semibold text-sky-800 border border-sky-200">
                Bối Cảnh 1 Quan Hệ
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Khám phá 3 loại RBTV trên một bảng: Miền giá trị, Liên thuộc tính và Liên bộ kèm giải mã bẫy nhận diện
            </p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex rounded-xl bg-sky-100/80 p-1 border border-sky-200">
          <button
            onClick={() => setActiveTab("domain")}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
              activeTab === "domain" ? "bg-sky-600 text-white shadow-sm" : "text-sky-900 hover:text-sky-700"
            }`}
          >
            5.1 Miền Giá Trị
          </button>
          <button
            onClick={() => setActiveTab("inter_attr")}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
              activeTab === "inter_attr" ? "bg-sky-600 text-white shadow-sm" : "text-sky-900 hover:text-sky-700"
            }`}
          >
            5.2 Liên Thuộc Tính
          </button>
          <button
            onClick={() => setActiveTab("inter_tuple")}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
              activeTab === "inter_tuple" ? "bg-sky-600 text-white shadow-sm" : "text-sky-900 hover:text-sky-700"
            }`}
          >
            5.3 Liên Bộ
          </button>
        </div>
      </div>

      {/* Tab 1: Domain Constraints */}
      {activeTab === "domain" && (
        <div className="mt-5 space-y-4">
          <div className="rounded-xl bg-white border border-sky-200 p-4 shadow-sm">
            <h4 className="text-sm font-bold text-sky-950">Đặc Điểm RBTV Miền Giá Trị (Domain Constraint)</h4>
            <p className="text-xs text-gray-600 mt-1 leading-relaxed">
              Quy định tập các giá trị hợp lệ mà một thuộc tính đơn lẻ có thể nhận. Không có sự tham chiếu hay so sánh với bất kỳ thuộc tính nào khác.
            </p>
            <div className="mt-3 font-mono text-xs text-indigo-900 bg-sky-50 p-3 rounded-lg border border-sky-100 leading-relaxed">
              <strong>Ví dụ chuẩn:</strong> Trong LĐQH KetQua: Điểm thi có thang điểm 0..10 và có độ chính xác đơn 0.5 điểm:
              <br />
              <span className="text-emerald-700 font-bold">
                {"∀ t ∈ KetQua : 0 ≤ t.Diem ≤ 10 ∧ ((t.Diem * 4) mod 2 = 0)"}
              </span>
            </div>
          </div>

          {/* Trap Alert */}
          <div className="rounded-xl border border-rose-300 bg-rose-50/70 p-4">
            <div className="flex items-center gap-2 text-xs font-bold text-rose-950 uppercase tracking-wider">
              <AlertTriangle className="h-4 w-4 text-rose-600" />
              BẪY KINH ĐIỂN CẦN TRÁNH TRONG BÀI THI:
            </div>
            <p className="mt-2 text-xs text-rose-900 leading-relaxed">
              Xét quan hệ <code>NHANVIEN(maNV, tenNV, luong, tamUng, conLai)</code>: Điều kiện <code>tamUng ≤ luong</code> là <strong>VÍ DỤ SAI</strong> của RBTV miền giá trị!
              <br />
              &rarr; <strong>Bản chất:</strong> Vì nó so sánh giá trị giữa 2 cột <code>tamUng</code> và <code>luong</code> với nhau, nên đây thực chất là <strong>RBTV Liên Thuộc Tính</strong>!
            </p>
          </div>
        </div>
      )}

      {/* Tab 2: Inter-Attribute Constraints */}
      {activeTab === "inter_attr" && (
        <div className="mt-5 space-y-4">
          <div className="rounded-xl bg-white border border-sky-200 p-4 shadow-sm">
            <h4 className="text-sm font-bold text-sky-950">Đặc Điểm RBTV Liên Thuộc Tính (Inter-Attribute Constraint)</h4>
            <p className="text-xs text-gray-600 mt-1 leading-relaxed">
              Thể hiện mối liên hệ và ràng buộc so sánh logic giữa các thuộc tính khác nhau trong <strong>cùng một lược đồ quan hệ</strong>.
            </p>
            <div className="mt-3 font-mono text-xs text-indigo-900 bg-sky-50 p-3 rounded-lg border border-sky-100 leading-relaxed">
              <strong>Ví dụ 5 (Giáo trình):</strong> Trong LĐQH HoaDon: &ldquo;Hàng hóa chỉ được xuất kho sau khi đã lập hóa đơn&rdquo;:
              <br />
              <span className="text-emerald-700 font-bold">
                {"∀ hd ∈ HOADON : hd.ngayHD ≤ hd.ngayXuat"}
              </span>
            </div>
          </div>

          <div className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-4 text-xs text-indigo-950 leading-relaxed font-medium">
            <strong>💡 Quy tắc tối ưu hóa thiết kế CSDL:</strong> Nếu giá trị của một thuộc tính A được tính toán từ các thuộc tính khác trong cùng bảng (ví dụ <code>conLai = luong - tamUng</code>), thì khi chuẩn hóa ta nên <strong>loại bỏ thuộc tính A</strong> ra khỏi bảng để tránh dư thừa và dị thường cập nhật.
          </div>
        </div>
      )}

      {/* Tab 3: Inter-Tuple Constraints */}
      {activeTab === "inter_tuple" && (
        <div className="mt-5 space-y-4">
          <div className="rounded-xl bg-white border border-sky-200 p-4 shadow-sm">
            <h4 className="text-sm font-bold text-sky-950">Đặc Điểm RBTV Liên Bộ (Inter-Tuple Constraint)</h4>
            <p className="text-xs text-gray-600 mt-1 leading-relaxed">
              Là sự ràng buộc giữa các bộ (dòng/tuples) khác nhau bên trong <strong>cùng một quan hệ</strong>. Thường được biểu diễn bằng <strong>Phụ thuộc hàm (Functional Dependency)</strong> hoặc quy tắc Khóa chính.
            </p>
            <div className="mt-3 font-mono text-xs text-indigo-900 bg-sky-50 p-3 rounded-lg border border-sky-100 leading-relaxed">
              <strong>Ví dụ 6 (Giáo trình):</strong> Ràng buộc C1 (Mã số sinh viên là duy nhất, không trùng):
              <br />
              <span className="text-emerald-700 font-bold">
                {"∀ t1, t2 ∈ SINH_VIEN : (t1.maSV = t2.maSV ⇒ t1 = t2)"}
              </span>
            </div>
          </div>

          <div className="rounded-xl bg-teal-50 border border-teal-200 p-4 text-xs text-teal-950 leading-relaxed font-medium">
            <strong>Tần suất xuất hiện:</strong> RBTV liên bộ là loại ràng buộc rất phổ biến, có mặt trong hầu hết mọi bảng của CSDL dưới dạng PRIMARY KEY hoặc UNIQUE CONSTRAINT được hệ DBMS tự động hỗ trợ kiểm tra.
          </div>
        </div>
      )}
    </div>
  );
}
