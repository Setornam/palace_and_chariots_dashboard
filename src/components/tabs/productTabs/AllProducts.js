import React, { useState, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { collection, getDocs,  doc, updateDoc, query, where, } from 'firebase/firestore';
import { db } from '../../auth/firebase';
import ViewProductsTab from './ViewProductsTab';
import ViewProductsTab1 from './ViewProductsTab1';
import ViewProductsTab2 from './ViewProductsTab2';
import ViewProductsTab3 from './ViewProductsTab3';



const AllProducts = ({selectedFilter, searchQuery}) => {

  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTabs, setActiveTabs] = useState([]);  
  const rowsPerPage = 11;

   const fetchProductsData = async (collectionName) => {
    const productsCollection = collection(db, collectionName);
    const snapshot = await getDocs(productsCollection);
    const productsData = snapshot.docs.map((doc) => doc.data());
    return productsData;
    
  };

  const handleTabClick = ( index) => {
    // Check if the tab is not already open
    if (!activeTabs.includes(index)) {
      setActiveTabs([...activeTabs, index]);
    }
  };

  const handleTabClose = (index) => {
    // Remove the closed tab from the activeTabs array
    const updatedTabs = activeTabs.filter((tabIndex) => tabIndex !== index);
    setActiveTabs(updatedTabs);
  };
  

  useEffect(() => {
    // Fetch Data from different collections based on selectedFilter
    const fetchData = async () => {
      let filteredData = [];
  
      if (!selectedFilter) {
        // No filter selected, fetch data from all collections
        const collections = ['accommodation', 'cars', 'houses', 'event-services', 'tourism', 'vehicles', 'security-services'];
        for (const collectionName of collections) {
          const collectionData = await fetchProductsData(collectionName);
          filteredData = [...filteredData, ...collectionData];
        }
      } else {
        // Filter selected, fetch data from the corresponding collection
        const filteredCollectionName = selectedFilter.toLowerCase();
        filteredData = await fetchProductsData(filteredCollectionName);
      }
  
      setProducts(filteredData); // Update the state with filtered data
    };

    

    
  
    fetchData();
  }, [selectedFilter]);

  

  
  useEffect(() => {
    //Fetch Data from different collections
    const fetchData = async () => {
      const accommodationData = await fetchProductsData('accommodation');
      const carsData = await fetchProductsData('cars');
      const housesData = await fetchProductsData('houses');
      const eventServicesData = await fetchProductsData('event-services');
      const tourismData = await fetchProductsData('tourism');
      const vehiclesData = await fetchProductsData('vehicles');
      const securityServicesData = await fetchProductsData('security-services');

      //Combine the data from different collections into a single array
      const allProductsData = [
        ...accommodationData,
        ...carsData,
        ...housesData,
        ...eventServicesData,
        ...tourismData,
        ...vehiclesData,
        ...securityServicesData,
      ];



      setProducts(allProductsData); // Update the state with filtered data
    };

    // Filter the products data based on the selected filter
  const filteredProducts = products.filter((product) => {
    // Customize this filter logic based on your filter criteria
    if (!selectedFilter) {
      return true; // No filter selected, so show all products
    }
    // Example: Filter by category (you can add more filter criteria)
    return product.category === selectedFilter;
  });

    fetchData();
  }, [selectedFilter]);

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= Math.ceil(products.length / rowsPerPage)) {
      setCurrentPage(newPage);
    }  };

    const pageData = products.slice(startIndex, endIndex);
    let totalPages = Math.ceil(pageData.length / rowsPerPage) ;
     totalPages = Math.ceil(totalPages + totalPages) ;
  
    return (
        <div>
            <table className="active-requests-table">
            <thead>
              <tr >
                <th style={{width: "20%"}}>Product Name</th>
                <th style={{width: "15%"}}>Service </th>
                <th style={{width: "15%"}}>Category</th>
                <th style={{width: "10%"}}>  Price </th>
                <th style={{width: "7%"}}>Discount</th>
                <th style={{width: "10%"}}>Quantity</th>
                <th style={{width: "10%"}}>Status</th>
                <th style={{width: "5%"}}></th>
              </tr>
              <div className='row-line'></div>
            </thead>
            <tbody>

            {pageData.map((product, index) => (
            <tr key={index} className='table-row'>
              <td>{product.name ? product.name : "N/A"}</td>
              <td>{product.service ? product.service : "N/A"}</td>
              <td>{product.category ? product.category : "N/A"}</td>
              <td>{product.price ? product.price : "N/A"}</td>
              <td>{product.discount ? product.discount : "N/A"}</td>
              <td>{product.quantity ? product.quantity : "N/A"}</td>
              <td>{product.product_status ? product.product_status : "N/A"}</td>
              <td>
              <FiChevronRight className='icon'
                onClick={() => handleTabClick(index)} />
              </td>
            </tr>
          ))}


              

             
              
            
              
            </tbody>
          </table>

          <div className='tabs-content'>
  {activeTabs.map((tabIndex) => {
    const productData = products[tabIndex];

    if (productData) {
      const requestCategory = (productData.category || '').toLowerCase();

      if (requestCategory === 'hotel' || requestCategory === 'apartment') {
        return (
          <ViewProductsTab
            key={tabIndex}
            product={productData}
            onClose={() => handleTabClose(tabIndex)}
            tabContainerClassName="custom-tab-container"
            topBarClassName='custom-top-bar'
            formContainerClassName='custom-form-container'
            category={requestCategory}
            products={productData.products}
          />
        );
      } else if (requestCategory === 'saloon') {
        return (
          <ViewProductsTab1
            key={tabIndex}
            product={productData}
            onClose={() => handleTabClose(tabIndex)}
            tabContainerClassName="custom-tab-container"
            topBarClassName='custom-top-bar'
            formContainerClassName='custom-form-container'
            category={requestCategory}
            products={productData.products}
          />
        );

      } else if (requestCategory === 'event-service') {
        return (
          <ViewProductsTab2
            key={tabIndex}
            product={productData}
            onClose={() => handleTabClose(tabIndex)}
            tabContainerClassName="custom-tab-container"
            topBarClassName='custom-top-bar'
            formContainerClassName='custom-form-container'
            category={requestCategory}
            products={productData.products}
          />
        );

      }else {
        return (
          <ViewProductsTab3
            key={tabIndex}
            onClose={() => handleTabClose(tabIndex)}
            tabContainerClassName="custom-tab-container"
            topBarClassName='custom-top-bar'
            formContainerClassName='custom-form-container'
            category={requestCategory}
            products={productData.products}
          />
        );
      }
    } else {
      // Handle the case where productData is undefined or doesn't have a category
      return null;
    }
  })}
</div>



          <div className="pagination">
        
          
        <FaArrowLeft className='button'
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}/>

        <span>Page {currentPage} </span>
        
          <FaArrowRight className='button'
            disabled={currentPage === Math.ceil(products.length / rowsPerPage)}
          onClick={() => handlePageChange(currentPage + 1)}
          />
        
    </div>



        </div>
      )
    }
    

export default AllProducts
