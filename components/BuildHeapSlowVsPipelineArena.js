"use client";

import React, { useState } from "react";
import { Layers, Sparkles } from "lucide-react";

export default function BuildHeapSlowVsPipelineArena() {
  const [activeView, setActiveView] = useState("pipeline"); // "pipeline" | "slowCode"

  return (
    <div className="my-8 rounded-3xl border border-amber-200/80 bg-gradient-to-br from-amber-50/80 via-white to-emerald-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-amber-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-950 text-xs font-bold mb-2">
            <Layers className="w-3.5 h-3.5 text-amber-700" />
            <span>Ý Tưởng HeapSort &amp; BuildHeap Naive (Mục 9.1 &amp; 9.2)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-amber-950 via-yellow-900 to-slate-900 bg-clip-text text-transparent">
            Quy Trình HeapSort &amp; BuildHeap Chậm O(n log n)
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Cách tiếp cận ngây thơ (Naive): Gọi <code>Insert</code> liên tiếp $n$ lần tốn <strong>O(n log n)</strong>. Liệu có cách dựng Heap thần tốc hơn?
          </p>
        </div>

        {/* View Switcher */}
        <div className="flex rounded-2xl bg-slate-100 p-1 border border-slate-200 self-start md:self-auto text-xs font-mono">
          <button
            onClick={() => setActiveView("pipeline")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              activeView === "pipeline"
                ? "bg-amber-500 text-slate-950 font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Quy Trình HeapSort 2 Pha
          </button>
          <button
            onClick={() => setActiveView("slowCode")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              activeView === "slowCode"
                ? "bg-rose-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Mã Nguồn BuildHeapSlow
          </button>
        </div>
      </div>

      {/* Main Content */}
      {activeView === "pipeline" ? (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Phase 1 */}
            <div className="p-5 rounded-2xl bg-white border border-amber-200 space-y-2.5 shadow-sm">
              <div className="flex items-center justify-between font-mono text-xs text-amber-950 font-bold border-b border-slate-100 pb-2">
                <span>GIAI ĐOẠN 1: XÂY DỰNG HEAP</span>
                <span className="text-[10px] px-2.5 py-0.5 rounded-lg bg-amber-100 border border-amber-300 text-amber-950">
                  BuildHeap(array)
                </span>
              </div>
              <p className="text-xs text-slate-700 font-sans leading-relaxed">
                Biến mảng số ban đầu thành một cấu trúc <strong>Binary Max-Heap</strong> hợp lệ. Phần tử lớn nhất lập tức xuất hiện tại đỉnh Root.
              </p>
              <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 font-mono text-xs text-amber-950 font-bold shadow-inner">
                Chi phí: O(?) &mdash; Phụ thuộc thuật toán BuildHeap
              </div>
            </div>

            {/* Phase 2 */}
            <div className="p-5 rounded-2xl bg-white border border-emerald-200 space-y-2.5 shadow-sm">
              <div className="flex items-center justify-between font-mono text-xs text-emerald-950 font-bold border-b border-slate-100 pb-2">
                <span>GIAI ĐOẠN 2: RÚT MAX n LẦN</span>
                <span className="text-[10px] px-2.5 py-0.5 rounded-lg bg-emerald-100 border border-emerald-300 text-emerald-950">
                  n &times; ExtractMax()
                </span>
              </div>
              <p className="text-xs text-slate-700 font-sans leading-relaxed">
                Lặp $n$ lần: Rút phần tử lớn nhất ở Root và đặt vào vị trí tương ứng từ cuối mảng lên đầu: <code>A[n - i + 1] = ExtractMax()</code>.
              </p>
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 font-mono text-xs text-emerald-950 font-bold shadow-inner">
                Chi phí: n &times; O(log n) = O(n log n)
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-amber-50 border border-amber-300 text-xs font-sans text-amber-950 flex items-center gap-2 shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-700 flex-shrink-0" />
            <span>
              <strong>Câu hỏi trọng tâm (Slide 9.2):</strong> Nếu dùng cách chèn $n$ lần thì BuildHeap tốn <strong>O(n log n)</strong>. Liệu có thể xây dựng Heap nhanh hơn chỉ trong <strong>O(n)</strong>?
            </span>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
          <div className="md:col-span-7 rounded-2xl bg-slate-950 border border-slate-800 p-5 shadow-md">
            <div className="flex items-center gap-1.5 pb-2 mb-2 border-b border-slate-800 text-xs font-mono text-slate-400">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
              <span className="ml-2">BuildHeapSlow.pseudo</span>
            </div>
            <pre className="p-3 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed shadow-inner">
              <code>
{`// Cách 1: Naive BuildHeap (Chèn từng phần tử)
BuildHeapSlow(array)
  n = size(array)
  A[0] = 0               // dummy entry
  for i = 1 to n         // lặp n lần: O(n)
    Insert(array[i-1])   // mỗi lần tốn: O(log n)

// Tổng chi phí: n * O(log n) = O(n log n)`}
              </code>
            </pre>
          </div>

          <div className="md:col-span-5 rounded-2xl bg-white border border-rose-200 p-5 space-y-2.5 text-xs font-sans shadow-sm">
            <strong className="text-rose-950 block font-mono">Nhược điểm của BuildHeapSlow:</strong>
            <p className="text-slate-700 leading-relaxed text-[11px]">
              Bắt đầu từ heap rỗng, mỗi lần đưa thêm một phần tử vào mảng lại phải gọi <code>Insert</code> (gồm ShiftUp từ đáy lên đỉnh). Với $n$ phần tử, tổng thời gian lên tới <strong>O(n log n)</strong>.
            </p>
            <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-[11px] text-amber-950 font-mono font-semibold shadow-inner">
              &rArr; Hãy xem phiên bản BuildHeap Fast O(n) ở mục kế tiếp!
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
