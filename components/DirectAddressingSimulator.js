"use client";

import React, { useState } from "react";
import {
  Bus,
  Search,
  Plus,
  Trash2,
  AlertTriangle,
  CheckCircle2,
  HardDrive,
  Cpu,
  Layers,
  ShieldAlert,
  ArrowRight
} from "lucide-react";
import { highlightJavaVsCode } from "../utils/javaSyntaxHighlighter";

export default function DirectAddressingSimulator() {
  const [busNumInput, setBusNumInput] = useState("");
  const [storageMode, setStorageMode] = useState("object"); // "boolean" or "object"

  const [busTable, setBusTable] = useState({
    7: { exists: true, from: "Bedok", to: "Clementi", freq: "8-12 phút" },
    14: { exists: true, from: "Bedok", to: "Clementi", freq: "10-15 phút" },
    65: { exists: true, from: "Tampines", to: "HarbourFront", freq: "6-10 phút" },
    190: { exists: true, from: "Choa Chu Kang", to: "Kampong Bahru", freq: "5-8 phút" },
    857: { exists: true, from: "Yishun", to: "Suntec City", freq: "7-11 phút" }
  });

  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = (numStr) => {
    const num = parseInt(numStr || busNumInput, 10);
    if (isNaN(num) || num < 0 || num > 999) {
      setSearchResult({ error: "Số hiệu xe buýt phải là số nguyên từ 0 đến 999!" });
      return;
    }

    const route = busTable[num];
    if (route && route.exists) {
      setSearchResult({
        found: true,
        num,
        data: route
      });
    } else {
      setSearchResult({
        found: false,
        num
      });
    }
  };

  const handleInsert = () => {
    const num = parseInt(busNumInput, 10);
    if (isNaN(num) || num < 0 || num > 999) return;

    setBusTable((prev) => ({
      ...prev,
      [num]: {
        exists: true,
        from: "Bến xe trung tâm",
        to: "Ga tàu điện",
        freq: "10 phút"
      }
    }));

    setSearchResult({
      found: true,
      num,
      data: { from: "Bến xe trung tâm", to: "Ga tàu điện", freq: "10 phút" },
      inserted: true
    });
    setBusNumInput("");
  };

  const handleDelete = () => {
    const num = parseInt(busNumInput, 10);
    if (isNaN(num) || num < 0 || num > 999) return;

    setBusTable((prev) => {
      const updated = { ...prev };
      delete updated[num];
      return updated;
    });

    setSearchResult({
      deleted: true,
      num
    });
    setBusNumInput("");
  };

  const directAddressingCode = `// Direct Addressing Table: a[key] = data
public class DirectAddressingTable {
    private Object[] a = new Object[1000]; // Mảng 1000 slot cho key 0..999
    
    // 1. Thêm (Insert) -> O(1)
    public void insert(int key, Object data) {
        a[key] = data; 
    }
    
    // 2. Tìm kiếm (Find / Retrieval) -> O(1)
    public Object find(int key) {
        return a[key]; 
    }
    
    // 3. Xóa (Delete) -> O(1)
    public void delete(int key) {
        a[key] = null; 
    }
}`;

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl p-5 md:p-7 shadow-sm my-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-5">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
            Mục 1 — Phiên Bản Đơn Giản Hóa
          </span>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-1">
            Direct Addressing Table: Bài Toán Xe Buýt SBS Transit &amp; 3 Hạn Chế Cốt Tử
          </h3>
          <p className="text-xs text-slate-500">
            Truy cập trực tiếp mảng bằng chính khóa <code>a[key] = data</code> trong thời gian $O(1)$ tuyệt đối
          </p>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 font-mono text-xs font-bold self-start sm:self-auto">
          <Bus className="w-3.5 h-3.5 text-blue-600" />
          SBS Transit Demo (0..999)
        </div>
      </div>

      {/* Interactive SBS Transit Simulator */}
      <div className="bg-gradient-to-br from-blue-50/80 via-white to-indigo-50/40 rounded-2xl p-5 border border-blue-200 text-slate-800 shadow-sm mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-blue-100 mb-4">
          <div>
            <span className="text-xs font-mono font-bold text-slate-900 block uppercase">
              BÀI TOÁN QUẢN LÝ TUYẾN XE BUÝT (SBS TRANSIT): MẢNG a[0..999]
            </span>
            <span className="text-xs text-blue-700 font-mono font-semibold">
              Thao tác trực tiếp qua chỉ số: <code>a[num]</code> trong O(1)
            </span>
          </div>

          <div className="flex items-center gap-1.5 bg-white p-1 rounded-xl border border-blue-200 shadow-2xs">
            <button
              onClick={() => setStorageMode("object")}
              className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition cursor-pointer ${
                storageMode === "object"
                  ? "bg-blue-600 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Mảng Object
            </button>
            <button
              onClick={() => setStorageMode("boolean")}
              className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition cursor-pointer ${
                storageMode === "boolean"
                  ? "bg-blue-600 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Mảng Boolean
            </button>
          </div>
        </div>

        {/* Input & Action Bar */}
        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-2 flex-col sm:flex-row">
            <div className="relative flex-1 w-full">
              <input
                type="number"
                min="0"
                max="999"
                value={busNumInput}
                onChange={(e) => setBusNumInput(e.target.value)}
                placeholder="Nhập số hiệu tuyến xe (0..999)..."
                className="w-full bg-white border border-slate-300 rounded-2xl px-4 py-2 text-xs sm:text-sm font-mono text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition shadow-xs"
              />
            </div>
            <div className="flex items-center gap-1.5 w-full sm:w-auto">
              <button
                onClick={() => handleSearch()}
                className="flex-1 sm:flex-none px-4 py-2 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-mono font-bold text-xs transition cursor-pointer flex items-center justify-center gap-1 shadow-xs"
              >
                <Search className="w-3.5 h-3.5" /> find(num)
              </button>
              <button
                onClick={handleInsert}
                className="flex-1 sm:flex-none px-3.5 py-2 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-mono font-bold text-xs transition cursor-pointer flex items-center justify-center gap-1 shadow-xs"
              >
                <Plus className="w-3.5 h-3.5" /> insert(num)
              </button>
              <button
                onClick={handleDelete}
                className="flex-1 sm:flex-none px-3.5 py-2 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-mono font-bold text-xs transition cursor-pointer flex items-center justify-center gap-1 shadow-xs"
              >
                <Trash2 className="w-3.5 h-3.5" /> delete(num)
              </button>
            </div>
          </div>

          {/* Quick preset buttons */}
          <div className="flex items-center gap-1.5 flex-wrap text-xs font-mono text-slate-600">
            <span>Tra cứu nhanh tuyến có sẵn:</span>
            {[7, 14, 65, 190, 857].map((num) => (
              <button
                key={num}
                onClick={() => {
                  setBusNumInput(num.toString());
                  handleSearch(num.toString());
                }}
                className="px-2.5 py-1 rounded-xl bg-white hover:bg-blue-50 text-blue-800 border border-blue-200 text-xs font-semibold transition cursor-pointer shadow-2xs"
              >
                Tuyến #{num}
              </button>
            ))}
          </div>
        </div>

        {/* Query Result Box */}
        {searchResult && (
          <div className="bg-white border-2 border-blue-200 rounded-2xl p-4 text-xs font-mono shadow-xs animate-fadeIn text-slate-800">
            {searchResult.error ? (
              <div className="text-rose-600 font-bold flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4" /> {searchResult.error}
              </div>
            ) : searchResult.deleted ? (
              <div className="text-amber-800 font-bold">
                ✓ <code>delete({searchResult.num})</code>: Đã gán <code>a[{searchResult.num}] = null</code> (Thời gian: O(1)).
              </div>
            ) : searchResult.found ? (
              <div className="space-y-1 text-slate-800">
                <div className="text-emerald-800 font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  {searchResult.inserted ? `Đã thêm tuyến xe #${searchResult.num}!` : `Tìm thấy tuyến xe #${searchResult.num} tại a[${searchResult.num}]!`}
                </div>
                {storageMode === "object" ? (
                  <p className="text-slate-600 font-sans">
                    • <strong>Lộ trình:</strong> {searchResult.data.from} &rarr; {searchResult.data.to} &bull; <strong>Tần suất:</strong> {searchResult.data.freq}
                  </p>
                ) : (
                  <p className="text-slate-600">
                    • Giá trị trong mảng: <code>a[{searchResult.num}] = true</code> (Tuyến xe đang hoạt động).
                  </p>
                )}
                <div className="text-[11px] text-blue-800 font-bold pt-1">
                  &rarr; Chi phí truy xuất: <strong>Đúng 1 phép đọc ô nhớ RAM = O(1)</strong>!
                </div>
              </div>
            ) : (
              <div className="text-slate-500 font-semibold">
                ❌ Tuyến xe #{searchResult.num} không tồn tại (<code>a[{searchResult.num}] == null / false</code>).
              </div>
            )}
          </div>
        )}
      </div>

      {/* 3 Critical Limitations Grid */}
      <div className="bg-rose-50/50 border border-rose-200 rounded-2xl p-5 mb-6">
        <div className="flex items-center gap-2 mb-3">
          <ShieldAlert className="w-4 h-4 text-rose-600" />
          <h4 className="text-xs font-mono font-bold text-rose-950 uppercase">
            3 HẠN CHẾ CỐT TỬ CỦA DIRECT ADDRESSING TABLE (VÌ SAO CẦN HASH TABLE?)
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-sans text-slate-800">
          <div className="bg-white p-3.5 rounded-xl border border-rose-200 space-y-1 flex flex-col justify-between">
            <div>
              <span className="font-bold text-rose-900 block mb-1">1. Khóa phải là số nguyên không âm</span>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                Nếu khóa là chuỗi như tuyến <code>'151A'</code>, <code>'NR10'</code> hay tên người, ta không thể dùng làm chỉ số mảng <code>a['151A']</code>.
              </p>
            </div>
            <span className="text-[10px] font-mono text-rose-700 bg-rose-50 px-2 py-0.5 rounded mt-2">
              Khóa chuỗi &rarr; Bất khả thi!
            </span>
          </div>

          <div className="bg-white p-3.5 rounded-xl border border-rose-200 space-y-1 flex flex-col justify-between">
            <div>
              <span className="font-bold text-rose-900 block mb-1">2. Phạm vi (Range) khóa phải nhỏ</span>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                Nếu dùng số CCCD (9 - 12 chữ số) làm key, ta phải cấp phát mảng <code>a[10¹²]</code> &rarr; Đòi hỏi hàng nghìn Gigabytes RAM vượt quá dung lượng máy tính!
              </p>
            </div>
            <span className="text-[10px] font-mono text-rose-700 bg-rose-50 px-2 py-0.5 rounded mt-2">
              Range lớn &rarr; Tràn bộ nhớ RAM!
            </span>
          </div>

          <div className="bg-white p-3.5 rounded-xl border border-rose-200 space-y-1 flex flex-col justify-between">
            <div>
              <span className="font-bold text-rose-900 block mb-1">3. Khóa phải dày đặc (Dense)</span>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                Nếu công ty chỉ có 300 tuyến xe nhưng mảng phải cấp phát tới 1.000 (hoặc 100.000) slot, bảng sẽ bị thưa thớt (sparse), lãng phí 99.9% ô nhớ trống.
              </p>
            </div>
            <span className="text-[10px] font-mono text-rose-700 bg-rose-50 px-2 py-0.5 rounded mt-2">
              Sparse key &rarr; Lãng phí bộ nhớ!
            </span>
          </div>
        </div>
      </div>

      {/* Code Block */}
      <div className="bg-slate-950 rounded-2xl p-4 border border-slate-800 text-white mb-5">
        <div className="text-xs font-mono text-slate-400 pb-2 border-b border-slate-800 flex items-center justify-between mb-2">
          <span>DirectAddressingTable.java</span>
          <span className="text-blue-400 font-bold">Mọi thao tác đều O(1)</span>
        </div>
        <pre className="text-xs font-mono overflow-x-auto">
          <code dangerouslySetInnerHTML={{ __html: highlightJavaVsCode(directAddressingCode) }} />
        </pre>
      </div>

      {/* Sticky Takeaway */}
      <div className="bg-blue-50/80 border-2 border-blue-200 rounded-2xl p-4 flex items-start gap-3 text-xs text-blue-950">
        <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
        <div>
          <strong>⭐ Cần nhớ (Mục 1):</strong><br/>
          • <strong>Direct Addressing Table:</strong> <code>a[key] = data</code>, truy cập trực tiếp bằng key làm chỉ số mảng trong $O(1)$.<br/>
          • <strong>3 hạn chế:</strong> Key phải là số nguyên không âm, phạm vi key phải nhỏ, và key phải dày đặc (dense).<br/>
          • Đây chính là nền tảng để các nhà khoa học máy tính mở rộng và phát triển thành <strong>Hash Table</strong>.
        </div>
      </div>
    </div>
  );
}
