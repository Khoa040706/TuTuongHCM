"use client";
import React, { useState } from "react";
import { 
  Zap, 
  HelpCircle, 
  CheckCircle2, 
  ArrowRight, 
  Lightbulb, 
  ShieldAlert, 
  Clock, 
  UserCheck, 
  Activity, 
  Compass, 
  Sparkles,
  Layers,
  RotateCcw
} from "lucide-react";

export default function EventDrivenThinkingArena() {
  const [activeMindset, setActiveMindset] = useState("event"); // "function" | "event"
  const [selectedCharId, setSelectedCharId] = useState("char1");

  const CHARACTERISTICS = [
    {
      id: "char1",
      title: "1. Happens Once",
      subtitle: "Thời điểm dứt khoát",
      tag: "Discrete Time",
      icon: Clock,
      color: "emerald",
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
      activeBg: "bg-emerald-50 border-emerald-500 ring-emerald-200",
      description: "Sự kiện xảy ra tại một thời điểm cụ thể và kết thúc dứt khoát, không phải là một chuỗi tiến trình liên tục (not a continuous process).",
      example: "Sinh viên nhấn nút 'Submit' gửi đơn đăng ký vào lúc 08:15:22 sáng. Sự kiện xảy ra tại thời khắc đó, không kéo dài vô tận.",
      antiExample: "Tiến trình 'Sinh viên đang suy nghĩ chọn môn trong 3 ngày' KHÔNG PHẢI là một business event.",
      examTip: "Thi trắc nghiệm: Nếu đề bài mô tả một quá trình kéo dài liên tục không có mốc chốt hạ thì không được coi là 1 Business Event."
    },
    {
      id: "char2",
      title: "2. Has an Initiator",
      subtitle: "Chủ thể kích hoạt rõ ràng",
      tag: "Trigger Source",
      icon: UserCheck,
      color: "blue",
      badgeColor: "bg-blue-100 text-blue-800 border-blue-300",
      activeBg: "bg-blue-50 border-blue-500 ring-blue-200",
      description: "Mọi sự kiện bắt buộc phải có nguồn kích hoạt (Initiator). Có 3 nguồn: Con người/Hệ thống ngoài (Actor), Mốc thời gian (Clock/Time), hoặc Sự đổi trạng thái (State change).",
      example: "Actor 'Student' khởi tạo, hoặc Đồng hồ hệ thống 'System Clock' điểm 0h00, hoặc biến số 'Kho' tụt dưới ngưỡng.",
      antiExample: "Hệ thống tự nhiên sinh ra phản hồi mà không có bất kỳ trigger hay tác nhân nào thúc đẩy.",
      examTip: "Cột 'Source' trong Event Table luôn luôn truy nguyên từ 1 trong 3 nguồn kích hoạt này."
    },
    {
      id: "char3",
      title: "3. Requires a Response",
      subtitle: "Phản hồi quan sát được",
      tag: "Observable Action",
      icon: Activity,
      color: "amber",
      badgeColor: "bg-amber-100 text-amber-800 border-amber-300",
      activeBg: "bg-amber-50 border-amber-500 ring-amber-200",
      description: "Hệ thống nhận biết (Recognize) và BẮT BUỘC phải thực hiện hành động phản hồi có thể quan sát được (Observable Response).",
      example: "Ghi nhận dữ liệu vào CSDL, đổi trạng thái phiếu, in hóa đơn, hoặc gửi email/SMS thông báo đến người nhận.",
      antiExample: "Sự kiện xảy ra nhưng hệ thống hoàn toàn lờ đi, không lưu vết, không tính toán, không trả lời.",
      examTip: "Nếu một sự việc xảy ra mà hệ thống không cần nhận biết hay phản hồi gì, đó KHÔNG phải là Business Event của hệ thống đang xét."
    },
    {
      id: "char4",
      title: "4. Independent of Other Events",
      subtitle: "Đơn vị hành vi độc lập",
      tag: "Atomic Behavior",
      icon: Layers,
      color: "purple",
      badgeColor: "bg-purple-100 text-purple-800 border-purple-300",
      activeBg: "bg-purple-50 border-purple-500 ring-purple-200",
      description: "Mỗi event đứng riêng như một đơn vị hành vi hoàn chỉnh của hệ thống (Atomic Unit of System Behavior). Không phụ thuộc thứ tự khi phân tích.",
      example: "'Sinh viên đăng ký môn' và 'Giảng viên nộp điểm' là hai sự kiện hoàn toàn độc lập, ánh xạ vào 2 Use Case riêng biệt.",
      antiExample: "Gộp 5 thao tác nhỏ li ti (gõ tên, gõ pass, bấm nút) thành 5 events rời rạc.",
      examTip: "Nguyên tắc: Mỗi Business Event sẽ ánh xạ trực tiếp (1:1) sang đúng một System Use Case hoàn chỉnh."
    }
  ];

  const selectedChar = CHARACTERISTICS.find(c => c.id === selectedCharId) || CHARACTERISTICS[0];

  return (
    <div className="my-8 rounded-2xl border border-stone-200 bg-gradient-to-b from-stone-50 to-white p-5 sm:p-7 shadow-sm">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800 border border-emerald-200">
            <Zap className="w-3.5 h-3.5" />
            Mục 3.1 & 3.2 • Dual-Perspective Studio
          </span>
          <h4 className="mt-1.5 text-lg sm:text-xl font-bold text-stone-900">
            Chuyển Đổi Lăng Kính: Function-Oriented vs Event-Driven
          </h4>
          <p className="text-xs sm:text-sm text-stone-600">
            Khám phá cuộc cách mạng tư duy của Business Analyst và 4 đặc tính nguyên tử của Business Event.
          </p>
        </div>
      </div>

      {/* Duel Arena Switcher */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Function Oriented Card */}
        <div 
          onClick={() => setActiveMindset("function")}
          className={`cursor-pointer rounded-xl p-5 border-2 transition-all duration-200 relative ${
            activeMindset === "function" 
              ? "border-rose-400 bg-rose-50/50 shadow-md ring-2 ring-rose-200" 
              : "border-stone-200 bg-white hover:border-stone-300 opacity-75"
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-rose-100 text-rose-700">
                <HelpCircle className="w-4 h-4" />
              </span>
              <span className="text-xs font-bold tracking-wider text-rose-700 uppercase">
                Tư duy cũ (Bị động)
              </span>
            </div>
            {activeMindset === "function" && (
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-rose-200 text-rose-800">
                Đang đối chiếu
              </span>
            )}
          </div>
          <h5 className="text-base font-bold text-stone-900 mb-1">
            Function-Oriented Thinking
          </h5>
          <div className="p-3 bg-white/80 rounded-lg border border-rose-200 font-mono text-sm text-rose-900 mb-3">
            “What does the system do?”
          </div>
          <p className="text-xs text-stone-600 mb-3">
            BA tập trung suy nghĩ xem phần mềm cần có những nút bấm, hàm tính, hay chức năng kỹ thuật gì bên trong.
          </p>
          <div className="space-y-1.5 text-xs text-stone-700">
            <div className="flex items-start gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5 text-rose-500 mt-0.5 shrink-0" />
              <span>Dễ sa đà vào chi tiết kỹ thuật/giao diện quá sớm.</span>
            </div>
            <div className="flex items-start gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5 text-rose-500 mt-0.5 shrink-0" />
              <span>Cực kỳ dễ bỏ sót các nghiệp vụ ngầm hoặc ngoại lệ bên ngoài.</span>
            </div>
            <div className="flex items-start gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5 text-rose-500 mt-0.5 shrink-0" />
              <span>Khó giao tiếp và khó nhận được sự đồng thuận từ Stakeholders.</span>
            </div>
          </div>
        </div>

        {/* Event Driven Card */}
        <div 
          onClick={() => setActiveMindset("event")}
          className={`cursor-pointer rounded-xl p-5 border-2 transition-all duration-200 relative ${
            activeMindset === "event" 
              ? "border-emerald-500 bg-emerald-50/60 shadow-md ring-2 ring-emerald-300" 
              : "border-stone-200 bg-white hover:border-stone-300 opacity-75"
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-emerald-600 text-white">
                <Sparkles className="w-4 h-4" />
              </span>
              <span className="text-xs font-bold tracking-wider text-emerald-800 uppercase">
                Tư duy chuẩn BA (Chủ động)
              </span>
            </div>
            {activeMindset === "event" && (
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-200 text-emerald-800">
                Khuyên dùng ★
              </span>
            )}
          </div>
          <h5 className="text-base font-bold text-stone-900 mb-1">
            Event-Driven Thinking
          </h5>
          <div className="p-3 bg-white/90 rounded-lg border border-emerald-300 font-mono text-sm font-bold text-emerald-900 mb-3 shadow-inner">
            “What happens that the system must react to?”
          </div>
          <p className="text-xs text-stone-600 mb-3">
            BA đặt lăng kính ra ngoài thế giới thực: Chuyện gì xảy ra trong đời sống/nghiệp vụ mà hệ thống bắt buộc phải nhận biết và phản hồi?
          </p>
          <div className="space-y-1.5 text-xs text-stone-700">
            <div className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
              <span>Bám sát 100% nhu cầu vận hành thực tế của doanh nghiệp.</span>
            </div>
            <div className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
              <span>Bao quát trọn vẹn sự kiện bên ngoài, mốc thời gian và ngưỡng trạng thái.</span>
            </div>
            <div className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
              <span>Ánh xạ trực tiếp 1:1 sang đúng một System Use Case hoàn chỉnh!</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Pillars of Event Decomposition Technique */}
      <div className="mt-6 rounded-xl bg-stone-100 p-4 border border-stone-200">
        <h6 className="text-xs font-bold uppercase tracking-wider text-stone-700 mb-2 flex items-center gap-1.5">
          <Compass className="w-4 h-4 text-emerald-700" />
          4 Trụ Cột Của Kỹ Thuật Event Decomposition (Nhớ Kỹ Đi Thi)
        </h6>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          <div className="bg-white p-3 rounded-lg border border-stone-200">
            <div className="font-bold text-stone-900 mb-1">1. Là Kỹ Thuật (Technique)</div>
            <p className="text-stone-600">Không phải là một loại diagram UML. Mục tiêu là phát hiện events để sinh ra Use Cases.</p>
          </div>
          <div className="bg-white p-3 rounded-lg border border-stone-200">
            <div className="font-bold text-stone-900 mb-1">2. Event-Driven Mindset</div>
            <p className="text-stone-600">Luôn hỏi: "Điều gì xảy ra ngoài nghiệp vụ khiến hệ thống phải phản hồi?"</p>
          </div>
          <div className="bg-white p-3 rounded-lg border border-stone-200">
            <div className="font-bold text-stone-900 mb-1">3. Independent of Sequence</div>
            <p className="text-stone-600">Không quan tâm thứ tự trước sau khi liệt kê event. Thứ tự sẽ mô tả sau trong Use Case Flows.</p>
          </div>
          <div className="bg-white p-3 rounded-lg border border-stone-200">
            <div className="font-bold text-stone-900 mb-1">4. Feeds Directly into Use Cases</div>
            <p className="text-stone-600">Mỗi Business Event là trigger hợp thức cho đúng 1 System Use Case hoàn chỉnh.</p>
          </div>
        </div>
      </div>

      {/* 4 Characteristics of Business Event (Interactive Selector) */}
      <div className="mt-7">
        <div className="flex items-center justify-between mb-3">
          <h5 className="text-sm sm:text-base font-bold text-stone-900 flex items-center gap-2">
            <Activity className="w-4 h-4 text-emerald-700" />
            4 Đặc Tính Nguyên Tử Của Business Event (Bấm Để Xem Chi Tiết)
          </h5>
          <span className="text-xs text-stone-500">Recognize & Respond</span>
        </div>

        {/* Badges Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {CHARACTERISTICS.map((c) => {
            const Icon = c.icon;
            const isSelected = c.id === selectedCharId;
            return (
              <button
                key={c.id}
                onClick={() => setSelectedCharId(c.id)}
                className={`p-3 rounded-xl border text-left transition-all duration-200 ${
                  isSelected 
                    ? `${c.activeBg} border-2 shadow-sm scale-[1.02]` 
                    : "bg-white border-stone-200 hover:border-stone-300 text-stone-700"
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Icon className={`w-4 h-4 ${isSelected ? "text-stone-900" : "text-stone-400"}`} />
                  <span className="text-xs font-bold line-clamp-1">{c.title}</span>
                </div>
                <div className="text-[11px] text-stone-500 line-clamp-1">{c.subtitle}</div>
              </button>
            );
          })}
        </div>

        {/* Selected Characteristic Deep-Dive */}
        <div className="mt-4 rounded-xl border border-stone-200 bg-white p-5 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3 mb-3">
            <div className="flex items-center gap-2">
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${selectedChar.badgeColor}`}>
                {selectedChar.tag}
              </span>
              <h6 className="text-base font-bold text-stone-900">{selectedChar.title}: {selectedChar.subtitle}</h6>
            </div>
            <span className="text-xs text-stone-500 font-mono">Characteristic Inspector</span>
          </div>

          <p className="text-sm text-stone-800 leading-relaxed mb-4">
            {selectedChar.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3 text-xs">
            <div className="p-3 rounded-lg bg-emerald-50/70 border border-emerald-200 text-emerald-900">
              <div className="font-bold flex items-center gap-1.5 mb-1 text-emerald-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Ví Dụ Chuẩn (Real Event):
              </div>
              <div>{selectedChar.example}</div>
            </div>

            <div className="p-3 rounded-lg bg-rose-50/70 border border-rose-200 text-rose-900">
              <div className="font-bold flex items-center gap-1.5 mb-1 text-rose-800">
                <ShieldAlert className="w-3.5 h-3.5 text-rose-600" />
                Cạm Bẫy Phổ Biến (Anti-Pattern):
              </div>
              <div>{selectedChar.antiExample}</div>
            </div>
          </div>

          {/* Exam Tip */}
          <div className="flex items-start gap-2 p-2.5 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-900">
            <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Mẹo thi cử: </span>
              {selectedChar.examTip}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
