import { cookies } from "next/headers";
import { FieldValue } from "firebase-admin/firestore";
import { ApiError } from "./api-response.js";
import { getAdminAuth, getAdminDb } from "./firebase-admin.js";

export const SESSION_COOKIE_NAME = "studymaster_session";
const SHORT_SESSION_MS = 12 * 60 * 60 * 1000;
const LONG_SESSION_MS = 5 * 24 * 60 * 60 * 1000;

function publicUser(userRecord, profile = {}, token = {}) {
  const role = token.role || profile.role || (userRecord.uid === "admin" ? "admin" : "student");
  return {
    uid: userRecord.uid,
    email: userRecord.email || profile.email || null,
    displayName:
      userRecord.displayName || profile.displayName || userRecord.email || userRecord.uid,
    photoURL: userRecord.photoURL || profile.photoURL || null,
    role
  };
}

async function readProfile(uid) {
  const snapshot = await getAdminDb().collection("users").doc(uid).get();
  return snapshot.exists ? snapshot.data() : {};
}

export async function createVerifiedSession(idToken, rememberMe) {
  let decoded;
  try {
    decoded = await getAdminAuth().verifyIdToken(idToken, true);
  } catch {
    throw new ApiError(401, "INVALID_ID_TOKEN", "ID token không hợp lệ hoặc đã hết hạn.");
  }

  const userRecord = await getAdminAuth().getUser(decoded.uid);
  if (userRecord.disabled) {
    throw new ApiError(403, "ACCOUNT_DISABLED", "Tài khoản đã bị vô hiệu hóa.");
  }

  const profileRef = getAdminDb().collection("users").doc(userRecord.uid);
  const profileSnapshot = await profileRef.get();
  const currentProfile = profileSnapshot.exists ? profileSnapshot.data() : {};
  const role = decoded.role || currentProfile.role || (userRecord.uid === "admin" ? "admin" : "student");

  await profileRef.set(
    {
      uid: userRecord.uid,
      email: userRecord.email || null,
      displayName: userRecord.displayName || userRecord.email || userRecord.uid,
      photoURL: userRecord.photoURL || null,
      role,
      disabled: false,
      ...(profileSnapshot.exists ? {} : { createdAt: FieldValue.serverTimestamp() }),
      updatedAt: FieldValue.serverTimestamp()
    },
    { merge: true }
  );

  const expiresIn = rememberMe ? LONG_SESSION_MS : SHORT_SESSION_MS;
  const sessionCookie = await getAdminAuth().createSessionCookie(idToken, { expiresIn });
  return {
    sessionCookie,
    maxAgeSeconds: Math.floor(expiresIn / 1000),
    user: publicUser(userRecord, currentProfile, { ...decoded, role })
  };
}

export async function setSessionCookie(value, maxAgeSeconds) {
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE_NAME, value, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: maxAgeSeconds,
    priority: "high"
  });
}

export async function clearSessionCookie() {
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE_NAME, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0
  });
}

export async function requireSession(options = {}) {
  const { roles } = options;
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get(SESSION_COOKIE_NAME)?.value;
  if (!sessionCookie) {
    throw new ApiError(401, "UNAUTHENTICATED", "Bạn cần đăng nhập để tiếp tục.");
  }

  let decoded;
  try {
    decoded = await getAdminAuth().verifySessionCookie(sessionCookie, true);
  } catch {
    throw new ApiError(401, "UNAUTHENTICATED", "Phiên đăng nhập không hợp lệ hoặc đã hết hạn.");
  }

  const userRecord = await getAdminAuth().getUser(decoded.uid);
  const profile = await readProfile(decoded.uid);
  if (userRecord.disabled || profile.disabled === true) {
    throw new ApiError(403, "ACCOUNT_DISABLED", "Tài khoản đã bị vô hiệu hóa.");
  }

  const user = publicUser(userRecord, profile, decoded);
  if (roles && !roles.includes(user.role)) {
    throw new ApiError(403, "FORBIDDEN", "Bạn không có quyền thực hiện thao tác này.");
  }
  return user;
}

export async function createAdminCustomToken(username, password) {
  const expectedUsername = process.env.ADMIN_USERNAME;
  const expectedPassword = process.env.ADMIN_PASSWORD;
  if (!expectedUsername || !expectedPassword) {
    throw new ApiError(500, "INTERNAL_ERROR", "Chưa cấu hình tài khoản quản trị phía server.");
  }

  if (username !== expectedUsername || password !== expectedPassword) {
    throw new ApiError(401, "INVALID_CREDENTIALS", "Tên đăng nhập hoặc mật khẩu không đúng.");
  }

  let adminUser;
  let createdAuthUser = false;
  try {
    adminUser = await getAdminAuth().getUser("admin");
  } catch (error) {
    if (error?.code !== "auth/user-not-found") throw error;
    adminUser = await getAdminAuth().createUser({
      uid: "admin",
      displayName: "Administrator",
      disabled: false
    });
    createdAuthUser = true;
  }

  if (adminUser.disabled) {
    throw new ApiError(403, "ACCOUNT_DISABLED", "Tài khoản đã bị vô hiệu hóa.");
  }

  await getAdminAuth().setCustomUserClaims(adminUser.uid, { role: "admin" });
  const adminProfileRef = getAdminDb().collection("users").doc(adminUser.uid);
  const adminProfile = await adminProfileRef.get();
  await adminProfileRef.set(
    {
      uid: adminUser.uid,
      email: adminUser.email || null,
      displayName: adminUser.displayName || "Administrator",
      photoURL: adminUser.photoURL || null,
      role: "admin",
      disabled: false,
      ...(!adminProfile.exists || createdAuthUser
        ? { createdAt: FieldValue.serverTimestamp() }
        : {}),
      updatedAt: FieldValue.serverTimestamp()
    },
    { merge: true }
  );

  return getAdminAuth().createCustomToken(adminUser.uid, { role: "admin" });
}
