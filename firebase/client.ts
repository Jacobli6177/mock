// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtv7KWEohYJWAP-H-09kEQKS7OpsoWT0E",
  authDomain: "prepwise-65a55.firebaseapp.com",
  projectId: "prepwise-65a55",
  storageBucket: "prepwise-65a55.firebasestorage.app",
  messagingSenderId: "127381831306",
  appId: "1:127381831306:web:64bb006bdcfa88f518b773",
  measurementId: "G-P5KJZ55DNV"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) :getApp();

export const auth = getAuth(app)
export const db = getFirestore(app)