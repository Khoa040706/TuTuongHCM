"use client";
import React, { useState, useRef } from "react";
import { Anchor, Home, Globe, Swords, Hammer, FileText, Heart, Target, Cloud, Flame, Building, Key, Check, RotateCcw, HelpCircle } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function HcmTimeline1945to1969() {
  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef(null);
  
  // Game states
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const tabs = [
    { label: "1945 - 1946", desc: "Bảo vệ chính quyền non trẻ" },
    { label: "1946 - 1954", desc: "Kháng chiến & Kiến quốc" },
    { label: "1954 - 1969", desc: "Kháng chiến & Xây dựng CNXH" },
    { label: "Kết luận", desc: "Hệ thống lý luận hoàn thiện" }
  ];

  const quizQuestions = [
    {
      q: "Trong giai đoạn nào, Hồ Chí Minh cùng Trung ương Đảng xác định rõ mục tiêu riêng cho từng miền (Miền Bắc giữ vai trò quyết định nhất, Miền Nam giữ vị trí quyết định trực tiếp)?",
      options: [
        "Giai đoạn 1945 - 1946",
        "Giai đoạn 1946 - 1954",
        "Giai đoạn 1954 - 1969"
      ],
      answer: 2,
      explanation: "Trong giai đoạn 1954 - 1969, đất nước bị chia cắt làm hai miền. Người đã xác định miền Bắc tiến hành cách mạng XHCN giữ vai trò quyết định nhất, còn miền Nam tiếp tục cách mạng dân tộc dân chủ nhân dân giữ vị trí quyết định trực tiếp."
    },
    {
      q: "Sách lược đối ngoại khôn khéo 'thêm bạn, bớt thù' và phương châm 'dĩ bất biến, ứng vạn biến' được áp dụng để đối phó với thế 'ngàn cân treo sợi tóc' trong giai đoạn nào?",
      options: [
        "Giai đoạn 1945 - 1946",
        "Giai đoạn 1946 - 1954",
        "Giai đoạn 1954 - 1969"
      ],
      answer: 0,
      explanation: "Ngay sau khi nước Việt Nam Dân chủ Cộng hòa độc lập (1945 - 1946), chúng ta phải đối mặt với thù trong giặc ngoài vô cùng hiểm nghèo. Sách lược khôn khéo này giúp tranh thủ thời gian hòa hoãn chuẩn bị thực lực."
    },
    {
      q: "Đường lối cách mạng 'vừa kháng chiến, vừa kiến quốc' kết hợp chiến tranh nhân dân toàn dân, toàn diện, trường kỳ và tự lực cánh sinh là đặc trưng cốt lõi của thời kỳ nào?",
      options: [
        "Giai đoạn 1945 - 1946",
        "Giai đoạn 1946 - 1954",
        "Giai đoạn 1954 - 1969"
      ],
      answer: 1,
      explanation: "Giai đoạn 1946 - 1954 là cuộc kháng chiến trường kỳ chống thực dân Pháp xâm lược và thực hiện kiến thiết đất nước."
    }
  ];

  // GSAP animation on tab changes
  useGSAP(() => {
    {
      const targets = containerRef.current ? containerRef.current.querySelectorAll(".timeline-content-card") : document.querySelectorAll(".timeline-content-card");
      if (targets && targets.length > 0) {
      gsap.fromTo(targets, 
      { opacity: 0, y: 15, scale: 0.98 },
      { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: "power2.out", stagger: 0.1 }
    );
      }
    }
  }, { dependencies: [activeTab], scope: containerRef });

  const handleSelectOption = (idx) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(idx);
    if (idx === quizQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setQuizFinished(false);
  };

  return (
    <div ref={containerRef} className="w-full bg-[#fdfdfb] border border-stone-200/80 rounded-3xl p-4 md:p-8 shadow-sm space-y-8 select-text">
      {/* Header section */}
      <div className="text-center md:text-left space-y-2 border-b border-stone-150 pb-5">
        <h4 className="text-lg md:text-xl font-bold font-playfair text-[#1c1917] tracking-tight flex items-center justify-center md:justify-start gap-2.5">
          <span className="p-2 rounded-xl bg-amber-500/10 text-amber-600">⏱️</span>
          Bản Đồ Di Sản Lịch Sử & Phát Triển Tư Tưởng (1945 - 1969)
        </h4>
        <p className="text-xs md:text-sm text-stone-500 font-medium max-w-3xl leading-relaxed">
          Khám phá tiến trình Hồ Chí Minh tiếp tục củng cố, bổ sung và hoàn thiện hệ thống lý luận cách mạng Việt Nam qua các thời kỳ mang tính bước ngoặt.
        </p>
      </div>

      {/* Timeline Tabs */}
      <div className="w-full">
        {/* Tab Header Row */}
        <div className="flex flex-col md:flex-row gap-2 bg-stone-150/40 p-1.5 rounded-2xl border border-stone-200/50 overflow-hidden">
          {tabs.map((tab, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`flex-1 flex flex-col items-center md:items-start text-center md:text-left px-4 py-3 rounded-xl transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-white text-amber-700 shadow-sm border-b-2 border-amber-600 font-bold"
                    : "text-stone-500 hover:text-stone-850 hover:bg-white/50 font-semibold"
                }`}
              >
                <span className={`text-xs md:text-sm tracking-tight ${isActive ? "text-amber-700" : "text-stone-700"}`}>
                  {tab.label}
                </span>
                <span className="text-[10px] opacity-80 mt-0.5 hidden md:block font-medium truncate max-w-full">
                  {tab.desc}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Contents */}
      <div className="min-h-[280px]">
        {/* TAB 0: 1945 - 1946 */}
        {activeTab === 0 && (
          <div className="space-y-6">
            <div className="flex items-center gap-2 border-l-4 border-amber-500 pl-3">
              <span className="text-xs uppercase font-extrabold tracking-wider text-amber-650">Thời kỳ kháng chiến 1945 - 1946</span>
              <h5 className="text-sm font-bold text-stone-900">Bảo vệ chính quyền non trẻ trong thế &quot;ngàn cân treo sợi tóc&quot;</h5>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Bối cảnh */}
              <div className="timeline-content-card bg-white hover:bg-stone-50/50 p-5 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-600 flex items-center justify-center">
                    <Anchor size={18} />
                  </div>
                  <h6 className="font-extrabold text-stone-900 text-xs uppercase tracking-wider">Bối cảnh phức tạp</h6>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Ngay sau khi giành độc lập, nước Việt Nam Dân chủ Cộng hòa phải đối phó với thực dân Pháp quay lại xâm lược ở miền Nam và hơn 20 vạn quân Tưởng kéo vào miền Bắc nhằm tiêu diệt Đảng và chính quyền.
                  </p>
                </div>
              </div>

              {/* Card 2: Đối nội */}
              <div className="timeline-content-card bg-white hover:bg-stone-50/50 p-5 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 text-green-600 flex items-center justify-center">
                    <Home size={18} />
                  </div>
                  <h6 className="font-extrabold text-stone-900 text-xs uppercase tracking-wider">Chính sách đối nội</h6>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Hồ Chí Minh chủ trương củng cố chính quyền non trẻ, đẩy lùi &quot;giặc đói, giặc dốt&quot; và khắc phục nạn tài chính thiếu hụt.
                  </p>
                </div>
              </div>

              {/* Card 3: Đối ngoại */}
              <div className="timeline-content-card bg-white hover:bg-stone-50/50 p-5 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center">
                    <Globe size={18} />
                  </div>
                  <h6 className="font-extrabold text-stone-900 text-xs uppercase tracking-wider">Sách lược đối ngoại</h6>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Vận dụng chiến lược khôn khéo, mềm dẻo &quot;thêm bạn, bớt thù&quot;, &quot;dĩ bất biến, ứng vạn biến&quot; nhằm tranh thủ thời gian hòa hoãn để chuẩn bị thực lực cho cuộc kháng chiến lâu dài.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 1: 1946 - 1954 */}
        {activeTab === 1 && (
          <div className="space-y-6">
            <div className="flex items-center gap-2 border-l-4 border-amber-500 pl-3">
              <span className="text-xs uppercase font-extrabold tracking-wider text-amber-650">Thời kỳ kháng chiến 1946 - 1954</span>
              <h5 className="text-sm font-bold text-stone-900">Kháng chiến chống thực dân Pháp và kiến quốc</h5>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Đường lối */}
              <div className="timeline-content-card bg-white hover:bg-stone-50/50 p-5 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-600 flex items-center justify-center">
                    <Swords size={18} />
                  </div>
                  <h6 className="font-extrabold text-stone-900 text-xs uppercase tracking-wider">Kháng chiến toàn diện</h6>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Người đề ra đường lối &quot;vừa kháng chiến, vừa kiến quốc&quot;, tiến hành cuộc chiến tranh nhân dân với phương châm: toàn dân, toàn diện, trường kỳ và tự lực cánh sinh.
                  </p>
                </div>
              </div>

              {/* Card 2: Xây dựng Đảng */}
              <div className="timeline-content-card bg-white hover:bg-stone-50/50 p-5 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-650 flex items-center justify-center">
                    <Hammer size={18} />
                  </div>
                  <h6 className="font-extrabold text-stone-900 text-xs uppercase tracking-wider">Xây dựng Đảng & Đạo đức</h6>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Chú trọng xây dựng Đảng, giáo dục đạo đức cách mạng (cần, kiệm, liêm, chính, chí công vô tư) và chống các căn bệnh quan liêu, mệnh lệnh.
                  </p>
                </div>
              </div>

              {/* Card 3: Đại hội II */}
              <div className="timeline-content-card bg-white hover:bg-stone-50/50 p-5 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center">
                    <FileText size={18} />
                  </div>
                  <h6 className="font-extrabold text-stone-900 text-xs uppercase tracking-wider">Đại hội II của Đảng (1951)</h6>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Đảng ra hoạt động công khai với tên gọi Đảng Lao động Việt Nam, thông qua Cương lĩnh và Điều lệ mới để giải quyết đúng đắn mối quan hệ giữa dân tộc và giai cấp, đưa cuộc kháng chiến đến thắng lợi hoàn toàn vào năm 1954.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: 1954 - 1969 */}
        {activeTab === 2 && (
          <div className="space-y-6">
            <div className="flex items-center gap-2 border-l-4 border-amber-500 pl-3">
              <span className="text-xs uppercase font-extrabold tracking-wider text-amber-650">Thời kỳ kháng chiến 1954 - 1969</span>
              <h5 className="text-sm font-bold text-stone-900">Kháng chiến chống Mỹ và xây dựng Chủ nghĩa xã hội ở miền Bắc</h5>
            </div>
            
            {/* Divided context card */}
            <div className="timeline-content-card w-full bg-red-500/5 border border-red-200 rounded-2xl p-5 flex flex-col md:flex-row items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-600 flex items-center justify-center flex-shrink-0">
                <Heart size={20} className="animate-pulse" />
              </div>
              <div className="space-y-1">
                <div className="font-bold text-stone-900 text-sm">Bối cảnh đất nước bị chia cắt</div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Sau Hiệp định Giơnevơ năm 1954, miền Bắc được giải phóng nhưng miền Nam bị đế quốc Mỹ và bè lũ tay sai xâm chiếm, chia cắt đất nước.
                </p>
              </div>
            </div>

            {/* Strategic Roles Columns */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Target size={16} className="text-amber-600" />
                <h6 className="text-xs uppercase font-extrabold text-stone-500 tracking-widest">Nhiệm vụ chiến lược hai miền</h6>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Column 1: Miền Bắc */}
                <div className="timeline-content-card bg-[#f0f9ff]/60 border border-sky-100 hover:border-sky-300 p-5 rounded-2xl shadow-inner-sm transition-all duration-300 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-sky-500/10 text-sky-600 flex items-center justify-center font-bold text-xs">
                      💙
                    </span>
                    <span className="font-extrabold text-stone-900 text-sm">Miền Bắc Xã Hội Chủ Nghĩa</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5">
                      <Cloud size={14} className="text-sky-500" />
                      <span className="text-xs font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-md">Vai trò quyết định nhất</span>
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Tiến hành cách mạng xã hội chủ nghĩa, giữ vai trò quyết định nhất đối với sự phát triển của toàn bộ cách mạng Việt Nam.
                    </p>
                  </div>
                </div>

                {/* Column 2: Miền Nam */}
                <div className="timeline-content-card bg-[#fff7ed]/60 border border-orange-100 hover:border-orange-300 p-5 rounded-2xl shadow-inner-sm transition-all duration-300 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-orange-500/10 text-orange-650 flex items-center justify-center font-bold text-xs">
                      🧡
                    </span>
                    <span className="font-extrabold text-stone-900 text-sm">Miền Nam Giải Phóng</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5">
                      <Flame size={14} className="text-orange-500" />
                      <span className="text-xs font-bold text-orange-700 bg-orange-50 px-2 py-0.5 rounded-md">Vị trí quyết định trực tiếp</span>
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Tiếp tục cuộc cách mạng dân tộc dân chủ nhân dân, giữ vị trí quan trọng, quyết định trực tiếp đối với sự nghiệp giải phóng miền Nam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: KẾT LUẬN */}
        {activeTab === 3 && (
          <div className="space-y-6">
            <div className="flex items-center gap-2 border-l-4 border-amber-500 pl-3">
              <span className="text-xs uppercase font-extrabold tracking-wider text-amber-650">Đỉnh cao tư tưởng</span>
              <h5 className="text-sm font-bold text-stone-900">Kết luận: Sự hoàn thiện hệ thống lý luận</h5>
            </div>

            {/* Mindmap-style visual layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Hub block (Left) */}
              <div className="timeline-content-card lg:col-span-4 bg-white border border-stone-200 rounded-2xl p-6 shadow-sm flex flex-col justify-center space-y-3 lg:min-h-[240px]">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
                  <Building size={20} />
                </div>
                <h6 className="font-extrabold text-stone-900 text-sm">Hình thành hệ thống quan điểm toàn diện</h6>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Từ thực tiễn lãnh đạo cách mạng, tư tưởng Hồ Chí Minh tiếp tục được bổ sung, hoàn thiện thành một hệ thống lý luận thống nhất về cách mạng Việt Nam, bao gồm:
                </p>
              </div>

              {/* Spoke blocks (Right) */}
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: "📄", title: "Chủ nghĩa xã hội", text: "Tư tưởng về chủ nghĩa xã hội và con đường quá độ lên chủ nghĩa xã hội." },
                  { icon: "🏛️", title: "Nhà nước của dân", text: "Tư tưởng về Nhà nước của dân, do dân, vì dân." },
                  { icon: "👤", title: "Chiến lược con người", text: "Tư tưởng và chiến lược về con người." },
                  { icon: "🔑", title: "Đảng cầm quyền", text: "Tư tưởng về Đảng Cộng sản và xây dựng Đảng với tư cách là Đảng cầm quyền." }
                ].map((item, idx) => (
                  <div key={idx} className="timeline-content-card bg-stone-50 border border-stone-200 rounded-xl p-4 flex gap-3 hover:bg-white hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300">
                    <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                    <div className="space-y-1">
                      <div className="text-xs font-extrabold text-stone-900 uppercase tracking-wide">{item.title}</div>
                      <p className="text-xs text-stone-600 leading-normal">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* QUICK MEMORY QUIZ GAME WIDGET */}
      <div className="border-t border-stone-200/80 pt-6 mt-6 bg-[#faf9f6] -mx-4 md:-mx-8 px-4 md:px-8 pb-4 md:rounded-b-3xl">
        {!quizStarted ? (
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-3">
            <div className="space-y-1 text-center md:text-left">
              <div className="text-sm font-bold text-stone-900 flex items-center justify-center md:justify-start gap-2">
                <HelpCircle size={16} className="text-amber-600" />
                <span>Thử Thách Ghi Nhớ Bài Học Nhanh</span>
              </div>
              <p className="text-xs text-stone-550 font-medium">
                Hãy làm bài trắc nghiệm mini để củng cố ngay các kiến thức vừa tiếp thu của Thời kỳ 1945 - 1969!
              </p>
            </div>
            <button
              onClick={() => setQuizStarted(true)}
              className="px-5 py-2.5 rounded-xl bg-amber-600 text-white font-bold text-xs uppercase tracking-wider hover:bg-amber-700 shadow-md hover:shadow-amber-500/10 cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Bắt đầu thử thách 🚀
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Header game */}
            <div className="flex justify-between items-center text-xs text-stone-400 font-bold border-b border-stone-200 pb-2">
              <span>ĐÁNH GIÁ NHANH: CÂU HỎI {currentQuestion + 1} / {quizQuestions.length}</span>
              <span className="text-amber-600">ĐIỂM: {score}</span>
            </div>

            {!quizFinished ? (
              <div className="space-y-4 animate-in fade-in duration-300">
                {/* Question */}
                <div className="text-xs md:text-sm font-extrabold text-stone-850 leading-relaxed">
                  {quizQuestions[currentQuestion].q}
                </div>

                {/* Options */}
                <div className="grid grid-cols-1 gap-2.5">
                  {quizQuestions[currentQuestion].options.map((opt, oIdx) => {
                    const isCorrect = oIdx === quizQuestions[currentQuestion].answer;
                    const isSelected = selectedAnswer === oIdx;
                    const hasSelected = selectedAnswer !== null;

                    let btnClass = "bg-white border-stone-200 text-stone-700 hover:bg-stone-50 hover:border-stone-300";
                    if (hasSelected) {
                      if (isCorrect) {
                        btnClass = "bg-green-500/15 border-green-500 text-green-700 font-bold";
                      } else if (isSelected) {
                        btnClass = "bg-red-500/15 border-red-500 text-red-700";
                      } else {
                        btnClass = "bg-white border-stone-200 text-stone-400 opacity-60";
                      }
                    }

                    return (
                      <button
                        key={oIdx}
                        disabled={hasSelected}
                        onClick={() => handleSelectOption(oIdx)}
                        className={`w-full p-3.5 rounded-xl border text-left text-xs transition-all duration-200 flex items-center justify-between cursor-pointer ${btnClass}`}
                      >
                        <span className="leading-relaxed">{opt}</span>
                        {hasSelected && isCorrect && <Check size={14} className="text-green-600 flex-shrink-0" />}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation / Next button */}
                {selectedAnswer !== null && (
                  <div className="space-y-3 animate-in slide-in-from-bottom-2 duration-300">
                    <div className="p-3.5 rounded-xl bg-amber-500/5 border border-amber-500/20 text-[11px] text-amber-900 leading-relaxed">
                      <strong>Giải thích:</strong> {quizQuestions[currentQuestion].explanation}
                    </div>
                    <div className="flex justify-end">
                      <button
                        onClick={handleNextQuestion}
                        className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl shadow-sm cursor-pointer"
                      >
                        {currentQuestion < quizQuestions.length - 1 ? "Câu tiếp theo ▶" : "Hoàn tất thử thách 🏁"}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-6 space-y-4 animate-in zoom-in-95 duration-300">
                <span className="text-4xl">🏆</span>
                <div className="space-y-1">
                  <h5 className="font-bold text-stone-900 text-sm">Chúc mừng bạn đã hoàn thành!</h5>
                  <p className="text-xs text-stone-500 font-medium">
                    Bạn trả lời đúng <strong className="text-amber-650">{score}/{quizQuestions.length}</strong> câu hỏi.
                  </p>
                </div>
                
                <div className="flex justify-center gap-3 pt-2">
                  <button
                    onClick={resetQuiz}
                    className="flex items-center gap-1.5 px-4 py-2 border border-stone-300 rounded-xl text-stone-600 text-xs font-bold hover:bg-stone-50 cursor-pointer"
                  >
                    <RotateCcw size={12} />
                    <span>Làm lại</span>
                  </button>
                  <button
                    onClick={() => setQuizStarted(false)}
                    className="px-4 py-2 bg-stone-850 hover:bg-stone-900 text-white text-xs font-bold rounded-xl shadow-sm cursor-pointer"
                  >
                    Đóng trò chơi
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
