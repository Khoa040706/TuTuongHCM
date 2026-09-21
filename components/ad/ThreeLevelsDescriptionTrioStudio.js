"use client";
import React, { useState } from "react";
import { 
  Layers, 
  FileText, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  Sliders, 
  BookOpen, 
  Target, 
  ShieldCheck,
  ChevronRight
} from "lucide-react";

const LEVELS = [
  {
    id: "brief",
    name: "1. Brief Description",
    levelTitle: "Mức Tóm tắt (Đoạn văn ngắn)",
    depthPercent: 25,
    color: "amber",
    format: "1 đoạn văn ngắn (2 – 4 câu)",
    purpose: "Dùng sớm trong pha Inception để xác nhận phạm vi (Scope confirmation) và lướt qua kịch bản (Walkthrough).",
    leadDesignTesting: "KHÔNG ĐỦ SÂU — Tuyệt đối không thể dùng một mình để lập trình chi tiết hay viết test cases.",
    exampleContent: {
      title: "Use Case: Register for Course (Brief)",
      text: "Sinh viên chọn các lớp học phần mở từ danh mục và gửi yêu cầu đăng ký. Hệ thống kiểm tra điều kiện tiên quyết (eligibility) và số chỗ còn trống (seat availability). Nếu hợp lệ, hệ thống ghi nhận đăng ký thành công và gửi thông báo xác nhận cho sinh viên."
    },
    keyTakeaway: "Chỉ tập trung vào Luồng hạnh phúc (Main success path), không rườm rà."
  },
  {
    id: "casual",
    name: "2. Casual (Informal)",
    levelTitle: "Mức Bán cấu trúc (Vài đoạn văn linh hoạt)",
    depthPercent: 60,
    color: "blue",
    format: "Vài đoạn văn tự do, không quá cứng nhắc",
    purpose: "Dùng để khảo sát sâu hơn các tình huống thực tế, làm rõ các kịch bản phụ trong giai đoạn đầu Discovery.",
    leadDesignTesting: "CÓ THỂ DẪN DẮT MỘT PHẦN — Bắt đầu phác thảo các nhánh rẽ nhưng chưa chặt chẽ về mặt kiểm thử.",
    exampleContent: {
      title: "Use Case: Register for Course (Casual)",
      text: "Sinh viên đăng nhập vào cổng thông tin và duyệt danh mục môn học. Sinh viên chọn lớp học phần mong muốn rồi gửi yêu cầu đăng ký. Hệ thống tiến hành kiểm tra môn tiên quyết và số chỗ trống của lớp.\n\n• Nếu hợp lệ: Sinh viên được ghi danh vào lớp thành công.\n• Nếu lớp đã đầy chỗ (Course full): Hệ thống hiển thị đề xuất đưa sinh viên vào Danh sách chờ (Waitlist).\n• Nếu không thỏa mãn môn tiên quyết: Yêu cầu bị từ chối và hệ thống thông báo rõ lý do vi phạm."
    },
    keyTakeaway: "Đã xuất hiện các kịch bản nhánh rẽ (Alternatives) nhưng chưa đánh số và chưa có template biểu mẫu cứng."
  },
  {
    id: "fully-dressed",
    name: "3. Fully Dressed (Formal)",
    levelTitle: "Mức Toàn diện (Biểu mẫu chuẩn 9 trường)",
    depthPercent: 100,
    color: "emerald",
    format: "Template 9 fields có cấu trúc nghiêm ngặt",
    purpose: "Là tài liệu hợp đồng cốt tử bàn giao cho đội ngũ Developer viết code và QA/Tester thiết kế bộ Test Cases hoàn chỉnh.",
    leadDesignTesting: "CHUẨN CÔNG NGHIỆP — Bao phủ toàn diện: Actors, Trigger, Pre/Postconditions, Normal flow, Alternate/Exceptions, Business rules, NFRs.",
    exampleContent: {
      title: "Use Case: UC-07 — Register for Course (Fully Dressed Summary)",
      text: "• Use-Case ID & Name: UC-07 — Register for Course\n• Primary Actor: Student | Trigger: Student clicks 'Register'\n• Preconditions: Student logged in, tuition fee cleared\n• Postconditions: Student enrolled, seat count decreased by 1\n• Normal Flow: 1. Student selects offerings ➔ 2. System verifies eligibility ➔ 3. System checks capacity ➔ 4. System confirms enrollment\n• Alternate Flow (3a): Course full ➔ Offer waitlist\n• Exception Flow (2a): Prerequisites unmet ➔ Reject with reason\n• Business Rules: References BR-04, BR-12"
    },
    keyTakeaway: "Cấu trúc hóa luân phiên từng bước, xác lập cam kết bảo đảm thành công và quản lý ngoại lệ toàn diện."
  }
];

