"use client";

import React, { useState } from "react";
import {
  Table,
  Layers,
  Sparkles,
  ArrowRight,
  RotateCcw,
  CheckCircle2,
  HelpCircle,
  Shuffle,
  CopyPlus,
  Compass,
  Cpu
} from "lucide-react";

export default function RelationalMathAndConceptsVisualizer() {
  const initialData = [
    { maSoSV: "Ti05020", hoTenSV: "Lê Ngọc Phúc", ngaySinh: "06-12-1988", diemTB: "9.0", mucHBg: "240.000" },
    { maSoSV: "Ti05023", hoTenSV: "Nguyễn Mỹ Truyền", ngaySinh: "20-02-1987", diemTB: "8.2", mucHBg: "180.000" },
    { maSoSV: "Ti05027", hoTenSV: "Phạm Thu Hoa", ngaySinh: "23-05-1987", diemTB: "8.5", mucHBg: "180.000" },
    { maSoSV: "Ti05006", hoTenSV: "Phạm Thu Hường", ngaySinh: "23-06-1987", diemTB: "7.8", mucHBg: "120.000" }
  ];

  const [tableData, setTableData] = useState(initialData);
  const [selectedConcept, setSelectedConcept] = useState("attributes"); // 'attributes' | 'domain' | 'tuple' | 'relation'
  const [shuffleStatus, setShuffleStatus] = useState(false);
  const [duplicateStatus, setDuplicateStatus] = useState(false);

  const handleShuffleRows = () => {
    const shuffled = [...tableData].reverse();
    setTableData(shuffled);
    setShuffleStatus(true);
    setDuplicateStatus(false);
  };

  const handleTryDuplicate = () => {
    // Attempting to duplicate row 1
    setDuplicateStatus(true);
  };

  const handleReset = () => {
    setTableData(initialData);
    setShuffleStatus(false);
    setDuplicateStatus(false);
  };

  return (
    <div className="my-8 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden text-slate-800">
      {/* Header */}
      <div className="px-5 py-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 border border-orange-200 flex items-center justify-center font-bold">
            <Table className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600">
              Interactive Relation Explorer • Mục 1.1 & 1.5
            </span>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
              Bảng HOCBONG & Cơ Sở Toán Học Lý Thuyết Tập Hợp (Set Theory)
            </h3>
          </div>
        </div>

        {/* Concept Selectors */}
        <div className="flex flex-wrap gap-1.5 text-xs font-mono">
          <button
            onClick={() => setSelectedConcept("attributes")}
            className={`px-3 py-1.5 rounded-lg border transition-all ${
              selectedConcept === "attributes"
                ? "bg-orange-600 text-white border-orange-500 font-bold shadow-sm"
                : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
            }`}
          >
            Thuộc tính (U)
          </button>
          <button
            onClick={() => setSelectedConcept("domain")}
            className={`px-3 py-1.5 rounded-lg border transition-all ${
              selectedConcept === "domain"
                ? "bg-blue-600 text-white border-blue-500 font-bold shadow-sm"
                : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
            }`}
          >
            Miền giá trị D(Ai)
          </button>
          <button
            onClick={() => setSelectedConcept("tuple")}
            className={`px-3 py-1.5 rounded-lg border transition-all ${
              selectedConcept === "tuple"
                ? "bg-emerald-600 text-white border-emerald-500 font-bold shadow-sm"
                : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
            }`}
          >
            Bộ giá trị (Tuple)
          </button>
          <button
            onClick={() => setSelectedConcept("relation")}
            className={`px-3 py-1.5 rounded-lg border transition-all ${
              selectedConcept === "relation"
                ? "bg-amber-600 text-white border-amber-500 font-bold shadow-sm"
                : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
            }`}
          >
            Quan hệ r(R)
          </button>
        </div>
      </div>

      {/* Main Table Showcase */}
      <div className="p-6 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs font-bold text-slate-900 font-mono flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
            Quan hệ: <span className="text-orange-700 uppercase">HOCBONG</span> (Tập thuộc tính U = 5 phần tử)
          </div>

          {/* Interactive Set Property Experiment Buttons */}
          <div className="flex items-center gap-2 text-xs">
            <button
              onClick={handleShuffleRows}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition-all font-mono shadow-sm"
            >
              <Shuffle className="w-3.5 h-3.5 text-blue-600" /> Đảo thứ tự dòng
            </button>
            <button
              onClick={handleTryDuplicate}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition-all font-mono shadow-sm"
            >
              <CopyPlus className="w-3.5 h-3.5 text-amber-600" /> Thêm dòng trùng lặp
            </button>
            {(shuffleStatus || duplicateStatus) && (
              <button
                onClick={handleReset}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-100 text-slate-600 hover:text-slate-900 transition-all text-xs"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Khôi phục
              </button>
            )}
          </div>
        </div>

        {/* Set Theory Experiment Feedback Callout */}
        {shuffleStatus && (
          <div className="p-3.5 rounded-xl bg-blue-50/80 border border-blue-200 text-xs text-blue-900 flex items-start gap-2.5 animate-fadeIn shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
            <span>
              <strong>Tính chất tập hợp 1 (Thứ tự không quan trọng):</strong> Bạn vừa đảo thứ tự các dòng trong bảng. Về mặt toán học, quan hệ $r$ là một <strong>tập hợp các bộ</strong>, nên thứ tự trước sau của các dòng (và các cột) hoàn toàn không làm thay đổi bản chất của quan hệ $r$!
            </span>
          </div>
        )}

        {duplicateStatus && (
          <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5 animate-fadeIn shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <span>
              <strong>Tính chất tập hợp 2 (Tính duy nhất của phần tử):</strong> Thêm một dòng giống hệt dòng đã có vào bảng thì theo lý thuyết tập hợp: A ∪ {"{x}"} = A (nếu x ∈ A). Quan hệ r <strong>hoàn toàn không thay đổi</strong> và số lượng phần tử |r| vẫn giữ nguyên!
            </span>
          </div>
        )}

        {/* Interactive Data Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-xs text-left border-collapse font-sans">
            <thead>
              <tr className={`border-b border-slate-200 ${selectedConcept === "attributes" ? "bg-orange-50 ring-2 ring-orange-400" : "bg-slate-100"}`}>
                <th className="p-3 text-slate-400 font-mono text-center w-10">#</th>
                <th className="p-3 font-bold font-mono text-orange-900">
                  maSoSV <span className="text-[10px] text-slate-500 block font-normal font-sans">(A₁)</span>
                </th>
                <th className="p-3 font-bold font-mono text-orange-900">
                  hoTenSV <span className="text-[10px] text-slate-500 block font-normal font-sans">(A₂)</span>
                </th>
                <th className="p-3 font-bold font-mono text-orange-900">
                  ngaySinh <span className="text-[10px] text-slate-500 block font-normal font-sans">(A₃)</span>
                </th>
                <th className={`p-3 font-bold font-mono ${selectedConcept === "domain" ? "bg-blue-100 text-blue-950 ring-2 ring-blue-400" : "text-orange-900"}`}>
                  diemTB <span className="text-[10px] text-blue-700 block font-normal font-sans">D(diemTB)</span>
                </th>
                <th className="p-3 font-bold font-mono text-orange-900">
                  mucHBg <span className="text-[10px] text-slate-500 block font-normal font-sans">(A₅)</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, idx) => {
                const isTupleActive = selectedConcept === "tuple" && idx === 0;
                const isRelationActive = selectedConcept === "relation";

                return (
                  <tr
                    key={idx}
                    className={`border-b border-slate-100 transition-all ${
                      isTupleActive
                        ? "bg-emerald-50 text-emerald-900 ring-2 ring-emerald-400 font-semibold"
                        : isRelationActive
                        ? "bg-amber-50/60 text-amber-950"
                        : idx % 2 === 0
                        ? "bg-white"
                        : "bg-slate-50/60"
                    }`}
                  >
                    <td className="p-3 text-center text-slate-400 font-mono text-[11px]">{idx + 1}</td>
                    <td className="p-3 font-mono font-bold text-slate-800">{row.maSoSV}</td>
                    <td className="p-3 text-slate-700">{row.hoTenSV}</td>
                    <td className="p-3 font-mono text-slate-500">{row.ngaySinh}</td>
                    <td className={`p-3 font-mono ${selectedConcept === "domain" ? "bg-blue-50 text-blue-900 font-bold" : "text-slate-700"}`}>
                      {row.diemTB}
                    </td>
                    <td className="p-3 font-mono text-amber-800 font-semibold">{row.mucHBg}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Academic Deep Explanation */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2 font-sans shadow-sm">
          <div className="font-bold text-slate-900 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-orange-600" />
            {selectedConcept === "attributes" && "Tập Thuộc Tính (Attributes Set): U = {maSoSV, hoTenSV, ngaySinh, diemTB, mucHBg}"}
            {selectedConcept === "domain" && "Miền Giá Trị (Domain): D(diemTB) = {9.0, 8.2, 8.5, 7.8} ⊆ [0.0 .. 10.0]"}
            {selectedConcept === "tuple" && "Bộ Giá Trị (Tuple / 5-bộ): ('Ti05020', 'Lê Ngọc Phúc', '06-12-1988', 9.0, 240.000)"}
            {selectedConcept === "relation" && "Quan Hệ (Relation): r ⊆ D(maSoSV) × D(hoTenSV) × D(ngaySinh) × D(diemTB) × D(mucHBg)"}
          </div>
          <p className="text-slate-600 leading-relaxed">
            {selectedConcept === "attributes" && "Mỗi thuộc tính Ai đại diện cho một đặc trưng của đối tượng sinh viên. Trong cùng một quan hệ, không bao giờ được có 2 thuộc tính cùng tên."}
            {selectedConcept === "domain" && "Mỗi thuộc tính Ai gắn liền với một miền giá trị D(Ai). Thuộc tính diemTB chỉ nhận các số thực hợp lệ trong tập con quy định của thang điểm học tập."}
            {selectedConcept === "tuple" && "Một dòng trong bảng là một bộ (tuple) 5 giá trị, biểu diễn trọn vẹn thông tin xếp loại học bổng của một sinh viên cụ thể trong trường."}
            {selectedConcept === "relation" && "Bảng HOCBONG là một quan hệ r tại thời điểm hiện tại. Quan hệ là một tập con của tích Descartes các miền giá trị tương ứng."}
          </p>
        </div>
      </div>
    </div>
  );
}
