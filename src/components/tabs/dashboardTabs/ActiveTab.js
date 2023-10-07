import React, { useState, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { collection, getDocs, doc, updateDoc, query, where, onSnapshot} from 'firebase/firestore';
import { db } from '../../auth/firebase';
import ViewOrderTab from './ViewOrderTab';



const ActiveTab = ({data , searchQuery}) => {

  const [activeOrders, setActiveOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedStatuses, setSelectedStatuses] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [activeTabs, setActiveTabs] = useState([]);  
  const rowsPerPage = 11;

  const tabs = activeOrders.map((order, index) => ({
    title: `Order ${index + 1}`,
    content: <div>{/* Content for this order */}</div>,
  }));

  const handleTabClick = ( index) => {
    // Check if the tab is not already open
    if (!activeTabs.includes(index)) {
      setActiveTabs([...activeTabs, index]);
    }
  };

  const handleTabClose = (index) => {
    // Remove the closed tab from the activeTabs array
    const updatedTabs = activeTabs.filter((tabIndex) => tabIndex !== index);
    setActiveTabs(updatedTabs);
  };
  
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch users and create a map for efficient lookups
        const usersCollection = collection(db, 'users');
        const usersSnapshot = await getDocs(usersCollection);
        const usersData = {};
        usersSnapshot.forEach((doc) => {
          const userData = doc.data();
          usersData[userData.user_Id] = userData;
        });

        // Fetch orders
        const ordersCollection = collection(db, 'orders');
        const ordersSnapshot = await getDocs(ordersCollection);
        const ordersData = ordersSnapshot.docs.map((doc) => doc.data());

        // Filter orders to only include "Active" status
        const activeOrders = ordersData.filter((order) => order.order_status === 'Active');
        setActiveOrders(activeOrders);

        // Combine order data with user data
        const mergedData = activeOrders.map((order) => {
          const user = usersData[order.user_Id] || {};
          console.log('User Data for Order:', order.order_id, user);
          return {
            ...order,
            user,
          };
        });

        

        // Filter data based on search query
      const filteredData = mergedData.filter((order) => {
        const fullName = `${order.user.first_name} ${order.user.last_name}`.toLowerCase();
        const orderName = order.name.toLowerCase();
        const requestCategory = order.service.toLowerCase();
        const orderId = order.order_id.toLowerCase();
        const orderDate = order.order_date.toLowerCase();
        const searchQueryLowerCase = searchQuery.toLowerCase();

  // Check if any of the fields match the search query
        return (
          fullName.includes(searchQueryLowerCase) ||
          orderName.includes(searchQueryLowerCase) ||
          requestCategory.includes(searchQueryLowerCase) ||
          orderId.includes(searchQueryLowerCase) ||
          orderDate.includes(searchQueryLowerCase) 
        );
      });
  
        setFilteredData(filteredData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

       

    fetchData();
  }, [searchQuery]);
  


  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= Math.ceil(activeOrders.length / rowsPerPage)) {
      setCurrentPage(newPage);
    }
  };

  const handleStatusChange = async (orderId, orderIndex, newStatus) => {
    console.log("index", orderIndex);

    try {
      // Find the order with the matching orderId
      const orderToUpdate = activeOrders.find((order) => order.order_id === orderId);
      console.error(orderToUpdate)

      if (orderToUpdate) {
        // Update the order_status in Firestore
        const q = query(collection(db, "orders"), where("order_id", "==", orderToUpdate.order_id));
        const docId = (await getDocs(q)).docs[0].id;
        console.log("document id =>", docId);
        console.log("updated status", newStatus)

        const orderDocRef = doc(db, 'orders', docId);
        await updateDoc(orderDocRef, { order_status: newStatus });

        // Remove the updated order from activeOrders
        const updatedActiveOrders = [...activeOrders];
        updatedActiveOrders.splice(orderIndex, 1);
        setActiveOrders(updatedActiveOrders);
      } else {
        console.error('Invalid order not found')
      }
    } catch (error) {
      console.error('Error updating order status:', error);
    }
  };

  const pageData = filteredData.slice(startIndex, endIndex);
  let totalPages = Math.ceil(pageData.length / rowsPerPage) ;
     totalPages = Math.ceil(totalPages + 1) ;
  


  return (
    <div>
      <table className="active-requests-table">
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
              <td>{`${order.user.first_name || ''} ${order.user.last_name || ''}`}</td> {/* Access user data */}
              <td>{order.service}</td>
              <td>{order.name}</td>
              <td className='state'>
                <select
                    className="status-select"
                    value={selectedStatuses[index] || "Active"}
                    onChange={(e) => {
                      const newStatuses = [...selectedStatuses];
                      newStatuses[index] = e.target.value;
                      setSelectedStatuses(newStatuses);
                      handleStatusChange(order.order_id, index,  e.target.value); // Update status on select change
                    }}
                  >
                    <option value="Active" disabled>Active</option>
                    <option value="Pending">Pending</option>
                    <option value="Closed">Closed</option>
                </select>
              </td>
              <td>
                <FiChevronRight className='icon'
                onClick={() => handleTabClick(index)} />
              </td>
              <div className='row-line' id="bottom-line"></div>
            </tr>
            
          ))}
          
        
          
        </tbody>
      </table>
      <div className="tabs-content">
      {activeTabs.map((tabIndex) => (
          <ViewOrderTab
            key={tabIndex}
            title={`Order ${tabIndex + 1}`} 
            orderData={filteredData[tabIndex]}
            content={`Tab Content ${tabIndex + 1}`}
            onClose={() => handleTabClose(tabIndex)}
            tabContainerClassName="custom-tab-container"
            topBarClassName="custom-top-bar"
            contentClassName="custom-content"
            greyAreaContainer="grey-area"
            contentContainerAreaClassName="custom-content-container-area"
            requestDetailsContainer="request-details-container"
            bottomBorder="custom-bottom-border"
            headingThree="heading-three"
            secondSection='custom-second-section'
            contactDetails='custom-contact-details'
            checkInAndOut='check-in-and-out'
            form='form'
          />
        ))}

      </div>

      <div className="pagination">
        
          
          <FaArrowLeft 
          className={`button ${currentPage === 1 ? 'disabled' : ''}`}
          onClick={() => handlePageChange(currentPage - 1)}/>

          <span>Page {currentPage} of {totalPages}</span>
          
            <FaArrowRight
  className={`button ${
    currentPage === Math.ceil(activeOrders.length / rowsPerPage)
      ? 'disabled'
      : ''
  }`}
  onClick={() => handlePageChange(currentPage + 1)}
