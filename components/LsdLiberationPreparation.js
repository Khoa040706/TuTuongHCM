"use client";
import React, { useState, useRef } from "react";
import { 
  Flame, 
  MapPin, 
  Flag, 
  CheckCircle, 
  ShieldAlert, 
  Users2, 
  Layers, 
  FileText, 
  Newspaper, 
  Compass,
  Trophy,
  ArrowRight,
  Anchor
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function LsdLiberationPreparation() {
  const [activeUprising, setActiveUprising] = useState(0);
  const containerRef = useRef(null);

  const uprisings = [
    {
      title: "Khởi nghĩa Bắc Sơn",
      date: "27-9-1940",
      location: "Đồn Mỏ Nhai, Bắc Sơn (Lạng Sơn)",
      desc: "Nhân dân nổi dậy đánh chiếm đồn Mỏ Nhai, lập Đội du kích Bắc Sơn, mở đầu chặng đường đấu tranh vũ trang oanh liệt giành độc lập.",
      icon: Flame
    },
    {
      title: "Khởi nghĩa Nam Kỳ",
      date: "23-11-1940",
      location: "Các tỉnh Nam Bộ (Mỹ Tho, Gia Định...)",
      desc: "Dù lệnh hoãn của Trung ương chưa đến nơi nhưng cuộc khởi nghĩa vẫn nổ ra vô cùng mạnh mẽ, thành lập chính quyền cách mạng ở một số nơi trước khi bị thực dân Pháp đàn áp khốc liệt.",
      icon: ShieldAlert
    },
    {
      title: "Binh biến Đô Lương",
      date: "13-1-1941",
      location: "Đồn Chợ Rạng, Đô Lương (Nghệ An)",
      desc: "Cuộc binh biến của binh lính người Việt tại đồn Chợ Rạng do Đội Cung (Nguyễn Văn Cung) chỉ huy nổ ra nhằm lật đổ Pháp nhưng nhanh chóng bị đàn áp dã man.",
      icon: MapPin
    }
  ];

  useGSAP(() => {
    if (!containerRef.current) return;
    const box = containerRef.current.querySelector(".uprising-desc-box");
    if (box) {
      gsap.fromTo(box,
        { opacity: 0, scale: 0.98 },
        { opacity: 1, scale: 1, duration: 0.45, ease: "power2.out" }
      );
    }
  }, { dependencies: [activeUprising], scope: containerRef });

  return (
    <div ref={containerRef} className="w-full py-4 select-text font-sans space-y-8">
      
      {/* 1. INTERACTIVE SIGNAL FIRE MAP */}
      <div className="border border-stone-200 rounded-2xl p-5 md:p-6 bg-stone-50/50">
        <span className="text-stone-400 font-black text-xs md:text-sm uppercase tracking-wider block mb-4">
          💥 Sơ đồ tương tác: Tiếng súng báo hiệu khởi nghĩa đầu tiên
        </span>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
          {uprisings.map((u, idx) => {
            const isActive = idx === activeUprising;
            return (
              <button
                key={idx}
                onClick={() => setActiveUprising(idx)}
                className={`flex items-center gap-3 p-4 rounded-xl border text-left cursor-pointer transition-all duration-300 ${
                  isActive 
                    ? "bg-white border-red-800 shadow-sm ring-1 ring-red-800/25" 
                    : "bg-stone-50 border-stone-200 hover:bg-stone-100"
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 border text-xs font-black ${
                  isActive ? "bg-red-50 text-red-800 border-red-200" : "bg-stone-200/50 text-stone-500 border-stone-200"
                }`}>
                  🔥
                </div>
                <div>
                  <div className="text-[10px] font-bold text-red-850">{u.date}</div>
                  <div className="text-xs font-black text-stone-850 leading-tight">{u.title}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Expanded description */}
        <div className="uprising-desc-box bg-white border border-stone-200 rounded-2xl p-5 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-150 pb-2 mb-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-red-850 bg-red-50 px-2.5 py-0.5 rounded border border-red-100 uppercase tracking-wide">
                {uprisings[activeUprising].date}
              </span>
              <h6 className="text-xs md:text-sm font-black text-stone-900 uppercase">
                {uprisings[activeUprising].title}
              </h6>
            </div>
            <div className="text-[10px] text-stone-500 font-semibold flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-red-850" />
              <span>{uprisings[activeUprising].location}</span>
            </div>
          </div>

          <p className="text-xs md:text-sm text-stone-700 leading-relaxed text-justify">
            {uprisings[activeUprising].desc}
          </p>
        </div>

        {/* Uprisings significance */}
        <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-200 text-xs text-stone-750 text-justify mt-4">
          📌 <strong>Ý nghĩa lịch sử</strong>: Tuy các cuộc khởi nghĩa đều thất bại hoặc chịu nhiều tổn thất nặng nề, song chúng là **&ldquo;những tiếng súng báo hiệu&rdquo;** đanh thép cho cuộc tổng khởi nghĩa cách mạng vũ trang giành độc lập trên phạm vi toàn quốc.
        </div>
      </div>

      {/* 2. DUAL-FORCE DASHBOARD: POLITICAL vs ARMED */}
      <div>
        <span className="text-stone-400 font-black text-xs md:text-sm uppercase tracking-wider block mb-4">
          ⚖️ Bảng điều khiển song hành lực lượng: Chính trị/Văn hóa vs Vũ trang/Quân sự
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Cánh Tự lực Chính trị & Văn hóa */}
          <div className="bg-white border border-stone-200 rounded-2xl p-5 md:p-6 shadow-sm border-t-4 border-t-red-850 space-y-4">
            <div className="flex items-center gap-2.5 border-b border-stone-150 pb-2.5">
              <div className="w-8 h-8 rounded-lg bg-red-50 text-red-850 flex items-center justify-center border border-red-100 flex-shrink-0">
                <Users2 className="w-4.5 h-4.5" />
              </div>
              <h6 className="text-xs md:text-sm font-bold text-stone-900 font-playfair uppercase">
                Lực lượng chính trị & Mặt trận Văn hóa
              </h6>
            </div>

            <div className="space-y-3.5">
              {/* 1 */}
              <div>
                <span className="text-[10px] font-bold text-red-850 block mb-0.5">Mặt trận Việt Minh</span>
                <p className="text-xs text-stone-650 leading-relaxed text-justify">
                  Công bố Tuyên ngôn ngày 25-10-1941, xây dựng sâu rộng các đoàn thể <strong>&ldquo;Cứu quốc&rdquo;</strong> phát triển mạnh mẽ bất chấp sự khủng bố khốc liệt của thực dân.
                </p>
              </div>
              {/* 2 */}
              <div>
                <span className="text-[10px] font-bold text-red-850 block mb-0.5">Đảng Dân chủ Việt Nam (6-1944)</span>
                <p className="text-xs text-stone-650 leading-relaxed text-justify">
                  Được thành lập dưới sự vận động của Đảng nhằm tập hợp, mở rộng khối đại đoàn kết đến mọi tầng lớp trí thức và sinh viên yêu nước.
                </p>
              </div>
              {/* 3 */}
              <div>
                <span className="text-[10px] font-bold text-red-850 block mb-0.5">Mặt trận Văn hóa</span>
                <p className="text-xs text-stone-650 leading-relaxed text-justify">
                  Công bố <strong>Đề cương về văn hóa Việt Nam (1943)</strong> dựa trên ba nguyên tắc: <strong>dân tộc, khoa học và đại chúng</strong>, biến văn hóa thành mặt trận đấu tranh.
                </p>
              </div>
              {/* 4 */}
              <div>
                <span className="text-[10px] font-bold text-red-850 block mb-0.5">Báo chí cách mạng sắc bén</span>
                <p className="text-xs text-stone-650 leading-relaxed text-justify">
                  Hàng loạt tờ báo chiến đấu (<em>Giải phóng</em>, <em>Cờ giải phóng</em>, <em>Cứu quốc</em>...) được xuất bản làm vũ khí cách mạng vô cùng sắc bén.
                </p>
              </div>
            </div>
          </div>

          {/* Cánh Lực lượng Vũ trang & Căn cứ địa */}
          <div className="bg-white border border-stone-200 rounded-2xl p-5 md:p-6 shadow-sm border-t-4 border-t-amber-700 space-y-4">
            <div className="flex items-center gap-2.5 border-b border-stone-150 pb-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-100 flex-shrink-0">
                <Flame className="w-4.5 h-4.5" />
              </div>
              <h6 className="text-xs md:text-sm font-bold text-stone-900 font-playfair uppercase">
                Lực lượng vũ trang & Căn cứ địa
              </h6>
            </div>

            <div className="space-y-3.5">
              {/* 1 */}
              <div>
                <span className="text-[10px] font-bold text-amber-800 block mb-0.5">Cứu quốc quân phát triển</span>
                <p className="text-xs text-stone-650 leading-relaxed text-justify">
                  Phát triển từ lực lượng du kích Bắc Sơn, kiên cường bám trụ vừa đánh càn vừa gây dựng cơ sở chính trị vững chắc trong quần chúng nhân dân.
                </p>
              </div>
              {/* 2 */}
              <div>
                <span className="text-[10px] font-bold text-amber-800 block mb-0.5">Hệ thống Căn cứ địa cách mạng</span>
                <p className="text-xs text-stone-650 leading-relaxed text-justify">
                  Xây dựng, mở rộng vùng căn cứ Bắc Sơn - Võ Nhai và Cao Bằng, tạo thành hành lang chính trị thông suốt kết nối các tỉnh vùng cao phía Bắc.
                </p>
              </div>
              {/* 3 */}
              <div className="p-3 bg-amber-50/40 border border-amber-200 rounded-xl">
                <span className="text-[10px] font-bold text-amber-850 block mb-0.5">Đội Việt Nam Tuyên truyền Giải phóng quân</span>
                <p className="text-xs text-stone-650 leading-relaxed text-justify">
                  Thành lập <strong>22-12-1944</strong> tại Cao Bằng dưới sự chỉ huy của Võ Nguyên Giáp. Ra quân đánh thắng ngay hai trận Phai Khắt, Nà Ngần, kết hợp chặt chẽ quân sự với chính trị.
                </p>
              </div>
              {/* 4 */}
              <div>
                <span className="text-[10px] font-bold text-amber-800 block mb-0.5">Hoạt động ngoại giao chủ động</span>
                <p className="text-xs text-stone-650 leading-relaxed text-justify">
                  Lãnh tụ Hồ Chí Minh và Tổng bộ Việt Minh chủ động sang Trung Quốc để bắt liên lạc, tranh thủ sự giúp đỡ của lực lượng Đồng minh chống phát xít Nhật.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
