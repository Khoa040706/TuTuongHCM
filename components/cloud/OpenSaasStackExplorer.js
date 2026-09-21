"use client";
import React, { useState } from "react";
import {
  Code2,
  Terminal,
  Database,
  Globe,
  ShoppingCart,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  ExternalLink,
  Layers,
  Cpu,
  ShieldAlert,
  Server
} from "lucide-react";

export default function OpenSaasStackExplorer() {
  const [activeCase, setActiveCase] = useState("wordpress"); // 'wordpress' | 'magento' | 'moodle'
  const [selectedStackLayer, setSelectedStackLayer] = useState(null);

  const OPEN_STACK = [
    {
      layer: 3,
      name: "Tầng Ngôn Ngữ Lập Trình Mã Nguồn Mở",
      nameEn: "Open-Source Programming Languages",
      icon: Code2,
      examples: ["PHP (WordPress, Magento, Moodle)", "Python (Django, Flask SaaS)", "JavaScript / Node.js"],
      desc: "Ngôn ngữ tự do phát triển, cộng đồng toàn cầu đóng góp thư viện phong phú không bị tính phí bản quyền.",
      color: "bg-amber-500/20 text-amber-300 border-amber-500/40"
    },
    {
      layer: 2,
      name: "Tầng Hệ Điều Hành Mã Nguồn Mở",
      nameEn: "Open-Source Operating Systems",
      icon: Terminal,
      examples: ["Linux Ubuntu Server", "Debian GNU/Linux", "RedHat Enterprise Linux / Rocky"],
      desc: "Hệ điều hành máy chủ ổn định cao, tối ưu chi phí hạ tầng (Zero OS Licensing Cost), khả năng bảo mật cao.",
      color: "bg-indigo-500/20 text-indigo-300 border-indigo-500/40"
    },
    {
      layer: 1,
      name: "Tầng Hệ Quản Trị CSDL Mã Nguồn Mở",
      nameEn: "Open-Source DBMS",
      icon: Database,
      examples: ["MySQL (Chuẩn cho web LAMP stack)", "PostgreSQL (CSDL quan hệ mạnh mẽ)", "MariaDB"],
      desc: "Lưu trữ dữ liệu khách thuê linh hoạt, hỗ trợ mở rộng cụm CSDL mà không phải trả phí cho Oracle hay SQL Server.",
      color: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
    }
  ];

  const CASE_STUDIES = {
    wordpress: {
      name: "WordPress.com",
      category: "Blog & Content Management System (CMS)",
      icon: Globe,
      color: "border-sky-500 bg-sky-950/30 text-sky-400",
      headline: "Nền Tảng Quản Trị Nội Dung Lớn Nhất Thế Giới",
      desc: "WordPress.com đóng gói mã nguồn mở WordPress thành dịch vụ SaaS hoàn chỉnh. Cho phép cá nhân và doanh nghiệp tạo và quản trị website/blog dễ dàng chỉ qua giao diện kéo thả trực quan mà không cần biết lập trình chuyên sâu.",
      advantages: ["Kho theme & plugin khổng lồ", "Tối ưu hóa SEO tuyệt vời", "Cài đặt 1-click dùng ngay"],
      disadvantage: "Phụ thuộc vào cộng đồng phát triển plugin, nguy cơ xung đột mã nguồn mở."
    },
    magento: {
      name: "Magento (Adobe Commerce)",
      category: "E-Commerce Platform",
      icon: ShoppingCart,
      color: "border-orange-500 bg-orange-950/30 text-orange-400",
      headline: "Nền Tảng Thương Mại Điện Tử Quy Mô Lớn",
      desc: "Nền tảng e-commerce mã nguồn mở cực kỳ mạnh mẽ, giúp doanh nghiệp thiết lập và vận hành toàn bộ cửa hàng online, giỏ hàng, cổng thanh toán quốc tế và quản lý tồn kho đa kho bãi.",
      advantages: ["Xử lý hàng triệu sản phẩm và giao dịch", "Kiến trúc module hóa linh hoạt", "Tích hợp đa cổng thanh toán"],
      disadvantage: "Yêu cầu cấu hình máy chủ mạnh và đội ngũ kỹ thuật lành nghề để tối ưu."
    },
    moodle: {
      name: "Moodle LMS",
      category: "Learning Management System (LMS)",
      icon: GraduationCap,
      color: "border-amber-500 bg-amber-950/30 text-amber-400",
      headline: "Hệ Thống Quản Lý Học Tập Trực Tuyến Hàng Đầu",
      desc: "Hệ thống quản lý học tập (LMS) mã nguồn mở phục vụ hàng trăm ngàn trường đại học và viện đào tạo trên toàn cầu. Hỗ trợ giao bài tập, thi trắc nghiệm trực tuyến, chấm điểm tự động và theo dõi lộ trình học viên.",
      advantages: ["Chuẩn sư phạm quốc tế (SCORM, LTI)", "Hỗ trợ đa ngôn ngữ", "Miễn phí mã nguồn cốt lõi"],
      disadvantage: "Giao diện mặc định khá phức tạp, cần tùy biến giao diện để thân thiện hơn."
    }
  };

  const activeCaseData = CASE_STUDIES[activeCase];
  const CaseIcon = activeCaseData.icon;

  return (
    <div className="my-8 rounded-3xl border border-stone-200 bg-linear-to-b from-stone-50/70 via-white to-stone-50/50 p-5 sm:p-7 shadow-xl font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-stone-200">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-teal-600 text-white mb-2 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            Hệ Sinh Thái Mã Nguồn Mở Trên Đám Mây
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
            Mục IV: Giải Pháp OpenSaaS (OpenSaaS Solution)
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-2xl">
            <strong>OpenSaaS = SaaS + Mã Nguồn Mở</strong> — Xây dựng trên 3 tầng công nghệ mở (Ngôn ngữ mở, HĐH Linux mở, CSDL mở). Mang lại sự linh hoạt tối đa nhưng đi kèm thách thức <em>hỗ trợ kỹ thuật hạn chế</em>!
          </p>
        </div>
      </div>

      {/* 3-Tier Open-Source Tech Stack Visualizer */}
      <div className="my-6 p-5 rounded-3xl bg-stone-900 text-white border border-stone-800 shadow-xl space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-stone-800">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-amber-400" />
            <h4 className="text-sm font-black uppercase tracking-wider text-white">
              Cấu Trúc 3 Tầng Công Nghệ Mã Nguồn Mở (OpenSaaS Stack)
            </h4>
          </div>
          <span className="text-[11px] text-stone-400 font-mono">Bấm từng tầng để xem chi tiết</span>
        </div>

        <div className="space-y-2.5">
          {OPEN_STACK.map((item) => {
            const LayerIcon = item.icon;
            const isSelected = selectedStackLayer === item.layer;
            return (
              <div
                key={item.layer}
                onClick={() => setSelectedStackLayer(isSelected ? null : item.layer)}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                  isSelected
                    ? "bg-stone-800 border-amber-400 shadow-md ring-1 ring-amber-300/40"
                    : "bg-stone-950/70 border-stone-800 hover:border-stone-700"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-stone-800 text-amber-400 shrink-0">
                      <LayerIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-black text-amber-400">TẦNG {item.layer}:</span>
                        <h5 className="text-xs sm:text-sm font-black text-white">{item.name}</h5>
                      </div>
                      <span className="text-[10px] text-stone-400 font-mono">({item.nameEn})</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 self-end sm:self-center">
                    {item.examples.map((ex, i) => (
                      <span key={i} className="px-2 py-0.5 rounded-md bg-stone-900 border border-stone-700 text-[10px] font-mono text-stone-300">
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>

                {isSelected && (
                  <p className="text-xs text-amber-300 mt-2.5 pt-2.5 border-t border-stone-800 leading-relaxed animate-in fade-in duration-200">
                    💡 <strong>Ý nghĩa kỹ thuật:</strong> {item.desc}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 3 Real-World Case Studies Showroom */}
      <div className="my-6">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-black text-stone-900 uppercase tracking-wider flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-600" />
            3 Ứng Dụng OpenSaaS Tiêu Biểu Trong Thực Tiễn
          </h4>
          <span className="text-xs text-stone-500 font-medium">Bấm chọn nền tảng:</span>
        </div>

        {/* Case Selector Tabs */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {[
            { id: "wordpress", label: "WordPress.com", sub: "Blog & CMS" },
            { id: "magento", label: "Magento", sub: "E-Commerce" },
            { id: "moodle", label: "Moodle LMS", sub: "Giáo Dục Online" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCase(tab.id)}
              className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                activeCase === tab.id
                  ? "bg-stone-900 text-white border-stone-900 shadow-md ring-2 ring-amber-400/40"
                  : "bg-white border-stone-200 text-stone-700 hover:bg-stone-50"
              }`}
            >
              <span className="font-extrabold text-xs block">{tab.label}</span>
              <span className={`text-[10px] ${activeCase === tab.id ? "text-amber-400" : "text-stone-400"}`}>
                {tab.sub}
              </span>
            </button>
          ))}
        </div>

        {/* Active Case Detail Showcase Card */}
        <div className="p-5 sm:p-6 rounded-3xl bg-white border border-stone-200 shadow-md space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-100">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200 text-amber-700 shrink-0">
                <CaseIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-amber-700">
                  {activeCaseData.category}
                </span>
                <h4 className="text-base sm:text-lg font-black text-stone-900 mt-0.5">
                  {activeCaseData.name} — {activeCaseData.headline}
                </h4>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-black bg-emerald-100 text-emerald-800 self-start sm:self-auto">
              Chuẩn OpenSaaS
            </span>
          </div>

          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
            {activeCaseData.desc}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-1">
              <span className="text-[11px] font-black text-emerald-900 uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Điểm mạnh nổi trội:
              </span>
              <ul className="list-disc list-inside text-xs text-stone-700 space-y-0.5">
                {activeCaseData.advantages.map((adv, i) => (
                  <li key={i}>{adv}</li>
                ))}
              </ul>
            </div>

            <div className="p-3 rounded-2xl bg-rose-50/70 border border-rose-200 space-y-1">
              <span className="text-[11px] font-black text-rose-900 uppercase tracking-wider flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-600" /> Nhược điểm cần lưu ý:
              </span>
              <p className="text-xs text-rose-950 leading-relaxed">{activeCaseData.disadvantage}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Exam Memo Footer */}
      <div className="p-4 rounded-2xl bg-teal-50 border border-teal-200 text-teal-950 text-xs leading-relaxed font-medium">
        <strong>💡 Trọng tâm thi cử Mục IV:</strong> OpenSaaS là mô hình SaaS phát triển dựa trên{" "}
        <strong>3 thành phần mã nguồn mở</strong>: Ngôn ngữ lập trình mở (PHP, Python, JS), Hệ điều hành mở (Linux) và Hệ quản trị CSDL mở (MySQL, PostgreSQL).{" "}
        <strong>Nhược điểm chí tử</strong>: Hỗ trợ kỹ thuật hạn chế (Limited technical support), tự chịu trách nhiệm bảo mật. 3 ví dụ kinh điển: <em>WordPress.com (CMS), Magento (E-commerce), Moodle (LMS)</em>.
      </div>
    </div>
  );
}
