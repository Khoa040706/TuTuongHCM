"use client";
import React from "react";
import { Flame, Compass, MapPin, ShieldCheck, Award, Navigation } from "lucide-react";

export default function LsdResolution15AndDongKhoi() {
  const routes = [
    {
      name: "Đường 559 (Mở ngày 19-5-1959)",
      type: "Đường Trường Sơn trên bộ",
      desc: "Xẻ dọc Trường Sơn chi viện sức người, vũ khí cho chiến trường miền Nam.",
      badge: "Huyền thoại Trường Sơn"
    },
    {
      name: "Đường 759 (Mở ngày 25-10-1961)",
      type: "Đường Hồ Chí Minh trên biển",
      desc: "Đoàn tàu Không số vận chuyển vũ khí hạng nặng từ miền Bắc cập bến các bến bãi miền Nam.",
      badge: "Huyền thoại Tàu Không Số"
    }
  ];

  return (
    <div className="my-8 rounded-2xl border border-amber-300 dark:border-amber-700 bg-gradient-to-br from-amber-50/50 via-white to-red-50/40 p-6 md:p-8 text-slate-900 dark:text-white shadow-xl">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600 text-white text-xs font-bold uppercase tracking-wider mb-2">
          <Flame size={14} /> Bước ngoặt lịch sử cách mạng miền Nam
        </span>
        <h3 className="text-2xl md:text-3xl font-black font-serif text-slate-900 dark:text-white">
          Nghị Quyết TW 15 (1-1959) & Phong Trào "Đồng Khởi" Bến Tre (1960)
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
          Chuyển cách mạng miền Nam từ **thế giữ gìn lực lượng sang thế tiến công**.
        </p>
      </div>

      {/* Resolution 15 Highlight Box */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-red-500 shadow-md mb-8">
        <div className="flex items-center gap-3 border-b border-red-200 dark:border-red-900/50 pb-3 mb-4">
          <div className="p-3 rounded-xl bg-red-700 text-white shadow-md">
            <Compass size={24} />
          </div>
          <div>
            <h4 className="text-lg font-bold font-serif text-red-700 dark:text-red-400">
              Nghị Quyết Hội Nghị Trung Ương Lần Thứ 15 (Tháng 1-1959)
            </h4>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">Quyết định lịch sử giải phóng miền Nam</span>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 text-xs md:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-sans">
          Con đường phát triển cơ bản của cách mạng miền Nam là **khởi nghĩa giành chính quyền về tay nhân dân**. Con đường đó là **Sử dụng Bạo lực cách mạng** (kết hợp lực lượng chính trị quần chúng + lực lượng vũ trang nhân dân), lấy đấu tranh chính trị làm gốc, kết hợp đấu tranh quân sự để đánh đổ chính quyền độc tài Mỹ - Diệm.
        </div>
      </div>

      {/* 2 Legendary Strategic Routes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {routes.map((rt, idx) => (
          <div key={idx} className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-amber-300 dark:border-amber-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-amber-800 dark:text-amber-300 bg-amber-100 dark:bg-amber-950 px-2.5 py-0.5 rounded-full">
                  {rt.badge}
                </span>
                <Navigation size={16} className="text-amber-600" />
              </div>
              <h5 className="font-bold text-base text-slate-900 dark:text-white font-serif mt-1">{rt.name}</h5>
              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">{rt.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Dong Khoi Ben Tre Highlight */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-100/80 via-white to-red-100/60 dark:from-slate-900 dark:to-slate-900 border border-red-300 dark:border-red-900/60 shadow-md">
        <div className="flex items-center gap-3 border-b border-red-200 dark:border-red-900/50 pb-3 mb-4">
          <MapPin size={24} className="text-red-600" />
          <div>
            <h4 className="text-lg font-bold font-serif text-slate-900 dark:text-white">
              Phong Trào "Đồng Khởi" Bến Tre (17-1-1960)
            </h4>
            <span className="text-xs text-red-700 dark:text-red-400 font-bold">Lãnh đạo bởi Nữ tướng Nguyễn Thị Định</span>
          </div>
        </div>

        <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
          Bùng nổ từ huyện Mỏ Cày (Bến Tre), lan rộng ra Giồng Trôm, Châu Thành, Ba Trì... làm tan rã từng mảng lớn bộ máy chính quyền tay sai địch ở nông thôn. Đến cuối 1960, **1.380 / 2.627 xã miền Nam** đã lập chính quyền tự quản.
        </p>

        <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-amber-300 dark:border-amber-700 text-xs font-bold text-amber-900 dark:text-amber-300 flex items-center gap-2">
          <Award size={16} /> Ý nghĩa: Đưa cách mạng miền Nam từ THẾ GIỮ GÌN LỰC LƯỢNG sang THẾ TIẾN CÔNG.
        </div>
      </div>
    </div>
  );
}
