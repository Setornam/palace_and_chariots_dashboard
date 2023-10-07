import React, { useState, useRef } from 'react';
import { FiSearch } from 'react-icons/fi';
import { BiSolidDownArrow} from 'react-icons/bi';
import AllProducts from '../tabs/productTabs/AllProducts';
import CreateProduct from '../tabs/productTabs/CreateProduct';


const Products = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('All Products');
  const [isEditingLabel, setIsEditingLabel] = useState(false);
  const searchInputRef = useRef(null);

  const tabData = [
    { id: 1, label: 'All Products' },
    { id: 2, label: 'Create Products' },
    
  ];

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    if (tabId === 2 && searchInputRef.current) {
      searchInputRef.current.value = '';
      setShowFilterDropdown(false);
    }
  };

  const handleLabelClick = () => {
    // Enable label editing mode when the label is clicked
    setIsEditingLabel(true);
  };

  const handleLabelChange = (event) => {
    // Handle changes to the label (e.g., when selecting a different option)
    setSelectedFilter(event.target.value);
  };

  const handleLabelBlur = () => {
    // Disable label editing mode when the select field loses focus
    setIsEditingLabel(false);
  };


  const handleFilterButtonClick = () => {
    setShowFilterDropdown(!showFilterDropdown);
  };

  const handleFilterOptionClick = (filterOption) => {
    setSelectedFilter(filterOption);
    setShowFilterDropdown(false);
    // You can add logic to filter products based on the selected filter here
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
                        {tab.id !== 1 ? tab.label : activeTab === 1 ? '' : tab.label}

                  </div>
                  
                ))}
                
              </div>
              
              {activeTab === 1 && (
                <div className="filter-container">
                  <button className="filter-button" onClick={handleFilterButtonClick}>
                    <BiSolidDownArrow />
                  </button>
                  {showFilterDropdown && (
                    <div className="filter-dropdown">
                      <div className="filter-option" onClick={() => handleFilterOptionClick('All Products')}>
                        All Products
                      </div>
                      <div className="filter-option" onClick={() => handleFilterOptionClick('Vehicles')}>
                        Vehicles
                      </div>
                      <div className="filter-option" onClick={() => handleFilterOptionClick('Accommodation')}>
                        Accommodation
                      </div>
                      <div className="filter-option" onClick={() => handleFilterOptionClick('Sales')}>
                        Sales
                      </div>
                      <div className="filter-option" onClick={() => handleFilterOptionClick('Travel and Tourism')}>
                        Travel and Tourism
                      </div>
                      <div className="filter-option" onClick={() => handleFilterOptionClick('Security')}>
                        Security
                      </div>
                    </div>
                  )}
                  {selectedFilter && <div className="selected-filter">{selectedFilter}</div>}
                </div>
              )}
              

              
            </div>
            <div className='table-content'>
            {activeTab === 1 && selectedFilter === 'All Products' && <AllProducts />} {/* Pass searchQuery as a prop */}
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
                    width: 77.27vw;
                    height: 95.2vh;
                    overflow-y: scroll;
                    overflow-x: hidden;
                    scrollbar-width: thin;
                    scrollbar-color: #071EC3 #F0F0F0;
                    position: relative;
                    left: 1.56vw;
                    top: -5.76vh;
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
                    height: 6.91vh;
                    width: 100%;
                    border-radius: 6px 6px 0 0;
                }
                
                .heading-container{
                    width: 50%;
                    padding-left: 2.34vw;
                }

                .heading-container h1{
                    font-size: 24px;
                    color: #595959;
                    font-weight: 600;
                    padding-top: 2.3vh; 
                }

                .search-container{
                    display:flex;
                    justify-content: end;
                    width: 100%;
                    padding-right: 2.34vw;
                }

                .search-box {
                    display: flex;
                    align-items: center;
                    width: 19.3vw;
                    height: 4.4vh;
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
                    height: 4.95vh;
                    align-items: center;
                    width: 67.10vw;
                    padding: 0 7.81vw 0 2.34vw;

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
                    margin-left: 14.5%;    
                }

                .table {
                     position: relative;
                     top: 2.3vh;
                }

                .active-requests-table{
                width: 100%;
                height: 74.88vh;
                position: relative;
                top: 2.3vh;
                border-radius: 5px;
                padding-left: 2.34vw;
                padding-right: 0.78vw;
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
            cursor: pointer;
           }

           .state{
            text-align: center;  
            border: 0.5px solid #CDCDCD;
            height:2.42vh;
            width: 5.85vw;
            border-radius: 4px;  
            display: flex;
            justify-content: center;
            align-items: center; 
            margin-top: 1.15vh;     
            }

            .icon2{
                font-size: 16px ;
                position: relative;
                top: 0.23vh;
                padding-left: 0.78vw;
                
            }

            .row-line {
                border-bottom: 1px solid #CDCDCD;
                position: absolute;
                margin-top: 0.35vh;
                left: -1px;
                width: 77.34vw;
            }
            
            .hidden {
                display: none;
            }

            .pagination {
              display: flex;
              color: #595959;
              justify-content: end;
              align-items: center;
              margin-top: 15px;
              margin-right: 3.5%;
              font-weight: 600;
              font-size: 11px;
            }

            .pagination .button {
              margin: 0 5px;
              cursor: pointer;
              background-color: white;
              width: 11px;
              display: flex;
              border: 2px solid #CDCDCD;
              color: #CDCDCD;
              border-radius: 5px;
              padding: 1px 5px;
              justify-content: center;
              align-items: center;
              font-size: 22px;
            }

            .filter-container {
            position: absolute;
            left: -5%;
            top: 0%;

          }

          .filter-button {
            background-color: #0B41AA;
            position: relative;
            top: 20px;
            left: 240px;
            color: white;
            width: 10px;
            font-size: 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            z-index: 1000000000;
          }

          .filter-dropdown {
            position: absolute;
            top: 4.87vh;
            right: -42px;
            width: 161px;
            height: 241.48px;
            background-color: #E7E7F4;
            border: none;
            border-radius: 0 0 5px 5px;
            z-index: 1000;
          }

          .filter-option {
            padding: 10.5px 12px;
            cursor: pointer;
            border-top: 1px solid #CDCDCD;
            transition: background-color 0.3s;
          }

          .filter-option:hover {
            font-weight: 600;
          }

          .selected-filter {
            margin-top: 5.5px;
            width: 200px;
            {/* background-color: red; */}
            font-weight: bold;
            color: white;
            position: relative;
            left: 100px;
            top: -10px;
            font-weight: 700;
            
          }
          
          

            


                
                `}
            </style>
        </div>
    );
};

export default Products;