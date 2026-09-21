"use client";
import React, { useState } from "react";
import { MessageSquare, ShieldCheck, Activity, Monitor, Video, ChevronRight, Check, Zap, Lock, Users, Sparkles } from "lucide-react";

const TOOLS = [
  {
    id: "web-im",
    title: "Web-based IM",
    subtitle: "Nhắn tin qua trình duyệt",
    category: "Linh hoạt",
    icon: MessageSquare,
    badgeColor: "bg-blue-100 text-blue-800",
    summary: "Sử dụng trực tiếp qua giao diện web, không cần cài đặt phần mềm máy khách cục bộ.",
    protocols: "HTTP/HTTPS, WebSockets, Long Polling",
    examples: "WhatsApp Web, Telegram Web, Messenger Web",
    pros: ["Tiện lợi, dùng trên mọi máy tính công cộng", "Không tốn dung lượng ổ cứng", "Tự động cập nhật phiên bản mới nhất"],
    cons: ["Bị hạn chế bởi sandbox của trình duyệt", "Khó tích hợp sâu vào hệ điều hành và thông báo đẩy khi đóng tab"]
  },
  {
    id: "enterprise-im",
    title: "Enterprise IM",
    subtitle: "Nhắn tin cấp doanh nghiệp",
    category: "Bảo mật cao",
    icon: ShieldCheck,
    badgeColor: "bg-emerald-100 text-emerald-800",
    summary: "Hệ thống tin nhắn chuyên biệt cho doanh nghiệp với bảo mật đa tầng và quản trị tập trung.",
    protocols: "XMPP, MTProto, Proprietary encrypted TLS/WebSocket",
    examples: "Slack, Microsoft Teams, Cisco Webex Teams",
    pros: ["Mã hóa đầu cuối (E2EE) và chứng chỉ tuân thủ SOC2/HIPAA", "Tích hợp danh bạ nhân viên Active Directory / SSO", "Lưu trữ lịch sử chat phục vụ kiểm toán nội bộ"],
    cons: ["Đòi hỏi chi phí bản quyền định kỳ", "Quản trị viên cần cấu hình phân quyền kênh phức tạp"]
  },
  {
    id: "presence",
    title: "Presence Technology",
    subtitle: "Công nghệ hiện diện tức thời",
    category: "Nhận biết ngữ cảnh",
    icon: Activity,
    badgeColor: "bg-purple-100 text-purple-800",
    summary: "Tự động phát hiện và hiển thị trạng thái khả dụng của người dùng theo thời gian thực.",
    protocols: "SIP/SIMPLE, XMPP, WebSockets Heartbeat",
    examples: "Trạng thái Xanh (Online), Đỏ (Bận/In a Call), Vàng (Vắng mặt), Xám (Offline)",
    pros: ["Tránh làm phiền khi đồng nghiệp đang thuyết trình", "Tự động đồng bộ với lịch họp Microsoft Outlook / Google Calendar", "Định tuyến tin nhắn và cuộc gọi thông minh"],
    cons: ["Có thể gây áp lực giám sát giờ giấc làm việc đối với nhân viên"]
  },
  {
    id: "web-conf",
    title: "Web Conferencing",
    subtitle: "Hội thảo trực tuyến & Webinar",
    category: "Phát sóng 1-nhiều",
    icon: Monitor,
    badgeColor: "bg-amber-100 text-amber-800",
    summary: "Tổ chức hội thảo, chia sẻ màn hình và slide trình chiếu cho hàng trăm đến hàng ngàn người tham gia.",
    protocols: "WebRTC, RTMP, HLS Video Streaming",
    examples: "Zoom Webinar, Microsoft Live Events, GoToWebinar",
    pros: ["Quy mô tham gia cực lớn (lên tới 10.000+ người)", "Công cụ tương tác phong phú: Bình chọn (Polls), Q&A kiểm duyệt, Giơ tay", "Ghi hình đám mây và báo cáo thống kê chuyên cần"],
    cons: ["Độ trễ cao hơn đàm thoại 2 chiều (từ 1-3 giây)", "Tính tương tác âm thanh cá nhân bị giới hạn bởi người chủ trì (Host)"]
  },
  {
    id: "video-conf",
    title: "Video Conferencing",
    subtitle: "Hội nghị truyền hình đa điểm",
    category: "Tương tác 2 chiều",
    icon: Video,
    badgeColor: "bg-rose-100 text-rose-800",
    summary: "Đàm thoại video và âm thanh độ nét cao (Full HD/4K) tương tác đồng thời giữa các chi nhánh.",
    protocols: "WebRTC, H.323, SIP, Codec H.264/H.265, Opus Audio",
    examples: "Zoom Meetings, Google Meet, Cisco Webex",
    pros: ["Độ trễ siêu thấp (< 200ms) như đang ngồi cùng một phòng", "Khử tiếng ồn bằng AI, làm mờ hậu cảnh, xóa tiếng vọng", "Chia nhóm phòng thảo luận nhỏ (Breakout Rooms) tức thì"],
    cons: ["Đòi hỏi băng thông Internet ổn định và đường truyền tốc độ cao", "Tiêu hao pin và tài nguyên CPU/GPU máy trạm khi xử lý đa luồng video"]
  }
];

