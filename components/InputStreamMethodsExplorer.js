"use client";
import React, { useState } from "react";
import { Info, HelpCircle, Code, Layers } from "lucide-react";

export default function InputStreamMethodsExplorer() {
  const [selectedMethod, setSelectedMethod] = useState("read");

  const methodsData = {
    read: {
      name: "read()",
      signature: "public abstract int read() throws IOException",
      meaning: "Đọc byte tiếp theo trong stream, trả về giá trị int (0–255); trả về -1 khi hết file.",
      details: "Là abstract method — mọi lớp con của InputStream phải cài đặt (implement) lại. Đây là phương thức nền tảng nhất của mọi luồng vào."
    },
    available: {
      name: "available()",
      signature: "public int available() throws IOException",
      meaning: "Trả về số byte có thể đọc mà không bị block (chặn).",
      details: "Hữu ích khi bạn muốn kiểm tra xem có dữ liệu sẵn sàng để đọc hay không mà không làm treo luồng chương trình hiện tại."
    },
    close: {
      name: "close()",
      signature: "public void close() throws IOException",
      meaning: "Đóng input stream, giải phóng tài nguyên hệ thống liên kết với luồng này.",
      details: "Phương thức này cực kỳ quan trọng để ngăn chặn lỗi rò rỉ bộ nhớ hoặc khóa tệp tin trong hệ điều hành."
    },
    mark: {
      name: "mark(int readlimit)",
      signature: "public void mark(int readlimit)",
      meaning: "Đánh dấu vị trí hiện tại trong stream, hợp lệ cho đến khi đọc đủ n byte.",
      details: "Thường đi kèm với reset(). Lưu ý: không phải luồng con nào cũng hỗ trợ (như FileInputStream không hỗ trợ). Bắt buộc phải gọi mark() trước khi gọi reset(), nếu không reset() sẽ báo lỗi."
    },
    skip: {
      name: "skip(long n)",
      signature: "public long skip(long n) throws IOException",
      meaning: "Bỏ qua n byte dữ liệu khi đọc.",
      details: "Di chuyển con trỏ đọc tiến về phía trước một khoảng n byte mà không cần đọc từng byte một."
    },
    reset: {
      name: "reset()",
      signature: "public void reset() throws IOException",
      meaning: "Đưa con trỏ đọc về vị trí mark đã đặt trước đó.",
      details: "Phụ thuộc trực tiếp vào mark(). Nếu trước đó chưa gọi mark() trên luồng hỗ trợ, việc gọi reset() sẽ ném ra IOException."
    }
  };

  const isRelated = (mKey) => {
    if (selectedMethod === "mark" || selectedMethod === "reset") {
      return mKey === "mark" || mKey === "reset";
    }
    return false;
  };

  return (
    <div className="w-full bg-white border border-stone-200/80 rounded-3xl p-6 text-stone-850 shadow-lg relative font-sans">
      <div className="bg-gradient-to-r from-sky-500 to-indigo-500 h-1.5 absolute top-0 left-0 right-0" />
      
      <h4 className="text-base md:text-lg font-black text-stone-900 flex items-center gap-2 mb-2">
        <Layers className="w-5 h-5 text-sky-600" />
        <span>Mục IX: Trình khám phá các phương thức của lớp InputStream</span>
      </h4>
      <p className="text-xs text-stone-500 mb-6">
        Nhấp chọn một phương thức bên dưới để xem chi tiết chữ ký, cơ chế ném ngoại lệ và các mối tương quan phụ thuộc.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Table of methods */}
        <div className="lg:col-span-5 space-y-2">
          {Object.keys(methodsData).map((mKey) => {
            const item = methodsData[mKey];
            const isSelected = selectedMethod === mKey;
            const related = isRelated(mKey);
            return (
              <div
                key={mKey}
                onClick={() => setSelectedMethod(mKey)}
                className={`p-3 rounded-xl border text-xs font-mono font-bold cursor-pointer transition-all duration-200 ${
                  isSelected
                    ? "bg-sky-600 border-sky-600 text-white shadow-md scale-[1.02]"
                    : related
                    ? "bg-sky-50/60 border-sky-200 text-sky-700 font-black"
                    : "bg-stone-50/50 border-stone-150 text-stone-700 hover:border-sky-300"
                }`}
              >
                <div className="flex justify-between items-center">
                  <span>{item.name}</span>
                  {related && !isSelected && (
                    <span className="text-[9px] bg-sky-100 text-sky-850 px-1.5 py-0.5 rounded font-sans uppercase">
                      Liên quan
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed interpretation panel */}
        <div className="lg:col-span-7 bg-stone-50/60 p-5 rounded-2xl border border-stone-200/80 flex flex-col justify-between shadow-inner">
          <div className="space-y-4">
            <div>
              <span className="text-[9px] text-stone-400 font-bold uppercase tracking-wider block font-mono">
                Chữ ký phương thức (Signature)
              </span>
              <h5 className="font-extrabold text-xs text-indigo-700 font-mono mt-1 bg-white p-2.5 rounded-lg border border-stone-150 shadow-sm overflow-x-auto">
                {methodsData[selectedMethod].signature}
              </h5>
            </div>

            <div>
              <span className="text-[9px] text-stone-400 font-bold uppercase tracking-wider block font-mono mb-1">
                Ý nghĩa cơ bản
              </span>
              <p className="text-xs text-stone-850 font-bold leading-relaxed">
                {methodsData[selectedMethod].meaning}
              </p>
            </div>

            <div>
              <span className="text-[9px] text-stone-400 font-bold uppercase tracking-wider block font-mono mb-1">
                Phân tích sâu & Điểm thi
              </span>
              <p className="text-xs text-stone-600 leading-relaxed">
                {methodsData[selectedMethod].details}
              </p>
            </div>
          </div>

          {(selectedMethod === "mark" || selectedMethod === "reset") && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3 text-[10px] text-yellow-800 leading-normal flex items-start gap-1.5 mt-4">
              <Info className="w-4 h-4 text-yellow-600 shrink-0 mt-0.5" />
              <span>
                <strong>Quy tắc phối hợp:</strong> Phương thức <code>mark()</code> và <code>reset()</code> bắt buộc phải đi kèm nhau. Nếu không đặt dấu bằng <code>mark()</code> trước, việc gọi <code>reset()</code> sẽ lập tức ném ra ngoại lệ.
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
