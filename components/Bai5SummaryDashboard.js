"use client";

import React, { useState } from "react";
import { Shield, Sparkles, TrendingUp, Layers, CheckCircle2, GitFork, Award, Scale, Clock, Zap, BookOpen } from "lucide-react";

export default function Bai5SummaryDashboard() {
  const [activeTab, setActiveTab] = useState("properties");

  const tabs = [
    { id: "properties", label: "1. 4 Tính Chất & Độc Lập", icon: Shield },
    { id: "bigo", label: "2. Thang Bậc Big-O", icon: TrendingUp },
    { id: "rules", label: "3. Rules of Thumb", icon: Zap },
    { id: "matrix", label: "4. Ma Trận Thuật Toán", icon: Scale }
  ];

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl p-5 md:p-7 shadow-sm my-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-6">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
            Tổng Kết Toàn Bộ Bài 5
          </span>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-1">
            Master Dashboard: Analysis of Algorithms (Phân Tích Thuật Toán)
          </h3>
          <p className="text-xs text-slate-500">
            Hệ thống hóa toàn bộ định lý, công thức, quy tắc ước lượng và ma trận hiệu năng của Bài 5
          </p>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 text-amber-900 border border-amber-300 font-mono text-xs font-bold self-start sm:self-auto">
          <Award className="w-4 h-4 text-amber-600" />
          Tổng kết 5 sao
        </div>
      </div>

      {/* Tabs Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-6 border-b border-slate-200">
        {tabs.map((tab) => {
          const IconComp = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl font-mono text-xs font-bold transition whitespace-nowrap cursor-pointer ${
                isActive
                  ? "bg-white text-slate-900 border-2 border-amber-500 shadow-xs scale-102"
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200"
              }`}
            >
              <IconComp className={`w-4 h-4 ${isActive ? "text-amber-600" : "text-slate-500"}`} />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab Content 1: Properties & Independence */}
      {activeTab === "properties" && (
        <div className="space-y-4 animate-fadeIn">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="bg-emerald-50 border border-emerald-200 p-3.5 rounded-2xl">
              <span className="font-mono text-[10px] font-bold text-emerald-800 uppercase block mb-1">#1 Exact</span>
              <h4 className="text-sm font-bold text-slate-900 mb-1">Chính Xác</h4>
              <p className="text-xs text-slate-600">Từng bước rõ ràng, không mơ hồ, máy tính thực thi được chính xác.</p>
            </div>

            <div className="bg-rose-50 border border-rose-200 p-3.5 rounded-2xl">
              <span className="font-mono text-[10px] font-bold text-rose-800 uppercase block mb-1">#2 Terminate</span>
              <h4 className="text-sm font-bold text-slate-900 mb-1">Dừng Hữu Hạn</h4>
              <p className="text-xs text-slate-600">Phải kết thúc sau số bước hữu hạn, tuyệt đối không lặp vô tận.</p>
            </div>

            <div className="bg-amber-50 border border-amber-200 p-3.5 rounded-2xl">
              <span className="font-mono text-[10px] font-bold text-amber-800 uppercase block mb-1">#3 Effective</span>
              <h4 className="text-sm font-bold text-slate-900 mb-1">Khả Thi</h4>
              <p className="text-xs text-slate-600">Mỗi thao tác đủ cơ bản để máy tính thực hiện với tài nguyên hữu hạn.</p>
            </div>

            <div className="bg-indigo-50 border border-indigo-200 p-3.5 rounded-2xl">
              <span className="font-mono text-[10px] font-bold text-indigo-800 uppercase block mb-1">#4 General</span>
              <h4 className="text-sm font-bold text-slate-900 mb-1">Tổng Quát</h4>
              <p className="text-xs text-slate-600">Đúng cho toàn bộ lớp bài toán và mọi bộ dữ liệu đầu vào hợp lệ.</p>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs text-slate-700 leading-relaxed space-y-2">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-indigo-600" />
              Nguyên Lý Độc Lập của Analysis of Algorithms:
            </h4>
            <p>
              • So sánh <strong>phương pháp giải (methods of solution)</strong>, không so sánh chương trình (programs).
            </p>
            <p>
              • Hoàn toàn <strong>độc lập</strong> với 4 yếu tố: (1) Cách cài đặt cụ thể, (2) Trình biên dịch/Compiler, (3) Phần cứng máy tính, (4) Bộ dữ liệu cụ thể.
            </p>
            <p>
              • Đo lường hiệu quả bằng cách <strong>đếm số phép toán cơ bản (primitive operations)</strong> hoặc câu lệnh (statements), không đo bằng run time thực tế.
            </p>
          </div>
        </div>
      )}

      {/* Tab Content 2: Big O Hierarchy */}
      {activeTab === "bigo" && (
        <div className="space-y-4 animate-fadeIn">
          <div className="bg-slate-50/90 text-slate-800 rounded-3xl p-5 border border-slate-200 shadow-sm">
            <span className="text-xs font-mono font-bold text-slate-600 block mb-2 uppercase">Chuỗi thứ tự tăng trưởng chuẩn (Order of Magnitude):</span>
            <div className="text-sm md:text-base font-mono font-bold text-slate-900 bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-2 flex-wrap">
              <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded border border-emerald-300">O(1)</span> &lt;{" "}
              <span className="bg-teal-100 text-teal-800 px-2 py-0.5 rounded border border-teal-300">O(log n)</span> &lt;{" "}
              <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded border border-blue-300">O(n)</span> &lt;{" "}
              <span className="bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded border border-indigo-300">O(n log n)</span> &lt;{" "}
              <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded border border-amber-300">O(n²)</span> &lt;{" "}
              <span className="bg-orange-100 text-orange-800 px-2 py-0.5 rounded border border-orange-300">O(n³)</span> &lt;{" "}
              <span className="bg-rose-100 text-rose-800 px-2 py-0.5 rounded border border-rose-300">O(2ⁿ)</span>
            </div>
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 mt-2 px-1 font-semibold">
              <span className="text-emerald-700">⚡ Nhanh nhất (Fastest)</span>
              <span className="text-rose-700">🔥 Chậm nhất (Slowest)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-2xl text-xs space-y-1.5">
              <strong className="text-slate-900 block font-bold">Quy tắc rút gọn Big-O:</strong>
              <p className="text-slate-600">• Bỏ qua toàn bộ số hạng bậc thấp (low-order terms).</p>
              <p className="text-slate-600">• Bỏ qua hệ số nhân hằng số (multiplicative constant).</p>
              <p className="text-slate-600">• Luôn tìm <strong>Tightest Upper Bound</strong> sát nhất.</p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-2xl text-xs space-y-1.5">
              <strong className="text-slate-900 block font-bold">Tính chất cộng Big-O &amp; Cơ số:</strong>
              <p className="text-slate-600">• <code>O(f(n)) + O(g(n)) = O(f(n) + g(n))</code>.</p>
              <p className="text-slate-600">• Trong Big-O: <code>log₂ n = log₁₀ n = ln n</code> (tương đương).</p>
              <p className="text-slate-600">• Định luật Moore: số bóng bán dẫn tăng theo cấp số nhân mỗi ~2 năm.</p>
            </div>
          </div>
        </div>
      )}

      {/* Tab Content 3: Rules of Thumb */}
      {activeTab === "rules" && (
        <div className="space-y-3 animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="bg-white border border-slate-200 p-3.5 rounded-2xl shadow-xs">
              <span className="px-2 py-0.5 rounded font-mono text-xs font-bold bg-emerald-100 text-emerald-800">
                O(1)
              </span>
              <h5 className="font-bold text-slate-900 text-xs mt-2">Vài Statement Đơn Giản</h5>
              <p className="text-[11px] text-slate-600 mt-1">Phép gán, hoán đổi biến, phép tính số học cơ bản.</p>
            </div>

            <div className="bg-white border border-slate-200 p-3.5 rounded-2xl shadow-xs">
              <span className="px-2 py-0.5 rounded font-mono text-xs font-bold bg-teal-100 text-teal-800">
                O(log n)
              </span>
              <h5 className="font-bold text-slate-900 text-xs mt-2">Giảm Phạm Vi Theo Tỉ Lệ</h5>
              <p className="text-[11px] text-slate-600 mt-1">Mỗi bước chia đôi dữ liệu (VD: Binary Search, loop i*=2).</p>
            </div>

            <div className="bg-white border border-slate-200 p-3.5 rounded-2xl shadow-xs">
              <span className="px-2 py-0.5 rounded font-mono text-xs font-bold bg-blue-100 text-blue-800">
                O(n)
              </span>
              <h5 className="font-bold text-slate-900 text-xs mt-2">Loop n Lần / Đệ Quy Tuyến Tính</h5>
              <p className="text-[11px] text-slate-600 mt-1">Duyệt mảng 1 chiều, đệ quy n lời gọi, chuỗi hình học lồng.</p>
            </div>

            <div className="bg-white border border-slate-200 p-3.5 rounded-2xl shadow-xs">
              <span className="px-2 py-0.5 rounded font-mono text-xs font-bold bg-indigo-100 text-indigo-800">
                O(n log n)
              </span>
              <h5 className="font-bold text-slate-900 text-xs mt-2">Đệ Quy Chia Để Trị Tối Ưu</h5>
              <p className="text-[11px] text-slate-600 mt-1">Merge Sort, Quick Sort (n log n lời gọi hàm).</p>
            </div>

            <div className="bg-white border border-slate-200 p-3.5 rounded-2xl shadow-xs">
              <span className="px-2 py-0.5 rounded font-mono text-xs font-bold bg-amber-100 text-amber-800">
                O(n²) / O(n·m)
              </span>
              <h5 className="font-bold text-slate-900 text-xs mt-2">Vòng Lặp Lồng Nhau 2 Cấp</h5>
              <p className="text-[11px] text-slate-600 mt-1">Duyệt ma trận n hàng m cột, Bubble / Selection Sort.</p>
            </div>

            <div className="bg-white border border-slate-200 p-3.5 rounded-2xl shadow-xs">
              <span className="px-2 py-0.5 rounded font-mono text-xs font-bold bg-rose-100 text-rose-800">
                O(2ⁿ)
              </span>
              <h5 className="font-bold text-slate-900 text-xs mt-2">Thời Gian Mũ (Exponential)</h5>
              <p className="text-[11px] text-slate-600 mt-1">Tháp Hà Nội, duyệt toàn bộ tập con (2ⁿ cases).</p>
            </div>
          </div>
        </div>
      )}

      {/* Tab Content 4: Matrix Comparison */}
      {activeTab === "matrix" && (
        <div className="space-y-4 animate-fadeIn">
          <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono border-collapse">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-200 text-slate-700">
                    <th className="py-2.5 px-3">Thuật toán / Cấu trúc</th>
                    <th className="py-2.5 px-3 text-rose-700 font-bold">Worst Case</th>
                    <th className="py-2.5 px-3 text-amber-700 font-bold">Average Case</th>
                    <th className="py-2.5 px-3 text-emerald-700 font-bold">Best Case</th>
                    <th className="py-2.5 px-3">Doubling Test (n ➔ 2n)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-800">
                  <tr className="hover:bg-slate-50">
                    <td className="py-2.5 px-3 font-bold">Sequential Search</td>
                    <td className="py-2.5 px-3 text-rose-700 font-black">O(n)</td>
                    <td className="py-2.5 px-3 text-amber-700 font-black">O(n)</td>
                    <td className="py-2.5 px-3 text-emerald-700 font-black">O(1)</td>
                    <td className="py-2.5 px-3">Tăng ~2 lần (2¹)</td>
                  </tr>
                  <tr className="hover:bg-slate-50 bg-teal-50/20">
                    <td className="py-2.5 px-3 font-bold text-teal-950">Binary Search</td>
                    <td className="py-2.5 px-3 text-rose-700 font-black">O(log n)</td>
                    <td className="py-2.5 px-3 text-amber-700 font-black">O(log n)</td>
                    <td className="py-2.5 px-3 text-emerald-700 font-black">O(1)</td>
                    <td className="py-2.5 px-3">Tăng thêm +1 bước</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-2.5 px-3 font-bold">Doubly Nested Loop</td>
                    <td className="py-2.5 px-3 text-rose-700 font-black">O(n²)</td>
                    <td className="py-2.5 px-3 text-amber-700 font-black">O(n²)</td>
                    <td className="py-2.5 px-3 text-emerald-700 font-black">O(n²)</td>
                    <td className="py-2.5 px-3 font-bold text-amber-800">Tăng ~4 lần (2²)</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-2.5 px-3 font-bold">Triply Nested Loop</td>
                    <td className="py-2.5 px-3 text-rose-700 font-black">O(n³)</td>
                    <td className="py-2.5 px-3 text-amber-700 font-black">O(n³)</td>
                    <td className="py-2.5 px-3 text-emerald-700 font-black">O(n³)</td>
                    <td className="py-2.5 px-3 font-bold text-rose-800">Tăng ~8 lần (2³)</td>
                  </tr>
                  <tr className="hover:bg-slate-50 bg-rose-50/20">
                    <td className="py-2.5 px-3 font-bold text-rose-950">Tower of Hanoi</td>
                    <td className="py-2.5 px-3 text-rose-700 font-black">O(2ⁿ)</td>
                    <td className="py-2.5 px-3 text-rose-700 font-black">O(2ⁿ)</td>
                    <td className="py-2.5 px-3 text-rose-700 font-black">O(2ⁿ)</td>
                    <td className="py-2.5 px-3 font-bold text-rose-900">Bình phương thời gian!</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
