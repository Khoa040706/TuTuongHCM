"use client";

import React, { useState } from "react";
import { BookOpen, Sparkles, Filter, Layers, Split, ArrowRight, ShieldAlert, CheckCircle2 } from "lucide-react";

export default function EquivalenceRulesCatalogStudio() {
  const [activeCategory, setActiveCategory] = useState("join");
  const [selectedRuleId, setSelectedRuleId] = useState("L1");

  const categories = {
    join: {
      title: "1. Phép Kết Nối & Tích Đề-các",
      rules: ["L1", "L2"]
    },
    unary: {
      title: "2. Dãy Chiếu & Dãy Chọn",
      rules: ["L3", "L4"]
    },
    select_commute: {
      title: "3. Giao Hoán Phép Chọn (σ)",
      rules: ["L5", "L6", "L7", "L8", "L9"]
    },
    project_commute: {
      title: "4. Giao Hoán Phép Chiếu (π)",
      rules: ["L10", "L11"]
    }
  };

  const rulesData = {
    L1: {
      code: "L1",
      name: "Quy tắc Giao Hoán (Commutativity) giữa Phép Nối & Tích Đề-các",
      category: "join",
      formula: "E₁ ⋈_F E₂ ≡ E₂ ⋈_F E₁\nE₁ * E₂ ≡ E₂ * E₁ (Nối tự nhiên)\nE₁ × E₂ ≡ E₂ × E₁ (Tích Đề-các)",
      condition: "F là điều kiện kết nối trên các thuộc tính của E₁ và E₂.",
      explanation: "Thứ tự các quan hệ trong phép nối hoặc tích Đề-các có thể hoán đổi tự do mà không làm thay đổi kết quả truy vấn. Giúp chọn quan hệ nhỏ hơn làm bảng ngoài (Outer table) trong vòng lặp kết nối."
    },
    L2: {
      code: "L2",
      name: "Quy tắc Kết Hợp (Associativity) của Phép Nối & Tích Đề-các",
      category: "join",
      formula: "(E₁ ⋈_{F₁} E₂) ⋈_{F₂} E₃ ≡ E₁ ⋈_{F₁} (E₂ ⋈_{F₂} E₃)\n(E₁ * E₂) * E₃ ≡ E₁ * (E₂ * E₃)\n(E₁ × E₂) × E₃ ≡ E₁ × (E₂ × E₃)",
      condition: "F₁, F₂ là các điều kiện kết nối phù hợp.",
      explanation: "Cho phép bộ tối ưu hóa tự do thay đổi thứ tự ưu tiên kết nối giữa 3 hay nhiều quan hệ (Join Order Tree) để chọn cây có chi phí thấp nhất."
    },
    L3: {
      code: "L3",
      name: "Dãy các Phép Chiếu (Sequences of Projections)",
      category: "unary",
      formula: "π_{A₁...A_n}( π_{B₁...B_m}(E) ) ≡ π_{A₁...A_n}(E)",
      condition: "{A₁, ..., A_n} ⊆ {B₁, ..., B_m}",
      explanation: "Trong một chuỗi các phép chiếu lồng nhau, chỉ cần giữ lại phép chiếu ngoài cùng với tập thuộc tính nhỏ nhất, loại bỏ toàn bộ các phép chiếu trung gian thừa."
    },
    L4: {
      code: "L4",
      name: "Dãy các Phép Chọn (Sequences of Selections)",
      category: "unary",
      formula: "σ_{F₁}( σ_{F₂}(E) ) ≡ σ_{F₁ ∧ F₂}(E) ≡ σ_{F₂}( σ_{F₁}(E) )",
      condition: "F₁, F₂ là các biểu thức điều kiện logic.",
      explanation: "Các phép chọn lồng nhau có thể gộp thành một phép chọn duy nhất với điều kiện AND (∧), hoặc hoán đổi thứ tự thực hiện: thực hiện phép chọn có tính chọn lọc cao nhất (lọc nhiều bộ nhất) trước."
    },
    L5: {
      code: "L5",
      name: "Giao Hoán Phép Chọn và Phép Chiếu",
      category: "select_commute",
      formula: "σ_F( π_{A₁...A_n}(E) ) ≡ π_{A₁...A_n}( σ_F(E) )",
      condition: "Tất cả các thuộc tính tham gia trong điều kiện F đều phải thuộc danh sách {A₁, ..., A_n}.",
      explanation: "Đẩy phép chọn σ qua phép chiếu π xuống dưới để lọc các bộ dữ liệu sớm hơn."
    },
    L6: {
      code: "L6",
      name: "Giao Hoán Phép Chọn và Tích Đề-các (Kèm 2 Hệ quả)",
      category: "select_commute",
      formula: "1. σ_F(E₁ × E₂) ≡ σ_F(E₁) × E₂ (nếu F chỉ chứa thuộc tính của E₁)\n2. Hệ quả 1: σ_{F₁ ∧ F₂}(E₁ × E₂) ≡ σ_{F₁}(E₁) × σ_{F₂}(E₂)\n3. Hệ quả 2: σ_{F₁ ∧ F₂}(E₁ × E₂) ≡ σ_{F₂}( σ_{F₁}(E₁) × E₂ ) (nếu F₂ liên quan cả E₁, E₂)",
      condition: "F₁ chỉ chứa thuộc tính E₁, F₂ chỉ chứa thuộc tính E₂ (hoặc cả hai).",
      explanation: "Quy tắc cốt lõi giúp đẩy các điều kiện lọc đơn quan hệ xuống sát các nút lá trước khi thực hiện phép nhân Đề-các khổng lồ."
    },
    L7: {
      code: "L7",
      name: "Giao Hoán Phép Chọn và Phép Hợp (Union)",
      category: "select_commute",
      formula: "σ_F(E₁ ∪ E₂) ≡ σ_F(E₁) ∪ σ_F(E₂)",
      condition: "E₁ và E₂ phải khả hợp (cùng số thuộc tính và kiểu dữ liệu tương thích).",
      explanation: "Đẩy phép chọn xuống từng nhánh trước khi hợp nhất dữ liệu, giảm dung lượng của từng nhánh."
    },
    L8: {
      code: "L8",
      name: "Giao Hoán Phép Chọn và Phép Hiệu Tập Hợp (Set Difference)",
      category: "select_commute",
      formula: "σ_F(E₁ \\ E₂) ≡ σ_F(E₁) \\ σ_F(E₂)",
      condition: "E₁ và E₂ phải khả hợp.",
      explanation: "Thực hiện σ_F(E₂) trước tuy không bắt buộc về mặt toán học nhưng sẽ giúp kích thước của E₂ giảm đi rất nhiều, tăng tốc phép hiệu."
    },
    L9: {
      code: "L9",
      name: "Hoán Vị Phép Chọn với Nối Tự Nhiên (Natural Join)",
      category: "select_commute",
      formula: "σ_F(E₁ ⋈ E₂) ≡ σ_F(E₁) ⋈ σ_F(E₂)",
      condition: "F là điều kiện chỉ chứa các thuộc tính chung của cả E₁ và E₂.",
      explanation: "Trường hợp đặc biệt: điều kiện lọc trên thuộc tính chung có thể áp dụng đồng thời cho cả hai bảng trước khi nối."
    },
    L10: {
      code: "L10",
      name: "Hoán Vị Phép Chiếu với Tích Đề-các",
      category: "project_commute",
      formula: "π_{A₁...A_n}(E₁ × E₂) ≡ π_{B₁...B_m}(E₁) × π_{C₁...C_k}(E₂)",
      condition: "B₁...B_m là các thuộc tính thuộc E₁, C₁...C_k là các thuộc tính thuộc E₂ trong tập {A₁...A_n}.",
      explanation: "Đẩy phép chiếu xuống từng quan hệ trước khi nhân, loại bỏ các cột không cần thiết để giảm độ rộng từng dòng dữ liệu."
    },
    L11: {
      code: "L11",
      name: "Giao Hoán Phép Chiếu với Phép Hợp (Union)",
      category: "project_commute",
      formula: "π_{A₁...A_n}(E₁ ∪ E₂) ≡ π_{A₁...A_n}(E₁) ∪ π_{A₁...A_n}(E₂)",
      condition: "E₁ và E₂ khả hợp.",
      explanation: "Chiếu bớt các cột không dùng trên từng nhánh trước khi thực hiện phép hợp (Union)."
    }
  };

  const curr = rulesData[selectedRuleId];

  return (
    <div className="my-8 rounded-2xl border border-purple-200/80 bg-gradient-to-br from-purple-50/40 via-white to-indigo-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-purple-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-600 text-white shadow-md shadow-purple-600/20">
            <BookOpen className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">EquivalenceRulesCatalogStudio</h3>
              <span className="rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-semibold text-purple-800 border border-purple-200">
                11 Quy Tắc Biến Đổi Tương Đương L1 - L11 (Mục 3)
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Thư viện chuẩn hóa đại số quan hệ điều khiển các thuật toán tối ưu hóa cây truy vấn (Query Tree)
            </p>
          </div>
        </div>

        {/* Category Switcher */}
        <div className="flex flex-wrap rounded-xl bg-purple-100/80 p-1 border border-purple-200 gap-1">
          {Object.keys(categories).map((k) => (
            <button
              key={k}
              onClick={() => {
                setActiveCategory(k);
                setSelectedRuleId(categories[k].rules[0]);
              }}
              className={`rounded-lg px-2.5 py-1.5 text-xs font-bold transition-all ${
                activeCategory === k ? "bg-purple-600 text-white shadow-sm" : "text-purple-900 hover:text-purple-700"
              }`}
            >
              {categories[k].title}
            </button>
          ))}
        </div>
      </div>

      {/* Rules In Category Pills */}
      <div className="mt-5 flex flex-wrap gap-2">
        {categories[activeCategory].rules.map((rCode) => (
          <button
            key={rCode}
            onClick={() => setSelectedRuleId(rCode)}
            className={`px-4 py-2 rounded-xl font-mono text-xs font-bold transition-all border ${
              selectedRuleId === rCode
                ? "bg-purple-600 text-white border-purple-600 shadow-md ring-2 ring-purple-300"
                : "bg-white text-purple-900 border-purple-200 hover:bg-purple-50"
            }`}
          >
            {rCode}: {rulesData[rCode].name.split("(")[0]}
          </button>
        ))}
      </div>

      {/* Rule Detail Card */}
      <div className="mt-4 rounded-xl border border-purple-200 bg-white p-5 shadow-sm space-y-4 font-mono text-xs">
        <div className="flex items-center justify-between border-b border-gray-100 pb-2.5">
          <div className="flex items-center gap-2">
            <span className="font-mono text-sm font-extrabold text-white bg-purple-600 px-2.5 py-0.5 rounded-lg shadow-sm">
              {curr.code}
            </span>
            <h4 className="text-sm font-bold text-purple-950 font-sans">{curr.name}</h4>
          </div>
        </div>

        {/* Formula Box */}
        <div className="rounded-xl bg-slate-900 p-4 text-emerald-400 font-mono text-sm shadow-inner whitespace-pre-wrap leading-relaxed">
          {curr.formula}
        </div>

        <div className="space-y-2.5 font-sans text-xs">
          <div className="rounded-lg bg-amber-50/70 p-3 border border-amber-200 text-amber-950">
            <strong className="text-amber-900 block font-bold mb-0.5">⚠️ ĐIỀU KIỆN ÁP DỤNG:</strong>
            {curr.condition}
          </div>

          <div className="rounded-lg bg-purple-50/70 p-3.5 border border-purple-200 text-purple-950 leading-relaxed">
            <strong className="text-purple-900 block font-bold mb-1">💡 Ý NGHĨA VÀ ỨNG DỤNG TỐI ƯU HÓA:</strong>
            {curr.explanation}
          </div>
        </div>

        {/* Golden Note */}
        <div className="rounded-xl bg-indigo-50/90 border border-indigo-200 p-3.5 text-indigo-950 font-sans text-xs flex items-start gap-2.5">
          <ShieldAlert className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5" />
          <div className="space-y-0.5 text-[11px] leading-relaxed">
            <strong className="text-indigo-900 block font-bold text-xs">LƯU Ý QUAN TRỌNG TỪ GIÁO TRÌNH:</strong>
            <p>• Các quy tắc L4, L5, L6 nói chung nhằm <strong>đẩy phép chọn xuống trước phép kết nối</strong> (vì phép kết nối rất tốn kém).</p>
            <p>• <strong>CHÚ Ý ĐẶC BIỆT:</strong> Không có quy tắc tổng quát cho việc đẩy phép chiếu xuống trước <u>phép hiệu các tập hợp (\)</u>!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
