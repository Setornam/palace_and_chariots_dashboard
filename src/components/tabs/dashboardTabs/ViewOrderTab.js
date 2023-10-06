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
  headingThree }) => {

    const [selectedStatuses, setSelectedStatuses] = useState([]);

  
  
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
          {content}</div>
          <div className={bottomBorder}></div>

          <div className={secondSection}>
            
            <span id="request-span">
              <h4>Request</h4>
              {/* <h4>{title}</h4> */}
              <div className={contentClassName}>
              <ul>
                <li>{content}</li>
                <li>{content}</li>
                <li>{content}</li>
                <li>{content}</li>
                <li>{content}</li>
                <li>{content}</li>
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
                  <li>First Name: John</li>
                  <li>Last Name: Fisher</li>
                  <li>Email: johnfisher@gmail.com</li>
                  <li>Country: Ghana</li>
                  <li> Contact:  (+233) 207895442</li>
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