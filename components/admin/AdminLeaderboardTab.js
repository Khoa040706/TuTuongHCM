"use client";
import React, { useState } from "react";
import {
  Trophy,
  Crown,
  Medal,
  Clock,
  Calendar,
  Sparkles,
  Layers,
  Trash2
} from "lucide-react";

export default function AdminLeaderboardTab({
  allSubjects = {},
  onClearRankings
}) {
  const subjectsList = Object.values(allSubjects).filter(
    (s) => s.chapters && s.chapters.length > 0
  );

  const [selectedSubjId, setSelectedSubjId] = useState(
    subjectsList[0]?.id || "tu-tuong-hcm"
  );

  const currentSubject = allSubjects[selectedSubjId] || subjectsList[0];
  const chapters = currentSubject?.chapters || [];

  const [selectedChapterId, setSelectedChapterId] = useState(
    chapters[0]?.id || ""
  );

  // Load rankings from localStorage
  const key = `studymaster_quiz_rankings_${selectedChapterId || chapters[0]?.id}`;
  let rankings = [];
  if (typeof window !== "undefined") {
    try {
      rankings = JSON.parse(localStorage.getItem(key) || "[]");
    } catch (e) {
      rankings = [];
    }
  }

  // Sort by score desc, then time asc
  rankings.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return (a.time || 0) - (b.time || 0);
  });

  const top1 = rankings[0];
  const top2 = rankings[1];
  const top3 = rankings[2];
  const remainingRankings = rankings.slice(3);

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">
      {/* Selector Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 bg-white border border-[#E8DACB] rounded-3xl p-5 shadow-xs">
        <div className="flex flex-wrap items-center gap-3">
          <div>
            <label className="block text-[10px] font-extrabold uppercase tracking-wider text-[#8C7A70] mb-1">
              Môn Học
            </label>
            <select
              value={selectedSubjId}
              onChange={(e) => {
                setSelectedSubjId(e.target.value);
                const subj = allSubjects[e.target.value];
                if (subj?.chapters?.length > 0) {
                  setSelectedChapterId(subj.chapters[0].id);
                }
              }}
              className="px-3.5 py-2 text-xs font-bold rounded-xl border border-[#E8DACB] bg-[#FAF8F5] text-[#38150E] focus:outline-none focus:border-[#D85A38] transition-colors cursor-pointer"
            >
              {subjectsList.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.icon || "📖"} {s.title}
                </option>
              ))}
            </select>
          </div>

          {chapters.length > 0 && (
            <div>
              <label className="block text-[10px] font-extrabold uppercase tracking-wider text-[#8C7A70] mb-1">
                Chương Khảo Thí
              </label>
              <select
                value={selectedChapterId}
                onChange={(e) => setSelectedChapterId(e.target.value)}
                className="px-3.5 py-2 text-xs font-bold rounded-xl border border-[#E8DACB] bg-[#FAF8F5] text-[#38150E] focus:outline-none focus:border-[#D85A38] transition-colors cursor-pointer max-w-[280px]"
              >
                {chapters.map((ch) => (
                  <option key={ch.id} value={ch.id}>
                    {ch.title}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {rankings.length > 0 && (
          <button
            onClick={() => onClearRankings(selectedChapterId || chapters[0]?.id)}
            className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-[#8C7A70] hover:text-[#B91C1C] hover:bg-red-50 border border-transparent transition-colors cursor-pointer self-end sm:self-center"
            title="Xóa trắng bảng xếp hạng chương này"
          >
            <Trash2 size={13} />
            <span>Xóa bảng điểm chương</span>
          </button>
        )}
      </div>

      {/* Top 3 Golden Podium Display */}
      {rankings.length > 0 ? (
        <div className="relative bg-gradient-to-b from-[#FAF5EE] via-white to-white border border-[#E8DACB] rounded-3xl p-6 sm:p-8 shadow-xs overflow-hidden">
          <div className="text-center max-w-md mx-auto space-y-1 mb-8">
            <span className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FAF8F5] text-[#D85A38] border border-[#E8DACB]">
              <Sparkles size={11} />
              Bục Vinh Danh Thành Tích Cao Nhất
            </span>
            <h3 className="text-lg font-black text-[#38150E]">
              Bảng Vàng Khảo Thí Xuất Sắc
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end max-w-3xl mx-auto">
            {/* Top 2: Silver */}
            <div className="order-2 md:order-1 bg-white border border-[#E8DACB] rounded-2xl p-5 shadow-xs text-center space-y-3 relative group hover:border-[#D48B38] transition-all">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-[#F4EBE0] border border-[#E8DACB] flex items-center justify-center text-xl shadow-xs">
                🥈
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#8C7A70] block">
                  Hạng 2 (Silver)
                </span>
                <h4 className="font-extrabold text-sm text-[#38150E] mt-0.5 truncate">
                  {top2 ? top2.name : "—"}
                </h4>
              </div>
              {top2 && (
                <div className="bg-[#FAF8F5] border border-[#F4EBE0] rounded-xl p-2 text-xs">
                  <div className="font-black text-[#D85A38]">
                    {top2.score}/{top2.total} điểm
                  </div>
                  <div className="text-[10px] text-[#8C7A70] mt-0.5">
                    ⏱️ {Math.round(top2.time || 0)}s
                  </div>
                </div>
              )}
            </div>

            {/* Top 1: Gold Crown */}
            <div className="order-1 md:order-2 bg-gradient-to-b from-[#FFFDF8] to-white border-2 border-[#E8B86D] rounded-3xl p-6 shadow-md text-center space-y-3 relative transform md:-translate-y-4 hover:scale-[1.02] transition-all">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#38150E] text-[#E8B86D] px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider flex items-center gap-1 shadow-xs">
                <Crown size={11} className="text-[#E8B86D]" />
                Top 1 Quán Quân
              </div>

              <div className="w-16 h-16 mx-auto rounded-3xl bg-[#FAF5EE] border-2 border-[#E8B86D] flex items-center justify-center text-2xl shadow-sm mt-1">
                🥇
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#D48B38] block">
                  Hạng 1 (Champion)
                </span>
                <h4 className="font-black text-base text-[#38150E] mt-0.5 truncate">
                  {top1 ? top1.name : "—"}
                </h4>
              </div>
              {top1 && (
                <div className="bg-[#FAF5EE] border border-[#E8DACB] rounded-2xl p-2.5 text-xs">
                  <div className="font-black text-lg text-[#D85A38]">
                    {top1.score}/{top1.total} điểm
                  </div>
                  <div className="text-[10px] text-[#8C7A70] font-semibold mt-0.5">
                    ⏱️ {Math.round(top1.time || 0)} giây • {top1.date || "Hôm nay"}
                  </div>
                </div>
              )}
            </div>

            {/* Top 3: Bronze */}
            <div className="order-3 md:order-3 bg-white border border-[#E8DACB] rounded-2xl p-5 shadow-xs text-center space-y-3 relative group hover:border-[#D48B38] transition-all">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-[#F4EBE0] border border-[#E8DACB] flex items-center justify-center text-xl shadow-xs">
                🥉
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#8C7A70] block">
                  Hạng 3 (Bronze)
                </span>
                <h4 className="font-extrabold text-sm text-[#38150E] mt-0.5 truncate">
                  {top3 ? top3.name : "—"}
                </h4>
              </div>
              {top3 && (
                <div className="bg-[#FAF8F5] border border-[#F4EBE0] rounded-xl p-2 text-xs">
                  <div className="font-black text-[#D85A38]">
                    {top3.score}/{top3.total} điểm
                  </div>
                  <div className="text-[10px] text-[#8C7A70] mt-0.5">
                    ⏱️ {Math.round(top3.time || 0)}s
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white border border-[#E8DACB] rounded-3xl p-12 text-center text-xs text-[#8C7A70] italic">
          Chương này chưa có học viên nào hoàn thành bài thi trắc nghiệm.
        </div>
      )}

      {/* Full Scoreboard Table */}
      {rankings.length > 0 && (
        <div className="bg-white border border-[#E8DACB] rounded-3xl shadow-xs overflow-hidden">
          <div className="p-5 border-b border-[#F4EBE0] flex justify-between items-center bg-[#FAF8F5]">
            <div className="flex items-center gap-2">
              <Trophy size={16} className="text-[#D85A38]" />
              <h4 className="text-xs font-extrabold text-[#38150E] uppercase tracking-wider">
                Bảng Điểm Xếp Hạng Đầy Đủ ({rankings.length} lượt thi)
              </h4>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-xs">
              <thead className="bg-[#FAF8F5] border-b border-[#F4EBE0] text-[#8C7A70] font-extrabold uppercase tracking-wider select-none">
                <tr>
                  <th className="px-6 py-3.5 text-center">Thứ hạng</th>
                  <th className="px-6 py-3.5">Học viên</th>
                  <th className="px-6 py-3.5 text-center">Điểm số</th>
                  <th className="px-6 py-3.5 text-center">Thời gian làm</th>
                  <th className="px-6 py-3.5 text-right">Ngày thi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F4EBE0] text-[#38150E]">
                {rankings.map((r, index) => (
                  <tr
                    key={index}
                    className="hover:bg-[#FAF8F5] transition-colors select-none"
                  >
                    {/* Rank Badge */}
                    <td className="px-6 py-3.5 text-center font-black">
                      <span
                        className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs ${
                          index === 0
                            ? "bg-[#FAF5EE] text-[#D85A38] border border-[#E8B86D]"
                            : index === 1
                            ? "bg-slate-100 text-slate-700"
                            : index === 2
                            ? "bg-amber-100 text-amber-800"
                            : "text-[#8C7A70]"
                        }`}
                      >
                        {index + 1}
                      </span>
                    </td>

                    {/* Username */}
                    <td className="px-6 py-3.5 font-bold text-[#38150E]">
                      {r.name}
                    </td>

                    {/* Score */}
                    <td className="px-6 py-3.5 text-center font-black text-[#D85A38]">
                      {r.score}/{r.total}
                    </td>

                    {/* Time */}
                    <td className="px-6 py-3.5 text-center text-[#8C7A70] font-medium">
                      {Math.round(r.time || 0)} giây
                    </td>

                    {/* Date */}
                    <td className="px-6 py-3.5 text-right text-[#8C7A70] font-medium">
                      {r.date ? new Date(r.date).toLocaleDateString("vi-VN") : "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
