"use client";
import React, { useState } from "react";
import { Lock, HelpCircle, ShieldAlert, Cpu, Award } from "lucide-react";

export default function ExceptionsJavaMechanism() {
  const [activeNode, setActiveNode] = useState(null);

  const flowchartNodes = {
    err: "Điểm khởi đầu: Khi có lỗi phát sinh trong bộ nhớ RAM lúc chạy chương trình.",
    raw_exit: "Cách xử lý thô sơ: Gọi System.exit(code) hoặc sập luồng, chương trình biến mất khỏi RAM ngay lập tức.",
    crash: "Hậu quả: Ứng dụng đột ngột sập, người dùng bị đẩy ra ngoài, dữ liệu chưa lưu sẽ bị mất.",
    indicate: "1. Exception Indication (Báo hiệu): JVM hoặc code tự động tạo ra một đối tượng Exception chứa thông tin lỗi và ném đi (throw).",
    handle: "2. Exception Handling (Xử lý): Một bộ phận xử lý độc lập bắt lấy đối tượng lỗi này (catch) để giải cứu luồng thực thi.",
    recovery: "Kết quả: Lỗi được xử lý êm đẹp, người dùng nhận thông báo lịch sự, chương trình tiếp tục hoạt động bình thường."
  };

  return (
    <div className="space-y-6">
      {/* PART A: Flowchart */}
      <div className="w-full bg-white border border-stone-200/80 rounded-3xl p-6 text-stone-850 shadow-lg relative">
        <div className="bg-gradient-to-r from-indigo-500 to-teal-500 h-1.5 absolute top-0 left-0 right-0" />
        
        <h4 className="text-base md:text-lg font-black text-stone-900 flex items-center gap-2 mb-2">
          <Cpu className="w-5 h-5 text-indigo-600" />
          <span>Phần 4: Cơ Chế Hoạt Động & Sơ Đồ Luồng Exceptions</span>
        </h4>
        <p className="text-xs text-stone-500 mb-6">
          Rê chuột (hover) vào từng khối trong sơ đồ luồng dưới đây để xem giải thích chi tiết về cách Exception cứu sống ứng dụng của bạn.
        </p>

        {/* Interactive Flowchart */}
        <div className="bg-stone-50/60 p-6 rounded-2xl border border-stone-200/80 mb-6 relative overflow-hidden shadow-inner">
          <div className="flex flex-col items-center gap-6">
            
            {/* Start Node */}
            <div
              onMouseEnter={() => setActiveNode("err")}
              onMouseLeave={() => setActiveNode(null)}
              className="p-3 bg-white border border-stone-300 rounded-xl text-center font-bold text-xs shadow-sm hover:scale-105 transition-transform duration-250 cursor-pointer min-w-[150px]"
            >
              ⚠️ Gặp Lỗi Lúc Chạy (Error)
            </div>

            {/* Branches splits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-xl relative">
              {/* Path 1: No Exception Handling */}
              <div className="flex flex-col items-center gap-4 border border-rose-100 bg-rose-50/20 p-4 rounded-2xl relative">
                <span className="text-[9px] uppercase tracking-wider font-bold text-rose-700 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded-lg mb-2">
                  Cách 1: Không dùng Exception
                </span>
                
                <div
                  onMouseEnter={() => setActiveNode("raw_exit")}
                  onMouseLeave={() => setActiveNode(null)}
                  className="p-3 bg-white border border-rose-350 rounded-xl text-center text-xs font-medium text-rose-700 shadow-sm hover:scale-105 transition-transform duration-250 cursor-pointer min-w-[150px]"
                >
                  System.exit() / Tự sập
                </div>

                <div className="w-0.5 h-4 bg-stone-300" />

                <div
                  onMouseEnter={() => setActiveNode("crash")}
                  onMouseLeave={() => setActiveNode(null)}
                  className="p-3 bg-rose-600 border border-rose-700 rounded-xl text-center text-xs font-bold text-white shadow-md hover:scale-105 transition-transform duration-250 cursor-pointer min-w-[150px]"
                >
                  💥 Sập Ứng Dụng (Crash)
                </div>
              </div>

              {/* Path 2: Exception Handling */}
              <div className="flex flex-col items-center gap-4 border border-emerald-100 bg-emerald-50/20 p-4 rounded-2xl relative">
                <span className="text-[9px] uppercase tracking-wider font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-lg mb-2">
                  Cách 2: Dùng cơ chế Exception
                </span>

                <div
                  onMouseEnter={() => setActiveNode("indicate")}
                  onMouseLeave={() => setActiveNode(null)}
                  className="p-3 bg-white border border-emerald-350 rounded-xl text-center text-xs font-medium text-emerald-800 shadow-sm hover:scale-105 transition-transform duration-250 cursor-pointer min-w-[150px]"
                >
                  1. Indication (Báo hiệu)
                </div>

                <div className="w-0.5 h-4 bg-stone-300" />

                <div
                  onMouseEnter={() => setActiveNode("handle")}
                  onMouseLeave={() => setActiveNode(null)}
                  className="p-3 bg-white border border-emerald-350 rounded-xl text-center text-xs font-medium text-emerald-800 shadow-sm hover:scale-105 transition-transform duration-250 cursor-pointer min-w-[150px]"
                >
                  2. Handling (Xử lý)
                </div>

                <div className="w-0.5 h-4 bg-stone-300" />

                <div
                  onMouseEnter={() => setActiveNode("recovery")}
                  onMouseLeave={() => setActiveNode(null)}
                  className="p-3 bg-emerald-600 border border-emerald-700 rounded-xl text-center text-xs font-bold text-white shadow-md hover:scale-105 transition-transform duration-250 cursor-pointer min-w-[150px]"
                >
                  ✅ Khôi Phục (Recovery)
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Explain Box */}
        <div className="bg-stone-100 border border-stone-250 p-4 rounded-2xl font-mono text-xs leading-relaxed text-stone-650 min-h-[58px] flex items-center shadow-inner">
          {activeNode ? (
            <span>{flowchartNodes[activeNode]}</span>
          ) : (
            <span className="italic text-stone-400">Rê chuột vào một nút ở sơ đồ luồng phía trên để xem giải thích...</span>
          )}
        </div>
      </div>

      {/* PART B: Cheat Sheet Card */}
      <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block font-mono">
        🧠 Cheat Sheet Ghi Nhớ Nhanh Chương Động Lực Exceptions
      </span>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Card 1 */}
        <div className="bg-white border border-stone-200/80 p-4 rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-[10px] text-stone-400 font-bold font-mono">01</span>
              <span className="text-[8px] font-bold px-1.5 py-0.5 bg-stone-100 text-stone-700 rounded-lg">Khái niệm</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              <strong>Exception</strong> là sự kiện bất thường phát sinh trong quá trình chạy làm ngắt dòng chạy thông thường.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white border border-stone-200/80 p-4 rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-[10px] text-stone-400 font-bold font-mono">02</span>
              <span className="text-[8px] font-bold px-1.5 py-0.5 bg-indigo-50 text-indigo-700 rounded-lg">Mục đích</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Tách biệt hoàn toàn <strong>nơi phát hiện lỗi</strong> và <strong>nơi xử lý lỗi</strong> ra 2 chỗ độc lập.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white border border-stone-200/80 p-4 rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-[10px] text-stone-400 font-bold font-mono">03</span>
              <span className="text-[8px] font-bold px-1.5 py-0.5 bg-amber-50 text-amber-700 rounded-lg">Cú pháp</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Sẽ sử dụng các từ khóa <code className="bg-stone-150 px-1 rounded">throw</code> và cấu trúc khối <code className="bg-stone-150 px-1 rounded">try-catch</code>.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white border border-stone-200/80 p-4 rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-[10px] text-stone-400 font-bold font-mono">04</span>
              <span className="text-[8px] font-bold px-1.5 py-0.5 bg-rose-50 text-rose-700 rounded-lg">Thực tế</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Nhập chữ vào Scanner nguyên thủy sinh ra <code className="bg-stone-150 px-1 rounded text-[10px]">InputMismatchException</code>.
            </p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="bg-white border border-stone-200/80 p-4 rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-[10px] text-stone-400 font-bold font-mono">05</span>
              <span className="text-[8px] font-bold px-1.5 py-0.5 bg-emerald-50 text-emerald-700 rounded-lg">Bẫy thi</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Nhớ phân biệt 3 loại lỗi: <strong>Syntax</strong> (biên dịch), <strong>Runtime</strong> (RAM), <strong>Logic</strong> (sai thuật toán).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
