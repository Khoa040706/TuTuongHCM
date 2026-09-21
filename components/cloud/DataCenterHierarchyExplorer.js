"use client";
import React, { useState } from "react";
import {
  Server,
  Layers,
  Zap,
  ShieldCheck,
  ThermometerSnowflake,
  Cpu,
  Activity,
  ArrowRight,
  Maximize2,
  Minimize2,
  Sparkles,
  CheckCircle2,
  Sliders,
  Box,
  LayoutGrid,
  ChevronRight
} from "lucide-react";

const POD_COMPONENTS = [
  {
    id: "pds",
    name: "Power Distribution System (PDS)",
    nameVi: "Hệ thống Phân phối Điện",
    icon: Zap,
    color: "bg-amber-100 text-amber-800 border-amber-300",
    desc: "Cung cấp nguồn điện cao áp ổn định, chuyển đổi và phân bổ dòng điện an toàn đến từng hàng rack máy chủ."
  },
  {
    id: "ups",
    name: "Modular UPS",
    nameVi: "Bộ Lưu Điện Dự Phòng Dạng Module",
    icon: ShieldCheck,
    color: "bg-emerald-100 text-emerald-800 border-emerald-300",
    desc: "Dự phòng năng lượng tức thời khi mất điện lưới, thiết kế dạng module linh hoạt tháo lắp nóng (hot-swap) không cần tắt nguồn."
  },
  {
    id: "dcim",
    name: "InfraSuite Manager / DCIM",
    nameVi: "Phần mềm Quản lý Hạ tầng Data Center",
    icon: Sliders,
    color: "bg-purple-100 text-purple-800 border-purple-300",
    desc: "Bộ não giám sát thời gian thực: đo đếm PUE, nhiệt độ, độ ẩm, tải điện năng và phát cảnh báo sự cố sớm."
  },
  {
    id: "rowcool",
    name: "RowCool System",
    nameVi: "Hệ thống Làm mát Theo Hàng",
    icon: ThermometerSnowflake,
    color: "bg-sky-100 text-sky-800 border-sky-300",
    desc: "Đặt xen kẽ giữa các rack máy chủ, thổi khí lạnh trực tiếp và triệt tiêu nhiệt nóng tại nguồn hiệu quả gấp đôi điều hòa phòng truyền thống."
  },
  {
    id: "containment",
    name: "Cold/Hot Aisle Containment",
    nameVi: "Hệ thống Ngăn Lối Đi Nóng/Lạnh",
    icon: Box,
    color: "bg-rose-100 text-rose-800 border-rose-300",
    desc: "Vách ngăn vật lý kín khí, ngăn ngừa triệt để hiện tượng trộn lẫn giữa luồng khí lạnh đầu vào và khí nóng đầu ra của máy chủ."
  }
];

