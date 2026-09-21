"use client";
import React, { useState } from "react";
import { Table, Filter, ShieldCheck, Cpu, Server, Check, ArrowRight, Layers, Sparkles } from "lucide-react";

const MATRIX_DATA = [
  {
    name: "Virtual Memory (Bộ nhớ ảo)",
    layer: "Hệ điều hành (OS Level)",
    techType: "Ảo hóa Bộ nhớ RAM",
    keyBenefit: "Cho phép chạy ứng dụng vượt quá dung lượng RAM vật lý có sẵn",
    examTrap: "Tráo đổi Memory Pages qua Swapping; tràn bộ nhớ dẫn tới Thrashing",
    rank: "os"
  },
  {
    name: "Microsoft Hyper-V",
    layer: "Server Hypervisor",
    techType: "Server Virtualization (Type 1)",
    keyBenefit: "Server Consolidation: Hợp nhất nhiều máy chủ vật lý vào 1 máy duy nhất",
    examTrap: "Tích hợp sẵn trong Windows Server; tiết kiệm 70% chi phí phần cứng và điện năng",
    rank: "server"
  },
  {
    name: "VMware ESXi",
    layer: "Bare-Metal (Phần cứng)",
    techType: "Type 1 Hypervisor Doanh nghiệp",
    keyBenefit: "Hiệu năng tối đa, không cần OS nền, quản trị tập trung qua vCenter",
    examTrap: "Cài trực tiếp lên phần cứng; sở hữu 2 tính năng đỉnh cao vMotion và DRS",
    rank: "server"
  },
  {
    name: "VMware vMotion",
    layer: "Cụm máy chủ (Cluster)",
    techType: "Live VM Migration",
    keyBenefit: "Di chuyển máy ảo sống giữa 2 máy chủ vật lý với Zero-Downtime",
    examTrap: "Yêu cầu bắt buộc 2 máy chủ vật lý phải dùng chung hệ thống lưu trữ SAN/NAS",
    rank: "cluster"
  },
  {
    name: "Parallels Desktop for Mac",
    layer: "Desktop OS (Type 2)",
    techType: "Desktop Virtualization",
    keyBenefit: "Chạy song song Windows/Linux trên macOS mà không cần khởi động lại máy",
    examTrap: "Tiện lợi cho lập trình viên và kiểm thử phần mềm; tiêu tốn nhiều RAM của máy Mac",
    rank: "desktop"
  },
  {
    name: "Microsoft VDI",
    layer: "Trung tâm dữ liệu (Data Center)",
    techType: "Virtual Desktop Infrastructure",
    keyBenefit: "Hệ điều hành desktop chạy tập trung trên server, bảo mật tuyệt đối",
    examTrap: "Client chỉ nhận luồng hình ảnh; bắt buộc phải có kết nối mạng liên tục",
    rank: "desktop"
  },
  {
    name: "Microsoft App-V",
    layer: "Tầng Ứng dụng (App Container)",
    techType: "Application Virtualization",
    keyBenefit: "Đóng gói ứng dụng chạy cách ly, triệt tiêu xung đột phần mềm DLL Hell",
    examTrap: "Chạy trên CPU/RAM máy trạm; hỗ trợ dùng offline sau khi stream ứng dụng",
    rank: "app"
  },
  {
    name: "VPN on Windows",
    layer: "Tầng Mạng (Network Tunneling)",
    techType: "Virtual Private Network",
    keyBenefit: "Kết nối mạng an toàn từ xa qua đường hầm mã hóa trên Internet công cộng",
    examTrap: "4 giao thức: PPTP (yếu), L2TP (IPsec 2 lớp), SSTP (cổng 443), IKEv2 (mobile)",
    rank: "network"
  }
];

