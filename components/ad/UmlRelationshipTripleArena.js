"use client";
import React, { useState } from "react";
import { 
  GitFork, 
  ArrowRight, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  HelpCircle, 
  Share2, 
  RefreshCw,
  ShieldCheck,
  ChevronRight,
  Info
} from "lucide-react";

const RELATIONSHIPS = [
  {
    id: "include",
    name: "<<include>>",
    subtitle: "Tái sử dụng Bắt buộc (Mandatory Reuse)",
    tag: "Bắt buộc — Always Executed",
    color: "amber",
    borderClass: "border-amber-400 bg-amber-50/70 text-amber-900",
    badgeClass: "bg-amber-100 text-amber-800 border-amber-300",
    arrowDirection: "Base Use Case ───<<include>>───► Included Use Case",
    arrowRule: "Mũi tên nét đứt từ Base trỏ đến Included",
    baseCompleteAlone: "KHÔNG — Base use case không hoàn chỉnh nếu thiếu phần include",
    purpose: "Trích xuất và tái sử dụng hành vi chung ở nhiều nơi, triệt tiêu mã/đặc tả trùng lặp (DRY).",
    realWorldExample: {
      base: "Register for Course",
      target: "Validate Student Eligibility",
      explanation: "Mỗi khi sinh viên đăng ký môn học hoặc hủy môn học, hệ thống BẮT BUỘC phải thực hiện kiểm tra tính hợp lệ của tài khoản sinh viên trước tiên."
    },
    svgType: "include"
  },
  {
    id: "extend",
    name: "<<extend>>",
    subtitle: "Biến thể Tùy chọn (Optional Variation)",
    tag: "Tùy chọn — Conditional",
    color: "blue",
    borderClass: "border-blue-400 bg-blue-50/70 text-blue-900",
    badgeClass: "bg-blue-100 text-blue-800 border-blue-300",
    arrowDirection: "Extension Use Case ───<<extend>>───► Base Use Case",
    arrowRule: "Mũi tên nét đứt từ Extension trỏ NGƯỢC VỀ Base (Ngược chiều với include)",
    baseCompleteAlone: "CÓ — Base use case đã tự hoàn chỉnh một mình mà không cần extension",
    purpose: "Chèn thêm hành vi rẽ nhánh hoặc nâng cao vào một vị trí cụ thể (Extension Point) khi điều kiện kích hoạt xảy ra.",
    realWorldExample: {
      base: "Register for Course",
      target: "Apply Financial Aid",
      explanation: "Đăng ký môn học vẫn diễn ra bình thường. Chỉ khi sinh viên tích chọn yêu cầu 'Hỗ trợ tài chính/Học bổng' thì luồng phụ này mới được kích hoạt tại bước quy định."
    },
    svgType: "extend"
  },
  {
    id: "generalization",
    name: "Generalization",
    subtitle: "Kế thừa / Chuyên biệt hóa (Specialization)",
    tag: "Kế thừa — Parent/Child",
    color: "emerald",
    borderClass: "border-emerald-400 bg-emerald-50/70 text-emerald-900",
    badgeClass: "bg-emerald-100 text-emerald-800 border-emerald-300",
    arrowDirection: "Child Use Case ───▷ (Hollow Triangle) Parent Use Case",
    arrowRule: "Đường nét liền với Mũi tên tam giác rỗng từ Con (Child) trỏ lên Cha (Parent)",
    baseCompleteAlone: "CÓ — Parent use case đại diện cho hành vi trừu tượng dùng chung",
    purpose: "Mô hình hóa các cách hiện thực khác nhau của cùng một mục tiêu nghiệp vụ. Ca sử dụng con kế thừa các bước của cha và có thể ghi đè (override) hoặc bổ sung.",
    realWorldExample: {
      base: "Make Payment (Parent)",
      target: "Pay by Credit Card / Pay by E-Wallet (Children)",
      explanation: "Khách hàng thực hiện hành vi 'Thanh toán đơn hàng' nói chung, nhưng có thể lựa chọn biến thể cụ thể là 'Quẹt thẻ tín dụng' hoặc 'Quét ví điện tử MoMo/ZaloPay'."
    },
    svgType: "generalization"
  }
];

