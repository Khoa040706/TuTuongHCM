"use client";
import React, { useState } from "react";
import { 
  Calendar, Users, Award, BookOpen, ChevronRight, CheckCircle2, 
  Sparkles, Target, Star, Flag, Clock, ShieldCheck, Heart, 
  Layers, Lightbulb, Zap, ArrowRight, RotateCcw, Bookmark, ExternalLink
} from "lucide-react";

export default function LsdCongress8FullContent() {
  // Timeline interactive selection state
  const [selectedTimelineIndex, setSelectedTimelineIndex] = useState(0);
  
  // Flashcard flip states
  const [flippedCards, setFlippedCards] = useState({});

  // Active view tab for 6 lessons vs 6 views
  const [activeTab, setActiveTab] = useState("lessons");

  const toggleCardFlip = (id) => {
    setFlippedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Timeline events data
  const timelineEvents = [
    {
      date: "28/6 - 1/7/1996",
      title: "Đại hội Đại biểu Toàn quốc lần thứ VIII",
      location: "Hà Nội",
      badge: "Đại hội VIII",
      summary: "1.198 đại biểu đại diện hơn 2,1 triệu đảng viên. Bầu đồng chí Đỗ Mười tiếp tục làm Tổng Bí thư. Đề ra mục tiêu lâu dài: 'Dân giàu, nước mạnh, xã hội công bằng, văn minh'. Mở ra thời kỳ đẩy mạnh CNH - HĐH đất nước.",
      details: [
        "1.198 đại biểu thay mặt 2,1 triệu đảng viên.",
        "Tổng Bí thư Đỗ Mười tiếp tục được tín nhiệm bầu làm Tổng Bí thư.",
        "Tổng kết 10 năm Đổi mới (1986 - 1996): Hoàn thành về cơ bản tiền đề CNH, chuyển sang thời kỳ đẩy mạnh CNH - HĐH.",
        "Đề ra 6 bài học chủ yếu qua 10 năm Đổi mới & 6 quan điểm chỉ đạo CNH-HĐH thời kỳ mới."
      ]
    },
    {
      date: "12/1996",
      title: "Hội nghị Trung ương 2 khóa VIII",
      location: "Hà Nội",
      badge: "TW2 - Quốc sách hàng đầu",
      summary: "Ban hành 2 Nghị quyết chiến lược về Giáo dục - Đào tạo và Khoa học - Công nghệ. Khẳng định GD-ĐT và KH-CN là 'Quốc sách hàng đầu', là động lực then chốt của CNH-HĐH.",
      details: [
        "Phát triển Giáo dục - Đào tạo: Xây dựng con người Việt Nam vừa 'hồng' vừa 'chuyên', học tập thường xuyên, học suốt đời.",
        "Phát triển Khoa học - Công nghệ: Đẩy mạnh nghiên cứu, ứng dụng KH-CN hiện đại, coi KH-CN cùng với GD-ĐT là quốc sách hàng đầu."
      ]
    },
    {
      date: "6/1997",
      title: "Hội nghị Trung ương 3 khóa VIII",
      location: "Hà Nội",
      badge: "TW3 - Dân chủ & Nhà nước",
      summary: "Nghị quyết về phát huy quyền làm chủ của nhân dân, tiếp tục xây dựng Nhà nước CHXHCN Việt Nam trong sạch, vững mạnh với 3 yêu cầu cốt lõi.",
      details: [
        "1. Phát huy quyền làm chủ đại diện và dân chủ trực tiếp của nhân dân.",
        "2. Xây dựng Nhà nước trong sạch, vững mạnh, đẩy mạnh chống tham nhũng, quan liêu, lãng phí.",
        "3. Tăng cường sự lãnh đạo của Đảng đối với Nhà nước."
      ]
    },
    {
      date: "7/1997",
      title: "Bối cảnh: Khủng hoảng tài chính khu vực",
      location: "Đông Nam Á",
      badge: "Bối cảnh Kinh tế",
      summary: "Khủng hoảng tài chính tiền tệ bùng nổ ở khu vực Đông Nam Á. Việt Nam đã kiên cường vượt qua khủng hoảng, duy trì đà tăng trưởng GDP trung bình 7%/năm.",
      details: [
        "Kiên định cơ chế thị trường định hướng XHCN, kiểm soát lạm phát dưới 1%/năm.",
        "Sản xuất công nghiệp tăng trưởng bình quân 13,5%/năm.",
        "Năm 2000 các chỉ tiêu chủ yếu đều đạt hoặc vượt kế hoạch đề ra."
      ]
    },
    {
      date: "12/1997",
      title: "Hội nghị Trung ương 4 khóa VIII",
      location: "Hà Nội",
      badge: "TW4 - Tổng Bí thư Lê Khả Phiêu",
      summary: "Bầu đồng chí Lê Khả Phiêu làm Tổng Bí thư. Ban hành Chiến lược cán bộ thời kỳ đẩy mạnh CNH-HĐH với nguyên tắc phương châm 'Lấy đức làm gốc'.",
      details: [
        "Đồng chí Lê Khả Phiêu được bầu làm Tổng Bí thư BCH TW Đảng.",
        "Chiến lược cán bộ CNH-HĐH: Xây dựng đội ngũ cán bộ có phẩm chất, năng lực, bản lĩnh chính trị vững vàng.",
        "Tiêu chuẩn: Cần kiệm liêm chính, chí công vô tư, trung thực, học tập suốt đời, lấy đức làm gốc."
      ]
    },
    {
      date: "2/1998",
      title: "Chỉ thị số 30-CT/TW của Bộ Chính trị",
      location: "Hà Nội",
      badge: "Chỉ thị 30 - Quy chế dân chủ",
      summary: "Bộ Chính trị ban hành Chỉ thị 30-CT/TW về Xây dựng và thực hiện Quy chế dân chủ ở cơ sở ('Dân biết, dân bàn, dân làm, dân kiểm tra').",
      details: [
        "Cụ thể hóa quyền làm chủ của nhân dân ngay tại địa bàn dân cư, cơ quan, doanh nghiệp.",
        "Mở rộng mô hình phát huy dân chủ trực tiếp ở cơ sở."
      ]
    },
    {
      date: "7/1998",
      title: "Hội nghị Trung ương 5 khóa VIII",
      location: "Hà Nội",
      badge: "TW5 - Tuyên ngôn Văn hóa",
      summary: "Nghị quyết kinh điển về xây dựng và phát triển nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc -- được ví như 'Tuyên ngôn văn hóa của Đảng'.",
      details: [
        "Văn hóa là nền tảng tinh thần của xã hội, vừa là mục tiêu vừa là động lực phát triển KT-XH.",
        "Hai đặc trưng: Tiên tiến (lấy Mác-Lênin, tư tưởng HCM làm cốt lõi) & Đậm đà bản sắc dân tộc.",
        "Đề ra 10 nhiệm vụ cụ thể; phương châm 'Xây đi đôi với chống'; phát động phong trào 'Toàn dân đoàn kết xây dựng đời sống văn hóa'."
      ]
    },
    {
      date: "2/1999",
      title: "Hội nghị Trung ương 6 lần 2 khóa VIII",
      location: "Hà Nội",
      badge: "TW6(2) - Xây dựng Đảng",
      summary: "Nghị quyết về một số vấn đề cấp bách trong công tác xây dựng Đảng hiện nay. Khẳng định ĐCSVN là lực lượng lãnh đạo duy nhất, không chấp nhận đa nguyên đa đảng.",
      details: [
        "Kiên định 5 nguyên tắc: Độc lập dân tộc gắn liền CNXH; Chủ nghĩa Mác-Lênin & Tư tưởng HCM; Đảng là lực lượng lãnh đạo duy nhất; Nhà nước của dân, do dân, vì dân; Tập trung dân chủ.",
        "Nâng cao bản lĩnh chính trị, chống suy thoái tư tưởng đạo đức."
      ]
    },
    {
      date: "8/1999",
      title: "Hội nghị Trung ương 7 khóa VIII",
      location: "Hà Nội",
      badge: "TW7 - Hệ thống chính trị",
      summary: "Nghị quyết về một số vấn đề về tiếp tục đổi mới, tổ chức bộ máy hệ thống chính trị và tiền lương, trợ cấp xã hội.",
      details: [
        "Kiện toàn bộ máy nhà nước gọn nhẹ, hoạt động hiệu lực, hiệu quả.",
        "Cải cách chính sách tiền lương và chính sách người có công."
      ]
    },
    {
      date: "1999 - 2000",
      title: "Các mốc kỷ niệm lịch sử trọng đại",
      location: "Cả nước",
      badge: "Mốc Lịch sử",
      summary: "Kỷ niệm 30 năm thực hiện Di chúc Bác Hồ (1969-1999) và Kỷ niệm 70 năm ngày thành lập Đảng Cộng sản Việt Nam (1930-2000).",
      details: [
        "3/9/1969 - 2/9/1999: 30 năm thực hiện Di chúc Chủ tịch Hồ Chí Minh.",
        "3/2/1930 - 3/2/2000: Kỷ niệm 70 năm thành lập Đảng Cộng sản Việt Nam."
      ]
    }
  ];

  // 6 Lessons learned
  const lessons = [
    {
      num: "01",
      title: "Giữ vững mục tiêu độc lập dân tộc & CNXH",
      desc: "Giữ vững mục tiêu độc lập dân tộc và chủ nghĩa xã hội trong suốt quá trình đổi mới."
    },
    {
      num: "02",
      title: "Kết hợp đổi mới kinh tế với đổi mới chính trị",
      desc: "Kết hợp chặt chẽ ngay từ đầu đổi mới kinh tế với đổi mới chính trị; lấy đổi mới kinh tế làm trọng tâm, từng bước đổi mới chính trị."
    },
    {
      num: "03",
      title: "Phát triển kinh tế thị trường định hướng XHCN",
      desc: "Xây dựng nền kinh tế hàng hoá nhiều thành phần, vận hành theo cơ chế thị trường, tăng cường vai trò quản lý của Nhà nước theo định hướng XHCN."
    },
    {
      num: "04",
      title: "Mở rộng đại đoàn kết toàn dân tộc",
      desc: "Mở rộng, tăng cường khối đại đoàn kết toàn dân, phát huy sức mạnh của cả dân tộc."
    },
    {
      num: "05",
      title: "Mở rộng hợp tác quốc tế",
      desc: "Mở rộng hợp tác quốc tế, tranh thủ sự đồng tình, ủng hộ của nhân dân thế giới, kết hợp sức mạnh dân tộc với sức mạnh thời đại."
    },
    {
      num: "06",
      title: "Tăng cường vai trò lãnh đạo của Đảng",
      desc: "Tăng cường vai trò lãnh đạo của Đảng, coi xây dựng Đảng là nhiệm vụ then chốt."
    }
  ];

  // 6 Views on CNH-HĐH
  const cnhViews = [
    {
      num: "01",
      title: "Độc lập tự chủ & Mở rộng hợp tác",
      desc: "Giữ vững độc lập, tự chủ đi đôi với mở rộng quan hệ quốc tế, đa phương hoá, đa dạng hoá; dựa vào nội lực là chính đi đôi với tranh thủ tối đa nguồn lực bên ngoài."
    },
    {
      num: "02",
      title: "Sự nghiệp toàn dân & Kinh tế Nhà nước chủ đạo",
      desc: "CNH - HĐH là sự nghiệp của toàn dân, mọi thành phần kinh tế, trong đó kinh tế nhà nước giữ vai trò chủ đạo."
    },
    {
      num: "03",
      title: "Con người là yếu tố cơ bản",
      desc: "Lấy phát huy nguồn lực con người làm yếu tố cơ bản cho phát triển nhanh và bền vững."
    },
    {
      num: "04",
      title: "KH-CN là động lực then chốt",
      desc: "Khoa học và công nghệ là động lực của công nghiệp hoá, hiện đại hoá."
    },
    {
      num: "05",
      title: "Hiệu quả KT-XH là chuẩn mực",
      desc: "Lấy hiệu quả kinh tế - xã hội làm chuẩn cơ bản để xác định phương hướng phát triển, lựa chọn dự án đầu tư và công nghệ."
    },
    {
      num: "06",
      title: "Kết hợp kinh tế với Quốc phòng - An ninh",
      desc: "Kết hợp chặt chẽ phát triển kinh tế với tăng cường quốc phòng, an ninh."
    }
  ];

  // Exam keynotes Flashcards
  const flashcards = [
    {
      id: "fc1",
      question: "Thời gian & Địa điểm tổ chức Đại hội VIII?",
      answer: "Tổ chức tại Hà Nội, từ ngày 28/6 đến ngày 1/7/1996. Đồng chí Đỗ Mười tiếp tục làm Tổng Bí thư."
    },
    {
      id: "fc2",
      question: "Khẩu hiệu / Mục tiêu lâu dài của Đại hội VIII?",
      answer: "'Dân giàu, nước mạnh, xã hội công bằng, văn minh' -- Đánh dấu bước ngoặt chuyển sang thời kỳ đẩy mạnh CNH - HĐH."
    },
    {
      id: "fc3",
      question: "Hội nghị Trung ương nào được ví là 'Tuyên ngôn văn hóa của Đảng'?",
      answer: "Hội nghị Trung ương 5 khóa VIII (7/1998) với Nghị quyết về xây dựng nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc."
    },
    {
      id: "fc4",
      question: "Hai lĩnh vực nào được HNTW 2 khóa VIII xác định là 'Quốc sách hàng đầu'?",
      answer: "Giáo dục - Đào tạo và Khoa học - Công nghệ."
    },
    {
      id: "fc5",
      question: "Ai được bầu làm Tổng Bí thư tại HNTW 4 khóa VIII (12/1997)? Phương châm công tác cán bộ là gì?",
      answer: "Đồng chí Lê Khả Phiêu được bầu làm Tổng Bí thư. Phương châm xây dựng đội ngũ cán bộ là 'Lấy đức làm gốc'."
    },
    {
      id: "fc6",
      question: "Văn bản nào cụ thể hóa Quy chế dân chủ ở cơ sở ('Dân biết, dân bàn, dân làm, dân kiểm tra')?",
      answer: "Chỉ thị số 30-CT/TW (2/1998) của Bộ Chính trị."
    }
  ];

  return (
    <div className="w-full space-y-10 pb-16 font-sans text-slate-800">
      
      {/* 🌟 HERO BANNER: ĐẠI HỘI VIII */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-950 via-red-900 to-amber-950 p-8 md:p-12 text-white shadow-2xl border border-red-800/40">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-80 h-80 bg-red-600/20 rounded-full blur-2xl pointer-events-none"></div>
        
        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs md:text-sm font-semibold backdrop-blur-md">
            <Flag className="w-4 h-4 text-amber-400" />
            <span>Mục II.2.a | Lịch sử Đảng Cộng sản Việt Nam (1996 - 2001)</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-100 to-white font-serif">
            Đại Hội VIII & Bước Đầu Đẩy Mạnh Công Nghiệp Hoá, Hiện Đại Hoá
          </h1>

          <p className="text-red-100/90 text-base md:text-lg leading-relaxed max-w-3xl">
            Đại hội VIII (28/6 - 1/7/1996) đánh dấu bước ngoặt lịch sử quan trọng, tổng kết 10 năm Đổi mới (1986-1996), đưa đất nước chuyển sang thời kỳ mới: <strong className="text-amber-300 font-semibold">"Đẩy mạnh công nghiệp hóa, hiện đại hóa đất nước"</strong> vì mục tiêu <strong className="text-yellow-200">"Dân giàu, nước mạnh, xã hội công bằng, văn minh"</strong>.
          </p>

          {/* Quick stats highlight */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-red-800/60">
            <div className="bg-red-950/60 backdrop-blur-sm p-3.5 rounded-xl border border-red-700/50">
              <div className="text-amber-400 text-xs font-semibold uppercase tracking-wider">Thời gian</div>
              <div className="text-white font-bold text-base mt-1">28/6 - 1/7/1996</div>
            </div>
            <div className="bg-red-950/60 backdrop-blur-sm p-3.5 rounded-xl border border-red-700/50">
              <div className="text-amber-400 text-xs font-semibold uppercase tracking-wider">Số đại biểu</div>
              <div className="text-white font-bold text-base mt-1">1.198 đại biểu</div>
            </div>
            <div className="bg-red-950/60 backdrop-blur-sm p-3.5 rounded-xl border border-red-700/50">
              <div className="text-amber-400 text-xs font-semibold uppercase tracking-wider">Tổng Bí thư</div>
              <div className="text-white font-bold text-base mt-1">Đỗ Mười</div>
            </div>
            <div className="bg-red-950/60 backdrop-blur-sm p-3.5 rounded-xl border border-red-700/50">
              <div className="text-amber-400 text-xs font-semibold uppercase tracking-wider">Tăng trưởng GDP</div>
              <div className="text-white font-bold text-base mt-1">Bình quân 7%/năm</div>
            </div>
          </div>
        </div>
      </section>

      {/* 📌 KHỐI 1: BỐI CẢNH TRƯỚC ĐẠI HỘI VIII */}
      <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/80 space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
          <div className="w-10 h-10 rounded-xl bg-red-100 text-red-700 flex items-center justify-center font-bold">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-serif">1. Bối cảnh Lịch sử Trước Đại hội VIII</h2>
            <p className="text-xs md:text-sm text-slate-500">Tình hình quốc tế và nhận thức mới của Đảng khóa VII</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Card Bối cảnh */}
          <div className="bg-amber-50/60 rounded-xl p-5 border border-amber-200/70 space-y-3">
            <h3 className="font-bold text-amber-900 flex items-center gap-2 text-base">
              <Sparkles className="w-4 h-4 text-amber-600" />
              Xu thế Quốc tế & Đổi mới Trong nước
            </h3>
            <ul className="space-y-2 text-sm text-slate-700 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">•</span>
                <span><strong>Cách mạng KH-KT phát triển mạnh:</strong> Xu thế mở rộng hợp tác quốc tế mang lại nguồn lực quan trọng.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">•</span>
                <span><strong>Văn kiện Hội nghị giữa nhiệm kỳ khóa VII:</strong> Lần đầu tiên khẳng định xây dựng <em>"Nhà nước pháp quyền Việt Nam của nhân dân, do nhân dân, vì nhân dân"</em>.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">•</span>
                <span><strong>Hội nghị TW 8 khóa VII (1/1995):</strong> Cụ thể hóa chủ trương tiếp tục xây dựng, hoàn thiện Nhà nước CHXHCN Việt Nam, cải cách nền hành chính nhà nước.</span>
              </li>
            </ul>
          </div>

          {/* Card Nhận thức Nhà nước Pháp quyền */}
          <div className="bg-red-50/60 rounded-xl p-5 border border-red-200/70 space-y-3">
            <h3 className="font-bold text-red-950 flex items-center gap-2 text-base">
              <ShieldCheck className="w-4 h-4 text-red-700" />
              Nhận thức Mới về Nhà nước Pháp quyền
            </h3>
            <ul className="space-y-2 text-sm text-slate-700 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">1.</span>
                <span>Nhà nước pháp quyền XHCN do Đảng Cộng sản lãnh đạo.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">2.</span>
                <span>Quyền lực nhà nước là <strong>thống nhất</strong>, có sự phân công và phối hợp chặt chẽ giữa 3 quyền: <em>Lập pháp, Hành pháp, Tư pháp</em>.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">3.</span>
                <span>Tăng cường pháp chế XHCN; Quản lý xã hội bằng pháp luật, siết chặt kỷ cương đi đôi với phát huy sức mạnh quần chúng.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 💡 CALLOUT BANNER: HNTW4 KHÓA VII VỀ NGUỒN LỰC CON NGƯỜI */}
        <div className="rounded-xl bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-amber-500/10 p-5 border border-amber-300/50 flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="p-3 bg-amber-500 text-white rounded-xl shadow-sm shrink-0">
            <Heart className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <div className="text-xs font-bold text-amber-800 uppercase tracking-wider">Quan điểm Con người (HNTW 4 khóa VII - 1/1993)</div>
            <p className="text-sm font-semibold text-slate-900 italic">
              "Tất cả vì con người, tất cả vì hạnh phúc con người" -- Con người là nhân tố quyết định, động lực to lớn nhất, chủ thể sáng tạo mọi nguồn cải vật chất và tinh thần xã hội; hạnh phúc con người là mục tiêu phấn đấu cao nhất.
            </p>
          </div>
        </div>
      </section>

      {/* 📌 KHỐI 2: TRỤC THỜI GIAN SỰ KIỆN (INTERACTIVE TIMELINE) */}
      <section className="bg-slate-900 text-white rounded-2xl p-6 md:p-8 shadow-xl space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-900 flex items-center justify-center font-bold">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold font-serif text-amber-300">2. Trục Thời Gian Diễn Biến Giai Đoạn 1996 - 2001</h2>
              <p className="text-xs md:text-sm text-slate-400">Nhấp vào từng mốc sự kiện để xem chi tiết nội dung chỉ đạo của Đảng</p>
            </div>
          </div>
          <span className="text-xs font-semibold px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full self-start md:self-auto">
            {timelineEvents.length} Sự kiện Trọng tâm
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

      {/* 📌 KHỐI 3: INTERACTIVE GRID CARDS (6 BÀI HỌC & 6 QUAN ĐIỂM) */}
      <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/80 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-700 text-white flex items-center justify-center font-bold">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-serif">3. Bài Học Đổi Mới & Quan Điểm CNH - HĐH</h2>
              <p className="text-xs md:text-sm text-slate-500">Nội dung cốt lõi của Đại hội VIII đặt nền móng cho thời kỳ mới</p>
            </div>
          </div>

          {/* Toggle Switch */}
          <div className="inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200 self-start md:self-auto">
            <button
              onClick={() => setActiveTab("lessons")}
              className={`px-4 py-2 rounded-lg text-xs md:text-sm font-bold transition-all ${
                activeTab === "lessons"
                  ? "bg-red-700 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              6 Bài học Đổi mới (1986-1996)
            </button>
            <button
              onClick={() => setActiveTab("views")}
              className={`px-4 py-2 rounded-lg text-xs md:text-sm font-bold transition-all ${
                activeTab === "views"
                  ? "bg-red-700 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              6 Quan điểm CNH - HĐH
            </button>
          </div>
        </div>

        {/* Tab 1: 6 Bài học */}
        {activeTab === "lessons" && (
          <div className="space-y-4">
            <div className="p-3 bg-red-50 text-red-900 rounded-lg text-xs md:text-sm font-medium border border-red-200">
              💡 <strong>Tổng kết 10 năm Đổi mới (1986 - 1996):</strong> Đất nước đưa ra khỏi khủng hoảng KT-XH, chuẩn bị tiền đề cho công nghiệp hóa về cơ bản đã hoàn thành, cho phép chuyển sang thời kỳ đẩy mạnh CNH - HĐH.
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {lessons.map((item, idx) => (
                <div key={idx} className="bg-slate-50 hover:bg-red-50/40 p-5 rounded-xl border border-slate-200/80 hover:border-red-300 transition-all group flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black text-red-700 font-serif group-hover:scale-110 transition-transform">
                        {item.num}
                      </span>
                      <span className="px-2 py-0.5 bg-red-100 text-red-700 text-[10px] font-bold rounded-full uppercase">
                        Bài học chủ yếu
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
          </div>
        )}

        {/* Tab 2: 6 Quan điểm CNH-HĐH */}
        {activeTab === "views" && (
          <div className="space-y-4">
            <div className="p-3 bg-amber-50 text-amber-900 rounded-lg text-xs md:text-sm font-medium border border-amber-200">
              🎯 <strong>Quan điểm chỉ đạo CNH - HĐH trong thời kỳ mới:</strong> 6 định hướng chiến lược quyết định tốc độ và tính bền vững của công cuộc hiện đại hóa đất nước.
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cnhViews.map((item, idx) => (
                <div key={idx} className="bg-slate-50 hover:bg-amber-50/40 p-5 rounded-xl border border-slate-200/80 hover:border-amber-300 transition-all group flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black text-amber-600 font-serif group-hover:scale-110 transition-transform">
                        {item.num}
                      </span>
                      <span className="px-2 py-0.5 bg-amber-100 text-amber-800 text-[10px] font-bold rounded-full uppercase">
                        Quan điểm CNH
                      </span>
                    </div>
                    <h4 className="font-bold text-slate-900 text-base leading-snug group-hover:text-amber-950">
                      {item.title}
                    </h4>
                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* 📌 KHỐI 4: NGHỊ QUYẾT TRUNG ƯƠNG 5 KHÓA VIII -- "TUYÊN NGÔN VĂN HÓA CỦA ĐẢNG" */}
      <section className="bg-gradient-to-br from-amber-500/10 via-amber-400/5 to-red-500/10 rounded-2xl p-6 md:p-8 border border-amber-300/60 shadow-sm space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold shadow-md">
            <Star className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-amber-800 uppercase tracking-wider">Hội nghị Trung ương 5 khóa VIII (7/1998)</div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-serif">"Tuyên Ngôn Văn Hóa Của Đảng"</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/80 backdrop-blur-sm p-5 rounded-xl border border-amber-200 space-y-3">
            <h4 className="font-bold text-amber-900 text-base flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-amber-600" />
              Vị trí & Đặc trưng Nền Văn hóa
            </h4>
            <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
              <strong>Vị trí:</strong> Văn hóa là <em>nền tảng tinh thần của xã hội</em>, vừa là mục tiêu vừa là động lực phát triển kinh tế - xã hội.
            </p>
            <div className="p-3 bg-amber-50 rounded-lg text-xs md:text-sm text-amber-900 border border-amber-200">
              <strong>2 Đặc trưng cốt lõi:</strong>
              <ul className="list-disc pl-4 mt-1 space-y-1">
                <li><strong>Tiên tiến:</strong> Yêu nước và tiến bộ, cốt lõi là tư tưởng độc lập dân tộc và CNXH theo chủ nghĩa Mác-Lênin & tư tưởng Hồ Chí Minh.</li>
                <li><strong>Đậm đà bản sắc dân tộc:</strong> Lòng yêu nước, ý chí tự cường, tinh thần đoàn kết, gắn kết cá nhân-gia đình-làng xã-Tổ quốc, lòng nhân ái, trọng nghĩa tình...</li>
              </ul>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-5 rounded-xl border border-amber-200 space-y-3">
            <h4 className="font-bold text-red-950 text-base flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-red-600" />
              Phương châm & Phong trào
            </h4>
            <ul className="space-y-2 text-xs md:text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span>Nền văn hóa Việt Nam là nền văn hóa thống nhất mà đa dạng trong cộng đồng 54 dân tộc.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span>Xây dựng văn hóa là sự nghiệp của toàn dân do Đảng lãnh đạo, đội ngũ trí thức giữ vai trò quan trọng.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span>Phương châm chỉ đạo: <strong>"Xây đi đôi với chống"</strong>, ngăn chặn văn hóa độc hại.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span>Phát động phong trào lớn: <strong>"Toàn dân đoàn kết, xây dựng đời sống văn hóa"</strong>.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 📌 KHỐI 5: THẺ FLASHCARD TỰ ÔN TẬP TỪ KHÓA */}
      <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/80 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-900 flex items-center justify-center font-bold">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-serif">4. Thẻ Ghi Nhớ Từ Khóa Ôn Thi (Flashcards)</h2>
              <p className="text-xs md:text-sm text-slate-500">Nhấp vào từng thẻ để lật đáp án ghi nhớ nhanh</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {flashcards.map((fc) => {
            const isFlipped = !!flippedCards[fc.id];
            return (
              <div
                key={fc.id}
                onClick={() => toggleCardFlip(fc.id)}
                className={`min-h-[160px] p-5 rounded-2xl cursor-pointer transition-all duration-300 flex flex-col justify-between border shadow-sm ${
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

                  <p className="text-sm font-semibold leading-relaxed">
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
