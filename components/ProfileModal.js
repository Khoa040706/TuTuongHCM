/* eslint-disable react-hooks/set-state-in-effect, @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { X, User, Mail, Shield, ShieldAlert, Key, Upload, Trash2, KeyRound, Check, AlertCircle, Eye, EyeOff } from "lucide-react";
import { db } from "../lib/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export default function ProfileModal({
  isOpen,
  onClose,
  currentUser,
  currentUserAvatar,
  setCurrentUserAvatar,
  allSubjects,
  showToast,
  showConfirm,
  showAlert
}) {
  const [activeTab, setActiveTab] = useState("profile"); // "profile", "security"
  const { theme } = useTheme();
  const [email, setEmail] = useState("");
  
  // Security Tab States
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const getPasswordValidation = (password) => {
    return {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      number: /[0-9]/.test(password),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(password)
    };
  };

  // Statistics States
  const [stats, setStats] = useState({
    attemptsCount: 0,
    averageScore: 0,
    highestScore: 0,
    customCount: 0
  });

  useEffect(() => {
    if (!isOpen) return;

    const fetchUserDetails = async () => {
      if (currentUser === "admin") {
        setEmail("admin@studymaster.edu");
        return;
      }
      try {
        const userDocRef = doc(db, "users", currentUser);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          setEmail(userDoc.data().email || "");
        }
      } catch (e) {
        console.error("Lỗi khi tải thông tin email từ Firestore:", e);
      }
    };
    fetchUserDetails();

    // Load stats
    let totalAttempts = 0;
    let totalScore = 0;
    let maxScore = 0;

    // Scan all possible quiz records (from subjects data)
    Object.keys(allSubjects).forEach(subId => {
      try {
        const rankings = JSON.parse(localStorage.getItem(`studymaster_quiz_rankings_${subId}`) || "[]");
        const userRecords = rankings.filter(r => r.name === currentUser);
        
        userRecords.forEach(r => {
          totalAttempts++;
          totalScore += r.score;
          if (r.score > maxScore) {
            maxScore = r.score;
          }
        });
      } catch (e) {
        console.error(e);
      }
    });

    const customCount = Object.values(allSubjects).filter(s => s.isCustom).length;

    setStats({
      attemptsCount: totalAttempts,
      averageScore: totalAttempts > 0 ? Math.round((totalScore / totalAttempts) * 10) / 10 : 0,
      highestScore: maxScore,
      customCount
    });
  }, [isOpen, currentUser, allSubjects]);

  const handleAvatarUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      showAlert({
        title: "Tải ảnh đại diện lỗi",
        message: "Kích thước file quá lớn! Vui lòng chọn tệp nhỏ hơn 2MB.",
        type: "warning"
      });
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const base64 = event.target?.result;
      if (base64) {
        localStorage.setItem(`studymaster_avatar_${currentUser}`, base64);
        setCurrentUserAvatar(base64);
        showToast("Đã cập nhật ảnh đại diện thành công!", "success");
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSelectDefaultAvatar = (avatarPath) => {
    localStorage.setItem(`studymaster_avatar_${currentUser}`, avatarPath);
    setCurrentUserAvatar(avatarPath);
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();

    const val = getPasswordValidation(newPassword);
    if (!val.length || !val.uppercase || !val.number || !val.special) {
      showAlert({
        title: "Bảo mật mật khẩu",
        message: "Mật khẩu mới chưa đạt yêu cầu bảo mật! Vui lòng hoàn thành đầy đủ các tiêu chuẩn bảo mật.",
        type: "warning"
      });
      return;
    }
    if (newPassword !== confirmPassword) {
      showAlert({
        title: "Đổi mật khẩu lỗi",
        message: "Xác nhận mật khẩu mới không khớp!",
        type: "warning"
      });
      return;
    }

    // Check if it's admin changing default credentials
    if (currentUser === "admin") {
      showAlert({
        title: "Giới hạn hệ thống",
        message: "Tài khoản admin mặc định không thể thay đổi qua form này. Hãy cập nhật trong file hệ thống.",
        type: "warning"
      });
      return;
    }

    try {
      showToast("Đang xác thực và cập nhật...", "info");
      const userDocRef = doc(db, "users", currentUser);
      const userDoc = await getDoc(userDocRef);
      
      if (!userDoc.exists()) {
        showAlert({
          title: "Lỗi tài khoản",
          message: "Không tìm thấy thông tin tài khoản trên hệ thống!",
          type: "warning"
        });
        return;
      }

      const userData = userDoc.data();
      if (userData.password !== oldPassword) {
        showAlert({
          title: "Xác thực lỗi",
          message: "Mật khẩu cũ nhập vào không chính xác!",
          type: "warning"
        });
        return;
      }

      // Update password on Firestore
      await updateDoc(userDocRef, { password: newPassword });
      
      showToast("Đổi mật khẩu thành công!", "success");
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.error("Lỗi đổi mật khẩu:", error);
      showToast("Gặp sự cố khi kết nối dữ liệu. Vui lòng thử lại sau!", "error");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in">
      <div className="w-full max-w-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-6 md:p-8 shadow-2xl text-left text-stone-900 dark:text-stone-100 flex flex-col max-h-[85vh] overflow-hidden">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-stone-200 dark:border-stone-850 pb-3 mb-6 flex-shrink-0">
          <h3 className="font-bold text-lg text-stone-800 dark:text-stone-200 flex items-center gap-2">
            <span className="text-accent cancer-zodiac-pulse text-xl">♋</span>
            Hồ sơ tài khoản
          </h3>
          <button onClick={onClose} className="text-stone-400 dark:text-stone-500 hover:text-stone-600 dark:hover:text-stone-200 cursor-pointer">
            <X size={20} />
          </button>
        </div>

        {/* Tab Controls */}
        <div className="flex gap-2 mb-6 border-b border-stone-200 dark:border-stone-850 pb-2 flex-shrink-0">
          <button
            onClick={() => setActiveTab("profile")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === "profile" 
                ? "bg-accent text-white dark:text-stone-950 shadow-md shadow-accent/25" 
                : "text-stone-500 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800/40"
            }`}
          >
            Thông tin cá nhân
          </button>
          {currentUser !== "admin" && (
            <button
              onClick={() => setActiveTab("security")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === "security" 
                  ? "bg-accent text-white dark:text-stone-950 shadow-md shadow-accent/25" 
                  : "text-stone-500 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800/40"
              }`}
            >
              Bảo mật
            </button>
          )}
        </div>

        {/* Tab Content Area (Scrollable) */}
        <div className="flex-grow overflow-y-auto pr-1 space-y-6">
          
          {/* PROFILE TAB */}
          {activeTab === "profile" && (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                
                {/* Avatar Display & Upload */}
                <div className="flex flex-col items-center gap-3">
                  <div className={`relative w-24 h-24 rounded-full overflow-hidden shadow-xl flex items-center justify-center transition-all duration-300 ${
                    !currentUserAvatar || currentUserAvatar.includes("cancer_mascot_transparent.png")
                      ? "bg-transparent border-0"
                      : "bg-stone-100 dark:bg-stone-900 border-2 border-stone-200 dark:border-stone-800"
                  }`}>
                    <img
                      src={currentUserAvatar || "/assets/cancer_mascot_transparent.png"}
                      alt="User Avatar"
                      className={`w-full h-full object-cover ${
                        (!currentUserAvatar || currentUserAvatar.includes("cancer_mascot_transparent.png")) ? "scale-[1.05]" : ""
                      }`}
                    />
                  </div>
                  
                  {/* File Upload Button */}
                  <label className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-stone-200 dark:border-stone-700 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-[10px] font-bold text-stone-600 dark:text-stone-300 hover:text-stone-800 dark:hover:text-white transition-all cursor-pointer">
                    <Upload size={12} />
                    Tải ảnh từ máy
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleAvatarUpload}
                      className="hidden"
                    />
                  </label>
                  
                  {/* Mascot Choice Fallback */}
                  <button 
                    onClick={() => handleSelectDefaultAvatar("/assets/cancer_mascot_transparent.png")}
                    className="text-[9px] text-accent hover:underline cursor-pointer"
                  >
                    Dùng logo mặc định
                  </button>
                </div>

                {/* Account Details & Stats */}
                <div className="flex-1 space-y-4 w-full">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-stone-50 dark:bg-stone-950/40 border border-stone-200 dark:border-stone-850/60 p-4 rounded-2xl">
                      <div className="text-[10px] text-stone-500 dark:text-stone-400 font-bold uppercase mb-1">Tên tài khoản</div>
                      <div className="text-sm font-semibold flex items-center gap-1.5 text-stone-800 dark:text-stone-200">
                        <User size={14} className="text-stone-450 dark:text-stone-400" />
                        {currentUser}
                      </div>
                    </div>

                    <div className="bg-stone-50 dark:bg-stone-950/40 border border-stone-200 dark:border-stone-850/60 p-4 rounded-2xl">
                      <div className="text-[10px] text-stone-500 dark:text-stone-400 font-bold uppercase mb-1">Email liên kết</div>
                      <div className="text-sm font-semibold flex items-center gap-1.5 text-stone-800 dark:text-stone-200 truncate">
                        <Mail size={14} className="text-stone-450 dark:text-stone-400" />
                        {email || "Chưa thiết lập"}
                      </div>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-3">Thống kê học tập</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      <div className="bg-stone-50 dark:bg-stone-950/25 border border-stone-200 dark:border-stone-850/40 p-3 rounded-xl text-center">
                        <div className="text-lg font-mono font-bold text-accent">{stats.attemptsCount}</div>
                        <div className="text-[9px] text-stone-500 dark:text-stone-400">Lượt làm bài test</div>
                      </div>
                      <div className="bg-stone-50 dark:bg-stone-950/25 border border-stone-200 dark:border-stone-850/40 p-3 rounded-xl text-center">
                        <div className="text-lg font-mono font-bold text-accent">{stats.averageScore}/40</div>
                        <div className="text-[9px] text-stone-500 dark:text-stone-400">Điểm số TB</div>
                      </div>
                      <div className="bg-stone-50 dark:bg-stone-950/25 border border-stone-200 dark:border-stone-850/40 p-3 rounded-xl text-center">
                        <div className="text-lg font-mono font-bold text-accent">{stats.highestScore}/40</div>
                        <div className="text-[9px] text-stone-500 dark:text-stone-400">Điểm cao nhất</div>
                      </div>
                      <div className="bg-stone-50 dark:bg-stone-950/25 border border-stone-200 dark:border-stone-850/40 p-3 rounded-xl text-center col-span-2 sm:col-span-1">
                        <div className="text-lg font-mono font-bold text-accent">{stats.customCount}</div>
                        <div className="text-[9px] text-stone-500 dark:text-stone-400">Môn tự tạo thêm</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* SECURITY TAB */}
          {activeTab === "security" && currentUser !== "admin" && (() => {
            const val = getPasswordValidation(newPassword);
            const strengthScore = Object.values(val).filter(Boolean).length;
            
            return (
              <form onSubmit={handlePasswordChange} className="space-y-4 max-w-md">
                <div className="flex items-start gap-2.5 bg-yellow-500/5 border border-yellow-500/25 rounded-2xl p-4 text-xs text-yellow-600 dark:text-yellow-500/90 mb-2 leading-relaxed">
                  <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                  <span>Bạn nên thiết lập mật khẩu có độ bảo mật cao để bảo vệ thông tin tiến trình tự học và lịch sử điểm xếp hạng của mình.</span>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-stone-500 dark:text-stone-400 uppercase mb-1.5 tracking-wider">MẬT KHẨU HIỆN TẠI</label>
                  <div className="relative">
                    <input
                      type={showOldPassword ? "text" : "password"}
                      required
                      value={oldPassword}
                      onChange={(e) => setOldPassword(e.target.value)}
                      className="w-full pl-4 pr-10 py-2.5 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950/45 text-xs text-stone-900 dark:text-stone-100 placeholder-stone-400 dark:placeholder-stone-500 focus:outline-none focus:border-accent transition-colors"
                      placeholder="Nhập mật khẩu hiện tại"
                    />
                    <button
                      type="button"
                      onClick={() => setShowOldPassword(!showOldPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-450 dark:text-stone-500 hover:text-accent cursor-pointer"
                    >
                      {showOldPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-stone-500 dark:text-stone-400 uppercase mb-1.5 tracking-wider">MẬT KHẨU MỚI</label>
                  <div className="relative">
                    <input
                      type={showNewPassword ? "text" : "password"}
                      required
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="w-full pl-4 pr-10 py-2.5 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950/45 text-xs text-stone-900 dark:text-stone-100 placeholder-stone-400 dark:placeholder-stone-500 focus:outline-none focus:border-accent transition-colors"
                      placeholder="Nhập mật khẩu mới (ít nhất 8 ký tự)"
                    />
                    <button
                      type="button"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-455 dark:text-stone-500 hover:text-accent cursor-pointer"
                    >
                      {showNewPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                    </button>
                  </div>
                  
                  {/* Password Strength Indicator Bars & Checklist */}
                  <div className="space-y-3 mt-3">
                    {/* Progress Bars */}
                    <div className="grid grid-cols-4 gap-1.5">
                      <div className={`h-1 rounded-full transition-colors duration-300 ${
                        newPassword.length > 0 && strengthScore >= 1 
                          ? (strengthScore === 1 ? "bg-red-500" : strengthScore === 2 ? "bg-orange-500" : strengthScore === 3 ? "bg-yellow-500" : "bg-emerald-500") 
                          : "bg-slate-200 dark:bg-stone-800"
                      }`} />
                      <div className={`h-1 rounded-full transition-colors duration-300 ${
                        newPassword.length > 0 && strengthScore >= 2 
                          ? (strengthScore === 2 ? "bg-orange-500" : strengthScore === 3 ? "bg-yellow-500" : "bg-emerald-500") 
                          : "bg-slate-200 dark:bg-stone-800"
                      }`} />
                      <div className={`h-1 rounded-full transition-colors duration-300 ${
                        newPassword.length > 0 && strengthScore >= 3 
                          ? (strengthScore === 3 ? "bg-yellow-500" : "bg-emerald-500") 
                          : "bg-slate-200 dark:bg-stone-800"
                      }`} />
                      <div className={`h-1 rounded-full transition-colors duration-300 ${
                        newPassword.length > 0 && strengthScore >= 4 
                          ? "bg-emerald-500" 
                          : "bg-slate-200 dark:bg-stone-800"
                      }`} />
                    </div>

                    {/* Security checklist */}
                    <div className="space-y-2 text-xs font-semibold pl-1">
                      <div className="flex items-center gap-2.5">
                        <span className={`w-1.5 h-1.5 rounded-full transition-colors ${
                          newPassword.length > 0 && val.length ? "bg-emerald-500" : "bg-slate-400 dark:bg-stone-600"
                        }`} />
                        <span className={newPassword.length > 0 && val.length ? "text-emerald-600 dark:text-emerald-400" : "text-slate-500 dark:text-stone-400"}>
                          Ít nhất 8 ký tự
                        </span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <span className={`w-1.5 h-1.5 rounded-full transition-colors ${
                          newPassword.length > 0 && val.uppercase ? "bg-emerald-500" : "bg-slate-400 dark:bg-stone-600"
                        }`} />
                        <span className={newPassword.length > 0 && val.uppercase ? "text-emerald-600 dark:text-emerald-400" : "text-slate-500 dark:text-stone-400"}>
                          Ít nhất 1 chữ hoa
                        </span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <span className={`w-1.5 h-1.5 rounded-full transition-colors ${
                          newPassword.length > 0 && val.number ? "bg-emerald-500" : "bg-slate-400 dark:bg-stone-600"
                        }`} />
                        <span className={newPassword.length > 0 && val.number ? "text-emerald-600 dark:text-emerald-400" : "text-slate-500 dark:text-stone-400"}>
                          Ít nhất 1 chữ số
                        </span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <span className={`w-1.5 h-1.5 rounded-full transition-colors ${
                          newPassword.length > 0 && val.special ? "bg-emerald-500" : "bg-slate-400 dark:bg-stone-600"
                        }`} />
                        <span className={newPassword.length > 0 && val.special ? "text-emerald-600 dark:text-emerald-400" : "text-slate-500 dark:text-stone-400"}>
                          Ít nhất 1 ký tự đặc biệt (!@#...)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-stone-200 dark:border-stone-850 my-4" />

                <div>
                  <label className="block text-[10px] font-bold text-stone-500 dark:text-stone-400 uppercase mb-1.5 tracking-wider">XÁC NHẬN MẬT KHẨU MỚI</label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full pl-4 pr-10 py-2.5 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950/45 text-xs text-stone-900 dark:text-stone-100 placeholder-stone-400 dark:placeholder-stone-500 focus:outline-none focus:border-accent transition-colors"
                      placeholder="Nhập lại mật khẩu mới"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-450 dark:text-stone-500 hover:text-accent cursor-pointer"
                    >
                      {showConfirmPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-accent hover:bg-accent/90 text-white dark:text-stone-950 text-xs font-bold transition-all shadow-md cursor-pointer mt-4"
                >
                  Cập nhật mật khẩu
                </button>
              </form>
            );
          })()}


        </div>

      </div>
    </div>
  );
}
