"use client";

import React, { useState } from "react";
import {
  Code2,
  Copy,
  Check,
  Zap,
  ArrowRight,
  ShieldAlert,
  Layers,
  GitCommit,
  Info,
  Sparkles,
  CheckCircle2,
  BookOpen,
  ArrowLeftRight,
  Cpu,
  Boxes,
  Lock,
  Unlock
} from "lucide-react";

export default function QueueLLCompareVisualizer() {
  // Tab view filter: "all" (side-by-side), "composition", "inheritance"
  const [activeTab, setActiveTab] = useState("all");
  // Active method inspector focus: "all", "offer", "peek", "poll", "isEmpty"
  const [activeMethod, setActiveMethod] = useState("all");
  // Copy button feedback states
  const [copiedComp, setCopiedComp] = useState(false);
  const [copiedInher, setCopiedInher] = useState(false);

  const rawCodeComposition = `// QueueLL.java
import java.util.*;
class QueueLL <E> implements QueueADT <E> {
    private TailedLinkedList <E> list;
    public QueueLL() { list = new TailedLinkedList <E> (); }
    public boolean isEmpty() { return list.isEmpty(); }
    
    public boolean offer(E o) {
        list.addLast(o);    // isEmpty(), addLast(), getFirst(), removeFirst()
                            // là các public method của TailedLinkedList
        return true;
    }
    public E peek() {
        if (isEmpty()) return null;
        return list.getFirst();
    }
    public E poll() {
        E obj = peek();
        if (!isEmpty()) list.removeFirst();
        return obj;
    }
}`;

  const rawCodeInheritance = `// QueueLLE.java
import java.util.*;
class QueueLLE <E> extends TailedLinkedList <E> implements QueueADT <E> {
    public boolean offer(E o) {
        addLast(o);
        return true;
    }
    public E peek() {
        if (isEmpty()) return null;
        return getFirst();
    }
    public E poll() {
        E obj = peek();
        if (!isEmpty()) removeFirst();
        return obj;
    }
}`;

  const handleCopy = (code, setCopied) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Method focus explanation map
  const methodDetails = {
    all: {
      title: "So sánh tổng quan cấu trúc & cú pháp",
      desc: "Xem tất cả các phương thức. Chọn một phương thức cụ thể bên dưới để so sánh chi tiết giữa gọi qua biến `list` (Composition) và gọi trực tiếp (Inheritance).",
      compCall: "Gọi qua private field: list.method()",
      inherCall: "Gọi trực tiếp method() từ lớp cha",
    },
    offer: {
      title: "Phương thức offer(E o) – Thêm phần tử vào CUỐI Queue (Enqueue)",
      desc: "offer() gọi addLast(o) để chèn nút mới vào vị trí tail của LinkedList. Cả 2 đều đạt O(1) nhờ con trỏ tail.",
      compCall: "list.addLast(o);    // Gọi phương thức public addLast() của đối tượng list",
      inherCall: "addLast(o);         // Gọi trực tiếp phương thức addLast() kế thừa từ TailedLinkedList",
    },
    peek: {
      title: "Phương thức peek() – Xem phần tử ở ĐẦU Queue",
      desc: "peek() xem phần tử đầu mà không xóa. Trả về null nếu Queue rỗng, ngược lại trả về phần tử tại head.",
      compCall: "if (isEmpty()) return null; return list.getFirst();   // Gọi list.getFirst()",
      inherCall: "if (isEmpty()) return null; return getFirst();      // Gọi getFirst() kế thừa",
    },
    poll: {
      title: "Phương thức poll() – Lấy & XÓA phần tử ở ĐẦU Queue (Dequeue)",
      desc: "poll() lấy giá trị ở head rồi gọi removeFirst() để xóa nút đầu tiên khỏi LinkedList. Đạt O(1).",
      compCall: "E obj = peek(); if (!isEmpty()) list.removeFirst(); // Gọi list.removeFirst() font-bold",
      inherCall: "E obj = peek(); if (!isEmpty()) removeFirst();     // Gọi removeFirst() kế thừa",
    },
    isEmpty: {
      title: "Phương thức isEmpty() – Kiểm tra Queue rỗng",
      desc: "Kiểm tra xem danh sách liên kết có phần tử nào hay không (num_nodes == 0).",
      compCall: "public boolean isEmpty() { return list.isEmpty(); } // Ủy quyền cho list",
      inherCall: "Kế thừa trực tiếp isEmpty() từ TailedLinkedList (không cần viết lại trừ khi override)",
    },
  };

  return (
    <div className="bg-white text-slate-800 border border-slate-200/80 rounded-2xl shadow-lg p-5 md:p-6 my-6 font-sans">
      {/* 1. Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2.5 mb-2">
            <span className="bg-teal-100 text-teal-800 border border-teal-200 px-3 py-0.5 rounded-full text-xs font-mono font-bold tracking-wide flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" /> Mục 8.2 - 8.3
            </span>
            <span className="text-xs text-slate-500 font-mono font-medium">QueueADT & TailedLinkedList</span>
          </div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-3">
            <Code2 className="w-7 h-7 text-teal-600 shrink-0" />
            So sánh 2 cách cài đặt Queue bằng Linked List
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Phân tích sự khác biệt cú pháp & kiến trúc giữa <strong className="text-teal-700 font-semibold">Composition (HAS-A)</strong> và <strong className="text-indigo-700 font-semibold">Inheritance (IS-A)</strong>.
          </p>
        </div>

        {/* View mode toggle tabs */}
        <div className="flex bg-slate-100 p-1.5 rounded-xl border border-slate-200 self-start lg:self-auto shrink-0 shadow-inner">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === "all"
                ? "bg-teal-600 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
            }`}
          >
            <ArrowLeftRight className="w-3.5 h-3.5" />
            Tất cả (Song song)
          </button>
          <button
            onClick={() => setActiveTab("composition")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === "composition"
                ? "bg-teal-600 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
            }`}
          >
            <Boxes className="w-3.5 h-3.5" />
            Cách 1: Composition
          </button>
          <button
            onClick={() => setActiveTab("inheritance")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === "inheritance"
                ? "bg-indigo-600 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
            }`}
          >
            <GitCommit className="w-3.5 h-3.5" />
            Cách 2: Inheritance
          </button>
        </div>
      </div>

      {/* 2. Top Callout / Important Note */}
      <div className="my-6 bg-amber-50 border border-amber-200 text-amber-900 p-4 md:p-5 rounded-xl relative overflow-hidden shadow-sm">
        <div className="flex flex-col md:flex-row items-start gap-4">
          <div className="p-2.5 bg-amber-100 border border-amber-300 rounded-lg text-amber-700 shrink-0">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold font-mono uppercase tracking-wider text-amber-800 bg-amber-200/80 px-2 py-0.5 rounded border border-amber-300">
                Ghi chú quan trọng
              </span>
              <span className="text-xs text-amber-700/90 font-medium">Điều kiện chọn cấu trúc Linked List cho Queue</span>
            </div>
            <p className="text-sm md:text-base text-amber-950 leading-relaxed font-medium">
              <strong className="text-rose-700 font-bold">KHÔNG dùng BasicLinkedList</strong> vì cần dùng <code className="text-amber-900 font-mono bg-amber-100 px-1.5 py-0.5 rounded border border-amber-300/80 text-xs">addLast()</code> để thêm vào cuối – phải dùng <strong className="text-teal-800 font-bold">TailedLinkedList</strong> (linked list có con trỏ tail). Cấu trúc TailedLinkedList có: <code className="text-teal-800 font-mono font-semibold">head</code>, <code className="text-teal-800 font-mono font-semibold">tail</code>, <code className="text-teal-800 font-mono font-semibold">num_nodes</code>.
            </p>

            {/* Mini visual diagram of TailedLinkedList */}
            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-mono">
              <div className="bg-white/90 px-3 py-1.5 rounded-lg border border-amber-200/80 flex items-center gap-2 text-slate-700 shadow-sm">
                <span className="text-amber-700 font-bold">head</span>
                <ArrowRight className="w-3 h-3 text-slate-400" />
                <span className="bg-amber-100/70 px-2 py-0.5 rounded text-amber-900 border border-amber-200">Node[0]</span>
                <span className="text-slate-400">➔</span>
                <span className="bg-amber-100/70 px-2 py-0.5 rounded text-amber-900 border border-amber-200">Node[1]</span>
                <span className="text-slate-400">➔</span>
                <span className="bg-teal-100/70 px-2 py-0.5 rounded text-teal-900 border border-teal-200">Node[N-1]</span>
                <ArrowRight className="w-3 h-3 text-slate-400 transform rotate-180" />
                <span className="text-teal-700 font-bold">tail</span>
              </div>
              <span className="text-slate-700 bg-white/90 px-2.5 py-1.5 rounded-lg border border-amber-200/80 shadow-sm">
                num_nodes = N
              </span>
              <span className="text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1.5 rounded-lg flex items-center gap-1 font-semibold shadow-sm">
                <Zap className="w-3.5 h-3.5 text-emerald-600" /> addLast() & removeFirst() đều O(1)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Interactive Method Inspector Filter Tabs */}
      <div className="mb-6 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2.5">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
            <Sparkles className="w-4 h-4 text-teal-600" />
            <span>Lọc & Highlight phương thức tương ứng:</span>
          </div>
          <span className="text-[11px] text-slate-500 font-medium">Click chọn để xem điểm khác biệt ở từng hàm</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {[
            { id: "all", label: "Tất cả phương thức", icon: Layers },
            { id: "offer", label: "offer(E o)", desc: "Thêm vào cuối (tail)", icon: Zap },
            { id: "peek", label: "peek()", desc: "Xem phần tử đầu", icon: Info },
            { id: "poll", label: "poll()", desc: "Lấy & xóa từ đầu (head)", icon: Cpu },
            { id: "isEmpty", label: "isEmpty()", desc: "Kiểm tra rỗng", icon: CheckCircle2 },
          ].map((item) => {
            const Icon = item.icon;
            const isActive = activeMethod === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveMethod(item.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all flex items-center gap-1.5 ${
                  isActive
                    ? "bg-teal-600 text-white border border-teal-600 shadow-sm"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-slate-400"}`} />
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. Active Method Highlight Explanation Box */}
      <div className="mb-6 bg-teal-50/60 border border-teal-200 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-teal-100 text-teal-700 rounded-lg shrink-0 mt-0.5 border border-teal-200">
            <Info className="w-5 h-5" />
          </div>
          <div className="space-y-1.5 flex-1">
            <h4 className="text-sm font-bold text-teal-900 flex items-center gap-2">
              {methodDetails[activeMethod].title}
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed">
              {methodDetails[activeMethod].desc}
            </p>
            {activeMethod !== "all" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-2 text-xs font-mono">
                <div className="bg-white border border-teal-200 p-2.5 rounded-lg text-slate-800 shadow-sm">
                  <span className="text-teal-800 font-bold block text-[10px] uppercase mb-0.5">Composition (HAS-A):</span>
                  {methodDetails[activeMethod].compCall}
                </div>
                <div className="bg-white border border-indigo-200 p-2.5 rounded-lg text-slate-800 shadow-sm">
                  <span className="text-indigo-800 font-bold block text-[10px] uppercase mb-0.5">Inheritance (IS-A):</span>
                  {methodDetails[activeMethod].inherCall}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 5. Split-Screen Code Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        {/* LEFT CARD: CÁCH 1 - COMPOSITION */}
        {(activeTab === "all" || activeTab === "composition") && (
          <div className="bg-teal-50/50 border border-teal-200 rounded-xl p-5 text-slate-800 flex flex-col shadow-sm">
            {/* Card Header */}
            <div className="flex items-center justify-between flex-wrap gap-2 pb-4 border-b border-teal-200/80 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-teal-100 text-teal-700 rounded-lg border border-teal-200">
                  <Boxes className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-base font-bold text-slate-900">Cách 1: Composition</span>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-teal-100 text-teal-800 border border-teal-300">
                      HAS-A relationship
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 font-mono mt-0.5">
                    QueueLL <span className="text-teal-700 font-semibold">chứa</span> instance TailedLinkedList list
                  </p>
                </div>
              </div>

              <button
                onClick={() => handleCopy(rawCodeComposition, setCopiedComp)}
                className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white text-slate-700 border border-slate-300 hover:bg-slate-100 transition-all flex items-center gap-1.5 shadow-sm"
              >
                {copiedComp ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                {copiedComp ? "Đã chép!" : "Copy code"}
              </button>
            </div>

            {/* Architecture Highlights Pill */}
            <div className="bg-white/80 px-3.5 py-2 rounded-lg border border-teal-200 text-xs font-mono flex items-center justify-between text-teal-900 mb-4 shadow-sm">
              <span className="flex items-center gap-1 text-teal-800 font-semibold">
                <Lock className="w-3.5 h-3.5 text-teal-600" /> Đóng gói tốt (Encapsulation)
              </span>
              <span className="text-slate-600 text-[11px]">Ủy quyền qua <code className="text-teal-800 font-bold">list.method()</code></span>
            </div>

            {/* Code Block Container (Dark Mac Box) */}
            <div className="bg-slate-950 text-slate-200 font-mono text-xs rounded-xl border border-slate-800 shadow-md overflow-hidden flex-1 flex flex-col mb-4">
              {/* Window Controls Bar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[11px] font-mono text-slate-400">QueueLL.java</span>
              </div>

              <div className="p-4 overflow-x-auto leading-relaxed flex-1">
                <pre className="text-slate-200">
                  <code>
                    <span className="text-slate-500">{"// QueueLL.java"}</span>{"\n"}
                    <span className="text-purple-400">import</span> java.util.*;{"\n"}
                    <span className="text-purple-400">class</span> <span className="text-cyan-300 font-bold">QueueLL</span> &lt;<span className="text-amber-300">E</span>&gt; <span className="text-purple-400">implements</span> <span className="text-teal-300">QueueADT</span> &lt;<span className="text-amber-300">E</span>&gt; {"{"}{"\n"}
                    
                    {/* Private field line */}
                    <div className={`py-0.5 px-1 rounded transition-colors ${activeMethod === "all" ? "bg-cyan-950/40 border-l-2 border-cyan-400" : ""}`}>
                      {"    "}<span className="text-purple-400">private</span> <span className="text-teal-300">TailedLinkedList</span> &lt;<span className="text-amber-300">E</span>&gt; <span className="text-cyan-300 font-bold">list</span>;
                    </div>

                    {"    "}<span className="text-purple-400">public</span> <span className="text-cyan-300">QueueLL</span>() {"{"} <span className="text-cyan-300">list</span> = <span className="text-purple-400">new</span> <span className="text-teal-300">TailedLinkedList</span> &lt;<span className="text-amber-300">E</span>&gt; (); {"}"}{"\n"}

                    {/* isEmpty line */}
                    <div className={`py-0.5 px-1 rounded transition-colors ${activeMethod === "isEmpty" ? "bg-cyan-900/60 border-l-4 border-cyan-400 font-bold" : ""}`}>
                      {"    "}<span className="text-purple-400">public</span> <span className="text-purple-400">boolean</span> <span className="text-cyan-200 font-bold">isEmpty</span>() {"{"} <span className="text-purple-400">return</span> <span className="text-cyan-300 font-bold">list.isEmpty()</span>; {"}"}
                    </div>
                    {"\n"}

                    {/* offer line */}
                    <div className={`py-1 px-1 rounded transition-colors ${activeMethod === "offer" ? "bg-cyan-900/60 border-l-4 border-cyan-400 font-bold" : ""}`}>
                      {"    "}<span className="text-purple-400">public</span> <span className="text-purple-400">boolean</span> <span className="text-cyan-200 font-bold">offer</span>(<span className="text-amber-300">E</span> o) {"{"}{"\n"}
                      <span className="text-cyan-400 font-bold">{"        "}list.addLast(o);</span>    <span className="text-slate-500">{"// isEmpty(), addLast(), getFirst(), removeFirst()"}</span>{"\n"}
                      <span className="text-slate-500">{"                            "}// là các public method của TailedLinkedList</span>{"\n"}
                      {"        "}<span className="text-purple-400">return</span> <span className="text-emerald-400">true</span>;{"\n"}
                      {"    "}{"}"}
                    </div>

                    {/* peek line */}
                    <div className={`py-1 px-1 rounded transition-colors ${activeMethod === "peek" ? "bg-cyan-900/60 border-l-4 border-cyan-400 font-bold" : ""}`}>
                      {"    "}<span className="text-purple-400">public</span> <span className="text-amber-300">E</span> <span className="text-cyan-200 font-bold">peek</span>() {"{"}{"\n"}
                      {"        "}<span className="text-purple-400">if</span> (isEmpty()) <span className="text-purple-400">return</span> <span className="text-rose-400">null</span>;{"\n"}
                      {"        "}<span className="text-purple-400">return</span> <span className="text-cyan-400 font-bold">list.getFirst()</span>;{"\n"}
                      {"    "}{"}"}
                    </div>

                    {/* poll line */}
                    <div className={`py-1 px-1 rounded transition-colors ${activeMethod === "poll" ? "bg-cyan-900/60 border-l-4 border-cyan-400 font-bold" : ""}`}>
                      {"    "}<span className="text-purple-400">public</span> <span className="text-amber-300">E</span> <span className="text-cyan-200 font-bold">poll</span>() {"{"}{"\n"}
                      {"        "}<span className="text-amber-300">E</span> obj = peek();{"\n"}
                      {"        "}<span className="text-purple-400">if</span> (!isEmpty()) <span className="text-cyan-400 font-bold">list.removeFirst()</span>;{"\n"}
                      {"        "}<span className="text-purple-400">return</span> obj;{"\n"}
                      {"    "}{"}"}
                    </div>
                    {"}"}
                  </code>
                </pre>
              </div>
            </div>

            {/* Key feature takeaway footer for Composition */}
            <div className="bg-white/80 p-3.5 rounded-xl border border-teal-200 text-xs space-y-1.5 shadow-sm mt-auto">
              <div className="text-teal-900 font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                Đặc điểm quan trọng (Composition):
              </div>
              <ul className="space-y-1 text-slate-700 pl-5 list-disc text-[11px] leading-relaxed">
                <li>Gọi phương thức qua con trỏ thành viên: <code className="text-teal-800 font-bold font-mono">list.addLast(o)</code></li>
                <li>Che giấu được các public method dư thừa của TailedLinkedList (bảo vệ nguyên tắc Queue)</li>
                <li>Đảm bảo tính bao đóng (encapsulation) cao nhất.</li>
              </ul>
            </div>
          </div>
        )}

        {/* RIGHT CARD: CÁCH 2 - INHERITANCE */}
        {(activeTab === "all" || activeTab === "inheritance") && (
          <div className="bg-indigo-50/50 border border-indigo-200 rounded-xl p-5 text-slate-800 flex flex-col shadow-sm">
            {/* Card Header */}
            <div className="flex items-center justify-between flex-wrap gap-2 pb-4 border-b border-indigo-200/80 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-indigo-100 text-indigo-700 rounded-lg border border-indigo-200">
                  <GitCommit className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-base font-bold text-slate-900">Cách 2: Inheritance</span>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-indigo-100 text-indigo-800 border border-indigo-300">
                      IS-A relationship
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 font-mono mt-0.5">
                    QueueLLE <span className="text-indigo-700 font-semibold">extends</span> TailedLinkedList
                  </p>
                </div>
              </div>

              <button
                onClick={() => handleCopy(rawCodeInheritance, setCopiedInher)}
                className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white text-slate-700 border border-slate-300 hover:bg-slate-100 transition-all flex items-center gap-1.5 shadow-sm"
              >
                {copiedInher ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                {copiedInher ? "Đã chép!" : "Copy code"}
              </button>
            </div>

            {/* Architecture Highlights Pill */}
            <div className="bg-white/80 px-3.5 py-2 rounded-lg border border-indigo-200 text-xs font-mono flex items-center justify-between text-indigo-900 mb-4 shadow-sm">
              <span className="flex items-center gap-1 text-indigo-800 font-semibold">
                <Unlock className="w-3.5 h-3.5 text-amber-600" /> Kế thừa toàn bộ public API
              </span>
              <span className="text-slate-600 text-[11px]">Gọi trực tiếp <code className="text-indigo-800 font-bold">method()</code></span>
            </div>

            {/* Code Block Container (Dark Mac Box) */}
            <div className="bg-slate-950 text-slate-200 font-mono text-xs rounded-xl border border-slate-800 shadow-md overflow-hidden flex-1 flex flex-col mb-4">
              {/* Window Controls Bar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[11px] font-mono text-slate-400">QueueLLE.java</span>
              </div>

              <div className="p-4 overflow-x-auto leading-relaxed flex-1">
                <pre className="text-slate-200">
                  <code>
                    <span className="text-slate-500">{"// QueueLLE.java"}</span>{"\n"}
                    <span className="text-purple-400">import</span> java.util.*;{"\n"}
                    <span className="text-purple-400">class</span> <span className="text-indigo-300 font-bold">QueueLLE</span> &lt;<span className="text-amber-300">E</span>&gt; <span className="text-purple-400">extends</span> <span className="text-cyan-300 font-bold">TailedLinkedList</span> &lt;<span className="text-amber-300">E</span>&gt; <span className="text-purple-400">implements</span> <span className="text-indigo-300">QueueADT</span> &lt;<span className="text-amber-300">E</span>&gt; {"{"}{"\n"}
                    
                    {/* offer line */}
                    <div className={`py-1 px-1 rounded transition-colors ${activeMethod === "offer" ? "bg-indigo-900/60 border-l-4 border-indigo-400 font-bold" : ""}`}>
                      {"    "}<span className="text-purple-400">public</span> <span className="text-purple-400">boolean</span> <span className="text-indigo-200 font-bold">offer</span>(<span className="text-amber-300">E</span> o) {"{"}{"\n"}
                      <span className="text-indigo-300 font-bold">{"        "}addLast(o);</span>{"\n"}
                      {"        "}<span className="text-purple-400">return</span> <span className="text-emerald-400">true</span>;{"\n"}
                      {"    "}{"}"}
                    </div>

                    {/* peek line */}
                    <div className={`py-1 px-1 rounded transition-colors ${activeMethod === "peek" ? "bg-indigo-900/60 border-l-4 border-indigo-400 font-bold" : ""}`}>
                      {"    "}<span className="text-purple-400">public</span> <span className="text-amber-300">E</span> <span className="text-indigo-200 font-bold">peek</span>() {"{"}{"\n"}
                      {"        "}<span className="text-purple-400">if</span> (isEmpty()) <span className="text-purple-400">return</span> <span className="text-rose-400">null</span>;{"\n"}
                      {"        "}<span className="text-indigo-300 font-bold">return getFirst();</span>{"\n"}
                      {"    "}{"}"}
                    </div>

                    {/* poll line */}
                    <div className={`py-1 px-1 rounded transition-colors ${activeMethod === "poll" ? "bg-indigo-900/60 border-l-4 border-indigo-400 font-bold" : ""}`}>
                      {"    "}<span className="text-purple-400">public</span> <span className="text-amber-300">E</span> <span className="text-indigo-200 font-bold">poll</span>() {"{"}{"\n"}
                      {"        "}<span className="text-amber-300">E</span> obj = peek();{"\n"}
                      {"        "}<span className="text-purple-400">if</span> (!isEmpty()) <span className="text-indigo-300 font-bold">removeFirst();</span>{"\n"}
                      {"        "}<span className="text-purple-400">return</span> obj;{"\n"}
                      {"    "}{"}"}
                    </div>
                    {"}"}
                  </code>
                </pre>
              </div>
            </div>

            {/* Key feature takeaway footer for Inheritance */}
            <div className="bg-white/80 p-3.5 rounded-xl border border-indigo-200 text-xs space-y-1.5 shadow-sm mt-auto">
              <div className="text-indigo-900 font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                Đặc điểm quan trọng (Inheritance):
              </div>
              <ul className="space-y-1 text-slate-700 pl-5 list-disc text-[11px] leading-relaxed">
                <li>Gọi phương thức trực tiếp: <code className="text-indigo-800 font-bold font-mono">addLast(o)</code> (được kế thừa từ lớp cha)</li>
                <li>Không cần khai báo biến `list` và constructor khởi tạo `list`</li>
                <li>⚠️ Bị lộ các hàm của TailedLinkedList ra ngoài (người dùng có thể gọi nhầm `addFirst` phá FIFO).</li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* 6. Direct Comparison Highlight Panel */}
      <div className="my-6 bg-slate-50 border border-slate-200 rounded-xl p-4 md:p-5">
        <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
          <ArrowLeftRight className="w-4 h-4 text-teal-600" />
          Điểm khác biệt cốt lõi trong lời gọi phương thức
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
          <div className="bg-teal-50 border border-teal-200 p-3 rounded-lg">
            <span className="text-teal-800 font-bold block mb-1">Cách 1: Composition (QueueLL)</span>
            <p className="text-slate-700 leading-relaxed font-sans text-xs">
              Các phương thức gọi qua <code className="text-teal-800 font-bold font-mono">list.addLast(o)</code> thông qua thuộc tính <code className="text-teal-800 font-bold font-mono">private TailedLinkedList list</code>.
            </p>
          </div>
          <div className="bg-indigo-50 border border-indigo-200 p-3 rounded-lg">
            <span className="text-indigo-800 font-bold block mb-1">Cách 2: Inheritance (QueueLLE)</span>
            <p className="text-slate-700 leading-relaxed font-sans text-xs">
              Các phương thức gọi <code className="text-indigo-800 font-bold font-mono">addLast(o)</code> trực tiếp do đã được kế thừa từ <code className="text-indigo-800 font-bold font-mono">TailedLinkedList</code>.
            </p>
          </div>
        </div>
      </div>

      {/* 7. Footer Note & Complexity Summary */}
      <div className="mt-6 bg-slate-50 border border-slate-200 text-slate-700 p-4 md:p-5 rounded-xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-emerald-100 text-emerald-700 rounded-lg border border-emerald-200 shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs md:text-sm font-semibold text-slate-800 leading-relaxed">
                Cả 2 cách đều hợp lệ. <code className="text-teal-700 font-mono font-bold">offer()</code> thêm vào <strong className="text-teal-800">CUỐI (tail)</strong>, <code className="text-teal-700 font-mono font-bold">poll()</code> xóa từ <strong className="text-teal-800">ĐẦU (head)</strong>. Tất cả thao tác đều <span className="text-emerald-700 font-mono font-bold">O(1)</span> nhờ có con trỏ <code className="text-teal-700 font-mono font-bold">tail</code>.
              </p>
            </div>
          </div>

          {/* Time Complexity Badges */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono shrink-0">
            <span className="bg-white text-teal-800 border border-teal-200 px-2.5 py-1 rounded-lg shadow-sm">
              offer(): <strong className="text-emerald-700">O(1)</strong>
            </span>
            <span className="bg-white text-teal-800 border border-teal-200 px-2.5 py-1 rounded-lg shadow-sm">
              poll(): <strong className="text-emerald-700">O(1)</strong>
            </span>
            <span className="bg-white text-teal-800 border border-teal-200 px-2.5 py-1 rounded-lg shadow-sm">
              peek(): <strong className="text-emerald-700">O(1)</strong>
            </span>
            <span className="bg-white text-slate-700 border border-slate-200 px-2.5 py-1 rounded-lg shadow-sm">
              isEmpty(): <strong className="text-emerald-700">O(1)</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
