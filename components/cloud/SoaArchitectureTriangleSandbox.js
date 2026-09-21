"use client";
import React, { useState } from "react";

export default function SoaArchitectureTriangleSandbox() {
  const [activeStep, setActiveStep] = useState(1); // 1: Publish, 2: Find, 3: Bind
  const [selectedCloud, setSelectedCloud] = useState("aws"); // 'aws' | 'azure'
  const [activeView, setActiveView] = useState("triangle"); // 'triangle' | 'characteristics' | 'tradeoffs'

  const steps = [
    {
      id: 1,
      name: "1. Phát Hành (Publish)",
      actor: "Service Provider ➡️ Service Broker",
      desc: "Nhà cung cấp xuất bản định nghĩa dịch vụ (WSDL/OpenAPI) và các endpoint lên thanh ghi dịch vụ (Service Registry)."
    },
    {
      id: 2,
      name: "2. Tìm Kiếm (Find)",
      actor: "Service Consumer ➡️ Service Broker",
      desc: "Ứng dụng tiêu thụ tìm kiếm trong danh mục Service Broker để tra cứu dịch vụ phù hợp với yêu cầu nghiệp vụ."
    },
    {
      id: 3,
      name: "3. Ràng Buộc & Thực Thi (Bind)",
      actor: "Service Consumer ➡️ Service Provider",
      desc: "Consumer trực tiếp kết nối và gọi hàm dịch vụ của Provider qua giao thức mạng (SOAP/REST/gRPC) để thực thi."
    }
  ];

  return (
    <div className="my-8 rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-[#18171f] via-[#1d1b26] to-[#15141c] p-5 md:p-7 text-neutral-200 shadow-2xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-800 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-400">
            <span>🏛️ Mục VI • Service-Oriented Architecture (SOA)</span>
          </div>
          <h3 className="mt-2 text-xl font-bold tracking-tight text-white md:text-2xl">
            Mô Phỏng Kiến Trúc Hướng Dịch Vụ & Tam Giác Tương Tác SOA
          </h3>
          <p className="mt-1 text-sm text-neutral-400">
            Kiến trúc &quot;lắp ghép&quot; các khối dịch vụ độc lập, có thể tái sử dụng (Reusable services) và giao tiếp qua mạng
          </p>
        </div>

        {/* View Switcher */}
        <div className="flex rounded-xl bg-neutral-900/80 p-1 border border-neutral-800">
          <button
            onClick={() => setActiveView("triangle")}
            className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
              activeView === "triangle"
                ? "bg-indigo-600 text-white shadow-md"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            🔺 Tam Giác SOA
          </button>
          <button
            onClick={() => setActiveView("characteristics")}
            className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
              activeView === "characteristics"
                ? "bg-indigo-600 text-white shadow-md"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            🧩 3 Đặc Tính & Ví Dụ
          </button>
          <button
            onClick={() => setActiveView("tradeoffs")}
            className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
              activeView === "tradeoffs"
                ? "bg-indigo-600 text-white shadow-md"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            ⚖️ Ưu & Nhược Điểm
          </button>
        </div>
      </div>

      {/* TAB 1: THE SOA TRIANGLE INTERACTIVE */}
      {activeView === "triangle" && (
        <div className="mt-6 space-y-6">
          <div className="rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-4 text-sm text-indigo-200">
            <span className="font-bold text-indigo-400">💡 Định nghĩa chuẩn học thuật:</span> SOA là phương pháp phát triển ứng dụng, trong đó các chức năng được thiết kế thành <strong>các service tái sử dụng (Reusable services)</strong>, tương tác lỏng lẻo (Loosely coupled) với nhau thông qua mạng.
          </div>

          {/* Step Selector */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {steps.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveStep(s.id)}
                className={`rounded-xl border p-3 text-left transition-all ${
                  activeStep === s.id
                    ? "border-indigo-500 bg-indigo-950/40 text-white shadow-lg shadow-indigo-950/30"
                    : "border-neutral-800 bg-neutral-900/40 text-neutral-400 hover:border-neutral-700"
                }`}
              >
                <div className="text-xs font-bold text-indigo-400">{s.name}</div>
                <div className="text-[11px] text-neutral-300 mt-1 font-mono">{s.actor}</div>
              </button>
            ))}
          </div>

          {/* Interactive Triangle Diagram Visualizer */}
          <div className="relative rounded-2xl border border-neutral-800 bg-black/50 p-6 md:p-8">
            <div className="mx-auto max-w-2xl">
              {/* TOP: Service Broker */}
              <div className="flex justify-center">
                <div
                  className={`w-64 rounded-2xl border p-4 text-center transition-all ${
                    activeStep === 1 || activeStep === 2
                      ? "border-amber-500 bg-amber-950/30 shadow-xl shadow-amber-900/20 scale-105"
                      : "border-neutral-700 bg-neutral-900/80"
                  }`}
                >
                  <div className="text-2xl">🏛️ 🗂️</div>
                  <div className="text-sm font-bold text-amber-300 mt-1">Service Broker (Trung Gian)</div>
                  <div className="text-[11px] text-neutral-400">
                    Service Registry / Thanh ghi danh mục dịch vụ (UDDI, Consul, API Catalog)
                  </div>
                </div>
              </div>

              {/* Connecting Lines / Direction arrows */}
              <div className="my-4 grid grid-cols-2 gap-8 text-center text-xs">
                {/* Left arm: Publish */}
                <div
                  className={`rounded-xl border p-3 transition-all ${
                    activeStep === 1
                      ? "border-indigo-500 bg-indigo-950/40 text-indigo-300 font-bold"
                      : "border-neutral-800 text-neutral-500"
                  }`}
                >
                  <span className="text-base">⬆️ 1. Publish (Phát hành)</span>
                  <div className="text-[10px] text-neutral-400 font-normal">Đăng ký giao diện & endpoint</div>
                </div>

                {/* Right arm: Find */}
                <div
                  className={`rounded-xl border p-3 transition-all ${
                    activeStep === 2
                      ? "border-cyan-500 bg-cyan-950/40 text-cyan-300 font-bold"
                      : "border-neutral-800 text-neutral-500"
                  }`}
                >
                  <span className="text-base">⬆️ 2. Find (Tìm kiếm)</span>
                  <div className="text-[10px] text-neutral-400 font-normal">Tra cứu dịch vụ tương thích</div>
                </div>
              </div>

              {/* BOTTOM ROW: Provider & Consumer */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Provider */}
                <div
                  className={`rounded-2xl border p-4 text-center transition-all ${
                    activeStep === 1 || activeStep === 3
                      ? "border-indigo-500 bg-indigo-950/30 shadow-xl shadow-indigo-900/20 scale-105"
                      : "border-neutral-700 bg-neutral-900/80"
                  }`}
                >
                  <div className="text-2xl">🖥️ 📦</div>
                  <div className="text-sm font-bold text-indigo-300 mt-1">Service Provider (Cung Cấp)</div>
                  <div className="text-[11px] text-neutral-400">
                    Máy chủ triển khai dịch vụ logic, sẵn sàng nhận request xử lý tính toán
                  </div>
                </div>

                {/* Consumer */}
                <div
                  className={`rounded-2xl border p-4 text-center transition-all ${
                    activeStep === 2 || activeStep === 3
                      ? "border-emerald-500 bg-emerald-950/30 shadow-xl shadow-emerald-900/20 scale-105"
                      : "border-neutral-700 bg-neutral-900/80"
                  }`}
                >
                  <div className="text-2xl">📱 👤</div>
                  <div className="text-sm font-bold text-emerald-300 mt-1">Service Consumer (Sử Dụng)</div>
                  <div className="text-[11px] text-neutral-400">
                    Ứng dụng máy khách, website hoặc dịch vụ khác cần tiêu thụ chức năng
                  </div>
                </div>
              </div>

              {/* Bottom Line: Bind */}
              <div className="mt-4">
                <div
                  className={`rounded-xl border p-3 text-center transition-all ${
                    activeStep === 3
                      ? "border-emerald-500 bg-emerald-950/40 text-emerald-300 font-bold shadow-lg"
                      : "border-neutral-800 text-neutral-500"
                  }`}
                >
                  <span className="text-base">⬅️ 3. Bind & Execute (Ràng buộc & Gọi dịch vụ trực tiếp) ➡️</span>
                  <div className="text-[11px] text-neutral-400 font-normal">
                    Trao đổi dữ liệu qua giao thức mạng HTTP/REST hoặc SOAP qua đường cáp mạng
                  </div>
                </div>
              </div>
            </div>

            {/* Step Explanation Banner */}
            <div className="mt-6 rounded-xl border border-neutral-700 bg-neutral-900/90 p-4 text-xs">
              <div className="font-bold text-white flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-indigo-400 animate-ping" />
                Giải Thích Bước Hiện Tại: {steps[activeStep - 1].name}
              </div>
              <p className="mt-1.5 text-neutral-300 leading-relaxed">{steps[activeStep - 1].desc}</p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: CHARACTERISTICS & CLOUD EXAMPLES */}
      {activeView === "characteristics" && (
        <div className="mt-6 space-y-6">
          {/* 3 Core Characteristics */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
              3 Đặc Điểm Vận Hành Cốt Lõi Của SOA (Characteristics)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-xl border border-indigo-500/30 bg-neutral-900/60 p-4">
                <div className="text-2xl">🧩</div>
                <div className="font-bold text-indigo-300 text-sm mt-2">1. Tính Module Hóa (Modularity)</div>
                <p className="mt-2 text-xs text-neutral-300 leading-relaxed">
                  Ứng dụng lớn được chia nhỏ thành nhiều module dịch vụ độc lập. Mỗi service đảm nhận một chức năng duy nhất và có ranh giới rõ ràng.
                </p>
              </div>

              <div className="rounded-xl border border-cyan-500/30 bg-neutral-900/60 p-4">
                <div className="text-2xl">🌐</div>
                <div className="font-bold text-cyan-300 text-sm mt-2">2. Giao Tiếp Qua Mạng (Network Communication)</div>
                <p className="mt-2 text-xs text-neutral-300 leading-relaxed">
                  Các service không gọi hàm trực tiếp trong cùng bộ nhớ RAM máy tính mà tương tác qua mạng máy tính bằng giao thức chuẩn (HTTP, SOAP, REST, Message Queue).
                </p>
              </div>

              <div className="rounded-xl border border-emerald-500/30 bg-neutral-900/60 p-4">
                <div className="text-2xl">🔌</div>
                <div className="font-bold text-emerald-300 text-sm mt-2">3. Khả Năng Tích Hợp (Integration Capabilities)</div>
                <p className="mt-2 text-xs text-neutral-300 leading-relaxed">
                  Dễ dàng kết nối các dịch vụ viết bằng các ngôn ngữ khác nhau (Java, C#, Python) chạy trên các hệ điều hành khác nhau mà không bị xung đột.
                </p>
              </div>
            </div>
          </div>

          {/* Cloud Titans Examples: AWS & Azure */}
          <div className="rounded-2xl border border-neutral-800 bg-black/40 p-5">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Ví Dụ Minh Họa Trong Thực Tế (AWS & Microsoft Azure)
              </h4>
              <div className="flex gap-2">
                <button
                  onClick={() => setSelectedCloud("aws")}
                  className={`rounded-lg px-3 py-1 text-xs font-bold transition-all ${
                    selectedCloud === "aws"
                      ? "bg-amber-600 text-white"
                      : "bg-neutral-800 text-neutral-400 hover:text-white"
                  }`}
                >
                  Amazon Web Services (AWS)
                </button>
                <button
                  onClick={() => setSelectedCloud("azure")}
                  className={`rounded-lg px-3 py-1 text-xs font-bold transition-all ${
                    selectedCloud === "azure"
                      ? "bg-blue-600 text-white"
                      : "bg-neutral-800 text-neutral-400 hover:text-white"
                  }`}
                >
                  Microsoft Azure
                </button>
              </div>
            </div>

            {selectedCloud === "aws" ? (
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="rounded-xl border border-neutral-700 bg-neutral-900/80 p-3.5">
                  <div className="font-bold text-amber-400">AWS Lambda & API Gateway</div>
                  <div className="text-neutral-400 text-[11px] mt-1">Dịch vụ tính toán Serverless Provider</div>
                  <p className="mt-2 text-neutral-300">
                    Phát hành các hàm vi dịch vụ (Micro-services) phản hồi theo sự kiện, tự động co giãn không cần quản trị máy chủ.
                  </p>
                </div>
                <div className="rounded-xl border border-neutral-700 bg-neutral-900/80 p-3.5">
                  <div className="font-bold text-amber-400">AWS Simple Queue Service (SQS)</div>
                  <div className="text-neutral-400 text-[11px] mt-1">Enterprise Message Broker</div>
                  <p className="mt-2 text-neutral-300">
                    Hàng đợi tin nhắn phân tán đóng vai trò trung gian trao đổi thông điệp bất đồng bộ giữa các thành phần SOA.
                  </p>
                </div>
                <div className="rounded-xl border border-neutral-700 bg-neutral-900/80 p-3.5">
                  <div className="font-bold text-amber-400">Amazon SNS & EventBridge</div>
                  <div className="text-neutral-400 text-[11px] mt-1">Publish / Subscribe Event Bus</div>
                  <p className="mt-2 text-neutral-300">
                    Bộ định tuyến sự kiện kết nối các ứng dụng SaaS với dịch vụ nội bộ theo chuẩn kiến trúc hướng dịch vụ mở rộng.
                  </p>
                </div>
              </div>
            ) : (
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="rounded-xl border border-neutral-700 bg-neutral-900/80 p-3.5">
                  <div className="font-bold text-blue-400">Azure Service Bus</div>
                  <div className="text-neutral-400 text-[11px] mt-1">Enterprise Message Broker</div>
                  <p className="mt-2 text-neutral-300">
                    Hạ tầng nhắn tin đám mây có độ tin cậy cao, kết nối các ứng dụng On-Premise và dịch vụ đám mây theo mô hình SOA.
                  </p>
                </div>
                <div className="rounded-xl border border-neutral-700 bg-neutral-900/80 p-3.5">
                  <div className="font-bold text-blue-400">Azure API Management</div>
                  <div className="text-neutral-400 text-[11px] mt-1">Central Service Registry & Gateway</div>
                  <p className="mt-2 text-neutral-300">
                    Đóng vai trò Service Broker hiện đại: quản lý xác thực, giới hạn lưu lượng, xuất bản tài liệu API cho khách hàng.
                  </p>
                </div>
                <div className="rounded-xl border border-neutral-700 bg-neutral-900/80 p-3.5">
                  <div className="font-bold text-blue-400">Azure Logic Apps</div>
                  <div className="text-neutral-400 text-[11px] mt-1">Workflow Integration Engine</div>
                  <p className="mt-2 text-neutral-300">
                    Tự động hóa luồng kết nối hàng trăm dịch vụ SaaS (Office 365, Dynamics, Salesforce) không cần viết nhiều mã nguồn.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 3: TRADEOFFS MATRIX */}
      {activeView === "tradeoffs" && (
        <div className="mt-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Pros */}
            <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/10 p-5">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <span>🌟</span> ƯU ĐIỂM CỦA KIẾN TRÚC SOA
              </div>
              <ul className="mt-3 space-y-3 text-xs text-neutral-300">
                <li className="rounded-lg bg-black/40 p-3 border border-emerald-500/20">
                  <strong className="text-emerald-300">1. Tái sử dụng dịch vụ (Service reuse):</strong>
                  <p className="mt-1 text-neutral-400">
                    Một dịch vụ thanh toán hoặc xác thực được viết 1 lần có thể dùng chung cho Web, Mobile App và hệ thống đối tác, tránh viết lại mã lặp thừa.
                  </p>
                </li>
                <li className="rounded-lg bg-black/40 p-3 border border-emerald-500/20">
                  <strong className="text-emerald-300">2. Linh hoạt & Dễ co giãn (Flexible and scalable):</strong>
                  <p className="mt-1 text-neutral-400">
                    Khi lượng truy cập tăng đột biến ở module giỏ hàng, chỉ cần tăng tài nguyên máy chủ cho riêng service đó mà không phải nâng cấp toàn bộ hệ thống.
                  </p>
                </li>
                <li className="rounded-lg bg-black/40 p-3 border border-emerald-500/20">
                  <strong className="text-emerald-300">3. Dễ dàng tích hợp (Easy integration):</strong>
                  <p className="mt-1 text-neutral-400">
                    Giao tiếp qua giao thức mở chuẩn giúp tích hợp mượt mà giữa các hệ thống phần mềm cũ (Legacy) và các ứng dụng đám mây mới.
                  </p>
                </li>
              </ul>
            </div>

            {/* Cons */}
            <div className="rounded-xl border border-red-500/30 bg-red-950/10 p-5">
              <div className="flex items-center gap-2 text-red-400 font-bold text-sm">
                <span>⚠️</span> NHƯỢC ĐIỂM & THÁCH THỨC CỦA SOA
              </div>
              <ul className="mt-3 space-y-3 text-xs text-neutral-300">
                <li className="rounded-lg bg-black/40 p-3 border border-red-500/20">
                  <strong className="text-red-300">1. Độ phức tạp kỹ thuật rất cao (Complexity):</strong>
                  <p className="mt-1 text-neutral-400">
                    Quản lý hàng trăm dịch vụ phân tán qua mạng đòi hỏi cơ chế giám sát giao dịch phân tán (Distributed Tracing), xử lý lỗi mạng và quản trị bảo mật phức tạp hơn nhiều so với phần mềm khối nguyên bản (Monolithic).
                  </p>
                </li>
                <li className="rounded-lg bg-black/40 p-3 border border-red-500/20">
                  <strong className="text-red-300">2. Chi phí đầu tư ban đầu cao (High cost):</strong>
                  <p className="mt-1 text-neutral-400">
                    Đòi hỏi đội ngũ kỹ sư có trình độ kiến trúc cao, đầu tư hạ tầng phần cứng cho Enterprise Service Bus, máy chủ thanh ghi và chi phí kiểm thử kiểm thử tích hợp liên tục.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
