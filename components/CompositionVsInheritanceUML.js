"use client";

import React, { useState } from "react";
import { GitFork, CheckCircle2, HelpCircle } from "lucide-react";

export default function CompositionVsInheritanceUML() {
  const [activeTab, setActiveTab] = useState("all");
  const [hoveredMode, setHoveredMode] = useState(null);

  return (
    <div className="w-full bg-white text-slate-800 border border-slate-200/80 rounded-2xl shadow-lg p-6 my-8 font-sans overflow-hidden">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 text-indigo-600 font-semibold text-xs uppercase tracking-wider mb-1">
            <GitFork className="w-4 h-4" /> 3.1 Hai cách định nghĩa Class trong OOP
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-slate-900">
            Composition (Kết hợp) <span className="text-slate-500 font-normal">vs</span> Inheritance (Kế thừa)
          </h3>
        </div>

        {/* Tab filter */}
        <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200 self-start md:self-auto">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === "all"
                ? "bg-indigo-600 text-white shadow-sm"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            So sánh song song
          </button>
          <button
            onClick={() => setActiveTab("composition")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === "composition"
                ? "bg-purple-600 text-white shadow-sm"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            Composition (Has-A)
          </button>
          <button
            onClick={() => setActiveTab("inheritance")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === "inheritance"
                ? "bg-indigo-600 text-white shadow-sm"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            Inheritance (Is-A)
          </button>
        </div>
      </div>

      {/* UML Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        {/* COMPOSITION CARD */}
        {(activeTab === "all" || activeTab === "composition") && (
          <div
            onMouseEnter={() => setHoveredMode("composition")}
            onMouseLeave={() => setHoveredMode(null)}
            className={`relative rounded-xl border transition-all duration-300 p-5 bg-purple-50/60 text-slate-800 ${
              hoveredMode === "composition"
                ? "border-purple-400 bg-purple-50 shadow-md shadow-purple-100"
                : "border-purple-200"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-700 border border-purple-200">
                Composition (Kết hợp) — HAS-A
              </span>
              <span className="text-xs text-slate-500">
                Class A <span className="text-purple-700 font-semibold">chứa</span> B
              </span>
            </div>

            {/* Visual UML Diagram */}
            <div className="bg-white/80 rounded-xl p-5 border border-purple-200/80 my-4 flex flex-col items-center gap-4 relative shadow-sm">
              {/* Class A Box */}
              <div className="w-full max-w-[200px] bg-purple-50/90 border-2 border-purple-400 rounded-lg p-3 text-center shadow-sm">
                <div className="text-xs text-purple-800 font-mono font-bold uppercase tracking-wider border-b border-purple-200 pb-1 mb-2">
                  Class A (StackLL)
                </div>
                <div className="text-[11px] font-mono text-purple-950 bg-white p-1.5 rounded border border-purple-200 shadow-inner font-semibold">
                  private B b = new B();
                </div>
              </div>

              {/* Connector Arrow */}
              <div className="flex flex-col items-center my-1 text-purple-600">
                <div className="text-[10px] font-mono text-purple-800 bg-purple-100 px-2 py-0.5 rounded border border-purple-200 mb-1 font-medium">
                  ◇ (Has-A / Chứa instance)
                </div>
                <div className="w-0.5 h-6 bg-gradient-to-b from-purple-400 to-purple-600 relative animate-pulse">
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 border-r-2 border-b-2 border-purple-600 transform rotate-45"></div>
                </div>
              </div>

              {/* Class B Box */}
              <div className="w-full max-w-[200px] bg-slate-50 border-2 border-slate-300 rounded-lg p-3 text-center shadow-sm">
                <div className="text-xs text-slate-700 font-mono font-bold uppercase tracking-wider border-b border-slate-200 pb-1 mb-2">
                  Class B (BasicLinkedList)
                </div>
                <div className="text-[11px] font-mono text-slate-600">
                  {`{ addFirst(), removeFirst() }`}
                </div>
              </div>
            </div>

            {/* Code Snippet */}
            <div className="bg-slate-950 text-slate-200 rounded-xl p-4 font-mono text-xs border border-slate-800 shadow-md overflow-x-auto">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800/80">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[10px] font-sans text-slate-400 font-medium">// Code mẫu Composition</span>
              </div>
              <span className="text-purple-400">class</span> <span className="text-emerald-300">A</span> &#123;<br />
              &nbsp;&nbsp;<span className="text-indigo-300">B</span> b = <span className="text-purple-400">new</span> <span className="text-indigo-300">B</span>(...); <span className="text-slate-500">// A được cấu thành từ B</span><br />
              &#125;
            </div>

            <ul className="mt-4 space-y-1.5 text-xs text-slate-700">
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                <span>Ẩn bớt phương thức thừa của B không cần thiết cho A.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                <span>An toàn cao, giảm kết nối chặt (loose coupling).</span>
              </li>
            </ul>
          </div>
        )}

        {/* INHERITANCE CARD */}
        {(activeTab === "all" || activeTab === "inheritance") && (
          <div
            onMouseEnter={() => setHoveredMode("inheritance")}
            onMouseLeave={() => setHoveredMode(null)}
            className={`relative rounded-xl border transition-all duration-300 p-5 bg-indigo-50/60 text-slate-800 ${
              hoveredMode === "inheritance"
                ? "border-indigo-400 bg-indigo-50 shadow-md shadow-indigo-100"
                : "border-indigo-200"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-100 text-indigo-700 border border-indigo-200">
                Inheritance (Kế thừa) — IS-A
              </span>
              <span className="text-xs text-slate-500">
                Class A <span className="text-indigo-700 font-semibold">là một</span> B mở rộng
              </span>
            </div>

            {/* Visual UML Diagram */}
            <div className="bg-white/80 rounded-xl p-5 border border-indigo-200/80 my-4 flex flex-col items-center gap-4 relative shadow-sm">
              {/* Class A Box */}
              <div className="w-full max-w-[200px] bg-indigo-50/90 border-2 border-indigo-400 rounded-lg p-3 text-center shadow-sm">
                <div className="text-xs text-indigo-800 font-mono font-bold uppercase tracking-wider border-b border-indigo-200 pb-1 mb-2">
                  Class A (StackLLE)
                </div>
                <div className="text-[11px] font-mono text-indigo-950 bg-white p-1.5 rounded border border-indigo-200 shadow-inner font-semibold">
                  extends B
                </div>
              </div>

              {/* Connector Arrow */}
              <div className="flex flex-col items-center my-1 text-indigo-600">
                <div className="text-[10px] font-mono text-indigo-800 bg-indigo-100 px-2 py-0.5 rounded border border-indigo-200 mb-1 font-medium">
                  △ (Is-A / Extends mở rộng)
                </div>
                <div className="w-0.5 h-6 bg-gradient-to-b from-indigo-400 to-indigo-600 relative animate-pulse">
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 border-r-2 border-b-2 border-indigo-600 transform rotate-45"></div>
                </div>
              </div>

              {/* Class B Box */}
              <div className="w-full max-w-[200px] bg-slate-50 border-2 border-slate-300 rounded-lg p-3 text-center shadow-sm">
                <div className="text-xs text-slate-700 font-mono font-bold uppercase tracking-wider border-b border-slate-200 pb-1 mb-2">
                  Class B (BasicLinkedList)
                </div>
                <div className="text-[11px] font-mono text-slate-600">
                  {`{ addFirst(), removeFirst() }`}
                </div>
              </div>
            </div>

            {/* Code Snippet */}
            <div className="bg-slate-950 text-slate-200 rounded-xl p-4 font-mono text-xs border border-slate-800 shadow-md overflow-x-auto">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800/80">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[10px] font-sans text-slate-400 font-medium">// Code mẫu Inheritance</span>
              </div>
              <span className="text-indigo-400">class</span> <span className="text-emerald-300">A</span> <span className="text-indigo-400">extends</span> <span className="text-cyan-300">B</span> &#123;<br />
              &nbsp;&nbsp;<span className="text-slate-500">// A kế thừa toàn bộ phương thức public của B</span><br />
              &#125;
            </div>

            <ul className="mt-4 space-y-1.5 text-xs text-slate-700">
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                <span>Viết code ngắn gọn hơn, dùng trực tiếp phương thức lớp cha.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                <span>Lộ toàn bộ public method của B ra ngoài A (có rủi ro).</span>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Summary Footer */}
      <div className="bg-amber-50/80 rounded-xl p-4 border border-amber-200/80 flex items-start gap-3 shadow-sm">
        <HelpCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div className="text-xs text-slate-700 leading-relaxed">
          <strong className="text-slate-900">Ghi nhớ kinh điển trong OOP:</strong>{" "}
          <span className="text-purple-700 font-semibold">Composition</span> thường được ưu tiên hơn{" "}
          <span className="text-indigo-700 font-semibold">Inheritance</span> khi thiết kế Data Structures như Stack/Queue vì nó giúp{" "}
          <em className="text-amber-800 font-medium">bảo vệ tính đóng gói (encapsulation)</em>, ngăn chặn người dùng gọi các phương thức chèn/xóa ở vị trí bất kỳ của Linked List.
        </div>
      </div>
    </div>
  );
}
