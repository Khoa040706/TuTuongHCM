"use client";

import React, { useState } from "react";
import { Scissors, Play, RotateCcw, CheckCircle2, ArrowRight, XCircle, Sparkles } from "lucide-react";

export default function SingleKeyPruningSimulator() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      target: "Khởi tạo",
      testedAttr: "Toàn bộ tập U",
      candidate: "K = ABCDEGHI",
      closure: "U⁺ = ABCDEGHI (Siêu khóa ban đầu)",
      action: "Khởi tạo K = U = ABCDEGHI. Bắt đầu xét loại bỏ lần lượt từng thuộc tính.",
      decision: "KHỞI TẠO",
      status: "init"
    },
    {
      target: "Xét A",
      testedAttr: "Thuộc tính A",
      candidate: "K \\ {A} = BCDEGHI",
      closure: "(BCDEGHI)⁺ = ABCDEGHI = U",
      action: "Vì bao đóng của (K \\ {A}) vẫn bằng U, ta LOẠI BỎ A khỏi K.",
      decision: "LOẠI BỎ A ➔ K = BCDEGHI",
      status: "removed"
    },
    {
      target: "Xét B",
      testedAttr: "Thuộc tính B",
      candidate: "K \\ {B} = CDEGHI",
      closure: "(CDEGHI)⁺ = ABCDEGHI = U",
      action: "Vì bao đóng của (K \\ {B}) vẫn bằng U, ta LOẠI BỎ B khỏi K.",
      decision: "LOẠI BỎ B ➔ K = CDEGHI",
      status: "removed"
    },
    {
      target: "Xét C",
      testedAttr: "Thuộc tính C",
      candidate: "K \\ {C} = DEGHI",
      closure: "(DEGHI)⁺ = DEGHI ≠ U",
      action: "Vì bao đóng không còn bằng U, ta BẮT BUỘC PHẢI GIỮ LẠI C trong K.",
      decision: "GIỮ LẠI C ➔ K = CDEGHI",
      status: "kept"
    },
    {
      target: "Xét D",
      testedAttr: "Thuộc tính D",
      candidate: "K \\ {D} = CEGHI",
      closure: "(CEGHI)⁺ = ABCDEGHI = U",
      action: "Vì bao đóng của (K \\ {D}) vẫn bằng U, ta LOẠI BỎ D khỏi K.",
      decision: "LOẠI BỎ D ➔ K = CEGHI",
      status: "removed"
    },
    {
      target: "Xét E",
      testedAttr: "Thuộc tính E",
      candidate: "K \\ {E} = CGHI",
      closure: "(CGHI)⁺ = ABCDEGHI = U",
      action: "Vì bao đóng của (K \\ {E}) vẫn bằng U, ta LOẠI BỎ E khỏi K.",
      decision: "LOẠI BỎ E ➔ K = CGHI",
      status: "removed"
    },
    {
      target: "Xét G",
      testedAttr: "Thuộc tính G",
      candidate: "K \\ {G} = CHI",
      closure: "(CHI)⁺ = CHIB ≠ U",
      action: "Vì bao đóng không bằng U, ta BẮT BUỘC PHẢI GIỮ LẠI G trong K.",
      decision: "GIỮ LẠI G ➔ K = CGHI",
      status: "kept"
    },
    {
      target: "Xét H",
      testedAttr: "Thuộc tính H",
      candidate: "K \\ {H} = CGI",
      closure: "(CGI)⁺ = CGIABED ≠ U (thiếu H, L)",
      action: "Vì bao đóng không bằng U, ta BẮT BUỘC PHẢI GIỮ LẠI H trong K.",
      decision: "GIỮ LẠI H ➔ K = CGHI",
      status: "kept"
    },
    {
      target: "Xét I",
      testedAttr: "Thuộc tính I",
      candidate: "K \\ {I} = CGH",
      closure: "(CGH)⁺ = ABCDEGHI = U (nhờ H→I và CG→AE)",
      action: "Vì bao đóng của (K \\ {I}) vẫn bằng U, ta LOẠI BỎ I khỏi K.",
      decision: "LOẠI BỎ I ➔ K = CGH",
      status: "removed"
    },
    {
      target: "KẾT LUẬN",
      testedAttr: "Hoàn tất duyệt 8 thuộc tính",
      candidate: "K = CGH",
      closure: "(CGH)⁺ = ABCDEGHI = U và mọi tập con đều không đủ bao đóng",
      action: "Thuật toán kết thúc! K = CGH chính là MỘT KHÓA TỐI TIỂU của quan hệ R.",
      decision: "KHÓA TỐI TIỂU TÌM ĐƯỢC: K = CGH",
      status: "done"
    }
  ];

  const curr = steps[currentStep];

  return (
    <div className="my-8 rounded-2xl border border-purple-200/80 bg-gradient-to-br from-purple-50/40 via-white to-indigo-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-purple-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-600 text-white shadow-md shadow-purple-600/20">
            <Scissors className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">SingleKeyPruningSimulator</h3>
              <span className="rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-semibold text-purple-800 border border-purple-200">
                Thuật Toán Loại Bớt Dần
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Mô phỏng thuật toán tìm MỘT khóa từ siêu khóa K = U = ABCDEGHI để tìm K = CGH (Ví dụ Mục 3.2.a)
            </p>
          </div>
        </div>

        {/* Step Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
            disabled={currentStep === 0}
            className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-bold text-gray-700 hover:bg-gray-50 disabled:opacity-40"
          >
            Bước Trước
          </button>
          <button
            onClick={() => setCurrentStep((prev) => Math.min(steps.length - 1, prev + 1))}
            disabled={currentStep === steps.length - 1}
            className="flex items-center gap-1 rounded-lg bg-purple-600 px-3.5 py-1.5 text-xs font-bold text-white hover:bg-purple-700 disabled:opacity-40 shadow-sm"
          >
            <span>Bước Kế Tiếp</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
          <button
            onClick={() => setCurrentStep(0)}
            className="rounded-lg border border-gray-200 bg-white p-1.5 text-gray-600 hover:bg-gray-50"
            title="Làm lại từ đầu"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Input Data Banner */}
      <div className="mt-5 rounded-xl bg-purple-50/70 border border-purple-200 p-4 font-mono text-xs text-purple-950 space-y-1">
        <div><strong>Lược đồ:</strong> R(A, B, C, D, E, G, H, I)</div>
        <div><strong>Tập F:</strong> {"{ AC→B (1), BI→ACD (2), ABC→D (3), H→I (4), ACE→BCD (5), CG→AE (6) }"}</div>
      </div>

      {/* Step Card */}
      <div className="mt-5 rounded-xl border border-purple-200 bg-white p-5 shadow-sm space-y-3">
        <div className="flex items-center justify-between border-b border-gray-100 pb-2">
          <span className="font-bold text-xs text-purple-950">{curr.target}: {curr.testedAttr}</span>
          <span className={`font-mono text-xs font-bold px-2.5 py-0.5 rounded border ${
            curr.status === "removed" ? "bg-amber-100 text-amber-900 border-amber-300" :
            curr.status === "kept" ? "bg-blue-100 text-blue-900 border-blue-300" :
            "bg-emerald-100 text-emerald-900 border-emerald-300"
          }`}>
            {curr.decision}
          </span>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg bg-gray-50 p-3 text-xs font-mono border border-gray-200">
            <strong className="text-gray-700 block text-[11px] mb-1 uppercase">Tập khóa đang thử nghiệm:</strong>
            {curr.candidate}
          </div>
          <div className="rounded-lg bg-purple-50 p-3 text-xs font-mono border border-purple-200">
            <strong className="text-purple-900 block text-[11px] mb-1 uppercase">Bao đóng kiểm tra:</strong>
            {curr.closure}
          </div>
        </div>

        <p className="text-xs text-gray-700 leading-relaxed font-medium bg-gray-50 p-3 rounded-lg border border-gray-200">
          <strong>Hành động của thuật toán: </strong>{curr.action}
        </p>
      </div>
    </div>
  );
}
