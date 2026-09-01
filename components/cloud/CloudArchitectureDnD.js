"use client";
import React, { useState } from "react";
import { CheckCircle2, RotateCcw, AlertTriangle, ArrowRight, ShieldCheck, Server, Database, Globe } from "lucide-react";

const INITIAL_TIERS = [
  { id: "edge", title: "Tầng 1: Cổng Biên & Mạng phân phối (Edge & CDN)", expected: "cdn", current: null },
  { id: "lb", title: "Tầng 2: Tường lửa & Cân bằng tải (WAF & LB)", expected: "lb", current: null },
  { id: "compute", title: "Tầng 3: Máy chủ Xử lý Ứng dụng (Compute Tier)", expected: "compute", current: null },
  { id: "data", title: "Tầng 4: Lưu trữ & Cơ sở Dữ liệu (Data Tier)", expected: "data", current: null }
];

const AVAILABLE_BLOCKS = [
  { id: "cdn", label: "CloudFront CDN + DNS", icon: Globe, tier: "edge", desc: "Phân phối nội dung tĩnh & giảm tải băng thông" },
  { id: "lb", label: "Application Load Balancer", icon: ShieldCheck, tier: "lb", desc: "Điều phối lưu lượng & chống quá tải máy chủ" },
  { id: "compute", label: "Auto Scaling EC2 Cluster", icon: Server, tier: "compute", desc: "Xử lý logic nghiệp vụ với khả năng tự co giãn" },
  { id: "data", label: "RDS Multi-AZ + S3 Bucket", icon: Database, tier: "data", desc: "Lưu trữ CSDL quan hệ bền vững & file nhị phân" }
];

export default function CloudArchitectureDnD() {
  const [tiers, setTiers] = useState(INITIAL_TIERS);
  const [placedBlocks, setPlacedBlocks] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);

  const handlePlaceBlock = (block, targetTierId) => {
    setTiers((prev) =>
      prev.map((t) => (t.id === targetTierId ? { ...t, current: block } : t))
    );
    setPlacedBlocks((prev) => (prev.includes(block.id) ? prev : [...prev, block.id]));

    // Check completion
    const newTiers = tiers.map((t) => (t.id === targetTierId ? { ...t, current: block } : t));
    const allFilled = newTiers.every((t) => t.current !== null);
    const allCorrect = newTiers.every((t) => t.current && t.current.tier === t.expected);

    if (allFilled && allCorrect) {
      setIsSuccess(true);
    } else {
      setIsSuccess(false);
    }
  };

  const handleReset = () => {
    setTiers(INITIAL_TIERS);
    setPlacedBlocks([]);
    setIsSuccess(false);
  };

  return (
    <div className="my-8 p-6 sm:p-8 rounded-3xl bg-white border border-stone-200 shadow-md font-sans">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-accent">Interactive Architecture Studio</span>
          <h3 className="text-lg sm:text-xl font-bold text-stone-850 mt-1">
            Ghép Nối Kiến trúc Hệ thống Đám mây 4 Tầng
          </h3>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Chọn thành phần phù hợp bên dưới để gắn vào các tầng kiến trúc theo đúng thứ tự bảo vệ và xử lý luồng dữ liệu.
          </p>
        </div>

        <button
          type="button"
          onClick={handleReset}
          className="px-3 py-1.5 rounded-xl border border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-600 text-xs font-bold transition-all flex items-center gap-1.5 self-start cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Đặt lại</span>
        </button>
      </div>

      {/* Target Tiers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {tiers.map((tier, idx) => {
          const isCorrect = tier.current && tier.current.tier === tier.expected;
          return (
            <div
              key={tier.id}
              className={`p-5 rounded-2xl border transition-all flex flex-col justify-between min-h-[160px] ${
                tier.current
                  ? isCorrect
                    ? "bg-emerald-50/60 border-emerald-300"
                    : "bg-rose-50/60 border-rose-300"
                  : "bg-stone-50/80 border-dashed border-stone-300"
              }`}
            >
              <div>
                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block mb-1">
                  Bước {idx + 1}
                </span>
                <h4 className="font-bold text-xs text-stone-800 leading-snug">{tier.title}</h4>
              </div>

              <div className="my-3">
                {tier.current ? (
                  <div className="p-3 rounded-xl bg-white border border-stone-200 shadow-xs flex items-center gap-2">
                    {React.createElement(tier.current.icon, { className: "w-4 h-4 text-accent" })}
                    <div className="text-left">
                      <div className="text-xs font-bold text-stone-850 line-clamp-1">{tier.current.label}</div>
                      <div className="text-[10px] text-stone-500 line-clamp-1">{tier.current.desc}</div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-4 text-xs font-medium text-stone-400 italic">
                    Chưa gắn thành phần
                  </div>
                )}
              </div>

              {/* Slot Target Selector */}
              <div className="pt-2 border-t border-stone-200/50 flex justify-between items-center text-[10px] font-bold">
                <span className={tier.current ? (isCorrect ? "text-emerald-700" : "text-rose-700") : "text-stone-400"}>
                  {tier.current ? (isCorrect ? "Khớp chuẩn xác" : "Sai vị trí tầng") : "Đang chờ chọn"}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Available Palette */}
      <div>
        <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-3">
          Kho thành phần hạ tầng (Bấm vào khối để gán vào tầng tương ứng):
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {AVAILABLE_BLOCKS.map((block) => {
            const isUsed = placedBlocks.includes(block.id);
            return (
              <button
                key={block.id}
                type="button"
                onClick={() => {
                  // Find first empty tier
                  const emptyTier = tiers.find((t) => !t.current) || tiers[0];
                  handlePlaceBlock(block, emptyTier.id);
                }}
                className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex items-center gap-3 ${
                  isUsed
                    ? "bg-stone-100 text-stone-400 border-stone-200 opacity-60"
                    : "bg-white hover:bg-stone-50 text-stone-800 border-stone-200 shadow-xs hover:border-accent"
                }`}
              >
                <div className="w-8 h-8 rounded-xl bg-stone-100 text-stone-700 flex items-center justify-center shrink-0">
                  {React.createElement(block.icon, { className: "w-4 h-4" })}
                </div>
                <div>
                  <div className="text-xs font-bold">{block.label}</div>
                  <div className="text-[10px] text-stone-500 line-clamp-1">{block.desc}</div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Success Banner */}
      {isSuccess && (
        <div className="mt-6 p-4 rounded-2xl bg-emerald-100 border border-emerald-300 text-emerald-900 flex items-center gap-3 font-semibold text-xs animate-fade-in">
          <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
          <span>
            Xuất sắc! Bạn đã xây dựng chuẩn xác kiến trúc phân tầng đám mây: CDN phân phối ➔ Load Balancer điều hướng ➔ Compute Cluster xử lý ➔ Cụm lưu trữ RDS/S3 bền vững!
          </span>
        </div>
      )}
    </div>
  );
}
