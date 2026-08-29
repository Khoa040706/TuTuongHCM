"use client";
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import {
  Search,
  Plus,
  KeyRound,
  Lock,
  Unlock,
  Trash2,
  ChevronRight,
  UserCheck,
  UserX,
  Maximize2,
  Minimize2,
  ArrowRight,
  Users,
  ShieldAlert,
  Sparkles
} from "lucide-react";

export default function AdminUsersTab({
  users = [],
  allSubjects = {},
  onOpenAddUser,
  onSelectUser,
  onOpenChangePass,
  onToggleLockUser,
  onDeleteUser
}) {
  const [mounted, setMounted] = useState(false);
  const [viewMode, setViewMode] = useState("preview"); // "preview" | "focus"
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all"); // all | active | locked

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when entering Focus Mode & Listen for Escape key
  useEffect(() => {
    if (viewMode === "focus") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleKeyDown = (e) => {
      if (e.key === "Escape" && viewMode === "focus") {
        setViewMode("preview");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [viewMode]);

  // Filter users by search and status
  const filteredUsers = users.filter((u) => {
    const q = searchQuery.toLowerCase().trim();
    const matchSearch =
      u.username.toLowerCase().includes(q) || u.email.toLowerCase().includes(q);

    if (filterStatus === "active") return matchSearch && !u.locked;
    if (filterStatus === "locked") return matchSearch && u.locked;
    return matchSearch;
  });

  // Calculate user stats helper
  const getUserStats = (user) => {
    let totalAttempts = 0;
    let totalPercent = 0;

    Object.values(allSubjects).forEach((subj) => {
      const chaptersList = subj.chapters || [];
      chaptersList.forEach((ch) => {
        if (typeof window !== "undefined") {
          const stored = localStorage.getItem(
            `studymaster_quiz_rankings_${ch.id}`
          );
          if (stored) {
            try {
              const rankings = JSON.parse(stored);
              const userRecords = rankings.filter(
                (r) => r.name === user.username
              );
              totalAttempts += userRecords.length;
              userRecords.forEach((r) => {
                totalPercent +=
                  r.total > 0 ? (r.score / r.total) * 100 : 0;
              });
            } catch (e) {}
          }
        }
      });
    });

    const avgScore =
      totalAttempts > 0 ? Math.round(totalPercent / totalAttempts) : 0;

    return { totalAttempts, avgScore };
  };

  const previewUsers = filteredUsers.slice(0, 5);

  return (
    <>
      {/* ========================================================================= */}
      {/* 1. PREVIEW MODE (RENDERED INLINE IN SCROLL NARRATIVE)                     */}
      {/* ========================================================================= */}
      <div className="space-y-6 animate-in fade-in duration-300">
        {/* Preview Summary Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 bg-white dark:bg-[#18191B] border border-[#E8DACB] dark:border-white/10 rounded-3xl p-4 sm:p-5 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#FAF5EE] dark:bg-white/10 border border-[#E8DACB] dark:border-white/15 flex items-center justify-center text-[#D85A38]">
              <Users size={20} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-sm text-[#38150E] dark:text-white">
                  Danh Sách Xem Nhanh
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-[#FAF5EE] dark:bg-white/10 text-[#D85A38] border border-[#E8DACB] dark:border-white/15">
                  5 / {users.length} Học Viên
                </span>
              </div>
              <p className="text-xs text-[#8C7A70] dark:text-stone-400">
                Hiển thị các tài khoản hoạt động gần đây nhất trên hệ thống.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode("focus")}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-white/10 hover:bg-[#FAF5EE] dark:hover:bg-white/15 border border-[#E8DACB] dark:border-white/15 text-xs font-bold text-[#38150E] dark:text-white transition-all cursor-pointer shadow-2xs"
              title="Mở rộng toàn màn hình"
            >
              <Maximize2 size={14} className="text-[#D85A38]" />
              <span>Toàn màn hình</span>
            </button>

            <button
              onClick={onOpenAddUser}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#D85A38] hover:bg-[#C44C2C] text-white text-xs font-bold transition-all cursor-pointer shadow-xs shadow-[#D85A38]/30 active:scale-95 border-none"
            >
              <Plus size={15} />
              <span>Thêm mới</span>
            </button>
          </div>
        </div>

        {/* 5-Row Preview Table */}
        <div className="bg-white dark:bg-[#18191B] border border-[#E8DACB] dark:border-white/10 rounded-3xl shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-xs">
              <thead className="bg-[#FAF8F5] dark:bg-white/5 border-b border-[#F4EBE0] dark:border-white/10 text-[#8C7A70] dark:text-stone-400 font-extrabold uppercase tracking-wider select-none">
                <tr>
                  <th className="px-6 py-4">Học viên</th>
                  <th className="px-6 py-4">Email</th>
                  <th className="px-6 py-4 text-center">Số bài ôn</th>
                  <th className="px-6 py-4 text-center">Điểm TB</th>
                  <th className="px-6 py-4 text-center">Trạng thái</th>
                  <th className="px-6 py-4 text-right">Chi tiết</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F4EBE0] dark:divide-white/10 text-[#38150E] dark:text-white">
                {previewUsers.map((user) => {
                  const { totalAttempts, avgScore } = getUserStats(user);

                  return (
                    <tr
                      key={user.username}
                      onClick={() => onSelectUser(user)}
                      className="hover:bg-[#FAF8F5] dark:hover:bg-white/5 transition-colors cursor-pointer group select-none"
                    >
                      <td className="px-6 py-4 font-bold flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-[#FAF5EE] dark:bg-white/10 border border-[#E8DACB] dark:border-white/15 flex items-center justify-center text-xs font-black group-hover:border-[#D85A38] group-hover:scale-105 transition-all">
                          👨‍🎓
                        </div>
                        <div>
                          <div className="group-hover:text-[#D85A38] transition-colors font-extrabold text-xs">
                            {user.username}
                          </div>
                          <span className="text-[10px] text-[#A6988F] font-normal">
                            ID: {user.username.slice(0, 10)}
                          </span>
                        </div>
                      </td>

                      <td className="px-6 py-4 font-medium text-[#6E5D53] dark:text-stone-300">
                        {user.email}
                      </td>

                      <td className="px-6 py-4 text-center font-extrabold">
                        {totalAttempts}
                      </td>

                      <td className="px-6 py-4 text-center font-extrabold">
                        <span
                          className={
                            avgScore >= 80
                              ? "text-[#15803D] dark:text-[#86EFAC]"
                              : avgScore >= 50
                              ? "text-[#D48B38] dark:text-[#FBBF24]"
                              : "text-[#8C7A70] dark:text-stone-400"
                          }
                        >
                          {totalAttempts > 0 ? `${avgScore}%` : "—"}
                        </span>
                      </td>

                      <td className="px-6 py-4 text-center">
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold border ${
                            user.locked
                              ? "bg-[#FEF2F2] text-[#B91C1C] border-[#FECACA]"
                              : "bg-[#F0FDF4] dark:bg-[#15803D]/15 text-[#15803D] dark:text-[#86EFAC] border-[#BBF7D0] dark:border-[#15803D]/30"
                          }`}
                        >
                          {user.locked ? (
                            <>
                              <UserX size={10} /> Đã khóa
                            </>
                          ) : (
                            <>
                              <UserCheck size={10} /> Hoạt động
                            </>
                          )}
                        </span>
                      </td>

                      <td className="px-6 py-4 text-right">
                        <span className="inline-flex items-center gap-1 text-[#D85A38] font-bold text-xs group-hover:translate-x-0.5 transition-transform">
                          <span>Radar</span>
                          <ChevronRight size={13} />
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Expand CTA Button */}
        <div className="pt-2 flex justify-center">
          <button
            onClick={() => setViewMode("focus")}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-xs sm:text-sm font-extrabold text-white bg-[#D85A38] hover:bg-[#C44C2C] active:scale-95 shadow-lg shadow-[#D85A38]/30 transition-all duration-200 cursor-pointer border-none group"
          >
            <span>Quản Lý Toàn Bộ {users.length} Học Viên & Phân Quyền</span>
            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <ArrowRight size={13} />
            </div>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. FOCUS MODE: FULLSCREEN PORTAL MODAL DIRECTLY ATTACHED TO BODY         */}
      {/* ========================================================================= */}
      {viewMode === "focus" && mounted && createPortal(
        <div className="fixed inset-0 z-50 bg-[#FAF8F5] dark:bg-[#121214] overflow-y-auto p-4 sm:p-6 lg:p-10 animate-in fade-in zoom-in-95 duration-200 select-none">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Sticky Focus Header Bar */}
            <div className="sticky top-0 z-20 bg-white/95 dark:bg-[#18191B]/95 backdrop-blur-2xl border border-[#E8DACB] dark:border-white/10 rounded-3xl p-5 shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#D85A38] to-[#D48B38] flex items-center justify-center text-white font-black shadow-sm">
                  <Users size={24} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="font-black text-xl sm:text-2xl text-[#38150E] dark:text-white tracking-tight">
                      Quản Trị Danh Sách & Phân Quyền Học Viên
                    </h2>
                    <span className="text-[10px] px-2.5 py-0.5 rounded-full font-extrabold bg-[#FAF5EE] dark:bg-white/10 text-[#D85A38] border border-[#E8DACB] dark:border-white/15">
                      Focus Mode
                    </span>
                  </div>
                  <p className="text-xs text-[#8C7A70] dark:text-stone-400 font-medium mt-0.5">
                    Chế độ quản trị chuyên sâu — Tìm kiếm, đổi mật khẩu, phân quyền môn học & theo dõi Radar.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 self-end sm:self-center">
                <button
                  onClick={onOpenAddUser}
                  className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-2xl bg-[#D85A38] hover:bg-[#C44C2C] text-white text-xs font-bold transition-all cursor-pointer shadow-md shadow-[#D85A38]/30 active:scale-95 border-none"
                >
                  <Plus size={15} />
                  <span>Thêm học viên</span>
                </button>

                <button
                  onClick={() => setViewMode("preview")}
                  className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-2xl bg-white dark:bg-white/10 hover:bg-[#FAF5EE] dark:hover:bg-white/20 border border-[#E8DACB] dark:border-white/15 text-xs font-bold text-[#38150E] dark:text-white transition-all cursor-pointer shadow-xs"
                  title="Thu gọn về dòng thời gian (Phím Esc)"
                >
                  <Minimize2 size={15} className="text-[#D85A38]" />
                  <span>Thu gọn (Esc)</span>
                </button>
              </div>
            </div>

            {/* Search & Filter Bar */}
            <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 bg-white dark:bg-[#18191B] border border-[#E8DACB] dark:border-white/10 rounded-3xl p-4 sm:p-5 shadow-xs">
              {/* Search input */}
              <div className="relative flex-grow max-w-md">
                <Search size={16} className="absolute left-3.5 top-3 text-[#8C7A70]" />
                <input
                  type="text"
                  placeholder="Tìm kiếm theo tên đăng nhập hoặc email..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-[#E8DACB] dark:border-white/15 bg-[#FAF8F5] dark:bg-white/5 text-[#38150E] dark:text-white placeholder:text-[#A6988F] focus:outline-none focus:border-[#D85A38] focus:bg-white dark:focus:bg-white/10 transition-colors"
                />
              </div>

              {/* Filter Pills */}
              <div className="flex items-center gap-1 bg-[#FAF5EE] dark:bg-white/5 border border-[#E8DACB] dark:border-white/10 p-1 rounded-xl">
                {[
                  { id: "all", label: `Tất cả (${users.length})` },
                  { id: "active", label: `Hoạt động (${users.filter((u) => !u.locked).length})` },
                  { id: "locked", label: `Bị khóa (${users.filter((u) => u.locked).length})` }
                ].map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setFilterStatus(f.id)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer border-none ${
                      filterStatus === f.id
                        ? "bg-[#38150E] dark:bg-white text-[#FAF8F5] dark:text-[#18191B]"
                        : "text-[#6E5D53] dark:text-stone-400 hover:text-[#38150E] dark:hover:text-white"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Full Users Data Table Card */}
            <div className="bg-white dark:bg-[#18191B] border border-[#E8DACB] dark:border-white/10 rounded-3xl shadow-xs overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left text-xs">
                  <thead className="bg-[#FAF8F5] dark:bg-white/5 border-b border-[#F4EBE0] dark:border-white/10 text-[#8C7A70] dark:text-stone-400 font-extrabold uppercase tracking-wider select-none">
                    <tr>
                      <th className="px-6 py-4">Học viên</th>
                      <th className="px-6 py-4">Email</th>
                      <th className="px-6 py-4 text-center">Số bài ôn</th>
                      <th className="px-6 py-4 text-center">Điểm TB</th>
                      <th className="px-6 py-4 text-center">Trạng thái</th>
                      <th className="px-6 py-4 text-right">Thao tác</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F4EBE0] dark:divide-white/10 text-[#38150E] dark:text-white">
                    {filteredUsers.length === 0 ? (
                      <tr>
                        <td colSpan="6" className="px-6 py-12 text-center text-[#8C7A70] dark:text-stone-400 italic">
                          Không tìm thấy học viên nào phù hợp với bộ lọc hiện tại.
                        </td>
                      </tr>
                    ) : (
                      filteredUsers.map((user) => {
                        const { totalAttempts, avgScore } = getUserStats(user);

                        return (
                          <tr
                            key={user.username}
                            onClick={() => onSelectUser(user)}
                            className="hover:bg-[#FAF8F5] dark:hover:bg-white/5 transition-colors cursor-pointer group select-none"
                          >
                            {/* Username + Avatar Chip */}
                            <td className="px-6 py-4 font-bold flex items-center gap-3">
                              <div className="w-9 h-9 rounded-xl bg-[#FAF5EE] dark:bg-white/10 border border-[#E8DACB] dark:border-white/15 flex items-center justify-center text-sm font-black group-hover:border-[#D85A38] group-hover:scale-105 transition-all">
                                👨‍🎓
                              </div>
                              <div>
                                <div className="group-hover:text-[#D85A38] transition-colors font-extrabold text-sm">
                                  {user.username}
                                </div>
                                <span className="text-[10px] text-[#A6988F] font-normal">
                                  Tạo ngày: {new Date(user.createdAt || Date.now()).toLocaleDateString("vi-VN")}
                                </span>
                              </div>
                            </td>

                            {/* Email */}
                            <td className="px-6 py-4 font-medium text-[#6E5D53] dark:text-stone-300">
                              {user.email}
                            </td>

                            {/* Total Attempts */}
                            <td className="px-6 py-4 text-center font-extrabold text-sm">
                              {totalAttempts}
                            </td>

                            {/* Average Score */}
                            <td className="px-6 py-4 text-center font-extrabold text-sm">
                              <span
                                className={
                                  avgScore >= 80
                                    ? "text-[#15803D] dark:text-[#86EFAC]"
                                    : avgScore >= 50
                                    ? "text-[#D48B38] dark:text-[#FBBF24]"
                                    : "text-[#8C7A70] dark:text-stone-400"
                                }
                              >
                                {totalAttempts > 0 ? `${avgScore}%` : "—"}
                              </span>
                            </td>

                            {/* Status */}
                            <td className="px-6 py-4 text-center">
                              <span
                                className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-extrabold border ${
                                  user.locked
                                    ? "bg-[#FEF2F2] text-[#B91C1C] border-[#FECACA]"
                                    : "bg-[#F0FDF4] dark:bg-[#15803D]/15 text-[#15803D] dark:text-[#86EFAC] border-[#BBF7D0] dark:border-[#15803D]/30"
                                }`}
                              >
                                {user.locked ? (
                                  <>
                                    <UserX size={12} /> Đã khóa
                                  </>
                                ) : (
                                  <>
                                    <UserCheck size={12} /> Hoạt động
                                  </>
                                )}
                              </span>
                            </td>

                            {/* Actions */}
                            <td
                              className="px-6 py-4 text-right"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <div className="flex items-center justify-end gap-2">
                                <button
                                  onClick={() => onOpenChangePass(user)}
                                  className="p-2.5 rounded-xl border border-[#E8DACB] dark:border-white/15 hover:border-[#D48B38] bg-white dark:bg-white/10 hover:bg-[#FAF5EE] text-[#6E5D53] dark:text-stone-300 hover:text-[#38150E] transition-colors cursor-pointer"
                                  title="Đặt lại mật khẩu"
                                >
                                  <KeyRound size={14} />
                                </button>

                                <button
                                  onClick={() => onToggleLockUser(user.username)}
                                  className={`p-2.5 rounded-xl border transition-colors cursor-pointer ${
                                    user.locked
                                      ? "border-[#FECACA] bg-[#FEF2F2] hover:bg-red-100 text-[#B91C1C]"
                                      : "border-[#E8DACB] dark:border-white/15 hover:border-[#D48B38] bg-white dark:bg-white/10 hover:bg-[#FAF5EE] text-[#6E5D53] dark:text-stone-300 hover:text-[#38150E]"
                                  }`}
                                  title={user.locked ? "Mở khóa tài khoản" : "Khóa tài khoản"}
                                >
                                  {user.locked ? <Unlock size={14} /> : <Lock size={14} />}
                                </button>

                                <button
                                  onClick={() => onDeleteUser(user.username)}
                                  className="p-2.5 rounded-xl border border-[#E8DACB] dark:border-white/15 hover:border-[#FECACA] bg-white dark:bg-white/10 hover:bg-[#FEF2F2] text-[#6E5D53] dark:text-stone-300 hover:text-[#B91C1C] transition-colors cursor-pointer"
                                  title="Xóa tài khoản vĩnh viễn"
                                >
                                  <Trash2 size={14} />
                                </button>

                                <button
                                  onClick={() => onSelectUser(user)}
                                  className="px-3 py-2 rounded-xl border border-[#E8DACB] dark:border-white/15 bg-[#FAF5EE] dark:bg-white/10 hover:bg-[#F4EBE0] text-[#38150E] dark:text-white font-bold text-xs transition-colors cursor-pointer ml-1 flex items-center gap-1"
                                  title="Xem Radar năng lực"
                                >
                                  <span>Radar</span>
                                  <ChevronRight size={14} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
