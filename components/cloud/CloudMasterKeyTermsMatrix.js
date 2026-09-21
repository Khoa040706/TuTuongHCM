"use client";
import React, { useState, useMemo } from "react";
import {
  Search,
  BookOpen,
  Filter,
  Sparkles,
  CheckCircle2,
  HelpCircle,
  Lightbulb,
  Tag,
  ShieldCheck,
  Server,
  Layers,
  Cpu,
  RefreshCw,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Eye,
  EyeOff
} from "lucide-react";

const KEY_TERMS = [
  {
    id: "term-1",
    term: "Virtualization",
    termVi: "Ảo hóa",
    category: "Hạ tầng & Nền tảng",
    categoryKey: "infra",
    badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
    icon: Server,
    summary: "Phân tách tài nguyên vật lý thành nhiều môi trường ảo độc lập qua Hypervisor.",
    fullDefinition: "Công nghệ phân tách tài nguyên phần cứng vật lý (CPU, RAM, Ổ đĩa, Mạng) thành nhiều môi trường ảo độc lập (Virtual Machines - VMs, Containers) thông qua một tầng trừu tượng phần mềm gọi là Hypervisor (VMM).",
    roleInCloud: "Cốt lõi sống còn — Là công nghệ nền tảng quyết định sự ra đời và vận hành của toàn bộ ngành điện toán đám mây.",
    examTip: "Thuộc lòng câu thần chú: 'Ảo hóa KHÔNG PHẢI là Đám mây, nhưng Đám mây KHÔNG THỂ tồn tại nếu thiếu Ảo hóa'. Ảo hóa là công nghệ tạo máy ảo, còn Cloud là mô hình dịch vụ tự động hóa và đo lường theo nhu cầu.",
    relatedTerms: ["Hypervisor", "Multi-tenancy", "Resource Pooling", "Type 1/Type 2 Hypervisor"]
  },
  {
    id: "term-2",
    term: "Distributed Computing",
    termVi: "Điện toán phân tán",
    category: "Kiến trúc Tính toán",
    categoryKey: "arch",
    badgeColor: "bg-indigo-100 text-indigo-800 border-indigo-200",
    icon: Cpu,
    summary: "Kết nối mạng lưới nhiều máy tính độc lập để cùng giải quyết bài toán quy mô lớn.",
    fullDefinition: "Mô hình tính toán trong đó nhiều máy tính độc lập (nodes) được kết nối với nhau qua mạng truyền thông, phối hợp chia sẻ tài nguyên và xử lý các tác vụ song song, hiển thị với người dùng như một hệ thống đơn nhất.",
    roleInCloud: "Cung cấp nền tảng xử lý dữ liệu lớn (Big Data), tính toán cụm song song và khả năng mở rộng ngang (Horizontal Scaling) vô hạn.",
    examTip: "Đám mây là sự giao thoa hoàn hảo giữa: Ảo hóa (tối ưu phần cứng) + Điện toán phân tán (xử lý quy mô lớn) + Mô hình kinh doanh tiện ích (Utility Computing).",
    relatedTerms: ["Grid Computing", "Cluster Computing", "Horizontal Scaling", "P2P"]
  },
  {
    id: "term-3",
    term: "Scalability",
    termVi: "Khả năng mở rộng",
    category: "Kiến trúc Tính toán",
    categoryKey: "arch",
    badgeColor: "bg-teal-100 text-teal-800 border-teal-200",
    icon: Layers,
    summary: "Khả năng tăng/giảm quy mô tài nguyên theo nhu cầu mà không làm gián đoạn hệ thống.",
    fullDefinition: "Khả năng của một hệ thống có thể mở rộng (hoặc thu hẹp) năng lực xử lý (CPU, RAM, Dung lượng lưu trữ, Băng thông) để đáp ứng khối lượng công việc biến thiên liên tục mà không làm suy giảm hiệu năng hoặc gián đoạn dịch vụ.",
    roleInCloud: "Gồm Mở rộng dọc (Vertical Scaling - Scale Up/Down: thêm RAM/CPU cho 1 máy chủ) và Mở rộng ngang (Horizontal Scaling - Scale Out/In: thêm nhiều máy chủ vào cụm).",
    examTip: "Đám mây luôn ưu tiên Mở rộng ngang (Horizontal Scale Out) vì giá thành rẻ, khả năng chịu lỗi cao và không bị giới hạn trần vật lý của 1 bo mạch chủ.",
    relatedTerms: ["Scale Out / Scale In", "Scale Up / Scale Down", "Elasticity", "Load Balancer"]
  },
  {
    id: "term-4",
    term: "Auto Scaling",
    termVi: "Tự động co giãn",
    category: "Tự động hóa",
    categoryKey: "automation",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
    icon: RefreshCw,
    summary: "Tự động thêm/bớt máy chủ theo ngưỡng tải thực tế (CPU, RAM, Request) đã định trước.",
    fullDefinition: "Cơ chế đám mây tự động theo dõi các chỉ số tải thực tế (như CPU utilization > 75%, lưu lượng HTTP requests) và tự động kích hoạt thêm/bớt các phiên bản máy chủ ảo mà không cần con người can thiệp thủ công.",
    roleInCloud: "Biến đặc tính Co giãn linh hoạt (Rapid Elasticity) thành hiện thực, trực tiếp giảm chi phí lãng phí khi vắng khách và cứu sập hệ thống khi nghẽn mạng.",
    examTip: "Tự động hóa gắn liền với mô hình tính tiền 'Pay-as-you-go'. Đề thi hay hỏi: Auto Scaling giúp đạt được lợi ích gì? -> Đáp án: Tiết kiệm chi phí (Cost optimization) & Đảm bảo tính sẵn sàng (High Availability).",
    relatedTerms: ["Rapid Elasticity", "Threshold Trigger", "AWS CloudWatch", "Pay-as-you-go"]
  },
  {
    id: "term-5",
    term: "Service Models (SPI)",
    termVi: "Mô hình Dịch vụ (IaaS, PaaS, SaaS)",
    category: "Mô hình Đám mây",
    categoryKey: "models",
    badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
    icon: Layers,
    summary: "Bộ 3 mô hình cung cấp dịch vụ phân định ranh giới trách nhiệm giữa NCC và khách hàng.",
    fullDefinition: "Ba hình thức cung cấp dịch vụ phân tầng chuẩn mực trong điện toán đám mây: IaaS (Hạ tầng dịch vụ - máy ảo, ổ đĩa, mạng), PaaS (Nền tảng dịch vụ - runtime, database, OS), SaaS (Phần mềm dịch vụ - ứng dụng hoàn chỉnh qua web).",
    roleInCloud: "Định vị kiến trúc kinh doanh và phân chia ma trận Trách nhiệm chung (Shared Responsibility Model).",
    examTip: "Kim tự tháp quản trị: IaaS khách hàng quản nhiều nhất (từ HĐH trở lên). PaaS khách quản Code + Dữ liệu. SaaS khách hàng CHỈ sử dụng, NCC lo 100% bên dưới.",
    relatedTerms: ["IaaS (EC2/S3)", "PaaS (GAE/Heroku)", "SaaS (Gmail/M365)", "Shared Responsibility"]
  },
  {
    id: "term-6",
    term: "Deployment Models",
    termVi: "Mô hình Triển khai",
    category: "Mô hình Đám mây",
    categoryKey: "models",
    badgeColor: "bg-pink-100 text-pink-800 border-pink-200",
    icon: Server,
    summary: "4 phương thức cấu hình phạm vi truy cập: Public, Private, Community, Hybrid Cloud.",
    fullDefinition: "Các mô hình thiết lập hạ tầng đám mây dựa trên đối tượng sử dụng, quyền sở hữu và vị trí đặt tài nguyên: Public Cloud (công cộng đa khách thuê), Private Cloud (độc quyền một tổ chức), Community Cloud (cộng đồng cùng sứ mệnh), Hybrid Cloud (lai giữa Private và Public).",
    roleInCloud: "Giúp doanh nghiệp cân đối giữa bài toán: Chi phí - Mức độ kiểm soát dữ liệu - Tuân thủ pháp lý an ninh mạng.",
    examTip: "Khi ngân hàng, cơ quan chính phủ cần an toàn tuyệt đối -> Private Cloud. Doanh nghiệp cần linh hoạt mùa cao điểm -> Hybrid Cloud. Startup tiết kiệm chi phí tối đa -> Public Cloud.",
    relatedTerms: ["Public Cloud", "Private Cloud", "Community Cloud", "Hybrid Cloud", "Multi-Cloud"]
  },
  {
    id: "term-7",
    term: "Cloud Architecture",
    termVi: "Kiến trúc Đám mây",
    category: "Kiến trúc Tính toán",
    categoryKey: "arch",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    icon: Layers,
    summary: "Cấu trúc phân tầng gồm Front-end (phía người dùng) và Back-end (hạ tầng quản trị).",
    fullDefinition: "Bản thiết kế hệ thống tổng thể quy định cách các công nghệ đám mây tương tác với nhau, chia làm hai phân vùng chính: Front-end (Giao diện web, ứng dụng client, trình duyệt) và Back-end (Hệ thống máy chủ vật lý, lưu trữ, ảo hóa, cơ chế bảo mật và phần mềm điều phối quản trị).",
    roleInCloud: "Bảo đảm tính tách biệt lỏng lẻo (Loosely Coupled), khả năng nâng cấp từng phần độc lập và quản lý tài nguyên tập trung.",
    examTip: "Front-end là những gì người dùng cuối nhìn thấy và thao tác; Back-end là toàn bộ 'đám mây bí mật' chạy ngầm bên dưới để cung cấp năng lực tính toán.",
    relatedTerms: ["Front-end / Back-end", "Hypervisor", "Cloud Orchestration", "Management Layer"]
  },
  {
    id: "term-8",
    term: "Availability",
    termVi: "Tính sẵn sàng (Uptime)",
    category: "Độ tin cậy & An ninh",
    categoryKey: "reliability",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    icon: CheckCircle2,
    summary: "Tỷ lệ thời gian hệ thống hoạt động ổn định và đáp ứng dịch vụ theo cam kết SLA.",
    fullDefinition: "Thước đo tỷ lệ phần trăm thời gian mà một dịch vụ, máy chủ hoặc ứng dụng đám mây duy trì trạng thái hoạt động bình thường và phản hồi chính xác yêu cầu của người dùng trong khoảng thời gian xác định (thường cam kết qua SLA từ 99.9% đến 99.999%).",
    roleInCloud: "Chỉ số sống còn quyết định uy tín của các nhà cung cấp đám mây hàng đầu thế giới (AWS, Google Cloud, Azure).",
    examTip: "Quy tắc 'Các số 9 vàng': 99.9% downtime ~8.76 giờ/năm; 99.99% downtime ~52.6 phút/năm; 99.999% (Five Nines) downtime chỉ ~5.26 phút/năm. Đạt được nhờ kiến trúc Multi-AZ.",
    relatedTerms: ["SLA (99.9%)", "High Availability (HA)", "Downtime / Uptime", "Multi-AZ Replication"]
  },
  {
    id: "term-9",
    term: "Fault Tolerance",
    termVi: "Khả năng chịu lỗi",
    category: "Độ tin cậy & An ninh",
    categoryKey: "reliability",
    badgeColor: "bg-rose-100 text-rose-800 border-rose-200",
    icon: ShieldCheck,
    summary: "Hệ thống tiếp tục chạy bình thường không gián đoạn ngay cả khi có linh kiện hỏng hóc.",
    fullDefinition: "Đặc tính kiến trúc cho phép hệ thống duy trì hoạt động liên tục không hề bị gián đoạn (Zero Downtime) ngay cả khi một hoặc nhiều thành phần phần cứng, máy chủ, ổ đĩa hoặc kết nối mạng bên trong bị sự cố tê liệt hoàn toàn.",
    roleInCloud: "Đạt được thông qua cơ chế Dự phòng kép (Redundancy) và Sao chép dữ liệu đồng bộ (Data Replication) sang nhiều trung tâm dữ liệu độc lập.",
    examTip: "Phân biệt đề thi: High Availability (HA) là khôi phục dịch vụ cực nhanh sau sự cố (có thể rớt nhẹ vài giây để failover), còn Fault Tolerance là KHÔNG HỀ ngắt quãng dù 1 phần cứng chết tươi.",
    relatedTerms: ["Redundancy", "Data Replication", "Failover", "Zero Downtime", "RAID / Multi-Zone"]
  },
  {
    id: "term-10",
    term: "Cloud Security",
    termVi: "Bảo mật Đám mây",
    category: "Độ tin cậy & An ninh",
    categoryKey: "reliability",
    badgeColor: "bg-red-100 text-red-800 border-red-200",
    icon: ShieldCheck,
    summary: "Tập hợp chính sách, mã hóa và kiểm soát danh tính bảo vệ tài nguyên trên đám mây.",
    fullDefinition: "Tập hợp toàn diện các biện pháp kỹ thuật, chính sách bảo vệ, mã hóa dữ liệu (at-rest & in-transit), kiểm soát danh tính và truy cập (IAM), nhằm bảo đảm tính Bảo mật (Confidentiality), Toàn vẹn (Integrity) và Sẵn sàng (Availability) của dữ liệu trên nền tảng đám mây.",
    roleInCloud: "Thách thức hàng đầu ngăn cản doanh nghiệp chuyển dịch lên đám mây, đòi hỏi tuân thủ mô hình Trách nhiệm chung.",
    examTip: "Mô hình trách nhiệm chung: NCC đám mây chịu trách nhiệm bảo mật CỦA đám mây (Security OF the Cloud - Trung tâm dữ liệu, phần cứng, mạng). Người dùng chịu trách nhiệm bảo mật TRONG đám mây (Security IN the Cloud - Dữ liệu, mật khẩu, phân quyền IAM).",
    relatedTerms: ["Shared Responsibility Model", "IAM", "Encryption (TLS/AES)", "Data Breach"]
  }
];

