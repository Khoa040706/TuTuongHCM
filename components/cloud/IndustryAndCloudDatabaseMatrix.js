"use client";
import React, { useState } from "react";

export default function IndustryAndCloudDatabaseMatrix() {
  const [activeMode, setActiveMode] = useState("industry"); // 'industry' | 'database_arena'
  const [selectedApp, setSelectedApp] = useState("supply_chain"); // 'supply_chain' | 'production' | 'predictive' | 'big_data'
  const [selectedCloudDb, setSelectedCloudDb] = useState("aws"); // 'aws' | 'azure' | 'gcp'
  const [backupFrequency, setBackupFrequency] = useState("daily"); // 'hourly' | 'daily' | 'weekly'
  const [isBackupRunning, setIsBackupRunning] = useState(false);
  const [lastBackupLog, setLastBackupLog] = useState(null);

  const industryApps = {
    supply_chain: {
      title: "1. Quản lý chuỗi cung ứng (Supply Chain Management)",
      tag: "Logistics & Kho Vận",
      icon: "🚢",
      desc: "Theo dõi vị trí container, đơn hàng và lượng hàng tồn kho đa quốc gia trong thời gian thực qua kết nối cảm biến GPS/RFID gửi về kho Cloud Storage trung tâm.",
      dataFlow: "Sensors/RFID → Edge Gateway → Cloud Storage Bucket → Analytics Dashboard",
      benefits: ["Khả năng mở rộng (Scalability)", "Truy cập linh hoạt (Flexible Access)"],
      challengeTackled: "Giải quyết bài toán phân tán địa lý và tích hợp hệ thống (Integration) giữa hàng ngàn nhà cung ứng đối tác.",
      solution: "Sử dụng giải pháp tích hợp (Integrated solution) và API chuẩn hóa kết nối các hệ thống ERP đối tác."
    },
    production: {
      title: "2. Quản lý sản xuất (Production Management)",
      tag: "Nhà máy thông minh (Smart Factory)",
      icon: "🏭",
      desc: "Thu thập liên tục các tham số máy móc công nghiệp (nhiệt độ, áp suất, tốc độ vòng quay, sản lượng từng ca) để tối ưu hóa dây chuyền lắp ráp tự động.",
      dataFlow: "PLC/SCADA → Industrial IoT Gateway → Time-Series Cloud DB → Production Cockpit",
      benefits: ["Tiết kiệm chi phí (Cost Efficiency)", "Tăng cường bảo mật (Enhanced Security)"],
      challengeTackled: "Độ trễ (Latency): Cần xử lý dữ liệu cận thời gian thực để can thiệp kịp thời vào dây chuyền sản xuất.",
      solution: "Kết hợp Edge Storage tại nhà máy với Cloud Storage đồng bộ, giảm độ trễ dưới 20ms."
    },
    predictive: {
      title: "3. Bảo trì dự đoán (Predictive Maintenance)",
      tag: "Cảm biến IoT & Học máy",
      icon: "🔮",
      desc: "Phân tích độ rung và hao mòn vi cơ khí của thiết bị qua mô hình Machine Learning huấn luyện trên dữ liệu lưu trữ lịch sử, cảnh báo hỏng hóc trước khi xảy ra sự cố.",
      dataFlow: "Vibration Sensors → MQTT Broker → Big Data Storage Lake → Predictive AI Model",
      benefits: ["Khả năng mở rộng (Scalability)", "Tiết kiệm chi phí bảo trì đột xuất"],
      challengeTackled: "Bảo mật dữ liệu (Data Security) và Độ trễ phân tích thời gian thực.",
      solution: "Triển khai Data management & security tools chuyên dụng mã hóa dữ liệu máy móc độc quyền."
    },
    big_data: {
      title: "4. Phân tích dữ liệu lớn (Big Data Analytics)",
      tag: "Hồ dữ liệu & Trí tuệ doanh nghiệp",
      icon: "📊",
      desc: "Tập hợp hàng Petabyte dữ liệu hành vi người dùng, giao dịch thương mại và thông số thị trường vào Cloud Data Lake để chạy các truy vấn phân tích sâu BI.",
      dataFlow: "Multi-Source Logs/APIs → Cloud Object Storage (S3/GCS/Blob) → Query Engine (Athena/BigQuery)",
      benefits: ["Truy cập linh hoạt (Flexible Access)", "Khả năng mở rộng vô hạn"],
      challengeTackled: "Tuân thủ quy định (Regulatory Compliance) đối với dữ liệu người dùng khổng lồ.",
      solution: "Áp dụng chiến lược Backup and recovery strategy và chính sách kiểm soát tuân thủ GDPR/ISO."
    }
  };

  const cloudDatabases = {
    aws: {
      name: "Amazon Web Services (AWS)",
      icon: "🟠",
      badge: "Tiên phong & Thị phần số 1",
      relational: "Amazon RDS (MySQL, PostgreSQL, Oracle), Amazon Aurora",
      nosql: "Amazon DynamoDB (Key-Value/Document đa vùng)",
      warehouse: "Amazon Redshift (Phân tích dữ liệu lớn PB)",
      managementTools: "AWS Database Migration Service (DMS), AWS Management Console, CloudWatch",
      backupStrategy: "Automated daily snapshots + Point-in-time recovery (PITR) trong 35 ngày",
      securityCompliance: "AWS KMS mã hóa At-rest, VPC Private Subnets, IAM Database Authentication"
    },
    azure: {
      name: "Microsoft Azure",
      icon: "🔵",
      badge: "Tích hợp doanh nghiệp tối ưu",
      relational: "Azure SQL Database, Azure Database for PostgreSQL/MySQL",
      nosql: "Azure Cosmos DB (Đa mô hình Multi-model, độ trễ SLA <10ms)",
      warehouse: "Azure Synapse Analytics (Hợp nhất Big Data & SQL DW)",
      managementTools: "Azure Data Studio, Azure Portal, Azure Monitor, Database Advisor",
      backupStrategy: "Tự động sao lưu định kỳ Full/Diff hàng tuần, LTR (Long-term retention) tới 10 năm",
      securityCompliance: "Always Encrypted, Microsoft Defender for SQL, Azure Active Directory"
    },
    gcp: {
      name: "Google Cloud Platform (GCP)",
      icon: "🔴",
      badge: "Đột phá Big Data & Toàn cầu hóa",
      relational: "Cloud SQL, Cloud Spanner (Toàn vẹn ACID phân tán toàn cầu)",
      nosql: "Cloud Firestore, Cloud Bigtable (Cực kỳ mạnh mẽ cho IoT)",
      warehouse: "Google BigQuery (Serverless SQL Data Warehouse siêu tốc)",
      managementTools: "Google Cloud Console, Database Center, Cloud Monitoring & Logging",
      backupStrategy: "Automated backups định kỳ hàng ngày, lưu trữ phân tán đa vùng Multi-region",
      securityCompliance: "Customer-Managed Encryption Keys (CMEK), Cloud IAM, VPC Service Controls"
    }
  };

  const handleSimulateRegularBackup = () => {
    setIsBackupRunning(true);
    setTimeout(() => {
      setIsBackupRunning(false);
      const timestamp = new Date().toLocaleTimeString("vi-VN");
      setLastBackupLog({
        provider: cloudDatabases[selectedCloudDb].name,
        freq: backupFrequency,
        time: timestamp,
        status: "SUCCESS"
      });
    }, 1000);
  };

  return (
    <div className="my-8 rounded-2xl border border-indigo-500/20 bg-gradient-to-b from-slate-900/90 via-slate-950 to-slate-900/90 p-5 shadow-2xl backdrop-blur-xl sm:p-7 text-slate-100">
      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-indigo-500/20 pb-5">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-300">
            <span>Mục VI</span>
            <span className="h-1 w-1 rounded-full bg-indigo-400" />
            <span>Ứng Dụng Ngành Công Nghiệp & Tam Hùng Database</span>
          </div>
          <h3 className="mt-2 text-xl font-bold tracking-tight text-white sm:text-2xl">
            Industry Storage & Cloud Database Matrix
          </h3>
          <p className="text-xs text-indigo-200/70 sm:text-sm">
            4 Ứng dụng công nghiệp trọng điểm & Chiến trường Tam Hùng Cloud Database (AWS - Azure - GCP)
          </p>
        </div>

        {/* Mode Selector */}
        <div className="flex rounded-xl border border-slate-700/50 bg-slate-950/70 p-1">
          <button
            onClick={() => setActiveMode("industry")}
            className={`rounded-lg px-3.5 py-1.5 text-xs font-medium transition-all ${
              activeMode === "industry"
                ? "bg-indigo-500 text-white shadow-md shadow-indigo-500/30"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            🏭 6.1 Ngành Công Nghiệp
          </button>
          <button
            onClick={() => setActiveMode("database_arena")}
            className={`rounded-lg px-3.5 py-1.5 text-xs font-medium transition-all ${
              activeMode === "database_arena"
                ? "bg-indigo-500 text-white shadow-md shadow-indigo-500/30"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            🏛️ 6.2 Tam Hùng Database
          </button>
        </div>
      </div>

      {/* MODE 1: INDUSTRY CLOUD STORAGE (MỤC VI.1) */}
      {activeMode === "industry" && (
        <div className="mt-6 space-y-6">
          {/* 4 Application Selector Tabs */}
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {Object.entries(industryApps).map(([key, app]) => {
              const isSelected = selectedApp === key;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedApp(key)}
                  className={`rounded-xl border p-3 text-left transition-all ${
                    isSelected
                      ? "border-indigo-400 bg-indigo-500/15 shadow-md shadow-indigo-500/20 ring-1 ring-indigo-400/40"
                      : "border-slate-800 bg-slate-900/60 hover:border-slate-700 hover:bg-slate-800/40"
                  }`}
                >
                  <div className="text-xl">{app.icon}</div>
                  <div className="mt-1 text-xs font-bold text-white truncate">{app.tag}</div>
                  <div className="text-[10px] text-slate-400">Ứng dụng {key === "supply_chain" ? 1 : key === "production" ? 2 : key === "predictive" ? 3 : 4}</div>
                </button>
              );
            })}
          </div>

          {/* Active Application Detail Panel */}
          <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{industryApps[selectedApp].icon}</span>
                <h4 className="font-bold text-white text-base">
                  {industryApps[selectedApp].title}
                </h4>
              </div>
              <span className="rounded-full bg-indigo-500/20 px-2.5 py-0.5 text-[11px] font-semibold text-indigo-300">
                {industryApps[selectedApp].tag}
              </span>
            </div>

            <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
              {industryApps[selectedApp].desc}
            </p>

            {/* Realtime Dataflow Pipeline */}
            <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900/50 p-3.5">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                LUỒNG DỮ LIỆU THỜI GIAN THỰC (REAL-TIME DATAFLOW)
              </span>
              <div className="mt-2 font-mono text-xs text-sky-300 bg-slate-950/80 p-2.5 rounded-lg border border-slate-800/80 overflow-x-auto">
                {industryApps[selectedApp].dataFlow}
              </div>
            </div>

            {/* Dual Matrix: Challenge Tackled & Solution */}
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-red-500/20 bg-red-950/20 p-3.5">
                <div className="flex items-center gap-2 text-xs font-bold text-red-300">
                  <span>⚠️</span> Thách thức chính
                </div>
                <p className="mt-1 text-xs text-slate-300">
                  {industryApps[selectedApp].challengeTackled}
                </p>
              </div>

              <div className="rounded-xl border border-emerald-500/20 bg-emerald-950/20 p-3.5">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-300">
                  <span>🛡️</span> Giải pháp & Công cụ hỗ trợ
                </div>
                <p className="mt-1 text-xs text-slate-300">
                  {industryApps[selectedApp].solution}
                </p>
              </div>
            </div>
          </div>

          {/* 4 Core Industry Benefits & 4 Supporting Solutions Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* 4 Benefits */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
              <h5 className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                ⭐ 4 LỢI ÍCH CỐT LÕI (BENEFITS)
              </h5>
              <ul className="mt-3 space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  <strong>Khả năng mở rộng (Scalability):</strong> Co giãn dung lượng tức thì theo mùa vụ cao điểm.
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  <strong>Tiết kiệm chi phí (Cost Efficiency):</strong> Cắt giảm CAPEX, chỉ trả tiền theo lượng lưu thực tế.
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  <strong>Truy cập linh hoạt (Flexible Access):</strong> Truy xuất dữ liệu kho hàng mọi lúc, trên mọi thiết bị.
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  <strong>Tăng cường bảo mật (Enhanced Security):</strong> Kiểm soát phân quyền và mã hóa chuẩn doanh nghiệp.
                </li>
              </ul>
            </div>

            {/* 4 Solutions */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
              <h5 className="text-xs font-bold uppercase tracking-wider text-sky-400">
                🛠️ 4 GIẢI PHÁP & CÔNG CỤ HỖ TRỢ
              </h5>
              <ul className="mt-3 space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="text-sky-400">•</span>
                  <strong>Cloud storage providers:</strong> Hạ tầng lưu trữ cấp doanh nghiệp từ AWS, Azure, Google Cloud.
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sky-400">•</span>
                  <strong>Data management & security tools:</strong> Bộ công cụ quản lý metadata, DLP và kiểm toán dữ liệu.
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sky-400">•</span>
                  <strong>Backup and recovery strategy:</strong> Kế hoạch dự phòng thảm họa bảo đảm liên tục kinh doanh.
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sky-400">•</span>
                  <strong>Integrated solution:</strong> Giải pháp tích hợp API đồng bộ ERP, CRM và SCADA.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* MODE 2: TAM HÙNG DATABASE ARENA (MỤC VI.2) */}
      {activeMode === "database_arena" && (
        <div className="mt-6 space-y-6">
          {/* Slogan Banner */}
          <div className="rounded-xl border border-amber-500/30 bg-amber-950/20 p-4 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
              🔑 KHẨU QUYẾT TRỌNG TÂM CẦN NHỚ
            </span>
            <div className="mt-1 text-base font-extrabold text-white">
              3 &quot;Ông lớn&quot; Cung Cấp Dịch Vụ Cloud Database: <span className="text-amber-400">AWS — Azure — GCP</span>
            </div>
          </div>

          {/* 3 Titan Providers Selector */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {Object.entries(cloudDatabases).map(([key, provider]) => {
              const isSelected = selectedCloudDb === key;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedCloudDb(key)}
                  className={`rounded-xl border p-4 text-left transition-all ${
                    isSelected
                      ? "border-amber-400 bg-amber-500/15 ring-2 ring-amber-400/40 shadow-lg shadow-amber-500/20"
                      : "border-slate-800 bg-slate-900/60 hover:border-slate-700 hover:bg-slate-800/40"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">{provider.icon}</span>
                    <span className="rounded bg-slate-800 px-2 py-0.5 text-[10px] text-slate-300">
                      {provider.badge}
                    </span>
                  </div>
                  <h4 className="mt-2 font-bold text-white text-base">{provider.name}</h4>
                  <div className="mt-2 text-xs text-slate-300 line-clamp-1">
                    {key === "aws" ? "Amazon RDS, Aurora, DynamoDB" : key === "azure" ? "Azure SQL, Cosmos DB, Synapse" : "Cloud SQL, Spanner, BigQuery"}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Provider Deep-Dive Card */}
          <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{cloudDatabases[selectedCloudDb].icon}</span>
                <h4 className="font-bold text-white text-base">
                  Bản Đồ Giải Pháp Database của {cloudDatabases[selectedCloudDb].name}
                </h4>
              </div>
              <span className="text-xs text-amber-400 font-mono">
                {cloudDatabases[selectedCloudDb].badge}
              </span>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 text-xs">
              <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-3.5">
                <div className="text-[11px] font-bold text-sky-400 uppercase">Cơ Sở Dữ Liệu Quan Hệ (RDBMS)</div>
                <div className="mt-1 font-semibold text-white">{cloudDatabases[selectedCloudDb].relational}</div>
                <p className="mt-1 text-[11px] text-slate-400">Đảm bảo chuẩn toàn vẹn giao dịch ACID nghiêm ngặt.</p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-3.5">
                <div className="text-[11px] font-bold text-emerald-400 uppercase">NoSQL &amp; Multi-Model</div>
                <div className="mt-1 font-semibold text-white">{cloudDatabases[selectedCloudDb].nosql}</div>
                <p className="mt-1 text-[11px] text-slate-400">Mở rộng quy mô theo chiều ngang không giới hạn.</p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-3.5">
                <div className="text-[11px] font-bold text-violet-400 uppercase">Kho Dữ Liệu (Data Warehouse)</div>
                <div className="mt-1 font-semibold text-white">{cloudDatabases[selectedCloudDb].warehouse}</div>
                <p className="mt-1 text-[11px] text-slate-400">Truy vấn phân tích siêu tốc trên dữ liệu Petabyte.</p>
              </div>
            </div>

            {/* Supporting Tools & Regular Backups Simulator */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                ⚙️ Công cụ quản trị &amp; Chiến lược Regular Backups (Sao lưu định kỳ)
              </h5>
              
              <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 text-xs">
                <div className="rounded-lg bg-slate-950/70 p-3 border border-slate-800">
                  <div className="font-bold text-indigo-300">Database Management Tools:</div>
                  <div className="mt-1 text-slate-300">{cloudDatabases[selectedCloudDb].managementTools}</div>
                </div>

                <div className="rounded-lg bg-slate-950/70 p-3 border border-slate-800">
                  <div className="font-bold text-emerald-300">Security &amp; Compliance Solutions:</div>
                  <div className="mt-1 text-slate-300">{cloudDatabases[selectedCloudDb].securityCompliance}</div>
                </div>
              </div>

              {/* Regular Backup Control Bar */}
              <div className="mt-4 rounded-xl border border-emerald-500/20 bg-emerald-950/20 p-3.5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="text-xs font-bold text-emerald-300">
                      Chiến lược sao lưu định kỳ (Regular Backups Strategy)
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Tự động hóa sao lưu để bảo vệ dữ liệu chống sự cố thảm họa
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <select
                      value={backupFrequency}
                      onChange={(e) => setBackupFrequency(e.target.value)}
                      disabled={isBackupRunning}
                      className="rounded-lg border border-slate-700 bg-slate-900 px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-emerald-400"
                    >
                      <option value="hourly">Hàng giờ (Hourly Snapshots)</option>
                      <option value="daily">Hàng ngày (Daily Regular Backup)</option>
                      <option value="weekly">Hàng tuần (Weekly Full Archive)</option>
                    </select>

                    <button
                      onClick={handleSimulateRegularBackup}
                      disabled={isBackupRunning}
                      className={`rounded-lg px-3 py-1.5 text-xs font-semibold text-white transition-all ${
                        isBackupRunning
                          ? "bg-slate-800 text-slate-500 cursor-not-allowed"
                          : "bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-600/30 active:scale-95"
                      }`}
                    >
                      {isBackupRunning ? "Đang sao lưu..." : "▶ Chạy Sao Lưu Ngay"}
                    </button>
                  </div>
                </div>

                {lastBackupLog && (
                  <div className="mt-3 rounded-lg bg-slate-950/80 p-2.5 font-mono text-[11px] text-emerald-300 border border-emerald-500/30">
                    [OK] {lastBackupLog.time} — Bản sao lưu định kỳ ({lastBackupLog.freq}) của {lastBackupLog.provider} đã lưu thành công vào Cloud Vault an toàn.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
