"use client";
import React, { useState, useEffect } from "react";
import { 
  Table, 
  Play, 
  ArrowRight, 
  Filter, 
  CheckCircle2, 
  Info, 
  Sparkles, 
  RotateCcw,
  Zap,
  ChevronRight,
  Eye
} from "lucide-react";

const COLUMNS = [
  { id: "col1", name: "1. Event", field: "event", desc: "Tên Business Event (chuyện gì xảy ra ngoài đời)" },
  { id: "col2", name: "2. Trigger", field: "trigger", desc: "Dấu hiệu nhận biết sự kiện bắt đầu diễn ra" },
  { id: "col3", name: "3. Source", field: "source", desc: "Tác nhân/Nguồn khởi phát (Actor, Time, State)" },
  { id: "col4", name: "4. Use Case", field: "useCase", desc: "System Use Case tương ứng của hệ thống" },
  { id: "col5", name: "5. Response", field: "response", desc: "Hành động hoặc dữ liệu đầu ra của hệ thống" },
  { id: "col6", name: "6. Destination", field: "destination", desc: "Chủ thể hoặc hệ thống nhận kết quả phản hồi" }
];

const EVENT_ROWS = [
  {
    id: "row1",
    type: "external",
    typeLabel: "External",
    typeColor: "bg-blue-100 text-blue-800 border-blue-200",
    event: "Student wants to register",
    trigger: "Registration request",
    source: "Student",
    sourceType: "External Actor",
    useCase: "Register for Course",
    response: "Enrollment confirmation",
    destination: "Student",
    stepExplanation: [
      "1. Sự kiện nghiệp vụ: Sinh viên có nhu cầu muốn đăng ký học phần cho học kỳ mới.",
      "2. Dấu hiệu kích hoạt (Trigger): Sinh viên nhấn nút 'Gửi phiếu đăng ký' qua cổng Web Portal.",
      "3. Nguồn phát sinh (Source): Chủ thể là Actor 'Student' (người dùng ngoài hệ thống).",
      "4. System Use Case: Hệ thống kích hoạt ca sử dụng chính: 'Register for Course'.",
      "5. Phản hồi của hệ thống (Response): Kiểm tra tiên quyết, trừ chỗ và tạo giấy biên nhận 'Enrollment confirmation'.",
      "6. Đích nhận kết quả (Destination): Phiếu biên nhận và thời khóa biểu được gửi về cho chính 'Student'."
    ]
  },
  {
    id: "row2",
    type: "temporal",
    typeLabel: "Temporal",
    typeColor: "bg-amber-100 text-amber-800 border-amber-200",
    event: "Registration period opens",
    trigger: "System date reached",
    source: "Time (System Clock)",
    sourceType: "Temporal Trigger",
    useCase: "Open Registration",
    response: "Registration enabled",
    destination: "Student",
    stepExplanation: [
      "1. Sự kiện nghiệp vụ: Đợt đăng ký học phần chính thức mở cửa theo kế hoạch đào tạo.",
      "2. Dấu hiệu kích hoạt (Trigger): Ngày và giờ hiện tại trên máy chủ chạm mốc thời gian mở cổng.",
      "3. Nguồn phát sinh (Source): Mốc thời gian 'Time / System Clock' (không cần con người can thiệp).",
      "4. System Use Case: Hệ thống khởi động ca sử dụng tự động: 'Open Registration'.",
      "5. Phản hồi của hệ thống (Response): Mở khóa cơ sở dữ liệu các lớp học phần ('Registration enabled').",
      "6. Đích nhận kết quả (Destination): 'Student' thấy cổng mở và bắt đầu thao tác đăng ký."
    ]
  },
  {
    id: "row3",
    type: "state",
    typeLabel: "State",
    typeColor: "bg-purple-100 text-purple-800 border-purple-200",
    event: "Section reaches capacity",
    trigger: "Enrolled = capacity",
    source: "System state",
    sourceType: "Internal Threshold",
    useCase: "Close Section",
    response: "Waitlist activated",
    destination: "Student",
    stepExplanation: [
      "1. Sự kiện nghiệp vụ: Lớp học phần đã đủ số lượng sinh viên tối đa cho phép.",
      "2. Dấu hiệu kích hoạt (Trigger): Biến đếm sĩ số đạt ngưỡng: Enrolled count == Max capacity.",
      "3. Nguồn phát sinh (Source): Trạng thái nội bộ của hệ thống ('System state').",
      "4. System Use Case: Hệ thống tự động kích hoạt ca sử dụng: 'Close Section'.",
      "5. Phản hồi của hệ thống (Response): Đóng quyền đăng ký lớp chính thức, tự động bật hàng đợi 'Waitlist activated'.",
      "6. Đích nhận kết quả (Destination): Các 'Student' đăng ký sau được đưa vào danh sách chờ."
    ]
  },
  {
    id: "row4",
    type: "external",
    typeLabel: "External",
    typeColor: "bg-blue-100 text-blue-800 border-blue-200",
    event: "Instructor submits grades",
    trigger: "Grade submission",
    source: "Instructor",
    sourceType: "External Actor",
    useCase: "Submit Grades",
    response: "Transcript update",
    destination: "Registrar",
    stepExplanation: [
      "1. Sự kiện nghiệp vụ: Giảng viên nộp bảng điểm tổng kết môn học vào cuối kỳ.",
      "2. Dấu hiệu kích hoạt (Trigger): Giảng viên ký số và nộp bảng điểm qua giao diện ('Grade submission').",
      "3. Nguồn phát sinh (Source): Actor 'Instructor' (Giảng viên phụ trách).",
      "4. System Use Case: Hệ thống kích hoạt ca sử dụng: 'Submit Grades'.",
      "5. Phản hồi của hệ thống (Response): Cập nhật bảng điểm học tập của lớp và tính lại GPA sinh viên.",
      "6. Đích nhận kết quả (Destination): Phòng đào tạo ('Registrar') nhận biên bản khóa điểm chính thức."
    ]
  }
];

