"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Layers,
  Users,
  ShieldAlert,
  Trophy,
  FileSpreadsheet,
  Plus,
  BookOpen,
  LogOut
} from "lucide-react";
import AdminUnifiedHero from "./AdminUnifiedHero";
import AdminDock from "./AdminDock";
import LazySection from "./LazySection";
import AdminOverviewTab from "./AdminOverviewTab";
import AdminUsersTab from "./AdminUsersTab";
import AdminQuestionsTab from "./AdminQuestionsTab";
import AdminLeaderboardTab from "./AdminLeaderboardTab";
import AdminLearningReportTab from "./AdminLearningReportTab";
import AdminWorkDrawer from "./AdminWorkDrawer";
import AdminUserDrawer from "./AdminUserDrawer";
import { AdminAddUserModal, AdminChangePasswordModal } from "./AdminModals";

export default function AdminDashboard({
  allSubjects = {},
  onBackToStudy,
  onLogout,
  showToast,
  showConfirm
}) {
  const [adminTab, setAdminTab] = useState("overview");
  const [isWorkDrawerOpen, setIsWorkDrawerOpen] = useState(false);
  const [forcedSections, setForcedSections] = useState({ overview: true });

  // Users State
  const [users, setUsers] = useState([]);
  const [logs, setLogs] = useState([]);

  // Selected user for radar drawer
  const [selectedUser, setSelectedUser] = useState(null);
  const [isUserDrawerOpen, setIsUserDrawerOpen] = useState(false);

  // Modals state
  const [showAddModal, setShowAddModal] = useState(false);
  const [newUser, setNewUser] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPass, setNewPass] = useState("");
  const [newConfirmPass, setNewConfirmPass] = useState("");

  const [showChangePassModal, setShowChangePassModal] = useState(false);
  const [changePassTarget, setChangePassTarget] = useState(null);
  const [newChangePass, setNewChangePass] = useState("");
  const [confirmChangePass, setConfirmChangePass] = useState("");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth Header transition starting after halfway past Hero (45% -> 85%)
  const heroHeight = typeof window !== "undefined" ? window.innerHeight : 800;
  const startTransition = heroHeight * 0.45;
  const endTransition = heroHeight * 0.85;
  const headerProgress = Math.min(1, Math.max(0, (scrollY - startTransition) / (endTransition - startTransition)));

  // Scrollspy References & Lockout State
  const isManualScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef(null);

  // Smooth Scroll to Top Helper
  const scrollToTop = () => {
    isManualScrollingRef.current = true;
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setAdminTab("overview");
    scrollTimeoutRef.current = setTimeout(() => {
      isManualScrollingRef.current = false;
    }, 800);
  };

  // Smooth Scroll Helper with Scroll Lockout & Force Mount
  const scrollToSection = (id) => {
    setAdminTab(id);
    setForcedSections((prev) => ({ ...prev, [id]: true }));
    isManualScrollingRef.current = true;
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

    const element = document.getElementById(`section-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    scrollTimeoutRef.current = setTimeout(() => {
      isManualScrollingRef.current = false;
    }, 800);
  };

  // Scrollspy via IntersectionObserver
  useEffect(() => {
    if (typeof window === "undefined") return;

    const sections = document.querySelectorAll("[data-admin-section]");
    if (!sections || sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isManualScrollingRef.current) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.dataset.adminSection;
            if (sectionId) {
              setAdminTab(sectionId);
            }
          }
        });
      },
      {
        rootMargin: "-35% 0px -50% 0px",
        threshold: 0
      }
    );

    sections.forEach((sec) => observer.observe(sec));

    // Observe scroll position near top to reset to 'overview' when in Hero section
    const handleScrollAtTop = () => {
      if (isManualScrollingRef.current) return;
      if (window.scrollY < 300) {
        setAdminTab("overview");
      }
    };
    window.addEventListener("scroll", handleScrollAtTop, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScrollAtTop);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  // Load Admin Data on mount
  const loadData = () => {
    if (typeof window === "undefined") return;

    let storedUsers = [];
    try {
      storedUsers = JSON.parse(localStorage.getItem("studymaster_users") || "[]");
    } catch (e) {
      storedUsers = [];
    }

    if (storedUsers.length === 0) {
      storedUsers = [
        {
          username: "hocsinh1",
          email: "student1@gmail.com",
          password: "Student@123",
          createdAt: Date.now() - 5 * 24 * 3600 * 1000,
          locked: false
        },
        {
          username: "nguyenvana",
          email: "vana@gmail.com",
          password: "Student@123",
          createdAt: Date.now() - 3 * 24 * 3600 * 1000,
          locked: false
        },
        {
          username: "tranthib",
          email: "thib@gmail.com",
          password: "Student@123",
          createdAt: Date.now() - 1 * 24 * 3600 * 1000,
          locked: false
        }
      ];
      localStorage.setItem("studymaster_users", JSON.stringify(storedUsers));
    }
    setUsers(storedUsers);

    let storedLogs = [];
    try {
      storedLogs = JSON.parse(
        localStorage.getItem("studymaster_admin_logs") || "[]"
      );
    } catch (e) {
      storedLogs = [];
    }

    if (storedLogs.length === 0) {
      storedLogs = [
        {
          id: 1,
          user: "nguyenvana",
          action: "Hoàn thành bài thi môn Lịch sử Đảng",
          time: "5 phút trước",
          score: 36,
          total: 40
        },
        {
          id: 2,
          user: "tranthib",
          action: "Đạt điểm 40/40 môn Tư tưởng HCM",
          time: "2 giờ trước",
          score: 40,
          total: 40
        },
        {
          id: 3,
          user: "hocsinh1",
          action: "Hoàn thành bài thi môn Tư tưởng HCM",
          time: "1 ngày trước",
          score: 28,
          total: 40
        }
      ];
      localStorage.setItem("studymaster_admin_logs", JSON.stringify(storedLogs));
    }
    setLogs(storedLogs);
  };

  useEffect(() => {
    loadData();
  }, []);

  const writeAdminLog = (actionUser, actionDescription) => {
    let currentLogs = [];
    try {
      currentLogs = JSON.parse(
        localStorage.getItem("studymaster_admin_logs") || "[]"
      );
    } catch (e) {
      currentLogs = [];
    }
    const newLog = {
      id: Date.now(),
      user: actionUser,
      action: actionDescription,
      time: "Vừa xong"
    };
    const updated = [newLog, ...currentLogs].slice(0, 50);
    localStorage.setItem("studymaster_admin_logs", JSON.stringify(updated));
    setLogs(updated);
  };

  // Compute Overall Stats
  const getStats = () => {
    const totalUsers = users.length;
    const totalSubjects = Object.keys(allSubjects).length;

    let totalAttempts = 0;
    let totalScorePercent = 0;

    Object.values(allSubjects).forEach((subj) => {
      const chaptersList = subj.chapters || [];
      chaptersList.forEach((ch) => {
        if (typeof window !== "undefined") {
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
        }
      });
    });

    const avgScore =
      totalAttempts > 0 ? Math.round(totalScorePercent / totalAttempts) : 0;

    return {
      totalUsers,
      totalSubjects,
      totalAttempts,
      avgScore,
      totalTraps: 50
    };
  };

  // 7-day Attempts Data
  const getDailyAttempts = () => {
    const attempts = {};
    const today = new Date();
    for (let i = 6; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(today.getDate() - i);
      const dateStr = d.toLocaleDateString("vi-VN", {
        day: "2-digit",
        month: "2-digit"
      });
      attempts[dateStr] = 0;
    }

    Object.values(allSubjects).forEach((subj) => {
      const chaptersList = subj.chapters || [];
      chaptersList.forEach((ch) => {
        if (typeof window !== "undefined") {
          const stored = localStorage.getItem(`studymaster_quiz_rankings_${ch.id}`);
          if (stored) {
            try {
              const rankings = JSON.parse(stored);
              rankings.forEach((r) => {
                if (r.date) {
                  const rDate = new Date(r.date);
                  const dateStr = rDate.toLocaleDateString("vi-VN", {
                    day: "2-digit",
                    month: "2-digit"
                  });
                  if (attempts[dateStr] !== undefined) {
                    attempts[dateStr]++;
                  }
                }
              });
            } catch (e) {}
          }
        }
      });
    });

    return Object.entries(attempts).map(([date, count]) => ({ date, count }));
  };

  // Subject Distribution
  const getSubjectDistribution = () => {
    const dist = {};
    let totalAttempts = 0;
    Object.values(allSubjects).forEach((subj) => {
      let count = 0;
      const chaptersList = subj.chapters || [];
      chaptersList.forEach((ch) => {
        if (typeof window !== "undefined") {
          const stored = localStorage.getItem(`studymaster_quiz_rankings_${ch.id}`);
          if (stored) {
            try {
              const rankings = JSON.parse(stored);
              count += rankings.length;
            } catch (e) {}
          }
        }
      });
      if (count > 0) {
        dist[subj.title] = count;
        totalAttempts += count;
      }
    });

    if (totalAttempts === 0) {
      return Object.values(allSubjects)
        .slice(0, 4)
        .map((subj, idx) => ({
          name: subj.title,
          count: 0,
          percent: idx === 0 ? 100 : 0,
          color: subj.themeColors?.accent || "#D85A38"
        }));
    }

    return Object.entries(dist).map(([name, count]) => {
      const percent = Math.round((count / totalAttempts) * 100);
      const matchedSub = Object.values(allSubjects).find((s) => s.title === name);
      return {
        name,
        count,
        percent,
        color: matchedSub?.themeColors?.accent || "#D85A38"
      };
    });
  };

  // Student Best Percent per Subject
  const getStudentSubjectScore = (username, subjId) => {
    const subj = allSubjects[subjId];
    if (!subj) return 0;
    const chaptersList = subj.chapters || [];
    let bestPercent = 0;
    chaptersList.forEach((ch) => {
      if (typeof window !== "undefined") {
        const stored = localStorage.getItem(`studymaster_quiz_rankings_${ch.id}`);
        if (stored) {
          try {
            const rankings = JSON.parse(stored);
            const userRecords = rankings.filter((r) => r.name === username);
            userRecords.forEach((r) => {
              const percent = r.total > 0 ? (r.score / r.total) * 100 : 0;
              if (percent > bestPercent) bestPercent = percent;
            });
          } catch (e) {}
        }
      }
    });
    return bestPercent;
  };

  // 8-Axis Radar Chart Points
  const getRadarPoints = (username) => {
    const cx = 135;
    const cy = 135;
    const maxR = 80;
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

  // Student Quiz History
  const getUserHistory = (username) => {
    const history = [];
    Object.values(allSubjects).forEach((subj) => {
      const chaptersList = subj.chapters || [];
      chaptersList.forEach((ch) => {
        if (typeof window !== "undefined") {
          const stored = localStorage.getItem(`studymaster_quiz_rankings_${ch.id}`);
          if (stored) {
            try {
              const rankings = JSON.parse(stored);
              const userRecords = rankings.filter((r) => r.name === username);
              userRecords.forEach((r) => {
                history.push({
                  subject: subj.title,
                  chapter: ch.title,
                  score: r.score,
                  total: r.total,
                  date: r.date
                    ? new Date(r.date).toLocaleDateString("vi-VN")
                    : "—",
                  time: r.time ? `${Math.round(r.time)}s` : "—",
                  timestamp: r.date ? new Date(r.date).getTime() : 0
                });
              });
            } catch (e) {}
          }
        }
      });
    });
    history.sort((a, b) => b.timestamp - a.timestamp);
    return history;
  };

  // Handlers
  const handleCreateUser = (e) => {
    e.preventDefault();
    if (!newUser.trim() || !newEmail.trim() || !newPass.trim()) {
      showToast?.("Vui lòng nhập đầy đủ thông tin!", "warning");
      return;
    }
    if (newPass !== newConfirmPass) {
      showToast?.("Mật khẩu xác nhận không khớp!", "warning");
      return;
    }
    if (users.some((u) => u.username === newUser || u.email === newEmail)) {
      showToast?.("Tên đăng nhập hoặc email đã tồn tại!", "error");
      return;
    }

    const created = {
      username: newUser.trim(),
      email: newEmail.trim(),
      password: newPass,
      createdAt: Date.now(),
      locked: false
    };

    const updated = [...users, created];
    localStorage.setItem("studymaster_users", JSON.stringify(updated));
    setUsers(updated);
    writeAdminLog("Admin", `Tạo mới học viên ${newUser}`);
    showToast?.(`Đã tạo học viên ${newUser} thành công!`, "success");

    setNewUser("");
    setNewEmail("");
    setNewPass("");
    setNewConfirmPass("");
    setShowAddModal(false);
  };

  const handleDeleteUser = (username) => {
    showConfirm?.({
      title: "Xác nhận xóa học viên",
      message: `Bạn có chắc chắn muốn xóa vĩnh viễn tài khoản của học viên ${username}? Thao tác này không thể hoàn tác.`,
      type: "warning",
      confirmText: "Xóa học viên",
      cancelText: "Hủy",
      onConfirm: () => {
        const updated = users.filter((u) => u.username !== username);
        localStorage.setItem("studymaster_users", JSON.stringify(updated));
        setUsers(updated);
        localStorage.removeItem(`studymaster_unlocked_subjects_${username}`);
        writeAdminLog("Admin", `Xóa tài khoản của học viên ${username}`);
        showToast?.(`Đã xóa học viên ${username} thành công.`, "success");

        if (selectedUser && selectedUser.username === username) {
          setSelectedUser(null);
          setIsUserDrawerOpen(false);
        }
      }
    });
  };

  const handleToggleLockUser = (username) => {
    const updated = users.map((u) => {
      if (u.username === username) {
        const nextLock = !u.locked;
        writeAdminLog(
          "Admin",
          `${nextLock ? "Khóa" : "Mở khóa"} tài khoản của ${username}`
        );
        showToast?.(
          `Đã ${nextLock ? "khóa" : "mở khóa"} tài khoản ${username}`,
          "success"
        );
        const newUserObj = { ...u, locked: nextLock };
        if (selectedUser && selectedUser.username === username) {
          setSelectedUser(newUserObj);
        }
        return newUserObj;
      }
      return u;
    });

    localStorage.setItem("studymaster_users", JSON.stringify(updated));
    setUsers(updated);
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    if (!newChangePass.trim()) {
      showToast?.("Mật khẩu mới không được để trống!", "warning");
      return;
    }
    if (newChangePass !== confirmChangePass) {
      showToast?.("Mật khẩu xác nhận không khớp!", "warning");
      return;
    }

    const updated = users.map((u) => {
      if (u.username === changePassTarget.username) {
        return { ...u, password: newChangePass };
      }
      return u;
    });

    localStorage.setItem("studymaster_users", JSON.stringify(updated));
    setUsers(updated);
    writeAdminLog(
      "Admin",
      `Đổi mật khẩu cho học viên ${changePassTarget.username}`
    );
    showToast?.(
      `Đã cập nhật mật khẩu cho ${changePassTarget.username} thành công!`,
      "success"
    );

    setNewChangePass("");
    setConfirmChangePass("");
    setShowChangePassModal(false);
    setChangePassTarget(null);
  };

  const handleToggleSubjectLock = (username, subjectId) => {
    const key = `studymaster_unlocked_subjects_${username}`;
    let unlocked = [];
    try {
      unlocked = JSON.parse(localStorage.getItem(key) || "[]");
    } catch (e) {
      unlocked = [];
    }

    if (unlocked.includes(subjectId)) {
      unlocked = unlocked.filter((id) => id !== subjectId);
      showToast?.(
        `Đã khóa môn ${allSubjects[subjectId]?.title || subjectId} đối với ${username}`,
        "info"
      );
    } else {
      unlocked.push(subjectId);
      showToast?.(
        `Đã mở khóa môn ${allSubjects[subjectId]?.title || subjectId} đối với ${username}`,
        "success"
      );
    }

    localStorage.setItem(key, JSON.stringify(unlocked));
    if (selectedUser && selectedUser.username === username) {
      setSelectedUser({ ...selectedUser });
    }
  };

  const handleUnlockAllSubjects = (username) => {
    const key = `studymaster_unlocked_subjects_${username}`;
    const allIds = Object.keys(allSubjects);
    localStorage.setItem(key, JSON.stringify(allIds));
    showToast?.(`Đã mở khóa toàn bộ môn học cho ${username}!`, "success");
    if (selectedUser && selectedUser.username === username) {
      setSelectedUser({ ...selectedUser });
    }
  };

  const handleLockAllSubjects = (username) => {
    const key = `studymaster_unlocked_subjects_${username}`;
    localStorage.setItem(key, JSON.stringify([]));
    showToast?.(`Đã khóa các môn tự chọn cho ${username}!`, "info");
    if (selectedUser && selectedUser.username === username) {
      setSelectedUser({ ...selectedUser });
    }
  };

  const handleClearLogs = () => {
    localStorage.setItem("studymaster_admin_logs", "[]");
    setLogs([]);
    showToast?.("Đã xóa trắng lịch sử nhật ký!", "info");
  };

  const handleClearRankings = (chapterId) => {
    showConfirm?.({
      title: "Xác nhận xóa bảng xếp hạng",
      message: `Bạn có chắc muốn xóa dữ liệu bảng xếp hạng của chương này?`,
      type: "warning",
      confirmText: "Xóa dữ liệu",
      cancelText: "Hủy",
      onConfirm: () => {
        localStorage.removeItem(`studymaster_quiz_rankings_${chapterId}`);
        showToast?.("Đã xóa trắng bảng xếp hạng chương!", "success");
      }
    });
  };

  const handleExportExcel = () => {
    let csvContent = "\uFEFF";
    csvContent += "Học viên,Email,Lượt ôn tập,Điểm trung bình,Trạng thái\n";

    users.forEach((user) => {
      let totalAttempts = 0;
      let totalPercent = 0;

      Object.values(allSubjects).forEach((subj) => {
        const chaptersList = subj.chapters || [];
        chaptersList.forEach((ch) => {
          if (typeof window !== "undefined") {
            const stored = localStorage.getItem(
              `studymaster_quiz_rankings_${ch.id}`
            );
            if (stored) {
              try {
                const rankings = JSON.parse(stored);
                const userRecords = rankings.filter(
                  (r) => r.name === user.username
                );
                totalAttempts += userRecords.length;
                userRecords.forEach((r) => {
                  totalPercent +=
                    r.total > 0 ? (r.score / r.total) * 100 : 0;
                });
              } catch (e) {}
            }
          }
        });
      });

      const avgScore =
        totalAttempts > 0 ? Math.round(totalPercent / totalAttempts) : 0;
      const statusStr = user.locked ? "Bị khóa" : "Hoạt động";
      csvContent += `${user.username},${user.email},${totalAttempts},${avgScore}%,${statusStr}\n`;
    });

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "Danh_sach_hoc_vien_StudyMaster.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast?.("Đã xuất danh sách học viên dạng Excel (CSV) thành công!", "success");
  };

  const stats = getStats();
  const dailyData = getDailyAttempts();
  const subjectDist = getSubjectDistribution();

  // Get unlocked list for selected user
  let selectedUserUnlocked = [];
  if (selectedUser && typeof window !== "undefined") {
    try {
      selectedUserUnlocked = JSON.parse(
        localStorage.getItem(
          `studymaster_unlocked_subjects_${selectedUser.username}`
        ) || "[]"
      );
    } catch (e) {
      selectedUserUnlocked = [];
    }
  }

  return (
    <div className="w-full min-h-screen bg-[#FAF8F5] text-[#38150E] font-sans relative scroll-smooth selection:bg-[#D85A38]/20">
      
      {/* ========================================================================= */}
      {/* FIXED TOPBAR HEADER NAVIGATION (CHUYỂN DẦN TỪ NỬA HERO TRỞ ĐI)          */}
      {/* ========================================================================= */}
      <header
        className="fixed top-0 inset-x-0 z-40 w-full px-4 sm:px-6 lg:px-8 py-3 select-none transition-all duration-75"
        style={{
          backgroundColor: `rgba(250, 248, 245, ${headerProgress * 0.92})`,
          backdropFilter: headerProgress > 0.05 ? `blur(${headerProgress * 24}px)` : "none",
          WebkitBackdropFilter: headerProgress > 0.05 ? `blur(${headerProgress * 24}px)` : "none",
          borderBottom: headerProgress > 0.1 ? `1px solid rgba(232, 218, 203, ${headerProgress * 0.8})` : "1px solid transparent",
          boxShadow: headerProgress > 0.2 ? `0 4px 20px rgba(56, 21, 14, ${headerProgress * 0.05})` : "none"
        }}
      >
        <div className="max-w-[1600px] w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-2 sm:px-4">
          {/* Brand Logo (Liquid Mirror Glass with 3D Golden Mascot Emblem - Cuộn lên đầu trang) */}
          <div 
            onClick={scrollToTop}
            title="Cuộn lên đầu trang"
            className="group flex items-center gap-3 bg-white/30 hover:bg-white/45 active:scale-95 dark:bg-black/40 backdrop-blur-3xl px-3.5 py-1.5 rounded-2xl border border-white/50 border-t-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_1px_1px_rgba(255,255,255,0.7)] transition-all duration-300 cursor-pointer"
          >
            <img
              src="/assets/cancer_mascot_transparent.png"
              alt="StudyMaster Golden Mascot Emblem"
              className="w-10 h-10 sm:w-11 sm:h-11 object-contain filter drop-shadow-[0_3px_8px_rgba(0,0,0,0.22)] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shrink-0"
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base tracking-wide text-[#38150E] dark:text-white drop-shadow-2xs group-hover:text-[#D85A38] transition-colors">
                  StudyMaster
                </span>
                <span className="text-[10px] px-2.5 py-0.5 rounded-full font-extrabold bg-[#FAF5EE]/95 text-[#D85A38] border border-white/60 shadow-2xs">
                  Admin Control
                </span>
              </div>
              <p className="text-[10px] text-[#4A241A] dark:text-stone-300 font-bold tracking-wider uppercase">
                Hệ Thống Quản Trị Khảo Thí
              </p>
            </div>
          </div>

          {/* Center Liquid Mirror Glass Nav Pill */}
          <nav className="flex items-center gap-1.5 bg-white/30 dark:bg-black/40 backdrop-blur-3xl border border-white/50 border-t-white/80 p-1.5 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_1px_1px_rgba(255,255,255,0.7)] overflow-x-auto max-w-full">
            {[
              { id: "overview", label: "Tổng quan", icon: Layers },
              { id: "users", label: `Học viên (${users.length})`, icon: Users },
              { id: "questions", label: "Soi đề & Bẫy", icon: ShieldAlert },
              { id: "leaderboard", label: "Bảng vàng", icon: Trophy }
            ].map((item) => {
              const isActive = adminTab === item.id;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative flex items-center gap-2 px-4.5 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-300 cursor-pointer border-none whitespace-nowrap ${
                    isActive
                      ? "bg-[#38150E]/95 text-[#FAF8F5] shadow-md border border-white/20 scale-100 backdrop-blur-md"
                      : "text-[#38150E]/90 dark:text-stone-200 hover:text-[#38150E] dark:hover:text-white hover:bg-white/40 dark:hover:bg-white/10"
                  }`}
                >
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D85A38] animate-pulse" />
                  )}
                  <Icon size={14} className={isActive ? "text-[#E8B86D]" : "text-[#5C3A2E]"} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={onBackToStudy}
              className="flex items-center gap-2 px-4.5 py-2 rounded-full text-xs sm:text-sm font-extrabold text-[#38150E] hover:text-[#180A06] bg-white/35 hover:bg-white/55 backdrop-blur-3xl border border-white/50 border-t-white/80 shadow-[0_4px_20px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,0.7)] transition-all duration-300 cursor-pointer active:scale-95"
            >
              <BookOpen size={14} className="text-[#D48B38]" />
              <span>Vào học</span>
            </button>

            <button
              onClick={onLogout}
              className="flex items-center gap-2 px-4.5 py-2 rounded-full text-xs sm:text-sm font-extrabold text-white bg-[#38150E]/90 hover:bg-[#38150E] backdrop-blur-md border border-white/25 border-t-white/40 shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <LogOut size={14} className="text-[#E8B86D]" />
              <span>Thoát</span>
            </button>
          </div>
        </div>
      </header>

      {/* 0. SECTION 0: STANDALONE FULL-WIDTH CINEMATIC HERO */}
      <AdminUnifiedHero
        activeTab={adminTab}
        onSelectTab={scrollToSection}
        stats={stats}
        onOpenDrawer={(tab) => scrollToSection(tab)}
      />

      {/* 1. SECTION 1: OVERVIEW & SYSTEM AUDIT LOGS (LAZY MOUNT) */}
      <LazySection
        id="overview"
        type="overview"
        headerIcon={Layers}
        headerTitle="Báo Cáo Tổng Quan & Nhật Ký Hoạt Động"
        headerBadge="Live Analytics"
        headerBadgeColor="bg-[#F0FDF4] dark:bg-[#15803D]/15 text-[#15803D] dark:text-[#86EFAC] border border-[#BBF7D0] dark:border-[#15803D]/30"
        headerDesc="Thống kê tiến độ ôn tập, tần suất thi thử và luồng sự kiện kiểm tra thời gian thực."
        initialMount={true}
        forceMount={!!forcedSections.overview}
      >
        <AdminOverviewTab
          stats={stats}
          dailyData={dailyData}
          subjectDist={subjectDist}
          logs={logs}
          onClearLogs={handleClearLogs}
          onExportExcel={handleExportExcel}
        />
      </LazySection>

      {/* 2. SECTION 2: USERS & PERMISSIONS MANAGEMENT (LAZY MOUNT) */}
      <LazySection
        id="users"
        type="users"
        headerIcon={Users}
        headerTitle="Quản Trị Danh Sách & Phân Quyền Học Viên"
        headerBadge={`${users.length} Học Viên`}
        headerBadgeColor="bg-[#FAF5EE] dark:bg-white/10 text-[#D85A38] dark:text-[#F87171] border border-[#E8DACB] dark:border-white/15"
        headerDesc="Quản lý tài khoản, đặt lại mật khẩu, mở khóa môn học và phân tích radar năng lực."
        actionButton={
          <button
            onClick={() => setShowAddModal(true)}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#D85A38] hover:bg-[#C44C2C] active:scale-95 shadow-md shadow-[#D85A38]/30 transition-all cursor-pointer"
          >
            <Plus size={15} />
            <span>Thêm Học Viên</span>
          </button>
        }
        className="scroll-mt-24 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 space-y-6 border-t border-[#E8DACB]/60 dark:border-white/10"
        forceMount={!!forcedSections.users}
      >
        <AdminUsersTab
          users={users}
          allSubjects={allSubjects}
          onOpenAddUser={() => setShowAddModal(true)}
          onSelectUser={(user) => {
            setSelectedUser(user);
            setIsUserDrawerOpen(true);
          }}
          onOpenChangePass={(user) => {
            setChangePassTarget(user);
            setShowChangePassModal(true);
          }}
          onToggleLockUser={handleToggleLockUser}
          onDeleteUser={handleDeleteUser}
        />
      </LazySection>

      {/* 3. SECTION 3: QUESTION BANK & RULE COMPLIANCE AUDITOR (LAZY MOUNT) */}
      <LazySection
        id="questions"
        type="questions"
        headerIcon={ShieldAlert}
        headerTitle="Kiểm Định Ngân Hàng Câu Hỏi & Bẫy Tư Duy"
        headerBadge="Luật ΔL ≤ 15"
        headerBadgeColor="bg-[#FEF3C7] dark:bg-[#D97706]/15 text-[#D97706] dark:text-[#FCD34D] border border-[#FDE68A] dark:border-[#D97706]/30"
        headerDesc="Bộ quét tự động phát hiện vi phạm độ dài phương án và phân tích 50 câu bẫy vận dụng cao."
        className="scroll-mt-24 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 space-y-6 border-t border-[#E8DACB]/60 dark:border-white/10"
        forceMount={!!forcedSections.questions}
      >
        <AdminQuestionsTab allSubjects={allSubjects} />
      </LazySection>

      {/* 4. SECTION 4: LEADERBOARD & GOLDEN PODIUM (LAZY MOUNT) */}
      <LazySection
        id="leaderboard"
        type="leaderboard"
        headerIcon={Trophy}
        headerTitle="Bảng Vàng Khảo Thí & Bục Vinh Danh Top 3"
        headerBadge="Golden Podium"
        headerBadgeColor="bg-[#FEF9C3] dark:bg-[#CA8A04]/15 text-[#CA8A04] dark:text-[#FDE047] border border-[#FEF08A] dark:border-[#CA8A04]/30"
        headerDesc="Tôn vinh thành tích học tập xuất sắc của học viên theo từng môn học và đợt thi xếp hạng."
        className="scroll-mt-24 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 space-y-6 border-t border-[#E8DACB]/60 dark:border-white/10 pb-24"
        forceMount={!!forcedSections.leaderboard}
      >
        <AdminLeaderboardTab
          allSubjects={allSubjects}
          onClearRankings={handleClearRankings}
        />
      </LazySection>

      {/* 5. SECTION 5: LEARNING REPORT & EXCEL/PDF EXPORT (LAZY MOUNT) */}
      <LazySection
        id="learning-report"
        type="learning-report"
        headerIcon={FileSpreadsheet}
        headerTitle="Báo Cáo Tiến Độ Học Tập & Ôn Tập (Excel/PDF)"
        headerBadge="State Sync"
        headerBadgeColor="bg-[#F0FDF4] dark:bg-[#15803D]/15 text-[#15803D] dark:text-[#86EFAC] border border-[#BBF7D0] dark:border-[#15803D]/30"
        headerDesc="Tổng hợp ma trận hoàn thành bài đọc, tiến độ tiểu mục, danh sách cần ôn tập và trích xuất báo cáo."
        className="scroll-mt-24 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 space-y-6 border-t border-[#E8DACB]/60 dark:border-white/10 pb-24"
        forceMount={!!forcedSections["learning-report"]}
      >
        <AdminLearningReportTab />
      </LazySection>

      {/* 6. SLIDE-OVER RADAR DRAWER FOR INDIVIDUAL STUDENT */}
      <AdminUserDrawer
        isOpen={isUserDrawerOpen}
        onClose={() => setIsUserDrawerOpen(false)}
        selectedUser={selectedUser}
        allSubjects={allSubjects}
        userHistory={selectedUser ? getUserHistory(selectedUser.username) : []}
        radarPoints={selectedUser ? getRadarPoints(selectedUser.username) : ""}
        unlockedList={selectedUserUnlocked}
        onToggleLockUser={handleToggleLockUser}
        onDeleteUser={handleDeleteUser}
        onToggleSubjectLock={handleToggleSubjectLock}
        onUnlockAllSubjects={handleUnlockAllSubjects}
        onLockAllSubjects={handleLockAllSubjects}
      />

      {/* 6. SLIDE-OVER QUICK WORK TOOLS DRAWER */}
      <AdminWorkDrawer
        isOpen={isWorkDrawerOpen}
        onClose={() => setIsWorkDrawerOpen(false)}
        activeTab={adminTab}
        stats={stats}
        dailyData={dailyData}
        subjectDist={subjectDist}
        logs={logs}
        onClearLogs={handleClearLogs}
        onExportExcel={handleExportExcel}
        users={users}
        allSubjects={allSubjects}
        onOpenAddUser={() => setShowAddModal(true)}
        onSelectUser={(user) => {
          setSelectedUser(user);
          setIsUserDrawerOpen(true);
        }}
        onOpenChangePass={(user) => {
          setChangePassTarget(user);
          setShowChangePassModal(true);
        }}
        onToggleLockUser={handleToggleLockUser}
        onDeleteUser={handleDeleteUser}
        onClearRankings={handleClearRankings}
      />

      {/* 7. MODALS */}
      <AdminAddUserModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        newUser={newUser}
        setNewUser={setNewUser}
        newEmail={newEmail}
        setNewEmail={setNewEmail}
        newPass={newPass}
        setNewPass={setNewPass}
        newConfirmPass={newConfirmPass}
        setNewConfirmPass={setNewConfirmPass}
        onSubmit={handleCreateUser}
      />

      <AdminChangePasswordModal
        isOpen={showChangePassModal}
        onClose={() => {
          setShowChangePassModal(false);
          setChangePassTarget(null);
        }}
        targetUser={changePassTarget}
        newPass={newChangePass}
        setNewPass={setNewChangePass}
        confirmPass={confirmChangePass}
        setConfirmPass={setConfirmChangePass}
        onSubmit={handleChangePassword}
      />

    </div>
  );
}
