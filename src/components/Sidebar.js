import React from 'react';
import {  FiShoppingBag, FiUsers, FiUser, FiMessageSquare, FiLogOut, FiClipboard } from 'react-icons/fi';
import { RiDashboardLine } from 'react-icons/ri';
import { HiOutlineChartBar } from 'react-icons/hi';
import { CgProfile } from 'react-icons/cg';
import logoImage from './Images/logo.png'; 
import { signOut } from '@firebase/auth';
import { auth } from './auth/firebase';


const handleLogout = async () => {
  try {
    await signOut(auth);
    // Redirect or perform any additional logic after successful logout
  } catch (error) {
    console.error('Error signing out:', error);
  }
};



const Sidebar = ({ menus, activeMenu, onMenuClick }) => {
  const iconMap = {
    dashboard: <RiDashboardLine />,
    requests: <FiClipboard />,
    products: <FiShoppingBag />,
    customers: <FiUsers />,
    messages: <FiMessageSquare />,
    'audit-logs': <HiOutlineChartBar />,
    'user-management': <FiUser />,
    profile: <CgProfile />, 
    logout: <FiLogOut />, 
  };

  const additionalMenus = [
    {
      id: 'profile',
      label: 'Profile',
    },
    
  ];

  

  return (
    <div className="sidebar" style={sidebarStyles}>
     
        <div className="logo-container">
            <img src={logoImage} alt="Logo" className="logo-image" />
        </div>
      <ul className="menu-list">
        {menus.map((menu) => (
          <li
            key={menu.id}
            className={activeMenu === menu.id ? 'active' : ''}
            onClick={() => onMenuClick(menu.id)}
          >
            <div className={`menu-item ${activeMenu === menu.id ? 'active-menu' : ''}`} onClick={() => onMenuClick(menu.id)} style={menuItemStyles}>
              <span className="menu-icon">{iconMap[menu.id]}</span>
              <span className="menu-label" style={menuLabelStyles}>{menu.label}</span>
            </div>
          </li>
        ))}
      </ul>
      <div className="menu-separator"></div> {/* Add a separator */}

      {/* Additional Menu */}
      <div className="additional-menu">
        <ul className="menu-list">
          {additionalMenus.map((menu) => (
            <li
              key={menu.id}
              className={activeMenu === menu.id ? 'active' : ''}
              onClick={() => onMenuClick(menu.id)}
            >
              <div className={`menu-item ${activeMenu === menu.id ? 'active-menu' : ''}`} onClick={() => onMenuClick(menu.id)} style={menuItemStyles}>
                <span className="menu-icon">{iconMap[menu.id]}</span>
                <span className="menu-label" style={menuLabelStyles}>{menu.label}</span>
              </div>
            </li>
          ))}
          <span className= 'logout-button'><FiLogOut className= 'logout-icon' /><li onClick={handleLogout}>Logout</li></span>
        </ul>
      </div>

      <style>
        {`
          .sidebar {
            padding-top: 50px;
            padding-left: 0px;
            width: 251px;
            height: 100vh;
            background-color: #0B41AA;
            position: fixed;
            left: 0;
            top: 0;
            bottom: 0;
            z-index: 100;
            
          }
          .menu-list {
            list-style: none;
            display: flex;
            flex-direction: column;
            align-items: flex-start; /* Left-align the menu items */
          }
          .menu-item {
            display: flex;
            align-items: center;
            padding: 0 0 40px 20px;
            font-size: 1rem;
            font-weight: 400;
            cursor: pointer;
          }

          .logout-button {
              display: flex; 
              color: white;
              cursor: pointer;
              padding: 0 0 40px 20px;

            }
            .logout-button li{
              font-size: 1rem;
              font-weight: 400;
            }

            .logout-icon {
              margin-right: 10px;
              font-size:20px;
            }


          .active-menu {
            font-weight: 600; /* Apply bold font weight to the active menu item */
          }
          .active {
            font-weight: 700; /* Change font weight of active menu items */
          }
          .menu-icon {
            margin-right: 10px;
            width: 20px;
            height: 20px;
            font-size: 1.43rem;
        
          }
          .additional-menu {
            margin-top: 0px;
          }


          .menu-separator {
            width: 200px;
            height: 0;
            border: 0.5px #ECF0F4 solid; /* Add border between menus */
            margin: 100px 0 0 0;
            margin: 100px auto 0 auto; 
            }

            .logo-container {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 20px;
            padding-top: 0;
            }

            .logo-image {
            width: 138px; /* Set the width of the logo */
            height: auto; /* Maintain aspect ratio */
            }

           
            
        `}
      </style>
    </div>
  );
};

const sidebarStyles = {
  // Sidebar styles
};

const menuItemStyles = {
  color: 'white',
  fontSize: '1rem',
  fontFamily: 'Arial, sans-serif',
  wordWrap: 'break-word',
};

const menuLabelStyles = {
  // Additional styles for the menu label
};

export default Sidebar;
