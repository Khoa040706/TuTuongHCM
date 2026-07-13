/* eslint-disable react-hooks/exhaustive-deps, @next/next/no-img-element */
"use client";
import React, { useState, useEffect, useRef } from "react";
import { Menu, ArrowUp, ChevronDown, Eye, EyeOff, Lock, User, Mail, ShieldAlert, Check, X, ArrowLeft, AlertTriangle, Info, CheckCircle2, HelpCircle, XCircle, Trash2, Search, Download, Plus, BarChart3, Users, KeyRound, Unlock, MousePointer, Edit2, Highlighter, Eraser } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window === "undefined") {
  global.localStorage = {
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {},
    clear: () => {},
    key: () => null,
    length: 0
  };
  global.sessionStorage = {
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {},
    clear: () => {},
    key: () => null,
    length: 0
  };
}

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}
import Sidebar from "../components/Sidebar";
import { getSubsectionMdx } from "./actions/content";
import ContentRenderer from "../components/ContentRenderer";
import Quiz from "../components/Quiz";
import ErrorBoundary from "../components/ErrorBoundary";
import DrawingCanvas from "../components/DrawingCanvas";

import ProfileModal from "../components/ProfileModal";
import { subjects } from "../data/index";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../lib/firebase";

// Custom premium Google SVG icon
const GoogleIcon = ({ size = 18, className = "" }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      fill="#4285F4"
      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v3.92h6.69a5.74 5.74 0 0 1-2.48 3.77v3.13h3.97c2.33-2.14 3.56-5.3 3.56-8.75z"
    />
    <path
      fill="#34A853"
      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.97-3.13c-1.1.74-2.52 1.18-3.96 1.18-3.05 0-5.63-2.06-6.55-4.83H1.47v3.23A11.99 11.99 0 0 0 12 24z"
    />
    <path
      fill="#FBBC05"
      d="M5.45 14.31A7.16 7.16 0 0 1 5 12c0-.81.14-1.59.39-2.31V6.47H1.47a11.99 11.99 0 0 0 0 11.06l3.98-3.22z"
    />
    <path
      fill="#EA4335"
      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.43-3.43A11.99 11.99 0 0 0 1.47 6.47l3.98 3.22c.92-2.77 3.5-4.83 6.55-4.83z"
    />
  </svg>
);