export default function DataCenterHierarchyExplorer() {
  const [currentLevel, setCurrentLevel] = useState("pod"); // 'dc' | 'pod' | 'rack'
  const [selectedPodComp, setSelectedPodComp] = useState("pds");

  return (
    <div className="my-8 rounded-3xl border border-stone-200 bg-linear-to-b from-stone-50/80 via-white to-stone-50/50 p-5 sm:p-7 shadow-xl font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-stone-200">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-sky-500 text-white mb-2 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            Mô Phỏng Phân Cấp Vật Lý (Physical Hierarchy)
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
            Mục I: Cấu Trúc Phân Cấp Trung Tâm Dữ Liệu
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-2xl">
            Khám phá trật tự vật lý từ nhỏ đến lớn: <strong className="text-stone-900">Rack ➔ PoD ➔ Data Center</strong> và 5 thành phần hạ tầng quan trọng bên trong một PoD.
          </p>
        </div>

        {/* Level Switcher Buttons */}
        <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-stone-100 border border-stone-200 self-start sm:self-auto">
          <button
            onClick={() => setCurrentLevel("rack")}
            className={`px-3 py-2 rounded-xl text-xs font-extrabold transition-all ${
              currentLevel === "rack"
                ? "bg-stone-900 text-amber-400 shadow-sm"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            1. Giá Đỡ (Rack)
          </button>
          <button
            onClick={() => setCurrentLevel("pod")}
            className={`px-3 py-2 rounded-xl text-xs font-extrabold transition-all ${
              currentLevel === "pod"
                ? "bg-stone-900 text-amber-400 shadow-sm"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            2. Cụm (PoD)
          </button>
          <button
            onClick={() => setCurrentLevel("dc")}
            className={`px-3 py-2 rounded-xl text-xs font-extrabold transition-all ${
              currentLevel === "dc"
                ? "bg-stone-900 text-amber-400 shadow-sm"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            3. Data Center
          </button>
        </div>
      </div>

      {/* Breadcrumb Hierarchy Indicator */}
      <div className="mt-4 flex items-center gap-2 text-xs font-bold text-stone-500 overflow-x-auto py-1">
        <span className="text-stone-400">Trật tự phân cấp:</span>
        <button
          onClick={() => setCurrentLevel("rack")}
          className={`px-2.5 py-1 rounded-lg border transition-all ${
            currentLevel === "rack"
              ? "bg-amber-100 text-amber-900 border-amber-300 font-black"
              : "bg-white text-stone-600 border-stone-200 hover:bg-stone-50"
          }`}
        >
          Rack (Giá đỡ)
        </button>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <button
          onClick={() => setCurrentLevel("pod")}
          className={`px-2.5 py-1 rounded-lg border transition-all ${
            currentLevel === "pod"
              ? "bg-sky-100 text-sky-900 border-sky-300 font-black"
              : "bg-white text-stone-600 border-stone-200 hover:bg-stone-50"
          }`}
        >
          PoD (Point of Delivery)
        </button>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <button
          onClick={() => setCurrentLevel("dc")}
          className={`px-2.5 py-1 rounded-lg border transition-all ${
            currentLevel === "dc"
              ? "bg-emerald-100 text-emerald-900 border-emerald-300 font-black"
              : "bg-white text-stone-600 border-stone-200 hover:bg-stone-50"
          }`}
        >
          Data Center (Toàn cảnh DC)
        </button>
      </div>

      {/* Main Interactive Stage */}
      <div className="mt-6">
        {/* LEVEL 1: RACK */}
        {currentLevel === "rack" && (
          <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-md animate-in fade-in duration-300">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Visual Rack Graphic */}
              <div className="w-full lg:w-56 shrink-0 rounded-2xl bg-stone-900 p-4 border-2 border-stone-800 text-white flex flex-col justify-between shadow-inner">
                <div>
                  <div className="text-[10px] font-black uppercase tracking-wider text-amber-400 mb-2 flex items-center justify-between">
                    <span>Chuẩn 42U Rack</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  {/* Top-of-Rack Switch */}
                  <div className="p-2 rounded-lg bg-sky-900 border border-sky-500/50 mb-2">
                    <div className="text-[10px] font-mono font-bold text-sky-200">Top-of-Rack Switch</div>
                    <div className="flex gap-1 mt-1">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 rounded-xs bg-emerald-400 animate-ping" />
                      ))}
                    </div>
                  </div>
                  {/* Blade Servers Stack */}
                  <div className="space-y-1.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div key={i} className="p-2 rounded-lg bg-stone-800 border border-stone-700 flex items-center justify-between text-[11px] font-mono">
                        <span className="text-stone-300">Blade Server #{i + 1}</span>
                        <Cpu className="w-3.5 h-3.5 text-stone-400" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-800 text-[10px] text-stone-400 text-center">
                  Xếp cạnh nhau tạo thành Hàng Rack
                </div>
              </div>

              {/* Description & Exam Points */}
              <div className="flex-1 space-y-4">
                <div>
                  <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-md border border-amber-200">
                    Cấp độ 1: Đơn vị chứa thiết bị
                  </span>
                  <h4 className="text-lg font-black text-stone-900 mt-1">
                    Giá đỡ thiết bị (Server Rack)
                  </h4>
                  <p className="text-sm text-stone-600 mt-1 leading-relaxed">
                    Rack là khung kim loại tiêu chuẩn (kích thước phổ biến 19-inch, chiều cao 42U) dùng để gắn các máy chủ (server), switch mạng, bộ lưu trữ và phân phối nguồn điện PDU.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2 text-xs">
                  <div className="font-extrabold text-stone-900">📌 Đặc điểm thi cử trọng tâm:</div>
                  <ul className="list-disc list-inside space-y-1 text-stone-600 leading-relaxed">
                    <li>Các rack chứa thiết bị được <strong>đặt cạnh nhau thành từng hàng (rows)</strong> trong phòng máy.</li>
                    <li>Trên đỉnh mỗi rack thường lắp đặt <strong>Top-of-Rack switch (ToR switch)</strong> để kết nối tất cả server trong rack ra mạng ngoài.</li>
                    <li>Nhiều rack kết hợp với hệ sinh thái nguồn, làm mát và phần mềm sẽ hợp thành một <strong>PoD</strong>.</li>
                  </ul>
                </div>

                <button
                  onClick={() => setCurrentLevel("pod")}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-900 text-amber-400 font-extrabold text-xs hover:bg-stone-800 transition-colors shadow-xs"
                >
                  Phóng to cấp độ Cụm (PoD)
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* LEVEL 2: POD (DEFAULT & MOST IMPORTANT) */}
        {currentLevel === "pod" && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="p-5 rounded-3xl bg-white border border-stone-200 shadow-md">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
                <div>
                  <span className="text-xs font-bold text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded-md border border-sky-200">
                    Cấp độ 2: Đơn vị module độc lập cốt lõi
                  </span>
                  <h4 className="text-lg font-black text-stone-900 mt-1">
                    PoD — Point of Delivery (Cụm phân phối tài nguyên)
                  </h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Một PoD = <strong>Tập hợp nhiều rack + Hệ thống hỗ trợ hoàn chỉnh</strong>. Nhấp vào 5 thành phần bên dưới để xem chi tiết:
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setCurrentLevel("rack")}
                    className="px-3 py-1.5 rounded-xl border border-stone-200 text-xs font-bold text-stone-700 hover:bg-stone-50"
                  >
                    ⬅ Xem Rack
                  </button>
                  <button
                    onClick={() => setCurrentLevel("dc")}
                    className="px-3 py-1.5 rounded-xl bg-stone-900 text-amber-400 text-xs font-extrabold hover:bg-stone-800 transition-colors shadow-xs"
                  >
                    Xem Toàn Cảnh DC ➔
                  </button>
                </div>
              </div>

              {/* 5 Components Pills / Selector */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
                {POD_COMPONENTS.map((comp) => {
                  const Icon = comp.icon;
                  const isSelected = selectedPodComp === comp.id;
                  return (
                    <button
                      key={comp.id}
                      onClick={() => setSelectedPodComp(comp.id)}
                      className={`p-3 rounded-2xl border text-left transition-all ${
                        isSelected
                          ? `${comp.color} shadow-md ring-2 ring-stone-900`
                          : "bg-white border-stone-200 text-stone-700 hover:bg-stone-50"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <Icon className="w-5 h-5" />
                        {isSelected && <span className="w-2 h-2 rounded-full bg-stone-900 animate-pulse" />}
                      </div>
                      <div className="font-extrabold text-xs leading-snug line-clamp-2">
                        {comp.nameVi}
                      </div>
                      <div className="text-[10px] font-semibold opacity-70 mt-1 truncate">
                        {comp.name}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Selected Component Detail Card */}
              {(() => {
                const comp = POD_COMPONENTS.find((c) => c.id === selectedPodComp) || POD_COMPONENTS[0];
                const Icon = comp.icon;
                return (
                  <div className="mt-5 p-4 rounded-2xl bg-stone-50 border border-stone-200 flex items-start gap-4">
                    <div className={`p-3 rounded-2xl ${comp.color} shrink-0`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h5 className="font-extrabold text-sm text-stone-900">{comp.nameVi}</h5>
                        <span className="text-xs font-bold text-stone-500 font-mono">({comp.name})</span>
                      </div>
                      <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                        {comp.desc}
                      </p>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        )}

        {/* LEVEL 3: DATA CENTER (MACRO VIEW) */}
        {currentLevel === "dc" && (
          <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-md animate-in fade-in duration-300">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Macro Data Center Grid Illustration */}
              <div className="w-full lg:w-72 shrink-0 rounded-2xl bg-stone-900 p-4 text-white border-2 border-stone-800 shadow-inner">
                <div className="text-xs font-black uppercase tracking-wider text-amber-400 mb-3 flex items-center justify-between">
                  <span>Toàn Cảnh Data Center</span>
                  <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div
                      key={i}
                      onClick={() => setCurrentLevel("pod")}
                      className="p-2.5 rounded-xl bg-stone-800 border border-stone-700 hover:border-sky-400 transition-all cursor-pointer group text-center"
                    >
                      <div className="text-[10px] font-extrabold text-stone-400 group-hover:text-amber-400">
                        PoD Cluster #{i + 1}
                      </div>
                      <div className="text-[9px] text-stone-500 mt-0.5">16-32 Racks</div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 text-center">
                  <span className="text-[10px] text-stone-400 font-mono">
                    Hạ tầng điện, làm mát & cáp quang tập trung
                  </span>
                </div>
              </div>

              {/* Definition & Scope */}
              <div className="flex-1 space-y-4">
                <div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
                    Cấp độ 3: Toàn thể trung tâm dữ liệu
                  </span>
                  <h4 className="text-lg font-black text-stone-900 mt-1">
                    Trung Tâm Dữ Liệu (Data Center)
                  </h4>
                  <p className="text-sm text-stone-600 mt-1 leading-relaxed">
                    Data Center là cơ sở hạ tầng vật lý quy mô lớn chuyên dụng, nơi tập trung toàn bộ máy chủ (server), hệ thống lưu trữ (storage), mạng kết nối (network) cùng các công trình phụ trợ để vận hành thông suốt mọi dịch vụ điện toán đám mây.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs space-y-2">
                  <div className="font-extrabold text-amber-900">⚡ Câu Thần Chú Thi Cử:</div>
                  <div className="text-amber-950 font-black text-sm font-mono">
                    Rack ➔ PoD ➔ Data Center (Sắp xếp theo thứ tự từ nhỏ đến lớn)
                  </div>
                  <p className="text-stone-600 leading-relaxed">
                    Đề thi trắc nghiệm thường xuyên đảo vị trí của Rack và PoD để đánh lừa sinh viên. Hãy luôn nhớ: Rack là chiếc tủ nhỏ, nhiều Rack ghép vào hệ thống nguồn và làm mát tạo thành PoD, và nhiều PoD hợp nhất trong tòa nhà Data Center.
                  </p>
                </div>

                <button
                  onClick={() => setCurrentLevel("pod")}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-900 text-amber-400 font-extrabold text-xs hover:bg-stone-800 transition-colors shadow-xs"
                >
                  ⬅ Thu nhỏ về khám phá Cụm (PoD)
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quick Summary Footer */}
      <div className="mt-6 p-4 rounded-2xl bg-stone-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            <strong>Ghi nhớ cốt lõi Mục I:</strong> Một PoD chuẩn Enterprise bao gồm đủ 5 bộ phận: <em>PDS (Điện), Modular UPS, DCIM Manager, RowCool (Làm mát hàng), Cold/Hot Aisle Containment</em>.
          </span>
        </div>
        <span className="text-stone-400 font-mono shrink-0">Mục I.1 ➔ I.3</span>
      </div>
    </div>
  );
}
