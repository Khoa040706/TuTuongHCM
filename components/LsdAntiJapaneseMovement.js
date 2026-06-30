"use client";
import React, { useRef } from "react";
import { 
  AlertTriangle, 
  MapPin, 
  Flag, 
  Flame, 
  ShieldAlert, 
  Award,
  Users2,
  Bookmark,
  CheckCircle,
  Clock
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function LsdAntiJapaneseMovement() {
  const containerRef = useRef(null);

  const contextCards = [
    {
      title: "Thế giới bước vào giai đoạn kết thúc",
      icon: Clock,
      desc: "Hồng quân Liên Xô tiến công mạnh mẽ ở châu Âu. Phe Đồng minh kiểm soát các tuyến đường biển Đông Nam Á, dồn phát xít Nhật vào thế hoàn toàn cô lập."
    },
    {
      title: "Nhật đảo chính Pháp (9-3-1945)",
      icon: Flame,
      desc: "Nhằm độc chiếm Đông Dương, Nhật nổ súng lật đổ Pháp. Thực dân Pháp chống cự vô cùng yếu ớt rồi nhanh chóng đầu hàng đầu hàng phát xít."
    },
    {
      title: "Thiết lập chính quyền bù nhìn",
      icon: ShieldAlert,
      desc: "Nhật dựng lên chính phủ Bảo Đại - Trần Trọng Kim với chiêu bài 'độc lập' giả hiệu nhằm mưu đồ phục vụ đắc lực cho nền thống trị phát xít."
    }
  ];

  const results = [
    {
      title: "Thống nhất lực lượng vũ trang",
      desc: "Ngày 15-5-1945, các lực lượng tự vệ, du kích được thống nhất thành Việt Nam giải phóng quân, đồng thời khẩn trương xây dựng 7 chiến khu lớn trong cả nước."
    },
    {
      title: "Thành lập Khu giải phóng Việt Bắc",
      desc: "Ngày 4-6-1945, Khu giải phóng chính thức được thành lập gồm 6 tỉnh cốt lõi vùng cao phía Bắc, trở thành căn cứ địa chính yếu của cách mạng cả nước."
    },
    {
      title: "Phong trào 'Phá kho thóc, giải quyết nạn đói'",
      desc: "Tại Bắc Bộ và Bắc Trung Bộ, khẩu hiệu này đánh trúng nguyện vọng sinh tồn của nhân dân, lôi kéo hàng triệu người tham gia khởi nghĩa từng phần oanh liệt."
    },
    {
      title: "Bản chất: Cuộc tổng diễn tập vĩ đại",
      desc: "Đây thực chất là một cuộc khởi nghĩa từng phần và chiến tranh du kích cục bộ, đóng vai trò tổng diễn tập vĩ đại chuẩn bị trực tiếp cho Tổng khởi nghĩa."
    }
  ];

  useGSAP(() => {
    gsap.fromTo(".movement-node",
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", stagger: 0.08 }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="w-full py-4 select-text font-sans space-y-8">
      
      {/* 1. BỐI CẢNH LỊCH SỬ ĐẦU NĂM 1945 */}
      <div>
        <span className="text-stone-400 font-black text-xs md:text-sm uppercase tracking-wider block mb-4">
          🌍 Bối cảnh lịch sử đầu năm 1945
        </span>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contextCards.map((c, idx) => {
            const CardIcon = c.icon;
            return (
              <div key={idx} className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="w-8 h-8 rounded-lg bg-red-50 text-red-850 flex items-center justify-center border border-red-100 flex-shrink-0">
                    <CardIcon className="w-4.5 h-4.5" />
                  </div>
                  <h6 className="text-xs md:text-sm font-bold text-stone-850 font-playfair uppercase">
                    {c.title}
                  </h6>
                </div>
                <p className="text-xs text-stone-655 leading-relaxed text-justify">
                  {c.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. EMERGENCY MANIFESTO BOARD: CHỈ THỊ 12-3-1945 */}
      <div className="movement-node bg-gradient-to-r from-red-950 via-red-900 to-red-950 text-white rounded-3xl p-6 md:p-8 shadow-lg border border-red-850 relative overflow-hidden">
        
        {/* Decorative background stripes */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 space-y-6">
          
          {/* Header block */}
          <div className="text-center md:text-left space-y-1.5">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-0.5 rounded-full bg-amber-500 text-red-950 text-[10px] font-black uppercase tracking-wider">
              <span>⚠️</span>
              <span>Văn kiện khẩn mật của Đảng</span>
            </span>
            <h4 className="text-base md:text-xl font-bold font-playfair tracking-wide text-amber-300">
              CHỈ THỊ: &ldquo;NHẬT, PHÁP BẮN NHAU VÀ HÀNH ĐỘNG CỦA CHÚNG TA&rdquo;
            </h4>
            <p className="text-xs text-red-200">
              Ra đời ngày 12-3-1945 bởi Ban Thường vụ Trung ương Đảng tại Hội nghị khẩn cấp ngay sau khi Nhật nổ súng.
            </p>
          </div>

          {/* Core Decisions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            
            {/* 1. Xác định kẻ thù */}
            <div className="bg-red-950/60 border border-red-800/50 p-4 rounded-xl space-y-2">
              <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">🎯 Xác định kẻ thù</span>
              <p className="text-xs text-red-100 leading-relaxed text-justify">
                Chỉ thị xác định rõ **kẻ thù cụ thể, trước mắt và duy nhất** của nhân dân các dân tộc Đông Dương lúc này là **phát xít Nhật**.
              </p>
            </div>

            {/* 2. Đổi khẩu hiệu */}
            <div className="bg-red-950/60 border border-red-800/50 p-4 rounded-xl space-y-2">
              <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">🗣️ Thay đổi khẩu hiệu</span>
              <p className="text-xs text-red-100 leading-relaxed text-justify">
                Thay khẩu hiệu &ldquo;đánh đuổi phát xít Nhật - Pháp&rdquo; bằng **&ldquo;đánh đuổi phát xít Nhật&rdquo;**, đồng thời nêu khẩu hiệu thành lập chính quyền cách mạng.
              </p>
            </div>

            {/* 3. Phát động cao trào */}
            <div className="bg-red-950/60 border border-red-800/50 p-4 rounded-xl space-y-2">
              <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">🗺️ Phát động cao trào</span>
              <p className="text-xs text-red-100 leading-relaxed text-justify">
                Quyết định phát động một **cao trào kháng Nhật cứu nước** mạnh mẽ, sục sôi làm tiền đề trực tiếp cho cuộc tổng khởi nghĩa toàn quốc.
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* 3. DIỄN BIẾN & SỨC LAN TỎA */}
      <div className="movement-node">
        <span className="text-stone-400 font-black text-xs md:text-sm uppercase tracking-wider block mb-4">
          📈 Diễn biến và Sức lan tỏa của Cao trào
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {results.map((r, idx) => (
            <div key={idx} className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:shadow-md transition-all duration-300 flex items-start gap-4">
              <div className="w-8 h-8 rounded-lg bg-red-50 text-red-800 flex items-center justify-center border border-red-100 flex-shrink-0 text-xs font-black mt-0.5">
                {idx + 1}
              </div>
              <div>
                <h6 className="text-xs md:text-sm font-bold text-stone-900 leading-snug">
                  {r.title}
                </h6>
                <p className="text-xs text-stone-600 leading-relaxed text-justify mt-1.5">
                  {r.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
