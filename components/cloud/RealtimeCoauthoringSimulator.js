"use client";
import React, { useState } from "react";
import { Edit3, Lock, Unlock, Play, RotateCcw, Sparkles, CheckCircle2, Users, AlertTriangle, ArrowRight } from "lucide-react";

export default function RealtimeCoauthoringSimulator() {
  const [engine, setEngine] = useState("ot"); // 'locking' | 'ot'
  const [docContent, setDocContent] = useState("Hệ thống đám mây giúp ");
  const [aliceText, setAliceText] = useState("");
  const [bobText, setBobText] = useState("");
  const [isSimulating, setIsSimulating] = useState(false);
  const [conflictResolved, setConflictResolved] = useState(false);
  const [bobBlocked, setBobBlocked] = useState(false);

  const handleRunLockingDemo = () => {
    setIsSimulating(true);
    setBobBlocked(false);
    setDocContent("Hệ thống đám mây giúp ");
    
    // Step 1: Alice acquires lock
    setTimeout(() => {
      setDocContent("Hệ thống đám mây giúp [Alice đang sửa: tối ưu chi phí]");
      
      // Step 2: Bob tries to edit -> BLOCKED
      setTimeout(() => {
        setBobBlocked(true);
        setIsSimulating(false);
      }, 700);
    }, 400);
  };

  const handleRunOtDemo = () => {
    setIsSimulating(true);
    setConflictResolved(false);
    setBobBlocked(false);
    setDocContent("Hệ thống đám mây giúp ");

    // Alice types at index 22, Bob types at index 22 simultaneously
    setTimeout(() => {
      setDocContent("Hệ thống đám mây giúp [Alice: tối ưu chi phí] & [Bob: mở rộng linh hoạt]");
      setTimeout(() => {
        // OT transformation resolves index
        setDocContent("Hệ thống đám mây giúp tối ưu chi phí và mở rộng linh hoạt.");
        setConflictResolved(true);
        setIsSimulating(false);
      }, 900);
    }, 500);
  };

  const handleReset = () => {
    setDocContent("Hệ thống đám mây giúp ");
    setConflictResolved(false);
    setBobBlocked(false);
    setIsSimulating(false);
  };

  return (
    <div className="my-8 p-5 sm:p-8 rounded-3xl bg-white border border-stone-200 shadow-md font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-black uppercase tracking-widest text-sky-600">
              Signature Visualizer • Mục IV
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-black text-stone-900 mt-1">
            Mô Phỏng Đồng Biên Tập Thời Gian Thực: File Locking vs OT / CRDT
          </h3>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Khám phá trực tiếp cách Google Docs / Office 365 cho phép nhiều người cùng gõ chữ mà không bị ghi đè dữ liệu.
          </p>
        </div>

        {/* Engine Switcher */}
        <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-stone-100 border border-stone-200/80 self-start sm:self-auto shrink-0">
          <button
            type="button"
            onClick={() => { setEngine("ot"); handleReset(); }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              engine === "ot"
                ? "bg-sky-600 text-white shadow-xs"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Thuật toán Đám mây (OT / CRDT)</span>
          </button>
          <button
            type="button"
            onClick={() => { setEngine("locking"); handleReset(); }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              engine === "locking"
                ? "bg-amber-600 text-white shadow-xs"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            <Lock className="w-3.5 h-3.5" />
            <span>Khóa File Cổ Điển (File Locking)</span>
          </button>
        </div>
      </div>

      {/* Simulated Document Editor Viewport */}
      <div className="rounded-2xl border border-stone-300 bg-stone-50 overflow-hidden mb-6 shadow-xs">
        {/* Editor Top Bar */}
        <div className="px-4 py-2.5 bg-stone-200/70 border-b border-stone-300 flex items-center justify-between text-xs">
          <div className="flex items-center gap-3">
            <span className="font-mono font-bold text-stone-700">📄 Tai_Lieu_Hop_Tac.docx</span>
            <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
              engine === "ot" ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"
            }`}>
              {engine === "ot" ? "Real-time Co-authoring (Active)" : "Single-user Locked Mode"}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Alice Avatar Badge */}
            <div className="flex items-center gap-1 text-[11px] font-bold text-sky-800 bg-sky-100 px-2 py-0.5 rounded-full border border-sky-300">
              <span className="w-2 h-2 rounded-full bg-sky-600 animate-pulse" />
              <span>Alice (Client 1)</span>
            </div>
            {/* Bob Avatar Badge */}
            <div className={`flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full border ${
              bobBlocked 
                ? "text-rose-800 bg-rose-100 border-rose-300"
                : "text-amber-800 bg-amber-100 border-amber-300"
            }`}>
              <span className={`w-2 h-2 rounded-full ${bobBlocked ? "bg-rose-600" : "bg-amber-600 animate-pulse"}`} />
              <span>Bob (Client 2)</span>
            </div>
          </div>
        </div>

        {/* Live Document Canvas */}
        <div className="p-6 bg-white min-h-[140px] flex flex-col justify-between">
          <div className="text-sm sm:text-base font-serif text-stone-850 leading-relaxed font-medium">
            <span>{docContent}</span>
            <span className="inline-block w-0.5 h-4 bg-sky-600 align-middle animate-ping ml-0.5" />
          </div>

          {/* Conflict/Status Banner inside doc */}
          <div className="mt-4 pt-3 border-t border-stone-100 flex flex-wrap items-center justify-between gap-2 text-xs">
            {bobBlocked && (
              <div className="text-rose-700 font-bold flex items-center gap-1.5 animate-bounce">
                <AlertTriangle className="w-4 h-4 text-rose-600" />
                <span>CẢNH BÁO: Tệp bị khóa bởi Alice! Bob chuyển sang chế độ CHỈ ĐỌC (Read-Only).</span>
              </div>
            )}
            {conflictResolved && (
              <div className="text-emerald-700 font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>THÀNH CÔNG: Thuật toán OT tự động dịch chuyển vị trí con trỏ và ghép nối văn bản hoàn hảo!</span>
              </div>
            )}
            {!bobBlocked && !conflictResolved && (
              <span className="text-stone-400 italic">Nhấn nút kích hoạt bên dưới để chạy mô phỏng tương tác.</span>
            )}
          </div>
        </div>
      </div>

      {/* Action Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-stone-50 border border-stone-200">
        <div className="flex items-center gap-2">
          {engine === "ot" ? (
            <button
              type="button"
              disabled={isSimulating}
              onClick={handleRunOtDemo}
              className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs flex items-center gap-2 shadow-xs transition-all cursor-pointer disabled:opacity-50"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Chạy Mô Phỏng 2 Người Cùng Gõ Đồng Thời</span>
            </button>
          ) : (
            <button
              type="button"
              disabled={isSimulating}
              onClick={handleRunLockingDemo}
              className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs flex items-center gap-2 shadow-xs transition-all cursor-pointer disabled:opacity-50"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Chạy Mô Phỏng Khóa Tệp Khi Alice Đang Gõ</span>
            </button>
          )}

          <button
            type="button"
            onClick={handleReset}
            className="px-3 py-2 rounded-xl bg-white hover:bg-stone-100 border border-stone-300 text-stone-700 font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Đặt lại</span>
          </button>
        </div>

        <div className="text-xs text-stone-500 font-medium">
          Thời gian mô phỏng: <strong className="text-stone-800">~2 giây</strong> • Trực quan hóa thuật toán
        </div>
      </div>

      {/* Academic Takeaway Note */}
      <div className="mt-4 p-4 rounded-xl bg-sky-50/60 border border-sky-200 text-xs leading-relaxed text-sky-950">
        <strong>💡 Điểm Chốt Thi Cử Cần Nhớ:</strong>
        <ul className="mt-1 space-y-1 list-disc list-inside">
          <li><strong>File Locking (Cũ):</strong> Chỉ 1 người được ghi (Write lock), người khác phải đợi. Nhược điểm: Tắc nghẽn tiến độ, không hỗ trợ cộng tác nhóm linh hoạt.</li>
          <li><strong>Operational Transformation - OT (Google Docs):</strong> Cho phép sửa đồng thời không khóa file; máy chủ đóng vai trò trọng tài chuyển đổi tọa độ con trỏ để nội dung đồng nhất ở mọi màn hình.</li>
        </ul>
      </div>
    </div>
  );
}
