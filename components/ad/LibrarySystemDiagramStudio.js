"use client";
import React, { useState } from "react";
import { 
  BookMarked, 
  Library, 
  Users, 
  Bell, 
  CheckCircle2, 
  Search, 
  Bookmark, 
  RotateCcw, 
  FileCheck2, 
  ShieldCheck, 
  Compass, 
  Info
} from "lucide-react";

const ACTORS = [
  {
    id: "act-member",
    name: "Member (Thành viên)",
    role: "Primary Human Actor",
    desc: "Độc giả thư viện cần tìm sách trong catalog và đặt trước (reserve) các cuốn sách mong muốn.",
    linkedUseCases: ["uc-search", "uc-reserve"]
  },
  {
    id: "act-librarian",
    name: "Librarian (Thủ thư)",
    role: "Admin Human Actor",
    desc: "Nhân viên quản lý phụ trách duyệt danh sách giữ sách (holds) và xử lý thủ tục trả sách (returns).",
    linkedUseCases: ["uc-hold", "uc-return"]
  },
  {
    id: "act-notify",
    name: "Notification Service (Dịch vụ thông báo)",
    role: "External System / Automated Daemon",
    desc: "Hệ thống tự động kích hoạt gửi thông báo email/SMS cho thành viên ngay khi sách đặt chỗ có sẵn.",
    linkedUseCases: ["uc-notify"]
  }
];

const USE_CASES = [
  { id: "uc-search", name: "Search Catalog", actorId: "act-member", goal: "Tìm kiếm đầu sách theo tên, tác giả hoặc chuyên ngành." },
  { id: "uc-reserve", name: "Reserve Book", actorId: "act-member", goal: "Đặt trước sách khi sách đang được mượn hoặc giữ chỗ trước." },
  { id: "uc-hold", name: "Manage Hold", actorId: "act-librarian", goal: "Quản lý và giải phóng các yêu cầu giữ sách hết hạn." },
  { id: "uc-return", name: "Process Return", actorId: "act-librarian", goal: "Tiếp nhận sách độc giả trả, kiểm tra hạn và tính phí phạt nếu có." },
  { id: "uc-notify", name: "Notify Member", actorId: "act-notify", goal: "Tự động gửi thông báo khi sách đặt trước đã sẵn sàng trên kệ giữ." }
];

