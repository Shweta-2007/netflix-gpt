// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAW5GRdTB5JgpVomaGUkJN2qQUNNDfEtws",
  authDomain: "netflixgpt-69ad1.firebaseapp.com",
  projectId: "netflixgpt-69ad1",
  storageBucket: "netflixgpt-69ad1.appspot.com",
  messagingSenderId: "173885123056",
  appId: "1:173885123056:web:8324a4b684e680f4be1535",
  measurementId: "G-VT2V28XC03",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
