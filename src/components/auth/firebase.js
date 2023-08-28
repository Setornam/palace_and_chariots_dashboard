import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getAuth }from "firebase/auth";


// TODO: Replace the following with your app's Firebase project configuration
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiX_U03LkomvDEN6rFcHcH-qjrX6H5n38",
  authDomain: "palace-and-chariots.firebaseapp.com",
  projectId: "palace-and-chariots",
  storageBucket: "palace-and-chariots.appspot.com",
  messagingSenderId: "643251618456",
  appId: "1:643251618456:web:aa452e4f4cf204ece106ed",
  measurementId: "G-KY4LZQ6Y5K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app); 
export const auth = getAuth(app);

export default app;
