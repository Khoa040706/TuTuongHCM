"use client";

import React, { useState } from "react";
import {
  Coffee,
  Sparkles,
  Layers,
  Code2,
  CheckCircle2,
  Scale,
  Cpu,
  HardDrive,
  HelpCircle,
  Zap,
  ArrowRight
} from "lucide-react";

export default function JavaHashMapArchitectureViewer() {
  const [activeTab, setActiveTab] = useState("constructors"); // "constructors", "parameters"

  const constructorsList = [
    {
      signature: "HashMap()",
      desc: "Tạo HashMap rỗng với initial capacity mặc định (16) và load factor mặc định (0.75).",
      usage: "Phổ biến nhất, phù hợp cho đa số ứng dụng thông thường.",
      highlight: "Mặc định (Default)"
    },
    {
      signature: "HashMap(int initialCapacity)",
      desc: "Tạo HashMap rỗng với capacity chỉ định, load factor mặc định (0.75).",
      usage: "Dùng khi biết trước số lượng phần tử xấp xỉ để tránh Rehash nhiều lần.",
      highlight: "Tùy biến Dung lượng"
    },
    {
      signature: "HashMap(int initialCapacity, float loadFactor)",
      desc: "Tạo HashMap rỗng với capacity và load factor do người lập trình chỉ định.",
      usage: "Dành cho các bài toán tối ưu hóa bộ nhớ hoặc hiệu năng chuyên sâu.",
      highlight: "Kiểm soát Toàn diện"
    },
    {
      signature: "HashMap(Map<? extends K, ? extends V> m)",
      desc: "Tạo HashMap mới với các mapping được sao chép giống từ Map m truyền vào.",
      usage: "Copy constructor, khởi tạo map mới từ một map có sẵn.",
      highlight: "Sao chép Map"
    }
  ];

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl p-5 md:p-7 shadow-sm my-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-5">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
            Mục 6.1 — Kiến Trúc &amp; Khởi Tạo Java HashMap
          </span>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-1">
            Java HashMap Class: Cấu Trúc Kế Thừa, 4 Constructors &amp; Thông Số Vàng 16 / 0.75
          </h3>
          <p className="text-xs text-slate-500">
            Khám phá lớp <code>java.util.HashMap&lt;K,V&gt;</code>, các hàm tạo và triết lý tối ưu hóa phần cứng của Java
          </p>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 font-mono text-xs font-bold self-start sm:self-auto">
          <Coffee className="w-3.5 h-3.5 text-amber-600" />
          java.util.HashMap
        </div>
      </div>

      {/* Class Definition Code Banner */}
      <div className="bg-gradient-to-br from-indigo-50/80 via-white to-slate-50 text-slate-800 rounded-2xl p-4 md:p-5 border-2 border-indigo-200 shadow-sm mb-6 font-mono text-xs space-y-3">
        <div className="flex items-center justify-between pb-2 border-b border-indigo-100 text-slate-500 text-[11px] font-bold">
          <span className="text-indigo-900 uppercase">KHAI BÁO CLASS TRONG JAVA SDK</span>
          <span>Package: java.util.HashMap</span>
        </div>

        <pre className="text-slate-800 font-mono leading-relaxed overflow-x-auto text-[11px] sm:text-xs bg-white p-3 rounded-xl border border-indigo-100 shadow-2xs">
          <code>
            <span className="text-purple-700 font-bold">public class</span>{" "}
            <span className="text-indigo-950 font-black">HashMap&lt;K,V&gt;</span>
            {"\n"}  <span className="text-purple-700 font-bold">extends</span>{" "}
            <span className="text-blue-800 font-bold">AbstractMap&lt;K,V&gt;</span>
            {"\n"}  <span className="text-purple-700 font-bold">implements</span>{" "}
            <span className="text-emerald-800 font-bold">Map&lt;K,V&gt;</span>,{" "}
            <span className="text-slate-600 font-semibold">Cloneable</span>,{" "}
            <span className="text-slate-600 font-semibold">Serializable</span>
          </code>
        </pre>

        <div className="pt-2 border-t border-indigo-100 text-[11px] text-slate-600 font-sans flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 font-medium">
          <span>
            • <code>AbstractMap</code>: Lớp trừu tượng cung cấp cài đặt "khung" (skeletal implementation) cho interface <code>Map</code>.
          </span>
          <span className="text-emerald-800 font-mono font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
            Key/Value: Bất kỳ Object non-null nào
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 mb-4 border-b border-slate-200 pb-2 overflow-x-auto">
        <button
          onClick={() => setActiveTab("constructors")}
          className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition cursor-pointer shrink-0 ${
            activeTab === "constructors"
              ? "bg-indigo-600 text-white shadow-xs"
              : "bg-slate-100 text-slate-600 hover:text-slate-900"
          }`}
        >
          4 Constructors của HashMap
        </button>
        <button
          onClick={() => setActiveTab("parameters")}
          className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition cursor-pointer shrink-0 ${
            activeTab === "parameters"
              ? "bg-indigo-600 text-white shadow-xs"
              : "bg-slate-100 text-slate-600 hover:text-slate-900"
          }`}
        >
          Bí Ẩn: Capacity 16 &amp; Load Factor 0.75
        </button>
      </div>

      {/* Tab 1: 4 Constructors List */}
      {activeTab === "constructors" && (
        <div className="space-y-3 mb-5 animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {constructorsList.map((c, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2 hover:border-slate-300 transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-200">
                      {c.highlight}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">Constructor #{idx + 1}</span>
                  </div>
                  <code className="text-xs font-mono font-bold text-slate-900 block my-1.5 bg-white p-2 rounded-xl border border-slate-200 text-indigo-700">
                    {c.signature}
                  </code>
                  <p className="text-xs text-slate-700 font-sans leading-relaxed">{c.desc}</p>
                </div>
                <div className="pt-2 border-t border-slate-200/80 text-[11px] text-slate-500 font-sans italic">
                  💡 {c.usage}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 2: Why 16 and 0.75 */}
      {activeTab === "parameters" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5 animate-fadeIn text-xs font-sans">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 space-y-2 text-blue-950">
            <div className="flex items-center gap-2 font-bold font-mono text-blue-900">
              <Cpu className="w-4 h-4 text-blue-600" />
              1. TẠI SAO CAPACITY MẶC ĐỊNH LÀ 16 (2⁴)?
            </div>
            <p className="text-slate-700 leading-relaxed">
              Vì 16 là <strong>lũy thừa của 2</strong> ($2^4$). Khi kích thước bảng $m = 2^k$, phép toán chia lấy dư đắt đỏ trên CPU <code>hash % m</code> được thay thế hoàn toàn bằng <strong>phép bitwise AND siêu nhanh</strong>:
            </p>
            <div className="p-2.5 bg-white rounded-xl border border-blue-200 font-mono text-center text-blue-800 font-bold text-xs">
              index = hash &amp; (capacity - 1)
            </div>
            <p className="text-[11px] text-slate-600">
              Ví dụ: với <code>capacity = 16</code> &rarr; <code>hash &amp; 15</code> (tương đương <code>hash &amp; 0b1111</code> lấy 4 bit cuối).
            </p>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 space-y-2 text-emerald-950">
            <div className="flex items-center gap-2 font-bold font-mono text-emerald-900">
              <Scale className="w-4 h-4 text-emerald-600" />
              2. TẠI SAO LOAD FACTOR MẶC ĐỊNH LÀ 0.75?
            </div>
            <p className="text-slate-700 leading-relaxed">
              Đây là <strong>điểm cân bằng vàng (sweet spot)</strong> giữa chi phí thời gian $O(1)$ và chi phí không gian bộ nhớ RAM:
            </p>
            <ul className="text-slate-700 text-[11px] space-y-1 list-disc list-inside">
              <li>Nếu <code>&alpha; &gt; 0.75</code> (ví dụ 0.9): Tiết kiệm RAM nhưng va chạm tăng cao, làm chậm tốc độ tìm kiếm.</li>
              <li>Nếu <code>&alpha; &lt; 0.75</code> (ví dụ 0.5): Ít va chạm nhưng bảng phải Rehash liên tục, gây lãng phí ô nhớ trống.</li>
            </ul>
          </div>
        </div>
      )}

      {/* Sticky Takeaway */}
      <div className="bg-amber-50/80 border-2 border-amber-200 rounded-2xl p-4 flex items-start gap-3 text-xs text-amber-950">
        <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div>
          <strong>⭐ Cần nhớ (Mục 6.1):</strong><br/>
          • <code>HashMap&lt;K,V&gt;</code> kế thừa <code>AbstractMap&lt;K,V&gt;</code> và cài đặt <code>Map&lt;K,V&gt;</code>.<br/>
          • Bất kỳ object non-null nào cũng có thể làm Key hoặc Value.<br/>
          • Giá trị mặc định cực kỳ quan trọng: <strong>Capacity = 16</strong> và <strong>Load Factor = 0.75</strong>.
        </div>
      </div>
    </div>
  );
}
