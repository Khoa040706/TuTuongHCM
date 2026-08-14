"use client";

import React, { useState } from "react";
import {
  Hash,
  Sparkles,
  Zap,
  Layers,
  ArrowRight,
  ShieldAlert,
  Database,
  Calculator,
  Plus,
  RotateCcw,
  CheckCircle2,
  Cpu,
  KeyRound,
  Split,
  Scale
} from "lucide-react";

export default function DsaHashingHeroBanner() {
  const [inputText, setInputText] = useState("");
  const [buckets, setBuckets] = useState({
    0: [{ key: "banana", hashVal: 609, slot: 0 }],
    1: [],
    2: [{ key: "DSA", hashVal: 226, slot: 2 }],
    3: [
      { key: "cat", hashVal: 312, slot: 3 },
      { key: "dog", hashVal: 312, slot: 3 }
    ],
    4: [{ key: "apple", hashVal: 530, slot: 4 }],
    5: [{ key: "Java", hashVal: 390, slot: 5 }],
    6: []
  });

  const [lastCalculation, setLastCalculation] = useState({
    key: "dog",
    asciiSum: "100('d') + 111('o') + 103('g') = 312",
    slot: 3,
    isCollision: true
  });

  const TABLE_SIZE = 7;

  const calculateHash = (str) => {
    let sum = 0;
    const parts = [];
    for (let i = 0; i < str.length; i++) {
      const code = str.charCodeAt(i);
      sum += code;
      parts.push(`${code}('${str[i]}')`);
    }
    const slot = sum % TABLE_SIZE;
    return {
      sum,
      asciiFormula: parts.join(" + ") + ` = ${sum}`,
      slot
    };
  };

  const handleInsert = (keyToInsert) => {
    const key = (keyToInsert || inputText).trim();
    if (!key) return;

    const calc = calculateHash(key);
    const targetSlot = calc.slot;

    // Check if key already exists in the slot
    const existing = buckets[targetSlot] || [];
    if (existing.some((item) => item.key.toLowerCase() === key.toLowerCase())) {
      setInputText("");
      return;
    }

    const isColliding = existing.length > 0;

    const newItem = {
      key,
      hashVal: calc.sum,
      slot: targetSlot
    };

    setBuckets((prev) => ({
      ...prev,
      [targetSlot]: [...(prev[targetSlot] || []), newItem]
    }));

    setLastCalculation({
      key,
      asciiSum: calc.asciiFormula,
      slot: targetSlot,
      isCollision: isColliding
    });

    setInputText("");
  };

  const handleReset = () => {
    setBuckets({
      0: [],
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: []
    });
    setLastCalculation(null);
  };

  const loadPresets = () => {
    setBuckets({
      0: [{ key: "banana", hashVal: 609, slot: 0 }],
      1: [],
      2: [{ key: "DSA", hashVal: 226, slot: 2 }],
      3: [
        { key: "cat", hashVal: 312, slot: 3 },
        { key: "dog", hashVal: 312, slot: 3 }
      ],
      4: [{ key: "apple", hashVal: 530, slot: 4 }],
      5: [{ key: "Java", hashVal: 390, slot: 5 }],
      6: []
    });
    setLastCalculation({
      key: "dog",
      asciiSum: "100('d') + 111('o') + 103('g') = 312",
      slot: 3,
      isCollision: true
    });
  };

  const totalKeys = Object.values(buckets).reduce((acc, curr) => acc + curr.length, 0);
  const loadFactor = (totalKeys / TABLE_SIZE).toFixed(2);

  return (
    <div className="w-full bg-gradient-to-br from-emerald-50/90 via-white to-teal-50/50 text-slate-800 rounded-3xl p-6 md:p-9 border border-emerald-200 shadow-sm my-6 font-sans relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Section */}
      <div className="relative z-10 space-y-4 pb-6 border-b border-emerald-100">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-950 font-mono text-xs font-bold tracking-wider uppercase flex items-center gap-1.5 shadow-xs">
            <Hash className="w-3.5 h-3.5 text-emerald-700" />
            DSA CHƯƠNG 7 • BẢNG BĂM &amp; TRA CỨU O(1)
          </span>
          <span className="px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-mono shadow-2xs">
            Hàm băm h(k) &bull; Xử lý va chạm &bull; Load Factor &alpha;
          </span>
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Bài 7: Hashing (Bảng Băm) — Nghệ Thuật Tra Cứu Tức Thì{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
              O(1)
            </span>{" "}
            &amp; Giải Quyết Va Chạm
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-4xl leading-relaxed font-sans">
            Bảng băm (Hash Table) là cấu trúc dữ liệu tối thượng cho các thao tác <strong>Search (Tìm kiếm)</strong>, <strong>Insert (Thêm)</strong>, và <strong>Delete (Xóa)</strong> với thời gian trung bình tiệm cận <code>O(1)</code> bằng cách ánh xạ trực tiếp khóa vào địa chỉ ô nhớ qua hàm băm $h(k)$.
          </p>
        </div>

        {/* Quick Spec Pills */}
        <div className="flex items-center gap-2 flex-wrap pt-1 text-xs font-mono">
          <span className="px-3 py-1 rounded-xl bg-white border border-emerald-200 text-emerald-900 font-bold flex items-center gap-1.5 shadow-xs">
            <Zap className="w-3.5 h-3.5 text-emerald-600" /> Tra Cứu: O(1) Average
          </span>
          <span className="px-3 py-1 rounded-xl bg-white border border-teal-200 text-teal-900 font-bold flex items-center gap-1.5 shadow-xs">
            <KeyRound className="w-3.5 h-3.5 text-teal-600" /> Hash Function: h(k) mod M
          </span>
          <span className="px-3 py-1 rounded-xl bg-white border border-cyan-200 text-cyan-900 font-bold flex items-center gap-1.5 shadow-xs">
            <Split className="w-3.5 h-3.5 text-cyan-600" /> Chaining &amp; Open Addressing
          </span>
          <span className="px-3 py-1 rounded-xl bg-white border border-amber-200 text-amber-900 font-bold flex items-center gap-1.5 shadow-xs">
            <Scale className="w-3.5 h-3.5 text-amber-600" /> Load Factor &alpha; = N / M
          </span>
        </div>
      </div>

      {/* Live Interactive Hash Table Sandbox */}
      <div className="relative z-10 my-6 bg-slate-100/80 border border-slate-200 rounded-3xl p-5 md:p-6 shadow-inner space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <h3 className="text-sm md:text-base font-bold text-slate-900 font-mono uppercase tracking-wide">
                Phòng thí nghiệm bảng băm thời gian thực (M = 7 Buckets)
              </h3>
            </div>
            <p className="text-xs text-slate-600 mt-0.5 font-sans">
              Hàm băm: <code>h(key) = (&Sigma; ASCII ký tự) mod 7</code> &bull; Cơ chế giải quyết va chạm: <strong>Separate Chaining (Chuỗi liên kết)</strong>
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={loadPresets}
              className="px-3 py-1.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-xs font-mono font-bold text-slate-700 transition cursor-pointer shadow-xs"
            >
              Mẫu dữ liệu
            </button>
            <button
              onClick={handleReset}
              className="p-1.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-500 hover:text-slate-900 transition cursor-pointer shadow-xs"
              title="Reset bảng"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Input Form & Quick Insert Tags */}
        <div className="space-y-3">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleInsert();
            }}
            className="flex items-center gap-2 flex-col sm:flex-row"
          >
            <div className="relative flex-1 w-full">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Nhập chuỗi bất kỳ (VD: 'Google', 'Python', 'Algorithm')..."
                className="w-full bg-white border border-slate-300 rounded-2xl px-4 py-2.5 text-xs sm:text-sm font-mono text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition shadow-xs"
              />
            </div>
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="w-full sm:w-auto px-5 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-mono font-bold text-xs sm:text-sm transition cursor-pointer shadow-sm disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-1.5"
            >
              <Plus className="w-4 h-4" /> Băm &amp; Chèn (Insert)
            </button>
          </form>

          {/* Preset Buttons */}
          <div className="flex items-center gap-1.5 flex-wrap text-xs font-mono text-slate-600">
            <span>Thử nhanh từ khóa:</span>
            {["Google", "Python", "DSA", "Java", "Tree", "Graph", "HashTable"].map((tag) => (
              <button
                key={tag}
                onClick={() => handleInsert(tag)}
                className="px-2.5 py-1 rounded-xl bg-white hover:bg-emerald-50 text-emerald-800 border border-emerald-200 text-[11px] font-semibold transition cursor-pointer shadow-2xs"
              >
                + "{tag}"
              </button>
            ))}
          </div>
        </div>

        {/* Real-time Calculation Breakdown Pill */}
        {lastCalculation && (
          <div className="bg-white border border-emerald-300 rounded-2xl p-3.5 text-xs font-mono flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-xs animate-fadeIn">
            <div className="space-y-0.5">
              <span className="text-slate-500 block text-[11px] font-bold">BƯỚC TÍNH HÀM BĂM CHO KHÓA "{lastCalculation.key}":</span>
              <div className="text-emerald-900 font-bold">
                1. Tính tổng mã ASCII: <code>{lastCalculation.asciiSum}</code>
              </div>
              <div className="text-teal-800 font-semibold">
                2. Áp dụng Modulo M=7: <code>{lastCalculation.asciiSum.split(" = ")[1] || lastCalculation.key} mod 7 = {lastCalculation.slot}</code>
              </div>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto">
              <span className="px-3 py-1.5 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-950 font-bold text-xs shadow-2xs">
                &rarr; Slot Bucket [{lastCalculation.slot}]
              </span>
              {lastCalculation.isCollision && (
                <span className="px-2.5 py-1.5 rounded-xl bg-amber-100 border border-amber-300 text-amber-950 font-bold text-[11px] flex items-center gap-1 shadow-2xs">
                  <ShieldAlert className="w-3.5 h-3.5 text-amber-600" /> Va chạm! Nối chuỗi (Chaining)
                </span>
              )}
            </div>
          </div>
        )}

        {/* 7 Buckets Visual Table */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-mono text-slate-600 pb-1">
            <span className="font-bold">BẢNG BĂM CÁC BUCKET (ARRAY OF LINKED LISTS):</span>
            <span className="text-emerald-800 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              Tổng số khóa N = {totalKeys} &bull; Hệ số tải &alpha; = {loadFactor}
            </span>
          </div>

          <div className="grid grid-cols-1 gap-2.5">
            {Array.from({ length: TABLE_SIZE }).map((_, slotIdx) => {
              const items = buckets[slotIdx] || [];
              const hasItems = items.length > 0;
              const hasCollision = items.length > 1;

              return (
                <div
                  key={slotIdx}
                  className={`p-3 rounded-2xl border-2 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs ${
                    hasCollision
                      ? "bg-amber-50/90 border-amber-300 ring-2 ring-amber-100"
                      : hasItems
                      ? "bg-emerald-50/90 border-emerald-300"
                      : "bg-white border-slate-200 opacity-70"
                  }`}
                >
                  {/* Bucket Header */}
                  <div className="flex items-center gap-2.5 shrink-0">
                    <span className="w-8 h-8 rounded-xl bg-white text-emerald-950 font-mono font-black text-xs flex items-center justify-center border border-emerald-300 shadow-2xs">
                      [{slotIdx}]
                    </span>
                    <div>
                      <span className="text-xs font-mono font-bold text-slate-900 block">
                        Bucket #{slotIdx}
                      </span>
                      <span className="text-[10px] font-mono text-slate-500 font-semibold">
                        {items.length === 0
                          ? "Trống (null)"
                          : items.length === 1
                          ? "1 phần tử"
                          : `${items.length} phần tử (Va chạm Chained)`}
                      </span>
                    </div>
                  </div>

                  {/* Chained Linked List Nodes */}
                  <div className="flex items-center gap-2 flex-wrap flex-1 justify-start sm:justify-end">
                    {items.length > 0 ? (
                      items.map((node, nIdx) => (
                        <React.Fragment key={nIdx}>
                          <div className="px-3 py-1.5 rounded-xl bg-white border-2 border-emerald-300 text-slate-900 font-mono text-xs shadow-xs flex items-center gap-2 animate-fadeIn">
                            <span className="font-black text-emerald-800">"{node.key}"</span>
                            <span className="text-[10px] text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded-md border border-slate-200 font-bold">
                              &Sigma;={node.hashVal}
                            </span>
                          </div>
                          {nIdx < items.length - 1 && (
                            <ArrowRight className="w-3.5 h-3.5 text-amber-600 shrink-0 font-bold" />
                          )}
                        </React.Fragment>
                      ))
                    ) : (
                      <span className="text-xs font-mono text-slate-400 italic">
                        null
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 4 Core Pillars Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
        <div className="bg-white border border-emerald-100 p-4 rounded-2xl flex flex-col justify-between space-y-2 hover:border-emerald-300 transition shadow-xs text-slate-800">
          <div className="flex items-center justify-between">
            <span className="p-2 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200">
              <Zap className="w-4 h-4" />
            </span>
            <span className="text-[10px] font-mono text-emerald-800 font-bold bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-300">
              O(1) Tra cứu
            </span>
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900 font-sans mb-1">
              1. Tốc Độ Tức Thì O(1)
            </h4>
            <p className="text-[11px] text-slate-600 font-sans leading-relaxed">
              Truy cập dữ liệu trực tiếp qua địa chỉ chỉ số ô nhớ $h(k)$ mà không cần so sánh nhị phân hay duyệt tuần tự.
            </p>
          </div>
        </div>

        <div className="bg-white border border-teal-100 p-4 rounded-2xl flex flex-col justify-between space-y-2 hover:border-teal-300 transition shadow-xs text-slate-800">
          <div className="flex items-center justify-between">
            <span className="p-2 rounded-xl bg-teal-50 text-teal-600 border border-teal-200">
              <KeyRound className="w-4 h-4" />
            </span>
            <span className="text-[10px] font-mono text-teal-800 font-bold bg-teal-100 px-2 py-0.5 rounded-full border border-teal-300">
              h(k) mod M
            </span>
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900 font-sans mb-1">
              2. Thiết Kế Hàm Băm
            </h4>
            <p className="text-[11px] text-slate-600 font-sans leading-relaxed">
              Hàm băm tốt phải tính toán nhanh $O(1)$, phân phối đồng đều các khóa để hạn chế va chạm tối đa.
            </p>
          </div>
        </div>

        <div className="bg-white border border-cyan-100 p-4 rounded-2xl flex flex-col justify-between space-y-2 hover:border-cyan-300 transition shadow-xs text-slate-800">
          <div className="flex items-center justify-between">
            <span className="p-2 rounded-xl bg-cyan-50 text-cyan-600 border border-cyan-200">
              <Split className="w-4 h-4" />
            </span>
            <span className="text-[10px] font-mono text-cyan-800 font-bold bg-cyan-100 px-2 py-0.5 rounded-full border border-cyan-300">
              Collision Resolving
            </span>
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900 font-sans mb-1">
              3. Xử Lý Va Chạm
            </h4>
            <p className="text-[11px] text-slate-600 font-sans leading-relaxed">
              Hai chiến lược kinh điển: <strong>Separate Chaining</strong> (danh sách liên kết) và <strong>Open Addressing</strong> (Linear/Quadratic probing).
            </p>
          </div>
        </div>

        <div className="bg-white border border-amber-100 p-4 rounded-2xl flex flex-col justify-between space-y-2 hover:border-amber-300 transition shadow-xs text-slate-800">
          <div className="flex items-center justify-between">
            <span className="p-2 rounded-xl bg-amber-50 text-amber-600 border border-amber-200">
              <Scale className="w-4 h-4" />
            </span>
            <span className="text-[10px] font-mono text-amber-800 font-bold bg-amber-100 px-2 py-0.5 rounded-full border border-amber-300">
              &alpha; = N / M
            </span>
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900 font-sans mb-1">
              4. Hệ Số Tải &amp; Rehash
            </h4>
            <p className="text-[11px] text-slate-600 font-sans leading-relaxed">
              Hệ số tải &alpha; = N/M quyết định hiệu năng. Khi &alpha; vượt ngưỡng (ví dụ &gt; 0.75), bảng băm cần tự động Rehash nhân đôi kích thước.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
