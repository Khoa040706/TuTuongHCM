"use client";
import React, { useState } from "react";

export default function SaasFutureTechNexus() {
  const [selectedTech, setSelectedTech] = useState("ai-iot"); // 'ai-iot' | 'blockchain' | 'bigdata' | 'markets'

  return (
    <div className="my-8 rounded-2xl border border-teal-500/20 bg-gradient-to-br from-[#121919] via-[#162222] to-[#101717] p-5 md:p-7 text-neutral-200 shadow-2xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-800 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-xs font-semibold text-teal-400">
            <span>🚀 Mục VII.3 – VII.5 • Future of SaaS</span>
          </div>
          <h3 className="mt-2 text-xl font-bold tracking-tight text-white md:text-2xl">
            Bàn Điều Khiển Tương Lai SaaS: Hội Tụ 4 Công Nghệ Đột Phá
          </h3>
          <p className="mt-1 text-sm text-neutral-400">
            Khảo sát các xu hướng định hình thế hệ SaaS kế tiếp: AI, IoT, Blockchain Sổ cái phân tán &amp; Phân tích Big Data
          </p>
        </div>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 rounded-xl bg-neutral-900/90 p-1 border border-neutral-800">
          <button
            onClick={() => setSelectedTech("ai-iot")}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
              selectedTech === "ai-iot" ? "bg-teal-600 text-white shadow" : "text-neutral-400 hover:text-white"
            }`}
          >
            🤖 AI &amp; IoT
          </button>
          <button
            onClick={() => setSelectedTech("blockchain")}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
              selectedTech === "blockchain" ? "bg-teal-600 text-white shadow" : "text-neutral-400 hover:text-white"
            }`}
          >
            🔗 Blockchain &amp; Smart Contract
          </button>
          <button
            onClick={() => setSelectedTech("bigdata")}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
              selectedTech === "bigdata" ? "bg-teal-600 text-white shadow" : "text-neutral-400 hover:text-white"
            }`}
          >
            📊 Big Data
          </button>
          <button
            onClick={() => setSelectedTech("markets")}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
              selectedTech === "markets" ? "bg-teal-600 text-white shadow" : "text-neutral-400 hover:text-white"
            }`}
          >
            🏥 Thị Trường Mở Rộng
          </button>
        </div>
      </div>

      {/* TECH 1: AI & IOT */}
      {selectedTech === "ai-iot" && (
        <div className="mt-6 space-y-5">
          <div className="rounded-2xl border border-neutral-700 bg-black/40 p-5">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500/20 text-2xl text-teal-400">
                🤖
              </span>
              <div>
                <h4 className="text-lg font-bold text-white">SaaS Tích Hợp Trí Tuệ Nhân Tạo (AI) &amp; Vạn Vật Kết Nối (IoT)</h4>
                <p className="text-xs text-neutral-400">
                  Tự động hóa thông minh (Intelligent Automation) và thu thập dữ liệu cảm biến thời gian thực
                </p>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="rounded-xl border border-teal-500/30 bg-teal-950/20 p-4">
                <div className="text-sm font-bold text-teal-300">1. SaaS + Artificial Intelligence (AI)</div>
                <p className="mt-2 text-neutral-300 leading-relaxed">
                  Các ứng dụng SaaS tích hợp các mô hình ngôn ngữ lớn (LLM), gợi ý tự động (Copilot), phân loại vé hỗ trợ khách hàng thông minh và dự báo doanh số bán hàng trong Salesforce Einstein hay Google Gemini Workspace.
                </p>
                <div className="mt-3 text-[11px] font-mono text-teal-400">
                  • Chatbot tự động 24/7 • Dự báo doanh số CRM • Soạn thảo nội dung tự động
                </div>
              </div>

              <div className="rounded-xl border border-cyan-500/30 bg-cyan-950/20 p-4">
                <div className="text-sm font-bold text-cyan-300">2. SaaS + Internet of Things (IoT)</div>
                <p className="mt-2 text-neutral-300 leading-relaxed">
                  Hàng triệu thiết bị cảm biến thông minh gửi dữ liệu trực tiếp về các ứng dụng SaaS quản lý nhà máy, chuỗi cung ứng lạnh và nông nghiệp thông minh, cảnh báo hỏng hóc trước khi máy móc ngừng hoạt động.
                </p>
                <div className="mt-3 text-[11px] font-mono text-cyan-400">
                  • Bảo trì dự đoán thiết bị • Giám sát nhiệt độ kho bãi • Theo dõi đoàn xe vận tải
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TECH 2: BLOCKCHAIN */}
      {selectedTech === "blockchain" && (
        <div className="mt-6 space-y-5">
          <div className="rounded-2xl border border-neutral-700 bg-black/40 p-5">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/20 text-2xl text-amber-400">
                🔗
              </span>
              <div>
                <h4 className="text-lg font-bold text-white">SaaS Kết Hợp Blockchain &amp; Smart Contract</h4>
                <p className="text-xs text-neutral-400">
                  Công nghệ sổ cái phân tán (Distributed Ledger) đảm bảo tính minh bạch, bảo mật và chống làm giả tuyệt đối
                </p>
              </div>
            </div>

            {/* 3 Core Benefits from Curriculum */}
            <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div className="rounded-xl border border-neutral-800 bg-neutral-900/80 p-3.5">
                <div className="text-lg">🛡️</div>
                <div className="font-bold text-amber-300 mt-1">Enhanced Security</div>
                <p className="mt-1 text-neutral-400 text-[11px] leading-relaxed">
                  Dữ liệu được lưu trữ phân tán và mã hóa mật mã học, không một bên thứ ba nào có thể đơn phương chỉnh sửa hoặc xóa dữ liệu.
                </p>
              </div>
              <div className="rounded-xl border border-neutral-800 bg-neutral-900/80 p-3.5">
                <div className="text-lg">🆔</div>
                <div className="font-bold text-amber-300 mt-1">Identity &amp; Access Management</div>
                <p className="mt-1 text-neutral-400 text-[11px] leading-relaxed">
                  Định danh phi tập trung (Decentralized Identity) cho phép người dùng kiểm soát 100% dữ liệu danh tính cá nhân mà không lo bị lộ lọt.
                </p>
              </div>
              <div className="rounded-xl border border-neutral-800 bg-neutral-900/80 p-3.5">
                <div className="text-lg">📜</div>
                <div className="font-bold text-amber-300 mt-1">Smart Contract</div>
                <p className="mt-1 text-neutral-400 text-[11px] leading-relaxed">
                  Hợp đồng thông minh tự động thực thi thanh toán và giải phóng hàng hóa ngay khi điều kiện thỏa thuận được xác minh trên đám mây.
                </p>
              </div>
            </div>

            {/* 3 Practical Applications from Slides */}
            <div className="mt-4 rounded-xl border border-amber-500/30 bg-amber-950/10 p-4 text-xs">
              <h5 className="font-bold text-amber-400 text-xs uppercase tracking-wider mb-2">
                3 Lĩnh Vực Ứng Dụng Tiêu Biểu Trong Giáo Trình
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="rounded-lg bg-black/50 p-2.5 border border-neutral-800">
                  <div className="font-bold text-white">📦 Supply chain management</div>
                  <div className="text-[11px] text-neutral-400 mt-0.5">Truy xuất nguồn gốc hàng hóa từ nông trại đến siêu thị.</div>
                </div>
                <div className="rounded-lg bg-black/50 p-2.5 border border-neutral-800">
                  <div className="font-bold text-white">📑 Document management system</div>
                  <div className="text-[11px] text-neutral-400 mt-0.5">Xác thực văn bằng, chứng chỉ và hợp đồng chống sửa đổi giả mạo.</div>
                </div>
                <div className="rounded-lg bg-black/50 p-2.5 border border-neutral-800">
                  <div className="font-bold text-white">🏥 Healthcare</div>
                  <div className="text-[11px] text-neutral-400 mt-0.5">Bảo mật bệnh án điện tử, đồng bộ an toàn giữa các bệnh viện.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TECH 3: BIG DATA */}
      {selectedTech === "bigdata" && (
        <div className="mt-6 space-y-5">
          <div className="rounded-2xl border border-neutral-700 bg-black/40 p-5">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/20 text-2xl text-sky-400">
                📊
              </span>
              <div>
                <h4 className="text-lg font-bold text-white">SaaS Kết Hợp Khai Phá Dữ Liệu Lớn (Big Data)</h4>
                <p className="text-xs text-neutral-400">
                  Giải pháp quản lý, phân tích và khai thác tập dữ liệu khổng lồ mà công cụ truyền thống không xử lý hiệu quả
                </p>
              </div>
            </div>

            {/* 2 Core Benefits from Curriculum */}
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="rounded-xl border border-sky-500/30 bg-sky-950/20 p-4">
                <div className="text-sm font-bold text-sky-300">1. In-depth data analysis (Phân tích chuyên sâu)</div>
                <p className="mt-2 text-neutral-300 leading-relaxed">
                  Ứng dụng SaaS kết hợp kho dữ liệu đám mây (Cloud Data Lakehouse) xử lý hàng triệu bản ghi hành vi người dùng trong vài giây, tìm ra mối tương quan ẩn mà con người không thể nhận ra thủ công.
                </p>
              </div>

              <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-4">
                <div className="text-sm font-bold text-emerald-300">2. Data-driven business decisions (Ra quyết định dựa trên dữ liệu)</div>
                <p className="mt-2 text-neutral-300 leading-relaxed">
                  Thay vì dựa vào cảm tính hoặc trực giác chủ quan, ban giám đốc doanh nghiệp đưa ra chiến lược kinh doanh dựa trên các báo cáo phân tích trực quan hóa số liệu thời gian thực.
                </p>
              </div>
            </div>

            {/* 3 Industry Applications from Slides */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="rounded-xl border border-neutral-800 bg-neutral-900/80 p-3.5 text-center">
                <div className="text-2xl">🛒</div>
                <div className="font-bold text-white mt-1">Retail (Bán lẻ)</div>
                <div className="text-[11px] text-neutral-400 mt-1">
                  Dự báo sức mua của khách hàng, tối ưu hàng tồn kho và định giá động linh hoạt.
                </div>
              </div>

              <div className="rounded-xl border border-neutral-800 bg-neutral-900/80 p-3.5 text-center">
                <div className="text-2xl">💳</div>
                <div className="font-bold text-white mt-1">Financial sector (Tài chính)</div>
                <div className="text-[11px] text-neutral-400 mt-1">
                  Phát hiện gian lận thẻ tín dụng thời gian thực, đánh giá rủi ro tín dụng tức thì.
                </div>
              </div>

              <div className="rounded-xl border border-neutral-800 bg-neutral-900/80 p-3.5 text-center">
                <div className="text-2xl">🩺</div>
                <div className="font-bold text-white mt-1">Health industry (Y tế)</div>
                <div className="text-[11px] text-neutral-400 mt-1">
                  Phân tích dịch tễ học cộng đồng, tối ưu hóa phác đồ điều trị và chi phí giường bệnh.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TECH 4: DIVERSE MARKETS */}
      {selectedTech === "markets" && (
        <div className="mt-6 space-y-5">
          <div className="rounded-2xl border border-neutral-700 bg-black/40 p-5">
            <h4 className="text-base font-bold text-white flex items-center gap-2">
              <span>📈</span> Xu Hướng Tăng Trưởng Liên Tục &amp; Mở Rộng Thị Trường Đa Dạng
            </h4>
            <p className="mt-1 text-xs text-neutral-300 leading-relaxed">
              Theo bài giảng, SaaS đang bước vào giai đoạn tăng trưởng bền vững (Continuous growth) và thâm nhập sâu rộng vào các lĩnh vực kinh tế chiến lược:
            </p>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="rounded-xl border border-amber-500/30 bg-amber-950/20 p-3.5">
                <div className="font-bold text-amber-300">1. Tài Chính (Finance)</div>
                <p className="mt-1 text-[11px] text-neutral-300 leading-relaxed">
                  Fintech SaaS: Ngân hàng số mở (Open Banking), thanh toán xuyên biên giới và phần mềm quản lý thuế tự động.
                </p>
              </div>

              <div className="rounded-xl border border-blue-500/30 bg-blue-950/20 p-3.5">
                <div className="font-bold text-blue-300">2. Giáo Dục (Education)</div>
                <p className="mt-1 text-[11px] text-neutral-300 leading-relaxed">
                  EdTech SaaS: Lớp học ảo tương tác, chấm thi tự động và hệ sinh thái học tập suốt đời (Lifelong Learning).
                </p>
              </div>

              <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-3.5">
                <div className="font-bold text-emerald-300">3. Y Tế (Healthcare)</div>
                <p className="mt-1 text-[11px] text-neutral-300 leading-relaxed">
                  MedTech SaaS: Khám chữa bệnh từ xa (Telemedicine), quản trị dữ liệu lâm sàng và xét nghiệm số hóa.
                </p>
              </div>
            </div>

            {/* 2 Areas Still Needing Improvement */}
            <div className="mt-4 rounded-xl border border-red-500/30 bg-red-950/10 p-3.5 text-xs text-neutral-300">
              <div className="font-bold text-red-400 flex items-center gap-1.5">
                <span>⚠️</span> 2 Trọng Điểm SaaS Tương Lai Vẫn Cần Cải Thiện:
              </div>
              <div className="mt-1.5 grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                <div className="rounded bg-black/40 p-2 border border-neutral-800">
                  • <strong>Security and privacy:</strong> Đảm bảo tuân thủ các đạo luật dữ liệu khắt khe (GDPR, HIPAA).
                </div>
                <div className="rounded bg-black/40 p-2 border border-neutral-800">
                  • <strong>Customization capabilities:</strong> Nâng cao khả năng tùy biến sâu bằng kiến trúc Micro-Frontend &amp; Headless.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
