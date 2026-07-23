"use client";
import React, { useState } from "react";
import {
  Globe, Target, Shield, BookOpen, Sparkles, CheckCircle2,
  Bookmark, Flag, ArrowRight, RotateCcw, Heart, Layers,
  Compass, Scale, Lightbulb, Users, Building2, Flame,
  ShieldCheck, CheckSquare, Award, Star, Zap, Crown
} from "lucide-react";

export default function LsdCongress11CuongLinh2011FullVisualizer() {
  const [activeTab, setActiveTab] = useState(0);
  const [flippedDirectionCards, setFlippedDirectionCards] = useState({});
  const [flippedRelationCards, setFlippedRelationCards] = useState({});

  const toggleDirectionFlip = (idx) => {
    setFlippedDirectionCards(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const toggleRelationFlip = (idx) => {
    setFlippedRelationCards(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  // 8 Phương hướng cơ bản
  const directions8 = [
    {
      id: 1,
      title: "1. Đẩy mạnh CNH - HĐH & Kinh tế tri thức",
      summary: "Đẩy mạnh CNH-HĐH đất nước gắn với phát triển kinh tế tri thức, bảo vệ tài nguyên, môi trường.",
      detail: "Phát triển lực lượng sản xuất hiện đại, ứng dụng thành tựu KHCN mới, gắn liền với bảo vệ môi trường sinh thái và ứng phó biến đổi khí hậu."
    },
    {
      id: 2,
      title: "2. Nền kinh tế thị trường định hướng XHCN",
      summary: "Phát triển nền kinh tế thị trường định hướng xã hội chủ nghĩa.",
      detail: "Nhiều hình thức sở hữu, thành phần kinh tế bình đẳng trước pháp luật. Kinh tế nhà nước giữ vai trò chủ đạo, kinh tế tư nhân là một trong những động lực."
    },
    {
      id: 3,
      title: "3. Xây dựng văn hóa & Con người Việt Nam",
      summary: "Xây dựng nền văn hoá tiên tiến, đậm đà bản sắc dân tộc; nâng cao đời sống nhân dân, thực hiện tiến bộ và công bằng xã hội.",
      detail: "Văn hóa là nền tảng tinh thần của xã hội. Con người là trung tâm của chiến lược phát triển, là chủ thể phát triển."
    },
    {
      id: 4,
      title: "4. Bảo đảm Quốc phòng - An ninh",
      summary: "Bảo đảm vững chắc quốc phòng và an ninh quốc gia, trật tự, an toàn xã hội.",
      detail: "Bảo vệ vững chắc độc lập, chủ quyền, thống nhất, toàn vẹn lãnh thổ; giữ vững an ninh chính trị và trật tự an toàn xã hội."
    },
    {
      id: 5,
      title: "5. Đường lối đối ngoại độc lập, tự chủ",
      summary: "Thực hiện đường lối đối ngoại độc lập, tự chủ, hòa bình, hữu nghị, hợp tác và phát triển; chủ động và tích cực hội nhập quốc tế.",
      detail: "Việt Nam là bạn, đối tác tin cậy và thành viên có trách nhiệm trong cộng đồng quốc tế. Đa phương hóa, đa dạng hóa đối ngoại."
    },
    {
      id: 6,
      title: "6. Dân chủ XHCN & Đại đoàn kết toàn dân",
      summary: "Xây dựng nền dân chủ xã hội chủ nghĩa, thực hiện đại đoàn kết toàn dân tộc, tăng cường và mở rộng mặt trận dân tộc thống nhất.",
      detail: "Dân chủ vừa là mục tiêu vừa là động lực phát triển. Phát huy vai trò làm chủ của nhân dân và sức mạnh đại đoàn kết toàn dân tộc."
    },
    {
      id: 7,
      title: "7. Xây dựng Nhà nước pháp quyền XHCN",
      summary: "Xây dựng Nhà nước pháp quyền xã hội chủ nghĩa của nhân dân, do nhân dân, vì nhân dân.",
      detail: "Quyền lực nhà nước là thống nhất, có sự phân công, phối hợp, kiểm soát giữa các cơ quan trong việc thực hiện quyền lập pháp, hành pháp, tư pháp."
    },
    {
      id: 8,
      title: "8. Xây dựng Đảng trong sạch, vững mạnh",
      summary: "Xây dựng Đảng trong sạch, vững mạnh.",
      detail: "Nâng cao năng lực lãnh đạo và sức chiến đấu của Đảng, đổi mới phương thức lãnh đạo, tăng cường mối quan hệ mật thiết với nhân dân."
    }
  ];

  // 8 Mối quan hệ lớn
  const relations8 = [
    {
      id: 1,
      pair: "Đổi mới – Ổn định – Phát triển",
      desc: "Giữa đổi mới, ổn định và phát triển.",
      keyInsight: "Đổi mới là động lực, ổn định là tiền đề, phát triển là mục tiêu tối thượng."
    },
    {
      id: 2,
      pair: "Đổi mới kinh tế – Đổi mới chính trị",
      desc: "Giữa đổi mới kinh tế và đổi mới chính trị.",
      keyInsight: "Trọng tâm là đổi mới kinh tế, đồng thời từng bước đổi mới chính trị phù hợp."
    },
    {
      id: 3,
      pair: "Kinh tế thị trường – Định hướng XHCN",
      desc: "Giữa kinh tế thị trường và định hướng xã hội chủ nghĩa.",
      keyInsight: "Sử dụng cơ chế thị trường làm phương tiện xây dựng thành công CNXH."
    },
    {
      id: 4,
      pair: "Phát triển LLSX – Hoàn thiện QHSX XHCN",
      desc: "Giữa phát triển lực lượng sản xuất và xây dựng, hoàn thiện từng bước quan hệ sản xuất xã hội chủ nghĩa.",
      keyInsight: "QHSX phải phù hợp với trình độ phát triển của LLSX."
    },
    {
      id: 5,
      pair: "Tăng trưởng kinh tế – Phát triển văn hóa & Công bằng xã hội",
      desc: "Giữa tăng trưởng kinh tế và phát triển văn hoá, thực hiện tiến bộ và công bằng xã hội.",
      keyInsight: "Thực hiện tiến bộ và công bằng xã hội trong từng bước và từng chính sách phát triển."
    },
    {
      id: 6,
      pair: "Xây dựng CNXH – Bảo vệ Tổ quốc XHCN",
      desc: "Giữa xây dựng chủ nghĩa xã hội và bảo vệ Tổ quốc xã hội chủ nghĩa.",
      keyInsight: "Hai nhiệm vụ chiến lược song hành không tách rời."
    },
    {
      id: 7,
      pair: "Độc lập, tự chủ – Hội nhập quốc tế",
      desc: "Giữa độc lập, tự chủ và hội nhập quốc tế.",
      keyInsight: "Độc lập tự chủ là nền tảng, hội nhập quốc tế là điều kiện phát triển."
    },
    {
      id: 8,
      pair: "Đảng lãnh đạo – Nhà nước quản lý – Nhân dân làm chủ",
      desc: "Giữa Đảng lãnh đạo, Nhà nước quản lý, nhân dân làm chủ.",
      keyInsight: "Cơ chế vận hành tổng quát của hệ thống chính trị Việt Nam."
    }
  ];

  // Định hướng 8 Lĩnh vực phát triển
  const fields8 = [
    {
      id: "kinh-te",
      title: "💰 Kinh Tế",
      badge: "Kinh tế Nhà nước chủ đạo | Kinh tế Tư nhân là động lực",
      color: "border-amber-400 bg-amber-50/80 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200",
      content: [
        "Phát triển kinh tế thị trường định hướng XHCN với nhiều hình thức sở hữu, thành phần kinh tế, tổ chức kinh doanh, phân phối; các thành phần kinh tế bình đẳng trước pháp luật, hợp tác và cạnh tranh lành mạnh.",
        "Kinh tế nhà nước giữ vai trò chủ đạo; Kinh tế tập thể không ngừng củng cố, phát triển; kinh tế nhà nước cùng kinh tế tập thể ngày càng là nền tảng vững chắc của nền kinh tế quốc dân; Kinh tế tư nhân là một trong những động lực của nền kinh tế; khuyến khích kinh tế có vốn đầu tư nước ngoài.",
        "Phát triển kinh tế là nhiệm vụ trung tâm; CNH-HĐH gắn kinh tế tri thức; xây dựng cơ cấu kinh tế hợp lý, hiện đại, hiệu quả, bền vững; xây dựng nền kinh tế độc lập, tự chủ, chủ động, tích cực hội nhập."
      ]
    },
    {
      id: "van-hoa",
      title: "🎨 Văn Hóa & Con Người",
      badge: "Con người là 'trung tâm của chiến lược phát triển'",
      color: "border-rose-400 bg-rose-50/80 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200",
      content: [
        "Xây dựng nền văn hoá tiên tiến, đậm đà bản sắc dân tộc, phát triển toàn diện, thống nhất trong đa dạng, thấm nhuần tinh thần nhân văn, dân chủ, tiến bộ.",
        "Con người là 'trung tâm của chiến lược phát triển', là chủ thể phát triển. Xây dựng gia đình ấm no, tiến bộ, hạnh phúc - tế bào lành mạnh của xã hội."
      ]
    },
    {
      id: "giao-duc-khcn",
      title: "🎓 Giáo Dục & KH-CN",
      badge: "'Quốc sách hàng đầu' | Đầu tư cho giáo dục là đầu tư phát triển",
      color: "border-blue-400 bg-blue-50/80 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200",
      content: [
        "Giáo dục-đào tạo cùng khoa học-công nghệ là 'quốc sách hàng đầu'; đầu tư cho giáo dục là đầu tư phát triển.",
        "Đổi mới căn bản, toàn diện giáo dục-đào tạo theo chuẩn hoá, hiện đại hoá, xã hội hoá, dân chủ hoá, hội nhập quốc tế. Đẩy mạnh xây dựng xã hội học tập."
      ]
    },
    {
      id: "moi-truong",
      title: "🌿 Môi Trường",
      badge: "Trách nhiệm toàn dân | Ứng phó biến đổi khí hậu",
      color: "border-emerald-400 bg-emerald-50/80 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200",
      content: [
        "Bảo vệ môi trường là trách nhiệm, nghĩa vụ của cả hệ thống chính trị, toàn xã hội, mọi công dân. Kết hợp kiểm soát, ngăn ngừa ô nhiễm với khắc phục, bảo vệ môi trường sinh thái; ứng phó biến đổi khí hậu."
      ]
    },
    {
      id: "xa-hoi",
      title: "🤝 Xã Hội & An Sinh",
      badge: "Tăng trưởng gắn liền Tiến bộ & Công bằng xã hội",
      color: "border-indigo-400 bg-indigo-50/80 dark:bg-indigo-950/40 text-indigo-900 dark:text-indigo-200",
      content: [
        "Kết hợp tăng trưởng kinh tế với tiến bộ xã hội; khuyến khích làm giàu hợp pháp; hệ thống bảo hiểm, trợ cấp xã hội đồng bộ; giảm nghèo bền vững, tệ nạn xã hội.",
        "Xây dựng cộng đồng xã hội văn minh; đoàn kết giai cấp công nhân, nông dân, trí thức, doanh nhân; bình đẳng giới; chính sách với người VN định cư ở nước ngoài; bình đẳng, đoàn kết giữa các dân tộc; tôn trọng tự do tín ngưỡng, tôn giáo."
      ]
    },
    {
      id: "quoc-phong",
      title: "🛡️ Quốc Phòng - An Ninh",
      badge: "Sự lãnh đạo tuyệt đối, trực tiếp về mọi mặt của Đảng",
      color: "border-red-400 bg-red-50/80 dark:bg-red-950/40 text-red-900 dark:text-red-200",
      content: [
        "Mục tiêu: bảo vệ vững chắc độc lập, chủ quyền, thống nhất, toàn vẹn lãnh thổ; bảo vệ Đảng, Nhà nước, nhân dân, chế độ XHCN; giữ hoà bình, ổn định chính trị, an ninh quốc gia, trật tự an toàn xã hội.",
        "Tăng cường sự lãnh đạo tuyệt đối, trực tiếp về mọi mặt của Đảng, quản lý tập trung thống nhất của Nhà nước đối với Quân đội, Công an nhân dân."
      ]
    },
    {
      id: "doi-ngoai",
      title: "🌐 Đối Ngoại",
      badge: "Việt Nam là bạn, đối tác tin cậy & thành viên có trách nhiệm",
      color: "border-cyan-400 bg-cyan-50/80 dark:bg-cyan-950/40 text-cyan-900 dark:text-cyan-200",
      content: [
        "Đường lối đối ngoại độc lập, tự chủ, hoà bình, hợp tác và phát triển; đa phương hoá, đa dạng hoá; chủ động, tích cực hội nhập quốc tế.",
        "Việt Nam là bạn, đối tác tin cậy và thành viên có trách nhiệm trong cộng đồng quốc tế."
      ]
    },
    {
      id: "dan-chu-nha-nuoc",
      title: "🏛️ Dân Chủ & Nhà Nước",
      badge: "Nhà nước pháp quyền XHCN | Mặt trận Tổ quốc liên minh chính trị",
      color: "border-purple-400 bg-purple-50/80 dark:bg-purple-950/40 text-purple-900 dark:text-purple-200",
      content: [
        "Dân chủ xã hội chủ nghĩa là bản chất chế độ ta, vừa mục tiêu vừa động lực phát triển; dân chủ gắn liền kỷ luật, kỷ cương, được thể chế hoá bằng pháp luật.",
        "Nhà nước pháp quyền XHCN của nhân dân, do nhân dân, vì nhân dân; quyền lực nhà nước thống nhất, có phân công, phối hợp, kiểm soát giữa các cơ quan trong việc thực hiện các quyền lập pháp - hành pháp - tư pháp.",
        "Mặt trận Tổ quốc Việt Nam là tổ chức liên minh chính trị, liên hiệp tự nguyện là cơ sở chính trị của chính quyền nhân dân; tham gia xây dựng Đảng, Nhà nước; đại diện bảo vệ quyền và lợi ích hợp pháp của nhân dân."
      ]
    }
  ];

  const tabs = [
    { id: 0, title: "1. Bối Cảnh & Mục Tiêu", icon: Globe },
    { id: 1, title: "2. 8 Đặc Trưng & 8 Phương Hướng", icon: Target },
    { id: 2, title: "3. 8 Mối Quan Hệ Lớn", icon: Scale },
    { id: 3, title: "4. Ma Trận 8 Lĩnh Vực", icon: Building2 },
    { id: 4, title: "5. Xây Dựng Đảng & Cương Lĩnh", icon: Crown }
  ];

  return (
    <div className="my-8 rounded-3xl border border-amber-300/80 dark:border-amber-800/60 bg-gradient-to-b from-amber-50/40 via-white to-amber-100/30 dark:from-slate-900 dark:via-slate-900/90 dark:to-amber-950/20 p-5 md:p-8 shadow-2xl overflow-hidden">
      {/* Header Banner */}
      <div className="text-center max-w-4xl mx-auto mb-8">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 dark:bg-amber-950/90 text-amber-900 dark:text-amber-200 text-xs font-bold uppercase tracking-wider mb-3 border border-amber-300 dark:border-amber-800 shadow-sm">
          <Flag size={14} className="text-amber-600 dark:text-amber-400" />
          Đại Hội XI – Cương Lĩnh 2011 (Phần Tiếp Theo)
        </span>
        <h2 className="text-2xl md:text-4xl font-extrabold font-serif text-slate-900 dark:text-white leading-tight">
          Cương Lĩnh Xây Dựng Đất Nước Trong Thời Kỳ Quá Độ Lên CNXH (Bổ Sung, Phát Triển Năm 2011)
        </h2>
        <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mt-2 font-medium">
          Hệ thống hóa toàn bộ mục tiêu, phương hướng, 8 mối quan hệ lớn & định hướng phát triển đất nước.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8 border-b border-amber-200 dark:border-amber-900/50 pb-4">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all duration-300 ${
                isActive
                  ? "bg-amber-600 text-white shadow-lg shadow-amber-600/30 scale-105"
                  : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-amber-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700"
              }`}
            >
              <Icon size={16} />
              {tab.title}
            </button>
          );
        })}
      </div>

      {/* TAB 1: BỐI CẢNH & MỤC TIÊU */}
      {activeTab === 0 && (
        <div className="space-y-6 animate-fadeIn">
          {/* Section: Thế giới & Các vấn đề toàn cầu */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-amber-200 dark:border-amber-900/50 shadow-md">
            <h3 className="text-lg md:text-xl font-bold font-serif text-amber-900 dark:text-amber-300 flex items-center gap-2 mb-4">
              <Globe className="text-amber-600" size={20} />
              1. Chủ Nghĩa Tư Bản, Thế Giới & Các Vấn Đề Toàn Cầu
            </h3>
            <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              <p className="p-3 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border-l-4 border-amber-500">
                • Chủ nghĩa tư bản còn tiềm năng phát triển nhưng bản chất vẫn là chế độ <strong className="text-amber-700 dark:text-amber-400">áp bức, bóc lột, bất công</strong>; khủng hoảng kinh tế-chính trị-xã hội vẫn tiếp diễn.
              </p>
              <p className="p-3 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border-l-4 border-amber-500">
                • <strong>Các nước đang phát triển:</strong> đấu tranh khó khăn chống nghèo dốt, lạc hậu, chống can thiệp, áp đặt, xâm lược để bảo vệ độc lập, chủ quyền.
              </p>
              <p className="p-3 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border-l-4 border-amber-500">
                • <strong>Những vấn đề toàn cầu cấp bách:</strong> giữ hòa bình, đẩy lùi nguy cơ chiến tranh, bảo vệ môi trường sống, hạn chế bùng nổ dân số, phòng ngừa bệnh tật hiểm nghèo; <span className="bg-amber-200 dark:bg-amber-900/80 px-2 py-0.5 rounded font-bold">bổ sung 2 vấn đề: chống khủng bố và ứng phó biến đổi khí hậu toàn cầu</span>.
              </p>
              <p className="p-3 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border-l-4 border-amber-500">
                • <strong>Đặc điểm nổi bật thời đại:</strong> các nước có chế độ chính trị, trình độ phát triển khác nhau cùng tồn tại, vừa hợp tác vừa đấu tranh, cạnh tranh vì lợi ích quốc gia dân tộc.
              </p>
            </div>

            {/* GHI NHỚ BOX */}
            <div className="mt-5 p-4 rounded-xl bg-gradient-to-r from-amber-600 to-red-600 text-white font-bold text-sm shadow-md flex items-center gap-3">
              <Sparkles size={24} className="shrink-0 text-amber-200 animate-pulse" />
              <span>GHI NHỚ: "Theo quy luật tiến hoá của lịch sử, loài người nhất định sẽ tiến tới chủ nghĩa xã hội".</span>
            </div>
          </div>

          {/* Section: Mô hình & Mục tiêu */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-amber-200 dark:border-amber-900/50 shadow-md">
              <h4 className="text-base font-bold text-amber-900 dark:text-amber-300 flex items-center gap-2 mb-3">
                <Target size={18} className="text-amber-600" />
                Quá Trình Xây Dựng Xã Hội XHCN
              </h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-amber-600 shrink-0 mt-0.5" />
                  <span>Là quá trình <strong className="text-amber-600 dark:text-amber-400">cách mạng sâu sắc, triệt để</strong>, đấu tranh phức tạp giữa cái cũ và cái mới, tạo biến đổi về chất trên tất cả các lĩnh vực đời sống xã hội.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-amber-600 shrink-0 mt-0.5" />
                  <span>Nhất thiết trải qua <strong className="text-amber-600 dark:text-amber-400">thời kỳ quá độ lâu dài</strong> với nhiều bước phát triển, nhiều hình thức tổ chức kinh tế-xã hội đan xen.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-amber-200 dark:border-amber-900/50 shadow-md">
              <h4 className="text-base font-bold text-amber-900 dark:text-amber-300 flex items-center gap-2 mb-3">
                <Award size={18} className="text-amber-600" />
                Mục Tiêu Tổng Quát
              </h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>Khi kết thúc thời kỳ quá độ:</strong> Xây dựng được về cơ bản <strong className="text-amber-600 dark:text-amber-400">nền tảng kinh tế của CNXH</strong> với kiến trúc thượng tầng về chính trị, tư tưởng, văn hoá phù hợp.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>Mục tiêu đến giữa thế kỷ XXI:</strong> Xây dựng nước ta trở thành <strong className="text-amber-600 dark:text-amber-400">nước công nghiệp hiện đại, theo định hướng xã hội chủ nghĩa</strong>.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: 8 ĐẶC TRƯNG & 8 PHƯƠNG HƯỚNG */}
      {activeTab === 1 && (
        <div className="space-y-6 animate-fadeIn">
          {/* Cương Lĩnh 2011 Full Quote Box */}
          <div className="p-6 rounded-2xl bg-amber-500/10 border-2 border-amber-400 dark:border-amber-700">
            <h3 className="text-base font-extrabold text-amber-900 dark:text-amber-200 mb-2 flex items-center gap-2">
              <BookOpen size={18} className="text-amber-600" />
              "Xã Hội XHCN Mà Nhân Dân Ta Xây Dựng" (Cương Lĩnh 2011):
            </h3>
            <p className="text-sm md:text-base font-serif text-slate-800 dark:text-slate-200 italic leading-relaxed">
              "Dân giàu, nước mạnh, dân chủ, công bằng, văn minh; do nhân dân làm chủ; có nền kinh tế phát triển cao dựa trên Lực lượng sản xuất hiện đại và quan hệ sản xuất tiến bộ phù hợp; có nền văn hoá tiên tiến, đậm đà bản sắc dân tộc; con người có cuộc sống ấm no, tự do, hạnh phúc, có điều kiện phát triển toàn diện; các dân tộc trong cộng đồng Việt Nam bình đẳng, đoàn kết, tôn trọng và giúp nhau cùng phát triển; có Nhà nước pháp quyền xã hội chủ nghĩa của nhân dân, do nhân dân, vì nhân dân do Đảng Cộng sản Lãnh đạo; có quan hệ hữu nghị và hợp tác với các nước trên thế giới".
            </p>
            <div className="mt-4 pt-3 border-t border-amber-300/50 dark:border-amber-800/50 flex flex-wrap gap-2 text-xs font-bold text-amber-800 dark:text-amber-300">
              <span className="bg-amber-200 dark:bg-amber-950 px-2.5 py-1 rounded-md">★ Đổi nguyên đặc trưng: "Có nền văn hoá tiên tiến, đậm đà bản sắc dân tộc"</span>
              <span className="bg-amber-200 dark:bg-amber-950 px-2.5 py-1 rounded-md">★ Bổ sung đặc trưng bao trùm 1: "Dân giàu, nước mạnh, dân chủ, công bằng, văn minh"</span>
              <span className="bg-amber-200 dark:bg-amber-950 px-2.5 py-1 rounded-md">★ Bổ sung đặc trưng bao trùm 2: "Có Nhà nước pháp quyền XHCN..."</span>
            </div>
          </div>

          {/* 8 Phương Hướng Interactive Flashcards */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold font-serif text-slate-900 dark:text-white flex items-center gap-2">
                <Target className="text-amber-600" size={20} />
                8 Phương Hướng Cơ Bản Xây Dựng CNXH (Nhấp vào thẻ để xem chi tiết):
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {directions8.map((d, idx) => {
                const isFlipped = flippedDirectionCards[idx];
                return (
                  <div
                    key={d.id}
                    onClick={() => toggleDirectionFlip(idx)}
                    className={`cursor-pointer p-5 rounded-2xl border transition-all duration-300 transform hover:-translate-y-1 shadow-md ${
                      isFlipped
                        ? "bg-amber-600 text-white border-amber-700"
                        : "bg-white dark:bg-slate-800 border-amber-200 dark:border-amber-900/50 hover:border-amber-400"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${isFlipped ? "bg-amber-700 text-white" : "bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-300"}`}>
                        Phương hướng #{d.id}
                      </span>
                      <RotateCcw size={14} className={isFlipped ? "text-amber-200" : "text-amber-500"} />
                    </div>
                    <h4 className={`text-sm font-bold mb-2 ${isFlipped ? "text-white" : "text-slate-900 dark:text-white"}`}>
                      {d.title}
                    </h4>
                    <p className={`text-xs leading-relaxed ${isFlipped ? "text-amber-100" : "text-slate-600 dark:text-slate-300"}`}>
                      {isFlipped ? d.detail : d.summary}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: 8 MỐI QUAN HỆ LỚN */}
      {activeTab === 2 && (
        <div className="space-y-6 animate-fadeIn">
          <div className="p-4 rounded-2xl bg-amber-100 dark:bg-amber-950/60 border border-amber-300 text-amber-900 dark:text-amber-200 text-sm font-medium">
            💡 <strong>Cương lĩnh 2011 bổ sung:</strong> "8 mối quan hệ lớn cần nắm vững và giải quyết tốt" là kim chỉ nam chỉ đạo thực tiễn công cuộc Đổi mới. Bấm vào từng thẻ để lật xem góc nhìn cốt lõi.
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relations8.map((r, idx) => {
              const isFlipped = flippedRelationCards[idx];
              return (
                <div
                  key={r.id}
                  onClick={() => toggleRelationFlip(idx)}
                  className={`cursor-pointer p-5 rounded-2xl border transition-all duration-300 transform hover:-translate-y-1 shadow-md ${
                    isFlipped
                      ? "bg-slate-900 text-white border-slate-700"
                      : "bg-white dark:bg-slate-800 border-amber-200 dark:border-amber-900/50 hover:border-amber-400"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${isFlipped ? "bg-amber-600 text-white" : "bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-300"}`}>
                      Mối quan hệ #{r.id}
                    </span>
                    <RotateCcw size={14} className={isFlipped ? "text-amber-400" : "text-amber-500"} />
                  </div>
                  <h4 className={`text-sm font-bold mb-2 ${isFlipped ? "text-amber-300" : "text-slate-900 dark:text-white"}`}>
                    {r.pair}
                  </h4>
                  <p className={`text-xs leading-relaxed ${isFlipped ? "text-slate-200" : "text-slate-600 dark:text-slate-300"}`}>
                    {isFlipped ? r.keyInsight : r.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 4: MA TRẬN 8 LĨNH VỰC */}
      {activeTab === 3 && (
        <div className="space-y-6 animate-fadeIn">
          <div className="text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
            <Building2 className="text-amber-600" size={18} />
            Những định hướng lớn về phát triển 8 Lĩnh vực (Kinh tế, Văn hóa, Giáo dục, Môi trường, Xã hội, Quốc phòng, Đối ngoại, Dân chủ & Nhà nước):
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {fields8.map((field) => (
              <div
                key={field.id}
                className={`p-5 rounded-2xl border-2 shadow-sm transition-all duration-300 ${field.color}`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <h4 className="text-base font-extrabold">{field.title}</h4>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-white/80 dark:bg-slate-900/80 shadow-sm border border-current">
                    {field.badge}
                  </span>
                </div>
                <div className="space-y-2 text-xs md:text-sm leading-relaxed">
                  {field.content.map((p, pIdx) => (
                    <p key={pIdx} className="opacity-95">• {p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 5: XÂY DỰNG ĐẢNG & CƯƠNG LĨNH */}
      {activeTab === 4 && (
        <div className="space-y-6 animate-fadeIn">
          {/* Bản chất Đảng & Tư tưởng HCM */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-amber-200 dark:border-amber-900/50 shadow-md space-y-3">
              <h3 className="text-base font-bold font-serif text-amber-900 dark:text-amber-300 flex items-center gap-2">
                <Crown size={18} className="text-amber-600" />
                Về Bản Chất Của Đảng (Bổ Sung Cách Diễn Đạt)
              </h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 italic p-3 rounded-xl bg-amber-50/70 dark:bg-amber-950/40 border-l-4 border-amber-600">
                "Đảng Cộng sản Việt Nam là đội tiên phong của giai cấp công nhân, đồng thời là đội tiên phong của nhân dân lao động và của dân tộc Việt Nam; đại biểu trung thành lợi ích của giai cấp công nhân, nhân dân lao động và của toàn dân tộc".
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                • Lấy <strong>"chủ nghĩa Mác-Lênin và tư tưởng Hồ Chí Minh"</strong> làm nền tảng tư tưởng, kim chỉ nam cho hành động.
                <br />
                • Lấy <strong>"tập trung dân chủ"</strong> làm nguyên tắc tổ chức cơ bản.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-amber-200 dark:border-amber-900/50 shadow-md space-y-3">
              <h3 className="text-base font-bold font-serif text-amber-900 dark:text-amber-300 flex items-center gap-2">
                <Lightbulb size={18} className="text-amber-600" />
                Về Tư Tưởng Hồ Chí Minh
              </h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 italic p-3 rounded-xl bg-amber-50/70 dark:bg-amber-950/40 border-l-4 border-amber-600">
                "Là một hệ thống quan điểm toàn diện và sâu sắc về những vấn đề cơ bản của cách mạng Việt Nam... là tài sản tinh thần vô cùng to lớn và quý giá của Đảng và dân tộc ta, mãi mãi soi đường cho sự nghiệp cách mạng của nhân dân ta giành thắng lợi".
              </p>
            </div>
          </div>

          {/* Phương thức lãnh đạo của Đảng */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-amber-200 dark:border-amber-900/50 shadow-md">
            <h3 className="text-base font-bold font-serif text-amber-900 dark:text-amber-300 flex items-center gap-2 mb-4">
              <ShieldCheck size={18} className="text-amber-600" />
              Phương Thức Lãnh Đạo Của Đảng (Bổ Sung, Làm Rõ)
            </h3>
            <div className="grid sm:grid-cols-2 gap-3 text-xs md:text-sm text-slate-700 dark:text-slate-300">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700">
                • <strong>Đảng là Đảng cầm quyền</strong>, lãnh đạo Nhà nước và xã hội. Đảng lãnh đạo bằng hệ thống chính trị, đồng thời là bộ phận của hệ thống ấy.
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700">
                • Lãnh đạo bằng Cương lĩnh, chiến lược, chính sách; bằng tuyên truyền, vận động, tổ chức, kiểm tra và hành động gương mẫu của đảng viên.
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700">
                • Thống nhất lãnh đạo công tác cán bộ; làm việc thông qua tổ chức đảng và đảng viên; tăng cường trách nhiệm cá nhân, nhất là người đứng đầu.
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700">
                • Quan hệ mật thiết với nhân dân, dựa vào nhân dân để xây dựng Đảng, chịu sự giám sát của nhân dân, hoạt động trong khuôn khổ Hiến pháp và pháp luật.
              </div>
            </div>
          </div>

          {/* GHI NHỚ TỔNG KẾT CƯƠNG LĨNH 2011 */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-red-700 via-amber-600 to-amber-700 text-white shadow-xl">
            <h4 className="text-lg font-bold flex items-center gap-2 mb-2">
              <Sparkles size={20} className="text-amber-200" />
              ***GHI NHỚ CƯƠNG LĨNH 2011***
            </h4>
            <p className="text-sm md:text-base leading-relaxed opacity-95">
              Cương lĩnh 2011 có ý nghĩa đặc biệt quan trọng về lý luận và thực tiễn – là sự vận dụng sáng tạo chủ nghĩa Mác-Lênin, tư tưởng Hồ Chí Minh xây dựng đất nước thời kỳ quá độ lên CNXH; là cơ sở đoàn kết, thống nhất tư tưởng với hành động của toàn Đảng, toàn dân, là ngọn cờ chiến đấu, định hướng cho hoạt động của Đảng, Nhà nước, nhân dân trong những thập kỷ tới.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
