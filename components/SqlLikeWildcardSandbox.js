"use client";

import React, { useState } from "react";
import {
  Search,
  Sparkles,
  Filter,
  CheckCircle2,
  XCircle,
  Code,
  HelpCircle,
  Tag
} from "lucide-react";

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
      label: "Tên đúng 3 ký tự (Nguyen ___)",
      pattern: "Nguyen ___",
      regex: /^Nguyen [a-zA-Z]{3}$/i,
      desc: "Tìm họ Nguyen kèm phần tên chính xác 3 ký tự (ví dụ: 'An ' hoặc 'Bao')."
    },
    {
      label: "Chữ cái đầu từ [A-C]%",
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
    <div className="my-8 rounded-3xl border border-amber-200/90 bg-gradient-to-br from-amber-50/50 via-white to-orange-50/30 p-4 sm:p-7 md:p-8 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-amber-200/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-600 text-white shadow-md shadow-amber-600/25 shrink-0">
            <Search className="h-6 w-6" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                Pattern Matching Sandbox (Toán tử LIKE)
              </h3>
              <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-800 border border-amber-200 font-mono">
                Wildcards %, _, [ ], [^ ]
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Phòng thí nghiệm toán tử LIKE với 4 ký tự đại diện chuẩn ANSI/T-SQL và khớp mẫu thời gian thực
            </p>
          </div>
        </div>
      </div>

      {/* Preset Buttons: Responsive 1 col mobile, 2 cols tablet/laptop, 4 cols desktop */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
        {presetPatterns.map((p, idx) => {
          const isSelected = activePreset.pattern === p.pattern;
          return (
            <button
              key={idx}
              onClick={() => setActivePreset(p)}
              className={`rounded-2xl p-3 text-left transition-all border flex flex-col justify-between ${
                isSelected
                  ? "border-amber-500 bg-amber-100/90 shadow-sm ring-2 ring-amber-400/30"
                  : "border-gray-200 bg-white hover:bg-amber-50/50 hover:border-amber-300"
              }`}
            >
              <div className="font-mono text-xs font-bold text-amber-950 truncate">
                WHERE hoten LIKE &apos;{p.pattern}&apos;
              </div>
              <div className="text-[11px] text-gray-600 mt-1 font-medium">{p.label}</div>
            </button>
          );
        })}
      </div>

      {/* Wildcard Rule Reference: Bento Grid 1 col mobile, 2 cols tablet/laptop, 4 cols desktop */}
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="rounded-2xl bg-white p-3.5 border border-amber-200/80 shadow-xs">
          <div className="font-mono text-xs font-bold text-amber-900 flex items-center gap-1.5">
            <span className="w-5 h-5 rounded bg-amber-100 text-amber-800 flex items-center justify-center font-black">%</span>
            <span>(Phần trăm)</span>
          </div>
          <div className="text-xs text-gray-600 mt-1.5 leading-relaxed">
            Đại diện cho chuỗi ký tự bất kỳ với độ dài tùy ý (kể cả rỗng).
          </div>
        </div>

        <div className="rounded-2xl bg-white p-3.5 border border-amber-200/80 shadow-xs">
          <div className="font-mono text-xs font-bold text-amber-900 flex items-center gap-1.5">
            <span className="w-5 h-5 rounded bg-amber-100 text-amber-800 flex items-center justify-center font-black">_</span>
            <span>(Gạch dưới)</span>
          </div>
          <div className="text-xs text-gray-600 mt-1.5 leading-relaxed">
            Đại diện cho đúng 1 ký tự đơn duy nhất tại vị trí đó.
          </div>
        </div>

        <div className="rounded-2xl bg-white p-3.5 border border-amber-200/80 shadow-xs">
          <div className="font-mono text-xs font-bold text-amber-900 flex items-center gap-1.5">
            <span className="w-5 h-5 rounded bg-amber-100 text-amber-800 flex items-center justify-center font-black">[ ]</span>
            <span>(Trong tập)</span>
          </div>
          <div className="text-xs text-gray-600 mt-1.5 leading-relaxed">
            Ký tự đơn bất kỳ nằm trong tập hoặc dải quy định (ví dụ: <code>[a-f]</code>).
          </div>
        </div>

        <div className="rounded-2xl bg-white p-3.5 border border-amber-200/80 shadow-xs">
          <div className="font-mono text-xs font-bold text-amber-900 flex items-center gap-1.5">
            <span className="w-5 h-5 rounded bg-amber-100 text-amber-800 flex items-center justify-center font-black">[^ ]</span>
            <span>(Ngoài tập)</span>
          </div>
          <div className="text-xs text-gray-600 mt-1.5 leading-relaxed">
            Ký tự đơn bất kỳ KHÔNG nằm trong giới hạn chỉ định.
          </div>
        </div>
      </div>

      {/* Live Matching Results */}
      <div className="mt-5 rounded-2xl border border-gray-200/90 bg-white shadow-xs overflow-hidden">
        <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
          <span className="font-bold text-gray-800">
            Kết quả Khớp Mẫu Thực Tế: Pattern = &apos;{activePreset.pattern}&apos;
          </span>
          <span className="text-gray-500 font-sans text-[11px]">{activePreset.desc}</span>
        </div>

        <div className="p-4 grid gap-2.5 grid-cols-1 sm:grid-cols-2">
          {sampleStudents.map((sv) => {
            const isMatch = activePreset.regex.test(sv.hoten);

            return (
              <div
                key={sv.masv}
                className={`flex items-center justify-between p-3 rounded-xl border transition-all ${
                  isMatch
                    ? "border-emerald-300 bg-emerald-50/70 font-bold text-emerald-950 shadow-xs"
                    : "border-gray-200 bg-gray-50/50 text-gray-400 opacity-60"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs text-gray-500">{sv.masv}</span>
                  <span className="text-xs">{sv.hoten}</span>
                </div>
                {isMatch ? (
                  <span className="inline-flex items-center gap-1 text-[11px] font-sans font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                    <CheckCircle2 className="h-3.5 w-3.5" /> Khớp Mẫu
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
