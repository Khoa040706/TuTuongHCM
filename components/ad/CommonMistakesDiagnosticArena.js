"use client";
import React, { useState } from "react";
import { 
  ShieldAlert, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  HelpCircle, 
  Sparkles, 
  AlertTriangle, 
  RotateCcw,
  Check,
  X,
  Target,
  FileCheck
} from "lucide-react";

const MISTAKES = [
  {
    id: "m1",
    code: "ERR-01",
    title: "1. Modeling Steps as Separate Use Cases",
    subtitle: "Biến các bước thao tác con thành Use Case độc lập",
    severity: "Rất phổ biến (80% người mới mắc phải)",
    wrongExample: "Tạo các Use Case: 'Enter Username', 'Enter Password', 'Click Submit Button'",
    rightExample: "Gộp chung thành 1 Use Case duy nhất ở mức Goal: 'Authenticate User'",
    cause: "Chưa phân biệt được giữa 'Thao tác kỹ thuật' (Step/Task) và 'Mục tiêu kinh doanh hoàn chỉnh' (Business Goal).",
    solution: "Use Case phải tạo ra giá trị đo lường được (Measurable Value). Các bước gõ phím, click chuột chỉ là các dòng văn bản bên trong Main Scenario!",
    ruleKey: "User-Goal Level"
  },
  {
    id: "m2",
    code: "ERR-02",
    title: "2. Missing Temporal or State Events",
    subtitle: "Bỏ sót sự kiện thời gian và ngưỡng trạng thái",
    severity: "Nghiêm trọng (Bỏ sót scope nghiệp vụ)",
    wrongExample: "Chỉ liệt kê các sự kiện do sinh viên/giảng viên click chuột (External Events).",
    rightExample: "Bổ sung đầy đủ Temporal Events (Đồng hồ đóng cổng đăng ký) và State Events (Lớp đủ 60 sinh viên tự đóng).",
    cause: "Tư duy theo thói quen 'Phần mềm chỉ chạy khi có người ngồi trước màn hình bấm nút'.",
    solution: "Luôn đặt 2 câu hỏi định kỳ: 'Đến mốc ngày/giờ nào hệ thống tự chạy batch job?' và 'Khi biến số CSDL nào chạm ngưỡng thì hệ thống phải tự kích hoạt phản hồi?'",
    ruleKey: "3 Event Types Check"
  },
  {
    id: "m3",
    code: "ERR-03",
    title: "3. Naming Use Cases After Screens",
    subtitle: "Đặt tên Use Case theo tên màn hình giao diện UI",
    severity: "Phổ biến trong đồ án sinh viên",
    wrongExample: "Đặt tên: 'Login Screen', 'Course Registration Form', 'Grade Management Page'",
    rightExample: "Đặt tên theo mục tiêu: 'Authenticate User', 'Register for Course', 'Submit Grades'",
    cause: "Bị chi phối bởi bản vẽ Wireframe / Mockup trước khi làm rõ nghiệp vụ.",
    solution: "Tên Use Case phải tuân thủ công thức: Active Verb + Noun Phrase (Động từ + Cụm danh từ), giữ Use Case độc lập hoàn toàn với công nghệ (Technology-Independent).",
    ruleKey: "Verb + Noun Phrase"
  },
  {
    id: "m4",
    code: "ERR-04",
    title: "4. Overusing <<extend>> for Mandatory Behaviors",
    subtitle: "Lạm dụng <<extend>> cho hành vi luôn luôn xảy ra",
    severity: "Sai lệch ngữ nghĩa UML trầm trọng",
    wrongExample: "Dùng Register for Course <<extend>> Check Prerequisites (trong khi việc kiểm tra tiên quyết luôn bắt buộc!).",
    rightExample: "Đưa việc kiểm tra tiên quyết vào luồng chính (Base Flow) hoặc tách thành <<include>>.",
    cause: "Nhầm lẫn giữa 'rẽ nhánh ngoại lệ' và 'mở rộng tùy chọn'.",
    solution: "Chỉ dùng <<extend>> khi hành vi là OPTIONAL và chỉ xảy ra khi có điều kiện kích hoạt cụ thể (Extension Point). Nếu luôn xảy ra ➔ Base Flow hoặc <<include>>!",
    ruleKey: "Extend = Optional Only"
  },
  {
    id: "m5",
    code: "ERR-05",
    title: "5. Skipping Stakeholder Validation",
    subtitle: "Bỏ qua bước thẩm định mô hình cùng Stakeholders",
    severity: "Tử huyệt của dự án phần mềm",
    wrongExample: "BA tự vẽ sơ đồ Use Case theo suy đoán cá nhân rồi chuyển thẳng cho Dev lập trình mà không họp nghiệm thu.",
    rightExample: "Tổ chức workshop đi qua từng dòng trong Event Table và kịch bản Use Case với người dùng cuối và Domain Experts.",
    cause: "Chủ quan hoặc ngại giao tiếp với khách hàng.",
    solution: "Không thẩm định sẽ dẫn đến thiếu Scope và hiểu sai Business Rules, gây tốn kém gấp 10-100 lần chi phí sửa lỗi ở giai đoạn bàn giao!",
    ruleKey: "Stakeholder Review"
  }
];

