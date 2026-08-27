"use client";

import React from "react";
import { XCircle, CheckCircle2, ShieldAlert, Terminal } from "lucide-react";

export default function UfdsJavaVectorPitfallCard() {
  return (
    <div className="my-8 rounded-3xl border border-rose-200/80 bg-gradient-to-br from-rose-50/80 via-white to-amber-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-rose-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 border border-rose-300 text-rose-950 text-xs font-bold mb-2">
            <ShieldAlert className="w-3.5 h-3.5 text-rose-700" />
            <span>Cạm Bẫy Cú Pháp Java OOP (Mục 1.4.c)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-rose-950 via-pink-950 to-slate-900 bg-clip-text text-transparent">
            Cảnh Báo: Hành Vi Của Method Vector.set() Trong Java
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Một trong những lỗi lập trình kinh điển dễ mất điểm trong các bài tập thực hành (PS) và phỏng vấn kỹ thuật.
          </p>
        </div>

        {/* Java Warning Badge */}
        <div className="px-3.5 py-1.5 rounded-xl border border-rose-300 bg-rose-100 text-rose-950 font-mono font-bold text-xs self-start md:self-auto shadow-sm flex items-center gap-1.5">
          <Terminal className="w-3.5 h-3.5 text-rose-700" />
          <span>Java Vector.set() Pitfall</span>
        </div>
      </div>

      {/* Side-by-Side Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        {/* Wrong Approach */}
        <div className="p-5 rounded-2xl bg-white border border-rose-200 space-y-3 shadow-sm">
          <div className="flex items-center gap-2 text-rose-950 font-mono text-xs font-bold border-b border-slate-100 pb-2">
            <XCircle className="w-4 h-4 text-rose-600" />
            <span>❌ CÁCH VIẾT SAI (BUG NGUY HIỂM)</span>
          </div>

          <div className="rounded-xl bg-slate-950 border border-rose-900/40 p-3.5 shadow-sm space-y-2">
            <div className="flex items-center gap-1.5 border-b border-slate-800 pb-1.5 text-[10px] font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-rose-500" />
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="ml-1 text-rose-400 font-bold">WrongFindSet.java</span>
            </div>
            <pre className="font-mono text-xs text-rose-300 overflow-x-auto leading-relaxed">
              <code>
{`// KHÔNG ĐƯỢC VIẾT THẾ NÀY:
return p.set(i, findSet(p.get(i)));`}
              </code>
            </pre>
          </div>

          <p className="text-xs text-slate-600 font-sans leading-relaxed">
            <strong className="text-slate-800">Tại sao sai?</strong> Trong Java API, hàm <code>Vector.set(index, element)</code> trả về <strong>giá trị CŨ (old element)</strong> đang nằm ở vị trí đó trước khi bị ghi đè, chứ <em>không phải giá trị mới</em>! Viết như vậy sẽ trả về sai đại diện tập hợp.
          </p>
        </div>

        {/* Correct Approach */}
        <div className="p-5 rounded-2xl bg-white border border-emerald-200 space-y-3 shadow-sm">
          <div className="flex items-center gap-2 text-emerald-950 font-mono text-xs font-bold border-b border-slate-100 pb-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>✅ CÁCH VIẾT ĐÚNG (CHUẨN SLIDE)</span>
          </div>

          <div className="rounded-xl bg-slate-950 border border-emerald-900/40 p-3.5 shadow-sm space-y-2">
            <div className="flex items-center gap-1.5 border-b border-slate-800 pb-1.5 text-[10px] font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-rose-500" />
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="ml-1 text-emerald-400 font-bold">CorrectFindSet.java</span>
            </div>
            <pre className="font-mono text-xs text-emerald-300 overflow-x-auto leading-relaxed">
              <code>
{`// Cách viết chuẩn 3 dòng:
int ret = findSet(p.get(i));
p.set(i, ret); // Cập nhật mảng
return ret;    // Trả về Root mới`}
              </code>
            </pre>
          </div>

          <p className="text-xs text-slate-600 font-sans leading-relaxed">
            <strong className="text-slate-800">Nguyên tắc:</strong> Lưu kết quả đệ quy của Root vào biến tạm <code>ret</code>, gọi <code>p.set(i, ret)</code> để nén đường đi, rồi sau đó mới <code>return ret</code>!
          </p>
        </div>
      </div>

      {/* Bottom Takeaway */}
      <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs font-sans text-amber-950 shadow-sm">
        💡 <strong>Ghi nhớ từ slide bài giảng:</strong> Luôn tách việc cập nhật <code>p.set()</code> và lệnh <code>return</code> thành 2 câu lệnh độc lập để tránh hiệu ứng phụ (side effect) của các thư viện Java chuẩn.
      </div>
    </div>
  );
}
