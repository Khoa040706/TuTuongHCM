"use client";

import React from "react";
import { BookOpen, ShieldCheck, Database, Layers, GitBranch, Activity, KeyRound, Sparkles, CheckCircle2 } from "lucide-react";

export default function DatabaseChapter4SummaryDashboard() {
  const pillars = [
    {
      id: 1,
      title: "1. Khái Niệm Điều Kiện Bất Biến",
      icon: ShieldCheck,
      color: "from-blue-600 to-cyan-600",
      desc: "RBTV là điều kiện bất biến mà mọi đối tượng CSDL phải thỏa mãn ở mọi thời điểm, phản ánh quy tắc quản lý thực tế."
    },
    {
      id: 2,
      title: "2. Ba Yếu Tố Cấu Thành",
      icon: Layers,
      color: "from-emerald-600 to-teal-600",
      desc: "Điều kiện (4 cách diễn đạt), Bối cảnh (1 hoặc nhiều quan hệ) và Tầm ảnh hưởng (thời điểm kiểm tra)."
    },
    {
      id: 3,
      title: "3. Nguyên Lý Bảng Tầm Ảnh Hưởng",
      icon: Activity,
      color: "from-amber-600 to-orange-600",
      desc: "Dấu (+) bắt buộc kiểm tra, Dấu (-) an toàn bỏ qua kiểm tra, Dấu (-(*)) chỉ kiểm tra khi sửa cột liên quan."
    },
    {
      id: 4,
      title: "4. RBTV Miền Giá Trị vs Bẫy",
      icon: Database,
      color: "from-rose-600 to-pink-600",
      desc: "Quy định trên 1 cột đơn lẻ (0 <= Diem <= 10). Bẫy: tamUng <= luong thực chất là RBTV Liên thuộc tính!"
    },
    {
      id: 5,
      title: "5. RBTV Liên Thuộc Tính & Liên Bộ",
      icon: GitBranch,
      color: "from-purple-600 to-indigo-600",
      desc: "Liên thuộc tính so sánh 2 cột (ngayHD <= ngayXuat). Liên bộ so sánh giữa các dòng khác nhau (Khóa chính C1)."
    },
    {
      id: 6,
      title: "6. Hai Dấu Hiệu Phụ Thuộc Tồn Tại",
      icon: KeyRound,
      color: "from-teal-600 to-emerald-600",
      desc: "Dấu hiệu 1 (K1 ⊆ K2: Khóa chính phức hợp). Dấu hiệu 2 (K1 ⊆ R2: Khóa ngoại thông thường)."
    },
    {
      id: 7,
      title: "7. RBTV Đa Bảng & Thuộc Tính Tổng Hợp",
      icon: Layers,
      color: "from-cyan-600 to-blue-600",
      desc: "Liên bộ liên bảng (Hóa đơn phải có mặt hàng), thuộc tính dẫn xuất tổng hợp (congNo = Tổng HĐ - Tổng Thu)."
    },
    {
      id: 8,
      title: "8. Chu Trình Đồ Thị CSDL",
      icon: GitBranch,
      color: "from-violet-600 to-purple-600",
      desc: "Chu trình DatHang - HoaDon - CtietHD và 3 chính sách giao hàng (chuẩn CSDL QLHANGHOA: giao thiếu nhưng không vượt)."
    }
  ];

  return (
    <div className="my-8 rounded-2xl border border-gray-200 bg-gradient-to-br from-slate-50 via-white to-gray-50 p-6 shadow-xl">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-gray-200 pb-5">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700 border border-indigo-200 shadow-sm">
          <BookOpen className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">
            Grand Summary Dashboard: Toàn Diện 8 Trọng Điểm Ràng Buộc Toàn Vẹn (Chương IV)
          </h3>
          <p className="text-xs text-gray-600 mt-0.5">
            Bản đồ tri thức trọn vẹn từ Khái niệm bất biến, Bảng tầm ảnh hưởng đến Phân loại 8 nhánh RBTV và Bài tập đồ án
          </p>
        </div>
      </div>

      {/* 8 Pillars Grid */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.id}
              className="flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center gap-2.5">
                  <div className={`flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br ${p.color} text-white shadow-sm shrink-0`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <h4 className="text-xs font-bold text-gray-900 leading-tight">{p.title}</h4>
                </div>

                <p className="mt-3 text-xs text-gray-600 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
