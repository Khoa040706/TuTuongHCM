"use client";

import React, { useState } from "react";
import { ShieldAlert, CheckCircle2, XCircle } from "lucide-react";

export default function GraphJavaIntegerPairCard() {
  const [activeTab, setActiveTab] = useState("equalsTrap"); // "equalsTrap" | "classCode" | "whyVector"

  return (
    <div className="my-8 rounded-3xl border border-rose-200/80 bg-gradient-to-br from-rose-50/80 via-white to-amber-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-rose-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 border border-rose-300 text-rose-950 text-xs font-bold mb-2">
            <ShieldAlert className="w-3.5 h-3.5 text-rose-700" />
            <span>Lập Trình Java OOP &amp; Cạm Bẫy (Mục 4.5 &amp; 4.6)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-rose-950 via-pink-950 to-slate-900 bg-clip-text text-transparent">
            Lớp IntegerPair &amp; Cạm Bẫy So Sánh Tham Chiếu (.equals)
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Cách viết lớp đối tượng chuẩn mực và phân tích bộ 3 lý do vì sao chọn cấu trúc Vector lồng nhau.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex rounded-2xl bg-slate-100 p-1 border border-slate-200 self-start md:self-auto text-xs font-mono">
          <button
            onClick={() => setActiveTab("equalsTrap")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              activeTab === "equalsTrap"
                ? "bg-rose-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Cạm Bẫy .equals()
          </button>
          <button
            onClick={() => setActiveTab("classCode")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              activeTab === "classCode"
                ? "bg-sky-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Mã Nguồn Lớp
          </button>
          <button
            onClick={() => setActiveTab("whyVector")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              activeTab === "whyVector"
                ? "bg-emerald-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            3 Lý Do Chọn AdjList
          </button>
        </div>
      </div>

      {/* Tab 1: equals Trap */}
      {activeTab === "equalsTrap" && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Wrong */}
            <div className="p-5 rounded-2xl bg-white border border-rose-200 space-y-2.5 shadow-sm">
              <div className="flex items-center gap-2 text-rose-950 font-mono text-xs font-bold border-b border-slate-100 pb-2">
                <XCircle className="w-4 h-4 text-rose-600" />
                <span>❌ LỖI SO SÁNH SAI (DÙNG != HOẶC ==)</span>
              </div>
              <div className="rounded-xl bg-slate-950 border border-rose-900/40 p-3 shadow-sm">
                <pre className="font-mono text-xs text-rose-300 overflow-x-auto">
                  <code>{`// SAI NGUY HIỂM:
if (this.first() != o.first())`}</code>
                </pre>
              </div>
              <p className="text-xs text-slate-600 font-sans leading-relaxed">
                <code>_first</code> là kiểu <strong>Integer (Object Wrapper)</strong>, không phải primitive <code>int</code>! Dấu <code>!=</code> sẽ so sánh <strong>địa chỉ vùng nhớ (references)</strong> thay vì giá trị số học thực sự, dẫn đến sai logic sắp xếp khi 2 đối tượng cùng giá trị nhưng nằm ở 2 ô nhớ khác nhau!
              </p>
            </div>

            {/* Correct */}
            <div className="p-5 rounded-2xl bg-white border border-emerald-200 space-y-2.5 shadow-sm">
              <div className="flex items-center gap-2 text-emerald-950 font-mono text-xs font-bold border-b border-slate-100 pb-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>✅ CÁCH SO SÁNH ĐÚNG (DÙNG .equals())</span>
              </div>
              <div className="rounded-xl bg-slate-950 border border-emerald-900/40 p-3 shadow-sm">
                <pre className="font-mono text-xs text-emerald-300 overflow-x-auto">
                  <code>{`// ĐÚNG CHUẨN SLIDE:
if (!this.first().equals(o.first()))`}</code>
                </pre>
              </div>
              <p className="text-xs text-slate-600 font-sans leading-relaxed">
                Phương thức <code>.equals()</code> sẽ so sánh trực tiếp <strong>giá trị số nguyên (values)</strong> được đóng gói bên trong đối tượng Integer, đảm bảo hàm <code>compareTo()</code> luôn hoạt động chính xác 100%!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Class Code */}
      {activeTab === "classCode" && (
        <div className="p-6 rounded-2xl bg-white border border-sky-100 space-y-3 shadow-sm">
          {/* Code block in dark theme bg-slate-950 */}
          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-4 shadow-md space-y-2">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                <span className="ml-2 text-sky-400 font-bold">IntegerPair.java</span>
              </div>
              <span className="text-sky-400 font-bold">Slide 4.5</span>
            </div>

            <pre className="p-3 rounded-xl bg-slate-900 border border-slate-800/80 font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed">
              <code>
{`class IntegerPair implements Comparable<IntegerPair> {
  Integer _first, _second;

  public IntegerPair(Integer f, Integer s) {
    _first = f;
    _second = s;
  }

  public int compareTo(IntegerPair o) {
    if (!this.first().equals(o.first()))
      return this.first() - o.first();
    else
      return this.second() - o.second();
  }

  Integer first() { return _first; }
  Integer second() { return _second; }
}
// IntegerTriple tương tự IntegerPair nhưng có thêm trường thứ 3`}
              </code>
            </pre>
          </div>
        </div>
      )}

      {/* Tab 3: Why Vector */}
      {activeTab === "whyVector" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans">
          <div className="p-5 rounded-2xl bg-white border border-amber-200 space-y-1.5 shadow-sm">
            <strong className="text-amber-950 font-mono block">1. Vì sao dùng IntegerPair?</strong>
            <p className="text-slate-600 leading-relaxed text-[11px]">
              Cần lưu cặp thông tin <code>(neighbor number, weight)</code> cho mỗi cạnh kề.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-emerald-200 space-y-1.5 shadow-sm">
            <strong className="text-emerald-950 font-mono block">2. Vì sao dùng Vector con?</strong>
            <p className="text-slate-600 leading-relaxed text-[11px]">
              Nhờ tính năng <strong>tự co giãn (auto-resize)</strong>: Đỉnh có bao nhiêu hàng xóm thì gọi <code>add()</code> bấy nhiêu lần, không lãng phí bộ nhớ.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-teal-200 space-y-1.5 shadow-sm">
            <strong className="text-teal-950 font-mono block">3. Vì sao dùng Vector cha?</strong>
            <p className="text-slate-600 leading-relaxed text-[11px]">
              Nhờ tính năng <strong>đánh chỉ số (indexing)</strong>: Dùng <code>AdjList.get(u)</code> để truy cập ngay danh sách hàng xóm của đỉnh $u$ trong $O(1)$!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