export default function InteractiveEventTableStudio() {
  const [filterType, setFilterType] = useState("all");
  const [selectedRowId, setSelectedRowId] = useState("row1");
  const [isTracing, setIsTracing] = useState(false);
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const filteredRows = EVENT_ROWS.filter(r => filterType === "all" || r.type === filterType);
  const activeRow = EVENT_ROWS.find(r => r.id === selectedRowId) || EVENT_ROWS[0];

  const handleStartTrace = (rowId) => {
    setSelectedRowId(rowId);
    setIsTracing(true);
    setActiveStepIndex(0);
  };

  const handleNextStep = () => {
    if (activeStepIndex < 5) {
      setActiveStepIndex(prev => prev + 1);
    } else {
      setIsTracing(false);
    }
  };

  const handlePrevStep = () => {
    if (activeStepIndex > 0) {
      setActiveStepIndex(prev => prev - 1);
    }
  };

  const handleStopTrace = () => {
    setIsTracing(false);
    setActiveStepIndex(0);
  };

  return (
    <div className="my-8 rounded-2xl border border-stone-200 bg-white p-5 sm:p-7 shadow-sm">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800 border border-emerald-200">
            <Table className="w-3.5 h-3.5" />
            Mục 3.4 & 3.5 • 6-Column Event Table Studio
          </span>
          <h4 className="mt-1.5 text-lg sm:text-xl font-bold text-stone-900">
            Bảng Phân Tích Sự Kiện Chuẩn: Course Registration System
          </h4>
          <p className="text-xs sm:text-sm text-stone-600">
            Mạch tư duy logic: <span className="font-semibold text-emerald-800">Event → Trigger → Source → Use Case → Response → Destination</span>
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex items-center gap-1.5 bg-stone-100 p-1 rounded-xl border border-stone-200 text-xs font-medium">
          <Filter className="w-3.5 h-3.5 text-stone-500 ml-1.5 mr-0.5" />
          <button
            onClick={() => setFilterType("all")}
            className={`px-2.5 py-1 rounded-lg transition-all ${
              filterType === "all" ? "bg-white text-stone-900 font-bold shadow-xs" : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Tất cả (4)
          </button>
          <button
            onClick={() => setFilterType("external")}
            className={`px-2.5 py-1 rounded-lg transition-all ${
              filterType === "external" ? "bg-blue-600 text-white font-bold shadow-xs" : "text-stone-600 hover:text-stone-900"
            }`}
          >
            External (2)
          </button>
          <button
            onClick={() => setFilterType("temporal")}
            className={`px-2.5 py-1 rounded-lg transition-all ${
              filterType === "temporal" ? "bg-amber-600 text-white font-bold shadow-xs" : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Temporal (1)
          </button>
          <button
            onClick={() => setFilterType("state")}
            className={`px-2.5 py-1 rounded-lg transition-all ${
              filterType === "state" ? "bg-purple-600 text-white font-bold shadow-xs" : "text-stone-600 hover:text-stone-900"
            }`}
          >
            State (1)
          </button>
        </div>
      </div>

      {/* Cognitive Pipeline Flow Banner */}
      <div className="mt-5 rounded-xl bg-stone-50 p-3.5 border border-stone-200">
        <div className="text-[11px] font-bold uppercase tracking-wider text-stone-500 mb-2 flex items-center justify-between">
          <span>Chuỗi Mạch Tư Duy 6 Cột Bắt Buộc Của Event Table:</span>
          {isTracing && (
            <span className="text-emerald-700 font-bold flex items-center gap-1 animate-pulse">
              <Sparkles className="w-3 h-3" /> Đang trace: Bước {activeStepIndex + 1}/6
            </span>
          )}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {COLUMNS.map((col, idx) => {
            const isCurrentStep = isTracing && activeStepIndex === idx;
            const isPassedStep = isTracing && activeStepIndex > idx;
            return (
              <div 
                key={col.id} 
                className={`p-2.5 rounded-lg border text-xs transition-all ${
                  isCurrentStep 
                    ? "bg-emerald-600 text-white border-emerald-700 shadow-md font-bold scale-[1.03]" 
                    : isPassedStep
                      ? "bg-emerald-50 border-emerald-300 text-emerald-900"
                      : "bg-white border-stone-200 text-stone-700"
                }`}
              >
                <div className="font-bold flex items-center justify-between mb-0.5">
                  <span>{col.name}</span>
                  {isPassedStep && <CheckCircle2 className="w-3 h-3 text-emerald-600" />}
                </div>
                <div className={`text-[10px] leading-tight ${isCurrentStep ? "text-emerald-100" : "text-stone-500"}`}>
                  {col.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tracing Mode Controller */}
      {isTracing && (
        <div className="mt-4 rounded-xl border-2 border-emerald-500 bg-emerald-50/50 p-4 animate-fadeIn shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-600 text-white">
                Trace Flow Mode
              </span>
              <span className="text-sm font-bold text-stone-900">
                Sự kiện: {activeRow.event}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrevStep}
                disabled={activeStepIndex === 0}
                className="px-2.5 py-1 text-xs rounded bg-white border border-stone-300 disabled:opacity-40 font-medium"
              >
                Quay lại
              </button>
              <button
                onClick={handleNextStep}
                className="px-3 py-1 text-xs rounded bg-emerald-700 hover:bg-emerald-800 text-white font-bold flex items-center gap-1 shadow-xs"
              >
                {activeStepIndex < 5 ? (
                  <>Bước tiếp theo ({activeStepIndex + 2}/6) <ChevronRight className="w-3.5 h-3.5" /></>
                ) : (
                  <>Hoàn tất trace <CheckCircle2 className="w-3.5 h-3.5" /></>
                )}
              </button>
              <button
                onClick={handleStopTrace}
                className="px-2 py-1 text-xs rounded text-stone-500 hover:text-stone-800"
              >
                Đóng
              </button>
            </div>
          </div>
          <div className="text-xs sm:text-sm font-medium text-emerald-950 bg-white p-3 rounded-lg border border-emerald-200">
            {activeRow.stepExplanation[activeStepIndex]}
          </div>
        </div>
      )}

      {/* Main Standard Table */}
      <div className="mt-5 rounded-xl border border-stone-200 overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-stone-100 text-stone-800 border-b border-stone-200">
                <th className="p-3 font-bold">Loại Sự Kiện</th>
                <th className="p-3 font-bold">Event (Tên sự kiện)</th>
                <th className="p-3 font-bold">Trigger (Dấu hiệu)</th>
                <th className="p-3 font-bold">Source (Khởi phát)</th>
                <th className="p-3 font-bold text-emerald-800 bg-emerald-50/70">System Use Case</th>
                <th className="p-3 font-bold">Response (Phản hồi)</th>
                <th className="p-3 font-bold">Destination (Đích đến)</th>
                <th className="p-3 font-bold text-center">Mô Phỏng</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 text-stone-800">
              {filteredRows.map((row) => {
                const isRowSelected = row.id === selectedRowId;
                return (
                  <tr 
                    key={row.id}
                    onClick={() => setSelectedRowId(row.id)}
                    className={`cursor-pointer transition-colors ${
                      isRowSelected ? "bg-emerald-50/40" : "hover:bg-stone-50"
                    }`}
                  >
                    <td className="p-3">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${row.typeColor}`}>
                        {row.typeLabel}
                      </span>
                    </td>
                    <td className="p-3 font-bold text-stone-900">{row.event}</td>
                    <td className="p-3 text-stone-600 font-mono text-[11px]">{row.trigger}</td>
                    <td className="p-3">
                      <span className="font-semibold text-stone-800">{row.source}</span>
                      <div className="text-[10px] text-stone-500">{row.sourceType}</div>
                    </td>
                    <td className="p-3 font-bold text-emerald-900 bg-emerald-50/50">
                      <span className="underline decoration-emerald-500 underline-offset-2">
                        {row.useCase}
                      </span>
                    </td>
                    <td className="p-3 text-stone-700">{row.response}</td>
                    <td className="p-3 font-semibold text-stone-800">{row.destination}</td>
                    <td className="p-3 text-center">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleStartTrace(row.id);
                        }}
                        className="px-2.5 py-1 rounded bg-stone-900 hover:bg-emerald-700 text-white font-bold text-[11px] inline-flex items-center gap-1 transition-all shadow-xs"
                      >
                        <Play className="w-3 h-3" /> Trace Flow
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Insight Footer */}
      <div className="mt-4 flex items-center justify-between text-xs text-stone-500 pt-2 border-t border-stone-100">
        <div className="flex items-center gap-1.5">
          <Info className="w-4 h-4 text-emerald-600" />
          <span>Quy tắc vàng: Cột <strong>Use Case</strong> phản ánh hành vi mà hệ thống phải làm, kết nối trực tiếp với <strong>Response</strong> cho <strong>Destination</strong>.</span>
        </div>
        <span className="font-mono text-[11px]">{filteredRows.length} sự kiện mẫu</span>
      </div>
    </div>
  );
}
