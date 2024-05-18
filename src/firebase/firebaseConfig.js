// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhyltXmLA9GrhO9mOHCstekTcj8tHJStw",
  authDomain: "alok-a4db3.firebaseapp.com",
  projectId: "alok-a4db3",
  storageBucket: "alok-a4db3.appspot.com",
  messagingSenderId: "316465935154",
  appId: "1:316465935154:web:d4481d7d8b8bfa446c9d2b",
  measurementId: "G-6LFSQ4XT2G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
