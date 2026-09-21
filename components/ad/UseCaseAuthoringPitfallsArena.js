"use client";
import React, { useState } from "react";
import { 
  AlertTriangle, 
  XCircle, 
  CheckCircle2, 
  RotateCcw, 
  HelpCircle, 
  Sparkles, 
  Layout, 
  RefreshCw, 
  ShieldAlert,
  ArrowRight
} from "lucide-react";

const PITFALLS = [
  {
    id: "pit-1",
    num: "01",
    title: "Trộn chi tiết Giao diện (UI Details) vào Đặc tả Logic",
    subtitle: "Lỗi dính chặt vào công nghệ UI (Button, Screen, Dropdown)",
    desc: "Use case phải phản ánh bản chất logic nghiệp vụ, hoàn toàn độc lập với việc hệ thống chạy trên Web, Mobile App hay máy ATM.",
    antipatternText: "1. Người dùng bấm vào nút màu xanh 'Thêm giỏ hàng' trên thanh menu trên cùng.\n2. Một cửa sổ Popup Modal hiện lên ở giữa màn hình có hiệu ứng làm mờ nền.\n3. Người dùng chọn số lượng từ Dropdown box rồi bấm nút Submit.",
    refactoredText: "1. Khách hàng yêu cầu thêm mặt hàng đã chọn vào giỏ hàng.\n2. Hệ thống kiểm tra số lượng tồn kho và cập nhật danh sách mặt hàng của giỏ hàng.\n3. Hệ thống hiển thị xác nhận trạng thái giỏ hàng đã được cập nhật.",
    advice: "Dùng từ ngữ nghiệp vụ (yêu cầu, xác nhận, hiển thị) thay vì từ ngữ phần cứng giao diện (click nút màu xanh, rê chuột, dropdown)."
  },
  {
    id: "pit-2",
    num: "02",
    title: "Không Luân phiên rõ giữa Hành động Actor và Phản hồi System",
    subtitle: "Lỗi viết độc thoại một chiều (Thiếu tính tương tác 2 chiều)",
    desc: "Use case là một cuộc đối thoại tương tác (Dialogue) giữa 2 bên. Cần viết theo cặp: Actor làm gì ➔ Hệ thống đáp ứng gì.",
    antipatternText: "1. Người dùng đăng nhập vào hệ thống.\n2. Người dùng nhập tên sách cần tìm.\n3. Người dùng chọn cuốn sách từ danh sách.\n4. Người dùng bấm đặt sách và chọn ngày nhận sách.",
    refactoredText: "1. [Member] Nhập từ khóa tìm kiếm sách và gửi yêu cầu.\n2. [System] Tra cứu CSDL và hiển thị danh sách các đầu sách phù hợp.\n3. [Member] Chọn cuốn sách mong muốn và yêu cầu đặt trước.\n4. [System] Xác minh trạng thái sách và cấp mã giữ chỗ thành công.",
    advice: "Luôn đánh số và chỉ rõ chủ thể ở đầu mỗi bước: [Actor] hành động ➔ [System] kiểm tra và phản hồi."
  },
  {
    id: "pit-3",
    num: "03",
    title: "Bỏ qua Luồng Ngoại lệ (Exceptions), Chỉ viết Happy Path",
    subtitle: "Lỗi 'Ảo tưởng hoàn hảo' (Ngộ nhận thế giới không có lỗi)",
    desc: "Trong thực tế, 70% nỗ lực lập trình và lỗi phần mềm phát sinh nằm ở các nhánh rẽ và ngoại lệ. Chỉ viết Happy Path là tự sát dự án!",
    antipatternText: "Normal Flow:\n1. Sinh viên đăng ký môn học.\n2. Hệ thống ghi nhận đăng ký thành công.\n(Hoàn toàn không có Alternate hay Exception Flows nào được ghi nhận!)",
    refactoredText: "Normal Flow: 1. SV chọn môn ➔ 2. Hệ thống xác thực ➔ 3. Ghi nhận thành công.\n\nAlternate Flow (2a): Môn học đầy chỗ ➔ Hệ thống đề xuất đưa vào Danh sách chờ.\nException Flow (2b): Sinh viên nợ học phí ➔ Hệ thống từ chối và hiển thị lý do vi phạm.",
    advice: "Mỗi use case bắt buộc phải tự vấn: 'Nếu mạng rớt thì sao? Nếu hết hàng thì sao? Nếu dữ liệu sai thì sao?' và bổ sung ít nhất 1 Alternate + 1 Exception Flow."
  },
  {
    id: "pit-4",
    num: "04",
    title: "Viết Brief Description quá chi tiết, Trùng lặp Fully-Dressed",
    subtitle: "Lỗi mất kiểm soát độ sâu thông tin ở giai đoạn sớm",
    desc: "Brief chỉ cần 2 – 4 câu tóm lược mục đích để duyệt phạm vi. Viết quá dài sẽ làm chậm tiến độ và gây lãng phí công sức khi yêu cầu còn thay đổi.",
    antipatternText: "Brief Description (Dài 12 dòng):\nBao gồm danh sách 10 bước chi tiết, mô tả cả thuật toán mã hóa mật khẩu SHA-256, cách tính thuế VAT 8% và giải thích 5 trường hợp lỗi mạng.",
    refactoredText: "Brief Description (3 câu chuẩn mực):\n'Thành viên tìm kiếm sách trong danh mục và gửi yêu cầu đặt trước cuốn sách hiện đang được mượn. Hệ thống xác nhận yêu cầu và cấp mã thứ tự giữ chỗ trong danh sách chờ. Khi sách được trả về, hệ thống sẽ tự động gửi thông báo cho thành viên để đến nhận.'",
    advice: "Giữ Brief ngắn gọn ở mức cao (High-level). Mọi chi tiết thuật toán và nhánh rẽ hãy để dành cho bản Fully-Dressed!"
  }
];

