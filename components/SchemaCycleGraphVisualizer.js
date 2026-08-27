"use client";

import React, { useState } from "react";
import { GitPullRequest, ArrowRightLeft, ShieldCheck, AlertCircle, CheckCircle2, RefreshCw, CircleDot } from "lucide-react";

export default function SchemaCycleGraphVisualizer() {
  const [selectedPolicy, setSelectedPolicy] = useState("policy2"); // 'policy1' | 'policy2' | 'policy3'

  const policies = {
    policy1: {
      name: "Chính Sách 1: Giao Đầy Đủ Tất Cả Mặt Hàng",
      badge: "GIAO TOÀN BỘ (100%)",
      desc: "Hóa đơn thực hiện cho một đơn đặt hàng CHỈ GIAO những mặt hàng khách đã yêu cầu và BẮT BUỘC PHẢI GIAO ĐẦY ĐỦ TẤT CẢ các mặt hàng có trong đơn đặt hàng.",
      logic: "π_{soHD, maHH}(CTIET_HD) ≡ π_{soHD, maHH}(HOA_DON ⋈ DAT_HANG)",
      color: "from-blue-600 to-cyan-600"
    },
    policy2: {
      name: "Chính Sách 2: Giao Thiếu Nhưng Không Giao Vượt (Chính Sách CSDL QLHANGHOA)",
      badge: "CHUẨN GIÁO TRÌNH (KHUYÊN DÙNG)",
      desc: "Hóa đơn thực hiện cho một đơn đặt hàng CHỈ GIAO những mặt hàng khách đã yêu cầu, CÓ THỂ KHÔNG GIAO ĐẦY ĐỦ nhưng TUYỆT ĐỐI KHÔNG BAO GIỜ GIAO VƯỢT số lượng đặt!",
      logic: "π_{soHD, maHH}(CTIET_HD) ⊆ π_{soHD, maHH}(HOA_DON ⋈ DAT_HANG) ∧ (CTIET_HD.soLuongBan ≤ DAT_HANG.soLuongDat)",
      color: "from-emerald-600 to-teal-600"
    },
    policy3: {
      name: "Chính Sách 3: Giao Tùy Ý Mặt Hàng",
      badge: "TỰ DO LINH HOẠT",
      desc: "Hóa đơn thực hiện cho một đơn đặt hàng CÓ THỂ GỒM TÙY Ý các mặt hàng, dù mặt hàng đó có hay không có trong đơn đặt hàng ban đầu của khách.",
      logic: "Không có ràng buộc bao hàm tập con giữa CTIET_HD và DAT_HANG.",
      color: "from-amber-600 to-rose-600"
    }
  };

  const curr = policies[selectedPolicy];

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
              <h3 className="text-xl font-bold text-gray-900">SchemaCycleGraphVisualizer</h3>
              <span className="rounded-full bg-rose-100 px-2.5 py-0.5 text-xs font-semibold text-rose-800 border border-rose-200">
                Chu Trình Đồ Thị CSDL (Mục 6.5)
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Mô phỏng chu trình khép kín DAT_HANG &harr; HOA_DON &harr; CTIET_HD và 3 chính sách toàn vẹn giao hàng
            </p>
          </div>
        </div>
      </div>

      {/* Cycle Graph Flow Diagram */}
      <div className="mt-5 rounded-xl border border-rose-100 bg-white p-5 shadow-sm">
        <div className="text-xs font-bold text-gray-500 uppercase tracking-wider text-center mb-3">
          Sơ Đồ Chu Trình Khép Kín 3 Quan Hệ Trong CSDL QLHANGHOA
        </div>

        <div className="grid gap-3 md:grid-cols-3 items-center text-center font-mono text-xs">
          {/* Node 1 */}
          <div className="rounded-xl border border-indigo-200 bg-indigo-50/80 p-3">
            <div className="font-bold text-indigo-900">1. DAT_HANG</div>
            <div className="text-[11px] text-gray-600 mt-1">(soDH, maHH, soLuongDat, ngayDH)</div>
          </div>

          {/* Edge / Node 2 */}
          <div className="rounded-xl border border-purple-200 bg-purple-50/80 p-3">
            <div className="font-bold text-purple-900">2. HOA_DON</div>
            <div className="text-[11px] text-gray-600 mt-1">(soHD, ngayHD, soDH, trigiaHD)</div>
          </div>

          {/* Edge / Node 3 */}
          <div className="rounded-xl border border-rose-200 bg-rose-50/80 p-3">
            <div className="font-bold text-rose-900">3. CTIET_HD</div>
            <div className="text-[11px] text-gray-600 mt-1">(soHD, maHH, giaBan, soLuongBan)</div>
          </div>
        </div>

        <div className="mt-3 text-center text-xs text-gray-500 font-medium">
          &uarr;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash; Liên kết chu trình khép kín qua các cặp khóa ngoại (soDH, soHD, maHH) &mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&darr;
        </div>
      </div>

      {/* 3 Policies Selector */}
      <div className="mt-5 grid gap-2 sm:grid-cols-3">
        {Object.keys(policies).map((key) => (
          <button
            key={key}
            onClick={() => setSelectedPolicy(key)}
            className={`flex flex-col justify-between rounded-xl p-3.5 text-left font-mono text-xs font-bold transition-all border ${
              selectedPolicy === key
                ? "bg-rose-600 text-white border-rose-700 shadow-md ring-2 ring-rose-300"
                : "bg-white text-gray-700 border-gray-200 hover:bg-rose-50"
            }`}
          >
            <div>
              <span className="text-[10px] uppercase tracking-wider block opacity-80">{policies[key].badge}</span>
              <span className="mt-1 block text-xs">{policies[key].name}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Policy Details Card */}
      <div className="mt-4 rounded-xl border border-rose-200 bg-white p-4 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-bold text-rose-950">{curr.name}</h4>
          <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded border border-emerald-200">
            {curr.badge}
          </span>
        </div>

        <p className="text-xs text-gray-700 leading-relaxed font-medium bg-rose-50/50 p-3 rounded-lg border border-rose-100">
          {curr.desc}
        </p>

        <div>
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Biểu diễn Hình thức Đại số & Logic:</span>
          <pre className="mt-1 font-mono text-xs text-amber-900 bg-amber-50/70 p-2.5 rounded border border-amber-200 overflow-x-auto whitespace-pre-wrap leading-relaxed">
            {curr.logic}
          </pre>
        </div>
      </div>
    </div>
  );
}
