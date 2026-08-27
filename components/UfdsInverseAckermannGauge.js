"use client";

import React, { useState } from "react";
import { Gauge, CheckCircle2 } from "lucide-react";

export default function UfdsInverseAckermannGauge() {
  const [activeTab, setActiveTab] = useState("ackermann"); // "ackermann" | "references" | "takeaways"

  const references = [
    { title: "Introduction to Algorithms (CLRS)", desc: "Trang 505–509 (ed. 2), Chương 21.3", tag: "Giáo Trình Chuẩn" },
    { title: "Competitive Programming 3 (CP3)", desc: "Section 2.4.2 (UFDS) & 4.3.2 (MST, Kruskal's)", tag: "Lập Trình Thi Đấu" },
    { title: "Algorithm Design (Kleinberg & Tardos)", desc: "Trang 151–157, Chương 4.6", tag: "Thiết Kế Thuật Toán" },
    { title: "VisuAlgo UFDS Visualization", desc: "http://visualgo.net/ufds.html", tag: "Mô Phỏng Trực Quan" },
  ];

  const takeaways = [
    "1. UFDS mô hình mỗi tập như 1 CÂY; representative item = ROOT của cây đó.",
    "2. Mảng p[i] lưu parent của i; nếu p[i] == i ⟹ i là root / representative item.",
    "3. FindSet: đệ quy theo p[i] lên root + PATH COMPRESSION làm phẳng cây về O(1).",
    "4. UnionSet: gắn root của cây thấp hơn vào root của cây cao hơn (UNION-BY-RANK), nếu bằng nhau thì rank tăng thêm 1.",
    "5. Time complexity: O(α(V)) ≈ O(1) trên thực tế khi kết hợp đồng thời cả 2 heuristic.",
    "6. Trong code Java OOP, KHÔNG viết return p.set(...) vì Vector.set() trả về giá trị CŨ.",
  ];

  return (
    <div className="my-8 rounded-3xl border border-teal-200/80 bg-gradient-to-br from-teal-50/80 via-white to-emerald-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-teal-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 border border-teal-300 text-teal-950 text-xs font-bold mb-2">
            <Gauge className="w-3.5 h-3.5 text-teal-700" />
            <span>Độ Phức Tạp &amp; Tổng Kết (Mục 1.6)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-teal-950 via-emerald-950 to-slate-900 bg-clip-text text-transparent">
            Hàm Ngược Ackermann O(&alpha;(V)) &amp; 6 Điểm Cốt Lõi Cần Nhớ
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Độ phức tạp tăng chậm đến mức được coi là <strong>hằng số O(1)</strong> trong mọi bài toán thực tế của nhân loại.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex rounded-2xl bg-slate-100 p-1 border border-slate-200 self-start md:self-auto text-xs font-mono">
          <button
            onClick={() => setActiveTab("ackermann")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              activeTab === "ackermann"
                ? "bg-emerald-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Hàm &alpha;(V) &le; 4
          </button>
          <button
            onClick={() => setActiveTab("takeaways")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              activeTab === "takeaways"
                ? "bg-amber-500 text-slate-950 font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            6 Điểm Cần Nhớ
          </button>
          <button
            onClick={() => setActiveTab("references")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              activeTab === "references"
                ? "bg-sky-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Tài Liệu Tham Khảo
          </button>
        </div>
      </div>

      {/* Tab 1: Inverse Ackermann Gauge */}
      {activeTab === "ackermann" && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-5 rounded-2xl bg-white border border-teal-100 space-y-1 shadow-sm">
              <span className="text-[10px] font-mono text-slate-500 block font-semibold">Quy mô N &le; 1,000 (Bài tập CS2010):</span>
              <div className="text-emerald-950 font-mono font-extrabold text-base">&alpha;(N) &le; 3</div>
              <p className="text-[11px] text-slate-600 font-sans">Thời gian xử lý &lt; 0.001 ms</p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-teal-100 space-y-1 shadow-sm">
              <span className="text-[10px] font-mono text-slate-500 block font-semibold">Quy mô N &le; 10⁶ (Big Data thực tế):</span>
              <div className="text-teal-950 font-mono font-extrabold text-base">&alpha;(N) &le; 4</div>
              <p className="text-[11px] text-slate-600 font-sans">Thời gian xử lý &approx; O(1) hằng số</p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-teal-100 space-y-1 shadow-sm">
              <span className="text-[10px] font-mono text-slate-500 block font-semibold">Quy mô N = 10⁸⁰ (Số hạt vũ trụ):</span>
              <div className="text-amber-950 font-mono font-extrabold text-base">&alpha;(N) &le; 4 !</div>
              <p className="text-[11px] text-slate-600 font-sans">Vẫn không bao giờ vượt quá 4</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-teal-50 border border-teal-200 text-xs font-sans text-slate-700 space-y-1.5 leading-relaxed shadow-sm">
            <strong className="text-teal-950 block font-mono">Định nghĩa Inverse Ackermann Function &alpha;(V):</strong>
            Hàm Ackermann $A(m, n)$ tăng trưởng theo cấp lũy thừa tầng (siêu vũ trụ), do đó hàm ngược $\alpha(V)$ tăng chậm đến mức kỳ diệu. Với mọi giá trị $V$ trong vũ trụ thực tế, $\alpha(V) \le 4$, cho phép chúng ta tự tin coi các thao tác <code>unionSet</code> và <code>findSet</code> chạy trong <strong>thời gian hằng số O(1)</strong>!
          </div>
        </div>
      )}

      {/* Tab 2: 6 Takeaways Checklist */}
      {activeTab === "takeaways" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {takeaways.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white border border-emerald-100 text-xs font-sans text-slate-800 flex items-start gap-2.5 shadow-sm"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span className="leading-relaxed text-[11px] font-medium">{item}</span>
            </div>
          ))}
        </div>
      )}

      {/* Tab 3: References List */}
      {activeTab === "references" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {references.map((ref, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white border border-sky-100 space-y-1 text-xs shadow-sm"
            >
              <div className="flex items-center justify-between font-mono">
                <span className="font-bold text-sky-950">{ref.title}</span>
                <span className="text-[10px] px-2 py-0.5 rounded-lg bg-sky-50 border border-sky-200 text-sky-900 font-bold">
                  {ref.tag}
                </span>
              </div>
              <p className="text-[11px] text-slate-600 font-sans">{ref.desc}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
