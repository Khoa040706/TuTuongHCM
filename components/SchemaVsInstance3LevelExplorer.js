"use client";

import React, { useState } from "react";
import {
  Layers,
  Code2,
  Clock,
  Eye,
  Server,
  HardDrive,
  Sparkles,
  CheckCircle2,
  HelpCircle,
  FileCode,
  ArrowRight,
  Database
} from "lucide-react";

export default function SchemaVsInstance3LevelExplorer() {
  const [activeLevel, setActiveLevel] = useState("all"); // 'all' | 'views' | 'logical' | 'physical'
  const [currentTimeInstance, setCurrentTimeInstance] = useState("t1"); // 't1' | 't2' | 't3'

  const instanceSnapshots = {
    t1: {
      time: "Thời điểm T₁ (08:00 AM)",
      count: "3 nhân viên",
      data: [
        { ma: "NV01", hodem: "Nguyễn Văn", ten: "An", tuoi: 35, luong: 1200, chinhanh: "CN_HN" },
        { ma: "NV02", hodem: "Trần Thị", ten: "Bình", tuoi: 28, luong: 950, chinhanh: "CN_HCM" },
        { ma: "NV03", hodem: "Lê Hoàng", ten: "Cường", tuoi: 42, luong: 1800, chinhanh: "CN_DN" }
      ]
    },
    t2: {
      time: "Thời điểm T₂ (11:30 AM — Sau khi tuyển thêm)",
      count: "4 nhân viên",
      data: [
        { ma: "NV01", hodem: "Nguyễn Văn", ten: "An", tuoi: 35, luong: 1200, chinhanh: "CN_HN" },
        { ma: "NV02", hodem: "Trần Thị", ten: "Bình", tuoi: 28, luong: 950, chinhanh: "CN_HCM" },
        { ma: "NV03", hodem: "Lê Hoàng", ten: "Cường", tuoi: 42, luong: 1800, chinhanh: "CN_DN" },
        { ma: "NV04", hodem: "Phạm Minh", ten: "Đức", tuoi: 24, luong: 800, chinhanh: "CN_HN" }
      ]
    },
    t3: {
      time: "Thời điểm T₃ (05:00 PM — Sau khi tăng lương)",
      count: "4 nhân viên (Dữ liệu lương cập nhật)",
      data: [
        { ma: "NV01", hodem: "Nguyễn Văn", ten: "An", tuoi: 35, luong: 1400, chinhanh: "CN_HN" },
        { ma: "NV02", hodem: "Trần Thị", ten: "Bình", tuoi: 28, luong: 1100, chinhanh: "CN_HCM" },
        { ma: "NV03", hodem: "Lê Hoàng", ten: "Cường", tuoi: 42, luong: 2000, chinhanh: "CN_DN" },
        { ma: "NV04", hodem: "Phạm Minh", ten: "Đức", tuoi: 24, luong: 900, chinhanh: "CN_HN" }
      ]
    }
  };

  const currentInstance = instanceSnapshots[currentTimeInstance];

  return (
    <div className="my-8 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden text-slate-800 w-full min-w-0">
      {/* Header */}
      <div className="px-5 py-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 border border-orange-200 flex items-center justify-center font-bold flex-shrink-0">
            <Layers className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600 block truncate">
              Schema vs Instance Studio • Mục 1.7
            </span>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 truncate">
              Lược Đồ (Schema) vs Thể Hiện (Instance) Qua 3 Mức CSDL
            </h3>
          </div>
        </div>

        {/* Level Controls */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-100 border border-slate-200 text-xs">
          <button
            onClick={() => setActiveLevel("all")}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
              activeLevel === "all" ? "bg-orange-600 text-white shadow-sm" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Toàn Cảnh 3 Mức
          </button>
          <button
            onClick={() => setActiveLevel("views")}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
              activeLevel === "views" ? "bg-blue-600 text-white shadow-sm" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Mức Khung Nhìn (Views)
          </button>
          <button
            onClick={() => setActiveLevel("logical")}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
              activeLevel === "logical" ? "bg-purple-600 text-white shadow-sm" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Mức Logic
          </button>
          <button
            onClick={() => setActiveLevel("physical")}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
              activeLevel === "physical" ? "bg-amber-600 text-white shadow-sm" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Mức Vật Lý (C Struct)
          </button>
        </div>
      </div>

      {/* Schema vs Instance Concept Comparison Banner */}
      <div className="p-4 bg-slate-50/80 border-b border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
        <div className="p-3.5 rounded-xl bg-orange-50/70 border border-orange-200 space-y-1 shadow-sm min-w-0">
          <div className="font-bold text-orange-800 flex items-center gap-1.5">
            <Database className="w-4 h-4 text-orange-600 flex-shrink-0" />
            <span>1. Lược Đồ CSDL (Database Schema)</span>
          </div>
          <p className="text-slate-700 leading-relaxed text-[11px] break-words">
            Toàn bộ mô tả cấu trúc, kiểu dữ liệu, các bảng và ràng buộc. Là khung mẫu <strong>bất biến</strong> (ít khi thay đổi trong quá trình vận hành).
          </p>
        </div>

        <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200 space-y-1 shadow-sm min-w-0">
          <div className="font-bold text-blue-800 flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-blue-600 flex-shrink-0" />
            <span>2. Thể Hiện Của CSDL (Database Instance)</span>
          </div>
          <p className="text-slate-700 leading-relaxed text-[11px] break-words">
            Toàn bộ dữ liệu thực tế được lưu trữ trong CSDL tại <strong>một thời điểm nhất định</strong>. <strong>Nhiều thể hiện</strong> biến thiên theo thời gian trên cùng 1 lược đồ.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-5 sm:p-6 space-y-6 min-w-0">
        {/* Dynamic Timeline Instance Switcher */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 shadow-sm min-w-0">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="text-xs font-bold text-slate-900 flex items-center gap-2 min-w-0">
              <Clock className="w-4 h-4 text-orange-600 flex-shrink-0" />
              <span className="truncate">Mô phỏng Thể hiện (Instances) của Lược đồ NHANVIEN:</span>
            </div>
            <div className="flex flex-wrap gap-1.5 text-xs font-mono">
              <button
                onClick={() => setCurrentTimeInstance("t1")}
                className={`px-2.5 py-1 rounded-lg border transition-all ${currentTimeInstance === "t1" ? "bg-amber-100 border-amber-400 text-amber-900 font-bold" : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"}`}
              >
                Snapshot T₁ (Sáng)
              </button>
              <button
                onClick={() => setCurrentTimeInstance("t2")}
                className={`px-2.5 py-1 rounded-lg border transition-all ${currentTimeInstance === "t2" ? "bg-amber-100 border-amber-400 text-amber-900 font-bold" : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"}`}
              >
                Snapshot T₂ (Trưa)
              </button>
              <button
                onClick={() => setCurrentTimeInstance("t3")}
                className={`px-2.5 py-1 rounded-lg border transition-all ${currentTimeInstance === "t3" ? "bg-amber-100 border-amber-400 text-amber-900 font-bold" : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"}`}
              >
                Snapshot T₃ (Chiều)
              </button>
            </div>
          </div>

          <div className="text-xs text-orange-950 font-mono">
            ► Đang hiển thị: <strong>{currentInstance.time}</strong> — Lực lượng: <strong>{currentInstance.count}</strong>
          </div>
        </div>

        {/* 3 Level Architecture Representation */}
        {(activeLevel === "all" || activeLevel === "views") && (
          <div className="space-y-3 min-w-0">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-700 flex items-center gap-1.5">
              <Eye className="w-4 h-4 flex-shrink-0" />
              <span>Mức Cao Nhất: Các Khung Nhìn (External Views / Lược đồ ngoài)</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-200 space-y-1.5 shadow-sm min-w-0">
                <div className="font-bold text-blue-900">Khung nhìn 1 (Phòng Nhân Sự / Kế Toán):</div>
                <div className="font-mono text-[11px] text-blue-800 font-semibold overflow-x-auto whitespace-nowrap sm:whitespace-normal break-words">
                  NHANVIEN_VIEW1 (MaNV, Hodem, Ten, Tuoi, Luong)
                </div>
                <p className="text-slate-600 text-[11px] break-words">Chỉ hiển thị họ tên, tuổi và lương để phục vụ tính lương thưởng.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-200 space-y-1.5 shadow-sm min-w-0">
                <div className="font-bold text-blue-900">Khung nhìn 2 (Phòng Điều Hành Chi Nhánh):</div>
                <div className="font-mono text-[11px] text-blue-800 font-semibold overflow-x-auto whitespace-nowrap sm:whitespace-normal break-words">
                  NHANVIEN_VIEW2 (MaNV, Ten, Ma_chi_nhanh)
                </div>
                <p className="text-slate-600 text-[11px] break-words">Chỉ hiển thị mã, tên và mã chi nhánh để điều phối nhân sự (ẩn lương).</p>
              </div>
            </div>
          </div>
        )}

        {(activeLevel === "all" || activeLevel === "logical") && (
          <div className="space-y-3 min-w-0">
            <div className="text-xs font-bold uppercase tracking-wider text-purple-700 flex items-center gap-1.5">
              <Server className="w-4 h-4 flex-shrink-0" />
              <span>Mức Trung Gian: Lược Đồ Logic (Conceptual / Logical Schema)</span>
            </div>
            <div className="p-4 rounded-xl bg-purple-50/60 border border-purple-200 text-xs space-y-2 shadow-sm min-w-0">
              <div className="font-mono font-bold text-purple-950 text-xs overflow-x-auto whitespace-nowrap sm:whitespace-normal break-words">
                NHANVIEN (<u>MaNV</u>, Hodem, Ten, Ngay_sinh, Tuoi, Luong, Ma_chi_nhanh)
              </div>
              <p className="text-slate-700 text-xs leading-relaxed break-words">
                Mô tả toàn thể cấu trúc bảng dữ liệu của tổ chức với đầy đủ các thuộc tính nghiệp vụ và khóa chính định danh.
              </p>
            </div>
          </div>
        )}

        {(activeLevel === "all" || activeLevel === "physical") && (
          <div className="space-y-3 min-w-0">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-700 flex items-center gap-1.5">
              <HardDrive className="w-4 h-4 flex-shrink-0" />
              <span>Mức Thấp Nhất: Lược Đồ Vật Lý (Physical Storage in C)</span>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 border border-slate-800 font-mono text-xs text-slate-300 space-y-2 shadow-md min-w-0 overflow-hidden">
              <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">C Structure Implementation (Cài đặt cấu trúc bộ nhớ):</div>
              <pre className="text-amber-300 text-xs leading-relaxed overflow-x-auto whitespace-pre p-1">
{`struct NHANVIEN {
    int MaNV;                  // 4 bytes số nguyên định danh
    int Ma_chi_nhanh;          // 4 bytes mã chi nhánh
    char Hodem[15];            // 15 bytes chuỗi ký tự họ đệm
    char Ten[15];              // 15 bytes chuỗi ký tự tên
    struct date Ngay_sinh;     // Cấu trúc ngày tháng năm
    float Luong;               // 4 bytes số thực biểu diễn lương
    struct NHANVIEN *next;     // Con trỏ 8 bytes đến bản ghi tiếp theo
};`}
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
