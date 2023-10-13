import React, { useState, useEffect } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { collection, doc, updateDoc } from 'firebase/firestore'; // Import Firestore dependencies
import { db } from '../../auth/firebase';



const ViewOrderTab = ({ title, 
  content, 
  onClose, 
  tabContainerClassName, 
  topBarClassName, 
  contentClassName, 
  greyAreaContainer, 
  contentContainerAreaClassName, 
  requestDetailsContainer,
  bottomBorder,
  form,
  contactDetails,
  secondSection,
  orderData,
  checkInAndOut,
  headingThree }) => {

    const [selectedStatus, setSelectedStatus] = useState('')
    const name = `${orderData.name ||  'Travel'}`
    const checkIn = ` ${orderData.flight_departure_date || orderData.check_in || ''} `;
    const checkOut = ` ${orderData.flight_return_date || orderData.check_out}`

    const handleStatusChange = (event) => {
      setSelectedStatus(event.target.value);
    };
  
    const handleSave = async (event) => {
      event.preventDefault();
      // Create a reference to the specific order document you want to update
      const orderRef = doc(db, 'orders', 'order_id'); // Replace 'your_order_id' with the actual order ID
  
      try {
        // Update the 'order_status' field in the Firestore document
        await updateDoc(orderRef, {
          order_status: selectedStatus,
        });
        // Handle success or show a notification to the user
        console.log('Order status updated successfully');
      } catch (error) {
        // Handle errors, e.g., show an error message
        console.error('Error updating order status', error);
      }
    };
    
  
  return (
<div className={tabContainerClassName}>
      <div className={topBarClassName}>
        <FiChevronLeft className="back-icon"  onClick={onClose}/>
        <h4>Requests</h4>
      </div>
      <div className={greyAreaContainer}></div>
      <div className={contentContainerAreaClassName}>
        <div className={requestDetailsContainer}>
          <h4>Request Details</h4>
          <div className={contentClassName}>
            <span style={{marginRight:'30px'}}> Request Category: </span> {orderData.service}<br/><br/>
            <div style={{float:'right', position:'relative', top:'-40px'}}>Opened by:</div>
            <span style={{marginRight:'30px'}}> Request ID: </span>{orderData.order_id.slice(6, 14)}
          </div>
          <div className={bottomBorder}></div>

          <div className={secondSection}>
            
            <span id="request-span">
              <h4>Request</h4>
              {/* <h4>{title}</h4> */}
              <div className={contentClassName}>
              <ul>
                <li>Request: {name}</li>
                <div className={checkInAndOut}>
                  <span style={{marginRight:'100px'}}>
                    Check In: <p>date{orderData.check_in}</p>
                  </span>
                  <span>
                    Check Out: {checkOut}
                  </span>
                </div>
                <div className={checkInAndOut}>
                  <span style={{marginRight:'100px'}}>
                    Guest: <p>date{orderData.check_in}</p>
                  </span>
                  
                </div>
                <li>Dates<br/>{orderData.order_date}</li>
                <li style={{color:'#595959',fontSize:'14px'}}>Total<br/><b>US${orderData.price}</b></li>
                
              </ul>
              
              </div>
              <form className={form}>
                <label for="status">Status</label>
                <select name="status" id="status">
                  <option value="" disabled selected hidden>{orderData.order_status}</option>
                  <option value="Active">Active</option>
                  <option value="Pending">Pending</option>
                  <option value="Closed">Closed</option>
                </select>
                <input type="submit" value="Save"></input>
               
              </form>
            </span>
            <span id='customer-span'>
              <h4>Customer Details</h4>
              <div className={contactDetails}>
                <ul>
                  <li>First Name:{orderData.first_name}</li>
                  <li>Last Name: {orderData.last_name}</li>
                  <li>Email Address: {orderData.email_address}</li>
                  <li>Country/Region: {orderData.country}</li>
                  <li> Contact Number: {orderData.phone}</li>
                </ul>
              </div>
            </span>
          </div>
        </div>

      </div>
      




      <style jsx >
        {`
          .back-icon{
            color: #595959;
            font-size: 24px;
            z-index: 1000000;
            cursor: pointer;
          }

          .tab{
            background-color: white;
            position: absolute;
            right: 0;
            z-index: 10000;
          }

          

        
        `}
      </style>
    </div>  )
}

export default ViewOrderTab