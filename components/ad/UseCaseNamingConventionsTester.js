"use client";
import React, { useState } from "react";
import { 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  HelpCircle, 
  ArrowRight, 
  Lightbulb, 
  Layers, 
  RotateCcw,
  Check,
  X,
  Target,
  ShieldCheck
} from "lucide-react";

const RULES = [
  {
    id: "rule1",
    num: "1",
    title: "Verb + Noun Phrase",
    subtitle: "Động từ hành động + Đối tượng",
    tagline: "Active Verb + Object",
    description: "Tên Use Case bắt buộc phải mở đầu bằng một ngoại động từ hành động dứt khoát kết hợp với đối tượng tác động trực tiếp.",
    goodExamples: ["Register for Course", "Submit Grades", "Generate Report"],
    badExamples: ["Course Registration (Danh từ)", "Grade Submission (Thiếu động từ)"],
    rationale: "Biểu diễn một hành vi/tương tác đang diễn ra, giúp người đọc nhận biết ngay ai đang làm gì trên hệ thống."
  },
  {
    id: "rule2",
    num: "2",
    title: "Describe the Goal, Not the Mechanism",
    subtitle: "Mô tả Mục tiêu, Không mô tả Thao tác",
    tagline: "Goal-Driven vs UI/Implementation",
    description: "Tập trung vào mục tiêu kinh doanh (Business Goal) mà Actor muốn đạt được, tuyệt đối không mô tả thao tác giao diện UI hay cơ chế công nghệ.",
    goodExamples: ["Pay Invoice", "Enroll Student", "Search Products"],
    badExamples: ["Click Submit Button (Thao tác UI)", "Execute SQL Query (Cơ chế DB)"],
    rationale: "Giữ Use Case độc lập hoàn toàn với công nghệ (Technology-Independent). Dù hệ thống dùng Web, App, hay AI bot thì mục tiêu nghiệp vụ vẫn không đổi!"
  },
  {
    id: "rule3",
    num: "3",
    title: "Keep It Short and Unique",
    subtitle: "Ngắn gọn (2–4 từ) & Duy nhất",
    tagline: "2–4 Words & No Collisions",
    description: "Độ dài chuẩn của tên Use Case là từ 2 đến 4 từ tiếng Anh. Mỗi Use Case trong toàn bộ mô hình phải có tên hoàn toàn duy nhất, không trùng lặp.",
    goodExamples: ["Close Section", "Update Catalog", "Validate Account"],
    badExamples: ["System Performs Action of Closing Student Course (Quá dài dòng)", "Register (Quá chung chung, dễ nhầm)"],
    rationale: "Tạo sự cô đọng, dễ nhớ khi trao đổi trong dự án và vẽ trên các vòng oval của sơ đồ Use Case UML."
  },
  {
    id: "rule4",
    num: "4",
    title: "Match the Response, Not the Request",
    subtitle: "Phản ánh Điều Hệ Thống Hoàn Thành",
    tagline: "Completed Response vs Initial Trigger",
    description: "Tên Use Case phải phản ánh giá trị hoặc kết quả mà hệ thống hoàn thành để phản hồi lại sự kiện, không chỉ dừng lại ở lời yêu cầu ban đầu.",
    goodExamples: ["Register for Course (Hệ thống hoàn tất việc ghi danh)", "Issue Refund"],
    badExamples: ["Request for Registration (Chỉ là lời xin, chưa phản ánh hành động của hệ thống)"],
    rationale: "Đảm bảo tính trọn vẹn (Completeness): Khi Use Case kết thúc, một giá trị đo lường được (Measurable Value) đã được bàn giao."
  }
];

