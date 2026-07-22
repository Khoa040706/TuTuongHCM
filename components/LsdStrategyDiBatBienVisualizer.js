"use client";
import React, { useState } from "react";
import { ShieldCheck, Scale, Lightbulb, Compass, ArrowRightLeft, Check, AlertCircle } from "lucide-react";

export default function LsdStrategyDiBatBienVisualizer() {
  const [selectedSide, setSelectedSide] = useState("tuong"); // 'tuong' or 'phap'

  return (
    <div className="my-8 rounded-2xl border border-amber-300/80 dark:border-amber-900/60 bg-gradient-to-br from-amber-50/50 via-white to-red-50/40 p-5 md:p-8 shadow-xl">
      {/* Top Banner */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-200 dark:bg-amber-950/60 text-amber-900 dark:text-amber-200 text-xs font-bold uppercase tracking-wider mb-2">
          <Compass size={14} /> Nghệ thuật sách lược ngoại giao đỉnh cao
        </span>
        <h3 className="text-2xl md:text-3xl font-black font-serif text-slate-900 dark:text-white">
          Phương Châm: "Dĩ Bất Biến, Ứng Vạn Biến"
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
          Hồ Chí Minh và Trung ương Đảng đã chèo lái con thuyền cách mạng qua mâu thuẫn giữa 20 vạn quân Tưởng và thực dân Pháp xâm lược.
        </p>
      </div>

      {/* Core Principle Banner */}
      <div className="mb-8 p-5 rounded-xl bg-gradient-to-r from-red-800 to-amber-800 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-full bg-white/20 backdrop-blur-md shrink-0">
            <Scale size={28} className="text-amber-300" />
          </div>
          <div>
            <h4 className="text-lg font-bold font-serif">Cốt lõi Nguyên tắc & Sách lược:</h4>
            <p className="text-xs md:text-sm text-amber-100 mt-0.5">
              <strong>"Dĩ bất biến"</strong> = Giữ vững mục tiêu Độc lập, Tự do, Chủ quyền dân tộc.
              <br />
              <strong>"Ứng vạn biến"</strong> = Linh hoạt về phương pháp, nhân nhượng có nguyên tắc theo từng giai đoạn.
            </p>
          </div>
        </div>
      </div>

      {/* Switch Buttons */}
      <div className="flex justify-center gap-3 mb-6">
        <button
          onClick={() => setSelectedSide("tuong")}
          className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${
            selectedSide === "tuong"
              ? "bg-amber-600 text-white shadow-lg shadow-amber-600/30 scale-105"
              : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700"
          }`}
        >
          <ArrowRightLeft size={16} /> Giai đoạn 1: Sách lược với Quân Tưởng (Trước 06/03/1946)
        </button>
        <button
          onClick={() => setSelectedSide("phap")}
          className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${
            selectedSide === "phap"
              ? "bg-rose-700 text-white shadow-lg shadow-rose-700/30 scale-105"
              : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700"
          }`}
        >
          <ArrowRightLeft size={16} /> Giai đoạn 2: Sách lược với Thực dân Pháp (Sau 06/03/1946)
        </button>
      </div>

      {/* Interactive Detail Comparison Card */}
      {selectedSide === "tuong" ? (
        <div className="rounded-2xl border border-amber-300 dark:border-amber-800 bg-white dark:bg-slate-900 p-6 shadow-md">
          <div className="flex items-center justify-between border-b border-amber-200 dark:border-amber-900/60 pb-3 mb-4">
            <span className="text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-widest">
              Khẩu hiệu: "Hoa - Việt Thân Thiện"
            </span>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
              Trước 06/03/1946
            </span>
          </div>

          <h4 className="text-xl font-bold text-slate-900 dark:text-white font-serif mb-3">
            Hòa Hoãn Với Quân Tưởng Giới Thạch Để Tập Trung Đánh Pháp Ở Nam Bộ
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div className="p-4 rounded-xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40">
              <h5 className="text-sm font-bold text-amber-900 dark:text-amber-200 mb-2 flex items-center gap-1.5">
                <Check size={16} className="text-emerald-600" /> Chủ trương & Nhân nhượng:
              </h5>
              <ul className="space-y-1.5 text-xs md:text-sm text-slate-700 dark:text-slate-300">
                <li>• Nhường 70 ghế trong Quốc hội cho Việt Quốc, Việt Cách (không qua bầu cử).</li>
                <li>• Cung cấp lương thực, thực phẩm cho 20 vạn quân Tưởng.</li>
                <li>• Chấp nhận tiêu tiền "Quan kim", "Quốc币" (tiền Trung Hoa dân quốc).</li>
                <li>• Đảng Cộng sản tuyên bố "Tự giải tán" (11/11/1945) rút vào hoạt động bí mật.</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40">
              <h5 className="text-sm font-bold text-rose-900 dark:text-rose-200 mb-2 flex items-center gap-1.5">
                <AlertCircle size={16} className="text-rose-600" /> Mục tiêu chiến lược:
              </h5>
              <ul className="space-y-1.5 text-xs md:text-sm text-slate-700 dark:text-slate-300">
                <li>• Tránh cùng lúc đối đầu với nhiều kẻ thù hiểm ác.</li>
                <li>• Triệt tiêu âm mưu "lật đổ chính quyền Việt Minh" của Tưởng.</li>
                <li>• Dành toàn lực hỗ trợ quân dân Nam Bộ kháng chiến chống Pháp.</li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="rounded-2xl border border-rose-300 dark:border-rose-800 bg-white dark:bg-slate-900 p-6 shadow-md">
          <div className="flex items-center justify-between border-b border-rose-200 dark:border-rose-900/60 pb-3 mb-4">
            <span className="text-xs font-bold text-rose-700 dark:text-rose-400 uppercase tracking-widest">
              Khẩu hiệu: "Độc Lập Về Chính Trị, Nhân Nhượng Về Kinh Tế"
            </span>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300">
              Từ 06/03/1946 đến 12/1946
            </span>
          </div>

          <h4 className="text-xl font-bold text-slate-900 dark:text-white font-serif mb-3">
            Hòa Hoãn Với Pháp Để Đuổi 20 Vạn Quân Tưởng Về Nước
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div className="p-4 rounded-xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40">
              <h5 className="text-sm font-bold text-rose-900 dark:text-rose-200 mb-2 flex items-center gap-1.5">
                <Check size={16} className="text-emerald-600" /> Chủ trương & Văn kiện ngoại giao:
              </h5>
              <ul className="space-y-1.5 text-xs md:text-sm text-slate-700 dark:text-slate-300">
                <li>• 06/03/1946: Ký Hiệp định Sơ bộ tại Hà Nội.</li>
                <li>• Đồng ý 15.000 quân Pháp ra Bắc thay quân Tưởng (rút dần trong 5 năm).</li>
                <li>• 14/09/1946: Chủ tịch Hồ Chí Minh ký Tạm ước 14-9 tại Marseille.</li>
                <li>• Nhân nhượng cho Pháp một số quyền lợi kinh tế, văn hóa.</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40">
              <h5 className="text-sm font-bold text-emerald-900 dark:text-emerald-200 mb-2 flex items-center gap-1.5">
                <ShieldCheck size={16} className="text-emerald-600" /> Kết quả chiến lược:
              </h5>
              <ul className="space-y-1.5 text-xs md:text-sm text-slate-700 dark:text-slate-300">
                <li>• Đuổi sạch 20 vạn quân Tưởng Giới Thạch và tay sai về nước.</li>
                <li>• Tranh thủ thời gian hòa hoãn quý báu để chuẩn bị kháng chiến toàn quốc.</li>
                <li>• Pháp công nhận Việt Nam là "Quốc gia tự do".</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Summary mnemonic alert box */}
      <div className="mt-6 p-4 rounded-xl bg-amber-100/80 dark:bg-amber-950/50 border border-amber-300 dark:border-amber-800 flex items-start gap-3">
        <Lightbulb className="text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" size={22} />
        <div className="text-xs md:text-sm text-amber-900 dark:text-amber-200">
          <strong>Mẹo nhớ bài học:</strong> Khi quân Tưởng còn ở Bắc ➔ <em>Hòa Tưởng để đánh Pháp ở Nam</em>. Khi Pháp và Tưởng bắt tay (Hiệp ước Trùng Khánh) ➔ <em>Hòa Pháp để đuổi Tưởng về nước</em>. Đó là sự vận dụng thiên tài phương châm <strong>"Dĩ bất biến, ứng vạn biến"</strong>.
        </div>
      </div>
    </div>
  );
}
