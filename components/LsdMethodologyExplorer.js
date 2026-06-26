"use client";
import React, { useRef } from "react";
import { 
  Atom, 
  Hammer, 
  Compass, 
  Eye, 
  CheckCircle, 
  GitCompare, 
  Flag, 
  Lightbulb, 
  Bookmark 
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function LsdMethodologyExplorer() {
  const containerRef = useRef(null);

  // GSAP Entrance Animation
  useGSAP(() => {
    gsap.fromTo(".methodology-column",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.65, ease: "power2.out", stagger: 0.12 }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="w-full py-4 select-text font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Column 1: Nền tảng Chủ nghĩa duy vật biện chứng và duy vật lịch sử */}
        <div className="methodology-column group bg-white border border-stone-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 border-t-4 border-t-red-650 flex flex-col justify-between">
          <div>
            {/* Header */}
            <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-stone-100">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-red-50 text-red-650 border border-red-100 transition-transform group-hover:scale-105 duration-300">
                <Atom className="w-6 h-6" />
              </div>
              <h4 className="text-xs md:text-sm font-black text-stone-900 uppercase tracking-wide">
                1. Nền tảng duy vật biện chứng & duy vật lịch sử
              </h4>
            </div>

            {/* Content list */}
            <ul className="space-y-4 pl-0">
              <li className="list-none flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Eye className="w-3.5 h-3.5" />
                </div>
                <div className="text-xs md:text-sm text-stone-650 leading-relaxed">
                  <strong className="text-stone-850">Nhận thức khách quan:</strong> Cần dựa trên phương pháp luận mác-xít để xem xét lịch sử một cách trung thực, khách quan, toàn diện, phát triển và đặt trong bối cảnh lịch sử cụ thể.
                </div>
              </li>
              
              <li className="list-none flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-3.5 h-3.5" />
                </div>
                <div className="text-xs md:text-sm text-stone-650 leading-relaxed">
                  <strong className="text-stone-850">Thực tiễn là tiêu chuẩn:</strong> Tư duy phải xuất phát từ hiện thực lịch sử, coi thực tiễn và kết quả của hoạt động thực tiễn là tiêu chuẩn của chân lý.
                </div>
              </li>

              <li className="list-none flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <GitCompare className="w-3.5 h-3.5" />
                </div>
                <div className="text-xs md:text-sm text-stone-650 leading-relaxed">
                  <strong className="text-stone-850">Mối quan hệ biện chứng:</strong> Nhận thức rõ các sự kiện, tiến trình lịch sử thông qua các cặp phạm trù như: nguyên nhân - kết quả, hình thức - nội dung, hiện tượng - bản chất, cái chung - cái riêng, phổ biến - đặc thù.
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Column 2: Vận dụng Chủ nghĩa duy vật lịch sử vào tiến trình cách mạng */}
        <div className="methodology-column group bg-white border border-stone-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 border-t-4 border-t-amber-500 flex flex-col justify-between">
          <div>
            {/* Header */}
            <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-stone-100">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-amber-50 text-amber-600 border border-amber-100 transition-transform group-hover:scale-105 duration-300">
                <Hammer className="w-6 h-6" />
              </div>
              <h4 className="text-xs md:text-sm font-black text-stone-900 uppercase tracking-wide">
                2. Vận dụng duy vật lịch sử vào tiến trình cách mạng
              </h4>
            </div>

            {/* Intro text */}
            <p className="text-[11px] md:text-xs text-stone-500 font-semibold italic mb-4 leading-relaxed bg-amber-50/30 p-2.5 rounded-lg border border-amber-100/30">
              Khi nghiên cứu tiến trình cách mạng do Đảng lãnh đạo, chúng ta cần vận dụng các hệ thống lý luận cốt lõi bao gồm:
            </p>

            {/* Content bullets */}
            <ul className="space-y-3.5 pl-0">
              {[
                "Lý luận về hình thái kinh tế - xã hội.",
                "Lý luận về giai cấp và đấu tranh giai cấp; dân tộc và đấu tranh dân tộc.",
                "Vai trò của quần chúng nhân dân và cá nhân trong lịch sử.",
                "Các động lực thúc đẩy sự phát triển xã hội; tính tất yếu của cách mạng xã hội chủ nghĩa; sứ mệnh lịch sử của giai cấp vô sản và Đảng Cộng sản."
              ].map((bullet, idx) => (
                <li key={idx} className="list-none flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-md bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Bookmark className="w-3 h-3" />
                  </div>
                  <span className="text-xs md:text-sm text-stone-650 leading-relaxed font-sans font-medium">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Column 3: Vai trò của Tư tưởng Hồ Chí Minh */}
        <div className="methodology-column group bg-white border border-stone-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 border-t-4 border-t-emerald-600 flex flex-col justify-between">
          <div>
            {/* Header */}
            <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-stone-100">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-emerald-50 text-emerald-600 border border-emerald-100 transition-transform group-hover:scale-105 duration-300">
                <Compass className="w-6 h-6" />
              </div>
              <h4 className="text-xs md:text-sm font-black text-stone-900 uppercase tracking-wide">
                3. Vai trò của Tư tưởng Hồ Chí Minh
              </h4>
            </div>

            {/* Content list */}
            <ul className="space-y-4 pl-0">
              <li className="list-none flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-650 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Flag className="w-3.5 h-3.5" />
                </div>
                <div className="text-xs md:text-sm text-stone-650 leading-relaxed">
                  <strong className="text-stone-850">Kim chỉ nam hành động:</strong> Cùng với chủ nghĩa Mác - Lênin, tư tưởng Hồ Chí Minh là nền tảng tư tưởng dẫn dắt sự nghiệp cách mạng của Đảng và dân tộc.
                </div>
              </li>

              <li className="list-none flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-650 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Lightbulb className="w-3.5 h-3.5" />
                </div>
                <div className="text-xs md:text-sm text-stone-650 leading-relaxed">
                  <strong className="text-stone-850">Định hướng tư duy khoa học:</strong> Tư duy và phong cách khoa học của Người là cơ sở giúp người học không ngừng sáng tạo, đồng thời chống lại chủ nghĩa giáo điều và chủ nghĩa chủ quan duy ý chí.
                </div>
              </li>
            </ul>
          </div>
        </div>

      </div>

      {/* Premium Footer Summary */}
      <div className="mt-8 border-t border-dashed border-stone-200 pt-5 flex items-center justify-between text-[11px] text-stone-400 font-bold uppercase tracking-wider">
        <span>Phương pháp luận Mác - Lênin</span>
        <span>Hệ thống tri thức StudyMaster</span>
      </div>
    </div>
  );
}
