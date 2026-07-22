"use client";
import React, { useState } from "react";
import { 
  Calendar, Users, Award, BookOpen, ChevronRight, CheckCircle2, 
  Sparkles, Target, Star, Flag, Clock, ShieldCheck, Heart, 
  Layers, Lightbulb, Zap, ArrowRight, RotateCcw, Bookmark, ExternalLink,
  Globe, Shield, TrendingUp, Building2, UserCheck, Scale
} from "lucide-react";

export default function LsdCongress9FullContent() {
  // Timeline interactive selection state
  const [selectedTimelineIndex, setSelectedTimelineIndex] = useState(0);
  
  // Flashcard flip states
  const [flippedCards, setFlippedCards] = useState({});

  // Active view tab for grid cards
  const [activeTab, setActiveTab] = useState("breakthroughs");

  const toggleCardFlip = (id) => {
    setFlippedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Timeline events data for Congress IX (2001 - 2006)
  const timelineEvents = [
    {
      date: "19 - 22/4/2001",
      title: "Đại hội Đại biểu Toàn quốc lần thứ IX",
      location: "Hà Nội",
      badge: "Đại hội IX",
      summary: "1.168 đại biểu thay mặt hơn 2,2 triệu đảng viên. Bầu BCH TW 150 ủy viên, Bộ Chính trị 15 đồng chí. Đồng chí Nông Đức Mạnh được bầu làm Tổng Bí thư. Thông qua Chiến lược phát triển kinh tế - xã hội 10 năm (2001-2010).",
      details: [
        "Đồng chí Nông Đức Mạnh được bầu làm Tổng Bí thư BCH Trung ương Đảng.",
        "Thông qua 'Chiến lược phát triển kinh tế - xã hội 2001-2010': Phấn đấu đưa nước ta ra khỏi tình trạng kém phát triển vào năm 2008, GDP 2010 gấp đôi năm 2000.",
        "Đưa ra định nghĩa chính thức hoàn chỉnh về Tư tưởng Hồ Chí Minh.",
        "Xác định mô hình kinh tế tổng quát: Nền kinh tế thị trường định hướng xã hội chủ nghĩa."
      ]
    },
    {
      date: "9/2001",
      title: "Hội nghị Trung ương 3 khóa IX",
      location: "Hà Nội",
      badge: "TW3 - Doanh nghiệp Nhà nước",
      summary: "Nghị quyết về tiếp tục sắp xếp, đổi mới, phát triển và nâng cao hiệu quả doanh nghiệp nhà nước (DNNN).",
      details: [
        "Đẩy mạnh cổ phần hóa, sắp xếp lại các doanh nghiệp nhà nước.",
        "Nâng cao sức cạnh tranh và hiệu quả hoạt động của kinh tế nhà nước."
      ]
    },
    {
      date: "3/2002",
      title: "Hội nghị Trung ương 5 khóa IX",
      location: "Hà Nội",
      badge: "TW5 - KT Tư nhân & Tập thể",
      summary: "Ban hành các Nghị quyết đột phá về phát triển kinh tế tập thể, kinh tế tư nhân và công tác tư tưởng, lý luận.",
      details: [
        "Kinh tế tư nhân: Coi 'Kinh tế tư nhân là bộ phận cấu thành quan trọng của nền kinh tế quốc dân', là vấn đề chiến lược lâu dài.",
        "Kinh tế tập thể: Thống nhất nhận thức về sự cần thiết phát triển hợp tác xã kiểu mới.",
        "Công tác tư tưởng, lý luận: Làm sáng tỏ lý luận CNH, chống 'diễn biến hòa bình'."
      ]
    },
    {
      date: "3/2003",
      title: "Hội nghị Trung ương 7 khóa IX",
      location: "Hà Nội",
      badge: "TW7 - Đất đai, Dân tộc, Tôn giáo",
      summary: "Ban hành Nghị quyết về chính sách đất đai và bộ 3 Nghị quyết quan trọng về Đại đoàn kết dân tộc, công tác dân tộc và công tác tôn giáo.",
      details: [
        "Đất đai: Quyền sử dụng đất là hàng hóa đặc biệt, đất đai thuộc sở hữu toàn dân do Nhà nước đại diện chủ sở hữu.",
        "Đại đoàn kết: Đường lối chiến lược, nguồn sức mạnh và động lực chủ yếu phát triển đất nước.",
        "Dân tộc & Tôn giáo: Tôn trọng tự do tín ngưỡng, đoàn kết dân tộc là chiến lược cơ bản lâu dài."
      ]
    },
    {
      date: "27/3/2003",
      title: "Chỉ thị số 23-CT/TW của Ban Bí thư",
      location: "Hà Nội",
      badge: "Chỉ thị 23 - Tư tưởng HCM",
      summary: "Ban Bí thư ban hành Chỉ thị số 23-CT/TW về đẩy mạnh nghiên cứu, tuyên truyền, giáo dục tư tưởng Hồ Chí Minh trong giai đoạn mới.",
      details: [
        "Quán triệt định nghĩa Tư tưởng Hồ Chí Minh của Đại hội IX vào công tác giảng dạy, nghiên cứu.",
        "Chuẩn bị tiền đề cho Cuộc vận động Học tập và làm theo gương Bác."
      ]
    },
    {
      date: "7/2003",
      title: "Hội nghị Trung ương 8 khóa IX",
      location: "Hà Nội",
      badge: "TW8 - Bảo vệ Tổ quốc",
      summary: "Ban hành 'Chiến lược Bảo vệ Tổ quốc trong tình hình mới' sau sự kiện 11/9/2001 tại Mỹ.",
      details: [
        "Mục tiêu: Bảo vệ độc lập, chủ quyền, toàn vẹn lãnh thổ; bảo vệ Đảng, Nhà nước, nhân dân và chế độ XHCN; giữ vững an ninh chính trị, môi trường hòa bình.",
        "Quan điểm: Kết hợp chặt chẽ 2 nhiệm vụ chiến lược Xây dựng và Bảo vệ Tổ quốc; giữ vững vai trò lãnh đạo tuyệt đối của Đảng."
      ]
    },
    {
      date: "3/2004",
      title: "Nghị quyết số 36-NQ/TW của Bộ Chính trị",
      location: "Hà Nội",
      badge: "NQ36 - Kiều bào nước ngoài",
      summary: "Bộ Chính trị ban hành Nghị quyết số 36 về công tác đối với người Việt Nam ở nước ngoài (gần 2,7 triệu người sống tại gần 90 quốc gia).",
      details: [
        "Khẳng định người Việt Nam ở nước ngoài là bộ phận không tách rời và là một nguồn lực của cộng đồng dân tộc Việt Nam.",
        "Đại đoàn kết dân tộc rộng rãi, tạo điều kiện thuận lợi cho kiều bào hướng về quê hương."
      ]
    },
    {
      date: "7/2005",
      title: "Hội nghị Trung ương 12 khóa IX",
      location: "Hà Nội",
      badge: "TW12 - Đạo đức Hồ Chí Minh",
      summary: "Thí điểm cuộc vận động 'Học tập và làm theo tấm gương đạo đức Hồ Chí Minh' trong toàn Đảng và toàn xã hội.",
      details: [
        "Đặt nền móng cho các Chỉ thị 03, Chỉ thị 05 về học tập và làm theo Bác ở các khóa tiếp theo."
      ]
    }
  ];

  // 6 Breakthrough Insights of Congress IX
  const breakthroughs = [
    {
      num: "01",
      title: "Định nghĩa chuẩn xác Tư tưởng Hồ Chí Minh",
      desc: "Là hệ thống quan điểm toàn diện và sâu sắc về những vấn đề cơ bản của cách mạng Việt Nam, là kết quả vận dụng và phát triển sáng tạo chủ nghĩa Mác-Lênin vào điều kiện cụ thể nước ta."
    },
    {
      num: "02",
      title: "Kinh tế thị trường định hướng XHCN",
      desc: "Xác định đây là mô hình kinh tế tổng quát của nước ta trong thời kỳ quá độ lên CNXH. Nền kinh tế nhiều thành phần, nhiều hình thức sở hữu, vận hành theo cơ chế thị trường có sự quản lý của Nhà nước."
    },
    {
      num: "03",
      title: "Nội dung 'Bỏ qua chế độ Tư bản chủ nghĩa'",
      desc: "Bỏ qua việc xác lập vị trí thống trị của quan hệ sản xuất và kiến trúc thượng tầng TBCN, nhưng tiếp thu, thừa hưởng các thành tựu nhân loại đạt được dưới TBCN (đặc biệt là khoa học - công nghệ)."
    },
    {
      num: "04",
      title: "Vai trò Kinh tế tư nhân (HNTW 5)",
      desc: "Chính thức khẳng định 'Kinh tế tư nhân là bộ phận cấu thành quan trọng của nền kinh tế quốc dân', phát triển lâu dài cùng kinh tế nhà nước và kinh tế tập thể."
    },
    {
      num: "05",
      title: "Động lực phát triển & Đấu tranh giai cấp",
      desc: "Động lực chủ yếu là Đại đoàn kết toàn dân trên cơ sở liên minh công-nông-trí. Nội dung đấu tranh giai cấp hiện nay là thực hiện CNH-HĐH theo định hướng XHCN, khắc phục nghèo nàn lạc hậu."
    },
    {
      num: "06",
      title: "Đường lối đối ngoại mở rộng",
      desc: "Thực hiện đường lối đối ngoại độc lập tự chủ, đa phương hóa, đa dạng hóa: 'Việt Nam sẵn sàng là bạn, là đối tác tin cậy của các nước trong cộng đồng quốc tế'."
    }
  ];

  // Keynotes Flashcards
  const flashcards = [
    {
      id: "fc1",
      question: "Thời gian, địa điểm tổ chức Đại hội IX và Tổng Bí thư được bầu là ai?",
      answer: "Họp tại Hà Nội từ 19 đến 22/4/2001. Đồng chí Nông Đức Mạnh được bầu làm Tổng Bí thư."
    },
    {
      id: "fc2",
      question: "Mô hình kinh tế tổng quát của nước ta trong thời kỳ quá độ được Đại hội IX xác định là gì?",
      answer: "Nền kinh tế thị trường định hướng xã hội chủ nghĩa."
    },
    {
      id: "fc3",
      question: "Hội nghị Trung ương 5 khóa IX (3/2002) có đánh giá đột phá gì về Kinh tế tư nhân?",
      answer: "Coi 'Kinh tế tư nhân là bộ phận cấu thành quan trọng của nền kinh tế quốc dân', là vấn đề chiến lược lâu dài."
    },
    {
      id: "fc4",
      question: "Hội nghị Trung ương 7 khóa IX (3/2003) có nhận thức mới gì về Đất đai?",
      answer: "Đất đai thuộc sở hữu toàn dân do Nhà nước đại diện chủ sở hữu; 'Quyền sử dụng đất là hàng hóa đặc biệt'."
    },
    {
      id: "fc5",
      question: "Nghị quyết số 36-NQ/TW (3/2004) của Bộ Chính trị có nội dung cốt lõi gì?",
      answer: "Khẳng định người Việt Nam ở nước ngoài là bộ phận không tách rời và là một nguồn lực của cộng đồng dân tộc Việt Nam."
    },
    {
      id: "fc6",
      question: "Hội nghị Trung ương 8 khóa IX (7/2003) ban hành văn kiện quan trọng nào về an ninh quốc phòng?",
      answer: "Ban hành 'Chiến lược Bảo vệ Tổ quốc trong tình hình mới' sau sự kiện 11/9/2001 tại Mỹ."
    },
    {
      id: "fc7",
      question: "Chiến lược phát triển KT-XH 2001-2010 đặt mục tiêu GDP năm 2010 so với năm 2000 như thế nào?",
      answer: "Đưa nước ta ra khỏi tình trạng kém phát triển vào năm 2008, GDP năm 2010 tăng gấp đôi năm 2000."
    },
    {
      id: "fc8",
      question: "Chỉ thị số 23-CT/TW (27/3/2003) của Ban Bí thư đề cập đến nội dung gì?",
      answer: "Đẩy mạnh nghiên cứu, tuyên truyền, giáo dục tư tưởng Hồ Chí Minh."
    }
  ];

  return (
    <div className="w-full space-y-10 pb-16 font-sans text-slate-800">
      
      {/* 🌟 HERO BANNER: ĐẠI HỘI IX */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-950 via-red-900 to-amber-950 p-8 md:p-12 text-white shadow-2xl border border-red-800/40">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-80 h-80 bg-red-600/20 rounded-full blur-2xl pointer-events-none"></div>
        
        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs md:text-sm font-semibold backdrop-blur-md">
            <Flag className="w-4 h-4 text-amber-400" />
            <span>Mục II.2.b | Lịch sử Đảng Cộng sản Việt Nam (2001 - 2006)</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-100 to-white font-serif">
            Đại Hội IX & Đổi Mới Nhận Thức Kinh Tế Thị Trường Định Hướng XHCN
          </h1>

          <p className="text-red-100/90 text-base md:text-lg leading-relaxed max-w-3xl">
            Đại hội IX (19 - 22/4/2001) đánh dấu bước phát triển trưởng thành về lý luận: lần đầu tiên xác định <strong className="text-amber-300 font-semibold">"Kinh tế thị trường định hướng XHCN"</strong> là mô hình kinh tế tổng quát, định nghĩa chuẩn xác <strong className="text-yellow-200">Tư tưởng Hồ Chí Minh</strong> và đề ra Chiến lược KT-XH 2001 - 2010.
          </p>

          {/* Quick stats highlight */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-red-800/60">
            <div className="bg-red-950/60 backdrop-blur-sm p-3.5 rounded-xl border border-red-700/50">
              <div className="text-amber-400 text-xs font-semibold uppercase tracking-wider">Thời gian</div>
              <div className="text-white font-bold text-base mt-1">19 - 22/4/2001</div>
            </div>
            <div className="bg-red-950/60 backdrop-blur-sm p-3.5 rounded-xl border border-red-700/50">
              <div className="text-amber-400 text-xs font-semibold uppercase tracking-wider">Số đại biểu</div>
              <div className="text-white font-bold text-base mt-1">1.168 đại biểu</div>
            </div>
            <div className="bg-red-950/60 backdrop-blur-sm p-3.5 rounded-xl border border-red-700/50">
              <div className="text-amber-400 text-xs font-semibold uppercase tracking-wider">Tổng Bí thư</div>
              <div className="text-white font-bold text-base mt-1">Nông Đức Mạnh</div>
            </div>
            <div className="bg-red-950/60 backdrop-blur-sm p-3.5 rounded-xl border border-red-700/50">
              <div className="text-amber-400 text-xs font-semibold uppercase tracking-wider">Mục tiêu GDP 2010</div>
              <div className="text-white font-bold text-base mt-1">Gấp đôi năm 2000</div>
            </div>
          </div>
        </div>
      </section>

      {/* 📌 KHỐI 1: BỐI CẢNH & KẾT QUẢ ĐẠI HỘI IX */}
      <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/80 space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
          <div className="w-10 h-10 rounded-xl bg-red-100 text-red-700 flex items-center justify-center font-bold">
            <Globe className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-serif">1. Bối Cảnh Đầu Thế Kỷ XXI & Thành Tựu 10 Năm</h2>
            <p className="text-xs md:text-sm text-slate-500">Tình hình thế giới biến động và thế lực mới của kinh tế Việt Nam</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Card Bối cảnh */}
          <div className="bg-amber-50/60 rounded-xl p-5 border border-amber-200/70 space-y-3">
            <h3 className="font-bold text-amber-900 flex items-center gap-2 text-base">
              <Sparkles className="w-4 h-4 text-amber-600" />
              Bối cảnh Quốc tế & Trong nước
            </h3>
            <ul className="space-y-2 text-sm text-slate-700 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">•</span>
                <span><strong>Đầu thế kỷ XXI:</strong> Cách mạng khoa học công nghệ, kinh tế trí thức và toàn cầu hóa diễn ra mạnh mẽ.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">•</span>
                <span><strong>Sự kiện 11/9/2001 tại Mỹ:</strong> Báo hiệu những biến động phức tạp về an ninh toàn cầu.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">•</span>
                <span><strong>Sau 15 năm Đổi mới:</strong> Đạt nhiều thành tựu nhưng kinh tế chưa vững chắc, hiệu quả và sức cạnh tranh còn thấp.</span>
              </li>
            </ul>
          </div>

          {/* Card Kết quả Chiến lược 1991 - 2000 */}
          <div className="bg-red-50/60 rounded-xl p-5 border border-red-200/70 space-y-3">
            <h3 className="font-bold text-red-950 flex items-center gap-2 text-base">
              <TrendingUp className="w-4 h-4 text-red-700" />
              Thành Tựu Kinh Tế 10 Năm (1991 - 2000)
            </h3>
            <ul className="space-y-2 text-sm text-slate-700 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">✓</span>
                <span><strong>Quy mô GDP:</strong> Tăng từ <strong>15,5 tỷ USD (1991)</strong> lên hơn gấp đôi, đạt trên <strong>35 tỷ USD (2000)</strong>.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">✓</span>
                <span><strong>Đưa đất nước thoát khỏi khủng hoảng:</strong> Ra khỏi tình trạng kém phát triển vào năm 2008.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">✓</span>
                <span><strong>Khẳng định 3 bài học lớn:</strong> Độc lập dân tộc gắn liền CNXH, đổi mới dựa vào dân, kết hợp sức mạnh dân tộc và thời đại.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 📌 KHỐI 2: TRỤC THỜI GIAN SỰ KIỆN HNTW KHÓA IX (INTERACTIVE TIMELINE) */}
      <section className="bg-slate-900 text-white rounded-2xl p-6 md:p-8 shadow-xl space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-900 flex items-center justify-center font-bold">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold font-serif text-amber-300">2. Chuỗi Hội Nghị Trung Ương Trọng Tâm Khóa IX (2001 - 2006)</h2>
              <p className="text-xs md:text-sm text-slate-400">Nhấp vào từng mốc sự kiện để xem chi tiết nội dung chỉ đạo</p>
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
                Nội dung chi tiết & Nghị quyết trọng tâm:
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

      {/* 📌 KHỐI 3: INTERACTIVE GRID CARDS (6 ĐỘT PHÁ NHẬN THỨC MỚI) */}
      <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/80 space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
          <div className="w-10 h-10 rounded-xl bg-red-700 text-white flex items-center justify-center font-bold">
            <Lightbulb className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-serif">3. 6 Nhận Thức Mới Đột Phá Của Đại Hội IX</h2>
            <p className="text-xs md:text-sm text-slate-500">Các bước tiến lớn về lý luận cách mạng và xây dựng chủ nghĩa xã hội</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {breakthroughs.map((item, idx) => (
            <div key={idx} className="bg-slate-50 hover:bg-red-50/40 p-5 rounded-xl border border-slate-200/80 hover:border-red-300 transition-all group flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-red-700 font-serif group-hover:scale-110 transition-transform">
                    {item.num}
                  </span>
                  <span className="px-2 py-0.5 bg-red-100 text-red-700 text-[10px] font-bold rounded-full uppercase">
                    Nhận thức đột phá
                  </span>
                </div>
                <h4 className="font-bold text-slate-900 text-base leading-snug group-hover:text-red-950">
                  {item.title}
                </h4>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 📌 KHỐI 4: WIDGET CHUYÊN BIỆT HNTW 7 (ĐẤT ĐAI, ĐẠI ĐOÀN KẾT, DÂN TỘC, TÔN GIÁO) */}
      <section className="bg-gradient-to-br from-amber-500/10 via-amber-400/5 to-red-500/10 rounded-2xl p-6 md:p-8 border border-amber-300/60 shadow-sm space-y-6">
        <div className="flex items-center gap-3 border-b border-amber-200/60 pb-4">
          <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold shadow-md">
            <Building2 className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-amber-800 uppercase tracking-wider">Hội nghị Trung ương 7 khóa IX (3/2003)</div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-serif">Nghị Quyết Đất Đai & Bộ 3 Nghị Quyết Đại Đoàn Kết</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Card Đất đai */}
          <div className="bg-white/90 backdrop-blur-sm p-5 rounded-xl border border-amber-200 space-y-3">
            <div className="flex items-center gap-2 text-amber-900 font-bold text-base">
              <Scale className="w-5 h-5 text-amber-600" />
              Chính sách Đất đai
            </div>
            <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
              Thống nhất nhận thức: Đất đai là tài nguyên quốc gia vô cùng quý giá. <strong className="text-amber-900">"Quyền sử dụng đất là hàng hóa đặc biệt"</strong>. Đất đai thuộc sở hữu toàn dân do Nhà nước đại diện chủ sở hữu.
            </p>
          </div>

          {/* Card Đại đoàn kết & Dân tộc */}
          <div className="bg-white/90 backdrop-blur-sm p-5 rounded-xl border border-amber-200 space-y-3">
            <div className="flex items-center gap-2 text-red-950 font-bold text-base">
              <Users className="w-5 h-5 text-red-600" />
              Đại Đoàn Kết & Dân Tộc
            </div>
            <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
              Đại đoàn kết toàn dân tộc là đường lối chiến lược, nguồn sức mạnh và nhân tố quyết định phát triển bền vững. Vấn đề dân tộc và đoàn kết dân tộc là chiến lược cơ bản lâu dài, đồng thời cấp bách.
            </p>
          </div>

          {/* Card Tôn giáo */}
          <div className="bg-white/90 backdrop-blur-sm p-5 rounded-xl border border-amber-200 space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
              <ShieldCheck className="w-5 h-5 text-amber-700" />
              Công tác Tôn giáo
            </div>
            <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
              Tôn trọng và bảo đảm quyền tự do tín ngưỡng, theo hoặc không theo tôn giáo. Nghiêm cấm phân biệt đối xử vì lý do tín ngưỡng; nghiêm cấm lợi dụng tôn giáo hoạt động trái pháp luật.
            </p>
          </div>
        </div>
      </section>

      {/* 📌 KHỐI 5: WIDGET CHUYÊN BIỆT HNTW 8 (BẢO VỆ TỔ QUỐC Trong Tình Hình Mới) */}
      <section className="bg-slate-900 text-white rounded-2xl p-6 md:p-8 shadow-xl space-y-6 border border-slate-800">
        <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
          <div className="w-10 h-10 rounded-xl bg-red-700 text-white flex items-center justify-center font-bold">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-red-400 uppercase tracking-wider">Hội nghị Trung ương 8 khóa IX (7/2003)</div>
            <h2 className="text-xl md:text-2xl font-bold font-serif text-white">Chiến Lược Bảo Vệ Tổ Quốc Trong Tình Hình Mới</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 text-xs md:text-sm">
          <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 space-y-2">
            <div className="font-bold text-amber-400 flex items-center gap-1.5">
              <Target className="w-4 h-4" />
              Mục tiêu Cốt lõi
            </div>
            <p className="text-slate-300 leading-relaxed">
              Bảo vệ độc lập, chủ quyền, toàn vẹn lãnh thổ; bảo vệ Đảng, Nhà nước, nhân dân, chế độ XHCN; bảo vệ công cuộc đổi mới, giữ vững an ninh chính trị và môi trường hòa bình.
            </p>
          </div>

          <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 space-y-2">
            <div className="font-bold text-amber-400 flex items-center gap-1.5">
              <Flag className="w-4 h-4" />
              Quan điểm Chỉ đạo
            </div>
            <p className="text-slate-300 leading-relaxed">
              Giữ vững vai trò lãnh đạo tuyệt đối của Đảng; kết hợp chặt chẽ 2 nhiệm vụ chiến lược: Xây dựng CNXH và Bảo vệ Tổ quốc XHCN.
            </p>
          </div>

          <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 space-y-2">
            <div className="font-bold text-amber-400 flex items-center gap-1.5">
              <UserCheck className="w-4 h-4" />
              Lực lượng Nòng cốt
            </div>
            <p className="text-slate-300 leading-relaxed">
              Quân đội nhân dân và Công an nhân dân là lực lượng nòng cốt; phát huy sức mạnh đại đoàn kết toàn dân tộc dưới sự lãnh đạo của Đảng.
            </p>
          </div>
        </div>
      </section>

      {/* 📌 KHỐI 6: THẺ FLASHCARD TỰ ÔN TẬP TỪ KHÓA */}
      <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/80 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-900 flex items-center justify-center font-bold">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-serif">5. Thẻ Ghi Nhớ Từ Khóa Ôn Thi Đại Hội IX (Flashcards)</h2>
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
                className={`min-h-[170px] p-5 rounded-2xl cursor-pointer transition-all duration-300 flex flex-col justify-between border shadow-sm ${
                  isFlipped
                    ? "bg-red-900 text-white border-red-800 shadow-md"
                    : "bg-gradient-to-br from-slate-50 to-amber-50/50 text-slate-900 border-slate-200 hover:border-amber-400 hover:shadow-md"
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider opacity-80">
                    <span>{isFlipped ? "💡 Đáp án Ghi nhớ" : "❓ Câu hỏi Ôn thi"}</span>
                    <RotateCcw className="w-3.5 h-3.5" />
                  </div>

                  <p className="text-xs md:text-sm font-semibold leading-relaxed">
                    {isFlipped ? fc.answer : fc.question}
                  </p>
                </div>

                <div className="text-[11px] font-medium text-right opacity-70 pt-3">
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
