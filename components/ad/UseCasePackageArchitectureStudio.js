"use client";
import React, { useState } from "react";
import { 
  FolderGit2, 
  Layers, 
  Users, 
  Cpu, 
  GitPullRequest, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2,
  FolderOpen
} from "lucide-react";

const STRATEGIES = [
  {
    id: "actor",
    title: "1. Phân nhóm theo Tác nhân (By Actor)",
    desc: "Gom các ca sử dụng theo đối tượng hưởng lợi hoặc nhân sự vận hành chính.",
    packages: [
      {
        name: "Student Services Package",
        color: "amber",
        badge: "Actor: Sinh viên",
        borderClass: "border-amber-300 bg-amber-50/40",
        headerClass: "bg-amber-100/80 text-amber-900 border-amber-300",
        useCases: [
          { id: "UC-01", name: "Register for Course", crossNote: "Crosses to Billing (Payment)" },
          { id: "UC-02", name: "Drop Course", crossNote: "" },
          { id: "UC-03", name: "View Academic Transcript", crossNote: "" }
        ]
      },
      {
        name: "Registrar Services Package",
        color: "blue",
        badge: "Actor: Phòng Đào tạo",
        borderClass: "border-blue-300 bg-blue-50/40",
        headerClass: "bg-blue-100/80 text-blue-900 border-blue-300",
        useCases: [
          { id: "UC-10", name: "Open New Course Section", crossNote: "" },
          { id: "UC-11", name: "Assign Classroom & Schedule", crossNote: "" },
          { id: "UC-12", name: "Validate Prerequisite Rules", crossNote: "Included by UC-01" }
        ]
      }
    ],
    benefit: "Rõ ràng về phân quyền và giao diện người dùng theo vai trò (Role-based access control)."
  },
  {
    id: "subsystem",
    title: "2. Phân nhóm theo Phân hệ kỹ thuật (By Subsystem)",
    desc: "Gom theo ranh giới mô-đun phần mềm hoặc microservices chịu trách nhiệm thực thi.",
    packages: [
      {
        name: "Enrollment Subsystem",
        color: "emerald",
        badge: "Microservice: Đăng ký",
        borderClass: "border-emerald-300 bg-emerald-50/40",
        headerClass: "bg-emerald-100/80 text-emerald-900 border-emerald-300",
        useCases: [
          { id: "UC-01", name: "Register for Course", crossNote: "" },
          { id: "UC-02", name: "Manage Waitlist Queue", crossNote: "" },
          { id: "UC-04", name: "Check Prerequisite Catalog", crossNote: "" }
        ]
      },
      {
        name: "Billing & Finance Subsystem",
        color: "purple",
        badge: "Microservice: Kế toán & Học phí",
        borderClass: "border-purple-300 bg-purple-50/40",
        headerClass: "bg-purple-100/80 text-purple-900 border-purple-300",
        useCases: [
          { id: "UC-20", name: "Calculate Tuition & Fees", crossNote: "Included by Register for Course" },
          { id: "UC-21", name: "Process Payment Gateway", crossNote: "" },
          { id: "UC-22", name: "Issue Electronic Receipt", crossNote: "" }
        ]
      }
    ],
    benefit: "Tạo thuận lợi cho phân chia kiến trúc Microservices và bàn giao từng đội ngũ phát triển (Dev Squads)."
  },
  {
    id: "process",
    title: "3. Phân nhóm theo Quy trình nghiệp vụ (By Business Process)",
    desc: "Gom theo chuỗi giá trị xuyên suốt từ lúc bắt đầu quy trình đến khi kết thúc.",
    packages: [
      {
        name: "Semester Course Planning Process",
        color: "indigo",
        badge: "Giai đoạn: Lập kế hoạch",
        borderClass: "border-indigo-300 bg-indigo-50/40",
        headerClass: "bg-indigo-100/80 text-indigo-900 border-indigo-300",
        useCases: [
          { id: "UC-30", name: "Publish Course Syllabus", crossNote: "" },
          { id: "UC-31", name: "Schedule Teaching Staff", crossNote: "" }
        ]
      },
      {
        name: "Student Enrollment & Payment Process",
        color: "teal",
        badge: "Giai đoạn: Tuyển chọn & Đăng ký",
        borderClass: "border-teal-300 bg-teal-50/40",
        headerClass: "bg-teal-100/80 text-teal-900 border-teal-300",
        useCases: [
          { id: "UC-01", name: "Register for Course", crossNote: "Trọng tâm quy trình" },
          { id: "UC-05", name: "Apply Financial Aid", crossNote: "Extends UC-01" },
          { id: "UC-21", name: "Process Payment", crossNote: "Kế thúc quy trình" }
        ]
      }
    ],
    benefit: "Giúp các bên liên quan (Stakeholders / Business Leaders) nhìn nhận phần mềm dưới góc độ chuỗi vận hành doanh nghiệp."
  }
];

