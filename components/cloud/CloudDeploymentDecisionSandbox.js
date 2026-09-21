"use client";
import React, { useState } from "react";
import { Cloud, Shield, DollarSign, RefreshCw, CheckCircle2, AlertTriangle, Building, Landmark, Rocket, GraduationCap, ArrowRight, Layers, Sparkles } from "lucide-react";

export default function CloudDeploymentDecisionSandbox() {
  const [selectedScenario, setSelectedScenario] = useState("bank");
  const [activeView, setActiveView] = useState("sandbox"); // 'sandbox' | 'matrix'

  const scenarios = [
    {
      id: "bank",
      title: "Ngân Hàng & Dịch Vụ Tài Chính",
      icon: Landmark,
      color: "border-rose-300 bg-rose-50 text-rose-800",
      description: "Xử lý hàng triệu giao dịch thẻ tín dụng và dữ liệu tài khoản khách hàng tối mật, chịu sự giám sát ngặt nghèo của Ngân hàng Nhà nước.",
      recommendedModel: "Private Cloud (hoặc Hybrid Cloud)",
      reasons: [
        "Yêu cầu bảo mật cấp độ cao nhất và kiểm soát toàn diện luồng dữ liệu (Data Sovereignty).",
        "Tránh rủi ro chia sẻ hạ tầng chung với các ứng dụng khác (Multi-tenancy).",
        "Có thể dùng Hybrid: phần core banking để ở Private, ứng dụng giới thiệu sản phẩm để ở Public."
      ],
      metrics: { security: 95, cost: 30, control: 95, scalability: 65 }
    },
    {
      id: "startup",
      title: "Startup Thương Mại Điện Tử Mới Nổi",
      icon: Rocket,
      color: "border-sky-300 bg-sky-50 text-sky-800",
      description: "Ngân sách ban đầu hạn chế, lượng khách hàng chưa ổn định nhưng có thể tăng vọt gấp 100 lần trong các đợt flash-sale khuyến mãi.",
      recommendedModel: "Public Cloud (Đám mây công cộng)",
      reasons: [
        "Không cần vốn đầu tư ban đầu (Zero CapEx), chỉ trả tiền theo lượng sử dụng thực tế (Pay-as-you-go).",
        "Tận dụng tối đa khả năng co giãn nhanh (Rapid Elasticity) và mở rộng không giới hạn.",
        "Nhà cung cấp đám mây chịu trách nhiệm bảo trì toàn bộ phần cứng và trung tâm dữ liệu."
      ],
      metrics: { security: 70, cost: 95, control: 50, scalability: 95 }
    },
    {
      id: "university",
      title: "Liên Minh 10 Trường Đại Học Nghiên Cứu",
      icon: GraduationCap,
      color: "border-amber-300 bg-amber-50 text-amber-800",
      description: "Nhiều trường đại học cùng chia sẻ đề tài nghiên cứu gen sinh học và tính toán khoa học, cần chung hạ tầng nhưng không muốn chi phí riêng lẻ quá cao.",
      recommendedModel: "Community Cloud (Đám mây cộng đồng)",
      reasons: [
        "Các trường có chung mục tiêu nghiên cứu và chính sách truy cập dữ liệu học thuật.",
        "Chia sẻ gánh nặng chi phí đầu tư hạ tầng máy chủ hiệu năng cao giữa các thành viên.",
        "Mức độ bảo mật và tin cậy cao hơn nhiều so với việc để dữ liệu trên Public Cloud đại trà."
      ],
      metrics: { security: 85, cost: 75, control: 80, scalability: 75 }
    },
    {
      id: "enterprise",
      title: "Tập Đoàn Đa Quốc Gia Tránh Rủi Ro",
      icon: Building,
      color: "border-purple-300 bg-purple-50 text-purple-800",
      description: "Vận hành tại 20 quốc gia, lo sợ rủi ro bị phụ thuộc hoàn toàn vào một nhà cung cấp độc quyền (Vendor Lock-in) và muốn tối ưu hóa chi phí.",
      recommendedModel: "Multi-Cloud (Đa đám mây: AWS + Azure + GCP)",
      reasons: [
        "Tránh triệt để rủi ro Vendor Lock-in: nếu một nhà cung cấp tăng giá hoặc gặp sự cố, hệ thống vẫn hoạt động.",
        "Tận dụng thế mạnh riêng: AI của Google Cloud, hạ tầng tính toán của AWS, tích hợp Windows của Azure.",
        "Đảm bảo tuân thủ luật an ninh mạng riêng biệt của từng quốc gia sở tại."
      ],
      metrics: { security: 90, cost: 60, control: 85, scalability: 95 }
    }
  ];

  const models = [
    {
      name: "Private Cloud",
      sub: "Đám mây riêng",
      owner: "1 tổ chức duy nhất sở hữu/vận hành (nội bộ hoặc thuê ngoài)",
      pros: "✔ Bảo mật cao nhất ✔ Kiểm soát toàn diện phần cứng & dữ liệu",
      cons: "✖ Chi phí đầu tư (CapEx) và chi phí vận hành rất cao",
      color: "border-rose-400 bg-rose-50 text-rose-900"
    },
    {
      name: "Public Cloud",
      sub: "Đám mây công cộng",
      owner: "Do nhà cung cấp bên ngoài (AWS, Azure, GCP) sở hữu & vận hành",
      pros: "✔ Chi phí thấp (pay-as-you-go) ✔ Khả năng mở rộng vô hạn",
      cons: "✖ Bảo mật thấp hơn (dùng chung hạ tầng vật lý Multi-tenancy)",
      color: "border-sky-400 bg-sky-50 text-sky-900"
    },
    {
      name: "Community Cloud",
      sub: "Đám mây cộng đồng",
      owner: "Nhiều tổ chức có chung mục tiêu/sứ mệnh cùng sở hữu và dùng chung",
      pros: "✔ Chia sẻ chi phí & tài nguyên ✔ Bảo mật tốt hơn Public",
      cons: "✖ Quản lý thỏa thuận và phân bổ chi phí giữa các bên phức tạp",
      color: "border-amber-400 bg-amber-50 text-amber-900"
    },
    {
      name: "Hybrid Cloud",
      sub: "Đám mây lai",
      owner: "Kết hợp từ ≥ 2 mô hình (Private + Public, Private + Community)",
      pros: "✔ Cực kỳ linh hoạt: Core để Private, Web co giãn đẩy lên Public",
      cons: "✖ Quản lý, cấu hình mạng và đồng bộ dữ liệu đa môi trường phức tạp",
      color: "border-emerald-400 bg-emerald-50 text-emerald-900"
    },
    {
      name: "Multi-Cloud",
      sub: "Đa đám mây",
      owner: "Dùng nhiều nhà cung cấp độc lập cùng lúc (AWS + Azure + Google Cloud)",
      pros: "✔ Tránh Vendor Lock-in ✔ Tăng tối đa độ bền vững và chịu lỗi",
      cons: "✖ Yêu cầu đội ngũ kỹ sư phải thành thạo nhiều hệ sinh thái khác nhau",
      color: "border-purple-400 bg-purple-50 text-purple-900"
    }
  ];

  const currentScenario = scenarios.find((s) => s.id === selectedScenario) || scenarios[0];
  const ScenarioIcon = currentScenario.icon;

  return (
    <div className="my-8 p-5 sm:p-7 rounded-3xl bg-white border border-stone-200 shadow-md font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-black uppercase tracking-widest text-sky-600">
              Interactive Blueprint • Mục III.1
            </span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-sky-100 text-sky-800">
              Deployment Models
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-black text-stone-900 mt-1">
            Mô Hình Triển Khai Đám Mây: Ai Sở Hữu & Chia Sẻ Tài Nguyên Ra Sao?
          </h3>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Khám phá 5 mô hình triển khai thông qua Hộp cát tình huống doanh nghiệp và Ma trận đối chiếu.
          </p>
        </div>

        {/* View switcher */}
        <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-stone-100 border border-stone-200/80 self-start sm:self-auto shrink-0">
          <button
            type="button"
            onClick={() => setActiveView("sandbox")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeView === "sandbox" ? "bg-sky-600 text-white shadow-xs" : "text-stone-600 hover:text-stone-900"
            }`}
          >
            <Cloud className="w-3.5 h-3.5" />
            <span>Hộp Cát Quyết Định</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveView("matrix")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeView === "matrix" ? "bg-sky-600 text-white shadow-xs" : "text-stone-600 hover:text-stone-900"
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Ma Trận 5 Mô Hình</span>
          </button>
        </div>
      </div>

      {/* VIEW 1: DECISION SANDBOX */}
      {activeView === "sandbox" && (
        <div className="space-y-6">
          {/* Scenario Selector Pills */}
          <div>
            <span className="text-xs font-black uppercase tracking-wider text-stone-500 block mb-2">
              Chọn Kịch Bản Thực Tế Của Doanh Nghiệp:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {scenarios.map((sc) => {
                const Icon = sc.icon;
                const isSelected = selectedScenario === sc.id;
                return (
                  <button
                    key={sc.id}
                    type="button"
                    onClick={() => setSelectedScenario(sc.id)}
                    className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? "bg-sky-600 text-white border-sky-600 shadow-xs"
                        : "bg-stone-50 border-stone-200 hover:bg-stone-100 text-stone-700"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <Icon className="w-4 h-4" />
                      <span className="text-xs font-black line-clamp-1">{sc.title}</span>
                    </div>
                    <div className={`text-[11px] line-clamp-2 leading-relaxed ${
                      isSelected ? "text-sky-100" : "text-stone-500"
                    }`}>
                      {sc.description}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Analysis & Recommendation Showcase */}
          <div className="p-5 sm:p-6 rounded-2xl border border-stone-200 bg-stone-50/70">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-stone-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-sky-600 text-white flex items-center justify-center shadow-xs shrink-0">
                  <ScenarioIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-stone-500">
                    Mô hình triển khai khuyến nghị tối ưu:
                  </span>
                  <div className="text-base sm:text-lg font-black text-sky-700">
                    {currentScenario.recommendedModel}
                  </div>
                </div>
              </div>
            </div>

            {/* Metric Bars */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
              <div className="p-3 rounded-xl bg-white border border-stone-200">
                <div className="text-[10px] font-bold text-stone-500 uppercase mb-1">Mức độ Bảo mật</div>
                <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden mb-1">
                  <div className="bg-rose-500 h-full rounded-full" style={{ width: `${currentScenario.metrics.security}%` }} />
                </div>
                <span className="text-xs font-black text-stone-800">{currentScenario.metrics.security}/100</span>
              </div>

              <div className="p-3 rounded-xl bg-white border border-stone-200">
                <div className="text-[10px] font-bold text-stone-500 uppercase mb-1">Tiết kiệm Chi phí</div>
                <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden mb-1">
                  <div className="bg-emerald-500 h-full rounded-full" style={{ width: `${currentScenario.metrics.cost}%` }} />
                </div>
                <span className="text-xs font-black text-stone-800">{currentScenario.metrics.cost}/100</span>
              </div>

              <div className="p-3 rounded-xl bg-white border border-stone-200">
                <div className="text-[10px] font-bold text-stone-500 uppercase mb-1">Quyền Kiểm soát</div>
                <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden mb-1">
                  <div className="bg-amber-500 h-full rounded-full" style={{ width: `${currentScenario.metrics.control}%` }} />
                </div>
                <span className="text-xs font-black text-stone-800">{currentScenario.metrics.control}/100</span>
              </div>

              <div className="p-3 rounded-xl bg-white border border-stone-200">
                <div className="text-[10px] font-bold text-stone-500 uppercase mb-1">Khả năng Co giãn</div>
                <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden mb-1">
                  <div className="bg-sky-500 h-full rounded-full" style={{ width: `${currentScenario.metrics.scalability}%` }} />
                </div>
                <span className="text-xs font-black text-stone-800">{currentScenario.metrics.scalability}/100</span>
              </div>
            </div>

            {/* Reasons List */}
            <div className="p-4 rounded-xl bg-white border border-stone-200">
              <span className="text-xs font-black text-stone-800 uppercase tracking-wide block mb-2">
                Tại sao lại chọn mô hình này?
              </span>
              <div className="space-y-2">
                {currentScenario.reasons.map((r, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <span>{r}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: FULL 5 MODELS MATRIX */}
      {activeView === "matrix" && (
        <div className="space-y-3.5">
          <span className="text-xs font-black uppercase tracking-wider text-stone-500 block">
            Bảng Đối Chiếu 5 Mô Hình Triển Khai (Deployment Models):
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {models.map((mod, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-2xl border transition-all flex flex-col justify-between ${mod.color}`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="text-sm font-black">{mod.name}</h4>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/60">
                      Mô hình #{idx + 1}
                    </span>
                  </div>
                  <div className="text-xs font-bold opacity-80 mb-2">{mod.sub}</div>
                  <p className="text-xs leading-relaxed opacity-90 mb-3 bg-white/40 p-2.5 rounded-xl">
                    <strong>Chủ sở hữu:</strong> {mod.owner}
                  </p>
                </div>

                <div className="space-y-1.5 text-xs pt-2 border-t border-current/20">
                  <div className="leading-snug">{mod.pros}</div>
                  <div className="leading-snug opacity-90">{mod.cons}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 flex items-start gap-2.5 mt-4">
            <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-amber-900 block mb-0.5">Ghi nhớ nhanh trước khi thi:</span>
              <p className="leading-relaxed font-medium">
                <strong>Private</strong> (riêng – bảo mật cao nhất, tốn kém) • <strong>Public</strong> (chung – chi phí thấp, co giãn cao nhất) • <strong>Community</strong> (cộng đồng có chung mục đích) • <strong>Hybrid</strong> (lai $\ge 2$ mô hình, linh hoạt nhưng phức tạp) • <strong>Multi-Cloud</strong> (nhiều nhà cung cấp cùng lúc để tránh vendor lock-in).
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
