"use client";
import React, { useState, useEffect } from "react";
import {
  Sparkles,
  ArrowUpRight,
  Clock
} from "lucide-react";

export default function AdminUnifiedHero({
  activeTab = "overview",
  onSelectTab,
  stats,
  onOpenDrawer
}) {
  const [timeString, setTimeString] = useState("");
  const [scrollY, setScrollY] = useState(0);

  // Real-time clock update
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString("vi-VN", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit"
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Scroll-driven Parallax and Dynamic Fog tracking
  useEffect(() => {
    if (typeof window === "undefined") return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate dynamic fade-in opacity for bottom feathering fog: 0 at top, reaching 1.0 at scrollY >= 180px
  const fogOpacity = Math.min(1, Math.max(0, scrollY / 180));
  const isDesktop = typeof window !== "undefined" ? window.innerWidth >= 768 : true;
  const parallaxY = isDesktop ? scrollY : 0;

  // 4 Tabs Content Definitions
  const tabsData = {
    overview: {
      id: "overview",
      name: "Tổng quan",
      subtitle: "Bảng Điều Khiển Khảo Thí",
      desc: "Hệ thống chỉ huy khảo thí và giám sát tiến độ ôn luyện học tập toàn trường theo thời gian thực.",
      kpis: [
        { value: `${stats?.totalSubjects || 10} Môn`, label: "Chương trình học" },
        { value: `${stats?.avgScore || 0}%`, label: "Độ chuẩn xác TB" },
        { value: `${stats?.totalAttempts || 0}`, label: "Lượt làm bài thi" }
      ],
      ctaText: "Xem Báo Cáo Tổng Hợp"
    },
    users: {
      id: "users",
      name: "Học viên",
      subtitle: "Hồ Sơ & Năng Lực Học Viên",
      desc: "Quản lý danh sách học sinh, phân quyền môn học tự chọn và theo dõi biểu đồ radar 8 trục năng lực chuyên sâu.",
      kpis: [
        { value: `${stats?.totalUsers || 0}`, label: "Học viên đăng ký" },
        { value: "100%", label: "Phân quyền linh hoạt" },
        { value: "8 Trục", label: "Radar năng lực" }
      ],
      ctaText: "Quản Lý Danh Sách Học Viên"
    },
    questions: {
      id: "questions",
      name: "Soi đề & Bẫy",
      subtitle: "Kiểm Định Đề Thi & Bẫy Tư Duy",
      desc: "Tự động kiểm tra quy tắc chống đoán bừa ≤ 15 ký tự trong câu và bóc tách 50 câu bẫy tư duy Vận dụng cao.",
      kpis: [
        { value: "≤ 15c", label: "Độ lệch đáp án" },
        { value: `${stats?.totalTraps || 50}`, label: "Câu bẫy tư duy" },
        { value: "100%", label: "Chuẩn giáo trình" }
      ],
      ctaText: "Kiểm Định Ngân Hàng Đề"
    },
    leaderboard: {
      id: "leaderboard",
      name: "Bảng vàng",
      subtitle: "Bục Vinh Danh Thành Tích",
      desc: "Tôn vinh những học viên đạt thành tích xuất sắc nhất toàn hệ thống với bục Golden Podium và bảng xếp hạng.",
      kpis: [
        { value: "Top 3", label: "Bục vinh danh vàng" },
        { value: "40/40", label: "Điểm tối đa" },
        { value: "Live", label: "Xếp hạng thời gian thực" }
      ],
      ctaText: "Xem Bảng Điểm Vinh Danh"
    }
  };

  const currentTabInfo = tabsData[activeTab] || tabsData.overview;

  return (
    <div className="relative w-full min-h-screen overflow-hidden text-[#38150E] flex flex-col justify-end pb-8 sm:pb-12 px-4 sm:px-8 lg:px-10 select-none">
      
      {/* ========================================================================= */}
      {/* LỚP 0 (Z0): BACKGROUND PHOTO (BASE IMAGE WITH OPEN BLUE SKY + PARALLAX)   */}
      {/* ========================================================================= */}
      <div 
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none transition-transform duration-75 ease-out"
        style={{
          transform: parallaxY > 0 ? `translateY(${parallaxY * 0.35}px)` : "none",
          willChange: "transform"
        }}
      >
        <img
          src="/images/admin/admin_hero_observatory.jpg"
          alt="StudyMaster Academic Observatory"
          className="w-full h-full object-cover object-top transform scale-100"
        />
      </div>

      {/* ========================================================================= */}
      {/* LỚP 1 (Z1): 2-LINE FLUID ADAPTIVE TYPOGRAPHY ('STUDY' & 'MASTER')        */}
      {/* ========================================================================= */}
      <div 
        className="absolute left-6 sm:left-12 lg:left-16 xl:left-24 z-10 flex flex-col items-start pointer-events-none select-none transition-transform duration-75 ease-out"
        style={{
          top: "clamp(120px, 17vh, 260px)",
          transform: parallaxY > 0 ? `translateY(${parallaxY * 0.20}px)` : "none",
          willChange: "transform",
          opacity: 0.38,
          mixBlendMode: "soft-light"
        }}
      >
        <span 
          className="font-black tracking-[0.12em] sm:tracking-[0.16em] leading-none text-white uppercase text-left whitespace-nowrap drop-shadow-[0_2px_12px_rgba(255,255,255,0.25)]"
          style={{
            fontSize: "clamp(3.8rem, 8.5vh, 9.5rem)"
          }}
        >
          STUDY
        </span>
        <span 
          className="font-black tracking-[0.12em] sm:tracking-[0.16em] leading-none text-white uppercase text-left whitespace-nowrap mt-1 sm:mt-2 lg:mt-3 drop-shadow-[0_2px_12px_rgba(255,255,255,0.25)]"
          style={{
            fontSize: "clamp(3.8rem, 8.5vh, 9.5rem)",
            marginLeft: "clamp(1.5rem, 4.5vw, 6.5rem)"
          }}
        >
          MASTER
        </span>
      </div>

      {/* ========================================================================= */}
      {/* LỚP 1.5: FOREGROUND 3D CUTOUT (ROTUNDA & ARCHITECTURAL COLUMNS + PARALLAX)*/}
      {/* ========================================================================= */}
      <div 
        className="absolute inset-0 z-15 overflow-hidden pointer-events-none transition-transform duration-75 ease-out"
        style={{
          transform: parallaxY > 0 ? `translateY(${parallaxY * 0.50}px)` : "none",
          willChange: "transform"
        }}
      >
        <img
          src="/images/admin/admin_hero_observatory_foreground.png"
          alt="StudyMaster Observatory Foreground"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* ========================================================================= */}
      {/* LỚP 2 (Z2): GRADIENT SCRIM (PHỦ TOÀN BỘ HERO TRÊN ẢNH NỀN & FOREGROUND)   */}
      {/* ========================================================================= */}
      <div 
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.15) 50%, transparent 80%)"
        }}
      />

      {/* ========================================================================= */}
      {/* LỚP 2.5: DYNAMIC SCROLL-DRIVEN FADE-TO-IVORY FEATHERING (0% -> 100%)      */}
      {/* ========================================================================= */}
      <div 
        className="absolute inset-x-0 bottom-0 h-48 sm:h-64 lg:h-80 z-25 pointer-events-none transition-opacity duration-100 ease-out"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, rgba(250, 248, 245, 0.2) 30%, rgba(250, 248, 245, 0.8) 70%, #FAF8F5 100%)",
          opacity: fogOpacity,
          willChange: "opacity"
        }}
      />

      {/* ========================================================================= */}
      {/* LỚP 3 (Z3): BOTTOM FLOATING METRICS & LIVE TIME (PROTECTED TEXT-SHADOW)  */}
      {/* ========================================================================= */}
      <div className="relative z-30 w-full max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-4 sm:px-8 lg:px-12">
        {/* Bên trái: 3 KPI Metric Highlights (Chữ nổi với quầng bảo vệ text-shadow sâu) */}
        <div className="flex items-center gap-8 sm:gap-14 lg:gap-20 xl:gap-24">
          {currentTabInfo.kpis.map((kpi, kIdx) => (
            <div key={kIdx} className="space-y-1 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div 
                className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white tracking-tight flex items-center gap-2"
                style={{
                  textShadow: "0 2px 4px rgba(0, 0, 0, 0.8), 0 4px 14px rgba(0, 0, 0, 0.65), 0 0 24px rgba(0, 0, 0, 0.5)"
                }}
              >
                <span>{kpi.value}</span>
                {kIdx === 0 && <Sparkles size={18} className="text-[#E8B86D] drop-shadow-sm" />}
              </div>
              <div 
                className="text-xs sm:text-sm lg:text-base text-[#F5EBE1] font-semibold tracking-wide"
                style={{
                  textShadow: "0 1px 3px rgba(0, 0, 0, 0.85), 0 2px 10px rgba(0, 0, 0, 0.7), 0 0 16px rgba(0, 0, 0, 0.4)"
                }}
              >
                {kpi.label}
              </div>
            </div>
          ))}
        </div>

        {/* Bên phải: Đồng hồ Thời gian thực & Server Status (Chữ nổi với text-shadow sâu) */}
        <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center gap-2">
          <div 
            className="flex items-center gap-2 text-[#F5EBE1]"
            style={{
              textShadow: "0 1px 3px rgba(0, 0, 0, 0.85), 0 2px 10px rgba(0, 0, 0, 0.7)"
            }}
          >
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider flex items-center gap-1.5">
              <Clock size={14} className="text-[#E8B86D]" />
              Thời Gian Thực
            </span>
            <span className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse" />
          </div>

          <div 
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white tracking-tight font-mono"
            style={{
              textShadow: "0 2px 4px rgba(0, 0, 0, 0.8), 0 4px 14px rgba(0, 0, 0, 0.65), 0 0 24px rgba(0, 0, 0, 0.5)"
            }}
          >
            {timeString || "00:00:00"}
          </div>

          <div className="text-[10px] sm:text-[11px] lg:text-xs font-bold text-[#86EFAC] bg-black/40 backdrop-blur-md border border-white/20 px-3 py-0.5 rounded-full w-fit shadow-md">
            ● Live Online • 60 FPS
          </div>
        </div>
      </div>

    </div>
  );
}
