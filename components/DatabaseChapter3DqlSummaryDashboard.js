"use client";
import React from "react";
import { Terminal, Search, GitMerge, GitBranch, Calculator, Layers, Sparkles, BookOpen } from "lucide-react";

export default function DatabaseChapter3DqlSummaryDashboard() {
  const dqlPillars = [
    {
      id: 1,
      title: "1. Cú Pháp SELECT & DISTINCT",
      icon: Terminal,
      color: "from-blue-600 to-indigo-600",
      points: [
        "SELECT [DISTINCT] liệt kê các cột cần trích xuất (tương ứng phép chiếu π).",
        "WHERE chỉ định điều kiện lọc từng dòng (tương ứng phép chọn σ).",
        "ORDER BY sắp xếp kết quả: ASC (tăng dần mặc định), DESC (giảm dần)."
      ]
    },
    {
      id: 2,
      title: "2. Toán Tử LIKE & BETWEEN",
      icon: Search,
      color: "from-amber-600 to-orange-600",
      points: [
        "BETWEEN a AND b lấy đoạn đóng bao gồm cả 2 đầu mút a và b.",
        "Ký tự đại diện LIKE: % (chuỗi bất kỳ), _ (1 ký tự), [a-f] (trong tập), [^a-f] (loại trừ).",
        "Kỹ thuật escape: LIKE 'ab\\%cd%' để tìm ký tự % thật trong văn bản."
      ]
    },
    {
      id: 3,
      title: "3. Bộ Tứ Phép JOIN Chuẩn SQL-92",
      icon: GitMerge,
      color: "from-cyan-600 to-teal-600",
      points: [
        "INNER JOIN: Chỉ giữ lại các dòng khớp khóa ngoại giữa 2 bảng.",
        "LEFT JOIN: Giữ toàn bộ bảng Trái, điền NULL nếu Phải không có.",
        "RIGHT JOIN: Giữ toàn bộ bảng Phải; FULL JOIN: Giữ toàn bộ cả hai bên."
      ]
    },
    {
      id: 4,
      title: "4. Truy Vấn Lồng IN vs EXISTS",
      icon: GitBranch,
      color: "from-purple-600 to-fuchsia-600",
      points: [
        "Lồng phân cấp (Uncorrelated): Con chạy 1 lần trước sinh ra tập hợp cho IN.",
        "Lồng tương quan (Correlated): Con tham chiếu cha, chạy lặp lại cho từng dòng của cha với EXISTS.",
        "EXISTS trả về TRUE/FALSE, tối ưu tốc độ vì dừng ngay khi tìm thấy dòng đầu tiên."
      ]
    },
    {
      id: 5,
      title: "5. Hàm Kết Hợp & Bẫy NULL",
      icon: Calculator,
      color: "from-rose-600 to-red-600",
      points: [
        "COUNT(*): Đếm toàn bộ dòng trong bảng (kể cả dòng có chứa NULL).",
        "COUNT(cột): Tự động bỏ qua các dòng có giá trị NULL.",
        "AVG(cột): Chỉ chia cho số dòng khác NULL (dùng ISNULL(cột, 0) nếu muốn chia tổng dòng)."
      ]
    },
    {
      id: 6,
      title: "6. GROUP BY, HAVING & 5 Bước Logic",
      icon: Layers,
      color: "from-emerald-600 to-green-600",
      points: [
        "Quy tắc vàng: Mọi cột trong SELECT bắt buộc phải có trong GROUP BY (trừ hàm kết hợp).",
        "WHERE lọc từng dòng TRƯỚC khi nhóm, HAVING lọc TRÊN NHÓM sau khi gom.",
        "Chu trình 5 bước: FROM/WHERE -> GROUP BY -> Hàm kết hợp -> HAVING -> SELECT."
      ]
    }
  ];

  return (
    <div className="my-8 rounded-2xl border border-gray-200 bg-gradient-to-br from-slate-50 via-white to-gray-50 p-6 shadow-xl">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-gray-200 pb-5">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700 border border-indigo-200 shadow-sm">
          <BookOpen className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">
            Dashboard Tóm Tắt Trọng Tâm Kiến Thức Truy Vấn DQL (SELECT)
          </h3>
          <p className="text-xs text-gray-600 mt-0.5">
            Tổng hợp 6 trụ cột truy vấn dữ liệu từ cơ bản đến nâng cao trong T-SQL
          </p>
        </div>
      </div>

      {/* 6 Pillars Grid */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {dqlPillars.map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.id}
              className="flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center gap-2.5">
                  <div className={`flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br ${p.color} text-white shadow-sm shrink-0`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <h4 className="text-xs font-bold text-gray-900 leading-tight">{p.title}</h4>
                </div>

                <ul className="mt-3.5 space-y-2 text-xs text-gray-600 leading-relaxed">
                  {p.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-indigo-500 font-bold">•</span>
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
      <div className="mt-6 rounded-xl border border-indigo-300 bg-gradient-to-r from-indigo-500/10 via-indigo-50 to-blue-50/20 p-4">
        <div className="flex items-center gap-2 text-indigo-900 font-bold text-xs uppercase tracking-wider mb-2">
          <Sparkles className="h-4 w-4 text-indigo-600" />
          Quy Tắc Vàng Cần Thuộc Lòng Trong Phòng Thi:
        </div>
        <div className="grid gap-2 sm:grid-cols-3 text-xs text-indigo-950 font-medium">
          <div className="rounded-lg bg-white/80 p-2.5 border border-indigo-200">
            <strong>1. WHERE vs HAVING:</strong> WHERE không được chứa hàm kết hợp; HAVING chuyên lọc nhóm sau GROUP BY.
          </div>
          <div className="rounded-lg bg-white/80 p-2.5 border border-indigo-200">
            <strong>2. LEFT JOIN:</strong> Bảng bên trái giữ nguyên dòng; bên phải không có thì điền <code>NULL</code>.
          </div>
          <div className="rounded-lg bg-white/80 p-2.5 border border-indigo-200">
            <strong>3. Correlated Subquery:</strong> Chạy lặp lại cho từng dòng của cha; thường dùng với <code>EXISTS</code>.
          </div>
        </div>
      </div>
    </div>
  );
}
