"use client";

import React, { useState } from "react";
import {
  Layers,
  Sparkles,
  ArrowRight,
  Plus,
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
  Scale,
  RefreshCw,
  Zap,
  HardDrive
} from "lucide-react";

export default function SeparateChainingRehashWorkbench() {
  const [tableSize, setTableSize] = useState(5);
  const [isRehashed, setIsRehashed] = useState(false);
  const [inputVal, setInputVal] = useState("");

  const initialKeys = [12, 22, 15, 25, 35, 7, 17, 32];

  const buildBuckets = (keys, m) => {
    const map = {};
    for (let i = 0; i < m; i++) map[i] = [];
    keys.forEach((k) => {
      const slot = k % m;
      map[slot].push(k);
    });
    return map;
  };

  const [currentKeys, setCurrentKeys] = useState(initialKeys);
  const buckets = buildBuckets(currentKeys, tableSize);

  const totalKeys = currentKeys.length;
  const loadFactor = (totalKeys / tableSize).toFixed(2);
  const isOverloaded = parseFloat(loadFactor) >= 1.5;

  const handleInsert = (numToInsert) => {
    const num = parseInt(numToInsert || inputVal, 10);
    if (isNaN(num)) return;
    if (!currentKeys.includes(num)) {
      setCurrentKeys((prev) => [...prev, num]);
    }
    setInputVal("");
  };

  const handleRehash = () => {
    setTableSize(11); // Double size to next prime
    setIsRehashed(true);
  };

  const handleReset = () => {
    setTableSize(5);
    setIsRehashed(false);
    setCurrentKeys(initialKeys);
  };

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl p-5 md:p-7 shadow-sm my-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-5">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
            Mục 4.1 — Danh Sách Liên Kết &amp; Rehash
          </span>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-1">
            Separate Chaining: Cơ Chế Linked List &amp; Quản Lý Hệ Số Tải (Load Factor &alpha;)
          </h3>
          <p className="text-xs text-slate-500">
            Xử lý va chạm bằng mảng danh sách liên kết và mô phỏng tái cấu trúc bảng (Rehashing) khi hệ số tải vượt ngưỡng
          </p>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 font-mono text-xs font-bold self-start sm:self-auto">
          <Layers className="w-3.5 h-3.5 text-emerald-600" />
          Separate Chaining
        </div>
      </div>

      {/* Control & Gauge Bar */}
      <div className="bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/40 text-slate-800 rounded-2xl p-5 border-2 border-emerald-200 shadow-sm mb-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-emerald-100">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-emerald-950 uppercase">
                BẢNG BĂM SEPARATE CHAINING (M = {tableSize} BUCKETS)
              </span>
              {isRehashed && (
                <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-900 text-[10px] font-mono font-bold border border-emerald-300 shadow-2xs">
                  Đã Rehash &rarr; m=11 (Prime)
                </span>
              )}
            </div>
            <p className="text-xs text-slate-600 mt-0.5">
              Hệ số tải &alpha; = N / M = {totalKeys} / {tableSize} ={" "}
              <strong className={isOverloaded ? "text-amber-800 font-black" : "text-emerald-800 font-bold"}>
                {loadFactor}
              </strong>{" "}
              (độ dài chuỗi trung bình)
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleRehash}
              disabled={isRehashed}
              className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs font-mono font-bold transition flex items-center gap-1.5 shadow-xs cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Rehash (m=11)
            </button>
            <button
              onClick={handleReset}
              className="p-1.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-500 hover:text-slate-900 transition shadow-2xs cursor-pointer"
              title="Reset ban đầu"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Input Bar */}
        <div className="flex items-center gap-2 flex-col sm:flex-row">
          <input
            type="number"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Nhập khóa số nguyên để chèn..."
            className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs font-mono text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 shadow-xs"
          />
          <button
            onClick={() => handleInsert()}
            disabled={!inputVal}
            className="w-full sm:w-auto px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-mono font-bold text-xs transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-1 shadow-xs"
          >
            <Plus className="w-3.5 h-3.5" /> Chèn (Insert)
          </button>
        </div>

        {/* Overload Alert if alpha is high */}
        {isOverloaded && !isRehashed && (
          <div className="p-3 bg-amber-50 border-2 border-amber-300 rounded-xl text-amber-950 text-xs font-sans flex items-center justify-between gap-2 shadow-xs animate-fadeIn">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
              <span>
                <strong>Cảnh báo quá tải (&alpha; = {loadFactor} &ge; 1.5):</strong> Các danh sách liên kết quá dài làm suy giảm tốc độ <code>find()</code> từ $O(1)$ về $O(n)$! Hãy bấm nút <strong>Rehash</strong> bên trên để mở rộng bảng.
              </span>
            </div>
          </div>
        )}

        {/* Buckets Visual Grid */}
        <div className="space-y-2 pt-2">
          {Array.from({ length: tableSize }).map((_, slotIdx) => {
            const list = buckets[slotIdx] || [];
            return (
              <div
                key={slotIdx}
                className="p-2.5 bg-white rounded-xl border border-emerald-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono shadow-2xs"
              >
                <div className="flex items-center gap-2 shrink-0">
                  <span className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-950 font-bold flex items-center justify-center border border-emerald-300">
                    [{slotIdx}]
                  </span>
                  <span className="text-slate-600 text-[11px] font-semibold">
                    Bucket #{slotIdx} ({list.length} nodes)
                  </span>
                </div>

                <div className="flex items-center gap-1.5 flex-wrap flex-1 justify-start sm:justify-end">
                  {list.length > 0 ? (
                    list.map((k, nIdx) => (
                      <React.Fragment key={nIdx}>
                        <span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-950 font-bold border border-emerald-300 shadow-2xs">
                          {k}
                        </span>
                        {nIdx < list.length - 1 && (
                          <ArrowRight className="w-3 h-3 text-amber-600 shrink-0 font-bold" />
                        )}
                      </React.Fragment>
                    ))
                  ) : (
                    <span className="text-slate-400 italic">null (trống)</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Operation Complexity Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5 text-xs font-sans">
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3.5 space-y-1">
          <span className="font-bold text-slate-900 block font-mono">1. insert(key, data)</span>
          <p className="text-slate-600 text-[11px] leading-relaxed">
            Chèn vào đầu linked list của <code>a[h(key)]</code> &rarr; <strong>Tốn O(1)</strong> thời gian.
          </p>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3.5 space-y-1">
          <span className="font-bold text-slate-900 block font-mono">2. find(key)</span>
          <p className="text-slate-600 text-[11px] leading-relaxed">
            Duyệt tìm key trong list <code>a[h(key)]</code> &rarr; <strong>Tốn O(n)</strong> với $n$ là độ dài của chain (trung bình là $\alpha$).
          </p>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3.5 space-y-1">
          <span className="font-bold text-slate-900 block font-mono">3. delete(key)</span>
          <p className="text-slate-600 text-[11px] leading-relaxed">
            Tìm và xóa node khỏi list <code>a[h(key)]</code> &rarr; <strong>Tốn O(n)</strong> với $n$ là độ dài chain.
          </p>
        </div>
      </div>

      {/* Sticky Takeaway */}
      <div className="bg-emerald-50/80 border-2 border-emerald-200 rounded-2xl p-4 flex items-start gap-3 text-xs text-emerald-950">
        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
        <div>
          <strong>⭐ Cần nhớ (Mục 4.1):</strong><br/>
          • <strong>Separate Chaining:</strong> Dùng linked list tại mỗi slot để chứa các key bị collision.<br/>
          • <strong>Độ phức tạp:</strong> <code>insert</code> tốn O(1), nhưng <code>find</code> và <code>delete</code> tốn O(độ dài chain).<br/>
          • <strong>Load factor &alpha; = n/m:</strong> Khi &alpha; vượt ngưỡng, cần <strong>Rehash</strong> (tăng gấp đôi m và băm lại toàn bộ) để giữ &alpha; bị chặn và duy trì tốc độ O(1).
        </div>
      </div>
    </div>
  );
}
