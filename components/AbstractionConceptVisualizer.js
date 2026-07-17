"use client";
import React, { useState, useEffect, useRef } from "react";
import { Send, CheckCircle, Info, ToggleLeft, ToggleRight, Radio, Server, MessageSquare, ShieldAlert } from "lucide-react";

export default function AbstractionConceptVisualizer() {
  const [message, setMessage] = useState("Chào cậu, học OOP rất thú vị!");
  const [isSending, setIsSending] = useState(false);
  const [sendStep, setSendStep] = useState(0); // 0: Idle, 1: Encoding, 2: PDU Packaging, 3: Handshake, 4: SMSC Routing, 5: Delivered
  const [showImplementation, setShowImplementation] = useState(false);
  const [phoneMessages, setPhoneMessages] = useState([
    { text: "Cậu ôn thi môn OOP đến đâu rồi?", sender: "friend" },
    { text: "Tớ đang xem phần Abstraction cực kỳ trực quan!", sender: "me" }
  ]);

  const progressInterval = useRef(null);

  const handleSendMessage = () => {
    if (!message.trim() || isSending) return;
    setIsSending(true);
    setSendStep(1);

    // If implementation details are hidden, complete quickly. Otherwise show step-by-step
    const stepDuration = showImplementation ? 1200 : 400;

    let currentStep = 1;
    progressInterval.current = setInterval(() => {
      currentStep += 1;
      setSendStep(currentStep);

      if (currentStep >= 5) {
        clearInterval(progressInterval.current);
        setIsSending(false);
        setPhoneMessages(prev => [...prev, { text: message, sender: "me" }]);
        setMessage("");
        setSendStep(5);
        setTimeout(() => setSendStep(0), 2000);
      }
    }, stepDuration);
  };

  useEffect(() => {
    return () => {
      if (progressInterval.current) clearInterval(progressInterval.current);
    };
  }, []);

  // Helper to convert text to simulated Unicode Hex values
  const getUnicodeHex = (str) => {
    return str.split("").slice(0, 8).map(char => {
      const hex = char.charCodeAt(0).toString(16).toUpperCase();
      return "0000".substring(0, 4 - hex.length) + hex;
    }).join(" ");
  };

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4 md:p-6 my-6 shadow-sm font-sans text-stone-800">
      {/* Title */}
      <div className="mb-5 border-b border-stone-200 pb-3 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h4 className="text-base font-extrabold text-stone-900 flex items-center gap-2">
            📱 Bộ Trực Quan Hóa Khái Niệm: Abstraction qua gửi tin nhắn SMS
          </h4>
          <p className="text-xs text-stone-500 mt-1">
            Minh họa cách Abstraction che giấu toàn bộ logic nghiệp vụ/kỹ thuật phức tạp đằng sau một thao tác bấm nút đơn giản.
          </p>
        </div>

        {/* Toggle switch for showing/hiding details */}
        <button
          onClick={() => {
            setShowImplementation(!showImplementation);
            setSendStep(0);
            setIsSending(false);
            if (progressInterval.current) clearInterval(progressInterval.current);
          }}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-bold transition-all cursor-pointer shadow-sm ${
            showImplementation
              ? "border-amber-500 bg-amber-500/5 text-amber-800"
              : "border-stone-250 bg-white hover:bg-stone-100 text-stone-600"
          }`}
        >
          {showImplementation ? (
            <>
              <ToggleRight className="w-5 h-5 text-amber-600" />
              <span>Cài đặt ẩn: Đang HIỆN (No Abstraction)</span>
            </>
          ) : (
            <>
              <ToggleLeft className="w-5 h-5 text-stone-400" />
              <span>Cài đặt ẩn: Đang ẨN (Abstraction)</span>
            </>
          )}
        </button>
      </div>

      {/* Main Workspace Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Column Left: Smartphone Simulator (Client Side) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center p-2">
          <div className="text-[10px] text-stone-550 font-bold uppercase tracking-widest mb-2.5">
            GIAO DIỆN NGƯỜI DÙNG (PUBLIC INTERFACE)
          </div>
          
          {/* Smartphone UI container */}
          <div className="w-72 h-[460px] bg-stone-900 rounded-[36px] p-3 border-4 border-stone-850 shadow-xl flex flex-col relative overflow-hidden">
            {/* Phone Speaker and Camera Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-stone-950 rounded-b-2xl z-20 flex items-center justify-center gap-1.5">
              <div className="w-12 h-1 bg-stone-800 rounded-full" />
              <div className="w-2.5 h-2.5 bg-stone-900 rounded-full border border-stone-800" />
            </div>

            {/* Simulated Screen Body */}
            <div className="flex-1 bg-stone-950 rounded-[28px] p-3 pt-8 pb-4 flex flex-col justify-between relative overflow-hidden select-none">
              
              {/* Header inside phone screen */}
              <div className="border-b border-stone-900 pb-2 mb-2 flex items-center justify-between text-[10px] text-stone-400 font-bold">
                <span>💬 SMS đến: 0987-OOP-123</span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                  <span>Online</span>
                </span>
              </div>

              {/* Chat Messages Log */}
              <div className="flex-1 overflow-y-auto space-y-3 pr-1 py-1 text-[11px] font-sans scrollbar-none">
                {phoneMessages.map((msg, i) => (
                  <div
                    key={i}
                    className={`max-w-[80%] p-2.5 rounded-2xl leading-relaxed transition-all duration-300 ${
                      msg.sender === "me"
                        ? "bg-amber-600 text-white ml-auto rounded-tr-none"
                        : "bg-stone-850 text-stone-200 mr-auto rounded-tl-none"
                    }`}
                  >
                    {msg.text}
                  </div>
                ))}
                
                {isSending && (
                  <div className="bg-amber-600/30 border border-amber-500/20 text-amber-250 p-2.5 rounded-2xl max-w-[80%] ml-auto rounded-tr-none flex items-center gap-2">
                    <span className="w-2 h-2 bg-amber-500 rounded-full animate-ping shrink-0" />
                    <span className="italic">
                      {sendStep === 1 && "Đang mã hóa..."}
                      {sendStep === 2 && "Đang đóng gói..."}
                      {sendStep === 3 && "Đang gửi trạm phát sóng..."}
                      {sendStep === 4 && "Đang định tuyến..."}
                    </span>
                  </div>
                )}
              </div>

              {/* Input Box and Send Button */}
              <div className="mt-3 pt-2 border-t border-stone-900 flex gap-2 items-center">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Nhập tin nhắn..."
                  disabled={isSending}
                  className="flex-1 bg-stone-905 text-stone-100 placeholder-stone-600 border border-stone-800 focus:border-amber-600 rounded-xl px-3 py-2 text-xs transition-colors outline-none disabled:opacity-50 font-sans"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSendMessage();
                  }}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={isSending || !message.trim()}
                  className="w-8 h-8 rounded-xl bg-amber-600 hover:bg-amber-700 text-white flex items-center justify-center transition-all cursor-pointer shrink-0 disabled:opacity-40 disabled:cursor-not-allowed hover:scale-105 active:scale-95 shadow-md shadow-amber-900/30"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Column Right: Details area */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <div className="text-[10px] text-stone-550 font-bold uppercase tracking-widest mb-2.5">
              CƠ CHẾ KỸ THUẬT NGẦM (HIDDEN SYSTEM MECHANISM)
            </div>

            {/* Implementation Details Box */}
            <div className="bg-[#181715] border border-stone-850 rounded-2xl p-4 md:p-5 text-white min-h-[300px] flex flex-col justify-between">
              
              {!showImplementation ? (
                // Scenario 1: Abstraction Active (Implementation details hidden)
                <div className="flex-1 flex flex-col items-center justify-center text-center p-4">
                  <div className="w-14 h-14 rounded-full bg-amber-500/10 border border-amber-500/35 flex items-center justify-center mb-4 text-amber-500 shadow-[0_0_20px_rgba(217,119,6,0.08)]">
                    <CheckCircle className="w-7 h-7" />
                  </div>
                  <h5 className="text-sm font-extrabold text-amber-500 mb-2">
                    Abstraction Đang Bật (Ẩn Chi Tiết Cài Đặt)
                  </h5>
                  <p className="text-xs text-stone-400 max-w-sm leading-relaxed">
                    Hệ thống đã che giấu hoàn toàn các cấu trúc truyền gói tin, giao thức và phần cứng ở bên trong. Người lập trình và người dùng chỉ cần làm việc với giao thức công khai: <code className="text-stone-300 font-mono text-[11px] bg-stone-900 px-1.5 py-0.5 rounded">sendMessage(text)</code>.
                  </p>
                  <div className="bg-stone-900/60 border border-stone-800 px-4 py-2.5 rounded-xl font-mono text-[11px] text-stone-450 mt-5 w-full max-w-xs select-text">
                    <span className="text-amber-500">public class</span> <span className="text-blue-400">Phone</span> &#123;<br/>
                    &nbsp;&nbsp;<span className="text-emerald-500">public void</span> <span className="text-yellow-400">sendSMS</span>(String msg) &#123;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-stone-550">// Ẩn đi 1000 dòng code phức tạp</span><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;this.hardware.dispatch(msg);<br/>
                    &nbsp;&nbsp;&#125;<br/>
                    &#125;
                  </div>
                </div>
              ) : (
                // Scenario 2: Abstraction Disabled (Show complex steps)
                <div className="space-y-4">
                  <div className="text-[10px] text-stone-400 font-bold uppercase tracking-wide border-b border-stone-850 pb-2 mb-2 flex items-center gap-1.5">
                    <Radio className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
                    <span>Luồng dữ liệu thực tế đang chạy ngầm:</span>
                  </div>

                  {/* Flow chart layout */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    
                    {/* Step 1: Unicode encoding */}
                    <div className={`p-3 rounded-xl border transition-all duration-300 ${
                      sendStep === 1 
                        ? "border-amber-500 bg-amber-500/10 shadow-[0_0_12px_rgba(217,119,6,0.15)]"
                        : "border-stone-850 bg-stone-900/35"
                    }`}>
                      <div className="flex justify-between items-center text-[10px] font-black">
                        <span className={sendStep === 1 ? "text-amber-400" : "text-stone-500"}>BƯỚC 1: ENCODING (MÃ HÓA)</span>
                        {sendStep > 1 && <span className="text-emerald-500 text-[9px]">Xong ✓</span>}
                      </div>
                      <div className="text-xs font-bold mt-1 text-stone-300">Bộ mã UCS-2 Unicode</div>
                      <div className="text-[9px] font-mono text-stone-400 mt-1 select-all truncate">
                        {isSending && sendStep >= 1 ? getUnicodeHex(message) : "0043 0068 00E0 006F 0020"}
                      </div>
                    </div>

                    {/* Step 2: Protocol packing */}
                    <div className={`p-3 rounded-xl border transition-all duration-300 ${
                      sendStep === 2 
                        ? "border-amber-500 bg-amber-500/10 shadow-[0_0_12px_rgba(217,119,6,0.15)]"
                        : "border-stone-850 bg-stone-900/35"
                    }`}>
                      <div className="flex justify-between items-center text-[10px] font-black">
                        <span className={sendStep === 2 ? "text-amber-400" : "text-stone-500"}>BƯỚC 2: GSM PDU PACKING</span>
                        {sendStep > 2 && <span className="text-emerald-500 text-[9px]">Xong ✓</span>}
                      </div>
                      <div className="text-xs font-bold mt-1 text-stone-300">Đóng gói PDU Payload</div>
                      <div className="text-[9px] font-mono text-stone-400 mt-1 select-all truncate">
                        07918496000000F011000A81...
                      </div>
                    </div>

                    {/* Step 3: Radio connection */}
                    <div className={`p-3 rounded-xl border transition-all duration-300 ${
                      sendStep === 3 
                        ? "border-amber-500 bg-amber-500/10 shadow-[0_0_12px_rgba(217,119,6,0.15)]"
                        : "border-stone-850 bg-stone-900/35"
                    }`}>
                      <div className="flex justify-between items-center text-[10px] font-black">
                        <span className={sendStep === 3 ? "text-amber-400" : "text-stone-500"}>BƯỚC 3: RADIO HANDSHAKE</span>
                        {sendStep > 3 && <span className="text-emerald-500 text-[9px]">Xong ✓</span>}
                      </div>
                      <div className="text-xs font-bold mt-1 text-stone-300">Bắt tay Trạm BTS vô tuyến</div>
                      <div className="text-[9px] text-stone-400 mt-1 flex items-center gap-1.5 font-sans">
                        <Radio className={`w-3.5 h-3.5 ${sendStep === 3 ? "text-amber-500" : "text-stone-600"}`} />
                        <span>Tần số: 900/1800 MHz GSM</span>
                      </div>
                    </div>

                    {/* Step 4: Routing */}
                    <div className={`p-3 rounded-xl border transition-all duration-300 ${
                      sendStep === 4 
                        ? "border-amber-500 bg-amber-500/10 shadow-[0_0_12px_rgba(217,119,6,0.15)]"
                        : "border-stone-850 bg-stone-900/35"
                    }`}>
                      <div className="flex justify-between items-center text-[10px] font-black">
                        <span className={sendStep === 4 ? "text-amber-400" : "text-stone-500"}>BƯỚC 4: SMSC ROUTING</span>
                        {sendStep > 4 && <span className="text-emerald-500 text-[9px]">Xong ✓</span>}
                      </div>
                      <div className="text-xs font-bold mt-1 text-stone-300">Định tuyến trung tâm SMS</div>
                      <div className="text-[9px] text-stone-400 mt-1 flex items-center gap-1.5 font-sans">
                        <Server className={`w-3.5 h-3.5 ${sendStep === 4 ? "text-amber-500 animate-pulse" : "text-stone-600"}`} />
                        <span>Core Network gateway</span>
                      </div>
                    </div>
                  </div>

                  {/* Dynamic notification / Code block explanation */}
                  <div className="bg-stone-900 border border-stone-850 p-3 rounded-xl flex items-start gap-2.5 mt-2">
                    <Info className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <p className="text-[10px] text-stone-450 leading-relaxed font-sans select-text">
                      Nếu không áp dụng <strong>Abstraction</strong>, lập trình viên sẽ phải trực tiếp điều khiển cổng nối tiếp, tự viết bit mã hóa, quản lý thiết lập sóng vô tuyến, và xử lý luồng PDU thủ công. Nhờ có Abstraction, bạn chỉ cần gọi interface đơn giản: <code>phone.sendSMS(msg)</code>.
                    </p>
                  </div>
                </div>
              )}
              
              {/* Bottom quote bar */}
              <div className="border-t border-stone-850 pt-2.5 mt-4 text-[10px] text-stone-450 italic flex items-center justify-between font-sans select-none">
                <span>💡 Triết lý: Ẩn đi "cách làm" (how) — chỉ để lộ "làm được gì" (what).</span>
                {sendStep === 5 && (
                  <span className="text-emerald-400 font-bold flex items-center gap-1 animate-pulse">
                    ✓ Đã nhận SMS trên trạm cuối!
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
