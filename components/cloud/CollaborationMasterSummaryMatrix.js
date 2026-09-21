"use client";
import React, { useState } from "react";
import { Table, Filter, ShieldCheck, DollarSign, Zap, Check, ArrowRight, BookOpen, Layers } from "lucide-react";

const MATRIX_DATA = [
  {
    name: "Web-based IM",
    type: "Giao tiếp tức thời",
    cost: "Rất thấp / Miễn phí",
    costRank: "low",
    security: "Trung bình (TLS cơ bản)",
    securityRank: "med",
    realtime: "Có (Thời gian thực)",
    realtimeRank: "yes",
    bestFor: "Người dùng vãng lai, liên lạc nhanh qua trình duyệt không cần cài app"
  },
  {
    name: "Enterprise IM (Slack/Teams)",
    type: "Nhắn tin doanh nghiệp",
    cost: "Thuê bao theo user/tháng",
    costRank: "mid",
    security: "Rất cao (E2EE, SOC2, Audit logs)",
    securityRank: "high",
    realtime: "Có (Đồng bộ tức thì)",
    realtimeRank: "yes",
    bestFor: "Giao tiếp nội bộ tập trung, tích hợp kênh dự án và danh bạ Active Directory"
  },
  {
    name: "Cloud Phone (VoIP & PBX)",
    type: "Thoại & Tổng đài ảo",
    cost: "Tiết kiệm 60-80% so với PSTN",
    costRank: "low",
    security: "Cao (SIP over TLS, SRTP)",
    securityRank: "high",
    realtime: "Có (Độ trễ < 150ms)",
    realtimeRank: "yes",
    bestFor: "Chăm sóc khách hàng, tổng đài máy lẻ làm việc từ xa (Work from Anywhere)"
  },
  {
    name: "Internet Fax",
    type: "Fax qua Đám mây",
    cost: "Rất thấp (Không tốn giấy/mực)",
    costRank: "low",
    security: "Cao (Mã hóa file PDF, lưu vết)",
    securityRank: "high",
    realtime: "Không (Bất đồng bộ - Async)",
    realtimeRank: "no",
    bestFor: "Hợp đồng pháp lý, y tế, cơ quan nhà nước yêu cầu lưu giữ bằng chứng fax"
  },
  {
    name: "Cloud Document Co-authoring",
    type: "Đồng biên tập tài liệu",
    cost: "Gói SaaS (Google Workspace, M365)",
    costRank: "mid",
    security: "Rất cao (Granular Permissions, DLP)",
    securityRank: "high",
    realtime: "Có (Thuật toán OT/CRDT)",
    realtimeRank: "yes",
    bestFor: "Soạn thảo hợp đồng, báo cáo dự án, bảng tính tài chính cùng làm việc nhóm"
  },
  {
    name: "Enterprise Wiki & Blogs",
    type: "Cơ sở tri thức nội bộ",
    cost: "Trung bình (Confluence / SharePoint)",
    costRank: "mid",
    security: "Cao (Phân quyền theo phòng ban)",
    securityRank: "high",
    realtime: "Không (Cập nhật theo phiên bản)",
    realtimeRank: "no",
    bestFor: "Lưu trữ quy trình chuẩn (SOP), onboarding nhân viên, thông điệp lãnh đạo"
  },
  {
    name: "Web Conferencing (Webinar)",
    type: "Hội thảo web 1-nhiều",
    cost: "Thuê bao theo quy mô người xem",
    costRank: "mid",
    security: "Cao (Kiểm duyệt câu hỏi, mã hóa)",
    securityRank: "high",
    realtime: "Có (Độ trễ 1-2 giây)",
    realtimeRank: "yes",
    bestFor: "Hội thảo khách hàng quy mô lớn, ra mắt sản phẩm, đào tạo toàn công ty"
  },
  {
    name: "Streaming Video & Lớp học ảo",
    type: "Bài giảng trực tuyến",
    cost: "Linh hoạt theo băng thông CDN",
    costRank: "mid",
    security: "Cao (Bảo vệ bản quyền DRM)",
    securityRank: "high",
    realtime: "Có (Tương tác bảng trắng, polls)",
    realtimeRank: "yes",
    bestFor: "Đào tạo e-Learning, lưu trữ video thư viện nội bộ có chỉ mục tìm kiếm"
  }
];

