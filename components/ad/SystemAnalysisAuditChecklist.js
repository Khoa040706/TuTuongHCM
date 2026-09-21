"use client";
import React, { useState, useMemo } from "react";
import { 
  CheckSquare, 
  CheckCircle2, 
  Award, 
  RotateCcw, 
  ShieldCheck, 
  Sparkles, 
  Filter, 
  AlertCircle,
  HelpCircle,
  ChevronDown,
  ChevronUp
} from "lucide-react";

const CHECKLIST_ITEMS = [
  // Stage 1: Business Events (4 criteria)
  {
    id: "chk-1",
    stage: "Events",
    stageName: "Giai đoạn 1: Business Events",
    title: "1. Phát hiện sự kiện từ thế giới thực (Real-world focus)",
    desc: "Các sự kiện nghiệp vụ được tìm thấy dựa trên khảo sát chu trình công việc thực tế ngoài đời, không bị trói buộc bởi giao diện phần mềm hay cấu trúc bảng CSDL.",
    criticalLevel: "High"
  },
  {
    id: "chk-2",
    stage: "Events",
    stageName: "Giai đoạn 1: Business Events",
    title: "2. Bao quát đủ cả 3 loại sự kiện (External, Temporal, State)",
    desc: "Đã rà soát kỹ lưỡng và không bỏ sót sự kiện thời gian (Temporal - ví dụ đến nửa đêm đóng cổng) hoặc sự kiện trạng thái (State - ví dụ hết chỗ, hết hàng).",
    criticalLevel: "High"
  },
  {
    id: "chk-3",
    stage: "Events",
    stageName: "Giai đoạn 1: Business Events",
    title: "3. Lập Bảng Sự kiện chuẩn chỉnh 6 cột (Event Table)",
    desc: "Mọi sự kiện đều được phân tích đủ 6 thuộc tính: Event | Trigger | Source | Use Case | Response | Destination.",
    criticalLevel: "Medium"
  },
  {
    id: "chk-4",
    stage: "Events",
    stageName: "Giai đoạn 1: Business Events",
    title: "4. Tách bạch Trigger khỏi Sự kiện (Distinct Trigger)",
    desc: "Trigger mô tả rõ dạng thức tín hiệu đến biên giới (HTTP request, Timer interrupt, Status flag) chứ không chỉ lặp lại tên sự kiện.",
    criticalLevel: "Medium"
  },

  // Stage 2: Actor Identification (3 criteria)
  {
    id: "chk-5",
    stage: "Actors",
    stageName: "Giai đoạn 2: Actor Identification",
    title: "5. Actor đại diện cho Vai trò (Roles, not individuals)",
    desc: "Các Actor được đặt tên theo vai trò người dùng (Student, Registrar, Administrator) thay vì tên người cụ thể (Nguyễn Văn A) hay chức danh cá nhân.",
    criticalLevel: "High"
  },
  {
    id: "chk-6",
    stage: "Actors",
    stageName: "Giai đoạn 2: Actor Identification",
    title: "6. Nhận diện cả External Systems & Devices",
    desc: "Các hệ thống bên thứ ba (Cổng thanh toán, Ngân hàng, CSDL quốc gia) và thiết bị phần cứng (Máy quét mã vạch, Cảm biến) được mô hình hóa thành Actor nếu chúng tương tác trực tiếp.",
    criticalLevel: "Medium"
  },
  {
    id: "chk-7",
    stage: "Actors",
    stageName: "Giai đoạn 2: Actor Identification",
    title: "7. Phân biệt rõ Primary Actor và Secondary Actor",
    desc: "Xác định rõ ai là tác nhân chính chủ động khởi xướng và ai là tác nhân hỗ trợ cung cấp dịch vụ hoặc tiếp nhận đầu ra của Use Case.",
    criticalLevel: "Medium"
  },

  // Stage 3: Use Case Formulation (3 criteria)
  {
    id: "chk-8",
    stage: "Use Cases",
    stageName: "Giai đoạn 3: Use Case Formulation",
    title: "8. Áp dụng nghiêm ngặt nguyên tắc 1 Sự kiện : 1 Use Case",
    desc: "Mỗi sự kiện nghiệp vụ tương ứng đúng 1 ca sử dụng hệ thống. Không gộp nhiều sự kiện thành một use case khổng lồ và không băm nhỏ 1 sự kiện thành nhiều use case vụn vặt.",
    criticalLevel: "High"
  },
  {
    id: "chk-9",
    stage: "Use Cases",
    stageName: "Giai đoạn 3: Use Case Formulation",
    title: "9. Quy tắc đặt tên Động từ + Danh từ (Verb + Noun)",
    desc: "Tất cả Use Case đều bắt đầu bằng ngoại động từ hành động kèm bổ ngữ có nghĩa (VD: 'Register for Courses', 'Calculate Tuition Fee').",
    criticalLevel: "High"
  },
  {
    id: "chk-10",
    stage: "Use Cases",
    stageName: "Giai đoạn 3: Use Case Formulation",
    title: "10. Không đặt tên theo Màn hình giao diện (No UI Naming)",
    desc: "Loại bỏ hoàn toàn các tên kiểu màn hình như 'Login Form', 'Course Screen', 'Student Menu'. Use case phải phản ánh mục tiêu nghiệp vụ.",
    criticalLevel: "High"
  },

  // Stage 4: Boundary & Relationships (3 criteria)
  {
    id: "chk-11",
    stage: "Boundary & UML",
    stageName: "Giai đoạn 4: System Boundary & Relations",
    title: "11. Xác lập Ranh giới hệ thống chuẩn xác (System Boundary)",
    desc: "Vẽ hộp chữ nhật bao bọc toàn bộ Use Cases bên trong và đặt 100% Actors ở bên ngoài đường ranh giới.",
    criticalLevel: "High"
  },
  {
    id: "chk-12",
    stage: "Boundary & UML",
    stageName: "Giai đoạn 4: System Boundary & Relations",
    title: "12. Sử dụng <<include>> đúng bản chất bắt buộc",
    desc: "Chỉ áp dụng <<include>> cho các hành vi chung luôn luôn được thực thi trong mọi lần chạy của Use Case cơ sở (Mũi tên Base ➔ Included).",
    criticalLevel: "High"
  },
  {
    id: "chk-13",
    stage: "Boundary & UML",
    stageName: "Giai đoạn 4: System Boundary & Relations",
    title: "13. Sử dụng <<extend>> đúng bản chất điều kiện & đúng hướng mũi tên",
    desc: "Chỉ áp dụng <<extend>> cho các hành vi tùy chọn/ngoại lệ khi thỏa mãn Extension Point; Mũi tên chỉ ngược từ Extension ➔ Base.",
    criticalLevel: "High"
  },

  // Stage 5: Description & Quality (3 criteria)
  {
    id: "chk-14",
    stage: "Specs",
    stageName: "Giai đoạn 5: Description & Quality",
    title: "14. Mô tả đầy đủ Preconditions và Postconditions",
    desc: "Xác định rõ trạng thái bắt buộc của hệ thống trước khi bắt đầu và những cam kết dữ liệu được lưu bền vững sau khi hoàn tất thành công.",
    criticalLevel: "Medium"
  },
  {
    id: "chk-15",
    stage: "Specs",
    stageName: "Giai đoạn 5: Description & Quality",
    title: "15. Xây dựng Luồng chính (Happy Path) và Luồng rẽ nhánh (Alternate)",
    desc: "Kịch bản tương tác từng bước mô tả rõ hành vi Actor và phản hồi của Hệ thống, có các bước nhánh rẽ xử lý lỗi tương ứng.",
    criticalLevel: "Medium"
  },
  {
    id: "chk-16",
    stage: "Specs",
    stageName: "Giai đoạn 5: Description & Quality",
    title: "16. Kiểm định & Xác nhận với Stakeholders (Validation)",
    desc: "Mô hình Use Case và đặc tả kịch bản đã được rà soát, đối chiếu và ký duyệt cùng người dùng doanh nghiệp trước khi chuyển sang pha Elaboration.",
    criticalLevel: "High"
  }
];

