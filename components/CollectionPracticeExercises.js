"use client";
import React from "react";
import { BookOpen, AlertCircle, BarChart2, Hash, Layers, Package, MapPin, Shuffle } from "lucide-react";

export default function CollectionPracticeExercises() {
  const exercises = [
    {
      id: "#12",
      title: "Basic Statistics",
      desc: "Tính trung bình cộng (mean) và độ lệch chuẩn (standard deviation) của một dãy số nguyên.",
      difficulty: "Cơ bản",
      diffColor: "bg-emerald-50 border-emerald-200 text-emerald-700",
      struct: "primitive array",
      icon: <BarChart2 className="w-5 h-5 text-emerald-600" />
    },
    {
      id: "#13",
      title: "Missing Digits",
      desc: "Tìm các chữ số (0-9) còn thiếu không xuất hiện trong một số nguyên dương cho trước.",
      difficulty: "Cơ bản",
      diffColor: "bg-emerald-50 border-emerald-200 text-emerald-700",
      struct: "primitive array (boolean)",
      icon: <Hash className="w-5 h-5 text-emerald-600" />
    },
    {
      id: "#14",
      title: "Missing Digits v2",
      desc: "Giải lại bài tập tìm chữ số bị thiếu (#13) nhưng sử dụng lớp Vector để lưu trữ kết quả.",
      difficulty: "Cơ bản",
      diffColor: "bg-emerald-50 border-emerald-200 text-emerald-700",
      struct: "Vector",
      icon: <Layers className="w-5 h-5 text-indigo-600" />
    },
    {
      id: "#15",
      title: "Row & Column Sums",
      desc: "Nhập một ma trận số nguyên hai chiều, sau đó tính tổng của từng dòng và từng cột.",
      difficulty: "Trung bình",
      diffColor: "bg-amber-50 border-amber-200 text-amber-700",
      struct: "Mảng 2 chiều (2D array)",
      icon: <Layers className="w-5 h-5 text-amber-600" />
    },
    {
      id: "#16",
      title: "Set Containment",
      desc: "Kiểm tra tập hợp con: Xác định xem toàn bộ phần tử của tập hợp A có nằm trong tập hợp B hay không.",
      difficulty: "Nâng cao",
      diffColor: "bg-rose-50 border-rose-200 text-rose-700",
      struct: "ArrayList & Custom Class",
      icon: <Package className="w-5 h-5 text-rose-600" />
    },
    {
      id: "#17",
      title: "Nearest Points",
      desc: "Tìm cặp điểm có khoảng cách ngắn nhất trong không gian hai chiều từ danh sách các điểm cho trước.",
      difficulty: "Nâng cao",
      diffColor: "bg-rose-50 border-rose-200 text-rose-700",
      struct: "ArrayList & Point class",
      icon: <MapPin className="w-5 h-5 text-rose-600" />
    },
    {
      id: "Bonus",
      title: "Detecting Duplicates",
      desc: "Sinh ngẫu nhiên các số nguyên không trùng lặp trong một khoảng cho trước và đếm số lần sinh bị trùng.",
      difficulty: "Trung bình",
      diffColor: "bg-amber-50 border-amber-200 text-amber-700",
      struct: "ArrayList & Random / Math.random()",
      icon: <Shuffle className="w-5 h-5 text-amber-600" />
    }
  ];

  return (
    <div className="w-full bg-white border border-stone-200/80 rounded-3xl p-6 text-stone-850 shadow-lg my-6 overflow-hidden relative">
      <div className="bg-gradient-to-r from-sky-500 to-indigo-500 h-1.5 absolute top-0 left-0 right-0" />

      <h4 className="text-base md:text-lg font-black text-stone-900 flex items-center gap-2 mb-2">
        <BookOpen className="w-5 h-5 text-indigo-600" />
        <span>Danh Sách Bài Tập Thực Hành (Practice Exercises)</span>
      </h4>
      <p className="text-xs text-stone-500 mb-6">
        Chi tiết đề bài thực hành chương 10 từ slide bài giảng chính thức của trường.
      </p>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {exercises.map((ex, idx) => (
          <div
            key={idx}
            className="p-4 rounded-2xl border border-stone-200 hover:border-stone-300 bg-white hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-stone-50 border border-stone-200/60 shadow-sm">
                    {ex.icon}
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-400 font-mono font-bold block">{ex.id}</span>
                    <span className="font-bold text-stone-850 text-xs">{ex.title}</span>
                  </div>
                </div>
                <span className={`text-[8px] font-bold px-2 py-0.5 border rounded-lg ${ex.diffColor}`}>
                  {ex.difficulty}
                </span>
              </div>
              <p className="text-xs text-stone-500 leading-relaxed font-normal mb-4">
                {ex.desc}
              </p>
            </div>

            <div className="pt-2.5 border-t border-stone-100 flex items-center justify-between text-[9px] font-mono text-stone-400">
              <span>Cấu trúc sử dụng:</span>
              <span className="bg-stone-50 border border-stone-200 text-stone-650 px-2 py-0.5 rounded-md font-bold">
                {ex.struct}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Alert boxes */}
      <div className="bg-rose-50/60 border border-rose-250/60 rounded-2xl p-4 flex gap-3 items-start shadow-sm">
        <AlertCircle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
        <div>
          <span className="text-xs font-bold text-rose-900 font-mono uppercase tracking-wider block">
            ⚠️ Lưu Ý Quan Trọng khi thi thực hành
          </span>
          <p className="text-xs text-rose-700 mt-1 leading-relaxed">
            Đối với <strong>Bài #13 (Missing Digits)</strong>, đề bài yêu cầu bắt buộc dùng <strong>mảng thuần (primitive array)</strong>, cụ thể là kiểu mảng <code>boolean[]</code> để đánh dấu sự xuất hiện của chữ số. Không được dùng Vector hay ArrayList để đảm bảo yêu cầu tối ưu hóa cấu trúc dữ liệu thô.
          </p>
        </div>
      </div>
    </div>
  );
}
