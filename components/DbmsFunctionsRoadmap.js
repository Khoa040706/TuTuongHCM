"use client";

import React, { useState } from "react";
import {
  Server,
  Database,
  Terminal,
  ShieldCheck,
  Zap,
  Activity,
  Layers,
  Cpu,
  RefreshCw,
  Sliders,
  CheckCircle2,
  FileSpreadsheet,
  Globe,
  Lock,
  Boxes
} from "lucide-react";

export default function DbmsFunctionsRoadmap() {
  const [activeTab, setActiveTab] = useState("ecosystem"); // 'ecosystem' | 'core-abilities' | 'extended-functions'

  const dbmsEcosystem = [
    { name: "Oracle Database", type: "Enterprise RDBMS", era: "Doanh nghiệp lớn", desc: "Hệ quản trị CSDL quan hệ mạnh mẽ, xử lý giao dịch khổng lồ và độ sẵn sàng cao." },
    { name: "Microsoft SQL Server", type: "Enterprise RDBMS", era: "Doanh nghiệp", desc: "Tích hợp sâu hệ sinh thái Windows, hỗ trợ T-SQL, BI và phân tích dữ liệu." },
    { name: "MS Access", type: "Desktop DBMS", era: "Cá nhân / Nhỏ", desc: "Hệ quản trị CSDL trên máy tính cá nhân, dễ sử dụng kèm giao diện GUI và Form báo cáo." },
    { name: "Foxpro / Paradox", type: "Classic Desktop DBMS", era: "60s - 90s", desc: "Các HQTCSDL dạng bảng cổ điển, phổ biến trong những năm đầu kỷ nguyên tin học." },
    { name: "Sybase", type: "Enterprise RDBMS", era: "Ngân hàng / Tài chính", desc: "Hệ quản trị CSDL hiệu năng cao tiền thân của nhiều chuẩn SQL hiện đại." },
    { name: "PostgreSQL / MySQL", type: "Open-Source RDBMS", era: "Mã nguồn mở", desc: "Các hệ quản trị CSDL quan hệ chuẩn mực, được ứng dụng rộng rãi nhất hiện nay." }
  ];

  const extendedFunctions = [
    {
      num: 1,
      title: "Giao Diện Đa Tầng",
      desc: "Cung cấp giao diện giữa users và CSDL; giữa CSDL với các hệ thống phần mềm khác.",
      icon: Globe
    },
    {
      num: 2,
      title: "Ngôn Ngữ Cấp Cao (Phi Thủ Tục)",
      desc: "Cung cấp ngôn ngữ bậc cao (như SQL) giúp người dùng chỉ cần chỉ rõ 'Cần lấy gì' (Declarative) mà không cần lập trình thuật toán phức tạp.",
      icon: Terminal
    },
    {
      num: 3,
      title: "Quản Lý Giao Tác & An Toàn",
      desc: "Quản lý giao tác (Transaction Manager), phân quyền chi tiết và an toàn dữ liệu khi có một hay nhiều người sử dụng đồng thời.",
      icon: ShieldCheck
    },
    {
      num: 4,
      title: "Điều Khiển Toàn Vẹn & Phục Hồi Sự Cố",
      desc: "Điều khiển sự khớp, tính toàn vẹn khi chuyển hóa dữ liệu và tự động khắc phục, khôi phục trạng thái khi có sự cố hệ thống.",
      icon: RefreshCw
    },
    {
      num: 5,
      title: "Kiểm Tra Độ Tin Cậy",
      desc: "Kiểm soát tính hợp lệ, định dạng và độ tin cậy của dữ liệu trước khi cho phép ghi vào CSDL.",
      icon: CheckCircle2
    }
  ];

  return (
    <div className="my-8 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden text-slate-800">
      {/* Header */}
      <div className="px-5 py-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 border border-orange-200 flex items-center justify-center font-bold">
            <Server className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600">
              DBMS Architecture • Mục 2.5
            </span>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
              Hệ Quản Trị Cơ Sở Dữ Liệu (DBMS) & Các Chức Năng Cốt Lõi
            </h3>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 border border-slate-200 text-xs">
          <button
            onClick={() => setActiveTab("ecosystem")}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
              activeTab === "ecosystem"
                ? "bg-orange-600 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Hệ Sinh Thái DBMS
          </button>
          <button
            onClick={() => setActiveTab("core-abilities")}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
              activeTab === "core-abilities"
                ? "bg-orange-600 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            2 Khả Năng Cơ Bản
          </button>
          <button
            onClick={() => setActiveTab("extended-functions")}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
              activeTab === "extended-functions"
                ? "bg-orange-600 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Các Chức Năng Mở Rộng
          </button>
        </div>
      </div>

      {/* Distinction Header Box */}
      <div className="p-4 bg-slate-50/50 border-b border-slate-200 text-xs text-slate-700 grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="p-3.5 rounded-xl bg-orange-50/70 border border-orange-200 shadow-sm">
          <div className="text-orange-800 font-bold mb-1 flex items-center gap-1.5">
            <Database className="w-4 h-4 text-orange-600" /> Cơ Sở Dữ Liệu (Database):
          </div>
          <p className="text-[11px] text-slate-600 leading-relaxed font-sans">
            Là <strong>tập hợp dữ liệu</strong> có cấu trúc, có mối liên hệ ngữ nghĩa với nhau. CSDL là <strong>một thành phần</strong> được quản lý bên trong HQTCSDL.
          </p>
        </div>

        <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 shadow-sm">
          <div className="text-amber-800 font-bold mb-1 flex items-center gap-1.5">
            <Server className="w-4 h-4 text-amber-600" /> Hệ Quản Trị CSDL (DBMS):
          </div>
          <p className="text-[11px] text-slate-600 leading-relaxed font-sans">
            Là <strong>phần mềm / hệ thống chương trình</strong> dùng để tạo lập, duy trì, truy vấn và xử lý dữ liệu của CSDL.
          </p>
        </div>
      </div>

      {/* TAB CONTENT */}
      <div className="p-6">
        {/* TAB 1: ECOSYSTEM */}
        {activeTab === "ecosystem" && (
          <div className="space-y-4 animate-fadeIn">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Các Hệ Quản Trị CSDL Thường Gặp Trong Giáo Trình & Thực Tiễn:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {dbmsEcosystem.map((db, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-orange-300 hover:bg-orange-50/20 transition-all space-y-1.5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 text-xs font-mono">{db.name}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-orange-100 text-orange-800 font-semibold">{db.type}</span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed font-sans">{db.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: 2 CORE ABILITIES */}
        {activeTab === "core-abilities" && (
          <div className="space-y-4 animate-fadeIn">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Hai Khả Năng Cơ Bản Bắt Buộc Của Mọi HQTCSDL:
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-gradient-to-br from-orange-50/70 to-white border border-orange-200 space-y-3 shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-orange-100 text-orange-700 flex items-center justify-center font-bold">
                  1
                </div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                  Quản Lý Dữ Liệu Ở Mức Xử Lý Tệp
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  Đóng vai trò như một hệ điều hành chuyên biệt cho dữ liệu: Quản lý không gian lưu trữ trên đĩa, tổ chức khối dữ liệu (Data Blocks), quản lý bộ nhớ đệm (Buffer Cache) và xử lý I/O tệp tin hiệu quả.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-50/70 to-white border border-amber-200 space-y-3 shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                  2
                </div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                  Truy Cập Khối Lượng Dữ Liệu Lớn Có Hiệu Quả
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  Sử dụng các cấu trúc chỉ mục thông minh (B-Tree, Hashing) và bộ tối ưu hóa truy vấn (Query Optimizer) để tìm kiếm, trích xuất hàng triệu bản ghi trong tích tắc với chi phí I/O thấp nhất.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: EXTENDED FUNCTIONS */}
        {activeTab === "extended-functions" && (
          <div className="space-y-3 animate-fadeIn">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Các Chức Năng Quản Trị & Điều Khiển Mở Rộng:
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {extendedFunctions.map((fn) => {
                const ItemIcon = fn.icon;
                return (
                  <div key={fn.num} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3 shadow-sm">
                    <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ItemIcon className="w-4 h-4" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs font-bold text-slate-900">
                        {fn.num}. {fn.title}
                      </div>
                      <p className="text-[11px] text-slate-600 leading-relaxed font-sans">{fn.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
