import React, {useState, useEffect} from 'react';
import Home from './components/auth/Home';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import PasswordReset from './components/auth/PasswordReset';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
 
function App() {
 
  return (
    <Router>
      <div>
        <section>                              
            <Routes>                                                                        
              <Route path="/" element={<Home/>}/>
               <Route path="/signup" element={<Signup/>}/>
               <Route path="/login" element={<Login/>}/>
               <Route path="/passwordreset" element={<PasswordReset/>}/>
            </Routes>                    
        </section>
      </div>
    </Router>
  );
}
 
export default App;