"use client";

import React, { useState } from "react";
import {
  Layers,
  ArrowRight,
  CheckCircle2,
  Filter,
  Calculator,
  Terminal,
  RotateCcw,
  Zap,
  TrendingDown,
  Sparkles
} from "lucide-react";

export default function SqlGroupByHavingPipeline() {
  const [currentStep, setCurrentStep] = useState(1);

  const pipelineSteps = [
    {
      step: 1,
      badge: "Lọc Hàng Thô",
      name: "Bước 1: Mệnh đề FROM & WHERE",
      title: "Lọc các bản ghi thô ban đầu theo điều kiện WHERE",
      desc: "Hệ thống quét bảng NhanVien và loại bỏ ngay các nhân viên không thỏa mãn điều kiện WHERE luong >= 20000 trước khi đưa vào gom nhóm.",
      flowStat: "5 dòng -> còn 4 dòng",
      dataView: [
        { manv: "NV01", tennv: "Trường", phong: 1, luong: 25000, keep: true },
        { manv: "NV02", tennv: "Hương", phong: 2, luong: 32000, keep: true },
        { manv: "NV03", tennv: "Nam", phong: 1, luong: 18000, keep: false, note: "Bị loại (18.000 < 20.000)" },
        { manv: "NV04", tennv: "Bảo", phong: 2, luong: 45000, keep: true },
        { manv: "NV05", tennv: "Thảo", phong: 3, luong: 28000, keep: true }
      ]
    },
    {
      step: 2,
      badge: "Phân Cụm",
      name: "Bước 2: Mệnh đề GROUP BY",
      title: "Phân chia các dòng còn lại thành từng Cụm Nhóm theo cột gom nhóm",
      desc: "Các dòng dữ liệu có cùng mã 'phong' được gom lại thành 1 nhóm đại diện duy nhất.",
      flowStat: "4 dòng -> 3 nhóm",
      groupsView: [
        { phong: "Phòng 1", members: ["NV01 (25.000 VNĐ)"] },
        { phong: "Phòng 2", members: ["NV02 (32.000 VNĐ)", "NV04 (45.000 VNĐ)"] },
        { phong: "Phòng 3", members: ["NV05 (28.000 VNĐ)"] }
      ]
    },
    {
      step: 3,
      badge: "Hàm Kết Hợp",
      name: "Bước 3: Tính toán Hàm Kết Hợp (Aggregates)",
      title: "Tính toán COUNT(*), SUM(luong), AVG(luong) cho từng nhóm",
      desc: "Áp dụng các hàm thống kê trên tập hợp bản ghi của từng nhóm riêng biệt.",
      flowStat: "3 nhóm tính toán",
      groupsView: [
        { phong: "Phòng 1", sl: 1, tongLuong: 25000 },
        { phong: "Phòng 2", sl: 2, tongLuong: 77000 },
        { phong: "Phòng 3", sl: 1, tongLuong: 28000 }
      ]
    },
    {
      step: 4,
      badge: "Lọc Nhóm",
      name: "Bước 4: Mệnh đề HAVING",
      title: "Lọc bỏ các nhóm không thỏa mãn điều kiện HAVING",
      desc: "Mệnh đề HAVING SUM(luong) > 50000 loại bỏ Phòng 1 (25k) và Phòng 3 (28k), chỉ giữ lại duy nhất Phòng 2 (77k).",
      flowStat: "3 nhóm -> còn 1 nhóm",
      groupsView: [
        { phong: "Phòng 1", tongLuong: 25000, pass: false, reason: "Bị loại (25.000 <= 50.000)" },
        { phong: "Phòng 2", tongLuong: 77000, pass: true, reason: "ĐẠT CHUẨN (77.000 > 50.000)" },
        { phong: "Phòng 3", tongLuong: 28000, pass: false, reason: "Bị loại (28.000 <= 50.000)" }
      ]
    },
    {
      step: 5,
      badge: "Xuất Kết Quả",
      name: "Bước 5: Mệnh đề SELECT & ORDER BY",
      title: "Trích xuất danh sách cột kết quả cuối cùng",
      desc: "Chỉ hiển thị các cột được chỉ định trong SELECT cho những nhóm đã vượt qua vòng lọc HAVING.",
      flowStat: "1 dòng kết quả",
      finalResult: [
        { "Mã Phòng": "2", "SL_NV (COUNT(*))": 2, "TONG_LUONG (SUM(luong))": "77.000 VNĐ" }
      ]
    }
  ];

  const curr = pipelineSteps[currentStep - 1];

  return (
    <div className="my-8 rounded-3xl border border-teal-200/90 bg-gradient-to-br from-teal-50/50 via-white to-emerald-50/30 p-4 sm:p-7 md:p-8 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-teal-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-600 text-white shadow-md shadow-teal-600/25 shrink-0">
            <Layers className="h-6 w-6" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                SqlGroupByHavingPipeline
              </h3>
              <span className="rounded-full bg-teal-100 px-2.5 py-0.5 text-xs font-semibold text-teal-800 border border-teal-200 font-mono">
                Pipeline 5 Bước Xử Lý
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Mô phỏng 5 bước thực thi logic thực tế trong bộ vi xử lý truy vấn của SQL Server
            </p>
          </div>
        </div>

        <button
          onClick={() => setCurrentStep(1)}
          className="flex items-center gap-1.5 rounded-xl bg-white px-3.5 py-2 text-xs font-bold text-gray-700 hover:bg-gray-50 transition-all border border-gray-300 shadow-xs active:scale-95"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          <span>Reset Bước 1</span>
        </button>
      </div>

      {/* Query Under Test */}
      <div className="mt-5 rounded-2xl border border-gray-800 bg-gray-950 p-4 sm:p-5 text-white shadow-lg overflow-hidden">
        <div className="flex items-center justify-between border-b border-gray-800 pb-2.5">
          <div className="flex items-center gap-2">
            <Terminal className="h-4 w-4 text-teal-400" />
            <span className="font-mono text-xs font-bold text-gray-300">Target Query Being Executed</span>
          </div>
          <span className="font-mono text-[10px] text-teal-300 bg-teal-950/70 px-2 py-0.5 rounded border border-teal-800 font-semibold">
            T-SQL LOGICAL PIPELINE
          </span>
        </div>
        <pre className="mt-3 font-mono text-xs text-amber-300 leading-relaxed overflow-x-auto whitespace-pre max-w-full thin-scrollbar py-1">
{`SELECT phong, COUNT(*) AS SL_NV, SUM(luong) AS TONG_LUONG
FROM NhanVien
WHERE luong >= 20000
GROUP BY phong
HAVING SUM(luong) > 50000;`}
        </pre>
      </div>

      {/* 5-Step Responsive Stepper: 2 cols on mobile, 3 cols tablet/laptop, 5 cols wide desktop */}
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-2 sm:gap-2.5">
        {pipelineSteps.map((s) => {
          const isSelected = currentStep === s.step;
          const isDone = currentStep > s.step;
          return (
            <button
              key={s.step}
              onClick={() => setCurrentStep(s.step)}
              className={`flex flex-col justify-between rounded-2xl p-2.5 sm:p-3 text-left transition-all border ${
                isSelected
                  ? "bg-teal-600 text-white border-teal-700 shadow-md ring-2 ring-teal-400/30 font-bold"
                  : isDone
                  ? "bg-teal-50 text-teal-900 border-teal-200 hover:bg-teal-100/70 font-medium"
                  : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50 opacity-70"
              }`}
            >
              <div className="flex items-center justify-between w-full mb-1">
                <span className={`text-[10px] font-mono font-bold ${isSelected ? "text-teal-100" : "text-teal-700"}`}>
                  BƯỚC {s.step}
                </span>
                <span className={`text-[9px] px-1.5 py-0.2 rounded font-semibold ${
                  isSelected ? "bg-teal-700 text-teal-100" : "bg-gray-100 text-gray-600"
                }`}>
                  {s.badge}
                </span>
              </div>
              <div className="text-xs truncate w-full mt-0.5">
                {s.name.split(":")[1]?.trim()}
              </div>
              <div className={`text-[10px] mt-1 font-mono truncate ${isSelected ? "text-teal-200" : "text-gray-400"}`}>
                {s.flowStat}
              </div>
            </button>
          );
        })}
      </div>

      {/* Stage Detail Box */}
      <div className="mt-5 rounded-2xl border border-teal-200/90 bg-white p-4 sm:p-6 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 pb-3">
          <div>
            <h4 className="text-sm sm:text-base font-bold text-teal-950 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-teal-100 text-teal-800 text-xs flex items-center justify-center font-mono">
                {currentStep}
              </span>
              {curr.title}
            </h4>
            <p className="mt-1 text-xs text-gray-600 leading-relaxed max-w-2xl">{curr.desc}</p>
          </div>
          <span className="rounded-full bg-teal-100 px-3 py-1 font-mono text-xs font-bold text-teal-800 border border-teal-200 shrink-0">
            Giai đoạn {currentStep} / 5
          </span>
        </div>

        {/* Content Render based on current step with guaranteed overflow-x-auto */}
        <div className="mt-4">
          {currentStep === 1 && (
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-xs max-w-full thin-scrollbar">
              <table className="w-full text-left font-mono text-xs min-w-[500px]">
                <thead className="bg-gray-100 border-b border-gray-200 text-gray-700">
                  <tr>
                    <th className="p-2.5">Mã NV</th>
                    <th className="p-2.5">Tên NV</th>
                    <th className="p-2.5">Phòng</th>
                    <th className="p-2.5">Lương</th>
                    <th className="p-2.5 text-center">Kết Quả Lọc WHERE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {curr.dataView.map((r, i) => (
                    <tr key={i} className={r.keep ? "bg-emerald-50/60" : "bg-red-50/60 opacity-60 line-through"}>
                      <td className="p-2.5 font-bold text-teal-800">{r.manv}</td>
                      <td className="p-2.5">{r.tennv}</td>
                      <td className="p-2.5">{r.phong}</td>
                      <td className="p-2.5">{r.luong.toLocaleString("vi-VN")} VNĐ</td>
                      <td className="p-2.5 text-center font-sans font-bold text-[11px]">
                        {r.keep ? (
                          <span className="text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded">✓ Đạt chuẩn (&ge; 20.000)</span>
                        ) : (
                          <span className="text-red-700 bg-red-100/70 px-2 py-0.5 rounded">✗ {r.note}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {currentStep === 2 && (
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {curr.groupsView.map((g, i) => (
                <div key={i} className="rounded-xl border border-teal-200 bg-teal-50/60 p-3.5">
                  <div className="font-mono text-xs font-bold text-teal-950 border-b border-teal-200 pb-1.5 flex items-center justify-between">
                    <span>{g.phong}</span>
                    <span className="text-[10px] bg-teal-200/80 text-teal-900 px-1.5 py-0.5 rounded font-semibold">1 Nhóm</span>
                  </div>
                  <ul className="mt-2 space-y-1 text-xs text-gray-700 font-mono">
                    {g.members.map((m, mIdx) => (
                      <li key={mIdx} className="flex items-center gap-1.5">
                        <span className="text-teal-600 font-bold">•</span>
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {currentStep === 3 && (
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {curr.groupsView.map((g, i) => (
                <div key={i} className="rounded-xl border border-teal-200 bg-white p-3.5 shadow-xs font-mono text-xs">
                  <div className="font-bold text-teal-950 border-b border-gray-100 pb-1.5">{g.phong}</div>
                  <div className="mt-2 text-gray-600">COUNT(*): <strong className="text-teal-800">{g.sl} nhân viên</strong></div>
                  <div className="mt-1 text-gray-600">SUM(luong): <strong className="text-emerald-700">{g.tongLuong.toLocaleString("vi-VN")} VNĐ</strong></div>
                </div>
              ))}
            </div>
          )}

          {currentStep === 4 && (
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {curr.groupsView.map((g, i) => (
                <div
                  key={i}
                  className={`rounded-xl border p-3.5 font-mono text-xs ${
                    g.pass ? "border-emerald-300 bg-emerald-50 text-emerald-950 shadow-xs" : "border-red-200 bg-red-50 text-red-950 opacity-60"
                  }`}
                >
                  <div className="font-bold flex items-center justify-between">
                    <span>{g.phong}</span>
                    <span className={`text-[10px] font-sans font-bold px-1.5 py-0.5 rounded ${
                      g.pass ? "bg-emerald-200 text-emerald-900" : "bg-red-200 text-red-900"
                    }`}>
                      {g.pass ? "PASS" : "FAIL"}
                    </span>
                  </div>
                  <div className="mt-2">Tổng Lương: <strong>{g.tongLuong.toLocaleString("vi-VN")} VNĐ</strong></div>
                  <div className="mt-2 font-sans font-bold text-[11px]">{g.reason}</div>
                </div>
              ))}
            </div>
          )}

          {currentStep === 5 && (
            <div className="rounded-2xl border border-emerald-300 bg-emerald-50/50 p-4">
              <div className="text-xs font-bold text-emerald-950 mb-2 flex items-center gap-1.5 font-mono">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                BẢNG KẾT QUẢ CUỐI CÙNG TRẢ VỀ CHO CLIENT (ĐÃ BỌC OVERFLOW AN TOÀN):
              </div>
              <div className="overflow-x-auto rounded-xl border border-emerald-200 bg-white shadow-xs max-w-full thin-scrollbar">
                <table className="w-full text-left font-mono text-xs min-w-[360px]">
                  <thead className="bg-emerald-100 text-emerald-950">
                    <tr>
                      <th className="p-3">phong</th>
                      <th className="p-3">SL_NV (COUNT(*))</th>
                      <th className="p-3">TONG_LUONG (SUM(luong))</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-emerald-50/40">
                      <td className="p-3 font-bold text-emerald-900">2</td>
                      <td className="p-3 font-semibold">2</td>
                      <td className="p-3 font-bold text-emerald-900">77.000 VNĐ</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* Stepper Navigation Footer */}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-gray-100">
          <div className="text-xs text-gray-500 font-mono">
            {currentStep < 5 ? `Kế tiếp: ${pipelineSteps[currentStep].badge}` : "Hoàn tất chu trình lọc dữ liệu"}
          </div>

          <div className="flex items-center gap-2">
            {currentStep > 1 && (
              <button
                onClick={() => setCurrentStep(currentStep - 1)}
                className="px-3 py-1.5 rounded-xl border border-gray-200 bg-white text-xs font-bold text-gray-700 hover:bg-gray-50 transition-all"
              >
                &larr; Bước trước
              </button>
            )}
            {currentStep < 5 ? (
              <button
                onClick={() => setCurrentStep(currentStep + 1)}
                className="flex items-center gap-1.5 rounded-xl bg-teal-600 px-4 py-2 text-xs font-bold text-white shadow-md hover:bg-teal-700 transition-all active:scale-95"
              >
                <span>Xem Bước {currentStep + 1} / 5</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1.5 rounded-xl border border-emerald-200 flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5" />
                Hoàn tất chu trình 5 bước!
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
