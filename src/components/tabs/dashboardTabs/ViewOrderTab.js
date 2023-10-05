import React from 'react'
import { FiChevronLeft } from 'react-icons/fi';


const ViewOrderTab = ({ title, content, onClose }) => {
  return (
<div className="tab">
      <FiChevronLeft className="back-icon"  onClick={onClose}/>
      <h3>View Order Tab</h3>
      <div><p>Order details</p></div>




      <style jsx >
        {`
          .back-icon{
            color: red;
            font-size: 240px;
            z-index: 1000000;
          }

        
        `}
      </style>
    </div>  )
}

export default ViewOrderTab