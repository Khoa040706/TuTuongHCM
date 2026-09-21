"use client";
import React, { useState } from "react";
import { 
  Users, 
  Clock, 
  Server, 
  GraduationCap, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  ShieldAlert, 
  Sparkles, 
  RotateCcw,
  Activity,
  Maximize2
} from "lucide-react";

const ACTORS = [
  {
    id: "act-student",
    name: "Student",
    role: "Primary Business Actor",
    icon: GraduationCap,
    color: "emerald",
    badgeClass: "bg-emerald-100 text-emerald-800 border-emerald-300",
    activeClass: "bg-emerald-500 text-white shadow-lg scale-105",
    associatedUseCases: ["uc-register"],
    description: "Nằm ngoài biên giới hệ thống. Tương tác trực tiếp để đăng ký các môn học trong kỳ."
  },
  {
    id: "act-instructor",
    name: "Instructor",
    role: "Primary Business Actor",
    icon: Users,
    color: "blue",
    badgeClass: "bg-blue-100 text-blue-800 border-blue-300",
    activeClass: "bg-blue-500 text-white shadow-lg scale-105",
    associatedUseCases: ["uc-grades"],
    description: "Nằm ngoài biên giới hệ thống. Thực hiện nghiệp vụ nhập và nộp bảng điểm tổng kết lớp học."
  },
  {
    id: "act-clock",
    name: "System Clock",
    role: "Temporal Trigger Actor",
    icon: Clock,
    color: "amber",
    badgeClass: "bg-amber-100 text-amber-800 border-amber-300",
    activeClass: "bg-amber-500 text-white shadow-lg scale-105",
    associatedUseCases: ["uc-open", "uc-archive"],
    description: "Bộ đếm thời gian máy chủ ngoài luồng nghiệp vụ con người. Tự động kích hoạt mở đợt đăng ký và lưu trữ hồ sơ cuối kỳ."
  },
  {
    id: "act-gateway",
    name: "Payment Gateway",
    role: "External Server Actor",
    icon: Server,
    color: "purple",
    badgeClass: "bg-purple-100 text-purple-800 border-purple-300",
    activeClass: "bg-purple-500 text-white shadow-lg scale-105",
    associatedUseCases: ["uc-payment"],
    description: "Hệ thống ngân hàng/ví điện tử đối tác ngoài trường. Tiếp nhận và phản hồi kết quả xác thực thanh toán tiền học."
  }
];

const USE_CASES = [
  {
    id: "uc-register",
    name: "Register for Course",
    category: "Enrollment",
    actors: ["act-student"],
    desc: "Sinh viên lựa chọn các học phần, kiểm tra điều kiện tiên quyết và ghi danh."
  },
  {
    id: "uc-grades",
    name: "Submit Grades",
    category: "Academic Records",
    actors: ["act-instructor"],
    desc: "Giảng viên xác nhận và khóa điểm chính thức cho lớp học phần."
  },
  {
    id: "uc-open",
    name: "Open Registration",
    category: "System Administration",
    actors: ["act-clock"],
    desc: "Tự động kích hoạt khi chạm thời điểm bắt đầu đợt đăng ký học phần."
  },
  {
    id: "uc-payment",
    name: "Process Payment",
    category: "Finance",
    actors: ["act-gateway"],
    desc: "Kết nối cổng thanh toán đối tác để thực hiện trừ tiền học phí trực tuyến."
  },
  {
    id: "uc-archive",
    name: "Archive Records",
    category: "System Administration",
    actors: ["act-clock"],
    desc: "Lưu chuyển dữ liệu các môn đã hoàn tất sang kho lưu trữ vĩnh viễn cuối kỳ."
  }
];

