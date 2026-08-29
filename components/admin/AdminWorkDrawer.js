"use client";
import React from "react";
import { X, Layers, Users, ShieldAlert, Trophy } from "lucide-react";
import AdminOverviewTab from "./AdminOverviewTab";
import AdminUsersTab from "./AdminUsersTab";
import AdminQuestionsTab from "./AdminQuestionsTab";
import AdminLeaderboardTab from "./AdminLeaderboardTab";

export default function AdminWorkDrawer({
  isOpen,
  onClose,
  activeTab,
  stats,
  dailyData,
  subjectDist,
  logs,
  onClearLogs,
  onExportExcel,
  users,
  allSubjects,
  onOpenAddUser,
  onSelectUser,
  onOpenChangePass,
  onToggleLockUser,
  onDeleteUser,
  onClearRankings
}) {
  if (!isOpen) return null;

  const titles = {
    overview: {
      title: "Báo Cáo Tổng Quan & Nhật Ký Hoạt Động",
      desc: "Thống kê tiến độ ôn tập, tần suất thi thử và luồng sự kiện thời gian thực",
      icon: Layers
    },
    users: {
      title: "Quản Trị Danh Sách & Phân Quyền Học Viên",
      desc: "Quản lý tài khoản, đặt lại mật khẩu và cấu hình quyền học theo từng môn",
      icon: Users
    },
    questions: {
      title: "Kiểm Định Ngân Hàng Câu Hỏi & Bẫy Tư Duy",
      desc: "Bộ quét quy tắc chống đoán bừa ≤ 15 ký tự và phân tích 50 câu bẫy vận dụng cao",
      icon: ShieldAlert
    },
    leaderboard: {
      title: "Bảng Vàng Khảo Thí & Bục Vinh Danh Top 3",
      desc: "Bảng điểm xếp hạng thành tích học tập theo từng chương và môn học",
      icon: Trophy
    }
  };

  const currentInfo = titles[activeTab] || titles.overview;
  const TabIcon = currentInfo.icon;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-50 bg-[#38150E]/40 backdrop-blur-xs transition-opacity duration-300 animate-in fade-in"
      />

      {/* Slide-over Drawer */}
      <aside className="fixed inset-y-0 right-0 z-50 w-full max-w-4xl bg-[#FAF8F5] border-l border-[#E8DACB] shadow-2xl flex flex-col justify-between transform transition-transform duration-300 ease-out animate-in slide-in-from-right text-[#38150E]">
        {/* Drawer Header */}
        <div className="p-5 sm:p-6 border-b border-[#E8DACB] bg-white flex justify-between items-center select-none shrink-0 shadow-2xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#FAF5EE] border border-[#E8DACB] flex items-center justify-center text-[#D85A38] shadow-xs">
              <TabIcon size={20} />
            </div>
            <div>
              <h3 className="font-black text-[#38150E] text-base sm:text-lg leading-tight">
                {currentInfo.title}
              </h3>
              <p className="text-xs text-[#8C7A70] font-medium mt-0.5">
                {currentInfo.desc}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl border border-[#E8DACB] hover:bg-[#FAF5EE] text-[#6E5D53] hover:text-[#38150E] transition-all cursor-pointer bg-white"
            title="Đóng bảng làm việc"
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable Work Body */}
        <div className="flex-grow p-5 sm:p-8 overflow-y-auto space-y-6">
          {activeTab === "overview" && (
            <AdminOverviewTab
              stats={stats}
              dailyData={dailyData}
              subjectDist={subjectDist}
              logs={logs}
              onClearLogs={onClearLogs}
              onExportExcel={onExportExcel}
            />
          )}

          {activeTab === "users" && (
            <AdminUsersTab
              users={users}
              allSubjects={allSubjects}
              onOpenAddUser={onOpenAddUser}
              onSelectUser={onSelectUser}
              onOpenChangePass={onOpenChangePass}
              onToggleLockUser={onToggleLockUser}
              onDeleteUser={onDeleteUser}
            />
          )}

          {activeTab === "questions" && (
            <AdminQuestionsTab allSubjects={allSubjects} />
          )}

          {activeTab === "leaderboard" && (
            <AdminLeaderboardTab
              allSubjects={allSubjects}
              onClearRankings={onClearRankings}
            />
          )}
        </div>
      </aside>
    </>
  );
}
