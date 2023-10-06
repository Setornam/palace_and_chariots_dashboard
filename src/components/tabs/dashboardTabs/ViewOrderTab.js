import React, { useState, useEffect } from 'react';
import { FiChevronLeft } from 'react-icons/fi';



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

    const [selectedStatuses, setSelectedStatuses] = useState([]);
    const name = `${orderData.name ||  'Travel'}`
    const checkIn = ` ${orderData.flight_departure_date || orderData.check_in || ''} `;
    const checkOut = ` ${orderData.flight_return_date || orderData.check_out}`

  
  
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
            {orderData.name}<br/><br/>
            {orderData.order_id}
          </div>
          <div className={bottomBorder}></div>

          <div className={secondSection}>
            
            <span id="request-span">
              <h4>Request</h4>
              {/* <h4>{title}</h4> */}
              <div className={contentClassName}>
              <ul>
                <li>{name}</li>
                <div className={checkInAndOut}>
                  <span>
                    <li><p>Check In</p>{checkIn}</li>
                  </span>
                  <span>
                    <li><p>Check Out</p>{checkOut}</li>
                  </span>
                </div>
                <li>Date<br/>{orderData.order_date}</li>
                <li style={{color:'#595959',fontSize:'14px'}}>Total<br/><b>US${orderData.price}</b></li>
                
              </ul>
              
              </div>
              <form className={form}>
                <label for="status">Status</label>
                <select name="status" id="status">
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
                  <li>Email: {orderData.email_address}</li>
                  <li>Country: {orderData.country}</li>
                  <li> Contact: {orderData.phone}</li>
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