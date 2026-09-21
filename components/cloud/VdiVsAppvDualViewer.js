"use client";
import React, { useState } from "react";
import { Monitor, Box, Server, Laptop, ShieldCheck, Zap, Layers, Check, ArrowRight, RefreshCw } from "lucide-react";

export default function VdiVsAppvDualViewer() {
  const [selectedTech, setSelectedTech] = useState("vdi"); // 'vdi' | 'appv'

  return (
    <div className="my-8 p-5 sm:p-8 rounded-3xl bg-white border border-stone-200 shadow-md font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-black uppercase tracking-widest text-sky-600">
              Interactive Dual Viewer • Mục VI
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-black text-stone-900 mt-1">
            So Sánh Chiến Lược: Microsoft VDI (Ảo Hóa Desktop) vs Microsoft App-V (Ảo Hóa Ứng Dụng)
          </h3>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Chuyển đổi giữa 2 công nghệ để quan sát nơi xử lý tính toán và cơ chế chống xung đột phần mềm.
          </p>
        </div>

        {/* Toggle Pills */}
        <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-stone-100 border border-stone-200/80 self-start sm:self-auto shrink-0">
          <button
            type="button"
            onClick={() => setSelectedTech("vdi")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              selectedTech === "vdi" ? "bg-sky-600 text-white shadow-xs" : "text-stone-600 hover:text-stone-900"
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>Microsoft VDI (Desktop)</span>
          </button>
          <button
            type="button"
            onClick={() => setSelectedTech("appv")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              selectedTech === "appv" ? "bg-purple-600 text-white shadow-xs" : "text-stone-600 hover:text-stone-900"
            }`}
          >
            <Box className="w-3.5 h-3.5" />
            <span>Microsoft App-V (Ứng Dụng)</span>
          </button>
        </div>
      </div>

      {/* Visual Simulation Canvas */}
      <div className={`p-6 rounded-2xl border transition-all duration-300 mb-6 ${
        selectedTech === "vdi" ? "bg-sky-50/40 border-sky-200" : "bg-purple-50/40 border-purple-200"
      }`}>
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-black uppercase tracking-wider text-stone-600">
            Mô hình thực thi dữ liệu của {selectedTech === "vdi" ? "Microsoft VDI" : "Microsoft App-V"}:
          </span>
          <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
            selectedTech === "vdi" ? "bg-sky-100 text-sky-800" : "bg-purple-100 text-purple-800"
          }`}>
            {selectedTech === "vdi" ? "Xử lý tại Data Center" : "Xử lý tại CPU/RAM Máy Trạm"}
          </span>
        </div>

        {selectedTech === "vdi" ? (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="p-4 rounded-xl bg-white border border-sky-200 shadow-2xs space-y-1">
              <div className="w-9 h-9 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center mx-auto">
                <Laptop className="w-4 h-4" />
              </div>
              <h5 className="font-bold text-xs text-stone-900">1. Thiết Bị Client (Thin Client)</h5>
              <p className="text-[11px] text-stone-500">Chỉ gửi thao tác chuột/phím và nhận luồng hình ảnh video</p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-sky-200 shadow-2xs space-y-1">
              <div className="w-9 h-9 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center mx-auto">
                <Zap className="w-4 h-4 text-amber-500" />
              </div>
              <h5 className="font-bold text-xs text-stone-900">2. Giao Thức RDP / Blast</h5>
              <p className="text-[11px] text-stone-500">Truyền hình ảnh màn hình với độ trễ thấp qua mạng LAN/WAN</p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-sky-200 shadow-2xs space-y-1">
              <div className="w-9 h-9 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center mx-auto">
                <Server className="w-4 h-4 text-emerald-600" />
              </div>
              <h5 className="font-bold text-xs text-stone-900">3. Máy Chủ Datacenter (VM Host)</h5>
              <p className="text-[11px] text-stone-500">Toàn bộ HĐH Windows Desktop chạy trong máy ảo VM tại Data Center</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="p-4 rounded-xl bg-white border border-purple-200 shadow-2xs space-y-1">
              <div className="w-9 h-9 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center mx-auto">
                <Server className="w-4 h-4 text-purple-600" />
              </div>
              <h5 className="font-bold text-xs text-stone-900">1. App-V Publishing Server</h5>
              <p className="text-[11px] text-stone-500">Đóng gói ứng dụng thành file ảo hóa độc lập (.appv package)</p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-purple-200 shadow-2xs space-y-1">
              <div className="w-9 h-9 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center mx-auto">
                <RefreshCw className="w-4 h-4 text-purple-600" />
              </div>
              <h5 className="font-bold text-xs text-stone-900">2. Application Streaming</h5>
              <p className="text-[11px] text-stone-500">Tải gói phần mềm về máy tính người dùng chỉ trong vài giây</p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-purple-200 shadow-2xs space-y-1">
              <div className="w-9 h-9 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center mx-auto">
                <Box className="w-4 h-4 text-emerald-600" />
              </div>
              <h5 className="font-bold text-xs text-stone-900">3. Virtual Sandbox Cục Bộ</h5>
              <p className="text-[11px] text-stone-500">Chạy trên RAM/CPU máy trạm nhưng cách ly với Registry hệ thống</p>
            </div>
          </div>
        )}
      </div>

      {/* Comparison Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1.5">
          <div className="text-[11px] font-black uppercase tracking-wider text-stone-400">Nơi Xử Lý Tính Toán</div>
          <div className="text-sm font-bold text-stone-900">
            {selectedTech === "vdi" ? "100% tại Máy chủ Data Center" : "100% tại CPU/RAM Máy Trạm Cục Bộ"}
          </div>
          <p className="text-xs text-stone-600 leading-relaxed">
            {selectedTech === "vdi"
              ? "Máy trạm của người dùng chỉ đóng vai trò hiển thị màn hình, không cần CPU/RAM mạnh."
              : "Ứng dụng tận dụng trực tiếp sức mạnh card đồ họa và chip xử lý của máy tính người dùng."}
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1.5">
          <div className="text-[11px] font-black uppercase tracking-wider text-stone-400">Yêu Cầu Kết Nối Mạng</div>
          <div className="text-sm font-bold text-stone-900">
            {selectedTech === "vdi" ? "Bắt buộc có mạng liên tục" : "Chạy Offline bình thường"}
          </div>
          <p className="text-xs text-stone-600 leading-relaxed">
            {selectedTech === "vdi"
              ? "Nếu mất mạng Internet hoặc Wi-Fi bị đứt, người dùng lập tức mất kết nối tới máy ảo desktop."
              : "Sau khi ứng dụng được stream về máy trạm lần đầu, nhân viên có thể ngắt mạng và dùng offline thoải mái."}
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1.5">
          <div className="text-[11px] font-black uppercase tracking-wider text-stone-400">Mục Đích Sử Dụng Cốt Lõi</div>
          <div className="text-sm font-bold text-stone-900">
            {selectedTech === "vdi" ? "Bảo mật dữ liệu tuyệt đối" : "Chống xung đột phần mềm (DLL Hell)"}
          </div>
          <p className="text-xs text-stone-600 leading-relaxed">
            {selectedTech === "vdi"
              ? "Dữ liệu mật của ngân hàng không bao giờ được lưu trên laptop cá nhân của nhân viên."
              : "Cho phép chạy đồng thời 2 phiên bản phần mềm xung đột nhau (như Office 2016 và Office 2021) trên cùng 1 máy tính."}
          </p>
        </div>
      </div>
    </div>
  );
}
