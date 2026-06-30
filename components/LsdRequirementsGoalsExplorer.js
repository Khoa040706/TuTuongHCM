"use client";
import React, { useState, useRef } from "react";
import { 
  GraduationCap, 
  Calendar, 
  BookOpen, 
  Target, 
  Check, 
  Sparkles, 
  Flame, 
  TrendingUp, 
  Library, 
  FileSpreadsheet, 
  ShieldCheck, 
  Compass, 
  Heart,
  ArrowRight
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function LsdRequirementsGoalsExplorer() {
  const [activeSubTab, setActiveSubTab] = useState(0);
  const containerRef = useRef(null);

  const subTabs = [
    { title: "Cấu trúc chương trình", icon: GraduationCap },
    { title: "Tiến trình trọng tâm", icon: Calendar },
    { title: "Nghiên cứu chuyên sâu", icon: BookOpen },
    { title: "Mục tiêu & Ý nghĩa", icon: Target }
  ];

  // GSAP Animation when activeSubTab changes
  useGSAP(() => {
    gsap.fromTo(".requirements-content-node",
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", stagger: 0.08 }
    );
  }, [activeSubTab]);

  return (
    <div ref={containerRef} className="w-full py-4 select-text font-sans">
      
      {/* Sub-tab Navigation */}
      <div className="flex flex-wrap gap-2 border-b border-stone-200 pb-3 mb-6">
        {subTabs.map((tab, idx) => {
          const TabIcon = tab.icon;
          const isActive = idx === activeSubTab;
          return (
            <button
              key={idx}
              onClick={() => setActiveSubTab(idx)}
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

      {/* Tab Panels */}
      <div className="requirements-content-node min-h-[300px]">
        
        {/* TAB 0: Cấu trúc chương trình theo hệ đào tạo */}
        {activeSubTab === 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Hệ không chuyên (2 tín chỉ) */}
            <div className="bg-white border border-stone-200 rounded-2xl p-5 md:p-6 shadow-sm border-t-4 border-t-slate-500 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-slate-50 text-slate-600 flex items-center justify-center border border-slate-100">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h6 className="text-xs md:text-sm font-black text-stone-900 uppercase tracking-wide">
                    Hệ không chuyên (2 tín chỉ)
                  </h6>
                </div>
                <p className="text-xs md:text-sm text-stone-500 font-semibold mb-4 italic">
                  Tập trung vào 3 thời kỳ cốt lõi của lịch sử Đảng:
                </p>
                <ul className="space-y-3 pl-0">
                  <li className="list-none flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded bg-slate-50 text-slate-650 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-xs md:text-sm text-stone-650 leading-relaxed">
                      <strong>1930 - 1945:</strong> Đảng ra đời, lãnh đạo đấu tranh giải phóng dân tộc, giành chính quyền.
                    </span>
                  </li>
                  <li className="list-none flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded bg-slate-50 text-slate-650 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-xs md:text-sm text-stone-650 leading-relaxed">
                      <strong>1945 - 1975:</strong> Tiến hành hai cuộc kháng chiến chống xâm lược và xây dựng chủ nghĩa xã hội ở miền Bắc.
                    </span>
                  </li>
                  <li className="list-none flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded bg-slate-50 text-slate-650 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-xs md:text-sm text-stone-650 leading-relaxed">
                      <strong>1975 - 2018:</strong> Quá độ lên chủ nghĩa xã hội trên phạm vi cả nước và tiến hành công cuộc Đổi mới.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Hệ chuyên lý luận (3 tín chỉ) */}
            <div className="bg-white border border-stone-200 rounded-2xl p-5 md:p-6 shadow-sm border-t-4 border-t-red-650 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-red-50 text-red-600 flex items-center justify-center border border-red-100">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h6 className="text-xs md:text-sm font-black text-stone-900 uppercase tracking-wide">
                    Hệ chuyên lý luận (3 tín chỉ)
                  </h6>
                </div>
                <p className="text-xs md:text-sm text-stone-500 font-semibold mb-4 italic">
                  Yêu cầu nội dung sâu rộng và đòi hỏi cao hơn:
                </p>
                <ul className="space-y-3.5 pl-0">
                  <li className="list-none flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-xs md:text-sm text-stone-650 leading-relaxed">
                      Giảng dạy sâu sắc và chi tiết hơn về toàn bộ tiến trình lịch sử hoạt động lãnh đạo của Đảng qua các thời kỳ.
                    </span>
                  </li>
                  <li className="list-none flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-xs md:text-sm text-stone-650 leading-relaxed">
                      Làm sáng tỏ một cách hệ thống các bài học kinh nghiệm và các Cương lĩnh chính trị của Đảng qua lịch sử.
                    </span>
                  </li>
                  <li className="list-none flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-xs md:text-sm text-stone-650 leading-relaxed">
                      Đặt yêu cầu cao về phát huy <strong>năng lực tự nghiên cứu và tư duy khoa học độc lập</strong> của người học.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        )}

        {/* TAB 1: Tiến trình lịch sử trọng tâm (Hệ không chuyên) */}
        {activeSubTab === 1 && (
          <div className="flex flex-col gap-6">
            
            {/* Stage 1: Trước 1930 */}
            <div className="flex flex-col md:flex-row items-stretch border border-stone-200 rounded-2xl overflow-hidden shadow-sm bg-white hover:shadow-md transition-all duration-300 border-l-4 border-l-amber-500">
              <div className="p-5 md:p-6 md:w-1/4 bg-amber-50/20 flex flex-col justify-center items-center border-b md:border-b-0 md:border-r border-stone-150 flex-shrink-0 text-center">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 border border-amber-100 flex items-center justify-center mb-2">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="text-xs font-black uppercase text-amber-700 tracking-wider">Giai đoạn 1</div>
                <div className="text-sm font-bold text-stone-850 mt-1">Trước 1930</div>
              </div>
              <div className="p-5 md:p-6 flex-1 flex items-center">
                <p className="text-xs md:text-sm text-stone-650 leading-relaxed font-sans">
                  Hiểu rõ mâu thuẫn xã hội thuộc địa; sự bế tắc của các khuynh hướng cứu nước cũ trước khi Đảng ra đời; vai trò lịch sử vĩ đại của <strong>Nguyễn Ái Quốc</strong> trong việc chuẩn bị lý luận, chính trị và tổ chức để thành lập Đảng.
                </p>
              </div>
            </div>

            {/* Stage 2: 1930 - 1975 */}
            <div className="flex flex-col md:flex-row items-stretch border border-stone-200 rounded-2xl overflow-hidden shadow-sm bg-white hover:shadow-md transition-all duration-300 border-l-4 border-l-red-650">
              <div className="p-5 md:p-6 md:w-1/4 bg-red-50/10 flex flex-col justify-center items-center border-b md:border-b-0 md:border-r border-stone-150 flex-shrink-0 text-center">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 border border-red-100 flex items-center justify-center mb-2">
                  <Flame className="w-5 h-5" />
                </div>
                <div className="text-xs font-black uppercase text-red-650 tracking-wider">Giai đoạn 2</div>
                <div className="text-sm font-bold text-stone-850 mt-1">1930 - 1975</div>
              </div>
              <div className="p-5 md:p-6 flex-1 flex items-center">
                <p className="text-xs md:text-sm text-stone-650 leading-relaxed font-sans">
                  Tiến trình hoàn thiện đường lối qua các cao trào cách mạng; các mốc son chói lọi gồm <strong>Cách mạng Tháng Tám (1945)</strong>, cuộc kháng chiến chống Pháp kết thúc bằng chiến thắng <strong>Điện Biên Phủ (1954)</strong> và cuộc kháng chiến chống Mỹ cứu nước thắng lợi ngày <strong>30-4-1975</strong>.
                </p>
              </div>
            </div>

            {/* Stage 3: 1975 - Nay */}
            <div className="flex flex-col md:flex-row items-stretch border border-stone-200 rounded-2xl overflow-hidden shadow-sm bg-white hover:shadow-md transition-all duration-300 border-l-4 border-l-emerald-600">
              <div className="p-5 md:p-6 md:w-1/4 bg-emerald-50/10 flex flex-col justify-center items-center border-b md:border-b-0 md:border-r border-stone-150 flex-shrink-0 text-center">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center mb-2">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div className="text-xs font-black uppercase text-emerald-700 tracking-wider">Giai đoạn 3</div>
                <div className="text-sm font-bold text-stone-850 mt-1">1975 - Nay</div>
              </div>
              <div className="p-5 md:p-6 flex-1 flex items-center">
                <p className="text-xs md:text-sm text-stone-650 leading-relaxed font-sans">
                  Quá trình tìm tòi, khảo nghiệm đường lối Đổi mới đất nước (1975-1986); bước ngoặt lịch sử tại <strong>Đại hội VI (12-1986)</strong> và năng lực tự phê bình, nhìn thẳng vào sự thật để sửa chữa những sai lầm, khuyết điểm của Đảng.
                </p>
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: Nội dung nghiên cứu chuyên sâu (Hệ chuyên lý luận) */}
        {activeSubTab === 2 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Lý luận kinh điển */}
            <div className="bg-white border border-stone-200 rounded-2xl p-5 md:p-6 shadow-sm border-t-4 border-t-indigo-500 hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-500 border border-indigo-100 flex items-center justify-center flex-shrink-0">
                  <Library className="w-5 h-5" />
                </div>
                <h6 className="text-[11px] md:text-xs font-black text-stone-900 uppercase tracking-wide">
                  Lý luận kinh điển
                </h6>
              </div>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
                Khai thác sâu sắc các tác phẩm lý luận kinh điển của Mác, Ăng-ghen, Lênin và Hồ Chí Minh để thấy được tính khoa học, tính sáng tạo của Đảng khi vận dụng những lý luận đó vào thực tiễn cách mạng Việt Nam.
              </p>
            </div>

            {/* Tính nhất quán của Cương lĩnh */}
            <div className="bg-white border border-stone-200 rounded-2xl p-5 md:p-6 shadow-sm border-t-4 border-t-amber-500 hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 border border-amber-100 flex items-center justify-center flex-shrink-0">
                  <FileSpreadsheet className="w-5 h-5" />
                </div>
                <h6 className="text-[11px] md:text-xs font-black text-stone-900 uppercase tracking-wide">
                  Nhất quán Cương lĩnh
                </h6>
              </div>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
                Nghiên cứu sự phát triển mạch lạc, tính nhất quán qua các bản Cương lĩnh lớn của Đảng (2-1930, 10-1930, 1951, 1991, bổ sung phát triển 2011) cùng các văn kiện tại các kỳ Đại hội Đảng lớn (Đại hội IV, VI, XII).
              </p>
            </div>

            {/* Xây dựng Đảng cầm quyền */}
            <div className="bg-white border border-stone-200 rounded-2xl p-5 md:p-6 shadow-sm border-t-4 border-t-red-650 hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-red-50 text-red-600 border border-red-100 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h6 className="text-[11px] md:text-xs font-black text-stone-900 uppercase tracking-wide">
                  Xây dựng Đảng cầm quyền
                </h6>
              </div>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
                Nghiên cứu sâu sắc năng lực lãnh đạo từ năm 1945; kiên quyết đấu tranh chống quan liêu, tham nhũng, chống các biểu hiện <em>&quot;tự diễn biến&quot;</em>, <em>&quot;tự chuyển hóa&quot;</em> trong nội bộ theo tinh thần Nghị quyết Trung ương 4 khóa XII.
              </p>
            </div>

          </div>
        )}

        {/* TAB 3: Mục tiêu và ý nghĩa môn học */}
        {activeSubTab === 3 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Bản chất khoa học */}
            <div className="bg-white border border-stone-200 rounded-2xl p-5 md:p-6 shadow-sm border-t-4 border-t-emerald-600 flex flex-col md:flex-row gap-4 items-start hover:shadow-md transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center flex-shrink-0">
                <Compass className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <h6 className="text-xs md:text-sm font-black text-stone-900 uppercase tracking-wide">
                  Bản chất khoa học
                </h6>
                <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
                  Giúp người học nhận diện Lịch sử Đảng thực sự là một <strong>&quot;pho lịch sử bằng vàng&quot;</strong>, từ đó đúc kết được những bài học quý báu có tính quy luật của cách mạng Việt Nam để tiếp tục vận dụng trong tương lai.
                </p>
              </div>
            </div>

            {/* Giáo dục tư tưởng */}
            <div className="bg-white border border-stone-200 rounded-2xl p-5 md:p-6 shadow-sm border-t-4 border-t-red-650 flex flex-col md:flex-row gap-4 items-start hover:shadow-md transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-650 border border-red-100 flex items-center justify-center flex-shrink-0">
                <Heart className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <h6 className="text-xs md:text-sm font-black text-stone-900 uppercase tracking-wide">
                  Giáo dục tư tưởng
                </h6>
                <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
                  Nâng cao nhận thức lý luận, bồi đắp niềm tin sắt đá vào sự lãnh đạo của Đảng, khơi dậy truyền thống yêu nước sâu sắc và củng cố lý tưởng cách mạng cho thế hệ trẻ xây dựng và bảo vệ đất nước.
                </p>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
