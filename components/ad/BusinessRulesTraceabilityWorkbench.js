"use client";
import React, { useState } from "react";
import { 
  GitFork, 
  ShieldAlert, 
  CheckCircle2, 
  XCircle, 
  FileCode, 
  Sparkles, 
  Filter, 
  Search, 
  RefreshCw, 
  Layers, 
  Compass, 
  ArrowRight
} from "lucide-react";

const BUSINESS_RULES = [
  {
    id: "BR-01",
    category: "Eligibility",
    name: "Điều kiện tham gia Đăng ký học phần",
    statement: "Sinh viên chỉ được phép đăng ký môn học nếu không bị khóa học vụ và đã hoàn tất 100% nghĩa vụ học phí của học kỳ trước.",
    usedInUseCases: ["UC-07: Register for Course", "UC-08: Add to Waitlist"]
  },
  {
    id: "BR-04",
    category: "Validation limits",
    name: "Giới hạn số tín chỉ tối đa",
    statement: "Sinh viên không được đăng ký vượt quá 24 tín chỉ trong học kỳ chính hoặc 10 tín chỉ trong học kỳ hè, trừ trường hợp được Ban Giám hiệu phê duyệt ngoại lệ.",
    usedInUseCases: ["UC-07: Register for Course"]
  },
  {
    id: "BR-12",
    category: "Validation limits",
    name: "Giá trị đơn hàng tối thiểu",
    statement: "Tổng giá trị giỏ hàng trước thuế và phí vận chuyển phải đạt tối thiểu $10.00 để được phép tiến hành Checkout.",
    usedInUseCases: ["UC-12: Place Order", "UC-14: Apply Voucher"]
  },
  {
    id: "BR-15",
    category: "Calculations",
    name: "Công thức tính phí trả muộn sách",
    statement: "Tiền phạt trả sách trễ hạn được tính = 5,000 VNĐ x Số ngày quá hạn x Số cuốn sách. Tối đa không vượt quá giá bìa cuốn sách.",
    usedInUseCases: ["UC-20: Process Book Return", "UC-22: Calculate Fine"]
  },
  {
    id: "BR-21",
    category: "Authorization",
    name: "Thẩm quyền duyệt mở thêm lớp học phần",
    statement: "Chỉ Trưởng khoa hoặc Trưởng phòng Đào tạo mới có quyền cấp phép nâng sĩ số tối đa của lớp học phần vượt quá 10% công suất phòng.",
    usedInUseCases: ["UC-09: Approve Waitlist", "UC-11: Expand Course Capacity"]
  }
];

const CATEGORIES = ["All", "Validation limits", "Eligibility", "Calculations", "Authorization"];

