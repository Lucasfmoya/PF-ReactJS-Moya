// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlTsTOCaZYMBxAFZ-TSW98WMST9LUNt5M",
  authDomain: "react-shop-60af3.firebaseapp.com",
  projectId: "react-shop-60af3",
  storageBucket: "react-shop-60af3.appspot.com",
  messagingSenderId: "598698920793",
  appId: "1:598698920793:web:ce38d643874cc5dee91a48",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
