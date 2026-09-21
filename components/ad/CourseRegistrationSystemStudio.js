"use client";
import React, { useState } from "react";
import { 
  Users, 
  GraduationCap, 
  Clock, 
  BookOpen, 
  Sparkles, 
  FileText, 
  CheckCircle2, 
  HelpCircle,
  Briefcase
} from "lucide-react";

const ACTORS = [
  { id: "all", name: "Tất Cả Tác Nhân", role: "Toàn bộ hệ thống", icon: Users, color: "stone" },
  { id: "student", name: "Student", role: "Primary System Actor", icon: GraduationCap, color: "emerald", desc: "Sinh viên trực tiếp đăng ký, thêm/hủy lớp học qua cổng portal." },
  { id: "registrar", name: "Registrar", role: "Administrative Actor", icon: Briefcase, color: "blue", desc: "Phòng đào tạo quản lý danh mục môn học, phân công giảng viên và đóng đợt đăng ký." },
  { id: "instructor", name: "Instructor", role: "Primary Academic Actor", icon: BookOpen, color: "purple", desc: "Giảng viên nhận danh sách lớp và nhập điểm thi cuối kỳ." },
  { id: "timer", name: "Registration Timer", role: "Temporal Trigger Actor", icon: Clock, color: "amber", desc: "Đồng hồ hệ thống tự động kích hoạt đóng cổng đăng ký khi hết thời hạn." }
];

const USE_CASES = [
  {
    id: "uc1",
    name: "Register for Course",
    actors: ["student"],
    trigger: "Student gửi yêu cầu ghi danh vào một lớp học phần.",
    goal: "Sinh viên đăng ký thành công vào course section mong muốn.",
    desc: "Kiểm tra sĩ số chỗ trống (Seat availability) và điều kiện môn học tiên quyết (Prerequisites) trước khi ghi danh.",
    isCore: true
  },
  {
    id: "uc2",
    name: "Add / Drop Course",
    actors: ["student"],
    trigger: "Student muốn thay đổi hoặc hủy lớp đã đăng ký trong tuần đầu kỳ.",
    goal: "Học viên đổi sang lớp khác hoặc hủy bớt môn học mà không bị điểm phạt.",
    desc: "Cập nhật lại sĩ số lớp và tính toán lại học phí tương ứng.",
    isCore: false
  },
  {
    id: "uc3",
    name: "Close Registration",
    actors: ["registrar", "timer"],
    trigger: "Hết thời hạn đăng ký (Temporal Timer) hoặc Registrar đóng thủ công.",
    goal: "Khóa cổng đăng ký để chốt danh sách sinh viên chính thức.",
    desc: "Ngăn chặn sinh viên thêm/hủy lớp và bắt đầu quy trình xếp thời khóa biểu chính thức.",
    isCore: true
  },
  {
    id: "uc4",
    name: "Assign Instructor",
    actors: ["registrar"],
    trigger: "Registrar phân công giảng viên cho các học phần mở trong kỳ.",
    goal: "Mỗi lớp học phần có ít nhất một giảng viên chịu trách nhiệm giảng dạy.",
    desc: "Kiểm tra xung đột lịch dạy của giảng viên và tải giảng dạy định mức.",
    isCore: false
  },
  {
    id: "uc5",
    name: "Generate Class Roster",
    actors: ["registrar", "instructor"],
    trigger: "Instructor hoặc Registrar yêu cầu in/xuất danh sách lớp.",
    goal: "Xuất danh sách sinh viên có mặt chính thức trong lớp học phần.",
    desc: "Dùng để điểm danh, phục vụ kỳ thi và theo dõi tiến độ học tập.",
    isCore: false
  },
  {
    id: "uc6",
    name: "Submit Grades",
    actors: ["instructor"],
    trigger: "Instructor nộp bảng điểm sau kỳ thi kết thúc học phần.",
    goal: "Điểm số của sinh viên được ghi nhận chính thức vào học bạ hệ thống.",
    desc: "Yêu cầu xác thực bảo mật và khóa sửa điểm sau khi đã phê duyệt.",
    isCore: true
  },
  {
    id: "uc7",
    name: "Maintain Course Catalog",
    actors: ["registrar"],
    trigger: "Chương trình đào tạo thay đổi hoặc có môn học mới được bổ sung.",
    goal: "Cập nhật danh mục môn học, số tín chỉ và điều kiện tiên quyết.",
    desc: "Thêm môn mới, sửa đổi thông tin môn học hoặc tạm ngưng đào tạo.",
    isCore: false
  }
];