export default function CollaborationToolsBentoGrid() {
  const [activeTool, setActiveTool] = useState(TOOLS[1]); // Default to Enterprise IM

  return (
    <div className="my-8 p-5 sm:p-8 rounded-3xl bg-white border border-stone-200 shadow-md font-sans">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-black uppercase tracking-widest text-emerald-600">
            Bento Grid Studio • Mục II & III
          </span>
        </div>
        <h3 className="text-lg sm:text-xl font-black text-stone-900 mt-1">
          Hệ Thống Công Cụ Nhắn Tin & Hội Nghị Trực Tuyến Doanh Nghiệp
        </h3>
        <p className="text-xs sm:text-sm text-stone-500 mt-1">
          Bấm vào từng khối Bento bên dưới để mở rộng cơ chế kỹ thuật, giao thức mạng và phân tích ưu/nhược điểm.
        </p>
      </div>

      {/* Bento Grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
        {TOOLS.map((tool) => {
          const Icon = tool.icon;
          const isActive = activeTool.id === tool.id;

          return (
            <button
              key={tool.id}
              type="button"
              onClick={() => setActiveTool(tool)}
              className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                isActive
                  ? "bg-stone-900 text-white border-stone-900 shadow-md scale-[1.01]"
                  : "bg-stone-50/70 hover:bg-stone-100 border-stone-200 text-stone-700 hover:border-stone-300"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                    isActive ? "bg-white/20 text-white" : "bg-white border border-stone-200 text-stone-800 shadow-2xs"
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                    isActive ? "bg-white/20 text-white" : tool.badgeColor
                  }`}>
                    {tool.category}
                  </span>
                </div>

                <h4 className="font-extrabold text-sm leading-snug">{tool.title}</h4>
                <span className={`text-xs block mb-2 ${isActive ? "text-white/70" : "text-stone-500"}`}>
                  {tool.subtitle}
                </span>
                <p className={`text-xs line-clamp-2 leading-relaxed ${isActive ? "text-white/85" : "text-stone-600"}`}>
                  {tool.summary}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-current/10 flex items-center justify-between text-[11px] font-bold">
                <span className={isActive ? "text-accent" : "text-stone-400"}>Xem chi tiết</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </button>
          );
        })}
      </div>

      {/* Expanded Detail Panel */}
      <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-4 animate-in fade-in duration-300">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-200 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-bold shadow-xs">
              {React.createElement(activeTool.icon, { className: "w-5 h-5" })}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-black text-base text-stone-900">{activeTool.title}</h4>
                <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${activeTool.badgeColor}`}>
                  {activeTool.category}
                </span>
              </div>
              <p className="text-xs text-stone-500">{activeTool.subtitle} • Sản phẩm tiêu biểu: <strong>{activeTool.examples}</strong></p>
            </div>
          </div>

          <div className="text-left sm:text-right">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-stone-400 block">Giao thức cốt lõi:</span>
            <code className="text-xs font-mono font-bold text-accent bg-accent/10 px-2 py-0.5 rounded">
              {activeTool.protocols}
            </code>
          </div>
        </div>

        {/* Pros & Cons 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200 space-y-2">
            <span className="text-xs font-black uppercase tracking-wider text-emerald-900 flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-600" /> Ưu điểm vượt trội:
            </span>
            <ul className="space-y-1.5 text-xs text-emerald-950 leading-relaxed">
              {activeTool.pros.map((p, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 space-y-2">
            <span className="text-xs font-black uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-amber-600" /> Giới hạn & Lưu ý quản trị:
            </span>
            <ul className="space-y-1.5 text-xs text-amber-950 leading-relaxed">
              {activeTool.cons.map((c, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
