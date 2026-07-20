"use client";
import React, { useRef } from "react";
import { Globe, Flame, ShieldAlert, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function LsdCapitalismBelongings() {
  const containerRef = useRef(null);

  useGSAP(() => {
    {
      const targets = containerRef.current ? containerRef.current.querySelectorAll(".capitalism-card") : document.querySelectorAll(".capitalism-card");
      if (targets && targets.length > 0) {
      gsap.fromTo(targets,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", stagger: 0.15, scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom-=80",
        toggleActions: "play none none reverse"
      }}
    );
      }
    }
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="w-full py-4 select-text font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Card 1: Chủ nghĩa đế quốc hình thành */}
        <div className="capitalism-card bg-white border border-stone-200 rounded-2xl p-6 shadow-sm border-t-4 border-t-red-800 flex flex-col justify-between hover:shadow-md transition-all duration-300 relative group overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none">
            <Globe className="w-20 h-20 text-red-900" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-700 flex items-center justify-center border border-red-100 flex-shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <h5 className="text-base font-black text-stone-900 uppercase tracking-wide">
                Chủ nghĩa đế quốc hình thành
              </h5>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-150 leading-[1.8] text-sm text-stone-700 text-justify font-sans">
                Từ nửa sau thế kỷ XIX, chủ nghĩa tư bản phương Tây chuyển mạnh mẽ từ tự do cạnh tranh sang độc quyền (chủ nghĩa đế quốc). Quá trình này đẩy mạnh việc xâm chiếm và nô dịch các nước nhỏ, yếu ở châu Á, châu Phi và khu vực Mỹ-Latinh, biến các quốc gia này thành thuộc địa của các nước đế quốc.
              </div>
            </div>
          </div>
          
          <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-red-800">
            <span>Bản chất: Độc quyền & Xâm chiếm thuộc địa</span>
            <ShieldAlert className="w-4 h-4 text-red-650" />
          </div>
        </div>

        {/* Card 2: Phong trào giải phóng dân tộc dâng cao */}
        <div className="capitalism-card bg-white border border-stone-200 rounded-2xl p-6 shadow-sm border-t-4 border-t-amber-600 flex flex-col justify-between hover:shadow-md transition-all duration-300 relative group overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none">
            <Flame className="w-20 h-20 text-amber-700" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-100 flex-shrink-0">
                <Flame className="w-5 h-5" />
              </div>
              <h5 className="text-base font-black text-stone-900 uppercase tracking-wide">
                Phong trào giải phóng dân tộc dâng cao
              </h5>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-150 leading-[1.8] text-sm text-stone-700 text-justify font-sans">
                Trước sự áp bức đó, nhân dân các dân tộc bị áp bức đã đứng lên đấu tranh tự giải phóng khỏi ách thực dân, đế quốc, tạo thành phong trào giải phóng dân tộc mạnh mẽ, rộng khắp, nhất là ở châu Á. Phong trào này trở thành một bộ phận quan trọng trong cuộc đấu tranh chung chống tư bản, thực dân và tác động mạnh mẽ đến phong trào yêu nước Việt Nam.
              </div>
            </div>
          </div>
          
          <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-amber-700">
            <span>Vai trò: Bộ phận quan trọng của cách mạng thế giới</span>
            <ArrowRight className="w-4 h-4 text-amber-600" />
          </div>
        </div>

      </div>
    </div>
  );
}
