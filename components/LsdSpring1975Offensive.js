"use client";
import React from "react";
import { Flag, Award, Compass, Zap, CheckCircle2, Shield } from "lucide-react";

export default function LsdSpring1975Offensive() {
  const campaigns = [
    {
      num: "Chiến dịch 1",
      name: "Chiến Dịch Tây Nguyên (4-3 đến 24-3-1975)",
      detail: "Trận đột phá mở đầu tại **Buôn Ma Thuột (10-3)**, buộc đối phương tháo chạy hỗn loạn khỏi Tây Nguyên. Chuyển cuộc tiến công chiến lược thành **Tổng tiến công chiến lược** trên toàn miền Nam."
    },
    {
      num: "Chiến dịch 2",
      name: "Chiến Dịch Huế - Đà Nẵng (21-3 đến 29-3-1975)",
      detail: "Giải phóng cố đô Huế (26-3) và thành phố Đà Nẵng (29-3), tiêu diệt quân đoàn mạnh nhất của chính quyền Sài Gòn ở miền Trung."
    },
    {
      num: "Chiến dịch 3",
      name: "Chiến Dịch Hồ Chí Minh (26-4 đến 30-4-1975)",
      detail: "Năm cánh quân lớn tiến công vào Sài Gòn. **11 giờ 30 phút ngày 30-4-1975**, lá cờ chiến thắng tung bay trên nóc **Dinh Độc Lập**, giải phóng hoàn toàn miền Nam."
    }
  ];

  return (
    <div className="my-8 rounded-2xl border border-red-500 dark:border-red-800 bg-gradient-to-br from-amber-50/60 via-white to-red-100/60 p-6 md:p-8 text-slate-900 dark:text-white shadow-xl">
      {/* Title Header */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-700 text-white text-xs font-bold uppercase tracking-wider mb-2 shadow-md">
          <Flag size={14} className="fill-amber-300 text-amber-300" /> 55 Ngày Đêm Đỉnh Cao Lịch Sử (10/3 - 30/4/1975)
        </span>
        <h3 className="text-2xl md:text-3xl font-black font-serif text-slate-900 dark:text-white">
          Tổng Tiến Công Và Nổi Dậy Mùa Xuân 1975
        </h3>
        <p className="text-sm font-serif text-red-700 dark:text-red-400 font-bold mt-2 italic">
          "Thần tốc, thần tốc hơn nữa; táo bạo, táo bạo hơn nữa" — Mệnh lệnh của Đại tướng Võ Nguyên Giáp
        </p>
      </div>

      {/* Timeline 3 Major Campaigns */}
      <div className="space-y-4 mb-8">
        {campaigns.map((cp, idx) => (
          <div key={idx} className="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-red-300 dark:border-red-900/60 shadow-md">
            <div className="flex items-center justify-between border-b border-red-200 dark:border-red-900/40 pb-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-md bg-red-700 text-white font-bold text-xs font-serif">
                {cp.num}
              </span>
              <span className="text-xs font-bold text-red-700 dark:text-red-400">Thần Tốc Giải Phóng</span>
            </div>
            <h4 className="font-bold text-base md:text-lg text-slate-900 dark:text-white font-serif mb-1">{cp.name}</h4>
            <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans" dangerouslySetInnerHTML={{ __html: cp.detail.replace(/\*\*(.*?)\*\*/g, '<strong className="text-red-700 font-bold font-serif">$1</strong>') }} />
          </div>
        ))}
      </div>

      {/* Historic April 30 Highlight */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-red-700 to-amber-700 text-white shadow-xl text-center">
        <Award size={36} className="mx-auto mb-2 text-amber-300" />
        <h4 className="text-xl font-bold font-serif mb-2">11 Giờ 30 Phút Ngày 30 Tháng 4 Năm 1975</h4>
        <p className="text-xs md:text-sm text-amber-100 max-w-2xl mx-auto leading-relaxed">
          Xe tăng 390 và xe tăng 843 húc văng cổng Dinh Độc Lập. Tổng thống Dương Văn Minh tuyên bố đầu hàng không điều kiện. Cuộc kháng chiến chống Mỹ cứu nước kéo dài 21 năm kết thúc toàn thắng!
        </p>
      </div>
    </div>
  );
}
