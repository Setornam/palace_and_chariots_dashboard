import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronDown } from 'react-icons/fi';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../auth/firebase';



const ActiveTab = () => {

  const [orders, setOrders] = useState([]);
  const [usersMap, setUsersMap] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
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
        setUsersMap(usersData);

        // Fetch orders
        const ordersCollection = collection(db, 'orders');
        const ordersSnapshot = await getDocs(ordersCollection);
        const ordersData = ordersSnapshot.docs.map((doc) => doc.data());

        // Combine order data with user data
        const mergedData = ordersData.map((order) => ({
          ...order,
          user: usersData[order.userId] || {}, // Replace 'userId' with your actual field name
        }));

        setOrders(mergedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  const pageData = orders.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= Math.ceil(orders.length / rowsPerPage)) {
      setCurrentPage(newPage);
    }
  };


  return (
    <div>
      <table className="active-requests-table">
        <thead>
          <tr>
            <th></th>
            <th>Date</th>
            <th>Request ID</th>
            <th>Customer Name</th>
            <th>Request Category</th>
            <th>Request</th>
            <th >Status</th>
          </tr>
          <div className='row-line'></div>
        </thead>
        <tbody>
            <tr></tr>
            {pageData.map((order, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{order.order_date}</td>
              <td>{order.order_id}</td>
              <td>{`${order.user.first_name} ${order.user.last_name}`}</td> {/* Access user data */}
              <td>{order.service}</td>
              <td>{order.name}</td>
              <td className='state'>
                Active <FiChevronDown className='icon2' />
              </td>
              <td>
                <FiChevronRight className='icon' />
              </td>
            </tr>
            
          ))}
          <div className='row-line'></div>

          
          
          
        
          
        </tbody>
      </table>

      <div className="pagination">
        
          
          <FaArrowLeft className='button'
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}/>

          <span>Page {currentPage}</span>
          
            <FaArrowRight className='button'
              disabled={currentPage === Math.ceil(orders.length / rowsPerPage)}
            onClick={() => handlePageChange(currentPage + 1)}
            />
          
      </div>

      <style>
        {`
            .active-requests-table{
                width: 71.14vw;
                height: 56.3vh;
                position: relative;
                top: 4.6vh;
                border: 0.5px solid #EBEBEB;
                border-radius: 5px;
                padding: 1.17vh 1.24vw;
            }

            .active-requests-table th{
                color: #595959;
                font-size: 11px;
                font-weight: 600;
                text-align: left;
            }

            .active-requests-table td{
                color: #595959;
                font-size: 11px;
                font-weight: 400;
         
            }

            .active-requests-table tr{
              height: 40px;
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
            margin-top: 25%;
            cursor: pointer;
           }

           .state{
            text-align: center;  
            border: 0.5px solid #CDCDCD;
            height: 2.42vh;
            width: 5.85vw;
            border-radius: 4px;  
            display: flex;
            justify-content: center;
            align-items: center; 
            cursor: pointer; 
            }

            .icon2{
                font-size: 16px ;
                position: relative;
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

export default ActiveTab;
