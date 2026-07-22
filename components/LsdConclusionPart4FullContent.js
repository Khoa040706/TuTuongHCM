"use client";
import React, { useState } from "react";
import { 
  Calendar, Users, Award, BookOpen, ChevronRight, CheckCircle2, 
  Sparkles, Target, Star, Flag, Clock, ShieldCheck, Heart, 
  Layers, Lightbulb, Zap, ArrowRight, RotateCcw, Bookmark, ExternalLink,
  Globe, Shield, TrendingUp, Building2, UserCheck, Scale, Compass,
  Quote, Crown, Flame, Landmark, CheckSquare, Feather, FileText, UserPlus,
  Medal, Flower2, Search
} from "lucide-react";

export default function LsdConclusionPart4FullContent() {
  // Active search or filter term for keywords matrix
  const [searchTerm, setSearchTerm] = useState("");

  // Flashcard flip states
  const [flippedCards, setFlippedCards] = useState({});

  const toggleCardFlip = (id) => {
    setFlippedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // 6 Glorious Traditions of the Party
  const traditions = [
    {
      num: "01",
      title: "Đấu tranh kiên cường, bất khuất",
      desc: "Vì lý tưởng cách mạng cao cả, vì nước, vì dân, với sự hy sinh anh dũng của nhiều thế hệ cán bộ, đảng viên."
    },
    {
      num: "02",
      title: "Đoàn kết, thống nhất trong Đảng",
      desc: "Thống nhất nhận thức, ý chí và hành động -- coi giữ gìn đoàn kết như giữ gìn con ngươi của mắt mình."
    },
    {
      num: "03",
      title: "Tự phê bình & Phê bình nghiêm túc",
      desc: "Quyết tâm sửa chữa khuyết điểm, hạn chế, yếu kém; không ngừng tự đổi mới, tự chỉnh đốn Đảng."
    },
    {
      num: "04",
      title: "Gắn bó mật thiết với Nhân dân",
      desc: "Gắn bó với giai cấp công nhân, nhân dân lao động và toàn dân tộc -- lấy 'Dân là gốc' làm nền tảng."
    },
    {
      num: "05",
      title: "Rèn luyện phẩm chất, đạo đức cách mạng",
      desc: "Nâng cao bản lĩnh chính trị, vượt qua mọi khó khăn, thách thức, giữ vững niềm tin cách mạng."
    },
    {
      num: "06",
      title: "Chủ nghĩa quốc tế trong sáng",
      desc: "Kết hợp sức mạnh dân tộc với sức mạnh thời đại, thủy chung, nghĩa tình với bạn bè quốc tế."
    }
  ];

  // Outstanding leaders who sacrificed
  const leadersList = [
    "Trần Phú (Tổng Bí thư đầu tiên)", "Lê Hồng Phong (Tổng Bí thư)", "Hà Huy Tập (Tổng Bí thư)", 
    "Nguyễn Văn Cừ (Tổng Bí thư)", "Châu Văn Liêm", "Nguyễn Phong Sắc", 
    "Nguyễn Đức Cảnh", "Ngô Gia Tự", "Võ Văn Tần", "Phan Đăng Lưu", 
    "Nguyễn Thị Minh Khai", "Phùng Chí Kiên", "Tô Hiệu", "Hoàng Văn Thụ"
  ];

  // Young revolutionary martyrs list
  const youngMartyrsList = [
    "Lý Tự Trọng", "Nguyễn Hoàng Tôn", "Kim Đồng", "Võ Thị Sáu", "Trần Văn Ơn", "Lê Bình", 
    "Mạc Thị Bưởi", "Bùi Thị Cúc", "Nguyễn Thị Lợi", "Cù Chính Lan", "Phan Đình Giót", 
    "Bế Văn Đàn", "Tô Vĩnh Diện", "Nguyễn Văn Trỗi", "Nguyễn Việt Xuân", "Bùi Ngọc Dương", 
    "Lê Thị Riêng", "Lê Anh Xuân", "Nguyễn Thị Út (Út Tích)", "Quách Thị Trang", 
    "Nguyễn Phan Vinh", "Lê Thị Hồng Gấm", "Nguyễn Thái Bình", "Phạm Ngọc Thảo", 
    "Vũ Xuân Thiều", "Đặng Thùy Trâm", "Nguyễn Văn Thạc", "Lê Đình Chinh", "Hoàng Thị Hồng Chiêm"
  ];

  // Final Master Flashcards
  const flashcards = [
    {
      id: "fc1",
      question: "Tổng Bí thư đầu tiên của Đảng Cộng sản Việt Nam hy sinh anh dũng năm 1931 là ai?",
      answer: "Đồng chí Trần Phú (Tổng Bí thư đầu tiên của Đảng, hy sinh tại Nhà thương Chợ Quán năm 1931)."
    },
    {
      id: "fc2",
      question: "Câu nói nổi tiếng của người anh hùng trẻ tuổi Lý Tự Trọng trước pháp trường?",
      answer: "'Con đường của thanh niên chỉ có thể là con đường cách mạng, không thể có con đường nào khác'."
    },
    {
      id: "fc3",
      question: "Người nữ anh hùng Đất Đỏ Võ Thị Sáu hy sinh tại Côn Đảo năm nào?",
      answer: "Chị Võ Thị Sáu hy sinh anh dũng ngày 23/1/1952 tại Côn Đảo khi mới 19 tuổi."
    },
    {
      id: "fc4",
      question: "Những anh hùng nổi tiếng gắn liền với Chiến dịch Điện Biên Phủ 1954?",
      answer: "Phan Đình Giót (lấy thân mình lấp lỗ châu mai), Bế Văn Đàn (lấy thân làm giá súng), Tô Vĩnh Diện (lấy thân chèn pháo)."
    },
    {
      id: "fc5",
      question: "Anh hùng Nguyễn Văn Trỗi nổi tiếng với câu nói trước pháp trường năm 1964?",
      answer: "'Hãy nhớ lấy lời tôi! Đả đảo đế quốc Mỹ! Hồ Chí Minh muôn năm!'."
    },
    {
      id: "fc6",
      question: "Khẳng định vĩ đại của Nghị quyết HNTW 4 khóa XII (30/10/2016) về vị thế đất nước?",
      answer: "'Đất nước ta chưa bao giờ có được cơ đồ và vị thế như ngày nay... Chúng ta có quyền tự hào về bản chất tốt đẹp, truyền thống anh hùng và lịch sử vẻ vang của Đảng ta'."
    },
    {
      id: "fc7",
      question: "Sáu truyền thống vẻ vang nhất của Đảng Cộng sản Việt Nam?",
      answer: "(1) Đấu tranh kiên cường; (2) Đoàn kết thống nhất; (3) Tự phê bình và phê bình; (4) Gắn bó mật thiết với Nhân dân; (5) Rèn luyện đạo đức bản lĩnh; (6) Chủ nghĩa quốc tế trong sáng."
    },
    {
      id: "fc8",
      question: "Nguyên tắc tổ chức cơ bản nhất quản trị nội bộ Đảng là gì?",
      answer: "Nguyên tắc 'Tập trung dân chủ'."
    },
    {
      id: "fc9",
      question: "Năm 1994 (Hội nghị giữa nhiệm kỳ VII), Đảng chỉ ra 4 nguy cơ lớn nào?",
      answer: "Tụt hậu kinh tế, Chệch hướng XHCN, Tham nhũng quan liêu, Diễn biến hòa bình."
    },
    {
      id: "fc10",
      question: "Chủ trương đối ngoại nâng tầm Việt Nam được Đại hội XII khẳng định là gì?",
      answer: "'Việt Nam là bạn, đối tác tin cậy và thành viên có trách nhiệm của cộng đồng quốc tế'."
    },
    {
      id: "fc11",
      question: "Các văn kiện mang tính Cương lĩnh lịch sử của Đảng được ban hành vào những năm nào?",
      answer: "Cương lĩnh đầu tiên (2/1930), Cương lĩnh 1991 (Đại hội VII) và Cương lĩnh bổ sung, phát triển 2011 (Đại hội XI)."
    },
    {
      id: "fc12",
      question: "Đại hội nào khởi xướng đường lối Đổi mới toàn diện đất nước?",
      answer: "Đại hội đại biểu toàn quốc lần thứ VI của Đảng (tháng 12/1986)."
    },
    {
      id: "fc13",
      question: "Số lượng các mối quan hệ lớn phản ánh quy luật Đổi mới do Cố TBT Nguyễn Phú Trọng nêu tại Đại hội XII?",
      answer: "9 mối quan hệ lớn."
    },
    {
      id: "fc14",
      question: "Chỉ thị 05-CT/TW (15/5/2016) của Bộ Chính trị có nội dung cốt lõi gì?",
      answer: "Đẩy mạnh học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh."
    },
    {
      id: "fc15",
      question: "Chủ đề cốt lõi xuyên suốt tư tưởng Hồ Chí Minh và Cương lĩnh Đảng?",
      answer: "'Độc lập dân tộc gắn liền với Chủ nghĩa xã hội'."
    },
    {
      id: "fc16",
      question: "Ai là người tác giả của hai tác phẩm 'Đường Kách mệnh' (1927) và 'Sửa đổi lối làm việc' (1947)?",
      answer: "Chủ tịch Hồ Chí Minh (Nguyễn Ái Quốc)."
    },
    {
      id: "fc17",
      question: "Tỷ lệ hộ nghèo cả nước giảm từ năm 1993 đến năm 2018 thế nào?",
      answer: "Giảm từ 58% (1993) xuống còn khoảng 6% (2018)."
    },
    {
      id: "fc18",
      question: "Hai chiến lược cách mạng song song Đảng lãnh đạo giai đoạn 1954 - 1975?",
      answer: "Cách mạng XHCN ở miền Bắc và Cách mạng dân tộc dân chủ nhân dân ở miền Nam."
    },
    {
      id: "fc19",
      question: "Ba chương trình kinh tế lớn do Đại hội VI (12/1986) đề ra?",
      answer: "(1) Lương thực - thực phẩm, (2) Hàng tiêu dùng, (3) Hàng xuất khẩu."
    },
    {
      id: "fc20",
      question: "Nhân tố quyết định thắng lợi hàng đầu của toàn bộ cách mạng Việt Nam?",
      answer: "Sự lãnh đạo đúng đắn, sáng tạo của Đảng Cộng sản Việt Nam."
    }
  ];

  return (
    <div className="w-full space-y-10 pb-16 font-sans text-slate-800">
      
      {/* 🌟 MASTER FINAL MONUMENT HERO BANNER */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-950 via-red-900 to-amber-950 p-8 md:p-12 text-white shadow-2xl border border-red-800/40">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs md:text-sm font-semibold backdrop-blur-md">
            <Medal className="w-4 h-4 text-amber-400" />
            <span>KẾT LUẬN | Mục IV: Truyền Thống Vẻ Vang & Tổng Ôn Toàn Bộ Môn Học</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-100 to-white font-serif">
            Truyền Thống Vẻ Vang Của Đảng & Tưởng Niệm Sự Hy Sinh Của Các Thế Hệ Anh Hùng
          </h1>

          <p className="text-red-100/90 text-base md:text-lg leading-relaxed max-w-3xl">
            Tôn vinh <strong className="text-amber-300">6 truyền thống vẻ vang</strong>, đời đời ghi nhớ công ơn <strong className="text-yellow-200">các thế hệ nhà lãnh đạo và chiến sĩ cách mạng trẻ tuổi đã hy sinh anh dũng</strong> vì nền độc lập tự do của Tổ quốc.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-red-800/60">
            <div className="bg-red-950/60 backdrop-blur-sm p-3.5 rounded-xl border border-red-700/50">
              <div className="text-amber-400 text-xs font-semibold uppercase tracking-wider">Truyền thống vẻ vang</div>
              <div className="text-white font-bold text-base mt-1">6 Truyền Thống</div>
            </div>
            <div className="bg-red-950/60 backdrop-blur-sm p-3.5 rounded-xl border border-red-700/50">
              <div className="text-amber-400 text-xs font-semibold uppercase tracking-wider">Lãnh đạo hy sinh</div>
              <div className="text-white font-bold text-base mt-1">14+ Tiêu Biểu</div>
            </div>
            <div className="bg-red-950/60 backdrop-blur-sm p-3.5 rounded-xl border border-red-700/50">
              <div className="text-amber-400 text-xs font-semibold uppercase tracking-wider">Chiến sĩ trẻ tuổi</div>
              <div className="text-white font-bold text-base mt-1">29+ Anh Hùng</div>
            </div>
            <div className="bg-red-950/60 backdrop-blur-sm p-3.5 rounded-xl border border-red-700/50">
              <div className="text-amber-400 text-xs font-semibold uppercase tracking-wider">Flashcards Ôn thi</div>
              <div className="text-white font-bold text-base mt-1">20+ Thẻ Tổng Ôn</div>
            </div>
          </div>
        </div>
      </section>

      {/* 📌 KHỐI 1: GOLDEN HERITAGE CARDS (6 TRUYỀN THỐNG VẺ VANG CỦA ĐẢNG) */}
      <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/80 space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
          <div className="w-10 h-10 rounded-xl bg-red-700 text-white flex items-center justify-center font-bold">
            <Medal className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold text-red-700 uppercase tracking-wider">Truyền thống anh hùng</span>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-serif">1. 6 Truyền Thống Vẻ Vang Của Đảng Cộng Sản Việt Nam</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {traditions.map((item, idx) => (
            <div key={idx} className="bg-gradient-to-br from-red-50/70 to-amber-50/50 p-6 rounded-2xl border border-red-200/80 hover:border-amber-400 transition-all space-y-3 shadow-sm">
              <div className="flex items-center justify-between border-b border-red-200/60 pb-2">
                <span className="text-2xl font-black text-red-700 font-serif">
                  {item.num}
                </span>
                <span className="px-2.5 py-0.5 bg-amber-100 text-amber-900 text-[10px] font-bold rounded-md uppercase">
                  Truyền thống
                </span>
              </div>
              <h3 className="font-bold text-slate-900 text-base font-serif leading-snug">
                {item.title}
              </h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 📌 KHỐI 2: MEMORIAL HONOR WALL (ĐÀI VINH DANH ANH HÙNG LIỆT SĨ - GIAO DIỆN SÁNG SANG TRỌNG) */}
      <section className="bg-gradient-to-br from-amber-500/10 via-amber-400/5 to-red-500/10 text-slate-900 rounded-3xl p-6 md:p-8 shadow-xl border border-amber-300/80 space-y-6 backdrop-blur-md">
        <div className="flex items-center gap-3 border-b border-amber-200/80 pb-4">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-red-700 to-amber-600 text-white flex items-center justify-center font-bold shadow-md shadow-red-700/20">
            <Flower2 className="w-6 h-6 text-yellow-200" />
          </div>
          <div>
            <span className="text-xs font-black text-red-700 uppercase tracking-widest">Đời đời ghi nhớ công ơn</span>
            <h2 className="text-xl md:text-2xl font-bold font-serif text-slate-900">2. Đài Vinh Danh Các Thế Hệ Cán Bộ, Đảng Viên & Chiến Sĩ Anh Hùng</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Block 1: Các nhà lãnh đạo tiêu biểu */}
          <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl border border-amber-200/90 shadow-sm space-y-4">
            <div className="font-bold text-red-900 text-base flex items-center gap-2 border-b border-amber-100 pb-2 font-serif">
              <Crown className="w-5 h-5 text-amber-600" />
              Các Nhà Lãnh Đạo Tiêu Biểu Anh Dũng Hy Sinh
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              {leadersList.map((name, lIdx) => (
                <span key={lIdx} className="px-3 py-1.5 bg-red-50 text-red-900 border border-red-200/80 rounded-lg font-semibold flex items-center gap-1.5 hover:border-red-400 hover:bg-red-100 transition-all shadow-xs">
                  <span className="text-red-600 font-bold">★</span>
                  <span>{name}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Block 2: Các chiến sĩ cách mạng trẻ tuổi */}
          <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl border border-amber-200/90 shadow-sm space-y-4">
            <div className="font-bold text-amber-900 text-base flex items-center gap-2 border-b border-amber-100 pb-2 font-serif">
              <Flame className="w-5 h-5 text-red-600" />
              Các Chiến Sĩ Cách Mạng Trẻ Tuổi Tiêu Biểu
            </div>
            <div className="flex flex-wrap gap-2 text-xs max-h-64 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-amber-300">
              {youngMartyrsList.map((name, yIdx) => (
                <span key={yIdx} className="px-3 py-1.5 bg-amber-50 text-amber-950 border border-amber-200/80 rounded-lg font-semibold flex items-center gap-1.5 hover:border-amber-400 hover:bg-amber-100 transition-all shadow-xs">
                  <span className="text-amber-600 font-bold">★</span>
                  <span>{name}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Historic Quote Banner HNTW4 XII */}
        <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl border border-amber-300/90 shadow-md space-y-2 relative overflow-hidden">
          <div className="text-xs font-black text-amber-900 uppercase tracking-wider">Trích dẫn Kinh điển | Nghị quyết HNTW 4 khóa XII (30/10/2016)</div>
          <p className="text-slate-800 font-serif italic text-sm md:text-base leading-relaxed font-medium">
            "Đảng ta vững vàng là Lực lượng Lãnh đạo Nhà nước và xã hội. <strong className="text-red-800 not-italic font-bold">Đất nước ta chưa bao giờ có được cơ đồ và vị thế như ngày nay...</strong> Chúng ta có quyền tự hào về bản chất tốt đẹp, truyền thống anh hùng và lịch sử vẻ vang của Đảng ta -- Đảng của Chủ tịch Hồ Chí Minh vĩ đại, đại biểu của dân tộc Việt Nam anh hùng."
          </p>
        </div>
      </section>

      {/* 📌 KHỐI 3: MA TRẬN TỪ KHÓA ÔN THI TOÀN PHẦN KẾT LUẬN & TOÀN MÔN HỌC */}
      <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/80 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-700 text-white flex items-center justify-center font-bold">
              <Bookmark className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-red-700 uppercase tracking-wider">Tổng ôn toàn môn</span>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-serif">3. Ma Trận Từ Khóa Ôn Thi Cuối Kỳ Trọn Bộ Lịch Sử Đảng</h2>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs md:text-sm">
          <div className="bg-slate-50 p-4.5 rounded-xl border border-slate-200 space-y-2">
            <div className="font-bold text-red-800 text-sm flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-red-600" />
              1. Các Mốc Thời Gian Vàng
            </div>
            <p className="text-slate-700 leading-relaxed">
              <strong>1911-1920</strong> (Bác tìm đường) • <strong>2/1930</strong> (Thành lập Đảng) • <strong>8/1945</strong> (CMT8) • <strong>12/1946</strong> (Toàn quốc kháng chiến) • <strong>7/5/1954</strong> (Điện Biên Phủ) • <strong>30/4/1975</strong> (Đại thắng 1975) • <strong>12/1986</strong> (Đại hội VI Đổi mới) • <strong>2011</strong> (Cương lĩnh 2011).
            </p>
          </div>

          <div className="bg-slate-50 p-4.5 rounded-xl border border-slate-200 space-y-2">
            <div className="font-bold text-amber-800 text-sm flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-amber-600" />
              2. Các Văn Kiện Trọng Tâm
            </div>
            <p className="text-slate-700 leading-relaxed">
              • Cương lĩnh chính trị đầu tiên (2/1930)<br/>
              • Cương lĩnh 1991 & Cương lĩnh bổ sung 2011<br/>
              • Nghị quyết HNTW 4 khóa XII (30/10/2016)<br/>
              • Chỉ thị 05-CT/TW (15/5/2016)<br/>
              • Hiệp định Geneve (21/7/1954)
            </p>
          </div>

          <div className="bg-slate-50 p-4.5 rounded-xl border border-slate-200 space-y-2">
            <div className="font-bold text-emerald-800 text-sm flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-emerald-600" />
              3. Các Tổ Chức Quan Trọng
            </div>
            <p className="text-slate-700 leading-relaxed">
              • Đảng Cộng sản Việt Nam<br/>
              • Mặt trận Việt Minh (1941)<br/>
              • Mặt trận Dân tộc thống nhất / Mặt trận TQVN<br/>
              • Quốc tế Cộng sản
            </p>
          </div>

          <div className="bg-slate-50 p-4.5 rounded-xl border border-slate-200 space-y-2">
            <div className="font-bold text-blue-800 text-sm flex items-center gap-1.5">
              <Flag className="w-4 h-4 text-blue-600" />
              4. Các Sự Kiện Lịch Sử Trọng Tâm
            </div>
            <p className="text-slate-700 leading-relaxed">
              • Cách mạng Tháng Tám 1945<br/>
              • Chiến thắng Điện Biên Phủ (7/5/1954)<br/>
              • Chiến dịch Hồ Chí Minh toàn thắng (30/4/1975)<br/>
              • Các kỳ Đại hội VI (1986), VII (1991), XI (2011), XII (2016)
            </p>
          </div>

          <div className="bg-slate-50 p-4.5 rounded-xl border border-slate-200 space-y-2 lg:col-span-2">
            <div className="font-bold text-purple-900 text-sm flex items-center gap-1.5">
              <CheckSquare className="w-4 h-4 text-purple-700" />
              5. Đường Lối & Khẩu Hiệu Cốt Lõi
            </div>
            <p className="text-slate-700 leading-relaxed">
              • Đường lối kháng chiến: <em>"Toàn dân, toàn diện, lâu dài, dựa vào sức mình là chính"</em><br/>
              • 2 Chiến lược cách mạng (1954-1975) • Kinh tế thị trường định hướng XHCN<br/>
              • <em>"Dân giàu, nước mạnh, dân chủ, công bằng, văn minh"</em> • <em>"Dân là gốc"</em><br/>
              • 8 Đặc trưng CNXH • 4 Nguy cơ • 9 Mối quan hệ lớn • 5 Bài học lãnh đạo • 6 Truyền thống vẻ vang
            </p>
          </div>
        </div>
      </section>

      {/* 📌 KHỐI 4: THẺ FLASHCARD TỰ ÔN TẬP TỔNG KẾT TOÀN MÔN (20 THẺ LẬT) */}
      <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/80 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-900 flex items-center justify-center font-bold">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-serif">4. Bộ 20 Thẻ Flashcard Ôn Thi Cuối Kỳ Trọn Bộ Lịch Sử Đảng</h2>
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
