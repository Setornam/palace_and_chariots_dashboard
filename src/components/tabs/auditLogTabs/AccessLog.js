import React, { useEffect, useState } from 'react';
import { db } from '../../auth/firebase'; // Import the Firebase configuration for Firestore
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import MobileDetect from 'mobile-detect';
import Sidebar from '../../Sidebar';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
  isTablet,
  isAndroid,
  isIOS,
  osName,
  browserName
} from 'react-device-detect';



const AccessLog = () => {

  const [accessLogs, setAccessLogs] = useState([]);
  const [users, setUsers] = useState({});
  const [deviceType, setDeviceType] = useState(null);
  const [browser, setBrowser] = useState('');
  const [os, setOS] = useState('');


  useEffect(() => {
    // Create a new MobileDetect instance
    const md = new MobileDetect(window.navigator.userAgent);

    // Detect the browser
    const detectedBrowser = md.userAgent();
    setBrowser(detectedBrowser);

    // Detect the operating system
    const detectedOS = md.os();
    setOS(detectedOS);
  }, []);

  
  useEffect(() => {
    // Create an instance of MobileDetect
    const md = new MobileDetect(window.navigator.userAgent);

    // Detect the device type
    const isMobile = md.mobile();
    const isTablet = md.tablet();
    const isLaptop = !isMobile && !isTablet; // Detect as a Laptop if not Mobile or Tablet
    const isDesktop = !isMobile && !isTablet && !isLaptop;

    // Set the device type in state
    if (isMobile) {
      setDeviceType('Mobile');
    } else if (isTablet) {
      setDeviceType('Tablet');
    } else if (isLaptop) {
      setDeviceType('Laptop');
    } else if (isDesktop) {
      setDeviceType('Desktop');
    } else {
      setDeviceType('Unknown');
    }
  }, []);


  
  useEffect(() => {
    const fetchAccessLogs = async () => {
      try {
        const accessLogsCollection = collection(db, 'AccessLogs'); // Replace 'AccessLogs' with the actual name of your collection
        const querySnapshot = await getDocs(query(accessLogsCollection,  orderBy('time', 'desc')));
    
        const logsData = [];
        querySnapshot.forEach((doc) => {
          const log = doc.data();
          logsData.push(log);
        });
    
        setAccessLogs(logsData);
      } catch (error) {
        console.error('Error fetching access logs:', error);
      }
    };
    

    const fetchUsers = async () => {
      try {
        const usersCollection = collection(db, 'users'); // Replace 'users' with the actual name of your collection
        const querySnapshot = await getDocs(usersCollection);

        const usersData = {};
        querySnapshot.forEach((doc) => {
          const user = doc.data();
          usersData[user.userId] = user;
        });

        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchAccessLogs();
    fetchUsers();
  }, []);

   return (
      <div>
         <table className="active-requests-table">
            <thead>
               <tr>
                  <th>Employee</th>
                  <th>Activity Performed</th>
                  <th>Date/Time Stamp</th>
                  <th>Device Type</th>
                  <th>Device Name</th>
                  <th>Location</th>
               </tr>
            </thead>
            <tbody>
              
            {accessLogs.map((log, index) => {
            const user = users[log.userId];
            const userName = typeof user?.name === 'string' ? user.name : 'Unknown User';
            // Convert Firestore timestamps to JavaScript Date objects
            const loginTime = log.loginTime ? new Date(log.loginTime.seconds * 1000) : null;
            const logoutTime = log.logoutTime ? new Date(log.logoutTime.seconds * 1000) : null;

            return (
              <tr key={index} className='table-row'>
              <td>{userName}</td>
                <td>{log.status}</td>
                <td> {log.status === 'Login' && loginTime && !isNaN(loginTime)
          ? loginTime.toLocaleString() // Display login time for login events
          : log.status === 'Logout' && logoutTime && !isNaN(logoutTime)
          ? logoutTime.toLocaleString() // Display logout time for logout events
          : 'N/A' // Handle cases where time is not available or invalid
        }</td>
                <td> {deviceType}</td>
                <td>{isIOS && <p> iOS .</p>}
                    <span>{browserName}</span>
                    <span> on </span>
                    <span>{osName}</span>
                </td>
                <td>{log.locatio}</td>
              </tr>
            );
          })}
            </tbody>
         </table>
      </div>
   );
};

export default AccessLog;
