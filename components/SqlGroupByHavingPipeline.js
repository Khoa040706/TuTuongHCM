"use client";
import React, { useState } from "react";
import { Layers, ArrowRight, CheckCircle2, Filter, Calculator, Terminal, RotateCcw } from "lucide-react";

export default function SqlGroupByHavingPipeline() {
  const [currentStep, setCurrentStep] = useState(1);

  const pipelineSteps = [
    {
      step: 1,
      name: "Bước 1: Mệnh đề FROM & WHERE",
      title: "Lọc các bản ghi thô ban đầu theo điều kiện WHERE",
      desc: "Hệ thống quét bảng NhanVien và loại bỏ ngay các nhân viên không thỏa mãn điều kiện WHERE luong >= 20000 trước khi đưa vào gom nhóm.",
      dataView: [
        { manv: "NV01", tennv: "Trường", phong: 1, luong: 25000, keep: true },
        { manv: "NV02", tennv: "Hương", phong: 2, luong: 32000, keep: true },
        { manv: "NV03", tennv: "Nam", phong: 1, luong: 18000, keep: false, note: "Bị lọc bỏ vì lương < 20000" },
        { manv: "NV04", tennv: "Bảo", phong: 2, luong: 45000, keep: true },
        { manv: "NV05", tennv: "Thảo", phong: 3, luong: 28000, keep: true }
      ]
    },
    {
      step: 2,
      name: "Bước 2: Mệnh đề GROUP BY",
      title: "Phân chia các dòng còn lại thành từng Cụm Nhóm theo cột gom nhóm",
      desc: "Các dòng dữ liệu có cùng mã 'phong' được gom lại thành 1 nhóm chung.",
      groupsView: [
        { phong: "Phòng 1", members: ["NV01 (25.000)"] },
        { phong: "Phòng 2", members: ["NV02 (32.000)", "NV04 (45.000)"] },
        { phong: "Phòng 3", members: ["NV05 (28.000)"] }
      ]
    },
    {
      step: 3,
      name: "Bước 3: Tính toán Hàm Kết Hợp (Aggregates)",
      title: "Tính toán COUNT(*), SUM(luong), AVG(luong) cho từng nhóm",
      desc: "Áp dụng các hàm thống kê trên tập hợp bản ghi của từng nhóm riêng biệt.",
      groupsView: [
        { phong: "Phòng 1", sl: 1, tongLuong: 25000 },
        { phong: "Phòng 2", sl: 2, tongLuong: 77000 },
        { phong: "Phòng 3", sl: 1, tongLuong: 28000 }
      ]
    },
    {
      step: 4,
      name: "Bước 4: Mệnh đề HAVING",
      title: "Lọc bỏ các nhóm không thỏa mãn điều kiện HAVING",
      desc: "Mệnh đề HAVING SUM(luong) > 50000 loại bỏ Phòng 1 (25k) và Phòng 3 (28k), chỉ giữ lại Phòng 2 (77k).",
      groupsView: [
        { phong: "Phòng 1", tongLuong: 25000, pass: false, reason: "Bị loại (25.000 <= 50.000)" },
        { phong: "Phòng 2", tongLuong: 77000, pass: true, reason: "ĐẠT CHUẨN (77.000 > 50.000)" },
        { phong: "Phòng 3", tongLuong: 28000, pass: false, reason: "Bị loại (28.000 <= 50.000)" }
      ]
    },
    {
      step: 5,
      name: "Bước 5: Mệnh đề SELECT & ORDER BY",
      title: "Trích xuất danh sách cột kết quả cuối cùng",
      desc: "Chỉ hiển thị các cột được chỉ định trong SELECT cho những nhóm đã vượt qua vòng lọc HAVING.",
      finalResult: [
        { "Mã Phòng": "Phòng 2", "Số Lượng NV": 2, "Tổng Lương (VNĐ)": "77.000" }
      ]
    }
  ];

  const curr = pipelineSteps[currentStep - 1];

  return (
    <div className="my-8 rounded-2xl border border-teal-200/80 bg-gradient-to-br from-teal-50/40 via-white to-emerald-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-teal-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-600 text-white shadow-md shadow-teal-600/20">
            <Layers className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">SqlGroupByHavingPipeline</h3>
              <span className="rounded-full bg-teal-100 px-2.5 py-0.5 text-xs font-semibold text-teal-800 border border-teal-200">
                5-Stage Execution Flow
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Mô phỏng 5 bước thực thi logic thực tế trong bộ vi xử lý truy vấn của SQL Server
            </p>
          </div>
        </div>

        <button
          onClick={() => setCurrentStep(1)}
          className="flex items-center gap-1.5 rounded-xl bg-gray-100 px-3.5 py-1.5 text-xs font-bold text-gray-700 hover:bg-gray-200 transition-all border border-gray-300"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          Reset Về Bước 1
        </button>
      </div>

      {/* Query Under Test */}
      <div className="mt-5 rounded-xl border border-gray-800 bg-gray-950 p-4 text-white shadow-lg">
        <div className="flex items-center justify-between border-b border-gray-800 pb-2">
          <div className="flex items-center gap-2">
            <Terminal className="h-4 w-4 text-teal-400" />
            <span className="font-mono text-xs font-bold text-gray-300">Target Query Being Executed</span>
          </div>
          <span className="font-mono text-[10px] text-teal-300">LOGICAL PIPELINE</span>
        </div>
        <pre className="mt-2 font-mono text-xs text-amber-300 leading-relaxed overflow-x-auto whitespace-pre-wrap">
{`SELECT phong, COUNT(*) AS SL_NV, SUM(luong) AS TONG_LUONG
FROM NhanVien
WHERE luong >= 20000
GROUP BY phong
HAVING SUM(luong) > 50000;`}
        </pre>
      </div>

      {/* 5-Step Visual Stepper */}
      <div className="mt-6 grid grid-cols-5 gap-2">
        {pipelineSteps.map((s) => (
          <button
            key={s.step}
            onClick={() => setCurrentStep(s.step)}
            className={`flex flex-col items-center justify-center rounded-xl p-2.5 text-center transition-all border ${
              currentStep === s.step
                ? "bg-teal-600 text-white border-teal-700 shadow-md font-bold"
                : currentStep > s.step
                ? "bg-teal-50 text-teal-900 border-teal-200 font-medium"
                : "bg-white text-gray-600 border-gray-200 opacity-60"
            }`}
          >
            <span className="text-[11px] font-mono">GIAI ĐOẠN {s.step}</span>
            <span className="text-xs truncate max-w-full mt-0.5">{s.name.split(":")[1]}</span>
          </button>
        ))}
      </div>

      {/* Stage Detail Box */}
      <div className="mt-5 rounded-xl border border-teal-200 bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between border-b border-gray-100 pb-3">
          <h4 className="text-sm font-bold text-teal-950">{curr.name}: {curr.title}</h4>
          <span className="rounded bg-teal-100 px-2.5 py-0.5 font-mono text-xs font-bold text-teal-800">
            Stage {currentStep} of 5
          </span>
        </div>

        <p className="mt-3 text-xs text-gray-700 leading-relaxed">{curr.desc}</p>

        {/* Content Render based on current step */}
        <div className="mt-4">
          {currentStep === 1 && (
            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono text-xs">
                <thead className="bg-gray-100 border-b border-gray-200">
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
                    <tr key={i} className={r.keep ? "bg-emerald-50/60" : "bg-red-50/60 opacity-50 line-through"}>
                      <td className="p-2.5">{r.manv}</td>
                      <td className="p-2.5">{r.tennv}</td>
                      <td className="p-2.5">{r.phong}</td>
                      <td className="p-2.5">{r.luong.toLocaleString("vi-VN")}</td>
                      <td className="p-2.5 text-center font-sans font-bold text-[11px]">
                        {r.keep ? (
                          <span className="text-emerald-700">✓ Đạt chuẩn (&ge; 20.000)</span>
                        ) : (
                          <span className="text-red-700">✗ {r.note}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {currentStep === 2 && (
            <div className="grid gap-3 sm:grid-cols-3">
              {curr.groupsView.map((g, i) => (
                <div key={i} className="rounded-xl border border-teal-200 bg-teal-50/50 p-3.5">
                  <div className="font-mono text-xs font-bold text-teal-950 border-b border-teal-200 pb-1.5">
                    {g.phong}
                  </div>
                  <ul className="mt-2 space-y-1 text-xs text-gray-700 font-mono">
                    {g.members.map((m, mIdx) => (
                      <li key={mIdx}>• {m}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {currentStep === 3 && (
            <div className="grid gap-3 sm:grid-cols-3">
              {curr.groupsView.map((g, i) => (
                <div key={i} className="rounded-xl border border-teal-200 bg-white p-3.5 shadow-sm font-mono text-xs">
                  <div className="font-bold text-teal-950">{g.phong}</div>
                  <div className="mt-2 text-gray-600">COUNT(*): <strong>{g.sl} nhân viên</strong></div>
                  <div className="mt-1 text-gray-600">SUM(luong): <strong>{g.tongLuong.toLocaleString("vi-VN")} VNĐ</strong></div>
                </div>
              ))}
            </div>
          )}

          {currentStep === 4 && (
            <div className="grid gap-3 sm:grid-cols-3">
              {curr.groupsView.map((g, i) => (
                <div
                  key={i}
                  className={`rounded-xl border p-3.5 font-mono text-xs ${
                    g.pass ? "border-emerald-300 bg-emerald-50 text-emerald-950" : "border-red-200 bg-red-50 text-red-950 opacity-60"
                  }`}
                >
                  <div className="font-bold">{g.phong}</div>
                  <div className="mt-2">Tổng Lương: <strong>{g.tongLuong.toLocaleString("vi-VN")} VNĐ</strong></div>
                  <div className="mt-2 font-sans font-bold text-[11px]">{g.reason}</div>
                </div>
              ))}
            </div>
          )}

          {currentStep === 5 && (
            <div className="rounded-xl border border-emerald-300 bg-emerald-50/50 p-4">
              <div className="text-xs font-bold text-emerald-950 mb-2">BẢNG KẾT QUẢ CUỐI CÙNG TRẢ VỀ CHO CLIENT:</div>
              <table className="w-full text-left font-mono text-xs bg-white rounded-lg overflow-hidden border border-emerald-200">
                <thead className="bg-emerald-100 text-emerald-950">
                  <tr>
                    <th className="p-3">phong</th>
                    <th className="p-3">SL_NV (COUNT(*))</th>
                    <th className="p-3">TONG_LUONG (SUM(luong))</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 font-bold text-emerald-900">2</td>
                    <td className="p-3">2</td>
                    <td className="p-3 font-bold text-emerald-900">77.000 VNĐ</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Next Step Action Button */}
        <div className="mt-5 flex justify-end">
          {currentStep < 5 ? (
            <button
              onClick={() => setCurrentStep(currentStep + 1)}
              className="flex items-center gap-1.5 rounded-xl bg-teal-600 px-4 py-2 text-xs font-bold text-white shadow-md hover:bg-teal-700 transition-all"
            >
              <span>Xem Bước Tiếp Theo ({currentStep + 1}/5)</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          ) : (
            <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1.5 rounded-lg border border-emerald-200">
              ✓ Đã hoàn tất toàn bộ chu trình 5 bước!
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
