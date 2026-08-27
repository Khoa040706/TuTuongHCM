"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  CheckCircle2,
  XCircle,
} from "lucide-react";

export default function KruskalLoopInvariantProofStudio() {
  const [selectedAspect, setSelectedAspect] = useState("statement"); // "statement" | "steps" | "cycle"

  return (
    <div className="my-8 rounded-3xl border border-indigo-200/80 bg-gradient-to-br from-indigo-50/80 via-white to-amber-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-indigo-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 border border-indigo-300 text-indigo-950 text-xs font-bold mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-indigo-700" />
            <span>Phần 5.2: Tính Đúng Đắn Của Kruskal's (Why Kruskal's Works?)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-950 via-purple-950 to-amber-950 bg-clip-text text-transparent">
            Chứng Minh Toán Học Dựa Trên Bất Biến Vòng Lặp (Loop Invariant)
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Giải mã mệnh đề bất biến <em>"Mọi cạnh $e$ được thêm vào $T$ bởi Kruskal's đều là 1 phần của MST"</em> và cơ chế chặn chu trình.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex rounded-2xl bg-slate-100 p-1 border border-slate-200 self-start md:self-auto text-xs font-mono">
          <button
            onClick={() => setSelectedAspect("statement")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              selectedAspect === "statement"
                ? "bg-indigo-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            1. Bất Biến Vòng Lặp
          </button>
          <button
            onClick={() => setSelectedAspect("steps")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              selectedAspect === "steps"
                ? "bg-purple-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            2. Giải Thích 3 Giai Đoạn
          </button>
          <button
            onClick={() => setSelectedAspect("cycle")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              selectedAspect === "cycle"
                ? "bg-rose-500 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            3. Chặn Chu Trình (Ví Dụ 0-2)
          </button>
        </div>
      </div>

      {/* Tab 1: Statement */}
      {selectedAspect === "statement" && (
        <div className="space-y-4">
          <div className="p-5 rounded-2xl bg-white border border-indigo-100 space-y-3 shadow-sm">
            <span className="text-[10px] font-mono text-indigo-800 uppercase font-bold tracking-wider">
              Mệnh Đề Bất Biến Vàng (Loop Invariant Statement)
            </span>
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-sm md:text-base font-serif italic text-amber-950 leading-relaxed text-center shadow-sm">
              &ldquo;Mọi cạnh $e$ được thêm vào $T$ bởi thuật toán Kruskal&apos;s đều là một phần của cây khung nhỏ nhất MST.&rdquo;
            </div>
            <p className="text-xs text-slate-700 font-sans leading-relaxed">
              Vì Kruskal là thuật toán tham lam (greedy algorithm): ở mỗi bước luôn cố chọn cạnh chưa xử lý $e$ có trọng số nhỏ nhất, ta cần chứng minh rằng tập cạnh $T$ tích lũy qua từng vòng lặp luôn mở rộng được thành một MST hợp lệ.
            </p>
          </div>
        </div>
      )}

      {/* Tab 2: 3 Stages Proof Breakdown */}
      {selectedAspect === "steps" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-sm">
            <span className="text-[10px] font-mono text-indigo-950 font-bold uppercase">1. Khởi Đầu (Initialization)</span>
            <h4 className="text-xs font-bold text-slate-900 font-mono">T = Rỗng {}</h4>
            <p className="text-slate-600 leading-relaxed">
              Ở đầu mỗi vòng lặp, tập $T$ rỗng hoặc tập cạnh đã chọn luôn là một tập con của MST.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-purple-200 space-y-2 shadow-sm">
            <span className="text-[10px] font-mono text-purple-950 font-bold uppercase">2. Duy Trì (Maintenance)</span>
            <h4 className="text-xs font-bold text-slate-900 font-mono">Kiểm Tra Chu Trình + Tham Lam</h4>
            <p className="text-slate-600 leading-relaxed">
              Kruskal chỉ thêm cạnh $e$ khi không tạo chu trình. Bằng cách luôn thêm cạnh nhỏ nhất tiếp theo, ta luôn có:
              <code className="block mt-1 font-mono text-amber-950 font-bold text-[11px] bg-amber-50 p-1.5 rounded-lg border border-amber-200">w(T ∪ e) ≤ w(T ∪ e&apos;)</code>
              (với $e&apos;$ là bất kỳ cạnh chưa xử lý nào khác không tạo chu trình).
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-emerald-200 space-y-2 shadow-sm">
            <span className="text-[10px] font-mono text-emerald-950 font-bold uppercase">3. Kết Thúc (Termination)</span>
            <h4 className="text-xs font-bold text-slate-900 font-mono">Đủ V - 1 Cạnh ⟹ MST Xong!</h4>
            <p className="text-slate-700 leading-relaxed">
              Khi đã chọn đủ $V - 1$ cạnh từ đồ thị liên thông $G$ mà không có chu trình, ta thu được một <strong>Spanning Tree</strong> có $w(T)$ nhỏ nhất ⟹ $T$ chính là MST cuối cùng! (Q.E.D).
            </p>
          </div>
        </div>
      )}

      {/* Tab 3: Cycle Prevention (Example 0-2) */}
      {selectedAspect === "cycle" && (
        <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
            <span>Ví Dụ Trực Quan Trong Slide: Cơ Chế Loại Bỏ Chu Trình</span>
            <span className="text-rose-950 font-bold">Cycle Prevention</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans">
            <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 space-y-1.5 shadow-sm">
              <div className="flex items-center gap-1 text-rose-950 font-mono font-bold text-[11px]">
                <XCircle className="w-3.5 h-3.5 text-rose-600" />
                <span>TỪ CHỐI CẠNH NỐI 0 VÀ 2:</span>
              </div>
              <p className="text-slate-700 leading-relaxed">
                Khi đỉnh 0 và đỉnh 2 đã cùng liên thông qua đường đi <code>0 - 1 - 2</code>, việc thêm cạnh $(0, 2)$ sẽ tạo thành chu trình tam giác <code>0-1-2-0</code>. Kruskal sử dụng UFDS phát hiện <code>findSet(0) == findSet(2)</code> và lập tức từ chối cạnh này!
              </p>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-1.5 shadow-sm">
              <div className="flex items-center gap-1 text-emerald-950 font-mono font-bold text-[11px]">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>CHẤP NHẬN CẠNH NHỎ NHẤT TIẾP THEO:</span>
              </div>
              <p className="text-slate-700 leading-relaxed">
                Kruskal tiếp tục duyệt tới cạnh an toàn tiếp theo nối 0 và 3 (hoặc các đỉnh khác tập), đảm bảo cây mở rộng liên thông mà vẫn giữ nguyên tổng trọng số tối thiểu.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
