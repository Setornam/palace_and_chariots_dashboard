import React, { useState } from 'react';
import TabContent from '../TabContent';
import EditProfile from '../tabs/profileTabs/EditProfile'; // Adjust the import path
import Notification from '../tabs/profileTabs/Notification'; // Adjust the import path
import Password from '../tabs/profileTabs/Password'; // Adjust the import path

const Profile = () => {
  const [activeTab, setActiveTab] = useState('editProfile');

  const tabData = [
    { id: 'editProfile', label: 'Edit Profile', content: <EditProfile /> },
    { id: 'notification', label: 'Notification', content: <Notification /> },
    { id: 'password', label: 'Password', content: <Password /> },
  ];

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="profile">
      <h1 className="heading"> My Profile</h1>
      <div className="tab-content">
        <div className="tab-header">
          {tabData.map((tab) => (
            <div
              key={tab.id}
              className={`tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => handleTabChange(tab.id)}
            >
              {tab.label}
            </div>
          ))}
        </div>
        <TabContent className="tab-content">{tabData.find((tab) => tab.id === activeTab)?.content}</TabContent>
      </div>
      <style jsx>{`
        .heading {
          color: #0B41AA;
          font-size: 24px;
          font-weight: 600;
          margin-left: 100px;
        }
        .profile {
            width: 1610px;
            height: 100%;
            background-color: #fff;
            border-radius: 7px 0 0 7px;
            padding-top: 10px

        }
        .tab-header {
          display: flex;
          background-color: #0B41AA;
          height: 43px;
          align-items: center;
          width: 200%;
          padding: 0 100px 0 100px;

        }
        .tab {
          color: white;
          font-size: 14px;
          font-weight: 400;
          margin-right: 3.45%;
          cursor: pointer;
          transition: color 0.3s;
        }
        .tab.active {
          font-weight: 700;
        }

        
      `}</style>
    </div>
  );
};

export default Profile;