export default function VirtualizationMasterSummaryMatrix() {
  const [filter, setFilter] = useState("all"); // 'all' | 'server' | 'desktop' | 'network'

  const filteredData = MATRIX_DATA.filter((item) => {
    if (filter === "server") return item.rank === "server" || item.rank === "cluster";
    if (filter === "desktop") return item.rank === "desktop" || item.rank === "app";
    if (filter === "network") return item.rank === "network" || item.rank === "os";
    return true;
  });

  return (
    <div className="my-8 p-5 sm:p-8 rounded-3xl bg-white border border-stone-200 shadow-md font-sans">
      {/* Header & Filter Pills */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-black uppercase tracking-widest text-emerald-600">
              Master Matrix • Mục VII
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-black text-stone-900 mt-1">
            Bảng Ma Trận Tổng Kết 8 Công Nghệ Ảo Hóa Toàn Chương 9
          </h3>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Lọc nhanh theo phân loại kiến trúc để nắm bắt trọn vẹn sự khác biệt phục vụ thi cử.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-stone-100 border border-stone-200/80 self-start sm:self-auto shrink-0">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              filter === "all" ? "bg-stone-900 text-white shadow-xs" : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Tất cả (8)
          </button>
          <button
            type="button"
            onClick={() => setFilter("server")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
              filter === "server" ? "bg-emerald-600 text-white shadow-xs" : "text-stone-600 hover:text-stone-900"
            }`}
          >
            <Server className="w-3 h-3" />
            <span>Ảo hóa Máy chủ (3)</span>
          </button>
          <button
            type="button"
            onClick={() => setFilter("desktop")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
              filter === "desktop" ? "bg-sky-600 text-white shadow-xs" : "text-stone-600 hover:text-stone-900"
            }`}
          >
            <Cpu className="w-3 h-3" />
            <span>Desktop & App (3)</span>
          </button>
          <button
            type="button"
            onClick={() => setFilter("network")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
              filter === "network" ? "bg-purple-600 text-white shadow-xs" : "text-stone-600 hover:text-stone-900"
            }`}
          >
            <ShieldCheck className="w-3 h-3" />
            <span>Bộ nhớ & Mạng VPN (2)</span>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-2xl border border-stone-200 mb-6">
        <table className="min-w-full text-left text-xs sm:text-sm border-collapse">
          <thead>
            <tr className="bg-stone-100 text-stone-700 font-extrabold text-[11px] uppercase tracking-wider border-b border-stone-200">
              <th className="p-3.5 sm:p-4">Công nghệ</th>
              <th className="p-3.5 sm:p-4">Lớp Triển khai</th>
              <th className="p-3.5 sm:p-4">Cấp độ Ảo hóa</th>
              <th className="p-3.5 sm:p-4">Lợi ích Cốt lõi Lớn nhất</th>
              <th className="p-3.5 sm:p-4">Điểm Chốt Thi Cử Kinh Điển</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-200 bg-white">
            {filteredData.map((row, idx) => (
              <tr key={idx} className="hover:bg-stone-50/80 transition-colors">
                <td className="p-3.5 sm:p-4 font-bold text-stone-900 whitespace-nowrap">
                  {row.name}
                </td>
                <td className="p-3.5 sm:p-4 text-stone-600 whitespace-nowrap font-medium">
                  {row.layer}
                </td>
                <td className="p-3.5 sm:p-4 text-emerald-800 font-bold whitespace-nowrap">
                  {row.techType}
                </td>
                <td className="p-3.5 sm:p-4 text-stone-700 leading-relaxed min-w-[200px]">
                  {row.keyBenefit}
                </td>
                <td className="p-3.5 sm:p-4 text-sky-900 text-xs font-medium leading-relaxed min-w-[240px]">
                  {row.examTrap}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 6 Core Takeaways Cards */}
      <div className="space-y-3">
        <span className="text-xs font-black uppercase tracking-wider text-stone-500 block">
          6 Điểm Chốt Kiến Thức Vàng Toàn Chương Ảo Hóa:
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-xs space-y-1">
            <span className="font-extrabold text-stone-900 block">1. Bản chất Virtualization</span>
            <p className="text-stone-600 leading-relaxed">Tách rời tài nguyên logic khỏi phần cứng vật lý; cho phép chạy nhiều HĐH độc lập trên 1 máy chủ duy nhất.</p>
          </div>
          <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-xs space-y-1">
            <span className="font-extrabold text-stone-900 block">2. Cơ chế Swapping</span>
            <p className="text-stone-600 leading-relaxed">Khi RAM đầy, hệ điều hành đẩy trang nhớ ít dùng ra ổ đĩa SSD. Nếu thiếu RAM trầm trọng sẽ dẫn tới Thrashing làm đơ máy.</p>
          </div>
          <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-xs space-y-1">
            <span className="font-extrabold text-stone-900 block">3. Type 1 Bare-Metal (ESXi)</span>
            <p className="text-stone-600 leading-relaxed">ESXi cài thẳng lên phần cứng, loại bỏ độ trễ của Host OS; sở hữu vMotion di chuyển máy ảo với 0 giây gián đoạn.</p>
          </div>
          <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-xs space-y-1">
            <span className="font-extrabold text-stone-900 block">4. Phân biệt VDI vs App-V</span>
            <p className="text-stone-600 leading-relaxed"><strong>VDI:</strong> Ảo hóa toàn bộ desktop trên server. <strong>App-V:</strong> Đóng gói ứng dụng chạy cục bộ chống xung đột DLL.</p>
          </div>
          <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-xs space-y-1">
            <span className="font-extrabold text-stone-900 block">5. Green Computing & Hợp nhất</span>
            <p className="text-stone-600 leading-relaxed">Server Consolidation giảm số lượng máy chủ vật lý, cắt giảm 60% điện năng tiêu thụ và lượng phát thải nhiệt/CO2.</p>
          </div>
          <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-xs space-y-1">
            <span className="font-extrabold text-stone-900 block">6. Giao thức VPN Windows</span>
            <p className="text-stone-600 leading-relaxed">SSTP tối ưu vượt Firewall qua cổng 443 HTTPS; L2TP/IPsec mã hóa 2 lớp an toàn cao; IKEv2 tự kết nối lại tức thì.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