const TEST_PRACTICE = [
  {
    id: "p1",
    scenario: "Một sinh viên thiết kế Use Case Diagram có các oval: 'Input Card PIN', 'Display Balance Screen', 'Eject Card'. Nhận xét nào là chuẩn xác nhất?",
    options: [
      { text: "Thiết kế rất tốt vì đã chi tiết hóa từng bước tương tác của người dùng tại cây ATM.", isCorrect: false },
      { text: "Mắc sai lầm ERR-01: Đây chỉ là các steps và UI screens, cần gộp chung vào 1 Use Case là 'Withdraw Cash' hoặc 'Check Balance'.", isCorrect: true },
      { text: "Cần dùng quan hệ <<extend>> để nối 3 oval này lại với nhau.", isCorrect: false }
    ],
    explanation: "Từng bước nhập mã PIN hay nhả thẻ chỉ là các bước con (Steps) trong kịch bản tương tác, không phải là một Business Goal trọn vẹn. Mô hình hóa như vậy là vi phạm nguyên tắc User-Goal Level."
  },
  {
    id: "p2",
    scenario: "Trong hệ thống đăng ký học phần, hành vi 'Lưu lịch sử giao dịch' luôn luôn được chạy sau mỗi lần sinh viên đăng ký môn học thành công. Cần thiết kế quan hệ nào?",
    options: [
      { text: "Dùng quan hệ <<extend>> vì hành vi này diễn ra ở cuối quy trình.", isCorrect: false },
      { text: "Dùng quan hệ Generalization vì đây là một biến thể của việc đăng ký.", isCorrect: false },
      { text: "Đưa trực tiếp vào luồng chính (Base Flow) hoặc dùng <<include>> vì hành vi này luôn luôn xảy ra (Mandatory).", isCorrect: true }
    ],
    explanation: "Theo sai lầm ERR-04, tuyệt đối không dùng <<extend>> cho hành vi luôn xảy ra. Vì việc lưu lịch sử luôn bắt buộc thực thi nên phải dùng Base Flow hoặc <<include>>."
  }
];

