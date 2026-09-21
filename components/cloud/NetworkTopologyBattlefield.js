"use client";
import React, { useState } from "react";
import {
  Network,
  Share2,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  RefreshCw,
  Zap,
  Sparkles,
  Layers,
  ArrowRight,
  ShieldCheck,
  Cpu
} from "lucide-react";

export default function NetworkTopologyBattlefield() {
  const [currentTopology, setCurrentTopology] = useState("leaf-spine"); // 'fat-tree' | 'leaf-spine' | 'super-spine'
  const [failedSwitch, setFailedSwitch] = useState(null); // null or switch id
  const [isLinkAggregated, setIsLinkAggregated] = useState(false);

  const toggleFailSwitch = (id) => {
    if (failedSwitch === id) {
      setFailedSwitch(null);
    } else {
      setFailedSwitch(id);
    }
  };

  return (
    <div className="my-8 rounded-3xl border border-stone-200 bg-linear-to-b from-stone-50/70 via-white to-stone-50/50 p-5 sm:p-7 shadow-xl font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-stone-200">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-teal-500 text-white mb-2 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            Đấu Trường Tô-pô Mạng (Network Topology)
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
            Mục III.3 – III.6: Fat Tree vs Leaf-Spine vs Super-Spine
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-2xl">
            So sánh trực quan cơ chế chịu lỗi (Fault Tolerance) khi đánh sập switch, giải pháp gộp kênh Link Aggregation và kiến trúc mở rộng Super-Spine cho siêu Data Center.
          </p>
        </div>

        {/* Topology Switcher */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-stone-100 border border-stone-200 self-start sm:self-auto">
          <button
            onClick={() => {
              setCurrentTopology("fat-tree");
              setFailedSwitch(null);
            }}
            className={`px-3 py-2 rounded-xl text-xs font-extrabold transition-all ${
              currentTopology === "fat-tree"
                ? "bg-stone-900 text-amber-400 shadow-sm"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            1. Fat Tree (Cây)
          </button>
          <button
            onClick={() => {
              setCurrentTopology("leaf-spine");
              setFailedSwitch(null);
            }}
            className={`px-3 py-2 rounded-xl text-xs font-extrabold transition-all ${
              currentTopology === "leaf-spine"
                ? "bg-stone-900 text-amber-400 shadow-sm"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            2. Leaf-Spine (Khuyến Nghị)
          </button>
          <button
            onClick={() => {
              setCurrentTopology("super-spine");
              setFailedSwitch(null);
            }}
            className={`px-3 py-2 rounded-xl text-xs font-extrabold transition-all ${
              currentTopology === "super-spine"
                ? "bg-stone-900 text-amber-400 shadow-sm"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            3. Super-Spine (Đa Pod)
          </button>
        </div>
      </div>

      {/* Link Aggregation Banner (Mục III.4) */}
      <div className="mt-5 p-4 rounded-2xl bg-white border border-stone-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-teal-100 text-teal-800 shrink-0">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-black text-xs sm:text-sm text-stone-900">
                Kỹ Thuật Gộp Đường Truyền (Link Aggregation - Mục III.4)
              </h4>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-teal-50 text-teal-700 border border-teal-200">
                Hardware LAG
              </span>
            </div>
            <p className="text-xs text-stone-600 mt-0.5">
              Gộp nhiều liên kết tốc độ thấp thành 1 liên kết tốc độ cao: <strong>10 đường 10 Gbps ➔ 1 đường 100 Gbps</strong>.
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsLinkAggregated(!isLinkAggregated)}
          className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
            isLinkAggregated
              ? "bg-teal-600 text-white shadow-xs"
              : "bg-stone-100 text-stone-700 hover:bg-stone-200"
          }`}
        >
          {isLinkAggregated ? "✓ Đang Gộp: 1x 100 Gbps" : "Bấm Để Gộp 10x 10 Gbps"}
        </button>
      </div>

      {/* Interactive Topology Battlefield Arena */}
      <div className="mt-5 p-6 rounded-3xl bg-stone-950 text-white border-2 border-stone-800 shadow-2xl relative overflow-hidden">
        {/* Failure Simulation Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-stone-800 mb-6">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-mono font-bold text-stone-300">
              Thực nghiệm sự cố: Bấm vào switch để đánh sập và quan sát khả năng chịu lỗi (Fault Tolerance)
            </span>
          </div>

          {failedSwitch && (
            <button
              onClick={() => setFailedSwitch(null)}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500 text-stone-950 text-xs font-black hover:bg-emerald-400 transition-colors"
            >
              <RefreshCw className="w-3 h-3" />
              Khôi Phục Switch
            </button>
          )}
        </div>

        {/* 1. FAT TREE VIEW */}
        {currentTopology === "fat-tree" && (
          <div className="space-y-6">
            <div className="text-center">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-rose-500/20 text-rose-400 border border-rose-500/30">
                Tô-pô Cây Phân Cấp (Fat Tree) — Nhược điểm: Nghẽn cổ chai ở gốc (Root Bottleneck)
              </span>
            </div>

            {/* Root Layer */}
            <div className="flex justify-center">
              <button
                onClick={() => toggleFailSwitch("root")}
                className={`p-3 px-6 rounded-2xl border transition-all ${
                  failedSwitch === "root"
                    ? "bg-rose-950 border-rose-500 text-rose-300 animate-pulse"
                    : "bg-stone-900 border-amber-400/60 text-amber-300 hover:scale-105"
                }`}
              >
                <div className="text-xs font-mono font-black">
                  {failedSwitch === "root" ? "💥 CORE / ROOT SWITCH (ĐÃ CHẾT)" : "CORE / ROOT SWITCH (GỐC)"}
                </div>
                <div className="text-[10px] text-stone-400 mt-0.5">100% Traffic phải đi qua đây</div>
              </button>
            </div>

            {/* Downward Lines */}
            <div className="flex justify-center gap-24">
              <div className={`w-0.5 h-8 ${failedSwitch === "root" ? "bg-rose-500/40" : "bg-amber-400/50"}`} />
              <div className={`w-0.5 h-8 ${failedSwitch === "root" ? "bg-rose-500/40" : "bg-amber-400/50"}`} />
            </div>

            {/* Pod Aggregation Layer */}
            <div className="grid grid-cols-2 gap-8 max-w-xl mx-auto">
              <div className="p-3 rounded-xl bg-stone-900 border border-stone-700 text-center">
                <div className="text-xs font-bold text-sky-400">Pod 1 Aggregation Switch</div>
                <div className="text-[10px] text-stone-400 mt-0.5">1/P lưu lượng qua đây</div>
              </div>
              <div className="p-3 rounded-xl bg-stone-900 border border-stone-700 text-center">
                <div className="text-xs font-bold text-sky-400">Pod 2 Aggregation Switch</div>
                <div className="text-[10px] text-stone-400 mt-0.5">1/P lưu lượng qua đây</div>
              </div>
            </div>

            {/* Status Alert for Fat Tree */}
            <div className={`p-4 rounded-2xl text-xs leading-relaxed border ${
              failedSwitch === "root"
                ? "bg-rose-950/80 border-rose-500 text-rose-200"
                : "bg-stone-900 border-stone-800 text-stone-300"
            }`}>
              {failedSwitch === "root" ? (
                <div className="flex items-center gap-2 text-rose-300 font-extrabold">
                  <XCircle className="w-5 h-5 shrink-0" />
                  <span>
                    <strong>NGUY HIỂM (Single Point of Failure):</strong> Khi Core Switch gốc chết hoặc quá tải, toàn bộ kết nối giữa các Pod bị ngắt hoàn toàn! Đây chính là nhược điểm chí mạng khiến Fat Tree bị thay thế bởi Leaf-Spine.
                  </span>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>
                    <strong>Đặc tính Fat Tree:</strong> 100% traffic qua liên kết gốc, 1/P qua mỗi liên kết cặp pod, 1/PR qua mỗi liên kết trong pod ➔ Liên kết cấp cao dễ nghẽn cổ chai (Bottleneck).
                  </span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 2. LEAF-SPINE VIEW (THE GOLD STANDARD) */}
        {currentTopology === "leaf-spine" && (
          <div className="space-y-6">
            <div className="text-center">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                Tô-pô Leaf-Spine (Phẳng 2 Tầng) — Tiêu chuẩn vàng: Mọi Leaf nối mọi Spine (Full Mesh)
              </span>
            </div>

            {/* Spine Layer (Top) */}
            <div>
              <div className="text-[10px] font-mono text-center text-stone-400 uppercase mb-2">
                Tầng Spine (Xương Sống) — Nhấp để đánh sập thử nghiệm
              </div>
              <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
                {[1, 2, 3].map((num) => {
                  const isDown = failedSwitch === `spine-${num}`;
                  return (
                    <button
                      key={num}
                      onClick={() => toggleFailSwitch(`spine-${num}`)}
                      className={`p-3 rounded-2xl border text-center transition-all ${
                        isDown
                          ? "bg-rose-950 border-rose-500 text-rose-300 shadow-md shadow-rose-900/50"
                          : "bg-indigo-950 border-indigo-500/60 text-indigo-200 hover:scale-105"
                      }`}
                    >
                      <div className="text-xs font-mono font-black">
                        {isDown ? `💥 Spine #${num} (HỎNG)` : `Spine Switch #${num}`}
                      </div>
                      <div className="text-[9px] mt-0.5 opacity-80">
                        {isDown ? "Ngừng hoạt động" : "Sẵn sàng định tuyến"}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mesh Interconnect Representation */}
            <div className="py-2 text-center text-[10px] font-mono text-stone-500">
              ════ Mọi Leaf Switch bên dưới đều nối dây trực tiếp đến cả 3 Spine Switch ════
            </div>

            {/* Leaf Layer (Bottom, gắn với các Rack) */}
            <div>
              <div className="text-[10px] font-mono text-center text-stone-400 uppercase mb-2">
                Tầng Leaf (Gắn với từng Rack máy chủ)
              </div>
              <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
                {[1, 2, 3].map((num) => (
                  <div key={num} className="p-3 rounded-2xl bg-stone-900 border border-teal-500/50 text-center">
                    <div className="text-xs font-mono font-black text-teal-300">
                      Leaf Switch #{num}
                    </div>
                    <div className="text-[9px] text-stone-400 mt-0.5">Gắn Rack #{num}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Status Feedback */}
            <div className="p-4 rounded-2xl bg-stone-900 border border-stone-800 text-xs text-stone-300">
              {failedSwitch ? (
                <div className="flex items-center gap-2 text-emerald-300 font-extrabold">
                  <ShieldCheck className="w-5 h-5 shrink-0 text-emerald-400" />
                  <span>
                    <strong>KHẢ NĂNG CHỊU LỖI (FAULT TOLERANCE) HOÀN HẢO:</strong> Khi {failedSwitch.toUpperCase()} bị hỏng, các Leaf switch tự động chuyển hướng toàn bộ lưu lượng qua 2 Spine switch còn lại! Hệ thống không có điểm lỗi đơn lẻ (No Single Point of Failure), dịch vụ tiếp tục thông suốt.
                  </span>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    <strong>Ưu điểm Leaf-Spine:</strong> Không có nút thắt cổ chai, độ trễ giữa hai server bất kỳ trong phòng máy là hằng số (luôn đúng 2 bước nhảy: Leaf ➔ Spine ➔ Leaf).
                  </span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 3. SUPER-SPINE VIEW */}
        {currentTopology === "super-spine" && (
          <div className="space-y-6">
            <div className="text-center">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30">
                Kiến Trúc Super-Spine — Mở rộng kết nối đa PoD cho Hyperscale Data Center
              </span>
            </div>

            {/* Super Spine */}
            <div className="flex justify-center">
              <div className="p-3 px-8 rounded-2xl bg-purple-950 border border-purple-400/60 text-center">
                <div className="text-xs font-mono font-black text-purple-200">
                  TẦNG SUPER-SPINE (LIÊN KẾT ĐA CỤM POD)
                </div>
                <div className="text-[10px] text-purple-300 mt-0.5">Kết nối tất cả các Pod trong Data Center</div>
              </div>
            </div>

            {/* Arrow down */}
            <div className="text-center text-purple-400 font-mono text-xs">▼ ▼ ▼</div>

            {/* Pod Level Spines */}
            <div className="grid grid-cols-2 gap-6 max-w-xl mx-auto">
              <div className="p-3 rounded-xl bg-stone-900 border border-stone-700 text-center">
                <div className="text-xs font-mono font-bold text-sky-300">Spine (PoD Cluster 1)</div>
                <div className="text-[10px] text-stone-400 mt-0.5">Leaf ➔ Rack nội bộ Pod 1</div>
              </div>
              <div className="p-3 rounded-xl bg-stone-900 border border-stone-700 text-center">
                <div className="text-xs font-mono font-bold text-sky-300">Spine (PoD Cluster 2)</div>
                <div className="text-[10px] text-stone-400 mt-0.5">Leaf ➔ Rack nội bộ Pod 2</div>
              </div>
            </div>

            {/* Structure Summary */}
            <div className="p-4 rounded-2xl bg-stone-900 border border-stone-800 text-xs space-y-1.5 text-stone-300">
              <div className="font-mono font-bold text-amber-400">
                Đường dẫn phân tầng Super-Spine:
              </div>
              <div className="p-2 rounded-xl bg-stone-950 font-mono text-xs text-amber-300 border border-stone-800">
                Super Spine ➔ Spine (từng PoD) ➔ Leaf (từng Rack) ➔ Server
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Comparison Matrix Table */}
      <div className="mt-5 p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs">
        <div className="font-extrabold text-stone-900 mb-2">
          📊 Bảng Tổng Hợp 4 Mô Hình Mạng Cần Nhớ Trước Kỳ Thi:
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-stone-200 text-stone-500 font-bold">
                <th className="py-2 px-3">Mô hình mạng</th>
                <th className="py-2 px-3">Đặc điểm kiến trúc chính</th>
                <th className="py-2 px-3">Khả năng chịu lỗi (Fault Tolerance)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-150">
              <tr>
                <td className="py-2 px-3 font-bold text-rose-700">Fat Tree</td>
                <td className="py-2 px-3 text-stone-700">Cây phân cấp, 100% traffic qua gốc (root)</td>
                <td className="py-2 px-3 text-rose-600 font-semibold">Kém — Dễ nghẽn cổ chai ở gốc (Bottleneck)</td>
              </tr>
              <tr>
                <td className="py-2 px-3 font-bold text-teal-700">Link Aggregation</td>
                <td className="py-2 px-3 text-stone-700">Gộp nhiều link nhỏ (10x 10G) thành 1 link lớn (100G)</td>
                <td className="py-2 px-3 text-teal-700 font-semibold">Tốt — Đứt 1 link thì các link còn lại vẫn chạy</td>
              </tr>
              <tr>
                <td className="py-2 px-3 font-bold text-emerald-700">Leaf-Spine</td>
                <td className="py-2 px-3 text-stone-700">Mỗi leaf nối tới tất cả spine (mạng phẳng 2 tầng)</td>
                <td className="py-2 px-3 text-emerald-600 font-bold">Xuất sắc — Hỏng 1 spine tự định tuyến qua spine khác</td>
              </tr>
              <tr>
                <td className="py-2 px-3 font-bold text-purple-700">Super-Spine</td>
                <td className="py-2 px-3 text-stone-700">Mở rộng Leaf-Spine liên kết nhiều Pod với nhau</td>
                <td className="py-2 px-3 text-purple-600 font-bold">Quy mô cực lớn — Dành cho Hyperscale Cloud</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
