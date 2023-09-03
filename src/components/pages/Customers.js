import React from 'react';
import {  FiSearch } from 'react-icons/fi';
import CustomersTabContent from '../tabs/cutomersTabs/CustomersTabContent';

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
                
                `}
            </style>
        </div>
        </div>
    );
};

export default Customers;