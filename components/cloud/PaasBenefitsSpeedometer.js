"use client";
import React, { useState, useEffect } from "react";

export default function PaasBenefitsSpeedometer() {
  const [activeTab, setActiveTab] = useState("cicd-simulator"); // 'cicd-simulator' | 'multi-lang' | 'roi-calculator'
  
  // CI/CD Simulation State
  const [deployStep, setDeployStep] = useState(0); // 0: Idle, 1: Git Push, 2: Container Build, 3: Auto Tests, 4: Live Ingress
  const [isDeploying, setIsDeploying] = useState(false);
  const [deployLogs, setDeployLogs] = useState([]);

  // Multi-Language State
  const [selectedLang, setSelectedLang] = useState("nodejs");

  const languages = [
    {
      id: "nodejs",
      name: "Node.js (JavaScript/TS)",
      icon: "🟢",
      runtimes: ["Node.js 20 LTS", "Node.js 22 Current", "Bun", "Deno"],
      frameworks: ["Express.js", "Next.js", "NestJS", "Fastify"],
      buildTool: "npm / pnpm / yarn",
      paasFeature: "Tự động phân tích package.json, tối ưu hóa dependencies cache và start script."
    },
    {
      id: "python",
      name: "Python",
      icon: "🐍",
      runtimes: ["Python 3.10", "Python 3.11", "Python 3.12"],
      frameworks: ["Django", "FastAPI", "Flask", "Tornado"],
      buildTool: "pip / poetry / pipenv",
      paasFeature: "Tự nhận diện requirements.txt hoặc Pipfile, tự động cấu hình WSGI/ASGI server (Gunicorn/Uvicorn)."
    },
    {
      id: "java",
      name: "Java (JVM)",
      icon: "☕",
      runtimes: ["OpenJDK 17 LTS", "OpenJDK 21 LTS", "GraalVM Native"],
      frameworks: ["Spring Boot", "Quarkus", "Micronaut", "Jakarta EE"],
      buildTool: "Maven / Gradle",
      paasFeature: "Tự động chạy maven wrapper `./mvnw package`, tối ưu hóa JVM memory flag theo RAM của container."
    },
    {
      id: "dotnet",
      name: ".NET (.NET Core)",
      icon: "🔷",
      runtimes: [".NET 8.0 LTS", ".NET 9.0 Standard", ".NET Core 3.1"],
      frameworks: ["ASP.NET Core Web API", "Blazor Server", "Worker Services"],
      buildTool: "dotnet CLI / MSBuild",
      paasFeature: "Tích hợp hoàn hảo với Visual Studio, tự động publish profile và cấu hình Kestrel reverse proxy."
    },
    {
      id: "ruby",
      name: "Ruby",
      icon: "💎",
      runtimes: ["Ruby 3.2", "Ruby 3.3"],
      frameworks: ["Ruby on Rails", "Sinatra", "Hanami"],
      buildTool: "Bundler / Gemfile",
      paasFeature: "Tự động biên dịch assets pipeline (`rake assets:precompile`) và quản lý Puma web server."
    },
    {
      id: "go",
      name: "Golang",
      icon: "🦫",
      runtimes: ["Go 1.21", "Go 1.22"],
      frameworks: ["Gin", "Fiber", "Echo", "Chi"],
      buildTool: "go mod download / go build",
      paasFeature: "Tạo file nhị phân tĩnh (Static binary) siêu nhẹ, đóng gói vào scratch container chỉ khoảng 15MB."
    }
  ];

  // 4 Nhóm lợi ích chính từ giáo trình
  const coreBenefits = [
    {
      id: "cost",
      title: "1. Tiết Kiệm Chi Phí (Cost Savings)",
      icon: "💰",
      stat: "Giảm 65% TCO",
      desc: "Chuyển đổi hoàn toàn từ vốn đầu tư cố định (CAPEX) sang chi phí vận hành định kỳ (OPEX). Thanh toán theo tài nguyên thực dùng (Pay-as-you-go). Loại bỏ chi phí thuê đội ngũ quản trị phần cứng chuyên trách."
    },
    {
      id: "flex",
      title: "2. Tăng Tính Linh Hoạt (Flexibility & Scalability)",
      icon: "📈",
      stat: "Co Giãn 0 ➔ 10,000+ Req",
      desc: "Tự động co giãn (Auto-scaling) theo số lượng yêu cầu của khách hàng trong tích tắc. Hỗ trợ đa ngôn ngữ lập trình trên cùng một nền tảng. Thích ứng hoàn hảo với phương pháp phát triển Agile/Scrum."
    },
    {
      id: "time",
      title: "3. Tiết Kiệm Thời Gian (Fast Time-to-Market)",
      icon: "⚡",
      stat: "Từ 8 Tuần ➔ 5 Phút",
      desc: "Tích hợp sẵn bộ công cụ IDE, gỡ lỗi (debugger) và dịch vụ quản trị. Cơ chế triển khai một chạm (One-Click Deployment) qua Git giúp lập trình viên đưa ý tưởng ra thị trường nhanh gấp nhiều lần."
    },
    {
      id: "infra",
      title: "4. Không Cần Quản Lý Hạ Tầng (Zero Infra Ops)",
      icon: "🛡️",
      stat: "100% Tập Trung Code",
      desc: "Nhà cung cấp đám mây chịu trách nhiệm vá lỗi bảo mật hệ điều hành, sao lưu CSDL và đảm bảo phần cứng liên tục hoạt động. Lập trình viên không phải thức đêm trực bảo trì máy chủ vật lý."
    }
  ];

  // Simulator Handler
  const handleStartDeploy = () => {
    if (isDeploying) return;
    setIsDeploying(true);
    setDeployStep(1);
    setDeployLogs(["[00:00.100] Initiating deployment via git push origin main..."]);

    setTimeout(() => {
      setDeployStep(2);
      setDeployLogs((prev) => [
        ...prev,
        "[00:00.850] Detecting runtime stack: " + languages.find(l => l.id === selectedLang).name,
        "[00:01.200] Building optimized container image via Cloud Native Buildpacks..."
      ]);
    }, 1000);

    setTimeout(() => {
      setDeployStep(3);
      setDeployLogs((prev) => [
        ...prev,
        "[00:02.100] Executing automated unit & integration test suites...",
        "[00:02.450] Tests PASSED: 48/48 specifications green (0 failures)."
      ]);
    }, 2000);

    setTimeout(() => {
      setDeployStep(4);
      setDeployLogs((prev) => [
        ...prev,
        "[00:03.000] Traffic switched to new revision (Zero Downtime Rolling Update).",
        "[00:03.150] Health check 200 OK. Application is LIVE at https://app.paas.cloud!"
      ]);
      setIsDeploying(false);
    }, 3200);
  };

  return (
    <div className="my-8 rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-[#121915] via-[#141d19] to-[#0f1512] p-5 md:p-7 text-neutral-200 shadow-2xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-800 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
            <span>⚡ Mục II • Lợi Ích Cốt Lõi</span>
          </div>
          <h3 className="mt-2 text-xl font-bold tracking-tight text-white md:text-2xl">
            Bàn Đo Lợi Ích PaaS: One-Click CI/CD &amp; Đa Ngôn Ngữ
          </h3>
          <p className="mt-1 text-sm text-neutral-400">
            Khám phá 4 nhóm lợi ích lớn nhất: Tiết kiệm chi phí, Tăng tính linh hoạt, Tiết kiệm thời gian &amp; Zero Infra
          </p>
        </div>

        {/* Feature Tabs */}
        <div className="flex rounded-xl bg-neutral-900/90 p-1 border border-neutral-800">
          <button
            onClick={() => setActiveTab("cicd-simulator")}
            className={`flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
              activeTab === "cicd-simulator"
                ? "bg-emerald-600 text-white shadow-md"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <span>🚀 CI/CD One-Click</span>
          </button>
          <button
            onClick={() => setActiveTab("multi-lang")}
            className={`flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
              activeTab === "multi-lang"
                ? "bg-teal-600 text-white shadow-md"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <span>🌐 Đa Ngôn Ngữ</span>
          </button>
          <button
            onClick={() => setActiveTab("roi-calculator")}
            className={`flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
              activeTab === "roi-calculator"
                ? "bg-amber-600 text-white shadow-md"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <span>📊 Đối Soát ROI</span>
          </button>
        </div>
      </div>

      {/* 4 CORE BENEFITS BENTO OVERVIEW */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {coreBenefits.map((b) => (
          <div
            key={b.id}
            className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-4 transition-all hover:border-emerald-500/40"
          >
            <div className="flex items-center justify-between">
              <span className="text-2xl">{b.icon}</span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                {b.stat}
              </span>
            </div>
            <h4 className="text-xs font-bold text-white mt-2">{b.title}</h4>
            <p className="text-[11px] text-neutral-400 mt-1 leading-relaxed">
              {b.desc}
            </p>
          </div>
        ))}
      </div>

      {/* TAB 1: CI/CD DEPLOYMENT SIMULATOR */}
      {activeTab === "cicd-simulator" && (
        <div className="mt-6 space-y-4 rounded-2xl border border-emerald-500/30 bg-neutral-900/80 p-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Trình Giả Lập Tự Động Hóa One-Click Deployment
              </span>
              <h4 className="text-base font-bold text-white mt-0.5">
                Quy Trình Triển Khai Không Chạm (Zero-Touch CI/CD Pipeline)
              </h4>
            </div>

            <button
              onClick={handleStartDeploy}
              disabled={isDeploying}
              className={`flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold text-white transition-all shadow-lg ${
                isDeploying
                  ? "bg-neutral-700 cursor-not-allowed text-neutral-400"
                  : "bg-emerald-600 hover:bg-emerald-500 shadow-emerald-600/30 cursor-pointer active:scale-95"
              }`}
            >
              <span>{isDeploying ? "⏳ Đang Triển Khai..." : "🚀 Bấm Deploy Thử (1-Click)"}</span>
            </button>
          </div>

          {/* 4 Pipeline Steps */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 pt-2">
            {[
              { num: 1, title: "1. Git Push", desc: "Đẩy mã nguồn lên repository", icon: "📦" },
              { num: 2, title: "2. Buildpack", desc: "Tự động đóng gói container", icon: "⚙️" },
              { num: 3, title: "3. Auto Test", desc: "Chạy kiểm thử tích hợp", icon: "🧪" },
              { num: 4, title: "4. Live Traffic", desc: "Cấp phát Ingress & SSL", icon: "🌐" }
            ].map((st) => {
              const isCurrent = deployStep === st.num;
              const isPast = deployStep > st.num;
              return (
                <div
                  key={st.num}
                  className={`rounded-xl border p-3 transition-all ${
                    isCurrent
                      ? "border-emerald-500 bg-emerald-950/60 ring-1 ring-emerald-500"
                      : isPast
                      ? "border-teal-500/50 bg-teal-950/30"
                      : "border-neutral-800 bg-black/40 opacity-60"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg">{st.icon}</span>
                    <span
                      className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                        isPast
                          ? "bg-teal-500/20 text-teal-300"
                          : isCurrent
                          ? "bg-emerald-500 text-white animate-pulse"
                          : "bg-neutral-800 text-neutral-500"
                      }`}
                    >
                      {isPast ? "XONG ✓" : isCurrent ? "ĐANG CHẠY..." : "CHỜ"}
                    </span>
                  </div>
                  <h5 className="text-xs font-bold text-white mt-1.5">{st.title}</h5>
                  <p className="text-[10px] text-neutral-400 mt-0.5">{st.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Terminal Console Logs */}
          <div className="rounded-xl border border-neutral-800 bg-black/80 p-3.5 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-2 text-[11px] text-neutral-400">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                <span>PaaS Build Output Log</span>
              </span>
              <span>Runtime: {languages.find(l => l.id === selectedLang).name}</span>
            </div>
            <div className="mt-2.5 space-y-1 max-h-36 overflow-y-auto text-[11px]">
              {deployLogs.length === 0 ? (
                <span className="text-neutral-600 italic">
                  Nhấn nút &apos;Bấm Deploy Thử (1-Click)&apos; phía trên để chứng kiến quy trình tự động hóa của PaaS...
                </span>
              ) : (
                deployLogs.map((log, i) => (
                  <div
                    key={i}
                    className={
                      log.includes("LIVE") || log.includes("PASSED")
                        ? "text-emerald-400 font-bold"
                        : "text-neutral-300"
                    }
                  >
                    {log}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: MULTI-LANGUAGE SUPPORT */}
      {activeTab === "multi-lang" && (
        <div className="mt-6 space-y-5 rounded-2xl border border-teal-500/30 bg-neutral-900/80 p-5">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
              Đặc Tính Linh Hoạt Cốt Lõi
            </span>
            <h4 className="text-base font-bold text-white mt-0.5">
              Hỗ Trợ Đa Dạng Ngôn Ngữ Lập Trình &amp; Frameworks
            </h4>
            <p className="text-xs text-neutral-400 mt-1">
              PaaS cho phép các nhóm phát triển dùng ngôn ngữ thế mạnh của mình mà không cần cấu hình máy chủ từ đầu
            </p>
          </div>

          {/* Language Selector Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {languages.map((lang) => (
              <button
                key={lang.id}
                onClick={() => setSelectedLang(lang.id)}
                className={`flex flex-col items-center p-3 rounded-xl border transition-all ${
                  selectedLang === lang.id
                    ? "border-teal-500 bg-teal-950/60 shadow-md ring-1 ring-teal-500/50"
                    : "border-neutral-800 bg-neutral-900/50 hover:border-neutral-700"
                }`}
              >
                <span className="text-2xl mb-1">{lang.icon}</span>
                <span className="text-xs font-bold text-white text-center line-clamp-1">{lang.name.split(" (")[0]}</span>
              </button>
            ))}
          </div>

          {/* Selected Language Details */}
          {(() => {
            const cur = languages.find((l) => l.id === selectedLang);
            return (
              <div className="rounded-xl border border-neutral-800 bg-black/40 p-4 space-y-3">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{cur.icon}</span>
                    <div>
                      <h5 className="text-sm font-bold text-white">{cur.name}</h5>
                      <span className="text-xs text-neutral-400">Buildpack Tool: {cur.buildTool}</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-teal-400 bg-teal-500/10 border border-teal-500/30 px-3 py-1 rounded-full">
                    Zero Server Config
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div className="rounded-lg bg-neutral-900/80 p-3 border border-neutral-800">
                    <span className="text-neutral-400 font-semibold block mb-1.5">Phiên Bản Runtime Sẵn Có:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {cur.runtimes.map((rt, i) => (
                        <span key={i} className="rounded bg-neutral-800 px-2 py-0.5 text-neutral-200 text-[11px]">
                          {rt}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-lg bg-neutral-900/80 p-3 border border-neutral-800">
                    <span className="text-neutral-400 font-semibold block mb-1.5">Frameworks Tự Động Nhận Diện:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {cur.frameworks.map((fw, i) => (
                        <span key={i} className="rounded bg-teal-950/50 border border-teal-500/30 text-teal-300 px-2 py-0.5 text-[11px]">
                          {fw}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-teal-500/20 bg-teal-950/20 p-3 text-xs text-neutral-300">
                  <strong className="text-teal-400">Cơ chế PaaS thông minh:</strong> {cur.paasFeature}
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* TAB 3: ROI COMPARISON (ON-PREMISE VS PAAS) */}
      {activeTab === "roi-calculator" && (
        <div className="mt-6 space-y-4 rounded-2xl border border-amber-500/30 bg-neutral-900/80 p-5">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Đối Soát Tài Chính &amp; Vận Hành (ROI Matrix)
            </span>
            <h4 className="text-base font-bold text-white mt-0.5">
              Mô Hình Truyền Thống (On-Premise) vs Điện Toán PaaS
            </h4>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border border-neutral-800">
              <thead className="bg-neutral-950 text-neutral-400 border-b border-neutral-800 uppercase tracking-wider text-[10px]">
                <tr>
                  <th className="p-3">Tiêu Chí So Sánh</th>
                  <th className="p-3 text-rose-400">🏢 On-Premise / Thuê VPS Thô</th>
                  <th className="p-3 text-emerald-400">☁️ Nền Tảng PaaS Đám Mây</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800 text-neutral-300">
                <tr>
                  <td className="p-3 font-semibold text-white">Thời Gian Thiết Lập (Time-to-Market)</td>
                  <td className="p-3 text-neutral-400">4 đến 8 tuần (Mua máy chủ, cài OS, dựng mạng)</td>
                  <td className="p-3 text-emerald-300 font-bold">5 phút (Đẩy mã nguồn là chạy)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white">Chi Phí Đầu Tư Ban Đầu (CAPEX)</td>
                  <td className="p-3 text-neutral-400">Rất lớn ($10,000 - $50,000 mua phần cứng)</td>
                  <td className="p-3 text-emerald-300 font-bold">$0 (Mô hình OPEX, Pay-as-you-go)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white">Khả Năng Co Giãn (Scalability)</td>
                  <td className="p-3 text-neutral-400">Thủ công, mất nhiều ngày mua thêm RAM/CPU</td>
                  <td className="p-3 text-emerald-300 font-bold">Tự động (Auto-scaling trong vài giây)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white">Bảo Trì &amp; Vá Lỗi Hệ Thống</td>
                  <td className="p-3 text-neutral-400">Doanh nghiệp tự làm, nguy cơ bỏ sót 0-day</td>
                  <td className="p-3 text-emerald-300 font-bold">Nhà cung cấp tự động vá lỗi 24/7</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white">Đội Ngũ Nhân Sự Vận Hành</td>
                  <td className="p-3 text-neutral-400">Cần đội ngũ SysAdmin &amp; DevOps túc trực</td>
                  <td className="p-3 text-emerald-300 font-bold">Chỉ cần Lập trình viên tập trung viết Code</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
