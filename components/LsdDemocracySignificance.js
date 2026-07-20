"use client";
import React, { useRef } from "react";
import { 
  Users2, 
  BookOpen, 
  Trophy, 
  MailCheck,
  CheckCircle,
  Compass,
  Zap,
  Award
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function LsdDemocracySignificance() {
  const containerRef = useRef(null);

  useGSAP(() => {
    {
      const targets = containerRef.current ? containerRef.current.querySelectorAll(".sig-node") : document.querySelectorAll(".sig-node");
      if (targets && targets.length > 0) {
      gsap.fromTo(targets,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", stagger: 0.08 }
    );
      }
    }
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="w-full py-4 select-text font-sans space-y-6">
      
      {/* 1. LỰC LƯỢNG CÁCH MẠNG PHÁT TRIỂN */}
      <div className="sig-node bg-white border border-stone-200 rounded-2xl p-5 md:p-6 shadow-sm border-t-4 border-t-red-800">
        <div className="flex items-center gap-2.5 mb-4">
          <Users2 className="w-5 h-5 text-red-850 flex-shrink-0" />
          <h6 className="text-sm md:text-base font-bold text-stone-900 font-playfair uppercase">
            Lực lượng cách mạng phát triển vượt bậc
          </h6>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          
          <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 text-center">
            <span className="text-2xl font-black text-red-800 block">~ 1.800</span>
            <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block mt-1">Đảng viên (4/1938)</span>
          </div>

          <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 text-center">
            <span className="text-2xl font-black text-amber-700 block">35.000+</span>
            <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block mt-1">Hội viên quần chúng</span>
          </div>

          <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 text-center">
            <span className="text-2xl font-black text-emerald-700 block">Hàng triệu</span>
            <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block mt-1">Quần chúng chính trị</span>
          </div>

        </div>

        <div className="p-4 rounded-xl bg-stone-50 border border-stone-150 flex items-start gap-3">
          <MailCheck className="w-5 h-5 text-red-800 flex-shrink-0 mt-0.5" />
          <div>
            <h6 className="text-xs font-bold text-stone-850">Sự chỉ đạo sát sao của Nguyễn Ái Quốc</h6>
            <p className="text-xs text-stone-600 leading-relaxed text-justify mt-1">
              Từ cuối năm 1938 - 1939, Nguyễn Ái Quốc từ nước ngoài liên tục gửi các bức thư, chỉ đạo sát sao đối với phong trào đấu tranh trong nước, giúp Đảng giữ vững đường lối chính trị cách mạng vô sản đúng đắn.
            </p>
          </div>
        </div>
      </div>

      {/* 2. BÀI HỌC KINH NGHIỆM */}
      <div className="sig-node">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="w-4.5 h-4.5 text-stone-400" />
          <span className="text-stone-400 font-black text-xs md:text-sm uppercase tracking-wider">
            💡 Bài học kinh nghiệm cốt lõi
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-2 mb-3">
              <Compass className="w-4.5 h-4.5 text-red-800 flex-shrink-0" />
              <h6 className="text-xs md:text-sm font-bold text-stone-850 font-playfair uppercase">
                Mục tiêu chiến lược & trước mắt
              </h6>
            </div>
            <p className="text-xs text-stone-650 leading-relaxed text-justify">
              Giải quyết đúng đắn mối quan hệ giữa mục tiêu lâu dài (giải phóng dân tộc, giành chính quyền) và mục tiêu cấp bách trước mắt (tự do, dân chủ, cơm áo, hòa bình).
            </p>
          </div>

          <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-4.5 h-4.5 text-red-850 flex-shrink-0" />
              <h6 className="text-xs md:text-sm font-bold text-stone-850 font-playfair uppercase">
                Hình thức tổ chức & Đấu tranh
                  </h6>
            </div>
            <p className="text-xs text-stone-650 leading-relaxed text-justify">
              Biết kết hợp nhuần nhuyễn các hình thức tổ chức, đấu tranh giữa hoạt động bí mật và hoạt động công khai, tận dụng tối đa các cơ hội pháp lý để tuyên truyền quần chúng.
            </p>
          </div>

        </div>
      </div>

      {/* 3. Ý NGHĨA LỊCH SỬ */}
      <div className="sig-node">
        <div className="flex items-center gap-2 mb-4">
          <Trophy className="w-4.5 h-4.5 text-stone-400" />
          <span className="text-stone-400 font-black text-xs md:text-sm uppercase tracking-wider">
            🏆 Ý nghĩa lịch sử
          </span>
        </div>

        <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-250 shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
            <Award className="w-24 h-24 text-amber-950" />
          </div>
          <div className="relative z-10 flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center border border-amber-200 flex-shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-[10px] font-black uppercase tracking-wider mb-2.5">
                <span>Diễn tập cho Cách mạng Tháng Tám</span>
              </div>
              
              <h5 className="text-base md:text-lg font-bold text-stone-900 font-playfair mb-2">
                Bước chuẩn bị trực tiếp cho giành chính quyền
              </h5>
              
              <p className="text-xs md:text-sm text-stone-655 leading-relaxed text-justify">
                Phong trào dân chủ 1936-1939 đã thành công trong việc mở rộng trận địa cách mạng sâu rộng ở cả nông thôn lẫn thành thị, đóng vai trò là <strong>bước chuẩn bị trực tiếp</strong> cực kỳ quan trọng cho thắng lợi vẻ vang của Cách mạng Tháng Tám năm 1945.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
