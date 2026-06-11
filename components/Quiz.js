/* eslint-disable react-hooks/set-state-in-effect, react-hooks/exhaustive-deps */
"use client";
import React, { useState, useEffect, useRef } from "react";
import { Award, Clock, ArrowLeft, RotateCcw, CheckCircle, AlertTriangle, BookOpen, User, BookOpenText } from "lucide-react";
import { db } from "../lib/firebase";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { questionsMap, chapters } from "../data/index";

const STATE_STORAGE_KEY = "studymaster_active_quiz_state";

export default function Quiz({ onClose, showToast, showConfirm, showAlert }) {
  const [step, setStep] = useState("chapter-select"); // "chapter-select", "resume-confirm", "quiz-setup", "quiz-run", "results", "all-questions"
  const [name, setName] = useState("");
  const [mode, setMode] = useState("immediate"); // "immediate" or "end"
  const [selectedChapterId, setSelectedChapterId] = useState("");
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [savedState, setSavedState] = useState(null);
  const [rankings, setRankings] = useState([]);
  const [loadingRankings, setLoadingRankings] = useState(false);
  const [latestScore, setLatestScore] = useState(0);

  const timerRef = useRef(null);

  // Load username & check for saved state on mount
  useEffect(() => {
    const savedName = localStorage.getItem("studymaster_user_name") || "";
    setName(savedName);

    const savedStateStr = localStorage.getItem(STATE_STORAGE_KEY);
    if (savedStateStr) {
      try {
        const state = JSON.parse(savedStateStr);
        if (state && state.questions && state.questions.length > 0) {
          setSavedState(state);
          setStep("resume-confirm");
        }
      } catch (e) {
        console.error("Error loading saved quiz state:", e);
        localStorage.removeItem(STATE_STORAGE_KEY);
      }
    }
  }, []);

  // Save current quiz progress
  const saveQuizState = (time) => {
    const state = {
      name,
      mode,
      currentChapterId: selectedChapterId,
      questions,
      currentIndex,
      answers,
      elapsedTime: time
    };
    localStorage.setItem(STATE_STORAGE_KEY, JSON.stringify(state));
  };

  // Timer effect during active quiz
  useEffect(() => {
    if (step === "quiz-run") {
      timerRef.current = setInterval(() => {
        setElapsedTime((prev) => {
          const nextTime = prev + 1;
          // Periodically save state to localStorage
          saveQuizState(nextTime);
          return nextTime;
        });
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [step, currentIndex, answers, name, mode, selectedChapterId, questions]);

  const clearQuizState = () => {
    localStorage.removeItem(STATE_STORAGE_KEY);
  };

  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  // Shuffle array utility
  const shuffleArray = (arr) => {
    const result = [...arr];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  };

  const getRandomSample = (arr, count) => {
    const shuffled = shuffleArray(arr);
    return shuffled.slice(0, count);
  };

  // Sample questions based on criteria
  const sampleQuestions = (chapterId) => {
    const questionData = questionsMap[chapterId];
    if (!questionData) return [];

    const insidePool = questionData.inside || [];
    const outsidePool = questionData.outside || [];

    // 1. Draw 3 random outside questions
    const sampledOutside = getRandomSample(outsidePool, 3);

    // 2. Draw 37 inside questions
    let sampledInside = [];

    if (chapterId === "chuong-mo-dau") {
      // Part I: 16 questions (4 Easy, 8 Medium, 4 Hard)
      const p1Easy = insidePool.filter((q) => q.sectionId === "doi-tuong-nghien-cuu" && q.difficulty === "easy");
      const p1Medium = insidePool.filter((q) => q.sectionId === "doi-tuong-nghien-cuu" && q.difficulty === "medium");
      const p1Hard = insidePool.filter((q) => q.sectionId === "doi-tuong-nghien-cuu" && q.difficulty === "hard");

      const sampledP1 = [
        ...getRandomSample(p1Easy, 4),
        ...getRandomSample(p1Medium, 8),
        ...getRandomSample(p1Hard, 4)
      ];

      // Part II: 13 questions (3 Easy, 6 Medium, 4 Hard)
      const p2Easy = insidePool.filter((q) => q.sectionId === "phuong-phap-nghien-cuu" && q.difficulty === "easy");
      const p2Medium = insidePool.filter((q) => q.sectionId === "phuong-phap-nghien-cuu" && q.difficulty === "medium");
      const p2Hard = insidePool.filter((q) => q.sectionId === "phuong-phap-nghien-cuu" && q.difficulty === "hard");

      const sampledP2 = [
        ...getRandomSample(p2Easy, 3),
        ...getRandomSample(p2Medium, 6),
        ...getRandomSample(p2Hard, 4)
      ];

      // Part III: 8 questions (2 Easy, 4 Medium, 2 Hard)
      const p3Easy = insidePool.filter((q) => q.sectionId === "y-nghia-hoc-tap" && q.difficulty === "easy");
      const p3Medium = insidePool.filter((q) => q.sectionId === "y-nghia-hoc-tap" && q.difficulty === "medium");
      const p3Hard = insidePool.filter((q) => q.sectionId === "y-nghia-hoc-tap" && q.difficulty === "hard");

      const sampledP3 = [
        ...getRandomSample(p3Easy, 2),
        ...getRandomSample(p3Medium, 4),
        ...getRandomSample(p3Hard, 2)
      ];

      sampledInside = [...sampledP1, ...sampledP2, ...sampledP3];
    } else {
      // Fallback for other chapters: Draw 37 random questions from inside pool
      sampledInside = getRandomSample(insidePool, 37);
    }

    // Combine
    const combined = [...sampledOutside, ...sampledInside];

    // Deep copy and shuffle options
    const finalPool = combined.map((q) => {
      const qCopy = JSON.parse(JSON.stringify(q));
      const originalCorrectText = qCopy.options[qCopy.answer];
      qCopy.options = shuffleArray(qCopy.options);
      qCopy.answer = qCopy.options.indexOf(originalCorrectText);
      return qCopy;
    });

    return shuffleArray(finalPool);
  };

  const startNewQuiz = () => {
    const sampled = sampleQuestions(selectedChapterId);
    if (sampled.length === 0) {
      showAlert({
        title: "Không tìm thấy câu hỏi",
        message: `Không tìm thấy dữ liệu câu hỏi cho chương: ${selectedChapterId}`,
        type: "warning"
      });
      return;
    }

    setQuestions(sampled);
    setAnswers(new Array(sampled.length).fill(-1));
    setCurrentIndex(0);
    setElapsedTime(0);
    setStep("quiz-run");
    localStorage.setItem("studymaster_user_name", name);
  };

  const handleResume = () => {
    if (savedState) {
      setName(savedState.name);
      setMode(savedState.mode);
      setSelectedChapterId(savedState.currentChapterId);
      setQuestions(savedState.questions);
      setCurrentIndex(savedState.currentIndex);
      setAnswers(savedState.answers);
      setElapsedTime(savedState.elapsedTime);
      setStep("quiz-run");
    }
  };

  const handleSelectOption = (optIdx) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentIndex] = optIdx;
    setAnswers(updatedAnswers);
    saveQuizState(elapsedTime);
  };

  const handleNavigateQuestion = (direction) => {
    const nextIdx = currentIndex + direction;
    if (nextIdx >= 0 && nextIdx < questions.length) {
      setCurrentIndex(nextIdx);
    } else if (nextIdx === questions.length) {
      confirmSubmit();
    }
  };

  const confirmSubmit = () => {
    const unanswered = answers.filter((ans) => ans === -1).length;
    const msg = unanswered > 0
      ? `Bạn còn ${unanswered} câu chưa làm. Bạn vẫn muốn nộp bài chứ?`
      : "Bạn có chắc chắn muốn nộp bài làm không?";

    showConfirm({
      title: "Nộp bài kiểm tra",
      message: msg,
      type: "confirm",
      confirmText: "Nộp bài",
      cancelText: "Hủy",
      onConfirm: () => {
        submitQuiz();
      }
    });
  };

  const submitQuiz = async () => {
    clearQuizState();

    let correct = 0;
    questions.forEach((q, idx) => {
      if (answers[idx] === q.answer) {
        correct++;
      }
    });

    setLatestScore(correct);

    const record = {
      name,
      score: correct,
      total: questions.length,
      time: elapsedTime,
      date: new Date().toISOString(),
      chapterId: selectedChapterId
    };

    // Save to LocalStorage history
    const existing = getRankingsFromLocalStorage(selectedChapterId);
    existing.push(record);
    localStorage.setItem(`studymaster_quiz_rankings_${selectedChapterId}`, JSON.stringify(existing));

    // Try saving to Firebase Firestore
    try {
      await addDoc(collection(db, "rankings"), record);
      console.log("Đã lưu điểm thành công lên Cloud Firestore");
    } catch (err) {
      console.error("Lỗi khi lưu điểm lên Cloud Firestore:", err);
    }

    setStep("results");
    loadAndRenderLeaderboard(correct, record);
  };

  const getRankingsFromLocalStorage = (chapterId) => {
    try {
      const stored = localStorage.getItem(`studymaster_quiz_rankings_${chapterId}`);
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      return [];
    }
  };

  const loadAndRenderLeaderboard = async (scoreVal, newRecord) => {
    setLoadingRankings(true);
    let list = [];

    // Load from Firestore
    try {
      const q = query(collection(db, "rankings"), where("chapterId", "==", selectedChapterId));
      const snapshot = await getDocs(q);
      snapshot.forEach((doc) => {
        list.push(doc.data());
      });
    } catch (err) {
      console.warn("Lỗi tải xếp hạng từ Firebase, sử dụng LocalStorage:", err);
      list = getRankingsFromLocalStorage(selectedChapterId);
    }

    // Sort: Score desc, Time asc, Date desc
    list.sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      if (a.time !== b.time) return a.time - b.time;
      return new Date(b.date) - new Date(a.date);
    });

    setRankings(list.slice(0, 10));
    setLoadingRankings(false);
  };

  const getSectionTitle = (sectionId, subsectionId) => {
    const chapter = chapters.find((ch) => ch.id === selectedChapterId);
    if (!chapter) return "";

    const section = chapter.sections.find((s) => s.id === sectionId);
    if (!section) return sectionId;

    const sub = section.subsections.find((su) => su.id === subsectionId);
    if (sub) {
      return `Phần ${section.roman} › Mục ${sub.number}`;
    }
    return `Phần ${section.roman}`;
  };

  // Diagnostics calculations
  const calculateDiagnostics = () => {
    const diag = {};
    const chapter = chapters.find((ch) => ch.id === selectedChapterId);

    if (chapter) {
      chapter.sections.forEach((sec) => {
        diag[sec.id] = { title: `${sec.title} (Phần ${sec.roman})`, correct: 0, total: 0 };
      });
    } else {
      diag["doi-tuong-nghien-cuu"] = { title: "Đối tượng nghiên cứu", correct: 0, total: 0 };
      diag["phuong-phap-nghien-cuu"] = { title: "Phương pháp nghiên cứu", correct: 0, total: 0 };
      diag["y-nghia-hoc-tap"] = { title: "Ý nghĩa học tập đối với SV", correct: 0, total: 0 };
    }

    diag["outside"] = { title: "Kiến thức mở rộng (Ngoài giáo trình)", correct: 0, total: 0 };

    questions.forEach((q, idx) => {
      const key = q.isOutside ? "outside" : q.sectionId;
      if (diag[key]) {
        diag[key].total++;
        if (answers[idx] === q.answer) {
          diag[key].correct++;
        }
      }
    });

    return diag;
  };

  // Render content according to the step
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8">
      {/* Step 1: Chapter Selection */}
      {step === "chapter-select" && (
        <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-850 p-6 md:p-8 shadow-xl text-center">
          <Award size={48} className="text-accent mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold font-playfair mb-3 text-stone-900 dark:text-stone-100">
            Trình Ôn Tập Đánh Giá Kiến Thức
          </h2>
          <p className="text-stone-600 dark:text-stone-400 text-sm md:text-base mb-8 max-w-2xl mx-auto">
            Vui lòng chọn chương học dưới đây để bắt đầu làm bài trắc nghiệm (đề thi gồm 40 câu chọn lọc ngẫu nhiên từ ngân hàng câu hỏi).
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            {chapters.map((ch) => {
              const isReady = !!questionsMap[ch.id];
              return (
                <button
                  key={ch.id}
                  disabled={!isReady}
                  onClick={() => {
                    setSelectedChapterId(ch.id);
                    setStep("quiz-setup");
                  }}
                  className={`p-6 rounded-xl border text-left flex flex-col justify-between h-48 transition-all duration-300 ${
                    isReady
                      ? "bg-accent/5 hover:bg-accent/10 border-accent/20 cursor-pointer"
                      : "bg-stone-100 dark:bg-stone-900/40 border-stone-200 dark:border-stone-850 opacity-60 cursor-not-allowed"
                  }`}
                >
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-stone-900 dark:text-stone-100 text-base md:text-lg">
                        {ch.title}
                      </h3>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                        isReady ? "bg-green-100 dark:bg-green-950/60 text-green-700 dark:text-green-400" : "bg-stone-200 dark:bg-stone-800 text-stone-600 dark:text-stone-400"
                      }`}>
                        {isReady ? "Sẵn sàng 🟢" : "Đang cập nhật 🔒"}
                      </span>
                    </div>
                    <p className="text-xs text-stone-600 dark:text-stone-400 line-clamp-3 leading-relaxed">
                      {ch.subtitle}
                    </p>
                  </div>
                  <div className={`text-xs font-bold ${isReady ? "text-accent" : "text-stone-500"}`}>
                    {isReady ? "Bắt đầu ôn tập →" : "Chưa khả dụng"}
                  </div>
                </button>
              );
            })}
          </div>

          <button
            onClick={onClose}
            className="mt-8 px-6 py-2.5 rounded-lg border border-stone-300 dark:border-stone-800 text-stone-600 dark:text-stone-400 font-semibold hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors duration-200 text-sm"
          >
            Quay lại đọc bài học
          </button>
        </div>
      )}

      {/* Step 2: Resume Confirm */}
      {step === "resume-confirm" && savedState && (
        <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-850 p-6 md:p-8 shadow-xl max-w-xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-accent flex items-center gap-2 mb-4 font-playfair">
            🔄 Phát hiện bài thi chưa hoàn thành
          </h2>
          <p className="text-stone-600 dark:text-stone-400 text-sm mb-6">
            Hệ thống tìm thấy một bài kiểm tra đang làm dở của bạn. Bạn có muốn tiếp tục?
          </p>

          <div className="bg-stone-100 dark:bg-stone-950 p-4 rounded-xl space-y-3 text-sm mb-6 border border-stone-200 dark:border-stone-850">
            <div className="flex justify-between">
              <span className="text-stone-500">Người học:</span>
              <span className="font-semibold">{savedState.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-500">Chương:</span>
              <span className="font-semibold text-right max-w-[250px] truncate">
                {chapters.find((c) => c.id === savedState.currentChapterId)?.title || savedState.currentChapterId}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-500">Chế độ:</span>
              <span className="font-semibold">
                {savedState.mode === "immediate" ? "Xem đáp án ngay" : "Xem sau nộp bài"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-500">Tiến độ:</span>
              <span className="font-semibold text-accent">
                {savedState.answers.filter((a) => a !== -1).length} / {savedState.questions.length} câu
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-500">Thời gian:</span>
              <span className="font-semibold font-mono">{formatTime(savedState.elapsedTime)}</span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <button
              onClick={handleResume}
              className="w-full py-3 rounded-lg bg-green-600 hover:bg-green-500 text-white font-bold text-sm shadow-md transition-colors"
            >
              ▶ Tiếp tục làm bài
            </button>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  showConfirm({
                    title: "Làm bài thi mới",
                    message: "Làm bài mới sẽ xóa sạch toàn bộ tiến trình của bài cũ. Bạn có chắc chắn?",
                    type: "warning",
                    confirmText: "Làm bài mới",
                    cancelText: "Hủy",
                    onConfirm: () => {
                      clearQuizState();
                      setStep("chapter-select");
                    }
                  });
                }}
                className="py-2.5 rounded-lg border border-stone-300 dark:border-stone-800 text-stone-600 dark:text-stone-400 text-xs font-semibold hover:bg-stone-100 dark:hover:bg-stone-850 transition-colors"
              >
                🔄 Làm bài mới
              </button>
              <button
                onClick={() => {
                  clearQuizState();
                  onClose();
                }}
                className="py-2.5 rounded-lg border border-stone-300 dark:border-stone-800 text-stone-600 dark:text-stone-400 text-xs font-semibold hover:bg-stone-100 dark:hover:bg-stone-850 transition-colors"
              >
                🚪 Thoát ra
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Step 3: Quiz Setup */}
      {step === "quiz-setup" && (
        <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-850 p-6 md:p-8 shadow-xl max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold font-playfair mb-2 text-stone-900 dark:text-stone-100">
            Cấu Hình Bài Ôn Tập
          </h2>
          <p className="text-xs text-accent font-bold mb-6 uppercase tracking-wider">
            {chapters.find((c) => c.id === selectedChapterId)?.title}
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (name.trim()) startNewQuiz();
            }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name-input" className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
                Họ và tên người học
              </label>
              <div className="relative">
                <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                <input
                  type="text"
                  id="name-input"
                  required
                  placeholder="Nhập tên của bạn để ghi nhận bảng xếp hạng..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-250 dark:border-stone-800 bg-transparent text-sm text-stone-850 dark:text-stone-150 focus:outline-none focus:border-accent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-3">
                Chế độ xem đáp án
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setMode("immediate")}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                    mode === "immediate"
                      ? "bg-accent/5 border-accent shadow-md scale-[1.01]"
                      : "bg-stone-50 dark:bg-stone-950 border-stone-200 dark:border-stone-850 opacity-80"
                  }`}
                >
                  <div className="font-bold text-sm text-stone-900 dark:text-stone-100 mb-1">⚡ Xem giải thích ngay</div>
                  <div className="text-[11px] text-stone-500 dark:text-stone-400 leading-relaxed">
                    Hiển thị đáp án đúng/sai kèm giải thích chi tiết ngay lập tức sau khi bạn chọn lựa. Rất thích hợp để tự luyện tập và học bài.
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setMode("end")}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                    mode === "end"
                      ? "bg-accent/5 border-accent shadow-md scale-[1.01]"
                      : "bg-stone-50 dark:bg-stone-950 border-stone-200 dark:border-stone-850 opacity-80"
                  }`}
                >
                  <div className="font-bold text-sm text-stone-900 dark:text-stone-100 mb-1">⏱️ Xem sau khi nộp bài</div>
                  <div className="text-[11px] text-stone-500 dark:text-stone-400 leading-relaxed">
                    Giữ kín mọi đáp án cho tới khi bạn hoàn thành toàn bộ 40 câu trắc nghiệm. Phù hợp để làm đề thi thử nghiêm túc tự đánh giá năng lực.
                  </div>
                </button>
              </div>
            </div>

            <div className="flex gap-2 pt-4 flex-wrap">
              <button
                type="button"
                onClick={() => setStep("chapter-select")}
                className="px-5 py-2.5 rounded-lg border border-stone-300 dark:border-stone-800 text-stone-600 dark:text-stone-400 text-sm font-semibold hover:bg-stone-100 dark:hover:bg-stone-850 transition-colors"
              >
                ◀ Quay lại
              </button>
              <button
                type="button"
                onClick={() => setStep("all-questions")}
                className="flex-1 min-w-[150px] py-2.5 rounded-lg border border-accent/30 text-accent hover:bg-accent/5 text-sm font-bold transition-colors cursor-pointer"
              >
                📝 Xem trọn bộ câu hỏi
              </button>
              <button
                type="submit"
                className="flex-1 min-w-[180px] py-2.5 rounded-lg bg-accent hover:bg-accent/90 text-white dark:text-stone-950 font-bold text-sm transition-colors shadow-md cursor-pointer"
              >
                🚀 Bắt đầu làm bài (40 câu)
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Step 4: Quiz Running Layout */}
      {step === "quiz-run" && questions.length > 0 && (
        <div className="quiz-layout flex flex-col md:flex-row gap-6 items-start">
          {/* Main Quiz Section */}
          <div className="flex-1 w-full space-y-4">
            <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-850 p-6 shadow-xl relative">
              {/* Header inside Quiz */}
              <div className="flex justify-between items-center border-b border-stone-200 dark:border-stone-850 pb-4 mb-4">
                <span className="font-bold text-stone-800 dark:text-stone-200 text-sm md:text-base">
                  Câu hỏi {currentIndex + 1} / 40
                </span>
                <span className="font-bold text-sm bg-stone-100 dark:bg-stone-950 text-stone-700 dark:text-stone-400 px-3 py-1 rounded-full flex items-center gap-1.5 border border-stone-200 dark:border-stone-800">
                  <Clock size={14} className="text-accent animate-pulse" />
                  <span className="font-mono text-stone-800 dark:text-stone-200">{formatTime(elapsedTime)}</span>
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-stone-100 dark:bg-stone-950 h-2 rounded-full overflow-hidden mb-6">
                <div
                  className="bg-teal-500 h-full transition-all duration-300"
                  style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                />
              </div>

              {/* Question Text */}
              <div className="text-stone-900 dark:text-stone-100 font-semibold text-base md:text-lg mb-6 leading-relaxed">
                {questions[currentIndex].question}
              </div>

              {/* Options */}
              <div className="space-y-3">
                {questions[currentIndex].options.map((opt, oIdx) => {
                  const prefix = String.fromCharCode(65 + oIdx);
                  const isUserSelection = answers[currentIndex] === oIdx;
                  const isCorrectAns = questions[currentIndex].answer === oIdx;

                  let optClass = "border-stone-200 dark:border-stone-850 text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-950/60";
                  let disabled = false;

                  if (mode === "immediate" && answers[currentIndex] !== -1) {
                    disabled = true;
                    if (isCorrectAns) {
                      optClass = "bg-green-500/10 border-green-500 text-green-700 dark:text-green-400 font-semibold";
                    } else if (isUserSelection) {
                      optClass = "bg-red-500/10 border-red-500 text-red-700 dark:text-red-400";
                    } else {
                      optClass = "opacity-50 border-stone-200 dark:border-stone-850 text-stone-400";
                    }
                  } else {
                    if (isUserSelection) {
                      optClass = "bg-accent/10 border-accent text-accent font-bold scale-[1.01] shadow-sm";
                    }
                  }

                  return (
                    <button
                      key={oIdx}
                      disabled={disabled}
                      onClick={() => handleSelectOption(oIdx)}
                      className={`w-full flex items-baseline gap-4 px-4 py-3 rounded-xl border text-left transition-all duration-150 text-sm cursor-pointer ${optClass}`}
                    >
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-extrabold ${
                        isUserSelection ? "bg-accent text-white dark:text-stone-950" : "bg-stone-100 dark:bg-stone-950 text-stone-500"
                      }`}>
                        {prefix}
                      </span>
                      <span className="flex-1 leading-normal">{opt}</span>
                    </button>
                  );
                })}
              </div>

              {/* Immediate Mode Explanation */}
              {mode === "immediate" && answers[currentIndex] !== -1 && (
                <div className={`mt-6 p-4 rounded-xl text-xs md:text-sm border transition-all duration-300 ${
                  answers[currentIndex] === questions[currentIndex].answer
                    ? "bg-green-500/5 border-green-500/20 text-green-800 dark:text-green-400"
                    : "bg-red-500/5 border-red-500/20 text-red-800 dark:text-red-450"
                }`}>
                  <div className="flex justify-between items-center flex-wrap gap-2 font-bold mb-2">
                    <span>
                      {answers[currentIndex] === questions[currentIndex].answer
                        ? "🟢 Chính xác!"
                        : `🔴 Chưa chính xác (Đáp án đúng là ${String.fromCharCode(65 + questions[currentIndex].answer)})`}
                    </span>
                    <span className="text-[10px] text-stone-500 font-medium">
                      {questions[currentIndex].isOutside
                        ? "Kiến thức ngoài giáo trình"
                        : getSectionTitle(questions[currentIndex].sectionId, questions[currentIndex].subsectionId)}
                    </span>
                  </div>
                  <div className="leading-relaxed mt-2 pl-2 border-l-2 border-accent/40">
                    <strong>Giải thích:</strong> {questions[currentIndex].explanation || "Không có giải thích chi tiết."}
                  </div>
                </div>
              )}
            </div>

            {/* Back / Next Buttons */}
            <div className="flex justify-between gap-3">
              <button
                disabled={currentIndex === 0}
                onClick={() => handleNavigateQuestion(-1)}
                className="px-5 py-2.5 rounded-lg border border-stone-300 dark:border-stone-800 text-stone-600 dark:text-stone-400 text-sm font-semibold hover:bg-stone-100 dark:hover:bg-stone-850 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                ◀ Câu trước
              </button>
              <button
                onClick={() => handleNavigateQuestion(1)}
                className={`px-6 py-2.5 rounded-lg font-bold text-sm transition-colors shadow-md cursor-pointer ${
                  currentIndex === questions.length - 1
                    ? "bg-accent text-white dark:text-stone-950 hover:bg-accent/90"
                    : "bg-accent text-white dark:text-stone-950 hover:bg-accent/90"
                }`}
              >
                {currentIndex === questions.length - 1 ? "Hoàn tất 🏁" : "Câu sau ▶"}
              </button>
            </div>
          </div>

          {/* Sidebar Navigation Grid */}
          <div className="w-full md:w-72 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-850 rounded-2xl p-5 shadow-xl">
            <h3 className="font-bold text-sm text-stone-800 dark:text-stone-250 mb-3 border-b border-stone-100 dark:border-stone-850 pb-2">
              Danh Sách Câu Hỏi
            </h3>
            <div className="grid grid-cols-5 gap-2 max-h-72 overflow-y-auto pr-1">
              {questions.map((q, idx) => {
                const isSelected = answers[idx] !== -1;
                const isActive = currentIndex === idx;

                let gridItemClass = "border-stone-200 dark:border-stone-800 text-stone-500 dark:text-stone-550 hover:border-accent";
                if (isActive) {
                  gridItemClass = "border-accent text-accent font-extrabold ring-1 ring-accent bg-accent/5";
                } else if (isSelected) {
                  if (mode === "immediate") {
                    gridItemClass = answers[idx] === q.answer
                      ? "bg-green-500/10 border-green-500 text-green-700 dark:text-green-400 font-bold"
                      : "bg-red-500/10 border-red-500 text-red-700 dark:text-red-400 font-bold";
                  } else {
                    gridItemClass = "bg-stone-100 dark:bg-stone-950 border-stone-300 dark:border-stone-800 text-stone-800 dark:text-stone-200 font-semibold";
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrentIndex(idx);
                      saveQuizState(elapsedTime);
                    }}
                    className={`h-9 rounded-lg border text-xs flex items-center justify-center font-mono transition-all duration-200 cursor-pointer ${gridItemClass}`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            <button
              onClick={confirmSubmit}
              className="w-full mt-6 py-2.5 rounded-lg bg-red-700 hover:bg-red-650 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md shadow-red-900/20"
            >
              📥 Nộp bài hoàn thành
            </button>
          </div>
        </div>
      )}

      {/* Step 5: Quiz Results */}
      {step === "results" && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-850 p-6 md:p-8 shadow-xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold font-playfair text-stone-900 dark:text-stone-100 mb-2">
              🏆 Kết Quả Bài Làm
            </h2>
            <p className="text-stone-500 dark:text-stone-400 text-sm mb-6">
              Xin chúc mừng <strong>{name}</strong> đã hoàn thành bài thi!
            </p>

            {/* Score Circle */}
            <div className="w-36 h-36 rounded-full border-4 border-accent flex flex-col justify-center items-center mx-auto mb-6 bg-accent/5">
              <span className="text-3xl font-extrabold text-stone-900 dark:text-stone-100">{latestScore}/40</span>
              <span className="text-[10px] text-stone-500 font-bold uppercase mt-1">Điểm số</span>
            </div>

            {/* Meta */}
            <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto mb-8 text-sm border-t border-b border-stone-200 dark:border-stone-850 py-4">
              <div className="border-r border-stone-200 dark:border-stone-850">
                <div className="text-lg font-bold text-stone-900 dark:text-stone-100 font-mono">
                  {formatTime(elapsedTime)}
                </div>
                <div className="text-xs text-stone-500 mt-1">Thời gian làm</div>
              </div>
              <div>
                <div className="text-lg font-bold text-stone-900 dark:text-stone-100 font-mono">
                  {Math.round((latestScore / 40) * 100)}%
                </div>
                <div className="text-xs text-stone-500 mt-1">Tỷ lệ đúng</div>
              </div>
            </div>

            {/* Diagnostics Per Section */}
            <div className="text-left mb-8 max-w-xl mx-auto space-y-4">
              <h3 className="font-bold text-base text-stone-900 dark:text-stone-100 border-b border-stone-100 dark:border-stone-850 pb-2 flex items-center gap-2">
                <span>📊 Phân Tích Chi Tiết Theo Phần</span>
              </h3>
              {Object.keys(calculateDiagnostics()).map((key) => {
                const data = calculateDiagnostics()[key];
                if (data.total === 0) return null;

                const percent = Math.round((data.correct / data.total) * 100) || 0;
                let barColor = "bg-red-500";
                let feedback = "⚠️ Yếu! Bạn đang học lệch hoặc bỏ sót kiến thức ở phần này. Hãy ôn tập kỹ lại giáo trình.";

                if (percent >= 80) {
                  barColor = "bg-green-500";
                  feedback = "🌟 Tốt! Kiến thức phần này của bạn cực kỳ vững vàng.";
                } else if (percent >= 50) {
                  barColor = "bg-accent";
                  feedback = "💡 Khá! Bạn nắm chắc lý thuyết cơ bản nhưng cần củng cố các câu nâng cao.";
                }

                return (
                  <div key={key} className="space-y-1">
                    <div className="flex justify-between text-xs font-semibold text-stone-700 dark:text-stone-300">
                      <span>{data.title}</span>
                      <span>
                        {data.correct} / {data.total} câu ({percent}%)
                      </span>
                    </div>
                    <div className="w-full bg-stone-100 dark:bg-stone-950 h-2 rounded-full overflow-hidden">
                      <div className={`h-full ${barColor}`} style={{ width: `${percent}%` }} />
                    </div>
                    <div className="text-[10px] text-stone-500 leading-normal">{feedback}</div>
                  </div>
                );
              })}
            </div>

            {/* Leaderboard Table */}
            <div className="text-left mb-8 max-w-2xl mx-auto space-y-4">
              <h3 className="font-bold text-base text-stone-900 dark:text-stone-100 border-b border-stone-100 dark:border-stone-850 pb-2">
                🏅 Bảng Xếp Hạng Lượt Học
              </h3>
              <div className="overflow-x-auto rounded-xl border border-stone-250 dark:border-stone-800">
                <table className="w-full text-sm text-stone-600 dark:text-stone-400 text-left border-collapse">
                  <thead className="bg-stone-50 dark:bg-stone-950 text-xs font-bold text-stone-500 uppercase">
                    <tr>
                      <th className="px-4 py-3 text-center w-16">Hạng</th>
                      <th className="px-4 py-3">Họ Tên</th>
                      <th className="px-4 py-3 text-center">Điểm Số</th>
                      <th className="px-4 py-3 text-center">Thời Gian</th>
                      <th className="px-4 py-3 text-center">Ngày Làm</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 dark:divide-stone-850">
                    {loadingRankings ? (
                      <tr>
                        <td colSpan="5" className="px-4 py-8 text-center text-stone-450 italic">
                          Đang tải bảng xếp hạng...
                        </td>
                      </tr>
                    ) : rankings.length === 0 ? (
                      <tr>
                        <td colSpan="5" className="px-4 py-8 text-center text-stone-450 italic">
                          Chưa có kết quả xếp hạng. Hãy là người đầu tiên!
                        </td>
                      </tr>
                    ) : (
                      rankings.map((r, rIdx) => {
                        const isCurrent =
                          r.name === name && r.score === latestScore && r.time === elapsedTime;
                        return (
                          <tr
                            key={rIdx}
                            className={`hover:bg-stone-50/50 dark:hover:bg-stone-950/50 transition-colors ${
                              isCurrent ? "bg-accent/10 font-semibold text-accent" : ""
                            }`}
                          >
                            <td className="px-4 py-3 text-center font-bold">#{rIdx + 1}</td>
                            <td className="px-4 py-3">{r.name}</td>
                            <td className="px-4 py-3 text-center font-mono">{r.score}/{r.total}</td>
                            <td className="px-4 py-3 text-center font-mono">{formatTime(r.time)}</td>
                            <td className="px-4 py-3 text-center text-xs">
                              {new Date(r.date).toLocaleDateString("vi-VN")}
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-center gap-3 flex-wrap">
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-lg border border-stone-300 dark:border-stone-800 text-stone-600 dark:text-stone-400 text-sm font-semibold hover:bg-stone-100 dark:hover:bg-stone-850 transition-colors"
              >
                📖 Quay lại đọc bài
              </button>
              <button
                onClick={() => {
                  setStep("chapter-select");
                  setRankings([]);
                }}
                className="px-5 py-2.5 rounded-lg border border-stone-300 dark:border-stone-800 text-stone-600 dark:text-stone-400 text-sm font-semibold hover:bg-stone-100 dark:hover:bg-stone-850 transition-colors"
              >
                📚 Chọn chương khác
              </button>
              <button
                onClick={() => {
                  setStep("quiz-setup");
                  setRankings([]);
                }}
                className="px-6 py-2.5 rounded-lg bg-accent hover:bg-accent/90 text-white dark:text-stone-950 font-bold text-sm transition-colors shadow-md cursor-pointer"
              >
                🔄 Làm lại chương này
              </button>
            </div>
          </div>

          {/* End Mode Review Section */}
          {mode === "end" && (
            <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-850 p-6 shadow-xl space-y-6">
              <h3 className="font-bold text-lg text-stone-900 dark:text-stone-100 border-b border-stone-100 dark:border-stone-850 pb-2">
                🔎 Xem Lại Chi Tiết Đáp Án
              </h3>
              <div className="space-y-6">
                {questions.map((q, idx) => {
                  const isCorrect = answers[idx] === q.answer;
                  return (
                    <div
                      key={idx}
                      className="p-5 rounded-xl border border-stone-200 dark:border-stone-800 space-y-3 relative hover:bg-stone-50/20 dark:hover:bg-stone-900/20 transition-colors"
                    >
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-bold text-xs bg-stone-100 dark:bg-stone-950 text-stone-700 dark:text-stone-400 px-2 py-0.5 rounded border border-stone-200 dark:border-stone-850">
                          Câu {idx + 1}
                        </span>
                        <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded ${
                          isCorrect ? "bg-green-150 dark:bg-green-950/60 text-green-700 dark:text-green-400" : "bg-red-150 dark:bg-red-950/60 text-red-700 dark:text-red-400"
                        }`}>
                          {isCorrect ? "Đúng" : "Sai"}
                        </span>
                        <span className="text-[10px] font-bold text-stone-400 uppercase">
                          {q.isOutside ? "Ngoài giáo trình" : getSectionTitle(q.sectionId, q.subsectionId)}
                        </span>
                      </div>
                      <div className="text-stone-900 dark:text-stone-100 font-semibold text-sm leading-relaxed">
                        {q.question}
                      </div>

                      <div className="space-y-2 text-xs">
                        <div className={`p-2.5 rounded border ${isCorrect ? "bg-green-500/5 border-green-500/20 text-green-700 dark:text-green-400" : "bg-red-500/5 border-red-500/20 text-red-750 dark:text-red-400"}`}>
                          <strong>Câu trả lời của bạn:</strong> {answers[idx] !== -1 ? q.options[answers[idx]] : "Chưa chọn"}
                        </div>
                        {!isCorrect && (
                          <div className="p-2.5 rounded border bg-green-500/5 border-green-500/20 text-green-700 dark:text-green-400">
                            <strong>Đáp án đúng:</strong> {q.options[q.answer]}
                          </div>
                        )}
                      </div>

                      <div className="p-3 rounded-lg bg-accent/5 border border-accent/10 text-stone-600 dark:text-stone-400 text-xs leading-relaxed mt-2 pl-3 border-l-2 border-accent/40">
                        <strong>Giải thích:</strong> {q.explanation || "Không có giải thích chi tiết."}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Step 6: View all 100 questions */}
      {step === "all-questions" && questionsMap[selectedChapterId] && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-850 p-6 md:p-8 shadow-xl text-center">
            <BookOpenText size={48} className="text-accent mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold font-playfair text-stone-900 dark:text-stone-100 mb-2">
              📖 Trọn bộ câu hỏi ôn tập
            </h2>
            <p className="text-xs text-accent font-bold mb-6 uppercase tracking-wider">
              {chapters.find((c) => c.id === selectedChapterId)?.title}
            </p>

            <div className="flex justify-center gap-3">
              <button
                onClick={() => setStep("quiz-setup")}
                className="px-5 py-2.5 rounded-lg border border-stone-300 dark:border-stone-800 text-stone-600 dark:text-stone-400 text-sm font-semibold hover:bg-stone-100 dark:hover:bg-stone-850 transition-colors"
              >
                ◀ Quay lại cấu hình
              </button>
              <button
                onClick={() => {
                  setStep("quiz-setup");
                  startNewQuiz();
                }}
                className="px-6 py-2.5 rounded-lg bg-accent hover:bg-accent/90 text-white dark:text-stone-950 font-bold text-sm transition-colors shadow-md cursor-pointer"
              >
                🚀 Bắt đầu làm bài test (40 câu)
              </button>
            </div>
          </div>

          {/* List of all questions */}
          <div className="space-y-6">
            {[...(questionsMap[selectedChapterId].inside || []), ...(questionsMap[selectedChapterId].outside || [])].map((q, idx) => {
              const diffText = q.difficulty === "easy" ? "Dễ" : q.difficulty === "medium" ? "Trung bình" : "Khó";
              const diffClass =
                q.difficulty === "easy"
                  ? "bg-green-100 dark:bg-green-950/60 text-green-700 dark:text-green-400"
                  : q.difficulty === "medium"
                  ? "bg-accent/15 text-accent"
                  : "bg-red-100 dark:bg-red-950/60 text-red-700 dark:text-red-400";

              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-stone-900 p-6 rounded-2xl border border-stone-200 dark:border-stone-850 space-y-4 shadow-md"
                >
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-bold text-xs bg-stone-100 dark:bg-stone-950 text-stone-700 dark:text-stone-400 px-2.5 py-0.5 rounded border border-stone-200 dark:border-stone-800 font-mono">
                      Câu {idx + 1}
                    </span>
                    <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded ${diffClass}`}>
                      {diffText}
                    </span>
                    <span className="text-[10px] font-bold text-stone-400 uppercase">
                      {q.isOutside ? "Ngoài giáo trình" : getSectionTitle(q.sectionId, q.subsectionId)}
                    </span>
                  </div>

                  <div className="text-stone-900 dark:text-stone-100 font-semibold text-sm leading-relaxed">
                    {q.question}
                  </div>

                  <div className="space-y-2.5 pl-2">
                    {q.options.map((opt, oIdx) => {
                      const isCorrect = q.answer === oIdx;
                      const prefix = String.fromCharCode(65 + oIdx);

                      return (
                        <div
                          key={oIdx}
                          className={`flex items-baseline gap-3 px-3 py-2 rounded-lg border text-xs leading-normal ${
                            isCorrect
                              ? "bg-green-500/10 border-green-500 text-green-700 dark:text-green-400 font-semibold"
                              : "border-stone-100 dark:border-stone-850 text-stone-500 dark:text-stone-400 opacity-80"
                          }`}
                        >
                          <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-extrabold ${
                            isCorrect ? "bg-green-500 text-white" : "bg-stone-100 dark:bg-stone-950 text-stone-500"
                          }`}>
                            {prefix}
                          </span>
                          <span className="flex-1">{opt}</span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="p-3.5 rounded-xl bg-accent/5 border border-accent/10 text-stone-600 dark:text-stone-400 text-xs leading-relaxed pl-4 border-l-2 border-accent/40">
                    <strong>Giải thích:</strong> {q.explanation || "Không có giải thích chi tiết."}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => {
                setStep("quiz-setup");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="px-8 py-3 rounded-lg bg-accent hover:bg-accent/90 text-white dark:text-stone-950 font-bold text-sm transition-colors shadow-md cursor-pointer"
            >
              🚀 Bắt đầu làm bài test (40 câu)
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
