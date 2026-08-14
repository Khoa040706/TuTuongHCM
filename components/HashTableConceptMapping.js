"use client";

import React, { useState } from "react";
import {
  Hash,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  HelpCircle,
  CheckCircle2,
  GitMerge,
  BookOpen,
  Split,
  History,
  Lightbulb,
  AlertTriangle
} from "lucide-react";
import { highlightJavaVsCode } from "../utils/javaSyntaxHighlighter";

export default function HashTableConceptMapping() {
  const [showCollision, setShowCollision] = useState(false);

  const naiveCode = `// Thao tác Ngây thơ trên Hash Table:
void insert(Key key, Data data) {
    a[h(key)] = data; // NGUY HIỂM: Nếu có 2 key cùng hash, dữ liệu cũ bị ghi đè!
}

void delete(Key key) {
    a[h(key)] = null;
}

Data find(Key key) {
    return a[h(key)]; // NGUY HIỂM: Không kiểm tra đúng key hay không!
}`;

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl p-5 md:p-7 shadow-sm my-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-5">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-2.5 py-1 rounded-md border border-purple-200">
            Mục 2 — Tổng Quát Hóa &amp; Cơ Chế Ánh Xạ
          </span>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-1">
            Hash Table: Nguồn Gốc "Chop and Mix", Ánh Xạ Khóa &amp; Hiện Tượng Collision
          </h3>
          <p className="text-xs text-slate-500">
            Bản chất của hàm băm $h(k)$, sơ đồ ánh xạ Many-to-One và 2 câu hỏi sống còn của Hashing
          </p>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 font-mono text-xs font-bold self-start sm:self-auto">
          <GitMerge className="w-3.5 h-3.5 text-purple-600" />
          Many-to-One Mapping
        </div>
      </div>

      {/* History & Origin "Chop and Mix" Box */}
      <div className="bg-gradient-to-br from-purple-50/90 via-white to-indigo-50/50 rounded-2xl p-5 border-2 border-purple-200 text-slate-800 shadow-sm mb-6">
        <div className="flex items-center gap-2 mb-3">
          <History className="w-4 h-4 text-purple-600" />
          <h4 className="text-xs font-mono font-bold text-purple-950 uppercase tracking-wide">
            NGUỒN GỐC THUẬT NGỮ "HASH" (CHOP AND MIX — BĂM VÀ TRỘN)
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans leading-relaxed text-slate-700">
          <div className="space-y-2 bg-white/90 p-3.5 rounded-xl border border-purple-200 shadow-2xs">
            <span className="font-bold text-purple-950 block text-sm">🥩 Ý nghĩa Vật lý &amp; Toán học:</span>
            <p>
              • <strong>"Hash"</strong> theo nghĩa vật lý là <em>"chop and mix"</em> (băm nhỏ và trộn lẫn).
            </p>
            <p>
              • Một <strong>Hash function</strong> điển hình (như phép chia lấy dư <code>mod</code>) sẽ <strong>"băm" (chop)</strong> không gian dữ liệu đầu vào (domain) khổng lồ thành nhiều vùng nhỏ, rồi <strong>"trộn" (mix)</strong> rải đều vào dải chỉ số đầu ra (range).
            </p>
          </div>

          <div className="space-y-2 bg-white/90 p-3.5 rounded-xl border border-purple-200 shadow-2xs">
            <span className="font-bold text-purple-950 block text-sm">📜 Dấu ấn Lịch sử:</span>
            <p>
              • <strong>Donald Knuth</strong> ghi nhận <strong>Hans Peter Luhn</strong> (nhà khoa học máy tính tại IBM) có thể là người đầu tiên sử dụng khái niệm này trong một bản ghi nhớ nội bộ vào <strong>tháng 1/1953</strong>.
            </p>
            <p>
              • Sau đó, <strong>Robert Morris</strong> sử dụng thuật ngữ "hash" trong bài báo khảo sát kinh điển trên tạp chí CACM, chính thức đưa "hash" thành thuật ngữ khoa học máy tính chuẩn mực.
            </p>
          </div>
        </div>
      </div>

      {/* Visual Key Mapping Flow */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div>
            <span className="text-xs font-mono font-bold text-slate-900 uppercase block">
              SƠ ĐỒ ÁNH XẠ KHÓA LỚN VỀ SLOT NHỎ QUA HÀM BĂM h(k)
            </span>
            <span className="text-xs text-slate-500 font-sans">
              Ví dụ từ giáo trình: Ánh xạ mã số sinh viên 8 chữ số vào bảng băm $M$ slots
            </span>
          </div>

          <button
            onClick={() => setShowCollision(!showCollision)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition cursor-pointer flex items-center gap-1.5 shadow-xs ${
              showCollision
                ? "bg-rose-600 text-white"
                : "bg-indigo-600 text-white hover:bg-indigo-700"
            }`}
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            {showCollision ? "Ẩn Thử Nghiệm Va Chạm" : "Kích Hoạt Thử Nghiệm Va Chạm (Collision)"}
          </button>
        </div>

        {/* 3 Flow Rows */}
        <div className="space-y-3 font-mono text-xs">
          {/* Row 1 */}
          <div className="p-3 bg-white rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-xs">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800 font-bold">
                Key = 66752378
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-purple-700 font-bold bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                h(66752378) = 17
              </span>
            </div>
            <div className="flex items-center gap-2">
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 hidden sm:block" />
              <span className="px-3 py-1 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-300 font-bold">
                Slot [17] &rarr; (66752378, data₁)
              </span>
            </div>
          </div>

          {/* Row 2 */}
          <div className="p-3 bg-white rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-xs">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800 font-bold">
                Key = 68744483
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-purple-700 font-bold bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                h(68744483) = 974
              </span>
            </div>
            <div className="flex items-center gap-2">
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 hidden sm:block" />
              <span className="px-3 py-1 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-300 font-bold">
                Slot [974] &rarr; (68744483, data₂)
              </span>
            </div>
          </div>

          {/* Row 3 - Collision trigger */}
          {showCollision && (
            <div className="p-3.5 bg-rose-50 rounded-xl border-2 border-rose-400 flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-sm animate-fadeIn text-rose-950">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-1 rounded-lg bg-white text-rose-900 font-bold border border-rose-200">
                  Key Mới = 67774987
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-rose-500" />
                <span className="text-rose-700 font-bold bg-white px-2 py-0.5 rounded border border-rose-300">
                  h(67774987) = 17 ⚠️
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-xl bg-rose-600 text-white font-bold flex items-center gap-1 shadow-xs">
                  <ShieldAlert className="w-3.5 h-3.5" /> Va Chạm (Collision) với Slot [17]!
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Warning Note */}
        <div className="mt-3 text-[11px] font-sans text-slate-600 leading-relaxed pt-2 border-t border-slate-200">
          📌 <strong>Lưu ý cốt tử:</strong> Phải lưu <strong>cả giá trị Key</strong> trong ô nhớ của slot (chứ không chỉ lưu mỗi data) để kiểm tra và phân biệt chính xác khi có nhiều Key cùng băm vào 1 slot!
        </div>
      </div>

      {/* Naive Operations Failure Code */}
      <div className="bg-slate-950 rounded-2xl p-4 border border-slate-800 text-white mb-6">
        <div className="text-xs font-mono text-slate-400 pb-2 border-b border-slate-800 flex items-center justify-between mb-2">
          <span>NaiveHashTable.java — Thao tác ngây thơ và nguy cơ ghi đè</span>
          <span className="text-rose-400 font-bold">Thất bại khi có Collision</span>
        </div>
        <pre className="text-xs font-mono overflow-x-auto">
          <code dangerouslySetInnerHTML={{ __html: highlightJavaVsCode(naiveCode) }} />
        </pre>
      </div>

      {/* 2 Core Questions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
        <div className="p-4 rounded-2xl bg-blue-50 border-2 border-blue-200 space-y-2">
          <div className="flex items-center gap-2 text-blue-900 font-bold text-xs font-mono uppercase">
            <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-black">1</span>
            HOW TO HASH? (LÀM SAO THIẾT KẾ HÀM BĂM TỐT?)
          </div>
          <p className="text-xs text-slate-700 font-sans leading-relaxed">
            Hàm băm phải tính toán cực nhanh $O(1)$ và phân phối các khóa một cách đồng đều nhất (Uniform Distribution) trên toàn bộ dải $0 \dots M-1$ để hạn chế tối đa va chạm.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-purple-50 border-2 border-purple-200 space-y-2">
          <div className="flex items-center gap-2 text-purple-900 font-bold text-xs font-mono uppercase">
            <span className="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center font-black">2</span>
            HOW TO RESOLVE COLLISIONS? (LÀM SAO GIẢI QUYẾT ĐỤNG ĐỘ?)
          </div>
          <p className="text-xs text-slate-700 font-sans leading-relaxed">
            Do tập khóa lớn hơn kích thước bảng ($|U| &gt; M$), va chạm là tất yếu (Many-to-One). Cần các kỹ thuật như <strong>Separate Chaining</strong> hoặc <strong>Open Addressing</strong> để xử lý.
          </p>
        </div>
      </div>

      {/* Sticky Takeaway */}
      <div className="bg-purple-50/80 border-2 border-purple-200 rounded-2xl p-4 flex items-start gap-3 text-xs text-purple-950">
        <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
        <div>
          <strong>⭐ Cần nhớ (Mục 2):</strong><br/>
          • Hash Table dùng <code>a[h(key)]</code> thay vì <code>a[key]</code> để khắc phục 3 hạn chế của Direct Addressing Table.<br/>
          • <strong>Collision (Đụng độ):</strong> 2 key khác nhau có cùng hash value — không thể tránh khỏi hoàn toàn vì hash function là ánh xạ Many-to-One.<br/>
          • <strong>Bắt buộc</strong> phải lưu cả giá trị Key trong slot để phân biệt khi có Collision.
        </div>
      </div>
    </div>
  );
}
