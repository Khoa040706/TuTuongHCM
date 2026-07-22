"use client";
import React, { useState } from "react";
import { 
  Calendar, Users, Award, BookOpen, ChevronRight, CheckCircle2, 
  Sparkles, Target, Star, Flag, Clock, ShieldCheck, Heart, 
  Layers, Lightbulb, Zap, ArrowRight, RotateCcw, Bookmark, ExternalLink,
  Globe, Shield, TrendingUp, Anchor, Sprout, Landmark, Scale, Briefcase
} from "lucide-react";

export default function LsdCongress10FullContent() {
  // Timeline interactive selection state
  const [selectedTimelineIndex, setSelectedTimelineIndex] = useState(0);
  
  // Flashcard flip states
  const [flippedCards, setFlippedCards] = useState({});

  // Active view tab for 5 lessons vs 5 breakthroughs
  const [activeTab, setActiveTab] = useState("breakthroughs");

  const toggleCardFlip = (id) => {
    setFlippedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Timeline events data for Congress X (2006 - 2011)
  const timelineEvents = [
    {
      date: "18 - 25/4/2006",
      title: "Đại hội Đại biểu Toàn quốc lần thứ X",
      location: "Hà Nội",
      badge: "Đại hội X",
      summary: "1.176 đại biểu đại diện hơn 3,1 triệu đảng viên. Bầu BCH TW 160 ủy viên chính thức, 21 dự khuyết. Bộ Chính trị 14 đồng chí. Đồng chí Nông Đức Mạnh tiếp tục làm Tổng Bí thư.",
      details: [
        "Chủ đề Đại hội: 'Nâng cao năng lực lãnh đạo và sức chiến đấu của Đảng, phát huy sức mạnh toàn dân tộc, đẩy mạnh toàn diện công cuộc đổi mới, sớm đưa nước ta ra khỏi tình trạng kém phát triển'.",
        "Lần đầu tiên đặt nhiệm vụ then chốt 'Xây dựng, chỉnh đốn Đảng' lên hàng đầu trong Chủ đề Đại hội.",
        "Quyết định lịch sử: Cho phép đảng viên làm kinh tế tư nhân, kể cả tư bản tư nhân.",
        "Bổ sung 2 đặc trưng mới của CNXH: 'Dân giàu, nước mạnh, công bằng, dân chủ, văn minh' & 'Có Nhà nước pháp quyền xã hội chủ nghĩa'."
      ]
    },
    {
      date: "11/2006",
      title: "Gia nhập WTO & Tổ chức APEC 14",
      location: "Hà Nội / Toàn cầu",
      badge: "Gia nhập WTO & APEC",
      summary: "Việt Nam chính thức trở thành thành viên thứ 150 của Tổ chức Thương mại Thế giới (WTO) và tổ chức thành công Tuần lễ cao cấp APEC 14 tại Hà Nội.",
      details: [
        "Đánh dấu bước hội nhập kinh tế quốc tế sâu rộng toàn diện.",
        "Sau 1 năm gia nhập WTO (2007): GDP tăng 8,48%, xuất khẩu tăng 21,5%, FDI đạt 20,3 tỷ USD."
      ]
    },
    {
      date: "2/2007",
      title: "Hội nghị Trung ương 4 khóa X",
      location: "Hà Nội",
      badge: "TW4 - Chiến lược Biển 2020",
      summary: "Ban hành 'Chiến lược Biển Việt Nam đến năm 2020' và sắp xếp bộ máy cơ quan Đảng, Nhà nước gọn nhẹ (còn 22 bộ & cơ quan ngang bộ).",
      details: [
        "Quan điểm: Việt Nam phải trở thành 'Quốc gia mạnh về biển, làm giàu từ biển'.",
        "Mục tiêu đến 2020: Kinh tế biển đóng góp 53 - 55% GDP và 55 - 60% kim ngạch xuất khẩu."
      ]
    },
    {
      date: "7 - 8/2007",
      title: "Hội nghị TW 5 & TW 6 khóa X",
      location: "Hà Nội",
      badge: "TW5 & TW6 - Cải cách & Công nhân",
      summary: "Các Nghị quyết quan trọng về kiểm tra giám sát của Đảng (TW5), Đổi mới phương thức lãnh đạo, Xây dựng giai cấp công nhân (TW6) và Cải cách hành chính.",
      details: [
        "TW5 (7/2007): Kiểm tra giám sát là nhiệm vụ thường xuyên của toàn Đảng; kết hợp 'xây và chống', lấy xây là chính.",
        "TW6 (8/2007): Xây dựng giai cấp công nhân là giai cấp lãnh đạo cách mạng thông qua đội tiên phong là ĐCSVN."
      ]
    },
    {
      date: "1/2008",
      title: "Hội nghị Trung ương 6 (đợt 2) khóa X",
      location: "Hà Nội",
      badge: "TW6 - Thể chế KT & Chống tham nhũng",
      summary: "Nghị quyết về hoàn thiện thể chế kinh tế thị trường định hướng XHCN, phòng chống tham nhũng, lãng phí và cải cách tiền lương 2008-2012.",
      details: [
        "Tôn trọng quy luật khách quan của kinh tế thị trường đi đôi với đảm bảo định hướng XHCN.",
        "Phòng chống tham nhũng, lãng phí: Đóng vai trò then chốt bảo vệ sự trong sạch của hệ thống chính trị."
      ]
    },
    {
      date: "29/5/2008 (Hiệu lực 1/8/2008)",
      title: "Mở rộng Địa giới Hành chính Hà Nội",
      location: "Hà Nội",
      badge: "Mở rộng Hà Nội",
      summary: "Quốc hội khóa XII ban hành Nghị quyết điều chỉnh địa giới hành chính Thủ đô Hà Nội, mở rộng không gian phát triển toàn diện cho Thủ đô.",
      details: [
        "Hợp nhất tỉnh Hà Tây, huyện Mê Linh (Vĩnh Phúc) và 4 xã thuộc Lương Sơn (Hòa Bình) vào Hà Nội.",
        "Tạo thế và lực mới cho không gian đô thị và kinh tế vùng Thủ đô."
      ]
    },
    {
      date: "7/2008",
      title: "Hội nghị Trung ương 7 khóa X",
      location: "Hà Nội",
      badge: "TW7 - Nghị quyết Tam Nông",
      summary: "Ban hành Nghị quyết lịch sử về Nông nghiệp, Nông dân, Nông thôn ('Tam nông'), công tác Thanh niên và xây dựng đội ngũ Trí thức.",
      details: [
        "Lần đầu tiên đưa ra nghị quyết chiến lược giải quyết đồng thời 3 vấn đề: Nông nghiệp, Nông dân, Nông thôn.",
        "Xác định Tam nông có vị trí chiến lược hàng đầu trong công cuộc CNH - HĐH.",
        "Thanh niên: 'Vừa hồng vừa chuyên'; Trí thức: Lực lượng lao động sáng tạo đặc biệt quan trọng."
      ]
    },
    {
      date: "2008",
      title: "Việt Nam chính thức thoát nước nghèo",
      location: "Toàn quốc",
      badge: "Thoát nghèo 2008",
      summary: "Việt Nam chính thức ra khỏi tình trạng nước nghèo, bước vào nhóm các nước có thu nhập trung bình (Middle-Income Country).",
      details: [
        "GDP 2010 đạt 101,6 tỷ USD (gấp 3,26 lần năm 2000), GDP bình quân đầu người đạt 1.168 USD.",
        "Thu hút FDI giai đoạn 2006-2010 đạt gần 45 tỷ USD, vốn ODA cam kết trên 31 tỷ USD."
      ]
    },
    {
      date: "31/12/2008",
      title: "Hoàn thành cắm mốc Biên giới Việt - Trung",
      location: "Biên giới phía Bắc",
      badge: "Phân giới cắm mốc",
      summary: "Hoàn thành toàn bộ công tác phân giới cắm mốc biên giới đất liền Việt Nam - Trung Quốc trên thực địa.",
      details: [
        "Xây dựng đường biên giới đất liền hòa bình, hữu nghị, ổn định lâu dài giữa hai nước."
      ]
    },
    {
      date: "11/2006 - 2010",
      title: "Cuộc vận động Học tập & Làm theo Bác",
      location: "Cả nước",
      badge: "Chỉ thị 03 - Đạo đức Bác",
      summary: "Bộ Chính trị triển khai sâu rộng Cuộc vận động 'Học tập và làm theo tấm gương đạo đức Hồ Chí Minh' trong toàn Đảng và toàn dân.",
      details: [
        "Nội dung: Nâng cao đạo đức cách mạng, quét sạch chủ nghĩa cá nhân, thực hành Cần - Kiệm - Liêm - Chính - Chí công vô tư."
      ]
    }
  ];

  // 5 Lessons learned from 20 years of Doi Moi (1986 - 2006)
  const lessons = [
    {
      num: "01",
      title: "Giữ vững mục tiêu độc lập dân tộc & CNXH",
      desc: "Kiên định mục tiêu độc lập dân tộc và CNXH trên nền tảng chủ nghĩa Mác-Lênin và tư tưởng Hồ Chí Minh."
    },
    {
      num: "02",
      title: "Đổi mới toàn diện, đồng bộ, phù hợp",
      desc: "Đổi mới toàn diện, đồng bộ, có bước đi, hình thức và cách làm phù hợp thực tiễn."
    },
    {
      num: "03",
      title: "Đổi mới vì lợi ích nhân dân",
      desc: "Đổi mới vì lợi ích của nhân dân, dựa vào nhân dân, phát huy vai trò chủ động sáng tạo của nhân dân."
    },
    {
      num: "04",
      title: "Phát huy tối đa nội lực & ngoại lực",
      desc: "Phát huy cao độ nội lực, tranh thủ tối đa ngoại lực, kết hợp sức mạnh dân tộc với sức mạnh thời đại."
    },
    {
      num: "05",
      title: "Nâng cao năng lực lãnh đạo của Đảng",
      desc: "Nâng cao năng lực lãnh đạo và sức chiến đấu của Đảng, đổi mới hệ thống chính trị, hoàn thiện thể chế XHCN."
    }
  ];

  // 5 Breakthrough Insights of Congress X
  const breakthroughs = [
    {
      num: "01",
      title: "Xây dựng Đảng lên hàng đầu",
      desc: "Lần đầu tiên đặt nhiệm vụ then chốt 'Xây dựng, chỉnh đốn Đảng' lên hàng đầu, là thành tố xuất hiện đầu tiên trong Chủ đề Đại hội."
    },
    {
      num: "02",
      title: "Làm sáng tỏ bản chất của Đảng",
      desc: "Đảng là đội tiên phong của giai cấp công nhân, đồng thời là đội tiên phong của nhân dân lao động và của cả dân tộc Việt Nam."
    },
    {
      num: "03",
      title: "Đảng viên làm kinh tế tư nhân",
      desc: "Quyết định đột phá: Cho phép đảng viên làm kinh tế tư nhân, kể cả tư bản tư nhân (tuân thủ Điều lệ Đảng và pháp luật)."
    },
    {
      num: "04",
      title: "Bổ sung 2 đặc trưng Cương lĩnh",
      desc: "Bổ sung đặc trưng 'Dân giàu, nước mạnh, công bằng, dân chủ, văn minh' và 'Có Nhà nước pháp quyền xã hội chủ nghĩa'."
    },
    {
      num: "05",
      title: "Phát huy đại đoàn kết & Kinh tế trí thức",
      desc: "Xóa bỏ mặc cảm, định kiến quá khứ; đẩy mạnh CNH - HĐH gắn với phát triển kinh tế trí thức và chủ động hội nhập quốc tế."
    }
  ];

  // Exam keynotes Flashcards
  const flashcards = [
    {
      id: "fc1",
      question: "Thời gian tổ chức Đại hội X và Tổng Bí thư được bầu lại là ai?",
      answer: "Họp tại Hà Nội từ 18 đến 25/4/2006. Đồng chí Nông Đức Mạnh được bầu lại làm Tổng Bí thư."
    },
    {
      id: "fc2",
      question: "Điểm mới lịch sử của Đại hội X về việc đảng viên làm kinh tế?",
      answer: "Lần đầu tiên cho phép đảng viên làm kinh tế tư nhân, kể cả tư bản tư nhân (tuân thủ Điều lệ Đảng và pháp luật)."
    },
    {
      id: "fc3",
      question: "Hai đặc trưng mới của CNXH được bổ sung tại Đại hội X là gì?",
      answer: "1. 'Dân giàu, nước mạnh, công bằng, dân chủ, văn minh' và 2. 'Có Nhà nước pháp quyền xã hội chủ nghĩa'."
    },
    {
      id: "fc4",
      question: "Việt Nam gia nhập WTO vào thời gian nào và là thành viên thứ bao nhiêu?",
      answer: "Tháng 11/2006, Việt Nam chính thức là thành viên thứ 150 của Tổ chức Thương mại Thế giới (WTO)."
    },
    {
      id: "fc5",
      question: "Mục tiêu cốt lõi của 'Chiến lược Biển Việt Nam đến năm 2020' (HNTW 4 - 2/2007) là gì?",
      answer: "Việt Nam trở thành 'Quốc gia mạnh về biển, làm giàu từ biển'; kinh tế biển đóng góp 53 - 55% GDP."
    },
    {
      id: "fc6",
      question: "Hội nghị Trung ương 7 khóa X (2008) ban hành Nghị quyết chiến lược nào về nông nghiệp?",
      answer: "Nghị quyết 'Tam nông' -- giải quyết đồng thời 3 vấn đề: Nông nghiệp, Nông dân, Nông thôn."
    },
    {
      id: "fc7",
      question: "Việt Nam chính thức thoát khỏi tình trạng nước nghèo vào năm nào?",
      answer: "Năm 2008, Việt Nam chính thức thoát nước nghèo, bước vào nhóm nước có thu nhập trung bình (GDP bình quân đạt 1.168 USD/người năm 2010)."
    },
    {
      id: "fc8",
      question: "Nghị quyết mở rộng địa giới hành chính Thủ đô Hà Nội được Quốc hội thông qua khi nào?",
      answer: "Thông qua ngày 29/5/2008, chính thức có hiệu lực từ ngày 1/8/2008."
    },
    {
      id: "fc9",
      question: "Mốc thời gian hoàn thành phân giới cắm mốc biên giới đất liền Việt Nam - Trung Quốc?",
      answer: "Ngày 31/12/2008 hoàn thành toàn bộ công tác phân giới cắm mốc trên thực địa."
    },
    {
      id: "fc10",
      question: "Đại hội X định nghĩa bản chất của Đảng Cộng sản Việt Nam như thế nào?",
      answer: "Đội tiên phong của giai cấp công nhân, đồng thời là đội tiên phong của nhân dân lao động và của cả dân tộc Việt Nam."
    }
  ];

  return (
    <div className="w-full space-y-10 pb-16 font-sans text-slate-800">
      
      {/* 🌟 HERO BANNER: ĐẠI HỘI X */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-950 via-red-900 to-amber-950 p-8 md:p-12 text-white shadow-2xl border border-red-800/40">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-80 h-80 bg-red-600/20 rounded-full blur-2xl pointer-events-none"></div>
        
        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs md:text-sm font-semibold backdrop-blur-md">
            <Flag className="w-4 h-4 text-amber-400" />
            <span>Mục II.2.c | Lịch sử Đảng Cộng sản Việt Nam (2006 - 2011)</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-100 to-white font-serif">
            Đại Hội X & Thành Tựu 20 Năm Đổi Mới, Hội Nhập Quốc Tế Sâu Rộng
          </h1>

          <p className="text-red-100/90 text-base md:text-lg leading-relaxed max-w-3xl">
            Đại hội X (18 - 25/4/2006) tổng kết 20 năm Đổi mới (1986 - 2006), đưa ra quyết định đột phá: <strong className="text-amber-300 font-semibold">cho phép Đảng viên làm kinh tế tư nhân</strong>, bổ sung 2 đặc trưng Cương lĩnh, gia nhập <strong className="text-yellow-200">WTO (thành viên thứ 150)</strong> và chính thức đưa Việt Nam <strong className="text-amber-300 font-semibold">thoát khỏi tình trạng nước nghèo vào năm 2008</strong>.
          </p>

          {/* Quick stats highlight */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-red-800/60">
            <div className="bg-red-950/60 backdrop-blur-sm p-3.5 rounded-xl border border-red-700/50">
              <div className="text-amber-400 text-xs font-semibold uppercase tracking-wider">Thời gian</div>
              <div className="text-white font-bold text-base mt-1">18 - 25/4/2006</div>
            </div>
            <div className="bg-red-950/60 backdrop-blur-sm p-3.5 rounded-xl border border-red-700/50">
              <div className="text-amber-400 text-xs font-semibold uppercase tracking-wider">Gia nhập WTO</div>
              <div className="text-white font-bold text-base mt-1">Tháng 11/2006 (#150)</div>
            </div>
            <div className="bg-red-950/60 backdrop-blur-sm p-3.5 rounded-xl border border-red-700/50">
              <div className="text-amber-400 text-xs font-semibold uppercase tracking-wider">Thoát nước nghèo</div>
              <div className="text-white font-bold text-base mt-1">Năm 2008</div>
            </div>
            <div className="bg-red-950/60 backdrop-blur-sm p-3.5 rounded-xl border border-red-700/50">
              <div className="text-amber-400 text-xs font-semibold uppercase tracking-wider">GDP năm 2010</div>
              <div className="text-white font-bold text-base mt-1">101,6 tỷ USD</div>
            </div>
          </div>
        </div>
      </section>

      {/* 📌 KHỐI 1: BỐI CẢNH & 5 BÀI HỌC TỔNG KẾT 20 NĂM ĐỔI MỚI */}
      <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/80 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-100 text-red-700 flex items-center justify-center font-bold">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-serif">1. Tổng Kết 20 Năm Đổi Mới (1986 - 2006)</h2>
              <p className="text-xs md:text-sm text-slate-500">5 bài học lớn đúc kết từ thực tiễn 2 thập kỷ đổi mới đất nước</p>
            </div>
          </div>

          <div className="inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200">
            <button
              onClick={() => setActiveTab("lessons")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === "lessons" ? "bg-red-700 text-white shadow-sm" : "text-slate-600"
              }`}
            >
              5 Bài học lớn
            </button>
            <button
              onClick={() => setActiveTab("breakthroughs")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === "breakthroughs" ? "bg-red-700 text-white shadow-sm" : "text-slate-600"
              }`}
            >
              5 Điểm mới Đại hội X
            </button>
          </div>
        </div>

        {activeTab === "lessons" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {lessons.map((item, idx) => (
              <div key={idx} className="bg-slate-50 hover:bg-red-50/40 p-5 rounded-xl border border-slate-200/80 hover:border-red-300 transition-all group">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-red-700 font-serif">{item.num}</span>
                    <span className="px-2 py-0.5 bg-red-100 text-red-700 text-[10px] font-bold rounded-full uppercase">Bài học 20 năm</span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-base">{item.title}</h4>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "breakthroughs" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {breakthroughs.map((item, idx) => (
              <div key={idx} className="bg-amber-50/50 hover:bg-amber-100/50 p-5 rounded-xl border border-amber-200 transition-all group">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-amber-600 font-serif">{item.num}</span>
                    <span className="px-2 py-0.5 bg-amber-200/80 text-amber-900 text-[10px] font-bold rounded-full uppercase">Đột phá Đại hội X</span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-base">{item.title}</h4>
                  <p className="text-slate-700 text-xs md:text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 📌 KHỐI 2: TRỤC THỜI GIAN SỰ KIỆN HNTW KHÓA X (INTERACTIVE TIMELINE) */}
      <section className="bg-slate-900 text-white rounded-2xl p-6 md:p-8 shadow-xl space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-900 flex items-center justify-center font-bold">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold font-serif text-amber-300">2. Chuỗi Sự Kiện & Hội Nghị Trung Ương Trọng Tâm (2006 - 2011)</h2>
              <p className="text-xs md:text-sm text-slate-400">Nhấp vào từng mốc lịch sử để xem nội dung chi tiết</p>
            </div>
          </div>
          <span className="text-xs font-semibold px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full self-start md:self-auto">
            {timelineEvents.length} Mốc Lịch sử
          </span>
        </div>

        {/* Timeline Nav Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-thin scrollbar-thumb-slate-700">
          {timelineEvents.map((evt, idx) => {
            const isActive = selectedTimelineIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => setSelectedTimelineIndex(idx)}
                className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-2 shrink-0 ${
                  isActive
                    ? "bg-red-700 text-white shadow-lg shadow-red-900/40 ring-2 ring-amber-400"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${isActive ? "bg-amber-300 animate-pulse" : "bg-slate-500"}`}></span>
                <span>{evt.badge}</span>
              </button>
            );
          })}
        </div>

        {/* Active Timeline Event Display Card */}
        {timelineEvents[selectedTimelineIndex] && (
          <div className="bg-slate-800/90 rounded-xl p-6 border border-slate-700 space-y-4 transition-all">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700/80 pb-3">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-red-600/30 text-red-300 font-mono font-bold text-xs md:text-sm rounded-md border border-red-500/30">
                  {timelineEvents[selectedTimelineIndex].date}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  {timelineEvents[selectedTimelineIndex].location}
                </span>
              </div>
              <span className="text-xs font-bold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-md">
                {selectedTimelineIndex + 1} / {timelineEvents.length}
              </span>
            </div>

            <h3 className="text-xl font-bold text-white font-serif">
              {timelineEvents[selectedTimelineIndex].title}
            </h3>

            <p className="text-slate-300 text-sm leading-relaxed bg-slate-900/50 p-3.5 rounded-lg border border-slate-800">
              {timelineEvents[selectedTimelineIndex].summary}
            </p>

            <div className="space-y-2 pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                Nội dung chi tiết & Chỉ đạo trọng tâm:
              </div>
              <ul className="grid md:grid-cols-2 gap-2 text-xs md:text-sm text-slate-300">
                {timelineEvents[selectedTimelineIndex].details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2 bg-slate-900/80 p-2.5 rounded-lg border border-slate-800/80">
                    <span className="text-amber-400 font-bold shrink-0">✓</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </section>

      {/* 📌 KHỐI 3: WIDGET CHUYÊN BIỆT 1 -- CHIẾN LƯỢC BIỂN VIỆT NAM ĐẾN 2020 (HNTW 4 - 2/2007) */}
      <section className="bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 text-white rounded-2xl p-6 md:p-8 border border-blue-800/60 shadow-xl space-y-6">
        <div className="flex items-center gap-3 border-b border-blue-800/80 pb-4">
          <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold shadow-md">
            <Anchor className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-blue-300 uppercase tracking-wider">Hội nghị Trung ương 4 khóa X (2/2007)</div>
            <h2 className="text-xl md:text-2xl font-bold font-serif text-white">Chiến Lược Biển Việt Nam Đến Năm 2020</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 text-xs md:text-sm">
          <div className="bg-blue-900/40 p-4 rounded-xl border border-blue-700/60 space-y-2">
            <div className="font-bold text-amber-300 flex items-center gap-1.5">
              <Globe className="w-4 h-4" />
              Tầm nhìn Thế kỷ XXI
            </div>
            <p className="text-blue-100 leading-relaxed">
              Thế kỷ XXI là thế kỷ của Đại dương. Biển Đông có vị trí địa kinh tế, địa chính trị đặc biệt quan trọng đối với sự nghiệp xây dựng và bảo vệ Tổ quốc.
            </p>
          </div>

          <div className="bg-blue-900/40 p-4 rounded-xl border border-blue-700/60 space-y-2">
            <div className="font-bold text-amber-300 flex items-center gap-1.5">
              <Target className="w-4 h-4" />
              Mục tiêu Đóng góp Kinh tế
            </div>
            <p className="text-blue-100 leading-relaxed">
              Đến năm 2020, kinh tế biển đóng góp khoảng <strong className="text-yellow-300">53 - 55% GDP</strong> và <strong className="text-yellow-300">55 - 60% kim ngạch xuất khẩu</strong> của cả nước.
            </p>
          </div>

          <div className="bg-blue-900/40 p-4 rounded-xl border border-blue-700/60 space-y-2">
            <div className="font-bold text-amber-300 flex items-center gap-1.5">
              <Shield className="w-4 h-4" />
              Quan điểm Chiến lược
            </div>
            <p className="text-blue-100 leading-relaxed">
              Khẳng định Việt Nam phải trở thành <strong className="text-amber-300">"Quốc gia mạnh về biển, làm giàu từ biển"</strong>, gắn phát triển kinh tế biển với bảo vệ chủ quyền biển đảo.
            </p>
          </div>
        </div>
      </section>

      {/* 📌 KHỐI 4: WIDGET CHUYÊN BIỆT 2 -- NGHỊ QUYẾT TAM NÔNG (HNTW 7 - 2008) */}
      <section className="bg-gradient-to-br from-emerald-950 via-slate-900 to-green-950 text-white rounded-2xl p-6 md:p-8 border border-emerald-800/60 shadow-xl space-y-6">
        <div className="flex items-center gap-3 border-b border-emerald-800/80 pb-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold shadow-md">
            <Sprout className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-emerald-300 uppercase tracking-wider">Hội nghị Trung ương 7 khóa X (7/2008)</div>
            <h2 className="text-xl md:text-2xl font-bold font-serif text-white">Nghị Quyết "Tam Nông" (Nông Nghiệp, Nông Dân, Nông Thôn)</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 text-xs md:text-sm">
          <div className="bg-emerald-900/40 p-4 rounded-xl border border-emerald-700/60 space-y-2">
            <div className="font-bold text-amber-300 flex items-center gap-1.5">
              <Star className="w-4 h-4" />
              Đột phá Lần đầu tiên
            </div>
            <p className="text-emerald-100 leading-relaxed">
              Lần đầu tiên Đảng đưa ra nghị quyết chiến lược giải quyết đồng thời 3 vấn đề gắn kết hữu cơ: Nông nghiệp, Nông dân, Nông thôn.
            </p>
          </div>

          <div className="bg-emerald-900/40 p-4 rounded-xl border border-emerald-700/60 space-y-2">
            <div className="font-bold text-amber-300 flex items-center gap-1.5">
              <Heart className="w-4 h-4" />
              Chủ thể Nông dân
            </div>
            <p className="text-emerald-100 leading-relaxed">
              Nông dân là chủ thể của quá trình phát triển; nâng cao đời sống vật chất và tinh thần của người nông dân là mục tiêu tối thượng.
            </p>
          </div>

          <div className="bg-emerald-900/40 p-4 rounded-xl border border-emerald-700/60 space-y-2">
            <div className="font-bold text-amber-300 flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4" />
              Vị trí Chiến lược
            </div>
            <p className="text-emerald-100 leading-relaxed">
              Tam nông có vị trí chiến lược trong công cuộc CNH - HĐH; CNH - HĐH nông nghiệp nông thôn là nhiệm vụ quan trọng hàng đầu.
            </p>
          </div>
        </div>
      </section>

      {/* 📌 KHỐI 5: WIDGET CHUYÊN BIỆT 3 -- SỰ KIỆN GIA NHẬP WTO & APEC 14 */}
      <section className="bg-gradient-to-br from-amber-500/10 via-amber-400/5 to-red-500/10 rounded-2xl p-6 md:p-8 border border-amber-300/60 shadow-sm space-y-6">
        <div className="flex items-center gap-3 border-b border-amber-200/60 pb-4">
          <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold shadow-md">
            <Globe className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-amber-800 uppercase tracking-wider">Tháng 11/2006</div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-serif">Mốc Lịch Sử Gia Nhập WTO (#150) & APEC 14</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 text-xs md:text-sm">
          <div className="bg-white/90 backdrop-blur-sm p-5 rounded-xl border border-amber-200 space-y-2">
            <div className="font-bold text-amber-900 text-base">Thành viên thứ 150 WTO</div>
            <p className="text-slate-700 leading-relaxed">
              Tháng 11/2006, Việt Nam chính thức gia nhập Tổ chức Thương mại Thế giới (WTO), mở ra cánh cửa hội nhập kinh tế toàn cầu rộng lớn.
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm p-5 rounded-xl border border-amber-200 space-y-2">
            <div className="font-bold text-red-950 text-base">Tổ chức APEC 14 thành công</div>
            <p className="text-slate-700 leading-relaxed">
              Đăng cai và tổ chức thành công Tuần lễ cao cấp APEC 14 tại Hà Nội (11/2006), nâng cao vị thế ngoại giao của Việt Nam trên trường quốc tế.
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm p-5 rounded-xl border border-amber-200 space-y-2">
            <div className="font-bold text-slate-900 text-base">Tăng trưởng Bứt phá 2007</div>
            <p className="text-slate-700 leading-relaxed">
              Ngay sau 1 năm gia nhập WTO: GDP đạt 8,48%, xuất khẩu tăng 21,5%, dòng vốn FDI bùng nổ đạt 20,3 tỷ USD.
            </p>
          </div>
        </div>
      </section>

      {/* 📌 KHỐI 6: THẺ FLASHCARD TỰ ÔN TẬP TỪ KHÓA ĐẠI HỘI X */}
      <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/80 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-900 flex items-center justify-center font-bold">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-serif">5. Thẻ Ghi Nhớ Từ Khóa Ôn Thi Đại Hội X (Flashcards)</h2>
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
