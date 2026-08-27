"use client";

import React, { useState } from "react";
import {
  Award,
} from "lucide-react";

export default function BellmanFordMasterSummaryMatrix() {
  const [activeTab, setActiveTab] = useState("rules"); // "rules" | "matrix" | "decision"

  const eightRules = [
    { id: 1, title: "Bài Toán SSSP", desc: "Tìm trọng số đường đi ngắn nhất delta(s, v) từ 1 đỉnh nguồn duy nhất s đến tất cả mọi đỉnh v trong đồ thị." },
    { id: 2, title: "Mảng D[v] & p[v]", desc: "D[v] >= delta trong suốt quá trình chạy (giảm dần về delta khi xong); p[v] lưu đỉnh cha liền trước để truy vết (backtrack)." },
    { id: 3, title: "Phép Toán Relax(u, v, w)", desc: "So sánh D[v] với D[u] + w. Nếu đi qua u ngắn hơn thì cập nhật: D[v] = D[u] + w và p[v] = u." },
    { id: 4, title: "Phạm Vi BFS O(V + E)", desc: "Chỉ áp dụng đúng cho đồ thị KHÔNG TRỌNG SỐ (hoặc trọng số bằng nhau). Báo sai nếu đồ thị có trọng số khác nhau (detour trap)." },
    { id: 5, title: "Bellman-Ford O(V · E)", desc: "Relax toàn bộ danh sách E cạnh lặp lại đúng |V| - 1 lần. Chạy đúng trên đồ thị có trọng số tổng quát." },
    { id: 6, title: "Cạnh Trọng Số Âm", desc: "Bellman-Ford xử lý hoàn hảo các cạnh âm, miễn là đường đi cần tính không đi qua chu trình âm (negative cycle)." },
    { id: 7, title: "Pass Thứ |V| Dò Chu Trình Âm", desc: "Chạy thêm 1 lượt nới lỏng thứ |V|. Nếu vẫn còn bất kỳ cạnh nào relax được thì kết luận có chu trình âm có thể đến được từ s." },
    { id: 8, title: "Hố Đen Undefined (-∞)", desc: "Nếu đường đi ngắn nhất phải đi qua chu trình âm, chi phí có thể giảm vô hạn về -vô cực ==> Bài toán bị vô nghiệm (Undefined)." },
  ];

  return (
    <div className="my-8 rounded-3xl border border-indigo-200/80 bg-gradient-to-br from-indigo-50/80 via-white to-amber-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-indigo-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 border border-indigo-300 text-indigo-950 text-xs font-bold mb-2">
            <Award className="w-3.5 h-3.5 text-indigo-700" />
            <span>Phần 9: Tổng Kết Toàn Diện Bài 14 (SSSP Master Summary)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-950 via-sky-950 to-amber-950 bg-clip-text text-transparent">
            Ma Trận Tổng Kết Toàn Bộ Thuật Toán Bellman-Ford &amp; SSSP
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Bức tranh toàn cảnh về bài toán đường đi ngắn nhất từ một nguồn, so sánh đối chiếu thuật toán và 8 quy tắc cốt tử.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex rounded-2xl bg-slate-100 p-1 border border-slate-200 self-start md:self-auto text-xs font-mono">
          <button
            onClick={() => setActiveTab("rules")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              activeTab === "rules"
                ? "bg-indigo-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            8 Quy Tắc Cốt Tử
          </button>
          <button
            onClick={() => setActiveTab("matrix")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              activeTab === "matrix"
                ? "bg-amber-500 text-slate-950 font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Ma Trận Đối Chiếu Thuật Toán
          </button>
          <button
            onClick={() => setActiveTab("decision")}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm ${
              activeTab === "decision"
                ? "bg-emerald-600 text-white font-extrabold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Cây Quyết Định (Decision Tree)
          </button>
        </div>
      </div>

      {/* Tab 1: 8 Core Rules */}
      {activeTab === "rules" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 text-xs font-sans">
          {eightRules.map((r) => (
            <div
              key={r.id}
              className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-sm hover:border-indigo-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-2 font-mono">
                  <span className="text-amber-950 font-bold text-[11px] block uppercase">Quy Tắc #{r.id}</span>
                  <span className="text-[10px] text-slate-400 font-bold">#DSA-14</span>
                </div>
                <span className="font-bold text-slate-900 block text-xs mb-1">{r.title}</span>
                <p className="text-slate-600 leading-relaxed text-[11px]">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 2: Comparison Matrix */}
      {activeTab === "matrix" && (
        <div className="space-y-4">
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white">
            <table className="w-full text-xs font-sans text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-mono text-[11px]">
                  <th className="p-3.5 font-bold">Thuật Toán</th>
                  <th className="p-3.5 font-bold">Độ Phức Tạp</th>
                  <th className="p-3.5 font-bold">Loại Đồ Thị Áp Dụng</th>
                  <th className="p-3.5 font-bold">Xử Lý Cạnh Âm?</th>
                  <th className="p-3.5 font-bold">Dò Chu Trình Âm?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="p-3.5 font-mono font-bold text-sky-950">BFS (Breadth-First Search)</td>
                  <td className="p-3.5 font-mono text-emerald-700 font-bold">O(V + E)</td>
                  <td className="p-3.5">Đồ thị KHÔNG trọng số (hoặc trọng số bằng nhau)</td>
                  <td className="p-3.5 text-rose-600 font-bold font-mono">❌ Không (Báo sai)</td>
                  <td className="p-3.5 text-rose-600 font-bold font-mono">❌ Không</td>
                </tr>
                <tr className="bg-amber-50/70">
                  <td className="p-3.5 font-mono font-extrabold text-amber-950">Bellman-Ford</td>
                  <td className="p-3.5 font-mono text-amber-950 font-extrabold">O(V · E)</td>
                  <td className="p-3.5 font-bold text-slate-900">Đồ thị có trọng số TỔNG QUÁT (kể cả cạnh âm)</td>
                  <td className="p-3.5 text-emerald-700 font-bold font-mono">✅ Hoàn Hảo</td>
                  <td className="p-3.5 text-emerald-700 font-bold font-mono">✅ Có (Ở pass |V|)</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-mono font-bold text-indigo-950">Dijkstra (Loạt bài sau)</td>
                  <td className="p-3.5 font-mono text-sky-700 font-bold">O((V + E) log V)</td>
                  <td className="p-3.5">Đồ thị có trọng số KHÔNG ÂM ($w \ge 0$)</td>
                  <td className="p-3.5 text-rose-600 font-bold font-mono">❌ Không hỗ trợ</td>
                  <td className="p-3.5 text-rose-600 font-bold font-mono">❌ Không</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 3: Decision Tree */}
      {activeTab === "decision" && (
        <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-4 text-xs font-sans shadow-sm">
          <span className="text-[10px] font-mono text-emerald-950 font-bold uppercase block">
            CÂY QUYẾT ĐỊNH CHỌN GIẢI THUẬT SSSP TỐI ƯU NHẤT:
          </span>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 shadow-sm">
              <span className="font-mono text-sky-950 font-bold text-xs block">1. Đồ thị KHÔNG có trọng số?</span>
              <p className="text-slate-700 leading-relaxed">
                ⟹ Chọn ngay <strong>BFS O(V + E)</strong> để đạt tốc độ nhanh nhất!
              </p>
            </div>

            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 space-y-2 shadow-sm">
              <span className="font-mono text-amber-950 font-bold text-xs block">2. Đồ thị CÓ cạnh trọng số âm?</span>
              <p className="text-slate-700 leading-relaxed">
                ⟹ Bắt buộc chọn <strong>Bellman-Ford O(V · E)</strong> để xử lý an toàn và bắt chu trình âm!
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 shadow-sm">
              <span className="font-mono text-indigo-950 font-bold text-xs block">3. Đồ thị CÓ trọng số KHÔNG ÂM?</span>
              <p className="text-slate-700 leading-relaxed">
                ⟹ Chọn <strong>Dijkstra O((V + E) log V)</strong> để tối ưu thời gian chạy!
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
