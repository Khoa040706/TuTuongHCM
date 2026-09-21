"use client";
import React, { useState } from "react";
import {
  Globe,
  HardDrive,
  Server,
  Cloud,
  CheckCircle2,
  XCircle,
  Sparkles,
  ArrowRight,
  Clock,
  DollarSign,
  ShieldCheck,
  RefreshCw,
  Layers,
  Laptop
} from "lucide-react";

export default function SaasLifecycleDuel() {
  const [activeMode, setActiveMode] = useState("compare"); // 'compare' | 'capex-opex'
  const [userCount, setUserCount] = useState(20);

  const ON_PREMISE_STEPS = [
    { step: 1, title: "Mua Bản Quyền Đóng Gói", desc: "Trả trước phí bản quyền vĩnh viễn (Perpetual License) đắt đỏ.", time: "1 - 2 tuần" },
    { step: 2, title: "Mua Sắm Máy Chủ Vật Lý", desc: "Đầu tư phần cứng Server, UPS, tủ Rack và mạng nội bộ.", time: "2 - 4 tuần" },
    { step: 3, title: "Cài Đặt & Cấu Hình HĐH", desc: "Đội ngũ IT cài đặt OS, CSDL, thiết lập Firewall và bảo mật.", time: "2 - 3 tuần" },
    { step: 4, title: "Vá Lỗi & Bảo Trì Thủ Công", desc: "Doanh nghiệp tự chịu 100% rủi ro khi hỏng hóc hoặc cập nhật.", time: "Liên tục hàng tháng" }
  ];

  const SAAS_STEPS = [
    { step: 1, title: "Mở Trình Duyệt Web", desc: "Chỉ cần kết nối Internet, truy cập URL mà không cần cài đặt cục bộ.", time: "10 giây" },
    { step: 2, title: "Đăng Ký & Chọn Gói Dịch Vụ", desc: "Lựa chọn gói dịch vụ theo nhu cầu thực tế (Pay-as-you-go).", time: "1 phút" },
    { step: 3, title: "Đăng Nhập & Sử Dụng Ngay", desc: "Hệ thống đã sẵn sàng 100%, dữ liệu lưu trên máy chủ đám mây.", time: "Tức thì" },
    { step: 4, title: "Tự Động Cập Nhật & Bảo Trì", desc: "Nhà cung cấp bên thứ ba (Service Provider) tự lo toàn bộ 100%.", time: "Tự động ngầm" }
  ];

  // Financial simulation
  const onPremiseCapex = 15000 + userCount * 120;
  const onPremiseMaintenanceAnnual = onPremiseCapex * 0.2;
  const saasMonthly = userCount * 15;
  const saasAnnual = saasMonthly * 12;

  return (
    <div className="my-8 rounded-3xl border border-amber-200/80 bg-linear-to-b from-amber-50/40 via-white to-stone-50/50 p-5 sm:p-7 shadow-xl font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-stone-200">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-amber-500 text-stone-950 mb-2 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            Mô Phỏng Đối Kháng Vòng Đời Phần Mềm
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
            Mục I: On-Premise vs Software as a Service (SaaS)
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-2xl">
            Bản chất cốt lõi của SaaS là <strong>&quot;Thuê phần mềm qua mạng&quot;</strong> — Nhà cung cấp bên thứ ba (Third-party Provider) chịu trách nhiệm lưu trữ, vận hành, bảo trì và tự động cập nhật toàn bộ!
          </p>
        </div>

        {/* Mode switcher */}
        <div className="flex gap-1.5 bg-stone-100 p-1.5 rounded-2xl border border-stone-200 self-start sm:self-auto">
          <button
            onClick={() => setActiveMode("compare")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeMode === "compare"
                ? "bg-stone-900 text-white shadow-xs"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Quy Trình Triển Khai
          </button>
          <button
            onClick={() => setActiveMode("capex-opex")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeMode === "capex-opex"
                ? "bg-amber-500 text-stone-950 shadow-xs"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            💰 Chi Phí CAPEX vs OPEX
          </button>
        </div>
      </div>

      {/* MODE 1: LIFECYCLE PIPELINE COMPARISON */}
      {activeMode === "compare" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          {/* On-Premise Card */}
          <div className="rounded-3xl border border-stone-300 bg-white p-5 sm:p-6 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-2xl bg-stone-800 text-white shadow-xs">
                    <Server className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-black text-stone-900">Phần Mềm Đóng Gói Cục Bộ</h4>
                    <span className="text-[11px] font-bold text-stone-500">On-Premise / Local Software</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-black bg-stone-100 text-stone-700 border border-stone-300">
                  Tự Mua & Tự Vận Hành
                </span>
              </div>

              <div className="space-y-3 my-4">
                {ON_PREMISE_STEPS.map((s) => (
                  <div
                    key={s.step}
                    className="p-3 rounded-2xl bg-stone-50 border border-stone-200 flex items-start gap-3"
                  >
                    <span className="w-6 h-6 rounded-full bg-stone-300 text-stone-800 font-mono font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {s.step}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h5 className="text-xs font-black text-stone-900">{s.title}</h5>
                        <span className="text-[10px] font-mono text-stone-500 font-bold">{s.time}</span>
                      </div>
                      <p className="text-[11px] text-stone-600 mt-0.5">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 p-3 rounded-2xl bg-stone-100 text-xs text-stone-700 space-y-1 border border-stone-200">
              <div className="flex justify-between font-bold">
                <span>Tổng thời gian chuẩn bị:</span>
                <span className="text-rose-600 font-mono font-black">2 – 3 Tháng</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Trách nhiệm bảo trì:</span>
                <span className="text-stone-900">Doanh nghiệp tự lo 100%</span>
              </div>
            </div>
          </div>

          {/* SaaS Card */}
          <div className="rounded-3xl border border-amber-300 bg-linear-to-b from-amber-50/50 via-white to-orange-50/30 p-5 sm:p-6 shadow-md ring-2 ring-amber-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-2xl bg-amber-500 text-stone-950 shadow-xs">
                    <Cloud className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-black text-stone-900">Software as a Service</h4>
                    <span className="text-[11px] font-bold text-amber-700">Mô hình SaaS Đám Mây</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-black bg-amber-100 text-amber-900 border border-amber-300">
                  Thuê Dùng Qua Mạng
                </span>
              </div>

              <div className="space-y-3 my-4">
                {SAAS_STEPS.map((s) => (
                  <div
                    key={s.step}
                    className="p-3 rounded-2xl bg-amber-50/60 border border-amber-200 flex items-start gap-3"
                  >
                    <span className="w-6 h-6 rounded-full bg-amber-400 text-stone-950 font-mono font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {s.step}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h5 className="text-xs font-black text-stone-900">{s.title}</h5>
                        <span className="text-[10px] font-mono text-amber-700 font-bold">{s.time}</span>
                      </div>
                      <p className="text-[11px] text-stone-600 mt-0.5">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 p-3 rounded-2xl bg-amber-100/70 text-xs text-amber-950 space-y-1 border border-amber-200">
              <div className="flex justify-between font-bold">
                <span>Tổng thời gian chuẩn bị:</span>
                <span className="text-emerald-700 font-mono font-black">Dưới 5 Phút (Tức thì)</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Trách nhiệm bảo trì:</span>
                <span className="text-emerald-700">Service Provider lo 100%</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODE 2: CAPEX VS OPEX FINANCIAL CALCULATOR */}
      {activeMode === "capex-opex" && (
        <div className="my-6 p-5 sm:p-6 rounded-3xl bg-stone-900 text-white border border-stone-800 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-800">
            <div>
              <h4 className="text-base font-black text-white flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-amber-400" />
                So Sánh Mô Hình Tài Chính: CAPEX vs OPEX
              </h4>
              <p className="text-xs text-stone-400 mt-1">
                Kéo thanh trượt số lượng nhân sự để xem sự chênh lệch chi phí đầu tư ban đầu giữa On-Premise và SaaS.
              </p>
            </div>

            {/* Slider control */}
            <div className="flex items-center gap-3 bg-stone-950 p-2.5 rounded-2xl border border-stone-800 self-start sm:self-auto">
              <span className="text-xs font-bold text-stone-400">Số nhân viên:</span>
              <input
                type="range"
                min="5"
                max="100"
                step="5"
                value={userCount}
                onChange={(e) => setUserCount(Number(e.target.value))}
                className="w-28 accent-amber-400 cursor-pointer"
              />
              <span className="font-mono font-black text-amber-400 text-sm w-8">{userCount}</span>
            </div>
          </div>

          {/* Financial Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* On-Premise Cost */}
            <div className="p-4 rounded-2xl bg-stone-950 border border-stone-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-rose-400">
                  On-Premise (CAPEX Nặng Nề)
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-950 text-rose-300 border border-rose-800">
                  Vốn Đầu Tư Lớn
                </span>
              </div>
              <div className="space-y-1.5 pt-1 text-xs text-stone-300">
                <div className="flex justify-between">
                  <span>Phần cứng Server & Mạng:</span>
                  <span className="font-mono font-bold">$15,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Phí bản quyền ({userCount} users):</span>
                  <span className="font-mono font-bold">${(userCount * 120).toLocaleString()}</span>
                </div>
                <div className="flex justify-between border-t border-stone-800 pt-1.5 text-stone-100 font-extrabold">
                  <span>Tổng vốn ban đầu (Năm 1):</span>
                  <span className="font-mono text-rose-400 font-black text-sm">
                    ${onPremiseCapex.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-[11px] text-stone-500">
                  <span>Phí bảo trì IT hàng năm (~20%):</span>
                  <span className="font-mono">${onPremiseMaintenanceAnnual.toLocaleString()}/năm</span>
                </div>
              </div>
            </div>

            {/* SaaS Cost */}
            <div className="p-4 rounded-2xl bg-stone-950 border border-amber-500/40 space-y-3 ring-1 ring-amber-500/20">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-amber-400">
                  SaaS (OPEX Tối Ưu)
                </span>
                <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-amber-400 text-stone-950">
                  Pay As You Go
                </span>
              </div>
              <div className="space-y-1.5 pt-1 text-xs text-stone-300">
                <div className="flex justify-between">
                  <span>Vốn đầu tư phần cứng ban đầu:</span>
                  <span className="font-mono font-black text-emerald-400">$0 (Không cần mua Server)</span>
                </div>
                <div className="flex justify-between">
                  <span>Chi phí thuê theo tháng ($15/user):</span>
                  <span className="font-mono font-bold">${saasMonthly.toLocaleString()}/tháng</span>
                </div>
                <div className="flex justify-between border-t border-stone-800 pt-1.5 text-stone-100 font-extrabold">
                  <span>Tổng chi phí năm đầu tiên:</span>
                  <span className="font-mono text-emerald-400 font-black text-sm">
                    ${saasAnnual.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-[11px] text-emerald-300">
                  <span>Tiết kiệm vốn ban đầu:</span>
                  <span className="font-mono font-bold text-amber-300">
                    -${(onPremiseCapex - saasAnnual).toLocaleString()} ({( ((onPremiseCapex - saasAnnual) / onPremiseCapex) * 100 ).toFixed(0)}%)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Exam Memo Footer */}
      <div className="p-4 rounded-2xl bg-amber-100/60 border border-amber-200 text-amber-950 text-xs leading-relaxed font-medium">
        <strong>💡 Trọng tâm thi cử Mục I:</strong> SaaS (Software as a Service) là mô hình phân phối phần mềm trong đó nhà cung cấp bên thứ ba (third-party provider) lưu trữ ứng dụng và phân phối cho khách hàng qua Internet. Người dùng <strong>không cần cài đặt phần mềm cục bộ</strong>, toàn bộ cập nhật và bảo trì do nhà cung cấp thực hiện, thanh toán linh hoạt theo mức sử dụng.
      </div>
    </div>
  );
}