export default function UseCasePackageArchitectureStudio() {
  const [activeStrategy, setActiveStrategy] = useState("actor");
  const currentStrat = STRATEGIES.find((s) => s.id === activeStrategy) || STRATEGIES[0];

  return (
    <div className="my-8 rounded-2xl border border-stone-200 bg-white p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between border-b border-stone-200 pb-5">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-800">
            <FolderGit2 className="h-3.5 w-3.5" /> Mục 6.6: Organizing Use Cases with Packages
          </div>
          <h3 className="mt-2 text-2xl font-bold text-stone-900">
            Studio Kiến Trúc Phân Gói Ca Sử Dụng (UML Package Explorer)
          </h3>
          <p className="text-sm text-stone-600">
            Khám phá 3 chiến lược đóng gói hệ thống quy mô lớn, phân chia quyền sở hữu nhóm và quy tắc liên kết xuyên biên giới gói.
          </p>
        </div>
      </div>

      {/* Strategy Switcher */}
      <div className="mt-6 flex flex-wrap gap-2 rounded-xl bg-stone-100 p-1.5 border border-stone-200">
        {STRATEGIES.map((strat) => {
          const isActive = activeStrategy === strat.id;
          return (
            <button
              key={strat.id}
              onClick={() => setActiveStrategy(strat.id)}
              className={`flex-1 min-w-[200px] rounded-lg px-4 py-2.5 text-xs md:text-sm font-bold transition-all text-left ${
                isActive
                  ? "bg-white text-stone-900 shadow-md ring-1 ring-stone-200"
                  : "text-stone-600 hover:text-stone-900 hover:bg-white/50"
              }`}
            >
              <div className="flex items-center gap-2">
                <FolderOpen className={`w-4 h-4 ${isActive ? "text-amber-600" : "text-stone-400"}`} />
                <span>{strat.title}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Strategy Info */}
      <div className="mt-4 flex items-center justify-between text-xs text-stone-600 px-1">
        <p className="font-medium">
          💡 <strong>Mô tả chiến lược:</strong> {currentStrat.desc}
        </p>
        <span className="hidden md:inline-block font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
          Ưu điểm: {currentStrat.benefit}
        </span>
      </div>

      {/* Packages UML Display */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {currentStrat.packages.map((pkg, idx) => (
          <div
            key={idx}
            className={`rounded-2xl border-2 ${pkg.borderClass} p-5 relative transition-all shadow-sm hover:shadow-md`}
          >
            {/* UML Package Tab (Folder ear) */}
            <div className={`absolute -top-3.5 left-6 px-3 py-0.5 rounded-t-md text-xs font-mono font-bold border-t-2 border-x-2 ${pkg.headerClass}`}>
              package: {pkg.name.split(" ")[0]}
            </div>

            <div className="flex items-center justify-between border-b border-stone-200/80 pb-3 mt-1">
              <h4 className="text-base font-bold text-stone-900 flex items-center gap-2">
                <FolderGit2 className="w-4 h-4 text-stone-700" />
                {pkg.name}
              </h4>
              <span className="text-[11px] font-semibold bg-white/90 text-stone-700 px-2.5 py-0.5 rounded-full border border-stone-200">
                {pkg.badge}
              </span>
            </div>

            {/* Use Cases inside package */}
            <div className="mt-4 space-y-2.5">
              {pkg.useCases.map((uc) => (
                <div
                  key={uc.id}
                  className="flex items-center justify-between rounded-xl border border-stone-200/90 bg-white p-3 text-xs shadow-xs hover:border-amber-400 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    {/* UML Oval Icon */}
                    <div className="w-7 h-4 rounded-full border border-amber-600 bg-amber-100 flex items-center justify-center shrink-0">
                      <span className="text-[9px] font-bold text-amber-800">UC</span>
                    </div>
                    <div>
                      <span className="font-mono font-bold text-stone-500 mr-1.5">{uc.id}:</span>
                      <span className="font-semibold text-stone-800">{uc.name}</span>
                    </div>
                  </div>

                  {uc.crossNote && (
                    <span className="text-[10px] font-medium text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 shrink-0">
                      🔗 {uc.crossNote}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Cross Package Boundaries Golden Rule (Slide 6.6) */}
      <div className="mt-8 rounded-xl border border-amber-300 bg-amber-50/80 p-4 text-xs">
        <div className="flex items-start gap-2.5 text-amber-950">
          <Sparkles className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong className="text-amber-900 text-sm">
              Quy tắc vàng: Mối quan hệ có quyền xuyên thủng biên giới gói (Cross Package Boundaries)
            </strong>
            <p className="mt-1 leading-relaxed text-stone-700">
              Trong các hệ thống thực tế, các gói (Packages) không phải là những ốc đảo cô lập. Một ca sử dụng ở gói này hoàn toàn có quyền thiết lập quan hệ <code>&lt;&lt;include&gt;&gt;</code>, <code>&lt;&lt;extend&gt;&gt;</code> hoặc <code>Generalization</code> với ca sử dụng ở gói khác (Ví dụ: <em>Register for Course</em> trong gói Student Services thực hiện <code>&lt;&lt;include&gt;&gt;</code> chức năng <em>Validate Prerequisite Rules</em> trong gói Registrar Services).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
