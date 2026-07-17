"use client";
import React, { useState } from "react";
import { GitFork, RotateCcw, Layers, Box, ArrowUpDown, Award, ChevronRight, Check, PartyPopper } from "lucide-react";

const PILLARS = [
  {
    icon: <GitFork className="w-5 h-5" />,
    color: "indigo",
    label: "a. Tạo Subclass",
    desc: "Dùng từ khóa extends và protected để tái sử dụng code từ lớp cha một cách an toàn.",
  },
  {
    icon: <RotateCcw className="w-5 h-5" />,
    color: "emerald",
    label: "b. Overriding Methods",
    desc: "Lớp con có thể ghi đè phương thức của lớp cha để thay đổi hành vi phù hợp.",
  },
  {
    icon: <ArrowUpDown className="w-5 h-5" />,
    color: "amber",
    label: "c. Từ khóa super",
    desc: "Gọi constructor cha với super(...) hoặc phương thức cha với super.method() để tái sử dụng logic.",
  },
  {
    icon: <Box className="w-5 h-5" />,
    color: "rose",
    label: "d. Lớp Object",
    desc: "Tổ tiên chung của mọi lớp Java. Cung cấp toString(), equals() và nhiều phương thức nền tảng.",
  },
];

const PILLAR_STYLES = {
  indigo: {
    bg: "bg-indigo-50",
    border: "border-indigo-200",
    icon: "text-indigo-600 bg-indigo-100",
    label: "text-indigo-800",
    desc: "text-indigo-700",
  },
  emerald: {
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    icon: "text-emerald-600 bg-emerald-100",
    label: "text-emerald-800",
    desc: "text-emerald-700",
  },
  amber: {
    bg: "bg-amber-50",
    border: "border-amber-200",
    icon: "text-amber-600 bg-amber-100",
    label: "text-amber-800",
    desc: "text-amber-700",
  },
  rose: {
    bg: "bg-rose-50",
    border: "border-rose-200",
    icon: "text-rose-600 bg-rose-100",
    label: "text-rose-800",
    desc: "text-rose-700",
  },
};

