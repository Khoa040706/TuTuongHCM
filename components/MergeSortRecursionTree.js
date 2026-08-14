"use client";

import React, { useState } from "react";
import {
  GitFork,
  ArrowDown,
  ArrowUp,
  Sparkles,
  Layers,
  CheckCircle2,
  Cpu,
  Calculator,
  RotateCcw,
  ShieldCheck,
  Split
} from "lucide-react";
import { highlightJavaVsCode } from "../utils/javaSyntaxHighlighter";

export default function MergeSortRecursionTree() {
  const [activePhase, setActivePhase] = useState("both"); // "divide", "conquer", "both"
  const [selectedLevel, setSelectedLevel] = useState(null);

  const treeLevels = [
    {
      level: 0,
      name: "Tầng 0 (Gốc - Root)",
      divideNodes: ["38 16 27 39 12 27"],
      conquerNodes: ["12 16 27 27 38 39"],
      cost: "n = 6 phần tử ➔ O(n) chi phí merge",
      desc: "Merge 2 nửa [16 27 38] và [12 27 39] thành mảng kết quả cuối cùng hoàn chỉnh."
    },
    {
      level: 1,
      name: "Tầng 1 (Chia đôi mảng con)",
      divideNodes: ["38 16 27", "39 12 27"],
      conquerNodes: ["16 27 38", "12 27 39"],
      cost: "2 mảng × (n/2) = 6 phần tử ➔ O(n)",
      desc: "Merge [16 38] với [27] ➔ [16 27 38]; Merge [12 39] với [27] ➔ [12 27 39]."
    },
    {
      level: 2,
      name: "Tầng 2 (Chia tiếp mảng nhỏ)",
      divideNodes: ["38 16", "27", "39 12", "27"],
      conquerNodes: ["16 38", "27", "12 39", "27"],
      cost: "4 mảng × (n/4) ≈ 6 phần tử ➔ O(n)",
      desc: "Merge các cặp 2 phần tử: [38] với [16] ➔ [16 38]; [39] với [12] ➔ [12 39]."
    },
    {
      level: 3,
      name: "Tầng 3 (Lá - Base case: 1 phần tử)",
      divideNodes: ["38", "16", "27", "39", "12", "27"],
      conquerNodes: ["38", "16", "27", "39", "12", "27"],
      cost: "6 phần tử đơn lẻ (Tự nó đã có thứ tự)",
      desc: "Đạt điều kiện dừng (i >= j): mảng có đúng 1 phần tử, không cần chia tiếp."
    }
  ];

  const mergeSortCode = `// mergeSort sắp xếp dữ liệu từ a[i] đến a[j] (với i < j)
void mergeSort(int[] a, int i, int j) {
    if (i < j) { // Điều kiện dừng: nếu i >= j (1 phần tử) thì return
        int mid = (i + j) / 2;      // 1. DIVIDE: chia đôi mảng
        mergeSort(a, i, mid);       // 2. RECURSION: đệ quy nửa trái
        mergeSort(a, mid + 1, j);   // 2. RECURSION: đệ quy nửa phải
        merge(a, i, mid, j);        // 3. CONQUER: merge 2 nửa đã sorted
    }
}`;

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl p-5 md:p-7 shadow-sm my-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-5">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-200">
            Mục 4 — Cây Đệ Quy Phân Rã &amp; Gộp
          </span>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-1">
            Merge Sort: Cây Đệ Quy 2 Pha (Divide Phase vs Conquer Phase)
          </h3>
          <p className="text-xs text-slate-500">
            Chứng minh độ phức tạp <code>O(n log n)</code> qua $\log_2 n$ tầng đệ quy, mỗi tầng xử lý tổng cộng $n$ phần tử
          </p>
        </div>

        {/* Phase Filter Controls */}
        <div className="flex items-center gap-1.5 bg-slate-100 p-1.5 rounded-2xl self-start sm:self-auto">
          <button
            onClick={() => setActivePhase("both")}
            className={`px-3 py-1 rounded-xl text-xs font-mono font-bold transition cursor-pointer ${
              activePhase === "both" ? "bg-white text-slate-900 shadow-xs" : "text-slate-600"
            }`}
          >
            Cả 2 Pha
          </button>
          <button
            onClick={() => setActivePhase("divide")}
            className={`px-3 py-1 rounded-xl text-xs font-mono font-bold transition cursor-pointer ${
              activePhase === "divide" ? "bg-purple-600 text-white shadow-xs" : "text-slate-600"
            }`}
          >
            1. Divide (Tách)
          </button>
          <button
            onClick={() => setActivePhase("conquer")}
            className={`px-3 py-1 rounded-xl text-xs font-mono font-bold transition cursor-pointer ${
              activePhase === "conquer" ? "bg-emerald-600 text-white shadow-xs" : "text-slate-600"
            }`}
          >
            2. Conquer (Merge)
          </button>
        </div>
      </div>

      {/* 2-Phase Interactive Recursion Tree */}
      <div className="bg-gradient-to-br from-indigo-50/70 via-white to-slate-50 text-slate-800 rounded-3xl p-5 md:p-6 border border-indigo-200 shadow-sm mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-indigo-100 text-xs font-mono mb-4">
          <span className="text-indigo-950 font-bold uppercase">
            Trực quan hóa trên mảng giáo trình: [38, 16, 27, 39, 12, 27]
          </span>
          <div className="flex items-center gap-3 font-semibold">
            <span className="flex items-center gap-1 text-purple-700 bg-purple-50 px-2 py-0.5 rounded-lg border border-purple-200">
              <ArrowDown className="w-3.5 h-3.5" /> Pha 1: Divide (Đi xuống)
            </span>
            <span className="flex items-center gap-1 text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-lg border border-emerald-200">
              <ArrowUp className="w-3.5 h-3.5" /> Pha 2: Conquer (Đi lên)
            </span>
          </div>
        </div>

        {/* Tree Display */}
        <div className="space-y-3.5 py-2">
          {treeLevels.map((lvl) => (
            <div
              key={lvl.level}
              onClick={() => setSelectedLevel(lvl)}
              className="bg-white hover:border-indigo-300 border border-indigo-100 p-4 rounded-2xl transition cursor-pointer shadow-xs"
            >
              <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-slate-100 mb-2.5">
                <span className="font-bold text-indigo-950">{lvl.name}</span>
                <span className="text-emerald-800 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">{lvl.cost}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* Divide view */}
                {(activePhase === "both" || activePhase === "divide") && (
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono text-purple-900 uppercase font-bold">
                      ⬇ Pha Divide (Tách mảng con):
                    </span>
                    <div className="flex items-center gap-2 flex-wrap">
                      {lvl.divideNodes.map((node, nIdx) => (
                        <span
                          key={nIdx}
                          className="px-2.5 py-1 rounded-xl bg-purple-50 border border-purple-200 text-purple-900 font-mono text-xs font-bold shadow-2xs"
                        >
                          [ {node} ]
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Conquer view */}
                {(activePhase === "both" || activePhase === "conquer") && (
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono text-emerald-900 uppercase font-bold">
                      ⬆ Pha Conquer (Merge đã sắp xếp):
                    </span>
                    <div className="flex items-center gap-2 flex-wrap">
                      {lvl.conquerNodes.map((node, nIdx) => (
                        <span
                          key={nIdx}
                          className="px-2.5 py-1 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 font-mono text-xs font-bold shadow-2xs"
                        >
                          [ {node} ]
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Selected level explanation */}
        {selectedLevel && (
          <div className="mt-4 pt-3 border-t border-indigo-100 text-xs font-sans text-amber-950 flex items-center gap-2 animate-fadeIn bg-amber-50/80 p-3 rounded-2xl border border-amber-200">
            <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              <strong>{selectedLevel.name}:</strong> {selectedLevel.desc}
            </span>
          </div>
        )}
      </div>

      {/* Code & Complexity Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-5">
        {/* Code */}
        <div className="lg:col-span-6 bg-slate-950 rounded-2xl p-4 border border-slate-800 text-white flex flex-col justify-between">
          <div className="text-xs font-mono text-slate-400 pb-2 border-b border-slate-800 flex items-center justify-between">
            <span>mergeSort(int[] a, int i, int j)</span>
            <span className="text-indigo-400">Chia để trị đệ quy</span>
          </div>
          <pre className="text-xs font-mono overflow-x-auto py-2">
            <code dangerouslySetInnerHTML={{ __html: highlightJavaVsCode(mergeSortCode) }} />
          </pre>
          <div className="text-[11px] font-mono text-slate-500 pt-2 border-t border-slate-800">
            Việc sắp xếp thực sự diễn ra ở hàm <code>merge()</code>
          </div>
        </div>

        {/* Math Complexity Breakdown */}
        <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col justify-between space-y-3">
          <div>
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5 mb-2">
              <Calculator className="w-4 h-4 text-indigo-600" />
              Chứng Minh Toán Học Độ Phức Tạp O(n log n):
            </h4>

            <ul className="space-y-2 text-xs text-slate-700 font-sans">
              <li className="flex items-start gap-2">
                <span className="font-bold text-indigo-900 shrink-0">• Số tầng đệ quy (Levels):</span>
                <span>Mỗi bước chia đôi mảng (n &rarr; n/2 &rarr; n/4 &rarr; ... &rarr; 1) &rarr; Chiều sâu cây là <strong>log₂ n tầng</strong>.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-indigo-900 shrink-0">• Chi phí mỗi tầng:</span>
                <span>Ở bất kỳ tầng nào, tổng số phần tử của tất cả các mảng con cần merge luôn là <strong>n phần tử</strong> &rarr; Mỗi tầng tốn <strong>O(n) thời gian</strong>.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-indigo-900 shrink-0">• Tổng thời gian:</span>
                <span>(Số tầng) &times; (Chi phí mỗi tầng) = <strong>log₂ n &times; O(n) = O(n log n)</strong>.</span>
              </li>
            </ul>
          </div>

          <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-mono text-emerald-950 font-bold">
            ✓ <strong>Tính bất biến:</strong> Merge Sort đạt <code>O(n log n)</code> trong TẤT CẢ các trường hợp (Best Case = Worst Case = Average Case = O(n log n))!
          </div>
        </div>
      </div>

      {/* Sticky Takeaway */}
      <div className="bg-indigo-50/80 border-2 border-indigo-200 rounded-2xl p-4 flex items-start gap-3 text-xs text-indigo-950">
        <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
        <div>
          <strong>⭐ Cần nhớ về Merge Sort (Mục 4):</strong><br/>
          • <strong>Ý tưởng:</strong> Divide-and-conquer: chia đôi mảng, đệ quy sắp xếp 2 nửa, rồi gọi hàm <code>merge()</code> để gộp.<br/>
          • <strong>Độ phức tạp:</strong> Luôn luôn là <code>O(n log n)</code> ở mọi trường hợp (best / worst / average).<br/>
          • <strong>Bộ nhớ &amp; Tính chất:</strong> <strong>KHÔNG In-Place</strong> (cần thêm <code>O(n)</code> bộ nhớ mảng tạm <code>temp[]</code>), nhưng là thuật toán <strong>STABLE (Ổn định)</strong>.
        </div>
      </div>
    </div>
  );
}