const COMPARISON_ROWS = [
  {
    criteria: "Hành vi có bắt buộc?",
    include: "Có (Yes — luôn được gọi)",
    extend: "Không (No — chỉ chạy khi thỏa mãn điều kiện)",
    generalization: "Tùy biến thể con được chọn"
  },
  {
    criteria: "Hướng mũi tên UML",
    include: "Base ──► Included",
    extend: "Extension ──► Base (Ngược lại!)",
    generalization: "Child ──▷ Parent (Tam giác rỗng)"
  },
  {
    criteria: "Kiểu đường vẽ UML",
    include: "Đường nét đứt (Dashed line)",
    extend: "Đường nét đứt (Dashed line)",
    generalization: "Đường nét liền (Solid line)"
  },
  {
    criteria: "Base use case có tự đứng độc lập?",
    include: "Không (Chưa hoàn chỉnh nếu thiếu include)",
    extend: "Có (Tự hoàn chỉnh mà không cần extend)",
    generalization: "Có (Parent là hành vi nền tảng)"
  },
  {
    criteria: "Mục đích kiến trúc chính",
    include: "Tái sử dụng logic chung (Reuse shared behavior)",
    extend: "Mở rộng kịch bản tùy chọn (Model variation)",
    generalization: "Đa hình và chuyên biệt hóa (Specialize)"
  }
];

const QUIZ_SCENARIOS = [
  {
    id: 1,
    prompt: "Hệ thống Bán hàng: Mọi đơn hàng khi thanh toán (Checkout) BẮT BUỘC phải thực hiện bước 'Tính thuế VAT và phí giao hàng'. Mối quan hệ giữa Checkout và Calculate Tax là gì?",
    options: ["<<include>>", "<<extend>>", "Generalization"],
    correct: 0,
    explanation: "Vì bước tính thuế là BẮT BUỘC (mandatory) phải chạy mỗi khi Checkout và không thể thiếu, nên Checkout <<include>> Calculate Tax."
  },
  {
    id: 2,
    prompt: "Hệ thống Ngân hàng: Khách hàng thực hiện 'Rút tiền ATM'. Chỉ khi số dư trong tài khoản không đủ, hệ thống mới kích hoạt chức năng 'Gợi ý ứng tiền thấu chi'. Quan hệ là gì?",
    options: ["<<include>>", "<<extend>>", "Generalization"],
    correct: 1,
    explanation: "Rút tiền bình thường vẫn hoàn chỉnh. Gợi ý thấu chi là tùy chọn có điều kiện (conditional) chỉ xuất hiện khi thiếu tiền, nên Suggest Overdraft <<extend>> Withdraw Cash."
  },
  {
    id: 3,
    prompt: "Hệ thống Thi trực tuyến: Học viên thực hiện 'Nộp bài thi'. Hệ thống hỗ trợ 2 hình thức: 'Nộp bài trắc nghiệm tự động' và 'Nộp bài luận đính kèm file'. Quan hệ là gì?",
    options: ["<<include>>", "<<extend>>", "Generalization"],
    correct: 2,
    explanation: "Đây là quan hệ cha-con (Parent-Child). Nộp bài thi là hành vi cha chung, Nộp trắc nghiệm và Nộp bài luận là các biến thể con chuyên biệt hóa (Generalization)."
  }
];

