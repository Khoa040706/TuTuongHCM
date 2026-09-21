"use client";
import React, { useState } from "react";

export default function PaasEnterpriseValueCockpit() {
  const [activeDimension, setActiveDimension] = useState(0);
  const [enterpriseType, setEnterpriseType] = useState("startup"); // 'startup' | 'enterprise'

  const dimensions = [
    {
      id: "speed",
      title: "1. Nhanh Hơn (Tăng Tốc Phát Triển Ứng Dụng)",
      keyword: "NHANH HƠN",
      metric: "Rút ngắn 70% Time-to-Market",
      icon: "⚡",
      badge: "Tốc Độ & Thời Gian",
      color: "from-amber-500 to-orange-500",
      summary: "Rút ngắn chu kỳ phát triển và đưa sản phẩm đến tay khách hàng trong thời gian ngắn nhất.",
      details: [
        "Lập trình viên bỏ qua hoàn toàn công đoạn dựng máy chủ, cài đặt môi trường và cấu hình mạng.",
        "Sử dụng các template, dịch vụ dựng sẵn (Pre-built components) giúp tạo sản phẩm khả dụng tối thiểu (MVP) chỉ trong vài ngày.",
        "Quy trình CI/CD tích hợp giúp đẩy bản cập nhật vá lỗi hoặc tính năng mới lên môi trường live sau mỗi lần duyệt code."
      ],
      startupImpact: "Giúp Startup nhanh chóng thử nghiệm tính năng với người dùng thật và xoay trục (pivot) ý tưởng trước khi cạn vốn.",
      enterpriseImpact: "Giúp tập đoàn lớn phá vỡ sự chậm chạp của các quy trình IT truyền thống, bắt kịp đối thủ cạnh tranh trên thị trường số."
    },
    {
      id: "cost",
      title: "2. Rẻ Hơn (Tiết Kiệm Chi Phí Đầu Tư)",
      keyword: "RẺ HƠN",
      metric: "Cắt giảm 60% Chi Phí Phần Cứng",
      icon: "💰",
      badge: "Tối Ưu Ngân Sách",
      color: "from-emerald-500 to-teal-500",
      summary: "Chuyển dịch cơ cấu tài chính từ CAPEX sang OPEX, loại bỏ lãng phí tài nguyên máy chủ nhàn rỗi.",
      details: [
        "Không cần bỏ ra hàng trăm triệu đồng mua máy chủ vật lý, tủ rack, hệ thống điều hòa và UPS dự phòng.",
        "Mô hình thanh toán Pay-as-you-go: Chỉ trả tiền cho CPU, RAM và lưu lượng băng thông thực sự tiêu thụ theo từng giây/phút.",
        "Tiết kiệm chi phí thuê đội ngũ kỹ sư hệ thống (SysAdmin) chuyên trực đêm để bảo trì phần cứng."
      ],
      startupImpact: "Không cần gọi vốn hàng triệu đô chỉ để mua máy chủ ban đầu; chỉ cần thẻ tín dụng là có thể khởi sự kinh doanh.",
      enterpriseImpact: "Tối ưu hóa bảng cân đối kế toán, biến chi phí cố định nặng nề thành chi phí biến đổi linh hoạt theo doanh thu."
    },
    {
      id: "agility",
      title: "3. Linh Hoạt Hơn (Tăng Tính Linh Hoạt & Mở Rộng)",
      keyword: "LINH HOẠT HƠN",
      metric: "Co giãn tức thì 10,000 req/s",
      icon: "🔄",
      badge: "Đàn Hồi Vượt Trội",
      color: "from-blue-500 to-cyan-500",
      summary: "Hệ thống tự động co giãn thích ứng với biến động nhu cầu thị trường mà không sợ sập mạng.",
      details: [
        "Khi diễn ra các sự kiện như Black Friday hoặc Flash Sale, PaaS tự động nhân bản thêm instance container chỉ trong vài giây.",
        "Khi đêm muộn lưu lượng giảm xuống, hệ thống tự động co cụm về mức tối thiểu để tiết kiệm tiền điện toán.",
        "Linh hoạt đổi mới ngăn xếp công nghệ: Dễ dàng chạy thử một microservice bằng Go hoặc Python cạnh hệ thống cũ."
      ],
      startupImpact: "Không sợ ứng dụng bị sập khi được báo chí đăng tin hoặc lan truyền mạnh mẽ (viral) trên mạng xã hội.",
      enterpriseImpact: "Đảm bảo tính liên tục của chuỗi cung ứng và thương mại điện tử vào những mùa cao điểm bán hàng."
    },
    {
      id: "collaboration",
      title: "4. Hợp Tác Hơn (Tăng Cường Cộng Tác Nhóm)",
      keyword: "HỢP TÁC HƠN",
      metric: "Đồng bộ 100% Môi Trường Code",
      icon: "👥",
      badge: "Văn Hóa DevOps",
      color: "from-purple-500 to-indigo-500",
      summary: "Xóa bỏ rào cản địa lý và hiện tượng 'chạy được trên máy tôi nhưng lỗi trên server'.",
      details: [
        "Cung cấp một môi trường phát triển, kiểm thử và staging chuẩn hóa, lưu trữ tập trung trên đám mây.",
        "Lập trình viên làm việc từ xa (Remote) hoặc phân tán toàn cầu đều truy cập chung một quy chuẩn pipeline.",
        "Tích hợp với các công cụ cộng tác như GitHub, GitLab, Jira và Slack giúp thông báo trạng thái build tức thì cho toàn đội ngũ."
      ],
      startupImpact: "Thu hút nhân tài lập trình viên trên toàn thế giới mà không cần phải ngồi chung một văn phòng vật lý.",
      enterpriseImpact: "Thúc đẩy sự gắn kết nhịp nhàng giữa đội ngũ phát triển (Dev) và đội ngũ vận hành (Ops) theo tinh thần DevOps hiện đại."
    },
    {
      id: "security",
      title: "5. An Toàn Hơn (Cải Thiện Bảo Mật & Tuân Thủ)",
      keyword: "AN TOÀN HƠN",
      metric: "Đạt chuẩn ISO 27001 & SOC 2",
      icon: "🛡️",
      badge: "Lá Chắn Cấp Cao",
      color: "from-rose-500 to-red-500",
      summary: "Kế thừa hệ thống phòng thủ mạng hàng đầu thế giới từ các tập đoàn công nghệ khổng lồ.",
      details: [
        "Nhà cung cấp đám mây đầu tư hàng tỷ USD cho an ninh mạng, liên tục cập nhật bản vá lỗ hổng 0-day ở tầng OS và mạng.",
        "Tự động mã hóa dữ liệu cả khi lưu trữ (At Rest) lẫn khi truyền tải trên đường truyền (In Transit qua HTTPS/TLS).",
        "Tuân thủ sẵn các tiêu chuẩn bảo mật quốc tế khắt khe nhất như GDPR, HIPAA, PCI-DSS và ISO/IEC 27001."
      ],
      startupImpact: "Đạt được chứng chỉ bảo mật ngân hàng để ký hợp đồng B2B với các đối tác lớn mà không tốn hàng năm tự kiểm toán.",
      enterpriseImpact: "Giảm thiểu tối đa nguy cơ bị hacker tấn công chuỗi cung ứng hoặc rò rỉ dữ liệu khách hàng gây tổn hại uy tín."
    },
    {
      id: "innovation",
      title: "6. Đổi Mới Hơn (Thúc Đẩy Đổi Mới Sáng Tạo)",
      keyword: "ĐỔI MỚI HƠN",
      metric: "Tiếp cận AI/ML, Big Data 1-Click",
      icon: "💡",
      badge: "Tiên Phong Công Nghệ",
      color: "from-teal-500 to-emerald-500",
      summary: "Dễ dàng tích hợp các công nghệ đột phá của tương lai mà không cần đội ngũ nghiên cứu khổng lồ.",
      details: [
        "Truy cập tức thì vào các API Trí tuệ Nhân tạo (Generative AI, Computer Vision, Speech-to-Text, LLMs).",
        "Tích hợp các đường ống phân tích dữ liệu lớn (Big Data Lakehouse) và kết nối thiết bị Internet vạn vật (IoT).",
        "Chi phí thử nghiệm một tính năng công nghệ mới gần như bằng không: Nếu thất bại thì xóa bỏ dịch vụ mà không mất vốn."
      ],
      startupImpact: "Cho phép các nhóm nhỏ vài người tạo ra các ứng dụng AI thông minh cạnh tranh sòng phẳng với các tập đoàn lớn.",
      enterpriseImpact: "Khai mở các dòng sản phẩm số mới, tạo ra lợi thế cạnh tranh vượt bậc trong nền kinh tế tri thức."
    }
  ];

  const current = dimensions[activeDimension];

  return (
    <div className="my-8 rounded-2xl border border-amber-500/20 bg-gradient-to-br from-[#1c1811] via-[#1e1a13] to-[#14120c] p-5 md:p-7 text-neutral-200 shadow-2xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-800 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-400">
            <span>🏢 Mục V • Giá Trị Doanh Nghiệp</span>
          </div>
          <h3 className="mt-2 text-xl font-bold tracking-tight text-white md:text-2xl">
            Bảng Điều Khiển: 6 Chiều Giá Trị Doanh Nghiệp Từ PaaS
          </h3>
          <p className="mt-1 text-sm text-neutral-400">
            Khẩu quyết chiến lược: <strong className="text-amber-300">Nhanh hơn – Rẻ hơn – Linh hoạt hơn – Hợp tác hơn – An toàn hơn – Đổi mới hơn</strong>
          </p>
        </div>

        {/* Enterprise Type Switcher */}
        <div className="flex rounded-xl bg-neutral-900/90 p-1 border border-neutral-800">
          <button
            onClick={() => setEnterpriseType("startup")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              enterpriseType === "startup"
                ? "bg-amber-600 text-white shadow-md"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <span>🚀 Góc Nhìn Startup</span>
          </button>
          <button
            onClick={() => setEnterpriseType("enterprise")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              enterpriseType === "enterprise"
                ? "bg-blue-600 text-white shadow-md"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <span>🏛️ Góc Nhìn Tập Đoàn</span>
          </button>
        </div>
      </div>

      {/* 6 DIMENSIONS GRID SELECTORS */}
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
        {dimensions.map((dim, idx) => (
          <button
            key={dim.id}
            onClick={() => setActiveDimension(idx)}
            className={`flex flex-col items-center p-3 rounded-xl border text-center transition-all ${
              activeDimension === idx
                ? "border-amber-500 bg-amber-950/50 shadow-md ring-1 ring-amber-500/40"
                : "border-neutral-800 bg-neutral-900/50 hover:border-neutral-700"
            }`}
          >
            <span className="text-2xl mb-1">{dim.icon}</span>
            <span className="text-xs font-extrabold text-amber-300 uppercase">{dim.keyword}</span>
            <span className="text-[10px] text-neutral-400 line-clamp-1 mt-0.5">{dim.title.split(" (")[0]}</span>
          </button>
        ))}
      </div>

      {/* ACTIVE DIMENSION DISPLAY */}
      <div className="mt-6 space-y-5 rounded-2xl border border-amber-500/30 bg-neutral-900/80 p-5 md:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/20 text-2xl border border-amber-500/30">
              {current.icon}
            </div>
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">{current.badge}</span>
              <h4 className="text-lg font-bold text-white mt-0.5">{current.title}</h4>
            </div>
          </div>
          <span className="self-start sm:self-auto px-3 py-1 rounded-full border border-amber-500/40 bg-amber-500/10 text-xs font-bold text-amber-300">
            📊 {current.metric}
          </span>
        </div>

        <p className="text-xs md:text-sm text-neutral-300 font-medium leading-relaxed">
          {current.summary}
        </p>

        {/* 3 Core Points */}
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">
            Cơ Chế Tạo Ra Giá Trị Của PaaS:
          </span>
          <ul className="space-y-2">
            {current.details.map((dt, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-neutral-300">
                <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-[10px] font-bold text-amber-400 mt-0.5">
                  ✓
                </span>
                <span>{dt}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Enterprise Perspective Context Card */}
        <div className="rounded-xl border border-neutral-800 bg-black/50 p-4">
          <div className="flex items-start gap-3">
            <span className="text-xl">{enterpriseType === "startup" ? "🚀" : "🏛️"}</span>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                Ý Nghĩa Sống Còn Đối Với {enterpriseType === "startup" ? "Doanh Nghiệp Khởi Nghiệp (Startup)" : "Tập Đoàn Doanh Nghiệp Lớn (Enterprise)"}:
              </span>
              <p className="text-xs text-neutral-300 mt-1 leading-relaxed">
                {enterpriseType === "startup" ? current.startupImpact : current.enterpriseImpact}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
