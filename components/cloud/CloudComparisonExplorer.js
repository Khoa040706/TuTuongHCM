"use client";
import React, { useState } from "react";
import { Layers, Check, X, Shield, DollarSign, Wrench } from "lucide-react";

const COMPARISONS = {
  spi: {
    title: "Tam giác Dịch vụ: IaaS vs PaaS vs SaaS",
    categories: ["Khái niệm", "Trách nhiệm quản lý", "Đối tượng sử dụng", "Mức độ tùy biến", "Ví dụ tiêu biểu"],
    columns: [
      {
        name: "IaaS (Hạ tầng)",
        values: [
          "Cung cấp phần cứng, máy chủ ảo, ổ đĩa và mạng cơ sở",
          "Khách quản lý HĐH, Runtime, Middleware, Dữ liệu & Ứng dụng",
          "Kỹ sư hệ thống, Quản trị mạng, DevOps",
          "Cực cao (Toàn quyền cấu hình HĐH và kernel)",
          "AWS EC2, Google Compute Engine, Azure VMs"
        ]
      },
      {
        name: "PaaS (Nền tảng)",
        values: [
          "Cung cấp môi trường thực thi và phát triển ứng dụng",
          "Khách chỉ quản lý Mã nguồn và CSDL ứng dụng",
          "Lập trình viên, Kỹ sư phần mềm",
          "Trung bình (Phụ thuộc vào các runtime được hỗ trợ)",
          "Google App Engine, Red Hat OpenShift, Heroku"
        ]
      },
      {
        name: "SaaS (Phần mềm)",
        values: [
          "Ứng dụng dịch vụ hoàn chỉnh trên Internet",
          "Nhà cung cấp quản lý 100% từ phần cứng đến ứng dụng",
          "Người dùng cuối, Doanh nghiệp tiêu thụ",
          "Thấp (Chỉ tùy chỉnh trong phạm vi thiết lập cho phép)",
          "Gmail, Google Docs, Salesforce, Microsoft 365"
        ]
      }
    ]
  },
  deployment: {
    title: "Mô hình Triển khai: Public vs Private vs Hybrid",
    categories: ["Quyền sở hữu", "Chi phí ban đầu", "Mức độ bảo mật", "Khả năng mở rộng", "Trường hợp tối ưu"],
    columns: [
      {
        name: "Public Cloud",
        values: [
          "Bên thứ ba sở hữu và phân phối cho đại chúng",
          "Rất thấp (Pay-as-you-go, không CapEx)",
          "Chia sẻ hạ tầng (Bảo mật logic cấp phần mềm)",
          "Vô hạn và tức thì theo nhu cầu",
          "Startup, website thương mại điện tử, ứng dụng web"
        ]
      },
      {
        name: "Private Cloud",
        values: [
          "Dành riêng duy nhất cho 1 tổ chức",
          "Rất cao (Đầu tư máy chủ và trung tâm dữ liệu)",
          "Tuyệt đối (Cách ly vật lý hoàn toàn)",
          "Bị giới hạn bởi năng lực phần cứng mua sắm",
          "Tài chính ngân hàng, cơ quan chính phủ, y tế"
        ]
      },
      {
        name: "Hybrid Cloud",
        values: [
          "Kết hợp liên kết giữa Private và Public Cloud",
          "Trung bình đến cao (Vận hành hạ tầng kép)",
          "Cân bằng (Dữ liệu mật ở Private, tác vụ mở ở Public)",
          "Linh hoạt (Cloud Bursting khi tải cao điểm)",
          "Doanh nghiệp lớn đang trong lộ trình chuyển đổi số"
        ]
      }
    ]
  }
};

export default function CloudComparisonExplorer({ defaultMode = "spi" }) {
  const [mode, setMode] = useState(defaultMode);
  const data = COMPARISONS[mode] || COMPARISONS.spi;

  return (
    <div className="my-8 p-6 sm:p-8 rounded-3xl bg-white border border-stone-200 shadow-md font-sans">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-accent">Interactive Matrix</span>
          <h3 className="text-lg sm:text-xl font-bold text-stone-850 mt-1">{data.title}</h3>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setMode("spi")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              mode === "spi"
                ? "bg-stone-900 text-white shadow-xs"
                : "bg-stone-100 text-stone-600 hover:bg-stone-200"
            }`}
          >
            IaaS - PaaS - SaaS
          </button>
          <button
            type="button"
            onClick={() => setMode("deployment")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              mode === "deployment"
                ? "bg-stone-900 text-white shadow-xs"
                : "bg-stone-100 text-stone-600 hover:bg-stone-200"
            }`}
          >
            Mô hình Triển khai
          </button>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse min-w-[600px]">
          <thead>
            <tr className="border-b border-stone-200 bg-stone-50 text-stone-600">
              <th className="p-3.5 font-bold w-1/4">Tiêu chí đối sánh</th>
              {data.columns.map((col, idx) => (
                <th key={idx} className="p-3.5 font-extrabold text-stone-850">
                  {col.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            {data.categories.map((cat, rIdx) => (
              <tr key={rIdx} className="hover:bg-stone-50/60 transition-colors">
                <td className="p-3.5 font-bold text-stone-700 bg-stone-50/30">{cat}</td>
                {data.columns.map((col, cIdx) => (
                  <td key={cIdx} className="p-3.5 text-stone-600 leading-relaxed font-medium">
                    {col.values[rIdx]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
