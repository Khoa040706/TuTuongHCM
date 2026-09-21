"use client";
import React, { useState } from "react";
import { Layers, Server, Box, Monitor, Check, User, ShieldCheck, Sparkles, ExternalLink, Shield, Database, Wifi, Wrench, Smartphone, RefreshCw } from "lucide-react";

export default function SharedResponsibilityStackVisualizer() {
  const [selectedModel, setSelectedModel] = useState("iaas"); // 'onprem' | 'iaas' | 'paas' | 'saas'
  const [activeTab, setActiveTab] = useState("stack"); // 'stack' | 'xaas'

  // 9 Architectural Layers
  const layers = [
    { key: "apps", name: "Applications (Ứng dụng)", desc: "Phần mềm chạy trực tiếp phục vụ người dùng cuối" },
    { key: "data", name: "Data (Dữ liệu)", desc: "Cơ sở dữ liệu, tài liệu, thông tin nghiệp vụ" },
    { key: "runtime", name: "Runtime (Môi trường thực thi)", desc: "Java JVM, Node.js, Python, .NET runtime" },
    { key: "middleware", name: "Middleware (Phần mềm trung gian)", desc: "Web server, message queue, API gateway" },
    { key: "os", name: "Operating System (Hệ điều hành)", desc: "Windows Server, Ubuntu, Red Hat Enterprise Linux" },
    { key: "virtualization", name: "Virtualization (Ảo hóa)", desc: "Hypervisor (VMware ESXi, KVM, Hyper-V)" },
    { key: "servers", name: "Physical Servers (Máy chủ vật lý)", desc: "CPU, RAM, Mainboard máy chủ phiến (blade servers)" },
    { key: "storage", name: "Storage (Lưu trữ vật lý)", desc: "Hệ thống ổ đĩa SAN, NAS, ổ cứng HDD/SSD" },
    { key: "networking", name: "Networking (Mạng vật lý)", desc: "Switch, Router, Cáp quang, Trung tâm dữ liệu (Datacenter)" }
  ];

  // Responsibility mapping: 'user' | 'provider'
  const responsibilityMap = {
    onprem: {
      apps: "user", data: "user", runtime: "user", middleware: "user",
      os: "user", virtualization: "user", servers: "user", storage: "user", networking: "user"
    },
    iaas: {
      apps: "user", data: "user", runtime: "user", middleware: "user", os: "user",
      virtualization: "provider", servers: "provider", storage: "provider", networking: "provider"
    },
    paas: {
      apps: "user", data: "user",
      runtime: "provider", middleware: "provider", os: "provider",
      virtualization: "provider", servers: "provider", storage: "provider", networking: "provider"
    },
    saas: {
      apps: "provider", data: "provider", runtime: "provider", middleware: "provider", os: "provider",
      virtualization: "provider", servers: "provider", storage: "provider", networking: "provider"
    }
  };

  const modelMetadata = {
    onprem: {
      title: "On-Premises (Truyền Thống)",
      badge: "Tự quản lý 100%",
      slogan: "BUY IT & MAINTAIN IT",
      color: "border-stone-400 bg-stone-100 text-stone-800",
      desc: "Doanh nghiệp tự bỏ vốn mua máy chủ, thuê chỗ đặt DC, cài hệ điều hành và gánh chịu mọi rủi ro hỏng hóc phần cứng.",
      example: "Phòng Server nội bộ của cơ quan, doanh nghiệp truyền thống."
    },
    iaas: {
      title: "IaaS (Infrastructure as a Service)",
      badge: "MIGRATE TO IT",
      slogan: "MIGRATE TO IT (Di chuyển hạ tầng lên Cloud)",
      color: "border-sky-500 bg-sky-50 text-sky-800",
      desc: "Nhà cung cấp lo hạ tầng vật lý và ảo hóa; Bạn tự kiểm soát từ Hệ điều hành (OS), Runtime đến Dữ liệu và Ứng dụng.",
      example: "Amazon Web Services EC2, Microsoft Azure VMs, Google Compute Engine."
    },
    paas: {
      title: "PaaS (Platform as a Service)",
      badge: "BUILD ON IT",
      slogan: "BUILD ON IT (Xây dựng trên nền tảng sẵn có)",
      color: "border-purple-500 bg-purple-50 text-purple-800",
      desc: "Nhà cung cấp quản lý toàn bộ hạ tầng lẫn hệ điều hành và runtime; Bạn chỉ tập trung viết Mã nguồn (Code) và nạp Dữ liệu.",
      example: "Google App Engine, AWS Elastic Beanstalk, Heroku, Firebase Hosting."
    },
    saas: {
      title: "SaaS (Software as a Service)",
      badge: "CONSUME IT",
      slogan: "CONSUME IT (Chỉ việc tiêu thụ phần mềm)",
      color: "border-emerald-500 bg-emerald-50 text-emerald-800",
      desc: "Nhà cung cấp quản lý trọn gói từ A đến Z; Bạn chỉ việc mở trình duyệt và sử dụng tính năng của phần mềm.",
      example: "Gmail, Google Docs, Microsoft Office 365, Salesforce CRM, Zoom."
    }
  };

  const xaasCatalog = [
    { name: "DBaaS", full: "Database-as-a-Service", icon: Database, desc: "Cung cấp CSDL được quản lý tự động (AWS RDS, Firebase Firestore, Cloud SQL)." },
    { name: "CaaS", full: "Communication-as-a-Service", icon: Wifi, desc: "Dịch vụ liên lạc thoại, VoIP, video call qua API (Twilio, Zoom Video SDK)." },
    { name: "iPaaS", full: "Integration-Platform-as-a-Service", icon: RefreshCw, desc: "Nền tảng tích hợp tự động hóa luồng dữ liệu giữa các ứng dụng đám mây (Zapier, MuleSoft)." },
    { name: "TaaS", full: "Testing-as-a-Service", icon: Wrench, desc: "Thuê môi trường đám mây để kiểm thử tự động, test tải cao (BrowserStack, SauceLabs)." },
    { name: "NaaS", full: "Network as a Service", icon: Wifi, desc: "Cung cấp mạng kết nối WAN/VPN ảo hóa không cần thiết bị mạng vật lý riêng." },
    { name: "SECaaS", full: "Security as a Service", icon: Shield, desc: "Dịch vụ phòng chống DDoS, quét mã độc, quản lý định danh đám mây (Cloudflare, Okta)." },
    { name: "DRaaS", full: "Disaster Recovery as a Service", icon: ShieldCheck, desc: "Sao lưu dự phòng thảm họa tự động, phục hồi hệ thống khi trung tâm dữ liệu gặp sự cố." },
    { name: "MBaaS", full: "Mobile Backend as a Service", icon: Smartphone, desc: "Cung cấp backend cho app di động: auth, push notification, cloud storage (Firebase, AWS Amplify)." },
    { name: "DaaS", full: "Desktop as a Service", icon: Monitor, desc: "Cung cấp máy tính để bàn ảo toàn diện truyền hình ảnh tới máy trạm (Amazon WorkSpaces)." }
  ];

  const currentMeta = modelMetadata[selectedModel];
  const currentResp = responsibilityMap[selectedModel];

  return (
    <div className="my-8 p-5 sm:p-7 rounded-3xl bg-white border border-stone-200 shadow-md font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-black uppercase tracking-widest text-sky-600">
              Interactive Blueprint • Mục III.2
            </span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-sky-100 text-sky-800">
              Service Models & XaaS
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-black text-stone-900 mt-1">
            Mô Hình Dịch Vụ & Ma Trận Trách Nhiệm Chung: IaaS ➔ PaaS ➔ SaaS
          </h3>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Quy luật phân định trách nhiệm: Càng lên cao, người dùng càng ít phải quản lý, nhà cung cấp quản lý càng nhiều.
          </p>
        </div>

        {/* View Switcher */}
        <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-stone-100 border border-stone-200/80 self-start sm:self-auto shrink-0">
          <button
            type="button"
            onClick={() => setActiveTab("stack")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === "stack" ? "bg-sky-600 text-white shadow-xs" : "text-stone-600 hover:text-stone-900"
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Tháp Trách Nhiệm</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("xaas")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === "xaas" ? "bg-sky-600 text-white shadow-xs" : "text-stone-600 hover:text-stone-900"
            }`}
          >
            <Box className="w-3.5 h-3.5" />
            <span>9 Dịch Vụ Mở Rộng XaaS</span>
          </button>
        </div>
      </div>

      {/* VIEW 1: SHARED RESPONSIBILITY STACK */}
      {activeTab === "stack" && (
        <div className="space-y-6">
          {/* Model Selector Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {[
              { id: "onprem", label: "On-Premises", sub: "Truyền Thống" },
              { id: "iaas", label: "IaaS", sub: "Migrate to it" },
              { id: "paas", label: "PaaS", sub: "Build on it" },
              { id: "saas", label: "SaaS", sub: "Consume it" }
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedModel(item.id)}
                className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                  selectedModel === item.id
                    ? "bg-sky-600 text-white border-sky-600 shadow-xs"
                    : "bg-stone-50 border-stone-200 hover:bg-stone-100 text-stone-700"
                }`}
              >
                <div className="text-xs sm:text-sm font-black">{item.label}</div>
                <div className={`text-[10px] font-bold uppercase tracking-wider mt-0.5 ${
                  selectedModel === item.id ? "text-sky-100" : "text-stone-400"
                }`}>
                  {item.sub}
                </div>
              </button>
            ))}
          </div>

          {/* Slogan Banner */}
          <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-sky-700 block">
                Khẩu Quyết Quản Lý (Slide Trọng Tâm):
              </span>
              <div className="text-sm sm:text-base font-black text-stone-900 mt-0.5">
                {currentMeta.slogan}
              </div>
              <p className="text-xs text-stone-600 mt-1">{currentMeta.desc}</p>
            </div>
            <div className="p-3 rounded-xl bg-white border border-stone-200 text-xs text-stone-700 shrink-0">
              <strong className="block text-stone-900 mb-0.5">Ví dụ tiêu biểu:</strong>
              <span>{currentMeta.example}</span>
            </div>
          </div>

          {/* 9 Layers Comparison Visualizer */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs font-black text-stone-500 uppercase px-2 mb-2">
              <span>9 Tầng Kiến Trúc Hệ Thống</span>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 text-amber-700">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                  Khách hàng quản lý (You Manage)
                </span>
                <span className="flex items-center gap-1.5 text-sky-700">
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-500 inline-block" />
                  Nhà cung cấp quản lý (Cloud Provider)
                </span>
              </div>
            </div>

            {layers.map((layer) => {
              const resp = currentResp[layer.key];
              const isUser = resp === "user";
              return (
                <div
                  key={layer.key}
                  className={`p-3 rounded-xl border transition-all flex items-center justify-between gap-3 ${
                    isUser
                      ? "bg-amber-50/80 border-amber-300 text-amber-950"
                      : "bg-sky-50/80 border-sky-300 text-sky-950"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-black ${
                      isUser ? "bg-amber-200 text-amber-900" : "bg-sky-200 text-sky-900"
                    }`}>
                      {isUser ? "YOU" : "CSP"}
                    </span>
                    <div>
                      <div className="text-xs sm:text-sm font-bold leading-tight">{layer.name}</div>
                      <div className="text-[11px] opacity-75">{layer.desc}</div>
                    </div>
                  </div>

                  <span className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-md border ${
                    isUser
                      ? "bg-amber-100/80 border-amber-300 text-amber-900"
                      : "bg-sky-100/80 border-sky-300 text-sky-900"
                  }`}>
                    {isUser ? "Bạn tự chịu trách nhiệm" : "Nhà cung cấp Cloud lo"}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Exam Takeaway Alert */}
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 flex items-start gap-2.5">
            <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-amber-900 block mb-0.5">Quy tắc vàng ghi điểm thi:</span>
              <p className="leading-relaxed font-medium">
                <strong>IaaS</strong> (Hạ tầng) &rarr; <strong>PaaS</strong> (Nền tảng) &rarr; <strong>SaaS</strong> (Phần mềm). Càng tiến về phía SaaS, khách hàng càng ít phải nhúng tay quản trị kỹ thuật, toàn bộ gánh nặng bảo trì thuộc về nhà cung cấp đám mây.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: 9 XAAS EXPANDED SERVICES */}
      {activeTab === "xaas" && (
        <div className="space-y-4">
          <span className="text-xs font-black uppercase tracking-wider text-stone-500 block">
            Hệ Sinh Thái 'Everything as a Service' (X-as-a-Service):
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {xaasCatalog.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white border border-stone-200 shadow-xs hover:border-sky-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-8 h-8 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center font-black text-xs shrink-0 border border-sky-200">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-black text-stone-900">{item.name}</h4>
                        <div className="text-[10px] text-stone-400 font-mono">{item.full}</div>
                      </div>
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
