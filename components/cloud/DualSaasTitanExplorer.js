"use client";
import React, { useState } from "react";

export default function DualSaasTitanExplorer() {
  const [activeTitan, setActiveTitan] = useState("google"); // 'google' | 'salesforce'

  return (
    <div className="my-8 rounded-2xl border border-sky-500/20 bg-gradient-to-br from-[#161a20] via-[#1a2029] to-[#14171d] p-5 md:p-7 text-neutral-200 shadow-2xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-800 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-400">
            <span>🌍 Mục VII.1 • SaaS in Reality</span>
          </div>
          <h3 className="mt-2 text-xl font-bold tracking-tight text-white md:text-2xl">
            Bản Đồ Hệ Sinh Thái: 2 Gã Khổng Lồ SaaS Thực Tế
          </h3>
          <p className="mt-1 text-sm text-neutral-400">
            Khảo sát chuyên sâu Google Workspace (Văn phòng đám mây) & Salesforce (Tiên phong CRM toàn cầu)
          </p>
        </div>

        {/* Titan Switcher */}
        <div className="flex rounded-xl bg-neutral-900/90 p-1 border border-neutral-800">
          <button
            onClick={() => setActiveTitan("google")}
            className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-bold transition-all ${
              activeTitan === "google"
                ? "bg-gradient-to-r from-red-600 via-amber-600 to-emerald-600 text-white shadow-md"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <span>📁 Google Workspace</span>
          </button>
          <button
            onClick={() => setActiveTitan("salesforce")}
            className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-bold transition-all ${
              activeTitan === "salesforce"
                ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <span>☁️ Salesforce CRM</span>
          </button>
        </div>
      </div>

      {/* TITAN 1: GOOGLE WORKSPACE */}
      {activeTitan === "google" && (
        <div className="mt-6 space-y-6">
          {/* Identity Banner */}
          <div className="rounded-2xl border border-neutral-700 bg-black/40 p-5">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Hệ Sinh Thái Văn Phòng & Hợp Tác Trực Tuyến
                </span>
                <h4 className="text-xl font-black text-white mt-1">Google Workspace (Google Apps)</h4>
                <p className="mt-1 text-xs text-neutral-300">
                  Bộ giải pháp SaaS toàn diện hàng đầu thế giới cho doanh nghiệp, giáo dục và người dùng cá nhân.
                </p>
              </div>
              <div className="flex gap-2">
                <span className="rounded-lg bg-emerald-500/20 px-3 py-1.5 text-xs font-bold text-emerald-300 border border-emerald-500/30">
                  SLA 99.9% Uptime
                </span>
                <span className="rounded-lg bg-sky-500/20 px-3 py-1.5 text-xs font-bold text-sky-300 border border-sky-500/30">
                  Hơn 3 Tỷ Người Dùng
                </span>
              </div>
            </div>

            {/* 7 Core Services Grid from Curriculum */}
            <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 text-center text-xs">
              <div className="rounded-xl border border-red-500/30 bg-red-950/20 p-2.5">
                <div className="text-2xl">✉️</div>
                <div className="font-bold text-white mt-1">Gmail</div>
                <div className="text-[10px] text-neutral-400">Email doanh nghiệp</div>
              </div>
              <div className="rounded-xl border border-amber-500/30 bg-amber-950/20 p-2.5">
                <div className="text-2xl">💾</div>
                <div className="font-bold text-white mt-1">Drive</div>
                <div className="text-[10px] text-neutral-400">Lưu trữ đám mây</div>
              </div>
              <div className="rounded-xl border border-blue-500/30 bg-blue-950/20 p-2.5">
                <div className="text-2xl">📄</div>
                <div className="font-bold text-white mt-1">Docs</div>
                <div className="text-[10px] text-neutral-400">Soạn thảo văn bản</div>
              </div>
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-2.5">
                <div className="text-2xl">📊</div>
                <div className="font-bold text-white mt-1">Sheets</div>
                <div className="text-[10px] text-neutral-400">Bảng tính trực tuyến</div>
              </div>
              <div className="rounded-xl border border-amber-500/30 bg-amber-950/20 p-2.5">
                <div className="text-2xl">📽️</div>
                <div className="font-bold text-white mt-1">Slides</div>
                <div className="text-[10px] text-neutral-400">Trình chiếu tương tác</div>
              </div>
              <div className="rounded-xl border border-blue-500/30 bg-blue-950/20 p-2.5">
                <div className="text-2xl">📅</div>
                <div className="font-bold text-white mt-1">Calendar</div>
                <div className="text-[10px] text-neutral-400">Lịch làm việc nhóm</div>
              </div>
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-2.5">
                <div className="text-2xl">📹</div>
                <div className="font-bold text-white mt-1">Meet</div>
                <div className="text-[10px] text-neutral-400">Họp trực tuyến HD</div>
              </div>
            </div>
          </div>

          {/* 4 Benefits & 3 Application Sectors from Slides */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* 4 Benefits */}
            <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/10 p-4">
              <h5 className="font-bold text-emerald-400 text-sm flex items-center gap-2">
                <span>🌟</span> 4 Lợi Ích Cốt Lõi (Benefits)
              </h5>
              <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                <div className="rounded-lg bg-black/40 p-2.5 border border-neutral-800">
                  <div className="font-bold text-white">💰 Cost savings</div>
                  <div className="text-[11px] text-neutral-400 mt-0.5">Tiết kiệm chi phí phần cứng & IT</div>
                </div>
                <div className="rounded-lg bg-black/40 p-2.5 border border-neutral-800">
                  <div className="font-bold text-white">⚙️ Easy to manage</div>
                  <div className="text-[11px] text-neutral-400 mt-0.5">Bảng điều khiển Admin tập trung</div>
                </div>
                <div className="rounded-lg bg-black/40 p-2.5 border border-neutral-800">
                  <div className="font-bold text-white">🤝 Strengthen cooperation</div>
                  <div className="text-[11px] text-neutral-400 mt-0.5">Đồng chỉnh sửa tài liệu thời gian thực</div>
                </div>
                <div className="rounded-lg bg-black/40 p-2.5 border border-neutral-800">
                  <div className="font-bold text-white">🛡️ High security</div>
                  <div className="text-[11px] text-neutral-400 mt-0.5">Bảo mật mã hóa cấp độ Google Cloud</div>
                </div>
              </div>
            </div>

            {/* 3 Application Sectors */}
            <div className="rounded-xl border border-sky-500/30 bg-sky-950/10 p-4">
              <h5 className="font-bold text-sky-400 text-sm flex items-center gap-2">
                <span>🎯</span> 3 Đối Tượng Ứng Dụng (Application Sectors)
              </h5>
              <div className="mt-3 space-y-2 text-xs">
                <div className="flex items-center gap-3 rounded-lg bg-black/40 p-2.5 border border-neutral-800">
                  <span className="text-lg">🏢</span>
                  <div>
                    <strong className="text-white">Businesses (Doanh nghiệp):</strong>
                    <span className="text-neutral-400 ml-1">Email tên miền riêng, họp video Meet, lưu trữ an toàn.</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg bg-black/40 p-2.5 border border-neutral-800">
                  <span className="text-lg">🎓</span>
                  <div>
                    <strong className="text-white">Education (Giáo dục):</strong>
                    <span className="text-neutral-400 ml-1">Google Classroom, bài tập, lớp học trực tuyến miễn phí/ưu đãi.</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg bg-black/40 p-2.5 border border-neutral-800">
                  <span className="text-lg">👤</span>
                  <div>
                    <strong className="text-white">Personal (Cá nhân):</strong>
                    <span className="text-neutral-400 ml-1">Hòm thư Gmail, 15GB Drive miễn phí, làm việc tự do linh hoạt.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TITAN 2: SALESFORCE */}
      {activeTitan === "salesforce" && (
        <div className="mt-6 space-y-6">
          {/* Identity Banner */}
          <div className="rounded-2xl border border-neutral-700 bg-black/40 p-5">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                  Biểu Tượng Tiên Phong SaaS Thế Giới
                </span>
                <h4 className="text-xl font-black text-white mt-1">
                  Salesforce — CRM Pioneer (Customer Relationship Management)
                </h4>
                <p className="mt-1 text-xs text-neutral-300">
                  Thành lập năm 1999 bởi Marc Benioff với khẩu quyết &quot;The End of Software&quot; (Chấm dứt kỷ nguyên phần mềm đóng hộp), mở đường cho toàn bộ ngành công nghiệp SaaS hiện đại.
                </p>
              </div>
              <div className="flex gap-2">
                <span className="rounded-lg bg-cyan-500/20 px-3 py-1.5 text-xs font-bold text-cyan-300 border border-cyan-500/30">
                  No. 1 CRM Toàn Cầu
                </span>
                <span className="rounded-lg bg-blue-500/20 px-3 py-1.5 text-xs font-bold text-blue-300 border border-blue-500/30">
                  Multi-tenant Tiêu Biểu
                </span>
              </div>
            </div>

            {/* 5 Core Services from Slides */}
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs">
              <div className="rounded-xl border border-blue-500/30 bg-blue-950/20 p-3">
                <div className="text-2xl">📈</div>
                <div className="font-bold text-white mt-1">Sales Cloud</div>
                <div className="text-[11px] text-neutral-400 mt-1">
                  Quản lý khách hàng tiềm năng (Leads), đường ống cơ hội và tự động hóa quy trình bán hàng.
                </div>
              </div>

              <div className="rounded-xl border border-cyan-500/30 bg-cyan-950/20 p-3">
                <div className="text-2xl">🎧</div>
                <div className="font-bold text-white mt-1">Service Cloud</div>
                <div className="text-[11px] text-neutral-400 mt-1">
                  Chăm sóc khách hàng đa kênh (Helpdesk, Omnichannel tickets, trung tâm hỗ trợ 24/7).
                </div>
              </div>

              <div className="rounded-xl border border-amber-500/30 bg-amber-950/20 p-3">
                <div className="text-2xl">📢</div>
                <div className="font-bold text-white mt-1">Marketing Cloud</div>
                <div className="text-[11px] text-neutral-400 mt-1">
                  Cá nhân hóa chiến dịch tiếp thị, gửi email tự động và theo dõi hành vi người dùng.
                </div>
              </div>

              <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-3">
                <div className="text-2xl">🛒</div>
                <div className="font-bold text-white mt-1">Commerce Cloud</div>
                <div className="text-[11px] text-neutral-400 mt-1">
                  Nền tảng thương mại điện tử B2B & B2C, quản lý đơn hàng thông minh trên đám mây.
                </div>
              </div>

              <div className="rounded-xl border border-purple-500/30 bg-purple-950/20 p-3">
                <div className="text-2xl">💬</div>
                <div className="font-bold text-white mt-1">Salesforce Chatter</div>
                <div className="text-[11px] text-neutral-400 mt-1">
                  Mạng xã hội doanh nghiệp nội bộ, chia sẻ tài liệu và thảo luận theo dự án tức thì.
                </div>
              </div>
            </div>
          </div>

          {/* 4 Benefits of Salesforce from Slides */}
          <div className="rounded-xl border border-cyan-500/30 bg-cyan-950/10 p-5">
            <h5 className="font-bold text-cyan-400 text-sm flex items-center gap-2">
              <span>🚀</span> 4 Giá Trị Đột Phá Salesforce Mang Lại Cho Doanh Nghiệp (Benefits)
            </h5>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              <div className="rounded-lg bg-black/50 p-3 border border-neutral-800">
                <div className="text-lg">🎯</div>
                <div className="font-bold text-white mt-1">Increase sales efficiency</div>
                <div className="text-neutral-400 text-[11px] mt-1">
                  Tăng tốc độ chốt đơn hàng, rút ngắn chu kỳ bán hàng nhờ tự động hóa báo giá và theo dõi hợp đồng.
                </div>
              </div>

              <div className="rounded-lg bg-black/50 p-3 border border-neutral-800">
                <div className="text-lg">🤝</div>
                <div className="font-bold text-white mt-1">Improve customer service</div>
                <div className="text-neutral-400 text-[11px] mt-1">
                  Nắm trọn hồ sơ lịch sử 360 độ của khách hàng, giải quyết khiếu nại nhanh chóng và tăng độ hài lòng.
                </div>
              </div>

              <div className="rounded-lg bg-black/50 p-3 border border-neutral-800">
                <div className="text-lg">📊</div>
                <div className="font-bold text-white mt-1">Marketing Optimization</div>
                <div className="text-neutral-400 text-[11px] mt-1">
                  Tối ưu hóa ngân sách tiếp thị, đo lường chính xác tỷ lệ hoàn vốn (ROI) của từng chiến dịch quảng cáo.
                </div>
              </div>

              <div className="rounded-lg bg-black/50 p-3 border border-neutral-800">
                <div className="text-lg">🌐</div>
                <div className="font-bold text-white mt-1">Enhance internal collaboration</div>
                <div className="text-neutral-400 text-[11px] mt-1">
                  Xóa bỏ rào cản ngăn cách giữa bộ phận kinh doanh, tiếp thị và kỹ thuật thông qua công cụ Chatter.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