export default function BusinessRulesTraceabilityWorkbench() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedRuleId, setSelectedRuleId] = useState("BR-12");
  const [architectureStyle, setArchitectureStyle] = useState("clean"); // "clean" | "polluted"

  const filteredRules = BUSINESS_RULES.filter(r => 
    selectedCategory === "All" || r.category === selectedCategory
  );

  const activeRule = BUSINESS_RULES.find(r => r.id === selectedRuleId) || BUSINESS_RULES[0];

  return (
    <div className="my-8 rounded-2xl border border-purple-200/80 bg-gradient-to-br from-[#faf8f4] via-white to-purple-50/30 p-6 md:p-8 shadow-xl shadow-purple-900/5 text-[#2c2a26]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-purple-200/60 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-100 text-purple-950 border border-purple-300/60 mb-2">
            <GitFork className="w-3.5 h-3.5 text-purple-700" />
            Mục 4.6 — Business Rules & Traceability Architecture
          </div>
          <h3 className="text-xl md:text-2xl font-black tracking-tight text-stone-900">
            Kiến trúc Tách biệt Quy tắc Nghiệp vụ (Decoupled Glossary)
          </h3>
          <p className="text-sm text-stone-600 mt-1 max-w-2xl">
            Không bao giờ nhét nguyên văn chính sách dài vào luồng Use Case! Hãy quản lý trong <strong>Glossary riêng biệt có đánh mã Rule ID</strong> để bảo đảm tính <strong>Truy vết (Traceability)</strong> và <strong>Tái sử dụng (Reusability)</strong>.
          </p>
        </div>

        {/* Style Comparison Switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-xl border border-stone-200 self-start md:self-auto text-xs">
          <button
            onClick={() => setArchitectureStyle("clean")}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              architectureStyle === "clean"
                ? "bg-purple-600 text-white shadow-xs"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            ✓ Chuẩn kiến trúc (Reference ID)
          </button>
          <button
            onClick={() => setArchitectureStyle("polluted")}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              architectureStyle === "polluted"
                ? "bg-rose-600 text-white shadow-xs"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            ✗ Phản mẫu (Nhét cứng Policy)
          </button>
        </div>
      </div>

      {/* Architecture Contrast Box */}
      <div className="mt-6 p-4 rounded-xl border transition-all">
        {architectureStyle === "clean" ? (
          <div className="bg-emerald-50/60 border border-emerald-200 p-4 rounded-xl space-y-2 text-xs text-emerald-950">
            <div className="flex items-center gap-2 font-bold text-emerald-900">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              Cách viết chuẩn BA chuyên nghiệp trong Normal Flow:
            </div>
            <code className="block p-2.5 rounded-lg bg-white border border-emerald-300 font-mono text-stone-800 text-xs shadow-xs">
              Step 3: System checks <strong className="text-purple-700 bg-purple-50 px-1 py-0.5 rounded border border-purple-200">BR-12</strong>. If valid, system calculates total amount.
            </code>
            <p className="text-[11px] text-emerald-800 leading-relaxed">
              ➔ <strong>Lợi ích tối thượng:</strong> Khi Ban Giám đốc đổi chính sách từ $10 sang $15, bạn chỉ cần sửa 1 dòng duy nhất tại <code>BR-12</code> trong Glossary, toàn bộ 5 use case liên quan tự động cập nhật mà không phải sửa lại từng tài liệu!
            </p>
          </div>
        ) : (
          <div className="bg-rose-50/60 border border-rose-200 p-4 rounded-xl space-y-2 text-xs text-rose-950">
            <div className="flex items-center gap-2 font-bold text-rose-900">
              <XCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
              Sai lầm kinh điển: Nhét toàn bộ văn bản chính sách vào từng bước của Use Case:
            </div>
            <div className="p-2.5 rounded-lg bg-white border border-rose-300 font-mono text-stone-800 text-[11px] opacity-80 line-through">
              Step 3: System checks that customer cart must have at least $10.00 excluding taxes and shipping, and customer must have verified email, and if under 18 years old must have guardian approval according to Decree No. 52...
            </div>
            <p className="text-[11px] text-rose-700 leading-relaxed">
              ➔ <strong>Hậu quả tai hại:</strong> Tài liệu trở nên rối rắm khó đọc. Khi chính sách thay đổi, nhóm BA phải mở từng use case ra tìm và sửa thủ công, rất dễ bỏ sót gây lỗi logic cho lập trình viên.
            </p>
          </div>
        )}
      </div>

      {/* Category Pills & Rules Grid */}
      <div className="mt-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-purple-600 text-white shadow-xs"
                    : "bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <span className="text-[11px] text-stone-400">
            Hiển thị {filteredRules.length} quy tắc trong Master Glossary
          </span>
        </div>

        {/* Rules Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredRules.map(rule => {
            const isSelected = selectedRuleId === rule.id;
            return (
              <button
                key={rule.id}
                onClick={() => setSelectedRuleId(rule.id)}
                className={`p-4 rounded-xl border text-left transition-all ${
                  isSelected
                    ? "bg-white border-purple-500 ring-2 ring-purple-500/20 shadow-md"
                    : "bg-white/70 hover:bg-white border-stone-200"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono font-black text-xs text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                    {rule.id}
                  </span>
                  <span className="text-[10px] font-bold text-stone-500 uppercase">
                    {rule.category}
                  </span>
                </div>
                <h4 className="font-bold text-xs text-stone-900 mt-1">{rule.name}</h4>
                <p className="text-[11px] text-stone-600 mt-1.5 line-clamp-2 leading-relaxed">
                  {rule.statement}
                </p>

                <div className="mt-3 pt-2 border-t border-stone-100 flex items-center justify-between text-[10px] text-stone-400">
                  <span>Tái sử dụng:</span>
                  <span className="font-semibold text-purple-800">{rule.usedInUseCases.length} use cases</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Rule Traceability Spotlight */}
        <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-xs space-y-2 text-xs">
          <div className="flex items-center justify-between border-b border-stone-100 pb-2">
            <span className="font-bold text-stone-900">
              Chi tiết quy tắc: <code className="text-purple-700 bg-purple-50 px-1 rounded">{activeRule.id} — {activeRule.name}</code>
            </span>
            <span className="text-[10px] font-bold uppercase text-stone-500 bg-stone-100 px-2 py-0.5 rounded">
              Phân loại: {activeRule.category}
            </span>
          </div>

          <p className="text-stone-700 leading-relaxed italic bg-stone-50 p-2.5 rounded-lg border border-stone-200">
            "{activeRule.statement}"
          </p>

          <div className="pt-1 flex flex-wrap items-center gap-2">
            <span className="font-bold text-stone-600">Được tham chiếu trực tiếp bởi:</span>
            {activeRule.usedInUseCases.map((uc, idx) => (
              <span key={idx} className="px-2 py-0.5 rounded bg-purple-50 text-purple-900 font-mono text-[11px] border border-purple-200">
                {uc}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
