"use client";
import React from "react";
import { X, UserPlus, KeyRound, User, Mail, Lock } from "lucide-react";

export function AdminAddUserModal({
  isOpen,
  onClose,
  newUser,
  setNewUser,
  newEmail,
  setNewEmail,
  newPass,
  setNewPass,
  newConfirmPass,
  setNewConfirmPass,
  onSubmit
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#38150E]/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-white border border-[#E8DACB] rounded-3xl p-6 sm:p-7 shadow-2xl space-y-5 text-left">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-[#F4EBE0] pb-3.5">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#FAF5EE] border border-[#E8DACB] flex items-center justify-center text-[#D85A38]">
              <UserPlus size={16} />
            </div>
            <h3 className="font-extrabold text-sm sm:text-base text-[#38150E] uppercase tracking-wider">
              Thêm Học Viên Mới
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-[#8C7A70] hover:text-[#38150E] p-1 rounded-lg hover:bg-[#FAF5EE] transition-colors cursor-pointer border-none bg-transparent"
          >
            <X size={18} />
          </button>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-[11px] font-extrabold text-[#6E5D53] uppercase tracking-wider mb-1.5">
              Tên đăng nhập
            </label>
            <div className="relative">
              <User size={15} className="absolute left-3.5 top-3 text-[#8C7A70]" />
              <input
                type="text"
                required
                placeholder="Ví dụ: hocsinh2..."
                value={newUser}
                onChange={(e) => setNewUser(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-[#E8DACB] bg-[#FAF8F5] text-[#38150E] placeholder:text-[#A6988F] focus:outline-none focus:border-[#D85A38] focus:bg-white transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-extrabold text-[#6E5D53] uppercase tracking-wider mb-1.5">
              Địa chỉ Email
            </label>
            <div className="relative">
              <Mail size={15} className="absolute left-3.5 top-3 text-[#8C7A70]" />
              <input
                type="email"
                required
                placeholder="hocsinh2@gmail.com"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-[#E8DACB] bg-[#FAF8F5] text-[#38150E] placeholder:text-[#A6988F] focus:outline-none focus:border-[#D85A38] focus:bg-white transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-extrabold text-[#6E5D53] uppercase tracking-wider mb-1.5">
                Mật khẩu
              </label>
              <div className="relative">
                <Lock size={15} className="absolute left-3.5 top-3 text-[#8C7A70]" />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={newPass}
                  onChange={(e) => setNewPass(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-[#E8DACB] bg-[#FAF8F5] text-[#38150E] placeholder:text-[#A6988F] focus:outline-none focus:border-[#D85A38] focus:bg-white transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-extrabold text-[#6E5D53] uppercase tracking-wider mb-1.5">
                Nhập lại mật khẩu
              </label>
              <div className="relative">
                <Lock size={15} className="absolute left-3.5 top-3 text-[#8C7A70]" />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={newConfirmPass}
                  onChange={(e) => setNewConfirmPass(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-[#E8DACB] bg-[#FAF8F5] text-[#38150E] placeholder:text-[#A6988F] focus:outline-none focus:border-[#D85A38] focus:bg-white transition-colors"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 rounded-xl border border-[#E8DACB] hover:bg-[#FAF5EE] text-[#6E5D53] font-bold text-xs transition-colors cursor-pointer text-center bg-transparent"
            >
              Hủy bỏ
            </button>
            <button
              type="submit"
              className="flex-1 py-2.5 rounded-xl bg-[#D85A38] hover:bg-[#C44C2C] text-white font-bold text-xs transition-all shadow-xs shadow-[#D85A38]/30 cursor-pointer border-none"
            >
              Tạo học viên
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export function AdminChangePasswordModal({
  isOpen,
  onClose,
  targetUser,
  newPass,
  setNewPass,
  confirmPass,
  setConfirmPass,
  onSubmit
}) {
  if (!isOpen || !targetUser) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#38150E]/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-white border border-[#E8DACB] rounded-3xl p-6 sm:p-7 shadow-2xl space-y-5 text-left">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-[#F4EBE0] pb-3.5">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#FAF5EE] border border-[#E8DACB] flex items-center justify-center text-[#D48B38]">
              <KeyRound size={16} />
            </div>
            <h3 className="font-extrabold text-sm sm:text-base text-[#38150E] uppercase tracking-wider">
              Đặt Lại Mật Khẩu
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-[#8C7A70] hover:text-[#38150E] p-1 rounded-lg hover:bg-[#FAF5EE] transition-colors cursor-pointer border-none bg-transparent"
          >
            <X size={18} />
          </button>
        </div>

        <p className="text-xs text-[#6E5D53]">
          Thiết lập mật khẩu đăng nhập mới cho học viên{" "}
          <strong className="text-[#38150E] font-bold">{targetUser.username}</strong>.
        </p>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-[11px] font-extrabold text-[#6E5D53] uppercase tracking-wider mb-1.5">
              Mật khẩu mới
            </label>
            <div className="relative">
              <Lock size={15} className="absolute left-3.5 top-3 text-[#8C7A70]" />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={newPass}
                onChange={(e) => setNewPass(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-[#E8DACB] bg-[#FAF8F5] text-[#38150E] placeholder:text-[#A6988F] focus:outline-none focus:border-[#D85A38] focus:bg-white transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-extrabold text-[#6E5D53] uppercase tracking-wider mb-1.5">
              Xác nhận mật khẩu
            </label>
            <div className="relative">
              <Lock size={15} className="absolute left-3.5 top-3 text-[#8C7A70]" />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={confirmPass}
                onChange={(e) => setConfirmPass(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-[#E8DACB] bg-[#FAF8F5] text-[#38150E] placeholder:text-[#A6988F] focus:outline-none focus:border-[#D85A38] focus:bg-white transition-colors"
              />
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 rounded-xl border border-[#E8DACB] hover:bg-[#FAF5EE] text-[#6E5D53] font-bold text-xs transition-colors cursor-pointer text-center bg-transparent"
            >
              Hủy bỏ
            </button>
            <button
              type="submit"
              className="flex-1 py-2.5 rounded-xl bg-[#38150E] hover:bg-[#2D120B] text-[#FAF8F5] font-bold text-xs transition-all shadow-xs cursor-pointer border-none"
            >
              Lưu mật khẩu
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
