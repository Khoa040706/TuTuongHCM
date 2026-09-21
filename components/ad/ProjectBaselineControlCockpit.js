"use client";
import React, { useState } from "react";
import { 
  Camera, 
  ShieldCheck, 
  Target, 
  Sliders, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Layers, 
  Sparkles, 
  FileText, 
  Users, 
  HelpCircle,
  ArrowRight,
  TrendingUp
} from "lucide-react";

const PURPOSES = [
  {
    id: "p1",
    title: "Common Reference",
    subtitle: "Mốc tham chiếu chung",
    icon: Target,
    color: "amber",
    desc: "Mọi stakeholder (Khách hàng, Project Manager, BA, Developers, QA) có cùng một hình dung ban đầu về scope và vision, tránh việc 'ông nói gà, bà nói vịt'."
  },
  {
    id: "p2",
    title: "Scope Control",
    subtitle: "Kiểm soát thay đổi",
    icon: ShieldCheck,
    color: "emerald",
    desc: "Là căn cứ pháp lý và kỹ thuật duy nhất để đánh giá mọi Change Request. Mọi tính năng phát sinh sau mốc này đều phải đàm phán lại về ngân sách và tiến độ."
  },
  {
    id: "p3",
    title: "Progress Measurement",
    subtitle: "Đo lường tiến độ",
    icon: TrendingUp,
    color: "blue",
    desc: "Cho phép PM và Sponsor so sánh trạng thái hiện tại của dự án với cam kết ban đầu xem có bị trễ hạn hay phình to phạm vi (Scope Creep) hay không."
  },
  {
    id: "p4",
    title: "Reduced Ambiguity",
    subtitle: "Giảm thiểu mơ hồ",
    icon: Sliders,
    color: "purple",
    desc: "Buộc các bên phải làm rõ các bất đồng, giả định ngầm và ranh giới hệ thống từ sớm trước khi bước vào giai đoạn phân tích chi tiết tốn kém."
  }
];

const BUSINESS_CONTENT = [
  { title: "Business Vision & Goals", detail: "Xây dựng cổng đăng ký học phần trực tuyến tự phục vụ, giảm 80% thời gian xử lý thủ công tại phòng Đào tạo." },
  { title: "Scope Statement (In-Scope)", detail: "Tra cứu học phần, Đăng ký môn học, Hủy môn trong hạn, Tích hợp cổng thanh toán học phí trực tuyến." },
  { title: "Scope Statement (Out-of-Scope)", detail: "Chấm điểm trực tuyến, Quản lý ký túc xá, Tuyển sinh đầu vào (xếp vào các giai đoạn sau)." },
  { title: "Key Stakeholders & Concerns", detail: "Sinh viên (tốc độ, không nghẽn mạng); Phòng Đào tạo (chính xác, đúng quy chế); Kế toán (đối soát học phí)." },
  { title: "Project Success Criteria", detail: "Chịu tải 10,000 sinh viên đồng thời vào giờ cao điểm, 99.5% giao dịch hoàn tất dưới 2 giây." }
];

const TECHNICAL_CONTENT = [
  { title: "Initial Candidate Actors", detail: "Sinh viên (Student), Chuyên viên Đào tạo (Registrar), Cổng thanh toán (Payment Gateway)." },
  { title: "High-level Candidate Features", detail: "Authenticate User, View Course Catalog, Register for Courses, Process Payment, View Schedule." },
  { title: "Assumptions & Known Constraints", detail: "Phải kết nối trực tiếp với CSDL Quản lý sinh viên hiện hành của Nhà trường; Tuân thủ chuẩn bảo mật PCI-DSS." },
  { title: "Preliminary NFRs (Phi chức năng)", detail: "Thời gian phản hồi < 2s, hoạt động 24/7 trong tuần cao điểm đăng ký, tương thích giao diện Mobile." }
];

const CHANGE_REQUESTS = [
  {
    id: "cr-1",
    title: "Bổ sung Xác thực Sinh trắc học FaceID khi bấm Đăng ký môn",
    source: "Đề xuất từ phòng An ninh thông tin",
    inScopeBaseline: false,
    impactTime: "+3 tuần",
    impactCost: "+15% ngân sách",
    recommendation: "Hoãn lại (Defer to Phase 2) vì vi phạm Baseline ban đầu và làm chậm tiến độ triển khai học kỳ tới."
  },
  {
    id: "cr-2",
    title: "Tự động gửi thông báo lịch học qua Zalo / SMS cho sinh viên",
    source: "Đề xuất từ Hội Sinh viên",
    inScopeBaseline: false,
    impactTime: "+1 tuần",
    impactCost: "+5% ngân sách",
    recommendation: "Chấp thuận có điều kiện (Approved with CR): Ký phụ lục hợp đồng bổ sung chi phí API SMS Gateway."
  }
];

