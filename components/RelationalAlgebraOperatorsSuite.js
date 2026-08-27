"use client";

import React, { useState } from "react";
import {
  Filter,
  Columns,
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Table,
  Sliders,
  Maximize2,
  HelpCircle
} from "lucide-react";

export default function RelationalAlgebraOperatorsSuite() {
  const [activeTab, setActiveTab] = useState("select"); // 'select' | 'project' | 'union' | 'intersect' | 'diff'
  const [scoreThreshold, setScoreThreshold] = useState(8.5);
  const [selectedColumns, setSelectedColumns] = useState({
    maSoSV: true,
    hoTenSV: true,
    diemTB: true,
    mucHBg: false
  });

  const hocbongData = [
    { maSoSV: "Ti05020", hoTenSV: "Lê Ngọc Phúc", ngaySinh: "06-12-1988", diemTB: 9.0, mucHBg: "240.000" },
    { maSoSV: "Ti05023", hoTenSV: "Nguyễn Mỹ Truyền", ngaySinh: "20-02-1987", diemTB: 8.2, mucHBg: "180.000" },
    { maSoSV: "Ti05027", hoTenSV: "Phạm Thu Hoa", ngaySinh: "23-05-1987", diemTB: 8.5, mucHBg: "180.000" },
    { maSoSV: "Ti05006", hoTenSV: "Phạm Thu Hường", ngaySinh: "23-06-1987", diemTB: 7.8, mucHBg: "120.000" }
  ];

  const canboData = [
    { Maso: "CB01", Hoten: "Nguyễn Văn An", Ngsinh: "1980", QQ: "Hà Nội", Hs_luong: "3.5" },
    { Maso: "CB02", Hoten: "Trần Thị Bình", Ngsinh: "1985", QQ: "Cần Thơ", Hs_luong: "4.0" }
  ];

  const giangvienData = [
    { Maso: "CB02", Hoten: "Trần Thị Bình", Ngsinh: "1985", QQ: "Cần Thơ", Hs_luong: "4.0" },
    { Maso: "GV01", Hoten: "Lê Đức Phúc", Ngsinh: "1975", QQ: "Đồng Tháp", Hs_luong: "5.2" }
  ];

  // Filtering for Select tab
  const filteredHocBong = hocbongData.filter((r) => r.diemTB >= scoreThreshold);

  return (
    <div className="my-8 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden text-slate-800">
      {/* Header */}
      <div className="px-5 py-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 border border-orange-200 flex items-center justify-center font-bold">
            <Sliders className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600">
              Interactive Algebra Suite • Mục 2.2 - 2.8
            </span>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
              Studio Thao Tác Trực Quan 5 Toán Tử Đại Số Quan Hệ Cơ Bản
            </h3>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap gap-1 p-1 rounded-xl bg-slate-100 border border-slate-200 text-xs font-mono">
          <button
            onClick={() => setActiveTab("select")}
            className={`px-2.5 py-1 rounded-lg transition-all ${
              activeTab === "select" ? "bg-orange-600 text-white font-bold shadow-sm" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Phép Chọn (σ)
          </button>
          <button
            onClick={() => setActiveTab("project")}
            className={`px-2.5 py-1 rounded-lg transition-all ${
              activeTab === "project" ? "bg-blue-600 text-white font-bold shadow-sm" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Phép Chiếu (π)
          </button>
          <button
            onClick={() => setActiveTab("union")}
            className={`px-2.5 py-1 rounded-lg transition-all ${
              activeTab === "union" ? "bg-purple-600 text-white font-bold shadow-sm" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Phép Hợp (∪)
          </button>
          <button
            onClick={() => setActiveTab("intersect")}
            className={`px-2.5 py-1 rounded-lg transition-all ${
              activeTab === "intersect" ? "bg-emerald-600 text-white font-bold shadow-sm" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Phép Giao (∩)
          </button>
          <button
            onClick={() => setActiveTab("diff")}
            className={`px-2.5 py-1 rounded-lg transition-all ${
              activeTab === "diff" ? "bg-rose-600 text-white font-bold shadow-sm" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Phép Hiệu (−)
          </button>
        </div>
      </div>

      {/* Main Studio Body */}
      <div className="p-6 space-y-5">
        {/* TAB 1: SELECTION (σ) */}
        {activeTab === "select" && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-orange-50/80 border border-orange-200 flex flex-wrap items-center justify-between gap-3 shadow-sm">
              <div>
                <div className="text-xs font-bold text-orange-800 uppercase tracking-wider font-mono">
                  Công Thức Đại Số Toán Học:
                </div>
                <div className="text-sm font-bold text-orange-950 font-mono mt-0.5">
                  σ_(DiemTB ≥ {scoreThreshold.toFixed(1)})(HOCBONG)
                </div>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <span className="text-slate-700 font-medium">Ngưỡng lọc DiemTB ≥</span>
                <input
                  type="range"
                  min="7.5"
                  max="9.0"
                  step="0.1"
                  value={scoreThreshold}
                  onChange={(e) => setScoreThreshold(parseFloat(e.target.value))}
                  className="w-28 accent-orange-500 cursor-pointer"
                />
                <span className="font-mono font-bold text-orange-800 bg-white px-2 py-0.5 rounded border border-orange-200 shadow-sm">
                  {scoreThreshold.toFixed(1)}
                </span>
              </div>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-200 text-slate-700 font-mono">
                    <th className="p-3">maSoSV</th>
                    <th className="p-3">hoTenSV</th>
                    <th className="p-3">ngaySinh</th>
                    <th className="p-3 text-orange-700 font-bold">diemTB</th>
                    <th className="p-3">mucHBg</th>
                    <th className="p-3 text-center">Trạng Thái Lọc</th>
                  </tr>
                </thead>
                <tbody>
                  {hocbongData.map((row, idx) => {
                    const isMatched = row.diemTB >= scoreThreshold;
                    return (
                      <tr
                        key={idx}
                        className={`border-b border-slate-100 transition-all ${
                          isMatched
                            ? "bg-orange-50/60 text-slate-900 font-medium"
                            : "bg-slate-50/40 text-slate-400 opacity-50"
                        }`}
                      >
                        <td className="p-3 font-mono">{row.maSoSV}</td>
                        <td className="p-3">{row.hoTenSV}</td>
                        <td className="p-3 font-mono">{row.ngaySinh}</td>
                        <td className="p-3 font-mono font-bold text-orange-800">{row.diemTB}</td>
                        <td className="p-3 font-mono">{row.mucHBg}</td>
                        <td className="p-3 text-center font-mono">
                          {isMatched ? (
                            <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-300 text-[10px] font-semibold">
                              ✔ Thỏa mãn ({row.diemTB} ≥ {scoreThreshold.toFixed(1)})
                            </span>
                          ) : (
                            <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-500 text-[10px]">
                              ✖ Loại bỏ
                            </span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-sans">
              💡 <strong>Cơ chế:</strong> Phép chọn <strong>σ</strong> lọc ra các bộ thỏa mãn điều kiện logic $C(t) = \text{True}$. Phép chọn có <strong>tính giao hoán</strong>: $\sigma_{C_1}(\sigma_{C_2}(R)) = \sigma_{C_2}(\sigma_{C_1}(R))$.
            </p>
          </div>
        )}

        {/* TAB 2: PROJECTION (π) */}
        {activeTab === "project" && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-200 flex flex-wrap items-center justify-between gap-3 shadow-sm">
              <div>
                <div className="text-xs font-bold text-blue-800 uppercase tracking-wider font-mono">
                  Công Thức Chiếu Cột:
                </div>
                <div className="text-sm font-bold text-blue-950 font-mono mt-0.5">
                  π_({Object.keys(selectedColumns).filter(k => selectedColumns[k]).join(", ") || "Chưa chọn cột"})(HOCBONG)
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                {Object.keys(selectedColumns).map((col) => (
                  <label
                    key={col}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border cursor-pointer transition-all shadow-sm ${
                      selectedColumns[col]
                        ? "bg-blue-100 border-blue-400 text-blue-900 font-bold"
                        : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={selectedColumns[col]}
                      onChange={(e) =>
                        setSelectedColumns({ ...selectedColumns, [col]: e.target.checked })
                      }
                      className="rounded accent-blue-600"
                    />
                    {col}
                  </label>
                ))}
              </div>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-200 text-blue-900 font-mono">
                    <th className="p-3 text-center w-10 text-slate-400">#</th>
                    {selectedColumns.maSoSV && <th className="p-3">maSoSV</th>}
                    {selectedColumns.hoTenSV && <th className="p-3">hoTenSV</th>}
                    {selectedColumns.diemTB && <th className="p-3">diemTB</th>}
                    {selectedColumns.mucHBg && <th className="p-3">mucHBg</th>}
                  </tr>
                </thead>
                <tbody>
                  {hocbongData.map((row, idx) => (
                    <tr key={idx} className="border-b border-slate-100 bg-white hover:bg-slate-50/80">
                      <td className="p-3 text-center font-mono text-slate-400">{idx + 1}</td>
                      {selectedColumns.maSoSV && <td className="p-3 font-mono font-bold text-slate-800">{row.maSoSV}</td>}
                      {selectedColumns.hoTenSV && <td className="p-3 text-slate-700">{row.hoTenSV}</td>}
                      {selectedColumns.diemTB && <td className="p-3 font-mono text-amber-800 font-bold">{row.diemTB}</td>}
                      {selectedColumns.mucHBg && <td className="p-3 font-mono text-emerald-800 font-bold">{row.mucHBg}</td>}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-sans">
              💡 <strong>Cơ chế:</strong> Phép chiếu <strong>π</strong> cắt lấy một tập con các cột $X \subseteq U$, đồng thời tự động <strong>chọn bộ đại diện khử các dòng trùng lặp</strong> theo bản chất tập hợp.
            </p>
          </div>
        )}

        {/* TAB 3: UNION (∪) */}
        {activeTab === "union" && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-purple-50/80 border border-purple-200 font-mono text-xs text-purple-950 shadow-sm">
              <span className="font-bold text-purple-800 uppercase">Công thức Hợp (Union):</span> π_(Maso, Hoten)(Canbo ∪ Giangvien)
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-2 shadow-sm">
                <div className="font-bold text-purple-900 font-mono">Quan hệ 1: Canbo</div>
                <div className="font-mono text-[11px] text-slate-700 space-y-1">
                  <div>• CB01 - Nguyễn Văn An (1980 - Cần Thơ)</div>
                  <div>• CB02 - Trần Thị Bình (1985 - Cần Thơ)</div>
                </div>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-2 shadow-sm">
                <div className="font-bold text-purple-900 font-mono">Quan hệ 2: Giangvien</div>
                <div className="font-mono text-[11px] text-slate-700 space-y-1">
                  <div>• CB02 - Trần Thị Bình (1985 - Cần Thơ)</div>
                  <div>• GV01 - Lê Đức Phúc (1975 - Đồng Tháp)</div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-purple-50/50 border border-purple-200 space-y-2 shadow-sm">
              <div className="text-xs font-bold text-purple-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-600" /> Kết quả Canbo ∪ Giangvien (3 bộ — đã khử trùng lặp CB02):
              </div>
              <div className="font-mono text-xs text-emerald-900 space-y-1 pl-3 border-l-2 border-purple-500 font-semibold">
                <div>1. (CB01, Nguyễn Văn An)</div>
                <div>2. (CB02, Trần Thị Bình) — [Chỉ giữ 1 bộ đại diện]</div>
                <div>3. (GV01, Lê Đức Phúc)</div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: INTERSECTION (∩) */}
        {activeTab === "intersect" && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200 font-mono text-xs text-emerald-950 shadow-sm">
              <span className="font-bold text-emerald-800 uppercase">Công thức Giao (Intersection):</span> r₁ ∩ r₂ = {"{t | t ∈ r₁ ∧ t ∈ r₂}"}
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2 shadow-sm">
              <div className="font-bold text-slate-900">Ví dụ: Tìm SV vừa làm đề tài DT001 vừa làm đề tài DT005:</div>
              <div className="p-3 rounded-lg bg-slate-900 font-mono text-[11px] text-amber-300 overflow-x-auto whitespace-pre shadow-inner">
{`π_(MaSV, Hoten)(σ_(MaDT='DT001')(SINHVIEN * SV_DT))
   ∩ 
π_(MaSV, Hoten)(σ_(MaDT='DT005')(SINHVIEN * SV_DT))`}
              </div>
              <div className="text-emerald-800 font-mono text-xs pt-2 font-semibold">
                ► Kết quả trích xuất phần giao chung của 2 tập hợp sinh viên.
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: DIFFERENCE (−) */}
        {activeTab === "diff" && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-rose-50/80 border border-rose-200 font-mono text-xs text-rose-950 shadow-sm">
              <span className="font-bold text-rose-800 uppercase">Công thức Hiệu (Difference):</span> r − s = {"{t | t ∈ r ∧ t ∉ s}"}
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2 shadow-sm">
              <div className="font-bold text-slate-900">Ví dụ: Tìm SV KHÔNG thực hiện đề tài có nơi áp dụng ở Vĩnh Long:</div>
              <div className="p-3 rounded-lg bg-slate-900 font-mono text-[11px] text-rose-300 overflow-x-auto whitespace-pre shadow-inner">
{`π_(MaSV, Hoten)(SINHVIEN)
   − 
π_(MaSV, Hoten)(σ_(NoiAD='Vĩnh Long')(SINHVIEN * SV_DT))`}
              </div>
              <div className="text-slate-600 text-xs pt-1 leading-relaxed">
                ⚠️ <strong>Quy tắc bắt buộc:</strong> Các phép Hợp (∪), Giao (∩), Hiệu (−) <strong>chỉ thực hiện được trên hai quan hệ tương thích</strong> (tức cùng chung tập thuộc tính $U$).
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
