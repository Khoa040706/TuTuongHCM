"use client";

import React, { useState } from "react";
import { BookOpen, CheckCircle2, ArrowRight, Sparkles, Layers, Award, FileText, Check } from "lucide-react";

export default function Chapter7ExercisesSolverStudio() {
  const [activeExercise, setActiveExercise] = useState("ex1");

  const exercises = {
    ex1: {
      title: "Bài Tập 1: Sách Mượn > 1 Năm và Hiện Chưa Trả",
      request: "Cho biết danh sách những quyển sách có thời gian mượn lớn hơn 1 năm và hiện chưa trả.",
      rawExpr: "π_{tensach}( σ_{(CURRENT_DATE - ngay > 365) ∧ (ngaytra IS NULL)}( Sach * Muon ) )",
      steps: [
        {
          stepTitle: "1. Phân tích điều kiện & các bảng liên quan",
          content: "• Bảng tham gia: Sach(masach, tensach...) và Muon(madg, masach, ngay, ngaytra).\n• Điều kiện chọn: (CURRENT_DATE - ngay > 365) và (ngaytra IS NULL) ➔ CẢ HAI điều kiện này đều chỉ thuộc về quan hệ Muon!"
        },
        {
          stepTitle: "2. Bước 1: Đẩy phép chọn σ xuống quan hệ Muon",
          content: "Áp dụng Luật L6: Đẩy trực tiếp phép chọn xuống lá Muon:\nπ_{tensach}( Sach ⋈_{Sach.masach = Muon.masach} σ_{(CURRENT_DATE - ngay > 365) ∧ (ngaytra IS NULL)}(Muon) )"
        },
        {
          stepTitle: "3. Bước 2: Đẩy phép chiếu π xuống từng lá",
          content: "Áp dụng Luật L10: Chiếu trước các cột cần thiết:\n• Bảng Sach chỉ cần: π_{masach, tensach}(Sach)\n• Bảng Muon sau khi lọc chỉ cần: π_{masach}( σ_{...}(Muon) )"
        },
        {
          stepTitle: "4. Biểu thức tối ưu hoàn chỉnh",
          content: "π_{tensach}( π_{masach, tensach}(Sach) ⋈_{Sach.masach = Muon.masach} π_{masach}( σ_{(CURRENT_DATE - ngay > 365) ∧ (ngaytra IS NULL)}(Muon) ) )"
        }
      ]
    },
    ex2: {
      title: "Bài Tập 2: Độc Giả TP.HCM Mượn Sách 'Thế Giới Phẳng' Của NXB Trẻ",
      request: "Cho biết họ tên của những độc giả ở TP.HCM đã mượn sách có tên 'Thế giới phẳng' của NXB Trẻ.",
      rawExpr: "π_{tendg}( σ_{(diachi = 'TP.HCM') ∧ (tensach = 'Thế giới phẳng') ∧ (tennxb = 'NXB Trẻ')}( DocGia * Muon * Sach * NXB ) )",
      steps: [
        {
          stepTitle: "1. Phân tích các vị từ chọn đơn quan hệ",
          content: "• Điều kiện diachi = 'TP.HCM' chỉ thuộc quan hệ DocGia.\n• Điều kiện tensach = 'Thế giới phẳng' chỉ thuộc quan hệ Sach.\n• Điều kiện tennxb = 'NXB Trẻ' thuộc NXB (hoặc Sach nếu Sach có tennxb)."
        },
        {
          stepTitle: "2. Bước 1: Đẩy các phép chọn σ xuống từng quan hệ tương ứng",
          content: "• DocGia' = σ_{diachi = 'TP.HCM'}(DocGia)\n• Sach' = σ_{tensach = 'Thế giới phẳng'}(Sach)\n• NXB' = σ_{tennxb = 'NXB Trẻ'}(NXB)"
        },
        {
          stepTitle: "3. Bước 2: Chiếu bớt thuộc tính thừa & Kết nối theo thứ tự tối ưu",
          content: "• π_{madg, tendg}(DocGia')\n• π_{masach, tennxb}(Sach') ⋈ π_{tennxb}(NXB') ➔ Thu được masach của sách 'Thế giới phẳng' do NXB Trẻ ấn hành.\n• Kết nối kết quả trên với π_{madg, masach}(Muon) để lấy madg các độc giả đã mượn."
        },
        {
          stepTitle: "4. Biểu thức tối ưu hoàn chỉnh",
          content: "π_{tendg}( π_{madg, tendg}( σ_{diachi = 'TP.HCM'}(DocGia) ) ⋈_{DocGia.madg = Muon.madg} ( π_{madg, masach}(Muon) ⋈_{Muon.masach = Sach.masach} ( π_{masach, tennxb}( σ_{tensach = 'Thế giới phẳng'}(Sach) ) ⋈ π_{tennxb}( σ_{tennxb = 'NXB Trẻ'}(NXB) ) ) ) )"
        }
      ]
    }
  };

  const curr = exercises[activeExercise];

  return (
    <div className="my-8 rounded-2xl border border-indigo-200/80 bg-gradient-to-br from-indigo-50/40 via-white to-purple-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-indigo-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-600/20">
            <BookOpen className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">Chapter7ExercisesSolverStudio</h3>
              <span className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-semibold text-indigo-800 border border-indigo-200">
                Giải Chi Tiết Bài Tập Tự Luyện (Mục 5)
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Lời giải chi tiết từng bước xây dựng biểu thức đại số quan hệ và tối ưu hóa sâu sát lá
            </p>
          </div>
        </div>

        {/* Exercise Switcher */}
        <div className="flex rounded-xl bg-indigo-100/80 p-1 border border-indigo-200">
          <button
            onClick={() => setActiveExercise("ex1")}
            className={`rounded-lg px-3.5 py-1.5 text-xs font-bold transition-all ${
              activeExercise === "ex1" ? "bg-indigo-600 text-white shadow-sm" : "text-indigo-900 hover:text-indigo-700"
            }`}
          >
            Bài Tập 1 (Sách &gt; 1 năm)
          </button>
          <button
            onClick={() => setActiveExercise("ex2")}
            className={`rounded-lg px-3.5 py-1.5 text-xs font-bold transition-all ${
              activeExercise === "ex2" ? "bg-indigo-600 text-white shadow-sm" : "text-indigo-900 hover:text-indigo-700"
            }`}
          >
            Bài Tập 2 (Độc giả TP.HCM)
          </button>
        </div>
      </div>

      {/* Exercise Content */}
      <div className="mt-5 rounded-xl border border-indigo-200 bg-white p-5 shadow-sm space-y-4 font-mono text-xs">
        <div className="border-b border-gray-100 pb-2">
          <span className="text-[11px] font-bold text-indigo-800 uppercase block font-sans">ĐỀ BÀI:</span>
          <p className="text-sm font-bold text-gray-900 font-sans mt-0.5">{curr.request}</p>
        </div>

        <div>
          <span className="text-[11px] font-bold text-red-700 uppercase block font-sans mb-1">
            BIỂU THỨC SƠ KHAI (CHƯA TỐI ƯU):
          </span>
          <div className="rounded-xl bg-slate-950 p-3 text-red-300 font-mono text-xs text-center shadow-inner leading-relaxed">
            {curr.rawExpr}
          </div>
        </div>

        {/* Step-by-step resolution */}
        <div className="space-y-2.5 font-sans text-xs">
          <span className="text-[11px] font-bold text-indigo-900 uppercase block">
            CÁC BƯỚC TỐI ƯU HÓA CHI TIẾT:
          </span>
          {curr.steps.map((st, sIdx) => (
            <div key={sIdx} className="rounded-lg bg-indigo-50/70 p-3.5 border border-indigo-200 space-y-1">
              <strong className="text-indigo-950 font-bold block text-xs">{st.stepTitle}</strong>
              <pre className="whitespace-pre-wrap font-mono text-xs text-indigo-900 leading-relaxed bg-white p-2.5 rounded border border-indigo-100">
                {st.content}
              </pre>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
