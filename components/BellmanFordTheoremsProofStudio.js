"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function BellmanFordTheoremsProofStudio() {
  const [activeTab, setActiveTab] = useState("theorem1"); // "theorem1" | "theorem2"

  return (
    <div className="my-8 rounded-3xl border border-purple-200/80 bg-gradient-to-br from-purple-50/80 via-white to-sky-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-purple-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 border border-purple-300 text-purple-950 text-xs font-bold mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-purple-700" />
            <span>Phần 6: Chứng Minh Tính Đúng Đắn (Theorem &amp; Proof)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-950 via-sky-950 to-emerald-950 bg-clip-text text-transparent">
            Bộ Đôi Định Lý Toán Học: Simple Path &amp; Quy Nạp V - 1 Vòng Quét
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Giải mã tuyệt đối tại sao Bellman-Ford chỉ cần lặp đúng $|V| - 1$ vòng là chắc chắn tìm ra nghiệm tối ưu toàn cục.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex rounded-2xl bg-slate-100 p-1 border border-slate-200 self-start md:self-auto text-xs font-mono">
          <button
            onClick={() => setActiveTab("theorem1")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              activeTab === "theorem1"
                ? "bg-purple-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Định Lý 1 (Simple Path &le; V-1 Cạnh)
          </button>
          <button
            onClick={() => setActiveTab("theorem2")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              activeTab === "theorem2"
                ? "bg-sky-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Định Lý 2 (Quy Nạp Hop-by-Hop)
          </button>
        </div>
      </div>

      {/* Tab 1: Theorem 1 */}
      {activeTab === "theorem1" && (
        <div className="space-y-4">
          <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200 text-xs font-sans text-purple-950 space-y-1 shadow-sm">
            <span className="text-purple-950 font-bold font-mono block text-[11px]">
              📜 ĐỊNH LÝ 1 (THEOREM 1):
            </span>
            <p className="italic font-medium">
              &ldquo;Nếu đồ thị $G = (V, E)$ không chứa chu trình âm (negative weight cycle), thì đường đi ngắn nhất $p$ từ $s$ đến $v$ luôn là một đường đi đơn giản (Simple Path không có đỉnh lặp lại).&rdquo;
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2.5 shadow-sm">
              <span className="text-[10px] font-mono text-purple-950 font-bold uppercase">7 Bước Chứng Minh Phản Chứng (Proof by Contradiction)</span>
              <ul className="space-y-1.5 text-slate-700 leading-relaxed">
                <li>1. Giả sử đường đi ngắn nhất $p$ <strong>không phải</strong> simple path.</li>
                <li>2. Khi đó $p$ bắt buộc phải chứa 1 (hoặc nhiều) chu trình $c$.</li>
                <li>3. Giả sử có chu trình $c$ với <strong>trọng số dương</strong> ($w(c) &gt; 0$).</li>
                <li>4. Nếu loại bỏ $c$ khỏi $p \implies$ Ta thu được 1 đường đi mới có <strong>trọng số ngắn hơn $p$</strong>.</li>
                <li>5. ⟹ Mâu thuẫn với giả thiết ban đầu rằng $p$ là đường đi ngắn nhất!</li>
                <li>6. Kể cả nếu $w(c) = 0$, việc cắt bỏ $c$ cũng không làm tăng trọng số của $p$.</li>
                <li>7. <strong>Kết luận:</strong> $p$ luôn luôn là (hoặc biến đổi được thành) một Simple Path! (Q.E.D).</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-300 space-y-3 shadow-sm text-emerald-950">
              <span className="text-[10px] font-mono text-emerald-950 font-bold uppercase">Hệ Quả Toán Học Cốt Tử:</span>
              <div className="p-3.5 rounded-xl bg-white border border-emerald-300 text-center font-mono font-bold text-amber-950 text-xs shadow-sm">
                Số Cạnh Cực Đại = |V| - 1 Cạnh!
              </div>
              <p className="leading-relaxed text-slate-700">
                Vì một Simple Path trên đồ thị có $|V|$ đỉnh không bao giờ lặp lại đỉnh, nên số đỉnh tối đa trên đường đi là $|V|$ đỉnh ⟹ <strong>Đường đi tới đỉnh xa nhất có tối đa đúng |V| - 1 cạnh</strong>.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Theorem 2 */}
      {activeTab === "theorem2" && (
        <div className="space-y-4">
          <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200 text-xs font-sans text-sky-950 space-y-1 shadow-sm">
            <span className="text-sky-950 font-bold font-mono block text-[11px]">
              📜 ĐỊNH LÝ 2 (THEOREM 2):
            </span>
            <p className="italic font-medium">
              &ldquo;Sau khi thuật toán Bellman-Ford kết thúc (|V| - 1 vòng quét), ta luôn có $D[v] = \delta(s, v)$ với mọi đỉnh $v \in V$.&rdquo;
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-sm">
              <span className="text-[10px] font-mono text-sky-950 font-bold uppercase">1. Cơ Sở Quy Nạp (Base Case)</span>
              <p className="text-slate-700 leading-relaxed">
                Ban đầu: $D[v_0] = \delta(s, v_0) = 0$ (vì $v_0$ chính là đỉnh nguồn $s$, 0 hops).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-purple-200 space-y-2 shadow-sm">
              <span className="text-[10px] font-mono text-purple-950 font-bold uppercase">2. Bước Quy Nạp (Induction Step)</span>
              <p className="text-slate-700 leading-relaxed">
                • Sau <strong>Pass 1</strong>: $D[v_1] = \delta(s, v_1)$ (1 hop).<br />
                • Sau <strong>Pass 2</strong>: $D[v_2] = \delta(s, v_2)$ (2 hops)...<br />
                • Sau <strong>Pass k</strong>: $D[v_k] = \delta(s, v_k)$ ($k$ hops).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-300 space-y-2 shadow-sm text-emerald-950">
              <span className="text-[10px] font-mono text-emerald-950 font-bold uppercase">3. Kết Thúc (Worst Order)</span>
              <p className="leading-relaxed">
                Sau <strong>|V| - 1 vòng lặp</strong>, đỉnh xa nhất <em>v<sub>|V|-1</sub></em> chắc chắn đạt tối ưu, <strong>đúng ngay cả khi danh sách cạnh E được duyệt theo thứ tự tệ nhất có thể!</strong>
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-purple-50 border border-purple-300 text-xs font-sans text-purple-950 flex items-center gap-2.5 shadow-sm">
            <Sparkles className="w-4 h-4 text-purple-700 shrink-0" />
            <span>
              📌 <strong>Cần nhớ:</strong> Đây chính là lý do vòng lặp ngoài của Bellman-Ford luôn chạy từ <code>1 đến |V| - 1</code>!
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
