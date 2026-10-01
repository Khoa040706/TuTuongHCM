"use client";

import React, { useState } from "react";
import {
  FileSpreadsheet,
  AlertTriangle,
  Flame,
  Copy,
  Layers,
  Zap,
  Lock,
  ShieldAlert,
  ShieldCheck,
  RefreshCw,
  XCircle,
  CheckCircle2,
  Database,
  ArrowRight,
  ArrowLeft,
  Split,
  FileCode,
  Users,
  ServerCrash
} from "lucide-react";

export default function FileProcessingPitfallsVisualizer() {
  const [activePitfall, setActivePitfall] = useState("redundancy");

  const pitfalls = [
    {
      id: "redundancy",
      code: "a",
      title: "Tính Dư Thừa Dữ Liệu",
      en: "Data Redundancy",
      icon: Copy,
      badge: "Lãng phí & Dị thường",
      scenario:
        "Thông tin SV01 (Họ tên, SĐT, Địa chỉ) được lưu lặp lại tại cả File_DaoTao, File_KeToan, File_ThuVien và File_KyTucXa.",
      consequence:
        "Chiếm dụng dung lượng lưu trữ vô ích, gia tăng công sức nhập liệu và là mầm mống gốc rễ sinh ra dị thường không nhất quán.",
      dbmsSolution:
        "DBMS chuẩn hóa dữ liệu (Normalization), tách thành các bảng quan hệ liên kết qua Khóa chính (PK) / Khóa ngoại (FK), lưu trữ duy nhất 1 bản ghi gốc."
    },
    {
      id: "inconsistency",
      code: "b",
      title: "Tính Dị Thường / Không Nhất Quán",
      en: "Data Inconsistency",
      icon: Split,
      badge: "Sai lệch thực tế",
      scenario:
        "Sinh viên đổi SĐT từ '0901...' sang '0988...'. Cán bộ Phòng Đào tạo cập nhật File của mình, nhưng Phòng Kế toán không hay biết nên File Kế toán vẫn giữ số cũ.",
      consequence:
        "Tại cùng một thời điểm, cùng một sinh viên nhưng hệ thống trả về 2 số điện thoại khác nhau. Không ai biết đâu là dữ liệu chuẩn xác.",
      dbmsSolution:
        "Khi cập nhật trên DBMS, chỉ cần 1 lệnh UPDATE duy nhất lên bảng gốc, mọi khung nhìn (Views) và ứng dụng liên quan lập tức đồng bộ 100%."
    },
    {
      id: "atomicity",
      code: "c",
      title: "Vấn Đề Tính Nguyên Tố Giao Tác",
      en: "Atomicity of Transactions",
      icon: ServerCrash,
      badge: "All-or-Nothing",
      scenario:
        "Giao dịch chuyển 1.000.000đ từ Tài khoản A sang Tài khoản B. Hệ thống vừa trừ tiền ở File_A.txt thì bị mất điện đột ngột trước khi kịp cộng tiền vào File_B.txt.",
      consequence:
        "Tài khoản A bị mất tiền nhưng B chưa nhận được. Hệ thống tập tin không có cơ chế tự động khôi phục (Rollback) về trạng thái an toàn trước đó.",
      dbmsSolution:
        "DBMS áp dụng chuẩn Transaction ACID: Sử dụng cơ chế Write-Ahead Logging (WAL) để tự động ROLLBACK hoàn tiền nếu có sự cố xảy ra giữa chừng."
    },
    {
      id: "integrity",
      code: "d",
      title: "Vấn Đề Tính Toàn Vẹn",
      en: "Integrity Constraints",
      icon: AlertTriangle,
      badge: "Khó mở rộng ràng buộc",
      scenario:
        "Trường đại học ban hành quy định mới: 'Điểm trung bình tích lũy phải nằm trong khoảng từ 0.0 đến 10.0' hoặc 'Mã khoa phải tồn tại trong danh mục khoa'.",
      consequence:
        "Lập trình viên phải tìm và sửa lại toàn bộ mã nguồn của hàng chục chương trình C, Pascal, COBOL đang truy xuất vào các tập tin để kiểm tra điều kiện này.",
      dbmsSolution:
        "Khai báo ràng buộc toàn vẹn trực tiếp tại mức CSDL (CHECK, FOREIGN KEY, NOT NULL). Mọi ứng dụng tự động bị ràng buộc mà không cần viết lại mã nguồn."
    },
    {
      id: "concurrency",
      code: "e",
      title: "Dị Thường Truy Cập Tương Tranh",
      en: "Concurrent Access Anomalies",
      icon: Users,
      badge: "Ghi đè mất dữ liệu",
      scenario:
        "Hai nhân viên cùng mở tập tin KhoHang.dat chứa số lượng 'Tồn kho = 10'. Cả hai cùng bán 1 sản phẩm và cùng ghi đè giá trị 'Tồn kho = 9' vào tệp.",
      consequence:
        "Thực tế bán được 2 món nhưng tồn kho chỉ giảm 1 (Hiện tượng Ghi đè mất dữ liệu - Lost Update). Dữ liệu kho hàng bị thất thoát nghiêm trọng.",
      dbmsSolution:
        "DBMS sở hữu bộ điều khiển tương tranh (Concurrency Control) sử dụng cơ chế Khóa (Locking 2PL) hoặc Đa phiên bản (MVCC) đảm bảo tính cô lập (Isolation)."
    },
    {
      id: "security",
      code: "f",
      title: "Tính Không Toàn Vẹn & An Toàn",
      en: "Data Security & Recovery",
      icon: ShieldAlert,
      badge: "Hổng bảo mật & Sao lưu",
      scenario:
        "Một tập tin bảng lương LuongNhanVien.xlsx được chia sẻ trên mạng nội bộ. Bất kỳ ai mở được tệp đều có thể thấy toàn bộ lương của Giám đốc.",
      consequence:
        "Hệ thống tệp chỉ phân quyền thô sơ ở cấp độ tệp (Đọc/Ghi), không thể phân quyền chi tiết theo từng cột (Field) hay từng dòng (Row), thiếu cơ chế Backup tự động.",
      dbmsSolution:
        "DBMS cung cấp hệ thống phân quyền đa cấp (GRANT/REVOKE, RBAC), mã hóa dữ liệu tại chỗ (TDE), che giấu dữ liệu qua View và tự động sao lưu định kỳ."
    }
  ];

  const currentIndex = pitfalls.findIndex((p) => p.id === activePitfall);
  const current = pitfalls[currentIndex >= 0 ? currentIndex : 0];
  const IconComponent = current.icon;

  const handlePrev = () => {
    const nextIdx = (currentIndex - 1 + pitfalls.length) % pitfalls.length;
    setActivePitfall(pitfalls[nextIdx].id);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % pitfalls.length;
    setActivePitfall(pitfalls[nextIdx].id);
  };

  return (
    <div className="my-8 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden text-slate-800 max-w-full">
      {/* Header Bar */}
      <div className="px-4 sm:px-6 py-4 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 min-w-0">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 border border-orange-200 flex items-center justify-center font-bold flex-shrink-0">
            <Flame className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600 block truncate">
              Interactive Pitfalls Studio • Mục 1.1
            </span>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 truncate">
              6 Nhược Điểm Chí Mạng Của Xử Lý Tập Tin
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-2 self-start sm:self-auto flex-shrink-0">
          <span className="text-xs font-mono text-orange-700 px-3 py-1 rounded-lg bg-orange-100/80 border border-orange-200 font-bold whitespace-nowrap">
            File Processing System
          </span>
        </div>
      </div>

      {/* Pill Scroll Strip Navigation with Count & Arrow Buttons */}
      <div className="p-3 sm:p-4 bg-slate-50/70 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 min-w-0">
        {/* Count indicator & Next/Prev Controls */}
        <div className="flex items-center justify-between sm:justify-start gap-2.5 min-w-0">
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={handlePrev}
              className="p-1.5 rounded-lg border border-slate-200 bg-white text-slate-600 hover:text-orange-600 hover:bg-orange-50 transition-colors shadow-xs"
              title="Nhược điểm trước"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="p-1.5 rounded-lg border border-slate-200 bg-white text-slate-600 hover:text-orange-600 hover:bg-orange-50 transition-colors shadow-xs"
              title="Nhược điểm tiếp theo"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <span className="text-xs font-bold text-slate-700 font-mono bg-white px-2.5 py-1 rounded-lg border border-slate-200">
            Nhược điểm <span className="text-orange-600">{currentIndex + 1}</span> / {pitfalls.length}
          </span>
        </div>

        {/* Scrollable Pill Strip */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scroll-smooth min-w-0 w-full sm:w-auto">
          {pitfalls.map((p, idx) => {
            const isActive = activePitfall === p.id;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => setActivePitfall(p.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 flex-shrink-0 ${
                  isActive
                    ? "bg-orange-600 text-white shadow-sm ring-2 ring-orange-500/20"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                <span className={`w-4 h-4 rounded-full text-[10px] font-mono font-bold flex items-center justify-center ${
                  isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"
                }`}>
                  {p.code.toUpperCase()}
                </span>
                <span>{p.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Pitfall Deep Dive Content */}
      <div className="p-4 sm:p-6 space-y-5 min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3 min-w-0">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-orange-100 text-orange-800 border border-orange-200 font-mono flex-shrink-0">
              Nhược điểm ({current.code.toUpperCase()})
            </span>
            <h4 className="text-base sm:text-lg font-extrabold text-slate-900 flex items-center gap-2 truncate">
              <IconComponent className="w-5 h-5 text-orange-600 flex-shrink-0" />
              <span className="truncate">{current.title}</span>
            </h4>
          </div>
          <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-rose-100 text-rose-800 border border-rose-200 self-start sm:self-auto flex-shrink-0">
            {current.badge}
          </span>
        </div>

        {/* Dual Comparison Grid: 1 cột trên mobile, 2 cột trên tablet/laptop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 min-w-0">
          {/* File System Problem Box */}
          <div className="p-4 sm:p-5 rounded-2xl bg-rose-50/60 border border-rose-200 space-y-3 shadow-sm min-w-0">
            <div className="flex items-center gap-2 text-rose-700 font-bold text-xs uppercase tracking-wider border-b border-rose-200/80 pb-2">
              <XCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
              <span>Kịch Bản Sự Cố Trên File System:</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
              {current.scenario}
            </p>
            <div className="p-3 rounded-xl bg-white border border-rose-200 text-xs text-rose-900 space-y-1 shadow-sm min-w-0">
              <div className="font-bold text-[11px] uppercase tracking-wider text-rose-700">
                Hậu quả thực tế:
              </div>
              <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed font-sans">
                {current.consequence}
              </p>
            </div>
          </div>

          {/* DBMS Solution Box */}
          <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-3 shadow-sm min-w-0">
            <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase tracking-wider border-b border-emerald-200/80 pb-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Giải Pháp Đột Phá Của CSDL (DBMS):</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
              {current.dbmsSolution}
            </p>
            <div className="p-3 rounded-xl bg-white border border-emerald-200 text-xs text-emerald-800 flex items-start gap-2 shadow-sm min-w-0">
              <Zap className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                Tự động hóa hoàn toàn ở tầng hệ thống, loại bỏ triệt để rủi ro sai sót do con người.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
