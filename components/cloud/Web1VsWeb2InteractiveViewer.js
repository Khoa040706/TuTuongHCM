"use client";
import React, { useState } from "react";
import { Globe, Users, MessageSquare, Share2, Edit3, ArrowRight, CheckCircle2, Sparkles, Monitor, Layers } from "lucide-react";

export default function Web1VsWeb2InteractiveViewer() {
  const [activeMode, setActiveMode] = useState("compare"); // 'compare' | 'features'

  const features = [
    {
      id: "interaction",
      name: "User Interaction (Tương Tác Người Dùng)",
      icon: MessageSquare,
      desc: "Người dùng không còn là khán giả thụ động mà có thể bình luận, đánh giá, phản hồi tức thì với tác giả và những người dùng khác.",
      impact: "Mở đường cho các ứng dụng web dạng Single Page Apps (SPA) phản hồi nhanh không cần tải lại toàn bộ trang."
    },
    {
      id: "social",
      name: "Social Network (Mạng Xã Hội)",
      icon: Users,
      desc: "Kết nối hàng tỷ người dùng thông qua các hồ sơ cá nhân, mạng lưới bạn bè, nhóm sở thích và luồng tin tức (Facebook, Twitter/X, LinkedIn).",
      impact: "Tạo ra các hiệu ứng mạng lưới khổng lồ (Network effects) và lưu lượng truy cập đòi hỏi hạ tầng đám mây co giãn lớn."
    },
    {
      id: "collab",
      name: "Online Collaboration (Cộng Tác Trực Tuyến)",
      icon: Share2,
      desc: "Nhiều người dùng tại các vị trí địa lý khác nhau có thể đồng thời cùng soạn thảo văn bản, thiết kế đồ họa, họp video theo thời gian thực.",
      impact: "Tiền đề trực tiếp cho sự bùng nổ của các giải pháp SaaS đám mây như Google Docs, Office 365, Zoom, Figma."
    },
    {
      id: "ugc",
      name: "User-Generated Content (Nội Dung Do Người Dùng Tạo)",
      icon: Edit3,
      desc: "Toàn bộ nội dung bài viết, video, bách khoa toàn thư mở do chính cộng đồng tự nguyện đóng góp và quản trị (Wikipedia, Blog, YouTube).",
      impact: "Khối lượng dữ liệu số tăng theo cấp số nhân mỗi ngày, thúc đẩy nhu cầu lưu trữ đám mây (Cloud Storage) quy mô petabyte."
    }
  ];

  return (
    <div className="my-8 p-5 sm:p-7 rounded-3xl bg-white border border-stone-200 shadow-md font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-black uppercase tracking-widest text-sky-600">
              Interactive Blueprint • Mục VI
            </span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-purple-100 text-purple-800">
              Tiền Đề Của Cloud
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-black text-stone-900 mt-1">
            Web 2.0: Bước Chuyển Mình Sang Tương Tác 2 Chiều & Nền Tảng Thúc Đẩy Cloud
          </h3>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            So sánh Web 1.0 (Web Tĩnh) vs Web 2.0 (Web Động) và 4 đặc tính tạo nền móng cho các dịch vụ SaaS.
          </p>
        </div>

        {/* Mode Switcher */}
        <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-stone-100 border border-stone-200/80 self-start sm:self-auto shrink-0">
          <button
            type="button"
            onClick={() => setActiveMode("compare")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeMode === "compare" ? "bg-sky-600 text-white shadow-xs" : "text-stone-600 hover:text-stone-900"
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>So Sánh Web 1.0 vs 2.0</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveMode("features")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeMode === "features" ? "bg-sky-600 text-white shadow-xs" : "text-stone-600 hover:text-stone-900"
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>4 Đặc Tính Cốt Lõi</span>
          </button>
        </div>
      </div>

      {/* VIEW 1: DUAL COMPARISON (WEB 1.0 VS WEB 2.0) */}
      {activeMode === "compare" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Left: Web 1.0 */}
            <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50/70 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3 pb-3 border-b border-stone-200">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-stone-400">
                      Thập niên 1990s
                    </span>
                    <h4 className="text-base sm:text-lg font-black text-stone-800">
                      Web 1.0: The Read-Only Web
                    </h4>
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-stone-200 text-stone-700">
                    1 Chiều (Tĩnh)
                  </span>
                </div>

                <div className="space-y-2.5 text-xs sm:text-sm text-stone-600 mb-4 leading-relaxed">
                  <p>
                    • <strong>Bản chất:</strong> Người dùng đóng vai trò là <em>người đọc thụ động</em>. Nội dung do chủ sở hữu website xuất bản tĩnh, người đọc chỉ xem và không thể phản hồi hay chỉnh sửa.
                  </p>
                  <p>
                    • <strong>Mô hình dữ liệu:</strong> Web tĩnh (Static HTML), trang web được tải lại hoàn toàn mỗi khi người dùng nhấp vào một liên kết.
                  </p>
                  <p>
                    • <strong>Ví dụ tiêu biểu:</strong> Trang tin tức cá nhân tĩnh, danh mục công ty thập niên 90, Britannica Online.
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-stone-200 text-xs text-stone-500 text-center">
                Luồng thông tin: <strong>Máy chủ Web &rarr; Người dùng (1 chiều duy nhất)</strong>
              </div>
            </div>

            {/* Right: Web 2.0 */}
            <div className="p-5 rounded-2xl border border-sky-300 bg-sky-50/50 flex flex-col justify-between shadow-xs">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3 pb-3 border-b border-sky-200">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-sky-600">
                      Thập niên 2000s &rarr; Hiện tại
                    </span>
                    <h4 className="text-base sm:text-lg font-black text-sky-950">
                      Web 2.0: The Participatory Web
                    </h4>
                  </div>
                  <span className="text-[11px] font-black px-2.5 py-0.5 rounded-full bg-sky-600 text-white shadow-xs">
                    2 Chiều (Tương tác)
                  </span>
                </div>

                <div className="space-y-2.5 text-xs sm:text-sm text-sky-950 mb-4 leading-relaxed">
                  <p>
                    • <strong>Bản chất:</strong> Cho phép người dùng <strong>tương tác, tự tạo và chia sẻ nội dung (User-generated content)</strong> cùng lúc với cộng đồng.
                  </p>
                  <p>
                    • <strong>Mô hình dữ liệu:</strong> Nền tảng ứng dụng động (Web Apps), cập nhật dữ liệu ngầm theo thời gian thực (AJAX, WebSocket) mà không cần tải lại trang.
                  </p>
                  <p>
                    • <strong>Ví dụ tiêu biểu:</strong> Facebook, Twitter, Wikipedia, YouTube, Google Docs, Video Conference.
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-sky-200 text-xs text-sky-900 text-center font-bold">
                Luồng thông tin: <strong>Người dùng &harr; Người dùng &harr; Cloud (Tương tác đa chiều)</strong>
              </div>
            </div>
          </div>

          {/* Exam Takeaway Alert */}
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 flex items-start gap-2.5">
            <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-amber-900 block mb-0.5">Ý nghĩa quan trọng đối với Cloud Computing:</span>
              <p className="leading-relaxed font-medium">
                Web 2.0 biến trình duyệt web từ một công cụ hiển thị văn bản tĩnh thành một <strong>môi trường chạy ứng dụng hoàn chỉnh</strong>. Đây chính là bệ phóng hạ tầng và tâm lý thúc đẩy các giải pháp phần mềm đám mây dạng SaaS (Google Docs, Salesforce, Office 365) phát triển mạnh mẽ.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: 4 CORE FEATURES BENTO GRID */}
      {activeMode === "features" && (
        <div className="space-y-4">
          <span className="text-xs font-black uppercase tracking-wider text-stone-500 block">
            4 Đặc Điểm Chính Của Web 2.0 (Main Features):
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feat) => {
              const Icon = feat.icon;
              return (
                <div
                  key={feat.id}
                  className="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs hover:border-sky-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-2.5">
                      <div className="w-9 h-9 rounded-xl bg-sky-50 border border-sky-200 text-sky-700 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-sm font-black text-stone-900">{feat.name}</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-3">
                      {feat.desc}
                    </p>
                  </div>

                  <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200/80 text-xs text-stone-700">
                    <strong className="text-stone-900">Tác động tới Cloud:</strong> {feat.impact}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 flex items-start gap-2.5 mt-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-emerald-900 block mb-0.5">4 Lợi ích to lớn của Web 2.0:</span>
              <p className="leading-relaxed">
                Khả năng tương tác cao (High interoperability) • Tạo nội dung phong phú (Create rich content) • Tăng cường hợp tác làm việc (Strengthen cooperation) • Phát triển cộng đồng người dùng (Community development).
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
