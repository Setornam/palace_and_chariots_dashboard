import React from 'react'

const AuditLogs = () => {
  return (
    <div>
    <div className='customers-container'>
     <div className='top-bar'>
         <div className="heading-container">
             <h1>Audit Logs</h1>
         </div>
         
     </div>
     <div className='table'>
         {}
     </div>

     <style jsx>
         {`
         .customers-container{
             display: flex;
             background-color:#fff;
             width: 989px;
             height: 826px;
             position: relative;
             left: 20px;
             top: -50px;
             border-radius:6px;
         }

         .top-bar{
             display: flex;
             height: 100px;
             width: 100%;
             border-radius: 6px 6px 0 0;
         }
         
         .heading-container{
             width: 50%;
             padding-left: 30px;
         }

         .heading-container h1{
             font-size: 24px;
             color: #595959;
             font-weight: 600;
             padding-top: 20px;                    
         }

         
         
         `}
     </style>
 </div>
 </div>
  )
}

export default AuditLogs;