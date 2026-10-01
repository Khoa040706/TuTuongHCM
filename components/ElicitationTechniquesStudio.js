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
  ShieldAlert,
  HelpCircle,
  Target
} from "lucide-react";

export default function ElicitationTechniquesStudio() {
  const [selectedTech, setSelectedTech] = useState("interviews");

  const techniques = {
    interviews: {
      id: "interviews",
      num: "01",
      name: "1. Interviews (Phỏng vấn 1-1)",
      shortName: "Phỏng vấn 1-1",
      tag: "Trực tiếp & Đào sâu",
      category: "Cá nhân (Individual)",
      icon: MessageSquare,
      color: "from-blue-500 to-indigo-600",
      accentBorder: "border-blue-400",
      accentBg: "bg-blue-500/10 text-blue-300 border-blue-500/30",
      summary:
        "Gặp gỡ trực tiếp 1-1 giữa BA và từng đối tượng stakeholder để tìm hiểu chi tiết nhu cầu, kỳ vọng và các vấn đề bất cập.",
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
      bestWhen:
        "Cần tìm hiểu thông tin chi tiết từ các chuyên gia nghiệp vụ chủ chốt (SMEs) hoặc khi xử lý các chủ đề nhạy cảm, phức tạp.",
      proTip:
        "Luôn chuẩn bị trước danh sách câu hỏi (Interview Guide), ghi âm (nếu được phép) và gửi lại biên bản tóm tắt (Interview Summary) trong vòng 24h để các bên xác nhận."
    },
    jad: {
      id: "jad",
      num: "02",
      name: "2. JAD Sessions (Hội thảo JAD)",
      shortName: "Hội thảo JAD",
      tag: "Hội thảo đồng thiết kế",
      category: "Nhóm tập trung (Group)",
      icon: Users2,
      color: "from-purple-500 to-pink-600",
      accentBorder: "border-purple-400",
      accentBg: "bg-purple-500/10 text-purple-300 border-purple-500/30",
      summary:
        "Buổi hội thảo tập trung cao độ (Joint Application Design Workshop) quy tụ đồng thời Users, BA, Dev Lead và Quản lý để cùng thảo luận và thống nhất yêu cầu.",
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
      bestWhen:
        "Dự án phức tạp liên quan đến nhiều phòng ban có lợi ích đan xen hoặc khi cần chốt phạm vi dự án gấp.",
      proTip:
        "Đặt ra quy tắc ứng xử rõ ràng (Ground Rules), sử dụng bảng trắng / Post-it notes và luôn phân công một người ghi chép (Scribe) riêng biệt."
    },
    observation: {
      id: "observation",
      num: "03",
      name: "3. Observation (Quan sát thực địa)",
      shortName: "Quan sát thực địa",
      tag: "Phát hiện yêu cầu ngầm",
      category: "Hành vi thực tế (Behavioral)",
      icon: Eye,
      color: "from-emerald-500 to-teal-600",
      accentBorder: "border-emerald-400",
      accentBg: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
      summary:
        "BA trực tiếp đến nơi làm việc để quan sát người dùng thao tác thực tế trong quy trình hàng ngày mà không can thiệp (Job Shadowing).",
      pros: [
        "Phát hiện được các yêu cầu chưa được nói ra (unstated requirements) hoặc thói quen ngầm.",
        "Kiểm chứng tính xác thực của quy trình (người dùng làm thực tế vs quy định trên giấy tờ).",
        "Hiểu sâu sắc môi trường làm việc vật lý và các trở ngại công việc thực tế."
      ],
      cons: [
        "Hiệu ứng Hawthorne: Người dùng có xu hướng làm việc chuẩn chỉ hơn bình thường khi biết mình đang bị quan sát.",
        "Tốn nhiều thời gian và có thể gây cảm giác khó chịu, áp lực cho nhân viên.",
        "Khó nắm bắt các trường hợp ngoại lệ hiếm khi xảy ra trong thời gian quan sát ngắn."
      ],
      bestWhen:
        "Quy trình nghiệp vụ quá phức tạp khó diễn đạt bằng lời hoặc khi nghi ngờ quy trình thực tế khác xa tài liệu mô tả.",
      proTip:
        "Giải thích rõ với nhân viên rằng bạn đến để cải tiến phần mềm hỗ trợ họ, không phải để thanh tra hay đánh giá năng suất của họ."
    },
    document: {
      id: "document",
      num: "04",
      name: "4. Document Analysis (Phân tích tài liệu)",
      shortName: "Phân tích tài liệu",
      tag: "Khai phá tài liệu hiện có",
      category: "Nghiên cứu bàn giấy (Desk Research)",
      icon: FileSearch,
      color: "from-amber-500 to-orange-600",
      accentBorder: "border-amber-400",
      accentBg: "bg-amber-500/10 text-amber-300 border-amber-500/30",
      summary:
        "Thu thập và nghiên cứu các tài liệu sẵn có: Biểu mẫu hóa đơn, báo cáo Excel, sơ đồ quy trình cũ, luật định và sổ tay vận hành.",
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
      bestWhen:
        "Bắt đầu dự án mới trong ngành mới (Domain Onboarding) hoặc khi xây dựng hệ thống thay thế cho một phần mềm cũ đã có sẵn tài liệu.",
      proTip:
        "Luôn kiểm tra ngày cập nhật gần nhất của tài liệu và đối chiếu lại với người dùng thực tế để tránh bẫy tài liệu lỗi thời."
    },
    prototyping: {
      id: "prototyping",
      num: "05",
      name: "5. Prototyping (Tạo mẫu thử nghiệm)",
      shortName: "Tạo mẫu thử nghiệm",
      tag: "Trực quan & Tương tác",
      category: "Thực nghiệm trực quan (Visual & UX)",
      icon: Layout,
      color: "from-rose-500 to-pink-600",
      accentBorder: "border-rose-400",
      accentBg: "bg-rose-500/10 text-rose-300 border-rose-500/30",
      summary:
        "Xây dựng các bản mock-up, wireframe hoặc prototype bấm được trên Figma/Axure để người dùng trực tiếp trải nghiệm và phản hồi.",
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
      bestWhen:
        "Hệ thống có nhiều giao diện tương tác với người dùng (B2C Apps, E-commerce) hoặc khi khách hàng không rành kỹ thuật, cần nhìn trực quan mới hiểu.",
      proTip:
        "Ở giai đoạn đầu, nên dùng Wireframe đen trắng (Low-fidelity) để khách hàng tập trung vào tính năng và thông tin, tránh bị phân tâm bởi đồ họa."
    }
  };

  const current = techniques[selectedTech];

  return (
    <div className="w-full my-8 bg-slate-900 border border-slate-700/80 rounded-3xl p-5 sm:p-7 shadow-2xl text-slate-100">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-5 mb-6">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-600 via-teal-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-emerald-500/20 text-white font-bold text-xl">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 uppercase tracking-wider">
                Elicitation Toolkit
              </span>
              <span className="text-xs text-slate-400">5 Kỹ Thuật Khơi Mở Yêu Cầu</span>
            </div>
            <h2 className="text-lg sm:text-xl font-extrabold text-white mt-0.5">
              Studio: Hộp Công Cụ 5 Kỹ Thuật Khơi Mở Yêu Cầu
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-slate-950 px-3.5 py-1.5 rounded-xl border border-slate-800 text-xs">
          <Target className="w-4 h-4 text-emerald-400" />
          <span className="text-slate-400">Trọng tâm: </span>
          <span className="font-bold text-emerald-300">Uncover Real Business Needs</span>
        </div>
      </div>

      {/* 5 Techniques Tabs Grid: 3 cols in row 1, 2 cols in row 2 on laptop, 5 on xl desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 mb-6">
        {Object.entries(techniques).map(([key, item]) => {
          const isSelected = selectedTech === key;
          const Icon = item.icon;
          return (
            <button
              key={key}
              onClick={() => setSelectedTech(key)}
              className={`p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${
                isSelected
                  ? `bg-slate-800/90 ${item.accentBorder} ring-2 ring-emerald-400/50 shadow-xl scale-[1.02]`
                  : "bg-slate-950/80 border-slate-800 hover:bg-slate-800/40 hover:border-slate-700 text-slate-300"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <div className={`p-2 rounded-xl bg-gradient-to-br ${item.color} text-white shadow-sm`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono font-black px-2 py-0.5 rounded-md bg-slate-900 text-slate-200 border border-slate-800">
                    {item.num}
                  </span>
                </div>

                <h3 className="font-extrabold text-xs sm:text-sm text-white leading-snug">
                  {item.name}
                </h3>
                <p className="text-[11px] text-slate-400 mt-1 leading-snug">{item.tag}</p>
              </div>

              <div className="mt-3.5 pt-2 border-t border-slate-800/80 text-[10px] text-slate-500 font-medium">
                {item.category}
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
                <span className="text-xs text-slate-400">Đặc trưng cốt lõi: {current.tag} ({current.category})</span>
              </div>
            </div>

            <span className={`px-3 py-1 rounded-xl text-xs font-bold border ${current.accentBg}`}>
              Kỹ thuật {current.num} / 05
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium bg-slate-900/40 p-3.5 rounded-xl border border-slate-800">
            {current.summary}
          </p>

          {/* Pros & Cons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
            {/* Pros */}
            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-2">
              <span className="text-xs font-extrabold uppercase text-emerald-400 flex items-center gap-1.5 mb-1">
                <CheckCircle2 className="w-4 h-4" /> Ưu điểm vượt trội:
              </span>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {current.pros.map((pro, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cons */}
            <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/30 space-y-2">
              <span className="text-xs font-extrabold uppercase text-rose-400 flex items-center gap-1.5 mb-1">
                <XCircle className="w-4 h-4" /> Thách thức & Hạn chế:
              </span>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {current.cons.map((con, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Best When & Pro Tip */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 pt-2">
            <div className="md:col-span-6 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
              <span className="font-bold text-amber-400 uppercase text-[11px] block mb-1">
                🎯 Thời điểm áp dụng lý tưởng nhất:
              </span>
              <p className="leading-relaxed">{current.bestWhen}</p>
            </div>

            <div className="md:col-span-6 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
              <span className="font-bold text-cyan-400 uppercase text-[11px] block mb-1">
                💡 Bí quyết thực chiến của BA:
              </span>
              <p className="leading-relaxed">{current.proTip}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
