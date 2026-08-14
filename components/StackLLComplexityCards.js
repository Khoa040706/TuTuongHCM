"use client";

import React from "react";
import { Zap, HardDrive, CheckCircle2, BookmarkCheck } from "lucide-react";

export default function StackLLComplexityCards() {
  const operations = [
    { name: "push(o)", time: "O(1)", desc: "Thao tác chèn ở đầu list (head), không cần dịch chuyển phần tử." },
    { name: "pop()", time: "O(1)", desc: "Thao tác xóa nút đầu list (head), cập nhật head = head.next." },
    { name: "peek()", time: "O(1)", desc: "Đọc giá trị nút đầu list (head.getElement()), không sửa đổi list." },
    { name: "empty()", time: "O(1)", desc: "Kiểm tra num_nodes == 0 hoặc head == null." }
  ];

  return (
    <div className="w-full bg-white text-slate-800 border border-slate-200/80 rounded-2xl shadow-lg p-5 md:p-6 my-8 font-sans">
      {/* Title */}
      <div className="flex items-center gap-3 pb-4 border-b border-slate-200 mb-6">
        <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0 shadow-sm">
          <Zap className="w-5 h-5 text-amber-600" />
        </div>
        <h3 className="text-xl font-extrabold text-slate-900">3.7 Đánh giá Độ phức tạp (Time / Space Complexity)</h3>
      </div>

      {/* Grid Time Complexity Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {operations.map((op, idx) => (
          <div
            key={idx}
            className="bg-slate-50 border border-slate-200 rounded-xl p-4 hover:border-emerald-500 hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <span className="bg-slate-200/80 text-slate-800 font-mono font-bold text-xs px-2 py-1 rounded">
                  {op.name}
                </span>
                <span className="bg-emerald-100 text-emerald-800 font-mono font-extrabold text-xs px-2.5 py-1 rounded border border-emerald-300 shrink-0">
                  {op.time}
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{op.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Space Complexity Card */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-indigo-300 transition-all">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center shrink-0 text-indigo-600">
            <HardDrive className="w-5 h-5 text-indigo-600" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900">Space Complexity (Bộ nhớ)</h4>
            <p className="text-xs text-slate-600">Tỷ lệ thuận với số lượng phần tử N lưu trữ trong Stack.</p>
          </div>
        </div>
        <span className="text-sm font-extrabold text-indigo-700 font-mono bg-indigo-50 px-3 py-1.5 rounded-xl border border-indigo-200 self-start sm:self-auto shadow-sm">
          Space: O(n)
        </span>
      </div>

      {/* Summary Box "📌 Cần nhớ" */}
      <div className="bg-amber-50/60 border border-amber-200/80 rounded-xl p-5 relative overflow-hidden shadow-sm">
        <div className="flex items-center gap-2 mb-3 text-amber-700 font-bold text-sm">
          <BookmarkCheck className="w-4 h-4 text-amber-600" /> 📌 Cần nhớ (Key Takeaways)
        </div>

        <ul className="space-y-2.5 text-xs text-slate-700 leading-relaxed">
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>
              <strong className="text-slate-900">Top của Stack = Front (Đầu) của Linked List:</strong> Mọi thao tác push, pop, peek đều thực hiện ở đầu danh sách liên kết để đạt độ phức tạp <code className="bg-emerald-100 text-emerald-800 font-mono font-bold px-1.5 py-0.5 rounded border border-emerald-300">O(1)</code>.
            </span>
          </li>

          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>
              <strong className="text-slate-900">2 cách cài đặt bằng Linked List:</strong> <span className="text-purple-700 font-semibold bg-purple-100/80 px-1.5 py-0.5 rounded border border-purple-200">Composition</span> (StackLL — chứa list bên trong) và <span className="text-indigo-700 font-semibold bg-indigo-100/80 px-1.5 py-0.5 rounded border border-indigo-200">Inheritance</span> (StackLLE — kế thừa list).
            </span>
          </li>

          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>
              <strong className="text-slate-900">Ưu điểm thiết kế:</strong> <span className="text-purple-700 font-semibold bg-purple-100/80 px-1.5 py-0.5 rounded border border-purple-200">Composition</span> thường an toàn hơn nhờ ẩn hoàn toàn chi tiết cài đặt (bảo vệ tính đóng gói), trong khi <span className="text-indigo-700 font-semibold bg-indigo-100/80 px-1.5 py-0.5 rounded border border-indigo-200">Inheritance</span> giúp mã nguồn ngắn gọn hơn.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

