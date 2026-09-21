"use client";
import React, { useState } from "react";
import { Layers, Server, Code, Cpu, HardDrive, Network, ShieldCheck, Sparkles, CheckCircle2, ChevronRight, Terminal, Building2 } from "lucide-react";

export default function CloudPlatformLayersVisualizer() {
  const [activeTab, setActiveTab] = useState("layers"); // 'layers' | 'tools'
  const [selectedLayer, setSelectedLayer] = useState(0);

  const platformLayers = [
    {
      id: "foundation",
      level: "LỚP 1 (DƯỚI CÙNG)",
      name: "Foundation Layer (Lớp Nền Tảng)",
      icon: Cpu,
      themeColor: "border-amber-400 bg-amber-50 text-amber-900",
      activeBorder: "border-amber-500 ring-2 ring-amber-400/40",
      coreTech: "Ảo Hóa (Virtualization) & Phần Cứng Vật Lý",
      desc: "Lớp chân đế thấp nhất của điện toán đám mây. Trách nhiệm then chốt là trừu tượng hóa toàn bộ phần cứng vật lý (CPU, RAM, Mainboard) thành các máy ảo logic thông qua phần mềm giám sát ảo hóa (Hypervisor).",
      components: [
        "Phần cứng máy chủ (Server Hardware)",
        "Công nghệ ảo hóa (Hypervisor: KVM, ESXi, Xen)",
        "Cơ chế cô lập tài nguyên (Resource Isolation)"
      ],
      examTakeaway: "Đặc biệt ghi nhớ: Foundation layer gắn liền mật thiết với VIRTUALIZATION (Ảo hóa) — nền tảng sống còn của mọi hệ thống Cloud."
    },
    {
      id: "infrastructure",
      level: "LỚP 2 (Ở GIỮA)",
      name: "Infrastructure Services (Dịch Vụ Hạ Tầng)",
      icon: HardDrive,
      themeColor: "border-sky-400 bg-sky-50 text-sky-900",
      activeBorder: "border-sky-500 ring-2 ring-sky-400/40",
      coreTech: "Compute • Storage • Network Services",
      desc: "Lớp dịch vụ cung cấp các khối tài nguyên tính toán cơ bản cho các ứng dụng hoạt động, bao gồm năng lực xử lý (Compute), kho lưu trữ khối/đối tượng (Storage) và kết nối mạng ảo (Virtual Network).",
      components: [
        "Dịch vụ máy chủ tính toán (Compute Services)",
        "Hệ thống lưu trữ dữ liệu đám mây (Storage Services)",
        "Định tuyến mạng ảo & Tường lửa (Networking Services)"
      ],
      examTakeaway: "3 thành phần cơ bản của Infrastructure services bắt buộc phải nhớ: COMPUTE, STORAGE, NETWORK."
    },
    {
      id: "application",
      level: "LỚP 3 (TRÊN CÙNG)",
      name: "Application Services (Dịch Vụ Ứng Dụng)",
      icon: Code,
      themeColor: "border-emerald-400 bg-emerald-50 text-emerald-900",
      activeBorder: "border-emerald-500 ring-2 ring-emerald-400/40",
      coreTech: "Phần Mềm Ứng Dụng Chạy Trên Hạ Tầng",
      desc: "Lớp trên cùng trực tiếp phục vụ nhu cầu nghiệp vụ của người dùng cuối hoặc nhà phát triển, bao gồm các ứng dụng web, hệ thống cơ sở dữ liệu phân tán, giải pháp phân tích dữ liệu và AI.",
      components: [
        "Phần mềm ứng dụng doanh nghiệp (ERP, CRM)",
        "Dịch vụ trung gian & API Gateway",
        "Nền tảng xử lý dữ liệu người dùng cuối"
      ],
      examTakeaway: "Application services là lớp phần mềm chạy trên hạ tầng, hoàn thiện chuỗi giá trị phục vụ trực tiếp người dùng."
    }
  ];

  const tools = {
    openSource: [
      { name: "OpenStack", desc: "Nền tảng mã nguồn mở phổ biến nhất thế giới để xây dựng Private và Public Cloud, kiểm soát cụm compute, storage và network qua Dashboard thống nhất." },
      { name: "Apache CloudStack", desc: "Dự án mã nguồn mở của Apache, độ tin cậy cao, triển khai nhanh và hỗ trợ đa hypervisor (KVM, VMware, XenServer)." },
      { name: "Eucalyptus", desc: "Phần mềm mã nguồn mở tương thích với các API của AWS EC2 và S3, cho phép tạo đám mây lai (Hybrid Cloud) liền mạch." }
    ],
    commercial: [
      { name: "Microsoft Hyper-V & System Center", desc: "Hệ sinh thái Cloud OS hoàn chỉnh của Microsoft cho doanh nghiệp lớn, tích hợp chặt chẽ với Active Directory và Windows Server." },
      { name: "VMware vCloud Director", desc: "Giải pháp thương mại tiêu chuẩn vàng ngành ảo hóa, cung cấp hạ tầng máy ảo multi-tenant an toàn cho các nhà mạng và Data Center lớn." }
    ]
  };

  const currentL = platformLayers[selectedLayer];

  return (
    <div className="my-8 p-5 sm:p-7 rounded-3xl bg-white border border-stone-200 shadow-md font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-black uppercase tracking-widest text-sky-600">
              Interactive Blueprint • Mục IV
            </span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-sky-100 text-sky-800">
              Công Cụ & Kiến Trúc Nền Tảng
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-black text-stone-900 mt-1">
            Công Cụ Quản Lý Đám Mây & 3 Lớp Kiến Trúc Nền Tảng (Platform Components)
          </h3>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Khám phá 3 tầng kiến trúc hệ thống và đối chiếu ma trận công cụ Open-Source vs Commercial.
          </p>
        </div>

        {/* View Switcher */}
        <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-stone-100 border border-stone-200/80 self-start sm:self-auto shrink-0">
          <button
            type="button"
            onClick={() => setActiveTab("layers")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === "layers" ? "bg-sky-600 text-white shadow-xs" : "text-stone-600 hover:text-stone-900"
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>3 Lớp Nền Tảng</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("tools")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === "tools" ? "bg-sky-600 text-white shadow-xs" : "text-stone-600 hover:text-stone-900"
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Công Cụ Quản Lý</span>
          </button>
        </div>
      </div>

      {/* VIEW 1: 3 PLATFORM LAYERS */}
      {activeTab === "layers" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Stack Pyramid on Left */}
          <div className="lg:col-span-6 space-y-3 flex flex-col justify-end">
            <span className="text-xs font-black uppercase tracking-wider text-stone-500 block mb-1">
              Mô Hình Xếp Tầng Phân Cấp (Từ Dưới Lên Trên):
            </span>

            {/* Layer 3: Application (Top) */}
            {[2, 1, 0].map((idx) => {
              const layer = platformLayers[idx];
              const Icon = layer.icon;
              const isSelected = selectedLayer === idx;
              return (
                <button
                  key={layer.id}
                  type="button"
                  onClick={() => setSelectedLayer(idx)}
                  className={`w-full p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                    isSelected
                      ? `${layer.activeBorder} ${layer.themeColor} shadow-md scale-101`
                      : "bg-stone-50 border-stone-200 hover:bg-stone-100/80 text-stone-700"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-white border border-stone-200 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-stone-800" />
                      </div>
                      <div>
                        <div className="text-[10px] font-black uppercase tracking-wide opacity-75">{layer.level}</div>
                        <div className="text-xs sm:text-sm font-black">{layer.name}</div>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono font-bold opacity-80 shrink-0">
                      {idx === 0 ? "Virtualization" : idx === 1 ? "Compute/Storage" : "Software"}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Detail Card */}
          <div className="lg:col-span-6 p-6 rounded-2xl border border-stone-200 bg-stone-50/70 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-black px-2.5 py-0.5 rounded-md bg-sky-100 text-sky-800 uppercase">
                  {currentL.level}
                </span>
                <span className="text-xs font-mono font-bold text-stone-500">
                  {currentL.coreTech}
                </span>
              </div>
              <h4 className="text-base sm:text-lg font-black text-stone-900 mb-3">
                {currentL.name}
              </h4>

              <div className="p-4 rounded-xl bg-white border border-stone-200 mb-4">
                <span className="text-[11px] font-black text-stone-400 uppercase block mb-1">
                  Chức năng kỹ thuật:
                </span>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-medium">
                  {currentL.desc}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200">
                <span className="text-[11px] font-black text-stone-400 uppercase block mb-2">
                  Các thành phần cốt lõi bên trong:
                </span>
                <div className="space-y-1.5">
                  {currentL.components.map((comp, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-stone-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                      <span>{comp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-amber-900 block mb-0.5">Lưu ý then chốt khi đi thi:</span>
                <p className="leading-relaxed font-medium">{currentL.examTakeaway}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: MANAGEMENT TOOLS (OPEN-SOURCE VS COMMERCIAL) */}
      {activeTab === "tools" && (
        <div className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Column 1: Open-Source */}
            <div className="p-5 rounded-2xl border border-sky-200 bg-sky-50/40 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-3 pb-3 border-b border-sky-200">
                  <div className="w-7 h-7 rounded-lg bg-sky-600 text-white flex items-center justify-center font-bold text-xs">
                    OS
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-black text-sky-950">
                      Open-Source (Mã Nguồn Mở)
                    </h4>
                    <span className="text-[11px] text-sky-700 font-medium">
                      Không phí bản quyền • Tự do tùy biến • Cộng đồng lớn
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  {tools.openSource.map((tool, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-white border border-sky-100 shadow-2xs">
                      <div className="text-xs font-black text-stone-900 mb-1 flex items-center gap-2">
                        <Terminal className="w-3.5 h-3.5 text-sky-600" />
                        <span>{tool.name}</span>
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        {tool.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-sky-200/80 text-[11px] text-sky-900 font-medium">
                <strong>Đặc điểm đề thi:</strong> Hay hỏi bộ ba <em>Apache CloudStack, Eucalyptus, OpenStack</em> thuộc nhóm nào &rarr; Trả lời ngay: <strong>Open-Source</strong>.
              </div>
            </div>

            {/* Column 2: Commercial */}
            <div className="p-5 rounded-2xl border border-purple-200 bg-purple-50/40 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-3 pb-3 border-b border-purple-200">
                  <div className="w-7 h-7 rounded-lg bg-purple-600 text-white flex items-center justify-center font-bold text-xs">
                    CO
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-black text-purple-950">
                      Commercial (Thương Mại Đóng Gói)
                    </h4>
                    <span className="text-[11px] text-purple-700 font-medium">
                      Hỗ trợ kỹ thuật 24/7 • Chuẩn doanh nghiệp • Có phí bản quyền
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  {tools.commercial.map((tool, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-white border border-purple-100 shadow-2xs">
                      <div className="text-xs font-black text-stone-900 mb-1 flex items-center gap-2">
                        <Building2 className="w-3.5 h-3.5 text-purple-600" />
                        <span>{tool.name}</span>
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        {tool.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-purple-200/80 text-[11px] text-purple-900 font-medium">
                <strong>Đặc điểm đề thi:</strong> <em>Microsoft Hyper-V & System Center (Cloud OS)</em> và <em>VMware vCloud Director</em> thuộc nhóm &rarr; <strong>Commercial (Thương mại)</strong>.
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 flex items-start gap-2.5">
            <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-amber-900 block mb-0.5">Tóm tắt cốt lõi Mục IV:</span>
              <p className="leading-relaxed font-medium">
                Kiến trúc nền tảng Cloud phân thành 3 lớp từ dưới lên: <strong>Foundation layer (Ảo hóa)</strong> &rarr; <strong>Infrastructure services (Compute/Storage/Network)</strong> &rarr; <strong>Application services (Phần mềm)</strong>. Công cụ quản lý chia làm 2 nhánh: Mã nguồn mở (OpenStack, CloudStack, Eucalyptus) và Thương mại (Hyper-V, vCloud Director).
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
