"use client";
import React, { useState } from "react";

export default function Chapter3MasterKeyTermsMatrix() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const pillars = [
    {
      id: 1,
      category: "core",
      title: "1. Bản Chất SaaS",
      formula: "SaaS = Thuê phần mềm qua mạng",
      keySummary: "Mô hình phân phối phần mềm bên thứ ba lưu trữ và cung cấp qua Internet. Người dùng hoàn toàn không cần cài đặt cục bộ, trả phí theo định kỳ OPEX.",
      examGotcha: "Không được nhầm SaaS với phần mềm đóng gói On-Premise cài từ đĩa CD/USB."
    },
    {
      id: 2,
      category: "core",
      title: "2. 4 Đặc Tính Cốt Lõi",
      formula: "Internet + No Local + Provider Manages + Pay-as-you-go",
      keySummary: "1. Truy cập qua Internet; 2. Zero local install (chỉ cần Web Browser); 3. Nhà cung cấp tự vá lỗi & nâng cấp; 4. Chi trả theo nhu cầu sử dụng.",
      examGotcha: "Đề thi thường hỏi 'Ai chịu trách nhiệm cập nhật và vá lỗi trong SaaS?' ➔ Đáp án: Service Provider."
    },
    {
      id: 3,
      category: "tradeoff",
      title: "3. Cán Cân Đánh Đổi (Trade-offs)",
      formula: "4 Lợi Ích ⚖️ 3 Thách Thức",
      keySummary: "Lợi ích: Tiết kiệm chi phí (Cost savings), Khả năng mở rộng (Extension), Tự động update, Tiện lợi. Thách thức: Phụ thuộc mạng Internet (Mất mạng = Tê liệt), Bảo mật, Khó tùy biến sâu.",
      examGotcha: "Gót chân Achilles lớn nhất của SaaS là gì? ➔ Phụ thuộc hoàn toàn vào kết nối Internet."
    },
    {
      id: 4,
      category: "architecture",
      title: "4. Single-tenant vs Multi-tenant",
      formula: "Biệt Thự Riêng (1-1) vs Chung Cư Cao Tầng (1-N)",
      keySummary: "Single-tenant: DB & App riêng biệt, bảo mật tuyệt đối nhưng chi phí rất cao. Multi-tenant: Dùng chung DB & App, chi phí cực rẻ, phân tách logic qua Tenant_ID.",
      examGotcha: "Cơ chế phân tách dữ liệu trong CSDL Multi-tenant là gì? ➔ Dùng khóa Tenant_ID."
    },
    {
      id: 5,
      category: "architecture",
      title: "5. Giải Pháp OpenSaaS",
      formula: "SaaS + Mã Nguồn Mở (3 Tầng Công Nghệ)",
      keySummary: "SaaS chạy trên 3 tầng mở: Ngôn ngữ mở (PHP, Python) + OS mở (Linux) + CSDL mở (MySQL). 3 Điển hình: WordPress.com, Magento, Moodle. Nhược điểm: Hỗ trợ kỹ thuật hạn chế.",
      examGotcha: "Hai hạn chế của OpenSaaS là: Limited technical support & Security and privacy risks."
    },
    {
      id: 6,
      category: "integration",
      title: "6. Công Nghệ Mashup",
      formula: "Trộn nhiều API ➔ 1 Ứng Dụng Mới (GoRide)",
      keySummary: "Tích hợp nhiều dịch vụ/dữ liệu từ nhiều nguồn khác nhau. 2 Phương pháp: Web-based (trên trình duyệt, nhẹ server) vs Server-based (trên server, bảo mật & nhanh). Công cụ: EMML & OpenMashup.",
      examGotcha: "Phân biệt: Web-based (chạy JS trên client) vs Server-based (xử lý kết hợp trên server)."
    },
    {
      id: 7,
      category: "integration",
      title: "7. Kiến Trúc Hướng Dịch Vụ (SOA)",
      formula: "Lắp ghép Reusable Services + Tam Giác SOA",
      keySummary: "Thiết kế chức năng thành các service tái sử dụng, tương tác qua mạng. 3 Đặc điểm: Modularity, Network communication, Integration. 3 Thành phần: Provider (Publish) - Broker (Find) - Consumer (Bind).",
      examGotcha: "Ví dụ điển hình về SOA trong giáo trình là: Amazon Web Services (AWS) và Microsoft Azure."
    },
    {
      id: 8,
      category: "future",
      title: "8. Thực Tế, Bảo Mật & Tương Lai",
      formula: "Google + Salesforce | 4 Lớp Shield | AI/IoT/Blockchain",
      keySummary: "Thực tế: Google Workspace (Cộng tác) & Salesforce (Tiên phong CRM). 4 Lớp bảo mật: Encrypt, MFA, Access Control (RBAC), Backup. Tương lai: AI, IoT, Blockchain (Smart Contract) và Big Data.",
      examGotcha: "Salesforce là dịch vụ SaaS thuộc ngành nào? ➔ Tiên phong trong ngành CRM (Customer Relationship Management)."
    }
  ];

  const filteredPillars = pillars.filter((p) => {
    const matchesCategory = selectedCategory === "all" || p.category === selectedCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.keySummary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.formula.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="my-8 rounded-2xl border border-amber-500/20 bg-gradient-to-br from-[#1b1916] via-[#211d18] to-[#181613] p-5 md:p-7 text-neutral-200 shadow-2xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-800 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-400">
            <span>🏆 Mục VIII • Chapter 3 Master Key Takeaways</span>
          </div>
          <h3 className="mt-2 text-xl font-bold tracking-tight text-white md:text-2xl">
            Bảng Ma Trận Tổng Kết Toàn Chương: 8 Trụ Cột Tri Thức SaaS
          </h3>
          <p className="mt-1 text-sm text-neutral-400">
            Hệ thống hóa toàn bộ kiến thức trọng tâm từ Mục I đến Mục VII, kèm công thức học thuộc và cảnh báo bẫy thi trắc nghiệm
          </p>
        </div>

        {/* Search Input */}
        <div className="w-full sm:w-64">
          <input
            type="text"
            placeholder="🔍 Tra cứu thuật ngữ / bẫy thi..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-xl border border-neutral-700 bg-neutral-900/80 px-3.5 py-2 text-xs text-white placeholder-neutral-500 focus:border-amber-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Category Filter Chips */}
      <div className="mt-4 flex flex-wrap gap-2 text-xs">
        <button
          onClick={() => setSelectedCategory("all")}
          className={`rounded-lg px-3 py-1.5 font-bold transition-all ${
            selectedCategory === "all" ? "bg-amber-600 text-white" : "bg-neutral-900 text-neutral-400 hover:text-white"
          }`}
        >
          Tất cả (8 Trụ Cột)
        </button>
        <button
          onClick={() => setSelectedCategory("core")}
          className={`rounded-lg px-3 py-1.5 font-bold transition-all ${
            selectedCategory === "core" ? "bg-amber-600 text-white" : "bg-neutral-900 text-neutral-400 hover:text-white"
          }`}
        >
          Cốt lõi &amp; Đặc tính
        </button>
        <button
          onClick={() => setSelectedCategory("tradeoff")}
          className={`rounded-lg px-3 py-1.5 font-bold transition-all ${
            selectedCategory === "tradeoff" ? "bg-amber-600 text-white" : "bg-neutral-900 text-neutral-400 hover:text-white"
          }`}
        >
          Đánh đổi (Trade-offs)
        </button>
        <button
          onClick={() => setSelectedCategory("architecture")}
          className={`rounded-lg px-3 py-1.5 font-bold transition-all ${
            selectedCategory === "architecture" ? "bg-amber-600 text-white" : "bg-neutral-900 text-neutral-400 hover:text-white"
          }`}
        >
          Kiến trúc &amp; OpenSaaS
        </button>
        <button
          onClick={() => setSelectedCategory("integration")}
          className={`rounded-lg px-3 py-1.5 font-bold transition-all ${
            selectedCategory === "integration" ? "bg-amber-600 text-white" : "bg-neutral-900 text-neutral-400 hover:text-white"
          }`}
        >
          Mashup &amp; SOA
        </button>
        <button
          onClick={() => setSelectedCategory("future")}
          className={`rounded-lg px-3 py-1.5 font-bold transition-all ${
            selectedCategory === "future" ? "bg-amber-600 text-white" : "bg-neutral-900 text-neutral-400 hover:text-white"
          }`}
        >
          Thực Tế &amp; Tương Lai
        </button>
      </div>

      {/* Grid of Pillars */}
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredPillars.map((p) => (
          <div
            key={p.id}
            className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-4 transition-all hover:border-amber-500/40 hover:bg-neutral-900/80 shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between border-b border-neutral-800 pb-2.5">
                <h4 className="text-sm font-bold text-white">{p.title}</h4>
                <span className="rounded-full bg-amber-500/20 px-2.5 py-0.5 text-[10px] font-mono font-bold text-amber-300">
                  {p.formula}
                </span>
              </div>
              <p className="mt-2.5 text-xs text-neutral-300 leading-relaxed">{p.keySummary}</p>
            </div>

            <div className="mt-3 rounded-xl border border-amber-500/20 bg-amber-950/20 p-2.5 text-[11px] text-amber-200">
              <strong className="text-amber-400">⚡ Mẹo thi cử:</strong> {p.examGotcha}
            </div>
          </div>
        ))}
      </div>

      {/* Quick Status Bar */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-neutral-800 bg-black/40 p-3.5 text-xs text-neutral-400">
        <div>
          Hiển thị <span className="font-bold text-amber-400">{filteredPillars.length} / 8</span> trụ cột kiến thức
        </div>
        <div className="text-emerald-400 font-semibold">
          ✅ Đã bao quát 100% nội dung toàn bộ Chương 3 Software as a Service!
        </div>
      </div>
    </div>
  );
}
