"use client";

import React, { useState } from "react";
import { Compass, CheckCircle2, ArrowRight, Sparkles, Filter, Layers, Database, Cpu, FileText, Calculator } from "lucide-react";

export default function GeneralOptimizationStrategiesStudio() {
  const [selectedStrategy, setSelectedStrategy] = useState(0);

  const strategies = [
    {
      id: "strat1",
      number: "1",
      title: "Thực hiện phép chọn (Selection) sớm nhất có thể",
      tag: "QUY TẮC VÀNG #1",
      icon: Filter,
      color: "emerald",
      principle: "Đẩy phép chọn (σ) xuống sâu nhất có thể trong cây biểu thức đại số quan hệ.",
      impact: "Giảm mạnh số bộ dữ liệu (cardinality) cần xử lý ở tất cả các toán tử phía trên trong cây.",
      example: "Thay vì tính (R × S) rồi mới chọn σ_{A=10}, ta tính (σ_{A=10}(R) × S) để triệt tiêu ngay các dòng không thỏa từ đầu."
    },
    {
      id: "strat2",
      number: "2",
      title: "Tổ hợp phép chọn với tích Đề-các thành phép kết nối (Join)",
      tag: "QUY TẮC VÀNG #2",
      icon: Layers,
      color: "cyan",
      principle: "Chuyển đổi σ_{điều kiện kết nối}(R × S) thành phép kết nối (R ⋈_{điều kiện} S).",
      impact: "Tránh tạo ra bảng tích Đề-các trung gian khổng lồ; tận dụng các giải thuật kết nối tối ưu như Hash Join hay Index Join.",
      example: "σ_{R.id = S.r_id}(R × S) ➔ R ⋈_{R.id = S.r_id} S."
    },
    {
      id: "strat3",
      number: "3",
      title: "Tổ hợp các phép tính một ngôi (Unary Operations)",
      tag: "PIPELINING UNARY",
      icon: Cpu,
      color: "indigo",
      principle: "Gom cụm các phép chọn (σ) và phép chiếu (π) liên tiếp để thực hiện trong cùng một lượt quét (single scan).",
      impact: "Giảm số lần duyệt dữ liệu trên đĩa và giảm chi phí chuyển đổi bộ đệm trung gian.",
      example: "π_{A, B}(σ_{C > 5}(σ_{D = 10}(R))) ➔ Thực hiện đồng thời cả lọc C > 5, D = 10 và chỉ giữ lại cột A, B trong 1 vòng lặp."
    },
    {
      id: "strat4",
      number: "4",
      title: "Tìm các biểu thức con chung (Common Sub-expressions)",
      tag: "SUB-EXPRESSION CACHING",
      icon: Sparkles,
      color: "purple",
      principle: "Nhận diện các biểu thức con xuất hiện nhiều lần trong cùng một cây truy vấn hoặc batch truy vấn.",
      impact: "Chỉ tính toán biểu thức con đó một lần duy nhất, lưu kết quả tạm vào bộ đệm RAM để tái sử dụng.",
      example: "Biểu thức (R ⋈ S) ∪ (R ⋈ S ⋈ T) ➔ Tính E = (R ⋈ S) trước, sau đó tính E ∪ (E ⋈ T)."
    },
    {
      id: "strat5",
      number: "5",
      title: "Xử lý và tối ưu cấu trúc tệp (Files & Indexes) trước",
      tag: "ACCESS PATH SELECTION",
      icon: FileText,
      color: "amber",
      principle: "Xem xét cấu trúc tổ chức vật lý của tệp dữ liệu, chỉ mục (B-Tree, Hash Index, Clustered Index) sẵn có.",
      impact: "Lựa chọn đường dẫn truy xuất trực tiếp qua chỉ mục thay vì quét toàn bộ bảng (Full Table Scan).",
      example: "Nếu cột D có B-Tree Index, truy vấn σ_{D=100}(S) chỉ cần đọc độ cao cây index (h=3 khối đĩa) thay vì quét 10.000 khối đĩa."
    },
    {
      id: "strat6",
      number: "6",
      title: "Đánh giá chi phí trước khi thực hiện (Cost Estimation)",
      tag: "COST-BASED OPTIMIZATION",
      icon: Calculator,
      color: "blue",
      principle: "Ước lượng chi phí I/O và CPU của tất cả các kế hoạch thực thi khả dĩ (Execution Plans) dựa trên Data Catalog.",
      impact: "Chọn ra kế hoạch có tổng chi phí (Total Estimated Cost) tối thiểu để gửi đến động cơ thực thi.",
      example: "So sánh chi phí Nested-Loop Join (O(N·M)) vs Hash Join (O(N+M)) để tự động quyết định giải thuật nhanh nhất."
    }
  ];

  const curr = strategies[selectedStrategy];
  const IconComp = curr.icon;

  return (
    <div className="my-8 rounded-2xl border border-indigo-200/80 bg-gradient-to-br from-indigo-50/40 via-white to-blue-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-indigo-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-600/20">
            <Compass className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">GeneralOptimizationStrategiesStudio</h3>
              <span className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-semibold text-indigo-800 border border-indigo-200">
                6 Chiến Lược Tối Ưu Tổng Quát (Mục 2)
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Bộ quy tắc &amp; chiến lược nền tảng điều khiển cỗ máy tối ưu hóa truy vấn trong các hệ RDBMS
            </p>
          </div>
        </div>
      </div>

      {/* 6 Strategies Grid Navigator */}
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 font-mono text-xs">
        {strategies.map((s, idx) => {
          const SIcon = s.icon;
          return (
            <button
              key={s.id}
              onClick={() => setSelectedStrategy(idx)}
              className={`p-3.5 rounded-xl border text-left transition-all ${
                selectedStrategy === idx
                  ? "border-indigo-600 bg-indigo-50 shadow-sm ring-1 ring-indigo-400"
                  : "border-gray-200 bg-white hover:bg-gray-50 opacity-75"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-indigo-800 bg-indigo-100/70 px-2 py-0.5 rounded">
                  CHIẾN LƯỢC {s.number}
                </span>
                <SIcon className="h-4 w-4 text-indigo-600" />
              </div>
              <span className="font-bold text-xs text-gray-900 font-sans block mt-1.5 leading-snug">
                {s.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Detailed Strategy Inspector */}
      <div className="mt-4 rounded-xl border border-indigo-200 bg-white p-5 shadow-sm space-y-4 font-mono text-xs">
        <div className="flex items-center justify-between border-b border-gray-100 pb-2.5">
          <div className="flex items-center gap-2">
            <IconComp className="h-5 w-5 text-indigo-600" />
            <h4 className="text-sm font-bold text-indigo-950 font-sans">
              Chiến Lược {curr.number}: {curr.title}
            </h4>
          </div>
          <span className="font-bold text-[11px] bg-indigo-100 text-indigo-900 px-3 py-0.5 rounded-full border border-indigo-200">
            {curr.tag}
          </span>
        </div>

        <div className="space-y-3 font-sans text-xs">
          <div className="rounded-lg bg-indigo-50/70 p-3 border border-indigo-200 space-y-1">
            <strong className="text-indigo-950 font-bold block">🎯 NGUYÊN TẮC CỐT LÕI:</strong>
            <p className="text-gray-700 leading-relaxed">{curr.principle}</p>
          </div>

          <div className="rounded-lg bg-emerald-50/70 p-3 border border-emerald-200 space-y-1">
            <strong className="text-emerald-950 font-bold block">⚡ TÁC ĐỘNG HIỆU NĂNG:</strong>
            <p className="text-gray-700 leading-relaxed">{curr.impact}</p>
          </div>

          <div className="rounded-lg bg-slate-900 p-3.5 text-emerald-400 font-mono text-xs space-y-1 shadow-inner">
            <span className="text-amber-300 font-bold block font-sans text-[11px]">VÍ DỤ MINH HỌA ÁP DỤNG:</span>
            <pre className="whitespace-pre-wrap font-mono text-xs text-emerald-300">{curr.example}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}
