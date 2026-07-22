"use client";
import React, { useState } from "react";
import { 
  Calendar, Users, Award, BookOpen, ChevronRight, CheckCircle2, 
  Sparkles, Target, Star, Flag, Clock, ShieldCheck, Heart, 
  Layers, Lightbulb, Zap, ArrowRight, RotateCcw, Bookmark, ExternalLink,
  TrendingUp, Globe, Shield, Scale, HelpCircle, Eye, UserCheck, Flame,
  FileText, MessagesSquare, CheckSquare, BarChart3, Landmark, ListOrdered
} from "lucide-react";

export default function LsdRecapFullHub() {
  // Flashcard flip states
  const [flippedCards, setFlippedCards] = useState({});

  // Active question accordion index
  const [openQuestionIndex, setOpenQuestionIndex] = useState(0);

  const toggleCardFlip = (id) => {
    setFlippedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // 5 Discussion Questions from Curriculum
  const curriculumQuestions = [
    {
      id: "q1",
      num: "01",
      question: "Khái quát quá trình xây dựng chủ nghĩa xã hội trong cả nước và quá trình tìm con đường đổi mới đất nước (1975 - 1986).",
      outline: [
        "Giai đoạn 1975 - 1981: Đất nước thống nhất, bước đầu tìm tòi con đường đổi mới qua HNTW 6 khóa IV (8/1979) cởi mở sản xuất.",
        "Chỉ thị 100-CT/TW (1/1981) về khoán sản phẩm trong nông nghiệp và Nghị định 25-CP trong công nghiệp.",
        "Giai đoạn 1981 - 1985: Khủng hoảng kinh tế - xã hội trầm trọng, lạm phát tăng cao (đỉnh điểm 774.7% năm 1986).",
        "Hội nghị Trung ương 8 khóa V (8/1985) dứt khoát xóa bỏ cơ chế tập trung bao cấp, thừa nhận sản xuất hàng hóa.",
        "Ý nghĩa: Chuẩn bị tiền đề lý luận và thực tiễn cho sự ra đời của Đường lối Đổi mới toàn diện tại Đại hội VI (12/1986)."
      ]
    },
    {
      id: "q2",
      num: "02",
      question: "Nội dung Đường lối toàn diện của Đại hội VI (12-1986) và quá trình thực hiện.",
      outline: [
        "Đại hội VI (12/1986) - Đại hội mở đầu công cuộc Đổi mới với tinh thần 'Nhìn thẳng vào sự thật, đánh giá đúng sự thật, nói rõ sự thật'.",
        "Nội dung cốt lõi: Đổi mới cơ cấu kinh tế, tập trung thực hiện 3 Chương trình kinh tế lớn: (1) Lương thực - thực phẩm, (2) Hàng tiêu dùng, (3) Hàng xuất khẩu.",
        "Đổi mới cơ chế quản lý: Xóa bỏ cơ chế tập trung bao cấp, chuyển sang kinh tế nhiều thành phần.",
        "Đổi mới tư duy đối ngoại: Từ 'thêm bạn bớt thù' ➔ chủ động phá thế bị bao vây cấm vận.",
        "Kết quả: Đất nước vượt qua giai đoạn hiểm nghèo nhất của khủng hoảng, tạo đà phát triển cho các giai đoạn tiếp theo."
      ]
    },
    {
      id: "q3",
      num: "03",
      question: "Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội (năm 1991 và bổ sung năm 2011).",
      outline: [
        "Cương lĩnh 1991 (Đại hội VII): Nêu 6 đặc trưng của xã hội XHCN và 7 phương hướng lớn; khẳng định chủ nghĩa Mác-Lênin, tư tưởng Hồ Chí Minh là nền tảng tư tưởng.",
        "Cương lĩnh 2011 (Đại hội XI - Bổ sung phát triển): Nêu 8 đặc trưng của xã hội XHCN và 8 phương hướng lớn.",
        "Đặc trưng tổng quát mới (2011): 'Dân giàu, nước mạnh, dân chủ, công bằng, văn minh'.",
        "Bổ sung đặc trưng quan trọng: 'Có Nhà nước pháp quyền xã hội chủ nghĩa của nhân dân, do nhân dân, vì nhân dân do Đảng Cộng sản lãnh đạo'.",
        "Ý nghĩa: Cương lĩnh 2011 là ngọn cờ chiến lược dẫn dắt dân tộc ta tiếp tục đẩy mạnh toàn diện công cuộc Đổi mới."
      ]
    },
    {
      id: "q4",
      num: "04",
      question: "Vai trò lãnh đạo của Đảng đối với sự nghiệp đổi mới, công nghiệp hóa hiện đại hóa đất nước và hội nhập quốc tế.",
      outline: [
        "Đảng là nhân tố quyết định mọi thắng lợi của cách mạng Việt Nam và sự nghiệp Đổi mới.",
        "Đảng hoạch định đường lối đúng đắn, sáng tạo, hợp quy luật và hợp lòng dân.",
        "Đảng lãnh đạo thể chế hóa đường lối thành Hiến pháp, pháp luật, cơ chế chính sách của Nhà nước.",
        "Đảng không ngừng tự đổi mới, tự chỉnh đốn, nâng cao năng lực cầm quyền và sức chiến đấu.",
        "Đảng luôn giữ vững mối quan hệ máu thịt với Nhân dân, lấy 'Dân là gốc' và đại diện cho lợi ích tối cao của dân tộc."
      ]
    },
    {
      id: "q5",
      num: "05",
      question: "Thành tựu, ý nghĩa lịch sử và 5 bài học kinh nghiệm lãnh đạo của Đảng trong sự nghiệp đổi mới.",
      outline: [
        "Thành tựu: Đưa đất nước ra khỏi tình trạng kém phát triển, trở thành nước đang phát triển có thu nhập trung bình (2008); quy mô GDP đạt >100 tỷ USD (2010), GDP/người 2.580 USD (2018); vị thế quốc tế nâng cao.",
        "Ý nghĩa lịch sử: Đổi mới mang tầm vóc lịch sử to lớn, khẳng định con đường đi lên CNXH của Việt Nam là phù hợp với thực tiễn.",
        "5 Bài học kinh nghiệm chiến lược: (1) Chủ động sáng tạo & kiên định mục tiêu; (2) Đổi mới vì nhân dân 'Dân là gốc'; (3) Đồng bộ có bước đi phù hợp; (4) Lợi ích quốc gia - dân tộc lên trên hết; (5) Tự đổi mới tự chỉnh đốn Đảng (cán bộ là khâu then chốt)."
      ]
    }
  ];

  // Flashcards List
  const flashcards = [
    {
      id: "fc1",
      question: "Tốc độ tăng trưởng GDP bình quân 10 năm 2001-2010 và năm 2018?",
      answer: "10 năm 2001-2010: 7,26%/năm; Năm 2018 đạt 7,08% (hoặc 6,7%)."
    },
    {
      id: "fc2",
      question: "Quy mô GDP Việt Nam năm 2000 so với năm 2010 tăng gấp mấy lần?",
      answer: "Tăng từ 35,2 tỷ USD (2000) lên 101,6 tỷ USD (2010), gấp 3,26 lần."
    },
    {
      id: "fc3",
      question: "GDP bình quân đầu người năm 2000, 2010 và năm 2018?",
      answer: "Năm 2000: 1.047 USD ➔ Năm 2010: 1.168 USD ➔ Năm 2018: Hơn 2.580 USD."
    },
    {
      id: "fc4",
      question: "Chỉ số HDI Việt Nam năm 2000 và 2008?",
      answer: "Năm 2000 đạt 0,683 ➔ Năm 2008 đạt 0,733 (xếp hạng 100/177 quốc gia)."
    },
    {
      id: "fc5",
      question: "Tỷ lệ hộ nghèo cả nước đã giảm từ năm 1993 đến năm 2018 như thế nào?",
      answer: "Tỷ lệ hộ nghèo giảm từ 58% (năm 1993) xuống còn khoảng 6% (năm 2018)."
    },
    {
      id: "fc6",
      question: "Số lượng quốc gia Việt Nam có quan hệ ngoại giao và số lượng đối tác chiến lược năm 2018?",
      answer: "188/193 nước thành viên LHQ; 16 Đối tác chiến lược và 11 Đối tác toàn diện."
    },
    {
      id: "fc7",
      question: "Số phiếu bầu kỷ lục Việt Nam đạt được khi làm Ủy viên Không thường trực HĐBA LHQ (2020-2021)?",
      answer: "Đạt 192/193 phiếu ủng hộ."
    },
    {
      id: "fc8",
      question: "Diễn tiến 4 nấc thang chuyển biến khẩu hiệu phương châm đối ngoại của Đảng?",
      answer: "'Muốn là bạn' ➔ 'Sẵn sàng là bạn' ➔ 'Là bạn, là đối tác tin cậy' ➔ 'Thành viên có trách nhiệm của cộng đồng quốc tế'."
    },
    {
      id: "fc9",
      question: "Diễn tiến 3 giai đoạn hội nhập kinh tế quốc tế của nước ta?",
      answer: "'Phá thế bị bao vây cấm vận' ➔ 'Hội nhập vào nền kinh tế khu vực và thế giới' ➔ 'Chủ động và tích cực hội nhập quốc tế toàn diện'."
    },
    {
      id: "fc10",
      question: "Khẩu hiệu tổng quát về mục tiêu xây dựng đất nước được bổ sung trong Cương lĩnh 2011?",
      answer: "'Dân giàu, nước mạnh, dân chủ, công bằng, văn minh'."
    },
    {
      id: "fc11",
      question: "Đại hội nào của Đảng lần đầu tiên khẳng định lấy chủ nghĩa Mác-Lênin, tư tưởng Hồ Chí Minh làm nền tảng tư tưởng?",
      answer: "Đại hội đại biểu toàn quốc lần thứ VII của Đảng (năm 1991)."
    },
    {
      id: "fc12",
      question: "Nghị quyết HNTW 4 khóa XII (10/2016) khẳng định thành tựu Đổi mới mang lại kết quả gì?",
      answer: "Khẳng định công cuộc Đổi mới đã 'Tạo thế và lực mới của đất nước'."
    },
    {
      id: "fc13",
      question: "Ba đặc trưng kinh tế nổi bật của Việt Nam sau hơn 30 năm Đổi mới?",
      answer: "Kinh tế vĩ mô ổn định - Thu nhập trung bình - HDI thuộc nhóm trung bình cao."
    },
    {
      id: "fc14",
      question: "Bốn nguy cơ lớn đối với sự nghiệp cách mạng được Hội nghị giữa nhiệm kỳ khóa VII (1994) nêu lên?",
      answer: "Tụt hậu kinh tế, Chệch hướng XHCN, Tham nhũng quan liêu, Diễn biến hòa bình."
    },
    {
      id: "fc15",
      question: "Nội dung cốt lõi của 3 Chương trình kinh tế lớn do Đại hội VI (12/1986) đề ra?",
      answer: "(1) Lương thực - thực phẩm, (2) Hàng tiêu dùng, (3) Hàng xuất khẩu."
    }
  ];

  return (
    <div className="w-full space-y-10 pb-16 font-sans text-slate-800">
      
      {/* 🌟 MEGA REVIEW HERO BANNER */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-950 via-red-900 to-amber-950 p-8 md:p-12 text-white shadow-2xl border border-red-800/40">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs md:text-sm font-semibold backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Mục II.3 | Tổng Ôn Cốt Lõi Lịch Sử Đảng (1986 - 2018)</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-100 to-white font-serif">
            Bảng Số Liệu, Từ Khóa Ôn Thi & Dàn Bài 5 Câu Hỏi Giáo Trình
          </h1>

          <p className="text-red-100/90 text-base md:text-lg leading-relaxed max-w-3xl">
            Tổng hợp toàn bộ <strong className="text-amber-300">số liệu thống kê vàng</strong>, <strong className="text-yellow-200">ma trận từ khóa ôn thi cốt lõi</strong> và dàn ý trả lời chi tiết cho <strong className="text-amber-300">5 câu hỏi thảo luận giáo trình Lịch sử Đảng</strong>.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-red-800/60">
            <div className="bg-red-950/60 backdrop-blur-sm p-3.5 rounded-xl border border-red-700/50">
              <div className="text-amber-400 text-xs font-semibold uppercase tracking-wider">GDP 2010</div>
              <div className="text-white font-bold text-base mt-1">101,6 Tỷ USD</div>
            </div>
            <div className="bg-red-950/60 backdrop-blur-sm p-3.5 rounded-xl border border-red-700/50">
              <div className="text-amber-400 text-xs font-semibold uppercase tracking-wider">HDI 2008</div>
              <div className="text-white font-bold text-base mt-1">0,733 (#100)</div>
            </div>
            <div className="bg-red-950/60 backdrop-blur-sm p-3.5 rounded-xl border border-red-700/50">
              <div className="text-amber-400 text-xs font-semibold uppercase tracking-wider">Hộ nghèo 2018</div>
              <div className="text-white font-bold text-base mt-1">~ 6% (Từ 58%)</div>
            </div>
            <div className="bg-red-950/60 backdrop-blur-sm p-3.5 rounded-xl border border-red-700/50">
              <div className="text-amber-400 text-xs font-semibold uppercase tracking-wider">Nội dung ôn tập</div>
              <div className="text-white font-bold text-base mt-1">5 Câu Hỏi Giáo Trình</div>
            </div>
          </div>
        </div>
      </section>

      {/* 📌 KHỐI 1: BẢNG TỔNG HỢP SỐ LIỆU ĐỂ NHỚ (DIGITAL DATA COUNTER DASHBOARD) */}
      <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/80 space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
          <div className="w-10 h-10 rounded-xl bg-red-700 text-white flex items-center justify-center font-bold">
            <BarChart3 className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold text-red-700 uppercase tracking-wider">Số liệu cốt lõi</span>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-serif">1. Bảng Tổng Hợp Số Liệu Để Nhớ (Thành Tựu Đổi Mới)</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs md:text-sm">
          {/* Card 1: Tăng trưởng GDP */}
          <div className="bg-slate-50 p-4.5 rounded-xl border border-slate-200 space-y-1.5">
            <div className="font-bold text-red-800 text-sm flex items-center justify-between">
              <span>Tăng trưởng GDP Bình quân</span>
              <TrendingUp className="w-4 h-4 text-red-600" />
            </div>
            <ul className="space-y-1 text-slate-700 leading-relaxed">
              <li>• 2001 - 2005: <strong>7,5%/năm</strong></li>
              <li>• 2006 - 2010: <strong>7%/năm</strong> (10 năm: <strong>7,26%/năm</strong>)</li>
              <li>• 2011 - 2015: <strong>5,9%/năm</strong></li>
              <li>• Năm 2018: <strong>7,08%</strong> (hoặc 6,7%)</li>
            </ul>
          </div>

          {/* Card 2: Quy mô & Đầu người */}
          <div className="bg-slate-50 p-4.5 rounded-xl border border-slate-200 space-y-1.5">
            <div className="font-bold text-amber-800 text-sm flex items-center justify-between">
              <span>Quy mô GDP & Thu nhập Đầu người</span>
              <Landmark className="w-4 h-4 text-amber-600" />
            </div>
            <ul className="space-y-1 text-slate-700 leading-relaxed">
              <li>• GDP 2000: <strong>35,2 tỷ USD</strong></li>
              <li>• GDP 2010: <strong>101,6 tỷ USD</strong> (gấp 3,26 lần)</li>
              <li>• GDP/người 2000: <strong>1.047 USD</strong></li>
              <li>• GDP/người 2010: <strong>1.168 USD</strong> ➔ 2018: <strong>&gt; 2.580 USD</strong></li>
            </ul>
          </div>

          {/* Card 3: HDI & Xã hội */}
          <div className="bg-slate-50 p-4.5 rounded-xl border border-slate-200 space-y-1.5">
            <div className="font-bold text-emerald-800 text-sm flex items-center justify-between">
              <span>HDI & An sinh Xã hội</span>
              <Heart className="w-4 h-4 text-emerald-600" />
            </div>
            <ul className="space-y-1 text-slate-700 leading-relaxed">
              <li>• HDI 2000 (0,683) ➔ 2008 (<strong>0,733</strong>, xếp 100/177)</li>
              <li>• Tỷ lệ hộ nghèo: 1993 (<strong>58%</strong>) ➔ 2018 (<strong>~ 6%</strong>)</li>
              <li>• Xã nông thôn mới (2018): <strong>&gt; 38%</strong></li>
              <li>• Người có công: <strong>~ 8,8 triệu</strong> (~10% dân số)</li>
            </ul>
          </div>

          {/* Card 4: Đối ngoại */}
          <div className="bg-slate-50 p-4.5 rounded-xl border border-slate-200 space-y-1.5 lg:col-span-3">
            <div className="font-bold text-blue-900 text-sm flex items-center gap-2">
              <Globe className="w-4 h-4 text-blue-600" />
              Chỉ số Đối ngoại & Hội nhập Quốc tế (Đến 2018)
            </div>
            <div className="grid md:grid-cols-3 gap-2 pt-1 text-slate-700">
              <div className="bg-white p-2.5 rounded-lg border border-slate-200">
                Quan hệ Ngoại giao: <strong>188 / 193</strong> nước LHQ
              </div>
              <div className="bg-white p-2.5 rounded-lg border border-slate-200">
                Đối tác chiến lược / toàn diện: <strong>16 / 11</strong> nước
              </div>
              <div className="bg-white p-2.5 rounded-lg border border-slate-200">
                Ủy viên HĐBA LHQ (2020-2021): <strong>192 / 193</strong> phiếu
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 📌 KHỐI 2: TỪ KHÓA ÔN THI & KHẨU HIỆU CẦN GHI NHỚ (INTERACTIVE MATRIX) */}
      <section className="bg-gradient-to-br from-amber-500/10 via-amber-400/5 to-red-500/10 rounded-2xl p-6 md:p-8 border border-amber-300/60 shadow-sm space-y-6">
        <div className="flex items-center gap-3 border-b border-amber-200/60 pb-4">
          <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold shadow-md">
            <Bookmark className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-amber-800 uppercase tracking-wider">Từ khóa trọng tâm</div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-serif">2. Từ Khóa Ôn Thi & Khẩu Hiệu Cần Ghi Nhớ</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 text-xs md:text-sm">
          {/* Card Tiến trình Khẩu hiệu Ngoại giao & Hội nhập */}
          <div className="bg-white/90 backdrop-blur-sm p-5 rounded-xl border border-amber-200 space-y-3">
            <h3 className="font-bold text-amber-900 text-base flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-amber-600" />
              Sự Chuyển Biến Tư Duy Ngoại Giao & Hội Nhập
            </h3>
            
            <div className="space-y-2">
              <div className="font-semibold text-slate-800">Phương châm Ngoại giao:</div>
              <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-amber-950 font-medium space-y-1">
                <div>"Muốn là bạn" ➔ "Sẵn sàng là bạn"</div>
                <div>➔ "Là bạn, là đối tác tin cậy"</div>
                <div>➔ <strong className="text-red-700 text-xs md:text-sm">"Thành viên có trách nhiệm của cộng đồng quốc tế"</strong></div>
              </div>
            </div>

            <div className="space-y-2 pt-1">
              <div className="font-semibold text-slate-800">Tiến trình Hội nhập:</div>
              <div className="p-3 bg-red-50 rounded-lg border border-red-200 text-red-950 font-medium space-y-1">
                <div>"Phá thế bị bao vây, cấm vận"</div>
                <div>➔ "Hội nhập vào nền kinh tế khu vực và thế giới"</div>
                <div>➔ <strong className="text-red-700 text-xs md:text-sm">"Chủ động và tích cực hội nhập quốc tế toàn diện"</strong></div>
              </div>
            </div>
          </div>

          {/* Card Khẩu hiệu cốt lõi */}
          <div className="bg-white/90 backdrop-blur-sm p-5 rounded-xl border border-amber-200 space-y-3">
            <h3 className="font-bold text-red-950 text-base flex items-center gap-2">
              <Flag className="w-4 h-4 text-red-600" />
              Khẩu Hiệu & Đường Lối Cốt Lõi
            </h3>
            
            <ul className="space-y-2.5 text-slate-800 font-medium leading-relaxed">
              <li className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                🇮🇩 <strong>"Dân giàu, nước mạnh, dân chủ, công bằng, văn minh"</strong> (Đặc trưng Cương lĩnh 2011).
              </li>
              <li className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                🏛️ <strong>"Đảng lãnh đạo, Nhà nước quản lý, nhân dân làm chủ"</strong> (Cơ chế hệ thống chính trị).
              </li>
              <li className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                📕 <strong>"Đảng lấy chủ nghĩa Mác-Lênin, tư tưởng Hồ Chí Minh làm nền tảng tư tưởng, kim chỉ nam cho hành động"</strong> (Đại hội VII - 1991).
              </li>
              <li className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                🌾 <strong>"Dân là gốc"</strong> -- Nguồn gốc đường lối xuất phát từ thực tiễn và nguyện vọng nhân dân.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 📌 KHỐI 3: INTERACTIVE REVIEW PANEL (5 CÂU HỎI TỰ LUẬN GIÁO TRÌNH) */}
      <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/80 space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
          <div className="w-10 h-10 rounded-xl bg-red-700 text-white flex items-center justify-center font-bold">
            <MessagesSquare className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold text-red-700 uppercase tracking-wider">Thảo luận giáo trình</span>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-serif">3. Dàn Bài Gợi Ý 5 Câu Hỏi Ôn Tập & Thảo Luận Giáo Trình</h2>
            <p className="text-xs md:text-sm text-slate-500">Nhấp vào từng câu hỏi để mở/đóng dàn ý luận điểm chi tiết</p>
          </div>
        </div>

        <div className="space-y-4">
          {curriculumQuestions.map((q, idx) => {
            const isOpen = openQuestionIndex === idx;
            return (
              <div key={q.id} className="border border-slate-200 rounded-2xl overflow-hidden transition-all shadow-sm">
                <button
                  onClick={() => setOpenQuestionIndex(isOpen ? -1 : idx)}
                  className={`w-full p-5 text-left flex items-center justify-between gap-4 font-serif transition-colors ${
                    isOpen ? "bg-red-900 text-white" : "bg-slate-50 hover:bg-red-50/50 text-slate-900"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span className={`w-8 h-8 rounded-xl text-xs font-bold flex items-center justify-center shrink-0 ${
                      isOpen ? "bg-amber-400 text-slate-950" : "bg-red-100 text-red-800"
                    }`}>
                      {q.num}
                    </span>
                    <h3 className="font-bold text-sm md:text-base leading-snug">
                      {q.question}
                    </h3>
                  </div>
                  <ChevronRight className={`w-5 h-5 shrink-0 transition-transform ${isOpen ? "rotate-90 text-amber-300" : "text-slate-400"}`} />
                </button>

                {isOpen && (
                  <div className="p-6 bg-white space-y-3 text-xs md:text-sm text-slate-700 border-t border-slate-100">
                    <div className="font-bold text-red-800 uppercase tracking-wider text-xs flex items-center gap-1.5">
                      <ListOrdered className="w-4 h-4" />
                      Dàn ý Luận điểm Trả lời Trọng tâm:
                    </div>
                    <div className="space-y-2 pl-2">
                      {q.outline.map((line, lIdx) => (
                        <div key={lIdx} className="flex items-start gap-2.5 bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                          <span className="text-red-700 font-bold text-xs shrink-0">Point {lIdx + 1}:</span>
                          <span className="leading-relaxed">{line}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 📌 KHỐI 4: THẺ FLASHCARD TỰ ÔN TẬP TỔNG HỢP (15 THẺ LẬT) */}
      <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/80 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-900 flex items-center justify-center font-bold">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-serif">4. Thẻ Ghi Nhớ Từ Khóa & Số Liệu Tổng Ôn (Flashcards)</h2>
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
