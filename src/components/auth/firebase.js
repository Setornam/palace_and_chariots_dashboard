import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, setPersistence, browserLocalPersistence  } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


// TODO: Replace the following with your app's Firebase project configuration
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdE_Rr0Ihbum_SjgJ-Zmc0vyeLv4rJkx0",
  authDomain: "palace-and-chariots-5e051.firebaseapp.com",
  projectId: "palace-and-chariots-5e051",
  storageBucket: "palace-and-chariots-5e051.appspot.com",
  messagingSenderId: "322047129867",
  appId: "1:322047129867:web:b4878715adf515a7ee8a0e",
  measurementId: "G-9GX0XHLZ87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

// Enable local persistence
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    // Local persistence successfully enabled
  })
  .catch((error) => {
    // Handle errors if persistence cannot be enabled
    console.error('Error enabling local persistence:', error);
  });

export { app, auth, db, analytics };

export default app;
