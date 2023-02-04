// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0Iqwy_yAjv2ys-arpM2QM7sGYYel5lLw",
  authDomain: "house-marketplace-99cd9.firebaseapp.com",
  projectId: "house-marketplace-99cd9",
  storageBucket: "house-marketplace-99cd9.appspot.com",
  messagingSenderId: "514757773346",
  appId: "1:514757773346:web:b6cc9a2f42380f732d227b",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
