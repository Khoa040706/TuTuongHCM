"use client";
import React, { useState } from "react";
import { Cpu, HardDrive, Zap, Play, RotateCcw, AlertTriangle, CheckCircle2, Sparkles, ArrowDown, ArrowUp } from "lucide-react";

export default function VirtualMemorySwappingSimulator() {
  const [ramPages, setRamPages] = useState([
    { id: "p1", name: "HĐH Kernel", color: "bg-stone-700 text-white", active: true },
    { id: "p2", name: "System Services", color: "bg-stone-600 text-white", active: true },
    { id: "p3", name: "Trình duyệt Web", color: "bg-sky-600 text-white", active: true },
    { id: "p4", name: "Soạn thảo Word", color: "bg-blue-600 text-white", active: false }
  ]);
  const [swapPages, setSwapPages] = useState([]);
  const [isSwapping, setIsSwapping] = useState(false);
  const [logMessage, setLogMessage] = useState("RAM đang ở mức bình thường (50% dung lượng). Chưa cần dùng bộ nhớ ảo.");
  const [pageFaultCount, setPageFaultCount] = useState(0);

  // Scenario 1: Load heavy workload (Fill RAM)
  const handleLoadHeavyApp = () => {
    setIsSwapping(true);
    setLogMessage("Đang nạp ứng dụng nặng (Render Video 4K & AI)... RAM bị đầy 100%!");
    
    setTimeout(() => {
      setRamPages([
        { id: "p1", name: "HĐH Kernel", color: "bg-stone-700 text-white", active: true },
        { id: "p2", name: "System Services", color: "bg-stone-600 text-white", active: true },
        { id: "p3", name: "Trình duyệt Web", color: "bg-sky-600 text-white", active: true },
        { id: "p4", name: "Soạn thảo Word (Ít dùng)", color: "bg-blue-600 text-white", active: false },
        { id: "p5", name: "Render Video (Trang 1)", color: "bg-rose-600 text-white", active: true },
        { id: "p6", name: "Render Video (Trang 2)", color: "bg-rose-600 text-white", active: true }
      ]);
      setIsSwapping(false);
    }, 400);
  };

  // Scenario 2: Trigger Swap Out / In
  const handleTriggerSwapping = () => {
    setIsSwapping(true);
    setLogMessage("RAM quá tải! Hệ điều hành tìm Memory Pages ít dùng nhất (LRU: Word) để SWAP OUT sang ổ SSD...");
    setPageFaultCount(prev => prev + 1);

    setTimeout(() => {
      // Move Word to Swap
      setRamPages(prev => [
        ...prev.filter(p => p.id !== "p4"),
        { id: "p7", name: "Mô hình AI (Trang mới)", color: "bg-purple-600 text-white", active: true }
      ]);
      setSwapPages([
        { id: "p4", name: "Soạn thảo Word (Pagefile.sys)", color: "bg-blue-100 text-blue-900 border-blue-300", size: "4 KB" }
      ]);
      setLogMessage("SWAP THÀNH CÔNG: Đã giải phóng RAM cho Mô hình AI! Word được lưu tạm an toàn trên ổ đĩa SSD.");
      setIsSwapping(false);
    }, 700);
  };

  const handleReset = () => {
    setRamPages([
      { id: "p1", name: "HĐH Kernel", color: "bg-stone-700 text-white", active: true },
      { id: "p2", name: "System Services", color: "bg-stone-600 text-white", active: true },
      { id: "p3", name: "Trình duyệt Web", color: "bg-sky-600 text-white", active: true },
      { id: "p4", name: "Soạn thảo Word", color: "bg-blue-600 text-white", active: false }
    ]);
    setSwapPages([]);
    setLogMessage("Đã đặt lại trạng thái ban đầu.");
    setPageFaultCount(0);
    setIsSwapping(false);
  };

  return (
    <div className="my-8 p-5 sm:p-8 rounded-3xl bg-white border border-stone-200 shadow-md font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-black uppercase tracking-widest text-emerald-600">
              Signature Visualizer • Mục II
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-black text-stone-900 mt-1">
            Mô Phỏng Cơ Chế Bộ Nhớ Ảo: Paging, Swapping & Page Fault
          </h3>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Quan sát cách hệ điều hành hoán đổi trang nhớ giữa RAM vật lý và ổ đĩa SSD (Pagefile.sys) khi máy tính bị thiếu RAM.
          </p>
        </div>

        <button
          type="button"
          onClick={handleReset}
          className="px-3 py-1.5 rounded-xl border border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-600 text-xs font-bold transition-all flex items-center gap-1.5 self-start cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Đặt lại</span>
        </button>
      </div>

      {/* Main Interactive Dual Memory Viewport */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Physical RAM Box */}
        <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3 border-b border-stone-200 pb-2.5">
              <div className="flex items-center gap-2">
                <Cpu className="w-5 h-5 text-emerald-600" />
                <span className="font-extrabold text-sm text-stone-900">Physical RAM (Thanh RAM Vật Lý)</span>
              </div>
              <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                ramPages.length >= 6 ? "bg-rose-100 text-rose-800 animate-pulse" : "bg-emerald-100 text-emerald-800"
              }`}>
                {ramPages.length >= 6 ? "ĐẦY 100% (Overload)" : `Tải ${ramPages.length * 16}%`}
              </span>
            </div>

            <p className="text-xs text-stone-500 mb-3">Tốc độ cực nhanh (~50 GB/s), dung lượng hữu hạn (16 GB):</p>

            {/* Page Slots */}
            <div className="grid grid-cols-2 gap-2">
              {ramPages.map((page) => (
                <div
                  key={page.id}
                  className={`p-2.5 rounded-xl text-xs font-bold flex items-center justify-between shadow-2xs transition-all ${page.color}`}
                >
                  <span className="line-clamp-1">{page.name}</span>
                  <span className="text-[10px] font-mono opacity-80 shrink-0 ml-1">4KB</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-stone-200 flex items-center justify-between text-[11px] text-stone-500 font-medium">
            <span>Dung lượng: 16 GB DDR4/DDR5</span>
            <span className="font-mono text-emerald-700 font-bold">Latency: ~15ns</span>
          </div>
        </div>

        {/* Virtual Memory (SSD Pagefile) Box */}
        <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3 border-b border-stone-200 pb-2.5">
              <div className="flex items-center gap-2">
                <HardDrive className="w-5 h-5 text-sky-600" />
                <span className="font-extrabold text-sm text-stone-900">Virtual Memory (Ổ Đĩa SSD / Pagefile)</span>
              </div>
              <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                swapPages.length > 0 ? "bg-sky-100 text-sky-800" : "bg-stone-200 text-stone-600"
              }`}>
                {swapPages.length > 0 ? `Đang lưu ${swapPages.length} Pages` : "Trống (Chưa dùng)"}
              </span>
            </div>

            <p className="text-xs text-stone-500 mb-3">Dung lượng dồi dào (512 GB), nhưng tốc độ chậm hơn RAM ~100 lần:</p>

            {/* Swapped Pages */}
            {swapPages.length > 0 ? (
              <div className="space-y-2">
                {swapPages.map((sp) => (
                  <div key={sp.id} className={`p-2.5 rounded-xl border text-xs font-bold flex items-center justify-between animate-in fade-in ${sp.color}`}>
                    <div className="flex items-center gap-2">
                      <ArrowDown className="w-3.5 h-3.5 text-blue-600" />
                      <span>{sp.name}</span>
                    </div>
                    <span className="text-[10px] font-mono font-extrabold px-1.5 py-0.5 bg-white rounded border border-blue-200">SWAPPED</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="h-24 border-2 border-dashed border-stone-200 rounded-xl flex flex-col items-center justify-center text-stone-400 text-xs">
                <span>Vùng đệm ổ cứng trống</span>
                <span className="text-[10px] mt-0.5">Sẵn sàng nhận dữ liệu khi RAM bị quá tải</span>
              </div>
            )}
          </div>

          <div className="mt-4 pt-3 border-t border-stone-200 flex items-center justify-between text-[11px] text-stone-500 font-medium">
            <span>Dung lượng ảo: Mở rộng tới 64 GB</span>
            <span className="font-mono text-sky-700 font-bold">Latency: ~100μs (Chậm hơn)</span>
          </div>
        </div>
      </div>

      {/* Control Action Buttons */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-stone-50 border border-stone-200 mb-4">
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            disabled={isSwapping || ramPages.length >= 6}
            onClick={handleLoadHeavyApp}
            className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs flex items-center gap-2 shadow-xs transition-all cursor-pointer disabled:opacity-50"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>1. Mở Ứng Dụng Nặng (Làm Đầy RAM)</span>
          </button>

          <button
            type="button"
            disabled={isSwapping || ramPages.length < 6 || swapPages.length > 0}
            onClick={handleTriggerSwapping}
            className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs flex items-center gap-2 shadow-xs transition-all cursor-pointer disabled:opacity-50"
          >
            <Zap className="w-3.5 h-3.5" />
            <span>2. Kích Hoạt Swapping (Đẩy Trang Ra Đĩa)</span>
          </button>
        </div>

        <div className="text-xs font-semibold text-stone-600">
          Số lần Page Fault phát sinh: <strong className="text-rose-600 font-mono font-black">{pageFaultCount}</strong>
        </div>
      </div>

      {/* Real-time Status Log */}
      <div className="p-3.5 rounded-xl bg-stone-100 border border-stone-200 text-xs text-stone-700 flex items-center gap-2">
        <Sparkles className="w-4 h-4 text-accent shrink-0" />
        <span className="font-medium">{logMessage}</span>
      </div>

      {/* Exam Keypoint Callout */}
      <div className="mt-4 p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs leading-relaxed text-emerald-950">
        <strong>💡 Điểm Chốt Thi Cử Về Virtual Memory:</strong>
        <ul className="mt-1 space-y-1 list-disc list-inside">
          <li><strong>Bản chất:</strong> Virtual Memory kết hợp giữa RAM vật lý và một vùng dung lượng ổ cứng để tạo ảo giác máy tính có nhiều bộ nhớ hơn thực tế.</li>
          <li><strong>Memory Pages:</strong> Khối bộ nhớ có kích thước cố định (thường là 4 KB).</li>
          <li><strong>Swapping (Tráo đổi):</strong> Đẩy trang ít dùng từ RAM sang đĩa (Swap Out) và nạp lại khi cần (Swap In).</li>
          <li><strong>Hiện tượng Thrashing (Lỗi nghẽn đĩa):</strong> Khi RAM quá thiếu, hệ điều hành liên tục tráo đổi trang qua lại giữa RAM và ổ cứng khiến hệ thống bị đơ lag nghiêm trọng.</li>
        </ul>
      </div>
    </div>
  );
}
