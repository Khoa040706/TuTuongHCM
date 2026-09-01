"use client";
import { useState, useEffect, useCallback } from "react";
import { authApi } from "../lib/client/api";

export function useAuthSession() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check existing session
  const checkSession = useCallback(async () => {
    try {
      setLoading(true);
      const res = await authApi.getSession();
      if (res.ok && res.data?.user) {
        setUser(res.data.user);
      } else {
        setUser(null);
      }
    } catch (err) {
      console.warn("Session check error:", err);
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    checkSession();
  }, [checkSession]);

  // Login with admin credentials
  const loginAdmin = async (username, password) => {
    try {
      setLoading(true);
      setError(null);
      const tokenRes = await authApi.getAdminToken(username, password);
      if (!tokenRes.ok) {
        setError(tokenRes.error?.message || "Đăng nhập quản trị viên thất bại");
        return { success: false, message: tokenRes.error?.message };
      }

      const sessionRes = await authApi.createSession(tokenRes.data.customToken, true);
      if (sessionRes.ok && sessionRes.data?.user) {
        setUser(sessionRes.data.user);
        return { success: true, user: sessionRes.data.user };
      }
      return { success: false, message: sessionRes.error?.message };
    } catch (err) {
      setError("Lỗi máy chủ khi xác thực");
      return { success: false, message: err.message };
    } finally {
      setLoading(false);
    }
  };

  // Login as student / user override
  const loginUser = async (userPayload) => {
    try {
      setLoading(true);
      setError(null);
      const sessionRes = await authApi.createSession("mock_student_id_token", true, userPayload);
      if (sessionRes.ok && sessionRes.data?.user) {
        setUser(sessionRes.data.user);
        return { success: true, user: sessionRes.data.user };
      }
      return { success: false, message: sessionRes.error?.message };
    } catch (err) {
      setError("Lỗi xác thực người dùng");
      return { success: false, message: err.message };
    } finally {
      setLoading(false);
    }
  };

  // Logout
  const logout = async () => {
    try {
      setLoading(true);
      await authApi.logout();
      setUser(null);
    } catch (err) {
      console.warn("Logout error:", err);
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    loading,
    error,
    loginAdmin,
    loginUser,
    logout,
    refreshSession: checkSession
  };
}
