"use client";
import React, { useState } from "react";
import { 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  ShieldAlert, 
  Layers, 
  Clock, 
  Users, 
  Gauge, 
  RotateCcw,
  Target,
  FileCheck
} from "lucide-react";

const MAPPINGS = [
  {
    id: "map1",
    event: "Student requests enrollment",
    eventType: "External",
    typeColor: "bg-blue-100 text-blue-800 border-blue-200",
    useCase: "Register for Course",
    actor: "Student",
    rationale: "Sinh viên chủ động gửi yêu cầu đăng ký môn học qua cổng thông tin. Hệ thống kích hoạt đúng 1 Use Case đáp ứng là 'Register for Course'."
  },
  {
    id: "map2",
    event: "Registration period opens",
    eventType: "Temporal",
    typeColor: "bg-amber-100 text-amber-800 border-amber-200",
    useCase: "Open Registration",
    actor: "System Clock",
    rationale: "Đồng hồ hệ thống chạm đúng 08:00 ngày quy định. Hệ thống tự động kích hoạt duy nhất 1 Use Case 'Open Registration' để mở cổng."
  },
  {
    id: "map3",
    event: "Section reaches capacity",
    eventType: "State",
    typeColor: "bg-purple-100 text-purple-800 border-purple-200",
    useCase: "Close Section / Open Waitlist",
    actor: "System State",
    rationale: "Sĩ số lớp đạt mốc 60/60. Trạng thái nội bộ chạm ngưỡng kích hoạt đúng 1 Use Case tự động khóa lớp và mở danh sách chờ."
  },
  {
    id: "map4",
    event: "Instructor submits grades",
    eventType: "External",
    typeColor: "bg-blue-100 text-blue-800 border-blue-200",
    useCase: "Submit Grades",
    actor: "Instructor",
    rationale: "Giảng viên gửi bảng điểm cuối kỳ vào phần mềm. Hệ thống kích hoạt đúng 1 Use Case 'Submit Grades' để lưu điểm và tính lại GPA."
  },
  {
    id: "map5",
    event: "End of semester arrives",
    eventType: "Temporal",
    typeColor: "bg-amber-100 text-amber-800 border-amber-200",
    useCase: "Archive Semester Records",
    actor: "System Clock",
    rationale: "Thời khắc kết thúc học kỳ đến theo lịch đào tạo. Hệ thống tự động kích hoạt 1 Use Case 'Archive Semester Records' để đóng băng dữ liệu."
  }
];

