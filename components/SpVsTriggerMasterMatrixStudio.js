"use client";
import React, { useState } from "react";
import { Layers, Database, Zap, Search, CheckCircle2, ShieldCheck, Terminal, Cpu } from "lucide-react";

export default function SpVsTriggerMasterMatrixStudio() {
  const [searchFilter, setSearchFilter] = useState("");

  const matrixData = [
    {
      id: 1,
      criteria: "Cách kích hoạt",
      sp: "Chủ động, dùng lệnh EXEC",
      trigger: "Tự động, khi có insert/update/delete",
      highlight: "trigger"
    },
    {
      id: 2,
      criteria: "Có tham số truyền vào không",
      sp: "Có (Input, Output)",
      trigger: "Không (dùng bảng ảo inserted / deleted)",
      highlight: "sp"
    },
    {
      id: 3,
      criteria: "Trả kết quả",
      sp: "OUTPUT (nhiều giá trị) hoặc RETURN (1 số nguyên)",
      trigger: "Không trả trực tiếp; xử lý qua Commit/Rollback tran",
      highlight: "neutral"
    },
    {
      id: 4,
      criteria: "Gắn với đối tượng",
      sp: "Độc lập trong CSDL",
      trigger: "Gắn với 1 bảng (hoặc view với Instead of)",
      highlight: "neutral"
    },
    {
      id: 5,
      criteria: "Số loại phân chia",
      sp: "3 loại: Hệ thống, Mở rộng, Người dùng",
      trigger: "5 loại: Insert, Delete, Update, Instead of, After",
      highlight: "neutral"
    },
    {
      id: 6,
      criteria: "Mã hóa bảo mật",
      sp: "Hỗ trợ WITH ENCRYPTION",
      trigger: "Hỗ trợ WITH ENCRYPTION",
      highlight: "both"
    },
    {
      id: 7,
      criteria: "Xem nội dung mã nguồn",
      sp: "Lệnh hệ thống sp_helptext",
      trigger: "Lệnh sp_helptext hoặc giao diện GUI SSMS",
      highlight: "both"
    },
    {
      id: 8,
      criteria: "Xóa / Sửa đổi",
      sp: "Lệnh DROP / ALTER",
      trigger: "Lệnh DROP / ALTER",
      highlight: "both"
    },
    {
      id: 9,
      criteria: "Tắt / Bật tạm thời",
      sp: "Không có tính năng này",
      trigger: "Có lệnh disable / enable trigger",
      highlight: "trigger"
    },
    {
      id: 10,
      criteria: "Dùng khi nào (Use Case)",
      sp: "Xử lý theo yêu cầu, có thể tái sử dụng nhiều nơi",
      trigger: "Đảm bảo ràng buộc / đồng bộ dữ liệu tự động, không cần gọi thủ công",
      highlight: "neutral"
    }
  ];

  const filtered = matrixData.filter(
    (item) =>
      item.criteria.toLowerCase().includes(searchFilter.toLowerCase()) ||
      item.sp.toLowerCase().includes(searchFilter.toLowerCase()) ||
      item.trigger.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 md:p-7 text-white my-6 shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2 text-purple-400 text-xs font-mono font-bold uppercase mb-1">
            <Layers className="w-4 h-4" />
            <span>Master Comparison Matrix (10 Tiêu Chí Chuẩn)</span>
          </div>
          <h3 className="text-lg md:text-xl font-bold text-slate-100">
            Tổng Kết Toàn Diện: Đối Chiếu Stored Procedure vs Bẫy Sự Kiện Trigger
          </h3>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            placeholder="Lọc tiêu chí so sánh..."
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            className="bg-slate-950 border border-slate-700 rounded-xl pl-8 pr-3 py-1.5 text-xs font-sans text-white focus:outline-none focus:border-purple-500 w-56"
          />
        </div>
      </div>

      <p className="text-xs md:text-sm text-slate-300 mb-5 leading-relaxed">
        Bảng tổng kết 10 tiêu chí đối chiếu chuẩn xác 100% tài liệu giáo trình giữa hai đối tượng lập trình quan trọng nhất phía Database Server:
      </p>

      {/* Cyber Grid Table */}
      <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950">
        <table className="w-full text-left text-xs font-sans">
          <thead>
            <tr className="border-b border-slate-800 bg-slate-900/90 text-slate-400 font-mono text-[11px] uppercase">
              <th className="py-3 px-3 w-10 text-center">STT</th>
              <th className="py-3 px-3 w-1/4">Đặc điểm đối chiếu</th>
              <th className="py-3 px-4 w-1/3 text-purple-300">
                <div className="flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-purple-400" />
                  <span>Stored Procedure (SP)</span>
                </div>
              </th>
              <th className="py-3 px-4 w-1/3 text-amber-300">
                <div className="flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span>Bẫy sự kiện (Trigger)</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 text-slate-300">
            {filtered.map((row) => (
              <tr key={row.id} className="hover:bg-slate-900/50 transition-colors">
                <td className="py-3 px-3 text-center font-mono text-slate-500 font-bold text-[11px]">
                  {row.id}
                </td>
                <td className="py-3 px-3 font-semibold text-slate-200">
                  {row.criteria}
                </td>
                <td className="py-3 px-4 text-purple-200 font-sans leading-relaxed">
                  {row.sp}
                </td>
                <td className="py-3 px-4 text-amber-200 font-sans leading-relaxed">
                  {row.trigger}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Insight Card */}
      <div className="mt-4 p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-slate-400 font-mono text-[11px]">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Tóm tắt: Dùng <strong>SP</strong> khi cần đóng gói logic tái sử dụng; Dùng <strong>Trigger</strong> khi cần bảo vệ toàn vẹn dữ liệu tự động.</span>
        </div>
        <span className="text-[11px] font-mono text-purple-400">10 / 10 Tiêu Chí Hoàn Tất</span>
      </div>
    </div>
  );
}
