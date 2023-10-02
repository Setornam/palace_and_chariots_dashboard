import React, { useState, useEffect } from 'react';
import SplashScreen from './components/auth/SplashScreen';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import PasswordReset from './components/auth/PasswordReset';
import Admin from './components/Admin';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './components/auth/firebase';
import './App.css';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds

    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  // A custom function to check if the user is authenticated
  const isAuthenticated = () => !!user;

  return (
    <Router>
      <Routes>
        <Route path="/" element={loading ? <SplashScreen /> : <Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/password-reset" element={<PasswordReset />} />
        <Route path="*" element={<div>Page Not Found</div>} />

        {/* Protected route */}
        <Route
          path="/admin"
          element={isAuthenticated() ? <Admin /> : <Navigate to="/" />}
        />
        
        
      </Routes>
    </Router>
  );
};

export default App;
