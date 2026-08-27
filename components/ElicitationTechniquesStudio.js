"use client";
import React, { useState } from "react";
import { 
  MessageSquare, 
  Users2, 
  Eye, 
  FileSearch, 
  Layout, 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  Lightbulb, 
  ArrowRight,
  ShieldAlert
} from "lucide-react";

export default function ElicitationTechniquesStudio() {
  const [selectedTech, setSelectedTech] = useState("interviews");

  const techniques = {
    interviews: {
      id: "interviews",
      name: "1. Interviews (Phỏng vấn 1-1)",
      tag: "Trực tiếp & Đào sâu",
      icon: MessageSquare,
      color: "from-blue-500 to-indigo-600",
      accentBorder: "border-blue-400",
      summary: "Gặp gỡ trực tiếp 1-1 giữa BA và từng đối tượng stakeholder để tìm hiểu chi tiết nhu cầu, kỳ vọng và các vấn đề bất cập.",
      pros: [
        "Xây dựng mối quan hệ tin cậy cá nhân với người được phỏng vấn.",
        "Dễ dàng đào sâu vào các câu hỏi mở và phát hiện thông tin nhạy cảm.",
        "Người được phỏng vấn thoải mái chia sẻ quan điểm cá nhân mà không sợ bị phán xét."
      ],
      cons: [
        "Rất tốn thời gian khi số lượng stakeholders đông.",
        "Dễ xảy ra xung đột khi các bên được phỏng vấn riêng lẻ đưa ra ý kiến trái ngược nhau.",
        "Kết quả phụ thuộc nhiều vào kỹ năng giao tiếp và khả năng diễn đạt của người trả lời."
      ],
      bestWhen: "Cần tìm hiểu thông tin chi tiết từ các chuyên gia nghiệp vụ chủ chốt (SMEs) hoặc khi xử lý các chủ đề nhạy cảm, phức tạp.",
      proTip: "💡 **Mẹo của BA:** Luôn chuẩn bị trước danh sách câu hỏi (Interview Guide), ghi âm (nếu được phép) và gửi lại biên bản tóm tắt (Interview Summary) trong vòng 24h để xác nhận."
    },
    jad: {
      id: "jad",
      name: "2. JAD Sessions (Joint Application Design)",
      tag: "Hội thảo đồng thiết kế",
      icon: Users2,
      color: "from-purple-500 to-pink-600",
      accentBorder: "border-purple-400",
      summary: "Buổi hội thảo tập trung cao độ (Workshop) quy tụ đồng thời Users, BA, Dev Lead và Quản lý để cùng thảo luận và thống nhất yêu cầu.",
      pros: [
        "Rút ngắn đáng kể thời gian thu thập yêu cầu (từ vài tuần xuống vài ngày).",
        "Giải quyết tức thì các điểm mâu thuẫn và bất đồng quan điểm giữa các phòng ban.",
        "Tạo sự đồng thuận cao (Shared Ownership) và cam kết mạnh mẽ từ tất cả các bên."
      ],
      cons: [
        "Rất khó sắp xếp lịch họp khi cần nhiều lãnh đạo và nhân sự bận rộn tham gia.",
        "Cần một người điều phối (Facilitator) cực kỳ cứng tay để kiểm soát các cá tính mạnh.",
        "Dễ bị loãng chủ đề nếu không có chương trình nghị sự (Agenda) chặt chẽ."
      ],
      bestWhen: "Dự án phức tạp liên quan đến nhiều phòng ban có lợi ích đan xen hoặc khi cần chốt phạm vi dự án gấp.",
      proTip: "💡 **Mẹo của BA:** Đặt ra quy tắc ứng xử rõ ràng (Ground Rules), sử dụng bảng trắng / Post-it notes và luôn phân công một người ghi chép (Scribe) riêng biệt."
    },
    observation: {
      id: "observation",
      name: "3. Observation (Quan sát thực địa / Job Shadowing)",
      tag: "Phát hiện yêu cầu ngầm",
      icon: Eye,
      color: "from-emerald-500 to-teal-600",
      accentBorder: "border-emerald-400",
      summary: "BA trực tiếp đến nơi làm việc để quan sát người dùng thao tác thực tế trong quy trình hàng ngày mà không can thiệp.",
      pros: [
        "Phát hiện được các **yêu cầu chưa được nói ra (unstated requirements)** hoặc các thói quen ngầm.",
        "Kiểm chứng tính xác thực của quy trình (người dùng làm thực tế vs quy định trên giấy tờ).",
        "Hiểu sâu sắc môi trường làm việc vật lý và các trở ngại công việc thực tế."
      ],
      cons: [
        "Hiệu ứng Hawthorne: Người dùng có xu hướng làm việc chuẩn chỉ hơn bình thường khi biết mình đang bị quan sát.",
        "Tốn nhiều thời gian và có thể gây cảm giác khó chịu, áp lực cho nhân viên.",
        "Khó nắm bắt các trường hợp ngoại lệ hiếm khi xảy ra trong thời gian quan sát ngắn."
      ],
      bestWhen: "Quy trình nghiệp vụ quá phức tạp khó diễn đạt bằng lời hoặc khi nghi ngờ quy trình thực tế khác xa tài liệu mô tả.",
      proTip: "💡 **Mẹo của BA:** Giải thích rõ với nhân viên rằng bạn đến để cải tiến phần mềm hỗ trợ họ, không phải để thanh tra hay đánh giá năng suất của họ."
    },
    document: {
      id: "document",
      name: "4. Document Analysis (Phân tích tài liệu)",
      tag: "Khai phá tài liệu hiện có",
      icon: FileSearch,
      color: "from-amber-500 to-orange-600",
      accentBorder: "border-amber-400",
      summary: "Thu thập và nghiên cứu các tài liệu sẵn có: Biểu mẫu hóa đơn, báo cáo Excel, sơ đồ quy trình cũ, luật định và sổ tay vận hành.",
      pros: [
        "Giúp BA nhanh chóng nắm bắt bức tranh toàn cảnh và thuật ngữ chuyên ngành trước khi gặp khách hàng.",
        "Không làm phiền hoặc tốn thời gian của các bên liên quan bận rộn.",
        "Cung cấp bằng chứng cụ thể về các trường dữ liệu và quy tắc nghiệp vụ bắt buộc."
      ],
      cons: [
        "Tài liệu thường bị lỗi thời (Outdated) và không phản ánh đúng hiện trạng thực tế.",
        "Chỉ cho biết hệ thống 'đang có gì' (AS-IS) chứ không chỉ ra 'cần cải tiến gì' (TO-BE).",
        "Có thể tốn nhiều thời gian đọc tài liệu dài dòng nhưng chứa ít giá trị cốt lõi."
      ],
      bestWhen: "Bắt đầu dự án mới trong ngành mới (Domain Onboarding) hoặc khi xây dựng hệ thống thay thế cho một phần mềm cũ đã có sẵn tài liệu.",
      proTip: "💡 **Mẹo của BA:** Luôn kiểm tra ngày cập nhật gần nhất của tài liệu và đối chiếu lại với người dùng thực tế để tránh bẫy tài liệu lỗi thời."
    },
    prototyping: {
      id: "prototyping",
      name: "5. Prototyping (Tạo mẫu thử nghiệm giao diện)",
      tag: "Trực quan & Tương tác",
      icon: Layout,
      color: "from-rose-500 to-pink-600",
      accentBorder: "border-rose-400",
      summary: "Xây dựng các bản mock-up, wireframe hoặc prototype bấm được trên Figma/Axure để người dùng trực tiếp trải nghiệm và phản hồi.",
      pros: [
        "Trực quan hóa sinh động: Khách hàng 'thấy tận mắt, sờ tận tay' giải pháp tương lai.",
        "Nhận phản hồi sớm ngay từ đầu, giảm 80% chi phí sửa lỗi so với khi đã viết code.",
        "Làm rõ các luồng điều hướng màn hình và trải nghiệm người dùng (UX) phức tạp."
      ],
      cons: [
        "Khách hàng có thể lầm tưởng prototype là phần mềm hoàn chỉnh đã sắp xong.",
        "Dễ bị cuốn vào tranh cãi về màu sắc, icon nhỏ nhặt thay vì tập trung vào logic nghiệp vụ.",
        "Tốn công sức vẽ lại nhiều lần nếu yêu cầu thay đổi liên tục."
      ],
      bestWhen: "Hệ thống có nhiều giao diện tương tác với người dùng (B2C Apps, E-commerce) hoặc khi khách hàng không rành kỹ thuật, cần nhìn trực quan mới hiểu.",
      proTip: "💡 **Mẹo của BA:** Ở giai đoạn đầu, nên dùng Wireframe đen trắng (Low-fidelity) để khách hàng tập trung vào tính năng và thông tin, tránh bị phân tâm bởi màu mè đồ họa."
    }
  };

  const current = techniques[selectedTech];

  return (
    <div className="w-full my-8 bg-slate-900 border border-slate-700/80 rounded-2xl p-5 sm:p-7 shadow-xl text-slate-100">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              Studio: Hộp Công Cụ 5 Kỹ Thuật Khơi Mở Yêu Cầu
            </h2>
            <p className="text-xs text-slate-400">
              Phân tích chuyên sâu ưu nhược điểm, tình huống áp dụng và bí quyết thực chiến của 5 kỹ thuật Elicitation.
            </p>
          </div>
        </div>
      </div>

      {/* 5 Techniques Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 mb-6">
        {Object.entries(techniques).map(([key, item]) => {
          const isSelected = selectedTech === key;
          const Icon = item.icon;
          return (
            <button
              key={key}
              onClick={() => setSelectedTech(key)}
              className={`p-3.5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${
                isSelected
                  ? `bg-slate-800 ${item.accentBorder} ring-2 ring-emerald-400/50 shadow-xl scale-105`
                  : `bg-slate-950/70 border-slate-800 hover:bg-slate-800/40 text-slate-300`
              }`}
            >
              <div>
                <div className={`p-2 rounded-xl bg-gradient-to-br ${item.color} text-white shadow mb-2.5 w-fit`}>
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-xs sm:text-sm text-white">{item.name.split("(")[0]}</h3>
                <p className="text-[11px] text-slate-400 mt-0.5">{item.tag}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Deep-dive Technique Details */}
      {current && (
        <div className="p-5 sm:p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-3">
            <div className="flex items-center gap-3">
              <div className={`p-2.5 rounded-xl bg-gradient-to-br ${current.color} text-white shadow-md`}>
                <current.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-black text-white">{current.name}</h3>
                <span className="text-xs text-slate-400">Đặc trưng: {current.tag}</span>
              </div>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
            {current.summary}
          </p>

          {/* Pros & Cons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30">
              <span className="text-xs font-extrabold uppercase text-emerald-400 flex items-center gap-1.5 mb-2">
                <CheckCircle2 className="w-4 h-4" /> Ưu điểm vượt trội:
              </span>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {current.pros.map((pro, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></span>
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/30">
              <span className="text-xs font-extrabold uppercase text-rose-400 flex items-center gap-1.5 mb-2">
                <XCircle className="w-4 h-4" /> Hạn chế cần lưu ý:
              </span>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {current.cons.map((con, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0"></span>
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Best When & Pro Tip */}
          <div className="space-y-2 pt-2 border-t border-slate-800/80">
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-slate-200">
              <span className="text-cyan-400 font-bold block mb-0.5 uppercase text-xs">
                Khi nào là lựa chọn tối ưu?
              </span>
              <span>{current.bestWhen}</span>
            </div>

            <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-500/30 text-xs sm:text-sm text-amber-200/90">
              <span dangerouslySetInnerHTML={{ __html: current.proTip }} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
