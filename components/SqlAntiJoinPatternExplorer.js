"use client";
import React, { useState } from "react";
import { GitPullRequest, Terminal, AlertTriangle, CheckCircle2, Zap, HelpCircle } from "lucide-react";

export default function SqlAntiJoinPatternExplorer() {
  const [activePattern, setActivePattern] = useState("left_join");

  const patterns = {
    left_join: {
      name: "1. Kỹ Thuật LEFT JOIN ... WHERE IS NULL (Khuyên dùng)",
      sql: `SELECT mh.*\nFROM MATHANG mh\nLEFT JOIN CHITIETDATHANG ct ON mh.mahang = ct.mahang\nWHERE ct.mahang IS NULL;`,
      perf: "Tối ưu nhất (10/10)",
      badge: "KHUYÊN DÙNG",
      analysis: "Trình tối ưu hóa SQL Server (Query Optimizer) có thể chuyển đổi trực tiếp thành phép toán Anti-Semi-Join trong Execution Plan, tận dụng chỉ mục Index tốt nhất."
    },
    not_exists: {
      name: "2. Kỹ Thuật NOT EXISTS (An toàn tuyệt đối)",
      sql: `SELECT mh.*\nFROM MATHANG mh\nWHERE NOT EXISTS (\n    SELECT *\n    FROM CHITIETDATHANG ct\n    WHERE ct.mahang = mh.mahang\n);`,
      perf: "Rất tốt (9.5/10)",
      badge: "AN TOÀN",
      analysis: "An toàn 100% trước giá trị NULL. Ngay khi con tìm thấy 1 bản ghi khớp, nó sẽ dừng lại ngay mà không cần quét hết bảng con."
    },
    not_in: {
      name: "3. Kỹ Thuật NOT IN (Cẩn trọng Bẫy NULL)",
      sql: `SELECT *\nFROM MATHANG\nWHERE mahang NOT IN (\n    SELECT DISTINCT mahang\n    FROM CHITIETDATHANG\n    WHERE mahang IS NOT NULL -- BẮT BUỘC PHẢI CÓ DÒNG NÀY!\n);`,
      perf: "Khá (8/10)",
      badge: "BẪY NULL",
      analysis: "CỰC KỲ NGUY HIỂM: Nếu tập hợp con trả về có chứa DÙ CHỈ 1 GIÁ TRỊ NULL, toán tử NOT IN sẽ trả về UNKNOWN cho toàn bộ các dòng -> Bảng kết quả sẽ bị TRẮNG XÓA KHÔNG CÓ DỮ LIỆU!"
    }
  };

  const curr = patterns[activePattern];

  return (
    <div className="my-8 rounded-2xl border border-rose-200/80 bg-gradient-to-br from-rose-50/40 via-white to-orange-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-rose-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-600 text-white shadow-md shadow-rose-600/20">
            <GitPullRequest className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">SqlAntiJoinPatternExplorer</h3>
              <span className="rounded-full bg-rose-100 px-2.5 py-0.5 text-xs font-semibold text-rose-800 border border-rose-200">
                Anti-Join Studio (Bài 4)
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              So sánh 3 phong cách viết câu truy vấn &apos;Mặt hàng chưa từng được đặt mua&apos; và bẫy NULL trong NOT IN
            </p>
          </div>
        </div>

        {/* Pattern Selector Tabs */}
        <div className="flex rounded-xl bg-rose-100/80 p-1 border border-rose-200">
          <button
            onClick={() => setActivePattern("left_join")}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
              activePattern === "left_join" ? "bg-rose-600 text-white shadow-sm" : "text-rose-900 hover:text-rose-700"
            }`}
          >
            LEFT JOIN (IS NULL)
          </button>
          <button
            onClick={() => setActivePattern("not_exists")}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
              activePattern === "not_exists" ? "bg-rose-600 text-white shadow-sm" : "text-rose-900 hover:text-rose-700"
            }`}
          >
            NOT EXISTS
          </button>
          <button
            onClick={() => setActivePattern("not_in")}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
              activePattern === "not_in" ? "bg-rose-600 text-white shadow-sm" : "text-rose-900 hover:text-rose-700"
            }`}
          >
            NOT IN (Bẫy NULL)
          </button>
        </div>
      </div>

      {/* Pattern Title & Badge */}
      <div className="mt-5 flex items-center justify-between">
        <h4 className="text-sm font-bold text-rose-950">{curr.name}</h4>
        <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
          activePattern === "left_join"
            ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
            : activePattern === "not_exists"
            ? "bg-blue-100 text-blue-800 border border-blue-300"
            : "bg-rose-100 text-rose-800 border border-rose-300"
        }`}>
          {curr.badge} • Hiệu năng: {curr.perf}
        </span>
      </div>

      {/* Code Box */}
      <div className="mt-3 rounded-xl border border-gray-800 bg-gray-950 p-4 text-white shadow-lg">
        <div className="flex items-center justify-between border-b border-gray-800 pb-2">
          <div className="flex items-center gap-2">
            <Terminal className="h-4 w-4 text-rose-400" />
            <span className="font-mono text-xs font-bold text-gray-300">T-SQL Query Pattern</span>
          </div>
          <span className="font-mono text-[10px] text-rose-300">SQL-92 COMPLIANT</span>
        </div>
        <pre className="mt-3 font-mono text-xs text-amber-300 leading-relaxed overflow-x-auto whitespace-pre-wrap">
          {curr.sql}
        </pre>
      </div>

      {/* Deep Analysis */}
      <div className="mt-4 rounded-xl border border-rose-200 bg-white p-4 shadow-sm text-xs text-gray-700 leading-relaxed">
        <strong className="text-rose-950">💡 Đánh giá kỹ thuật chuyên sâu: </strong>
        {curr.analysis}
      </div>
    </div>
  );
}
