"use client";
import React, { useState } from "react";
import {
  Scale,
  Wifi,
  WifiOff,
  ShieldAlert,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Sparkles,
  Zap,
  DollarSign,
  TrendingUp,
  RefreshCw,
  Sliders,
  AlertTriangle,
  Lock,
  Globe
} from "lucide-react";

export default function SaasTradeOffBalanceScale() {
  const [isInternetLost, setIsInternetLost] = useState(false);
  const [selectedFactor, setSelectedFactor] = useState(null);

  const BENEFITS = [
    {
      id: "cost",
      title: "Cost Savings",
      titleVi: "Tiết Kiệm Chi Phí",
      desc: "Loại bỏ hoàn toàn chi phí mua sắm máy chủ vật lý (Zero CAPEX), cắt giảm đội ngũ bảo trì hạ tầng.",
      icon: DollarSign,
      color: "text-emerald-500",
      badge: "Tài chính"
    },
    {
      id: "scale",
      title: "Ability of Extension",
      titleVi: "Khả Năng Mở Rộng",
      desc: "Nâng cấp từ 10 người dùng lên 10.000 người dùng chỉ bằng vài cú nhấp chuột trên bảng điều khiển.",
      icon: TrendingUp,
      color: "text-emerald-500",
      badge: "Quy mô"
    },
    {
      id: "update",
      title: "Update Automatically",
      titleVi: "Tự Động Cập Nhật",
      desc: "Người dùng luôn được sử dụng phiên bản mới nhất và an toàn nhất mà không phải chờ đợi IT vá lỗi.",
      icon: RefreshCw,
      color: "text-emerald-500",
      badge: "Vận hành"
    },
    {
      id: "flex",
      title: "Flexibility & Convenience",
      titleVi: "Linh Hoạt & Tiện Lợi",
      desc: "Làm việc mọi lúc mọi nơi từ bất kỳ thiết bị nào (Laptop, Tablet, Smartphone) chỉ cần có trình duyệt.",
      icon: Globe,
      color: "text-emerald-500",
      badge: "Trải nghiệm"
    }
  ];

  const DISADVANTAGES = [
    {
      id: "network",
      title: "Depends on Internet Connection",
      titleVi: "Phụ Thuộc Kết Nối Mạng",
      desc: "Nếu mất mạng Internet hoặc đứt cáp quang biển, người dùng hoàn toàn bị cô lập và không thể làm việc!",
      icon: WifiOff,
      color: "text-rose-500",
      badge: "Sống còn"
    },
    {
      id: "security",
      title: "Security & Privacy",
      titleVi: "Rủi Ro Bảo Mật & Riêng Tư",
      desc: "Dữ liệu kinh doanh nhạy cảm được lưu trữ trên hạ tầng máy chủ của bên thứ ba, đối mặt nguy cơ lộ lọt.",
      icon: ShieldAlert,
      color: "text-rose-500",
      badge: "An ninh"
    },
    {
      id: "custom",
      title: "Customization Restrictions",
      titleVi: "Hạn Chế Tùy Biến",
      desc: "Người dùng bị gò bó trong các tính năng và giao diện do nhà cung cấp định sẵn, không thể tự sửa code.",
      icon: Sliders,
      color: "text-rose-500",
      badge: "Tính năng"
    }
  ];

  return (
    <div className="my-8 rounded-3xl border border-stone-200 bg-linear-to-b from-stone-50/70 via-white to-stone-50/50 p-5 sm:p-7 shadow-xl font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-stone-200">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-orange-500 text-white mb-2 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            Cán Cân Đánh Đổi Lợi Ích & Rủi Ro
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
            Mục II: Ưu Điểm & Nhược Điểm Của SaaS
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-2xl">
            Sử dụng SaaS là một <strong>quyết định đánh đổi chiến lược</strong>: Đổi lấy sự <em>&quot;tiện lợi, rẻ, co giãn nhanh&quot;</em> bằng việc chấp nhận <em>&quot;phụ thuộc mạng, khó tùy biến, rủi ro bảo mật&quot;</em>.
          </p>
        </div>

        {/* Internet Outage Simulator Trigger */}
        <button
          onClick={() => setIsInternetLost(!isInternetLost)}
          className={`px-4 py-2.5 rounded-2xl text-xs font-black flex items-center gap-2 transition-all cursor-pointer shadow-md self-start sm:self-auto ${
            isInternetLost
              ? "bg-rose-600 text-white ring-2 ring-rose-300 animate-pulse"
              : "bg-stone-900 text-white hover:bg-stone-800"
          }`}
        >
          {isInternetLost ? (
            <>
              <WifiOff className="w-4 h-4 text-white" />
              <span>Đang Mất Mạng (Bấm Khôi Phục)</span>
            </>
          ) : (
            <>
              <Wifi className="w-4 h-4 text-emerald-400" />
              <span>💥 Giả Lập Đứt Mạng Internet</span>
            </>
          )}
        </button>
      </div>

      {/* Internet Outage Banner Alert */}
      {isInternetLost && (
        <div className="my-5 p-4 rounded-2xl bg-rose-950 text-rose-100 border border-rose-500/80 shadow-lg animate-in fade-in duration-300 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-rose-600 text-white shrink-0">
              <AlertTriangle className="w-5 h-5 animate-bounce" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-black text-rose-200">
                🚨 SỰ CỐ: MẤT KẾT NỐI INTERNET TOÀN BỘ HỆ THỐNG!
              </h4>
              <p className="text-[11px] sm:text-xs text-rose-300 mt-0.5">
                Các ứng dụng SaaS (Google Workspace, Salesforce, Trello) bị ngắt kết nối hoàn toàn. Doanh nghiệp không thể thao tác dữ liệu!
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsInternetLost(false)}
            className="px-3 py-1.5 rounded-xl bg-white text-rose-900 text-xs font-black hover:bg-rose-100 transition-all cursor-pointer shrink-0"
          >
            Khôi phục mạng
          </button>
        </div>
      )}

      {/* Visual Balance Scale Canvas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        {/* Left Pan: 4 Benefits */}
        <div
          className={`rounded-3xl border p-5 sm:p-6 transition-all ${
            isInternetLost
              ? "bg-stone-100/70 border-stone-300 opacity-60"
              : "bg-emerald-50/40 border-emerald-200 shadow-md ring-1 ring-emerald-300/50"
          }`}
        >
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-emerald-200/60">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-emerald-600 text-white shadow-xs">
                <CheckCircle2 className="w-4 h-4" />
              </span>
              <h4 className="text-sm sm:text-base font-black text-stone-900">
                4 Ưu Điểm Cốt Lõi (Benefits)
              </h4>
            </div>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-emerald-100 text-emerald-800 border border-emerald-300">
              Điểm Cộng
            </span>
          </div>

          <div className="space-y-3">
            {BENEFITS.map((item) => {
              const IconComp = item.icon;
              const isSelected = selectedFactor === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedFactor(isSelected ? null : item.id)}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? "bg-white border-emerald-500 shadow-md ring-2 ring-emerald-200"
                      : "bg-white/80 border-stone-200 hover:border-emerald-300 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <IconComp className="w-4 h-4 text-emerald-600" />
                      <div>
                        <h5 className="text-xs font-black text-stone-900">{item.titleVi}</h5>
                        <span className="text-[10px] text-stone-400 font-mono">({item.title})</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-stone-100 text-stone-600">
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 mt-2 leading-relaxed font-normal">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Pan: 3 Disadvantages */}
        <div
          className={`rounded-3xl border p-5 sm:p-6 transition-all ${
            isInternetLost
              ? "bg-rose-50 border-rose-300 shadow-xl ring-2 ring-rose-400"
              : "bg-rose-50/40 border-rose-200 shadow-md ring-1 ring-rose-300/50"
          }`}
        >
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-rose-200/60">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-rose-600 text-white shadow-xs">
                <XCircle className="w-4 h-4" />
              </span>
              <h4 className="text-sm sm:text-base font-black text-stone-900">
                3 Nhược Điểm Cốt Lõi (Disadvantages)
              </h4>
            </div>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-rose-100 text-rose-800 border border-rose-300">
              Rủi Ro Đánh Đổi
            </span>
          </div>

          <div className="space-y-3">
            {DISADVANTAGES.map((item) => {
              const IconComp = item.icon;
              const isSelected = selectedFactor === item.id;
              const isHighlight = item.id === "network" && isInternetLost;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedFactor(isSelected ? null : item.id)}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                    isHighlight
                      ? "bg-rose-100 border-rose-500 shadow-md ring-2 ring-rose-400 animate-pulse"
                      : isSelected
                      ? "bg-white border-rose-500 shadow-md ring-2 ring-rose-200"
                      : "bg-white/80 border-stone-200 hover:border-rose-300 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <IconComp className={`w-4 h-4 ${isHighlight ? "text-rose-700" : "text-rose-600"}`} />
                      <div>
                        <h5 className="text-xs font-black text-stone-900">{item.titleVi}</h5>
                        <span className="text-[10px] text-stone-400 font-mono">({item.title})</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-stone-100 text-stone-600">
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 mt-2 leading-relaxed font-normal">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Strategic Decision Matrix Alert */}
      <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200 text-orange-950 text-xs leading-relaxed font-medium">
        <strong>📌 Khẩu quyết thi cử Mục II:</strong> Khi lựa chọn SaaS, doanh nghiệp đang thực hiện một bài toán đánh đổi rõ rệt:{" "}
        <strong>&quot;Tiện lợi, chi phí rẻ, tự động cập nhật&quot;</strong> ↔ đổi lấy việc{" "}
        <strong>&quot;Phụ thuộc 100% vào mạng Internet, khó tùy biến sâu theo ý muốn và tiềm ẩn rủi ro lộ lọt dữ liệu kinh doanh&quot;</strong>.
      </div>
    </div>
  );
}
