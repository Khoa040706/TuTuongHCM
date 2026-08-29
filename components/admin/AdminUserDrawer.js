"use client";
import React from "react";
import { X, Lock, Unlock, Trash2, Award, History, ToggleLeft, ToggleRight, Sparkles } from "lucide-react";

export default function AdminUserDrawer({
  isOpen,
  onClose,
  selectedUser,
  allSubjects = {},
  userHistory = [],
  radarPoints = "",
  unlockedList = [],
  onToggleLockUser,
  onDeleteUser,
  onToggleSubjectLock,
  onUnlockAllSubjects,
  onLockAllSubjects
}) {
  if (!isOpen || !selectedUser) return null;

  const username = selectedUser.username;
  const radarAxes = [
    "Tư Tưởng",
    "LS Đảng",
    "OOP",
    "PT Thiết Kế",
    "DSA",
    "CS Dữ Liệu",
    "KN Cơ Bản",
    "Thuật Toán"
  ];
  const radarCenter = 135;
  const radarRadius = 80;
  const angleStep = (2 * Math.PI) / radarAxes.length;

  return (
    <>
      {/* Backdrop Overlay */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-50 bg-[#38150E]/40 backdrop-blur-xs transition-opacity duration-300 animate-in fade-in"
      />

      {/* Slide-over Drawer Panel */}
      <aside className="fixed inset-y-0 right-0 z-50 w-full sm:w-[480px] bg-white border-l border-[#E8DACB] shadow-2xl flex flex-col justify-between transform transition-transform duration-300 ease-out animate-in slide-in-from-right">
        {/* Header bar */}
        <div className="p-6 border-b border-[#F4EBE0] flex justify-between items-center bg-[#FAF8F5]">
          <div className="flex items-center gap-3 select-none">
            <div className="w-11 h-11 rounded-2xl bg-[#FAF5EE] border border-[#E8DACB] flex items-center justify-center text-base font-black text-[#38150E] shadow-xs">
              👨‍🎓
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-[#38150E] text-base leading-none">
                  {username}
                </h3>
                <span
                  className={`text-[9px] px-2 py-0.5 rounded-full font-extrabold border ${
                    selectedUser.locked
                      ? "bg-[#FEF2F2] text-[#B91C1C] border-[#FECACA]"
                      : "bg-[#F0FDF4] text-[#15803D] border-[#BBF7D0]"
                  }`}
                >
                  {selectedUser.locked ? "Đã khóa" : "Hoạt động"}
                </span>
              </div>
              <span className="text-[11px] text-[#8C7A70] font-medium block mt-1">
                {selectedUser.email}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl border border-[#E8DACB] hover:bg-[#FAF5EE] text-[#6E5D53] hover:text-[#38150E] transition-all cursor-pointer bg-white"
            title="Đóng bảng chi tiết"
          >
            <X size={16} />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-grow p-6 overflow-y-auto space-y-6 select-none">
          {/* Section 1: 8-Axis Competency Radar Chart */}
          <div className="space-y-3 bg-[#FAF8F5] border border-[#F4EBE0] rounded-3xl p-5">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-xs font-extrabold text-[#38150E] uppercase tracking-wider flex items-center gap-1.5">
                  <Award size={14} className="text-[#D85A38]" />
                  Biểu Đồ Năng Lực 8 Môn Học
                </h4>
                <p className="text-[10px] text-[#8C7A70] font-medium mt-0.5">
                  Điểm số cao nhất (%) từng môn học của sinh viên.
                </p>
              </div>
            </div>

            <div className="flex justify-center bg-white border border-[#E8DACB] rounded-2xl py-3 relative">
              <svg width="270" height="270" viewBox="0 0 270 270">
                {/* Concentric Web Grid Polygons */}
                {[0.25, 0.5, 0.75, 1.0].map((scale, gridIdx) => {
                  const currR = radarRadius * scale;
                  const pathPoints = radarAxes
                    .map((_, i) => {
                      const angle = i * angleStep;
                      const x = radarCenter + currR * Math.cos(angle - Math.PI / 2);
                      const y = radarCenter + currR * Math.sin(angle - Math.PI / 2);
                      return `${x},${y}`;
                    })
                    .join(" ");

                  return (
                    <polygon
                      key={gridIdx}
                      points={pathPoints}
                      fill="transparent"
                      stroke="#EADBCE"
                      strokeWidth="1"
                    />
                  );
                })}

                {/* Spokes & Axis Text Labels */}
                {radarAxes.map((axis, i) => {
                  const angle = i * angleStep;
                  const x = radarCenter + radarRadius * Math.cos(angle - Math.PI / 2);
                  const y = radarCenter + radarRadius * Math.sin(angle - Math.PI / 2);

                  const labelX =
                    radarCenter + (radarRadius + 18) * Math.cos(angle - Math.PI / 2);
                  const labelY =
                    radarCenter + (radarRadius + 12) * Math.sin(angle - Math.PI / 2);

                  return (
                    <g key={i}>
                      <line
                        x1={radarCenter}
                        y1={radarCenter}
                        x2={x}
                        y2={y}
                        stroke="#EADBCE"
                        strokeWidth="1.2"
                      />
                      <text
                        x={labelX}
                        y={labelY}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="text-[7.5px] font-bold fill-[#8C7A70] tracking-tight"
                      >
                        {axis}
                      </text>
                    </g>
                  );
                })}

                {/* Radar Fill Area */}
                {radarPoints && (
                  <polygon
                    points={radarPoints}
                    fill="rgba(216, 90, 56, 0.2)"
                    stroke="#D85A38"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                )}
              </svg>
            </div>
          </div>

          {/* Section 2: Subject Lock/Unlock Tactile Switches */}
          <div className="space-y-3 bg-[#FAF8F5] border border-[#F4EBE0] rounded-3xl p-5">
            <div>
              <h4 className="text-xs font-extrabold text-[#38150E] uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles size={14} className="text-[#D48B38]" />
                Quyền Truy Cập Môn Học
              </h4>
              <p className="text-[10px] text-[#8C7A70] font-medium mt-0.5">
                Bật/tắt quyền xem bài đọc & làm bài tập của sinh viên.
              </p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => onUnlockAllSubjects(username)}
                className="flex-1 py-1.5 rounded-xl border border-[#BBF7D0] bg-[#F0FDF4] text-[#15803D] hover:bg-[#DCFCE7] font-extrabold text-[10px] transition-colors cursor-pointer text-center"
              >
                Mở khóa tất cả
              </button>
              <button
                onClick={() => onLockAllSubjects(username)}
                className="flex-1 py-1.5 rounded-xl border border-[#E8DACB] bg-white text-[#6E5D53] hover:bg-[#FAF5EE] font-bold text-[10px] transition-colors cursor-pointer text-center"
              >
                Khóa tất cả tự chọn
              </button>
            </div>

            <div className="divide-y divide-[#F4EBE0] border border-[#E8DACB] rounded-2xl overflow-hidden bg-white p-2 space-y-1">
              {Object.values(allSubjects).map((subj) => {
                const isDefault = subj.isActive !== false;
                const isUnlocked = isDefault || unlockedList.includes(subj.id);

                return (
                  <div
                    key={subj.id}
                    className="flex justify-between items-center py-2 px-3 rounded-xl hover:bg-[#FAF8F5] transition-all text-xs"
                  >
                    <span className="font-semibold text-[#38150E] flex items-center gap-2">
                      <span className="text-sm">{subj.icon || "📖"}</span>
                      <span className="truncate max-w-[190px]">{subj.title}</span>
                      {isDefault && (
                        <span className="text-[8px] bg-[#FAF5EE] text-[#8C7A70] font-black uppercase px-1.5 py-0.2 rounded border border-[#E8DACB]">
                          Mặc định
                        </span>
                      )}
                    </span>

                    <label className="relative inline-flex items-center cursor-pointer select-none">
                      <input
                        type="checkbox"
                        disabled={isDefault}
                        checked={isUnlocked}
                        onChange={() => onToggleSubjectLock(username, subj.id)}
                        className="sr-only peer"
                      />
                      <div
                        className={`w-8 h-4 rounded-full transition-colors relative ${
                          isDefault
                            ? "bg-[#D85A38]/50 opacity-60 cursor-not-allowed"
                            : isUnlocked
                            ? "bg-[#D85A38]"
                            : "bg-[#E8DACB]"
                        } after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all ${
                          isUnlocked ? "after:translate-x-4" : ""
                        }`}
                      />
                    </label>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 3: Quiz History Table */}
          <div className="space-y-3 bg-[#FAF8F5] border border-[#F4EBE0] rounded-3xl p-5">
            <div>
              <h4 className="text-xs font-extrabold text-[#38150E] uppercase tracking-wider flex items-center gap-1.5">
                <History size={14} className="text-[#38150E]" />
                Lịch Sử Luyện Thi Gần Nhất
              </h4>
              <p className="text-[10px] text-[#8C7A70] font-medium mt-0.5">
                Danh sách kết quả làm bài trắc nghiệm đã nộp.
              </p>
            </div>

            <div className="border border-[#E8DACB] rounded-2xl overflow-hidden bg-white">
              <table className="w-full text-left text-[10px] border-collapse">
                <thead className="bg-[#FAF8F5] border-b border-[#F4EBE0] text-[#8C7A70] font-bold">
                  <tr>
                    <th className="px-3 py-2">Môn / Chương</th>
                    <th className="px-3 py-2 text-center">Điểm số</th>
                    <th className="px-3 py-2 text-center">Thời gian</th>
                    <th className="px-3 py-2 text-right">Ngày</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F4EBE0] text-[#38150E]">
                  {userHistory.length === 0 ? (
                    <tr>
                      <td colSpan="4" className="px-4 py-6 text-center text-[#8C7A70] italic">
                        Chưa có lịch sử làm bài nào.
                      </td>
                    </tr>
                  ) : (
                    userHistory.slice(0, 10).map((h, index) => (
                      <tr key={index} className="hover:bg-[#FAF8F5] transition-colors">
                        <td className="px-3 py-2 font-semibold text-[#38150E] truncate max-w-[140px]">
                          {h.subject}
                        </td>
                        <td className="px-3 py-2 text-center font-black text-[#D85A38]">
                          {h.score}/{h.total}
                        </td>
                        <td className="px-3 py-2 text-center text-[#8C7A70]">{h.time}</td>
                        <td className="px-3 py-2 text-right text-[#8C7A70] font-medium">
                          {h.date}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-[#F4EBE0] bg-[#FAF8F5] flex gap-3">
          <button
            onClick={() => onToggleLockUser(username)}
            className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer border-none flex items-center justify-center gap-1.5 ${
              selectedUser.locked
                ? "bg-[#15803D] hover:bg-[#166534] text-white"
                : "bg-[#38150E] hover:bg-[#2D120B] text-[#FAF8F5]"
            }`}
          >
            {selectedUser.locked ? <Unlock size={14} /> : <Lock size={14} />}
            <span>{selectedUser.locked ? "Mở khóa học viên" : "Tạm khóa học viên"}</span>
          </button>

          <button
            onClick={() => onDeleteUser(username)}
            className="flex-1 py-2.5 rounded-xl bg-[#B91C1C] hover:bg-[#991B1B] text-white text-xs font-bold transition-all shadow-xs cursor-pointer border-none flex items-center justify-center gap-1.5"
          >
            <Trash2 size={14} />
            <span>Xóa tài khoản</span>
          </button>
        </div>
      </aside>
    </>
  );
}