export default function CourseRegistrationSystemStudio() {
  const [selectedActorId, setSelectedActorId] = useState("all");
  const [selectedUcId, setSelectedUcId] = useState("uc1");

  const selectedActor = ACTORS.find((a) => a.id === selectedActorId) || ACTORS[0];
  const activeUc = USE_CASES.find((u) => u.id === selectedUcId) || USE_CASES[0];

  const isUcVisible = (uc) => {
    if (selectedActorId === "all") return true;
    return uc.actors.includes(selectedActorId);
  };

  return (
    <div className="my-8 rounded-3xl border border-stone-200 bg-white p-5 md:p-7 shadow-lg shadow-stone-200/50 transition-all">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-stone-100">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-800 font-mono">
              System Case Study
            </span>
          </div>
          <h3 className="text-base md:text-lg font-black text-stone-900 flex items-center gap-2">
            Hệ Thống Đăng Ký Môn Học (Course Registration System Studio)
          </h3>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-stone-500 bg-stone-50 px-3 py-1.5 rounded-full border border-stone-200">
          <Sparkles size={13} className="text-emerald-700" />
          <span>Lọc theo Tác nhân để xem Use Case</span>
        </div>
      </div>

      {/* Actor Filter Bar */}
      <div className="flex flex-wrap gap-2 my-5">
        {ACTORS.map((actor) => {
          const isSelected = actor.id === selectedActorId;
          const IconComp = actor.icon;

          return (
            <button
              key={actor.id}
              onClick={() => setSelectedActorId(actor.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 border ${
                isSelected
                  ? "bg-emerald-600 text-white border-emerald-600 shadow-sm"
                  : "bg-stone-50 hover:bg-stone-100 text-stone-700 border-stone-200"
              }`}
            >
              <IconComp size={14} />
              <span>{actor.name}</span>
            </button>
          );
        })}
      </div>

      {/* Interactive System Boundary Canvas & Use Case Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-6">
        {/* Left / Center: The System Boundary Box */}
        <div className="lg:col-span-2 rounded-2xl border-2 border-stone-300 border-dashed bg-stone-50/50 p-5 relative">
          {/* Boundary Tag */}
          <div className="absolute -top-3.5 left-6 px-3 py-0.5 rounded-md bg-stone-800 text-white text-[11px] font-mono font-black uppercase tracking-wider shadow-xs">
            System Boundary: Course Registration System
          </div>

          <p className="text-[11px] text-stone-500 mb-4 mt-2">
            {selectedActorId === "all"
              ? "Hiển thị toàn bộ 7 Use Case bên trong phạm vi hệ thống:"
              : `Lọc theo tác nhân [${selectedActor.name}] — các Use Case có tương tác trực tiếp:`}
          </p>

          {/* Use Case Ovals Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {USE_CASES.map((uc) => {
              const highlighted = isUcVisible(uc);
              const isSelected = uc.id === selectedUcId;

              return (
                <button
                  key={uc.id}
                  onClick={() => setSelectedUcId(uc.id)}
                  className={`p-3.5 rounded-2xl border transition-all duration-200 text-left flex items-start justify-between gap-2 cursor-pointer ${
                    isSelected
                      ? "border-emerald-600 bg-emerald-50/90 ring-2 ring-emerald-500/20 shadow-md scale-[1.02]"
                      : highlighted
                      ? "border-emerald-200 bg-white hover:border-emerald-400 hover:bg-emerald-50/20 shadow-xs"
                      : "border-stone-200 bg-stone-100/60 opacity-35 text-stone-400"
                  }`}
                >
                  <div>
                    <div className="text-xs md:text-sm font-bold text-stone-900 leading-snug">
                      {uc.name}
                    </div>
                    <div className="flex items-center gap-1.5 mt-2 flex-wrap">
                      {uc.actors.map((actId) => {
                        const actObj = ACTORS.find((a) => a.id === actId);
                        return (
                          <span
                            key={actId}
                            className="px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold bg-stone-100 border border-stone-200 text-stone-600"
                          >
                            {actObj?.name || actId}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  {uc.isCore && (
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-extrabold uppercase bg-amber-100 text-amber-900 border border-amber-300 shrink-0">
                      Core
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Selected Use Case Inspector Card */}
        <div className="rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50/60 via-white to-stone-50/40 p-5 flex flex-col justify-between shadow-sm">
          <div>
            <div className="flex items-center justify-between gap-2 pb-3 border-b border-emerald-100">
              <span className="text-[10px] font-mono font-extrabold text-emerald-800 uppercase tracking-widest">
                Chi tiết Ca Sử Dụng
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                {activeUc.actors.length} Tác nhân
              </span>
            </div>

            <h4 className="text-base font-black text-stone-900 mt-3 leading-snug">
              {activeUc.name}
            </h4>

            <div className="space-y-3 mt-4 text-xs">
              <div>
                <strong className="text-stone-500 uppercase text-[10px] block font-mono">
                  Mục tiêu nghiệp vụ (Goal):
                </strong>
                <p className="text-stone-800 font-medium mt-0.5 leading-relaxed">
                  {activeUc.goal}
                </p>
              </div>

              <div>
                <strong className="text-stone-500 uppercase text-[10px] block font-mono">
                  Sự kiện kích hoạt (Trigger):
                </strong>
                <p className="text-stone-800 font-medium mt-0.5 leading-relaxed">
                  {activeUc.trigger}
                </p>
              </div>

              <div>
                <strong className="text-stone-500 uppercase text-[10px] block font-mono">
                  Quy tắc nghiệp vụ & Kiểm tra:
                </strong>
                <p className="text-stone-700 leading-relaxed mt-0.5">
                  {activeUc.desc}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-stone-200/60 text-[11px] text-stone-500 flex items-center gap-1.5">
            <CheckCircle2 size={13} className="text-emerald-700 shrink-0" />
            <span>Đạt chuẩn động từ + cụm danh từ (Verb + Noun).</span>
          </div>
        </div>
      </div>
    </div>
  );
}
