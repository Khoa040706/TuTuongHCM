"use client";

import React, { useState } from "react";
import { Award, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Scale, Zap, BookOpen } from "lucide-react";

export default function QueryOptimizationMasterSummaryDashboard() {
  const [activeTab, setActiveTab] = useState("golden_rules");

  const rulesSummaryTable = [
    { code: "L1", title: "Giao hoán: join / tích Đề-các", formula: "E₁ ⋈ E₂ ≡ E₂ ⋈ E₁ ; E₁ × E₂ ≡ E₂ × E₁" },
    { code: "L2", title: "Kết hợp: join / tích Đề-các", formula: "(E₁ ⋈ E₂) ⋈ E₃ ≡ E₁ ⋈ (E₂ ⋈ E₃)" },
    { code: "L3", title: "Dãy các phép chiếu", formula: "π_{A}(π_{B}(E)) ≡ π_{A}(E) (nếu A ⊆ B) → Rút gọn còn 1 phép chiếu ngoài" },
    { code: "L4", title: "Dãy các phép chọn", formula: "σ_{F₁}(σ_{F₂}(E)) ≡ σ_{F₁ ∧ F₂}(E) → Gộp bằng AND, có tính giao hoán" },
    { code: "L5", title: "Giao hoán chọn & chiếu", formula: "σ_F(π_A(E)) ≡ π_A(σ_F(E)) (khi các thuộc tính của F thuộc A)" },
    { code: "L6", title: "Đẩy phép chọn vào tích Đề-các", formula: "σ_F(E₁ × E₂) ≡ σ_F(E₁) × E₂ ; σ_{F₁ ∧ F₂}(E₁ × E₂) ≡ σ_{F₁}(E₁) × σ_{F₂}(E₂)" },
    { code: "L7", title: "Giao hoán chọn & hợp (union)", formula: "σ_F(E₁ ∪ E₂) ≡ σ_F(E₁) ∪ σ_F(E₂)" },
    { code: "L8", title: "Giao hoán chọn & hiệu (difference)", formula: "σ_F(E₁ \\ E₂) ≡ σ_F(E₁) \\ σ_F(E₂)" },
    { code: "L9", title: "Chọn & natural join (thuộc tính chung)", formula: "σ_F(E₁ ⋈ E₂) ≡ σ_F(E₁) ⋈ σ_F(E₂)" },
    { code: "L10", title: "Chiếu & tích Đề-các", formula: "π_{A, B}(E₁ × E₂) ≡ π_A(E₁) × π_B(E₂)" },
    { code: "L11", title: "Chiếu & hợp (union)", formula: "π_A(E₁ ∪ E₂) ≡ π_A(E₁) ∪ π_A(E₂)" }
  ];

  const goldenRules = [
    {
      num: "1",
      title: "Đẩy phép chọn (σ) xuống sâu nhất có thể",
      desc: "Di chuyển phép chọn càng gần quan hệ gốc (nút lá) càng tốt để giảm số bộ dữ liệu sớm nhất.",
      tag: "CARDINALITY REDUCTION"
    },
    {
      num: "2",
      title: "Đẩy phép chiếu (π) xuống sớm",
      desc: "Loại bỏ sớm các thuộc tính không cần thiết để giảm độ rộng bản ghi trong bộ nhớ đệm RAM.",
      tag: "RECORD WIDTH REDUCTION"
    },
    {
      num: "3",
      title: "Biến đổi Tích Đề-các + Chọn ➔ Phép kết nối (Join)",
      desc: "Tránh tạo bảng tích Đề-các khổng lồ, chuyển sang phép kết nối bằng (Equi-Join ⋈) tối ưu.",
      tag: "AVOID CARTESIAN BLOWUP"
    },
    {
      num: "4",
      title: "Gộp các phép toán một ngôi liền kề",
      desc: "Tổ hợp các phép chọn và phép chiếu liên tiếp để thực hiện đồng thời trong 1 lần quét dữ liệu.",
      tag: "PIPELINING UNARY"
    },
    {
      num: "5",
      title: "Tìm và tái sử dụng các biểu thức con chung",
      desc: "Tránh tính toán lặp lại các cây con xuất hiện nhiều lần bằng cơ chế lưu đệm kết quả tạm thời.",
      tag: "COMMON SUB-EXPRESSION"
    }
  ];

  return (
    <div className="my-8 rounded-2xl border border-indigo-200/80 bg-gradient-to-br from-indigo-50/40 via-white to-purple-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-indigo-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-600/20">
            <Award className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">QueryOptimizationMasterSummaryDashboard</h3>
              <span className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-semibold text-indigo-800 border border-indigo-200">
                Tóm Tắt Nhanh &amp; Ôn Thi Siêu Tốc (Mục 6)
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Bảng tra cứu 11 quy tắc biến đổi tương đương &amp; 5 nguyên tắc vàng tối ưu hóa câu hỏi
            </p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex rounded-xl bg-indigo-100/80 p-1 border border-indigo-200">
          <button
            onClick={() => setActiveTab("golden_rules")}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
              activeTab === "golden_rules" ? "bg-indigo-600 text-white shadow-sm" : "text-indigo-900 hover:text-indigo-700"
            }`}
          >
            5 Nguyên Tắc Vàng
          </button>
          <button
            onClick={() => setActiveTab("rules_table")}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
              activeTab === "rules_table" ? "bg-indigo-600 text-white shadow-sm" : "text-indigo-900 hover:text-indigo-700"
            }`}
          >
            Bảng 11 Quy Tắc L1 - L11
          </button>
        </div>
      </div>

      {/* Tab 1: 5 Golden Rules */}
      {activeTab === "golden_rules" && (
        <div className="mt-5 space-y-3 font-mono text-xs">
          <div className="rounded-xl bg-gradient-to-r from-indigo-900 to-slate-900 p-4 text-white space-y-1 shadow-md">
            <span className="text-amber-300 font-bold font-sans text-xs uppercase flex items-center gap-1.5">
              <Sparkles className="h-4 w-4" />
              <span>5 NGUYÊN TẮC VÀNG KHI TỐI ƯU HÓA CÂU TRUY VẤN:</span>
            </span>
            <p className="font-sans text-xs text-indigo-100">
              Đây là kim chỉ nam điều khiển toàn bộ các thuật toán tối ưu hóa Heuristic và chuyển dịch cây đại số quan hệ.
            </p>
          </div>

          <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3 font-sans text-xs">
            {goldenRules.map((gr) => (
              <div key={gr.num} className="rounded-xl border border-indigo-200 bg-white p-4 shadow-sm space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 font-mono text-xs font-bold text-indigo-800">
                    {gr.num}
                  </span>
                  <span className="font-mono text-[9px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">
                    {gr.tag}
                  </span>
                </div>
                <strong className="text-indigo-950 font-bold block text-xs">{gr.title}</strong>
                <p className="text-gray-600 text-[11px] leading-relaxed">{gr.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 2: Rules Table */}
      {activeTab === "rules_table" && (
        <div className="mt-5 overflow-x-auto rounded-xl border border-indigo-200 bg-white shadow-sm font-mono text-xs">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-indigo-50/80 text-indigo-950 border-b border-indigo-200">
                <th className="p-3 font-bold w-16 text-center">Mã</th>
                <th className="p-3 font-bold w-64 border-l border-indigo-200 font-sans">Nội Dung Quy Tắc</th>
                <th className="p-3 font-bold border-l border-indigo-200">Công Thức Tương Đương</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {rulesSummaryTable.map((r) => (
                <tr key={r.code} className="hover:bg-indigo-50/30 transition-colors">
                  <td className="p-3 text-center font-bold text-indigo-700">{r.code}</td>
                  <td className="p-3 font-sans font-bold text-gray-900 border-l border-gray-100 text-xs">
                    {r.title}
                  </td>
                  <td className="p-3 text-emerald-800 font-mono text-xs border-l border-gray-100">
                    {r.formula}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
