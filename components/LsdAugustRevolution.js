"use client";
import React, { useState, useRef } from "react";
import { 
  Clock, 
  AlertTriangle, 
  Flag, 
  MapPin, 
  Award, 
  CheckCircle, 
  BookOpen, 
  Trophy, 
  Building,
  Heart,
  ChevronRight
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function LsdAugustRevolution() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeCity, setActiveCity] = useState(0);
  const containerRef = useRef(null);

  const tabs = [
    { title: "Thời cơ & Sự chủ động của Đảng", icon: Clock },
    { title: "Diễn biến giành chính quyền", icon: MapPin },
    { title: "Ngày Độc lập 2-9-1945", icon: Award },
    { title: "Nguyên nhân thắng lợi", icon: Trophy }
  ];

  const cities = [
    {
      name: "4 Tỉnh giành chính quyền sớm nhất",
      date: "14 - 18/8/1945",
      desc: "Hải Dương, Bắc Giang, Hà Tĩnh, Quảng Nam. Các địa phương đã vô cùng chủ động, linh hoạt nổi dậy cướp chính quyền dựa vào thực tiễn địa phương mà chưa cần đợi lệnh khởi nghĩa từ Trung ương."
    },
    {
      name: "Hà Nội",
      date: "19-8-1945",
      desc: "Quần chúng cách mạng rầm rộ xuống đường mít tinh biểu tình tại Nhà hát Lớn, nhanh chóng chuyển thành tuần hành chiếm Phủ Khâm sai, Tòa Thị chính và các công sở chính quyền. Hơn 1 vạn quân Nhật tại đây tê liệt hoàn toàn không dám chống cự."
    },
    {
      name: "Thừa Thiên - Huế",
      date: "23-8-1945",
      desc: "Nhân dân nổi dậy giành chính quyền thắng lợi rực rỡ ở kinh đô. Đến chiều ngày 30-8-1945, vua Bảo Đại chính thức tuyên bố thoái vị và trao ấn kiếm vàng cho phái đoàn đại diện của Chính phủ lâm thời."
    },
    {
      name: "Sài Gòn",
      date: "25-8-1945",
      desc: "Hơn 1 triệu quần chúng nhân dân khắp các tỉnh Nam Bộ biểu tình tuần hành thị uy rầm rộ tiến vào trung tâm thành phố, nhanh chóng đánh chiếm toàn bộ các công sở đầu não và làm chủ hoàn toàn thành phố."
    }
  ];

  useGSAP(() => {
    if (!containerRef.current) return;
    const panels = containerRef.current.querySelectorAll(".rev-panel-box");
    if (panels.length > 0) {
      gsap.fromTo(panels,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", stagger: 0.08 }
      );
    }
  }, { dependencies: [activeTab], scope: containerRef });

  useGSAP(() => {
    if (!containerRef.current) return;
    const box = containerRef.current.querySelector(".city-desc-box");
    if (box) {
      gsap.fromTo(box,
        { opacity: 0, x: -15 },
        { opacity: 1, x: 0, duration: 0.4, ease: "power2.out" }
      );
    }
  }, { dependencies: [activeCity], scope: containerRef });

  return (
    <div ref={containerRef} className="w-full py-4 select-text font-sans">
      
      {/* Tabs selector */}
      <div className="flex flex-wrap gap-2 border-b border-stone-200/80 pb-3 mb-6">
        {tabs.map((tab, idx) => {
          const TabIcon = tab.icon;
          const isActive = idx === activeTab;
          return (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl font-bold text-xs md:text-sm transition-all duration-300 cursor-pointer border-none outline-none ${
                isActive 
                  ? "bg-red-800 text-white shadow-md shadow-red-700/10" 
                  : "bg-stone-100 hover:bg-stone-200/60 text-stone-600 hover:text-stone-900"
              }`}
            >
              <TabIcon className="w-4 h-4" />
              <span>{tab.title}</span>
            </button>
          );
        })}
      </div>

      {/* Main Panels */}
      <div className="rev-panel-box min-h-[380px]">
        
        {/* TAB 0: THỜI CƠ & CHỦ ĐỘNG */}
        {activeTab === 0 && (
          <div className="space-y-6">
            
            {/* Opportunity vs Challenge */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Thời cơ */}
              <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 border border-amber-250 rounded-2xl p-5 md:p-6 shadow-sm">
                <span className="text-[10px] font-bold text-amber-850 bg-amber-200 px-2.5 py-0.5 rounded-full uppercase tracking-wider block w-fit mb-3">
                  🌟 Thời cơ &ldquo;ngàn năm có một&rdquo;
                </span>
                <p className="text-xs md:text-sm text-stone-800 leading-relaxed text-justify">
                  Giữa tháng 8/1945, phát xít Nhật tuyên bố đầu hàng Đồng minh vô điều kiện, quân Nhật ở Đông Dương mất tinh thần chiến đấu, chính quyền tay sai hoang mang cực độ. **Thời cơ chỉ tồn tại trong khoảng nửa cuối tháng 8/1945** (kể từ khi Nhật đầu hàng đến trước khi quân Đồng minh đặt chân vào Đông Dương).
                </p>
              </div>

              {/* Thách thức */}
              <div className="bg-white border border-stone-200 rounded-2xl p-5 md:p-6 shadow-sm border-t-4 border-t-red-800">
                <span className="text-[10px] font-bold text-red-850 bg-red-50 px-2.5 py-0.5 rounded-full border border-red-100 uppercase tracking-wider block w-fit mb-3">
                  ⚠️ Thách thức ngoại bang đan xen
                </span>
                <p className="text-xs text-stone-655 leading-relaxed text-justify">
                  Theo quyết định Hội nghị Potsdam, quân đội Trung Hoa Dân quốc sẽ vào Bắc vĩ tuyến 16 và quân Anh vào Nam vĩ tuyến 16 giải giáp Nhật. Thực dân Pháp toan tính dựa vào Anh để quay lại cướp nước ta, trong khi Mỹ cam kết không cản trở Pháp khôi phục chủ quyền.
                </p>
              </div>

            </div>

            {/* Chủ động và chuẩn bị */}
            <div className="border border-stone-200 rounded-2xl p-5 md:p-6 bg-stone-50/50">
              <span className="text-stone-400 font-black text-[10px] md:text-xs uppercase tracking-wider block mb-4">
                📜 Sự chủ động chuẩn bị & Mệnh lệnh lịch sử của Đảng
              </span>

              <div className="space-y-4">
                
                {/* 1 */}
                <div className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-50 text-red-800 flex items-center justify-center border border-red-100 flex-shrink-0 text-[10px] font-bold mt-0.5">
                    1
                  </div>
                  <div>
                    <h6 className="text-xs font-bold text-stone-850">Lệnh Tổng khởi nghĩa (Đêm 13-8-1945)</h6>
                    <p className="text-[11px] text-stone-600 leading-relaxed text-justify">
                      Ủy ban Khởi nghĩa toàn quốc ban bố <strong>&ldquo;Quân lệnh số 1&rdquo;</strong>, chính thức phát đi mệnh lệnh tổng khởi nghĩa vũ trang trên phạm vi cả nước.
                    </p>
                  </div>
                </div>

                {/* 2 */}
                <div className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-50 text-red-800 flex items-center justify-center border border-red-100 flex-shrink-0 text-[10px] font-bold mt-0.5">
                    2
                  </div>
                  <div>
                    <h6 className="text-xs font-bold text-stone-850">Hội nghị toàn quốc của Đảng (14 và 15-8-1945)</h6>
                    <p className="text-[11px] text-stone-600 leading-relaxed text-justify">
                      Họp tại Tân Trào dưới sự chủ trì của lãnh tụ Hồ Chí Minh và Trường Chinh, quyết định phát động toàn dân nổi dậy giành chính quyền trước khi Đồng minh vào Đông Dương, xác định ba nguyên tắc chỉ đạo: <strong>tập trung, thống nhất và kịp thời</strong>.
                    </p>
                  </div>
                </div>

                {/* 3 */}
                <div className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-50 text-red-800 flex items-center justify-center border border-red-100 flex-shrink-0 text-[10px] font-bold mt-0.5">
                    3
                  </div>
                  <div>
                    <h6 className="text-xs font-bold text-stone-850">Đại hội quốc dân Tân Trào (16-8-1945)</h6>
                    <p className="text-[11px] text-stone-600 leading-relaxed text-justify">
                      Tán thành quyết định tổng khởi nghĩa, thông qua 10 chính sách lớn của Việt Minh và lập Ủy ban giải phóng dân tộc Việt Nam (Chính phủ lâm thời) do Hồ Chí Minh làm Chủ tịch.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        )}

        {/* TAB 1: DIỄN BIẾN GIÀNH CHÍNH QUYỀN */}
        {activeTab === 1 && (
          <div className="space-y-6">
            
            {/* City Selector Grid */}
            <div className="flex flex-col sm:flex-row gap-3">
              {cities.map((city, idx) => {
                const isActive = idx === activeCity;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveCity(idx)}
                    className={`flex-1 flex items-center gap-3 p-4 rounded-xl border text-left cursor-pointer transition-all duration-300 ${
                      isActive 
                        ? "bg-white border-red-800 shadow-sm ring-1 ring-red-800/25" 
                        : "bg-stone-50 border-stone-200 hover:bg-stone-100"
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 border text-xs font-black ${
                      isActive ? "bg-red-50 text-red-800 border-red-200" : "bg-stone-200/50 text-stone-500 border-stone-200"
                    }`}>
                      <Building className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[9px] font-bold uppercase tracking-wider text-stone-400 mb-0.5">
                        {city.date}
                      </div>
                      <div className="text-xs font-black text-stone-850 leading-tight">
                        {city.name}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* City detail panel */}
            <div className="city-desc-box bg-white border border-stone-200 rounded-2xl p-5 md:p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-bold text-red-850 bg-red-50 px-2.5 py-1 rounded-full border border-red-100 uppercase tracking-wide">
                  {cities[activeCity].date}
                </span>
                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">
                  Giành chính quyền thắng lợi
                </span>
              </div>

              <h5 className="text-base md:text-lg font-bold text-stone-900 font-playfair mb-3 leading-snug">
                {cities[activeCity].name}
              </h5>

              <p className="p-4 rounded-xl bg-stone-50 border border-stone-150 leading-[1.8] text-xs md:text-sm text-stone-700 text-justify">
                {cities[activeCity].desc}
              </p>
            </div>

            {/* Lập Chính phủ lâm thời */}
            <div className="p-5 rounded-2xl bg-amber-50/50 border border-amber-200/80 shadow-sm flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center border border-amber-250 flex-shrink-0">
                <span>🇻🇳</span>
              </div>
              <p className="text-xs md:text-sm text-stone-800 leading-relaxed text-justify">
                <strong>Thành lập Chính phủ lâm thời (27-8-1945)</strong>: Ủy ban dân tộc giải phóng cải tổ thành Chính phủ lâm thời nước Việt Nam Dân chủ Cộng hòa do Hồ Chí Minh làm Chủ tịch nhằm xác lập vị thế người chủ đất nước trước khi quân Đồng minh đặt chân đến Đông Dương.
              </p>
            </div>

          </div>
        )}

        {/* TAB 2: NGÀY ĐỘC LẬP 2-9-1945 */}
        {activeTab === 2 && (
          <div className="space-y-6">
            
            {/* Soạn thảo Tuyên ngôn độc lập */}
            <div className="bg-white border border-stone-200 rounded-2xl p-5 md:p-6 shadow-sm border-l-4 border-l-stone-450">
              <span className="text-[10px] font-bold text-stone-450 uppercase tracking-wider block mb-1">
                48 Hàng Ngang, Hà Nội
              </span>
              <h6 className="text-xs md:text-sm font-bold text-stone-850 font-playfair uppercase mb-2">
                Soạn thảo bản Tuyên ngôn Độc lập
              </h6>
              <p className="text-xs text-stone-600 leading-relaxed text-justify mb-3">
                Trong tình thế vô cùng khẩn trương, tại một căn phòng gác nhỏ nhà số 48 phố Hàng Ngang (Hà Nội), Chủ tịch Hồ Chí Minh tập trung trí tuệ soạn thảo bản <em>Tuyên ngôn Độc lập</em>. Ngày 30-8-1945, Người mời Ban Thường vụ và các bộ trưởng đến trao đổi góp ý. Người xúc động chia sẻ đây là văn kiện kết tinh xương máu của bao người con ưu tú đã hy sinh trên chiến trường và nhà tù.
              </p>
            </div>

            {/* Independence Day Monument Card */}
            <div className="bg-gradient-to-r from-red-950 via-red-900 to-red-950 text-white rounded-3xl p-6 md:p-8 shadow-lg border border-red-850 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />

              <div className="relative z-10 space-y-5">
                
                <div className="text-center space-y-1">
                  <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-500 text-red-950 text-[10px] font-black uppercase tracking-wider">
                    <span>🎆</span>
                    <span>Sự kiện lịch sử trọng đại</span>
                  </span>
                  <h4 className="text-base md:text-lg font-bold font-playfair text-amber-300">
                    QUẢNG TRƯỜNG BA ĐÌNH — NGÀY ĐỘC LẬP 2-9-1945
                  </h4>
                  <p className="text-xs text-red-200">
                    Chính phủ lâm thời nước Việt Nam Dân chủ Cộng hòa chính thức ra mắt quốc dân đồng bào.
                  </p>
                </div>

                <div className="border-t border-red-800/80 pt-4 space-y-4 text-xs md:text-sm leading-relaxed text-justify text-red-100">
                  <div className="flex gap-3">
                    <ChevronRight className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <p>
                      Chủ tịch Hồ Chí Minh thay mặt Chính phủ lâm thời đọc bản **Tuyên ngôn Độc lập**, trịnh trọng tuyên bố trước toàn thể thế giới sự khai sinh của nước **Việt Nam Dân chủ Cộng hòa**.
                    </p>
                  </div>
                  <div className="flex gap-3 border-t border-red-850/60 pt-3">
                    <ChevronRight className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <p>
                      Bản Tuyên ngôn khẳng định quyền tự do, bình đẳng thiêng liêng của mọi dân tộc, thể hiện ý chí quyết tâm sắt đá: **&ldquo;Toàn thể dân tộc Việt Nam quyết đem tất cả tinh thần và lực lượng, tính mạng và của cải để giữ vững quyền tự do, độc lập ấy.&rdquo;**
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        )}

        {/* TAB 3: NGUYÊN NHÂN THẮNG LỢI */}
        {activeTab === 3 && (
          <div className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* 1. Thời cơ */}
              <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block mb-1">🌍 Khách quan</span>
                <h6 className="text-xs md:text-sm font-bold text-stone-850 font-playfair uppercase mb-2">
                  Thời cơ thuận lợi
                </h6>
                <p className="text-xs text-stone-655 leading-relaxed text-justify">
                  Phát xít Nhật đầu hàng Đồng minh, quân đội Nhật ở Đông Dương rệu rã mất tinh thần, chính quyền tay sai tê liệt tạo điều kiện khách quan vô cùng thuận lợi.
                </p>
              </div>

              {/* 2. Chuẩn bị */}
              <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block mb-1">📈 Chủ quan</span>
                <h6 className="text-xs md:text-sm font-bold text-stone-850 font-playfair uppercase mb-2">
                  Chuẩn bị suốt 15 năm
                </h6>
                <p className="text-xs text-stone-655 leading-relaxed text-justify">
                  Thắng lợi là đỉnh cao của 15 năm chuẩn bị và đấu tranh gian khổ của toàn dân qua các cao trào 1930-1931, 1936-1939, trực tiếp là 1939-1945.
                </p>
              </div>

              {/* 3. Lãnh đạo */}
              <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block mb-1">🚩 Vai trò quyết định</span>
                <h6 className="text-xs md:text-sm font-bold text-stone-850 font-playfair uppercase mb-2">
                  Sự lãnh đạo của Đảng
                </h6>
                <p className="text-xs text-stone-655 leading-relaxed text-justify">
                  Đảng Cộng sản Đông Dương đề ra đường lối đúng đắn, phương pháp đấu tranh sáng tạo, linh hoạt, dày dạn kinh nghiệm và mật thiết gắn bó với quần chúng nhân dân.
                </p>
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}
