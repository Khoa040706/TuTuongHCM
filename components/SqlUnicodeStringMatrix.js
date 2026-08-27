"use client";
import React, { useState } from "react";
import { AlignLeft, Globe, Check, AlertCircle, Info, Sparkles, Binary } from "lucide-react";

export default function SqlUnicodeStringMatrix() {
  const [inputStr, setInputStr] = useState("Hồ Chí Minh");
  const [fixedLength, setFixedLength] = useState(15);
  const [useNPrefix, setUseNPrefix] = useState(true);

  // Tính toán số lượng ký tự thực tế
  const charCount = inputStr.length;
  const isVietnamese = /[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđĐ]/.test(inputStr);

  // Hàm chuyển ký tự có dấu sang không dấu giả lập lỗi varchar
  const removeAccents = (str) => {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "D");
  };

  // Tính toán dung lượng và ô nhớ cho 4 kiểu
  const typesData = [
    {
      name: "char(15)",
      category: "Non-Unicode Cố định",
      isUnicode: false,
      isFixed: true,
      bytesPerChar: 1,
      totalBytes: fixedLength,
      previewText: isVietnamese ? removeAccents(inputStr) : inputStr,
      hasEncodingError: isVietnamese,
      explanation: `Chiếm cố định đúng ${fixedLength} bytes. Phần dư thừa được bù tự động bằng khoảng trắng [SPACE PADDING]. Không lưu dấu tiếng Việt chuẩn.`
    },
    {
      name: "varchar(15)",
      category: "Non-Unicode Biến đổi",
      isUnicode: false,
      isFixed: false,
      bytesPerChar: 1,
      totalBytes: Math.min(charCount, fixedLength) + 2, // 2 bytes header quản lý độ dài
      previewText: isVietnamese ? removeAccents(inputStr) : inputStr,
      hasEncodingError: isVietnamese,
      explanation: `Chiếm ${Math.min(charCount, fixedLength)} bytes dữ liệu + 2 bytes header quản lý độ dài = ${Math.min(charCount, fixedLength) + 2} bytes. Tiết kiệm đĩa nhưng không lưu được tiếng Việt Unicode.`
    },
    {
      name: "nchar(15)",
      category: "Unicode Cố định",
      isUnicode: true,
      isFixed: true,
      bytesPerChar: 2,
      totalBytes: fixedLength * 2,
      previewText: useNPrefix ? inputStr : removeAccents(inputStr),
      hasEncodingError: !useNPrefix && isVietnamese,
      explanation: `Chiếm cố định ${fixedLength * 2} bytes (15 ký tự x 2 bytes/ký tự UTF-16). Bảo tồn trọn vẹn dấu tiếng Việt khi có tiền tố N'...'`
    },
    {
      name: "nvarchar(15)",
      category: "Unicode Biến đổi (Khuyên Dùng)",
      isUnicode: true,
      isFixed: false,
      bytesPerChar: 2,
      totalBytes: Math.min(charCount, fixedLength) * 2 + 2,
      previewText: useNPrefix ? inputStr : removeAccents(inputStr),
      hasEncodingError: !useNPrefix && isVietnamese,
      explanation: `Chiếm ${Math.min(charCount, fixedLength) * 2} bytes dữ liệu + 2 bytes header = ${Math.min(charCount, fixedLength) * 2 + 2} bytes. Chuẩn mực vàng lưu tên, địa chỉ Tiếng Việt trong CSDL hiện đại.`
    }
  ];

  return (
    <div className="my-8 rounded-2xl border border-blue-200/80 bg-gradient-to-br from-blue-50/40 via-white to-indigo-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-blue-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-600/20">
            <Globe className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">SqlUnicodeStringMatrix</h3>
              <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 border border-blue-200">
                Memory Slots Anatomy
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Giải phẫu cấu trúc ô nhớ vật lý và thí nghiệm bẫy chuỗi Unicode (char vs varchar vs nchar vs nvarchar)
            </p>
          </div>
        </div>

        {/* N'...' Prefix Switch */}
        <div className="flex items-center gap-3 rounded-xl bg-blue-100/70 px-3 py-2 border border-blue-200">
          <span className="text-xs font-bold text-blue-900">Tiền tố SQL N&apos;...&apos;:</span>
          <button
            onClick={() => setUseNPrefix(!useNPrefix)}
            className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-semibold transition-all ${
              useNPrefix
                ? "bg-emerald-600 text-white shadow-sm"
                : "bg-gray-300 text-gray-700"
            }`}
          >
            {useNPrefix ? <Check className="h-3.5 w-3.5" /> : <AlertCircle className="h-3.5 w-3.5" />}
            {useNPrefix ? "BẬT (Có chữ N')" : "TẮT (Thiếu chữ N')"}
          </button>
        </div>
      </div>

      {/* Input Control Box */}
      <div className="mt-6 grid gap-4 sm:grid-cols-3 rounded-xl border border-blue-100 bg-blue-50/40 p-4">
        <div className="sm:col-span-2">
          <label className="block text-xs font-bold text-gray-700">
            Nhập chuỗi ký tự kiểm thử (Thử gõ tiếng Việt có dấu):
          </label>
          <input
            type="text"
            value={inputStr}
            onChange={(e) => setInputStr(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-blue-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 shadow-inner focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            placeholder="Ví dụ: Hồ Chí Minh, Nguyễn Văn A..."
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-700">
            Độ dài khai báo cột N:
          </label>
          <div className="mt-1.5 flex items-center gap-2">
            <span className="font-mono text-sm font-bold text-blue-700">{fixedLength} ký tự</span>
            <input
              type="range"
              min="10"
              max="25"
              value={fixedLength}
              onChange={(e) => setFixedLength(Number(e.target.value))}
              className="h-2 flex-1 cursor-pointer appearance-none rounded-lg bg-blue-200 accent-blue-600"
            />
          </div>
        </div>
      </div>

      {/* 4 Cards Matrix */}
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {typesData.map((item) => (
          <div
            key={item.name}
            className={`flex flex-col justify-between rounded-xl border p-4 transition-all duration-200 ${
              item.hasEncodingError
                ? "border-amber-300 bg-amber-50/30"
                : "border-gray-200 bg-white shadow-sm hover:shadow-md hover:border-blue-300"
            }`}
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-base font-bold text-blue-900">{item.name}</span>
                <span
                  className={`rounded-md px-2 py-0.5 text-xs font-bold border ${
                    item.isUnicode
                      ? "bg-purple-50 text-purple-700 border-purple-200"
                      : "bg-gray-100 text-gray-700 border-gray-200"
                  }`}
                >
                  {item.category}
                </span>
              </div>

              {/* Total Bytes Gauge */}
              <div className="mt-3 flex items-center justify-between rounded-lg bg-gray-50 px-3 py-2 border border-gray-100 font-mono text-xs">
                <span className="text-gray-500">Tổng bộ nhớ:</span>
                <span className="font-bold text-blue-700">
                  {item.totalBytes} Bytes ({item.bytesPerChar}B/ký tự {item.isFixed ? "x N" : "+ 2B header"})
                </span>
              </div>

              {/* Memory Slots Visualizer */}
              <div className="mt-3">
                <div className="text-[11px] font-semibold text-gray-600">Giải phẫu từng Slot Ô nhớ:</div>
                <div className="mt-1.5 flex flex-wrap gap-1">
                  {Array.from({ length: fixedLength }).map((_, idx) => {
                    const charAtIdx = item.previewText[idx];
                    const isOccupied = idx < Math.min(charCount, fixedLength);
                    const isSpacePadding = item.isFixed && !isOccupied;

                    if (!item.isFixed && !isOccupied) return null;

                    return (
                      <div
                        key={idx}
                        className={`flex h-7 w-7 items-center justify-center rounded border font-mono text-xs font-bold transition-all ${
                          isOccupied
                            ? item.isUnicode
                              ? "bg-blue-600 text-white border-blue-700 shadow-sm"
                              : "bg-emerald-600 text-white border-emerald-700 shadow-sm"
                            : "bg-gray-100 text-gray-400 border-dashed border-gray-300"
                        }`}
                        title={
                          isOccupied
                            ? `Ký tự: '${charAtIdx}' (${item.bytesPerChar} bytes)`
                            : "Space Padding (Khoảng trắng dư thừa)"
                        }
                      >
                        {isOccupied ? charAtIdx : "␣"}
                      </div>
                    );
                  })}
                  {!item.isFixed && (
                    <div className="flex h-7 px-1.5 items-center justify-center rounded bg-gray-800 text-amber-300 border border-gray-900 font-mono text-[10px] font-bold">
                      +2B len
                    </div>
                  )}
                </div>
              </div>

              {/* Result & Warning */}
              <div className="mt-3">
                <div className="text-[11px] font-mono text-gray-500">Giá trị lưu trữ trong CSDL:</div>
                <div
                  className={`mt-1 rounded-lg p-2 font-mono text-xs font-bold ${
                    item.hasEncodingError
                      ? "bg-amber-100 text-amber-900 border border-amber-300"
                      : "bg-gray-900 text-emerald-400"
                  }`}
                >
                  &apos;{item.previewText}&apos;
                </div>
              </div>

              {item.hasEncodingError && (
                <div className="mt-2 flex items-center gap-1.5 text-[11px] font-medium text-amber-800">
                  <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                  <span>
                    {!item.isUnicode
                      ? "Cảnh báo: Kiểu Non-Unicode sẽ bị mất dấu hoặc lỗi '?' khi lưu tiếng Việt!"
                      : "Cảnh báo: Thiếu tiền tố N'...' trong câu lệnh SQL sẽ làm mất dấu Unicode!"}
                  </span>
                </div>
              )}
            </div>

            <p className="mt-3 border-t border-gray-100 pt-2.5 text-xs text-gray-600 leading-relaxed">
              {item.explanation}
            </p>
          </div>
        ))}
      </div>

      {/* Golden Rule Callout */}
      <div className="mt-6 rounded-xl border border-blue-300 bg-gradient-to-r from-blue-900 to-indigo-900 p-4 text-white shadow-md">
        <div className="flex items-start gap-3">
          <div className="rounded-lg bg-blue-800 p-1.5 text-amber-300">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-amber-300">
              Quy tắc Vàng Lựa Chọn Kiểu Chuỗi Trong Thiết Kế CSDL Doanh Nghiệp:
            </h4>
            <ul className="mt-1.5 space-y-1 text-xs text-blue-100">
              <li>
                • <strong>Dùng <code>char(N)</code>:</strong> Khi dữ liệu có độ dài hoàn toàn cố định (Mã SV 8 ký tự, Mã phòng ban 5 ký tự, CCCD 12 số, Mã MD5 hash).
              </li>
              <li>
                • <strong>Dùng <code>varchar(N)</code>:</strong> Khi dữ liệu tiếng Anh/không dấu có độ dài biến thiên (Email, Username, URL Slug).
              </li>
              <li>
                • <strong>Dùng <code>nvarchar(N)</code>:</strong> Bắt buộc dùng cho toàn bộ dữ liệu Tiếng Việt (Họ tên, Địa chỉ, Tên cơ quan, Ghi chú).
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
