"use client";
import React, { useState } from "react";
import { 
  Sparkles, 
  Quote, 
  BookOpen, 
  Landmark, 
  Scale, 
  Calendar, 
  ShieldAlert, 
  UserCheck, 
  Briefcase,
  FileText,
  Compass,
  Heart,
  User,
  Settings,
  ArrowUpRight,
  TrendingUp
} from "lucide-react";

export default function HcmStateRuleOfLaw() {
  const [activeTab, setActiveTab] = useState("a");

  const timelineEvents = [
    {
      year: "1919",
      title: "Yêu sách của nhân dân An Nam gửi Hội nghị Vécxay (Pháp)",
      desc: "Hồ Chí Minh đòi hỏi quyền 'bảo đảm về mặt pháp luật' cho người dân thuộc địa như người Âu châu. Cụ thể là đòi xóa bỏ hoàn toàn các tòa án đặc biệt dùng làm công cụ khủng bố, và thay thế chế độ sắc lệnh bằng chế độ ra các đạo luật.",
      cite: "— Hồ Chí Minh (Toàn tập, t.1, tr.441)"
    },
    {
      year: "3/9/1945",
      title: "Phiên họp đầu tiên của Chính phủ lâm thời",
      desc: "Chỉ một ngày sau khi đọc Tuyên ngôn Độc lập, Hồ Chí Minh đề nghị: 'Chúng ta phải có một hiến pháp dân chủ. Tôi đề nghị Chính phủ tổ chức càng sớm càng hay cuộc TỔNG TỰ TỔNG TUYỂN CỬ với chế độ phổ thông đầu phiếu'.",
      cite: "— Hồ Chí Minh (Toàn tập, t.4, tr.7)"
    },
    {
      year: "6/1/1946",
      title: "Tổng tuyển cử bầu Quốc hội khóa I thành công rực rỡ",
      desc: "Lần đầu tiên trong lịch sử hàng nghìn năm của dân tộc Việt Nam và cũng là lần đầu tiên ở Đông Nam Á, cuộc Tổng tuyển cử được tiến hành thắng lợi với chế độ phổ thông đầu phiếu, trực tiếp và bỏ phiếu kín cho mọi người dân từ 18 tuổi trở lên.",
      cite: "— Sự kiện mang tính bước ngoặt pháp lý quốc tế"
    },
    {
      year: "2/3/1946",
      title: "Quốc hội khóa I lập Chính phủ liên hiệp chính thức",
      desc: "Quốc hội thành lập Chính phủ liên hiệp kháng chiến do Hồ Chí Minh làm Chủ tịch. Đây là Chính phủ hợp hiến, hợp pháp có đầy đủ tư cách pháp lý đại diện cho nước Việt Nam mới để giải quyết hiệu quả các vấn đề đối nội và đối ngoại.",
      cite: "— Đặt nền tảng pháp lý chính thống toàn diện"
    }
  ];

  const ruleOfLawBlocks = [
    {
      id: 1,
      title: "Quan điểm quản lý nhà nước",
      icon: Settings,
      iconBg: "bg-indigo-50 text-indigo-700",
      accentBorder: "border-l-indigo-600",
      content: "Nhà nước quản lý xã hội bằng nhiều biện pháp và bộ máy khác nhau, nhưng quan trọng nhất và bao trùm nhất là <strong>quản lý bằng Hiến pháp và pháp luật</strong>. Cần có pháp luật để điều hành xã hội, định hình các mối quan hệ xã hội một cách chặt chẽ."
    },
    {
      id: 2,
      title: "Công tác lập pháp hiện đại",
      icon: BookOpen,
      iconBg: "bg-teal-50 text-teal-700",
      accentBorder: "border-l-teal-600",
      content: "Hồ Chí Minh luôn chú trọng xây dựng hệ thống pháp luật dân chủ, tiến bộ. Dưới cương vị Chủ tịch nước, Người đã <strong>hai lần làm Trưởng ban soạn thảo Hiến pháp</strong> (Hiến pháp 1946 và Hiến pháp 1959), trực tiếp ký lệnh công bố 16 đạo luật và 613 sắc lệnh (trong đó có 243 sắc lệnh về tổ chức bộ máy nhà nước)."
    },
    {
      id: 3,
      title: "Đưa pháp luật vào cuộc sống của nhân dân",
      icon: ArrowUpRight,
      iconBg: "bg-emerald-50 text-emerald-700",
      accentBorder: "border-l-emerald-600",
      content: "Chủ trương đưa pháp luật vào đời sống, đảm bảo pháp luật được thi hành nghiêm túc và có <strong>cơ chế giám sát thực thi chặt chẽ</strong>. Đồng thời cần không ngừng nâng cao trình độ hiểu biết, năng lực sử dụng pháp luật của nhân dân theo phương châm <em>&quot;dân biết, dân bàn, dân làm&quot;</em>."
    },
    {
      id: 4,
      title: "Tính nghiêm minh tuyệt đối của pháp luật",
      icon: Scale,
      iconBg: "bg-amber-50 text-amber-700",
      accentBorder: "border-l-amber-600",
      content: "Hồ Chí Minh nêu cao tính nghiêm minh của pháp luật: pháp luật phải công tâm, nghiêm khắc và <strong>&quot;thẳng tay trừng trị&quot;</strong> những kẻ phản quốc hại dân, tham ô tham nhũng bất kể người đó giữ chức vụ gì. Người phê phán việc xét xử hời hợt: <em>&quot;thương có khi quá rộng, mà phạt thì không nghiêm&quot;</em>."
    },
    {
      id: 5,
      title: "Cán bộ gương mẫu tuân thủ pháp luật",
      icon: UserCheck,
      iconBg: "bg-purple-50 text-purple-700",
      accentBorder: "border-l-purple-600",
      content: "Cán bộ các cấp phải là những người đi đầu gương mẫu chấp hành pháp luật. Trong thư gửi Hội nghị Tư pháp toàn quốc, Bác nhấn mạnh cán bộ tư pháp phải nêu cao tấm gương: <strong>&quot;phụng công, thủ pháp, chí công vô tư&quot;</strong> để nhân dân tin tưởng noi theo."
    }
  ];

  return (
    <div className="w-full py-2 select-text font-sans bg-transparent space-y-8">
      
      {/* HEADER SECTION */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="p-1 rounded bg-indigo-500/10 border border-indigo-500/20 text-indigo-800 text-[10px] font-bold uppercase tracking-wider">
            📜 Mục II.2
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-650" />
          <span className="text-xs text-stone-500 font-bold font-sans">Đặc điểm của Nhà nước pháp quyền</span>
        </div>
        <h4 className="text-xl md:text-2xl font-black font-playfair tracking-tight mb-2 text-stone-900 leading-tight">
          TƯ TƯỞNG HỒ CHÍ MINH VỀ NHÀ NƯỚC PHÁP QUYỀN
        </h4>
        <p className="text-stone-700 text-xs md:text-sm leading-relaxed text-justify">
          Hồ Chí Minh đã sớm tiếp thu tinh hoa văn hóa pháp lý nhân loại để xây dựng một mô hình Nhà nước pháp quyền Việt Nam độc đáo, kết hợp hài hòa giữa tính khoa học hiện đại và tinh thần nhân đạo nhân nghĩa dân tộc.
        </p>
      </div>

      {/* TAB NAVIGATION */}
      <div className="flex border-b border-stone-200">
        {[
          { id: "a", label: "a) Hợp hiến, Hợp pháp", color: "indigo" },
          { id: "b", label: "b) Thượng tôn pháp luật", color: "teal" },
          { id: "c", label: "c) Pháp quyền nhân nghĩa", color: "emerald" }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-3 text-center text-xs font-black uppercase tracking-wider border-b-2 transition-all duration-300 ${
              activeTab === tab.id
                ? tab.color === "indigo"
                  ? "border-indigo-600 text-indigo-700 bg-indigo-50/20"
                  : tab.color === "teal"
                  ? "border-teal-600 text-teal-700 bg-teal-50/20"
                  : "border-emerald-600 text-emerald-700 bg-emerald-50/20"
                : "border-transparent text-stone-400 hover:text-stone-650 hover:bg-stone-50"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* TAB CONTENT A: HỢP HIẾN, HỢP PHÁP */}
      {activeTab === "a" && (
        <div className="space-y-6 animate-fadeIn">
          <p className="text-stone-750 text-xs md:text-sm leading-relaxed text-justify">
            Hồ Chí Minh luôn chủ trương xây dựng nền tảng pháp lý vững chắc cho nước Việt Nam mới. Người sớm nhận thấy tầm quan trọng của Hiến pháp trong việc xác lập chủ quyền nhân dân.
          </p>

          {/* VERTICAL TIMELINE */}
          <div className="relative pl-6 border-l-2 border-indigo-150 space-y-8 ml-2 pt-2 pb-2">
            {timelineEvents.map((evt, idx) => (
              <div key={idx} className="relative space-y-2">
                {/* Timeline dot */}
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-indigo-600 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                </div>
                
                {/* Year Label */}
                <span className="inline-flex items-center px-2 py-0.5 rounded bg-indigo-50 text-indigo-800 text-[10px] font-black tracking-wide">
                  {evt.year}
                </span>
                
                {/* Title */}
                <h6 className="text-xs md:text-sm font-bold text-stone-900 font-sans leading-tight">
                  {evt.title}
                </h6>
                
                {/* Description */}
                <p className="text-[11px] md:text-xs text-stone-600 leading-relaxed text-justify">
                  {evt.desc}
                </p>

                {/* Citation */}
                <p className="text-[10px] text-stone-450 italic font-medium">
                  {evt.cite}
                </p>
              </div>
            ))}
          </div>

          {/* GHI NHỚ & TỪ KHÓA (Tab a) */}
          <div className="space-y-4 pt-4 border-t border-stone-200">
            <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 border-l-4 border-l-amber-500 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-amber-800">
                <Sparkles className="w-5 h-5 text-amber-600 shrink-0" />
                <h5 className="font-extrabold text-xs md:text-sm uppercase tracking-wider">
                  💡 GHI NHỚ CỐT LÕI (Mục II.2.a)
                </h5>
              </div>
              
              <ul className="space-y-2 text-stone-750 text-xs md:text-sm pl-2">
                <li className="flex items-start gap-2 text-justify">
                  <span className="text-amber-600 font-bold shrink-0 mt-0.5">·</span>
                  <span><strong>Khởi nguồn tư tưởng:</strong> Bản Yêu sách gửi Hội nghị Vécxay 1919 là mầm mống đầu tiên cho tư tưởng pháp quyền của Hồ Chí Minh.</span>
                </li>
                <li className="flex items-start gap-2 text-justify">
                  <span className="text-amber-600 font-bold shrink-0 mt-0.5">·</span>
                  <span><strong>Tổng tuyển cử 6/1/1946:</strong> Là sự kiện vĩ đại khẳng định chủ quyền tối cao của nhân dân, khai sinh Quốc hội lập hiến đầu tiên tại Đông Nam Á.</span>
                </li>
                <li className="flex items-start gap-2 text-justify">
                  <span className="text-amber-600 font-bold shrink-0 mt-0.5">·</span>
                  <span><strong>Tính hợp hiến:</strong> Hồ Chí Minh được cử làm Chủ tịch Chính phủ liên hiệp hợp hiến, hợp pháp đầu tiên của nước Việt Nam mới.</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
              <h5 className="font-extrabold text-xs md:text-sm text-stone-850 uppercase tracking-wider">
                📋 TỪ KHÓA ÔN THI
              </h5>
              <div className="flex flex-wrap gap-2 pt-1">
                {[
                  "Yêu sách nhân dân An Nam (1919)",
                  "Hội nghị Vécxay",
                  "Hợp hiến hợp pháp",
                  "Tổng tuyển cử 6/1/1946",
                  "Phổ thông đầu phiếu",
                  "Quốc hội khóa I (2/3/1946)",
                  "Chính phủ liên hiệp kháng chiến"
                ].map((keyword, idx) => (
                  <span 
                    key={idx}
                    className="inline-flex items-center px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-800 text-[11px] md:text-xs font-bold leading-none tracking-wide select-none"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT B: THƯỢNG TÔN PHÁP LUẬT */}
      {activeTab === "b" && (
        <div className="space-y-6 animate-fadeIn">
          <p className="text-stone-750 text-xs md:text-sm leading-relaxed text-justify">
            Nhà nước thượng tôn pháp luật yêu cầu toàn bộ tổ chức, bộ máy nhà nước và mọi công dân đều phải phục tùng tối cao trước pháp luật. Hồ Chí Minh đã chỉ rõ 5 khía cạnh cốt lõi của nguyên tắc này:
          </p>

          {/* 5 VERTICAL BLOCKS */}
          <div className="space-y-5">
            {ruleOfLawBlocks.map((block) => {
              const BlockIcon = block.icon;
              return (
                <div
                  key={block.id}
                  className={`bg-white border border-stone-250 border-l-4 ${block.accentBorder} rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 space-y-3`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-xl ${block.iconBg} shrink-0`}>
                      <BlockIcon className="w-5 h-5" />
                    </div>
                    <h6 className="text-xs md:text-sm font-extrabold text-stone-900 font-sans leading-tight">
                      {block.id}. {block.title}
                    </h6>
                  </div>
                  <p 
                    className="text-[11px] md:text-xs text-stone-600 leading-relaxed text-justify"
                    dangerouslySetInnerHTML={{ __html: block.content }}
                  />
                </div>
              );
            })}
          </div>

          {/* Special warning box for Trừng trị nghiêm khắc */}
          <div className="relative overflow-hidden rounded-2xl bg-red-500/5 border border-red-200/60 p-5 shadow-sm space-y-3">
            <Quote className="absolute top-2 left-2 w-10 h-10 z-0 text-red-600 opacity-10 -rotate-12 pointer-events-none" />
            <p className="font-playfair italic text-stone-850 text-xs md:text-sm leading-relaxed text-justify relative z-10">
              &quot;Pháp luật Việt Nam tuy khoan hồng với những người biết cải tà quy chính, nhưng sẽ thẳng tay trừng trị những tên Việt gian đầu sỏ đã bán nước buôn dân.&quot;
            </p>
            <div className="flex items-center justify-end text-[9px] font-bold text-red-750 font-sans tracking-wide">
              <span>— Hồ Chí Minh (Toàn tập, t.6, tr.49)</span>
            </div>
          </div>

          {/* GHI NHỚ & TỪ KHÓA (Tab b) */}
          <div className="space-y-4 pt-4 border-t border-stone-200">
            <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 border-l-4 border-l-amber-500 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-amber-800">
                <Sparkles className="w-5 h-5 text-amber-600 shrink-0" />
                <h5 className="font-extrabold text-xs md:text-sm uppercase tracking-wider">
                  💡 GHI NHỚ CỐT LÕI (Mục II.2.b)
                </h5>
              </div>
              
              <ul className="space-y-2 text-stone-750 text-xs md:text-sm pl-2">
                <li className="flex items-start gap-2 text-justify">
                  <span className="text-amber-600 font-bold shrink-0 mt-0.5">·</span>
                  <span><strong>Trực tiếp lập hiến:</strong> Bác làm Trưởng ban soạn thảo Hiến pháp 1946 và 1959; ký lệnh công bố 16 đạo luật và 613 sắc lệnh.</span>
                </li>
                <li className="flex items-start gap-2 text-justify">
                  <span className="text-amber-600 font-bold shrink-0 mt-0.5">·</span>
                  <span><strong>Nguyên tắc Tư pháp:</strong> Cán bộ tư pháp phải nâng cao cái gương &quot;phụng công, thủ pháp, chí công vô tư&quot;.</span>
                </li>
                <li className="flex items-start gap-2 text-justify">
                  <span className="text-amber-600 font-bold shrink-0 mt-0.5">·</span>
                  <span><strong>Xử lý nghiêm minh:</strong> Thẳng tay trừng trị Việt gian phản quốc, chống thái độ thương xót thiếu nguyên tắc, phạt không nghiêm.</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
              <h5 className="font-extrabold text-xs md:text-sm text-stone-850 uppercase tracking-wider">
                📋 TỪ KHÓA ÔN THI
              </h5>
              <div className="flex flex-wrap gap-2 pt-1">
                {[
                  "Thượng tôn pháp luật",
                  "Hiến pháp 1946/1959",
                  "16 đạo luật",
                  "613 sắc lệnh",
                  "Dân biết dân bàn dân làm",
                  "Thẳng tay trừng trị Việt gian",
                  "Thương có khuôn phạt có uy",
                  "Phụng công thủ pháp",
                  "Chí công vô tư"
                ].map((keyword, idx) => (
                  <span 
                    key={idx}
                    className="inline-flex items-center px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-800 text-[11px] md:text-xs font-bold leading-none tracking-wide select-none"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT C: PHÁP QUYỀN NHÂN NGHĨA */}
      {activeTab === "c" && (
        <div className="space-y-6 animate-fadeIn">
          <p className="text-stone-750 text-xs md:text-sm leading-relaxed text-justify">
            Điểm đặc sắc nhất trong tư tưởng Hồ Chí Minh là <strong>&quot;Pháp quyền nhân nghĩa&quot;</strong> — một nền pháp luật luôn đặt quyền con người và tính nhân đạo lên vị trí trung tâm hàng đầu.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Human rights card */}
            <div className="bg-emerald-500/5 border border-emerald-100 rounded-2xl p-5 md:p-6 space-y-3">
              <div className="flex items-center gap-2 text-emerald-800">
                <User className="w-5 h-5 text-emerald-600" />
                <h6 className="font-extrabold text-xs md:text-sm uppercase tracking-wider">Quyền con người toàn diện</h6>
              </div>
              <p className="text-stone-600 text-xs leading-relaxed text-justify">
                Hồ Chí Minh tiếp thu và phát triển sáng tạo các lý thuyết quyền con người. Đề cập quyền tự nhiên của con người (trong đó <strong>quyền sống là cao nhất</strong>), quyền chính trị, dân sự, kinh tế, văn hóa và xã hội.
              </p>
              <p className="text-stone-600 text-xs leading-relaxed text-justify">
                Đặc biệt bảo vệ quyền lợi của những nhóm người cụ thể yếu thế như: phụ nữ, trẻ em, đồng bào dân tộc thiểu số...
              </p>
            </div>

            {/* Humanistic law card */}
            <div className="bg-emerald-500/5 border border-emerald-100 rounded-2xl p-5 md:p-6 space-y-3">
              <div className="flex items-center gap-2 text-emerald-800">
                <Heart className="w-5 h-5 text-emerald-600" />
                <h6 className="font-extrabold text-xs md:text-sm uppercase tracking-wider">Tính nhân văn của pháp luật</h6>
              </div>
              <p className="text-stone-600 text-xs leading-relaxed text-justify">
                Ngay khi lập nước đã tuyên bố xóa bỏ toàn bộ luật pháp thực dân, phát xít phong kiến hà khắc.
              </p>
              <p className="text-stone-600 text-xs leading-relaxed text-justify">
                Pháp luật Việt Nam mới mang tính <strong>&quot;khuyến thiện&quot;</strong>, lấy mục đích cảm hóa, giáo dục và hướng thiện làm căn bản. Ngay cả đối với kẻ phản bội cũng xem xét khoan dung dựa trên sự thức tỉnh lương tri.
              </p>
            </div>
          </div>

          {/* Quote tha thứ trừng trị */}
          <div className="relative overflow-hidden rounded-xl bg-white border border-emerald-250/60 p-4.5 shadow-sm space-y-3">
            <Quote className="absolute top-2 left-2 w-10 h-10 z-0 text-emerald-600/[0.04] -rotate-12 pointer-events-none" />
            <p className="font-playfair italic text-stone-850 text-xs md:text-sm leading-relaxed text-justify relative z-10">
              &quot;Chính phủ Việt Nam sẽ tha thứ hay trừng trị họ theo luật pháp tuỳ theo thái độ của họ hiện nay và về sau. Nhưng sẽ không có ai bị tàn sát.&quot;
            </p>
            <div className="flex items-center justify-end text-[9px] font-bold text-emerald-750 font-sans tracking-wide">
              <span>— Tuyên bố nhân đạo đối với kẻ phản bội (Toàn tập, t.6, tr.437)</span>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-255 text-stone-700 text-xs md:text-sm leading-relaxed text-justify space-y-2">
            <h6 className="font-bold text-stone-900 flex items-center gap-2">
              <Compass className="w-4 h-4 text-emerald-600" />
              Nền tảng đạo đức của Pháp luật:
            </h6>
            <p className="text-stone-600 text-xs">
              Hồ Chí Minh chủ trương xây dựng pháp luật dựa trên nền tảng đạo đức của xã hội. Các giá trị đạo đức tốt đẹp phải được thấm sâu vào từng quy định, từng điều khoản pháp luật tạo nên một hệ thống <strong>&quot;Pháp luật vì con người&quot;</strong> đích thực.
            </p>
          </div>

          {/* GHI NHỚ & TỪ KHÓA (Tab c) */}
          <div className="space-y-4 pt-4 border-t border-stone-200">
            <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 border-l-4 border-l-amber-500 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-amber-800">
                <Sparkles className="w-5 h-5 text-amber-600 shrink-0" />
                <h5 className="font-extrabold text-xs md:text-sm uppercase tracking-wider">
                  💡 GHI NHỚ CỐT LÕI (Mục II.2.c)
                </h5>
              </div>
              
              <ul className="space-y-2 text-stone-750 text-xs md:text-sm pl-2">
                <li className="flex items-start gap-2 text-justify">
                  <span className="text-amber-600 font-bold shrink-0 mt-0.5">·</span>
                  <span><strong>Pháp quyền nhân nghĩa:</strong> Tôn trọng quyền con người, bảo đảm quyền sống cao nhất và chăm lo lợi ích cho mọi tầng lớp nhân dân.</span>
                </li>
                <li className="flex items-start gap-2 text-justify">
                  <span className="text-amber-600 font-bold shrink-0 mt-0.5">·</span>
                  <span><strong>Tính khuyến thiện:</strong> Mục đích cuối cùng của hệ thống pháp luật là giáo dục, cảm hóa, thức tỉnh phần tốt trong mỗi con người.</span>
                </li>
                <li className="flex items-start gap-2 text-justify">
                  <span className="text-amber-600 font-bold shrink-0 mt-0.5">·</span>
                  <span><strong>Đạo đức và Luật pháp:</strong> Pháp luật phải thấm đẫm giá trị đạo đức nhân văn sâu sắc để trở thành pháp luật vì con người.</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
              <h5 className="font-extrabold text-xs md:text-sm text-stone-850 uppercase tracking-wider">
                📋 TỪ KHÓA ÔN THI
              </h5>
              <div className="flex flex-wrap gap-2 pt-1">
                {[
                  "Pháp quyền nhân nghĩa",
                  "Quyền con người",
                  "Quyền sống cao nhất",
                  "Bảo vệ nhóm yếu thế",
                  "Tính nhân văn",
                  "Pháp luật khuyến thiện",
                  "Giáo dục cảm hóa",
                  "Không tàn sát",
                  "Pháp luật vì con người"
                ].map((keyword, idx) => (
                  <span 
                    key={idx}
                    className="inline-flex items-center px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-800 text-[11px] md:text-xs font-bold leading-none tracking-wide select-none"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
