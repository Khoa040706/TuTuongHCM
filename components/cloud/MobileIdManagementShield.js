"use client";
import React, { useState } from "react";

export default function MobileIdManagementShield() {
  const [activeTab, setActiveTab] = useState("features"); // 'features' | 'mdm_vs_mam' | 'workflow'
  const [deviceLost, setDeviceLost] = useState(false);
  const [wipeStatus, setWipeStatus] = useState("normal"); // 'normal' | 'wiping' | 'wiped'
  const [contextRisk, setContextRisk] = useState("low"); // 'low' | 'medium' | 'high'

  const features = [
    {
      id: "mfa",
      title: "1. Multi-Factor Authentication (MFA)",
      icon: "🛡️",
      badge: "Xác Thực Đa Yếu Tố Di Động",
      desc: "Tận dụng cảm biến vân tay, FaceID hoặc thông báo đẩy (Push Notification với số khớp lệnh) trên smartphone để xác nhận đăng nhập nhanh chóng và an toàn tuyệt đối."
    },
    {
      id: "mdm",
      title: "2. Mobile Device Management (MDM)",
      icon: "📱",
      badge: "Quản Lý Toàn Bộ Thiết Bị",
      desc: "Quản lý cấp độ phần cứng và hệ điều hành của thiết bị: bắt buộc cài mã PIN/mật khẩu màn hình, mã hóa toàn bộ ổ đĩa, kiểm tra xem máy có bị Jailbreak/Root hay không."
    },
    {
      id: "mam",
      title: "3. Mobile Application Management (MAM)",
      icon: "📦",
      badge: "Cô Lập Ứng Dụng Doanh Nghiệp",
      desc: "Chỉ quản lý và bảo vệ các ứng dụng công ty (Outlook, Teams, OneDrive) bằng cách tạo vùng chứa dữ liệu mã hóa riêng biệt (Containerization), không can thiệp vào ảnh/ứng dụng cá nhân."
    },
    {
      id: "contextual",
      title: "4. Contextual Access Control",
      icon: "🌐",
      badge: "Kiểm Soát Theo Ngữ Cảnh",
      desc: "Tự động phân tích ngữ cảnh truy cập: vị trí địa lý (IP), thời gian đăng nhập, tình trạng an toàn của thiết bị để tự động chặn truy cập hoặc yêu cầu thêm bước xác thực."
    }
  ];

  const workflowSteps = [
    { step: 1, title: "1. Đăng Ký & Xác Thực Thiết Bị", desc: "Người dùng cài đặt ứng dụng quản trị (ví dụ Microsoft Intune / MobileIron), xác minh danh tính nhân viên và đăng ký chứng chỉ thiết bị." },
    { step: 2, title: "2. Cấu Hình & Quản Lý Thiết Bị", desc: "Hệ thống tự động áp đặt chính sách bảo mật: bật mã hóa bộ nhớ, đặt mật khẩu mở khóa tối thiểu 6 số, tắt quyền root/jailbreak." },
    { step: 3, title: "3. Quản Lý Ứng Dụng Mobile", desc: "Phân phối các app làm việc qua kho ứng dụng doanh nghiệp (Enterprise App Store), ngăn chặn sao chép dữ liệu công ty sang app cá nhân." },
    { step: 4, title: "4. Theo Dõi & Giám Sát Liên Tục", desc: "Giám sát nhật ký truy cập theo thời gian thực, phát hiện mã độc và kích hoạt khóa từ xa ngay khi phát hiện thiết bị bị thất lạc." }
  ];

  const handleRemoteWipe = () => {
    setWipeStatus("wiping");
    setTimeout(() => {
      setWipeStatus("wiped");
    }, 800);
  };

  const handleResetDevice = () => {
    setDeviceLost(false);
    setWipeStatus("normal");
  };

  return (
    <div className="my-8 rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-[#0d111e] via-[#111728] to-[#090d16] p-5 md:p-7 text-neutral-200 shadow-2xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-800 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-400">
            <span>📱 Mục VII.1 • Quản Lý Danh Tính Trên Thiết Bị Di Động</span>
          </div>
          <h3 className="mt-2 text-xl font-bold tracking-tight text-white md:text-2xl">
            Lá Chắn Mobile ID: Phân Biệt MDM vs MAM &amp; Zero-Trust Contextual
          </h3>
          <p className="mt-1 text-sm text-neutral-400">
            Bảo vệ an toàn thông tin và tài nguyên tổ chức khi nhân viên làm việc từ xa trên Smartphone và Tablet cá nhân (BYOD).
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex rounded-xl bg-neutral-900/80 p-1 border border-neutral-800">
          <button
            onClick={() => setActiveTab("features")}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              activeTab === "features"
                ? "bg-indigo-600 text-white shadow"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            4 Tính Năng Chính
          </button>
          <button
            onClick={() => setActiveTab("mdm_vs_mam")}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              activeTab === "mdm_vs_mam"
                ? "bg-purple-600 text-white shadow"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            MDM vs MAM &amp; Remote Wipe
          </button>
          <button
            onClick={() => setActiveTab("workflow")}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              activeTab === "workflow"
                ? "bg-emerald-600 text-white shadow"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Quy Trình 4 Bước
          </button>
        </div>
      </div>

      {/* TAB 1: 4 TÍNH NĂNG CHÍNH */}
      {activeTab === "features" && (
        <div className="mt-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((f) => (
              <div
                key={f.id}
                className="rounded-xl border border-neutral-800 bg-neutral-900/70 p-5 space-y-2.5 hover:border-indigo-500/40 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl">{f.icon}</span>
                    <h4 className="font-bold text-sm text-white">{f.title}</h4>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-mono">
                    {f.badge}
                  </span>
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-4 text-center text-xs text-neutral-300">
            <span className="font-bold text-indigo-400">Định nghĩa cốt lõi: </span>
            Mobile ID Management là giải pháp quản lý danh tính &amp; quyền truy cập từ các thiết bị di động (smartphone, tablet) nhằm bảo vệ thông tin / tài nguyên tổ chức khỏi rò rỉ.
          </div>
        </div>
      )}

      {/* TAB 2: MDM VS MAM & REMOTE WIPE */}
      {activeTab === "mdm_vs_mam" && (
        <div className="mt-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* MDM Card */}
            <div className="rounded-xl border border-blue-500/30 bg-neutral-950 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-sm text-blue-400 flex items-center gap-2">
                  <span>📱</span> MDM (Mobile Device Management)
                </h4>
                <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-mono">
                  Quản Trị Thiết Bị
                </span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Tổ chức kiểm soát <strong>TOÀN BỘ THIẾT BỊ</strong> từ phần cứng đến hệ điều hành. Phù hợp cho thiết bị do công ty trực tiếp cấp phát (Company-Owned Devices).
              </p>
              <div className="text-xs text-neutral-400 space-y-1.5 bg-neutral-900/60 p-3 rounded-lg border border-neutral-800">
                <div>• Bắt buộc mã hóa toàn bộ máy và mật khẩu khóa màn hình.</div>
                <div>• Khóa cổng camera, chặn kết nối Bluetooth nếu cần.</div>
                <div>• <strong>Full Device Wipe:</strong> Xóa sạch toàn bộ máy về trạng thái xuất xưởng khi mất.</div>
              </div>
            </div>

            {/* MAM Card */}
            <div className="rounded-xl border border-purple-500/30 bg-neutral-950 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-sm text-purple-400 flex items-center gap-2">
                  <span>📦</span> MAM (Mobile Application Management)
                </h4>
                <span className="text-[10px] px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-mono">
                  Quản Trị Ứng Dụng
                </span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Chỉ kiểm soát và mã hóa <strong>CÁC ỨNG DỤNG CÔNG TY</strong> (Email, Teams, CRM). Bảo vệ quyền riêng tư tuyệt đối cho điện thoại cá nhân của nhân viên (BYOD).
              </p>
              <div className="text-xs text-neutral-400 space-y-1.5 bg-neutral-900/60 p-3 rounded-lg border border-neutral-800">
                <div>• Ngăn chặn copy dữ liệu công ty dán sang Facebook, Zalo, Notes cá nhân.</div>
                <div>• Đòi hỏi mã PIN riêng biệt khi mở ứng dụng công ty.</div>
                <div>• <strong>Selective Wipe:</strong> CHỈ xóa sạch app công ty, GIỮ NGUYÊN ảnh và dữ liệu cá nhân!</div>
              </div>
            </div>
          </div>

          {/* Remote Wipe Simulation */}
          <div className="rounded-xl border border-rose-500/30 bg-neutral-900/90 p-5 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-800 pb-3">
              <div>
                <h4 className="font-bold text-sm text-white flex items-center gap-2">
                  <span>🚨</span> Giả Lập Tình Huống: Nhân Viên Đánh Rơi Điện Thoại (Remote Wipe)
                </h4>
                <p className="text-xs text-neutral-400">
                  Thực hành kích hoạt tính năng Xóa Dữ Liệu Từ Xa để bảo vệ bí mật kinh doanh.
                </p>
              </div>

              <div className="flex gap-2">
                {wipeStatus === "normal" ? (
                  <button
                    onClick={handleRemoteWipe}
                    className="px-3 py-1.5 text-xs font-bold rounded-lg bg-rose-600 hover:bg-rose-500 text-white transition-all shadow-md"
                  >
                    💥 Kích Hoạt Selective Wipe Từ Xa
                  </button>
                ) : (
                  <button
                    onClick={handleResetDevice}
                    className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 transition-all"
                  >
                    🔄 Khôi Phục Trạng Thái Ban Đầu
                  </button>
                )}
              </div>
            </div>

            <div className="p-3 rounded-lg bg-neutral-950 text-xs font-mono">
              {wipeStatus === "normal" && (
                <span className="text-emerald-400">🟢 Thiết bị iPhone 15 Pro - Trạng thái: Bình thường (Online)</span>
              )}
              {wipeStatus === "wiping" && (
                <span className="text-amber-400 animate-pulse">🟡 Đang gửi tín hiệu mã hóa xóa sạch vùng dữ liệu doanh nghiệp...</span>
              )}
              {wipeStatus === "wiped" && (
                <span className="text-rose-400 font-bold">🔴 XÓA THÀNH CÔNG: Toàn bộ Email, Chat và Tài liệu công ty đã bị hủy sạch! Dữ liệu ảnh và tin nhắn cá nhân của người dùng được bảo toàn 100%.</span>
              )}
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: QUY TRÌNH 4 BƯỚC */}
      {activeTab === "workflow" && (
        <div className="mt-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            {workflowSteps.map((w) => (
              <div key={w.step} className="rounded-xl border border-neutral-800 bg-neutral-950 p-4 space-y-2">
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  {w.title}
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
