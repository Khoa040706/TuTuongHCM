"use client";
import React, { useState } from "react";

export default function CloudDataSecurityShield() {
  const [activeTab, setActiveTab] = useState("threats_defense"); // 'threats_defense' | 'monitoring_ids' | 'compliance'
  const [activeThreat, setActiveThreat] = useState("leak"); // 'cyber_attack' | 'leak' | 'lost_data'
  const [shieldsActive, setShieldsActive] = useState({
    encryption: true,
    accessControl: true,
    backup: true
  });
  const [idsStatus, setIdsStatus] = useState("monitoring"); // 'monitoring' | 'alert' | 'blocked'
  const [selectedStandard, setSelectedStandard] = useState("gdpr");

  const threats = {
    cyber_attack: {
      id: "cyber_attack",
      name: "1. Cyber Attack (Tấn Công Mạng)",
      badge: "DDoS, Ransomware, Phishing",
      icon: "👾",
      desc: "Tin tặc sử dụng mã độc tống tiền (Ransomware) để mã hóa khóa dữ liệu hoặc tấn công từ chối dịch vụ (DDoS) làm tê liệt kho lưu trữ.",
      counterMeasure: "Data Encryption & Access Control",
      solutionDesc: "Mã hóa đa tầng ngăn tin tặc đọc trộm, phân quyền IAM chặt chẽ chặn leo thang đặc quyền."
    },
    leak: {
      id: "leak",
      name: "2. Data Leak (Rò Rỉ Dữ Liệu)",
      badge: "Public Bucket, Cấu hình sai",
      icon: "💧",
      desc: "Dữ liệu mật của công ty bị lộ ra ngoài Internet do nhân viên cấu hình sai quyền truy cập (vd: để Bucket ở chế độ Public Read).",
      counterMeasure: "Access Control & Data Encryption",
      solutionDesc: "Áp dụng chính sách kiểm soát truy cập (Least Privilege), khóa chặt quyền công khai (Block Public Access) và mã hóa toàn bộ dữ liệu lưu trữ."
    },
    lost_data: {
      id: "lost_data",
      name: "3. Lost Data (Mất Mát Dữ Liệu)",
      badge: "Lỗi phần cứng, Thiên tai, Xóa nhầm",
      icon: "💥",
      desc: "Dữ liệu bị xóa vĩnh viễn hoặc hư hỏng do thảm họa thiên tai tại Data Center, ổ cứng bị lỗi vật lý hàng loạt hoặc nhân viên vô tình xóa nhầm.",
      counterMeasure: "Backup and Recovery",
      solutionDesc: "Cơ chế tự động sao lưu định kỳ, bật tính năng Object Versioning (lưu lịch sử phiên bản) và nhân bản sao chép đa vùng địa lý (Cross-Region Replication)."
    }
  };

  const complianceStandards = {
    gdpr: {
      id: "gdpr",
      name: "GDPR (General Data Protection Regulation)",
      region: "Liên minh Châu Âu (EU)",
      focus: "Bảo vệ quyền riêng tư & dữ liệu cá nhân của công dân EU",
      requirements: [
        "Quyền được lãng quên (Right to be forgotten): Phải có khả năng xóa vĩnh viễn dữ liệu khi người dùng yêu cầu.",
        "Mã hóa bắt buộc (Mandatory Encryption) cho mọi dữ liệu cá nhân lưu trữ trên đám mây.",
        "Thông báo sự cố rò rỉ dữ liệu cho cơ quan quản lý trong vòng 72 giờ."
      ],
      icon: "🇪🇺"
    },
    hipaa: {
      id: "hipaa",
      name: "HIPAA (Health Insurance Portability and Accountability Act)",
      region: "Hoa Kỳ (USA)",
      focus: "Bảo mật thông tin sức khỏe điện tử cá nhân (ePHI)",
      requirements: [
        "Kiểm soát truy cập nghiêm ngặt: Chỉ bác sĩ/nhân viên y tế được phân quyền mới đọc được bệnh án.",
        "Nhật ký kiểm toán (Audit Trail) bất biến ghi nhận ai đã xem hồ sơ bệnh án lúc mấy giờ.",
        "Ký cam kết trách nhiệm pháp lý (BAA - Business Associate Agreement) với nhà cung cấp đám mây."
      ],
      icon: "🏥"
    },
    iso27001: {
      id: "iso27001",
      name: "ISO/IEC 27001",
      region: "Tiêu chuẩn Toàn cầu (Global Standard)",
      focus: "Hệ thống quản lý an toàn thông tin doanh nghiệp (ISMS)",
      requirements: [
        "Quy trình đánh giá và giảm thiểu rủi ro bảo mật định kỳ hàng năm.",
        "Kế hoạch duy trì hoạt động kinh doanh liên tục và khắc phục thảm họa (Disaster Recovery).",
        "Kiểm toán độc lập từ bên thứ ba về quy trình vận hành và kiểm soát an ninh hạ tầng lưu trữ."
      ],
      icon: "🌐"
    }
  };

  const handleSimulateAttack = () => {
    setIdsStatus("alert");
    setTimeout(() => {
      setIdsStatus("blocked");
    }, 1500);
  };

  return (
    <div className="my-8 rounded-2xl border border-sky-500/20 bg-[#0a0f1d] p-6 shadow-2xl backdrop-blur-md">
      {/* Header */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between border-b border-slate-800 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-sky-500/20 text-sky-400 font-bold text-sm">
              7.5
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-sky-400">
              Mục IV • Bảo Mật Dữ Liệu Cloud Storage
            </span>
          </div>
          <h3 className="mt-1 text-xl font-bold text-slate-100">
            Phòng Tuyến An Ninh Dữ Liệu: 3 Mối Đe Dọa &amp; 3 Tấm Khiên Bảo Vệ
          </h3>
          <p className="mt-1 text-xs text-slate-400">
            Hộp cát đối đầu giữa các cuộc tấn công mạng với 3 biện pháp phòng ngự trọng yếu, hệ thống giám sát IDS và tiêu chuẩn tuân thủ quốc tế.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex rounded-xl bg-slate-900/80 p-1 border border-slate-800">
          <button
            onClick={() => setActiveTab("threats_defense")}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
              activeTab === "threats_defense"
                ? "bg-sky-600 text-white shadow-md shadow-sky-600/30"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            🛡️ 3 Đe Dọa vs 3 Tấm Khiên
          </button>
          <button
            onClick={() => setActiveTab("monitoring_ids")}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
              activeTab === "monitoring_ids"
                ? "bg-sky-600 text-white shadow-md shadow-sky-600/30"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            🚨 Giám Sát &amp; IDS Real-Time
          </button>
          <button
            onClick={() => setActiveTab("compliance")}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
              activeTab === "compliance"
                ? "bg-sky-600 text-white shadow-md shadow-sky-600/30"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            📜 Tiêu Chuẩn Tuân Thủ
          </button>
        </div>
      </div>

      {/* TAB 1: 3 THREATS VS 3 SHIELDS */}
      {activeTab === "threats_defense" && (
        <div className="mt-6 space-y-6">
          {/* Threats Selector */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {Object.values(threats).map((t) => {
              const isSelected = activeThreat === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setActiveThreat(t.id)}
                  className={`flex flex-col items-start p-3.5 rounded-xl border text-left transition-all ${
                    isSelected
                      ? "border-red-500 bg-red-950/30 ring-1 ring-red-500/50 shadow-lg"
                      : "border-slate-800 bg-slate-900/50 hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="text-2xl">{t.icon}</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-500/20 text-red-300 border border-red-500/30">
                      Mối Đe Dọa
                    </span>
                  </div>
                  <h4 className="mt-2 text-xs sm:text-sm font-bold text-slate-100">{t.name}</h4>
                  <span className="text-[11px] text-slate-400 mt-0.5">{t.badge}</span>
                </button>
              );
            })}
          </div>

          {/* Active Threat & Defense Card */}
          {(() => {
            const cur = threats[activeThreat];
            return (
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 space-y-4">
                <div className="flex items-start gap-3 border-b border-slate-800 pb-3">
                  <span className="text-3xl">{cur.icon}</span>
                  <div>
                    <h4 className="text-base font-bold text-slate-100">{cur.name}</h4>
                    <p className="text-xs text-red-300 font-medium mt-0.5">{cur.desc}</p>
                  </div>
                </div>

                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    🛡️ Tấm Khiên Hóa Giải Tương Ứng:
                  </h5>
                  <div className="rounded-xl bg-slate-950 p-3.5 border border-slate-800/80 space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                      <span>✓ Biện pháp cốt tử:</span>
                      <span>{cur.counterMeasure}</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {cur.solutionDesc}
                    </p>
                  </div>
                </div>

                {/* 3 Core Shields Status Bar */}
                <div className="pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Trạng Thái 3 Tấm Khiên Bảo Vệ Chủ Động:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    <div className="rounded-lg bg-emerald-950/30 p-3 border border-emerald-500/30 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span>🔐</span>
                        <span className="text-xs font-bold text-emerald-300">1. Data Encryption</span>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-500/40">
                        AES-256
                      </span>
                    </div>

                    <div className="rounded-lg bg-blue-950/30 p-3 border border-blue-500/30 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span>👤</span>
                        <span className="text-xs font-bold text-blue-300">2. Access Control</span>
                      </div>
                      <span className="text-[10px] font-bold text-blue-400 bg-blue-950 px-2 py-0.5 rounded border border-blue-500/40">
                        IAM / RBAC
                      </span>
                    </div>

                    <div className="rounded-lg bg-purple-950/30 p-3 border border-purple-500/30 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span>🔄</span>
                        <span className="text-xs font-bold text-purple-300">3. Backup &amp; Recovery</span>
                      </div>
                      <span className="text-[10px] font-bold text-purple-400 bg-purple-950 px-2 py-0.5 rounded border border-purple-500/40">
                        Multi-Region
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* TAB 2: MONITORING & IDS REAL-TIME */}
      {activeTab === "monitoring_ids" && (
        <div className="mt-6 space-y-5">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
              <div>
                <h4 className="text-sm font-bold text-slate-100 flex items-center gap-2">
                  <span>🚨</span> Giả Lập Hệ Thống Phát Hiện Xâm Nhập (IDS) &amp; Phân Tích Nhật Ký (Log Analysis)
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Bộ ba giám sát chuẩn giáo trình: Monitoring Systems • Intrusion Detection • Log Analysis.
                </p>
              </div>

              <button
                onClick={handleSimulateAttack}
                disabled={idsStatus === "alert"}
                className="px-4 py-1.5 text-xs font-bold rounded-lg bg-red-600 text-white hover:bg-red-500 transition-all disabled:opacity-50 self-start sm:self-auto"
              >
                {idsStatus === "alert" ? "Đang Báo Động..." : "Giả Lập Đột Nhập Trái Phép ⚡"}
              </button>
            </div>

            {/* Terminal Console Log */}
            <div className="rounded-xl bg-slate-950 p-4 border border-slate-800 font-mono text-xs space-y-1.5">
              <div className="text-slate-500">[08:45:01 UTC] Monitoring System: Hoạt động bình thường. Tất cả cổng 443 an toàn.</div>
              <div className="text-slate-500">[08:45:10 UTC] Storage I/O: 14,200 IOPS • Băng thông mạng: 2.4 Gbps.</div>

              {idsStatus === "alert" && (
                <div className="text-amber-400 font-bold animate-pulse">
                  [08:45:22 UTC] WARNING! IDS phát hiện 500 yêu cầu GET trái phép liên tục từ IP lạ 198.51.100.24!
                </div>
              )}

              {idsStatus === "blocked" && (
                <>
                  <div className="text-amber-400">
                    [08:45:22 UTC] WARNING! IDS phát hiện 500 yêu cầu GET trái phép liên tục từ IP lạ 198.51.100.24!
                  </div>
                  <div className="text-emerald-400 font-bold">
                    [08:45:23 UTC] Log Analysis xác nhận dấu hiệu Brute-force! Tự động chặn IP 198.51.100.24 thành công!
                  </div>
                  <div className="text-sky-400">
                    [08:45:24 UTC] Đã gửi báo cáo vi phạm an ninh tới đội ứng cứu sự cố SOC. Dữ liệu kho an toàn 100%.
                  </div>
                </>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs">
                <span className="font-bold text-slate-300 block mb-1">1. Monitoring Systems</span>
                <span className="text-slate-400">Đo lường dung lượng, băng thông, trạng thái máy chủ 24/7.</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs">
                <span className="font-bold text-slate-300 block mb-1">2. Intrusion Detection</span>
                <span className="text-slate-400">Phát hiện quét cổng, khai thác lỗ hổng và rò rỉ token.</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs">
                <span className="font-bold text-slate-300 block mb-1">3. Log Analysis</span>
                <span className="text-slate-400">Phân tích nhật ký SIEM truy vết nguồn gốc hành vi bất thường.</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: COMPLIANCE STANDARDS */}
      {activeTab === "compliance" && (
        <div className="mt-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {Object.values(complianceStandards).map((s) => {
              const isSelected = selectedStandard === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => setSelectedStandard(s.id)}
                  className={`flex flex-col items-start p-3.5 rounded-xl border text-left transition-all ${
                    isSelected
                      ? "border-sky-500 bg-sky-950/40 ring-1 ring-sky-500/50 shadow-lg"
                      : "border-slate-800 bg-slate-900/50 hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="text-2xl">{s.icon}</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-sky-400 border border-slate-700">
                      {s.region}
                    </span>
                  </div>
                  <h5 className="mt-2 text-xs sm:text-sm font-bold text-slate-100">{s.name}</h5>
                </button>
              );
            })}
          </div>

          {/* Detailed Selected Compliance Standard */}
          {(() => {
            const cur = complianceStandards[selectedStandard];
            return (
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="text-3xl">{cur.icon}</span>
                    <div>
                      <h4 className="text-base font-bold text-slate-100">{cur.name}</h4>
                      <span className="text-xs text-sky-400 font-medium">{cur.focus}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    📋 Các Yêu Cầu Tuân Thủ Bắt Buộc Khi Lưu Trữ Dữ Liệu:
                  </h5>
                  <div className="space-y-1.5">
                    {cur.requirements.map((r, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <span className="text-sky-400 font-bold">•</span>
                        <span>{r}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* Footer Rule Callout */}
      <div className="mt-6 rounded-xl border border-slate-800/80 bg-slate-950/80 p-3.5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-slate-300">
          <span className="text-sky-400 font-bold">💡 Khẩu quyết bảo mật:</span>
          <span><strong>3 Đe dọa</strong> (Cyber attack, Data leak, Lost data) ➔ <strong>3 Biện pháp</strong> (Mã hóa, Phân quyền, Sao lưu).</span>
        </div>
        <div className="flex items-center gap-2 text-slate-400 text-[11px]">
          <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
          <span>Mục IV.1 ➔ IV.4 • Giáo trình chính thức</span>
        </div>
      </div>
    </div>
  );
}
