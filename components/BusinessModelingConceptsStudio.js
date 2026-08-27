"use client";
import React, { useState } from "react";
import { 
  Users, 
  UserCheck, 
  Zap, 
  Workflow, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Boxes,
  Layers
} from "lucide-react";

export default function BusinessModelingConceptsStudio() {
  const [selectedConcept, setSelectedConcept] = useState("actor");

  const concepts = {
    actor: {
      code: "A",
      name: "Business Actor",
      vnName: "Tác nhân nghiệp vụ (Bên ngoài)",
      icon: Users,
      color: "from-blue-600 to-cyan-600",
      accentBorder: "border-blue-400",
      def: "Người, tổ chức hoặc hệ thống bên ngoài doanh nghiệp có tương tác và trao đổi giá trị với doanh nghiệp.",
      examples: ["Khách hàng cá nhân (Customer)", "Nhà cung cấp nguyên vật liệu (Supplier)", "Cổng thanh toán ngân hàng (Payment Gateway)", "Cơ quan thuế nhà nước (Tax Authority)"],
      rule: "Nằm NGOÀI ranh giới doanh nghiệp. Khởi phát nhu cầu hoặc nhận kết quả đầu ra từ doanh nghiệp."
    },
    worker: {
      code: "W",
      name: "Business Worker",
      vnName: "Người thực thi nghiệp vụ (Bên trong)",
      icon: UserCheck,
      color: "from-purple-600 to-pink-600",
      accentBorder: "border-purple-400",
      def: "Người, vai trò hoặc bộ phận bên trong doanh nghiệp trực tiếp thực hiện các hoạt động công việc để đáp ứng yêu cầu của Actor.",
      examples: ["Nhân viên tư vấn bán hàng (Sales Clerk)", "Chuyên viên thẩm định tín dụng (Credit Officer)", "Thủ kho xuất hàng (Warehouse Keeper)", "Kế toán trưởng (Chief Accountant)"],
      rule: "Nằm TRONG ranh giới doanh nghiệp. Đóng vai trò là nguồn lực vận hành các bước của quy trình."
    },
    event: {
      code: "E",
      name: "Business Event",
      vnName: "Sự kiện nghiệp vụ (Kích hoạt)",
      icon: Zap,
      color: "from-amber-600 to-orange-600",
      accentBorder: "border-amber-400",
      def: "Một sự kiện hoặc thời điểm cụ thể xảy ra làm kích hoạt (trigger) một chuỗi các hoạt động tiếp theo trong quy trình kinh doanh.",
      examples: ["Khách bấm 'Đặt hàng' trên Website (Order Placed)", "Hàng cập cảng hải quan (Shipment Arrived)", "Đến ngày 25 hàng tháng tính lương (Monthly Payroll Date)", "Tài khoản bị phát hiện đăng nhập bất thường"],
      rule: "Là điểm khởi phát (Trigger) đánh thức các Business Worker bắt đầu hành động."
    },
    process: {
      code: "P",
      name: "Business Process",
      vnName: "Quy trình nghiệp vụ (End-to-End)",
      icon: Workflow,
      color: "from-emerald-600 to-teal-600",
      accentBorder: "border-emerald-400",
      def: "Một tập hợp có cấu trúc các hoạt động liên kết từ đầu đến cuối (End-to-End) được thực thi bởi các Worker nhằm tạo ra kết quả có giá trị cho Actor.",
      examples: ["Quy trình xử lý và giao đơn hàng thương mại điện tử (Order-to-Cash)", "Quy trình thẩm định và giải ngân khoản vay mua nhà", "Quy trình đổi trả và hoàn tiền sản phẩm lỗi"],
      rule: "Chuỗi mắt xích phối hợp giữa nhiều Worker để biến Event thành Giá trị thực tế."
    }
  };

  const current = concepts[selectedConcept];

  return (
    <div className="w-full my-8 bg-slate-900 border border-slate-700/80 rounded-2xl p-5 sm:p-7 shadow-xl text-slate-100">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/30">
            <Boxes className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              Studio: 4 Khái Niệm Vàng Trong Business Modeling
            </h2>
            <p className="text-xs text-slate-400">
              Phân định ranh giới và vai trò giữa Tác nhân ngoài [A], Nhân sự trong [W], Sự kiện [E] và Quy trình [P].
            </p>
          </div>
        </div>
      </div>

      {/* 4 Concepts Grid Selector */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {Object.entries(concepts).map(([key, item]) => {
          const isSelected = selectedConcept === key;
          const Icon = item.icon;
          return (
            <button
              key={key}
              onClick={() => setSelectedConcept(key)}
              className={`p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${
                isSelected
                  ? `bg-slate-800 ${item.accentBorder} ring-2 ring-purple-400/50 shadow-xl scale-105`
                  : `bg-slate-950/70 border-slate-800 hover:bg-slate-800/40 text-slate-300`
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-2 rounded-xl bg-gradient-to-br ${item.color} text-white shadow`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono font-black px-2 py-0.5 rounded bg-slate-900 text-white border border-slate-800">
                    [{item.code}]
                  </span>
                </div>
                <h3 className="font-extrabold text-sm sm:text-base text-white">{item.name}</h3>
                <p className="text-[11px] text-slate-400 mt-0.5">{item.vnName}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Concept Showcase Card */}
      {current && (
        <div className="p-5 sm:p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-800/80 pb-3">
            <div className={`p-2.5 rounded-xl bg-gradient-to-br ${current.color} text-white shadow`}>
              <current.icon className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-purple-400">Ký hiệu chuẩn: [{current.code}]</span>
                <h3 className="text-base sm:text-lg font-black text-white">{current.name}</h3>
              </div>
              <p className="text-xs text-slate-300">{current.vnName}</p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
            {current.def}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pt-1">
            <div className="md:col-span-7 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-xs font-extrabold uppercase text-cyan-400 block mb-2">
                Ví dụ thực tế trong doanh nghiệp:
              </span>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {current.examples.map((ex, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{ex}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-5 p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="text-xs font-extrabold uppercase text-amber-400 block mb-2">
                  Quy tắc nhận diện:
                </span>
                <p className="text-xs text-slate-200 font-medium leading-relaxed italic">
                  &quot;{current.rule}&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
