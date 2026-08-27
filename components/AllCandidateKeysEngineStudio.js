"use client";

import React, { useState } from "react";
import { GitFork, CheckCircle2, XCircle, ArrowRight, ShieldCheck, Layers, Sparkles, Filter } from "lucide-react";

export default function AllCandidateKeysEngineStudio() {
  const [activePartition, setActivePartition] = useState("n_group"); // 'n_group' | 'd_group' | 'l_group' | 'pruning'

  const partitions = {
    n_group: {
      id: "n_group",
      title: "1. Tập N = U \\ UR (Thuộc tính Nguồn & Cô lập)",
      badge: "BẮT BUỘC CÓ TRONG MỌI KHÓA",
      math: "N = U \\ UR (gồm các thuộc tính không xuất hiện ở vế phải)",
      meaning: "Vì các thuộc tính trong N không bao giờ được xác định hàm bởi bất kỳ thuộc tính nào khác, nên để bao đóng đạt được U, MỌI KHÓA bắt buộc phải chứa toàn bộ tập N (N ⊆ Khóa).",
      shortcut: "⚡ Nếu N⁺ = U thì N chính là KHÓA DUY NHẤT của quan hệ R ➔ Dừng thuật toán ngay lập tức!",
      color: "from-emerald-600 to-teal-600"
    },
    d_group: {
      id: "d_group",
      title: "2. Tập D = UR \\ UL (Thuộc tính Đích thuần túy)",
      badge: "KHÔNG BAO GIỜ CÓ TRONG KHÓA TỐI TIỂU",
      math: "D = UR \\ UL (gồm các thuộc tính CHỈ xuất hiện ở vế phải)",
      meaning: "Các thuộc tính trong D chỉ được sinh ra từ các thuộc tính khác mà không bao giờ tham gia xác định thuộc tính nào. Do đó đưa D vào khóa chỉ làm khóa bị dư thừa (D ∩ Khóa = ∅).",
      shortcut: "⚡ Ta loại bỏ 100% các thuộc tính trong D khỏi quá trình tìm kiếm khóa, giúp giảm không gian tìm kiếm cực lớn!",
      color: "from-rose-600 to-pink-600"
    },
    l_group: {
      id: "l_group",
      title: "3. Tập L = U \\ (N ∪ D) (Thuộc tính Trung gian)",
      badge: "THỬ NGHIỆM TỔ HỢP THEO BẬC TĂNG DẦN",
      math: "L = U \\ (N ∪ D) (gồm các thuộc tính xuất hiện ở CẢ HAI VẾ)",
      meaning: "Các thuộc tính trong L có thể thuộc khóa hoặc không. Thuật toán sẽ lần lượt thử kết hợp N với các tập con Li ⊆ L theo thứ tự số phần tử tăng dần: |Li| = 1, 2, 3...",
      shortcut: "⚡ Với mỗi Li, đặt X = N ∪ Li. Nếu X⁺ = U thì X là một khóa tối tiểu!",
      color: "from-amber-600 to-orange-600"
    },
    pruning: {
      id: "pruning",
      title: "4. Cơ Chế Cắt Tỉa Nhánh Tối Ưu (Branch Pruning)",
      badge: "TRIỆT TIÊU DƯ THỪA TỐI ĐA",
      math: "Nếu X = N ∪ Li là Khóa ⟹ KHÔNG THỬ các Lj ⊃ Li",
      meaning: "Nếu tập X = N ∪ Li đã có bao đóng bằng U (đã là một khóa), thì mọi tập cha mở rộng của nó (chứa thêm các thuộc tính khác) chắc chắn chỉ là SIÊU KHÓA BỊ DƯ THỪA, không thể là khóa tối tiểu.",
      shortcut: "⚡ Cắt bỏ toàn bộ các nhánh con bên dưới giúp thuật toán chạy cực nhanh và chính xác!",
      color: "from-indigo-600 to-purple-600"
    }
  };

  const curr = partitions[activePartition];

  return (
    <div className="my-8 rounded-2xl border border-teal-200/80 bg-gradient-to-br from-teal-50/40 via-white to-emerald-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-teal-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-600 text-white shadow-md shadow-teal-600/20">
            <GitFork className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">AllCandidateKeysEngineStudio</h3>
              <span className="rounded-full bg-teal-100 px-2.5 py-0.5 text-xs font-semibold text-teal-800 border border-teal-200">
                Thuật Toán Phân Loại N / D / L
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Cỗ máy tìm TẤT CẢ các khóa tối tiểu bằng phân rã không gian thuộc tính và cắt tỉa nhánh
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-1 rounded-xl bg-teal-100/80 p-1 border border-teal-200">
          {Object.keys(partitions).map((key) => (
            <button
              key={key}
              onClick={() => setActivePartition(key)}
              className={`rounded-lg px-2.5 py-1.5 text-xs font-bold transition-all ${
                activePartition === key ? "bg-teal-600 text-white shadow-sm" : "text-teal-900 hover:text-teal-700"
              }`}
            >
              {partitions[key].title.split(". ")[1].split(" ")[0]} {partitions[key].title.split(". ")[1].split(" ")[1] || ""}
            </button>
          ))}
        </div>
      </div>

      {/* 3-Bucket Visual Diagram */}
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-4 text-center">
          <span className="font-mono text-xs font-bold text-emerald-900 block">NHÓM N (Nguồn)</span>
          <span className="text-[11px] text-emerald-700 font-semibold mt-1 block">N = U \ UR</span>
          <span className="text-[10px] text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded mt-2 inline-block font-bold">
            Bắt buộc có trong mọi khóa
          </span>
        </div>

        <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-4 text-center">
          <span className="font-mono text-xs font-bold text-amber-900 block">NHÓM L (Trung Gian)</span>
          <span className="text-[11px] text-amber-700 font-semibold mt-1 block">L = U \ (N ∪ D)</span>
          <span className="text-[10px] text-amber-800 bg-amber-100 px-2 py-0.5 rounded mt-2 inline-block font-bold">
            Thử tổ hợp Li tăng dần
          </span>
        </div>

        <div className="rounded-xl border border-rose-200 bg-rose-50/70 p-4 text-center">
          <span className="font-mono text-xs font-bold text-rose-900 block">NHÓM D (Đích)</span>
          <span className="text-[11px] text-rose-700 font-semibold mt-1 block">D = UR \ UL</span>
          <span className="text-[10px] text-rose-800 bg-rose-100 px-2 py-0.5 rounded mt-2 inline-block font-bold">
            Loại bỏ hoàn toàn (D ∩ Khóa = ∅)
          </span>
        </div>
      </div>

      {/* Selected Card Details */}
      <div className="mt-4 rounded-xl border border-teal-200 bg-white p-5 shadow-sm space-y-3">
        <div className="flex items-center justify-between border-b border-gray-100 pb-2">
          <h4 className="text-sm font-bold text-teal-950">{curr.title}</h4>
          <span className="font-mono text-[11px] font-bold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded border border-teal-200">
            {curr.badge}
          </span>
        </div>

        <div className="rounded-lg bg-teal-50 p-2.5 font-mono text-xs text-teal-950 font-bold border border-teal-100">
          CÔNG THỨC XÁC ĐỊNH: {curr.math}
        </div>

        <p className="text-xs text-gray-700 leading-relaxed font-medium">
          <strong>Ý nghĩa toán học: </strong>{curr.meaning}
        </p>

        <div className="rounded-lg bg-amber-50 p-3 text-xs text-amber-950 font-mono border border-amber-200">
          {curr.shortcut}
        </div>
      </div>
    </div>
  );
}