/>
          
      </div>

      <style>
        {`
            .active-requests-table{
                width: 71.14vw;
                height:1vh;
                max-height: 56.3vh;
                position: relative;
                top: 4.6vh;
                border: 0.5px solid #EBEBEB;
                border-radius: 5px;
                padding: 1.17vh 1.24vw ;
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

            .state{
              display: flex;  
              justify-content: center;
              margin-top: 10px;
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
        

            .row-line {
                border-bottom: 0px solid #ebebeb;
                position: absolute;
                left: -10px;
                margin-top: 3px;
                width: 71.1vw;
            }

            #bottom-line {
              left: 0vw;
              margin-bottom: 5px;
              border-bottom: 1px solid #ebebeb;
              
            }

           .icon{
            font-size: 16px;
            color: #595959;
            position: relative;
            left: 2.05vw;
            margin-top: 25%;
            cursor: pointer;
           }

           

           .table-row{
            vertical-align: middle;
            height: 4.125vh;
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

            .custom-tab-container{
              background-color: #ECF0F4;
              position: absolute;
              top: -31.68vh;
              right: 0vw;
              height: 100vh;
              width: 75.14vw;
              z-index: 1000;
              border-radius: 
            }

            .custom-tab-container li, .custom-tab-container p {
              color: #505050;
            }

            .custom-tab-container h3{
              font-size: 24px;
              color: white;
            }

            .custom-top-bar{
              position: relative;
              top: -0.35vh;
              left: -7.34vw;
              height: 6.99vh;
              width: 100vw;
              background-color: white;
              display: flex;
              padding-left: 7.34vw;
              align-items: center;
              
            }

            .custom-top-bar h4{
              font-size: 14px;
              padding-left: 15px;
              color: #595959
            }

            .grey-area{
              background-color: #ECF0F4;
              height: 25px;
              width: 100%;
              position: relative;
              top: -0.3456vh;
            }

            .custom-content-container-area{
              background-color: white;
              height: 100vh;
              width: 76.14vw;
              position: relative;
              top: 0px;
              border-radius: 6px;
              display: flex;
              justify-content: center;
            }

            .custom-content{
              width: 100%;
            }

            .custom-content ul{
              list-style: none;
            }

            .custom-content ul li{
              margin-bottom: 35px;
              margin-left: -40px;
            }

            .form{
              position: absolute;
              bottom: 120px;
            }

            .form label{
              display: block;
              margin-bottom: 20px;
            }

            .form select{
              width: 168.85px;
              height: 21px;
              text-align: left;
              padding-left: 5px;
            }

            .form input{
              display: block;
              margin-top: 15px;
              width: 166px;
              height: 26px;
              color: white;
              background-color: #071EC3;
              border: 1px solid #071EC3;
              border-radius: 4px;
              cursor: pointer;
            }

            .request-details-container{
              width: 70.14vw;
            }

            .request-details-container h4{
              color: #595959;
              font-size: 24px;
              font-weight: 700;
            }


            .custom-bottom-border{
              border-bottom: 1px solid #CDCDCD;
              position: relative;
              right: 3.0469vw;
              width: 108.8%;
              height: 40px;
            }

            .custom-second-section{
              display: flex;
              height: 380%;
            }

            .custom-second-section #request-span{
              flex: 1.5;
            }

            .custom-second-section #customer-span{
              flex: 1;
            }

            .custom-second-section h4{
              font-size: 24px;
              font-weight: 700;
              color: #595959;
            }

            .custom-contact-details{
              border: 1px solid #CDCDCD;
              width: 345px;
              height: 243px;
              border-radius: 5px;

            }

            .custom-contact-details ul{
              list-style: none;
            }

            .custom-contact-details ul li{
              margin-bottom: 30px;
            }

            .check-in-and-out{
              background-color: red;
              display: inline;
            }

            
          
            
            
        
        
        `}
      </style>
    </div>
  );
};

export default ActiveTab;