const CATEGORIES = [
  { key: "all", label: "Tất cả (10)", icon: BookOpen },
  { key: "infra", label: "Hạ tầng & Nền tảng", icon: Server },
  { key: "arch", label: "Kiến trúc & Tính toán", icon: Cpu },
  { key: "models", label: "Mô hình Dịch vụ & Triển khai", icon: Layers },
  { key: "automation", label: "Tự động hóa", icon: RefreshCw },
  { key: "reliability", label: "Độ tin cậy & Bảo mật", icon: ShieldCheck }
];

export default function CloudMasterKeyTermsMatrix() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedTermId, setExpandedTermId] = useState("term-1");
  const [studyMode, setStudyMode] = useState(false); // Ẩn định nghĩa để ôn thi flashcard
  const [revealedIds, setRevealedIds] = useState(new Set());

  const toggleReveal = (id) => {
    setRevealedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const filteredTerms = useMemo(() => {
    return KEY_TERMS.filter((item) => {
      const matchCat = activeCategory === "all" || item.categoryKey === activeCategory;
      const q = searchTerm.toLowerCase().trim();
      const matchSearch =
        !q ||
        item.term.toLowerCase().includes(q) ||
        item.termVi.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q) ||
        item.examTip.toLowerCase().includes(q) ||
        item.relatedTerms.some((t) => t.toLowerCase().includes(q));
      return matchCat && matchSearch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <div className="my-8 rounded-3xl border border-stone-200 bg-linear-to-b from-stone-50/70 via-white to-stone-50/50 p-5 sm:p-7 shadow-xl font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-stone-200">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-amber-500 text-stone-900 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Ma Trận Bảng Tra Cứu
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
            10 Thuật Ngữ Cốt Lõi Chương 1 (Master Key Terms Matrix)
          </h3>
          <p className="text-sm text-stone-600 mt-1 max-w-2xl">
            Bảng tra cứu và bộ nhớ ôn thi nhanh 10 từ khóa cốt lõi xuất hiện dày đặc trong các đề thi và phỏng vấn Điện toán đám mây.
          </p>
        </div>

        {/* Study Mode Toggle */}
        <button
          onClick={() => setStudyMode(!studyMode)}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs transition-all shadow-sm ${
            studyMode
              ? "bg-amber-500 text-stone-900 shadow-amber-200"
              : "bg-white border border-stone-300 text-stone-700 hover:bg-stone-50"
          }`}
        >
          {studyMode ? (
            <>
              <EyeOff className="w-4 h-4" />
              Chế độ Ẩn Định Nghĩa (Đang Bật)
            </>
          ) : (
            <>
              <Eye className="w-4 h-4" />
              Bật Chế độ Ôn Thi (Tự Kiểm Tra)
            </>
          )}
        </button>
      </div>

      {/* Filter & Search Controls */}
      <div className="mt-5 flex flex-col md:flex-row items-stretch md:items-center gap-3">
        {/* Search Bar */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Tìm theo từ khóa (VD: Virtualization, Chịu lỗi, SLA, IaaS)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-300 bg-white text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700 font-bold px-1.5 py-0.5"
            >
              Xóa
            </button>
          )}
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-1.5">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                  isActive
                    ? "bg-stone-900 text-amber-400 shadow-md"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Terms Count Banner */}
      <div className="mt-4 flex items-center justify-between text-xs text-stone-500 px-1">
        <span>Hiển thị <strong>{filteredTerms.length}</strong> / {KEY_TERMS.length} từ khóa</span>
        {studyMode && (
          <span className="text-amber-700 font-semibold flex items-center gap-1">
            <Lightbulb className="w-3.5 h-3.5" />
            Nhấp vào ô định nghĩa để lật xem đáp án
          </span>
        )}
      </div>

      {/* Terms Grid */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredTerms.map((item) => {
          const isExpanded = expandedTermId === item.id;
          const isRevealed = revealedIds.has(item.id);
          const TermIcon = item.icon;

          return (
            <div
              key={item.id}
              className={`rounded-2xl border transition-all duration-200 bg-white ${
                isExpanded
                  ? "border-amber-400 shadow-lg ring-1 ring-amber-300"
                  : "border-stone-200/80 hover:border-stone-300 shadow-xs"
              }`}
            >
              {/* Card Header */}
              <div
                onClick={() => setExpandedTermId(isExpanded ? null : item.id)}
                className="p-4 cursor-pointer flex items-start justify-between gap-3 select-none"
              >
                <div className="flex items-start gap-3">
                  <div className={`p-2.5 rounded-xl ${item.badgeColor}`}>
                    <TermIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="font-extrabold text-base text-stone-900">
                        {item.term}
                      </h4>
                      <span className="text-xs font-bold text-stone-500">
                        ({item.termVi})
                      </span>
                    </div>
                    <span className="inline-block mt-1 text-[11px] font-semibold text-stone-500 bg-stone-100 px-2 py-0.5 rounded-md">
                      {item.category}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  aria-label={isExpanded ? "Thu gọn chi tiết" : "Mở rộng chi tiết"}
                  className="p-1 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100"
                >
                  {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
              </div>

              {/* Summary / Flashcard Cover */}
              <div className="px-4 pb-3">
                {studyMode ? (
                  <div
                    onClick={() => toggleReveal(item.id)}
                    className={`p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                      isRevealed
                        ? "bg-amber-50/60 border-amber-200 text-stone-800"
                        : "bg-stone-100 border-dashed border-stone-300 text-stone-500 text-center font-bold hover:bg-amber-50/50"
                    }`}
                  >
                    {isRevealed ? (
                      <p className="leading-relaxed">{item.summary}</p>
                    ) : (
                      <div className="flex items-center justify-center gap-1.5 py-1">
                        <HelpCircle className="w-4 h-4 text-amber-600" />
                        <span>Bấm để hiển thị định nghĩa tóm tắt</span>
                      </div>
                    )}
                  </div>
                ) : (
                  <p className="text-xs text-stone-600 leading-relaxed bg-stone-50 p-2.5 rounded-xl border border-stone-150">
                    {item.summary}
                  </p>
                )}
              </div>

              {/* Expandable Deep Details */}
              {isExpanded && (
                <div className="px-4 pb-4 pt-1 border-t border-stone-100 space-y-3 text-xs animate-in fade-in duration-200">
                  {/* Full Definition */}
                  <div>
                    <span className="font-extrabold text-stone-900 block mb-1">
                      📖 Định nghĩa học thuật chi tiết:
                    </span>
                    <p className="text-stone-700 leading-relaxed bg-amber-50/30 p-2.5 rounded-xl border border-amber-100">
                      {item.fullDefinition}
                    </p>
                  </div>

                  {/* Role in Cloud */}
                  <div>
                    <span className="font-extrabold text-sky-800 block mb-1">
                      ⚙️ Vai trò trong Đám mây:
                    </span>
                    <p className="text-stone-700 leading-relaxed bg-sky-50/40 p-2.5 rounded-xl border border-sky-100">
                      {item.roleInCloud}
                    </p>
                  </div>

                  {/* Exam Tip */}
                  <div>
                    <span className="font-extrabold text-amber-900 block mb-1 flex items-center gap-1">
                      <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
                      Mẹo nhớ thi cử & Phỏng vấn:
                    </span>
                    <p className="text-amber-950 font-medium leading-relaxed bg-amber-100/50 p-2.5 rounded-xl border border-amber-200">
                      {item.examTip}
                    </p>
                  </div>

                  {/* Related Terms */}
                  <div>
                    <span className="font-bold text-stone-500 block mb-1">
                      Từ khóa liên kết:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.relatedTerms.map((rel, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-stone-100 text-stone-700 font-semibold text-[11px]"
                        >
                          <Tag className="w-2.5 h-2.5 text-stone-400" />
                          {rel}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer Info Box */}
      <div className="mt-6 p-4 rounded-2xl bg-stone-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            <strong>Bí kíp đạt điểm tối đa:</strong> Nắm vững 10 từ khóa trên sẽ giúp bạn dễ dàng vượt qua 85% câu hỏi trắc nghiệm lý thuyết của Chương 1.
          </span>
        </div>
        <span className="text-stone-400 shrink-0 font-medium">Nguồn: Giáo trình Cloud Computing NIST & AWS Well-Architected</span>
      </div>
    </div>
  );
}
