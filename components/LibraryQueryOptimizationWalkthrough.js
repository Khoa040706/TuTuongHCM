"use client";

import React, { useState } from "react";
import { BookOpen, GitBranch, ArrowRight, CheckCircle2, RotateCcw, Sparkles, Filter, Split, Layers } from "lucide-react";

export default function LibraryQueryOptimizationWalkthrough() {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      stageNumber: "0",
      badge: "CHẶNG 0: CÂY BIỂU THỨC SƠ KHAI (CANONICAL TREE)",
      title: "Biểu thức chưa tối ưu chứa kết nối tự nhiên và phép chọn ở ngọn",
      expression: "π_{tensach}( σ_{ngay < '12/01/2009'}( Sach * Muon * DocGia ) )",
      treeStructure: [
        "                 [ π_{tensach} ]",
        "                        │",
        "           [ σ_{ngay < '12/01/2009'} ]",
        "                        │",
        "                       [ * ] (Natural Join)",
        "                      /   \\",
        "                 [ Sach ]  [ * ]",
        "                          /   \\",
        "                     [ Muon ] [ DocGia ]"
      ],
      explanation: "• Điều kiện kết nối tự nhiên gồm: Sach.masach = Muon.masach và Muon.madg = DocGia.madg.\n• Phép chọn ngày mượn nằm ở đỉnh ngọn cây: Toàn bộ bảng Sach, Muon, DocGia được nhân kết nối trước, sau đó mới lọc ngày < 12/01/2009 ➔ Rất nhiều bộ trung gian thừa bị sinh ra!",
      rulesApplied: "Khởi tạo ban đầu"
    },
    {
      stageNumber: "1",
      badge: "CHẶNG 1: ĐẨY CÁC PHÉP CHỌN (σ) XUỐNG SÂU",
      title: "Tách điều kiện logic và hạ thấp các phép chọn sát lá",
      expression: "π_{tensach}( σ_{Sach.masach = Muon.masach}( Sach × ( σ_{ngay < '12/01/2009'}(Muon) ⋈_{Muon.madg = DocGia.madg} DocGia ) ) )",
      treeStructure: [
        "                 [ π_{tensach} ]",
        "                        │",
        "       [ σ_{Sach.masach = Muon.masach} ]",
        "                      /   \\",
        "                 [ Sach ]  [ ⋈_{Muon.madg = DocGia.madg} ]",
        "                              /             \\",
        "                 [ σ_{ngay < '12/01/2009'} ] [ DocGia ]",
        "                              │",
        "                           [ Muon ]"
      ],
      explanation: "• Áp dụng Luật L4, L5: Thuộc tính `ngay` chỉ thuộc quan hệ Muon, nên ta đẩy thẳng phép chọn σ_{ngay < '12/01/2009'} xuống ngay trên lá Muon.\n• Đẩy phép chọn Muon.madg = DocGia.madg xuống trước để kết nối Muon với DocGia trước khi kết nối với Sach.\n➔ Số lượng bản ghi của bảng Muon giảm mạnh trước khi kết nối!",
      rulesApplied: "Luật L4 (Tách dãy chọn), L5 (Giao hoán chọn-chiếu), L6 (Đẩy chọn qua tích Đề-các)"
    },
    {
      stageNumber: "2",
      badge: "CHẶNG 2: BIẾN ĐỔI PHÉP CHIẾU (π) & HOÀN THIỆN CÂY TỐI ƯU",
      title: "Đẩy các phép chiếu xuống để chỉ giữ lại các thuộc tính cần thiết",
      expression: "π_{tensach}( π_{tensach, masach}(Sach) ⋈_{Sach.masach = Muon.masach} ( π_{masach, madg}( σ_{ngay < '12/01/2009'}(Muon) ) ⋈_{Muon.madg = DocGia.madg} π_{madg}(DocGia) ) )",
      treeStructure: [
        "                       [ π_{tensach} ]",
        "                              │",
        "                [ ⋈_{Sach.masach = Muon.masach} ]",
        "                     /                 \\",
        "        [ π_{tensach, masach} ]    [ ⋈_{Muon.madg = DocGia.madg} ]",
        "                 │                     /               \\",
        "              [ Sach ]        [ π_{masach, madg} ]   [ π_{madg} ]",
        "                                       │                  │",
        "                          [ σ_{ngay < '12/01/2009'} ]  [ DocGia ]",
        "                                       │",
        "                                    [ Muon ]"
      ],
      explanation: "• Áp dụng Luật L10: Chiếu π_{masach, madg} trên Muon (loại bỏ cột ngay), chiếu π_{madg} trên DocGia (loại bỏ tendg, diachi), chiếu π_{tensach, masach} trên Sach (loại bỏ tacgia, tennxb).\n• Đổi hoàn toàn các phép tích Đề-các kèm điều kiện chọn thành Phép kết nối bằng (Equi-Join ⋈).\n➔ KẾT QUẢ TỐI ƯU CỰC ĐẠI: Không sinh bộ trung gian, bộ nhớ đệm thu gọn tối đa!",
      rulesApplied: "Luật L10 (Đẩy chiếu qua tích), Tổ hợp Equi-Join"
    }
  ];

  const curr = stages[activeStage];

  return (
    <div className="my-8 rounded-2xl border border-teal-200/80 bg-gradient-to-br from-teal-50/40 via-white to-indigo-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-teal-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-600 text-white shadow-md shadow-teal-600/20">
            <GitBranch className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">LibraryQueryOptimizationWalkthrough</h3>
              <span className="rounded-full bg-teal-100 px-2.5 py-0.5 text-xs font-semibold text-teal-800 border border-teal-200">
                Ví Dụ Minh Họa CSDL Thư Viện (Mục 4)
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Mô phỏng từng chặng chuyển dịch cây đại số quan hệ: Đẩy phép chọn &rarr; Đẩy phép chiếu &rarr; Tạo Equi-Join
            </p>
          </div>
        </div>

        {/* Step Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveStage(Math.max(0, activeStage - 1))}
            disabled={activeStage === 0}
            className="rounded-lg border border-teal-200 bg-white px-3 py-1.5 text-xs font-bold text-teal-900 hover:bg-teal-50 disabled:opacity-40 transition-all"
          >
            &larr; Chặng Trước
          </button>
          <span className="font-mono text-xs font-bold text-teal-950 px-2">
            Chặng {activeStage} / 2
          </span>
          <button
            onClick={() => setActiveStage(Math.min(stages.length - 1, activeStage + 1))}
            disabled={activeStage === stages.length - 1}
            className="rounded-lg bg-teal-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-teal-700 disabled:opacity-40 shadow-sm transition-all"
          >
            Chặng Tiếp &rarr;
          </button>
          <button
            onClick={() => setActiveStage(0)}
            className="p-1.5 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100"
            title="Khởi tạo lại"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Database Schema Reference */}
      <div className="mt-5 rounded-xl bg-slate-900 p-4 text-xs font-mono text-cyan-300 space-y-1 shadow-inner">
        <span className="text-teal-400 font-bold block font-sans text-[11px]">LƯỢC ĐỒ CSDL THƯ VIỆN:</span>
        <p>• <strong>Sach</strong>(<u>tensach</u>, tacgia, tennxb, masach) &bull; <strong>NXB</strong>(<u>tennxb</u>, diachi, thanhpho, manxb)</p>
        <p>• <strong>DocGia</strong>(<u>tendg</u>, diachi, madg) &bull; <strong>Muon</strong>(<u>madg, masach, ngay</u>)</p>
        <p className="text-amber-300 mt-1"><strong>Câu hỏi:</strong> Liệt kê các sách đã được mượn trước ngày <code>12/01/2009</code>.</p>
      </div>

      {/* 3 Stage Navigator Pills */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
        {stages.map((s, idx) => (
          <button
            key={idx}
            onClick={() => setActiveStage(idx)}
            className={`p-3 rounded-xl border text-left transition-all ${
              activeStage === idx
                ? "border-teal-600 bg-teal-50 shadow-sm ring-1 ring-teal-400"
                : "border-gray-200 bg-white hover:bg-gray-50 opacity-70"
            }`}
          >
            <span className="text-[10px] font-bold text-teal-800 block">CHẶNG {s.stageNumber}</span>
            <span className="font-bold text-xs text-gray-900 font-sans block mt-0.5">{s.badge.split(": ")[1]}</span>
          </button>
        ))}
      </div>

      {/* Stage Visualizer Card */}
      <div className="mt-4 rounded-xl border border-teal-200 bg-white p-5 shadow-sm space-y-4 font-mono text-xs">
        <div className="flex items-center justify-between border-b border-gray-100 pb-2">
          <h4 className="text-sm font-bold text-teal-950 font-sans">{curr.title}</h4>
          <span className="text-[11px] font-bold text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded border border-teal-200">
            {curr.rulesApplied}
          </span>
        </div>

        {/* Expression */}
        <div>
          <span className="text-gray-500 font-sans text-[11px] font-bold block mb-1">BIỂU THỨC ĐẠI SỐ QUAN HỆ:</span>
          <div className="rounded-xl bg-slate-950 p-3.5 text-emerald-300 font-mono text-xs sm:text-sm text-center shadow-inner leading-relaxed">
            {curr.expression}
          </div>
        </div>

        {/* Visual ASCII Query Tree */}
        <div>
          <span className="text-gray-500 font-sans text-[11px] font-bold block mb-1">CẤU TRÚC CÂY TRUY VẤN (QUERY TREE):</span>
          <div className="rounded-xl bg-slate-900 p-4 text-cyan-300 font-mono text-xs overflow-x-auto shadow-inner">
            <pre className="leading-tight">{curr.treeStructure.join("\n")}</pre>
          </div>
        </div>

        {/* Deep Explanation */}
        <div className="rounded-xl bg-teal-50/80 p-4 border border-teal-200 text-teal-950 font-sans text-xs space-y-1">
          <strong className="text-teal-900 block font-bold mb-1">🔍 PHÂN TÍCH QUY TRÌNH BIẾN ĐỔI:</strong>
          <pre className="whitespace-pre-wrap font-sans text-xs text-teal-950 leading-relaxed">{curr.explanation}</pre>
        </div>
      </div>
    </div>
  );
}
