"use client";
import React, { useState } from "react";
import { 
  FileCheck, 
  Search, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Users, 
  ListOrdered, 
  GitBranch, 
  FileText,
  RotateCcw
} from "lucide-react";

const FIELDS = [
  {
    num: "1",
    id: "f-name",
    name: "Use-Case ID & Name",
    title: "Mã định danh & Tên ca sử dụng",
    badge: "Bắt buộc",
    syntax: "Mã duy nhất + Động từ + Danh từ (Verb-Noun)",
    explanation: "Định danh duy nhất trong toàn bộ hệ sinh thái tài liệu để dễ dàng truy vết và giao tiếp trong nhóm phát triển.",
    example: "UC-12 — Place Order (hoặc UC-07 — Register for Course)",
    pitfall: "Không đặt tên theo màn hình (VD: 'Order Screen') hay không có số ID định danh."
  },
  {
    num: "2",
    id: "f-actors",
    name: "Primary / Secondary Actors",
    title: "Tác nhân chính & Tác nhân phụ",
    badge: "Bắt buộc",
    syntax: "Chỉ rõ vai trò (Roles) tham gia",
    explanation: "Primary Actor là người khởi tạo (initiates) use case để nhận giá trị. Secondary Actor là người hoặc hệ thống hỗ trợ cung cấp dịch vụ trong quá trình xử lý.",
    example: "Primary Actor: Customer | Secondary Actor: Payment Gateway (External System)",
    pitfall: "Nhầm lẫn Secondary Actor là người khởi xướng use case."
  },
  {
    num: "3",
    id: "f-brief",
    name: "Brief Description",
    title: "Mô tả tóm tắt ngắn gọn",
    badge: "Tổng quan",
    syntax: "1 – 2 câu tóm lược mục đích",
    explanation: "Cung cấp cho người đọc (đặc biệt là lãnh đạo và nhà tài trợ) cái nhìn tổng thể nhanh chóng về giá trị mang lại mà không cần đọc hết 9 trang tài liệu.",
    example: "Khách hàng xác nhận giỏ hàng, nhập thông tin thanh toán và nhận số hóa đơn xác nhận đơn hàng thành công.",
    pitfall: "Viết quá dài dòng, lặp lại toàn bộ các bước của Normal Flow."
  },
  {
    num: "4",
    id: "f-trigger",
    name: "Trigger",
    title: "Tín hiệu kích hoạt",
    badge: "Khởi phát",
    syntax: "Sự kiện kích hoạt use case bắt đầu",
    explanation: "Biến cố hoặc hành động cụ thể đánh thức use case (External action, Timer chạm mốc, hoặc State condition).",
    example: "Customer clicks nút 'Checkout' trên giao diện giỏ hàng.",
    pitfall: "Ghi chung chung tên use case thay vì hành động/tín hiệu kích hoạt cụ thể."
  },
  {
    num: "5",
    id: "f-pre",
    name: "Preconditions",
    title: "Tiền điều kiện",
    badge: "Điều kiện cần",
    syntax: "Điều bắt buộc phải ĐÚNG trước khi bắt đầu",
    explanation: "Trạng thái của hệ thống hoặc dữ liệu bắt buộc phải thỏa mãn thì use case mới được phép thực thi.",
    example: "Giỏ hàng (Shopping cart) phải có ít nhất 1 sản phẩm và Khách hàng đã đăng nhập.",
    pitfall: "Ghi hành vi trong use case vào Precondition (VD: 'Khách hàng bấm nút' là bước chạy, không phải Precondition!)."
  },
  {
    num: "6",
    id: "f-post",
    name: "Postconditions",
    title: "Hậu điều kiện (Success Guarantee)",
    badge: "Bảo chứng thành công",
    syntax: "Điều bắt buộc phải ĐÚNG sau khi hoàn thành thành công",
    explanation: "Cam kết bền vững của dữ liệu và hệ thống khi luồng chính kết thúc thành công mỹ mãn.",
    example: "Đơn hàng được ghi nhận vào CSDL, số lượng tồn kho giảm tương ứng, và cấp mã xác nhận đơn hàng (Confirmation number).",
    pitfall: "Viết câu mơ hồ vô nghĩa như 'Hệ thống hoạt động tốt' hay 'Giao diện hiển thị đúng'."
  },
  {
    num: "7",
    id: "f-normal",
    name: "Normal Flow of Events",
    title: "Luồng sự kiện chính (Happy Path)",
    badge: "Cốt lõi",
    syntax: "Numbered steps, Luân phiên Actor ➔ System",
    explanation: "Kịch bản lý tưởng từng bước khi mọi việc trơn tru không lỗi. Viết theo cặp nhịp nhàng: Người dùng làm gì ➔ Hệ thống phản hồi gì.",
    example: "1. Customer confirms items\n2. System calculates total and taxes\n3. Customer submits payment\n4. System confirms order and displays invoice",
    pitfall: "Viết chỉ toàn hành động của người dùng mà không có phản hồi của hệ thống; hoặc nhét code SQL/UI layout."
  },
  {
    num: "8",
    id: "f-alt",
    name: "Alternate / Exception Flows",
    title: "Luồng rẽ nhánh & Ngoại lệ",
    badge: "Xử lý sự cố",
    syntax: "Đánh số tham chiếu đối ứng (VD: 3a, 3b)",
    explanation: "Alternate Flow: Biến thể hợp lệ rẽ nhánh nhưng vẫn có thể hoàn tất. Exception Flow: Lỗi khiến use case bị hủy bỏ/thất bại.",
    example: "Alternate (Tại step 3): Khách nhập mã giảm giá ➔ Hệ thống tính lại giá.\nException (Tại step 3): Thẻ bị từ chối ➔ Hệ thống yêu cầu phương thức thanh toán khác.",
    pitfall: "Bỏ quên Exception flows, ngộ nhận rằng người dùng sẽ không bao giờ thao tác sai."
  },
  {
    num: "9",
    id: "f-rules",
    name: "Business Rules & NFRs",
    title: "Quy tắc nghiệp vụ & Ghi chú phi chức năng",
    badge: "Tham chiếu",
    syntax: "Reference mã Rule ID (VD: BR-12)",
    explanation: "Tách bạch chính sách doanh nghiệp và ràng buộc phi chức năng (bảo mật, hiệu năng) khỏi luồng thực thi để dễ bảo trì.",
    example: "Tham chiếu BR-12: 'Đơn hàng phải đạt giá trị tối thiểu $10'.\nNFR: Quá trình xác thực thẻ phải hoàn tất dưới 3 giây.",
    pitfall: "Nhét toàn bộ văn bản chính sách dài 10 trang vào giữa bước số 3."
  }
];

