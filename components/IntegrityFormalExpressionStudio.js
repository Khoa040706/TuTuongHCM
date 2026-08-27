"use client";

import React, { useState } from "react";
import { Code2, BookOpen, Cpu, Sigma, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

export default function IntegrityFormalExpressionStudio() {
  const [activeMethod, setActiveMethod] = useState("logic"); // 'natural' | 'algo' | 'algebra' | 'logic'

  const methods = {
    natural: {
      title: "1. Ngôn Ngữ Tự Nhiên (Natural Language)",
      icon: BookOpen,
      color: "from-blue-600 to-cyan-600",
      desc: "Mô tả điều kiện bằng lời văn dễ hiểu, trực quan nhưng dễ gây mơ hồ ngữ nghĩa trong các hệ thống lớn.",
      sampleC1: "Mỗi sinh viên có một mã số riêng biệt, không trùng với bất kỳ sinh viên nào khác.",
      sampleC2: "Mỗi sinh viên chỉ được thi tối đa 2 lần cho một môn học.",
      sampleC3: "Mỗi sinh viên phải thuộc về một khoa đào tạo hợp lệ đã tồn tại trong danh mục các khoa."
    },
    algo: {
      title: "2. Thuật Giải / Mã Giả (Algorithm & Pseudocode)",
      icon: Cpu,
      color: "from-emerald-600 to-teal-600",
      desc: "Mô tả từng bước kiểm tra tuần tự bằng câu lệnh lặp và điều kiện rẽ nhánh (IF...THEN).",
      sampleC1: `FOR EACH t1 IN SINH_VIEN DO\n  FOR EACH t2 IN SINH_VIEN DO\n    IF (t1 != t2 AND t1.maSV == t2.maSV) THEN\n      RETURN VIOLATION("Trùng mã số sinh viên!");\nRETURN VALID;`,
      sampleC2: `FOR EACH t IN KET_QUA DO\n  IF (t.lanThi < 1 OR t.lanThi > 2) THEN\n    RETURN VIOLATION("Số lần thi không hợp lệ!");\nRETURN VALID;`,
      sampleC3: `FOR EACH t IN SINH_VIEN DO\n  IF NOT (t.maKhoa IN (SELECT makhoa FROM KHOA)) THEN\n    RETURN VIOLATION("Sinh viên không thuộc khoa hợp lệ!");\nRETURN VALID;`
    },
    algebra: {
      title: "3. Ngôn Ngữ Đại Số Tập Hợp & ĐSQH (Relational Algebra)",
      icon: Sigma,
      color: "from-purple-600 to-indigo-600",
      desc: "Biểu diễn thông qua phép chiếu, phép chọn, phép kết và phép trừ tập hợp toán học.",
      sampleC1: "σ_{t1.maSV = t2.maSV ∧ t1 ≠ t2} (SINH_VIEN × SINH_VIEN) = ∅",
      sampleC2: "σ_{lanThi > 2 ∨ lanThi < 1} (KET_QUA) = ∅",
      sampleC3: "π_{maKhoa}(SINH_VIEN) ⊆ π_{makhoa}(KHOA)"
    },
    logic: {
      title: "4. Logic Vị Từ Bậc Nhất (First-Order Predicate Logic - Khuyên dùng)",
      icon: Code2,
      color: "from-amber-600 to-rose-600",
      desc: "Phương pháp chuẩn tắc toán học với các lượng từ với mọi (∀), tồn tại (∃), phép kéo theo (⇒) và liên từ logic (∧, ∨, ¬).",
      sampleC1: "∀ t1, t2 ∈ SINH_VIEN : (t1.maSV = t2.maSV ⇒ t1 = t2)",
      sampleC2: "∀ t ∈ KET_QUA : (1 ≤ t.lanThi ≤ 2)",
      sampleC3: "∀ t ∈ SINH_VIEN : ∃ k ∈ KHOA : (t.maKhoa = k.makhoa)"
    }
  };

  const curr = methods[activeMethod];

  return (
    <div className="my-8 rounded-2xl border border-cyan-200/80 bg-gradient-to-br from-cyan-50/40 via-white to-blue-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-cyan-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-600 text-white shadow-md shadow-cyan-600/20">
            <Code2 className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">IntegrityFormalExpressionStudio</h3>
              <span className="rounded-full bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 border border-cyan-200">
                4 Phương Pháp Biểu Diễn
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Studio đối chiếu 4 phương pháp biểu diễn điều kiện ràng buộc: Tự nhiên, Thuật giải, ĐSQH và Logic vị từ
            </p>
          </div>
        </div>

        {/* Method Switcher */}
        <div className="flex flex-wrap gap-1 rounded-xl bg-cyan-100/80 p-1 border border-cyan-200">
          {Object.keys(methods).map((key) => (
            <button
              key={key}
              onClick={() => setActiveMethod(key)}
              className={`rounded-lg px-2.5 py-1.5 text-xs font-bold transition-all ${
                activeMethod === key ? "bg-cyan-600 text-white shadow-sm" : "text-cyan-900 hover:text-cyan-700"
              }`}
            >
              {key === "natural" && "1. Tự Nhiên"}
              {key === "algo" && "2. Thuật Giải"}
              {key === "algebra" && "3. ĐSQH / Tập Hợp"}
              {key === "logic" && "4. Logic Vị Từ (∀, ∃)"}
            </button>
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="mt-5 rounded-xl bg-white border border-cyan-200 p-4 shadow-sm">
        <h4 className="text-sm font-bold text-cyan-950">{curr.title}</h4>
        <p className="text-xs text-gray-600 mt-1">{curr.desc}</p>
      </div>

      {/* 3 Samples Grid */}
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {/* C1 */}
        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm flex flex-col justify-between">
          <div>
            <span className="font-mono text-xs font-bold text-indigo-700">RÀNG BUỘC C1 (Khóa chính)</span>
            <pre className="mt-2 font-mono text-xs text-amber-900 bg-amber-50/60 p-3 rounded-lg border border-amber-200 whitespace-pre-wrap overflow-x-auto leading-relaxed">
              {curr.sampleC1}
            </pre>
          </div>
        </div>

        {/* C2 */}
        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm flex flex-col justify-between">
          <div>
            <span className="font-mono text-xs font-bold text-emerald-700">RÀNG BUỘC C2 (Miền giá trị)</span>
            <pre className="mt-2 font-mono text-xs text-emerald-900 bg-emerald-50/60 p-3 rounded-lg border border-emerald-200 whitespace-pre-wrap overflow-x-auto leading-relaxed">
              {curr.sampleC2}
            </pre>
          </div>
        </div>

        {/* C3 */}
        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm flex flex-col justify-between">
          <div>
            <span className="font-mono text-xs font-bold text-purple-700">RÀNG BUỘC C3 (Khóa ngoại)</span>
            <pre className="mt-2 font-mono text-xs text-purple-900 bg-purple-50/60 p-3 rounded-lg border border-purple-200 whitespace-pre-wrap overflow-x-auto leading-relaxed">
              {curr.sampleC3}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
