"use client";
import React, { useState } from "react";
import { 
  Calendar, Users, Award, BookOpen, ChevronRight, CheckCircle2, 
  Sparkles, Target, Star, Flag, Clock, ShieldCheck, Heart, 
  Layers, Lightbulb, Zap, ArrowRight, RotateCcw, Bookmark, ExternalLink,
  Globe, Shield, TrendingUp, Building2, UserCheck, Scale, Compass,
  Quote, Crown, Flame, Landmark, CheckSquare, FileText, Globe2
} from "lucide-react";

export default function LsdCongress10And11Part2FullContent() {
  // Active tab index for Congress X vs XI
  const [activeCongressTab, setActiveCongressTab] = useState(0);

  // Flashcard flip states
  const [flippedCards, setFlippedCards] = useState({});

  const toggleCardFlip = (id) => {
    setFlippedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // 5 Lessons Learned after 20 years of Doi Moi (1986 - 2006)
  const lessons20Years = [
    {
      num: "01",
      title: "Quá trình Đổi mới phải chủ động, sáng tạo",
      desc: "Phải xuất phát từ thực tiễn, luôn bám sát thực tiễn, coi trọng nghiên cứu lý luận, không ngừng đổi mới tư duy."
    },
    {
      num: "02",
      title: "Đổi mới phải vì lợi ích của Nhân dân",
      desc: "Dựa vào nhân dân, phát huy vai trò chủ động, sáng tạo của nhân dân, xuất phát từ quyền lợi chính đáng của nhân dân."
    },
    {
      num: "03",
      title: "Đổi mới phải toàn diện, đồng bộ, có bước đi phù hợp",
      desc: "Tập trung đổi mới kinh tế, đồng thời từng bước đổi mới hệ thống chính trị; kết hợp chặt chẽ ngay từ đầu."
    },
    {
      num: "04",
      title: "Kết hợp sức mạnh dân tộc với sức mạnh thời đại",
      desc: "Chủ động, tích cực hội nhập kinh tế quốc tế, phát huy nội lực đồng thời tranh thủ tối đa ngoại lực."
    },
    {
      num: "05",
      title: "Tăng cường vai trò lãnh đạo & Xây dựng Đảng",
      desc: "Nâng cao năng lực cầm quyền và sức chiến đấu của Đảng, coi xây dựng Đảng là nhiệm vụ then chốt."
    }
  ];

  // 8 Characteristics of Socialist Society (Platform 2011)
  const characteristics2011 = [
    { id: 1, title: "Dân giàu, nước mạnh, dân chủ, công bằng, văn minh", desc: "Mục tiêu tổng quát cao nhất của xã hội XHCN mà nhân dân ta xây dựng." },
    { id: 2, title: "Do Nhân dân làm chủ", desc: "Bản chất của Nhà nước và chế độ xã hội XHCN tại Việt Nam." },
    { id: 3, title: "Nền kinh tế phát triển cao dựa trên LLSX hiện đại", desc: "Dựa trên lực lượng sản xuất hiện đại và quan hệ sản xuất tiến bộ phù hợp." },
    { id: 4, title: "Có nền văn hóa tiên tiến, đậm đà bản sắc dân tộc", desc: "Văn hóa là nền tảng tinh thần của xã hội, là mục tiêu và động lực phát triển." },
    { id: 5, title: "Con người có cuộc sống ấm no, tự do, hạnh phúc", desc: "Con người được phát triển toàn diện, có điều kiện phát triển năng lực cá nhân." },
    { id: 6, title: "Các dân tộc trong cộng đồng Việt Nam bình đẳng, đoàn kết", desc: "Tôn trọng, tôn vinh và giúp đỡ nhau cùng phát triển." },
    { id: 7, title: "Nhà nước pháp quyền XHCN của Dân, do Dân, vì Dân", desc: "Do Đảng Cộng sản Việt Nam lãnh đạo." },
    { id: 8, title: "Có quan hệ hữu nghị và hợp tác với các nước trên thế giới", desc: "Thực hiện đường lối đối ngoại độc lập, tự chủ, hòa bình, hợp tác và phát triển." }
  ];

  // Flashcards for Congress X & XI
  const flashcards = [
    {
      id: "fc1",
      question: "Đại hội đại biểu toàn quốc lần thứ X của Đảng diễn ra vào thời gian nào?",
      answer: "Đại hội X diễn ra từ ngày 18 đến ngày 25/4/2006 tại Hà Nội."
    },
    {
      id: "fc2",
      question: "Đột phá lý luận nổi bật nhất của Đại hội X về Đảng viên làm kinh tế?",
      answer: "Cho phép Đảng viên làm kinh tế tư nhân (kể cả tư bản tư nhân) nhưng phải tuân thủ Điều lệ Đảng và pháp luật."
    },
    {
      id: "fc3",
      question: "Việt Nam chính thức trở thành thành viên thứ 150 của Tổ chức Thương mại Thế giới (WTO) vào mốc nào?",
      answer: "Việt Nam kết nạp WTO ngày 7/11/2006 và chính thức là thành viên thứ 150 từ ngày 11/1/2007."
    },
    {
      id: "fc4",
      question: "Việt Nam chính thức thoát khỏi nhóm nước nghèo, kém phát triển vào năm nào?",
      answer: "Năm 2008, Việt Nam vượt ngưỡng thu nhập thấp, trở thành nước có thu nhập trung bình (Middle-Income Country)."
    },
    {
      id: "fc5",
      question: "Số lượng bài học kinh nghiệm được tổng kết sau 20 năm Đổi mới (1986 - 2006) tại Đại hội X?",
      answer: "5 bài học kinh nghiệm lớn về Đổi mới."
    },
    {
      id: "fc6",
      question: "Đại hội XI của Đảng diễn ra vào thời gian nào?",
      answer: "Đại hội XI diễn ra từ ngày 12 đến ngày 19/1/2011 tại Hà Nội."
    },
    {
      id: "fc7",
      question: "Tên đầy đủ của Cương lĩnh lịch sử được thông qua tại Đại hội XI năm 2011?",
      answer: "'Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội (Bổ sung, phát triển năm 2011)'."
    },
    {
      id: "fc8",
      question: "Cương lĩnh 2011 xác định xã hội XHCN mà nhân dân ta xây dựng có bao nhiêu đặc trưng?",
      answer: "Có 8 đặc trưng tổng quát."
    },
    {
      id: "fc9",
      question: "Chủ đề của Đại hội XI năm 2011 là gì?",
      answer: "'Tiếp tục nâng cao năng lực lãnh đạo và sức chiến đấu của Đảng, phát huy sức mạnh toàn dân tộc, đẩy mạnh toàn diện công cuộc đổi mới...'"
    },
    {
      id: "fc10",
      question: "Chiến lược phát triển kinh tế - xã hội được Đại hội XI thông qua cho giai đoạn nào?",
      answer: "Chiến lược phát triển kinh tế - xã hội 10 năm (2011 - 2020)."
    },
    {
      id: "fc11",
      question: "Mục tiêu tổng quát đến năm 2020 được Đại hội XI đề ra là gì?",
      answer: "Tạo nền tảng để đến năm 2020 nước ta cơ bản trở thành nước công nghiệp theo hướng hiện đại."
    },
    {
      id: "fc12",
      question: "Đại hội X xác định mục tiêu sớm đưa nước ta ra khỏi tình trạng nào?",
      answer: "Sớm đưa nước ta ra khỏi tình trạng kém phát triển và tạo nền tảng để đến năm 2020 cơ bản trở thành nước công nghiệp hiện đại."
    },
    {
      id: "fc13",
      question: "Điểm bổ sung mới về bản chất của Đảng trong Cương lĩnh 2011 là gì?",
      answer: "Đảng là đội tiên phong của giai cấp công nhân, đồng thời là đội tiên phong của Nhân dân lao động và của cả dân tộc Việt Nam."
    },
    {
      id: "fc14",
      question: "Hội nhập quốc tế giai đoạn 2006 - 2011 có bước phát triển chất mới như thế nào?",
      answer: "Chuyển từ 'hội nhập kinh tế quốc tế' sang 'chủ động, tích cực hội nhập quốc tế toàn diện'."
    },
    {
      id: "fc15",
      question: "Khẳng định cốt lõi của Cương lĩnh 2011 về con đường đi lên CNXH?",
      answer: "Đi lên chủ nghĩa xã hội là khát vọng của nhân dân ta, là lựa chọn đúng đắn của Đảng Cộng sản Việt Nam và Chủ tịch Hồ Chí Minh."
    }
  ];

  return (
    <div className="w-full space-y-8 md:space-y-10 pb-16 font-sans text-slate-800">
      
      {/* 🌟 MASTER HERO BANNER (FLUID TYPOGRAPHY & RESPONSIVE PADDING) */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-950 via-red-900 to-amber-950 p-6 sm:p-8 md:p-12 text-white shadow-2xl border border-red-800/40">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-72 md:w-96 h-72 md:h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="relative z-10 max-w-4xl space-y-4 md:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 md:px-3.5 md:py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs md:text-sm font-semibold backdrop-blur-md">
            <Crown className="w-4 h-4 text-amber-400" />
            <span>Chương III | Mục II.2 Part 2: Đại Hội X (2006) & Đại Hội XI (2011)</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-100 to-white font-serif">
            Đột Phá Tư Duy Lý Luận Đại Hội X & Cương Lĩnh Bổ Sung 2011
          </h1>

          <p className="text-red-100/90 text-sm md:text-lg leading-relaxed max-w-3xl font-medium">
            Đánh giá chặng đường <strong className="text-amber-300">20 năm Đổi mới (1986 - 2006)</strong>, mốc lịch sử <strong className="text-yellow-200">Gia nhập WTO (2007)</strong>, vượt ngưỡng nước thu nhập thấp (2008) và <strong className="text-amber-300">Cương lĩnh 8 đặc trưng (2011)</strong>.
          </p>

          {/* Fluid Responsive Metric Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 pt-4 border-t border-red-800/60 text-xs md:text-sm">
            <div className="bg-red-950/60 backdrop-blur-sm p-3 md:p-3.5 rounded-xl border border-red-700/50">
              <div className="text-amber-400 text-[10px] md:text-xs font-semibold uppercase tracking-wider">Đại hội X</div>
              <div className="text-white font-bold text-sm md:text-base mt-0.5">Tháng 4/2006</div>
            </div>
            <div className="bg-red-950/60 backdrop-blur-sm p-3 md:p-3.5 rounded-xl border border-red-700/50">
              <div className="text-amber-400 text-[10px] md:text-xs font-semibold uppercase tracking-wider">Gia nhập WTO</div>
              <div className="text-white font-bold text-sm md:text-base mt-0.5">Tháng 1/2007</div>
            </div>
            <div className="bg-red-950/60 backdrop-blur-sm p-3 md:p-3.5 rounded-xl border border-red-700/50">
              <div className="text-amber-400 text-[10px] md:text-xs font-semibold uppercase tracking-wider">Thu nhập Trung bình</div>
              <div className="text-white font-bold text-sm md:text-base mt-0.5">Năm 2008</div>
            </div>
            <div className="bg-red-950/60 backdrop-blur-sm p-3 md:p-3.5 rounded-xl border border-red-700/50">
              <div className="text-amber-400 text-[10px] md:text-xs font-semibold uppercase tracking-wider">Cương lĩnh Bổ sung</div>
              <div className="text-white font-bold text-sm md:text-base mt-0.5">Tháng 1/2011</div>
            </div>
          </div>
        </div>
      </section>

      {/* 📌 KHỐI 1: ĐẠI HỘI X (4/2006) & 5 BÀI HỌC 20 NĂM ĐỔI MỚI */}
      <section className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-sm border border-slate-200/80 space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
          <div className="w-10 h-10 rounded-xl bg-red-700 text-white flex items-center justify-center font-bold shrink-0">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold text-red-700 uppercase tracking-wider">Đại hội X (18 - 25/4/2006)</span>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 font-serif">1. Đại Hội X & Tổng Kết 20 Năm Đổi Mới (1986 - 2006)</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Key highlights of Congress X */}
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <span className="px-2.5 py-0.5 bg-red-100 text-red-800 font-bold text-xs rounded-full">
                  Đột phá Tư duy Lý luận
                </span>
                <span className="text-xs text-slate-500 font-semibold">Hà Nội 2006</span>
              </div>
              <h3 className="text-base md:text-lg font-bold text-slate-900 font-serif">
                Cho phép Đảng viên làm Kinh tế tư nhân
              </h3>
              <p className="text-slate-700 text-xs md:text-sm leading-relaxed font-medium">
                Đại hội X lần đầu tiên giải phóng tư tưởng, cho phép Đảng viên làm kinh tế tư nhân (kể cả tư bản tư nhân) nhưng phải chấp hành nghiêm Điều lệ Đảng và pháp luật.
              </p>
            </div>

            <div className="p-4 bg-white rounded-xl border border-amber-300 text-xs text-amber-950 font-medium space-y-1">
              <div className="font-bold text-amber-900 uppercase text-[10px] tracking-wider">Cột mốc đối ngoại vàng (2007)</div>
              <div>Việt Nam chính thức gia nhập WTO (thành viên thứ 150) từ 11/1/2007. Đến năm 2008 thoát nghèo trở thành nước có thu nhập trung bình.</div>
            </div>
          </div>

          {/* 5 Lessons Stack */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-red-800 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-600" />
              5 Bài học kinh nghiệm sau 20 năm Đổi mới:
            </div>
            <div className="space-y-2 text-xs md:text-sm">
              {lessons20Years.map((item) => (
                <div key={item.num} className="bg-gradient-to-br from-slate-50 to-amber-50/50 p-3.5 rounded-xl border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900 flex items-center gap-2 font-serif">
                    <span className="w-5 h-5 rounded-full bg-red-700 text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                      {item.num}
                    </span>
                    <span>{item.title}</span>
                  </div>
                  <p className="text-slate-600 text-xs pl-7 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 📌 KHỐI 2: ĐẠI HỘI XI (1/2011) & CƯƠNG LĨNH BỔ SUNG 8 ĐẶC TRƯNG */}
      <section className="bg-gradient-to-br from-amber-500/10 via-amber-400/5 to-red-500/10 rounded-2xl p-5 sm:p-6 md:p-8 border border-amber-300/60 shadow-sm space-y-6">
        <div className="flex items-center gap-3 border-b border-amber-200/60 pb-4">
          <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold shadow-md shrink-0">
            <Landmark className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-amber-800 uppercase tracking-wider">Đại hội XI (12 - 19/1/2011)</div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 font-serif">2. Cương Lĩnh Bổ Sung 2011 & 8 Đặc Trưng Xã Hội XHCN</h2>
          </div>
        </div>

        {/* 8 Characteristics Grid (Single-column Stack on Mobile, 2-col on Tablet, 4-col on Desktop) */}
        <div className="space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-amber-600" />
            8 Đặc trưng mô hình Xã hội XHCN mà Nhân dân ta xây dựng (Cương lĩnh 2011):
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs md:text-sm">
            {characteristics2011.map((item) => (
              <div key={item.id} className="bg-white/95 backdrop-blur-sm p-4 rounded-xl border border-amber-200/90 shadow-sm space-y-1.5 flex flex-col justify-between">
                <div className="space-y-1">
                  <div className="flex items-center justify-between border-b border-amber-100 pb-1">
                    <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-900 text-[10px] font-extrabold flex items-center justify-center">
                      {item.id}
                    </span>
                    <span className="text-[10px] font-bold text-amber-800">Cương lĩnh 2011</span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-xs md:text-sm font-serif leading-snug pt-1">
                    {item.title}
                  </h4>
                </div>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 📌 KHỐI 3: BẢNG SO SÁNH TỔNG HỢP (SINGLE-COLUMN STACK ON MOBILE RESPONSIVE) */}
      <section className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-sm border border-slate-200/80 space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
          <div className="w-10 h-10 rounded-xl bg-red-700 text-white flex items-center justify-center font-bold shrink-0">
            <Scale className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold text-red-700 uppercase tracking-wider">So sánh đối chiếu</span>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 font-serif">3. Bảng Tổng Hợp So Sánh Đột Phá Giữa Đại Hội X (2006) & Đại Hội XI (2011)</h2>
          </div>
        </div>

        {/* Responsive Table / Stack Container */}
        <div className="space-y-3">
          {/* Desktop/Tablet Table View */}
          <div className="hidden md:block overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left text-xs md:text-sm border-collapse">
              <thead>
                <tr className="bg-red-900 text-white font-bold font-serif uppercase tracking-wider text-[11px]">
                  <th className="p-3.5 w-1/4">Tiêu chí so sánh</th>
                  <th className="p-3.5 w-3/8">Đại hội X (4/2006)</th>
                  <th className="p-3.5 w-3/8">Đại hội XI (1/2011)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-slate-50/50">
                <tr>
                  <td className="p-3.5 font-bold text-slate-900 font-serif">Văn kiện trung tâm</td>
                  <td className="p-3.5 text-slate-700">Báo cáo chính trị & Báo cáo phương hướng 5 năm (2006-2010)</td>
                  <td className="p-3.5 text-slate-700"><strong>Cương lĩnh bổ sung 2011</strong> & Chiến lược KTXH 10 năm (2011-2020)</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-slate-900 font-serif">Đột phá về Kinh tế</td>
                  <td className="p-3.5 text-slate-700">Đảng viên được làm kinh tế tư nhân; Gia nhập WTO (2007)</td>
                  <td className="p-3.5 text-slate-700">Tái cơ cấu kinh tế, chuyển đổi mô hình tăng trưởng bền vững</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-slate-900 font-serif">Đột phá về Bản chất Đảng</td>
                  <td className="p-3.5 text-slate-700">Đội tiên phong của Giai cấp công nhân Việt Nam</td>
                  <td className="p-3.5 text-slate-700">Đội tiên phong của GC công nhân, đồng thời của Nhân dân lao động & Dân tộc</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-slate-900 font-serif">Vị thế Kinh tế Đất nước</td>
                  <td className="p-3.5 text-slate-700">Sớm đưa nước ta ra khỏi tình trạng kém phát triển</td>
                  <td className="p-3.5 text-slate-700">Đã ra khỏi nhóm thu nhập thấp (2008); Phấn đấu cơ bản thành nước công nghiệp 2020</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile Single-Column Stack View (<768px) */}
          <div className="md:hidden space-y-3 text-xs">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
              <div className="font-bold text-red-800 border-b border-slate-200 pb-1">Văn kiện trung tâm:</div>
              <div>• <strong>Đại hội X</strong>: Báo cáo chính trị & Báo cáo phương hướng 5 năm (2006-2010).</div>
              <div>• <strong>Đại hội XI</strong>: <strong>Cương lĩnh bổ sung 2011</strong> & Chiến lược KTXH 10 năm (2011-2020).</div>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
              <div className="font-bold text-red-800 border-b border-slate-200 pb-1">Đột phá về Kinh tế:</div>
              <div>• <strong>Đại hội X</strong>: Đảng viên được làm kinh tế tư nhân; Gia nhập WTO (2007).</div>
              <div>• <strong>Đại hội XI</strong>: Tái cơ cấu kinh tế, chuyển đổi mô hình tăng trưởng bền vững.</div>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
              <div className="font-bold text-red-800 border-b border-slate-200 pb-1">Đột phá về Bản chất Đảng:</div>
              <div>• <strong>Đại hội X</strong>: Đội tiên phong của Giai cấp công nhân Việt Nam.</div>
              <div>• <strong>Đại hội XI</strong>: Đội tiên phong của GC công nhân, đồng thời của Nhân dân lao động & Dân tộc.</div>
            </div>
          </div>
        </div>
      </section>

      {/* 📌 KHỐI 4: THẺ FLASHCARD TỰ ÔN TẬP ĐẠI HỘI X & XI (2 CỘT COMPACT ON MOBILE) */}
      <section className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-sm border border-slate-200/80 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-900 flex items-center justify-center font-bold shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 font-serif">4. Thẻ Ghi Nhớ Flashcards Ôn Thi Đại Hội X & XI</h2>
              <p className="text-xs text-slate-500">Nhấp vào từng thẻ để lật xem đáp án ghi nhớ nhanh</p>
            </div>
          </div>
        </div>

        {/* 2-column Compact Grid on Mobile (<768px), 5-column Grid on Desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {flashcards.map((fc) => {
            const isFlipped = !!flippedCards[fc.id];
            return (
              <div
                key={fc.id}
                onClick={() => toggleCardFlip(fc.id)}
                className={`min-h-[160px] sm:min-h-[175px] p-3.5 sm:p-4.5 rounded-2xl cursor-pointer transition-all duration-300 flex flex-col justify-between border shadow-sm ${
                  isFlipped
                    ? "bg-red-900 text-white border-red-800 shadow-md"
                    : "bg-gradient-to-br from-slate-50 to-amber-50/50 text-slate-900 border-slate-200 hover:border-amber-400 hover:shadow-md"
                }`}
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[9px] sm:text-[10px] font-bold uppercase tracking-wider opacity-80">
                    <span>{isFlipped ? "💡 Đáp án" : "❓ Câu hỏi"}</span>
                    <RotateCcw className="w-3 h-3" />
                  </div>

                  <p className="text-[11px] sm:text-xs font-semibold leading-relaxed">
                    {isFlipped ? fc.answer : fc.question}
                  </p>
                </div>

                <div className="text-[9px] sm:text-[10px] font-medium text-right opacity-70 pt-2">
                  {isFlipped ? "Nhấn lật hỏi" : "Nhấn lật đáp án"}
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
