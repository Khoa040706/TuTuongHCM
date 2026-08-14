"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Zap,
  ShieldCheck,
  ShieldAlert,
  HelpCircle,
  CheckCircle2,
  Phone,
  Layers,
  Code2,
  Terminal,
  Scale,
  Maximize2
} from "lucide-react";

export default function HashFunctionCriteriaSandbox() {
  const [activeTab, setActiveTab] = useState("criteria"); // "criteria", "badHash", "perfectHash", "uniformHash"
  const [phoneInput, setPhoneInput] = useState("67754378");

  const criteriaList = [
    {
      title: "1. Tính toán nhanh (Fast to compute)",
      desc: "Hàm băm phải tính toán trong thời gian O(1) với vài phép toán số học cơ bản (phép nhân, mod, dịch bit).",
      icon: <Zap className="w-4 h-4 text-emerald-600" />
    },
    {
      title: "2. Phân tán đều (Scatter evenly)",
      desc: "Phân phối các khóa một cách đồng đều khắp bảng băm, không để dồn cục (clustering) vào một vài bucket.",
      icon: <Layers className="w-4 h-4 text-blue-600" />
    },
    {
      title: "3. Ít va chạm (Low collision rate)",
      desc: "Cực tiểu hóa xác suất 2 khóa khác nhau bị băm ra cùng một giá trị chỉ số.",
      icon: <ShieldCheck className="w-4 h-4 text-purple-600" />
    },
    {
      title: "4. Tiết kiệm không gian (Fewer slots)",
      desc: "Cần ít slot bảng băm nhất có thể, tránh lãng phí RAM cho các ô nhớ trống không dùng đến.",
      icon: <Scale className="w-4 h-4 text-amber-600" />
    }
  ];

  const calculateBadHash = (numStr) => {
    const clean = numStr.replace(/\D/g, "");
    if (clean.length < 8) return { val: "--", d4: "-", d8: "-" };
    const d4 = clean[3]; // 0-indexed: index 3 is 4th digit
    const d8 = clean[7]; // index 7 is 8th digit
    return {
      val: `${d4}${d8}`,
      d4,
      d8
    };
  };

  const badHashResult = calculateBadHash(phoneInput);

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl p-5 md:p-7 shadow-sm my-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-5">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-200">
            Mục 3.1 – 3.3 — Tiêu Chí &amp; Các Dạng Hàm Băm
          </span>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-1">
            Tiêu Chí Hàm Băm Tốt, Ví Dụ Bad Hash &amp; Perfect Hash Function
          </h3>
          <p className="text-xs text-slate-500">
            Khảo sát 4 tiêu chí cốt tử của hàm băm, phân tích cạm bẫy Bad Hash và nguyên lý Perfect Hash trong Trình biên dịch (GNU gperf)
          </p>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 font-mono text-xs font-bold self-start sm:self-auto">
          <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
          Hash Function Design
        </div>
      </div>

      {/* Tabs Switcher */}
      <div className="flex items-center gap-2 mb-5 border-b border-slate-200 pb-2 overflow-x-auto">
        <button
          onClick={() => setActiveTab("criteria")}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition cursor-pointer shrink-0 ${
            activeTab === "criteria"
              ? "bg-teal-600 text-white shadow-xs"
              : "bg-slate-100 text-slate-600 hover:text-slate-900"
          }`}
        >
          4 Tiêu Chí Hàm Băm Tốt
        </button>
        <button
          onClick={() => setActiveTab("badHash")}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition cursor-pointer shrink-0 ${
            activeTab === "badHash"
              ? "bg-teal-600 text-white shadow-xs"
              : "bg-slate-100 text-slate-600 hover:text-slate-900"
          }`}
        >
          Ví Dụ Bad Hash &amp; Bẫy Singapore
        </button>
        <button
          onClick={() => setActiveTab("perfectHash")}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition cursor-pointer shrink-0 ${
            activeTab === "perfectHash"
              ? "bg-teal-600 text-white shadow-xs"
              : "bg-slate-100 text-slate-600 hover:text-slate-900"
          }`}
        >
          Perfect Hash (GNU gperf)
        </button>
        <button
          onClick={() => setActiveTab("uniformHash")}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition cursor-pointer shrink-0 ${
            activeTab === "uniformHash"
              ? "bg-teal-600 text-white shadow-xs"
              : "bg-slate-100 text-slate-600 hover:text-slate-900"
          }`}
        >
          Uniform Hash Function
        </button>
      </div>

      {/* Tab 1: 4 Criteria */}
      {activeTab === "criteria" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5 animate-fadeIn">
          {criteriaList.map((c, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-xl bg-white border border-slate-200">{c.icon}</span>
                <h4 className="text-xs font-bold text-slate-900 font-sans">{c.title}</h4>
              </div>
              <p className="text-xs text-slate-600 font-sans leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      )}

      {/* Tab 2: Bad Hash Function Demo */}
      {activeTab === "badHash" && (
        <div className="space-y-4 mb-5 animate-fadeIn">
          <div className="bg-gradient-to-br from-rose-50/80 via-white to-amber-50/40 text-slate-800 rounded-2xl p-5 border-2 border-rose-200 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-rose-100 mb-3">
              <span className="text-xs font-mono font-bold text-rose-900 uppercase">
                THỬ NGHIỆM: SELECT DIGITS (CHỌN CHỮ SỐ THỨ 4 VÀ THỨ 8 CỦA SỐ ĐIỆN THOẠI)
              </span>
              <span className="text-xs font-mono text-slate-500 font-semibold">Ví dụ giáo trình</span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 flex-col sm:flex-row">
                <input
                  type="text"
                  value={phoneInput}
                  onChange={(e) => setPhoneInput(e.target.value)}
                  placeholder="Nhập 8 chữ số..."
                  className="bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs font-mono text-slate-900 flex-1 focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-100 shadow-xs"
                />
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setPhoneInput("67754378")}
                    className="px-2.5 py-1.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-xs font-mono font-bold text-slate-700 shadow-2xs"
                  >
                    67754378
                  </button>
                  <button
                    onClick={() => setPhoneInput("63497820")}
                    className="px-2.5 py-1.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-xs font-mono font-bold text-slate-700 shadow-2xs"
                  >
                    63497820
                  </button>
                </div>
              </div>

              {/* Visual Digits Breakdown */}
              <div className="p-3 bg-white rounded-xl border border-rose-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono shadow-2xs">
                <div className="flex items-center gap-1 flex-wrap">
                  {phoneInput.split("").map((ch, idx) => {
                    const isSelected = idx === 3 || idx === 7;
                    return (
                      <div
                        key={idx}
                        className={`w-7 h-8 rounded-lg flex flex-col items-center justify-center border font-bold ${
                          isSelected
                            ? "bg-rose-500 text-white border-rose-600 shadow-xs"
                            : "bg-slate-100 text-slate-700 border-slate-300"
                        }`}
                      >
                        <span className="text-xs">{ch}</span>
                        <span className="text-[8px] opacity-70">#{idx + 1}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="text-right">
                  <span className="text-slate-500 block text-[10px] font-bold">KẾT QUẢ HASH:</span>
                  <span className="text-sm font-black text-rose-700">
                    hash({phoneInput}) = {badHashResult.val}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Singapore Trap Callout */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-xs font-sans text-amber-950 space-y-1.5">
            <div className="flex items-center gap-1.5 font-bold text-amber-900">
              <HelpCircle className="w-4 h-4 text-amber-600" />
              Q: Điều gì xảy ra nếu hash số điện thoại nhà ở Singapore bằng cách chọn 3 chữ số đầu?
            </div>
            <p className="leading-relaxed text-slate-700">
              ➔ <strong>Trả lời:</strong> Các số điện thoại cố định của hộ gia đình tại Singapore thường có chung mã tổng đài / khu vực vùng (ví dụ cùng bắt đầu bằng <code>677...</code> hoặc <code>687...</code>). Nếu chọn 3 chữ số đầu để băm, hàng ngàn số điện thoại trong cùng khu vực sẽ <strong>bị trùng lặp hoàn toàn giá trị hash</strong>, dẫn đến <strong>dồn cục va chạm khổng lồ (massive collision clustering)</strong> làm tê liệt hiệu năng của bảng băm!
            </p>
          </div>
        </div>
      )}

      {/* Tab 3: Perfect Hash Function */}
      {activeTab === "perfectHash" && (
        <div className="space-y-4 mb-5 animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2 text-xs font-sans">
              <div className="flex items-center gap-2 text-slate-900 font-bold font-mono">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                ĐẶC ĐIỂM CỦA PERFECT HASH FUNCTION
              </div>
              <p className="text-slate-700 leading-relaxed">
                • Là ánh xạ <strong>One-to-One (1-1)</strong> giữa tập khóa $K$ và dải giá trị hash $\implies$ <strong>HOÀN TOÀN KHÔNG XẢY RA COLLISION (Zero Collision)</strong>.
              </p>
              <p className="text-slate-700 leading-relaxed">
                • <strong>Điều kiện áp dụng:</strong> Chỉ khả thi khi ta <strong>đã biết trước toàn bộ tập khóa tĩnh (Static Key Set)</strong>.
              </p>
              <p className="text-slate-700 leading-relaxed">
                • <strong>Minimal Perfect Hash Function:</strong> Khi kích thước bảng băm $M$ đúng bằng số lượng phần tử của tập khóa ($M = N$).
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/40 border-2 border-emerald-200 rounded-2xl p-4 text-slate-800 space-y-2 text-xs font-mono shadow-sm">
              <div className="flex items-center gap-2 text-emerald-800 font-bold">
                <Terminal className="w-4 h-4 text-emerald-600" />
                ỨNG DỤNG THỰC TẾ &amp; GNU GPERF
              </div>
              <p className="text-slate-700 font-sans leading-relaxed text-[11px]">
                • <strong>Trình biên dịch (Compiler / Interpreter):</strong> Tra cứu tức thì các từ khóa dành riêng (reserved keywords) như <code>if</code>, <code>while</code>, <code>class</code>, <code>return</code> trong $O(1)$ không va chạm.
              </p>
              <p className="text-slate-700 font-sans leading-relaxed text-[11px]">
                • <strong>Shell Interpreter:</strong> Tra cứu các lệnh dựng sẵn (built-in commands: <code>cd</code>, <code>echo</code>, <code>export</code>).
              </p>
              <div className="p-2.5 bg-white rounded-xl border border-emerald-200 text-[11px] text-emerald-950 font-semibold shadow-2xs">
                <strong>GNU gperf:</strong> Công cụ mã nguồn mở viết bằng C++, tự động sinh mã nguồn hàm Perfect Hash tối ưu từ danh sách từ khóa do lập trình viên cung cấp.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Uniform Hash Function */}
      {activeTab === "uniformHash" && (
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 mb-5 space-y-3 animate-fadeIn text-xs font-sans">
          <div className="flex items-center gap-2 text-slate-900 font-bold font-mono">
            <Maximize2 className="w-4 h-4 text-blue-600" />
            UNIFORM HASH FUNCTION (HÀM BĂM PHÂN BỐ ĐỀU)
          </div>
          <p className="text-slate-700 leading-relaxed">
            Một hàm băm được gọi là <strong>Uniform Hash Function</strong> nếu nó phân phối đều (evenly) các khóa vào các bucket trong hash table với xác suất đồng đều $1/M$.
          </p>

          <div className="bg-white p-4 rounded-xl border border-slate-200 font-mono text-slate-900 space-y-2">
            <span className="text-xs font-bold text-blue-700 block">
              📐 Ví dụ công thức phân bố đều trên khoảng liên tục:
            </span>
            <p className="text-xs">
              Nếu $k$ là số nguyên phân bố đều trong khoảng $[0, X)$ (tức $0 \le k &lt; X$), ta ánh xạ vào bảng băm kích thước $m$ ($m &lt; X$) bằng công thức:
            </p>
            <div className="p-2.5 bg-blue-50/60 rounded-lg text-sm font-bold text-center text-blue-900 border border-blue-200">
              hash(k) = &lfloor; k &times; m / X &rfloor;
            </div>
            <p className="text-[11px] text-slate-500">
              Trong đó: <code>[ )</code> là khoảng nửa đóng nửa mở ($0 \le k &lt; X$), <code>&lfloor; &rfloor;</code> là hàm lấy phần nguyên sàn (floor).
            </p>
          </div>
        </div>
      )}

      {/* Sticky Takeaway */}
      <div className="bg-indigo-50/80 border-2 border-indigo-200 rounded-2xl p-4 flex items-start gap-3 text-xs text-indigo-950">
        <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
        <div>
          <strong>⭐ Cần nhớ (Mục 3.1 - 3.3):</strong><br/>
          • Tiêu chí hàm băm tốt: <strong>Nhanh</strong>, <strong>Phân tán đều</strong>, <strong>Ít collision</strong>, <strong>Tiết kiệm không gian</strong>.<br/>
          • <strong>Perfect hash function:</strong> Ánh xạ 1-1 không collision — chỉ khả thi khi biết trước tập khóa tĩnh (dùng trong compiler/gperf).<br/>
          • <strong>Tránh Bad Hash:</strong> Không chọn các chữ số mang tính quy luật / mã vùng chung để tránh dồn va chạm.
        </div>
      </div>
    </div>
  );
}