export default function FullyDressedTemplateInteractiveStudio() {
  const [selectedFieldId, setSelectedFieldId] = useState("f-normal");
  const [viewMode, setViewMode] = useState("fields"); // "fields" | "worked-example"

  const activeField = FIELDS.find(f => f.id === selectedFieldId) || FIELDS[0];

  return (
    <div className="my-8 rounded-2xl border border-emerald-200/80 bg-gradient-to-br from-[#faf8f4] via-white to-emerald-50/30 p-6 md:p-8 shadow-xl shadow-emerald-900/5 text-[#2c2a26]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-200/60 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-950 border border-emerald-300/60 mb-2">
            <FileCheck className="w-3.5 h-3.5 text-emerald-700" />
            Mục 4.3 – 4.5 — Fully-Dressed Template & Worked Example
          </div>
          <h3 className="text-xl md:text-2xl font-black tracking-tight text-stone-900">
            Khám phá 9 Trường Tiêu chuẩn của Bản Đặc tả Fully-Dressed
          </h3>
          <p className="text-sm text-stone-600 mt-1 max-w-2xl">
            Bản đặc tả Fully-Dressed là tài liệu hợp đồng hành vi chính thức giữa BA, Khách hàng và Đội ngũ kỹ thuật với cấu trúc 9 trường nghiêm ngặt.
          </p>
        </div>

        {/* View Switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-xl border border-stone-200 self-start md:self-auto text-xs">
          <button
            onClick={() => setViewMode("fields")}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              viewMode === "fields"
                ? "bg-emerald-600 text-white shadow-xs"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Soi kính lúp 9 Fields
          </button>
          <button
            onClick={() => setViewMode("worked-example")}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              viewMode === "worked-example"
                ? "bg-stone-900 text-white shadow-xs"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Worked Example (Place Order)
          </button>
        </div>
      </div>

      {/* Mode 1: 9 Fields Deep Dive Inspector */}
      {viewMode === "fields" && (
        <div className="mt-6 space-y-6">
          {/* 9 Field Pills */}
          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-1.5">
            {FIELDS.map(f => {
              const isSelected = selectedFieldId === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => setSelectedFieldId(f.id)}
                  className={`p-2 rounded-xl border text-center transition-all ${
                    isSelected
                      ? "bg-emerald-600 text-white border-emerald-600 shadow-md font-bold scale-[1.02]"
                      : "bg-white/80 hover:bg-white text-stone-700 border-stone-200"
                  }`}
                >
                  <span className={`block font-mono text-[10px] font-black ${isSelected ? "text-white/80" : "text-stone-400"}`}>
                    #{f.num}
                  </span>
                  <span className="text-[11px] line-clamp-1">{f.name.split(" ")[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Active Field Detail Inspector */}
          <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-100 pb-3">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-black text-sm font-mono flex-shrink-0">
                  #{activeField.num}
                </span>
                <div>
                  <h4 className="text-base font-black text-stone-900">
                    {activeField.name} — <span className="text-emerald-800">{activeField.title}</span>
                  </h4>
                  <span className="text-[11px] font-semibold text-stone-500">
                    Quy chuẩn cú pháp: <code className="bg-stone-100 px-1.5 py-0.5 rounded text-stone-800">{activeField.syntax}</code>
                  </span>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 self-start sm:self-auto">
                {activeField.badge}
              </span>
            </div>

            <p className="text-xs text-stone-700 leading-relaxed">
              {activeField.explanation}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-xs">
                <strong className="block text-stone-900 mb-1">📌 Ví dụ mẫu chuẩn mực:</strong>
                <pre className="font-mono text-stone-800 text-[11px] whitespace-pre-line bg-white p-2.5 rounded-lg border border-stone-200">
                  {activeField.example}
                </pre>
              </div>

              <div className="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200 text-xs text-rose-950">
                <strong className="block text-rose-900 mb-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 text-rose-600" />
                  Bẫy đề thi & Sai lầm cần tránh:
                </strong>
                <p className="leading-relaxed">{activeField.pitfall}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mode 2: Worked Example "Place Order" */}
      {viewMode === "worked-example" && (
        <div className="mt-6 space-y-4">
          <div className="p-3.5 rounded-xl bg-stone-100 border border-stone-200 text-xs flex items-center justify-between gap-3">
            <span className="font-bold text-stone-800">
              Worked Example: <code className="bg-white px-1.5 py-0.5 rounded border">UC-12 — Place Order</code> (Trích xuất nguyên văn slide 22)
            </span>
            <span className="text-[11px] text-stone-500">Mẫu biểu chuẩn 9 trường bàn giao</span>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white overflow-hidden shadow-xs divide-y divide-stone-100 text-xs">
            <div className="p-3.5 flex flex-col sm:flex-row sm:items-center gap-2 bg-stone-50/80">
              <span className="w-44 font-extrabold text-stone-900">1. Use-Case ID & Name</span>
              <span className="font-mono font-bold text-emerald-800">UC-12 — Place Order</span>
            </div>

            <div className="p-3.5 flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="w-44 font-extrabold text-stone-900">2. Primary Actor</span>
              <span className="text-stone-700">Customer (Khách hàng)</span>
            </div>

            <div className="p-3.5 flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="w-44 font-extrabold text-stone-900">3. Trigger</span>
              <span className="text-stone-700">Customer clicks "Checkout" trên giỏ hàng</span>
            </div>

            <div className="p-3.5 flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="w-44 font-extrabold text-stone-900">4. Precondition</span>
              <span className="text-stone-700 font-medium text-amber-900 bg-amber-50 px-2 py-0.5 rounded">
                Shopping cart contains at least one item
              </span>
            </div>

            <div className="p-3.5 flex flex-col sm:flex-row sm:items-start gap-2">
              <span className="w-44 font-extrabold text-stone-900 mt-1">5. Normal Flow</span>
              <div className="flex-1 space-y-1 bg-stone-50 p-2.5 rounded-lg border border-stone-200 font-mono text-[11px]">
                <div>1. Customer confirms items in shopping cart.</div>
                <div>2. System calculates total amount, shipping fees, and taxes.</div>
                <div>3. Customer submits payment information.</div>
                <div>4. System confirms order and displays confirmation number.</div>
              </div>
            </div>

            <div className="p-3.5 flex flex-col sm:flex-row sm:items-start gap-2 bg-blue-50/30">
              <span className="w-44 font-extrabold text-blue-950 mt-0.5">6. Alternate Flow</span>
              <div className="flex-1 text-blue-900">
                <strong>Tại step 3:</strong> Customer applies a discount code ➔ System verifies code, updates total amount, and returns to step 3.
              </div>
            </div>

            <div className="p-3.5 flex flex-col sm:flex-row sm:items-start gap-2 bg-rose-50/30">
              <span className="w-44 font-extrabold text-rose-950 mt-0.5">7. Exception Flow</span>
              <div className="flex-1 text-rose-900">
                <strong>Tại step 3:</strong> Payment is declined ➔ System displays error message and prompts for another payment method.
              </div>
            </div>

            <div className="p-3.5 flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="w-44 font-extrabold text-stone-900">8. Postcondition</span>
              <span className="text-stone-700 font-medium text-emerald-900 bg-emerald-50 px-2 py-0.5 rounded">
                Order được ghi nhận bền vững và confirmation number được cấp cho khách hàng.
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