export default function UseCaseAuthoringPitfallsArena() {
  const [selectedPitfallId, setSelectedPitfallId] = useState("pit-1");
  const [showRefactored, setShowRefactored] = useState(false);

  const activePitfall = PITFALLS.find(p => p.id === selectedPitfallId) || PITFALLS[0];

  return (
    <div className="my-8 rounded-2xl border border-rose-200/80 bg-gradient-to-br from-[#faf8f4] via-white to-rose-50/30 p-6 md:p-8 shadow-xl shadow-rose-900/5 text-[#2c2a26]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-rose-200/60 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-100 text-rose-950 border border-rose-300/60 mb-2">
            <AlertTriangle className="w-3.5 h-3.5 text-rose-700" />
            Mục 5.7 — Common Mistakes in Use-Case Authoring
          </div>
          <h3 className="text-xl md:text-2xl font-black tracking-tight text-stone-900">
            Đấu trường Chẩn đoán 4 Sai lầm Chí mạng khi Viết Use Case
          </h3>
          <p className="text-sm text-stone-600 mt-1 max-w-2xl">
            Nhận diện các phản mẫu (Antipatterns) kinh điển khiến tài liệu đặc tả trở nên vô dụng hoặc gây hiểu lầm tai hại cho lập trình viên và kiểm thử viên.
          </p>
        </div>

        {/* Action Toggle */}
        <button
          onClick={() => setShowRefactored(!showRefactored)}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-xs self-start md:self-auto ${
            showRefactored
              ? "bg-emerald-600 text-white hover:bg-emerald-700"
              : "bg-rose-600 text-white hover:bg-rose-700"
          }`}
        >
          <RefreshCw className="w-3.5 h-3.5" />
          {showRefactored ? "Đang xem: Bản sửa Chuẩn mực (Click đổi)" : "Đang xem: Phản mẫu Lỗi sai (Click đổi)"}
        </button>
      </div>

      {/* 4 Pitfall Selector Ribbon */}
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2">
        {PITFALLS.map(p => {
          const isSelected = selectedPitfallId === p.id;
          return (
            <button
              key={p.id}
              onClick={() => setSelectedPitfallId(p.id)}
              className={`p-3 rounded-xl border text-left transition-all ${
                isSelected
                  ? "bg-white border-rose-500 ring-2 ring-rose-500/20 shadow-md font-bold"
                  : "bg-white/70 hover:bg-white border-stone-200 text-stone-700"
              }`}
            >
              <span className={`block font-mono text-[10px] font-black ${isSelected ? "text-rose-600" : "text-stone-400"}`}>
                LỖI #{p.num}
              </span>
              <h4 className="text-xs font-bold line-clamp-1 mt-0.5">{p.title.split(" (")[0]}</h4>
            </button>
          );
        })}
      </div>

      {/* Active Pitfall Deep Dive Card */}
      <div className="mt-6 p-6 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-100 pb-3">
          <div>
            <span className="text-[10px] font-bold text-rose-800 uppercase tracking-wider block">
              Sai lầm #{activePitfall.num}:
            </span>
            <h4 className="text-base font-black text-stone-900 mt-0.5">
              {activePitfall.title}
            </h4>
            <p className="text-xs text-stone-500">{activePitfall.subtitle}</p>
          </div>
          <span className="text-xs text-stone-600 bg-stone-50 px-3 py-1.5 rounded-lg border border-stone-200 self-start sm:self-auto">
            {activePitfall.desc}
          </span>
        </div>

        {/* Contrast Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Antipattern Box */}
          <div className={`p-4 rounded-xl border transition-all ${
            !showRefactored ? "bg-rose-50/80 border-rose-300 ring-2 ring-rose-400/20" : "bg-stone-50 border-stone-200 opacity-60"
          }`}>
            <div className="flex items-center gap-2 mb-2">
              <XCircle className="w-4 h-4 text-rose-600" />
              <strong className="text-xs text-rose-950 font-bold uppercase">
                Phản mẫu (Antipattern — Lỗi sai):
              </strong>
            </div>
            <pre className="font-mono text-xs text-stone-800 whitespace-pre-line leading-relaxed bg-white/80 p-3 rounded-lg border border-rose-200">
              {activePitfall.antipatternText}
            </pre>
          </div>

          {/* Refactored Box */}
          <div className={`p-4 rounded-xl border transition-all ${
            showRefactored ? "bg-emerald-50/80 border-emerald-300 ring-2 ring-emerald-400/20" : "bg-stone-50 border-stone-200 opacity-60"
          }`}>
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <strong className="text-xs text-emerald-950 font-bold uppercase">
                Bản sửa Chuẩn mực (Refactored — BA Pro):
              </strong>
            </div>
            <pre className="font-mono text-xs text-stone-800 whitespace-pre-line leading-relaxed bg-white/80 p-3 rounded-lg border border-emerald-200">
              {activePitfall.refactoredText}
            </pre>
          </div>
        </div>

        {/* Expert Advice Banner */}
        <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-950 flex items-start gap-2.5">
          <Sparkles className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold text-amber-900">Lời khuyên sư phạm:</strong> {activePitfall.advice}
          </div>
        </div>
      </div>
    </div>
  );
}
