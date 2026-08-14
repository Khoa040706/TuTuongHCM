"use client";

import React, { useState } from "react";
import {
  Sparkles,
  KeyRound,
  Search,
  CheckCircle2,
  Filter,
  CopyX,
  BarChart2,
  Layers,
  ArrowRight,
  ShieldAlert,
  SlidersHorizontal,
  HardDrive,
  Cpu
} from "lucide-react";

export default function SortingFundamentalsOverview() {
  const initialStudents = [
    { id: 1, name: "Bảo An", score: 8.5, age: 20 },
    { id: 2, name: "Đức Huy", score: 9.2, age: 19 },
    { id: 3, name: "Gia Hân", score: 7.0, age: 21 },
    { id: 4, name: "Anh Tuấn", score: 8.5, age: 19 },
    { id: 5, name: "Khánh Linh", score: 9.8, age: 20 }
  ];

  const [students, setStudents] = useState(initialStudents);
  const [activeKey, setActiveKey] = useState("score");
  const [activeTab, setActiveTab] = useState("applications");

  const handleSortBy = (key) => {
    setActiveKey(key);
    const sorted = [...initialStudents].sort((a, b) => {
      if (typeof a[key] === "string") return a[key].localeCompare(b[key]);
      return a[key] - b[key];
    });
    setStudents(sorted);
  };

  const algorithmDimensions = [
    {
      title: "Internal Sort vs External Sort",
      subtitle: "Trong Bộ Nhớ RAM vs Dùng File/Đĩa Ngoài",
      icon: HardDrive,
      color: "bg-blue-50 border-blue-200 text-blue-900",
      desc: "Internal sort thực thi toàn bộ trong RAM (dữ liệu vừa vặn bộ nhớ). External sort áp dụng khi dữ liệu khổng lồ phải lưu trên ổ đĩa và tải từng phần vào RAM."
    },
    {
      title: "Iterative vs Recursive",
      subtitle: "Vòng Lặp Tuần Tự vs Đệ Quy Phân Nhánh",
      icon: Cpu,
      color: "bg-teal-50 border-teal-200 text-teal-900",
      desc: "Iterative dùng vòng lặp for/while (Bubble, Insertion, Selection). Recursive dùng lời gọi hàm đệ quy chia để trị (Merge Sort, Quick Sort)."
    },
    {
      title: "Comparison-based vs Non-comparison",
      subtitle: "Dựa Trên So Sánh vs Xử Lý Theo Chữ Số/Đếm",
      icon: SlidersHorizontal,
      color: "bg-amber-50 border-amber-200 text-amber-900",
      desc: "Comparison sort so sánh từng cặp (chặn dưới lý thuyết là O(n log n)). Non-comparison sort (Radix Sort, Counting Sort) đạt O(n) mà không cần so sánh trực tiếp."
    },
    {
      title: "Divide-and-Conquer",
      subtitle: "Kỹ Thuật Chia Để Trị Kinh Điển",
      icon: Layers,
      color: "bg-emerald-50 border-emerald-200 text-emerald-900",
      desc: "Chia mảng lớn thành các mảng con nhỏ hơn, sắp xếp từng mảng con rồi gộp lại để tối ưu hóa chi phí tính toán (Merge Sort, Quick Sort)."
    },
    {
      title: "Best / Worst / Average Bounds",
      subtitle: "Độ Phức Tạp Đa Chiều",
      icon: BarChart2,
      color: "bg-purple-50 border-purple-200 text-purple-900",
      desc: "Đánh giá chi phí thuật toán dưới các trạng thái dữ liệu khác nhau: ngẫu nhiên, đã có thứ tự sẵn, hoặc đảo ngược hoàn toàn."
    }
  ];

  const applications = [
    {
      title: "Tìm kiếm hiệu quả (Efficient Searching)",
      icon: Search,
      badge: "Ứng dụng số 1",
      badgeColor: "bg-emerald-100 text-emerald-800",
      desc: "Khi mảng đã sắp xếp, ta có thể áp dụng Binary Search với tốc độ O(log n) thay vì phải duyệt tuần tự O(n). Ví dụ: từ điển, danh bạ điện thoại, mục lục sách, chỉ mục database."
    },
    {
      title: "Kiểm tra tính duy nhất (Uniqueness Testing)",
      icon: Filter,
      badge: "Giảm từ O(n²) ➔ O(n log n)",
      badgeColor: "bg-blue-100 text-blue-800",
      desc: "Để kiểm tra xem mảng có phần tử trùng nhau hay không, chỉ cần sắp xếp mảng rồi quét 1 lần kiểm tra hai phần tử kề nhau a[i] == a[i+1]."
    },
    {
      title: "Xóa phần tử trùng lặp (Deleting Duplicates)",
      icon: CopyX,
      badge: "Lọc dữ liệu sạch",
      badgeColor: "bg-teal-100 text-teal-800",
      desc: "Sau khi sắp xếp, tất cả các phần tử trùng lặp sẽ nằm liền kề nhau ➔ Dễ dàng loại bỏ các phần tử thừa chỉ trong 1 vòng lặp tuyến tính O(n)."
    },
    {
      title: "Đếm tần suất xuất hiện (Frequency Counting)",
      icon: BarChart2,
      badge: "Thống kê phân phối",
      badgeColor: "bg-amber-100 text-amber-800",
      desc: "Dễ dàng đếm số lần xuất hiện của từng giá trị hoặc tìm phần tử xuất hiện nhiều nhất (Mode) mà không cần dùng cấu trúc băm phức tạp."
    },
    {
      title: "Phép toán tập hợp (Set Operations)",
      icon: Layers,
      badge: "Giao / Hợp / Hiệu O(n)",
      badgeColor: "bg-purple-100 text-purple-800",
      desc: "Tìm giao (Intersection), hợp (Union), hoặc hiệu (Difference) của 2 tập hợp đã sắp xếp bằng kỹ thuật 2 con trỏ (Two Pointers) trong thời gian tuyến tính O(n + m)."
    }
  ];

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl p-5 md:p-7 shadow-sm my-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-5">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-200">
            Mục 0 — Nhập Môn Sắp Xếp
          </span>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-1">
            Tại Sao Phải Học Sorting? Khái Niệm Sort Key &amp; Ứng Dụng Thực Tiễn
          </h3>
          <p className="text-xs text-slate-500">
            Sắp xếp là viên gạch nền tảng của cấu trúc dữ liệu, mở ra sức mạnh cho hàng loạt bài toán xử lý thông tin
          </p>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 font-mono text-xs font-bold self-start sm:self-auto">
          <KeyRound className="w-3.5 h-3.5 text-indigo-600" />
          Khóa Sắp Xếp (Sort Key)
        </div>
      </div>

      {/* Interactive Sort Key Demo Box */}
      <div className="bg-gradient-to-br from-indigo-50/70 via-white to-slate-50 text-slate-800 rounded-3xl p-5 md:p-6 border border-indigo-200 shadow-sm mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-indigo-100 mb-4">
          <div>
            <span className="text-xs font-mono font-bold text-indigo-950 uppercase block">Minh họa trực quan khái niệm "Sort Key":</span>
            <span className="text-xs text-slate-600">
              Chọn tiêu chí (Sort Key) để sắp xếp danh sách sinh viên dưới đây:
            </span>
          </div>

          {/* Sort Key Selector */}
          <div className="flex items-center gap-1.5 bg-slate-100/90 p-1.5 rounded-2xl border border-slate-200">
            <button
              onClick={() => handleSortBy("score")}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition cursor-pointer ${
                activeKey === "score"
                  ? "bg-amber-500 text-white font-black shadow-xs"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
              }`}
            >
              Sort theo Điểm (Score)
            </button>
            <button
              onClick={() => handleSortBy("name")}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition cursor-pointer ${
                activeKey === "name"
                  ? "bg-indigo-600 text-white font-black shadow-xs"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
              }`}
            >
              Sort theo Tên (Name A-Z)
            </button>
            <button
              onClick={() => handleSortBy("age")}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition cursor-pointer ${
                activeKey === "age"
                  ? "bg-teal-600 text-white font-black shadow-xs"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
              }`}
            >
              Sort theo Tuổi (Age)
            </button>
          </div>
        </div>

        {/* Live Sorted Student Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {students.map((st, idx) => (
            <div
              key={st.id}
              className="bg-white border border-indigo-100 p-3.5 rounded-2xl flex flex-col justify-between shadow-xs hover:border-indigo-300 transition animate-fadeIn"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                  #{idx + 1}
                </span>
                <span className="text-xs font-bold text-slate-900">{st.name}</span>
              </div>

              <div className="space-y-1.5 text-xs font-mono">
                <div
                  className={`flex justify-between px-2 py-1 rounded-xl transition ${
                    activeKey === "score" ? "bg-amber-100 text-amber-900 font-bold border border-amber-300" : "text-slate-600 bg-slate-50"
                  }`}
                >
                  <span>Điểm:</span>
                  <span>{st.score}</span>
                </div>
                <div
                  className={`flex justify-between px-2 py-1 rounded-xl transition ${
                    activeKey === "age" ? "bg-teal-100 text-teal-900 font-bold border border-teal-300" : "text-slate-600 bg-slate-50"
                  }`}
                >
                  <span>Tuổi:</span>
                  <span>{st.age}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-[11px] font-mono text-slate-600 pt-3 border-t border-indigo-100 mt-4 flex items-center gap-2 bg-amber-50/80 p-2.5 rounded-2xl border border-amber-200">
          <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
          <span>
            <strong>Sort Key (Khóa sắp xếp)</strong> là thuộc tính/trường dữ liệu được chọn làm tiêu chí so sánh giữa các bản ghi.
          </span>
        </div>
      </div>

      {/* Navigation Tabs for Theory vs Applications */}
      <div className="flex items-center gap-2 mb-4 border-b border-slate-200 pb-2">
        <button
          onClick={() => setActiveTab("applications")}
          className={`px-4 py-2 rounded-2xl text-xs font-mono font-bold transition cursor-pointer ${
            activeTab === "applications"
              ? "bg-white text-indigo-900 border-2 border-indigo-400 shadow-xs"
              : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 border border-transparent"
          }`}
        >
          5 Ứng Dụng Đỉnh Cao Của Sorting
        </button>
        <button
          onClick={() => setActiveTab("dimensions")}
          className={`px-4 py-2 rounded-2xl text-xs font-mono font-bold transition cursor-pointer ${
            activeTab === "dimensions"
              ? "bg-white text-indigo-900 border-2 border-indigo-400 shadow-xs"
              : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 border border-transparent"
          }`}
        >
          5 Chiều Hướng Giải Thuật &amp; Triết Lý Thiết Kế
        </button>
      </div>

      {/* Tab 1: Applications */}
      {activeTab === "applications" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-6 animate-fadeIn">
          {applications.map((app, idx) => {
            const IconComp = app.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 p-4 rounded-2xl flex flex-col justify-between hover:shadow-sm transition"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-2 rounded-xl bg-white text-slate-700 shadow-xs">
                      <IconComp className="w-4 h-4 text-indigo-600" />
                    </div>
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${app.badgeColor}`}>
                      {app.badge}
                    </span>
                  </div>
                  <h4 className="text-xs md:text-sm font-bold text-slate-900 mb-1">{app.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{app.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Tab 2: Dimensions */}
      {activeTab === "dimensions" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-6 animate-fadeIn">
          {algorithmDimensions.map((dim, idx) => {
            const IconComp = dim.icon;
            return (
              <div
                key={idx}
                className={`p-4 rounded-2xl border ${dim.color} flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <IconComp className="w-4 h-4" />
                    <h4 className="text-xs md:text-sm font-bold">{dim.title}</h4>
                  </div>
                  <span className="text-[11px] font-mono opacity-80 block mb-2 font-medium">
                    {dim.subtitle}
                  </span>
                  <p className="text-xs opacity-90 leading-relaxed font-sans">{dim.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Sticky Takeaway Callout */}
      <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-4 flex items-start gap-3">
        <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div className="text-xs text-amber-950 space-y-1">
          <h4 className="font-bold text-amber-900 text-sm">
            ⭐ Quy Tắc Cốt Lõi Cần Nhớ (Mục 0):
          </h4>
          <p className="leading-relaxed">
            • <strong>Sort key</strong> là tiêu chí dùng để so sánh / sắp xếp các phần tử.<br/>
            • <strong>Quy ước toàn bài học:</strong> Tất cả các giải thuật sắp xếp trong bài này đều mặc định xét <strong>sắp xếp tăng dần (Ascending order)</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
