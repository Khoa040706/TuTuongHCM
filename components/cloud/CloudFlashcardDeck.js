"use client";
import React, { useState, useEffect, useCallback } from "react";
import { flashcardApi } from "../../lib/client/api";
import { Sparkles, RotateCw, Check, AlertCircle, ArrowLeft, ArrowRight, X, Loader2 } from "lucide-react";

export default function CloudFlashcardDeck({ isOpen, onClose, subjectId = "cloud-computing" }) {
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState(null);

  // Load due flashcards
  const loadCards = useCallback(async () => {
    try {
      setLoading(true);
      const res = await flashcardApi.getDueCards(subjectId, 20);
      if (res.ok && res.data?.cards) {
        setCards(res.data.cards);
        setCurrentIndex(0);
        setIsFlipped(false);
      }
    } catch (err) {
      console.warn("Failed to load flashcards:", err);
    } finally {
      setLoading(false);
    }
  }, [subjectId]);

  useEffect(() => {
    if (isOpen) {
      loadCards();
    }
  }, [isOpen, loadCards]);

  // Handle rating submission
  const handleRating = async (rating) => {
    const currentCard = cards[currentIndex];
    if (!currentCard || isSubmitting) return;

    try {
      setIsSubmitting(true);
      const res = await flashcardApi.submitReview(currentCard.cardId, {
        subjectId,
        rating
      });

      if (res.ok && res.data) {
        setFeedback(`Đã lưu! Lần ôn tiếp theo sau ${res.data.intervalDays} ngày.`);
        setTimeout(() => {
          setFeedback(null);
          setIsFlipped(false);
          if (currentIndex < cards.length - 1) {
            setCurrentIndex((prev) => prev + 1);
          } else {
            // Done with deck
            loadCards();
          }
        }, 600);
      }
    } catch (err) {
      console.warn("Error submitting rating:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Keyboard shortcut listener
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.code === "Space") {
        e.preventDefault();
        setIsFlipped((prev) => !prev);
      } else if (isFlipped) {
        if (e.key === "1") handleRating("again");
        if (e.key === "2") handleRating("hard");
        if (e.key === "3") handleRating("good");
        if (e.key === "4") handleRating("easy");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, isFlipped, cards, currentIndex]);

  if (!isOpen) return null;

  const currentCard = cards[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs font-sans animate-fade-in">
      <div className="w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-stone-100 flex items-center justify-between bg-stone-50/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base text-stone-850">Bàn học Flashcard SM-2</h3>
              <p className="text-xs text-stone-500">
                Ôn lặp lại ngắt quãng thuật ngữ chuyên ngành Cloud Computing
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-stone-200/60 flex items-center justify-center text-stone-400 hover:text-stone-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 flex flex-col items-center justify-center min-h-[380px]">
          {loading ? (
            <div className="flex flex-col items-center gap-3 py-12">
              <Loader2 className="w-8 h-8 text-accent animate-spin" />
              <span className="text-xs text-stone-400 font-semibold tracking-wider uppercase">Đang nạp thẻ đến hạn...</span>
            </div>
          ) : cards.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8" />
              </div>
              <h4 className="font-extrabold text-lg text-stone-850">Đã hoàn thành toàn bộ thẻ!</h4>
              <p className="text-xs text-stone-500 mt-2 max-w-xs mx-auto">
                Hiện tại không còn thẻ nào đến hạn ôn tập. Hãy quay lại vào ngày mai nhé!
              </p>
            </div>
          ) : (
            <div className="w-full flex flex-col items-center">
              {/* Progress counter */}
              <div className="flex items-center justify-between w-full text-xs font-bold text-stone-400 mb-4 px-2">
                <span>THẺ {currentIndex + 1} / {cards.length}</span>
                <span className="text-accent">{currentCard?.chapterId}</span>
              </div>

              {/* 3D Flip Card Container */}
              <div
                onClick={() => setIsFlipped(!isFlipped)}
                className="w-full min-h-[220px] p-8 rounded-3xl bg-linear-to-br from-stone-50 to-stone-100 border border-stone-200/80 shadow-md cursor-pointer select-none transition-all duration-300 hover:shadow-lg flex flex-col justify-between text-center relative group"
              >
                <div className="flex justify-between items-center text-xs text-stone-400 font-bold uppercase tracking-wider">
                  <span>{isFlipped ? "Định nghĩa / Mặt sau" : "Khái niệm / Mặt trước"}</span>
                  <RotateCw className="w-4 h-4 text-stone-400 group-hover:rotate-180 transition-transform duration-500" />
                </div>

                <div className="my-auto py-4">
                  {isFlipped ? (
                    <div className="space-y-3">
                      <h4 className="text-base sm:text-lg font-bold text-stone-850 leading-relaxed">
                        {currentCard.back}
                      </h4>
                      <div className="flex items-center justify-center gap-2 pt-2">
                        <span className="text-xs px-2.5 py-1 rounded-full bg-stone-200 text-stone-700 font-semibold">
                          EN: {currentCard.en}
                        </span>
                        {currentCard.abbreviation && (
                          <span className="text-xs px-2.5 py-1 rounded-full bg-accent/10 text-accent font-bold">
                            {currentCard.abbreviation}
                          </span>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <h3 className="text-lg sm:text-xl font-extrabold text-stone-850">
                        {currentCard.front}
                      </h3>
                      <p className="text-xs text-stone-400 font-medium">Bấm vào thẻ hoặc phím Space để xem lời giải</p>
                    </div>
                  )}
                </div>

                {feedback && (
                  <div className="absolute inset-0 bg-stone-900/90 text-white rounded-3xl flex items-center justify-center font-bold text-sm animate-fade-in">
                    {feedback}
                  </div>
                )}
              </div>

              {/* Rating Buttons */}
              {isFlipped && !feedback && (
                <div className="grid grid-cols-4 gap-2 w-full mt-6">
                  <button
                    type="button"
                    onClick={() => handleRating("again")}
                    className="p-2.5 rounded-2xl bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 font-bold text-xs transition-all cursor-pointer flex flex-col items-center gap-0.5"
                  >
                    <span>Quên (1)</span>
                    <span className="text-[10px] opacity-70 font-normal">1 ngày</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleRating("hard")}
                    className="p-2.5 rounded-2xl bg-amber-50 hover:bg-amber-100 text-amber-700 border border-amber-200 font-bold text-xs transition-all cursor-pointer flex flex-col items-center gap-0.5"
                  >
                    <span>Khó (2)</span>
                    <span className="text-[10px] opacity-70 font-normal">Chậm</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleRating("good")}
                    className="p-2.5 rounded-2xl bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 font-bold text-xs transition-all cursor-pointer flex flex-col items-center gap-0.5"
                  >
                    <span>Nhớ (3)</span>
                    <span className="text-[10px] opacity-70 font-normal">Chuẩn</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleRating("easy")}
                    className="p-2.5 rounded-2xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 font-bold text-xs transition-all cursor-pointer flex flex-col items-center gap-0.5"
                  >
                    <span>Dễ (4)</span>
                    <span className="text-[10px] opacity-70 font-normal">Nhanh</span>
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
