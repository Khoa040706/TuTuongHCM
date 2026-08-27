/* eslint-disable react-hooks/exhaustive-deps, @next/next/no-img-element */
"use client";
import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import {
  Boxes,
  Layers,
  ArrowRight,
  Sparkles,
  Lock,
  BookOpen,
  Info,
  CheckCircle2,
  Code2,
  GitBranch,
  Clock,
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  ExternalLink,
  ChevronRight,
  FileCode,
  ListOrdered,
  Eye,
  X,
  Activity,
  Workflow,
  Cpu,
  Share2,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Minimize2
} from "lucide-react";

// ==========================================
// 🌿 SCANDINAVIAN NATURE-TECH COLOR PALETTE (LIGHT THEME)
// ==========================================
const PALETTE = {
  skyMist: "#A8CDE2",     // Bầu trời mờ, lưới ô ly, giọt nước dữ liệu
  limeMeadow: "#CCD06B",  // Cỏ non, viền hover, activation bar, badge sáng
  earthOlive: "#8E9346",  // Rêu ấm, oval use case, nhãn điều kiện
  deepPine: "#384417",    // Rừng thông, icon, viền mỏng, text phụ
  obsidianOnyx: "#18191B",// Đen khoáng thạch, tiêu đề H1, nút Capsule
  canvasPaper: "#FCFDFE", // Nền giấy vẽ trắng ngà
  pureWhite: "#FFFFFF",   // Trắng sứ thẻ card
  bgStart: "#F0F6FA",     // Điểm bắt đầu gradient nền
  bgEnd: "#FAFDFE"        // Điểm kết thúc gradient nền
};

// ==========================================
// 🔊 NORDIC ORGANIC SOUND SYNTHESIZER
// ==========================================
const playWoodblockSound = () => {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(360, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(180, ctx.currentTime + 0.06);

    gain.gain.setValueAtTime(0.2, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.06);
  } catch {
    // Ignore audio errors
  }
};

const playChimeSound = () => {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    [528, 792, 1056].forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.04);
      gain.gain.setValueAtTime(0.12, ctx.currentTime + idx * 0.04);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.45);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime + idx * 0.04);
      osc.stop(ctx.currentTime + 0.45);
    });
  } catch {
    // Ignore audio errors
  }
};

