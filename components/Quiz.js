/* eslint-disable react-hooks/set-state-in-effect, react-hooks/exhaustive-deps */
"use client";
import React, { useState, useEffect, useRef } from "react";
import { 
  Award, Clock, ArrowLeft, RotateCcw, CheckCircle, AlertTriangle, BookOpen, User, BookOpenText,
  Volume2, VolumeX, Star, HelpCircle, Check, X, ChevronLeft, ChevronRight, Play, History, Sparkles,
  Trophy, TrendingUp, PieChart, Calendar, ChevronDown, ChevronUp, Filter, Heart, Eye
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { db } from "../lib/firebase";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { subjects } from "../data/index";
import confetti from "canvas-confetti";

const STATE_STORAGE_KEY = "studymaster_active_quiz_state";

export default function Quiz({ onClose, showToast, showConfirm, showAlert, subjectId = "tu-tuong-hcm" }) {
  const currentSubject = subjects[subjectId] || subjects["tu-tuong-hcm"];
  const chapters = currentSubject.chapters;
  const questionsMap = currentSubject.questionsMap;

  const [step, setStep] = useState("chapter-select"); // "chapter-select", "resume-confirm", "quiz-setup", "quiz-run", "results", "all-questions"
  const [setupStep, setSetupStep] = useState(1); // 1: Chapter, 2: Name, 3: Mode Selection
  const [name, setName] = useState("");
  const [mode, setMode] = useState("immediate"); // "immediate" or "end"
  const [selectedChapterId, setSelectedChapterId] = useState("");
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [timeLeft, setTimeLeft] = useState(2700); // 45 minutes countdown
  const [bookmarks, setBookmarks] = useState(new Set());
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [showMobileGrid, setShowMobileGrid] = useState(false);
  const [shakeIndex, setShakeIndex] = useState(-1);
  
  const [savedState, setSavedState] = useState(null);
  const [rankings, setRankings] = useState([]);
  const [loadingRankings, setLoadingRankings] = useState(false);
  const [latestScore, setLatestScore] = useState(0);

  const timerRef = useRef(null);
  const questionCardRef = useRef(null);
  const wizardContainerRef = useRef(null);
  const [slideDirection, setSlideDirection] = useState(1);
  const [displayedScore, setDisplayedScore] = useState(0);

  // Load sound pref, username & check for saved state on mount
  useEffect(() => {
    const savedName = localStorage.getItem("studymaster_user_name") || "";
    setName(savedName);

    const savedSound = localStorage.getItem("studymaster_sound_enabled");
    if (savedSound !== null) {
      setSoundEnabled(savedSound === "true");
    }

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

  // Sound toggle helper
  const toggleSound = () => {
    setSoundEnabled((prev) => {
      const next = !prev;
      localStorage.setItem("studymaster_sound_enabled", String(next));
      if (showToast) showToast(next ? "Đã bật âm thanh 🔊" : "Đã tắt âm thanh 🔇", "info");
      return next;
    });
  };

  // Sound Synthesizer using Web Audio API
  const playSoundEffect = (type) => {
    if (!soundEnabled) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      if (type === "correct") {
        osc.type = "sine";
        osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
        osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.12); // E5
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
        osc.start();
        osc.stop(ctx.currentTime + 0.4);
      } else if (type === "incorrect") {
        osc.type = "triangle";
        osc.frequency.setValueAtTime(160, ctx.currentTime);
        osc.frequency.linearRampToValueAtTime(100, ctx.currentTime + 0.25);
        gain.gain.setValueAtTime(0.12, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.35);
        osc.start();
        osc.stop(ctx.currentTime + 0.35);
      }
    } catch (e) {
      console.warn("AudioContext blocked or not supported:", e);
    }
  };

  // Confetti triggering on success
  const triggerConfetti = () => {
    if (typeof window !== "undefined") {
      confetti({
        particleCount: 140,
        spread: 80,
        origin: { y: 0.6 }
      });
      setTimeout(() => {
        confetti({
          particleCount: 80,
          angle: 60,
          spread: 55,
          origin: { x: 0, y: 0.8 }
        });
      }, 250);
      setTimeout(() => {
        confetti({
          particleCount: 80,
          angle: 120,
          spread: 55,
          origin: { x: 1, y: 0.8 }
        });
      }, 400);
    }
  };

  // GSAP slide transition for question cards
  useGSAP(() => {
    if (step === "quiz-run" && questionCardRef.current) {
      gsap.fromTo(questionCardRef.current,
        { opacity: 0, x: slideDirection * 35 },
        { opacity: 1, x: 0, duration: 0.3, ease: "power2.out" }
      );
    }
  }, { dependencies: [currentIndex, step] });

  // GSAP animation wizard step transition
  useGSAP(() => {
    if (wizardContainerRef.current) {
      gsap.fromTo(wizardContainerRef.current.children,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.35, ease: "power2.out", stagger: 0.05 }
      );
    }
  }, { dependencies: [setupStep, step] });

  // GSAP score counter & diagnostic bars animation
  useGSAP(() => {
    if (step === "results") {
      setDisplayedScore(0);
      const scoreObj = { val: 0 };
      gsap.to(scoreObj, {
        val: latestScore,
        roundProps: "val",
        ease: "power2.out",
        duration: 1.4,
        onUpdate: () => {
          setDisplayedScore(scoreObj.val);
        }
      });

      // Animate progress bars
      gsap.fromTo(".diagnostic-bar-progress",
        { width: "0%" },
        {
          width: (i, el) => el.getAttribute("data-target-width"),
          duration: 1.2,
          ease: "power2.out",
          stagger: 0.08
        }
      );
    }
  }, { dependencies: [step, latestScore] });

  // GSAP stagger leaderboard rows
  useGSAP(() => {
    if (step === "results" && !loadingRankings) {
      gsap.fromTo(".leaderboard-row",
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, stagger: 0.04, duration: 0.5, ease: "power2.out" }
      );
    }
  }, { dependencies: [step, loadingRankings] });

  // Save current quiz progress
  const saveQuizState = (time, remTime, currentBookmarks) => {
    const state = {
      name,
      mode,
      currentChapterId: selectedChapterId,
      questions,
      currentIndex,
      answers,
      elapsedTime: time,
      timeLeft: remTime,
      bookmarks: Array.from(currentBookmarks || new Set())
    };
    localStorage.setItem(STATE_STORAGE_KEY, JSON.stringify(state));
  };

  // Timer effect during active quiz
  useEffect(() => {
    if (step === "quiz-run") {
      timerRef.current = setInterval(() => {
        setElapsedTime((prev) => {
          const nextTime = prev + 1;
          saveQuizState(nextTime, timeLeft, bookmarks);
          return nextTime;
        });

        if (mode === "end") {
          setTimeLeft((prev) => {
            if (prev <= 1) {
              clearInterval(timerRef.current);
              showAlert({
                title: "Hết giờ làm bài!",
                message: "Thời gian làm bài thi thử (45 phút) đã hết. Hệ thống sẽ tự động nộp bài làm của bạn.",
                type: "warning"
              });
              submitQuiz();
              return 0;
            }
            return prev - 1;
          });
        }
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
  }, [step, currentIndex, answers, name, mode, selectedChapterId, questions, bookmarks, timeLeft]);

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
    } else if (chapterId === "chuong-1") {
      // Chapter I specific sampling rules
      // Draw 37 inside questions:
      // Section I (Mục I): 18 questions (5 Easy, 9 Medium, 4 Hard)
      const sec1Pool = insidePool.filter((q) => q.sectionId === "lsd-section-1");
      const sec1Easy = sec1Pool.filter((q) => q.difficulty === "easy");
      const sec1Medium = sec1Pool.filter((q) => q.difficulty === "medium");
      const sec1Hard = sec1Pool.filter((q) => q.difficulty === "hard");

      const sampledSec1 = [
        ...getRandomSample(sec1Easy, 5),
        ...getRandomSample(sec1Medium, 9),
        ...getRandomSample(sec1Hard, 4)
      ];

      // Section II (Mục II): 12 questions (4 Easy, 6 Medium, 2 Hard)
      const sec2Pool = insidePool.filter((q) => q.sectionId === "lsd-section-2");
      const sec2Easy = sec2Pool.filter((q) => q.difficulty === "easy");
      const sec2Medium = sec2Pool.filter((q) => q.difficulty === "medium");
      const sec2Hard = sec2Pool.filter((q) => q.difficulty === "hard");

      const sampledSec2 = [
        ...getRandomSample(sec2Easy, 4),
        ...getRandomSample(sec2Medium, 6),
        ...getRandomSample(sec2Hard, 2)
      ];

      // Essay Questions Pool (inside 151-200): 7 questions (2 Easy, 3 Medium, 2 Hard)
      const essayPool = insidePool.filter((q) => q.id.startsWith("lsd-c1-in-") && parseInt(q.id.split("-").pop()) >= 151);
      const essayEasy = essayPool.filter((q) => q.difficulty === "easy");
      const essayMedium = essayPool.filter((q) => q.difficulty === "medium");
      const essayHard = essayPool.filter((q) => q.difficulty === "hard");

      const sampledEssay = [
        ...getRandomSample(essayEasy, 2),
        ...getRandomSample(essayMedium, 3),
        ...getRandomSample(essayHard, 2)
      ];

      sampledInside = [...sampledSec1, ...sampledSec2, ...sampledEssay];
    } else {
      // Fallback: Draw 37 random questions from inside pool
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
    setBookmarks(new Set());
    setCurrentIndex(0);
    setElapsedTime(0);
    setTimeLeft(2700);
    setStep("quiz-run");
    localStorage.setItem("studymaster_user_name", name);
  };

  const handleResume = () => {
    if (savedState) {
      setName(savedState.name);
      setMode(savedState.mode);
      setSelectedChapterId(savedState.currentChapterId);
      setQuestions(savedState.questions);
      
      const restoredIdx = typeof savedState.currentIndex === "number" && savedState.currentIndex >= 0 && savedState.currentIndex < savedState.questions.length
        ? savedState.currentIndex
        : 0;
      setCurrentIndex(restoredIdx);
      
      setAnswers(savedState.answers);
      setElapsedTime(savedState.elapsedTime || 0);
      setTimeLeft(typeof savedState.timeLeft === "number" ? savedState.timeLeft : 2700);
      setBookmarks(new Set(savedState.bookmarks || []));
      setStep("quiz-run");
    }
  };

  const toggleBookmark = (qId) => {
    const next = new Set(bookmarks);
    if (next.has(qId)) {
      next.delete(qId);
      if (showToast) showToast("Đã bỏ đánh dấu câu hỏi ⭐️", "info");
    } else {
      next.add(qId);
      if (showToast) showToast("Đã đánh dấu câu hỏi ⭐", "success");
    }
    setBookmarks(next);
    saveQuizState(elapsedTime, timeLeft, next);
  };

  const handleSelectOption = (optIdx) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentIndex] = optIdx;
    setAnswers(updatedAnswers);
    saveQuizState(elapsedTime, timeLeft, bookmarks);

    if (mode === "immediate") {
      const isCorrect = optIdx === currentQuestion.answer;
      if (isCorrect) {
        playSoundEffect("correct");
      } else {
        playSoundEffect("incorrect");
        setShakeIndex(optIdx);
        setTimeout(() => setShakeIndex(-1), 500);
      }
    }
  };

  const handleNavigateQuestion = (direction) => {
    const nextIdx = currentIndex + direction;
    if (nextIdx >= 0 && nextIdx < questions.length) {
      setSlideDirection(direction);
      setCurrentIndex(nextIdx);
    } else if (nextIdx === questions.length) {
      confirmSubmit();
    }
  };

  const confirmSubmit = () => {
    const unanswered = answers.filter((ans) => ans === -1).length;
    const msg = unanswered > 0
      ? `Bạn còn ${unanswered} câu chưa hoàn thành. Bạn vẫn muốn nộp bài chứ?`
      : "Bạn có chắc chắn muốn nộp bài làm của mình không?";

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
    if (correct / (questions.length || 40) >= 0.8) {
      triggerConfetti();
    }
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
      return section.roman ? `Phần ${section.roman} › Mục ${sub.number}` : `Mục ${sub.number}`;
    }
    return section.roman ? `Phần ${section.roman}` : `Phần mở đầu`;
  };

  // Diagnostics calculations
  const calculateDiagnostics = () => {
    const diag = {};
    const chapter = chapters.find((ch) => ch.id === selectedChapterId);

    if (chapter) {
      chapter.sections.forEach((sec) => {
        diag[sec.id] = { 
          title: sec.roman ? `${sec.title} (Phần ${sec.roman})` : sec.title, 
          correct: 0, 
          total: 0 
        };
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

  const currentQuestion = questions[currentIndex];
  const radius = 56;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (displayedScore / (questions.length || 40)) * circumference;

  // Render check
  const isSetupWizard = step === "chapter-select" || step === "quiz-setup";

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8 select-text font-sans">
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20%, 60% { transform: translateX(-6px); }
          40%, 80% { transform: translateX(6px); }
        }
        .animate-shake {
          animation: shake 0.35s ease-in-out;
        }
        @keyframes glow-success {
          0%, 100% { box-shadow: 0 0 4px rgba(34, 197, 94, 0.2); }
          50% { box-shadow: 0 0 16px rgba(34, 197, 94, 0.5); }
        }
        .animate-glow-success {
          animation: glow-success 1.6s infinite;
        }
      `}</style>

      {/* SETUP WIZARD */}
      {isSetupWizard && (
        <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-850 p-6 md:p-8 shadow-xl space-y-8">
          
          {/* Progress Indicator */}
          <div className="max-w-md mx-auto">
            <div className="flex items-center justify-between relative px-2">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-stone-100 dark:bg-stone-800 -translate-y-1/2 -z-10" />
              <div 
                className="absolute top-1/2 left-0 h-0.5 bg-red-800 -translate-y-1/2 -z-10 transition-all duration-500" 
                style={{ width: `${((setupStep - 1) / 2) * 100}%` }}
              />

              {[
                { stepNum: 1, label: "Chọn chương" },
                { stepNum: 2, label: "Họ tên" },
                { stepNum: 3, label: "Cấu hình" }
              ].map((s) => {
                const isCompleted = s.stepNum < setupStep;
                const isActive = s.stepNum === setupStep;
                return (
                  <div key={s.stepNum} className="flex flex-col items-center space-y-1.5 bg-white dark:bg-stone-900 px-3 z-10">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border transition-all duration-300 ${
                      isCompleted 
                        ? "bg-red-800 border-red-800 text-white shadow-md" 
                        : isActive 
                        ? "bg-white border-red-800 text-red-800 shadow-md ring-4 ring-red-800/10" 
                        : "bg-white dark:bg-stone-900 border-stone-250 dark:border-stone-800 text-stone-400"
                    }`}>
                      {isCompleted ? "✓" : s.stepNum}
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider ${
                      isActive ? "text-red-800 font-extrabold" : isCompleted ? "text-stone-700 dark:text-stone-300" : "text-stone-400"
                    }`}>
                      {s.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div ref={wizardContainerRef}>
            {/* Step 1: Select Chapter */}
            {setupStep === 1 && (
              <div className="space-y-6">
                <div className="text-center">
                  <Award size={48} className="text-accent mx-auto mb-4" />
                  <h2 className="text-2xl md:text-3xl font-bold font-playfair mb-3 text-stone-900 dark:text-stone-100">
                    Trình Ôn Tập Đánh Giá Kiến Thức
                  </h2>
                  <p className="text-stone-600 dark:text-stone-400 text-sm md:text-base max-w-2xl mx-auto">
                    Vui lòng chọn chương học dưới đây để bắt đầu làm bài trắc nghiệm (đề thi gồm 40 câu chọn lọc ngẫu nhiên từ ngân hàng câu hỏi).
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  {chapters.map((ch) => {
                    const isReady = !!questionsMap[ch.id];
                    return (
                      <button
                        key={ch.id}
                        disabled={!isReady}
                        onClick={() => {
                          setSelectedChapterId(ch.id);
                          setSetupStep(2);
                        }}
                        className={`p-6 rounded-xl border text-left flex flex-col justify-between h-48 transition-all duration-300 ${
                          isReady
                            ? "bg-accent/5 hover:bg-accent/10 border-accent/20 cursor-pointer hover:shadow-lg hover:-translate-y-0.5"
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

                <div className="text-center pt-2">
                  <button
                    onClick={onClose}
                    className="px-6 py-2.5 rounded-lg border border-stone-300 dark:border-stone-850 text-stone-600 dark:text-stone-450 font-semibold hover:bg-stone-100 dark:hover:bg-stone-850 transition-colors duration-200 text-sm"
                  >
                    Quay lại đọc bài học
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Name Input */}
            {setupStep === 2 && (
              <div className="space-y-6 max-w-md mx-auto">
                <div className="text-center">
                  <User size={40} className="text-accent mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100">Họ Và Tên Người Học</h3>
                  <p className="text-xs text-stone-550 dark:text-stone-400 mt-1">
                    Cung cấp họ tên của bạn để lưu lịch sử làm bài và tham gia bảng xếp hạng.
                  </p>
                </div>

                <div>
                  <label htmlFor="name-input" className="block text-xs font-bold text-stone-700 dark:text-stone-300 uppercase tracking-wider mb-2">
                    Họ và tên của bạn
                  </label>
                  <div className="relative">
                    <User size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-455" />
                    <input
                      type="text"
                      id="name-input"
                      required
                      placeholder="Nhập tên của bạn..."
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-stone-250 dark:border-stone-800 bg-transparent text-sm text-stone-850 dark:text-stone-150 focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setSetupStep(1)}
                    className="flex-1 py-2.5 rounded-xl border border-stone-300 dark:border-stone-850 text-stone-600 dark:text-stone-400 text-sm font-semibold hover:bg-stone-100 dark:hover:bg-stone-850 transition-colors"
                  >
                    Quay lại
                  </button>
                  <button
                    type="button"
                    disabled={!name.trim()}
                    onClick={() => setSetupStep(3)}
                    className="flex-1 py-2.5 rounded-xl bg-accent hover:bg-accent/90 disabled:opacity-50 text-white dark:text-stone-950 font-bold text-sm transition-colors shadow-md flex items-center justify-center gap-1"
                  >
                    <span>Tiếp theo</span>
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Mode selection */}
            {setupStep === 3 && (
              <div className="space-y-6">
                <div className="text-center">
                  <Award size={40} className="text-accent mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100">Chọn Chế Độ Ôn Luyện</h3>
                  <p className="text-xs text-stone-550 dark:text-stone-400 mt-1">
                    Lựa chọn chế độ làm bài thi phù hợp với nhu cầu học tập của bạn.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setMode("immediate")}
                    className={`p-5 rounded-xl border text-left transition-all cursor-pointer ${
                      mode === "immediate"
                        ? "bg-accent/5 border-accent shadow-md scale-[1.01]"
                        : "bg-stone-50 dark:bg-stone-950 border-stone-200 dark:border-stone-850 opacity-80"
                    }`}
                  >
                    <div className="font-bold text-sm text-stone-900 dark:text-stone-100 mb-1 flex items-center gap-1.5">
                      <span>⚡</span>
                      <span>Xem giải thích ngay</span>
                    </div>
                    <div className="text-xs text-stone-550 dark:text-stone-400 leading-relaxed">
                      Hiển thị đáp án đúng/sai kèm giải thích chi tiết ngay lập tức sau khi bạn chọn lựa. Rất thích hợp để tự luyện tập và học bài.
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setMode("end")}
                    className={`p-5 rounded-xl border text-left transition-all cursor-pointer ${
                      mode === "end"
                        ? "bg-accent/5 border-accent shadow-md scale-[1.01]"
                        : "bg-stone-50 dark:bg-stone-950 border-stone-200 dark:border-stone-850 opacity-80"
                    }`}
                  >
                    <div className="font-bold text-sm text-stone-900 dark:text-stone-100 mb-1 flex items-center gap-1.5">
                      <span>⏱️</span>
                      <span>Xem sau khi nộp bài</span>
                    </div>
                    <div className="text-xs text-stone-550 dark:text-stone-400 leading-relaxed">
                      Giữ kín mọi đáp án cho tới khi bạn hoàn thành toàn bộ 40 câu trắc nghiệm. Phù hợp để làm đề thi thử nghiêm túc tự đánh giá năng lực.
                    </div>
                  </button>
                </div>

                <div className="flex gap-3 pt-4 flex-wrap">
                  <button
                    type="button"
                    onClick={() => setSetupStep(2)}
                    className="px-5 py-2.5 rounded-xl border border-stone-300 dark:border-stone-850 text-stone-600 dark:text-stone-400 text-sm font-semibold hover:bg-stone-100 dark:hover:bg-stone-850 transition-colors"
                  >
                    ◀ Quay lại
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep("all-questions")}
                    className="flex-1 min-w-[150px] py-2.5 rounded-xl border border-accent/30 text-accent hover:bg-accent/5 text-sm font-bold transition-colors cursor-pointer"
                  >
                    📝 Xem toàn bộ câu hỏi
                  </button>
                  <button
                    type="button"
                    onClick={startNewQuiz}
                    className="flex-1 min-w-[180px] py-2.5 rounded-xl bg-accent hover:bg-accent/90 text-white dark:text-stone-950 font-bold text-sm transition-colors shadow-md cursor-pointer flex items-center justify-center gap-1"
                  >
                    🚀 Bắt đầu làm bài (40 câu)
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* RESUME CONFIRM STATE */}
      {step === "resume-confirm" && savedState && (
        <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-850 p-6 md:p-8 shadow-xl max-w-xl mx-auto space-y-6">
          <h2 className="text-xl md:text-2xl font-bold text-accent flex items-center gap-2 mb-2 font-playfair">
            🔄 Phát hiện bài ôn luyện dở dang
          </h2>
          <p className="text-stone-600 dark:text-stone-400 text-sm">
            Hệ thống tìm thấy một bài ôn tập đang làm dở của bạn. Bạn có muốn tiếp tục tiến trình trước đó?
          </p>

          <div className="bg-stone-50 dark:bg-stone-950 p-5 rounded-2xl space-y-3.5 text-sm border border-stone-200 dark:border-stone-850">
            <div className="flex justify-between">
              <span className="text-stone-500 font-semibold">Người học:</span>
              <span className="font-bold text-stone-900 dark:text-stone-100">{savedState.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-500 font-semibold">Chương:</span>
              <span className="font-bold text-stone-900 dark:text-stone-100 text-right max-w-[280px] truncate">
                {chapters.find((c) => c.id === savedState.currentChapterId)?.title || savedState.currentChapterId}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-500 font-semibold">Chế độ:</span>
              <span className="font-bold text-stone-900 dark:text-stone-100">
                {savedState.mode === "immediate" ? "Giải thích ngay lập tức" : "Giải thích sau khi nộp bài"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-500 font-semibold">Tiến độ:</span>
              <span className="font-bold text-accent">
                {savedState.answers.filter((a) => a !== -1).length} / {savedState.questions.length} câu đã trả lời
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-500 font-semibold">Thời gian:</span>
              <span className="font-bold font-mono text-stone-900 dark:text-stone-100">{formatTime(savedState.elapsedTime)}</span>
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            <button
              onClick={handleResume}
              className="w-full py-3.5 rounded-xl bg-green-600 hover:bg-green-500 text-white font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-1.5"
            >
              <Play size={16} />
              <span>Tiếp tục làm bài thi</span>
            </button>
            <div className="grid grid-cols-2 gap-2.5">
              <button
                onClick={() => {
                  showConfirm({
                    title: "Làm bài thi mới",
                    message: "Làm bài mới sẽ xóa sạch toàn bộ dữ liệu đang làm dở hiện tại. Bạn chắc chắn chứ?",
                    type: "warning",
                    confirmText: "Làm bài mới",
                    cancelText: "Hủy",
                    onConfirm: () => {
                      clearQuizState();
                      setStep("chapter-select");
                      setSetupStep(1);
                    }
                  });
                }}
                className="py-3 rounded-xl border border-stone-300 dark:border-stone-850 text-stone-600 dark:text-stone-400 text-xs font-bold hover:bg-stone-100 dark:hover:bg-stone-850 transition-colors"
              >
                🔄 Làm bài mới
              </button>
              <button
                onClick={() => {
                  clearQuizState();
                  onClose();
                }}
                className="py-3 rounded-xl border border-stone-300 dark:border-stone-850 text-stone-600 dark:text-stone-400 text-xs font-bold hover:bg-stone-100 dark:hover:bg-stone-850 transition-colors"
              >
                🚪 Thoát ra
              </button>
            </div>
          </div>
        </div>
      )}

      {/* QUIZ ACTIVE RUNNING LAYOUT */}
      {step === "quiz-run" && questions.length > 0 && (
        <div className="flex flex-col md:flex-row gap-6 items-start relative pb-16 md:pb-0">
          
          {/* Main Question Panel */}
          <div className="flex-1 w-full space-y-4">
            <div ref={questionCardRef} className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-850 p-6 shadow-xl relative">
              
              {/* Header block info */}
              <div className="flex justify-between items-center border-b border-stone-150 dark:border-stone-850 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-stone-800 dark:text-stone-250 text-sm">
                    Câu hỏi {currentIndex + 1} / {questions.length}
                  </span>
                  
                  {/* Bookmark Button */}
                  <button 
                    onClick={() => toggleBookmark(currentQuestion.id)}
                    className="p-1.5 rounded-lg hover:bg-stone-50 dark:hover:bg-stone-955 text-stone-400 hover:text-amber-500 transition-all"
                    title="Đánh dấu câu hỏi này"
                  >
                    <Star 
                      size={18} 
                      className={bookmarks.has(currentQuestion.id) ? "fill-amber-400 text-amber-500 scale-110" : "text-stone-400"} 
                    />
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  {/* Sound control mini */}
                  <button 
                    onClick={toggleSound}
                    className="p-1.5 rounded-lg hover:bg-stone-50 dark:hover:bg-stone-955 text-stone-400 transition-colors"
                  >
                    {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
                  </button>

                  <span className="font-bold text-xs bg-stone-100 dark:bg-stone-955 text-stone-700 dark:text-stone-400 px-3 py-1 rounded-full flex items-center gap-1.5 border border-stone-200/60 dark:border-stone-800">
                    <Clock size={13} className="text-accent animate-pulse" />
                    <span className="font-mono text-stone-800 dark:text-stone-250">
                      {mode === "end" ? formatTime(timeLeft) : formatTime(elapsedTime)}
                    </span>
                  </span>
                </div>
              </div>

              {/* Progress bar visual indicator */}
              <div className="w-full bg-stone-100 dark:bg-stone-955 h-2 rounded-full overflow-hidden mb-6">
                <div
                  className="bg-red-800 h-full transition-all duration-300"
                  style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                />
              </div>

              {/* Question difficulty & section info */}
              <div className="flex items-center gap-2 mb-4 flex-wrap">
                <span className={`text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded ${
                  currentQuestion.difficulty === "easy" 
                    ? "bg-green-100 dark:bg-green-950/40 text-green-700 dark:text-green-400"
                    : currentQuestion.difficulty === "medium"
                    ? "bg-amber-100 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400"
                    : "bg-red-100 dark:bg-red-950/40 text-red-700 dark:text-red-400"
                }`}>
                  {currentQuestion.difficulty === "easy" ? "Dễ" : currentQuestion.difficulty === "medium" ? "Trung bình" : "Khó"}
                </span>

                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wide">
                  {currentQuestion.isOutside
                    ? "Kiến thức mở rộng (Ngoài giáo trình)"
                    : getSectionTitle(currentQuestion.sectionId, currentQuestion.subsectionId)}
                </span>
              </div>

              {/* Question Text */}
              <div className="text-stone-900 dark:text-stone-100 font-semibold text-base md:text-lg mb-6 leading-relaxed">
                {currentQuestion.question}
              </div>

              {/* Options list */}
              <div className="space-y-3">
                {currentQuestion.options.map((opt, oIdx) => {
                  const prefix = String.fromCharCode(65 + oIdx);
                  const isUserSelection = answers[currentIndex] === oIdx;
                  const isCorrectAns = currentQuestion.answer === oIdx;

                  let optClass = "border-stone-200 dark:border-stone-850 text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-955/30 hover:scale-[1.01] hover:shadow-sm";
                  let disabled = false;

                  if (mode === "immediate" && answers[currentIndex] !== -1) {
                    disabled = true;
                    if (isCorrectAns) {
                      optClass = "bg-green-500/10 border-green-500 text-green-700 dark:text-green-400 font-semibold animate-glow-success";
                    } else if (isUserSelection) {
                      optClass = "bg-red-500/10 border-red-500 text-red-700 dark:text-red-400 animate-shake";
                    } else {
                      optClass = "opacity-50 border-stone-200 dark:border-stone-850 text-stone-400";
                    }
                  } else {
                    if (isUserSelection) {
                      optClass = "bg-accent/5 border-accent text-accent font-bold scale-[1.01] shadow-sm";
                    }
                  }

                  // Apply inline shaker state if applicable
                  if (shakeIndex === oIdx) {
                    optClass = "bg-red-500/10 border-red-500 text-red-700 dark:text-red-400 animate-shake";
                  }

                  return (
                    <button
                      key={oIdx}
                      disabled={disabled}
                      onClick={() => handleSelectOption(oIdx)}
                      className={`w-full flex items-baseline gap-4 px-4 py-3 rounded-xl border text-left transition-all duration-150 text-sm cursor-pointer ${optClass}`}
                    >
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-extrabold ${
                        isUserSelection ? "bg-accent text-white dark:text-stone-950" : "bg-stone-100 dark:bg-stone-955 text-stone-505"
                      }`}>
                        {prefix}
                      </span>
                      <span className="flex-1 leading-relaxed">{opt}</span>
                    </button>
                  );
                })}
              </div>

              {/* Immediate Mode Explanation Panel */}
              {mode === "immediate" && answers[currentIndex] !== -1 && (
                <div className={`mt-6 p-5 rounded-2xl text-xs md:text-sm border transition-all duration-300 ${
                  answers[currentIndex] === currentQuestion.answer
                    ? "bg-green-500/5 border-green-500/20 text-green-800 dark:text-green-400"
                    : "bg-red-500/5 border-red-500/20 text-red-800 dark:text-red-455"
                }`}>
                  <div className="flex justify-between items-center flex-wrap gap-2 font-bold mb-2">
                    <span className="text-xs md:text-sm">
                      {answers[currentIndex] === currentQuestion.answer
                        ? "🟢 Bạn trả lời chính xác!"
                        : `🔴 Trả lời sai (Đáp án đúng là ${String.fromCharCode(65 + currentQuestion.answer)})`}
                    </span>
                  </div>
                  <div className="leading-relaxed mt-2.5 pl-3 border-l-2 border-accent/40 text-stone-600 dark:text-stone-400">
                    <strong>Giải thích chi tiết:</strong> {currentQuestion.explanation || "Không có giải thích chi tiết."}
                  </div>
                </div>
              )}
            </div>

            {/* Back / Next bottom navigation */}
            <div className="flex justify-between gap-3">
              <button
                disabled={currentIndex === 0}
                onClick={() => handleNavigateQuestion(-1)}
                className="px-5 py-3 rounded-xl border border-stone-300 dark:border-stone-800 text-stone-600 dark:text-stone-400 text-sm font-semibold hover:bg-stone-100 dark:hover:bg-stone-850 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                ◀ Câu trước
              </button>
              
              <button
                onClick={() => handleNavigateQuestion(1)}
                className="px-6 py-3 rounded-xl bg-accent hover:bg-accent/90 text-white dark:text-stone-950 font-bold text-sm transition-colors shadow-md cursor-pointer flex items-center gap-1.5"
              >
                <span>{currentIndex === questions.length - 1 ? "Hoàn tất 🏁" : "Câu tiếp theo"}</span>
                {currentIndex !== questions.length - 1 && <ChevronRight size={16} />}
              </button>
            </div>
          </div>

          {/* DESKTOP SIDEBAR PANEL */}
          <div className="hidden md:block w-72 bg-white dark:bg-stone-900 border border-stone-250 dark:border-stone-850 rounded-2xl p-5 shadow-xl sticky top-24 space-y-5">
            <div className="flex justify-between items-center border-b border-stone-150 dark:border-stone-850 pb-2.5">
              <h3 className="font-bold text-sm text-stone-850 dark:text-stone-200 flex items-center gap-1.5">
                <Award size={16} className="text-accent" />
                <span>Bảng tiến trình</span>
              </h3>
              <button 
                onClick={toggleSound} 
                className="p-1.5 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-850 text-stone-400 transition-colors"
                title={soundEnabled ? "Tắt âm thanh" : "Bật âm thanh"}
              >
                {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
              </button>
            </div>

            {/* Countdown / Stopwatch section */}
            <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-955 border border-stone-200 dark:border-stone-850/70 flex flex-col items-center text-center space-y-1">
              <span className="text-[10px] text-stone-450 font-bold uppercase tracking-wider">
                {mode === "end" ? "Thời gian còn lại" : "Thời gian đã dùng"}
              </span>
              <div className={`text-2xl font-black font-mono flex items-center gap-1.5 ${
                mode === "end" && timeLeft <= 300 ? "text-red-600 animate-pulse" : "text-stone-850 dark:text-stone-200"
              }`}>
                <Clock size={20} className={mode === "end" && timeLeft <= 300 ? "text-red-600 animate-bounce" : "text-accent"} />
                <span>{mode === "end" ? formatTime(timeLeft) : formatTime(elapsedTime)}</span>
              </div>
            </div>

            <div className="grid grid-cols-5 gap-2 max-h-64 overflow-y-auto pr-1">
              {questions.map((q, idx) => {
                const isSelected = answers[idx] !== -1;
                const isActive = currentIndex === idx;
                const isBookmarked = bookmarks.has(q.id);

                let gridItemClass = "border-stone-200 dark:border-stone-800 text-stone-500 dark:text-stone-450 hover:border-accent";
                if (isActive) {
                  gridItemClass = "border-accent text-accent font-extrabold ring-1 ring-accent bg-accent/5";
                } else if (isSelected) {
                  if (mode === "immediate") {
                    gridItemClass = answers[idx] === q.answer
                      ? "bg-green-500/10 border-green-500 text-green-700 dark:text-green-400 font-bold"
                      : "bg-red-500/10 border-red-500 text-red-700 dark:text-red-400 font-bold";
                  } else {
                    gridItemClass = "bg-stone-100 dark:bg-stone-955 border-stone-350 dark:border-stone-850 text-stone-800 dark:text-stone-200 font-semibold";
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrentIndex(idx);
                      saveQuizState(elapsedTime, timeLeft, bookmarks);
                    }}
                    className={`h-9 rounded-lg border text-xs flex flex-col items-center justify-center font-mono relative transition-all duration-200 cursor-pointer ${gridItemClass}`}
                  >
                    <span>{idx + 1}</span>
                    {isBookmarked && (
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 absolute top-1 right-1" />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-stone-150 dark:border-stone-850 space-y-2 text-[10px] text-stone-400 font-bold">
              <div className="flex gap-2 items-center">
                <span className="w-3 h-3 rounded bg-accent/5 border border-accent" />
                <span>Câu đang xem</span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="w-3 h-3 rounded bg-stone-100 dark:bg-stone-955 border border-stone-350 dark:border-stone-850" />
                <span>Câu đã làm</span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="w-3 h-3 rounded border border-dashed border-amber-500 bg-amber-500/10" />
                <span>Câu được đánh dấu (⭐)</span>
              </div>
            </div>

            <button
              onClick={confirmSubmit}
              className="w-full py-3.5 rounded-xl bg-red-800 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md shadow-red-900/20"
            >
              📥 Nộp bài hoàn thành
            </button>
          </div>

          {/* MOBILE BOTTOM NAVIGATION BAR */}
          <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-stone-900/95 backdrop-blur-md border-t border-stone-250 dark:border-stone-800 px-4 py-3 flex items-center justify-between z-30 shadow-lg">
            <button
              disabled={currentIndex === 0}
              onClick={() => handleNavigateQuestion(-1)}
              className="p-2.5 rounded-lg border border-stone-300 dark:border-stone-850 text-stone-600 dark:text-stone-400 disabled:opacity-40"
            >
              <ChevronLeft size={20} />
            </button>
            
            <button
              onClick={() => setShowMobileGrid(true)}
              className="px-4 py-2 bg-stone-100 dark:bg-stone-850 text-stone-700 dark:text-stone-300 rounded-lg text-xs font-bold border border-stone-200 dark:border-stone-800 flex items-center gap-1.5"
            >
              <span>Câu {currentIndex + 1}/{questions.length}</span>
              <ChevronUp size={14} className="text-stone-450" />
            </button>

            <span className="font-mono text-xs font-bold bg-stone-50 dark:bg-stone-950 px-3 py-1.5 rounded-lg border border-stone-250 dark:border-stone-800 text-stone-700 dark:text-stone-300 flex items-center gap-1">
              <Clock size={12} className="text-accent animate-pulse" />
              <span>{mode === "end" ? formatTime(timeLeft) : formatTime(elapsedTime)}</span>
            </span>

            <button
              onClick={() => toggleBookmark(currentQuestion.id)}
              className="p-2.5 rounded-lg border border-stone-300 dark:border-stone-850 text-stone-600 dark:text-stone-450"
            >
              <Star size={20} className={bookmarks.has(currentQuestion.id) ? "fill-amber-400 text-amber-500" : "text-stone-400"} />
            </button>

            <button
              onClick={() => handleNavigateQuestion(1)}
              className="p-2.5 rounded-lg bg-accent text-white dark:text-stone-950"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* MOBILE DRAWER QUESTIONS GRID */}
          {showMobileGrid && (
            <div className="fixed inset-0 bg-black/60 z-40 md:hidden flex items-end animate-fade-in" onClick={() => setShowMobileGrid(false)}>
              <div className="w-full bg-white dark:bg-stone-900 rounded-t-3xl p-6 space-y-4 max-h-[85vh] overflow-y-auto transform translate-y-0 transition-transform duration-300" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-center border-b border-stone-100 dark:border-stone-850 pb-3">
                  <h3 className="font-bold text-stone-900 dark:text-stone-100 text-sm">Danh Sách Câu Hỏi</h3>
                  <button onClick={() => setShowMobileGrid(false)} className="text-stone-400 hover:text-stone-600 text-xs font-bold">Đóng ✕</button>
                </div>
                <div className="grid grid-cols-5 gap-2.5">
                  {questions.map((q, idx) => {
                    const isSelected = answers[idx] !== -1;
                    const isActive = currentIndex === idx;
                    const isBookmarked = bookmarks.has(q.id);

                    let gridItemClass = "border-stone-200 dark:border-stone-800 text-stone-500 dark:text-stone-455 hover:border-accent";
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
                          saveQuizState(elapsedTime, timeLeft, bookmarks);
                          setShowMobileGrid(false);
                        }}
                        className={`h-11 rounded-xl border text-xs flex flex-col items-center justify-center font-mono relative transition-all duration-200 cursor-pointer ${gridItemClass}`}
                      >
                        <span>{idx + 1}</span>
                        {isBookmarked && (
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 absolute top-1 right-1" />
                        )}
                      </button>
                    );
                  })}
                </div>
                <button
                  onClick={() => {
                    setShowMobileGrid(false);
                    confirmSubmit();
                  }}
                  className="w-full py-3.5 rounded-xl bg-red-700 hover:bg-red-650 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md mt-4"
                >
                  📥 Nộp bài hoàn thành
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* RESULTS DISPLAY PAGE */}
      {step === "results" && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-850 p-6 md:p-8 shadow-xl text-center space-y-6">
            
            <div className="space-y-1">
              <h2 className="text-2xl md:text-3xl font-bold font-playfair text-stone-900 dark:text-stone-100">
                🏆 Kết Quả Ôn Luyện Đánh Giá
              </h2>
              <p className="text-stone-500 dark:text-stone-400 text-sm">
                Chúc mừng <strong>{name}</strong> đã hoàn thành bài kiểm tra đánh giá kiến thức!
              </p>
            </div>

            {/* Score Circle animated layout */}
            <div className="relative w-40 h-40 mx-auto flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="80"
                  cy="80"
                  r={radius}
                  className="stroke-stone-100 dark:stroke-stone-800/80 fill-none"
                  strokeWidth="8"
                />
                <circle
                  cx="80"
                  cy="80"
                  r={radius}
                  className="stroke-red-800 fill-none transition-all duration-500 ease-out"
                  strokeWidth="8"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute flex flex-col justify-center items-center">
                <span className="text-3xl font-black text-stone-900 dark:text-stone-100">
                  {displayedScore}/{questions.length}
                </span>
                <span className="text-[10px] text-stone-400 font-bold uppercase mt-0.5">Điểm số</span>
              </div>
            </div>

            {/* Stats Cards grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-lg mx-auto py-2">
              <div className="p-3 bg-stone-50 dark:bg-stone-955 border border-stone-200 dark:border-stone-850 rounded-xl">
                <div className="text-lg font-bold text-stone-900 dark:text-stone-100 font-mono">
                  {formatTime(elapsedTime)}
                </div>
                <div className="text-[10px] text-stone-500 font-bold uppercase mt-1">Thời gian làm</div>
              </div>
              <div className="p-3 bg-stone-50 dark:bg-stone-955 border border-stone-200 dark:border-stone-850 rounded-xl">
                <div className="text-lg font-bold text-stone-900 dark:text-stone-100 font-mono">
                  {Math.round((displayedScore / (questions.length || 1)) * 100)}%
                </div>
                <div className="text-[10px] text-stone-500 font-bold uppercase mt-1">Tỷ lệ chính xác</div>
              </div>
              <div className="col-span-2 md:col-span-1 p-3 bg-stone-50 dark:bg-stone-955 border border-stone-200 dark:border-stone-850 rounded-xl">
                <div className="text-lg font-bold text-stone-900 dark:text-stone-100 flex items-center justify-center gap-1">
                  <span>⭐️</span>
                  <span className="font-mono">{bookmarks.size}</span>
                </div>
                <div className="text-[10px] text-stone-500 font-bold uppercase mt-1">Câu lưu trữ</div>
              </div>
            </div>

            {/* Diagnostics progress bars list */}
            <div className="text-left max-w-xl mx-auto space-y-4 pt-4 border-t border-stone-100 dark:border-stone-850">
              <h3 className="font-bold text-base text-stone-900 dark:text-stone-100 flex items-center gap-2">
                <span>📊 Phân tích hiệu suất theo mục</span>
              </h3>
              
              {Object.keys(calculateDiagnostics()).map((key) => {
                const data = calculateDiagnostics()[key];
                if (data.total === 0) return null;

                const percent = Math.round((data.correct / data.total) * 100) || 0;
                let barColor = "bg-red-500";
                let feedback = "⚠️ Cần chú trọng ôn tập sâu hơn phần lý thuyết này.";

                if (percent >= 80) {
                  barColor = "bg-green-500 animate-pulse-green";
                  feedback = "🌟 Hoàn hảo! Bạn đã nắm rất chắc kiến thức mục này.";
                } else if (percent >= 50) {
                  barColor = "bg-amber-500";
                  feedback = "💡 Tốt! Hãy củng cố thêm các câu hỏi ở độ khó Cao.";
                }

                return (
                  <div key={key} className="space-y-1 bg-stone-50/50 dark:bg-stone-955/20 p-3 rounded-xl border border-stone-200/50 dark:border-stone-850/50">
                    <div className="flex justify-between text-xs font-bold text-stone-700 dark:text-stone-300">
                      <span>{data.title}</span>
                      <span>
                        {data.correct} / {data.total} câu ({percent}%)
                      </span>
                    </div>
                    <div className="w-full bg-stone-100 dark:bg-stone-955 h-2.5 rounded-full overflow-hidden">
                      <div
                        className={`diagnostic-bar-progress h-full ${barColor}`}
                        style={{ width: "0%" }}
                        data-target-width={`${percent}%`}
                      />
                    </div>
                    <div className="text-[10px] text-stone-400 leading-normal">{feedback}</div>
                  </div>
                );
              })}
            </div>

            {/* Leaderboard Table list */}
            <div className="text-left max-w-2xl mx-auto space-y-4 pt-4 border-t border-stone-100 dark:border-stone-850">
              <h3 className="font-bold text-base text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
                <span>🏅 Bảng xếp hạng lượt làm bài</span>
              </h3>
              
              <div className="overflow-hidden rounded-xl border border-stone-200 dark:border-stone-800">
                <table className="w-full text-sm text-stone-600 dark:text-stone-400 text-left border-collapse">
                  <thead className="bg-stone-50 dark:bg-stone-955 text-xs font-bold text-stone-500 uppercase">
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
                        <td colSpan="5" className="px-4 py-8 text-center text-stone-400 italic">
                          Đang tải dữ liệu bảng xếp hạng...
                        </td>
                      </tr>
                    ) : rankings.length === 0 ? (
                      <tr>
                        <td colSpan="5" className="px-4 py-8 text-center text-stone-400 italic">
                          Chưa có kết quả xếp hạng.
                        </td>
                      </tr>
                    ) : (
                      rankings.map((r, rIdx) => {
                        const isCurrent =
                          r.name === name && r.score === latestScore && r.time === elapsedTime;
                        
                        let medal = `#${rIdx + 1}`;
                        if (rIdx === 0) medal = "🥇";
                        else if (rIdx === 1) medal = "🥈";
                        else if (rIdx === 2) medal = "🥉";

                        return (
                          <tr
                            key={rIdx}
                            className={`leaderboard-row hover:bg-stone-50/50 dark:hover:bg-stone-955/30 transition-colors ${
                              isCurrent ? "bg-red-800/10 dark:bg-red-800/5 font-semibold text-red-800" : ""
                            }`}
                          >
                            <td className="px-4 py-3 text-center font-extrabold text-base">{medal}</td>
                            <td className="px-4 py-3 font-semibold text-stone-800 dark:text-stone-200">{r.name}</td>
                            <td className="px-4 py-3 text-center font-mono font-bold">{r.score}/{r.total}</td>
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

            {/* Actions button strip */}
            <div className="flex justify-center gap-3 flex-wrap pt-4 border-t border-stone-100 dark:border-stone-850">
              <button
                onClick={onClose}
                className="px-5 py-3 rounded-xl border border-stone-300 dark:border-stone-850 text-stone-600 dark:text-stone-455 text-sm font-semibold hover:bg-stone-100 dark:hover:bg-stone-850 transition-colors"
              >
                📖 Quay lại đọc bài
              </button>
              <button
                onClick={() => {
                  setStep("chapter-select");
                  setSetupStep(1);
                  setRankings([]);
                }}
                className="px-5 py-3 rounded-xl border border-stone-300 dark:border-stone-850 text-stone-600 dark:text-stone-455 text-sm font-semibold hover:bg-stone-100 dark:hover:bg-stone-850 transition-colors"
              >
                📚 Chọn chương khác
              </button>
              <button
                onClick={() => {
                  setStep("quiz-setup");
                  setSetupStep(3); // Go straight to start quiz configuration
                  setRankings([]);
                }}
                className="px-6 py-3 rounded-xl bg-accent hover:bg-accent/90 text-white dark:text-stone-950 font-bold text-sm transition-colors shadow-md cursor-pointer"
              >
                🔄 Làm lại chương này
              </button>
            </div>
          </div>

          {/* End Mode Review Answers Container */}
          {mode === "end" && (
            <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-255 dark:border-stone-850 p-6 shadow-xl space-y-6">
              <h3 className="font-bold text-lg text-stone-900 dark:text-stone-100 border-b border-stone-100 dark:border-stone-850 pb-3 flex items-center gap-2">
                <span>🔎 Xem lại toàn bộ đáp án</span>
              </h3>
              
              <div className="space-y-6">
                {questions.map((q, idx) => {
                  const isCorrect = answers[idx] === q.answer;
                  const isBookmarked = bookmarks.has(q.id);

                  return (
                    <div
                      key={idx}
                      className="p-5 rounded-xl border border-stone-200 dark:border-stone-850 space-y-3 relative hover:bg-stone-50/20 dark:hover:bg-stone-955/20 transition-colors"
                    >
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-xs bg-stone-100 dark:bg-stone-955 text-stone-700 dark:text-stone-455 px-2 py-0.5 rounded border border-stone-200/50 dark:border-stone-800">
                            Câu {idx + 1}
                          </span>
                          <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded ${
                            isCorrect 
                              ? "bg-green-100 dark:bg-green-950/60 text-green-700 dark:text-green-450" 
                              : "bg-red-100 dark:bg-red-950/60 text-red-700 dark:text-red-400"
                          }`}>
                            {isCorrect ? "Chính xác" : "Chưa đúng"}
                          </span>
                          <span className="text-[10px] font-bold text-stone-400 uppercase">
                            {q.isOutside ? "Ngoài giáo trình" : getSectionTitle(q.sectionId, q.subsectionId)}
                          </span>
                        </div>

                        {/* Bookmark indicator toggle inside result review */}
                        <button 
                          onClick={() => toggleBookmark(q.id)}
                          className="text-stone-400 hover:text-amber-500"
                        >
                          <Star size={16} className={isBookmarked ? "fill-amber-400 text-amber-500" : "text-stone-400"} />
                        </button>
                      </div>

                      <div className="text-stone-900 dark:text-stone-100 font-semibold text-sm leading-relaxed">
                        {q.question}
                      </div>

                      <div className="space-y-2 text-xs">
                        <div className={`p-2.5 rounded-xl border ${
                          isCorrect 
                            ? "bg-green-500/5 border-green-500/20 text-green-700 dark:text-green-450" 
                            : "bg-red-500/5 border-red-500/20 text-red-800 dark:text-red-405"
                        }`}>
                          <strong>Câu trả lời của bạn:</strong> {answers[idx] !== -1 ? q.options[answers[idx]] : "Chưa chọn đáp án"}
                        </div>
                        {!isCorrect && (
                          <div className="p-2.5 rounded-xl border bg-green-500/5 border-green-500/20 text-green-700 dark:text-green-450">
                            <strong>Đáp án đúng:</strong> {q.options[q.answer]}
                          </div>
                        )}
                      </div>

                      <div className="p-3.5 rounded-xl bg-accent/5 border border-accent/10 text-stone-600 dark:text-stone-400 text-xs leading-relaxed mt-2 pl-3 border-l-2 border-accent/40">
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

      {/* ALL QUESTIONS VIEW STUDY MODE */}
      {step === "all-questions" && questionsMap[selectedChapterId] && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-850 p-6 md:p-8 shadow-xl text-center space-y-4">
            <BookOpenText size={48} className="text-accent mx-auto mb-2" />
            <h2 className="text-2xl md:text-3xl font-bold font-playfair text-stone-900 dark:text-stone-100">
              📖 Trọn Bộ Câu Hỏi Ôn Tập
            </h2>
            <p className="text-xs text-accent font-bold uppercase tracking-wider">
              {chapters.find((c) => c.id === selectedChapterId)?.title}
            </p>

            <div className="flex justify-center gap-3">
              <button
                onClick={() => {
                  setStep("quiz-setup");
                  setSetupStep(3);
                }}
                className="px-5 py-2.5 rounded-xl border border-stone-300 dark:border-stone-850 text-stone-600 dark:text-stone-400 text-sm font-semibold hover:bg-stone-100 dark:hover:bg-stone-850 transition-colors"
              >
                ◀ Cấu hình thi
              </button>
              <button
                onClick={() => {
                  setStep("quiz-setup");
                  startNewQuiz();
                }}
                className="px-6 py-2.5 rounded-xl bg-accent hover:bg-accent/90 text-white dark:text-stone-950 font-bold text-sm transition-colors shadow-md cursor-pointer"
              >
                🚀 Bắt đầu thi (40 câu)
              </button>
            </div>
          </div>

          {/* List of all questions in this chapter */}
          <div className="space-y-6">
            {[...(questionsMap[selectedChapterId].inside || []), ...(questionsMap[selectedChapterId].outside || [])].map((q, idx) => {
              const diffText = q.difficulty === "easy" ? "Dễ" : q.difficulty === "medium" ? "Trung bình" : "Khó";
              const diffClass =
                q.difficulty === "easy"
                  ? "bg-green-100 dark:bg-green-950/60 text-green-700 dark:text-green-400"
                  : q.difficulty === "medium"
                  ? "bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400"
                  : "bg-red-100 dark:bg-red-950/60 text-red-700 dark:text-red-400";

              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-stone-900 p-6 rounded-2xl border border-stone-200 dark:border-stone-850 space-y-4 shadow-md"
                >
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-bold text-xs bg-stone-100 dark:bg-stone-950 text-stone-700 dark:text-stone-450 px-2.5 py-0.5 rounded border border-stone-200 dark:border-stone-800 font-mono">
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
                          className={`flex items-baseline gap-3 px-3 py-2.5 rounded-xl border text-xs leading-normal ${
                            isCorrect
                              ? "bg-green-500/10 border-green-500 text-green-700 dark:text-green-400 font-semibold"
                              : "border-stone-100 dark:border-stone-850 text-stone-500 dark:text-stone-400 opacity-80"
                          }`}
                        >
                          <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-extrabold ${
                            isCorrect ? "bg-green-500 text-white" : "bg-stone-100 dark:bg-stone-950 text-stone-505"
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
                setSetupStep(3);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="px-8 py-3.5 rounded-xl bg-accent hover:bg-accent/90 text-white dark:text-stone-950 font-bold text-sm transition-colors shadow-md cursor-pointer"
            >
              🚀 Bắt đầu làm bài thi (40 câu)
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
