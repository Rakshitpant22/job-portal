// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDa-84A3NaHDSDf3deSJu06CUfQwjgBsSw",
  authDomain: "online-job-portal-a57db.firebaseapp.com",
  projectId: "online-job-portal-a57db",
  storageBucket: "online-job-portal-a57db.appspot.com",
  messagingSenderId: "474385921202",
  appId: "1:474385921202:web:d2f46e5b73f9839b4c85ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}