"use client";
import React, { useState } from "react";
import { Table, Layers, ArrowRight, CheckCircle2, XCircle, HelpCircle } from "lucide-react";

export default function StringCompareMatrix() {
  const [selectedCriteria, setSelectedCriteria] = useState(null);

  const criteria = [
    {
      id: "mutability",
      name: "Tính khả biến (Mutability)",
      string: { badge: "Immutable", type: "error", desc: "Không thể thay đổi giá trị. Mỗi thao tác sửa đổi tạo ra một đối tượng String mới trên Heap." },
      buffer: { badge: "Mutable", type: "success", desc: "Khả biến. Cho phép thay đổi nội dung trực tiếp tại chỗ trên cùng vùng nhớ đệm." },
      builder: { badge: "Mutable", type: "success", desc: "Khả biến. Cho phép thay đổi nội dung trực tiếp tại chỗ trên cùng vùng nhớ đệm." },
      detail: "Đối với String, khi nối chuỗi <code>str = str + \"a\";</code>, Java sẽ tạo ra một đối tượng String mới chứa chuỗi đã nối, trong khi đối tượng cũ bị bỏ lại trên Heap chờ Garbage Collector dọn dẹp. Đối với StringBuffer và StringBuilder, chúng sửa đổi mảng ký tự <code>char[]</code> nội bộ trực tiếp bằng các phương thức in-place như <code>append()</code>, giúp tiết kiệm bộ nhớ RAM tối đa."
    },
    {
      id: "threadsafe",
      name: "An toàn đa luồng (Thread-safety)",
      string: { badge: "An toàn", type: "info", desc: "Do String bất biến nên hoàn toàn an toàn khi chia sẻ giữa các luồng đồng thời." },
      buffer: { badge: "An toàn (Thread-safe)", type: "success", desc: "An toàn đa luồng nhờ các phương thức đồng bộ hóa synchronized." },
      builder: { badge: "Không an toàn", type: "error", desc: "Không an toàn đa luồng (non-synchronized), thích hợp cho ứng dụng đơn luồng." },
      detail: "StringBuffer sử dụng từ khóa <code>synchronized</code> ở tất cả các phương thức quan trọng, ngăn cản 2 luồng cùng ghi đè dữ liệu đồng thời (tránh Race Condition). Tuy nhiên, cơ chế khóa này gây tốn tài nguyên kiểm tra trạng thái luồng ở mức mã máy. StringBuilder loại bỏ hoàn toàn các lock này để tăng tốc tối đa, nhưng nếu chạy đa luồng sẽ có khả năng mất dữ liệu."
    },
    {
      id: "performance",
      name: "Tốc độ / Hiệu năng",
      string: { badge: "Chậm nhất", type: "error", desc: "Hao phí bộ nhớ và thời gian do tạo liên tục các đối tượng rác trung gian." },
      buffer: { badge: "Nhanh", type: "warning", desc: "Nhanh và tiết kiệm bộ nhớ, nhưng chậm hơn StringBuilder do hao phí đồng bộ hóa." },
      builder: { badge: "Nhanh nhất", type: "success", desc: "Tốc độ xử lý cao nhất do loại bỏ hoàn toàn cơ chế kiểm tra khóa (locks)." },
      detail: "Ghép chuỗi liên tục trong vòng lặp lớn bằng String có độ phức tạp thời gian cực kỳ kém $O(N^2)$. Với StringBuilder và StringBuffer, độ phức tạp đạt tuyến tính $O(N)$. Trong môi trường đơn luồng (single-thread), StringBuilder hoạt động nhanh hơn StringBuffer khoảng 10% - 25% nhờ không phải kiểm tra trạng thái khóa luồng."
    },
    {
      id: "storage",
      name: "Vùng lưu trữ bộ nhớ",
      string: { badge: "String Pool / Heap", type: "info", desc: "Chuỗi hằng số lưu trong String Constant Pool trên Heap." },
      buffer: { badge: "Heap Memory", type: "secondary", desc: "Lưu hoàn toàn trên vùng nhớ Heap thông thường của JVM." },
      builder: { badge: "Heap Memory", type: "secondary", desc: "Lưu hoàn toàn trên vùng nhớ Heap thông thường của JVM." },
      detail: "String Constant Pool (Vùng chứa chuỗi hằng số) là vùng nhớ đặc biệt trong Heap giúp Java tối ưu hóa tái sử dụng các chuỗi giống nhau. Khi khai báo <code>String s = \"hello\";</code>, Java kiểm tra Pool trước. Với StringBuffer và StringBuilder, chúng luôn được khởi tạo bình thường trên Heap thông qua từ khóa <code>new</code>."
    },
    {
      id: "equals",
      name: "So sánh bằng equals()",
      string: { badge: "Có override", type: "success", desc: "Phương thức equals() so sánh nội dung chuỗi ký tự bên trong." },
      buffer: { badge: "Không override", type: "error", desc: "equals() hoạt động giống ==, chỉ so sánh địa chỉ ô nhớ." },
      builder: { badge: "Không override", type: "error", desc: "equals() hoạt động giống ==, chỉ so sánh địa chỉ ô nhớ." },
      detail: "Lớp String đã override phương thức <code>equals()</code> của lớp Object để so sánh từng ký tự một. StringBuffer và StringBuilder không override phương thức này, nên nếu gọi <code>sb1.equals(sb2)</code>, hệ thống sẽ so sánh xem hai biến có trỏ cùng vào một đối tượng duy nhất trên RAM hay không (so sánh địa chỉ ô nhớ giống toán tử <code>==</code>). Muốn so sánh nội dung, bắt buộc phải chuyển về String qua <code>sb1.toString().equals(sb2.toString())</code>."
    }
  ];

  const getBadgeStyle = (type) => {
    switch (type) {
      case "success":
        return "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20";
      case "warning":
        return "bg-amber-500/10 text-amber-500 border border-amber-500/20";
      case "error":
        return "bg-rose-500/10 text-rose-500 border border-rose-500/20";
      case "info":
        return "bg-blue-500/10 text-blue-500 border border-blue-500/20";
      case "secondary":
        return "bg-purple-500/10 text-purple-500 border border-purple-500/20";
      default:
        return "bg-stone-100 text-stone-600 border border-stone-200";
    }
  };

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-3xl p-5 md:p-6 text-stone-850 select-none shadow-sm relative z-10 my-4">
      <div className="flex items-center gap-2 mb-4 border-b border-stone-200 pb-3">
        <Table className="w-4 h-4 text-accent" />
        <h4 className="text-sm md:text-base font-extrabold text-stone-900 font-serif">
          Ma trận So sánh 3 Chiều (String vs StringBuffer vs StringBuilder)
        </h4>
      </div>
      
      <p className="text-[10px] text-stone-500 mb-4">
        Nhấp chuột vào bất kỳ tiêu chí so sánh nào dưới đây để xem phân tích cơ chế hoạt động chi tiết cùng các ví dụ giải thích chuyên sâu.
      </p>

      {/* Comparison Grid Table */}
      <div className="border border-stone-200 rounded-2xl overflow-hidden bg-white shadow-sm mb-4">
        <div className="grid grid-cols-12 bg-stone-100/80 border-b border-stone-250 py-2.5 px-4 text-[9px] font-black text-stone-500 uppercase tracking-wider">
          <div className="col-span-3">Tiêu chí so sánh</div>
          <div className="col-span-3">String</div>
          <div className="col-span-3">StringBuffer</div>
          <div className="col-span-3">StringBuilder</div>
        </div>

        <div className="divide-y divide-stone-200">
          {criteria.map((c) => (
            <div
              key={c.id}
              onClick={() => setSelectedCriteria(selectedCriteria === c.id ? null : c.id)}
              className={`grid grid-cols-12 py-3.5 px-4 items-center cursor-pointer transition-all ${
                selectedCriteria === c.id 
                  ? "bg-amber-500/5 hover:bg-amber-500/10" 
                  : "hover:bg-stone-50"
              }`}
            >
              {/* Criterion Name */}
              <div className="col-span-3 pr-2">
                <span className="text-xs font-bold text-stone-800 hover:text-accent block leading-tight">{c.name}</span>
                <span className="text-[8px] text-stone-400 mt-1 block font-mono">Xem chi tiết ➔</span>
              </div>

              {/* String Value */}
              <div className="col-span-3 pr-2 space-y-1">
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold inline-block ${getBadgeStyle(c.string.type)}`}>
                  {c.string.badge}
                </span>
                <p className="text-[9px] text-stone-500 leading-normal hidden sm:block font-medium">{c.string.desc}</p>
              </div>

              {/* StringBuffer Value */}
              <div className="col-span-3 pr-2 space-y-1">
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold inline-block ${getBadgeStyle(c.buffer.type)}`}>
                  {c.buffer.badge}
                </span>
                <p className="text-[9px] text-stone-500 leading-normal hidden sm:block font-medium">{c.buffer.desc}</p>
              </div>

              {/* StringBuilder Value */}
              <div className="col-span-3 space-y-1">
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold inline-block ${getBadgeStyle(c.builder.type)}`}>
                  {c.builder.badge}
                </span>
                <p className="text-[9px] text-stone-500 leading-normal hidden sm:block font-medium">{c.builder.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Expanded detailed cards */}
      {selectedCriteria && (
        <div className="p-4 bg-amber-500/5 border border-amber-500/25 rounded-2xl space-y-2.5 animate-in text-stone-750">
          <div className="flex items-center gap-1.5 text-xs font-bold text-stone-850">
            <Layers className="w-3.5 h-3.5 text-accent" />
            <span>Phân tích tiêu chí: {criteria.find(c => c.id === selectedCriteria).name}</span>
          </div>
          
          <div 
            className="text-[10.5px] leading-relaxed font-medium"
            dangerouslySetInnerHTML={{ __html: criteria.find(c => c.id === selectedCriteria).detail }}
          />
        </div>
      )}

      {selectedCriteria === null && (
        <div className="p-3 bg-stone-100 border border-stone-200 rounded-xl flex items-center justify-center gap-1.5 text-stone-500 text-[10px] italic">
          <HelpCircle className="w-3.5 h-3.5 text-stone-400" />
          <span>Bấm chọn một hàng tiêu chí ở bảng trên để xem phân tích chuyên sâu.</span>
        </div>
      )}
    </div>
  );
}
