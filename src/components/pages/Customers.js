import React from 'react';
import CustomersTabContent from '../tabs/cutomersTabs/CustomersTabContent';

const Customers = () => {


    
    return (
        <div className='customers-container'>
            <div className='top-bar'>
                <div className="heading-container">
                    <h1>Customers</h1>
                </div>
                <div className='search-container'>
                    <h2>Search Box</h2>
                </div>
            </div>
            <div className='table'>
                {CustomersTabContent}
            </div>

            <style jsx>
                {`
                .customers-container{
                    display: flex;
                    background-color:#fff;
                    width: 1570px;
                    height: 100%;
                    border-radius:6px;
                }

                .top-bar{
                    display: flex;
                    background-color: red;
                    height: 100px;
                    width: 100%;
                }
                
                .heading-container{
                    width: 50%;
                    padding-left: 100px;
                }

                .heading-container h1{
                    font-size: 24px;
                    color: #595959;
                    font-weight: 600;
                    
                }
                
                
                
                `}
            </style>
        </div>
    );
};

export default Customers;