"use client";
import React, { useState } from "react";

export default function IdaasBenefitsChallengesMatrix() {
  const [activeTab, setActiveTab] = useState("duel"); // 'duel' | 'scale' | 'recommendations'
  const [selectedBenefit, setSelectedBenefit] = useState("cost");
  const [selectedChallenge, setSelectedChallenge] = useState("vendor_lockin");

  const benefits = [
    {
      id: "cost",
      number: 1,
      title: "Cost Savings (Tiết Kiệm Chi Phí)",
      icon: "💰",
      badge: "Giảm CAPEX & Bảo Trì",
      summary: "Cắt giảm tối đa chi phí đầu tư mua máy chủ danh bạ vật lý (Domain Controllers), bản quyền phần mềm và phí bảo trì hàng năm.",
      detail: "Doanh nghiệp chuyển sang mô hình thanh toán định kỳ theo số lượng người dùng thực tế (Per-user per-month), không lo chi phí lãng phí."
    },
    {
      id: "scalability",
      number: 2,
      title: "Scalability (Khả Năng Mở Rộng Linh Hoạt)",
      icon: "📈",
      badge: "Từ 10 ➔ 100,000+ User",
      summary: "Đáp ứng tức thì tốc độ tăng trưởng nhân sự hoặc biến động quy mô theo mùa vụ mà không cần nâng cấp phần cứng.",
      detail: "Dễ dàng thêm mới hàng ngàn tài khoản cho cộng tác viên trong chiến dịch lớn và thu hồi ngay sau khi kết thúc dự án chỉ trong vài phút."
    },
    {
      id: "security",
      number: 3,
      title: "Enhanced Security (Nâng Cao Bảo Mật)",
      icon: "🛡️",
      badge: "Giảm Rủi Ro Tấn Công",
      summary: "Áp dụng các chuẩn bảo mật hiện đại nhất như Xác thực đa yếu tố (MFA), Passkey FIDO2 và cảnh báo đăng nhập bất thường bằng AI.",
      detail: "Hạn chế tới 99.9% nguy cơ bị chiếm đoạt tài khoản do người dùng đặt mật khẩu yếu, trùng lặp hoặc bị lừa đảo (phishing)."
    },
    {
      id: "access_mgmt",
      number: 4,
      title: "Effective Access Management (Quản Lý Hiệu Quả)",
      icon: "📊",
      badge: "Quản Trị Tập Trung",
      summary: "Giao diện quản trị tập trung duy nhất cho phép kiểm soát quyền truy cập của mọi nhân sự vào tất cả ứng dụng đám mây và on-premise.",
      detail: "Cung cấp hệ thống nhật ký kiểm toán (Audit Logs) theo thời gian thực: ai đã truy cập tệp nào, từ địa chỉ IP nào và vào lúc nào."
    },
    {
      id: "ux",
      number: 5,
      title: "Improve User Experience (Nâng Cao Trải Nghiệm)",
      icon: "⚡",
      badge: "Single Sign-On (SSO)",
      summary: "Đăng nhập một lần (SSO) giúp người dùng chỉ cần nhớ duy nhất 1 mật khẩu master để vào toàn bộ các công cụ làm việc hàng ngày.",
      detail: "Chấm dứt hoàn toàn vấn nạn 'mệt mỏi vì mật khẩu' (Password Fatigue), giảm tới 70% số lượng cuộc gọi yêu cầu IT hỗ trợ đặt lại mật khẩu."
    },
    {
      id: "compliance",
      number: 6,
      title: "Compliance (Hỗ Trợ Tuân Thủ Quy Định)",
      icon: "📜",
      badge: "Luôn Cập Nhật Chuẩn",
      summary: "Các nhà cung cấp IDaaS luôn liên tục cập nhật hệ thống để đáp ứng các đạo luật và tiêu chuẩn quốc tế khắt khe nhất.",
      detail: "Hỗ trợ doanh nghiệp dễ dàng vượt qua các kỳ kiểm toán tuân thủ chuẩn ISO 27001, SOC 2, HIPAA (y tế) và GDPR (bảo vệ dữ liệu châu Âu)."
    }
  ];

  const challenges = [
    {
      id: "security_risk",
      number: 1,
      title: "Data Security Risks (Rủi Ro Bảo Mật Dữ Liệu)",
      icon: "⚠️",
      badge: "Nguy Cơ Tập Trung",
      summary: "Khi toàn bộ thông tin danh tính và chứng chỉ đăng nhập được lưu trữ tập trung tại nhà cung cấp đám mây, đây sẽ là 'miếng mồi ngon' của tin tặc.",
      solution: "Triển khai mã hóa dữ liệu đầu cuối (End-to-end Encryption) và quản lý khóa mã hóa bằng HSM riêng của doanh nghiệp."
    },
    {
      id: "vendor_lockin",
      number: 2,
      title: "Availability & Dependency on Supplier (Phụ Thuộc Nhà Cung Cấp)",
      icon: "🔗",
      badge: "Vendor Lock-in & Downtime",
      summary: "Doanh nghiệp chịu sự phụ thuộc lớn vào sự sẵn sàng của nhà cung cấp. Nếu dịch vụ IDaaS bị gián đoạn, toàn bộ nhân sự sẽ không thể đăng nhập làm việc!",
      solution: "Thiết lập cơ chế danh bạ dự phòng khẩn cấp tại chỗ (Local Break-glass Accounts) và lựa chọn nhà cung cấp cam kết SLA 99.99%."
    },
    {
      id: "integration",
      number: 3,
      title: "Integration with Existing Systems (Tương Thích Hệ Thống Cũ)",
      icon: "🧩",
      badge: "Vấn Đề Chuyển Đổi (Transition)",
      summary: "Nhiều hệ thống phần mềm cũ (Legacy Apps nội bộ) không hỗ trợ các giao thức hiện đại như SAML 2.0 hoặc OpenID Connect.",
      solution: "Sử dụng các cổng kết nối IDaaS Gateway / Reverse Proxy để làm cầu nối tương thích giữa giao thức cũ (LDAP/Kerberos) và đám mây."
    },
    {
      id: "regulations",
      number: 4,
      title: "Compliance with Regulations (Quy Định Dữ Liệu Cá Nhân)",
      icon: "🏛️",
      badge: "Chủ Quyền Dữ Liệu",
      summary: "Các quy định pháp lý (như Nghị định bảo vệ dữ liệu cá nhân, GDPR) yêu cầu dữ liệu danh tính công dân/nhân viên phải được lưu trữ trong biên giới quốc gia.",
      solution: "Lựa chọn các nhà cung cấp IDaaS có trung tâm dữ liệu đặt tại quốc gia sở tại hoặc hỗ trợ lưu trữ dữ liệu tại chỗ (Data Residency)."
    },
    {
      id: "cost_challenge",
      number: 5,
      title: "Cost (Chi Phí Triển Khai & Đào Tạo)",
      icon: "💸",
      badge: "Phí Thuê Bao Hàng Năm",
      summary: "Chi phí thuê bao theo tháng/năm có thể tăng vọt khi quy mô nhân sự lớn, cộng thêm chi phí di chuyển dữ liệu và đào tạo nhân viên sử dụng.",
      solution: "Đánh giá kỹ lưỡng mô hình ROI dài hạn và thương lượng các gói thuê bao doanh nghiệp khối lượng lớn (Volume Discount)."
    }
  ];

  const currentB = benefits.find((b) => b.id === selectedBenefit) || benefits[0];
  const currentC = challenges.find((c) => c.id === selectedChallenge) || challenges[0];

  return (
    <div className="my-8 rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-[#0d111e] via-[#111728] to-[#090d16] p-5 md:p-7 text-neutral-200 shadow-2xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-800 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-400">
            <span>⚖️ Mục III • Cán Cân Chiến Lược IDaaS</span>
          </div>
          <h3 className="mt-2 text-xl font-bold tracking-tight text-white md:text-2xl">
            Đối Soát 6 Lợi Ích Vượt Trội &amp; 5 Thách Thức Đánh Đổi
          </h3>
          <p className="mt-1 text-sm text-neutral-400">
            Phân tích chuyên sâu bài toán đánh đổi cốt lõi giữa sự tiện lợi bảo mật và nguy cơ phụ thuộc nhà cung cấp đám mây.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex rounded-xl bg-neutral-900/80 p-1 border border-neutral-800">
          <button
            onClick={() => setActiveTab("duel")}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              activeTab === "duel"
                ? "bg-indigo-600 text-white shadow"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Võ Đài Đối Soát
          </button>
          <button
            onClick={() => setActiveTab("scale")}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              activeTab === "scale"
                ? "bg-amber-600 text-white shadow"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Bài Toán Đánh Đổi
          </button>
        </div>
      </div>

      {/* TAB 1: VÕ ĐÀI ĐỐI SOÁT */}
      {activeTab === "duel" && (
        <div className="mt-6 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column: 6 LỢI ÍCH */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <span>✨</span> 6 Lợi Ích Cốt Lõi (Benefits)
                </span>
                <span className="text-[11px] text-neutral-400">Chọn để xem chi tiết:</span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {benefits.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => setSelectedBenefit(b.id)}
                    className={`p-2.5 rounded-xl border text-left transition-all ${
                      selectedBenefit === b.id
                        ? "border-emerald-500 bg-emerald-950/40 text-white shadow-md shadow-emerald-950/40"
                        : "border-neutral-800 bg-neutral-900/50 text-neutral-400 hover:text-neutral-200"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span>{b.icon}</span>
                      <span className="font-bold text-xs line-clamp-1">{b.title.split(" (")[0]}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Benefit Details Box */}
              <div className="rounded-xl border border-emerald-500/30 bg-neutral-950 p-4 space-y-2.5">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-sm text-emerald-400">{currentB.title}</h4>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-mono">
                    {currentB.badge}
                  </span>
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed">{currentB.summary}</p>
                <div className="p-2.5 rounded bg-neutral-900/80 border border-neutral-800 text-xs text-neutral-400">
                  <span className="font-semibold text-emerald-400">Tác động thực tiễn: </span>
                  {currentB.detail}
                </div>
              </div>
            </div>

            {/* Right Column: 5 THÁCH THỨC */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
                  <span>⚠️</span> 5 Thách Thức Thực Tế (Challenges)
                </span>
                <span className="text-[11px] text-neutral-400">Chọn để xem giải pháp:</span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {challenges.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedChallenge(c.id)}
                    className={`p-2.5 rounded-xl border text-left transition-all ${
                      selectedChallenge === c.id
                        ? "border-rose-500 bg-rose-950/40 text-white shadow-md shadow-rose-950/40"
                        : "border-neutral-800 bg-neutral-900/50 text-neutral-400 hover:text-neutral-200"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span>{c.icon}</span>
                      <span className="font-bold text-xs line-clamp-1">{c.title.split(" (")[0]}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Challenge Details Box */}
              <div className="rounded-xl border border-rose-500/30 bg-neutral-950 p-4 space-y-2.5">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-sm text-rose-400">{currentC.title}</h4>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-rose-500/10 text-rose-300 border border-rose-500/20 font-mono">
                    {currentC.badge}
                  </span>
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed">{currentC.summary}</p>
                <div className="p-2.5 rounded bg-neutral-900/80 border border-neutral-800 text-xs text-neutral-400">
                  <span className="font-semibold text-amber-400">Biện pháp giảm thiểu: </span>
                  {currentC.solution}
                </div>
              </div>
            </div>
          </div>

          {/* Exam Golden Formula */}
          <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-center">
            <div className="text-xs uppercase font-bold text-amber-400 tracking-wider mb-1">
              Khẩu Quyết Ghi Nhớ Bài Học &amp; Ôn Thi Trọng Tâm Mục III
            </div>
            <div className="text-sm md:text-base font-black text-white font-mono">
              &quot;Lợi ích nhiều (6) nhưng đánh đổi cốt lõi là phụ thuộc nhà cung cấp (Vendor dependency) và rủi ro bảo mật tập trung (Centralized data risk)&quot;
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: BÀI TOÁN ĐÁNH ĐỔI */}
      {activeTab === "scale" && (
        <div className="mt-6 space-y-5">
          <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-5 space-y-4">
            <h4 className="text-base font-bold text-white">
              Cán Cân Chiến Lược: Tại Sao Doanh Nghiệp Vẫn Chọn Dịch Chuyển Lên IDaaS?
            </h4>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Mặc dù IDaaS tiềm ẩn 5 thách thức, nhưng lợi ích vượt trội về mặt bảo mật (MFA, phát hiện tấn công theo thời gian thực) và tiết kiệm chi phí vận hành (không cần đội ngũ chuyên trách bảo trì server tại chỗ) đã biến IDaaS thành xu hướng tất yếu của thời đại điện toán đám mây.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="rounded-lg border border-emerald-500/30 bg-emerald-950/20 p-3.5 space-y-2">
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  Khi Nào IDaaS Thắng Tuyệt Đối?
                </div>
                <ul className="text-xs text-neutral-300 space-y-1.5 list-disc list-inside">
                  <li>Doanh nghiệp sử dụng nhiều ứng dụng SaaS (Google Workspace, Microsoft 365, Salesforce).</li>
                  <li>Nhân sự làm việc từ xa (Remote Work) hoặc phân tán đa chi nhánh toàn cầu.</li>
                  <li>Cần triển khai nhanh chóng bảo mật SSO &amp; MFA mà không có đội ngũ kỹ sư chuyên sâu.</li>
                </ul>
              </div>

              <div className="rounded-lg border border-rose-500/30 bg-rose-950/20 p-3.5 space-y-2">
                <div className="text-xs font-bold text-rose-400 uppercase tracking-wider">
                  Khi Nào Cần Cân Nhắc Kỹ Lưỡng?
                </div>
                <ul className="text-xs text-neutral-300 space-y-1.5 list-disc list-inside">
                  <li>Hệ thống ngân hàng, quốc phòng có quy định pháp lý tuyệt đối cấm dữ liệu ra khỏi biên giới.</li>
                  <li>Quá nhiều ứng dụng cổ điển (Legacy Systems) độc quyền không thể nâng cấp giao thức mạng.</li>
                  <li>Đường truyền Internet đến trụ sở chính không ổn định, có thể gián đoạn công việc thường xuyên.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