export default function CollaborationMasterSummaryMatrix() {
  const [filter, setFilter] = useState("all"); // 'all' | 'cost' | 'security' | 'realtime'

  const filteredData = MATRIX_DATA.filter((item) => {
    if (filter === "cost") return item.costRank === "low";
    if (filter === "security") return item.securityRank === "high";
    if (filter === "realtime") return item.realtimeRank === "yes";
    return true;
  });

  return (
    <div className="my-8 p-5 sm:p-8 rounded-3xl bg-white border border-stone-200 shadow-md font-sans">
      {/* Header & Filter pills */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-black uppercase tracking-widest text-sky-600">
              Master Matrix • Mục VII
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-black text-stone-900 mt-1">
            Bảng Ma Trận Tổng Kết 8 Công Nghệ Cộng Tác Toàn Chương 8
          </h3>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Sử dụng bộ lọc thông minh bên dưới để cô đọng bảng theo tiêu chí ôn thi bạn mong muốn.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-stone-100 border border-stone-200/80 self-start sm:self-auto shrink-0">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              filter === "all" ? "bg-stone-900 text-white shadow-xs" : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Tất cả (8)
          </button>
          <button
            type="button"
            onClick={() => setFilter("cost")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
              filter === "cost" ? "bg-emerald-600 text-white shadow-xs" : "text-stone-600 hover:text-stone-900"
            }`}
          >
            <DollarSign className="w-3 h-3" />
            <span>Tiết kiệm chi phí</span>
          </button>
          <button
            type="button"
            onClick={() => setFilter("security")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
              filter === "security" ? "bg-purple-600 text-white shadow-xs" : "text-stone-600 hover:text-stone-900"
            }`}
          >
            <ShieldCheck className="w-3 h-3" />
            <span>Bảo mật cao nhất</span>
          </button>
          <button
            type="button"
            onClick={() => setFilter("realtime")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
              filter === "realtime" ? "bg-sky-600 text-white shadow-xs" : "text-stone-600 hover:text-stone-900"
            }`}
          >
            <Zap className="w-3 h-3" />
            <span>Thời gian thực</span>
          </button>
        </div>
      </div>

      {/* Responsive Table */}
      <div className="overflow-x-auto rounded-2xl border border-stone-200 mb-6">
        <table className="min-w-full text-left text-xs sm:text-sm border-collapse">
          <thead>
            <tr className="bg-stone-100 text-stone-700 font-extrabold text-[11px] uppercase tracking-wider border-b border-stone-200">
              <th className="p-3.5 sm:p-4">Công nghệ Cộng tác</th>
              <th className="p-3.5 sm:p-4">Phân loại Trụ cột</th>
              <th className="p-3.5 sm:p-4">Mô hình Chi phí</th>
              <th className="p-3.5 sm:p-4">Mức độ An ninh</th>
              <th className="p-3.5 sm:p-4">Thời gian thực</th>
              <th className="p-3.5 sm:p-4">Trường hợp Tối ưu</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-200 bg-white">
            {filteredData.map((row, idx) => (
              <tr key={idx} className="hover:bg-stone-50/80 transition-colors">
                <td className="p-3.5 sm:p-4 font-bold text-stone-900 whitespace-nowrap">
                  {row.name}
                </td>
                <td className="p-3.5 sm:p-4 text-stone-600 whitespace-nowrap">
                  {row.type}
                </td>
                <td className="p-3.5 sm:p-4 text-emerald-800 font-medium">
                  {row.cost}
                </td>
                <td className="p-3.5 sm:p-4 text-purple-800 font-medium">
                  {row.security}
                </td>
                <td className="p-3.5 sm:p-4">
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold whitespace-nowrap ${
                    row.realtimeRank === "yes" ? "bg-sky-100 text-sky-800" : "bg-stone-200 text-stone-600"
                  }`}>
                    {row.realtime}
                  </span>
                </td>
                <td className="p-3.5 sm:p-4 text-stone-600 text-xs leading-relaxed min-w-[200px]">
                  {row.bestFor}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 6 Takeaway Cards for Quick Exam Cramming */}
      <div className="space-y-3">
        <span className="text-xs font-black uppercase tracking-wider text-stone-500 block">
          6 Điểm Chốt Kiến Thức Vàng Thi Cử:
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-xs space-y-1">
            <span className="font-extrabold text-stone-900 block">1. Bản chất Cloud Collaboration</span>
            <p className="text-stone-600 leading-relaxed">Chuyển từ gửi file đính kèm qua email rời rạc sang làm việc chung trên 1 nguồn sự thật duy nhất (Single Source of Truth).</p>
          </div>
          <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-xs space-y-1">
            <span className="font-extrabold text-stone-900 block">2. Giao thức VoIP cốt lõi</span>
            <p className="text-stone-600 leading-relaxed"><strong>SIP</strong> dùng để thiết lập, duy trì và giải phóng cuộc gọi; <strong>RTP</strong> dùng để vận chuyển luồng gói tin âm thanh.</p>
          </div>
          <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-xs space-y-1">
            <span className="font-extrabold text-stone-900 block">3. Cơ chế đồng biên tập (OT)</span>
            <p className="text-stone-600 leading-relaxed">Operational Transformation là bí quyết giúp Google Docs đồng bộ hàng chục con trỏ gõ cùng lúc mà không cần khóa file.</p>
          </div>
          <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-xs space-y-1">
            <span className="font-extrabold text-stone-900 block">4. Phân biệt Wiki vs Blog</span>
            <p className="text-stone-600 leading-relaxed"><strong>Wiki:</strong> Mọi người cùng sửa để tích lũy tri thức. <strong>Blog:</strong> Thông tin 1 chiều từ người viết đến độc giả, có bình luận.</p>
          </div>
          <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-xs space-y-1">
            <span className="font-extrabold text-stone-900 block">5. An ninh & Quyền truy cập</span>
            <p className="text-stone-600 leading-relaxed">Luôn áp dụng nguyên tắc đặc quyền tối thiểu (Least Privilege) qua các cấp quyền: Xem, Nhận xét, Chỉnh sửa, Sở hữu.</p>
          </div>
          <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-xs space-y-1">
            <span className="font-extrabold text-stone-900 block">6. Lợi ích kinh tế (OpEx)</span>
            <p className="text-stone-600 leading-relaxed">Triệt tiêu chi phí mua tổng đài, máy chủ email tại chỗ; chuyển toàn bộ sang phí dịch vụ tính theo đầu người dùng.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
