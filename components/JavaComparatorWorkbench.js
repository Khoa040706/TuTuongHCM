"use client";

import React, { useState } from "react";
import {
  Users,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  GitBranch,
  Layers,
  RotateCcw,
  Sliders
} from "lucide-react";
import { highlightJavaVsCode } from "../utils/javaSyntaxHighlighter";

export default function JavaComparatorWorkbench() {
  const [sortMode, setSortMode] = useState("initial"); // "initial", "age", "name", "nameThenAge"

  const initialPeople = [
    { name: "Michael", age: 15, id: 0 },
    { name: "Mimi", age: 9, id: 1 },
    { name: "Sarah", age: 12, id: 2 },
    { name: "Andrew", age: 15, id: 3 },
    { name: "Mark", age: 12, id: 4 }
  ];

  const sortedByAge = [
    { name: "Mimi", age: 9, id: 1, note: "9 tuổi (nhỏ nhất)" },
    { name: "Sarah", age: 12, id: 2, note: "12 tuổi (vào trước)" },
    { name: "Mark", age: 12, id: 4, note: "12 tuổi (vào sau)" },
    { name: "Michael", age: 15, id: 0, note: "15 tuổi (vào trước)" },
    { name: "Andrew", age: 15, id: 3, note: "15 tuổi (vào sau)" }
  ];

  const sortedByName = [
    { name: "Andrew", age: 15, id: 3, note: "A (đầu alphabet)" },
    { name: "Mark", age: 12, id: 4, note: "M" },
    { name: "Michael", age: 15, id: 0, note: "M" },
    { name: "Mimi", age: 9, id: 1, note: "M" },
    { name: "Sarah", age: 12, id: 2, note: "S (cuối alphabet)" }
  ];

  const sortedNameThenAge = [
    { name: "Mimi", age: 9, id: 1, note: "9 tuổi" },
    { name: "Mark", age: 12, id: 4, note: "12 tuổi (Mark trước Sarah theo Alphabet!)" },
    { name: "Sarah", age: 12, id: 2, note: "12 tuổi (Sarah sau Mark theo Alphabet)" },
    { name: "Andrew", age: 15, id: 3, note: "15 tuổi (Andrew trước Michael theo Alphabet!)" },
    { name: "Michael", age: 15, id: 0, note: "15 tuổi (Michael sau Andrew theo Alphabet)" }
  ];

  const getList = () => {
    if (sortMode === "age") return sortedByAge;
    if (sortMode === "name") return sortedByName;
    if (sortMode === "nameThenAge") return sortedNameThenAge;
    return initialPeople;
  };

  const personCode = `class Person {
    private String name;
    private int age;
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    public String getName() { return name; }
    public int getAge() { return age; }
    public String toString() { return name + " - " + age; }
}`;

  const comparatorCode = `// 1. So sánh theo tuổi
class AgeComparator implements Comparator<Person> {
    public int compare(Person p1, Person p2) {
        return p1.getAge() - p2.getAge(); // Âm nếu p1<p2, 0 nếu bằng, dương nếu p1>p2
    }
    public boolean equals(Object obj) { return this == obj; }
}

// 2. So sánh theo tên (Alphabet)
class NameComparator implements Comparator<Person> {
    public int compare(Person p1, Person p2) {
        return p1.getName().compareTo(p2.getName());
    }
    public boolean equals(Object obj) { return this == obj; }
}`;

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl p-5 md:p-7 shadow-sm my-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-5">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200">
            Mục 8.3 — Custom Comparator &amp; Đa Tiêu Chí
          </span>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-1">
            Java Comparator Interface: Sắp Xếp Đối Tượng Person Theo Nhiều Tiêu Chí
          </h3>
          <p className="text-xs text-slate-500">
            Minh họa việc hiện thực <code>compare()</code> và <code>equals()</code> để sắp xếp theo Tuổi, theo Tên, và Sắp xếp kép đa khóa
          </p>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 font-mono text-xs font-bold self-start sm:self-auto">
          <Sliders className="w-3.5 h-3.5 text-teal-600" />
          Multi-Criterion Sorting
        </div>
      </div>

      {/* Interactive People Sorter Sandbox */}
      <div className="bg-gradient-to-br from-teal-50/70 via-white to-slate-50 text-slate-800 rounded-3xl p-5 md:p-6 border border-teal-200 shadow-sm mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-teal-100 mb-4">
          <div>
            <span className="text-xs font-mono font-bold text-teal-950 uppercase block">
              Mảng 5 đối tượng Person: Michael(15), Mimi(9), Sarah(12), Andrew(15), Mark(12)
            </span>
            <span className="text-xs text-teal-800 font-mono font-semibold">
              Chọn tiêu chí Comparator để sắp xếp
            </span>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center gap-1.5 bg-slate-100/90 p-1.5 rounded-2xl border border-slate-200 flex-wrap">
            <button
              onClick={() => setSortMode("initial")}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition cursor-pointer ${
                sortMode === "initial"
                  ? "bg-white text-slate-900 border border-slate-300 shadow-xs"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
              }`}
            >
              Gốc
            </button>
            <button
              onClick={() => setSortMode("age")}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition cursor-pointer ${
                sortMode === "age"
                  ? "bg-amber-500 text-white font-bold shadow-xs"
                  : "text-amber-800 hover:bg-amber-100/80"
              }`}
            >
              AgeComparator
            </button>
            <button
              onClick={() => setSortMode("name")}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition cursor-pointer ${
                sortMode === "name"
                  ? "bg-blue-600 text-white font-bold shadow-xs"
                  : "text-blue-800 hover:bg-blue-100/80"
              }`}
            >
              NameComparator
            </button>
            <button
              onClick={() => setSortMode("nameThenAge")}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition cursor-pointer ${
                sortMode === "nameThenAge"
                  ? "bg-emerald-600 text-white font-bold shadow-xs"
                  : "text-emerald-800 hover:bg-emerald-100/80"
              }`}
            >
              Sort Name ➔ Sort Age (Kép ⭐)
            </button>
          </div>
        </div>

        {/* 5 Person Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 py-2 mb-3">
          {getList().map((p, idx) => (
            <div
              key={p.id}
              className="p-3.5 rounded-2xl bg-white border-2 border-teal-200 flex flex-col justify-between shadow-xs hover:border-teal-400 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-1">
                  <span className="font-black text-sm text-slate-900">{p.name}</span>
                  <span className="px-2 py-0.5 rounded-full bg-teal-100 text-teal-950 border border-teal-300 text-[11px] font-bold">
                    {p.age} tuổi
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-500 font-semibold">[{idx}]</span>
              </div>

              {p.note && (
                <div className="text-[10px] font-sans pt-2 border-t border-teal-100 mt-2 text-teal-800 font-bold">
                  {p.note}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Commentary */}
        <div className="pt-3 border-t border-teal-100 text-xs font-sans leading-relaxed">
          {sortMode === "initial" && (
            <div className="bg-white p-3 rounded-2xl border border-slate-200 text-slate-700 shadow-xs">
              Trạng thái khởi tạo mảng: <code>[Michael - 15, Mimi - 9, Sarah - 12, Andrew - 15, Mark - 12]</code>.
            </div>
          )}
          {sortMode === "age" && (
            <div className="bg-amber-50 p-3 rounded-2xl border border-amber-300 text-amber-950 shadow-xs">
              <strong>AgeComparator:</strong> Sắp xếp tăng dần theo tuổi &rarr; <code>[Mimi - 9, Sarah - 12, Mark - 12, Michael - 15, Andrew - 15]</code>.
            </div>
          )}
          {sortMode === "name" && (
            <div className="bg-blue-50 p-3 rounded-2xl border border-blue-300 text-blue-950 shadow-xs">
              <strong>NameComparator:</strong> Sắp xếp theo thứ tự bảng chữ cái &rarr; <code>[Andrew - 15, Mark - 12, Michael - 15, Mimi - 9, Sarah - 12]</code>.
            </div>
          )}
          {sortMode === "nameThenAge" && (
            <div className="bg-emerald-50 p-3 rounded-2xl border border-emerald-300 text-emerald-950 flex items-start gap-2 shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong>Sắp xếp kép đa tiêu chí:</strong> Khi đã sort theo Tên rồi sort tiếp theo Tuổi, thuật toán Timsort (Stable) của Java giữ nguyên thứ tự tên của những người cùng tuổi! Người 12 tuổi: <code>Mark (M) trước Sarah (S)</code>; Người 15 tuổi: <code>Andrew (A) trước Michael (M)</code>!
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Code Blocks */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-5">
        <div className="lg:col-span-5 bg-slate-950 rounded-2xl p-4 border border-slate-800 text-white flex flex-col justify-between">
          <div className="text-xs font-mono text-slate-400 pb-2 border-b border-slate-800 flex items-center justify-between mb-2">
            <span>Person.java</span>
            <span className="text-teal-400">Class mô hình dữ liệu</span>
          </div>
          <pre className="text-xs font-mono overflow-x-auto">
            <code dangerouslySetInnerHTML={{ __html: highlightJavaVsCode(personCode) }} />
          </pre>
        </div>

        <div className="lg:col-span-7 bg-slate-950 rounded-2xl p-4 border border-slate-800 text-white flex flex-col justify-between">
          <div className="text-xs font-mono text-slate-400 pb-2 border-b border-slate-800 flex items-center justify-between mb-2">
            <span>Comparators.java</span>
            <span className="text-amber-400">AgeComparator &amp; NameComparator</span>
          </div>
          <pre className="text-xs font-mono overflow-x-auto">
            <code dangerouslySetInnerHTML={{ __html: highlightJavaVsCode(comparatorCode) }} />
          </pre>
        </div>
      </div>

      {/* Sticky Takeaway */}
      <div className="bg-teal-50/80 border-2 border-teal-200 rounded-2xl p-4 flex items-start gap-3 text-xs text-teal-950">
        <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
        <div>
          <strong>⭐ Cần nhớ về Comparator (Mục 8):</strong><br/>
          • <code>Comparator</code> là interface trong <code>java.util</code>, cần override 2 phương thức: <code>compare(T o1, T o2)</code> và <code>equals(Object obj)</code>.<br/>
          • Cho phép định nghĩa linh hoạt <strong>nhiều tiêu chí sắp xếp khác nhau</strong> (theo tuổi, theo tên, theo điểm số, v.v.) trên cùng 1 class mà không cần sửa đổi class gốc.
        </div>
      </div>
    </div>
  );
}
