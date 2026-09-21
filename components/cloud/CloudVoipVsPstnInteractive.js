"use client";
import React, { useState } from "react";
import { Phone, PhoneCall, Globe, Server, Laptop, Smartphone, DollarSign, Zap, Check, X, ShieldCheck } from "lucide-react";

export default function CloudVoipVsPstnInteractive() {
  const [mode, setMode] = useState("voip"); // 'voip' | 'pstn'

  return (
    <div className="my-8 p-5 sm:p-8 rounded-3xl bg-white border border-stone-200 shadow-md font-sans">
      {/* Header with Mode Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-black uppercase tracking-widest text-sky-600">
              Interactive Signal Path • Mục III
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-black text-stone-900 mt-1">
            So Sánh Kiến Trúc: Cloud VoIP / PBX vs Điện Thoại Truyền Thống (PSTN)
          </h3>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Gạt nút chuyển đổi bên phải để quan sát sự khác biệt về đường truyền tín hiệu và chi phí vận hành.
          </p>
        </div>

        {/* Toggle Pills */}
        <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-stone-100 border border-stone-200/80 self-start sm:self-auto shrink-0">
          <button
            type="button"
            onClick={() => setMode("voip")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              mode === "voip"
                ? "bg-sky-600 text-white shadow-xs"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Cloud VoIP & PBX (Hiện đại)</span>
          </button>
          <button
            type="button"
            onClick={() => setMode("pstn")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              mode === "pstn"
                ? "bg-amber-600 text-white shadow-xs"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            <Phone className="w-3.5 h-3.5" />
            <span>PSTN Truyền thống (Cổ điển)</span>
          </button>
        </div>
      </div>

      {/* Interactive Signal Flow Diagram */}
      <div className={`p-6 rounded-2xl border transition-all duration-300 mb-6 ${
        mode === "voip"
          ? "bg-sky-50/40 border-sky-200"
          : "bg-amber-50/40 border-amber-200"
      }`}>
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-black uppercase tracking-wider text-stone-600">
            Sơ đồ luồng tín hiệu {mode === "voip" ? "VoIP qua Internet" : "Chuyển mạch cáp đồng (PSTN)"}:
          </span>
          <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
            mode === "voip" ? "bg-sky-100 text-sky-800" : "bg-amber-100 text-amber-800"
          }`}>
            {mode === "voip" ? "Gói tin số hóa IP (Packets)" : "Mạch điện thoại tương tự (Analog Circuits)"}
          </span>
        </div>

        {/* Signal Flow Steps */}
        {mode === "voip" ? (
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center">
            <div className="p-4 rounded-xl bg-white border border-sky-200 shadow-2xs space-y-1">
              <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center mx-auto font-bold text-xs">
                <Laptop className="w-4 h-4" />
              </div>
              <div className="text-xs font-bold text-stone-850">1. Thiết bị Softphone</div>
              <p className="text-[11px] text-stone-500">Laptop, Smartphone hoặc IP Phone số hóa âm thanh</p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-sky-200 shadow-2xs space-y-1">
              <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center mx-auto font-bold text-xs">
                <Zap className="w-4 h-4" />
              </div>
              <div className="text-xs font-bold text-stone-850">2. Giao thức SIP / RTP</div>
              <p className="text-[11px] text-stone-500">SIP thiết lập cuộc gọi, RTP truyền luồng gói tin voice</p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-sky-200 shadow-2xs space-y-1">
              <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center mx-auto font-bold text-xs">
                <Server className="w-4 h-4" />
              </div>
              <div className="text-xs font-bold text-stone-850">3. Cloud PBX Server</div>
              <p className="text-[11px] text-stone-500">Định tuyến máy lẻ, lời chào tự động IVR, ghi âm</p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-sky-200 shadow-2xs space-y-1">
              <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto font-bold text-xs">
                <Globe className="w-4 h-4" />
              </div>
              <div className="text-xs font-bold text-stone-850">4. Đầu nhận Toàn cầu</div>
              <p className="text-[11px] text-stone-500">Nhận cuộc gọi ở bất cứ đâu có kết nối mạng Internet</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center">
            <div className="p-4 rounded-xl bg-white border border-amber-200 shadow-2xs space-y-1">
              <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mx-auto font-bold text-xs">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-xs font-bold text-stone-850">1. Máy bàn Cố định</div>
              <p className="text-[11px] text-stone-500">Cố định tại bàn làm việc bằng dây line thoại</p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-amber-200 shadow-2xs space-y-1">
              <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mx-auto font-bold text-xs">
                <Server className="w-4 h-4" />
              </div>
              <div className="text-xs font-bold text-stone-850">2. Tủ Tổng đài PBX tại chỗ</div>
              <p className="text-[11px] text-stone-500">Phần cứng cồng kềnh, tốn diện tích, bảo trì tốn kém</p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-amber-200 shadow-2xs space-y-1">
              <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mx-auto font-bold text-xs">
                <Zap className="w-4 h-4" />
              </div>
              <div className="text-xs font-bold text-stone-850">3. Đường Cáp Đồng Viễn Thông</div>
              <p className="text-[11px] text-stone-500">Chiếm dụng mạch vật lý riêng biệt (Circuit Switching)</p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-rose-200 shadow-2xs space-y-1">
              <div className="w-8 h-8 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center mx-auto font-bold text-xs">
                <DollarSign className="w-4 h-4" />
              </div>
              <div className="text-xs font-bold text-stone-850">4. Cước Phí Đắt Đỏ</div>
              <p className="text-[11px] text-stone-500">Tính tiền theo từng phút gọi liên tỉnh & quốc tế</p>
            </div>
          </div>
        )}
      </div>

      {/* Comparison Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1.5">
          <div className="text-[11px] font-black uppercase tracking-wider text-stone-400">Chi Phí Đầu Tư (CapEx / OpEx)</div>
          <div className="text-sm font-bold text-stone-900">
            {mode === "voip" ? "Tiết kiệm 60 - 80% (OpEx linh hoạt)" : "Chi phí rất cao (Mua tủ PBX & dây cáp)"}
          </div>
          <p className="text-xs text-stone-600 leading-relaxed">
            {mode === "voip"
              ? "Chỉ cần trả phí thuê bao hàng tháng theo số lượng nhân viên thực tế, không cần mua máy móc tổng đài đắt tiền."
              : "Phải đầu tư vốn ban đầu (CapEx) rất lớn để mua tủ tổng đài phần cứng và thuê chuyên viên bảo trì."}
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1.5">
          <div className="text-[11px] font-black uppercase tracking-wider text-stone-400">Khả Năng Di Động (Mobility)</div>
          <div className="text-sm font-bold text-stone-900">
            {mode === "voip" ? "Làm việc từ xa mọi nơi (Hybrid Work)" : "Cố định tại bàn văn phòng"}
          </div>
          <p className="text-xs text-stone-600 leading-relaxed">
            {mode === "voip"
              ? "Nhân viên cầm smartphone hoặc laptop đi công tác nước ngoài vẫn nhận cuộc gọi số nội bộ công ty bình thường."
              : "Rời khỏi bàn làm việc là mất kết nối, không thể nhận cuộc gọi vào số máy lẻ của công ty."}
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1.5">
          <div className="text-[11px] font-black uppercase tracking-wider text-stone-400">Internet Fax (Fax qua Đám Mây)</div>
          <div className="text-sm font-bold text-stone-900">
            {mode === "voip" ? "Gửi/Nhận dạng file PDF qua Email" : "Máy Fax in giấy cồng kềnh"}
          </div>
          <p className="text-xs text-stone-600 leading-relaxed">
            {mode === "voip"
              ? "Không tốn giấy in, mực in, đường dây fax riêng; tài liệu fax tự động lưu trữ bảo mật trên đám mây."
              : "Dễ bị kẹt giấy, hết mực, lộ thông tin mật khi bản in nằm lại trên khay máy fax chung của văn phòng."}
          </p>
        </div>
      </div>
    </div>
  );
}
