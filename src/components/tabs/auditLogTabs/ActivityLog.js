import React from 'react'

const ActivityLog = () => {
    return (
        <div>
            <table className="active-requests-table">
            <thead>
              <tr>
                <th>Employee</th>
                <th>Activity Performed </th>
                <th>Date/Time Stamp</th>
                <th>Device Type</th>
                <th>Device Name</th>
                <th>Location</th>
              </tr>
              <div className='row-line'></div>
            </thead>
            <tbody>
                <tr></tr>
              <tr className='table-row'>
                <td>James Packer</td>
                <td>Created a new user</td>
                <td>29/8/2022 03:21 PM</td>
                <td>Laptop</td>
                <td>Chrome on Mac_os</td>
                <td>Accra,Ghana</td>
               
              </tr>
             
            
              
            </tbody>
          </table>
        </div>
      )
    }

export default ActivityLog