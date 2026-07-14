"use client";
import React from "react";

export default function UserToDesignerTimeline() {
  return (
    <div className="bg-stone-55 border border-stone-200 rounded-3xl p-4 md:p-6 my-6 shadow-sm font-sans text-stone-850">
      
      {/* Header */}
      <div className="border-b border-stone-200 pb-3 mb-6">
        <h4 className="text-base font-extrabold text-stone-900">
          🗺️ Lộ Trình Phát Triển: Từ Người Dùng Đến Người Thiết Kế
        </h4>
        <p className="text-xs text-stone-500 mt-1">
          Quan sát bước chuyển mình quan trọng về mặt tư duy lập trình hướng đối tượng (OOP) của bạn.
        </p>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-11 gap-4 items-center">
        
        {/* Left Card: User Role (5 cols) */}
        <div className="lg:col-span-5 bg-white border border-amber-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-amber-500 to-yellow-400"></div>
          
          <div className="flex items-center gap-3.5 mb-4">
            <span className="text-2xl p-2 bg-amber-100/50 rounded-xl group-hover:scale-110 transition-transform">🛠️</span>
            <div>
              <span className="text-[10px] text-amber-600 font-black uppercase tracking-wider block">Bài 3 & Bài 4</span>
              <h5 className="text-sm font-extrabold text-stone-900">Vai Trò: NGƯỜI DÙNG (User)</h5>
            </div>
          </div>

          <p className="text-xs text-stone-600 leading-relaxed mb-4">
            Bạn đang đứng ở góc nhìn của khách hàng, gọi sử dụng những đoạn mã và các lớp (Class) đã được viết sẵn trong thư viện JDK của Java.
          </p>

          <div className="space-y-2 border-t pt-3.5">
            <div className="flex gap-2 items-start text-xs text-stone-700">
              <span className="text-amber-500 font-bold">✓</span>
              <span>Gọi các lớp tiện ích: <code>Scanner</code>, <code>String</code>, <code>Math</code>, <code>Random</code>, <code>Point</code>...</span>
            </div>
            <div className="flex gap-2 items-start text-xs text-stone-700">
              <span className="text-amber-500 font-bold">✓</span>
              <span>Khởi tạo các đối tượng bằng từ khóa <code>new</code>.</span>
            </div>
            <div className="flex gap-2 items-start text-xs text-stone-700">
              <span className="text-amber-500 font-bold">✓</span>
              <span>Đọc tài liệu API để biết tham số truyền vào và kết quả trả về của hàm.</span>
            </div>
          </div>
        </div>

        {/* Center Separator Arrow (1 col) */}
        <div className="lg:col-span-1 flex flex-col items-center justify-center py-2 lg:py-0">
          <div className="bg-stone-200 text-stone-600 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full border border-stone-300 shadow-sm whitespace-nowrap animate-bounce">
            Tuần sau ➔
          </div>
        </div>

        {/* Right Card: Designer Role (5 cols) */}
        <div className="lg:col-span-5 bg-white border border-purple-250 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-purple-500 to-indigo-500"></div>
          
          <div className="flex items-center gap-3.5 mb-4">
            <span className="text-2xl p-2 bg-purple-100/50 rounded-xl group-hover:scale-110 transition-transform">🎨</span>
            <div>
              <span className="text-[10px] text-purple-600 font-black uppercase tracking-wider block">Bài 5 Trở Đi</span>
              <h5 className="text-sm font-extrabold text-stone-900">Vai Trò: NGƯỜI THIẾT KẾ (Designer)</h5>
            </div>
          </div>

          <p className="text-xs text-stone-600 leading-relaxed mb-4">
            Bạn sẽ tự mình đóng vai kiến trúc sư phần mềm, tự định nghĩa cấu trúc dữ liệu và hành vi cho các thực thể đối tượng của riêng bạn.
          </p>

          <div className="space-y-2 border-t pt-3.5">
            <div className="flex gap-2 items-start text-xs text-stone-700">
              <span className="text-purple-500 font-bold">✓</span>
              <span>Tự viết định nghĩa Class, Object của riêng mình.</span>
            </div>
            <div className="flex gap-2 items-start text-xs text-stone-700">
              <span className="text-purple-500 font-bold">✓</span>
              <span>Thiết lập các thuộc tính (Attributes) và phương thức (Methods).</span>
            </div>
            <div className="flex gap-2 items-start text-xs text-stone-700">
              <span className="text-purple-500 font-bold">✓</span>
              <span>Đóng gói dữ liệu (Encapsulation), bảo vệ mã nguồn tối đa.</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
