"use client";
import React, { useState } from "react";
import { 
  Users, 
  Clock, 
  Gauge, 
  Play, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  AlertTriangle, 
  Sparkles, 
  RotateCcw,
  Sliders,
  Calendar,
  Send
} from "lucide-react";

const EVENT_TYPES = [
  {
    id: "external",
    name: "A. External Event",
    badge: "Actor Kích Hoạt",
    icon: Users,
    color: "blue",
    borderClass: "border-blue-500",
    bgLight: "bg-blue-50",
    badgeClass: "bg-blue-100 text-blue-800 border-blue-200",
    tagline: "external actor → action → system responds",
    definition: "Được kích hoạt trực tiếp bởi một Actor bên ngoài thực hiện một hành động gửi yêu cầu vào hệ thống.",
    mnemonic: "Nhớ ngay: Có bàn tay con người hoặc hệ thống ngoài tác động.",
    examples: [
      { event: "Customer places an order", initiator: "Customer", response: "Create new order & reserve inventory" },
      { event: "Customer requests order status", initiator: "Customer", response: "Provide order status & tracking info" },
      { event: "Employee submits timesheet", initiator: "Employee", response: "Record hours worked & validate overtime" },
      { event: "Supplier delivers goods", initiator: "Supplier", response: "Update inventory levels & accept shipment" }
    ],
    simulatorType: "external",
    trapNote: "Bẫy thi: Thao tác do người dùng thực hiện qua màn hình giao diện (Web, App, Kiosk) luôn là External Event."
  },
  {
    id: "temporal",
    name: "B. Temporal Event",
    badge: "Thời Gian Kích Hoạt",
    icon: Clock,
    color: "amber",
    borderClass: "border-amber-500",
    bgLight: "bg-amber-50",
    badgeClass: "bg-amber-100 text-amber-800 border-amber-200",
    tagline: "clock / date / deadline / periodic time",
    definition: "Được kích hoạt khi đến một mốc thời điểm cụ thể (Point in Time), hạn chót (Deadline), hoặc chu kỳ định kỳ (Periodic Time).",
    mnemonic: "Nhớ ngay: Không ai bấm gì cả, đến giờ/ngày là hệ thống tự chạy.",
    examples: [
      { event: "Generate monthly invoices", initiator: "Last day of month (23:59)", response: "Produce and send invoices to clients" },
      { event: "Send payment reminder", initiator: "5 days before due date", response: "Notify customer via email/SMS" },
      { event: "Run payroll", initiator: "Every two weeks (Friday 17:00)", response: "Calculate and disburse salary to bank" },
      { event: "Archive closed orders", initiator: "End of quarter", response: "Move completed records to cold archive" }
    ],
    simulatorType: "temporal",
    trapNote: "Bẫy thi: Nhiều bạn tưởng 'Khách hàng nhận nhắc nợ' là do nhân viên bấm, nhưng thực tế là Temporal Event do đồng hồ hệ thống kích hoạt tự động!"
  },
  {
    id: "state",
    name: "C. State Event",
    badge: "Ngưỡng Nội Bộ Kích Hoạt",
    icon: Gauge,
    color: "purple",
    borderClass: "border-purple-500",
    bgLight: "bg-purple-50",
    badgeClass: "bg-purple-100 text-purple-800 border-purple-200",
    tagline: "internal condition / threshold / state change",
    definition: "Được kích hoạt khi hệ thống phát hiện một điều kiện nội bộ (Condition) hoặc trạng thái (Internal State) vượt qua một ngưỡng quy định.",
    mnemonic: "Nhớ ngay: Không do đồng hồ, cũng không ai trực tiếp ấn nút đó — dữ liệu chạm ngưỡng là kích nổ phản hồi.",
    examples: [
      { event: "Stock level reaches reorder point", initiator: "Quantity on hand ≤ reorder point", response: "Generate purchase requisition to supplier" },
      { event: "Account balance goes negative", initiator: "Account Balance < 0", response: "Flag account status, notify account manager" },
      { event: "Seat capacity reached", initiator: "Enrolled count = Section max capacity", response: "Close section immediately, open waitlist" },
      { event: "Machine temperature exceeds limit", initiator: "Sensor reading > 95°C threshold", response: "Trigger emergency shutdown alert" }
    ],
    simulatorType: "state",
    trapNote: "Bẫy thi: Phân biệt State Event vs External Event: Việc khách mua 1 món hàng là External, nhưng việc lượng tồn kho giảm về 0 làm trigger 'Báo hết hàng' là State Event!"
  }
];

