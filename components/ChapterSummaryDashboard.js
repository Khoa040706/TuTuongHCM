"use client";
import React from "react";

export default function ChapterSummaryDashboard() {
  return (
    <div className="bg-stone-55 border border-stone-200 rounded-3xl p-4 md:p-6 my-6 shadow-sm font-sans text-stone-800">
      
      {/* Header */}
      <div className="border-b border-stone-200 pb-3 mb-6">
        <h4 className="text-base font-extrabold text-stone-900 flex items-center gap-2">
          ⚡ Bảng Tra Cứu & Ôn Tập Trọng Tâm Chương 3
        </h4>
        <p className="text-xs text-stone-500 mt-1">
          Hệ thống hóa toàn bộ kiến thức cốt lõi về Mảng (Array) và Chuỗi (String) dưới dạng sơ đồ trực quan dễ nhớ.
        </p>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        
        {/* Card 1: Length comparison */}
        <div className="bg-white border border-stone-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-amber-500 text-lg">📏</span>
              <h5 className="font-extrabold text-stone-900 text-sm">Phân Biệt Độ Dài</h5>
            </div>
            <p className="text-xs text-stone-550 mb-4 leading-relaxed">
              Bẫy kinh điển trong bài thi trắc nghiệm. Hãy chú ý dấu ngoặc tròn <code>()</code>.
            </p>
            
            <div className="space-y-2.5">
              {/* Array */}
              <div className="bg-stone-50 border border-stone-150 rounded-xl p-2.5 flex flex-col gap-1 font-mono text-[11px]">
                <div className="flex justify-between items-center">
                  <span className="text-stone-400 uppercase text-[8px] font-black font-sans">Dành cho MẢNG (Array)</span>
                  <span className="bg-sky-50 text-sky-700 border border-sky-100 rounded px-1.5 py-0.5 text-[9px] font-bold font-sans">Thuộc tính (Property)</span>
                </div>
                <div className="text-stone-800 font-bold mt-0.5">myList.length</div>
                <div className="text-[10px] text-stone-500 font-sans italic">Không có dấu ngoặc tròn ở cuối.</div>
              </div>

              {/* String */}
              <div className="bg-stone-50 border border-stone-150 rounded-xl p-2.5 flex flex-col gap-1 font-mono text-[11px]">
                <div className="flex justify-between items-center">
                  <span className="text-stone-400 uppercase text-[8px] font-black font-sans">Dành cho CHUỖI (String)</span>
                  <span className="bg-amber-50 text-amber-700 border border-amber-100 rounded px-1.5 py-0.5 text-[9px] font-bold font-sans">Phương thức (Method)</span>
                </div>
                <div className="text-stone-800 font-bold mt-0.5">s.length()</div>
                <div className="text-[10px] text-stone-500 font-sans italic">Bắt buộc phải có dấu ngoặc tròn.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Allocation Literal vs new */}
        <div className="bg-white border border-stone-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sky-550 text-lg">💾</span>
              <h5 className="font-extrabold text-stone-900 text-sm">Literal vs new String()</h5>
            </div>
            <p className="text-xs text-stone-550 mb-4 leading-relaxed">
              Hai cơ chế cấp phát bộ nhớ RAM hoàn toàn khác nhau của Java.
            </p>

            <div className="space-y-2.5">
              {/* String Literal */}
              <div className="bg-stone-50 border border-stone-150 rounded-xl p-2.5 flex flex-col gap-1 font-mono text-[11px]">
                <div className="flex justify-between items-center">
                  <span className="text-stone-800 font-bold">s1 = "abc";</span>
                  <span className="bg-amber-100 text-amber-800 rounded px-1.5 py-0.5 text-[8px] font-black font-sans uppercase">String Pool</span>
                </div>
                <p className="text-[10px] text-stone-550 font-sans leading-relaxed mt-1">
                  JVM kiểm tra và <strong>tái sử dụng</strong> đối tượng cũ nếu trùng nội dung giúp tiết kiệm RAM.
                </p>
              </div>

              {/* new String */}
              <div className="bg-stone-50 border border-stone-150 rounded-xl p-2.5 flex flex-col gap-1 font-mono text-[11px]">
                <div className="flex justify-between items-center">
                  <span className="text-stone-800 font-bold">s2 = new String("abc");</span>
                  <span className="bg-sky-100 text-sky-800 rounded px-1.5 py-0.5 text-[8px] font-black font-sans uppercase">Normal Heap</span>
                </div>
                <p className="text-[10px] text-stone-550 font-sans leading-relaxed mt-1">
                  Từ khóa <code>new</code> ép JVM <strong>luôn tạo một đối tượng mới</strong> trên Heap thông thường.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: So sánh == vs equals */}
        <div className="bg-white border border-stone-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-emerald-500 text-lg">⚖️</span>
              <h5 className="font-extrabold text-stone-900 text-sm">So sánh == vs .equals()</h5>
            </div>
            <p className="text-xs text-stone-550 mb-4 leading-relaxed">
              Sai lầm cực kỳ phổ biến khiến chương trình chạy sai logic so sánh chuỗi.
            </p>

            <div className="space-y-2.5 font-sans text-xs">
              {/* == */}
              <div className="border border-rose-100 bg-rose-50/10 rounded-xl p-3 flex gap-2.5 items-start">
                <span className="text-rose-500 font-bold">❌</span>
                <div>
                  <div className="font-mono text-stone-850 font-bold text-[11px] mb-0.5">Toán tử ==</div>
                  <div className="text-[10px] text-stone-550 leading-relaxed">
                    Chỉ so sánh <strong>địa chỉ tham chiếu bộ nhớ</strong>. Thường sai khi so sánh hai đối tượng tạo bằng <code>new</code>.
                  </div>
                </div>
              </div>

              {/* equals */}
              <div className="border border-emerald-150 bg-emerald-50/10 rounded-xl p-3 flex gap-2.5 items-start">
                <span className="text-emerald-600 font-bold">✔️</span>
                <div>
                  <div className="font-mono text-stone-850 font-bold text-[11px] mb-0.5">Hàm .equals()</div>
                  <div className="text-[10px] text-stone-550 leading-relaxed">
                    Đi sâu so sánh <strong>nội dung từng ký tự</strong> bên trong chuỗi. Luôn ưu tiên dùng hàm này.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4: Immutable */}
        <div className="bg-white border border-stone-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-rose-500 text-lg">🛡️</span>
              <h5 className="font-extrabold text-stone-900 text-sm">Tính Bất Biến (Immutable)</h5>
            </div>
            <p className="text-xs text-stone-550 mb-4 leading-relaxed">
              Chuỗi String trong Java một khi đã tạo thì <strong>không thể thay đổi nội dung</strong>.
            </p>

            <div className="bg-amber-50/30 border border-amber-200 rounded-xl p-3 text-xs leading-relaxed text-stone-750">
              <div className="font-bold text-amber-900 mb-1 flex items-center gap-1">
                <span>💡</span> Mẹo tối ưu hóa bộ nhớ:
              </div>
              Khi bạn thực hiện phép cộng chuỗi <code>+</code> nhiều lần trong một vòng lặp lớn, JVM sẽ phải tạo ra hàng ngàn chuỗi trung gian dư thừa gây đầy RAM.<br/>
              ➔ Hãy luôn sử dụng lớp <strong><code>StringBuilder</code></strong> (cho phép thay đổi nội dung) để nối chuỗi tối ưu.
            </div>
          </div>
        </div>

        {/* Card 5: Gotchas & exam methods */}
        <div className="bg-white border border-stone-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-indigo-500 text-lg">🎯</span>
              <h5 className="font-extrabold text-stone-900 text-sm">Các Hàm Trọng Tâm Thi Cử</h5>
            </div>
            <p className="text-xs text-stone-550 mb-3 leading-relaxed">
              Danh sách các hàm thao tác chuỗi bắt buộc phải nhớ rõ tham số đầu vào và đầu ra khi đi thi:
            </p>

            <div className="flex flex-wrap gap-2.5">
              <span className="bg-stone-50 border border-stone-200 text-stone-750 px-2 py-1 rounded-lg text-[10px] font-mono font-bold hover:bg-amber-50 hover:border-amber-300 hover:text-amber-900 transition-all cursor-default shadow-sm">
                substring(begin, end)
              </span>
              <span className="bg-stone-50 border border-stone-200 text-stone-750 px-2 py-1 rounded-lg text-[10px] font-mono font-bold hover:bg-amber-50 hover:border-amber-300 hover:text-amber-900 transition-all cursor-default shadow-sm">
                indexOf(str)
              </span>
              <span className="bg-stone-50 border border-stone-200 text-stone-750 px-2 py-1 rounded-lg text-[10px] font-mono font-bold hover:bg-amber-50 hover:border-amber-300 hover:text-amber-900 transition-all cursor-default shadow-sm">
                trim()
              </span>
              <span className="bg-stone-50 border border-stone-200 text-stone-750 px-2 py-1 rounded-lg text-[10px] font-mono font-bold hover:bg-amber-50 hover:border-amber-300 hover:text-amber-900 transition-all cursor-default shadow-sm">
                split(regex)
              </span>
              <span className="bg-stone-50 border border-stone-200 text-stone-750 px-2 py-1 rounded-lg text-[10px] font-mono font-bold hover:bg-amber-50 hover:border-amber-300 hover:text-amber-900 transition-all cursor-default shadow-sm">
                replace(old, new)
              </span>
              <span className="bg-stone-50 border border-stone-200 text-stone-750 px-2 py-1 rounded-lg text-[10px] font-mono font-bold hover:bg-amber-50 hover:border-amber-300 hover:text-amber-900 transition-all cursor-default shadow-sm">
                toUpperCase()
              </span>
            </div>
            <div className="text-[10px] text-stone-450 italic mt-3 font-sans">
              *Lưu ý: <code>substring(begin, end)</code> chỉ trích xuất từ <code>begin</code> đến <code>end - 1</code>.
            </div>
          </div>
        </div>

        {/* Card 6: Vietnamese Name Exercise */}
        <div className="bg-white border border-stone-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-violet-500 text-lg">📝</span>
              <h5 className="font-extrabold text-stone-900 text-sm">Dạng Bài Tập Tổng Hợp</h5>
            </div>
            <p className="text-xs text-stone-550 mb-3 leading-relaxed">
              Bài tập <strong>chuẩn hóa và bóc tách họ tên tiếng Việt</strong> là dạng bài kinh điển kết hợp nhiều hàm nhất.
            </p>

            <div className="border border-stone-150 rounded-xl p-3 bg-stone-50">
              <div className="text-[9px] font-black text-stone-400 uppercase tracking-wider mb-2">Lộ trình giải bài tập họ tên:</div>
              <div className="space-y-1.5 text-[10px] font-sans text-stone-650">
                <div>1. Dùng <code>trim()</code> để loại bỏ khoảng trắng rìa.</div>
                <div>2. Dùng <code>split("\\s+")</code> tách thành mảng các từ.</div>
                <div>3. Dùng <code>substring</code> & <code>toUpperCase</code> viết hoa chữ cái đầu.</div>
                <div>4. Xác định Họ: <code>words[0]</code>, Tên: <code>words[length-1]</code>.</div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
