import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard.js';
import Products from './pages/Products.js';
import Customers from './pages/Customers.js';
import Messages from './pages/Messages.js';
import AuditLogs from './pages/AuditLogs.js';
import UserMgt from './pages/UserMgt.js';
import Profile from './pages/Profile.js';

const Sidebar = () => {
    return (
        <Router>
      <div>
        <section>                              
            <Routes>                                                                        
              <Route path="/" element={<Dashboard/>}/>
               <Route path="/dashboard" element={<Dashboard/>}/>
               <Route path="/products" element={<Products/>}/>
               <Route path="/customers" element={<Customers/>}/>
               <Route path="/messages" element={<Messages/>}/>
               <Route path="/audit-logs" element={<AuditLogs/>}/>
               <Route path="/user-management" element={<UserMgt/>}/>
               <Route path="/profile" element={<Profile/>}/>

            </Routes>                    
        </section>
      </div>
    </Router>
    );
};

export default Sidebar;