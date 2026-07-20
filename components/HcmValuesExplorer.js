"use client";
import React, { useState, useEffect, useRef } from "react";
import { Award, Lightbulb, Compass, Users, Flag, Shield, Eye, Heart, Check, RotateCcw, HelpCircle } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function HcmValuesExplorer() {
  const containerRef = useRef(null);
  
  // Game state
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedWord, setSelectedWord] = useState(null); // { id, type }
  const [matches, setMatches] = useState([]); // Array of matched IDs
  const [wrongMatch, setWrongMatch] = useState(null); // { wordId, descId }
  const [shuffledWords, setShuffledWords] = useState([]);
  const [shuffledDescs, setShuffledDescs] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  const pillarA = [
    {
      icon: "🕊️",
      title: "Sản phẩm kết hợp giữa dân tộc và thời đại",
      text: "Tư tưởng của Người vừa tiếp thu tinh hoa văn hóa nhân loại, cốt lõi là chủ nghĩa Mác - Lênin, vừa đáp ứng thực tiễn cách mạng Việt Nam và thế giới."
    },
    {
      icon: "💡",
      title: "Tính sáng tạo, không cứng nhắc",
      text: "Luôn bổ sung kết luận mới từ thực tiễn sinh động và mạnh dạn loại bỏ những gì không phù hợp với hoàn cảnh nước ta."
    },
    {
      icon: "🎯",
      title: "Hệ thống quan điểm toàn diện",
      text: "Bao gồm các chiến lược, sách lược về cách mạng dân tộc dân chủ nhân dân, cách mạng xã hội chủ nghĩa, đạo đức, phong cách... giúp bảo đảm thắng lợi cho dân tộc."
    },
    {
      icon: "🤝",
      title: "Nét đặc sắc nhất",
      text: "Tập trung vào việc giải phóng dân tộc và gắn kết khăng khít với giải phóng giai cấp, giải phóng con người."
    }
  ];

  const pillarB = [
    {
      icon: "🚩",
      title: "Sợi chỉ đỏ dẫn đường",
      text: "Trở thành ngọn cờ dẫn dắt cách mạng nước ta đi từ thắng lợi này đến thắng lợi khác suốt hơn nửa thế kỷ."
    },
    {
      icon: "📍",
      title: "Định hướng mục tiêu cao đẹp",
      text: "Soi đường cho Đảng và nhân dân đạt tới mục tiêu \"dân giàu, nước mạnh, dân chủ, công bằng, văn minh\"."
    },
    {
      icon: "🌍",
      title: "Ý nghĩa trong thời đại mới",
      text: "Giúp nhận thức đúng đắn các vấn đề lớn hiện nay như bảo vệ độc lập dân tộc, phát triển xã hội và bảo đảm quyền con người."
    },
    {
      icon: "❤️",
      title: "Sức sống trường tồn",
      text: "Tư tưởng của Người mãi mãi sống cùng nhân dân, thấm sâu và chiếm lĩnh trái tim, khối óc của hàng triệu con người."
    }
  ];

  // Game assets
  const gameCards = [
    { id: 1, word: "Sản phẩm kết hợp dân tộc & thời đại", desc: "Vừa tiếp thu tinh hoa nhân loại (chủ nghĩa Mác - Lênin), vừa đáp ứng thực tiễn cách mạng Việt Nam." },
    { id: 2, word: "Tính sáng tạo, không cứng nhắc", desc: "Bổ sung kết luận mới sinh động và loại bỏ những gì không phù hợp với hoàn cảnh nước ta." },
    { id: 3, word: "Sợi chỉ đỏ dẫn đường", desc: "Trở thành ngọn cờ dẫn dắt cách mạng đi từ thắng lợi này đến thắng lợi khác suốt hơn nửa thế kỷ." },
    { id: 4, word: "Định hướng mục tiêu cao đẹp", desc: "Soi đường cho toàn dân đạt tới mục tiêu dân giàu, nước mạnh, dân chủ, công bằng, văn minh." }
  ];

  // GSAP animation for intro cards
  useGSAP(() => {
    {
      const targets = containerRef.current ? containerRef.current.querySelectorAll(".value-pillar-card") : document.querySelectorAll(".value-pillar-card");
      if (targets && targets.length > 0) {
      gsap.fromTo(targets, 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", stagger: 0.08 }
    );
      }
    }
  }, { scope: containerRef });

  // Shuffle game cards
  const initGame = () => {
    const words = gameCards.map(c => ({ id: c.id, text: c.word }));
    const descs = gameCards.map(c => ({ id: c.id, text: c.desc }));
    
    // Shuffle helper
    const shuffle = (array) => [...array].sort(() => Math.random() - 0.5);

    setShuffledWords(shuffle(words));
    setShuffledDescs(shuffle(descs));
    setMatches([]);
    setSelectedWord(null);
    setWrongMatch(null);
    setGameOver(false);
    setGameStarted(true);
  };

  const handleCardClick = (item, type) => {
    if (wrongMatch !== null) return; // Wait for wrong match timeout to clear

    // If item is already matched, ignore
    if (matches.includes(item.id)) return;

    // If nothing selected yet
    if (!selectedWord) {
      setSelectedWord({ id: item.id, type, text: item.text });
      return;
    }

    // If clicked the same card type, switch selection
    if (selectedWord.type === type) {
      if (selectedWord.id === item.id) {
        setSelectedWord(null); // Deselect
      } else {
        setSelectedWord({ id: item.id, type, text: item.text }); // Change selection
      }
      return;
    }

    // We have a selection of opposite type. Let's compare IDs
    if (selectedWord.id === item.id) {
      // Correct Match!
      const newMatches = [...matches, item.id];
      setMatches(newMatches);
      setSelectedWord(null);
      
      // GSAP celebration on the correct match
      gsap.fromTo(`.game-match-${item.id}`,
        { scale: 1 },
        { scale: 1.05, duration: 0.15, yoyo: true, repeat: 1 }
      );

      if (newMatches.length === gameCards.length) {
        setGameOver(true);
      }
    } else {
      // Wrong Match
      setWrongMatch({
        wordId: selectedWord.type === "word" ? selectedWord.id : item.id,
        descId: selectedWord.type === "desc" ? selectedWord.id : item.id
      });
      setSelectedWord(null);

      // Clear wrong match state after 1 second
      setTimeout(() => {
        setWrongMatch(null);
      }, 1000);
    }
  };

  return (
    <div ref={containerRef} className="w-full bg-[#fdfdfb] border border-stone-200/80 rounded-3xl p-4 md:p-8 shadow-sm space-y-8 select-text">
      {/* Header section */}
      <div className="text-center md:text-left space-y-2 border-b border-stone-150 pb-5">
        <h4 className="text-lg md:text-xl font-bold font-playfair text-[#1c1917] tracking-tight flex items-center justify-center md:justify-start gap-2.5">
          <span className="p-2 rounded-xl bg-amber-500/10 text-amber-600">💎</span>
          Trình Khám Phá Giá Trị Tư Tưởng Hồ Chí Minh
        </h4>
        <p className="text-xs md:text-sm text-stone-500 font-medium max-w-3xl leading-relaxed">
          Tư tưởng Hồ Chí Minh là tài sản tinh thần vô giá của dân tộc và là sợi chỉ đỏ định hình con đường cách mạng tiến lên của dân tộc Việt Nam.
        </p>
      </div>

      {/* Dual Pillars Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Pillar A: Việt Nam */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 border-l-4 border-amber-500 pl-3">
            <span className="text-lg">💎</span>
            <h5 className="font-extrabold text-stone-900 text-sm uppercase tracking-wider">
              a) Tài sản tinh thần vô giá của dân tộc Việt Nam
            </h5>
          </div>
          
          <div className="space-y-3">
            {pillarA.map((card, idx) => (
              <div 
                key={idx}
                className="value-pillar-card bg-white hover:bg-stone-50/50 p-4.5 rounded-2xl border border-stone-200/80 shadow-sm hover:shadow hover:translate-x-1 transition-all duration-300 flex items-start gap-4"
              >
                <span className="text-2xl mt-0.5 flex-shrink-0">{card.icon}</span>
                <div className="space-y-1.5">
                  <h6 className="font-extrabold text-stone-900 text-xs uppercase tracking-wider">{card.title}</h6>
                  <p className="text-xs text-stone-600 leading-relaxed">{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pillar B: Kim Chỉ Nam */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 border-l-4 border-amber-500 pl-3">
            <span className="text-lg">🌐</span>
            <h5 className="font-extrabold text-stone-900 text-sm uppercase tracking-wider">
              b) Nền tảng tư tưởng & kim chỉ nam hành động
            </h5>
          </div>

          <div className="space-y-3">
            {pillarB.map((card, idx) => (
              <div 
                key={idx}
                className="value-pillar-card bg-white hover:bg-stone-50/50 p-4.5 rounded-2xl border border-stone-200/80 shadow-sm hover:shadow hover:translate-x-1 transition-all duration-300 flex items-start gap-4"
              >
                <span className="text-2xl mt-0.5 flex-shrink-0">{card.icon}</span>
                <div className="space-y-1.5">
                  <h6 className="font-extrabold text-stone-900 text-xs uppercase tracking-wider">{card.title}</h6>
                  <p className="text-xs text-stone-600 leading-relaxed">{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* INTERACTIVE MEMORY MATCHING GAME */}
      <div className="border-t border-stone-200/80 pt-6 mt-6 bg-[#faf9f6] -mx-4 md:-mx-8 px-4 md:px-8 pb-4 md:rounded-b-3xl">
        {!gameStarted ? (
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-3">
            <div className="space-y-1 text-center md:text-left">
              <div className="text-sm font-bold text-stone-900 flex items-center justify-center md:justify-start gap-2">
                <HelpCircle size={16} className="text-amber-600" />
                <span>Trò Chơi Ghép Cặp Khắc Sâu Bài Học</span>
              </div>
              <p className="text-xs text-stone-500 font-medium">
                Hãy ghép từ khóa giá trị lý luận ở bên trái với định nghĩa nội dung tương ứng ở bên phải!
              </p>
            </div>
            <button
              onClick={initGame}
              className="px-5 py-2.5 rounded-xl bg-accent text-white font-bold text-xs uppercase tracking-wider hover:bg-accent/90 shadow-md hover:shadow-accent/10 cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Chơi ghép cặp 🧩
            </button>
          </div>
        ) : (
          <div className="space-y-5">
            {/* Game header */}
            <div className="flex justify-between items-center text-xs text-stone-400 font-bold border-b border-stone-200 pb-2">
              <span>TRÒ CHƠI GHÉP CẶP TƯ TƯỞNG</span>
              <span className="text-amber-600">ĐÃ GHÉP KHỚP: {matches.length} / {gameCards.length}</span>
            </div>

            {!gameOver ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                {/* Words Column */}
                <div className="space-y-2">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-stone-400 mb-1">
                    Cột từ khóa (Keywords)
                  </div>
                  {shuffledWords.map((item) => {
                    const isMatched = matches.includes(item.id);
                    const isSelected = selectedWord && selectedWord.id === item.id && selectedWord.type === "word";
                    const isWrong = wrongMatch && wrongMatch.wordId === item.id;

                    let btnClass = "bg-white border-stone-200 text-stone-700 hover:bg-stone-50";
                    if (isMatched) {
                      btnClass = "bg-green-500/10 border-green-500 text-green-700 font-bold opacity-60";
                    } else if (isSelected) {
                      btnClass = "bg-amber-500/10 border-amber-600 text-amber-700 font-bold scale-[1.01]";
                    } else if (isWrong) {
                      btnClass = "bg-red-500/15 border-red-500 text-red-700 animate-shake";
                    }

                    return (
                      <button
                        key={item.id}
                        onClick={() => handleCardClick(item, "word")}
                        className={`game-match-${item.id} w-full p-3.5 rounded-xl border text-left text-xs transition-all duration-200 flex items-center justify-between cursor-pointer ${btnClass}`}
                      >
                        <span>{item.text}</span>
                        {isMatched && <Check size={14} className="text-green-600" />}
                      </button>
                    );
                  })}
                </div>

                {/* Descriptions Column */}
                <div className="space-y-2">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-stone-400 mb-1">
                    Cột nội dung (Descriptions)
                  </div>
                  {shuffledDescs.map((item) => {
                    const isMatched = matches.includes(item.id);
                    const isSelected = selectedWord && selectedWord.id === item.id && selectedWord.type === "desc";
                    const isWrong = wrongMatch && wrongMatch.descId === item.id;

                    let btnClass = "bg-white border-stone-200 text-stone-700 hover:bg-stone-50";
                    if (isMatched) {
                      btnClass = "bg-green-500/10 border-green-500 text-green-700 font-bold opacity-60";
                    } else if (isSelected) {
                      btnClass = "bg-amber-500/10 border-amber-600 text-amber-700 font-bold scale-[1.01]";
                    } else if (isWrong) {
                      btnClass = "bg-red-500/15 border-red-500 text-red-700 animate-shake";
                    }

                    return (
                      <button
                        key={item.id}
                        onClick={() => handleCardClick(item, "desc")}
                        className={`game-match-${item.id} w-full p-3.5 rounded-xl border text-left text-xs transition-all duration-200 flex items-center justify-between cursor-pointer ${btnClass}`}
                      >
                        <span className="leading-relaxed">{item.text}</span>
                        {isMatched && <Check size={14} className="text-green-600" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="text-center py-6 space-y-4 animate-in zoom-in-95 duration-300">
                <span className="text-4xl">🎉</span>
                <div className="space-y-1">
                  <h5 className="font-bold text-stone-900 text-sm">Tuyệt vời! Bạn đã ghép chính xác toàn bộ cặp từ khóa.</h5>
                  <p className="text-xs text-stone-500 font-medium">
                    Hãy ôn lại các giá trị này để chuẩn bị thật tốt cho bài kiểm tra sắp tới nhé!
                  </p>
                </div>
                
                <div className="flex justify-center gap-3 pt-2">
                  <button
                    onClick={initGame}
                    className="flex items-center gap-1.5 px-4 py-2 border border-stone-300 rounded-xl text-stone-600 text-xs font-bold hover:bg-stone-50 cursor-pointer"
                  >
                    <RotateCcw size={12} />
                    <span>Chơi lại</span>
                  </button>
                  <button
                    onClick={() => setGameStarted(false)}
                    className="px-4 py-2 bg-stone-850 hover:bg-stone-900 text-white text-xs font-bold rounded-xl shadow-sm cursor-pointer"
                  >
                    Đóng trò chơi
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
