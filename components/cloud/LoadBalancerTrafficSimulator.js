"use client";
import React, { useState } from "react";

export default function LoadBalancerTrafficSimulator() {
  const [algorithm, setAlgorithm] = useState("round-robin"); // 'round-robin' | 'least-connections' | 'ip-hash'
  const [activeTab, setActiveTab] = useState("simulator"); // 'simulator' | 'algorithms' | 'benefits'
  
  // 3 Backend Servers State
  const [servers, setServers] = useState([
    { id: "srv-a", name: "Server A", status: "healthy", activeConns: 3, totalProcessed: 12, ip: "10.0.1.10" },
    { id: "srv-b", name: "Server B", status: "healthy", activeConns: 5, totalProcessed: 14, ip: "10.0.1.20" },
    { id: "srv-c", name: "Server C", status: "healthy", activeConns: 1, totalProcessed: 10, ip: "10.0.1.30" }
  ]);

  const [rrIndex, setRrIndex] = useState(0);
  const [lastAssigned, setLastAssigned] = useState(null);
  const [ddosProtection, setDdosProtection] = useState(true);
  const [trafficLogs, setTrafficLogs] = useState([
    "[System Initialized] Load Balancer online. 3 Backend Servers Healthy. Health Check: 200 OK."
  ]);

  // Dispatch traffic request
  const handleSendTraffic = () => {
    const healthyServers = servers.filter((s) => s.status === "healthy");
    if (healthyServers.length === 0) {
      setTrafficLogs((prev) => [
        `[${new Date().toLocaleTimeString()}] 503 SERVICE UNAVAILABLE: All backend servers are down!`,
        ...prev.slice(0, 7)
      ]);
      return;
    }

    let targetServer = null;

    if (algorithm === "round-robin") {
      const idx = rrIndex % healthyServers.length;
      targetServer = healthyServers[idx];
      setRrIndex((prev) => prev + 1);
    } else if (algorithm === "least-connections") {
      // Find server with least active connections
      targetServer = [...healthyServers].sort((a, b) => a.activeConns - b.activeConns)[0];
    } else if (algorithm === "ip-hash") {
      // Simulate client IP hashing
      const mockIps = ["192.168.1.55", "10.20.30.40", "172.16.0.99"];
      const randIp = mockIps[Math.floor(Math.random() * mockIps.length)];
      const hashVal = randIp.split(".").reduce((acc, part) => acc + parseInt(part, 10), 0);
      targetServer = healthyServers[hashVal % healthyServers.length];
    }

    if (targetServer) {
      setLastAssigned(targetServer.id);
      setServers((prev) =>
        prev.map((s) =>
          s.id === targetServer.id
            ? { ...s, activeConns: s.activeConns + 1, totalProcessed: s.totalProcessed + 1 }
            : s
        )
      );

      setTrafficLogs((prev) => [
        `[${new Date().toLocaleTimeString()}] Request routed via [${algorithm.toUpperCase()}] ➔ ${targetServer.name} (${targetServer.ip}). Active Conns: ${targetServer.activeConns + 1}`,
        ...prev.slice(0, 7)
      ]);
    }
  };

  // Toggle server crash / recover
  const handleToggleServer = (id) => {
    setServers((prev) =>
      prev.map((s) => {
        if (s.id === id) {
          const nextStatus = s.status === "healthy" ? "crashed" : "healthy";
          return {
            ...s,
            status: nextStatus,
            activeConns: nextStatus === "crashed" ? 0 : 2
          };
        }
        return s;
      })
    );

    const srv = servers.find((s) => s.id === id);
    const willCrash = srv.status === "healthy";
    setTrafficLogs((prev) => [
      `[${new Date().toLocaleTimeString()}] Health Monitor: ${srv.name} ${
        willCrash ? "FAILED Health Check (HTTP 500/Timeout)! Removing from pool." : "Recovered! Health Check OK (HTTP 200). Added back to pool."
      }`,
      ...prev.slice(0, 7)
    ]);
  };

  // 3 Thuật toán phân phối phổ biến
  const algorithmsList = [
    {
      id: "round-robin",
      name: "1. Round Robin (Tuần Tự Luân Phiên)",
      icon: "🔄",
      badge: "Đơn Giản & Phổ Biến Nhất",
      desc: "Phân phối các yêu cầu đến lần lượt từng server theo vòng tròn khép kín (Server A ➔ Server B ➔ Server C ➔ Server A...).",
      pros: "Cực kỳ đơn giản, không tốn tài nguyên tính toán của Load Balancer.",
      cons: "Không tính đến tải thực tế của từng server; nếu một server đang xử lý tác vụ nặng sẽ dễ bị quá tải."
    },
    {
      id: "least-connections",
      name: "2. Least Connections (Kết Nối Ít Nhất)",
      icon: "⚖️",
      badge: "Cân Bằng Thông Minh",
      desc: "Gửi yêu cầu mới đến server hiện đang có ít kết nối hoạt động nhất (Least active connections).",
      pros: "Rất hiệu quả khi các yêu cầu có thời gian xử lý không đồng đều (ví dụ: tác vụ download tệp nặng vs xem trang web nhẹ).",
      cons: "Load Balancer phải liên tục theo dõi và duy trì trạng thái kết nối của từng máy chủ."
    },
    {
      id: "ip-hash",
      name: "3. IP Hash (Băm Địa Chỉ IP)",
      icon: "🔑",
      badge: "Duy Trì Phiên (Sticky Session)",
      desc: "Sử dụng thuật toán băm địa chỉ IP của Client để xác định server phục vụ cố định cho người dùng đó.",
      pros: "Đảm bảo cùng một người dùng sẽ luôn được phục vụ bởi cùng một server, giúp duy trì giỏ hàng và phiên đăng nhập (Session Persistence).",
      cons: "Nếu nhiều người dùng dùng chung một IP mạng công ty (NAT), server được ánh xạ có thể bị quá tải cục bộ."
    }
  ];

  // 5 Lợi ích của Load Balancing từ giáo trình
  const coreBenefits = [
    {
      title: "1. Tăng Hiệu Năng & Khả Năng Chịu Tải",
      icon: "⚡",
      desc: "Phân phối đều khối lượng công việc (Workload), tránh hiện tượng nghẽn cổ chai tại một máy chủ đơn lẻ và nâng cao năng lực phục vụ tổng thể."
    },
    {
      title: "2. Độ Sẵn Sàng Cao (High Availability & Fault Tolerance)",
      icon: "🛡️",
      desc: "Cơ chế kiểm tra sức khỏe (Health Check) tự động phát hiện máy chủ bị lỗi và chuyển hướng lưu lượng tức thời sang máy chủ dự phòng không gián đoạn."
    },
    {
      title: "3. Cải Thiện Trải Nghiệm Người Dùng (UX)",
      icon: "🚀",
      desc: "Giảm thời gian phản hồi (Response time), loại bỏ trang báo lỗi 502/504 và đảm bảo ứng dụng luôn mượt mà trong giờ cao điểm."
    },
    {
      title: "4. Tăng Cường Bảo Mật & Chống DDoS",
      icon: "🔒",
      desc: "Đóng vai trò lá chắn phía trước che giấu địa chỉ IP thực của backend, phân tán các đợt tấn công từ chối dịch vụ (DDoS) và giải mã SSL tập trung."
    },
    {
      title: "5. Giảm Chi Phí Vận Hành & Tối Ưu Tài Nguyên",
      icon: "💰",
      desc: "Tối ưu hóa hiệu suất sử dụng của toàn bộ máy chủ, kết hợp với Auto-scaling để thêm/bớt số lượng máy chủ linh hoạt theo nhu cầu thực tế."
    }
  ];

  return (
    <div className="my-8 rounded-2xl border border-blue-500/20 bg-gradient-to-br from-[#101724] via-[#121a28] to-[#0e1420] p-5 md:p-7 text-neutral-200 shadow-2xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-800 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">
            <span>⚖️ Mục IV • Cân Bằng Tải (Load Balancing)</span>
          </div>
          <h3 className="mt-2 text-xl font-bold tracking-tight text-white md:text-2xl">
            Trình Giả Lập Cân Bằng Tải Thời Gian Thực
          </h3>
          <p className="mt-1 text-sm text-neutral-400">
            Khẩu quyết: <strong className="text-blue-300">Load Balancing = Phân phối tải + High Availability + Fault Tolerance + Bảo mật</strong>
          </p>
        </div>

        {/* Tabs */}
        <div className="flex rounded-xl bg-neutral-900/90 p-1 border border-neutral-800">
          <button
            onClick={() => setActiveTab("simulator")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === "simulator"
                ? "bg-blue-600 text-white shadow-md"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <span>🕹️ Giả Lập Lưu Lượng</span>
          </button>
          <button
            onClick={() => setActiveTab("algorithms")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === "algorithms"
                ? "bg-indigo-600 text-white shadow-md"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <span>🧮 3 Thuật Toán</span>
          </button>
          <button
            onClick={() => setActiveTab("benefits")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === "benefits"
                ? "bg-emerald-600 text-white shadow-md"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <span>🌟 5 Lợi Ích Cốt Lõi</span>
          </button>
        </div>
      </div>

      {/* TAB 1: INTERACTIVE SIMULATOR */}
      {activeTab === "simulator" && (
        <div className="mt-6 space-y-5 rounded-2xl border border-blue-500/30 bg-neutral-900/80 p-5 md:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-800 pb-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                Bộ Điều Phối Lưu Lượng (Traffic Dispatcher)
              </span>
              <h4 className="text-base font-bold text-white mt-0.5">
                Mô Phỏng Phân Phối Request &amp; Tự Động Cô Lập Máy Chủ Lỗi
              </h4>
            </div>

            {/* Algorithm Selector in Simulator */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-neutral-400 font-semibold hidden sm:inline">Thuật toán:</span>
              <select
                value={algorithm}
                onChange={(e) => setAlgorithm(e.target.value)}
                className="rounded-lg border border-neutral-700 bg-neutral-800 px-3 py-1.5 text-xs font-bold text-white focus:border-blue-500 focus:outline-none"
              >
                <option value="round-robin">Round Robin (Tuần Tự)</option>
                <option value="least-connections">Least Connections (Ít Kết Nối Nhất)</option>
                <option value="ip-hash">IP Hash (Phiên Cố Định)</option>
              </select>
            </div>
          </div>

          {/* Action Control Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-2.5">
            <div className="flex items-center gap-2">
              <button
                onClick={handleSendTraffic}
                className="flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-95 px-4 py-2 text-xs font-bold text-white shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
              >
                <span>⚡ Bắn Request (Gửi Traffic)</span>
              </button>
              <button
                onClick={() => setDdosProtection(!ddosProtection)}
                className={`rounded-xl border px-3 py-2 text-xs font-semibold transition-all ${
                  ddosProtection
                    ? "border-emerald-500/40 bg-emerald-950/40 text-emerald-300"
                    : "border-neutral-700 bg-neutral-800 text-neutral-400"
                }`}
              >
                {ddosProtection ? "🛡️ Chống DDoS: BẬT" : "🛡️ Chống DDoS: TẮT"}
              </button>
            </div>
            <span className="text-[11px] text-neutral-400">
              Nhấp vào nút &apos;Tắt/Bật Server&apos; bên dưới để thử nghiệm cơ chế Health Check!
            </span>
          </div>

          {/* 3 Backend Servers Display Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
            {servers.map((srv) => {
              const isHealthy = srv.status === "healthy";
              const isTargeted = lastAssigned === srv.id;
              return (
                <div
                  key={srv.id}
                  className={`rounded-2xl border p-4 space-y-3 transition-all ${
                    !isHealthy
                      ? "border-rose-500/40 bg-rose-950/20 opacity-70"
                      : isTargeted
                      ? "border-blue-500 bg-blue-950/50 shadow-lg shadow-blue-950/40 ring-1 ring-blue-500"
                      : "border-neutral-800 bg-black/40"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">🖥️</span>
                      <div>
                        <h5 className="text-xs font-bold text-white">{srv.name}</h5>
                        <span className="text-[10px] font-mono text-neutral-400">{srv.ip}</span>
                      </div>
                    </div>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                        isHealthy
                          ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-300"
                          : "bg-rose-500/20 border-rose-500/40 text-rose-300 animate-pulse"
                      }`}
                    >
                      {isHealthy ? "HEALTHY (200 OK)" : "CRASHED (SẬP)"}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs border-y border-neutral-800/80 py-2">
                    <div>
                      <span className="text-[10px] text-neutral-400 block">Active Conns:</span>
                      <span className="text-sm font-bold text-blue-400">{srv.activeConns}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-neutral-400 block">Đã Xử Lý:</span>
                      <span className="text-sm font-bold text-white">{srv.totalProcessed} reqs</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleToggleServer(srv.id)}
                    className={`w-full py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      isHealthy
                        ? "border border-rose-500/30 bg-rose-950/30 text-rose-300 hover:bg-rose-900/50"
                        : "border border-emerald-500/30 bg-emerald-950/30 text-emerald-300 hover:bg-emerald-900/50"
                    }`}
                  >
                    {isHealthy ? "💥 Giả Lập Sập Server" : "🔄 Phục Hồi Server"}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Real-time Routing Console Log */}
          <div className="rounded-xl border border-neutral-800 bg-black/80 p-3.5 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-2 text-[11px] text-neutral-400">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-blue-500 animate-ping" />
                <span>Load Balancer Real-time Routing Stream</span>
              </span>
              <span>Health Check Interval: 5s</span>
            </div>
            <div className="mt-2.5 space-y-1 max-h-32 overflow-y-auto text-[11px]">
              {trafficLogs.map((log, i) => (
                <div
                  key={i}
                  className={
                    log.includes("503")
                      ? "text-rose-400 font-bold"
                      : log.includes("FAILED")
                      ? "text-rose-300"
                      : log.includes("Recovered")
                      ? "text-emerald-400 font-bold"
                      : "text-neutral-300"
                  }
                >
                  {log}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: 3 THUẬT TOÁN PHỔ BIẾN */}
      {activeTab === "algorithms" && (
        <div className="mt-6 space-y-4">
          {algorithmsList.map((alg) => (
            <div
              key={alg.id}
              className="rounded-2xl border border-neutral-800 bg-neutral-900/70 p-5 space-y-2.5"
            >
              <div className="flex items-center justify-between border-b border-neutral-800 pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{alg.icon}</span>
                  <h4 className="text-xs font-bold text-white">{alg.name}</h4>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  {alg.badge}
                </span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">{alg.desc}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
                <div className="rounded-lg bg-emerald-950/20 border border-emerald-500/20 p-2.5">
                  <strong className="text-emerald-400 block mb-0.5">👍 Ưu Điểm:</strong>
                  <span className="text-neutral-300">{alg.pros}</span>
                </div>
                <div className="rounded-lg bg-rose-950/20 border border-rose-500/20 p-2.5">
                  <strong className="text-rose-400 block mb-0.5">👎 Hạn Chế:</strong>
                  <span className="text-neutral-300">{alg.cons}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 3: 5 LỢI ÍCH CỐT LÕI */}
      {activeTab === "benefits" && (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {coreBenefits.map((b, i) => (
            <div
              key={i}
              className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4 space-y-2 hover:border-emerald-500/30 transition-all"
            >
              <span className="text-2xl">{b.icon}</span>
              <h5 className="text-xs font-bold text-white pt-1">{b.title}</h5>
              <p className="text-xs text-neutral-400 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
