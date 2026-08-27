"use client";

import React, { useState } from "react";
import {
  Code2,
  Terminal,
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Table,
  Cpu,
  Database,
  Divide,
  HelpCircle,
  FolderGit2
} from "lucide-react";

export default function RelationalAlgebraExerciseWorkbench() {
  const [selectedExercise, setSelectedExercise] = useState(1);

  const exercises = [
    {
      id: 1,
      title: "Câu 1: Mặt hàng còn trong kho",
      question: "Cho biết mã số và tên của các mặt hàng còn trong kho (Cohang = 1).",
      analysis: "Chỉ cần thao tác trên bảng Hanghoa. Áp dụng phép chọn σ để lấy các mặt hàng có Cohang = 1, sau đó dùng phép chiếu π để lấy 2 cột MaHG và TenHG.",
      algebra: "π_(MaHG, TenHG)(σ_(Cohang = 1)(Hanghoa))",
      sql: "SELECT MaHG, TenHG FROM Hanghoa WHERE Cohang = 1;"
    },
    {
      id: 2,
      title: "Câu 2: Khách hàng là đại lý",
      question: "Cho biết họ tên và địa chỉ của các khách hàng là đại lý (Daily = 1).",
      analysis: "Chỉ cần thao tác trên bảng Khach. Áp dụng phép chọn σ với điều kiện Daily = 1, sau đó chiếu π lấy Hoten và Diachi.",
      algebra: "π_(Hoten, Diachi)(σ_(Daily = 1)(Khach))",
      sql: "SELECT Hoten, Diachi FROM Khach WHERE Daily = 1;"
    },
    {
      id: 3,
      title: "Câu 3: Trị giá hóa đơn ngày 12/05/2007",
      question: "Cho biết trị giá của những hóa đơn lập vào ngày 12/05/2007.",
      analysis: "Chỉ cần thao tác trên bảng Hoadon. Lọc các hóa đơn có Ngaylap = '12/05/2007' bằng phép chọn σ, sau đó chiếu π lấy cột Trigia.",
      algebra: "π_(Trigia)(σ_(Ngaylap = '12/05/2007')(Hoadon))",
      sql: "SELECT Trigia FROM Hoadon WHERE Ngaylap = '12/05/2007';"
    },
    {
      id: 4,
      title: "Câu 4: Khách lẻ mua hàng ngày 15/01/2007",
      question: "Cho biết họ tên, địa chỉ của các khách hàng lẻ mua hàng vào ngày 15/01/2007.",
      analysis: "Cần kết nối 2 bảng Khach và Hoadon qua khóa MaKH. Điều kiện chọn: Daily = 0 ∧ Ngaylap = '15/01/2007'. Chiếu lấy Hoten, Diachi.",
      algebra: "π_(Hoten, Diachi)(σ_(Daily = 0 ∧ Ngaylap = '15/01/2007')(Khach * Hoadon))",
      sql: "SELECT k.Hoten, k.Diachi FROM Khach k JOIN Hoadon h ON k.MaKH = h.MaKH WHERE k.Daily = 0 AND h.Ngaylap = '15/01/2007';"
    },
    {
      id: 5,
      title: "Câu 5: Hàng mua bởi khách Đồng Tháp ngày 15/12/2006",
      question: "In ra mã số, tên hàng và đơn vị tính của các mặt hàng được khách hàng ở Đồng Tháp mua vào ngày 15/12/2006.",
      analysis: "Cần kết nối cả 4 bảng: Khach * Hoadon * Chitiet_HD * Hanghoa. Lọc theo Diachi = 'Đồng Tháp' ∧ Ngaylap = '15/12/2006'. Chiếu lấy MaHG, TenHG, DVT.",
      algebra: "π_(MaHG, TenHG, DVT)(σ_(Diachi = 'Đồng Tháp' ∧ Ngaylap = '15/12/2006')(Khach * Hoadon * Chitiet_HD * Hanghoa))",
      sql: "SELECT DISTINCT hg.MaHG, hg.TenHG, hg.DVT FROM Khach k JOIN Hoadon h ON k.MaKH = h.MaKH JOIN Chitiet_HD ct ON h.SoHD = ct.SoHD JOIN Hanghoa hg ON ct.MaHG = hg.MaHG WHERE k.Diachi = 'Đồng Tháp' AND h.Ngaylap = '15/12/2006';"
    },
    {
      id: 6,
      title: "Câu 6: Hàng thuộc hóa đơn có trị giá > 1000",
      question: "In ra mã số, tên của các mặt hàng thuộc các hóa đơn có trị giá lớn hơn 1000.",
      analysis: "Kết nối 3 bảng Hoadon * Chitiet_HD * Hanghoa. Lọc theo điều kiện Trigia > 1000. Chiếu lấy MaHG và TenHG (tự động khử trùng lặp).",
      algebra: "π_(MaHG, TenHG)(σ_(Trigia > 1000)(Hoadon * Chitiet_HD * Hanghoa))",
      sql: "SELECT DISTINCT hg.MaHG, hg.TenHG FROM Hoadon h JOIN Chitiet_HD ct ON h.SoHD = ct.SoHD JOIN Hanghoa hg ON ct.MaHG = hg.MaHG WHERE h.Trigia > 1000;"
    },
    {
      id: 7,
      title: "Câu 7: Mặt hàng chưa từng được bán",
      question: "Cho biết tên của những mặt hàng chưa từng được bán.",
      analysis: "Đây là dạng câu hỏi phủ định ('chưa từng'). Áp dụng phép hiệu (−): Lấy tập tất cả tên mặt hàng trong kho trừ đi tập tên mặt hàng đã xuất hiện trong bảng Chitiet_HD.",
      algebra: "π_(TenHG)(Hanghoa) − π_(TenHG)(Hanghoa * Chitiet_HD)",
      sql: "SELECT TenHG FROM Hanghoa WHERE MaHG NOT IN (SELECT MaHG FROM Chitiet_HD);"
    },
    {
      id: 8,
      title: "Câu 8: Đại lý không mua cả hai món H001 và H002",
      question: "Cho biết mã số, tên của những đại lý không mua hai mặt hàng 'H001' và 'H002'.",
      analysis: "Bước 1: Lấy tập tất cả đại lý (T₁). Bước 2: Lấy tập đại lý đã từng mua H001 hoặc H002 (T₂). Bước 3: Lấy T₁ − T₂.",
      algebra: "T₁ ← π_(MaKH, Hoten)(σ_(Daily = 1)(Khach))\nT₂ ← π_(MaKH, Hoten)(σ_(Daily = 1 ∧ (MaHG = 'H001' ∨ MaHG = 'H002'))(Khach * Hoadon * Chitiet_HD))\nKetQua ← T₁ − T₂",
      sql: "SELECT MaKH, Hoten FROM Khach WHERE Daily = 1 AND MaKH NOT IN (SELECT h.MaKH FROM Hoadon h JOIN Chitiet_HD ct ON h.SoHD = ct.SoHD WHERE ct.MaHG IN ('H001', 'H002'));"
    },
    {
      id: 9,
      title: "Câu 9: Hàng vừa đại lý Vĩnh Long vừa khách lẻ Trà Vinh mua",
      question: "Tìm tên của những mặt hàng vừa được mua bởi các đại lý ở Vĩnh Long, vừa được mua bởi các khách hàng lẻ ở Trà Vinh.",
      analysis: "Bước 1: Tìm tập tên hàng đại lý Vĩnh Long mua (T₁). Bước 2: Tìm tập tên hàng khách lẻ Trà Vinh mua (T₂). Bước 3: Thực hiện phép giao T₁ ∩ T₂.",
      algebra: "T₁ ← π_(TenHG)(σ_(Daily = 1 ∧ Diachi = 'Vĩnh Long')(Khach * Hoadon * Chitiet_HD * Hanghoa))\nT₂ ← π_(TenHG)(σ_(Daily = 0 ∧ Diachi = 'Trà Vinh')(Khach * Hoadon * Chitiet_HD * Hanghoa))\nKetQua ← T₁ ∩ T₂",
      sql: "SELECT hg.TenHG FROM Hanghoa hg JOIN Chitiet_HD ct ON hg.MaHG = ct.MaHG JOIN Hoadon h ON ct.SoHD = h.SoHD JOIN Khach k ON h.MaKH = k.MaKH WHERE k.Daily = 1 AND k.Diachi = 'Vĩnh Long'\nINTERSECT\nSELECT hg.TenHG FROM Hanghoa hg JOIN Chitiet_HD ct ON hg.MaHG = ct.MaHG JOIN Hoadon h ON ct.SoHD = h.SoHD JOIN Khach k ON h.MaKH = k.MaKH WHERE k.Daily = 0 AND k.Diachi = 'Trà Vinh';"
    },
    {
      id: 10,
      title: "Câu 10: Hóa đơn mua ít ra như các mặt hàng của HĐ 999",
      question: "Tìm những hóa đơn mua các mặt hàng ít ra như là các mặt hàng của hóa đơn 999 (gợi ý dùng phép chia ÷).",
      analysis: "Đây là bài toán bao hàm toàn bộ (Universal). Quan hệ bị chia R₁ là các cặp (SoHD, MaHG) đã bán. Quan hệ chia S₁ là tập các MaHG của hóa đơn 999. Lấy R₁ ÷ S₁.",
      algebra: "R₁ ← π_(SoHD, MaHG)(Chitiet_HD)\nS₁ ← π_(MaHG)(σ_(SoHD = 999)(Chitiet_HD))\nKetQua ← R₁ ÷ S₁",
      sql: "SELECT DISTINCT c1.SoHD FROM Chitiet_HD c1 WHERE NOT EXISTS (SELECT c2.MaHG FROM Chitiet_HD c2 WHERE c2.SoHD = 999 EXCEPT SELECT c3.MaHG FROM Chitiet_HD c3 WHERE c3.SoHD = c1.SoHD);"
    },
    {
      id: 11,
      title: "Câu 11: Đại lý mua tất cả mặt hàng mà KH009 đã mua ngày 20/01/2007",
      question: "Tìm địa chỉ và tên của những đại lý đã mua tất cả các mặt hàng mà đại lý 'KH009' đã mua vào ngày 20/01/2007 (gợi ý dùng phép chia ÷).",
      analysis: "Bước 1: Tạo quan hệ bị chia R₂ = π_(MaKH, MaHG) của các đại lý. Bước 2: Tạo quan hệ chia S₂ = π_(MaHG) của đại lý KH009 mua ngày 20/01/2007. Bước 3: Lấy R₂ ÷ S₂ được tập mã đại lý thỏa mãn. Bước 4: Kết nối lại với bảng Khach để chiếu lấy Hoten, Diachi.",
      algebra: "R₂ ← π_(MaKH, MaHG)(σ_(Daily = 1)(Khach * Hoadon * Chitiet_HD))\nS₂ ← π_(MaHG)(σ_(MaKH = 'KH009' ∧ Ngaylap = '20/01/2007')(Hoadon * Chitiet_HD))\nT_DaiLy ← R₂ ÷ S₂\nKetQua ← π_(Hoten, Diachi)(T_DaiLy * Khach)",
      sql: "SELECT k.Hoten, k.Diachi FROM Khach k WHERE k.Daily = 1 AND NOT EXISTS (SELECT ct.MaHG FROM Hoadon h JOIN Chitiet_HD ct ON h.SoHD = ct.SoHD WHERE h.MaKH = 'KH009' AND h.Ngaylap = '20/01/2007' EXCEPT SELECT ct2.MaHG FROM Hoadon h2 JOIN Chitiet_HD ct2 ON h2.SoHD = ct2.SoHD WHERE h2.MaKH = k.MaKH);"
    }
  ];

  const current = exercises.find((e) => e.id === selectedExercise) || exercises[0];

  return (
    <div className="my-8 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden text-slate-800">
      {/* Header */}
      <div className="px-5 py-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 border border-orange-200 flex items-center justify-center font-bold">
            <Terminal className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600">
              Exercise Master Studio • Mục 4.2
            </span>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
              Studio Lời Giải Chi Tiết 11 Bài Tập Truy Vấn Đại Số Quan Hệ
            </h3>
          </div>
        </div>
        <span className="text-xs font-mono text-orange-800 px-2.5 py-1 rounded-lg bg-orange-100 border border-orange-200 font-semibold">
          11 Exercises Solved
        </span>
      </div>

      {/* Exercises Navigation Bar */}
      <div className="p-4 bg-slate-50/80 border-b border-slate-200 flex flex-wrap gap-1.5 justify-start">
        {exercises.map((ex) => {
          const isActive = selectedExercise === ex.id;
          return (
            <button
              key={ex.id}
              onClick={() => setSelectedExercise(ex.id)}
              className={`px-3 py-1.5 rounded-lg border text-xs font-mono transition-all ${
                isActive
                  ? "bg-orange-600 border-orange-600 text-white font-bold shadow-sm"
                  : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              Câu {ex.id}
            </button>
          );
        })}
      </div>

      {/* Selected Exercise Details */}
      <div className="p-6 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
          <h4 className="text-base font-extrabold text-slate-900 flex items-center gap-2 font-mono">
            <Sparkles className="w-5 h-5 text-orange-600" />
            {current.title}
          </h4>
          <span className="px-2.5 py-0.5 text-xs font-semibold rounded bg-orange-100 text-orange-800 border border-orange-200 font-mono">
            Đề bài chính thức
          </span>
        </div>

        {/* Question & Analysis */}
        <div className="space-y-3">
          <div className="p-3.5 rounded-xl bg-orange-50/60 border border-orange-200 text-xs sm:text-sm font-semibold text-slate-900 leading-relaxed shadow-sm">
            {current.question}
          </div>

          <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200 text-xs space-y-1.5 font-sans shadow-sm">
            <div className="font-bold text-blue-800 font-mono uppercase text-[11px] flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600" /> Phân tích các bước thực hiện:
            </div>
            <p className="text-slate-700 leading-relaxed">{current.analysis}</p>
          </div>
        </div>

        {/* Relational Algebra Formula Box (Dark Terminal) */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 font-mono text-xs shadow-sm">
          <div className="text-[10px] text-orange-800 font-bold uppercase tracking-wider">
            Biểu thức Đại số quan hệ chuẩn mực:
          </div>
          <pre className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-amber-300 leading-relaxed overflow-x-auto whitespace-pre font-bold shadow-md">
            {current.algebra}
          </pre>
        </div>

        {/* SQL Equivalent (Dark Terminal) */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 font-mono text-xs shadow-sm">
          <div className="text-[10px] text-emerald-800 font-bold uppercase tracking-wider flex items-center gap-1.5">
            <Code2 className="w-3.5 h-3.5 text-emerald-600" /> Câu lệnh SQL tương đương:
          </div>
          <pre className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-emerald-300 leading-relaxed overflow-x-auto whitespace-pre shadow-md">
            {current.sql}
          </pre>
        </div>
      </div>
    </div>
  );
}
