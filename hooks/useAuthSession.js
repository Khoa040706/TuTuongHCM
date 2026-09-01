/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import { useState, useEffect, useCallback } from "react";
import { auth } from "../lib/firebase";
import {
  signInWithCustomToken,
  signInWithPopup,
  GoogleAuthProvider,
  signOut
} from "firebase/auth";
import { authApi } from "../lib/client/api";

export function useAuthSession() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check existing session via HTTP cookie
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

  // Login with admin credentials (AUTH-01 -> signInWithCustomToken -> getIdToken -> AUTH-02)
  const loginAdmin = async (username, password, rememberMe = true) => {
    try {
      setLoading(true);
      setError(null);
      const tokenRes = await authApi.getAdminToken(username, password);
      if (!tokenRes.ok) {
        const msg = tokenRes.error?.message || "Đăng nhập quản trị viên thất bại";
        setError(msg);
        return { success: false, message: msg };
      }

      // Exchange custom token via Firebase Auth Client
      const userCred = await signInWithCustomToken(auth, tokenRes.data.customToken);
      const idToken = await userCred.user.getIdToken(true);

      // Create verified server session cookie
      const sessionRes = await authApi.createSession(idToken, rememberMe);
      if (sessionRes.ok && sessionRes.data?.user) {
        setUser(sessionRes.data.user);
        return { success: true, user: sessionRes.data.user };
      }

      const msg = sessionRes.error?.message || "Không thể tạo phiên làm việc trên máy chủ";
      setError(msg);
      return { success: false, message: msg };
    } catch (err) {
      const msg = err.message || "Lỗi máy chủ khi xác thực";
      setError(msg);
      return { success: false, message: msg };
    } finally {
      setLoading(false);
    }
  };

  // Login with Google Popup (Firebase Auth Popup -> getIdToken -> AUTH-02)
  const loginWithGoogle = async (rememberMe = true) => {
    try {
      setLoading(true);
      setError(null);
      const provider = new GoogleAuthProvider();
      const userCred = await signInWithPopup(auth, provider);
      const idToken = await userCred.user.getIdToken(true);

      const sessionRes = await authApi.createSession(idToken, rememberMe);
      if (sessionRes.ok && sessionRes.data?.user) {
        setUser(sessionRes.data.user);
        return { success: true, user: sessionRes.data.user };
      }

      const msg = sessionRes.error?.message || "Không thể thiết lập phiên đăng nhập";
      setError(msg);
      return { success: false, message: msg };
    } catch (err) {
      if (err.code !== "auth/popup-closed-by-user") {
        const msg = err.message || "Lỗi đăng nhập Google";
        setError(msg);
        return { success: false, message: msg };
      }
      return { success: false, cancelled: true };
    } finally {
      setLoading(false);
    }
  };

  // Logout (AUTH-04 + Firebase signOut)
  const logout = async () => {
    try {
      setLoading(true);
      await Promise.allSettled([authApi.logout(), signOut(auth)]);
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
    loginWithGoogle,
    logout,
    refreshSession: checkSession
  };
}
