"use client";

import React, { useState } from "react";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  ShieldAlert,
  AlertTriangle,
  CheckCircle2,
  HelpCircle,
  Binary,
  Layers,
  Code2
} from "lucide-react";

export default function DoubleHashingWorkbench() {
  const [selectedCase, setSelectedCase] = useState("safe"); // "safe" or "buggy"

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl p-5 md:p-7 shadow-sm my-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-5">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
            Mục 4.4 — Băm Kép &amp; Cảnh Báo Vòng Lặp
          </span>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-1">
            Double Hashing: Bước Nhảy Riêng Biệt &amp; Cảnh Báo Nguy Hiểm hash₂(k) = 0
          </h3>
          <p className="text-xs text-slate-500">
            Giải pháp triệt tiêu hiện tượng dồn cụm bằng 2 hàm băm độc lập và công thức bảo đảm h₂(k) &ne; 0
          </p>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 font-mono text-xs font-bold self-start sm:self-auto">
          <Binary className="w-3.5 h-3.5 text-amber-600" />
          Double Hashing
        </div>
      </div>

      {/* Interactive Case Switcher */}
      <div className="bg-gradient-to-br from-amber-50/70 via-white to-slate-50 text-slate-800 rounded-2xl p-5 border-2 border-amber-200 shadow-sm mb-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-amber-100">
          <div>
            <span className="text-xs font-mono font-bold text-amber-950 block uppercase">
              CÔNG THỨC: (hash₁(k) + i &times; hash₂(k)) mod m
            </span>
            <span className="text-xs text-slate-500 font-sans">
              hash₂(k) xác định số slot cần nhảy (jump size) riêng cho từng khóa
            </span>
          </div>

          <div className="flex items-center gap-1.5 flex-wrap">
            <button
              onClick={() => setSelectedCase("buggy")}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition cursor-pointer shadow-2xs ${
                selectedCase === "buggy"
                  ? "bg-rose-600 text-white shadow-xs"
                  : "bg-white text-rose-900 border border-rose-200 hover:bg-rose-50"
              }`}
            >
              ⚠️ Cảnh Báo Lỗi: h₂(k) = k mod 5
            </button>
            <button
              onClick={() => setSelectedCase("safe")}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition cursor-pointer shadow-2xs ${
                selectedCase === "safe"
                  ? "bg-emerald-600 text-white shadow-xs"
                  : "bg-white text-emerald-950 border border-emerald-300 hover:bg-emerald-50"
              }`}
            >
              ✓ Cách Đúng: h₂(k) = 5 - (k mod 5)
            </button>
          </div>
        </div>

        {/* Visual Trace Comparison */}
        {selectedCase === "buggy" ? (
          <div className="p-4 bg-rose-50/90 border-2 border-rose-300 rounded-xl space-y-2 text-xs font-mono text-rose-950 shadow-xs animate-fadeIn">
            <div className="flex items-center gap-2 text-rose-900 font-bold">
              <AlertTriangle className="w-4 h-4 text-rose-600" />
              TÌNH HUỐNG LỖI NGHIÊM TRỌNG TRONG GIÁO TRÌNH: CHÈN KHÓA 35
            </div>
            <p className="text-slate-700 font-sans text-[11px] leading-relaxed">
              • <code>h₁(35) = 35 mod 7 = 0</code> (Đã có 21 chiếm giữ tại Slot [0] &rarr; Xảy ra Collision!).<br/>
              • <code>h₂(35) = 35 mod 5 = 0</code> &rarr; <strong>BƯỚC NHẢY BẰNG 0!</strong><br/>
              • Chuỗi Probe Sequence trở thành: <code>0, 0, 0, 0, ...</code> (đứng im tại slot 0).
            </p>
            <div className="p-2.5 bg-white rounded-lg text-rose-900 border border-rose-200 font-sans text-xs font-semibold shadow-2xs">
              ⛔ <strong>Hậu quả:</strong> Thuật toán bị rơi vào <strong>vòng lặp vô hạn (Infinite Loop)</strong> và crash hệ thống! Vì vậy: <code>hash₂(k)</code> <strong>TUYỆT ĐỐI KHÔNG ĐƯỢC CHO KẾT QUẢ BẰNG 0</strong>!
            </div>
          </div>
        ) : (
          <div className="p-4 bg-emerald-50/90 border-2 border-emerald-300 rounded-xl space-y-2 text-xs font-mono text-emerald-950 shadow-xs animate-fadeIn">
            <div className="flex items-center gap-2 text-emerald-900 font-bold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              GIẢI PHÁP CHUẨN: ĐẢO HÀM BĂM THỨ HAI h₂(k) = 5 - (k mod 5)
            </div>
            <p className="text-slate-700 font-sans text-[11px] leading-relaxed">
              • Với <code>h₂(k) = 5 - (k mod 5)</code>: Giá trị của h₂(k) luôn nằm trong khoảng [1, 5] &rarr; <strong>Đảm bảo 100% h₂(k) &ne; 0!</strong><br/>
              • Với khóa 35: <code>h₁(35) = 0</code>, <code>h₂(35) = 5 - (35 mod 5) = 5 - 0 = 5</code> (bước nhảy = 5).<br/>
              • Chuỗi Probe: Slot [0] (bận) &rarr; Probe 1: <code>(0 + 1&times;5) mod 7 = 5</code> (Slot [5] TRỐNG &rarr; Đặt 35 vào slot 5 thành công!).
            </p>
          </div>
        )}
      </div>

      {/* Generalization Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5 text-xs font-sans">
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-1.5">
          <span className="font-bold text-slate-900 block font-mono">
            1. Tính Tổng Quát Hóa Cực Cao Của Double Hashing
          </span>
          <p className="text-slate-600 text-[11px] leading-relaxed">
            • Nếu ta đặt <code>hash₂(k) = 1</code> với mọi k &rarr; Double Hashing trở thành <strong>Linear Probing</strong>.<br/>
            • Nếu ta đặt <code>hash₂(k) = d</code> (hằng số) &rarr; Double Hashing trở thành <strong>Modified Linear Probing</strong>.
          </p>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-1.5">
          <span className="font-bold text-slate-900 block font-mono">
            2. Triệt Tiêu Cả 2 Dạng Clustering
          </span>
          <p className="text-slate-600 text-[11px] leading-relaxed">
            Vì mỗi khóa có một bước nhảy h₂(k) độc lập nên 2 khóa dù có cùng vị trí băm ban đầu h₁(k) cũng sẽ nhảy theo 2 chuỗi hoàn toàn khác nhau &rarr; <strong>Loại bỏ triệt để cả Primary lẫn Secondary Clustering</strong>!
          </p>
        </div>
      </div>

      {/* Sticky Takeaway */}
      <div className="bg-amber-50/80 border-2 border-amber-200 rounded-2xl p-4 flex items-start gap-3 text-xs text-amber-950">
        <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div>
          <strong>⭐ Cần nhớ (Mục 4.4):</strong><br/>
          • <strong>Double Hashing:</strong> Bước nhảy = <code>hash₂(key)</code> (linh hoạt cho từng khóa, không cố định).<br/>
          • <strong>Bắt buộc:</strong> <code>hash₂(key)</code> <strong>không bao giờ được bằng 0</strong> để tránh lặp vô hạn (nên dùng dạng <code>R - (k mod R)</code>).<br/>
          • Double Hashing là dạng tổng quát hóa mạnh nhất trong các kỹ thuật Open Addressing.
        </div>
      </div>
    </div>
  );
}
