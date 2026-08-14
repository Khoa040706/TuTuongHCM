"use client";

import React, { useState } from "react";
import {
  Code2,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Play,
  RotateCcw,
  Cpu,
  Layers,
  HelpCircle,
  Hash
} from "lucide-react";
import { highlightJavaVsCode } from "../utils/javaSyntaxHighlighter";

export default function JavaSortBuiltinsSandbox() {
  const [sorted, setSorted] = useState(false);

  const initialWords = [
    { text: "We", ascii: 87, note: "'W' = 87 (chữ hoa)" },
    { text: "walk", ascii: 119, note: "'w' = 119 (chữ thường)" },
    { text: "the", ascii: 116, note: "'t' = 116 (chữ thường)" },
    { text: "line", ascii: 108, note: "'l' = 108 (chữ thường)" }
  ];

  const sortedWords = [
    { text: "We", ascii: 87, note: "Index [0]: 'W' (87) nhỏ nhất!" },
    { text: "line", ascii: 108, note: "Index [1]: 'l' (108)" },
    { text: "the", ascii: 116, note: "Index [2]: 't' (116)" },
    { text: "walk", ascii: 119, note: "Index [3]: 'w' (119)" }
  ];

  const sort1Code = `import java.util.*;

public class Sort {
    public static void main(String args[]) {
        // Chuyển mảng args thành List<String>
        List<String> list = Arrays.asList(args);
        
        // Sắp xếp List bằng Collections.sort()
        Collections.sort(list);
        
        System.out.println(list);
    }
}
// Chạy: java Sort We walk the line
// Output: [We, line, the, walk]`;

  const sort2Code = `import java.util.*;

public class Sort2 {
    public static void main(String args[]) {
        // Sắp xếp trực tiếp mảng String[] bằng Arrays.sort()
        Arrays.sort(args);
        
        System.out.println(Arrays.toString(args));
    }
}
// Chạy: java Sort2 We walk the line
// Output: [We, line, the, walk]`;

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl p-5 md:p-7 shadow-sm my-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-5">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
            Mục 8.1 – 8.2 — Thư Viện Java Chuẩn
          </span>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-1">
            Sử Dụng Java Sort Methods: Arrays.sort() &amp; Collections.sort()
          </h3>
          <p className="text-xs text-slate-500">
            Khảo sát các hàm sort dựng sẵn trong thư viện <code>java.util</code> và cơ chế sắp xếp chuỗi theo mã ASCII
          </p>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 font-mono text-xs font-bold self-start sm:self-auto">
          <Code2 className="w-3.5 h-3.5 text-blue-600" />
          java.util.Arrays / Collections
        </div>
      </div>

      {/* Interactive ASCII String Sort Sandbox */}
      <div className="bg-gradient-to-br from-blue-50/70 via-white to-slate-50 text-slate-800 rounded-3xl p-5 md:p-6 border border-blue-200 shadow-sm mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-blue-100 mb-4">
          <div>
            <span className="text-xs font-mono font-bold text-blue-950 uppercase block">
              Ví dụ giáo trình: Sắp xếp chuỗi `["We", "walk", "the", "line"]`
            </span>
            <span className="text-xs text-blue-700 font-mono font-semibold">
              Thứ tự mã ký tự ASCII của chữ cái đầu tiên
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSorted(!sorted)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition cursor-pointer flex items-center gap-1.5 shadow-xs ${
                sorted
                  ? "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              <Play className="w-3.5 h-3.5" />
              {sorted ? "Reset Mảng Ban Đầu" : "Chạy Arrays.sort() / Collections.sort()"}
            </button>
          </div>
        </div>

        {/* Word Blocks */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 mb-3">
          {(sorted ? sortedWords : initialWords).map((w, idx) => (
            <div
              key={idx}
              className={`p-3.5 rounded-2xl border-2 flex flex-col items-center justify-center gap-1.5 transition-all duration-300 shadow-xs ${
                sorted
                  ? "bg-blue-50/90 border-blue-400 text-blue-950 shadow-sm scale-105 ring-2 ring-blue-200"
                  : "bg-white border-blue-100/80 text-slate-800"
              }`}
            >
              <span className="text-xl font-black font-mono">"{w.text}"</span>
              <span className="text-[11px] font-mono text-blue-900 bg-blue-100/80 px-2.5 py-0.5 rounded-full border border-blue-300 font-bold">
                ASCII: {w.ascii}
              </span>
              <span className="text-[10px] text-slate-500 text-center font-sans font-medium">{w.note}</span>
            </div>
          ))}
        </div>

        {/* Output & Explanation */}
        <div className="pt-3 border-t border-blue-100 text-xs font-sans leading-relaxed">
          {sorted ? (
            <div className="bg-emerald-50 p-3 rounded-2xl border border-emerald-300 text-emerald-950 flex items-start gap-2 shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong>Output:</strong> <code>[We, line, the, walk]</code> ➔ Chữ hoa <code>'W' (87)</code> có mã ASCII nhỏ hơn tất cả chữ thường <code>'l' (108)</code>, <code>'t' (116)</code>, <code>'w' (119)</code> nên đứng đầu tiên!
              </span>
            </div>
          ) : (
            <p className="text-slate-500 italic">
              Bấm nút chạy bên trên để xem kết quả sắp xếp theo thứ tự mã ASCII của Java.
            </p>
          )}
        </div>
      </div>

      {/* Code Blocks Comparison (List vs Array) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5">
        <div className="bg-slate-950 rounded-2xl p-4 border border-slate-800 text-white flex flex-col justify-between">
          <div className="text-xs font-mono text-slate-400 pb-2 border-b border-slate-800 flex items-center justify-between mb-2">
            <span>Sort.java — Dùng Collections.sort(List)</span>
            <span className="text-blue-400 font-bold">List&lt;String&gt;</span>
          </div>
          <pre className="text-xs font-mono overflow-x-auto">
            <code dangerouslySetInnerHTML={{ __html: highlightJavaVsCode(sort1Code) }} />
          </pre>
        </div>

        <div className="bg-slate-950 rounded-2xl p-4 border border-slate-800 text-white flex flex-col justify-between">
          <div className="text-xs font-mono text-slate-400 pb-2 border-b border-slate-800 flex items-center justify-between mb-2">
            <span>Sort2.java — Dùng Arrays.sort(Array)</span>
            <span className="text-emerald-400 font-bold">String[] args</span>
          </div>
          <pre className="text-xs font-mono overflow-x-auto">
            <code dangerouslySetInnerHTML={{ __html: highlightJavaVsCode(sort2Code) }} />
          </pre>
        </div>
      </div>

      {/* Sticky Takeaway */}
      <div className="bg-blue-50/80 border-2 border-blue-200 rounded-2xl p-4 flex items-start gap-3 text-xs text-blue-950">
        <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
        <div>
          <strong>⭐ Quy tắc ghi nhớ nhanh:</strong><br/>
          • <strong>Array (mảng)</strong> ➔ Dùng <code>Arrays.sort(arr)</code>.<br/>
          • <strong>List (danh sách)</strong> ➔ Dùng <code>Collections.sort(list)</code>.<br/>
          • <strong>Dữ liệu đối tượng tùy biến (Custom Objects)</strong> ➔ Bắt buộc phải định nghĩa và truyền <code>Comparator</code> (hoặc implement <code>Comparable</code>).
        </div>
      </div>
    </div>
  );
}
