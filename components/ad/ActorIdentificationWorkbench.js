"use client";
import React, { useState } from "react";
import { 
  Users, 
  HelpCircle, 
  ShieldAlert, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Table, 
  Clock, 
  Server, 
  FileText, 
  Filter,
  Check
} from "lucide-react";

const GUIDELINE_QUESTIONS = [
  {
    id: "q1",
    num: "1",
    question: "Who triggers each event?",
    vietnamese: "Ai hoặc cái gì khởi tạo từng sự kiện?",
    action: "Soi từng dòng trong Event Table ở cột Trigger & Source để tìm người bấm máy hoặc châm ngòi.",
    relatedActors: ["Student", "Instructor", "System Clock"]
  },
  {
    id: "q2",
    num: "2",
    question: "Who needs info from the system?",
    vietnamese: "Ai cần nhận thông tin từ hệ thống?",
    action: "Tìm các role nhận Reports, Confirmations, Notifications (ở cột Destination).",
    relatedActors: ["Registrar", "Student"]
  },
  {
    id: "q3",
    num: "3",
    question: "Who maintains system data?",
    vietnamese: "Ai quản trị và duy trì dữ liệu hệ thống?",
    action: "Tìm các role quản trị (Admin/Clerk) phụ trách Create, Update, Archive danh mục và cấu hình.",
    relatedActors: ["System Administrator", "Registrar"]
  },
  {
    id: "q4",
    num: "4",
    question: "What external systems interact with us?",
    vietnamese: "Hệ thống ngoại vi nào tương tác kết nối?",
    action: "Tìm các Payment processors (Cổng thanh toán), Partner systems, Hardware sensors.",
    relatedActors: ["Payment Gateway", "Core Banking API"]
  },
  {
    id: "q5",
    num: "5",
    question: "Does the clock trigger anything?",
    vietnamese: "Đồng hồ thời gian có tự kích hoạt gì không?",
    action: "Nếu có Temporal Event, xem Time / System Clock như một tác nhân kích hoạt tự động theo lịch.",
    relatedActors: ["System Clock"]
  },
  {
    id: "q6",
    num: "6",
    question: "Avoid Over-Splitting Rule",
    vietnamese: "Quy tắc sống còn: Tránh chia nhỏ vai trò quá mức",
    action: "Tuyệt đối không chia actor thành Clerk 1, Clerk 2. Chỉ tách khi cách họ tương tác thực sự khác nhau.",
    relatedActors: ["Tất cả Roles"]
  }
];

const DERIVATION_ROWS = [
  {
    id: "d1",
    event: "Student wants to register",
    source: "Student",
    actor: "Student",
    actorType: "Primary Business Actor",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
    reason: "Sinh viên là chủ thể khởi tạo nhu cầu và là người thụ hưởng trực tiếp kết quả được ghi danh vào lớp học phần."
  },
  {
    id: "d2",
    event: "Registration period opens",
    source: "System Clock",
    actor: "System Clock (Time)",
    actorType: "Temporal Trigger Actor",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-300",
    reason: "Đến đúng 08:00 sáng ngày mở cổng, đồng hồ hệ thống tự kích hoạt Use Case mà không cần con người can thiệp."
  },
  {
    id: "d3",
    event: "Payment is submitted",
    source: "Payment Gateway",
    actor: "Payment Gateway",
    actorType: "External Server Actor",
    badgeColor: "bg-blue-100 text-blue-800 border-blue-300",
    reason: "Hệ thống ngân hàng/ví điện tử đối tác phản hồi kết quả xác thực thanh toán tiền học phí theo thời gian thực."
  },
  {
    id: "d4",
    event: "Instructor submits grades",
    source: "Instructor",
    actor: "Instructor",
    actorType: "Primary Business Actor",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
    reason: "Giảng viên chủ động nộp bảng điểm tổng kết môn học để hoàn tất trách nhiệm đào tạo của giảng viên."
  },
  {
    id: "d5",
    event: "Transcript sent to Registrar",
    source: "Registrar",
    actor: "Registrar (Phòng Đào Tạo)",
    actorType: "External Receiver Actor",
    badgeColor: "bg-purple-100 text-purple-800 border-purple-300",
    reason: "Phòng đào tạo thụ động tiếp nhận bảng điểm đã khóa để lưu vào hồ sơ lưu trữ chính thức của nhà trường."
  }
];

