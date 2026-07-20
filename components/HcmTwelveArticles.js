"use client";
import React from "react";
import { Sparkles, Quote, CheckCircle2 } from "lucide-react";

export default function HcmTwelveArticles() {
  const articles = [
    {
      id: 1,
      title: "Điều 1: Sứ mệnh giải phóng & phục vụ",
      desc: "Đảng không phải là một tổ chức để làm quan phát tài. Nó phải làm tròn nhiệm vụ giải phóng dân tộc, làm cho Tổ quốc giàu mạnh, đồng bào sung sướng."
    },
    {
      id: 2,
      title: "Điều 2: Đặt lợi ích quần chúng lên đầu",
      desc: "Bất kỳ việc gì cũng phải vì lợi ích của dân chúng mà làm. Việc gì có hại cho dân chúng thì phải hết sức tránh."
    },
    {
      id: 3,
      title: "Điều 3: Đảng viên gương mẫu",
      desc: "Mọi công việc Đảng viên phải làm kiểu mẫu cho quần chúng noi theo, lời nói phải đi đôi với việc làm."
    },
    {
      id: 4,
      title: "Điều 4: Học hỏi & bàn bạc với dân",
      desc: "Việc gì cũng phải bàn bạc với dân chúng, hỏi han dân chúng, học hỏi dân chúng và giải thích cho dân chúng hiểu."
    },
    {
      id: 5,
      title: "Điều 5: Liên hệ mật thiết với nhân dân",
      desc: "Đảng phải luôn luôn liên hệ mật thiết với nhân dân, không xa rời dân chúng, hiểu rõ tâm tư nguyện vọng của dân."
    },
    {
      id: 6,
      title: "Điều 6: Nghiêm túc tự phê bình",
      desc: "Phải thật thà tự phê bình và sửa chữa khuyết điểm, coi khuyết điểm như vết thương cần được chữa trị kịp thời."
    },
    {
      id: 7,
      title: "Điều 7: Kỷ luật nghiêm minh, tự giác",
      desc: "Sức mạnh của Đảng là ở kỷ luật nghiêm minh và tự giác. Đã vào Đảng thì phải tuân thủ kỷ luật sắt của Đảng."
    },
    {
      id: 8,
      title: "Điều 8: Đoàn kết thống nhất",
      desc: "Đảng viên phải giữ gìn sự đoàn kết thống nhất trong Đảng như giữ gìn con ngươi của mắt mình."
    },
    {
      id: 9,
      title: "Điều 9: Lựa chọn người trung kiên",
      desc: "Đảng phải chọn lựa những người rất trung thành và rất hăng hái, đoàn kết họ thành nhóm trung kiên lãnh đạo.",
      highlight: true
    },
    {
      id: 10,
      title: "Điều 10: Tẩy bỏ phần tử hủ hóa",
      desc: "Đảng phải luôn luôn tẩy bỏ những phần tử hủ hóa ra ngoài để giữ gìn sự trong sạch vững mạnh của tổ chức.",
      highlight: true
    },
    {
      id: 11,
      title: "Điều 11: Chính sách cán bộ đúng đắn",
      desc: "Đảng phải có chính sách cán bộ đúng đắn, biết trọng dụng nhân tài, bồi dưỡng thế hệ cách mạng cho đời sau."
    },
    {
      id: 12,
      title: "Điều 12: Đoàn kết quốc tế trong sáng",
      desc: "Đảng phải có thái độ quốc tế vô sản đúng đắn, đoàn kết với phong trào cách mạng thế giới và các dân tộc bị áp bức."
    }
  ];

  return (
    <div className="w-full py-4 space-y-6">
      <div className="flex items-center gap-2">
        <span className="p-1 rounded bg-purple-500/10 border border-purple-500/20 text-purple-700 text-[10px] font-bold uppercase tracking-wider">
          📜 Sửa đổi lối làm việc (10/1947)
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
        <span className="text-xs text-stone-600 font-bold font-sans">12 điều tư cách của một Đảng chân chính cách mạng</span>
      </div>

      {/* Compact 12-Card Grid (3x4 on desktop, 2x6 on tablet, 1 column on mobile) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 select-text">
        {articles.map((art) => (
          <div
            key={art.id}
            className={`p-4 rounded-2xl border transition-all duration-300 flex flex-col justify-between relative overflow-hidden ${
              art.highlight
                ? "bg-purple-50/70 border-purple-300 shadow-sm"
                : "bg-white border-stone-200 hover:border-stone-300 hover:shadow-sm"
            }`}
          >
            {art.highlight && (
              <div className="absolute top-0 right-0 w-12 h-12 bg-purple-500/10 rounded-bl-full pointer-events-none flex items-center justify-center pl-2 pb-2">
                <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              </div>
            )}
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className={`text-xs font-black px-2 py-0.5 rounded-md ${
                  art.highlight ? "bg-purple-600 text-white" : "bg-stone-100 text-stone-600"
                }`}>
                  {art.id < 10 ? `0${art.id}` : art.id}
                </span>
                {art.highlight && (
                  <span className="text-[9.5px] font-extrabold text-purple-700 bg-purple-100 px-1.5 py-0.5 rounded uppercase tracking-wider">
                    Trọng tâm ôn thi
                  </span>
                )}
              </div>
              <h6 className="text-xs md:text-sm font-bold text-stone-900 font-sans leading-tight">
                {art.title}
              </h6>
              <p className="text-[11px] md:text-xs text-stone-600 leading-relaxed text-justify">
                {art.desc}
              </p>
            </div>

            {art.highlight && (
              <div className="mt-3 pt-2 border-t border-purple-200/60 flex items-center gap-1 text-[9.5px] text-purple-700 font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>Cốt lõi lý thuyết (Điều 9 & 10)</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Quote card highlighting articles 9 & 10 */}
      <div className="relative overflow-hidden rounded-2xl bg-purple-50/60 border-l-4 border-purple-600 p-5 shadow-sm">
        <Quote className="absolute top-2 left-2 w-10 h-10 text-purple-600 opacity-10 pointer-events-none z-0" />
        <div className="relative z-10 space-y-2 pl-4">
          <p className="font-playfair italic text-stone-800 text-xs md:text-sm leading-relaxed text-justify">
            &quot;Đảng phải chọn lựa những người rất trung thành và rất hăng hái, đoàn kết họ thành nhóm trung kiên lãnh đạo (Điều 9). Đảng phải luôn luôn tẩy bỏ những phần tử hủ hóa ra ngoài (Điều 10).&quot;
          </p>
          <div className="flex items-center justify-end text-[10px] font-semibold text-purple-800 font-sans tracking-wide">
            <span>— Hồ Chí Minh, tác phẩm &quot;Sửa đổi lối làm việc&quot; (10/1947)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
