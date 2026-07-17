"use client";
import React, { useState } from "react";
import { HardDrive, Binary, AlertCircle, RefreshCw } from "lucide-react";

export default function FileDescriptorAndDataIO() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const methodsList = [
    {
      read: "readBoolean()",
      write: "writeBoolean(boolean b)",
      desc: "Đọc / Ghi giá trị boolean dưới dạng 1 byte (0 = false, 1 = true)."
    },
    {
      read: "readByte()",
      write: "writeByte(int value)",
      desc: "Đọc / Ghi một số nguyên có dấu 8-bit (1 byte)."
    },
    {
      read: "readInt()",
      write: "writeInt(int value)",
      desc: "Đọc / Ghi số nguyên có dấu 32-bit (4 bytes, Big-Endian)."
    },
    {
      read: "readDouble()",
      write: "writeDouble(double value)",
      desc: "Đọc / Ghi số thực dấu phẩy động kép 64-bit (8 bytes)."
    },
    {
      read: "readChar()",
      write: "writeChar(int value)",
      desc: "Đọc / Ghi một ký tự Unicode 16-bit (2 bytes)."
    },
    {
      read: "readLine()",
      write: "writeChars(String value)",
      desc: "Đọc một dòng văn bản kết thúc bằng ký tự xuống dòng / Ghi chuỗi ký tự không chuyển đổi sang UTF-8."
    },
    {
      read: "readUTF()",
      write: "writeUTF(String value)",
      desc: "Đọc / Ghi chuỗi ký tự theo chuẩn định dạng UTF-8 được tùy biến của Java."
    }
  ];

  return (
    <div className="space-y-6 font-sans">
      {/* PART A: FileDescriptor Class */}
      <div className="w-full bg-white border border-stone-200/80 rounded-3xl p-6 text-stone-850 shadow-lg relative">
        <div className="bg-gradient-to-r from-sky-500 to-indigo-500 h-1.5 absolute top-0 left-0 right-0" />
        
        <h4 className="text-base md:text-lg font-black text-stone-900 flex items-center gap-2 mb-2">
          <HardDrive className="w-5 h-5 text-sky-600" />
          <span>Mục VI: Lớp FileDescriptor (Lớp mô tả tệp tin)</span>
        </h4>
        <p className="text-xs text-stone-500 mb-4">
          Cung cấp quyền truy cập vào file descriptor thực tế mà hệ điều hành (OS) quản lý khi tệp tin hoặc thư mục được mở.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-stone-50/60 p-4 rounded-2xl border border-stone-200/60 shadow-inner">
            <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block mb-2 font-mono">
              Các trường tĩnh có sẵn (Static fields)
            </span>
            <pre className="p-3 bg-stone-900 border border-stone-850 rounded-xl font-mono text-[10px] text-indigo-300 shadow-md">
{`static final FileDescriptor err // Cổng Standard Error
static final FileDescriptor in  // Cổng Standard Input
static final FileDescriptor out // Cổng Standard Output`}
            </pre>
          </div>

          <div className="bg-stone-50/60 p-4 rounded-2xl border border-stone-200/60 shadow-inner">
            <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block mb-2 font-mono">
              Các phương thức cốt lõi
            </span>
            <div className="space-y-2">
              <div className="flex justify-between items-center bg-white p-2 rounded-lg border border-stone-150 text-[11px] font-mono">
                <span className="font-bold text-sky-700">sync()</span>
                <span className="text-stone-450">Đồng bộ cưỡng bức xuống ổ cứng</span>
              </div>
              <div className="flex justify-between items-center bg-white p-2 rounded-lg border border-stone-150 text-[11px] font-mono">
                <span className="font-bold text-sky-700">valid()</span>
                <span className="text-stone-450">Kiểm tra xem mô tả tệp còn hợp lệ</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-sky-50 border border-sky-100 rounded-2xl p-4 flex gap-3 items-start mt-4">
          <AlertCircle className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
          <p className="text-xs text-sky-700 leading-relaxed">
            <strong>Nguyên tắc sử dụng:</strong> Không nên tự tạo đối tượng <code>FileDescriptor</code> trong ứng dụng vì chúng gắn liền chặt chẽ với cấu trúc tài nguyên của hệ điều hành. Hãy để JVM tự gán và quản lý.
          </p>
        </div>
      </div>

      {/* PART B: Mirror Table (DataInput/DataOutput) */}
      <div className="w-full bg-white border border-stone-200/80 rounded-3xl p-6 text-stone-850 shadow-lg relative">
        <div className="bg-gradient-to-r from-sky-500 to-indigo-500 h-1.5 absolute top-0 left-0 right-0" />
        
        <h4 className="text-base md:text-lg font-black text-stone-900 flex items-center gap-2 mb-2">
          <Binary className="w-5 h-5 text-sky-600" />
          <span>Mục VII: Bảng Tương Tác Đối Xứng DataInput & DataOutput</span>
        </h4>
        <p className="text-xs text-stone-500 mb-6">
          Rê chuột vào một phương thức bất kỳ của cột Đọc (DataInput) hoặc Ghi (DataOutput) để xem phương thức đối xứng tương ứng và kiểu dữ liệu nguyên thủy (primitive) được truyền tải.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Mirror Table */}
          <div className="lg:col-span-8 space-y-2">
            <div className="grid grid-cols-2 gap-4 text-center mb-1">
              <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider font-mono">Interface DataInput (Đọc)</span>
              <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider font-mono">Interface DataOutput (Ghi)</span>
            </div>

            {methodsList.map((item, idx) => {
              const isHovered = hoveredIdx === idx;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className={`grid grid-cols-2 gap-4 p-2 rounded-xl transition-all duration-200 border cursor-pointer ${
                    isHovered
                      ? "bg-sky-50/80 border-sky-300 scale-[1.01] shadow-sm"
                      : "bg-stone-50/50 border-stone-100"
                  }`}
                >
                  <div className={`p-2 rounded-lg font-mono text-[11px] transition-colors ${
                    isHovered ? "bg-white text-sky-700 font-black" : "text-stone-700"
                  }`}>
                    {item.read}
                  </div>
                  <div className={`p-2 rounded-lg font-mono text-[11px] transition-colors ${
                    isHovered ? "bg-white text-indigo-700 font-black" : "text-stone-700"
                  }`}>
                    {item.write}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Explanation panel */}
          <div className="lg:col-span-4 bg-stone-50/60 p-5 rounded-2xl border border-stone-200/80 flex flex-col justify-between shadow-inner">
            <div className="space-y-4">
              <span className="text-[10px] text-stone-450 font-bold uppercase tracking-wider block font-mono">
                Giải thích kiểu dữ liệu
              </span>
              {hoveredIdx !== null ? (
                <div className="space-y-3">
                  <div className="font-extrabold text-sm text-sky-700 font-mono">
                    {methodsList[hoveredIdx].read.replace("()", "")}
                  </div>
                  <p className="text-xs text-stone-650 leading-relaxed font-medium">
                    {methodsList[hoveredIdx].desc}
                  </p>
                </div>
              ) : (
                <div className="text-xs text-stone-400 leading-relaxed italic">
                  Rê chuột vào các hàng bên trái để phân tích chi tiết kích thước byte tương ứng.
                </div>
              )}
            </div>

            <div className="border-t border-stone-200 pt-4 mt-4">
              <span className="text-[9px] text-stone-400 font-bold uppercase tracking-wider block mb-2 font-mono">
                Cơ chế đóng gói (Wrapper)
              </span>
              <pre className="p-3 bg-stone-900 border border-stone-850 rounded-xl font-mono text-[9px] text-indigo-300 shadow-md overflow-x-auto">
{`// Wrap để đọc kiểu dữ liệu primitive
DataInputStream dis = 
  new DataInputStream(System.in);
double d = dis.readDouble();`}
              </pre>
            </div>
          </div>
        </div>

        {/* Confusion Alert Card */}
        <div className="bg-rose-50/80 border border-rose-250/60 rounded-2xl p-4 flex gap-3 items-start mt-6 shadow-sm">
          <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
          <div>
            <span className="text-xs font-bold text-rose-900 font-mono uppercase tracking-wider block">
              ⚠️ Điểm thi cực kỳ quan trọng (Bẫy lý thuyết)
            </span>
            <p className="text-xs text-rose-700 mt-1 leading-relaxed">
              Hãy ghi nhớ: <code>DataInput</code> và <code>DataOutput</code> là các <strong>Interface</strong> (không thể dùng <code>new</code> khởi tạo). Còn <code>DataInputStream</code> và <code>DataOutputStream</code> là các <strong>Class</strong> cụ thể hiện thực các interface này. Đề thi thường đánh tráo khái niệm giữa dạng Stream (Class) và ...put (Interface).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
