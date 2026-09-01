"use client";
import React, { useState } from "react";
import { Layers, Server, Code, Globe, Shield, Database, ArrowRight } from "lucide-react";

const CONCEPTS = [
  {
    id: "iaas",
    name: "IaaS (Hạ tầng)",
    icon: Server,
    color: "from-sky-500 to-blue-600",
    role: "Migrate to it",
    desc: "Cung cấp máy chủ ảo, bộ nhớ khối EBS và mạng riêng VPC. Khách hàng tự cài đặt HĐH và toàn quyền quản trị.",
    examples: "AWS EC2, Google Compute Engine, Azure VMs"
  },
  {
    id: "paas",
    name: "PaaS (Nền tảng)",
    icon: Code,
    color: "from-emerald-500 to-teal-600",
    role: "Build on it",
    desc: "Cung cấp runtime, CSDL và web server. Khách hàng chỉ tập trung viết mã nguồn, tự động hóa CI/CD.",
    examples: "Google App Engine, Red Hat OpenShift, Heroku"
  },
  {
    id: "saas",
    name: "SaaS (Phần mềm)",
    icon: Globe,
    color: "from-amber-500 to-orange-600",
    role: "Consume it",
    desc: "Ứng dụng hoàn chỉnh chạy trên đám mây, sử dụng trực tiếp qua trình duyệt không cần cài đặt.",
    examples: "Google Docs, Gmail, Salesforce, Microsoft 365"
  },
  {
    id: "idaas",
    name: "IDaaS (Danh tính)",
    icon: Shield,
    color: "from-purple-500 to-pink-600",
    role: "Secure it",
    desc: "Lá chắn bảo mật trung tâm: Xác thực SSO, liên hiệp danh tính FIDM, quản lý vòng đời tài khoản SCIM.",
    examples: "Okta, Microsoft Entra ID (Azure AD), Ping Identity"
  },
  {
    id: "storage",
    name: "Cloud Storage (Lưu trữ)",
    icon: Database,
    color: "from-rose-500 to-red-600",
    role: "Persist it",
    desc: "Lưu trữ bền vững đa hình thái: Object (S3), Block (EBS) và File (EFS/NAS) với độ bền 99.999999999%.",
    examples: "Amazon S3, Google Cloud Storage, Azure Blob"
  }
];

export default function CloudConceptMap() {
  const [selectedConcept, setSelectedConcept] = useState(CONCEPTS[0]);

  return (
    <div className="my-8 p-6 sm:p-8 rounded-3xl bg-white border border-stone-200 shadow-md font-sans">
      <div className="mb-6">
        <span className="text-xs font-bold uppercase tracking-widest text-accent">Bản đồ Khái niệm Liên kết</span>
        <h3 className="text-lg sm:text-xl font-bold text-stone-850 mt-1">
          Hệ sinh thái Ngũ giác Điện toán Đám mây
        </h3>
        <p className="text-xs sm:text-sm text-stone-500 mt-1">
          Bấm vào từng khối khái niệm để khám phá mối liên hệ kiến trúc và phạm vi trách nhiệm.
        </p>
      </div>

      {/* Concept Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-6">
        {CONCEPTS.map((item) => {
          const Icon = item.icon;
          const isSelected = selectedConcept.id === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedConcept(item)}
              className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? "bg-stone-900 text-white border-stone-900 shadow-md -translate-y-1"
                  : "bg-stone-50 hover:bg-stone-100 text-stone-700 border-stone-200"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                  isSelected ? "bg-white/20 text-white" : "bg-stone-200 text-stone-700"
                }`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded ${
                  isSelected ? "bg-accent text-white" : "bg-stone-200 text-stone-600"
                }`}>
                  {item.role}
                </span>
              </div>
              <span className="font-bold text-xs line-clamp-1">{item.name}</span>
            </button>
          );
        })}
      </div>

      {/* Detailed Card */}
      <div className="p-6 rounded-2xl bg-linear-to-br from-stone-50 to-stone-100/70 border border-stone-200">
        <div className="flex items-center gap-3 mb-2">
          <div className={`w-10 h-10 rounded-xl bg-linear-to-br ${selectedConcept.color} text-white flex items-center justify-center shadow-sm`}>
            {React.createElement(selectedConcept.icon, { className: "w-5 h-5" })}
          </div>
          <div>
            <h4 className="font-extrabold text-base text-stone-850">{selectedConcept.name}</h4>
            <span className="text-xs font-bold text-accent uppercase tracking-wider">{selectedConcept.role}</span>
          </div>
        </div>

        <p className="text-sm text-stone-700 leading-relaxed mt-3">
          {selectedConcept.desc}
        </p>

        <div className="mt-4 pt-3 border-t border-stone-200/60 flex flex-wrap items-center justify-between gap-2 text-xs">
          <span className="text-stone-500 font-semibold">Dịch vụ thực tế tiêu biểu:</span>
          <span className="font-bold text-stone-800 bg-white px-3 py-1 rounded-lg border border-stone-200">
            {selectedConcept.examples}
          </span>
        </div>
      </div>
    </div>
  );
}
