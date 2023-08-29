import React, {useState, useEffect} from 'react';
import Home from './components/auth/Home';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import PasswordReset from './components/auth/PasswordReset';
import Admin from './components/Admin';
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
               <Route path="/password-reset" element={<PasswordReset/>}/>
               <Route path= "/admin" element={<Admin/>}/>
            </Routes>                    
        </section>
      </div>
    </Router>
  );
}
 
export default App;