export default function SystemBoundaryActorLinkerStudio() {
  const [selectedActorId, setSelectedActorId] = useState("act-student");
  const [selectedUcId, setSelectedUcId] = useState(null);

  const activeActor = ACTORS.find(a => a.id === selectedActorId);
  const activeUc = USE_CASES.find(u => u.id === selectedUcId);

  const handleSelectActor = (actorId) => {
    setSelectedActorId(actorId);
    setSelectedUcId(null);
  };

  const handleSelectUc = (ucId) => {
    setSelectedUcId(ucId);
    const uc = USE_CASES.find(u => u.id === ucId);
    if (uc && uc.actors.length > 0) {
      setSelectedActorId(uc.actors[0]);
    }
  };

  return (
    <div className="my-8 rounded-2xl border border-stone-200 bg-white p-5 sm:p-7 shadow-sm">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800 border border-emerald-200">
            <Layers className="w-3.5 h-3.5" />
            Mục 5.4 • System Boundary & Association Studio
          </span>
          <h4 className="mt-1.5 text-lg sm:text-xl font-bold text-stone-900">
            Biên Ranh Giới Hệ Thống & Đường Liên Kết (Association Lines)
          </h4>
          <p className="text-xs sm:text-sm text-stone-600">
            Actor luôn nằm <span className="font-bold text-rose-700">bên ngoài</span> System Boundary — Use Case luôn nằm <span className="font-bold text-emerald-700">bên trong</span> System Boundary.
          </p>
        </div>

        <button
          onClick={() => {
            setSelectedActorId("act-student");
            setSelectedUcId(null);
          }}
          className="text-xs text-stone-500 hover:text-stone-800 flex items-center gap-1 font-medium"
        >
          <RotateCcw className="w-3 h-3" /> Reset View
        </button>
      </div>

      {/* Interactive System Boundary Canvas */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        {/* Left: Actors Outside Boundary */}
        <div className="lg:col-span-4 space-y-2.5">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-800 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
              Outside Boundary (Actors)
            </span>
            <span className="text-[11px] text-stone-400 font-mono">4 Tác Nhân</span>
          </div>

          {ACTORS.map((actor) => {
            const Icon = actor.icon;
            const isSelected = actor.id === selectedActorId;
            return (
              <div
                key={actor.id}
                onClick={() => handleSelectActor(actor.id)}
                className={`cursor-pointer p-3.5 rounded-xl border transition-all duration-200 flex items-center justify-between ${
                  isSelected 
                    ? "bg-stone-900 text-white border-stone-900 shadow-md ring-2 ring-stone-400 scale-[1.02]" 
                    : "bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-800"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${isSelected ? "bg-stone-800 text-amber-300" : "bg-white text-stone-700 border border-stone-200"}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-xs sm:text-sm">{actor.name}</div>
                    <div className={`text-[10px] ${isSelected ? "text-stone-300" : "text-stone-500"}`}>
                      {actor.role}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-bold ${
                    isSelected ? "bg-stone-800 text-white" : "bg-stone-200 text-stone-700"
                  }`}>
                    {actor.associatedUseCases.length} UC
                  </span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isSelected ? "text-amber-400" : "text-stone-400"}`} />
                </div>
              </div>
            );
          })}

          {/* Active Actor Inspector */}
          {activeActor && (
            <div className="mt-3 p-3 rounded-xl bg-stone-100 border border-stone-200 text-xs">
              <div className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                Vai trò của {activeActor.name}:
              </div>
              <p className="text-stone-600 leading-relaxed text-[11px]">
                {activeActor.description}
              </p>
            </div>
          )}
        </div>

        {/* Right: System Boundary Box (Inside Boundary) */}
        <div className="lg:col-span-8 rounded-2xl border-2 border-emerald-600 bg-emerald-50/20 p-5 relative shadow-inner">
          {/* Boundary Tag */}
          <div className="flex items-center justify-between border-b border-emerald-200 pb-2.5 mb-4">
            <div className="flex items-center gap-2">
              <span className="p-1 rounded bg-emerald-700 text-white">
                <Maximize2 className="w-3.5 h-3.5" />
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 font-mono">
                System Boundary: [Course Registration System]
              </span>
            </div>
            <span className="text-[10px] font-bold bg-emerald-200 text-emerald-900 px-2 py-0.5 rounded-full">
              Inside System Boundary
            </span>
          </div>

          <p className="text-xs text-stone-600 mb-4 italic">
            Tất cả Use Cases bắt buộc phải nằm bên trong khung chữ nhật này. Click từng Use Case để soi đường liên kết (Association):
          </p>

          {/* Use Cases Ovals Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {USE_CASES.map((uc) => {
              const isLinkedToActiveActor = uc.actors.includes(selectedActorId);
              const isDirectlySelected = uc.id === selectedUcId;

              return (
                <div
                  key={uc.id}
                  onClick={() => handleSelectUc(uc.id)}
                  className={`cursor-pointer rounded-2xl border-2 p-3.5 transition-all duration-200 relative ${
                    isDirectlySelected
                      ? "bg-emerald-600 text-white border-emerald-700 shadow-md ring-2 ring-emerald-300 scale-[1.02]"
                      : isLinkedToActiveActor
                        ? "bg-white border-emerald-500 text-emerald-950 shadow-sm ring-2 ring-emerald-100"
                        : "bg-white/70 border-stone-200 text-stone-600 opacity-60 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`text-[10px] font-mono px-2 py-0.2 rounded-full font-bold ${
                      isDirectlySelected 
                        ? "bg-emerald-700 text-white" 
                        : isLinkedToActiveActor 
                          ? "bg-emerald-100 text-emerald-800" 
                          : "bg-stone-100 text-stone-500"
                    }`}>
                      {uc.category}
                    </span>
                    {isLinkedToActiveActor && (
                      <span className={`text-[10px] font-bold flex items-center gap-1 ${
                        isDirectlySelected ? "text-amber-300" : "text-emerald-700"
                      }`}>
                        <CheckCircle2 className="w-3 h-3" /> Associated
                      </span>
                    )}
                  </div>

                  <div className="text-xs sm:text-sm font-extrabold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                    {uc.name}
                  </div>
                  <p className={`text-[11px] mt-1 leading-snug ${isDirectlySelected ? "text-emerald-100" : "text-stone-500"}`}>
                    {uc.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Association Line Explanation Banner */}
          <div className="mt-4 p-3 rounded-xl bg-white border border-emerald-200 text-xs text-stone-700 flex items-start gap-2 shadow-xs">
            <Activity className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-emerald-950">Đường liên kết (Association Line): </span>
              Được vẽ dưới dạng đường nét liền (Solid line) nối giữa Actor ở bên ngoài ranh giới và Use Case ở bên trong ranh giới. Đường này không mang ngữ nghĩa luồng dữ liệu mà thể hiện sự tham gia tương tác 2 chiều giữa con người/hệ thống ngoài với phần mềm.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