export default function OneEventOneUseCaseStudio() {
  const [selectedMapId, setSelectedMapId] = useState("map1");
  const [activeTab, setActiveTab] = useState("all");

  const filteredMappings = MAPPINGS.filter(m => {
    if (activeTab === "all") return true;
    return m.eventType.toLowerCase() === activeTab;
  });

  const selectedMap = MAPPINGS.find(m => m.id === selectedMapId) || MAPPINGS[0];

  return (
    <div className="my-8 rounded-2xl border border-stone-200 bg-white p-5 sm:p-7 shadow-sm">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800 border border-emerald-200">
            <Zap className="w-3.5 h-3.5" />
            Mục 5.1 & 5.3 • Golden Law Studio
          </span>
          <h4 className="mt-1.5 text-lg sm:text-xl font-bold text-stone-900">
            Quy Tắc Vàng 1:1 — 1 Business Event ⇔ 1 System Use Case
          </h4>
          <p className="text-xs sm:text-sm text-stone-600">
            Định luật bất biến: Mỗi sự kiện nghiệp vụ tương ứng chính xác với một Use Case — và mỗi Use Case được kích hoạt bởi duy nhất một sự kiện.
          </p>
        </div>
      </div>

      {/* Core Formula Box */}
      <div className="mt-5 rounded-xl border-2 border-emerald-500 bg-emerald-50/60 p-4 sm:p-5 shadow-xs">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-200 px-2 py-0.5 rounded">
              Nguyên Lý Cốt Lõi Của Use Case Modeling
            </span>
            <div className="mt-1 font-mono text-base sm:text-lg font-extrabold text-emerald-950">
              1 Business Event ⟷ 1 System Use Case
            </div>
            <p className="text-xs text-emerald-900 mt-1">
              “Every business event corresponds to exactly one system use case – and every system use case is triggered by exactly one event.”
            </p>
          </div>

          {/* 3 Criteria Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 w-full md:w-auto">
            <div className="bg-white p-2.5 rounded-lg border border-emerald-200 text-center shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
              <div className="text-xs font-bold text-stone-900">1. Đầy Đủ</div>
              <div className="text-[10px] text-stone-500">Không sót event</div>
            </div>
            <div className="bg-white p-2.5 rounded-lg border border-emerald-200 text-center shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
              <div className="text-xs font-bold text-stone-900">2. Không Trùng</div>
              <div className="text-[10px] text-stone-500">Tránh duplicate</div>
            </div>
            <div className="bg-white p-2.5 rounded-lg border border-emerald-200 text-center shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
              <div className="text-xs font-bold text-stone-900">3. Bám Thực Tế</div>
              <div className="text-[10px] text-stone-500">Từ Event Table</div>
            </div>
          </div>
        </div>
      </div>

      {/* Two-Column Interactive Studio */}
      <div className="mt-6">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-stone-600 flex items-center gap-1.5">
            <Target className="w-4 h-4 text-emerald-700" />
            Bảng Ánh Xạ Trực Quan 1:1 (Click Từng Cặp Để Xem Phân Tích):
          </span>

          {/* Filter Pills */}
          <div className="flex items-center gap-1 text-xs bg-stone-100 p-1 rounded-lg border border-stone-200">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-2 py-0.5 rounded font-medium transition-all ${
                activeTab === "all" ? "bg-white text-stone-900 font-bold shadow-xs" : "text-stone-600"
              }`}
            >
              Tất cả (5)
            </button>
            <button
              onClick={() => setActiveTab("external")}
              className={`px-2 py-0.5 rounded font-medium transition-all ${
                activeTab === "external" ? "bg-blue-600 text-white font-bold shadow-xs" : "text-stone-600"
              }`}
            >
              External
            </button>
            <button
              onClick={() => setActiveTab("temporal")}
              className={`px-2 py-0.5 rounded font-medium transition-all ${
                activeTab === "temporal" ? "bg-amber-600 text-white font-bold shadow-xs" : "text-stone-600"
              }`}
            >
              Temporal
            </button>
            <button
              onClick={() => setActiveTab("state")}
              className={`px-2 py-0.5 rounded font-medium transition-all ${
                activeTab === "state" ? "bg-purple-600 text-white font-bold shadow-xs" : "text-stone-600"
              }`}
            >
              State
            </button>
          </div>
        </div>

        {/* Rows Mapping Container */}
        <div className="space-y-2.5">
          {filteredMappings.map((item) => {
            const isSelected = item.id === selectedMapId;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedMapId(item.id)}
                className={`cursor-pointer rounded-xl border p-3.5 transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                  isSelected 
                    ? "bg-emerald-50/70 border-emerald-500 ring-2 ring-emerald-200 shadow-sm" 
                    : "bg-stone-50/60 border-stone-200 hover:border-stone-300 hover:bg-white"
                }`}
              >
                {/* Left: Event */}
                <div className="flex items-center gap-2.5 flex-1">
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border shrink-0 ${item.typeColor}`}>
                    {item.eventType}
                  </span>
                  <div>
                    <div className="text-xs font-bold text-stone-900">{item.event}</div>
                    <div className="text-[11px] text-stone-500">Khởi phát: {item.actor}</div>
                  </div>
                </div>

                {/* Center: 1:1 Arrow Link */}
                <div className="flex items-center gap-1.5 shrink-0 px-2 text-stone-400">
                  <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.2 rounded">1 : 1</span>
                  <ArrowRight className="w-4 h-4 text-emerald-600" />
                </div>

                {/* Right: Use Case */}
                <div className="flex-1 text-left sm:text-right">
                  <div className="text-xs font-extrabold text-emerald-900 bg-white sm:bg-transparent p-2 sm:p-0 rounded border sm:border-0 border-stone-200">
                    {item.useCase}
                  </div>
                  <div className="text-[10px] text-stone-500">System Use Case tương ứng</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Pair Deep Analysis Box */}
        <div className="mt-4 rounded-xl border border-stone-200 bg-white p-4 shadow-xs">
          <div className="flex items-center justify-between border-b border-stone-100 pb-2 mb-2">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span className="text-xs font-bold text-stone-900">
                Phân tích cặp ánh xạ: <span className="text-emerald-800 font-extrabold">{selectedMap.event}</span> ⟷ <span className="text-emerald-800 font-extrabold">{selectedMap.useCase}</span>
              </span>
            </div>
            <span className="text-[11px] font-mono text-stone-400">1:1 Validation</span>
          </div>
          <p className="text-xs text-stone-700 leading-relaxed font-medium">
            {selectedMap.rationale}
          </p>
        </div>

        {/* Common Exam Pitfall */}
        <div className="mt-4 flex items-start gap-2.5 p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900">
          <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold">Cạm bẫy thiết kế cần tránh: </span>
            Tuyệt đối không gom 5 sự kiện khác nhau thành 1 Use Case khổng lồ (God Use Case), và cũng không xé nhỏ 1 sự kiện thành nhiều Use Case vụn vặt (như "Nhập mã môn", "Bấm xác nhận" ➔ đó chỉ là các bước con bên trong luồng kịch bản).
          </div>
        </div>
      </div>
    </div>
  );
}
