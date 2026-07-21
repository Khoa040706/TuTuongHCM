"use client";
import React, { useState } from "react";
import { Users, Target, Sparkles, CheckCircle2, BookmarkCheck } from "lucide-react";

export default function HcmTamNhiemVuVanHoaVisualizer() {
  const [activeTask, setActiveTask] = useState(1);

  const tasks = [
    { num: 1, title: "1. Xây dựng con người toàn diện", desc: "Tạo điều kiện phát triển nhân cách, đạo đức, trí tuệ, thể chất, tâm hồn, ý thức tuân thủ pháp luật; đấu tranh đẩy lùi cái xấu, tha hóa." },
    { num: 2, title: "2. Xây dựng môi trường văn hóa", desc: "Môi trường lành mạnh trong hệ thống chính trị, địa phương, làng bản; thực hiện chiến lược phát triển gia đình no ấm, tiến bộ, hạnh phúc, văn minh." },
    { num: 3, title: "3. Văn hóa trong chính trị & kinh tế", desc: "Chú trọng văn hóa trong Đảng, cơ quan nhà nước, đoàn thể -> nhân tố xây dựng hệ thống chính trị trong sạch, vững mạnh." },
    { num: 4, title: "4. Nâng cao chất lượng văn hóa", desc: "Phát triển nghệ thuật, nâng cao chất lượng sáng tạo văn học nghệ thuật Chân - Thiện - Mỹ." },
    { num: 5, title: "5. Quản lý báo chí, xuất bản", desc: "Làm tốt công tác lãnh đạo, quản lý báo chí, xuất bản; phát triển phương tiện thông tin đại chúng chân thực, kịp thời." },
    { num: 6, title: "6. Phát triển công nghiệp văn hóa", desc: "Phát triển công nghiệp văn hóa đi đôi với hoàn thiện thị trường sản phẩm dịch vụ văn hóa." },
    { num: 7, title: "7. Chủ động hội nhập quốc tế", desc: "Hội nhập quốc tế về văn hóa, tiếp thu tinh hoa văn hóa nhân loại." },
    { num: 8, title: "8. Đổi mới phương thức lãnh đạo", desc: "Đổi mới phương thức lãnh đạo của Đảng, nâng cao hiệu lực hiệu quả quản lý nhà nước đối với văn hóa." }
  ];

  const activeTaskObj = tasks.find((t) => t.num === activeTask);

  return (
    <div className="my-8 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-blue-50/40 via-white to-amber-50/40 border border-stone-200/80 text-stone-800 shadow-xl shadow-stone-200/50 overflow-hidden relative font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-stone-200 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-widest mb-2 shadow-xs">
            <Target className="w-3.5 h-3.5" /> 8 Nhiệm Vụ Đại Hội XII
          </div>
          <h3 className="text-xl md:text-2xl font-black text-stone-900 tracking-tight">
            Xây Dựng Con Người & 8 Nhiệm Vụ Cụ Thể Về Văn Hóa
          </h3>
          <p className="text-stone-600 text-xs md:text-sm mt-1">
            "Con người là trung tâm của chiến lược phát triển, đồng thời là chủ thể phát triển"
          </p>
        </div>
      </div>

      {/* Quote Banner */}
      <div className="my-6 p-4 rounded-2xl bg-amber-50 border border-amber-200 shadow-xs relative z-10">
        <h5 className="font-bold text-amber-900 text-xs mb-1 flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-amber-600" /> Trích dẫn Cương lĩnh 2011 & NQ 33-NQ/TW (2014):
        </h5>
        <p className="text-stone-800 text-xs md:text-sm italic font-serif">
          "Con người là trung tâm của chiến lược phát triển, đồng thời là chủ thể phát triển... Văn hóa, con người trở thành sức mạnh nội sinh, động lực phát triển đất nước và bảo vệ Tổ quốc."
        </p>
      </div>

      {/* 8 Tasks Grid Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 my-4 relative z-10">
        {tasks.map((t) => (
          <button
            key={t.num}
            onClick={() => setActiveTask(t.num)}
            className={`p-2.5 rounded-xl border text-left text-xs font-bold transition-all cursor-pointer ${
              activeTask === t.num
                ? "bg-blue-600 text-white border-blue-600 shadow-md"
                : "bg-white border-stone-200 text-stone-700 hover:bg-stone-50"
            }`}
          >
            Nhiệm vụ {t.num}
          </button>
        ))}
      </div>

      {/* Active Task Detail */}
      {activeTaskObj && (
        <div className="p-5 rounded-2xl bg-white border border-blue-300 shadow-md relative z-10 animate-fadeIn">
          <h4 className="text-base font-black text-blue-900 mb-2">
            {activeTaskObj.title}
          </h4>
          <p className="text-stone-700 text-xs md:text-sm leading-relaxed font-medium">
            {activeTaskObj.desc}
          </p>
        </div>
      )}
    </div>
  );
}
