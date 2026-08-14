"use client";

import React, { useState } from "react";
import {
  Coffee,
  Terminal,
  Play,
  RotateCcw,
  CheckCircle2,
  Plus,
  Search,
  Trash2,
  HelpCircle,
  Sparkles,
  Layers,
  Check
} from "lucide-react";

export default function JavaHashMapApiWorkbench() {
  const [mapData, setMapData] = useState({
    Mike: 52,
    Janet: 46,
    Jack: 46
  });

  const [inputKey, setInputKey] = useState("");
  const [inputVal, setInputVal] = useState("");
  const [consoleLogs, setConsoleLogs] = useState([
    "// Khởi tạo HashMap<String, Integer> hm = new HashMap<>();",
    'hm.put("Mike", 52);',
    'hm.put("Janet", 46);',
    'hm.put("Jack", 46);',
    'System.out.println("Janet => " + hm.get("Janet"));',
    "// Output: Janet => 46"
  ]);

  const handleRunTextbookCode = () => {
    setMapData({
      Mike: 52,
      Janet: 46,
      Jack: 46
    });
    setConsoleLogs([
      "// --- CHẠY VÍ DỤ GIÁO TRÌNH ---",
      "HashMap<String, Integer> hm = new HashMap<String, Integer>();",
      'hm.put("Mike", 52);',
      'hm.put("Janet", 46);',
      'hm.put("Jack", 46);',
      'System.out.println("Janet => " + hm.get("Janet"));',
      "==> Janet => 46"
    ]);
  };

  const handlePut = () => {
    if (!inputKey.trim() || !inputVal.trim()) return;
    const num = parseInt(inputVal, 10);
    if (isNaN(num)) return;

    setMapData((prev) => ({
      ...prev,
      [inputKey.trim()]: num
    }));

    setConsoleLogs((prev) => [
      ...prev,
      `hm.put("${inputKey.trim()}", ${num}); // Đã gán mapping [${inputKey.trim()} -> ${num}]`
    ]);
    setInputKey("");
    setInputVal("");
  };

  const handleGet = () => {
    if (!inputKey.trim()) return;
    const val = mapData[inputKey.trim()];
    setConsoleLogs((prev) => [
      ...prev,
      `hm.get("${inputKey.trim()}"); // Kết quả trả về: ${val !== undefined ? val : "null"}`
    ]);
  };

  const handleContainsKey = () => {
    if (!inputKey.trim()) return;
    const exists = Object.prototype.hasOwnProperty.call(mapData, inputKey.trim());
    setConsoleLogs((prev) => [
      ...prev,
      `hm.containsKey("${inputKey.trim()}"); // Kết quả: ${exists ? "true (Tìm thấy Key)" : "false (Không tồn tại)"}`
    ]);
  };

  const handleContainsValue = () => {
    if (!inputVal.trim()) return;
    const num = parseInt(inputVal, 10);
    const exists = Object.values(mapData).includes(num);
    setConsoleLogs((prev) => [
      ...prev,
      `hm.containsValue(${num}); // Kết quả: ${exists ? "true (Có ít nhất 1 key ánh xạ tới)" : "false (Không có)"}`
    ]);
  };

  const handleClear = () => {
    setMapData({});
    setConsoleLogs((prev) => [
      ...prev,
      "hm.clear(); // Đã xóa toàn bộ các mapping trong HashMap!"
    ]);
  };

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl p-5 md:p-7 shadow-sm my-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-5">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-200">
            Mục 6.2 — Phương Thức &amp; Sandbox API
          </span>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-1">
            Java HashMap API: Ví Dụ Giáo Trình (Tên &rarr; Tuổi) &amp; Bộ Thử Nghiệm Tương Tác
          </h3>
          <p className="text-xs text-slate-500">
            Thực hành các phương thức <code>put</code>, <code>get</code>, <code>containsKey</code>, <code>containsValue</code>, <code>clear</code> trên môi trường Java giả lập
          </p>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 font-mono text-xs font-bold self-start sm:self-auto">
          <Terminal className="w-3.5 h-3.5 text-indigo-600" />
          API Playground
        </div>
      </div>

      {/* Methods Overview Table */}
      <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-xs mb-5">
        <div className="bg-slate-100 px-4 py-2.5 border-b border-slate-200 font-mono text-xs font-bold text-slate-700">
          CÁC METHOD CHÍNH CỦA HASHMAP TRONG GIÁO TRÌNH
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono border-collapse">
            <tbody className="divide-y divide-slate-200 text-slate-800">
              <tr className="hover:bg-slate-50">
                <td className="py-2.5 px-4 font-bold text-indigo-700">void clear()</td>
                <td className="py-2.5 px-4 font-sans text-slate-600">Xóa toàn bộ mapping khỏi map này.</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-2.5 px-4 font-bold text-indigo-700">boolean containsKey(Object key)</td>
                <td className="py-2.5 px-4 font-sans text-slate-600">Trả về true nếu map này chứa mapping cho key chỉ định.</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-2.5 px-4 font-bold text-indigo-700">boolean containsValue(Object value)</td>
                <td className="py-2.5 px-4 font-sans text-slate-600">Trả về true nếu map có 1 hoặc nhiều key ánh xạ đến value chỉ định.</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-2.5 px-4 font-bold text-indigo-700">V get(Object key)</td>
                <td className="py-2.5 px-4 font-sans text-slate-600">Trả về value mà key ánh xạ tới, hoặc null nếu không có.</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-2.5 px-4 font-bold text-indigo-700">V put(K key, V value)</td>
                <td className="py-2.5 px-4 font-sans text-slate-600">Gán (associate) value chỉ định với key chỉ định trong map này.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Interactive Workbench Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-5">
        {/* Left: Interactive Controls & Memory State (7 cols) */}
        <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-4 md:p-5 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200">
            <span className="text-xs font-mono font-bold text-slate-900">
              TRẠNG THÁI BỘ NHỚ HASHMAP (KEY &rarr; VALUE)
            </span>
            <button
              onClick={handleRunTextbookCode}
              className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-mono text-xs font-bold transition flex items-center gap-1.5 shadow-xs"
            >
              <Play className="w-3.5 h-3.5" /> Chạy Lại Ví Dụ Giáo Trình
            </button>
          </div>

          {/* Current Key-Value Pairs Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {Object.keys(mapData).length > 0 ? (
              Object.entries(mapData).map(([k, v]) => (
                <div
                  key={k}
                  className="bg-white p-3 rounded-xl border border-indigo-200/80 shadow-xs flex flex-col items-center justify-center gap-1 font-mono"
                >
                  <span className="text-[10px] text-slate-400">Key (String)</span>
                  <span className="text-sm font-black text-slate-900">"{k}"</span>
                  <span className="text-[10px] text-indigo-600 font-bold bg-indigo-50 px-2 py-0.5 rounded mt-1 border border-indigo-100">
                    &darr; Value: {v}
                  </span>
                </div>
              ))
            ) : (
              <div className="col-span-3 py-6 text-center text-slate-400 text-xs font-mono italic">
                HashMap đang rỗng (0 mappings)
              </div>
            )}
          </div>

          {/* Interactive Input Form */}
          <div className="pt-2 border-t border-slate-200 space-y-2 text-xs font-mono">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <input
                type="text"
                value={inputKey}
                onChange={(e) => setInputKey(e.target.value)}
                placeholder="Key (Tên, ví dụ: Alex)"
                className="bg-white border border-slate-300 rounded-xl px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500"
              />
              <input
                type="number"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Value (Tuổi, ví dụ: 30)"
                className="bg-white border border-slate-300 rounded-xl px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div className="flex items-center gap-1.5 flex-wrap pt-1">
              <button
                onClick={handlePut}
                disabled={!inputKey || !inputVal}
                className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-mono text-xs font-bold transition flex items-center gap-1"
              >
                <Plus className="w-3.5 h-3.5" /> put(key, val)
              </button>
              <button
                onClick={handleGet}
                disabled={!inputKey}
                className="px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-mono text-xs font-bold transition flex items-center gap-1"
              >
                <Search className="w-3.5 h-3.5" /> get(key)
              </button>
              <button
                onClick={handleContainsKey}
                disabled={!inputKey}
                className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-mono text-xs transition"
              >
                containsKey()
              </button>
              <button
                onClick={handleContainsValue}
                disabled={!inputVal}
                className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-mono text-xs transition"
              >
                containsValue()
              </button>
              <button
                onClick={handleClear}
                className="px-3 py-1.5 rounded-xl bg-rose-100 hover:bg-rose-200 text-rose-700 font-mono text-xs transition flex items-center gap-1 ml-auto"
              >
                <Trash2 className="w-3.5 h-3.5" /> clear()
              </button>
            </div>
          </div>
        </div>

        {/* Right: Console Output (5 cols) */}
        <div className="lg:col-span-5 bg-slate-100/90 text-slate-800 rounded-2xl p-4 border-2 border-slate-300 shadow-sm font-mono text-xs flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex items-center justify-between pb-2 border-b border-slate-300 text-slate-600 text-[11px]">
              <span className="text-emerald-800 font-bold flex items-center gap-1.5 uppercase">
                <Terminal className="w-3.5 h-3.5 text-emerald-700" /> CONSOLE OUTPUT
              </span>
              <button
                onClick={() => setConsoleLogs([])}
                className="text-slate-500 hover:text-slate-900 transition text-[10px] font-bold cursor-pointer"
              >
                Clear Log
              </button>
            </div>

            <div className="space-y-1.5 text-[11px] leading-relaxed max-h-[220px] overflow-y-auto pr-1">
              {consoleLogs.map((log, idx) => (
                <div
                  key={idx}
                  className={
                    log.startsWith("==")
                      ? "text-indigo-900 font-bold"
                      : log.startsWith("//")
                      ? "text-slate-500 italic"
                      : "text-emerald-800 font-semibold"
                  }
                >
                  {log}
                </div>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-slate-300 text-[10px] text-slate-600 font-medium">
            Runtime: OpenJDK 21 (HashMap&lt;String, Integer&gt;)
          </div>
        </div>
      </div>

      {/* Sticky Takeaway */}
      <div className="bg-indigo-50/80 border-2 border-indigo-200 rounded-2xl p-4 flex items-start gap-3 text-xs text-indigo-950">
        <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
        <div>
          <strong>⭐ Cần nhớ (Mục 6.2):</strong><br/>
          • <code>put(key, value)</code>: Chèn hoặc cập nhật giá trị tương ứng của Key.<br/>
          • <code>get(key)</code>: Lấy giá trị của Key trong thời gian trung bình $O(1)$ (trả về <code>null</code> nếu không tìm thấy).<br/>
          • <code>containsKey(key)</code> tốn $O(1)$, trong khi <code>containsValue(value)</code> tốn $O(n)$ vì phải duyệt qua toàn bộ các bucket.
        </div>
      </div>
    </div>
  );
}
