"use client";
import React, { useState } from "react";
import { Search, Sparkles, Filter, CheckCircle2, XCircle, Code, HelpCircle } from "lucide-react";

export default function SqlLikeWildcardSandbox() {
  const sampleStudents = [
    { masv: "SV01", hoten: "Nguyen Van An", malop: "Ti01" },
    { masv: "SV02", hoten: "Nguyen Thi Binh", malop: "Ti01" },
    { masv: "SV03", hoten: "Tran Van Cuong", malop: "Ti02" },
    { masv: "SV04", hoten: "Le Thi Duyen", malop: "Ti01" },
    { masv: "SV05", hoten: "Pham Quoc Bao", malop: "Ti02" },
    { masv: "SV06", hoten: "Vo Thi Thao", malop: "Ti03" },
    { masv: "SV07", hoten: "Nguyen Bao Anh", malop: "Ti01" },
    { masv: "SV08", hoten: "Hoang Van Duc", malop: "Ti02" }
  ];

  const presetPatterns = [
    {
      label: "Họ Nguyễn (Nguyen %)",
      pattern: "Nguyen %",
      regex: /^Nguyen /i,
      desc: "Tìm tất cả sinh viên có họ bắt đầu bằng 'Nguyen'."
    },
    {
      label: "Tên có đúng 3 ký tự (Nguyen ___)",
      pattern: "Nguyen ___",
      regex: /^Nguyen [a-zA-Z]{3}$/i,
      desc: "Tìm họ Nguyen kèm phần tên chính xác 3 ký tự (ví dụ: 'An ' hoặc 'Bao')."
    },
    {
      label: "Chữ cái đầu từ [A-C]% (Bắt đầu A, B hoặc C)",
      pattern: "[A-C]%",
      regex: /^[A-C]/i,
      desc: "Tìm các sinh viên có họ bắt đầu bằng ký tự từ A đến C."
    },
    {
      label: "Không bắt đầu bằng N ([^N]%)",
      pattern: "[^N]%",
      regex: /^[^N]/i,
      desc: "Tìm các sinh viên có họ KHÔNG bắt đầu bằng chữ 'N'."
    }
  ];

  const [activePreset, setActivePreset] = useState(presetPatterns[0]);

  return (
    <div className="my-8 rounded-2xl border border-amber-200/80 bg-gradient-to-br from-amber-50/40 via-white to-orange-50/30 p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-amber-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-600 text-white shadow-md shadow-amber-600/20">
            <Search className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">SqlLikeWildcardSandbox</h3>
              <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-800 border border-amber-200">
                Pattern Matching Sandbox
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Phòng thí nghiệm toán tử LIKE với 4 ký tự đại diện: %, _, [a-f], [^a-f] và kỹ thuật escape \%
            </p>
          </div>
        </div>
      </div>

      {/* Preset Buttons */}
      <div className="mt-5 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
        {presetPatterns.map((p, idx) => (
          <button
            key={idx}
            onClick={() => setActivePreset(p)}
            className={`rounded-xl p-3 text-left transition-all border ${
              activePreset.pattern === p.pattern
                ? "border-amber-500 bg-amber-100/80 shadow-sm"
                : "border-gray-200 bg-white hover:bg-amber-50/50"
            }`}
          >
            <div className="font-mono text-xs font-bold text-amber-950">WHERE hoten LIKE &apos;{p.pattern}&apos;</div>
            <div className="text-[11px] text-gray-600 mt-1">{p.label}</div>
          </button>
        ))}
      </div>

      {/* Wildcard Rule Reference Table */}
      <div className="mt-5 grid gap-4 lg:grid-cols-4">
        <div className="rounded-xl bg-white p-3 border border-gray-200 shadow-sm">
          <div className="font-mono text-xs font-bold text-amber-900">% (Phần trăm)</div>
          <div className="text-xs text-gray-600 mt-1">Đại diện cho chuỗi ký tự bất kỳ với độ dài tùy ý (kể cả rỗng).</div>
        </div>
        <div className="rounded-xl bg-white p-3 border border-gray-200 shadow-sm">
          <div className="font-mono text-xs font-bold text-amber-900">_ (Gạch dưới)</div>
          <div className="text-xs text-gray-600 mt-1">Đại diện cho đúng 1 ký tự đơn duy nhất.</div>
        </div>
        <div className="rounded-xl bg-white p-3 border border-gray-200 shadow-sm">
          <div className="font-mono text-xs font-bold text-amber-900">[ ] (Trong tập)</div>
          <div className="text-xs text-gray-600 mt-1">Ký tự đơn bất kỳ nằm trong tập/dải quy định (ví dụ: <code>[a-f]</code>).</div>
        </div>
        <div className="rounded-xl bg-white p-3 border border-gray-200 shadow-sm">
          <div className="font-mono text-xs font-bold text-amber-900">[^ ] (Ngoài tập)</div>
          <div className="text-xs text-gray-600 mt-1">Ký tự đơn bất kỳ KHÔNG nằm trong giới hạn chỉ định.</div>
        </div>
      </div>

      {/* Live Matching Results */}
      <div className="mt-5 rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
        <div className="bg-gray-50 px-4 py-2.5 border-b border-gray-200 flex items-center justify-between font-mono text-xs">
          <span className="font-bold text-gray-700">
            Kết quả Khớp Mẫu Thực Tế: Pattern = &apos;{activePreset.pattern}&apos;
          </span>
          <span className="text-gray-500">{activePreset.desc}</span>
        </div>

        <div className="p-4 grid gap-2 sm:grid-cols-2">
          {sampleStudents.map((sv) => {
            const isMatch = activePreset.regex.test(sv.hoten);

            return (
              <div
                key={sv.masv}
                className={`flex items-center justify-between p-3 rounded-xl border transition-all ${
                  isMatch
                    ? "border-emerald-300 bg-emerald-50/60 font-bold text-emerald-950 shadow-sm"
                    : "border-gray-200 bg-gray-50/40 text-gray-400 opacity-60"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs text-gray-500">{sv.masv}</span>
                  <span className="text-xs">{sv.hoten}</span>
                </div>
                {isMatch ? (
                  <span className="inline-flex items-center gap-1 text-[11px] font-sans font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                    <CheckCircle2 className="h-3.5 w-3.5" /> Khớp
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-[11px] font-sans text-gray-400">
                    <XCircle className="h-3.5 w-3.5" /> Không khớp
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