// ==========================================
// 📐 DIAGRAM MASTER DATA
// ==========================================
const DIAGRAM_DATA = [
  {
    id: "class",
    title: "Class Diagram",
    vietnameseTitle: "Sơ đồ Lớp Đối Tượng (OOP Structural)",
    category: "structural",
    categoryLabel: "STRUCTURAL MODELING",
    phase: "Phase 3: Design",
    difficulty: "Chuyên sâu",
    previewImg: "/assets/diagrams/atm_class_diagram.jpg",
    caseStudyFocus: "ATM System Class Blueprint (Cấu trúc OOP Máy Rút Tiền ATM)",
    summary:
      "Mô tả cấu trúc tĩnh của hệ thống phần mềm hướng đối tượng bao gồm các lớp (Classes), thuộc tính (Attributes), phương thức (Methods) và các mối quan hệ (Association, Aggregation, Composition, Inheritance).",
    academicRules: [
      "Tính đóng gói (Encapsulation): Phân định rõ tầm vực private (-), public (+), protected (#), package (~).",
      "Phân biệt Kết tập (Aggregation ◇) vs Hợp thành (Composition ◆): Hợp thành có vòng đời gắn liền chặt chẽ.",
      "Quan hệ Kế thừa (Generalization △) vs Hiện thực hóa (Realization ▵ nét đứt).",
      "Bội số liên kết (Multiplicity): Xác định chính xác 1..1, 0..*, 1..* ở hai đầu quan hệ."
    ],
    notations: [
      { symbol: "Class Box", name: "Hộp Lớp", desc: "Chia 3 ngăn: Tên lớp, Thuộc tính, Phương thức" },
      { symbol: "───◇", name: "Aggregation", desc: "Quan hệ 'Has-a' (Có một), tồn tại độc lập" },
      { symbol: "───◆", name: "Composition", desc: "Quan hệ 'Part-of' (Một phần của), sống chết cùng nhau" },
      { symbol: "───▷", name: "Inheritance", desc: "Quan hệ kế thừa từ Lớp cha sang Lớp con" },
      { symbol: "┈ ┈ ▷", name: "Realization", desc: "Hiện thực hóa giao diện (implements Interface)" }
    ],
    caseStudies: [
      { name: "Hệ thống Rút tiền ATM (Tiêu điểm)", desc: "ATM, CashDispenser, Bank, Account, SavingsAccount, Customer, Transaction" },
      { name: "Hệ thống E-Commerce", desc: "Order, OrderItem, Customer, PaymentMethod, Inventory" },
      { name: "Bệnh viện Đa khoa", desc: "Doctor, Patient, MedicalRecord, Department, Prescription" },
      { name: "Đặt vé Máy bay", desc: "Flight, Passenger, Booking, Seat, Airport, Ticket" }
    ]
  },
  {
    id: "usecase",
    title: "Use Case Diagram",
    vietnameseTitle: "Sơ đồ Ca Sử Dụng (Business & System)",
    category: "business",
    categoryLabel: "BUSINESS & REQUIREMENTS",
    phase: "Phase 2: Analysis",
    difficulty: "Cốt lõi",
    previewImg: "/assets/diagrams/atm_usecase_diagram.jpg",
    caseStudyFocus: "ATM System Use Cases (Ca Sử Dụng Rút Tiền & Quản Trị Hệ Thống)",
    summary:
      "Mô tả chức năng của hệ thống dưới góc nhìn của tác nhân bên ngoài (Black-box view), thể hiện ai (Actor) tương tác với hệ thống và các mối liên kết phụ thuộc (<<include>>, <<extend>>, Generalization).",
    academicRules: [
      "Actor (Tác nhân): Luôn nằm NGOÀI ranh giới hệ thống (System Boundary), có thể là Người dùng hoặc Hệ thống ngoài.",
      "Quan hệ <<include>> (Bắt buộc): Ca sử dụng gốc luôn gọi thực thi ca sử dụng được include (mũi tên trỏ về ca con).",
      "Quan hệ <<extend>> (Mở rộng tùy chọn): Ca sử dụng mở rộng chỉ thực thi khi thỏa mãn Extension Point (mũi tên trỏ về ca gốc).",
      "Tên Ca sử dụng: Luôn bắt đầu bằng một ĐỘNG TỪ chỉ hành động (Ví dụ: Đặt vé, Thanh toán, Đăng nhập)."
    ],
    notations: [
      { symbol: "웃", name: "Actor", desc: "Tác nhân người dùng hoặc hệ thống bên ngoài" },
      { symbol: "( Oval )", name: "Use Case", desc: "Một chức năng hoàn chỉnh mang lại giá trị" },
      { symbol: "───", name: "Association", desc: "Đường kết nối tương tác giữa Actor và Use Case" },
      { symbol: "┈<<include>>┈>", name: "Include", desc: "Bắt buộc phải thực hiện kèm theo" },
      { symbol: "┈<<extend>>┈>", name: "Extend", desc: "Mở rộng tùy biến theo điều kiện" }
    ],
    caseStudies: [
      { name: "Hệ thống Rút tiền ATM (Tiêu điểm)", desc: "Actor: Customer, Bank Host, Technician; Use Case: Withdraw, Balance, Refill" },
      { name: "Ứng dụng Mua sắm E-Commerce", desc: "Actor: Khách hàng; Use Case: Đặt hàng, Áp mã giảm giá, Xác thực" },
      { name: "Cổng Đào tạo Đại học", desc: "Actor: Sinh viên, Giảng viên; Use Case: Đăng ký môn học, Xem bảng điểm" },
      { name: "Phòng khám Thông minh", desc: "Actor: Bệnh nhân, Bác sĩ; Use Case: Đặt lịch hẹn khám, Nhận SMS" }
    ]
  },
  {
    id: "sequence",
    title: "Sequence Diagram",
    vietnameseTitle: "Sơ đồ Tuần Tự (Message Flow & Lifelines)",
    category: "behavioral",
    categoryLabel: "BEHAVIORAL MODELING",
    phase: "Phase 3: Design",
    difficulty: "Vận dụng cao",
    previewImg: "/assets/diagrams/atm_sequence_diagram.jpg",
    caseStudyFocus: "ATM Cash Withdrawal Interaction (Trục Thời Gian Rút Tiền ATM)",
    summary:
      "Mô tả tương tác động giữa các đối tượng theo trục thời gian tuyến tính từ trên xuống dưới, làm rõ chi tiết các cuộc gọi hàm (Synchronous/Asynchronous call), điều kiện lặp/rẽ nhánh và giá trị trả về.",
    academicRules: [
      "Lifeline (Đường sinh mệnh): Biểu diễn sự tồn tại của đối tượng theo thời gian từ trên xuống.",
      "Activation Bar (Thanh kích hoạt): Thể hiện khoảng thời gian đối tượng đang trực tiếp nắm quyền xử lý.",
      "Thông điệp đồng bộ (Synchronous ➔): Bên gọi phải chờ kết quả xử lý trước khi thực hiện bước tiếp theo.",
      "Thông điệp trả về (Reply Message ┈ ┈ >): Trả lại kết quả hoặc dữ liệu cho đối tượng yêu cầu."
    ],
    notations: [
      { symbol: "[:Object]", name: "Participant", desc: "Đối tượng hoặc lớp tham gia vào tương tác" },
      { symbol: "┆", name: "Lifeline", desc: "Đường sinh mệnh nét đứt theo trục thời gian" },
      { symbol: "▮", name: "Activation Bar", desc: "Thanh kích hoạt thể hiện thời gian xử lý" },
      { symbol: "───▶", name: "Sync Call", desc: "Cuộc gọi đồng bộ (chờ phản hồi)" },
      { symbol: "┈ ┈ ▶", name: "Reply", desc: "Thông điệp trả lời kết quả về đối tượng gọi" }
    ],
    caseStudies: [
      { name: "Kịch bản Rút tiền ATM (Tiêu điểm)", desc: ":Customer ➔ :CardReader ➔ :ATMController ➔ :BankServer ➔ :CashDispenser" },
      { name: "Quy trình Đăng nhập OTP", desc: "User ➔ App ➔ AuthService ➔ SMSGateway ➔ Database" },
      { name: "Thanh toán Cổng VNPAY", desc: "Client ➔ Backend ➔ VNPAY Gateway ➔ Bank Core ➔ Callback" },
      { name: "Đặt phòng Khách sạn", desc: "Guest ➔ UI ➔ BookingService ➔ RoomInventory ➔ PaymentService" }
    ]
  },
  {
    id: "activity",
    title: "Activity Diagram",
    vietnameseTitle: "Sơ đồ Hoạt Động & Làn Bơi (Swimlanes)",
    category: "behavioral",
    categoryLabel: "BEHAVIORAL & WORKFLOW",
    phase: "Phase 2 & 3: Modeling",
    difficulty: "Cốt lõi",
    previewImg: "/assets/diagrams/atm_activity_diagram.jpg",
    caseStudyFocus: "ATM 3-Swimlane Process Workflow (Quy Trình Nghiệp Vụ 3 Làn Bơi)",
    summary:
      "Mô tả luồng công việc (Workflow) của một quy trình nghiệp vụ hoặc giải thuật xử lý, phân chia trách nhiệm qua các làn bơi (Swimlanes), điểm rẽ nhánh (Decisions) và xử lý song song (Fork/Join).",
    academicRules: [
      "Swimlanes (Làn bơi): Phân định rõ ràng trách nhiệm của từng bộ phận (Khách hàng, Thu ngân, Hệ thống).",
      "Initial Node (Nút bắt đầu ●) & Final Node (Nút kết thúc ◉): Điểm vào và điểm ra duy nhất của quy trình.",
      "Decision Node (Điểm rẽ nhánh ◆): Phải có Guard Condition [Đúng/Sai] rõ ràng trên từng nhánh thoát.",
      "Fork & Join Bar: Phân nhánh thực thi song song (Fork) và hội tụ tất cả các luồng hoàn thành (Join)."
    ],
    notations: [
      { symbol: "●", name: "Initial Node", desc: "Điểm khởi đầu của luồng hoạt động" },
      { symbol: "( Action )", name: "Action State", desc: "Một bước hành động hoặc xử lý dữ liệu" },
      { symbol: "◆", name: "Decision", desc: "Điểm rẽ nhánh có điều kiện [Guard]" },
      { symbol: "━━━", name: "Fork / Join", desc: "Phân tách hoặc hội tụ các luồng song song" },
      { symbol: "◉", name: "Final Node", desc: "Điểm kết thúc toàn bộ quy trình" }
    ],
    caseStudies: [
      { name: "Quy trình Rút tiền ATM 3 Làn (Tiêu điểm)", desc: "Làn bơi: [Customer], [ATM Terminal], [Bank Host Server]" },
      { name: "Xử lý Đơn hàng E-Commerce", desc: "Làn bơi: Khách hàng, Kho bãi, Đơn vị vận chuyển, Kế toán" },
      { name: "Quy trình Phê duyệt Nghỉ phép", desc: "Làn bơi: Nhân viên, Quản lý trực tiếp, Phòng Nhân sự" },
      { name: "Mở tài khoản Ngân hàng số", desc: "Làn bơi: Khách hàng (eKYC), Hệ thống AI Face, Chuyên viên duyệt" }
    ]
  }
];

