// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyB4369qoZNBRl4eUqNjMHirLFCZu0eLEBg",
  authDomain: "fbproject-8149f.firebaseapp.com",
  databaseURL: "https://fbproject-8149f-default-rtdb.firebaseio.com",
  projectId: "fbproject-8149f",
  storageBucket: "fbproject-8149f.appspot.com",
  messagingSenderId: "410876740715",
  appId: "1:410876740715:web:ce78cdf1677fb2e7da1d2e",
  measurementId: "G-K5L9JNXDCQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const author=getAuth(app)
export const db=getDatabase(app)