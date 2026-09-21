"use client";
import React, { useState } from "react";
import { ShieldAlert, Users, Scale, FileCheck, Network, AlertTriangle, Sparkles, CheckCircle2, ChevronRight, BarChart3, Lock, Shield } from "lucide-react";

export default function CloudChallengesRadar() {
  const [selectedChallenge, setSelectedChallenge] = useState(0);

  const challenges = [
    {
      id: "security",
      name: "Security (Bảo Mật)",
      icon: Lock,
      riskLevel: "Rất Cao",
      riskScore: 95,
      riskColor: "text-rose-600 bg-rose-50 border-rose-200",
      rootCause: "Dữ liệu nghiệp vụ và thông tin khách hàng được lưu trữ, xử lý trên trung tâm dữ liệu của bên thứ ba (Third-party infrastructure).",
      impact: "Nguy cơ rò rỉ dữ liệu, tấn công mạng, mất an toàn dữ liệu trên môi trường dùng chung hạ tầng (Multi-tenancy) của Public Cloud.",
      mitigation: "Áp dụng mã hóa toàn trình (Encryption at rest & in transit), xác thực đa yếu tố (MFA), quản lý quyền truy cập tối thiểu (Principle of Least Privilege).",
      examNote: "Private Cloud có độ bảo mật cao nhất, Public Cloud thấp nhất do chia sẻ hạ tầng chung."
    },
    {
      id: "resources",
      name: "Lack of Resources (Thiếu Nguồn Lực)",
      icon: Users,
      riskLevel: "Cao",
      riskScore: 85,
      riskColor: "text-amber-600 bg-amber-50 border-amber-200",
      rootCause: "Sự phát triển vũ bão của các dịch vụ đám mây dẫn đến tình trạng khan hiếm nghiêm trọng kỹ sư có chứng chỉ chuyên môn sâu.",
      impact: "Thiếu nhân sự am hiểu kiến trúc Cloud, DevOps và CloudOps khiến việc triển khai bị chậm trễ hoặc cấu hình sai gây tốn kém chi phí.",
      mitigation: "Tăng cường đào tạo nội bộ, thi chứng chỉ quốc tế (AWS, Azure, GCP), thuê các đối tác giải pháp quản trị chuyên nghiệp (Managed Service Providers - MSP).",
      examNote: "Thiếu nhân lực và kỹ năng chuyên môn vận hành là rào cản lớn khi doanh nghiệp dịch chuyển lên đám mây."
    },
    {
      id: "governance",
      name: "Governance (Quản Trị Hệ Thống)",
      icon: Scale,
      riskLevel: "Trung Bình",
      riskScore: 78,
      riskColor: "text-purple-600 bg-purple-50 border-purple-200",
      rootCause: "Các nhóm phát triển dễ dàng tự ý mở thêm tài nguyên trên đám mây bằng thẻ tín dụng mà không thông qua phê duyệt của phòng IT (Shadow IT).",
      impact: "Mất kiểm soát ngân sách chi tiêu, lãng phí tài nguyên máy ảo bị bỏ quên, khó thống nhất quy chuẩn kiến trúc doanh nghiệp.",
      mitigation: "Thiết lập chính sách phân quyền tập trung (RBAC), kiểm toán tự động, gắn thẻ tài nguyên (Tagging) và áp dụng mô hình FinOps.",
      examNote: "Governance tập trung vào việc kiểm soát chính sách sử dụng, phân bổ ngân sách và chuẩn hóa quy trình triển khai Cloud."
    },
    {
      id: "compliance",
      name: "Compliance (Tuân Thủ Pháp Lý)",
      icon: FileCheck,
      riskLevel: "Cao",
      riskScore: 88,
      riskColor: "text-sky-600 bg-sky-50 border-sky-200",
      rootCause: "Các đạo luật an ninh mạng quốc gia và quốc tế yêu cầu dữ liệu nhạy cảm không được phép rời khỏi biên giới quốc gia (Data Sovereignty).",
      impact: "Doanh nghiệp đối mặt với các khoản phạt khổng lồ nếu lưu trữ dữ liệu y tế, tài chính tại các Data Center vi phạm chuẩn GDPR, HIPAA, PCI-DSS.",
      mitigation: "Lựa chọn các Region/Data Center nội địa đáp ứng đầy đủ chứng chỉ kiểm định; triển khai mô hình Hybrid Cloud để giữ dữ liệu bí mật ở máy chủ nội bộ.",
      examNote: "Compliance là yêu cầu bắt buộc về tuân thủ pháp luật sở tại và tiêu chuẩn chứng chỉ ngành."
    },
    {
      id: "multi-cloud",
      name: "Multi-Cloud (Quản Lý Đa Đám Mây)",
      icon: Network,
      riskLevel: "Cao",
      riskScore: 82,
      riskColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
      rootCause: "Doanh nghiệp sử dụng đồng thời 2–3 nhà cung cấp (AWS + Azure + GCP) để tránh phụ thuộc độc quyền vào một hãng (Vendor Lock-in).",
      impact: "Mỗi nhà cung cấp có API, bảng điều khiển, chính sách bảo mật và mạng riêng khác nhau, dẫn đến chi phí vận hành tăng vọt và phân mảnh dữ liệu.",
      mitigation: "Sử dụng các công cụ quản trị đa đám mây hợp nhất (Terraform, Kubernetes, Cloud Management Platforms), chuẩn hóa container hóa.",
      examNote: "Multi-Cloud giúp tránh Vendor Lock-in nhưng làm tăng đột biến độ phức tạp quản lý và yêu cầu chuyên môn cao."
    }
  ];

  const currentCh = challenges[selectedChallenge];

  return (
    <div className="my-8 p-5 sm:p-7 rounded-3xl bg-white border border-stone-200 shadow-md font-sans">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-black uppercase tracking-widest text-sky-600">
            Interactive Blueprint • Mục V
          </span>
          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-100 text-rose-800">
            5 Thách Thức Lớn
          </span>
        </div>
        <h3 className="text-lg sm:text-xl font-black text-stone-900 mt-1">
          Radar Phân Tích 5 Thách Thức Cốt Lõi Của Cloud Computing (Challenges)
        </h3>
        <p className="text-xs sm:text-sm text-stone-500 mt-1">
          Khám phá 5 rào cản lớn nhất khi ứng dụng đám mây: Nguyên nhân gốc rễ, tác động và giải pháp đối phó.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left selector */}
        <div className="lg:col-span-5 space-y-2">
          <span className="text-xs font-black uppercase tracking-wider text-stone-500 block mb-1">
            Chọn Thách Thức Để Phân Tích:
          </span>
          {challenges.map((item, idx) => {
            const Icon = item.icon;
            const isSelected = selectedChallenge === idx;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedChallenge(idx)}
                className={`w-full p-3 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between gap-3 ${
                  isSelected
                    ? "bg-sky-600 text-white border-sky-600 shadow-xs"
                    : "bg-white border-stone-200 hover:bg-stone-50 text-stone-700"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                    isSelected ? "bg-white/20 text-white" : "bg-stone-100 text-stone-600"
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold leading-tight">{item.name}</div>
                    <div className={`text-[10px] font-medium mt-0.5 ${
                      isSelected ? "text-sky-100" : "text-stone-400"
                    }`}>
                      Mức độ rủi ro: {item.riskLevel} ({item.riskScore}/100)
                    </div>
                  </div>
                </div>
                <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${
                  isSelected ? "text-white translate-x-1" : "text-stone-300"
                }`} />
              </button>
            );
          })}
        </div>

        {/* Right Detail Card */}
        <div className="lg:col-span-7 p-6 rounded-2xl border border-stone-200 bg-stone-50/70 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-black text-stone-800">Thách thức #{selectedChallenge + 1} / 5</span>
              </div>
              <span className={`text-[11px] font-black px-2.5 py-0.5 rounded-full border ${currentCh.riskColor}`}>
                Rủi ro: {currentCh.riskLevel} ({currentCh.riskScore}%)
              </span>
            </div>

            <h4 className="text-base sm:text-lg font-black text-stone-900 mb-3">
              {currentCh.name}
            </h4>

            {/* Risk Gauge */}
            <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden mb-4">
              <div
                className="bg-rose-500 h-full rounded-full transition-all duration-500"
                style={{ width: `${currentCh.riskScore}%` }}
              />
            </div>

            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-white border border-stone-200">
                <span className="text-[10px] font-black text-stone-400 uppercase block mb-1">
                  Nguyên nhân gốc rễ:
                </span>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-medium">
                  {currentCh.rootCause}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-stone-200">
                <span className="text-[10px] font-black text-rose-500 uppercase block mb-1">
                  Tác động tiềm tàng:
                </span>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {currentCh.impact}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-stone-200">
                <span className="text-[10px] font-black text-emerald-600 uppercase block mb-1">
                  Giải pháp khắc phục:
                </span>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {currentCh.mitigation}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 flex items-start gap-2.5">
            <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-amber-900 block mb-0.5">Ghi nhớ nhanh khi làm bài thi:</span>
              <p className="leading-relaxed font-medium">{currentCh.examNote}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
