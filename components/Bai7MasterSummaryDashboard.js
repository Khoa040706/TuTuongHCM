"use client";

import React, { useState } from "react";
import {
  Award,
  Sparkles,
  Layers,
  Search,
  TrendingUp,
  Binary,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  BookOpen,
  Table,
  Zap,
  HelpCircle,
  HardDrive
} from "lucide-react";

export default function Bai7MasterSummaryDashboard() {
  const [activeTab, setActiveTab] = useState("matrix"); // "matrix", "takeaways", "flashcards"
  const [flippedCard, setFlippedCard] = useState(null);

  const collisionMatrix = [
    {
      name: "1. Separate Chaining",
      type: "Closed Addressing",
      storage: "Bảng mảng trỏ đến các Linked List độc lập",
      clustering: "Không bị Clustering ô nhớ trong mảng",
      rehashThreshold: "&alpha; &ge; 1.0 &sim; 2.0 (thoải mái hơn)",
      deletion: "Xóa trực tiếp node khỏi list (dễ dàng)",
      advantage: "Đơn giản nhất, không bao giờ đầy bảng, dễ cài đặt.",
      disadvantage: "Tốn con trỏ RAM phụ cho linked list, cache locality kém."
    },
    {
      name: "2. Linear Probing",
      type: "Open Addressing",
      storage: "Lưu trực tiếp trong bảng mảng (O(1) bộ nhớ phụ)",
      clustering: "Bị Primary Clustering (dồn cụm sơ cấp nặng)",
      rehashThreshold: "&alpha; &ge; 0.7 (cần Rehash sớm)",
      deletion: "Bắt buộc dùng Lazy Deletion (đánh dấu X)",
      advantage: "Tối ưu bộ nhớ đệm CPU cache (cache locality tốt nhất).",
      disadvantage: "Dễ bị dồn khối liên tiếp, làm chậm nghiêm trọng khi bảng đầy."
    },
    {
      name: "3. Quadratic Probing",
      type: "Open Addressing",
      storage: "Lưu trực tiếp trong bảng mảng",
      clustering: "Bị Secondary Clustering (nhẹ hơn)",
      rehashThreshold: "&alpha; &lt; 0.5 (bắt buộc &alpha; < 0.5 để đảm bảo tìm thấy ô trống)",
      deletion: "Bắt buộc dùng Lazy Deletion (đánh dấu X)",
      advantage: "Loại bỏ hoàn toàn Primary Clustering nhờ bước nhảy bậc hai.",
      disadvantage: "Phải đảm bảo m là số nguyên tố và bảng chưa đầy quá nửa (&alpha; < 0.5)."
    },
    {
      name: "4. Double Hashing",
      type: "Open Addressing",
      storage: "Lưu trực tiếp trong bảng mảng",
      clustering: "Không bị cả Primary lẫn Secondary Clustering ⭐",
      rehashThreshold: "&alpha; &ge; 0.7",
      deletion: "Bắt buộc dùng Lazy Deletion (đánh dấu X)",
      advantage: "Triệt tiêu mọi dạng clustering, bước nhảy linh hoạt cho từng khóa.",
      disadvantage: "Tốn thêm chi phí tính toán hàm băm thứ hai h₂(k)."
    }
  ];

  const takeaways = [
    {
      id: 1,
      title: "1. Hai Câu Hỏi Lớn Của Hashing",
      desc: "• \"How to hash?\": Thiết kế hàm băm nhanh O(1), phân tán đều, ít va chạm.\n• \"How to resolve collisions?\": 4 kỹ thuật giải quyết đụng độ khi ánh xạ Many-to-One."
    },
    {
      id: 2,
      title: "2. 4 Kỹ Thuật Giải Quyết Collision",
      desc: "Separate Chaining (danh sách liên kết) và 3 kỹ thuật Open Addressing: Linear Probing (+i), Quadratic Probing (+i²), Double Hashing (+i·h₂)."
    },
    {
      id: 3,
      title: "3. Cơ Chế Xóa Lười (Lazy Deletion)",
      desc: "Trong Open Addressing, tuyệt đối không được xóa trắng slot khi delete mà phải dùng cờ 'Marked Deleted (X)' để không làm đứt gãy chuỗi dò tìm của find()."
    },
    {
      id: 4,
      title: "4. Phân Biệt Primary vs Secondary Clustering",
      desc: "Linear Probing bị Primary Clustering (các ô liên tiếp dồn khối). Quadratic Probing bị Secondary Clustering (cùng vị trí đầu cùng chuỗi nhảy). Double Hashing triệt tiêu cả hai."
    },
    {
      id: 5,
      title: "5. Bản Chất Hiệu Năng O(1) Tối Thượng",
      desc: "Hashing đạt O(1) trung bình cho cả Insertion, Deletion và Retrieval – vượt trội so với O(n) của Sorted Array và O(log n) của Balanced BST."
    }
  ];

  const flashcards = [
    {
      id: 1,
      q: "Tại sao trong Linear Probing không được xóa trắng ô nhớ khi delete?",
      a: "Vì sẽ làm đứt chuỗi probe của find()",
      expl: "Nếu xóa trắng thành Empty, thao tác find() khi gặp ô trống sẽ dừng tìm kiếm sớm và kết luận sai rằng phần tử nằm phía sau 'không tồn tại'.",
      badge: "Lazy Deletion"
    },
    {
      id: 2,
      q: "Điều kiện để Quadratic Probing luôn tìm được 1 ô trống là gì?",
      a: "α < 0.5 và m là số nguyên tố",
      expl: "Theo định lý, khi bảng chưa đầy quá nửa (α < 0.5) và kích thước m là số nguyên tố, Quadratic Probing đảm bảo 100% tìm thấy slot trống.",
      badge: "Theorem"
    },
    {
      id: 3,
      q: "Cạm bẫy nguy hiểm nhất khi thiết kế hàm băm thứ hai h₂(k) trong Double Hashing?",
      a: "h₂(k) = 0 gây lặp vô hạn",
      expl: "Nếu h₂(k) = 0, bước nhảy bằng 0 khiến chuỗi probe đứng im tại 1 slot và thuật toán bị treo vĩnh viễn trong vòng lặp vô hạn.",
      badge: "Double Hashing"
    },
    {
      id: 4,
      q: "Tại sao hash chuỗi bằng tổng ASCII đơn thuần là Bad Hash Function?",
      a: "Bị đụng độ 100% các chuỗi đảo từ (Anagrams)",
      expl: "Vì tổng ASCII không phụ thuộc vị trí ký tự, các từ như 'Lee Chin Tan' và 'Chan Tin Lee' đều cho cùng giá trị băm.",
      badge: "String Hash"
    }
  ];

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl p-5 md:p-7 shadow-sm my-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-5">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
            Mục 4.5 &amp; Mục 5 — Tổng Kết Toàn Bộ Bài 7
          </span>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-1">
            Tổng Kết Toàn Bộ Bài 7: Hashing &amp; Ma Trận Đối Chiếu 4 Kỹ Thuật
          </h3>
          <p className="text-xs text-slate-500">
            Hệ thống hóa toàn diện các chiến lược xử lý va chạm, 5 đúc kết cốt lõi và bộ flashcards bẫy đề thi
          </p>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 font-mono text-xs font-bold self-start sm:self-auto">
          <Award className="w-3.5 h-3.5 text-emerald-600" />
          Master Dashboard
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 mb-5 border-b border-slate-200 pb-2 overflow-x-auto">
        <button
          onClick={() => setActiveTab("matrix")}
          className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition cursor-pointer shrink-0 ${
            activeTab === "matrix"
              ? "bg-emerald-600 text-white shadow-xs"
              : "bg-slate-100 text-slate-600 hover:text-slate-900"
          }`}
        >
          Ma Trận Đối Chiếu 4 Kỹ Thuật
        </button>
        <button
          onClick={() => setActiveTab("takeaways")}
          className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition cursor-pointer shrink-0 ${
            activeTab === "takeaways"
              ? "bg-emerald-600 text-white shadow-xs"
              : "bg-slate-100 text-slate-600 hover:text-slate-900"
          }`}
        >
          5 Đúc Kết Cốt Lõi
        </button>
        <button
          onClick={() => setActiveTab("flashcards")}
          className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition cursor-pointer shrink-0 ${
            activeTab === "flashcards"
              ? "bg-emerald-600 text-white shadow-xs"
              : "bg-slate-100 text-slate-600 hover:text-slate-900"
          }`}
        >
          Flashcards Bẫy Đề Thi
        </button>
      </div>

      {/* Tab 1: 4 Collision Techniques Matrix */}
      {activeTab === "matrix" && (
        <div className="space-y-4 mb-5 animate-fadeIn">
          <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono border-collapse">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-200 text-slate-700">
                    <th className="py-3 px-3.5 font-bold">Kỹ thuật Collision</th>
                    <th className="py-3 px-3 font-bold">Hiện tượng Clustering</th>
                    <th className="py-3 px-3 font-bold">Ngưỡng Rehash (&alpha;)</th>
                    <th className="py-3 px-3 font-bold">Phương pháp Delete</th>
                    <th className="py-3 px-3 font-bold">Ưu &amp; Nhược điểm</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-800">
                  {collisionMatrix.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80 transition">
                      <td className="py-3 px-3.5 font-bold text-slate-900">
                        <div>{item.name}</div>
                        <span className="text-[10px] text-slate-500 font-normal">{item.type}</span>
                      </td>
                      <td className="py-3 px-3 text-slate-700 font-sans">{item.clustering}</td>
                      <td
                        className="py-3 px-3 font-bold text-indigo-700"
                        dangerouslySetInnerHTML={{ __html: item.rehashThreshold }}
                      />
                      <td className="py-3 px-3 text-amber-800 font-sans">{item.deletion}</td>
                      <td className="py-3 px-3 text-[11px] text-slate-600 font-sans">
                        <span className="text-emerald-700 font-bold">+</span> {item.advantage}<br/>
                        <span className="text-rose-600 font-bold">-</span> {item.disadvantage}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: 5 Core Takeaways */}
      {activeTab === "takeaways" && (
        <div className="space-y-3 animate-fadeIn mb-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {takeaways.map((item) => (
              <div key={item.id} className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-1">
                <h4 className="text-xs font-bold text-slate-900 font-sans">{item.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-sans whitespace-pre-line">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Flashcards */}
      {activeTab === "flashcards" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 animate-fadeIn mb-5">
          {flashcards.map((item) => {
            const isFlipped = flippedCard === item.id;

            return (
              <div
                key={item.id}
                onClick={() => setFlippedCard(isFlipped ? null : item.id)}
                className={`p-4 rounded-2xl border-2 transition-all cursor-pointer shadow-xs flex flex-col justify-between select-none min-h-[140px] ${
                  isFlipped
                    ? "bg-gradient-to-br from-purple-50 via-white to-emerald-50/50 border-purple-300 ring-4 ring-purple-100/80 shadow-md text-slate-800"
                    : "bg-emerald-50/60 border-emerald-200 text-emerald-950 hover:border-emerald-300"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-white text-slate-800 border border-slate-200 shadow-2xs">
                      {item.badge}
                    </span>
                    <span className="text-[10px] font-mono text-emerald-800 font-bold">
                      {isFlipped ? "ĐÁP ÁN ✓" : "BẤM ĐỂ XEM ĐÁP ÁN ➔"}
                    </span>
                  </div>

                  {!isFlipped ? (
                    <p className="text-xs font-bold font-sans leading-relaxed">{item.q}</p>
                  ) : (
                    <div className="space-y-1.5 animate-fadeIn">
                      <div className="text-xs font-mono font-black text-emerald-900 bg-emerald-100 border border-emerald-300 px-2.5 py-1 rounded-md inline-block">
                        {item.a}
                      </div>
                      <p className="text-[11px] text-slate-600 font-sans leading-relaxed pt-1">{item.expl}</p>
                    </div>
                  )}
                </div>

                <div className="pt-2 text-[10px] font-mono opacity-70 border-t border-current/10">
                  {isFlipped ? "👆 Bấm lại để xem câu hỏi" : "👆 Bấm để lật thẻ"}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Sticky Takeaway */}
      <div className="bg-emerald-50/80 border-2 border-emerald-200 rounded-2xl p-4 flex items-start gap-3 text-xs text-emerald-950">
        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
        <div>
          <strong>⭐ Tổng kết hoàn thành Bài 7 (Hashing):</strong><br/>
          • Đã nắm vững <strong>4 kỹ thuật giải quyết Collision</strong>: Separate Chaining, Linear Probing, Quadratic Probing, Double Hashing.<br/>
          • Hiểu sâu nguyên lý <strong>Lazy Deletion</strong> (3 trạng thái ô nhớ) và kiểm soát <strong>Hệ số tải &alpha; = n/m</strong> qua Rehashing.<br/>
          • Nắm chắc lý do Hashing đạt hiệu năng <strong>O(1) trung bình</strong> tối thượng cho mọi thao tác của Table ADT.
        </div>
      </div>
    </div>
  );
}
