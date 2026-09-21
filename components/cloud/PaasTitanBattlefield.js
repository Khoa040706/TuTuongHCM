"use client";
import React, { useState } from "react";

export default function PaasTitanBattlefield() {
  const [activeTitan, setActiveTitan] = useState("gae"); // 'gae' | 'azure' | 'openshift' | 'ibm'
  const [viewMode, setViewMode] = useState("profile"); // 'profile' | 'matrix'

  const titans = {
    gae: {
      id: "gae",
      name: "Google App Engine (GAE)",
      company: "Google Cloud Platform",
      logo: "🇬",
      badge: "Tiên Phong Auto-Scaling",
      badgeColor: "bg-red-500/20 text-red-400 border-red-500/30",
      foundation: "Nền tảng PaaS đầu tiên của Google (ra mắt 2008), hoàn toàn serverless không cần cấu hình.",
      environments: "2 Môi trường: Standard (Sandbox cực nhẹ, co giãn từ 0 trong mili-giây) & Flexible (Chạy Docker container tùy biến).",
      languages: "Python, Java, Node.js, Go, PHP, Ruby, .NET",
      killerFeatures: [
        "Co giãn tức thời (Instant Auto-scaling) từ 0 bản sao lên hàng triệu requests.",
        "Traffic Splitting: Phân chia lưu lượng phần trăm linh hoạt cho A/B Testing giữa các Version mà không cần reload.",
        "Tích hợp sâu hệ sinh thái Google: Cloud Datastore, Firestore, Cloud Tasks, BigQuery."
      ],
      pros: "Cực kỳ dễ dùng, không cần kiến thức DevOps/máy chủ, co giãn không đối thủ.",
      cons: "Môi trường Standard có rủi ro Vendor Lock-in với các API nội bộ của Google.",
      examGotcha: "Đặc điểm nổi bật nhất: Version management & Traffic Splitting cho phép chạy song song nhiều phiên bản ứng dụng."
    },
    azure: {
      id: "azure",
      name: "Microsoft Azure (App Service)",
      company: "Microsoft Corporation",
      logo: "🔷",
      badge: "Toàn Diện Cấp Doanh Nghiệp",
      badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      foundation: "Nền tảng đám mây toàn diện kết hợp cả IaaS, PaaS và SaaS của Microsoft (ra mắt 2010).",
      environments: "Azure App Service (Web Apps, API Apps, Mobile Apps) chạy trên cả Windows Server và Linux containers.",
      languages: ".NET, .NET Core, Java, Node.js, Python, PHP",
      killerFeatures: [
        "Hỗ trợ số 1 thế giới cho hệ sinh thái Microsoft (.NET, C#, Visual Studio, SQL Server).",
        "Tích hợp hoàn hảo với GitHub Actions và Azure DevOps CI/CD pipeline tự động.",
        "Bảo mật cấp tập đoàn với Microsoft Entra ID (Azure AD), mạng ảo VNet và tuân thủ chứng chỉ toàn cầu."
      ],
      pros: "Hệ sinh thái phong phú nhất, tương thích tuyệt vời với các phần mềm doanh nghiệp sẵn có.",
      cons: "Giao diện Portal đồ sộ, nhiều cấu hình phức tạp, chi phí tăng nhanh nếu không tối ưu SKU.",
      examGotcha: "Đặc điểm nổi bật nhất: Nền tảng toàn diện tích hợp IaaS+PaaS+SaaS, gắn kết sâu sắc với Active Directory và .NET."
    },
    openshift: {
      id: "openshift",
      name: "Red Hat OpenShift",
      company: "Red Hat (IBM Subsidiary)",
      logo: "🔴",
      badge: "Chuẩn Mực Kubernetes Doanh Nghiệp",
      badgeColor: "bg-rose-500/20 text-rose-400 border-rose-500/30",
      foundation: "Nền tảng PaaS mã nguồn mở hàng đầu được xây dựng trực tiếp trên nền tảng **Kubernetes** và Docker.",
      environments: "Kubernetes cluster chuẩn doanh nghiệp: Chạy trên Bare-metal, VMware, AWS, GCP, Azure hoặc Hybrid Cloud.",
      languages: "Mọi ngôn ngữ (Hỗ trợ qua Dockerfile, Source-to-Image - S2I, Buildpacks)",
      killerFeatures: [
        "Kiến trúc thuần Kubernetes: Điều phối container mạnh mẽ, hỗ trợ Service Mesh (Istio) và Ingress.",
        "Mã nguồn mở và linh hoạt tối đa: Triển khai tự do trên Private Data Center lẫn Public Cloud (Chống Lock-in tuyệt đối).",
        "Quản lý vòng đời toàn diện: Tích hợp sẵn Tekton CI/CD, Prometheus Monitoring, Grafana Dashboard."
      ],
      pros: "Độ linh hoạt cao nhất, kiểm soát tuyệt đối, khả năng di chuyển (portability) xuất sắc.",
      cons: "Đòi hỏi đội ngũ kỹ sư có chuyên môn sâu về Kubernetes; chi phí bản quyền Red Hat Enterprise cao.",
      examGotcha: "Đặc điểm nổi bật nhất: PaaS xây dựng trên nền tảng KUBERNETES, hỗ trợ hoàn hảo Hybrid & Multi-Cloud."
    },
    ibm: {
      id: "ibm",
      name: "IBM Cloud Foundry",
      company: "IBM Corporation",
      logo: "🟦",
      badge: "Vòng Đời Ứng Dụng & Watson AI",
      badgeColor: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
      foundation: "Nền tảng PaaS mã nguồn mở của IBM dựa trên chuẩn Cloud Foundry, tối ưu hóa cho vòng đời ứng dụng.",
      environments: "Cloud Foundry Droplets & Buildpacks môi trường đám mây doanh nghiệp (IBM Cloud).",
      languages: "Java, Node.js, Python, PHP, Ruby, Go, Swift",
      killerFeatures: [
        "Tích hợp sức mạnh Trí tuệ Nhân tạo IBM Watson AI (xử lý ngôn ngữ tự nhiên, phân tích dữ liệu chuyên sâu).",
        "Quản lý vòng đời ứng dụng từ lúc phát triển, kiểm thử, giám sát đến mở rộng một cách chặt chẽ.",
        "Đáp ứng các tiêu chuẩn bảo mật và tuân thủ tài chính, ngân hàng, y tế khắt khe nhất."
      ],
      pros: "Sức mạnh trí tuệ nhân tạo Watson độc quyền, độ bảo mật và uy tín truyền thống với khối ngân hàng.",
      cons: "Hệ sinh thái Cloud Foundry đang dần bị lấn át bởi sự thống trị của Kubernetes.",
      examGotcha: "Đặc điểm nổi bật nhất: Nền tảng PaaS mã nguồn mở của IBM, tích hợp độc quyền trí tuệ nhân tạo IBM Watson AI."
    }
  };

  const current = titans[activeTitan];

  return (
    <div className="my-8 rounded-2xl border border-blue-500/20 bg-gradient-to-br from-[#10151c] via-[#121820] to-[#0d1217] p-5 md:p-7 text-neutral-200 shadow-2xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-800 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">
            <span>🏛️ Mục IV • Mô Hình PaaS Thực Tế</span>
          </div>
          <h3 className="mt-2 text-xl font-bold tracking-tight text-white md:text-2xl">
            Võ Đài Đối Sánh: 4 Nền Tảng PaaS Tiêu Biểu Trong Thực Tế
          </h3>
          <p className="mt-1 text-sm text-neutral-400">
            Khảo sát 4 gã khổng lồ: Google App Engine, Microsoft Azure, Red Hat OpenShift &amp; IBM Cloud Foundry
          </p>
        </div>

        {/* View Mode */}
        <div className="flex rounded-xl bg-neutral-900/90 p-1 border border-neutral-800">
          <button
            onClick={() => setViewMode("profile")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              viewMode === "profile"
                ? "bg-blue-600 text-white shadow-md"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <span>👤 Chi Tiết Nền Tảng</span>
          </button>
          <button
            onClick={() => setViewMode("matrix")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              viewMode === "matrix"
                ? "bg-teal-600 text-white shadow-md"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <span>⚔️ Ma Trận Đối Đầu 4 Bên</span>
          </button>
        </div>
      </div>

      {/* TITAN SELECTOR BUTTONS */}
      <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-2">
        {Object.keys(titans).map((k) => {
          const t = titans[k];
          const isSelected = activeTitan === k;
          return (
            <button
              key={k}
              onClick={() => setActiveTitan(k)}
              className={`flex items-center gap-3 p-3 rounded-xl border text-left transition-all ${
                isSelected
                  ? "border-blue-500 bg-blue-950/60 shadow-lg shadow-blue-950/40 ring-1 ring-blue-500"
                  : "border-neutral-800 bg-neutral-900/50 hover:border-neutral-700"
              }`}
            >
              <span className="text-2xl">{t.logo}</span>
              <div>
                <span className="text-xs font-bold text-white block line-clamp-1">{t.name}</span>
                <span className="text-[10px] text-neutral-400 block">{t.company}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* VIEW 1: PROFILE DEEP DIVE */}
      {viewMode === "profile" && (
        <div className="mt-6 space-y-5 rounded-2xl border border-blue-500/30 bg-neutral-900/80 p-5 md:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-800 pb-4">
            <div>
              <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">{current.company}</span>
              <h4 className="text-xl font-black text-white mt-0.5">{current.name}</h4>
              <p className="text-xs text-neutral-300 mt-1">{current.foundation}</p>
            </div>
            <span className={`self-start sm:self-auto px-3 py-1 rounded-full border text-xs font-bold ${current.badgeColor}`}>
              {current.badge}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="rounded-xl border border-neutral-800 bg-black/40 p-4 space-y-2">
              <span className="text-neutral-400 font-semibold block uppercase tracking-wider text-[10px]">
                Môi Trường Thực Thi (Execution Environment):
              </span>
              <p className="text-neutral-200 leading-relaxed">{current.environments}</p>
              <span className="text-neutral-400 font-semibold block uppercase tracking-wider text-[10px] pt-2">
                Ngôn Ngữ Hỗ Trợ:
              </span>
              <span className="text-blue-300 font-mono text-[11px] block">{current.languages}</span>
            </div>

            <div className="rounded-xl border border-neutral-800 bg-black/40 p-4 space-y-2">
              <span className="text-emerald-400 font-semibold block uppercase tracking-wider text-[10px]">
                Tính Năng Cốt Lõi (Core Features):
              </span>
              <ul className="space-y-1.5 text-neutral-300">
                {current.killerFeatures.map((kf, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>{kf}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="rounded-xl border border-emerald-500/20 bg-emerald-950/20 p-3">
              <strong className="text-emerald-400 block mb-0.5">👍 Ưu Điểm Lớn:</strong>
              <p className="text-neutral-300">{current.pros}</p>
            </div>
            <div className="rounded-xl border border-rose-500/20 bg-rose-950/20 p-3">
              <strong className="text-rose-400 block mb-0.5">👎 Hạn Chế Cần Lưu Ý:</strong>
              <p className="text-neutral-300">{current.cons}</p>
            </div>
          </div>

          <div className="rounded-xl border border-amber-500/30 bg-amber-950/20 p-3.5 text-xs">
            <strong className="text-amber-400 uppercase tracking-wider block mb-1 flex items-center gap-1.5">
              <span>🎯</span> TỪ KHÓA BẮT BUỘC NHỚ KHI ĐI THI:
            </strong>
            <p className="text-amber-200/90 leading-relaxed font-medium">{current.examGotcha}</p>
          </div>
        </div>
      )}

      {/* VIEW 2: 4-WAY COMPARISON MATRIX */}
      {viewMode === "matrix" && (
        <div className="mt-6 overflow-x-auto rounded-2xl border border-neutral-800">
          <table className="w-full text-left text-xs">
            <thead className="bg-neutral-950 text-neutral-400 border-b border-neutral-800 uppercase tracking-wider text-[10px]">
              <tr>
                <th className="p-3">Tiêu Chí</th>
                <th className="p-3 text-red-400">Google App Engine</th>
                <th className="p-3 text-blue-400">Microsoft Azure</th>
                <th className="p-3 text-rose-400">Red Hat OpenShift</th>
                <th className="p-3 text-cyan-400">IBM Cloud Foundry</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800 text-neutral-300 bg-neutral-900/60">
              <tr>
                <td className="p-3 font-semibold text-white">Kiến Trúc Nền Tảng</td>
                <td className="p-3">Serverless / Container Sandbox</td>
                <td className="p-3">Azure App Service (IaaS+PaaS+SaaS)</td>
                <td className="p-3 text-rose-300 font-bold">Kubernetes Native</td>
                <td className="p-3">Cloud Foundry Buildpacks</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-white">Mức Độ Tự Động Co Giãn</td>
                <td className="p-3 text-emerald-300 font-bold">Nhanh nhất (0 ➔ N trong giây)</td>
                <td className="p-3">Quy mô theo VM Plan / Rules</td>
                <td className="p-3">HPA (Horizontal Pod Autoscaler)</td>
                <td className="p-3">Co giãn theo Instance Count</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-white">Thế Mạnh Hệ Sinh Thái</td>
                <td className="p-3">Google Datastore, BigQuery</td>
                <td className="p-3 text-blue-300 font-bold">.NET, Visual Studio, Azure AD</td>
                <td className="p-3">Mã nguồn mở, Docker, Istio</td>
                <td className="p-3 text-cyan-300 font-bold">IBM Watson AI, Phân tích dữ liệu</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-white">Khả Năng Chống Lock-in</td>
                <td className="p-3 text-neutral-400">Trung bình (Dính Standard API)</td>
                <td className="p-3 text-neutral-400">Trung bình (Dính Azure SDK)</td>
                <td className="p-3 text-emerald-300 font-bold">Rất cao (Chạy K8s mọi nơi)</td>
                <td className="p-3 text-emerald-300">Cao (Chuẩn Cloud Foundry)</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-white">Đối Tượng Phù Hợp</td>
                <td className="p-3">Web/API cần co giãn đột biến</td>
                <td className="p-3">Khối doanh nghiệp dùng Windows/.NET</td>
                <td className="p-3">Tập đoàn cần Hybrid &amp; K8s</td>
                <td className="p-3">Ngân hàng, bảo hiểm dùng AI Watson</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
