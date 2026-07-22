"use client";
import React from "react";
import { ShieldAlert, Crosshair, Award, CheckCircle2 } from "lucide-react";

export default function LsdUSStrategiesMatrix() {
  const strategies = [
    {
      name: "Chiến Tranh Đơn Phương",
      time: "1954 - 1960",
      president: "Dwight D. Eisenhower",
      formula: "Chính quyền Ngô Đình Diệm + Tay sai dồn dân tố cộng",
      backbone: "Luật 10/59, 'Tố cộng diệt cộng', trại tập trung",
      outcome: "Bị đập tan bởi Phong trào 'Đồng khởi' (1960)"
    },
    {
      name: "Chiến Tranh Đặc Biệt",
      time: "1961 - 1965",
      president: "John F. Kennedy",
      formula: "Quân Sài Gòn + Cố vấn Mỹ + Vũ khí Mỹ",
      backbone: "Quốc sách 'Ấp chiến lược' (17.000 ấp) + Trực thăng vận",
      outcome: "Bị đánh bại bởi Chiến thắng Ấp Bắc (1963) & 3 mũi giáp công"
    },
    {
      name: "Chiến Tranh Cục Bộ",
      time: "1965 - 1968",
      president: "Lyndon B. Johnson",
      formula: "Bộ binh Mỹ trực tiếp tác chiến + Quân Sài Gòn + Đồng minh",
      backbone: "Tìm diệt & Bình định + Phản công 2 mùa khô",
      outcome: "Bị đánh bại bởi Tổng tiến công Tết Mậu Thân (1968)"
    },
    {
      name: "Việt Nam Hóa Chiến Tranh",
      time: "1969 - 1973",
      president: "Richard Nixon",
      formula: "Quân Sài Gòn mở rộng + Hỏa lực, không quân B-52 Mỹ",
      backbone: "Dùng người Việt đánh người Việt + Mở rộng sang Lào, Campuchia",
      outcome: "Bị đánh bại bởi Hiệp định Paris (1973) & Điện Biên Phủ trên không"
    }
  ];

  return (
    <div className="my-8 rounded-2xl border border-rose-300 dark:border-rose-900/60 bg-gradient-to-br from-amber-50/40 via-white to-rose-50/40 p-5 md:p-8 shadow-xl">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-700 text-white text-xs font-bold uppercase tracking-wider mb-2">
          <Crosshair size={14} /> Ma trận so sánh 4 chiến lược chiến tranh Mỹ
        </span>
        <h3 className="text-2xl md:text-3xl font-black font-serif text-slate-900 dark:text-white">
          So Sánh 4 Chiến Lược Chiến Tranh Của Mỹ Ở Việt Nam (1954 - 1975)
        </h3>
      </div>

      {/* Grid 4 Strategies */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {strategies.map((st, idx) => (
          <div key={idx} className="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-rose-300 dark:border-rose-900/60 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-rose-200 dark:border-rose-900/50 pb-3 mb-3">
                <h4 className="font-bold text-base font-serif text-rose-800 dark:text-rose-300">{st.name}</h4>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300">
                  {st.time}
                </span>
              </div>

              <div className="space-y-2 text-xs md:text-sm text-slate-700 dark:text-slate-300">
                <p><strong>Tổng thống Mỹ:</strong> {st.president}</p>
                <p><strong>Công thức:</strong> {st.formula}</p>
                <p><strong>Xương sống:</strong> {st.backbone}</p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-xs text-emerald-700 dark:text-emerald-400 font-bold">
              <CheckCircle2 size={15} /> {st.outcome}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
