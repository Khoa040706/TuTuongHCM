"use client";
import React, { useState } from "react";

export default function Chapter4MasterKeyTermsMatrix() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeUxCriterion, setActiveUxCriterion] = useState(0);

  // 6 Tiêu chí trải nghiệm người dùng (PaaS UX) từ giáo trình
  const uxCriteria = [
    {
      id: "perf",
      title: "1. Hiệu Năng Ứng Dụng (Performance)",
      icon: "⚡",
      desc: "Thời gian phản hồi nhanh (Low Latency), tài nguyên CPU/RAM được cấp phát tối ưu, không có hiện tượng nghẽn cổ chai khi lưu lượng tăng cao."
    },
    {
      id: "availability",
      title: "2. Tính Khả Dụng & Độ Tin Cậy (High Availability)",
      icon: "🌐",
      desc: "Cam kết SLA từ 99.9% đến 99.99%, tự động sao lưu đa vùng (Multi-AZ), cơ chế chuyển đổi dự phòng tức thời (Failover) khi cụm máy chủ gặp sự cố."
    },
    {
      id: "integration",
      title: "3. Tích Hợp Công Cụ Phong Phú (Tool Integration)",
      icon: "🔌",
      desc: "Kết nối mượt mà với kho mã nguồn (GitHub, GitLab), công cụ CI/CD, cơ sở dữ liệu, dịch vụ giám sát APM (Datadog, New Relic) và môi trường IDE."
    },
    {
      id: "ui-ux",
      title: "4. Giao Diện Trực Quan, Dễ Dùng (Intuitive Dashboard & CLI)",
      icon: "🖥️",
      desc: "Bảng điều khiển Web hiện đại, tài nguyên trực quan hóa theo sơ đồ, đi kèm công cụ dòng lệnh (CLI) mạnh mẽ hỗ trợ tự động hóa bằng kịch bản."
    },
    {
      id: "support",
      title: "5. Hỗ Trợ Kỹ Thuật 24/7 (Support & Documentation)",
      icon: "🎧",
      desc: "Tài liệu kỹ thuật (Docs) chi tiết, hướng dẫn từng bước (Step-by-step Tutorials), cộng đồng lập trình viên đông đảo và đội ngũ hỗ trợ kỹ thuật trực 24/7."
    },
    {
      id: "security",
      title: "6. Bảo Mật & Tuân Thủ (Security & Privacy Compliance)",
      icon: "🛡️",
      desc: "Tự động cấp chứng chỉ SSL/TLS, mã hóa dữ liệu đầu cuối (End-to-End Encryption), xác thực đa yếu tố (MFA) và tuân thủ các chuẩn quốc tế (GDPR, ISO 27001)."
    }
  ];

  // 8 Trụ cột tri thức toàn diện Chương 4
  const pillars = [
    {
      id: 1,
      category: "core",
      title: "1. Khái Niệm PaaS & 4 Thành Phần Cốt Lõi",
      formula: "PaaS = OS + Dev Environment + Database + Web Server",
      keySummary: "Nhà cung cấp đám mây bàn giao một nền tảng hoàn chỉnh để lập trình, vận hành và quản lý ứng dụng. 4 thành phần thiết yếu bắt buộc gồm: Hệ điều hành (OS), Môi trường phát triển (Dev environment), Cơ sở dữ liệu (DBMS) và Máy chủ Web (Web server).",
      examGotcha: "Đề thi hay hỏi: '4 thành phần chính của PaaS gồm những gì?' ➔ Đáp án: OS, Development environment, Database, Web server."
    },
    {
      id: 2,
      category: "core",
      title: "2. Ranh Giới Trách Nhiệm (Shared Responsibility)",
      formula: "Dev: Applications + Data | Cloud: 7 Tầng Còn Lại",
      keySummary: "So với IaaS và SaaS, trong mô hình PaaS, nhà phát triển CHỈ quản lý đúng 2 tầng: Applications (Mã nguồn) và Data (Dữ liệu). Toàn bộ hạ tầng, máy chủ ảo, OS, phần mềm trung gian và runtime đều do Cloud Provider vận hành.",
      examGotcha: "Trọng tâm thi cử: 'Trong PaaS, người dùng chịu trách nhiệm quản lý tầng nào?' ➔ Đáp án: Applications và Data."
    },
    {
      id: 3,
      category: "history",
      title: "3. 4 Giai Đoạn Lịch Sử & 4 Động Lực Thúc Đẩy",
      formula: "Giai Đoạn 1 (GAE/Heroku) ➔ 2 (Azure/Beanstalk) ➔ 3 (OpenShift CI/CD) ➔ 4 (Kubernetes & Multi-Cloud)",
      keySummary: "Tiến trình từ các nền tảng sơ khai ít ngôn ngữ đầu 2000s, mở rộng đa ngôn ngữ cuối 2000s, chuẩn hóa DevOps/CI-CD đầu 2010s, đến đa đám mây và Kubernetes hiện nay. 4 động lực: Nhu cầu tăng nhanh, Tự động hóa/Container, Tích hợp công cụ, và Yêu cầu Bảo mật.",
      examGotcha: "Hai đại diện PaaS đầu tiên ra mắt giai đoạn đầu 2000s là ai? ➔ Heroku (2007) và Google App Engine (2008)."
    },
    {
      id: 4,
      category: "tradeoff",
      title: "4. 4 Nhóm Lợi Ích Cốt Lõi Của PaaS",
      formula: "Tiết Kiệm Chi Phí + Linh Hoạt + Tiết Kiệm Thời Gian + Zero Infra",
      keySummary: "1. Chi phí (Pay-as-you-go, bỏ CAPEX sang OPEX); 2. Linh hoạt (Auto-scaling, hỗ trợ đa ngôn ngữ Java/Python/Node/.NET, Agile); 3. Thời gian (One-click deployment, tích hợp sẵn IDE/debug); 4. Không quản lý hạ tầng (tự động cập nhật OS và vá lỗi).",
      examGotcha: "Khẩu quyết lợi ích: Giảm tối đa thời gian phát triển (Time-to-Market) và loại bỏ gánh nặng vận hành máy chủ vật lý."
    },
    {
      id: 5,
      category: "tradeoff",
      title: "5. 3 Nhóm Nhược Điểm & Vendor Lock-in",
      formula: "Bảo Mật/Kiểm Soát ⚔️ Vendor Lock-in ⚔️ Tương Thích Cũ",
      keySummary: "1. Bảo mật: Dữ liệu trên cloud công cộng, mất quyền kiểm soát tầng sâu; 2. Vendor Lock-in: Dính chặt API độc quyền, chi phí viết lại code và data egress đắt đỏ; 3. Tương thích: Rất khó di chuyển ứng dụng cũ (Legacy) và thiếu nhất quán giao thức.",
      examGotcha: "Cái giá lớn nhất của sự tiện lợi trong PaaS là gì? ➔ Mất quyền kiểm soát hạ tầng sâu và nguy cơ Khóa nhà cung cấp (Vendor Lock-in)."
    },
    {
      id: 6,
      category: "titans",
      title: "6. 4 Nền Tảng PaaS Tiêu Biểu Trong Thực Tế",
      formula: "GAE (Auto-scale) | Azure (Doanh nghiệp) | OpenShift (K8s) | IBM (Watson AI)",
      keySummary: "GAE: Tự động co giãn siêu tốc, Version traffic splitting; Azure App Service: Toàn diện IaaS+PaaS+SaaS, tích hợp .NET và AD; Red Hat OpenShift: Nền tảng container mã nguồn mở trên KUBERNETES; IBM Cloud Foundry: Quản lý vòng đời, tích hợp AI Watson.",
      examGotcha: "Nền tảng PaaS doanh nghiệp nào được xây dựng trực tiếp trên nền tảng Kubernetes? ➔ Red Hat OpenShift."
    },
    {
      id: 7,
      category: "business",
      title: "7. 6 Chiều Giá Trị Đối Với Doanh Nghiệp",
      formula: "Nhanh Hơn – Rẻ Hơn – Linh Hoạt Hơn – Hợp Tác Hơn – An Toàn Hơn – Đổi Mới Hơn",
      keySummary: "PaaS giúp doanh nghiệp: Tăng tốc độ phát triển (rút ngắn Time-to-Market); Cắt giảm chi phí đầu tư; Tăng tính đàn hồi trước đợt sale; Gắn kết nhóm DevOps phân tán; Kế thừa an ninh mạng đạt chuẩn quốc tế; Dễ dàng đổi mới bằng AI/Big Data.",
      examGotcha: "Nhớ đúng 6 tính từ vàng trong giáo trình: Nhanh hơn, Rẻ hơn, Linh hoạt hơn, Hợp tác hơn, An toàn hơn, Đổi mới hơn."
    },
    {
      id: 8,
      category: "future",
      title: "8. Tương Lai: Serverless FaaS & 7 Làn Sóng",
      formula: "Event-driven + Scale-to-Zero + Millisecond Billing + AI/ML",
      keySummary: "PaaS đang hòa quyện cùng Serverless FaaS: Hàm chỉ chạy khi có sự kiện, tự động co giãn về 0 khi không có tải, tính tiền theo mili-giây. 7 xu hướng: AI/ML, Serverless, Multi-cloud/Hybrid, DevSecOps, Tối ưu DevEx, Global Edge, IoT/Edge.",
      examGotcha: "Đặc tính quan trọng nhất của Serverless FaaS là gì? ➔ Kích hoạt theo sự kiện (Event-driven) và Tự động co giãn về 0 (Scale to Zero)."
    }
  ];

  // Filtering
  const filteredPillars = pillars.filter((p) => {
    const matchCat = selectedCategory === "all" || p.category === selectedCategory;
    const matchSearch =
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.formula.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.keySummary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.examGotcha.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="my-8 rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-[#121815] via-[#141b18] to-[#0f1412] p-5 md:p-7 text-neutral-200 shadow-2xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-800 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
            <span>🎓 Mục VII • Trải Nghiệm &amp; Tổng Kết</span>
          </div>
          <h3 className="mt-2 text-xl font-bold tracking-tight text-white md:text-2xl">
            Ma Trận Tổng Kết 8 Trụ Cột Tri Thức Toàn Chương 4 (PaaS)
          </h3>
          <p className="mt-1 text-sm text-neutral-400">
            Hệ thống hóa toàn bộ kiến thức, 6 tiêu chí PaaS UX và các &apos;bẫy điểm số&apos; bắt buộc phải thuộc cho kỳ thi
          </p>
        </div>
      </div>

      {/* SECTION 1: 6 TIÊU CHÍ TRẢI NGHIỆM NGƯỜI DÙNG (PaaS UX) */}
      <div className="mt-6 space-y-3">
        <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
          <span>🌟</span> 6 Tiêu Chí Trải Nghiệm Người Dùng (PaaS User Experience)
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {uxCriteria.map((c, i) => (
            <button
              key={c.id}
              onClick={() => setActiveUxCriterion(i)}
              className={`p-2.5 rounded-xl border text-center transition-all ${
                activeUxCriterion === i
                  ? "border-emerald-500 bg-emerald-950/50 shadow-md ring-1 ring-emerald-500/40"
                  : "border-neutral-800 bg-neutral-900/50 hover:border-neutral-700"
              }`}
            >
              <span className="text-xl block mb-1">{c.icon}</span>
              <span className="text-[11px] font-bold text-white line-clamp-1">{c.title.split(". ")[1]}</span>
            </button>
          ))}
        </div>

        {/* Selected UX Criterion Details */}
        <div className="rounded-xl border border-emerald-500/20 bg-emerald-950/20 p-3.5 text-xs text-neutral-300">
          <strong className="text-emerald-400 block mb-1">
            {uxCriteria[activeUxCriterion].title}:
          </strong>
          {uxCriteria[activeUxCriterion].desc}
        </div>
      </div>

      {/* SECTION 2: 8 PILLARS SEARCH & FILTER */}
      <div className="mt-8 border-t border-neutral-800 pt-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div>
            <h4 className="text-base font-bold text-white flex items-center gap-2">
              <span>📚</span> 8 Trụ Cột Tri Thức Cốt Lõi Chương 4
            </h4>
            <p className="text-xs text-neutral-400 mt-0.5">
              Tra cứu nhanh công thức ghi nhớ và các câu hỏi thi cử kinh điển
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Tìm kiếm từ khóa (K8s, FaaS, Lock-in...)"
              className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-3 py-1.5 text-xs text-white placeholder-neutral-500 focus:border-emerald-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Category Pill Filters */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {[
            { id: "all", label: "Tất Cả (8)" },
            { id: "core", label: "Kiến Trúc & Thành Phần" },
            { id: "history", label: "Lịch Sử & Động Lực" },
            { id: "tradeoff", label: "Lợi Ích & Rủi Ro" },
            { id: "titans", label: "4 Nền Tảng Thực Tế" },
            { id: "business", label: "Giá Trị Doanh Nghiệp" },
            { id: "future", label: "Tương Lai & FaaS" }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`rounded-lg px-2.5 py-1 text-[11px] font-bold transition-all ${
                selectedCategory === cat.id
                  ? "bg-emerald-600 text-white shadow-sm"
                  : "bg-neutral-900/80 border border-neutral-800 text-neutral-400 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredPillars.map((p) => (
            <div
              key={p.id}
              className="rounded-2xl border border-neutral-800 bg-neutral-900/70 p-5 space-y-3 hover:border-emerald-500/40 transition-all shadow-md"
            >
              <div className="border-b border-neutral-800 pb-2.5">
                <h5 className="text-sm font-bold text-white">{p.title}</h5>
                <span className="inline-block mt-1 text-[11px] font-mono font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2 py-0.5 rounded">
                  {p.formula}
                </span>
              </div>

              <p className="text-xs text-neutral-300 leading-relaxed">
                {p.keySummary}
              </p>

              <div className="rounded-xl border border-amber-500/30 bg-amber-950/20 p-3 text-xs">
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block mb-0.5">
                  🎯 BẪY ĐIỂM SỐ TRẮC NGHIỆM:
                </span>
                <span className="text-amber-200/90 font-medium">{p.examGotcha}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
