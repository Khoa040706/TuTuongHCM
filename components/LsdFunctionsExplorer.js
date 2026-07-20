"use client";
import React, { useState, useRef } from "react";
import { 
  BookOpen, 
  Award, 
  Compass, 
  Library, 
  Key, 
  LineChart, 
  Heart, 
  Flame, 
  Shield, 
  Sun, 
  Eye, 
  AlertTriangle 
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function LsdFunctionsExplorer() {
  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef(null);

  const functionsData = [
    {
      tabTitle: "Chức năng nhận thức",
      tabDesc: "Cung cấp tri thức khách quan và quy luật lịch sử của cách mạng Việt Nam dưới sự lãnh đạo của Đảng.",
      icon: BookOpen,
      color: "from-red-600 to-rose-600",
      bgLight: "bg-red-50/50",
      items: [
        {
          title: "Cung cấp tri thức hệ thống",
          icon: Library,
          iconColor: "text-red-650 bg-red-50 border-red-100",
          desc: "Giúp người học nhận thức đầy đủ, có hệ thống các tri thức lịch sử về quá trình lãnh đạo, đấu tranh và cầm quyền của Đảng."
        },
        {
          title: "Làm rõ bản chất và quy luật ra đời",
          icon: Key,
          iconColor: "text-amber-600 bg-amber-50 border-amber-100",
          desc: "Khẳng định Đảng ra đời từ sự kết hợp giữa <strong>chủ nghĩa Mác-Lênin với phong trào công nhân và phong trào yêu nước Việt Nam</strong>. Từ năm 1930 đến nay, Đảng là tổ chức lãnh đạo duy nhất, và từ năm 1945 trở thành Đảng cầm quyền."
        },
        {
          title: "Nâng cao nhận thức lý luận và chính trị",
          icon: Award,
          iconColor: "text-emerald-650 bg-emerald-50 border-emerald-100",
          desc: "Đúc kết lý luận từ thực tiễn cách mạng Việt Nam, làm rõ các vấn đề về khoa học chính trị, khoa học lãnh đạo, quản lý và mối quan hệ biện chứng giữa đất nước với thế giới."
        },
        {
          title: "Tổng kết quy luật phát triển",
          icon: LineChart,
          iconColor: "text-blue-650 bg-blue-50 border-blue-100",
          desc: "Giúp nhận thức sâu sắc quy luật của cách mạng giải phóng dân tộc, quy luật xây dựng, bảo vệ Tổ quốc và con đường đi lên chủ nghĩa xã hội tại Việt Nam."
        }
      ]
    },
    {
      tabTitle: "Chức năng giáo dục",
      tabDesc: "Bồi dưỡng tư tưởng, lý tưởng cách mạng, lòng yêu nước và đạo đức cách mạng cho thế hệ trẻ.",
      icon: Shield,
      color: "from-amber-500 to-orange-600",
      bgLight: "bg-amber-50/40",
      items: [
        {
          title: "Giáo dục lòng yêu nước",
          icon: Heart,
          iconColor: "text-rose-650 bg-rose-50 border-rose-100",
          desc: "Khơi dậy sâu sắc tinh thần yêu nước, niềm tự hào, tự tôn dân tộc và ý chí tự lực, tự cường, vượt qua mọi khó khăn thử thách."
        },
        {
          title: "Bồi đắp lý tưởng cách mạng",
          icon: Flame,
          iconColor: "text-orange-650 bg-orange-50 border-orange-100",
          desc: "Giáo dục mục tiêu chiến lược là <strong>độc lập dân tộc gắn liền với chủ nghĩa xã hội</strong>, nâng cao bản lĩnh tư tưởng chính trị và lý luận cách mạng."
        },
        {
          title: "Tôn vinh truyền thống anh hùng",
          icon: Shield,
          iconColor: "text-indigo-650 bg-indigo-50 border-indigo-100",
          desc: "Giáo dục chủ nghĩa anh hùng cách mạng, tinh thần chiến đấu bất khuất, sự hy sinh oanh liệt và tính tiên phong gương mẫu của các thế hệ chiến sĩ cộng sản."
        },
        {
          title: "Rèn luyện đạo đức, lối sống",
          icon: Sun,
          iconColor: "text-amber-600 bg-amber-50 border-amber-100",
          desc: "Giáo dục truyền thống, đạo đức cách mạng, nhân cách và lối sống cao đẹp theo tư tưởng Hồ Chí Minh: <em>&quot;Đảng ta là đạo đức, là văn minh&quot;</em>."
        }
      ]
    },
    {
      tabTitle: "Chức năng dự báo & phê phán",
      tabDesc: "Soi sáng thực tiễn tương lai và làm sắc bén vũ khí phê bình để chỉnh đốn, xây dựng Đảng trong sạch vững mạnh.",
      icon: Compass,
      color: "from-emerald-600 to-teal-600",
      bgLight: "bg-emerald-50/40",
      items: [
        {
          title: "Dự báo xu thế tương lai",
          icon: Eye,
          iconColor: "text-teal-650 bg-teal-50 border-teal-100",
          desc: "Giúp hiểu rõ quá khứ để soi sáng hiện tại và <strong>dự báo khoa học về xu hướng phát triển của tương lai</strong> (ví dụ thực tiễn từ những dự báo chính xác của Chủ tịch Hồ Chí Minh vào năm 1942 và trong hai cuộc kháng chiến chống xâm lược)."
        },
        {
          title: "Phê phán để chỉnh đốn Đảng",
          icon: AlertTriangle,
          iconColor: "text-red-650 bg-red-50 border-red-100",
          desc: "Sử dụng quy luật tự phê bình và phê bình để kiên quyết đấu tranh chống lại các biểu hiện tiêu cực, lạc hậu, ngăn chặn sự suy thoái về tư tưởng chính trị, đạo đức, lối sống, cùng các biểu hiện <em>&quot;tự diễn biến&quot;</em>, <em>&quot;tự chuyển hóa&quot;</em> trong nội bộ."
        }
      ]
    }
  ];

  // GSAP Animation when activeTab changes
  useGSAP(() => {
    {
      const targets = containerRef.current ? containerRef.current.querySelectorAll(".function-subcard") : document.querySelectorAll(".function-subcard");
      if (targets && targets.length > 0) {
      gsap.fromTo(targets,
      { opacity: 0, y: 15, scale: 0.98 },
      { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: "power2.out", stagger: 0.08 }
    );
      }
    }
    {
      const targets = containerRef.current ? containerRef.current.querySelectorAll(".tab-desc-panel") : document.querySelectorAll(".tab-desc-panel");
      if (targets && targets.length > 0) {
      gsap.fromTo(targets,
      { opacity: 0, x: -10 },
      { opacity: 1, x: 0, duration: 0.4 }
    );
      }
    }
  }, [activeTab]);

  const activeData = functionsData[activeTab];

  return (
    <div ref={containerRef} className="w-full py-4 select-text font-sans">
      {/* Tab Navigation Row */}
      <div className="flex flex-col sm:flex-row gap-2 border-b border-stone-200 pb-3 mb-6">
        {functionsData.map((tab, idx) => {
          const TabIcon = tab.icon;
          const isActive = idx === activeTab;
          return (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center justify-center sm:justify-start gap-2.5 px-4 py-3 rounded-xl font-bold text-xs md:text-sm transition-all duration-305 cursor-pointer border-none outline-none ${
                isActive 
                  ? "bg-red-700 text-white shadow-md shadow-red-700/10" 
                  : "bg-stone-100/80 hover:bg-stone-200/50 text-stone-600 hover:text-stone-900"
              }`}
            >
              <TabIcon className={`w-4 h-4 ${isActive ? "text-white" : "text-stone-500"}`} />
              <span>{tab.tabTitle}</span>
            </button>
          );
        })}
      </div>

      {/* Description Panel */}
      <div className="tab-desc-panel bg-stone-50 border-l-4 border-l-red-700 p-4 rounded-r-xl mb-6">
        <p className="text-xs md:text-sm text-stone-650 leading-relaxed font-semibold italic">
          {activeData.tabDesc}
        </p>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {activeData.items.map((item, idx) => {
          const ItemIcon = item.icon;
          return (
            <div
              key={idx}
              className="function-subcard group bg-white border border-stone-200/85 rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 border-t-4 border-t-stone-300 hover:border-t-red-600"
            >
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${item.iconColor} transition-transform group-hover:scale-105 duration-350`}>
                  <ItemIcon className="w-5 h-5" />
                </div>
                <h5 className="text-xs md:text-sm font-black text-stone-900 uppercase tracking-wide group-hover:text-red-700 transition-colors">
                  {item.title}
                </h5>
              </div>

              {/* Card Description */}
              <p
                className="text-xs md:text-sm text-stone-650 leading-relaxed font-sans"
                dangerouslySetInnerHTML={{ __html: item.desc }}
              />
            </div>
          );
        })}
      </div>
      
      {/* Premium Footer Summary */}
      <div className="mt-8 border-t border-dashed border-stone-200 pt-5 flex items-center justify-between text-[11px] text-stone-400 font-bold uppercase tracking-wider">
        <span>Học thuyết cách mạng khoa học</span>
        <span>Lịch sử Đảng Cộng sản Việt Nam</span>
      </div>
    </div>
  );
}
