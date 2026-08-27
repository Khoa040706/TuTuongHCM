"use client";
import React, { useState } from "react";
import { Database, AlertTriangle, CheckCircle2, HardDrive, Cpu, Hash, Info, Layers } from "lucide-react";

export default function SqlDataTypesVisualizer() {
  const [selectedCategory, setSelectedCategory] = useState("exact");
  const [testNumber, setTestNumber] = useState("250");
  const [rowCount, setRowCount] = useState(1000000); // 1 triệu dòng

  // Danh mục kiểu dữ liệu
  const dataTypes = {
    exact: [
      {
        name: "tinyint",
        bytes: 1,
        min: 0,
        max: 255,
        desc: "Lưu số nguyên dương cực nhỏ (tuổi, điểm hệ 100, mã trạng thái).",
        sqlExample: "Tuoi tinyint",
        format: "Integer (0..255)"
      },
      {
        name: "smallint",
        bytes: 2,
        min: -32768,
        max: 32767,
        desc: "Lưu số nguyên nhỏ từ -32.768 đến 32.767 (năm sinh, mã môn học).",
        sqlExample: "NamSinh smallint",
        format: "Integer (-2^15..2^15-1)"
      },
      {
        name: "int",
        bytes: 4,
        min: -2147483648,
        max: 2147483647,
        desc: "Kiểu số nguyên thông dụng nhất, dải giá trị ~2.14 tỷ.",
        sqlExample: "MaNV int",
        format: "Integer (-2^31..2^31-1)"
      },
      {
        name: "bigint",
        bytes: 8,
        min: -9223372036854775808n,
        max: 9223372036854775807n,
        desc: "Số nguyên cực lớn (-2^63 đến 2^63-1), dùng cho ID giao dịch tài chính toàn cầu.",
        sqlExample: "GiaoDichID bigint",
        format: "Integer (-2^63..2^63-1)"
      },
      {
        name: "numeric(10,2)",
        bytes: 9,
        min: -99999999.99,
        max: 99999999.99,
        desc: "Số chính xác cố định với p chữ số tổng cộng, d chữ số thập phân.",
        sqlExample: "TyGia numeric(10, 2)",
        format: "Fixed Precision (p, s)"
      },
      {
        name: "money",
        bytes: 8,
        min: -922337203685477.5808,
        max: 922337203685477.5807,
        desc: "Biểu diễn tiền tệ chính xác đến 4 chữ số thập phân.",
        sqlExample: "Luong money",
        format: "Currency (-2^63/10000..2^63-1)"
      }
    ],
    approx: [
      {
        name: "float(n)",
        bytes: 8,
        min: "-1.79E+308",
        max: "1.79E+308",
        desc: "Số dấu chấm động độ chính xác kép (n=25..53 tốn 8 bytes).",
        sqlExample: "ToaDoKinhDo float(53)",
        format: "Approximate (Double Precision)"
      },
      {
        name: "real",
        bytes: 4,
        min: "-3.40E+38",
        max: "3.40E+38",
        desc: "Số dấu chấm động độ chính xác đơn (tương đương float(24)).",
        sqlExample: "TyLe real",
        format: "Approximate (Single Precision)"
      }
    ],
    datetime: [
      {
        name: "datetime",
        bytes: 8,
        min: "01/01/1753",
        max: "31/12/9999",
        desc: "Lưu ngày giờ, chính xác đến 3.33 mili-giây (cấu trúc 2 số nguyên 4-byte).",
        sqlExample: "NgayVaoLam datetime",
        format: "3.33 ms precision"
      },
      {
        name: "smalldatetime",
        bytes: 4,
        min: "01/01/1900",
        max: "06/06/2079",
        desc: "Lưu ngày giờ với độ chính xác đến phút (tiết kiệm 50% dung lượng so với datetime).",
        sqlExample: "GioHop smalldatetime",
        format: "1 minute precision"
      }
    ]
  };

  // Hàm kiểm tra tràn số cho live tester
  const checkFit = (valStr, type) => {
    if (valStr.trim() === "") return { fits: true, msg: "Nhập giá trị để kiểm thử" };
    const num = Number(valStr);
    if (isNaN(num)) return { fits: false, msg: "Không phải định dạng số hợp lệ" };

    if (type.name === "tinyint") {
      if (Number.isInteger(num) && num >= 0 && num <= 255) return { fits: true, msg: "Vừa vặn (0..255)" };
      return { fits: false, msg: "Tràn số: tinyint chỉ nhận 0 đến 255" };
    }
    if (type.name === "smallint") {
      if (Number.isInteger(num) && num >= -32768 && num <= 32767) return { fits: true, msg: "Vừa vặn (-32.768..32.767)" };
      return { fits: false, msg: "Tràn số: smallint vượt ngoài [-32768, 32767]" };
    }
    if (type.name === "int") {
      if (Number.isInteger(num) && num >= -2147483648 && num <= 2147483647) return { fits: true, msg: "Vừa vặn (~2.14 tỷ)" };
      return { fits: false, msg: "Tràn số: int vượt ngoài dải 32-bit" };
    }
    if (type.name === "bigint") {
      try {
        const bigVal = BigInt(valStr.split(".")[0]);
        if (bigVal >= -9223372036854775808n && bigVal <= 9223372036854775807n) return { fits: true, msg: "Vừa vặn (64-bit integer)" };
      } catch {
        return { fits: false, msg: "Tràn số vượt ngưỡng 64-bit" };
      }
    }
    if (type.name.startsWith("numeric")) {
      return { fits: true, msg: "Khớp định dạng số chính xác cố định" };
    }
    if (type.name === "money") {
      if (num >= -922337203685477.58 && num <= 922337203685477.58) return { fits: true, msg: "Vừa vặn với kiểu tiền tệ" };
      return { fits: false, msg: "Vượt ngưỡng tiền tệ tối đa" };
    }
    return { fits: true, msg: "Hợp lệ" };
  };

  return (
    <div className="my-8 rounded-2xl border border-amber-200/80 bg-gradient-to-br from-amber-50/40 via-white to-amber-50/20 p-6 shadow-xl backdrop-blur-sm">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-amber-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-600 text-white shadow-md shadow-amber-600/20">
            <Database className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">SqlDataTypesVisualizer</h3>
              <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-800 border border-amber-200">
                Interactive Memory Sandbox
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Khám phá cấu trúc bộ nhớ, dải giá trị giới hạn & mô phỏng lỗi tràn số trong SQL Server
            </p>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex rounded-xl bg-amber-100/80 p-1 border border-amber-200">
          <button
            onClick={() => setSelectedCategory("exact")}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
              selectedCategory === "exact"
                ? "bg-amber-600 text-white shadow-sm"
                : "text-amber-900 hover:text-amber-700"
            }`}
          >
            Exact Numbers (Số chính xác)
          </button>
          <button
            onClick={() => setSelectedCategory("approx")}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
              selectedCategory === "approx"
                ? "bg-amber-600 text-white shadow-sm"
                : "text-amber-900 hover:text-amber-700"
            }`}
          >
            Approximate (Số gần đúng)
          </button>
          <button
            onClick={() => setSelectedCategory("datetime")}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
              selectedCategory === "datetime"
                ? "bg-amber-600 text-white shadow-sm"
                : "text-amber-900 hover:text-amber-700"
            }`}
          >
            Date & Time (Ngày giờ)
          </button>
        </div>
      </div>

      {/* Grid of Data Types */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {dataTypes[selectedCategory].map((type) => {
          const testRes = checkFit(testNumber, type);
          const isError = !testRes.fits;

          return (
            <div
              key={type.name}
              className={`relative flex flex-col justify-between rounded-xl border p-4 transition-all duration-200 ${
                isError
                  ? "border-red-300 bg-red-50/50 shadow-sm shadow-red-100"
                  : "border-gray-200 bg-white hover:border-amber-400 hover:shadow-md"
              }`}
            >
              <div>
                <div className="flex items-start justify-between">
                  <span className="font-mono text-base font-bold text-amber-900">{type.name}</span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-amber-50 px-2 py-0.5 text-xs font-bold text-amber-700 border border-amber-200">
                    <HardDrive className="h-3 w-3" />
                    {type.bytes} Byte{type.bytes > 1 ? "s" : ""}
                  </span>
                </div>
                <p className="mt-2 text-xs text-gray-600 leading-relaxed">{type.desc}</p>
              </div>

              <div className="mt-4 border-t border-gray-100 pt-3">
                <div className="flex justify-between text-[11px] text-gray-500 font-mono">
                  <span>Min: {String(type.min)}</span>
                  <span>Max: {String(type.max)}</span>
                </div>

                <div className="mt-2.5 rounded-lg bg-gray-900 p-2 font-mono text-[11px] text-amber-400">
                  <span className="text-gray-400">-- Ví dụ: </span>
                  {type.sqlExample}
                </div>

                {/* Status for live test number */}
                {selectedCategory === "exact" && (
                  <div
                    className={`mt-2 flex items-center gap-1.5 rounded-md px-2 py-1 text-[11px] font-medium ${
                      isError
                        ? "bg-red-100 text-red-700"
                        : "bg-emerald-50 text-emerald-700"
                    }`}
                  >
                    {isError ? (
                      <>
                        <AlertTriangle className="h-3 w-3 shrink-0" />
                        <span className="truncate">{testRes.msg}</span>
                      </>
                    ) : (
                      <>
                        <CheckCircle2 className="h-3 w-3 shrink-0" />
                        <span className="truncate">{testRes.msg}</span>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Tool 1: Live Number Overflow Tester */}
      {selectedCategory === "exact" && (
        <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50/50 p-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Cpu className="h-5 w-5 text-amber-700" />
              <span className="text-sm font-bold text-gray-900">
                Live Overflow Tester (Thử nghiệm tràn số trực tiếp):
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-gray-600">Nhập số cần test:</span>
              <input
                type="text"
                value={testNumber}
                onChange={(e) => setTestNumber(e.target.value)}
                placeholder="Ví dụ: 300, -50000..."
                className="w-36 rounded-lg border border-amber-300 bg-white px-3 py-1.5 font-mono text-sm text-gray-900 shadow-inner focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
              />
            </div>
          </div>
          <p className="mt-2 text-xs text-amber-900/80">
            💡 <strong>Mẹo quan sát:</strong> Khi bạn gõ <code>256</code>, thẻ <code>tinyint</code> sẽ lập tức báo lỗi đỏ vì <code>tinyint</code> chỉ có thể lưu tối đa <code>255</code>!
          </p>
        </div>
      )}

      {/* Interactive Tool 2: Project Storage Estimator */}
      <div className="mt-6 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 pb-3">
          <div className="flex items-center gap-2">
            <HardDrive className="h-5 w-5 text-amber-600" />
            <h4 className="text-sm font-bold text-gray-900">
              Enterprise Storage Estimator (Ước lượng Dung lượng Lưu Trữ Đĩa Cứng Thực Tế)
            </h4>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500">Quy mô bảng:</span>
            <span className="font-mono text-xs font-bold text-amber-700">
              {rowCount.toLocaleString("vi-VN")} bản ghi
            </span>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex items-center gap-4">
            <span className="text-xs text-gray-500">10k dòng</span>
            <input
              type="range"
              min="10000"
              max="10000000"
              step="50000"
              value={rowCount}
              onChange={(e) => setRowCount(Number(e.target.value))}
              className="h-2 flex-1 cursor-pointer appearance-none rounded-lg bg-amber-200 accent-amber-600"
            />
            <span className="text-xs text-gray-500">10 Triệu dòng</span>
          </div>

          {/* Estimation Cards */}
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center font-mono">
            <div className="rounded-lg bg-gray-50 p-2.5 border border-gray-200">
              <div className="text-[11px] text-gray-500 font-sans font-medium">tinyint (1B)</div>
              <div className="text-sm font-bold text-emerald-600 mt-1">
                {((rowCount * 1) / (1024 * 1024)).toFixed(2)} MB
              </div>
            </div>
            <div className="rounded-lg bg-gray-50 p-2.5 border border-gray-200">
              <div className="text-[11px] text-gray-500 font-sans font-medium">smallint (2B)</div>
              <div className="text-sm font-bold text-blue-600 mt-1">
                {((rowCount * 2) / (1024 * 1024)).toFixed(2)} MB
              </div>
            </div>
            <div className="rounded-lg bg-gray-50 p-2.5 border border-gray-200">
              <div className="text-[11px] text-gray-500 font-sans font-medium">int (4B)</div>
              <div className="text-sm font-bold text-amber-600 mt-1">
                {((rowCount * 4) / (1024 * 1024)).toFixed(2)} MB
              </div>
            </div>
            <div className="rounded-lg bg-gray-50 p-2.5 border border-gray-200">
              <div className="text-[11px] text-gray-500 font-sans font-medium">bigint (8B)</div>
              <div className="text-sm font-bold text-red-600 mt-1">
                {((rowCount * 8) / (1024 * 1024)).toFixed(2)} MB
              </div>
            </div>
          </div>
          <p className="mt-3 text-xs text-gray-500 italic">
            * Tính toán thuần túy trên dữ liệu cột thô, chưa bao gồm overhead phân trang 8KB (Page Header) và chỉ mục B-Tree trong SQL Server.
          </p>
        </div>
      </div>
    </div>
  );
}
