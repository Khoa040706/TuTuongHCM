"use client";
import React, { useState } from "react";
import { GitFork, RefreshCw, Sliders, Pin, ArrowRight } from "lucide-react";

export default function InheritanceGoalsExplorer() {
  const [selectedGoal, setSelectedGoal] = useState(0);

  const goals = [
    {
      id: 0,
      title: "Inheritance & Subclasses",
      desc: "Giới thiệu nguyên lý Kế thừa trong OOP bằng cách tạo lớp con (subclass) từ lớp cha (superclass).",
      icon: <GitFork className="w-5 h-5 text-indigo-500" />,
      colorClass: "from-indigo-500/10 to-indigo-500/5 hover:border-indigo-400 border-indigo-200/60",
      activeColorClass: "bg-indigo-500 text-white shadow-lg shadow-indigo-500/25 border-indigo-500",
      badgeColor: "bg-indigo-100 text-indigo-700",
      visual: (
        <div className="flex flex-col items-center justify-center p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 min-h-[220px]">
          <div className="text-center font-bold text-xs uppercase tracking-widest text-indigo-500 mb-4">// Mô hình hóa phân cấp</div>
          
          <div className="flex flex-col items-center gap-3 w-full max-w-xs">
            {/* Superclass */}
            <div className="px-4 py-2 bg-stone-900 border border-stone-800 rounded-xl text-white text-center w-40 shadow-sm">
              <span className="text-[9px] uppercase tracking-wider block text-stone-400 font-bold">Lớp Cha (Superclass)</span>
              <span className="font-mono text-xs font-bold">Animal</span>
            </div>

            {/* Down arrow */}
            <div className="h-6 w-0.5 bg-indigo-300 relative">
              <div className="absolute -bottom-1 -left-[3px] w-2 h-2 border-r border-b border-indigo-300 transform rotate-45" />
            </div>

            {/* Subclasses */}
            <div className="flex justify-between w-full gap-4">
              <div className="flex-1 px-3 py-2 bg-white border border-indigo-200 rounded-xl text-center shadow-sm hover:scale-105 transition-transform duration-200">
                <span className="text-[8px] uppercase tracking-wider block text-stone-400 font-bold">extends Animal</span>
                <span className="font-mono text-xs font-bold text-indigo-700">Dog</span>
              </div>
              <div className="flex-1 px-3 py-2 bg-white border border-indigo-200 rounded-xl text-center shadow-sm hover:scale-105 transition-transform duration-200">
                <span className="text-[8px] uppercase tracking-wider block text-stone-400 font-bold">extends Animal</span>
                <span className="font-mono text-xs font-bold text-indigo-700">Cat</span>
              </div>
            </div>
          </div>
          
          <p className="text-[10px] text-indigo-650 text-center font-medium mt-4 max-w-sm leading-relaxed">
            Quan hệ <strong>IS-A (Là một)</strong>: <code>Dog</code> <strong>là một</strong> <code>Animal</code>. <code>Dog</code> thừa hưởng toàn bộ biến và hàm của <code>Animal</code>.
          </p>
        </div>
      )
    },
    {
      id: 1,
      title: "Code Reusability",
      desc: "Tối ưu hóa mã nguồn bằng cách chia sẻ các thuộc tính và hành vi chung ở lớp cha, tránh trùng lặp.",
      icon: <RefreshCw className="w-5 h-5 text-violet-500" />,
      colorClass: "from-violet-500/10 to-violet-500/5 hover:border-violet-400 border-violet-200/60",
      activeColorClass: "bg-violet-500 text-white shadow-lg shadow-violet-500/25 border-violet-500",
      badgeColor: "bg-violet-100 text-violet-700",
      visual: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 bg-violet-50/40 border border-violet-100 rounded-2xl min-h-[220px]">
          {/* Before */}
          <div className="p-3 bg-rose-50/50 border border-rose-100 rounded-xl flex flex-col justify-between">
            <div>
              <span className="text-[9px] uppercase tracking-widest font-black text-rose-500 block mb-2">❌ Khi chưa có Kế thừa (Lặp code)</span>
              <pre className="font-mono text-[9px] text-stone-600 bg-white p-2 rounded-lg border border-stone-150 leading-normal">
{`class Dog {
    String name;  // Trùng lặp
    void sleep() {} // Trùng lặp
    void bark() {}
}

class Cat {
    String name;  // Trùng lặp
    void sleep() {} // Trùng lặp
    void meow() {}
}`}
              </pre>
            </div>
            <span className="text-[9px] text-rose-600 mt-2 block font-medium">Lặp lại thuộc tính và phương thức giống nhau ở các class.</span>
          </div>

          {/* After */}
          <div className="p-3 bg-emerald-50/50 border border-emerald-100 rounded-xl flex flex-col justify-between">
            <div>
              <span className="text-[9px] uppercase tracking-widest font-black text-emerald-600 block mb-2">✅ Khi có Kế thừa (Reusability)</span>
              <pre className="font-mono text-[9px] text-stone-700 bg-white p-2 rounded-lg border border-stone-150 leading-normal">
{`class Animal {
    String name;
    void sleep() {}
}

class Dog extends Animal {
    void bark() {} // Chỉ viết hàm đặc trưng
}`}
              </pre>
            </div>
            <span className="text-[9px] text-emerald-600 mt-2 block font-medium">Đóng gói biến chung lên lớp cha, lớp con kế thừa gọn gàng (DRY).</span>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Method Overriding",
      desc: "Cho phép lớp con ghi đè phương thức được thừa hưởng từ lớp cha để thực hiện hành vi chuyên biệt.",
      icon: <Sliders className="w-5 h-5 text-blue-500" />,
      colorClass: "from-blue-500/10 to-blue-500/5 hover:border-blue-400 border-blue-200/60",
      activeColorClass: "bg-blue-500 text-white shadow-lg shadow-blue-500/25 border-blue-500",
      badgeColor: "bg-blue-100 text-blue-700",
      visual: (
        <div className="flex flex-col items-center justify-center p-5 bg-blue-50/40 border border-blue-100 rounded-2xl min-h-[220px] space-y-4">
          <div className="text-center font-bold text-xs uppercase tracking-widest text-blue-500">// Đa hình tại Runtime (Polymorphism)</div>
          
          <div className="flex items-stretch justify-center w-full max-w-md gap-3 text-xs font-mono">
            {/* Superclass Method */}
            <div className="flex-1 p-3 bg-white border border-stone-200 rounded-xl flex flex-col justify-between shadow-sm">
              <span className="text-[8px] uppercase tracking-wider block text-stone-400 font-bold font-sans">Lớp Cha (Animal)</span>
              <pre className="text-[9px] text-stone-500 mt-1 leading-normal">
{`void eat() {
    print("Eating...");
}`}
              </pre>
            </div>

            {/* Override Arrow */}
            <div className="flex flex-col justify-center items-center">
              <ArrowRight className="w-4 h-4 text-blue-400" />
              <span className="text-[8px] font-black text-blue-500 uppercase tracking-widest font-sans mt-1">@Override</span>
            </div>

            {/* Subclass Method */}
            <div className="flex-1 p-3 bg-blue-900 border border-blue-950 rounded-xl flex flex-col justify-between text-white shadow-sm">
              <span className="text-[8px] uppercase tracking-wider block text-blue-300 font-bold font-sans">Lớp Con (Dog)</span>
              <pre className="text-[9px] text-blue-100 mt-1 leading-normal">
{`@Override
void eat() {
    print("Chewing bones...");
}`}
              </pre>
            </div>
          </div>

          <p className="text-[10px] text-blue-650 text-center font-medium max-w-sm leading-relaxed">
            Sử dụng <strong><code>@Override</code></strong> giúp JVM tự động chọn đúng hàm thực thi của đối tượng thực tế tại thời điểm chạy (Runtime).
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-3xl p-5 md:p-6 text-stone-850 select-none shadow-sm relative z-10 my-4">
      <span className="text-[9px] font-black text-stone-400 uppercase tracking-widest block mb-4 border-b pb-2 font-mono">
        // Khám phá mục tiêu bài học tương tác
      </span>

      {/* Grid selector cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
        {goals.map((g) => {
          const isActive = selectedGoal === g.id;
          return (
            <button
              key={g.id}
              onClick={() => setSelectedGoal(g.id)}
              className={`p-4 rounded-2xl border text-left cursor-pointer transition-all duration-200 flex flex-col justify-between bg-gradient-to-br ${
                isActive ? g.activeColorClass : `bg-white ${g.colorClass} hover:-translate-y-1 hover:shadow-sm`
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className={`p-1.5 rounded-lg ${isActive ? "bg-white/20 text-white" : g.badgeColor}`}>
                    {g.icon}
                  </div>
                  <span className={`text-[8px] font-black uppercase tracking-widest ${isActive ? "text-white/60" : "text-stone-400"}`}>
                    Mục tiêu {g.id + 1}
                  </span>
                </div>
                <h3 className={`text-sm font-black font-sans leading-tight ${isActive ? "text-white" : "text-stone-800"}`}>
                  {g.title}
                </h3>
                <p className={`text-[10px] leading-relaxed font-semibold ${isActive ? "text-white/80" : "text-stone-500"}`}>
                  {g.desc}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Visual Display */}
      <div className="animate-in fade-in duration-300">
        {goals[selectedGoal].visual}
      </div>

      {/* Takeaway Panel */}
      <div className="mt-5 bg-stone-900 border border-stone-850 p-4 rounded-2xl text-white flex items-start gap-3 shadow-md">
        <div className="p-2 bg-stone-800 border border-stone-700 rounded-xl text-amber-500 shrink-0">
          <Pin className="w-4 h-4 animate-bounce" />
        </div>
        <div className="text-xs space-y-1">
          <span className="text-[9px] font-black text-stone-500 uppercase tracking-widest block font-mono">// GHI NHỚ CỐT LÕI (KEY TAKEAWAY)</span>
          <p className="font-semibold text-stone-200 leading-relaxed text-sm">
            Kế thừa là trụ cột quan trọng bậc nhất giúp <strong className="text-indigo-400">code gọn hơn</strong>, <strong className="text-violet-400">dễ bảo trì hơn</strong>, và tránh việc lặp đi lặp lại mã nguồn thừa trong thiết kế phần mềm hướng đối tượng Java.
          </p>
        </div>
      </div>
    </div>
  );
}
