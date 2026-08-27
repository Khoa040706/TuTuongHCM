"use client";
import React, { useState } from "react";
import { 
  Users, 
  Cpu, 
  ArrowRight, 
  ArrowLeft, 
  RefreshCw, 
  FileCode, 
  CheckCircle2, 
  MessageSquare, 
  Sparkles, 
  HelpCircle,
  ShieldCheck,
  Send
} from "lucide-react";

export default function BaBridgeSimulator() {
  const [selectedScenario, setSelectedScenario] = useState(0);
  const [translationStep, setTranslationStep] = useState("all"); // "all" | "biz" | "ba" | "tech"

  const scenarios = [
    {
      id: "checkout",
      title: "Kịch bản 1: Mua hàng & Giảm giá E-commerce",
      businessRaw: "Khách hàng thân thiết VIP của tôi phàn nàn là mua đơn hàng lớn trên 1 triệu nhưng không thấy tự động giảm giá 10% như lời hứa!",
      baInvestigation: [
        "Xác định ai là đối tượng 'Khách hàng VIP' (Điểm tích lũy >= 500 điểm).",
        "Làm rõ điều kiện áp dụng: Đơn hàng >= 1.000.000 VNĐ, không áp dụng đồng thời với mã voucher khác.",
        "Quy tắc nghiệp vụ: Giảm tối đa 200.000 VNĐ / đơn hàng."
      ],
      techSpecification: {
        apiEndpoint: "POST /api/v1/cart/apply-vip-discount",
        rules: "IF User.Tier == 'VIP' AND Cart.Total >= 1000000 THEN Discount = MIN(Cart.Total * 0.10, 200000)",
        acceptanceCriteria: "Giao diện hiển thị badge 'Giảm giá VIP: -100.000đ' trước khi nhấn nút Thanh toán."
      },
      qaValidation: "Tester viết Test Cases: Kiểm tra đơn 999.000đ (không giảm), đơn 1.500.000đ (giảm 150.000đ), đơn 3.000.000đ (giảm kịch trần 200.000đ)."
    },
    {
      id: "leave-request",
      title: "Kịch bản 2: Quy trình Phê duyệt Nghỉ phép HR",
      businessRaw: "Nhân viên muốn xin nghỉ phép nhanh trên điện thoại, sếp duyệt ngay và kế toán tự động trừ ngày phép cuối năm.",
      baInvestigation: [
        "Xác định luồng duyệt: Nghỉ 1-2 ngày do Trưởng phòng duyệt; Nghỉ > 3 ngày cần thêm Giám đốc khối.",
        "Xử lý ngoại lệ: Nếu số ngày phép còn lại < số ngày xin nghỉ -> Chuyển thành nghỉ không lương.",
        "Mô hình hóa Activity Diagram cho luồng phê duyệt đa cấp."
      ],
      techSpecification: {
        apiEndpoint: "POST /api/v1/hr/leave-requests",
        rules: "State Machine: DRAFT -> SUBMITTED -> MANAGER_APPROVED -> DIRECTOR_APPROVED -> COMPLETED",
        acceptanceCriteria: "Gửi thông báo Push Notification cho Trưởng phòng ngay khi nhân viên bấm gửi đơn."
      },
      qaValidation: "Tester kiểm tra luồng từ chối đơn (Rejected), luồng duyệt vượt cấp và tính toán số dư phép năm."
    },
    {
      id: "atm-withdrawal",
      title: "Kịch bản 3: Rút tiền ATM Ngân hàng",
      businessRaw: "Cần đảm bảo khách hàng rút tiền tại cây ATM không bao giờ bị trừ tiền nếu máy nhả tiền gặp sự cố kẹt tiền.",
      baInvestigation: [
        "Yêu cầu phi chức năng (NFR): Tính nguyên tố giao dịch (Atomicity - All or Nothing).",
        "Ràng buộc an toàn: Khóa giao dịch trong thời gian tối đa 30 giây, quá thời gian tự động Rollback.",
        "Ghi log kiểm toán (Audit Trail) để đối soát với camera và khay tiền vật lý."
      ],
      techSpecification: {
        apiEndpoint: "POST /api/v1/banking/atm-dispense",
        rules: "BEGIN TRANSACTION; DeductAccount(); IF Dispenser.Status == OK THEN COMMIT; ELSE ROLLBACK;",
        acceptanceCriteria: "Tài khoản giữ nguyên số dư nếu cảm biến đếm tiền báo lỗi kẹt cơ học."
      },
      qaValidation: "Kiểm thử giả lập ngắt nguồn điện đột ngột tại thời điểm máy bắt đầu đếm tiền."
    }
  ];

  const current = scenarios[selectedScenario];

  return (
    <div className="w-full my-8 bg-slate-900 border border-slate-700/80 rounded-2xl p-5 sm:p-7 shadow-xl text-slate-100">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
            <MessageSquare className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              Studio: BA as a Bridge Simulator (Cầu Nối 3 Bên)
            </h2>
            <p className="text-xs text-slate-400">
              Trực quan hóa quá trình BA điều tra, làm rõ và chuyển đổi nhu cầu kinh doanh mơ hồ thành đặc tả kỹ thuật chuẩn mực.
            </p>
          </div>
        </div>

        {/* Scenario Selector */}
        <div className="flex flex-wrap gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800">
          {scenarios.map((sc, idx) => (
            <button
              key={sc.id}
              onClick={() => setSelectedScenario(idx)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedScenario === idx
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {sc.title.split(":")[0]}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-400" />
          {current.title}
        </h3>
      </div>

      {/* 3-Party Bridge Interactive Visualizer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch mb-6">
        {/* Party 1: Business Stakeholders */}
        <div className="lg:col-span-4 rounded-2xl p-5 bg-amber-950/30 border border-amber-500/40 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-amber-400 font-extrabold text-sm">
                <Users className="w-4 h-4" /> 1. Business Stakeholder
              </div>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-amber-900/60 text-amber-200 border border-amber-700">
                Nhu cầu bài toán
              </span>
            </div>
            <p className="text-xs text-slate-400 mb-2 font-medium">Ngôn ngữ kinh doanh (Thường mơ hồ, chưa có ràng buộc):</p>
            <div className="p-3.5 rounded-xl bg-slate-950 border border-amber-500/30 text-xs sm:text-sm text-amber-200/90 italic leading-relaxed">
              &quot;{current.businessRaw}&quot;
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-amber-900/50 text-[11px] text-amber-400/80">
            👉 <strong>Vấn đề:</strong> Cần BA điều tra các điều kiện biên, số tiền tối thiểu, quyền lợi VIP.
          </div>
        </div>

        {/* Party 2: Business Analyst (The Bridge Center) */}
        <div className="lg:col-span-4 rounded-2xl p-5 bg-gradient-to-b from-indigo-950/60 to-purple-950/60 border-2 border-indigo-400 shadow-xl shadow-indigo-950/50 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-indigo-300 font-extrabold text-sm">
                <Sparkles className="w-4 h-4 text-amber-400 animate-spin-slow" /> 2. BA (The Bridge)
              </div>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-indigo-900 text-indigo-200 border border-indigo-700">
                Điều tra & Làm rõ
              </span>
            </div>
            <p className="text-xs text-indigo-300 mb-2 font-medium">Hoạt động bóc tách & Cấu trúc hóa yêu cầu:</p>
            <ul className="space-y-2 text-xs text-slate-200">
              {current.baInvestigation.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-slate-950/80 p-2.5 rounded-xl border border-indigo-900/60">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4 pt-3 border-t border-indigo-800/60 text-[11px] text-indigo-300">
            ⚡ <strong>Vai trò cầu nối:</strong> Thống nhất yêu cầu 2 chiều và soạn thảo SRS testable.
          </div>
        </div>

        {/* Party 3: Development / IT Team */}
        <div className="lg:col-span-4 rounded-2xl p-5 bg-cyan-950/30 border border-cyan-500/40 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-cyan-400 font-extrabold text-sm">
                <Cpu className="w-4 h-4" /> 3. Development & QA Team
              </div>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-cyan-900/60 text-cyan-200 border border-cyan-700">
                Hiện thực hóa
              </span>
            </div>
            <p className="text-xs text-slate-400 mb-2 font-medium">Đặc tả kỹ thuật & Tiêu chí nghiệm thu (SRS):</p>
            <div className="p-3 rounded-xl bg-slate-950 border border-cyan-500/30 font-mono text-[11px] space-y-2 text-slate-200">
              <div>
                <span className="text-cyan-400 font-bold block">Logic / Rule:</span>
                <span className="text-emerald-300">{current.techSpecification.rules}</span>
              </div>
              <div>
                <span className="text-amber-400 font-bold block">Acceptance Criteria:</span>
                <span className="text-slate-300">{current.techSpecification.acceptanceCriteria}</span>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-cyan-900/50 text-[11px] text-cyan-300/80">
            🔍 <strong>QA Validation:</strong> {current.qaValidation}
          </div>
        </div>
      </div>

      {/* Summary Footer */}
      <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>
            <strong>Kết luận:</strong> Nếu không có BA làm cầu nối, Developer dễ hiểu sai nhu cầu kinh doanh, dẫn đến phần mềm viết ra nhưng không ai dùng được!
          </span>
        </div>
      </div>
    </div>
  );
}
