import React, { useState } from 'react';
import {  FiSearch } from 'react-icons/fi';
import ActiveTab from '../tabs/dashboardTabs/ActiveTab';
import PendingTab from '../tabs/dashboardTabs/PendingTab';
import ClosedTab from '../tabs/dashboardTabs/ClosedTab';


const Dashboard = () => {

    const tabData = [
        { id: 1, label: 'Active (50)' },
        { id: 2, label: 'Pending(15)' },
        { id: 3, label: 'Closed(200)' },
        // Add more tab data as needed
      ];

      const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

    return (
        <div className='main-container'>
            <div className='dashboard'>
                <h1>Dashboard</h1> 
                <div className='inner-dashboard'>
                    <div className='services-box'>
                        <h2>12</h2>
                        <h3>Services</h3>
                    </div>

                    <div className='request-box'>
                        <h2>1000</h2>
                        <h3>Total Request</h3>
                    </div>

                    <div className='services-box'>
                        <h2>56</h2>
                        <h3>Customers</h3>
                    </div>

                    <div className='services-box'>
                        <h2>200+</h2>
                        <h3>Messages</h3>
                    </div>
                </div>

            </div>  


            <div className='tabs-container'>
                <h3>Requests</h3>
                <div className="inner-dashboard">
          {tabData.map((tab) => (
            <div
              key={tab.id}
              className={`tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => handleTabChange(tab.id)}
            >
              {tab.label}
            </div>
          ))}
          <div className='search-container'>
                    <div className="search-box">

                    <div className="search-icon">
                        <FiSearch size={18} color="#8B8B8B" /> {/* Use FiSearch icon */}
                    </div>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="search-input"
                        />
                    
                    </div>
                </div>
        </div>
        <div className="tab-content">
            {activeTab === 1 && <ActiveTab />}
            {activeTab === 2 && <PendingTab />}
            {activeTab === 3 && <ClosedTab />}
        </div>
      </div>

      

            <style>
                {`

                .main-container {
                    height: 100%;
                    width: 75vw;
                    position: relative;
                    left: 30px;
                }

                .dashboard{
                    width: 85vw;
                    height: 20vh;
                    position: relative;
                    top: -100px;
                    left: 0px;
                }

                .inner-dashboard{
                    width: 100%;
                    height: 101px;
                    display: flex;

                }
                .services-box {
                    width: 14.06vw;
                    height: 11.64vh;
                    background-color: white;
                    margin: 0 5.12vw 0 0;
                    text-align: center;
                    border: 0.5px solid #CDCDCD;
                    border-radius: 6px;
                }

                .request-box {
                    width: 16.9vw;
                    height: 11.63vh;
                    background-color: white;
                    margin: 0 5.12vw 0 0;
                    text-align: center;
                    border: 0.5px solid #CDCDCD;
                    border-radius: 6px;
                }

                .inner-dashboard h2{
                    font-size: 24px;
                    color: #071EC3;
                    font-weight: 700;
                }

                .inner-dashboard h3{
                    color: #595959;
                    font-size: 17px;
                    font-weight: 400;
                }

                .dashboard h1{
                    padding-top: 4.03vh;
                    padding-left: 1.17vw;
                    font-size: 24px;
                    color: ##595959;
                    font-weight: 600;
                }

                .tabs-container{
                    background-color: white;
                    height:100%;
                    position: relative;
                    top: -90px;
                    padding: 0 0 0 20px;
                    border-radius: 6px;
                    
                }

                .tabs-container h3{
                    font-size:24px;
                    color:#595959;
                    font-weight: 600;
                    padding-top: 1.172vh;
                }

                .tab {
                    cursor: pointer;
                    width: 6.41vw;
                    height: 2.65vh;
                    font-size: 11px;
                    font-weight:400;
                    color: #595959;
                    background-color: #f0f0f0;
                    border: none;
                    border-radius: 4px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-right: 10px;
                    padding: 0.23vh 1.56vw;
                    transition: background-color 0.3s, color 0.3s;
                    z-index: 1000;
                }

                .tab.active {
                background-color: #071EC3;
                color: #fff;
                }

                .tab-content {
                    position: relative;
                    top: -90px;
                }

                .search-container{
                    display:flex;
                    justify-content: end;
                    width: 100%;
                    padding-right: 2.34vw;
                }

                .search-box {
                    display: flex;
                    align-items: center;
                    width: 21.6vw;
                    height: 2.65vh;
                    padding: 5px 4px 4px 10px;
                    top: 3.46vh;
                    border: 0.50px #CDCDCD solid;
                    border-radius: 4px;
                    margin-top: -0.46vh;
                }

                .search-input {
                    flex: 1;
                    border: none;
                    outline: none;
                    padding: 5px;
                    height: 15px;
                    width:7.81vw;
                    border-radius: 0px;
                    color: #8B8B8B;
                }

                .search-icon {
                    padding: 0px;
                    border-radius: 0 5px 5px 0;
                    cursor: pointer;
                }

                .search-icon i {
                    font-size: 11px;
                }
                
                .search-input::placeholder {
                    color: #8B8B8B;
                    font-size: 14px;
                    font-weight: 400; 
                    }


                `}
            </style>        
        </div>
    );
};

export default Dashboard;