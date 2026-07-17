"use client";
import React, { useState } from "react";
import { Check, X, ShieldAlert, Award, Star, RefreshCw, Zap, Table } from "lucide-react";

export default function StringSummaryDashboard() {
  const [activeSubTab, setActiveSubTab] = useState("dashboard"); // "dashboard" | "game"

  // Game States
  const initialCards = [
    { id: "c1", text: "Bất biến (Immutable)", target: "string" },
    { id: "c2", text: "Buffer = Bảo mật (Synchronized, Thread-safe)", target: "buffer" },
    { id: "c3", text: "Builder = Bứt tốc (Nhanh nhất, không khóa)", target: "builder" },
    { id: "c4", text: "Tách chuỗi thành tokens (Tokenizer)", target: "tokenizer" },
    { id: "c5", text: "Tái sử dụng bằng Constant Pool trong Heap", target: "string" }
  ];

  const [cards, setCards] = useState(initialCards);
  const [selectedCardId, setSelectedCardId] = useState(null);
  
  // Placed assignments
  const [buckets, setBuckets] = useState({
    string: [],
    buffer: [],
    builder: [],
    tokenizer: []
  });

  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  // Click handler for mobile & desktop fallback
  const selectCard = (cardId) => {
    setSelectedCardId(selectedCardId === cardId ? null : cardId);
  };

  const placeInBucket = (bucketKey) => {
    if (!selectedCardId) return;
    
    const card = cards.find((c) => c.id === selectedCardId);
    if (!card) return;

    // Add to bucket, remove from remaining cards
    setBuckets((prev) => ({
      ...prev,
      [bucketKey]: [...prev[bucketKey], card]
    }));
    setCards((prev) => prev.filter((c) => c.id !== selectedCardId));
    setSelectedCardId(null);
  };

  // Drag and Drop handlers
  const handleDragStart = (e, cardId) => {
    e.dataTransfer.setData("text/plain", cardId);
    setSelectedCardId(cardId);
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Required to allow drop
  };

  const handleDrop = (e, bucketKey) => {
    e.preventDefault();
    const cardId = e.dataTransfer.getData("text/plain") || selectedCardId;
    if (!cardId) return;

    const card = cards.find((c) => c.id === cardId);
    if (!card) return;

    setBuckets((prev) => ({
      ...prev,
      [bucketKey]: [...prev[bucketKey], card]
    }));
    setCards((prev) => prev.filter((c) => c.id !== cardId));
    setSelectedCardId(null);
  };

  const checkAnswers = () => {
    let correctCount = 0;
    
    // Check String bucket
    buckets.string.forEach((c) => {
      if (c.target === "string") correctCount++;
    });
    // Check StringBuffer
    buckets.buffer.forEach((c) => {
      if (c.target === "buffer") correctCount++;
    });
    // Check StringBuilder
    buckets.builder.forEach((c) => {
      if (c.target === "builder") correctCount++;
    });
    // Check Tokenizer
    buckets.tokenizer.forEach((c) => {
      if (c.target === "tokenizer") correctCount++;
    });

    setScore(correctCount);
    setShowResult(true);
  };

  const resetGame = () => {
    setCards(initialCards);
    setBuckets({
      string: [],
      buffer: [],
      builder: [],
      tokenizer: []
    });
    setSelectedCardId(null);
    setScore(0);
    setShowResult(false);
  };

  const hasPlacedAnyCard = Object.values(buckets).some(arr => arr.length > 0);

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-3xl p-5 md:p-6 text-stone-850 select-none shadow-sm relative z-10 my-4">
      
      {/* Subtab navigation */}
      <div className="flex bg-stone-200 p-1 rounded-xl w-fit mb-5">
        <button
          onClick={() => setActiveSubTab("dashboard")}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all border-none cursor-pointer flex items-center gap-1.5 ${
            activeSubTab === "dashboard" ? "bg-stone-900 text-white shadow-sm" : "text-stone-600 hover:text-stone-950"
          }`}
        >
          <Table className="w-3.5 h-3.5" />
          <span>Bảng tổng kết toàn chương</span>
        </button>
        <button
          onClick={() => { setActiveSubTab("game"); resetGame(); }}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all border-none cursor-pointer flex items-center gap-1.5 ${
            activeSubTab === "game" ? "bg-stone-900 text-white shadow-sm" : "text-stone-600 hover:text-stone-950"
          }`}
        >
          <Award className="w-3.5 h-3.5" />
          <span>Trò chơi: Ghép nối kiến thức</span>
        </button>
      </div>

      {/* TAB 1: Dashboard comparison */}
      {activeSubTab === "dashboard" && (
        <div className="space-y-4">
          <div className="border border-stone-200 rounded-2xl overflow-hidden bg-white shadow-sm">
            <div className="grid grid-cols-12 bg-stone-100/90 border-b border-stone-250 py-2.5 px-4 text-[9px] font-black text-stone-500 uppercase tracking-wider">
              <div className="col-span-3">Tiêu chí</div>
              <div className="col-span-2 text-center">String</div>
              <div className="col-span-2 text-center">StringBuffer</div>
              <div className="col-span-2 text-center">StringBuilder</div>
              <div className="col-span-3 text-center">StringTokenizer</div>
            </div>

            <div className="divide-y divide-stone-200 text-xs">
              {/* Mutability */}
              <div className="grid grid-cols-12 py-3 px-4 items-center">
                <div className="col-span-3 font-bold text-stone-800">Khả biến (Mutable)?</div>
                <div className="col-span-2 text-center text-rose-500 font-bold">❌ Bất biến</div>
                <div className="col-span-2 text-center text-emerald-600 font-bold">✅ Khả biến</div>
                <div className="col-span-2 text-center text-emerald-600 font-bold">✅ Khả biến</div>
                <div className="col-span-3 text-center text-stone-500">n/a</div>
              </div>

              {/* Thread safety */}
              <div className="grid grid-cols-12 py-3 px-4 items-center">
                <div className="col-span-3 font-bold text-stone-800">Thread-safe?</div>
                <div className="col-span-2 text-center text-emerald-600 font-bold">✅ Có (Bất biến)</div>
                <div className="col-span-2 text-center text-emerald-600 font-bold">✅ Có (synchronized)</div>
                <div className="col-span-2 text-center text-rose-500 font-bold">❌ Không</div>
                <div className="col-span-3 text-center text-rose-500 font-bold">❌ Không</div>
              </div>

              {/* Performance */}
              <div className="grid grid-cols-12 py-3 px-4 items-center">
                <div className="col-span-3 font-bold text-stone-800">Hiệu năng / Tốc độ</div>
                <div className="col-span-2 text-center text-rose-500">Chậm khi nối chuỗi</div>
                <div className="col-span-2 text-center text-amber-500">Trung bình</div>
                <div className="col-span-2 text-center text-emerald-600 font-bold">Nhanh nhất</div>
                <div className="col-span-3 text-center text-emerald-600 font-bold">Nhanh (Duyệt con trỏ)</div>
              </div>

              {/* Introduction */}
              <div className="grid grid-cols-12 py-3 px-4 items-center">
                <div className="col-span-3 font-bold text-stone-800">Phiên bản ra mắt</div>
                <div className="col-span-2 text-center text-stone-550">Từ đầu (JDK 1.0)</div>
                <div className="col-span-2 text-center text-stone-550">Từ đầu (JDK 1.0)</div>
                <div className="col-span-2 text-center text-stone-550">Từ Java 5 (JDK 1.5)</div>
                <div className="col-span-3 text-center text-stone-550">Từ đầu (JDK 1.0)</div>
              </div>

              {/* Main usage */}
              <div className="grid grid-cols-12 py-3 px-4 items-center">
                <div className="col-span-3 font-bold text-stone-800">Công dụng chính</div>
                <div className="col-span-2 text-center text-stone-600 leading-normal text-[10px]">Khai báo chuỗi cố định, chia sẻ dữ liệu</div>
                <div className="col-span-2 text-center text-stone-600 leading-normal text-[10px]">Sửa đổi chuỗi trong môi trường đa luồng</div>
                <div className="col-span-2 text-center text-stone-600 leading-normal text-[10px]">Sửa đổi chuỗi trong đơn luồng (Tối ưu)</div>
                <div className="col-span-3 text-center text-stone-600 leading-normal text-[10px]">Phân tách chuỗi thành các token nhỏ lẻ</div>
              </div>
            </div>
          </div>

          <div className="bg-stone-900 border border-stone-850 p-4 rounded-2xl text-white">
            <span className="text-[9px] font-black text-stone-500 uppercase tracking-wider block mb-2">📌 Phân nhóm tư duy cốt lõi:</span>
            <p className="text-xs font-semibold leading-relaxed text-stone-200">
              Nhóm **Tạo & Sửa chuỗi** bao gồm <code>String</code>, <code>StringBuffer</code>, và <code>StringBuilder</code>. Còn **<code>StringTokenizer</code>** là công cụ bổ trợ độc lập dùng để **tách nhỏ chuỗi ký tự thành các thẻ (tokens)**, hoạt động khác biệt hoàn toàn về cơ chế và mục đích sử dụng.
            </p>
          </div>
        </div>
      )}

      {/* TAB 2: Game */}
      {activeSubTab === "game" && (
        <div className="space-y-5">
          <div className="bg-amber-500/5 border border-amber-500/25 p-4 rounded-2xl text-xs space-y-1">
            <div className="font-bold text-stone-900 flex items-center gap-1.5">
              <Star className="w-4 h-4 text-amber-500 animate-spin" />
              <span>Hướng dẫn chơi:</span>
            </div>
            <p className="text-[10px] text-stone-500 leading-relaxed">
              Hãy phân chia 5 thẻ kiến thức bên dưới vào đúng các ô JVM tương ứng. <br />
              <strong>Cách chơi:</strong> Nhấp chọn thẻ bài rồi nhấp vào cột JVM mong muốn để đặt bài (hoặc kéo thả thẻ bài trực tiếp trên máy tính).
            </p>
          </div>

          {/* Cards to place */}
          <div className="flex flex-wrap gap-2.5 min-h-[60px] p-4 bg-stone-100 rounded-2xl border border-stone-200 border-dashed">
            {cards.map((c) => (
              <div
                key={c.id}
                draggable="true"
                onDragStart={(e) => handleDragStart(e, c.id)}
                onClick={() => selectCard(c.id)}
                className={`px-3 py-2 rounded-xl text-xs font-bold font-serif border cursor-grab active:cursor-grabbing transition-all select-none ${
                  selectedCardId === c.id
                    ? "bg-accent border-accent text-white shadow-md transform -translate-y-1"
                    : "bg-white border-stone-250 text-stone-800 hover:border-stone-400"
                }`}
              >
                {c.text}
              </div>
            ))}
            {cards.length === 0 && (
              <span className="text-xs text-stone-400 italic font-semibold flex items-center justify-center w-full">Đã phân phối hết thẻ! Bấm "Kiểm tra kết quả" bên dưới.</span>
            )}
          </div>

          {/* Buckets Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            
            {/* String Bucket */}
            <div
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, "string")}
              onClick={() => placeInBucket("string")}
              className={`p-3.5 rounded-2xl border min-h-[120px] transition-all flex flex-col justify-between cursor-pointer ${
                selectedCardId ? "bg-amber-500/5 border-amber-500/25" : "bg-white border-stone-200 hover:border-stone-300"
              }`}
            >
              <div>
                <span className="text-[9px] font-black text-stone-400 uppercase tracking-widest block mb-2 border-b pb-1">String</span>
                <div className="space-y-1.5">
                  {buckets.string.map((c) => (
                    <div 
                      key={c.id} 
                      className={`p-1.5 rounded-lg text-[9px] font-semibold border ${
                        showResult 
                          ? c.target === "string" 
                            ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-600" 
                            : "bg-rose-500/10 border-rose-500/30 text-rose-600"
                          : "bg-stone-100 border-stone-200 text-stone-700"
                      }`}
                    >
                      {c.text}
                    </div>
                  ))}
                </div>
              </div>
              <span className="text-[8px] text-stone-450 block text-right mt-2 font-mono">// Click để đặt thẻ</span>
            </div>

            {/* StringBuffer Bucket */}
            <div
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, "buffer")}
              onClick={() => placeInBucket("buffer")}
              className={`p-3.5 rounded-2xl border min-h-[120px] transition-all flex flex-col justify-between cursor-pointer ${
                selectedCardId ? "bg-amber-500/5 border-amber-500/25" : "bg-white border-stone-200 hover:border-stone-300"
              }`}
            >
              <div>
                <span className="text-[9px] font-black text-stone-400 uppercase tracking-widest block mb-2 border-b pb-1">StringBuffer</span>
                <div className="space-y-1.5">
                  {buckets.buffer.map((c) => (
                    <div 
                      key={c.id} 
                      className={`p-1.5 rounded-lg text-[9px] font-semibold border ${
                        showResult 
                          ? c.target === "buffer" 
                            ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-600" 
                            : "bg-rose-500/10 border-rose-500/30 text-rose-600"
                          : "bg-stone-100 border-stone-200 text-stone-700"
                      }`}
                    >
                      {c.text}
                    </div>
                  ))}
                </div>
              </div>
              <span className="text-[8px] text-stone-450 block text-right mt-2 font-mono">// Click để đặt thẻ</span>
            </div>

            {/* StringBuilder Bucket */}
            <div
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, "builder")}
              onClick={() => placeInBucket("builder")}
              className={`p-3.5 rounded-2xl border min-h-[120px] transition-all flex flex-col justify-between cursor-pointer ${
                selectedCardId ? "bg-amber-500/5 border-amber-500/25" : "bg-white border-stone-200 hover:border-stone-300"
              }`}
            >
              <div>
                <span className="text-[9px] font-black text-stone-400 uppercase tracking-widest block mb-2 border-b pb-1">StringBuilder</span>
                <div className="space-y-1.5">
                  {buckets.builder.map((c) => (
                    <div 
                      key={c.id} 
                      className={`p-1.5 rounded-lg text-[9px] font-semibold border ${
                        showResult 
                          ? c.target === "builder" 
                            ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-600" 
                            : "bg-rose-500/10 border-rose-500/30 text-rose-600"
                          : "bg-stone-100 border-stone-200 text-stone-700"
                      }`}
                    >
                      {c.text}
                    </div>
                  ))}
                </div>
              </div>
              <span className="text-[8px] text-stone-450 block text-right mt-2 font-mono">// Click để đặt thẻ</span>
            </div>

            {/* StringTokenizer Bucket */}
            <div
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, "tokenizer")}
              onClick={() => placeInBucket("tokenizer")}
              className={`p-3.5 rounded-2xl border min-h-[120px] transition-all flex flex-col justify-between cursor-pointer ${
                selectedCardId ? "bg-amber-500/5 border-amber-500/25" : "bg-white border-stone-200 hover:border-stone-300"
              }`}
            >
              <div>
                <span className="text-[9px] font-black text-stone-400 uppercase tracking-widest block mb-2 border-b pb-1">StringTokenizer</span>
                <div className="space-y-1.5">
                  {buckets.tokenizer.map((c) => (
                    <div 
                      key={c.id} 
                      className={`p-1.5 rounded-lg text-[9px] font-semibold border ${
                        showResult 
                          ? c.target === "tokenizer" 
                            ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-600" 
                            : "bg-rose-500/10 border-rose-500/30 text-rose-600"
                          : "bg-stone-100 border-stone-200 text-stone-700"
                      }`}
                    >
                      {c.text}
                    </div>
                  ))}
                </div>
              </div>
              <span className="text-[8px] text-stone-450 block text-right mt-2 font-mono">// Click để đặt thẻ</span>
            </div>

          </div>

          {/* Action buttons */}
          <div className="flex gap-2">
            <button
              onClick={checkAnswers}
              disabled={!hasPlacedAnyCard || showResult}
              className={`flex-1 px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 border-none cursor-pointer shadow transition-all ${
                !hasPlacedAnyCard || showResult
                  ? "bg-stone-350 text-stone-500 cursor-not-allowed"
                  : "bg-accent text-white hover:bg-accent/90"
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>Kiểm tra kết quả</span>
            </button>
            <button
              onClick={resetGame}
              className="px-3.5 py-2.5 rounded-xl bg-stone-200 hover:bg-stone-300 text-stone-700 font-bold border-none cursor-pointer transition-all flex items-center gap-1.5 text-xs"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Làm mới</span>
            </button>
          </div>

          {/* Game evaluation banner */}
          {showResult && (
            <div className={`p-4 rounded-2xl border flex items-start gap-3 animate-in ${
              score === 5 
                ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-800" 
                : "bg-rose-500/10 border-rose-500/30 text-rose-800"
            }`}>
              {score === 5 ? (
                <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              ) : (
                <ShieldAlert className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
              )}
              <div className="text-xs space-y-1">
                <span className="font-black block">
                  {score === 5 ? "🏆 Hoàn hảo! Kết quả: 5/5" : `⚠️ Kết quả: ${score}/5`}
                </span>
                <p className="leading-relaxed font-medium">
                  {score === 5 
                    ? "Xuất sắc! Bạn đã ghi nhớ toàn bộ kiến thức cốt lõi về String, StringBuffer, StringBuilder và StringTokenizer trong bài 3." 
                    : "Có một số thẻ đặt sai vị trí. Hãy xem lại các ô có màu đỏ và nhấn 'Làm mới' để chơi lại nhé."}
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