const QUIZ_ITEMS = [
  {
    id: "q1",
    scenario: "Khi khách hàng tiến hành thanh toán một hóa đơn mua hàng trực tuyến:",
    optionA: { name: "Pay Invoice", isCorrect: true, rule: "Quy tắc 2: Mô tả đúng mục tiêu (Goal), không phụ thuộc công nghệ." },
    optionB: { name: "Click Submit Payment Button", isCorrect: false, rule: "Vi phạm Quy tắc 2: Mô tả thao tác nút bấm giao diện (UI Mechanism)." }
  },
  {
    id: "q2",
    scenario: "Đặt tên cho hành vi sinh viên đăng ký các môn học vào đầu học kỳ:",
    optionA: { name: "Course Registration Module", isCorrect: false, rule: "Vi phạm Quy tắc 1: Đây là cụm danh từ chỉ phân hệ, không phải động từ hành động." },
    optionB: { name: "Register for Course", isCorrect: true, rule: "Quy tắc 1: Bắt đầu bằng active verb 'Register' + đối tượng 'Course'." }
  },
  {
    id: "q3",
    scenario: "Hành vi giảng viên nhập điểm số tổng kết môn học vào phần mềm:",
    optionA: { name: "Submit Grades", isCorrect: true, rule: "Quy tắc 4: Phản ánh đúng hành vi hệ thống tiếp nhận và hoàn tất việc nộp điểm." },
    optionB: { name: "Ask For Grade Input Dialog", isCorrect: false, rule: "Vi phạm Quy tắc 2 & 4: Mô tả hộp thoại UI và chỉ là lời yêu cầu ban đầu." }
  },
  {
    id: "q4",
    scenario: "Khi phòng đào tạo đóng một lớp học phần đã đầy sinh viên:",
    optionA: { name: "The System Automatically Closes Course Section If It Reaches 60 Students", isCorrect: false, rule: "Vi phạm Quy tắc 3: Quá dài dòng (11 từ), biến tên thành cả câu văn." },
    optionB: { name: "Close Section", isCorrect: true, rule: "Quy tắc 3: Ngắn gọn (2 từ), dứt khoát và súc tích." }
  }
];

