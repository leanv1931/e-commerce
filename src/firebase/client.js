// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3N_pUvn_KxZlIjz-ktVnx0ZhXnjiJw3M",
  authDomain: "infinita-e-commerce.firebaseapp.com",
  projectId: "infinita-e-commerce",
  storageBucket: "infinita-e-commerce.appspot.com",
  messagingSenderId: "165801782704",
  appId: "1:165801782704:web:68c137837124990cf6ba75",
  measurementId: "G-ZDFCPVNBW9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
