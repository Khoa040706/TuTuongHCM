"use client";
import React, { useState } from "react";
import { Cpu, RefreshCcw, CheckSquare, Calculator, Compass, ChevronDown, ChevronUp, Sparkles, Layers } from "lucide-react";

export default function StackApplicationsGrid() {
  const [expandedId, setExpandedId] = useState("callstack");

  const apps = [
    {
      id: "callstack",
      title: "1. Gọi Hàm (Calling a Function)",
      icon: Cpu,
      color: "bg-blue-600",
      lightBg: "bg-blue-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-700",
      shortDesc: "Lưu trữ trạng thái tính toán & địa chỉ trả về trước khi nhảy tới hàm con.",
      detailText: "Khi hàm A gọi hàm B, hệ thống đẩy Stack Frame của A vào Call Stack. Khi B thực thi xong, hệ thống pop Stack Frame của A ra để khôi phục con trỏ lệnh và tiếp tục chạy."
    },
    {
      id: "recursion",
      title: "2. Đệ Quy (Recursion)",
      icon: RefreshCcw,
      color: "bg-indigo-600",
      lightBg: "bg-indigo-50",
      borderColor: "border-indigo-200",
      textColor: "text-indigo-700",
      shortDesc: "Mỗi lời gọi hàm đệ quy tạo ra 1 tầng Stack Frame mới.",
      detailText: "Đệ quy bản chất là sử dụng Call Stack hệ thống. Nếu đệ quy vô tận hoặc không có điều kiện dừng, Stack sẽ bị tràn bộ nhớ dẫn đến lỗi StackOverflowError kinh điển."
    },
    {
      id: "brackets",
      title: "3. Khớp Dấu Ngoặc (Matching Parentheses)",
      icon: CheckSquare,
      color: "bg-cyan-600",
      lightBg: "bg-cyan-50",
      borderColor: "border-cyan-200",
      textColor: "text-cyan-700",
      shortDesc: "Kiểm tra cú pháp chuỗi ngoặc mở/đóng trong trình biên dịch (Compiler).",
      detailText: "Gặp ngoặc mở (, [, { -> push vào Stack. Gặp ngoặc đóng ), ], } -> pop ngoặc đỉnh ra so sánh. Nếu không khớp hoặc Stack rỗng -> Lỗi cú pháp."
    },
    {
      id: "postfix",
      title: "4. Tính Biểu Thức Số Học (Postfix Calculation)",
      icon: Calculator,
      color: "bg-purple-600",
      lightBg: "bg-purple-50",
      borderColor: "border-purple-200",
      textColor: "text-purple-700",
      shortDesc: "Chuyển Infix -> Postfix và tính giá trị biểu thức hậu tố.",
      detailText: "Trong máy tính, biểu thức như `a + b * c` được chuyển thành ký hiệu hậu tố `a b c * +`. Duyệt từ trái qua phải: gặp toán hạng -> push; gặp toán tử -> pop 2 toán hạng ra tính rồi push lại."
    },
    {
      id: "maze",
      title: "5. Duyệt Mê Cung (Traversing a Maze)",
      icon: Compass,
      color: "bg-emerald-600",
      lightBg: "bg-emerald-50",
      borderColor: "border-emerald-200",
      textColor: "text-emerald-700",
      shortDesc: "Quay lùi (Backtracking) để tìm đường thoát khỏi mê cung.",
      detailText: "Mỗi bước đi đẩy vị trí ô vào Stack. Khi đi vào đường bế tắc (dead end), thuật toán pop vị trí khỏi Stack để lùi lại ô ngã ba gần nhất và thử hướng đi khác."
    }
  ];

  return (
    <div className="w-full bg-white rounded-2xl border border-purple-200/80 shadow-xl p-5 md:p-6 my-6 font-sans">
      {/* Header */}
      <div className="pb-4 mb-4 border-b border-purple-100">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-purple-100 text-purple-700 text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full uppercase">
                Ứng dụng Thực tế §1.3
              </span>
              <span className="text-xs text-slate-500 font-mono">5 Classic Uses of Stack</span>
            </div>
            <h3 className="text-base md:text-lg font-bold text-slate-900 mt-1 flex items-center gap-2">
              <Layers className="w-5 h-5 text-purple-600" />
              5 Ứng Dụng Thực Tế Kinh Điển Của Cấu Trúc Dữ Liệu Stack
            </h3>
          </div>
        </div>
      </div>

      {/* Grid of 5 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        {apps.map((app) => {
          const IconComp = app.icon;
          const isExpanded = expandedId === app.id;

          return (
            <div
              key={app.id}
              onClick={() => setExpandedId(isExpanded ? null : app.id)}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                isExpanded
                  ? `${app.borderColor} ${app.lightBg} shadow-md ring-2 ring-purple-300`
                  : "border-slate-200 bg-white hover:bg-slate-50 shadow-sm"
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2.5">
                  <div className={`p-2 rounded-lg text-white ${app.color}`}>
                    <IconComp className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">{app.title}</h4>
                </div>
                {isExpanded ? (
                  <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                )}
              </div>

              <p className="text-xs text-slate-600 font-sans leading-relaxed mb-2">{app.shortDesc}</p>

              {isExpanded && (
                <div className="mt-3 pt-3 border-t border-slate-200/80 text-xs text-slate-700 font-sans leading-relaxed bg-white/80 p-3 rounded-lg border border-slate-100">
                  <span className="font-bold text-slate-900 block mb-1">Cơ chế hoạt động chi tiết:</span>
                  {app.detailText}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
