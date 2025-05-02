import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, setPersistence, browserLocalPersistence  } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';



// TODO: Replace the following with your app's Firebase project configuration
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4GajlwdXz8wSQSIuf1dyEU4FWH9T9d6E",
  authDomain: "lucky-s-project.firebaseapp.com",
  projectId: "lucky-s-project",
  storageBucket: "lucky-s-project.firebasestorage.app",
  messagingSenderId: "781506805291",
  appId: "1:781506805291:web:f5ca03213bb6f6fe27b46e",
  measurementId: "G-F77KB0TS35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);


// Enable local persistence
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    // Local persistence successfully enabled
  })
  .catch((error) => {
    // Handle errors if persistence cannot be enabled
    console.error('Error enabling local persistence:', error);
  });

export { app, auth, db, analytics, storage };

export default app;
