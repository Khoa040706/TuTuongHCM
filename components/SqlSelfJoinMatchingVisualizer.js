"use client";
import React, { useState } from "react";
import { Users, ArrowRightLeft, CheckCircle2, XCircle, AlertTriangle, Terminal, Sparkles } from "lucide-react";

export default function SqlSelfJoinMatchingVisualizer() {
  const [operator, setOperator] = useState("<"); // "<" (Optimal) vs "<>" (Duplicate pairs)

  const sampleCustomers = [
    { makh: 1, tenkh: "Nguyễn Văn An", ngaysinh: "1995-10-20" },
    { makh: 2, tenkh: "Trần Thị Bình", ngaysinh: "1998-04-15" },
    { makh: 3, tenkh: "Lê Hoàng Cường", ngaysinh: "1995-10-20" }, // Same birthday as An
    { makh: 4, tenkh: "Phạm Quốc Dũng", ngaysinh: "2000-12-05" }
  ];

  // Self Join Logic
  const pairs = [];
  sampleCustomers.forEach((kh1) => {
    sampleCustomers.forEach((kh2) => {
      if (kh1.ngaysinh === kh2.ngaysinh) {
        if (operator === "<" && kh1.makh < kh2.makh) {
          pairs.push({ kh1, kh2, type: "optimal" });
        } else if (operator === "<>" && kh1.makh !== kh2.makh) {
          pairs.push({ kh1, kh2, type: "duplicate" });
        }
      }
    });
  });

  return (
    <div className="my-8 rounded-2xl border border-teal-200/80 bg-gradient-to-br from-teal-50/40 via-white to-emerald-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-teal-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-600 text-white shadow-md shadow-teal-600/20">
            <Users className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">SqlSelfJoinMatchingVisualizer</h3>
              <span className="rounded-full bg-teal-100 px-2.5 py-0.5 text-xs font-semibold text-teal-800 border border-teal-200">
                Self-Join Visualizer (Bài 7)
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Trực quan hóa phép Tự kết nối (Self-Join) tìm khách hàng có cùng ngày sinh & bí quyết khử trùng lặp
            </p>
          </div>
        </div>

        {/* Condition Toggle */}
        <div className="flex rounded-xl bg-teal-100/80 p-1 border border-teal-200">
          <button
            onClick={() => setOperator("<")}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
              operator === "<" ? "bg-teal-600 text-white shadow-sm" : "text-teal-900 hover:text-teal-700"
            }`}
          >
            Dùng kh1.makh &lt; kh2.makh (Khuyên dùng)
          </button>
          <button
            onClick={() => setOperator("<>")}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
              operator === "<>" ? "bg-teal-600 text-white shadow-sm" : "text-teal-900 hover:text-teal-700"
            }`}
          >
            Dùng kh1.makh &lt;&gt; kh2.makh (Bị lặp đảo)
          </button>
        </div>
      </div>

      {/* SQL Snippet */}
      <div className="mt-5 rounded-xl border border-gray-800 bg-gray-950 p-4 text-white shadow-lg">
        <div className="flex items-center justify-between border-b border-gray-800 pb-2">
          <div className="flex items-center gap-2">
            <Terminal className="h-4 w-4 text-teal-400" />
            <span className="font-mono text-xs font-bold text-gray-300">T-SQL Self-Join Query</span>
          </div>
          <span className="font-mono text-[10px] text-teal-300">CONDITION: {operator}</span>
        </div>
        <pre className="mt-2 font-mono text-xs text-amber-300 leading-relaxed overflow-x-auto whitespace-pre-wrap">
{`SELECT kh1.makh, kh1.tenkh, kh2.makh, kh2.tenkh, kh1.ngaysinh
FROM KHACHHANG kh1
INNER JOIN KHACHHANG kh2
    ON kh1.ngaysinh = kh2.ngaysinh
    AND kh1.makh ${operator} kh2.makh;`}
        </pre>
      </div>

      {/* Matched Pairs Grid */}
      <div className="mt-5 rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
        <div className="bg-gray-50 px-4 py-2.5 border-b border-gray-200 flex items-center justify-between font-mono text-xs">
          <span className="font-bold text-gray-700">Kết quả Ghép cặp ({pairs.length} cặp tìm thấy)</span>
          <span className="text-gray-500">Ngày sinh chung: 1995-10-20</span>
        </div>

        <div className="p-4 space-y-2.5">
          {pairs.map((p, idx) => (
            <div
              key={idx}
              className={`flex items-center justify-between p-3 rounded-xl border font-mono text-xs transition-all ${
                operator === "<"
                  ? "bg-emerald-50 border-emerald-300 text-emerald-950"
                  : "bg-amber-50 border-amber-300 text-amber-950"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="font-bold text-teal-700">[{p.kh1.makh}] {p.kh1.tenkh}</span>
                <ArrowRightLeft className="h-4 w-4 text-gray-400" />
                <span className="font-bold text-teal-700">[{p.kh2.makh}] {p.kh2.tenkh}</span>
              </div>
              <div className="text-right">
                <span className="font-bold text-gray-700 mr-3">{p.kh1.ngaysinh}</span>
                <span className={`text-[10px] font-sans font-bold px-2 py-0.5 rounded ${
                  operator === "<" ? "bg-emerald-200 text-emerald-900" : "bg-amber-200 text-amber-900"
                }`}>
                  {operator === "<" ? "Cặp Chuẩn Duy Nhất" : "Cặp Bị Đảo Vị Trí"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Explanation Box */}
      <div className="mt-4 rounded-xl bg-teal-100/70 p-3.5 border border-teal-200 text-xs text-teal-950 leading-relaxed">
        <strong>💡 Bí quyết lập trình:</strong> Nếu dùng <code>kh1.makh &lt;&gt; kh2.makh</code>, hệ thống sẽ in ra 2 dòng kết quả: (An, Cường) và (Cường, An) $\to$ trùng lặp dư thừa! Khi thay bằng <code>kh1.makh &lt; kh2.makh</code>, chỉ có đúng 1 cặp (1 &lt; 3) được xuất hiện, giúp bảng kết quả sạch đẹp và tối ưu nhất!
      </div>
    </div>
  );
}
