"use client";

import React, { useState } from "react";
import { Calculator, Code2, PlayCircle, AlertTriangle, Sparkles, Check, Copy } from "lucide-react";
import { highlightJavaVsCode } from "../utils/javaSyntaxHighlighter";

export default function RecursionClassicWorkbench() {
  const [mainTab, setMainTab] = useState("factorial");
  const [subTab, setSubTab] = useState("formula");
  const [copied, setCopied] = useState(false);

  const data = {
    factorial: {
      name: "1. Factorial (Giai thừa)",
      badge: "Đệ quy tuyến tính (Linear Recursion)",
      formulaDesc: "Giai thừa của số nguyên n không âm (n!) là tích của tất cả các số nguyên dương <= n.",
      recurrence: `fact(n) = 1              nếu n == 0  (Base Case)
fact(n) = n * fact(n-1)  nếu n > 0   (Recursive Call)`,
      iterativeCode: `// Precond: n >= 0
int fact(int n) {
    int result = 1;
    for (int i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}`,
      recursiveCode: `// Precond: n >= 0
int fact(int n) {
    if (n == 0) {
        return 1; // Base case
    } else {
        return n * fact(n - 1); // Recursive call
    }
}`,
      tracing: [
        "Gọi fact(5) -> 5 * fact(4)",
        "Gọi fact(4) -> 4 * fact(3)",
        "Gọi fact(3) -> 3 * fact(2)",
        "Gọi fact(2) -> 2 * fact(1)",
        "Gọi fact(1) -> 1 * fact(0)",
        "Gọi fact(0) -> Chạm Base Case = 1",
        "Quay lui (Unwinding):",
        "fact(1) = 1 * 1 = 1",
        "fact(2) = 2 * 1 = 2",
        "fact(3) = 3 * 2 = 6",
        "fact(4) = 4 * 6 = 24",
        "fact(5) = 5 * 24 = 120 (Kết quả cuối)"
      ],
      caution: "Luôn ghi chú precondition (điều kiện tiên quyết n >= 0) để hàm không chạy sai."
    },
    fibonacci: {
      name: "2. Fibonacci",
      badge: "Đệ quy nhị phân (Binary Recursion)",
      formulaDesc: "Dãy Fibonacci: 1, 1, 2, 3, 5, 8, 13, 21, ... Hai số đầu là 1, các số sau bằng tổng 2 số liền trước.",
      recurrence: `Fib(n) = 1                    khi n = 1, 2  (Base Cases)
Fib(n) = Fib(n-1) + Fib(n-2)  khi n > 2     (2 Recursive Calls)`,
      iterativeCode: `// Precond: n > 0 (Phiên bản Iterative tối ưu O(n))
int fib(int n) {
    if (n <= 2) {
        return 1;
    } else {
        int prev1 = 1, prev2 = 1, curr = 0;
        for (int i = 3; i <= n; i++) {
            curr = prev1 + prev2;
            prev2 = prev1;
            prev1 = curr;
        }
        return curr;
    }
}`,
      recursiveCode: `// Precond: n > 0 (Phiên bản Đệ quy ngắn gọn nhưng O(2^n))
int fib(int n) {
    if (n <= 2) {
        return 1; // Base case
    } else {
        return fib(n - 1) + fib(n - 2); // 2 Recursive calls
    }
}`,
      tracing: [
        "fib(6) = fib(5) + fib(4)",
        "├── fib(5) = fib(4) + fib(3)",
        "│   ├── fib(4) = fib(3) + fib(2)",
        "│   │   ├── fib(3) = fib(2) + fib(1) = 1 + 1 = 2",
        "│   │   └── fib(2) = 1 (Base case)",
        "│   └── fib(3) = fib(2) + fib(1) = 2 (Gọi lại lặp thừa!)",
        "└── fib(4) = fib(3) + fib(2) (Gọi lại lặp thừa toàn bộ cây!)",
        "-> Tổng cộng fib(6) = 8 sau 25 lần gọi hàm!"
      ],
      caution: "Cực kỳ kém hiệu quả (Extremely Inefficient) do trùng lặp hàm (ví dụ: fib(3) bị gọi tới 3 lần!). Có thể dùng Closed-form formula tỷ lệ vàng φ ≈ 1.618034."
    },
    gcd: {
      name: "3. Greatest Common Divisor (GCD)",
      badge: "Thuật toán Euclid (Euclidean Algorithm)",
      formulaDesc: "Ước chung lớn nhất của 2 số nguyên a, b không âm và không đồng thời bằng 0.",
      recurrence: `gcd(a, b) = a                nếu b == 0  (Base Case)
gcd(a, b) = gcd(b, a % b)    nếu b > 0   (Recursive Call)`,
      iterativeCode: `// Precond: a, b non-negative, not both zeroes
int gcd(int a, int b) {
    int rem;
    while (b > 0) {
        rem = a % b;
        a = b;
        b = rem;
    }
    return a;
}`,
      recursiveCode: `// Precond: a, b non-negative, not both zeroes
int gcd(int a, int b) {
    if (b == 0) {
        return a; // Base case
    } else {
        return gcd(b, a % b); // Recursive call
    }
}`,
      tracing: [
        "Tính gcd(48, 18):",
        "1. gcd(48, 18) -> b=18 > 0 -> gọi gcd(18, 48 % 18 = 12)",
        "2. gcd(18, 12) -> b=12 > 0 -> gọi gcd(12, 18 % 12 = 6)",
        "3. gcd(12, 6)  -> b=6  > 0 -> gọi gcd(6, 12 % 6 = 0)",
        "4. gcd(6, 0)   -> b=0     -> Chạm Base Case, trả về a = 6.",
        "-> Kết quả: GCD(48, 18) = 6."
      ],
      caution: "Đệ quy Euclid hội tụ cực nhanh (logarit) do phần dư a % b giảm rất nhanh sau mỗi bước."
    }
  };

  const current = data[mainTab];

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl p-5 md:p-7 shadow-sm my-6 font-sans">
      {/* Top Header with Main Topic Tabs */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-violet-600 bg-violet-50 px-2.5 py-1 rounded-md border border-violet-200">
            Mục 2.1 — Ôn lại Recursion cơ bản
          </span>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-1">
            Workbench 3 Ví dụ Đệ quy Kinh điển
          </h3>
          <p className="text-xs text-slate-500">
            So sánh chi tiết Công thức Toán, Vòng lặp (Iterative), Đệ quy (Recursive) & Tracing
          </p>
        </div>

        {/* 3 Main Tabs */}
        <div className="flex items-center gap-1.5 bg-slate-100 p-1.5 rounded-2xl self-start md:self-auto">
          {[
            { id: "factorial", label: "Factorial" },
            { id: "fibonacci", label: "Fibonacci" },
            { id: "gcd", label: "GCD (ƯCLN)" }
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setMainTab(t.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold font-sans transition-all cursor-pointer ${
                mainTab === t.id
                  ? "bg-white text-violet-700 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Sub-Tabs Selector */}
      <div className="flex flex-wrap items-center gap-2 my-5">
        {[
          { id: "formula", label: "Công thức toán", icon: Calculator },
          { id: "recursive", label: "Code Đệ quy (Recursive)", icon: Code2 },
          { id: "iterative", label: "Code Vòng lặp (Iterative)", icon: Code2 },
          { id: "tracing", label: "Quá trình Tracing", icon: PlayCircle }
        ].map((st) => {
          const Icon = st.icon;
          const isActive = subTab === st.id;
          return (
            <button
              key={st.id}
              onClick={() => setSubTab(st.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all cursor-pointer border ${
                isActive
                  ? "bg-violet-50 text-violet-700 border-violet-300 font-bold shadow-xs"
                  : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              {st.label}
            </button>
          );
        })}
      </div>

      {/* Main Content Render Box */}
      <div className="space-y-4">
        {/* Sub-tab 1: Formula */}
        {subTab === "formula" && (
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-violet-700 bg-violet-100/70 px-2.5 py-0.5 rounded border border-violet-200">
                {current.badge}
              </span>
            </div>
            <p className="text-xs md:text-sm text-slate-700">{current.formulaDesc}</p>

            <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-inner font-mono text-xs md:text-sm text-slate-800 leading-relaxed whitespace-pre-wrap">
              {current.recurrence}
            </div>
          </div>
        )}

        {/* Sub-tab 2: Recursive Code */}
        {subTab === "recursive" && (
          <div className="relative">
            <button
              onClick={() => handleCopy(current.recursiveCode)}
              className="absolute top-3 right-3 z-10 flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-white bg-slate-800/80 px-2.5 py-1 rounded-lg border border-slate-700 cursor-pointer"
            >
              {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              {copied ? "Đã chép" : "Copy"}
            </button>
            <pre className="bg-slate-950 text-slate-200 font-mono text-xs md:text-sm p-4 md:p-5 rounded-2xl border border-slate-800 shadow-md overflow-x-auto">
              <code
                dangerouslySetInnerHTML={{
                  __html: highlightJavaVsCode(current.recursiveCode)
                }}
              />
            </pre>
          </div>
        )}

        {/* Sub-tab 3: Iterative Code */}
        {subTab === "iterative" && (
          <div className="relative">
            <button
              onClick={() => handleCopy(current.iterativeCode)}
              className="absolute top-3 right-3 z-10 flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-white bg-slate-800/80 px-2.5 py-1 rounded-lg border border-slate-700 cursor-pointer"
            >
              {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              {copied ? "Đã chép" : "Copy"}
            </button>
            <pre className="bg-slate-950 text-slate-200 font-mono text-xs md:text-sm p-4 md:p-5 rounded-2xl border border-slate-800 shadow-md overflow-x-auto">
              <code
                dangerouslySetInnerHTML={{
                  __html: highlightJavaVsCode(current.iterativeCode)
                }}
              />
            </pre>
          </div>
        )}

        {/* Sub-tab 4: Tracing */}
        {subTab === "tracing" && (
          <div className="bg-slate-50/90 text-slate-800 font-mono text-xs p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2.5">
            <div className="text-[11px] font-bold text-slate-700 pb-3 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-400 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
                <span className="ml-1 font-bold text-violet-800">TRACING QUY TRÌNH THỰC THI (CALL &amp; RETURN)</span>
              </div>
              <span className="text-slate-500 font-semibold bg-white px-2 py-0.5 rounded-md border border-slate-200">
                Console Trace
              </span>
            </div>
            <div className="space-y-1.5 pt-1">
              {current.tracing.map((line, lIdx) => (
                <div
                  key={lIdx}
                  className={`px-3 py-1.5 rounded-xl border text-xs leading-relaxed transition-all ${
                    line.includes("Chạm Base Case") || line.includes("Base case")
                      ? "bg-amber-100/80 border-amber-300 text-amber-950 font-bold shadow-xs"
                      : line.includes("Quay lui") || line.includes("Kết quả")
                      ? "bg-emerald-100/80 border-emerald-300 text-emerald-950 font-bold shadow-xs"
                      : line.includes("lặp thừa")
                      ? "bg-rose-100/80 border-rose-300 text-rose-950 font-semibold shadow-xs"
                      : "bg-white border-slate-200/80 text-slate-700 font-medium"
                  }`}
                >
                  {line}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Caution Alert Box */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="text-xs text-amber-900 leading-relaxed">
            <strong className="font-semibold text-amber-950">Lưu ý giáo trình: </strong>
            {current.caution}
          </div>
        </div>
      </div>
    </div>
  );
}
