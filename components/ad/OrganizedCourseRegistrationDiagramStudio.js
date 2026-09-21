"use client";
import React, { useState } from "react";
import { 
  Users, 
  GraduationCap, 
  Clock, 
  Server, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Filter, 
  RotateCcw,
  Maximize2,
  Lock,
  GitBranch,
  Layers,
  HelpCircle
} from "lucide-react";

export default function OrganizedCourseRegistrationDiagramStudio() {
  const [selectedActorFilter, setSelectedActorFilter] = useState("all");
  const [highlightedRel, setHighlightedRel] = useState("all"); // "all" | "include" | "extend" | "assoc"
  const [activeElement, setActiveElement] = useState(null);

  const isActorActive = (actorId) => {
    if (selectedActorFilter === "all") return true;
    return selectedActorFilter === actorId;
  };

  const isRelActive = (relType) => {
    if (highlightedRel === "all") return true;
    return highlightedRel === relType;
  };

  return (
    <div className="my-8 rounded-2xl border border-stone-200 bg-white p-5 sm:p-7 shadow-sm">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800 border border-emerald-200">
            <Layers className="w-3.5 h-3.5" />
            Mục 6.5 • Organized System Diagram Studio
          </span>
          <h4 className="mt-1.5 text-lg sm:text-xl font-bold text-stone-900">
            Sơ Đồ Use Case Diagram Hoàn Chỉnh: Course Registration System
          </h4>
          <p className="text-xs sm:text-sm text-stone-600">
            Tổng quan kiến trúc toàn diện: 4 Actors, 7 Use Cases, System Boundary và mạng lưới quan hệ &lt;&lt;include&gt;&gt;, &lt;&lt;extend&gt;&gt;.
          </p>
        </div>

        <button
          onClick={() => {
            setSelectedActorFilter("all");
            setHighlightedRel("all");
            setActiveElement(null);
          }}
          className="text-xs text-stone-500 hover:text-stone-800 flex items-center gap-1 font-medium"
        >
          <RotateCcw className="w-3 h-3" /> Reset Bộ Lọc
        </button>
      </div>

      {/* Filter Toolbar */}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 bg-stone-50 p-3 rounded-xl border border-stone-200 text-xs">
        {/* Actor Filter */}
        <div className="flex items-center gap-1.5">
          <span className="font-bold text-stone-700 mr-1 flex items-center gap-1">
            <Filter className="w-3 h-3 text-stone-500" /> Lọc Actor:
          </span>
          <button
            onClick={() => setSelectedActorFilter("all")}
            className={`px-2 py-0.5 rounded font-medium transition-all ${
              selectedActorFilter === "all" ? "bg-stone-900 text-white font-bold" : "bg-white text-stone-600 border border-stone-200"
            }`}
          >
            Tất cả
          </button>
          <button
            onClick={() => setSelectedActorFilter("student")}
            className={`px-2 py-0.5 rounded font-medium transition-all ${
              selectedActorFilter === "student" ? "bg-emerald-600 text-white font-bold" : "bg-white text-stone-600 border border-stone-200"
            }`}
          >
            Student
          </button>
          <button
            onClick={() => setSelectedActorFilter("instructor")}
            className={`px-2 py-0.5 rounded font-medium transition-all ${
              selectedActorFilter === "instructor" ? "bg-blue-600 text-white font-bold" : "bg-white text-stone-600 border border-stone-200"
            }`}
          >
            Instructor
          </button>
          <button
            onClick={() => setSelectedActorFilter("clock")}
            className={`px-2 py-0.5 rounded font-medium transition-all ${
              selectedActorFilter === "clock" ? "bg-amber-600 text-white font-bold" : "bg-white text-stone-600 border border-stone-200"
            }`}
          >
            System Clock
          </button>
          <button
            onClick={() => setSelectedActorFilter("gateway")}
            className={`px-2 py-0.5 rounded font-medium transition-all ${
              selectedActorFilter === "gateway" ? "bg-purple-600 text-white font-bold" : "bg-white text-stone-600 border border-stone-200"
            }`}
          >
            Payment Gateway
          </button>
        </div>

        {/* Relationship Filter */}
        <div className="flex items-center gap-1.5">
          <span className="font-bold text-stone-700 mr-1">Lọc Quan Hệ:</span>
          <button
            onClick={() => setHighlightedRel("all")}
            className={`px-2 py-0.5 rounded font-medium transition-all ${
              highlightedRel === "all" ? "bg-stone-800 text-white font-bold" : "bg-white text-stone-600 border border-stone-200"
            }`}
          >
            Tất cả
          </button>
          <button
            onClick={() => setHighlightedRel("include")}
            className={`px-2 py-0.5 rounded font-medium transition-all ${
              highlightedRel === "include" ? "bg-emerald-700 text-white font-bold" : "bg-white text-stone-600 border border-stone-200"
            }`}
          >
            &lt;&lt;include&gt;&gt;
          </button>
          <button
            onClick={() => setHighlightedRel("extend")}
            className={`px-2 py-0.5 rounded font-medium transition-all ${
              highlightedRel === "extend" ? "bg-amber-700 text-white font-bold" : "bg-white text-stone-600 border border-stone-200"
            }`}
          >
            &lt;&lt;extend&gt;&gt;
          </button>
        </div>
      </div>

      {/* Main Diagram Canvas */}
      <div className="mt-5 rounded-2xl border-2 border-stone-300 bg-stone-100/50 p-4 sm:p-6 relative">
        {/* Actors Outside - Top/Left/Right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
          {/* Left Actors Column */}
          <div className="md:col-span-3 space-y-4">
            <div className="text-center font-bold text-xs uppercase tracking-wider text-stone-400 mb-1">
              External Actors (Bên Ngoài)
            </div>

            {/* Actor: Student */}
            <div 
              onClick={() => setActiveElement("Student")}
              className={`cursor-pointer p-3.5 rounded-xl border-2 transition-all duration-200 ${
                isActorActive("student") 
                  ? "bg-white border-emerald-500 shadow-md ring-2 ring-emerald-200" 
                  : "bg-stone-50 border-stone-200 opacity-40"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-emerald-100 text-emerald-800">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-extrabold text-xs text-stone-900">Student</div>
                  <div className="text-[10px] text-stone-500">Primary Business Actor</div>
                </div>
              </div>
              <div className="mt-2 text-[10px] text-emerald-800 font-medium">
                ➔ Register for Course
              </div>
            </div>

            {/* Actor: Instructor */}
            <div 
              onClick={() => setActiveElement("Instructor")}
              className={`cursor-pointer p-3.5 rounded-xl border-2 transition-all duration-200 ${
                isActorActive("instructor") 
                  ? "bg-white border-blue-500 shadow-md ring-2 ring-blue-200" 
                  : "bg-stone-50 border-stone-200 opacity-40"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-blue-100 text-blue-800">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-extrabold text-xs text-stone-900">Instructor</div>
                  <div className="text-[10px] text-stone-500">Primary Business Actor</div>
                </div>
              </div>
              <div className="mt-2 text-[10px] text-blue-800 font-medium">
                ➔ Submit Grades
              </div>
            </div>
          </div>

          {/* Center: Inside System Boundary Box */}
          <div className="md:col-span-6 rounded-2xl border-2 border-emerald-600 bg-white p-4 sm:p-5 shadow-sm">
            <div className="flex items-center justify-between border-b border-stone-200 pb-2 mb-4">
              <span className="text-xs font-mono font-bold text-emerald-900 flex items-center gap-1.5">
                <Maximize2 className="w-3.5 h-3.5" />
                System Boundary: [Course Registration System]
              </span>
              <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                Scope Hệ Thống
              </span>
            </div>

            {/* 7 Use Cases in Diagram */}
            <div className="space-y-3 text-xs">
              {/* Core UC: Register for Course */}
              <div 
                onClick={() => setActiveElement("Register for Course")}
                className="cursor-pointer p-3 rounded-2xl border-2 border-emerald-500 bg-emerald-50/70 hover:bg-emerald-100/70 transition-all text-center shadow-xs"
              >
                <div className="font-extrabold text-stone-900 text-sm">Register for Course</div>
                <div className="text-[10px] text-stone-500">Base Use Case trọng tâm của sinh viên</div>
              </div>

              {/* Special Relationships Cluster */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-2">
                {/* Included UC: Authenticate User */}
                <div 
                  onClick={() => setActiveElement("Authenticate User")}
                  className={`cursor-pointer p-2.5 rounded-2xl border-2 border-dashed transition-all text-center ${
                    isRelActive("include")
                      ? "border-emerald-600 bg-emerald-100 text-emerald-950 shadow-xs"
                      : "border-stone-300 bg-stone-50 text-stone-500 opacity-60"
                  }`}
                >
                  <div className="text-[10px] font-mono font-bold text-emerald-800">
                    &lt;&lt;include&gt;&gt; (Bắt Buộc)
                  </div>
                  <div className="font-bold text-xs mt-0.5 flex items-center justify-center gap-1">
                    <Lock className="w-3 h-3" /> Authenticate User
                  </div>
                  <div className="text-[9px] text-stone-500">Tái sử dụng bởi Register & Submit</div>
                </div>

                {/* Extended UC: Add to Waitlist */}
                <div 
                  onClick={() => setActiveElement("Add to Waitlist")}
                  className={`cursor-pointer p-2.5 rounded-2xl border-2 border-dashed transition-all text-center ${
                    isRelActive("extend")
                      ? "border-amber-600 bg-amber-100 text-amber-950 shadow-xs"
                      : "border-stone-300 bg-stone-50 text-stone-500 opacity-60"
                  }`}
                >
                  <div className="text-[10px] font-mono font-bold text-amber-800">
                    &lt;&lt;extend&gt;&gt; (Khi lớp đầy)
                  </div>
                  <div className="font-bold text-xs mt-0.5 flex items-center justify-center gap-1">
                    <GitBranch className="w-3 h-3" /> Add to Waitlist
                  </div>
                  <div className="text-[9px] text-stone-500">Điểm mở rộng: at capacity</div>
                </div>
              </div>

              {/* Other System Use Cases */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div 
                  onClick={() => setActiveElement("Submit Grades")}
                  className="cursor-pointer p-2.5 rounded-xl border border-blue-300 bg-blue-50/50 hover:bg-blue-100/50 text-center"
                >
                  <div className="font-bold text-xs text-stone-900">Submit Grades</div>
                  <div className="text-[10px] text-blue-800 font-mono">&lt;&lt;include&gt;&gt; Authenticate</div>
                </div>

                <div 
                  onClick={() => setActiveElement("Process Payment")}
                  className="cursor-pointer p-2.5 rounded-xl border border-purple-300 bg-purple-50/50 hover:bg-purple-100/50 text-center"
                >
                  <div className="font-bold text-xs text-stone-900">Process Payment</div>
                  <div className="text-[10px] text-purple-800 font-mono">External Service</div>
                </div>
              </div>

              {/* Time Based Automated UCs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div 
                  onClick={() => setActiveElement("Open Registration")}
                  className="cursor-pointer p-2.5 rounded-xl border border-amber-300 bg-amber-50/50 hover:bg-amber-100/50 text-center"
                >
                  <div className="font-bold text-xs text-stone-900">Open Registration</div>
                  <div className="text-[10px] text-stone-500">Trigger: System Clock</div>
                </div>

                <div 
                  onClick={() => setActiveElement("Archive Records")}
                  className="cursor-pointer p-2.5 rounded-xl border border-amber-300 bg-amber-50/50 hover:bg-amber-100/50 text-center"
                >
                  <div className="font-bold text-xs text-stone-900">Archive Records</div>
                  <div className="text-[10px] text-stone-500">Trigger: End of Semester</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Actors Column */}
          <div className="md:col-span-3 space-y-4">
            <div className="text-center font-bold text-xs uppercase tracking-wider text-stone-400 mb-1">
              External Systems & Clocks
            </div>

            {/* Actor: System Clock */}
            <div 
              onClick={() => setActiveElement("System Clock")}
              className={`cursor-pointer p-3.5 rounded-xl border-2 transition-all duration-200 ${
                isActorActive("clock") 
                  ? "bg-white border-amber-500 shadow-md ring-2 ring-amber-200" 
                  : "bg-stone-50 border-stone-200 opacity-40"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-amber-100 text-amber-800">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-extrabold text-xs text-stone-900">System Clock</div>
                  <div className="text-[10px] text-stone-500">Temporal Trigger</div>
                </div>
              </div>
              <div className="mt-2 text-[10px] text-amber-800 font-medium">
                ➔ Open Reg & Archive
              </div>
            </div>

            {/* Actor: Payment Gateway */}
            <div 
              onClick={() => setActiveElement("Payment Gateway")}
              className={`cursor-pointer p-3.5 rounded-xl border-2 transition-all duration-200 ${
                isActorActive("gateway") 
                  ? "bg-white border-purple-500 shadow-md ring-2 ring-purple-200" 
                  : "bg-stone-50 border-stone-200 opacity-40"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-purple-100 text-purple-800">
                  <Server className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-extrabold text-xs text-stone-900">Payment Gateway</div>
                  <div className="text-[10px] text-stone-500">External Server Actor</div>
                </div>
              </div>
              <div className="mt-2 text-[10px] text-purple-800 font-medium">
                ➔ Process Payment
              </div>
            </div>
          </div>
        </div>

        {/* Selected Element Quick Inspector Banner */}
        {activeElement && (
          <div className="mt-4 p-3 rounded-xl bg-stone-900 text-white text-xs flex items-center justify-between animate-fadeIn">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Đang chọn: <strong>{activeElement}</strong> — Phản ánh chính xác một thực thể trong mô hình Use Case chuẩn ISO/IEC.</span>
            </div>
            <button 
              onClick={() => setActiveElement(null)}
              className="text-stone-400 hover:text-white underline text-[11px]"
            >
              Đóng
            </button>
          </div>
        )}
      </div>

      {/* Architectural Role Summary Box */}
      <div className="mt-5 rounded-xl bg-stone-50 p-4 border border-stone-200 text-xs">
        <h6 className="font-bold text-stone-900 mb-2 flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          Vai Trò Chiến Lược Của Organized Use Case Diagram
        </h6>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-stone-700">
          <div className="bg-white p-2.5 rounded-lg border border-stone-200">
            <strong>1. Khóa Chặt Scope:</strong> Phân định rạch ròi những gì hệ thống làm và không làm, chống Scope Creep.
          </div>
          <div className="bg-white p-2.5 rounded-lg border border-stone-200">
            <strong>2. Trực Quan Hóa Tác Nhân:</strong> Nhìn thấy toàn bộ đối tượng thụ hưởng và các hệ thống dịch vụ ngoài.
          </div>
          <div className="bg-white p-2.5 rounded-lg border border-stone-200">
            <strong>3. Tái Sử Dụng & Tối Ưu:</strong> Tách các hành vi chung qua &lt;&lt;include&gt;&gt; và mở rộng qua &lt;&lt;extend&gt;&gt;.
          </div>
        </div>
      </div>
    </div>
  );
}
