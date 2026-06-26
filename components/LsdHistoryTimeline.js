"use client";
import React, { useState, useRef } from "react";
import { BookOpen, Calendar, Award, GraduationCap, FileText } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function LsdHistoryTimeline() {
  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef(null);

  const milestones = [
    {
      year: "1933",
      title: "Tác phẩm lịch sử Đảng đầu tiên",
      icon: BookOpen,
      iconBg: "bg-red-50 text-red-600 border-red-100",
      activeBg: "bg-red-600 text-white border-red-600 shadow-lg shadow-red-500/20",
      description: "Tác giả Hồng Thế Công (tên thật là Hà Huy Tập, sau này là Tổng Bí thư của Đảng) công bố tác phẩm <strong>\"Sơ thảo lịch sử phong trào cộng sản Đông Dương\"</strong>.",
      detail: "Đây là cuốn sách đầu tiên đặt nền móng cho việc tổng hợp, đúc rút kinh nghiệm lịch sử của phong trào cộng sản và công nhân ở Đông Dương. Tác phẩm thể hiện tư duy lý luận nhạy bén và tinh thần đúc rút thực tiễn cách mạng từ rất sớm, ngay khi Đảng mới thành lập được 3 năm."
    },
    {
      year: "1960",
      title: "Đại hội III & Định hướng nghiên cứu",
      icon: Award,
      iconBg: "bg-amber-50 text-amber-600 border-amber-100",
      activeBg: "bg-amber-500 text-white border-amber-500 shadow-lg shadow-amber-500/20",
      description: "Đại hội đại biểu toàn quốc lần thứ III của Đảng xác định rõ nhiệm vụ nghiên cứu, tổng kết lịch sử Đảng.",
      detail: "Đại hội chỉ ra tầm quan trọng của việc nghiên cứu lịch sử Đảng nhằm rút ra các bài học kinh nghiệm quý báu cho chặng đường cách mạng tiếp theo, xác định quy luật phát triển của cách mạng Việt Nam dưới sự lãnh đạo tiên phong của Đảng."
    },
    {
      year: "1962",
      title: "Thành lập Ban Nghiên cứu Lịch sử Đảng",
      icon: GraduationCap,
      iconBg: "bg-emerald-50 text-emerald-600 border-emerald-100",
      activeBg: "bg-emerald-600 text-white border-emerald-600 shadow-lg shadow-emerald-500/20",
      description: "Thành lập <strong>Ban Nghiên cứu Lịch sử Đảng Trung ương</strong> (ngày nay là Viện Lịch sử Đảng trực thuộc Học viện Chính trị Quốc gia Hồ Chí Minh).",
      detail: "Sự kiện này đánh dấu khoa học Lịch sử Đảng chính thức có cơ quan chuyên môn quản lý và nghiên cứu hệ thống. Cũng từ những năm 60 của thế kỷ XX, bộ môn Lịch sử Đảng bắt đầu được đưa vào giảng dạy chính thức tại các trường đại học, cao đẳng trên cả nước."
    },
    {
      year: "1992",
      title: "Hội đồng chỉ đạo Biên soạn Giáo trình Quốc gia",
      icon: FileText,
      iconBg: "bg-blue-50 text-blue-600 border-blue-100",
      activeBg: "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/20",
      description: "Chủ tịch Hội đồng Bộ trưởng ban hành Quyết định số 255CT thành lập <strong>Hội đồng chỉ đạo biên soạn giáo trình quốc gia</strong>.",
      detail: "Hội đồng chịu trách nhiệm chỉ đạo biên soạn giáo trình chuẩn quốc gia cho các môn khoa học Mác-Lênin, tư tưởng Hồ Chí Minh, trong đó có môn Lịch sử Đảng Cộng sản Việt Nam, chuẩn hóa nội dung giảng dạy học thuật bậc đại học."
    }
  ];

  // GSAP animations
  useGSAP(() => {
    gsap.fromTo(".timeline-card",
      { opacity: 0, y: 15, scale: 0.98 },
      { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: "power2.out" }
    );
  }, { dependencies: [activeTab], scope: containerRef });

  return (
    <div ref={containerRef} className="w-full bg-stone-50/50 border border-stone-200/85 rounded-3xl p-5 md:p-8 shadow-sm space-y-8 select-text">
      {/* Title Header */}
      <div className="space-y-1.5 border-b border-stone-200/70 pb-5">
        <h4 className="text-lg md:text-xl font-bold font-sans text-stone-900 flex items-center gap-2.5">
          <span className="p-2 rounded-xl bg-red-500/10 text-red-700">⏱️</span>
          Trình diễn dòng thời gian Khoa học Lịch sử Đảng
        </h4>
        <p className="text-xs md:text-sm text-stone-500 font-medium leading-relaxed max-w-2xl">
          Click vào các mốc thời gian bên dưới để tìm hiểu chi tiết các sự kiện đánh dấu sự hình thành và chuẩn hóa bộ môn khoa học Lịch sử Đảng.
        </p>
      </div>

      <div className="space-y-8">
        {/* Timeline Nodes */}
        <div className="relative flex flex-col md:flex-row items-stretch justify-between gap-6 md:gap-4 md:before:content-[''] md:before:absolute md:before:top-6 md:before:left-6 md:before:right-6 md:before:h-[2px] md:before:bg-stone-200">
          {milestones.map((m, idx) => {
            const IconComp = m.icon;
            const isActive = activeTab === idx;
            return (
              <div
                key={m.year}
                onClick={() => setActiveTab(idx)}
                className="relative z-10 flex md:flex-col items-center gap-4 md:gap-3 cursor-pointer group flex-1"
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center border-2 transition-all duration-300 ${
                    isActive ? m.activeBg : `${m.iconBg} group-hover:scale-105 active:scale-95`
                  }`}
                >
                  <IconComp className="w-5 h-5" />
                </div>
                <div className="md:text-center space-y-0.5">
                  <span className={`text-base font-extrabold font-sans tracking-wide block transition-colors ${
                    isActive ? "text-red-700" : "text-stone-400 group-hover:text-stone-600"
                  }`}>
                    {m.year}
                  </span>
                  <span className={`text-xs font-semibold font-sans block max-w-[140px] leading-snug ${
                    isActive ? "text-stone-850 font-bold" : "text-stone-500"
                  }`}>
                    {m.title}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Detail Display Card */}
        <div className="timeline-card bg-white border border-stone-200/80 rounded-2xl p-5 md:p-7 shadow-sm border-l-4 border-l-red-650 transition-all">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2.5 py-1 bg-red-50 text-red-700 rounded-lg text-xs font-extrabold tracking-wide">
              Năm {milestones[activeTab].year}
            </span>
            <h5 className="text-sm md:text-base font-extrabold text-stone-850">
              {milestones[activeTab].title}
            </h5>
          </div>
          <p
            className="text-stone-700 text-sm md:text-base leading-[1.85] font-sans mb-4"
            dangerouslySetInnerHTML={{ __html: milestones[activeTab].description }}
          />
          <div className="bg-stone-50 border border-stone-100 rounded-xl p-4 text-xs md:text-sm text-stone-650 leading-relaxed font-sans">
            {milestones[activeTab].detail}
          </div>
        </div>
      </div>
    </div>
  );
}
