// utils/firebase.ts
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwVWSiYsqeD8Yk5W6udkeoY3A5bpefM1g",
  authDomain: "shijisan-dev.firebaseapp.com",
  projectId: "shijisan-dev",
  storageBucket: "shijisan-dev.firebasestorage.app",
  messagingSenderId: "399511094686",
  appId: "1:399511094686:web:afafde20aaba31bb70828f"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export default app;