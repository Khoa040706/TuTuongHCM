"use client";

import React, { useState } from "react";
import {
  Users,
  User,
  Code2,
  ShieldCheck,
  KeyRound,
  Terminal,
  Monitor,
  Database,
  Layers,
  Sparkles,
  Lock,
  Cpu,
  CheckCircle2
} from "lucide-react";

export default function DatabaseUserRolesStudio() {
  const [selectedRole, setSelectedRole] = useState("dba"); // 'end-user' | 'programmer' | 'dba'

  const roles = [
    {
      id: "end-user",
      title: "1. Người Dùng Không Chuyên",
      shortTitle: "Người Dùng Cuối",
      en: "End-Users / Naive Users",
      icon: User,
      badge: "Mức Trừu tượng Cao nhất",
      description:
        "Những người không có kiến thức chuyên sâu về tin học và CSDL, nhưng có nhu cầu khai thác dữ liệu phục vụ nghiệp vụ hằng ngày.",
      requirements:
        "Hệ CSDL cần cung cấp các công cụ giao diện trực quan (GUI, Biểu mẫu Form, Báo cáo Report) thân thiện, dễ bấm chọn.",
      tools: [
        "Giao diện Web/App nghiệp vụ",
        "Trang tra cứu thông tin",
        "Báo cáo thống kê PDF/Excel xuất sẵn"
      ],
      permissions:
        "Chỉ được phép xem (SELECT) hoặc nhập liệu hạn chế vào các trường được định nghĩa trước.",
      abstractionLevel: "Mức Ngoài (External Views)"
    },
    {
      id: "programmer",
      title: "2. Chuyên Viên Tin Học",
      shortTitle: "Lập Trình Viên",
      en: "Application Programmers",
      icon: Code2,
      badge: "Mức Phát triển Ứng dụng",
      description:
        "Các kỹ sư phần mềm, lập trình viên hiểu biết về lập trình và cách khai thác CSDL để xây dựng các ứng dụng phục vụ nhiều mục đích khác nhau.",
      requirements:
        "Cần công cụ DML (Data Manipulation Language), API kết nối (JDBC, ODBC, ORM) và công cụ kiểm thử truy vấn.",
      tools: [
        "IDE (VS Code, IntelliJ, Eclipse)",
        "Ngôn ngữ (Java, Python, C#, Node.js)",
        "DML / SQL Queries, ORM Frameworks"
      ],
      permissions:
        "Được phép viết các câu truy vấn phức tạp (SELECT, INSERT, UPDATE, DELETE) trong phạm vi ứng dụng phụ trách.",
      abstractionLevel: "Mức Quan niệm & Mức Ngoài (Conceptual & External)"
    },
    {
      id: "dba",
      title: "3. Quản Trị CSDL (DBA)",
      shortTitle: "Quản Trị Viên DBA",
      en: "Database Administrator (DBA)",
      icon: ShieldCheck,
      badge: "Quyền Lực & Trách Nhiệm Tối Cao",
      description:
        "Chuyên gia am hiểu sâu sắc về tin học, hệ quản trị CSDL và kiến trúc máy tính. Chịu trách nhiệm toàn diện về sự sống còn của CSDL.",
      requirements:
        "Chịu trách nhiệm: 1) Tổ chức CSDL (khai báo cấu trúc, thiết lập lược đồ); 2) Cấp phát quyền hạn khai thác; 3) Bảo mật & Sao lưu phục hồi.",
      tools: [
        "DBA Console (Oracle Enterprise Manager, SSMS, pgAdmin)",
        "DDL / DCL Scripts",
        "Backup & Recovery Utilities, Performance Profiler"
      ],
      permissions:
        "Toàn quyền tối cao (SUPERUSER / SYSADMIN) trên toàn bộ hệ thống CSDL.",
      abstractionLevel: "Bao quát toàn bộ 3 Mức (Vật lý, Quan niệm, Khung nhìn)"
    }
  ];

  const current = roles.find((r) => r.id === selectedRole) || roles[2];
  const IconComponent = current.icon;

  return (
    <div className="my-8 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden text-slate-800 max-w-full">
      {/* Header */}
      <div className="px-4 sm:px-6 py-4 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 min-w-0">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 border border-orange-200 flex items-center justify-center font-bold flex-shrink-0">
            <Users className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600 block truncate">
              Role-Based Studio • Mục 2.3
            </span>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 truncate">
              3 Đối Tượng Người Dùng Trong Hệ Sinh Thái CSDL
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-2 self-start sm:self-auto flex-shrink-0">
          <span className="text-xs font-mono text-orange-700 px-3 py-1 rounded-lg bg-orange-100/80 border border-orange-200 font-bold whitespace-nowrap">
            User Categories
          </span>
        </div>
      </div>

      {/* 3 Roles Switcher Tabs - Co giãn 100% không tràn viền */}
      <div className="p-3 sm:p-4 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 bg-slate-50/60 border-b border-slate-200 min-w-0">
        {roles.map((r) => {
          const ItemIcon = r.icon;
          const isActive = selectedRole === r.id;
          return (
            <button
              key={r.id}
              type="button"
              onClick={() => setSelectedRole(r.id)}
              className={`p-3 rounded-xl border text-left transition-all duration-200 flex items-center gap-3 min-w-0 overflow-hidden ${
                isActive
                  ? "bg-orange-50 border-orange-500 text-orange-950 shadow-sm ring-1 ring-orange-400/30"
                  : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <div
                className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  isActive ? "bg-orange-100 text-orange-600" : "bg-slate-100 text-slate-500"
                }`}
              >
                <ItemIcon className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs font-bold text-slate-900 truncate">{r.shortTitle}</div>
                <div className="text-[10px] text-slate-500 font-mono truncate mt-0.5">{r.en}</div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Role Details Deep Dive */}
      <div className="p-4 sm:p-6 space-y-5 min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3 min-w-0">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold flex-shrink-0">
              <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="min-w-0">
              <h4 className="text-base sm:text-lg font-extrabold text-slate-900 truncate">
                {current.title}
              </h4>
              <span className="text-xs text-orange-600 font-mono font-semibold block truncate">
                {current.en}
              </span>
            </div>
          </div>
          <span className="px-3 py-1 text-xs font-bold rounded-full bg-orange-100 text-orange-800 border border-orange-200 self-start sm:self-auto flex-shrink-0">
            {current.badge}
          </span>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
          {current.description}
        </p>

        {/* 3 Detail Metric Cards - 1-2-3 cột thích ứng */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 min-w-0">
          <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200 space-y-2 shadow-sm min-w-0">
            <div className="text-xs font-bold text-blue-900 flex items-center gap-1.5 truncate">
              <Layers className="w-4 h-4 text-blue-600 flex-shrink-0" />
              <span>Mức độ Trừu tượng:</span>
            </div>
            <div className="text-xs text-blue-800 font-semibold">{current.abstractionLevel}</div>
          </div>

          <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 space-y-2 shadow-sm min-w-0">
            <div className="text-xs font-bold text-amber-900 flex items-center gap-1.5 truncate">
              <Lock className="w-4 h-4 text-amber-600 flex-shrink-0" />
              <span>Quyền hạn & Giới hạn:</span>
            </div>
            <div className="text-xs text-amber-800 leading-relaxed">{current.permissions}</div>
          </div>

          <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200 space-y-2 shadow-sm min-w-0 sm:col-span-2 lg:col-span-1">
            <div className="text-xs font-bold text-emerald-900 flex items-center gap-1.5 truncate">
              <Cpu className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Công cụ & Môi trường:</span>
            </div>
            <ul className="text-xs text-emerald-800 space-y-1">
              {current.tools.map((t, idx) => (
                <li key={idx} className="flex items-center gap-1.5 truncate">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span className="font-mono text-[11px] font-semibold truncate">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Highlight Note */}
        <div className="p-3.5 rounded-xl bg-orange-50 border border-orange-200 text-xs text-orange-950 flex items-start gap-2.5 shadow-sm min-w-0">
          <Sparkles className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
          <span className="leading-relaxed">
            <strong>Trọng tâm giáo trình:</strong> {current.requirements}
          </span>
        </div>
      </div>
    </div>
  );
}
