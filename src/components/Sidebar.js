import React from 'react';
import {  FiShoppingBag, FiUsers, FiUser, FiMessageSquare, FiLogOut} from 'react-icons/fi';
import { RiDashboardLine } from 'react-icons/ri';
import { HiOutlineChartBar } from 'react-icons/hi';
import { CgProfile } from 'react-icons/cg';
import logoImage from '../images/logo.png'; // Import the logo image






const Sidebar = ({ menus, activeMenu, onMenuClick }) => {
  const iconMap = {
    dashboard: <RiDashboardLine />,
    products: <FiShoppingBag />,
    customers: <FiUsers />,
    messages: <FiMessageSquare />,
    'audit-logs': <HiOutlineChartBar />,
    'user-management': <FiUser />,
    profile: <CgProfile />, // Icon for the Profile menu item
    logout: <FiLogOut />, // Icon for the Logout menu item
  };

  const additionalMenus = [
    {
      id: 'profile',
      label: 'Profile',
    },
    {
      id: 'logout',
      label: 'Logout',
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
            
          }
          .menu-list {
            list-style: none;
            padding-top: 20px;
            display: flex;
            flex-direction: column;
            align-items: flex-start; /* Left-align the menu items */
          }
          .menu-item {
            display: flex;
            align-items: center;
            padding: 0 0 40px 20px;
            font-size: 14px;
            font-weight: 400;
            cursor: pointer;
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
            font-size: 20px;
        
          }
          .additional-menu {
            margin-top: 0px;
          }


          .menu-separator {
            width: 200px;
            height: 0;
            border: 0.5px #ECF0F4 solid; /* Add border between menus */
            margin: 200px 0 0 0;
            margin: 200px auto 0 auto; 
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
  fontSize: 14,
  fontFamily: 'Arial, sans-serif',
  wordWrap: 'break-word',
};

const menuLabelStyles = {
  // Additional styles for the menu label
};

export default Sidebar;
