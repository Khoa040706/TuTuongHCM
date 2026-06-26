"use client";
import React, { useState, useRef } from "react";
import { User, Lightbulb, Compass, Link as LinkIcon, Sliders, Landmark, FileText, Shield, Users, Award, Sparkles, Flag, Heart, Check, RotateCcw, HelpCircle, Star, Quote } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function HcmWorldDevelopment() {
  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef(null);

  // Game states
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const tabs = [
    { label: "Khát vọng thời đại", desc: "Phản ánh ước vọng nhân loại" },
    { label: "Giải pháp giải phóng", desc: "Phương pháp & Công thức chiến thắng" },
    { label: "Vị thế & Cổ vũ thế giới", desc: "Tầm ảnh hưởng & Tường trích dẫn" }
  ];

  const quizQuestions = [
    {
      q: "Cống hiến nào sau đây được xem là đóng góp lớn nhất của Hồ Chí Minh đối với thời đại?",
      options: [
        "Xác định được con đường cứu nước đúng đắn, hướng đi và phương pháp cách mạng để thức tỉnh hàng trăm triệu người bị áp bức.",
        "Xây dựng thành công hệ thống lý luận học thuyết triết học mới hoàn toàn tách biệt.",
        "Đề xuất sách lược liên minh kinh tế thương mại toàn cầu mở rộng."
      ],
      answer: 0,
      explanation: "Đóng góp lớn nhất của Người là vạch ra con đường, hướng đi và phương pháp cách mạng đúng đắn, thức tỉnh hàng trăm triệu con người bị áp bức ở các thuộc địa lạc hậu đấu tranh tự giải phóng."
    },
    {
      q: "Ai đã khẳng định cuộc chiến đấu của Hồ Chí Minh là 'kim chỉ nam cho tất cả các dân tộc đang đấu tranh, cho thanh niên và các nhà lãnh đạo trên thế giới'?",
      options: [
        "Tổng thống nước Cộng hòa Angola",
        "Chủ tịch nước Cộng hòa Algeria",
        "Tổng thống nước Cộng hòa Tanzania"
      ],
      answer: 1,
      explanation: "Theo ý kiến của Chủ tịch nước Algeria, cuộc đời và cuộc chiến đấu của Hồ Chí Minh chính là kim chỉ nam dẫn đường cho các dân tộc đang đấu tranh, cho thanh niên và các nhà lãnh đạo trên thế giới."
    },
    {
      q: "Yếu tố nào sau đây KHÔNG thuộc 'Công thức chiến thắng' cho một nước thuộc địa nhỏ do Hồ Chí Minh đúc kết từ kinh nghiệm Việt Nam?",
      options: [
        "Có sự lãnh đạo của giai cấp vô sản và Đảng của nó.",
        "Duy trì chế độ quân chủ chuyên chế để ổn định nội bộ xã hội.",
        "Đoàn kết mọi tầng lớp nhân dân yêu nước trong một mặt trận thống nhất."
      ],
      answer: 1,
      explanation: "Công thức chiến thắng gồm 4 yếu tố: Sự lãnh đạo của giai cấp vô sản và Đảng; Dựa vào quần chúng nhân dân (nông dân); Đoàn kết trong Mặt trận thống nhất; và Sự đồng tình, ủng hộ của phong trào cách mạng thế giới."
    }
  ];

  useGSAP(() => {
    gsap.fromTo(".development-card", 
      { opacity: 0, y: 15, scale: 0.98 },
      { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: "power2.out", stagger: 0.08 }
    );
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
          <span className="p-2 rounded-xl bg-amber-500/10 text-amber-600">🌐</span>
          Tầm Ảnh Hưởng Thế Giới & Di Sản Thời Đại
        </h4>
        <p className="text-xs md:text-sm text-stone-500 font-medium max-w-3xl leading-relaxed">
          Tư tưởng Hồ Chí Minh vượt lên tầm vóc một quốc gia, trở thành tài sản chung của nhân loại tiến bộ, phản ánh khát vọng tự do và giải phóng con người trên toàn cầu.
        </p>
      </div>

      {/* Legacy Tabs Selector */}
      <div className="w-full">
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
                <span className="text-[10px] opacity-85 mt-0.5 hidden md:block font-medium truncate max-w-full">
                  {tab.desc}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Contents */}
      <div className="min-h-[300px]">
        
        {/* TAB 0: Khát vọng thời đại (a) */}
        {activeTab === 0 && (
          <div className="space-y-6">
            <div className="flex items-center gap-2 border-l-4 border-amber-500 pl-3">
              <span className="text-xs uppercase font-extrabold tracking-wider text-amber-650">Giá trị thời đại</span>
              <h5 className="text-sm font-bold text-stone-900">a) Phản ánh khát vọng thời đại</h5>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <User size={18} />, title: "Sản phẩm vĩ đại của thời đại", text: "Dựa trên khái quát của C. Mác rằng mỗi thời đại đều cần những con người vĩ đại, Hồ Chí Minh chính là nhân vật lịch sử vĩ đại. Người không chỉ là sản phẩm của riêng dân tộc hay giai cấp công nhân Việt Nam, mà còn là sản phẩm của cả thời đại và nhân loại tiến bộ." },
                { icon: <Lightbulb size={18} />, title: "Cống hiến lý luận xuất sắc", text: "Ngay từ những năm 20 của thế kỷ XX, Người đã có những đóng góp xuất sắc vào lý luận cách mạng giải phóng dân tộc thuộc địa dưới ánh sáng của chủ nghĩa Mác - Lênin." },
                { icon: <Compass size={18} />, title: "Con đường cách mạng rõ ràng", text: "Người vạch ra con đường cốt lõi: Giành độc lập dân tộc để tiến lên xây dựng chủ nghĩa xã hội." },
                { icon: <LinkIcon size={18} />, title: "Nhận thức Dân tộc & Giai cấp", text: "Người có cái nhìn sâu sắc về mối quan hệ chặt chẽ giữa vấn đề dân tộc và vấn đề giai cấp trong cách mạng thuộc địa theo con đường cách mạng vô sản." },
                { icon: <Sliders size={18} />, title: "Hệ thống luận điểm chính xác", text: "Người chỉ rõ tầm quan trọng đặc biệt của độc lập dân tộc khi đi lên chủ nghĩa xã hội; nhấn mạnh sự tự thân vận động (tính chủ động) của cuộc đấu tranh thuộc địa; và làm rõ mối quan hệ giữa cách mạng thuộc địa với cách mạng vô sản ở chính quốc." },
                { icon: <Landmark size={18} />, title: "Giá trị lý luận & thực tiễn quốc tế", text: "Những luận điểm này đã làm phong phú kho tàng lý luận của chủ nghĩa Mác - Lênin. Các vấn đề về chủ nghĩa xã hội, hòa bình, hợp tác, và tình hữu nghị giữa các dân tộc mà Người xác định không chỉ có giá trị lý luận to lớn mà còn đang trở thành hiện thực sinh động trong các vấn đề quốc tế ngày nay." }
              ].map((item, idx) => (
                <div key={idx} className="development-card bg-white hover:bg-stone-50/50 p-5 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <h6 className="font-extrabold text-stone-900 text-xs uppercase tracking-wider">{item.title}</h6>
                    <p className="text-xs text-stone-600 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 1: Tìm ra các giải pháp giải phóng (b) */}
        {activeTab === 1 && (
          <div className="space-y-6">
            <div className="flex items-center gap-2 border-l-4 border-amber-500 pl-3">
              <span className="text-xs uppercase font-extrabold tracking-wider text-amber-650">Giải pháp thời đại</span>
              <h5 className="text-sm font-bold text-stone-900">b) Tìm ra các giải pháp đấu tranh giải phóng loài người</h5>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              {/* Core points (Left 7 cols) */}
              <div className="lg:col-span-7 space-y-4 flex flex-col justify-between">
                {[
                  { icon: <FileText size={18} />, title: "Xác định con đường & phương pháp mới", text: "Đóng góp lớn nhất của Hồ Chí Minh đối với thời đại là xác định được con đường cứu nước đúng đắn, hướng đi và phương pháp cách mạng để thức tinh hàng trăm triệu người bị áp bức ở các nước thuộc địa lạc hậu.", color: "bg-blue-500/10 text-blue-600" },
                  { icon: <Shield size={18} />, title: "Giải quyết bài toán giải phóng thuộc địa", text: "Người đưa ra lời giải cho câu hỏi \"Làm cách nào để giải phóng các dân tộc thuộc địa\" bằng cách chỉ rõ chủ nghĩa đế quốc là kẻ thù lớn nhất, và để chiến thắng thì phải thực hiện \"đại đoàn kết\", \"đại hòa hợp\".", color: "bg-green-500/10 text-green-600" },
                  { icon: <Users size={18} />, title: "Gắn kết cách mạng dân tộc & thế giới", text: "Người nắm vững đặc điểm thời đại, đặt cách mạng giải phóng dân tộc ở thuộc địa vào phạm chù cách mạng vô sản. Người cũng bảo vệ, phát triển sáng tạo quan điểm của V.I.Lênin về khả năng to lớn và tác động mạnh mẽ của cách mạng thuộc địa đối với cách mạng vô sản ở chính quốc.", color: "bg-purple-500/10 text-purple-650" }
                ].map((item, idx) => (
                  <div key={idx} className="development-card bg-white p-4.5 rounded-2xl border border-stone-200 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${item.color}`}>
                      {item.icon}
                    </div>
                    <div className="space-y-1">
                      <h6 className="font-extrabold text-stone-900 text-xs uppercase tracking-wider">{item.title}</h6>
                      <p className="text-xs text-stone-600 leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Victory Formula (Right 5 cols) */}
              <div className="development-card lg:col-span-5 bg-gradient-to-br from-amber-500/5 to-orange-500/5 border border-amber-200 rounded-3xl p-6 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
                    <Award size={20} />
                  </div>
                  <h6 className="font-extrabold text-amber-800 text-xs uppercase tracking-wider">Công thức chiến thắng cho nước thuộc địa nhỏ</h6>
                  <p className="text-xs text-stone-700 leading-relaxed">
                    Từ kinh nghiệm thực tiễn của Việt Nam, Hồ Chí Minh khẳng định một nước thuộc địa nhỏ hoàn toàn có thể đánh bại chủ nghĩa đế quốc nếu hội tụ đủ các yếu tố:
                  </p>
                </div>

                <div className="space-y-2.5">
                  {[
                    { label: "✊", text: "Có sự lãnh đạo của giai cấp vô sản và Đảng của nó." },
                    { label: "👥", text: "Dựa vào quần chúng nhân dân rộng rãi (trước hết là nông dân)." },
                    { label: "💼", text: "Đoàn kết mọi tầng lớp nhân dân yêu nước trong một mặt trận thống nhất." },
                    { label: "🌐", text: "Được sự đồng tình, ủng hộ của phong trào cách mạng thế giới (trước hết là phe xã hội chủ nghĩa hùng mạnh)." }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-2.5 items-start p-2.5 rounded-xl bg-white border border-stone-200/50 shadow-inner-sm">
                      <span className="text-sm leading-none">{item.label}</span>
                      <p className="text-[11px] text-stone-650 leading-relaxed font-semibold">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sparkles bullet */}
            <div className="development-card bg-amber-500/5 border border-amber-200/30 rounded-2xl p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center flex-shrink-0">
                <Sparkles size={18} />
              </div>
              <div className="space-y-1">
                <div className="font-bold text-stone-900 text-sm">Giá trị nhân loại</div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Những tư tưởng này của Hồ Chí Minh là chân lý sáng ngời, đóng góp trực tiếp vào sự nghiệp giải phóng con người và kiến tạo sự phát triển của nhân loại.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Vị thế & Nguồn cổ vũ thế giới (c) */}
        {activeTab === 2 && (
          <div className="space-y-8">
            {/* Status section (International status) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* International Status */}
              <div className="development-card bg-[#fffbeb] border border-amber-200 rounded-2xl p-5 space-y-4">
                <div className="flex items-center gap-2 border-b border-amber-200/50 pb-2">
                  <Star size={16} className="text-amber-500 fill-amber-500" />
                  <span className="text-xs font-extrabold text-amber-800 uppercase tracking-widest">Vị thế quốc tế của Hồ Chí Minh</span>
                </div>
                <ul className="space-y-3.5 text-xs text-stone-750">
                  <li className="flex gap-2 items-start">
                    <span className="text-sm">🇻🇳</span>
                    <p className="leading-relaxed">
                      Người là vị anh hùng dân tộc vĩ đại và là người thầy thiên tài của cách mạng Việt Nam.
                    </p>
                  </li>
                  <li className="flex gap-2 items-start border-t border-stone-200/40 pt-3">
                    <span className="text-sm">🌍</span>
                    <p className="leading-relaxed">
                      Người là nhà mácxít - lêninnít lỗi lạc, nhà hoạt động xuất sắc của phong trào cộng sản, công nhân quốc tế và là chiến sĩ kiên cường của phong trào giải phóng dân tộc trong thế kỷ XX.
                    </p>
                  </li>
                </ul>
              </div>

              {/* National contribution */}
              <div className="development-card bg-red-500/5 border border-red-200 rounded-2xl p-5 space-y-4">
                <div className="flex items-center gap-2 border-b border-red-200/50 pb-2">
                  <Flag size={16} className="text-red-500" />
                  <span className="text-xs font-extrabold text-red-800 uppercase tracking-widest">Cống hiến đối với dân tộc Việt Nam</span>
                </div>
                <ul className="space-y-3 text-xs text-stone-750">
                  <li className="flex gap-2 items-start">
                    <span className="text-sm">✨</span>
                    <p className="leading-relaxed">
                      Người đã làm sống lại những giá trị tinh thần của dân tộc, xóa bỏ tủi nhục nô lệ đè nặng gần một thế kỷ.
                    </p>
                  </li>
                  <li className="flex gap-2 items-start border-t border-stone-200/40 pt-2.5">
                    <span className="text-sm">🚩</span>
                    <p className="leading-relaxed">
                      Dưới ngọn cờ của Người, Đảng đã lãnh đạo nhân dân xóa bỏ mọi hình thức áp bức, bóc lột và xây dựng chủ nghĩa xã hội trên phạm vi cả nước.
                    </p>
                  </li>
                  <li className="flex gap-2 items-start border-t border-stone-200/40 pt-2.5">
                    <span className="text-xs">👤</span>
                    <p className="leading-relaxed">
                      Ở Hồ Chí Minh, sự nghiệp cách mạng vĩ đại và phẩm chất đạo đức cao quý đã thống nhất làm một.
                    </p>
                  </li>
                </ul>
              </div>

            </div>

            {/* Testimonials Wall */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-l-4 border-amber-500 pl-3">
                <Quote size={16} className="text-amber-600" />
                <h5 className="font-extrabold text-stone-900 text-sm uppercase tracking-wider">
                  Nguồn cổ vũ bất diệt đối với nhân dân thế giới
                </h5>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { country: "Algeria 🇩🇿", author: "Chủ tịch Angiêri", text: "Cuộc chiến đấu của Người là kim chỉ nam cho tất cả các dân tộc đang đấu tranh, cho thanh niên và các nhà lãnh đạo trên thế giới." },
                  { country: "Angola 🇦🇴", author: "Điện văn từ Ănggôla", text: "Cuộc đời Người là nguồn cổ vũ đối với các chiến sĩ đấu tranh cho tự do." },
                  { country: "Tanzania 🇹🇿", author: "Tổng thống Tandania", text: "Tư tưởng chỉ đạo của Người mãi soi sáng cuộc đấu tranh cho đến khi bọn xâm lược và áp bức bị đánh bại hoàn toàn." },
                  { country: "USA & Uruguay 🇺🇸🇺🇾", author: "Đảng Cộng sản Mỹ & Urugoay", text: "Tên tuổi Người gắn bó với những hành động và ước mơ cao cả nhất của nhân dân, là ngôi sao trên bầu trời cách mạng chỉ đường bằng ánh sáng Mác - Lênin." },
                  { country: "Bạn bè năm châu 🌍", author: "Ý kiến chung", text: "Bạn bè năm châu khâm phục và coi Hồ Chí Minh là \"lãnh tụ của thế giới thứ ba\"." }
                ].map((item, idx) => (
                  <div key={idx} className="development-card bg-white p-5 rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                    <p className="text-xs text-stone-600 italic leading-relaxed mb-4">
                      &quot;{item.text}&quot;
                    </p>
                    <div className="flex items-center justify-between border-t border-stone-100 pt-3">
                      <span className="text-[10px] font-extrabold uppercase tracking-wide text-stone-400">
                        {item.author}
                      </span>
                      <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md">
                        {item.country}
                      </span>
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
                <span>Thử Thách Ghi Nhớ Bài Học Nhanh (Kết Thúc Chương I)</span>
              </div>
              <p className="text-xs text-stone-500 font-medium">
                Hãy làm bài trắc nghiệm mini này để củng cố toàn bộ các kiến thức lịch sử quan trọng của mục 2!
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
                  <h5 className="font-bold text-stone-900 text-sm">Chúc mừng bạn đã hoàn thành phần cuối Chương I!</h5>
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
