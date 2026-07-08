"use client";
import React, { useState, useRef } from "react";
import { 
  Compass, 
  Sparkles, 
  HelpCircle, 
  ShieldAlert, 
  ArrowRight,
  Users,
  CheckCircle2,
  FileText,
  AlertTriangle,
  Scale,
  Activity,
  Heart
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function HcmAppDemocracy() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      ".animate-step-detail",
      { opacity: 0, scale: 0.98 },
      { opacity: 1, scale: 1, duration: 0.35, ease: "power2.out" }
    );
  }, { scope: containerRef, dependencies: [activeStep] });

  // 4 bước dân chủ
  const steps = [
    {
      title: "Dân biết",
      desc: "Nhân dân có quyền được thông tin đầy đủ, kịp thời và minh bạch về các chủ trương, chính sách, pháp luật của Đảng, Nhà nước và các quyết định của chính quyền địa phương.",
      action: "Cung cấp công khai các quy hoạch, ngân sách, dự án và chính sách dân sinh."
    },
    {
      title: "Dân bàn",
      desc: "Nhân dân được trực tiếp đóng góp ý kiến, thảo luận dân chủ và phản biện xã hội đối với các kế hoạch, chương trình phát triển kinh tế - xã hội tại địa phương và cả nước.",
      action: "Tổ chức các hội nghị tiếp xúc cử tri, lấy ý kiến nhân dân rộng rãi trước khi ra quyết định."
    },
    {
      title: "Dân làm",
      desc: "Nhân dân là chủ thể trực tiếp thực hiện, lao động sáng tạo, thi đua sản xuất và tham gia các hoạt động xã hội theo đúng các mục tiêu đã đồng thuận bàn bạc.",
      action: "Đưa các chủ trương chính sách đi vào đời sống thực tế thông qua sức lao động của quần chúng."
    },
    {
      title: "Dân kiểm tra",
      desc: "Nhân dân thực hiện quyền thanh tra nhân dân, giám sát và kiểm tra hoạt động của các cơ quan nhà nước, cán bộ, công chức để phòng chống tiêu cực, tham nhũng.",
      action: "Thiết lập ban thanh tra nhân dân, ban giám sát đầu tư cộng đồng hoạt động thực chất."
    }
  ];

  return (
    <div ref={containerRef} className="w-full bg-stone-50 border border-stone-200/80 rounded-3xl p-6 md:p-8 space-y-8 shadow-sm">
      {/* Header */}
      <div>
        <span className="text-[11px] font-bold text-[var(--accent)] uppercase tracking-widest bg-[rgba(var(--accent-rgb),0.1)] px-2.5 py-1 rounded-full">
          Mục IV.2
        </span>
        <h3 className="text-xl md:text-2xl font-serif font-black text-stone-900 mt-2">
          Phát huy sức mạnh dân chủ xã hội chủ nghĩa
        </h3>
        <p className="text-stone-500 text-xs md:text-sm mt-1">
          Bản chất ưu việt của chế độ xã hội chủ nghĩa thể hiện ở quyền lực tối cao thuộc về nhân dân.
        </p>
      </div>

      {/* Dân biết dân bàn... Interactive Panel */}
      <div className="space-y-5">
        <h5 className="font-serif font-black text-stone-900 text-xs md:text-sm uppercase tracking-wider flex items-center gap-2">
          <Users className="w-4.5 h-4.5 text-[var(--accent)]" />
          Phương châm thực thi Dân chủ (Bấm từng bước)
        </h5>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {steps.map((st, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`p-4.5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between min-h-[110px] ${
                activeStep === idx
                  ? "bg-white border-[var(--accent)] ring-2 ring-[rgba(var(--accent-rgb),0.15)] shadow-sm"
                  : "bg-stone-50 border-stone-200/80 hover:bg-stone-100/60"
              }`}
            >
              <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-md ${
                activeStep === idx 
                  ? "bg-[rgba(var(--accent-rgb),0.1)] text-[var(--accent)]"
                  : "bg-stone-200 text-stone-600"
              }`}>
                Bước {idx + 1}
              </span>
              <h6 className="font-serif font-black text-stone-850 text-xs md:text-sm mt-3">
                {st.title}
              </h6>
            </button>
          ))}
        </div>

        {/* Detailed box */}
        <div className="p-5.5 bg-white border border-stone-200 rounded-3xl shadow-sm space-y-3.5 animate-step-detail">
          <h6 className="font-serif font-black text-stone-900 text-sm flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)]"></span>
            Phương châm Dân chủ: {steps[activeStep].title}
          </h6>
          <p className="text-stone-700 text-xs md:text-sm leading-relaxed">
            {steps[activeStep].desc}
          </p>
          <div className="p-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-600 text-xs font-semibold leading-normal">
            ⚙️ Hoạt động thực tiễn: {steps[activeStep].action}
          </div>
        </div>
      </div>

      {/* Hiến pháp & Pháp chế & Đạo đức */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Pháp chế & Nhân quyền */}
        <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm space-y-4">
          <div className="flex items-center gap-2 border-b border-stone-100 pb-3">
            <span className="p-1 rounded bg-[rgba(var(--accent-rgb),0.1)] text-[var(--accent)]">
              <Scale className="w-4.5 h-4.5" />
            </span>
            <h5 className="font-serif font-black text-stone-900 text-xs md:text-sm uppercase tracking-wider">
              Dân chủ gắn liền với Pháp chế & Hiến pháp
            </h5>
          </div>
          <ul className="space-y-3 text-stone-650 text-xs md:text-sm pl-1">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
              <span>Phát huy dân chủ không tách rời quá trình hoàn thiện hệ thống pháp luật của Nhà nước.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
              <span>Tôn trọng, bảo đảm, bảo vệ quyền con người, quyền và nghĩa vụ công dân theo Hiến pháp.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
              <span>Dân chủ đi đôi với kỷ cương, tăng cường pháp chế và đề cao trách nhiệm công dân.</span>
            </li>
          </ul>
        </div>

        {/* Vùng Cảnh báo */}
        <div className="bg-red-500/5 p-5 rounded-3xl border border-red-500/15 shadow-sm flex flex-col justify-between space-y-4">
          <div className="space-y-2.5">
            <div className="flex items-center gap-2 text-red-750">
              <AlertTriangle className="w-5 h-5 shrink-0" />
              <h5 className="font-serif font-black text-xs md:text-sm uppercase tracking-wider">
                Đấu tranh chống các biểu hiện lệch lạc
              </h5>
            </div>
            <p className="text-stone-700 text-xs leading-relaxed">
              Ngăn chặn hai khuynh hướng sai lầm phá hoại bản chất tốt đẹp của dân chủ:
            </p>
            <div className="grid grid-cols-2 gap-3 text-[11px] font-semibold text-stone-800">
              <div className="p-2.5 rounded-lg bg-white border border-red-200/20">
                ⚠️ Dân chủ cực đoan
                <span className="block text-[10px] font-normal text-stone-500 mt-1">Đòi hỏi tự do vô tổ chức, coi thường pháp luật.</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white border border-red-200/20">
                ⚠️ Dân chủ hình thức
                <span className="block text-[10px] font-normal text-stone-500 mt-1">Chỉ làm cho có lệ ở bề nổi, thiếu thực chất bên trong.</span>
              </div>
            </div>
          </div>
          <p className="text-red-800 text-[10px] md:text-xs leading-normal border-t border-red-200/20 pt-2.5 font-bold">
            → Xử lý nghiêm minh những hành vi lợi dụng dân chủ làm mất an ninh chính trị, trật tự xã hội; đồng thời trừng trị mọi hành vi xâm phạm quyền làm chủ chính đáng của nhân dân.
          </p>
        </div>
      </div>
    </div>
  );
}