export default function CommonMistakesDiagnosticArena() {
  const [selectedMistakeId, setSelectedMistakeId] = useState("m1");
  const [practiceAnswers, setPracticeAnswers] = useState({});

  const selectedMistake = MISTAKES.find(m => m.id === selectedMistakeId) || MISTAKES[0];

  const handleSelectPractice = (practiceId, optIdx) => {
    setPracticeAnswers(prev => ({
      ...prev,
      [practiceId]: optIdx
    }));
  };

  return (
    <div className="my-8 rounded-2xl border border-stone-200 bg-white p-5 sm:p-7 shadow-sm">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-100 px-3 py-1 text-xs font-bold text-rose-800 border border-rose-200">
            <ShieldAlert className="w-3.5 h-3.5" />
            Mục 7.1 • Pitfall Diagnostic Arena
          </span>
          <h4 className="mt-1.5 text-lg sm:text-xl font-bold text-stone-900">
            5 Sai Lầm Tai Hại Phổ Biến Nhất Khi Phân Tích & Đi Thi
          </h4>
          <p className="text-xs sm:text-sm text-stone-600">
            Bộ giải mã các cạm bẫy kinh điển: Đối chiếu Sai vs Đúng, nguyên nhân gốc rễ và bài tập sửa lỗi tức thì.
          </p>
        </div>
      </div>

      {/* 5 Mistake Selector Tabs */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
        {MISTAKES.map((m) => {
          const isSelected = m.id === selectedMistakeId;
          return (
            <button
              key={m.id}
              onClick={() => setSelectedMistakeId(m.id)}
              className={`p-3 rounded-xl border text-left transition-all duration-200 ${
                isSelected 
                  ? "bg-rose-50/80 border-rose-500 ring-2 ring-rose-200 shadow-sm scale-[1.02]" 
                  : "bg-stone-50 border-stone-200 hover:border-stone-300 text-stone-700"
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className={`text-[10px] font-mono font-bold px-1.5 py-0.2 rounded ${
                  isSelected ? "bg-rose-600 text-white" : "bg-stone-200 text-stone-700"
                }`}>
                  {m.code}
                </span>
                <span className="text-[10px] text-stone-400 font-mono">Bẫy #{m.id.replace("m", "")}</span>
              </div>
              <div className="text-xs font-bold text-stone-900 line-clamp-1">{m.title.split(".")[1]}</div>
              <div className="text-[10px] text-stone-500 line-clamp-1 mt-0.5">{m.ruleKey}</div>
            </button>
          );
        })}
      </div>

      {/* Selected Mistake Diagnostic Card */}
      <div className="mt-5 rounded-2xl border border-stone-200 bg-stone-50/60 p-5 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3 mb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-600 text-white font-mono">
                {selectedMistake.code}
              </span>
              <h5 className="text-base font-bold text-stone-900">
                {selectedMistake.title}
              </h5>
            </div>
            <p className="text-xs text-stone-500 mt-0.5">{selectedMistake.subtitle}</p>
          </div>
          <span className="text-xs font-bold text-rose-800 bg-rose-100 border border-rose-300 px-2.5 py-1 rounded-full">
            {selectedMistake.severity}
          </span>
        </div>

        {/* Side by Side Comparison: Wrong vs Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs mb-4">
          {/* Wrong Box */}
          <div className="bg-white p-4 rounded-xl border-2 border-rose-300 shadow-xs">
            <div className="font-bold text-rose-800 flex items-center gap-1.5 mb-2">
              <XCircle className="w-4 h-4 text-rose-600" />
              Cách làm SAI phổ biến:
            </div>
            <div className="p-2.5 rounded-lg bg-rose-50 text-rose-950 font-mono leading-relaxed border border-rose-200">
              {selectedMistake.wrongExample}
            </div>
          </div>

          {/* Right Box */}
          <div className="bg-white p-4 rounded-xl border-2 border-emerald-300 shadow-xs">
            <div className="font-bold text-emerald-800 flex items-center gap-1.5 mb-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Cách làm ĐÚNG chuẩn BA:
            </div>
            <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-950 font-mono font-bold leading-relaxed border border-emerald-200">
              {selectedMistake.rightExample}
            </div>
          </div>
        </div>

        {/* Root Cause & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div className="p-3.5 rounded-xl bg-white border border-stone-200">
            <div className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
              Nguyên nhân gốc rễ:
            </div>
            <p className="text-stone-700 leading-relaxed">{selectedMistake.cause}</p>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-stone-200">
            <div className="font-bold text-emerald-900 mb-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              Phương pháp khắc phục triệt để:
            </div>
            <p className="text-stone-700 leading-relaxed">{selectedMistake.solution}</p>
          </div>
        </div>
      </div>

      {/* Interactive Pitfall Practice */}
      <div className="mt-7">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h5 className="text-sm sm:text-base font-bold text-stone-900 flex items-center gap-2">
              <Target className="w-4 h-4 text-emerald-700" />
              Thử Thách Phản Xạ: Phát Hiện & Sửa Lỗi Trong Đề Thi
            </h5>
            <p className="text-xs text-stone-500">Bấm chọn nhận xét chính xác để rèn luyện kỹ năng thẩm định mô hình:</p>
          </div>
          <button
            onClick={() => setPracticeAnswers({})}
            className="text-xs text-stone-500 hover:text-stone-800 flex items-center gap-1 font-medium"
          >
            <RotateCcw className="w-3 h-3" /> Làm lại
          </button>
        </div>

        <div className="space-y-4">
          {TEST_PRACTICE.map((item, pIdx) => {
            const currentChoice = practiceAnswers[item.id];
            return (
              <div key={item.id} className="p-4 rounded-xl border border-stone-200 bg-stone-50/50">
                <div className="text-xs font-bold text-stone-800 mb-2.5 leading-relaxed">
                  <span className="text-rose-700 font-extrabold mr-1">Tình huống thi #{pIdx + 1}:</span>
                  {item.scenario}
                </div>

                <div className="space-y-2 text-xs">
                  {item.options.map((opt, optIdx) => {
                    const isSelected = currentChoice === optIdx;
                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleSelectPractice(item.id, optIdx)}
                        className={`w-full p-2.5 rounded-lg border text-left transition-all flex items-start justify-between gap-2 ${
                          isSelected
                            ? opt.isCorrect
                              ? "bg-emerald-100 border-emerald-500 text-emerald-950 font-bold"
                              : "bg-rose-100 border-rose-500 text-rose-950 font-bold"
                            : "bg-white border-stone-300 hover:border-stone-400 text-stone-800"
                        }`}
                      >
                        <span>{opt.text}</span>
                        {isSelected && (
                          opt.isCorrect ? <Check className="w-4 h-4 text-emerald-700 shrink-0" /> : <X className="w-4 h-4 text-rose-700 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {currentChoice !== undefined && (
                  <div className={`mt-2.5 p-2.5 rounded-lg text-xs leading-relaxed animate-fadeIn ${
                    item.options[currentChoice].isCorrect
                      ? "bg-emerald-50 text-emerald-950 border border-emerald-300"
                      : "bg-rose-50 text-rose-950 border border-rose-300"
                  }`}>
                    <span className="font-bold">Phân tích đáp án: </span>
                    {item.explanation}
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
