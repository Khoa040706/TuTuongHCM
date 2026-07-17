"use client";
import React, { useState } from "react";

export default function UmlSymbolMatcher() {
  const [selectedSymbol, setSelectedSymbol] = useState(null);
  const [selectedMeaning, setSelectedMeaning] = useState(null);
  const [matchedPairs, setMatchedPairs] = useState([]); // Array of IDs of matched symbols
  const [wrongSymbols, setWrongSymbols] = useState([]);
  const [wrongMeanings, setWrongMeanings] = useState([]);

  const symbols = [
    { id: "sym_plus", text: "+", label: "Ký hiệu cộng" },
    { id: "sym_minus", text: "-", label: "Ký hiệu trừ" },
    { id: "sym_hash", text: "#", label: "Ký hiệu thăng" },
    { id: "sym_underline", text: "underline / gạch chân", label: "Ký hiệu gạch dưới" }
  ];

  const meanings = [
    { id: "mean_public", text: "public (Quyền truy cập rộng rãi toàn cục)", matches: "sym_plus" },
    { id: "mean_private", text: "private (Bảo mật tối đa, chỉ nội bộ lớp)", matches: "sym_minus" },
    { id: "mean_protected", text: "protected (Chỉ nội bộ lớp và các lớp con)", matches: "sym_hash" },
    { id: "mean_static", text: "static (Thuộc tính/phương thức lớp tĩnh)", matches: "sym_underline" }
  ];

  const handleSymbolClick = (symId) => {
    if (matchedPairs.includes(symId)) return;
    setWrongSymbols([]);
    setWrongMeanings([]);
    
    if (selectedMeaning) {
      // Check match
      const matchingMean = meanings.find((m) => m.id === selectedMeaning);
      if (matchingMean.matches === symId) {
        setMatchedPairs((prev) => [...prev, symId]);
        setSelectedSymbol(null);
        setSelectedMeaning(null);
      } else {
        // Shake animation/wrong indication
        setWrongSymbols([symId]);
        setWrongMeanings([selectedMeaning]);
        setSelectedSymbol(symId);
      }
    } else {
      setSelectedSymbol(symId);
    }
  };

  const handleMeaningClick = (meanId) => {
    const mean = meanings.find((m) => m.id === meanId);
    if (matchedPairs.includes(mean.matches)) return;
    setWrongSymbols([]);
    setWrongMeanings([]);

    if (selectedSymbol) {
      // Check match
      if (mean.matches === selectedSymbol) {
        setMatchedPairs((prev) => [...prev, selectedSymbol]);
        setSelectedSymbol(null);
        setSelectedMeaning(null);
      } else {
        setWrongSymbols([selectedSymbol]);
        setWrongMeanings([meanId]);
        setSelectedMeaning(meanId);
      }
    } else {
      setSelectedMeaning(meanId);
    }
  };

  const isMatched = (symId) => matchedPairs.includes(symId);
  const isMeaningMatched = (mean) => matchedPairs.includes(mean.matches);

  const getSymbolClass = (sym) => {
    if (isMatched(sym.id)) {
      return "border-emerald-500 bg-emerald-50 text-emerald-900 opacity-90 shadow-xs";
    }
    if (wrongSymbols.includes(sym.id)) {
      return "border-rose-500 bg-rose-50 text-rose-900 animate-shake";
    }
    if (selectedSymbol === sym.id) {
      return "border-amber-500 bg-amber-50 text-amber-950 font-extrabold ring-2 ring-amber-300/40";
    }
    return "border-stone-250 bg-stone-50 hover:border-stone-400 hover:bg-stone-100 text-stone-900 cursor-pointer shadow-xs";
  };

  const getMeaningClass = (mean) => {
    if (isMeaningMatched(mean)) {
      return "border-emerald-500 bg-emerald-50 text-emerald-900 opacity-90 shadow-xs";
    }
    if (wrongMeanings.includes(mean.id)) {
      return "border-rose-500 bg-rose-50 text-rose-900 animate-shake";
    }
    if (selectedMeaning === mean.id) {
      return "border-amber-500 bg-amber-50 text-amber-950 font-extrabold ring-2 ring-amber-300/40";
    }
    return "border-stone-250 bg-white hover:border-stone-400 hover:bg-stone-100 text-stone-850 cursor-pointer shadow-xs";
  };

  const allCompleted = matchedPairs.length === symbols.length;

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-3xl p-4 md:p-6 my-6 shadow-sm font-sans text-stone-850">
      
      {/* Header */}
      <div className="border-b border-stone-200 pb-3 mb-5">
        <h4 className="text-base font-extrabold text-stone-900">
          🎮 Thử Thách Ghép Đôi Ký Hiệu UML (Symbol Matching)
        </h4>
        <p className="text-xs text-stone-500 mt-1">
          Bấm chọn ký hiệu UML ở cột trái, sau đó chọn ý nghĩa Java tương ứng ở cột phải để nối ghép cặp đúng.
        </p>
      </div>

      {/* Matching Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        
        {/* Left Column: Symbols */}
        <div className="space-y-3">
          <div className="text-[10px] text-stone-400 uppercase font-black tracking-wider block mb-1">Ký hiệu UML</div>
          {symbols.map((sym) => (
            <button
              key={sym.id}
              onClick={() => handleSymbolClick(sym.id)}
              className={`w-full p-4 border rounded-2xl text-center text-xs font-mono font-black transition-all flex justify-between items-center ${getSymbolClass(sym)}`}
            >
              <span className={`text-base font-extrabold ${isMatched(sym.id) ? "text-emerald-700" : wrongSymbols.includes(sym.id) ? "text-rose-700" : selectedSymbol === sym.id ? "text-amber-700" : "text-stone-800"}`}>
                {sym.text === "underline / gạch chân" ? <u>U</u> : sym.text}
              </span>
              <span className={`text-[10px] font-sans font-bold ${isMatched(sym.id) ? "text-emerald-600/80" : "text-stone-500"}`}>{sym.label}</span>
            </button>
          ))}
        </div>

        {/* Right Column: Meanings */}
        <div className="space-y-3">
          <div className="text-[10px] text-stone-400 uppercase font-black tracking-wider block mb-1 font-sans">Từ khóa Java tương ứng</div>
          {meanings.map((mean) => (
            <button
              key={mean.id}
              onClick={() => handleMeaningClick(mean.id)}
              className={`w-full p-4 border rounded-2xl text-left text-xs font-bold transition-all ${getMeaningClass(mean)}`}
            >
              {mean.text}
            </button>
          ))}
        </div>

      </div>

      {/* Completion Banner */}
      {allCompleted && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-center mt-6 font-sans animate-fade-in">
          <span className="text-2xl mb-1 block">🎉</span>
          <div className="text-xs font-extrabold text-emerald-900">Tuyệt vời! Bạn đã ghép đúng 100% các ký hiệu UML</div>
          <p className="text-[10px] text-emerald-800 mt-1 leading-relaxed">
            Nắm vững các quy ước ký hiệu <code>+ (public)</code>, <code>- (private)</code>, <code># (protected)</code> và <code>gạch chân (static)</code> sẽ giúp bạn dễ dàng đọc hiểu bất kỳ sơ đồ thiết kế lớp UML nào.
          </p>
        </div>
      )}

    </div>
  );
}
