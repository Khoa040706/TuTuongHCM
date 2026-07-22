"use client";
import React from "react";
import { Calendar, AlertTriangle, CheckCircle2, RefreshCw } from "lucide-react";

export default function LsdLandReformConferencesMatrix() {
  const steps = [
    { time: "4-1952", conf: "Hội nghị BCH TW lần thứ ba", content: "Chủ trương 'Chính Đảng, chỉnh quân' và công tác tài chính, kinh tế." },
    { time: "1-1953", conf: "Hội nghị BCH TW lần thứ tư", content: "Kiểm điểm chính sách ruộng đất, quyết định tiến tới cải cách ruộng đất." },
    { time: "11-1953", conf: "Hội nghị BCH TW lần thứ năm & HN toàn quốc lần thứ I", content: "Thông qua Cương lĩnh ruộng đất của Đảng Lao động Việt Nam (23 điều)." },
    { time: "4-12-1953", conf: "Quốc hội khóa I (Kỳ họp thứ 3)", content: "Chính thức thông qua Luật Cải cách ruộng đất." },
    { time: "19-12-1953", conf: "Chủ tịch Hồ Chí Minh ký sắc lệnh", content: "Ban hành Luật Cải cách ruộng đất trên toàn quốc." },
    { time: "10-1956", conf: "Hội nghị BCH TW lần thứ mười (mở rộng)", content: "Kiểm điểm, tự phê bình nghiêm túc sai lầm và phát động đợt Sửa sai Cải cách ruộng đất." }
  ];

  return (
    <div className="my-8 rounded-2xl border border-amber-300/80 dark:border-amber-900/60 bg-gradient-to-br from-amber-50/40 via-white to-red-50/40 p-5 md:p-8 shadow-xl">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 text-xs font-bold uppercase tracking-wider mb-2">
          <AlertTriangle size={14} /> Bảng tra cứu các mốc dễ bẫy thi trắc nghiệm
        </span>
        <h3 className="text-2xl md:text-3xl font-black font-serif text-slate-900 dark:text-white">
          Bảng So Sánh Tiến Trình Cải Cách Ruộng Đất (1952 - 1956)
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
          Phân biệt chính xác các mốc Hội nghị Trung ương 3, 4, 5, 10 và các văn kiện sắc lệnh ban hành.
        </p>
      </div>

      {/* Table Matrix */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 md:p-6 shadow-md">
        <div className="overflow-x-auto">
          <table className="w-full text-xs md:text-sm text-left border-collapse">
            <thead>
              <tr className="bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-200 font-serif">
                <th className="p-3 border border-amber-200 dark:border-amber-900">Mốc thời gian</th>
                <th className="p-3 border border-amber-200 dark:border-amber-900">Hội nghị / Sự kiện</th>
                <th className="p-3 border border-amber-200 dark:border-amber-900">Nội dung quyết định cốt lõi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
              {steps.map((st, idx) => (
                <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="p-3 font-bold border border-slate-200 dark:border-slate-800 text-amber-800 dark:text-amber-300 shrink-0 whitespace-nowrap">
                    {st.time}
                  </td>
                  <td className="p-3 font-bold border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white">
                    {st.conf}
                  </td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800">
                    {st.content}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
