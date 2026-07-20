"use client";
import React, { useState, useRef } from "react";
import { Calendar, MapPin, User, CheckCircle, HelpCircle } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function LsdPartyFoundingConference() {
  const [selectedSeat, setSelectedSeat] = useState(0);
  const containerRef = useRef(null);

  const delegates = [
    {
      name: "Nguyễn Ái Quốc",
      role: "Phái viên Quốc tế Cộng sản",
      org: "Chủ trì Hội nghị",
      orgColor: "bg-red-50 text-red-800 border-red-200",
      desc: "Đóng vai trò phái viên đại diện cho Quốc tế Cộng sản để đứng ra triệu tập, chủ trì và dàn xếp hợp nhất các tổ chức cộng sản đang hoạt động biệt lập tại Việt Nam."
    },
    {
      name: "Trịnh Đình Cửu",
      role: "Đại biểu chính thức",
      org: "Đông Dương Cộng sản Đảng",
      orgColor: "bg-amber-50 text-amber-800 border-amber-200",
      desc: "Đại diện Kỳ bộ Bắc Kỳ của Đông Dương Cộng sản Đảng tham dự hội nghị hợp nhất tại Hồng Kông."
    },
    {
      name: "Nguyễn Đức Cảnh",
      role: "Đại biểu chính thức",
      org: "Đông Dương Cộng sản Đảng",
      orgColor: "bg-amber-50 text-amber-800 border-amber-200",
      desc: "Nhà hoạt động cách mạng xuất sắc, đại diện Kỳ bộ Bắc Kỳ tham gia đàm phán hợp nhất các lực lượng cộng sản."
    },
    {
      name: "Châu Văn Liêm",
      role: "Đại biểu chính thức",
      org: "An Nam Cộng sản Đảng",
      orgColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
      desc: "Đại diện An Nam Cộng sản Đảng ở Nam Kỳ tham dự hội nghị để giải quyết mâu thuẫn và tiến hành hợp nhất."
    },
    {
      name: "Nguyễn Thiệu",
      role: "Đại biểu chính thức",
      org: "An Nam Cộng sản Đảng",
      orgColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
      desc: "Đại diện An Nam Cộng sản Đảng ở Nam Kỳ tham gia đóng góp xây dựng Cương lĩnh chính trị đầu tiên."
    }
  ];

  useGSAP(() => {
    {
      const targets = containerRef.current ? containerRef.current.querySelectorAll(".delegate-profile-box") : document.querySelectorAll(".delegate-profile-box");
      if (targets && targets.length > 0) {
      gsap.fromTo(targets,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" }
    );
      }
    }
  }, [selectedSeat]);

  return (
    <div ref={containerRef} className="w-full py-4 select-text font-sans space-y-6">
      
      {/* Time & Location Summary Banner */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        
        {/* Time Banner */}
        <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-red-50 text-red-800 flex items-center justify-center border border-red-100 flex-shrink-0">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block mb-0.5">
              Thời gian tổ chức
            </span>
            <h6 className="text-sm font-bold text-stone-900 mb-1">
              Từ 6/1 đến 7/2/1930
            </h6>
            <p className="text-xs text-stone-600 leading-relaxed text-justify">
              Nguyễn Ái Quốc triệu tập Hội nghị hợp nhất. Ngày <strong>3-2</strong> sau này được chọn làm ngày kỷ niệm thành lập Đảng.
            </p>
          </div>
        </div>

        {/* Location Banner */}
        <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-100 flex-shrink-0">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block mb-0.5">
              Địa điểm hội nghị
            </span>
            <h6 className="text-sm font-bold text-stone-900 mb-1">
              Cửu Long, Hương Cảng (Trung Quốc)
            </h6>
            <p className="text-xs text-stone-600 leading-relaxed text-justify">
              Địa điểm họp bí mật tại Hồng Kông nhằm tránh sự rình rập, đàn áp dã man của thực dân Pháp đối với phong trào.
            </p>
          </div>
        </div>

      </div>

      {/* Conference Table Seating Interactive */}
      <div className="border border-stone-200 rounded-2xl p-5 md:p-6 bg-stone-50/50">
        <div className="text-center mb-6">
          <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block mb-1">
            Sơ đồ bàn hội nghị hợp nhất
          </span>
          <h6 className="text-xs md:text-sm font-bold text-stone-700">
            Bấm chọn từng đại biểu để xem vai trò tham dự
          </h6>
        </div>

        {/* Delegate Selector (Virtual Seats) */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {delegates.map((del, idx) => {
            const isSelected = idx === selectedSeat;
            return (
              <button
                key={idx}
                onClick={() => setSelectedSeat(idx)}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl border font-bold text-xs cursor-pointer transition-all duration-300 ${
                  isSelected 
                    ? "bg-red-800 text-white shadow-md shadow-red-800/10 border-none" 
                    : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100"
                }`}
              >
                <User className="w-3.5 h-3.5" />
                <span>{del.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Delegate Profile details */}
        <div className="delegate-profile-box bg-white border border-stone-200 rounded-2xl p-5 md:p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div>
              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block mb-0.5">
                Đại biểu hội nghị
              </span>
              <h5 className="text-base font-black text-stone-900 font-playfair">
                {delegates[selectedSeat].name}
              </h5>
            </div>
            <div className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${delegates[selectedSeat].orgColor}`}>
              {delegates[selectedSeat].org}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-stone-50 border border-stone-150 leading-[1.8] text-xs md:text-sm text-stone-700 text-justify mb-4">
            {delegates[selectedSeat].desc}
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-stone-500 bg-stone-100/50 p-3 rounded-lg border border-stone-150">
            <CheckCircle className="w-4 h-4 text-red-850 flex-shrink-0" />
            <span>Vai trò chủ đạo: {delegates[selectedSeat].role}</span>
          </div>
        </div>

      </div>

    </div>
  );
}
