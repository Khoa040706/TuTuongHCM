"use client";
import React, { useState } from "react";

export default function UserVsDesignerSwitcher() {
  const [roleMode, setRoleMode] = useState("user"); // user, designer

  return (
    <div className="bg-stone-55 border border-stone-200 rounded-3xl p-4 md:p-6 my-6 shadow-sm font-sans text-stone-850">
      
      {/* Header */}
      <div className="border-b border-stone-200 pb-3 mb-5">
        <h4 className="text-base font-extrabold text-stone-900">
          🎭 Bộ Khảo Sát Vai Trò: User vs Designer trong Lập Trình OOP
        </h4>
        <p className="text-xs text-stone-500 mt-1">
          Chuyển đổi giữa 2 chế độ để thấu hiểu sự dịch chuyển quyền hạn, trách nhiệm và cách tư duy mã nguồn của bạn.
        </p>
      </div>

      {/* Mode selectors */}
      <div className="flex gap-3 mb-5">
        <button
          onClick={() => setRoleMode("user")}
          className={`flex-1 py-3 px-4 border rounded-2xl text-xs font-bold transition-all cursor-pointer text-center ${
            roleMode === "user"
              ? "border-amber-500 bg-amber-50/15 text-amber-900 shadow-sm"
              : "border-stone-200 bg-white hover:bg-stone-100 text-stone-600"
          }`}
        >
          <div className="text-[9px] font-black uppercase text-stone-400 mb-0.5">Vai trò bài 3 & 4</div>
          🛠️ NGƯỜI DÙNG (User Mode)
        </button>

        <button
          onClick={() => setRoleMode("designer")}
          className={`flex-1 py-3 px-4 border rounded-2xl text-xs font-bold transition-all cursor-pointer text-center ${
            roleMode === "designer"
              ? "border-purple-500 bg-purple-50/15 text-purple-900 shadow-sm"
              : "border-stone-200 bg-white hover:bg-stone-100 text-stone-600"
          }`}
        >
          <div className="text-[9px] font-black uppercase text-stone-400 mb-0.5">Vai trò bài 5 trở đi</div>
          🎨 NGƯỜI THIẾT KẾ (Designer Mode)
        </button>
      </div>

      {/* Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* Left Side: Java Source representation (7 cols) */}
        <div className="lg:col-span-7 bg-[#1e1d1a] border border-[#2a2926] rounded-2xl p-4 text-stone-300 font-mono text-xs flex flex-col justify-between shadow-md">
          
          <div>
            <div className="text-[9px] text-stone-500 uppercase font-black tracking-wider mb-3 font-sans">
              {roleMode === "user" ? "Mã nguồn sử dụng API (Main.java)" : "Mã nguồn định nghĩa Lớp (CustomScanner.java)"}
            </div>

            {roleMode === "user" ? (
              <pre className="whitespace-pre overflow-x-auto bg-[#121110] p-3 rounded-xl border border-stone-850 text-[11px] leading-relaxed text-stone-200">
{`// Bạn đứng ở bên ngoài, chỉ gọi dùng
public class Main {
    public static void main(String[] args) {
        // 1. Khởi tạo đối tượng từ Constructor
        Scanner sc = new Scanner(System.in);
        
        // 2. Gọi các phương thức public của Scanner
        int age = sc.nextInt();
        String name = sc.nextLine();
    }
}`}
              </pre>
            ) : (
              <pre className="whitespace-pre overflow-x-auto bg-[#121110] p-3 rounded-xl border border-stone-850 text-[11px] leading-relaxed text-stone-200">
{`// Bạn đứng ở bên trong, định nghĩa ra cấu trúc lớp
public class Scanner {
    // 1. Khai báo thuộc tính riêng tư (Che giấu)
    private InputStream source;
    private char[] buffer;

    // 2. Định nghĩa Constructor công khai
    public Scanner(InputStream in) {
        this.source = in;
        this.buffer = new char[1024];
    }

    // 3. Định nghĩa các phương thức xử lý công khai
    public int nextInt() {
        // Thuật toán bóc tách và trả về số nguyên...
    }
}`}
              </pre>
            )}
          </div>

          <div className="text-[10px] text-stone-500 border-t border-stone-850 pt-2.5 mt-3 font-sans">
            {roleMode === "user"
              ? "Người dùng không cần quan tâm thuộc tính source hay mảng buffer lưu trữ thế nào."
              : "Người thiết kế phải quản trị việc khai báo private để tránh người dùng can thiệp trực tiếp làm hỏng dữ liệu."}
          </div>

        </div>

        {/* Right Side: Analysis & Summary (5 cols) */}
        <div className="lg:col-span-5 bg-white border border-stone-200 rounded-2xl p-4 shadow-sm flex flex-col justify-between">
          <div>
            <div className="text-[10px] text-stone-400 uppercase font-black tracking-wider mb-3">Đặc tính tư duy OOP</div>
            
            <div className="space-y-3.5 text-xs text-stone-750">
              
              {/* Box info A */}
              <div className="border-b pb-2.5">
                <span className="font-extrabold text-stone-850 block mb-1">
                  🔑 Quyền hạn (Permissions):
                </span>
                {roleMode === "user" ? (
                  <span>Chỉ được truy cập vào các phương thức công khai (<code>public</code>) mà lớp API đó cung cấp cho bên ngoài.</span>
                ) : (
                  <span>Tối cao. Tự do quyết định thuộc tính nào là <code>private</code>, phương thức nào là <code>public</code> hoặc <code>static</code>.</span>
                )}
              </div>

              {/* Box info B */}
              <div>
                <span className="font-extrabold text-stone-850 block mb-1">
                  🛡️ Trách nhiệm (Responsibility):
                </span>
                {roleMode === "user" ? (
                  <span>Truyền đúng kiểu đối số, nạp đúng thư viện và quản trị lỗi logic đầu ra ứng dụng.</span>
                ) : (
                  <span>Bảo vệ toàn vẹn cấu trúc dữ liệu, chống người ngoài can thiệp làm sai hỏng dữ liệu (Tính đóng gói - Encapsulation).</span>
                )}
              </div>

            </div>
          </div>

          {/* Core insight alert */}
          <div className={`border rounded-xl p-3 text-xs leading-relaxed mt-4 ${
            roleMode === "user"
              ? "bg-amber-50/20 border-amber-250 text-amber-900"
              : "bg-purple-50/20 border-purple-250 text-purple-900"
          }`}>
            {roleMode === "user" ? (
              <span><strong>💡 Ghi nhớ:</strong> Ở vai trò người dùng, bạn xem lớp như một Hộp Đen (Black Box), chỉ quan tâm đến đầu vào và kết quả đầu ra.</span>
            ) : (
              <span><strong>💡 Ghi nhớ:</strong> Ở vai trò người thiết kế, bạn là kiến trúc sư trực tiếp vẽ ra cấu trúc bên trong hộp đen đó.</span>
            )}
          </div>

        </div>

      </div>

    </div>
  );
}
