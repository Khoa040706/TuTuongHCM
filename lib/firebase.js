import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAihe2T4ukk4_hBRTpYGpLEgTbTc_miijg",
  authDomain: "studymaster-tutuonghcm.firebaseapp.com",
  projectId: "studymaster-tutuonghcm",
  storageBucket: "studymaster-tutuonghcm.firebasestorage.app",
  messagingSenderId: "334192949142",
  appId: "1:334192949142:web:5d58aa86834f57ff828fb7",
  measurementId: "G-XFSRJ4H63N"
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
