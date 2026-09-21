"use client";
import React, { useState } from "react";
import { 
  BookOpen, 
  Layers, 
  User, 
  CreditCard, 
  GraduationCap, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Compass, 
  FileText, 
  Maximize2,
  Minimize2,
  TableOfContents
} from "lucide-react";

const ACTORS = [
  {
    id: "act-student",
    name: "Student (Sinh viên)",
    role: "Primary Human Actor",
    position: "left",
    icon: GraduationCap,
    desc: "Tác nhân chính khởi tạo việc tra cứu môn, đăng ký và hủy môn học.",
    linkedUseCases: ["uc-view", "uc-reg", "uc-drop"]
  },
  {
    id: "act-registrar",
    name: "Registrar (Cán bộ Đào tạo)",
    role: "Secondary / Admin Human Actor",
    position: "right-top",
    icon: User,
    desc: "Tác nhân quản trị phụ trách phê duyệt danh sách chờ và tạo bảng điểm chính thức.",
    linkedUseCases: ["uc-transcript", "uc-waitlist"]
  },
  {
    id: "act-payment",
    name: "Payment Gateway (Cổng thanh toán)",
    role: "External System Actor",
    position: "right-bottom",
    icon: CreditCard,
    desc: "Hệ thống bên thứ ba tiếp nhận yêu cầu thanh toán và trả về kết quả giao dịch học phí.",
    linkedUseCases: ["uc-pay"]
  }
];

const USE_CASES = [
  { id: "uc-view", name: "View Course Catalog", actorId: "act-student", desc: "Sinh viên xem danh mục các môn học mở trong học kỳ." },
  { id: "uc-reg", name: "Register for Course", actorId: "act-student", desc: "Sinh viên chọn lớp học phần và gửi yêu cầu đăng ký." },
  { id: "uc-drop", name: "Drop Course", actorId: "act-student", desc: "Sinh viên hủy môn học đã đăng ký trong thời hạn cho phép." },
  { id: "uc-pay", name: "Process Payment", actorId: "act-payment", desc: "Hệ thống kết nối Cổng thanh toán để xử lý khấu trừ học phí." },
  { id: "uc-transcript", name: "Generate Transcript", actorId: "act-registrar", desc: "Cán bộ đào tạo kết xuất bảng điểm học tập của sinh viên." },
  { id: "uc-waitlist", name: "Approve Waitlist", actorId: "act-registrar", desc: "Cán bộ đào tạo duyệt các sinh viên trong danh sách chờ khi mở thêm chỗ." }
];

const TOC_COMPARISON = {
  diagram: {
    title: "Use-Case Diagram",
    analogy: "MỤC LỤC CUỐN SÁCH (Table of Contents)",
    question: "Trả lời câu hỏi: 'WHAT?'",
    focus: "Mức độ tổng quan cao (High-level overview)",
    content: "Chỉ ra danh mục các Use Case nào tồn tại trong phạm vi hệ thống và những Actor nào tham gia tương tác.",
    limitation: "CHƯA mô tả chi tiết các bước xử lý nội bộ, không có thứ tự thời gian, không có luồng rẽ nhánh hay ngoại lệ."
  },
  description: {
    title: "Use-Case Description",
    analogy: "NỘI DUNG TỪNG CHƯƠNG CHI TIẾT (Chapter Content)",
    question: "Trả lời câu hỏi: 'HOW?'",
    focus: "Mức độ hành vi chi tiết (Step-by-step behavior)",
    content: "Giải thích cặn kẽ từng bước Actor làm gì và Hệ thống phản hồi gì trong luồng chính (Happy Path), kèm luồng nhánh (Alternative) và ngoại lệ (Exceptions).",
    limitation: "Mỗi bản đặc tả chỉ tập trung vào đúng một Use Case đơn lẻ."
  }
};

