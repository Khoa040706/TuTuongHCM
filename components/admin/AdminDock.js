"use client";
import React from "react";
import { LayoutDashboard, Users, ShieldAlert, Trophy, ArrowLeft } from "lucide-react";

export default function AdminDock({
  activeTab,
  onSelectTab,
  userCount = 0,
  onBackToStudy
}) {
  const tabs = [
    {
      id: "overview",
      label: "Tổng quan",
      icon: LayoutDashboard,
      badge: null
    },
    {
      id: "users",
      label: "Học viên",
      icon: Users,
      badge: userCount > 0 ? userCount : null
    },
    {
      id: "questions",
      label: "Soi đề & Bẫy",
      icon: ShieldAlert,
      badge: "≤15c"
    },
    {
      id: "leaderboard",
      label: "Bảng xếp hạng",
      icon: Trophy,
      badge: "Top 3"
    }
  ];

  return (
    <div className="w-full flex items-center justify-between gap-3 bg-white/95 dark:bg-[#1C1A18]/95 backdrop-blur-2xl border border-[#E8DACB] dark:border-white/15 rounded-2xl p-2 shadow-xl shadow-[#38150E]/8">
      {/* Tab Navigation buttons */}
      <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-0.5">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => onSelectTab(tab.id)}
              className={`relative flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 ease-out cursor-pointer whitespace-nowrap border-none select-none ${
                isActive
                  ? "bg-[#38150E] text-[#FAF8F5] shadow-md shadow-[#38150E]/25 scale-100 ring-1 ring-[#D85A38]/30"
                  : "text-[#6E5D53] dark:text-stone-300 hover:text-[#38150E] dark:hover:text-white hover:bg-[#FAF5EE] dark:hover:bg-white/10"
              }`}
            >
              {/* Active LED Dot */}
              {isActive && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#D85A38] animate-pulse" />
              )}
              
              <Icon size={15} className={isActive ? "text-[#E8B86D]" : "text-[#8C7A70] dark:text-stone-400"} />
              <span>{tab.label}</span>

              {/* Badge if present */}
              {tab.badge && (
                <span
                  className={`text-[9px] px-1.5 py-0.5 rounded-full font-extrabold transition-all duration-300 ${
                    isActive
                      ? "bg-[#D85A38] text-white"
                      : "bg-[#F4EBE0] dark:bg-white/10 text-[#6E5D53] dark:text-stone-300 border border-[#E8DACB] dark:border-white/10"
                  }`}
                >
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Back to Study button */}
      <button
        onClick={onBackToStudy}
        className="flex items-center gap-1.5 px-3.5 sm:px-4 py-2.5 rounded-xl text-xs font-bold text-[#6E5D53] dark:text-stone-300 hover:text-[#38150E] dark:hover:text-white bg-transparent hover:bg-[#FAF5EE] dark:hover:bg-white/10 border border-[#E8DACB] dark:border-white/15 hover:border-[#D48B38]/60 transition-all duration-200 cursor-pointer shrink-0"
        title="Quay trở lại không gian học tập môn học"
      >
        <ArrowLeft size={14} className="text-[#D48B38]" />
        <span className="hidden sm:inline">Vào học tập</span>
      </button>
    </div>
  );
}
