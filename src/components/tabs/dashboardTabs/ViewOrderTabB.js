import React, { useState, useEffect } from 'react';
import { FiChevronLeft } from 'react-icons/fi';



const ViewOrderTabB = ({ title, 
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
                <li>Request: Call back</li>
                <li>Product: {name}</li>
                
                
                
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
                  <li>First Name: {orderData.personal_info.first_name}</li>
                  <li>Last Name: {orderData.personal_info.last_name}</li>
                  <li>Email Address: {orderData.personal_info.email}</li>
                  <li>Country/Region: {orderData.personal_info.country}</li>
                  <li> Contact Number: {orderData.personal_info.phone_number}</li>
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

export default ViewOrderTabB