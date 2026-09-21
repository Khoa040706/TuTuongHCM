"use client";
import React, { useState } from "react";
import { 
  Cloud, 
  Globe, 
  Laptop, 
  Building2, 
  Server, 
  ShieldCheck, 
  Zap, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Lock, 
  FileText, 
  PhoneCall, 
  Users,
  Compass,
  Layers,
  HelpCircle,
  Activity
} from "lucide-react";

const TOPOLOGY_NODES = {
  remote: {
    title: "1. Nhân Viên Phân Tán (Remote Workers)",
    icon: Laptop,
    badge: "Thiết bị Đầu cuối",
    color: "bg-sky-50 border-sky-200 text-sky-800",
    tools: ["Web IM (Slack, Teams)", "Softphone VoIP", "Google Docs Client"],
    desc: "Làm việc từ bất kỳ đâu (Work from Anywhere) qua kết nối Internet mã hóa TLS 1.3.",
    keyBenefit: "Không phụ thuộc vào phần cứng cố định tại văn phòng."
  },
  cloud: {
    title: "2. Cloud Collaboration Hub (Bộ Não Đám Mây)",
    icon: Cloud,
    badge: "Trung tâm Xử lý",
    color: "bg-emerald-50 border-emerald-200 text-emerald-800",
    tools: ["Operational Transformation Engine", "Cloud PBX & SIP Server", "DLP & Single Sign-On"],
    desc: "Đóng vai trò trọng tài trung tâm: đồng bộ dữ liệu thời gian thực, lưu trữ 1 nguồn sự thật duy nhất.",
    keyBenefit: "Tự động co giãn tài nguyên, dự phòng đa vùng và bảo vệ dữ liệu."
  },
  hq: {
    title: "3. Trụ Sở & Chi Nhánh (HQ & Branches)",
    icon: Building2,
    badge: "Hạ tầng Doanh nghiệp",
    color: "bg-purple-50 border-purple-200 text-purple-800",
    tools: ["Enterprise Wiki (Confluence)", "Lớp học ảo & Town Hall", "IP Phone máy bàn"],
    desc: "Kết nối liên thông mạng nội bộ với đám mây, triệt tiêu 100% cước gọi thoại nội bộ liên tỉnh.",
    keyBenefit: "Tiết kiệm 60-80% chi phí đầu tư tổng đài và máy chủ cục bộ."
  }
};

const PIPELINE_STEPS = [
  {
    step: "01",
    label: "Hạ Tầng Giao Tiếp",
    subtitle: "Web IM & Trạng Thái Hiện Diện",
    desc: "Thiết lập kết nối tức thời qua WebSockets và SIP/SIMPLE, nhận biết ngữ cảnh sẵn sàng làm việc.",
    tag: "Mục I & II"
  },
  {
    step: "02",
    label: "Số Hóa Thoại & Fax",
    subtitle: "Cloud PBX & Internet Fax",
    desc: "Chuyển đổi tín hiệu analog sang gói tin IP (SIP/RTP), gửi nhận fax không cần giấy in qua email.",
    tag: "Mục III"
  },
  {
    step: "03",
    label: "Đồng Biên Tập Thời Gian Thực",
    subtitle: "Google Docs, M365 & OT/CRDT",
    desc: "Nhiều người cùng gõ chữ đồng thời, tự động giải quyết xung đột mà không cần khóa tệp (File Locking).",
    tag: "Mục IV"
  },
  {
    step: "04",
    label: "Quản Trị Tri Thức & Bảo Mật",
    subtitle: "Enterprise Wiki & Chính Sách DLP",
    desc: "Văn bản hóa trí tuệ tập thể, phân quyền 4 cấp độ (Owner, Editor, Commenter, Viewer) và chống rò rỉ.",
    tag: "Mục V - VII"
  }
];

const EXAM_WEIGHTS = [
  { subject: "Đồng biên tập & Thuật toán OT / CRDT (Mục IV)", weight: "35%", barColor: "from-sky-500 to-blue-600" },
  { subject: "VoIP, Giao thức SIP/RTP & Cloud PBX (Mục III)", weight: "25%", barColor: "from-emerald-500 to-teal-600" },
  { subject: "Nhắn tin tức thời, WebRTC & Presence (Mục II)", weight: "20%", barColor: "from-amber-500 to-orange-600" },
  { subject: "Wiki, Blog & An ninh Phân quyền DLP (Mục V & VII)", weight: "20%", barColor: "from-purple-500 to-pink-600" }
];

