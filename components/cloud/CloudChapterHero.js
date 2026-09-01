"use client";
import React, { useState } from "react";
import { Cloud, Layers, Cpu, Shield, Database, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

const CHAPTER_METADATA = {
  "cloud-ch1": {
    title: "Chương 1: Giới thiệu Điện toán đám mây",
    subtitle: "Khám phá 5 đặc tính NIST, 4 mô hình triển khai và tam giác dịch vụ SPI",
    color: "from-sky-500/20 to-blue-600/20",
    accent: "text-sky-600",
    badge: "Kiến thức Nền tảng",
    pipeline: [
      { step: "01", label: "Timesharing", desc: "Thập niên 1960: Phân chia thời gian trên Mainframe" },
      { step: "02", label: "Virtual Machine", desc: "1972: IBM CP-40 đặt nền móng ảo hóa" },
      { step: "03", label: "5 NIST Features", desc: "On-demand, Broad access, Pooling, Elasticity, Measured" },
      { step: "04", label: "SPI Triangle", desc: "IaaS ➔ PaaS ➔ SaaS: Phân định trách nhiệm" }
    ],
    radarPoints: [
      { subject: "Mô hình dịch vụ SPI", level: "100%" },
      { subject: "5 Đặc tính NIST", level: "95%" },
      { subject: "Mô hình triển khai", level: "90%" },
      { subject: "Thách thức bảo mật", level: "85%" }
    ]
  },
  "cloud-ch2": {
    title: "Chương 2: Hạ tầng & Công nghệ Đám mây",
    subtitle: "Data Center, Lối đi Nóng/Lạnh, Mạng Leaf-Spine & Công nghệ Ảo hóa",
    color: "from-indigo-500/20 to-sky-600/20",
    accent: "text-indigo-600",
    badge: "Hạ tầng & Phần cứng",
    pipeline: [
      { step: "01", label: "Data Center Physical", desc: "Server ➔ Rack ➔ PoD ➔ Data Center" },
      { step: "02", label: "Thermal Aisle", desc: "Lối đi Nóng/Lạnh & Sàn nâng áp suất" },
      { step: "03", label: "Leaf-Spine Network", desc: "Mạng phẳng 2 tầng chịu lỗi không điểm nghẽn" },
      { step: "04", label: "Live VM Migration", desc: "Pre-copy ➔ Stop-and-copy ➔ Post-copy" }
    ],
    radarPoints: [
      { subject: "Tản nhiệt & Điện năng", level: "90%" },
      { subject: "Tô-pô Leaf-Spine", level: "95%" },
      { subject: "Full Virtualization", level: "100%" },
      { subject: "Di chuyển máy ảo", level: "90%" }
    ]
  },
  "cloud-ch3": {
    title: "Chương 3: Software as a Service (SaaS)",
    subtitle: "Mô hình Phần mềm Dịch vụ, Single vs Multi-Tenant, OpenSaaS & SOA",
    color: "from-amber-500/20 to-orange-600/20",
    accent: "text-amber-600",
    badge: "Tầng Ứng dụng",
    pipeline: [
      { step: "01", label: "SaaS Definition", desc: "Thuê phần mềm qua mạng, loại bỏ cài đặt cục bộ" },
      { step: "02", label: "Multi-tenancy", desc: "Chung cư dùng chung CSDL vs Biệt thự biệt lập" },
      { step: "03", label: "Service Mashups", desc: "Web-based (Client) vs Server-based (Server)" },
      { step: "04", label: "SOA Architecture", desc: "Lắp ghép dịch vụ tái sử dụng độc lập" }
    ],
    radarPoints: [
      { subject: "Kiến trúc Đa khách thuê", level: "100%" },
      { subject: "Kỹ thuật Mashup", level: "85%" },
      { subject: "Tam giác SOA", level: "90%" },
      { subject: "An ninh SaaS & MFA", level: "95%" }
    ]
  },
  "cloud-ch4": {
    title: "Chương 4: Platform as a Service (PaaS)",
    subtitle: "Môi trường Runtime, Đường ống CI/CD, Vendor Lock-in & Serverless FaaS",
    color: "from-emerald-500/20 to-teal-600/20",
    accent: "text-emerald-600",
    badge: "Môi trường Phát triển",
    pipeline: [
      { step: "01", label: "Runtime Platform", desc: "Tập trung viết code, tự động hóa hạ tầng" },
      { step: "02", label: "CI/CD & DevOps", desc: "Triển khai một chạm, Zero-downtime Blue/Green" },
      { step: "03", label: "Vendor Lock-in", desc: "Đánh đổi giữa tiện ích nhanh và phụ thuộc API" },
      { step: "04", label: "Serverless FaaS", desc: "Kích hoạt theo sự kiện, tính tiền theo mili-giây" }
    ],
    radarPoints: [
      { subject: "Quy trình CI/CD", level: "95%" },
      { subject: "GAE vs OpenShift", level: "90%" },
      { subject: "Kiến trúc Serverless", level: "95%" },
      { subject: "Quản trị Vendor Lock-in", level: "85%" }
    ]
  },
  "cloud-ch5": {
    title: "Chương 5: Infrastructure as a Service (IaaS)",
    subtitle: "Máy chủ Compute, Mạng VPC, Cân bằng tải Load Balancer & Dự phòng Đa tầng",
    color: "from-cyan-500/20 to-blue-700/20",
    accent: "text-cyan-700",
    badge: "Hạ tầng Cơ sở",
    pipeline: [
      { step: "01", label: "Compute Types", desc: "Bare-Metal vs Dedicated VM vs Shared VM" },
      { step: "02", label: "Storage Tiers", desc: "Block (EBS) vs Object (S3) vs File (NAS)" },
      { step: "03", label: "Load Balancing", desc: "Round Robin, Least Connections, IP Hash" },
      { step: "04", label: "Redundancy", desc: "Dự phòng 4 cấp: Phần cứng, Mạng, PM, Dữ liệu" }
    ],
    radarPoints: [
      { subject: "Thuật toán Cân bằng tải", level: "100%" },
      { subject: "Khối lưu trữ Block EBS", level: "90%" },
      { subject: "Mạng riêng ảo VPC", level: "95%" },
      { subject: "Dự phòng Chịu lỗi", level: "90%" }
    ]
  },
  "cloud-ch6": {
    title: "Chương 6: Identity as a Service (IDaaS)",
    subtitle: "Lá chắn An ninh Đám mây: SSO, FIDM (IdP & SP), OpenID & Phân quyền ABAC",
    color: "from-purple-500/20 to-pink-600/20",
    accent: "text-purple-600",
    badge: "An ninh & Danh tính",
    pipeline: [
      { step: "01", label: "Trụ cột AAA", desc: "Authentication, Authorization, Account Mgmt" },
      { step: "02", label: "FIDM & SSO", desc: "IdP phát hành Token ➔ SP xác minh cấp quyền" },
      { step: "03", label: "Provisioning", desc: "Vòng đời tài khoản SCIM từ tuyển dụng đến nghỉ việc" },
      { step: "04", label: "RBAC vs ABAC", desc: "Phân quyền theo vai trò chức danh vs thuộc tính" }
    ],
    radarPoints: [
      { subject: "Quy trình SSO & SAML", level: "100%" },
      { subject: "Liên hiệp Danh tính FIDM", level: "95%" },
      { subject: "Phân quyền ABAC", level: "90%" },
      { subject: "Mobile MDM/MAM", level: "85%" }
    ]
  },
  "cloud-ch7": {
    title: "Chương 7: Cloud Data Storage",
    subtitle: "Từ NAS/SAN đến Object Storage S3, SDS & Cơ sở Dữ liệu Phân tán Toàn cầu",
    color: "from-rose-500/20 to-amber-600/20",
    accent: "text-rose-600",
    badge: "Lưu trữ Dữ liệu",
    pipeline: [
      { step: "01", label: "Storage History", desc: "Centralized DAS ➔ NAS (LAN) ➔ SAN (Quang)" },
      { step: "02", label: "4 CSA Layers", desc: "Client ➔ Access ➔ Service ➔ Infrastructure" },
      { step: "03", label: "Object Storage", desc: "Data + Metadata + Unique Key (11 số 9 độ bền)" },
      { step: "04", label: "Backup Process", desc: "Select ➔ Transfer ➔ Store & Lifecycle Tiering" }
    ],
    radarPoints: [
      { subject: "So sánh NAS vs SAN", level: "95%" },
      { subject: "Kiến trúc Object S3", level: "100%" },
      { subject: "Quy trình Sao lưu 3 bước", level: "90%" },
      { subject: "CSDL Cloud RDBMS/NoSQL", level: "95%" }
    ]
  }
};

export default function CloudChapterHero({ chapterId = "cloud-ch1" }) {
  const [activeTab, setActiveTab] = useState("pipeline");
  const meta = CHAPTER_METADATA[chapterId] || CHAPTER_METADATA["cloud-ch1"];

  return (
    <div className="relative my-8 rounded-3xl overflow-hidden border border-stone-200/80 bg-linear-to-br from-white via-stone-50 to-stone-100/50 shadow-xl font-sans">
      {/* Decorative backdrop glow */}
      <div className={`absolute top-0 right-0 w-96 h-96 bg-linear-to-bl ${meta.color} blur-3xl rounded-full pointer-events-none -mr-20 -mt-20`} />

      {/* Top Banner Header */}
      <div className="relative p-6 sm:p-8 border-b border-stone-200/60">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-stone-900 text-amber-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Mục ★ Overview Toàn Bộ Chương</span>
          </div>
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-accent/10 text-accent">
            {meta.badge}
          </span>
        </div>

        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-stone-850 tracking-tight">
          {meta.title}
        </h2>
        <p className="mt-2 text-stone-600 text-xs sm:text-sm max-w-3xl leading-relaxed font-medium">
          {meta.subtitle}
        </p>

        {/* Tab switch buttons */}
        <div className="flex gap-2 mt-6">
          <button
            type="button"
            onClick={() => setActiveTab("pipeline")}
            className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === "pipeline"
                ? "bg-stone-900 text-white shadow-sm"
                : "bg-stone-200/70 text-stone-600 hover:bg-stone-300/70"
            }`}
          >
            Sơ đồ Pipeline Tiến trình
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("radar")}
            className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === "radar"
                ? "bg-stone-900 text-white shadow-sm"
                : "bg-stone-200/70 text-stone-600 hover:bg-stone-300/70"
            }`}
          >
            Radar Kiến thức Trọng tâm
          </button>
        </div>
      </div>

      {/* Dynamic Tab Body */}
      <div className="relative p-6 sm:p-8">
        {activeTab === "pipeline" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {meta.pipeline.map((item, idx) => (
              <div
                key={idx}
                className="relative p-5 rounded-2xl bg-white/90 border border-stone-200/70 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="w-8 h-8 rounded-xl bg-stone-100 text-stone-800 font-extrabold text-xs flex items-center justify-center font-mono">
                    {item.step}
                  </span>
                  <ArrowRight className="w-4 h-4 text-stone-300 group-hover:text-accent transition-colors" />
                </div>
                <h4 className="font-bold text-stone-850 text-sm mb-1">{item.label}</h4>
                <p className="text-xs text-stone-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white/80 p-6 rounded-2xl border border-stone-200/70">
            <h4 className="font-bold text-xs uppercase tracking-wider text-stone-500 mb-4">
              Mức độ trọng tâm trong đề thi và thực tiễn kỹ thuật
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {meta.radarPoints.map((pt, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-bold text-stone-700">
                    <span>{pt.subject}</span>
                    <span className="text-accent">{pt.level}</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-stone-100 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-linear-to-r from-sky-500 to-indigo-600 transition-all duration-700"
                      style={{ width: pt.level }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
