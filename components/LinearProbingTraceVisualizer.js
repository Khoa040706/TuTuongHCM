"use client";

import React, { useState } from "react";
import {
  Search,
  Plus,
  Trash2,
  AlertTriangle,
  CheckCircle2,
  RotateCcw,
  ShieldAlert,
  ArrowRight,
  Sparkles,
  Layers,
  HelpCircle
} from "lucide-react";

export default function LinearProbingTraceVisualizer() {
  const [activeTab, setActiveTab] = useState("trace"); // "trace", "lazyDelete", "clustering"

  // Lazy deletion table state
  // States: { val: number|null, status: "occupied" | "deleted" | "empty" }
  const [lazyTable, setLazyTable] = useState({
    0: { val: 14, status: "occupied" },
    1: { val: 21, status: "occupied" },
    2: { val: 1, status: "occupied" },
    3: { val: 35, status: "occupied" },
    4: { val: 18, status: "occupied" },
    5: { val: null, status: "empty" },
    6: { val: null, status: "empty" }
  });

  const [queryLog, setQueryLog] = useState(null);

  const handleNaiveDelete21 = () => {
    setLazyTable((prev) => ({
      ...prev,
      1: { val: null, status: "empty" } // Naive empty delete
    }));
    setQueryLog({
      action: "naiveDelete",
      msg: "Đã XÓA TRẮNG slot [1] (gán null). Hãy thử bấm nút 'Tìm 35' để thấy lỗi nghiêm trọng!"
    });
  };

  const handleLazyDelete21 = () => {
    setLazyTable((prev) => ({
      ...prev,
      1: { val: 21, status: "deleted" } // Marked as deleted X
    }));
    setQueryLog({
      action: "lazyDelete",
      msg: "Đã XÓA LƯỜI slot [1] (Đánh dấu trạng thái 'Marked X'). Ô nhớ này vẫn cho phép probe duyệt qua!"
    });
  };

  const handleFind35 = () => {
    // trace search for 35: hash(35) = 0
    const steps = [];
    let found = false;
    let probes = 0;

    for (let i = 0; i < 7; i++) {
      const slot = (0 + i) % 7;
      probes++;
      const item = lazyTable[slot];

      if (item.status === "empty") {
        steps.push(`Probe #${probes}: Slot [${slot}] TRỐNG (Empty) &rarr; DỪNG TÌM KIẾM!`);
        break;
      } else if (item.status === "deleted") {
        steps.push(`Probe #${probes}: Slot [${slot}] có cờ ĐÃ XÓA (X) &rarr; Bỏ qua, tiếp tục probe sang slot kế tiếp...`);
      } else if (item.status === "occupied") {
        if (item.val === 35) {
          steps.push(`Probe #${probes}: Slot [${slot}] chứa giá trị 35 &rarr; TÌM THẤY THÀNH CÔNG! ✓`);
          found = true;
          break;
        } else {
          steps.push(`Probe #${probes}: Slot [${slot}] chứa ${item.val} &ne; 35 &rarr; Tiếp tục probe...`);
        }
      }
    }

    setQueryLog({
      action: "find35",
      found,
      probes,
      steps
    });
  };

  const handleInsert15 = () => {
    // Insert 15: hash(15) = 1
    let insertedSlot = -1;
    for (let i = 0; i < 7; i++) {
      const slot = (1 + i) % 7;
      if (lazyTable[slot].status === "empty" || lazyTable[slot].status === "deleted") {
        insertedSlot = slot;
        break;
      }
    }

    if (insertedSlot !== -1) {
      setLazyTable((prev) => ({
        ...prev,
        [insertedSlot]: { val: 15, status: "occupied" }
      }));
      setQueryLog({
        action: "insert15",
        msg: `insert(15): hash(15)=1. Quét gặp slot [${insertedSlot}] (có cờ Deleted/Empty) &rarr; Chèn 15 vào slot [${insertedSlot}] để tái sử dụng ô nhớ!`
      });
    }
  };

  const handleResetLazyTable = () => {
    setLazyTable({
      0: { val: 14, status: "occupied" },
      1: { val: 21, status: "occupied" },
      2: { val: 1, status: "occupied" },
      3: { val: 35, status: "occupied" },
      4: { val: 18, status: "occupied" },
      5: { val: null, status: "empty" },
      6: { val: null, status: "empty" }
    });
    setQueryLog(null);
  };

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl p-5 md:p-7 shadow-sm my-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-5">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
            Mục 4.2 — Dò Tuyến Tính &amp; Xóa Lười
          </span>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-1">
            Linear Probing: Trace Giáo Trình [18, 14, 21, 1, 35] &amp; Thử Nghiệm Lazy Deletion
          </h3>
          <p className="text-xs text-slate-500">
            Khảo sát cơ chế dò tuần tự, hiện tượng Primary Clustering và giải pháp Lazy Deletion với 3 trạng thái ô nhớ
          </p>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 font-mono text-xs font-bold self-start sm:self-auto">
          <Search className="w-3.5 h-3.5 text-blue-600" />
          Linear Probing
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 mb-5 border-b border-slate-200 pb-2 overflow-x-auto">
        <button
          onClick={() => setActiveTab("trace")}
          className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition cursor-pointer shrink-0 ${
            activeTab === "trace"
              ? "bg-blue-600 text-white shadow-xs"
              : "bg-slate-100 text-slate-600 hover:text-slate-900"
          }`}
        >
          1. Trace Chèn &amp; Đếm Probe Giáo Trình
        </button>
        <button
          onClick={() => setActiveTab("lazyDelete")}
          className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition cursor-pointer shrink-0 ${
            activeTab === "lazyDelete"
              ? "bg-blue-600 text-white shadow-xs"
              : "bg-slate-100 text-slate-600 hover:text-slate-900"
          }`}
        >
          2. Thử Nghiệm Xóa Lười (Lazy Deletion ⭐)
        </button>
        <button
          onClick={() => setActiveTab("clustering")}
          className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition cursor-pointer shrink-0 ${
            activeTab === "clustering"
              ? "bg-blue-600 text-white shadow-xs"
              : "bg-slate-100 text-slate-600 hover:text-slate-900"
          }`}
        >
          3. Primary Clustering &amp; Cải Tiến
        </button>
      </div>

      {/* Tab 1: Textbook Trace */}
      {activeTab === "trace" && (
        <div className="space-y-4 mb-5 animate-fadeIn">
          {/* Visual Step Table */}
          <div className="bg-gradient-to-br from-blue-50/70 via-white to-slate-50 text-slate-800 rounded-2xl p-5 border-2 border-blue-200 shadow-sm space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-blue-100 text-xs font-mono">
              <span className="font-bold text-blue-950 uppercase">CHÈN LẦN LƯỢT: 18, 14, 21, 1, 35 VÀO BẢNG m = 7 (k mod 7)</span>
              <span className="text-blue-700 font-bold bg-blue-100 px-2 py-0.5 rounded-full border border-blue-200">Linear Probing</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-7 gap-2 pt-2">
              {[
                { slot: 0, val: 14, note: "14 mod 7 = 0" },
                { slot: 1, val: 21, note: "21 mod 7 = 0 &rarr; chiếm 1" },
                { slot: 2, val: 1, note: "1 mod 7 = 1 &rarr; chiếm 2" },
                { slot: 3, val: 35, note: "35 mod 7 = 0 &rarr; chiếm 3" },
                { slot: 4, val: 18, note: "18 mod 7 = 4" },
                { slot: 5, val: null, note: "Trống (Empty)" },
                { slot: 6, val: null, note: "Trống (Empty)" }
              ].map((item) => (
                <div
                  key={item.slot}
                  className={`p-3 rounded-xl border-2 flex flex-col items-center justify-between gap-1 text-center font-mono shadow-xs ${
                    item.val !== null
                      ? "bg-white border-blue-300 text-slate-900"
                      : "bg-slate-50/80 border-slate-200 text-slate-400"
                  }`}
                >
                  <span className="text-[10px] text-blue-900 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200 font-bold">
                    Slot [{item.slot}]
                  </span>
                  <span className="text-base font-black text-slate-900 my-1">
                    {item.val !== null ? item.val : "null"}
                  </span>
                  <span className="text-[9px] text-slate-500 font-sans font-semibold">{item.note}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Two Search Traces from textbook */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 space-y-1.5 text-emerald-950">
              <span className="font-bold text-emerald-900 block font-sans">
                🔍 Thao tác Find(35): hash(35) = 0
              </span>
              <p className="text-[11px] text-slate-700 font-sans leading-relaxed">
                • Probe 1: Slot [0] (chứa 14 &ne; 35)<br/>
                • Probe 2: Slot [1] (chứa 21 &ne; 35)<br/>
                • Probe 3: Slot [2] (chứa 1 &ne; 35)<br/>
                • Probe 4: Slot [3] (chứa 35 &rarr; <strong>TÌM THẤY!</strong>)
              </p>
              <div className="pt-2 text-emerald-800 font-bold border-t border-emerald-200">
                &rarr; Tìm thấy sau đúng 4 lần probe.
              </div>
            </div>

            <div className="bg-rose-50 border border-rose-200 rounded-2xl p-4 space-y-1.5 text-rose-950">
              <span className="font-bold text-rose-900 block font-sans">
                🔍 Thao tác Find(8): hash(8) = 1
              </span>
              <p className="text-[11px] text-slate-700 font-sans leading-relaxed">
                • Probe 1: Slot [1] (21) &bull; Probe 2: Slot [2] (1)<br/>
                • Probe 3: Slot [3] (35) &bull; Probe 4: Slot [4] (18)<br/>
                • Probe 5: Slot [5] (Gặp ô TRỐNG &rarr; <strong>DỪNG LẠI!</strong>)
              </p>
              <div className="pt-2 text-rose-800 font-bold border-t border-rose-200">
                &rarr; Kết luận: 8 NOT found, cần 5 lần probe.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Lazy Deletion Sandbox */}
      {activeTab === "lazyDelete" && (
        <div className="space-y-4 mb-5 animate-fadeIn">
          <div className="bg-gradient-to-br from-amber-50/60 via-white to-blue-50/50 text-slate-800 rounded-2xl p-5 border-2 border-blue-200 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-blue-100">
              <div>
                <span className="text-xs font-mono font-bold text-blue-950 block uppercase">
                  BÀI TOÁN XÓA 21 TẠI SLOT [1] &amp; 3 TRẠNG THÁI Ô NHỚ
                </span>
                <span className="text-xs text-slate-500 font-sans">
                  So sánh Xóa trắng (Ngây thơ) vs Xóa lười (Lazy Deletion)
                </span>
              </div>

              <button
                onClick={handleResetLazyTable}
                className="px-3 py-1.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-xs font-mono font-bold text-slate-700 transition flex items-center gap-1.5 shadow-2xs cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Reset Mảng
              </button>
            </div>

            {/* Current Table Visual */}
            <div className="grid grid-cols-2 sm:grid-cols-7 gap-2 font-mono text-xs">
              {Array.from({ length: 7 }).map((_, slotIdx) => {
                const cell = lazyTable[slotIdx];
                const isOccupied = cell.status === "occupied";
                const isDeleted = cell.status === "deleted";

                return (
                  <div
                    key={slotIdx}
                    className={`p-3 rounded-xl border-2 flex flex-col items-center justify-center gap-1 shadow-xs ${
                      isDeleted
                        ? "bg-amber-50 border-amber-400 text-amber-950"
                        : isOccupied
                        ? "bg-white border-blue-300 text-slate-900"
                        : "bg-slate-50/80 border-slate-200 text-slate-400"
                    }`}
                  >
                    <span className="text-[10px] text-slate-500 font-bold">Slot [{slotIdx}]</span>
                    <span className="text-base font-black">
                      {isDeleted ? "X (Deleted)" : isOccupied ? cell.val : "Empty"}
                    </span>
                    <span className="text-[9px] uppercase tracking-wider font-semibold opacity-75">
                      {cell.status}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 flex-wrap pt-2">
              <button
                onClick={handleNaiveDelete21}
                className="px-3.5 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-mono text-xs font-bold transition flex items-center gap-1.5 shadow-xs cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" /> 1. Xóa Trắng 21 (Sai ❌)
              </button>
              <button
                onClick={handleLazyDelete21}
                className="px-3.5 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-mono text-xs font-bold transition flex items-center gap-1.5 shadow-xs cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" /> 2. Xóa Lười 21 (Đánh dấu X ✓)
              </button>
              <button
                onClick={handleFind35}
                className="px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-mono text-xs font-bold transition flex items-center gap-1.5 shadow-xs cursor-pointer"
              >
                <Search className="w-3.5 h-3.5" /> 3. Chạy Find(35)
              </button>
              <button
                onClick={handleInsert15}
                className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-xs font-bold transition flex items-center gap-1.5 shadow-xs cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" /> 4. Insert(15) (Tái sử dụng ô X)
              </button>
            </div>

            {/* Log display */}
            {queryLog && (
              <div className="p-3.5 bg-white rounded-xl border border-blue-200 text-xs font-mono space-y-1.5 shadow-2xs text-slate-800 animate-fadeIn">
                {queryLog.msg && <p className="text-amber-900 font-bold font-sans">{queryLog.msg}</p>}
                {queryLog.steps && (
                  <div className="space-y-1">
                    <span className="text-slate-500 block text-[11px] font-bold">CÁC BƯỚC DUYỆT PROBE KHI FIND(35):</span>
                    {queryLog.steps.map((st, sIdx) => (
                      <div
                        key={sIdx}
                        className={
                          st.includes("TÌM THẤY")
                            ? "text-emerald-800 font-bold"
                            : st.includes("DỪNG")
                            ? "text-rose-700 font-bold"
                            : "text-slate-700"
                        }
                        dangerouslySetInnerHTML={{ __html: st }}
                      />
                    ))}
                    {!queryLog.found && (
                      <div className="text-rose-700 font-bold pt-1 font-sans">
                        ❌ KẾT QUẢ SAI: Báo 35 NOT FOUND vì gặp ô trống tại slot 1 dừng sớm, trong khi 35 thực tế vẫn nằm ở slot 3!
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Tab 3: Primary Clustering & Modified */}
      {activeTab === "clustering" && (
        <div className="space-y-3 mb-5 animate-fadeIn text-xs font-sans">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2">
            <span className="font-bold text-slate-900 block text-xs font-mono">
              ⚠️ HIỆN TƯỢNG PRIMARY CLUSTERING (DỒN CỤM SƠ CẤP)
            </span>
            <p className="text-slate-700 leading-relaxed">
              Linear Probing có xu hướng tạo ra <strong>các khối ô nhớ liên tiếp bị chiếm giữ</strong> (consecutive occupied slots). Khi một khối càng dài, xác suất một khóa mới rơi vào khối đó càng tăng, khiến khối càng phình to và làm chậm nghiêm trọng cả 3 thao tác <code>find / insert / delete</code>.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 space-y-2">
            <span className="font-bold text-blue-900 block text-xs font-mono">
              💡 GIẢI PHÁP: MODIFIED LINEAR PROBING
            </span>
            <p className="text-slate-700 leading-relaxed">
              Thay vì nhảy bước cố định $+1$, ta nhảy bước hằng số $d &gt; 1$:
            </p>
            <div className="p-2.5 bg-white rounded-xl border border-blue-200 font-mono text-center text-blue-800 font-bold">
              Probe sequence: (hash(key) + i &times; d) mod m
            </div>
            <p className="text-[11px] text-slate-600">
              📌 <strong>Lưu ý:</strong> $d$ và $m$ phải là <strong>hai số nguyên tố cùng nhau (co-prime)</strong> để đảm bảo chuỗi probe sẽ quét qua toàn bộ tất cả các slot trong bảng băm mà không bị bỏ sót.
            </p>
          </div>
        </div>
      )}

      {/* Sticky Takeaway */}
      <div className="bg-blue-50/80 border-2 border-blue-200 rounded-2xl p-4 flex items-start gap-3 text-xs text-blue-950">
        <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
        <div>
          <strong>⭐ Cần nhớ (Mục 4.2):</strong><br/>
          • <strong>Linear probing:</strong> Khi collision, quét tuần tự tìm slot trống kế tiếp (có wrap-around).<br/>
          • <strong>Lazy Deletion:</strong> Tuyệt đối không xóa trắng ô nhớ khi delete mà phải dùng cờ <code>Marked Deleted (X)</code> để không phá vỡ chuỗi dò tìm của <code>find()</code>.<br/>
          • <strong>Nhược điểm:</strong> Bị hiện tượng <strong>Primary clustering</strong> &rarr; khắc phục bằng Modified Linear Probing (bước nhảy $d$ co-prime với $m$).
        </div>
      </div>
    </div>
  );
}
