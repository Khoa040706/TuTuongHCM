"use client";
import React, { useState } from "react";
import { Network, HelpCircle, Info, ShieldAlert, Award } from "lucide-react";

export default function CollectionSummaryMindMap() {
  const [activeBranch, setActiveBranch] = useState(null);

  const branches = [
    {
      id: "array",
      title: "1. Mảng thô (Array)",
      color: "border-amber-400 text-amber-700 bg-amber-50/55",
      badge: "Cố định",
      details: [
        "Kích thước cố định (fixed size) ngay khi khai báo, không thể co giãn.",
        "Truy cập cực nhanh O(1) qua chỉ số index.",
        "Trong C: Không tự lưu size (phải truyền kèm biến size).",
        "Trong Java: Có thuộc tính .length để lấy kích thước."
      ]
    },
    {
      id: "generics",
      title: "2. Generics (Kiểu chung)",
      color: "border-indigo-400 text-indigo-700 bg-indigo-50/55",
      badge: "Tham số hóa",
      details: [
        "Khai báo dạng <E> để tham số hóa kiểu dữ liệu cho class.",
        "Giúp phát hiện lỗi sai kiểu dữ liệu ngay khi biên dịch (compile-time).",
        "Không dùng được với kiểu nguyên thủy (primitive) trực tiếp."
      ]
    },
    {
      id: "vector",
      title: "3. Lớp Vector",
      color: "border-rose-400 text-rose-700 bg-rose-50/55",
      badge: "Đồng bộ",
      details: [
        "Mở rộng tự động gấp đôi (100%) dung lượng khi bị đầy.",
        "Mọi phương thức được đồng bộ hóa (synchronized).",
        "An toàn đa luồng (Thread-safe) nhưng chạy chậm."
      ]
    },
    {
      id: "arraylist",
      title: "4. Lớp ArrayList",
      color: "border-teal-400 text-teal-700 bg-teal-50/55",
      badge: "Không đồng bộ",
      details: [
        "Mở rộng tự động thêm 50% dung lượng khi bị đầy.",
        "Không đồng bộ hóa (non-synchronized).",
        "Chạy nhanh hơn Vector 20%-30% nhưng không an toàn đa luồng."
      ]
    }
  ];

  return (
    <div className="w-full bg-white border border-stone-200/80 rounded-3xl p-6 text-stone-850 shadow-lg my-6 overflow-hidden relative">
      <div className="bg-gradient-to-r from-indigo-500 to-teal-500 h-1.5 absolute top-0 left-0 right-0" />

      <h4 className="text-base md:text-lg font-black text-stone-900 flex items-center gap-2 mb-2">
        <Network className="w-5 h-5 text-indigo-600" />
        <span>Sơ Đồ Tư Duy: Tổng Kết Chương Collection of Data</span>
      </h4>
      <p className="text-xs text-stone-500 mb-6">
        Rê chuột (hover) vào từng nhánh khái niệm bên dưới để xem tóm tắt chi tiết các đặc tính trọng tâm cần nắm vững.
      </p>

      {/* Mind Map Tree */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {branches.map((branch) => {
          const isActive = activeBranch === branch.id;
          return (
            <div
              key={branch.id}
              onMouseEnter={() => setActiveBranch(branch.id)}
              onMouseLeave={() => setActiveBranch(null)}
              className={`p-4 rounded-2xl border transition-all duration-300 shadow-sm ${branch.color} ${
                isActive ? "scale-[1.02] shadow-md ring-1 ring-stone-200" : ""
              }`}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-xs uppercase tracking-wider">{branch.title}</span>
                <span className="text-[9px] font-mono font-bold px-2 py-0.5 bg-white border border-stone-200 rounded-lg">
                  {branch.badge}
                </span>
              </div>
              
              <ul className="space-y-1.5 text-xs text-stone-600 font-sans list-disc pl-4 mt-2 leading-relaxed">
                {branch.details.map((detail, dIdx) => (
                  <li key={dIdx}>{detail}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Exam Gotchas (Các điểm bẫy thi trắc nghiệm) */}
      <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block mb-3 font-mono">
        💡 Ba Cạm Bẫy Kinh Điển Trong Đề Thi Java
      </span>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Gotcha 1 */}
        <div className="bg-amber-50/40 border border-amber-200/60 rounded-2xl p-4 shadow-sm flex gap-3 items-start">
          <HelpCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <span className="text-[11px] font-bold text-amber-900 font-mono">length vs length() vs size()</span>
            <p className="text-[11px] text-amber-805 mt-1 leading-relaxed">
              • <code className="bg-white px-1 border rounded text-[10px]">arr.length</code>: Thuộc tính của mảng thô (không có dấu ngoặc).
              <br />
              • <code className="bg-white px-1 border rounded text-[10px]">str.length()</code>: Phương thức của lớp String.
              <br />
              • <code className="bg-white px-1 border rounded text-[10px]">list.size()</code>: Phương thức của Vector/ArrayList.
            </p>
          </div>
        </div>

        {/* Gotcha 2 */}
        <div className="bg-emerald-50/40 border border-emerald-200/60 rounded-2xl p-4 shadow-sm flex gap-3 items-start">
          <Award className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <span className="text-[11px] font-bold text-emerald-900 font-mono">Autoboxing & Unboxing</span>
            <p className="text-[11px] text-emerald-805 mt-1 leading-relaxed">
              ArrayList và Vector chỉ chứa <strong>Object</strong>. Khi truyền kiểu nguyên thủy như <code className="bg-white px-1 border rounded text-[10px]">int</code>, Java tự động chuyển thành đối tượng <code className="bg-white px-1 border rounded text-[10px]">Integer</code> (Autoboxing) và ngược lại khi lấy ra (Unboxing).
            </p>
          </div>
        </div>

        {/* Gotcha 3 */}
        <div className="bg-rose-50/40 border border-rose-200/60 rounded-2xl p-4 shadow-sm flex gap-3 items-start">
          <ShieldAlert className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
          <div>
            <span className="text-[11px] font-bold text-rose-900 font-mono">NullPointerException</span>
            <p className="text-[11px] text-rose-805 mt-1 leading-relaxed">
              Khi khai báo mảng Object (ví dụ: <code className="bg-white px-1 border rounded text-[10px]">Point[] pts = new Point[10];</code>), Java chỉ khởi tạo 10 ô tham chiếu trỏ tới <code className="bg-white px-1 border rounded text-[10px]">null</code>. Nếu gọi phương thức ngay sẽ bị lỗi NullPointerException. Bạn phải khởi tạo từng phần tử trước!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
