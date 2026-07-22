"use client";
import React, { useState } from "react";
import { 
  Calendar, Users, Award, BookOpen, ChevronRight, CheckCircle2, 
  Sparkles, Target, Star, Flag, Clock, ShieldCheck, Heart, 
  Layers, Lightbulb, Zap, ArrowRight, RotateCcw, Bookmark, ExternalLink,
  Globe, Shield, TrendingUp, Building2, UserCheck, Scale, Compass,
  Quote, Crown, Flame, Landmark, CheckSquare, Grid
} from "lucide-react";

export default function LsdConclusionPart2FullContent() {
  // Active victory card index
  const [activeVictoryIndex, setActiveVictoryIndex] = useState(0);

  // Flashcard flip states
  const [flippedCards, setFlippedCards] = useState({});

  const toggleCardFlip = (id) => {
    setFlippedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // 3 Great Victories
  const victories = [
    {
      id: "v1",
      title: "1. Thắng lợi của Cách mạng Tháng Tám năm 1945",
      subtitle: "Thành lập nước Việt Nam Dân chủ Cộng hòa",
      period: "Năm 1945",
      badge: "Cách mạng Tháng 8",
      summary: "Đánh đổ chế độ thuộc địa thực dân Pháp và phát xít Nhật gần 1 thế kỷ, xóa bỏ chế độ phong kiến hàng ngàn năm, giành độc lập tự do và lập nên nước Việt Nam Dân chủ Cộng hòa.",
      highlights: [
        "Kết quả tổng hợp 15 năm chuẩn bị (1930 - 1945): Xô viết Nghệ-Tĩnh, Dân chủ 1936-39, Giải phóng dân tộc 1939-45.",
        "Lời kêu gọi của Chủ tịch Hồ Chí Minh: 'Đem sức ta mà tự giải phóng cho ta'.",
        "Đảng chủ động 'Chớp đúng thời cơ' và 'Đẩy lùi nguy cơ' bảo vệ độc lập non trẻ.",
        "Lần đầu tiên trong lịch sử cách mạng, một Đảng mới 15 tuổi đã lãnh đạo cách mạng thành công toàn quốc."
      ]
    },
    {
      id: "v2",
      title: "2. Thắng lợi của các cuộc Kháng chiến oanh liệt",
      subtitle: "Giải phóng dân tộc & Bảo vệ Tổ quốc (1945 - 1975)",
      period: "1945 - 1975",
      badge: "Kháng chiến Pháp - Mỹ",
      summary: "Đánh thắng thực dân Pháp và đế quốc Mỹ xâm lược, hoàn thành cách mạng dân tộc dân chủ nhân dân, thực hiện thống nhất Tổ quốc, đưa cả nước bước vào thời kỳ quá độ lên CNXH.",
      highlights: [
        "Đường lối 'Kháng chiến toàn dân, toàn diện, lâu dài, dựa vào sức mình là chính'.",
        "Chiến thắng lịch sử Điện Biên Phủ (7/5/1954) & Hiệp định Geneve (21/7/1954).",
        "Lãnh đạo đồng thời 2 chiến lược cách mạng song song (1954 - 1975).",
        "8 Phương pháp cách mạng sáng tạo: Đánh địch trên 3 vùng chiến lược, 3 mũi tiến công (quân sự, chính trị, binh vận), kết hợp 3 thứ quân."
      ]
    },
    {
      id: "v3",
      title: "3. Thắng lợi của Sự nghiệp Đổi mới",
      subtitle: "Từng bước đưa đất nước quá độ lên CNXH (1986 - nay)",
      period: "1986 - 2016+",
      badge: "Sự nghiệp Đổi mới",
      summary: "Đột phá tư duy lý luận từ Đại hội VI (12/1986), chuyển sang kinh tế thị trường định hướng XHCN, đưa đất nước ra khỏi khủng hoảng (1996) và trở thành nước thu nhập trung bình (2008).",
      highlights: [
        "Chuyển sang nền kinh tế nhiều thành phần, vận hành theo cơ chế thị trường định hướng XHCN.",
        "Ra khỏi nước nghèo, kém phát triển; đời sống nhân dân được cải thiện vượt bậc.",
        "Ngoại giao mở rộng: 188/193 nước LHQ, 16 Đối tác chiến lược.",
        "Đại hội XII khẳng định: 'Những thành tựu đó tạo tiền đề, nền tảng quan trọng... con đường lên CNXH là phù hợp thực tiễn'."
      ]
    }
  ];

  // 9 Major Relationships (TBT Nguyen Phu Trong)
  const relationships = [
    { num: "01", title: "Đổi mới ↔ Ổn định ↔ Phát triển", desc: "Giữ vững ổn định chính trị để đổi mới và phát triển; lấy phát triển làm mục tiêu và động lực." },
    { num: "02", title: "Đổi mới Kinh tế ↔ Đổi mới Chính trị", desc: "Trọng tâm là đổi mới kinh tế, đồng thời từng bước đổi mới chính trị phù hợp." },
    { num: "03", title: "Quy luật Thị trường ↔ Định hướng XHCN", desc: "Tuân thủ quy luật thị trường đồng thời bảo đảm định hướng xã hội chủ nghĩa." },
    { num: "04", title: "Lực lượng Sản xuất ↔ Quan hệ Sản xuất", desc: "Phát triển lực lượng sản xuất đi đôi với xây dựng, hoàn thiện quan hệ sản xuất phù hợp." },
    { num: "05", title: "Nhà nước ↔ Thị trường", desc: "Xác định rõ vai trò quản lý của Nhà nước và vai trò điều tiết của thị trường." },
    { num: "06", title: "Tăng trưởng Kinh tế ↔ Văn hóa & Công bằng XH", desc: "Tăng trưởng kinh tế đi đôi với phát triển văn hóa, thực hiện tiến bộ và công bằng xã hội." },
    { num: "07", title: "Xây dựng CNXH ↔ Bảo vệ Tổ quốc XHCN", desc: "Hai nhiệm vụ chiến lược gắn kết chặt chẽ trong sự nghiệp cách mạng." },
    { num: "08", title: "Độc lập, Tự chủ ↔ Hội nhập Quốc tế", desc: "Giữ vững độc lập tự chủ trên cơ sở chủ động, tích cực hội nhập quốc tế toàn diện." },
    { num: "09", title: "Đảng lãnh đạo ↔ Nhà nước quản lý ↔ Nhân dân làm chủ", desc: "Cơ chế vận hành tổng quát của toàn bộ hệ thống chính trị Việt Nam." }
  ];

  // Flashcards
  const flashcards = [
    {
      id: "fc1",
      question: "Ba thắng lợi vĩ đại nhất của cách mạng Việt Nam dưới sự lãnh đạo của Đảng là gì?",
      answer: "(1) Cách mạng Tháng Tám 1945; (2) Các cuộc kháng chiến giải phóng dân tộc bảo vệ Tổ quốc; (3) Sự nghiệp Đổi mới đất nước."
    },
    {
      id: "fc2",
      question: "Nhận định kinh điển của Chủ tịch Hồ Chí Minh về Đảng 15 tuổi là gì?",
      answer: "'Chẳng những giai cấp lao động và nhân dân Việt Nam ta có thể tự hào... một Đảng mới 15 tuổi đã lãnh đạo cách mạng thành công, nắm chính quyền toàn quốc'."
    },
    {
      id: "fc3",
      question: "Nhận định kinh điển về sức mạnh tổng hợp đánh thắng đế quốc xâm lược?",
      answer: "'Một dân tộc không rộng lớn, người không đông, song đoàn kết chặt chẽ... dưới sự lãnh đạo của một Đảng Mác-Lênin có đường lối đúng đắn... hoàn toàn có thể đánh bại mọi thế lực đế quốc xâm lược'."
    },
    {
      id: "fc4",
      question: "Lời kêu gọi nổi tiếng của Bác Hồ trong Tổng khởi nghĩa Tháng Tám 1945?",
      answer: "'Đem sức ta mà tự giải phóng cho ta'."
    },
    {
      id: "fc5",
      question: "Kết quả tổng hợp 15 năm chuẩn bị cho Cách mạng Tháng Tám 1945 gồm những cao trào nào?",
      answer: "Cao trào Xô viết Nghệ-Tĩnh (1930-1931), Phong trào Dân chủ (1936-1939) và Phong trào Giải phóng dân tộc (1939-1945)."
    },
    {
      id: "fc6",
      question: "Đặc điểm nổi bật nhất của cách mạng Việt Nam giai đoạn 1954 - 1975?",
      answer: "Một Đảng thống nhất lãnh đạo một nước tạm thời chia làm hai miền với hai chiến lược cách mạng khác nhau."
    },
    {
      id: "fc7",
      question: "Ba vùng chiến lược và ba mũi tiến công trong phương pháp cách mạng chống Mỹ?",
      answer: "3 Vùng chiến lược: Rừng núi, Nông thôn đồng bằng, Đô thị. 3 Mũi tiến công: Quân sự, Chính trị, Binh vận."
    },
    {
      id: "fc8",
      question: "Việt Nam chính thức ra khỏi khủng hoảng kinh tế - xã hội vào năm nào?",
      answer: "Năm 1996 (tổng kết 10 năm Đổi mới tại Đại hội VIII)."
    },
    {
      id: "fc9",
      question: "Việt Nam chính thức trở thành nước có mức thu nhập trung bình vào năm nào?",
      answer: "Năm 2008."
    },
    {
      id: "fc10",
      question: "Hội nghị giữa nhiệm kỳ khóa VII (1-1994) chỉ ra 4 nguy cơ lớn nào?",
      answer: "Tụt hậu kinh tế, Chệch hướng XHCN, Tham nhũng quan liêu, Diễn biến hòa bình."
    },
    {
      id: "fc11",
      question: "Ai là người nhấn mạnh 9 mối quan hệ lớn phản ánh quy luật đổi mới tại Đại hội XII (2016)?",
      answer: "Cố Tổng Bí thư Nguyễn Phú Trọng."
    },
    {
      id: "fc12",
      question: "Bài học quan trọng hàng đầu về vai trò của Nhân dân được khẳng định qua 30 năm Đổi mới?",
      answer: "Luôn quán triệt quan điểm 'Dân là gốc', vì lợi ích nhân dân, dựa vào nhân dân, phát huy vai trò làm chủ của nhân dân."
    },
    {
      id: "fc13",
      question: "Nhận thức sáng tỏ về nội dung 'Bỏ qua chế độ tư bản chủ nghĩa' là gì?",
      answer: "Bỏ qua việc xác lập vị trí thống trị của quan hệ sản xuất và kiến trúc thượng tầng TBCN, nhưng kế thừa thành tựu KH-CN của nhân loại."
    },
    {
      id: "fc14",
      question: "Khẳng định của Đại hội XII về thành tựu 30 năm Đổi mới?",
      answer: "'Những thành tựu đó tạo tiền đề, nền tảng quan trọng... con đường đi lên CNXH của nước ta là phù hợp với thực tiễn Việt Nam và xu thế phát triển của lịch sử'."
    },
    {
      id: "fc15",
      question: "Mối quan hệ thứ 9 trong 9 mối quan hệ lớn là gì?",
      answer: "Giữa Đảng lãnh đạo, Nhà nước quản lý, nhân dân làm chủ."
    }
  ];

  return (
    <div className="w-full space-y-10 pb-16 font-sans text-slate-800">
      
      {/* 🌟 MASTER VICTORY HERO BANNER */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-950 via-red-900 to-amber-950 p-8 md:p-12 text-white shadow-2xl border border-red-800/40">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs md:text-sm font-semibold backdrop-blur-md">
            <Crown className="w-4 h-4 text-amber-400" />
            <span>KẾT LUẬN | Mục II: Những Thắng Lợi Vĩ Đại Của Cách Mạng Việt Nam</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-100 to-white font-serif">
            Những Thắng Lợi Vĩ Đại & Quy Luật Đổi Mới Của Cách Mạng Việt Nam
          </h1>

          <p className="text-red-100/90 text-base md:text-lg leading-relaxed max-w-3xl">
            Tổng kết <strong className="text-amber-300">Ba thắng lợi vĩ đại nhất</strong> làm thay đổi dòng chảy lịch sử dân tộc, <strong className="text-yellow-200">9 mối quan hệ lớn phản ánh quy luật Đổi mới</strong> và các nhận định gốc kinh điển của Bác Hồ và Đảng ta.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-red-800/60">
            <div className="bg-red-950/60 backdrop-blur-sm p-3.5 rounded-xl border border-red-700/50">
              <div className="text-amber-400 text-xs font-semibold uppercase tracking-wider">Thắng lợi Vĩ đại</div>
              <div className="text-white font-bold text-base mt-1">3 Thắng Lợi Lớn</div>
            </div>
            <div className="bg-red-950/60 backdrop-blur-sm p-3.5 rounded-xl border border-red-700/50">
              <div className="text-amber-400 text-xs font-semibold uppercase tracking-wider">Tuổi Đảng năm 1945</div>
              <div className="text-white font-bold text-base mt-1">Mới 15 Tuổi</div>
            </div>
            <div className="bg-red-950/60 backdrop-blur-sm p-3.5 rounded-xl border border-red-700/50">
              <div className="text-amber-400 text-xs font-semibold uppercase tracking-wider">Mối quan hệ Lớn</div>
              <div className="text-white font-bold text-base mt-1">9 Mối Quan Hệ</div>
            </div>
            <div className="bg-red-950/60 backdrop-blur-sm p-3.5 rounded-xl border border-red-700/50">
              <div className="text-amber-400 text-xs font-semibold uppercase tracking-wider">Trích dẫn Kinh điển</div>
              <div className="text-white font-bold text-base mt-1">3 Nhận Định Gốc</div>
            </div>
          </div>
        </div>
      </section>

      {/* 📌 KHỐI 1: HERO VICTORY CARDS (BA THẮNG LỢI VĨ ĐẠI) */}
      <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/80 space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
          <div className="w-10 h-10 rounded-xl bg-red-700 text-white flex items-center justify-center font-bold">
            <TrophyIcon className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold text-red-700 uppercase tracking-wider">Tổng kết đỉnh cao</span>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-serif">1. Ba Thắng Lợi Vĩ Đại Của Cách Mạng Việt Nam</h2>
          </div>
        </div>

        {/* Victory Selector Tabs */}
        <div className="grid md:grid-cols-3 gap-3">
          {victories.map((v, idx) => {
            const isActive = activeVictoryIndex === idx;
            return (
              <button
                key={v.id}
                onClick={() => setActiveVictoryIndex(idx)}
                className={`p-4 rounded-xl text-left transition-all border ${
                  isActive
                    ? "bg-red-900 text-white border-red-800 shadow-md ring-2 ring-amber-400"
                    : "bg-slate-50 hover:bg-red-50 text-slate-800 border-slate-200"
                }`}
              >
                <div className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${isActive ? "text-amber-300" : "text-red-700"}`}>
                  {v.badge}
                </div>
                <div className="font-bold font-serif text-sm md:text-base leading-snug">
                  {v.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Victory Display Card */}
        {victories[activeVictoryIndex] && (
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <h3 className="text-xl font-bold text-red-950 font-serif">
                {victories[activeVictoryIndex].title}
              </h3>
              <span className="px-3 py-1 bg-red-100 text-red-800 font-bold text-xs rounded-full">
                {victories[activeVictoryIndex].period}
              </span>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed font-medium bg-white p-4 rounded-xl border border-slate-200">
              {victories[activeVictoryIndex].summary}
            </p>

            <div className="space-y-2 pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-red-800 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                Nội dung cốt lõi & Phương pháp cách mạng sáng tạo:
              </div>
              <div className="grid md:grid-cols-2 gap-2.5 text-xs md:text-sm text-slate-700">
                {victories[activeVictoryIndex].highlights.map((hl, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2 bg-white p-3 rounded-xl border border-slate-200">
                    <span className="text-red-700 font-bold shrink-0">✓</span>
                    <span className="leading-relaxed">{hl}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* 📌 KHỐI 2: 3X3 INTERACTIVE GRID (9 MỐI QUAN HỆ LỚN CỦA CỐ TBT NGUYỄN PHÚ TRỌNG) */}
      <section className="bg-gradient-to-br from-amber-500/10 via-amber-400/5 to-red-500/10 rounded-2xl p-6 md:p-8 border border-amber-300/60 shadow-sm space-y-6">
        <div className="flex items-center gap-3 border-b border-amber-200/60 pb-4">
          <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold shadow-md">
            <Grid className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-amber-800 uppercase tracking-wider">Đại hội XII - Cố TBT Nguyễn Phú Trọng nhấn mạnh</div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-serif">2. 9 Mối Quan Hệ Lớn Phản Ánh Quy Luật Đổi Mới</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 text-xs md:text-sm">
          {relationships.map((rel) => (
            <div key={rel.num} className="bg-white/90 backdrop-blur-sm p-5 rounded-xl border border-amber-200 space-y-2 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between border-b border-amber-100 pb-1">
                  <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 text-xs font-bold flex items-center justify-center">
                    {rel.num}
                  </span>
                  <span className="text-[10px] font-bold text-amber-800 uppercase">Quy luật Đổi mới</span>
                </div>
                <h4 className="font-bold text-slate-900 text-sm font-serif leading-snug">
                  Mối quan hệ {rel.title}
                </h4>
                <p className="text-slate-600 leading-relaxed text-xs">
                  {rel.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 📌 KHỐI 3: HISTORIC QUOTE CALLOUT CARDS (3 NHẬN ĐỊNH GỐC KINH ĐIỂN - GIAO DIỆN SÁNG SANG TRỌNG) */}
      <section className="bg-gradient-to-br from-amber-500/10 via-red-500/5 to-amber-400/10 text-slate-900 rounded-3xl p-6 md:p-8 shadow-xl border border-amber-300/80 space-y-6 backdrop-blur-md">
        <div className="flex items-center gap-3 border-b border-amber-200/80 pb-4">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-red-700 to-amber-600 text-white flex items-center justify-center font-bold shadow-md shadow-red-700/20">
            <Quote className="w-6 h-6 text-yellow-200" />
          </div>
          <div>
            <span className="text-xs font-black text-red-700 uppercase tracking-widest">Trích dẫn Kinh điển</span>
            <h2 className="text-xl md:text-2xl font-bold font-serif text-slate-900">3. Ba Nhận Định Gốc Lịch Sử Kinh Điển Của Đảng</h2>
          </div>
        </div>

        <div className="space-y-4 text-xs md:text-sm">
          {/* Quote 1: Bác Hồ khen Đảng 15 tuổi */}
          <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl border border-amber-300/90 shadow-md space-y-2 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-3 opacity-5">
              <Quote className="w-20 h-20 text-amber-800" />
            </div>
            <div className="text-xs font-black text-amber-800 uppercase tracking-wider flex items-center justify-between">
              <span>Nhận định 1 | Chủ tịch Hồ Chí Minh</span>
              <span className="px-2.5 py-0.5 bg-amber-100 text-amber-900 rounded-full font-bold text-[10px]">Đảng 15 Tuổi</span>
            </div>
            <p className="text-slate-800 font-serif italic text-sm md:text-base leading-relaxed font-medium">
              "Chẳng những giai cấp lao động và nhân dân Việt Nam ta có thể tự hào, mà giai cấp lao động và các dân tộc bị áp bức nơi khác cũng có thể tự hào rằng: lần đầu tiên trong lịch sử cách mạng của các dân tộc thuộc địa và nửa thuộc địa, <strong className="text-red-800 not-italic font-bold">một Đảng mới 15 tuổi đã lãnh đạo cách mạng thành công, nắm chính quyền toàn quốc</strong>."
            </p>
          </div>

          {/* Quote 2: Đánh thắng đế quốc */}
          <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl border border-red-300/90 shadow-md space-y-2 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-3 opacity-5">
              <Quote className="w-20 h-20 text-red-800" />
            </div>
            <div className="text-xs font-black text-red-800 uppercase tracking-wider flex items-center justify-between">
              <span>Nhận định 2 | Sức mạnh thắng lợi kháng chiến</span>
              <span className="px-2.5 py-0.5 bg-red-100 text-red-900 rounded-full font-bold text-[10px]">Kháng chiến</span>
            </div>
            <p className="text-slate-800 font-serif italic text-sm md:text-base leading-relaxed font-medium">
              "Một dân tộc không rộng lớn, người không đông, song đoàn kết chặt chẽ... dưới sự lãnh đạo của một Đảng Mác-Lênin có đường lối và phương pháp cách mạng đúng đắn... <strong className="text-amber-800 not-italic font-bold">thì hoàn toàn có thể đánh bại mọi thế lực đế quốc xâm lược</strong>."
            </p>
          </div>

          {/* Quote 3: Đại hội XII */}
          <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl border border-blue-300/90 shadow-md space-y-2 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-3 opacity-5">
              <Quote className="w-20 h-20 text-blue-800" />
            </div>
            <div className="text-xs font-black text-blue-800 uppercase tracking-wider flex items-center justify-between">
              <span>Nhận định 3 | Văn kiện Đại hội XII (2016)</span>
              <span className="px-2.5 py-0.5 bg-blue-100 text-blue-900 rounded-full font-bold text-[10px]">Thành tựu Đổi mới</span>
            </div>
            <p className="text-slate-800 font-serif italic text-sm md:text-base leading-relaxed font-medium">
              "Những thành tựu đó tạo tiền đề, nền tảng quan trọng để nước ta tiếp tục đổi mới và phát triển mạnh mẽ trong những năm tới; những định hướng đường lối đổi mới của Đảng là đúng đắn, sáng tạo; <strong className="text-slate-900 not-italic font-bold">con đường đi lên chủ nghĩa xã hội của nước ta là phù hợp với thực tiễn Việt Nam và xu thế phát triển của lịch sử</strong>."
            </p>
          </div>
        </div>
      </section>

      {/* 📌 KHỐI 4: THẺ FLASHCARD TỰ ÔN TẬP TỔNG HỢP MÔN HỌC (15 THẺ LẬT) */}
      <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/80 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-900 flex items-center justify-center font-bold">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-serif">4. Thẻ Ghi Nhớ Lịch Sử Đảng Tổng Ôn Toàn Môn (Flashcards)</h2>
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

function TrophyIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}
