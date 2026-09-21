"use client";
import React, { useState, useEffect } from "react";
import { Network, Server, Smartphone, Laptop, Printer, Router, Shield, Zap, Sliders, Activity, CheckCircle2, Sparkles, ArrowRight, Layers, DollarSign } from "lucide-react";

export default function NistFeaturesInteractiveRadar() {
  const [activeTab, setActiveTab] = useState("nist"); // 'nist' | 'flow'
  const [selectedFeature, setSelectedFeature] = useState(0);
  const [userTraffic, setUserTraffic] = useState(2500); // 100 -> 50000
  const [isSimulating, setIsSimulating] = useState(false);
  const [flowStep, setFlowStep] = useState(0);

  const nistFeatures = [
    {
      id: "on-demand",
      number: "1",
      en: "On-demand self-service",
      vi: "Tự phục vụ theo nhu cầu",
      shortDesc: "Người dùng tự cấp phát tài nguyên (CPU, RAM, ổ cứng) tức thì qua bảng điều khiển Web/API mà không cần tương tác thủ công với nhân viên nhà cung cấp.",
      realWorld: "Khởi tạo 1 máy ảo EC2 trên AWS chỉ bằng vài cú click chuột trong 60 giây, hoạt động 24/7.",
      examKeyword: "Tự phục vụ, không cần nhân viên hỗ trợ, tính tức thời (Automated provisioning)."
    },
    {
      id: "broad-access",
      number: "2",
      en: "Broad network access",
      vi: "Truy cập mạng diện rộng",
      shortDesc: "Các năng lực tính toán sẵn sàng trên mạng và được truy cập thông qua các cơ chế chuẩn mực (HTTP/HTTPS), tương thích với đa dạng thiết bị đầu cuối.",
      realWorld: "Truy cập Google Drive hay Salesforce mượt mà từ iPhone, Android, MacBook, PC văn phòng hay thậm chí máy in thông minh.",
      examKeyword: "Đa nền tảng (Heterogeneous client platforms), giao thức mạng chuẩn, truy cập mọi lúc mọi nơi."
    },
    {
      id: "resource-pooling",
      number: "3",
      en: "Resource pooling",
      vi: "Chia sẻ tài nguyên dùng chung",
      shortDesc: "Tài nguyên tính toán của nhà cung cấp được gom lại để phục vụ nhiều khách hàng (Multi-tenant model), tự động phân bổ động theo nhu cầu mà khách hàng không cần biết vị trí vật lý chính xác.",
      realWorld: "Hàng trăm công ty cùng chạy ứng dụng trên cùng một máy chủ vật lý ở Singapore, nhưng dữ liệu hoàn toàn cô lập và bảo mật.",
      examKeyword: "Mô hình đa người thuê (Multi-tenancy), trừu tượng hóa vị trí vật lý (Location independence)."
    },
    {
      id: "rapid-elasticity",
      number: "4",
      en: "Rapid elasticity",
      vi: "Khả năng co giãn nhanh chóng",
      shortDesc: "Năng lực tính toán có thể được cung cấp và thu hồi cực kỳ nhanh chóng, tự động mở rộng (scale out) khi tải cao và thu hẹp (scale in) khi tải giảm.",
      realWorld: "Trang web vé máy bay tự động tăng từ 2 máy chủ lên 50 máy chủ trong ngày mở bán vé Tết, sau đó tự giảm về 2 máy chủ.",
      examKeyword: "Co giãn linh hoạt (Elasticity vs Scalability), mở rộng không giới hạn trong mắt người dùng (Seemingly unlimited)."
    },
    {
      id: "measured-service",
      number: "5",
      en: "Measured service",
      vi: "Dịch vụ đo lường được",
      shortDesc: "Hệ thống tự động kiểm soát, tối ưu hóa và đo đếm tài nguyên (băng thông, dung lượng lưu trữ, chu kỳ CPU). Cung cấp tính minh bạch cho cả nhà cung cấp lẫn người sử dụng.",
      realWorld: "Hóa đơn đám mây chi tiết đến từng megabyte truyền tải và tính phí theo giây sử dụng CPU (Pay-per-second billing).",
      examKeyword: "Chi trả theo mức sử dụng thực tế (Pay-as-you-go), đo lường tự động và minh bạch (Metered/Billed usage)."
    }
  ];

  // Calculated metrics based on user traffic
  const calculatedVMs = Math.max(1, Math.ceil(userTraffic / 2500));
  const cpuUtilization = Math.min(95, Math.round(20 + (userTraffic % 2500) / 40));
  const estimatedCostPerHour = (calculatedVMs * 0.048).toFixed(3);

  // Packet Flow animation handler
  const triggerFlowSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setFlowStep(1);

    setTimeout(() => setFlowStep(2), 700);
    setTimeout(() => setFlowStep(3), 1400);
    setTimeout(() => setFlowStep(4), 2100);
    setTimeout(() => {
      setFlowStep(0);
      setIsSimulating(false);
    }, 2800);
  };

  const currentFeat = nistFeatures[selectedFeature];

  return (
    <div className="my-8 p-5 sm:p-7 rounded-3xl bg-white border border-stone-200 shadow-md font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-black uppercase tracking-widest text-sky-600">
              Interactive Blueprint • Mục II
            </span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-sky-100 text-sky-800">
              Chuẩn NIST & Luồng Mạng
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-black text-stone-900 mt-1">
            Kiến Trúc Mạng & 5 Đặc Tính Cốt Lõi Cloud Computing (NIST Model)
          </h3>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Mô phỏng tương tác 5 đặc tính vàng NIST và luồng dữ liệu End-User ➔ Router/Switch ➔ Cloud.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-stone-100 border border-stone-200/80 self-start sm:self-auto shrink-0">
          <button
            type="button"
            onClick={() => setActiveTab("nist")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === "nist" ? "bg-sky-600 text-white shadow-xs" : "text-stone-600 hover:text-stone-900"
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>5 Đặc Tính NIST</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("flow")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === "flow" ? "bg-sky-600 text-white shadow-xs" : "text-stone-600 hover:text-stone-900"
            }`}
          >
            <Network className="w-3.5 h-3.5" />
            <span>Kiến Trúc Luồng Dữ Liệu</span>
          </button>
        </div>
      </div>

      {/* TAB 1: 5 NIST FEATURES & ELASTICITY SIMULATION */}
      {activeTab === "nist" && (
        <div className="space-y-6">
          {/* Elasticity Slider Playground */}
          <div className="p-5 rounded-2xl bg-sky-50/60 border border-sky-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-sky-700 block">
                  Phòng Thí Nghiệm Trực Quan: Rapid Elasticity & Measured Service
                </span>
                <div className="text-xs sm:text-sm font-bold text-stone-800">
                  Kéo thanh trượt để thay đổi lượng người dùng và quan sát hệ thống tự động co giãn:
                </div>
              </div>
              <div className="flex items-center gap-3 self-start sm:self-auto">
                <span className="text-xs font-mono font-black text-sky-800 bg-white px-3 py-1 rounded-xl border border-sky-300 shadow-2xs">
                  {userTraffic.toLocaleString()} người dùng
                </span>
              </div>
            </div>

            <input
              type="range"
              min="100"
              max="30000"
              step="500"
              value={userTraffic}
              onChange={(e) => setUserTraffic(Number(e.target.value))}
              className="w-full accent-sky-600 cursor-pointer h-2 bg-stone-200 rounded-lg"
            />

            {/* Live Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
              <div className="p-3 rounded-xl bg-white border border-stone-200">
                <div className="text-[10px] font-bold text-stone-400 uppercase">Máy ảo kích hoạt (VMs)</div>
                <div className="text-base sm:text-lg font-black text-sky-600 mt-0.5">
                  {calculatedVMs} máy ảo
                </div>
                <div className="text-[10px] text-stone-500 mt-0.5">Tự động Scale Out</div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-stone-200">
                <div className="text-[10px] font-bold text-stone-400 uppercase">Mức tải CPU trung bình</div>
                <div className="text-base sm:text-lg font-black text-amber-600 mt-0.5">
                  {cpuUtilization}%
                </div>
                <div className="text-[10px] text-stone-500 mt-0.5">Cân bằng tải tối ưu</div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-stone-200">
                <div className="text-[10px] font-bold text-stone-400 uppercase">Chia sẻ tài nguyên</div>
                <div className="text-base sm:text-lg font-black text-purple-600 mt-0.5">
                  Multi-tenant
                </div>
                <div className="text-[10px] text-stone-500 mt-0.5">Resource Pooling</div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-stone-200">
                <div className="text-[10px] font-bold text-stone-400 uppercase">Chi phí đo lường/giờ</div>
                <div className="text-base sm:text-lg font-black text-emerald-600 mt-0.5">
                  ${estimatedCostPerHour}/h
                </div>
                <div className="text-[10px] text-stone-500 mt-0.5">Measured Service</div>
              </div>
            </div>
          </div>

          {/* 5 Features Pills & Detail Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Feature selector */}
            <div className="lg:col-span-5 space-y-2">
              <span className="text-xs font-black uppercase tracking-wider text-stone-500 block mb-1">
                5 Đặc Tính Cốt Lõi (NIST Model):
              </span>
              {nistFeatures.map((feat, idx) => {
                const isSelected = selectedFeature === idx;
                return (
                  <button
                    key={feat.id}
                    type="button"
                    onClick={() => setSelectedFeature(idx)}
                    className={`w-full p-3 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between gap-3 ${
                      isSelected
                        ? "bg-sky-600 text-white border-sky-600 shadow-xs"
                        : "bg-white border-stone-200 hover:bg-stone-50 text-stone-700"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-7 h-7 rounded-xl flex items-center justify-center font-black text-xs shrink-0 ${
                        isSelected ? "bg-white/20 text-white" : "bg-sky-100 text-sky-700"
                      }`}>
                        {feat.number}
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-bold leading-tight">{feat.vi}</div>
                        <div className={`text-[10px] font-mono mt-0.5 ${
                          isSelected ? "text-sky-100" : "text-stone-400"
                        }`}>{feat.en}</div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Feature Detail Showcase */}
            <div className="lg:col-span-7 p-6 rounded-2xl border border-stone-200 bg-stone-50/70 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-black px-2.5 py-0.5 rounded-md bg-sky-100 text-sky-800">
                    Đặc tính #{currentFeat.number} / 5
                  </span>
                  <span className="text-xs font-mono text-stone-500">
                    {currentFeat.en}
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-black text-stone-900 mb-3">
                  {currentFeat.vi}
                </h4>

                <div className="p-4 rounded-xl bg-white border border-stone-200 mb-3.5">
                  <span className="text-[11px] font-black text-stone-400 uppercase block mb-1">
                    Bản chất kỹ thuật:
                  </span>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-medium">
                    {currentFeat.shortDesc}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-stone-200">
                  <span className="text-[11px] font-black text-stone-400 uppercase block mb-1">
                    Ví dụ thực tế trong ngành:
                  </span>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {currentFeat.realWorld}
                  </p>
                </div>
              </div>

              <div className="mt-4 p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-amber-900 block mb-0.5">Dấu hiệu nhận biết khi thi trắc nghiệm:</span>
                  <p className="leading-relaxed font-medium">{currentFeat.examKeyword}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: PACKET FLOW & ARCHITECTURE */}
      {activeTab === "flow" && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl border border-stone-200 bg-stone-50/50">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
              <div>
                <h4 className="text-sm sm:text-base font-black text-stone-900">
                  Mô Phỏng Kiến Trúc Luồng Kết Nối Đám Mây (Cloud Architecture Flow)
                </h4>
                <p className="text-xs text-stone-500 mt-0.5">
                  Quan sát quá trình gói tin từ thiết bị người dùng đi qua Internet, Router, Switch để truy xuất Data Center.
                </p>
              </div>

              <button
                type="button"
                onClick={triggerFlowSimulation}
                disabled={isSimulating}
                className="px-4 py-2 rounded-xl bg-sky-600 text-white text-xs font-bold hover:bg-sky-700 transition-all cursor-pointer disabled:opacity-50 flex items-center gap-2 self-start sm:self-auto shadow-xs"
              >
                <Activity className="w-3.5 h-3.5 animate-pulse" />
                <span>{isSimulating ? "Đang truyền gói tin..." : "Bấm Mô Phỏng Truy Vấn"}</span>
              </button>
            </div>

            {/* Visual Pipeline */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 relative">
              {/* Step 1: End Users */}
              <div className={`p-4 rounded-2xl border transition-all text-center flex flex-col items-center justify-center ${
                flowStep === 1 ? "bg-sky-500 text-white border-sky-600 shadow-md scale-102" : "bg-white border-stone-200 text-stone-700"
              }`}>
                <div className="flex gap-2 mb-2">
                  <Smartphone className="w-4 h-4" />
                  <Laptop className="w-4 h-4" />
                  <Printer className="w-4 h-4" />
                </div>
                <div className="text-xs font-black">1. End Users</div>
                <div className="text-[10px] opacity-80 mt-1">Mobile, Laptop, PC, Printer</div>
              </div>

              {/* Step 2: Edge Router & Switch */}
              <div className={`p-4 rounded-2xl border transition-all text-center flex flex-col items-center justify-center ${
                flowStep === 2 ? "bg-amber-500 text-white border-amber-600 shadow-md scale-102" : "bg-white border-stone-200 text-stone-700"
              }`}>
                <Router className="w-5 h-5 mb-2" />
                <div className="text-xs font-black">2. Router ↔ Switch</div>
                <div className="text-[10px] opacity-80 mt-1">Định tuyến gói tin cục bộ</div>
              </div>

              {/* Step 3: Public Internet */}
              <div className={`p-4 rounded-2xl border transition-all text-center flex flex-col items-center justify-center ${
                flowStep === 3 ? "bg-indigo-500 text-white border-indigo-600 shadow-md scale-102" : "bg-white border-stone-200 text-stone-700"
              }`}>
                <Network className="w-5 h-5 mb-2" />
                <div className="text-xs font-black">3. Mạng Internet</div>
                <div className="text-[10px] opacity-80 mt-1">Truyền tải băng thông rộng</div>
              </div>

              {/* Step 4: Cloud Data Center */}
              <div className={`p-4 rounded-2xl border transition-all text-center flex flex-col items-center justify-center ${
                flowStep === 4 ? "bg-emerald-500 text-white border-emerald-600 shadow-md scale-102" : "bg-white border-stone-200 text-stone-700"
              }`}>
                <Server className="w-5 h-5 mb-2" />
                <div className="text-xs font-black">4. Cloud Data Center</div>
                <div className="text-[10px] opacity-80 mt-1">Servers, Apps, Platform, Storage</div>
              </div>
            </div>

            {/* Explanatory summary box */}
            <div className="mt-5 p-4 rounded-xl bg-white border border-stone-200 text-xs sm:text-sm text-stone-700 leading-relaxed">
              <div className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-sky-600" />
                <span>Bản chất cốt lõi của Kiến trúc Cloud Computing:</span>
              </div>
              <p>
                Người dùng cuối (End-users) kết nối thông qua hạ tầng mạng chuẩn (*Router &rarr; Switch &rarr; Internet*) để truy cập toàn bộ tài nguyên tính toán (*Servers, Máy tính để bàn ảo Virtual Desktop, Nền tảng phần mềm, Ứng dụng và Kho lưu trữ dữ liệu*) được tập trung tại các Trung tâm dữ liệu của nhà cung cấp, <strong>hoàn toàn không cần đầu tư hay bảo trì máy chủ vật lý tại chỗ</strong>.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
