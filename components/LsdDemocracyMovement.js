"use client";
import React, { useState, useRef } from "react";
import { 
  Library, 
  BookOpen, 
  MapPin, 
  ArrowLeft, 
  ArrowRight, 
  User, 
  ShieldAlert, 
  Layers,
  Sparkles,
  Award
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function LsdDemocracyMovement() {
  const [activeSlide, setActiveSlide] = useState(0);
  const containerRef = useRef(null);

  const books = [
    {
      title: "Sách Phê phán Tờrốtky",
      author: "Hà Huy Tập (Tổng Bí thư)",
      date: "Tháng 5-1937",
      desc: "Phê phán quan điểm cực đoan 'tả' khuynh Tờrốtky nhằm bảo vệ tính đúng đắn trong đường lối cách mạng vô sản của Đảng."
    },
    {
      title: "Cuốn sách Vấn đề dân cày",
      author: "Qua Ninh (Trường Chinh) & Vân Định (Võ Nguyên Giáp)",
      date: "Năm 1937 - 1938",
      desc: "Tác phẩm xuất bản công khai vạch trần tội ác cướp đoạt ruộng đất của thực dân Pháp và phong kiến tay sai, cổ vũ tinh thần đấu tranh đòi dân sinh, ruộng đất của giai cấp nông dân."
    },
    {
      title: "Tác phẩm Tự chỉ trích",
      author: "Nguyễn Văn Cừ (Tổng Bí thư)",
      date: "Năm 1939",
      desc: "Tổng Bí thư Nguyễn Văn Cừ xuất bản cuốn sách Tự chỉ trích nhằm chỉnh đốn nội bộ Đảng, phê bình các quan điểm sai lệch, tăng cường tính đoàn kết thống nhất trong thời kỳ đấu tranh dân chủ."
    }
  ];

  const timelineSlides = [
    {
      time: "Năm 1936",
      title: "Vận động Đông Dương Đại hội",
      desc: "Đảng phát động lập 'Ủy ban trù bị Đông Dương đại hội' để thu thập nguyện vọng của quần chúng (dân nguyện). Các 'Ủy ban hành động' thành lập khắp nơi, riêng Nam Kỳ có tới 600 ủy ban hành động hoạt động sôi nổi."
    },
    {
      time: "Đầu năm 1937",
      title: "Đón phái viên Gôđa & Toàn quyền Brêviê",
      desc: "Quần chúng nhân dân mít tinh, biểu tình đưa đơn 'dân nguyện' đòi cải cách xã hội, giảm sưu thuế khi phái viên Pháp Gôđa và Toàn quyền Brêviê đến Đông Dương khảo sát tình hình."
    },
    {
      time: "Cuối năm 1937",
      title: "Hội truyền bá quốc ngữ ra đời",
      desc: "Thành lập nhằm mục đích nâng cao dân trí, bài trừ mù chữ cho các tầng lớp quần chúng nghèo khổ, đồng thời lồng ghép tuyên truyền nâng cao ý thức chính trị yêu nước."
    },
    {
      time: "Tháng 3-1938",
      title: "Nguyễn Văn Cừ làm Tổng Bí thư",
      desc: "Đồng chí Nguyễn Văn Cừ được bầu làm Tổng Bí thư tại Hội nghị BCH Trung ương. Đảng chủ trương lập Mặt trận Dân chủ Đông Dương và tích cực cử đại biểu tham gia tranh cử vào các Viện dân biểu Bắc Kỳ và Trung Kỳ để đấu tranh nghị trường."
    },
    {
      time: "Tháng 9-1939",
      title: "Thế chiến II bùng nổ",
      desc: "Đế quốc Pháp thực hiện đàn áp dã man các phong trào cách mạng. Phong trào dân chủ chính thức kết thúc, toàn bộ hệ thống Đảng nhanh chóng rút vào hoạt động bí mật để chuẩn bị cho giai đoạn cách mạng mới."
    }
  ];

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % timelineSlides.length);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + timelineSlides.length) % timelineSlides.length);
  };

  useGSAP(() => {
    {
      const targets = containerRef.current ? containerRef.current.querySelectorAll(".slider-content-box") : document.querySelectorAll(".slider-content-box");
      if (targets && targets.length > 0) {
      gsap.fromTo(targets,
      { opacity: 0, x: 20 },
      { opacity: 1, x: 0, duration: 0.45, ease: "power2.out" }
    );
      }
    }
  }, [activeSlide]);

  return (
    <div ref={containerRef} className="w-full py-4 select-text font-sans space-y-8">
      
      {/* 1. ĐÔNG DƯƠNG ĐẠI HỘI */}
      <div className="bg-white border border-stone-200 rounded-2xl p-5 md:p-6 shadow-sm border-t-4 border-t-red-800">
        <div className="flex items-center gap-2 mb-3">
          <Award className="w-5 h-5 text-red-850 flex-shrink-0" />
          <h6 className="text-sm md:text-base font-bold text-stone-900 font-playfair uppercase">
            Đông Dương Đại hội & Đón phái viên Pháp
          </h6>
        </div>
        <p className="text-xs md:text-sm text-stone-650 leading-relaxed text-justify mb-4">
          Đảng phát động phong trào thành lập các <strong>&ldquo;Ủy ban hành động&rdquo;</strong> khắp nơi để thu thập nguyện vọng của nhân dân (dân nguyện), tiến tới triệu tập Đông Dương đại hội. Nam Kỳ là khu vực tiêu biểu với hơn <strong>600 ủy ban hành động</strong> được thiết lập. Đầu năm 1937, khi phái viên Pháp Gôđa và Toàn quyền Brêviê sang Đông Dương, hàng vạn quần chúng đã mít tinh biểu tình đưa đơn dân nguyện đòi quyền lợi tự do.
        </p>
      </div>

      {/* 2. CLANDESTINE LIBRARY & PRESS GALLERY */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Library className="w-4.5 h-4.5 text-stone-400" />
          <span className="text-stone-400 font-black text-xs md:text-sm uppercase tracking-wider">
            📚 Trưng bày Thư viện Báo chí & Xuất bản (1937-1939)
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {books.map((b, idx) => (
            <div key={idx} className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:shadow-md transition-all duration-300 relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-3 opacity-5 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none">
                <BookOpen className="w-16 h-16 text-stone-900" />
              </div>
              
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-red-50 text-red-800 flex items-center justify-center border border-red-100 flex-shrink-0 text-xs font-black">
                  📖
                </div>
                <div>
                  <h6 className="text-xs md:text-sm font-bold text-stone-900 leading-snug">
                    {b.title}
                  </h6>
                  <span className="text-[9px] font-bold text-stone-450 block mt-0.5">
                    Tác giả: {b.author}
                  </span>
                </div>
              </div>

              <p className="text-xs text-stone-600 leading-relaxed text-justify mb-3">
                {b.desc}
              </p>

              <div className="text-[10px] font-bold text-red-850 bg-red-50 border border-red-100 px-2 py-0.5 rounded w-fit">
                📅 {b.date}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. HORIZONTAL TIMELINE SLIDER */}
      <div className="border border-stone-200 rounded-2xl p-5 md:p-6 bg-stone-50/50">
        <div className="flex items-center justify-between mb-4">
          <span className="text-stone-400 font-black text-[10px] md:text-xs uppercase tracking-wider">
            ⏱️ Trục thời gian Sự kiện Dân chủ (1936 - 1939)
          </span>
          <div className="flex gap-2">
            <button 
              onClick={handlePrev}
              className="p-1.5 rounded-lg border border-stone-250 bg-white hover:bg-stone-100 text-stone-700 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button 
              onClick={handleNext}
              className="p-1.5 rounded-lg border border-stone-250 bg-white hover:bg-stone-100 text-stone-700 cursor-pointer"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Active Slide Render */}
        <div className="slider-content-box bg-white border border-stone-200 rounded-2xl p-5 md:p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold text-red-850 bg-red-50 px-2.5 py-1 rounded-full border border-red-100 uppercase tracking-wide">
              {timelineSlides[activeSlide].time}
            </span>
            <span className="text-[9px] font-bold text-stone-400 uppercase tracking-wider">
              Mốc sự kiện {activeSlide + 1} / {timelineSlides.length}
            </span>
          </div>

          <h5 className="text-base md:text-lg font-bold text-stone-900 font-playfair mb-3 leading-snug">
            {timelineSlides[activeSlide].title}
          </h5>

          <p className="p-4 rounded-xl bg-stone-50 border border-stone-150 leading-[1.8] text-xs md:text-sm text-stone-700 text-justify">
            {timelineSlides[activeSlide].desc}
          </p>
        </div>
      </div>

    </div>
  );
}
