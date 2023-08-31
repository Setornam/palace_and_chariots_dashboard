import React from 'react';
import Profile from './pages/Profile';
import Customers from './pages/Customers';

const DashboardContent = ({ selectedMenu }) => {
  let content;

  switch (selectedMenu) {
    case 'dashboard':
      content = <div>Dashboard Content</div>;
      break;
    case 'products':
      content = <div>Products Content</div>;
      break;
    case 'customers':
      content = <Customers />;
      break;
    case 'messages':
      content = <div>Messages Content</div>;
      break;
    case 'audit-logs':
      content = <div>Audit Logs Content</div>;
      break;
    case 'user-management':
      content = <div>User Management Content</div>;
      break;
      case 'profile':
        content = <Profile />;
        break;
    default:
      content = <div>Select a menu</div>;
  }

  return <div className="content">{content}</div>;
};

export default DashboardContent;
