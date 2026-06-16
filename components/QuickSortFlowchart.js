"use client";
import React from "react";

export default function QuickSortFlowchart() {
  return (
    <div className="w-full my-8 premium-study-card p-6 rounded-2xl bg-stone-50 border border-stone-250/80 shadow-sm flex flex-col items-center">
      <h4 className="text-sm font-extrabold text-stone-800 mb-6 font-playfair tracking-wide uppercase self-start border-l-3 border-[var(--accent)] pl-2">
        Sơ đồ luồng hoạt động đệ quy (Divide and Conquer)
      </h4>

      {/* Root Node */}
      <div className="flex flex-col items-center w-full max-w-2xl">
        <div className="px-5 py-3 rounded-xl bg-[var(--accent)] text-white border-2 border-[var(--accent)] font-mono text-xs md:text-sm font-bold shadow-md shadow-[var(--accent)]/15">
          quickSort(A, lo, hi)
        </div>

        {/* SVG Arrow Down */}
        <svg className="w-6 h-8 text-[var(--accent)]" fill="none" viewBox="0 0 24 32">
          <path d="M12 0v30m0 0l-5-5m5 5l5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>

        {/* Decision Diamond */}
        <div className="relative px-6 py-4 rounded-2xl bg-amber-500/10 border-2 border-amber-500 text-amber-900 font-bold text-xs md:text-sm flex flex-col items-center shadow-sm">
          <span className="text-[10px] uppercase tracking-wider text-amber-700 font-extrabold mb-1">Kiểm tra điều kiện biên</span>
          lo &lt; hi và lo ≥ 0 ?
        </div>

        {/* SVG Split branches */}
        <div className="w-full flex justify-between relative mt-1">
          {/* SVG Connector for Left (No) and Right (Yes) */}
          <svg className="absolute inset-0 w-full h-12 text-stone-300 pointer-events-none" preserveAspectRatio="none">
            {/* Left line */}
            <path d="M 50% 0 L 25% 48" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="3 3" />
            {/* Right line */}
            <path d="M 50% 0 L 75% 48" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
          <div className="w-1/2 flex justify-center pt-12">
            <span className="text-[10px] md:text-xs font-bold text-red-500 bg-red-50 border border-red-200 px-2 py-0.5 rounded-full z-10 -mt-10">
              Sai (lo ≥ hi)
            </span>
          </div>
          <div className="w-1/2 flex justify-center pt-12">
            <span className="text-[10px] md:text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full z-10 -mt-10">
              Đúng (lo &lt; hi)
            </span>
          </div>
        </div>

        {/* Leaf Nodes */}
        <div className="w-full flex gap-4 mt-1">
          {/* Base Case */}
          <div className="w-1/2 flex flex-col items-center">
            <div className="w-full max-w-[200px] p-4 rounded-xl border border-red-200 bg-red-500/5 text-center shadow-sm">
              <h5 className="text-xs font-extrabold text-red-700 uppercase mb-1.5">Base Case (Trường hợp cơ bản)</h5>
              <p className="text-[11px] font-semibold text-stone-600 leading-relaxed">
                Mảng con chỉ chứa 1 hoặc 0 phần tử. Đã tự sắp xếp.
              </p>
              <div className="mt-3 px-3 py-1 bg-red-50 border border-red-200 rounded font-mono text-[10px] font-bold text-red-600 inline-block">
                return;
              </div>
            </div>
          </div>

          {/* Recursive Steps */}
          <div className="w-1/2 flex flex-col items-center">
            <div className="w-full max-w-[280px] p-4 rounded-xl border border-emerald-200 bg-emerald-500/5 shadow-sm flex flex-col items-center">
              <h5 className="text-xs font-extrabold text-emerald-700 uppercase mb-2">Recursive Step (Chia để trị)</h5>

              {/* Step 1: Partition */}
              <div className="w-full p-2.5 rounded-lg bg-white border border-emerald-200/60 shadow-inner flex flex-col mb-4">
                <span className="text-[9px] uppercase tracking-wider text-emerald-600 font-extrabold">Bước 1: Phân hoạch (Partition)</span>
                <span className="font-mono text-[11px] font-bold text-stone-800 my-0.5">p := partition(A, lo, hi)</span>
                <span className="text-[10px] font-semibold text-stone-500 leading-relaxed">
                  Định vị chốt pivot về đúng vị trí chỉ số p trong mảng.
                </span>
              </div>

              {/* SVG Arrow Down to Split calls */}
              <svg className="w-4 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24">
                <path d="M12 0v20m0 0l-4-4m4 4l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>

              {/* Dual recursion split */}
              <div className="w-full flex flex-col gap-2 mt-2">
                <span className="text-[9px] uppercase tracking-wider text-emerald-600 font-extrabold text-center block mb-1">
                  Bước 2: Gọi đệ quy 2 phân đoạn
                </span>
                
                <div className="grid grid-cols-2 gap-2 w-full">
                  <div className="p-2 rounded-lg bg-white border border-indigo-200 text-center flex flex-col justify-between">
                    <span className="text-[9px] font-extrabold text-indigo-600 uppercase mb-1">Đoạn Trái</span>
                    <span className="font-mono text-[10px] font-bold text-indigo-950 bg-indigo-50 rounded py-0.5 px-1">
                      quickSort(lo, p-1)
                    </span>
                  </div>

                  <div className="p-2 rounded-lg bg-white border border-indigo-200 text-center flex flex-col justify-between">
                    <span className="text-[9px] font-extrabold text-indigo-600 uppercase mb-1">Đoạn Phải</span>
                    <span className="font-mono text-[10px] font-bold text-indigo-950 bg-indigo-50 rounded py-0.5 px-1">
                      quickSort(p+1, hi)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
