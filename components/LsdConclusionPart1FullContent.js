"use client";
import React, { useState } from "react";
import { 
  Calendar, Users, Award, BookOpen, ChevronRight, CheckCircle2, 
  Sparkles, Target, Star, Flag, Clock, ShieldCheck, Heart, 
  Layers, Lightbulb, Zap, ArrowRight, RotateCcw, Bookmark, ExternalLink,
  Globe, Shield, TrendingUp, Building2, UserCheck, Scale, Compass,
  MapPin, Milestone, Landmark, CheckSquare, AwardIcon, ChevronLeft
} from "lucide-react";

export default function LsdConclusionPart1FullContent() {
  // Timeline selection state
  const [selectedTimelineIndex, setSelectedTimelineIndex] = useState(0);

  // Flashcard flip states
  const [flippedCards, setFlippedCards] = useState({});

  const toggleCardFlip = (id) => {
    setFlippedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // 19 Historic Timeline Events
  const timelineEvents = [
    {
      date: "1911 - 1920",
      title: "Nguyễn Ái Quốc tìm đường cứu nước",
      badge: "1911 - 1920",
      summary: "Lãnh tụ Nguyễn Ái Quốc - Hồ Chí Minh ra đi tìm đường cứu nước, khẳng định con đường giải phóng dân tộc đúng đắn.",
      details: ["Tiếp cận Chủ nghĩa Mác-Lênin (7/1920).", "Khẳng định con đường cách mạng vô sản."]
    },
    {
      date: "1920 - 1930",
      title: "Truyền bá Mác-Lênin & Chuẩn bị lập Đảng",
      badge: "1920 - 1930",
      summary: "Nguyễn Ái Quốc truyền bá chủ nghĩa Mác-Lênin vào phong trào công nhân và yêu nước Việt Nam.",
      details: ["Thành lập Hội VN Cách mạng Thanh niên (1925).", "Chuẩn bị chính trị, tư tưởng, tổ chức cho sự ra đời của Đảng."]
    },
    {
      date: "2/1930",
      title: "Thành lập Đảng Cộng sản Việt Nam",
      badge: "2/1930",
      summary: "Hội nghị hợp nhất các tổ chức cộng sản tại Cửu Long (Hương Cảng, Trung Quốc) thành lập Đảng Cộng sản Việt Nam.",
      details: ["Thông qua Cương lĩnh chính trị đầu tiên do Nguyễn Ái Quốc soạn thảo.", "Mở ra bước ngoặt vĩ đại của cách mạng Việt Nam."]
    },
    {
      date: "1930 - 1931",
      title: "Cao trào Xô viết Nghệ-Tĩnh",
      badge: "1930 - 1931",
      summary: "Phong trào cách mạng rộng lớn đầu tiên do Đảng lãnh đạo, đỉnh cao là Xô viết Nghệ-Tĩnh.",
      details: ["Tổng tập dượt đầu tiên cho Cách mạng Tháng Tám.", "Khẳng định quyền lãnh đạo của giai cấp công nhân và Đảng."]
    },
    {
      date: "1932 - 1935",
      title: "Khôi phục tổ chức Đảng & Phong trào",
      badge: "1932 - 1935",
      summary: "Đảng kiên cường đấu tranh khôi phục hệ thống tổ chức và phong trào quần chúng sau đợt khủng bố của thực dân Pháp.",
      details: ["Đại hội đại biểu toàn quốc lần thứ I của Đảng (3/1935 tại Ma Cao, Trung Quốc)."]
    },
    {
      date: "1936 - 1939",
      title: "Phong trào đòi Dân sinh, Dân chủ",
      badge: "1936 - 1939",
      summary: "Cao trào dân chủ rộng lớn đòi tự do, dân sinh, dân chủ, cơm áo, hòa bình.",
      details: ["Thành lập Mặt trận Nhân dân Phản đế ➔ Mặt trận Dân chủ Đông Dương.", "Rèn luyện lực lượng quần chúng hàng triệu người."]
    },
    {
      date: "1939 - 1945",
      title: "Chuẩn bị & Khởi nghĩa giành chính quyền",
      badge: "1939 - 1945",
      summary: "Đảng chuyển hướng chỉ đạo chiến lược, đặt nhiệm vụ giải phóng dân tộc lên hàng đầu.",
      details: ["Thành lập Mặt trận Việt Minh (1941).", "Thành lập Đội Việt Nam Tuyên truyền Giải phóng quân (22/12/1944)."]
    },
    {
      date: "8/1945",
      title: "Cách mạng Tháng Tám thành công",
      badge: "8/1945",
      summary: "Tổng khởi nghĩa Tháng Tám thành công, đập tan ách bóc phốt của thực dân Pháp và phát xít Nhật.",
      details: ["2/9/1945: Bác Hồ đọc Tuyên ngôn Độc lập.", "Lập nên nước Việt Nam Dân chủ Cộng hòa."]
    },
    {
      date: "1945 - 1946",
      title: "Kháng chiến Nam Bộ & Bảo vệ Chính quyền",
      badge: "1945 - 1946",
      summary: "Đảng trở thành 'Đảng cầm quyền', lãnh đạo nhân dân Nam Bộ đứng lên kháng chiến chống Pháp trở lại xâm lược.",
      details: ["Vừa kháng chiến vừa kiến quốc, bảo vệ chính quyền cách mạng non trẻ."]
    },
    {
      date: "12/1946",
      title: "Toàn quốc Kháng chiến",
      badge: "12/1946",
      summary: "Lời kêu gọi Toàn quốc kháng chiến của Chủ tịch Hồ Chí Minh (19/12/1946).",
      details: ["Đường lối kháng chiến: 'Toàn dân, toàn diện, lâu dài, dựa vào sức mình là chính'."]
    },
    {
      date: "7/5/1954",
      title: "Chiến thắng Điện Biên Phủ",
      badge: "7/5/1954",
      summary: "Chiến thắng Điện Biên Phủ 'lừng lẫy năm châu, chấn động địa cầu', đập tan Kế hoạch Navarre của Pháp.",
      details: ["Chấm dứt hoàn toàn ách đô hộ của thực dân Pháp ở Đông Dương."]
    },
    {
      date: "21/7/1954",
      title: "Ký Hiệp định Geneve",
      badge: "21/7/1954",
      summary: "Hiệp định Geneve về chấm dứt chiến sự, lập lại hòa bình ở Đông Dương được ký kết.",
      details: ["Công nhận độc lập, chủ quyền, thống nhất và toàn vẹn lãnh thổ của Việt Nam."]
    },
    {
      date: "1956",
      title: "Mỹ - Diệm vi phạm Hiệp định Geneve",
      badge: "1956",
      summary: "Đế quốc Mỹ thay thế Pháp, dựng lên chính quyền tay sai Ngô Đình Diệm, từ chối tổng tuyển cử thống nhất đất nước.",
      details: ["Chia cắt đất nước Việt Nam tại vĩ tuyến 17."]
    },
    {
      date: "1954 - 1975",
      title: "Hai Chiến Lược Cách Mạng Song Song",
      badge: "1954 - 1975",
      summary: "Đảng lãnh đạo đồng thời 2 chiến lược: Cách mạng XHCN ở miền Bắc & Cách mạng DTDCND ở miền Nam.",
      details: ["Miền Bắc là hậu phương lớn, Miền Nam là tiền tuyến lớn.", "Quan hệ mật thiết, quyết định lẫn nhau."]
    },
    {
      date: "30/4/1975",
      title: "Chiến dịch Hồ Chí Minh toàn thắng",
      badge: "30/4/1975",
      summary: "Tổng tiến công và nổi dậy Xuân 1975 đỉnh cao là Chiến dịch Hồ Chí Minh giải phóng hoàn toàn miền Nam.",
      details: ["Đất nước hoàn toàn độc lập, sông núi thu về một mối."]
    },
    {
      date: "1975 - 1986",
      title: "Bảo vệ Tổ quốc & Khảo nghiệm Đổi mới",
      badge: "1975 - 1986",
      summary: "Chiến tranh bảo vệ biên giới Tây-Nam và phía Bắc; từng bước đổi mới tư duy kinh tế tìm con đường Đổi mới.",
      details: ["Làm nghĩa vụ quốc tế giúp nhân dân Campuchia thoát họa diệt chủng.", "Hội nghị Trung ương 6 (1979) và TW 8 (1985)."]
    },
    {
      date: "12/1986",
      title: "Đại hội VI -- Đường lối Đổi mới toàn diện",
      badge: "12/1986",
      summary: "Đại hội VI đề ra đường lối Đổi mới toàn diện, mở ra thời kỳ phát triển mới của đất nước.",
      details: ["Tập trung thực hiện 3 Chương trình kinh tế lớn.", "Xóa bỏ cơ chế tập trung bao cấp."]
    },
    {
      date: "6/1991",
      title: "Đại hội VII -- Thông qua Cương lĩnh 1991",
      badge: "6/1991",
      summary: "Thông qua Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên CNXH.",
      details: ["Khẳng định chủ nghĩa Mác-Lênin, tư tưởng Hồ Chí Minh là nền tảng tư tưởng."]
    },
    {
      date: "2011",
      title: "Đại hội XI -- Cương lĩnh bổ sung 2011",
      badge: "2011",
      summary: "Đại hội XI thông qua Cương lĩnh bổ sung, phát triển năm 2011 với 8 đặc trưng xã hội XHCN.",
      details: ["Đặc trưng tổng quát: 'Dân giàu, nước mạnh, dân chủ, công bằng, văn minh'."]
    }
  ];

  // 7 Pillars of Doi Moi according to Platform 2011
  const doiMoiPillars = [
    {
      num: "1",
      title: "Kinh tế thị trường định hướng XHCN",
      desc: "Phát triển nền kinh tế thị trường định hướng xã hội chủ nghĩa nhiều thành phần, tuân thủ quy luật kinh tế thị trường."
    },
    {
      num: "2",
      title: "Công nghiệp hóa, Hiện đại hóa",
      desc: "Đẩy mạnh công nghiệp hóa, hiện đại hóa đất nước gắn với phát triển kinh tế trí thức và bảo vệ môi trường."
    },
    {
      num: "3",
      title: "Nhà nước pháp quyền XHCN",
      desc: "Xây dựng, hoàn thiện hệ thống chính trị và Nhà nước pháp quyền xã hội chủ nghĩa của dân, do dân, vì dân."
    },
    {
      num: "4",
      title: "Chiến lược Phát triển KTXH & An sinh",
      desc: "Đề ra và thực hiện các chiến lược phát triển kinh tế - xã hội, chính sách xã hội, xóa đói giảm nghèo, tiến bộ công bằng."
    },
    {
      num: "5",
      title: "Văn hóa & Đời sống Tinh thần",
      desc: "Xây dựng nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc, phát triển toàn diện con người Việt Nam."
    },
    {
      num: "6",
      title: "Quốc phòng - An ninh & Chủ quyền",
      desc: "Xây dựng và thực hiện Chiến lược bảo vệ Tổ quốc, xây dựng thế trận quốc phòng toàn dân và an ninh nhân dân vững chắc."
    },
    {
      num: "7",
      title: "Đối ngoại Độc lập Tự chủ & Hội nhập",
      desc: "Thực hiện chính sách đối ngoại độc lập, tự chủ, hòa bình, hợp tác, phát triển; 'Việt Nam là bạn, đối tác tin cậy và thành viên có trách nhiệm'."
    }
  ];

  // Flashcards
  const flashcards = [
    {
      id: "fc1",
      question: "Sự kiện lịch sử đánh dấu bước ngoặt vĩ đại của cách mạng Việt Nam năm 1930?",
      answer: "Thành lập Đảng Cộng sản Việt Nam vào tháng 2/1930 và công bố Cương lĩnh chính trị đầu tiên do Nguyễn Ái Quốc soạn thảo."
    },
    {
      id: "fc2",
      question: "Đường lối kháng chiến chống Pháp do Đảng đề ra tháng 12/1946 là gì?",
      answer: "'Kháng chiến toàn dân, toàn diện, lâu dài, dựa vào sức mình là chính'."
    },
    {
      id: "fc3",
      question: "Chiến thắng lịch sử nào buộc Pháp phải ký Hiệp định Geneve năm 1954?",
      answer: "Chiến thắng Điện Biên Phủ lừng lẫy năm châu (7/5/1954)."
    },
    {
      id: "fc4",
      question: "Hai chiến lược cách mạng song song Đảng lãnh đạo giai đoạn 1954 - 1975 là gì?",
      answer: "Cách mạng XHCN ở miền Bắc (hậu phương lớn) và Cách mạng dân tộc dân chủ nhân dân ở miền Nam (tiền tuyến lớn)."
    },
    {
      id: "fc5",
      question: "Chiến dịch lịch sử kết thúc thắng lợi cuộc kháng chiến chống Mỹ cứu nước năm 1975?",
      answer: "Chiến dịch Hồ Chí Minh lịch sử (ngày 30/4/1975), giải phóng hoàn toàn miền Nam, thống nhất đất nước."
    },
    {
      id: "fc6",
      question: "Đại hội nào của Đảng đề ra đường lối Đổi mới toàn diện năm 1986?",
      answer: "Đại hội đại biểu toàn quốc lần thứ VI của Đảng (tháng 12/1986)."
    },
    {
      id: "fc7",
      question: "Cương lĩnh xây dựng đất nước trong thời kỳ quá độ được thông qua năm 1991 và bổ sung năm nào?",
      answer: "Thông qua tại Đại hội VII (năm 1991) và bổ sung, phát triển tại Đại hội XI (năm 2011)."
    },
    {
      id: "fc8",
      question: "Khẩu hiệu tổng quát về mục tiêu xây dựng đất nước trong Cương lĩnh 2011?",
      answer: "'Dân giàu, nước mạnh, dân chủ, công bằng, văn minh'."
    },
    {
      id: "fc9",
      question: "Khái niệm vai trò của Đảng sau Cách mạng Tháng Tám 1945 được khẳng định là gì?",
      answer: "Đảng trở thành 'Đảng cầm quyền'."
    },
    {
      id: "fc10",
      question: "Sau năm 1975, quân và dân ta tiến hành chiến tranh bảo vệ Tổ quốc ở hai vùng biên giới nào?",
      answer: "Biên giới Tây-Nam (chống Pol Pot diệt chủng) và Biên giới phía Bắc."
    },
    {
      id: "fc11",
      question: "Phương châm đối ngoại nổi bật được khẳng định trong công cuộc Đổi mới?",
      answer: "'Việt Nam là bạn, đối tác tin cậy và thành viên có trách nhiệm của cộng đồng quốc tế'."
    },
    {
      id: "fc12",
      question: "Đặc trưng cốt lõi về Nhà nước được bổ sung trong Cương lĩnh 2011 là gì?",
      answer: "Xây dựng Nhà nước pháp quyền xã hội chủ nghĩa của dân, do dân, vì dân."
    },
    {
      id: "fc13",
      question: "Nhiệm vụ đầu tiên của lãnh tụ Nguyễn Ái Quốc giai đoạn 1911 - 1920?",
      answer: "Ra đi tìm con đường cứu nước, khẳng định con đường giải phóng dân tộc đúng đắn."
    },
    {
      id: "fc14",
      question: "Đỉnh cao của phong trào cách mạng 1930 - 1931 do Đảng lãnh đạo là gì?",
      answer: "Phong trào Xô viết Nghệ-Tĩnh."
    },
    {
      id: "fc15",
      question: "Ý nghĩa bao trùm nhất của thành công công cuộc Đổi mới đất nước?",
      answer: "Làm cho thế và lực của đất nước tăng lên, khẳng định con đường phát triển đúng đắn của dân tộc Việt Nam."
    }
  ];

  return (
    <div className="w-full space-y-10 pb-16 font-sans text-slate-800">
      
      {/* 🌟 MASTER HISTORY HERO BANNER */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-950 via-red-900 to-amber-950 p-8 md:p-12 text-white shadow-2xl border border-red-800/40">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs md:text-sm font-semibold backdrop-blur-md">
            <Milestone className="w-4 h-4 text-amber-400" />
            <span>KẾT LUẬN | Mục I: Khái Quát Các Thời Kỳ Lịch Sử Của Đảng (1911 - 2011+)</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-100 to-white font-serif">
            Toàn Cảnh Tiến Trình Lịch Sử Hào Hùng Của Đảng Cộng Sản Việt Nam
          </h1>

          <p className="text-red-100/90 text-base md:text-lg leading-relaxed max-w-3xl">
            Từ hành trình tìm đường cứu nước của Bác Hồ (1911) đến mốc thành lập Đảng (1930), Cách mạng Tháng Tám (1945), Điện Biên Phủ (1954), Đại thắng 1975 và hơn 30 năm Đổi mới rực rỡ dưới ánh sáng Cương lĩnh của Đảng.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-red-800/60">
            <div className="bg-red-950/60 backdrop-blur-sm p-3.5 rounded-xl border border-red-700/50">
              <div className="text-amber-400 text-xs font-semibold uppercase tracking-wider">Hành trình Lịch sử</div>
              <div className="text-white font-bold text-base mt-1">Hơn 1 Thế Kỷ</div>
            </div>
            <div className="bg-red-950/60 backdrop-blur-sm p-3.5 rounded-xl border border-red-700/50">
              <div className="text-amber-400 text-xs font-semibold uppercase tracking-wider">Mốc Lịch sử Vĩ đại</div>
              <div className="text-white font-bold text-base mt-1">19 Mốc Son</div>
            </div>
            <div className="bg-red-950/60 backdrop-blur-sm p-3.5 rounded-xl border border-red-700/50">
              <div className="text-amber-400 text-xs font-semibold uppercase tracking-wider">Chiến lược Cách mạng</div>
              <div className="text-white font-bold text-base mt-1">2 Chiến Lược (1954-75)</div>
            </div>
            <div className="bg-red-950/60 backdrop-blur-sm p-3.5 rounded-xl border border-red-700/50">
              <div className="text-amber-400 text-xs font-semibold uppercase tracking-wider">Trụ cột Đổi mới</div>
              <div className="text-white font-bold text-base mt-1">7 Mảng Cương Lĩnh</div>
            </div>
          </div>
        </div>
      </section>

      {/* 📌 KHỐI 1: BRIGHT & ELEGANT MASTER HISTORY TIMELINE (19 MỐC THỜI GIAN VĨ ĐẠI - GIAO DIỆN MÀU SÁNG SANG TRỌNG) */}
      <section className="bg-gradient-to-br from-amber-500/10 via-amber-400/5 to-red-500/10 rounded-3xl p-6 md:p-8 shadow-xl border border-amber-300/80 space-y-6 backdrop-blur-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-amber-200/80 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-red-600 to-amber-600 text-white flex items-center justify-center font-bold shadow-md shadow-red-600/20">
              <Clock className="w-6 h-6 text-yellow-200" />
            </div>
            <div>
              <span className="text-xs font-black text-red-700 uppercase tracking-widest">Tiến trình Lịch sử Việt Nam</span>
              <h2 className="text-xl md:text-2xl font-bold font-serif text-slate-900">1. Trục Thời Gian 19 Mốc Son Lịch Sử Vĩ Đại (1911 - 2011)</h2>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-3.5 py-1.5 bg-amber-100 text-amber-950 border border-amber-300 rounded-full shadow-xs">
              19 Mốc Lịch Sử Hoàng Kim
            </span>
          </div>
        </div>

        {/* Bright Timeline Nav Scroll Pills */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-3 pt-1 scrollbar-thin scrollbar-thumb-amber-300">
          {timelineEvents.map((evt, idx) => {
            const isActive = selectedTimelineIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => setSelectedTimelineIndex(idx)}
                className={`px-4 py-2.5 rounded-2xl text-xs md:text-sm font-bold whitespace-nowrap transition-all duration-300 flex items-center gap-2 shrink-0 cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-red-700 via-red-600 to-amber-600 text-white shadow-lg shadow-red-700/30 border border-amber-300 scale-[1.03]"
                    : "bg-white text-slate-700 border border-amber-200/90 hover:border-amber-400 hover:bg-amber-50 hover:text-red-800 shadow-xs"
                }`}
              >
                <span className={`w-2.5 h-2.5 rounded-full ${isActive ? "bg-yellow-300 animate-ping" : "bg-red-500/40"}`}></span>
                <span>{evt.badge}</span>
              </button>
            );
          })}
        </div>

        {/* Display active event card - Bright Premium Theme */}
        {timelineEvents[selectedTimelineIndex] && (
          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-amber-300/80 shadow-xl shadow-amber-900/5 space-y-5 transition-all animate-in fade-in duration-300">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-amber-100 pb-3">
              <div className="flex items-center gap-3">
                <span className="px-4 py-1.5 bg-gradient-to-r from-red-700 to-amber-600 text-white font-mono font-black text-sm md:text-base rounded-xl shadow-sm flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-yellow-200" />
                  <span>{timelineEvents[selectedTimelineIndex].date}</span>
                </span>
              </div>
              <span className="text-xs font-black uppercase tracking-wider text-amber-900 bg-amber-100 px-3.5 py-1.5 rounded-xl border border-amber-300">
                Giai đoạn {selectedTimelineIndex + 1} / {timelineEvents.length}
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 font-serif tracking-tight leading-snug">
              {timelineEvents[selectedTimelineIndex].title}
            </h3>

            <div className="bg-gradient-to-r from-amber-50/80 via-orange-50/60 to-red-50/40 p-5 rounded-2xl border-l-4 border-amber-500 text-slate-800 font-medium text-base md:text-lg leading-relaxed shadow-sm">
              {timelineEvents[selectedTimelineIndex].summary}
            </div>

            <div className="space-y-3 pt-2">
              <div className="text-xs font-extrabold uppercase tracking-widest text-red-800 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Dấu ấn & Sự kiện lịch sử cốt lõi:</span>
              </div>
              <div className="grid md:grid-cols-2 gap-3 text-sm text-slate-800 font-medium">
                {timelineEvents[selectedTimelineIndex].details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-amber-200/80 shadow-xs hover:border-amber-400 transition-all">
                    <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</span>
                    <span className="leading-relaxed">{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Next/Prev timeline navigation */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs font-bold text-slate-600">
              <button
                disabled={selectedTimelineIndex === 0}
                onClick={() => setSelectedTimelineIndex(prev => Math.max(0, prev - 1))}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-amber-100 text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Mốc trước đó</span>
              </button>

              <span className="text-slate-400 font-mono">
                {selectedTimelineIndex + 1} / {timelineEvents.length}
              </span>

              <button
                disabled={selectedTimelineIndex === timelineEvents.length - 1}
                onClick={() => setSelectedTimelineIndex(prev => Math.min(timelineEvents.length - 1, prev + 1))}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-amber-100 text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
              >
                <span>Mốc kế tiếp</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </section>

      {/* 📌 KHỐI 2: DUAL STRATEGY WIDGET (HAI CHIẾN LƯỢC CÁCH MẠNG 1954 - 1975) */}
      <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/80 space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
          <div className="w-10 h-10 rounded-xl bg-red-700 text-white flex items-center justify-center font-bold">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold text-red-700 uppercase tracking-wider">Giai đoạn 1954 - 1975</span>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-serif">2. Hai Chiến Lược Cách Mạng Song Song Đỉnh Cao</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Card Miền Bắc */}
          <div className="bg-gradient-to-br from-red-50 to-amber-50/60 p-6 rounded-2xl border border-red-200 space-y-3">
            <div className="flex items-center justify-between border-b border-red-200/80 pb-2">
              <span className="text-xs font-bold text-red-800 uppercase tracking-wider">Chiến lược 1</span>
              <span className="px-2.5 py-1 bg-red-100 text-red-900 text-xs font-bold rounded-md">Miền Bắc</span>
            </div>
            <h3 className="font-bold text-slate-900 text-lg font-serif">Cách Mạng Xã Hội Chủ Nghĩa</h3>
            <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
              Xây dựng tiềm lực kinh tế, quốc phòng, trở thành <strong>hậu phương lớn</strong> vững chắc cho toàn bộ cuộc kháng chiến chống Mỹ cứu nước.
            </p>
          </div>

          {/* Card Miền Nam */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50/60 p-6 rounded-2xl border border-blue-200 space-y-3">
            <div className="flex items-center justify-between border-b border-blue-200/80 pb-2">
              <span className="text-xs font-bold text-blue-800 uppercase tracking-wider">Chiến lược 2</span>
              <span className="px-2.5 py-1 bg-blue-100 text-blue-900 text-xs font-bold rounded-md">Miền Nam</span>
            </div>
            <h3 className="font-bold text-slate-900 text-lg font-serif">Cách Mạng Dân Tộc Dân Chủ Nhân Dân</h3>
            <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
              Trực tiếp đánh bại các chiến lược chiến tranh của đế quốc Mỹ, trở thành <strong>tiền tuyến lớn</strong> anh hùng giải phóng hoàn toàn miền Nam.
            </p>
          </div>
        </div>

        <div className="p-4 bg-slate-900 text-white rounded-xl text-xs md:text-sm space-y-1">
          <strong className="text-amber-400 font-bold uppercase tracking-wider">Quy luật gắn kết:</strong>
          <p className="text-slate-300 leading-relaxed">
            Hai chiến lược cách mạng ở hai miền có mối quan hệ mật thiết, tác động qua lại và <strong>quyết định lẫn nhau</strong>, thực hiện trọn vẹn mục tiêu Độc lập dân tộc và Chủ nghĩa xã hội.
          </p>
        </div>
      </section>

      {/* 📌 KHỐI 3: GRID CARDS 7 TRỤ CỘT ĐỔI MỚI GẮN VỚI CƯƠNG LĨNH 2011 */}
      <section className="bg-gradient-to-br from-amber-500/10 via-amber-400/5 to-red-500/10 rounded-2xl p-6 md:p-8 border border-amber-300/60 shadow-sm space-y-6">
        <div className="flex items-center gap-3 border-b border-amber-200/60 pb-4">
          <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold shadow-md">
            <AwardIcon className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-amber-800 uppercase tracking-wider">Cương lĩnh 2011</div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-serif">3. 7 Nội Dung Công Cuộc Đổi Mới Gắn Với Cương Lĩnh</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs md:text-sm">
          {doiMoiPillars.map((p) => (
            <div key={p.num} className="bg-white/90 backdrop-blur-sm p-5 rounded-xl border border-amber-200 space-y-2 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
                  <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 text-xs font-bold flex items-center justify-center">
                    {p.num}
                  </span>
                  <span className="text-[10px] font-bold uppercase text-amber-800">Trụ cột Cương lĩnh</span>
                </div>
                <h4 className="font-bold text-slate-900 text-base font-serif">
                  {p.title}
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 📌 KHỐI 4: THẺ FLASHCARD TỰ ÔN TẬP TOÀN BỘ MÔN HỌC (15 THẺ LẬT) */}
      <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/80 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-900 flex items-center justify-center font-bold">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-serif">4. Thẻ Ghi Nhớ Lịch Sử Đảng Tổng Hợp (Flashcards)</h2>
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
