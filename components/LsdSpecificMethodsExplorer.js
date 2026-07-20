"use client";
import React, { useState, useRef } from "react";
import { 
  Activity, 
  Brain, 
  Shuffle, 
  Award, 
  Check, 
  Compass, 
  AlertTriangle 
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function LsdSpecificMethodsExplorer() {
  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef(null);

  const methods = [
    {
      title: "Phương pháp lịch sử",
      icon: Activity,
      color: "border-t-red-650 text-red-650 bg-red-50 hover:bg-red-50/80",
      activeBg: "bg-red-700 text-white shadow-md shadow-red-700/10",
      bullets: [
        "<strong>Định nghĩa:</strong> Là con đường, cách thức tìm hiểu và trình bày quá trình phát triển của các sự vật, hiện tượng một cách cụ thể, sinh động và quanh co.",
        "<strong>Bản chất:</strong> Đi sâu vào cái đặc thù, cái cá biệt để tái hiện lịch sử đúng như nó đã diễn ra qua không gian, thời gian, tên người, tên đất và tâm lý quần chúng.",
        "<strong>Lưu ý:</strong> Phương pháp này không phải là học thuộc lòng sự kiện mà phải hiểu bản chất, tính chất của sự kiện để không tách rời phương pháp logic."
      ]
    },
    {
      title: "Phương pháp logic",
      icon: Brain,
      color: "border-t-indigo-500 text-indigo-500 bg-indigo-50 hover:bg-indigo-50/80",
      activeBg: "bg-indigo-650 text-white shadow-md shadow-indigo-650/10",
      bullets: [
        "<strong>Định nghĩa:</strong> Là phương pháp nghiên cứu các hiện tượng lịch sử trong hình thức tổng quát để vạch ra bản chất, quy luật và xu hướng vận động chung.",
        "<strong>Bản chất:</strong> Sử dụng tư duy khái quát, phân tích, so sánh nhằm tìm ra cái phổ biến, lặp lại và xác định rõ bước phát triển tất yếu, khách quan của lịch sử.",
        "<strong>Trọng tâm:</strong> Chú trọng vào các sự kiện, nhân vật và giai đoạn điển hình để nhận thức đúng đắn và vận dụng vào thực tiễn cách mạng."
      ]
    },
    {
      title: "Quan hệ & Phương pháp bổ trợ",
      icon: Shuffle,
      color: "border-t-emerald-600 text-emerald-600 bg-emerald-50 hover:bg-emerald-50/80",
      activeBg: "bg-emerald-700 text-white shadow-md shadow-emerald-700/10",
      bullets: [
        "<strong>Sự thống nhất:</strong> Hai phương pháp cơ bản trên có mối quan hệ mật thiết, là sự thống nhất biện chứng và không thể tách rời trong nghiên cứu lịch sử Đảng.",
        "<strong>Phương pháp bổ trợ:</strong> Cần coi trọng phương pháp tổng kết thực tiễn (gắn lý luận với kinh nghiệm) và phương pháp so sánh (đối chiếu các giai đoạn, sự kiện trong nước và thế giới).",
        "<strong>Đối với sinh viên:</strong> Chú trọng nghe giảng để nắm nội dung cơ bản, kết hợp làm việc nhóm, thảo luận, ứng dụng công nghệ thông tin và đi thực tế tại các bảo tàng, di tích lịch sử."
      ]
    },
    {
      title: "Tính khoa học & Tính đảng",
      icon: Award,
      color: "border-t-amber-500 text-amber-600 bg-amber-50 hover:bg-amber-50/80",
      activeBg: "bg-amber-650 text-white shadow-md shadow-amber-650/10",
      bullets: [
        "<strong>Yêu cầu lý luận:</strong> Đòi hỏi người học phải nắm vững lý luận cơ bản của chủ nghĩa Mác-Lênin và tư tưởng Hồ Chí Minh để vận dụng vào thực tiễn.",
        "<strong>Tính khoa học:</strong> Đòi hỏi sự khách quan, trung thực, tôn trọng sự thật lịch sử dựa trên các luận cứ khoa học nghiêm túc và sáng tạo.",
        "<strong>Tính đảng:</strong> Đứng trên lập trường của chủ nghĩa Mác-Lênin, tư tưởng Hồ Chí Minh để bảo vệ cái đúng, phê phán cái sai, đấu tranh chống lại các luận điệu xuyên tạc của các thế lực thù địch.",
        "<strong>Sự kết hợp:</strong> Tính khoa học và tính đảng thống nhất chặt chẽ với nhau nhằm phục vụ nhiệm vụ chính trị, lý tưởng độc lập dân tộc và chủ nghĩa xã hội."
      ]
    }
  ];

  // GSAP Animation when activeTab changes
  useGSAP(() => {
    {
      const targets = containerRef.current ? containerRef.current.querySelectorAll(".method-detail-bullet") : document.querySelectorAll(".method-detail-bullet");
      if (targets && targets.length > 0) {
      gsap.fromTo(targets,
      { opacity: 0, x: -10 },
      { opacity: 1, x: 0, duration: 0.45, ease: "power2.out", stagger: 0.08 }
    );
      }
    }
  }, [activeTab]);

  const activeMethod = methods[activeTab];
  const ActiveIcon = activeMethod.icon;

  return (
    <div ref={containerRef} className="w-full py-4 select-text font-sans">
      {/* Tab Navigation Row */}
      <div className="flex flex-col sm:flex-row gap-2 border-b border-stone-200 pb-3 mb-6">
        {methods.map((tab, idx) => {
          const TabIcon = tab.icon;
          const isActive = idx === activeTab;
          return (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center justify-center sm:justify-start gap-2.5 px-4 py-3 rounded-xl font-bold text-xs md:text-sm transition-all duration-300 cursor-pointer border-none outline-none ${
                isActive 
                  ? tab.activeBg 
                  : "bg-stone-100/80 hover:bg-stone-200/50 text-stone-600 hover:text-stone-900"
              }`}
            >
              <TabIcon className="w-4 h-4" />
              <span>{tab.title}</span>
            </button>
          );
        })}
      </div>

      {/* Main Tab Content Panel */}
      <div className={`bg-white border border-stone-200 rounded-2xl p-5 md:p-6 shadow-sm border-t-4 ${activeMethod.color} transition-all duration-300`}>
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center flex-shrink-0">
            <ActiveIcon className="w-5 h-5 text-stone-700" />
          </div>
          <h5 className="text-xs md:text-sm font-black text-stone-900 uppercase tracking-wide">
            {activeTab + 1}. {activeMethod.title}
          </h5>
        </div>

        {/* Bullet List */}
        <ul className="space-y-4 pl-0">
          {activeMethod.bullets.map((bullet, idx) => (
            <li
              key={idx}
              className="method-detail-bullet list-none flex items-start gap-3"
            >
              <div className="w-6 h-6 rounded-lg bg-stone-100 text-stone-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span
                className="text-xs md:text-sm text-stone-650 leading-relaxed font-sans"
                dangerouslySetInnerHTML={{ __html: bullet }}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
