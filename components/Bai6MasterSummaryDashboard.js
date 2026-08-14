"use client";

import React, { useState } from "react";
import {
  Award,
  Sparkles,
  GitFork,
  BookOpen,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Zap,
  HardDrive,
  ShieldCheck,
  ShieldAlert,
  Scale,
  Code2
} from "lucide-react";

export default function Bai6MasterSummaryDashboard() {
  const [activeTab, setActiveTab] = useState("decision"); // "decision", "takeaways", "flashcards"
  const [flippedCard, setFlippedCard] = useState(null);

  const decisionScenarios = [
    {
      q: "Dữ liệu là số nguyên hoặc chuỗi có số chữ số/ký tự (d) cố định?",
      recommend: "Radix Sort",
      tag: "Non-Comparison",
      color: "bg-pink-600",
      reason: "Đạt tốc độ tuyến tính O(n), không bị giới hạn bởi rào cản Ω(n log n) của phép so sánh."
    },
    {
      q: "Mảng có kích thước nhỏ (n < 50) hoặc gần như đã có thứ tự sẵn (Partially Sorted)?",
      recommend: "Insertion Sort",
      tag: "Adaptive O(n)",
      color: "bg-teal-600",
      reason: "Tận dụng tính thích nghi O(n) khi ít phép dịch shift, overhead cực nhỏ và ổn định."
    },
    {
      q: "Cần hiệu năng trung bình cao nhất, tiết kiệm RAM (In-Place), không cần tính ổn định?",
      recommend: "Quick Sort",
      tag: "Fastest In Practice",
      color: "bg-purple-600",
      reason: "Bộ nhớ In-Place O(1), cache-friendly, thời gian trung bình O(n log n) chạy nhanh nhất."
    },
    {
      q: "Cần tốc độ O(n log n) đảm bảo tuyệt đối trong mọi trường hợp + Cần Tính Ổn Định (Stable)?",
      recommend: "Merge Sort",
      tag: "Guaranteed O(n log n)",
      color: "bg-indigo-600",
      reason: "Worst-case luôn là O(n log n), STABLE 100%, chấp nhận đánh đổi O(n) RAM phụ."
    },
    {
      q: "Bộ nhớ ghi đắt đỏ (Flash / EEPROM) và cần số lần hoán đổi (Swap) là tối thiểu?",
      recommend: "Selection Sort",
      tag: "Minimum Swaps",
      color: "bg-blue-600",
      reason: "Chỉ tốn cố định đúng (n - 1) lần swap trong mọi trường hợp."
    }
  ];

  const takeaways = [
    {
      id: 1,
      title: "1. 6 Thuật Toán Kinh Điển",
      desc: "Đã phân tích toàn diện 6 thuật toán: Selection, Bubble, Insertion (nhóm bậc hai), Merge, Quick (nhóm chia để trị), và Radix Sort (nhóm cơ số)."
    },
    {
      id: 2,
      title: "2. Sức Mạnh Nhóm Chia Để Trị",
      desc: "Merge Sort và Quick Sort có hiệu năng vượt trội O(n log n) so với nhóm bậc hai O(n²), phù hợp xử lý dữ liệu lớn."
    },
    {
      id: 3,
      title: "3. Comparison vs Non-Comparison",
      desc: "Hầu hết các thuật toán dựa vào so sánh từng cặp (Comparison-based). Riêng Radix Sort phân phối theo thùng cơ số (Non-comparison based)."
    },
    {
      id: 4,
      title: "4. Ranh Giới Chặn Dưới Ω(n log n)",
      desc: "O(n log n) là chặn dưới lý thuyết tốt nhất của comparison sort. Radix Sort đạt O(n) nhờ phá vỡ điều kiện so sánh từng cặp."
    },
    {
      id: 5,
      title: "5. Thư Viện Chuẩn Java",
      desc: "Sử dụng Arrays.sort() cho mảng, Collections.sort() cho List, và hiện thực Comparator cho đối tượng tùy biến."
    }
  ];

  const flashcards = [
    {
      id: 1,
      q: "Tại sao Quick Sort không phải là thuật toán ổn định (Stable)?",
      a: "Do phép swap pivot tầm xa",
      expl: "Phép swap Pivot với phần tử cuối vùng S₁ có thể làm Pivot nhảy vọt qua các phần tử bằng giá trị trong vùng S₂.",
      badge: "Stability"
    },
    {
      id: 2,
      q: "Thuật toán nào có Worst-case luôn đảm bảo O(n log n) và Stable?",
      a: "Merge Sort",
      expl: "Merge Sort luôn chia đôi mảng đều đặn qua log n tầng, mỗi tầng tốn O(n) chi phí merge và bảo toàn thứ tự ban đầu.",
      badge: "Complexity"
    },
    {
      id: 3,
      q: "Điều kiện để Radix Sort đạt độ phức tạp O(n) là gì?",
      a: "Số chữ số d là hằng số",
      expl: "Thời gian là O(d × n). Khi d là hằng số bị chặn (ví dụ số nguyên 32-bit có tối đa 10 chữ số), chi phí là tuyến tính O(n).",
      badge: "Non-Comparison"
    },
    {
      id: 4,
      q: "Sự khác biệt cốt lõi giữa Arrays.sort() và Collections.sort()?",
      a: "Mảng (Array) vs Danh sách (List)",
      expl: "Arrays.sort() nhận mảng nguyên thủy/Object[], còn Collections.sort() chỉ nhận đối tượng dạng java.util.List.",
      badge: "Java Library"
    }
  ];

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl p-5 md:p-7 shadow-sm my-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-5">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
            Mục 9 — Tổng Kết Chương
          </span>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-1">
            Tổng Kết Toàn Bộ Bài 6: Sorting &amp; Cây Quyết Định Chọn Thuật Toán
          </h3>
          <p className="text-xs text-slate-500">
            Hệ thống hóa toàn bộ kiến thức, sơ đồ rẽ nhánh lựa chọn giải thuật và bộ flashcards ôn tập cốt lõi
          </p>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 font-mono text-xs font-bold self-start sm:self-auto">
          <Award className="w-3.5 h-3.5 text-amber-600" />
          Master Dashboard
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-2 mb-5 border-b border-slate-200 pb-2 flex-wrap">
        <button
          onClick={() => setActiveTab("decision")}
          className={`px-4 py-2 rounded-2xl text-xs font-mono font-bold transition cursor-pointer ${
            activeTab === "decision"
              ? "bg-white text-indigo-900 border-2 border-indigo-400 shadow-xs"
              : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 border border-transparent"
          }`}
        >
          Cây Quyết Định Chọn Thuật Toán
        </button>
        <button
          onClick={() => setActiveTab("takeaways")}
          className={`px-4 py-2 rounded-2xl text-xs font-mono font-bold transition cursor-pointer ${
            activeTab === "takeaways"
              ? "bg-white text-indigo-900 border-2 border-indigo-400 shadow-xs"
              : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 border border-transparent"
          }`}
        >
          5 Đúc Kết Cốt Lõi
        </button>
        <button
          onClick={() => setActiveTab("flashcards")}
          className={`px-4 py-2 rounded-2xl text-xs font-mono font-bold transition cursor-pointer ${
            activeTab === "flashcards"
              ? "bg-white text-indigo-900 border-2 border-indigo-400 shadow-xs"
              : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 border border-transparent"
          }`}
        >
          Flashcards Bẫy Đề Thi
        </button>
      </div>

      {/* Tab 1: Algorithm Selector Decision Tree */}
      {activeTab === "decision" && (
        <div className="space-y-3 animate-fadeIn mb-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {decisionScenarios.map((sc, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col justify-between hover:shadow-sm transition"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200">
                      Tình huống #{idx + 1}
                    </span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold text-white ${sc.color}`}>
                      {sc.tag}
                    </span>
                  </div>

                  <h4 className="text-xs font-bold text-slate-900 font-sans mb-1 leading-snug">
                    {sc.q}
                  </h4>
                  <p className="text-[11px] text-slate-600 font-sans leading-relaxed">
                    {sc.reason}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-500">Khuyên dùng:</span>
                  <span className="text-xs font-mono font-black text-slate-900 bg-white px-2.5 py-1 rounded-xl border border-slate-300">
                    &rarr; {sc.recommend}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 2: 5 Core Takeaways */}
      {activeTab === "takeaways" && (
        <div className="space-y-3 animate-fadeIn mb-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {takeaways.map((item) => (
              <div key={item.id} className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-1">
                <h4 className="text-xs font-bold text-slate-900 font-sans">{item.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Exam Trap Flashcards */}
      {activeTab === "flashcards" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 animate-fadeIn mb-5">
          {flashcards.map((item) => {
            const isFlipped = flippedCard === item.id;

            return (
              <div
                key={item.id}
                onClick={() => setFlippedCard(isFlipped ? null : item.id)}
                className={`p-4 rounded-3xl border-2 transition-all cursor-pointer shadow-xs flex flex-col justify-between select-none min-h-[150px] ${
                  isFlipped
                    ? "bg-gradient-to-br from-purple-50 via-white to-emerald-50/50 border-purple-300 ring-4 ring-purple-100/80 shadow-md text-slate-800"
                    : "bg-amber-50/80 border-amber-200 text-amber-950"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-white text-slate-800 border border-slate-200 shadow-xs">
                      {item.badge}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-slate-500">
                      {isFlipped ? "ĐÁP ÁN ✓" : "BẤM ĐỂ XEM ĐÁP ÁN ➔"}
                    </span>
                  </div>

                  {!isFlipped ? (
                    <p className="text-xs font-bold font-sans leading-relaxed text-slate-900">{item.q}</p>
                  ) : (
                    <div className="space-y-2 animate-fadeIn">
                      <div className="text-sm font-mono font-black text-emerald-900 bg-emerald-100 px-3 py-1 rounded-xl border border-emerald-300 inline-block shadow-xs">
                        {item.a}
                      </div>
                      <p className="text-xs text-slate-700 font-sans leading-relaxed bg-white p-2.5 rounded-xl border border-purple-100 shadow-xs">
                        {item.expl}
                      </p>
                    </div>
                  )}
                </div>

                <div className="pt-2 text-[10px] font-mono text-slate-500 border-t border-slate-200">
                  {isFlipped ? "👆 Bấm lại để xem câu hỏi" : "👆 Bấm để lật thẻ"}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Sticky Takeaway */}
      <div className="bg-amber-50/80 border-2 border-amber-200 rounded-2xl p-4 flex items-start gap-3 text-xs text-amber-950">
        <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div>
          <strong>⭐ Tổng kết hoàn thành Bài 6 (Sorting):</strong><br/>
          • Đã nắm vững <strong>6 thuật toán</strong> kinh điển: Selection, Bubble, Insertion, Merge, Quick, Radix Sort.<br/>
          • Hiểu sâu 2 thuộc tính cốt tử: <strong>In-Place</strong> (tiết kiệm bộ nhớ) và <strong>Stability</strong> (bảo toàn thứ tự khóa).<br/>
          • Thành thạo việc sử dụng thư viện Java <code>Arrays.sort()</code>, <code>Collections.sort()</code> và viết custom <code>Comparator</code> cho đối tượng tùy biến.
        </div>
      </div>
    </div>
  );
}
