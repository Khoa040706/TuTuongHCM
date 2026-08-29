"use client";
import React, { useEffect, useRef, useState } from "react";
import { Sparkles, Shield, Activity, Clock, Plus, BookOpen, LogOut, Layers } from "lucide-react";

export default function AdminHero({
  stats,
  currentUser = "Admin",
  onOpenAddUser,
  onSwitchTab,
  onLogout
}) {
  const canvasRef = useRef(null);
  const [timeString, setTimeString] = useState("");
  const [greeting, setGreeting] = useState("Chào buổi sáng");

  // Real-time clock and dynamic greeting
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

      const hour = now.getHours();
      if (hour >= 5 && hour < 12) {
        setGreeting("Chào buổi sáng");
      } else if (hour >= 12 && hour < 18) {
        setGreeting("Chào buổi chiều");
      } else {
        setGreeting("Chào buổi tối");
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Warm Particle Ambient Canvas (Golden amber & terracotta dust)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resize = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;
      }
    };
    resize();
    window.addEventListener("resize", resize);

    const particlesCount = 35;
    const particles = [];
    const colors = [
      "rgba(216, 90, 56, ",  // Terracotta
      "rgba(212, 139, 56, ", // Amber Ochre
      "rgba(232, 184, 109, " // Warm Gold
    ];

    for (let i = 0; i < particlesCount; i++) {
      particles.push({
        x: Math.random() * (canvas.width || 800),
        y: Math.random() * (canvas.height || 300),
        r: Math.random() * 2.2 + 0.8,
        colorBase: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.45 + 0.15,
        vx: (Math.random() - 0.5) * 0.35,
        vy: -Math.random() * 0.4 - 0.1,
        oscillationSpeed: Math.random() * 0.02 + 0.01,
        angle: Math.random() * Math.PI * 2
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.angle += p.oscillationSpeed;
        p.x += p.vx + Math.sin(p.angle) * 0.25;
        p.y += p.vy;

        // Wrap around edges
        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `${p.colorBase}${p.opacity})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#FAF5EE] via-[#F4EBE0] to-[#EFE3D3] border border-[#E8DACB] shadow-sm p-6 sm:p-8 select-none transition-all duration-300">
      {/* Background Ambient Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0 opacity-75"
      />

      {/* Decorative Warm Ambient Glows */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#D85A38]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#E8B86D]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        {/* Left Side: Brand, Greeting & Time */}
        <div className="space-y-3 max-w-xl">
          {/* Top Pill Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#38150E] text-[#FAF8F5] shadow-xs">
              <Shield size={12} className="text-[#E8B86D]" />
              StudyMaster Control Room
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold bg-[#FAF8F5]/80 backdrop-blur-xs text-[#6E5D53] border border-[#E8DACB]">
              <Clock size={12} className="text-[#D85A38]" />
              {timeString || "00:00:00"}
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#F0FDF4] text-[#15803D] border border-[#BBF7D0]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#15803D] animate-pulse" />
              Live Online
            </span>
          </div>

          {/* Title & Personalized Greeting */}
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-[#38150E] tracking-tight flex items-center gap-2.5">
              <span>{greeting}, {currentUser}</span>
              <Sparkles size={24} className="text-[#D85A38] shrink-0" />
            </h1>
            <p className="text-xs sm:text-sm text-[#6E5D53] font-medium mt-1 leading-relaxed">
              Hệ thống giám sát khảo thí, quản trị học viên và phân tích chất lượng ngân hàng câu hỏi theo thời gian thực.
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5 pt-1">
            <button
              onClick={onOpenAddUser}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#D85A38] hover:bg-[#C44C2C] active:scale-95 shadow-sm shadow-[#D85A38]/25 transition-all duration-200 cursor-pointer border-none"
            >
              <Plus size={14} />
              <span>Thêm học viên</span>
            </button>

            <button
              onClick={() => onSwitchTab("questions")}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-[#38150E] bg-white/90 hover:bg-white active:scale-95 border border-[#E8DACB] shadow-xs transition-all duration-200 cursor-pointer"
            >
              <BookOpen size={14} className="text-[#D48B38]" />
              <span>Soi đề & Bẫy</span>
            </button>

            <button
              onClick={onLogout}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-[#8C7A70] hover:text-[#B91C1C] hover:bg-red-50/80 transition-all duration-200 cursor-pointer bg-transparent border border-transparent"
              title="Đăng xuất khỏi phiên quản trị"
            >
              <LogOut size={13} />
              <span>Thoát</span>
            </button>
          </div>
        </div>

        {/* Right Side: Hardware Modular Widget */}
        <div className="w-full lg:w-auto grid grid-cols-2 sm:grid-cols-3 gap-3">
          <div className="bg-white/85 backdrop-blur-sm border border-[#E8DACB] rounded-2xl p-4 shadow-xs space-y-1 hover:border-[#D48B38]/50 transition-colors">
            <div className="flex items-center justify-between text-[#8C7A70]">
              <span className="text-[10px] font-extrabold uppercase tracking-wider">Học viên</span>
              <Activity size={13} className="text-[#D85A38]" />
            </div>
            <div className="text-xl font-black text-[#38150E]">{stats?.totalUsers || 0}</div>
            <div className="text-[10px] text-[#8C7A70] font-medium">Tài khoản lưu trữ</div>
          </div>

          <div className="bg-white/85 backdrop-blur-sm border border-[#E8DACB] rounded-2xl p-4 shadow-xs space-y-1 hover:border-[#D48B38]/50 transition-colors">
            <div className="flex items-center justify-between text-[#8C7A70]">
              <span className="text-[10px] font-extrabold uppercase tracking-wider">Môn hỗ trợ</span>
              <Layers size={13} className="text-[#D48B38]" />
            </div>
            <div className="text-xl font-black text-[#38150E]">{stats?.totalSubjects || 10}</div>
            <div className="text-[10px] text-[#8C7A70] font-medium">Chương trình học</div>
          </div>

          <div className="col-span-2 sm:col-span-1 bg-white/85 backdrop-blur-sm border border-[#E8DACB] rounded-2xl p-4 shadow-xs space-y-1 hover:border-[#D48B38]/50 transition-colors">
            <div className="flex items-center justify-between text-[#8C7A70]">
              <span className="text-[10px] font-extrabold uppercase tracking-wider">Lượt thi</span>
              <Sparkles size={13} className="text-[#E8B86D]" />
            </div>
            <div className="text-xl font-black text-[#38150E]">{stats?.totalAttempts || 0}</div>
            <div className="text-[10px] text-[#8C7A70] font-medium">Lượt nộp bài thi</div>
          </div>
        </div>
      </div>
    </div>
  );
}
