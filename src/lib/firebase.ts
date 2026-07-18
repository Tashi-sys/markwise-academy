import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ?? "AIzaSyC8KfiynwZTmfXfOrYLWas_McHZM3sHZXc",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ?? "markwise-database.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID ?? "markwise-database",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET ?? "markwise-database.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID ?? "806566272172",
  appId: import.meta.env.VITE_FIREBASE_APP_ID ?? "1:806566272172:web:2da857c14609b6e7401309",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID ?? "G-M35WR02BN5",
};

function getFirebaseApp(): FirebaseApp {
  return getApps()[0] ?? initializeApp(firebaseConfig);
}

export const firebaseApp = getFirebaseApp();
export const db = getFirestore(firebaseApp);