export default function ProjectBaselineControlCockpit() {
  const [activeTab, setActiveTab] = useState("purposes"); // "purposes" | "content" | "simulator"
  const [contentFilter, setContentFilter] = useState("business"); // "business" | "technical"
  const [selectedCr, setSelectedCr] = useState(CHANGE_REQUESTS[0]);
  const [crDecision, setCrDecision] = useState(null);

  return (
    <div className="my-8 rounded-2xl border border-amber-200/80 bg-gradient-to-br from-[#faf8f4] via-white to-amber-50/40 p-6 md:p-8 shadow-xl shadow-amber-900/5 text-[#2c2a26]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-amber-200/60 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-950 border border-amber-300/60 mb-2">
            <Camera className="w-3.5 h-3.5 text-amber-700" />
            Mục I — Project Baseline Control Cockpit
          </div>
          <h3 className="text-xl md:text-2xl font-black tracking-tight text-stone-900">
            Thiết lập Mốc cơ sở & Buồng lái kiểm soát Scope Control
          </h3>
          <p className="text-sm text-stone-600 mt-1 max-w-2xl">
            Baseline là <strong>snapshot (ảnh chụp trạng thái)</strong> đã được thống nhất của Scope, Vision và Initial Requirements, đóng vai trò mốc tham chiếu ổn định (Stable Reference) trước khi bước vào phân tích chi tiết.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-xl border border-stone-200 self-start md:self-auto text-xs">
          <button
            onClick={() => setActiveTab("purposes")}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              activeTab === "purposes"
                ? "bg-white text-stone-900 shadow-sm border border-stone-200"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            4 Mục đích cốt lõi
          </button>
          <button
            onClick={() => setActiveTab("content")}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              activeTab === "content"
                ? "bg-white text-stone-900 shadow-sm border border-stone-200"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Nội dung Baseline
          </button>
          <button
            onClick={() => setActiveTab("simulator")}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              activeTab === "simulator"
                ? "bg-white text-stone-900 shadow-sm border border-stone-200"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Mô phỏng Change Request
          </button>
        </div>
      </div>

      {/* Alert Callout: Golden rule of Baseline */}
      <div className="mt-4 p-3.5 rounded-xl bg-amber-500/10 border border-amber-300 text-xs text-amber-950 flex items-start gap-2.5">
        <Sparkles className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
        <div>
          <span className="font-extrabold text-amber-900">Quy tắc vàng cần nhớ:</span> Baseline <strong>không phải là bộ requirements cuối cùng</strong> bất biến. Nó là thỏa thuận ban đầu giữa Sponsor và Project Team: <em>"Đây là những gì chúng ta đã thống nhất lúc bắt đầu"</em> để làm căn cứ đánh giá mọi sự phát sinh về sau.
        </div>
      </div>

      {/* Tab 1: 4 Purposes of Baseline */}
      {activeTab === "purposes" && (
        <div className="mt-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PURPOSES.map(p => {
              const Icon = p.icon;
              return (
                <div 
                  key={p.id}
                  className="p-4 rounded-xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-md transition-all space-y-2.5"
                >
                  <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-stone-900">{p.title}</h4>
                    <span className="text-[11px] font-semibold text-amber-800">{p.subtitle}</span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Tab 2: Baseline Content (Business vs Technical) */}
      {activeTab === "content" && (
        <div className="mt-6 space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-stone-500">Phân hệ nội dung:</span>
            <button
              onClick={() => setContentFilter("business")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                contentFilter === "business"
                  ? "bg-amber-600 text-white shadow-xs"
                  : "bg-stone-100 text-stone-700 hover:bg-stone-200"
              }`}
            >
              A. Business Content (Nghiệp vụ & Tầm nhìn)
            </button>
            <button
              onClick={() => setContentFilter("technical")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                contentFilter === "technical"
                  ? "bg-stone-900 text-white shadow-xs"
                  : "bg-stone-100 text-stone-700 hover:bg-stone-200"
              }`}
            >
              B. Technical / Process Content (Kỹ thuật sơ khởi)
            </button>
          </div>

          <div className="space-y-2.5">
            {(contentFilter === "business" ? BUSINESS_CONTENT : TECHNICAL_CONTENT).map((item, idx) => (
              <div 
                key={idx}
                className="p-3.5 rounded-xl bg-white border border-stone-200 flex flex-col sm:flex-row sm:items-start justify-between gap-2 shadow-xs"
              >
                <div className="sm:w-1/3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-600" />
                  <span className="font-bold text-xs text-stone-900">{item.title}</span>
                </div>
                <div className="sm:w-2/3 text-xs text-stone-600 bg-stone-50 p-2.5 rounded-lg border border-stone-200/70">
                  {item.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Change Request Simulator */}
      {activeTab === "simulator" && (
        <div className="mt-6 space-y-5">
          <div className="text-xs text-stone-600">
            Chọn một yêu cầu phát sinh (Change Request) trong quá trình dự án đang diễn ra để thực hành đánh giá dựa trên mốc Baseline ban đầu:
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {CHANGE_REQUESTS.map(cr => (
              <button
                key={cr.id}
                onClick={() => { setSelectedCr(cr); setCrDecision(null); }}
                className={`p-4 rounded-xl border text-left transition-all ${
                  selectedCr.id === cr.id
                    ? "bg-white border-amber-500 ring-2 ring-amber-500/20 shadow-md"
                    : "bg-white/70 hover:bg-white border-stone-200"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-stone-100 text-stone-600">
                    {cr.id.toUpperCase()}
                  </span>
                  <span className="text-[11px] font-semibold text-rose-600 flex items-center gap-1">
                    <XCircle className="w-3 h-3" /> Ngoài Baseline ban đầu
                  </span>
                </div>
                <h4 className="text-sm font-bold text-stone-900 mt-1">{cr.title}</h4>
                <p className="text-xs text-stone-500 mt-0.5">Nguồn: {cr.source}</p>
              </button>
            ))}
          </div>

          {/* Decision Workspace */}
          <div className="p-5 rounded-xl bg-white border border-stone-200 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-100 pb-3">
              <div>
                <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider">Hồ sơ đánh giá tác động:</span>
                <h4 className="font-extrabold text-sm text-stone-900 mt-0.5">{selectedCr.title}</h4>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <span className="px-2.5 py-1 rounded-md bg-stone-100 text-stone-700 font-bold border border-stone-200">
                  Thời gian: {selectedCr.impactTime}
                </span>
                <span className="px-2.5 py-1 rounded-md bg-stone-100 text-stone-700 font-bold border border-stone-200">
                  Chi phí: {selectedCr.impactCost}
                </span>
              </div>
            </div>

            {/* Decision Buttons */}
            <div>
              <span className="text-xs font-bold text-stone-700 block mb-2">
                Là chuyên viên BA / PM, bạn đưa ra quyết định xử lý thế nào?
              </span>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setCrDecision("reject")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                    crDecision === "reject"
                      ? "bg-rose-600 text-white border-rose-600 shadow-xs"
                      : "bg-white hover:bg-rose-50 text-rose-700 border-rose-200"
                  }`}
                >
                  Từ chối (Reject)
                </button>
                <button
                  onClick={() => setCrDecision("defer")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                    crDecision === "defer"
                      ? "bg-amber-600 text-white border-amber-600 shadow-xs"
                      : "bg-white hover:bg-amber-50 text-amber-800 border-amber-200"
                  }`}
                >
                  Hoãn sang Phase 2 (Defer)
                </button>
                <button
                  onClick={() => setCrDecision("accept")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                    crDecision === "accept"
                      ? "bg-emerald-600 text-white border-emerald-600 shadow-xs"
                      : "bg-white hover:bg-emerald-50 text-emerald-800 border-emerald-200"
                  }`}
                >
                  Ký duyệt tăng ngân sách (Approve with CR)
                </button>
              </div>
            </div>

            {/* Feedback based on baseline */}
            {crDecision && (
              <div className="p-3.5 rounded-lg bg-stone-50 border border-stone-200 text-xs leading-relaxed">
                <span className="font-bold text-stone-900 block mb-1">📋 Khuyến nghị thực tế từ chuyên gia:</span>
                {selectedCr.recommendation}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
