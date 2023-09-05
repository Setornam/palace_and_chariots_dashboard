import React from 'react';
import {  FiSearch } from 'react-icons/fi';
import {  FiChevronRight, FiChevronDown } from 'react-icons/fi';


const Customers = () => {


    
    return (
        <div>
           <div className='customers-container'>
            <div className='top-bar'>
                <div className="heading-container">
                    <h1>Customers</h1>
                </div>
                <div className='search-container'>
                    <div className="search-box">

                    <div className="search-icon">
                        <FiSearch size={18} color="#8B8B8B" /> {/* Use FiSearch icon */}
                    </div>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="search-input"
                        />
                    
                    </div>
                </div>
            </div>
            <div className='table'>
                <h3>All Customers</h3>
            </div>
            <table className="active-requests-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Country </th>
            <th>City</th>
            <th> Email Address</th>
          </tr>
          <div className='row-line'></div>
        </thead>
        <tbody>
            <tr></tr>
          <tr>
            <td>James Packer</td>
            <td> Ghana </td>
            <td>Accra</td>
            <td>packer@gmail.com</td>
            <td>
              <FiChevronRight className='icon'/>
            </td>
          </tr>
          <tr>
            <td>James Packer</td>
            <td> Ghana </td>
            <td>Accra</td>
            <td>packer@gmail.com</td>
            <td>
              <FiChevronRight className='icon'/>
            </td>
          </tr>
          <tr>
            <td>James Packer</td>
            <td> Ghana </td>
            <td>Accra</td>
            <td>packer@gmail.com</td>
            <td>
              <FiChevronRight className='icon'/>
            </td>
          </tr>
          <tr>
            <td>James Packer</td>
            <td> Ghana </td>
            <td>Accra</td>
            <td>packer@gmail.com</td>
            <td>
              <FiChevronRight className='icon'/>
            </td>
          </tr>
          <tr>
            <td>James Packer</td>
            <td> Ghana </td>
            <td>Accra</td>
            <td>packer@gmail.com</td>
            <td>
              <FiChevronRight className='icon'/>
            </td>
          </tr>
          <tr>
            <td>James Packer</td>
            <td> Ghana </td>
            <td>Accra</td>
            <td>packer@gmail.com</td>
            <td>
              <FiChevronRight className='icon'/>
            </td>
          </tr>
          <tr>
            <td>James Packer</td>
            <td> Ghana </td>
            <td>Accra</td>
            <td>packer@gmail.com</td>
            <td>
              <FiChevronRight className='icon'/>
            </td>
          </tr>
          <tr>
            <td>James Packer</td>
            <td> Ghana </td>
            <td>Accra</td>
            <td>packer@gmail.com</td>
            <td>
              <FiChevronRight className='icon'/>
            </td>
          </tr>
          <tr>
            <td>James Packer</td>
            <td> Ghana </td>
            <td>Accra</td>
            <td>packer@gmail.com</td>
            <td>
              <FiChevronRight className='icon'/>
            </td>
          </tr>
          <tr>
            <td>James Packer</td>
            <td> Ghana </td>
            <td>Accra</td>
            <td>packerzuckberg@gmail.com</td>
            <td>
              <FiChevronRight className='icon'/>
            </td>
          </tr>
          <tr>
            <td>James Packer</td>
            <td> Ghana </td>
            <td>Accra</td>
            <td>packer@gmail.com</td>
            <td>
              <FiChevronRight className='icon'/>
            </td>
          </tr>
          
        
          
        </tbody>
      </table>
        </div>
        

            <style jsx>
                {`
                .customers-container{
                    display: block;
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
                    padding-left: 50px;
                }

                .heading-container h1{
                    font-size: 24px;
                    color: #595959;
                    font-weight: 600;
                    padding-top: 20px;                    
                }

                .search-container{
                    display:flex;
                    justify-content: end;
                    width: 100%;
                    padding-right: 30px;
                }

                .search-box {
                    display: flex;
                    align-items: center;
                    width: 247px;
                    height: 38px;
                    border: 0.50px #CDCDCD solid;
                    border-radius: 5px;
                    margin-top: 30px;
                }

                .search-input {
                    flex: 1;
                    border: none;
                    outline: none;
                    padding: 5px;
                    border-radius: 5px;
                    color: #8B8B8B;
                }

                .search-icon {
                    padding: 5px;
                    background-color: white;
                    border-radius: 0 5px 5px 0;
                    cursor: pointer;
                }

                .search-icon i {
                    font-size: 18px;
                }
                
                .search-input::placeholder {
                    color: #8B8B8B;
                    font-size: 14px;
                    font-weight: 400; 
                }

                .table {
                    height: 43px;
                    width: 989px;
                    background-color: #0B41AA;
                    display: flex;
                    padding-left: 50px;
                }

                .table h3{
                    color: white;
                    justify-content: center;
                    font-size: 14px;
                    font-weight: 700;
                }

                .active-requests-table{
                width: 990px;
                height: 489px;
                position: relative;
                top: 40px;
                border-bottom: 1px solid #CDCDCD ;
                padding-bottom: 30px;
            }

            .active-requests-table th{
                color: #595959;
                font-size: 14px;
                font-weight: 600;
                text-align: left;
                width: 30%;
                padding: 0 20px 0 50px;
                position: relative;
                top: -15px;
            
            }

            .active-requests-table td{
                color: #595959;
                font-size: 14px;
                font-weight: 400;
                padding: 26px 20px 0 50px;

            }

            .row-line {
                border-bottom: 1px solid #EBEBEB;
                position: absolute;
                left: -1px;
                margin-top: 3px;
                width: 990px;
            }

            

            .icon{
                font-size: 16px ;
                position: relative;
                top: 2px;
                padding-left: 10px;
                color: #CDCDCD;
                ;
            }
                    
                
                `}
            </style>
        </div>
    );
};

export default Customers;