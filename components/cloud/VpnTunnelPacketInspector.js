"use client";
import React, { useState } from "react";
import { Shield, ShieldAlert, Lock, Unlock, Play, RotateCcw, ArrowRight, CheckCircle2, Globe, Laptop, Server, Zap } from "lucide-react";

const PROTOCOLS = {
  pptp: {
    name: "PPTP (Point-to-Point Tunneling)",
    port: "TCP 1723",
    security: "Yếu (Dễ bị bẻ khóa MS-CHAP v2)",
    speed: "Cực nhanh",
    badgeColor: "bg-rose-100 text-rose-800 border-rose-300",
    firewall: "Dễ bị chặn bởi tường lửa",
    desc: "Giao thức lâu đời nhất, cấu hình đơn giản nhưng tính bảo mật không còn đáp ứng tiêu chuẩn an ninh hiện đại."
  },
  l2tp: {
    name: "L2TP / IPsec",
    port: "UDP 500, 4500, 1701",
    security: "Rất cao (Mã hóa 2 lớp 256-bit AES)",
    speed: "Trung bình (Do đóng gói 2 lần)",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
    firewall: "Có thể bị chặn bởi NAT/Firewall khắt khe",
    desc: "L2TP tạo đường hầm còn IPsec mã hóa dữ liệu; là tiêu chuẩn vàng về an ninh cho các kết nối VPN doanh nghiệp."
  },
  sstp: {
    name: "SSTP (Secure Socket Tunneling)",
    port: "TCP 443 (Cổng HTTPS)",
    security: "Rất cao (Chứng chỉ SSL/TLS 2048-bit)",
    speed: "Tốt",
    badgeColor: "bg-sky-100 text-sky-800 border-sky-300",
    firewall: "Vượt qua 100% mọi Firewall & Proxy",
    desc: "Được tích hợp sẵn sâu trong Windows; do sử dụng cổng 443 chuẩn web nên gần như không bao giờ bị tường lửa chặn."
  },
  ikev2: {
    name: "IKEv2 (Internet Key Exchange v2)",
    port: "UDP 500, 4500",
    security: "Cao nhất (Hỗ trợ EAP & MOBIKE)",
    speed: "Siêu nhanh & Ổn định",
    badgeColor: "bg-purple-100 text-purple-800 border-purple-300",
    firewall: "Rất tốt trên thiết bị di động",
    desc: "Lý tưởng nhất cho điện thoại/laptop khi di chuyển: tự động kết nối lại VPN tức thì khi chuyển từ Wi-Fi sang mạng 4G/5G."
  }
};

