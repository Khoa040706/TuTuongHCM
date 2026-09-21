"use client";
import React, { useState } from "react";
import { Server, ShieldCheck, Database, RefreshCw, AlertOctagon, Activity, CheckCircle2, Sparkles, Cloud, ArrowRight, Zap, DollarSign } from "lucide-react";

export default function AwsReliabilityAutoScalingSimulator() {
  const [activeTab, setActiveTab] = useState("aws"); // 'aws' | 'gcp'
  const [isAzDown, setIsAzDown] = useState(false);
  const [isAutoScaled, setIsAutoScaled] = useState(false);

  return (
    <div className="my-8 p-5 sm:p-7 rounded-3xl bg-white border border-stone-200 shadow-md font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-black uppercase tracking-widest text-sky-600">
              Interactive Blueprint • Mục VII.1
            </span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800">
              AWS & Google Cloud
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-black text-stone-900 mt-1">
            Ứng Dụng Thực Tế: Mô Phỏng Auto Scaling, Data Replication & Khả Năng Chịu Lỗi (Fault Tolerance)
          </h3>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Quan sát cơ chế nhân bản dữ liệu đa vùng (Replication) và dự phòng (Redundancy) giúp duy trì tính sẵn sàng cao.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-stone-100 border border-stone-200/80 self-start sm:self-auto shrink-0">
          <button
            type="button"
            onClick={() => setActiveTab("aws")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === "aws" ? "bg-amber-600 text-white shadow-xs" : "text-stone-600 hover:text-stone-900"
            }`}
          >
            <Server className="w-3.5 h-3.5" />
            <span>Mô Phỏng AWS EC2 & S3</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("gcp")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === "gcp" ? "bg-sky-600 text-white shadow-xs" : "text-stone-600 hover:text-stone-900"
            }`}
          >
            <Cloud className="w-3.5 h-3.5" />
            <span>Giải Pháp Google Cloud</span>
          </button>
        </div>
      </div>

      {/* VIEW 1: AWS AUTO SCALING & FAULT TOLERANCE SIMULATION */}
      {activeTab === "aws" && (
        <div className="space-y-6">
          {/* Controls bar */}
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-3">
            <div className="text-xs font-black text-stone-700 uppercase tracking-wide">
              Thực Nghiệm Kịch Bản Hệ Thống AWS:
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsAzDown(!isAzDown)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  isAzDown
                    ? "bg-rose-600 text-white shadow-xs animate-pulse"
                    : "bg-white border border-rose-200 text-rose-700 hover:bg-rose-50"
                }`}
              >
                <AlertOctagon className="w-3.5 h-3.5" />
                <span>{isAzDown ? "Đang Gặp Sự Cố: AZ-A Sập!" : "Thử Nghiệm: Đánh Sập Data Center AZ-A"}</span>
              </button>

              <button
                type="button"
                onClick={() => setIsAutoScaled(!isAutoScaled)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  isAutoScaled
                    ? "bg-emerald-600 text-white shadow-xs"
                    : "bg-white border border-emerald-200 text-emerald-700 hover:bg-emerald-50"
                }`}
              >
                <Zap className="w-3.5 h-3.5" />
                <span>{isAutoScaled ? "Đang Bật Auto-Scaling (x2 Máy Chủ)" : "Thử Nghiệm: Tăng Tải Gấp Đôi (Auto Scale)"}</span>
              </button>
            </div>
          </div>

          {/* 3 Availability Zones Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* AZ-A */}
            <div className={`p-4 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
              isAzDown ? "bg-rose-50 border-rose-300 opacity-60" : "bg-white border-stone-200 shadow-xs"
            }`}>
              <div>
                <div className="flex items-center justify-between gap-2 mb-2 pb-2 border-b border-stone-200">
                  <span className="text-xs font-black text-stone-850">Data Center: AZ-A</span>
                  <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                    isAzDown ? "bg-rose-200 text-rose-900" : "bg-emerald-100 text-emerald-800"
                  }`}>
                    {isAzDown ? "SỰ CỐ NGOÀI Ý MUỐN" : "HOẠT ĐỘNG TỐT"}
                  </span>
                </div>

                <div className="space-y-2 mt-3 text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="text-stone-600 font-medium">EC2 Máy Chủ Ảo:</span>
                    <span className="font-bold text-stone-900">{isAzDown ? "0 Offline" : isAutoScaled ? "4 Active" : "2 Active"}</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="text-stone-600 font-medium">S3 Data Replica:</span>
                    <span className="font-bold text-stone-900">{isAzDown ? "Không thể truy cập" : "Bản sao A (Đồng bộ)"}</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-2 border-t border-stone-200 text-[11px] text-stone-500">
                {isAzDown ? "Lưu lượng tự động chuyển hướng sang AZ-B và AZ-C" : "Xử lý 33% lưu lượng truy cập ban đầu"}
              </div>
            </div>

            {/* AZ-B (Redundancy) */}
            <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2 pb-2 border-b border-stone-200">
                  <span className="text-xs font-black text-stone-850">Data Center: AZ-B</span>
                  <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                    {isAzDown ? "GÁNH TẢI DỰ PHÒNG" : "HOẠT ĐỘNG TỐT"}
                  </span>
                </div>

                <div className="space-y-2 mt-3 text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="text-stone-600 font-medium">EC2 Máy Chủ Ảo:</span>
                    <span className="font-bold text-stone-900">{isAzDown ? (isAutoScaled ? "6 Active" : "3 Active") : (isAutoScaled ? "4 Active" : "2 Active")}</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="text-stone-600 font-medium">S3 Data Replica:</span>
                    <span className="font-bold text-emerald-700">Bản sao B (Sẵn sàng 100%)</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-2 border-t border-stone-200 text-[11px] text-stone-500">
                {isAzDown ? "Kích hoạt Redundancy & Data Replication tự động" : "Duy trì bản sao dự phòng tức thì"}
              </div>
            </div>

            {/* AZ-C (High Availability) */}
            <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2 pb-2 border-b border-stone-200">
                  <span className="text-xs font-black text-stone-850">Data Center: AZ-C</span>
                  <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                    {isAzDown ? "GÁNH TẢI DỰ PHÒNG" : "HOẠT ĐỘNG TỐT"}
                  </span>
                </div>

                <div className="space-y-2 mt-3 text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="text-stone-600 font-medium">EC2 Máy Chủ Ảo:</span>
                    <span className="font-bold text-stone-900">{isAzDown ? (isAutoScaled ? "6 Active" : "3 Active") : (isAutoScaled ? "4 Active" : "2 Active")}</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="text-stone-600 font-medium">S3 Data Replica:</span>
                    <span className="font-bold text-emerald-700">Bản sao C (Sẵn sàng 100%)</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-2 border-t border-stone-200 text-[11px] text-stone-500">
                {isAzDown ? "Bảo toàn dữ liệu trọn vẹn, không gián đoạn dịch vụ" : "Duy trì bản sao dự phòng thứ 3"}
              </div>
            </div>
          </div>

          {/* System Status Summary */}
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-950 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <div className="font-bold text-emerald-900">
                  Trạng Thái Toàn Hệ Thống: 100% Sẵn Sàng (High Availability) & Chịu Lỗi (Fault Tolerance)
                </div>
                <div className="text-xs text-emerald-800 mt-0.5">
                  Nhờ cơ chế <strong>Data Replication</strong> (nhân bản dữ liệu qua 3 AZs) và <strong>Redundancy</strong> (dự phòng tài nguyên), ngay cả khi toàn bộ 1 Data Center gặp thiên tai sập nguồn, ứng dụng vẫn hoạt động 0 giây gián đoạn.
                </div>
              </div>
            </div>
          </div>

          {/* 3 Core Benefits of AWS Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-4 rounded-xl bg-white border border-stone-200">
              <div className="text-xs font-black text-amber-700 uppercase mb-1">1. Scalability (Khả năng mở rộng)</div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Co giãn linh hoạt tài nguyên máy chủ tính toán theo tải sử dụng thực tế (thuê theo giờ/giây, Auto-scaling).
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-stone-200">
              <div className="text-xs font-black text-emerald-700 uppercase mb-1">2. Cost Savings (Tiết kiệm chi phí)</div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Không lãng phí chi phí đầu tư phần cứng nhàn rỗi; chỉ trả tiền cho tài nguyên compute và lưu trữ đã thực sự dùng.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-stone-200">
              <div className="text-xs font-black text-sky-700 uppercase mb-1">3. High Reliability (Độ tin cậy cao)</div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Nhân bản dữ liệu tự động (Replication) + giải pháp dự phòng (Redundancy) &rarr; gắn liền với <strong>Fault Tolerance & Availability</strong>.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: GOOGLE CLOUD PLATFORM SOLUTIONS */}
      {activeTab === "gcp" && (
        <div className="space-y-4">
          <span className="text-xs font-black uppercase tracking-wider text-stone-500 block">
            Các Giải Pháp Đám Mây Tiêu Biểu Của Google Cloud Platform:
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Gmail */}
            <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-black px-2.5 py-0.5 rounded-md bg-rose-100 text-rose-800">
                    SaaS Tiêu Biểu
                  </span>
                  <h4 className="text-base font-black text-stone-900">Google Gmail</h4>
                </div>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-3">
                  Dịch vụ thư điện tử đám mây phục vụ hơn 1.8 tỷ người dùng với hạ tầng backend hoàn toàn tự động.
                </p>

                <div className="space-y-2 text-xs text-stone-700">
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-stone-50 border border-stone-200/70">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span><strong>Easy access:</strong> Truy cập dễ dàng mọi lúc, mọi nơi từ bất kỳ trình duyệt hoặc thiết bị.</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-stone-50 border border-stone-200/70">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span><strong>Synchronization:</strong> Đồng bộ email, danh bạ, nhãn tức thì trên toàn bộ hệ sinh thái thiết bị.</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-stone-50 border border-stone-200/70">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span><strong>Diverse features:</strong> Lọc thư rác thông minh bằng AI, tích hợp Google Meet, Google Drive.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Docs */}
            <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-black px-2.5 py-0.5 rounded-md bg-sky-100 text-sky-800">
                    Cộng Tác Thời Gian Thực
                  </span>
                  <h4 className="text-base font-black text-stone-900">Google Docs & Workspace</h4>
                </div>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-3">
                  Bộ công cụ văn phòng đám mây tương thích đa định dạng (PSD, Illustrator, PowerPoint, Excel, Apple Pages).
                </p>

                <div className="space-y-2 text-xs text-stone-700">
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-stone-50 border border-stone-200/70">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span><strong>Cost savings:</strong> Miễn phí cho người dùng cá nhân, chi phí bản quyền doanh nghiệp cực thấp.</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-stone-50 border border-stone-200/70">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span><strong>Synchronization:</strong> Tự động lưu và đồng bộ từng ký tự soạn thảo theo thời gian thực.</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-stone-50 border border-stone-200/70">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span><strong>Easy sharing:</strong> Chia sẻ quyền xem/sửa tức thì qua đường dẫn link phân quyền an toàn.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
