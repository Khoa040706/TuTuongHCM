"use client";
import React, { useState } from "react";
import { Clock, Globe, Laptop, HeartPulse, ShoppingBag, GraduationCap, Building2, Cpu, Sparkles, ChevronRight, CheckCircle2, History } from "lucide-react";

export default function CloudHistoryTimeline() {
  const [activeTab, setActiveTab] = useState("timeline"); // 'timeline' | 'everywhere'
  const [selectedEra, setSelectedEra] = useState("1960s");
  const [selectedDomain, setSelectedDomain] = useState("startup");

  const eras = [
    {
      id: "1960s",
      period: "Thập niên 1960s – 1970s",
      title: "Khởi Nguyên: Timesharing & Máy Ảo Đầu Tiên",
      theme: "border-amber-400 bg-amber-500/10 text-amber-700",
      pillActive: "bg-amber-600 text-white shadow-xs",
      milestones: [
        {
          year: "1960s",
          title: "Khái niệm Timesharing (Chia sẻ thời gian)",
          desc: "IBM và DEC tiên phong kỹ thuật timesharing, cho phép nhiều người dùng cùng truy cập máy tính lớn (Mainframe) qua các thiết bị đầu cuối ngu ngốc (dumb terminals).",
          badge: "Nền tảng khởi thủy"
        },
        {
          year: "1972",
          title: "IBM phát triển Máy ảo (VM) đầu tiên",
          desc: "IBM System/370 ra mắt công nghệ máy ảo (Virtual Machine), cho phép phân chia phần cứng vật lý thành nhiều môi trường chạy độc lập. Đây là hạt nhân của Virtualization sau này.",
          badge: "Cột mốc máy ảo"
        },
        {
          year: "1977",
          title: "Biểu tượng Đám mây (Cloud Symbol) xuất hiện",
          desc: "Biểu tượng hình đám mây lần đầu tiên được dùng trong sơ đồ mạng ARPANET để trừu tượng hóa hạ tầng mạng phức tạp mà người dùng không cần biết chi tiết bên trong.",
          badge: "Nguồn gốc tên gọi"
        }
      ],
      examNote: "Nhớ 3 mốc: 1960s Timesharing (chia sẻ máy chủ) ➔ 1972 IBM VM (máy ảo đầu tiên) ➔ 1977 Biểu tượng Cloud."
    },
    {
      id: "1990s",
      period: "Thập niên 1990s",
      title: "Internet Bùng Nổ & Thuật Ngữ 'Cloud Computing'",
      theme: "border-sky-400 bg-sky-500/10 text-sky-700",
      pillActive: "bg-sky-600 text-white shadow-xs",
      milestones: [
        {
          year: "1991",
          title: "Mạng toàn cầu World Wide Web (WWW) ra đời",
          desc: "Tim Berners-Lee công bố WWW, tạo ra hạ tầng siêu liên kết Internet mở đường cho việc truyền tải dữ liệu và dịch vụ phần mềm trên toàn cầu.",
          badge: "Hạ tầng Internet"
        },
        {
          year: "1997",
          title: "Giáo sư Ramesh Chellappa đặt tên 'Cloud Computing'",
          desc: "Trong một bài giảng khoa học, GS. Ramesh Chellappa lần đầu tiên định nghĩa Điện toán đám mây là một mô hình tính toán nơi giới hạn kinh tế được quyết định bởi hạ tầng mạng hơn là phần cứng cục bộ.",
          badge: "Thuật ngữ chính thức"
        },
        {
          year: "1999",
          title: "Salesforce thành lập — Tiên phong SaaS",
          desc: "Salesforce ra đời, chứng minh thành công mô hình cung cấp phần mềm quản lý quan hệ khách hàng (CRM) hoàn toàn qua trình duyệt web mà không cần cài đặt đĩa CD truyền thống.",
          badge: "Tiên phong SaaS"
        }
      ],
      examNote: "Người đặt tên 'Cloud Computing' là GS. Ramesh Chellappa (1997); Salesforce (1999) mở đầu kỷ nguyên SaaS qua trình duyệt."
    },
    {
      id: "2000s",
      period: "Thập niên 2000s – Nay",
      title: "Kỷ Nguyên Điện Toán Đám Mây Hiện Đại (Modern Cloud)",
      theme: "border-indigo-400 bg-indigo-500/10 text-indigo-700",
      pillActive: "bg-indigo-600 text-white shadow-xs",
      milestones: [
        {
          year: "2002 – 2006",
          title: "Amazon Web Services (AWS) ra mắt & Apache Hadoop",
          desc: "2002 AWS ra mắt dịch vụ sơ khai; 2006 ra mắt Amazon S3 và EC2 định hình IaaS thương mại. Cùng năm 2006, Hadoop ra đời mở ra kỷ nguyên Big Data phân tán.",
          badge: "Chuẩn mực IaaS"
        },
        {
          year: "2008 – 2010",
          title: "Google App Engine (PaaS) & Microsoft Azure",
          desc: "2008 Google App Engine ra mắt đưa PaaS lên tầm cao mới; 2010 Microsoft chính thức phát hành Azure, thiết lập cuộc đua 'Big Three' Hyperscalers.",
          badge: "Hyperscalers"
        },
        {
          year: "2017 – 2019",
          title: "Tính phí theo giây & Bùng nổ Mạng phân phối nội dung (CDN)",
          desc: "2017 AWS & GCP áp dụng tính cước theo giây (Pay per Second); 2019 thị trường CDN và Edge Computing bùng nổ, tối ưu hóa tốc độ phân phối nội dung toàn cầu.",
          badge: "Pay per Second & CDN"
        }
      ],
      examNote: "3 giai đoạn lớn: Timesharing (1960s) ➔ Internet (1990s) ➔ Modern Cloud (2000s). Điểm cốt lõi hiện đại là Co giãn (Elasticity) và Tính phí theo giây (Pay-as-you-go)."
    }
  ];

  const domains = [
    {
      id: "startup",
      name: "Startup & Web Công Nghệ",
      icon: Laptop,
      color: "border-sky-500 bg-sky-50 text-sky-800",
      example: "Lưu trữ website / ứng dụng trên Cloud",
      mechanism: "Hệ thống tự động mở rộng (Auto-scaling) tài nguyên máy chủ khi lượng người truy cập tăng đột biến trong các đợt ra mắt sản phẩm.",
      takeaway: "Không cần mua trước cụm server vật lý dự phòng lãng phí; chỉ trả tiền cho lượng compute thực tế tiêu thụ."
    },
    {
      id: "iot",
      name: "IoT & Nhà Thông Minh",
      icon: Cpu,
      color: "border-amber-500 bg-amber-50 text-amber-800",
      example: "Điều khiển thiết bị gia đình qua Smartphone",
      mechanism: "Cảm biến, camera, bóng đèn truyền tín hiệu telemetry lên đám mây; ứng dụng điện thoại gửi lệnh xuống thông qua trung gian Cloud Broker.",
      takeaway: "Xử lý và lưu trữ dữ liệu trung tâm, cho phép kiểm soát nhà từ xa ở bất cứ đâu trên thế giới qua kết nối Internet."
    },
    {
      id: "enterprise",
      name: "Doanh Nghiệp & Tài Chính",
      icon: Building2,
      color: "border-purple-500 bg-purple-50 text-purple-800",
      example: "Hệ thống Kế toán, Tiền lương, Xuất hóa đơn",
      mechanism: "Sử dụng các giải pháp phần mềm dạng SaaS trên hạ tầng Cloud để quản lý tài chính tập trung, bảo mật và sao lưu định kỳ.",
      takeaway: "Tập trung hóa dữ liệu chi nhánh, loại bỏ chi phí bảo trì phòng server riêng tại từng văn phòng."
    },
    {
      id: "education",
      name: "Giáo Dục & Hợp Tác",
      icon: GraduationCap,
      color: "border-emerald-500 bg-emerald-50 text-emerald-800",
      example: "Sinh viên cộng tác chỉnh sửa văn bản online",
      mechanism: "Google Docs, MS Office 365 đồng bộ con trỏ và văn bản theo thời gian thực (real-time WebSocket/CRDT) qua máy chủ đám mây.",
      takeaway: "Nhiều người cùng làm việc trên một tài liệu qua trình duyệt, không còn nỗi lo gửi nhầm file đính kèm phiên bản cũ."
    },
    {
      id: "health",
      name: "Y Tế & Chăm Sóc Sức Khỏe",
      icon: HeartPulse,
      color: "border-rose-500 bg-rose-50 text-rose-800",
      example: "Thiết bị đeo tay upload dữ liệu sức khỏe",
      mechanism: "Đồng hồ thông minh liên tục đẩy dữ liệu nhịp tim, nồng độ oxy lên Cloud AI để phân tích và cảnh báo bất thường tới bác sĩ.",
      takeaway: "Cảnh báo y tế tức thì và lưu trữ hồ sơ bệnh án điện tử an toàn dài hạn."
    },
    {
      id: "retail",
      name: "Bán Lẻ & Thương Mại",
      icon: ShoppingBag,
      color: "border-teal-500 bg-teal-50 text-teal-800",
      example: "Thuê tài nguyên phân tích dữ liệu bán hàng theo chu kỳ",
      mechanism: "Trong đợt khuyến mãi Black Friday hoặc Tết, nhà bán lẻ thuê thêm 100 máy ảo phân tích Big Data trong 3 ngày rồi hủy dịch vụ.",
      takeaway: "Tận dụng tối đa đặc tính Rapid Elasticity (co giãn tức thì), tiết kiệm hàng trăm triệu đồng chi phí đầu tư thiết bị."
    }
  ];

  const currentEra = eras.find((e) => e.id === selectedEra) || eras[0];
  const currentDomain = domains.find((d) => d.id === selectedDomain) || domains[0];
  const DomainIcon = currentDomain.icon;

  return (
    <div className="my-8 p-5 sm:p-7 rounded-3xl bg-white border border-stone-200 shadow-md font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-black uppercase tracking-widest text-sky-600">
              Interactive Blueprint • Mục I
            </span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-sky-100 text-sky-800">
              Lịch sử & Ứng dụng
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-black text-stone-900 mt-1">
            Tổng Quan Sự Phát Triển & Bản Đồ Hiện Diện Của Cloud Computing
          </h3>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Khám phá 3 giai đoạn tiến hóa lịch sử và 6 lĩnh vực ứng dụng thực tiễn của công nghệ đám mây.
          </p>
        </div>

        {/* View Switcher */}
        <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-stone-100 border border-stone-200/80 self-start sm:self-auto shrink-0">
          <button
            type="button"
            onClick={() => setActiveTab("timeline")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === "timeline" ? "bg-sky-600 text-white shadow-xs" : "text-stone-600 hover:text-stone-900"
            }`}
          >
            <History className="w-3.5 h-3.5" />
            <span>Dòng Thời Gian (Lịch Sử)</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("everywhere")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === "everywhere" ? "bg-sky-600 text-white shadow-xs" : "text-stone-600 hover:text-stone-900"
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>6 Lĩnh Vực Thực Tế</span>
          </button>
        </div>
      </div>

      {/* VIEW 1: TIMELINE */}
      {activeTab === "timeline" && (
        <div className="space-y-6">
          {/* Era Selector Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {eras.map((era) => (
              <button
                key={era.id}
                type="button"
                onClick={() => setSelectedEra(era.id)}
                className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                  selectedEra === era.id
                    ? `${era.pillActive} border-transparent`
                    : "bg-stone-50 border-stone-200 hover:bg-stone-100/80 text-stone-700"
                }`}
              >
                <div className="text-[11px] font-bold opacity-80">{era.period}</div>
                <div className="text-xs sm:text-sm font-extrabold line-clamp-1 mt-0.5">{era.title}</div>
              </button>
            ))}
          </div>

          {/* Detailed Milestones for Selected Era */}
          <div className="p-5 sm:p-6 rounded-2xl border border-stone-200 bg-stone-50/50">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-stone-200">
              <Clock className="w-4 h-4 text-sky-600" />
              <h4 className="text-sm sm:text-base font-black text-stone-850">
                Các sự kiện then chốt: {currentEra.title}
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {currentEra.milestones.map((m, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white border border-stone-200 shadow-xs hover:border-sky-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-black text-sky-700 font-mono px-2 py-0.5 rounded-md bg-sky-50 border border-sky-200">
                        {m.year}
                      </span>
                      <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wide">
                        {m.badge}
                      </span>
                    </div>
                    <h5 className="text-xs sm:text-sm font-bold text-stone-900 mb-1.5 leading-snug">
                      {m.title}
                    </h5>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Exam Takeaway Alert */}
            <div className="mt-5 p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-black uppercase tracking-wider text-[11px] block text-amber-800">
                  Từ Khóa Trọng Tâm Thi Cử:
                </span>
                <p className="mt-0.5 leading-relaxed font-medium">{currentEra.examNote}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: EVERYWHERE (6 DOMAINS) */}
      {activeTab === "everywhere" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Left domain list */}
          <div className="lg:col-span-5 space-y-2">
            <span className="text-xs font-black uppercase tracking-wider text-stone-500 block mb-1">
              Chọn Lĩnh Vực Để Khám Phá:
            </span>
            {domains.map((dom) => {
              const Icon = dom.icon;
              const isSelected = selectedDomain === dom.id;
              return (
                <button
                  key={dom.id}
                  type="button"
                  onClick={() => setSelectedDomain(dom.id)}
                  className={`w-full p-3 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between gap-3 ${
                    isSelected
                      ? "bg-sky-600 text-white border-sky-600 shadow-xs"
                      : "bg-white border-stone-200 hover:bg-stone-50 text-stone-700"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                      isSelected ? "bg-white/20 text-white" : "bg-stone-100 text-stone-600"
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold leading-tight">{dom.name}</div>
                      <div className={`text-[11px] line-clamp-1 mt-0.5 ${
                        isSelected ? "text-sky-100" : "text-stone-400"
                      }`}>{dom.example}</div>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${
                    isSelected ? "text-white translate-x-1" : "text-stone-300"
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right detail showcase */}
          <div className="lg:col-span-7 p-6 rounded-2xl border border-stone-200 bg-stone-50/70 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-sky-600 text-white flex items-center justify-center shadow-xs">
                  <DomainIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-sky-600">
                    Ứng dụng thực tế #1.1
                  </span>
                  <h4 className="text-base sm:text-lg font-black text-stone-900">
                    {currentDomain.name}
                  </h4>
                </div>
              </div>

              <div className="space-y-3.5">
                <div className="p-4 rounded-xl bg-white border border-stone-200">
                  <div className="text-[11px] font-black text-stone-500 uppercase tracking-wide mb-1">
                    Kịch bản triển khai:
                  </div>
                  <div className="text-sm font-bold text-stone-850">
                    {currentDomain.example}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-stone-200">
                  <div className="text-[11px] font-black text-stone-500 uppercase tracking-wide mb-1">
                    Cơ chế hoạt động đám mây:
                  </div>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    {currentDomain.mechanism}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-950 flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-emerald-900 block mb-0.5">Giá trị cốt lõi mang lại:</span>
                <p className="leading-relaxed">{currentDomain.takeaway}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