export default function CourseRegistrationTocDiagramStudio() {
  const [activeTab, setActiveTab] = useState("diagram"); // "diagram" | "analogy"
  const [highlightedActor, setHighlightedActor] = useState(null);
  const [selectedUseCase, setSelectedUseCase] = useState(USE_CASES[1]); // Default to "Register for Course"

  return (
    <div className="my-8 rounded-2xl border border-amber-200/80 bg-gradient-to-br from-[#faf8f4] via-white to-amber-50/40 p-6 md:p-8 shadow-xl shadow-amber-900/5 text-[#2c2a26]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-amber-200/60 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-950 border border-amber-300/60 mb-2">
            <TableOfContents className="w-3.5 h-3.5 text-amber-700" />
            Mục 3.2 – 3.5 — Use-Case Diagram & The "Table of Contents" Analogy
          </div>
          <h3 className="text-xl md:text-2xl font-black tracking-tight text-stone-900">
            Xưởng thực hành Biểu đồ Đăng ký môn học & Phép ẩn dụ Mục lục
          </h3>
          <p className="text-sm text-stone-600 mt-1 max-w-2xl">
            Slide bài giảng ví von sâu sắc: <strong>Use-Case Diagram chính là "Mục lục (Table of Contents)"</strong> chỉ ra <em>WHAT</em>, còn <strong>Use-Case Description là "Nội dung chương"</strong> giải thích <em>HOW</em>.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-xl border border-stone-200 self-start md:self-auto text-xs">
          <button
            onClick={() => setActiveTab("diagram")}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              activeTab === "diagram"
                ? "bg-white text-stone-900 shadow-xs border border-stone-200"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Biểu đồ UML (Slide 17)
          </button>
          <button
            onClick={() => setActiveTab("analogy")}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              activeTab === "analogy"
                ? "bg-white text-stone-900 shadow-xs border border-stone-200"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Phép ẩn dụ "Mục lục vs Nội dung"
          </button>
        </div>
      </div>

      {/* Tab 1: Interactive UML Diagram Studio */}
      {activeTab === "diagram" && (
        <div className="mt-6 space-y-6">
          <div className="text-xs text-stone-600 flex items-center justify-between">
            <span>Rê chuột hoặc click vào từng Actor để làm nổi bật các ca sử dụng tương ứng:</span>
            <span className="text-[11px] font-semibold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
              Hộp chữ nhật = System Boundary (Ranh giới hệ thống)
            </span>
          </div>

          {/* Diagram Canvas Container */}
          <div className="relative p-6 sm:p-8 rounded-2xl bg-white border border-stone-200 shadow-sm overflow-x-auto">
            <div className="min-w-[640px] grid grid-cols-12 gap-4 items-center">
              {/* Left Column: Primary Actor (Student) */}
              <div className="col-span-3 space-y-3">
                <button
                  onMouseEnter={() => setHighlightedActor("act-student")}
                  onMouseLeave={() => setHighlightedActor(null)}
                  onClick={() => setHighlightedActor(highlightedActor === "act-student" ? null : "act-student")}
                  className={`w-full p-4 rounded-xl border text-center transition-all ${
                    highlightedActor === "act-student"
                      ? "bg-amber-100 border-amber-500 shadow-md ring-2 ring-amber-500/20"
                      : "bg-stone-50 hover:bg-stone-100 border-stone-200"
                  }`}
                >
                  <div className="w-12 h-12 rounded-full bg-amber-600 text-white mx-auto flex items-center justify-center font-bold mb-2 shadow-xs">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <h4 className="font-extrabold text-xs text-stone-900">Student</h4>
                  <span className="text-[10px] font-semibold text-amber-800 uppercase block">Primary Actor</span>
                  <p className="text-[10px] text-stone-500 mt-1">Nằm NGOÀI ranh giới</p>
                </button>
              </div>

              {/* Middle Column: System Boundary (Rectangle) with Use Case Ovals */}
              <div className="col-span-6 rounded-2xl border-2 border-dashed border-amber-400 bg-amber-50/20 p-5 space-y-3 relative shadow-inner">
                <div className="absolute top-2 left-3 bg-white px-2.5 py-0.5 rounded-full border border-amber-300 text-[10px] font-black uppercase tracking-wider text-amber-900">
                  📦 System Boundary: Online Course Registration System
                </div>

                <div className="pt-5 space-y-2.5">
                  {USE_CASES.map(uc => {
                    const isLinked = !highlightedActor || highlightedActor === uc.actorId;
                    const isSelected = selectedUseCase.id === uc.id;

                    return (
                      <button
                        key={uc.id}
                        onClick={() => setSelectedUseCase(uc)}
                        className={`w-full py-2.5 px-4 rounded-full border text-center transition-all ${
                          isSelected
                            ? "bg-amber-600 text-white border-amber-600 shadow-sm font-bold scale-[1.02]"
                            : isLinked
                            ? "bg-white text-stone-900 border-stone-300 hover:border-amber-400 font-semibold shadow-xs"
                            : "bg-white/40 text-stone-400 border-stone-200 opacity-40"
                        }`}
                      >
                        <span className="text-xs">{uc.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Secondary & External System Actors */}
              <div className="col-span-3 space-y-3">
                {/* Registrar */}
                <button
                  onMouseEnter={() => setHighlightedActor("act-registrar")}
                  onMouseLeave={() => setHighlightedActor(null)}
                  onClick={() => setHighlightedActor(highlightedActor === "act-registrar" ? null : "act-registrar")}
                  className={`w-full p-3.5 rounded-xl border text-center transition-all ${
                    highlightedActor === "act-registrar"
                      ? "bg-blue-100 border-blue-500 shadow-md ring-2 ring-blue-500/20"
                      : "bg-stone-50 hover:bg-stone-100 border-stone-200"
                  }`}
                >
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white mx-auto flex items-center justify-center font-bold mb-1.5 shadow-xs">
                    <User className="w-5 h-5" />
                  </div>
                  <h4 className="font-extrabold text-xs text-stone-900">Registrar</h4>
                  <span className="text-[10px] font-semibold text-blue-800 uppercase block">Admin Role</span>
                  <p className="text-[10px] text-stone-500 mt-0.5">Nằm NGOÀI ranh giới</p>
                </button>

                {/* Payment Gateway */}
                <button
                  onMouseEnter={() => setHighlightedActor("act-payment")}
                  onMouseLeave={() => setHighlightedActor(null)}
                  onClick={() => setHighlightedActor(highlightedActor === "act-payment" ? null : "act-payment")}
                  className={`w-full p-3.5 rounded-xl border text-center transition-all ${
                    highlightedActor === "act-payment"
                      ? "bg-emerald-100 border-emerald-500 shadow-md ring-2 ring-emerald-500/20"
                      : "bg-stone-50 hover:bg-stone-100 border-stone-200"
                  }`}
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-600 text-white mx-auto flex items-center justify-center font-bold mb-1.5 shadow-xs">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <h4 className="font-extrabold text-xs text-stone-900">Payment Gateway</h4>
                  <span className="text-[10px] font-semibold text-emerald-800 uppercase block">&lt;&lt;External System&gt;&gt;</span>
                  <p className="text-[10px] text-stone-500 mt-0.5">Nằm NGOÀI ranh giới</p>
                </button>
              </div>
            </div>
          </div>

          {/* Selected Use Case Detail Info */}
          <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div>
              <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block">
                Ca sử dụng đang chọn:
              </span>
              <strong className="text-stone-900 text-sm">{selectedUseCase.name}</strong>
              <p className="text-stone-600 mt-0.5">{selectedUseCase.desc}</p>
            </div>
            <div className="bg-stone-50 px-3 py-2 rounded-lg border border-stone-200 self-start sm:self-auto">
              <span className="font-bold text-stone-700">Tác nhân liên kết: </span>
              <span className="text-amber-900 font-semibold">{ACTORS.find(a => a.id === selectedUseCase.actorId)?.name}</span>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: The Table of Contents Analogy */}
      {activeTab === "analogy" && (
        <div className="mt-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Diagram = Table of Contents */}
            <div className="p-5 rounded-2xl bg-amber-50/50 border border-amber-200 shadow-xs space-y-3">
              <div className="flex items-center gap-2.5 pb-2 border-b border-amber-200">
                <div className="w-8 h-8 rounded-lg bg-amber-600 text-white flex items-center justify-center font-bold">
                  <TableOfContents className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-black text-sm text-amber-950 uppercase">{TOC_COMPARISON.diagram.title}</h4>
                  <span className="text-[11px] font-bold text-amber-800">📖 {TOC_COMPARISON.diagram.analogy}</span>
                </div>
              </div>

              <div className="space-y-2.5 text-xs text-stone-700">
                <div className="p-2 rounded-lg bg-white border border-amber-200 font-bold text-amber-950">
                  {TOC_COMPARISON.diagram.question}
                </div>
                <p><strong>Cấp độ:</strong> {TOC_COMPARISON.diagram.focus}.</p>
                <p><strong>Nội dung:</strong> {TOC_COMPARISON.diagram.content}</p>
                <div className="p-2.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-900 text-[11px]">
                  ⚠️ <strong>Giới hạn:</strong> {TOC_COMPARISON.diagram.limitation}
                </div>
              </div>
            </div>

            {/* Description = Chapter Content */}
            <div className="p-5 rounded-2xl bg-blue-50/50 border border-blue-200 shadow-xs space-y-3">
              <div className="flex items-center gap-2.5 pb-2 border-b border-blue-200">
                <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-black text-sm text-blue-950 uppercase">{TOC_COMPARISON.description.title}</h4>
                  <span className="text-[11px] font-bold text-blue-800">📄 {TOC_COMPARISON.description.analogy}</span>
                </div>
              </div>

              <div className="space-y-2.5 text-xs text-stone-700">
                <div className="p-2 rounded-lg bg-white border border-blue-200 font-bold text-blue-950">
                  {TOC_COMPARISON.description.question}
                </div>
                <p><strong>Cấp độ:</strong> {TOC_COMPARISON.description.focus}.</p>
                <p><strong>Nội dung:</strong> {TOC_COMPARISON.description.content}</p>
                <div className="p-2.5 rounded-lg bg-blue-100/60 border border-blue-200 text-blue-950 text-[11px]">
                  💡 <strong>Đặc điểm:</strong> {TOC_COMPARISON.description.limitation}
                </div>
              </div>
            </div>
          </div>

          {/* Synthesis Card */}
          <div className="p-4 rounded-xl bg-stone-100 border border-stone-200 text-xs text-stone-800 flex items-start gap-2.5">
            <Sparkles className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-stone-900 font-bold">Kết luận phương pháp luận BA:</strong> Không thể chỉ có Diagram (vì thiếu chi tiết luồng xử lý để code) và cũng không thể chỉ có Description (vì người xem sẽ bị lạc lối giữa hàng chục trang văn bản mà không nắm được bức tranh tổng quan). Cặp đôi <strong>Use-Case Diagram (Mục lục) + Use-Case Description (Nội dung chương)</strong> là vũ khí phân tích tối thượng!
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
