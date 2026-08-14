"use client";

import React, { useState } from "react";
import { Sparkles, Code2, Cpu, Repeat, GitFork, ArrowRight, Zap } from "lucide-react";
import { highlightJavaVsCode } from "../utils/javaSyntaxHighlighter";

export default function ComplexityRulesOfThumb() {
  const [selectedRule, setSelectedRule] = useState(0);

  const rules = [
    {
      id: 0,
      title: "Vài Statement Đơn Giản",
      bigO: "O(1)",
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
      cardColor: "from-emerald-50 via-white to-emerald-50/30 border-emerald-200",
      icon: Zap,
      pattern: "Thực thi tuần tự không có vòng lặp phụ thuộc n",
      code: `int x = a + b;
int y = x * 2;
return y; // Vài lệnh cơ bản -> O(1)`,
      desc: "Thời gian chạy là hằng số cố định, không phụ thuộc vào kích thước dữ liệu đầu vào."
    },
    {
      id: 1,
      title: "Vòng Lặp Chạy Đến n",
      bigO: "O(n)",
      badgeColor: "bg-blue-100 text-blue-800 border-blue-300",
      cardColor: "from-blue-50 via-white to-blue-50/30 border-blue-200",
      icon: Repeat,
      pattern: "for (int i = 0; i < n; i++)",
      code: `for (int i = 0; i < n; i++) {
    sum += arr[i]; // Lặp n lần -> O(n)
}`,
      desc: "Số lần lặp tăng tỉ lệ thuận 1:1 theo n. Mỗi bước lặp tốn chi phí O(1)."
    },
    {
      id: 2,
      title: "Vòng Lặp Lồng Nhau",
      bigO: "O(n · m) / O(n²)",
      badgeColor: "bg-amber-100 text-amber-800 border-amber-300",
      cardColor: "from-amber-50 via-white to-amber-50/30 border-amber-200",
      icon: Code2,
      pattern: "Vòng lặp ngoài theo n, vòng lặp trong theo m",
      code: `for (int i = 0; i < n; i++) {
    for (int j = 0; j < m; j++) {
        matrix[i][j] = 0; // n * m lần -> O(n*m)
    }
}`,
      desc: "Nếu cả 2 vòng đều chạy đến n ➔ độ phức tạp trở thành O(n²)."
    },
    {
      id: 3,
      title: "Giảm Phạm Vi Theo Tỉ Lệ",
      bigO: "O(log n)",
      badgeColor: "bg-teal-100 text-teal-800 border-teal-300",
      cardColor: "from-teal-50 via-white to-teal-50/30 border-teal-200",
      icon: Cpu,
      pattern: "Mỗi bước chia đôi hoặc nhân đôi (VD: ÷2, *2)",
      code: `for (int i = 1; i < n; i *= 2) {
    sum++; // Lặp k = log2(n) lần -> O(log n)
}`,
      desc: "Không gian tìm kiếm thu hẹp theo cấp số nhân (chia đôi mỗi vòng) ➔ O(log n)."
    },
    {
      id: 4,
      title: "Đệ Quy Có n Lời Gọi",
      bigO: "O(n)",
      badgeColor: "bg-indigo-100 text-indigo-800 border-indigo-300",
      cardColor: "from-indigo-50 via-white to-indigo-50/30 border-indigo-200",
      icon: GitFork,
      pattern: "Mỗi lời gọi đệ quy giảm n đi 1 đơn vị",
      code: `int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1); // n cuộc gọi -> O(n)
}`,
      desc: "Cây đệ quy là một đường thẳng có chiều sâu n, mỗi hàm tốn O(1)."
    },
    {
      id: 5,
      title: "Đệ Quy Chia Để Trị",
      bigO: "O(n log n)",
      badgeColor: "bg-purple-100 text-purple-800 border-purple-300",
      cardColor: "from-purple-50 via-white to-purple-50/30 border-purple-200",
      icon: Sparkles,
      pattern: "Chia đôi mảng và gộp n phần tử ở mỗi tầng",
      code: `void mergeSort(int[] a, int l, int r) {
    if (l >= r) return;
    int m = (l + r) / 2;
    mergeSort(a, l, m);
    mergeSort(a, m + 1, r);
    merge(a, l, m, r); // gộp n phần tử, log n tầng
}`,
      desc: "Cây đệ quy có log n tầng, mỗi tầng xử lý tổng cộng n phần tử ➔ O(n log n)."
    }
  ];

  const active = rules[selectedRule];

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl p-5 md:p-7 shadow-sm my-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-5">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-200">
            Mục 5.1 — Quy Tắc Ước Lượng Nhanh
          </span>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-1">
            Rules of Thumb: 6 Mẫu Cấu Trúc Code Đoán Nhanh Big-O
          </h3>
          <p className="text-xs text-slate-500">
            Bấm chọn mẫu code bên dưới để xem phân tích chi tiết và quy tắc ước lượng tương ứng
          </p>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 font-mono text-xs font-bold self-start sm:self-auto">
          <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
          6 Mẫu phổ biến
        </div>
      </div>

      {/* Grid of 6 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
        {rules.map((r, idx) => {
          const IconComp = r.icon;
          const isSelected = selectedRule === idx;

          return (
            <div
              key={r.id}
              onClick={() => setSelectedRule(idx)}
              className={`p-4 rounded-2xl border-2 transition-all cursor-pointer bg-gradient-to-br ${r.cardColor} hover:shadow-md ${
                isSelected ? "ring-2 ring-slate-900 shadow-md scale-101" : ""
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <IconComp className="w-5 h-5 text-slate-700" />
                <span className={`px-2 py-0.5 rounded-full font-mono text-xs font-black border ${r.badgeColor}`}>
                  {r.bigO}
                </span>
              </div>
              <h4 className="text-xs md:text-sm font-bold text-slate-900 mb-1">{r.title}</h4>
              <span className="text-[11px] font-mono text-slate-600 block line-clamp-1">{r.pattern}</span>
            </div>
          );
        })}
      </div>

      {/* Detail Inspector Box */}
      <div className="bg-gradient-to-br from-indigo-50/80 via-white to-slate-50 rounded-3xl p-5 border border-indigo-200 text-slate-800 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-indigo-100 gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-indigo-900 uppercase">Chi tiết mẫu code &amp; phân tích:</span>
            <strong className="text-sm font-bold text-slate-900">{active.title}</strong>
          </div>
          <span className="px-3 py-1 rounded-xl bg-emerald-100 font-mono text-xs font-black text-emerald-800 self-start sm:self-auto border border-emerald-300 shadow-xs">
            Độ phức tạp: {active.bigO}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="lg:col-span-7 bg-slate-950 rounded-2xl p-3.5 border border-slate-800 shadow-sm">
            <div className="text-[11px] font-mono text-slate-400 pb-1.5 border-b border-slate-800 mb-2 flex items-center justify-between">
              <span>Code Snippet</span>
              <span className="text-indigo-400 font-bold">{active.pattern}</span>
            </div>
            <pre className="text-xs font-mono overflow-x-auto">
              <code dangerouslySetInnerHTML={{ __html: highlightJavaVsCode(active.code) }} />
            </pre>
          </div>
          <div className="lg:col-span-5 bg-white p-4 rounded-2xl border border-indigo-100 shadow-xs flex flex-col justify-between space-y-3">
            <div>
              <span className="text-[11px] font-mono font-bold text-indigo-700 block mb-1 uppercase">Nguyên lý hoạt động</span>
              <p className="text-xs text-slate-700 leading-relaxed font-sans">{active.desc}</p>
            </div>
            <div className="pt-2.5 border-t border-indigo-100 font-mono text-[11px] text-amber-900 bg-amber-50/80 p-2 rounded-xl border border-amber-200">
              💡 <strong>Rule of thumb:</strong> Về cơ bản đếm số statement được thực thi theo hàm của n.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
