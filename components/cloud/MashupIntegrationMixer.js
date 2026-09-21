"use client";
import React, { useState } from "react";

export default function MashupIntegrationMixer() {
  const [method, setMethod] = useState("web"); // 'web' | 'server'
  const [enabledApis, setEnabledApis] = useState({
    maps: true,
    driver: true,
    payment: true
  });
  const [activeTab, setActiveTab] = useState("mixer"); // 'mixer' | 'comparison' | 'tools'

  const toggleApi = (key) => {
    setEnabledApis((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const isGoRideComplete = enabledApis.maps && enabledApis.driver && enabledApis.payment;

  return (
    <div className="my-8 rounded-2xl border border-amber-500/20 bg-gradient-to-br from-[#1c1a17] via-[#24211d] to-[#1a1815] p-5 md:p-7 text-neutral-200 shadow-2xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-800 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-400">
            <span>🔀 Mục V • Mashup Integration Hub</span>
          </div>
          <h3 className="mt-2 text-xl font-bold tracking-tight text-white md:text-2xl">
            Mô Phỏng Trộn API & Tích Hợp Đa Dịch Vụ (Mashup Mixer)
          </h3>
          <p className="mt-1 text-sm text-neutral-400">
            Khám phá quy trình hợp nhất nhiều SaaS API độc lập để tạo ứng dụng mới (Điển hình: Ứng dụng gọi xe GoRide)
          </p>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex rounded-xl bg-neutral-900/80 p-1 border border-neutral-800">
          <button
            onClick={() => setActiveTab("mixer")}
            className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
              activeTab === "mixer"
                ? "bg-amber-600 text-white shadow-md"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            🎛️ Bộ Trộn GoRide
          </button>
          <button
            onClick={() => setActiveTab("comparison")}
            className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
              activeTab === "comparison"
                ? "bg-amber-600 text-white shadow-md"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            ⚡ Web vs Server Based
          </button>
          <button
            onClick={() => setActiveTab("tools")}
            className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
              activeTab === "tools"
                ? "bg-amber-600 text-white shadow-md"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            🛠️ Công Cụ (EMML & OpenMashup)
          </button>
        </div>
      </div>

      {/* TAB 1: MASHUP MIXER */}
      {activeTab === "mixer" && (
        <div className="mt-6 space-y-6">
          {/* Slogan & Formula */}
          <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4 text-sm text-amber-200">
            <span className="font-bold text-amber-400">💡 Khẩu quyết cốt lõi:</span> Mashup = Quá trình{" "}
            <strong>tích hợp nhiều dịch vụ / dữ liệu từ nhiều nguồn khác nhau</strong> để tạo ra một ứng dụng hoàn toàn mới mà không cần tự phát triển từ đầu!
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left: 3 Source APIs controls */}
            <div className="lg:col-span-5 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                Nguồn Dịch Vụ Độc Lập (API Sources)
              </h4>

              {/* API 1: Google Maps */}
              <div
                onClick={() => toggleApi("maps")}
                className={`cursor-pointer rounded-xl border p-3.5 transition-all ${
                  enabledApis.maps
                    ? "border-emerald-500/50 bg-emerald-950/20 shadow-lg shadow-emerald-900/10"
                    : "border-neutral-800 bg-neutral-900/40 opacity-50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400 text-lg">
                      🗺️
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Google Maps API</div>
                      <div className="text-xs text-neutral-400">Bản đồ số & Tọa độ định vị GPS</div>
                    </div>
                  </div>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                      enabledApis.maps ? "bg-emerald-500/20 text-emerald-300" : "bg-neutral-800 text-neutral-500"
                    }`}
                  >
                    {enabledApis.maps ? "ĐANG BẬT" : "TẮT"}
                  </span>
                </div>
              </div>

              {/* API 2: Driver Locator */}
              <div
                onClick={() => toggleApi("driver")}
                className={`cursor-pointer rounded-xl border p-3.5 transition-all ${
                  enabledApis.driver
                    ? "border-cyan-500/50 bg-cyan-950/20 shadow-lg shadow-cyan-900/10"
                    : "border-neutral-800 bg-neutral-900/40 opacity-50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-400 text-lg">
                      🛵
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Ride-Hailing Fleet API</div>
                      <div className="text-xs text-neutral-400">Dữ liệu tài xế & Tính cước thời gian thực</div>
                    </div>
                  </div>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                      enabledApis.driver ? "bg-cyan-500/20 text-cyan-300" : "bg-neutral-800 text-neutral-500"
                    }`}
                  >
                    {enabledApis.driver ? "ĐANG BẬT" : "TẮT"}
                  </span>
                </div>
              </div>

              {/* API 3: Stripe / VNPay */}
              <div
                onClick={() => toggleApi("payment")}
                className={`cursor-pointer rounded-xl border p-3.5 transition-all ${
                  enabledApis.payment
                    ? "border-violet-500/50 bg-violet-950/20 shadow-lg shadow-violet-900/10"
                    : "border-neutral-800 bg-neutral-900/40 opacity-50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/20 text-violet-400 text-lg">
                      💳
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Stripe / VNPay Gateway</div>
                      <div className="text-xs text-neutral-400">Cổng thanh toán trực tuyến & Ví điện tử</div>
                    </div>
                  </div>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                      enabledApis.payment ? "bg-violet-500/20 text-violet-300" : "bg-neutral-800 text-neutral-500"
                    }`}
                  >
                    {enabledApis.payment ? "ĐANG BẬT" : "TẮT"}
                  </span>
                </div>
              </div>

              <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-3 text-xs text-neutral-400">
                👉 Nhấp vào các thẻ trên để bật/tắt từng nguồn API và quan sát giao diện ứng dụng kết hợp ở bên phải!
              </div>
            </div>

            {/* Right: Live Preview of GoRide App */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-neutral-700 bg-black/60 p-5 backdrop-blur-sm">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500/80" />
                    <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                    <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-xs font-mono text-neutral-400">GoRide Mobile App (Mashup Live)</span>
                  </div>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${
                      isGoRideComplete
                        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                        : "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                    }`}
                  >
                    {isGoRideComplete ? "✨ MASHUP HOÀN THIỆN" : "⚠️ THIẾU TÍNH NĂNG"}
                  </span>
                </div>

                {/* Simulated Screen */}
                <div className="mt-4 rounded-xl border border-neutral-800 bg-[#121110] p-4">
                  {/* Map Section */}
                  <div
                    className={`relative flex h-36 w-full items-center justify-center rounded-lg border transition-all ${
                      enabledApis.maps
                        ? "border-emerald-500/40 bg-gradient-to-br from-emerald-950/40 via-[#132a22] to-[#0f1f1a]"
                        : "border-neutral-800 bg-neutral-900/60 text-neutral-600"
                    }`}
                  >
                    {enabledApis.maps ? (
                      <div className="text-center">
                        <div className="text-2xl animate-pulse">📍</div>
                        <div className="text-xs font-bold text-emerald-400 mt-1">Google Maps Engine Rendered</div>
                        <div className="text-[11px] text-neutral-400">Đang hiển thị mạng lưới giao thông Hà Nội / TP.HCM</div>
                      </div>
                    ) : (
                      <div className="text-center text-xs text-neutral-500">
                        ❌ Chưa có API Bản đồ: Không thể hiển thị vị trí khách hàng & đường đi!
                      </div>
                    )}

                    {/* Driver overlay if driver API on */}
                    {enabledApis.maps && enabledApis.driver && (
                      <div className="absolute top-3 right-3 rounded-md bg-cyan-950/80 border border-cyan-500/40 px-2 py-1 text-[11px] text-cyan-300 shadow">
                        🛵 3 Tài xế gần bạn (2 phút)
                      </div>
                    )}
                  </div>

                  {/* Driver & Fare Details */}
                  <div
                    className={`mt-3 rounded-lg border p-3 transition-all ${
                      enabledApis.driver
                        ? "border-cyan-500/40 bg-cyan-950/20"
                        : "border-neutral-800 bg-neutral-900/30 opacity-40 text-neutral-500"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-cyan-300">
                          {enabledApis.driver ? "Bác tài: Nguyễn Văn An (★ 4.9)" : "Chưa có dịch vụ điều phối xe"}
                        </div>
                        <div className="text-[11px] text-neutral-400">
                          {enabledApis.driver ? "Honda Air Blade • Biển số: 29A-888.99" : "Vui lòng bật Ride-Hailing API"}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-amber-400">{enabledApis.driver ? "35.000 đ" : "-- đ"}</div>
                        <div className="text-[10px] text-neutral-500">Quãng đường 4.2 km</div>
                      </div>
                    </div>
                  </div>

                  {/* Payment Button */}
                  <div className="mt-3">
                    <button
                      disabled={!isGoRideComplete}
                      className={`w-full rounded-lg py-2.5 text-xs font-bold transition-all ${
                        isGoRideComplete
                          ? "bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600 text-white shadow-lg shadow-amber-600/20 hover:brightness-110"
                          : "bg-neutral-800 text-neutral-500 cursor-not-allowed"
                      }`}
                    >
                      {enabledApis.payment
                        ? "💳 Xác Nhận Đặt Xe & Thanh Toán Tự Động"
                        : "⚠️ Thiếu Cổng Thanh Toán (Chỉ nhận tiền mặt)"}
                    </button>
                  </div>
                </div>

                <div className="mt-3 text-center text-xs text-neutral-400">
                  {isGoRideComplete ? (
                    <span className="text-emerald-400 font-semibold">
                      🎉 Ứng dụng GoRide kết hợp hoàn hảo cả 3 dịch vụ: Map Mashup + Ride Dispatching + Payment!
                    </span>
                  ) : (
                    <span className="text-amber-400">
                      Hãy bật đầy đủ cả 3 nguồn API để trải nghiệm sức mạnh toàn diện của mô hình Mashup.
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: WEB-BASED VS SERVER-BASED COMPARISON */}
      {activeTab === "comparison" && (
        <div className="mt-6 space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl border border-neutral-800 bg-neutral-900/60 p-4">
            <div>
              <div className="text-xs uppercase font-bold text-neutral-400">Lựa chọn Phương pháp Mashup:</div>
              <div className="text-base font-bold text-white mt-0.5">
                {method === "web" ? "🌐 Web-based Mashup (Client-Side)" : "🖥️ Server-based Mashup (Server-Side)"}
              </div>
            </div>

            <div className="flex rounded-lg bg-neutral-950 p-1 border border-neutral-800">
              <button
                onClick={() => setMethod("web")}
                className={`rounded-md px-3.5 py-1.5 text-xs font-semibold transition-all ${
                  method === "web"
                    ? "bg-amber-600 text-white shadow"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                Web-based (Trình duyệt)
              </button>
              <button
                onClick={() => setMethod("server")}
                className={`rounded-md px-3.5 py-1.5 text-xs font-semibold transition-all ${
                  method === "server"
                    ? "bg-amber-600 text-white shadow"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                Server-based (Máy chủ)
              </button>
            </div>
          </div>

          {/* Interactive Pipeline Diagram */}
          <div className="rounded-xl border border-neutral-800 bg-black/40 p-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
              Luồng Dữ Liệu Tích Hợp ({method === "web" ? "Client Xử Lý" : "Server Xử Lý"})
            </h4>

            {method === "web" ? (
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
                  <div className="w-full md:w-1/4 rounded-lg border border-neutral-700 bg-neutral-900/80 p-3 text-center">
                    <div className="text-xl">🌐 🌐 🌐</div>
                    <div className="font-bold text-white mt-1">Các Dịch Vụ SaaS</div>
                    <div className="text-[11px] text-neutral-400">Google Maps, Stripe, API...</div>
                  </div>

                  <div className="flex flex-col items-center">
                    <span className="text-amber-400 font-mono text-[10px]">Từng request độc lập</span>
                    <span className="text-lg">➡️ ➡️</span>
                  </div>

                  <div className="w-full md:w-2/5 rounded-lg border border-amber-500/50 bg-amber-950/20 p-4 text-center shadow-lg">
                    <div className="text-xl animate-bounce">💻</div>
                    <div className="font-bold text-amber-300 mt-1">Trình Duyệt Người Dùng (Client)</div>
                    <div className="text-[11px] text-neutral-300 mt-1">
                      Mã JavaScript trên trình duyệt tự gọi từng API và ghép nội dung hiển thị
                    </div>
                  </div>

                  <div className="flex flex-col items-center">
                    <span className="text-emerald-400 font-mono text-[10px]">Render UI</span>
                    <span className="text-lg">➡️</span>
                  </div>

                  <div className="w-full md:w-1/4 rounded-lg border border-emerald-500/40 bg-emerald-950/20 p-3 text-center">
                    <div className="text-xl">📱</div>
                    <div className="font-bold text-emerald-400 mt-1">Màn Hình Kết Quả</div>
                    <div className="text-[11px] text-neutral-400">Hiển thị ứng dụng GoRide</div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 pt-3 border-t border-neutral-800 text-center text-xs">
                  <div className="rounded-lg bg-neutral-900/80 p-2.5">
                    <div className="text-neutral-400">Độ Trễ Mạng (Latency)</div>
                    <div className="text-amber-400 font-bold mt-1">160 - 250 ms (Chậm hơn)</div>
                  </div>
                  <div className="rounded-lg bg-neutral-900/80 p-2.5">
                    <div className="text-neutral-400">Tải Máy Chủ Backend</div>
                    <div className="text-emerald-400 font-bold mt-1">0% (Client tự gánh)</div>
                  </div>
                  <div className="rounded-lg bg-neutral-900/80 p-2.5">
                    <div className="text-neutral-400">Chi Phí Đầu Tư Hạ Tầng</div>
                    <div className="text-emerald-400 font-bold mt-1">Rất Thấp (Dễ triển khai)</div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
                  <div className="w-full md:w-1/4 rounded-lg border border-neutral-700 bg-neutral-900/80 p-3 text-center">
                    <div className="text-xl">🌐 🌐 🌐</div>
                    <div className="font-bold text-white mt-1">Các Dịch Vụ SaaS</div>
                    <div className="text-[11px] text-neutral-400">Google Maps, Stripe, API...</div>
                  </div>

                  <div className="flex flex-col items-center">
                    <span className="text-cyan-400 font-mono text-[10px]">Đường truyền Server-to-Server</span>
                    <span className="text-lg">➡️ ➡️</span>
                  </div>

                  <div className="w-full md:w-2/5 rounded-lg border border-cyan-500/50 bg-cyan-950/20 p-4 text-center shadow-lg">
                    <div className="text-xl animate-pulse">🖥️ ⚙️</div>
                    <div className="font-bold text-cyan-300 mt-1">Chương Trình Trên Server</div>
                    <div className="text-[11px] text-neutral-300 mt-1">
                      Server backend tổng hợp dữ liệu, lọc bảo mật, cache và đóng gói kết quả
                    </div>
                  </div>

                  <div className="flex flex-col items-center">
                    <span className="text-emerald-400 font-mono text-[10px]">1 gói dữ liệu duy nhất</span>
                    <span className="text-lg">➡️</span>
                  </div>

                  <div className="w-full md:w-1/4 rounded-lg border border-emerald-500/40 bg-emerald-950/20 p-3 text-center">
                    <div className="text-xl">📱</div>
                    <div className="font-bold text-emerald-400 mt-1">Client Nhận Dữ Liệu</div>
                    <div className="text-[11px] text-neutral-400">Hiển thị cực nhanh & mượt</div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 pt-3 border-t border-neutral-800 text-center text-xs">
                  <div className="rounded-lg bg-neutral-900/80 p-2.5">
                    <div className="text-neutral-400">Độ Trễ Mạng (Latency)</div>
                    <div className="text-emerald-400 font-bold mt-1">30 - 60 ms (Cực nhanh)</div>
                  </div>
                  <div className="rounded-lg bg-neutral-900/80 p-2.5">
                    <div className="text-neutral-400">Tải Máy Chủ Backend</div>
                    <div className="text-amber-400 font-bold mt-1">Cao (Server phải xử lý)</div>
                  </div>
                  <div className="rounded-lg bg-neutral-900/80 p-2.5">
                    <div className="text-neutral-400">Quản Lý & Bảo Mật Dữ Liệu</div>
                    <div className="text-emerald-400 font-bold mt-1">Tối Ưu & Bảo Vệ API Key</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Table from curriculum */}
          <div className="overflow-x-auto rounded-xl border border-neutral-800">
            <table className="w-full text-left text-xs">
              <thead className="bg-neutral-900 text-neutral-300">
                <tr>
                  <th className="p-3">Phương pháp</th>
                  <th className="p-3">Cách hoạt động</th>
                  <th className="p-3">Ưu điểm</th>
                  <th className="p-3">Nhược điểm</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800 text-neutral-300">
                <tr className={method === "web" ? "bg-amber-500/10" : ""}>
                  <td className="p-3 font-bold text-amber-400">Web-based</td>
                  <td className="p-3">Trình duyệt (qua JavaScript) kết hợp nội dung để hiển thị kết quả.</td>
                  <td className="p-3 text-emerald-400 font-medium">Không cần cài thêm phần mềm, rất dễ triển khai.</td>
                  <td className="p-3 text-red-400">Hiệu năng phụ thuộc trình duyệt & tốc độ mạng của client.</td>
                </tr>
                <tr className={method === "server" ? "bg-cyan-500/10" : ""}>
                  <td className="p-3 font-bold text-cyan-400">Server Based</td>
                  <td className="p-3">Chương trình chạy trên server backend thực hiện kết hợp dữ liệu.</td>
                  <td className="p-3 text-emerald-400 font-medium">Quản lý dữ liệu tốt hơn, hiệu năng cao hơn (không phụ thuộc browser).</td>
                  <td className="p-3 text-red-400">Cần đầu tư hạ tầng server + phần mềm tích hợp chuyên dụng.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 3: TOOLS & TRADEOFFS */}
      {activeTab === "tools" && (
        <div className="mt-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* EMML */}
            <div className="rounded-xl border border-amber-500/30 bg-neutral-900/60 p-5">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20 text-xl text-amber-400">
                  📜
                </span>
                <div>
                  <h4 className="font-bold text-white text-base">EMML</h4>
                  <div className="text-xs text-amber-400 font-mono">Enterprise Mashup Markup Language</div>
                </div>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-neutral-300">
                Ngôn ngữ đánh dấu mở dựa trên XML chuyên dụng cho doanh nghiệp, cho phép lập trình viên định nghĩa các luồng tích hợp dữ liệu, lọc, chuyển đổi (Transform) và gộp nhiều nguồn feed Web Services (REST, SOAP, RSS) thành một dịch vụ đồng nhất.
              </p>
              <div className="mt-3 rounded-lg bg-black/50 p-2.5 text-[11px] font-mono text-neutral-400 border border-neutral-800">
                &lt;emml:mashup name=&quot;GoRidePipeline&quot;&gt;<br />
                &nbsp;&nbsp;&lt;variable name=&quot;mapsData&quot; from=&quot;GoogleMapsAPI&quot; /&gt;<br />
                &nbsp;&nbsp;&lt;join type=&quot;inner&quot; on=&quot;coords&quot; /&gt;<br />
                &lt;/emml:mashup&gt;
              </div>
            </div>

            {/* OpenMashup */}
            <div className="rounded-xl border border-cyan-500/30 bg-neutral-900/60 p-5">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20 text-xl text-cyan-400">
                  🌐
                </span>
                <div>
                  <h4 className="font-bold text-white text-base">OpenMashup</h4>
                  <div className="text-xs text-cyan-400 font-mono">Open Markup Language</div>
                </div>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-neutral-300">
                Chuẩn công nghệ mở thúc đẩy khả năng tương tác đa nền tảng, cho phép liên kết các khối giao diện (Widgets), nguồn cấp dữ liệu mở và dịch vụ đám mây từ nhiều nhà cung cấp độc lập mà không bị giới hạn bản quyền độc quyền.
              </p>
              <div className="mt-3 rounded-lg bg-black/50 p-2.5 text-[11px] font-mono text-neutral-400 border border-neutral-800">
                • Tiêu chuẩn mở cộng đồng (Community-driven)<br />
                • Hỗ trợ Web 2.0 widgets & dynamic feeds<br />
                • Tương thích cao với REST APIs & JSON
              </div>
            </div>
          </div>

          {/* Benefits vs Challenges */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/10 p-4">
              <h5 className="font-bold text-emerald-400 text-sm flex items-center gap-2">
                <span>✅</span> 3 Lợi Ích Cốt Lõi Của Mashup (Benefits)
              </h5>
              <ul className="mt-2.5 space-y-1.5 text-xs text-neutral-300">
                <li>• <strong>Flexible integration:</strong> Tích hợp linh hoạt các API từ nhiều nhà cung cấp khác nhau.</li>
                <li>• <strong>Enhanced features:</strong> Tạo ra tính năng phong phú, mạnh mẽ vượt trội so với từng dịch vụ đơn lẻ.</li>
                <li>• <strong>Cost savings:</strong> Tiết kiệm tối đa chi phí nghiên cứu và thời gian phát triển ứng dụng.</li>
              </ul>
            </div>

            <div className="rounded-xl border border-red-500/30 bg-red-950/10 p-4">
              <h5 className="font-bold text-red-400 text-sm flex items-center gap-2">
                <span>⚠️</span> 3 Thách Thức Lớn Của Mashup (Challenges)
              </h5>
              <ul className="mt-2.5 space-y-1.5 text-xs text-neutral-300">
                <li>• <strong>Security and privacy:</strong> Rủi ro lộ API keys và phụ thuộc an toàn thông tin của các bên thứ ba.</li>
                <li>• <strong>Compatibility:</strong> Xung đột phiên bản khi các nhà cung cấp API thay đổi cấu trúc dữ liệu.</li>
                <li>• <strong>Efficiency:</strong> Độ trễ mạng (Network Latency) bị cộng dồn khi phải gọi quá nhiều dịch vụ phân tán.</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
