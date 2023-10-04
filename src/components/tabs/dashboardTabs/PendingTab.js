import React, { useState, useEffect } from 'react';
import {  FiChevronRight } from 'react-icons/fi';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { collection, getDocs, doc, updateDoc, where, query } from 'firebase/firestore';
import { db } from '../../auth/firebase';


const PendingTab = () => {

  const [pendingOrders, setPendingOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedStatuses, setSelectedStatuses] = useState([]);
  const rowsPerPage = 11;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch users and create a map for efficient lookups
        const usersCollection = collection(db, 'users');
        const usersSnapshot = await getDocs(usersCollection);
        const usersData = {};
        usersSnapshot.forEach((doc) => {
          const userData = doc.data();
          usersData[userData.userId] = userData;
        });

        // Fetch orders
        const ordersCollection = collection(db, 'orders');
        const ordersSnapshot = await getDocs(ordersCollection);
        const ordersData = ordersSnapshot.docs.map((doc) => doc.data());

        // Filter orders to only include "Pending" status
        const pendingOrders = ordersData.filter((order) => order.order_status === 'pending');

        // Combine order data with user data
        const mergedData = pendingOrders.map((order) => ({
          ...order,
          user: usersData[order.user_Id] || {}, 
        }));

        setPendingOrders(mergedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= Math.ceil(pendingOrders.length / rowsPerPage)) {
      setCurrentPage(newPage);
    }
  };

  const handleStatusChange = async (orderId, orderIndex) => {
    try {
      // Find the order with the matching orderId
      const orderToUpdate = pendingOrders.find((order) => order.order_id === orderId);

      if (orderToUpdate) {
        // Update the order_status in Firestore
        const orderDocRef = doc(db, 'orders', orderToUpdate.doc_id);
        await updateDoc(orderDocRef, { order_status: selectedStatuses[orderIndex] });
        // Remove the updated order from activeOrders
        const updatedPendingOrders = [...pendingOrders];
        updatedPendingOrders.splice(orderIndex, 1);
        setPendingOrders(updatedPendingOrders);
      }
    } catch (error) {
      console.error('Error updating order status:', error);
    }
  };

  const pageData = pendingOrders.slice(startIndex, endIndex);

  return (
    <div>
      <table className="pending-requests-table">
        <thead>
          <tr>
          <th style={{width: '3%'}}></th>
            <th style={{width: '10%'}}>Date</th>
            <th style={{width: '15%'}}>Request ID</th>
            <th style={{width: '23%'}}>Customer Name</th>
            <th style={{width: '20%'}}>Request Category</th>
            <th style={{width: '15%'}}>Request</th>
            <th style={{width: '5%'}}>Status</th>
            <th style={{width: '2%'}}></th>
          </tr>
          <div className='row-line'></div>
        </thead>
        <tbody>
        {pageData.map((order, index) => (
            <tr key={index} className='table-row'>
              <td>{(currentPage - 1) * rowsPerPage + index + 1}</td>
              <td>{order.order_date}</td>
              <td>{order.order_id}</td>
              <td>{`${order.user.first_name} ${order.user.last_name}`}</td> {/* Access user data */}
              <td>{order.service}</td>
              <td>{order.name}</td>
              <td className='state'>
                <select
                    className="status-select"
                    value={selectedStatuses[index]}
                    onChange={(e) => {
                      const newStatuses = [...selectedStatuses];
                      newStatuses[index] = e.target.value;
                      setSelectedStatuses(newStatuses);
                      handleStatusChange(order.order_id, index); // Update status on select change
                    }}
                  >
                    <option value="Active">Active</option>
                    <option value="Pending">Pending</option>
                    <option value="Closed">Closed</option>
                  </select>
              </td>
              <td>
                <FiChevronRight className='icon' />
              </td>
              <div className='row-line' id="bottom-line"></div>
            </tr>
            
          ))}
          
        
          
        </tbody>
      </table>

      <div className="pagination">
        
          
          <FaArrowLeft 
          className={`button ${currentPage === 1 ? 'disabled' : ''}`}
          onClick={() => handlePageChange(currentPage - 1)}/>

          <span>Page {currentPage}</span>
          
            <FaArrowRight
  className={`button ${
    currentPage === Math.ceil(pendingOrders.length / rowsPerPage)
      ? 'disabled'
      : ''
  }`}
  onClick={() => handlePageChange(currentPage + 1)}
/>
          
      </div>

      <style>
        {`
            .pending-requests-table{
                width: 71.14vw;
                height: 56.33vh;
                position: relative;
                top: 4.6vh;
                border: 0.5px solid #EBEBEB;
                border-radius: 5px;
                padding: 1.17vh 1.24vw;
            }

            .pending-requests-table th{
                color: #595959;
                font-size: 11px;
                font-weight: 600;
                text-align: left;
            }

            .pending-requests-table td{
                color: #595959;
                font-size: 11px;
                font-weight: 400;
            }
        

            .row-line {
                border-bottom: 1px solid #EBEBEB;
                position: absolute;
                left: -1px;
                margin-top: 3px;
                width: 71.1vw;
            }

            .icon{
            font-size: 16px;
            color: #595959;
            position: relative;
            left: 2.05vw;
            margin-top: 25%;
            cursor: pointer;
           }


           
           select{
              text-align: center;  
              border: 0.5px solid #CDCDCD;
              height: 3.42vh;
              width: 5.85vw;
              cursor: pointer;
              border-radius: 4px; 

            }
           
            .status-select {
              color: #595959;
              border: 1px #CDCDCD solid;
              border-radius: 4px;
              height: 2.42vh;
              width: 87px;
              display: flex;
              justify-content: center;
              align-items: center; 
              cursor: pointer;
            }

           

            .icon2{
                font-size: 16px ;
                position: relative;
                top: 2px;
                padding-left: 10px;
            }

            .pagination {
              display: flex;
              color: #595959;
              justify-content: end;
              align-items: center;
              margin-top: 50px;
              margin-right: 3.5%;
              font-weight: 600;
              font-size: 11px;
            }

            .pagination .button {
              margin: 0 5px;
              cursor: pointer;
              background-color: white;
              width: 11px;
              display: flex;
              border: 2px solid #CDCDCD;
              color: #CDCDCD;
              border-radius: 5px;
              padding: 1px 5px;
              justify-content: center;
              align-items: center;
              font-size: 22px;
            }
        

        
        `}
      </style>
    </div>
  );
};

export default PendingTab;
