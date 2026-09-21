"use client";
import React, { useState } from "react";
import { 
  Users, 
  UserCheck, 
  Server, 
  Inbox, 
  HelpCircle, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  ShieldAlert, 
  Sparkles,
  Zap,
  Laptop,
  Award
} from "lucide-react";

const ACTOR_TYPES = [
  {
    id: "primary-business",
    name: "1. Primary Business Actor",
    vietnameseName: "Tác Nhân Nghiệp Vụ Chính (Người Thụ Hưởng)",
    icon: Award,
    color: "emerald",
    badgeClass: "bg-emerald-100 text-emerald-800 border-emerald-300",
    borderClass: "border-emerald-500",
    bgClass: "bg-emerald-50/50",
    definition: "Người hoặc vai trò hưởng lợi trực tiếp từ kết quả (Measurable Value) mà Use Case đem lại.",
    characteristics: [
      "Là chủ thể có mục tiêu kinh doanh (Business Goal) cần đạt được.",
      "Không nhất thiết phải trực tiếp chạm vào bàn phím máy tính.",
      "Hệ thống tồn tại là để phục vụ lợi ích của nhóm tác nhân này."
    ],
    example: "Sinh viên (Student) trong ca sử dụng 'Register for Course' — Sinh viên là người nhận kết quả được vào lớp học phần.",
    examTip: "Câu hỏi thi kinh điển: Khi nhân viên nhập liệu hộ khách hàng, khách hàng vẫn là Primary Business Actor!"
  },
  {
    id: "primary-system",
    name: "2. Primary System Actor",
    vietnameseName: "Tác Nhân Hệ Thống Trực Tiếp (Người Thao Tác)",
    icon: Laptop,
    color: "blue",
    badgeClass: "bg-blue-100 text-blue-800 border-blue-300",
    borderClass: "border-blue-500",
    bgClass: "bg-blue-50/50",
    definition: "Vai trò trực tiếp tương tác vật lý (nhập dữ liệu, bấm chuột, quẹt thẻ) với giao diện hệ thống để khởi tạo sự kiện.",
    characteristics: [
      "Ngồi trước màn hình thao tác hoặc vận hành thiết bị đầu cuối.",
      "Có thể là chính người thụ hưởng (khi tự thao tác trên Web/App).",
      "Hoặc là nhân viên trung gian thao tác thay mặt cho người thụ hưởng."
    ],
    example: "Nhân viên đào tạo (Registration Clerk) nhập dữ liệu đơn đăng ký giấy vào máy tính giúp sinh viên.",
    examTip: "Nếu người dùng tự đăng ký online tại nhà: Người dùng vừa là Primary Business Actor, vừa là Primary System Actor!"
  },
  {
    id: "external-server",
    name: "3. External Server Actor",
    vietnameseName: "Hệ Thống Phục Vụ Ngoại Vi (Cung Cấp Dịch Vụ)",
    icon: Server,
    color: "amber",
    badgeClass: "bg-amber-100 text-amber-800 border-amber-300",
    borderClass: "border-amber-500",
    bgClass: "bg-amber-50/50",
    definition: "Hệ thống hoặc vai trò bên ngoài phản hồi lại các yêu cầu (Request) từ hệ thống đang chạy trong lúc Use Case diễn ra.",
    characteristics: [
      "Đóng vai trò máy chủ hỗ trợ (Supporting Service) hoặc bên thứ 3.",
      "Phản hồi kết quả để Use Case của hệ thống ta có thể hoàn thành.",
      "Giao tiếp thông qua API, Webhook, hoặc mạng viễn thông."
    ],
    example: "Cổng thanh toán (Payment Gateway - VNPay/Momo) xử lý và trả về mã xác thực giao dịch học phí.",
    examTip: "Phân biệt: External Server không tự ý khởi phát Use Case, mà nó chỉ phản hồi khi hệ thống ta 'gọi' sang nó."
  },
  {
    id: "external-receiver",
    name: "4. External Receiver Actor",
    vietnameseName: "Hệ Thống Tiếp Nhận Ngoại Vi (Thụ Động Nhận Tin)",
    icon: Inbox,
    color: "purple",
    badgeClass: "bg-purple-100 text-purple-800 border-purple-300",
    borderClass: "border-purple-500",
    bgClass: "bg-purple-50/50",
    definition: "Tác nhân bên ngoài nhận thông tin đầu ra từ hệ thống nhưng không trực tiếp gửi yêu cầu đòi hỏi output đó.",
    characteristics: [
      "Nhận dữ liệu thụ động (Passive Consumer) vào cuối tiến trình.",
      "Không can thiệp vào luồng xử lý chính của Use Case.",
      "Thường là cơ quan quản lý, hệ thống kế toán, hoặc kho lưu trữ."
    ],
    example: "Hệ thống Kế toán (Accounting System) tự động nhận phiếu ghi nợ học phí từ hệ thống Đăng ký học phần.",
    examTip: "Nếu một bên ngoài chỉ nhận email thông báo hoặc dữ liệu đồng bộ mà không gửi lại phản hồi xử lý, đó là External Receiver!"
  }
];

