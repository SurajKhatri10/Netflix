// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEU-Fh5uKnQEp9Hk5pBqUbQrh57Z6UrY8",
  authDomain: "netflixgpt-fb669.firebaseapp.com",
  projectId: "netflixgpt-fb669",
  storageBucket: "netflixgpt-fb669.appspot.com",
  messagingSenderId: "890433634542",
  appId: "1:890433634542:web:bf16d7a574ef337ebfb3ff",
  measurementId: "G-X4ZT90Y0HJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);