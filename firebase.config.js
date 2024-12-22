// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0-DqTnTCvEhLpog99ohEedQy_tLGd4uE",
  authDomain: "smartpick-01.firebaseapp.com",
  projectId: "smartpick-01",
  storageBucket: "smartpick-01.firebasestorage.app",
  messagingSenderId: "869982896603",
  appId: "1:869982896603:web:5f5ab8248d368545a1e7fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);