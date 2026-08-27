"use client";

import React from "react";
import { ShieldAlert, AlertTriangle, CheckCircle2, XCircle } from "lucide-react";

export default function GraphTraversalExamPitfallsCard() {
  const traps = [
    {
      id: 1,
      title: "Bẫy 1: Độ Phức Tạp Đếm Connected Components",
      wrong: "Nghĩ rằng vòng lặp for V lần gọi DFS(v) sẽ tốn O(V · (V + E)).",
      correct: "Tổng thể vẫn chỉ tốn đúng O(V + E) vì nhờ mảng visited, mỗi đỉnh và mỗi cạnh trên toàn bộ đồ thị chỉ được duyệt đúng 1 lần duy nhất!",
    },
    {
      id: 2,
      title: "Bẫy 2: Thuật Toán Dùng Cho Topological Sort",
      wrong: "Dùng BFS để tìm thứ tự Topological Sort.",
      correct: "Thuật toán sắp xếp Tô-pô dựa trên nguyên tắc Post-order chỉ có thể triển khai bằng DFS (không dùng BFS), sau đó đảo ngược (reverse) danh sách kết quả!",
    },
    {
      id: 3,
      title: "Bẫy 3: Điều Kiện Đồ Thị Có Topological Sort",
      wrong: "Cho rằng mọi đồ thị có hướng đều có thứ tự Tô-pô.",
      correct: "Chỉ có Directed Acyclic Graph (DAG — đồ thị có hướng KHÔNG CHU TRÌNH) mới tồn tại thứ tự Tô-pô. Nếu đồ thị có chu trình, không thể sắp xếp tuyến tính!",
    },
    {
      id: 4,
      title: "Bẫy 4: Thuật Toán Tìm Đường Đi Ngắn Nhất (SSSP)",
      wrong: "Dùng DFS để tìm đường đi ngắn nhất trên đồ thị không trọng số.",
      correct: "Chỉ có BFS quét theo từng tầng khoảng cách mới đảm bảo tìm ra đường đi ngắn nhất (SSSP unweighted) trong O(V + E); DFS đâm sâu có thể tìm ra đường đi rất dài và vòng vèo!",
    },
    {
      id: 5,
      title: "Bẫy 5: Thứ Tự Truy Vết Đường Đi",
      wrong: "Dùng vòng lặp while(i != s) { print(i); i = p[i]; } và nghĩ rằng in ra đường đi từ s đến t.",
      correct: "Vòng lặp đi từ t lùi về s sẽ in ra kết quả BỊ ĐẢO NGƯỢC (t ⟶ s). Muốn in đúng thứ tự s ⟶ t, phải dùng hàm đệ quy backtrack(p[u], p) gọi lùi trước rồi mới in sau!",
    },
  ];

  return (
    <div className="my-8 rounded-3xl border border-rose-200/80 bg-gradient-to-br from-rose-50/80 via-white to-amber-50/60 p-6 md:p-8 text-slate-800 shadow-sm overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-rose-200/80 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 border border-rose-300 text-rose-950 text-xs font-bold mb-2">
            <ShieldAlert className="w-3.5 h-3.5 text-rose-700" />
            <span>Cảnh Báo Cạm Bẫy Thi Cử CS2010</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-rose-950 via-pink-950 to-amber-950 bg-clip-text text-transparent">
            5 Cạm Bẫy Đề Thi Dễ Mất Điểm Nhất (Exam Traps Hub)
          </h3>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Ghi nhớ 5 điểm mấu chốt giảng viên thường xuyên cài bẫy trong các bài thi giữa kỳ và cuối kỳ.
          </p>
        </div>

        <div className="px-3.5 py-1.5 rounded-xl bg-rose-100 border border-rose-300 text-rose-950 font-mono font-bold text-xs self-start md:self-auto shadow-sm">
          5 Bẫy Trọng Tâm
        </div>
      </div>

      {/* 5 Traps List */}
      <div className="space-y-4">
        {traps.map((tr) => (
          <div
            key={tr.id}
            className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-sm"
          >
            <h4 className="text-xs font-bold text-slate-800 font-mono flex items-center gap-2">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
              <span>{tr.title}</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-sans">
              <div className="p-3.5 rounded-xl bg-rose-50/80 border border-rose-200 space-y-1 shadow-sm">
                <span className="text-rose-950 font-mono font-bold text-[10px] flex items-center gap-1">
                  <XCircle className="w-3 h-3 text-rose-600" /> HIỂU SAI / DỄ MẮC BẪY:
                </span>
                <p className="text-slate-600 text-[11px] leading-relaxed">{tr.wrong}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-200 space-y-1 shadow-sm">
                <span className="text-emerald-950 font-mono font-bold text-[10px] flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" /> BẢN CHẤT CHÍNH XÁC:
                </span>
                <p className="text-emerald-950 text-[11px] leading-relaxed font-medium">{tr.correct}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
