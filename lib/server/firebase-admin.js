import { applicationDefault, cert, getApps, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import { ApiError } from "./api-response.js";

function normalizePrivateKey(value) {
  return value?.replace(/\\n/g, "\n");
}

function getCredential() {
  const encoded = process.env.FIREBASE_ADMIN_SERVICE_ACCOUNT_BASE64;
  if (encoded) {
    try {
      const serviceAccount = JSON.parse(
        Buffer.from(encoded, "base64").toString("utf8")
      );
      return cert(serviceAccount);
    } catch {
      throw new ApiError(
        500,
        "INTERNAL_ERROR",
        "Cấu hình Firebase Admin không hợp lệ."
      );
    }
  }

  const projectId = process.env.FIREBASE_ADMIN_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_ADMIN_CLIENT_EMAIL;
  const privateKey = normalizePrivateKey(process.env.FIREBASE_ADMIN_PRIVATE_KEY);
  if (projectId && clientEmail && privateKey) {
    return cert({ projectId, clientEmail, privateKey });
  }

  return applicationDefault();
}

export function getAdminApp() {
  if (getApps().length > 0) return getApps()[0];

  return initializeApp({
    credential: getCredential(),
    projectId:
      process.env.FIREBASE_ADMIN_PROJECT_ID ||
      process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
  });
}

export function getAdminAuth() {
  return getAuth(getAdminApp());
}

export function getAdminDb() {
  return getFirestore(getAdminApp());
}
