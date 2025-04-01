// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAo8YCXhmqa9nhoPVVyLxtaBBBr9YwdzQM",
  authDomain: "ai-interviewer-66f10.firebaseapp.com",
  projectId: "ai-interviewer-66f10",
  storageBucket: "ai-interviewer-66f10.firebasestorage.app",
  messagingSenderId: "1025369584903",
  appId: "1:1025369584903:web:bda257209f6c24209281a2",
  measurementId: "G-B6DLNK5N3Q"
};

// Initialize Firebase
const app =!getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);