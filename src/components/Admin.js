import React, { useState } from 'react';
import Sidebar from './Sidebar';
import DashboardContent from './DashboardContent';

const Admin = () => {
  const [activeMenu, setActiveMenu] = useState('dashboard');

  const menus = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'products', label: 'Products' },
    { id: 'customers', label: 'Customers' },
    { id: 'messages', label: 'Messages' }, // Add Messages menu
    { id: 'audit-logs', label: 'Audit Logs' }, // Add Audit Logs menu
    { id: 'user-management', label: 'User Management' }, // Add User Management menu
  ];

  const handleMenuClick = (menuId) => {
    setActiveMenu(menuId);
  };

  return (
    <div className="admin">
      <div className="sidebar-container">
        <Sidebar menus={menus} activeMenu={activeMenu} onMenuClick={handleMenuClick} />
      </div>
      <div className="content-container">
        <DashboardContent selectedMenu={activeMenu} />
      </div>
      <style>
        {`
          .admin {
            display: flex;
            height: 100vh;
            background-color: #f0f0f0;
            overflow: hidden;
            
          }
          .sidebar-container {
            flex: 1;
            background-color: #f0f0f0;
            padding: 20px;
            width: 251px;
            height: 100vh;
            
          }
          .content-container {
            display: flex;
            flex: 6;
            background-color: #ffffff;
            height: 100vh;
            z-index: 0;
            padding: 0;
            margin-top: 80px;
            border-radius: 7px 0 0 7px;
           
            
          }
        `}
      </style>
    </div>
  );
};

export default Admin;
