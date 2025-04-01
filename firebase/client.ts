// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase-admin/firestore";
import { getAuth } from "firebase-admin/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBczmE1crChFOJQfkw58bq_6kbJT9QlYhI",
  authDomain: "ai-interviewer-e8a88.firebaseapp.com",
  projectId: "ai-interviewer-e8a88",
  storageBucket: "ai-interviewer-e8a88.firebasestorage.app",
  messagingSenderId: "518924435284",
  appId: "1:518924435284:web:290ef3ffc36a5d192a92c1",
  measurementId: "G-9ZTCW975TJ"
};

// Initialize Firebase
const app =!getApps.length ? initializeApp(firebaseConfig) : getApp();
const analytics = getAnalytics(app);

export const auth=getAuth(app);
export const db=getFirestore(app);