"use client";
import React, { useState } from "react";

export default function VendorLockInSimulator() {
  const [activeTab, setActiveTab] = useState("simulator"); // 'simulator' | 'disadvantages' | 'remedies'
  
  // Lock-in Simulation Config
  const [selectedSdkLevel, setSelectedSdkLevel] = useState("high"); // 'low' | 'medium' | 'high' | 'extreme'

  const lockInScenarios = {
    low: {
      name: "Mức 1: Chuẩn Mở Tối Đa (Open Standards)",
      levelLabel: "An Toàn (Low Lock-in)",
      gaugeColor: "text-emerald-400",
      bgColor: "bg-emerald-950/40 border-emerald-500/40",
      badge: "Rủi Ro: Rất Thấp",
      techStack: "Docker chuẩn OCI, CSDL PostgreSQL, REST API tiêu chuẩn, JWT Auth mở.",
      refactorPercent: "5%",
      refactorWeeks: "1 - 2 tuần",
      migrationCost: "$2,000",
      desc: "Ứng dụng được thiết kế hoàn toàn dựa trên chuẩn mở và container. Chỉ cần đóng gói Docker image là có thể deploy sang bất kỳ Cloud Provider nào (AWS, GCP, Azure, DigitalOcean) trong vài giờ."
    },
    medium: {
      name: "Mức 2: Dùng Dịch Vụ Lưu Trữ & Hàng Đợi (Partial Cloud Services)",
      levelLabel: "Cảnh Báo (Moderate Lock-in)",
      gaugeColor: "text-amber-400",
      bgColor: "bg-amber-950/40 border-amber-500/40",
      badge: "Rủi Ro: Trung Bình",
      techStack: "AWS S3 SDK, Cloud Pub/Sub, SendGrid email hook, Managed Redis.",
      refactorPercent: "25%",
      refactorWeeks: "4 - 6 tuần",
      migrationCost: "$15,000",
      desc: "Ứng dụng bắt đầu gọi trực tiếp SDK của nhà cung cấp để lưu trữ file blob và hàng đợi tin nhắn. Khi chuyển sang nền tảng khác, đội ngũ dev phải viết lại lớp Adapter lưu trữ và cấu hình lại queue."
    },
    high: {
      name: "Mức 3: Gắn Chặt CSDL & Auth Độc Quyền (Proprietary DB & Auth)",
      levelLabel: "Nguy Hiểm (High Lock-in)",
      gaugeColor: "text-orange-400",
      bgColor: "bg-orange-950/40 border-orange-500/40",
      badge: "Rủi Ro: Cao",
      techStack: "Google Datastore/Firestore API, Azure B2C Identity, AWS AppSync GraphQL.",
      refactorPercent: "60%",
      refactorWeeks: "3 - 5 tháng",
      migrationCost: "$60,000",
      desc: "Mã nguồn gắn chặt vào cú pháp truy vấn độc quyền của nhà cung cấp. Toàn bộ logic nghiệp vụ (Business Logic) bị trộn lẫn với SDK. Di chuyển sang cloud khác đòi hỏi đập đi xây lại toàn bộ tầng Data Access Layer."
    },
    extreme: {
      name: "Mức 4: 'Nô Lệ' Hệ Sinh Thái Độc Quyền (Full Proprietary Lock-in)",
      levelLabel: "Tê Liệt (Extreme Lock-in)",
      gaugeColor: "text-rose-500",
      bgColor: "bg-rose-950/40 border-rose-500/40",
      badge: "Rủi Ro: Nghiêm Trọng",
      techStack: "AWS Lambda Step Functions độc quyền, DynamoDB Streams, CloudWatch Insights hooks.",
      refactorPercent: "85%",
      refactorWeeks: "6 - 9 tháng",
      migrationCost: "$120,000+",
      desc: "Hệ thống phụ thuộc 100% vào kiến trúc độc quyền không thể tái tạo ở bất kỳ nơi nào khác. Nếu nhà cung cấp tăng giá dịch vụ hoặc ngừng hỗ trợ, doanh nghiệp gần như rơi vào tình thế tiến thoái lưỡng nan."
    }
  };

  // 3 Nhược điểm cốt lõi của PaaS từ giáo trình
  const coreDisadvantages = [
    {
      id: "security",
      title: "1. Vấn Đề Bảo Mật & Kiểm Soát (Security & Control)",
      icon: "🔒",
      points: [
        "Rủi ro dữ liệu nhạy cảm lưu trữ trên đám mây công cộng (Public Cloud) dùng chung hạ tầng mạng.",
        "Quyền kiểm soát bị giới hạn: Lập trình viên không có quyền can thiệp vào tầng hạt nhân (OS Kernel), không được tinh chỉnh thông số mạng vật lý.",
        "Thách thức tuân thủ pháp lý: Khó đáp ứng các yêu cầu khắt khe về vị trí địa lý dữ liệu (Data Residency) theo chuẩn GDPR, HIPAA hoặc quy định ngành ngân hàng."
      ]
    },
    {
      id: "lockin",
      title: "2. Phụ Thuộc Nhà Cung Cấp (Vendor Lock-in)",
      icon: "⛓️",
      points: [
        "Khó chuyển đổi ứng dụng: Mỗi nhà cung cấp PaaS sở hữu hệ sinh thái API, cơ chế xác thực và cấu hình định tuyến riêng biệt.",
        "Chi phí tiềm ẩn khổng lồ: Chi phí viết lại mã nguồn (Code refactoring), thời gian gián đoạn kinh doanh và phí xuất dữ liệu (Data Egress fee) cực kỳ đắt đỏ.",
        "Rủi ro tăng giá đơn phương: Nếu nhà cung cấp thay đổi chính sách giá hoặc khai tử dịch vụ (Deprecation), doanh nghiệp buộc phải chấp nhận."
      ]
    },
    {
      id: "compatibility",
      title: "3. Vấn Đề Tương Thích (Compatibility Issues)",
      icon: "🧩",
      points: [
        "Ứng dụng cũ (Legacy Systems): Rất khó hoặc thậm chí không thể di dời các phần mềm nguyên khối (Monolith) cổ điển lên môi trường PaaS hiện đại.",
        "Thiếu nhất quán trong giao thức: Khác biệt giữa các giao thức giao tiếp và chuẩn kết nối giữa các dịch vụ PaaS khác nhau.",
        "Vấn đề tương thích ngược: Khi nhà cung cấp nâng cấp phiên bản runtime (ví dụ bỏ Node.js 14), các ứng dụng cũ không kịp cập nhật có thể bị ngừng hoạt động."
      ]
    }
  ];

  // Các chiến lược phòng vệ kiến trúc
  const remedies = [
    {
      title: "Container Hóa Chuẩn OCI / Docker",
      icon: "🐳",
      desc: "Đóng gói ứng dụng thành container tiêu chuẩn thay vì phụ thuộc vào buildpack độc quyền của nhà cung cấp."
    },
    {
      title: "Mô Hình Adapter / Repository Pattern",
      icon: "🔌",
      desc: "Trừu tượng hóa tầng kết nối CSDL và dịch vụ ngoài thành các Interface, giúp hoán đổi nhà cung cấp mà không sửa business logic."
    },
    {
      title: "Ưu Tiên CSDL Nguồn Mở (PostgreSQL / Redis)",
      icon: "🗄️",
      desc: "Tránh xa các CSDL độc quyền (như DynamoDB, Datastore) để dễ dàng di chuyển dữ liệu giữa các môi trường đám mây."
    },
    {
      title: "Kiến Trúc Đa Đám Mây (Multi-Cloud / Hybrid)",
      icon: "🌐",
      desc: "Sử dụng các nền tảng điều phối đa đám mây (như Kubernetes / OpenShift) để không bị kẹt vào một hãng duy nhất."
    }
  ];

  return (
    <div className="my-8 rounded-2xl border border-rose-500/20 bg-gradient-to-br from-[#1a1215] via-[#1c1417] to-[#140e10] p-5 md:p-7 text-neutral-200 shadow-2xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-800 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/10 px-3 py-1 text-xs font-semibold text-rose-400">
            <span>⚠️ Mục III • Nhược Điểm &amp; Rủi Ro</span>
          </div>
          <h3 className="mt-2 text-xl font-bold tracking-tight text-white md:text-2xl">
            Cảnh Báo Nhược Điểm PaaS &amp; Giả Lập Vendor Lock-in
          </h3>
          <p className="mt-1 text-sm text-neutral-400">
            Khảo sát 3 nhược điểm lớn: Bảo mật, Khóa nhà cung cấp (Vendor Lock-in) và Vấn đề tương thích hệ thống cũ
          </p>
        </div>

        {/* Tabs */}
        <div className="flex rounded-xl bg-neutral-900/90 p-1 border border-neutral-800">
          <button
            onClick={() => setActiveTab("simulator")}
            className={`flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
              activeTab === "simulator"
                ? "bg-rose-600 text-white shadow-md"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <span>🧮 Giả Lập Lock-in</span>
          </button>
          <button
            onClick={() => setActiveTab("disadvantages")}
            className={`flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
              activeTab === "disadvantages"
                ? "bg-amber-600 text-white shadow-md"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <span>📜 3 Nhược Điểm</span>
          </button>
          <button
            onClick={() => setActiveTab("remedies")}
            className={`flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
              activeTab === "remedies"
                ? "bg-emerald-600 text-white shadow-md"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <span>🛡️ Chiến Lược Phòng Vệ</span>
          </button>
        </div>
      </div>

      {/* TAB 1: VENDOR LOCK-IN SIMULATOR */}
      {activeTab === "simulator" && (
        <div className="mt-6 space-y-6">
          {/* Level Switcher */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-rose-400 block mb-2">
              Chọn Mức Độ Phụ Thuộc Vào API Độc Quyền Của Cloud Provider:
            </span>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {[
                { id: "low", label: "Mức 1: Chuẩn Mở", color: "hover:border-emerald-500" },
                { id: "medium", label: "Mức 2: Dùng Lưu Trữ/Queue", color: "hover:border-amber-500" },
                { id: "high", label: "Mức 3: CSDL Độc Quyền", color: "hover:border-orange-500" },
                { id: "extreme", label: "Mức 4: Nô Lệ Hệ Sinh Thái", color: "hover:border-rose-500" }
              ].map((lvl) => (
                <button
                  key={lvl.id}
                  onClick={() => setSelectedSdkLevel(lvl.id)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    selectedSdkLevel === lvl.id
                      ? "border-rose-500 bg-rose-950/60 shadow-md ring-1 ring-rose-500/40"
                      : "border-neutral-800 bg-neutral-900/50 " + lvl.color
                  }`}
                >
                  <span className="text-xs font-bold text-white block">{lvl.label}</span>
                  <span className="text-[10px] text-neutral-400 block mt-0.5">
                    {lockInScenarios[lvl.id].levelLabel}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Simulation Output Dashboard */}
          {(() => {
            const sc = lockInScenarios[selectedSdkLevel];
            return (
              <div className="rounded-2xl border border-neutral-800 bg-neutral-900/80 p-5 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-800 pb-4">
                  <div>
                    <h4 className="text-base font-bold text-white">{sc.name}</h4>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      Công nghệ sử dụng: <code className="text-rose-300 font-mono text-[11px]">{sc.techStack}</code>
                    </p>
                  </div>
                  <span className={`self-start sm:self-auto px-3 py-1 rounded-full border text-xs font-bold ${sc.bgColor} ${sc.gaugeColor}`}>
                    {sc.badge}
                  </span>
                </div>

                {/* Impact Metrics Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="rounded-xl border border-neutral-800 bg-black/50 p-3.5 text-center">
                    <span className="text-[10px] text-neutral-400 uppercase font-semibold block">
                      Tỷ Lệ Code Phải Viết Lại
                    </span>
                    <span className={`text-2xl font-black mt-1 block ${sc.gaugeColor}`}>
                      {sc.refactorPercent}
                    </span>
                    <span className="text-[10px] text-neutral-500">Dòng mã nguồn (LOC) bị kẹt</span>
                  </div>

                  <div className="rounded-xl border border-neutral-800 bg-black/50 p-3.5 text-center">
                    <span className="text-[10px] text-neutral-400 uppercase font-semibold block">
                      Thời Gian Tái Cấu Trúc
                    </span>
                    <span className="text-2xl font-black text-amber-400 mt-1 block">
                      {sc.refactorWeeks}
                    </span>
                    <span className="text-[10px] text-neutral-500">Gián đoạn tiến độ sản phẩm</span>
                  </div>

                  <div className="rounded-xl border border-neutral-800 bg-black/50 p-3.5 text-center">
                    <span className="text-[10px] text-neutral-400 uppercase font-semibold block">
                      Ước Tính Chi Phí Di Chuyển
                    </span>
                    <span className="text-2xl font-black text-white mt-1 block">
                      {sc.migrationCost}
                    </span>
                    <span className="text-[10px] text-neutral-500">Gồm công dev &amp; phí data egress</span>
                  </div>
                </div>

                {/* Scenario Description */}
                <div className="rounded-xl border border-neutral-800 bg-neutral-950/60 p-4 text-xs text-neutral-300 leading-relaxed">
                  <strong className="text-white block mb-1">Hậu quả thực tế khi muốn rời bỏ nhà cung cấp:</strong>
                  {sc.desc}
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* TAB 2: 3 CORE DISADVANTAGES */}
      {activeTab === "disadvantages" && (
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
          {coreDisadvantages.map((dis) => (
            <div
              key={dis.id}
              className="rounded-2xl border border-neutral-800 bg-neutral-900/70 p-5 space-y-3"
            >
              <div className="flex items-center gap-2.5 border-b border-neutral-800 pb-3">
                <span className="text-2xl">{dis.icon}</span>
                <h4 className="text-xs font-bold text-white line-clamp-1">{dis.title}</h4>
              </div>
              <ul className="space-y-2">
                {dis.points.map((p, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-neutral-300 leading-relaxed">
                    <span className="text-rose-400 font-bold mt-0.5">✕</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* TAB 3: REMEDIES */}
      {activeTab === "remedies" && (
        <div className="mt-6 space-y-4">
          <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-4">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
              <span>🛡️</span> 4 Nguyên Tắc Vàng Giúp Ứng Dụng Kháng Vendor Lock-in:
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {remedies.map((rem, i) => (
              <div
                key={i}
                className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4 space-y-1.5 hover:border-emerald-500/30 transition-all"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">{rem.icon}</span>
                  <h5 className="text-xs font-bold text-white">{rem.title}</h5>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {rem.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
