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
      scenario: "Thông tin SV01 (Họ tên, SĐT, Địa chỉ) được lưu lặp lại tại cả File_DaoTao, File_KeToan, File_ThuVien và File_KyTucXa.",
      consequence: "Chiếm dụng dung lượng lưu trữ vô ích, gia tăng công sức nhập liệu và là mầm mống gốc rễ sinh ra dị thường không nhất quán.",
      dbmsSolution: "DBMS chuẩn hóa dữ liệu (Normalization), tách thành các bảng quan hệ liên kết qua Khóa chính (PK) / Khóa ngoại (FK), lưu trữ duy nhất 1 bản ghi gốc."
    },
    {
      id: "inconsistency",
      code: "b",
      title: "Tính Dị Thường / Không Nhất Quán",
      en: "Data Inconsistency",
      icon: Split,
      badge: "Sai lệch thực tế",
      scenario: "Sinh viên đổi SĐT từ '0901...' sang '0988...'. Cán bộ Phòng Đào tạo cập nhật File của mình, nhưng Phòng Kế toán không hay biết nên File Kế toán vẫn giữ số cũ.",
      consequence: "Tại cùng một thời điểm, cùng một sinh viên nhưng hệ thống trả về 2 số điện thoại khác nhau. Không ai biết đâu là dữ liệu chuẩn xác.",
      dbmsSolution: "Khi cập nhật trên DBMS, chỉ cần 1 lệnh UPDATE duy nhất lên bảng gốc, mọi khung nhìn (Views) và ứng dụng liên quan lập tức đồng bộ 100%."
    },
    {
      id: "atomicity",
      code: "c",
      title: "Vấn Đề Tính Nguyên Tố Giao Tác",
      en: "Atomicity of Transactions",
      icon: ServerCrash,
      badge: "All-or-Nothing",
      scenario: "Giao dịch chuyển 1.000.000đ từ Tài khoản A sang Tài khoản B. Hệ thống vừa trừ tiền ở File_A.txt thì bị mất điện đột ngột trước khi kịp cộng tiền vào File_B.txt.",
      consequence: "Tài khoản A bị mất tiền nhưng B chưa nhận được. Hệ thống tập tin không có cơ chế tự động khôi phục (Rollback) về trạng thái an toàn trước đó.",
      dbmsSolution: "DBMS áp dụng chuẩn Transaction ACID: Sử dụng cơ chế Write-Ahead Logging (WAL) để tự động ROLLBACK hoàn tiền nếu có sự cố xảy ra giữa chừng."
    },
    {
      id: "integrity",
      code: "d",
      title: "Vấn Đề Tính Toàn Vẹn",
      en: "Integrity Constraints",
      icon: AlertTriangle,
      badge: "Khó mở rộng ràng buộc",
      scenario: "Trường đại học ban hành quy định mới: 'Điểm trung bình tích lũy phải nằm trong khoảng từ 0.0 đến 10.0' hoặc 'Mã khoa phải tồn tại trong danh mục khoa'.",
      consequence: "Lập trình viên phải tìm và sửa lại toàn bộ mã nguồn của hàng chục chương trình C, Pascal, COBOL đang truy xuất vào các tập tin để kiểm tra điều kiện này.",
      dbmsSolution: "Khai báo ràng buộc toàn vẹn trực tiếp tại mức CSDL (CHECK, FOREIGN KEY, NOT NULL). Mọi ứng dụng tự động bị ràng buộc mà không cần viết lại mã nguồn."
    },
    {
      id: "concurrency",
      code: "e",
      title: "Dị Thường Truy Cập Tương Tranh",
      en: "Concurrent Access Anomalies",
      icon: Users,
      badge: "Ghi đè mất dữ liệu",
      scenario: "Hai nhân viên cùng mở tập tin KhoHang.dat chứa số lượng 'Tồn kho = 10'. Cả hai cùng bán 1 sản phẩm và cùng ghi đè giá trị 'Tồn kho = 9' vào tệp.",
      consequence: "Thực tế bán được 2 món nhưng tồn kho chỉ giảm 1 (Hiện tượng Ghi đè mất dữ liệu - Lost Update). Dữ liệu kho hàng bị thất thoát nghiêm trọng.",
      dbmsSolution: "DBMS sở hữu bộ điều khiển tương tranh (Concurrency Control) sử dụng cơ chế Khóa (Locking 2PL) hoặc Đa phiên bản (MVCC) đảm bảo tính cô lập (Isolation)."
    },
    {
      id: "security",
      code: "f",
      title: "Tính Không Toàn Vẹn & An Toàn Dữ Liệu",
      en: "Data Security & Recovery",
      icon: ShieldAlert,
      badge: "Hổng bảo mật & Sao lưu",
      scenario: "Một tập tin bảng lương LuongNhanVien.xlsx được chia sẻ trên mạng nội bộ. Bất kỳ ai mở được tệp đều có thể thấy toàn bộ lương của Giám đốc.",
      consequence: "Hệ thống tệp chỉ phân quyền thô sơ ở cấp độ tệp (Đọc/Ghi), không thể phân quyền chi tiết theo từng cột (Field) hay từng dòng (Row), thiếu cơ chế Backup tự động.",
      dbmsSolution: "DBMS cung cấp hệ thống phân quyền đa cấp (GRANT/REVOKE, RBAC), mã hóa dữ liệu tại chỗ (TDE), che giấu dữ liệu qua View và tự động sao lưu định kỳ."
    }
  ];

  const current = pitfalls.find(p => p.id === activePitfall) || pitfalls[0];
  const IconComponent = current.icon;

  return (
    <div className="my-8 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden text-slate-800">
      {/* Header Bar */}
      <div className="px-5 py-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 border border-orange-200 flex items-center justify-center font-bold">
            <Flame className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600">
              Interactive Pitfalls Studio • Mục 1.1
            </span>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
              6 Nhược Điểm Chí Mạng Của Hệ Thống Xử Lý Tập Tin (60s - 80s)
            </h3>
          </div>
        </div>
        <span className="text-xs font-mono text-orange-700 px-2.5 py-1 rounded-lg bg-orange-100 border border-orange-200 font-bold">
          File Processing System
        </span>
      </div>

      {/* 6 Pitfalls Selector Navigation Bar */}
      <div className="p-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 bg-slate-50/50 border-b border-slate-200">
        {pitfalls.map((p) => {
          const ItemIcon = p.icon;
          const isActive = activePitfall === p.id;
          return (
            <button
              key={p.id}
              onClick={() => setActivePitfall(p.id)}
              className={`p-2.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                isActive
                  ? "bg-orange-50 border-orange-500 text-orange-950 shadow-sm ring-1 ring-orange-400/30"
                  : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className={`w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center font-mono ${
                  isActive ? "bg-orange-200 text-orange-800" : "bg-slate-100 text-slate-600"
                }`}>
                  {p.code}
                </span>
                <ItemIcon className={`w-4 h-4 ${isActive ? "text-orange-600" : "text-slate-400"}`} />
              </div>
              <div className="text-xs font-bold leading-tight line-clamp-1">{p.title}</div>
              <div className="text-[10px] text-slate-500 font-mono mt-0.5">{p.en}</div>
            </button>
          );
        })}
      </div>

      {/* Active Pitfall Deep Dive Content */}
      <div className="p-6 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-800 border border-orange-200 font-mono">
              Nhược điểm ({current.code})
            </span>
            <h4 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
              <IconComponent className="w-5 h-5 text-orange-600" />
              {current.title} <span className="text-xs font-normal text-slate-500">({current.en})</span>
            </h4>
          </div>
          <span className="px-2.5 py-0.5 text-xs font-semibold rounded bg-rose-100 text-rose-800 border border-rose-200">
            {current.badge}
          </span>
        </div>

        {/* Dual Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* File System Problem Box */}
          <div className="p-4 rounded-2xl bg-rose-50/60 border border-rose-200 space-y-3 shadow-sm">
            <div className="flex items-center gap-2 text-rose-700 font-bold text-xs uppercase tracking-wider border-b border-rose-200/80 pb-2">
              <XCircle className="w-4 h-4 text-rose-600" /> Kịch Bản Sự Cố Trên File System:
            </div>
            <p className="text-xs text-slate-700 leading-relaxed font-sans">
              {current.scenario}
            </p>
            <div className="p-3 rounded-xl bg-white border border-rose-200 text-xs text-rose-900 space-y-1 shadow-sm">
              <div className="font-bold text-[11px] uppercase tracking-wider text-rose-700">Hậu quả thực tế:</div>
              <p className="text-[11px] text-slate-600 leading-relaxed">{current.consequence}</p>
            </div>
          </div>

          {/* DBMS Solution Box */}
          <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-3 shadow-sm">
            <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase tracking-wider border-b border-emerald-200/80 pb-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Giải Pháp Đột Phá Của CSDL (DBMS):
            </div>
            <p className="text-xs text-slate-700 leading-relaxed font-sans">
              {current.dbmsSolution}
            </p>
            <div className="p-3 rounded-xl bg-white border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2 shadow-sm">
              <Zap className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span className="text-[11px] text-slate-600">Tự động hóa hoàn toàn ở tầng hệ thống, loại bỏ rủi ro sai sót con người.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
