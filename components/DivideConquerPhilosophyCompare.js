"use client";

import React, { useState } from "react";
import {
  Scale,
  Sparkles,
  ArrowRight,
  GitBranch,
  CheckCircle2,
  AlertTriangle,
  Zap,
  ShieldCheck,
  ShieldAlert,
  Layers,
  Cpu
} from "lucide-react";
import { highlightJavaVsCode } from "../utils/javaSyntaxHighlighter";

export default function DivideConquerPhilosophyCompare() {
  const [selectedCase, setSelectedCase] = useState("best"); // "best" or "worst"

  const quickSortCode = `// quickSort sắp xếp a[i..j]
void quickSort(int[] a, int i, int j) {
    if (i < j) { // Điều kiện dừng: nếu i >= j thì return
        // 1. DIVIDE: tốn 100% công sức phân hoạch tại đây!
        int pivotIdx = partition(a, i, j); 
        
        // 2. RECURSION: đệ quy sắp xếp 2 nửa
        quickSort(a, i, pivotIdx - 1);
        quickSort(a, pivotIdx + 1, j);
        
        // 3. CONQUER: không cần làm gì cả! (0 chi phí)
    }
}`;

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl p-5 md:p-7 shadow-sm my-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-5">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-2.5 py-1 rounded-md border border-rose-200">
            Mục 5 — Phân Tích &amp; Đối Chiếu Triết Lý
          </span>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-1">
            Quick Sort vs Merge Sort: Đối Chiếu Triết Lý Divide-and-Conquer
          </h3>
          <p className="text-xs text-slate-500">
            Khám phá sự đối lập giữa "Conquer-heavy" (Merge Sort) và "Divide-heavy" (Quick Sort) cùng hiện tượng suy biến cây $O(n^2)$
          </p>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 font-mono text-xs font-bold self-start sm:self-auto">
          <Scale className="w-3.5 h-3.5 text-indigo-600" />
          Triết Lý Chia Để Trị
        </div>
      </div>

      {/* Master Philosophy Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Merge Sort Philosophy */}
        <div className="bg-gradient-to-br from-indigo-50/90 via-white to-blue-50/50 border-2 border-indigo-300 rounded-3xl p-5 md:p-6 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-indigo-100 mb-3.5">
              <h4 className="text-sm font-bold text-indigo-950 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-indigo-600 shadow-xs" />
                Merge Sort: Triết Lý "Conquer-Heavy"
              </h4>
              <span className="text-[10px] font-mono font-bold bg-indigo-100 text-indigo-950 px-2.5 py-1 rounded-full border border-indigo-300 shadow-xs">
                Dồn sức vào Merge
              </span>
            </div>

            <div className="space-y-2.5 text-xs font-sans text-slate-700 leading-relaxed">
              <p>
                • <strong>Divide ($O(1)$):</strong> Chia đôi mảng cực nhanh, không cần so sánh hay sắp xếp gì.
              </p>
              <p>
                • <strong>Conquer ($O(n)$):</strong> Dồn <strong>100% công sức</strong> vào hàm <code>merge()</code> để so sánh và gộp 2 nửa mảng.
              </p>
              <p>
                • <strong>Đặc điểm:</strong> Luôn luôn ổn định $O(n \log n)$, <strong>STABLE</strong>, nhưng trả giá bằng <strong>$O(n)$ bộ nhớ phụ</strong>.
              </p>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-indigo-100 text-xs font-mono text-indigo-950 font-bold bg-white p-3 rounded-2xl border border-indigo-200 shadow-xs">
            ➔ "Chia dễ, gộp khó" — 100% nỗ lực ở bước Conquer!
          </div>
        </div>

        {/* Quick Sort Philosophy */}
        <div className="bg-gradient-to-br from-purple-50/90 via-white to-pink-50/50 border-2 border-purple-300 rounded-3xl p-5 md:p-6 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-purple-100 mb-3.5">
              <h4 className="text-sm font-bold text-purple-950 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-purple-600 shadow-xs" />
                Quick Sort: Triết Lý "Divide-Heavy"
              </h4>
              <span className="text-[10px] font-mono font-bold bg-purple-100 text-purple-950 px-2.5 py-1 rounded-full border border-purple-300 shadow-xs">
                Dồn sức vào Partition
              </span>
            </div>

            <div className="space-y-2.5 text-xs font-sans text-slate-700 leading-relaxed">
              <p>
                • <strong>Divide ($O(n)$):</strong> Dồn <strong>100% công sức</strong> vào bước <code>partition()</code> để phân chia mảng quanh Pivot.
              </p>
              <p>
                • <strong>Conquer ($O(1)$):</strong> Sau khi đệ quy xong <strong>không cần làm gì cả</strong>! Mảng đã tự động được xếp hoàn tất.
              </p>
              <p>
                • <strong>Đặc điểm:</strong> <strong>In-Place</strong>, chạy thực tế cực nhanh, nhưng <strong>KHÔNG STABLE</strong> và có nguy cơ suy biến $O(n^2)$.
              </p>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-purple-100 text-xs font-mono text-purple-950 font-bold bg-white p-3 rounded-2xl border border-purple-200 shadow-xs">
            ➔ "Chia khó, gộp không tốn gì" — 100% nỗ lực ở bước Divide!
          </div>
        </div>
      </div>

      {/* Quick Sort Worst-Case vs Best-Case Interactive Tree */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200 mb-4">
          <div>
            <h4 className="text-xs font-mono font-bold text-slate-900 uppercase flex items-center gap-1.5">
              <GitBranch className="w-4 h-4 text-purple-600" />
              HIỆN TƯỢNG SUY BIẾN CÂY ĐỆ QUY CỦA QUICK SORT:
            </h4>
            <p className="text-xs text-slate-500">
              So sánh trường hợp tốt nhất (Cây cân bằng) vs Trường hợp xấu nhất (Cây suy biến lệch dốc đứng)
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSelectedCase("best")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition cursor-pointer ${
                selectedCase === "best"
                  ? "bg-emerald-600 text-white shadow-xs"
                  : "bg-white border border-slate-200 text-slate-600"
              }`}
            >
              Best/Average: O(n log n)
            </button>
            <button
              onClick={() => setSelectedCase("worst")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition cursor-pointer ${
                selectedCase === "worst"
                  ? "bg-rose-600 text-white shadow-xs"
                  : "bg-white border border-slate-200 text-slate-600"
              }`}
            >
              Worst Case: O(n²) ⚠️
            </button>
          </div>
        </div>

        {selectedCase === "best" ? (
          <div className="bg-white border border-emerald-200 rounded-2xl p-4 text-xs font-sans space-y-2">
            <div className="flex items-center justify-between text-emerald-900 font-mono font-bold border-b border-emerald-100 pb-2">
              <span>CÂY ĐỆ QUY CÂN BẰNG (BALANCED TREE)</span>
              <span className="text-emerald-700">Độ sâu = log₂ n tầng</span>
            </div>
            <p className="text-slate-700 leading-relaxed">
              Mỗi lần partition, Pivot chia mảng đều thành 2 nửa xấp xỉ bằng nhau (n/2). Cây đệ quy có độ sâu đúng log₂ n. Mỗi tầng tiêu tốn &le; n phép so sánh.
            </p>
            <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-950 font-mono font-bold text-center">
              &rarr; Tổng thời gian: log₂ n &times; O(n) = <strong>O(n log n)</strong>
            </div>
          </div>
        ) : (
          <div className="bg-white border border-rose-200 rounded-2xl p-4 text-xs font-sans space-y-2">
            <div className="flex items-center justify-between text-rose-900 font-mono font-bold border-b border-rose-100 pb-2">
              <span>CÂY ĐỆ QUY SUY BIẾN (DEGENERATE SKEWED TREE)</span>
              <span className="text-rose-700">Độ sâu = n tầng!</span>
            </div>
            <p className="text-slate-700 leading-relaxed">
              Khi mảng đầu vào <strong>đã được sắp xếp sẵn tăng dần</strong> (hoặc giảm dần) và thuật toán luôn chọn Pivot là phần tử đầu a[i]:
            </p>
            <ul className="space-y-1 font-mono text-[11px] text-rose-950 bg-rose-50 p-2.5 rounded-xl">
              <li>• Vùng S₁ luôn rỗng (m = i), vùng S₂ chứa toàn bộ n - 1 phần tử còn lại.</li>
              <li>• Mảng không được chia đôi mà bị cắt từng phần tử một (n &rarr; n-1 &rarr; n-2 &rarr; ...).</li>
              <li>• Cây đệ quy suy biến thành n tầng dốc đứng!</li>
            </ul>
            <div className="p-2.5 rounded-xl bg-rose-100 text-rose-950 font-mono font-bold text-center">
              &rarr; Tổng thời gian: n + (n-1) + (n-2) + ... + 1 = <strong>O(n²)</strong>
            </div>
          </div>
        )}
      </div>

      {/* Code Box */}
      <div className="bg-slate-950 rounded-2xl p-4 border border-slate-800 text-white mb-5">
        <div className="text-xs font-mono text-slate-400 pb-2 border-b border-slate-800 flex items-center justify-between mb-2">
          <span>quickSort(int[] a, int i, int j)</span>
          <span className="text-purple-400">Không có bước Conquer!</span>
        </div>
        <pre className="text-xs font-mono overflow-x-auto">
          <code dangerouslySetInnerHTML={{ __html: highlightJavaVsCode(quickSortCode) }} />
        </pre>
      </div>

      {/* Sticky Takeaway */}
      <div className="bg-purple-50/80 border-2 border-purple-200 rounded-2xl p-4 flex items-start gap-3 text-xs text-purple-950">
        <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
        <div>
          <strong>⭐ Cần nhớ về Quick Sort (Mục 5):</strong><br/>
          • <strong>Ý tưởng:</strong> Chọn pivot, phân hoạch (partition) quanh pivot, đệ quy sắp xếp 2 phần, <strong>không cần merge</strong>.<br/>
          • <strong>Độ phức tạp:</strong> Worst case = <code>O(n²)</code> (khi input đã sorted / gần sorted nếu chọn pivot ở đầu), Best/Average case = <code>O(n log n)</code>.<br/>
          • <strong>Bộ nhớ &amp; Tính chất:</strong> Quick Sort là <strong>In-Place</strong> (chỉ tốn $O(\log n)$ stack đệ quy), nhưng <strong>KHÔNG STABLE (Unstable)</strong>.
        </div>
      </div>
    </div>
  );
}