export default function ActorIdentificationWorkbench() {
  const [activeQuestionId, setActiveQuestionId] = useState("q1");
  const [selectedRowId, setSelectedRowId] = useState("d1");

  const activeQuestion = GUIDELINE_QUESTIONS.find(q => q.id === activeQuestionId) || GUIDELINE_QUESTIONS[0];

  return (
    <div className="my-8 rounded-2xl border border-stone-200 bg-white p-5 sm:p-7 shadow-sm">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800 border border-emerald-200">
            <Users className="w-3.5 h-3.5" />
            Mục 4.3 & 4.4 • Actor Derivation Workbench
          </span>
          <h4 className="mt-1.5 text-lg sm:text-xl font-bold text-stone-900">
            Bàn Làm Việc: Suy Diễn Tác Nhân Từ Bảng Event Table
          </h4>
          <p className="text-xs sm:text-sm text-stone-600">
            Ứng dụng 6 câu hỏi định vị chiến lược để suy diễn chính xác Actor và chống cạm bẫy chia nhỏ vai trò.
          </p>
        </div>
      </div>

      {/* 6 Diagnostic Guidelines Tabs */}
      <div className="mt-5">
        <div className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2 flex items-center gap-1.5">
          <HelpCircle className="w-3.5 h-3.5 text-emerald-700" />
          6 Câu Hỏi Định Vị Actor Của BA (Bấm Từng Câu Hỏi Để Xem Phương Pháp):
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {GUIDELINE_QUESTIONS.map((q) => {
            const isActive = q.id === activeQuestionId;
            return (
              <button
                key={q.id}
                onClick={() => setActiveQuestionId(q.id)}
                className={`p-2.5 rounded-xl border text-left transition-all ${
                  isActive 
                    ? "bg-stone-900 text-white border-stone-900 shadow-sm font-bold scale-[1.02]" 
                    : "bg-stone-50 border-stone-200 text-stone-700 hover:border-stone-300"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${isActive ? "bg-stone-700 text-white" : "bg-stone-200 text-stone-700"}`}>
                    #{q.num}
                  </span>
                </div>
                <div className="text-xs font-bold line-clamp-1">{q.question}</div>
              </button>
            );
          })}
        </div>

        {/* Selected Guideline Banner */}
        <div className="mt-3 rounded-xl border border-stone-200 bg-stone-50 p-4">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
            <h5 className="text-sm font-bold text-stone-900">
              Câu hỏi #{activeQuestion.num}: {activeQuestion.question}
            </h5>
            <span className="text-xs text-stone-500 italic">{activeQuestion.vietnamese}</span>
          </div>
          <p className="text-xs text-stone-700 font-medium leading-relaxed">
            <span className="text-emerald-800 font-bold">Hành động của BA: </span>
            {activeQuestion.action}
          </p>
        </div>
      </div>

      {/* Avoid Over-splitting Golden Callout */}
      <div className="mt-5 rounded-xl border-2 border-rose-300 bg-rose-50/70 p-4">
        <div className="flex items-start gap-2.5">
          <ShieldAlert className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
          <div className="text-xs text-rose-950">
            <div className="font-bold text-sm text-rose-900 mb-1">
              Cảnh Báo Sống Còn: Tuyệt Đối Tránh Chia Nhỏ Vai Trò Quá Mức (Avoid Over-splitting)
            </div>
            <p className="leading-relaxed mb-1.5">
              Không chia Actor thành quá nhiều role gần giống nhau chỉ vì họ ngồi ở các phòng ban khác nhau hoặc có chức vụ khác nhau.
            </p>
            <div className="bg-white/80 p-2 rounded-lg border border-rose-200 font-medium">
              <span className="text-rose-700 font-bold">Ví dụ sai: </span>
              Tạo ra các Actor: <code>Registration Clerk 1</code>, <code>Registration Clerk 2</code>, <code>Senior Clerk</code>, <code>Junior Clerk</code>.
              <br />
              <span className="text-emerald-700 font-bold">Cách làm chuẩn: </span>
              Chỉ tạo duy nhất một Actor là <code>Registration Clerk</code>. Chỉ tách vai trò khi và chỉ khi cách họ tương tác với Use Case của hệ thống là <strong>thực sự khác biệt về nghiệp vụ</strong>!
            </div>
          </div>
        </div>
      </div>

      {/* Main Derivation Table (5 rows from textbook) */}
      <div className="mt-6 rounded-xl border border-stone-200 overflow-hidden shadow-xs">
        <div className="p-3 bg-stone-100 border-b border-stone-200 flex items-center justify-between">
          <span className="text-xs font-bold text-stone-800 uppercase tracking-wider flex items-center gap-1.5">
            <Table className="w-4 h-4 text-emerald-700" />
            Bảng Suy Diễn Actor Từ Event Table (Course Registration Case Study)
          </span>
          <span className="text-[11px] text-stone-500 font-mono">5 dòng chuẩn hóa</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-stone-50 text-stone-700 border-b border-stone-200">
                <th className="p-3 font-bold">Event (Tên sự kiện)</th>
                <th className="p-3 font-bold">Source (Khởi phát)</th>
                <th className="p-3 font-bold text-emerald-900 bg-emerald-50/50">Actor Được Suy Ra</th>
                <th className="p-3 font-bold">Phân Loại Actor Chuẩn</th>
                <th className="p-3 font-bold">Lý Do Suy Diễn (BA Rationale)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 text-stone-800">
              {DERIVATION_ROWS.map((row) => {
                const isSelected = row.id === selectedRowId;
                return (
                  <tr 
                    key={row.id}
                    onClick={() => setSelectedRowId(row.id)}
                    className={`cursor-pointer transition-colors ${
                      isSelected ? "bg-emerald-50/40" : "hover:bg-stone-50"
                    }`}
                  >
                    <td className="p-3 font-bold text-stone-900">{row.event}</td>
                    <td className="p-3 font-mono text-stone-600">{row.source}</td>
                    <td className="p-3 font-bold text-emerald-900 bg-emerald-50/30">
                      <span className="underline decoration-emerald-500 underline-offset-2">
                        {row.actor}
                      </span>
                    </td>
                    <td className="p-3">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${row.badgeColor}`}>
                        {row.actorType}
                      </span>
                    </td>
                    <td className="p-3 text-stone-700 leading-relaxed max-w-xs">{row.reason}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
