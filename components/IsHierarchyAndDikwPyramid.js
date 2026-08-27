"use client";
import React, { useState } from "react";
import { 
  BarChart3, 
  Crown, 
  Layers, 
  Activity, 
  Database, 
  Lightbulb, 
  FileSpreadsheet, 
  TrendingUp, 
  Sparkles, 
  ArrowUp,
  BrainCircuit,
  Target
} from "lucide-react";

export default function IsHierarchyAndDikwPyramid() {
  const [activeView, setActiveView] = useState("is-hierarchy"); // "is-hierarchy" | "dikw"
  const [selectedLevel, setSelectedLevel] = useState("ess"); // "ess" | "mis" | "tps"
  const [selectedDikw, setSelectedDikw] = useState("knowledge"); // "data" | "info" | "knowledge"

  const isLevels = {
    ess: {
      id: "ess",
      short: "ESS",
      name: "Executive Support Systems",
      vnName: "Hệ thống hỗ trợ điều hành cấp cao",
      target: "Lãnh đạo cấp cao (Executives, Board of Directors, CEO, CFO)",
      scope: "Quyết định chiến lược dài hạn (Strategic Decisions: 3 - 5 năm)",
      color: "from-amber-500 to-red-500",
      bgBorder: "border-amber-400 bg-amber-950/30",
      accentText: "text-amber-300",
      icon: Crown,
      inputs: "Dữ liệu tổng hợp từ MIS, tin tức thị trường, đối thủ, luật pháp, báo cáo kinh tế vĩ mô.",
      outputs: "Dashboard trực quan hóa KPI vĩ mô, biểu đồ dự báo xu hướng, phân tích kịch bản sáp nhập.",
      example: "Phân tích dự báo: Có nên đầu tư 200 tỷ mở rộng thị trường sang Đông Nam Á trong 3 năm tới?"
    },
    mis: {
      id: "mis",
      short: "MIS / DSS",
      name: "Management Information & Decision Support",
      vnName: "Hệ thống thông tin quản lý & Hỗ trợ ra quyết định",
      target: "Quản lý cấp trung (Middle Managers, Trưởng phòng kinh doanh, Quản đốc)",
      scope: "Quyết định chiến thuật trung hạn (Tactical Decisions: Tuần, Tháng, Quý)",
      color: "from-cyan-500 to-blue-600",
      bgBorder: "border-cyan-400 bg-cyan-950/30",
      accentText: "text-cyan-300",
      icon: TrendingUp,
      inputs: "Dữ liệu tóm tắt từ TPS, định mức chi phí, kế hoạch doanh số, lịch trình sản xuất.",
      outputs: "Báo cáo so sánh kế hoạch vs thực tế, cảnh báo vượt chi phí, mô phỏng giá bán tối ưu.",
      example: "Báo cáo doanh số tháng 8: Mặt hàng nào bán chậm cần chạy chương trình khuyến mãi giảm giá 15%?"
    },
    tps: {
      id: "tps",
      short: "TPS",
      name: "Transaction Processing Systems",
      vnName: "Hệ thống xử lý giao dịch tác nghiệp",
      target: "Nhân viên tác nghiệp (Operational Staff, Thu ngân, Thủ kho, Giao dịch viên)",
      scope: "Quyết định tác nghiệp hàng ngày (Operational Decisions: Từng phút, Từng giờ)",
      color: "from-emerald-500 to-teal-600",
      bgBorder: "border-emerald-400 bg-emerald-950/30",
      accentText: "text-emerald-300",
      icon: Activity,
      inputs: "Sự kiện giao dịch: Quẹt thẻ, quét mã vạch, đặt hàng, điểm danh, chuyển khoản ATM.",
      outputs: "Biên lai thanh toán, cập nhật tức thì số dư tài khoản, phiếu xuất kho, log giao dịch.",
      example: "Xử lý giao dịch: Khách hàng quẹt thẻ thanh toán 250.000 VNĐ -> Trừ số dư và in hóa đơn."
    }
  };

  const dikwStages = {
    data: {
      id: "data",
      title: "1. Data (Dữ liệu)",
      sub: "Dữ kiện thô chưa qua gọt giũa",
      icon: Database,
      color: "border-slate-600 bg-slate-900 text-slate-300",
      desc: "Các con số, chuỗi ký tự, hình ảnh, sự kiện riêng lẻ chưa có ngữ cảnh.",
      example: "Con số thô: '38', 'HN', '08:30', '1020'."
    },
    info: {
      id: "info",
      title: "2. Information (Thông tin)",
      sub: "Dữ liệu đã được gán ngữ cảnh có ý nghĩa",
      icon: FileSpreadsheet,
      color: "border-cyan-500 bg-cyan-950/40 text-cyan-300",
      desc: "Dữ liệu được sắp xếp, tổng hợp, có ý nghĩa giúp người đọc hiểu 'Cái gì đang xảy ra'.",
      example: "Ngữ cảnh: 'Nhiệt độ tại Hà Nội lúc 08:30 sáng nay là 38°C (Rất nóng)'."
    },
    knowledge: {
      id: "knowledge",
      title: "3. Knowledge (Tri thức)",
      sub: "Sự thấu hiểu (Insight) để ra quyết định",
      icon: Lightbulb,
      color: "border-amber-500 bg-amber-950/40 text-amber-300",
      desc: "Tổng hợp thông tin cùng kinh nghiệm thực tế để biết 'Tại sao lại như vậy' và 'Cần làm gì'.",
      example: "Insight hành động: 'Hôm nay nắng nóng 38°C kéo dài -> Nhu cầu tiêu thụ nước giải khát tăng 40% -> Cần nhập gấp thêm 500 thùng nước'."
    }
  };

  return (
    <div className="w-full my-8 bg-slate-900 border border-slate-700/80 rounded-2xl p-5 sm:p-7 shadow-xl text-slate-100">
      {/* Studio Top Control */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
            <Layers className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              Studio: Tháp Phân Cấp IS & Kim Tự Tháp DIKW
            </h2>
            <p className="text-xs text-slate-400">
              Khám phá phân tầng hệ thống theo cấp quản lý và chuỗi giá trị biến dữ liệu thành tri thức.
            </p>
          </div>
        </div>

        {/* View Switcher */}
        <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => setActiveView("is-hierarchy")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeView === "is-hierarchy"
                ? "bg-amber-500 text-slate-950 shadow-md"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Crown className="w-3.5 h-3.5" /> Tháp 3 Tầng IS (ESS/MIS/TPS)
          </button>
          <button
            onClick={() => setActiveView("dikw")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeView === "dikw"
                ? "bg-cyan-500 text-slate-950 shadow-md"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <BrainCircuit className="w-3.5 h-3.5" /> Chuỗi Data ➔ Info ➔ Knowledge
          </button>
        </div>
      </div>

      {activeView === "is-hierarchy" ? (
        <div>
          {/* 3-Tier Visual Pyramid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Column: Interactive Pyramid Stacks */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-3">
              <span className="text-xs uppercase font-extrabold tracking-wider text-slate-400 mb-1 flex items-center gap-1.5">
                <ArrowUp className="w-4 h-4 text-amber-400" /> Cấp bậc quản trị (Từ Chiến lược đến Tác nghiệp)
              </span>

              {/* Tier 1: ESS */}
              <div
                onClick={() => setSelectedLevel("ess")}
                className={`cursor-pointer transition-all duration-300 rounded-xl p-3.5 mx-8 border flex items-center justify-between ${
                  selectedLevel === "ess"
                    ? "bg-gradient-to-r from-amber-600 to-red-600 text-white border-amber-300 ring-2 ring-amber-400/50 shadow-lg scale-105"
                    : "bg-slate-950/80 border-slate-800 text-slate-300 hover:border-slate-700"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Crown className="w-5 h-5" />
                  <div>
                    <div className="font-extrabold text-sm">Cấp Chiến lược: ESS</div>
                    <div className="text-[11px] opacity-80">Lãnh đạo cấp cao (CEO, Board)</div>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold bg-black/30 px-2 py-0.5 rounded">Top</span>
              </div>

              {/* Tier 2: MIS / DSS */}
              <div
                onClick={() => setSelectedLevel("mis")}
                className={`cursor-pointer transition-all duration-300 rounded-xl p-4 mx-4 border flex items-center justify-between ${
                  selectedLevel === "mis"
                    ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white border-cyan-300 ring-2 ring-cyan-400/50 shadow-lg scale-105"
                    : "bg-slate-950/80 border-slate-800 text-slate-300 hover:border-slate-700"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <TrendingUp className="w-5 h-5" />
                  <div>
                    <div className="font-extrabold text-sm">Cấp Chiến thuật: MIS / DSS</div>
                    <div className="text-[11px] opacity-80">Quản lý cấp trung (Trưởng phòng)</div>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold bg-black/30 px-2 py-0.5 rounded">Mid</span>
              </div>

              {/* Tier 3: TPS */}
              <div
                onClick={() => setSelectedLevel("tps")}
                className={`cursor-pointer transition-all duration-300 rounded-xl p-4 border flex items-center justify-between ${
                  selectedLevel === "tps"
                    ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-emerald-300 ring-2 ring-emerald-400/50 shadow-lg scale-105"
                    : "bg-slate-950/80 border-slate-800 text-slate-300 hover:border-slate-700"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Activity className="w-5 h-5" />
                  <div>
                    <div className="font-extrabold text-sm">Cấp Tác nghiệp: TPS</div>
                    <div className="text-[11px] opacity-80">Nhân viên vận hành, thu ngân</div>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold bg-black/30 px-2 py-0.5 rounded">Base</span>
              </div>
            </div>

            {/* Right Column: Selected Level Breakdown */}
            <div className="lg:col-span-7">
              {selectedLevel && (
                <div className={`p-5 rounded-2xl border ${isLevels[selectedLevel].bgBorder} backdrop-blur`}>
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                    <div className="flex items-center gap-2.5">
                      <span className={`text-lg font-black uppercase ${isLevels[selectedLevel].accentText}`}>
                        {isLevels[selectedLevel].short}
                      </span>
                      <span className="text-sm font-bold text-white">
                        ({isLevels[selectedLevel].name})
                      </span>
                    </div>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-700">
                      {isLevels[selectedLevel].vnName}
                    </span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm">
                    <div>
                      <span className="text-slate-400 font-bold uppercase text-[11px]">Đối tượng sử dụng:</span>
                      <p className="text-slate-200 mt-0.5 font-medium">{isLevels[selectedLevel].target}</p>
                    </div>

                    <div>
                      <span className="text-slate-400 font-bold uppercase text-[11px]">Phạm vi quyết định:</span>
                      <p className="text-slate-200 mt-0.5 font-medium">{isLevels[selectedLevel].scope}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-800/80">
                      <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800">
                        <span className="text-cyan-400 font-bold text-xs uppercase">Dữ liệu đầu vào:</span>
                        <p className="text-slate-300 text-xs mt-1 leading-relaxed">{isLevels[selectedLevel].inputs}</p>
                      </div>
                      <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800">
                        <span className="text-emerald-400 font-bold text-xs uppercase">Thông tin đầu ra:</span>
                        <p className="text-slate-300 text-xs mt-1 leading-relaxed">{isLevels[selectedLevel].outputs}</p>
                      </div>
                    </div>

                    <div className="bg-slate-950 p-3 rounded-xl border border-amber-500/30 mt-2">
                      <span className="text-amber-400 font-bold text-xs flex items-center gap-1.5">
                        <Target className="w-3.5 h-3.5" /> Ví dụ thực tiễn giải quyết bài toán:
                      </span>
                      <p className="text-xs sm:text-sm text-slate-200 mt-1 italic">
                        &quot;{isLevels[selectedLevel].example}&quot;
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        /* DIKW Value Chain Explorer */
        <div>
          <div className="mb-4">
            <p className="text-xs sm:text-sm text-slate-300">
              Sứ mệnh của Phân tích (Analysis) là biến <strong className="text-cyan-300">Dữ liệu thô</strong> thành <strong className="text-teal-300">Thông tin có ý nghĩa</strong>, từ đó đúc kết thành <strong className="text-amber-300">Tri thức hành động</strong>:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {Object.entries(dikwStages).map(([key, item]) => {
              const Icon = item.icon;
              const isSelected = selectedDikw === key;
              return (
                <div
                  key={key}
                  onClick={() => setSelectedDikw(key)}
                  className={`cursor-pointer rounded-2xl p-5 border transition-all duration-300 ${
                    isSelected
                      ? `ring-2 ring-amber-400/50 shadow-xl scale-[1.02] ${item.color}`
                      : "bg-slate-950/70 border-slate-800 hover:bg-slate-800/40 text-slate-300"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-black/40 border border-white/10">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-sm sm:text-base text-white">{item.title}</h3>
                      <p className="text-xs opacity-75">{item.sub}</p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm leading-relaxed mb-3">{item.desc}</p>

                  <div className="p-2.5 rounded-xl bg-black/50 border border-white/10 font-mono text-xs">
                    <span className="text-amber-400 font-bold block mb-0.5">Ví dụ minh họa:</span>
                    <span className="text-slate-200">{item.example}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/60 via-slate-950 to-cyan-950/60 border border-emerald-500/30 text-xs sm:text-sm flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
              <span>
                <strong>Tóm lược:</strong> Dữ liệu là nguyên liệu thô $\to$ Thông tin mang lại ngữ cảnh $\to$ Tri thức định hướng hành động và tạo ra lợi thế cạnh tranh.
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
