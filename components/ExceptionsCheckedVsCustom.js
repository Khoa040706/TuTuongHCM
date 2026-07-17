"use client";
import React, { useState } from "react";
import { HelpCircle, Info, ShieldAlert, BookOpen, CheckCircle, Code } from "lucide-react";

export default function ExceptionsCheckedVsCustom() {
  // Part A: Checked vs Unchecked Details
  const [hoveredCell, setHoveredCell] = useState(null);

  // Part B: Custom Exception Highlight
  const [activeToken, setActiveToken] = useState(null);

  const tokenExplanation = {
    extends: "extends Exception: Khai báo MyException kế thừa từ lớp Exception có sẵn của Java để tạo một Checked Exception (compiler bắt buộc xử lý). Nếu muốn tạo Unchecked Exception, bạn phải extends RuntimeException.",
    super: "super(s): Gọi constructor của lớp cha (Exception) để truyền và lưu thông điệp lỗi 's'. Nhờ đó, sau này ta có thể lấy lại tin nhắn lỗi bằng cách gọi phương thức e.getMessage()."
  };

  return (
    <div className="space-y-6">
      {/* PART A: Checked vs Unchecked */}
      <div className="w-full bg-white border border-stone-200/80 rounded-3xl p-6 text-stone-850 shadow-lg relative font-sans">
        <div className="bg-gradient-to-r from-amber-500 to-emerald-500 h-1.5 absolute top-0 left-0 right-0" />
        
        <h4 className="text-base md:text-lg font-black text-stone-900 flex items-center gap-2 mb-2">
          <BookOpen className="w-5 h-5 text-amber-600" />
          <span>Mục V: Phân Biệt Checked vs Unchecked Exceptions</span>
        </h4>
        <p className="text-xs text-stone-500 mb-6">
          Rê chuột vào các tiêu chí so sánh trong bảng dưới đây để xem phân tích chuyên sâu về sự khác biệt giữa Checked và Unchecked Exception.
        </p>

        {/* Comparison Table */}
        <div className="overflow-x-auto border border-stone-200/80 rounded-2xl shadow-sm bg-stone-50/20 mb-6">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-stone-50 border-b border-stone-200 font-mono text-[10px] text-stone-450 uppercase font-bold">
                <th className="p-3.5 pl-5">Tiêu chí</th>
                <th className="p-3.5 bg-amber-500/5 text-amber-800 font-bold border-x border-stone-200">Checked Exception (Bắt buộc)</th>
                <th className="p-3.5 bg-emerald-500/5 text-emerald-800 font-bold">Unchecked Exception (Tự do)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-150 bg-white">
              <tr 
                onMouseEnter={() => setHoveredCell("compile")} 
                onMouseLeave={() => setHoveredCell(null)}
                className="hover:bg-stone-50/40 transition-colors"
              >
                <td className="p-3.5 pl-5 font-bold text-stone-700">Kiểm tra lúc compile</td>
                <td className="p-3.5 border-x border-stone-200 text-stone-650 font-medium">Có (Trình biên dịch bắt buộc kiểm tra)</td>
                <td className="p-3.5 text-stone-650 font-medium">Không (Trình biên dịch hoàn toàn bỏ qua)</td>
              </tr>
              <tr 
                onMouseEnter={() => setHoveredCell("handling")} 
                onMouseLeave={() => setHoveredCell(null)}
                className="hover:bg-stone-50/40 transition-colors"
              >
                <td className="p-3.5 pl-5 font-bold text-stone-700">Bắt buộc xử lý</td>
                <td className="p-3.5 border-x border-stone-200 text-stone-650">Có (Phải bọc trong try-catch hoặc khai báo throws)</td>
                <td className="p-3.5 text-stone-650">Không bắt buộc (Chương trình tự sập nếu có lỗi xảy ra)</td>
              </tr>
              <tr 
                onMouseEnter={() => setHoveredCell("parent")} 
                onMouseLeave={() => setHoveredCell(null)}
                className="hover:bg-stone-50/40 transition-colors"
              >
                <td className="p-3.5 pl-5 font-bold text-stone-700">Lớp cha điển hình</td>
                <td className="p-3.5 border-x border-stone-200 font-mono text-amber-800">Exception (Trừ RuntimeException)</td>
                <td className="p-3.5 font-mono text-emerald-800">RuntimeException, Error</td>
              </tr>
              <tr 
                onMouseEnter={() => setHoveredCell("cause")} 
                onMouseLeave={() => setHoveredCell(null)}
                className="hover:bg-stone-50/40 transition-colors"
              >
                <td className="p-3.5 pl-5 font-bold text-stone-700">Nguyên nhân</td>
                <td className="p-3.5 border-x border-stone-200 text-stone-600">Lỗi khách quan ngoài luồng (I/O, mất mạng, file thiếu...)</td>
                <td className="p-3.5 text-stone-600">Lỗi lập trình logic của developer (Null Pointer, mảng sai chỉ số...)</td>
              </tr>
              <tr 
                onMouseEnter={() => setHoveredCell("example")} 
                onMouseLeave={() => setHoveredCell(null)}
                className="hover:bg-stone-50/40 transition-colors"
              >
                <td className="p-3.5 pl-5 font-bold text-stone-700">Ví dụ cụ thể</td>
                <td className="p-3.5 border-x border-stone-200 font-mono text-[10.5px] text-amber-700">IOException, FileNotFoundException</td>
                <td className="p-3.5 font-mono text-[10.5px] text-emerald-700">NullPointerException, IndexOutOfBoundsException</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Explain Box */}
        <div className="bg-stone-100 border border-stone-250 p-4 rounded-2xl font-mono text-xs leading-relaxed text-stone-650 min-h-[58px] flex items-center shadow-inner">
          {hoveredCell === "compile" && <span>💡 Trình biên dịch (compiler) sẽ quét dòng lệnh lúc build. Nếu phát hiện Checked Exception mà chưa được xử lý bằng try-catch hoặc ném đi bằng throws, code sẽ không thể biên dịch thành công!</span>}
          {hoveredCell === "handling" && <span>💡 Với Checked Exception, bạn bắt buộc phải có giải pháp xử lý. Ngược lại, Unchecked Exception thường xảy ra do lỗi code nên Java không ép buộc phải try-catch, thay vào đó bạn nên viết code chuẩn xác để tránh lỗi.</span>}
          {hoveredCell === "parent" && <span>💡 Mọi class kế thừa trực tiếp từ Exception là Checked. Chỉ những class kế thừa từ RuntimeException hoặc Error mới thuộc loại Unchecked Exception.</span>}
          {hoveredCell === "cause" && <span>💡 Checked Exception biểu diễn các tình huống hệ thống lỗi vật lý bên ngoài (không tìm thấy file, mất kết nối cơ sở dữ liệu), không thể ngăn chặn trước bằng lệnh IF kiểm tra.</span>}
          {hoveredCell === "example" && <span>💡 NullPointerException và IndexOutOfBoundsException là các lỗi cực kỳ phổ biến của sinh viên lúc làm bài kiểm tra thực hành.</span>}
          {!hoveredCell && <span className="italic text-stone-400">Rê chuột lên các hàng trong bảng so sánh để xem giải thích chuyên sâu...</span>}
        </div>
      </div>

      {/* PART B: Custom Exception */}
      <div className="w-full bg-white border border-stone-200/80 rounded-3xl p-6 text-stone-850 shadow-lg relative font-sans">
        <div className="bg-gradient-to-r from-teal-500 to-indigo-500 h-1.5 absolute top-0 left-0 right-0" />
        
        <h4 className="text-base md:text-lg font-black text-stone-900 flex items-center gap-2 mb-2">
          <Code className="w-5 h-5 text-teal-600" />
          <span>Mục VI: Khai Báo và Sử Dụng Custom Exception</span>
        </h4>
        <p className="text-xs text-stone-500 mb-6">
          Nhấp chuột (click) vào các từ khóa được highlight màu vàng trong mã nguồn bên dưới để tìm hiểu vai trò đặc thù của chúng khi tạo lớp Exception tùy chỉnh.
        </p>

        {/* Code view with clickable tokens */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-4">
          <div className="lg:col-span-7 bg-stone-50/60 p-5 rounded-2xl border border-stone-200/80 flex flex-col justify-between shadow-inner">
            <pre className="p-4 bg-stone-900 border border-stone-850 rounded-xl font-mono text-[10.5px] leading-relaxed text-indigo-300 shadow-md">
              <div>{`public class MyException `}
                <span
                  onClick={() => setActiveToken("extends")}
                  className="bg-yellow-950/80 text-yellow-300 font-bold border border-yellow-800 px-1 py-0.5 rounded cursor-pointer hover:bg-yellow-900/80 transition-colors select-none"
                >
                  extends Exception
                </span>
                {` {`}
              </div>
              <div className="pl-6">{`public MyException(String s) {`}</div>
              <div className="pl-12">
                <span
                  onClick={() => setActiveToken("super")}
                  className="bg-yellow-950/80 text-yellow-300 font-bold border border-yellow-800 px-1 py-0.5 rounded cursor-pointer hover:bg-yellow-900/80 transition-colors select-none"
                >
                  super(s);
                </span>
              </div>
              <div className="pl-6">{`}`}</div>
              <div>{`}`}</div>
            </pre>
          </div>

          {/* Token explanation box */}
          <div className="lg:col-span-5 bg-stone-50/60 p-5 rounded-2xl border border-stone-200/80 flex flex-col justify-between shadow-inner">
            <div className="space-y-4">
              <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block font-mono">
                Thông tin giải nghĩa từ khóa
              </span>

              <div className="p-4 bg-white border border-stone-200 rounded-xl font-sans text-xs text-stone-700 min-h-[110px] flex items-center shadow-sm">
                {activeToken ? (
                  <span>{tokenExplanation[activeToken]}</span>
                ) : (
                  <span className="italic text-stone-400">Click vào từ khóa 'extends Exception' hoặc 'super(s)' ở khung code bên trái để xem giải nghĩa...</span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Custom Exception Usage code blocks */}
        <span className="text-[10px] text-stone-450 font-bold uppercase tracking-wider block mb-3 font-mono">
          Cách ném và bắt Custom Exception trong chương trình
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <span className="text-[9px] text-stone-500 block font-bold mb-1 font-mono">1. Cách ném ngoại lệ tùy chỉnh:</span>
            <pre className="p-3.5 bg-stone-900 border border-stone-850 rounded-xl font-mono text-[10px] leading-relaxed text-indigo-300 shadow-md">
{`throw new MyException("MyException: Some reasons");`}
            </pre>
          </div>

          <div>
            <span className="text-[9px] text-stone-500 block font-bold mb-1 font-mono">2. Cách bắt ngoại lệ tùy chỉnh:</span>
            <pre className="p-3.5 bg-stone-900 border border-stone-850 rounded-xl font-mono text-[10px] leading-relaxed text-indigo-300 shadow-md">
{`try {
    // Đoạn code có khả năng ném lỗi
} catch (MyException e) {
    System.out.println(e.getMessage());
}`}
            </pre>
          </div>
        </div>
      </div>

      {/* PART C: Unified Cheat Sheet */}
      <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block font-mono">
        🧠 Cheat Sheet Tổng Ôn Tập Chương Exceptions (Bài 11)
      </span>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 font-sans">
        {/* Column 1 */}
        <div className="bg-white border border-stone-200/80 p-5 rounded-3xl shadow-md flex flex-col justify-between hover:shadow-lg transition-shadow">
          <div>
            <div className="flex justify-between items-center mb-3">
              <h5 className="font-bold text-xs uppercase tracking-wider text-indigo-700">1. Execution Flow</h5>
              <span className="text-[8px] font-bold px-1.5 py-0.5 bg-indigo-50 text-indigo-750 rounded-lg font-mono">IV</span>
            </div>
            <ul className="text-xs text-stone-600 space-y-2.5 leading-relaxed">
              <li>• Khi lỗi xảy ra, phần code sau lệnh lỗi trong <code>try</code> bị <strong>hủy hoàn toàn</strong>, nhảy ngay tới <code>catch</code> tương ứng.</li>
              <li>• Khối <code>finally</code> <strong>bắt buộc phải thực hiện</strong> kể cả khi try hoặc catch có lệnh <code>return</code>.</li>
            </ul>
          </div>
        </div>

        {/* Column 2 */}
        <div className="bg-white border border-stone-200/80 p-5 rounded-3xl shadow-md flex flex-col justify-between hover:shadow-lg transition-shadow">
          <div>
            <div className="flex justify-between items-center mb-3">
              <h5 className="font-bold text-xs uppercase tracking-wider text-amber-700">2. Checked vs Unchecked</h5>
              <span className="text-[8px] font-bold px-1.5 py-0.5 bg-amber-50 text-amber-750 rounded-lg font-mono">V</span>
            </div>
            <ul className="text-xs text-stone-600 space-y-2.5 leading-relaxed">
              <li>• <strong>Checked:</strong> Compiler bắt buộc xử lý lúc biên dịch (class kế thừa <code>Exception</code> trực tiếp).</li>
              <li>• <strong>Unchecked:</strong> Compiler bỏ qua, lỗi phát sinh lúc chạy (class kế thừa <code>RuntimeException</code>).</li>
            </ul>
          </div>
        </div>

        {/* Column 3 */}
        <div className="bg-white border border-stone-200/80 p-5 rounded-3xl shadow-md flex flex-col justify-between hover:shadow-lg transition-shadow">
          <div>
            <div className="flex justify-between items-center mb-3">
              <h5 className="font-bold text-xs uppercase tracking-wider text-teal-700">3. Custom Exception</h5>
              <span className="text-[8px] font-bold px-1.5 py-0.5 bg-teal-50 text-teal-750 rounded-lg font-mono">VI</span>
            </div>
            <ul className="text-xs text-stone-600 space-y-2.5 leading-relaxed">
              <li>• Muốn tự tạo lớp Exception riêng, dùng cú pháp kế thừa: <code>extends Exception</code>.</li>
              <li>• Bắt buộc gọi constructor của cha trong constructor con thông qua lệnh: <code>super(message)</code>.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
