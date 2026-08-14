"use client";

import React, { useState } from "react";
import {
  Boxes,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Cpu,
  Calculator,
  RotateCcw,
  Zap,
  Layers,
  HelpCircle,
  HardDrive
} from "lucide-react";
import { highlightJavaVsCode } from "../utils/javaSyntaxHighlighter";

export default function RadixSortBucketVisualizer() {
  const [activePass, setActivePass] = useState(0);

  const passes = [
    {
      pass: 1,
      digitName: "Chữ số thứ 4 (Hàng đơn vị)",
      digitIndex: 3,
      desc: "Xét chữ số tận cùng (hàng đơn vị) của 8 số. Phân phối các số vào 10 thùng (Queue 0 - 9) theo thứ tự xuất hiện.",
      buckets: {
        0: ["1560", "2150"],
        1: ["1061"],
        2: ["0222"],
        3: ["0123", "0283"],
        4: ["2154", "0004"],
        5: [],
        6: [],
        7: [],
        8: [],
        9: []
      },
      combined: ["1560", "2150", "1061", "0222", "0123", "0283", "2154", "0004"]
    },
    {
      pass: 2,
      digitName: "Chữ số thứ 3 (Hàng chục)",
      digitIndex: 2,
      desc: "Lấy mảng kết quả của Pass 1, phân phối tiếp theo chữ số hàng chục vào 10 thùng.",
      buckets: {
        0: ["0004"],
        1: [],
        2: ["0222", "0123"],
        3: [],
        4: [],
        5: ["2150", "2154"],
        6: ["1560", "1061"],
        7: [],
        8: ["0283"],
        9: []
      },
      combined: ["0004", "0222", "0123", "2150", "2154", "1560", "1061", "0283"]
    },
    {
      pass: 3,
      digitName: "Chữ số thứ 2 (Hàng trăm)",
      digitIndex: 1,
      desc: "Lấy mảng kết quả của Pass 2, phân phối tiếp theo chữ số hàng trăm vào 10 thùng.",
      buckets: {
        0: ["0004", "1061"],
        1: ["0123", "2150", "2154"],
        2: ["0222", "0283"],
        3: [],
        4: [],
        5: ["1560"],
        6: [],
        7: [],
        8: [],
        9: []
      },
      combined: ["0004", "1061", "0123", "2150", "2154", "0222", "0283", "1560"]
    },
    {
      pass: 4,
      digitName: "Chữ số thứ 1 (Hàng nghìn - Chữ số đầu)",
      digitIndex: 0,
      desc: "Lượt cuối cùng: phân phối theo chữ số hàng nghìn cao nhất. Mảng sau khi gom lại sẽ có thứ tự hoàn chỉnh!",
      buckets: {
        0: ["0004", "0123", "0222", "0283"],
        1: ["1061", "1560"],
        2: ["2150", "2154"],
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
        8: [],
        9: []
      },
      combined: ["0004", "0123", "0222", "0283", "1061", "1560", "2150", "2154"]
    }
  ];

  const current = passes[activePass];

  const radixPseudocode = `// Pseudocode Radix Sort: n chuỗi số có d chữ số
void radixSort(int[] array, int n, int d) {
    // Duyệt từ chữ số cuối (LSD) về chữ số đầu (MSD)
    for (int j = d; j >= 1; j--) {
        Queue[] buckets = new Queue[10]; // 10 nhóm cho 10 chữ số 0-9
        
        for (int i = 0; i < n; i++) {
            int k = getDigit(array[i], j); // Lấy chữ số thứ j
            buckets[k].enqueue(array[i]);  // Đặt vào nhóm k
        }
        
        // Thay array bằng toàn bộ phần tử nhóm 0, rồi nhóm 1, ..., nhóm 9
        array = combine(buckets); 
    }
}`;

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl p-5 md:p-7 shadow-sm my-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-5">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-pink-600 bg-pink-50 px-2.5 py-1 rounded-md border border-pink-200">
            Mục 6 — Non-Comparison Sort
          </span>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-1">
            Radix Sort: Mô Phỏng 10 Thùng Hàng Đợi (10 LSD Queues) &amp; Tốc Độ Tuyến Tính O(n)
          </h3>
          <p className="text-xs text-slate-500">
            Sắp xếp không dựa trên phép so sánh từng cặp, phân phối theo từng chữ số từ hàng đơn vị lên hàng nghìn
          </p>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 font-mono text-xs font-bold self-start sm:self-auto">
          <Zap className="w-3.5 h-3.5 text-pink-600" />
          Time: O(d &times; n) = O(n)
        </div>
      </div>

      {/* 10 Queues Interactive Simulator */}
      <div className="bg-gradient-to-br from-pink-50/80 via-white to-purple-50/40 text-slate-800 rounded-3xl p-5 md:p-6 border border-pink-200 shadow-sm mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-pink-100 mb-4">
          <div>
            <span className="text-xs font-mono font-bold text-pink-950 uppercase block">
              Mô phỏng 8 số giáo trình: [0123, 2154, 0222, 0004, 0283, 1560, 1061, 2150]
            </span>
            <span className="text-xs text-pink-700 font-mono font-bold">
              Pass {current.pass}/4: {current.digitName}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActivePass((prev) => Math.max(0, prev - 1))}
              disabled={activePass === 0}
              className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-mono font-bold text-slate-700 hover:bg-slate-100 disabled:opacity-40 cursor-pointer shadow-xs"
            >
              Lượt trước
            </button>
            <button
              onClick={() => setActivePass((prev) => Math.min(3, prev + 1))}
              disabled={activePass === 3}
              className="px-3.5 py-1.5 rounded-xl bg-pink-600 text-xs font-mono font-bold text-white hover:bg-pink-700 disabled:opacity-40 cursor-pointer shadow-xs"
            >
              Lượt tiếp ({activePass + 1}/4)
            </button>
            <button
              onClick={() => setActivePass(0)}
              className="p-1.5 rounded-xl bg-white border border-slate-200 text-slate-500 hover:text-slate-900 cursor-pointer shadow-xs"
              title="Reset"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 10 Buckets (0 - 9) Display */}
        <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-10 gap-2 mb-4">
          {Array.from({ length: 10 }).map((_, bIdx) => {
            const items = current.buckets[bIdx] || [];
            const hasItems = items.length > 0;

            return (
              <div
                key={bIdx}
                className={`p-2.5 rounded-2xl border-2 flex flex-col justify-between min-h-[95px] transition-all shadow-xs ${
                  hasItems
                    ? "bg-pink-50/90 border-pink-400 text-pink-950 ring-2 ring-pink-200"
                    : "bg-white border-pink-100/80 text-slate-400"
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono pb-1 border-b border-current/20 font-bold">
                  <span>Thùng #{bIdx}</span>
                  <span>({items.length})</span>
                </div>

                <div className="space-y-1 py-1">
                  {items.map((numStr, nIdx) => (
                    <div
                      key={nIdx}
                      className="px-1.5 py-0.5 rounded-lg bg-pink-600 text-white font-mono font-black text-xs text-center shadow-xs animate-fadeIn"
                    >
                      {numStr.slice(0, current.digitIndex)}
                      <span className="underline decoration-amber-300 font-black text-amber-200">
                        {numStr[current.digitIndex]}
                      </span>
                      {numStr.slice(current.digitIndex + 1)}
                    </div>
                  ))}
                </div>

                <span className="text-[8px] font-mono text-center font-semibold opacity-70">FIFO Queue</span>
              </div>
            );
          })}
        </div>

        {/* Combined Result After Pass */}
        <div className="bg-white p-4 rounded-2xl border-2 border-pink-100 shadow-xs">
          <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-slate-100 mb-2.5">
            <span className="text-slate-900 font-bold uppercase">Kết hợp (Gom lại từ thùng 0 đến 9 theo thứ tự FIFO):</span>
            <span className="text-emerald-800 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              {activePass === 3 ? "✓ MẢNG ĐÃ SẮP XẾP HOÀN TẤT!" : `Sau Lượt ${current.pass}`}
            </span>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {current.combined.map((num, idx) => (
              <span
                key={idx}
                className={`px-3 py-1 rounded-xl font-mono text-xs font-bold transition-all shadow-2xs ${
                  activePass === 3
                    ? "bg-emerald-600 text-white shadow-xs"
                    : "bg-pink-50 text-pink-950 border border-pink-200"
                }`}
              >
                {num}
              </span>
            ))}
          </div>
        </div>

        <p className="text-xs text-slate-700 pt-3 border-t border-pink-100 mt-3 font-sans leading-relaxed">
          {current.desc}
        </p>
      </div>

      {/* Code & Complexity Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-5">
        {/* Code */}
        <div className="lg:col-span-6 bg-slate-950 rounded-2xl p-4 border border-slate-800 text-white flex flex-col justify-between">
          <div className="text-xs font-mono text-slate-400 pb-2 border-b border-slate-800 flex items-center justify-between">
            <span>radixSort(int[] array, int n, int d)</span>
            <span className="text-pink-400">10 Queues LSD</span>
          </div>
          <pre className="text-xs font-mono overflow-x-auto py-2">
            <code dangerouslySetInnerHTML={{ __html: highlightJavaVsCode(radixPseudocode) }} />
          </pre>
          <div className="text-[11px] font-mono text-slate-500 pt-2 border-t border-slate-800">
            Xử lý từ chữ số cuối (hàng đơn vị) về chữ số đầu (hàng cao nhất)
          </div>
        </div>

        {/* Infographic Breaking Ω(n log n) */}
        <div className="lg:col-span-6 space-y-3 flex flex-col justify-between">
          <div className="bg-pink-50/70 border border-pink-200 rounded-2xl p-4 text-xs font-sans text-pink-950 space-y-2">
            <h4 className="font-bold text-pink-900 text-sm flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-pink-600" />
              Tại Sao Radix Sort Đạt Tốc Độ Tuyến Tính O(n)?
            </h4>
            <div className="space-y-1.5 text-xs">
              <p>
                • <strong>Comparison-based sort:</strong> Bắt buộc phải so sánh từng cặp phần tử ➔ Bị chặn dưới bởi rào cản cây quyết định <strong>&Omega;(n log n)</strong>.
              </p>
              <p>
                • <strong>Radix Sort (Non-comparison):</strong> Phân loại các phần tử trực tiếp vào 10 thùng (Queue) dựa trên giá trị chữ số mà <strong>không cần so sánh</strong>!
              </p>
              <p>
                • Chi phí mỗi lượt phân phối + gom lại = $O(n)$. Có đúng $d$ lượt ➔ Tổng thời gian = <strong>$O(d \times n)$</strong>.
              </p>
            </div>
            <div className="p-2.5 rounded-xl bg-white border border-pink-200 font-mono text-[11px] text-pink-900 font-bold">
              ➔ Khi số chữ số $d$ cố định (bị chặn) &rarr; Độ phức tạp thực tế là <strong>O(n)</strong>!
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs font-sans text-slate-700 space-y-1">
            <strong className="text-slate-900 block font-bold">Bộ Nhớ Phụ &amp; Tính Ổn Định:</strong>
            <p>
              • <strong>Space Complexity:</strong> Cần 10 thùng Queue hoặc mảng tạm <code>temp[]</code> ➔ Tốn thêm <strong>$O(n)$ bộ nhớ phụ (Không phải In-Place)</strong>.
            </p>
            <p>
              • <strong>Tính Ổn Định:</strong> Cơ chế hàng đợi FIFO đưa phần tử vào trước ra trước đảm bảo Radix Sort là thuật toán <strong>STABLE (Ổn định)</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* Sticky Takeaway */}
      <div className="bg-pink-50/80 border-2 border-pink-200 rounded-2xl p-4 flex items-start gap-3 text-xs text-pink-950">
        <CheckCircle2 className="w-5 h-5 text-pink-600 shrink-0 mt-0.5" />
        <div>
          <strong>⭐ Cần nhớ về Radix Sort (Mục 6):</strong><br/>
          • <strong>Ý tưởng:</strong> Non-comparison based sort: sort theo từng chữ số, từ hàng thấp nhất (LSD) lên hàng cao nhất (MSD).<br/>
          • <strong>Cấu trúc:</strong> Dùng 10 nhóm (queue) cho 10 chữ số 0-9 (cần mảng <code>temp</code> phụ).<br/>
          • <strong>Độ phức tạp:</strong> <code>O(d &times; n) = O(n)</code> (do $d$ cố định) ➔ Nhanh hơn các sort dựa trên so sánh.<br/>
          • <strong>Bộ nhớ &amp; Tính chất:</strong> <strong>Không In-Place</strong> (tốn $O(n)$ RAM) nhưng <strong>STABLE (Ổn định)</strong>.
        </div>
      </div>
    </div>
  );
}
