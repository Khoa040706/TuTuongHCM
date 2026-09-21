"use client";
import React, { useState } from "react";

export default function IaasEnterpriseUseCaseMatrix() {
  const [activeTab, setActiveTab] = useState("use_cases"); // 'advantages' | 'use_cases' | 'transformation'
  const [selectedCase, setSelectedCase] = useState("storage");
  const [selectedAdvantage, setSelectedAdvantage] = useState("capex");

  const advantages = {
    capex: {
      id: "capex",
      name: "1. Giảm Chi Phí Đầu Tư Ban Đầu (CAPEX ➔ OPEX)",
      icon: "💰",
      color: "emerald",
      badge: "Pay-as-you-go",
      summary: "Doanh nghiệp không cần bỏ hàng triệu USD mua máy chủ, tủ rack và xây dựng phòng máy lạnh đắt đỏ.",
      detail: "Chuyển toàn bộ chi phí vốn ban đầu (CAPEX) sang chi phí hoạt động linh hoạt hàng tháng (OPEX). Bạn chỉ trả tiền cho đúng số giờ CPU, dung lượng RAM và Gigabytes lưu trữ mà bạn thực sự sử dụng.",
      impact: "Tiết kiệm tới 60% chi phí khởi đầu cho các startup và doanh nghiệp chuyển đổi số."
    },
    scalability: {
      id: "scalability",
      name: "2. Linh Hoạt Mở Rộng Quy Mô (Scalability)",
      icon: "📈",
      color: "blue",
      badge: "Elasticity Tức Thì",
      summary: "Tự động co giãn tài nguyên trong vài phút để đáp ứng các đợt bùng nổ lưu lượng truy cập bất ngờ.",
      detail: "Trong các mùa cao điểm (Black Friday, Flash Sale), hệ thống có thể tự động cấp phát thêm 100 máy chủ ảo trong 3 phút, và tự động thu hồi ngay khi lượng truy cập hạ nhiệt để tránh lãng phí ngân sách.",
      impact: "Không bao giờ lo sập web do quá tải khách hàng hoặc lãng phí tài nguyên lúc vắng khách."
    },
    operation: {
      id: "operation",
      name: "3. Tiết Kiệm Chi Phí Vận Hành & Bảo Trì",
      icon: "🛠️",
      color: "amber",
      badge: "Zero Hardware Maintenance",
      summary: "Nhà cung cấp đám mây chịu toàn bộ trách nhiệm bảo dưỡng, sửa chữa phần cứng và hóa đơn tiền điện.",
      detail: "Doanh nghiệp không cần duy trì đội ngũ kỹ sư túc trực 24/7 chỉ để thay quạt chip, thay ổ cứng hỏng hay lo lắng về máy phát điện diesel khi cúp điện lưới.",
      impact: "Giải phóng đội ngũ kỹ thuật để tập trung 100% vào việc phát triển tính năng sản phẩm cốt lõi."
    },
    security: {
      id: "security",
      name: "4. Tăng Cường Bảo Mật & Tuân Thủ Tiêu Chuẩn",
      icon: "🔒",
      color: "purple",
      badge: "ISO 27001 • HIPAA • GDPR",
      summary: "Thừa hưởng hạ tầng bảo mật cấp độ quân sự được đầu tư hàng tỷ USD từ các gã khổng lồ công nghệ.",
      detail: "Trung tâm dữ liệu của các hãng IaaS luôn đạt các chứng chỉ khắt khe nhất toàn cầu (SOC 1/2/3, ISO 27001, PCI-DSS cho thanh toán thẻ ngân hàng, HIPAA cho y tế).",
      impact: "Doanh nghiệp vừa và nhỏ có thể sở hữu ngay lá chắn an ninh mạng ngang tầm các tập đoàn đa quốc gia."
    },
    availability: {
      id: "availability",
      name: "5. Tăng Độ Sẵn Sàng & Độ Tin Cậy (High Availability)",
      icon: "⚡",
      color: "cyan",
      badge: "SLA 99.99% Uptime",
      summary: "Hạ tầng phân tán trên toàn cầu với các cơ chế dự phòng nhiều vùng độc lập (Multi-AZ).",
      detail: "Cam kết thời gian hoạt động liên tục với chỉ số thỏa thuận mức dịch vụ (SLA) cực cao. Khi một máy chủ vật lý gặp sự cố, máy chủ ảo tự động được di trú (Live Migration) sang máy chủ khác mà không gián đoạn dịch vụ.",
      impact: "Giảm thiểu tối đa nguy cơ ngừng trệ kinh doanh (Business Continuity) gây tổn thất hàng triệu USD."
    }
  };

  const useCases = {
    storage: {
      id: "storage",
      name: "1. Data Storage, Backup & Recovery",
      icon: "💾",
      badge: "Lưu Trữ & Phục Hồi Thảm Họa",
      color: "blue",
      scenario: "Sao lưu an toàn, phân tầng dữ liệu nóng/lạnh và giảm 70% chi phí kho lưu trữ vật lý.",
      realExample: "Các tổ chức tài chính dùng Amazon S3 Glacier hoặc Azure Archive Storage để lưu trữ hồ sơ giao dịch 10 năm theo luật định với chi phí siêu rẻ.",
      benefits: ["Bảo vệ dữ liệu khỏi mã độc tống tiền (Ransomware WORM)", "Tự động phân tầng dữ liệu (Lifecycle rules)", "Khôi phục dữ liệu tức thì khi có sự cố"]
    },
    devtest: {
      id: "devtest",
      name: "2. Software Development & Testing (Dev/Test)",
      icon: "🧪",
      badge: "Môi Trường Thử Nghiệm",
      color: "emerald",
      scenario: "Khởi tạo nhanh chóng hàng chục môi trường thử nghiệm với các cấu hình hệ điều hành khác nhau.",
      realExample: "Nhóm phát triển phần mềm tạo môi trường Staging kiểm thử hiệu năng tự động trên Azure Virtual Machines, xong việc lập tức hủy bỏ trong vài giây.",
      benefits: ["Rút ngắn thời gian đưa sản phẩm ra thị trường (Time-to-Market)", "Chi phí gần như bằng 0 khi không chạy thử nghiệm", "Đồng nhất cấu hình môi trường giữa Dev và Prod"]
    },
    webhosting: {
      id: "webhosting",
      name: "3. Website & Web Application Hosting",
      icon: "🌐",
      badge: "Cổng Thông Tin & TMĐT",
      color: "purple",
      scenario: "Vận hành các nền tảng thương mại điện tử, ứng dụng di động có lưu lượng truy cập lớn.",
      realExample: "Trang thương mại điện tử sử dụng Google Compute Engine kết hợp Cloud Load Balancing để đón hàng triệu lượt mua sắm đồng thời ngày siêu sale.",
      benefits: ["Tự động tăng giảm số lượng web server theo lưu lượng (Auto-scaling)", "Độ trễ thấp nhờ kết nối mạng Backbone riêng của hãng", "Bảo vệ chống tấn công từ chối dịch vụ (DDoS)"]
    },
    dr: {
      id: "dr",
      name: "4. Disaster Recovery (DR)",
      icon: "🛡️",
      badge: "Dự Phòng Cấp Doanh Nghiệp",
      color: "rose",
      scenario: "Xây dựng trung tâm phục hồi thảm họa dự phòng mà không cần tốn chi phí thuê thêm một tòa nhà vật lý.",
      realExample: "Bệnh viện đồng bộ dữ liệu bệnh án liên tục lên cụm IaaS ở một khu vực địa lý khác; nếu bệnh viện mất điện diện rộng, hệ thống đám mây lập tức tiếp quản.",
      benefits: ["Đạt chỉ tiêu RTO/RPO khắt khe nhất", "Chi phí duy trì hệ thống dự phòng ở mức tối thiểu", "Dễ dàng diễn tập kịch bản phục hồi định kỳ"]
    },
    hpc: {
      id: "hpc",
      name: "5. High-Performance Computing (HPC) & Big Data / AI",
      icon: "🚀",
      badge: "Điện Toán Hiệu Năng Cao & AI",
      color: "amber",
      scenario: "Cụm máy tính cấu hình khủng (hàng ngàn vCPU, cụm GPU A100/H100) để huấn luyện AI và mô phỏng khoa học.",
      realExample: "Các viện nghiên cứu khí tượng thuê cụm máy chủ GPU trên AWS EC2 để tính toán mô hình dự báo bão trong 48 giờ mà không cần mua siêu máy tính đắt đỏ.",
      benefits: ["Truy cập tức thì vào các dòng chip GPU hiện đại nhất", "Xử lý hàng tỷ bản ghi Big Data trong thời gian ngắn", "Chỉ trả tiền cho số giờ tính toán mô hình"]
    }
  };

  const currentAdv = advantages[selectedAdvantage];
  const currentCase = useCases[selectedCase];

  return (
    <div className="my-8 rounded-2xl border border-blue-500/20 bg-gradient-to-br from-[#101724] via-[#121a28] to-[#0e1420] p-5 md:p-7 text-neutral-200 shadow-2xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-800 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">
            <span>💼 Mục VII • Ưu Điểm, Use Cases &amp; Giá Trị Doanh Nghiệp</span>
          </div>
          <h3 className="mt-2 text-xl font-bold tracking-tight text-white md:text-2xl">
            Ma Trận Ưu Điểm, 5 Use Cases Kinh Điển &amp; Chuyển Đổi Số Doanh Nghiệp
          </h3>
          <p className="mt-1 text-sm text-neutral-400">
            Khám phá lý do tại sao các tập đoàn hàng đầu thế giới dịch chuyển toàn bộ hạ tầng vật lý lên đám mây IaaS.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex rounded-xl bg-neutral-900/80 p-1 border border-neutral-800">
          <button
            onClick={() => setActiveTab("use_cases")}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              activeTab === "use_cases"
                ? "bg-blue-600 text-white shadow"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            5 Use Cases Thực Tế
          </button>
          <button
            onClick={() => setActiveTab("advantages")}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              activeTab === "advantages"
                ? "bg-emerald-600 text-white shadow"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            5 Ưu Điểm IaaS
          </button>
          <button
            onClick={() => setActiveTab("transformation")}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              activeTab === "transformation"
                ? "bg-amber-600 text-white shadow"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Vai Trò Chuyển Đổi Số
          </button>
        </div>
      </div>

      {/* TAB 1: 5 USE CASES THỰC TẾ */}
      {activeTab === "use_cases" && (
        <div className="mt-6 space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2.5">
            {Object.values(useCases).map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCase(c.id)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  selectedCase === c.id
                    ? "border-blue-500 bg-blue-950/40 shadow-lg shadow-blue-950/50"
                    : "border-neutral-800 bg-neutral-900/50 hover:border-neutral-700 text-neutral-400 hover:text-neutral-200"
                }`}
              >
                <div className="text-2xl mb-1">{c.icon}</div>
                <div className="font-bold text-xs text-white line-clamp-1">{c.name.split(". ")[1]}</div>
                <div className="text-[10px] text-blue-400/90 mt-0.5">{c.badge}</div>
              </button>
            ))}
          </div>

          <div className="rounded-xl border border-blue-500/30 bg-neutral-900/90 p-5 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-800 pb-3">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{currentCase.icon}</span>
                <div>
                  <h4 className="font-bold text-lg text-white">{currentCase.name}</h4>
                  <p className="text-xs text-neutral-400">{currentCase.scenario}</p>
                </div>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30">
                {currentCase.badge}
              </span>
            </div>

            <div className="rounded-lg border border-neutral-800 bg-neutral-950 p-3.5">
              <div className="text-xs uppercase font-bold text-amber-400 tracking-wider mb-1">
                Ví dụ ứng dụng thực tế trong công nghiệp:
              </div>
              <p className="text-xs text-neutral-200 leading-relaxed">{currentCase.realExample}</p>
            </div>

            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                Lợi ích chiến lược đạt được:
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
                {currentCase.benefits.map((b, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 rounded-lg border border-neutral-800 bg-neutral-950/60 p-2.5 text-xs text-neutral-300"
                  >
                    <span className="text-emerald-400 font-bold">✔</span>
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: 5 ƯU ĐIỂM CỐT LÕI */}
      {activeTab === "advantages" && (
        <div className="mt-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-2.5">
            {Object.values(advantages).map((a) => (
              <button
                key={a.id}
                onClick={() => setSelectedAdvantage(a.id)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  selectedAdvantage === a.id
                    ? "border-emerald-500 bg-emerald-950/30 shadow-lg shadow-emerald-950/40"
                    : "border-neutral-800 bg-neutral-900/50 hover:border-neutral-700 text-neutral-400 hover:text-neutral-200"
                }`}
              >
                <div className="text-2xl mb-1">{a.icon}</div>
                <div className="font-bold text-xs text-white line-clamp-1">{a.name.split(". ")[1]}</div>
                <div className="text-[10px] text-emerald-400/90 mt-0.5">{a.badge}</div>
              </button>
            ))}
          </div>

          <div className="rounded-xl border border-emerald-500/30 bg-neutral-900/90 p-5 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-800 pb-3">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{currentAdv.icon}</span>
                <div>
                  <h4 className="font-bold text-lg text-white">{currentAdv.name}</h4>
                  <p className="text-xs text-neutral-400">{currentAdv.summary}</p>
                </div>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                {currentAdv.badge}
              </span>
            </div>

            <p className="text-xs text-neutral-300 leading-relaxed">{currentAdv.detail}</p>

            <div className="rounded-lg border border-emerald-500/20 bg-emerald-950/20 p-3 text-xs text-emerald-300">
              <span className="font-bold text-emerald-400">Tác động chuyển đổi kinh doanh: </span>
              {currentAdv.impact}
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: VAI TRÒ CHUYỂN ĐỔI SỐ */}
      {activeTab === "transformation" && (
        <div className="mt-6 space-y-5">
          <div className="rounded-xl border border-amber-500/30 bg-neutral-900/80 p-5">
            <h4 className="text-base font-bold text-white mb-2">
              Vai Trò Chiến Lược Của IaaS Trong Cuộc Cách Mạng Số Doanh Nghiệp
            </h4>
            <p className="text-xs text-neutral-300 leading-relaxed mb-4">
              IaaS không chỉ đơn thuần là việc thuê hạ tầng điện toán, mà là nền tảng cốt lõi giúp các doanh nghiệp tái cấu trúc mô hình kinh doanh, gia tăng tốc độ phản ứng với thị trường và xây dựng lợi thế cạnh tranh bền vững.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-4 space-y-2">
                <div className="text-2xl">⚡</div>
                <h5 className="font-bold text-sm text-white">Tăng Tốc Đổi Mới (Agility)</h5>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Thay vì mất 3 đến 6 tháng chờ phê duyệt ngân sách và nhập khẩu máy chủ vật lý, đội ngũ kỹ thuật có thể khởi chạy hạ tầng mới chỉ trong vài phút để thử nghiệm các ý tưởng kinh doanh mới.
                </p>
              </div>

              <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-4 space-y-2">
                <div className="text-2xl">🌍</div>
                <h5 className="font-bold text-sm text-white">Vươn Tầm Toàn Cầu (Global Reach)</h5>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Chỉ với vài dòng mã lệnh hoặc cấu hình giao diện, doanh nghiệp có thể triển khai hệ thống tới 30+ khu vực địa lý trên khắp thế giới để phục vụ khách hàng quốc tế với độ trễ thấp nhất.
                </p>
              </div>

              <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-4 space-y-2">
                <div className="text-2xl">🛡️</div>
                <h5 className="font-bold text-sm text-white">Bảo Vệ Tính Bền Vững</h5>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Dữ liệu được bảo vệ an toàn trước thiên tai, sự cố vật lý và tấn công mạng nhờ các chuẩn an ninh khắt khe nhất cùng khả năng khôi phục tức thì khi có biến cố.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