const STAGE_FILTERS = ["All", "Events", "Actors", "Use Cases", "Boundary & UML", "Specs"];

export default function SystemAnalysisAuditChecklist() {
  const [checkedIds, setCheckedIds] = useState(new Set(["chk-1", "chk-2", "chk-8", "chk-9"]));
  const [selectedStage, setSelectedStage] = useState("All");

  const toggleCheck = (id) => {
    setCheckedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleSelectAll = () => {
    setCheckedIds(new Set(CHECKLIST_ITEMS.map(i => i.id)));
  };

  const handleReset = () => {
    setCheckedIds(new Set());
  };

  const totalCount = CHECKLIST_ITEMS.length;
  const completedCount = checkedIds.size;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  // Evaluation rank based on progress
  const evaluationRank = useMemo(() => {
    if (progressPercent === 100) return { title: "Lead Systems Architect ⭐⭐⭐", color: "text-emerald-700 bg-emerald-100 border-emerald-300", desc: "Mô hình Use Case hoàn hảo! Đạt chuẩn công nghiệp quốc tế và sẵn sàng chuyển giao cho pha Elaboration." };
    if (progressPercent >= 75) return { title: "Senior Business Analyst ⭐⭐", color: "text-blue-700 bg-blue-100 border-blue-300", desc: "Hệ thống đáp ứng xuất sắc hầu hết tiêu chuẩn kiểm định. Hãy hoàn tất vài mục chi tiết còn lại." };
    if (progressPercent >= 50) return { title: "Practitioner BA ⭐", color: "text-amber-700 bg-amber-100 border-amber-300", desc: "Nền tảng khá tốt nhưng còn tiềm ẩn rủi ro thiếu sót sự kiện thời gian/trạng thái hoặc nhầm quan hệ UML." };
    return { title: "Novice Analyst ⚠️", color: "text-rose-700 bg-rose-100 border-rose-300", desc: "Cần rà soát kỹ lưỡng lại từ khâu phát hiện sự kiện và đặt tên Use Case theo chuẩn Chapter 3." };
  }, [progressPercent]);

  const filteredItems = useMemo(() => {
    if (selectedStage === "All") return CHECKLIST_ITEMS;
    return CHECKLIST_ITEMS.filter(i => i.stage === selectedStage);
  }, [selectedStage]);

  return (
    <div className="my-8 rounded-2xl border border-stone-200/80 bg-white p-6 md:p-8 shadow-xl shadow-stone-900/5 text-[#2c2a26]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-200 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-stone-100 text-stone-700 border border-stone-200 mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            Mục 7.6 — Kiểm định chất lượng hệ thống
          </div>
          <h3 className="text-xl md:text-2xl font-black tracking-tight text-stone-900">
            System Analysis 16-Point Audit Checklist
          </h3>
          <p className="text-sm text-stone-600 mt-1 max-w-2xl">
            Bảng kiểm nghiệm 16 tiêu chuẩn vàng dành cho chuyên viên BA/SA để bảo đảm Mô hình Use Case và Bảng sự kiện không mắc phải bất kỳ lỗi thiết kế nào.
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleSelectAll}
            className="px-3 py-1.5 rounded-lg text-xs font-bold bg-stone-100 hover:bg-stone-200 text-stone-700 transition-all border border-stone-200"
          >
            Đánh dấu tất cả
          </button>
          <button
            onClick={handleReset}
            className="px-3 py-1.5 rounded-lg text-xs font-bold bg-white hover:bg-stone-50 text-stone-600 transition-all border border-stone-200 flex items-center gap-1"
          >
            <RotateCcw className="w-3 h-3" />
            Reset
          </button>
        </div>
      </div>

      {/* Progress & Evaluation Card */}
      <div className="mt-6 p-5 rounded-xl bg-stone-50 border border-stone-200/80 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">Tiến độ kiểm định</span>
            <div className="text-2xl font-black text-stone-900">
              {completedCount} <span className="text-stone-400 text-base font-normal">/ {totalCount} tiêu chuẩn</span> ({progressPercent}%)
            </div>
          </div>

          {/* Badge */}
          <div className={`px-4 py-2 rounded-xl border text-xs font-bold flex items-center gap-2 self-start sm:self-auto ${evaluationRank.color}`}>
            <Award className="w-4 h-4 flex-shrink-0" />
            <div>
              <div>{evaluationRank.title}</div>
              <div className="font-normal text-[11px] opacity-90">{evaluationRank.desc}</div>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-stone-200 rounded-full h-3 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-amber-500 to-emerald-500 h-full rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Stage Filters */}
      <div className="mt-6 flex flex-wrap gap-1.5">
        {STAGE_FILTERS.map(stg => (
          <button
            key={stg}
            onClick={() => setSelectedStage(stg)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              selectedStage === stg
                ? "bg-stone-900 text-white shadow-sm"
                : "bg-stone-100 hover:bg-stone-200/80 text-stone-700 border border-stone-200"
            }`}
          >
            {stg === "All" ? "Tất cả 5 giai đoạn (16)" : stg}
          </button>
        ))}
      </div>

      {/* Checklist Grid */}
      <div className="mt-5 space-y-3">
        {filteredItems.map(item => {
          const isChecked = checkedIds.has(item.id);
          return (
            <div
              key={item.id}
              onClick={() => toggleCheck(item.id)}
              className={`cursor-pointer p-4 rounded-xl border transition-all duration-150 flex items-start gap-3.5 ${
                isChecked
                  ? "bg-emerald-50/40 border-emerald-300/80 shadow-sm"
                  : "bg-white hover:bg-stone-50/80 border-stone-200"
              }`}
            >
              {/* Checkbox */}
              <div className={`mt-0.5 w-5 h-5 rounded-md border flex items-center justify-center flex-shrink-0 transition-colors ${
                isChecked 
                  ? "bg-emerald-600 border-emerald-600 text-white" 
                  : "border-stone-300 bg-white"
              }`}>
                {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-stone-100 text-stone-600 border border-stone-200">
                    {item.stageName}
                  </span>
                  {item.criticalLevel === "High" && (
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-rose-50 text-rose-700 border border-rose-200">
                      Bắt buộc
                    </span>
                  )}
                </div>
                <h4 className={`text-sm font-bold transition-colors ${
                  isChecked ? "text-stone-900 line-through opacity-80" : "text-stone-900"
                }`}>
                  {item.title}
                </h4>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
