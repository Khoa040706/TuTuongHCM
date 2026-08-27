"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  CheckCircle2,
  Layers,
  Scissors,
} from "lucide-react";

export default function DijkstraProofCorrectnessStudio() {
  const [activeProofTab, setActiveProofTab] = useState("loopInvariant"); // "loopInvariant" | "subpath" | "induction"

  return (
    <div className="my-8 rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 via-white to-sky-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-950 text-xs font-bold mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            <span>Phần 8: Vì Sao Chiến Lược Greedy Hoạt Động? (Why This Greedy Strategy Works?)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-950 via-teal-950 to-amber-950 bg-clip-text text-transparent">
            Chứng Minh Tính Đúng Đắn: Loop Invariant &amp; Định Lý Subpath
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Giải mã toán học vì sao chỉ cần duyệt mỗi đỉnh đúng 1 lần duy nhất trong tập $Solved$ là đảm bảo đạt khoảng cách tối ưu toàn cục.
          </p>
        </div>

        {/* Action Badge */}
        <div className="px-3.5 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 font-mono font-bold text-xs self-start md:self-auto shadow-sm">
          Toán Học Rời Rạc &amp; Phản Chứng
        </div>
      </div>

      {/* Tabs Selector */}
      <div className="flex flex-wrap gap-2 mb-6 border-b border-emerald-200/80 pb-3 text-xs font-mono">
        <button
          onClick={() => setActiveProofTab("loopInvariant")}
          className={`px-4 py-2 rounded-xl font-bold transition-all flex items-center gap-1.5 shadow-sm ${
            activeProofTab === "loopInvariant"
              ? "bg-emerald-600 text-white font-extrabold"
              : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>1. Bất Biến Vòng Lặp (Loop Invariant)</span>
        </button>

        <button
          onClick={() => setActiveProofTab("subpath")}
          className={`px-4 py-2 rounded-xl font-bold transition-all flex items-center gap-1.5 shadow-sm ${
            activeProofTab === "subpath"
              ? "bg-sky-600 text-white font-extrabold"
              : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
          }`}
        >
          <Scissors className="w-3.5 h-3.5" />
          <span>2. Định Lý Subpath (Chứng Minh Phản Chứng)</span>
        </button>

        <button
          onClick={() => setActiveProofTab("induction")}
          className={`px-4 py-2 rounded-xl font-bold transition-all flex items-center gap-1.5 shadow-sm ${
            activeProofTab === "induction"
              ? "bg-amber-500 text-slate-950 font-extrabold"
              : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
          }`}
        >
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>3. Chứng Minh dist[u] = Delta(s, u)</span>
        </button>
      </div>

      {/* Tab 1: Loop Invariant */}
      {activeProofTab === "loopInvariant" && (
        <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-4 text-xs font-sans shadow-sm text-slate-700">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
            <span>Bất Biến Vòng Lặp Của Dijkstra: Tập Solved</span>
            <span className="text-emerald-950 font-bold">Invariant Property</span>
          </div>

          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-300 space-y-2 text-emerald-950 shadow-sm">
            <span className="font-mono font-bold text-sm block">
              🛡️ LOOP INVARIANT KHẲNG ĐỊNH RẰNG:
            </span>
            <p className="leading-relaxed font-medium">
              &quot;Tại mọi thời điểm, mọi đỉnh <code>v</code> nằm trong tập <code>Solved</code> đều đã có khoảng cách ước lượng <code>dist[v]</code> bằng chính xác khoảng cách đường đi ngắn nhất thực sự <code>&delta;(s, v)</code> từ nguồn.&quot;
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 shadow-sm">
              <span className="text-amber-950 font-mono font-bold block text-[11px] uppercase">
                1. Khởi Tạo Ban Đầu (Initialization):
              </span>
              <p className="text-slate-700 leading-relaxed">
                Ban đầu <code>Solved = &#123;s&#125;</code> và <code>dist[s] = &delta;(s, s) = 0</code>. Mệnh đề hiển nhiên đúng!
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 shadow-sm">
              <span className="text-sky-950 font-mono font-bold block text-[11px] uppercase">
                2. Bước Duy Trì (Maintenance):
              </span>
              <p className="text-slate-700 leading-relaxed">
                Khi thêm đỉnh <code>u</code> có <code>dist[u]</code> nhỏ nhất vào <code>Solved</code>, giá trị <code>dist[u]</code> cũng chắc chắn bằng <code>&delta;(s, u)</code>!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Subpath Theorem (Cut and Paste Proof) */}
      {activeProofTab === "subpath" && (
        <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-4 text-xs font-sans shadow-sm text-slate-700">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
            <span>Định Lý Toán Học: Subpaths Của Shortest Path Cũng Là Shortest Path</span>
            <span className="text-sky-950 font-bold">Cut &amp; Paste Proof</span>
          </div>

          <div className="p-4 rounded-xl bg-sky-50 border border-sky-300 space-y-2 text-sky-950 shadow-sm">
            <span className="font-mono font-bold text-sm block">
              📜 PHÁT BIỂU ĐỊNH LÝ (THEOREM):
            </span>
            <p className="leading-relaxed">
              Cho <code>p = (v_0, v_1, ..., v_k)</code> là một đường đi ngắn nhất từ <code>v_0</code> đến <code>v_k</code>. Với mọi đoạn con <code>p_ij = (v_i, ..., v_j)</code> của <code>p</code>, thì <code>p_ij</code> cũng <strong>bắt buộc phải là đường đi ngắn nhất</strong> từ <code>v_i</code> đến <code>v_j</code>.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 shadow-sm">
            <span className="text-amber-950 font-mono font-bold text-[11px] block uppercase">
              ✂️ CHỨNG MINH PHẢN CHỨNG (PROOF BY CONTRADICTION - CUT &amp; PASTE):
            </span>
            <div className="space-y-2 text-slate-700 leading-relaxed font-mono text-xs">
              <p>• Phân rã đường đi: <code>p = v_0 &rarr; p_0i &rarr; v_i &rarr; p_ij &rarr; v_j &rarr; p_jk &rarr; v_k</code>.</p>
              <p>• Giả sử phản chứng: <code>p_ij</code> KHÔNG phải là shortest path giữa <code>v_i</code> và <code>v_j</code>.</p>
              <p>• Khi đó tồn tại một đường đi con khác <code>p&apos;_ij</code> có độ dài <strong>ngắn hơn</strong> <code>p_ij</code>.</p>
              <p>• Ta cắt bỏ <code>p_ij</code> và dán <code>p&apos;_ij</code> vào <code>p</code> ➔ Tạo ra đường đi mới từ <code>v_0</code> đến <code>v_k</code> có tổng chi phí <strong>ngắn hơn p</strong>.</p>
              <p className="text-rose-600 font-bold">➔ MÂU THUẪN với giả thiết ban đầu p là shortest path! Vậy p_ij bắt buộc phải là shortest path.</p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Induction Proof */}
      {activeProofTab === "induction" && (
        <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-4 text-xs font-sans shadow-sm text-slate-700">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
            <span>Chứng Minh Quy Nạp: dist[u] = Delta(s, u)</span>
            <span className="text-amber-950 font-bold">Final Theorem</span>
          </div>

          <div className="space-y-2 text-slate-700 leading-relaxed">
            <p>
              • Thuật toán Dijkstra lặp lại việc chọn đỉnh <code>u &isin; &#123;V - Solved&#125;</code> có <code>dist[u]</code> nhỏ nhất vào <code>Solved</code>.
            </p>
            <p>
              • Vì <code>u</code> có <code>dist[u]</code> nhỏ nhất, ắt tồn tại một đỉnh <code>x &isin; Solved</code> (đã có <code>dist[x] = &delta;(s, x)</code>) nối tới <code>u</code> qua cạnh <code>(x, u)</code> sao cho chi phí là nhỏ nhất.
            </p>
            <p>
              • Áp dụng định lý Subpath:
              <code className="block my-1.5 p-2 rounded-lg bg-slate-50 border border-slate-200 font-mono text-emerald-950 font-bold text-xs shadow-sm">
                dist[u] = dist[x] + weight(x, u) = &delta;(s, x) + &delta;(x, u) = &delta;(s, u).
              </code>
            </p>
            <p>
              • Vậy khi thuật toán Dijkstra bản gốc kết thúc, ta có <strong>dist[v] = &delta;(s, v)</strong> với mọi đỉnh <code>v &isin; V</code> (với điều kiện mọi <code>w &ge; 0</code>)!
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-950 space-y-1 shadow-sm">
            <span className="font-bold font-mono text-[11px] text-amber-950 block">
              📌 Cần Nhớ (Phần 8):
            </span>
            <p>
              • Loop invariant: Mọi đỉnh trong Solved đều đã có dist đúng bằng &delta;.
            </p>
            <p>
              • Chứng minh dựa trên: Subpath của shortest path cũng là shortest path.
            </p>
            <p>
              • Kết luận: Dijkstra gốc kết thúc ➔ <code>dist[v] = &delta;(s, v)</code> với mọi <code>v</code> (nếu mọi <code>w &ge; 0</code>).
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