export default function VpnTunnelPacketInspector() {
  const [selectedProto, setSelectedProto] = useState("sstp");
  const [isEncrypted, setIsEncrypted] = useState(true);
  const [isSending, setIsSending] = useState(false);
  const [packetStatus, setPacketStatus] = useState("Sẵn sàng gửi gói tin qua đường hầm.");

  const handleSendPacket = () => {
    setIsSending(true);
    setPacketStatus("Gói tin đang đi vào card mạng ảo TAP/TUN...");

    setTimeout(() => {
      setPacketStatus(
        isEncrypted
          ? `Gói tin đã được mã hóa an toàn qua đường hầm ${PROTOCOLS[selectedProto].name}! Hacker trên Internet chỉ thấy chuỗi byte ngẫu nhiên.`
          : "CẢNH BÁO: Gói tin không bật VPN! Dữ liệu mật đang đi trần (plaintext) trên mạng công cộng, nguy cơ bị nghe lén (Sniffing)!"
      );
      setIsSending(false);
    }, 600);
  };

  const proto = PROTOCOLS[selectedProto];

  return (
    <div className="my-8 p-5 sm:p-8 rounded-3xl bg-white border border-stone-200 shadow-md font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-black uppercase tracking-widest text-sky-600">
              Interactive Packet Inspector • Mục VII
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-black text-stone-900 mt-1">
            Soi Gói Tin Đường Hầm VPN: Khảo Sát 4 Giao Thức Bảo Mật Windows
          </h3>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Chọn giao thức và quan sát cách dữ liệu được bọc lớp vỏ mã hóa an toàn khi đi xuyên qua Internet công cộng.
          </p>
        </div>

        {/* Encrypted / Plaintext Toggle */}
        <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-stone-100 border border-stone-200/80 self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setIsEncrypted(true)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              isEncrypted ? "bg-emerald-600 text-white shadow-xs" : "text-stone-600 hover:text-stone-900"
            }`}
          >
            <Lock className="w-3.5 h-3.5" />
            <span>Có Bật VPN (Mã Hóa)</span>
          </button>
          <button
            type="button"
            onClick={() => setIsEncrypted(false)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              !isEncrypted ? "bg-rose-600 text-white shadow-xs" : "text-stone-600 hover:text-stone-900"
            }`}
          >
            <Unlock className="w-3.5 h-3.5" />
            <span>Không Dùng VPN (Trần)</span>
          </button>
        </div>
      </div>

      {/* Protocol Selection Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
        {Object.entries(PROTOCOLS).map(([key, item]) => {
          const isSelected = selectedProto === key;
          return (
            <button
              key={key}
              type="button"
              onClick={() => setSelectedProto(key)}
              className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? "bg-stone-900 text-white border-stone-900 shadow-sm scale-[1.02]"
                  : "bg-stone-50/80 hover:bg-stone-100 border-stone-200 text-stone-700"
              }`}
            >
              <div>
                <span className="font-extrabold text-xs block">{item.name.split(" ")[0]}</span>
                <span className={`text-[10px] font-mono block ${isSelected ? "text-white/70" : "text-stone-500"}`}>
                  Port: {item.port}
                </span>
              </div>
              <span className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded mt-2 self-start ${
                isSelected ? "bg-white/20 text-white" : item.badgeColor
              }`}>
                {key === "pptp" ? "Yếu" : key === "sstp" ? "Cổng 443" : key === "ikev2" ? "Mobile" : "Chuẩn IPsec"}
              </span>
            </button>
          );
        })}
      </div>

      {/* Packet Inspection Tunnel Viewport */}
      <div className={`p-6 rounded-2xl border transition-all duration-300 mb-6 ${
        isEncrypted ? "bg-emerald-50/40 border-emerald-300" : "bg-rose-50/40 border-rose-300"
      }`}>
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-black uppercase tracking-wider text-stone-700 flex items-center gap-1.5">
            {isEncrypted ? <Shield className="w-4 h-4 text-emerald-600" /> : <ShieldAlert className="w-4 h-4 text-rose-600" />}
            Đường Truyền Tín Hiệu: {isEncrypted ? `Đường Hầm Bảo Mật (${proto.name})` : "Internet Công Cộng Không Mã Hóa"}
          </span>
          <span className="text-[10px] font-mono font-bold bg-white px-2.5 py-1 rounded-full border border-stone-200">
            Cổng Mạng: {proto.port}
          </span>
        </div>

        {/* Packet Structure Visual */}
        <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-2xs space-y-3 font-mono text-xs">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-stone-500 font-bold">Cấu Trúc Gói Tin:</span>
            {isEncrypted ? (
              <>
                <span className="px-2.5 py-1 bg-stone-800 text-white rounded font-bold">New IP Header (VPN Gateway)</span>
                <span className="px-2.5 py-1 bg-emerald-700 text-white rounded font-bold">Lớp Mã Hóa ({proto.name.split(" ")[0]})</span>
                <span className="px-2.5 py-1 bg-emerald-100 text-emerald-950 border border-emerald-300 rounded line-through opacity-70">
                  [Dữ liệu bí mật đã mã hóa 256-bit AES]
                </span>
              </>
            ) : (
              <>
                <span className="px-2.5 py-1 bg-rose-600 text-white rounded font-bold">Real Public IP Header</span>
                <span className="px-2.5 py-1 bg-rose-100 text-rose-950 border border-rose-300 rounded font-sans font-bold">
                  "SELECT * FROM KhachHang WHERE SoThe = '4532...'" (LỘ RÕ RÀNG!)
                </span>
              </>
            )}
          </div>

          <p className="text-stone-600 font-sans text-xs leading-relaxed pt-1">
            {proto.desc}
          </p>
        </div>
      </div>

      {/* Control Button & Live Log */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-stone-50 border border-stone-200 mb-4">
        <button
          type="button"
          disabled={isSending}
          onClick={handleSendPacket}
          className={`px-4 py-2 rounded-xl text-white font-bold text-xs flex items-center gap-2 shadow-xs transition-all cursor-pointer ${
            isEncrypted ? "bg-emerald-600 hover:bg-emerald-700" : "bg-rose-600 hover:bg-rose-700"
          }`}
        >
          <Play className="w-3.5 h-3.5 fill-current" />
          <span>Bấm Gửi Thử Gói Tin Qua Mạng</span>
        </button>

        <span className="text-xs font-semibold text-stone-600">
          Khả năng vượt tường lửa: <strong>{proto.firewall}</strong>
        </span>
      </div>

      <div className="p-3.5 rounded-xl bg-stone-100 border border-stone-200 text-xs text-stone-700 flex items-center gap-2">
        <Zap className="w-4 h-4 text-accent shrink-0" />
        <span className="font-medium">{packetStatus}</span>
      </div>
    </div>
  );
}
