"use client";
import React, { useState } from "react";
import { HelpCircle, Sparkles } from "lucide-react";

export default function OopPillarsDashboard() {
  const [activePillar, setActivePillar] = useState("encap"); // encap, inherit, abstract, poly

  const pillars = {
    encap: {
      name: "Encapsulation",
      vnName: "Tính Đóng Gói",
      slogan: "Ẩn thông tin, bảo vệ dữ liệu nội bộ",
      desc: "Gộp dữ liệu (attributes) và hành vi (methods) liên quan vào một lớp duy nhất, che giấu chi tiết cài đặt của thuộc tính (private) và chỉ cho phép thao tác thông qua giao diện công khai (public).",
      code: `public class Account {
    private double balance; // ẩn dữ liệu (private)
    
    // Giao diện public để thao tác an toàn
    public void deposit(double amt) {
        if (amt > 0) {
            balance += amt; 
        }
    }
}`
    },
    inherit: {
      name: "Inheritance",
      vnName: "Tính Kế Thừa",
      slogan: "Tái sử dụng mã nguồn và thiết lập quan hệ",
      desc: "Cho phép một lớp mới (lớp con - subclass) thừa hưởng toàn bộ các thuộc tính và phương thức của lớp đã tồn tại (lớp cha - superclass), giúp loại bỏ sự trùng lặp mã nguồn và tạo ra hệ thống phả hệ lớp hợp lý.",
      code: `public class Animal {
    public void eat() { 
        System.out.println("Đang ăn..."); 
    }
}

// Dog tự động thừa hưởng phương thức eat()
public class Dog extends Animal {
    public void bark() { 
        System.out.println("Gâu gâu!"); 
    } 
}`
    },
    abstract: {
      name: "Abstraction",
      vnName: "Tính Trừu Tượng",
      slogan: "Ẩn độ phức tạp, tập trung vào đặc tả",
      desc: "Tập trung vào các khía cạnh cốt lõi của đối tượng (CÁI GÌ cần làm) và ẩn đi các chi tiết cài đặt thuật toán không cần thiết (LÀM NHƯ THẾ NÀO). Người dùng tương tác thông qua các phương thức đại diện mà không cần biết logic bên dưới.",
      code: `// Định nghĩa hành vi (Cái gì cần làm)
public abstract class Device {
    public abstract void turnOn();
}

// Cài đặt chi tiết được ẩn kín trong lớp con
public class TV extends Device {
    public void turnOn() {
        // Logic kích hoạt bảng mạch phức tạp
    }
}`
    },
    poly: {
      name: "Polymorphism",
      vnName: "Tính Đa Hình",
      slogan: "Một tên gọi, nhiều hình thức thể hiện",
      desc: "Cho phép một phương thức duy nhất thực thi theo nhiều cách khác nhau tùy thuộc vào kiểu đối tượng thực tế gọi phương thức đó tại thời điểm chạy (Runtime dynamic binding).",
      code: `// Cùng một câu lệnh s.draw()
Shape s1 = new Circle();
Shape s2 = new Square();

s1.draw(); // Thực tế vẽ hình Tròn
s2.draw(); // Thực tế vẽ hình Vuông`
    }
  };

  const current = pillars[activePillar];

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-3xl p-4 md:p-6 my-6 shadow-sm font-sans text-stone-850">
      
      {/* Header */}
      <div className="border-b border-stone-200 pb-3 mb-5">
        <span className="bg-amber-100 text-amber-800 text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md">Kiến thức nền tảng bắt buộc thuộc</span>
        <h4 className="text-base font-extrabold text-stone-900 mt-1">
          🏛️ 4 Trụ Cột Cốt Lỗi Của Lập Trình Hướng Đối Tượng (OOP)
        </h4>
        <p className="text-xs text-stone-500 mt-1">
          Nhấp chọn từng trụ cột để xem định nghĩa, cấu trúc code minh họa và sơ đồ khái niệm trực quan tương ứng.
        </p>
      </div>

      {/* Pillar Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 mb-6 select-none">
        {Object.keys(pillars).map((key) => {
          const item = pillars[key];
          const isActive = activePillar === key;
          return (
            <button
              key={key}
              onClick={() => setActivePillar(key)}
              className={`p-4 border rounded-2xl cursor-pointer text-center transition-all flex flex-col justify-between items-center ${
                isActive
                  ? "border-amber-500 bg-amber-50 shadow-sm scale-[1.02] border-2"
                  : "border-stone-250 bg-white hover:border-stone-400 hover:bg-stone-50"
              }`}
            >
              <div className="text-[9px] text-stone-400 font-bold uppercase tracking-wider">{item.name}</div>
              <div className={`text-xs font-black mt-1 ${isActive ? "text-amber-950" : "text-stone-800"}`}>
                {item.vnName}
              </div>
              <span className={`inline-block mt-2 w-1.5 h-1.5 rounded-full ${isActive ? "bg-amber-500" : "bg-transparent"}`} />
            </button>
          );
        })}
      </div>

      {/* Detail Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* Visual Graphic Display (6 cols - BIGGER) */}
        <div className="lg:col-span-6 bg-[#151413] border border-stone-850 rounded-2xl p-5 text-stone-350 flex flex-col justify-between shadow-md select-none min-h-[280px]">
          <div className="text-[10px] text-stone-500 uppercase font-black tracking-wider mb-4">Sơ đồ trực quan khái niệm</div>

          {/* Graphic Renderings based on selection */}
          <div className="flex-1 flex items-center justify-center py-4">
            {activePillar === "encap" && (
              /* Bigger Capsule graphic with lock/key icons */
              <div className="relative border-4 border-amber-500 w-[240px] h-[120px] rounded-full flex items-center justify-around bg-amber-950/15 px-4 shadow-[inset_0_0_12px_rgba(245,158,11,0.15)] transition-all duration-300">
                {/* Left side: Private Data with lock */}
                <div className="text-center space-y-1 z-10">
                  <div className="text-rose-400 text-base">🔒</div>
                  <div className="text-[11px] font-black text-rose-400 uppercase tracking-wider">Private</div>
                  <div className="text-[10px] font-mono text-stone-300 bg-stone-900 px-2 py-0.5 rounded border border-stone-850 mt-1">balance</div>
                </div>
                
                {/* Vertical Divider */}
                <div className="w-[2px] h-[75%] bg-amber-500/40 relative">
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#151413] text-[9px] px-1 text-amber-500 font-bold border border-amber-500/20 rounded">lớp</span>
                </div>
                
                {/* Right side: Public Interface with key */}
                <div className="text-center space-y-1 z-10">
                  <div className="text-emerald-400 text-base">🔑</div>
                  <div className="text-[11px] font-black text-emerald-400 uppercase tracking-wider">Public</div>
                  <div className="text-[10px] font-mono text-stone-300 bg-stone-900 px-2 py-0.5 rounded border border-stone-850 mt-1">deposit()</div>
                </div>

                {/* Outer Capsule Ring label */}
                <div className="absolute bottom-2.5 w-full text-center text-[9px] text-amber-500/60 font-mono tracking-widest font-black uppercase">CAPSULE BẢO VỆ</div>
              </div>
            )}

            {activePillar === "inherit" && (
              /* Bigger Inheritance nodes list with clear tree */
              <div className="flex flex-col items-center gap-4 font-mono text-xs text-stone-300 w-full max-w-[280px]">
                {/* Parent */}
                <div className="w-[200px] border border-sky-600 bg-sky-950/20 p-3 rounded-xl text-center shadow-lg relative">
                  <span className="absolute -top-2.5 left-4 bg-sky-700 text-white text-[8px] font-black px-1.5 py-0.5 rounded uppercase">Superclass</span>
                  <div className="font-extrabold text-sky-400">Class Animal (Cha)</div>
                  <div className="text-[9px] text-stone-400 mt-1 bg-stone-950/40 py-1 px-2 rounded inline-block">+ eat(): void</div>
                </div>
                
                {/* extends arrow */}
                <div className="flex flex-col items-center select-none">
                  <div className="text-amber-500 font-black animate-pulse">▲</div>
                  <div className="text-[9px] text-stone-500 font-sans font-bold">extends (kế thừa)</div>
                </div>

                {/* Child */}
                <div className="w-[200px] border border-purple-600 bg-purple-950/20 p-3 rounded-xl text-center shadow-lg relative">
                  <span className="absolute -top-2.5 left-4 bg-purple-700 text-white text-[8px] font-black px-1.5 py-0.5 rounded uppercase">Subclass</span>
                  <div className="font-extrabold text-purple-400">Class Dog (Con)</div>
                  <div className="flex justify-center gap-1.5 mt-1.5 text-[9px] text-stone-400">
                    <span className="bg-sky-900/60 text-sky-300 px-1.5 py-0.5 rounded border border-sky-800/40">eat() [Thừa hưởng]</span>
                    <span className="bg-purple-900/60 text-purple-300 px-1.5 py-0.5 rounded border border-purple-800/40">+ bark()</span>
                  </div>
                </div>
              </div>
            )}

            {activePillar === "abstract" && (
              /* Bigger Remote control to television engine graphic */
              <div className="flex flex-col md:flex-row items-center gap-6 font-mono text-[10px] text-stone-300 w-full justify-center px-4">
                {/* Remote Interface */}
                <div className="border-2 border-amber-500 bg-amber-950/10 p-3.5 rounded-2xl text-center shadow-lg w-[140px] relative">
                  <span className="absolute -top-2.5 left-3 bg-amber-600 text-white text-[8px] font-black px-1.5 py-0.5 rounded uppercase">Specification</span>
                  <div className="font-extrabold text-amber-400 mb-2">Remote (Giao diện)</div>
                  <div className="bg-[#121110] border border-stone-850 p-2 rounded-xl flex flex-col gap-1.5">
                    <button className="bg-rose-600/80 hover:bg-rose-700 text-white px-2 py-1 rounded text-[8px] font-black tracking-wider">POWER ON</button>
                    <button className="bg-stone-800 text-stone-400 px-2 py-0.5 rounded text-[8px]">VOL +</button>
                  </div>
                </div>

                {/* Arrow */}
                <div className="text-amber-500 text-lg font-black rotate-90 md:rotate-0">➔</div>

                {/* Complex Hidden Logic */}
                <div className="border border-stone-800 bg-stone-900/40 p-3.5 rounded-2xl text-center opacity-70 w-[140px] relative">
                  <span className="absolute -top-2.5 left-3 bg-stone-700 text-stone-300 text-[8px] font-black px-1.5 py-0.5 rounded uppercase">Implementation</span>
                  <div className="font-bold text-stone-400 mb-2">TV (Ẩn chi tiết)</div>
                  <div className="text-[8px] text-stone-400 space-y-1 font-mono text-left bg-stone-950 p-1.5 rounded border border-stone-950">
                    <div>1. Nhận tín hiệu hồng ngoại</div>
                    <div>2. Kích hoạt nguồn áp cao</div>
                    <div>3. Giải mã luồng video...</div>
                  </div>
                </div>
              </div>
            )}

            {activePillar === "poly" && (
              /* Bigger Polymorphic shape dispatcher graphic */
              <div className="flex flex-col items-center gap-3 font-mono text-xs text-stone-300 w-full max-w-[280px]">
                {/* Caller */}
                <div className="border border-stone-750 bg-stone-900 px-4 py-2 rounded-xl shadow text-stone-200 text-center font-bold relative">
                  <span className="absolute -top-2 bg-stone-700 text-[8px] font-black px-1.5 py-0.5 rounded uppercase left-4">Single Command</span>
                  s.draw()
                </div>

                {/* Branches */}
                <div className="flex gap-10 items-stretch mt-1 relative w-full justify-center">
                  {/* Left branch */}
                  <div className="flex flex-col items-center text-center">
                    <div className="text-stone-650 text-xs mb-1">s = new Circle()</div>
                    <div className="w-10 h-10 rounded-full border-2 border-emerald-500 flex items-center justify-center bg-emerald-950/20 text-emerald-450 font-black shadow-md">
                      ●
                    </div>
                    <span className="text-[9px] mt-1 text-stone-500 font-sans font-bold">Vẽ hình tròn</span>
                  </div>

                  {/* Right branch */}
                  <div className="flex flex-col items-center text-center">
                    <div className="text-stone-650 text-xs mb-1">s = new Square()</div>
                    <div className="w-10 h-10 border-2 border-purple-500 flex items-center justify-center bg-purple-950/20 text-purple-450 font-black shadow-md">
                      ■
                    </div>
                    <span className="text-[9px] mt-1 text-stone-500 font-sans font-bold">Vẽ hình vuông</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="text-xs text-stone-400 mt-4 border-t border-stone-850 pt-3 text-center font-sans font-bold leading-relaxed">
            {activePillar === "encap" && "🔒 Dữ liệu được khóa chặt bên trong lớp, chỉ được phép sửa đổi/truy cập thông qua các hàm public kiểm duyệt."}
            {activePillar === "inherit" && "🧬 Lớp Dog (Subclass) tự động thừa hưởng tất cả thuộc tính/phương thức của lớp Animal (Superclass) mà không cần viết lại."}
            {activePillar === "abstract" && "🎮 Người dùng chỉ cần sử dụng các nút trên Remote (Giao diện) mà không cần hiểu các mạch TV vận hành phức tạp bên dưới."}
            {activePillar === "poly" && "🎭 Cùng một câu lệnh s.draw() nhưng sinh ra hành vi vẽ hình tròn hay hình vuông khác nhau tùy thuộc vào đối tượng thực tế."}
          </div>
        </div>

        {/* Java code snippet (6 cols - BIGGER) */}
        <div className="lg:col-span-6 flex flex-col justify-between gap-4">
          
          {/* Explanation text */}
          <div className="bg-white border border-stone-200 rounded-2xl p-4 shadow-xs text-xs leading-relaxed text-stone-750">
            <span className="font-extrabold text-stone-850 text-sm block mb-1">
              ✏️ {current.vnName} ({current.name})
            </span>
            <div className="text-amber-700 font-bold mb-2 italic">"{current.slogan}"</div>
            <p className="text-stone-600 font-sans text-xs">
              {current.desc}
            </p>
          </div>

          {/* Java Code block */}
          <div className="bg-[#1e1d1a] border border-[#2a2926] rounded-2xl p-4 text-stone-300 font-mono text-xs shadow-md leading-relaxed flex-1 flex flex-col justify-between">
            <div>
              <div className="text-[9px] text-stone-500 uppercase font-black tracking-wider mb-2 font-sans">Ví dụ code Java minh họa</div>
              <pre className="whitespace-pre overflow-x-auto bg-[#121110] p-3 rounded-xl border border-stone-850 text-xs leading-normal text-stone-300 font-mono">
                {current.code}
              </pre>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
