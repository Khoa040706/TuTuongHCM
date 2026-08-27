"use client";

import React, { useState } from "react";
import { Code2, ArrowLeftRight, AlertTriangle, ShieldCheck } from "lucide-react";

export default function StackLLDualWorkbench() {
  const [activeSide, setActiveSide] = useState("both");

  return (
    <div className="w-full bg-white text-slate-800 border border-slate-200/80 rounded-2xl shadow-lg p-5 md:p-6 my-8 font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200 mb-6">
        <div>
          <div className="flex items-center gap-2 text-indigo-600 font-semibold text-xs uppercase tracking-wider mb-1">
            <ArrowLeftRight className="w-4 h-4" /> 3.4 & 3.5 So sánh 2 cách cài đặt Stack dùng Linked List
          </div>
          <h3 className="text-xl md:text-2xl text-slate-900 font-extrabold">
            StackLL (Composition) <span className="text-slate-400 font-normal">vs</span> StackLLE (Inheritance)
          </h3>
        </div>

        {/* Tab Switcher */}
        <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs self-start md:self-auto">
          <button
            onClick={() => setActiveSide("both")}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
              activeSide === "both"
                ? "bg-white text-indigo-600 shadow-sm border border-slate-200/60"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Song song (Dual View)
          </button>
          <button
            onClick={() => setActiveSide("composition")}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
              activeSide === "composition"
                ? "bg-white text-purple-700 shadow-sm border border-slate-200/60"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Chỉ xem Composition (3.4)
          </button>
          <button
            onClick={() => setActiveSide("inheritance")}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
              activeSide === "inheritance"
                ? "bg-white text-indigo-700 shadow-sm border border-slate-200/60"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Chỉ xem Inheritance (3.5)
          </button>
        </div>
      </div>

      {/* Dual Workbench Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* COMPOSITION CARD */}
        {(activeSide === "both" || activeSide === "composition") && (
          <div className="bg-purple-50/50 border border-purple-200 rounded-xl p-5 flex flex-col justify-between shadow-sm">
            <div>
              {/* Card Title & Badge */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-purple-600" />
                  <h4 className="font-bold text-purple-950 text-base">StackLL.java (Composition)</h4>
                </div>
                <span className="text-xs bg-purple-100 text-purple-700 font-semibold px-2.5 py-1 rounded-md border border-purple-200 font-mono">
                  Cách 1: HAS-A
                </span>
              </div>

              {/* Code Block with Mac Title Bar */}
              <div className="bg-slate-950 text-slate-200 font-mono text-xs rounded-xl border border-slate-800 shadow-md overflow-hidden my-2">
                {/* Mac Title Bar */}
                <div className="bg-slate-900 px-4 py-2.5 flex items-center justify-between border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span className="ml-2 font-mono text-xs text-purple-300 font-semibold flex items-center gap-1.5">
                      <Code2 className="w-3.5 h-3.5 text-purple-400" /> StackLL.java (Composition)
                    </span>
                  </div>
                  <span className="text-[10px] bg-purple-950/80 text-purple-300 px-2 py-0.5 rounded border border-purple-800 font-mono">
                    Cách 1: HAS-A
                  </span>
                </div>

                {/* Code Content */}
                <div className="p-4 font-mono text-xs overflow-x-auto text-slate-200 space-y-1 leading-relaxed">
                  <div className="text-slate-500">{"// StackLL.java - Dùng BasicLinkedList bên trong"}</div>
                  <div><span className="text-purple-400">import</span> java.util.*;</div>
                  <br />
                  <div>
                    <span className="text-purple-400">class</span> <span className="text-emerald-300">StackLL</span>&lt;<span className="text-amber-300">E</span>&gt; <span className="text-purple-400">implements</span> <span className="text-cyan-300">StackADT</span>&lt;<span className="text-amber-300">E</span>&gt; &#123;
                  </div>

                  {/* Highlighted property */}
                  <div className="bg-purple-950/70 -mx-4 px-4 py-1 border-l-2 border-purple-400 my-1 text-purple-200">
                    <span className="text-purple-400">private</span> <span className="text-cyan-300">BasicLinkedList</span>&lt;<span className="text-amber-300">E</span>&gt; list; <span className="text-slate-400">{"// vì sao private?"}</span>
                  </div>

                  <div className="pl-4">
                    <span className="text-purple-400">public</span> <span className="text-emerald-300">StackLL</span>() &#123;
                  </div>
                  <div className="pl-8">
                    list = <span className="text-purple-400">new</span> <span className="text-cyan-300">BasicLinkedList</span>&lt;<span className="text-amber-300">E</span>&gt;();
                  </div>
                  <div className="pl-4">&#125;</div>
                  <br />

                  <div className="pl-4">
                    <span className="text-purple-400">public boolean</span> <span className="text-emerald-300">empty</span>() &#123; <span className="text-purple-400">return</span> list.isEmpty(); &#125;
                  </div>
                  <br />

                  <div className="pl-4">
                    <span className="text-purple-400">public</span> <span className="text-amber-300">E</span> <span className="text-emerald-300">peek</span>() <span className="text-purple-400">throws</span> <span className="text-rose-400">EmptyStackException</span> &#123;
                  </div>
                  <div className="pl-8"><span className="text-purple-400">try</span> &#123;</div>
                  <div className="pl-12 text-purple-200"><span className="text-purple-400">return</span> list.getFirst();</div>
                  <div className="pl-8">&#125; <span className="text-purple-400">catch</span> (<span className="text-rose-400">NoSuchElementException</span> e) &#123;</div>
                  <div className="pl-12"><span className="text-purple-400">throw new</span> <span className="text-rose-400">EmptyStackException</span>();</div>
                  <div className="pl-8">&#125;</div>
                  <div className="pl-4">&#125;</div>
                  <br />

                  <div className="pl-4">
                    <span className="text-purple-400">public</span> <span className="text-amber-300">E</span> <span className="text-emerald-300">pop</span>() <span className="text-purple-400">throws</span> <span className="text-rose-400">EmptyStackException</span> &#123;
                  </div>
                  <div className="pl-8"><span className="text-amber-300">E</span> obj = peek();</div>
                  <div className="pl-8 text-purple-200">list.removeFirst();</div>
                  <div className="pl-8"><span className="text-purple-400">return</span> obj;</div>
                  <div className="pl-4">&#125;</div>
                  <br />

                  <div className="pl-4">
                    <span className="text-purple-400">public void</span> <span className="text-emerald-300">push</span>(<span className="text-amber-300">E</span> o) &#123;
                  </div>
                  <div className="pl-8 text-purple-200">list.addFirst(o);</div>
                  <div className="pl-4">&#125;</div>

                  <div>&#125;</div>
                </div>
              </div>
            </div>

            {/* Bottom Advantage Box */}
            <div className="mt-3 p-3 bg-purple-100/70 border border-purple-200 rounded-lg text-xs text-purple-900 flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
              <span><strong>Ưu điểm:</strong> An toàn tuyệt đối! Chi tiết `list` được ẩn (`private`), ngăn người dùng bên ngoài gọi hàm `contains()`, `print()` bất hợp lệ với Stack.</span>
            </div>
          </div>
        )}

        {/* INHERITANCE CARD */}
        {(activeSide === "both" || activeSide === "inheritance") && (
          <div className="bg-indigo-50/50 border border-indigo-200 rounded-xl p-5 flex flex-col justify-between shadow-sm">
            <div>
              {/* Card Title & Badge */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-indigo-600" />
                  <h4 className="font-bold text-indigo-950 text-base">StackLLE.java (Inheritance)</h4>
                </div>
                <span className="text-xs bg-indigo-100 text-indigo-700 font-semibold px-2.5 py-1 rounded-md border border-indigo-200 font-mono">
                  Cách 2: IS-A
                </span>
              </div>

              {/* Code Block with Mac Title Bar */}
              <div className="bg-slate-950 text-slate-200 font-mono text-xs rounded-xl border border-slate-800 shadow-md overflow-hidden my-2">
                {/* Mac Title Bar */}
                <div className="bg-slate-900 px-4 py-2.5 flex items-center justify-between border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span className="ml-2 font-mono text-xs text-indigo-300 font-semibold flex items-center gap-1.5">
                      <Code2 className="w-3.5 h-3.5 text-indigo-400" /> StackLLE.java (Inheritance)
                    </span>
                  </div>
                  <span className="text-[10px] bg-indigo-950/80 text-indigo-300 px-2 py-0.5 rounded border border-indigo-800 font-mono">
                    Cách 2: IS-A
                  </span>
                </div>

                {/* Code Content */}
                <div className="p-4 font-mono text-xs overflow-x-auto text-slate-200 space-y-1 leading-relaxed">
                  <div className="text-slate-500">{"// StackLLE.java - Kế thừa BasicLinkedList"}</div>
                  <div><span className="text-indigo-400">import</span> java.util.*;</div>
                  <br />

                  {/* Highlighted extends */}
                  <div className="bg-indigo-950/70 -mx-4 px-4 py-1 border-l-2 border-indigo-400 my-1 text-indigo-200">
                    <span className="text-indigo-400">class</span> <span className="text-emerald-300">StackLLE</span>&lt;<span className="text-amber-300">E</span>&gt; <span className="text-indigo-400">extends</span> <span className="text-cyan-300">BasicLinkedList</span>&lt;<span className="text-amber-300">E</span>&gt; <span className="text-indigo-400">implements</span> <span className="text-cyan-300">StackADT</span>&lt;<span className="text-amber-300">E</span>&gt; &#123;
                  </div>

                  <div className="pl-4 text-slate-500">{"// Không cần khai báo thuộc tính list hay constructor!"}</div>
                  <div className="pl-4">
                    <span className="text-indigo-400">public boolean</span> <span className="text-emerald-300">empty</span>() &#123; <span className="text-indigo-400">return</span> isEmpty(); &#125;
                  </div>
                  <br />

                  <div className="pl-4">
                    <span className="text-indigo-400">public</span> <span className="text-amber-300">E</span> <span className="text-emerald-300">peek</span>() <span className="text-indigo-400">throws</span> <span className="text-rose-400">EmptyStackException</span> &#123;
                  </div>
                  <div className="pl-8"><span className="text-indigo-400">try</span> &#123;</div>
                  <div className="pl-12 text-indigo-200"><span className="text-indigo-400">return</span> getFirst();</div>
                  <div className="pl-8">&#125; <span className="text-indigo-400">catch</span> (<span className="text-rose-400">NoSuchElementException</span> c) &#123;</div>
                  <div className="pl-12"><span className="text-indigo-400">throw new</span> <span className="text-rose-400">EmptyStackException</span>();</div>
                  <div className="pl-8">&#125;</div>
                  <div className="pl-4">&#125;</div>
                  <br />

                  <div className="pl-4">
                    <span className="text-indigo-400">public</span> <span className="text-amber-300">E</span> <span className="text-emerald-300">pop</span>() <span className="text-indigo-400">throws</span> <span className="text-rose-400">EmptyStackException</span> &#123;
                  </div>
                  <div className="pl-8"><span className="text-amber-300">E</span> obj = peek();</div>
                  <div className="pl-8 text-indigo-200">removeFirst();</div>
                  <div className="pl-8"><span className="text-indigo-400">return</span> obj;</div>
                  <div className="pl-4">&#125;</div>
                  <br />

                  <div className="pl-4">
                    <span className="text-indigo-400">public void</span> <span className="text-emerald-300">push</span>(<span className="text-amber-300">E</span> o) &#123; <span className="text-indigo-200">addFirst(o);</span> &#125;
                  </div>

                  <div>&#125;</div>
                </div>
              </div>
            </div>

            {/* Bottom Feature Box */}
            <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-900 flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span><strong>Đặc điểm:</strong> Code ngắn hơn nhiều (gọi trực tiếp `getFirst()`, `removeFirst()`), nhưng `StackLLE` thừa hưởng toàn bộ public method của `BasicLinkedList` (như `contains()`).</span>
            </div>
          </div>
        )}
      </div>

      {/* Footer Explanation Note */}
      <div className="mt-6 bg-slate-50 border border-slate-200 text-slate-700 p-4 rounded-xl text-xs leading-relaxed">
        <strong className="text-amber-700 font-bold">📌 Ghi chú quan trọng trong code:</strong> Cả 2 cách đều sử dụng phương thức <code className="text-cyan-700 font-mono bg-slate-200/60 px-1 py-0.5 rounded">isEmpty()</code>, <code className="text-cyan-700 font-mono bg-slate-200/60 px-1 py-0.5 rounded">getFirst()</code>, <code className="text-cyan-700 font-mono bg-slate-200/60 px-1 py-0.5 rounded">removeFirst()</code>, <code className="text-cyan-700 font-mono bg-slate-200/60 px-1 py-0.5 rounded">addFirst()</code> của Linked List. Ngoại lệ <code className="text-rose-600 font-mono bg-rose-50 px-1 py-0.5 rounded">NoSuchElementException</code> do Linked List ném ra khi list rỗng sẽ được <span className="text-purple-700 font-semibold">bắt lại (catch)</span> và <span className="text-rose-700 font-semibold">chuyển thành (throw)</span> <code className="text-rose-600 font-mono bg-rose-50 px-1 py-0.5 rounded">EmptyStackException</code> đúng chuẩn hợp đồng Stack.
      </div>
    </div>
  );
}
