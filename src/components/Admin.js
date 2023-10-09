import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import DashboardContent from './DashboardContent';
import { collection, doc, getDoc, query, where} from 'firebase/firestore';
import { db, auth } from './auth/firebase';
import 'firebase/firestore'

const Admin = () => {
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [accessRole, setAccessRole] = useState([]);

  // Define different menus based on the user's access role
  const standardMenu = [
    { id: 'requests', label: 'Request' },
    { id: 'messages', label: 'Messages' },
  ];

  const systemAdminMenu = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'products', label: 'Products' },
    { id: 'customers', label: 'Customers' },
    { id: 'messages', label: 'Messages' },
    { id: 'audit-logs', label: 'Audit Logs' },
    { id: 'user-management', label: 'User Management' },
  ];

  // Determine which menu to use based on the user's access role
  let menus;

  if (accessRole === 'System Admin') {
    menus = standardMenu;
  } else {
    menus =  systemAdminMenu;
  }
  const handleMenuClick = (menuId) => {
    setActiveMenu(menuId);
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Successfully obtained the location
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
          
          // You can now use the latitude and longitude for your purposes
        },
        (error) => {
          // Handle errors
          switch (error.code) {
            case error.PERMISSION_DENIED:
              console.log("User denied the request for geolocation.");
              break;
            case error.POSITION_UNAVAILABLE:
              console.log("Location information is unavailable.");
              break;
            case error.TIMEOUT:
              console.log("The request to get user location timed out.");
              break;
            case error.UNKNOWN_ERROR:
              console.log("An unknown error occurred.");
              break;
            default:
              console.log("An error occurred.");
          }
        }
      );
    } else {
      // Geolocation is not available in this browser
      console.log("Geolocation is not supported in this browser.");
    }
  }, []);
  


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
            flex: 4.8;
            background-color: #ECF0F4;
            height: 100vh;
            z-index: 0;
            padding: 0;
            margin-top: 80px;
           
            
          }
        `}
      </style>
    </div>
  );
};

export default Admin;