const FLASHCARDS = [
  {
    keyword: "extends",
    short: "Tạo quan hệ kế thừa (is-a)",
    full: "Cú pháp: class ChildClass extends ParentClass { }. Tạo mối quan hệ IS-A giữa lớp con và lớp cha. Lớp con thừa hưởng tất cả các thuộc tính và phương thức public/protected của lớp cha.",
    color: "indigo",
  },
  {
    keyword: "protected",
    short: "Cho lớp con truy cập thuộc tính/phương thức cha",
    full: "Thuộc tính hoặc phương thức có modifier protected sẽ được truy cập trong cùng package VÀ trong các lớp con (subclass) dù khác package. Dùng thay cho private khi muốn lớp con tái sử dụng.",
    color: "indigo",
  },
  {
    keyword: "super(...)",
    short: "Gọi constructor lớp cha",
    full: "Phải là câu lệnh ĐẦU TIÊN trong constructor lớp con. Dùng để gọi constructor của lớp cha và khởi tạo các thuộc tính kế thừa. Nếu không viết tường minh, Java tự gọi super() mặc định không tham số.",
    color: "amber",
  },
  {
    keyword: "super.method()",
    short: "Gọi phương thức gốc của lớp cha",
    full: "Dùng khi đã ghi đè (override) phương thức của lớp cha nhưng vẫn muốn gọi lại logic gốc của lớp cha. Ví dụ: super.print() trong lớp SavingAcct sẽ gọi phương thức print() của BankAcct.",
    color: "amber",
  },
  {
    keyword: "Constructor KHÔNG kế thừa",
    short: "Constructor phải tự viết cho lớp con",
    full: "Constructor của lớp cha KHÔNG được kế thừa xuống lớp con. Lớp con phải tự định nghĩa constructor riêng và dùng super(...) để gọi constructor của lớp cha nếu cần.",
    color: "emerald",
  },
  {
    keyword: "Subclass Substitutability",
    short: "Đối tượng lớp con dùng được ở nơi cần lớp cha",
    full: "Ở bất kỳ đâu cần đối tượng kiểu lớp cha, có thể thay bằng đối tượng kiểu lớp con (vì lớp con IS-A lớp cha). Ngược lại KHÔNG đúng — không thể thay lớp cha bằng lớp con tùy ý.",
    color: "emerald",
  },
  {
    keyword: "is-a vs has-a",
    short: "Kế thừa (extends) vs Kết hợp (thuộc tính)",
    full: "is-a: dùng extends — SavingAcct IS-A BankAcct. has-a: dùng thuộc tính — Car HAS-A Engine. Chỉ dùng kế thừa khi quan hệ thực sự là is-a. Nếu chỉ muốn tái sử dụng code, hãy dùng has-a.",
    color: "rose",
  },
  {
    keyword: "final class",
    short: "Chặn kế thừa lớp; không lớp nào được extends",
    full: "Khai báo final trước class ngăn mọi lớp khác kế thừa lớp đó. Ví dụ thực tế: class String trong Java là final để bảo mật dữ liệu chuỗi không bị lớp con sửa đổi hành vi.",
    color: "rose",
  },
  {
    keyword: "final method",
    short: "Chặn override phương thức cụ thể",
    full: "Khai báo final trước phương thức ngăn lớp con ghi đè (override) phương thức đó. Lớp con vẫn có thể kế thừa lớp cha bình thường, chỉ là không được thay đổi logic của phương thức final.",
    color: "rose",
  },
  {
    keyword: "Đơn kế thừa (Single Inheritance)",
    short: "Java chỉ cho phép extends một lớp duy nhất",
    full: "Java không hỗ trợ đa kế thừa giữa các lớp để tránh Diamond Problem (xung đột khi 2 lớp cha có cùng tên phương thức). Thay vào đó, Java hỗ trợ một lớp implement nhiều interface cùng lúc.",
    color: "indigo",
  },
];

const CARD_STYLES = {
  indigo: {
    front: "bg-indigo-600 hover:bg-indigo-700",
    back: "bg-indigo-50 border-indigo-200",
    keyword: "text-white",
    short: "text-indigo-100",
    badge: "bg-indigo-100 text-indigo-700",
    full: "text-indigo-900",
  },
  emerald: {
    front: "bg-emerald-600 hover:bg-emerald-700",
    back: "bg-emerald-50 border-emerald-200",
    keyword: "text-white",
    short: "text-emerald-100",
    badge: "bg-emerald-100 text-emerald-700",
    full: "text-emerald-900",
  },
  amber: {
    front: "bg-amber-500 hover:bg-amber-600",
    back: "bg-amber-50 border-amber-200",
    keyword: "text-white",
    short: "text-amber-100",
    badge: "bg-amber-100 text-amber-700",
    full: "text-amber-900",
  },
  rose: {
    front: "bg-rose-600 hover:bg-rose-700",
    back: "bg-rose-50 border-rose-200",
    keyword: "text-white",
    short: "text-rose-100",
    badge: "bg-rose-100 text-rose-700",
    full: "text-rose-900",
  },
};

