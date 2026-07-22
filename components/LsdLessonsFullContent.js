"use client";
import React, { useState } from "react";
import { 
  Calendar, Users, Award, BookOpen, ChevronRight, CheckCircle2, 
  Sparkles, Target, Star, Flag, Clock, ShieldCheck, Heart, 
  Layers, Lightbulb, Zap, ArrowRight, RotateCcw, Bookmark, ExternalLink,
  AlertTriangle, ShieldAlert, Scale, HelpCircle, Eye, UserCheck, Flame
} from "lucide-react";

export default function LsdLessonsFullContent() {
  // Flashcard flip states
  const [flippedCards, setFlippedCards] = useState({});

  // Active view tab for 5 lessons vs 4 risks
  const [activeTab, setActiveTab] = useState("lessons");

  const toggleCardFlip = (id) => {
    setFlippedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // 5 Lessons learned from Doi Moi
  const lessons = [
    {
      num: "01",
      title: "Chủ động sáng tạo & Kiên định mục tiêu",
      subtitle: "Kiên định Độc lập dân tộc & CNXH",
      desc: "Trong quá trình đổi mới phải chủ động, không ngừng sáng tạo trên cơ sở kiên định mục tiêu độc lập dân tộc và CNXH, vận dụng sáng tạo chủ nghĩa Mác-Lênin, tư tưởng Hồ Chí Minh. Đổi mới không phải là bỏ mục tiêu CNXH hay xa rời chủ nghĩa Mác-Lênin, mà là nhận thức đúng và xây dựng hiệu quả hơn.",
      highlights: ["Không bỏ mục tiêu CNXH", "Vận dụng sáng tạo Mác-Lênin, Tư tưởng HCM", "Kế thừa truyền thống dân tộc"]
    },
    {
      num: "02",
      title: "Đổi mới vì nhân dân -- 'Dân là gốc'",
      subtitle: "Phát huy quyền làm chủ & Đại đoàn kết",
      desc: "Đổi mới phải toàn diện vì lợi ích của nhân dân, dựa vào nhân dân, phát huy vai trò làm chủ và mọi nguồn lực của nhân dân; phát huy sức mạnh đại đoàn kết toàn dân tộc. Ý kiến, nguyện vọng của nhân dân là nguồn gốc hình thành đường lối đổi mới của Đảng.",
      highlights: ["Dân là gốc", "Ý nguyện nhân dân là nguồn gốc đường lối", "Dân chủ XHCN là bản chất chế độ"]
    },
    {
      num: "03",
      title: "Đồng bộ, có bước đi phù hợp & Nhìn thẳng sự thật",
      subtitle: "Tôn trọng quy luật khách quan",
      desc: "Đổi mới phải toàn diện, đồng bộ, có bước đi phù hợp; tôn trọng quy luật khách quan, bám sát thực tiễn, coi trọng tổng kết thực tiễn và nghiên cứu lý luận. Phải nhìn thẳng vào sự thật, đánh giá đúng thực trạng, khắc phục nóng vội chủ quan cũng như bảo thủ trì trệ.",
      highlights: ["Nhìn thẳng vào sự thật", "Khắc phục nóng vội & bảo thủ trì trệ", "Xuất phát từ thực tiễn"]
    },
    {
      num: "04",
      title: "Đặt Lợi ích quốc gia - dân tộc lên trên hết",
      subtitle: "Sức mạnh dân tộc kết hợp sức mạnh thời đại",
      desc: "Phải đặt lợi ích quốc gia - dân tộc lên trên hết; kiên định độc lập, tự chủ, đồng thời chủ động, tích cực hội nhập quốc tế trên cơ sở bình đẳng, cùng có lợi; kết hợp sức mạnh dân tộc với sức mạnh thời đại để xây dựng và bảo vệ vững chắc Tổ quốc.",
      highlights: ["Lợi ích quốc gia - dân tộc trên hết", "Chủ động hội nhập quốc tế", "Giữ vững độc lập tự chủ"]
    },
    {
      num: "05",
      title: "Thường xuyên tự đổi mới, tự chỉnh đốn Đảng",
      subtitle: "Cán bộ là khâu then chốt",
      desc: "Phải thường xuyên tự đổi mới, tự chỉnh đốn, nâng cao năng lực lãnh đạo và sức chiến đấu của Đảng; xây dựng đội ngũ cán bộ (nhất là cấp chiến lược) đủ năng lực, phẩm chất, ngang tầm nhiệm vụ. Cán bộ là nhân tố quyết định sự thành bại của cách mạng, là khâu then chốt.",
      highlights: ["Cán bộ là khâu then chốt", "Tự đổi mới, tự chỉnh đốn Đảng", "Mối quan hệ máu thịt với Nhân dân"]
    }
  ];

  // Keynotes Flashcards
  const flashcards = [
    {
      id: "fc1",
      question: "Hạn chế lớn nhất về mục tiêu công nghiệp hóa đến năm 2020 là gì?",
      answer: "Việc tạo nền tảng để cơ bản trở thành nước công nghiệp theo hướng hiện đại 'không đạt mục tiêu đề ra'."
    },
    {
      id: "fc2",
      question: "Bốn nguy cơ được Hội nghị đại biểu toàn quốc giữa nhiệm kỳ khóa VII (1994) nêu lên hiện nay thế nào?",
      answer: "Bốn nguy cơ vẫn tồn tại, có mặt diễn biến phức tạp: 'diễn biến hòa bình', biểu hiện 'tự diễn biến', 'tự chuyển hóa' trong nội bộ."
    },
    {
      id: "fc3",
      question: "Nguyên nhân chủ quan lớn nhất của những hạn chế trong công công cuộc Đổi mới?",
      answer: "Công tác nghiên cứu lý luận chưa quan tâm đúng mức, chưa giải quyết tốt các 'mối quan hệ lớn', thiếu cơ chế kiểm soát quyền lực và quy định rõ trách nhiệm người đứng đầu."
    },
    {
      id: "fc4",
      question: "Bài học thứ nhất của Đảng nhấn mạnh nguyên tắc gì về mục tiêu CNXH?",
      answer: "Đổi mới không phải là bỏ mục tiêu CNXH hay xa rời chủ nghĩa Mác-Lênin, tư tưởng Hồ Chí Minh, mà là nhận thức đúng và làm tốt hơn."
    },
    {
      id: "fc5",
      question: "Nguồn gốc hình thành đường lối Đổi mới của Đảng xuất phát từ đâu?",
      answer: "Xuất phát từ thực tiễn và ý kiến, nguyện vọng, sáng kiến của quần chúng nhân dân ('Dân là gốc')."
    },
    {
      id: "fc6",
      question: "Bài học thứ tư nhấn mạnh việc đặt yếu tố nào lên trên hết trong hội nhập?",
      answer: "Phải đặt 'lợi ích quốc gia - dân tộc lên trên hết', kết hợp sức mạnh dân tộc với sức mạnh thời đại."
    },
    {
      id: "fc7",
      question: "Khâu then chốt trong công tác xây dựng Đảng được Bài học thứ 5 xác định là gì?",
      answer: "Công tác cán bộ: 'Cán bộ là nhân tố quyết định sự thành bại của cách mạng, là khâu then chốt trong công tác xây dựng Đảng'."
    },
    {
      id: "fc8",
      question: "Mối quan hệ nào giữa Đảng và Nhân dân có 'ý nghĩa sống còn' đối với cách mạng?",
      answer: "Mối quan hệ máu thịt giữa Đảng với Nhân dân."
    },
    {
      id: "fc9",
      question: "Nhận thức mới về nội dung 'Bỏ qua chế độ tư bản' bao gồm điều gì?",
      answer: "Bỏ qua việc xác lập vị trí thống trị của quan hệ sản xuất và kiến trúc thượng tầng TBCN, nhưng thừa hưởng thành tựu nhân loại dưới TBCN (đặc biệt Cách mạng 4.0)."
    },
    {
      id: "fc10",
      question: "Hội nghị Trung ương 4 khóa XII (10/2016) khẳng định thành công Đổi mới mang lại điều gì?",
      answer: "Khẳng định Đổi mới đã 'Tạo thế và lực mới của đất nước' -- cơ sở vững chắc để Việt Nam phát triển nhanh và bền vững."
    }
  ];

  return (
    <div className="w-full space-y-10 pb-16 font-sans text-slate-800">
      
      {/* 🌟 HERO BANNER: TỔNG KẾT ĐỔI MỚI */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-950 via-red-900 to-amber-950 p-8 md:p-12 text-white shadow-2xl border border-red-800/40">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-80 h-80 bg-red-600/20 rounded-full blur-2xl pointer-events-none"></div>
        
        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs md:text-sm font-semibold backdrop-blur-md">
            <Flag className="w-4 h-4 text-amber-400" />
            <span>Mục II.3.b & c | Lịch sử Đảng Cộng sản Việt Nam (1986 - 2018)</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-100 to-white font-serif">
            Hạn Chế, Nguyên Nhân & 5 Bài Học Kinh Nghiệm Của Công Cuộc Đổi Mới
          </h1>

          <p className="text-red-100/90 text-base md:text-lg leading-relaxed max-w-3xl">
            Nhìn thẳng vào sự thật, chỉ rõ những hạn chế yếu kém và đúc kết <strong className="text-amber-300 font-semibold font-serif">5 Bài học kinh nghiệm có giá trị trường tồn</strong> giúp Đảng giữ vững bản lĩnh, nâng cao năng lực lãnh đạo và đưa đất nước phát triển nhanh, bền vững.
          </p>

          {/* Quick Stats Banner */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4 border-t border-red-800/60">
            <div className="bg-red-950/60 backdrop-blur-sm p-3.5 rounded-xl border border-red-700/50">
              <div className="text-amber-400 text-xs font-semibold uppercase tracking-wider">Bài học cốt lõi</div>
              <div className="text-white font-bold text-base mt-1">5 Bài học Chiến lược</div>
            </div>
            <div className="bg-red-950/60 backdrop-blur-sm p-3.5 rounded-xl border border-red-700/50">
              <div className="text-amber-400 text-xs font-semibold uppercase tracking-wider">Nguyên tắc Hàng đầu</div>
              <div className="text-white font-bold text-base mt-1">Dân là gốc</div>
            </div>
            <div className="bg-red-950/60 backdrop-blur-sm p-3.5 rounded-xl border border-red-700/50">
              <div className="text-amber-400 text-xs font-semibold uppercase tracking-wider">Khâu then chốt</div>
              <div className="text-white font-bold text-base mt-1">Công tác Cán bộ</div>
            </div>
          </div>
        </div>
      </section>

      {/* 📌 KHỐI 1: WARNING ALERT BANNER (MỤC 3.B: HẠN CHẾ & 4 NGUY CƠ) */}
      <section className="bg-gradient-to-br from-red-950 via-slate-900 to-amber-950 rounded-2xl p-6 md:p-8 border border-red-800 shadow-xl text-white space-y-6">
        <div className="flex items-center gap-3 border-b border-red-800/80 pb-4">
          <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center font-bold shadow-md">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold text-red-400 uppercase tracking-wider">Mục II.3.b</span>
            <h2 className="text-xl md:text-2xl font-bold font-serif text-white">Một Số Hạn Chế, Yếu Kém & 4 Nguy Cơ Tồn Tại</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Card Hạn chế chính */}
          <div className="bg-slate-900/80 p-5 rounded-xl border border-red-900/60 space-y-3">
            <h3 className="font-bold text-red-400 flex items-center gap-2 text-base">
              <AlertTriangle className="w-4 h-4 text-red-500" />
              Các Mặt Hạn Chế Nổi Bật
            </h3>
            <ul className="space-y-2 text-xs md:text-sm text-slate-300 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold">•</span>
                <span>Kinh tế phát triển <strong>"chưa bền vững"</strong>, chất lượng, hiệu quả, sức cạnh tranh còn thấp.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold">•</span>
                <span>Mục tiêu tạo nền tảng trở thành nước công nghiệp hiện đại vào năm 2020 <strong>"không đạt mục tiêu đề ra"</strong>.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold">•</span>
                <span>Một số vấn đề xã hội, quản lý xã hội còn nhiều tiêu cực; một bộ phận nhân dân chưa thụ hưởng đầy đủ thành quả đổi mới.</span>
              </li>
            </ul>
          </div>

          {/* Card 4 Nguy cơ (HNTW giữa khóa VII 1994) */}
          <div className="bg-slate-900/80 p-5 rounded-xl border border-red-900/60 space-y-3">
            <h3 className="font-bold text-amber-400 flex items-center gap-2 text-base">
              <Flame className="w-4 h-4 text-amber-500" />
              Bốn Nguy Cơ Vẫn Tồn Tại (HNTW 1994)
            </h3>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
              Các nguy cơ do Hội nghị đại biểu toàn quốc giữa nhiệm kỳ khóa VII (1994) chỉ ra <strong>vẫn tồn tại, có mặt diễn biến phức tạp</strong>:
            </p>
            <div className="p-3 bg-red-950/60 rounded-lg text-xs md:text-sm text-red-200 border border-red-800/80 space-y-1">
              <div>1. Nguy cơ tụt hậu xa hơn về kinh tế.</div>
              <div>2. Nguy cơ chệch hướng XHCN.</div>
              <div>3. Nguy cơ tham nhũng và tệ quan liêu.</div>
              <div>4. Nguy cơ <strong>"diễn biến hòa bình"</strong>, <strong>"tự diễn biến"</strong>, <strong>"tự chuyển hóa"</strong> trong nội bộ.</div>
            </div>
          </div>
        </div>

        {/* Nguyên nhân chủ quan */}
        <div className="p-4 bg-slate-800/90 rounded-xl border border-slate-700 text-xs md:text-sm text-slate-300 space-y-2">
          <div className="font-bold text-amber-300 uppercase tracking-wider text-xs">Nguyên nhân Chủ quan (Là chủ yếu):</div>
          <p className="leading-relaxed">
            Công tác nghiên cứu lý luận chưa theo kịp thực tiễn; chưa giải quyết tốt các <strong>"mối quan hệ lớn"</strong>; công tác chỉ đạo thực hiện thiếu quy định rõ <strong>trách nhiệm người đứng đầu</strong>; thiếu cơ chế kiểm soát quyền lực; suy thoái tư tưởng chính trị, đạo đức, lối sống trong một bộ phận cán bộ, đảng viên chưa được ngăn chặn triệt để.
          </p>
        </div>
      </section>

      {/* 📌 KHỐI 2: INTERACTIVE GRID CARDS (5 BÀI HỌC KINH NGHIỆM CỦA ĐẢNG) */}
      <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/80 space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
          <div className="w-10 h-10 rounded-xl bg-red-700 text-white flex items-center justify-center font-bold">
            <Lightbulb className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold text-red-700 uppercase tracking-wider">Mục II.3.c</span>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-serif">5 Bài Học Kinh Nghiệm Lớn Của Đảng Trong Đổi Mới</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((item, idx) => (
            <div key={idx} className="bg-slate-50 hover:bg-red-50/40 p-6 rounded-2xl border border-slate-200 hover:border-red-300 transition-all group flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-slate-200/60 pb-2">
                  <span className="text-3xl font-black text-red-700 font-serif group-hover:scale-110 transition-transform">
                    {item.num}
                  </span>
                  <span className="px-2.5 py-1 bg-red-100 text-red-800 text-[10px] font-bold rounded-full uppercase">
                    Bài học chiến lược
                  </span>
                </div>

                <h3 className="font-bold text-slate-900 text-lg font-serif group-hover:text-red-950">
                  {item.title}
                </h3>

                <div className="text-xs font-semibold text-amber-700">
                  {item.subtitle}
                </div>

                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Highlights tags */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-200/60">
                {item.highlights.map((hl, hIdx) => (
                  <span key={hIdx} className="px-2 py-0.5 bg-slate-200/70 text-slate-700 text-[10px] font-semibold rounded-md">
                    ✓ {hl}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 📌 KHỐI 3: HERO CALLOUT BOX -- GHI NHỚ NHẬN THỨC MỚI VỀ CNXH & HNTW 4 KHÓA XII */}
      <section className="bg-gradient-to-br from-amber-500/10 via-amber-400/5 to-red-500/10 rounded-2xl p-6 md:p-8 border border-amber-300/60 shadow-sm space-y-6">
        <div className="flex items-center gap-3 border-b border-amber-200/60 pb-4">
          <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold shadow-md">
            <Star className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-amber-800 uppercase tracking-wider">Ghi Nhớ Cốt Lõi</div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-serif">Nhận Thức Mới Về CNXH & "Tạo Thế Và Lực Mới"</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 text-xs md:text-sm">
          <div className="bg-white/90 backdrop-blur-sm p-5 rounded-xl border border-amber-200 space-y-3">
            <h4 className="font-bold text-amber-900 text-base flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-amber-600" />
              Nội dung "Bỏ qua chế độ Tư bản" & Cách mạng 4.0
            </h4>
            <p className="text-slate-700 leading-relaxed">
              Bỏ qua việc thiết lập kiến trúc thượng tầng và quan hệ sản xuất TBCN, nhưng <strong>tiếp thu, thừa hưởng các thành tựu nhân loại đạt được dưới TBCN</strong>, đặc biệt là kinh nghiệm tổ chức, quản lý và ứng dụng <strong className="text-amber-900">Cách mạng công nghiệp lần thứ tư (4.0)</strong>.
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm p-5 rounded-xl border border-amber-200 space-y-3">
            <h4 className="font-bold text-red-950 text-base flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-red-600" />
              Kết luận HNTW 4 khóa XII (10/2016)
            </h4>
            <p className="text-slate-700 leading-relaxed">
              Hội nghị Trung ương 4 khóa XII (10/2016) khẳng định thành công của công cuộc Đổi mới đã <strong className="text-red-900">"Tạo thế và lực mới của đất nước"</strong> -- là cơ sở vững chắc để Việt Nam phát triển nhanh, bền vững, xứng đáng với lịch sử anh hùng, vẻ vang của Đảng và dân tộc.
            </p>
          </div>
        </div>
      </section>

      {/* 📌 KHỐI 4: THẺ FLASHCARD TỰ ÔN TẬP TỪ KHÓA BÀI HỌC KINH NGHIỆM */}
      <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/80 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-900 flex items-center justify-center font-bold">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-serif">4. Thẻ Ghi Nhớ Từ Khóa Hạn Chế & Kinh Nghiệm (Flashcards)</h2>
              <p className="text-xs md:text-sm text-slate-500">Nhấp vào từng thẻ để lật xem đáp án ghi nhớ nhanh</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {flashcards.map((fc) => {
            const isFlipped = !!flippedCards[fc.id];
            return (
              <div
                key={fc.id}
                onClick={() => toggleCardFlip(fc.id)}
                className={`min-h-[175px] p-4.5 rounded-2xl cursor-pointer transition-all duration-300 flex flex-col justify-between border shadow-sm ${
                  isFlipped
                    ? "bg-red-900 text-white border-red-800 shadow-md"
                    : "bg-gradient-to-br from-slate-50 to-amber-50/50 text-slate-900 border-slate-200 hover:border-amber-400 hover:shadow-md"
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider opacity-80">
                    <span>{isFlipped ? "💡 Đáp án Ghi nhớ" : "❓ Câu hỏi Ôn thi"}</span>
                    <RotateCcw className="w-3.5 h-3.5" />
                  </div>

                  <p className="text-xs font-semibold leading-relaxed">
                    {isFlipped ? fc.answer : fc.question}
                  </p>
                </div>

                <div className="text-[10px] font-medium text-right opacity-70 pt-2">
                  {isFlipped ? "Nhấn để xem câu hỏi" : "Nhấn để lật xem đáp án"}
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
