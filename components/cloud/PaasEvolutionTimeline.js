"use client";
import React, { useState } from "react";

export default function PaasEvolutionTimeline() {
  const [activePhase, setActivePhase] = useState(0);
  const [selectedForce, setSelectedForce] = useState(null);

  // 4 Giai đoạn phát triển PaaS từ giáo trình
  const phases = [
    {
      id: "phase1",
      period: "Đầu những năm 2000",
      title: "Giai Đoạn 1: Sự Khởi Đầu & Định Hình Khái Niệm",
      pioneers: "Heroku (2007), Google App Engine - GAE (2008)",
      color: "from-blue-600 to-cyan-600",
      badge: "Giai Đoạn Sơ Khai",
      badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      icon: "🌱",
      features: [
        "Các nền tảng PaaS đầu tiên ra đời với mục tiêu đơn giản hóa việc triển khai web mà không cần quản trị máy chủ VPS/Dedicated.",
        "Tính năng tương đối cơ bản, hỗ trợ giới hạn ngôn ngữ (Heroku ban đầu chỉ hỗ trợ Ruby, Google App Engine chỉ hỗ trợ Python).",
        "Môi trường khép kín, phụ thuộc lớn vào SDK độc quyền và chưa có tiêu chuẩn mở về container."
      ],
      impact: "Chứng minh tính khả thi của mô hình 'Zero-Infra' (Không cần lo phần cứng), khơi mào làn sóng chuyển đổi phát triển web lên đám mây."
    },
    {
      id: "phase2",
      period: "Cuối những năm 2000 - đầu 2010s",
      title: "Giai Đoạn 2: Mở Rộng & Đa Ngôn Ngữ Hóa",
      pioneers: "Microsoft Azure (2010), AWS Elastic Beanstalk (2011)",
      color: "from-teal-600 to-emerald-600",
      badge: "Các Ông Lớn Gia Nhập",
      badgeColor: "bg-teal-500/20 text-teal-400 border-teal-500/30",
      icon: "🚀",
      features: [
        "Các tập đoàn công nghệ hàng đầu (Microsoft, Amazon) chính thức bước chân vào thị trường PaaS với nguồn lực hạ tầng khổng lồ.",
        "Mở rộng hỗ trợ mạnh mẽ đa ngôn ngữ: Java, PHP, .NET, Node.js, Python, Ruby.",
        "Bắt đầu tích hợp các dịch vụ đám mây vệ tinh như CSDL tự quản lý (Cloud SQL, DynamoDB) và hệ thống lưu trữ blob."
      ],
      impact: "Xóa bỏ rào cản độc quyền ngôn ngữ, biến PaaS thành sự lựa chọn khả thi cho cả các dự án quy mô vừa và lớn."
    },
    {
      id: "phase3",
      period: "Đầu những năm 2010",
      title: "Giai Đoạn 3: Tích Hợp DevOps & Chuẩn Hóa CI/CD",
      pioneers: "Red Hat OpenShift (2011), Cloud Foundry (2011)",
      color: "from-amber-600 to-orange-600",
      badge: "Kỷ Nguyên DevOps & CI/CD",
      badgeColor: "bg-amber-500/20 text-amber-400 border-amber-500/30",
      icon: "⚡",
      features: [
        "Sự trỗi dậy của tự động hóa: tích hợp sâu các quy trình tích hợp liên tục (CI) và triển khai liên tục (CD).",
        "Sử dụng công nghệ đóng gói ứng dụng sơ khai (Cartridges, Droplets) làm tiền đề cho cuộc cách mạng Docker container.",
        "Chuyển dịch mạnh mẽ sang mã nguồn mở nhằm hạn chế rủi ro khóa nhà cung cấp (Vendor Lock-in)."
      ],
      impact: "Thiết lập quy trình làm việc hiện đại: Lập trình viên chỉ cần 'git push' là toàn bộ pipeline kiểm thử và deploy tự động vận hành."
    },
    {
      id: "phase4",
      period: "Giữa những năm 2010 đến nay",
      title: "Giai Đoạn 4: Đa Nền Tảng, Hybrid Cloud & Kubernetes",
      pioneers: "OpenShift 4 (Kubernetes-native), Cloud Foundry On K8s, Anthos",
      color: "from-purple-600 to-indigo-600",
      badge: "Kỷ Nguyên Đa Đám Mây",
      badgeColor: "bg-purple-500/20 text-purple-400 border-purple-500/30",
      icon: "🌐",
      features: [
        "Tiến hóa lên kiến trúc điều phối container tiêu chuẩn công nghiệp (Kubernetes & Microservices).",
        "Hỗ trợ triển khai linh hoạt trên Đa đám mây (Multi-cloud) và Đám mây lai (Hybrid Cloud - kết hợp On-premise với Cloud công cộng).",
        "Mở rộng sang các mô hình tiên tiến: Serverless (FaaS - Function as a Service), tích hợp AI/ML và điện toán biên (Edge Computing)."
      ],
      impact: "PaaS trở thành xương sống cho quá trình chuyển đổi số của các tập đoàn đa quốc gia và hệ thống ngân hàng, viễn thông."
    }
  ];

  // 4 Yếu tố thúc đẩy sự phát triển của PaaS từ giáo trình
  const drivingForces = [
    {
      id: "force1",
      title: "1. Nhu Cầu Phát Triển Ứng Dụng Tăng Nhanh",
      icon: "📈",
      summary: "Kinh tế số bùng nổ đòi hỏi rút ngắn Time-to-Market từ nhiều tháng xuống tính bằng ngày hoặc giờ.",
      desc: "Doanh nghiệp không thể chờ đợi 4-8 tuần để bộ phận IT mua sắm phần cứng và cấu hình mạng vật lý. PaaS cung cấp môi trường sẵn sàng ngay tức khắc."
    },
    {
      id: "force2",
      title: "2. Sự Phát Triển Của Tự Động Hóa & Container",
      icon: "🐳",
      summary: "Docker và Kubernetes chuẩn hóa môi trường đóng gói, biến 'chạy trên máy tôi' thành 'chạy mọi nơi'.",
      desc: "Container hóa giúp cô lập tài nguyên nhẹ nhàng, cho phép PaaS triển khai hàng ngàn ứng dụng mật độ cao trên cùng cụm máy chủ một cách an toàn và tự động."
    },
    {
      id: "force3",
      title: "3. Tích Hợp Công Cụ & Dịch Vụ Phong Phú",
      icon: "🧩",
      summary: "Hệ sinh thái API, CSDL đám mây, công cụ giám sát hiệu năng APM và CI/CD tích hợp 1-click.",
      desc: "Lập trình viên không cần tự dựng máy chủ thư tín, hàng đợi tin nhắn (Queue), hay hệ thống theo dõi lỗi (Sentry). Tất cả đều được tích hợp dạng Add-on chỉ bằng 1 câu lệnh."
    },
    {
      id: "force4",
      title: "4. Nhu Cầu Bảo Mật, Tuân Thủ & Độ Tin Cậy",
      icon: "🛡️",
      summary: "Các tiêu chuẩn pháp lý khắt khe (GDPR, ISO 27001, PCI-DSS) và cam kết SLA 99.99%.",
      desc: "Tự vận hành hệ thống riêng rất dễ để sót lỗ hổng bảo mật 0-day. Sử dụng PaaS giúp doanh nghiệp kế thừa toàn bộ cơ chế bảo vệ hạt nhân và vá lỗi tự động từ các kỹ sư bảo mật hàng đầu thế giới."
    }
  ];

  return (
    <div className="my-8 rounded-2xl border border-teal-500/20 bg-gradient-to-br from-[#101917] via-[#121c19] to-[#0e1513] p-5 md:p-7 text-neutral-200 shadow-2xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-800 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-xs font-semibold text-teal-400">
            <span>⏳ Mục I.2 &amp; I.3 • Tiến Trình Lịch Sử</span>
          </div>
          <h3 className="mt-2 text-xl font-bold tracking-tight text-white md:text-2xl">
            Lịch Sử Tiến Hóa PaaS &amp; 4 Động Lực Thúc Đẩy
          </h3>
          <p className="mt-1 text-sm text-neutral-400">
            Hành trình từ các nền tảng Proof-of-Concept sơ khai đến kỷ nguyên điều phối Container &amp; Hybrid Cloud hiện đại
          </p>
        </div>
      </div>

      {/* Stepper Timeline Navigation */}
      <div className="mt-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {phases.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setActivePhase(idx)}
              className={`flex flex-col p-3 rounded-xl border text-left transition-all ${
                activePhase === idx
                  ? "border-teal-500 bg-teal-950/40 shadow-lg shadow-teal-950/30"
                  : "border-neutral-800 bg-neutral-900/60 hover:border-neutral-700"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xl">{p.icon}</span>
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded border ${
                  activePhase === idx ? "border-teal-500/50 text-teal-300" : "border-neutral-700 text-neutral-500"
                }`}>
                  GĐ {idx + 1}
                </span>
              </div>
              <span className="mt-1 text-xs font-semibold text-neutral-400">{p.period}</span>
              <span className="text-xs font-bold text-white line-clamp-1 mt-0.5">{p.title.split(": ")[1] || p.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Active Phase Deep Dive */}
      {(() => {
        const current = phases[activePhase];
        return (
          <div className="mt-6 rounded-2xl border border-teal-500/30 bg-neutral-900/70 p-5 md:p-6 backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-800 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
                  {current.period}
                </span>
                <h4 className="text-lg font-bold text-white mt-0.5">{current.title}</h4>
                <p className="text-xs text-neutral-400 mt-1">
                  Đại diện tiêu biểu: <strong className="text-teal-300">{current.pioneers}</strong>
                </p>
              </div>
              <span className={`self-start sm:self-auto rounded-full border px-3 py-1 text-xs font-semibold ${current.badgeColor}`}>
                {current.badge}
              </span>
            </div>

            {/* Features */}
            <div className="mt-4 space-y-2.5">
              <h5 className="text-xs font-bold uppercase tracking-wider text-teal-400">
                Đặc Điểm Kỹ Thuật Nổi Bật:
              </h5>
              <ul className="space-y-2">
                {current.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-neutral-300">
                    <span className="text-teal-400 font-bold mt-0.5">●</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Impact */}
            <div className="mt-4 rounded-xl border border-teal-500/20 bg-teal-950/20 p-3.5">
              <span className="text-xs font-bold text-teal-300 uppercase tracking-wider block">
                💥 Tác Động Tới Ngành Công Nghiệp Phần Mềm:
              </span>
              <p className="text-xs text-neutral-300 mt-1 leading-relaxed">
                {current.impact}
              </p>
            </div>
          </div>
        );
      })()}

      {/* 4 DRIVING FORCES (4 YẾU TỐ THÚC ĐẨY) */}
      <div className="mt-8 border-t border-neutral-800 pt-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h4 className="text-base font-bold text-white flex items-center gap-2">
              <span>🚀</span> 4 Động Lực Thúc Đẩy Sự Phát Triển Của PaaS
            </h4>
            <p className="text-xs text-neutral-400 mt-0.5">
              Nhấn vào từng động lực để khám phá lý do tại sao PaaS trở thành lựa chọn sống còn của ngành CNTT
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {drivingForces.map((force, idx) => (
            <div
              key={force.id}
              onClick={() => setSelectedForce(selectedForce === idx ? null : idx)}
              className={`cursor-pointer rounded-xl border p-4 transition-all ${
                selectedForce === idx
                  ? "border-teal-500 bg-teal-950/50 shadow-md"
                  : "border-neutral-800 bg-neutral-900/50 hover:border-neutral-700 hover:bg-neutral-900/80"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <span className="text-2xl">{force.icon}</span>
                <h5 className="text-xs font-bold text-white line-clamp-1">{force.title}</h5>
              </div>
              <p className="mt-2 text-xs text-neutral-300 leading-relaxed">
                {force.summary}
              </p>
              {selectedForce === idx && (
                <div className="mt-3 border-t border-teal-500/30 pt-2.5 text-[11px] text-teal-200/90 leading-relaxed">
                  {force.desc}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
