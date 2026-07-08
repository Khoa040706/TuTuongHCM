"use client";
import React, { useState, useRef } from "react";
import { 
  Compass, 
  Sparkles, 
  HelpCircle, 
  ShieldAlert, 
  ArrowRight,
  Layers,
  Users,
  Award,
  Link2,
  CheckCircle2,
  Workflow,
  BookOpen
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function HcmAppSystem() {
  const [activeTab, setActiveTab] = useState("structure"); // structure | unity | democracy-types
  const [selectedEntity, setSelectedEntity] = useState(null); // null | dang | nhanuoc | mattran | nhandan
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      ".animate-tab-content",
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" }
    );
  }, { scope: containerRef, dependencies: [activeTab] });

  // Danh sách các tổ chức trong hệ thống chính trị
  const entities = [
    {
      id: "dang",
      title: "Đảng Cộng sản Việt Nam",
      role: "Hạt nhân lãnh đạo tuyệt đối",
      desc: "Đảng đề ra đường lối, chủ trương chiến lược phát triển đất nước, định hướng hoạt động cho toàn bộ hệ thống chính trị."
    },
    {
      id: "nhanuoc",
      title: "Nhà nước Pháp quyền XHCN",
      role: "Trụ cột quản lý vĩ mô",
      desc: "Thể chế hóa đường lối của Đảng thành luật pháp, chính sách cụ thể và tổ chức thực hiện, quản lý toàn diện đời sống xã hội."
    },
    {
      id: "mattran",
      title: "Mặt trận Tổ quốc & Đoàn thể",
      role: "Cầu nối đại đoàn kết",
      desc: "Tập hợp, liên kết rộng rãi quần chúng, thực hiện giám sát phản biện xã hội, đại diện bảo vệ quyền lợi chính đáng của đoàn viên, hội viên."
    },
    {
      id: "nhandan",
      title: "Nhân dân lao động",
      role: "Chủ thể quyền lực tối cao",
      desc: "Là người làm chủ đất nước, ủy quyền cho Nhà nước quản lý và trực tiếp tham gia xây dựng, giám sát toàn bộ hệ thống chính trị."
    }
  ];

  return (
    <div ref={containerRef} className="w-full bg-stone-50 border border-stone-200/80 rounded-3xl p-6 md:p-8 space-y-8 shadow-sm">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-200 pb-5">
        <div>
          <span className="text-[11px] font-bold text-[var(--accent)] uppercase tracking-widest bg-[rgba(var(--accent-rgb),0.1)] px-2.5 py-1 rounded-full">
            Mục IV.3
          </span>
          <h3 className="text-xl md:text-2xl font-serif font-black text-stone-900 mt-2">
            Củng cố và kiện toàn toàn bộ hệ thống chính trị
          </h3>
          <p className="text-stone-500 text-xs md:text-sm mt-1">
            Đảm bảo hệ thống chính trị hoạt động đồng bộ, hiệu quả nhằm phát huy tối đa quyền làm chủ của nhân dân.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex flex-wrap bg-stone-250/60 p-1 rounded-xl self-start md:self-center">
          <button
            onClick={() => setActiveTab("structure")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 ${
              activeTab === "structure"
                ? "bg-white text-stone-900 shadow-sm"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Cơ cấu Hệ thống
          </button>
          <button
            onClick={() => setActiveTab("unity")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 ${
              activeTab === "unity"
                ? "bg-white text-stone-900 shadow-sm"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Tính nhất nguyên
          </button>
          <button
            onClick={() => setActiveTab("democracy-types")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 ${
              activeTab === "democracy-types"
                ? "bg-white text-stone-900 shadow-sm"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Hình thức dân chủ
          </button>
        </div>
      </div>

      {/* Main Tab Content */}
      <div className="animate-tab-content">
        
        {/* Tab 1: Cơ cấu hệ thống chính trị */}
        {activeTab === "structure" && (
          <div className="space-y-6">
            <p className="text-stone-650 text-xs md:text-sm leading-relaxed">
              Các tổ chức trong hệ thống chính trị tuy có tính chất, vai trò, chức năng và phương thức hoạt động khác nhau nhưng luôn **gắn bó mật thiết với nhau**, tạo nên một chỉnh thể thống nhất (Click từng chủ thể để xem chi tiết):
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {entities.map((e) => (
                <div
                  key={e.id}
                  onClick={() => setSelectedEntity(selectedEntity === e.id ? null : e.id)}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all duration-300 flex flex-col justify-between min-h-[140px] ${
                    selectedEntity === e.id
                      ? "bg-white border-[var(--accent)] ring-2 ring-[rgba(var(--accent-rgb),0.1)] shadow-sm"
                      : "bg-stone-50 border-stone-200 hover:bg-white hover:border-stone-350"
                  }`}
                >
                  <div className="space-y-1.5">
                    <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block">
                      {e.role}
                    </span>
                    <h6 className="font-serif font-black text-stone-900 text-xs md:text-sm">
                      {e.title}
                    </h6>
                  </div>
                  
                  {selectedEntity === e.id ? (
                    <p className="text-stone-700 text-[11px] leading-relaxed pt-2 border-t border-stone-100 animate-tab-content font-sans">
                      {e.desc}
                    </p>
                  ) : (
                    <span className="text-[10px] text-stone-400 font-bold uppercase pt-2 border-t border-stone-100/50">
                      Bấm xem vai trò ▼
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div className="p-4 bg-stone-100/50 border border-stone-200 rounded-2xl flex gap-3 items-start">
              <span className="p-2 rounded bg-white text-[var(--accent)] shrink-0">
                <Workflow className="w-5 h-5" />
              </span>
              <p className="text-stone-700 text-xs md:text-sm leading-relaxed">
                Mục tiêu chung của việc củng cố cơ cấu là nhằm **phát huy sức mạnh xây dựng và bảo vệ Tổ quốc XHCN**, đảm bảo dân chủ thực sự được thực hiện chất lượng trên tất cả các lĩnh vực.
              </p>
            </div>
          </div>
        )}

        {/* Tab 2: Tính nhất nguyên và thống nhất */}
        {activeTab === "unity" && (
          <div className="space-y-6">
            <p className="text-stone-650 text-xs md:text-sm leading-relaxed">
              Hệ thống chính trị ở Việt Nam mang đặc trưng sâu sắc bởi **tính nhất nguyên và tính thống nhất**, được phân tích qua 3 phương diện:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm space-y-3">
                <span className="w-7 h-7 rounded-xl bg-[rgba(var(--accent-rgb),0.1)] text-[var(--accent)] flex items-center justify-center font-bold text-xs">1</span>
                <h5 className="font-serif font-black text-stone-900 text-xs md:text-sm uppercase tracking-wider">Nhất nguyên hệ thống</h5>
                <p className="text-stone-600 text-xs leading-relaxed">
                  Nhất nguyên về chính trị, về tổ chức và về tư tưởng. Toàn hệ thống hoạt động thống nhất theo hệ tư tưởng Mác - Lênin và tư tưởng Hồ Chí Minh.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm space-y-3">
                <span className="w-7 h-7 rounded-xl bg-[rgba(var(--accent-rgb),0.1)] text-[var(--accent)] flex items-center justify-center font-bold text-xs">2</span>
                <h5 className="font-serif font-black text-stone-900 text-xs md:text-sm uppercase tracking-wider">Thống nhất Lãnh đạo</h5>
                <p className="text-stone-600 text-xs leading-relaxed">
                  Thống nhất dưới sự lãnh đạo duy nhất và tuyệt đối của Đảng Cộng sản Việt Nam, loại bỏ nguy cơ phân liệt và xung đột chính trị.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm space-y-3">
                <span className="w-7 h-7 rounded-xl bg-[rgba(var(--accent-rgb),0.1)] text-[var(--accent)] flex items-center justify-center font-bold text-xs">3</span>
                <h5 className="font-serif font-black text-stone-900 text-xs md:text-sm uppercase tracking-wider">Thống nhất Mục tiêu</h5>
                <p className="text-stone-600 text-xs leading-relaxed">
                  Thống nhất về mục tiêu chính trị: Xây dựng một xã hội dân giàu, nước mạnh, dân chủ, công bằng, văn minh, vững bước đi lên CNXH.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Dân chủ trực tiếp & đại diện */}
        {activeTab === "democracy-types" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Dân chủ trực tiếp */}
            <div className="bg-white p-5.5 rounded-2xl border border-stone-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2 border-b border-stone-100 pb-3">
                <span className="p-1 rounded bg-[rgba(var(--accent-rgb),0.1)] text-[var(--accent)]">
                  <Users className="w-4.5 h-4.5" />
                </span>
                <h5 className="font-serif font-black text-stone-900 text-xs md:text-sm uppercase tracking-wider">
                  Dân chủ trực tiếp
                </h5>
              </div>
              <p className="text-stone-600 text-xs leading-relaxed">
                Là hình thức nhân dân trực tiếp thể hiện ý chí, quyết định các vấn đề cộng đồng bằng lá phiếu hoặc phát biểu đóng góp trực tiếp của bản thân mà không qua trung gian.
              </p>
              <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200 text-stone-700 text-xs leading-relaxed">
                <strong>Ví dụ:</strong> Tham gia bỏ phiếu bầu cử tại cơ sở, biểu quyết xây dựng các quy ước, hương ước thôn bản, biểu quyết trưng cầu ý dân cấp quốc gia.
              </div>
            </div>

            {/* Dân chủ đại diện */}
            <div className="bg-white p-5.5 rounded-2xl border border-stone-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2 border-b border-stone-100 pb-3">
                <span className="p-1 rounded bg-[rgba(var(--accent-rgb),0.1)] text-[var(--accent)]">
                  <Award className="w-4.5 h-4.5" />
                </span>
                <h5 className="font-serif font-black text-stone-900 text-xs md:text-sm uppercase tracking-wider">
                  Dân chủ đại diện
                </h5>
              </div>
              <p className="text-stone-600 text-xs leading-relaxed">
                Là hình thức nhân dân ủy quyền, bầu ra các đại biểu thay mặt mình để thảo luận và biểu quyết thông qua các chủ trương, luật pháp quan trọng của quốc gia và địa phương.
              </p>
              <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200 text-stone-700 text-xs leading-relaxed">
                <strong>Ví dụ:</strong> Hoạt động chất vấn, lập pháp của Quốc hội và Hội đồng nhân dân các cấp thay mặt toàn thể cử tri và nhân dân cả nước.
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Conclusion */}
      <div className="bg-gradient-to-br from-stone-900 to-stone-950 text-white p-6 rounded-3xl border border-stone-850 shadow-md space-y-2 text-center">
        <h5 className="font-serif font-black text-amber-500 text-xs md:text-sm uppercase tracking-wider">
          Mục tiêu cốt lõi của toàn bộ hệ thống
        </h5>
        <p className="text-stone-300 text-xs md:text-sm leading-relaxed max-w-3xl mx-auto">
          Củng cố, kiện toàn, nâng cao hiệu quả của hệ thống chính trị suy cho cùng chính là để bảo đảm quyền làm chủ tối cao của nhân dân lao động được phát huy đầy đủ và thực chất nhất.
        </p>
      </div>
    </div>
  );
}
