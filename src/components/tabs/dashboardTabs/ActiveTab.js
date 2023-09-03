import React from 'react';
import {  FiChevronRight, FiChevronDown } from 'react-icons/fi';


const ActiveTab = () => {
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
          <tr>
            <td>1</td>
            <td>10/07/2023</td>
            <td>WE123</td>
            <td>James Packer</td>
            <td>Rentals/Vehicle </td>
            <td>Mercedes Benz C300</td>
            <td className='state'>
            Active <FiChevronDown className='icon2'/></td>
            <td>
              <FiChevronRight className='icon'/>
            </td>
          </tr>
          <div className='row-line'></div>
          <tr>
            <td>2</td>
            <td>10/07/2023</td>
            <td>DE455</td>
            <td>John Fisher</td>
            <td>Rentals/Accommodation </td>
            <td>Kempinski Hotel Gold Coast City Accra</td>
            <td className='state'>Active <FiChevronDown className='icon2'/></td>
            <td>
              <FiChevronRight className='icon'/>
            </td>
          </tr>
          <div className='row-line'></div>
          <tr>
            <td>3</td>
            <td>10/07/2023</td>
            <td>10/07/2023</td>
            <td>Bob Johnson</td>
            <td>Sales/Houses</td>
            <td>Furnished 3bdrm House in Lakeside Estate</td>
            <td className='state'>Active <FiChevronDown className='icon2'/></td>
            <td>
              <FiChevronRight className='icon'/>
            </td>
          </tr>
          <div className='row-line'></div>
          <tr>
            <td>4</td>
            <td>10/07/2023</td>
            <td>WE123</td>
            <td>James Packer</td>
            <td>Rentals/Vehicle </td>
            <td>Mercedes Benz C300</td>
            <td className='state'>Active <FiChevronDown className='icon2'/></td>
            <td>
              <FiChevronRight className='icon' />
            </td>
          </tr>
          <div className='row-line'></div>
          <tr>
            <td>5</td>
            <td>10/07/2023</td>
            <td>DE455</td>
            <td>John Fisher</td>
            <td>Rentals/Accommodation </td>
            <td>Kempinski Hotel Gold Coast City Accra</td>
            <td className='state'>Active <FiChevronDown className='icon2'/></td>
            <td>
              <FiChevronRight className='icon'/>
            </td>
          </tr>
          <div className='row-line'></div>
          <tr>
            <td>6</td>
            <td>10/07/2023</td>
            <td>10/07/2023</td>
            <td>Bob Johnson</td>
            <td>Sales/Houses</td>
            <td>Furnished 3bdrm House in Lakeside Estate</td>
            <td className='state'>Active <FiChevronDown className='icon2'/></td>
            <td>
              <FiChevronRight className='icon'/>
            </td>
          </tr>
          <div className='row-line'></div>
          <tr>
            <td>7</td>
            <td>10/07/2023</td>
            <td>WE123</td>
            <td>James Packer</td>
            <td>Rentals/Vehicle </td>
            <td>Mercedes Benz C300</td>
            <td className='state'>Active <FiChevronDown className='icon2'/></td>
            <td>
              <FiChevronRight className='icon'/>
            </td>
          </tr>
          <div className='row-line'></div>
          <tr>
            <td>8</td>
            <td>10/07/2023</td>
            <td>DE455</td>
            <td>John Fisher</td>
            <td>Rentals/Accommodation </td>
            <td>Kempinski Hotel Gold Coast City Accra</td>
            <td className='state'>Active <FiChevronDown className='icon2'/></td>
            <td>
              <FiChevronRight className='icon'/>
            </td>
          </tr>
          <div className='row-line'></div>
          <tr>
            <td>9</td>
            <td>10/07/2023</td>
            <td>10/07/2023</td>
            <td>Bob Johnson</td>
            <td>Sales/Houses</td>
            <td>Furnished 3bdrm House in Lakeside Estate</td>
            <td className='state'>Active <FiChevronDown className='icon2'/></td>
            <td>
              <FiChevronRight className='icon'/>
            </td>
          </tr>
          <div className='row-line'></div>
          <tr>
            <td>10</td>
            <td>10/07/2023</td>
            <td>WE123</td>
            <td>James Packer</td>
            <td>Rentals/Vehicle </td>
            <td>Mercedes Benz C300</td>
            <td className='state'>Active <FiChevronDown className='icon2'/></td>
            <td>
              <FiChevronRight className='icon'/>
            </td>
          </tr>
          <div className='row-line'></div>
          <tr>
            <td>11</td>
            <td>10/07/2023</td>
            <td>DE455</td>
            <td>John Fisher</td>
            <td>Rentals/Accommodation </td>
            <td>Kempinski Hotel Gold Coast City Accra</td>
            <td className='state'>Active <FiChevronDown className='icon2'/></td>
            <td>
              <FiChevronRight className='icon'/>
            </td>
          </tr>
          
        
          
        </tbody>
      </table>

      <style>
        {`
            .active-requests-table{
                width: 885px;
                height: 489px;
                position: relative;
                top: 40px;
                border: 0.5px solid #EBEBEB;
                border-radius: 5px;
                padding: 15px;
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
        

            .row-line {
                border-bottom: 1px solid #EBEBEB;
                position: absolute;
                left: -1px;
                margin-top: 3px;
                width: 883px;
            }

           .icon{
            font-size: 16px;
            color: #595959;
            margin-top: 25%;
           }

           .state{
            text-align: center;  
            border: 0.5px solid #CDCDCD;
            height:21px;
            width: 74.85px;
            border-radius: 4px;  
            display: flex;
            justify-content: center;
            align-items: center; 
            margin-top: 10px;     
            }

            .icon2{
                font-size: 16px ;
                position: relative;
                top: 2px;
                padding-left: 10px;
            }
        
        
        `}
      </style>
    </div>
  );
};

export default ActiveTab;
