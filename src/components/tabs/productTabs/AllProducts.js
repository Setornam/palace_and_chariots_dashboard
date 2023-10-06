import React, { useState, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../auth/firebase';

const AllProducts = () => {

  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 11;

  const fetchProductsData = async (collectionName) => {
    const productsCollection = collection(db, collectionName);
    const snapshot = await getDocs(productsCollection);
    const productsData = snapshot.docs.map((doc) => doc.data());
    return productsData;
  };


  
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

    fetchData();
  }, []);

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  const totalPages = Math.ceil(products.length / rowsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= Math.ceil(products.length / rowsPerPage)) {
      setCurrentPage(newPage);
    }  };

    const pageData = products.slice(startIndex, endIndex);
  
    return (
        <div>
            <table className="active-requests-table">
            <thead>
              <tr>
                <th style={{width: "180px"}}>Product Name</th>
                <th style={{width: "150px"}}>Service </th>
                <th style={{width: "180px"}}>Category</th>
                <th style={{width: "150px"}}>  Price </th>
                <th style={{width: "150px"}}>Discount</th>
                <th style={{width: "150px"}}>Quantity</th>
                <th style={{width: "150px"}}>Status</th>
                <th style={{width: "20px"}}></th>
              </tr>
              <div className='row-line'></div>
            </thead>
            <tbody>

            {pageData.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.service}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>{product.discount}</td>
              <td>{product.quantity}</td>
              <td>{product.status}</td>
              <td>
                <FiChevronRight className='icon' />
              </td>
            </tr>
          ))}


              

             
              
            
              
            </tbody>
          </table>

          <div className="pagination">
        
          
        <FaArrowLeft className='button'
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}/>

        <span>Page {currentPage}</span>
        
          <FaArrowRight className='button'
            disabled={currentPage === Math.ceil(products.length / rowsPerPage)}
          onClick={() => handlePageChange(currentPage + 1)}
          />
        
    </div>
        </div>
      )
    }

export default AllProducts