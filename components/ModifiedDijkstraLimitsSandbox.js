"use client";

import React, { useState } from "react";
import {
  AlertOctagon,
  Infinity,
  TrendingUp,
} from "lucide-react";

export default function ModifiedDijkstraLimitsSandbox() {
  const [activeTab, setActiveTab] = useState("exponential"); // "exponential" | "infiniteLoop"

  return (
    <div className="my-8 rounded-3xl border border-rose-200/80 bg-gradient-to-br from-rose-50/80 via-white to-amber-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-rose-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 border border-rose-300 text-rose-950 text-xs font-bold mb-2">
            <AlertOctagon className="w-3.5 h-3.5 text-rose-700" />
            <span>Phần 13: Kiểm Tra &amp; Giới Hạn Của Modified Dijkstra</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-rose-950 via-pink-950 to-amber-950 bg-clip-text text-transparent">
            Không Phải Toàn Năng: Rủi Ro Hàm Mũ &amp; Bẫy Vòng Lặp Vô Hạn (Infinite Loop)
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Khám phá 2 giới hạn sống còn khiến Modified Dijkstra không thể thay thế hoàn toàn Bellman-Ford: Trường hợp cực đoan $O(2^k)$ và bẫy chu trình âm.
          </p>
        </div>

        {/* Action Badge */}
        <div className="px-3.5 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 font-mono font-bold text-xs self-start md:self-auto shadow-sm">
          CP3 4.18 &amp; 4.19
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 border-b border-rose-200/80 pb-3 text-xs font-mono">
        <button
          onClick={() => setActiveTab("exponential")}
          className={`px-4 py-2 rounded-xl font-bold transition-all flex items-center gap-1.5 shadow-sm ${
            activeTab === "exponential"
              ? "bg-amber-500 text-slate-950 font-extrabold"
              : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
          }`}
        >
          <TrendingUp className="w-3.5 h-3.5" />
          <span>1. Trường Hợp Cực Đoan (Exponential Time O(2^k))</span>
        </button>

        <button
          onClick={() => setActiveTab("infiniteLoop")}
          className={`px-4 py-2 rounded-xl font-bold transition-all flex items-center gap-1.5 shadow-sm ${
            activeTab === "infiniteLoop"
              ? "bg-rose-500 text-white font-extrabold"
              : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
          }`}
        >
          <Infinity className="w-3.5 h-3.5" />
          <span>2. Bẫy Negative Cycle: Kẹt Vô Hạn (Infinite Loop)</span>
        </button>
      </div>

      {/* Tab 1: Exponential Case */}
      {activeTab === "exponential" && (
        <div className="p-5 rounded-2xl bg-white border border-amber-200 space-y-4 text-xs font-sans shadow-sm text-slate-700">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
            <span>Đồ Thị Bẫy Nới Lỏng Liên Hoàn (Re-processing Explosion)</span>
            <span className="text-amber-950 font-bold">O(2^k) Exponential</span>
          </div>

          <div className="space-y-2 text-slate-700 leading-relaxed">
            <p>
              • Nếu đồ thị có các cạnh trọng số âm nhưng không tạo cycle âm, tồn tại các cấu trúc đồ thị bẫy đặc thù khiến Modified Dijkstra phải <strong>xử lý lại (re-process) cùng một đỉnh rất nhiều lần</strong>.
            </p>
            <p>
              • Mỗi lần một đỉnh phía trước được giảm khoảng cách bởi một cạnh âm nhỏ, toàn bộ cây con phía sau nó bị nới lỏng lại từ đầu ➔ Số phép tính bùng nổ theo <strong>hàm mũ $O(2^k)$</strong>!
            </p>
            <p>
              • <em>Lưu ý thực tế:</em> Các ca thử nghiệm cực đoan này <strong>rất hiếm gặp trong thực tế</strong>, nên Modified Dijkstra trên thực tế vẫn chạy cực nhanh nếu chỉ có 1 vài cạnh âm.
            </p>
          </div>
        </div>
      )}

      {/* Tab 2: Infinite Loop Case */}
      {activeTab === "infiniteLoop" && (
        <div className="p-5 rounded-2xl bg-white border border-rose-200 space-y-4 text-xs font-sans shadow-sm text-slate-700">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-xs font-mono text-slate-600">
            <span>Bẫy Chu Trình Âm (Negative Weight Cycle Trap - CP3 4.19)</span>
            <span className="text-rose-950 font-bold">Infinite Loop</span>
          </div>

          <div className="p-4 rounded-xl bg-rose-50 border border-rose-300 space-y-2 text-rose-950 shadow-sm">
            <span className="font-mono font-bold text-sm block">
              🚨 VÌ SAO MODIFIED DIJKSTRA BỊ KẸT VÔ HẠN?
            </span>
            <p className="leading-relaxed font-medium">
              Khi đồ thị chứa một chu trình âm (Negative Cycle), mỗi vòng quay quanh chu trình này sẽ làm giảm giá trị khoảng cách <code>dist[v]</code> xuống một lượng âm hơn nữa.
            </p>
            <p className="leading-relaxed font-medium">
              Modified Dijkstra liên tục thấy <code>dist[v]</code> mới &lt; <code>dist[v]</code> cũ ➔ Liên tục đẩy các cặp <code>(new_dist, v)</code> ngày càng âm vào PriorityQueue ➔ <strong>Hàng đợi không bao giờ rỗng và thuật toán chạy vô tận không bao giờ dừng!</strong>
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 space-y-1.5 leading-relaxed shadow-sm">
            <span className="text-emerald-950 font-mono font-bold text-[11px] block">
              🛡️ KẾT LUẬN QUAN TRỌNG:
            </span>
            <p>
              • Khi biết chắc đồ thị có khả năng chứa <strong>Negative Cycle</strong> ➔ Bắt buộc phải dùng <strong>Bellman-Ford $O(V \cdot E)$</strong> vì Bellman-Ford luôn đảm bảo dừng sau tối đa <code>|V|</code> pass!
            </p>
          </div>
        </div>
      )}

      {/* Memo Callout */}
      <div className="p-4 rounded-2xl bg-rose-50 border border-rose-300 text-xs text-rose-950 space-y-1 shadow-sm">
        <span className="font-bold font-mono text-[11px] text-amber-950 block">
          📌 Cần Nhớ (Phần 13):
        </span>
        <p>
          • Modified Dijkstra&apos;s <strong>không phải toàn năng</strong>: Có thể gặp trường hợp cực đoan chạy hàm mũ (dù hiếm).
        </p>
        <p>
          • Nếu đồ thị có khả năng cao chứa <strong>negative cycle</strong> ➔ Nên dùng <strong>Bellman-Ford</strong> để tránh bị kẹt vô hạn.
        </p>
      </div>
    </div>
  );
}
