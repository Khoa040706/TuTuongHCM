"use client";

import React, { useState } from "react";
import {
  Scale,
  Sparkles,
  HelpCircle,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Zap,
  ShieldCheck,
  ShieldAlert,
  Flame,
  Award
} from "lucide-react";

export default function QuadraticSortsBenchmark() {
  const [flippedCard, setFlippedCard] = useState(null);

  const trapQuestions = [
    {
      id: 1,
      q: "Thuật toán nào thực hiện ÍT PHÉP SWAP NHẤT trong mọi trường hợp?",
      a: "Selection Sort",
      badge: "Bẫy Phép Ghi",
      color: "border-blue-300 bg-blue-50 text-blue-900",
      expl: "Selection Sort luôn chỉ thực hiện đúng CỐ ĐỊNH (n - 1) lần swap, trong khi Bubble Sort có thể tốn tới n(n-1)/2 lần swap."
    },
    {
      id: 2,
      q: "Tại sao Insertion Sort được ưu tiên dùng cho mảng gần như đã sắp xếp?",
      a: "Tính Thích Nghi (Adaptive) & Cơ Chế Shift",
      badge: "Bẫy Hiệu Năng",
      color: "border-teal-300 bg-teal-50 text-teal-900",
      expl: "Insertion Sort đạt Best-Case O(n) khi mảng đã có thứ tự, và cơ chế dịch shift chỉ tốn 1 phép gán thay vì 3 phép gán của swap."
    },
    {
      id: 3,
      q: "Trong 3 thuật toán O(n²), thuật toán nào KHÔNG ỔN ĐỊNH (Unstable)?",
      a: "Selection Sort",
      badge: "Bẫy Stability",
      color: "border-rose-300 bg-rose-50 text-rose-900",
      expl: "Selection Sort thực hiện hoán đổi tầm xa giữa phần tử Max và phần tử cuối, có thể làm thay đổi thứ tự tương đối ban đầu của các khóa bằng nhau."
    },
    {
      id: 4,
      q: "Bubble Sort bản gốc và bản cải tiến khác nhau điểm gì ở Best-Case?",
      a: "Bản gốc O(n²) vs Cải tiến O(n)",
      badge: "Bẫy isSorted",
      color: "border-amber-300 bg-amber-50 text-amber-900",
      expl: "Bản gốc không kiểm tra trạng thái mảng nên luôn chạy n(n-1)/2 phép so sánh. Bản cải tiến dùng cờ isSorted dừng ngay sau 1 pass khi không có swap nào."
    }
  ];

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl p-5 md:p-7 shadow-sm my-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-5">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-2.5 py-1 rounded-md border border-purple-200">
            Tổng Kết Nhóm O(n²)
          </span>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-1">
            Quadratic Sorts Benchmark: Đối Chiếu Toàn Diện Selection vs Bubble vs Insertion
          </h3>
          <p className="text-xs text-slate-500">
            Bảng ma trận so sánh 7 tiêu chí then chốt và bộ câu hỏi trắc nghiệm tình huống thường gặp trong thi cử
          </p>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 font-mono text-xs font-bold self-start sm:self-auto">
          <Scale className="w-3.5 h-3.5 text-purple-600" />
          Ma Trận Đối Chiếu
        </div>
      </div>

      {/* Main Benchmark Matrix Table */}
      <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-xs mb-6">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono border-collapse">
            <thead>
              <tr className="bg-slate-100 border-b border-slate-200 text-slate-700">
                <th className="py-3 px-3.5 font-bold">Tiêu chí so sánh</th>
                <th className="py-3 px-3 text-blue-800 font-bold bg-blue-50/50">Selection Sort</th>
                <th className="py-3 px-3 text-amber-800 font-bold bg-amber-50/50">Bubble Sort (Cải tiến)</th>
                <th className="py-3 px-3 text-teal-800 font-bold bg-teal-50/50">Insertion Sort</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-800">
              <tr className="hover:bg-slate-50/80">
                <td className="py-2.5 px-3.5 font-bold text-slate-900">1. Chiến lược cốt lõi</td>
                <td className="py-2.5 px-3 bg-blue-50/20">Tìm Max, đưa về cuối mảng</td>
                <td className="py-2.5 px-3 bg-amber-50/20">So sánh cặp kề, nổi bọt về cuối</td>
                <td className="py-2.5 px-3 bg-teal-50/20">Duy trì S₁, chèn lá mới từ S₂</td>
              </tr>
              <tr className="hover:bg-slate-50/80">
                <td className="py-2.5 px-3.5 font-bold text-slate-900">2. Best-Case Time</td>
                <td className="py-2.5 px-3 text-rose-700 font-bold bg-blue-50/20">O(n²) (luôn quét tìm max)</td>
                <td className="py-2.5 px-3 text-emerald-700 font-bold bg-amber-50/20">O(n) (nhờ cờ isSorted)</td>
                <td className="py-2.5 px-3 text-emerald-700 font-bold bg-teal-50/20">O(n) (0 lần shift)</td>
              </tr>
              <tr className="hover:bg-slate-50/80">
                <td className="py-2.5 px-3.5 font-bold text-slate-900">3. Worst-Case Time</td>
                <td className="py-2.5 px-3 text-rose-700 font-black bg-blue-50/20">O(n²)</td>
                <td className="py-2.5 px-3 text-rose-700 font-black bg-amber-50/20">O(n²)</td>
                <td className="py-2.5 px-3 text-rose-700 font-black bg-teal-50/20">O(n²)</td>
              </tr>
              <tr className="hover:bg-slate-50/80">
                <td className="py-2.5 px-3.5 font-bold text-slate-900">4. Số phép Swap / Ghi</td>
                <td className="py-2.5 px-3 text-emerald-800 font-bold bg-blue-50/20">Cố định đúng (n - 1) swaps ⭐</td>
                <td className="py-2.5 px-3 text-rose-800 bg-amber-50/20">Lên tới n(n-1)/2 swaps</td>
                <td className="py-2.5 px-3 text-teal-800 font-bold bg-teal-50/20">Dịch Shift (ít tốn hơn swap)</td>
              </tr>
              <tr className="hover:bg-slate-50/80">
                <td className="py-2.5 px-3.5 font-bold text-slate-900">5. Bộ nhớ phụ (Space)</td>
                <td className="py-2.5 px-3 font-bold bg-blue-50/20">In-Place (O(1))</td>
                <td className="py-2.5 px-3 font-bold bg-amber-50/20">In-Place (O(1))</td>
                <td className="py-2.5 px-3 font-bold bg-teal-50/20">In-Place (O(1))</td>
              </tr>
              <tr className="hover:bg-slate-50/80">
                <td className="py-2.5 px-3.5 font-bold text-slate-900">6. Tính ổn định (Stability)</td>
                <td className="py-2.5 px-3 text-rose-700 font-black bg-blue-50/20">❌ KHÔNG STABLE (Unstable)</td>
                <td className="py-2.5 px-3 text-emerald-700 font-black bg-amber-50/20">✅ STABLE (Ổn định)</td>
                <td className="py-2.5 px-3 text-emerald-700 font-black bg-teal-50/20">✅ STABLE (Ổn định)</td>
              </tr>
              <tr className="hover:bg-slate-50/80">
                <td className="py-2.5 px-3.5 font-bold text-slate-900">7. Trường hợp nên dùng</td>
                <td className="py-2.5 px-3 text-slate-600 bg-blue-50/20">Khi chi phí ghi bộ nhớ (swap) cực đắt</td>
                <td className="py-2.5 px-3 text-slate-600 bg-amber-50/20">Mục đích giảng dạy, ít dùng thực tế</td>
                <td className="py-2.5 px-3 text-slate-600 bg-teal-50/20">Mảng nhỏ hoặc gần như đã có thứ tự ⭐</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Interactive Exam Trap Cards */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-4 h-4 text-purple-600" />
          <h4 className="text-xs font-mono font-bold text-slate-900 uppercase">
            BỘ THẺ TÌNH HUỐNG &amp; BẪY THI CỬ (EXAM TRAP FLASHCARDS)
          </h4>
        </div>
        <p className="text-xs text-slate-500 mb-4">
          Bấm vào từng thẻ bên dưới để lật xem đáp án và phân tích bẫy đề thi
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {trapQuestions.map((item) => {
            const isFlipped = flippedCard === item.id;

            return (
              <div
                key={item.id}
                onClick={() => setFlippedCard(isFlipped ? null : item.id)}
                className={`p-4 rounded-3xl border-2 transition-all cursor-pointer shadow-xs flex flex-col justify-between select-none min-h-[150px] ${
                  isFlipped
                    ? "bg-gradient-to-br from-purple-50 via-white to-emerald-50/50 border-purple-300 ring-4 ring-purple-100/80 shadow-md text-slate-800"
                    : item.color
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
      </div>
    </div>
  );
}