export default function UmlRelationshipTripleArena() {
  const [activeTab, setActiveTab] = useState("include");
  const [quizIndex, setQuizIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const currentRel = RELATIONSHIPS.find((r) => r.id === activeTab) || RELATIONSHIPS[0];
  const currentQuiz = QUIZ_SCENARIOS[quizIndex];

  const handleSelectAnswer = (idx) => {
    setSelectedAnswer(idx);
    setShowExplanation(true);
  };

  const handleNextQuiz = () => {
    setSelectedAnswer(null);
    setShowExplanation(false);
    setQuizIndex((prev) => (prev + 1) % QUIZ_SCENARIOS.length);
  };

  return (
    <div className="my-8 rounded-2xl border border-stone-200 bg-white p-6 shadow-xl transition-all">
      {/* Header */}
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between border-b border-stone-200 pb-5">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-800">
            <GitFork className="h-3.5 w-3.5" /> Mục 6.1 – 6.4: Advanced Use-Case Relationships
          </div>
          <h3 className="mt-2 text-2xl font-bold text-stone-900">
            Đấu Trường 3 Quan Hệ Nâng Cao: &lt;&lt;include&gt;&gt; vs &lt;&lt;extend&gt;&gt; vs Generalization
          </h3>
          <p className="text-sm text-stone-600">
            Làm chủ 3 công cụ tái sử dụng hành vi không trùng lặp, giải mã quy tắc hướng mũi tên và bản chất độc lập của Base Use Case.
          </p>
        </div>
      </div>

      {/* Tabs Switcher */}
      <div className="mt-6 flex flex-wrap gap-2 rounded-xl bg-stone-100 p-1.5">
        {RELATIONSHIPS.map((rel) => {
          const isActive = activeTab === rel.id;
          return (
            <button
              key={rel.id}
              onClick={() => setActiveTab(rel.id)}
              className={`flex-1 min-w-[140px] rounded-lg px-4 py-2.5 text-sm font-bold transition-all ${
                isActive
                  ? "bg-white text-stone-900 shadow-md ring-1 ring-stone-200/80"
                  : "text-stone-600 hover:text-stone-900 hover:bg-white/50"
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <span className="font-mono text-base">{rel.name}</span>
                <span className="text-xs font-normal text-stone-500 hidden sm:inline">({rel.id})</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Interactive Relationship Showcase Box */}
      <div className="mt-6 rounded-xl border border-stone-200 bg-stone-50/50 p-6">
        <div className="flex flex-col lg:flex-row gap-6 items-center">
          {/* SVG Diagram Canvas */}
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center bg-white rounded-xl border border-stone-200 p-6 shadow-sm min-h-[260px]">
            <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">
              Sơ đồ Ký hiệu UML Chuẩn mực
            </span>
            
            {currentRel.svgType === "include" && (
              <svg viewBox="0 0 420 180" className="w-full max-w-[380px] h-auto">
                <defs>
                  <marker id="arrow-include" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <path d="M 0 1 L 8 5 L 0 9" fill="none" stroke="#d97706" strokeWidth="1.8" />
                  </marker>
                </defs>
                {/* Base Oval */}
                <ellipse cx="90" cy="90" rx="80" ry="36" fill="#fef3c7" stroke="#d97706" strokeWidth="2.5" />
                <text x="90" y="86" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#78350f">Register for</text>
                <text x="90" y="104" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#78350f">Course (Base)</text>
                
                {/* Arrow */}
                <line x1="172" y1="90" x2="248" y2="90" stroke="#d97706" strokeWidth="2" strokeDasharray="5,4" markerEnd="url(#arrow-include)" />
                <text x="210" y="76" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#b45309">&lt;&lt;include&gt;&gt;</text>
                
                {/* Target Oval */}
                <ellipse cx="330" cy="90" rx="78" ry="36" fill="#fef3c7" stroke="#d97706" strokeWidth="2.5" />
                <text x="330" y="86" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#78350f">Validate Student</text>
                <text x="330" y="104" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#78350f">Eligibility</text>
              </svg>
            )}

            {currentRel.svgType === "extend" && (
              <svg viewBox="0 0 420 180" className="w-full max-w-[380px] h-auto">
                <defs>
                  <marker id="arrow-extend" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <path d="M 0 1 L 8 5 L 0 9" fill="none" stroke="#2563eb" strokeWidth="1.8" />
                  </marker>
                </defs>
                {/* Extension Oval */}
                <ellipse cx="90" cy="90" rx="80" ry="36" fill="#dbeafe" stroke="#2563eb" strokeWidth="2.5" />
                <text x="90" y="86" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e3a8a">Apply Financial</text>
                <text x="90" y="104" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e3a8a">Aid (Extension)</text>
                
                {/* Arrow pointing BACK from Extension to Base */}
                <line x1="172" y1="90" x2="248" y2="90" stroke="#2563eb" strokeWidth="2" strokeDasharray="5,4" markerEnd="url(#arrow-extend)" />
                <text x="210" y="76" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1d4ed8">&lt;&lt;extend&gt;&gt;</text>
                
                {/* Base Oval */}
                <ellipse cx="330" cy="90" rx="78" ry="36" fill="#dbeafe" stroke="#2563eb" strokeWidth="2.5" />
                <text x="330" y="86" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e3a8a">Register for</text>
                <text x="330" y="104" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e3a8a">Course (Base)</text>
              </svg>
            )}

            {currentRel.svgType === "generalization" && (
              <svg viewBox="0 0 420 220" className="w-full max-w-[380px] h-auto">
                <defs>
                  <marker id="hollow-triangle" viewBox="0 0 14 14" refX="13" refY="7" markerWidth="9" markerHeight="9" orient="auto">
                    <polygon points="1,1 13,7 1,13" fill="#ffffff" stroke="#059669" strokeWidth="1.8" />
                  </marker>
                </defs>
                {/* Parent Oval (Top) */}
                <ellipse cx="210" cy="50" rx="78" ry="32" fill="#d1fae5" stroke="#059669" strokeWidth="2.5" />
                <text x="210" y="47" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#065f46">Make Payment</text>
                <text x="210" y="63" textAnchor="middle" fontSize="11" fill="#047857">(Parent Use Case)</text>
                
                {/* Child Left */}
                <ellipse cx="90" cy="170" rx="76" ry="32" fill="#d1fae5" stroke="#059669" strokeWidth="2" />
                <text x="90" y="167" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#065f46">Pay by Credit Card</text>
                <text x="90" y="183" textAnchor="middle" fontSize="11" fill="#047857">(Child Variant)</text>
                
                {/* Child Right */}
                <ellipse cx="330" cy="170" rx="76" ry="32" fill="#d1fae5" stroke="#059669" strokeWidth="2" />
                <text x="330" y="167" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#065f46">Pay by E-Wallet</text>
                <text x="330" y="183" textAnchor="middle" fontSize="11" fill="#047857">(Child Variant)</text>
                
                {/* Solid lines with hollow triangles pointing to Parent */}
                <path d="M 90 138 L 195 86" stroke="#059669" strokeWidth="2" fill="none" markerEnd="url(#hollow-triangle)" />
                <path d="M 330 138 L 225 86" stroke="#059669" strokeWidth="2" fill="none" markerEnd="url(#hollow-triangle)" />
              </svg>
            )}

            <div className="mt-3 text-center text-xs font-medium text-stone-500">
              💡 {currentRel.arrowRule}
            </div>
          </div>

          {/* Details Column */}
          <div className="w-full lg:w-1/2 space-y-4">
            <div>
              <div className="flex items-center gap-2">
                <span className={`px-2.5 py-0.5 text-xs font-bold rounded-full border ${currentRel.badgeClass}`}>
                  {currentRel.tag}
                </span>
                <h4 className="text-xl font-bold text-stone-900">{currentRel.subtitle}</h4>
              </div>
              <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                {currentRel.purpose}
              </p>
            </div>

            <div className="rounded-lg bg-white p-3.5 border border-stone-200 text-xs space-y-2">
              <div className="flex items-start gap-2">
                <span className="font-bold text-stone-700 min-w-[130px]">🎯 Hướng mũi tên:</span>
                <span className="font-semibold text-stone-900 font-mono text-[11px]">{currentRel.arrowDirection}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-stone-700 min-w-[130px]">🧩 Base đứng riêng?:</span>
                <span className="text-stone-800 font-medium">{currentRel.baseCompleteAlone}</span>
              </div>
            </div>

            {/* Real world card */}
            <div className="rounded-lg border border-amber-200 bg-amber-50/60 p-3.5 text-xs">
              <div className="font-bold text-amber-900 flex items-center gap-1.5 mb-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                Ví dụ thực tế từ Slide bài giảng:
              </div>
              <div className="text-amber-950 leading-relaxed">
                <strong>{currentRel.realWorldExample.base}</strong> và <strong>{currentRel.realWorldExample.target}</strong>: {currentRel.realWorldExample.explanation}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Master Table (Section 6.4) */}
      <div className="mt-8">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-base font-bold text-stone-900 flex items-center gap-2">
            <Layers className="w-4 h-4 text-amber-600" />
            Mục 6.4: Bảng So Sánh &quot;Phải Thuộc&quot; Khi Vào Phòng Thi
          </h4>
          <span className="text-xs font-medium text-amber-700 bg-amber-100/80 px-2 py-0.5 rounded-full">
            Trọng tâm thi cử
          </span>
        </div>

        <div className="overflow-x-auto rounded-xl border border-stone-200 shadow-sm">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-stone-100 text-stone-800 font-bold border-b border-stone-200">
                <th className="p-3 w-1/4">Tiêu chí so sánh</th>
                <th className="p-3 w-1/4 bg-amber-50/70 text-amber-900 border-l border-stone-200">&lt;&lt;include&gt;&gt;</th>
                <th className="p-3 w-1/4 bg-blue-50/70 text-blue-900 border-l border-stone-200">&lt;&lt;extend&gt;&gt;</th>
                <th className="p-3 w-1/4 bg-emerald-50/70 text-emerald-900 border-l border-stone-200">Generalization</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 bg-white">
              {COMPARISON_ROWS.map((row, idx) => (
                <tr key={idx} className="hover:bg-stone-50 transition-colors">
                  <td className="p-3 font-semibold text-stone-900">{row.criteria}</td>
                  <td className="p-3 text-amber-900 bg-amber-50/20 border-l border-stone-200 font-medium">{row.include}</td>
                  <td className="p-3 text-blue-900 bg-blue-50/20 border-l border-stone-200 font-medium">{row.extend}</td>
                  <td className="p-3 text-emerald-900 bg-emerald-50/20 border-l border-stone-200 font-medium">{row.generalization}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mini Quiz Challenge */}
      <div className="mt-8 rounded-xl border border-stone-200 bg-gradient-to-r from-stone-900 to-stone-800 p-6 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" /> Thử Thách Phản Xạ Tình Huống ({quizIndex + 1}/{QUIZ_SCENARIOS.length})
          </div>
          <button
            onClick={handleNextQuiz}
            className="flex items-center gap-1 text-xs text-stone-300 hover:text-white transition-colors"
          >
            Đổi câu hỏi <RefreshCw className="w-3 h-3 ml-1" />
          </button>
        </div>

        <p className="mt-3 text-sm md:text-base font-medium text-stone-100">
          {currentQuiz.prompt}
        </p>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          {currentQuiz.options.map((opt, idx) => {
            const isChosen = selectedAnswer === idx;
            const isCorrect = idx === currentQuiz.correct;
            let btnClass = "bg-stone-800/80 hover:bg-stone-700 text-stone-200 border-stone-700";

            if (showExplanation) {
              if (isCorrect) {
                btnClass = "bg-emerald-600 text-white border-emerald-500 font-bold";
              } else if (isChosen && !isCorrect) {
                btnClass = "bg-rose-600 text-white border-rose-500";
              } else {
                btnClass = "opacity-40 bg-stone-800 border-stone-700";
              }
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelectAnswer(idx)}
                disabled={showExplanation}
                className={`rounded-lg border px-4 py-3 text-xs md:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${btnClass}`}
              >
                {opt}
                {showExplanation && isCorrect && <CheckCircle2 className="w-4 h-4 text-white shrink-0" />}
              </button>
            );
          })}
        </div>

        {showExplanation && (
          <div className="mt-4 rounded-lg bg-stone-800/90 border border-stone-700 p-3.5 text-xs text-stone-300 flex items-start gap-2 animate-fadeIn">
            <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-amber-400">Giải thích chuẩn mực:</strong> {currentQuiz.explanation}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
