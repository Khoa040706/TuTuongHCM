"use client";
import React, { useState } from "react";
import { 
  Calendar, Users, Award, BookOpen, ChevronRight, CheckCircle2, 
  Sparkles, Target, Star, Flag, Clock, ShieldCheck, Heart, 
  Layers, Lightbulb, Zap, ArrowRight, RotateCcw, Bookmark, ExternalLink,
  Globe, Shield, TrendingUp, Building2, UserCheck, Scale, Stethoscope,
  Coins, Landmark, Briefcase, Smile, Compass, MapPin
} from "lucide-react";

export default function LsdAchievementsFullContent() {
  // Timeline interactive selection state
  const [selectedTimelineIndex, setSelectedTimelineIndex] = useState(0);
  
  // Flashcard flip states
  const [flippedCards, setFlippedCards] = useState({});

  // Active view tab for Economic vs Cultural vs Political achievements
  const [activeTab, setActiveTab] = useState("economic");

  const toggleCardFlip = (id) => {
    setFlippedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Diplomacy Timeline events data
  const diplomacyEvents = [
    {
      date: "28/7/1995",
      title: "Gia nhập ASEAN",
      location: "Đông Nam Á",
      badge: "ASEAN (#7)",
      summary: "Việt Nam chính thức gia nhập Hiệp hội các quốc gia Đông Nam Á (ASEAN) và trở thành thành viên thứ 7.",
      details: [
        "Phá thế bị bao vây cấm vận, mở ra chương mới trong quan hệ hữu nghị với các nước láng giềng khu vực.",
        "Phát huy vai trò nòng cốt, dẫn dắt trong nhiều cơ chế hợp tác ASEAN."
      ]
    },
    {
      date: "11/1998",
      title: "Tham gia Diễn đàn APEC",
      location: "Châu Á - Thái Bình Dương",
      badge: "APEC",
      summary: "Việt Nam chính thức trở thành thành viên Diễn đàn Hợp tác Kinh tế Châu Á - Thái Bình Dương (APEC).",
      details: [
        "Tạo động lực tự do hóa thương mại và đầu tư với các nền kinh tế hàng đầu thế giới.",
        "Đăng cai tổ chức thành công 2 kỳ APEC (lần thứ 14 năm 2006 và năm 2017)."
      ]
    },
    {
      date: "11/2006",
      title: "Gia nhập Tổ chức Thương mại Thế giới (WTO)",
      location: "Geneva / Toàn cầu",
      badge: "WTO (#150)",
      summary: "Việt Nam chính thức kết thúc 11 năm đàm phán và trở thành thành viên thứ 150 của WTO.",
      details: [
        "Hội nhập kinh tế quốc tế sâu rộng, áp dụng nguyên tắc thương mại tự do bình đẳng toàn cầu.",
        "Dòng vốn FDI và kim ngạch xuất nhập khẩu tăng trưởng bứt phá."
      ]
    },
    {
      date: "2008 - 2009",
      title: "Ủy viên Không thường trực HĐBA LHQ (Lần 1)",
      location: "New York / LHQ",
      badge: "HĐBA LHQ Lần 1",
      summary: "Lần đầu tiên Việt Nam được bầu làm Ủy viên Không thường trực Hội đồng Bảo an Liên Hợp Quốc nhiệm kỳ 2008-2009.",
      details: [
        "Đóng góp tích cực vào hòa bình, an ninh quốc tế và giải quyết các xung đột khu vực.",
        "Khẳng định vị thế thành viên có trách nhiệm của cộng đồng quốc tế."
      ]
    },
    {
      date: "31/12/2008",
      title: "Hoàn thành Phân giới cắm mốc Việt - Trung",
      location: "Biên giới đất liền",
      badge: "Biên giới VN-CN",
      summary: "Hoàn thành toàn bộ công tác phân giới cắm mốc đường biên giới đất liền Việt Nam - Trung Quốc trên thực địa.",
      details: [
        "Xây dựng đường biên giới đất liền hòa bình, hữu nghị, ổn định lâu dài.",
        "Đồng thời hoàn thành phân định Vịnh Bắc Bộ và cắm mốc với Lào, Campuchia."
      ]
    },
    {
      date: "2018",
      title: "Mạng lưới Ngoại giao Đa phương Sâu rộng",
      location: "Toàn cầu",
      badge: "188/193 Quốc gia",
      summary: "Đến năm 2018, Việt Nam đã thiết lập quan hệ ngoại giao với 188/193 nước thành viên LHQ.",
      details: [
        "Thiết lập quan hệ 'Đối tác chiến lược với 16 nước' và 'Đối tác toàn diện với 11 nước'.",
        "Thương mại hai chiều với Trung Quốc đạt 25 tỷ USD, với Mỹ đạt 16 tỷ USD (2010)."
      ]
    },
    {
      date: "2020 - 2021",
      title: "Ủy viên Không thường trực HĐBA LHQ (Lần 2)",
      location: "New York / LHQ",
      badge: "HĐBA LHQ Lần 2 (192/193)",
      summary: "Việt Nam lần thứ 2 trúng cử Ủy viên Không thường trực HĐBA LHQ với số phiếu kỷ lục 192/193 phiếu ủng hộ.",
      details: [
        "Khẳng định uy tín quốc tế đỉnh cao và niềm tin sâu sắc của bạn bè quốc tế đối với Việt Nam."
      ]
    }
  ];

  // Keynotes Flashcards
  const flashcards = [
    {
      id: "fc1",
      question: "Nghị quyết HNTW 7 khóa XII (5/2018) ban hành 2 chính sách xã hội lớn nào?",
      answer: "Ban hành Nghị quyết Cải cách chính sách tiền lương và Nghị quyết Cải cách chính sách bảo hiểm xã hội (BHXH là trụ cột an sinh xã hội)."
    },
    {
      id: "fc2",
      question: "Tốc độ tăng trưởng GDP bình quân các giai đoạn 2001-2005, 2006-2010 và năm 2018?",
      answer: "2001-2005: 7,5%/năm; 2006-2010: 7%/năm (10 năm 2001-2010: 7,26%/năm); Năm 2018 đạt 7,08%."
    },
    {
      id: "fc3",
      question: "Quy mô GDP Việt Nam tăng từ năm 2000 đến năm 2010 như thế nào?",
      answer: "Tăng từ 35,3 tỷ USD (năm 2000) lên 101,6 tỷ USD (năm 2010), gấp 3,26 lần."
    },
    {
      id: "fc4",
      question: "GDP bình quân đầu người năm 2000, 2010 và 2018?",
      answer: "Năm 2000: 1.047 USD ➔ Năm 2010: 1.168 USD (gấp 3,3 lần) ➔ Năm 2018: 2.580 USD."
    },
    {
      id: "fc5",
      question: "Số liệu di tích và di sản được UNESCO vinh danh tính đến năm 2016?",
      answer: "7.484 di tích cấp tỉnh, 3.202 di tích cấp quốc gia, 48 di tích quốc gia đặc biệt và 15 di sản văn hóa/thiên nhiên thế giới được UNESCO vinh danh."
    },
    {
      id: "fc6",
      question: "Số việc làm mới bình quân được tạo ra mỗi năm và số người có công được chăm sóc?",
      answer: "Bình quân mỗi năm tạo ra 1,5 - 1,6 triệu việc làm mới; chăm sóc khoảng 8,8 triệu người có công (chiếm khoảng 10% dân số)."
    },
    {
      id: "fc7",
      question: "Tỷ lệ hộ nghèo đã giảm từ năm 1993 đến nay như thế nào?",
      answer: "Tỷ lệ hộ nghèo giảm từ 58% (năm 1993) xuống còn rất thấp, được Liên Hợp Quốc và cộng đồng quốc tế công nhận, đánh giá cao."
    },
    {
      id: "fc8",
      question: "4 Trụ cột chiến lược phát triển đất nước được Đảng khẳng định là gì?",
      answer: "'Phát triển kinh tế là trung tâm, Xây dựng Đảng là then chốt, Phát triển văn hóa là nền tảng tinh thần, Củng cố quốc phòng - an ninh là nhiệm vụ trọng yếu thường xuyên'."
    },
    {
      id: "fc9",
      question: "Chuyển biến phương châm đối ngoại của Đảng qua các thời kỳ Đổi mới?",
      answer: "Từ 'thêm bạn bớt thù' ➔ 'đa dạng hóa, đa phương hóa' ➔ 'muốn là bạn' ➔ 'là bạn, là đối tác tin cậy' ➔ 'thành viên có trách nhiệm của cộng đồng quốc tế'."
    },
    {
      id: "fc10",
      question: "Số lượng quốc gia Việt Nam đã thiết lập quan hệ ngoại giao và đối tác chiến lược đến 2018?",
      answer: "Thiết lập quan hệ ngoại giao với 188/193 nước LHQ; 16 Đối tác chiến lược và 11 Đối tác toàn diện."
    },
    {
      id: "fc11",
      question: "Cơ chế vận hành hệ thống chính trị Việt Nam là gì?",
      answer: "'Đảng lãnh đạo, Nhà nước quản lý, nhân dân làm chủ'."
    },
    {
      id: "fc12",
      question: "Nguyên nhân gốc rễ quyết định mọi thành tựu của công cuộc Đổi mới?",
      answer: "Đảng có đường lối Đổi mới đúng đắn, sáng tạo; nhận thức, vận dụng và phát triển sáng tạo chủ nghĩa Mác-Lênin, tư tưởng Hồ Chí Minh, được nhân dân hết lòng ủng hộ."
    }
  ];

  return (
    <div className="w-full space-y-10 pb-16 font-sans text-slate-800">
      
      {/* 📌 SECTION TIẾP NỐI: CHÍNH SÁCH Y TẾ, DÂN SỐ, TIỀN LƯƠNG & BHXH */}
      <section className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white rounded-2xl p-6 md:p-8 shadow-xl border border-blue-800/60 space-y-4">
        <div className="flex items-center gap-3 border-b border-blue-800/80 pb-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
            <Stethoscope className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">Tiếp nối Chính sách Xã hội (HNTW 7 khóa XII - 5/2018)</span>
            <h3 className="text-lg md:text-xl font-bold font-serif">Chăm Sóc Sức Khỏe, Cải Cách Tiền Lương & Bảo Hiểm Xã Hội</h3>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 text-xs md:text-sm">
          <div className="bg-blue-950/60 p-4 rounded-xl border border-blue-800/60 space-y-2">
            <div className="font-bold text-amber-300 flex items-center gap-1.5">
              <Heart className="w-4 h-4" />
              Y tế & Nguồn lực Con người
            </div>
            <p className="text-blue-100 leading-relaxed">
              Bảo vệ, chăm sóc và nâng cao sức khỏe là trách nhiệm của toàn xã hội, trong đó <strong>ngành y tế là nòng cốt</strong>. <em>"Đầu tư cho bảo vệ, chăm sóc sức khỏe nhân dân là đầu tư cho phát triển."</em>
            </p>
          </div>

          <div className="bg-blue-950/60 p-4 rounded-xl border border-blue-800/60 space-y-2">
            <div className="font-bold text-amber-300 flex items-center gap-1.5">
              <Coins className="w-4 h-4" />
              Cải cách Tiền lương & BHXH (5/2018)
            </div>
            <p className="text-blue-100 leading-relaxed">
              Tiền lương thực hiện theo nguyên tắc <strong>"phân phối theo lao động"</strong>. <strong>BHXH là một trụ cột chính của hệ thống an sinh xã hội</strong>, là nhiệm vụ của cả hệ thống chính trị.
            </p>
          </div>
        </div>
      </section>

      {/* 🌟 HERO BANNER: THÀNH TỰU CỦA SỰ NGHIỆP ĐỔI MỚI (MỤC 3.A) */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-950 via-red-900 to-amber-950 p-8 md:p-12 text-white shadow-2xl border border-red-800/40">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-80 h-80 bg-red-600/20 rounded-full blur-2xl pointer-events-none"></div>
        
        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs md:text-sm font-semibold backdrop-blur-md">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Mục II.3.a | Tổng kết Thành tựu 30+ Năm Đổi mới (1986 - 2018)</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-100 to-white font-serif">
            Thành Tựu To Lớn & Ý Nghĩa Lịch Sử Của Công Cuộc Đổi Mới
          </h1>

          <p className="text-red-100/90 text-base md:text-lg leading-relaxed max-w-3xl">
            Công cuộc Đổi mới mang <strong className="text-amber-300 font-semibold">tầm vóc và ý nghĩa lịch sử to lớn</strong>, là quá trình cải biến sâu sắc, toàn diện, triệt để vì mục tiêu <strong className="text-yellow-200">"Dân giàu, nước mạnh, dân chủ, công bằng, văn minh"</strong>, khẳng định con đường tiến lên CNXH là hoàn toàn đúng đắn.
          </p>

          {/* Quick stats highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-red-800/60">
            <div className="bg-red-950/60 backdrop-blur-sm p-3.5 rounded-xl border border-red-700/50">
              <div className="text-amber-400 text-xs font-semibold uppercase tracking-wider">Tăng trưởng GDP 2018</div>
              <div className="text-white font-bold text-base mt-1">7,08%/năm</div>
            </div>
            <div className="bg-red-950/60 backdrop-blur-sm p-3.5 rounded-xl border border-red-700/50">
              <div className="text-amber-400 text-xs font-semibold uppercase tracking-wider">GDP/Người (2018)</div>
              <div className="text-white font-bold text-base mt-1">2.580 USD</div>
            </div>
            <div className="bg-red-950/60 backdrop-blur-sm p-3.5 rounded-xl border border-red-700/50">
              <div className="text-amber-400 text-xs font-semibold uppercase tracking-wider">Quan hệ Ngoại giao</div>
              <div className="text-white font-bold text-base mt-1">188/193 Nước LHQ</div>
            </div>
            <div className="bg-red-950/60 backdrop-blur-sm p-3.5 rounded-xl border border-red-700/50">
              <div className="text-amber-400 text-xs font-semibold uppercase tracking-wider">Di sản UNESCO</div>
              <div className="text-white font-bold text-base mt-1">15 Di sản Thế giới</div>
            </div>
          </div>
        </div>
      </section>

      {/* 📌 KHỐI 1: ECONOMIC DASHBOARD (INTERACTIVE COUNTER CARDS) */}
      <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/80 space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
          <div className="w-10 h-10 rounded-xl bg-red-700 text-white flex items-center justify-center font-bold">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-serif">1. Dashboard Số Liệu Phát Triển Kinh Tế (1986 - 2018)</h2>
            <p className="text-xs md:text-sm text-slate-500">Tăng trưởng quy mô GDP, thu nhập bình quân và thể chế hóa pháp luật</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: GDP Tăng trưởng */}
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Tăng trưởng GDP Bình quân</div>
            <div className="text-2xl font-black text-red-700 font-serif">7,26%/năm</div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Giai đoạn 10 năm 2001-2010 đạt 7,26%/năm; năm 2018 đạt bứt phá 7,08%.
            </p>
          </div>

          {/* Card 2: Quy mô GDP */}
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Quy mô GDP (USD)</div>
            <div className="text-2xl font-black text-amber-600 font-serif">101,6 Tỷ $</div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Tăng từ 35,3 tỷ USD (năm 2000) lên 101,6 tỷ USD (2010), gấp 3,26 lần.
            </p>
          </div>

          {/* Card 3: Thu nhập đầu người */}
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">GDP / Đầu người (2018)</div>
            <div className="text-2xl font-black text-emerald-700 font-serif">2.580 USD</div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Tăng từ 1.047 USD (2000) lên 2.580 USD (2018), gấp hơn 2,4 lần.
            </p>
          </div>

          {/* Card 4: Thể chế hóa pháp luật */}
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Thể chế hóa Pháp luật</div>
            <div className="text-2xl font-black text-blue-700 font-serif">&gt; 180 Bộ Luật</div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Quốc hội sửa đổi, ban hành &gt; 180 bộ luật và &gt; 70 pháp lệnh trong 30 năm Đổi mới.
            </p>
          </div>
        </div>

        {/* Thủy điện & Hạ tầng lớn */}
        <div className="p-4 bg-amber-50/80 rounded-xl border border-amber-200 text-xs md:text-sm text-amber-950 space-y-1">
          <strong className="font-bold flex items-center gap-1 text-amber-900">
            <Landmark className="w-4 h-4 text-amber-600" />
            Các công trình hạ tầng và thủy điện hiện đại lớn:
          </strong>
          <p className="leading-relaxed">
            Hệ thống hạ tầng đường bộ, sân bay, bến cảng mở rộng. Xây dựng các nhà máy thủy điện công trình thế kỷ: <strong>Hòa Bình, Sơn La, Trị An, Tuyên Quang, Lai Châu</strong> và nhiều nhà máy nhiệt điện lớn.
          </p>
        </div>
      </section>

      {/* 📌 KHỐI 2: WIDGET CHUYÊN BIỆT 1 -- VĂN HÓA, XÃ HỘI & Y TẾ, AN SINH */}
      <section className="bg-gradient-to-br from-amber-500/10 via-amber-400/5 to-red-500/10 rounded-2xl p-6 md:p-8 border border-amber-300/60 shadow-sm space-y-6">
        <div className="flex items-center gap-3 border-b border-amber-200/60 pb-4">
          <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold shadow-md">
            <Heart className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-amber-800 uppercase tracking-wider">Thành tựu Xã hội</div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-serif">Văn Hóa, Y Tế, Giảm Nghèo & An Sinh Xã Hội</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 text-xs md:text-sm">
          {/* Card Văn hóa & UNESCO */}
          <div className="bg-white/90 backdrop-blur-sm p-5 rounded-xl border border-amber-200 space-y-2">
            <div className="font-bold text-amber-900 text-base flex items-center gap-1.5">
              <Star className="w-4 h-4 text-amber-600" />
              Văn hóa & Di sản UNESCO
            </div>
            <ul className="space-y-1 text-slate-700 leading-relaxed">
              <li>• <strong>7.484</strong> di tích cấp tỉnh, <strong>3.202</strong> di tích cấp quốc gia.</li>
              <li>• <strong>48</strong> di tích quốc gia đặc biệt.</li>
              <li>• <strong>15 di sản thế giới</strong> được UNESCO vinh danh.</li>
              <li>• Phong trào <em>"Toàn dân đoàn kết xây dựng đời sống văn hóa"</em> rộng khắp.</li>
            </ul>
          </div>

          {/* Card Việc làm & Người có công */}
          <div className="bg-white/90 backdrop-blur-sm p-5 rounded-xl border border-amber-200 space-y-2">
            <div className="font-bold text-red-950 text-base flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-red-600" />
              Việc làm & Chăm sóc Người có công
            </div>
            <ul className="space-y-1 text-slate-700 leading-relaxed">
              <li>• Tạo mới <strong>1,5 - 1,6 triệu việc làm/năm</strong>.</li>
              <li>• Chăm sóc khoảng <strong>8,8 triệu người có công</strong> (10% dân số).</li>
              <li>• <strong>1,4 triệu người</strong> hưởng trợ cấp thường xuyên.</li>
              <li>• Thu nhập thực tế sau 10 năm tăng gấp 1,5 lần.</li>
            </ul>
          </div>

          {/* Card Giảm nghèo & Phổ cập giáo dục */}
          <div className="bg-white/90 backdrop-blur-sm p-5 rounded-xl border border-amber-200 space-y-2">
            <div className="font-bold text-slate-900 text-base flex items-center gap-1.5">
              <Smile className="w-4 h-4 text-emerald-600" />
              Giảm nghèo & LHQ Công nhận
            </div>
            <ul className="space-y-1 text-slate-700 leading-relaxed">
              <li>• Tỷ lệ hộ nghèo giảm từ <strong>58% (1993)</strong> xuống rất thấp.</li>
              <li>• Đạt chuẩn <strong>Phổ cập Trung học cơ sở</strong> toàn quốc.</li>
              <li>• Đạt Mục tiêu Phát triển Thiên niên kỷ LHQ đề ra cho 2015.</li>
              <li>• LHQ và quốc tế đánh giá cao điểm sáng giảm nghèo.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 📌 KHỐI 3: WIDGET CHUYÊN BIỆT 2 -- QUỐC PHÒNG, AN NINH & CẮM MỐC BIÊN GIỚI */}
      <section className="bg-slate-900 text-white rounded-2xl p-6 md:p-8 shadow-xl space-y-6 border border-slate-800">
        <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
          <div className="w-10 h-10 rounded-xl bg-red-700 text-white flex items-center justify-center font-bold">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-red-400 uppercase tracking-wider">Nhiệm vụ Trọng yếu Thường xuyên</div>
            <h2 className="text-xl md:text-2xl font-bold font-serif text-white">Quốc Phòng, An Ninh & Bảo Vệ Chủ Quyền Biên Giới</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 text-xs md:text-sm">
          <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 space-y-2">
            <div className="font-bold text-amber-400 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              Vị trí Quốc phòng - An ninh
            </div>
            <p className="text-slate-300 leading-relaxed">
              Giữ vững độc lập, chủ quyền, thống nhất, toàn vẹn lãnh thổ và chế độ XHCN. Kết hợp chặt chẽ phát triển kinh tế với củng cố quốc phòng, an ninh.
            </p>
          </div>

          <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 space-y-2">
            <div className="font-bold text-amber-400 flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              Biên giới Đất liền Việt - Trung
            </div>
            <p className="text-slate-300 leading-relaxed">
              Hoàn thành thắng lợi công tác <strong className="text-white">phân giới cắm mốc đường biên giới đất liền</strong> và phân định Vịnh Bắc Bộ với Trung Quốc.
            </p>
          </div>

          <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 space-y-2">
            <div className="font-bold text-amber-400 flex items-center gap-1.5">
              <Compass className="w-4 h-4" />
              Biên giới Việt - Lào & Campuchia
            </div>
            <p className="text-slate-300 leading-relaxed">
              Thống nhất hoàn thành phân giới cắm mốc biên giới đất liền với Lào và Campuchia, xây dựng biên giới hòa bình, hữu nghị.
            </p>
          </div>
        </div>
      </section>

      {/* 📌 KHỐI 4: INTERACTIVE DIPLOMACY TIMELINE (CÁC MỐC ĐỐI NGOẠI BỨT PHÁ) */}
      <section className="bg-slate-900 text-white rounded-2xl p-6 md:p-8 shadow-xl space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-900 flex items-center justify-center font-bold">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold font-serif text-amber-300">2. Dòng Thời Gian Đột Phá Đối Ngoại & Hội Nhập Quốc Tế</h2>
              <p className="text-xs md:text-sm text-slate-400">Nhấp vào từng mốc lịch sử đối ngoại để xem chi tiết</p>
            </div>
          </div>
          <span className="text-xs font-semibold px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full self-start md:self-auto">
            {diplomacyEvents.length} Mốc Lịch sử
          </span>
        </div>

        {/* Timeline Nav Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-thin scrollbar-thumb-slate-700">
          {diplomacyEvents.map((evt, idx) => {
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
        {diplomacyEvents[selectedTimelineIndex] && (
          <div className="bg-slate-800/90 rounded-xl p-6 border border-slate-700 space-y-4 transition-all">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700/80 pb-3">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-red-600/30 text-red-300 font-mono font-bold text-xs md:text-sm rounded-md border border-red-500/30">
                  {diplomacyEvents[selectedTimelineIndex].date}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  {diplomacyEvents[selectedTimelineIndex].location}
                </span>
              </div>
              <span className="text-xs font-bold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-md">
                {selectedTimelineIndex + 1} / {diplomacyEvents.length}
              </span>
            </div>

            <h3 className="text-xl font-bold text-white font-serif">
              {diplomacyEvents[selectedTimelineIndex].title}
            </h3>

            <p className="text-slate-300 text-sm leading-relaxed bg-slate-900/50 p-3.5 rounded-lg border border-slate-800">
              {diplomacyEvents[selectedTimelineIndex].summary}
            </p>

            <div className="space-y-2 pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                Nội dung chi tiết & Ý nghĩa chiến lược:
              </div>
              <ul className="grid md:grid-cols-2 gap-2 text-xs md:text-sm text-slate-300">
                {diplomacyEvents[selectedTimelineIndex].details.map((detail, dIdx) => (
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

      {/* 📌 KHỐI 5: WIDGET CHUYÊN BIỆT 3 -- 4 TRỤ CỘT CHIẾN LƯỢC CỦA ĐẢNG */}
      <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/80 space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
          <div className="w-10 h-10 rounded-xl bg-red-700 text-white flex items-center justify-center font-bold">
            <Flag className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-serif">3. 4 Trụ Cột Chiến Lược Phát Triển Đất Nước</h2>
            <p className="text-xs md:text-sm text-slate-500">Định hướng chỉ đạo nhất quán xuyên suốt sự nghiệp Đổi mới</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-2">
            <div className="text-xs font-bold text-amber-800 uppercase tracking-wider">Trụ cột 1</div>
            <h4 className="font-bold text-amber-950 text-base">Kinh tế là trung tâm</h4>
            <p className="text-xs text-slate-700 leading-relaxed">
              Phát triển kinh tế là nhiệm vụ trung tâm, tạo tiềm lực vật chất cho đất nước.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-red-50/70 border border-red-200 space-y-2">
            <div className="text-xs font-bold text-red-800 uppercase tracking-wider">Trụ cột 2</div>
            <h4 className="font-bold text-red-950 text-base">Xây dựng Đảng là then chốt</h4>
            <p className="text-xs text-slate-700 leading-relaxed">
              Xây dựng Đảng là nhiệm vụ then chốt, quyết định sự sống còn của chế độ.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-2">
            <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider">Trụ cột 3</div>
            <h4 className="font-bold text-emerald-950 text-base">Văn hóa là nền tảng</h4>
            <p className="text-xs text-slate-700 leading-relaxed">
              Phát triển văn hóa là nền tảng tinh thần của xã hội, vừa là mục tiêu vừa là động lực.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200 space-y-2">
            <div className="text-xs font-bold text-blue-800 uppercase tracking-wider">Trụ cột 4</div>
            <h4 className="font-bold text-blue-950 text-base">QP-AN là trọng yếu thường xuyên</h4>
            <p className="text-xs text-slate-700 leading-relaxed">
              Củng cố quốc phòng - an ninh là nhiệm vụ trọng yếu, thường xuyên của toàn dân.
            </p>
          </div>
        </div>
      </section>

      {/* 📌 KHỐI 6: THẺ FLASHCARD TỰ ÔN TẬP TỪ KHÓA THÀNH TỰU ĐỔI MỚI */}
      <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/80 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-900 flex items-center justify-center font-bold">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-serif">4. Thẻ Ghi Nhớ Từ Khóa Ôn Thi Thành Tựu Đổi Mới (Flashcards)</h2>
              <p className="text-xs md:text-sm text-slate-500">Nhấp vào từng thẻ để lật xem đáp án ghi nhớ nhanh</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
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
