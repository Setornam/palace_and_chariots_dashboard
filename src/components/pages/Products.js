import React, { useState, useRef } from 'react';
import { FiSearch } from 'react-icons/fi';
import AllProducts from '../tabs/productTabs/AllProducts';
import CreateProduct from '../tabs/productTabs/CreateProduct';

const Products = () => {
  const [activeTab, setActiveTab] = useState(1);
  const searchInputRef = useRef(null);

  const tabData = [
    { id: 1, label: 'All Products' },
    { id: 2, label: 'Create Products' },
  ];

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    if (tabId === 2 && searchInputRef.current) {
      searchInputRef.current.value = '';
      // Remove the search-container class when "Create Products" tab is selected
      document.querySelector('.search-container')?.classList.remove('search-container');
    }
  };

  return (
    <div>
      <div className='customers-container'>
        <div className='top-bar'>
          <div className="heading-container">
            <h1>Products</h1>
          </div>
          <div className={`search-container ${activeTab === 2 ? 'hidden' : ''}`}>
            <div className="search-box">
              <div className="search-icon">
                <FiSearch size={18} color="#8B8B8B" />
              </div>
              <input
                type="text"
                placeholder="Search..."
                className="search-input"
                ref={searchInputRef}
              />
            </div>
          </div>
        </div>
        <div className='table'>
          <div className="tab-content">
            <div className="tab-header">
              <div className="tabs-container">
                {tabData.map((tab) => (
                  <div
                    key={tab.id}
                    className={`tab ${activeTab === tab.id ? 'active-tab' : ''}`}
                    onClick={() => handleTabChange(tab.id)}
                  >
                    {tab.label}
                  </div>
                ))}
              </div>
            </div>
            <div className='table-content'>
            {activeTab === 1 && <AllProducts />}
            {activeTab === 2 && <CreateProduct />}
          </div>
          </div>
          
        </div>
      </div>

            <style jsx>
                {`
                .customers-container{
                    display: block;
                    background-color:#fff;
                    width: 989px;
                    height: 826px;
                    overflow-y: scroll;
                    overflow-x: hidden;
                    scrollbar-width: thin;
                    scrollbar-color: #071EC3 #F0F0F0;
                    position: relative;
                    left: 20px;
                    top: -50px;
                    border-radius:6px;
                    
                }

                .customers-container::-webkit-scrollbar {
                     width: 4px; 
                }

                .customers-container::-webkit-scrollbar-thumb {
                    background-color: #0B41AA;
                    border-radius: 10px;
                }

                .customers-container::-webkit-scrollbar-track {
                    background-color: #cdcdcd;
                    border-radius: 10px;
                }

                .top-bar{
                    display: flex;
                    height: 60px;
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

                .tab-header {
                    display: flex;
                    background-color: #0B41AA;
                    height: 43px;
                    align-items: center;
                    width: 859px;
                    padding: 0 100px 0 30px;

                }
                .tab {
                    color: white;
                    font-size: 14px;
                    font-weight: 400;
                    margin-right: 14.5%;
                    cursor: pointer;
                    transition: color 0.3s;
                    }
                    .tab.active {
                    font-weight: 700;
                }

                .tabs-container{
                    display: flex;
                    width: 100%;
                }

                .active-tab {
                    font-weight: 700;    
                }

                .table {
                        position: relative;
                        top: 20px;
                    }

                    .active-requests-table{
                width: 100%;
                height: 650px;
                position: relative;
                top: 20px;
                border-radius: 5px;
                padding-left: 30px;
                padding-right: 10px;
                background-color: re
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

            .row-line {
                border-bottom: 1px solid #CDCDCD;
                position: absolute;
                margin-top: 3px;
                left: -1px;
                width: 990px;
            }
            
            .hidden {
                display: none;
            }


                
                `}
            </style>
        </div>
    );
};

export default Products;