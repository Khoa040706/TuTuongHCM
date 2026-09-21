"use client";
import React, { useState } from "react";
import { MessageSquare, Edit3, Calendar, BookOpen, Layers, ShieldCheck, Zap, Sparkles, ArrowRight } from "lucide-react";

const PILLARS = [
  {
    id: "comm",
    name: "1. Communication (Giao tiếp)",
    tagline: "Kết nối tức thời, đa phương tiện",
    icon: MessageSquare,
    badgeColor: "bg-sky-100 text-sky-800 border-sky-200",
    activeColor: "bg-sky-600 text-white",
    tools: ["Web IM (Chat web)", "Enterprise IM (Slack, Teams)", "Cloud VoIP & PBX", "Video Conferencing (Zoom)"],
    coreValue: "Xóa nhòa khoảng cách địa lý, thông báo trạng thái hiện diện (Presence) và hội nghị truyền hình chuẩn HD.",
    examTip: "Trọng tâm thi: Mã hóa E2EE, giao thức SIP/RTP trong VoIP, và tính năng lưu trữ lịch sử chat tập trung."
  },
  {
    id: "cocreation",
    name: "2. Co-creation (Đồng sáng tạo)",
    tagline: "Biên tập đồng thời, giải quyết xung đột",
    icon: Edit3,
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    activeColor: "bg-emerald-600 text-white",
    tools: ["Google Docs / Sheets", "Microsoft 365 Online", "Cloud Presentation", "Interactive Whiteboards"],
    coreValue: "Nhiều người cùng gõ vào 1 tài liệu thời gian thực; tự động lưu lịch sử phiên bản (Version History).",
    examTip: "Trọng tâm thi: Phân biệt cơ chế khóa file cổ điển (File Locking) và thuật toán Operational Transformation (OT) của đám mây."
  },
  {
    id: "coordination",
    name: "3. Coordination (Điều phối)",
    tagline: "Đồng bộ lịch biểu và quy trình làm việc",
    icon: Calendar,
    badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
    activeColor: "bg-amber-600 text-white",
    tools: ["Google Calendar / Outlook", "Collaboration Exchanges", "Task Management (Trello, Asana)", "Approval Workflows"],
    coreValue: "Kiểm tra lịch rảnh/bận tự động, đặt lịch họp xuyên múi giờ, thông báo nhắc hẹn tức thì qua cloud push.",
    examTip: "Trọng tâm thi: Sàn giao dịch cộng tác (Collaboration Exchange) gom nguồn lực và luồng công việc vào một nơi."
  },
  {
    id: "content",
    name: "4. Content & Knowledge (Tri thức)",
    tagline: "Lưu trữ tập trung, chia sẻ có phân quyền",
    icon: BookOpen,
    badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
    activeColor: "bg-purple-600 text-white",
    tools: ["Enterprise Wiki (Confluence)", "Corporate Blogs", "Enterprise Video Streaming", "Cloud File Sync (Drive/OneDrive)"],
    coreValue: "Tập trung hóa tài sản trí tuệ doanh nghiệp, hỗ trợ phân quyền chi tiết (Granular Permissions: Viewer, Commenter, Editor).",
    examTip: "Trọng tâm thi: Wiki cho phép tập thể cùng biên soạn tri thức; Blog phục vụ giao tiếp phát động từ ban lãnh đạo."
  }
];

export default function CloudCollaborationRadar() {
  const [selectedPillar, setSelectedPillar] = useState(PILLARS[0]);

  return (
    <div className="my-8 p-5 sm:p-8 rounded-3xl bg-white border border-stone-200 shadow-md font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-[11px] font-black uppercase tracking-widest text-accent">
              Ecosystem Radar • 4 Trụ Cột Cộng Tác
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-black text-stone-900 mt-1">
            Bản Đồ Hệ Sinh Thái Cộng Tác Đám Mây Hiện Đại
          </h3>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Bấm vào từng trụ cột bên dưới để kích hoạt góc nhìn kiến trúc và các điểm chốt thi cử trọng tâm.
          </p>
        </div>

        <div className="px-3 py-1.5 rounded-xl bg-stone-100 border border-stone-200/80 text-[11px] font-bold text-stone-600 self-start sm:self-auto flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5 text-accent" />
          <span>Toàn cảnh Chương 8</span>
        </div>
      </div>

      {/* 4 Pillar Selection Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {PILLARS.map((pillar) => {
          const Icon = pillar.icon;
          const isSelected = selectedPillar.id === pillar.id;

          return (
            <button
              key={pillar.id}
              type="button"
              onClick={() => setSelectedPillar(pillar)}
              className={`p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                isSelected
                  ? `${pillar.activeColor} border-transparent shadow-lg scale-[1.02] -translate-y-0.5`
                  : "bg-stone-50/70 hover:bg-stone-100 border-stone-200 text-stone-700 hover:border-stone-300"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold ${
                  isSelected ? "bg-white/20 text-white" : "bg-white border border-stone-200 text-stone-800 shadow-2xs"
                }`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                  isSelected ? "bg-white/20 text-white" : "bg-stone-200/80 text-stone-600"
                }`}>
                  Trụ cột #{pillar.id === "comm" ? 1 : pillar.id === "cocreation" ? 2 : pillar.id === "coordination" ? 3 : 4}
                </span>
              </div>

              <div>
                <h4 className="font-extrabold text-xs sm:text-sm line-clamp-1">{pillar.name}</h4>
                <p className={`text-[11px] mt-1 line-clamp-1 ${isSelected ? "text-white/80" : "text-stone-500"}`}>
                  {pillar.tagline}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Detail Showcase Panel */}
      <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-4 animate-in fade-in duration-300">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-accent text-white flex items-center justify-center font-bold">
              {React.createElement(selectedPillar.icon, { className: "w-4 h-4" })}
            </div>
            <div>
              <h4 className="font-black text-sm sm:text-base text-stone-900">{selectedPillar.name}</h4>
              <p className="text-xs text-stone-500">{selectedPillar.tagline}</p>
            </div>
          </div>
          <span className="text-xs font-bold text-accent px-3 py-1 rounded-full bg-accent/10 border border-accent/20 self-start sm:self-auto">
            Khảo sát chuyên sâu
          </span>
        </div>

        {/* Tools list */}
        <div>
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-stone-500 block mb-2">
            Công nghệ & Ứng dụng đại diện trong giáo trình:
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {selectedPillar.tools.map((t, idx) => (
              <div key={idx} className="p-2.5 rounded-xl bg-white border border-stone-200 text-xs font-semibold text-stone-800 flex items-center gap-2 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                <span className="line-clamp-1">{t}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Core Value & Exam gotcha */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
          <div className="p-3.5 rounded-xl bg-white border border-stone-200 space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-extrabold text-stone-800">
              <Zap className="w-3.5 h-3.5 text-amber-500" />
              <span>Giá trị vận hành doanh nghiệp:</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              {selectedPillar.coreValue}
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-sky-50/70 border border-sky-200 space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-extrabold text-sky-900">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
              <span>Trọng tâm ghi nhớ thi cử:</span>
            </div>
            <p className="text-xs text-sky-800 leading-relaxed font-medium">
              {selectedPillar.examTip}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
