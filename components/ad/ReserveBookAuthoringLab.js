"use client";
import React, { useState } from "react";
import { 
  Bookmark, 
  HelpCircle, 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ListOrdered, 
  AlertCircle,
  FileCheck,
  Check
} from "lucide-react";

export default function ReserveBookAuthoringLab() {
  const [activeStep, setActiveStep] = useState("brief"); // "brief" | "fully-dressed"

  return (
    <div className="my-8 rounded-2xl border border-emerald-200/80 bg-gradient-to-br from-[#faf8f4] via-white to-emerald-50/30 p-6 md:p-8 shadow-xl shadow-emerald-900/5 text-[#2c2a26]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-200/60 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-950 border border-emerald-300/60 mb-2">
            <Bookmark className="w-3.5 h-3.5 text-emerald-700" />
            Mục 5.5 & 5.6 — Step 2 & 3: Authoring Lab ("Reserve Book")
          </div>
          <h3 className="text-xl md:text-2xl font-black tracking-tight text-stone-900">
            Phòng Thí nghiệm Soạn thảo Đặc tả Ca sử dụng: "Reserve Book"
          </h3>
          <p className="text-sm text-stone-600 mt-1 max-w-2xl">
            Thực hành từng bước chuyển hóa từ 3 câu hỏi cốt lõi của <strong>Brief Description</strong> sang bản đặc tả <strong>Fully Dressed 9 trường</strong> chuẩn mực có luân phiên và xử lý ngoại lệ.
          </p>
        </div>

        {/* Step Switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-xl border border-stone-200 self-start md:self-auto text-xs">
          <button
            onClick={() => setActiveStep("brief")}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              activeStep === "brief"
                ? "bg-emerald-600 text-white shadow-xs"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Step 2: Viết Brief Description
          </button>
          <button
            onClick={() => setActiveStep("fully-dressed")}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              activeStep === "fully-dressed"
                ? "bg-stone-900 text-white shadow-xs"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Step 3: Viết Fully Dressed
          </button>
        </div>
      </div>

      {/* Step 2: Brief Description */}
      {activeStep === "brief" && (
        <div className="mt-6 space-y-6">
          {/* 3 Golden Questions */}
          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-950 space-y-2">
            <span className="font-extrabold text-sm text-amber-900 flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-amber-700" />
              3 Câu hỏi vàng khi soạn thảo Brief Description (Slide 27):
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
              <div className="p-2.5 rounded-lg bg-white border border-amber-200">
                <strong className="block text-amber-900 mb-0.5">1. Ai bắt đầu (Who)?</strong>
                <span className="text-stone-700">Thành viên thư viện (Member) có thẻ hợp lệ.</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white border border-amber-200">
                <strong className="block text-amber-900 mb-0.5">2. Họ muốn gì (Goal)?</strong>
                <span className="text-stone-700">Đặt giữ trước một cuốn sách đang được mượn.</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white border border-amber-200">
                <strong className="block text-amber-900 mb-0.5">3. Hệ thống deliver gì?</strong>
                <span className="text-stone-700">Xác nhận giữ chỗ và cam kết báo tin khi sách về.</span>
              </div>
            </div>
            <p className="text-[11px] text-amber-800 italic pt-1">
              * Quy tắc độ dài: Giữ ngắn gọn đúng 2 – 4 câu. Mọi chi tiết rẽ nhánh dành riêng cho bản Fully-Dressed.
            </p>
          </div>

          {/* Generated Brief Text */}
          <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-2">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              Bản soạn thảo chuẩn: Brief Description cho "Reserve Book"
            </span>
            <div className="p-4 rounded-xl bg-stone-900 text-stone-100 font-mono text-xs leading-relaxed border border-stone-800">
              "Thành viên tìm kiếm sách trong danh mục và gửi yêu cầu đặt trước cuốn sách hiện đang được mượn bởi độc giả khác. Hệ thống kiểm tra tư cách thẻ thư viện, xác nhận yêu cầu và cấp mã thứ tự giữ chỗ trong danh sách chờ. Khi cuốn sách được trả về thư viện, hệ thống sẽ tự động gửi thông báo cho thành viên để đến nhận."
            </div>
          </div>
        </div>
      )}

      {/* Step 3: Fully Dressed Description */}
      {activeStep === "fully-dressed" && (
        <div className="mt-6 space-y-4">
          <div className="p-3.5 rounded-xl bg-stone-100 border border-stone-200 text-xs flex items-center justify-between gap-2">
            <span className="font-bold text-stone-800">
              Hồ sơ đặc tả đầy đủ: <code className="bg-white px-1.5 py-0.5 rounded border">UC-02 — Reserve Book</code>
            </span>
            <span className="text-[11px] text-stone-500">Cấu trúc 9 trường biểu mẫu chuẩn</span>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white overflow-hidden shadow-xs divide-y divide-stone-100 text-xs">
            <div className="p-3.5 flex flex-col sm:flex-row sm:items-center gap-2 bg-stone-50">
              <span className="w-44 font-extrabold text-stone-900">1. ID & Name</span>
              <span className="font-mono font-bold text-emerald-800">UC-02 — Reserve Book</span>
            </div>

            <div className="p-3.5 flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="w-44 font-extrabold text-stone-900">2. Actors</span>
              <span className="text-stone-700">Primary: Member | Secondary: Notification Service</span>
            </div>

            <div className="p-3.5 flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="w-44 font-extrabold text-stone-900">3. Trigger</span>
              <span className="text-stone-700">Member clicks nút "Reserve This Book" trên trang chi tiết sách</span>
            </div>

            <div className="p-3.5 flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="w-44 font-extrabold text-stone-900">4. Precondition</span>
              <span className="text-amber-900 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 font-medium">
                Member đã đăng nhập tài khoản thư viện và đầu sách tồn tại trong Catalog.
              </span>
            </div>

            {/* Alternating Normal Flow */}
            <div className="p-3.5 flex flex-col sm:flex-row sm:items-start gap-2">
              <span className="w-44 font-extrabold text-stone-900 mt-1">
                5. Normal Flow
                <span className="block text-[10px] text-stone-400 font-normal">Luân phiên Member ➔ System</span>
              </span>
              <div className="flex-1 space-y-1.5 bg-stone-50 p-3 rounded-xl border border-stone-200 font-mono text-[11px]">
                <div className="text-blue-900">1. [Member] Chọn cuốn sách mong muốn và gửi yêu cầu đặt trước.</div>
                <div className="text-emerald-900">2. [System] Kiểm tra tư cách thành viên (BR-01) và kiểm tra sách đang được mượn hết.</div>
                <div className="text-blue-900">3. [Member] Xác nhận chi nhánh thư viện muốn nhận sách khi sách về.</div>
                <div className="text-emerald-900">4. [System] Tạo phiếu giữ sách (Hold Record), cấp số thứ tự chờ và gửi thông báo xác nhận.</div>
              </div>
            </div>

            {/* Alternate Flow */}
            <div className="p-3.5 flex flex-col sm:flex-row sm:items-start gap-2 bg-blue-50/30">
              <span className="w-44 font-extrabold text-blue-950 mt-0.5">6. Alternate Flow</span>
              <div className="flex-1 text-blue-900 leading-relaxed">
                <strong>Tại step 2 (Sách có sẵn trên kệ):</strong> Hệ thống phát hiện có ít nhất 1 bản sao cuốn sách đang rảnh rỗi trên kệ sách ➔ Hệ thống thông báo vị trí kệ và gợi ý Member đến mượn trực tiếp mà không cần đưa vào danh sách chờ.
              </div>
            </div>

            {/* Exception Flow */}
            <div className="p-3.5 flex flex-col sm:flex-row sm:items-start gap-2 bg-rose-50/30">
              <span className="w-44 font-extrabold text-rose-950 mt-0.5">7. Exception Flow</span>
              <div className="flex-1 text-rose-900 leading-relaxed">
                <strong>Tại step 2 (Thẻ bị khóa do nợ phạt):</strong> Hệ thống phát hiện tài khoản Member đang có tiền phạt quá hạn chưa thanh toán (BR-15) ➔ Hệ thống từ chối quyền đặt trước, hiển thị số tiền nợ và hướng dẫn thanh toán.
              </div>
            </div>

            <div className="p-3.5 flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="w-44 font-extrabold text-stone-900">8. Postcondition</span>
              <span className="text-emerald-900 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-medium">
                Phiếu giữ sách được lưu bền vững vào CSDL và hệ thống đăng ký theo dõi sự kiện trả sách của đầu sách này.
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