export default function ThreeEventTypesDuelArena() {
  const [activeTypeId, setActiveTypeId] = useState("external");
  
  // Simulator states
  const [extSimDone, setExtSimDone] = useState(false);
  const [tempDay, setTempDay] = useState(28);
  const [stateSeats, setStateSeats] = useState(58);

  const activeType = EVENT_TYPES.find(t => t.id === activeTypeId) || EVENT_TYPES[0];

  const handleRunExtSim = () => {
    setExtSimDone(true);
    setTimeout(() => {
      // Keep state
    }, 300);
  };

  const resetSimulators = () => {
    setExtSimDone(false);
    setTempDay(28);
    setStateSeats(58);
  };

  return (
    <div className="my-8 rounded-2xl border border-stone-200 bg-white p-5 sm:p-7 shadow-sm">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-800 border border-blue-200">
            <Zap className="w-3.5 h-3.5" />
            Mục 3.3 • Business Event Classification
          </span>
          <h4 className="mt-1.5 text-lg sm:text-xl font-bold text-stone-900">
            Phân Loại 3 Loại Business Events: External, Temporal & State
          </h4>
          <p className="text-xs sm:text-sm text-stone-600">
            Trực quan hóa cách nhận diện và mô phỏng phản ứng của hệ thống với từng nguồn kích hoạt.
          </p>
        </div>
      </div>

      {/* 3 Main Tabs */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
        {EVENT_TYPES.map((t) => {
          const Icon = t.icon;
          const isActive = t.id === activeTypeId;
          return (
            <button
              key={t.id}
              onClick={() => {
                setActiveTypeId(t.id);
                resetSimulators();
              }}
              className={`p-4 rounded-xl border text-left transition-all duration-200 ${
                isActive 
                  ? `${t.bgLight} ${t.borderClass} border-2 shadow-sm scale-[1.02]` 
                  : "bg-stone-50 border-stone-200 hover:border-stone-300 text-stone-700"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <Icon className={`w-5 h-5 ${isActive ? "text-stone-900" : "text-stone-400"}`} />
                <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${t.badgeClass}`}>
                  {t.badge}
                </span>
              </div>
              <div className="font-bold text-sm sm:text-base text-stone-900">{t.name}</div>
              <div className="text-xs text-stone-500 font-mono mt-1 line-clamp-1">{t.tagline}</div>
            </button>
          );
        })}
      </div>

      {/* Active Tab Showcase */}
      <div className="mt-6 rounded-xl border border-stone-200 bg-stone-50/60 p-5">
        {/* Definition & Mnemonic Bar */}
        <div className="mb-5 flex flex-col md:flex-row md:items-center justify-between gap-3 bg-white p-4 rounded-xl border border-stone-200 shadow-xs">
          <div>
            <div className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-1">Định nghĩa cốt lõi</div>
            <div className="text-sm font-semibold text-stone-900">{activeType.definition}</div>
          </div>
          <div className="shrink-0 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 font-bold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>{activeType.mnemonic}</span>
          </div>
        </div>

        {/* Live Interactive Simulator Box */}
        <div className="mb-6 rounded-xl border-2 border-dashed border-stone-300 bg-white p-5">
          <div className="flex items-center justify-between mb-3 border-b border-stone-100 pb-2">
            <div className="flex items-center gap-2">
              <span className="p-1 rounded bg-stone-900 text-white">
                <Play className="w-3.5 h-3.5" />
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-stone-900">
                Live Interactive Simulator: {activeType.name}
              </span>
            </div>
            <button 
              onClick={resetSimulators}
              className="text-xs text-stone-500 hover:text-stone-800 flex items-center gap-1 font-medium"
            >
              <RotateCcw className="w-3 h-3" /> Reset
            </button>
          </div>

          {/* External Simulator */}
          {activeType.simulatorType === "external" && (
            <div className="space-y-4">
              <p className="text-xs text-stone-600">
                Mô phỏng: Khách hàng (External Actor) nhấn gửi yêu cầu đơn hàng từ trình duyệt web.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={handleRunExtSim}
                  disabled={extSimDone}
                  className={`px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2 transition-all ${
                    extSimDone 
                      ? "bg-stone-200 text-stone-500 cursor-not-allowed" 
                      : "bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow"
                  }`}
                >
                  <Send className="w-3.5 h-3.5" />
                  {extSimDone ? "Đã gửi đơn hàng" : "Click: Khách bấm 'Gửi đơn hàng (Submit)'"}
                </button>

                {extSimDone && (
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 animate-fadeIn">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Hệ thống phản hồi: Tạo Order #8921 ➔ Giữ tồn kho kho hàng ➔ Gửi Email xác nhận cho Khách.</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Temporal Simulator */}
          {activeType.simulatorType === "temporal" && (
            <div className="space-y-4">
              <p className="text-xs text-stone-600">
                Mô phỏng: Kéo ngày trong tháng để quan sát khi đồng hồ chạm ngày 31 (Cuối tháng) hệ thống tự xuất hóa đơn.
              </p>
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold text-stone-700 flex items-center gap-1">
                  <Calendar className="w-4 h-4 text-amber-600" />
                  Ngày hiện tại: <span className="font-mono text-sm text-stone-900 font-extrabold">{tempDay}/12</span>
                </span>
                <input 
                  type="range" 
                  min="28" 
                  max="31" 
                  value={tempDay} 
                  onChange={(e) => setTempDay(parseInt(e.target.value))}
                  className="w-44 accent-amber-600 cursor-pointer"
                />
                <button 
                  onClick={() => setTempDay(31)}
                  className="text-xs px-2.5 py-1 rounded bg-amber-100 text-amber-800 font-bold border border-amber-300 hover:bg-amber-200"
                >
                  Tua tới ngày 31
                </button>
              </div>

              {tempDay === 31 ? (
                <div className="flex items-center gap-2 text-xs font-bold text-amber-900 bg-amber-50 px-3 py-2 rounded-lg border border-amber-300 animate-fadeIn">
                  <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>23:59:59 ĐẠT MỐC CUỐI THÁNG: Hệ thống tự động kích hoạt batch job 'Generate Monthly Invoices' và xuất báo cáo!</span>
                </div>
              ) : (
                <div className="text-xs text-stone-500 italic">
                  (Chưa đến mốc thời gian quy định — hệ thống duy trì trạng thái chờ, không kích hoạt Use Case này).
                </div>
              )}
            </div>
          )}

          {/* State Simulator */}
          {activeType.simulatorType === "state" && (
            <div className="space-y-4">
              <p className="text-xs text-stone-600">
                Mô phỏng: Lớp học phần có giới hạn tối đa 60 chỗ. Tăng số sinh viên đăng ký để chạm ngưỡng tối đa.
              </p>
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-stone-700 flex items-center gap-1">
                  <Gauge className="w-4 h-4 text-purple-600" />
                  Sĩ số lớp: <span className="font-mono text-sm text-stone-900 font-extrabold">{stateSeats} / 60 chỗ</span>
                </span>
                <button
                  onClick={() => setStateSeats(prev => Math.min(60, prev + 1))}
                  disabled={stateSeats >= 60}
                  className="px-3 py-1 rounded bg-purple-100 text-purple-900 font-bold text-xs border border-purple-300 hover:bg-purple-200 disabled:opacity-50"
                >
                  +1 Sinh viên đăng ký
                </button>
                <button
                  onClick={() => setStateSeats(58)}
                  className="px-2.5 py-1 text-xs text-stone-500 hover:text-stone-800 underline"
                >
                  Reset về 58
                </button>
              </div>

              {stateSeats >= 60 ? (
                <div className="flex items-center gap-2 text-xs font-bold text-purple-900 bg-purple-50 px-3 py-2 rounded-lg border border-purple-300 animate-fadeIn">
                  <AlertTriangle className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>NGƯỠNG NỘI BỘ KÍCH HOẠT (Enrolled == 60): Hệ thống tự động đổi trạng thái lớp sang 'CLOSED' và mở danh sách hàng đợi (Waitlist)!</span>
                </div>
              ) : (
                <div className="text-xs text-stone-500 italic">
                  (Lớp còn {60 - stateSeats} chỗ — chưa thỏa mãn điều kiện trạng thái để kích hoạt sự kiện tự đóng lớp).
                </div>
              )}
            </div>
          )}
        </div>

        {/* Standardized Textbook Table */}
        <div className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-xs">
          <div className="p-3 bg-stone-100 border-b border-stone-200 flex items-center justify-between">
            <span className="text-xs font-bold text-stone-800 uppercase tracking-wider">
              Bảng Ví Dụ Chuẩn Giáo Trình ({activeType.name})
            </span>
            <span className="text-[11px] text-stone-500 font-mono">4 chuẩn sự kiện</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-50 text-stone-700 border-b border-stone-200">
                  <th className="p-2.5 font-bold">Tên Sự Kiện (Event)</th>
                  <th className="p-2.5 font-bold">Nguồn / Điều Kiện Kích Hoạt (Initiator)</th>
                  <th className="p-2.5 font-bold">Hệ Thống Phản Hồi (System Response)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 text-stone-800">
                {activeType.examples.map((row, idx) => (
                  <tr key={idx} className="hover:bg-stone-50/70 transition-colors">
                    <td className="p-2.5 font-bold text-stone-900">{row.event}</td>
                    <td className="p-2.5 font-mono text-[11px] text-stone-600">{row.initiator}</td>
                    <td className="p-2.5 text-stone-700">{row.response}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Trap Note */}
        <div className="mt-4 flex items-start gap-2 p-3 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-900">
          <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold">Lưu ý phân biệt khi đi thi: </span>
            {activeType.trapNote}
          </div>
        </div>
      </div>
    </div>
  );
}