export default function UseCaseNamingConventionsTester() {
  const [selectedRuleId, setSelectedRuleId] = useState("rule1");
  const [userAnswers, setUserAnswers] = useState({});

  const selectedRule = RULES.find(r => r.id === selectedRuleId) || RULES[0];

  const handleSelectOption = (quizId, optionKey) => {
    setUserAnswers(prev => ({
      ...prev,
      [quizId]: optionKey
    }));
  };

  const handleResetQuiz = () => {
    setUserAnswers({});
  };

  return (
    <div className="my-8 rounded-2xl border border-stone-200 bg-white p-5 sm:p-7 shadow-sm">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-800 border border-blue-200">
            <Target className="w-3.5 h-3.5" />
            Mục 5.2 • Naming Conventions Tester
          </span>
          <h4 className="mt-1.5 text-lg sm:text-xl font-bold text-stone-900">
            4 Quy Tắc Vàng Đặt Tên Use Case & Đấu Trường Thẩm Định
          </h4>
          <p className="text-xs sm:text-sm text-stone-600">
            Học cách đặt tên Use Case chuẩn mực công nghiệp: Hướng mục tiêu, độc lập công nghệ và súc tích.
          </p>
        </div>
      </div>

      {/* 4 Rules Selector Navigation */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {RULES.map((r) => {
          const isSelected = r.id === selectedRuleId;
          return (
            <button
              key={r.id}
              onClick={() => setSelectedRuleId(r.id)}
              className={`p-3.5 rounded-xl border text-left transition-all duration-200 ${
                isSelected 
                  ? "bg-emerald-50/70 border-emerald-500 ring-2 ring-emerald-200 shadow-sm scale-[1.02]" 
                  : "bg-stone-50 border-stone-200 hover:border-stone-300 text-stone-700"
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                  isSelected ? "bg-emerald-600 text-white" : "bg-stone-200 text-stone-700"
                }`}>
                  Quy tắc #{r.num}
                </span>
                <span className="text-[10px] text-stone-400 font-semibold">{r.tagline.split(" ")[0]}</span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-stone-900 line-clamp-1">{r.title}</div>
              <div className="text-[11px] text-stone-500 line-clamp-1 mt-0.5">{r.subtitle}</div>
            </button>
          );
        })}
      </div>

      {/* Selected Rule Inspector Card */}
      <div className="mt-5 rounded-xl border border-stone-200 bg-stone-50/60 p-5 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-2.5 mb-3">
          <div>
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
              Chi tiết Quy tắc #{selectedRule.num}: {selectedRule.tagline}
            </span>
            <h5 className="text-base font-bold text-stone-900 mt-0.5">
              {selectedRule.title} — {selectedRule.subtitle}
            </h5>
          </div>
          <span className="text-xs font-mono text-stone-500">ISO/IEC Standard</span>
        </div>

        <p className="text-xs sm:text-sm text-stone-800 leading-relaxed mb-4">
          {selectedRule.description}
        </p>

        {/* Good vs Bad Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-3">
          <div className="bg-white p-3.5 rounded-xl border border-emerald-300 shadow-xs">
            <div className="font-bold text-emerald-800 flex items-center gap-1.5 mb-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Nên đặt (Compliant Examples):
            </div>
            <ul className="space-y-1 text-stone-700 font-mono text-[11px]">
              {selectedRule.goodExamples.map((ex, i) => (
                <li key={i} className="flex items-center gap-1.5 text-emerald-900">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="font-bold">{ex}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-3.5 rounded-xl border border-rose-300 shadow-xs">
            <div className="font-bold text-rose-800 flex items-center gap-1.5 mb-2">
              <XCircle className="w-4 h-4 text-rose-600" />
              Không nên đặt (Anti-Patterns):
            </div>
            <ul className="space-y-1 text-stone-700 font-mono text-[11px]">
              {selectedRule.badExamples.map((ex, i) => (
                <li key={i} className="flex items-center gap-1.5 text-rose-900">
                  <X className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                  <span>{ex}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Rationale Callout */}
        <div className="flex items-start gap-2 p-2.5 rounded-lg bg-emerald-100/70 border border-emerald-200 text-xs text-emerald-950">
          <Sparkles className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold">Lý do cốt lõi: </span>
            {selectedRule.rationale}
          </div>
        </div>
      </div>

      {/* Interactive Naming Arena / Mini-Practice */}
      <div className="mt-7">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h5 className="text-sm sm:text-base font-bold text-stone-900 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              Đấu Trường Thẩm Định: Chọn Tên Use Case Chuẩn Quy Tắc
            </h5>
            <p className="text-xs text-stone-500">Bấm chọn phương án chuẩn nhất trong từng tình huống thực tế:</p>
          </div>
          <button
            onClick={handleResetQuiz}
            className="text-xs text-stone-500 hover:text-stone-800 flex items-center gap-1 font-medium"
          >
            <RotateCcw className="w-3 h-3" /> Làm lại
          </button>
        </div>

        <div className="space-y-3">
          {QUIZ_ITEMS.map((item, idx) => {
            const currentChoice = userAnswers[item.id];
            return (
              <div key={item.id} className="p-4 rounded-xl border border-stone-200 bg-stone-50/50">
                <div className="text-xs font-bold text-stone-800 mb-2.5">
                  <span className="text-emerald-700 font-extrabold mr-1">Tình huống #{idx + 1}:</span>
                  {item.scenario}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {/* Option A */}
                  <button
                    onClick={() => handleSelectOption(item.id, "A")}
                    className={`p-2.5 rounded-lg border text-left transition-all font-mono text-xs flex items-center justify-between ${
                      currentChoice === "A"
                        ? item.optionA.isCorrect 
                          ? "bg-emerald-100 border-emerald-500 text-emerald-950 font-bold"
                          : "bg-rose-100 border-rose-500 text-rose-950 font-bold"
                        : "bg-white border-stone-300 hover:border-stone-400 text-stone-800"
                    }`}
                  >
                    <span>A. {item.optionA.name}</span>
                    {currentChoice === "A" && (
                      item.optionA.isCorrect ? <Check className="w-4 h-4 text-emerald-700" /> : <X className="w-4 h-4 text-rose-700" />
                    )}
                  </button>

                  {/* Option B */}
                  <button
                    onClick={() => handleSelectOption(item.id, "B")}
                    className={`p-2.5 rounded-lg border text-left transition-all font-mono text-xs flex items-center justify-between ${
                      currentChoice === "B"
                        ? item.optionB.isCorrect 
                          ? "bg-emerald-100 border-emerald-500 text-emerald-950 font-bold"
                          : "bg-rose-100 border-rose-500 text-rose-950 font-bold"
                        : "bg-white border-stone-300 hover:border-stone-400 text-stone-800"
                    }`}
                  >
                    <span>B. {item.optionB.name}</span>
                    {currentChoice === "B" && (
                      item.optionB.isCorrect ? <Check className="w-4 h-4 text-emerald-700" /> : <X className="w-4 h-4 text-rose-700" />
                    )}
                  </button>
                </div>

                {/* Explanation feedback */}
                {currentChoice && (
                  <div className={`mt-2.5 p-2 rounded-lg text-xs animate-fadeIn ${
                    (currentChoice === "A" && item.optionA.isCorrect) || (currentChoice === "B" && item.optionB.isCorrect)
                      ? "bg-emerald-50 text-emerald-900 border border-emerald-200"
                      : "bg-rose-50 text-rose-900 border border-rose-200"
                  }`}>
                    <span className="font-bold">Giải thích: </span>
                    {currentChoice === "A" ? item.optionA.rule : item.optionB.rule}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
