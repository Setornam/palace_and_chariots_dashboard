import React, { useState, useEffect } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { FaRegWindowClose } from 'react-icons/fa';


const ViewProductsTab = ({ 
    
    onClose,
    tabContainerClassName,
    topBarClassName,

}) => {
  return (
    <div className={tabContainerClassName}>
        <div className={topBarClassName}>
        <h4>View</h4>
        <span className='close-icon' onClick={onClose}>
            <FaRegWindowClose className="back-icon"  onClick={onClose}/>
        </span>
      </div>
      




      <style jsx >
        {`
          .back-icon{
            color: white;
            font-size: 24px;
            z-index: 10000000000000000000;
            cursor: pointer;
            position: absolute;
            left: 118vh;
            top: 1.1vh;
          }

          .tab{
            background-color: white;
            position: absolute;
            right: 0;
            z-index: 10000;
          }

          .close-icon{
            z-index: 10000000;
            cursor: pointer;
            width: 20px;
            height: 20px;
          }

          

        
        `}
      </style>
    
    </div>
  )
}

export default ViewProductsTab