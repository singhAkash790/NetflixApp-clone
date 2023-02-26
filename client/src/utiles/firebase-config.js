// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyDv6D3iEpuOuafJLwV-2paR3Zo5jkgth1Y",
  authDomain: "stremzee.firebaseapp.com",
  projectId: "stremzee",
  storageBucket: "stremzee.appspot.com",
  messagingSenderId: "29630535509",
  appId: "1:29630535509:web:733a6e8270c573cf9441dc",
  measurementId: "G-Z31LGET94D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app); 