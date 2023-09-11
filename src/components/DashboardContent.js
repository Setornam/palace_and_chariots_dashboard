import React from 'react';
import Profile from './pages/Profile';
import Customers from './pages/Customers';
import Products from './pages/Products';
import Dashboard from './pages/Dashboard';
import AuditLogs from './pages/AuditLogs';
import Messages from './pages/Messages';
import UserMgt from './pages/UserMgt';

const DashboardContent = ({ selectedMenu }) => {
  let content;

  switch (selectedMenu) {
    case 'dashboard':
      content = < Dashboard />;
      break;
    case 'products':
      content = <Products />;
      break;
    case 'customers':
      content = <Customers />;
      break;
    case 'messages':
      content = <Messages />;
      break;
    case 'audit-logs':
      content = <AuditLogs />;
      break;
    case 'user-management':
      content = <UserMgt />;
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
