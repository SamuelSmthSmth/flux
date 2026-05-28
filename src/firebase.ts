import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAM58uUFpGGwtVhjesSXMP-kLJSsqcL084",
  authDomain: "misty-6c232.firebaseapp.com",
  projectId: "misty-6c232",
  storageBucket: "misty-6c232.firebasestorage.app",
  messagingSenderId: "107010855914",
  appId: "1:107010855914:web:00c6104b47e23006ec1563"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);