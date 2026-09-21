"use client";
import React, { useState } from "react";

export default function SaasSecurityShieldSandbox() {
  const [layers, setLayers] = useState({
    encrypt: true,
    mfa: true,
    access: true,
    backup: true
  });
  const [attackStatus, setAttackStatus] = useState("idle"); // 'idle' | 'testing' | 'result'
  const [activeLayerInfo, setActiveLayerInfo] = useState("encrypt");

  const toggleLayer = (key) => {
    setLayers((prev) => ({ ...prev, [key]: !prev[key] }));
    setAttackStatus("idle");
  };

  const runAttackSimulation = () => {
    setAttackStatus("testing");
    setTimeout(() => {
      setAttackStatus("result");
    }, 900);
  };

  const activeCount = Object.values(layers).filter(Boolean).length;
  const isFullyProtected = activeCount === 4;

  return (
    <div className="my-8 rounded-2xl border border-rose-500/20 bg-gradient-to-br from-[#1a1518] via-[#22181c] to-[#171316] p-5 md:p-7 text-neutral-200 shadow-2xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-800 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/10 px-3 py-1 text-xs font-semibold text-rose-400">
            <span>🛡️ Mục VII.2 • Security in SaaS</span>
          </div>
          <h3 className="mt-2 text-xl font-bold tracking-tight text-white md:text-2xl">
            Hộp Cát 4 Tầng Phòng Thủ An Ninh SaaS (Cyber Shield Sandbox)
          </h3>
          <p className="mt-1 text-sm text-neutral-400">
            Trực quan hóa 4 biện pháp bảo mật cốt lõi: Mã hóa, Xác thực đa yếu tố (MFA), Phân quyền truy cập &amp; Sao lưu phục hồi
          </p>
        </div>

        {/* Security Rating Badge */}
        <div className="flex items-center gap-2 rounded-xl bg-neutral-900/90 px-3.5 py-2 border border-neutral-800">
          <span className="text-xs text-neutral-400 font-medium">Cấp độ an ninh:</span>
          <span
            className={`text-xs font-black px-2 py-0.5 rounded ${
              activeCount === 4
                ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                : activeCount >= 2
                ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                : "bg-red-500/20 text-red-400 border border-red-500/30"
            }`}
          >
            {activeCount === 4 ? "TỐI ĐA (4/4 Lớp)" : activeCount >= 2 ? "TRUNG BÌNH (Tiềm ẩn rủi ro)" : "NGUY HIỂM CỰC CAO"}
          </span>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: 4 Toggles */}
        <div className="lg:col-span-5 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
            4 Biện Pháp Bảo Mật Bắt Buộc (Security Measures)
          </h4>

          {/* Layer 1: Encrypt */}
          <div
            onClick={() => {
              toggleLayer("encrypt");
              setActiveLayerInfo("encrypt");
            }}
            className={`cursor-pointer rounded-xl border p-3.5 transition-all ${
              layers.encrypt
                ? "border-emerald-500/50 bg-emerald-950/20 shadow-md"
                : "border-neutral-800 bg-neutral-900/40 opacity-50"
            } ${activeLayerInfo === "encrypt" ? "ring-1 ring-emerald-400" : ""}`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-xl">🔒</span>
                <div>
                  <div className="text-sm font-bold text-white">1. Data Encryption (Mã hóa dữ liệu)</div>
                  <div className="text-xs text-neutral-400">Mã hóa khi truyền (TLS) &amp; khi lưu trữ (AES-256)</div>
                </div>
              </div>
              <span
                className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                  layers.encrypt ? "bg-emerald-500/20 text-emerald-300" : "bg-neutral-800 text-neutral-500"
                }`}
              >
                {layers.encrypt ? "BẬT" : "TẮT"}
              </span>
            </div>
          </div>

          {/* Layer 2: MFA */}
          <div
            onClick={() => {
              toggleLayer("mfa");
              setActiveLayerInfo("mfa");
            }}
            className={`cursor-pointer rounded-xl border p-3.5 transition-all ${
              layers.mfa
                ? "border-cyan-500/50 bg-cyan-950/20 shadow-md"
                : "border-neutral-800 bg-neutral-900/40 opacity-50"
            } ${activeLayerInfo === "mfa" ? "ring-1 ring-cyan-400" : ""}`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-xl">🔑</span>
                <div>
                  <div className="text-sm font-bold text-white">2. Multi-Factor Auth (MFA)</div>
                  <div className="text-xs text-neutral-400">Xác thực đa yếu tố (Password + OTP/Vân tay)</div>
                </div>
              </div>
              <span
                className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                  layers.mfa ? "bg-cyan-500/20 text-cyan-300" : "bg-neutral-800 text-neutral-500"
                }`}
              >
                {layers.mfa ? "BẬT" : "TẮT"}
              </span>
            </div>
          </div>

          {/* Layer 3: Access Control */}
          <div
            onClick={() => {
              toggleLayer("access");
              setActiveLayerInfo("access");
            }}
            className={`cursor-pointer rounded-xl border p-3.5 transition-all ${
              layers.access
                ? "border-amber-500/50 bg-amber-950/20 shadow-md"
                : "border-neutral-800 bg-neutral-900/40 opacity-50"
            } ${activeLayerInfo === "access" ? "ring-1 ring-amber-400" : ""}`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-xl">🛂</span>
                <div>
                  <div className="text-sm font-bold text-white">3. Access Management (Phân quyền)</div>
                  <div className="text-xs text-neutral-400">Nguyên tắc quyền tối thiểu (RBAC Least Privilege)</div>
                </div>
              </div>
              <span
                className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                  layers.access ? "bg-amber-500/20 text-amber-300" : "bg-neutral-800 text-neutral-500"
                }`}
              >
                {layers.access ? "BẬT" : "TẮT"}
              </span>
            </div>
          </div>

          {/* Layer 4: Backup & Restore */}
          <div
            onClick={() => {
              toggleLayer("backup");
              setActiveLayerInfo("backup");
            }}
            className={`cursor-pointer rounded-xl border p-3.5 transition-all ${
              layers.backup
                ? "border-violet-500/50 bg-violet-950/20 shadow-md"
                : "border-neutral-800 bg-neutral-900/40 opacity-50"
            } ${activeLayerInfo === "backup" ? "ring-1 ring-violet-400" : ""}`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-xl">💾</span>
                <div>
                  <div className="text-sm font-bold text-white">4. Backup &amp; Restore Data</div>
                  <div className="text-xs text-neutral-400">Sao lưu định kỳ &amp; Phục hồi thảm họa tự động</div>
                </div>
              </div>
              <span
                className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                  layers.backup ? "bg-violet-500/20 text-violet-300" : "bg-neutral-800 text-neutral-500"
                }`}
              >
                {layers.backup ? "BẬT" : "TẮT"}
              </span>
            </div>
          </div>

          {/* Attack Trigger Button */}
          <button
            onClick={runAttackSimulation}
            disabled={attackStatus === "testing"}
            className="w-full rounded-xl bg-gradient-to-r from-rose-600 via-red-600 to-rose-700 py-3 text-xs font-black uppercase tracking-wider text-white shadow-lg shadow-rose-900/40 hover:brightness-110 active:scale-98 transition-all disabled:opacity-50"
          >
            {attackStatus === "testing" ? "⚡ ĐANG PHÂN TÍCH TẤN CÔNG..." : "💥 Thử Nghiệm Tấn Công Tin Tặc (Test Attack)"}
          </button>
        </div>

        {/* Right: Interactive Attack Battlefield & Educational Inspector */}
        <div className="lg:col-span-7 space-y-4">
          {/* Cyber Shield Status Box */}
          <div className="rounded-2xl border border-neutral-700 bg-black/60 p-5">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
              <span className="text-xs font-mono text-neutral-400">Cơ Sở Dữ Liệu Khách Hàng SaaS</span>
              <span className="text-xs font-bold text-rose-400 flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
                Live Shield Radar
              </span>
            </div>

            {/* Shield Visualizer */}
            <div className="mt-4 flex flex-col items-center justify-center p-4">
              <div className="relative flex h-40 w-40 items-center justify-center">
                {/* Outer Ring: Backup */}
                <div
                  className={`absolute inset-0 rounded-full border-2 transition-all duration-500 ${
                    layers.backup ? "border-violet-500/80 bg-violet-950/20 scale-100" : "border-neutral-800 opacity-20 scale-95"
                  }`}
                />
                {/* Ring 2: Access */}
                <div
                  className={`absolute inset-3 rounded-full border-2 transition-all duration-500 ${
                    layers.access ? "border-amber-500/80 bg-amber-950/20 scale-100" : "border-neutral-800 opacity-20 scale-95"
                  }`}
                />
                {/* Ring 3: MFA */}
                <div
                  className={`absolute inset-6 rounded-full border-2 transition-all duration-500 ${
                    layers.mfa ? "border-cyan-500/80 bg-cyan-950/20 scale-100" : "border-neutral-800 opacity-20 scale-95"
                  }`}
                />
                {/* Inner Core: Encryption */}
                <div
                  className={`absolute inset-9 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                    layers.encrypt ? "border-emerald-500 bg-emerald-950/40 text-2xl" : "border-neutral-800 bg-neutral-900 opacity-30 text-xl"
                  }`}
                >
                  {isFullyProtected ? "🛡️" : layers.encrypt ? "🔒" : "⚠️"}
                </div>
              </div>

              {/* Attack Simulation Result */}
              {attackStatus === "result" && (
                <div
                  className={`mt-4 w-full rounded-xl border p-3.5 text-xs transition-all ${
                    isFullyProtected
                      ? "border-emerald-500/50 bg-emerald-950/30 text-emerald-200"
                      : "border-red-500/50 bg-red-950/30 text-red-200"
                  }`}
                >
                  <div className="font-bold text-sm flex items-center gap-2">
                    {isFullyProtected ? "✅ PHÒNG THỦ THÀNH CÔNG RỰC RỠ!" : "🚨 BÁO ĐỘNG: DỮ LIỆU ĐÃ BỊ XÂM NHẬP!"}
                  </div>
                  <div className="mt-1 text-[11px] leading-relaxed">
                    {isFullyProtected ? (
                      <span>
                        Hacker cố gắng tấn công nhưng bị chặn đứng tại lớp <strong>MFA</strong>; đường truyền được bảo vệ bằng <strong>TLS Encryption</strong>; phân quyền <strong>RBAC</strong> ngăn chặn leo thang đặc quyền và hệ thống có bản <strong>Backup</strong> đa vùng sẵn sàng!
                      </span>
                    ) : (
                      <span>
                        Hệ thống bị khai thác do thiếu:{" "}
                        {!layers.encrypt && "❌ Mã hóa (Dữ liệu lộ văn bản gốc); "}
                        {!layers.mfa && "❌ MFA (Hacker bẻ khóa mật khẩu dễ dàng); "}
                        {!layers.access && "❌ Phân quyền (Truy cập trái phép toàn bộ hồ sơ); "}
                        {!layers.backup && "❌ Backup (Mất sạch dữ liệu sau khi bị xóa); "}
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Deep-dive into Selected Layer */}
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4 text-xs">
            <h5 className="font-bold text-white flex items-center gap-2">
              <span>📖</span> Chi Tiết Kỹ Thuật:{" "}
              {activeLayerInfo === "encrypt" && "1. Mã Hóa Dữ Liệu (Data Encryption)"}
              {activeLayerInfo === "mfa" && "2. Xác Thực Đa Yếu Tố (Multi-Factor Authentication - MFA)"}
              {activeLayerInfo === "access" && "3. Quản Lý & Phân Quyền Truy Cập (Access Control & RBAC)"}
              {activeLayerInfo === "backup" && "4. Sao Lưu & Phục Hồi Dữ Liệu (Backup and Restore Data)"}
            </h5>

            <p className="mt-2 text-neutral-300 leading-relaxed">
              {activeLayerInfo === "encrypt" &&
                "Áp dụng chuẩn mã hóa 2 lớp: TLS/HTTPS bảo vệ gói tin đang truyền tải trên mạng (In-Transit) chống nghe lén Sniffing, và AES-256 bảo vệ dữ liệu khi lưu trữ trên ổ đĩa máy chủ đám mây (At-Rest) để dù hacker đánh cắp được ổ cứng vật lý cũng không đọc được nội dung."}
              {activeLayerInfo === "mfa" &&
                "Ngăn chặn 99.9% nguy cơ bị chiếm đoạt tài khoản. Ngay cả khi tin tặc dò được mật khẩu người dùng, hệ thống vẫn đòi hỏi lớp xác thực thứ hai qua ứng dụng Authenticator (Google/Microsoft), khóa vật lý YubiKey hoặc sinh trắc học FaceID/Vân tay."}
              {activeLayerInfo === "access" &&
                "Thiết lập ma trận phân quyền dựa trên vai trò (Role-Based Access Control - RBAC) và nguyên tắc quyền tối thiểu (Least Privilege). Nhân viên kế toán chỉ xem được hóa đơn, nhân viên kỹ thuật chỉ xem log hệ thống, tuyệt đối không cấp quyền Administrator tràn lan."}
              {activeLayerInfo === "backup" &&
                "Tự động tạo bản sao lưu dữ liệu phân tán sang các trung tâm dữ liệu ở nhiều vùng địa lý độc lập (Multi-region Replication). Cho phép doanh nghiệp khôi phục toàn bộ hệ thống về trạng thái trước thảm họa trong vài phút (RTO & RPO tính bằng phút)."}
            </p>

            {/* 2 Security Challenges from slides */}
            <div className="mt-3 pt-3 border-t border-neutral-800 grid grid-cols-2 gap-3 text-[11px] text-neutral-400">
              <div>
                <strong className="text-amber-400">Thách thức 1:</strong> Cloud data management (Quản lý dữ liệu đám mây phân tán đa nền tảng).
              </div>
              <div>
                <strong className="text-amber-400">Thách thức 2:</strong> Access control (Kiểm soát quyền truy cập nhất quán với quy mô lớn).
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
