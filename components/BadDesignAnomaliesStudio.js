"use client";

import React, { useState } from "react";
import { AlertTriangle, Database, Split, CheckCircle2, XCircle, ArrowRight, RefreshCw, Layers } from "lucide-react";

export default function BadDesignAnomaliesStudio() {
  const [activeAnomaly, setActiveAnomaly] = useState("redundancy"); // 'redundancy' | 'inconsistency' | 'insertion' | 'deletion' | 'decomposition'

  const anomalies = {
    redundancy: {
      id: "redundancy",
      title: "1. Dư Thừa Dữ Liệu (Redundancy)",
      color: "from-amber-600 to-orange-600",
      problem: "Địa chỉ (add) và tên nhà cung cấp (Sname) bị lặp lại nhiều lần trong cùng một bảng mỗi khi nhà cung cấp đó bán một mặt hàng mới.",
      impact: "Lãng phí dung lượng lưu trữ trên đĩa, tăng chi phí I/O và tạo nguy cơ sai lệch dữ liệu khi cập nhật.",
      tableHighlight: "S1 và S2 lặp lại địa chỉ 'Hà Nội' và 'TP.HCM' nhiều lần."
    },
    inconsistency: {
      id: "inconsistency",
      title: "2. Không Nhất Quán (Inconsistency)",
      color: "from-rose-600 to-red-600",
      problem: "Khi sửa địa chỉ của nhà cung cấp S1 từ 'Hà Nội' thành 'Đà Nẵng', nếu chỉ sửa ở dòng 1 mà quên sửa ở dòng 2 thì trong CSDL một nhà cung cấp S1 sẽ có tới 2 địa chỉ khác nhau!",
      impact: "Phá vỡ tính toàn vẹn của dữ liệu, khiến các báo cáo nghiệp vụ cho ra kết quả mâu thuẫn.",
      tableHighlight: "Dòng 1 ghi S1 ở 'Đà Nẵng', Dòng 2 ghi S1 ở 'Hà Nội' -> Dữ liệu mâu thuẫn!"
    },
    insertion: {
      id: "insertion",
      title: "3. Dị Thường Khi Thêm (Insertion Anomaly)",
      color: "from-purple-600 to-indigo-600",
      problem: "Khi công ty ký hợp đồng với một nhà cung cấp mới S4 nhưng nhà cung cấp này chưa cung cấp mặt hàng nào, ta không thể thêm S4 vào bảng vì thuộc tính mặt hàng (pro) và đơn giá (price) sẽ bị NULL (mà pro nằm trong khóa).",
      impact: "Không thể lưu trữ thông tin về đối tác mới nếu chưa phát sinh giao dịch hàng hóa.",
      tableHighlight: "Thêm S4('S4', 'Vinamilk', 'Bình Dương', NULL, NULL) -> Vi phạm khóa / Không hợp lệ!"
    },
    deletion: {
      id: "deletion",
      title: "4. Dị Thường Khi Xóa (Deletion Anomaly)",
      color: "from-red-600 to-pink-600",
      problem: "Nếu nhà cung cấp S3 chỉ cung cấp duy nhất 1 mặt hàng 'Máy in', khi ta xóa mặt hàng này khỏi CSDL thì thông tin về tên và địa chỉ của nhà cung cấp S3 cũng bị xóa sạch theo!",
      impact: "Mất mát thông tin đối tác quan trọng ngoài ý muốn của người quản trị.",
      tableHighlight: "Xóa dòng mặt hàng 'Máy in' -> Mất luôn thông tin S3('S3', 'Canon', 'Nhật Bản')!"
    },
    decomposition: {
      id: "decomposition",
      title: "5. Giải Pháp Chuẩn Hóa: Tách Lược Đồ (Decomposition)",
      color: "from-emerald-600 to-teal-600",
      problem: "Tách lược đồ ban đầu S(S#, Sname, add, pro, price) thành 2 lược đồ con: S1(S#, Sname, add) và S2(S#, pro, price).",
      impact: "Triệt tiêu 100% cả 4 dị thường trên! Đây chính là lý do cốt lõi cần nghiên cứu Phụ thuộc hàm và Khóa.",
      tableHighlight: "S1 lưu thông tin nhà cung cấp (khóa S#), S2 lưu thông tin giá cung cấp mặt hàng (khóa S#, pro)."
    }
  };

  const curr = anomalies[activeAnomaly];

  return (
    <div className="my-8 rounded-2xl border border-rose-200/80 bg-gradient-to-br from-rose-50/40 via-white to-amber-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-rose-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-600 text-white shadow-md shadow-rose-600/20">
            <AlertTriangle className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">BadDesignAnomaliesStudio</h3>
              <span className="rounded-full bg-rose-100 px-2.5 py-0.5 text-xs font-semibold text-rose-800 border border-rose-200">
                Lý Thuyết Thiết Kế CSDL (Mục 1)
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Trực quan hóa 4 dị thường thiết kế trên bảng S(S#, Sname, add, pro, price) và cơ chế Tách lược đồ
            </p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap gap-1 rounded-xl bg-rose-100/80 p-1 border border-rose-200">
          {Object.keys(anomalies).map((key) => (
            <button
              key={key}
              onClick={() => setActiveAnomaly(key)}
              className={`rounded-lg px-2.5 py-1.5 text-xs font-bold transition-all ${
                activeAnomaly === key ? "bg-rose-600 text-white shadow-sm" : "text-rose-900 hover:text-rose-700"
              }`}
            >
              {anomalies[key].title.split(". ")[1]}
            </button>
          ))}
        </div>
      </div>

      {/* Bad Table S Display */}
      <div className="mt-5 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between border-b border-gray-100 pb-2">
          <span className="font-mono text-xs font-bold text-indigo-900">
            BẢNG THIẾT KẾ CHƯA TỐT: S(S#, Sname, add, pro, price)
          </span>
          <span className="font-mono text-[10px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
            Khóa chính: (S#, pro)
          </span>
        </div>

        <div className="overflow-x-auto mt-3">
          <table className="w-full text-left font-mono text-xs">
            <thead className="bg-gray-50 text-gray-700 border-b border-gray-200">
              <tr>
                <th className="p-2">S# (Mã NCC)</th>
                <th className="p-2">Sname (Tên NCC)</th>
                <th className="p-2">add (Địa chỉ)</th>
                <th className="p-2">pro (Mặt hàng)</th>
                <th className="p-2">price (Đơn giá)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className={activeAnomaly === "redundancy" || activeAnomaly === "inconsistency" ? "bg-amber-50" : ""}>
                <td className="p-2 font-bold text-indigo-700">S1</td>
                <td className="p-2">FPT Telecom</td>
                <td className="p-2 text-rose-700 font-semibold">{activeAnomaly === "inconsistency" ? "Đà Nẵng (Đã sửa)" : "Hà Nội"}</td>
                <td className="p-2">Router Wifi</td>
                <td className="p-2">500,000</td>
              </tr>
              <tr className={activeAnomaly === "redundancy" || activeAnomaly === "inconsistency" ? "bg-amber-50" : ""}>
                <td className="p-2 font-bold text-indigo-700">S1</td>
                <td className="p-2">FPT Telecom</td>
                <td className="p-2 text-rose-700 font-semibold">{activeAnomaly === "inconsistency" ? "Hà Nội (Chưa sửa!)" : "Hà Nội"}</td>
                <td className="p-2">Switch 24 Port</td>
                <td className="p-2">1,200,000</td>
              </tr>
              <tr className={activeAnomaly === "redundancy" ? "bg-amber-50" : ""}>
                <td className="p-2 font-bold text-indigo-700">S2</td>
                <td className="p-2">Viettel Corp</td>
                <td className="p-2 text-rose-700 font-semibold">TP.HCM</td>
                <td className="p-2">Cáp quang</td>
                <td className="p-2">350,000</td>
              </tr>
              <tr className={activeAnomaly === "deletion" ? "bg-rose-100 text-rose-900 line-through font-bold" : ""}>
                <td className="p-2 font-bold text-indigo-700">S3</td>
                <td className="p-2">Canon Inc</td>
                <td className="p-2">Nhật Bản</td>
                <td className="p-2">Máy in LBP 2900</td>
                <td className="p-2">3,800,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Details Box */}
      <div className="mt-4 rounded-xl border border-rose-200 bg-white p-4 shadow-sm space-y-2">
        <h4 className="text-sm font-bold text-rose-950">{curr.title}</h4>
        <p className="text-xs text-gray-700 leading-relaxed font-medium">
          <strong>Bản chất vấn đề: </strong>{curr.problem}
        </p>
        <p className="text-xs text-gray-600 leading-relaxed">
          <strong>Hậu quả & Tác hại: </strong>{curr.impact}
        </p>
        <div className="rounded-lg bg-rose-50 p-2.5 text-xs text-rose-900 font-mono border border-rose-100">
          💡 Minh họa trên bảng: {curr.tableHighlight}
        </div>
      </div>
    </div>
  );
}