export default function Chapter8HeroBanner() {
  const [activeView, setActiveView] = useState("topology"); // 'topology' | 'pipeline' | 'exam'
  const [selectedNode, setSelectedNode] = useState("cloud");

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const nodeInfo = TOPOLOGY_NODES[selectedNode];

  return (
    <div className="relative my-8 rounded-3xl overflow-hidden border border-stone-200/90 bg-linear-to-br from-white via-[#faf9f6] to-[#f4f1ea] shadow-xl font-sans text-stone-850">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-bl from-sky-400/15 via-teal-400/10 to-transparent blur-3xl rounded-full pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-linear-to-tr from-emerald-400/10 to-transparent blur-2xl rounded-full pointer-events-none -ml-20 -mb-20" />

      {/* Top Banner Header */}
      <div className="relative p-6 sm:p-8 border-b border-stone-200/70">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-stone-900 text-amber-300 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" />
            <span>Mục ★ Overview Toàn Bộ Chương 8</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-100 text-sky-800 border border-sky-200/80">
            <Globe className="w-3.5 h-3.5 text-sky-600" />
            <span>Cloud Collaboration Ecosystem</span>
          </div>
        </div>

        <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-stone-900 tracking-tight leading-snug">
          Chương 8: Collaboration in a Cloud Environment
        </h2>
        <p className="mt-2 text-stone-600 text-xs sm:text-sm max-w-3xl leading-relaxed font-medium">
          Hệ sinh thái cộng tác đám mây toàn diện: Giao tiếp thời gian thực, đồng biên tập tài liệu không khóa tệp (OT/CRDT), tổng đài ảo viễn thông Cloud PBX và không gian tri thức mở doanh nghiệp.
        </p>

        {/* 4 Quick Stats Badges Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-5 border-t border-stone-200/60">
          <div className="p-3 rounded-2xl bg-white/90 border border-stone-200/80 shadow-2xs">
            <span className="text-[10px] font-black uppercase tracking-wider text-stone-400 block">Quy mô Giáo trình</span>
            <div className="text-lg sm:text-xl font-black text-sky-700 mt-0.5">32 Tiểu mục</div>
            <span className="text-[11px] text-stone-500 font-medium">Bảo toàn 100% chuẩn thi</span>
          </div>

          <div className="p-3 rounded-2xl bg-white/90 border border-stone-200/80 shadow-2xs">
            <span className="text-[10px] font-black uppercase tracking-wider text-stone-400 block">Công nghệ Mũi nhọn</span>
            <div className="text-lg sm:text-xl font-black text-emerald-700 mt-0.5">8 Trụ cột</div>
            <span className="text-[11px] text-stone-500 font-medium">IM, VoIP, Docs, Wiki...</span>
          </div>

          <div className="p-3 rounded-2xl bg-white/90 border border-stone-200/80 shadow-2xs">
            <span className="text-[10px] font-black uppercase tracking-wider text-stone-400 block">Bộ Mô phỏng</span>
            <div className="text-lg sm:text-xl font-black text-amber-700 mt-0.5">2 Visualizers</div>
            <span className="text-[11px] text-stone-500 font-medium">OT Co-authoring & VoIP</span>
          </div>

          <div className="p-3 rounded-2xl bg-white/90 border border-stone-200/80 shadow-2xs">
            <span className="text-[10px] font-black uppercase tracking-wider text-stone-400 block">Ôn Tập Ghi Nhớ</span>
            <div className="text-lg sm:text-xl font-black text-purple-700 mt-0.5">12 Cards SM-2</div>
            <span className="text-[11px] text-stone-500 font-medium">16 Thuật ngữ đối chiếu</span>
          </div>
        </div>

        {/* 3-Perspective View Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-3 mt-6">
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveView("topology")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeView === "topology"
                  ? "bg-stone-900 text-white shadow-md -translate-y-0.5"
                  : "bg-white/80 border border-stone-200 text-stone-600 hover:bg-stone-100 hover:text-stone-900"
              }`}
            >
              <Activity className="w-3.5 h-3.5 text-sky-400" />
              <span>1. Kiến Trúc Mạng Lưới (Live Topology)</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveView("pipeline")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeView === "pipeline"
                  ? "bg-stone-900 text-white shadow-md -translate-y-0.5"
                  : "bg-white/80 border border-stone-200 text-stone-600 hover:bg-stone-100 hover:text-stone-900"
              }`}
            >
              <Compass className="w-3.5 h-3.5 text-emerald-400" />
              <span>2. Lộ Trình Pipeline 4 Bước</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveView("exam")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeView === "exam"
                  ? "bg-stone-900 text-white shadow-md -translate-y-0.5"
                  : "bg-white/80 border border-stone-200 text-stone-600 hover:bg-stone-100 hover:text-stone-900"
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>3. Radar Trọng Số Thi Cử</span>
            </button>
          </div>

          {/* Quick Action Shortcuts */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollToSection("part-cloud-ch8-s4-1-p1")}
              className="text-[11px] font-bold text-sky-700 bg-sky-50 hover:bg-sky-100 px-3 py-1.5 rounded-xl border border-sky-200 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Zap className="w-3 h-3 text-sky-600" />
              <span>Thử Mô phỏng OT</span>
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("part-cloud-ch8-s7-3-p1")}
              className="text-[11px] font-bold text-stone-700 bg-stone-100 hover:bg-stone-200 px-3 py-1.5 rounded-xl border border-stone-300 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Layers className="w-3 h-3 text-stone-600" />
              <span>Xem Ma trận</span>
            </button>
          </div>
        </div>
      </div>

      {/* Dynamic Viewport Content */}
      <div className="relative p-6 sm:p-8">
        {/* VIEW 1: LIVE TOPOLOGY */}
        {activeView === "topology" && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-xs font-black uppercase tracking-wider text-stone-500 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                Mạng Lưới Kết Nối Thời Gian Thực Giữa 3 Khối Thực Thể:
              </span>
              <span className="text-[11px] text-stone-500 italic">
                Bấm vào từng khối bên dưới để xem luồng dịch vụ và giao thức tương ứng
              </span>
            </div>

            {/* 3 Node Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {Object.entries(TOPOLOGY_NODES).map(([key, item]) => {
                const Icon = item.icon;
                const isSelected = selectedNode === key;

                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setSelectedNode(key)}
                    className={`p-5 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? "bg-white border-sky-500 shadow-md ring-2 ring-sky-400/30 scale-[1.02]"
                        : "bg-white/80 border-stone-200 hover:bg-white text-stone-700 hover:border-stone-300 shadow-2xs"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${
                          isSelected ? "bg-sky-600 text-white shadow-xs" : "bg-stone-100 text-stone-800"
                        }`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${item.color}`}>
                          {item.badge}
                        </span>
                      </div>

                      <h4 className="font-extrabold text-sm text-stone-900 leading-snug mb-1">{item.title}</h4>
                      <p className="text-xs text-stone-500 leading-relaxed line-clamp-2">{item.desc}</p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] font-bold text-sky-600 flex items-center justify-between">
                      <span>{isSelected ? "Đang chọn xem" : "Bấm để kiểm tra"}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Node Details Box */}
            <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <h4 className="font-extrabold text-sm text-stone-900">{nodeInfo.title}</h4>
                </div>
                <span className="text-xs font-semibold text-stone-600">{nodeInfo.keyBenefit}</span>
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block mb-2">
                  Các ứng dụng & dịch vụ đám mây vận hành:
                </span>
                <div className="flex flex-wrap gap-2">
                  {nodeInfo.tools.map((t, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-xl bg-stone-100 border border-stone-200 text-xs font-semibold text-stone-800 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      <span>{t}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 2: PIPELINE ROADMAP */}
        {activeView === "pipeline" && (
          <div className="space-y-4 animate-in fade-in duration-300">
            <div className="flex items-center justify-between text-xs font-black uppercase tracking-wider text-stone-500 mb-2">
              <span>Lộ Trình Tiến Trình 4 Bước Chuyển Đổi Số Nơi Làm Việc:</span>
              <span className="text-accent font-bold">Xuyên suốt Chương 8</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {PIPELINE_STEPS.map((item, idx) => (
                <div
                  key={idx}
                  className="relative p-5 rounded-2xl bg-white border border-stone-200 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="w-8 h-8 rounded-xl bg-stone-100 group-hover:bg-accent group-hover:text-white transition-colors text-stone-850 font-black text-xs flex items-center justify-center font-mono">
                        {item.step}
                      </span>
                      <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-stone-100 text-stone-600">
                        {item.tag}
                      </span>
                    </div>

                    <h4 className="font-extrabold text-stone-900 text-sm mb-1">{item.label}</h4>
                    <span className="text-xs font-semibold text-accent block mb-2">{item.subtitle}</span>
                    <p className="text-xs text-stone-500 leading-relaxed">{item.desc}</p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] font-bold text-stone-400 group-hover:text-accent transition-colors">
                    <span>Bước tiến trình</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 3: EXAM RADAR & WEIGHTS */}
        {activeView === "exam" && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-100 pb-3">
                <h4 className="font-extrabold text-sm text-stone-900 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Ma Trận Phân Bổ Tỷ Trọng Điểm Thi Trắc Nghiệm Chương 8</span>
                </h4>
                <span className="text-xs font-bold text-stone-500">Khảo sát trên ngân hàng đề thi chính thức</span>
              </div>

              <div className="space-y-4">
                {EXAM_WEIGHTS.map((ew, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-bold text-stone-800">
                      <span>{ew.subject}</span>
                      <span className="font-mono font-black text-sky-700">{ew.weight}</span>
                    </div>
                    <div className="h-2.5 w-full rounded-full bg-stone-100 overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-linear-to-r ${ew.barColor} transition-all duration-700`}
                        style={{ width: ew.weight }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3 Exam Traps Warning Box */}
            <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-2">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-amber-900">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>3 Bẫy Trắc Nghiệm Kinh Điển Cần Chú Ý:</span>
              </div>
              <ul className="space-y-1.5 text-xs text-amber-950 leading-relaxed">
                <li>• <strong>Bẫy SIP vs RTP:</strong> Đề thi hay hỏi 'Giao thức nào truyền âm thanh thoại?'. Đáp án đúng là <strong>RTP</strong>, SIP chỉ là giao thức báo hiệu thiết lập phiên.</li>
                <li>• <strong>Bẫy File Locking vs OT:</strong> Đám mây hiện đại dùng <strong>Operational Transformation (OT)</strong> để nhiều người cùng sửa, KHÔNG dùng File Locking khóa file.</li>
                <li>• <strong>Bẫy Wiki vs Blog:</strong> Wiki là chỉnh sửa tập thể mở (nhiều tác giả); Blog là xuất bản một chiều từ ban lãnh đạo kèm phần bình luận.</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