export default function DiagramSimDashboard({ onClose }) {
  const [isMounted, setIsMounted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeModalDiagram, setActiveModalDiagram] = useState(null);
  const [modalTab, setModalTab] = useState("theory"); // theory | notation | caseStudy | roadmap
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);
  const [isSimRunning, setIsSimRunning] = useState(true);
  const [zoomScale, setZoomScale] = useState(1);
  const [isFullscreenImg, setIsFullscreenImg] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Load sound setting from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("diagram_sim_sound");
      if (saved !== null) setIsSoundEnabled(saved === "true");
    } catch {}
  }, []);

  const toggleSound = () => {
    const nextState = !isSoundEnabled;
    setIsSoundEnabled(nextState);
    if (nextState) playWoodblockSound();
    try {
      localStorage.setItem("diagram_sim_sound", String(nextState));
    } catch {}
  };

  const handleOpenModal = (diagram) => {
    if (isSoundEnabled) playChimeSound();
    setActiveModalDiagram(diagram);
    setModalTab("theory");
    setZoomScale(1);
    setIsFullscreenImg(false);
  };

  const handleCloseModal = () => {
    if (isSoundEnabled) playWoodblockSound();
    setActiveModalDiagram(null);
    setIsFullscreenImg(false);
  };

  const handleFilterClick = (cat) => {
    if (isSoundEnabled) playWoodblockSound();
    setSelectedCategory(cat);
  };

  const filteredDiagrams = DIAGRAM_DATA.filter((d) => {
    if (selectedCategory === "all") return true;
    return d.category === selectedCategory;
  });

  // 🔒 Lock background scroll when Modal is open
  useEffect(() => {
    if (activeModalDiagram || isFullscreenImg) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [activeModalDiagram, isFullscreenImg]);

  // Handle ESC key to exit
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        if (isFullscreenImg) {
          setIsFullscreenImg(false);
        } else if (activeModalDiagram) {
          handleCloseModal();
        } else if (onClose) {
          onClose();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeModalDiagram, isFullscreenImg, onClose]);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#F0F6FA] via-[#F8FBFC] to-[#FAFDFE] text-[#18191B] relative overflow-hidden font-sans selection:bg-[#CCD06B]/40 selection:text-[#18191B]">
      {/* 🌤️ AMBIENT COORDINATE GRID & LIGHT MIST BACKDROP */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 z-0"
        style={{
          backgroundImage: `radial-gradient(${PALETTE.skyMist} 1px, transparent 1px)`,
          backgroundSize: "24px 24px"
        }}
      />
      <div className="absolute -top-40 left-1/4 w-96 h-96 rounded-full bg-[#A8CDE2]/20 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 rounded-full bg-[#CCD06B]/15 blur-3xl pointer-events-none" />

      {/* ========================================================= */}
      {/* 🌤️ MASTER HEADER BAR (MINIMALIST SCANDINAVIAN GLASS) */}
      {/* ========================================================= */}
      <header className="sticky top-0 z-40 w-full px-4 sm:px-8 lg:px-12 2xl:px-16 py-3.5 bg-white/80 backdrop-blur-xl border-b border-[#384417]/10 shadow-[0_4px_20px_rgba(56,68,23,0.03)]">
        <div className="w-full flex items-center justify-between gap-4">
          {/* Left: StudyMaster Brand with Mascot & Diagram Studio Breadcrumb */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center bg-white border border-[#384417]/15 shadow-sm">
                <img
                  src="/assets/cancer_mascot_transparent.png"
                  alt="StudyMaster Mascot"
                  className="w-full h-full object-cover scale-105"
                />
              </div>
              <span className="text-base font-bold tracking-tight text-[#18191B] font-serif">
                StudyMaster
              </span>
            </div>

            {/* Subtle Breadcrumb Separator */}
            <span className="text-stone-300 font-light select-none text-sm">/</span>

            {/* Diagram Studio Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0F6FA] border border-[#384417]/15 shadow-sm text-xs font-bold text-[#384417]">
              <Boxes className="w-3.5 h-3.5 text-[#8E9346]" />
              <span>Diagram Studio</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#CCD06B] animate-pulse shadow-sm" />
            </div>
          </div>

          {/* Center: Clean Airflow (Empty) */}

          {/* Right: Sound Toggle & Back Capsule Button */}
          <div className="flex items-center gap-2.5">
            {/* Sound Toggle Capsule */}
            <button
              onClick={toggleSound}
              className="p-2 rounded-full bg-white hover:bg-stone-100 text-[#384417] border border-[#384417]/15 transition-all shadow-sm hover:scale-105 active:scale-95 cursor-pointer"
              title={isSoundEnabled ? "Tắt âm thanh" : "Bật âm thanh"}
              aria-label="Sound Toggle"
            >
              {isSoundEnabled ? <Volume2 className="w-4 h-4 text-[#8E9346]" /> : <VolumeX className="w-4 h-4 text-stone-400" />}
            </button>

            {/* Back Button (Black Obsidian Pill like "Shop Now" in photo) */}
            {onClose && (
              <button
                onClick={() => {
                  if (isSoundEnabled) playWoodblockSound();
                  onClose();
                }}
                className="group flex items-center gap-2 px-4 py-2 rounded-full bg-[#18191B] hover:bg-[#2A2B2E] text-white text-xs font-bold transition-all shadow-md hover:shadow-lg hover:shadow-black/20 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Quay lại bài học</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#CCD06B] transition-transform group-hover:translate-x-1" />
                <kbd className="hidden lg:inline-block text-[9px] bg-white/20 text-stone-300 px-1.5 py-0.2 rounded font-mono font-normal">
                  ESC
                </kbd>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* ========================================================= */}
      {/* 🌿 MAIN STUDIO CONTAINER */}
      {/* ========================================================= */}
      <main className="w-full px-4 sm:px-8 lg:px-12 2xl:px-16 py-8 sm:py-12 relative z-10 space-y-8">
        
        {/* 🎛️ HERO OVERVIEW BANNER */}
        <section className="text-center max-w-4xl mx-auto space-y-3 pt-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#18191B] font-serif leading-tight">
            Bộ Mô Phỏng Toàn Diện Các Diagram
          </h1>

          <p className="text-sm md:text-base text-[#384417]/85 font-medium leading-relaxed max-w-3xl mx-auto">
            Khám phá bản vẽ kỹ thuật, quy tắc chuẩn ISO/UML 2.5, luồng dữ liệu thời gian thực và các tình huống ứng dụng thực tế trong công nghệ phần mềm.
          </p>
        </section>

        {/* ========================================================= */}
        {/* 🏷️ SEGMENTED FILTER CAPSULE BAR */}
        {/* ========================================================= */}
        <div className="flex justify-center">
          <div className="p-1.5 bg-white/90 backdrop-blur-md rounded-full border border-[#384417]/15 shadow-sm flex flex-wrap items-center gap-1">
            {[
              { id: "all", label: "Tất cả (4 Diagrams)" },
              { id: "structural", label: "Structural (Class)" },
              { id: "behavioral", label: "Behavioral (Sequence, Activity)" },
              { id: "business", label: "Business (Use Case)" }
            ].map((tab) => {
              const isActive = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleFilterClick(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#18191B] text-[#CCD06B] shadow-md scale-[1.02]"
                      : "text-[#384417] hover:text-[#18191B] hover:bg-stone-100/80"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================= */}
        {/* 📐 4 DIAGRAM CARDS (RESPONSIVE FLUID GRID: 2 CỘT CHO LAPTOP, 4 CỘT CHO ULTRAWIDE) */}
        {/* ========================================================= */}
        <section className="grid grid-cols-1 md:grid-cols-2 min-[1900px]:grid-cols-4 gap-6 lg:gap-8 max-w-[1920px] mx-auto">
          {filteredDiagrams.map((diagram) => (
            <div
              key={diagram.id}
              className="group bg-white rounded-3xl border border-[#384417]/12 shadow-[0_12px_40px_rgba(56,68,23,0.06),0_2px_6px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(56,68,23,0.12)] hover:border-[#CCD06B] transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col justify-between"
            >
              {/* Card Header */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between gap-3 mb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#A8CDE2]/25 text-[#384417] font-mono border border-[#A8CDE2]/40">
                      {diagram.categoryLabel}
                    </span>
                    <span className="text-[10px] font-bold text-stone-500 font-mono">
                      {diagram.phase}
                    </span>
                  </div>

                  {/* Lock / Development Badge */}
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#CCD06B]/25 border border-[#8E9346]/30 text-[#384417] text-[11px] font-bold shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-[#8E9346] animate-pulse" />
                    Đang hoàn thiện
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#18191B] font-serif group-hover:text-[#384417] transition-colors">
                  {diagram.title}
                </h3>
                <p className="text-xs font-semibold text-[#8E9346] mt-0.5">
                  {diagram.vietnameseTitle}
                </p>
              </div>

              {/* 🎨 LIVE SVG MICRO-CANVAS (IVORY PAPER STAGE) */}
              <div className="px-6 py-2">
                <div className="w-full h-44 sm:h-48 md:h-52 rounded-2xl bg-[#FCFDFE] border border-[#384417]/10 p-3 relative overflow-hidden flex items-center justify-center shadow-inner group-hover:border-[#CCD06B]/80 transition-colors">
                  {/* Micro Coordinate Grid */}
                  <div 
                    className="absolute inset-0 pointer-events-none opacity-30"
                    style={{
                      backgroundImage: `radial-gradient(${PALETTE.skyMist} 1px, transparent 1px)`,
                      backgroundSize: "16px 16px"
                    }}
                  />

                  {/* 🧱 1. CLASS DIAGRAM LIVE SVG */}
                  {diagram.id === "class" && (
                    <svg className="w-full h-full" viewBox="0 0 400 150" fill="none">
                      {/* Class 1: Order */}
                      <g transform="translate(30, 20)">
                        <rect width="130" height="110" rx="8" fill="#FFFFFF" stroke="#384417" strokeWidth="1.5" />
                        <rect width="130" height="26" rx="8" fill="#F0F6FA" stroke="#384417" strokeWidth="1.5" />
                        <text x="65" y="17" textAnchor="middle" fill="#18191B" fontSize="11" fontWeight="bold" fontFamily="monospace">«Class» Order</text>
                        <line x1="0" y1="26" x2="130" y2="26" stroke="#384417" strokeWidth="1" />
                        <text x="8" y="44" fill="#384417" fontSize="9" fontFamily="monospace">- id: String</text>
                        <text x="8" y="60" fill="#384417" fontSize="9" fontFamily="monospace">- total: Float</text>
                        <line x1="0" y1="70" x2="130" y2="70" stroke="#384417" strokeWidth="1" />
                        <text x="8" y="88" fill="#8E9346" fontSize="9" fontWeight="bold" fontFamily="monospace">+ calculateTotal()</text>
                        <text x="8" y="102" fill="#8E9346" fontSize="9" fontWeight="bold" fontFamily="monospace">+ checkout()</text>
                      </g>

                      {/* Class 2: OrderItem */}
                      <g transform="translate(240, 20)">
                        <rect width="130" height="110" rx="8" fill="#FFFFFF" stroke="#384417" strokeWidth="1.5" />
                        <rect width="130" height="26" rx="8" fill="#F0F6FA" stroke="#384417" strokeWidth="1.5" />
                        <text x="65" y="17" textAnchor="middle" fill="#18191B" fontSize="11" fontWeight="bold" fontFamily="monospace">OrderItem</text>
                        <line x1="0" y1="26" x2="130" y2="26" stroke="#384417" strokeWidth="1" />
                        <text x="8" y="44" fill="#384417" fontSize="9" fontFamily="monospace">- qty: Int</text>
                        <text x="8" y="60" fill="#384417" fontSize="9" fontFamily="monospace">- price: Float</text>
                        <line x1="0" y1="70" x2="130" y2="70" stroke="#384417" strokeWidth="1" />
                        <text x="8" y="88" fill="#8E9346" fontSize="9" fontWeight="bold" fontFamily="monospace">+ getSubtotal()</text>
                      </g>

                      {/* Aggregation Connection line with moving energy droplet */}
                      <path d="M 160 75 L 240 75" stroke="#384417" strokeWidth="1.5" />
                      <polygon points="160,75 168,70 176,75 168,80" fill="#CCD06B" stroke="#384417" strokeWidth="1.5" />
                      <text x="182" y="68" fill="#8E9346" fontSize="9" fontWeight="bold" fontFamily="monospace">1</text>
                      <text x="225" y="68" fill="#8E9346" fontSize="9" fontWeight="bold" fontFamily="monospace">1..*</text>

                      {/* Animated Token Droplet */}
                      <circle r="4" fill="#CCD06B" stroke="#384417" strokeWidth="1">
                        <animateMotion path="M 176 75 L 240 75" dur="2s" repeatCount="indefinite" />
                      </circle>
                    </svg>
                  )}

                  {/* 🎭 2. USE CASE DIAGRAM LIVE SVG */}
                  {diagram.id === "usecase" && (
                    <svg className="w-full h-full" viewBox="0 0 400 150" fill="none">
                      {/* System Boundary */}
                      <rect x="130" y="10" width="240" height="130" rx="12" fill="#F0F6FA" stroke="#A8CDE2" strokeWidth="1.5" strokeDasharray="4 3" />
                      <text x="145" y="28" fill="#384417" fontSize="9" fontWeight="bold" fontFamily="monospace">«System» E-Store</text>

                      {/* Actor: Customer */}
                      <g transform="translate(50, 45)">
                        <circle cx="20" cy="14" r="10" fill="#18191B" />
                        <line x1="20" y1="24" x2="20" y2="48" stroke="#18191B" strokeWidth="2.5" />
                        <line x1="5" y1="34" x2="35" y2="34" stroke="#18191B" strokeWidth="2.5" />
                        <line x1="20" y1="48" x2="8" y2="68" stroke="#18191B" strokeWidth="2.5" />
                        <line x1="20" y1="48" x2="32" y2="68" stroke="#18191B" strokeWidth="2.5" />
                        <text x="20" y="82" textAnchor="middle" fill="#18191B" fontSize="10" fontWeight="bold">Customer</text>
                      </g>

                      {/* Use Case 1: Place Order */}
                      <g transform="translate(160, 35)">
                        <ellipse cx="65" cy="22" rx="55" ry="18" fill="#FFFFFF" stroke="#8E9346" strokeWidth="1.5" />
                        <text x="65" y="26" textAnchor="middle" fill="#18191B" fontSize="10" fontWeight="bold">( / ) Place Order</text>
                      </g>

                      {/* Use Case 2: Make Payment */}
                      <g transform="translate(160, 85)">
                        <ellipse cx="65" cy="22" rx="55" ry="18" fill="#FFFFFF" stroke="#8E9346" strokeWidth="1.5" />
                        <text x="65" y="26" textAnchor="middle" fill="#18191B" fontSize="10" fontWeight="bold">( / ) Make Payment</text>
                      </g>

                      {/* Association & Include Lines */}
                      <line x1="85" y1="65" x2="160" y2="57" stroke="#384417" strokeWidth="1.5" />
                      <line x1="85" y1="65" x2="160" y2="107" stroke="#384417" strokeWidth="1.5" />
                      
                      {/* Animated Token on Path */}
                      <circle r="3.5" fill="#A8CDE2" stroke="#384417" strokeWidth="1">
                        <animateMotion path="M 85 65 L 160 57" dur="1.8s" repeatCount="indefinite" />
                      </circle>
                    </svg>
                  )}

                  {/* ⏱️ 3. SEQUENCE DIAGRAM LIVE SVG */}
                  {diagram.id === "sequence" && (
                    <svg className="w-full h-full" viewBox="0 0 400 150" fill="none">
                      {/* Participant 1: Client */}
                      <g transform="translate(60, 10)">
                        <rect width="90" height="26" rx="6" fill="#FFFFFF" stroke="#18191B" strokeWidth="1.5" />
                        <text x="45" y="17" textAnchor="middle" fill="#18191B" fontSize="10" fontWeight="bold" fontFamily="monospace">:Client</text>
                        <line x1="45" y1="26" x2="45" y2="135" stroke="#A8CDE2" strokeWidth="1.5" strokeDasharray="3 3" />
                        <rect x="40" y="45" width="10" height="70" rx="3" fill="#CCD06B" stroke="#384417" strokeWidth="1" />
                      </g>

                      {/* Participant 2: Server */}
                      <g transform="translate(250, 10)">
                        <rect width="90" height="26" rx="6" fill="#FFFFFF" stroke="#18191B" strokeWidth="1.5" />
                        <text x="45" y="17" textAnchor="middle" fill="#18191B" fontSize="10" fontWeight="bold" fontFamily="monospace">:Server</text>
                        <line x1="45" y1="26" x2="45" y2="135" stroke="#A8CDE2" strokeWidth="1.5" strokeDasharray="3 3" />
                        <rect x="40" y="55" width="10" height="50" rx="3" fill="#CCD06B" stroke="#384417" strokeWidth="1" />
                      </g>

                      {/* Sync Message Call */}
                      <path d="M 115 65 L 285 65" stroke="#384417" strokeWidth="1.5" />
                      <polygon points="285,65 277,61 277,69" fill="#384417" />
                      <text x="200" y="58" textAnchor="middle" fill="#384417" fontSize="9" fontWeight="bold" fontFamily="monospace">submitOrder()</text>

                      {/* Return Message Call */}
                      <path d="M 285 95 L 115 95" stroke="#8E9346" strokeWidth="1.5" strokeDasharray="4 3" />
                      <polygon points="115,95 123,91 123,99" fill="#8E9346" />
                      <text x="200" y="90" textAnchor="middle" fill="#8E9346" fontSize="9" fontWeight="bold" fontFamily="monospace">«return id»</text>

                      {/* Droplet animation */}
                      <circle r="4" fill="#A8CDE2" stroke="#18191B" strokeWidth="1">
                        <animateMotion path="M 115 65 L 285 65" dur="2.2s" repeatCount="indefinite" />
                      </circle>
                    </svg>
                  )}

                  {/* 🏊 4. ACTIVITY DIAGRAM LIVE SVG */}
                  {diagram.id === "activity" && (
                    <svg className="w-full h-full" viewBox="0 0 400 150" fill="none">
                      {/* Swimlane 1 */}
                      <rect x="20" y="10" width="175" height="130" fill="none" stroke="#A8CDE2" strokeWidth="1" strokeDasharray="2 2" />
                      <text x="105" y="24" textAnchor="middle" fill="#384417" fontSize="9" fontWeight="bold" fontFamily="monospace">[ Khách Hàng ]</text>

                      {/* Swimlane 2 */}
                      <rect x="195" y="10" width="185" height="130" fill="none" stroke="#A8CDE2" strokeWidth="1" strokeDasharray="2 2" />
                      <text x="285" y="24" textAnchor="middle" fill="#384417" fontSize="9" fontWeight="bold" fontFamily="monospace">[ Hệ Thống ]</text>

                      {/* Initial Node */}
                      <circle cx="50" cy="75" r="7" fill="#18191B" />
                      <line x1="57" y1="75" x2="85" y2="75" stroke="#384417" strokeWidth="1.5" />

                      {/* Action 1 */}
                      <rect x="85" y="58" width="75" height="34" rx="8" fill="#FFFFFF" stroke="#384417" strokeWidth="1.5" />
                      <text x="122" y="79" textAnchor="middle" fill="#18191B" fontSize="9" fontWeight="bold">Đặt hàng</text>

                      <line x1="160" y1="75" x2="215" y2="75" stroke="#384417" strokeWidth="1.5" />

                      {/* Decision Diamond */}
                      <polygon points="230,60 245,75 230,90 215,75" fill="#CCD06B" stroke="#384417" strokeWidth="1.5" />

                      <line x1="245" y1="75" x2="280" y2="75" stroke="#384417" strokeWidth="1.5" />

                      {/* Action 2: Process */}
                      <rect x="280" y="58" width="75" height="34" rx="8" fill="#FFFFFF" stroke="#384417" strokeWidth="1.5" />
                      <text x="317" y="79" textAnchor="middle" fill="#18191B" fontSize="9" fontWeight="bold">Xử lý kho</text>

                      {/* Final Node */}
                      <circle cx="370" cy="75" r="7" fill="none" stroke="#18191B" strokeWidth="1.5" />
                      <circle cx="370" cy="75" r="4.5" fill="#18191B" />

                      {/* Energy Token flow */}
                      <circle r="3.5" fill="#CCD06B" stroke="#384417" strokeWidth="1">
                        <animateMotion path="M 50 75 L 85 75 L 160 75 L 215 75 L 280 75 L 370 75" dur="3s" repeatCount="indefinite" />
                      </circle>
                    </svg>
                  )}
                </div>
              </div>

              {/* Card Bottom Description & Action */}
              <div className="p-6 pt-3 space-y-4">
                <p className="text-xs text-[#384417]/80 line-clamp-2 leading-relaxed">
                  {diagram.summary}
                </p>

                <div className="pt-2 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-stone-500 font-semibold">
                    Độ phức tạp: <strong className="text-[#384417]">{diagram.difficulty}</strong>
                  </span>

                  <button
                    onClick={() => handleOpenModal(diagram)}
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#18191B] hover:bg-[#2A2B2E] text-[#CCD06B] text-xs font-bold transition-all shadow-sm hover:shadow hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    <span>Xem trước tài liệu</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>

      {/* ========================================================= */}
      {/* 🔍 TEASER PREVIEW MODAL (SPLIT-SCREEN WORKSPACE - REACT PORTAL TRUE CENTER) */}
      {/* ========================================================= */}
      {isMounted && activeModalDiagram && createPortal(
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-5 md:p-6 bg-black/60 backdrop-blur-md animate-fadeIn overflow-hidden"
          onClick={handleCloseModal}
        >
          <div 
            className="bg-[#FCFDFE] w-full max-w-5xl 2xl:max-w-6xl h-[82vh] max-h-[720px] rounded-3xl border border-[#384417]/20 shadow-2xl flex flex-col overflow-hidden animate-scaleUp my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="p-3.5 px-5 sm:px-6 border-b border-[#384417]/10 bg-white flex items-center justify-between gap-4 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-2xl bg-[#CCD06B]/30 border border-[#8E9346]/40 flex items-center justify-center text-[#384417]">
                  <Boxes className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-base sm:text-lg font-bold text-[#18191B] font-serif">
                      {activeModalDiagram.title}
                    </h2>
                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#CCD06B]/30 text-[#384417]">
                      {activeModalDiagram.phase}
                    </span>
                  </div>
                  <p className="text-xs text-[#8E9346] font-medium">
                    {activeModalDiagram.vietnameseTitle}
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-[#18191B] transition-colors cursor-pointer"
                aria-label="Đóng"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body: Split Screen 2 Columns */}
            <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-12 overflow-hidden divide-y lg:divide-y-0 lg:divide-x divide-stone-200">
              
              {/* 📐 LEFT COLUMN (60%): LARGE INTERACTIVE CANVAS WITH HIGH-RES IMAGE & LIGHTBOX */}
              <div className="lg:col-span-7 p-4 sm:p-6 bg-[#F5F9FC] flex flex-col h-full overflow-hidden space-y-3">
                {/* Header Bar of the Image Stage */}
                <div className="flex items-center justify-between shrink-0 gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="text-xs font-black uppercase tracking-wider text-[#384417] font-mono flex items-center gap-1.5 truncate">
                      <Workflow className="w-3.5 h-3.5 text-[#8E9346] shrink-0" /> Bản Vẽ Kỹ Thuật ATM
                    </span>
                    <span className="hidden sm:inline-block text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#CCD06B]/25 text-[#384417] border border-[#8E9346]/20 shrink-0">
                      ISO/IEC 19505
                    </span>
                  </div>

                  {/* Zoom & Lightbox Toolbar */}
                  <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-stone-200 shadow-xs shrink-0">
                    <button
                      onClick={() => setZoomScale((prev) => Math.max(0.7, +(prev - 0.2).toFixed(1)))}
                      className="p-1.5 rounded-lg hover:bg-stone-100 text-[#384417] transition-all cursor-pointer"
                      title="Thu nhỏ (-)"
                      aria-label="Thu nhỏ"
                    >
                      <ZoomOut className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-[11px] font-mono font-bold px-1 text-stone-600 min-w-[36px] text-center select-none">
                      {Math.round(zoomScale * 100)}%
                    </span>
                    <button
                      onClick={() => setZoomScale((prev) => Math.min(2.5, +(prev + 0.2).toFixed(1)))}
                      className="p-1.5 rounded-lg hover:bg-stone-100 text-[#384417] transition-all cursor-pointer"
                      title="Phóng to (+)"
                      aria-label="Phóng to"
                    >
                      <ZoomIn className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => setZoomScale(1)}
                      className="p-1.5 rounded-lg hover:bg-stone-100 text-[#8E9346] text-[10px] font-bold font-mono transition-all cursor-pointer"
                      title="Kích thước gốc 100%"
                    >
                      1:1
                    </button>
                    <div className="w-[1px] h-3.5 bg-stone-200 mx-0.5" />
                    <button
                      onClick={() => setIsFullscreenImg(true)}
                      className="p-1.5 rounded-lg bg-[#18191B] text-[#CCD06B] hover:bg-[#2A2B2E] transition-all cursor-pointer flex items-center gap-1 text-[10px] font-bold px-2"
                      title="Xem toàn màn hình (Fullscreen Lightbox)"
                    >
                      <Maximize2 className="w-3 h-3" />
                      <span className="hidden sm:inline">Phóng to</span>
                    </button>
                  </div>
                </div>

                {/* Full-Height Stage Canvas with Image Preview */}
                <div 
                  className="w-full flex-1 min-h-[300px] rounded-2xl bg-white border border-[#384417]/15 p-2 shadow-sm relative overflow-auto flex items-center justify-center group cursor-zoom-in"
                  onClick={() => setIsFullscreenImg(true)}
                  title="Nhấp đúp hoặc bấm nút để mở toàn cảnh siêu nét"
                >
                  <div 
                    className="absolute inset-0 pointer-events-none opacity-20"
                    style={{
                      backgroundImage: `radial-gradient(${PALETTE.skyMist} 1px, transparent 1px)`,
                      backgroundSize: "20px 20px"
                    }}
                  />

                  {activeModalDiagram.previewImg ? (
                    <div className="relative z-10 w-full h-full flex items-center justify-center p-2">
                      <img
                        src={activeModalDiagram.previewImg}
                        alt={activeModalDiagram.title}
                        style={{ transform: `scale(${zoomScale})` }}
                        className="max-h-full max-w-full object-contain rounded-xl shadow-xs transition-transform duration-200 select-none"
                      />
                      {/* Overlay Hover Tooltip */}
                      <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/75 text-white text-[10px] font-bold px-3 py-1.5 rounded-full pointer-events-none flex items-center gap-1.5 backdrop-blur-xs shadow-md">
                        <Maximize2 className="w-3 h-3 text-[#CCD06B]" /> Nhấp để mở toàn cảnh siêu nét
                      </div>
                    </div>
                  ) : (
                    <div className="text-center text-stone-400 text-xs">Đang tải bản vẽ...</div>
                  )}
                </div>

                {/* Technical Case Study Caption */}
                <div className="flex items-center justify-between text-[11px] text-stone-500 font-mono shrink-0 px-1">
                  <span className="flex items-center gap-1.5 text-[#384417] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8E9346]" />
                    Case Study: {activeModalDiagram.caseStudyFocus || "Hệ Thống ATM Banking"}
                  </span>
                  <span className="text-[#8E9346] font-sans italic">Bản vẽ thiết kế kỹ thuật</span>
                </div>
              </div>

              {/* 📚 RIGHT COLUMN (40%): DEEP CONTENT TABS */}
              <div className="lg:col-span-5 p-4 sm:p-6 flex flex-col justify-between overflow-y-auto space-y-4">
                <div>
                  {/* Segmented Modal Tabs */}
                  <div className="grid grid-cols-4 gap-1 p-1 bg-stone-100 rounded-2xl border border-stone-200 mb-4">
                    {[
                      { id: "theory", label: "Lý thuyết" },
                      { id: "notation", label: "Ký hiệu" },
                      { id: "caseStudy", label: "Case Study" },
                      { id: "roadmap", label: "Lộ trình" }
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => {
                          if (isSoundEnabled) playWoodblockSound();
                          setModalTab(tab.id);
                        }}
                        className={`py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          modalTab === tab.id
                            ? "bg-white text-[#18191B] shadow-sm"
                            : "text-[#384417]/70 hover:text-[#18191B]"
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  {/* TAB 1: THEORY */}
                  {modalTab === "theory" && (
                    <div className="space-y-4 animate-fadeIn">
                      <div className="p-4 rounded-2xl bg-[#F0F6FA] border border-[#A8CDE2]/40">
                        <span className="text-[10px] font-black uppercase tracking-wider text-[#384417] font-mono block mb-1">
                          📖 Định nghĩa giáo trình:
                        </span>
                        <p className="text-xs leading-relaxed text-[#18191B] font-medium">
                          {activeModalDiagram.summary}
                        </p>
                      </div>

                      <div>
                        <span className="text-xs font-bold text-[#18191B] block mb-2 font-serif">
                          📌 4 Quy Tắc Cốt Lõi Cần Nhớ:
                        </span>
                        <ul className="space-y-2 text-xs text-[#384417]/90 leading-relaxed font-medium">
                          {activeModalDiagram.academicRules.map((rule, idx) => (
                            <li key={idx} className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-stone-200">
                              <CheckCircle2 className="w-4 h-4 text-[#8E9346] shrink-0 mt-0.5" />
                              <span>{rule}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* TAB 2: NOTATION CHEAT-SHEET */}
                  {modalTab === "notation" && (
                    <div className="space-y-3 animate-fadeIn">
                      <span className="text-xs font-bold text-[#18191B] block mb-2 font-serif">
                        📐 Bảng Ký Hiệu Chuẩn ISO/UML 2.5:
                      </span>
                      <div className="space-y-2">
                        {activeModalDiagram.notations.map((item, idx) => (
                          <div key={idx} className="p-3 rounded-xl bg-white border border-stone-200 flex items-center justify-between gap-3 shadow-sm">
                            <div className="flex items-center gap-3">
                              <span className="font-mono font-bold text-xs px-2.5 py-1 rounded bg-[#CCD06B]/25 text-[#384417] border border-[#8E9346]/20 shrink-0">
                                {item.symbol}
                              </span>
                              <div>
                                <div className="text-xs font-bold text-[#18191B]">{item.name}</div>
                                <div className="text-[11px] text-stone-500">{item.desc}</div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* TAB 3: CASE STUDIES */}
                  {modalTab === "caseStudy" && (
                    <div className="space-y-3 animate-fadeIn">
                      <span className="text-xs font-bold text-[#18191B] block mb-2 font-serif">
                        💼 4 Tình Huống Ứng Dụng Thực Tế:
                      </span>
                      <div className="space-y-2.5">
                        {activeModalDiagram.caseStudies.map((cs, idx) => (
                          <div key={idx} className="p-3.5 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-1">
                            <div className="text-xs font-bold text-[#18191B] flex items-center gap-2">
                              <span className="w-5 h-5 rounded-full bg-[#18191B] text-white flex items-center justify-center text-[10px] font-mono">
                                {idx + 1}
                              </span>
                              {cs.name}
                            </div>
                            <div className="text-[11px] text-[#384417]/80 pl-7 leading-relaxed font-mono">
                              {cs.desc}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* TAB 4: ROADMAP */}
                  {modalTab === "roadmap" && (
                    <div className="space-y-3 animate-fadeIn">
                      <span className="text-xs font-bold text-[#18191B] block mb-2 font-serif">
                        🚀 Lộ Trình Tính Năng Simulator:
                      </span>
                      <div className="space-y-2.5">
                        {[
                          { title: "Kéo - Thả Phần Tử Tự Do (Drag & Drop)", desc: "Tự do bố trí Actor, Class box và vẽ đường liên kết trực tiếp trên Canvas.", tag: "Sắp tới" },
                          { title: "Trình Sinh Mã Tự Động (Code Generator)", desc: "Chuyển đổi tức thì từ Class Diagram sang Java/TypeScript Entity classes.", tag: "Giai đoạn 2" },
                          { title: "Kiểm Tra Lỗi Cú Pháp UML Tự Động", desc: "Phát hiện ngay lỗi sai quy tắc kế thừa, chu trình lặp hoặc include sai chiều.", tag: "Giai đoạn 3" }
                        ].map((rm, idx) => (
                          <div key={idx} className="p-3.5 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-1">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-[#18191B]">{rm.title}</span>
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#CCD06B]/30 text-[#384417]">
                                {rm.tag}
                              </span>
                            </div>
                            <p className="text-[11px] text-[#384417]/80 leading-relaxed">
                              {rm.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Modal Footer Note */}
                <div className="p-3.5 rounded-2xl bg-[#CCD06B]/20 border border-[#8E9346]/30 text-center">
                  <span className="text-xs font-bold text-[#384417] block">
                    ✨ Bản mô phỏng tương tác sâu đang được hoàn thiện
                  </span>
                  <span className="text-[11px] text-stone-600">
                    Sẽ mở khóa toàn bộ công cụ thực hành trong bản cập nhật tới.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* 🔍 FULLSCREEN LIGHTBOX MODAL (SIÊU PHÂN GIẢI TOÀN MÀN HÌNH) */}
      {isMounted && isFullscreenImg && activeModalDiagram && createPortal(
        <div 
          className="fixed inset-0 z-[10000] flex flex-col bg-black/90 backdrop-blur-xl animate-fadeIn p-4 sm:p-6 select-none"
          onClick={() => setIsFullscreenImg(false)}
        >
          {/* Lightbox Header Bar */}
          <div className="flex items-center justify-between text-white mb-3 shrink-0" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-3">
              <span className="text-sm sm:text-base font-bold text-[#CCD06B] font-serif">
                {activeModalDiagram.title} — Bản Vẽ Kỹ Thuật Toàn Cảnh (ATM Banking)
              </span>
              <span className="hidden sm:inline-block text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/10 text-stone-300 border border-white/10">
                UML 2.5 ISO/IEC 19505
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setZoomScale((prev) => Math.max(0.6, +(prev - 0.2).toFixed(1)))}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
                title="Thu nhỏ"
                aria-label="Thu nhỏ"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono font-bold px-2 text-[#CCD06B] min-w-[40px] text-center">
                {Math.round(zoomScale * 100)}%
              </span>
              <button
                onClick={() => setZoomScale((prev) => Math.min(3, +(prev + 0.2).toFixed(1)))}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
                title="Phóng to"
                aria-label="Phóng to"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={() => setZoomScale(1)}
                className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-mono text-stone-300 transition-all cursor-pointer"
                title="Về kích thước gốc"
              >
                1:1
              </button>
              <button
                onClick={() => setIsFullscreenImg(false)}
                className="p-2 rounded-full bg-white/20 hover:bg-red-500 text-white transition-all ml-2 cursor-pointer"
                title="Đóng phóng to (ESC)"
                aria-label="Đóng phóng to"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Lightbox Image Container */}
          <div 
            className="flex-1 min-h-0 flex items-center justify-center overflow-auto p-2 sm:p-4 cursor-zoom-out"
            onClick={() => setIsFullscreenImg(false)}
          >
            <img
              src={activeModalDiagram.previewImg}
              alt={activeModalDiagram.title}
              style={{ transform: `scale(${zoomScale})` }}
              className="max-h-full max-w-full object-contain rounded-2xl shadow-2xl transition-transform duration-200 select-none cursor-default"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
