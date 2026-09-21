"use client";
import React, { useState } from "react";
import {
  Building2,
  Home,
  Database,
  Layers,
  ShieldCheck,
  ShieldAlert,
  DollarSign,
  Users,
  Sparkles,
  CheckCircle2,
  XCircle,
  Key,
  Lock,
  ArrowRightLeft
} from "lucide-react";

export default function SingleVsMultiTenantSandbox() {
  const [activeArch, setActiveArch] = useState("compare"); // 'compare' | 'single' | 'multi'
  const [activeTenantTab, setActiveTenantTab] = useState("tenantA"); // 'tenantA' | 'tenantB'

  const COMPARISON_ROWS = [
    {
      criteria: "Cơ sở dữ liệu (Database) & Ứng dụng",
      single: "Riêng biệt 100% (Mỗi khách 1 CSDL & 1 App Instance)",
      multi: "Dùng chung (Shared Database & 1 Shared App Instance)",
      note: "Multi-tenant dùng Tenant_ID để phân tách logic"
    },
    {
      criteria: "Mức độ bảo mật & Cô lập dữ liệu",
      single: "Rất Cao (Cô lập tuyệt đối, không chia sẻ tài nguyên)",
      multi: "Thấp hơn (Nguy cơ rò rỉ dữ liệu giữa các khách thuê)",
      note: "Single-tenant đáp ứng chuẩn HIPAA / PCI-DSS"
    },
    {
      criteria: "Chi phí đầu tư & Vận hành",
      single: "Cao (Phải nhân bản chi phí máy chủ cho từng khách)",
      multi: "Thấp (Tối ưu tài nguyên, chi phí chia đều cho hàng ngàn khách)",
      note: "Multi-tenant rẻ hơn 60% – 80%"
    },
    {
      criteria: "Khả năng tùy biến (Customization)",
      single: "Dễ dàng (Tùy biến sâu mã nguồn & cấu hình theo ý thích)",
      multi: "Bị hạn chế (Chỉ được cấu hình trong khuôn khổ cho phép)",
      note: "Multi-tenant không cho sửa đổi code lõi"
    },
    {
      criteria: "Đối tượng khách hàng phù hợp",
      single: "Doanh nghiệp lớn, ngân hàng, cơ quan chính phủ",
      multi: "Doanh nghiệp vừa và nhỏ (SME), Startup cá nhân",
      note: "Cân đối giữa ngân sách và yêu cầu an ninh"
    }
  ];

  return (
    <div className="my-8 rounded-3xl border border-stone-200 bg-linear-to-b from-stone-50/70 via-white to-stone-50/50 p-5 sm:p-7 shadow-xl font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-stone-200">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-indigo-600 text-white mb-2 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            Kiến Trúc Đa Khách Thuê vs Đơn Khách Thuê
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
            Mục III: Single-Tenant vs Multi-Tenant SaaS
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-2xl">
            Hiểu rõ câu thần chú kinh điển trong ngành điện toán đám mây: <strong>&quot;Single-tenant = Biệt thự riêng | Multi-tenant = Chung cư đa hộ&quot;</strong>.
          </p>
        </div>

        {/* Arch toggle buttons */}
        <div className="flex gap-1.5 bg-stone-100 p-1.5 rounded-2xl border border-stone-200 self-start sm:self-auto">
          <button
            onClick={() => setActiveArch("compare")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeArch === "compare"
                ? "bg-white text-stone-900 shadow-xs"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Bảng So Sánh 4 Tiêu Chí
          </button>
          <button
            onClick={() => setActiveArch("single")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeArch === "single"
                ? "bg-indigo-600 text-white shadow-xs"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            🏡 Biệt Thự (Single)
          </button>
          <button
            onClick={() => setActiveArch("multi")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeArch === "multi"
                ? "bg-amber-500 text-stone-950 shadow-xs"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            🏢 Chung Cư (Multi)
          </button>
        </div>
      </div>

      {/* Visual Architectural Models */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        {/* Single-Tenant (Biệt Thự Riêng) */}
        {(activeArch === "compare" || activeArch === "single") && (
          <div
            className={`rounded-3xl border p-5 sm:p-6 transition-all ${
              activeArch === "single"
                ? "md:col-span-2 bg-linear-to-b from-indigo-50/50 to-white border-indigo-300 ring-2 ring-indigo-200"
                : "bg-white border-stone-200 shadow-md"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 rounded-2xl bg-indigo-600 text-white shadow-xs">
                  <Home className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-black text-stone-900">Single-Tenant SaaS</h4>
                  <span className="text-[11px] font-bold text-indigo-600">Mô hình &quot;Biệt thự riêng&quot;</span>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full text-[11px] font-black bg-indigo-100 text-indigo-900 border border-indigo-200">
                Bảo Mật Tối Đa
              </span>
            </div>

            {/* Architecture Stack */}
            <div className="space-y-2.5 my-4">
              <div className="grid grid-cols-2 gap-2">
                <div className="p-3 rounded-2xl bg-indigo-50 border border-indigo-200 text-center space-y-1">
                  <span className="text-[10px] font-black text-indigo-600 uppercase">Khách hàng A (DN Lớn)</span>
                  <div className="text-xs font-black text-indigo-950">App Instance A</div>
                  <div className="p-1.5 rounded-lg bg-indigo-600 text-white text-[11px] font-mono flex items-center justify-center gap-1">
                    <Database className="w-3.5 h-3.5" /> DB Riêng A
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-indigo-50 border border-indigo-200 text-center space-y-1">
                  <span className="text-[10px] font-black text-indigo-600 uppercase">Khách hàng B (Ngân Hàng)</span>
                  <div className="text-xs font-black text-indigo-950">App Instance B</div>
                  <div className="p-1.5 rounded-lg bg-indigo-600 text-white text-[11px] font-mono flex items-center justify-center gap-1">
                    <Database className="w-3.5 h-3.5" /> DB Riêng B
                  </div>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-stone-900 text-stone-300 text-center text-xs font-mono">
                Hạ tầng máy chủ hoàn toàn biệt lập • Tường lửa vật lý riêng biệt
              </div>
            </div>

            <div className="space-y-1.5 text-xs text-stone-600 pt-2 border-t border-stone-100">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Dữ liệu và mã nguồn cô lập 100%, không chia sẻ tài nguyên.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Hiệu năng cực kỳ ổn định, tự do tùy biến sâu theo đặc thù.</span>
              </div>
              <div className="flex items-center gap-2 text-rose-600 font-medium">
                <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                <span>Chi phí duy trì đắt đỏ, đội ngũ IT khó quản lý nhiều bản cài đặt.</span>
              </div>
            </div>
          </div>
        )}

        {/* Multi-Tenant (Chung Cư Đa Khách Thuê) */}
        {(activeArch === "compare" || activeArch === "multi") && (
          <div
            className={`rounded-3xl border p-5 sm:p-6 transition-all ${
              activeArch === "multi"
                ? "md:col-span-2 bg-linear-to-b from-amber-50/50 to-white border-amber-300 ring-2 ring-amber-200"
                : "bg-white border-stone-200 shadow-md"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 rounded-2xl bg-amber-500 text-stone-950 shadow-xs">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-black text-stone-900">Multi-Tenant SaaS</h4>
                  <span className="text-[11px] font-bold text-amber-700">Mô hình &quot;Tòa chung cư&quot;</span>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full text-[11px] font-black bg-amber-100 text-amber-900 border border-amber-300">
                Chi Phí Siêu Rẻ
              </span>
            </div>

            {/* Architecture Stack */}
            <div className="space-y-2.5 my-4">
              <div className="p-3 rounded-2xl bg-amber-50/80 border border-amber-200 space-y-2">
                <div className="flex items-center justify-between text-[11px] font-bold text-amber-900">
                  <span>Hàng ngàn khách hàng (Tenant A, B, C...)</span>
                  <span className="font-mono text-[10px] bg-amber-200/80 px-2 py-0.5 rounded">Shared App</span>
                </div>

                <div className="p-2.5 rounded-xl bg-amber-500 text-stone-950 text-center text-xs font-black shadow-xs flex items-center justify-center gap-2">
                  <Building2 className="w-4 h-4" />
                  1 Ứng Dụng Dùng Chung (Single Shared Application Instance)
                </div>

                <div className="p-2.5 rounded-xl bg-stone-900 text-amber-300 text-center text-xs font-mono flex items-center justify-center gap-2">
                  <Database className="w-4 h-4 text-amber-400" />
                  1 CSDL Chung (Phân tách bằng cột Tenant_ID)
                </div>
              </div>
            </div>

            <div className="space-y-1.5 text-xs text-stone-600 pt-2 border-t border-stone-100">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Tiết kiệm chi phí tối đa, nâng cấp phiên bản đồng loạt cho tất cả khách.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Dễ quản lý, khả năng mở rộng (Scalability) lên tới hàng triệu người dùng.</span>
              </div>
              <div className="flex items-center gap-2 text-amber-800 font-medium">
                <XCircle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Dữ liệu lưu chung CSDL, bị hạn chế tùy biến sâu giao diện/chức năng.</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Comparison Table */}
      {activeArch === "compare" && (
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b-2 border-stone-300 text-stone-900 bg-stone-100/70">
                <th className="py-3 px-4 font-black">Tiêu chí so sánh</th>
                <th className="py-3 px-4 font-black text-indigo-900">Single-Tenant (Biệt thự)</th>
                <th className="py-3 px-4 font-black text-amber-900">Multi-Tenant (Chung cư)</th>
                <th className="py-3 px-4 font-black text-stone-600">Ghi chú thi cử</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 text-stone-700">
              {COMPARISON_ROWS.map((row, idx) => (
                <tr key={idx} className="hover:bg-stone-50 transition-colors">
                  <td className="py-3 px-4 font-extrabold text-stone-900">{row.criteria}</td>
                  <td className="py-3 px-4 font-bold text-indigo-800">{row.single}</td>
                  <td className="py-3 px-4 font-bold text-amber-800">{row.multi}</td>
                  <td className="py-3 px-4 text-stone-500 text-[11px] italic">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Memory Callout */}
      <div className="mt-5 p-4 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-950 text-xs leading-relaxed font-medium">
        <strong>📌 Thuộc lòng khẩu quyết Mục III:</strong> Single-Tenant = <em>&quot;Biệt thự riêng&quot;</em> (Database riêng + App riêng, bảo mật cao, giá đắt, DN lớn) ↔ Multi-Tenant = <em>&quot;Chung cư&quot;</em> (Database chung + App chung, dùng chung tài nguyên, giá rẻ, co giãn tốt, DN vừa và nhỏ).
      </div>
    </div>
  );
}
