"use client";
import React, { useState } from "react";
import { 
  Calendar, Users, Award, BookOpen, ChevronRight, CheckCircle2, 
  Sparkles, Target, Star, Flag, Clock, ShieldCheck, Heart, 
  Layers, Lightbulb, Zap, ArrowRight, RotateCcw, Bookmark, ExternalLink,
  Globe, Shield, TrendingUp, Building2, UserCheck, Scale, Compass,
  Quote, Crown, Flame, Landmark, CheckSquare, Feather, FileText, UserPlus
} from "lucide-react";

export default function LsdConclusionPart3FullContent() {
  // Active lesson card index
  const [activeLessonIndex, setActiveLessonIndex] = useState(0);

  // Flashcard flip states
  const [flippedCards, setFlippedCards] = useState({});

  const toggleCardFlip = (id) => {
    setFlippedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // 5 Strategic Lessons on Party Leadership
  const lessons = [
    {
      id: "l1",
      title: "1. Nắm vững ngọn cờ Độc lập Dân tộc & Chủ nghĩa Xã hội",
      subtitle: "Ngọn cờ lý luận & đường lối cốt lõi",
      badge: "Bài học 1",
      quote: "Độc lập dân tộc gắn liền với chủ nghĩa xã hội là hai cánh chim.",
      quoteSource: "Tư tưởng Hồ Chí Minh & Cương lĩnh 1930",
      summary: "Độc lập dân tộc là điều kiện tiên quyết để thực hiện CNXH; CNXH là cơ sở bảo đảm vững chắc cho độc lập dân tộc. Cương lĩnh 1930 xác định: 'Làm cho nước Nam được hoàn toàn độc lập' và 'để đi tới xã hội cộng sản'.",
      details: [
        "Chủ nghĩa Mác-Lênin soi sáng sự nghiệp giải phóng giai cấp, giải phóng dân tộc, giải phóng con người.",
        "Trải qua 30 năm chiến tranh cách mạng (1945 - 1975) mới giành độc lập hoàn toàn, thống nhất đất nước.",
        "Công cuộc Đổi mới từ 1986 tiếp tục thực hiện mục tiêu: 'Dân giàu, nước mạnh, dân chủ, công bằng, văn minh'."
      ]
    },
    {
      id: "l2",
      title: "2. Sự nghiệp cách mạng là của Dân, do Dân, vì Dân",
      subtitle: "Quan điểm 'Dân là gốc' & Nghệ thuật Dân vận",
      badge: "Bài học 2",
      quote: "Có dân thì có tất cả. Dân vận khéo thì việc gì cũng thành công.",
      quoteSource: "Chủ tịch Hồ Chí Minh",
      summary: "Cách mạng là sự nghiệp của quần chúng nhân dân. Đảng không có lợi ích nào khác ngoài lợi ích của dân tộc, giai cấp và nhân dân. Phải phòng ngừa nguy cơ sai lầm đường lối, xa rời quần chúng, suy thoái tư tưởng.",
      details: [
        "Phương châm: 'Dân biết, dân bàn, dân làm, dân kiểm tra'.",
        "'Bao nhiêu lợi ích đều vì dân. Bao nhiêu quyền hạn đều của dân.'",
        "Thực tiễn chứng minh: Nhân dân làm nên thắng lợi Cách mạng Tháng Tám, 2 cuộc kháng chiến và Đổi mới."
      ]
    },
    {
      id: "l3",
      title: "3. Không ngừng củng cố, tăng cường Đại đoàn kết",
      subtitle: "Đoàn kết toàn Đảng, toàn Dân, Dân tộc & Quốc tế",
      badge: "Bài học 3",
      quote: "Người coi giữ gìn đoàn kết trong Đảng như giữ gìn con ngươi của mắt mình.",
      quoteSource: "Di chúc Chủ tịch Hồ Chí Minh",
      summary: "Đoàn kết là nguyên tắc của Đảng, là nguồn gốc tạo nên sức mạnh tổng hợp thắng lợi. Khẩu hiệu từ Tuyên ngôn 1848: 'Vô sản tất cả các nước đoàn kết lại!' ➔ Lenin bổ sung: 'Vô sản toàn thế giới và các dân tộc bị áp bức đoàn kết lại!'.",
      details: [
        "Đại đoàn kết dân tộc tập hợp trong Mặt trận Dân tộc thống nhất (Mặt trận Tổ quốc Việt Nam).",
        "Trong Đổi mới: Chiến lược đại đoàn kết lấy lợi ích chung làm điểm tương đồng, 'khép lại quá khứ, hướng tới tương lai'."
      ]
    },
    {
      id: "l4",
      title: "4. Kết hợp Sức mạnh Dân tộc với Sức mạnh Thời đại",
      subtitle: "Nội lực trong nước kết hợp Ngoại lực quốc tế",
      badge: "Bài học 4",
      quote: "Muốn người ta giúp cho, thì trước mình phải tự giúp lấy mình đã.",
      quoteSource: "Chủ tịch Hồ Chí Minh (Đường Kách mệnh 1927)",
      summary: "Phát huy cao nhất sức mạnh tự lực tự cường trong nước, đồng thời tận dụng thời cơ và tranh thủ sự ủng hộ của bạn bè quốc tế (Liên Xô, Trung Quốc, các nước XHCN và nhân loại tiến bộ).",
      details: [
        "Trong kháng chiến: Tự lực gánh sinh, dựa vào sức mình là chính.",
        "Trong Đổi mới: Thực hiện đường lối đối ngoại độc lập, tự chủ, đa dạng hóa, đa phương hóa -- 'Việt Nam là bạn, đối tác tin cậy và thành viên có trách nhiệm'."
      ]
    },
    {
      id: "l5",
      title: "5. Sự lãnh đạo đúng đắn của Đảng là nhân tố quyết định",
      subtitle: "Đảng cầm quyền, tự chỉnh đốn & Công tác cán bộ",
      badge: "Bài học 5",
      quote: "Cán bộ là cái gốc của mọi công việc. Đảng không có lý luận cũng giống như người không có trí khôn.",
      quoteSource: "Tư tưởng Hồ Chí Minh",
      summary: "Đảng là đội tiên phong của giai cấp vô sản. Nguyên tắc tổ chức cơ bản là 'Tập trung dân chủ'. Công tác cán bộ là khâu then chốt. Đảng phải thường xuyên tự đổi mới, tự chỉnh đốn để nâng cao năng lực cầm quyền.",
      details: [
        "Nguyễn Ái Quốc đề ra 23 điều tư cách người cách mạng (1927) & 12 điều tư cách Đảng chân chính (1947).",
        "Nghị quyết HNTW 4 khóa XII (10/2016) về tăng cường xây dựng, chỉnh đốn Đảng, ngăn chặn 'tự diễn biến', 'tự chuyển hóa'.",
        "Chỉ thị 05-CT/TW (2016) đẩy mạnh học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh.",
        "Nghị quyết HNTW 6 (2017) tinh gọn bộ máy & HNTW 7 (2018) xây dựng đội ngũ cán bộ cấp chiến lược."
      ]
    }
  ];

  // Resolutions & Literature Timeline (1848 - 2018)
  const resolutions = [
    { year: "1848", title: "Tuyên ngôn Đảng Cộng sản", desc: "Karl Marx & Friedrich Engels đề ra khẩu hiệu 'Vô sản tất cả các nước đoàn kết lại!'." },
    { year: "1927", title: "Tác phẩm Đường Kách mệnh", desc: "Nguyễn Ái Quốc đề ra 23 điều về tư cách người cách mạng." },
    { year: "2/1930", title: "Cương lĩnh chính trị đầu tiên", desc: "Xác định mục tiêu 'Hoàn toàn độc lập' và 'đi tới xã hội cộng sản'." },
    { year: "1947", title: "Tác phẩm Sửa đổi lối làm việc", desc: "Hồ Chí Minh đề ra 12 điều về tư cách của một Đảng chân chính cách mạng." },
    { year: "12/1986", title: "Đại hội VI Đổi mới", desc: "Khởi đầu công cuộc Đổi mới toàn diện đất nước." },
    { year: "2011", title: "Cương lĩnh bổ sung 2011", desc: "Xác định 8 đặc trưng xã hội XHCN và chỉ ra các nguy cơ cần phòng ngừa." },
    { year: "15/5/2016", title: "Chỉ thị 05-CT/TW Bộ Chính trị", desc: "Đẩy mạnh học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh." },
    { year: "30/10/2016", title: "Nghị quyết HNTW 4 khóa XII", desc: "Tăng cường xây dựng chỉnh đốn Đảng, ngăn chặn 'tự diễn biến', 'tự chuyển hóa'." },
    { year: "25/10/2017", title: "Nghị quyết HNTW 6 khóa XII", desc: "Sắp xếp tinh gọn bộ máy hệ thống chính trị hoạt động hiệu lực hiệu quả." },
    { year: "19/5/2018", title: "Nghị quyết HNTW 7 khóa XII", desc: "Tập trung xây dựng đội ngũ cán bộ các cấp, nhất là cấp chiến lược." }
  ];

  // Flashcards
  const flashcards = [
    {
      id: "fc1",
      question: "Hai cuộc giải phóng vĩ đại theo tư tưởng Hồ Chí Minh có mối quan hệ như thế nào?",
      answer: "Giải phóng dân tộc và giải phóng giai cấp là hai cuộc giải phóng vĩ đại, 'quan hệ mật thiết với nhau như hai cánh chim'."
    },
    {
      id: "fc2",
      question: "Mục tiêu tối cao được ghi trong Cương lĩnh chính trị đầu tiên (2/1930) là gì?",
      answer: "'Làm cho nước Nam được hoàn toàn độc lập' và 'để đi tới xã hội cộng sản'."
    },
    {
      id: "fc3",
      question: "Phương châm 4 chữ Dân trong công tác quần chúng là gì?",
      answer: "'Dân biết, dân bàn, dân làm, dân kiểm tra'."
    },
    {
      id: "fc4",
      question: "Câu nói kinh điển của Bác Hồ về nghệ thuật Dân vận?",
      answer: "'Dân vận khéo thì việc gì cũng thành công'."
    },
    {
      id: "fc5",
      question: "Số lượng điều Bác Hồ dạy về tư cách người cách mạng (1927) và Đảng chân chính (1947)?",
      answer: "23 điều tư cách người cách mạng (Đường Kách mệnh 1927) và 12 điều tư cách Đảng chân chính cách mạng (1947)."
    },
    {
      id: "fc6",
      question: "Câu nói kinh điển của Bác Hồ về đoàn kết trong Đảng?",
      answer: "'Người coi giữ gìn đoàn kết trong Đảng như giữ gìn con ngươi của mắt mình'."
    },
    {
      id: "fc7",
      question: "Khẩu hiệu nổi tiếng trong Tuyên ngôn Đảng Cộng sản (1848) của Marx & Engels?",
      answer: "'Vô sản tất cả các nước đoàn kết lại!'."
    },
    {
      id: "fc8",
      question: "Nguyên tắc tổ chức cơ bản nhất của Đảng Cộng sản là gì?",
      answer: "Nguyên tắc 'Tập trung dân chủ'."
    },
    {
      id: "fc9",
      question: "Vị trí của công tác cán bộ trong sự nghiệp cách mạng?",
      answer: "'Cán bộ là cái gốc của mọi công việc', là khâu then chốt trong công tác xây dựng Đảng."
    },
    {
      id: "fc10",
      question: "Nghị quyết HNTW 4 khóa XII (10/2016) tập trung vào vấn đề gì?",
      answer: "Tăng cường xây dựng, chỉnh đốn Đảng; ngăn chặn, đẩy lùi sự suy thoái và những biểu hiện 'tự diễn biến', 'tự chuyển hóa' trong nội bộ."
    },
    {
      id: "fc11",
      question: "Nghị quyết HNTW 7 khóa XII (5/2018) đề cập nội dung trọng tâm nào?",
      answer: "Tập trung xây dựng đội ngũ cán bộ các cấp, nhất là cấp chiến lược đủ phẩm chất, năng lực và uy tín."
    },
    {
      id: "fc12",
      question: "Chỉ thị 05-CT/TW (15/5/2016) của Bộ Chính trị có nội dung gì?",
      answer: "Đẩy mạnh học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh."
    },
    {
      id: "fc13",
      question: "Hội nghị Trung ương 6 khóa XII (10/2017) ban hành Nghị quyết về nội dung gì?",
      answer: "Một số vấn đề về tiếp tục đổi mới, sắp xếp tổ chức bộ máy của hệ thống chính trị tinh gọn, hoạt động hiệu lực, hiệu quả."
    },
    {
      id: "fc14",
      question: "Ba nguy cơ cần phòng ngừa xa rời quần chúng được nêu trong Cương lĩnh 2011?",
      answer: "Nguy cơ sai lầm về đường lối, nguy cơ xa rời quần chúng, nguy cơ suy thoái của cán bộ, đảng viên."
    },
    {
      id: "fc15",
      question: "Nhân tố hàng đầu quyết định mọi thắng lợi của cách mạng Việt Nam?",
      answer: "Sự lãnh đạo đúng đắn của Đảng Cộng sản Việt Nam."
    }
  ];

  return (
    <div className="w-full space-y-10 pb-16 font-sans text-slate-800">
      
      {/* 🌟 MASTER LEADERSHIP HERO BANNER */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-950 via-red-900 to-amber-950 p-8 md:p-12 text-white shadow-2xl border border-red-800/40">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs md:text-sm font-semibold backdrop-blur-md">
            <Crown className="w-4 h-4 text-amber-400" />
            <span>KẾT LUẬN | Mục III: Những Bài Học Lớn Về Sự Lãnh Đạo Của Đảng</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-100 to-white font-serif">
            5 Bài Học Lý Luận & Bài Học Chiến Lược Lãnh Đạo Của Đảng
          </h1>

          <p className="text-red-100/90 text-base md:text-lg leading-relaxed max-w-3xl">
            Đúc kết <strong className="text-amber-300 font-serif">5 Bài học chiến lược kim chỉ nam</strong> về ngọn cờ Độc lập dân tộc & CNXH, quan điểm "Dân là gốc", khối Đại đoàn kết toàn dân, kết hợp sức mạnh thời đại và công tác xây dựng chỉnh đốn Đảng.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-red-800/60">
            <div className="bg-red-950/60 backdrop-blur-sm p-3.5 rounded-xl border border-red-700/50">
              <div className="text-amber-400 text-xs font-semibold uppercase tracking-wider">Bài học Lãnh đạo</div>
              <div className="text-white font-bold text-base mt-1">5 Bài Học Lớn</div>
            </div>
            <div className="bg-red-950/60 backdrop-blur-sm p-3.5 rounded-xl border border-red-700/50">
              <div className="text-amber-400 text-xs font-semibold uppercase tracking-wider">Phương châm Dân vận</div>
              <div className="text-white font-bold text-base mt-1">4 Chữ Dân</div>
            </div>
            <div className="bg-red-950/60 backdrop-blur-sm p-3.5 rounded-xl border border-red-700/50">
              <div className="text-amber-400 text-xs font-semibold uppercase tracking-wider">Tư cách Cán bộ</div>
              <div className="text-white font-bold text-base mt-1">23 Điều & 12 Điều</div>
            </div>
            <div className="bg-red-950/60 backdrop-blur-sm p-3.5 rounded-xl border border-red-700/50">
              <div className="text-amber-400 text-xs font-semibold uppercase tracking-wider">Nghị quyết Khóa XII</div>
              <div className="text-white font-bold text-base mt-1">HNTW 4, 6, 7 XII</div>
            </div>
          </div>
        </div>
      </section>

      {/* 📌 KHỐI 1: INTERACTIVE LEADERSHIP CARDS (5 BÀI HỌC LỚN VỀ SỰ LÃNH ĐẠO CỦA ĐẢNG) */}
      <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/80 space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
          <div className="w-10 h-10 rounded-xl bg-red-700 text-white flex items-center justify-center font-bold">
            <Lightbulb className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold text-red-700 uppercase tracking-wider">Tổng kết lý luận</span>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-serif">1. 5 Bài Học Lớn Về Sự Lãnh Đạo Của Đảng</h2>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="grid md:grid-cols-5 gap-2 overflow-x-auto pb-2">
          {lessons.map((item, idx) => {
            const isActive = activeLessonIndex === idx;
            return (
              <button
                key={item.id}
                onClick={() => setActiveLessonIndex(idx)}
                className={`p-3 rounded-xl text-left transition-all border ${
                  isActive
                    ? "bg-red-900 text-white border-red-800 shadow-md ring-2 ring-amber-400"
                    : "bg-slate-50 hover:bg-red-50 text-slate-800 border-slate-200"
                }`}
              >
                <div className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${isActive ? "text-amber-300" : "text-red-700"}`}>
                  {item.badge}
                </div>
                <div className="font-bold font-serif text-xs leading-snug line-clamp-2">
                  {item.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Lesson Display */}
        {lessons[activeLessonIndex] && (
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div>
                <span className="text-xs font-bold text-red-700 uppercase tracking-wider">{lessons[activeLessonIndex].badge}</span>
                <h3 className="text-xl font-bold text-slate-900 font-serif">
                  {lessons[activeLessonIndex].title}
                </h3>
              </div>
              <span className="text-xs font-semibold px-3 py-1 bg-amber-100 text-amber-900 rounded-full">
                {lessons[activeLessonIndex].subtitle}
              </span>
            </div>

            {/* Trích dẫn kinh điển */}
            <div className="bg-amber-500/10 p-4 rounded-xl border border-amber-300/60 text-amber-950 space-y-1">
              <div className="text-[10px] font-bold text-amber-800 uppercase tracking-wider flex items-center gap-1">
                <Quote className="w-3.5 h-3.5 text-amber-600" />
                Trích dẫn Kinh điển ({lessons[activeLessonIndex].quoteSource})
              </div>
              <p className="font-serif italic text-sm md:text-base font-semibold text-amber-900">
                "{lessons[activeLessonIndex].quote}"
              </p>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed font-medium bg-white p-4 rounded-xl border border-slate-200">
              {lessons[activeLessonIndex].summary}
            </p>

            <div className="space-y-2 pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-red-800 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                Luận điểm chỉ đạo thực tiễn:
              </div>
              <div className="grid md:grid-cols-3 gap-2.5 text-xs md:text-sm text-slate-700">
                {lessons[activeLessonIndex].details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2 bg-white p-3 rounded-xl border border-slate-200">
                    <span className="text-red-700 font-bold shrink-0">•</span>
                    <span className="leading-relaxed">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* 📌 KHỐI 2: INTERACTIVE MNEMONIC WIDGET (DÂN LÀ GỐC & TƯ CÁCH CÁN BỘ) */}
      <section className="bg-gradient-to-br from-amber-500/10 via-amber-400/5 to-red-500/10 rounded-2xl p-6 md:p-8 border border-amber-300/60 shadow-sm space-y-6">
        <div className="flex items-center gap-3 border-b border-amber-200/60 pb-4">
          <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold shadow-md">
            <Heart className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-amber-800 uppercase tracking-wider">Nghệ thuật Dân vận & Đạo đức Cán bộ</div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-serif">2. Phương Châm Dân Vận & Tiêu Chuẩn Tư Cách Cán Bộ</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 4 chữ Dân & Dân vận khéo */}
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-amber-200 space-y-4">
            <div className="font-bold text-red-950 text-base flex items-center gap-2 border-b border-amber-100 pb-2">
              <Users className="w-5 h-5 text-red-600" />
              Phương Châm Dân Vận Của Bác Hồ
            </div>

            <div className="p-4 bg-red-900 text-white rounded-xl text-center space-y-1 shadow-md">
              <div className="text-xs text-amber-300 font-bold uppercase tracking-wider">Khẩu hiệu Vàng Hồ Chí Minh</div>
              <div className="font-serif font-bold text-base md:text-lg">"Dân vận khéo thì việc gì cũng thành công"</div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-center text-xs md:text-sm font-bold">
              <div className="p-3 bg-amber-50 text-amber-950 rounded-xl border border-amber-200">1. Dân biết</div>
              <div className="p-3 bg-amber-50 text-amber-950 rounded-xl border border-amber-200">2. Dân bàn</div>
              <div className="p-3 bg-amber-50 text-amber-950 rounded-xl border border-amber-200">3. Dân làm</div>
              <div className="p-3 bg-amber-50 text-amber-950 rounded-xl border border-amber-200">4. Dân kiểm tra</div>
            </div>
          </div>

          {/* Card 23 điều & 12 điều tư cách cán bộ */}
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-amber-200 space-y-4">
            <div className="font-bold text-slate-900 text-base flex items-center gap-2 border-b border-amber-100 pb-2">
              <UserCheck className="w-5 h-5 text-amber-600" />
              Tiêu Chuẩn Tư Cách Người Cách Mạng & Cán Bộ
            </div>

            <div className="space-y-3 text-xs md:text-sm">
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                <div className="font-bold text-red-800 flex items-center justify-between">
                  <span>23 Điều Tư cách Người Cách mạng</span>
                  <span className="text-[10px] px-2 py-0.5 bg-red-100 text-red-900 rounded font-bold">Năm 1927</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Trích trong tác phẩm <em>"Đường Kách mệnh"</em> (1927) của Nguyễn Ái Quốc -- chuẩn mực đạo đức cốt lõi đầu tiên của chiến sĩ cộng sản.
                </p>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                <div className="font-bold text-amber-800 flex items-center justify-between">
                  <span>12 Điều Tư cách Đảng Chân chính</span>
                  <span className="text-[10px] px-2 py-0.5 bg-amber-100 text-amber-900 rounded font-bold">Năm 1947</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Trích trong tác phẩm <em>"Sửa đổi lối làm việc"</em> (1947) của Hồ Chí Minh -- xây dựng Đảng trong sạch, vững mạnh.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 📌 KHỐI 3: RESOLUTION TIMELINE (CÁC VĂN KIỆN & NGHỊ QUYẾT TRUNG ƯƠNG 1848 - 2018 - GIAO DIỆN SÁNG SANG TRỌNG) */}
      <section className="bg-gradient-to-br from-amber-500/10 via-amber-400/5 to-red-500/10 text-slate-900 rounded-3xl p-6 md:p-8 shadow-xl space-y-6 border border-amber-300/80 backdrop-blur-md">
        <div className="flex items-center gap-3 border-b border-amber-200/80 pb-4">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-red-700 to-amber-600 text-white flex items-center justify-center font-bold shadow-md shadow-red-700/20">
            <FileText className="w-6 h-6 text-yellow-200" />
          </div>
          <div>
            <span className="text-xs font-black text-red-700 uppercase tracking-widest">Tiến trình lý luận</span>
            <h2 className="text-xl md:text-2xl font-bold font-serif text-slate-900">3. Dòng Thời Gian Văn Kiện & Các Nghị Quyết Trung Ương Khóa XII</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-3.5 text-xs md:text-sm">
          {resolutions.map((res, rIdx) => (
            <div key={rIdx} className="bg-white/95 backdrop-blur-sm p-4.5 rounded-2xl border border-amber-200/90 shadow-sm hover:border-amber-400 hover:shadow-md transition-all space-y-2 flex flex-col justify-between">
              <div className="space-y-1.5">
                <span className="px-2.5 py-0.5 bg-red-100 text-red-800 font-mono font-black text-xs rounded-md border border-red-200 inline-block">
                  {res.year}
                </span>
                <h4 className="font-bold text-slate-900 text-xs md:text-sm font-serif leading-snug pt-1">
                  {res.title}
                </h4>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  {res.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 📌 KHỐI 4: THẺ FLASHCARD TỰ ÔN TẬP TỔNG HỢP TOÀN MÔN (15 THẺ LẬT) */}
      <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/80 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-900 flex items-center justify-center font-bold">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-serif">4. Thẻ Ghi Nhớ Lịch Sử Đảng Ôn Thi Tổng Kết (Flashcards)</h2>
              <p className="text-xs md:text-sm text-slate-500">Nhấp vào từng thẻ để lật xem đáp án ghi nhớ nhanh</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
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