export default function LibrarySystemDiagramStudio() {
  const [highlightedActor, setHighlightedActor] = useState(null);
  const [selectedUc, setSelectedUc] = useState(USE_CASES[1]); // Reserve Book
  const [showChecklist, setShowChecklist] = useState(false);

  return (
    <div className="my-8 rounded-2xl border border-blue-200/80 bg-gradient-to-br from-[#faf8f4] via-white to-blue-50/30 p-6 md:p-8 shadow-xl shadow-blue-900/5 text-[#2c2a26]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-blue-200/60 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-950 border border-blue-300/60 mb-2">
            <Library className="w-3.5 h-3.5 text-blue-700" />
            Mục 5.1 – 5.4 — Step 1: Draw Use-Case Diagram
          </div>
          <h3 className="text-xl md:text-2xl font-black tracking-tight text-stone-900">
            Thực hành Bài tập: Library Book Reservation System
          </h3>
          <p className="text-sm text-stone-600 mt-1 max-w-2xl">
            Phân tích kịch bản nghiệp vụ thư viện công cộng, bóc tách 3 Actors, 5 Use Cases và xây dựng biểu đồ chuẩn UML trong ranh giới <strong>System Boundary</strong>.
          </p>
        </div>

        {/* Action Buttons */}
        <button
          onClick={() => setShowChecklist(!showChecklist)}
          className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-white border border-blue-300 text-blue-900 hover:bg-blue-50 shadow-xs flex items-center gap-1.5 transition-all self-start md:self-auto"
        >
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          {showChecklist ? "Ẩn kiểm tra quy tắc vàng" : "Kiểm tra 2 quy tắc vàng UML"}
        </button>
      </div>

      {/* Two Golden Verification Rules Checklist Modal/Box */}
      {showChecklist && (
        <div className="mt-4 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 space-y-2">
          <span className="font-extrabold text-sm text-emerald-900 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            2 Câu hỏi vàng tự kiểm tra khi vẽ Use-Case Diagram (Slide 26):
          </span>
          <div className="space-y-1.5 pt-1">
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold">✓</span>
              <strong>Quy tắc 1:</strong> Mọi Use Case đã có ít nhất 1 Actor liên kết tham gia chưa? ➔ <em>Đã thỏa mãn 5/5 use cases.</em>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold">✓</span>
              <strong>Quy tắc 2:</strong> Mọi Actor đã kết nối tới ít nhất 1 Use Case chưa? ➔ <em>Đã thỏa mãn 3/3 actors.</em>
            </div>
          </div>
        </div>
      )}

      {/* Interactive Diagram Workspace */}
      <div className="mt-6 p-6 sm:p-8 rounded-2xl bg-white border border-stone-200 shadow-sm overflow-x-auto">
        <div className="min-w-[640px] grid grid-cols-12 gap-4 items-center">
          {/* Left Column: Member */}
          <div className="col-span-3 space-y-3">
            <button
              onMouseEnter={() => setHighlightedActor("act-member")}
              onMouseLeave={() => setHighlightedActor(null)}
              onClick={() => setHighlightedActor(highlightedActor === "act-member" ? null : "act-member")}
              className={`w-full p-4 rounded-xl border text-center transition-all ${
                highlightedActor === "act-member"
                  ? "bg-blue-100 border-blue-500 shadow-md ring-2 ring-blue-500/20"
                  : "bg-stone-50 hover:bg-stone-100 border-stone-200"
              }`}
            >
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white mx-auto flex items-center justify-center font-bold mb-2 shadow-xs">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="font-extrabold text-xs text-stone-900">Member</h4>
              <span className="text-[10px] font-semibold text-blue-800 uppercase block">Primary Actor</span>
              <p className="text-[10px] text-stone-500 mt-1">Độc giả thư viện</p>
            </button>
          </div>

          {/* Middle Column: System Boundary (Library Book Reservation System) */}
          <div className="col-span-6 rounded-2xl border-2 border-dashed border-blue-400 bg-blue-50/20 p-5 space-y-2.5 relative shadow-inner">
            <div className="absolute top-2 left-3 bg-white px-2.5 py-0.5 rounded-full border border-blue-300 text-[10px] font-black uppercase tracking-wider text-blue-900">
              📦 System Boundary: Library Book Reservation System
            </div>

            <div className="pt-5 space-y-2">
              {USE_CASES.map(uc => {
                const isLinked = !highlightedActor || highlightedActor === uc.actorId;
                const isSelected = selectedUc.id === uc.id;

                return (
                  <button
                    key={uc.id}
                    onClick={() => setSelectedUc(uc)}
                    className={`w-full py-2 px-3 rounded-full border text-center transition-all ${
                      isSelected
                        ? "bg-blue-600 text-white border-blue-600 shadow-sm font-bold scale-[1.02]"
                        : isLinked
                        ? "bg-white text-stone-900 border-stone-300 hover:border-blue-400 font-semibold shadow-xs"
                        : "bg-white/40 text-stone-400 border-stone-200 opacity-40"
                    }`}
                  >
                    <span className="text-xs">{uc.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Librarian & Notification Service */}
          <div className="col-span-3 space-y-3">
            {/* Librarian */}
            <button
              onMouseEnter={() => setHighlightedActor("act-librarian")}
              onMouseLeave={() => setHighlightedActor(null)}
              onClick={() => setHighlightedActor(highlightedActor === "act-librarian" ? null : "act-librarian")}
              className={`w-full p-3.5 rounded-xl border text-center transition-all ${
                highlightedActor === "act-librarian"
                  ? "bg-amber-100 border-amber-500 shadow-md ring-2 ring-amber-500/20"
                  : "bg-stone-50 hover:bg-stone-100 border-stone-200"
              }`}
            >
              <div className="w-10 h-10 rounded-full bg-amber-600 text-white mx-auto flex items-center justify-center font-bold mb-1.5 shadow-xs">
                <Library className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-xs text-stone-900">Librarian</h4>
              <span className="text-[10px] font-semibold text-amber-800 uppercase block">Admin Actor</span>
              <p className="text-[10px] text-stone-500 mt-0.5">Thủ thư thư viện</p>
            </button>

            {/* Notification Service */}
            <button
              onMouseEnter={() => setHighlightedActor("act-notify")}
              onMouseLeave={() => setHighlightedActor(null)}
              onClick={() => setHighlightedActor(highlightedActor === "act-notify" ? null : "act-notify")}
              className={`w-full p-3.5 rounded-xl border text-center transition-all ${
                highlightedActor === "act-notify"
                  ? "bg-purple-100 border-purple-500 shadow-md ring-2 ring-purple-500/20"
                  : "bg-stone-50 hover:bg-stone-100 border-stone-200"
              }`}
            >
              <div className="w-10 h-10 rounded-full bg-purple-600 text-white mx-auto flex items-center justify-center font-bold mb-1.5 shadow-xs">
                <Bell className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-xs text-stone-900">Notification Service</h4>
              <span className="text-[10px] font-semibold text-purple-800 uppercase block">&lt;&lt;External System&gt;&gt;</span>
              <p className="text-[10px] text-stone-500 mt-0.5">Hệ thống thông báo tự động</p>
            </button>
          </div>
        </div>
      </div>

      {/* Selected Use Case Card */}
      <div className="mt-4 p-4 rounded-xl bg-white border border-stone-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div>
          <span className="text-[10px] font-bold text-blue-800 uppercase tracking-wider block">
            Ca sử dụng được chọn:
          </span>
          <strong className="text-stone-900 text-sm">{selectedUc.name}</strong>
          <p className="text-stone-600 mt-0.5">{selectedUc.goal}</p>
        </div>
        <div className="bg-stone-50 px-3 py-2 rounded-lg border border-stone-200 self-start sm:self-auto">
          <span className="font-bold text-stone-700">Chủ thể liên kết: </span>
          <span className="text-blue-900 font-semibold">{ACTORS.find(a => a.id === selectedUc.actorId)?.name}</span>
        </div>
      </div>
    </div>
  );
}
