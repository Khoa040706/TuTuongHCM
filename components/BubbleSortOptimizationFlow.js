"use client";

import React, { useState } from "react";
import {
  Zap,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  GitBranch,
  Layers,
  Sparkles,
  RotateCcw,
  Clock,
  ShieldCheck
} from "lucide-react";
import { highlightJavaVsCode } from "../utils/javaSyntaxHighlighter";

export default function BubbleSortOptimizationFlow() {
  const [activeTab, setActiveTab] = useState("passes");
  const [testArrayType, setTestArrayType] = useState("sorted"); // "sorted" or "random"

  const passTrace = [
    {
      pass: 1,
      title: "Pass 1: Đẩy phần tử lớn nhất (37) về vị trí cuối mảng",
      steps: [
        { state: "29 10 14 37 13", action: "So sánh (29, 10) ➔ 29 > 10 ➔ Swap!", result: "10 29 14 37 13" },
        { state: "10 29 14 37 13", action: "So sánh (29, 14) ➔ 29 > 14 ➔ Swap!", result: "10 14 29 37 13" },
        { state: "10 14 29 37 13", action: "So sánh (29, 37) ➔ 29 < 37 ➔ Không swap", result: "10 14 29 37 13" },
        { state: "10 14 29 37 13", action: "So sánh (37, 13) ➔ 37 > 13 ➔ Swap!", result: "10 14 29 13 [37]" }
      ],
      conclusion: "Kết thúc Pass 1: Số 37 (lớn nhất) đã 'nổi bọt' về đúng vị trí cuối cùng a[4]."
    },
    {
      pass: 2,
      title: "Pass 2: Đẩy phần tử lớn nhì (29) về vị trí gần cuối a[3]",
      steps: [
        { state: "10 14 29 13 37", action: "So sánh (10, 14) ➔ 10 < 14 ➔ Không swap", result: "10 14 29 13 37" },
        { state: "10 14 29 13 37", action: "So sánh (14, 29) ➔ 14 < 29 ➔ Không swap", result: "10 14 29 13 37" },
        { state: "10 14 29 13 37", action: "So sánh (29, 13) ➔ 29 > 13 ➔ Swap!", result: "10 14 13 [29 37]" }
      ],
      conclusion: "Kết thúc Pass 2: Số 29 đã về đúng vị trí áp chót a[3]."
    }
  ];

  const originalCode = `// 1. Bubble Sort Bản Gốc (Luôn tốn O(n²))
public static void bubbleSort(int[] a) {
    for (int i = 1; i < a.length; i++) {
        for (int j = 0; j < a.length - i; j++) {
            if (a[j] > a[j+1]) { // Phần tử lớn hơn "nổi" sang phải
                int temp = a[j];
                a[j] = a[j+1];
                a[j+1] = temp;
            }
        }
    }
}`;

  const improvedCode = `// 2. Bubble Sort Bản Cải Tiến (Có cờ isSorted ➔ Best Case O(n))
public static void bubbleSort2(int[] a) {
    for (int i = 1; i < a.length; i++) {
        boolean isSorted = true; // Giả sử mảng đã có thứ tự
        
        for (int j = 0; j < a.length - i; j++) {
            if (a[j] > a[j+1]) {
                int temp = a[j];
                a[j] = a[j+1];
                a[j+1] = temp;
                isSorted = false; // Có hoán đổi ➔ chưa sorted
            }
        }
        
        // Nếu không có bất kỳ swap nào xảy ra ➔ Dừng sớm!
        if (isSorted) return; 
    }
}`;

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl p-5 md:p-7 shadow-sm my-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-5">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
            Mục 2 — Phân Tích Chuyên Sâu
          </span>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-1">
            Bubble Sort: Cơ Chế "Nổi Bọt" &amp; Tối Ưu Hóa Ngắt Sớm Với Cờ isSorted
          </h3>
          <p className="text-xs text-slate-500">
            Phân tích quá trình so sánh từng cặp kề nhau và sự khác biệt giữa bản gốc $O(n^2)$ và bản cải tiến $O(n)$
          </p>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 font-mono text-xs font-bold self-start sm:self-auto">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          Stable &amp; In-Place
        </div>
      </div>

      {/* Tabs Switcher */}
      <div className="flex items-center gap-2 mb-5 border-b border-slate-200 pb-2">
        <button
          onClick={() => setActiveTab("passes")}
          className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition cursor-pointer ${
            activeTab === "passes"
              ? "bg-slate-900 text-white shadow-xs"
              : "bg-slate-100 text-slate-600 hover:text-slate-900"
          }`}
        >
          Trực Quan Hóa 2 Pass Đầu (Bong Bóng Nổi)
        </button>
        <button
          onClick={() => setActiveTab("optimization")}
          className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition cursor-pointer ${
            activeTab === "optimization"
              ? "bg-slate-900 text-white shadow-xs"
              : "bg-slate-100 text-slate-600 hover:text-slate-900"
          }`}
        >
          Flowchart Tối Ưu Cờ isSorted (Bản Gốc vs Cải Tiến)
        </button>
      </div>

      {/* Tab 1: 2 Passes Trace */}
      {activeTab === "passes" && (
        <div className="space-y-4 animate-fadeIn mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {passTrace.map((p) => (
              <div key={p.pass} className="bg-slate-50 border border-slate-200 p-4 rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200 mb-3">
                    <h4 className="text-xs md:text-sm font-bold text-slate-900">{p.title}</h4>
                    <span className="text-[10px] font-mono font-bold bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full">
                      Pass #{p.pass}
                    </span>
                  </div>

                  <div className="space-y-2 mb-3">
                    {p.steps.map((st, idx) => (
                      <div key={idx} className="bg-white p-2.5 rounded-xl border border-slate-200 text-xs font-mono">
                        <div className="flex items-center justify-between text-slate-500 text-[11px] mb-1">
                          <span>Bước {idx + 1}:</span>
                          <span className={st.action.includes("Swap") ? "text-rose-600 font-bold" : "text-emerald-600"}>
                            {st.action}
                          </span>
                        </div>
                        <div className="text-slate-900 font-bold tracking-wide">
                          {st.result}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200 text-xs font-mono text-emerald-800 bg-emerald-50/60 p-2 rounded-xl">
                  ✓ {p.conclusion}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 2: isSorted Optimization & Dual-Code */}
      {activeTab === "optimization" && (
        <div className="space-y-5 animate-fadeIn mb-6">
          {/* Dual Code Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="bg-slate-950 rounded-2xl p-4 border border-slate-800 text-white">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs font-mono mb-2">
                <span className="text-slate-300">bubbleSort(int[] a) — Bản Gốc</span>
                <span className="text-rose-400 font-bold">Worst = Best = O(n²)</span>
              </div>
              <pre className="text-xs font-mono overflow-x-auto">
                <code dangerouslySetInnerHTML={{ __html: highlightJavaVsCode(originalCode) }} />
              </pre>
            </div>

            <div className="bg-slate-950 rounded-2xl p-4 border border-emerald-800/60 text-white">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs font-mono mb-2">
                <span className="text-emerald-300 font-bold">bubbleSort2(int[] a) — Cải Tiến</span>
                <span className="text-emerald-400 font-bold">Best = O(n), Worst = O(n²)</span>
              </div>
              <pre className="text-xs font-mono overflow-x-auto">
                <code dangerouslySetInnerHTML={{ __html: highlightJavaVsCode(improvedCode) }} />
              </pre>
            </div>
          </div>

          {/* Test Case Comparison Box */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200 mb-3">
              <div>
                <h4 className="text-xs font-mono font-bold text-slate-900 uppercase flex items-center gap-1.5">
                  <GitBranch className="w-4 h-4 text-indigo-600" />
                  ĐỐI CHIẾU HIỆU NĂNG KHI ĐẦU VÀO ĐÃ ĐƯỢC SẮP XẾP SẴN:
                </h4>
                <p className="text-xs text-slate-500">
                  Xét mảng 5 phần tử: <code>[10, 20, 30, 40, 50]</code>
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setTestArrayType("sorted")}
                  className={`px-3 py-1 rounded-xl text-xs font-mono font-bold transition cursor-pointer ${
                    testArrayType === "sorted"
                      ? "bg-emerald-600 text-white"
                      : "bg-white border border-slate-200 text-slate-600"
                  }`}
                >
                  Mảng Đã Sorted Sẵn
                </button>
                <button
                  onClick={() => setTestArrayType("random")}
                  className={`px-3 py-1 rounded-xl text-xs font-mono font-bold transition cursor-pointer ${
                    testArrayType === "random"
                      ? "bg-amber-600 text-white"
                      : "bg-white border border-slate-200 text-slate-600"
                  }`}
                >
                  Mảng Ngẫu Nhiên
                </button>
              </div>
            </div>

            {testArrayType === "sorted" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                <div className="bg-rose-50 border border-rose-200 p-3 rounded-xl text-rose-950">
                  <span className="font-bold block text-rose-900 mb-1">❌ Bubble Sort Bản Gốc:</span>
                  <p>• Chạy đủ 4 lượt vòng ngoài.</p>
                  <p>• Tổng số phép so sánh = <code>4 + 3 + 2 + 1 = 10 phép</code>.</p>
                  <p className="font-bold text-rose-800 mt-1">➔ Vẫn tốn chi phí O(n²) vô ích!</p>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-xl text-emerald-950">
                  <span className="font-bold block text-emerald-900 mb-1">✅ Bubble Sort Cải Tiến (isSorted):</span>
                  <p>• Pass 1 chạy 4 phép so sánh, không có swap nào.</p>
                  <p>• Cờ <code>isSorted == true</code> ➔ <strong>DỪNG SỚM (early return)</strong>.</p>
                  <p className="font-bold text-emerald-800 mt-1">➔ Chỉ mất đúng 4 phép so sánh = O(n)!</p>
                </div>
              </div>
            ) : (
              <div className="bg-white p-3 rounded-xl border border-slate-200 text-xs font-mono text-slate-700">
                Khi mảng ngẫu nhiên (hoặc giảm dần ngược), cả 2 bản đều phải thực hiện đầy đủ <code>n(n-1)/2</code> phép so sánh ➔ Độ phức tạp trường hợp xấu nhất đều là <strong>O(n²)</strong>.
              </div>
            )}
          </div>
        </div>
      )}

      {/* Sticky Takeaway */}
      <div className="bg-amber-50/80 border-2 border-amber-200 rounded-2xl p-4 flex items-start gap-3 text-xs text-amber-950">
        <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div>
          <strong>⭐ Cần nhớ về Bubble Sort (Mục 2):</strong><br/>
          • <strong>Ý tưởng:</strong> So sánh từng cặp liền kề $a[j] &gt; a[j+1]$, hoán đổi để đẩy phần tử lớn nhất "nổi bọt" về cuối mảng qua từng pass.<br/>
          • <strong>Bản gốc:</strong> Worst case = Best case = <code>O(n²)</code>.<br/>
          • <strong>Bản cải tiến (có cờ isSorted):</strong> Worst case = <code>O(n²)</code> (khi mảng giảm dần), Best case = <code>O(n)</code> (khi mảng đã tăng dần).<br/>
          • <strong>Bộ nhớ &amp; Tính chất:</strong> Là thuật toán <strong>In-Place (O(1) memory)</strong> và <strong>STABLE (Ổn định)</strong>.
        </div>
      </div>
    </div>
  );
}