export default function FourActorTypesRadarStudio() {
  const [selectedTypeId, setSelectedTypeId] = useState("primary-business");
  const [showDuelModal, setShowDuelModal] = useState(false);

  const selectedType = ACTOR_TYPES.find(t => t.id === selectedTypeId) || ACTOR_TYPES[0];

  return (
    <div className="my-8 rounded-2xl border border-stone-200 bg-white p-5 sm:p-7 shadow-sm">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-800 border border-blue-200">
            <Users className="w-3.5 h-3.5" />
            Mục 4.1 & 4.2 • Actor Taxonomy Studio
          </span>
          <h4 className="mt-1.5 text-lg sm:text-xl font-bold text-stone-900">
            Bản Chất Actor Là Role & Phân Loại 4 Nhóm Actor Cốt Lõi
          </h4>
          <p className="text-xs sm:text-sm text-stone-600">
            Khám phá 4 loại tác nhân chuẩn quốc tế và phân biệt rạch ròi giữa người thụ hưởng và người bấm máy.
          </p>
        </div>

        {/* Duel Button */}
        <button
          onClick={() => setShowDuelModal(!showDuelModal)}
          className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-stone-900 hover:bg-emerald-700 text-white flex items-center gap-1.5 transition-all shadow-xs"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          {showDuelModal ? "Đóng So Sánh Đối Đầu" : "Đối Đầu: Business vs System Actor"}
        </button>
      </div>

      {/* 3 Golden Rules Bar */}
      <div className="mt-5 rounded-xl bg-stone-100 p-3.5 border border-stone-200">
        <div className="text-[11px] font-bold uppercase tracking-wider text-stone-600 mb-2 flex items-center gap-1.5">
          <Zap className="w-3.5 h-3.5 text-emerald-700" />
          3 Nguyên Tắc Vàng Về Bản Chất Của Actor (Bắt Buộc Thuộc Lòng):
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
          <div className="bg-white p-3 rounded-lg border border-stone-200">
            <div className="font-bold text-stone-900 mb-0.5">1. Actor là Role (Vai trò)</div>
            <p className="text-stone-600">Không phải người cụ thể. Đặt là <code className="text-emerald-700 font-bold">Customer</code>, tuyệt đối không đặt tên cá nhân <code className="text-rose-600 font-semibold">"John Smith"</code>.</p>
          </div>
          <div className="bg-white p-3 rounded-lg border border-stone-200">
            <div className="font-bold text-stone-900 mb-0.5">2. Một Người Đóng Nhiều Roles</div>
            <p className="text-stone-600">Một cá nhân ngoài đời có thể vừa đóng vai trò <code className="text-blue-700 font-bold">Instructor</code> vừa là <code className="text-blue-700 font-bold">Student</code> ở hai use case khác nhau.</p>
          </div>
          <div className="bg-white p-3 rounded-lg border border-stone-200">
            <div className="font-bold text-stone-900 mb-0.5">3. Nhiều Người Chia Sẻ 1 Role</div>
            <p className="text-stone-600">Hàng ngàn sinh viên trong trường đều chia sẻ chung một vai trò duy nhất trên sơ đồ là <code className="text-emerald-700 font-bold">Student</code>.</p>
          </div>
        </div>
      </div>

      {/* Special Comparison Box: Business Actor vs System Actor */}
      {showDuelModal && (
        <div className="mt-5 rounded-xl border-2 border-amber-400 bg-amber-50/60 p-4 sm:p-5 shadow-sm animate-fadeIn">
          <div className="flex items-center justify-between border-b border-amber-200 pb-2.5 mb-3">
            <div className="flex items-center gap-2">
              <span className="p-1 rounded bg-amber-600 text-white">
                <Award className="w-4 h-4" />
              </span>
              <h5 className="text-sm sm:text-base font-bold text-amber-950">
                Tình Huống Đối Đầu Kinh Điển: Primary Business vs Primary System Actor
              </h5>
            </div>
            <span className="text-xs font-bold text-amber-800 bg-amber-200 px-2 py-0.5 rounded">
              Trọng Tâm Đi Thi
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="bg-white p-3.5 rounded-xl border border-amber-200">
              <div className="font-bold text-emerald-800 text-sm mb-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Trường hợp 1: Đăng ký tại quầy giao dịch
              </div>
              <p className="text-stone-700 leading-relaxed mb-2">
                Sinh viên điền phiếu đăng ký giấy và nộp tại bàn. Nhân viên phòng đào tạo (Clerk) ngồi trước máy tính gõ thông tin vào hệ thống:
              </p>
              <div className="space-y-1 bg-stone-50 p-2.5 rounded-lg border border-stone-200 font-medium">
                <div>• <span className="text-emerald-800 font-bold">Student:</span> Là <strong>Primary Business Actor</strong> (vì là người hưởng lợi kết quả được đăng ký lớp).</div>
                <div>• <span className="text-blue-800 font-bold">Clerk:</span> Là <strong>Primary System Actor</strong> (vì là người trực tiếp gõ phím thao tác).</div>
              </div>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-amber-200">
              <div className="font-bold text-blue-800 text-sm mb-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                Trường hợp 2: Sinh viên tự đăng ký qua Web Portal
              </div>
              <p className="text-stone-700 leading-relaxed mb-2">
                Sinh viên mở laptop cá nhân tại nhà, đăng nhập tài khoản và tự mình bấm nút đăng ký các môn học:
              </p>
              <div className="space-y-1 bg-stone-50 p-2.5 rounded-lg border border-stone-200 font-medium">
                <div>• <span className="text-emerald-800 font-bold">Student:</span> Vừa là <strong>Primary Business Actor</strong> (thụ hưởng kết quả).</div>
                <div>• <span className="text-blue-800 font-bold">Student:</span> Đồng thời cũng là <strong>Primary System Actor</strong> (trực tiếp thao tác trên web)!</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4-Quadrant Visualizer Buttons */}
      <div className="mt-6">
        <div className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
          Không Gian 4 Loại Tác Nhân (Click Để Khảo Sát Đặc Trưng):
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {ACTOR_TYPES.map((type) => {
            const Icon = type.icon;
            const isSelected = type.id === selectedTypeId;
            return (
              <button
                key={type.id}
                onClick={() => setSelectedTypeId(type.id)}
                className={`p-4 rounded-xl border text-left transition-all duration-200 ${
                  isSelected 
                    ? `${type.bgClass} ${type.borderClass} border-2 shadow-sm scale-[1.02]` 
                    : "bg-stone-50 border-stone-200 hover:border-stone-300 text-stone-700"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <Icon className={`w-5 h-5 ${isSelected ? "text-stone-900" : "text-stone-400"}`} />
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${type.badgeClass}`}>
                    Loại #{type.id.split("-")[0]}
                  </span>
                </div>
                <div className="font-bold text-sm text-stone-900 line-clamp-1">{type.name}</div>
                <div className="text-[11px] text-stone-500 mt-0.5 line-clamp-1">{type.vietnameseName.split("(")[1]?.replace(")", "") || type.vietnameseName}</div>
              </button>
            );
          })}
        </div>

        {/* Selected Type Inspector */}
        <div className="mt-5 rounded-xl border border-stone-200 bg-white p-5 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3 mb-3">
            <div>
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${selectedType.badgeClass}`}>
                {selectedType.name}
              </span>
              <h5 className="text-base font-bold text-stone-900 mt-1">
                {selectedType.vietnameseName}
              </h5>
            </div>
            <span className="text-xs font-mono text-stone-500">Actor Profile Detail</span>
          </div>

          <p className="text-sm font-medium text-stone-800 mb-4 bg-stone-50 p-3 rounded-lg border border-stone-200">
            {selectedType.definition}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs mb-3">
            <div className="bg-stone-50/60 p-3.5 rounded-xl border border-stone-200">
              <div className="font-bold text-stone-900 mb-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Đặc điểm nhận dạng:
              </div>
              <ul className="space-y-1.5 text-stone-700">
                {selectedType.characteristics.map((char, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-1.5 shrink-0" />
                    <span>{char}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-emerald-50/60 p-3.5 rounded-xl border border-emerald-200 flex flex-col justify-between">
              <div>
                <div className="font-bold text-emerald-900 mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  Ví dụ thực tế (Course Registration):
                </div>
                <p className="text-stone-800 leading-relaxed">
                  {selectedType.example}
                </p>
              </div>

              <div className="mt-3 text-[11px] text-emerald-800 italic">
                Bảo đảm phân loại chuẩn trước khi kết nối đường liên kết (Association) trong Use Case Diagram.
              </div>
            </div>
          </div>

          {/* Exam Tip */}
          <div className="flex items-start gap-2 p-2.5 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-900">
            <HelpCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Mẹo thi trắc nghiệm: </span>
              {selectedType.examTip}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
