"use client";
import React, { useState } from "react";

export default function ExamGotchasFlashcards() {
  const [flippedCards, setFlippedCards] = useState({});

  const handleFlip = (idx) => {
    setFlippedCards((prev) => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const gotchas = [
    {
      title: "Scanner: next() vs nextLine()",
      trap: "Làm thế nào để đọc toàn bộ dòng có chứa khoảng trắng mà không bị trôi lệnh?",
      badCode: "String word = sc.next();\n// Chỉ đọc được 1 từ đầu tiên trước khoảng trắng!",
      goodCode: "String line = sc.nextLine();\n// Đọc trọn vẹn cả dòng bao gồm khoảng trắng.",
      note: "next() chỉ đọc đến khoảng trắng/tab/xuống dòng tiếp theo. nextLine() đọc đến hết dòng."
    },
    {
      title: "So sánh chuỗi String",
      trap: "Sử dụng phép so sánh nào để kiểm tra nội dung hai chuỗi chữ giống nhau?",
      badCode: "if (str1 == str2) {\n    // ❌ SAI: So sánh địa chỉ ô nhớ RAM\n}",
      goodCode: "if (str1.equals(str2)) {\n    // ✔️ ĐÚNG: So sánh từng ký tự chữ\n}",
      note: "== chỉ kiểm tra 2 biến có trỏ chung 1 vùng nhớ hay không. Phải dùng .equals() để so khớp ký tự."
    },
    {
      title: "Class method vs Instance method",
      trap: "Gọi hàm static và hàm non-static thông qua thực thể nào cho đúng cú pháp?",
      badCode: "// ❌ Lỗi biên dịch:\nint val = Scanner.nextInt();",
      goodCode: "// ✔️ Gọi qua thực thể đối tượng sc:\nScanner sc = new Scanner(System.in);\nint val = sc.nextInt();",
      note: "Static method gọi qua Tên Lớp (Math.pow()). Non-static (instance) method gọi qua Đối Tượng đã tạo."
    },
    {
      title: "Khởi tạo String đặc biệt",
      trap: "Từ khóa new có bắt buộc đối với tất cả các lớp khi gọi Constructor tạo đối tượng không?",
      badCode: "// Hầu hết các lớp đều bắt buộc:\nScanner sc = Scanner(System.in); // ❌ SAI",
      goodCode: "// Riêng String hỗ trợ viết tắt không cần new:\nString s = \"hello\"; // ✔️ ĐÚNG",
      note: "String là lớp ngoại lệ được tối ưu hóa đặc biệt, cho phép khởi tạo nhanh thông qua cú pháp Literal."
    },
    {
      title: "Overloading vs Overriding",
      trap: "Làm sao phân biệt hai khái niệm nạp chồng và ghi đè phương thức?",
      badCode: "// ❌ SAI: Overloading dựa vào\n// kiểu dữ liệu trả về của hàm.",
      goodCode: "// ✔️ ĐÚNG: Overloading bắt buộc\n// cùng tên hàm nhưng phải khác tham số.",
      note: "Overloading (Nạp chồng) cùng tên khác tham số đầu vào. Không liên quan đến kiểu trả về."
    },
    {
      title: "DecimalFormat: Biến đổi giá trị?",
      trap: "Hàm df.format(x) có thay đổi trực tiếp giá trị của biến gốc x hay không?",
      badCode: "double x = 3.14159;\ndf.format(x);\n// Nghĩ rằng x đã bị đổi thành 3.14 -> ❌ SAI",
      goodCode: "double x = 3.14159;\nString res = df.format(x);\n// x vẫn là 3.14159, res là \"3.14\" -> ✔️ ĐÚNG",
      note: "format() chỉ trả về một chuỗi ký tự hiển thị đã được định dạng, hoàn toàn không làm đổi biến gốc."
    },
    {
      title: "Công thức sinh số ngẫu nhiên",
      trap: "Công thức để sinh ra số nguyên ngẫu nhiên nằm trọn vẹn trong đoạn [min, max] là gì?",
      badCode: "// Sinh số từ 0 đến max:\nint num = rnd.nextInt(max) + min; // ❌ SAI lệch khoảng",
      goodCode: "// Công thức chuẩn:\nint num = rnd.nextInt(max - min + 1) + min;",
      note: "Đừng quên cộng thêm 1 vào khoảng hiệu (max - min) để bao gồm cả giá trị biên max khi sinh số."
    },
    {
      title: "Tên các lớp Wrapper bọc",
      trap: "Tên của các lớp bọc (Wrapper class) có viết trùng hoàn toàn kiểu nguyên thủy không?",
      badCode: "int ➔ Int // ❌ SAI\nchar ➔ Char // ❌ SAI",
      goodCode: "int ➔ Integer // ✔️ ĐÚNG\nchar ➔ Character // ✔️ ĐÚNG",
      note: "Các lớp bọc khác viết hoa chữ cái đầu, riêng Integer và Character viết đầy đủ chữ, không viết tắt."
    },
    {
      title: "Lỗi NullPointerException",
      trap: "Điều gì xảy ra khi gọi phương thức trên đối tượng chưa cấp phát bộ nhớ?",
      badCode: "Point pt; // pt mang giá trị null\npt.setLocation(10, 5); // ❌ Crash runtime!",
      goodCode: "Point pt = new Point(); // Khởi tạo vùng nhớ\npt.setLocation(10, 5); // ✔️ ĐÚNG",
      note: "Phải dùng từ khóa new để cấp phát vùng nhớ RAM trước khi thao tác, nếu không sẽ dính NullPointerException."
    },
    {
      title: "Trừu tượng hóa (Abstraction)",
      trap: "Ý nghĩa cốt lõi của tính Trừu tượng hóa và Che giấu thông tin là gì?",
      badCode: "Bắt người dùng phải hiểu rõ\nchi tiết thuật toán cài đặt bên trong -> ❌ SAI",
      goodCode: "Chỉ định rõ CÁI GÌ cần làm (Giao diện),\nche giấu chi tiết LÀM NHƯ THẾ NÀO (Cài đặt) -> ✔️ ĐÚNG",
      note: "Abstraction che giấu sự phức tạp, giúp người dùng tập trung sử dụng thông qua giao diện interface."
    }
  ];

  return (
    <div className="bg-stone-55 border border-stone-200 rounded-3xl p-4 md:p-6 my-6 shadow-sm font-sans text-stone-850">
      
      {/* Header */}
      <div className="border-b border-stone-200 pb-3 mb-6">
        <span className="bg-rose-100 text-rose-800 text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md">Bí kíp phòng vệ ôn thi</span>
        <h4 className="text-base font-extrabold text-stone-900 mt-1">
          🛡️ Thẻ Ghi Nhớ Chống Bẫy: 10 Điểm Cực Dễ Ra Thi
        </h4>
        <p className="text-xs text-stone-500 mt-1">
          Nhấn vào thẻ bất kỳ để lật mặt sau, xem so sánh cạm bẫy code <code>❌ SAI</code> vs <code>✔️ ĐÚNG</code> và ghi nhớ phòng thi.
        </p>
      </div>

      {/* Grid List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {gotchas.map((item, idx) => {
          const isFlipped = flippedCards[idx];

          return (
            <div
              key={idx}
              onClick={() => handleFlip(idx)}
              className={`border rounded-2xl p-4 transition-all duration-300 cursor-pointer shadow-sm min-h-[160px] flex flex-col justify-between ${
                isFlipped
                  ? "bg-[#1e1d1a] border-amber-500/40 text-stone-300"
                  : "bg-white border-stone-200 hover:border-amber-300 hover:shadow-md text-stone-850"
              }`}
            >
              
              {/* Header inside card */}
              <div className="flex justify-between items-start">
                <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded ${
                  isFlipped ? "bg-amber-950/50 text-amber-400" : "bg-stone-100 text-stone-500"
                }`}>
                  Bẫy #{idx + 1}
                </span>
                <span className="text-[10px] text-stone-400 font-sans">
                  {isFlipped ? "↩️ Nhấp để đóng" : "🔄 Nhấp để lật"}
                </span>
              </div>

              {/* Body inside card */}
              <div className="my-3 flex-1 flex flex-col justify-center">
                {!isFlipped ? (
                  /* Front: Question/Trap */
                  <div className="space-y-1">
                    <h5 className="text-xs font-black text-stone-900">{item.title}</h5>
                    <p className="text-[11px] text-stone-500 leading-relaxed italic">
                      "{item.trap}"
                    </p>
                  </div>
                ) : (
                  /* Back: Code comparison */
                  <div className="space-y-2 text-[10px] font-mono leading-relaxed">
                    <div className="text-rose-400 bg-rose-950/20 px-2 py-1 rounded border border-rose-900/40 whitespace-pre-wrap">
                      {item.badCode}
                    </div>
                    <div className="text-emerald-450 bg-emerald-950/20 px-2 py-1 rounded border border-emerald-900/40 whitespace-pre-wrap">
                      {item.goodCode}
                    </div>
                  </div>
                )}
              </div>

              {/* Footer inside card (Explanation on back, button helper on front) */}
              <div className="border-t border-stone-150 pt-2 text-[10px] leading-relaxed">
                {isFlipped ? (
                  <span className="text-stone-450 font-sans font-normal">
                    💡 <strong>Cốt lõi:</strong> {item.note}
                  </span>
                ) : (
                  <span className="text-stone-400 font-sans font-medium">
                    Hãy nhấp để xem ví dụ code Đúng/Sai và giải thích chi tiết.
                  </span>
                )}
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}
