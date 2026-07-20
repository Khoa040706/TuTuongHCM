"use client";
import React, { useRef } from "react";
import { 
  TrendingUp, 
  Flame, 
  HelpCircle, 
  MapPin, 
  FileText, 
  Newspaper,
  Compass,
  AlertTriangle,
  ArrowRight
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function LsdCommunistOrganizations() {
  const containerRef = useRef(null);

  const contextCards = [
    {
      title: "Sự truyền bá lý luận",
      icon: TrendingUp,
      desc: "Nguyễn Ái Quốc và các cấp bộ Hội Việt Nam Cách mạng thanh niên tích cực truyền bá chủ nghĩa Mác-Lênin, thúc đẩy phong trào yêu nước chuyển dịch mạnh mẽ theo khuynh hướng vô sản."
    },
    {
      title: "Phong trào công nhân bùng nổ",
      icon: Flame,
      desc: "Giai đoạn 1928-1929, số lượng các cuộc đấu tranh của công nhân tăng gấp 2,5 lần so với những năm 1926-1927."
    },
    {
      title: "Nhu cầu tổ chức mới",
      icon: HelpCircle,
      desc: "Đến năm 1929, Hội Việt Nam Cách mạng thanh niên không còn đủ sức lãnh đạo trước sự phát triển vượt bậc của phong trào cách mạng."
    }
  ];

  const organizations = [
    {
      name: "Đông Dương Cộng sản Đảng",
      date: "17/06/1929",
      themeColor: "border-t-red-800 bg-red-500/5",
      badgeColor: "bg-red-50 text-red-800 border-red-100",
      iconColor: "text-red-800 bg-red-100",
      bullets: [
        { label: "Sự hình thành", text: "Thành lập từ các nhà lãnh đạo Kỳ bộ Bắc Kỳ sau khi lập Chi bộ Cộng sản đầu tiên tại số 5D Hàm Long vào tháng 3/1929." },
        { label: "Sự kiện", text: "Đại hội thành lập tại số 312 Khâm Thiên (Hà Nội) đã thông qua Tuyên ngôn, Điều lệ, lấy cờ đỏ búa liềm làm Đảng kỳ và xuất bản báo Búa liềm." }
      ]
    },
    {
      name: "An Nam Cộng sản Đảng",
      date: "11/1929",
      themeColor: "border-t-amber-600 bg-amber-500/5",
      badgeColor: "bg-amber-50 text-amber-800 border-amber-100",
      iconColor: "text-amber-700 bg-amber-100",
      bullets: [
        { label: "Sự hình thành", text: "Được các thanh niên yêu nước ở Nam Kỳ thành lập tại Khánh Hội (Sài Gòn) dựa trên cơ sở các chi bộ cộng sản tại đây." },
        { label: "Sự kiện", text: "Tổ chức đã công bố Điều lệ và quyết định xuất bản Tạp chí Bônsêvích làm cơ quan ngôn luận." }
      ]
    },
    {
      name: "Đông Dương Cộng sản Liên đoàn",
      date: "12/1929",
      themeColor: "border-t-emerald-650 bg-emerald-500/5",
      badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-100",
      iconColor: "text-emerald-700 bg-emerald-100",
      bullets: [
        { label: "Sự hình thành", text: "Xuất phát từ các đảng viên tiên tiến (như Trần Phú, Nguyễn Thị Minh Khai) trong Tân Việt Cách mạng đảng ở Trung Kỳ cải tổ theo khuynh hướng vô sản." },
        { label: "Sự kiện", text: "Quá trình thành lập khởi đầu từ Tuyên đạt tháng 9/1929 và hoàn tất vào cuối tháng 12/1929 tại Đại hội đại biểu liên tỉnh ở Hà Tĩnh." }
      ]
    }
  ];

  useGSAP(() => {
    {
      const targets = containerRef.current ? containerRef.current.querySelectorAll(".org-node") : document.querySelectorAll(".org-node");
      if (targets && targets.length > 0) {
      gsap.fromTo(targets,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", stagger: 0.08 }
    );
      }
    }
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="w-full py-4 select-text font-sans space-y-8">
      
      {/* 1. BỐI CẢNH LỊCH SỬ */}
      <div className="org-node">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-stone-400 font-black text-xs md:text-sm uppercase tracking-wider">
            📈 Bối cảnh lịch sử
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contextCards.map((c, idx) => {
            const CardIcon = c.icon;
            return (
              <div key={idx} className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-stone-100 text-stone-700 flex items-center justify-center border border-stone-200 flex-shrink-0">
                    <CardIcon className="w-4.5 h-4.5" />
                  </div>
                  <h6 className="text-xs md:text-sm font-bold text-stone-900 uppercase tracking-wide">
                    {c.title}
                  </h6>
                </div>
                <p className="text-xs text-stone-650 leading-relaxed text-justify">
                  {c.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. BA TỔ CHỨC CỘNG SẢN */}
      <div className="org-node">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-stone-400 font-black text-xs md:text-sm uppercase tracking-wider">
            🏢 Sự ra đời của ba tổ chức cộng sản (Nửa cuối năm 1929)
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {organizations.map((org, idx) => (
            <div 
              key={idx} 
              className={`bg-white border border-stone-200 rounded-2xl p-5 md:p-6 shadow-sm border-t-4 ${org.themeColor} flex flex-col justify-between hover:shadow-md transition-all duration-300`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded border uppercase tracking-wider ${org.badgeColor}`}>
                    {org.date}
                  </span>
                </div>

                <h6 className="text-sm md:text-base font-bold text-stone-900 mb-4 font-playfair">
                  {org.name}
                </h6>

                <div className="space-y-4">
                  {org.bullets.map((b, bIdx) => (
                    <div key={bIdx} className="space-y-1">
                      <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">
                        ✦ {b.label}
                      </span>
                      <p className="text-xs text-stone-650 leading-relaxed text-justify">
                        {b.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Ý NGHĨA VÀ HẠN CHẾ */}
      <div className="org-node grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Ý nghĩa */}
        <div className="bg-white border border-stone-200 rounded-2xl p-5 md:p-6 shadow-sm border-l-4 border-l-emerald-650 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-100 flex-shrink-0">
                <Compass className="w-4 h-4" />
              </div>
              <h6 className="text-sm md:text-base font-bold text-stone-900 font-playfair uppercase">
                Ý nghĩa lịch sử
              </h6>
            </div>
            <p className="text-xs md:text-sm text-stone-650 leading-relaxed text-justify">
              Khẳng định bước phát triển về chất của phong trào yêu nước Việt Nam, hoàn toàn phù hợp với xu thế khách quan của lịch sử.
            </p>
          </div>
        </div>

        {/* Hạn chế */}
        <div className="bg-white border border-stone-200 rounded-2xl p-5 md:p-6 shadow-sm border-l-4 border-l-red-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-red-50 text-red-800 flex items-center justify-center border border-red-100 flex-shrink-0">
                <AlertTriangle className="w-4 h-4" />
              </div>
              <h6 className="text-sm md:text-base font-bold text-stone-900 font-playfair uppercase">
                Hạn chế mấu chốt
              </h6>
            </div>
            <p className="text-xs md:text-sm text-stone-650 leading-relaxed text-justify">
              Các tổ chức hoạt động biệt lập, đều tự nhận là đảng cách mạng chân chính duy nhất, dẫn đến nguy cơ phân tán lực lượng và thiếu thống nhất trong cả nước.
            </p>
          </div>
        </div>

      </div>

      {/* Yêu cầu mới Callout */}
      <div className="org-node p-5 rounded-2xl bg-amber-50/60 border border-amber-250 shadow-sm flex items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center border border-amber-200 flex-shrink-0">
          <ArrowRight className="w-5 h-5 animate-pulse" />
        </div>
        <div>
          <span className="text-[10px] font-bold text-amber-850 uppercase tracking-wider block mb-0.5">
            🎯 Yêu cầu lịch sử mới
          </span>
          <p className="text-xs md:text-sm font-bold text-stone-800 leading-relaxed">
            Thực tế đặt ra nhu cầu cấp bách phải thành lập một chính đảng cách mạng duy nhất để tập hợp sức mạnh toàn dân tộc.
          </p>
        </div>
      </div>

    </div>
  );
}
