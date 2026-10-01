"use client";

import React, { useState } from "react";
import {
  Terminal,
  Search,
  GitMerge,
  GitBranch,
  Calculator,
  Layers,
  Sparkles,
  BookOpen,
  Filter
} from "lucide-react";

export default function DatabaseChapter3DqlSummaryDashboard() {
  const [searchTerm, setSearchTerm] = useState("");

  const dqlPillars = [
    {
      id: 1,
      tag: "Trụ cột 1",
      title: "1. Cú Pháp SELECT & DISTINCT",
      icon: Terminal,
      color: "from-blue-600 to-indigo-600",
      border: "border-blue-200",
      bgBadge: "bg-blue-100 text-blue-800",
      points: [
        "SELECT [DISTINCT] trích xuất các cột cần thiết (tương ứng phép chiếu π trong Đại số quan hệ).",
        "WHERE chỉ định điều kiện lọc từng dòng thô (tương ứng phép chọn σ ban đầu).",
        "ORDER BY sắp xếp kết quả: ASC (tăng dần mặc định), DESC (giảm dần)."
      ]
    },
    {
      id: 2,
      tag: "Trụ cột 2",
      title: "2. Toán Tử LIKE & BETWEEN",
      icon: Search,
      color: "from-amber-600 to-orange-600",
      border: "border-amber-200",
      bgBadge: "bg-amber-100 text-amber-800",
      points: [
        "BETWEEN a AND b lấy khoảng đóng bao gồm cả 2 đầu mút a và b.",
        "Ký tự đại diện LIKE: % (chuỗi bất kỳ), _ (đúng 1 ký tự), [a-f] (trong tập), [^a-f] (ngoài tập).",
        "Kỹ thuật escape: LIKE 'ab\\%cd%' ESCAPE '\\' để tìm kiếm ký tự % thật trong văn bản."
      ]
    },
    {
      id: 3,
      tag: "Trụ cột 3",
      title: "3. Bộ Tứ Phép JOIN Chuẩn SQL-92",
      icon: GitMerge,
      color: "from-cyan-600 to-teal-600",
      border: "border-cyan-200",
      bgBadge: "bg-cyan-100 text-cyan-800",
      points: [
        "INNER JOIN: Chỉ giữ lại các dòng khớp khóa ngoại giữa 2 bảng nguồn.",
        "LEFT JOIN: Giữ nguyên toàn bộ bảng Trái, tự động điền NULL nếu bảng Phải không có.",
        "RIGHT JOIN: Giữ toàn bộ bảng Phải; FULL JOIN: Giữ toàn bộ cả hai bên (hợp nhất)."
      ]
    },
    {
      id: 4,
      tag: "Trụ cột 4",
      title: "4. Truy Vấn Lồng IN vs EXISTS",
      icon: GitBranch,
      color: "from-purple-600 to-fuchsia-600",
      border: "border-purple-200",
      bgBadge: "bg-purple-100 text-purple-800",
      points: [
        "Lồng không tương quan (Uncorrelated): Con chạy độc lập 1 lần, trả về tập giá trị cho IN.",
        "Lồng tương quan (Correlated): Con tham chiếu cha, chạy lặp lại cho từng dòng của cha với EXISTS.",
        "EXISTS trả về TRUE/FALSE, tối ưu tốc độ vì dừng ngay lập tức khi tìm thấy dòng đầu tiên."
      ]
    },
    {
      id: 5,
      tag: "Trụ cột 5",
      title: "5. Hàm Kết Hợp & Bẫy Giá Trị NULL",
      icon: Calculator,
      color: "from-rose-600 to-red-600",
      border: "border-rose-200",
      bgBadge: "bg-rose-100 text-rose-800",
      points: [
        "COUNT(*): Đếm toàn bộ dòng trong bảng (kể cả dòng có chứa giá trị NULL).",
        "COUNT(cột): Tự động BỎ QUA tất cả các ô có giá trị NULL.",
        "AVG(cột): Chỉ chia cho số dòng khác NULL (dùng ISNULL(cột, 0) nếu muốn chia trên tổng số dòng)."
      ]
    },
    {
      id: 6,
      tag: "Trụ cột 6",
      title: "6. GROUP BY, HAVING & 5 Bước Logic",
      icon: Layers,
      color: "from-emerald-600 to-green-600",
      border: "border-emerald-200",
      bgBadge: "bg-emerald-100 text-emerald-800",
      points: [
        "Quy tắc vàng: Mọi cột trong SELECT bắt buộc phải có trong GROUP BY (trừ hàm kết hợp).",
        "WHERE lọc từng dòng TRƯỚC khi nhóm, HAVING lọc TRÊN CÁC NHÓM sau khi đã gom.",
        "Chu trình 5 bước: FROM/WHERE -> GROUP BY -> Hàm kết hợp -> HAVING -> SELECT."
      ]
    }
  ];

  const filteredPillars = dqlPillars.filter(
    (p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.points.some((pt) => pt.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="my-8 rounded-3xl border border-indigo-200/90 bg-gradient-to-br from-slate-50/60 via-white to-blue-50/30 p-4 sm:p-7 md:p-8 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-200/70 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-md shadow-indigo-600/25 shrink-0">
            <BookOpen className="h-6 w-6" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                Dashboard Tóm Tắt Trọng Tâm Truy Vấn DQL (SELECT)
              </h3>
              <span className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-semibold text-indigo-800 border border-indigo-200 font-mono">
                6 Trụ Cột DQL
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Tổng hợp 6 trụ cột truy vấn dữ liệu từ cơ bản đến nâng cao trong T-SQL chuẩn hóa
            </p>
          </div>
        </div>

        {/* Quick Search */}
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Tìm kiếm chủ đề DQL..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-xl border border-gray-300 bg-white py-2 pl-9 pr-3 text-xs placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 shadow-xs"
          />
        </div>
      </div>

      {/* 6 Pillars Bento Grid: Responsive 1 col mobile, 2 cols tablet/laptop, 3 cols desktop */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3.5 sm:gap-4">
        {filteredPillars.map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.id}
              className={`flex flex-col justify-between rounded-2xl border ${p.border} bg-white p-4 sm:p-5 shadow-xs hover:shadow-md transition-all hover:-translate-y-0.5`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className={`flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br ${p.color} text-white shadow-xs shrink-0`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${p.bgBadge}`}>
                    {p.tag}
                  </span>
                </div>

                <h4 className="text-xs sm:text-sm font-bold text-gray-900 leading-snug">
                  {p.title}
                </h4>

                <ul className="mt-3 space-y-2 text-xs text-gray-600 leading-relaxed font-sans">
                  {p.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-indigo-500 font-bold mt-0.5">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Cheat Banner */}
      <div className="mt-6 rounded-2xl border border-indigo-300/90 bg-gradient-to-r from-indigo-500/10 via-indigo-50/70 to-blue-50/40 p-4 sm:p-5 shadow-xs">
        <div className="flex items-center gap-2 text-indigo-950 font-bold text-xs uppercase tracking-wider mb-3">
          <Sparkles className="h-4 w-4 text-indigo-600" />
          3 Quy Tắc Vàng Cần Thuộc Lòng Trong Phòng Thi:
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 text-xs text-indigo-950 font-medium">
          <div className="rounded-xl bg-white/90 p-3 border border-indigo-200 shadow-2xs">
            <strong className="text-indigo-900 block mb-1">1. WHERE vs HAVING:</strong>
            WHERE không được chứa hàm kết hợp; HAVING chuyên dùng lọc nhóm sau GROUP BY.
          </div>
          <div className="rounded-xl bg-white/90 p-3 border border-indigo-200 shadow-2xs">
            <strong className="text-indigo-900 block mb-1">2. Cơ chế LEFT JOIN:</strong>
            Bảng bên trái luôn giữ nguyên dòng; bên phải không có đối tác thì tự động điền <code>NULL</code>.
          </div>
          <div className="rounded-xl bg-white/90 p-3 border border-indigo-200 shadow-2xs">
            <strong className="text-indigo-900 block mb-1">3. Correlated Subquery:</strong>
            Chạy lặp lại cho từng dòng của cha; thường dùng với toán tử <code>EXISTS</code> để tối ưu tốc độ.
          </div>
        </div>
      </div>
    </div>
  );
}
