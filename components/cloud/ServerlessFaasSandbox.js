"use client";
import React, { useState, useEffect } from "react";

export default function ServerlessFaasSandbox() {
  const [activeTab, setActiveTab] = useState("faas-sandbox"); // 'faas-sandbox' | 'future-trends'
  
  // FaaS Sandbox State
  const [faasStatus, setFaasStatus] = useState("idle"); // 'idle' | 'cold-start' | 'executing' | 'warm'
  const [executionCount, setExecutionCount] = useState(0);
  const [instances, setInstances] = useState(0);
  const [logs, setLogs] = useState([]);

  // 7 Xu hướng tương lai từ giáo trình
  const futureTrends = [
    {
      id: "ai",
      title: "1. Tích Hợp AI & Machine Learning",
      icon: "🤖",
      badge: "AI as a Service",
      desc: "Các nền tảng PaaS nhúng sẵn các mô hình ngôn ngữ lớn (LLM), API nhận diện hình ảnh, giọng nói và đường ống huấn luyện mô hình MLOps chỉ bằng vài dòng code."
    },
    {
      id: "serverless",
      title: "2. Kiến Trúc Serverless & FaaS (Function as a Service)",
      icon: "⚡",
      badge: "Scale-to-Zero",
      desc: "Mô hình thực thi hướng sự kiện (Event-driven): Hàm chỉ chạy khi có request, tự động co giãn về 0 bản sao khi không có khách và tính phí chính xác đến từng mili-giây."
    },
    {
      id: "multicloud",
      title: "3. Đa Nền Tảng & Đám Mây Lai (Multi-cloud / Hybrid)",
      icon: "🌐",
      badge: "Chống Lock-in",
      desc: "Cho phép ứng dụng chạy liền mạch giữa đám mây công cộng (AWS, GCP, Azure) và trung tâm dữ liệu nội bộ (On-premise) thông qua công nghệ điều phối Kubernetes thống nhất."
    },
    {
      id: "security",
      title: "4. Bảo Mật & Tuân Thủ Nâng Cao (DevSecOps)",
      icon: "🛡️",
      badge: "Zero Trust",
      desc: "Kiểm tra tự động mã độc trong dependencies ngay khi git push, tự động cô lập microservice bất thường và thực thi chính sách bảo mật Zero Trust trên toàn mạng."
    },
    {
      id: "devex",
      title: "5. Tối Ưu Hóa Trải Nghiệm Nhà Phát Triển (DevEx)",
      icon: "💻",
      badge: "Developer First",
      desc: "Tích hợp trợ lý lập trình AI thông minh, môi trường phát triển trên trình duyệt (Cloud IDE), công cụ dòng lệnh CLI trực quan giúp dev tập trung sáng tạo 100%."
    },
    {
      id: "global",
      title: "6. Mở Rộng Quy Mô Toàn Cầu (Global Edge Scale)",
      icon: "🌍",
      badge: "Độ Trễ Siêu Thấp",
      desc: "Tự động phân phối mã nguồn ra hàng trăm điểm hiện diện (PoP / Edge Locations) khắp các châu lục, đảm bảo thời gian phản hồi cho người dùng dưới 20ms."
    },
    {
      id: "iot",
      title: "7. Tích Hợp IoT & Điện Toán Biên (Edge Computing)",
      icon: "📡",
      badge: "Biên Thông Minh",
      desc: "Đẩy logic xử lý PaaS trực tiếp xuống các trạm viễn thông 5G và thiết bị cảm biến IoT, xử lý dữ liệu thực tế tại chỗ trước khi truyền về đám mây trung tâm."
    }
  ];

  // Trigger FaaS event
  const triggerFaas = () => {
    if (faasStatus === "cold-start" || faasStatus === "executing") return;

    setExecutionCount((prev) => prev + 1);
    const isCold = instances === 0;

    if (isCold) {
      setFaasStatus("cold-start");
      setInstances(1);
      setLogs((prev) => [
        `[${new Date().toLocaleTimeString()}] Event received. Cold Start: Provisioning microVM sandbox container (+45ms)...`,
        ...prev.slice(0, 8)
      ]);

      setTimeout(() => {
        setFaasStatus("executing");
        setLogs((prev) => [
          `[${new Date().toLocaleTimeString()}] Executing handler(event, context)... Runtime: Node.js 20 V8`,
          ...prev.slice(0, 8)
        ]);

        setTimeout(() => {
          setFaasStatus("warm");
          setLogs((prev) => [
            `[${new Date().toLocaleTimeString()}] Execution completed in 82ms. Memory: 64MB. Bill: $0.00000016. Status: 200 OK. Container is now WARM.`,
            ...prev.slice(0, 8)
          ]);
        }, 800);
      }, 700);
    } else {
      // Warm Start
      setFaasStatus("executing");
      setLogs((prev) => [
        `[${new Date().toLocaleTimeString()}] Warm Start: Reusing active microVM instance. Latency: 4ms...`,
        ...prev.slice(0, 8)
      ]);

      setTimeout(() => {
        setFaasStatus("warm");
        setLogs((prev) => [
          `[${new Date().toLocaleTimeString()}] Fast Execution completed in 35ms. Status: 200 OK.`,
          ...prev.slice(0, 8)
        ]);
      }, 500);
    }
  };

  // Scale to zero timer
  const handleScaleToZero = () => {
    setFaasStatus("idle");
    setInstances(0);
    setLogs((prev) => [
      `[${new Date().toLocaleTimeString()}] Inactivity timeout (Zero Requests). Auto-scaled to 0 instances. Billing PAUSED ($0.00).`,
      ...prev.slice(0, 8)
    ]);
  };

  return (
    <div className="my-8 rounded-2xl border border-purple-500/20 bg-gradient-to-br from-[#16121c] via-[#18131e] to-[#120e17] p-5 md:p-7 text-neutral-200 shadow-2xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-800 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-400">
            <span>🔮 Mục VI • Tương Lai &amp; Serverless FaaS</span>
          </div>
          <h3 className="mt-2 text-xl font-bold tracking-tight text-white md:text-2xl">
            Tương Lai PaaS: Serverless FaaS &amp; 7 Làn Sóng Công Nghệ
          </h3>
          <p className="mt-1 text-sm text-neutral-400">
            Khám phá kiến trúc thực thi hướng sự kiện (Event-driven), cơ chế co giãn về 0 và tính phí theo mili-giây
          </p>
        </div>

        {/* Tab switch */}
        <div className="flex rounded-xl bg-neutral-900/90 p-1 border border-neutral-800">
          <button
            onClick={() => setActiveTab("faas-sandbox")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === "faas-sandbox"
                ? "bg-purple-600 text-white shadow-md"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <span>⚡ FaaS Sandbox</span>
          </button>
          <button
            onClick={() => setActiveTab("future-trends")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === "future-trends"
                ? "bg-teal-600 text-white shadow-md"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <span>🌊 7 Xu Hướng Tương Lai</span>
          </button>
        </div>
      </div>

      {/* TAB 1: FAAS SANDBOX */}
      {activeTab === "faas-sandbox" && (
        <div className="mt-6 space-y-5 rounded-2xl border border-purple-500/30 bg-neutral-900/80 p-5 md:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
                Mô Phỏng Function-as-a-Service (FaaS) Trực Quan
              </span>
              <h4 className="text-base font-bold text-white mt-0.5">
                Cơ Chế Khởi Động (Cold/Warm) &amp; Tự Động Co Giãn Về 0
              </h4>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={triggerFaas}
                className="flex items-center gap-2 rounded-xl bg-purple-600 hover:bg-purple-500 active:scale-95 px-4 py-2 text-xs font-bold text-white shadow-lg shadow-purple-600/30 transition-all cursor-pointer"
              >
                <span>⚡ Bắn Event HTTP Request</span>
              </button>
              {instances > 0 && (
                <button
                  onClick={handleScaleToZero}
                  className="rounded-xl border border-neutral-700 bg-neutral-800 hover:bg-neutral-700 px-3 py-2 text-xs font-semibold text-neutral-300 transition-all"
                >
                  <span>💤 Ép Về 0 (Sleep)</span>
                </button>
              )}
            </div>
          </div>

          {/* Status Display Bento */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="rounded-xl border border-neutral-800 bg-black/50 p-3 text-center">
              <span className="text-[10px] text-neutral-400 uppercase font-semibold block">Trạng Thái FaaS</span>
              <span className={`text-sm font-extrabold mt-1 block uppercase ${
                faasStatus === "idle" ? "text-neutral-500" :
                faasStatus === "cold-start" ? "text-amber-400 animate-pulse" :
                faasStatus === "executing" ? "text-emerald-400 animate-pulse" : "text-purple-400"
              }`}>
                {faasStatus === "idle" ? "💤 IDLE (SCALE TO 0)" :
                 faasStatus === "cold-start" ? "❄️ COLD START (+45ms)" :
                 faasStatus === "executing" ? "⚙️ ĐANG CHẠY..." : "🔥 WARM (SẴN SÀNG)"}
              </span>
            </div>

            <div className="rounded-xl border border-neutral-800 bg-black/50 p-3 text-center">
              <span className="text-[10px] text-neutral-400 uppercase font-semibold block">Số Bản Sao (Replicas)</span>
              <span className="text-xl font-black text-white mt-1 block">
                {instances} Containers
              </span>
              <span className="text-[10px] text-neutral-500">
                {instances === 0 ? "Chi phí: 0 đồng/giờ" : "Chi phí tính theo ms"}
              </span>
            </div>

            <div className="rounded-xl border border-neutral-800 bg-black/50 p-3 text-center">
              <span className="text-[10px] text-neutral-400 uppercase font-semibold block">Lần Gọi Sự Kiện</span>
              <span className="text-xl font-black text-purple-400 mt-1 block">
                {executionCount}
              </span>
              <span className="text-[10px] text-neutral-500">Event Triggers</span>
            </div>

            <div className="rounded-xl border border-neutral-800 bg-black/50 p-3 text-center">
              <span className="text-[10px] text-neutral-400 uppercase font-semibold block">Phương Thức Tính Phí</span>
              <span className="text-sm font-black text-emerald-400 mt-1 block">
                Mili-giây (ms)
              </span>
              <span className="text-[10px] text-neutral-500">Millisecond Billing</span>
            </div>
          </div>

          {/* Real-time FaaS Log Console */}
          <div className="rounded-xl border border-neutral-800 bg-black/80 p-3.5 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-2 text-[11px] text-neutral-400">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-purple-500" />
                <span>Cloud Function Runtime Execution Stream</span>
              </span>
              <span>Memory: 128MB • Timeout: 10s</span>
            </div>
            <div className="mt-2.5 space-y-1 max-h-36 overflow-y-auto text-[11px]">
              {logs.length === 0 ? (
                <span className="text-neutral-600 italic">
                  Hệ thống đang ở trạng thái Scale-to-Zero (0 máy chủ hoạt động, $0 chi phí). Bấm nút &apos;Bắn Event HTTP Request&apos; để kích hoạt function...
                </span>
              ) : (
                logs.map((lg, i) => (
                  <div
                    key={i}
                    className={
                      lg.includes("WARM") || lg.includes("200 OK")
                        ? "text-purple-300"
                        : lg.includes("Cold Start")
                        ? "text-amber-300"
                        : lg.includes("PAUSED")
                        ? "text-emerald-400 font-bold"
                        : "text-neutral-300"
                    }
                  >
                    {lg}
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Educational Callout */}
          <div className="rounded-xl border border-purple-500/20 bg-purple-950/20 p-4 text-xs text-neutral-300 leading-relaxed">
            <strong className="text-purple-300 block mb-1">
              💡 Sự khác biệt cốt lõi giữa PaaS truyền thống và Serverless FaaS:
            </strong>
            Trong PaaS truyền thống, ứng dụng (container) vẫn chạy liên tục 24/7 và bạn phải trả tiền thuê instance định kỳ. Còn trong kiến trúc <strong>Serverless FaaS</strong>, mã nguồn chỉ được nạp và chạy khi có sự kiện (HTTP request, tin nhắn queue, file upload). Khi không có ai truy cập, số lượng máy chủ co giãn hoàn toàn về <strong>0 (Scale to Zero)</strong> và doanh nghiệp không phải trả dù chỉ 1 đồng!
          </div>
        </div>
      )}

      {/* TAB 2: 7 FUTURE TRENDS */}
      {activeTab === "future-trends" && (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {futureTrends.map((trend) => (
            <div
              key={trend.id}
              className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4 space-y-2 hover:border-purple-500/40 transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl">{trend.icon}</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300">
                  {trend.badge}
                </span>
              </div>
              <h5 className="text-xs font-bold text-white pt-1">{trend.title}</h5>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {trend.desc}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
