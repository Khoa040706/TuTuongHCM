"use client";
import React, { useState } from "react";
import { 
  ClipboardCheck, 
  CheckSquare, 
  Square, 
  AlertCircle, 
  Sparkles, 
  Layers, 
  BookOpen, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";

const CHECKLIST_GROUPS = [
  {
    id: "requirements",
    title: "1. Requirements Management (Quản lý Yêu cầu)",
    badge: "Covered 100%",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
    items: [
      { id: "req-1", text: "Baseline, Scope statement, Vision và Initial requirements đã thống nhất", covered: true },
      { id: "req-2", text: "Xác định Stakeholders và quyền lợi/mối quan tâm liên quan (Interests)", covered: true },
      { id: "req-3", text: "Ghi nhận các Giả định (Assumptions) & Ràng buộc kỹ thuật (Constraints)", covered: true },
      { id: "req-4", text: "Đặc tả Hành vi chức năng (Functional behavior) thông qua Use Cases", covered: true },
      { id: "req-5", text: "Thu thập các Yêu cầu phi chức năng sơ khởi (Preliminary NFRs)", covered: true },
      { id: "req-6", text: "Từ điển Quy tắc nghiệp vụ độc lập (Business Rules Glossary)", covered: true }
    ]
  },
  {
    id: "usecase",
    title: "2. Use Case Modeling (Mô hình hóa Ca sử dụng)",
    badge: "Covered 100%",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
    items: [
      { id: "uc-1", text: "Tác nhân bên ngoài (Actor - Primary & Secondary)", covered: true },
      { id: "uc-2", text: "Ca sử dụng bên trong (Use Case - mang lại giá trị đo lường được)", covered: true },
      { id: "uc-3", text: "Ranh giới hộp chữ nhật (System Boundary)", covered: true },
      { id: "uc-4", text: "Đường liên kết tương tác (Association Line)", covered: true },
      { id: "uc-5", text: "Quan hệ tái sử dụng bắt buộc <<include>>", covered: true },
      { id: "uc-6", text: "Quan hệ biến thể tùy chọn <<extend>>", covered: true },
      { id: "uc-7", text: "Quan hệ kế thừa chuyên biệt hóa Generalization", covered: true },
      { id: "uc-8", text: "Điểm neo mở rộng định danh (Named Extension Points)", covered: true },
      { id: "uc-9", text: "3 Cấp độ đặc tả: Brief, Casual, Fully-Dressed Descriptions", covered: true }
    ]
  },
  {
    id: "uml",
    title: "3. UML / System Modeling (Mô hình hóa Hệ thống)",
    badge: "Partial Coverage",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-300",
    items: [
      { id: "uml-1", text: "Use-Case Diagram được trình bày và áp dụng xuyên suốt", covered: true },
      { id: "uml-2", text: "Class Diagram / Domain Model chỉ được nhắc để đối chiếu với Structural Analysis", covered: true },
      { id: "uml-3", text: "Sequence Diagram: Slide chương này KHÔNG trình bày chi tiết (Dành cho Chương sau)", covered: false },
      { id: "uml-4", text: "Activity Diagram: Slide chương này KHÔNG trình bày chi tiết (Dành cho Chương sau)", covered: false }
    ]
  },
  {
    id: "object",
    title: "4. Object / Class Modeling (Mô hình hóa Hướng đối tượng)",
    badge: "Ranh giới phạm vi",
    badgeColor: "bg-stone-200 text-stone-800 border-stone-300",
    items: [
      { id: "obj-1", text: "Slide này KHÔNG dạy chi tiết: Class, Object, Association, Aggregation, Composition, Inheritance", covered: false },
      { id: "obj-2", text: "Chỉ có liên hệ ngắn: Phân tích cấu trúc dẫn tới Domain Model / Kế thừa Use Case dùng mũi tên tam giác rỗng giống Class", covered: true }
    ]
  },
  {
    id: "design",
    title: "5. System Design Hand-off (Chuyển giao Thiết kế)",
    badge: "Pre-Design Focus",
    badgeColor: "bg-blue-100 text-blue-800 border-blue-300",
    items: [
      { id: "des-1", text: "Chương này tập trung ở bước TRƯỚC Design: Baseline ➔ Discovery ➔ Actors & Use Cases ➔ Diagram ➔ Descriptions ➔ Stakeholder Review", covered: true },
      { id: "des-2", text: "Triết lý cốt lõi: Thấu hiểu và cấu trúc Requirements/Behavior (WHAT) trước khi quyết định cách hệ thống được thiết kế/triển khai (HOW)", covered: true }
    ]
  }
];

export default function RequirementsDesignInteractiveChecklist() {
  const allInitialCovered = CHECKLIST_GROUPS.flatMap((g) => g.items.filter((i) => i.covered).map((i) => i.id));
  const [checkedIds, setCheckedIds] = useState(allInitialCovered);

  const toggleCheck = (id) => {
    if (checkedIds.includes(id)) {
      setCheckedIds(checkedIds.filter((item) => item !== id));
    } else {
      setCheckedIds([...checkedIds, id]);
    }
  };

  const totalItems = CHECKLIST_GROUPS.flatMap((g) => g.items).length;
  const currentChecked = checkedIds.length;
  const progressPercent = Math.round((currentChecked / totalItems) * 100);

  return (
    <div className="my-8 rounded-2xl border border-stone-200 bg-white p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between border-b border-stone-200 pb-5">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-stone-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-stone-800">
            <ClipboardCheck className="h-3.5 w-3.5" /> Mục 7.3: Slide Scope & Readiness Audit
          </div>
          <h3 className="mt-2 text-2xl font-bold text-stone-900">
            Bảng Kiểm Định Chuẩn Mực Requirements Analysis &amp; Design (Checklist Chuẩn Slide)
          </h3>
          <p className="text-sm text-stone-600">
            Khảo sát 5 phân hệ kiến thức, phân định ranh giới những gì Chapter 4 giải quyết và những nội dung dành cho các chương sau.
          </p>
        </div>

        {/* Readiness Meter */}
        <div className="rounded-xl border border-stone-200 bg-stone-50 p-3 min-w-[200px]">
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="font-bold text-stone-700">Chỉ số Sẵn sàng:</span>
            <span className="font-mono font-bold text-amber-600 text-sm">{progressPercent}%</span>
          </div>
          <div className="h-2 w-full rounded-full bg-stone-200 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-500 to-emerald-500 transition-all duration-300 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <span className="mt-1 text-[10px] text-stone-500 block text-right">
            {currentChecked}/{totalItems} mục hoàn tất
          </span>
        </div>
      </div>

      {/* Checklist Sections */}
      <div className="mt-6 space-y-6">
        {CHECKLIST_GROUPS.map((group) => (
          <div key={group.id} className="rounded-xl border border-stone-200 bg-stone-50/50 p-4">
            <div className="flex items-center justify-between border-b border-stone-200/80 pb-2.5 mb-3">
              <h4 className="text-sm font-bold text-stone-900 flex items-center gap-2">
                <Layers className="w-4 h-4 text-stone-600" />
                {group.title}
              </h4>
              <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${group.badgeColor}`}>
                {group.badge}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {group.items.map((item) => {
                const isChecked = checkedIds.includes(item.id);
                return (
                  <div
                    key={item.id}
                    onClick={() => toggleCheck(item.id)}
                    className={`flex items-start gap-2.5 p-2.5 rounded-lg border text-xs cursor-pointer transition-all ${
                      isChecked
                        ? "bg-white border-emerald-300 shadow-xs text-stone-900"
                        : "bg-white/60 border-stone-200 text-stone-500 opacity-75 hover:opacity-100"
                    }`}
                  >
                    <button className="mt-0.5 text-stone-400 hover:text-stone-600 shrink-0">
                      {isChecked ? (
                        <CheckSquare className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Square className="w-4 h-4 text-stone-400" />
                      )}
                    </button>
                    <span className={`leading-relaxed ${isChecked ? "font-medium" : ""}`}>
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Scope Warning Callout */}
      <div className="mt-6 rounded-xl border border-blue-200 bg-blue-50/80 p-4 text-xs text-blue-950 flex items-start gap-2.5">
        <BookOpen className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
        <div className="leading-relaxed">
          <strong className="text-blue-900">Lưu ý quan trọng về ranh giới phạm vi học phần:</strong> Slide Chapter 4 chỉ tập trung phân tích hành vi và làm cầu nối từ Business Requirements sang Use Case Model. Các sơ đồ tương tác động như <em>Sequence Diagram</em>, luồng công việc <em>Activity Diagram</em> và mô hình chi tiết <em>Class Diagram</em> sẽ được giảng dạy ở các chương kế tiếp.
        </div>
      </div>
    </div>
  );
}
