"use client";

import React, { useState, useMemo } from "react";
import {
  BookOpen,
  ShieldCheck,
  Database,
  Layers,
  GitBranch,
  Activity,
  KeyRound,
  Sparkles,
  CheckCircle2,
  Search,
  RotateCw,
  Table,
  Cpu,
  ChevronRight,
  Info,
  CheckSquare,
  Square
} from "lucide-react";

export default function DatabaseChapter4SummaryDashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [completedPillars, setCompletedPillars] = useState([1, 2]); // student tracking progress
  const [activePillarModal, setActivePillarModal] = useState(null);

  const pillars = [
    {
      id: 1,
      category: "Nền Tảng Lý Thuyết",
      title: "1. Khái Niệm Điều Kiện Bất Biến",
      icon: ShieldCheck,
      color: "from-blue-600 to-cyan-600",
      accentBg: "bg-blue-50 text-blue-800 border-blue-200",
      desc: "RBTV là điều kiện bất biến mà mọi đối tượng CSDL phải thỏa mãn ở mọi thời điểm, phản ánh trung thực các quy tắc quản lý nghiệp vụ đời thực.",
      examTip: "Bẫy thi: RBTV không phải là code chương trình hay giao diện, mà là ràng buộc ngữ nghĩa nội tại của dữ liệu!",
      keyFormula: "Mọi trạng thái s ∈ S : P(s) = TRUE"
    },
    {
      id: 2,
      category: "Cấu Trúc Cốt Lõi",
      title: "2. Ba Yếu Tố Cấu Thành RBTV",
      icon: Layers,
      color: "from-emerald-600 to-teal-600",
      accentBg: "bg-emerald-50 text-emerald-800 border-emerald-200",
      desc: "Một RBTV đầy đủ gồm: Điều kiện (4 cách diễn đạt), Bối cảnh (1 hoặc nhiều quan hệ) và Tầm ảnh hưởng (thời điểm và thao tác kích hoạt kiểm tra).",
      examTip: "4 cách diễn đạt: Ngôn ngữ tự nhiên, Đại số quan hệ, Vị từ bậc 1, và Cú pháp SQL.",
      keyFormula: "RBTV = (Điều kiện, Bối cảnh, Tầm ảnh hưởng)"
    },
    {
      id: 3,
      category: "Kỹ Thuật Tối Ưu",
      title: "3. Nguyên Lý Bảng Tầm Ảnh Hưởng",
      icon: Activity,
      color: "from-amber-600 to-orange-600",
      accentBg: "bg-amber-50 text-amber-800 border-amber-200",
      desc: "Dấu (+) bắt buộc kiểm tra, Dấu (-) an toàn bỏ qua kiểm tra, Dấu (+(*)) chỉ kiểm tra khi thuộc tính liên quan bị sửa đổi.",
      examTip: "Xóa (-) trên bảng độc lập (như SINH_VIEN với C1) không bao giờ làm tăng số bộ nên không bao giờ vi phạm duy nhất!",
      keyFormula: "+ (Cần KT), - (Bỏ qua), +(*) (Có điều kiện)"
    },
    {
      id: 4,
      category: "Phân Loại Bối Cảnh 1 Bảng",
      title: "4. RBTV Miền Giá Trị vs Bẫy",
      icon: Database,
      color: "from-rose-600 to-pink-600",
      accentBg: "bg-rose-50 text-rose-800 border-rose-200",
      desc: "Quy định trên 1 cột đơn lẻ (0 <= Diem <= 10). Bẫy thường gặp: tamUng <= luong thực chất là RBTV Liên thuộc tính chứ không phải Miền giá trị!",
      examTip: "Cứ có so sánh 2 cột khác nhau trong cùng 1 dòng thì là Liên thuộc tính, không được chọn Miền giá trị.",
      keyFormula: "∀ t ∈ R : t.A ∈ Domain(A)"
    },
    {
      id: 5,
      category: "Phân Loại Bối Cảnh 1 Bảng",
      title: "5. RBTV Liên Thuộc Tính & Liên Bộ",
      icon: GitBranch,
      color: "from-purple-600 to-indigo-600",
      accentBg: "bg-purple-50 text-purple-800 border-purple-200",
      desc: "Liên thuộc tính so sánh các cột trong 1 dòng (ngayHD <= ngayXuat). Liên bộ so sánh giữa các dòng khác nhau (Khóa chính C1: t1.maSV = t2.maSV => t1 = t2).",
      examTip: "Liên bộ KHÔNG thể cài đặt bằng CHECK constraint thông thường trong T-SQL mà phải dùng UNIQUE hoặc TRIGGER!",
      keyFormula: "Liên bộ: ∀ t1, t2 ∈ R : P(t1, t2)"
    },
    {
      id: 6,
      category: "Phân Loại Đa Bảng",
      title: "6. Hai Dấu Hiệu Phụ Thuộc Tồn Tại",
      icon: KeyRound,
      color: "from-teal-600 to-emerald-600",
      accentBg: "bg-teal-50 text-teal-800 border-teal-200",
      desc: "Dấu hiệu 1: K1 ⊆ K2 (Khóa của R1 nằm trong khóa chính phức hợp của R2). Dấu hiệu 2: K1 ⊆ R2 (Khóa của R1 là khóa ngoại đơn của R2).",
      examTip: "Bảng Cha giữ Khóa chính (Referenced), Bảng Con giữ Khóa ngoại (Referencing).",
      keyFormula: "K1 ⊆ K2 (Phức hợp) | K1 ⊆ R2 (Đơn)"
    },
    {
      id: 7,
      category: "Phân Loại Đa Bảng",
      title: "7. RBTV Đa Bảng & Thuộc Tính Tổng Hợp",
      icon: Layers,
      color: "from-cyan-600 to-blue-600",
      accentBg: "bg-cyan-50 text-cyan-800 border-cyan-200",
      desc: "Liên bộ liên bảng (Hóa đơn phải có mặt hàng), thuộc tính dẫn xuất tổng hợp (congNo = Tổng HĐ - Tổng Thu).",
      examTip: "Luôn cần Trigger đồng bộ đa chiều khi Thêm, Xóa, Sửa trên bất kỳ bảng thành phần nào.",
      keyFormula: "Attr_Derived = Agg_Function(Related_Tables)"
    },
    {
      id: 8,
      category: "Nâng Cao & Đồ Án",
      title: "8. Chu Trình Đồ Thị CSDL",
      icon: RotateCw,
      color: "from-violet-600 to-purple-600",
      accentBg: "bg-violet-50 text-violet-800 border-violet-200",
      desc: "Chu trình DatHang - HoaDon - CtietHD và 3 chính sách giao hàng (chuẩn CSDL QLHANGHOA: giao thiếu nhưng không vượt số lượng đã đặt).",
      examTip: "Đồ họa chu trình khép kín bắt buộc dùng Trigger để kiểm soát điều kiện bao hàm tập con π(CTIET_HD) ⊆ π(HOA_DON ⋈ DAT_HANG).",
      keyFormula: "π(CTIET_HD) ⊆ π(HOA_DON ⋈ DAT_HANG)"
    }
  ];

  const filteredPillars = useMemo(() => {
    return pillars.filter((p) => {
      const q = searchQuery.toLowerCase().trim();
      if (!q) return true;
      return (
        p.title.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.examTip.toLowerCase().includes(q)
      );
    });
  }, [searchQuery]);

  const toggleComplete = (id) => {
    if (completedPillars.includes(id)) {
      setCompletedPillars(completedPillars.filter((p) => p !== id));
    } else {
      setCompletedPillars([...completedPillars, id]);
    }
  };

  const progressPercent = Math.round((completedPillars.length / pillars.length) * 100);

  return (
    <div className="my-8 rounded-3xl border border-indigo-200/80 bg-gradient-to-br from-indigo-50/40 via-white to-purple-50/20 p-5 sm:p-7 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-indigo-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-600/20">
            <BookOpen className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-extrabold text-slate-900">DatabaseChapter4SummaryDashboard</h3>
              <span className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-bold text-indigo-800 border border-indigo-200">
                8 Trọng Điểm Cốt Lõi
              </span>
            </div>
            <p className="text-xs text-slate-600 mt-0.5">
              Bản đồ tri thức toàn diện từ Khái niệm bất biến, Bảng tầm ảnh hưởng đến Phân loại 8 nhánh và Chu trình đồ án
            </p>
          </div>
        </div>

        {/* Live Search */}
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
          <input
            type="text"
            placeholder="Tìm trọng điểm, mẹo thi..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-slate-200 bg-white text-xs text-slate-800 placeholder-slate-400 focus:border-indigo-500 focus:outline-none shadow-sm"
          />
        </div>
      </div>

      {/* Progress Bar Banner */}
      <div className="mt-5 rounded-2xl border border-indigo-100 bg-white p-4 shadow-sm flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700 font-bold font-mono text-sm border border-indigo-200">
            {completedPillars.length}/8
          </div>
          <div>
            <span className="text-xs font-bold text-slate-800 block">
              Tiến Độ Ôn Tập Chương IV: Ràng Buộc Toàn Vẹn
            </span>
            <span className="text-[11px] text-slate-500">
              Đã đánh dấu thông thạo {completedPillars.length} / 8 trọng điểm cốt lõi ({progressPercent}%)
            </span>
          </div>
        </div>

        {/* Bar */}
        <div className="w-full sm:w-48 h-2.5 rounded-full bg-slate-100 overflow-hidden border border-slate-200">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* 8 Pillars Responsive Grid: 1 col on mobile, 2 cols on laptop (sm & md & lg), 4 cols on xl */}
      <div className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
        {filteredPillars.map((p) => {
          const Icon = p.icon;
          const isDone = completedPillars.includes(p.id);
          return (
            <div
              key={p.id}
              className={`flex flex-col justify-between rounded-2xl border p-4 sm:p-5 transition-all shadow-sm hover:shadow-md ${
                isDone
                  ? "bg-white border-indigo-200 ring-1 ring-indigo-200"
                  : "bg-white border-slate-200 hover:border-slate-300"
              }`}
            >
              <div>
                {/* Card Top Header */}
                <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
                  <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold border ${p.accentBg}`}>
                    {p.category}
                  </span>
                  <button
                    onClick={() => toggleComplete(p.id)}
                    className="flex items-center gap-1 text-[11px] font-bold text-slate-500 hover:text-indigo-600 transition-colors"
                  >
                    {isDone ? (
                      <CheckSquare className="h-4 w-4 text-emerald-600" />
                    ) : (
                      <Square className="h-4 w-4 text-slate-400" />
                    )}
                    <span>{isDone ? "Đã hiểu" : "Chưa thuộc"}</span>
                  </button>
                </div>

                {/* Card Title & Icon */}
                <div className="mt-3 flex items-center gap-2.5">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br ${p.color} text-white shadow-sm shrink-0`}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                  <h4 className="text-xs font-extrabold text-slate-900 leading-snug">{p.title}</h4>
                </div>

                <p className="mt-2.5 text-xs text-slate-600 leading-relaxed font-normal">{p.desc}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 space-y-2">
                {/* Formal Formula Tag */}
                <div className="rounded-lg bg-slate-900 p-2 font-mono text-[10px] text-emerald-300 overflow-x-auto whitespace-nowrap">
                  {p.keyFormula}
                </div>

                {/* Exam Tip Callout */}
                <div className="rounded-lg bg-amber-50/80 p-2 text-[11px] text-amber-900 border border-amber-200 font-medium leading-relaxed">
                  <strong>💡 Mẹo thi: </strong>
                  {p.examTip}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
