import React, { useEffect, useState } from 'react';
import { db } from '../../auth/firebase'; // Import the Firebase configuration for Firestore
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

const AccessLog = () => {

  const [accessLogs, setAccessLogs] = useState([]);
  const [users, setUsers] = useState({});



  
  useEffect(() => {
    const fetchAccessLogs = async () => {
      try {
        const accessLogsCollection = collection(db, 'AccessLogs'); // Replace 'AccessLogs' with the actual name of your collection
        const querySnapshot = await getDocs(accessLogsCollection);

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
            return (
              <tr key={index} className='table-row'>
                <td>{user ? user.name : 'Unknown User'}</td>
                <td>{log.status}</td>
                <td>{log.logoutTime}</td>
                <td>{log.deviceType}</td>
                <td>{log.deviceName}</td>
                <td>{log.location}</td>
              </tr>
            );
          })}
            </tbody>
         </table>
      </div>
   );
};

export default AccessLog;
