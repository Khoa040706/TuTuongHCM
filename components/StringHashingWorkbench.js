"use client";

import React, { useState } from "react";
import {
  Type,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  ShieldAlert,
  AlertTriangle,
  CheckCircle2,
  Cpu,
  Layers,
  Code2,
  RotateCcw
} from "lucide-react";
import { highlightJavaVsCode } from "../utils/javaSyntaxHighlighter";

export default function StringHashingWorkbench() {
  const [testString, setTestString] = useState("Tan Ah Teck");
  const [tableSize, setTableSize] = useState(11);

  // Method 1: Simple ASCII sum
  const calculateAsciiSum = (str, m) => {
    let sum = 0;
    const details = [];
    for (let i = 0; i < str.length; i++) {
      const code = str.charCodeAt(i);
      sum += code;
      details.push(`${code}('${str[i]}')`);
    }
    const slot = sum % m;
    return {
      sum,
      slot,
      formula: details.join(" + ")
    };
  };

  // Method 2: Polynomial Shift (sum = sum * 31 + c)
  const calculatePolynomialHash = (str, m) => {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
      const code = str.charCodeAt(i);
      sum = (sum * 31 + code) | 0; // 32-bit int simulation
    }
    const slot = ((sum % m) + m) % m;
    return {
      sum,
      slot
    };
  };

  const res1 = calculateAsciiSum(testString, tableSize);
  const res2 = calculatePolynomialHash(testString, tableSize);

  const anagramList = [
    "Tan Ah Teck",
    "Lee Chin Tan",
    "Chen Le Tian",
    "Chan Tin Lee"
  ];

  const codeMethod1 = `// Cách 1: Cộng dồn mã ASCII đơn thuần (Bad Hash)
int hash(String s, int m) {
    int sum = 0;
    for (int i = 0; i < s.length(); i++) {
        sum += s.charAt(i); // Chỉ cộng dồn mã ASCII
    }
    return sum % m; // Bị đụng độ 100% với các chuỗi đảo từ (Anagrams)!
}`;

  const codeMethod2 = `// Cách 2: Cải tiến dịch chuyển đa thức (Java String.hashCode)
int hash(String s, int m) {
    int sum = 0;
    for (int i = 0; i < s.length(); i++) {
        sum = sum * 31 + s.charAt(i); // Vị trí ký tự quyết định lũy thừa của 31
    }
    return Math.floorMod(sum, m);
}
// Lưu ý: 31 * i == (i << 5) - i (tối ưu phần cứng cực nhanh)`;

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl p-5 md:p-7 shadow-sm my-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-5">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-2.5 py-1 rounded-md border border-purple-200">
            Mục 3.6 &amp; 3.7 — Hashing Của Chuỗi (String Hashing)
          </span>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-1">
            String Hashing: Tổng ASCII Đơn Thuần vs Java String.hashCode() Nhân 31
          </h3>
          <p className="text-xs text-slate-500">
            Phân tích lỗi va chạm của các chuỗi đảo từ (Anagrams) và giải mã công thức đa thức nhân 31 của Java
          </p>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 font-mono text-xs font-bold self-start sm:self-auto">
          <Type className="w-3.5 h-3.5 text-purple-600" />
          String Hashing Benchmark
        </div>
      </div>

      {/* Interactive Dual Method Comparison Workbench */}
      <div className="bg-gradient-to-br from-purple-50/80 via-white to-slate-50 text-slate-800 rounded-2xl p-5 border-2 border-purple-200 shadow-sm mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-purple-100 mb-4">
          <div>
            <span className="text-xs font-mono font-bold text-purple-950 block uppercase">
              PHÒNG THÍ NGHIỆM BĂM CHUỖI (M = 11 BUCKETS)
            </span>
            <span className="text-xs text-slate-500 font-sans">
              So sánh trực tiếp kết quả Cách 1 (Tổng ASCII) và Cách 2 (Java Đa Thức Nhân 31)
            </span>
          </div>

          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-xs font-mono text-slate-500 font-bold">Thử chuỗi mẫu:</span>
            {anagramList.map((str, idx) => (
              <button
                key={idx}
                onClick={() => setTestString(str)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-semibold transition cursor-pointer shadow-2xs ${
                  testString === str
                    ? "bg-purple-600 text-white"
                    : "bg-white text-purple-900 border border-purple-200 hover:bg-purple-50"
                }`}
              >
                "{str}"
              </button>
            ))}
          </div>
        </div>

        {/* Input Text Box */}
        <div className="space-y-4 font-mono text-xs">
          <div>
            <label className="text-[11px] text-slate-600 font-bold block mb-1">Nhập chuỗi bất kỳ để kiểm thử:</label>
            <input
              type="text"
              value={testString}
              onChange={(e) => setTestString(e.target.value)}
              className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-mono text-slate-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 shadow-xs"
            />
          </div>

          {/* 2 Result Comparison Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Method 1 Card */}
            <div className="p-4 bg-rose-50/90 rounded-2xl border-2 border-rose-300 space-y-2 flex flex-col justify-between shadow-xs text-rose-950">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-rose-900 font-sans">Cách 1: Tổng ASCII (Bad Hash ❌)</span>
                  <span className="px-2 py-0.5 rounded-md bg-white border border-rose-200 text-rose-700 text-[10px] font-bold">
                    sum % {tableSize}
                  </span>
                </div>
                <p className="text-[11px] text-slate-600 font-sans">
                  Tổng mã ASCII: <code>&Sigma; = {res1.sum}</code>
                </p>
                <div className="pt-2 text-sm font-bold text-slate-900">
                  &rarr; Kết quả: <code>{res1.sum} % {tableSize} = </code>
                  <span className="text-rose-700 font-black text-base">Slot [{res1.slot}]</span>
                </div>
              </div>

              <div className="text-[11px] text-rose-800 pt-2 border-t border-rose-200 font-sans font-semibold">
                ⚠️ Không xét vị trí ký tự &rarr; Mọi chuỗi đảo từ (Anagrams) đều ra cùng slot [{res1.slot}]!
              </div>
            </div>

            {/* Method 2 Card */}
            <div className="p-4 bg-emerald-50/90 rounded-2xl border-2 border-emerald-300 space-y-2 flex flex-col justify-between shadow-sm text-emerald-950">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-emerald-900 font-sans">Cách 2: Java String.hashCode (Tốt ⭐)</span>
                  <span className="px-2 py-0.5 rounded-md bg-white border border-emerald-200 text-emerald-800 text-[10px] font-bold">
                    sum*31 + c
                  </span>
                </div>
                <p className="text-[11px] text-slate-600 font-sans">
                  Mã băm đa thức 32-bit: <code>{res2.sum}</code>
                </p>
                <div className="pt-2 text-sm font-bold text-slate-900">
                  &rarr; Kết quả: <code>Math.floorMod({res2.sum}, {tableSize}) = </code>
                  <span className="text-emerald-700 font-black text-base">Slot [{res2.slot}]</span>
                </div>
              </div>

              <div className="text-[11px] text-emerald-800 pt-2 border-t border-emerald-200 font-sans font-semibold">
                ✓ Vị trí ký tự làm thay đổi hoàn toàn giá trị băm &rarr; Khắc phục triệt để va chạm Anagrams!
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Anagrams Proof Table (From Textbook) */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 mb-6">
        <div className="flex items-center gap-2 mb-3">
          <AlertTriangle className="w-4 h-4 text-amber-600" />
          <h4 className="text-xs font-mono font-bold text-slate-900 uppercase">
            BẰNG CHỨNG GIÁO TRÌNH: VÌ SAO CÁCH 1 TỔNG ASCII LÀ BAD HASH FUNCTION?
          </h4>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono border-collapse">
            <thead>
              <tr className="bg-white border-b border-slate-200 text-slate-700">
                <th className="py-2.5 px-3 font-bold">Chuỗi (String)</th>
                <th className="py-2.5 px-3 font-bold">Tổng ASCII (&Sigma;)</th>
                <th className="py-2.5 px-3 font-bold text-rose-700">Cách 1: &Sigma; % 11</th>
                <th className="py-2.5 px-3 font-bold text-emerald-700">Cách 2: Java (sum*31+c) % 11</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-800">
              <tr className="hover:bg-white transition">
                <td className="py-2 px-3 font-bold">"Tan Ah Teck"</td>
                <td className="py-2 px-3">825</td>
                <td className="py-2 px-3 font-black text-rose-600 bg-rose-50/50">Slot [0] ⚠️</td>
                <td className="py-2 px-3 font-black text-emerald-700 bg-emerald-50/30">Slot [2]</td>
              </tr>
              <tr className="hover:bg-white transition">
                <td className="py-2 px-3 font-bold">"Lee Chin Tan"</td>
                <td className="py-2 px-3">825 (cùng ký tự)</td>
                <td className="py-2 px-3 font-black text-rose-600 bg-rose-50/50">Slot [0] (Va chạm!) ⚠️</td>
                <td className="py-2 px-3 font-black text-emerald-700 bg-emerald-50/30">Slot [8] (Khác biệt!)</td>
              </tr>
              <tr className="hover:bg-white transition">
                <td className="py-2 px-3 font-bold">"Chen Le Tian"</td>
                <td className="py-2 px-3">825 (cùng ký tự)</td>
                <td className="py-2 px-3 font-black text-rose-600 bg-rose-50/50">Slot [0] (Va chạm!) ⚠️</td>
                <td className="py-2 px-3 font-black text-emerald-700 bg-emerald-50/30">Slot [4] (Khác biệt!)</td>
              </tr>
              <tr className="hover:bg-white transition">
                <td className="py-2 px-3 font-bold">"Chan Tin Lee"</td>
                <td className="py-2 px-3">825 (cùng ký tự)</td>
                <td className="py-2 px-3 font-black text-rose-600 bg-rose-50/50">Slot [0] (Va chạm!) ⚠️</td>
                <td className="py-2 px-3 font-black text-emerald-700 bg-emerald-50/30">Slot [1] (Khác biệt!)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Code Blocks Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5">
        <div className="bg-slate-950 rounded-2xl p-4 border border-slate-800 text-white flex flex-col justify-between">
          <div className="text-xs font-mono text-slate-400 pb-2 border-b border-slate-800 flex items-center justify-between mb-2">
            <span>StringHashMethod1.java (Cách 1)</span>
            <span className="text-rose-400 font-bold">Bad Hash</span>
          </div>
          <pre className="text-xs font-mono overflow-x-auto">
            <code dangerouslySetInnerHTML={{ __html: highlightJavaVsCode(codeMethod1) }} />
          </pre>
        </div>

        <div className="bg-slate-950 rounded-2xl p-4 border border-slate-800 text-white flex flex-col justify-between">
          <div className="text-xs font-mono text-slate-400 pb-2 border-b border-slate-800 flex items-center justify-between mb-2">
            <span>StringHashMethod2.java (Java String.hashCode)</span>
            <span className="text-emerald-400 font-bold">Good Hash ⭐</span>
          </div>
          <pre className="text-xs font-mono overflow-x-auto">
            <code dangerouslySetInnerHTML={{ __html: highlightJavaVsCode(codeMethod2) }} />
          </pre>
        </div>
      </div>

      {/* Sticky Takeaway */}
      <div className="bg-purple-50/80 border-2 border-purple-200 rounded-2xl p-4 flex items-start gap-3 text-xs text-purple-950">
        <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
        <div>
          <strong>⭐ Cần nhớ (Mục 3.6 - 3.7):</strong><br/>
          • Hash chuỗi bằng <strong>tổng ASCII đơn thuần là Bad Hash Function</strong> vì không phụ thuộc vào vị trí của ký tự (các chuỗi đảo từ Anagrams bị đụng độ 100%).<br/>
          • Luôn dùng công thức <strong>dịch chuyển đa thức nhân hệ số</strong> (như <code>sum = sum * 31 + c</code> của Java <code>String.hashCode()</code>) để đảm bảo vị trí ký tự ảnh hưởng trực tiếp đến giá trị băm.<br/>
          • <strong>Hằng số 31:</strong> Là số nguyên tố lẻ, được compiler tối ưu thành phép dịch bit siêu tốc <code>(i &lt;&lt; 5) - i</code>.
        </div>
      </div>
    </div>
  );
}