export default function Page() {
  const theme = "light";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof document !== "undefined") {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // App routing flow steps: "login", "register", "forgot-password", "subject-select", "study"
  const [appStep, setAppStepRaw] = useState("login");
  const [showAuthOverlay, setShowAuthOverlay] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
  const [selectedSubjectId, setSelectedSubjectId] = useState("tu-tuong-hcm");
  
  // Profile & Avatar states
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [currentUserAvatar, setCurrentUserAvatar] = useState("");
  
  // Navigation & Study states
  const [activeSubsectionId, setActiveSubsectionId] = useState("");
  const [activeMdxSource, setActiveMdxSource] = useState(null);
  const [loadingMdx, setLoadingMdx] = useState(false);
  const [isQuizMode, setIsQuizModeRaw] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // Note-taking tool states
  const [activeTool, setActiveTool] = useState("cursor");
  const [activeColor, setActiveColor] = useState("rgba(217, 119, 6, 0.2)");
  const [highlights, setHighlights] = useState([]);
  const [reRenderKey, setReRenderKey] = useState(0);

  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll and Storytelling states
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(700);
  const [showHero, setShowHero] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [typedText, setTypedText] = useState("");

  // Custom Toast State
  const [toast, setToast] = useState(null);
  
  // Custom Confirm Modal State
  const [confirmConfig, setConfirmConfig] = useState(null);

  const [isMobileToolbarOpen, setIsMobileToolbarOpen] = useState(false);
  const [isAdminSidebarOpen, setIsAdminSidebarOpen] = useState(false);

  // Google Authentication first-time setup state variables
  const [showGoogleRegisterModal, setShowGoogleRegisterModal] = useState(false);
  const [googleUserTemp, setGoogleUserTemp] = useState(null);
  const [googleUsername, setGoogleUsername] = useState("");
  const [googlePassword, setGooglePassword] = useState("");
  const [googleConfirmPassword, setGoogleConfirmPassword] = useState("");
  const [showGooglePassword, setShowGooglePassword] = useState(false);

  const penColors = [
    { value: "#EF4444", label: "🔴" },
    { value: "#EAB308", label: "🟡" },
    { value: "#22C55E", label: "🟢" }
  ];

  const hlColors = [
    { value: "rgba(217, 119, 6, 0.2)", label: "🟡", preview: "#d97706" },
    { value: "rgba(244, 63, 94, 0.22)", label: "💗", preview: "#f43f5e" },
    { value: "rgba(34, 197, 94, 0.22)", label: "🟢", preview: "#22c55e" }
  ];

  const setIsQuizMode = (val) => {
    if (val === true) {
      if (contentContainerRef.current) {
        clearDomHighlights(contentContainerRef.current);
      }
    }
    setIsQuizModeRaw(val);
  };

  const setAppStep = (newStep) => {
    if (appStep === "study" && newStep !== "study") {
      if (contentContainerRef.current) {
        clearDomHighlights(contentContainerRef.current);
      }
    }
    setAppStepRaw(newStep);
  };

  const showToast = (message, type = "info") => {
    const id = Date.now();
    setToast({ id, message, type });
  };

  const showConfirm = ({ title, message, onConfirm, onCancel, confirmText = "Đồng ý", cancelText = "Hủy", type = "confirm" }) => {
    setConfirmConfig({
      title,
      message,
      confirmText,
      cancelText,
      type,
      onConfirm: () => {
        if (onConfirm) onConfirm();
        setConfirmConfig(null);
      },
      onCancel: () => {
        if (onCancel) onCancel();
        setConfirmConfig(null);
      }
    });
  };

  const showAlert = ({ title, message, type = "warning" }) => {
    setConfirmConfig({
      title,
      message,
      confirmText: "Đóng",
      type,
      onConfirm: () => {
        setConfirmConfig(null);
      }
    });
  };

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => {
      setToast(null);
    }, 3000);
    return () => clearTimeout(timer);
  }, [toast]);

  // Refs
  const contentContainerRef = useRef(null);
  const onClearRef = useRef(null);
  const isManualScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef(null);
  const particlesCanvasRef = useRef(null);
  const landingContainerRef = useRef(null);
  const subjectGridRef = useRef(null);
  const touchStartYRef = useRef(0);

  // Login & Register Form inputs
  const [loginUser, setLoginUser] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPass, setShowPass] = useState(false);
  
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPass, setRegPass] = useState("");
  const [regConfirmPass, setRegConfirmPass] = useState("");
  const [showRegPass, setShowRegPass] = useState(false);
  
  const [forgotEmail, setForgotEmail] = useState("");
  const [showGooglePopup, setShowGooglePopup] = useState(false);

  // Admin Dashboard States
  const [adminTab, setAdminTab] = useState("overview");
  const [adminSearchQuery, setAdminSearchQuery] = useState("");
  const [adminUsers, setAdminUsers] = useState([]);
  const [adminNewUser, setAdminNewUser] = useState("");
  const [adminNewEmail, setAdminNewEmail] = useState("");
  const [adminNewPass, setAdminNewPass] = useState("");
  const [adminNewConfirmPass, setAdminNewConfirmPass] = useState("");
  const [adminSelectedUser, setAdminSelectedUser] = useState(null);
  const [adminShowAddUserModal, setAdminShowAddUserModal] = useState(false);
  const [adminShowChangePassModal, setAdminShowChangePassModal] = useState(false);
  const [adminChangePassUser, setAdminChangePassUser] = useState(null);
  const [adminChangeNewPass, setAdminChangeNewPass] = useState("");
  const [adminChangeConfirmPass, setAdminChangeConfirmPass] = useState("");
  const [adminLogs, setAdminLogs] = useState([]);
  const [showDrawerDetail, setShowDrawerDetail] = useState(false);

  const loadAdminData = () => {
    if (typeof window === "undefined") return;
    
    let storedUsers = [];
    try {
      storedUsers = JSON.parse(localStorage.getItem("studymaster_users") || "[]");
    } catch (e) {
      storedUsers = [];
    }
    
    if (storedUsers.length === 0) {
      storedUsers = [
        { username: "hocsinh1", email: "student1@gmail.com", password: "Student@123", createdAt: Date.now() - 5 * 24 * 3600 * 1000 },
        { username: "nguyenvana", email: "vana@gmail.com", password: "Student@123", createdAt: Date.now() - 3 * 24 * 3600 * 1000 },
        { username: "tranthib", email: "thib@gmail.com", password: "Student@123", createdAt: Date.now() - 1 * 24 * 3600 * 1000 }
      ];
      localStorage.setItem("studymaster_users", JSON.stringify(storedUsers));
    }
    
    setAdminUsers(storedUsers);
    
    let logs = [];
    try {
      logs = JSON.parse(localStorage.getItem("studymaster_admin_logs") || "[]");
    } catch (e) {
      logs = [];
    }
    
    if (logs.length === 0) {
      logs = [
        { id: 1, user: "nguyenvana", action: "Hoàn thành bài thi môn Lịch sử Đảng", time: "5 phút trước", score: 36, total: 40 },
        { id: 2, user: "tranthib", action: "Đạt điểm 40/40 môn Tư tưởng HCM", time: "2 giờ trước", score: 40, total: 40 },
        { id: 3, user: "hocsinh1", action: "Hoàn thành bài thi môn Tư tưởng HCM", time: "1 ngày trước", score: 28, total: 40 }
      ];
      localStorage.setItem("studymaster_admin_logs", JSON.stringify(logs));
    }
    setAdminLogs(logs);
  };

  useEffect(() => {
    if (appStep === "admin-dashboard") {
      loadAdminData();
    }
  }, [appStep]);

  const writeAdminLog = (actionUser, actionDescription) => {
    let currentLogs = [];
    try {
      currentLogs = JSON.parse(localStorage.getItem("studymaster_admin_logs") || "[]");
    } catch (e) {
      currentLogs = [];
    }
    const newLog = {
      id: Date.now(),
      user: actionUser,
      action: actionDescription,
      time: "Vừa xong"
    };
    const updatedLogs = [newLog, ...currentLogs].slice(0, 50);
    localStorage.setItem("studymaster_admin_logs", JSON.stringify(updatedLogs));
    setAdminLogs(updatedLogs);
  };

  const handleAdminCreateUser = (e) => {
    e.preventDefault();
    if (!adminNewUser.trim() || !adminNewEmail.trim() || !adminNewPass.trim()) {
      showToast("Vui lòng nhập đầy đủ thông tin!", "warning");
      return;
    }
    if (adminNewPass !== adminNewConfirmPass) {
      showToast("Mật khẩu xác nhận không khớp!", "warning");
      return;
    }
    const users = JSON.parse(localStorage.getItem("studymaster_users") || "[]");
    if (users.some(u => u.username === adminNewUser || u.email === adminNewEmail)) {
      showToast("Tên đăng nhập hoặc email đã tồn tại!", "error");
      return;
    }
    const newUser = {
      username: adminNewUser.trim(),
      email: adminNewEmail.trim(),
      password: adminNewPass,
      createdAt: Date.now(),
      locked: false
    };
    const updatedUsers = [...users, newUser];
    localStorage.setItem("studymaster_users", JSON.stringify(updatedUsers));
    setAdminUsers(updatedUsers);
    writeAdminLog("admin", `Tạo mới học viên ${adminNewUser}`);
    showToast(`Đã tạo học viên ${adminNewUser} thành công!`, "success");
    
    setAdminNewUser("");
    setAdminNewEmail("");
    setAdminNewPass("");
    setAdminNewConfirmPass("");
    setAdminShowAddUserModal(false);
  };

  const handleAdminDeleteUser = (username) => {
    showConfirm({
      title: "Xác nhận xóa học viên",
      message: `Bạn có chắc chắn muốn xóa vĩnh viễn tài khoản của học viên ${username}? Thao tác này không thể hoàn tác.`,
      type: "warning",
      confirmText: "Xóa học viên",
      cancelText: "Hủy",
      onConfirm: () => {
        const users = JSON.parse(localStorage.getItem("studymaster_users") || "[]");
        const updatedUsers = users.filter(u => u.username !== username);
        localStorage.setItem("studymaster_users", JSON.stringify(updatedUsers));
        setAdminUsers(updatedUsers);
        
        localStorage.removeItem(`studymaster_unlocked_subjects_${username}`);
        
        writeAdminLog("admin", `Xóa tài khoản của học viên ${username}`);
        showToast(`Đã xóa học viên ${username} thành công.`, "success");
        if (adminSelectedUser && adminSelectedUser.username === username) {
          setAdminSelectedUser(null);
          setShowDrawerDetail(false);
        }
      }
    });
  };

  const handleAdminToggleLockUser = (username) => {
    const users = JSON.parse(localStorage.getItem("studymaster_users") || "[]");
    const updatedUsers = users.map(u => {
      if (u.username === username) {
        const nextLockState = !u.locked;
        writeAdminLog("admin", `${nextLockState ? "Khóa" : "Mở khóa"} tài khoản của ${username}`);
        showToast(`Đã ${nextLockState ? "khóa" : "mở khóa"} tài khoản ${username}`, "success");
        const updatedUser = { ...u, locked: nextLockState };
        if (adminSelectedUser && adminSelectedUser.username === username) {
          setAdminSelectedUser(updatedUser);
        }
        return updatedUser;
      }
      return u;
    });
    localStorage.setItem("studymaster_users", JSON.stringify(updatedUsers));
    setAdminUsers(updatedUsers);
  };

  const handleAdminChangePassword = (e) => {
    e.preventDefault();
    if (!adminChangeNewPass.trim()) {
      showToast("Mật khẩu mới không được để trống!", "warning");
      return;
    }
    if (adminChangeNewPass !== adminChangeConfirmPass) {
      showToast("Mật khẩu xác nhận không khớp!", "warning");
      return;
    }
    const users = JSON.parse(localStorage.getItem("studymaster_users") || "[]");
    const updatedUsers = users.map(u => {
      if (u.username === adminChangePassUser.username) {
        return { ...u, password: adminChangeNewPass };
      }
      return u;
    });
    localStorage.setItem("studymaster_users", JSON.stringify(updatedUsers));
    setAdminUsers(updatedUsers);
    writeAdminLog("admin", `Đặt lại mật khẩu cho học viên ${adminChangePassUser.username}`);
    showToast(`Đã thay đổi mật khẩu cho ${adminChangePassUser.username} thành công!`, "success");
    
    setAdminChangeNewPass("");
    setAdminChangeConfirmPass("");
    setAdminShowChangePassModal(false);
    setAdminChangePassUser(null);
  };

  const handleAdminToggleSubjectLock = (username, subjectId) => {
    const key = `studymaster_unlocked_subjects_${username}`;
    let unlocked = [];
    try {
      unlocked = JSON.parse(localStorage.getItem(key) || "[]");
    } catch (e) {
      unlocked = [];
    }
    
    if (unlocked.includes(subjectId)) {
      unlocked = unlocked.filter(id => id !== subjectId);
      showToast(`Đã khóa môn học ${allSubjects[subjectId]?.title || subjectId} đối với ${username}`, "info");
    } else {
      unlocked.push(subjectId);
      showToast(`Đã mở khóa môn học ${allSubjects[subjectId]?.title || subjectId} đối với ${username}`, "success");
    }
    
    localStorage.setItem(key, JSON.stringify(unlocked));
    if (adminSelectedUser && adminSelectedUser.username === username) {
      setAdminSelectedUser({ ...adminSelectedUser });
    }
  };

  const handleAdminUnlockAllSubjects = (username) => {
    const key = `studymaster_unlocked_subjects_${username}`;
    const allIds = Object.keys(allSubjects);
    localStorage.setItem(key, JSON.stringify(allIds));
    showToast(`Đã mở khóa tất cả các môn học cho ${username}!`, "success");
    if (adminSelectedUser && adminSelectedUser.username === username) {
      setAdminSelectedUser({ ...adminSelectedUser });
    }
  };

  const handleAdminLockAllSubjects = (username) => {
    const key = `studymaster_unlocked_subjects_${username}`;
    localStorage.setItem(key, JSON.stringify([]));
    showToast(`Đã khóa toàn bộ các môn học tự chọn cho ${username}!`, "info");
    if (adminSelectedUser && adminSelectedUser.username === username) {
      setAdminSelectedUser({ ...adminSelectedUser });
    }
  };

  const getStats = () => {
    const totalUsers = adminUsers.length;
    const totalSubjects = Object.keys(allSubjects).length;
    
    let totalAttempts = 0;
    let totalScorePercent = 0;
    
    Object.values(allSubjects).forEach((subj) => {
      const chaptersList = subj.chapters || [];
      chaptersList.forEach((ch) => {
        const stored = localStorage.getItem(`studymaster_quiz_rankings_${ch.id}`);
        if (stored) {
          try {
            const rankings = JSON.parse(stored);
            totalAttempts += rankings.length;
            rankings.forEach((r) => {
              totalScorePercent += r.total > 0 ? (r.score / r.total) * 100 : 0;
            });
          } catch (e) {}
        }
      });
    });
    
    const avgScore = totalAttempts > 0 ? Math.round(totalScorePercent / totalAttempts) : 0;
    
    return {
      totalUsers,
      totalSubjects,
      totalAttempts,
      avgScore
    };
  };

  const getDailyAttempts = () => {
    const attempts = {};
    const today = new Date();
    for (let i = 6; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(today.getDate() - i);
      const dateStr = d.toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit" });
      attempts[dateStr] = 0;
    }

    Object.values(allSubjects).forEach((subj) => {
      const chaptersList = subj.chapters || [];
      chaptersList.forEach((ch) => {
        const stored = localStorage.getItem(`studymaster_quiz_rankings_${ch.id}`);
        if (stored) {
          try {
            const rankings = JSON.parse(stored);
            rankings.forEach((r) => {
              if (r.date) {
                const rDate = new Date(r.date);
                const dateStr = rDate.toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit" });
                if (attempts[dateStr] !== undefined) {
                  attempts[dateStr]++;
                }
              }
            });
          } catch (e) {
            console.error(e);
          }
        }
      });
    });

    return Object.entries(attempts).map(([date, count]) => ({ date, count }));
  };

  const getSubjectDistribution = () => {
    const dist = {};
    let totalAttempts = 0;
    Object.values(allSubjects).forEach((subj) => {
      let count = 0;
      const chaptersList = subj.chapters || [];
      chaptersList.forEach((ch) => {
        const stored = localStorage.getItem(`studymaster_quiz_rankings_${ch.id}`);
        if (stored) {
          try {
            const rankings = JSON.parse(stored);
            count += rankings.length;
          } catch (e) {
            console.error(e);
          }
        }
      });
      if (count > 0) {
        dist[subj.title] = count;
        totalAttempts += count;
      }
    });

    if (totalAttempts === 0) {
      return Object.values(allSubjects).slice(0, 3).map((subj, idx) => ({
        name: subj.title,
        count: 0,
        percent: idx === 0 ? 100 : 0,
        color: subj.themeColors?.accent || "#4f46e5"
      }));
    }

    return Object.entries(dist).map(([name, count]) => {
      const percent = Math.round((count / totalAttempts) * 100);
      const matchedSub = Object.values(allSubjects).find((s) => s.title === name);
      return {
        name,
        count,
        percent,
        color: matchedSub?.themeColors?.accent || "#4f46e5"
      };
    });
  };

  const getStudentSubjectScore = (username, subjId) => {
    const subj = allSubjects[subjId];
    if (!subj) return 0;
    const chaptersList = subj.chapters || [];
    let bestPercent = 0;
    chaptersList.forEach((ch) => {
      const stored = localStorage.getItem(`studymaster_quiz_rankings_${ch.id}`);
      if (stored) {
        try {
          const rankings = JSON.parse(stored);
          const userRecords = rankings.filter(r => r.name === username);
          userRecords.forEach((r) => {
            const percent = r.total > 0 ? (r.score / r.total) * 100 : 0;
            if (percent > bestPercent) {
              bestPercent = percent;
            }
          });
        } catch (e) {
          console.error(e);
        }
      }
    });
    return bestPercent;
  };

  const getRadarPoints = (username) => {
    const cx = 150;
    const cy = 150;
    const maxR = 90;
    const subjectKeys = [
      "tu-tuong-hcm",
      "lich-su-dang",
      "oop",
      "analysis-design",
      "dsa",
      "database",
      "basic-concepts",
      "basic-algorithms"
    ];
    const points = [];
    subjectKeys.forEach((key, index) => {
      const p = getStudentSubjectScore(username, key);
      const angle = index * ((2 * Math.PI) / subjectKeys.length);
      const x = cx + maxR * (p / 100) * Math.cos(angle - Math.PI / 2);
      const y = cy + maxR * (p / 100) * Math.sin(angle - Math.PI / 2);
      points.push(`${x},${y}`);
    });
    return points.join(" ");
  };

  const exportExcel = () => {
    let csvContent = "\uFEFF";
    csvContent += "Học viên,Email,Lượt ôn tập,Điểm trung bình,Trạng thái\n";
    
    adminUsers.forEach((user) => {
      let totalAttempts = 0;
      let totalPercent = 0;
      Object.values(allSubjects).forEach((subj) => {
        const chaptersList = subj.chapters || [];
        chaptersList.forEach((ch) => {
          const stored = localStorage.getItem(`studymaster_quiz_rankings_${ch.id}`);
          if (stored) {
            try {
              const rankings = JSON.parse(stored);
              const userRecords = rankings.filter(r => r.name === user.username);
              totalAttempts += userRecords.length;
              userRecords.forEach((r) => {
                totalPercent += r.total > 0 ? (r.score / r.total) * 100 : 0;
              });
            } catch (e) {}
          }
        });
      });
      const avgScore = totalAttempts > 0 ? Math.round(totalPercent / totalAttempts) : 0;
      const statusStr = user.locked ? "Bị khóa" : "Hoạt động";
      csvContent += `${user.username},${user.email},${totalAttempts},${avgScore}%,${statusStr}\n`;
    });

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "Danh_sach_hoc_vien.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast("Đã tải về danh sách học viên dạng Excel (CSV) thành công!", "success");
  };

  const exportPDF = () => {
    const element = document.getElementById("admin-pdf-report-template");
    if (!element) return;
    
    element.style.display = "block";
    
    import("html2canvas").then((html2canvasModule) => {
      const html2canvas = html2canvasModule.default;
      import("jspdf").then((jspdfModule) => {
        const { jsPDF } = jspdfModule;
        
        html2canvas(element, {
          scale: 2,
          useCORS: true,
          logging: false,
          backgroundColor: "#ffffff"
        }).then((canvas) => {
          const imgData = canvas.toDataURL("image/png");
          const pdf = new jsPDF("p", "mm", "a4");
          const imgWidth = 210;
          const pageHeight = 295;
          const imgHeight = (canvas.height * imgWidth) / canvas.width;
          let heightLeft = imgHeight;
          let position = 0;
          
          pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
          
          while (heightLeft >= 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
          }
          
          pdf.save("Bao_cao_quan_tri.pdf");
          element.style.display = "none";
          showToast("Đã xuất báo cáo PDF thành công!", "success");
        }).catch((err) => {
          console.error(err);
          element.style.display = "none";
          showToast("Lỗi khi tạo hình ảnh PDF.", "error");
        });
      });
    }).catch((err) => {
      console.error(err);
      element.style.display = "none";
      showToast("Lỗi khi tải module.", "error");
    });
  };

  const renderDonutChart = () => {
    const data = getSubjectDistribution();
    let accumulatedPercent = 0;
    const r = 50;
    const circumference = 2 * Math.PI * r;
    
    return (
      <svg width="220" height="220" viewBox="0 0 160 160" className="mx-auto">
        <circle cx="80" cy="80" r={r} fill="transparent" stroke="#f1f5f9" strokeWidth="20" />
        {data.map((item, idx) => {
          const strokeLength = (item.percent / 100) * circumference;
          const strokeOffset = circumference - ((accumulatedPercent / 100) * circumference);
          accumulatedPercent += item.percent;
          return (
            <circle
              key={idx}
              cx="80"
              cy="80"
              r={r}
              fill="transparent"
              stroke={item.color}
              strokeWidth="20"
              strokeDasharray={`${strokeLength} ${circumference - strokeLength}`}
              strokeDashoffset={strokeOffset}
              transform="rotate(-90 80 80)"
              className="transition-all duration-500 hover:stroke-[24px] cursor-pointer"
              title={`${item.name}: ${item.percent}%`}
            />
          );
        })}
        <text x="80" y="80" textAnchor="middle" dominantBaseline="middle" className="font-bold text-xs fill-slate-800">
          Môn học
        </text>
        <text x="80" y="93" textAnchor="middle" dominantBaseline="middle" className="text-[9px] fill-slate-400 font-medium">
          Phân bố ôn tập
        </text>
      </svg>
    );
  };

  const renderOverviewTab = () => {
    const stats = getStats();
    const dailyData = getDailyAttempts();
    const maxAttempt = Math.max(...dailyData.map(d => d.count), 4);
    
    const svgWidth = 540;
    const svgHeight = 180;
    const paddingX = 40;
    const paddingY = 20;
    const linePoints = dailyData.map((d, i) => {
      const x = paddingX + i * (svgWidth - 2 * paddingX) / 6;
      const y = svgHeight - paddingY - (d.count / maxAttempt) * (svgHeight - 2 * paddingY);
      return { x, y, date: d.date, count: d.count };
    });
    
    const pathD = linePoints.length > 0 
      ? `M ${linePoints[0].x} ${linePoints[0].y} ` + linePoints.slice(1).map(p => `L ${p.x} ${p.y}`).join(" ")
      : "";
      
    const fillD = linePoints.length > 0
      ? `${pathD} L ${linePoints[linePoints.length - 1].x} ${svgHeight - paddingY} L ${linePoints[0].x} ${svgHeight - paddingY} Z`
      : "";

    return (
      <div className="space-y-8 animate-in fade-in duration-300">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { label: "Học viên đăng ký", value: stats.totalUsers, desc: "Người dùng hoạt động", icon: "👨‍🎓", color: "text-indigo-650 bg-indigo-50" },
            { label: "Môn học hỗ trợ", value: stats.totalSubjects, desc: "Đại cương & Chuyên ngành", icon: "📚", color: "text-teal-650 bg-teal-50" },
            { label: "Lượt làm trắc nghiệm", value: stats.totalAttempts, desc: "Bài thi ôn tập hoàn thành", icon: "📝", color: "text-amber-650 bg-amber-50" },
            { label: "Điểm số trung bình", value: `${stats.avgScore}%`, desc: "Tỉ lệ câu trả lời đúng", icon: "🏆", color: "text-emerald-650 bg-emerald-50" }
          ].map((card, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow duration-300">
              <div className="space-y-1">
                <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider block">
                  {card.label}
                </span>
                <span className="text-2xl font-black text-slate-900 block">{card.value}</span>
                <span className="text-[10px] text-slate-500 font-medium block">{card.desc}</span>
              </div>
              <span className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl ${card.color}`}>
                {card.icon}
              </span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm lg:col-span-2 flex flex-col justify-between space-y-4">
            <div>
              <h3 className="text-sm font-extrabold text-slate-800 uppercase tracking-wider">
                Tần suất thi thử (7 ngày qua)
              </h3>
              <p className="text-[10px] text-slate-400 font-semibold mt-0.5">
                Thống kê số lượng lượt ôn tập trắc nghiệm hàng ngày của học sinh.
              </p>
            </div>
            
            <div className="relative w-full overflow-hidden flex justify-center items-center py-2 bg-slate-50/50 border border-slate-100 rounded-xl">
              <svg width="100%" height={svgHeight} viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="max-w-full">
                {[0, 0.25, 0.5, 0.75, 1].map((ratio, idx) => {
                  const y = paddingY + ratio * (svgHeight - 2 * paddingY);
                  return (
                    <line key={idx} x1={paddingX} y1={y} x2={svgWidth - paddingX} y2={y} stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3,3" />
                  );
                })}
                
                {fillD && (
                  <path d={fillD} fill="rgba(79, 70, 229, 0.05)" />
                )}
                
                {pathD && (
                  <path d={pathD} fill="none" stroke="#4f46e5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                )}
                
                {linePoints.map((p, i) => (
                  <g key={i}>
                    <circle cx={p.x} cy={p.y} r="5" fill="#ffffff" stroke="#4f46e5" strokeWidth="2.5" className="transition-all hover:r-7 cursor-pointer" />
                    <text x={p.x} y={p.y - 10} textAnchor="middle" className="text-[10px] font-bold fill-indigo-700">
                      {p.count}
                    </text>
                    <text x={p.x} y={svgHeight - 5} textAnchor="middle" className="text-[9px] font-semibold fill-slate-400">
                      {p.date}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between space-y-4">
            <div>
              <h3 className="text-sm font-extrabold text-slate-800 uppercase tracking-wider">
                Tỉ lệ môn ôn tập
              </h3>
              <p className="text-[10px] text-slate-400 font-semibold mt-0.5">
                Phần trăm các lượt thi thử chia theo từng môn học.
              </p>
            </div>
            
            <div className="flex-grow flex items-center justify-center">
              {renderDonutChart()}
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-sm font-extrabold text-slate-800 uppercase tracking-wider">
                Nhật ký hoạt động (Live Activity Feed)
              </h3>
              <p className="text-[10px] text-slate-400 font-semibold mt-0.5">
                Lịch sử làm bài trắc nghiệm và hoạt động quản trị của học viên hệ thống.
              </p>
            </div>
            
            <button
              onClick={() => {
                localStorage.setItem("studymaster_admin_logs", "[]");
                setAdminLogs([]);
                showToast("Đã xóa trắng nhật ký hoạt động!", "info");
              }}
              className="px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-[10px] font-bold text-slate-500 hover:text-slate-800 transition-colors cursor-pointer bg-white"
            >
              Xóa lịch sử nhật ký
            </button>
          </div>

          <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
            {adminLogs.length === 0 ? (
              <p className="text-xs text-slate-400 italic text-center py-6">
                Chưa có nhật ký hoạt động nào được ghi nhận.
              </p>
            ) : (
              adminLogs.map((log) => (
                <div key={log.id} className="flex justify-between items-start p-3 bg-slate-50 border border-slate-100 rounded-xl hover:border-slate-200 transition-all text-xs">
                  <div className="flex gap-2">
                    <span className="w-6 h-6 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-xs">
                      🎓
                    </span>
                    <div>
                      <span className="font-bold text-slate-900">{log.user}</span>
                      <span className="text-slate-600 ml-1.5 font-medium">{log.action}</span>
                      {log.score !== undefined && (
                        <span className="ml-2 px-1.5 py-0.5 rounded bg-indigo-100/50 text-indigo-700 font-bold text-[10px]">
                          {log.score}/{log.total} điểm
                        </span>
                      )}
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-400 font-semibold whitespace-nowrap">{log.time}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderUsersTab = () => {
    const filteredUsers = adminUsers.filter(u => {
      const q = adminSearchQuery.toLowerCase().trim();
      return u.username.toLowerCase().includes(q) || u.email.toLowerCase().includes(q);
    });

    return (
      <div className="space-y-6 animate-in fade-in duration-300">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-2.5 text-slate-400" size={16} />
            <input
              type="text"
              placeholder="Tìm kiếm học viên theo tên, email..."
              value={adminSearchQuery}
              onChange={(e) => setAdminSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:border-indigo-500 focus:bg-white transition-colors"
            />
          </div>

          <button
            onClick={() => setAdminShowAddUserModal(true)}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-all duration-200 cursor-pointer shadow-sm shadow-indigo-150 active:scale-95 border-none"
          >
            <Plus size={15} />
            <span>Thêm học viên mới</span>
          </button>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-xs">
              <thead className="bg-slate-50/75 border-b border-slate-200 text-slate-400 font-extrabold uppercase tracking-wider select-none">
                <tr>
                  <th className="px-6 py-4">Học viên</th>
                  <th className="px-6 py-4">Email</th>
                  <th className="px-6 py-4 text-center">Số bài ôn</th>
                  <th className="px-6 py-4 text-center">Điểm số TB</th>
                  <th className="px-6 py-4 text-center">Trạng thái</th>
                  <th className="px-6 py-4 text-right">Thao tác</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-800">
                {filteredUsers.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="px-6 py-12 text-center text-slate-400 italic bg-white">
                      Không tìm thấy học sinh nào khớp với từ khóa tìm kiếm.
                    </td>
                  </tr>
                ) : (
                  filteredUsers.map((user) => {
                    let totalAttempts = 0;
                    let totalPercent = 0;
                    Object.values(allSubjects).forEach((subj) => {
                      const chaptersList = subj.chapters || [];
                      chaptersList.forEach((ch) => {
                        const stored = localStorage.getItem(`studymaster_quiz_rankings_${ch.id}`);
                        if (stored) {
                          try {
                            const rankings = JSON.parse(stored);
                            const userRecords = rankings.filter(r => r.name === user.username);
                            totalAttempts += userRecords.length;
                            userRecords.forEach((r) => {
                              totalPercent += r.total > 0 ? (r.score / r.total) * 100 : 0;
                            });
                          } catch (e) {}
                        }
                      });
                    });
                    const avgScore = totalAttempts > 0 ? Math.round(totalPercent / totalAttempts) : 0;

                    return (
                      <tr
                        key={user.username}
                        onClick={() => {
                          setAdminSelectedUser(user);
                          setShowDrawerDetail(true);
                        }}
                        className="hover:bg-slate-50/50 transition-colors cursor-pointer group"
                      >
                        <td className="px-6 py-4 font-bold text-slate-900 flex items-center gap-3">
                          <span className="w-8 h-8 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-sm group-hover:scale-105 transition-transform">
                            👨‍🎓
                          </span>
                          <span className="group-hover:text-indigo-600 transition-colors">{user.username}</span>
                        </td>
                        <td className="px-6 py-4 font-medium text-slate-500">{user.email}</td>
                        <td className="px-6 py-4 text-center font-extrabold text-slate-900">{totalAttempts}</td>
                        <td className="px-6 py-4 text-center font-extrabold">
                          <span className={avgScore >= 80 ? "text-emerald-600" : avgScore >= 50 ? "text-amber-600" : "text-slate-400"}>
                            {totalAttempts > 0 ? `${avgScore}%` : "—"}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className={`inline-flex px-2 py-0.5 rounded-full text-[9px] font-bold ${
                            user.locked
                              ? "bg-red-50 text-red-700 border border-red-200"
                              : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                          }`}>
                            {user.locked ? "Đã khóa" : "Hoạt động"}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right" onClick={(e) => e.stopPropagation()}>
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => {
                                setAdminChangePassUser(user);
                                setAdminShowChangePassModal(true);
                              }}
                              className="p-1.5 rounded-lg border border-slate-200 hover:border-slate-350 bg-white hover:bg-slate-50 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer bg-transparent"
                              title="Đổi mật khẩu"
                            >
                              <KeyRound size={13} />
                            </button>
                            <button
                              onClick={() => handleAdminToggleLockUser(user.username)}
                              className={`p-1.5 rounded-lg border transition-colors cursor-pointer bg-transparent ${
                                user.locked
                                  ? "border-red-200 bg-red-50/50 hover:bg-red-50 text-red-650 hover:text-red-700"
                                  : "border-slate-200 hover:border-slate-350 bg-white hover:bg-slate-50 text-slate-500 hover:text-slate-800"
                              }`}
                              title={user.locked ? "Mở khóa tài khoản" : "Khóa tài khoản"}
                            >
                              {user.locked ? <Unlock size={13} /> : <Lock size={13} />}
                            </button>
                            <button
                              onClick={() => handleAdminDeleteUser(user.username)}
                              className="p-1.5 rounded-lg border border-slate-200 hover:border-red-200 bg-white hover:bg-red-50 text-slate-500 hover:text-red-600 transition-colors cursor-pointer bg-transparent"
                              title="Xóa tài khoản"
                            >
                              <Trash2 size={13} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>

        {renderDetailDrawer()}
      </div>
    );
  };

  const renderDetailDrawer = () => {
    if (!adminSelectedUser) return null;
    const username = adminSelectedUser.username;
    
    const key = `studymaster_unlocked_subjects_${username}`;
    let unlockedList = [];
    if (typeof window !== "undefined") {
      try {
        unlockedList = JSON.parse(localStorage.getItem(key) || "[]");
      } catch (e) {
        unlockedList = [];
      }
    }

    const history = [];
    Object.values(allSubjects).forEach((subj) => {
      const chaptersList = subj.chapters || [];
      chaptersList.forEach((ch) => {
        const stored = localStorage.getItem(`studymaster_quiz_rankings_${ch.id}`);
        if (stored) {
          try {
            const rankings = JSON.parse(stored);
            const userRecords = rankings.filter(r => r.name === username);
            userRecords.forEach((r) => {
              history.push({
                subject: subj.title,
                chapter: ch.title,
                score: r.score,
                total: r.total,
                date: r.date ? new Date(r.date).toLocaleDateString("vi-VN") : "—",
                time: r.time ? `${Math.round(r.time)} giây` : "—",
                timestamp: r.date ? new Date(r.date).getTime() : 0
              });
            });
          } catch (e) {}
        }
      });
    });
    history.sort((a, b) => b.timestamp - a.timestamp);

    const points = getRadarPoints(username);
    const radarAxes = [
      "TuTuong",
      "LichSuDang",
      "OOP",
      "PhanTichTK",
      "DSA",
      "CoSoDuLieu",
      "KNCoban",
      "ThuatToan"
    ];
    const radarCenter = 150;
    const radarRadius = 90;
    const angleStep = (2 * Math.PI) / radarAxes.length;

    return (
      <>
        {showDrawerDetail && (
          <div
            onClick={() => setShowDrawerDetail(false)}
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-xs transition-opacity duration-300 animate-in fade-in"
          />
        )}
        <div 
          className={`fixed inset-y-0 right-0 z-50 w-full sm:w-[480px] bg-white border-l border-slate-200 shadow-2xl flex flex-col justify-between transform transition-transform duration-300 ease-out ${
            showDrawerDetail ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 border-b border-slate-200 flex justify-between items-center">
            <div className="flex items-center gap-3 select-none">
              <span className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-sm">
                👨‍🎓
              </span>
              <div>
                <h3 className="font-extrabold text-slate-900 text-sm leading-none">{username}</h3>
                <span className="text-[10px] text-slate-400 font-semibold block mt-1.5">{adminSelectedUser.email}</span>
              </div>
            </div>
            
            <button
              onClick={() => setShowDrawerDetail(false)}
              className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-500 hover:text-slate-700 transition-all cursor-pointer bg-white"
            >
              <X size={15} />
            </button>
          </div>

          <div className="flex-grow p-6 overflow-y-auto space-y-8">
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider select-none">
                  Biểu đồ năng lực môn học
                </h4>
                <p className="text-[10px] text-slate-400 font-semibold mt-0.5 select-none">
                  Điểm số cao nhất của sinh viên quy đổi theo phần trăm (%) từng môn học.
                </p>
              </div>
              
              <div className="flex justify-center bg-slate-50 border border-slate-100 rounded-2xl py-4 relative select-none">
                <svg width="300" height="300" viewBox="0 0 300 300">
                  {[0.2, 0.4, 0.6, 0.8, 1.0].map((scale, gridIdx) => {
                    const r = radarRadius * scale;
                    const pathPoints = radarAxes.map((_, i) => {
                      const angle = i * angleStep;
                      const x = radarCenter + r * Math.cos(angle - Math.PI / 2);
                      const y = radarCenter + r * Math.sin(angle - Math.PI / 2);
                      return `${x},${y}`;
                    }).join(" ");
                    return (
                      <polygon
                        key={gridIdx}
                        points={pathPoints}
                        fill="transparent"
                        stroke="#e2e8f0"
                        strokeWidth="1"
                      />
                    );
                  })}

                  {radarAxes.map((axis, i) => {
                    const angle = i * angleStep;
                    const x = radarCenter + radarRadius * Math.cos(angle - Math.PI / 2);
                    const y = radarCenter + radarRadius * Math.sin(angle - Math.PI / 2);
                    
                    const labelX = radarCenter + (radarRadius + 18) * Math.cos(angle - Math.PI / 2);
                    const labelY = radarCenter + (radarRadius + 12) * Math.sin(angle - Math.PI / 2);
                    
                    return (
                      <g key={i}>
                        <line
                          x1={radarCenter}
                          y1={radarCenter}
                          x2={x}
                          y2={y}
                          stroke="#e2e8f0"
                          strokeWidth="1.2"
                        />
                        <text
                          x={labelX}
                          y={labelY}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          className="text-[8px] font-bold fill-slate-400 tracking-tight"
                        >
                          {axis}
                        </text>
                      </g>
                    );
                  })}

                  {points && (
                    <polygon
                      points={points}
                      fill="rgba(79, 70, 229, 0.18)"
                      stroke="#4f46e5"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  )}
                </svg>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider select-none">
                  Trạng thái khóa/mở khóa môn học
                </h4>
                <p className="text-[10px] text-slate-400 font-semibold mt-0.5 select-none">
                  Quản lý quyền học và làm bài tập trắc nghiệm từng môn của sinh viên.
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => handleAdminUnlockAllSubjects(username)}
                  className="flex-1 py-1.5 rounded-lg border border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 font-bold text-[10px] transition-colors cursor-pointer text-center"
                >
                  Mở khóa tất cả
                </button>
                <button
                  onClick={() => handleAdminLockAllSubjects(username)}
                  className="flex-1 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-650 hover:bg-slate-100 font-bold text-[10px] transition-colors cursor-pointer text-center"
                >
                  Khóa tất cả tự chọn
                </button>
              </div>

              <div className="divide-y divide-slate-100 border border-slate-200 rounded-2xl overflow-hidden bg-slate-50/50 p-2 space-y-1">
                {Object.values(allSubjects).map((subj) => {
                  const isUnlocked = subj.isActive !== false || unlockedList.includes(subj.id);
                  const isDefault = subj.isActive !== false;
                  
                  return (
                    <div key={subj.id} className="flex justify-between items-center py-2.5 px-3 rounded-lg hover:bg-white transition-all text-xs">
                      <span className="font-semibold text-slate-700 flex items-center gap-2">
                        <span className="text-sm">{subj.icon || "📖"}</span>
                        {subj.title}
                        {isDefault && (
                          <span className="text-[8px] bg-slate-200 text-slate-500 font-extrabold uppercase px-1 py-0.2 rounded border border-slate-250 select-none scale-90">
                            Mặc định
                          </span>
                        )}
                      </span>
                      
                      <label className="relative inline-flex items-center cursor-pointer select-none">
                        <input
                          type="checkbox"
                          disabled={isDefault}
                          checked={isUnlocked}
                          onChange={() => handleAdminToggleSubjectLock(username, subj.id)}
                          className="sr-only peer"
                        />
                        <div className={`w-8 h-4 rounded-full transition-colors relative ${
                          isDefault 
                            ? "bg-indigo-350 opacity-60 cursor-not-allowed" 
                            : isUnlocked 
                              ? "bg-indigo-650" 
                              : "bg-slate-350"
                        } after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all ${
                          isUnlocked ? "after:translate-x-4" : ""
                        }`} />
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider select-none">
                  Lịch sử thi thử
                </h4>
                <p className="text-[10px] text-slate-400 font-semibold mt-0.5 select-none">
                  Danh sách kết quả làm bài trắc nghiệm gần đây của sinh viên.
                </p>
              </div>

              <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm bg-white">
                <table className="w-full text-left text-[11px] border-collapse">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-400 font-bold select-none">
                    <tr>
                      <th className="px-4 py-2.5">Môn học</th>
                      <th className="px-4 py-2.5 text-center">Điểm số</th>
                      <th className="px-4 py-2.5 text-center">Thời gian</th>
                      <th className="px-4 py-2.5 text-right">Ngày làm</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    {history.length === 0 ? (
                      <tr>
                        <td colSpan="4" className="px-4 py-6 text-center text-slate-400 italic">
                          Chưa có lịch sử làm bài nào.
                        </td>
                      </tr>
                    ) : (
                      history.map((h, index) => (
                        <tr key={index} className="hover:bg-slate-50/50 transition-colors">
                          <td className="px-4 py-2.5 font-semibold text-slate-800 leading-snug">{h.subject}</td>
                          <td className="px-4 py-2.5 text-center font-extrabold text-indigo-700">
                            {h.score}/{h.total}
                          </td>
                          <td className="px-4 py-2.5 text-center text-slate-400">{h.time}</td>
                          <td className="px-4 py-2.5 text-right text-slate-400 font-medium">{h.date}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="p-6 border-t border-slate-200 bg-slate-50/70 flex gap-3">
            <button
              onClick={() => handleAdminToggleLockUser(username)}
              className={`flex-grow py-2.5 rounded-xl text-xs font-bold transition-all shadow-sm cursor-pointer border-none ${
                adminSelectedUser.locked
                  ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                  : "bg-slate-650 hover:bg-slate-700 text-white"
              }`}
            >
              {adminSelectedUser.locked ? "Mở khóa học viên" : "Tạm khóa học viên"}
            </button>
            <button
              onClick={() => handleAdminDeleteUser(username)}
              className="flex-grow py-2.5 rounded-xl bg-red-650 hover:bg-red-700 text-white text-xs font-bold transition-all shadow-sm cursor-pointer border-none"
            >
              Xóa vĩnh viễn
            </button>
          </div>
        </div>
      </>
    );
  };


  // Custom multi-subject integration states
  const [allSubjects, setAllSubjects] = useState(subjects);
  const [customSubjects, setCustomSubjects] = useState([]);
  const [showAddSubjectModal, setShowAddSubjectModal] = useState(false);
  const [customNotes, setCustomNotes] = useState({});

  // Inject active subject color theme into document root CSS variables
  useEffect(() => {
    if (typeof document === "undefined") return;
    // Only apply subject-specific colors when in the study view
    const isViewingSubject = appStep === "study";
    const currentSub = isViewingSubject ? (allSubjects[selectedSubjectId] || allSubjects["tu-tuong-hcm"]) : allSubjects["tu-tuong-hcm"];
    if (currentSub && currentSub.themeColors) {
      const colors = currentSub.themeColors;
      document.documentElement.style.setProperty("--accent", colors.accent);
      document.documentElement.style.setProperty("--secondary", colors.secondary);
      document.documentElement.style.setProperty("--accent-rgb", colors.accentRgb);
    } else {
      // Default: Amber Gold theme (Tư tưởng HCM)
      document.documentElement.style.setProperty("--accent", "#d97706");
      document.documentElement.style.setProperty("--secondary", "#c2410c");
      document.documentElement.style.setProperty("--accent-rgb", "217, 119, 6");
    }
  }, [selectedSubjectId, allSubjects, appStep]);

  // Load MDX file dynamically when activeSubsectionId changes
  useEffect(() => {
    if (!activeSubsectionId || appStep !== "study") {
      setActiveMdxSource(null);
      return;
    }

    const currentSub = allSubjects[selectedSubjectId] || allSubjects["tu-tuong-hcm"];
    if (!currentSub) return;

    if (currentSub.isCustom) {
      setActiveMdxSource(null);
      return;
    }

    if (!currentSub.chapters) return;

    // Find the chapterId and sectionId containing activeSubsectionId
    let foundChapterId = null;
    let foundSectionId = null;

    for (const ch of currentSub.chapters) {
      for (const sec of ch.sections) {
        if (sec.subsections) {
          const match = sec.subsections.find((sub) => sub.id === activeSubsectionId);
          if (match) {
            foundChapterId = ch.id;
            foundSectionId = sec.id;
            break;
          }
        }
      }
      if (foundChapterId) break;
    }

    if (foundChapterId && foundSectionId) {
      setLoadingMdx(true);
      getSubsectionMdx(selectedSubjectId, foundChapterId, foundSectionId, activeSubsectionId)
        .then((res) => {
          if (res) {
            setActiveMdxSource(res.mdxSource);
          } else {
            setActiveMdxSource(null);
          }
        })
        .catch((err) => {
          console.error("Error loading MDX:", err);
          setActiveMdxSource(null);
        })
        .finally(() => {
          setLoadingMdx(false);
        });
    }
  }, [activeSubsectionId, selectedSubjectId, allSubjects, appStep]);

  // Add Subject Form inputs
  const [newSubTitle, setNewSubTitle] = useState("");
  const [newSubDesc, setNewSubDesc] = useState("");
  const [newSubCategory, setNewSubCategory] = useState("Chuyên ngành");
  const [newSubColor, setNewSubColor] = useState("#0d9488");
  const [newSubQuote, setNewSubQuote] = useState("");

  const getSubjectQuote = (subjectId) => {
    const subject = allSubjects[subjectId];
    if (subject && subject.quote) return subject.quote;
    if (subjectId === "tu-tuong-hcm") {
      return "“Không có gì quý hơn độc lập, tự do.”";
    }
    if (subjectId === "lich-su-dang") {
      return "“Đảng ta là đạo đức, là văn minh.”";
    }
    return "“Học, học nữa, học mãi.”";
  };

  const fullQuote = getSubjectQuote(selectedSubjectId);
  const currentSubject = allSubjects[selectedSubjectId] || allSubjects["tu-tuong-hcm"];
  const chapters = currentSubject.chapters || [];
  const questionsMap = currentSubject.questionsMap || {};

  // Check login session & load custom data on mount
  useEffect(() => {
    // Priority: localStorage (remember me) → sessionStorage (current tab session)
    const rememberedUser = localStorage.getItem("studymaster_session_user");
    const sessionUser = typeof window !== "undefined" ? sessionStorage.getItem("studymaster_session_user") : null;
    const savedUser = rememberedUser || sessionUser;
    if (savedUser) {
      setCurrentUser(savedUser);
      setAppStep("subject-select");
    }

    const savedHighlights = localStorage.getItem("studymaster-highlights");
    if (savedHighlights) {
      try {
        setHighlights(JSON.parse(savedHighlights));
      } catch (e) {
        console.error("Lỗi khi tải highlights:", e);
      }
    }

    // Load custom subjects
    const savedCustom = localStorage.getItem("studymaster_custom_subjects");
    if (savedCustom) {
      try {
        setCustomSubjects(JSON.parse(savedCustom));
      } catch (e) {
        console.error("Lỗi khi tải custom subjects:", e);
      }
    }

    // Load custom notes
    const savedNotes = localStorage.getItem("studymaster_custom_notes");
    if (savedNotes) {
      try {
        setCustomNotes(JSON.parse(savedNotes));
      } catch (e) {
        console.error("Lỗi khi tải custom notes:", e);
      }
    }
  }, []);

  // Load current user's avatar when user changes
  useEffect(() => {
    if (currentUser) {
      const savedAvatar = localStorage.getItem(`studymaster_avatar_${currentUser}`) || "/assets/cancer_mascot_transparent.png";
      setCurrentUserAvatar(savedAvatar);
    } else {
      setCurrentUserAvatar("");
    }
  }, [currentUser]);

  // Synchronize custom subjects into allSubjects list
  useEffect(() => {
    const hexToRgb = (hex) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
        : "13, 148, 136";
    };

    const merged = { ...subjects };
    customSubjects.forEach(subj => {
      const rgb = hexToRgb(subj.themeColor || "#0d9488");
      merged[subj.id] = {
        ...subj,
        themeColors: {
          accent: subj.themeColor || "#0d9488",
          secondary: subj.themeColor || "#0d9488",
          accentRgb: rgb
        },
        chapters: subj.chapters || [
          {
            id: `${subj.id}-ch1`,
            title: "Không gian Tự học",
            sections: [
              {
                id: `${subj.id}-sec1`,
                roman: "I",
                title: "Vở ghi chép cá nhân",
                subsections: [
                  {
                    id: `${subj.id}-sub1`,
                    number: "1",
                    title: "Ghi chú & Phác thảo",
                    parts: [
                      {
                        id: `${subj.id}-part1`,
                        label: "a",
                        title: "Không gian làm việc",
                        content: [
                          {
                            type: "paragraph",
                            text: "Đây là không gian tự học môn " + subj.title + ". Bạn có thể viết lý thuyết, công thức chuyên ngành vào ô ghi chép bên dưới, dùng bút highlight tô màu hoặc dùng cọ vẽ phác thảo sơ đồ trực tiếp lên đây!"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ],
        questionsMap: {}
      };
    });
    setAllSubjects(merged);
  }, [customSubjects]);

  const handleAddSubject = (e) => {
    e.preventDefault();
    if (!newSubTitle.trim()) return;

    const newId = `custom-${Date.now()}`;
    const newSubject = {
      id: newId,
      title: newSubTitle,
      description: newSubDesc || "Tự học môn chuyên ngành cá nhân.",
      category: newSubCategory,
      themeColor: newSubColor,
      quote: newSubQuote.trim() || undefined,
      isCustom: true
    };

    const updatedList = [...customSubjects, newSubject];
    setCustomSubjects(updatedList);
    localStorage.setItem("studymaster_custom_subjects", JSON.stringify(updatedList));

    // Clear form inputs
    setNewSubTitle("");
    setNewSubDesc("");
    setNewSubCategory("Chuyên ngành");
    setNewSubColor("#0d9488");
    setNewSubQuote("");
    setShowAddSubjectModal(false);
  };

  const handleDeleteSubject = (subjId, e) => {
    e.stopPropagation(); // Avoid triggering card selection click
    showConfirm({
      title: "Xác nhận xóa môn học",
      message: "Bạn có chắc chắn muốn xóa môn học tự chọn này cùng toàn bộ ghi chú liên quan không?",
      type: "warning",
      confirmText: "Xóa",
      cancelText: "Hủy",
      onConfirm: () => {
        const updatedList = customSubjects.filter(s => s.id !== subjId);
        setCustomSubjects(updatedList);
        localStorage.setItem("studymaster_custom_subjects", JSON.stringify(updatedList));

        // Clean notes
        const updatedNotes = { ...customNotes };
        delete updatedNotes[subjId];
        setCustomNotes(updatedNotes);
        localStorage.setItem("studymaster_custom_notes", JSON.stringify(updatedNotes));

        if (selectedSubjectId === subjId) {
          setSelectedSubjectId("tu-tuong-hcm");
        }
        showToast("Đã xóa môn học thành công", "success");
      }
    });
  };

  const handleSaveNotes = (subjId, text) => {
    const updated = { ...customNotes, [subjId]: text };
    setCustomNotes(updated);
    localStorage.setItem("studymaster_custom_notes", JSON.stringify(updated));
  };

  // Window resize and scroll trackers
  useEffect(() => {
    setWindowHeight(window.innerHeight);
    const handleResize = () => setWindowHeight(window.innerHeight);
    
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrollY(currentScroll);

      // If scrolled to the very top, auto-activate the first subsection
      if (currentScroll < 50 && !isManualScrollingRef.current) {
        const firstCh = chapters[0];
        if (firstCh && firstCh.sections[0]?.subsections[0]) {
          const firstSubId = firstCh.sections[0].subsections[0].id;
          setActiveSubsectionId(firstSubId);
        }
      }
    };

    const handleGlobalClick = (e) => {
      const ripple = document.createElement("span");
      ripple.className = "water-ripple-effect";
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
      document.body.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 700);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("click", handleGlobalClick);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleGlobalClick);
    };
  }, [appStep, chapters]);

  // GSAP animation for 3D Book on mount/reset
  useGSAP(() => {
    if (showHero && appStep === "study") {
      // Return and closing transition
      gsap.fromTo(".book-3d",
        { scale: 2.8, z: 600, opacity: 0, rotationX: 45, rotationY: -90 },
        { scale: 1, z: 0, opacity: 1, rotationX: 15, rotationY: -10, duration: 1.2, ease: "power2.out" }
      );
      gsap.fromTo(".book-cover-3d",
        { rotationY: -180 },
        { rotationY: 0, duration: 1.4, ease: "power2.out" }
      );
      gsap.fromTo(".storytelling-hero",
        { opacity: 0 },
        { opacity: 1, duration: 1.0, ease: "power2.out" }
      );
      // Reset quote chars to hidden
      gsap.set(".quote-char", { opacity: 0, filter: "blur(5px)", y: 5 });
      gsap.set(".quote-cursor", { display: "inline-block" });
    }
  }, { dependencies: [showHero, appStep, selectedSubjectId] });

  // GSAP Entrance Animations for Login/Register Screens
  useGSAP(() => {
    if (appStep === "login" || appStep === "register" || appStep === "forgot-password") {
      const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.2 } });
      
      // Mascot & celestial rings reveal
      tl.fromTo(".mascot-wrapper", 
        { scale: 0.3, opacity: 0, rotation: -45 },
        { scale: 1, opacity: 1, rotation: 0, duration: 1.6 }
      );
      
      // Orbit rings rotation intro
      tl.fromTo("svg.animate-spin-slow",
        { rotate: -180 },
        { rotate: 0, duration: 2 },
        "<"
      );
      
      // Login button entrance
      tl.fromTo(".landing-login-btn",
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.9"
      );
      
      // Footer elements fade-in
      tl.fromTo(".landing-footer",
        { opacity: 0 },
        { opacity: 0.8, duration: 1 },
        "-=0.6"
      );
    }
  }, { dependencies: [appStep], scope: landingContainerRef });

  // GSAP Modal overlay animations
  useGSAP(() => {
    if (showAuthOverlay && (appStep === "login" || appStep === "register" || appStep === "forgot-password")) {
      const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.6 } });
      
      // Modal card entrance
      tl.fromTo(".auth-modal-card",
        { scale: 0.9, y: 30, opacity: 0 },
        { scale: 1, y: 0, opacity: 1, duration: 0.5 }
      );
      
      // Stagger elements in the modal
      tl.fromTo(".auth-modal-card form > div, .auth-modal-card h2, .auth-modal-card p, .auth-modal-card button",
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.05 },
        "-=0.2"
      );
    }
  }, { dependencies: [showAuthOverlay, appStep], scope: landingContainerRef });

  // GSAP Subject Select grid entrance
  useGSAP(() => {
    if (appStep === "subject-select" && subjectGridRef.current) {
      // Bento cards reveal
      gsap.fromTo(".bento-subject-card, .add-subject-card",
        { y: 40, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, stagger: 0.1, duration: 0.8, ease: "power3.out" }
      );
      
      // Header title reveal
      gsap.fromTo(".select-subject-header > *",
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "power3.out" }
      );
    }
  }, { dependencies: [appStep], scope: subjectGridRef });

  // Ambient floating particles, Cancer constellation, and Water ripples canvas animation
  useEffect(() => {
    const canvas = particlesCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let particles = [];
    let ripples = [];
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Mouse movement tracker for ripples
    let lastRippleTime = 0;
    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastRippleTime > 120) { // throttled ripples
        ripples.push({
          x: e.clientX,
          y: e.clientY,
          radius: 2,
          maxRadius: Math.random() * 35 + 20,
          opacity: 0.55,
          speed: 1.1
        });
        lastRippleTime = now;
      }
    };

    const handleMouseClick = (e) => {
      // Strong ripple on mouse click (Water Element)
      ripples.push({
        x: e.clientX,
        y: e.clientY,
        radius: 2,
        maxRadius: 75,
        opacity: 0.85,
        speed: 1.8
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleMouseClick);

    const getThemeColors = () => {
      if (typeof window === "undefined") return { primary: "#1e1d1a", support: "#7d7c78", accent: "#d97706" };
      const style = window.getComputedStyle(document.body);
      const primary = style.getPropertyValue("--primary").trim() || "#1e1d1a";
      const support = style.getPropertyValue("--support").trim() || "#7d7c78";
      const accent = style.getPropertyValue("--accent").trim() || "#d97706";
      return { primary, support, accent };
    };

    const hexToRgbStr = (hex, alpha) => {
      if (!hex || !hex.startsWith("#")) return `rgba(30, 29, 26, ${alpha})`;
      const clean = hex.replace("#", "");
      let r, g, b;
      if (clean.length === 3) {
        r = parseInt(clean[0] + clean[0], 16);
        g = parseInt(clean[1] + clean[1], 16);
        b = parseInt(clean[2] + clean[2], 16);
      } else {
        r = parseInt(clean.substring(0, 2), 16);
        g = parseInt(clean.substring(2, 4), 16);
        b = parseInt(clean.substring(4, 6), 16);
      }
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };

    class Particle {
      constructor(x, y, isExplosion = false) {
        this.x = x !== undefined ? x : Math.random() * canvas.width;
        this.y = y !== undefined ? y : Math.random() * canvas.height;
        this.size = isExplosion ? Math.random() * 3 + 1.2 : Math.random() * 2 + 0.4;
        
        if (isExplosion) {
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 5 + 2.5; // High velocity
          this.speedX = Math.cos(angle) * speed;
          this.speedY = Math.sin(angle) * speed;
          this.opacity = Math.random() * 0.6 + 0.4;
          this.decay = Math.random() * 0.015 + 0.008;
        } else {
          this.speedX = Math.random() * 0.14 - 0.07;
          this.speedY = Math.random() * -0.22 - 0.06; // water bubbles floating up slowly
          this.opacity = Math.random() * 0.25 + 0.15;
          this.decay = 0;
        }
        
        this.isPrimary = Math.random() > 0.5;
        this.isExplosion = isExplosion;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.isExplosion) {
          this.opacity -= this.decay;
          this.speedX *= 0.98; // friction
          this.speedY *= 0.98;
        } else {
          if (this.y < 0) {
            this.y = canvas.height;
            this.x = Math.random() * canvas.width;
          }
          if (this.x < 0 || this.x > canvas.width) {
            this.speedX = -this.speedX;
          }
        }
      }
      draw() {
        if (this.opacity <= 0) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        const { accent, support } = getThemeColors();
        ctx.fillStyle = this.isPrimary 
          ? hexToRgbStr(accent, this.opacity) 
          : hexToRgbStr(support, this.opacity);
        ctx.fill();
      }
    }

    for (let i = 0; i < 40; i++) {
      particles.push(new Particle());
    }

    const handleExplode = () => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      for (let i = 0; i < 150; i++) {
        particles.push(new Particle(centerX, centerY, true));
      }
    };
    window.addEventListener("particles-explode", handleExplode);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles = particles.filter(p => !p.isExplosion || p.opacity > 0);
      
      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      ripples.forEach((ripple, idx) => {
        ripple.radius += ripple.speed;
        ripple.opacity -= 0.015;
        
        if (ripple.opacity <= 0 || ripple.radius >= ripple.maxRadius) {
          ripples.splice(idx, 1);
        } else {
          ctx.beginPath();
          const { accent } = getThemeColors();
          ctx.strokeStyle = hexToRgbStr(accent, ripple.opacity);
          ctx.lineWidth = 1.5;
          ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
          ctx.stroke();
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleMouseClick);
      window.removeEventListener("particles-explode", handleExplode);
    };
  }, [appStep]);

  // Sync mode-eraser body class
  useEffect(() => {
    if (activeTool === "eraser") {
      document.body.classList.add("mode-eraser");
    } else {
      document.body.classList.remove("mode-eraser");
    }
    return () => {
      document.body.classList.remove("mode-eraser");
    };
  }, [activeTool]);

  // Show/Hide Scroll-to-Top Button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when Hero is active in study mode
  useEffect(() => {
    if (appStep === "study" && showHero) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showHero, appStep]);

  // Refresh ScrollTrigger after Hero is hidden and DOM updates
  useEffect(() => {
    if (!showHero && appStep === "study") {
      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [showHero, appStep, activeSubsectionId, selectedSubjectId]);

  // Scroll to an element accounting for sticky header and GSAP pin spacer
  const HEADER_OFFSET = 72; // sticky header height in px (py-4 + content ≈ 56px) + breathing room

  const scrollToElementWithOffset = (el, behavior = "smooth") => {
    if (!el) return;
    // getBoundingClientRect gives position relative to viewport.
    // Adding window.scrollY gives absolute position in the document
    // (including GSAP pin spacer that has already been inserted into the DOM).
    const absoluteTop = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: Math.max(0, absoluteTop - HEADER_OFFSET),
      behavior,
    });
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const startTransition = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    // Create cinematic transition timeline
    const tl = gsap.timeline({
      onComplete: () => {
        setShowHero(false);
        setIsTransitioning(false);
        if (typeof window !== "undefined") {
          window.scrollTo({ top: 0, behavior: "instant" });
        }
      }
    });

    // 1. Open the 3D book cover
    tl.to(".book-cover-3d", {
      rotationY: -180,
      duration: 1.2,
      ease: "power2.inOut"
    });

    // 2. Type out the quote characters inside the right page
    const chars = gsap.utils.toArray(".quote-char");
    if (chars.length > 0) {
      tl.fromTo(chars,
        { opacity: 0, filter: "blur(5px)", y: 5 },
        {
          opacity: 1,
          filter: "blur(0px)",
          y: 0,
          stagger: 0.02,
          duration: 0.4,
          ease: "power1.out",
          onComplete: () => {
            gsap.to(".quote-cursor", { display: "none", duration: 0.1 });
          }
        },
        "-=0.6" // Start typing while the cover is still opening
      );
    }

    // 3. Trigger Canvas background explosion particles
    tl.add(() => {
      if (typeof window !== "undefined") {
        const event = new CustomEvent("particles-explode");
        window.dispatchEvent(event);
      }
    }, "-=0.2");

    // 4. Zoom the 3D book into the camera (scale and move depth)
    tl.to(".book-3d", {
      scale: 2.8,
      z: 600,
      opacity: 0,
      duration: 1.2,
      ease: "power2.in"
    }, "+=0.2"); // short pause to see typing finished

    // 5. Fade out Hero section background and elements
    tl.to(".storytelling-hero", {
      opacity: 0,
      duration: 1.0,
      ease: "power2.inOut"
    }, "-=1.0");
  };

  const handleStartJourney = () => {
    startTransition();
  };

  const handleNavigate = (elementId) => {
    // Resolve the element ID: sidebar passes raw subId, chapter-xxx, or section-xxx
    const el =
      document.getElementById(elementId) ||
      document.getElementById(`content-${elementId}`) ||
      document.getElementById(`chapter-${elementId}`) ||
      document.getElementById(`section-${elementId}`);
    if (el) {
      isManualScrollingRef.current = true;
      scrollToElementWithOffset(el, "smooth");
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        isManualScrollingRef.current = false;
      }, 1200);
    }
  };


  const handleClearAll = () => {
    showConfirm({
      title: "Xóa toàn bộ bản vẽ",
      message: "Bạn có chắc chắn muốn xóa toàn bộ nét vẽ và highlight?",
      type: "warning",
      confirmText: "Xóa sạch",
      cancelText: "Hủy",
      onConfirm: () => {
        if (onClearRef.current) {
          onClearRef.current();
        }
        setHighlights([]);
        localStorage.removeItem("studymaster-highlights");
        setReRenderKey(prev => prev + 1);
        showToast("Đã xóa sạch nét vẽ và highlight", "success");
      }
    });
  };

  // Highlights Erasing Logic
  const handleContentClick = (e) => {
    if (activeTool !== "eraser") return;

    let target = e.target;
    if (target && target.tagName === "CANVAS") {
      const canvas = target;
      canvas.style.pointerEvents = "none";
      target = document.elementFromPoint(e.clientX, e.clientY);
      canvas.style.pointerEvents = "auto";
    }

    const hlSpan = target ? target.closest(".user-highlight") : null;
    if (hlSpan) {
      const id = hlSpan.getAttribute("data-hl-id");
      const updated = highlights.filter(h => h.id !== id);
      setHighlights(updated);
      localStorage.setItem("studymaster-highlights", JSON.stringify(updated));
      setReRenderKey(prev => prev + 1);
    }
  };

  // Text Highlighting Logic
  const handleTextSelection = () => {
    if (activeTool !== "highlighter") return;

    const selection = window.getSelection();
    if (selection.isCollapsed || !selection.toString().trim()) return;

    const range = selection.getRangeAt(0);
    let container = range.commonAncestorContainer;
    if (container.nodeType === Node.TEXT_NODE) {
      container = container.parentNode;
    }

    const hlElement = container.closest("[data-hl-path]");
    if (!hlElement) return;

    const path = hlElement.getAttribute("data-hl-path");

    const preSelectionRange = range.cloneRange();
    preSelectionRange.selectNodeContents(hlElement);
    preSelectionRange.setEnd(range.startContainer, range.startOffset);
    
    const startOffset = preSelectionRange.toString().length;
    const endOffset = startOffset + range.toString().length;

    const id = `hl-${Date.now()}`;
    const highlight = {
      id,
      path,
      startOffset,
      endOffset,
      color: activeColor,
      text: range.toString()
    };

    const updated = [...highlights, highlight];
    setHighlights(updated);
    localStorage.setItem("studymaster-highlights", JSON.stringify(updated));

    applyHighlight(hlElement, startOffset, endOffset, activeColor, id);
    selection.removeAllRanges();
  };

  const applyHighlight = (element, start, end, color, id) => {
    const textNodes = [];
    const walk = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null, false);
    let node;
    while (node = walk.nextNode()) {
      textNodes.push(node);
    }

    let charIndex = 0;
    textNodes.forEach(node => {
      const nodeLength = node.nodeValue.length;
      const nodeStart = charIndex;
      const nodeEnd = charIndex + nodeLength;

      if (nodeEnd > start && nodeStart < end) {
        const offsetInNodeStart = Math.max(0, start - nodeStart);
        const offsetInNodeEnd = Math.min(nodeLength, end - nodeStart);

        let targetNode = node;
        if (offsetInNodeStart > 0) {
          targetNode = node.splitText(offsetInNodeStart);
        }
        
        const remainingLength = offsetInNodeEnd - offsetInNodeStart;
        if (remainingLength > 0 && targetNode.nodeValue.length > remainingLength) {
          targetNode.splitText(remainingLength);
        }

        const span = document.createElement("span");
        span.className = "user-highlight";
        span.setAttribute("data-hl-id", id);
        span.style.backgroundColor = color;
        
        targetNode.parentNode.insertBefore(span, targetNode);
        span.appendChild(targetNode);
      }
      charIndex += nodeLength;
    });
  };

  const applyAllHighlights = (container, highlightsList) => {
    if (!container) return;
    const hlElements = container.querySelectorAll("[data-hl-path]");
    hlElements.forEach(el => {
      const path = el.getAttribute("data-hl-path");
      const matches = highlightsList.filter(h => h.path === path);
      matches.sort((a, b) => b.startOffset - a.startOffset);
      matches.forEach(h => {
        applyHighlight(el, h.startOffset, h.endOffset, h.color, h.id);
      });
    });
  };

  const clearDomHighlights = (container) => {
    if (!container) return;
    const highlightSpans = container.querySelectorAll("span.user-highlight");
    highlightSpans.forEach(span => {
      const parent = span.parentNode;
      if (parent) {
        while (span.firstChild) {
          parent.insertBefore(span.firstChild, span);
        }
        parent.removeChild(span);
      }
    });
    container.normalize();
  };

  // Re-apply highlights on scroll, navigation or highlight updates
  useEffect(() => {
    if (appStep !== "study" || isQuizMode) return;

    const timer = setTimeout(() => {
      if (contentContainerRef.current) {
        applyAllHighlights(contentContainerRef.current, highlights);
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [highlights, isQuizMode, activeSubsectionId, reRenderKey, appStep]);

  // Scroll Spy Observer
  useEffect(() => {
    if (appStep !== "study" || isQuizMode) return;

    const contentArea = contentContainerRef.current;
    if (!contentArea) return;

    const subsections = contentArea.querySelectorAll(".subsection[id^=\"content-\"]");
    if (subsections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isManualScrollingRef.current) {
            const id = entry.target.id.replace("content-", "");
            setActiveSubsectionId(id);
          }
        });
      },
      {
        rootMargin: "-100px 0px -60% 0px",
        threshold: 0,
      }
    );

    subsections.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [isQuizMode, appStep, reRenderKey, chapters]);

  // Scroll Reveal elements IntersectionObserver (Cinematic reveals)
  useEffect(() => {
    if (appStep !== "study" || isQuizMode || showHero) return;

    const elements = document.querySelectorAll(".scroll-reveal");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((el) => revealObserver.observe(el));
    return () => revealObserver.disconnect();
  }, [isQuizMode, showHero, reRenderKey, appStep]);

  // Password requirements validator helper
  const getPasswordValidation = (password) => {
    return {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      number: /[0-9]/.test(password),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(password)
    };
  };

  // Auth Operations
  const handleRegister = (e) => {
    e.preventDefault();
    const validation = getPasswordValidation(regPass);
    if (!validation.length || !validation.uppercase || !validation.number || !validation.special) {
      showAlert({
        title: "Đăng ký không thành công",
        message: "Mật khẩu chưa đạt yêu cầu bảo mật!",
        type: "warning"
      });
      return;
    }
    if (regPass !== regConfirmPass) {
      showAlert({
        title: "Đăng ký không thành công",
        message: "Xác nhận mật khẩu không khớp!",
        type: "warning"
      });
      return;
    }

    // Save user locally
    const users = JSON.parse(localStorage.getItem("studymaster_users") || "[]");
    if (users.some(u => u.username === regName || u.email === regEmail)) {
      showAlert({
        title: "Đăng ký không thành công",
        message: "Tên đăng nhập hoặc email đã tồn tại!",
        type: "warning"
      });
      return;
    }

    users.push({ username: regName, email: regEmail, password: regPass });
    localStorage.setItem("studymaster_users", JSON.stringify(users));
    showToast("Đăng ký tài khoản thành công! Vui lòng đăng nhập.", "success");
    
    // Clear registration fields
    setLoginUser(regName);
    setRegName("");
    setRegEmail("");
    setRegPass("");
    setRegConfirmPass("");
    setAppStep("login");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("studymaster_users") || "[]");
    const foundUser = users.find(u => (u.username === loginUser || u.email === loginUser) && u.password === loginPass);
    
    if (foundUser || (loginUser === "admin" && loginPass === "admin")) {
      const displayName = foundUser ? foundUser.username : "admin";
      if (foundUser && foundUser.locked) {
        showAlert({
          title: "Tài khoản bị khóa",
          message: "Tài khoản của bạn đã bị Admin khóa. Vui lòng liên hệ Admin để được mở khóa!",
          type: "warning"
        });
        return;
      }
      loginSuccess(displayName);
    } else {
      showAlert({
        title: "Đăng nhập thất bại",
        message: "Tên đăng nhập hoặc mật khẩu không chính xác. Vui lòng thử lại!",
        type: "warning"
      });
    }
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    showAlert({
      title: "Khôi phục mật khẩu",
      message: `Một liên kết khôi phục mật khẩu đã được gửi đến: ${forgotEmail}. Hãy kiểm tra hộp thư của bạn!`,
      type: "info"
    });
    setForgotEmail("");
    setAppStep("login");
  };

  const handleRealGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      
      if (!user || !user.email) {
        showToast("Không thể lấy thông tin email từ Google.", "error");
        return;
      }
      
      const email = user.email;
      const users = JSON.parse(localStorage.getItem("studymaster_users") || "[]");
      const foundUser = users.find(u => u.email === email);
      
      if (foundUser) {
        if (foundUser.locked) {
          showAlert({
            title: "Tài khoản bị khóa",
            message: "Tài khoản của bạn đã bị Admin khóa. Vui lòng liên hệ Admin để được mở khóa!",
            type: "warning"
          });
          return;
        }
        showToast(`Chào mừng quay trở lại, ${foundUser.username}!`, "success");
        loginSuccess(foundUser.username);
      } else {
        // First-time login: store user info in temporary state and show register popup
        setGoogleUserTemp({
          email: email,
          displayName: user.displayName || ""
        });
        // Pre-fill username with email prefix
        const emailPrefix = email.split("@")[0].replace(/[^a-zA-Z0-9]/g, "");
        setGoogleUsername(emailPrefix);
        setGooglePassword("");
        setGoogleConfirmPassword("");
        setShowGoogleRegisterModal(true);
      }
    } catch (error) {
      console.error("Google Auth Error:", error);
      if (error.code !== "auth/popup-closed-by-user") {
        showToast(`Lỗi đăng nhập Google: ${error.message}`, "error");
      }
    }
  };

  const handleGoogleRegisterSubmit = (e) => {
    e.preventDefault();
    if (!googleUserTemp) return;
    
    const usernameTrimmed = googleUsername.trim();
    if (!usernameTrimmed) {
      showToast("Tên đăng nhập không được để trống.", "error");
      return;
    }
    
    // Check if username already exists in local database
    const users = JSON.parse(localStorage.getItem("studymaster_users") || "[]");
    const usernameExists = users.some(u => u.username.toLowerCase() === usernameTrimmed.toLowerCase());
    
    if (usernameExists) {
      showToast("Tên đăng nhập này đã được sử dụng. Vui lòng chọn tên khác.", "error");
      return;
    }
    
    // Password validation: 4-factors
    const password = googlePassword;
    const confirmPassword = googleConfirmPassword;
    
    if (password !== confirmPassword) {
      showToast("Mật khẩu xác nhận không khớp.", "error");
      return;
    }
    
    const validation = getPasswordValidation(password);
    if (!validation.length || !validation.uppercase || !validation.number || !validation.special) {
      showToast("Mật khẩu không đáp ứng đầy đủ yêu cầu bảo mật.", "error");
      return;
    }
    
    // Create new student user
    const newUser = {
      username: usernameTrimmed,
      email: googleUserTemp.email,
      password: password,
      role: "student",
      locked: false,
      createdAt: Date.now()
    };
    
    users.push(newUser);
    localStorage.setItem("studymaster_users", JSON.stringify(users));
    
    // Log registration activity
    const systemLogs = JSON.parse(localStorage.getItem("studymaster_logs") || "[]");
    systemLogs.push({
      id: Date.now(),
      user: usernameTrimmed,
      action: `Đăng ký học viên mới bằng Google (Email: ${googleUserTemp.email})`,
      timestamp: new Date().toLocaleString("vi-VN"),
      type: "register"
    });
    localStorage.setItem("studymaster_logs", JSON.stringify(systemLogs));
    
    showToast("Đăng ký thông tin học viên thành công!", "success");
    setShowGoogleRegisterModal(false);
    setGoogleUserTemp(null);
    
    // Log the user in
    loginSuccess(usernameTrimmed);
  };

  const loginSuccess = (username) => {
    setCurrentUser(username);
    localStorage.setItem("studymaster_user_name", username);
    if (rememberMe) {
      localStorage.setItem("studymaster_session_user", username);
      localStorage.setItem("studymaster_remember_me", "true");
    } else {
      sessionStorage.setItem("studymaster_session_user", username);
      localStorage.removeItem("studymaster_session_user");
      localStorage.removeItem("studymaster_remember_me");
    }
    
    if (username.toLowerCase() === "admin") {
      setAppStep("admin-dashboard");
    } else {
      setAppStep("subject-select");
    }
  };

  const handleLogout = () => {
    showConfirm({
      title: "Xác nhận đăng xuất",
      message: "Bạn có chắc chắn muốn đăng xuất không?",
      type: "confirm",
      confirmText: "Đăng xuất",
      cancelText: "Hủy",
      onConfirm: () => {
        setCurrentUser("");
        setLoginPass("");
        // Clear both storage types
        localStorage.removeItem("studymaster_remember_me");
        localStorage.removeItem("studymaster_session_user");
        sessionStorage.removeItem("studymaster_session_user");
        setAppStep("login");
        showToast("Đã đăng xuất tài khoản", "info");
      }
    });
  };

  const handleSubjectSelect = (subjId) => {
    setSelectedSubjectId(subjId);
    setScrollY(0);
    setShowHero(true);
    setIsTransitioning(false);
    
    // Reset scroll to top BEFORE rendering study view
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
    
    const chaptersList = allSubjects[subjId]?.chapters || [];
    if (chaptersList.length > 0 && chaptersList[0].sections.length > 0 && chaptersList[0].sections[0].subsections.length > 0) {
      setActiveSubsectionId(chaptersList[0].sections[0].subsections[0].id);
    }
    
    setAppStep("study");
  };


  // Rendering parameters

  const scrolledOpacity = Math.max(0, 1 - scrollY / (windowHeight * 0.7));
  const scrolledTranslate = -scrollY * 0.15;

  const regPassVal = getPasswordValidation(regPass);

  const getSubjectHighScore = (subj) => {
    if (typeof window === "undefined") return null;
    let maxScoreInfo = null;
    try {
      const chaptersList = subj.chapters || [];
      let bestPercent = -1;
      chaptersList.forEach((ch) => {
        const stored = localStorage.getItem(`studymaster_quiz_rankings_${ch.id}`);
        if (stored) {
          const rankings = JSON.parse(stored);
          rankings.forEach((r) => {
            const percent = r.total > 0 ? (r.score / r.total) : 0;
            if (percent > bestPercent) {
              bestPercent = percent;
              maxScoreInfo = { score: r.score, total: r.total, percent: Math.round(percent * 100) };
            }
          });
        }
      });
    } catch (e) {
      console.error(e);
    }
    return maxScoreInfo;
  };

  const onCardMouseMove = (e) => {
    const cardEl = e.currentTarget;
    const rect = cardEl.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const width = rect.width;
    const height = rect.height;
    const rotateX = ((y - height / 2) / height) * -8;
    const rotateY = ((x - width / 2) / width) * 8;
    
    gsap.to(cardEl, {
      rotateX: rotateX,
      rotateY: rotateY,
      transformPerspective: 800,
      ease: "power1.out",
      duration: 0.2
    });
    
    const glowEl = cardEl.querySelector(".card-glow-reflection");
    if (glowEl) {
      const accentRgb = cardEl.style.getPropertyValue('--accent-rgb') || '217, 119, 6';
      gsap.to(glowEl, {
        background: `radial-gradient(300px circle at ${x}px ${y}px, rgba(${accentRgb.trim()}, 0.15), transparent 80%)`,
        duration: 0.1
      });
    }
  };

  const onCardMouseLeave = (e) => {
    const cardEl = e.currentTarget;
    gsap.to(cardEl, {
      rotateX: 0,
      rotateY: 0,
      ease: "power2.out",
      duration: 0.4
    });
    
    const glowEl = cardEl.querySelector(".card-glow-reflection");
    if (glowEl) {
      const accentRgb = cardEl.style.getPropertyValue('--accent-rgb') || '217, 119, 6';
      gsap.to(glowEl, {
        background: `radial-gradient(300px circle at 50% 50%, rgba(${accentRgb.trim()}, 0), transparent 80%)`,
        duration: 0.4
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#faf8f4] flex flex-col relative">
      {/* Background Particles Canvas (Only active in Login, Register, Forgot Password, Subject Select, or Study View) */}
      {(appStep === "login" || appStep === "register" || appStep === "forgot-password" || appStep === "subject-select" || appStep === "study") && (
        <canvas
          ref={particlesCanvasRef}
          className="fixed inset-0 w-full h-full pointer-events-none z-20"
          style={{ opacity: appStep === "study" ? scrolledOpacity : 0.85 }}
        />
      )}

      {/* 1, 2, 3. VIEW: UNIFIED CINEMATIC LANDING & OVERLAY AUTH VIEW */}
      {(appStep === "login" || appStep === "register" || appStep === "forgot-password") && (
        <div
          ref={landingContainerRef}
          className="login-bg-container min-h-screen flex flex-col justify-center items-center z-10 relative bg-cover bg-center bg-[#07090e] w-full overflow-hidden text-stone-100 transition-colors duration-500"
        >
          {/* Main Cinematic Landing Page Content (blurs when overlay is open) */}
          <div className={`flex-grow w-full z-30 blur-transition relative ${showAuthOverlay ? "blur-active" : ""}`}>
            {/* Mascot & Astrology Wheel (positioned absolutely at y = 28% on mobile / 25% on desktop) */}
            <div 
              className="mascot-align absolute top-[28%] md:top-[25%] left-1/2 flex items-center justify-center"
            >
              <div className="mascot-wrapper float-slow relative w-40 h-40 md:w-48 md:h-48 flex items-center justify-center">
                {/* Nested Celestial Gyroscopic Rings SVG */}
                <svg className="absolute w-full h-full animate-spin-slow opacity-65 text-accent/80" viewBox="0 0 200 200" fill="none">
                  {/* Orbit ring 1 */}
                  <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                  {/* Orbit ring 2 */}
                  <circle cx="100" cy="100" r="76" stroke="currentColor" strokeWidth="0.75" />
                  {/* 3D Ellipses */}
                  <ellipse cx="100" cy="100" rx="95" ry="32" stroke="currentColor" strokeWidth="1" transform="rotate(-30 100 100)" />
                  <ellipse cx="100" cy="100" rx="95" ry="32" stroke="currentColor" strokeWidth="1" transform="rotate(30 100 100)" />
                  {/* Celestial nodes */}
                  <circle cx="100" cy="10" r="3" fill="currentColor" className="animate-pulse" />
                  <circle cx="100" cy="190" r="3" fill="currentColor" className="animate-pulse" />
                  <circle cx="48" cy="48" r="2" fill="currentColor" />
                  <circle cx="152" cy="152" r="2" fill="currentColor" />
                </svg>

                {/* Gold Medallion Mascot inside gold border */}
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden z-10 flex items-center justify-center p-1 bg-transparent border-2 border-accent/40 shadow-[0_0_25px_rgba(245,158,11,0.35)]">
                  <img 
                    src="/assets/cancer_mascot_transparent.png" 
                    alt="Cancer Zodiac Mascot" 
                    className="w-full h-full object-contain scale-[1.05]" 
                  />
                </div>
              </div>
            </div>
            
            {/* Hidden for accessibility/SEO, styled out visually since it is baked in the image */}
            <h1 className="sr-only">StudyMaster</h1>
            <p className="sr-only">♋</p>
            
            {/* Animated Login Button (positioned absolutely at y = 53.5% on mobile / 68% on desktop) */}
            <div 
              className="btn-align absolute top-[53.5%] md:top-[68%] left-1/2"
            >
              <button
                onClick={() => setShowAuthOverlay(true)}
                className="landing-login-btn px-6 py-1.5 md:px-10 md:py-2.5 rounded-full border border-accent/60 text-accent bg-[#12110f]/30 hover:bg-accent hover:text-stone-950 text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-[0_0_15px_rgba(217,119,6,0.15)] cursor-pointer hover:scale-105 hover:shadow-[0_0_25px_rgba(217,119,6,0.3)] active:scale-95 duration-300 hover:border-accent w-[135px] md:w-[180px]"
              >
                Đăng nhập
              </button>
            </div>
          </div>

          {/* Minimalist Footer positioned absolute bottom to prevent pushing content layout */}
          <div className={`landing-footer absolute bottom-2 py-2 text-[10px] text-stone-400/80 flex justify-between items-center w-full max-w-5xl px-6 z-30 blur-transition ${showAuthOverlay ? "blur-active" : ""}`}>
            <span>© 2026 StudyMaster. Thấu hiểu & Phát triển.</span>
            <span className="flex items-center gap-1.5">
              <span>Độc quyền chiêm tinh học</span>
              <span className="text-accent font-bold">♋</span>
            </span>
          </div>

          {/* Centered Auth Overlay Modal */}
          <div
            className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/45 dark:bg-black/60 backdrop-blur-md transition-all duration-500 ${
              showAuthOverlay ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
          >
            <div
              className={`auth-modal-card w-full max-w-md p-6 md:p-8 rounded-3xl border border-accent/20 bg-[#0e1015]/95 backdrop-blur-2xl shadow-[0_0_40px_rgba(245,158,11,0.15)] relative text-stone-100 transition-transform duration-500 ${
                showAuthOverlay ? "translate-y-0 scale-100" : "translate-y-4 scale-95"
              }`}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowAuthOverlay(false)}
                className="absolute top-4 right-4 p-1.5 rounded-full text-stone-400 hover:text-accent hover:bg-stone-850/50 transition-colors cursor-pointer"
                title="Quay lại màn hình chính"
              >
                <X size={16} />
              </button>

              {/* RENDER FORM: LOGIN */}
              {appStep === "login" && (
                <div className="animate-in">
                  <div className="text-center mb-6">
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-accent/30 mx-auto mb-2 shadow-md bg-transparent p-1 flex items-center justify-center">
                      <img src="/assets/cancer_mascot_transparent.png" alt="Cancer Logo" className="w-full h-full object-contain" />
                    </div>
                    <h2 className="text-lg font-bold font-playfair text-stone-100">Chào mừng trở lại</h2>
                    <p className="text-accent text-[9px] uppercase tracking-widest font-semibold mt-0.5">Cổng học tập StudyMaster</p>
                  </div>

                  <form onSubmit={handleLogin} className="space-y-5">
                    <div>
                      <label className="block text-[9px] font-bold text-static-stone-400 uppercase mb-1.5">Tên đăng nhập hoặc Email</label>
                      <div className="relative">
                        <User size={14} className="absolute left-0 top-1/2 -translate-y-1/2 text-static-stone-400" />
                        <input
                          type="text"
                          required
                          placeholder="Nhập tên đăng nhập hoặc email..."
                          value={loginUser}
                          onChange={(e) => setLoginUser(e.target.value)}
                          className="w-full pl-7 pr-4 py-2 border-b border-stone-800 focus:border-accent bg-transparent text-xs text-static-stone-100 placeholder-stone-500 focus:outline-none transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-1.5">
                        <label className="block text-[9px] font-bold text-static-stone-400 uppercase">Mật khẩu</label>
                        <button
                          type="button"
                          onClick={() => setAppStep("forgot-password")}
                          className="text-[9px] text-accent hover:underline font-semibold"
                        >
                          Quên mật khẩu?
                        </button>
                      </div>
                      <div className="relative">
                        <Lock size={14} className="absolute left-0 top-1/2 -translate-y-1/2 text-static-stone-400" />
                        <input
                          type={showPass ? "text" : "password"}
                          required
                          placeholder="Nhập mật khẩu..."
                          value={loginPass}
                          onChange={(e) => setLoginPass(e.target.value)}
                          className="w-full pl-7 pr-9 py-2 border-b border-stone-800 focus:border-accent bg-transparent text-xs text-static-stone-100 placeholder-stone-500 focus:outline-none transition-all duration-300"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPass(!showPass)}
                          className="absolute right-0 top-1/2 -translate-y-1/2 text-static-stone-400 hover:text-accent"
                        >
                          {showPass ? <EyeOff size={14} /> : <Eye size={14} />}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="w-3.5 h-3.5 accent-accent bg-stone-950 border-stone-800 rounded focus:ring-0 cursor-pointer"
                      />
                      <label htmlFor="remember-me" className="ml-2 text-[10px] text-static-stone-400 font-semibold select-none cursor-pointer">
                        Ghi nhớ đăng nhập (kể cả khi đóng trình duyệt)
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 mt-2 rounded-xl bg-accent text-stone-950 hover:bg-accent/90 font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg cursor-pointer hover:scale-[1.01] active:scale-[0.99] water-ripple-button"
                    >
                      Đăng nhập
                    </button>
                  </form>

                  <div className="relative flex py-4 items-center">
                    <div className="flex-grow border-t border-stone-800"></div>
                    <span className="flex-shrink mx-3 text-static-stone-400 text-[9px] font-bold uppercase tracking-widest">Hoặc</span>
                    <div className="flex-grow border-t border-stone-800"></div>
                  </div>

                  <button
                    onClick={handleRealGoogleLogin}
                    className="w-full py-2 rounded-xl border border-stone-800 hover:border-accent/40 bg-transparent text-static-stone-300 hover:text-white font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <GoogleIcon size={16} />
                    <span>Đăng nhập với Google</span>
                  </button>

                  <p className="text-center text-[11px] text-static-stone-400 mt-6">
                    Chưa có tài khoản?{" "}
                    <button
                      onClick={() => setAppStep("register")}
                      className="text-accent hover:underline font-bold ml-1"
                    >
                      Đăng ký ngay
                    </button>
                  </p>
                </div>
              )}

              {/* RENDER FORM: REGISTER */}
              {appStep === "register" && (
                <div className="animate-in space-y-4">
                  <button
                    onClick={() => setAppStep("login")}
                    className="flex items-center gap-1.5 text-stone-500 dark:text-stone-400 hover:text-accent text-[10px] font-semibold mb-2 transition-colors"
                  >
                    <ArrowLeft size={12} />
                    <span>Quay lại Đăng nhập</span>
                  </button>

                  <div className="mb-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden border border-accent/30 shadow bg-transparent flex-shrink-0 flex items-center justify-center p-1">
                      <img src="/assets/cancer_mascot_transparent.png" alt="Cancer Logo" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h2 className="text-base font-bold font-playfair text-stone-100">Đăng ký tài khoản</h2>
                      <p className="text-static-stone-400 text-[9px]">Tự lưu trữ kết quả và ghi chép học tập cá nhân.</p>
                    </div>
                  </div>

                  <form onSubmit={handleRegister} className="space-y-4">
                    <div>
                      <label className="block text-[9px] font-bold text-static-stone-400 uppercase mb-1">Tên người học</label>
                      <div className="relative">
                        <User size={14} className="absolute left-0 top-1/2 -translate-y-1/2 text-static-stone-400" />
                        <input
                          type="text"
                          required
                          placeholder="Nhập tên học viên..."
                          value={regName}
                          onChange={(e) => setRegName(e.target.value)}
                          className="w-full pl-7 pr-4 py-2 border-b border-stone-800 focus:border-accent bg-transparent text-xs text-static-stone-100 placeholder-stone-500 focus:outline-none transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[9px] font-bold text-static-stone-400 uppercase mb-1">Địa chỉ Email</label>
                      <div className="relative">
                        <Mail size={14} className="absolute left-0 top-1/2 -translate-y-1/2 text-static-stone-400" />
                        <input
                          type="email"
                          required
                          placeholder="Nhập email học viên..."
                          value={regEmail}
                          onChange={(e) => setRegEmail(e.target.value)}
                          className="w-full pl-7 pr-4 py-2 border-b border-stone-800 focus:border-accent bg-transparent text-xs text-static-stone-100 placeholder-stone-500 focus:outline-none transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[9px] font-bold text-static-stone-400 uppercase mb-1">Mật khẩu</label>
                      <div className="relative">
                        <Lock size={14} className="absolute left-0 top-1/2 -translate-y-1/2 text-static-stone-400" />
                        <input
                          type={showRegPass ? "text" : "password"}
                          required
                          placeholder="Tạo mật khẩu..."
                          value={regPass}
                          onChange={(e) => setRegPass(e.target.value)}
                          className="w-full pl-7 pr-9 py-2 border-b border-stone-800 focus:border-accent bg-transparent text-xs text-static-stone-100 placeholder-stone-500 focus:outline-none transition-all duration-300"
                        />
                        <button
                          type="button"
                          onClick={() => setShowRegPass(!showRegPass)}
                          className="absolute right-0 top-1/2 -translate-y-1/2 text-static-stone-400 hover:text-accent"
                        >
                          {showRegPass ? <EyeOff size={14} /> : <Eye size={14} />}
                        </button>
                      </div>
                    </div>

                    {/* Password Validator Checklist */}
                    {regPass.length > 0 && (
                      <div className="bg-stone-950/80 p-2.5 rounded-xl border border-stone-850 space-y-1 text-[9px] text-static-stone-400">
                        <div className="font-semibold text-static-stone-300 flex items-center gap-1">
                          <ShieldAlert size={10} className="text-accent" />
                          <span>Tiêu chuẩn bảo mật:</span>
                        </div>
                        <div className="grid grid-cols-2 gap-1 font-semibold">
                          <div className="flex items-center gap-1">
                            {regPassVal.length ? <Check size={10} className="text-accent" /> : <X size={10} className="text-red-500" />}
                            <span className={regPassVal.length ? "text-accent" : "text-static-stone-500"}>$\ge$ 8 ký tự</span>
                          </div>
                          <div className="flex items-center gap-1">
                            {regPassVal.uppercase ? <Check size={10} className="text-accent" /> : <X size={10} className="text-red-500" />}
                            <span className={regPassVal.uppercase ? "text-accent" : "text-static-stone-500"}>$\ge$ 1 chữ hoa</span>
                          </div>
                          <div className="flex items-center gap-1">
                            {regPassVal.number ? <Check size={10} className="text-accent" /> : <X size={10} className="text-red-500" />}
                            <span className={regPassVal.number ? "text-accent" : "text-static-stone-500"}>$\ge$ 1 số</span>
                          </div>
                          <div className="flex items-center gap-1">
                            {regPassVal.special ? <Check size={10} className="text-accent" /> : <X size={10} className="text-red-500" />}
                            <span className={regPassVal.special ? "text-accent" : "text-static-stone-500"}>$\ge$ 1 ký tự đặc biệt</span>
                          </div>
                        </div>
                      </div>
                    )}

                    <div>
                      <label className="block text-[9px] font-bold text-static-stone-400 uppercase mb-1">Xác nhận mật khẩu</label>
                      <div className="relative">
                        <Lock size={14} className="absolute left-0 top-1/2 -translate-y-1/2 text-static-stone-400" />
                        <input
                          type="password"
                          required
                          placeholder="Nhập lại mật khẩu..."
                          value={regConfirmPass}
                          onChange={(e) => setRegConfirmPass(e.target.value)}
                          className="w-full pl-7 pr-4 py-2 border-b border-stone-800 focus:border-accent bg-transparent text-xs text-static-stone-100 placeholder-stone-500 focus:outline-none transition-all duration-300"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 mt-2 rounded-xl bg-accent text-stone-950 hover:bg-accent/90 font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg cursor-pointer hover:scale-[1.01] active:scale-[0.99] water-ripple-button"
                    >
                      Đăng ký tài khoản
                    </button>
                  </form>
                </div>
              )}

              {/* RENDER FORM: FORGOT PASSWORD */}
              {appStep === "forgot-password" && (
                <div className="animate-in space-y-4">
                  <button
                    onClick={() => setAppStep("login")}
                    className="flex items-center gap-1.5 text-static-stone-400 hover:text-accent text-[10px] font-semibold mb-2 transition-colors"
                  >
                    <ArrowLeft size={12} />
                    <span>Quay lại Đăng nhập</span>
                  </button>

                  <div className="mb-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden border border-accent/30 shadow bg-transparent flex-shrink-0 flex items-center justify-center p-1 animate-pulse">
                      <img src="/assets/cancer_mascot_transparent.png" alt="Cancer Logo" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h2 className="text-base font-bold font-playfair text-stone-100">Khôi phục mật khẩu</h2>
                      <p className="text-static-stone-400 text-[10px]">Nhập địa chỉ email của bạn để lấy lại mật khẩu.</p>
                    </div>
                  </div>

                  <form onSubmit={handleForgotPassword} className="space-y-4">
                    <div>
                      <label className="block text-[9px] font-bold text-static-stone-400 uppercase mb-1">Địa chỉ Email đã đăng ký</label>
                      <div className="relative">
                        <Mail size={14} className="absolute left-0 top-1/2 -translate-y-1/2 text-static-stone-400" />
                        <input
                          type="email"
                          required
                          placeholder="Nhập email của bạn..."
                          value={forgotEmail}
                          onChange={(e) => setForgotEmail(e.target.value)}
                          className="w-full pl-7 pr-4 py-2 border-b border-stone-800 focus:border-accent bg-transparent text-xs text-static-stone-100 placeholder-stone-500 focus:outline-none transition-all duration-300"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 mt-2 rounded-xl bg-accent text-stone-950 hover:bg-accent/90 font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg cursor-pointer hover:scale-[1.01] active:scale-[0.99] water-ripple-button"
                    >
                      Khôi phục mật khẩu
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 4. VIEW: SUBJECT SELECTION VIEW */}
      {appStep === "subject-select" && (
        <div
          ref={subjectGridRef}
          className="min-h-screen flex flex-col items-center justify-center p-6 z-10 relative w-full overflow-hidden bg-[#faf8f4]"
        >
          {/* Subtle grain texture overlay */}
          <div className="absolute inset-0 z-20 pointer-events-none bg-transparent" />

          <div className="w-full max-w-5xl space-y-8 py-10 z-30 relative">
            <div className="select-subject-header text-center">
              <span className="text-[10px] md:text-xs font-extrabold uppercase tracking-widest text-accent flex items-center justify-center gap-1.5 select-none mb-1">
                Chào mừng, {currentUser} 🌟
              </span>
              <h1 className="text-2xl md:text-4xl font-extrabold font-playfair tracking-tight mt-1 uppercase tracking-wider text-stone-900">
                Chọn môn học của bạn
              </h1>
              <p className="text-xs mt-2 max-w-md mx-auto font-sans leading-relaxed text-stone-600">
                Quản lý cá nhân hóa môn học đại cương và chuyên ngành.
              </p>
            </div>

            <div className="bento-grid-subject w-full">
              {Object.values(allSubjects).map((subj) => {
                const userUnlockedList = typeof window !== "undefined" ? JSON.parse(localStorage.getItem(`studymaster_unlocked_subjects_${currentUser}`) || "[]") : [];
                const isActive = subj.isActive !== false || userUnlockedList.includes(subj.id);
                const cardColClass = "col-span-1";
                const highScore = getSubjectHighScore(subj);

                if (!isActive) {
                  // Locked card
                  return (
                    <div
                      key={subj.id}
                      className={`bento-subject-card group ${cardColClass} opacity-60 cursor-not-allowed bg-white border border-stone-200 text-stone-600 shadow-sm`}
                      style={{
                        '--accent': '#e3decb',
                        '--accent-rgb': '227, 222, 203',
                        '--secondary': '#d9d3c5'
                      }}
                    >
                      <div className="card-glow-reflection" />
                      <div className="card-content-wrapper">
                        <div>
                          <div className="flex justify-between items-start mb-4">
                            <span className="w-10 h-10 rounded-xl flex items-center justify-center text-xl bg-stone-100 text-stone-500">
                              {subj.icon || "🔒"}
                            </span>
                            <span className="text-[9px] font-bold uppercase px-2.5 py-0.5 rounded-full border flex items-center gap-1 bg-stone-50 text-stone-600 border-stone-200">
                              <Lock size={9} />
                              Sắp ra mắt
                            </span>
                          </div>
                          <h3 className="text-lg font-bold font-playfair mb-1 text-stone-700">
                            {subj.title}
                          </h3>
                          <p className="text-xs leading-relaxed line-clamp-3 font-sans text-stone-500">
                            {subj.description}
                          </p>
                        </div>
                        <div className="text-[10px] font-semibold text-stone-400">
                          Chưa khả dụng
                        </div>
                      </div>
                    </div>
                  );
                }

                // Active card (Tư tưởng Hồ Chí Minh or custom subjects)
                return (
                  <div
                    key={subj.id}
                    onClick={() => handleSubjectSelect(subj.id)}
                    onMouseMove={onCardMouseMove}
                    onMouseLeave={onCardMouseLeave}
                    className={`bento-subject-card group ${cardColClass} bg-white border border-stone-200 hover:border-accent text-stone-900 shadow-sm`}
                    style={{
                      '--accent': subj.themeColors?.accent || '#d97706',
                      '--accent-rgb': subj.themeColors?.accentRgb || '217, 119, 6',
                      '--secondary': subj.themeColors?.secondary || '#c2410c'
                    }}
                  >
                    <div className="card-glow-reflection" />
                    
                    <div className="card-content-wrapper">
                      <div>
                        <div className="flex justify-between items-start mb-4 relative z-10">
                          <span className="w-10 h-10 rounded-xl flex items-center justify-center text-xl bg-accent/10 border border-accent/20" style={{ color: subj.themeColors?.accent || '#d97706' }}>
                            {subj.icon || (subj.isCustom ? "📘" : "📖")}
                          </span>
                          <div className="flex items-center gap-1.5">
                            {subj.isCustom && (
                              <button
                                onClick={(e) => handleDeleteSubject(subj.id, e)}
                                className="text-stone-400 hover:text-red-500 p-1 rounded hover:bg-stone-100 transition-colors cursor-pointer z-20 relative"
                                title="Xóa môn học này"
                              >
                                <X size={12} />
                              </button>
                            )}
                            <span
                              className="text-[9px] font-bold uppercase px-2.5 py-0.5 rounded-full border transition-all duration-300"
                              style={{
                                color: 'var(--accent)',
                                borderColor: 'rgba(var(--accent-rgb), 0.3)',
                                backgroundColor: 'rgba(var(--accent-rgb), 0.1)'
                              }}
                            >
                              {subj.category || "Môn học"}
                            </span>
                          </div>
                        </div>
                        <h3 className="text-lg font-bold font-playfair mb-1 group-hover:text-accent transition-colors relative z-10 text-stone-900">
                          {subj.title}
                        </h3>
                        
                        {/* Quote of the subject */}
                        <p className="italic text-[10px] md:text-xs text-accent/80 font-playfair mb-3 leading-relaxed relative z-10">
                          {getSubjectQuote(subj.id)}
                        </p>
                        
                        <p className="text-xs leading-relaxed line-clamp-3 relative z-10 font-sans text-stone-600">
                          {subj.description}
                        </p>
                      </div>
                      
                      <div className="flex justify-between items-center mt-3 pt-2 border-t border-stone-200/60 relative z-10">
                        {highScore ? (
                          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 text-[9px] font-bold border border-emerald-500/20">
                            🏆 Cao nhất: {highScore.score}/{highScore.total} ({highScore.percent}%)
                          </div>
                        ) : (
                          <span className="text-[9px] text-stone-400 italic font-medium">Chưa thi trắc nghiệm</span>
                        )}
                        <div className="text-[10px] font-bold text-accent flex items-center gap-0.5 group-hover:translate-x-1 transition-transform duration-300">
                          <span>Vào học →</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Card +: Thêm môn học mới */}
              <div
                onClick={() => setShowAddSubjectModal(true)}
                onMouseMove={onCardMouseMove}
                onMouseLeave={onCardMouseLeave}
                className="add-subject-card bento-subject-card group col-span-1 border border-dashed border-stone-300 hover:border-accent bg-transparent hover:bg-stone-50 text-stone-600 hover:text-stone-900 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center h-64 text-center"
                style={{
                  '--accent': '#d97706',
                  '--accent-rgb': '217, 119, 6',
                  '--secondary': '#c2410c'
                }}
              >
                <div className="card-glow-reflection" />
                <div className="card-content-wrapper flex flex-col items-center justify-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl mb-3 transition-all group-hover:scale-110 bg-stone-100 group-hover:bg-accent/10 border border-stone-200 group-hover:border-accent/20 text-stone-500 group-hover:text-accent">
                    ＋
                  </div>
                  <h3 className="text-sm font-bold font-playfair mb-1 group-hover:text-accent transition-colors">
                    Thêm môn học mới
                  </h3>
                  <p className="text-[10px] leading-relaxed max-w-[200px] font-sans text-stone-500">
                    Tự thêm các môn chuyên ngành hoặc tự chọn của riêng bạn.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center pt-4 flex flex-col sm:flex-row justify-center items-center gap-3">
              {currentUser === "admin" && (
                <button
                  onClick={() => setAppStep("admin-dashboard")}
                  className="px-6 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] cursor-pointer text-xs font-bold uppercase tracking-widest border-none"
                  style={{ minWidth: "140px" }}
                >
                  💼 Quản trị Admin
                </button>
              )}
              <button
                onClick={handleLogout}
                className="px-6 py-2.5 rounded-full border border-stone-300 bg-white hover:bg-stone-900 text-stone-700 hover:text-white shadow-sm hover:border-stone-900 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer text-xs font-bold uppercase tracking-widest"
                style={{ minWidth: "140px" }}
              >
                Đăng xuất
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 5. VIEW: MAIN STUDY FLOW */}
      {appStep === "study" && (
        <>
          {/* Storytelling Hero Section */}
          {showHero && (
            <section
              onWheel={(e) => {
                if (e.deltaY > 10) {
                  startTransition();
                }
              }}
              onTouchStart={(e) => {
                touchStartYRef.current = e.touches[0].clientY;
              }}
              onTouchMove={(e) => {
                const touchEndY = e.touches[0].clientY;
                const diff = touchStartYRef.current - touchEndY;
                if (diff > 50) {
                  startTransition();
                }
              }}
              className="storytelling-hero w-full flex flex-col items-center justify-center relative px-6 z-40 overflow-hidden bg-[#faf8f4] perspective-3d"
              style={{
                height: `${windowHeight}px`,
              }}
            >
              {/* Decorative glow orbs */}
              <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(217,119,6,0.08) 0%, transparent 70%)", filter: "blur(40px)" }}
              />
              <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(194,65,12,0.05) 0%, transparent 70%)", filter: "blur(60px)" }}
              />
              {/* Subtle grid background pattern */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
                style={{ backgroundImage: "repeating-linear-gradient(0deg, #2c2a26 0px, #2c2a26 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #2c2a26 0px, #2c2a26 1px, transparent 1px, transparent 60px)" }}
              />

              {/* 3D Book Container */}
              <div className="book-wrap my-8 relative z-20">
                <div className="book-3d select-none">
                  {/* Spine */}
                  <div className="book-spine-3d" />

                  {/* Underlay Pages to give thickness */}
                  <div className="book-page-under-2" />
                  <div className="book-page-under" />

                  {/* Inside Right Page (Contains the quote that types out) */}
                  <div className="book-page-right px-4 py-4 flex flex-col justify-between text-stone-800">
                    <div className="relative h-full flex flex-col justify-between">
                      {/* Quote mark decoration */}
                      <div className="text-3xl text-accent/15 font-playfair select-none leading-none">&ldquo;</div>
                      
                      <div className="flex-grow flex items-center justify-center min-h-[100px] px-1">
                        <h2 className="text-xs sm:text-xs md:text-sm font-playfair font-bold italic leading-relaxed text-stone-900 text-center">
                          {fullQuote.split(" ").map((word, wordIdx) => {
                            const wordsArray = fullQuote.split(" ");
                            return (
                              <span key={wordIdx} className="inline-block whitespace-nowrap">
                                {word.split("").map((char, charIdx) => (
                                  <span key={charIdx} className="quote-char opacity-0 inline-block">
                                    {char}
                                  </span>
                                ))}
                                {/* Space character between words */}
                                {wordIdx < wordsArray.length - 1 && (
                                  <span className="quote-char opacity-0 inline-block">&nbsp;</span>
                                )}
                              </span>
                            );
                          })}
                          <span className="quote-cursor inline-block w-[2px] h-[1.1em] bg-accent ml-0.5 align-middle animate-pulse" />
                        </h2>
                      </div>
                      
                      <div className="text-3xl text-accent/15 font-playfair select-none leading-none text-right rotate-180">&ldquo;</div>

                      <div className="text-center mt-2">
                        <button
                          onClick={handleStartJourney}
                          className="px-4 py-1.5 rounded-full bg-[#2c2a26] text-[#faf8f4] hover:bg-accent hover:text-white font-bold text-[9px] uppercase tracking-wider transition-all duration-300 hover:scale-105 cursor-pointer border-none shadow-md shadow-stone-900/10"
                        >
                          Vào bài học →
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Cover 3D (Xoay lật mở sang trái) */}
                  <div className="book-cover-3d">
                    {/* Cover Front (Nâu trầm với họa tiết nhũ vàng) */}
                    <div className="book-cover-front p-6 flex flex-col justify-between border-r-2 border-stone-800">
                      {/* Top gold line ornament */}
                      <div className="border-t border-accent/30 pt-2 text-center">
                        <span className="text-[9px] font-bold tracking-[0.25em] text-accent uppercase font-sans">
                          Tài Liệu Học Tập
                        </span>
                      </div>

                      {/* Title engraved in Gold */}
                      <div className="text-center my-auto">
                        <h1 className="text-xs sm:text-sm md:text-base font-playfair font-bold text-[#faf8f4] leading-tight select-none">
                          {currentSubject.title}
                        </h1>
                        <div className="w-8 h-[2px] bg-accent mx-auto my-3" />
                        <p className="text-[9px] text-[#eaeae6] font-sans tracking-widest uppercase opacity-75">
                          StudyMaster
                        </p>
                      </div>

                      {/* Bottom gold line ornament */}
                      <div className="border-b border-accent/30 pb-2 text-center" />
                    </div>

                    {/* Cover Back (Left page when opened) */}
                    <div className="book-cover-back p-6 flex flex-col justify-between border-l-2 border-stone-200">
                      <div className="border-t border-stone-200 pt-2 text-center">
                        <span className="text-[8px] font-bold tracking-[0.2em] text-stone-400 uppercase font-sans">
                          {(currentSubject.chapters[0]?.title || "CHƯƠNG MỞ ĐẦU").toUpperCase()}
                        </span>
                      </div>
                      
                      <div className="text-center my-auto">
                        <div className="w-8 h-8 rounded-full border border-accent/20 flex items-center justify-center mx-auto mb-2">
                          <span className="text-accent text-[8px] font-serif">★</span>
                        </div>
                        <p className="text-[9px] text-stone-600 font-sans leading-relaxed max-w-[120px] mx-auto italic">
                          &quot;Hành trình vạn dặm khởi đầu từ một bước chân.&quot;
                        </p>
                      </div>

                      <div className="border-b border-stone-200 pb-2 text-center text-[7px] text-stone-400 uppercase font-sans tracking-wider">
                        Mục lục & Giới thiệu
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Scroll down indicator */}
              <button
                onClick={handleStartJourney}
                className="scroll-indicator absolute bottom-8 flex flex-col items-center gap-2 animate-bounce text-xs font-semibold text-stone-400 cursor-pointer z-10"
              >
                <span>Bấm nút hoặc cuộn chuột để lật sách</span>
                <ChevronDown size={16} />
              </button>
            </section>
          )}


          {/* Layout wrapper for Sidebar and Content */}
          <div className="flex-1 flex w-full relative z-10 main-study-content">
            {/* Sidebar Navigation */}
            <Sidebar
              chapters={chapters}
              activeSubsectionId={activeSubsectionId}
              setActiveSubsectionId={setActiveSubsectionId}
              isQuizMode={isQuizMode}
              setIsQuizMode={setIsQuizMode}
              isOpen={isSidebarOpen}
              setIsOpen={setIsSidebarOpen}
              onNavigate={handleNavigate}
              forceHide={showHero}
              onChangeSubject={() => setAppStep("subject-select")}
              onLogout={handleLogout}
              onOpenProfile={() => setShowProfileModal(true)}
              currentUserAvatar={currentUserAvatar}
              currentUser={currentUser}
              showConfirm={showConfirm}
              activeTool={activeTool}
              setActiveTool={setActiveTool}
              activeColor={activeColor}
              setActiveColor={setActiveColor}
              onClearAll={handleClearAll}
              onBackToHero={() => setShowHero(true)}
              hasQuiz={Object.keys(questionsMap).length > 0}
              onBackToAdmin={() => setAppStep("admin-dashboard")}
            />

            {/* Main Content Area */}
            <div
              className="flex-grow flex flex-col min-h-screen md:pl-[312px]"
            >
              {/* Header Bar */}
              <header
                className={`sticky top-0 z-30 flex items-center justify-between px-6 py-4 bg-[#faf8f4]/90 backdrop-blur-md border-b border-stone-200 transition-all duration-500 ${
                  !showHero ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
                }`}
              >
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setIsSidebarOpen(true)}
                    className="p-2 -ml-2 rounded-lg text-stone-600 hover:bg-stone-200 md:hidden"
                    aria-label="Mở menu"
                  >
                    <Menu size={20} />
                  </button>
                  <div className="text-sm font-semibold flex items-center gap-2 text-stone-500">
                    <span>{currentSubject.title}</span>
                    <span className="text-stone-300">/</span>
                    <span className="text-stone-800 font-bold">
                      {isQuizMode ? "Bài kiểm tra trắc nghiệm" : chapters[0]?.title}
                    </span>
                  </div>
                </div>
              </header>

              {/* Dynamic Content Panel */}
              <div
                className={`flex-1 flex flex-col relative transition-opacity duration-700 ${
                  !showHero ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                {isQuizMode ? (
                  <div className="flex-1 w-full max-w-5xl mx-auto px-4 py-8 animate-in">
                    <ErrorBoundary>
                      <Quiz onClose={() => setIsQuizMode(false)} showToast={showToast} showConfirm={showConfirm} showAlert={showAlert} subjectId={selectedSubjectId} />
                    </ErrorBoundary>
                  </div>
                ) : (
                  <div
                    ref={contentContainerRef}
                    onMouseUp={handleTextSelection}
                    onTouchEnd={handleTextSelection}
                    onClick={handleContentClick}
                    className="relative flex-1 w-full max-w-5xl mx-auto px-6 pt-12 pb-44 md:px-12 animate-in"
                  >
                    {/* Content text */}
                    {loadingMdx ? (
                      <div className="flex flex-col items-center justify-center py-24 space-y-4">
                        <div className="w-10 h-10 border-4 border-stone-200 border-t-accent rounded-full animate-spin" />
                        <span className="text-xs font-bold text-stone-400 tracking-widest uppercase animate-pulse select-none">Đang tải bài học...</span>
                      </div>
                    ) : (
                      <ContentRenderer key={reRenderKey} chapters={chapters} mdxSource={activeMdxSource} />
                    )}

                    {/* Custom Notebook Workspace for Custom Subjects */}
                    {currentSubject.isCustom && (
                      <div className="mt-8 p-6 rounded-2xl border border-stone-200 bg-white/60 backdrop-blur-md space-y-3 relative z-10">
                        <label className="block text-[10px] font-bold text-accent uppercase tracking-widest flex items-center gap-1.5 select-none">
                          <span>📝 Vở ghi chép tự học:</span>
                          <span className="text-[9px] text-stone-550 font-normal normal-case italic">(Tự động lưu vào trình duyệt)</span>
                        </label>
                        
                        <textarea
                          value={customNotes[selectedSubjectId] || ""}
                          onChange={(e) => handleSaveNotes(selectedSubjectId, e.target.value)}
                          placeholder="Nhập lý thuyết, bài giảng chuyên ngành hoặc ý tưởng học tập của bạn tại đây... Sau đó bạn có thể dùng bút highlight tô sáng văn bản hoặc vẽ sơ đồ trực tiếp đè lên khung ghi chú này!"
                          className="w-full h-80 p-4 rounded-xl border border-stone-200 bg-stone-50/80 text-sm text-stone-800 focus:outline-none focus:border-accent transition-colors resize-y relative z-10 notebook-input font-sans"
                        />
                      </div>
                    )}

                    {/* Freehand overlay drawing canvas */}
                    <DrawingCanvas
                      activeTool={activeTool}
                      activeColor={activeColor}
                      containerRef={contentContainerRef}
                      onClearRef={onClearRef}
                      drawingKey={`studymaster-drawings-${selectedSubjectId}-${activeSubsectionId}`}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>



          {/* Scroll to Top Button */}
          {showScrollTop && !showHero && (
            <button
              onClick={handleScrollToTop}
              className="fixed bottom-6 left-6 md:left-[336px] z-50 p-3 rounded-full bg-accent text-white hover:bg-accent/90 border border-accent/20 shadow-2xl transition-all duration-300 hover:scale-110 cursor-pointer"
              aria-label="Về đầu trang"
            >
              <ArrowUp size={20} />
            </button>
          )}
        </>
      )}

      {appStep === "admin-dashboard" && (
        <div className="min-h-screen bg-slate-50 flex font-sans text-slate-800 animate-in fade-in duration-300">
          {/* Admin Mobile Sidebar Backdrop Overlay */}
          {isAdminSidebarOpen && (
            <div 
              className="fixed inset-0 bg-slate-900/40 z-35 md:hidden backdrop-blur-xs transition-opacity duration-300"
              onClick={() => setIsAdminSidebarOpen(false)}
            />
          )}

          {/* Left Sidebar Navigation */}
          <aside className={`w-64 bg-white border-r border-slate-200 flex flex-col justify-between shrink-0 h-screen fixed md:sticky top-0 z-40 transition-transform duration-300 ${
            isAdminSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}>
            <div>
              {/* Logo / Brand Header */}
              <div className="p-6 border-b border-slate-100 flex items-center gap-3 select-none">
                <span className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white text-lg font-bold shadow-sm shadow-indigo-200">
                  SM
                </span>
                <div>
                  <h2 className="text-sm font-extrabold text-slate-900 leading-none">StudyMaster</h2>
                  <span className="text-[10px] text-slate-400 font-bold tracking-wider uppercase mt-1.5 block">
                    Hệ thống Quản trị
                  </span>
                </div>
              </div>

              {/* Navigation Links */}
              <nav className="p-4 space-y-1">
                <button
                  onClick={() => {
                    setAdminTab("overview");
                    setIsAdminSidebarOpen(false); // Close sidebar on mobile select
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer border-none text-left ${
                    adminTab === "overview"
                      ? "bg-indigo-50 text-indigo-750"
                      : "text-slate-500 hover:bg-slate-550 hover:text-slate-850"
                  }`}
                >
                  <BarChart3 size={16} />
                  <span>Tổng quan</span>
                </button>

                <button
                  onClick={() => {
                    setAdminTab("users");
                    setIsAdminSidebarOpen(false); // Close sidebar on mobile select
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer border-none text-left ${
                    adminTab === "users"
                      ? "bg-indigo-50 text-indigo-750"
                      : "text-slate-500 hover:bg-slate-550 hover:text-slate-850"
                  }`}
                >
                  <Users size={16} />
                  <span>Quản lý học viên</span>
                </button>
              </nav>
            </div>

            {/* Bottom Actions inside Sidebar */}
            <div className="p-4 border-t border-slate-100 space-y-1 bg-slate-50/50">
              <button
                onClick={() => setAppStep("subject-select")}
                className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-all duration-200 cursor-pointer border-none bg-transparent"
              >
                <ArrowLeft size={15} />
                <span>Quay lại học tập</span>
              </button>

              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-bold text-red-600 hover:bg-red-50 hover:text-red-700 transition-all duration-200 cursor-pointer border-none bg-transparent"
              >
                <X size={15} />
                <span>Đăng xuất admin</span>
              </button>
            </div>
          </aside>

          {/* Main Dashboard Content */}
          <main className="flex-grow p-4 md:p-8 overflow-y-auto max-w-7xl mx-auto w-full space-y-8">
            {/* Header bar inside Main */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsAdminSidebarOpen(true)}
                  className="p-2 -ml-2 rounded-xl text-slate-650 hover:bg-slate-100 md:hidden block cursor-pointer shrink-0"
                  aria-label="Mở menu admin"
                >
                  <Menu size={20} />
                </button>
                <div>
                  <h1 className="text-xl font-black text-slate-900 uppercase tracking-tight select-none">
                    {adminTab === "overview" ? "Bảng Điều Khiển Tổng Quan" : "Danh Sách Học Viên Đăng Ký"}
                  </h1>
                  <p className="text-xs text-slate-500 font-medium mt-1 select-none">
                    Chào mừng trở lại, Admin. Báo cáo cập nhật trực quan thời gian thực.
                  </p>
                </div>
              </div>

              {/* Action buttons (Export PDF, Excel) */}
              <div className="flex items-center gap-3">
                <button
                  onClick={exportExcel}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 shadow-sm text-xs font-bold transition-all duration-200 cursor-pointer active:scale-95"
                >
                  <Download size={14} className="text-slate-500" />
                  <span>Xuất Excel</span>
                </button>
                <button
                  onClick={exportPDF}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 shadow-sm text-xs font-bold transition-all duration-200 cursor-pointer active:scale-95"
                >
                  <Download size={14} className="text-slate-500" />
                  <span>Xuất PDF</span>
                </button>
              </div>
            </div>

            {/* TAB CONTENT: OVERVIEW */}
            {adminTab === "overview" && renderOverviewTab()}

            {/* TAB CONTENT: USERS */}
            {adminTab === "users" && renderUsersTab()}
          </main>
        </div>
      )}

      {/* CREATE NEW USER MODAL */}
      {adminShowAddUserModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-sm bg-white border border-slate-200 rounded-3xl p-6 shadow-2xl space-y-5 text-left">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-extrabold text-sm text-slate-850 uppercase tracking-wider flex items-center gap-2">
                <span>👤</span>
                Thêm học sinh mới
              </h3>
              <button
                onClick={() => setAdminShowAddUserModal(false)}
                className="text-slate-400 hover:text-slate-650 cursor-pointer border-none bg-transparent"
              >
                <X size={16} />
              </button>
            </div>

            <form onSubmit={handleAdminCreateUser} className="space-y-4">
              <div>
                <label className="block text-[10px] font-extrabold text-slate-400 uppercase mb-1">Tên đăng nhập</label>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: hocsinh2..."
                  value={adminNewUser}
                  onChange={(e) => setAdminNewUser(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:border-indigo-500 focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] font-extrabold text-slate-400 uppercase mb-1">Địa chỉ Email</label>
                <input
                  type="email"
                  required
                  placeholder="hocsinh2@gmail.com"
                  value={adminNewEmail}
                  onChange={(e) => setAdminNewEmail(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:border-indigo-500 focus:bg-white transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-extrabold text-slate-400 uppercase mb-1">Mật khẩu</label>
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={adminNewPass}
                    onChange={(e) => setAdminNewPass(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:border-indigo-500 focus:bg-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-extrabold text-slate-400 uppercase mb-1">Nhập lại</label>
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={adminNewConfirmPass}
                    onChange={(e) => setAdminNewConfirmPass(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:border-indigo-500 focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setAdminShowAddUserModal(false)}
                  className="flex-grow py-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 font-bold text-xs transition-colors cursor-pointer text-center bg-transparent"
                >
                  Hủy bỏ
                </button>
                <button
                  type="submit"
                  className="flex-grow py-2 rounded-xl bg-indigo-650 hover:bg-indigo-700 text-white font-bold text-xs transition-all shadow-md cursor-pointer border-none"
                >
                  Tạo học viên
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* CHANGE PASSWORD MODAL */}
      {adminShowChangePassModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-sm bg-white border border-slate-200 rounded-3xl p-6 shadow-2xl space-y-5 text-left">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-extrabold text-sm text-slate-850 uppercase tracking-wider flex items-center gap-2">
                <span>🔑</span>
                Đặt lại mật khẩu
              </h3>
              <button
                onClick={() => {
                  setAdminShowChangePassModal(false);
                  setAdminChangePassUser(null);
                }}
                className="text-slate-400 hover:text-slate-650 cursor-pointer border-none bg-transparent"
              >
                <X size={16} />
              </button>
            </div>

            <p className="text-xs text-slate-500">
              Đặt lại mật khẩu mới cho tài khoản của học viên <strong className="text-slate-900">{adminChangePassUser?.username}</strong>.
            </p>

            <form onSubmit={handleAdminChangePassword} className="space-y-4">
              <div>
                <label className="block text-[10px] font-extrabold text-slate-400 uppercase mb-1">Mật khẩu mới</label>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={adminChangeNewPass}
                  onChange={(e) => setAdminChangeNewPass(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:border-indigo-500 focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] font-extrabold text-slate-400 uppercase mb-1">Xác nhận mật khẩu</label>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={adminChangeConfirmPass}
                  onChange={(e) => setAdminChangeConfirmPass(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:border-indigo-500 focus:bg-white transition-colors"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setAdminShowChangePassModal(false);
                    setAdminChangePassUser(null);
                  }}
                  className="flex-grow py-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 font-bold text-xs transition-colors cursor-pointer text-center bg-transparent"
                >
                  Hủy bỏ
                </button>
                <button
                  type="submit"
                  className="flex-grow py-2 rounded-xl bg-indigo-650 hover:bg-indigo-700 text-white font-bold text-xs transition-all shadow-md cursor-pointer border-none"
                >
                  Cập nhật mật khẩu
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Hidden print template for PDF reports */}
      {mounted && (
        <div
          id="admin-pdf-report-template"
          className="bg-white p-12 text-slate-800 font-sans space-y-8"
          style={{
            position: "absolute",
            left: "-9999px",
            top: 0,
            width: "800px",
            display: "none"
          }}
        >
        {/* Report Header */}
        <div className="flex justify-between items-center border-b-2 border-indigo-600 pb-6">
          <div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">STUDYMASTER ACADEMY</h1>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Báo cáo tình hình học tập học viên</p>
          </div>
          <div className="text-right">
            <span className="text-xs font-extrabold text-indigo-650 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full uppercase tracking-wider">
              Admin Report
            </span>
            <p className="text-[10px] text-slate-450 mt-1.5 font-medium">Xuất lúc: {mounted ? new Date().toLocaleString("vi-VN") : ""}</p>
          </div>
        </div>

        {/* Overview Stats Block */}
        <div className="grid grid-cols-3 gap-6">
          {[
            { label: "Tổng số học viên", value: adminUsers.length },
            { label: "Môn học hỗ trợ", value: Object.keys(allSubjects).length },
            { label: "Lượt làm trắc nghiệm", value: getStats().totalAttempts }
          ].map((stat, idx) => (
            <div key={idx} className="border border-slate-150 rounded-2xl p-4 bg-slate-50/50 space-y-1">
              <span className="text-[9px] text-slate-400 font-extrabold uppercase tracking-wider block">{stat.label}</span>
              <span className="text-xl font-black text-slate-800 block">{stat.value}</span>
            </div>
          ))}
        </div>

        {/* Detailed User Table List */}
        <div className="space-y-3">
          <h3 className="text-xs font-black text-slate-900 uppercase tracking-wider">Danh sách học viên chi tiết</h3>
          <table className="w-full border-collapse border border-slate-150 text-[10px] text-left">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-150 text-slate-500 font-bold">
                <th className="px-4 py-2 border-r border-slate-150">Tên học viên</th>
                <th className="px-4 py-2 border-r border-slate-150">Email đăng ký</th>
                <th className="px-4 py-2 text-center border-r border-slate-150">Bài đã làm</th>
                <th className="px-4 py-2 text-center border-r border-slate-150">Điểm trung bình</th>
                <th className="px-4 py-2 text-center">Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {adminUsers.map((user) => {
                let attempts = 0;
                let percentSum = 0;
                Object.values(allSubjects).forEach((subj) => {
                  const chaptersList = subj.chapters || [];
                  chaptersList.forEach((ch) => {
                    const stored = localStorage.getItem(`studymaster_quiz_rankings_${ch.id}`);
                    if (stored) {
                      try {
                        const rankings = JSON.parse(stored);
                        const userRecords = rankings.filter(r => r.name === user.username);
                        attempts += userRecords.length;
                        userRecords.forEach((r) => {
                          percentSum += r.total > 0 ? (r.score / r.total) * 100 : 0;
                        });
                      } catch (e) {}
                    }
                  });
                });
                const avgScore = attempts > 0 ? Math.round(percentSum / attempts) : 0;
                return (
                  <tr key={user.username} className="border-b border-slate-150 hover:bg-slate-50/20">
                    <td className="px-4 py-2 font-bold border-r border-slate-150 text-slate-900">{user.username}</td>
                    <td className="px-4 py-2 border-r border-slate-150 text-slate-550">{user.email}</td>
                    <td className="px-4 py-2 text-center border-r border-slate-150 font-bold text-slate-800">{attempts}</td>
                    <td className="px-4 py-2 text-center border-r border-slate-150 font-bold text-indigo-700">
                      {attempts > 0 ? `${avgScore}%` : "—"}
                    </td>
                    <td className="px-4 py-2 text-center font-bold">
                      <span className={user.locked ? "text-red-600" : "text-emerald-650"}>
                        {user.locked ? "Đã khóa" : "Hoạt động"}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="border-t border-slate-150 pt-4 flex justify-between items-center text-[9px] text-slate-400 font-semibold">
          <span>Báo cáo bảo mật được tạo bởi StudyMaster Dashboard</span>
          <span>Trang 1 / 1</span>
        </div>
      </div>
      )}

      {/* GOOGLE FIRST-TIME REGISTER MODAL */}
      {showGoogleRegisterModal && googleUserTemp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in">
          <div className="w-full max-w-md bg-[#0e1118]/90 border border-stone-800/80 rounded-3xl p-6 shadow-[0_0_50px_rgba(0,0,0,0.8)] space-y-5 text-left hero-glass-card text-stone-200">
            <div className="flex items-center justify-between border-b border-stone-800 pb-3">
              <div className="flex items-center gap-2.5">
                <GoogleIcon size={20} />
                <span className="font-bold text-sm text-accent tracking-wider uppercase">Đăng nhập lần đầu</span>
              </div>
              <button
                onClick={() => {
                  setShowGoogleRegisterModal(false);
                  setGoogleUserTemp(null);
                }}
                className="text-stone-400 hover:text-white transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            <div>
              <h3 className="text-base font-bold text-white mb-1">Hoàn thiện thông tin</h3>
              <p className="text-[11px] text-stone-400 leading-relaxed">
                Tài khoản Google **{googleUserTemp.email}** chưa được liên kết. Vui lòng tạo tên đăng nhập và mật khẩu để hoàn tất đăng ký học viên.
              </p>
            </div>

            <form onSubmit={handleGoogleRegisterSubmit} className="space-y-4">
              {/* Read-only Email Field */}
              <div className="space-y-1">
                <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-wider select-none">Email Google</label>
                <input
                  type="text"
                  value={googleUserTemp.email}
                  disabled
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-800 bg-stone-900/60 text-xs text-stone-500 font-sans cursor-not-allowed"
                />
              </div>

              {/* Username Field */}
              <div className="space-y-1">
                <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-wider select-none">Tên đăng nhập mới *</label>
                <input
                  type="text"
                  required
                  placeholder="Nhập tên đăng nhập của bạn (viết liền không dấu)"
                  value={googleUsername}
                  onChange={(e) => setGoogleUsername(e.target.value.replace(/[^a-zA-Z0-9]/g, ""))}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-800 bg-[#161a24] text-xs text-white focus:outline-none focus:border-accent transition-colors font-sans"
                />
              </div>

              {/* Password Field */}
              <div className="space-y-1 relative">
                <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-wider select-none">Mật khẩu *</label>
                <div className="relative">
                  <input
                    type={showGooglePassword ? "text" : "password"}
                    required
                    placeholder="Nhập mật khẩu an toàn của bạn"
                    value={googlePassword}
                    onChange={(e) => setGooglePassword(e.target.value)}
                    className="w-full px-4 py-2.5 pr-10 rounded-xl border border-stone-800 bg-[#161a24] text-xs text-white focus:outline-none focus:border-accent transition-colors font-sans"
                  />
                  <button
                    type="button"
                    onClick={() => setShowGooglePassword(!showGooglePassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-white"
                  >
                    {showGooglePassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {/* Confirm Password Field */}
              <div className="space-y-1">
                <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-wider select-none">Xác nhận mật khẩu *</label>
                <input
                  type={showGooglePassword ? "text" : "password"}
                  required
                  placeholder="Nhập lại mật khẩu phía trên"
                  value={googleConfirmPassword}
                  onChange={(e) => setGoogleConfirmPassword(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-800 bg-[#161a24] text-xs text-white focus:outline-none focus:border-accent transition-colors font-sans"
                />
              </div>

              {/* Password Strength Checklist (4 factors) */}
              <div className="p-3.5 rounded-xl bg-stone-900/50 border border-stone-800/60 space-y-2">
                <div className="text-[10px] font-bold text-stone-400 uppercase tracking-wider select-none mb-1">Yêu cầu bảo mật mật khẩu:</div>
                
                {[
                  { label: "Độ dài tối thiểu 8 ký tự", ok: getPasswordValidation(googlePassword).length },
                  { label: "Chứa ít nhất 1 chữ hoa (A-Z)", ok: getPasswordValidation(googlePassword).uppercase },
                  { label: "Chứa ít nhất 1 chữ số (0-9)", ok: getPasswordValidation(googlePassword).number },
                  { label: "Chứa ít nhất 1 ký tự đặc biệt (!@#...)", ok: getPasswordValidation(googlePassword).special }
                ].map((req, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-[10px] font-sans">
                    <span className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[8px] font-bold ${
                      req.ok ? "bg-emerald-500/25 text-emerald-400" : "bg-stone-800 text-stone-550"
                    }`}>
                      {req.ok ? "✓" : "○"}
                    </span>
                    <span className={req.ok ? "text-stone-300" : "text-stone-500"}>{req.label}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setShowGoogleRegisterModal(false);
                    setGoogleUserTemp(null);
                  }}
                  className="px-5 py-2 rounded-xl text-stone-400 hover:text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  Hủy bỏ
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-xl bg-accent text-stone-950 hover:bg-accent/90 font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg cursor-pointer"
                >
                  Hoàn tất & Vào học
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ADD SUBJECT MODAL */}
      {showAddSubjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in">
          <div className={`w-full max-w-md rounded-3xl p-6 shadow-2xl text-left transition-colors duration-300 ${
            mounted && theme === 'dark' 
              ? 'bg-stone-900 border border-stone-800 text-stone-100 hero-glass-card' 
              : 'bg-white border border-stone-200 text-stone-900 shadow-2xl'
          }`}>
            <div className={`flex items-center justify-between border-b pb-3 mb-4 ${
              mounted && theme === 'dark' ? 'border-stone-850' : 'border-stone-200'
            }`}>
              <h3 className={`font-bold text-base flex items-center gap-2 ${
                mounted && theme === 'dark' ? 'text-stone-200' : 'text-stone-800'
              }`}>
                <span className="text-stone-800 dark:text-stone-200 text-lg cancer-zodiac-pulse">♋</span>
                Thêm môn học tự chọn
              </h3>
              <button
                onClick={() => setShowAddSubjectModal(false)}
                className="text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleAddSubject} className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold text-stone-500 dark:text-stone-400 uppercase mb-1.5">Tên môn học</label>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: Cấu trúc dữ liệu và giải thuật..."
                  value={newSubTitle}
                  onChange={(e) => setNewSubTitle(e.target.value)}
                  className={`w-full px-3 py-2 rounded-xl border text-xs focus:outline-none focus:border-stone-500 transition-colors ${
                    mounted && theme === 'dark' 
                      ? 'border-stone-800 bg-stone-950/45 text-stone-100 placeholder-stone-500' 
                      : 'border-stone-200 bg-stone-50 text-stone-900 placeholder-stone-400'
                  }`}
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-stone-500 dark:text-stone-400 uppercase mb-1.5">Mô tả ngắn</label>
                <textarea
                  placeholder="Nhập mô tả môn học..."
                  value={newSubDesc}
                  onChange={(e) => setNewSubDesc(e.target.value)}
                  className={`w-full px-3 py-2 h-20 rounded-xl border text-xs focus:outline-none focus:border-stone-500 transition-colors resize-none ${
                    mounted && theme === 'dark' 
                      ? 'border-stone-800 bg-stone-950/45 text-stone-100 placeholder-stone-500' 
                      : 'border-stone-200 bg-stone-50 text-stone-900 placeholder-stone-400'
                  }`}
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-stone-500 dark:text-stone-400 uppercase mb-1.5">Câu châm ngôn hiển thị (Không bắt buộc)</label>
                <input
                  type="text"
                  placeholder="Ví dụ: Tri thức là sức mạnh..."
                  value={newSubQuote}
                  onChange={(e) => setNewSubQuote(e.target.value)}
                  className={`w-full px-3 py-2 rounded-xl border text-xs focus:outline-none focus:border-stone-500 transition-colors ${
                    mounted && theme === 'dark' 
                      ? 'border-stone-800 bg-stone-950/45 text-stone-100 placeholder-stone-500' 
                      : 'border-stone-200 bg-stone-50 text-stone-900 placeholder-stone-400'
                  }`}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-stone-500 dark:text-stone-400 uppercase mb-1.5">Phân loại</label>
                  <select
                    value={newSubCategory}
                    onChange={(e) => setNewSubCategory(e.target.value)}
                    className={`w-full px-3 py-2 rounded-xl border text-xs focus:outline-none focus:border-stone-500 transition-colors cursor-pointer ${
                      mounted && theme === 'dark' 
                        ? 'border-stone-800 bg-stone-950/45 text-stone-200' 
                        : 'border-stone-200 bg-stone-50 text-stone-850'
                    }`}
                  >
                    <option value="Chuyên ngành">Chuyên ngành</option>
                    <option value="Đại cương">Đại cương</option>
                    <option value="Môn tự chọn">Môn tự chọn</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-stone-500 dark:text-stone-400 uppercase mb-1.5">Màu chủ đề</label>
                  <div className="flex gap-2 items-center mt-1">
                    {[
                      { hex: "#0d9488", name: "Teal" },
                      { hex: "#0284c7", name: "Blue" },
                      { hex: "#7c3aed", name: "Purple" },
                      { hex: "#db2777", name: "Pink" },
                      { hex: "#d97706", name: "Amber" }
                    ].map((col) => (
                      <button
                        key={col.hex}
                        type="button"
                        onClick={() => setNewSubColor(col.hex)}
                        className={`w-6 h-6 rounded-full border transition-all cursor-pointer ${
                          newSubColor === col.hex ? "scale-115 border-white ring-2 ring-stone-900/50 dark:ring-stone-100/50" : "border-stone-300 dark:border-stone-750"
                        }`}
                        style={{ backgroundColor: col.hex }}
                        title={col.name}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddSubjectModal(false)}
                  className={`flex-1 py-2 rounded-xl border text-xs font-semibold transition-colors cursor-pointer ${
                    mounted && theme === 'dark' 
                      ? 'border-stone-800 hover:border-stone-750 bg-stone-900/30 hover:bg-stone-900/55 text-stone-400 hover:text-stone-250' 
                      : 'border-stone-200 hover:border-stone-300 bg-stone-50 hover:bg-stone-100 text-stone-550 hover:text-stone-700'
                  }`}
                >
                  Hủy bỏ
                </button>
                <button
                  type="submit"
                  className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all shadow-md cursor-pointer ${
                    mounted && theme === 'dark' 
                      ? 'bg-stone-100 hover:bg-white text-stone-950' 
                      : 'bg-stone-900 hover:bg-stone-800 text-white'
                  }`}
                >
                  Tạo môn học
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <ProfileModal
        isOpen={showProfileModal}
        onClose={() => setShowProfileModal(false)}
        currentUser={currentUser}
        currentUserAvatar={currentUserAvatar}
        setCurrentUserAvatar={setCurrentUserAvatar}
        allSubjects={allSubjects}
        showToast={showToast}
        showConfirm={showConfirm}
        showAlert={showAlert}
      />

      {/* Custom Toast Notification */}
      {toast && (
        <div className="fixed top-4 right-4 z-[9999] max-w-sm w-full bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-850 rounded-2xl shadow-xl p-4 flex items-start gap-3 animate-in slide-in-from-right fade-in duration-300">
          <div className="flex-shrink-0 mt-0.5">
            {toast.type === "success" && <CheckCircle2 className="text-emerald-500" size={18} />}
            {toast.type === "warning" && <AlertTriangle className="text-amber-500" size={18} />}
            {toast.type === "error" && <XCircle className="text-red-500" size={18} />}
            {toast.type === "info" && <Info className="text-sky-500" size={18} />}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-stone-850 dark:text-stone-200 leading-normal">
              {toast.message}
            </p>
          </div>
          <button
            onClick={() => setToast(null)}
            className="flex-shrink-0 p-1 text-stone-400 hover:text-stone-650 dark:hover:text-stone-200 transition-colors"
          >
            <X size={14} />
          </button>
        </div>
      )}

      {/* Custom Confirm & Alert Modal */}
      {confirmConfig && (
        <div className="fixed inset-0 z-[9998] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-xs bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-6 shadow-2xl text-center animate-in scale-in duration-300 flex flex-col items-center">
            <div className="mb-4 p-3.5 rounded-full bg-stone-50 dark:bg-stone-950/40 border border-stone-100 dark:border-stone-850">
              {confirmConfig.type === "success" && <CheckCircle2 className="text-emerald-500" size={32} />}
              {confirmConfig.type === "warning" && <AlertTriangle className="text-red-500" size={32} />}
              {confirmConfig.type === "confirm" && <HelpCircle className="text-accent" size={32} />}
              {confirmConfig.type === "alert" && <AlertTriangle className="text-amber-500" size={32} />}
            </div>
            
            <h4 className="text-sm font-bold text-stone-900 dark:text-stone-100 tracking-wider">
              {confirmConfig.title}
            </h4>
            <p className="text-[11px] text-stone-500 dark:text-stone-400 mt-2 leading-relaxed">
              {confirmConfig.message}
            </p>

            <div className="flex gap-2 w-full mt-5">
              {confirmConfig.cancelText && (
                <button
                  type="button"
                  onClick={confirmConfig.onCancel}
                  className="flex-1 py-2 px-3 rounded-xl border border-stone-200 dark:border-stone-850 hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-600 dark:text-stone-400 font-bold text-xs transition-colors cursor-pointer"
                >
                  {confirmConfig.cancelText}
                </button>
              )}
              <button
                type="button"
                onClick={confirmConfig.onConfirm}
                className="flex-1 py-2 px-3 rounded-xl bg-accent hover:bg-accent/90 text-white dark:text-stone-950 font-bold text-xs transition-all shadow-md cursor-pointer"
              >
                {confirmConfig.confirmText}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating mobile drawing toolbar FAB */}
      {appStep === "study" && !isQuizMode && !showHero && (
        <div className="md:hidden fixed bottom-6 right-6 z-45 flex flex-col items-end gap-3 select-none">
          {isMobileToolbarOpen && (
            <div className="bg-white/95 dark:bg-stone-900/95 backdrop-blur-md border border-stone-200 dark:border-stone-800 rounded-2xl p-1.5 shadow-2xl flex items-center gap-2 animate-in slide-in-from-bottom-4 fade-in duration-200">
              
              {/* Cursor / Scroll Mode */}
              <button
                onClick={() => setActiveTool("cursor")}
                className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all cursor-pointer ${
                  activeTool === "cursor"
                    ? "bg-accent text-white font-bold shadow-md shadow-accent/25"
                    : "text-stone-400 hover:text-stone-700 dark:hover:text-stone-300"
                }`}
                title="Con trỏ đọc"
              >
                <MousePointer size={15} />
              </button>

              {/* Pen Tool */}
              <div className="relative flex justify-center">
                <button
                  onClick={() => {
                    setActiveTool("pen");
                    if (!penColors.some(c => c.value === activeColor)) {
                      setActiveColor(penColors[0].value);
                    }
                  }}
                  className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all cursor-pointer ${
                    activeTool === "pen"
                      ? "bg-accent text-white font-bold shadow-md shadow-accent/25"
                      : "text-stone-400 hover:text-stone-700 dark:hover:text-stone-300"
                  }`}
                  title="Bút vẽ"
                >
                  <Edit2 size={15} />
                  {activeTool === "pen" && (
                    <div 
                      className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full border border-stone-950"
                      style={{ backgroundColor: activeColor }}
                    />
                  )}
                </button>
                
                {/* Pen Color selector */}
                {activeTool === "pen" && (
                  <div className="absolute bottom-12 right-0 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-1 rounded-full flex gap-1 shadow-lg animate-in slide-in-from-bottom-2 duration-150">
                    {penColors.map(c => (
                      <button
                        key={c.value}
                        onClick={() => setActiveColor(c.value)}
                        className={`w-4.5 h-4.5 rounded-full border hover:scale-125 transition-transform cursor-pointer ${
                          activeColor === c.value ? "border-accent scale-110 shadow-sm" : "border-transparent"
                        }`}
                        style={{ backgroundColor: c.value }}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Highlighter Tool */}
              <div className="relative flex justify-center">
                <button
                  onClick={() => {
                    setActiveTool("highlighter");
                    if (!hlColors.some(c => c.value === activeColor)) {
                      setActiveColor(hlColors[0].value);
                    }
                  }}
                  className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all cursor-pointer ${
                    activeTool === "highlighter"
                      ? "bg-accent text-white font-bold shadow-md shadow-accent/25"
                      : "text-stone-400 hover:text-stone-700 dark:hover:text-stone-300"
                  }`}
                  title="Bút tô sáng"
                >
                  <Highlighter size={15} />
                  {activeTool === "highlighter" && (
                    <div 
                      className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full border border-stone-950"
                      style={{ backgroundColor: hlColors.find(c => c.value === activeColor)?.preview || activeColor }}
                    />
                  )}
                </button>
                
                {/* Highlighter Color selector */}
                {activeTool === "highlighter" && (
                  <div className="absolute bottom-12 right-0 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-1 rounded-full flex gap-1 shadow-lg animate-in slide-in-from-bottom-2 duration-150">
                    {hlColors.map(c => (
                      <button
                        key={c.value}
                        onClick={() => setActiveColor(c.value)}
                        className={`w-4.5 h-4.5 rounded-full border hover:scale-125 transition-transform cursor-pointer ${
                          activeColor === c.value ? "border-accent scale-110 shadow-sm" : "border-transparent"
                        }`}
                        style={{ backgroundColor: c.preview }}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Eraser Tool */}
              <button
                onClick={() => setActiveTool("eraser")}
                className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all cursor-pointer ${
                  activeTool === "eraser"
                    ? "bg-accent text-white font-bold shadow-md shadow-accent/25"
                    : "text-stone-400 hover:text-stone-700 dark:hover:text-stone-300"
                }`}
                title="Cục tẩy"
              >
                <Eraser size={15} />
              </button>

              {/* Clear All Tool */}
              <button
                onClick={handleClearAll}
                className="w-9 h-9 rounded-xl flex items-center justify-center text-red-500 hover:bg-red-500/10 cursor-pointer"
                title="Xóa hết"
              >
                <Trash2 size={15} />
              </button>

            </div>
          )}

          {/* Primary Toggle FAB Button */}
          <button
            onClick={() => setIsMobileToolbarOpen(!isMobileToolbarOpen)}
            className={`w-12 h-12 rounded-full border border-stone-250 dark:border-stone-800 flex items-center justify-center shadow-xl transition-all duration-300 active:scale-95 cursor-pointer ${
              isMobileToolbarOpen
                ? "bg-stone-900 dark:bg-white text-white dark:text-stone-900 rotate-45"
                : "bg-accent text-white hover:scale-105 shadow-accent/20"
            }`}
          >
            {isMobileToolbarOpen ? <X size={20} /> : <Edit2 size={20} />}
          </button>
        </div>
      )}
    </div>
  );
}
