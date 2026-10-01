"use client";

import React, { useState } from "react";
import {
  GitPullRequest,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  RotateCw,
  Layers,
  ArrowRight,
  Database,
  Table,
  Sparkles,
  Info
} from "lucide-react";

export default function SchemaCycleGraphVisualizer() {
  const [selectedPolicy, setSelectedPolicy] = useState("policy2"); // 'policy1' | 'policy2' | 'policy3'
  const [activeEdge, setActiveEdge] = useState("all"); // 'all' | 'edge1' | 'edge2' | 'edge3'
  const [testOrderQty, setTestOrderQty] = useState(10);
  const [testDeliverQty, setTestDeliverQty] = useState(8);
  const [testDeliverExtraItem, setTestDeliverExtraItem] = useState(false);

  const policies = {
    policy1: {
      id: "policy1",
      name: "Chính Sách 1: Giao Đầy Đủ Tất Cả Mặt Hàng",
      badge: "GIAO TOÀN BỘ (100%)",
      badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
      desc: "Hóa đơn thực hiện cho một đơn đặt hàng CHỈ GIAO những mặt hàng khách đã đặt và BẮT BUỘC PHẢI GIAO ĐẦY ĐỦ 100% tất cả các mặt hàng.",
      logic: "π_{soHD, maHH}(CTIET_HD) ≡ π_{soHD, maHH}(HOA_DON ⋈ DAT_HANG)",
      checkResult: (orderQ, delivQ, hasExtra) => {
        if (hasExtra) return { pass: false, msg: "Vi phạm: Giao mặt hàng không có trong đơn đặt hàng ban đầu!" };
        if (delivQ !== orderQ) return { pass: false, msg: `Vi phạm: Đặt ${orderQ} nhưng giao ${delivQ} (Chính sách 1 yêu cầu giao đúng đủ 100%).` };
        return { pass: true, msg: "Hợp lệ 100%: Giao đúng và đủ toàn bộ các mặt hàng theo đơn!" };
      }
    },
    policy2: {
      id: "policy2",
      name: "Chính Sách 2: Giao Thiếu Nhưng Không Giao Vượt",
      badge: "CHUẨN GIÁO TRÌNH (QLHANGHOA)",
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
      desc: "Chỉ giao mặt hàng khách yêu cầu, CÓ THỂ GIAO THIẾU (chia làm nhiều đợt hóa đơn) nhưng TUYỆT ĐỐI KHÔNG BAO GIỜ GIAO VƯỢT số lượng đã đặt.",
      logic: "π_{soHD, maHH}(CTIET_HD) ⊆ π_{soHD, maHH}(HOA_DON ⋈ DAT_HANG) ∧ (CTIET_HD.soLuongBan ≤ DAT_HANG.soLuongDat)",
      checkResult: (orderQ, delivQ, hasExtra) => {
        if (hasExtra) return { pass: false, msg: "Vi phạm: Mặt hàng xuất hóa đơn không tồn tại trong đơn đặt hàng của khách!" };
        if (delivQ > orderQ) return { pass: false, msg: `Vi phạm nghiêm trọng: Đặt ${orderQ} nhưng xuất kho giao ${delivQ} (Vượt số lượng đặt)!` };
        if (delivQ < orderQ) return { pass: true, msg: `Hợp lệ (Giao đợt 1): Giao ${delivQ}/${orderQ} (Được phép thiếu, còn nợ lại ${orderQ - delivQ}).` };
        return { pass: true, msg: `Hợp lệ hoàn hảo: Giao đủ ${delivQ}/${orderQ} theo đơn.` };
      }
    },
    policy3: {
      id: "policy3",
      name: "Chính Sách 3: Giao Tùy Ý Mặt Hàng",
      badge: "TỰ DO LINH HOẠT",
      badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
      desc: "Hóa đơn thực hiện cho một đơn đặt hàng CÓ THỂ GỒM TÙY Ý các mặt hàng, dù mặt hàng đó có hay không có trong đơn đặt ban đầu (kinh doanh linh hoạt).",
      logic: "Không ràng buộc tập con giữa CTIET_HD và DAT_HANG.",
      checkResult: (orderQ, delivQ) => {
        return { pass: true, msg: `Chấp nhận giao dịch: Giao ${delivQ} sản phẩm (Không kiểm tra đối chiếu ràng buộc mặt hàng).` };
      }
    }
  };

  const curr = policies[selectedPolicy];
  const simResult = curr.checkResult(testOrderQty, testDeliverQty, testDeliverExtraItem);

  return (
    <div className="my-8 rounded-3xl border border-rose-200/80 bg-gradient-to-br from-rose-50/40 via-white to-orange-50/20 p-5 sm:p-7 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-rose-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-600 to-orange-600 text-white shadow-lg shadow-rose-600/20">
            <GitPullRequest className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-extrabold text-slate-900">SchemaCycleGraphVisualizer</h3>
              <span className="rounded-full bg-rose-100 px-2.5 py-0.5 text-xs font-bold text-rose-800 border border-rose-200">
                Mục 6.5 Chu Trình CSDL
              </span>
            </div>
            <p className="text-xs text-slate-600 mt-0.5">
              Phân giải hiện tượng Chu trình khép kín DAT_HANG &harr; HOA_DON &harr; CTIET_HD và 3 chính sách toàn vẹn
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-rose-900 bg-rose-50 px-3 py-1.5 rounded-xl border border-rose-200">
          <RotateCw className="h-3.5 w-3.5 text-rose-600 animate-spin" style={{ animationDuration: "10s" }} />
          <span>CLOSED CYCLE (KHOÁ NGOẠI TAM GIÁC)</span>
        </div>
      </div>

      {/* Responsive Triangular SVG Interactive Graph */}
      <div className="mt-6 rounded-2xl border border-rose-100 bg-white p-4 sm:p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-rose-600" />
            Đồ Thị Chu Trình Khép Kín 3 Quan Hệ (Interactive Triangle)
          </span>
          <span className="text-[11px] text-slate-500">
            Nhấn vào các cạnh hoặc nút để soi chiếu liên kết khóa ngoại
          </span>
        </div>

        {/* SVG Container: Scaled cleanly via viewBox */}
        <div className="relative mx-auto w-full max-w-[520px] aspect-[500/310]">
          <svg viewBox="0 0 500 310" className="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <marker id="arrow-rose" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#e11d48" />
              </marker>
              <marker id="arrow-violet" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#7c3aed" />
              </marker>
              <marker id="arrow-emerald" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#059669" />
              </marker>
              <linearGradient id="edgeGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4f46e5" />
                <stop offset="100%" stopColor="#7c3aed" />
              </linearGradient>
            </defs>

            {/* Edge 1: HOA_DON (Bottom Left) -> DAT_HANG (Top) */}
            <path
              d="M 140 220 C 160 160, 200 110, 230 80"
              fill="none"
              stroke={activeEdge === "edge1" || activeEdge === "all" ? "#7c3aed" : "#cbd5e1"}
              strokeWidth={activeEdge === "edge1" ? "3.5" : "2"}
              strokeDasharray={activeEdge === "edge1" ? "none" : "5,4"}
              markerEnd="url(#arrow-violet)"
              className="cursor-pointer transition-all duration-300"
              onClick={() => setActiveEdge(activeEdge === "edge1" ? "all" : "edge1")}
            />
            {/* Label Edge 1 */}
            <g transform="translate(145, 140)" className="cursor-pointer" onClick={() => setActiveEdge(activeEdge === "edge1" ? "all" : "edge1")}>
              <rect x="-42" y="-12" width="84" height="22" rx="6" fill="#f5f3ff" stroke="#ddd6fe" strokeWidth="1" />
              <text x="0" y="3" textAnchor="middle" fill="#6d28d9" fontSize="10" fontWeight="bold" fontFamily="monospace">
                FK: soDH
              </text>
            </g>

            {/* Edge 2: CTIET_HD (Bottom Right) -> HOA_DON (Bottom Left) */}
            <path
              d="M 360 250 L 170 250"
              fill="none"
              stroke={activeEdge === "edge2" || activeEdge === "all" ? "#e11d48" : "#cbd5e1"}
              strokeWidth={activeEdge === "edge2" ? "3.5" : "2"}
              markerEnd="url(#arrow-rose)"
              className="cursor-pointer transition-all duration-300"
              onClick={() => setActiveEdge(activeEdge === "edge2" ? "all" : "edge2")}
            />
            {/* Label Edge 2 */}
            <g transform="translate(265, 268)" className="cursor-pointer" onClick={() => setActiveEdge(activeEdge === "edge2" ? "all" : "edge2")}>
              <rect x="-42" y="-12" width="84" height="22" rx="6" fill="#fff1f2" stroke="#fecdd3" strokeWidth="1" />
              <text x="0" y="3" textAnchor="middle" fill="#be123c" fontSize="10" fontWeight="bold" fontFamily="monospace">
                FK: soHD
              </text>
            </g>

            {/* Edge 3: CTIET_HD (Bottom Right) -> DAT_HANG (Top) */}
            <path
              d="M 370 220 C 350 160, 300 110, 270 80"
              fill="none"
              stroke={activeEdge === "edge3" || activeEdge === "all" ? "#059669" : "#cbd5e1"}
              strokeWidth={activeEdge === "edge3" ? "3.5" : "2"}
              markerEnd="url(#arrow-emerald)"
              className="cursor-pointer transition-all duration-300"
              onClick={() => setActiveEdge(activeEdge === "edge3" ? "all" : "edge3")}
            />
            {/* Label Edge 3 */}
            <g transform="translate(355, 140)" className="cursor-pointer" onClick={() => setActiveEdge(activeEdge === "edge3" ? "all" : "edge3")}>
              <rect x="-48" y="-12" width="96" height="22" rx="6" fill="#ecfdf5" stroke="#a7f3d0" strokeWidth="1" />
              <text x="0" y="3" textAnchor="middle" fill="#047857" fontSize="10" fontWeight="bold" fontFamily="monospace">
                FK: maHH + Chu Trình
              </text>
            </g>

            {/* Node 1: DAT_HANG (Top) */}
            <g transform="translate(250, 48)">
              <rect
                x="-80"
                y="-32"
                width="160"
                height="64"
                rx="14"
                fill="#eef2ff"
                stroke="#6366f1"
                strokeWidth="2"
                className="filter drop-shadow-sm hover:fill-indigo-100 transition-colors"
              />
              <text x="0" y="-10" textAnchor="middle" fill="#312e81" fontSize="12" fontWeight="bold">
                1. DAT_HANG
              </text>
              <text x="0" y="10" textAnchor="middle" fill="#4338ca" fontSize="9.5" fontFamily="monospace">
                PK(soDH, maHH)
              </text>
              <text x="0" y="24" textAnchor="middle" fill="#64748b" fontSize="8.5">
                soLuongDat, ngayDH
              </text>
            </g>

            {/* Node 2: HOA_DON (Bottom Left) */}
            <g transform="translate(90, 245)">
              <rect
                x="-75"
                y="-32"
                width="150"
                height="64"
                rx="14"
                fill="#faf5ff"
                stroke="#8b5cf6"
                strokeWidth="2"
                className="filter drop-shadow-sm hover:fill-purple-100 transition-colors"
              />
              <text x="0" y="-10" textAnchor="middle" fill="#4c1d95" fontSize="12" fontWeight="bold">
                2. HOA_DON
              </text>
              <text x="0" y="10" textAnchor="middle" fill="#6d28d9" fontSize="9.5" fontFamily="monospace">
                PK(soHD) | FK(soDH)
              </text>
              <text x="0" y="24" textAnchor="middle" fill="#64748b" fontSize="8.5">
                ngayHD, trigiaHD
              </text>
            </g>

            {/* Node 3: CTIET_HD (Bottom Right) */}
            <g transform="translate(410, 245)">
              <rect
                x="-75"
                y="-32"
                width="150"
                height="64"
                rx="14"
                fill="#fff1f2"
                stroke="#f43f5e"
                strokeWidth="2"
                className="filter drop-shadow-sm hover:fill-rose-100 transition-colors"
              />
              <text x="0" y="-10" textAnchor="middle" fill="#881337" fontSize="12" fontWeight="bold">
                3. CTIET_HD
              </text>
              <text x="0" y="10" textAnchor="middle" fill="#be123c" fontSize="9.5" fontFamily="monospace">
                PK(soHD, maHH)
              </text>
              <text x="0" y="24" textAnchor="middle" fill="#64748b" fontSize="8.5">
                soLuongBan, giaBan
              </text>
            </g>
          </svg>
        </div>

        {/* Legend pills for arrows */}
        <div className="mt-3 flex flex-wrap items-center justify-center gap-2 pt-2 border-t border-slate-100 text-xs">
          <button
            onClick={() => setActiveEdge("all")}
            className={`px-3 py-1 rounded-lg font-bold transition-all ${
              activeEdge === "all" ? "bg-slate-800 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            Hiện Tất Cả 3 Cạnh
          </button>
          <button
            onClick={() => setActiveEdge("edge1")}
            className={`px-3 py-1 rounded-lg font-bold transition-all ${
              activeEdge === "edge1" ? "bg-violet-600 text-white" : "bg-violet-50 text-violet-800 border border-violet-200"
            }`}
          >
            Cạnh 1: HOA_DON &rarr; DAT_HANG (soDH)
          </button>
          <button
            onClick={() => setActiveEdge("edge2")}
            className={`px-3 py-1 rounded-lg font-bold transition-all ${
              activeEdge === "edge2" ? "bg-rose-600 text-white" : "bg-rose-50 text-rose-800 border border-rose-200"
            }`}
          >
            Cạnh 2: CTIET_HD &rarr; HOA_DON (soHD)
          </button>
          <button
            onClick={() => setActiveEdge("edge3")}
            className={`px-3 py-1 rounded-lg font-bold transition-all ${
              activeEdge === "edge3" ? "bg-emerald-600 text-white" : "bg-emerald-50 text-emerald-800 border border-emerald-200"
            }`}
          >
            Cạnh 3: CTIET_HD &rarr; DAT_HANG (maHH + Chu Trình)
          </button>
        </div>
      </div>

      {/* 3 Policies Selector Bento Cards */}
      <div className="mt-6">
        <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
          3 Chính Sách Giải Quyết Ràng Buộc Chu Trình (Chọn để kiểm tra):
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {Object.keys(policies).map((key) => {
            const p = policies[key];
            const isSelected = selectedPolicy === key;
            return (
              <button
                key={key}
                onClick={() => setSelectedPolicy(key)}
                className={`flex flex-col justify-between rounded-2xl p-4 text-left transition-all border ${
                  isSelected
                    ? "bg-white border-rose-500 shadow-md ring-2 ring-rose-400/40"
                    : "bg-slate-50/70 text-slate-700 border-slate-200 hover:bg-white"
                }`}
              >
                <div>
                  <span className={`inline-block px-2 py-0.5 rounded-md text-[10px] font-bold uppercase border ${p.badgeColor}`}>
                    {p.badge}
                  </span>
                  <h4 className="mt-2 text-xs font-bold text-slate-900 leading-snug">{p.name}</h4>
                </div>
                <div className="mt-3 text-[11px] font-mono text-slate-500 line-clamp-2">
                  {p.logic}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Policy Details & KaTeX-style Formal Logic Card */}
      <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <h4 className="text-sm font-extrabold text-slate-900">{curr.name}</h4>
            <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold border ${curr.badgeColor}`}>
              {curr.badge}
            </span>
          </div>
          <span className="text-xs text-slate-500 font-mono">Bối cảnh: DAT_HANG ⋈ HOA_DON ⋈ CTIET_HD</span>
        </div>

        <p className="text-xs text-slate-700 leading-relaxed font-medium bg-rose-50/40 p-3.5 rounded-xl border border-rose-100">
          {curr.desc}
        </p>

        {/* Formal Mathematical Logic Card */}
        <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 text-slate-100 shadow-md">
          <div className="flex items-center justify-between text-xs font-bold text-amber-400 border-b border-slate-800 pb-2">
            <span>Biểu Diễn Hình Thức Đại Số & Logic Vị Từ:</span>
            <span className="font-mono text-[10px] text-slate-400">MATHEMATICAL NOTATION</span>
          </div>
          <div className="mt-2.5 font-mono text-xs text-emerald-300 leading-relaxed overflow-x-auto whitespace-pre-wrap">
            {curr.logic}
          </div>
        </div>

        {/* Interactive Delivery Sandbox Simulator */}
        <div className="rounded-xl border border-rose-200 bg-gradient-to-br from-rose-50/30 to-amber-50/20 p-4">
          <div className="flex items-center justify-between text-xs font-bold text-slate-800 mb-3">
            <span className="flex items-center gap-1.5 text-rose-900">
              <Table className="h-4 w-4 text-rose-600" />
              Sandbox Thử Nghiệm Giao Hàng & Kiểm Tra Vi Phạm Chu Trình:
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 text-xs">
            {/* Input 1 */}
            <div className="rounded-xl border border-slate-200 bg-white p-3">
              <label className="text-[11px] font-bold text-slate-600 block mb-1">
                Số lượng đặt (DAT_HANG.soLuongDat):
              </label>
              <input
                type="number"
                min="1"
                max="100"
                value={testOrderQty}
                onChange={(e) => setTestOrderQty(Math.max(1, Number(e.target.value)))}
                className="w-full rounded-lg border border-slate-300 p-2 font-mono text-xs font-bold text-slate-900 focus:border-rose-500 focus:outline-none"
              />
            </div>

            {/* Input 2 */}
            <div className="rounded-xl border border-slate-200 bg-white p-3">
              <label className="text-[11px] font-bold text-slate-600 block mb-1">
                Số lượng giao (CTIET_HD.soLuongBan):
              </label>
              <input
                type="number"
                min="0"
                max="100"
                value={testDeliverQty}
                onChange={(e) => setTestDeliverQty(Math.max(0, Number(e.target.value)))}
                className="w-full rounded-lg border border-slate-300 p-2 font-mono text-xs font-bold text-slate-900 focus:border-rose-500 focus:outline-none"
              />
            </div>

            {/* Input 3: Checkbox Extra Item */}
            <div className="rounded-xl border border-slate-200 bg-white p-3 flex flex-col justify-between">
              <label className="text-[11px] font-bold text-slate-600 block mb-1">
                Mặt hàng ngoài đơn (Item chưa đặt):
              </label>
              <label className="flex items-center gap-2 cursor-pointer mt-1">
                <input
                  type="checkbox"
                  checked={testDeliverExtraItem}
                  onChange={(e) => setTestDeliverExtraItem(e.target.checked)}
                  className="rounded text-rose-600 focus:ring-rose-500 h-4 w-4"
                />
                <span className="text-xs text-slate-700 font-medium">Giao thêm món lạ</span>
              </label>
            </div>
          </div>

          {/* Validation Result Banner */}
          <div className={`mt-3 flex items-center gap-2.5 p-3 rounded-xl border text-xs font-bold ${
            simResult.pass
              ? "bg-emerald-50 text-emerald-900 border-emerald-200"
              : "bg-rose-50 text-rose-900 border-rose-300"
          }`}>
            {simResult.pass ? (
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
            ) : (
              <XCircle className="h-4 w-4 text-rose-600 shrink-0" />
            )}
            <span>{simResult.msg}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