export default function ThreeLevelsDescriptionTrioStudio() {
  const [activeLevelId, setActiveLevelId] = useState("brief");
  const activeLevel = LEVELS.find(l => l.id === activeLevelId) || LEVELS[0];

  return (
    <div className="my-8 rounded-2xl border border-amber-200/80 bg-gradient-to-br from-[#faf8f4] via-white to-amber-50/40 p-6 md:p-8 shadow-xl shadow-amber-900/5 text-[#2c2a26]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-amber-200/60 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-950 border border-amber-300/60 mb-2">
            <Layers className="w-3.5 h-3.5 text-amber-700" />
            Mục 4.1 & 4.2 — Three Levels of Use-Case Description
          </div>
          <h3 className="text-xl md:text-2xl font-black tracking-tight text-stone-900">
            Trình duyệt 3 Cấp độ Mô tả Use Case: Brief ➔ Casual ➔ Fully Dressed
          </h3>
          <p className="text-sm text-stone-600 mt-1 max-w-2xl">
            Tùy thuộc vào giai đoạn dự án và mức độ phức tạp, chuyên viên phân tích sẽ chọn mức độ mô tả phù hợp: từ tóm tắt nhanh phạm vi đến văn bản đặc tả chuẩn công nghiệp.
          </p>
        </div>

        {/* Level Tabs */}
        <div className="flex flex-wrap gap-1 p-1 bg-stone-100 rounded-xl border border-stone-200 self-start md:self-auto text-xs">
          {LEVELS.map(l => (
            <button
              key={l.id}
              onClick={() => setActiveLevelId(l.id)}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                activeLevelId === l.id
                  ? "bg-amber-600 text-white shadow-xs"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              {l.name.split(". ")[1]}
            </button>
          ))}
        </div>
      </div>

      {/* Information Depth Meter */}
      <div className="mt-6 p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
        <div className="flex items-center justify-between text-xs font-bold">
          <span className="text-stone-700 uppercase tracking-wider flex items-center gap-1.5">
            <Sliders className="w-3.5 h-3.5 text-amber-600" />
            Độ sâu chi tiết thông tin (Information Depth Meter):
          </span>
          <span className="text-amber-800 font-mono text-sm">{activeLevel.depthPercent}%</span>
        </div>
        <div className="w-full bg-stone-200 rounded-full h-2.5 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-amber-500 to-emerald-600 rounded-full transition-all duration-300"
            style={{ width: `${activeLevel.depthPercent}%` }}
          />
        </div>
      </div>

      {/* Active Level Spotlight Card */}
      <div className="mt-6 p-6 rounded-2xl bg-white border border-stone-200 shadow-md space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-100 pb-3">
          <div>
            <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-amber-100 text-amber-900">
              {activeLevel.name}
            </span>
            <h4 className="text-lg font-black text-stone-900 mt-1">
              {activeLevel.levelTitle}
            </h4>
          </div>
          <div className="text-xs font-bold text-amber-900 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200 self-start sm:self-auto">
            💡 {activeLevel.keyTakeaway}
          </div>
        </div>

        {/* Characteristics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
            <strong className="block text-stone-900 mb-1">📐 Hình thức trình bày:</strong>
            <span className="text-stone-600">{activeLevel.format}</span>
          </div>
          <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
            <strong className="block text-stone-900 mb-1">🎯 Mục đích sử dụng chính:</strong>
            <span className="text-stone-600">{activeLevel.purpose}</span>
          </div>
          <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
            <strong className="block text-stone-900 mb-1">⚙️ Dẫn dắt Design & Test?</strong>
            <span className="text-stone-600 font-medium">{activeLevel.leadDesignTesting}</span>
          </div>
        </div>

        {/* Real-world Example Box */}
        <div className="space-y-2">
          <span className="text-xs font-bold text-stone-700 flex items-center gap-1.5">
            <FileText className="w-4 h-4 text-amber-600" />
            Minh họa văn bản thực tế cho ca sử dụng <em>Register for Course</em>:
          </span>
          <div className="p-4 rounded-xl bg-stone-900 text-stone-100 font-mono text-xs leading-relaxed whitespace-pre-line border border-stone-800 shadow-inner">
            {activeLevel.exampleContent.text}
          </div>
        </div>
      </div>

      {/* Comparison Synthesis Table */}
      <div className="mt-6 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-xs">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-stone-100/80 border-b border-stone-200 text-stone-700 font-bold">
              <th className="p-3">Mức độ</th>
              <th className="p-3">Độ dài & Định dạng</th>
              <th className="p-3">Nội dung bao phủ</th>
              <th className="p-3">Thời điểm áp dụng</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            <tr className={activeLevelId === "brief" ? "bg-amber-50/40 font-semibold" : ""}>
              <td className="p-3 font-bold text-stone-900">1. Brief</td>
              <td className="p-3 text-stone-600">1 đoạn ngắn (2-4 câu)</td>
              <td className="p-3 text-stone-600">Chỉ Main Success Path</td>
              <td className="p-3 text-stone-600">Inception, Walkthrough sơ khởi</td>
            </tr>
            <tr className={activeLevelId === "casual" ? "bg-blue-50/40 font-semibold" : ""}>
              <td className="p-3 font-bold text-stone-900">2. Casual</td>
              <td className="p-3 text-stone-600">Vài đoạn văn tự do</td>
              <td className="p-3 text-stone-600">Nhiều scenarios, alternatives sơ bộ</td>
              <td className="p-3 text-stone-600">Early Discovery, thảo luận người dùng</td>
            </tr>
            <tr className={activeLevelId === "fully-dressed" ? "bg-emerald-50/40 font-semibold" : ""}>
              <td className="p-3 font-bold text-stone-900">3. Fully Dressed</td>
              <td className="p-3 text-stone-600">Template 9 fields chuẩn</td>
              <td className="p-3 text-stone-600">Đầy đủ Pre/Post, Flows, Exceptions, Rules</td>
              <td className="p-3 text-stone-600">Elaboration, chuyển giao Dev & Test</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
