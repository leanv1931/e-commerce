// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
/* import { getAnalytics } from "firebase/analytics"; */
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyApCOa0z-KQTJVj8DOYRX9WHIWON3d8g_w",
  authDomain: "infinita2.firebaseapp.com",
  projectId: "infinita2",
  storageBucket: "infinita2.appspot.com",
  messagingSenderId: "405968010079",
  appId: "1:405968010079:web:a0c5672c97486bdca494ea",
  measurementId: "G-TW6MC8XKCX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