export default function InheritanceSummary() {
  const [flipped, setFlipped] = useState(Array(FLASHCARDS.length).fill(false));
  const [allFlipped, setAllFlipped] = useState(false);

  const toggleCard = (idx) => {
    setFlipped((prev) => {
      const copy = [...prev];
      copy[idx] = !copy[idx];
      return copy;
    });
  };

  const handleFlipAll = () => {
    const newState = !allFlipped;
    setAllFlipped(newState);
    setFlipped(Array(FLASHCARDS.length).fill(newState));
  };

  const handleResetAll = () => {
    setAllFlipped(false);
    setFlipped(Array(FLASHCARDS.length).fill(false));
  };

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-3xl p-5 md:p-6 text-stone-850 select-none shadow-sm relative z-10 my-4 space-y-6">
      <span className="text-[9px] font-black text-stone-400 uppercase tracking-widest block border-b pb-2 font-mono">
        // X. TỔNG KẾT (SUMMARY) — BÀI KẾ THỪA (INHERITANCE)
      </span>

      {/* 4 Pillars Grid */}
      <div>
        <h3 className="text-[10px] font-black text-stone-500 uppercase tracking-wider mb-3 font-mono">
          // 4 TRỤ CỘT CỦA BÀI HỌC
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
          {PILLARS.map((p) => {
            const s = PILLAR_STYLES[p.color];
            return (
              <div
                key={p.label}
                className={`${s.bg} border ${s.border} rounded-2xl p-4 space-y-2`}
              >
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${s.icon}`}>
                  {p.icon}
                </div>
                <h4 className={`text-xs font-black ${s.label}`}>{p.label}</h4>
                <p className={`text-[10px] leading-relaxed font-semibold ${s.desc}`}>{p.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Flash Cards Cheat Sheet */}
      <div>
        <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
          <h3 className="text-[10px] font-black text-stone-500 uppercase tracking-wider font-mono">
            // CHEAT SHEET — BẤM THẺ ĐỂ XEM ĐỊNH NGHĨA ĐẦY ĐỦ
          </h3>
          <div className="flex gap-2">
            <button
              onClick={handleFlipAll}
              className="px-3 py-1 bg-stone-900 hover:bg-stone-800 text-white font-bold text-[10px] rounded-lg border-none cursor-pointer flex items-center gap-1.5 shadow"
            >
              <Layers className="w-3.5 h-3.5" />
              {allFlipped ? "Ẩn tất cả" : "Lật tất cả"}
            </button>
            <button
              onClick={handleResetAll}
              className="px-3 py-1 bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-[10px] rounded-lg border-none cursor-pointer flex items-center gap-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {FLASHCARDS.map((card, idx) => {
            const s = CARD_STYLES[card.color];
            const isFlipped = flipped[idx];
            return (
              <button
                key={idx}
                onClick={() => toggleCard(idx)}
                className={`text-left rounded-2xl p-4 border cursor-pointer transition-all duration-200 min-h-[110px] flex flex-col justify-between shadow-sm ${
                  isFlipped
                    ? `${s.back} border`
                    : `${s.front} border-transparent`
                }`}
              >
                {!isFlipped ? (
                  <div className="h-full flex flex-col justify-between">
                    <code className={`text-xs font-black block ${s.keyword}`}>
                      {card.keyword}
                    </code>
                    <div>
                      <p className={`text-[9px] font-semibold mt-2 leading-relaxed ${s.short}`}>
                        {card.short}
                      </p>
                      <span className={`text-[8px] font-black uppercase tracking-wider mt-3 flex items-center gap-1 ${s.short} opacity-70`}>
                        Bấm để xem <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="h-full flex flex-col justify-between">
                    <span className={`text-[8px] font-black px-1.5 py-0.5 rounded self-start ${s.badge}`}>
                      {card.keyword}
                    </span>
                    <p className={`text-[10px] font-semibold leading-relaxed mt-2 ${s.full}`}>
                      {card.full}
                    </p>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Completion Banner */}
      <div className="bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl p-5 flex items-center gap-4">
        <div className="text-3xl shrink-0">🎉</div>
        <div>
          <h4 className="text-white font-black text-sm mb-0.5">Chúc mừng! Bạn đã hoàn thành bài Inheritance!</h4>
          <p className="text-indigo-200 text-[10px] font-semibold leading-relaxed">
            Bạn đã nắm vững kế thừa — một trong những trụ cột quan trọng nhất của lập trình hướng đối tượng. Hãy ôn lại Cheat Sheet bên trên và làm thêm bài tập để củng cố kiến thức!
          </p>
        </div>
        <div className="ml-auto shrink-0 hidden sm:flex flex-col items-center gap-1">
          <Award className="w-10 h-10 text-yellow-300" />
          <span className="text-yellow-200 text-[8px] font-black uppercase tracking-wider">Hoàn thành</span>
        </div>
      </div>
    </div>
  );
}
