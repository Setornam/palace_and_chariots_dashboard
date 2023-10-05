import React, { useState, useEffect } from 'react';
import {  FiSearch } from 'react-icons/fi';
import ActiveTab from '../tabs/dashboardTabs/ActiveTab';
import PendingTab from '../tabs/dashboardTabs/PendingTab';
import ClosedTab from '../tabs/dashboardTabs/ClosedTab';
import { collection, getDocs,  query, where } from 'firebase/firestore';
import { db } from '../auth/firebase'; 



const Dashboard = () => {

  
    const [activeTab, setActiveTab] = useState(1);
    const [orderCount, setOrderCount] = useState(0);
    const [customerCount, setCustomerCount] = useState(0);
    const [messageCount, setMessageCount] = useState(0);
    const [pendingOrderCount, setPendingOrderCount] = useState(0);
    const [activeOrderCount, setActiveOrderCount] = useState(0);
    const [closedOrderCount, setClosedOrderCount] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');

  
    const handleTabChange = (tabId) => {
      setActiveTab(tabId);
    };
  
    const fetchOrderCount = async () => {
      try {
        const ordersRef = collection(db, 'orders');
        const querySnapshot = await getDocs(ordersRef);
        const count = querySnapshot.size; // Get the number of documents in the collection
        return count;
      } catch (error) {
        console.error('Error fetching order count:', error);
        return 0; // Handle the error and set a default count
      }
    };
  
    const fetchCustomerCount = async () => {
      try {
        const customersRef = collection(db, 'users'); // Assuming 'users' is the collection name for customers
        const querySnapshot = await getDocs(customersRef);
        const count = querySnapshot.size; // Get the number of documents in the collection
        return count;
      } catch (error) {
        console.error('Error fetching customer count:', error);
        return 0; // Handle the error and set a default count
      }
    };

    
  const fetchMessageCount = async () => {
    try {
      const chatsRef = collection(db, 'chats'); // Use 'chats' collection for messages
      const querySnapshot = await getDocs(chatsRef);
      const count = querySnapshot.size; // Get the number of documents in the collection
      return count;
    } catch (error) {
      console.error('Error fetching message count:', error);
      return 0; // Handle the error and set a default count
    }
  };

   // Function to fetch the count of pending orders
  const fetchPendingOrderCount = async () => {
    try {
      const ordersRef = collection(db, 'orders');
      const q = query(ordersRef, where('order_status', '==', 'pending'));
      const querySnapshot = await getDocs(q);
      const count = querySnapshot.size; // Get the number of pending orders
      return count;
    } catch (error) {
      console.error('Error fetching pending order count:', error);
      return 0; // Handle the error and set a default count
    }
  };

  // Function to fetch the count of active orders
  const fetchActiveOrderCount = async () => {
    try {
      const ordersRef = collection(db, 'orders');
      const q = query(ordersRef, where('order_status', '==', 'Active'));
      const querySnapshot = await getDocs(q);
      const count = querySnapshot.size; // Get the number of active orders
      return count;
    } catch (error) {
      console.error('Error fetching pending order count:', error);
      return 0; // Handle the error and set a default count
    }
  };

   // Function to fetch the count of closed orders
   const fetchClosedOrderCount = async () => {
    try {
      const ordersRef = collection(db, 'orders');
      const q = query(ordersRef, where('order_status', '==', 'Closed'));
      const querySnapshot = await getDocs(q);
      const count = querySnapshot.size; // Get the number of closed orders
      return count;
    } catch (error) {
      console.error('Error fetching pending order count:', error);
      return 0; // Handle the error and set a default count
    }
  };

  
  
  useEffect(() => {
    const fetchData = async () => {
      const orderCount = await fetchOrderCount();
      const customerCount = await fetchCustomerCount();
      const messageCount = await fetchMessageCount(); // Fetch message count
      const pendingCount = await fetchPendingOrderCount();
      const activeCount = await fetchActiveOrderCount();
      const closedCount = await fetchClosedOrderCount();

      setOrderCount(orderCount);
      setCustomerCount(customerCount);
      setMessageCount(messageCount); // Set the message count with the obtained value
      setPendingOrderCount(pendingCount); 
      setActiveOrderCount(activeCount); 
      setClosedOrderCount(closedCount);
    };
  
      fetchData();
    }, []);

    const tabData = [
        { id: 1, label: `Active(${activeOrderCount})` },
        { id: 2, label: `Pending(${pendingOrderCount})` },
        { id: 3, label: `Closed(${closedOrderCount})` },
        // Add more tab data as needed
      ];

    return (
        <div className='main-container'>
            <div className='dashboard'>
                <h1>Dashboard</h1> 
                <div className='inner-dashboard'>
                    <div className='services-box'>
                        <h2>4</h2>
                        <h3>Services</h3>
                    </div>

                    <div className='request-box'>
                        <h2>{orderCount}</h2>
                        <h3>Total Request</h3>
                    </div>

                    <div className='services-box'>
                        <h2>{customerCount}</h2>
                        <h3>Customers</h3>
                    </div>

                    <div className='services-box'>
                        <h2>{messageCount}</h2>
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
                        <FiSearch size={18} color="#8B8B8B" /> 
                    </div>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="search-input"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    
                    </div>
                </div>
        </div>
        <div className="tab-content">
            {activeTab === 1 && <ActiveTab searchQuery={searchQuery}/>}
            {activeTab === 2 && <PendingTab searchQuery={searchQuery} />}
            {activeTab === 3 && <ClosedTab searchQuery={searchQuery}/>}
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
                    font-size: 1.7rem;
                    color: #071EC3;
                    font-weight: 700;
                }

                .inner-dashboard h3{
                    color: #595959;
                    font-size: 1.21rem;
                    font-weight: 400;
                }

                .dashboard h1{
                    padding-top: 4.03vh;
                    padding-left: 1.17vw;
                    font-size: 1.7rem;
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
                    font-size:1.7rem;
                    color:#595959;
                    font-weight: 600;
                    padding-top: 1.172vh;
                }

                .tab {
                    cursor: pointer;
                    width: 8vw;
                    height: 2.65vh;
                    font-size: 0.79rem;
                    font-weight:400;
                    color: #595959;
                    background-color: #f0f0f0;
                    border: none;
                    border-radius: 4px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-right: 10px;
                    padding: 0.23vh 0.56vw;
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
                    height: 20px;
                    width:7.81vw;
                    border-radius: 0px;
                    color: #8B8B8B;
                    z-index: 1000;
                }

                .search-icon {
                    padding: 0px;
                    border-radius: 0 5px 5px 0;
                    cursor: pointer;
                }

                .search-icon i {
                    font-size: 0.79rem;
                }
                
                .search-input::placeholder {
                    color: #8B8B8B;
                    font-size: 1rem;
                    font-weight: 400; 
                    }


                `}
            </style>        
        </div>
    );
};

export default Dashboard;