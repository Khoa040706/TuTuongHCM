"use client";
import React, { useState } from "react";
import { Compass, Filter, ShieldCheck, Heart, Sparkles, Layers, BookOpenCheck } from "lucide-react";

export default function HcmCultureAcculturationVisualizer() {
  const [activeTab, setActiveTab] = useState("goc-dan-toc");
  const [selectedSource, setSelectedSource] = useState(null);

  const sources = [
    {
      id: "dong-phuong",
      title: "Văn hóa Đông Phương",
      tag: "Phương Đông",
      desc: "Hệ giá trị cộng đồng, đạo đức, triết lý phương Đông được chắt lọc tinh hoa, phù hợp với tâm lý quốc dân."
    },
    {
      id: "tay-phuong",
      title: "Văn hóa Tây Phương (Pháp, Mỹ...)",
      tag: "Phương Tây",
      desc: "Tinh thần tư tưởng tự do, bình đẳng, bác ái, văn minh khoa học kỹ thuật hiện đại của nhân loại."
    },
    {
      id: "kim-co",
      title: "Truyền thống & Hiện đại (Kim - Cổ)",
      tag: "Thời đại",
      desc: "Kế thừa kinh nghiệm tốt của văn hóa cũ và văn hóa hiện nay để trau dồi cho văn hóa Việt Nam."
    }
  ];

  return (
    <div className="my-8 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-emerald-50/40 via-white to-amber-50/40 border border-stone-200/80 text-stone-800 shadow-xl shadow-stone-200/50 overflow-hidden relative font-sans">
      {/* Background glow */}
      <div className="absolute top-0 right-1/3 w-80 h-80 bg-emerald-300/20 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-stone-200 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-widest mb-2 shadow-xs">
            <Compass className="w-3.5 h-3.5" /> Bộ Lọc Tiếp Biến Văn Hóa
          </div>
          <h3 className="text-xl md:text-2xl font-black text-stone-900 tracking-tight">
            Quy Luật Tiếp Thu Văn Hóa Nhân Loại & Bản Sắc Dân Tộc
          </h3>
          <p className="text-stone-600 text-xs md:text-sm mt-1">
            "Lấy văn hóa dân tộc làm gốc" - Chắt lọc tinh hoa Đông, Tây, Kim, Cổ
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b border-stone-200 my-6 relative z-10 gap-2">
        <button
          onClick={() => setActiveTab("goc-dan-toc")}
          className={`px-4 py-2.5 rounded-t-xl text-xs md:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === "goc-dan-toc"
              ? "bg-red-600 text-white shadow-md"
              : "text-stone-600 hover:text-stone-900 bg-stone-100/70 hover:bg-stone-200/60"
          }`}
        >
          <ShieldCheck className="w-4 h-4" /> 1. Bản Sắc Dân Tộc (Gốc Cốt Lõi)
        </button>

        <button
          onClick={() => setActiveTab("bo-loc-tinh-hoa")}
          className={`px-4 py-2.5 rounded-t-xl text-xs md:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === "bo-loc-tinh-hoa"
              ? "bg-emerald-600 text-white shadow-md"
              : "text-stone-600 hover:text-stone-900 bg-stone-100/70 hover:bg-stone-200/60"
          }`}
        >
          <Filter className="w-4 h-4" /> 2. Bộ Lọc Tiếp Thu (Đông-Tây-Kim-Cổ)
        </button>
      </div>

      {/* Tab 1: Bản sắc dân tộc làm gốc */}
      {activeTab === "goc-dan-toc" && (
        <div className="space-y-6 relative z-10 animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Nội dung bản sắc */}
            <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm hover:border-red-400 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-red-100 text-red-700">
                  <Heart className="w-5 h-5" />
                </div>
                <h4 className="font-extrabold text-stone-900 text-sm md:text-base">
                  Khía Cạnh NỘI DUNG
                </h4>
              </div>
              <ul className="space-y-2 text-xs md:text-sm text-stone-700 font-medium">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  Lòng yêu nước nồng nàn, thương nòi, tinh thần đoàn kết
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  Ý chí tự lực, tự cường, tự tôn dân tộc
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  Thành quả lao động, sản xuất và đấu tranh dựng nước, giữ nước
                </li>
              </ul>
            </div>

            {/* Hình thức bản sắc */}
            <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm hover:border-amber-400 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-amber-100 text-amber-800">
                  <Layers className="w-5 h-5" />
                </div>
                <h4 className="font-extrabold text-stone-900 text-sm md:text-base">
                  Khía Cạnh HÌNH THỨC
                </h4>
              </div>
              <ul className="space-y-2 text-xs md:text-sm text-stone-700 font-medium">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  Tiếng nói, chữ viết, kho tàng ca dao tục ngữ phong phú
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  Phong tục tập quán, lễ nghi truyền thống Việt Nam
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  Kiến trúc, hội họa, nhạc vũ mang đậm tâm hồn Việt
                </li>
              </ul>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-gradient-to-r from-red-50 to-amber-50 border border-red-200 shadow-sm">
            <h5 className="font-bold text-red-800 text-sm mb-1 flex items-center gap-2">
              <BookOpenCheck className="w-4 h-4" /> Nguyên tắc chỉ đạo cốt lõi của Bác Hồ:
            </h5>
            <p className="text-stone-800 text-xs md:text-sm leading-relaxed italic font-serif">
              "Phải lấy văn hóa dân tộc làm gốc — đó là điều kiện, cơ sở để tiếp thu văn hóa nhân loại. Tiếp thu cái hay cái tốt để tạo nên nền văn hóa Việt Nam có tinh thần thuần túy Việt Nam để hợp với tinh thần dân chủ."
            </p>
          </div>
        </div>
      )}

      {/* Tab 2: Bộ lọc tiếp thu */}
      {activeTab === "bo-loc-tinh-hoa" && (
        <div className="space-y-6 relative z-10 animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {sources.map((src) => (
              <button
                key={src.id}
                onClick={() => setSelectedSource(src.id)}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                  selectedSource === src.id
                    ? "bg-emerald-50 border-emerald-400 text-emerald-950 shadow-md ring-1 ring-emerald-400/30"
                    : "bg-white border-stone-200 hover:border-stone-300 text-stone-700 hover:bg-stone-50 shadow-xs"
                }`}
              >
                <span className="inline-block px-2 py-0.5 rounded text-[10px] uppercase font-bold bg-emerald-100 text-emerald-800 mb-2">
                  {src.tag}
                </span>
                <h5 className="font-extrabold text-sm text-stone-900 mb-1">{src.title}</h5>
                <p className="text-stone-600 text-xs leading-snug">{src.desc}</p>
              </button>
            ))}
          </div>

          <div className="p-5 rounded-2xl bg-white border border-emerald-200 shadow-md">
            <h5 className="font-extrabold text-emerald-800 text-sm mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> Tiêu chí & Nhận xét của Quốc Tế:
            </h5>
            <div className="space-y-3 text-xs md:text-sm text-stone-700 font-medium">
              <p>
                • <strong>Tiêu chí tiếp thu:</strong> "Cái gì hay, cái gì tốt là ta học lấy." Toàn diện Đông, Tây, kim, cổ nhưng không rập khuôn máy móc.
              </p>
              <p className="italic text-stone-800 border-l-2 border-emerald-500 pl-3 font-serif bg-emerald-50/50 p-2.5 rounded-r-lg">
                Nhà báo Mỹ (John Gunther) nhận xét: "Cụ Hồ không phải là người dân tộc chủ nghĩa hẹp hòi, mà là người yêu nền văn hóa Pháp trong khi chống thực dân Pháp, trân trọng truyền thống cách mạng Pháp trong khi đấu tranh chống đế quốc Pháp."
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
